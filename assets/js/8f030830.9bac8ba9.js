"use strict";(self.webpackChunkneuraltrust_docs=self.webpackChunkneuraltrust_docs||[]).push([[4423],{7905:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"development","title":"Development","description":"Prerequisites","source":"@site/docs/development.md","sourceDirName":".","slug":"/development","permalink":"/neuraltrust/development","draft":false,"unlisted":false,"editUrl":"https://github.com/NeuralTrust/neuraltrust/blob/main/docs/development.md","tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"sidebar_position":6},"sidebar":"tutorialSidebar","previous":{"title":"Test Sets","permalink":"/neuraltrust/red-teaming/testsets"},"next":{"title":"SDKs","permalink":"/neuraltrust/category/sdks"}}');var s=n(4848),i=n(8453);const o={sidebar_position:6},l="Development",c={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Project Structure",id:"project-structure",level:2}];function a(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"development",children:"Development"})}),"\n",(0,s.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Go 1.22+"}),"\n",(0,s.jsx)(t.li,{children:"Docker and Docker Compose"}),"\n",(0,s.jsx)(t.li,{children:"Redis"}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"project-structure",children:"Project Structure"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:".\n\u251c\u2500\u2500 cmd/\n\u2502   \u2514\u2500\u2500 gateway/          # Application entry points\n\u251c\u2500\u2500 internal/\n\u2502   \u251c\u2500\u2500 cache/           # Redis cache implementation\n\u2502   \u251c\u2500\u2500 middleware/      # HTTP middleware\n\u2502   \u251c\u2500\u2500 plugins/         # Plugin implementations\n\u2502   \u251c\u2500\u2500 proxy/           # Request forwarding logic\n\u2502   \u251c\u2500\u2500 types/           # Common types\n\u2502   \u2514\u2500\u2500 server/          # HTTP server implementation\n\u251c\u2500\u2500 scripts/             # Development and test scripts\n\u251c\u2500\u2500 config.yaml          # Configuration file\n\u2514\u2500\u2500 docker-compose.yaml  # Redis setup\n"})})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>l});var r=n(6540);const s={},i=r.createContext(s);function o(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);