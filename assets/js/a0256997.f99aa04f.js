"use strict";(self.webpackChunkneuraltrust_docs=self.webpackChunkneuraltrust_docs||[]).push([[8204],{78164:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"ai-gateway/concepts/traffic-management","title":"Traffic Management","description":"The AI Gateway provides advanced traffic management capabilities to control how requests are distributed across multiple targets, enabling sophisticated load balancing, testing, and deployment strategies.","source":"@site/docs/ai-gateway/concepts/traffic-management.md","sourceDirName":"ai-gateway/concepts","slug":"/ai-gateway/concepts/traffic-management","permalink":"/ai-gateway/concepts/traffic-management","draft":false,"unlisted":false,"editUrl":"https://github.com/NeuralTrust/neuraltrust/blob/main/docs/ai-gateway/concepts/traffic-management.md","tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"sidebar_position":6},"sidebar":"tutorialSidebar","previous":{"title":"Plugins","permalink":"/ai-gateway/concepts/plugins"},"next":{"title":"Consumer Groups","permalink":"/ai-gateway/concepts/consumer-groups"}}');var i=t(74848),a=t(28453);const r={sidebar_position:6},l="Traffic Management",o={},c=[{value:"Distribution Methods",id:"distribution-methods",level:2},{value:"Round-Robin Distribution",id:"round-robin-distribution",level:3},{value:"Weighted Distribution",id:"weighted-distribution",level:3},{value:"Technical Implementation",id:"technical-implementation",level:2},{value:"Architecture",id:"architecture",level:3},{value:"Features",id:"features",level:3},{value:"Use Cases",id:"use-cases",level:2},{value:"Canary Deployments",id:"canary-deployments",level:3},{value:"A/B Testing",id:"ab-testing",level:3},{value:"Blue/Green Deployment",id:"bluegreen-deployment",level:3},{value:"Best Practices",id:"best-practices",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"traffic-management",children:"Traffic Management"})}),"\n",(0,i.jsx)(n.p,{children:"The AI Gateway provides advanced traffic management capabilities to control how requests are distributed across multiple targets, enabling sophisticated load balancing, testing, and deployment strategies."}),"\n",(0,i.jsx)(n.h2,{id:"distribution-methods",children:"Distribution Methods"}),"\n",(0,i.jsx)(n.h3,{id:"round-robin-distribution",children:"Round-Robin Distribution"}),"\n",(0,i.jsx)(n.p,{children:"Requests are distributed evenly across all targets in a sequential, circular order. This is the default method when no weights are specified."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'curl -X POST http://localhost:8080/api/v1/tenants/{tenant_id}/rules \\\n  -H "Authorization: Bearer {api_key}" \\\n  -H "Content-Type: application/json" \\\n  -d \'{\n    "path": "/api/*",\n    "targets": [\n      {"url": "https://api1.example.com"},\n      {"url": "https://api2.example.com"},\n      {"url": "https://api3.example.com"}\n    ],\n    "methods": ["GET", "POST"],\n    "strip_path": true\n  }\'\n'})}),"\n",(0,i.jsx)(n.h3,{id:"weighted-distribution",children:"Weighted Distribution"}),"\n",(0,i.jsx)(n.p,{children:"Enables percentage-based traffic distribution across targets. Useful for:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Canary deployments"}),"\n",(0,i.jsx)(n.li,{children:"A/B testing"}),"\n",(0,i.jsx)(n.li,{children:"Gradual migrations"}),"\n",(0,i.jsx)(n.li,{children:"Blue/Green deployments"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'curl -X POST http://localhost:8080/api/v1/tenants/{tenant_id}/rules \\\n  -H "Authorization: Bearer {api_key}" \\\n  -H "Content-Type: application/json" \\\n  -d \'{\n    "path": "/api/*",\n    "targets": [\n      {\n        "url": "https://production.example.com",\n        "weight": 90\n      },\n      {\n        "url": "https://canary.example.com",\n        "weight": 10\n      }\n    ],\n    "methods": ["GET", "POST"],\n    "strip_path": true\n  }\'\n'})}),"\n",(0,i.jsx)(n.h2,{id:"technical-implementation",children:"Technical Implementation"}),"\n",(0,i.jsx)(n.h3,{id:"architecture",children:"Architecture"}),"\n",(0,i.jsxs)(n.p,{children:["The traffic management system is built on a robust distributed architecture. At its core, it ",(0,i.jsx)(n.strong,{children:"uses Redis for distributed counter management"}),", ensuring accurate and consistent traffic distribution across multiple gateway instances. This distributed approach enables the system to maintain precise traffic control even in high-scale environments with multiple gateway nodes. The architecture ",(0,i.jsx)(n.strong,{children:"ensures consistent distribution across gateway instances"}),", preventing traffic imbalances and maintaining configured weights accurately. The system also ",(0,i.jsx)(n.strong,{children:"includes automatic fallback mechanisms"})," that activate when components experience issues, ensuring continuous operation even during partial system failures."]}),"\n",(0,i.jsx)(n.h3,{id:"features",children:"Features"}),"\n",(0,i.jsx)(n.p,{children:"The system implements several key features to ensure reliable traffic management:"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"distributed counters"})," system forms the foundation of accurate traffic distribution. It employs sophisticated ",(0,i.jsx)(n.strong,{children:"Redis-based counter management"})," to track and control request distribution across targets. The system implements intelligent ",(0,i.jsx)(n.strong,{children:"TTL to prevent memory leaks"}),", automatically cleaning up stale data and ensuring efficient resource utilization. An ",(0,i.jsx)(n.strong,{children:"automatic cleanup"})," mechanism runs periodically to maintain system health and prevent resource exhaustion."]}),"\n",(0,i.jsxs)(n.p,{children:["Robust ",(0,i.jsx)(n.strong,{children:"fallback mechanisms"})," ensure system reliability under various conditions. The system intelligently ",(0,i.jsx)(n.strong,{children:"defaults to round-robin"})," distribution if weights don't sum to 100%, ensuring continued operation even with misconfigured weights. During Redis failures, the system employs ",(0,i.jsx)(n.strong,{children:"random selection"})," as a fallback strategy, maintaining service availability. Sophisticated ",(0,i.jsx)(n.strong,{children:"automatic error recovery"})," procedures help the system return to normal operation once issues are resolved."]}),"\n",(0,i.jsxs)(n.p,{children:["Comprehensive ",(0,i.jsx)(n.strong,{children:"health checks"})," monitor the status of all system components. The system performs ",(0,i.jsx)(n.strong,{children:"active target health monitoring"})," through regular checks of all configured targets. When issues are detected, ",(0,i.jsx)(n.strong,{children:"automatic failing target removal"})," ensures that traffic is only routed to healthy instances. The system also manages ",(0,i.jsx)(n.strong,{children:"health status restoration"}),", carefully reintroducing recovered targets to the traffic pool to maintain system stability."]}),"\n",(0,i.jsx)(n.h2,{id:"use-cases",children:"Use Cases"}),"\n",(0,i.jsx)(n.h3,{id:"canary-deployments",children:"Canary Deployments"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "targets": [\n    {\n      "url": "https://stable.example.com",\n      "weight": 95\n    },\n    {\n      "url": "https://canary.example.com",\n      "weight": 5\n    }\n  ]\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"ab-testing",children:"A/B Testing"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "targets": [\n    {\n      "url": "https://variant-a.example.com",\n      "weight": 50\n    },\n    {\n      "url": "https://variant-b.example.com",\n      "weight": 50\n    }\n  ]\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"bluegreen-deployment",children:"Blue/Green Deployment"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "targets": [\n    {\n      "url": "https://blue.example.com",\n      "weight": 100\n    },\n    {\n      "url": "https://green.example.com",\n      "weight": 0\n    }\n  ]\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Gradual Rollouts"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Start with small weights for new versions"}),"\n",(0,i.jsx)(n.li,{children:"Gradually increase based on monitoring"}),"\n",(0,i.jsx)(n.li,{children:"Have rollback plans ready"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Monitoring"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Track error rates per target"}),"\n",(0,i.jsx)(n.li,{children:"Monitor response times"}),"\n",(0,i.jsx)(n.li,{children:"Set up alerts for anomalies"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Health Checks"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Configure appropriate timeouts"}),"\n",(0,i.jsx)(n.li,{children:"Set realistic health thresholds"}),"\n",(0,i.jsx)(n.li,{children:"Monitor health check logs"}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var s=t(96540);const i={},a=s.createContext(i);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);