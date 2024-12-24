"use strict";(self.webpackChunkneuraltrust_docs=self.webpackChunkneuraltrust_docs||[]).push([[1361],{8594:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"getting-started/quickstart","title":"Quick Start","description":"Get started with the NeuralTrust Platform using our TypeScript SDK.","source":"@site/docs/getting-started/quickstart.md","sourceDirName":"getting-started","slug":"/getting-started/quickstart","permalink":"/neuraltrust/getting-started/quickstart","draft":false,"unlisted":false,"editUrl":"https://github.com/NeuralTrust/neuraltrust/blob/main/docs/getting-started/quickstart.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Overview","permalink":"/neuraltrust/getting-started/overview"},"next":{"title":"Installation","permalink":"/neuraltrust/getting-started/installation"}}');var a=t(4848),r=t(8453);const i={sidebar_position:1},l="Quick Start",c={},d=[{value:"Installation",id:"installation",level:2},{value:"Basic Setup",id:"basic-setup",level:2},{value:"Tracing",id:"tracing",level:2},{value:"Creating Basic Traces",id:"creating-basic-traces",level:3},{value:"Nested Traces (Recommended)",id:"nested-traces-recommended",level:3},{value:"Event Types",id:"event-types",level:3},{value:"Evaluation Sets",id:"evaluation-sets",level:2},{value:"Knowledge Bases",id:"knowledge-bases",level:2},{value:"Test Sets",id:"test-sets",level:2},{value:"Error Handling",id:"error-handling",level:2},{value:"Environment Variables",id:"environment-variables",level:2},{value:"Next Steps",id:"next-steps",level:2}];function o(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"quick-start",children:"Quick Start"})}),"\n",(0,a.jsx)(n.p,{children:"Get started with the NeuralTrust Platform using our TypeScript SDK."}),"\n",(0,a.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,a.jsx)(n.p,{children:"Install the NeuralTrust TypeScript SDK using npm or yarn:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npm install neuraltrust\n# or\nyarn add neuraltrust\n"})}),"\n",(0,a.jsx)(n.h2,{id:"basic-setup",children:"Basic Setup"}),"\n",(0,a.jsx)(n.p,{children:"Initialize the client with your API key:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:'import { NeuralTrust } from \'neuraltrust\';\n\n// Initialize with API key\nconst client = new NeuralTrust({ \n  apiKey: "your_api_key_here" \n});\n\n// Optional: Custom configuration\nconst client = new NeuralTrust({ \n  apiKey: "your_api_key_here",\n  baseUrl: "https://custom.api.url"\n});\n'})}),"\n",(0,a.jsx)(n.h2,{id:"tracing",children:"Tracing"}),"\n",(0,a.jsx)(n.h3,{id:"creating-basic-traces",children:"Creating Basic Traces"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:'// Create a root trace\nconst trace = client.trace({\n    conversationId: "conversation_12345678",\n    sessionId: "session_12345678",\n    channelId: "channel_12345678",\n    user: { \n      id: "user_12345678", \n      name: "John Doe" \n    }\n});\n\n// Add a message\nconst message = trace.message("User input: Hello!");\nawait message.end("Assistant: Hi there!");\n'})}),"\n",(0,a.jsx)(n.h3,{id:"nested-traces-recommended",children:"Nested Traces (Recommended)"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:'const trace = client.trace({\n    conversationId: "conversation_12345678",\n    sessionId: "session_12345678"\n});\n\n// Create a conversation flow\nconst message = trace.message("What\'s the weather?");\nconst router = message.router("Routing request...");\nawait router.end("Routed to weather service");\n\nconst retrieval = router.retrieval("Fetching weather data...");\nawait retrieval.end("Found weather data for San Francisco");\n\nconst generation = retrieval.generation("Generating response...");\nawait generation.end("The weather is sunny and 75\xb0F");\n\nawait message.end("The weather is sunny and 75\xb0F");\n'})}),"\n",(0,a.jsx)(n.h3,{id:"event-types",children:"Event Types"}),"\n",(0,a.jsx)(n.p,{children:"The SDK supports various event types:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"MESSAGE"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"TOOL"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"AGENT"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"RETRIEVAL"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"GENERATION"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"ROUTER"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"SYSTEM"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"CUSTOM"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"FEEDBACK"})}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"evaluation-sets",children:"Evaluation Sets"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:'// Create an evaluation set\nconst evalSet = await client.createEvaluationSet({\n    name: "Weather Bot Eval",\n    description: "Evaluation set for weather bot responses"\n});\n\n// Run evaluation\nconst results = await client.runEvaluationSet({ \n    id: evalSet.id \n});\n\n// Get results\nconst evalSet = await client.getEvaluationSet({ \n    id: "eval_set_id" \n});\n'})}),"\n",(0,a.jsx)(n.h2,{id:"knowledge-bases",children:"Knowledge Bases"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:'// Create a knowledge base\nconst kb = await client.createKnowledgeBase({\n    type: "upstash",\n    credentials: { \n      apiKey: "your_doc_api_key" \n    }\n});\n\n// Retrieve a knowledge base\nconst kb = await client.getKnowledgeBase({ \n    id: "kb_id" \n});\n'})}),"\n",(0,a.jsx)(n.h2,{id:"test-sets",children:"Test Sets"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:'// Create a test set\nconst testset = await client.createTestset({\n    name: "Weather Bot Tests",\n    type: "adversarial",\n    evaluationSetId: "eval_set_id",\n    knowledgeBaseId: "kb_id",\n    numQuestions: 10\n});\n\n// Get test results\nconst results = await client.getTestset({ \n    id: "testset_id" \n});\n'})}),"\n",(0,a.jsx)(n.h2,{id:"error-handling",children:"Error Handling"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:'try {\n    const trace = client.trace({\n        conversationId: "conversation_12345678"\n    });\n    const message = await trace.message("Hello!");\n} catch (error) {\n    console.error("Error creating trace:", error);\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"environment-variables",children:"Environment Variables"}),"\n",(0,a.jsx)(n.p,{children:"Configure the SDK using environment variables:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"NEURALTRUST_API_KEY=your_api_key_here\nNEURALTRUST_BASE_URL=https://custom.api.url  # Optional\n"})}),"\n",(0,a.jsx)(n.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"../observability/tracing.md",children:"Detailed Tracing Guide"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/neuraltrust/red-teaming/evaluation-sets",children:"Evaluation Sets Documentation"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/neuraltrust/red-teaming/knowledge-bases",children:"Knowledge Base Guide"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/neuraltrust/red-teaming/testsets",children:"Test Sets Documentation"})}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var s=t(6540);const a={},r=s.createContext(a);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);