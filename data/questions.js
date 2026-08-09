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
    explanation: "The Singleton Pattern ensures a class has only one instance and provides a global point of access to it. For connection pool management (like DNA Center API clients), Singleton prevents multiple redundant connections and ensures resource efficiency. Factory creates objects, Observer handles event-driven updates, and Strategy selects algorithms at runtime.",
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
    explanation: "The @property decorator creates a getter for the private attribute __ip (name mangled to _NetworkDevice__ip). device.ip successfully returns '192.168.1.1'. device.__ip directly accesses a non-existent attribute (name mangling means __ip ≠ _NetworkDevice__ip from outside), raising AttributeError. This demonstrates encapsulation and Python's name mangling convention.",
    codeSnippets: ["python"],
    tags: ["python", "oop", "encapsulation"]
  },
  {
    id: 3,
    domain: "Software Development and Design",
    domainKey: "software",
    difficulty: "hard",
    question: "A developer needs to handle multiple API responses from Cisco Meraki (JSON), Cisco IOS XE (XML via NETCONF), and YAML configuration files in a unified format. Which Python library combination is MOST appropriate?",
    options: [
      "json and xml.etree.ElementTree",
      "json, xml.etree.ElementTree, and PyYAML",
      "requests and BeautifulSoup",
      "pandas and numpy"
    ],
    correct: 1,
    explanation: "json handles Meraki JSON responses, xml.etree.ElementTree (or lxml) parses NETCONF XML payloads from IOS XE, and PyYAML handles YAML configs. requests fetches the APIs but doesn't parse formats. BeautifulSoup is for HTML/XML scraping, not programmatic API parsing. pandas/numpy are for data analysis, not format conversion.",
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
    explanation: "Single Responsibility Principle (SRP) states that a class or module should have only one reason to change, meaning it should have only one job. In network automation, this means separating configuration parsing, API communication, and data storage into distinct modules rather than a monolithic script.",
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
    explanation: "Sets use hash tables, providing O(1) average-case lookup time versus O(n) for lists/tuples. For 100,000 IPs with repeated membership checks, a set is dramatically faster. Dictionaries are also O(1) but are designed for key-value pairs, not pure membership testing. Tuples are immutable but still O(n) for 'in' operations.",
    codeSnippets: ["python"],
    tags: ["python", "data-structures", "performance"]
  },

  // ==================== UNDERSTANDING AND USING APIS (20%) ====================
  {
    id: 6,
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
    explanation: "PUT is idempotent—making the same request multiple times produces the same result. It replaces the entire resource at a known URI. PATCH is also used for updates but is not strictly idempotent (partial updates can have cumulative effects). POST is not idempotent (creates new resources). DELETE is idempotent but removes resources.",
    codeSnippets: [],
    tags: ["rest", "http", "api-design"]
  },
  {
    id: 7,
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
    explanation: "RESTCONF is an IETF standard (RFC 8040) that uses HTTP/HTTPS with standard REST methods, making it firewall-friendly. NETCONF (RFC 6241/6242) uses SSH or TLS as a transport layer with its own RPC model. Both can use XML or JSON (with appropriate media types), both can retrieve operational data, and both are open standards.",
    codeSnippets: ["restconf", "yaml"],
    tags: ["restconf", "netconf", "ios-xe", "ietf"]
  },
  {
    id: 8,
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
    explanation: "HTTP 429 indicates rate limiting. The Retry-After header (in seconds) tells the client when to retry. X-RateLimit-Reset (Unix timestamp) is common in some APIs but Retry-After is the standard HTTP mechanism. Immediate retry worsens the problem. WWW-Authenticate is for 401/403 auth challenges.",
    codeSnippets: ["python"],
    tags: ["meraki", "rate-limiting", "http", "error-handling"]
  },
  {
    id: 9,
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
    explanation: "X-Auth-Token carries the bearer token obtained from the DNA Center authentication endpoint (/dna/system/api/v1/auth/token). It's analogous to Authorization: Bearer <token>. The Content-Type header specifies the data format. CORS is a browser security feature controlled by server responses, not client headers.",
    codeSnippets: ["python"],
    tags: ["dna-center", "authentication", "headers"]
  },
  {
    id: 10,
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
    explanation: "4xx status codes (400-499) indicate client errors: 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 429 Too Many Requests. 1xx is informational, 2xx is success, 3xx is redirection, 5xx is server errors.",
    codeSnippets: [],
    tags: ["http", "status-codes", "rest"]
  },
  {
    id: 11,
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
    explanation: "requests.post(url, json=payload) automatically serializes the payload to JSON and sets Content-Type: application/json. Option A requires manual JSON serialization and doesn't set the header automatically. Option C passes raw data without serialization and would fail. Option D is for multipart/form-data file uploads.",
    codeSnippets: ["python"],
    tags: ["python", "requests", "http", "json"]
  },

  // ==================== CISCO PLATFORMS AND DEVELOPMENT (15%) ====================
  {
    id: 12,
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
    explanation: "The Meraki Dashboard (dashboard.meraki.com) is the cloud-based management platform for all Meraki products (MR access points, MS switches, MX security appliances, MV cameras). DNA Center is for enterprise network management (on-prem or cloud), FMC for firepower, Prime for legacy infrastructure.",
    codeSnippets: [],
    tags: ["meraki", "dashboard", "platforms"]
  },
  {
    id: 13,
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
    explanation: "Intent-based networking (IBN) in DNA Center allows administrators to define high-level business policies (e.g., 'guest users get internet only') which the system translates into device configurations. Traditional management requires manual per-device CLI, SNMP, or static ACLs. IBN abstracts complexity and ensures policy compliance across the fabric.",
    codeSnippets: [],
    tags: ["dna-center", "intent-based", "policy"]
  },
  {
    id: 14,
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
    explanation: "GET /v1/memberships retrieves memberships, which link people to rooms. To find all rooms a user is in, you filter memberships by personId. /v1/rooms lists all rooms in the org (admin view). /v1/people retrieves user details. POST creates resources, it doesn't retrieve.",
    codeSnippets: ["python"],
    tags: ["webex", "api", "rest"]
  },
  {
    id: 15,
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
    explanation: "ucsmsdk is Cisco's official Python SDK for UCS Manager, wrapping the UCS XML API for managing service profiles, policies, chassis, and fabric interconnects. requests is generic HTTP. netmiko is for CLI/SSH to network devices. pyats is Cisco's testing/automation framework for network validation.",
    codeSnippets: ["python"],
    tags: ["ucs", "ucsm", "xml-api", "python"]
  },
  {
    id: 16,
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
    explanation: "Cisco IOS XE (Catalyst 9000 series) supports App Hosting, allowing Docker containers to run on the switch itself via the Application Hosting API or CLI (app-hosting). This enables edge computing, IoT processing, and custom telemetry agents directly on the infrastructure.",
    codeSnippets: ["dockerfile", "yaml"],
    tags: ["ios-xe", "app-hosting", "docker", "containers"]
  },

  // ==================== APPLICATION DEPLOYMENT AND SECURITY (15%) ====================
  {
    id: 17,
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
    explanation: "COPY requirements.txt . (followed by RUN pip install -r requirements.txt) is the standard Docker layer caching optimization. ADD has additional features (URL download, tar extraction) but COPY is preferred for simple file copying. RUN pip install is incorrect syntax. FROM specifies the base image.",
    codeSnippets: ["dockerfile"],
    tags: ["docker", "deployment", "optimization"]
  },
  {
    id: 18,
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
    explanation: "Client Credentials grant is designed for machine-to-machine authentication where the client (automation tool) authenticates directly with the authorization server using its client_id and client_secret. Authorization Code requires user interaction. Implicit is for SPAs (insecure). Resource Owner Password requires user credentials (not recommended).",
    codeSnippets: ["python"],
    tags: ["oauth", "webex", "authentication", "security"]
  },
  {
    id: 19,
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
    explanation: "Environment variables store configuration that changes between deployments (staging, production, development) without modifying code—API keys, database URLs, service endpoints. This keeps code identical across environments and secrets out of source control.",
    codeSnippets: [],
    tags: ["12-factor", "configuration", "deployment"]
  },
  {
    id: 20,
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
    explanation: "Any exposed API key must be treated as compromised. Immediate action: rotate the key (generate a new one via Cisco console), revoke the old one, and store the new key in environment variables, a secrets manager (HashiCorp Vault, AWS Secrets Manager), or CI/CD secret store. .gitignore prevents future leaks but doesn't fix the current exposure.",
    codeSnippets: [],
    tags: ["security", "secrets", "api-keys", "git"]
  },
  {
    id: 21,
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
    explanation: "on: push with branches: [main] triggers on pushes to main. pull_request triggers on PR creation/update. release triggers on GitHub release creation. schedule uses cron syntax for time-based runs.",
    codeSnippets: ["yaml"],
    tags: ["github-actions", "cicd", "automation"]
  },

  // ==================== INFRASTRUCTURE AND AUTOMATION (20%) ====================
  {
    id: 22,
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
    id: 23,
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
    explanation: "YANG (RFC 7950) is a data modeling language used to model configuration and state data for network protocols like NETCONF and RESTCONF. It defines the structure, constraints, and semantics of data (e.g., interfaces, ACLs). It doesn't provide CLI syntax, encryption, or directly replace SNMP.",
    codeSnippets: ["yaml"],
    tags: ["yang", "netconf", "data-modeling"]
  },
  {
    id: 24,
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
    explanation: "ios_config requires network_cli (SSH) connection for IOS XE devices. Ansible's network_cli plugin establishes an SSH session and uses the device CLI. HTTP/HTTPS is for RESTCONF. NETCONF over SSH requires the ios_config module's netconf connection (less common). SNMP is read-only for configuration.",
    codeSnippets: ["yaml"],
    tags: ["ansible", "ios-xe", "network-cli", "automation"]
  },
  {
    id: 25,
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
    explanation: "/dna/intent/api/v1/client-health is the DNA Center Assurance API for retrieving client health data (success rate, RSSI, data rate, roaming). It accepts timeWindow parameters. The other paths are incorrect or don't exist in the standard DNA Center API.",
    codeSnippets: ["python"],
    tags: ["dna-center", "assurance", "api", "client-health"]
  },
  {
    id: 26,
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
    explanation: "Ansible is agentless (uses SSH), declarative (YAML playbooks define desired state), and has extensive network modules (ios_config, iosxr_config, etc.). Chef/Puppet require agents on managed nodes. SaltStack can be agentless but Ansible is the industry standard for network automation.",
    codeSnippets: ["yaml"],
    tags: ["ansible", "configuration-management", "network-automation"]
  },
  {
    id: 27,
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
    explanation: "Idempotency means applying the same configuration multiple times yields the same end state without unintended side effects. Ansible checks the current state before making changes. If a config is already correct, Ansible skips it. This is critical for reliable network automation.",
    codeSnippets: [],
    tags: ["ansible", "idempotency", "concepts"]
  },

  // ==================== NETWORK FUNDAMENTALS (15%) ====================
  {
    id: 28,
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
    explanation: "Layer 3 (Network) handles logical addressing (IP) and routing between networks using routers. Layer 2 handles switching within a network (MAC addresses). Layer 4 handles end-to-end connections (TCP/UDP). Layer 7 is the application layer.",
    codeSnippets: [],
    tags: ["osi", "networking", "fundamentals"]
  },
  {
    id: 29,
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
    explanation: "RESTCONF uses 'application/yang-data+json' (RFC 7950) for JSON-encoded YANG data. XML uses 'application/yang-data+xml'. Both can retrieve operational data via the <restconf>/data/ endpoint. The media type indicates the data format, not the source.",
    codeSnippets: ["restconf", "json"],
    tags: ["restconf", "yang", "ios-xe", "media-types"]
  },
  {
    id: 30,
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
    explanation: "VLANs segment broadcast domains at Layer 2, improving security and reducing broadcast traffic. Devices in different VLANs cannot communicate without a router (Layer 3). VLANs don't provide wireless (that's WLANs), encryption (that's IPsec/SSL), or IP assignment (that's DHCP).",
    codeSnippets: [],
    tags: ["vlan", "switching", "layer-2"]
  },
  {
    id: 31,
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
    explanation: "RFC 1918 private ranges: 10.0.0.0/8 (10.x.x.x), 172.16.0.0/12 (172.16.x.x - 172.31.x.x), 192.168.0.0/16 (192.168.x.x). 192.0.2.0/24 etc. are TEST-NET documentation ranges. 127.0.0.0/8 is loopback, 169.254.0.0/16 is link-local, 224.0.0.0/4 is multicast. 100.64.0.0/10 is Shared Address Space (RFC 6598).",
    codeSnippets: [],
    tags: ["ipv4", "addressing", "rfc1918"]
  },
  {
    id: 32,
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
    explanation: "show version displays IOS version, system uptime, device model, memory, configuration register, and boot image. show running-config shows active config. show ip interface brief shows IP addresses and status. show interfaces shows detailed interface stats.",
    codeSnippets: [],
    tags: ["ios-xe", "cli", "troubleshooting"]
  }
];

// Export for use in app.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { DEVNET_QUESTIONS };
}
