"use strict";(self.webpackChunkneuraltrust_docs=self.webpackChunkneuraltrust_docs||[]).push([[9356],{4588:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>c});const a=JSON.parse('{"id":"ai-gateway/api/proxy-api","title":"Proxy API (Port 8081)","description":"Forward requests through the proxy::","source":"@site/docs/ai-gateway/api/proxy-api.md","sourceDirName":"ai-gateway/api","slug":"/ai-gateway/api/proxy-api","permalink":"/ai-gateway/api/proxy-api","draft":false,"unlisted":false,"editUrl":"https://github.com/NeuralTrust/neuraltrust/blob/main/docs/ai-gateway/api/proxy-api.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"tutorialSidebar","previous":{"title":"Admin API (Port 8080)","permalink":"/ai-gateway/api/admin-api"},"next":{"title":"Benchmark","permalink":"/ai-gateway/benchmark"}}');var n=r(4848),o=r(8453);const i={sidebar_position:4},s="Proxy API (Port 8081)",p={},c=[];function u(e){const t={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"proxy-api-port-8081",children:"Proxy API (Port 8081)"})}),"\n",(0,n.jsx)(t.p,{children:"Forward requests through the proxy::"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:'curl -X POST http://testcompany.example.com:8081/v1/chat/completions \\\n-H "Authorization: Bearer {api_key}" \\\n-H "Content-Type: application/json" \\\n-H "X-Request-ID: req-123" \\\n-d \'{\n"model": "gpt-3.5-turbo",\n"messages": [{"role": "user", "content": "Hello!"}]\n}\'\n'})})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},8453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>s});var a=r(6540);const n={},o=a.createContext(n);function i(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);