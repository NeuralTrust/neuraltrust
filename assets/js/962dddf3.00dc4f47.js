"use strict";(self.webpackChunkneuraltrust_docs=self.webpackChunkneuraltrust_docs||[]).push([[3417],{16349:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>c});const a=JSON.parse('{"id":"trustlens/getting-started/step-by-step/track-llm","title":"Track your LLM","description":"This guide demonstrates how to use Neural Trust\'s tracing functionality to monitor and analyze conversations in your AI application.","source":"@site/docs/trustlens/getting-started/step-by-step/track-llm.md","sourceDirName":"trustlens/getting-started/step-by-step","slug":"/trustlens/getting-started/step-by-step/track-llm","permalink":"/trustlens/getting-started/step-by-step/track-llm","draft":false,"unlisted":false,"editUrl":"https://github.com/NeuralTrust/neuraltrust/blob/main/docs/trustlens/getting-started/step-by-step/track-llm.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2,"title":"Track your LLM"},"sidebar":"tutorialSidebar","previous":{"title":"Overview","permalink":"/trustlens/getting-started/step-by-step/overview"},"next":{"title":"Create a Custom Topic Classifier","permalink":"/trustlens/getting-started/step-by-step/create-topic-classifier"}}');var r=t(74848),s=t(28453);const i={sidebar_position:2,title:"Track your LLM"},o="Track your LLM",l={},c=[{value:"Setup and Initialization",id:"setup-and-initialization",level:2},{value:"Creating a Trace",id:"creating-a-trace",level:2},{value:"Message Handling",id:"message-handling",level:2},{value:"Generation Tracking",id:"generation-tracking",level:3},{value:"Router Implementation",id:"router-implementation",level:3},{value:"Retrieval Operations",id:"retrieval-operations",level:3},{value:"Agent Interactions",id:"agent-interactions",level:3},{value:"Completing the Message",id:"completing-the-message",level:3},{value:"Example tracking",id:"example-tracking",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"track-your-llm",children:"Track your LLM"})}),"\n",(0,r.jsx)(n.p,{children:"This guide demonstrates how to use Neural Trust's tracing functionality to monitor and analyze conversations in your AI application."}),"\n",(0,r.jsxs)(n.p,{children:["You can see all the tracked messages and responses in the UI. Just go to ",(0,r.jsx)(n.strong,{children:"Traces"})," and you will see all the traces."]}),"\n",(0,r.jsx)(n.h2,{id:"setup-and-initialization",children:"Setup and Initialization"}),"\n",(0,r.jsx)(n.p,{children:"First, we need to set up our environment and initialize the Neural Trust client:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'import os\nfrom dotenv import load_dotenv\nfrom neuraltrust import Metadata, NeuralTrust, User\n\n# Load environment variables\nload_dotenv()\n\nclient = NeuralTrust(\n    api_key=os.getenv("NEURALTRUST_API_KEY"),\n)\n'})}),"\n",(0,r.jsx)(n.h2,{id:"creating-a-trace",children:"Creating a Trace"}),"\n",(0,r.jsx)(n.p,{children:"A trace represents the overall context of a conversation. It acts as a container for all the interactions and events that occur during a conversation session:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'trace = client.trace(\n    conversation_id="conversation_12345678",  # Unique identifier for this conversation\n    session_id="session_12345678",           # Identifier for the user\'s session\n    channel_id="channel_12345678",           # Identifier for the communication channel\n    user=User(id="user_12345678", name="John Doe"),  # User information\n    metadata=Metadata(id="metadata_12345678", name="John Doe"),  # Additional metadata\n    custom={"key": "value"},  # Any custom data you want to track\n)\n'})}),"\n",(0,r.jsx)(n.h2,{id:"message-handling",children:"Message Handling"}),"\n",(0,r.jsx)(n.p,{children:"Messages are the top-level components of a conversation. They represent individual interactions between the user and the system:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'# Start tracking a new message in the conversation\nmessage = trace.message(input="Hello, how are you?")\n'})}),"\n",(0,r.jsx)(n.h3,{id:"generation-tracking",children:"Generation Tracking"}),"\n",(0,r.jsx)(n.p,{children:"Track AI-generated responses. This is useful for monitoring the actual outputs produced by your LLM:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'# Track the LLM\'s generation process\ngeneration = message.generation(input="Hello, how are you?")\ngeneration.end("I am fine, thank you!")  # Record the generated response\n'})}),"\n",(0,r.jsx)(n.h3,{id:"router-implementation",children:"Router Implementation"}),"\n",(0,r.jsx)(n.p,{children:"Handle routing logic. Use this when your system needs to make decisions about how to process a message:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'# Track routing decisions in your application\nrouter = message.router(input="Hello, how are you?")\n'})}),"\n",(0,r.jsx)(n.h3,{id:"retrieval-operations",children:"Retrieval Operations"}),"\n",(0,r.jsx)(n.p,{children:"Track data retrieval operations. This is particularly useful when your system needs to fetch information from a knowledge base or external source:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'# Track when and what information is being retrieved\nretrieval = router.retrieval(input="Hello, how are you?")\nretrieval.end([{"chunk": "Hello, how are you?"}])  # Record the retrieved information\n'})}),"\n",(0,r.jsx)(n.h3,{id:"agent-interactions",children:"Agent Interactions"}),"\n",(0,r.jsx)(n.p,{children:"Monitor agent responses. Use this when tracking autonomous agent actions and decisions:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'# Track agent behavior and responses\nagent = retrieval.agent(input="Hello, how are you?")\nagent.end("I am fine, thank you!")  # Record the agent\'s response\n'})}),"\n",(0,r.jsx)(n.h3,{id:"completing-the-message",children:"Completing the Message"}),"\n",(0,r.jsx)(n.p,{children:"Finally, close the message trace by recording the final response:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'# Record the final response and complete the message trace\nmessage.end("I am fine, thank you!")\n'})}),"\n",(0,r.jsx)(n.h2,{id:"example-tracking",children:"Example tracking"}),"\n",(0,r.jsx)(n.p,{children:"For example, we want to track a conversation between a user and an LLM."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'import os\nfrom dotenv import load_dotenv\nfrom neuraltrust import Metadata, NeuralTrust, User\n\nload_dotenv()\n\nclient = NeuralTrust(api_key=os.getenv("NEURALTRUST_API_KEY"), async_client=True)\n\ntrace = client.trace(\n    conversation_id="conversation_12345678",\n    session_id="session_12345678",\n    channel_id="channel_12345678",\n    user=User(id="user_12345678", name="John Doe"),\n    metadata=Metadata(id="metadata_12345678", name="John Doe"),\n    custom={"key": "value"},\n)\n\nmessage = trace.message(input="Hello, how are you?")\n\ngeneration = message.generation(input="Hello, how are you?")\ngeneration.end("I am fine, thank you!")\n\nrouter = message.router(input="Hello, how are you?")\n\nretrieval = router.retrieval(input="Hello, how are you?")\nretrieval.end([{"chunk": "Hello, how are you?"}])\n\nagent = retrieval.agent(input="Hello, how are you?")\nagent.end("I am fine, thank you!")\n\nmessage.end("I am fine, thank you!")\n'})}),"\n",(0,r.jsxs)(n.p,{children:["For more information, check the ",(0,r.jsx)(n.a,{href:"/sdks/python-sdk/api-reference/trace-class",children:"Tracing"})," guide."]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var a=t(96540);const r={},s=a.createContext(r);function i(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);