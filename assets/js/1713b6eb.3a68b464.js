"use strict";(self.webpackChunkneuraltrust_docs=self.webpackChunkneuraltrust_docs||[]).push([[3842],{4406:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>o});const r=JSON.parse('{"id":"sdks/python-sdk/api-reference/neuraltrust-client","title":"NeuralTrust","description":"Main client for interacting with the NeuralTrust API. This class provides the main interface for interacting with NeuralTrust services, handling authentication and providing access to various API endpoints.","source":"@site/docs/sdks/python-sdk/api-reference/neuraltrust-client.md","sourceDirName":"sdks/python-sdk/api-reference","slug":"/sdks/python-sdk/api-reference/neuraltrust-client","permalink":"/sdks/python-sdk/api-reference/neuraltrust-client","draft":false,"unlisted":false,"editUrl":"https://github.com/NeuralTrust/neuraltrust/blob/main/docs/sdks/python-sdk/api-reference/neuraltrust-client.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"API Reference","permalink":"/category/api-reference"},"next":{"title":"_Trace","permalink":"/sdks/python-sdk/api-reference/trace-class"}}');var t=s(4848),i=s(8453);const l={sidebar_position:1},a="NeuralTrust",c={},o=[{value:"Constructor",id:"constructor",level:2},{value:"Parameters:",id:"parameters",level:3},{value:"Properties",id:"properties",level:2},{value:"<code>api_key</code>",id:"api_key",level:3},{value:"<code>base_url</code>",id:"base_url",level:3},{value:"<code>evaluation_set</code>",id:"evaluation_set",level:3},{value:"<code>scanner</code>",id:"scanner",level:3},{value:"<code>testset</code>",id:"testset",level:3},{value:"<code>knowledge_base</code>",id:"knowledge_base",level:3},{value:"Methods",id:"methods",level:2},{value:"<code>trace()</code>",id:"trace",level:3},{value:"Parameters:",id:"parameters-1",level:4},{value:"Returns:",id:"returns",level:4},{value:"Usage Example",id:"usage-example",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"neuraltrust",children:"NeuralTrust"})}),"\n",(0,t.jsx)(n.p,{children:"Main client for interacting with the NeuralTrust API. This class provides the main interface for interacting with NeuralTrust services, handling authentication and providing access to various API endpoints."}),"\n",(0,t.jsx)(n.h2,{id:"constructor",children:"Constructor"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'NeuralTrust(\n    api_key: Optional[str] = None,\n    base_url: Optional[str] = None,\n    timeout: Optional[float] = None,\n    follow_redirects: bool = True,\n    sdk_version: str = "v1",\n    async_client: bool = False\n)\n'})}),"\n",(0,t.jsx)(n.h3,{id:"parameters",children:"Parameters:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"api_key"})," (Optional[str]): API key for authentication. If not provided, will look for NEURALTRUST_API_KEY environment variable."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"base_url"})," (Optional[str]): Base URL for the API. If not provided, will look for NEURALTRUST_BASE_URL environment variable or use default."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"timeout"})," (Optional[float]): Timeout in seconds for API requests."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"follow_redirects"})," (bool): Whether to follow HTTP redirects. Defaults to True."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"sdk_version"}),' (str): Version of the SDK to use. Defaults to "v1".']}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"async_client"})," (bool): Whether to use async client. Defaults to False."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,t.jsx)(n.h3,{id:"api_key",children:(0,t.jsx)(n.code,{children:"api_key"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Type: ",(0,t.jsx)(n.code,{children:"str"})]}),"\n",(0,t.jsx)(n.li,{children:"Description: Get or set the API key used for authentication."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"base_url",children:(0,t.jsx)(n.code,{children:"base_url"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Type: ",(0,t.jsx)(n.code,{children:"str"})]}),"\n",(0,t.jsx)(n.li,{children:"Description: Get or set the base URL for API requests."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"evaluation_set",children:(0,t.jsx)(n.code,{children:"evaluation_set"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Type: ",(0,t.jsx)(n.code,{children:"EvaluationSetClient"})]}),"\n",(0,t.jsx)(n.li,{children:"Description: Access to evaluation set related operations."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"scanner",children:(0,t.jsx)(n.code,{children:"scanner"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Type: ",(0,t.jsx)(n.code,{children:"ScannerClient"})]}),"\n",(0,t.jsx)(n.li,{children:"Description: Access to scanner related operations."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"testset",children:(0,t.jsx)(n.code,{children:"testset"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Type: ",(0,t.jsx)(n.code,{children:"TestsetClient"})]}),"\n",(0,t.jsx)(n.li,{children:"Description: Access to testset related operations."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"knowledge_base",children:(0,t.jsx)(n.code,{children:"knowledge_base"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Type: ",(0,t.jsx)(n.code,{children:"KnowledgeBaseClient"})]}),"\n",(0,t.jsx)(n.li,{children:"Description: Access to knowledge base related operations."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,t.jsx)(n.h3,{id:"trace",children:(0,t.jsx)(n.code,{children:"trace()"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'def trace(\n    trace_id: Optional[str] = None,\n    conversation_id: Optional[str] = None,\n    session_id: Optional[str] = None,\n    channel_id: Optional[str] = None,\n    user: Optional[User] = None,\n    metadata: Optional[Metadata] = None,\n    custom: Optional[dict] = None\n) -> "_Trace"\n'})}),"\n",(0,t.jsx)(n.p,{children:"Creates a new Trace object for tracking events and interactions."}),"\n",(0,t.jsx)(n.h4,{id:"parameters-1",children:"Parameters:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"trace_id"})," (Optional[str]): Unique identifier for this trace."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"conversation_id"})," (Optional[str]): The conversation ID. If not provided, a new UUID will be generated."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"session_id"})," (Optional[str]): The session ID."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"channel_id"})," (Optional[str]): The channel ID."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"user"})," (Optional[User]): The user associated with the trace."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"metadata"})," (Optional[Metadata]): Additional metadata for the trace."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"custom"})," (Optional[dict]): Custom data to include with the trace."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"returns",children:"Returns:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"_Trace"}),": A new Trace object."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"usage-example",children:"Usage Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'# Initialize the client\nclient = NeuralTrust(api_key="your_api_key_here")\n\n# Create a trace\ntrace = client.trace(\n    conversation_id="conv123",\n    user=User(id="user123", name="John Doe"),\n    metadata={"app_version": "1.0.0"}\n)\n\n# Use the trace to record events\ntrace.message("Hello").end("Response")\n'})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>a});var r=s(6540);const t={},i=r.createContext(t);function l(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);