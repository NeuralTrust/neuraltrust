"use strict";(self.webpackChunkneuraltrust_docs=self.webpackChunkneuraltrust_docs||[]).push([[3694],{4277:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"sdks/python-sdk/api-reference/neuraltrust-api","title":"NeuralTrustApi","description":"Main client for interacting with the NeuralTrust API. This class provides synchronous access to various NeuralTrust services, handling authentication and request configuration.","source":"@site/docs/sdks/python-sdk/api-reference/neuraltrust-api.md","sourceDirName":"sdks/python-sdk/api-reference","slug":"/sdks/python-sdk/api-reference/neuraltrust-api","permalink":"/neuraltrust/sdks/python-sdk/api-reference/neuraltrust-api","draft":false,"unlisted":false,"editUrl":"https://github.com/NeuralTrust/neuraltrust/blob/main/docs/sdks/python-sdk/api-reference/neuraltrust-api.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"_Trace","permalink":"/neuraltrust/sdks/python-sdk/api-reference/trace-class"},"next":{"title":"ScannerClient","permalink":"/neuraltrust/sdks/python-sdk/api-reference/scanner-client"}}');var r=t(4848),i=t(8453);const l={sidebar_position:3},c="NeuralTrustApi",a={},o=[{value:"Constructor",id:"constructor",level:2},{value:"Parameters:",id:"parameters",level:3},{value:"Properties",id:"properties",level:2},{value:"<code>trace</code>",id:"trace",level:3},{value:"<code>evaluation_set</code>",id:"evaluation_set",level:3},{value:"<code>testset</code>",id:"testset",level:3},{value:"<code>knowledge_base</code>",id:"knowledge_base",level:3},{value:"<code>scanner</code>",id:"scanner",level:3},{value:"Usage Example",id:"usage-example",level:2},{value:"AsyncNeuralTrustApi",id:"asyncneuraltrustapi",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"neuraltrustapi",children:"NeuralTrustApi"})}),"\n",(0,r.jsx)(n.p,{children:"Main client for interacting with the NeuralTrust API. This class provides synchronous access to various NeuralTrust services, handling authentication and request configuration."}),"\n",(0,r.jsx)(n.h2,{id:"constructor",children:"Constructor"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"NeuralTrustApi(\n    api_key: str,\n    base_url: Optional[str] = None,\n    environment: NeuralTrustApiEnvironment = NeuralTrustApiEnvironment.DEFAULT,\n    timeout: Optional[float] = None,\n    follow_redirects: Optional[bool] = True,\n    httpx_client: Optional[httpx.Client] = None\n)\n"})}),"\n",(0,r.jsx)(n.h3,{id:"parameters",children:"Parameters:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"api_key"})," (str): API key for authentication."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"base_url"})," (Optional[str]): Base URL for the API. If not provided, will use the environment URL."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"environment"})," (NeuralTrustApiEnvironment): The environment to use for requests. Defaults to NeuralTrustApiEnvironment.DEFAULT."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"timeout"})," (Optional[float]): Timeout in seconds for API requests. Defaults to 60 seconds if no custom httpx client is provided."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"follow_redirects"})," (Optional[bool]): Whether to follow HTTP redirects. Defaults to True."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"httpx_client"})," (Optional[httpx.Client]): Custom httpx client for making requests. If not provided, a default client will be created."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,r.jsx)(n.h3,{id:"trace",children:(0,r.jsx)(n.code,{children:"trace"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Type: ",(0,r.jsx)(n.code,{children:"TraceClient"})]}),"\n",(0,r.jsx)(n.li,{children:"Description: Access to trace related operations."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"evaluation_set",children:(0,r.jsx)(n.code,{children:"evaluation_set"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Type: ",(0,r.jsx)(n.code,{children:"EvaluationSetClient"})]}),"\n",(0,r.jsx)(n.li,{children:"Description: Access to evaluation set related operations."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"testset",children:(0,r.jsx)(n.code,{children:"testset"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Type: ",(0,r.jsx)(n.code,{children:"TestsetClient"})]}),"\n",(0,r.jsx)(n.li,{children:"Description: Access to testset related operations."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"knowledge_base",children:(0,r.jsx)(n.code,{children:"knowledge_base"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Type: ",(0,r.jsx)(n.code,{children:"KnowledgeBaseClient"})]}),"\n",(0,r.jsx)(n.li,{children:"Description: Access to knowledge base related operations."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"scanner",children:(0,r.jsx)(n.code,{children:"scanner"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Type: ",(0,r.jsx)(n.code,{children:"ScannerClient"})]}),"\n",(0,r.jsx)(n.li,{children:"Description: Access to scanner related operations."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"usage-example",children:"Usage Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'from neuraltrust import NeuralTrustApi\n\n# Initialize the client\nclient = NeuralTrustApi(\n    api_key="your_api_key_here",\n    timeout=30,  # Optional: custom timeout in seconds\n)\n\n# Access different services\ntrace_client = client.trace\nevaluation_client = client.evaluation_set\ntestset_client = client.testset\nknowledge_base_client = client.knowledge_base\nscanner_client = client.scanner\n'})}),"\n",(0,r.jsx)(n.h2,{id:"asyncneuraltrustapi",children:"AsyncNeuralTrustApi"}),"\n",(0,r.jsxs)(n.p,{children:["For asynchronous operations, use the ",(0,r.jsx)(n.code,{children:"AsyncNeuralTrustApi"})," class which has the same interface but works with ",(0,r.jsx)(n.code,{children:"async/await"})," patterns. The constructor accepts an ",(0,r.jsx)(n.code,{children:"httpx.AsyncClient"})," instead of ",(0,r.jsx)(n.code,{children:"httpx.Client"})," and returns async versions of all service clients."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'from neuraltrust import AsyncNeuralTrustApi\n\n# Initialize the async client\nclient = AsyncNeuralTrustApi(\n    api_key="your_api_key_here"\n)\n\n# Use async clients\nasync_trace_client = client.trace\nasync_evaluation_client = client.evaluation_set\n# etc.\n'})})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>c});var s=t(6540);const r={},i=s.createContext(r);function l(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);