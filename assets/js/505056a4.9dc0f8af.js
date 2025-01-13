"use strict";(self.webpackChunkneuraltrust_docs=self.webpackChunkneuraltrust_docs||[]).push([[1821],{91986:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"trusttest/getting-started/step-by-step/configure-llm-endpoint","title":"Configure your LLM endpoint","description":"This guide explains how to configure your LLM endpoint to invoke through NeuralTrust.","source":"@site/docs/trusttest/getting-started/step-by-step/configure-llm-endpoint.md","sourceDirName":"trusttest/getting-started/step-by-step","slug":"/trusttest/getting-started/step-by-step/configure-llm-endpoint","permalink":"/trusttest/getting-started/step-by-step/configure-llm-endpoint","draft":false,"unlisted":false,"editUrl":"https://github.com/NeuralTrust/neuraltrust/blob/main/docs/trusttest/getting-started/step-by-step/configure-llm-endpoint.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Overview","permalink":"/trusttest/getting-started/step-by-step/overview"},"next":{"title":"Create an EvaluationSet","permalink":"/trusttest/getting-started/step-by-step/create-evaluation-set"}}');var a=t(74848),o=t(28453);const i={sidebar_position:2},r="Configure your LLM endpoint",l={},c=[{value:"Yaml definition",id:"yaml-definition",level:2},{value:"Examples",id:"examples",level:2},{value:"Basic LLM configuration",id:"basic-llm-configuration",level:3},{value:"LLM with chunked response and firewall",id:"llm-with-chunked-response-and-firewall",level:3},{value:"LLM with token authentication",id:"llm-with-token-authentication",level:3}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"configure-your-llm-endpoint",children:"Configure your LLM endpoint"})}),"\n",(0,a.jsx)(n.p,{children:"This guide explains how to configure your LLM endpoint to invoke through NeuralTrust."}),"\n",(0,a.jsxs)(n.p,{children:["In your app go to ",(0,a.jsx)(n.strong,{children:"Configuration"})," -> ",(0,a.jsx)(n.strong,{children:"Evaluation"})]}),"\n",(0,a.jsx)(n.p,{children:"Here you can configure your NeuralTrust to invoke your LLM and handle the responses, based on a Yaml file."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Evaluation Configuration",src:t(40470).A+"",width:"2404",height:"960"})}),"\n",(0,a.jsx)(n.h2,{id:"yaml-definition",children:"Yaml definition"}),"\n",(0,a.jsx)(n.p,{children:"A basic Yaml file has the following structure:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:'url: "http://localhost:8080/v1/chat/completions"\nstream: false\nheaders:\n  api-key: "<my key>"\n  Content-Type: "application/json"\nchunked_response: true\nconcatenate_field: "result.choices.0.message.content"\npayload:\n  messages:\n    - role: "user"\n      content: "{{ test }}"\n'})}),"\n",(0,a.jsx)(n.p,{children:"Currently, we define these macros, that will be replaced with the values that are being sent to the LLM dynamically:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"{{ test }}"}),": This is a simple macro that will be replaced with the value of the message that is being sent to the LLM."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"{{ date }}"}),": This is a macro that will be replaced with the current date."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"{{ token }}"}),": This is a macro that will be replaced with the token that is being sent to the LLM."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"The Yaml file has the following structure:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"url: <string> # your API endpoint URL\nheaders: # your API headers\n  <key>: <value>\npayload: # your API payload\n  <key>: <value>\nauthentication: <boolean> # if your API requires on the fly authentication via a token\ntoken: # Optional, if authentication is true, this is the token request configuration\n  url: <string> # the token request URL\n  payload: <dictionary> # the token request payload\nstream: <boolean> # if the LLM is streaming the response\nchunked_response: <boolean> # if the LLM response is chunked\nconcatenate_field: <string> # field that will be concatenated to get the final response\ncontent_regex: <string> # Optional, a regex to extract the content from the response\nfirewall: # Optional, if you want to parse the response from your firewall or error messages\n    status_code: <string> # the firewall status code, like 403, 404, etc.\n    chunked_response: <boolean> # if the firewall response is chunked\n    concatenate_field: <string> # field that will be concatenated to get the final response\n"})}),"\n",(0,a.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(n.h3,{id:"basic-llm-configuration",children:"Basic LLM configuration"}),"\n",(0,a.jsx)(n.p,{children:"For example, we have a LLM endpoint that returns the following response:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "response": "Fine thanks."\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"And we need to send the request as follows:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "prompt": "Hello, how are you?"\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"We only need to send and API-key with the headers to authenticate the request. So we can configure the Yaml as follows:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:'authentication: false\nurl: "<my llm endpoint>"\nstream: false\nheaders:\n  Content-Type: "application/json"\n  Authorization: "api-key <my key>"\nchunked_response: true\nconcatenate_field: "response"\npayload:\n  prompt: "{{ test }}"\n'})}),"\n",(0,a.jsx)(n.h3,{id:"llm-with-chunked-response-and-firewall",children:"LLM with chunked response and firewall"}),"\n",(0,a.jsx)(n.p,{children:"For example, we have a LLM endpoint that returns the following response:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "result": {\n    "choices": [\n      {\n        "message": {\n          "content": "content=Hello, how are you?"\n        }\n      }\n    ]\n  }\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["We want to obtain only the ",(0,a.jsx)(n.code,{children:"Hello, how are you?"})," from the response."]}),"\n",(0,a.jsxs)(n.p,{children:["We want to parse the response from the firewall and get the content of the response. The firewall will return the following response, with ",(0,a.jsx)(n.strong,{children:"Status code 400"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "errors": [\n    {\n      "message": "You are not allowed to access this resource"\n    }\n  ]\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"So, we can configure the Yaml as follows:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:'authentication: false\nurl: "<my llm endpoint>"\nstream: false\nheaders:\n  api-key: "<my key>"\n  Content-Type: "application/json"\nchunked_response: true\nconcatenate_field: "result.choices.0.message.content"\ncontent_regex: "content=([^|]+)"\nfirewall:\n  status_code: 400\n  chunked_response: true\n  concatenate_field: "errors.0.message"\npayload:\n  messages:\n    - role: "user"\n      content: "{{ test }}"\n'})}),"\n",(0,a.jsx)(n.h3,{id:"llm-with-token-authentication",children:"LLM with token authentication"}),"\n",(0,a.jsx)(n.p,{children:"For example, we have a LLM endpoint that we need to authenticate via a token, that is generated via a request:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "url": "<my token request URL>",\n  "auth_id": "POST",\n  "secret": "<my secret>",\n  "payload": {\n    "data": {\n      "dateTime": "{{ date }}",\n      "client_id": "<my client id>",\n      "service": "<my service>"\n    },\n    "signature": ""\n  }\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"So, we can configure the Yaml as follows:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:'authentication: true\nid: aireuropa\ntoken:\n  url: "<my token request URL>"\n  auth_id: "POST"\n  secret: "<my secret>"\n  payload:\n    data:\n      dateTime: "{{ date }}"\n      client_id: "neuraltrust"\n      service: "my-chat"\n    signature: ""\nurl: "<my llm endpoint>"\nstream: false\nheaders:\n  Content-Type: "application/json"\n  Authorization: "Bearer {{ token }}"\nchunked_response: true\nconcatenate_field: "response"\npayload:\n  prompt: "{{ test }}"\n'})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},40470:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/llm-config-yaml-d71cd2ea1eaeffcbdb0a382f1aa39e5b.png"},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>r});var s=t(96540);const a={},o=s.createContext(a);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);