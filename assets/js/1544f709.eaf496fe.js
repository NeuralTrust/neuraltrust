"use strict";(self.webpackChunkneuraltrust_docs=self.webpackChunkneuraltrust_docs||[]).push([[7777],{1455:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"red-teaming/evaluation-sets","title":"Evaluation Sets","description":"Evaluation Sets provide structured testing and validation for LLM applications.","source":"@site/docs/red-teaming/evaluation-sets.md","sourceDirName":"red-teaming","slug":"/red-teaming/evaluation-sets","permalink":"/neuraltrust/red-teaming/evaluation-sets","draft":false,"unlisted":false,"editUrl":"https://github.com/NeuralTrust/neuraltrust/blob/main/docs/red-teaming/evaluation-sets.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Overview","permalink":"/neuraltrust/red-teaming/overview"},"next":{"title":"Knowledge Bases","permalink":"/neuraltrust/red-teaming/knowledge-bases"}}');var s=n(4848),a=n(8453);const r={sidebar_position:2},l="Evaluation Sets",o={},c=[{value:"Usage",id:"usage",level:2},{value:"Features",id:"features",level:2},{value:"Test Management",id:"test-management",level:3},{value:"Metrics",id:"metrics",level:3},{value:"Integration",id:"integration",level:3}];function u(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"evaluation-sets",children:"Evaluation Sets"})}),"\n",(0,s.jsx)(t.p,{children:"Evaluation Sets provide structured testing and validation for LLM applications."}),"\n",(0,s.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:'import { NeuralTrust } from \'neuraltrust\';\n\nconst client = new NeuralTrust({ apiKey: "your_api_key_here" });\n\n// Create an evaluation set\nconst evalSet = await client.createEvaluationSet({\n    name: "My Eval Set",\n    description: "A test evaluation set"\n});\n\n// Run evaluation\nconst results = await client.runEvaluationSet({ \n    id: evalSet.id \n});\n\n// Get results\nconst evalResults = await client.getEvaluationSet({ \n    id: "eval_set_id" \n});\n\n// Delete set\nawait client.deleteEvaluationSet({ \n    id: "eval_set_id" \n});\n'})}),"\n",(0,s.jsx)(t.h2,{id:"features",children:"Features"}),"\n",(0,s.jsx)(t.h3,{id:"test-management",children:"Test Management"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Create and organize test cases"}),"\n",(0,s.jsx)(t.li,{children:"Define success criteria"}),"\n",(0,s.jsx)(t.li,{children:"Set evaluation parameters"}),"\n",(0,s.jsx)(t.li,{children:"Track test results"}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"metrics",children:"Metrics"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Response accuracy"}),"\n",(0,s.jsx)(t.li,{children:"Performance metrics"}),"\n",(0,s.jsx)(t.li,{children:"Security scores"}),"\n",(0,s.jsx)(t.li,{children:"Compliance validation"}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"integration",children:"Integration"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Automated testing"}),"\n",(0,s.jsx)(t.li,{children:"CI/CD pipeline support"}),"\n",(0,s.jsx)(t.li,{children:"Results reporting"}),"\n",(0,s.jsx)(t.li,{children:"Historical tracking"}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>l});var i=n(6540);const s={},a=i.createContext(s);function r(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);