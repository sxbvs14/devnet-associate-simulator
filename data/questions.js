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
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { DEVNET_QUESTIONS };
}
