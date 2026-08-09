// DevNet Associate Simulator - Main Application Logic

class DevNetSimulator {
  constructor() {
    this.questions = DEVNET_QUESTIONS;
    this.currentMode = null;
    this.currentQuestionIndex = 0;
    this.userAnswers = new Array(this.questions.length).fill(null);
    this.score = 0;
    this.timer = null;
    this.timeRemaining = 60 * 60; // 60 minutes in seconds
    this.isExamMode = false;
    this.answered = false;

    this.domains = {
      'Software Development and Design': { key: 'software', color: 'domain-software', questions: 0, correct: 0 },
      'Understanding and Using APIs': { key: 'apis', color: 'domain-apis', questions: 0, correct: 0 },
      'Cisco Platforms and Development': { key: 'platforms', color: 'domain-platforms', questions: 0, correct: 0 },
      'Application Deployment and Security': { key: 'deployment', color: 'domain-deployment', questions: 0, correct: 0 },
      'Infrastructure and Automation': { key: 'infrastructure', color: 'domain-infrastructure', questions: 0, correct: 0 },
      'Network Fundamentals': { key: 'network', color: 'domain-network', questions: 0, correct: 0 }
    };

    this.init();
  }

  init() {
    // Update stats
    document.getElementById('totalQuestions').textContent = this.questions.length;

    // Theme toggle
    const themeToggle = document.getElementById('themeToggle');
    const sunIcon = document.getElementById('sunIcon');
    const moonIcon = document.getElementById('moonIcon');

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      document.documentElement.classList.remove('dark');
      sunIcon.classList.remove('hidden');
      moonIcon.classList.add('hidden');
    }

    themeToggle.addEventListener('click', () => {
      document.documentElement.classList.toggle('dark');
      const isDark = document.documentElement.classList.contains('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      sunIcon.classList.toggle('hidden', isDark);
      moonIcon.classList.toggle('hidden', !isDark);
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (this.currentMode === 'exam' || this.currentMode === 'study') {
        if (e.key >= '1' && e.key <= '4') {
          const optionIndex = parseInt(e.key) - 1;
          if (optionIndex < this.getCurrentQuestion().options.length) {
            this.selectAnswer(optionIndex);
          }
        } else if (e.key === 'ArrowRight') {
          this.nextQuestion();
        } else if (e.key === 'ArrowLeft') {
          this.prevQuestion();
        }
      }
    });
  }

  getCurrentQuestion() {
    return this.questions[this.currentQuestionIndex];
  }

  startExam() {
    this.currentMode = 'exam';
    this.isExamMode = true;
    this.currentQuestionIndex = 0;
    this.userAnswers = new Array(this.questions.length).fill(null);
    this.score = 0;
    this.timeRemaining = 60 * 60; // 60 minutes

    // Reset domain stats
    Object.keys(this.domains).forEach(domain => {
      this.domains[domain].questions = 0;
      this.domains[domain].correct = 0;
    });

    document.getElementById('homeScreen').classList.add('hidden');
    document.getElementById('resultsScreen').classList.add('hidden');
    document.getElementById('quizScreen').classList.remove('hidden');
    document.getElementById('timerDisplay').classList.remove('hidden');

    this.startTimer();
    this.renderQuestion();
  }

  startStudy() {
    this.currentMode = 'study';
    this.isExamMode = false;
    this.currentQuestionIndex = 0;
    this.userAnswers = new Array(this.questions.length).fill(null);
    this.score = 0;

    // Reset domain stats
    Object.keys(this.domains).forEach(domain => {
      this.domains[domain].questions = 0;
      this.domains[domain].correct = 0;
    });

    document.getElementById('homeScreen').classList.add('hidden');
    document.getElementById('resultsScreen').classList.add('hidden');
    document.getElementById('quizScreen').classList.remove('hidden');
    document.getElementById('timerDisplay').classList.add('hidden');

    this.renderQuestion();
  }

  startTimer() {
    const timerDisplay = document.getElementById('timerDisplay');
    this.timer = setInterval(() => {
      this.timeRemaining--;
      const minutes = Math.floor(this.timeRemaining / 60);
      const seconds = this.timeRemaining % 60;
      timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

      // Warning color when under 5 minutes
      if (this.timeRemaining < 300) {
        timerDisplay.classList.add('timer-warning');
      }

      if (this.timeRemaining <= 0) {
        this.finishExam();
      }
    }, 1000);
  }

  renderQuestion() {
    const question = this.getCurrentQuestion();
    const totalQuestions = this.questions.length;

    // Update progress
    document.getElementById('currentQuestionNum').textContent = this.currentQuestionIndex + 1;
    document.getElementById('totalQuestionsInQuiz').textContent = totalQuestions;
    document.getElementById('progressBar').style.width = `${((this.currentQuestionIndex + 1) / totalQuestions) * 100}%`;

    // Domain badge
    const domainBadge = document.getElementById('domainBadge');
    domainBadge.textContent = question.domain;
    domainBadge.className = `domain-badge ${this.domains[question.domain].color}`;

    // Question content
    const questionContent = document.getElementById('questionContent');
    questionContent.innerHTML = '';

    // Difficulty badge
    const difficultyColors = {
      'easy': 'bg-green-500/20 text-green-300',
      'medium': 'bg-yellow-500/20 text-yellow-300',
      'hard': 'bg-red-500/20 text-red-300'
    };

    const questionText = document.createElement('div');
    questionText.className = 'space-y-4';
    questionText.innerHTML = `
      <div class="flex items-center gap-2">
        <span class="domain-badge ${difficultyColors[question.difficulty]}">${question.difficulty}</span>
      </div>
      <p class="text-lg sm:text-xl text-gray-100 leading-relaxed whitespace-pre-wrap">${this.highlightCode(question.question)}</p>
    `;
    questionContent.appendChild(questionText);

    // Code snippets
    if (question.codeSnippets && question.codeSnippets.length > 0) {
      const codeContainer = document.createElement('div');
      codeContainer.className = 'space-y-3';
      question.codeSnippets.forEach(lang => {
        const snippet = this.getCodeSnippet(lang, question.tags);
        codeContainer.appendChild(this.createCodeBlock(snippet.code, lang, snippet.language));
      });
      questionContent.appendChild(codeContainer);
    }

    // Options
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';
    question.options.forEach((option, index) => {
      const optionBtn = document.createElement('button');
      optionBtn.className = `option-btn w-full text-left p-4 rounded-xl border-2 border-devnet-700/50 hover:border-devnet-500/50 hover:bg-devnet-700/20 transition-all duration-200`;
      optionBtn.onclick = () => this.selectAnswer(index);

      const isSelected = this.userAnswers[question.id - 1] === index;
      if (isSelected) {
        optionBtn.classList.add('border-devnet-400', 'bg-devnet-700/30');
      }

      optionBtn.innerHTML = `
        <div class="flex items-start gap-3">
          <span class="flex-shrink-0 w-8 h-8 rounded-lg bg-devnet-700/50 flex items-center justify-center text-devnet-300 font-mono text-sm">
            ${String.fromCharCode(65 + index)}
          </span>
          <span class="flex-1 text-gray-200">${option}</span>
        </div>
      `;
      optionsContainer.appendChild(optionBtn);
    });

    // Feedback container (study mode)
    const feedbackContainer = document.getElementById('feedbackContainer');
    const feedbackContent = document.getElementById('feedbackContent');

    if (!this.isExamMode && this.userAnswers[question.id - 1] !== null) {
      this.showFeedback();
    } else {
      feedbackContainer.classList.add('hidden');
    }

    // Navigation buttons
    document.getElementById('prevBtn').disabled = this.currentQuestionIndex === 0;

    if (this.currentQuestionIndex === totalQuestions - 1) {
      document.getElementById('nextBtn').classList.add('hidden');
      document.getElementById('finishBtn').classList.remove('hidden');
      if (!this.isExamMode) {
        document.getElementById('finishBtn').textContent = 'View Results';
      }
    } else {
      document.getElementById('nextBtn').classList.remove('hidden');
      document.getElementById('finishBtn').classList.add('hidden');
    }

    this.answered = false;
  }

  selectAnswer(index) {
    if (this.answered && this.isExamMode) return;

    const question = this.getCurrentQuestion();
    const previousAnswer = this.userAnswers[question.id - 1];

    // Update UI
    const options = document.querySelectorAll('.option-btn');
    options.forEach((btn, i) => {
      btn.classList.remove('border-devnet-400', 'bg-devnet-700/30');
      if (i === index) {
        btn.classList.add('border-devnet-400', 'bg-devnet-700/30');
      }
    });

    this.userAnswers[question.id - 1] = index;

    // Update domain stats
    this.domains[question.domain].questions++;

    if (index === question.correct) {
      this.score++;
      this.domains[question.domain].correct++;
    }

    if (!this.isExamMode) {
      this.answered = true;
      this.showFeedback();
    }
  }

  showFeedback() {
    const question = this.getCurrentQuestion();
    const userAnswer = this.userAnswers[question.id - 1];
    const feedbackContainer = document.getElementById('feedbackContainer');
    const feedbackContent = document.getElementById('feedbackContent');

    feedbackContainer.classList.remove('hidden');
    feedbackContent.innerHTML = `
      <div class="space-y-3 fade-in">
        <div class="flex items-center gap-2">
          <svg class="w-5 h-5 ${userAnswer === question.correct ? 'text-green-400' : 'text-red-400'}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          <span class="font-semibold ${userAnswer === question.correct ? 'text-green-300' : 'text-red-300'}">
            ${userAnswer === question.correct ? 'Correct' : `Incorrect - Correct answer: ${String.fromCharCode(65 + question.correct)}`}
          </span>
        </div>
        <p class="text-gray-300 text-sm leading-relaxed">${question.explanation}</p>
        ${question.codeSnippets.length > 0 ? `
          <details class="mt-3">
            <summary class="text-sm text-devnet-300 cursor-pointer hover:text-devnet-200">View reference code</summary>
            <div class="mt-2 space-y-2">
              ${question.codeSnippets.map(lang => {
                const snippet = this.getCodeSnippet(lang, question.tags);
                return this.createCodeBlock(snippet.code, lang, snippet.language).outerHTML;
              }).join('')}
            </div>
          </details>
        ` : ''}
      </div>
    `;

    // Highlight correct/incorrect options
    const options = document.querySelectorAll('.option-btn');
    options.forEach((btn, i) => {
      if (i === question.correct) {
        btn.classList.add('correct');
      } else if (i === userAnswer && userAnswer !== question.correct) {
        btn.classList.add('incorrect');
      }
      btn.disabled = true;
    });
  }

  prevQuestion() {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
      this.renderQuestion();
    }
  }

  nextQuestion() {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
      this.renderQuestion();
    }
  }

  finishExam() {
    if (this.timer) {
      clearInterval(this.timer);
    }

    const totalQuestions = this.questions.length;
    const percentage = Math.round((this.score / totalQuestions) * 100);

    document.getElementById('quizScreen').classList.add('hidden');
    document.getElementById('resultsScreen').classList.remove('hidden');

    // Score text
    document.getElementById('scoreText').textContent = `${this.score} out of ${totalQuestions} (${percentage}%)`;

    // Animated score circle
    const scoreCircle = document.getElementById('scoreCircle');
    const circumference = 2 * Math.PI * 88;
    const offset = circumference - (percentage / 100) * circumference;
    setTimeout(() => {
      scoreCircle.style.strokeDashoffset = offset;
    }, 100);

    document.getElementById('scorePercentage').textContent = `${percentage}%`;

    // Domain breakdown
    const domainBreakdown = document.getElementById('domainBreakdown');
    domainBreakdown.innerHTML = '';

    Object.entries(this.domains).forEach(([domainName, data]) => {
      if (data.questions > 0) {
        const domainPercentage = Math.round((data.correct / data.questions) * 100);
        const domainCard = document.createElement('div');
        domainCard.className = 'p-4 rounded-xl border border-devnet-700/50 bg-devnet-800/50 fade-in';
        domainCard.innerHTML = `
          <div class="space-y-3">
            <div class="flex items-center justify-between">
              <h4 class="font-medium text-white text-sm">${domainName}</h4>
              <span class="text-xs text-gray-400">${data.correct}/${data.questions}</span>
            </div>
            <div class="h-2 bg-devnet-900 rounded-full overflow-hidden">
              <div class="h-full ${domainPercentage >= 70 ? 'bg-green-500' : domainPercentage >= 40 ? 'bg-yellow-500' : 'bg-red-500'} transition-all duration-1000" style="width: ${domainPercentage}%"></div>
            </div>
            <p class="text-xs text-gray-400">${domainPercentage}%</p>
          </div>
        `;
        domainBreakdown.appendChild(domainCard);
      }
    });
  }

  restart() {
    this.currentQuestionIndex = 0;
    this.userAnswers = new Array(this.questions.length).fill(null);
    this.score = 0;
    this.answered = false;

    // Reset domain stats
    Object.keys(this.domains).forEach(domain => {
      this.domains[domain].questions = 0;
      this.domains[domain].correct = 0;
    });

    document.getElementById('resultsScreen').classList.add('hidden');
    document.getElementById('quizScreen').classList.remove('hidden');

    if (this.isExamMode) {
      this.startTimer();
    }

    this.renderQuestion();
  }

  goHome() {
    document.getElementById('quizScreen').classList.add('hidden');
    document.getElementById('resultsScreen').classList.add('hidden');
    document.getElementById('homeScreen').classList.remove('hidden');

    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  highlightCode(text) {
    // Simple code highlighting for inline code
    return text.replace(/`([^`]+)`/g, '<code class="px-1.5 py-0.5 rounded bg-devnet-900 text-devnet-300 text-sm font-mono">$1</code>');
  }

  getCodeSnippet(language, tags) {
    const snippets = {
      'python': {
        language: 'Python',
        code: `import requests\n\n# Example: DNA Center authentication\nurl = "https://dna-center.example.com/dna/system/api/v1/auth/token"\npayload = {"username": "admin", "password": "password"}\nresponse = requests.post(url, json=payload, verify=False)\ntoken = response.json()["Token"]\n\n# Use token for subsequent requests\nheaders = {"X-Auth-Token": token}\n`
      },
      'json': {
        language: 'JSON',
        code: `{\n  "name": "webhook-subscription",\n  "eventURL": "https://automation.example.com/webhook",\n  "resourceType": "Network-Wireless-SSID",\n  "filter": {\n    "wirelessSSID": "Corp-WiFi"\n  }\n}`
      },
      'yaml': {
        language: 'YAML',
        code: `---\n- name: Configure interface on IOS XE\n  hosts: routers\n  gather_facts: no\n  tasks:\n    - name: Configure GigabitEthernet0/1\n      ios_config:\n        lines:\n          - description Uplink to Core\n          - ip address 10.0.0.1 255.255.255.0\n          - no shutdown\n        parents: interface GigabitEthernet0/1`
      },
      'dockerfile': {
        language: 'Dockerfile',
        code: `FROM python:3.9-slim\n\nWORKDIR /app\n\nCOPY requirements.txt .\nRUN pip install --no-cache-dir -r requirements.txt\n\nCOPY . .\n\nCMD ["python", "app.py"]`
      },
      'restconf': {
        language: 'RESTCONF',
        code: `# Retrieve interface operational data\nGET /restconf/data/ietf-interfaces:interfaces-state\n\nHeaders:\n  Accept: application/yang-data+json\n  Authorization: Basic <base64-credentials>`
      },
      'netconf': {
        language: 'NETCONF',
        code: `<?xml version="1.0" encoding="UTF-8"?>\n<rpc message-id="101"\n     xmlns="urn:ietf:params:xml:ns:netconf:base:1.0">\n  <get>\n    <filter>\n      <interfaces-state xmlns="urn:ietf:params:xml:ns:yang:ietf-interfaces"/>\n    </filter>\n  </get>\n</rpc>`
      }
    };

    return snippets[language] || { language: language.toUpperCase(), code: '// Code snippet not available' };
  }

  createCodeBlock(code, language, label) {
    const container = document.createElement('div');
    container.className = 'code-block';

    const header = document.createElement('div');
    header.className = 'code-header';
    header.innerHTML = `<span>${label}</span><button class="copy-btn" onclick="app.copyCode(this)">Copy</button>`;

    const pre = document.createElement('pre');
    const codeEl = document.createElement('code');
    codeEl.className = 'language-' + language;
    codeEl.textContent = code;

    pre.appendChild(codeEl);
    container.appendChild(header);
    container.appendChild(pre);

    return container;
  }

  copyCode(button) {
    const code = button.nextElementSibling.textContent;
    navigator.clipboard.writeText(code).then(() => {
      button.textContent = 'Copied!';
      setTimeout(() => {
        button.textContent = 'Copy';
      }, 2000);
    });
  }
}

// Initialize app
const app = new DevNetSimulator();
