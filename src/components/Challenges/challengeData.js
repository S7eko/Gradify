const ChallengeData = {
    1: {
        title: 'Basic Cryptography',
        questions: [
            {
                question: 'What is a cipher?',
                options: ['A method of encoding', 'A type of encryption', 'A digital signature', 'None of the above'],
                answer: 'A method of encoding'
            },
            {
                question: 'What are the main types of ciphers?',
                options: ['Substitution, Transposition', 'Symmetric, Asymmetric', 'Public, Private', 'All of the above'],
                answer: 'Substitution, Transposition'
            },
            {
                question: 'What is the Caesar cipher?',
                options: ['A type of substitution cipher', 'A type of block cipher', 'A type of hashing', 'None of the above'],
                answer: 'A type of substitution cipher'
            },
            {
                question: 'Describe how public key infrastructure (PKI) works.',
                options: ['Using a single key for encryption', 'Using two keys for encryption', 'Using hash functions', 'None of the above'],
                answer: 'Using two keys for encryption'
            },
            {
                question: 'What are digital signatures?',
                options: ['A form of authentication', 'A method of encryption', 'A type of malware', 'None of the above'],
                answer: 'A form of authentication'
            },
            {
                question: 'Explain the concept of hashing.',
                options: ['Transforming data into a fixed size', 'Encrypting data', 'Decrypting data', 'None of the above'],
                answer: 'Transforming data into a fixed size'
            },
            {
                question: 'What is symmetric encryption?',
                options: ['Same key for both encryption and decryption', 'Different keys for encryption and decryption', 'Uses a public key', 'None of the above'],
                answer: 'Same key for both encryption and decryption'
            },
            {
                question: 'What is asymmetric encryption?',
                options: ['Same key for encryption and decryption', 'Uses a pair of keys', 'Is faster than symmetric', 'None of the above'],
                answer: 'Uses a pair of keys'
            },
            {
                question: 'What is a hash function?',
                options: ['Transforms input into a fixed-size string', 'Encrypts data', 'Decrypts data', 'None of the above'],
                answer: 'Transforms input into a fixed-size string'
            },
            {
                question: 'What is a keylogger?',
                options: ['A malware that records keystrokes', 'A type of firewall', 'A data encryption method', 'None of the above'],
                answer: 'A malware that records keystrokes'
            },
        ]
    },
    2: {
        title: 'Web Exploit',
        questions: [
            {
                question: 'What is SQL injection?',
                options: ['A type of malware', 'A code injection technique', 'A form of encryption', 'None of the above'],
                answer: 'A code injection technique'
            },
            {
                question: 'Explain Cross-Site Scripting (XSS).',
                options: ['Injecting malicious scripts', 'A type of phishing', 'A method of encryption', 'None of the above'],
                answer: 'Injecting malicious scripts'
            },
            {
                question: 'How can you prevent web vulnerabilities?',
                options: ['Input validation', 'Using HTTPS', 'Regular updates', 'All of the above'],
                answer: 'All of the above'
            },
            {
                question: 'What are the types of XSS attacks?',
                options: ['Stored, Reflected', 'Persistent, Temporary', 'Static, Dynamic', 'None of the above'],
                answer: 'Stored, Reflected'
            },
            {
                question: 'Describe how CSRF attacks work.',
                options: ['Forcing user actions without their knowledge', 'Injecting code into a site', 'Stealing cookies', 'None of the above'],
                answer: 'Forcing user actions without their knowledge'
            },
            {
                question: 'What is the purpose of input validation?',
                options: ['Ensure data is safe and correct', 'Encrypt data', 'Format data', 'None of the above'],
                answer: 'Ensure data is safe and correct'
            },
            {
                question: 'Explain the concept of a web application firewall (WAF).',
                options: ['Filters and monitors HTTP traffic', 'Encrypts data', 'Detects malware', 'None of the above'],
                answer: 'Filters and monitors HTTP traffic'
            },
            {
                question: 'What is Cross-Site Request Forgery (CSRF)?',
                options: ['Forces users to execute unwanted actions', 'Injects scripts into a webpage', 'Records keystrokes', 'None of the above'],
                answer: 'Forces users to execute unwanted actions'
            },
            {
                question: 'What is a zero-day vulnerability?',
                options: ['An unknown exploit', 'A type of malware', 'A secure coding practice', 'None of the above'],
                answer: 'An unknown exploit'
            },
            {
                question: 'What is a backdoor?',
                options: ['A method to bypass authentication', 'A type of firewall', 'A secure connection', 'None of the above'],
                answer: 'A method to bypass authentication'
            },
        ]
    },
    3: {
        title: 'Binary Reverse Engineering',
        questions: [
            {
                question: 'What is binary reverse engineering?',
                options: ['Analyzing compiled binaries', 'Creating malware', 'Encrypting data', 'None of the above'],
                answer: 'Analyzing compiled binaries'
            },
            {
                question: 'Describe the tools used in reverse engineering.',
                options: ['Disassemblers, Debuggers', 'Compilers, Interpreters', 'Editors, Viewers', 'None of the above'],
                answer: 'Disassemblers, Debuggers'
            },
            {
                question: 'What are common techniques for analyzing binary files?',
                options: ['Static and dynamic analysis', 'Encryption', 'Hashing', 'None of the above'],
                answer: 'Static and dynamic analysis'
            },
            {
                question: 'What is a disassembler?',
                options: ['Converts binary to assembly code', 'Encrypts data', 'A type of malware', 'None of the above'],
                answer: 'Converts binary to assembly code'
            },
            {
                question: 'Explain the concept of code obfuscation.',
                options: ['Hiding code to prevent analysis', 'Commenting code', 'Encrypting data', 'None of the above'],
                answer: 'Hiding code to prevent analysis'
            },
            {
                question: 'How can you analyze malware binaries?',
                options: ['Using static and dynamic analysis', 'Only static analysis', 'Only dynamic analysis', 'None of the above'],
                answer: 'Using static and dynamic analysis'
            },
            {
                question: 'Describe the role of static and dynamic analysis in reverse engineering.',
                options: ['Static analysis inspects code, dynamic runs code', 'Both run code', 'Both inspect code', 'None of the above'],
                answer: 'Static analysis inspects code, dynamic runs code'
            },
            {
                question: 'What is malware analysis?',
                options: ['Examining malware to understand behavior', 'Creating malware', 'Distributing malware', 'None of the above'],
                answer: 'Examining malware to understand behavior'
            },
            {
                question: 'What is a debugger?',
                options: ['A tool for testing and debugging code', 'Encrypts data', 'A type of malware', 'None of the above'],
                answer: 'A tool for testing and debugging code'
            },
            {
                question: 'What is static analysis?',
                options: ['Analyzing code without execution', 'Running the code', 'Encrypting the code', 'None of the above'],
                answer: 'Analyzing code without execution'
            },
        ]
    },
    4: {
        title: 'Network Security',
        questions: [
            {
                question: 'What are the main components of network security?',
                options: ['Firewalls, IDS, Encryption', 'Only firewalls', 'Only encryption', 'None of the above'],
                answer: 'Firewalls, IDS, Encryption'
            },
            {
                question: 'Explain the difference between IDS and IPS.',
                options: ['IDS monitors, IPS acts', 'Both monitor', 'Both act', 'None of the above'],
                answer: 'IDS monitors, IPS acts'
            },
            {
                question: 'How do firewalls work?',
                options: ['Filters incoming and outgoing traffic', 'Encrypts data', 'Only protects against malware', 'None of the above'],
                answer: 'Filters incoming and outgoing traffic'
            },
            {
                question: 'What is a VPN?',
                options: ['A private network over the internet', 'A type of malware', 'A web application', 'None of the above'],
                answer: 'A private network over the internet'
            },
            {
                question: 'Describe the principle of least privilege.',
                options: ['Giving users only the access they need', 'Giving all access', 'No access at all', 'None of the above'],
                answer: 'Giving users only the access they need'
            },
            {
                question: 'What is encryption?',
                options: ['Converting data into a secure format', 'Only compressing data', 'Hiding data', 'None of the above'],
                answer: 'Converting data into a secure format'
            },
            {
                question: 'What are the types of firewalls?',
                options: ['Network-based, Host-based', 'Only network-based', 'Only host-based', 'None of the above'],
                answer: 'Network-based, Host-based'
            },
            {
                question: 'What is social engineering?',
                options: ['Manipulating people to gain information', 'A type of malware', 'Only phishing', 'None of the above'],
                answer: 'Manipulating people to gain information'
            },
            {
                question: 'How can you prevent DDoS attacks?',
                options: ['Using rate limiting and firewalls', 'Only using firewalls', 'No need to prevent', 'None of the above'],
                answer: 'Using rate limiting and firewalls'
            },
            {
                question: 'What is a man-in-the-middle attack?',
                options: ['Interception of communication between two parties', 'Only phishing', 'No attack', 'None of the above'],
                answer: 'Interception of communication between two parties'
            },
        ]
    },
    5: {
        title: 'Malware Analysis',
        questions: [
            {
                question: 'What is malware?',
                options: ['Malicious software', 'Only viruses', 'A secure application', 'None of the above'],
                answer: 'Malicious software'
            },
            {
                question: 'What are the types of malware?',
                options: ['Viruses, Worms, Trojans', 'Only viruses', 'Only worms', 'None of the above'],
                answer: 'Viruses, Worms, Trojans'
            },
            {
                question: 'What is a Trojan?',
                options: ['Malware disguised as legitimate software', 'A secure application', 'A type of antivirus', 'None of the above'],
                answer: 'Malware disguised as legitimate software'
            },
            {
                question: 'Explain the concept of ransomware.',
                options: ['Malware that encrypts files and demands payment', 'A secure application', 'A type of firewall', 'None of the above'],
                answer: 'Malware that encrypts files and demands payment'
            },
            {
                question: 'What is a virus?',
                options: ['A type of malware that replicates', 'Only a bug in software', 'A secure application', 'None of the above'],
                answer: 'A type of malware that replicates'
            },
            {
                question: 'How can you analyze malware?',
                options: ['Static and dynamic analysis', 'Only static analysis', 'Only dynamic analysis', 'None of the above'],
                answer: 'Static and dynamic analysis'
            },
            {
                question: 'What is a worm?',
                options: ['A self-replicating malware', 'Only a virus', 'A secure application', 'None of the above'],
                answer: 'A self-replicating malware'
            },
            {
                question: 'What is keylogger malware?',
                options: ['Records keystrokes', 'A type of firewall', 'A secure application', 'None of the above'],
                answer: 'Records keystrokes'
            },
            {
                question: 'What are botnets?',
                options: ['Networks of infected machines', 'A secure application', 'Only a type of antivirus', 'None of the above'],
                answer: 'Networks of infected machines'
            },
            {
                question: 'What is anti-malware?',
                options: ['Software designed to detect and remove malware', 'A type of virus', 'Only a firewall', 'None of the above'],
                answer: 'Software designed to detect and remove malware'
            },
        ]
    },
    6: {
        title: 'Malware Analysis',
        questions: [
            {
                question: 'What is malware analysis?',
                options: ['Examining malware to understand behavior', 'Creating malware', 'Distributing malware', 'None of the above'],
                answer: 'Examining malware to understand behavior'
            },
            {
                question: 'What is a debugger?',
                options: ['A tool for testing and debugging code', 'Encrypts data', 'A type of malware', 'None of the above'],
                answer: 'A tool for testing and debugging code'
            },
            {
                question: 'What is a Zero-day vulnerability?',
                options: ['A type of malware that replicates', 'Only a bug in software', 'A secure application', 'None of the above'],
                answer: 'A type of malware that replicates'
            },  
            {
                question: 'What is a backdoor?',
                options: ['A method to bypass authentication', 'A type of firewall', 'A secure connection', 'None of the above'],
                answer: 'A method to bypass authentication'
            },
            {  
                question: 'What is a zero-day vulnerability?',
                options: ['An unknown exploit', 'A type of malware', 'A secure coding practice', 'None of the above'],
                answer: 'An unknown exploit'
            },
            {
                question: 'What is a backdoor?',
                options: ['A method to bypass authentication', 'A type of firewall', 'A secure connection', 'None of the above'],
                answer: 'A method to bypass authentication'
            },
            {
                question: 'What is a zero-day vulnerability?',
                options: ['An unknown exploit', 'A type of malware', 'A secure coding practice', 'None of the above'],
                answer: 'An unknown exploit'
            },
            {
                
                question: 'What is a backdoor?',
                options: ['A method to bypass authentication', 'A type of firewall', 'A secure connection', 'None of the above'],
                answer: 'A method to bypass authentication'
            },
            {
                question: 'What is a zero-day vulnerability?',
                options: ['An unknown exploit', 'A type of malware', 'A secure coding practice', 'None of the above'],
                answer: 'An unknown exploit'
            },
            
        ]
    },
    7: {
        title: 'Malware Analysis',
        questions: [
            {
                question: 'What is malware analysis?',
                options: ['Examining malware to understand behavior', 'Creating malware', 'Distributing malware', 'None of the above'],
                answer: 'Examining malware to understand behavior'
            },
            {
                question: 'What is a debugger?',
                options: ['A tool for testing and debugging code', 'Encrypts data', 'A type of malware', 'None of the above'],
                answer: 'A tool for testing and debugging code'
            },
            {
                question: 'What is a Zero-day vulnerability?',
                options: ['A type of malware that replicates', 'Only a bug in software', 'A secure application', 'None of the above'],
                answer: 'A type of malware that replicates'
            },  
            {
                question: 'What is a backdoor?',    
                options: ['A method to bypass authentication', 'A type of firewall', 'A secure connection', 'None of the above'],
                answer: 'A method to bypass authentication'
            },
            {
                question: 'What is a zero-day vulnerability?',
                options: ['An unknown exploit', 'A type of malware', 'A secure coding practice', 'None of the above'],
                answer: 'An unknown exploit'
            }
        ]
    },
    8:{
        title: 'Malware Analysis',
        questions: [
            {
                question: 'What is malware analysis?',
                options: ['Examining malware to understand behavior', 'Creating malware', 'Distributing malware', 'None of the above'],
                answer: 'Examining malware to understand behavior'
            },
            {
                question: 'What is a debugger?',
                options: ['A tool for testing and debugging code', 'Encrypts data', 'A type of malware', 'None of the above'],
                answer: 'A tool for testing and debugging code'
            },
            {
                question: 'What is a Zero-day vulnerability?',
                options: ['A type of malware that replicates', 'Only a bug in software', 'A secure application', 'None of the above'],
                answer: 'A type of malware that replicates'
            },  
            {
                question: 'What is a backdoor?',
                options: ['A method to bypass authentication', 'A type of firewall', 'A secure connection', 'None of the above'],
                answer: 'A method to bypass authentication'
            },
            {
                question: 'What is a zero-day vulnerability?',
                options: ['An unknown exploit', 'A type of malware', 'A secure coding practice', 'None of the above'],
                answer: 'An unknown exploit'
            }
        ]
    }

};


export default ChallengeData;
