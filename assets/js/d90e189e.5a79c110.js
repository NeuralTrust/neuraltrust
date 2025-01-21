"use strict";(self.webpackChunkneuraltrust_docs=self.webpackChunkneuraltrust_docs||[]).push([[530],{4531:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"ai-gateway/plugins/prompt-moderation","title":"Prompt Moderation","description":"Overview","source":"@site/docs/ai-gateway/plugins/prompt-moderation.md","sourceDirName":"ai-gateway/plugins","slug":"/ai-gateway/plugins/prompt-moderation","permalink":"/ai-gateway/plugins/prompt-moderation","draft":false,"unlisted":false,"editUrl":"https://github.com/NeuralTrust/neuraltrust/blob/main/docs/ai-gateway/plugins/prompt-moderation.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"tutorialSidebar","previous":{"title":"Token Rate Limiting","permalink":"/ai-gateway/plugins/token-rate-limiting"},"next":{"title":"Data Masking","permalink":"/ai-gateway/plugins/data-masking"}}');var s=t(74848),o=t(28453);const r={sidebar_position:4},a="Prompt Moderation",c={},l=[{value:"Overview",id:"overview",level:2},{value:"Features",id:"features",level:2},{value:"Configuration Examples",id:"configuration-examples",level:2},{value:"Basic Configuration",id:"basic-configuration",level:3},{value:"Security-Focused Configuration",id:"security-focused-configuration",level:3},{value:"AI Safety Configuration",id:"ai-safety-configuration",level:3},{value:"Example Use Cases",id:"example-use-cases",level:2},{value:"1. Content Moderation",id:"1-content-moderation",level:3},{value:"2. CVE Protection",id:"2-cve-protection",level:3},{value:"3. SQL Injection Prevention",id:"3-sql-injection-prevention",level:3},{value:"4. Cryptocurrency Scam Prevention",id:"4-cryptocurrency-scam-prevention",level:3},{value:"5. Financial Advice Protection",id:"5-financial-advice-protection",level:3},{value:"6. Custom Error Messages",id:"6-custom-error-messages",level:3},{value:"Best Practices",id:"best-practices",level:2},{value:"1. Keyword Selection",id:"1-keyword-selection",level:3},{value:"2. Pattern Crafting",id:"2-pattern-crafting",level:3},{value:"3. Threshold Tuning",id:"3-threshold-tuning",level:3},{value:"4. Performance Optimization",id:"4-performance-optimization",level:3},{value:"Performance Considerations",id:"performance-considerations",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"prompt-moderation",children:"Prompt Moderation"})}),"\n",(0,s.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"Prompt Moderation"})," plugin is a sophisticated content filtering system designed to protect your AI gateway from potentially harmful or unwanted content. It employs multiple layers of ",(0,s.jsx)(n.strong,{children:"content analysis"})," to ensure comprehensive protection while maintaining high performance."]}),"\n",(0,s.jsxs)(n.p,{children:["At its core, the plugin implements content filtering through two primary mechanisms: ",(0,s.jsx)(n.strong,{children:"keyword-based blocking"})," and ",(0,s.jsx)(n.strong,{children:"regular expression pattern matching"}),". The keyword system is enhanced with ",(0,s.jsx)(n.strong,{children:"fuzzy matching"})," capabilities, allowing it to detect not just exact matches but also similar variations of prohibited words. This is particularly effective in catching attempts to circumvent the filter through minor word modifications."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"smart detection system"})," utilizes advanced string matching algorithms, specifically the ",(0,s.jsx)(n.strong,{children:"Levenshtein distance"})," calculation, to determine word similarity. This approach is ",(0,s.jsx)(n.strong,{children:"case-insensitive"})," by default and operates with a configurable ",(0,s.jsx)(n.strong,{children:"similarity threshold"})," (ranging from 0 to 1). The default threshold is set to ",(0,s.jsx)(n.strong,{children:"0.8"}),", providing a good balance between strict matching and flexibility. This means that words that are 80% similar to blocked keywords will trigger the filter, effectively catching common evasion techniques like character substitutions or misspellings."]}),"\n",(0,s.jsx)(n.h2,{id:"features",children:"Features"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Keyword-based Blocking"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Fuzzy matching for similar words"}),"\n",(0,s.jsx)(n.li,{children:"Configurable similarity threshold"}),"\n",(0,s.jsx)(n.li,{children:"Case-insensitive matching"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Pattern-based Blocking"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Regular expression support"}),"\n",(0,s.jsx)(n.li,{children:"Complex pattern matching"}),"\n",(0,s.jsx)(n.li,{children:"Pre-compiled patterns for performance"}),"\n",(0,s.jsx)(n.li,{children:"Support for common attack patterns"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Action Configuration"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Customizable block messages"}),"\n",(0,s.jsx)(n.li,{children:"Configurable response codes"}),"\n",(0,s.jsx)(n.li,{children:"Detailed error reporting"}),"\n",(0,s.jsx)(n.li,{children:"Logging and monitoring"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"configuration-examples",children:"Configuration Examples"}),"\n",(0,s.jsx)(n.h3,{id:"basic-configuration",children:"Basic Configuration"}),"\n",(0,s.jsx)(n.p,{children:"The basic configuration provides essential content filtering with commonly needed protections:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    "settings": {\n        "similarity_threshold": 0.8,\n        "keywords": [\n            "hack",\n            "exploit",\n            "vulnerability"\n        ],\n        "regex": [\n            "password.*dump",\n            "sql.*injection"\n        ],\n        "actions": {\n            "type": "block",\n            "message": "Content blocked due to prohibited content: %s"\n        }\n    }\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Key components of the basic configuration:"}),"\n",(0,s.jsx)("h4",{align:"center",children:(0,s.jsx)("strong",{children:(0,s.jsx)("u",{children:"Similarity Threshold"})})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Value Range"}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{children:"Impact"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"0 to 1 (0.8 default)"}),(0,s.jsx)(n.td,{children:"Determines how closely strings must match"}),(0,s.jsx)(n.td,{children:"Controls matching sensitivity"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Higher values (>0.8)"}),(0,s.jsx)(n.td,{children:"Requires closer matches"}),(0,s.jsx)(n.td,{children:"Reduces false positives"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Lower values (<0.8)"}),(0,s.jsx)(n.td,{children:"Allows more variation"}),(0,s.jsx)(n.td,{children:"Catches more variations"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"security-focused-configuration",children:"Security-Focused Configuration"}),"\n",(0,s.jsx)(n.p,{children:"For environments requiring strict security controls:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    "settings": {\n        "similarity_threshold": 0.8,\n        "keywords": [\n            "hack",\n            "exploit",\n            "vulnerability",\n            "injection",\n            "overflow",\n            "backdoor"\n        ],\n        "regex": [\n            "CVE-\\\\d{4}-\\\\d{4,7}",\n            "password.*dump",\n            "sql.*injection",\n            "(union|select|delete|drop|update|insert).*table",\n            "exec.*\\\\(.*\\\\)",\n            "system\\\\(.*\\\\)"\n        ],\n        "actions": {\n            "type": "block",\n            "message": "Security violation detected: %s. This incident will be logged."\n        }\n    }\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"ai-safety-configuration",children:"AI Safety Configuration"}),"\n",(0,s.jsx)(n.p,{children:"Specifically designed for AI model protection:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    "settings": {\n        "similarity_threshold": 0.8,\n        "keywords": [\n            "jailbreak",\n            "bypass",\n            "ignore previous",\n            "ignore rules",\n            "system prompt"\n        ],\n        "regex": [\n            "you\\\\s+are\\\\s+now\\\\s+.*",\n            "ignore\\\\s+all\\\\s+.*instructions",\n            "disregard\\\\s+.*safety",\n            "\\\\{\\\\{.*\\\\}\\\\}",\n            "<.*>.*</.*>"\n        ],\n        "actions": {\n            "type": "block",\n            "message": "Prompt rejected: Potential safety bypass attempt detected."\n        }\n    }\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"example-use-cases",children:"Example Use Cases"}),"\n",(0,s.jsx)(n.h3,{id:"1-content-moderation",children:"1. Content Moderation"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"keyword-based"})," blocking feature is particularly effective for content ",(0,s.jsx)(n.strong,{children:"moderation"}),' in AI systems where users might try to bypass filters using creative spelling. For instance, if you configure the plugin with the keyword "hack" and a similarity threshold of 0.8, it will catch variations like "h4ck", "hakk", or "h@ck". This is especially useful in educational platforms where you want to prevent discussions about hacking while allowing legitimate security discussions. The ',(0,s.jsx)(n.strong,{children:"fuzzy"})," matching capability means that even if someone tries to evade ",(0,s.jsx)(n.strong,{children:"detection"}),' by using "hacc" or "haccc", the system will still identify and block these attempts, making it significantly more difficult to circumvent the protection.']}),"\n",(0,s.jsx)(n.p,{children:"First, create a gateway to protect hacking:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'curl -X POST "http://localhost:8080/api/v1/gateways" \\\n  -H "Content-Type: application/json" \\\n  -d \'{\n    "name": "Prompt Moderation Gateway",\n    "subdomain": "prompt-mod-test",\n    "required_plugins": [\n        {\n            "name": "prompt_moderation",\n            "enabled": true,\n            "stage": "pre_request",\n            "priority": 1,\n            "settings": {\n                "similarity_threshold": 0.5,\n                "keywords": [\n                    "hack",\n                    "exploit",\n                    "vulnerability"\n                ],\n                "regex": [\n                    "password.*dump",\n                    "sql.*injection",\n                    "CVE-\\\\d{4}-\\\\d{4,7}"\n                ],\n                "actions": {\n                    "type": "block",\n                    "message": "Content blocked due to prohibited content: %s"\n                }\n            }\n        }\n    ]\n}\'\n'})}),"\n",(0,s.jsx)(n.p,{children:"Then test with clean content (should pass):"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'curl -X POST "http://localhost:8081/post" \\\n    -H "Host: prompt-mod-test.example.com" \\\n    -H "X-API-Key: ${API_KEY}" \\\n    -H "Content-Type: application/json" \\\n    -d \'{"prompt": "Tell me about machine learning"}\'\n\n# Expected Response: 200 OK\n'})}),"\n",(0,s.jsx)(n.p,{children:"Test with blocked content:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'curl -X POST "http://localhost:8081/post" \\\n    -H "Host: prompt-mod-test.example.com" \\\n    -H "X-API-Key: ${API_KEY}" \\\n    -H "Content-Type: application/json" \\\n    -d \'{"prompt": "How to hacking into a system"}\'\n\n# Expected Response: 403 Forbidden\n# Message: "Content blocked due to prohibited content: hack"\n'})}),"\n",(0,s.jsx)(n.h3,{id:"2-cve-protection",children:"2. CVE Protection"}),"\n",(0,s.jsxs)(n.p,{children:['Complex pattern matching combines multiple rules to create sophisticated content filters. For example, in a security context, you might want to prevent any attempts to discuss specific vulnerabilities or exploits. The system can detect and block CVE numbers and related security discussions using regex patterns like "CVE-\\d',4,"-\\d",7,'" combined with keywords like "exploit" or "vulnerability". This comprehensive approach helps prevent the AI from inadvertently providing information about security vulnerabilities.']}),"\n",(0,s.jsx)(n.p,{children:"First, create a the gateway to protect CVE numbers:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'curl -X POST "http://localhost:8080/api/v1/gateways" \\\n  -H "Content-Type: application/json" \\\n  -d \'{\n    "name": "CVE Protection Gateway",\n    "subdomain": "cve-protection-test",\n    "required_plugins": [\n        {\n            "name": "prompt_moderation",\n            "enabled": true,\n            "stage": "pre_request",\n            "priority": 1,\n            "settings": {\n                "similarity_threshold": 0.8,\n                "keywords": [\n                    "exploit",\n                    "vulnerability",\n                    "security bug"\n                ],\n                "regex": [\n                    "CVE-\\\\d{4}-\\\\d{4,7}",\n                    "vulnerability.*found",\n                    "security.*patch"\n                ],\n                "actions": {\n                    "type": "block",\n                    "message": "Security information blocked: %s"\n                }\n            }\n        }\n    ]\n}\'\n'})}),"\n",(0,s.jsx)(n.p,{children:"Test with clean content:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'curl -X POST "http://localhost:8081/post" \\\n    -H "Host: cve-protection-test.example.com" \\\n    -H "X-API-Key: ${API_KEY}" \\\n    -H "Content-Type: application/json" \\\n    -d \'{"prompt": "Tell me about software development"}\'\n\n# Expected Response: 200 OK\n'})}),"\n",(0,s.jsx)(n.p,{children:"Test with CVE pattern:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'curl -X POST "http://localhost:8081/post" \\\n    -H "Host: cve-protection-test.example.com" \\\n    -H "X-API-Key: ${API_KEY}" \\\n    -H "Content-Type: application/json" \\\n    -d \'{"prompt": "Tell me about CVE-2024-1234"}\'\n\n# Expected Response: 403 Forbidden\n# Message: "Security information blocked: CVE-2024-1234"\n'})}),"\n",(0,s.jsx)(n.h3,{id:"3-sql-injection-prevention",children:"3. SQL Injection Prevention"}),"\n",(0,s.jsx)(n.p,{children:'Pattern-based blocking using regular expressions provides powerful protection against structured threats and known attack patterns. Consider a scenario where you want to prevent users from attempting to extract sensitive information through SQL injection. By implementing a regex pattern like "(select|union|drop).*from.*where", the system can detect and block sophisticated SQL injection attempts even when they\'re disguised within natural language.'}),"\n",(0,s.jsx)(n.p,{children:"First, create a gateway with SQL injection protection:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'curl -X POST "http://localhost:8080/api/v1/gateways" \\\n  -H "Content-Type: application/json" \\\n  -d \'{\n    "name": "SQL Protection Gateway",\n    "subdomain": "sql-protection-test",\n    "required_plugins": [\n        {\n            "name": "prompt_moderation",\n            "enabled": true,\n            "stage": "pre_request",\n            "priority": 1,\n            "settings": {\n                "similarity_threshold": 0.8,\n                "keywords": [\n                    "sql",\n                    "injection",\n                    "database"\n                ],\n                "regex": [\n                    "sql.*injection",\n                    "(union|select|delete|drop|update|insert).*table",\n                    "from.*where.*password"\n                ],\n                "actions": {\n                    "type": "block",\n                    "message": "SQL injection attempt blocked: %s"\n                }\n            }\n        }\n    ]\n}\'\n'})}),"\n",(0,s.jsx)(n.p,{children:"Test with clean content:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'curl -X POST "http://localhost:8081/post" \\\n    -H "Host: sql-protection-test.example.com" \\\n    -H "X-API-Key: ${API_KEY}" \\\n    -H "Content-Type: application/json" \\\n    -d \'{"prompt": "What is a database?"}\'\n\n# Expected Response: 200 OK\n'})}),"\n",(0,s.jsx)(n.p,{children:"Test with SQL injection pattern:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'curl -X POST "http://localhost:8081/post" \\\n    -H "Host: sql-protection-test.example.com" \\\n    -H "X-API-Key: ${API_KEY}" \\\n    -H "Content-Type: application/json" \\\n    -d \'{"prompt": "How to perform sql injection attacks"}\'\n\n# Expected Response: 403 Forbidden\n# Message: "SQL injection attempt blocked: sql.*injection"\n'})}),"\n",(0,s.jsx)(n.h3,{id:"4-cryptocurrency-scam-prevention",children:"4. Cryptocurrency Scam Prevention"}),"\n",(0,s.jsx)(n.p,{children:"The fuzzy matching capability is particularly powerful when dealing with intentional misspellings and character substitutions. In a real-world scenario, if you're protecting against cryptocurrency scams, you might block variations of cryptocurrency terms and common scam phrases."}),"\n",(0,s.jsx)(n.p,{children:"First, create a gateway with crypto scam protection:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'curl -X POST "http://localhost:8080/api/v1/gateways" \\\n  -H "Content-Type: application/json" \\\n  -d \'{\n    "name": "Crypto Protection Gateway",\n    "subdomain": "crypto-protection-test",\n    "required_plugins": [\n        {\n            "name": "prompt_moderation",\n            "enabled": true,\n            "stage": "pre_request",\n            "priority": 1,\n            "settings": {\n                "similarity_threshold": 0.8,\n                "keywords": [\n                    "ethereum",\n                    "bitcoin",\n                    "crypto",\n                    "moonshot",\n                    "pump"\n                ],\n                "regex": [\n                    "\\\\d+x.*gains",\n                    "invest.*crypto",\n                    "buy.*(btc|eth|coin)"\n                ],\n                "actions": {\n                    "type": "block",\n                    "message": "Cryptocurrency discussion blocked: %s"\n                }\n            }\n        }\n    ]\n}\'\n'})}),"\n",(0,s.jsx)(n.p,{children:"Test with clean content:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'curl -X POST "http://localhost:8081/post" \\\n    -H "Host: crypto-protection-test.example.com" \\\n    -H "X-API-Key: ${API_KEY}" \\\n    -H "Content-Type: application/json" \\\n    -d \'{"prompt": "Tell me about traditional banking"}\'\n\n# Expected Response: 200 OK\n'})}),"\n",(0,s.jsx)(n.p,{children:"Test with crypto scam pattern:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'curl -X POST "http://localhost:8081/post" \\\n    -H "Host: crypto-protection-test.example.com" \\\n    -H "X-API-Key: ${API_KEY}" \\\n    -H "Content-Type: application/json" \\\n    -d \'{"prompt": "How to invest in eth3reum for 100x gains"}\'\n\n# Expected Response: 403 Forbidden\n# Message: "Cryptocurrency discussion blocked: ethereum (similarity: 0.85)"\n'})}),"\n",(0,s.jsx)(n.h3,{id:"5-financial-advice-protection",children:"5. Financial Advice Protection"}),"\n",(0,s.jsx)(n.p,{children:"Complex pattern matching combines multiple rules to create sophisticated content filters for preventing unauthorized financial advice."}),"\n",(0,s.jsx)(n.p,{children:"First, create a gateway with financial advice protection:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'curl -X POST "http://localhost:8080/api/v1/gateways" \\\n  -H "Content-Type: application/json" \\\n  -d \'{\n    "name": "Financial Protection Gateway",\n    "subdomain": "finance-protection-test",\n    "required_plugins": [\n        {\n            "name": "prompt_moderation",\n            "enabled": true,\n            "stage": "pre_request",\n            "priority": 1,\n            "settings": {\n                "similarity_threshold": 0.8,\n                "keywords": [\n                    "invest",\n                    "trading",\n                    "portfolio",\n                    "stocks",\n                    "options"\n                ],\n                "regex": [\n                    "invest.*\\\\$\\\\d+",\n                    "buy.*(stock|option|share)",\n                    "trade.*(strategy|tip)",\n                    "market.*timing"\n                ],\n                "actions": {\n                    "type": "block",\n                    "message": "Financial advice request blocked: %s"\n                }\n            }\n        }\n    ]\n}\'\n'})}),"\n",(0,s.jsx)(n.p,{children:"Test with clean content:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'curl -X POST "http://localhost:8081/post" \\\n    -H "Host: finance-protection-test.example.com" \\\n    -H "X-API-Key: ${API_KEY}" \\\n    -H "Content-Type: application/json" \\\n    -d \'{"prompt": "What is a bank account?"}\'\n\n# Expected Response: 200 OK\n'})}),"\n",(0,s.jsx)(n.p,{children:"Test with financial advice pattern:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'curl -X POST "http://localhost:8081/post" \\\n    -H "Host: finance-protection-test.example.com" \\\n    -H "X-API-Key: ${API_KEY}" \\\n    -H "Content-Type: application/json" \\\n    -d \'{"prompt": "How to invest $1000 for maximum gains"}\'\n\n# Expected Response: 403 Forbidden\n# Message: "Financial advice request blocked: invest.*\\\\$\\\\d+"\n'})}),"\n",(0,s.jsx)(n.h3,{id:"6-custom-error-messages",children:"6. Custom Error Messages"}),"\n",(0,s.jsx)(n.p,{children:"The action configuration feature allows you to customize how the system responds to detected threats with context-aware messages."}),"\n",(0,s.jsx)(n.p,{children:"First, create a gateway with custom error messages:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'curl -X POST "http://localhost:8080/api/v1/gateways" \\\n  -H "Content-Type: application/json" \\\n  -d \'{\n    "name": "Custom Error Gateway",\n    "subdomain": "custom-error-test",\n    "required_plugins": [\n        {\n            "name": "prompt_moderation",\n            "enabled": true,\n            "stage": "pre_request",\n            "priority": 1,\n            "settings": {\n                "similarity_threshold": 0.8,\n                "keywords": [\n                    "hack",\n                    "exploit",\n                    "bypass"\n                ],\n                "regex": [\n                    "security.*bypass",\n                    "password.*crack",\n                    "system.*hack"\n                ],\n                "actions": {\n                    "type": "block",\n                    "message": "Security policy violation #SEC-%d (Corporate Policy 4.2.1). This attempt has been logged and reported. Detected: %s"\n                }\n            }\n        }\n    ]\n}\'\n'})}),"\n",(0,s.jsx)(n.p,{children:"Test with clean content:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'curl -X POST "http://localhost:8081/post" \\\n    -H "Host: custom-error-test.example.com" \\\n    -H "X-API-Key: ${API_KEY}" \\\n    -H "Content-Type: application/json" \\\n    -d \'{"prompt": "How to improve system security?"}\'\n\n# Expected Response: 200 OK\n'})}),"\n",(0,s.jsx)(n.p,{children:"Test with security violation:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'curl -X POST "http://localhost:8081/post" \\\n    -H "Host: custom-error-test.example.com" \\\n    -H "X-API-Key: ${API_KEY}" \\\n    -H "Content-Type: application/json" \\\n    -d \'{"prompt": "How to bypass system security"}\'\n\n# Expected Response: 403 Forbidden\n# Message: "Security policy violation #SEC-123 (Corporate Policy 4.2.1). This attempt has been logged and reported. Detected: security.*bypass"\n'})}),"\n",(0,s.jsx)(n.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,s.jsx)(n.h3,{id:"1-keyword-selection",children:"1. Keyword Selection"}),"\n",(0,s.jsx)(n.p,{children:"\u2022 Start with a focused list of clearly harmful terms"}),"\n",(0,s.jsx)(n.p,{children:"\u2022 Avoid overly common words that may cause false positives"}),"\n",(0,s.jsx)(n.p,{children:"\u2022 Consider language variations and common misspellings"}),"\n",(0,s.jsx)(n.p,{children:"\u2022 Regularly update keywords based on new threats"}),"\n",(0,s.jsx)(n.h3,{id:"2-pattern-crafting",children:"2. Pattern Crafting"}),"\n",(0,s.jsx)(n.p,{children:"\u2022 Use specific regex patterns targeting known attack vectors"}),"\n",(0,s.jsx)(n.p,{children:"\u2022 Test patterns thoroughly before deployment"}),"\n",(0,s.jsx)(n.p,{children:"\u2022 Consider performance impact of complex patterns"}),"\n",(0,s.jsx)(n.p,{children:"\u2022 Document pattern purposes for maintenance"}),"\n",(0,s.jsx)(n.h3,{id:"3-threshold-tuning",children:"3. Threshold Tuning"}),"\n",(0,s.jsx)(n.p,{children:"\u2022 Start with the default 0.8 threshold"}),"\n",(0,s.jsx)(n.p,{children:"\u2022 Increase threshold for stricter matching"}),"\n",(0,s.jsx)(n.p,{children:"\u2022 Lower threshold to catch more variations"}),"\n",(0,s.jsx)(n.p,{children:"\u2022 Monitor false positive/negative rates"}),"\n",(0,s.jsx)(n.h3,{id:"4-performance-optimization",children:"4. Performance Optimization"}),"\n",(0,s.jsx)(n.p,{children:"\u2022 Keep keyword lists focused and relevant"}),"\n",(0,s.jsx)(n.p,{children:"\u2022 Use simple regex patterns where possible"}),"\n",(0,s.jsx)(n.p,{children:"\u2022 Monitor processing times"}),"\n",(0,s.jsx)(n.p,{children:"\u2022 Cache compiled patterns"}),"\n",(0,s.jsx)(n.h2,{id:"performance-considerations",children:"Performance Considerations"}),"\n",(0,s.jsxs)(n.p,{children:["The Prompt Moderation plugin delivers exceptional performance through a sophisticated architecture that combines efficient ",(0,s.jsx)(n.strong,{children:"pattern compilation"})," and string matching capabilities. At initialization, all regex patterns are compiled once and stored in memory, enabling quick access and efficient pattern matching throughout the plugin's lifecycle. The string matching system leverages optimized ",(0,s.jsx)(n.strong,{children:"Levenshtein distance"})," calculations and smart word tokenization, while maintaining memory-efficient string comparisons. This comprehensive approach ensures that pattern matching operations are executed with minimal computational overhead, making the plugin ideal for high-throughput environments where performance is critical."]}),"\n",(0,s.jsxs)(n.p,{children:["The plugin's resource management strategy is built around maintaining minimal memory footprint and optimal ",(0,s.jsx)(n.strong,{children:"CPU utilization"}),". Through intelligent caching mechanisms and efficient data structures, the system achieves consistent performance while scaling linearly with increasing workloads. The architecture supports ",(0,s.jsx)(n.strong,{children:"concurrent processing"})," with low latency, enabling seamless handling of multiple requests simultaneously. This scalability-focused design, combined with pre-compiled patterns and optimized algorithms, ensures the plugin can handle growing demands while maintaining robust content filtering capabilities across distributed operations."]})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var i=t(96540);const s={},o=i.createContext(s);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);