const e="Mermaid 实时编辑器 — 图表生成工具",n="免费在线 Mermaid 图表编辑器。创建流程图、时序图、类图、甘特图、饼图和思维导图，支持导出 SVG 和 PNG。",t=`graph TD
    A[开始] --> B{是否正常？}
    B -- 是 --> C[太好了！]
    B -- 否 --> D[调试]
    D --> B
    C --> E[发布！]`,w="默认",v="深色",M="森林",C="中性",a=`sequenceDiagram
    participant Client as 客户端
    participant Server as 服务器
    participant Database as 数据库
    Client->>Server: HTTP 请求
    Server->>Database: 查询
    Database-->>Server: 结果
    Server-->>Client: JSON 响应`,s=`classDiagram
    class Animal {
        +String name
        +int age
        +makeSound()
    }
    class Dog {
        +fetch()
    }
    class Cat {
        +purr()
    }
    Animal <|-- Dog
    Animal <|-- Cat`,o=`gantt
    title 项目时间线
    dateFormat  YYYY-MM-DD
    section 规划
    需求梳理    :a1, 2026-01-01, 14d
    设计        :a2, after a1, 10d
    section 开发
    前端        :b1, after a2, 21d
    后端        :b2, after a2, 28d
    section 测试
    QA          :c1, after b2, 14d`,r=`pie title 浏览器市场份额
    "Chrome" : 65
    "Safari" : 19
    "Firefox" : 4
    "Edge" : 4
    "其他" : 8`,i=`mindmap
  root((DevTools))
    前端
      React
      Vue
      Angular
    后端
      Node.js
      Python
      Go
    数据库
      PostgreSQL
      MongoDB
      Redis`,P="流程图",b="时序图",q="类图",A="甘特图",G="饼图",c="思维导图",m="渲染错误",N="主题",T="示例",l="Mermaid 语法",k="预览",d="导出 SVG",p="导出 PNG",S="预览会显示在这里...",h={heading:"什么是Mermaid 实时编辑器 — 图表生成工具？",content:"免费在线 Mermaid 图表编辑器。创建流程图、时序图、类图、甘特图、饼图和思维导图，支持导出 SVG 和 PNG。它把输入、选项、预览和输出放在同一页面，方便边修改边检查最终结果。适合处理请求头、API 规范、SEO 元数据和浏览器协议细节。"},g={heading:"如何使用Mermaid 实时编辑器 — 图表生成工具",steps:["先填写“Theme”、“Samples”、“Mermaid 语法”中的必要内容。","按需修改选项或补充输入，结果会随着页面状态自动更新。","在“预览”中查看结果。 确认无误后可下载继续使用。"]},D={heading:"Mermaid 实时编辑器 — 图表生成工具的常见使用场景",items:[{title:"请求与响应调试",description:"在接口联调或线上排障时，快速拆解请求头、缓存策略、签名和协议细节。"},{title:"SEO 与安全配置",description:"提前检查元标签、robots 规则、CSP 或 SRI 等配置，减少发布后的返工。"},{title:"整理可交付输出",description:"把生成或解析结果复制到规范文档、配置文件或工单中，便于团队协作。"}]},u=[{question:"页面里的预览或输出和最终平台效果会完全一致吗？",answer:"不一定。此处结果以当前浏览器和工具的解析逻辑为准，最终渲染仍可能受到目标平台、样式环境、客户端实现或文件查看器差异影响。"},{question:"我可以复制或导出什么内容？",answer:"通常可以直接复制结果区中的文本，部分页面还提供下载或更具体的输出格式。实际可用内容以当前页面展示的按钮和结果区域为准。"}],f=["markdown-preview-editor","markdown-table-generator","code-formatter"],x={title:e,description:n,flowchartSample:t,themeDefault:"默认",themeDark:"深色",themeForest:"森林",themeNeutral:"中性",sequenceSample:a,classDiagramSample:s,ganttSample:o,pieSample:r,mindmapSample:i,flowchart:"流程图",sequence:"时序图",classDiagram:"类图",gantt:"甘特图",pie:"饼图",mindmap:c,renderError:m,theme:"主题",samples:"示例",mermaidSyntax:l,preview:"预览",exportSvg:d,exportPng:p,previewPlaceholder:S,whatIs:h,howToUse:g,useCases:D,faq:u,relatedTools:f};export{q as classDiagram,s as classDiagramSample,x as default,n as description,p as exportPng,d as exportSvg,u as faq,P as flowchart,t as flowchartSample,A as gantt,o as ganttSample,g as howToUse,l as mermaidSyntax,c as mindmap,i as mindmapSample,G as pie,r as pieSample,k as preview,S as previewPlaceholder,f as relatedTools,m as renderError,T as samples,b as sequence,a as sequenceSample,N as theme,v as themeDark,w as themeDefault,M as themeForest,C as themeNeutral,e as title,D as useCases,h as whatIs};
