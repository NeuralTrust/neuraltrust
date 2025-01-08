"use strict";(self.webpackChunkneuraltrust_docs=self.webpackChunkneuraltrust_docs||[]).push([[5108],{6248:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>c});const l=JSON.parse('{"id":"ai-gateway/concepts/plugin-system","title":"Plugin System","description":"The AI Gateway uses a flexible plugin system to extend and customize functionality. Plugins are modular components that can be enabled and configured to add features like rate limiting, authentication, request/response modification, and external service integration. The plugin architecture follows a stage-based execution model, allowing plugins to process requests and responses at different points in the request lifecycle. This extensible design makes it easy to add new capabilities while maintaining a clean separation of concerns.","source":"@site/docs/ai-gateway/concepts/plugin-system.md","sourceDirName":"ai-gateway/concepts","slug":"/ai-gateway/concepts/plugin-system","permalink":"/neuraltrust/ai-gateway/concepts/plugin-system","draft":false,"unlisted":false,"editUrl":"https://github.com/NeuralTrust/neuraltrust/blob/main/docs/ai-gateway/concepts/plugin-system.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Forwarding Rules","permalink":"/neuraltrust/ai-gateway/concepts/forwarding-rules"},"next":{"title":"Traffic Management","permalink":"/neuraltrust/ai-gateway/concepts/traffic-management"}}');var t=i(4848),r=i(8453);const s={sidebar_position:2},a="Plugin System",o={},c=[{value:"Overview",id:"overview",level:2},{value:"Plugin Architecture",id:"plugin-architecture",level:2},{value:"Execution Stages",id:"execution-stages",level:3},{value:"Execution Modes",id:"execution-modes",level:3},{value:"Plugin Chain",id:"plugin-chain",level:3},{value:"Core Plugin Types",id:"core-plugin-types",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Basic Plugin Setup",id:"basic-plugin-setup",level:3},{value:"Parallel Execution Setup",id:"parallel-execution-setup",level:3},{value:"Execution Flow",id:"execution-flow",level:2},{value:"Plugin Types",id:"plugin-types",level:2},{value:"Sequential Plugins (parallel: false)",id:"sequential-plugins-parallel-false",level:3},{value:"Parallel Plugins (parallel: true)",id:"parallel-plugins-parallel-true",level:3},{value:"Built-in Plugins",id:"built-in-plugins",level:2},{value:"Creating Custom Plugins",id:"creating-custom-plugins",level:2},{value:"Best Practices",id:"best-practices",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"plugin-system",children:"Plugin System"})}),"\n",(0,t.jsx)(n.p,{children:"The AI Gateway uses a flexible plugin system to extend and customize functionality. Plugins are modular components that can be enabled and configured to add features like rate limiting, authentication, request/response modification, and external service integration. The plugin architecture follows a stage-based execution model, allowing plugins to process requests and responses at different points in the request lifecycle. This extensible design makes it easy to add new capabilities while maintaining a clean separation of concerns."}),"\n",(0,t.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsx)(n.p,{children:"Plugins can enhance and extend the AI Gateway's functionality in various ways:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Modify requests and responses by transforming payloads, adding headers, or changing parameters"}),"\n",(0,t.jsx)(n.li,{children:"Implement security controls like rate limiting, authentication, and input validation"}),"\n",(0,t.jsx)(n.li,{children:"Add monitoring capabilities through logging, metrics collection, and alerting"}),"\n",(0,t.jsx)(n.li,{children:"Integrate with external services for additional validation, enrichment, or business logic"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The plugin system's flexible architecture allows you to easily add custom plugins to meet your specific needs."}),"\n",(0,t.jsx)(n.h2,{id:"plugin-architecture",children:"Plugin Architecture"}),"\n",(0,t.jsx)(n.h3,{id:"execution-stages",children:"Execution Stages"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Pre-Request"}),": Before the request reaches the LLM - used for request validation, transformation, rate limiting, and authentication"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Post-Request"}),": After receiving the LLM response - enables response modification, logging, metrics collection"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Error"}),": Handles error conditions - provides custom error handling, fallbacks, and recovery logic"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"execution-modes",children:"Execution Modes"}),"\n",(0,t.jsx)(n.p,{children:"The plugin system supports both sequential and parallel execution:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Priority Levels"}),": Plugins are executed in order of their priority (lower numbers run first)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Parallel Flag"}),": Plugins with the same priority can run in parallel if configured to do so"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"plugin-chain",children:"Plugin Chain"}),"\n",(0,t.jsx)(n.p,{children:"The plugin chain defines the order and configuration of plugins that process each request:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Ordered Execution"}),": Plugins run in sequence based on priority"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Conditional Logic"}),": Plugins can implement conditions to control execution flow"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"State Sharing"}),": Plugins can share state and context through the request context"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Error Handling"}),": Each plugin can implement custom error handling logic"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"core-plugin-types",children:"Core Plugin Types"}),"\n",(0,t.jsx)(n.p,{children:"The AI Gateway includes several built-in plugin types:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Security Plugins"}),": Rate limiting, authentication, input validation"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Transform Plugins"}),": Request/response modification, payload transformation"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Integration Plugins"}),": External API calls, service mesh integration"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Observability Plugins"}),": Logging, metrics, tracing, alerting"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsx)(n.h3,{id:"basic-plugin-setup",children:"Basic Plugin Setup"}),"\n",(0,t.jsx)(n.p,{children:"The example above shows a basic plugin configuration where a single rate limiter plugin is enabled. The configuration specifies the plugin name, whether it's enabled, which execution stage it runs in, and plugin-specific settings. In this case, the rate limiter is configured to allow 100 requests per minute window. Each plugin requires its own configuration block within the plugins array, allowing you to enable and configure multiple plugins as needed."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "plugins": [\n    {\n      "name": "rate_limiter",\n      "enabled": true,\n      "stage": "pre_request",\n      "config": {\n        "limit": 100,\n        "window": "1m"\n      }\n    }\n  ]\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"parallel-execution-setup",children:"Parallel Execution Setup"}),"\n",(0,t.jsxs)(n.p,{children:["For parallel execution, plugins can be configured to run simultaneously when they share the same priority level and have the ",(0,t.jsx)(n.code,{children:"parallel"})," flag set to true. This is particularly useful for operations that don't depend on each other's results and can be executed independently, improving overall request processing time. In the example below, the ",(0,t.jsx)(n.code,{children:"external_validator"})," and ",(0,t.jsx)(n.code,{children:"content_validator"})," plugins are configured to run in parallel (priority: 2) after the ",(0,t.jsx)(n.code,{children:"rate_limiter"})," (priority: 1) completes. This configuration optimizes performance by running independent validation tasks concurrently while ensuring that critical sequential operations like rate limiting are performed first."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'"plugin_chain": [\n    {\n        "name": "rate_limiter",\n        "enabled": true,\n        "parallel": false,  // Must run sequentially\n        "priority": 1      // Runs first\n    },\n    {\n        "name": "external_validator",\n        "enabled": true,\n        "parallel": true,   // Can run in parallel\n        "priority": 2      // Runs after rate_limiter\n    },\n    {\n        "name": "content_validator",\n        "enabled": true,\n        "parallel": true,   // Can run in parallel\n        "priority": 2      // Runs alongside external_validator\n    }\n]\n'})}),"\n",(0,t.jsx)(n.h2,{id:"execution-flow",children:"Execution Flow"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Plugins are grouped by priority"}),"\n",(0,t.jsx)(n.li,{children:"Each priority group is executed in order (lowest to highest)"}),"\n",(0,t.jsxs)(n.li,{children:["Within each priority group:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"If there's only one plugin, it runs sequentially"}),"\n",(0,t.jsx)(n.li,{children:"If there are multiple plugins and they support parallel execution, they run concurrently"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"plugin-types",children:"Plugin Types"}),"\n",(0,t.jsx)(n.h3,{id:"sequential-plugins-parallel-false",children:"Sequential Plugins (parallel: false)"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Need to maintain state"}),"\n",(0,t.jsx)(n.li,{children:"Order-dependent operations"}),"\n",(0,t.jsxs)(n.li,{children:["Examples:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Rate Limiter"}),"\n",(0,t.jsx)(n.li,{children:"Authentication"}),"\n",(0,t.jsx)(n.li,{children:"Session Management"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"parallel-plugins-parallel-true",children:"Parallel Plugins (parallel: true)"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Stateless operations"}),"\n",(0,t.jsx)(n.li,{children:"Order-independent"}),"\n",(0,t.jsxs)(n.li,{children:["Examples:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Content Validators"}),"\n",(0,t.jsx)(n.li,{children:"External API Calls"}),"\n",(0,t.jsx)(n.li,{children:"Logging/Monitoring"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"built-in-plugins",children:"Built-in Plugins"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Rate Limiter"}),"\nThe Rate Limiter plugin provides request rate limiting functionality based on configurable windows and limits. It helps protect your API endpoints from abuse by controlling the number of requests allowed within specified time periods."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Key features:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Redis-backed distributed rate limiting"}),"\n",(0,t.jsx)(n.li,{children:"Configurable limits per time window"}),"\n",(0,t.jsx)(n.li,{children:"Support for multiple rate limit tiers"}),"\n",(0,t.jsx)(n.li,{children:"Customizable rate limit exceeded actions"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Example configuration:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "name": "rate_limiter",\n  "enabled": true,\n  "priority": 1,\n  "parallel": false,\n  "config": {\n    "limit": 100,\n    "window": "1m"\n  }\n}\n'})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Content Filter"}),"\nThe Content Filter plugin provides request and response content validation capabilities. It helps maintain content quality and security by filtering out unwanted patterns, sensitive information, or malicious content before it reaches your API endpoints."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Key features:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Pattern-based content filtering"}),"\n",(0,t.jsx)(n.li,{children:"Support for regular expressions"}),"\n",(0,t.jsx)(n.li,{children:"Configurable actions on matches"}),"\n",(0,t.jsx)(n.li,{children:"Pre-request and post-response filtering"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The plugin can be configured to scan both incoming requests and outgoing responses for specific patterns. When a match is found, it can either reject the request, redact the matched content, or log the incident based on the configured action."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "name": "content_filter",\n  "enabled": true,\n  "priority": 2,\n  "parallel": true,\n  "config": {\n    "banned_patterns": ["pattern1", "pattern2"],\n    "action": "reject"\n  }\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"creating-custom-plugins",children:"Creating Custom Plugins"}),"\n",(0,t.jsxs)(n.p,{children:["To create a custom plugin, you need to implement the ",(0,t.jsx)(n.code,{children:"Plugin"})," interface. This interface defines the methods that must be implemented by any plugin:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"type Plugin interface {\n    Name() string\n    Stage() string\n    Priority() int\n    SupportsParallel() bool\n    Execute(ctx context.Context, data *PluginData) error\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Priority Assignment"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Lower numbers for critical plugins"}),"\n",(0,t.jsx)(n.li,{children:"Group related plugins with same priority"}),"\n",(0,t.jsx)(n.li,{children:"Consider dependencies when setting priorities"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Parallel Execution"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Use for independent operations"}),"\n",(0,t.jsx)(n.li,{children:"Ensure thread safety"}),"\n",(0,t.jsx)(n.li,{children:"Monitor performance impact"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Error Handling"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Implement proper fallbacks"}),"\n",(0,t.jsx)(n.li,{children:"Log errors appropriately"}),"\n",(0,t.jsx)(n.li,{children:"Consider retry strategies"}),"\n"]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>a});var l=i(6540);const t={},r=l.createContext(t);function s(e){const n=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);