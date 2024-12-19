"use strict";(self.webpackChunkneuraltrust_docs=self.webpackChunkneuraltrust_docs||[]).push([[691],{7437:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"AI Gateway/Api/admin-api","title":"Admin API (Port 8080)","description":"1. Create a tenant:","source":"@site/docs/AI Gateway/Api/admin-api.md","sourceDirName":"AI Gateway/Api","slug":"/AI Gateway/Api/admin-api","permalink":"/neuraltrust/AI Gateway/Api/admin-api","draft":false,"unlisted":false,"editUrl":"https://github.com/NeuralTrust/neuraltrust/blob/main/docs/AI%20Gateway/Api/admin-api.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"tutorialSidebar","previous":{"title":"Api Usage","permalink":"/neuraltrust/category/api-usage"},"next":{"title":"Proxy API (Port 8081)","permalink":"/neuraltrust/AI Gateway/Api/proxy-api"}}');var a=t(4848),i=t(8453);const s={sidebar_position:4},o="Admin API (Port 8080)",l={},p=[{value:"Proxy API (Port 8081)",id:"proxy-api-port-8081",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"admin-api-port-8080",children:"Admin API (Port 8080)"})}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Create a tenant:"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'curl -X POST http://localhost:8080/api/v1/tenants \\\n  -H "Content-Type: application/json" \\\n  -d \'{\n    "name": "Test Company",\n    "subdomain": "testcompany",\n    "tier": "pro",\n    "enabled_plugins": ["rate_limiter"],\n    "required_plugins": {\n      "security_validator": {\n        "name": "security_validator",\n        "enabled": true,\n        "priority": 1,\n        "stage": "pre_request",\n        "settings": {\n          "required_headers": ["X-Request-ID"]\n        }\n      }\n    }\n  }\'\n'})}),"\n",(0,a.jsxs)(n.ol,{start:"2",children:["\n",(0,a.jsx)(n.li,{children:"Create a forwarding rule:"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'curl -X POST http://localhost:8080/api/v1/tenants/{tenant_id}/rules \\\n  -H "Authorization: Bearer {api_key}" \\\n  -H "Content-Type: application/json" \\\n  -d \'{\n    "path": "/v1/chat/completions",\n    "target": "https://api.openai.com",\n    "methods": ["POST"],\n    "strip_path": true,\n    "plugin_chain": [\n      {\n        "name": "rate_limiter",\n        "enabled": true,\n        "priority": 1,\n        "stage": "pre_request",\n        "settings": {\n          "limit": 100,\n          "window": "1m"\n        }\n      }\n    ]\n  }\'\n'})}),"\n",(0,a.jsx)(n.h2,{id:"proxy-api-port-8081",children:"Proxy API (Port 8081)"}),"\n",(0,a.jsx)(n.p,{children:"Forward requests through the proxy::"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'curl -X POST http://testcompany.example.com:8081/v1/chat/completions \\\n-H "Authorization: Bearer {api_key}" \\\n-H "Content-Type: application/json" \\\n-H "X-Request-ID: req-123" \\\n-d \'{\n"model": "gpt-3.5-turbo",\n"messages": [{"role": "user", "content": "Hello!"}]\n}\'\n'})})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var r=t(6540);const a={},i=r.createContext(a);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);