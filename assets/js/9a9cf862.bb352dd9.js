"use strict";(self.webpackChunkneuraltrust_docs=self.webpackChunkneuraltrust_docs||[]).push([[8099],{26345:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"sdks/python-sdk/api-reference/trace-class","title":"Trace","description":"Class for creating and managing traces in the NeuralTrust system. This class captures details about interactions or events, including metadata, timing information, and content.","source":"@site/docs/sdks/python-sdk/api-reference/trace-class.md","sourceDirName":"sdks/python-sdk/api-reference","slug":"/sdks/python-sdk/api-reference/trace-class","permalink":"/sdks/python-sdk/api-reference/trace-class","draft":false,"unlisted":false,"editUrl":"https://github.com/NeuralTrust/neuraltrust/blob/main/docs/sdks/python-sdk/api-reference/trace-class.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"NeuralTrust","permalink":"/sdks/python-sdk/api-reference/neuraltrust-client"},"next":{"title":"ScannerClient","permalink":"/sdks/python-sdk/api-reference/scanner-client"}}');var s=r(74848),i=r(28453);const a={sidebar_position:2},l="Trace",d={},c=[{value:"Constructor",id:"constructor",level:2},{value:"Parameters:",id:"parameters",level:3},{value:"Methods",id:"methods",level:2},{value:"<code>message()</code>",id:"message",level:3},{value:"Parameters:",id:"parameters-1",level:4},{value:"Returns:",id:"returns",level:4},{value:"<code>tool()</code>",id:"tool",level:3},{value:"Parameters:",id:"parameters-2",level:4},{value:"Returns:",id:"returns-1",level:4},{value:"<code>agent()</code>",id:"agent",level:3},{value:"Parameters:",id:"parameters-3",level:4},{value:"Returns:",id:"returns-2",level:4},{value:"<code>retrieval()</code>",id:"retrieval",level:3},{value:"Parameters:",id:"parameters-4",level:4},{value:"Returns:",id:"returns-3",level:4},{value:"<code>generation()</code>",id:"generation",level:3},{value:"Parameters:",id:"parameters-5",level:4},{value:"Returns:",id:"returns-4",level:4},{value:"<code>router()</code>",id:"router",level:3},{value:"Parameters:",id:"parameters-6",level:4},{value:"Returns:",id:"returns-5",level:4},{value:"<code>event()</code>",id:"event",level:3},{value:"Parameters:",id:"parameters-7",level:4},{value:"Returns:",id:"returns-6",level:4},{value:"<code>system()</code>",id:"system",level:3},{value:"Parameters:",id:"parameters-8",level:4},{value:"Returns:",id:"returns-7",level:4},{value:"<code>feedback()</code>",id:"feedback",level:3},{value:"Parameters:",id:"parameters-9",level:4},{value:"Returns:",id:"returns-8",level:4},{value:"<code>end()</code>",id:"end",level:3},{value:"Parameters:",id:"parameters-10",level:4},{value:"Returns:",id:"returns-9",level:4},{value:"<code>send()</code>",id:"send",level:3},{value:"Parameters:",id:"parameters-11",level:4},{value:"Returns:",id:"returns-10",level:4},{value:"Usage Example",id:"usage-example",level:2}];function o(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"trace",children:"Trace"})}),"\n",(0,s.jsx)(n.p,{children:"Class for creating and managing traces in the NeuralTrust system. This class captures details about interactions or events, including metadata, timing information, and content."}),"\n",(0,s.jsx)(n.h2,{id:"constructor",children:"Constructor"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"Trace(\n    client: TraceClient,\n    trace_id: Optional[str] = None,\n    interaction_id: Optional[str] = None,\n    conversation_id: Optional[str] = None,\n    channel_id: Optional[str] = None,\n    session_id: Optional[str] = None,\n    user: Optional[User] = None,\n    metadata: Optional[Metadata] = None,\n    custom: Optional[dict] = None\n)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"parameters",children:"Parameters:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"client"})," (TraceClient): The TraceClient instance used to send traces"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"trace_id"})," (Optional[str]): Unique identifier for this specific trace"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"interaction_id"})," (Optional[str]): ID that can be shared across multiple related traces"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"conversation_id"})," (Optional[str]): Unique identifier for the conversation"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"channel_id"})," (Optional[str]): Optional identifier for the communication channel"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"session_id"})," (Optional[str]): Optional identifier for the user session"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"user"})," (Optional[User]): Optional User object containing user information"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"metadata"})," (Optional[Metadata]): Optional metadata dictionary"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"custom"})," (Optional[dict]): Optional custom data dictionary"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,s.jsx)(n.h3,{id:"message",children:(0,s.jsx)(n.code,{children:"message()"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'def message(input: str) -> "Trace"\n'})}),"\n",(0,s.jsx)(n.p,{children:"Start a message trace."}),"\n",(0,s.jsx)(n.h4,{id:"parameters-1",children:"Parameters:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"input"})," (str): The input message to trace"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"returns",children:"Returns:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Trace"}),": A new Trace object initialized with the message event"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"tool",children:(0,s.jsx)(n.code,{children:"tool()"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'def tool(input: str, parent_id: Optional[str] = None) -> "Trace"\n'})}),"\n",(0,s.jsx)(n.p,{children:"Start a tool trace."}),"\n",(0,s.jsx)(n.h4,{id:"parameters-2",children:"Parameters:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"input"})," (str): The input for the tool event"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"parent_id"})," (Optional[str]): The ID of the parent trace"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"returns-1",children:"Returns:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Trace"}),": A new Trace object initialized with the tool event"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"agent",children:(0,s.jsx)(n.code,{children:"agent()"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'def agent(input: str, parent_id: Optional[str] = None) -> "Trace"\n'})}),"\n",(0,s.jsx)(n.p,{children:"Start an agent trace."}),"\n",(0,s.jsx)(n.h4,{id:"parameters-3",children:"Parameters:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"input"})," (str): The input for the agent event"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"parent_id"})," (Optional[str]): The ID of the parent trace"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"returns-2",children:"Returns:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Trace"}),": A new Trace object initialized with the agent event"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"retrieval",children:(0,s.jsx)(n.code,{children:"retrieval()"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'def retrieval(input: str, parent_id: Optional[str] = None) -> "Trace"\n'})}),"\n",(0,s.jsx)(n.p,{children:"Start a retrieval trace."}),"\n",(0,s.jsx)(n.h4,{id:"parameters-4",children:"Parameters:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"input"})," (str): The input for the retrieval event"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"parent_id"})," (Optional[str]): The ID of the parent trace"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"returns-3",children:"Returns:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Trace"}),": A new Trace object initialized with the retrieval event"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"generation",children:(0,s.jsx)(n.code,{children:"generation()"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'def generation(input: str, parent_id: Optional[str] = None) -> "Trace"\n'})}),"\n",(0,s.jsx)(n.p,{children:"Start a generation trace."}),"\n",(0,s.jsx)(n.h4,{id:"parameters-5",children:"Parameters:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"input"})," (str): The input for the generation event"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"parent_id"})," (Optional[str]): The ID of the parent trace"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"returns-4",children:"Returns:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Trace"}),": A new Trace object initialized with the generation event"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"router",children:(0,s.jsx)(n.code,{children:"router()"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'def router(input: str, parent_id: Optional[str] = None) -> "Trace"\n'})}),"\n",(0,s.jsx)(n.p,{children:"Start and automatically end a router trace."}),"\n",(0,s.jsx)(n.h4,{id:"parameters-6",children:"Parameters:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"input"})," (str): The input for the router event"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"parent_id"})," (Optional[str]): The ID of the parent trace"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"returns-5",children:"Returns:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Trace"}),": A new Trace object initialized and completed with the router event"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"event",children:(0,s.jsx)(n.code,{children:"event()"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'def event(input: str, parent_id: Optional[str] = None) -> "Trace"\n'})}),"\n",(0,s.jsx)(n.p,{children:"Record a custom event trace."}),"\n",(0,s.jsx)(n.h4,{id:"parameters-7",children:"Parameters:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"input"})," (str): The input for the custom event"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"parent_id"})," (Optional[str]): The ID of the parent trace"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"returns-6",children:"Returns:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Trace"}),": A new Trace object initialized and completed with the custom event"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"system",children:(0,s.jsx)(n.code,{children:"system()"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'def system(prompt: Union[str, object], parent_id: Optional[str] = None) -> "Trace"\n'})}),"\n",(0,s.jsx)(n.p,{children:"Record a system trace."}),"\n",(0,s.jsx)(n.h4,{id:"parameters-8",children:"Parameters:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"prompt"})," (Union[str, object]): The input for the system event"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"parent_id"})," (Optional[str]): The ID of the parent trace"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"returns-7",children:"Returns:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Trace"}),": A new Trace object initialized and completed with the system event"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"feedback",children:(0,s.jsx)(n.code,{children:"feedback()"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'def feedback(\n    feedback_tag: FeedbackTag,\n    feedback_text: str,\n    parent_id: Optional[str] = None\n) -> "Trace"\n'})}),"\n",(0,s.jsx)(n.p,{children:"Record a feedback trace."}),"\n",(0,s.jsx)(n.h4,{id:"parameters-9",children:"Parameters:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"feedback_tag"})," (FeedbackTag): The type/category of feedback being provided"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"feedback_text"})," (str): The actual feedback content"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"parent_id"})," (Optional[str]): The ID of the parent trace"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"returns-8",children:"Returns:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Trace"}),": A new Trace object initialized and completed with the feedback event"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"end",children:(0,s.jsx)(n.code,{children:"end()"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'def end(output: Union[str, object]) -> "Trace"\n'})}),"\n",(0,s.jsx)(n.p,{children:"End the current trace and record its output."}),"\n",(0,s.jsx)(n.h4,{id:"parameters-10",children:"Parameters:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"output"})," (Union[str, object]): The output/result of the trace"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"returns-9",children:"Returns:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Trace"}),": The current Trace object with completed trace data"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"send",children:(0,s.jsx)(n.code,{children:"send()"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'def send(\n    event_type: EventType,\n    input: str,\n    output: Optional[str] = None,\n    latency: Optional[int] = None,\n    start_timestamp: Optional[int] = None,\n    end_timestamp: Optional[int] = None,\n    parent_id: Optional[str] = None\n) -> "Trace"\n'})}),"\n",(0,s.jsx)(n.p,{children:"Send an atomic event to NeuralTrust."}),"\n",(0,s.jsx)(n.h4,{id:"parameters-11",children:"Parameters:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"event_type"})," (EventType): The type of event being recorded"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"input"})," (str): The input data for the event"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"output"})," (Optional[str]): Optional output data for the event"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"latency"})," (Optional[int]): Optional processing time in milliseconds"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"start_timestamp"})," (Optional[int]): Optional event start time in milliseconds"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"end_timestamp"})," (Optional[int]): Optional event end time in milliseconds"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"parent_id"})," (Optional[str]): The ID of the parent trace"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"returns-10",children:"Returns:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Trace"}),": The current Trace object with the recorded event data"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"usage-example",children:"Usage Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'# Create a trace\ntrace = client.trace(conversation_id="conv123")\n\n# Record a message event\nmessageTrace = trace.message("User input")\nresponse = messageTrace.end("Bot response")\n\n# Record a tool event\ntoolTrace = trace.tool("Processing data", parent_id=messageTrace.trace_id)\nresult = toolTrace.end("Data processed")\n\n# Send feedback\ntrace.feedback(FeedbackTag.POSITIVE, "Great response!", parent_id=messageTrace.trace_id)\n'})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>l});var t=r(96540);const s={},i=t.createContext(s);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);