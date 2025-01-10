"use strict";(self.webpackChunkneuraltrust_docs=self.webpackChunkneuraltrust_docs||[]).push([[9911],{3776:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"observability/monitors","title":"Monitors","description":"Monitoring LLM applications is essential for maintaining performance, controlling costs, and ensuring quality. Through the NeuralTrust platform, you can track key metrics and receive alerts when issues arise.","source":"@site/docs/observability/monitors.md","sourceDirName":"observability","slug":"/observability/monitors","permalink":"/observability/monitors","draft":false,"unlisted":false,"editUrl":"https://github.com/NeuralTrust/neuraltrust/blob/main/docs/observability/monitors.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"tutorialSidebar","previous":{"title":"Tracing","permalink":"/observability/tracing"},"next":{"title":"SDKs","permalink":"/category/sdks"}}');var t=i(4848),r=i(8453);const l={sidebar_position:4},o="Monitors",a={},c=[{value:"Types of Monitors",id:"types-of-monitors",level:2},{value:"Metric Monitor",id:"metric-monitor",level:3},{value:"Change Monitor",id:"change-monitor",level:3},{value:"Getting Started",id:"getting-started",level:2},{value:"Cost Monitor",id:"cost-monitor",level:3},{value:"Negative Sentiment Monitor",id:"negative-sentiment-monitor",level:3},{value:"Prompt Data Leakage Monitor",id:"prompt-data-leakage-monitor",level:3},{value:"Number of Messages Monitor",id:"number-of-messages-monitor",level:3},{value:"Custom Monitor",id:"custom-monitor",level:3}];function h(e){const n={em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"monitors",children:"Monitors"})}),"\n",(0,t.jsx)(n.p,{children:"Monitoring LLM applications is essential for maintaining performance, controlling costs, and ensuring quality. Through the NeuralTrust platform, you can track key metrics and receive alerts when issues arise."}),"\n",(0,t.jsx)(n.h2,{id:"types-of-monitors",children:"Types of Monitors"}),"\n",(0,t.jsx)(n.h3,{id:"metric-monitor",children:"Metric Monitor"}),"\n",(0,t.jsx)(n.p,{children:"Metric monitors compare metric values against a static threshold. During each alert evaluation, NeuralTrust calculates the selected metric over the selected period and checks if it's above/below the threshold. This is the standard alerting case where you know what unexpected values look like."}),"\n",(0,t.jsx)(n.p,{children:"For example, you might want to be alerted when the average response time exceeds 5 seconds or when the total cost goes above a certain budget threshold."}),"\n",(0,t.jsx)(n.h3,{id:"change-monitor",children:"Change Monitor"}),"\n",(0,t.jsx)(n.p,{children:"Change monitors evaluate the difference between a past value and the current value. During each alert evaluation, NeuralTrust calculates the difference between the current series and the series from N minutes ago, then computes the selected metric over the selected period. An alert is triggered when this computed series crosses the threshold."}),"\n",(0,t.jsx)(n.p,{children:"This type of monitor is particularly useful for detecting sudden changes in your metrics, such as an unexpected spike in error rates or a significant drop in successful completions."}),"\n",(0,t.jsx)(n.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Monitor Creation Interface",src:i(2667).A+"",width:"2128",height:"1488"})}),"\n",(0,t.jsx)(n.p,{children:"The fastest way to get started with NeuralTrust monitors is through implementing one of the following recommended monitors."}),"\n",(0,t.jsx)(n.h3,{id:"cost-monitor",children:"Cost Monitor"}),"\n",(0,t.jsx)(n.p,{children:"This monitor tracks the total accumulated cost of your LLM application on a daily basis. It uses the sum of all costs over a 24-hour rolling window to help you maintain budget control."}),"\n",(0,t.jsx)(n.p,{children:"The monitor calculates the total cost over a 1-day window and triggers when:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Alert: The total daily cost exceeds $50"}),"\n",(0,t.jsx)(n.li,{children:"Warning: The total daily cost exceeds $40"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"This is particularly useful for:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Budget control and cost optimization"}),"\n",(0,t.jsx)(n.li,{children:"Detecting unexpected cost spikes"}),"\n",(0,t.jsx)(n.li,{children:"Preventing budget overruns"}),"\n",(0,t.jsx)(n.li,{children:"Identifying potentially expensive patterns in your LLM usage"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"To configure this monitor select the following options:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"Type:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Metric Monitor"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"Metric:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Metric: Cost"}),"\n",(0,t.jsx)(n.li,{children:"Evaluate: Sum"}),"\n",(0,t.jsx)(n.li,{children:"Over: Last 1 day"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"Alert:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Condition: Value > threshold"}),"\n",(0,t.jsx)(n.li,{children:"Alert threshold: 50"}),"\n",(0,t.jsx)(n.li,{children:"Warning threshold: 40"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"Identification:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Name: Cost Monitor"}),"\n",(0,t.jsx)(n.li,{children:"Priority: P2 High"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Cost Monitor",src:i(9329).A+"",width:"2054",height:"1392"})}),"\n",(0,t.jsx)(n.h3,{id:"negative-sentiment-monitor",children:"Negative Sentiment Monitor"}),"\n",(0,t.jsx)(n.p,{children:"This monitor tracks changes in the sentiment of responses from your LLM application over time. It's designed to detect significant deterioration in response sentiment by comparing recent sentiment scores against historical data."}),"\n",(0,t.jsx)(n.p,{children:"The monitor will trigger when there's a substantial negative shift in sentiment compared to the baseline period. Specifically, it:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Calculates the average sentiment over the last hour"}),"\n",(0,t.jsx)(n.li,{children:"Compares it to the average sentiment from the previous 4 hours"}),"\n",(0,t.jsx)(n.li,{children:"Triggers if the negative change exceeds the threshold (80% for alerts, 70% for warnings)"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"This is particularly useful for:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Detecting when your LLM starts generating consistently more negative responses"}),"\n",(0,t.jsx)(n.li,{children:"Identifying potential issues with prompt engineering or model behavior"}),"\n",(0,t.jsx)(n.li,{children:"Maintaining a positive user experience by catching sentiment degradation early"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"To configure this monitor select the following options:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"Type:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Change Monitor"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"Metric:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Metric: - Response Sentiment"}),"\n",(0,t.jsx)(n.li,{children:"Evaluate: Average"}),"\n",(0,t.jsx)(n.li,{children:"Of the: Change"}),"\n",(0,t.jsx)(n.li,{children:"Over: Last 1 hour"}),"\n",(0,t.jsx)(n.li,{children:"Compare to: Last 4 hour"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"Alert:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Condition: Value > threshold"}),"\n",(0,t.jsx)(n.li,{children:"Alert threshold: 80"}),"\n",(0,t.jsx)(n.li,{children:"Warning threshold: 70"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"Identification:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Name: Negative Sentiment Monitor"}),"\n",(0,t.jsx)(n.li,{children:"Priority: P2 High"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Negative Sentiment Monitor",src:i(7895).A+"",width:"2056",height:"1386"})}),"\n",(0,t.jsx)(n.h3,{id:"prompt-data-leakage-monitor",children:"Prompt Data Leakage Monitor"}),"\n",(0,t.jsx)(n.p,{children:"This monitor detects when sensitive personal information (PII) is sent in user prompts to the LLM. It scans for patterns like:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Personal names"}),"\n",(0,t.jsx)(n.li,{children:"Physical addresses"}),"\n",(0,t.jsx)(n.li,{children:"Phone numbers"}),"\n",(0,t.jsx)(n.li,{children:"Email addresses"}),"\n",(0,t.jsx)(n.li,{children:"Social security numbers"}),"\n",(0,t.jsx)(n.li,{children:"Credit card numbers"}),"\n",(0,t.jsx)(n.li,{children:"Other sensitive personal data"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The monitor uses a 10-minute rolling window and counts the number of PII instances detected. It triggers when:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Alert: 5 or more PII instances are detected within 10 minutes (high risk)"}),"\n",(0,t.jsx)(n.li,{children:"Warning: 2 or more PII instances are detected within 10 minutes (moderate risk)"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"This is particularly useful for:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Protecting user privacy"}),"\n",(0,t.jsx)(n.li,{children:"Preventing accidental exposure of sensitive data"}),"\n",(0,t.jsx)(n.li,{children:"Compliance with data protection regulations"}),"\n",(0,t.jsx)(n.li,{children:"Identifying potential security risks in prompt patterns"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"To configure this monitor select the following options:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"Type:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Metric Monitor"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"Metric:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Metric: Prompt Data Leakage"}),"\n",(0,t.jsx)(n.li,{children:"Evaluate: Sum"}),"\n",(0,t.jsx)(n.li,{children:"Over: Last 10 minutes"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"Alert:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Condition: Value > threshold"}),"\n",(0,t.jsx)(n.li,{children:"Alert threshold: 5"}),"\n",(0,t.jsx)(n.li,{children:"Warning threshold: 2"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"Identification:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Name: Prompt Data Leakage Monitor"}),"\n",(0,t.jsx)(n.li,{children:"Priority: P1 Critical"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Prompt Data Leakage Monitor",src:i(3936).A+"",width:"2062",height:"1386"})}),"\n",(0,t.jsx)(n.h3,{id:"number-of-messages-monitor",children:"Number of Messages Monitor"}),"\n",(0,t.jsx)(n.p,{children:"This monitor tracks the average message volume in your LLM application over time. It helps you detect unusual spikes in traffic or potential abuse of your system."}),"\n",(0,t.jsx)(n.p,{children:"The monitor calculates the average number of messages over a 1-hour window and triggers when:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Alert: The average exceeds 100 messages per hour"}),"\n",(0,t.jsx)(n.li,{children:"Warning: The average exceeds 80 messages per hour"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"This is particularly useful for:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Detecting unusual spikes in API usage"}),"\n",(0,t.jsx)(n.li,{children:"Identifying potential system abuse or DDoS attempts"}),"\n",(0,t.jsx)(n.li,{children:"Capacity planning and resource management"}),"\n",(0,t.jsx)(n.li,{children:"Cost control by catching unexpected usage patterns"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"To configure this monitor select the following options:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"Type:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Metric Monitor"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"Metric:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Metric: Number of Messages"}),"\n",(0,t.jsx)(n.li,{children:"Evaluate: Average"}),"\n",(0,t.jsx)(n.li,{children:"Over: Last 1 hour"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"Alert:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Condition: Value > threshold"}),"\n",(0,t.jsx)(n.li,{children:"Alert threshold: 100"}),"\n",(0,t.jsx)(n.li,{children:"Warning threshold: 80"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"Identification:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Name: Number of Messages Monitor"}),"\n",(0,t.jsx)(n.li,{children:"Priority: P2 High"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Number of Messages Monitor",src:i(3210).A+"",width:"2076",height:"1404"})}),"\n",(0,t.jsx)(n.h3,{id:"custom-monitor",children:"Custom Monitor"}),"\n",(0,t.jsx)(n.p,{children:"You can also create your own monitors from scratch in your application by following these steps:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Navigate to the Monitors section in your NeuralTrust dashboard."}),"\n",(0,t.jsx)(n.li,{children:'Click on "Create Monitor" and select your desired monitor type.'}),"\n",(0,t.jsx)(n.li,{children:"Choose between Metric or Change monitor."}),"\n",(0,t.jsx)(n.li,{children:"Select the desired metric."}),"\n",(0,t.jsx)(n.li,{children:"Set the threshold."}),"\n",(0,t.jsx)(n.li,{children:"Select the users you want to notify."}),"\n",(0,t.jsx)(n.li,{children:"Set the monitor name and priority level."}),"\n",(0,t.jsx)(n.li,{children:'Click on "Create Monitor" to save your monitor.'}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},9329:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/cost-monitor-19bf024c12c8d74d0822c456d12f3d6f.png"},2667:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/monitor-creation-06ebe68a61ae20cd1eeb7afe4c7f0f22.png"},7895:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/negative-sentiment-monitor-0125de743c8cf6b08e2867614a325e77.png"},3210:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/number-of-messages-monitor-8b8a5d2c452274d86094de20af6b3128.png"},3936:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/prompt-data-leakage-monitor-0e203afdaaed5d07d3a1b726f9bf5bdb.png"},8453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>o});var s=i(6540);const t={},r=s.createContext(t);function l(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);