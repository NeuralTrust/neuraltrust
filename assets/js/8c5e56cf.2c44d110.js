"use strict";(self.webpackChunkneuraltrust_docs=self.webpackChunkneuraltrust_docs||[]).push([[6384],{9115:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"sdks/python-sdk/usage/scan","title":"Compliance scan","description":"This guide demonstrates how to use the Neural Trust scanning capabilities to analyze your AI system for potential vulnerabilities.","source":"@site/docs/sdks/python-sdk/usage/scan.md","sourceDirName":"sdks/python-sdk/usage","slug":"/sdks/python-sdk/usage/scan","permalink":"/sdks/python-sdk/usage/scan","draft":false,"unlisted":false,"editUrl":"https://github.com/NeuralTrust/neuraltrust/blob/main/docs/sdks/python-sdk/usage/scan.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"Tracing","permalink":"/sdks/python-sdk/usage/tracing"},"next":{"title":"Custom Attack","permalink":"/sdks/python-sdk/usage/custom-attack"}}');var a=s(4848),i=s(8453);const r={sidebar_position:3},c="Compliance scan",o={},l=[{value:"Basic Setup",id:"basic-setup",level:2},{value:"Running Scans",id:"running-scans",level:2},{value:"Default Scan",id:"default-scan",level:3},{value:"Customized Scan",id:"customized-scan",level:3},{value:"Parameters Explained:",id:"parameters-explained",level:4},{value:"Complete Script",id:"complete-script",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"compliance-scan",children:"Compliance scan"})}),"\n",(0,a.jsx)(n.p,{children:"This guide demonstrates how to use the Neural Trust scanning capabilities to analyze your AI system for potential vulnerabilities."}),"\n",(0,a.jsx)(n.h2,{id:"basic-setup",children:"Basic Setup"}),"\n",(0,a.jsx)(n.p,{children:"First, import and initialize the Neural Trust API client:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"from neuraltrust import NeuralTrustApi\n\nclient = NeuralTrustApi()\n"})}),"\n",(0,a.jsx)(n.h2,{id:"running-scans",children:"Running Scans"}),"\n",(0,a.jsx)(n.h3,{id:"default-scan",children:"Default Scan"}),"\n",(0,a.jsx)(n.p,{children:"The simplest way to run a scan is using the default configuration:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"response = client.scanner.scan()\n"})}),"\n",(0,a.jsx)(n.p,{children:"This will:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Run checks across all available security categories"}),"\n",(0,a.jsx)(n.li,{children:"Use 5 objectives per category"}),"\n",(0,a.jsx)(n.li,{children:"Use default attack configurations"}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"customized-scan",children:"Customized Scan"}),"\n",(0,a.jsx)(n.p,{children:"For more control, you can customize your scan parameters:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'response = client.scanner.scan(\n    name="Comprehensive Security Scan",\n    categories=["off_tone", "data_leak"],\n    max_objectives_per_category=10,\n    dynamic_attack_config={"max_turns": 10},\n)\n'})}),"\n",(0,a.jsx)(n.h4,{id:"parameters-explained",children:"Parameters Explained:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"name"}),": A descriptive name for your scan"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"categories"}),': List of specific categories to scan for (e.g., "off_tone", "data_leak")']}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"max_objectives_per_category"}),": Maximum number of test objectives per category"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"dynamic_attack_config"}),": Additional configuration for attack simulations","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"max_turns"}),": Maximum conversation turns for attack attempts"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"complete-script",children:"Complete Script"}),"\n",(0,a.jsx)(n.p,{children:"Here's the complete script for reference:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'from neuraltrust import NeuralTrustApi\n\n# Initialize the client\nclient = NeuralTrustApi()\n\n# Default scan, using all categories, 5 objectives per category\nresponse = client.scanner.scan()\n\n# Example using a subset of scan categories, max 10 turns for conversation attack\nresponse = client.scanner.scan(\n    name="Comprehensive Security Scan",\n    categories=["off_tone", "data_leak"],\n    max_objectives_per_category=10,\n    dynamic_attack_config={"max_turns": 10},\n)\n'})})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>c});var t=s(6540);const a={},i=t.createContext(a);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);