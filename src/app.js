// CCNA Automation Exam Simulator - Boson ExSim-style platform

(function() {
  'use strict';

  window.addEventListener('error', function(e) {
    console.error('Runtime error:', e.error);
    const el = document.getElementById('errorBanner');
    if (el) {
      el.textContent = 'Runtime error: ' + (e.message || 'Unknown');
      el.classList.remove('hidden');
    }
  });

  function initApp() {
    const errorBanner = document.getElementById('errorBanner');
    if (errorBanner) errorBanner.classList.add('hidden');

    if (typeof DEVNET_QUESTIONS === 'undefined') {
      if (errorBanner) {
        errorBanner.textContent = 'Failed to load question data. Please refresh.';
        errorBanner.classList.remove('hidden');
      }
      return;
    }

    try {
      const ALL = DEVNET_QUESTIONS;

      // ================= Exam catalog (Boson-style) =================
      const EXAMS = [
        { id: 'full',      name: 'Full Practice Exam',     desc: 'All 6 domains, exam-weighted, 90 questions',     count: 90,  minutes: 120, domains: null, shuffle: true },
        { id: 'quick',     name: 'Quick Drill',            desc: 'Fast 30-question mixed quiz',                    count: 30,  minutes: 40,  domains: null, shuffle: true },
        { id: 'software',  name: 'Software Dev & Design',  desc: 'Section 1.0 — 15% of the exam',                  count: 25,  minutes: 30,  domains: ['Software Development and Design'], shuffle: true },
        { id: 'apis',      name: 'Understanding APIs',     desc: 'Section 2.0 — 20% of the exam',                  count: 30,  minutes: 40,  domains: ['Understanding and Using APIs'], shuffle: true },
        { id: 'platforms', name: 'Cisco Platforms',        desc: 'Section 3.0 — 15% of the exam',                  count: 25,  minutes: 30,  domains: ['Cisco Platforms and Development'], shuffle: true },
        { id: 'deploy',    name: 'Deployment & Security',  desc: 'Section 4.0 — 15% of the exam',                  count: 28,  minutes: 35,  domains: ['Application Deployment and Security'], shuffle: true },
        { id: 'infra',     name: 'Infra & Automation',     desc: 'Section 5.0 — 20% of the exam',                  count: 35,  minutes: 45,  domains: ['Infrastructure and Automation'], shuffle: true },
        { id: 'network',   name: 'Network Fundamentals',   desc: 'Section 6.0 — 15% of the exam',                  count: 25,  minutes: 30,  domains: ['Network Fundamentals'], shuffle: true },
        { id: 'marathon',  name: 'Marathon Mode',          desc: 'Every question in the bank, no timer',           count: 'all', minutes: 0, domains: null, shuffle: true }
      ];

      class DevNetSimulator {
        constructor() {
          this.exam = null;            // active exam config
          this.questions = [];         // active question set
          this.order = [];             // index mapping
          this.currentQuestionIndex = 0;
          this.userAnswers = [];       // per active question: number|null or array (dnd)
          this.userDnD = [];           // per active question: {zone: [itemIdx,...]}
          this.score = 0;
          this.timer = null;
          this.timeRemaining = 0;
          this.isExamMode = false;
          this.answered = false;
          this.lastResults = null;

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

        // ---------- Setup ----------
        init() {
          const totalQuestionsEl = document.getElementById('totalQuestions');
          if (totalQuestionsEl) totalQuestionsEl.textContent = ALL.length;
          this.renderExamCards();
          this.initTheme();

          document.addEventListener('keydown', (e) => {
            if (this.currentMode !== 'exam' && this.currentMode !== 'study') return;
            const q = this.getCurrentQuestion();
            if (!q) return;
            if (q.type === 'drag-and-drop') return; // no keyboard shortcuts for DnD
            if (e.key >= '1' && e.key <= '6') {
              const i = parseInt(e.key, 10) - 1;
              if (i < q.options.length) this.selectAnswer(i);
            } else if (e.key === 'ArrowRight') this.nextQuestion();
            else if (e.key === 'ArrowLeft') this.prevQuestion();
          });
        }

        initTheme() {
          const themeToggle = document.getElementById('themeToggle');
          const sunIcon = document.getElementById('sunIcon');
          const moonIcon = document.getElementById('moonIcon');
          const savedTheme = localStorage.getItem('theme');
          if (savedTheme === 'light') {
            document.documentElement.classList.remove('dark');
            if (sunIcon) sunIcon.classList.remove('hidden');
            if (moonIcon) moonIcon.classList.add('hidden');
          }
          if (themeToggle) {
            themeToggle.addEventListener('click', () => {
              document.documentElement.classList.toggle('dark');
              const isDark = document.documentElement.classList.contains('dark');
              localStorage.setItem('theme', isDark ? 'dark' : 'light');
              if (sunIcon) sunIcon.classList.toggle('hidden', isDark);
              if (moonIcon) moonIcon.classList.toggle('hidden', !isDark);
            });
          }
        }

        renderExamCards() {
          const grid = document.getElementById('examGrid');
          if (!grid) return;
          grid.innerHTML = '';
          EXAMS.forEach(exam => {
            const actual = exam.count === 'all' ? ALL.length : Math.min(exam.count, exam.domains ? ALL.filter(q => exam.domains.includes(q.domain)).length : ALL.length);
            const card = document.createElement('div');
            card.className = 'group relative p-6 rounded-2xl border border-devnet-700/50 bg-devnet-800/50 backdrop-blur-sm hover:border-devnet-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-devnet-500/10';
            card.innerHTML = `
              <div class="relative space-y-3">
                <div class="flex items-center justify-between">
                  <h3 class="text-lg font-bold text-white">${exam.name}</h3>
                  <span class="px-2 py-1 text-xs rounded-full bg-devnet-700/50 text-devnet-200">${actual} Q</span>
                </div>
                <p class="text-sm text-gray-400">${exam.desc}</p>
                <div class="flex flex-wrap gap-2">
                  ${exam.minutes ? `<span class="px-2 py-1 text-xs rounded-full bg-devnet-700/50 text-devnet-200">${exam.minutes} min</span>` : '<span class="px-2 py-1 text-xs rounded-full bg-devnet-700/50 text-devnet-200">No timer</span>'}
                  <span class="px-2 py-1 text-xs rounded-full bg-devnet-700/50 text-devnet-200">Randomized</span>
                </div>
                <div class="flex gap-2 pt-1">
                  <button class="flex-1 px-4 py-2 rounded-lg bg-gradient-to-r from-devnet-500 to-devnet-600 text-white text-sm font-semibold hover:from-devnet-400 hover:to-devnet-500 transition-all" data-exam="${exam.id}" data-mode="exam">Exam</button>
                  <button class="flex-1 px-4 py-2 rounded-lg border border-devnet-600/50 text-devnet-200 text-sm hover:bg-devnet-700/30 transition-colors" data-exam="${exam.id}" data-mode="study">Study</button>
                </div>
              </div>
            `;
            card.querySelectorAll('button').forEach(btn => {
              btn.addEventListener('click', () => {
                const examCfg = EXAMS.find(e2 => e2.id === btn.dataset.exam);
                this.startExamSession(examCfg, btn.dataset.mode === 'exam');
              });
            });
            grid.appendChild(card);
          });
        }

        // ---------- Session ----------
        shuffle(arr) {
          const a = arr.slice();
          for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
          }
          return a;
        }

        pickQuestions(exam) {
          let pool = exam.domains ? ALL.filter(q => exam.domains.includes(q.domain)) : ALL.slice();
          pool = this.shuffle(pool);
          if (exam.count !== 'all') pool = pool.slice(0, Math.min(exam.count, pool.length));
          // Randomize answer/option order per session (Boson-style: never memorize positions)
          return pool.map(q => this.randomizeQuestion(q));
        }

        randomizeQuestion(q) {
          const copy = Object.assign({}, q);
          if (q.type === 'multiple-choice' && Array.isArray(q.options)) {
            const indices = this.shuffle(q.options.map((_, i) => i));
            copy.options = indices.map(i => q.options[i]);
            copy.correct = indices.indexOf(q.correct);
            copy.optionsOriginal = q.options;
          } else if (q.type === 'drag-and-drop') {
            // Shuffle both the draggable items and the zone order
            const itemMap = this.shuffle(q.dragItems.map((_, i) => i));
            copy.dragItems = itemMap.map(i => q.dragItems[i]);
            const remap = oldIdx => itemMap.indexOf(oldIdx);
            copy.solution = {};
            Object.keys(q.solution).forEach(zone => {
              copy.solution[zone] = q.solution[zone].map(remap);
            });
            copy.dropZones = this.shuffle(q.dropZones.slice());
          }
          return copy;
        }

        startExamSession(exam, isExamMode) {
          this.exam = exam;
          this.currentMode = isExamMode ? 'exam' : 'study';
          this.isExamMode = isExamMode;
          this.questions = this.pickQuestions(exam);
          this.order = this.questions.map((_, i) => i);
          this.currentQuestionIndex = 0;
          this.userAnswers = new Array(this.questions.length).fill(null);
          this.userDnD = new Array(this.questions.length).fill(null);
          this.score = 0;
          this.answered = false;
          this.timeRemaining = isExamMode ? exam.minutes * 60 : 0;

          Object.keys(this.domains).forEach(d => { this.domains[d].questions = 0; this.domains[d].correct = 0; });

          document.getElementById('examNameBadge').textContent = exam.name;
          this.showScreen('quizScreen');

          const timerDisplay = document.getElementById('timerDisplay');
          if (this.timer) clearInterval(this.timer);
          if (isExamMode && exam.minutes > 0) {
            timerDisplay.classList.remove('hidden');
            timerDisplay.classList.remove('timer-warning');
            this.startTimer();
          } else {
            timerDisplay.classList.add('hidden');
          }
          this.renderQuestion();
        }

        showScreen(id) {
          document.getElementById('homeScreen').classList.add('hidden');
          document.getElementById('resultsScreen').classList.add('hidden');
          document.getElementById('reviewScreen').classList.add('hidden');
          document.getElementById('quizScreen').classList.add('hidden');
          const el = document.getElementById(id);
          if (el) el.classList.remove('hidden');
          window.scrollTo(0, 0);
        }

        startTimer() {
          const timerDisplay = document.getElementById('timerDisplay');
          if (!timerDisplay) return;
          this.timer = setInterval(() => {
            this.timeRemaining--;
            const m = Math.floor(this.timeRemaining / 60);
            const s = this.timeRemaining % 60;
            timerDisplay.textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
            if (this.timeRemaining < 300) timerDisplay.classList.add('timer-warning');
            if (this.timeRemaining <= 0) this.finishExam();
          }, 1000);
        }

        getCurrentQuestion() { return this.questions[this.currentQuestionIndex]; }

        // ---------- Question rendering ----------
        renderQuestion() {
          const question = this.getCurrentQuestion();
          if (!question) return;
          const total = this.questions.length;

          const num = document.getElementById('currentQuestionNum');
          const tot = document.getElementById('totalQuestionsInQuiz');
          const bar = document.getElementById('progressBar');
          if (num) num.textContent = this.currentQuestionIndex + 1;
          if (tot) tot.textContent = total;
          if (bar) bar.style.width = `${((this.currentQuestionIndex + 1) / total) * 100}%`;

          const badge = document.getElementById('domainBadge');
          if (badge) {
            badge.textContent = question.domain;
            const dd = this.domains[question.domain];
            badge.className = `domain-badge ${dd ? dd.color : 'bg-devnet-600/30 text-devnet-200'}`;
          }

          const typeBadge = document.getElementById('typeBadge');
          if (typeBadge) typeBadge.textContent = question.type === 'drag-and-drop' ? 'DRAG & DROP' : 'MULTIPLE CHOICE';

          const content = document.getElementById('questionContent');
          content.innerHTML = '';
          const diffColors = { easy: 'bg-green-500/20 text-green-300', medium: 'bg-yellow-500/20 text-yellow-300', hard: 'bg-red-500/20 text-red-300' };

          const head = document.createElement('div');
          head.className = 'space-y-4';
          head.innerHTML = `
            <div class="flex items-center gap-2 flex-wrap">
              <span class="domain-badge ${diffColors[question.difficulty] || 'bg-gray-500/20 text-gray-300'}">${question.difficulty}</span>
            </div>
            <p class="text-lg sm:text-xl text-gray-100 leading-relaxed whitespace-pre-wrap">${this.highlightCode(question.question)}</p>
          `;
          content.appendChild(head);

          if (question.code) {
            const block = this.createCodeBlock(question.code, question.codeLanguage || 'text', question.codeLanguage || 'code');
            content.appendChild(block);
          }

          if (question.type === 'drag-and-drop') {
            this.renderDragAndDrop(question, content);
          } else {
            const opts = document.getElementById('optionsContainer');
            opts.innerHTML = '';
            opts.classList.remove('hidden');
            question.options.forEach((option, index) => {
              const btn = document.createElement('button');
              btn.className = 'option-btn w-full text-left p-4 rounded-xl border-2 border-devnet-700/50 hover:border-devnet-500/50 hover:bg-devnet-700/20 transition-all duration-200';
              btn.onclick = () => this.selectAnswer(index);
              const selected = this.userAnswers[this.currentQuestionIndex] === index;
              if (selected) btn.classList.add('border-devnet-400', 'bg-devnet-700/30');
              btn.innerHTML = `
                <div class="flex items-start gap-3">
                  <span class="flex-shrink-0 w-8 h-8 rounded-lg bg-devnet-700/50 flex items-center justify-center text-devnet-300 font-mono text-sm">${String.fromCharCode(65 + index)}</span>
                  <span class="flex-1 text-gray-200">${this.highlightCode(option)}</span>
                </div>`;
              opts.appendChild(btn);
            });
          }

          if (typeof Prism !== 'undefined') {
            Prism.highlightAllUnder(content);
          }

          // Feedback
          const fb = document.getElementById('feedbackContainer');
          if (!this.isExamMode && this.hasAnswer(this.currentQuestionIndex)) {
            this.showFeedback();
          } else if (fb) fb.classList.add('hidden');

          const prevBtn = document.getElementById('prevBtn');
          const nextBtn = document.getElementById('nextBtn');
          const finishBtn = document.getElementById('finishBtn');
          if (prevBtn) prevBtn.disabled = this.currentQuestionIndex === 0;

          if (this.currentQuestionIndex === total - 1) {
            nextBtn.classList.add('hidden');
            finishBtn.classList.remove('hidden');
            finishBtn.textContent = this.isExamMode ? 'Finish Exam' : 'View Results';
          } else {
            nextBtn.classList.remove('hidden');
            finishBtn.classList.add('hidden');
          }
          this.answered = false;
        }

        hasAnswer(idx) {
          if (this.userAnswers[idx] !== null && this.userAnswers[idx] !== undefined) return true;
          const d = this.userDnD[idx];
          if (d && Object.values(d).some(arr => arr && arr.length)) return true;
          return false;
        }

        // ---------- Drag & Drop ----------
        renderDragAndDrop(question, container) {
          const opts = document.getElementById('optionsContainer');
          opts.innerHTML = '';
          opts.classList.add('hidden');

          const wrap = document.createElement('div');
          wrap.className = 'space-y-4';

          const saved = this.userDnD[this.currentQuestionIndex];
          const zoneState = saved ? JSON.parse(JSON.stringify(saved)) : {};
          question.dropZones.forEach(z => { if (!zoneState[z]) zoneState[z] = []; });

          // Bank of unplaced items
          const placed = new Set(Object.values(zoneState).flat());
          const bank = question.dragItems.map((item, i) => ({ item, i })).filter(x => !placed.has(x.i));

          wrap.innerHTML = `
            <p class="text-sm text-gray-400">Drag each item into its zone (or tap an item, then tap a zone).</p>
            <div id="dndBank" class="flex flex-wrap gap-2 min-h-16 p-3 rounded-xl border-2 border-dashed border-devnet-600/50 bg-devnet-900/40"></div>
            <div id="dndZones" class="grid sm:grid-cols-2 gap-3"></div>
          `;
          container.appendChild(wrap);

          const bankEl = wrap.querySelector('#dndBank');
          const zonesEl = wrap.querySelector('#dndZones');

          const render = () => {
            bankEl.innerHTML = '<span class="text-xs text-gray-500 self-center mr-1">Items:</span>';
            const placed2 = new Set(Object.values(zoneState).flat());
            question.dragItems.forEach((item, i) => {
              if (placed2.has(i)) return;
              const chip = document.createElement('div');
              chip.className = 'dnd-chip';
              chip.textContent = item;
              chip.draggable = true;
              chip.dataset.idx = i;
              this.wireDndChip(chip, zoneState, question, render);
              bankEl.appendChild(chip);
            });

            zonesEl.innerHTML = '';
            question.dropZones.forEach(zone => {
              const zoneDiv = document.createElement('div');
              zoneDiv.className = 'dnd-zone';
              zoneDiv.dataset.zone = zone;
              zoneDiv.innerHTML = `<p class="text-sm font-semibold text-devnet-200 mb-2">${zone}</p><div class="zone-items space-y-2"></div>`;
              const itemsEl = zoneDiv.querySelector('.zone-items');
              (zoneState[zone] || []).forEach(idx => {
                const chip = document.createElement('div');
                chip.className = 'dnd-chip dnd-placed';
                chip.textContent = question.dragItems[idx];
                chip.draggable = true;
                chip.dataset.idx = idx;
                chip.title = 'Click × or drag back to remove';
                const x = document.createElement('span');
                x.className = 'dnd-remove';
                x.textContent = '×';
                x.onclick = (ev) => { ev.stopPropagation(); delete zoneState[zone] && (zoneState[zone] = zoneState[zone].filter(v => v !== idx)); this.userDnD[this.currentQuestionIndex] = zoneState; render(); };
                chip.appendChild(x);
                this.wireDndChip(chip, zoneState, question, render, zone);
                itemsEl.appendChild(chip);
              });
              this.wireDndZone(zoneDiv, zone, zoneState, question, render);
              zonesEl.appendChild(zoneDiv);
            });
          };
          render();
          this.userDnD[this.currentQuestionIndex] = zoneState;
        }

        wireDndChip(chip, zoneState, question, render, fromZone) {
          chip.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', JSON.stringify({ idx: parseInt(chip.dataset.idx, 10), from: fromZone || null }));
            chip.classList.add('dragging');
          });
          chip.addEventListener('dragend', () => chip.classList.remove('dragging'));
          // Tap-to-place fallback for touch devices
          chip.addEventListener('click', () => {
            if (fromZone) return; // placed chips removed via ×
            const pending = this._pendingDnD;
            if (pending) {
              // place into pending zone
              zoneState[pending].push(parseInt(chip.dataset.idx, 10));
              this._pendingDnD = null;
              this.userDnD[this.currentQuestionIndex] = zoneState;
              render();
            } else {
              this._pendingChip = { idx: parseInt(chip.dataset.idx, 10) };
              chip.classList.add('dnd-selected');
              document.querySelectorAll('.dnd-zone').forEach(z => z.classList.add('dnd-await'));
            }
          });
        }

        wireDndZone(zoneDiv, zone, zoneState, question, render) {
          zoneDiv.addEventListener('dragover', (e) => { e.preventDefault(); zoneDiv.classList.add('dnd-over'); });
          zoneDiv.addEventListener('dragleave', () => zoneDiv.classList.remove('dnd-over'));
          zoneDiv.addEventListener('drop', (e) => {
            e.preventDefault();
            zoneDiv.classList.remove('dnd-over');
            const data = JSON.parse(e.dataTransfer.getData('text/plain'));
            if (data.from) zoneState[data.from] = zoneState[data.from].filter(v => v !== data.idx);
            if (!zoneState[zone].includes(data.idx)) zoneState[zone].push(data.idx);
            this.userDnD[this.currentQuestionIndex] = zoneState;
            render();
          });
          zoneDiv.addEventListener('click', () => {
            if (this._pendingChip !== undefined && this._pendingChip !== null) {
              if (!zoneState[zone].includes(this._pendingChip.idx)) zoneState[zone].push(this._pendingChip.idx);
              this._pendingChip = null;
              this._pendingDnD = zone;
              this.userDnD[this.currentQuestionIndex] = zoneState;
              render();
              document.querySelectorAll('.dnd-zone').forEach(z => z.classList.remove('dnd-await'));
            } else {
              this._pendingDnD = zone;
              zoneDiv.classList.add('dnd-await');
            }
          });
        }

        dndIsCorrect(question, state) {
          if (!state) return false;
          for (const zone of question.dropZones) {
            const expected = question.solution[zone] || [];
            const got = state[zone] || [];
            if (expected.length !== got.length) return false;
            for (const idx of expected) if (!got.includes(idx)) return false;
          }
          return true;
        }

        dndRenderFeedback(question, state, feedbackEl) {
          const correct = this.dndIsCorrect(question, state);
          let html = `
            <div class="flex items-center gap-2">
              <svg class="w-5 h-5 ${correct ? 'text-green-400' : 'text-red-400'}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              <span class="font-semibold ${correct ? 'text-green-300' : 'text-red-300'}">${correct ? 'Correct' : 'Incorrect - correct placement shown below'}</span>
            </div>
            <p class="text-gray-300 text-sm leading-relaxed">${question.explanation}</p>
            <div class="grid sm:grid-cols-2 gap-2 mt-2">`;
          question.dropZones.forEach(zone => {
            html += `<div class="p-3 rounded-lg border border-devnet-600/30 bg-devnet-900/60"><p class="text-xs text-devnet-300 font-semibold mb-1">${zone}</p><ul class="text-sm text-gray-300 list-disc list-inside">`;
            (question.solution[zone] || []).forEach(idx => { html += `<li>${question.dragItems[idx]}</li>`; });
            html += '</ul></div>';
          });
          html += '</div>';
          feedbackEl.innerHTML = html;
          feedbackEl.classList.remove('hidden');
        }

        // ---------- Answering ----------
        selectAnswer(index) {
          if (this.answered && this.isExamMode) return;
          const question = this.getCurrentQuestion();
          if (!question || question.type === 'drag-and-drop') return;

          const options = document.querySelectorAll('.option-btn');
          options.forEach((btn, i) => {
            btn.classList.remove('border-devnet-400', 'bg-devnet-700/30');
            if (i === index) btn.classList.add('border-devnet-400', 'bg-devnet-700/30');
          });

          this.userAnswers[this.currentQuestionIndex] = index;

          if (!this.isExamMode) {
            this.answered = true;
            this.showFeedback();
          }
        }

        computeScore() {
          let s = 0;
          Object.keys(this.domains).forEach(d => { this.domains[d].questions = 0; this.domains[d].correct = 0; });
          this.questions.forEach((q, i) => {
            const dom = this.domains[q.domain];
            const ua = this.userAnswers[i];
            if (q.type === 'drag-and-drop') {
              const state = this.userDnD[i];
              if (state && Object.values(state).some(a => a && a.length)) {
                dom.questions++;
                if (this.dndIsCorrect(q, state)) { s++; dom.correct++; }
              }
            } else if (ua !== null && ua !== undefined) {
              dom.questions++;
              if (ua === q.correct) { s++; dom.correct++; }
            }
          });
          return s;
        }

        showFeedback() {
          const question = this.getCurrentQuestion();
          if (!question) return;
          const fbContainer = document.getElementById('feedbackContainer');
          const fbContent = document.getElementById('feedbackContent');
          if (!fbContainer || !fbContent) return;

          if (question.type === 'drag-and-drop') {
            this.dndRenderFeedback(question, this.userDnD[this.currentQuestionIndex], fbContent);
            fbContainer.classList.remove('hidden');
            return;
          }

          const userAnswer = this.userAnswers[this.currentQuestionIndex];
          fbContainer.classList.remove('hidden');
          const isCorrect = userAnswer === question.correct;
          fbContent.innerHTML = `
            <div class="space-y-3 fade-in">
              <div class="flex items-center gap-2">
                <svg class="w-5 h-5 ${isCorrect ? 'text-green-400' : 'text-red-400'}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                <span class="font-semibold ${isCorrect ? 'text-green-300' : 'text-red-300'}">${isCorrect ? 'Correct' : `Incorrect - Correct answer: ${String.fromCharCode(65 + question.correct)}`}</span>
              </div>
              <p class="text-gray-300 text-sm leading-relaxed">${question.explanation}</p>
              ${question.code ? `<details class="mt-3"><summary class="text-sm text-devnet-300 cursor-pointer hover:text-devnet-200">View reference code</summary><div class="mt-2" id="fbCode"></div></details>` : ''}
            </div>`;
          if (question.code) {
            const slot = document.getElementById('fbCode');
            if (slot) {
              slot.appendChild(this.createCodeBlock(question.code, question.codeLanguage || 'text', question.codeLanguage || 'code'));
              if (typeof Prism !== 'undefined') Prism.highlightAllUnder(slot);
            }
          }

          const options = document.querySelectorAll('.option-btn');
          options.forEach((btn, i) => {
            if (i === question.correct) btn.classList.add('correct');
            else if (i === userAnswer && userAnswer !== question.correct) btn.classList.add('incorrect');
            btn.disabled = true;
          });
        }

        // ---------- Navigation ----------
        prevQuestion() {
          if (this.currentQuestionIndex > 0) { this.currentQuestionIndex--; this.renderQuestion(); }
        }

        nextQuestion() {
          if (this.currentQuestionIndex < this.questions.length - 1) { this.currentQuestionIndex++; this.renderQuestion(); }
        }

        // ---------- Finish / Review ----------
        finishExam() {
          if (this.timer) clearInterval(this.timer);
          const total = this.questions.length;
          const score = this.computeScore();
          const attempted = this.questions.reduce((acc, q, i) => acc + (this.hasAnswer(i) ? 1 : 0), 0);
          const percentage = total ? Math.round((score / total) * 100) : 0;
          const passed = percentage >= 82; // Boson-style indicative pass mark ~825/1000

          this.lastResults = { score, total, attempted, percentage, passed };

          this.showScreen('resultsScreen');
          const el = (id) => document.getElementById(id);
          if (el('scoreText')) el('scoreText').textContent = passed ? 'PASS — Estimated score: ' + Math.min(1000, 300 + Math.round(percentage * 7)) + '/1000' : 'FAIL — Estimated score: ' + Math.max(300, 300 + Math.round(percentage * 7)) + '/1000';
          const badge = el('passBadge');
          if (badge) {
            badge.className = `inline-flex items-center gap-2 px-4 py-2 rounded-full border ${passed ? 'bg-green-500/10 border-green-500/40' : 'bg-red-500/10 border-red-500/40'}`;
          }
          const icon = el('passIcon');
          if (icon) icon.setAttribute('class', `w-5 h-5 ${passed ? 'text-green-400' : 'text-red-400'}`);

          const circle = el('scoreCircle');
          const circ = 2 * Math.PI * 88;
          if (circle) setTimeout(() => { circle.style.strokeDashoffset = circ - (percentage / 100) * circ; }, 100);
          if (el('scorePercentage')) el('scorePercentage').textContent = `${percentage}%`;
          if (el('scoreAttempted')) el('scoreAttempted').textContent = `${score} correct of ${attempted} answered (${total} total)`;

          const breakdown = el('domainBreakdown');
          if (breakdown) {
            breakdown.innerHTML = '';
            Object.entries(this.domains).forEach(([name, data]) => {
              if (!data.questions) return;
              const pct = Math.round((data.correct / data.questions) * 100);
              const card = document.createElement('div');
              card.className = 'p-4 rounded-xl border border-devnet-700/50 bg-devnet-800/50 fade-in';
              card.innerHTML = `
                <div class="space-y-3">
                  <div class="flex items-center justify-between">
                    <h4 class="font-medium text-white text-sm">${name}</h4>
                    <span class="text-xs text-gray-400">${data.correct}/${data.questions}</span>
                  </div>
                  <div class="h-2 bg-devnet-900 rounded-full overflow-hidden">
                    <div class="h-full ${pct >= 70 ? 'bg-green-500' : pct >= 40 ? 'bg-yellow-500' : 'bg-red-500'} transition-all duration-1000" style="width: ${pct}%"></div>
                  </div>
                  <p class="text-xs text-gray-400">${pct}%</p>
                </div>`;
              breakdown.appendChild(card);
            });
          }
        }

        showReview() {
          const review = document.getElementById('reviewList');
          if (!review) return;
          review.innerHTML = '';
          this.questions.forEach((q, i) => {
            let ok = false;
            let answered = false;
            let yourAnswer = '—';
            if (q.type === 'drag-and-drop') {
              const st = this.userDnD[i];
              answered = st && Object.values(st).some(a => a && a.length);
              ok = this.dndIsCorrect(q, st);
              yourAnswer = answered ? (ok ? 'Correctly placed' : 'Misplaced') : 'Not answered';
            } else {
              const ua = this.userAnswers[i];
              answered = ua !== null && ua !== undefined;
              ok = ua === q.correct;
              yourAnswer = answered ? String.fromCharCode(65 + ua) + '. ' + q.options[ua].slice(0, 60) : 'Not answered';
            }

            const item = document.createElement('div');
            item.className = `p-4 rounded-xl border ${ok ? 'border-green-500/30 bg-green-500/5' : answered ? 'border-red-500/30 bg-red-500/5' : 'border-gray-600/30 bg-devnet-800/30'}`;
            item.innerHTML = `
              <div class="flex items-start gap-3 cursor-pointer" data-idx="${i}">
                <span class="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${ok ? 'bg-green-500/20 text-green-300' : answered ? 'bg-red-500/20 text-red-300' : 'bg-gray-600/30 text-gray-400'}">${ok ? '✓' : answered ? '✗' : '?'}</span>
                <div class="flex-1 min-w-0">
                  <p class="text-sm text-gray-200">Q${i + 1}. ${q.question.slice(0, 140)}${q.question.length > 140 ? '…' : ''}</p>
                  <p class="text-xs text-gray-500 mt-1">Your answer: ${yourAnswer}${!ok && q.type !== 'drag-and-drop' ? ' · Correct: ' + String.fromCharCode(65 + q.correct) : ''}</p>
                </div>
                <span class="text-xs text-devnet-300">Review →</span>
              </div>`;
            item.querySelector('[data-idx]').addEventListener('click', () => {
              this.showScreen('quizScreen');
              this.currentQuestionIndex = i;
              this.renderQuestion();
              // in study mode reveal; in exam mode allow re-inspection (answers locked)
              if (!this.isExamMode) this.showFeedback();
            });
            review.appendChild(item);
          });
          this.showScreen('reviewScreen');
          this._reviewReturn = 'resultsScreen';
        }

        backToResults() {
          this.showScreen('resultsScreen');
        }

        goHome() {
          if (this.timer) clearInterval(this.timer);
          this.showScreen('homeScreen');
        }

        // ---------- Utilities ----------
        highlightCode(text) {
          if (!text) return '';
          return String(text)
            .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
            .replace(/`([^`]+)`/g, '<code class="px-1.5 py-0.5 rounded bg-devnet-900 text-devnet-300 text-sm font-mono">$1</code>');
        }

        createCodeBlock(code, language, label) {
          const container = document.createElement('div');
          container.className = 'code-block';

          const header = document.createElement('div');
          header.className = 'code-header';
          header.innerHTML = `<span>${label}</span><button class="copy-btn">Copy</button>`;
          header.querySelector('.copy-btn').addEventListener('click', (e) => {
            navigator.clipboard.writeText(code).then(() => {
              e.target.textContent = 'Copied!';
              setTimeout(() => { e.target.textContent = 'Copy'; }, 2000);
            }).catch(() => {});
          });

          const pre = document.createElement('pre');
          const codeEl = document.createElement('code');
          codeEl.className = 'language-' + language;
          codeEl.textContent = code;
          pre.appendChild(codeEl);

          container.appendChild(header);
          container.appendChild(pre);
          return container;
        }
      }

      const app = new DevNetSimulator();
      window.app = app;
      document.getElementById('reviewAnswersBtn').addEventListener('click', () => app.showReview());
      document.getElementById('backToResultsBtn').addEventListener('click', () => app.backToResults());
      document.getElementById('backHomeBtn').addEventListener('click', () => app.goHome());
      document.getElementById('newExamBtn').addEventListener('click', () => app.goHome());
    } catch (e) {
      console.error('Init error:', e);
      const el = document.getElementById('errorBanner');
      if (el) {
        el.textContent = 'Init error: ' + (e.message || 'Unknown');
        el.classList.remove('hidden');
      }
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }
})();
