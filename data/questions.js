const DEVNET_QUESTIONS = [
  // ==================== SOFTWARE DEVELOPMENT AND DESIGN (15%) ====================
  {
    id: 1,
    domain: "Software Development and Design",
    domainKey: "software",
    difficulty: "medium",
    question: "Which design pattern is best suited for creating a single instance of a class that manages a connection pool to Cisco DNA Center?",
    options: [
      "Factory Pattern",
      "Singleton Pattern",
      "Observer Pattern",
      "Strategy Pattern"
    ],
    correct: 1,
    explanation: "The Singleton Pattern ensures a class has only one instance and provides a global point of access to it. For connection pool management, Singleton prevents multiple redundant connections and ensures resource efficiency.",
    codeSnippets: [],
    tags: ["design-patterns", "oop", "dna-center"]
  },
  {
    id: 2,
    domain: "Software Development and Design",
    domainKey: "software",
    difficulty: "medium",
    question: "In Python, what is the output of the following code?\n```python\nclass NetworkDevice:\n    def __init__(self, ip):\n        self.__ip = ip\n\n    @property\n    def ip(self):\n        return self.__ip\n\ndevice = NetworkDevice('192.168.1.1')\nprint(device.ip)\nprint(device.__ip)\n```",
    options: [
      "192.168.1.1 followed by AttributeError",
      "AttributeError followed by 192.168.1.1",
      "192.168.1.1 followed by 192.168.1.1",
      "AttributeError followed by AttributeError"
    ],
    correct: 0,
    explanation: "The @property decorator creates a getter for the private attribute __ip. device.ip returns the value, but device.__ip raises AttributeError due to Python name mangling.",
    codeSnippets: ["python"],
    tags: ["python", "oop", "encapsulation"]
  },
  {
    id: 3,
    domain: "Software Development and Design",
    domainKey: "software",
    difficulty: "hard",
    question: "A developer needs to handle multiple API responses from Cisco Meraki (JSON), Cisco IOS XE (XML via NETCONF), and YAML configuration files. Which Python library combination is MOST appropriate?",
    options: [
      "json and xml.etree.ElementTree",
      "json, xml.etree.ElementTree, and PyYAML",
      "requests and BeautifulSoup",
      "pandas and numpy"
    ],
    correct: 1,
    explanation: "json handles Meraki JSON, xml.etree.ElementTree parses NETCONF XML, and PyYAML handles YAML configs. requests fetches APIs but doesn't parse formats. BeautifulSoup is for HTML/XML scraping, not programmatic API parsing.",
    codeSnippets: ["python", "json", "yaml"],
    tags: ["python", "data-formats", "parsing"]
  },
  {
    id: 4,
    domain: "Software Development and Design",
    domainKey: "software",
    difficulty: "easy",
    question: "What does the 'S' in SOLID principles stand for, and what is its primary goal?",
    options: [
      "Single Responsibility: A class should have only one reason to change",
      "Scalability: Systems should scale horizontally",
      "Synchronization: Thread-safe operations",
      "Simplicity: Code should be as simple as possible"
    ],
    correct: 0,
    explanation: "Single Responsibility Principle (SRP) states that a class or module should have only one reason to change. In network automation, this means separating configuration parsing, API communication, and data storage into distinct modules.",
    codeSnippets: [],
    tags: ["solid", "design-principles", "architecture"]
  },
  {
    id: 5,
    domain: "Software Development and Design",
    domainKey: "software",
    difficulty: "medium",
    question: "Which Python data structure is MOST efficient for checking if an IP address exists in a large list of 100,000 addresses when performing repeated lookups?",
    options: [
      "List",
      "Tuple",
      "Set",
      "Dictionary"
    ],
    correct: 2,
    explanation: "Sets use hash tables, providing O(1) average-case lookup time versus O(n) for lists/tuples. For 100,000 IPs with repeated membership checks, a set is dramatically faster.",
    codeSnippets: ["python"],
    tags: ["python", "data-structures", "performance"]
  },
  {
    id: 6,
    domain: "Software Development and Design",
    domainKey: "software",
    difficulty: "medium",
    question: "Which HTTP status code indicates that a request was successfully processed and the response contains the requested resource?",
    options: [
      "200 OK",
      "201 Created",
      "204 No Content",
      "301 Moved Permanently"
    ],
    correct: 0,
    explanation: "200 OK is the standard response for successful HTTP requests. 201 Created is for successful creation requests. 204 No Content is for successful requests with no response body. 301 is for redirection.",
    codeSnippets: [],
    tags: ["http", "status-codes", "rest"]
  },
  {
    id: 7,
    domain: "Software Development and Design",
    domainKey: "software",
    difficulty: "easy",
    question: "In Python, which module is commonly used for making HTTP requests to interact with REST APIs?",
    options: [
      "urllib",
      "requests",
      "http",
      "socket"
    ],
    correct: 1,
    explanation: "The requests library is the de facto standard for making HTTP requests in Python. It provides a simple API for HTTP/1.1 and is widely used for REST API interactions, including Cisco platform APIs.",
    codeSnippets: ["python"],
    tags: ["python", "http", "requests"]
  },

  // ==================== UNDERSTANDING AND USING APIS (20%) ====================
  {
    id: 8,
    domain: "Understanding and Using APIs",
    domainKey: "apis",
    difficulty: "easy",
    question: "In a RESTful API, which HTTP method is idempotent and SHOULD be used when updating a specific resource without changing the overall state beyond the update?",
    options: [
      "POST",
      "PUT",
      "PATCH",
      "DELETE"
    ],
    correct: 1,
    explanation: "PUT is idempotent—making the same request multiple times produces the same result. It replaces the entire resource at a known URI. PATCH is also used for updates but is not strictly idempotent.",
    codeSnippets: [],
    tags: ["rest", "http", "api-design"]
  },
  {
    id: 9,
    domain: "Understanding and Using APIs",
    domainKey: "apis",
    difficulty: "medium",
    question: "What is the primary difference between RESTCONF and NETCONF when configuring Cisco IOS XE devices?",
    options: [
      "RESTCONF uses HTTP/HTTPS, NETCONF uses SSH",
      "RESTCONF is proprietary to Cisco, NETCONF is an IETF standard",
      "NETCONF cannot retrieve operational data, RESTCONF can",
      "RESTCONF uses XML exclusively, NETCONF uses JSON"
    ],
    correct: 0,
    explanation: "RESTCONF is an IETF standard (RFC 8040) that uses HTTP/HTTPS with standard REST methods, making it firewall-friendly. NETCONF uses SSH or TLS as a transport layer with its own RPC model.",
    codeSnippets: ["restconf", "yaml"],
    tags: ["restconf", "netconf", "ios-xe", "ietf"]
  },
  {
    id: 10,
    domain: "Understanding and Using APIs",
    domainKey: "apis",
    difficulty: "hard",
    question: "A Cisco Meraki API call returns HTTP 429 Too Many Requests. Which header indicates when the client can retry, and what is the recommended action?",
    options: [
      "Retry-After header; wait the specified seconds before retrying",
      "X-RateLimit-Reset; immediately retry",
      "X-Request-ID; check the request log",
      "WWW-Authenticate; re-authenticate with API key"
    ],
    correct: 0,
    explanation: "HTTP 429 indicates rate limiting. The Retry-After header tells the client when to retry. Immediate retry worsens the problem. WWW-Authenticate is for 401/403 auth challenges.",
    codeSnippets: ["python"],
    tags: ["meraki", "rate-limiting", "http", "error-handling"]
  },
  {
    id: 11,
    domain: "Understanding and Using APIs",
    domainKey: "apis",
    difficulty: "medium",
    question: "When using the Cisco DNA Center APIs, what is the purpose of the 'X-Auth-Token' header?",
    options: [
      "To specify the API version",
      "To authenticate the request using a bearer token",
      "To indicate the content type",
      "To enable CORS for browser-based requests"
    ],
    correct: 1,
    explanation: "X-Auth-Token carries the bearer token obtained from the DNA Center authentication endpoint. It's analogous to Authorization: Bearer <token>. The Content-Type header specifies the data format.",
    codeSnippets: ["python"],
    tags: ["dna-center", "authentication", "headers"]
  },
  {
    id: 12,
    domain: "Understanding and Using APIs",
    domainKey: "apis",
    difficulty: "easy",
    question: "Which HTTP status code range indicates client errors (e.g., malformed request, invalid authentication)?",
    options: [
      "1xx",
      "2xx",
      "3xx",
      "4xx"
    ],
    correct: 3,
    explanation: "4xx status codes (400-499) indicate client errors: 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 429 Too Many Requests.",
    codeSnippets: [],
    tags: ["http", "status-codes", "rest"]
  },
  {
    id: 13,
    domain: "Understanding and Using APIs",
    domainKey: "apis",
    difficulty: "medium",
    question: "In a Python script using the requests library, which method should be used to send JSON data in the request body with proper Content-Type header?",
    options: [
      "requests.post(url, data=json.dumps(payload))",
      "requests.post(url, json=payload)",
      "requests.post(url, headers={'Content-Type': 'application/json'}, data=payload)",
      "requests.post(url, files=payload)"
    ],
    correct: 1,
    explanation: "requests.post(url, json=payload) automatically serializes the payload to JSON and sets Content-Type: application/json. Option A requires manual JSON serialization and doesn't set the header automatically.",
    codeSnippets: ["python"],
    tags: ["python", "requests", "http", "json"]
  },
  {
    id: 14,
    domain: "Understanding and Using APIs",
    domainKey: "apis",
    difficulty: "medium",
    question: "What is the primary advantage of using asynchronous programming (asyncio) when making multiple API calls to Cisco platforms?",
    options: [
      "Simpler code syntax",
      "Better error handling",
      "Concurrent execution without blocking",
      "Stronger type checking"
    ],
    correct: 2,
    explanation: "Asynchronous programming allows multiple API calls to run concurrently without blocking the main thread. This is especially useful when interacting with multiple Cisco devices or platforms simultaneously, reducing total execution time.",
    codeSnippets: ["python"],
    tags: ["python", "asyncio", "async", "performance"]
  },

  // ==================== CISCO PLATFORMS AND DEVELOPMENT (15%) ====================
  {
    id: 15,
    domain: "Cisco Platforms and Development",
    domainKey: "platforms",
    difficulty: "easy",
    question: "Which Cisco platform provides a cloud-based dashboard for managing Meraki devices (MR, MS, MX, MV) via REST APIs?",
    options: [
      "Cisco DNA Center",
      "Cisco Meraki Dashboard",
      "Cisco FMC",
      "Cisco Prime Infrastructure"
    ],
    correct: 1,
    explanation: "The Meraki Dashboard (dashboard.meraki.com) is the cloud-based management platform for all Meraki products (MR access points, MS switches, MX security appliances, MV cameras).",
    codeSnippets: [],
    tags: ["meraki", "dashboard", "platforms"]
  },
  {
    id: 16,
    domain: "Cisco Platforms and Development",
    domainKey: "platforms",
    difficulty: "medium",
    question: "In Cisco DNA Center, what is the difference between 'intent-based networking' and traditional policy-based management?",
    options: [
      "Intent-based uses business intent translated to network policies; traditional uses manual CLI/SNMP",
      "Intent-based is only for wireless; traditional covers all layers",
      "Intent-based requires more manual configuration than traditional",
      "There is no difference; they are the same approach"
    ],
    correct: 0,
    explanation: "Intent-based networking (IBN) in DNA Center allows administrators to define high-level business policies which the system translates into device configurations. Traditional management requires manual per-device CLI, SNMP, or static ACLs.",
    codeSnippets: [],
    tags: ["dna-center", "intent-based", "policy"]
  },
  {
    id: 17,
    domain: "Cisco Platforms and Development",
    domainKey: "platforms",
    difficulty: "medium",
    question: "Which Cisco Webex Teams (now Webex) API endpoint would you use to retrieve a list of all rooms a user is a member of?",
    options: [
      "GET /v1/rooms",
      "GET /v1/memberships",
      "POST /v1/rooms",
      "GET /v1/people"
    ],
    correct: 1,
    explanation: "GET /v1/memberships retrieves memberships, which link people to rooms. To find all rooms a user is in, you filter memberships by personId.",
    codeSnippets: ["python"],
    tags: ["webex", "api", "rest"]
  },
  {
    id: 18,
    domain: "Cisco Platforms and Development",
    domainKey: "platforms",
    difficulty: "hard",
    question: "When automating Cisco UCS Manager (UCSM) with Python, which library provides the XML API interface for managing service profiles and chassis configuration?",
    options: [
      "ucsmsdk",
      "requests",
      "netmiko",
      "pyats"
    ],
    correct: 0,
    explanation: "ucsmsdk is Cisco's official Python SDK for UCS Manager, wrapping the UCS XML API for managing service profiles, policies, chassis, and fabric interconnects.",
    codeSnippets: ["python"],
    tags: ["ucs", "ucsm", "xml-api", "python"]
  },
  {
    id: 19,
    domain: "Cisco Platforms and Development",
    domainKey: "platforms",
    difficulty: "medium",
    question: "Which Cisco platform uses the 'AppHosting' API to deploy containerized applications (Docker containers) directly on Catalyst 9000 switches?",
    options: [
      "Cisco DNA Center",
      "Cisco Meraki",
      "Cisco IOS XE",
      "Cisco NX-OS"
    ],
    correct: 2,
    explanation: "Cisco IOS XE (Catalyst 9000 series) supports App Hosting, allowing Docker containers to run on the switch itself via the Application Hosting API or CLI.",
    codeSnippets: ["dockerfile", "yaml"],
    tags: ["ios-xe", "app-hosting", "docker", "containers"]
  },
  {
    id: 20,
    domain: "Cisco Platforms and Development",
    domainKey: "platforms",
    difficulty: "easy",
    question: "Which Cisco platform provides APIs for managing wireless LAN controllers and access points in enterprise networks?",
    options: [
      "Cisco DNA Center",
      "Cisco Meraki",
      "Cisco Wireless LAN Controllers (WLC)",
      "Cisco ISE"
    ],
    correct: 2,
    explanation: "Cisco Wireless LAN Controllers (WLC) manage access points and wireless networks. They provide APIs for automation, though DNA Center and Meraki also offer wireless management capabilities.",
    codeSnippets: [],
    tags: ["wireless", "wlc", "platforms"]
  },
  {
    id: 21,
    domain: "Cisco Platforms and Development",
    domainKey: "platforms",
    difficulty: "medium",
    question: "What is the purpose of the Cisco DNA Center 'Assurance' feature in network management?",
    options: [
      "To provide real-time network analytics and health monitoring",
      "To configure device firmware updates",
      "To manage user authentication and authorization",
      "To automate software image management"
    ],
    correct: 0,
    explanation: "DNA Center Assurance provides real-time analytics, client health monitoring, and network health insights. It uses telemetry data to detect issues and provide actionable intelligence for network operations.",
    codeSnippets: [],
    tags: ["dna-center", "assurance", "monitoring"]
  },

  // ==================== APPLICATION DEPLOYMENT AND SECURITY (15%) ====================
  {
    id: 22,
    domain: "Application Deployment and Security",
    domainKey: "deployment",
    difficulty: "medium",
    question: "In a Dockerfile for a Python-based network automation tool, which instruction is used to copy only requirements.txt first to leverage Docker layer caching?",
    options: [
      "COPY requirements.txt .",
      "ADD requirements.txt .",
      "RUN pip install requirements.txt",
      "FROM python:3.9"
    ],
    correct: 0,
    explanation: "COPY requirements.txt . followed by RUN pip install -r requirements.txt is the standard Docker layer caching optimization. ADD has additional features but COPY is preferred for simple file copying.",
    codeSnippets: ["dockerfile"],
    tags: ["docker", "deployment", "optimization"]
  },
  {
    id: 23,
    domain: "Application Deployment and Security",
    domainKey: "deployment",
    difficulty: "medium",
    question: "Which OAuth 2.0 grant type is MOST appropriate for a server-to-server integration between a custom automation tool and Cisco Webex Teams API, where no user interaction is involved?",
    options: [
      "Authorization Code",
      "Implicit",
      "Client Credentials",
      "Resource Owner Password"
    ],
    correct: 2,
    explanation: "Client Credentials grant is designed for machine-to-machine authentication where the client authenticates directly with the authorization server using its client_id and client_secret.",
    codeSnippets: ["python"],
    tags: ["oauth", "webex", "authentication", "security"]
  },
  {
    id: 24,
    domain: "Application Deployment and Security",
    domainKey: "deployment",
    difficulty: "easy",
    question: "What is the primary purpose of environment variables in a 12-factor application deployment?",
    options: [
      "To store configuration that varies between deployments",
      "To increase application performance",
      "To replace all configuration files",
      "To enable logging"
    ],
    correct: 0,
    explanation: "Environment variables store configuration that changes between deployments (staging, production, development) without modifying code—API keys, database URLs, service endpoints.",
    codeSnippets: [],
    tags: ["12-factor", "configuration", "deployment"]
  },
  {
    id: 25,
    domain: "Application Deployment and Security",
    domainKey: "deployment",
    difficulty: "hard",
    question: "A developer is using a Cisco API key stored in the source code repository. Which security practice should be implemented IMMEDIATELY?",
    options: [
      "Add the API key to .gitignore",
      "Rotate the exposed key and store it in environment variables or a secrets manager",
      "Commit the key to a private repository instead",
      "Encrypt the key with a password stored in the repo"
    ],
    correct: 1,
    explanation: "Any exposed API key must be treated as compromised. Immediate action: rotate the key, revoke the old one, and store the new key in environment variables, a secrets manager, or CI/CD secret store.",
    codeSnippets: [],
    tags: ["security", "secrets", "api-keys", "git"]
  },
  {
    id: 26,
    domain: "Application Deployment and Security",
    domainKey: "deployment",
    difficulty: "medium",
    question: "In a CI/CD pipeline, which GitHub Actions event triggers the workflow when code is pushed to the main branch?",
    options: [
      "on: pull_request",
      "on: push",
      "on: release",
      "on: schedule"
    ],
    correct: 1,
    explanation: "on: push with branches: [main] triggers on pushes to main. pull_request triggers on PR creation/update. release triggers on GitHub release creation. schedule uses cron syntax.",
    codeSnippets: ["yaml"],
    tags: ["github-actions", "cicd", "automation"]
  },
  {
    id: 27,
    domain: "Application Deployment and Security",
    domainKey: "deployment",
    difficulty: "easy",
    question: "What is the purpose of a firewall in network security?",
    options: [
      "To encrypt all network traffic",
      "To monitor and control incoming and outgoing network traffic",
      "To assign IP addresses to devices",
      "To route packets between networks"
    ],
    correct: 1,
    explanation: "Firewalls monitor and control network traffic based on predetermined security rules. They act as a barrier between trusted and untrusted networks, filtering traffic based on IP addresses, ports, and protocols.",
    codeSnippets: [],
    tags: ["security", "firewall", "networking"]
  },
  {
    id: 28,
    domain: "Application Deployment and Security",
    domainKey: "deployment",
    difficulty: "medium",
    question: "Which protocol is used for secure remote administration of network devices?",
    options: [
      "HTTP",
      "FTP",
      "SSH",
      "Telnet"
    ],
    correct: 2,
    explanation: "SSH (Secure Shell) provides encrypted remote administration of network devices. Unlike Telnet, which transmits data in plaintext, SSH encrypts all communications, including passwords and commands.",
    codeSnippets: [],
    tags: ["ssh", "security", "remote-access"]
  },

  // ==================== INFRASTRUCTURE AND AUTOMATION (20%) ====================
  {
    id: 29,
    domain: "Infrastructure and Automation",
    domainKey: "infrastructure",
    difficulty: "easy",
    question: "Which Cisco technology enables centralized policy management and automates network-wide provisioning for wired, wireless, and SD-WAN networks?",
    options: [
      "Cisco DNA Center",
      "Cisco ISE",
      "Cisco Prime Infrastructure",
      "Cisco FMC"
    ],
    correct: 0,
    explanation: "DNA Center provides intent-based networking with centralized policy management across the entire network fabric (wired, wireless, SD-WAN). ISE is identity and access control. Prime is legacy device management. FMC manages Firepower threat defense.",
    codeSnippets: [],
    tags: ["dna-center", "sdn", "policy"]
  },
  {
    id: 30,
    domain: "Infrastructure and Automation",
    domainKey: "infrastructure",
    difficulty: "medium",
    question: "What is the purpose of a YANG model in network automation?",
    options: [
      "To define the structure and semantics of configuration and operational data",
      "To provide a CLI syntax for network devices",
      "To encrypt network traffic",
      "To replace SNMP for monitoring"
    ],
    correct: 0,
    explanation: "YANG (RFC 7950) is a data modeling language used to model configuration and state data for network protocols like NETCONF and RESTCONF. It defines the structure, constraints, and semantics of data.",
    codeSnippets: ["yaml"],
    tags: ["yang", "netconf", "data-modeling"]
  },
  {
    id: 31,
    domain: "Infrastructure and Automation",
    domainKey: "infrastructure",
    difficulty: "medium",
    question: "An Ansible playbook uses the 'ios_config' module to configure a Cisco IOS XE device. Which connection type is required?",
    options: [
      "HTTP/HTTPS",
      "SSH (network_cli)",
      "SNMP",
      "NETCONF over SSH"
    ],
    correct: 1,
    explanation: "ios_config requires network_cli (SSH) connection for IOS XE devices. Ansible's network_cli plugin establishes an SSH session and uses the device CLI. HTTP/HTTPS is for RESTCONF.",
    codeSnippets: ["yaml"],
    tags: ["ansible", "ios-xe", "network-cli", "automation"]
  },
  {
    id: 32,
    domain: "Infrastructure and Automation",
    domainKey: "infrastructure",
    difficulty: "hard",
    question: "In Cisco DNA Center assurance, which API path retrieves client health metrics (success rate, RSSI, data rate) for a specific time window?",
    options: [
      "/dna/intent/api/v1/client-health",
      "/dna/intent/api/v1/assurance/client-health",
      "/dna/intent/api/v1/network-health",
      "/dna/intent/api/v1/metrics/client"
    ],
    correct: 0,
    explanation: "/dna/intent/api/v1/client-health is the DNA Center Assurance API for retrieving client health data (success rate, RSSI, data rate, roaming). It accepts timeWindow parameters.",
    codeSnippets: ["python"],
    tags: ["dna-center", "assurance", "api", "client-health"]
  },
  {
    id: 33,
    domain: "Infrastructure and Automation",
    domainKey: "infrastructure",
    difficulty: "medium",
    question: "Which configuration management tool uses declarative YAML playbooks and is agentless, making it ideal for automating Cisco IOS XE devices?",
    options: [
      "Chef",
      "Puppet",
      "Ansible",
      "SaltStack"
    ],
    correct: 2,
    explanation: "Ansible is agentless (uses SSH), declarative (YAML playbooks define desired state), and has extensive network modules (ios_config, iosxr_config, etc.).",
    codeSnippets: ["yaml"],
    tags: ["ansible", "configuration-management", "network-automation"]
  },
  {
    id: 34,
    domain: "Infrastructure and Automation",
    domainKey: "infrastructure",
    difficulty: "easy",
    question: "What does 'idempotent' mean in the context of infrastructure automation tools like Ansible?",
    options: [
      "Running the same playbook multiple times produces the same result",
      "The tool can only run once per device",
      "The tool requires Python 3 only",
      "The tool uses YAML exclusively"
    ],
    correct: 0,
    explanation: "Idempotency means applying the same configuration multiple times yields the same end state without unintended side effects. Ansible checks the current state before making changes.",
    codeSnippets: [],
    tags: ["ansible", "idempotency", "concepts"]
  },
  {
    id: 35,
    domain: "Infrastructure and Automation",
    domainKey: "infrastructure",
    difficulty: "medium",
    question: "In Cisco DNA Center, what is the primary function of a 'policy' in intent-based networking?",
    options: [
      "To define desired network behavior and outcomes",
      "To configure individual device CLI commands",
      "To monitor network performance metrics",
      "To generate network device inventory reports"
    ],
    correct: 0,
    explanation: "In intent-based networking, policies define the desired network behavior and outcomes (e.g., 'guest users get internet only'). DNA Center translates these high-level policies into device-specific configurations.",
    codeSnippets: [],
    tags: ["dna-center", "policy", "intent-based"]
  },
  {
    id: 36,
    domain: "Infrastructure and Automation",
    domainKey: "infrastructure",
    difficulty: "hard",
    question: "Which Cisco DNA Center API would you use to provision a new network site with buildings and floors?",
    options: [
      "/dna/intent/api/v1/site",
      "/dna/intent/api/v1/network",
      "/dna/intent/api/v1/topology/site",
      "/dna/intent/api/v1/device-provisioning"
    ],
    correct: 0,
    explanation: "/dna/intent/api/v1/site is used for site management in DNA Center, including creating sites, buildings, floors, and assigning devices to locations.",
    codeSnippets: ["python"],
    tags: ["dna-center", "api", "site-provisioning"]
  },

  // ==================== NETWORK FUNDAMENTALS (15%) ====================
  {
    id: 37,
    domain: "Network Fundamentals",
    domainKey: "network",
    difficulty: "easy",
    question: "Which layer of the OSI model is responsible for routing packets between different networks?",
    options: [
      "Layer 2 (Data Link)",
      "Layer 3 (Network)",
      "Layer 4 (Transport)",
      "Layer 7 (Application)"
    ],
    correct: 1,
    explanation: "Layer 3 (Network) handles logical addressing (IP) and routing between networks using routers. Layer 2 handles switching within a network (MAC addresses).",
    codeSnippets: [],
    tags: ["osi", "networking", "fundamentals"]
  },
  {
    id: 38,
    domain: "Network Fundamentals",
    domainKey: "network",
    difficulty: "medium",
    question: "In a Cisco IOS XE device, which RESTCONF media type is used to retrieve operational (running) configuration data?",
    options: [
      "application/yang-data+json",
      "application/yang-data+xml",
      "application/octet-stream",
      "text/plain"
    ],
    correct: 0,
    explanation: "RESTCONF uses 'application/yang-data+json' for JSON-encoded YANG data. XML uses 'application/yang-data+xml'. Both can retrieve operational data via the /restconf/data/ endpoint.",
    codeSnippets: ["restconf", "json"],
    tags: ["restconf", "yang", "ios-xe", "media-types"]
  },
  {
    id: 39,
    domain: "Network Fundamentals",
    domainKey: "network",
    difficulty: "medium",
    question: "What is the primary function of a VLAN (Virtual LAN) in a switched network?",
    options: [
      "To provide wireless connectivity",
      "To segment broadcast domains at Layer 2",
      "To encrypt traffic between switches",
      "To assign IP addresses dynamically"
    ],
    correct: 1,
    explanation: "VLANs segment broadcast domains at Layer 2, improving security and reducing broadcast traffic. Devices in different VLANs cannot communicate without a router (Layer 3).",
    codeSnippets: [],
    tags: ["vlan", "switching", "layer-2"]
  },
  {
    id: 40,
    domain: "Network Fundamentals",
    domainKey: "network",
    difficulty: "easy",
    question: "Which IPv4 address range is reserved for private use according to RFC 1918?",
    options: [
      "10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16",
      "192.0.2.0/24, 198.51.100.0/24, 203.0.113.0/24",
      "127.0.0.0/8, 169.254.0.0/16, 224.0.0.0/4",
      "0.0.0.0/8, 100.64.0.0/10, 192.0.0.0/24"
    ],
    correct: 0,
    explanation: "RFC 1918 private ranges: 10.0.0.0/8 (10.x.x.x), 172.16.0.0/12 (172.16.x.x - 172.31.x.x), 192.168.0.0/16 (192.168.x.x).",
    codeSnippets: [],
    tags: ["ipv4", "addressing", "rfc1918"]
  },
  {
    id: 41,
    domain: "Network Fundamentals",
    domainKey: "network",
    difficulty: "medium",
    question: "In Cisco IOS XE, which command retrieves the current software version and system uptime?",
    options: [
      "show version",
      "show running-config",
      "show ip interface brief",
      "show interfaces"
    ],
    correct: 0,
    explanation: "show version displays IOS version, system uptime, device model, memory, configuration register, and boot image. show running-config shows active config.",
    codeSnippets: [],
    tags: ["ios-xe", "cli", "troubleshooting"]
  },
  {
    id: 42,
    domain: "Network Fundamentals",
    domainKey: "network",
    difficulty: "medium",
    question: "Which protocol operates at Layer 2 of the OSI model and is used for discovering the topology of a network?",
    options: [
      "IP",
      "TCP",
      "CDP",
      "OSPF"
    ],
    correct: 2,
    explanation: "CDP (Cisco Discovery Protocol) operates at Layer 2 and discovers Cisco device topology. IP is Layer 3, TCP is Layer 4, OSPF is Layer 3 routing protocol.",
    codeSnippets: [],
    tags: ["cdp", "layer-2", "discovery"]
  },
  {
    id: 43,
    domain: "Network Fundamentals",
    domainKey: "network",
    difficulty: "easy",
    question: "What is the default subnet mask for a Class C IP address?",
    options: [
      "255.0.0.0",
      "255.255.0.0",
      "255.255.255.0",
      "255.255.255.255"
    ],
    correct: 2,
    explanation: "Class C addresses (192.0.0.0 to 223.255.255.255) use a default subnet mask of 255.255.255.0 (/24), providing 254 usable host addresses per network.",
    codeSnippets: [],
    tags: ["ipv4", "subnetting", "addressing"]
  },
  {
    id: 44,
    domain: "Network Fundamentals",
    domainKey: "network",
    difficulty: "medium",
    question: "In a Cisco router, which command is used to display the routing table?",
    options: [
      "show ip route",
      "show interfaces",
      "show running-config",
      "show ip interface brief"
    ],
    correct: 0,
    explanation: "show ip route displays the routing table, including all known networks, next hops, and routing protocols. show interfaces shows interface status, show running-config shows the active configuration.",
    codeSnippets: [],
    tags: ["ios-xe", "cli", "routing"]
  },
  {
    id: 45,
    domain: "Network Fundamentals",
    domainKey: "network",
    difficulty: "hard",
    question: "Which Cisco technology enables network virtualization by creating logical network segments on a single physical infrastructure?",
    options: [
      "VRF",
      "VLAN",
      "VPN",
      "VXLAN"
    ],
    correct: 3,
    explanation: "VXLAN (Virtual Extensible LAN) enables network virtualization by creating logical Layer 2 networks over Layer 3 infrastructure, overcoming VLAN's 4094 limit and enabling multi-tenancy.",
    codeSnippets: [],
    tags: ["vxlan", "virtualization", "overlay"]
  },

  // ==================== ADDITIONAL SOFTWARE DEVELOPMENT QUESTIONS ====================
  {
    id: 46,
    domain: "Software Development and Design",
    domainKey: "software",
    difficulty: "medium",
    question: "Which Python decorator is commonly used to cache the results of expensive function calls when fetching data from Cisco APIs?",
    options: [
      "@staticmethod",
      "@classmethod",
      "@lru_cache",
      "@property"
    ],
    correct: 2,
    explanation: "@lru_cache from functools caches function results, reducing redundant API calls. This is useful for frequently accessed Cisco API data that doesn't change often.",
    codeSnippets: ["python"],
    tags: ["python", "decorators", "caching"]
  },
  {
    id: 47,
    domain: "Software Development and Design",
    domainKey: "software",
    difficulty: "easy",
    question: "What is the primary purpose of version control systems like Git in software development?",
    options: [
      "To compile code faster",
      "To track changes and collaborate on code",
      "To debug applications",
      "To deploy applications"
    ],
    correct: 1,
    explanation: "Git tracks changes to code over time, enables collaboration through branching/merging, and provides history and rollback capabilities. It's essential for managing automation scripts and infrastructure code.",
    codeSnippets: [],
    tags: ["git", "version-control", "collaboration"]
  },
  {
    id: 48,
    domain: "Software Development and Design",
    domainKey: "software",
    difficulty: "hard",
    question: "When designing a Python application that interacts with multiple Cisco APIs, which architectural pattern helps manage API credentials, endpoints, and request/response handling centrally?",
    options: [
      "MVC (Model-View-Controller)",
      "Repository Pattern",
      "Client/Service Layer Pattern",
      "Singleton Pattern"
    ],
    correct: 2,
    explanation: "The Client/Service Layer Pattern centralizes API interactions, credential management, and request/response handling. It provides a single point of configuration for endpoints, authentication, and error handling across multiple Cisco APIs.",
    codeSnippets: ["python"],
    tags: ["architecture", "api-design", "python"]
  },
  {
    id: 49,
    domain: "Software Development and Design",
    domainKey: "software",
    difficulty: "easy",
    question: "What is the main advantage of using virtual environments in Python development for network automation?",
    options: [
      "Faster execution speed",
      "Isolation of project dependencies",
      "Automatic code completion",
      "Built-in debugging tools"
    ],
    correct: 1,
    explanation: "Virtual environments isolate project dependencies, preventing conflicts between different projects requiring different versions of libraries (e.g., requests, ncclient, urllib3).",
    codeSnippets: [],
    tags: ["python", "virtualenv", "dependencies"]
  },
  {
    id: 50,
    domain: "Software Development and Design",
    domainKey: "software",
    difficulty: "medium",
    question: "Which Python library is specifically designed for parsing and generating YAML data, commonly used in Ansible playbooks and network configurations?",
    options: [
      "json",
      "PyYAML",
      "xml.etree.ElementTree",
      "configparser"
    ],
    correct: 1,
    explanation: "PyYAML is the standard Python library for YAML parsing and generation. It's essential for working with Ansible playbooks, Docker Compose files, and network configuration templates.",
    codeSnippets: ["python", "yaml"],
    tags: ["python", "yaml", "parsing"]
  },

  // ==================== ADDITIONAL API QUESTIONS ====================
  {
    id: 51,
    domain: "Understanding and Using APIs",
    domainKey: "apis",
    difficulty: "medium",
    question: "In REST API design, what does HATEOAS stand for and what is its purpose?",
    options: [
      "Hypermedia as the Engine of Application State - enables discoverability of API actions",
      "HTTP Advanced Transport for Enhanced API Security - improves API security",
      "Hybrid API Technology for Enterprise Operations - supports enterprise integrations",
      "High Availability API Endpoint System - provides load balancing"
    ],
    correct: 0,
    explanation: "HATEOAS is a REST constraint where the server provides links to related actions in the response, enabling clients to discover available actions dynamically. This makes APIs self-documenting.",
    codeSnippets: [],
    tags: ["rest", "hateoas", "api-design"]
  },
  {
    id: 52,
    domain: "Understanding and Using APIs",
    domainKey: "apis",
    difficulty: "easy",
    question: "What is the purpose of the 'Authorization' header in HTTP requests?",
    options: [
      "To specify the content type of the request body",
      "To provide authentication credentials",
      "To indicate the preferred response format",
      "To enable CORS for cross-origin requests"
    ],
    correct: 1,
    explanation: "The Authorization header provides authentication credentials for the request. Common formats include 'Bearer <token>', 'Basic <base64-credentials>', and API key schemes.",
    codeSnippets: [],
    tags: ["http", "headers", "authentication"]
  },
  {
    id: 53,
    domain: "Understanding and Using APIs",
    domainKey: "apis",
    difficulty: "hard",
    question: "When using Cisco DNA Center APIs, which authentication method should be used for long-running automation scripts?",
    options: [
      "Basic authentication with username/password in every request",
      "OAuth 2.0 with refresh tokens",
      "Obtain a token once and reuse it until expiration",
      "API key in the query string"
    ],
    correct: 2,
    explanation: "DNA Center uses token-based authentication. The recommended approach is to obtain a token via /dna/system/api/v1/auth/token and reuse it for subsequent requests. Tokens expire and should be refreshed periodically.",
    codeSnippets: ["python"],
    tags: ["dna-center", "authentication", "tokens"]
  },
  {
    id: 54,
    domain: "Understanding and Using APIs",
    domainKey: "apis",
    difficulty: "medium",
    question: "What is the purpose of the 'Accept' header in an HTTP request?",
    options: [
      "To specify the content type of the request body",
      "To indicate the media types acceptable for the response",
      "To provide authentication credentials",
      "To enable CORS"
    ],
    correct: 1,
    explanation: "The Accept header tells the server what media types the client can process in the response. For Cisco APIs, this often includes 'application/json' or 'application/yang-data+json' for RESTCONF.",
    codeSnippets: [],
    tags: ["http", "headers", "rest"]
  },
  {
    id: 55,
    domain: "Understanding and Using APIs",
    domainKey: "apis",
    difficulty: "easy",
    question: "Which HTTP method is typically used to create a new resource on a server?",
    options: [
      "GET",
      "POST",
      "PUT",
      "DELETE"
    ],
    correct: 1,
    explanation: "POST is used to create new resources. GET retrieves resources, PUT updates/replaces resources, DELETE removes resources.",
    codeSnippets: [],
    tags: ["rest", "http", "api-design"]
  },

  // ==================== ADDITIONAL CISCO PLATFORMS QUESTIONS ====================
  {
    id: 56,
    domain: "Cisco Platforms and Development",
    domainKey: "platforms",
    difficulty: "easy",
    question: "Which Cisco collaboration platform provides APIs for messaging, meetings, and team collaboration?",
    options: [
      "Cisco DNA Center",
      "Cisco Webex",
      "Cisco Meraki",
      "Cisco ISE"
    ],
    correct: 1,
    explanation: "Cisco Webex provides a comprehensive suite of collaboration APIs for messaging, video meetings, calling, and team collaboration.",
    codeSnippets: [],
    tags: ["webex", "collaboration", "platforms"]
  },
  {
    id: 57,
    domain: "Cisco Platforms and Development",
    domainKey: "platforms",
    difficulty: "medium",
    question: "What is the primary function of Cisco ISE (Identity Services Engine) in network security?",
    options: [
      "To manage wireless access points",
      "To provide identity and access control policy enforcement",
      "To monitor network performance",
      "To configure firewall rules"
    ],
    correct: 1,
    explanation: "Cisco ISE provides identity-based access control, authenticating users and devices before allowing network access. It enforces policies based on identity, not just IP addresses.",
    codeSnippets: [],
    tags: ["ise", "identity", "security"]
  },
  {
    id: 58,
    domain: "Cisco Platforms and Development",
    domainKey: "platforms",
    difficulty: "hard",
    question: "When using Cisco Meraki Dashboard API, which endpoint would you use to retrieve the list of networks in an organization?",
    options: [
      "GET /api/v1/organizations/{orgId}/networks",
      "GET /api/v1/networks",
      "GET /api/v1/organizations/{orgId}",
      "POST /api/v1/networks"
    ],
    correct: 0,
    explanation: "GET /api/v1/organizations/{orgId}/networks retrieves all networks in a specific Meraki organization. The organization ID is required in the path.",
    codeSnippets: ["python"],
    tags: ["meraki", "api", "rest"]
  },
  {
    id: 59,
    domain: "Cisco Platforms and Development",
    domainKey: "platforms",
    difficulty: "medium",
    question: "Which Cisco platform is designed for managing security policies and threat detection across the network?",
    options: [
      "Cisco DNA Center",
      "Cisco FMC (Firepower Management Center)",
      "Cisco Prime Infrastructure",
      "Cisco ISE"
    ],
    correct: 1,
    explanation: "Cisco FMC manages Firepower threat defense, providing centralized security policy management, intrusion prevention, and malware protection across the network.",
    codeSnippets: [],
    tags: ["fmc", "security", "firepower"]
  },
  {
    id: 60,
    domain: "Cisco Platforms and Development",
    domainKey: "platforms",
    difficulty: "easy",
    question: "Which Cisco product family provides software-defined access (SD-Access) for enterprise networks?",
    options: [
      "Cisco Meraki",
      "Cisco DNA Center",
      "Cisco ISE",
      "Cisco ACI"
    ],
    correct: 1,
    explanation: "Cisco DNA Center is the centralized management platform for SD-Access, providing policy-based automation, assurance, and network analytics for software-defined enterprise networks.",
    codeSnippets: [],
    tags: ["dna-center", "sd-access", "sdn"]
  },

  // ==================== ADDITIONAL DEPLOYMENT/SECURITY QUESTIONS ====================
  {
    id: 61,
    domain: "Application Deployment and Security",
    domainKey: "deployment",
    difficulty: "medium",
    question: "Which Docker command is used to build an image from a Dockerfile?",
    options: [
      "docker run",
      "docker build",
      "docker create",
      "docker compose"
    ],
    correct: 1,
    explanation: "docker build constructs a Docker image from a Dockerfile. docker run creates and starts a container from an image. docker create creates a container without starting it.",
    codeSnippets: [],
    tags: ["docker", "commands", "containers"]
  },
  {
    id: 62,
    domain: "Application Deployment and Security",
    domainKey: "deployment",
    difficulty: "easy",
    question: "What is the primary security benefit of using HTTPS over HTTP?",
    options: [
      "Faster data transfer",
      "Encrypted communication",
      "Larger payload capacity",
      "Better caching"
    ],
    correct: 1,
    explanation: "HTTPS encrypts data in transit using TLS/SSL, protecting sensitive information like API keys, credentials, and configuration data from interception and tampering.",
    codeSnippets: [],
    tags: ["https", "security", "encryption"]
  },
  {
    id: 63,
    domain: "Application Deployment and Security",
    domainKey: "deployment",
    difficulty: "medium",
    question: "In a CI/CD pipeline, what is the purpose of a 'build stage'?",
    options: [
      "To deploy code to production",
      "To compile code, run tests, and create artifacts",
      "To monitor application performance",
      "To manage database migrations"
    ],
    correct: 1,
    explanation: "The build stage compiles source code, runs tests, lints code, and creates deployable artifacts (binaries, containers, packages). It catches issues before deployment.",
    codeSnippets: [],
    tags: ["cicd", "build", "devops"]
  },
  {
    id: 64,
    domain: "Application Deployment and Security",
    domainKey: "deployment",
    difficulty: "hard",
    question: "Which security practice involves testing an application's security by simulating attacks from malicious actors?",
    options: [
      "Code review",
      "Static analysis",
      "Penetration testing",
      "Dependency scanning"
    ],
    correct: 2,
    explanation: "Penetration testing (ethical hacking) simulates real-world attacks to identify security vulnerabilities. It's a critical practice for network automation tools that interact with production network devices.",
    codeSnippets: [],
    tags: ["security", "penetration-testing", "devsecops"]
  },
  {
    id: 65,
    domain: "Application Deployment and Security",
    domainKey: "deployment",
    difficulty: "easy",
    question: "What is the purpose of a README.md file in a software repository?",
    options: [
      "To store environment variables",
      "To document the project and provide setup instructions",
      "To define deployment pipelines",
      "To manage dependencies"
    ],
    correct: 1,
    explanation: "README.md provides project documentation, setup instructions, usage examples, and contribution guidelines. It's the first file users see when visiting a repository.",
    codeSnippets: [],
    tags: ["documentation", "repository", "best-practices"]
  },

  // ==================== ADDITIONAL INFRASTRUCTURE/AUTOMATION QUESTIONS ====================
  {
    id: 66,
    domain: "Infrastructure and Automation",
    domainKey: "infrastructure",
    difficulty: "easy",
    question: "What is the primary purpose of DNS (Domain Name System) in networking?",
    options: [
      "To assign IP addresses dynamically",
      "To translate domain names to IP addresses",
      "To route packets between networks",
      "To encrypt network traffic"
    ],
    correct: 1,
    explanation: "DNS translates human-readable domain names (e.g., cisco.com) to IP addresses (e.g., 23.1.75.84). It's essential for network services, including Cisco API endpoints.",
    codeSnippets: [],
    tags: ["dns", "networking", "fundamentals"]
  },
  {
    id: 67,
    domain: "Infrastructure and Automation",
    domainKey: "infrastructure",
    difficulty: "medium",
    question: "Which network automation tool uses a push model and agentless architecture, making it popular for network device configuration?",
    options: [
      "Chef",
      "Puppet",
      "Ansible",
      "SaltStack"
    ],
    correct: 2,
    explanation: "Ansible uses a push model and is agentless, using SSH to connect to network devices. This makes it lightweight and easy to deploy for network automation.",
    codeSnippets: ["yaml"],
    tags: ["ansible", "automation", "network"]
  },
  {
    id: 68,
    domain: "Infrastructure and Automation",
    domainKey: "infrastructure",
    difficulty: "hard",
    question: "In a Cisco SD-WAN deployment, which component is responsible for centralized control and policy distribution?",
    options: [
      "vSmart Controller",
      "vEdge Router",
      "vManage",
      "vAnalytics"
    ],
    correct: 0,
    explanation: "The vSmart Controller provides centralized control plane functions in Cisco SD-WAN, distributing routing policies, encryption keys, and control information to vEdge routers.",
    codeSnippets: [],
    tags: ["sd-wan", "vsmart", "control-plane"]
  },
  {
    id: 69,
    domain: "Infrastructure and Automation",
    domainKey: "infrastructure",
    difficulty: "medium",
    question: "What is the primary benefit of using infrastructure as code (IaC) in network automation?",
    options: [
      "Faster hardware deployment",
      "Version-controlled, repeatable infrastructure provisioning",
      "Automatic network device discovery",
      "Improved network security"
    ],
    correct: 1,
    explanation: "IaC treats infrastructure configuration as code, enabling version control, repeatability, automated provisioning, and reduced configuration drift across network devices.",
    codeSnippets: [],
    tags: ["iac", "automation", "devops"]
  },
  {
    id: 70,
    domain: "Infrastructure and Automation",
    domainKey: "infrastructure",
    difficulty: "easy",
    question: "Which protocol is used for secure file transfers between network devices and servers?",
    options: [
      "FTP",
      "TFTP",
      "SFTP",
      "HTTP"
    ],
    correct: 2,
    explanation: "SFTP (SSH File Transfer Protocol) provides secure file transfers over SSH. Unlike FTP and TFTP, which transmit data in plaintext, SFTP encrypts all communications.",
    codeSnippets: [],
    tags: ["sftp", "file-transfer", "security"]
  },

  // ==================== ADDITIONAL NETWORK FUNDAMENTALS QUESTIONS ====================
  {
    id: 71,
    domain: "Network Fundamentals",
    domainKey: "network",
    difficulty: "easy",
    question: "What is the primary function of a router in a computer network?",
    options: [
      "To connect devices within the same network",
      "To forward packets between different networks",
      "To assign IP addresses to devices",
      "To encrypt network traffic"
    ],
    correct: 1,
    explanation: "Routers forward packets between different networks based on IP addresses and routing tables. They operate at Layer 3 of the OSI model.",
    codeSnippets: [],
    tags: ["routers", "networking", "layer-3"]
  },
  {
    id: 72,
    domain: "Network Fundamentals",
    domainKey: "network",
    difficulty: "medium",
    question: "Which TCP/IP model layer corresponds to the OSI model's Application, Presentation, and Session layers?",
    options: [
      "Network Access Layer",
      "Internet Layer",
      "Transport Layer",
      "Application Layer"
    ],
    correct: 3,
    explanation: "The TCP/IP Application Layer combines the OSI's Application, Presentation, and Session layers. It's responsible for network applications and data formatting.",
    codeSnippets: [],
    tags: ["tcp-ip", "osi", "models"]
  },
  {
    id: 73,
    domain: "Network Fundamentals",
    domainKey: "network",
    difficulty: "hard",
    question: "What is the maximum transmission unit (MTU) size for standard Ethernet frames?",
    options: [
      "512 bytes",
      "1024 bytes",
      "1500 bytes",
      "9000 bytes"
    ],
    correct: 2,
    explanation: "Standard Ethernet MTU is 1500 bytes. 9000 bytes is for jumbo frames. MTU affects packet fragmentation and network performance.",
    codeSnippets: [],
    tags: ["ethernet", "mtu", "networking"]
  },
  {
    id: 74,
    domain: "Network Fundamentals",
    domainKey: "network",
    difficulty: "medium",
    question: "Which protocol operates at Layer 4 of the OSI model and provides reliable, connection-oriented data transfer?",
    options: [
      "IP",
      "UDP",
      "TCP",
      "ICMP"
    ],
    correct: 2,
    explanation: "TCP (Transmission Control Protocol) operates at Layer 4 and provides reliable, connection-oriented data transfer with error checking and retransmission. UDP is connectionless.",
    codeSnippets: [],
    tags: ["tcp", "osi", "layer-4"]
  },
  {
    id: 75,
    domain: "Network Fundamentals",
    domainKey: "network",
    difficulty: "easy",
    question: "What is the purpose of the ARP (Address Resolution Protocol) in a network?",
    options: [
      "To assign IP addresses to devices",
      "To map IP addresses to MAC addresses",
      "To route packets between networks",
      "To encrypt network traffic"
    ],
    correct: 1,
    explanation: "ARP maps IP addresses to MAC addresses, allowing devices on the same network to communicate. When a device knows an IP but needs the corresponding MAC address, it sends an ARP request.",
    codeSnippets: [],
    tags: ["arp", "mac", "layer-2"]
  },
  {
    id: 76,
    domain: "Network Fundamentals",
    domainKey: "network",
    difficulty: "medium",
    question: "Which routing protocol is a link-state protocol commonly used in large enterprise networks?",
    options: [
      "RIP",
      "EIGRP",
      "OSPF",
      "BGP"
    ],
    correct: 2,
    explanation: "OSPF (Open Shortest Path First) is a link-state routing protocol that uses Dijkstra's algorithm to calculate the shortest path. It's suitable for large, complex networks.",
    codeSnippets: [],
    tags: ["ospf", "routing", "protocols"]
  },
  {
    id: 77,
    domain: "Network Fundamentals",
    domainKey: "network",
    difficulty: "easy",
    question: "Which device operates at Layer 2 of the OSI model and forwards frames based on MAC addresses?",
    options: [
      "Router",
      "Switch",
      "Hub",
      "Firewall"
    ],
    correct: 1,
    explanation: "A switch operates at Layer 2 and forwards frames based on MAC addresses using a MAC address table. Hubs operate at Layer 1 and broadcast all traffic.",
    codeSnippets: [],
    tags: ["switches", "layer-2", "networking"]
  },
  {
    id: 78,
    domain: "Network Fundamentals",
    domainKey: "network",
    difficulty: "hard",
    question: "What is the primary purpose of a DMZ (Demilitarized Zone) in network security architecture?",
    options: [
      "To encrypt all internal network traffic",
      "To provide a buffer zone between internal and external networks for public-facing services",
      "To assign IP addresses to internal devices",
      "To route traffic between VLANs"
    ],
    correct: 1,
    explanation: "A DMZ is a physical or logical subnetwork that exposes external-facing services to untrusted networks (usually the internet) while keeping internal networks secure.",
    codeSnippets: [],
    tags: ["dmz", "security", "architecture"]
  },
  {
    id: 79,
    domain: "Network Fundamentals",
    domainKey: "network",
    difficulty: "medium",
    question: "Which IP address is the loopback address used for local network testing?",
    options: [
      "192.168.1.1",
      "10.0.0.1",
      "127.0.0.1",
      "172.16.0.1"
    ],
    correct: 2,
    explanation: "127.0.0.1 is the loopback address used for local network testing and self-referencing. Data sent to this address never leaves the host.",
    codeSnippets: [],
    tags: ["ip", "loopback", "testing"]
  },
  {
    id: 80,
    domain: "Network Fundamentals",
    domainKey: "network",
    difficulty: "easy",
    question: "What is the primary function of DHCP (Dynamic Host Configuration Protocol)?",
    options: [
      "To route packets between networks",
      "To dynamically assign IP addresses and network configuration to devices",
      "To encrypt network traffic",
      "To translate domain names to IP addresses"
    ],
    correct: 1,
    explanation: "DHCP dynamically assigns IP addresses, subnet masks, default gateways, and DNS servers to devices on a network, eliminating manual IP configuration.",
    codeSnippets: [],
    tags: ["dhcp", "ip", "networking"]
  },

  // ==================== CCNA AUTOMATION / NETWORK PROGRAMMABILITY ====================
  {
    id: 81,
    domain: "Network Automation and Programmability",
    domainKey: "automation",
    difficulty: "medium",
    question: "Which Cisco IOS XE feature enables model-driven telemetry by streaming structured operational data to a collector without polling?",
    options: [
      "CDP",
      "EEM applet",
      "Telemetry subscription",
      "SNMP traps"
    ],
    correct: 2,
    explanation: "Telemetry subscriptions in IOS XE push model-driven telemetry data to a collector, replacing polling models like SNMP. CDP discovers neighbors, EEM reacts to events, and SNMP traps are event-driven but not model-driven streaming.",
    codeSnippets: ["yaml"],
    tags: ["telemetry", "ios-xe", "model-driven", "automation"]
  },
  {
    id: 82,
    domain: "Network Automation and Programmability",
    domainKey: "automation",
    difficulty: "medium",
    question: "Which automation tool uses agentless push-based execution over SSH to configure network devices?",
    options: [
      "Puppet",
      "Chef",
      "Ansible",
      "SaltStack"
    ],
    correct: 2,
    explanation: "Ansible is agentless and push-based, typically using SSH to execute playbooks on network devices. Puppet and Chef use agent-pull models, and SaltStack can use both but is more commonly agent-based.",
    codeSnippets: ["yaml"],
    tags: ["ansible", "automation", "configuration-management", "ssh"]
  },
  {
    id: 83,
    domain: "Network Automation and Programmability",
    domainKey: "automation",
    difficulty: "medium",
    question: "In IOS XE, which command enables the NETCONF-YANG agent for standardized model-driven management?",
    options: [
      "netconf-yang",
      "restconf",
      "yang-module",
      "netconf enable"
    ],
    correct: 0,
    explanation: "netconf-yang enables the NETCONF-YANG subsystem on IOS XE, allowing model-driven configuration and operational data access. restconf enables RESTCONF over HTTP. The other options are not valid IOS XE configuration commands for NETCONF.",
    codeSnippets: ["yaml"],
    tags: ["netconf", "yang", "ios-xe", "automation"]
  },
  {
    id: 84,
    domain: "Network Automation and Programmability",
    domainKey: "automation",
    difficulty: "medium",
    question: "Which Cisco Embedded Event Manager (EEM) action is used to execute an IOS-XE CLI command and save the output to a variable for further automation logic?",
    options: [
      "action 1.0 cli",
      "action 1.0 syslog",
      "action 1.0 netconf",
      "action 1.0 snmp"
    ],
    correct: 0,
    explanation: "action 1.0 cli executes CLI commands within an EEM applet and can capture output into a variable using the 'output' keyword, enabling reactive automation without external controllers.",
    codeSnippets: ["yaml"],
    tags: ["eem", "ios-xe", "automation", "event-driven"]
  },
  {
    id: 85,
    domain: "Network Automation and Programmability",
    domainKey: "automation",
    difficulty: "easy",
    question: "Which Python library is most commonly used to connect to network devices over SSH and execute CLI commands?",
    options: [
      "requests",
      "paramiko",
      "netmiko",
      "beautifulsoup4"
    ],
    correct: 2,
    explanation: "Netmiko is built on Paramiko but provides network-specific abstractions for SSH connections to routers, switches, and firewalls, handling prompt parsing and command execution.",
    codeSnippets: ["python"],
    tags: ["python", "netmiko", "ssh", "networking"]
  },
  {
    id: 86,
    domain: "Network Automation and Programmability",
    domainKey: "automation",
    difficulty: "easy",
    question: "What is the primary benefit of using YANG data models for network device configuration?",
    options: [
      "They compress CLI output",
      "They provide a standardized, machine-readable schema for configuration and operational data",
      "They replace DNS with IP addresses",
      "They encrypt configuration backups"
    ],
    correct: 1,
    explanation: "YANG models define the structure, constraints, and semantics of network configuration and operational data, enabling model-driven programmability via NETCONF/RESTCONF.",
    codeSnippets: ["yaml"],
    tags: ["yang", "model-driven", "netconf", "restconf"]
  },
  {
    id: 87,
    domain: "Network Automation and Programmability",
    domainKey: "automation",
    difficulty: "medium",
    question: "Which IOS XE API provides a REST interface to retrieve interface status and counters in JSON format?",
    options: [
      "SNMP OID",
      "RESTCONF /restconf/data/Cisco-IOS-XE-interfaces-oper:interfaces",
      "CDP neighbor table",
      "Syslog stream"
    ],
    correct: 1,
    explanation: "RESTCONF in IOS XE exposes YANG-modeled operational data such as interfaces. SNMP uses OIDs, CDP discovers neighbors, and syslog is text-based logging—not a structured REST API.",
    codeSnippets: ["yaml"],
    tags: ["restconf", "ios-xe", "interfaces", "json"]
  },
  {
    id: 88,
    domain: "Network Automation and Programmability",
    domainKey: "automation",
    difficulty: "medium",
    question: "In a Git workflow for network automation, which file should be encrypted or excluded from version control to prevent credential exposure?",
    options: [
      "README.md",
      "inventory.yaml",
      "requirements.txt",
      "playbook.yml"
    ],
    correct: 1,
    explanation: "An inventory file typically contains device IPs, usernames, passwords, and API keys. It must be encrypted with ansible-vault or excluded with .gitignore. README, requirements, and playbooks usually contain no secrets.",
    codeSnippets: ["yaml"],
    tags: ["git", "security", "ansible", "secrets"]
  },
  {
    id: 89,
    domain: "Network Automation and Programmability",
    domainKey: "automation",
    difficulty: "hard",
    question: "Which Cisco platform natively supports model-driven telemetry for Cisco DNA Center Assurance and uses Kafka as a transport mechanism?",
    options: [
      "Cisco Meraki",
      "Cisco DNA Center",
      "Cisco Prime Infrastructure",
      "Cisco FMC"
    ],
    correct: 1,
    explanation: "Cisco DNA Center uses model-driven telemetry with Kafka as the message bus between Assurance collectors and analytics engines. Meraki uses its own dashboard polling/streaming, and Prime/FMC are legacy monitoring platforms.",
    codeSnippets: ["yaml"],
    tags: ["dna-center", "telemetry", "kafka", "assurance"]
  },
  {
    id: 90,
    domain: "Network Automation and Programmability",
    domainKey: "automation",
    difficulty: "easy",
    question: "Which configuration management approach treats infrastructure state as code, enabling version control and repeatable deployments?",
    options: [
      "Manual CLI scripting",
      "Infrastructure as Code",
      "Direct database updates",
      "Paper-based change management"
    ],
    correct: 1,
    explanation: "Infrastructure as Code (IaC) stores network and infrastructure configuration in version control, applying it consistently through automation tools like Ansible, Terraform, or Nornir.",
    codeSnippets: ["yaml"],
    tags: ["iac", "automation", "devops"]
  },
  {
    id: 91,
    domain: "Network Automation and Programmability",
    domainKey: "automation",
    difficulty: "medium",
    question: "When automating Cisco switches with Python, which library provides higher-level network automation primitives like tasks, results, and parsers built on top of Netmiko/Paramiko?",
    options: [
      "pandas",
      "nornir",
      "flask",
      "pyyaml"
    ],
    correct: 1,
    explanation: "Nornir is a Python automation framework designed for network automation, providing inventory management, task execution, result handling, and integration with Netmiko/Napalm for parsing and configuration.",
    codeSnippets: ["python"],
    tags: ["python", "nornir", "netmiko", "automation"]
  },
  {
    id: 92,
    domain: "Network Automation and Programmability",
    domainKey: "automation",
    difficulty: "medium",
    question: "Which RESTCONF operation retrieves a specific YANG-defined resource by its identifier?",
    options: [
      "GET",
      "POST",
      "PUT",
      "DELETE"
    ],
    correct: 0,
    explanation: "GET retrieves the resource identified by the request URI in RESTCONF. POST creates resources, PUT replaces resources, and DELETE removes resources.",
    codeSnippets: ["yaml"],
    tags: ["restconf", "yang", "http", "automation"]
  },
  {
    id: 93,
    domain: "Network Automation and Programmability",
    domainKey: "automation",
    difficulty: "easy",
    question: "What does the 'idempotent' property mean in the context of network automation tools?",
    options: [
      "The operation changes the system state every time it runs",
      "The operation can be applied multiple times without changing the result beyond the initial application",
      "The operation requires interactive user input",
      "The operation only runs during business hours"
    ],
    correct: 1,
    explanation: "Idempotency means running the same automation task repeatedly produces the same end state without unintended side effects. Ansible, for example, is designed to be idempotent.",
    codeSnippets: [],
    tags: ["ansible", "automation", "concepts", "idempotent"]
  },
  {
    id: 94,
    domain: "Network Automation and Programmability",
    domainKey: "automation",
    difficulty: "medium",
    question: "In Jinja2 network templating, which control structure iterates over a list of VLANs to generate interface configuration snippets?",
    options: [
      "{% if %}/{% endif %}",
      "{% for %}/{% endfor %}",
      "{{ variable }}",
      "{% include %}"
    ],
    correct: 1,
    explanation: "{% for %} loops iterate over lists or dictionaries in Jinja2 templates, making them ideal for generating repetitive network configurations like multiple VLAN interfaces or ACL entries.",
    codeSnippets: ["yaml"],
    tags: ["jinja2", "templating", "automation"]
  },
  {
    id: 95,
    domain: "Network Automation and Programmability",
    domainKey: "automation",
    difficulty: "medium",
    question: "Which Cisco DNA Center API capability allows an engineer to provision site profiles, network settings, and device configurations declaratively?",
    options: [
      "Assurance only",
      "Intent-based networking / Templates API",
      "SNMP community strings",
      "CLI scripting via console"
    ],
    correct: 1,
    explanation: "DNA Center's intent-based APIs translate business intent into network policies, while Templates API enables reusable, version-controlled configuration templates for devices and sites.",
    codeSnippets: ["yaml"],
    tags: ["dna-center", "intent", "templates", "api"]
  },
  {
    id: 96,
    domain: "Network Automation and Programmability",
    domainKey: "automation",
    difficulty: "easy",
    question: "Which data serialization format is commonly used for structured network telemetry and REST API payloads due to its readability and strict typing?",
    options: [
      "CSV",
      "XML",
      "JSON",
      "Binary blob"
    ],
    correct: 2,
    explanation: "JSON is widely used in network APIs and telemetry because it is human-readable, maps directly to YANG JSON encoding, and is natively supported by Python dictionaries and REST frameworks.",
    codeSnippets: ["yaml"],
    tags: ["json", "data-formats", "rest", "telemetry"]
  },
  {
    id: 97,
    domain: "Network Automation and Programmability",
    domainKey: "automation",
    difficulty: "hard",
    question: "A network engineer needs to audit the running configuration of 500 switches nightly and alert on unauthorized changes. Which workflow is MOST appropriate?",
    options: [
      "Manually log into each switch daily",
      "Use an automation tool to fetch running-config via RESTCONF/NETCONF, diff against Git-tracked baseline, and trigger an alert on change",
      "Enable CDP and watch for new neighbors",
      "Increase SNMP polling frequency"
    ],
    correct: 1,
    explanation: "Automated nightly config collection with model-driven APIs, Git diff, and alerting provides scalable, auditable change detection. Manual CLI does not scale. CDP and SNMP do not provide full config change history.",
    codeSnippets: ["yaml"],
    tags: ["automation", "config-management", "git", "restconf"]
  },
  {
    id: 98,
    domain: "Network Automation and Programmability",
    domainKey: "automation",
    difficulty: "medium",
    question: "Which protocol or API is used by Cisco IOS XE devices to expose YANG-modeled operational data for telemetry and troubleshooting over HTTP?",
    options: [
      "NETCONF",
      "RESTCONF",
      "SNMP",
      "SSH"
    ],
    correct: 1,
    explanation: "RESTCONF exposes YANG-modeled data over HTTP/HTTPS. NETCONF uses SSH/TLS and XML. SNMP uses MIBs/OIDs. SSH is remote CLI access, not a structured data API.",
    codeSnippets: ["yaml"],
    tags: ["restconf", "yang", "ios-xe", "telemetry"]
  },
  {
    id: 99,
    domain: "Network Automation and Programmability",
    domainKey: "automation",
    difficulty: "medium",
    question: "In Ansible for network automation, which inventory plugin allows dynamic population of device hosts from a CSV or external source?",
    options: [
      "static inventory",
      "host_vars",
      "constructed inventory / inventory plugins",
      "ansible.cfg"
    ],
    correct: 2,
    explanation: "Ansible inventory plugins, including constructed and yaml/ini/csv-based sources, enable dynamic host population. Static inventory is hardcoded. host_vars stores per-host variables. ansible.cfg configures behavior.",
    codeSnippets: ["yaml"],
    tags: ["ansible", "inventory", "automation"]
  },
  {
    id: 100,
    domain: "Network Automation and Programmability",
    domainKey: "automation",
    difficulty: "easy",
    question: "What is the standard port for NETCONF over SSH?",
    options: [
      "22",
      "830",
      "443",
      "161"
    ],
    correct: 1,
    explanation: "NETCONF over SSH uses TCP port 830 by default. 22 is SSH, 443 is HTTPS/RESTCONF, and 161 is SNMP.",
    codeSnippets: [],
    tags: ["netconf", "ports", "automation"]
  },
  {
    id: 101,
    domain: "Network Automation and Programmability",
    domainKey: "automation",
    difficulty: "medium",
    question: "Which Cisco feature on Catalyst 9000 switches enables on-box Python scripting and REST API endpoints for automation without external servers?",
    options: [
      "App Hosting",
      "EEM",
      "SNMP",
      "LLDP"
    ],
    correct: 0,
    explanation: "App Hosting on IOS XE allows running Python scripts and applications directly on the switch, exposing local REST endpoints. EEM is event-driven CLI actions. SNMP and LLDP are management/discovery protocols.",
    codeSnippets: ["python"],
    tags: ["ios-xe", "app-hosting", "python", "automation"]
  },
  {
    id: 102,
    domain: "Network Automation and Programmability",
    domainKey: "automation",
    difficulty: "easy",
    question: "In REST API design, which HTTP method is typically used to create a new resource?",
    options: [
      "GET",
      "POST",
      "PUT",
      "DELETE"
    ],
    correct: 1,
    explanation: "POST creates new resources. GET retrieves, PUT replaces, and DELETE removes.",
    codeSnippets: [],
    tags: ["rest", "http", "api-design"]
  },
  {
    id: 103,
    domain: "Network Automation and Programmability",
    domainKey: "automation",
    difficulty: "medium",
    question: "A network automation engineer must standardize VLAN configurations across 200 switches. Which approach best ensures consistent, repeatable results?",
    options: [
      "Manual CLI on each switch",
      "Use a Jinja2 template rendered with device inventory data and deployed via Ansible",
      "Send email instructions to local staff",
      "Use SNMP set with hardcoded values"
    ],
    correct: 1,
    explanation: "Templated configuration with inventory data and Ansible deployment ensures consistency, auditability, and repeatability. Manual CLI does not scale. Email instructions are error-prone. SNMP set lacks validation and template abstraction.",
    codeSnippets: ["yaml"],
    tags: ["jinja2", "ansible", "templating", "automation"]
  },
  {
    id: 104,
    domain: "Network Automation and Programmability",
    domainKey: "automation",
    difficulty: "medium",
    question: "Which Cisco Meraki Dashboard API endpoint retrieves the organizations accessible to the API key?",
    options: [
      "GET /api/v1/organizations",
      "GET /api/v1/networks",
      "POST /api/v1/devices",
      "GET /api/v1/ssids"
    ],
    correct: 0,
    explanation: "/api/v1/organizations lists organizations. /networks lists networks within an organization. /devices lists hardware, and /ssids lists wireless networks.",
    codeSnippets: ["python"],
    tags: ["meraki", "api", "rest", "dashboard"]
  },
  {
    id: 105,
    domain: "Network Automation and Programmability",
    domainKey: "automation",
    difficulty: "easy",
    question: "Which standard data modeling language is used by NETCONF and RESTCONF to represent configuration and operational state?",
    options: [
      "XML only",
      "JSON only",
      "YANG",
      "YAML"
    ],
    correct: 2,
    explanation: "YANG is the standard data modeling language for NETCONF and RESTCONF. XML and JSON are encoding formats carried by those protocols. YAML is used for automation tool configuration, not device modeling.",
    codeSnippets: ["yaml"],
    tags: ["yang", "netconf", "restconf", "model-driven"]
  },
  {
    id: 106,
    domain: "Network Automation and Programmability",
    domainKey: "automation",
    difficulty: "hard",
    question: "When troubleshooting a network automation failure, which diagnostic step should come FIRST?",
    options: [
      "Blame the vendor",
      "Reproduce the failure and gather structured logs, API responses, and device state",
      "Redeploy the entire automation framework",
      "Disable version control"
    ],
    correct: 1,
    explanation: "Root-cause troubleshooting starts with reproducing the failure and collecting evidence: API responses, configs, and device state. Automation problems are usually data, auth, or model-related before vendor fault.",
    codeSnippets: [],
    tags: ["troubleshooting", "automation", "debugging"]
  },
  {
    id: 107,
    domain: "Network Automation and Programmability",
    domainKey: "automation",
    difficulty: "easy",
    question: "Which protocol is used by network devices to advertise their capabilities and discover directly connected Cisco neighbors?",
    options: [
      "LLDP",
      "CDP",
      "STP",
      "OSPF"
    ],
    correct: 1,
    explanation: "CDP is Cisco-proprietary and advertises device ID, capabilities, and interface details to directly connected Cisco neighbors. LLDP is standards-based and vendor-neutral. STP prevents loops. OSPF is a routing protocol.",
    codeSnippets: [],
    tags: ["cdp", "lldp", "discovery", "networking"]
  },
  {
    id: 108,
    domain: "Network Automation and Programmability",
    domainKey: "automation",
    difficulty: "medium",
    question: "In model-driven programmability, what is the primary role of a YANG 'container'?",
    options: [
      "To run Docker containers on switches",
      "To group related configuration and state nodes into a hierarchy without implying presence",
      "To store backup configurations",
      "To encrypt telemetry streams"
    ],
    correct: 1,
    explanation: "A YANG container organizes related data nodes hierarchically but does not represent a top-level managed object with independent existence, unlike a 'list'.",
    codeSnippets: ["yaml"],
    tags: ["yang", "model-driven", "data-model"]
  },
  {
    id: 109,
    domain: "Network Automation and Programmability",
    domainKey: "automation",
    difficulty: "medium",
    question: "Which git command creates a new branch for developing a network automation feature isolated from main?",
    options: [
      "git checkout main",
      "git switch -c feature-x",
      "git merge feature-x",
      "git push --force"
    ],
    correct: 1,
    explanation: "git switch -c feature-x creates and switches to a new branch. git checkout main switches branches. git merge integrates branches. git push --force overwrites remote history.",
    codeSnippets: [],
    tags: ["git", "workflow", "automation"]
  },
  {
    id: 110,
    domain: "Network Automation and Programmability",
    domainKey: "automation",
    difficulty: "easy",
    question: "What is the main advantage of using APIs for network management over manual CLI access?",
    options: [
      "CLI access is slower",
      "APIs enable scalable, repeatable automation and integration with external systems",
      "APIs require less initial setup",
      "APIs work only on wireless networks"
    ],
    correct: 1,
    explanation: "APIs provide structured, programmatic access that scales across many devices and integrates with automation pipelines, CI/CD, and monitoring systems.",
    codeSnippets: [],
    tags: ["api", "automation", "networking"]
  },
  {
    id: 111,
    domain: "Network Automation and Programmability",
    domainKey: "automation",
    difficulty: "medium",
    question: "Which Python exception handling construct ensures an API session or SSH connection is closed even when an error occurs?",
    options: [
      "try/except/else",
      "try/finally",
      "if/else",
      "raise/catch"
    ],
    correct: 1,
    explanation: "try/finally guarantees cleanup code runs regardless of exceptions, making it essential for closing API sessions, SSH connections, or file handles in network automation scripts.",
    codeSnippets: ["python"],
    tags: ["python", "error-handling", "automation"]
  },
  {
    id: 112,
    domain: "Network Automation and Programmability",
    domainKey: "automation",
    difficulty: "hard",
    question: "Which Cisco DNA Center Assurance capability correlates client health, network performance, and application experience across wired, wireless, and SD-WAN?",
    options: [
      "Software Image Management",
      "Path Trace",
      "Multidimensional analytics",
      "Plug and Play"
    ],
    correct: 2,
    explanation: "Multidimensional analytics in DNA Center Assurance correlates client, network, and application telemetry across domains for proactive issue detection and root-cause analysis.",
    codeSnippets: ["yaml"],
    tags: ["dna-center", "assurance", "analytics", "automation"]
  },
  {
    id: 113,
    domain: "Network Automation and Programmability",
    domainKey: "automation",
    difficulty: "easy",
    question: "Which protocol is commonly used to secure REST API traffic between automation tools and Cisco controllers?",
    options: [
      "HTTP",
      "HTTPS/TLS",
      "FTP",
      "Telnet"
    ],
    correct: 1,
    explanation: "HTTPS/TLS encrypts REST API traffic in transit. HTTP sends data in plaintext. FTP is file transfer. Telnet is unencrypted remote access.",
    codeSnippets: [],
    tags: ["security", "rest", "tls", "automation"]
  },
  {
    id: 114,
    domain: "Network Automation and Programmability",
    domainKey: "automation",
    difficulty: "medium",
    question: "When using Ansible to configure Cisco IOS XE devices, which connection plugin enables persistent CLI sessions via SSH?",
    options: [
      "local",
      "network_cli",
      "docker",
      "winrm"
    ],
    correct: 1,
    explanation: "network_cli uses persistent SSH CLI sessions to network devices. local runs tasks on the control node. docker and winrm are for container and Windows targets.",
    codeSnippets: ["yaml"],
    tags: ["ansible", "ios-xe", "connection", "ssh"]
  },
  {
    id: 115,
    domain: "Network Automation and Programmability",
    domainKey: "automation",
    difficulty: "medium",
    question: "Which Python type annotation best represents a list of VLAN IDs in a network automation script?",
    options: [
      "Dict[str, int]",
      "List[int]",
      "Tuple[str, str]",
      "Set[bool]"
    ],
    correct: 1,
    explanation: "List[int] correctly represents a list of integers. Dict maps keys to values. Tuple is fixed-size and typically heterogeneous. Set is unordered and unique, less common for ordered VLAN lists.",
    codeSnippets: ["python"],
    tags: ["python", "typing", "automation"]
  },
  {
    id: 116,
    domain: "Network Automation and Programmability",
    domainKey: "automation",
    difficulty: "easy",
    question: "Which Git workflow pattern uses a long-lived main branch and short-lived feature branches merged via pull requests?",
    options: [
      "Trunk-based development",
      "GitFlow",
      "GitHub Flow",
      "Forking workflow"
    ],
    correct: 2,
    explanation: "GitHub Flow uses a single main branch with feature branches merged via pull requests, suitable for continuous delivery. GitFlow has multiple long-lived branches. Trunk-based uses short-lived branches directly off main.",
    codeSnippets: [],
    tags: ["git", "workflow", "automation"]
  },
  {
    id: 117,
    domain: "Network Automation and Programmability",
    domainKey: "automation",
    difficulty: "hard",
    question: "Which JSON encoding of a YANG operational state node indicates that an interface is administratively up but operationally down?",
    options: [
      "\"admin-status\": \"up\", \"oper-status\": \"down\"",
      "\"admin-status\": \"down\", \"oper-status\": \"up\"",
      "\"enabled\": true, \"link-up\": true",
      "\"state\": \"error\""
    ],
    correct: 0,
    explanation: "In Cisco IOS XE YANG models, admin-status reflects the configured 'no shutdown' state, while oper-status reflects the current line protocol/interface status. A mismatch means administratively up but operationally down.",
    codeSnippets: ["yaml"],
    tags: ["yang", "json", "ios-xe", "interfaces"]
  },
  {
    id: 118,
    domain: "Network Automation and Programmability",
    domainKey: "automation",
    difficulty: "easy",
    question: "Which file format is most appropriate for storing device inventory variables like IP addresses, credentials placeholders, and vendor types in Ansible?",
    options: [
      "inventory.yaml",
      "Dockerfile",
      "README.md",
      ".gitignore"
    ],
    correct: 0,
    explanation: "inventory.yaml stores host variables and groups for Ansible. Dockerfile defines container images. README documents projects. .gitignore excludes files from Git.",
    codeSnippets: ["yaml"],
    tags: ["ansible", "inventory", "yaml"]
  },
  {
    id: 119,
    domain: "Network Automation and Programmability",
    domainKey: "automation",
    difficulty: "medium",
    question: "Which of the following is a PRIMARY benefit of using version control for network automation code?",
    options: [
      "It automatically fixes syntax errors",
      "It enables rollback, collaboration, and change history",
      "It compresses configuration files",
      "It replaces the need for testing"
    ],
    correct: 1,
    explanation: "Version control tracks changes, enables collaboration via branching, allows rollback to known-good states, and supports code review—all critical for production network automation.",
    codeSnippets: [],
    tags: ["git", "version-control", "automation"]
  },
  {
    id: 120,
    domain: "Network Automation and Programmability",
    domainKey: "automation",
    difficulty: "easy",
    question: "What is the function of an API key in REST API authentication?",
    options: [
      "To encrypt all HTTP traffic",
      "To identify and authorize the calling application or user",
      "To compress API responses",
      "To configure DNS resolution"
    ],
    correct: 1,
    explanation: "An API key identifies and authorizes the client application making the request. It is typically passed in a header like X-Auth-Token or Authorization.",
    codeSnippets: ["python"],
    tags: ["api", "authentication", "rest", "security"]
  },
  {
    id: 121,
    domain: "Network Automation and Programmability",
    domainKey: "automation",
    difficulty: "medium",
    question: "Which Cisco Meraki API call retrieves the SSID configuration for a specific wireless network?",
    options: [
      "GET /api/v1/organizations/{organizationId}/wireless/ssids",
      "GET /api/v1/networks/{networkId}/wireless/ssids/{number}",
      "POST /api/v1/devices/{serial}/wireless",
      "GET /api/v1/ssids"
    ],
    correct: 1,
    explanation: "GET /api/v1/networks/{networkId}/wireless/ssids/{number} retrieves a specific SSID. Organizations own networks, and SSIDs are nested under networks.",
    codeSnippets: ["python"],
    tags: ["meraki", "wireless", "api", "rest"]
  },
  {
    id: 122,
    domain: "Network Automation and Programmability",
    domainKey: "automation",
    difficulty: "hard",
    question: "When troubleshooting a NETCONF session failure between an automation controller and IOS XE, which log or command is MOST useful to identify YANG schema or capability mismatches?",
    options: [
      "show version",
      "show netconf-yang sessions",
      "show ip route",
      "show running-config"
    ],
    correct: 1,
    explanation: "show netconf-yang sessions displays active NETCONF sessions, capabilities, and errors. It is the primary diagnostic for YANG/RPC issues. show version shows software. show ip route shows routing. show running-config shows CLI config.",
    codeSnippets: ["yaml"],
    tags: ["netconf", "yang", "ios-xe", "troubleshooting"]
  },
  {
    id: 123,
    domain: "Network Automation and Programmability",
    domainKey: "automation",
    difficulty: "easy",
    question: "In a CI/CD pipeline for network automation, which step validates that a Jinja2-rendered configuration passes syntax checks before deployment?",
    options: [
      "Commit stage",
      "Lint/test stage",
      "Production rollout",
      "Documentation generation"
    ],
    correct: 1,
    explanation: "A lint/test stage validates rendered configuration syntax, runs unit tests, and checks YANG/model compliance before any device deployment.",
    codeSnippets: ["yaml"],
    tags: ["cicd", "jinja2", "testing", "automation"]
  },
  {
    id: 124,
    domain: "Network Automation and Programmability",
    domainKey: "automation",
    difficulty: "medium",
    question: "Which Cisco NX-OS feature allows programmatic access to switch configuration using a REST API with JSON payloads?",
    options: [
      "NX-API",
      "CDP",
      "LLDP",
      "STP"
    ],
    correct: 0,
    explanation: "NX-API exposes a REST interface on NX-OS switches, accepting JSON or XML payloads for configuration and operational data. CDP and LLDP are discovery protocols. STP is loop prevention.",
    codeSnippets: ["python"],
    tags: ["nx-os", "nx-api", "rest", "automation"]
  },
  {
    id: 125,
    domain: "Network Automation and Programmability",
    domainKey: "automation",
    difficulty: "easy",
    question: "What is the primary purpose of using source control for network automation scripts?",
    options: [
      "To hide code from other teams",
      "To track changes, collaborate, and revert mistakes",
      "To run scripts directly on network devices",
      "To compress scripts for faster deployment"
    ],
    correct: 1,
    explanation: "Source control tracks every change, enables team collaboration, supports branching/merging, and allows reverting to stable versions—critical for operational network automation.",
    codeSnippets: [],
    tags: ["git", "version-control", "collaboration"]
  },
  {
    id: 126,
    domain: "Network Automation and Programmability",
    domainKey: "automation",
    difficulty: "medium",
    question: "Which RESTCONF operation is used to create a new resource under a collection?",
    options: [
      "GET",
      "POST",
      "PUT",
      "DELETE"
    ],
    correct: 1,
    explanation: "POST creates a new subordinate resource under a collection in RESTCONF. PUT can also create but requires the client to specify the target URI. GET retrieves and DELETE removes.",
    codeSnippets: ["yaml"],
    tags: ["restconf", "http", "yang"]
  },
  {
    id: 127,
    domain: "Network Automation and Programmability",
    domainKey: "automation",
    difficulty: "medium",
    question: "Which Cisco DNA Center REST API call retrieves device compliance information across the fabric?",
    options: [
      "GET /dna/intent/api/v1/compliance",
      "GET /dna/intent/api/v1/network-device",
      "POST /dna/intent/api/v1/configuration",
      "GET /dna/intent/api/v1/clients"
    ],
    correct: 0,
    explanation: "The /dna/intent/api/v1/compliance endpoint returns compliance details. /network-device returns inventory. /configuration manages config templates. /clients returns client data.",
    codeSnippets: ["python"],
    tags: ["dna-center", "api", "compliance", "rest"]
  },
  {
    id: 128,
    domain: "Network Automation and Programmability",
    domainKey: "automation",
    difficulty: "easy",
    question: "What does YAML stand for?",
    options: [
      "Yet Another Markup Language",
      "YAML Ain't Markup Language",
      "Yet Another Module Language",
      "YAML Automation Markup Language"
    ],
    correct: 1,
    explanation: "YAML stands for 'YAML Ain't Markup Language'—a recursive acronym. It is a human-readable data serialization language commonly used for configuration and automation tooling.",
    codeSnippets: [],
    tags: ["yaml", "data-formats", "basics"]
  },
  {
    id: 129,
    domain: "Network Automation and Programmability",
    domainKey: "automation",
    difficulty: "medium",
    question: "Which Python module provides a context manager for safely opening files during log collection from network devices?",
    options: [
      "os",
      "json",
      "with open()",
      "sys"
    ],
    correct: 2,
    explanation: "'with open()' is a context manager that safely opens and closes files, even if exceptions occur during writing. os, json, and sys are unrelated to safe file handling.",
    codeSnippets: ["python"],
    tags: ["python", "file-handling", "automation"]
  },
  {
    id: 130,
    domain: "Network Automation and Programmability",
    domainKey: "automation",
    difficulty: "hard",
    question: "An Ansible playbook against 100 routers intermittently fails with 'connection timed out'. Which change MOST likely improves reliability?",
    options: [
      "Remove become from tasks",
      "Increase persistent connection timeout and enable pipelining",
      "Switch from network_cli to local",
      "Disable host key checking"
    ],
    correct: 1,
    explanation: "Increasing persistent_connection_timeout and enabling pipelining reduces SSH overhead and improves performance over unreliable links. become changes privilege, local bypasses SSH, and disabling host key checking only affects auth prompts.",
    codeSnippets: ["yaml"],
    tags: ["ansible", "ssh", "troubleshooting", "automation"]
  },
  {
    id: 131,
    domain: "Network Automation and Programmability",
    domainKey: "automation",
    difficulty: "easy",
    question: "Which Cisco IOS XE command enables the RESTCONF agent on a device?",
    options: [
      "restconf",
      "netconf-yang",
      "ip http secure-server",
      "aaa new-model"
    ],
    correct: 0,
    explanation: "The 'restconf' global configuration command enables the RESTCONF agent in IOS XE. 'netconf-yang' enables NETCONF. 'ip http secure-server' enables HTTPS. 'aaa new-model' enables AAA.",
    codeSnippets: ["yaml"],
    tags: ["restconf", "ios-xe", "automation"]
  },
  {
    id: 132,
    domain: "Network Automation and Programmability",
    domainKey: "automation",
    difficulty: "medium",
    question: "Which Nornir plugin integrates with Netmiko to send CLI commands to network devices?",
    options: [
      "nornir-netmiko",
      "nornir-napalm",
      "nornir-jinja2",
      "nornir-utils"
    ],
    correct: 0,
    explanation: "nornir-netmiko provides Netmiko-based task execution within Nornir. nornir-napalm uses NAPALM. nornir-jinja2 handles templating. nornir-utils is a generic utilities package.",
    codeSnippets: ["python"],
    tags: ["nornir", "netmiko", "python", "automation"]
  },
  {
    id: 133,
    domain: "Network Automation and Programmability",
    domainKey: "automation",
    difficulty: "medium",
    question: "In DNA Center, which template type allows reusable configuration across device families with variable substitution?",
    options: [
      "CLI Template",
      "Sensor Template",
      "SD-AVC Template",
      "Software Image Management Template"
    ],
    correct: 0,
    explanation: "CLI Templates in DNA Center allow reusable device configuration with variables and conditional logic. Sensor templates collect telemetry. SD-AVC manages application visibility. Software Image Management handles firmware.",
    codeSnippets: ["yaml"],
    tags: ["dna-center", "templates", "automation"]
  },
  {
    id: 134,
    domain: "Network Automation and Programmability",
    domainKey: "automation",
    difficulty: "easy",
    question: "Which Python data structure is ideal for representing a dictionary of device names to IP addresses?",
    options: [
      "list",
      "tuple",
      "dict",
      "set"
    ],
    correct: 2,
    explanation: "dict maps keys to values, making it ideal for device-name-to-IP mappings. list and tuple are ordered sequences. set is unordered and unique.",
    codeSnippets: ["python"],
    tags: ["python", "data-structures", "automation"]
  },
  {
    id: 135,
    domain: "Network Automation and Programmability",
    domainKey: "automation",
    difficulty: "hard",
    question: "When deploying network automation, which practice reduces risk of outage during configuration push?",
    options: [
      "Push directly to production with no validation",
      "Use a rollback plan, schedule changes, and validate with dry-run / diff before applying",
      "Disable logging during changes",
      "Use Telnet instead of SSH"
    ],
    correct: 1,
    explanation: "Rollback plans, scheduling, and pre-deployment validation minimize outage impact. Direct push risks breaking production. Disabling logging removes auditability. Telnet is insecure.",
    codeSnippets: [],
    tags: ["automation", "change-management", "risk"]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { DEVNET_QUESTIONS };
}
