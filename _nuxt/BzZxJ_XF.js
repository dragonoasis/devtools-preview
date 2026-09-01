const e="Mermaid Live Editor — Diagram Generator",t="Free online Mermaid diagram editor. Create flowcharts, sequence diagrams, class diagrams, Gantt charts, pie charts, and mind maps. Export to SVG or PNG. No sign-up required.",a=`graph TD
    A[Start] --> B{Is it working?}
    B -- Yes --> C[Great!]
    B -- No --> D[Debug]
    D --> B
    C --> E[Ship it!]`,n="default",s="dark",r="forest",i="neutral",o=`sequenceDiagram
    participant Client
    participant Server
    participant Database
    Client->>Server: HTTP Request
    Server->>Database: Query
    Database-->>Server: Results
    Server-->>Client: JSON Response`,c=`classDiagram
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
    Animal <|-- Cat`,d=`gantt
    title Project Timeline
    dateFormat  YYYY-MM-DD
    section Planning
    Requirements    :a1, 2026-01-01, 14d
    Design          :a2, after a1, 10d
    section Development
    Frontend        :b1, after a2, 21d
    Backend         :b2, after a2, 28d
    section Testing
    QA              :c1, after b2, 14d`,m=`pie title Browser Market Share
    "Chrome" : 65
    "Safari" : 19
    "Firefox" : 4
    "Edge" : 4
    "Other" : 8`,l=`mindmap
  root((DevTools))
    Frontend
      React
      Vue
      Angular
    Backend
      Node.js
      Python
      Go
    Database
      PostgreSQL
      MongoDB
      Redis`,p="flowchart",g="sequence",h="classDiagram",u="gantt",E="pie",f="mindmap",w="Render error",D="Theme",S="Samples",y="Mermaid Syntax",k="Preview",v="Export SVG",q="Export PNG",x="Preview will appear here...",C={heading:"What Is Mermaid?",content:"Mermaid is a JavaScript-based diagramming and charting tool that renders Markdown-inspired text definitions to create and modify diagrams dynamically. It supports flowcharts, sequence diagrams, class diagrams, state diagrams, Gantt charts, pie charts, ER diagrams, and mind maps. Mermaid is widely used in documentation, README files, and technical wikis."},M={heading:"How to Use This Mermaid Editor",steps:["Type or paste Mermaid syntax in the editor panel on the left.","The diagram preview updates automatically as you type.","Choose a theme (default, dark, forest, neutral) to change the diagram style.","Click sample buttons to load example diagrams for different chart types.","Export your diagram as SVG (vector) or PNG (raster) using the export buttons."]},P={heading:"Common Use Cases",items:[{title:"Create Architecture Diagrams",description:"Quickly sketch system architecture, data flow, or deployment diagrams using simple text syntax."},{title:"Generate Sequence Diagrams",description:"Document API interactions, authentication flows, or microservice communication patterns."},{title:"Project Planning with Gantt Charts",description:"Visualize project timelines, task dependencies, and milestones."}]},b={heading:"Frequently Asked Questions",items:[{question:"Does this tool work offline?",answer:"Yes. Once the page is loaded, all diagram rendering happens in your browser. No internet connection is needed for subsequent edits."},{question:"What diagram types are supported?",answer:"Flowcharts, sequence diagrams, class diagrams, state diagrams, Gantt charts, pie charts, ER diagrams, mind maps, and more. See the Mermaid documentation for the complete list."}]},G=["markdown-preview-editor","markdown-table-generator","code-formatter"],T={title:e,description:t,flowchartSample:a,themeDefault:n,themeDark:s,themeForest:r,themeNeutral:i,sequenceSample:o,classDiagramSample:c,ganttSample:d,pieSample:m,mindmapSample:l,flowchart:p,sequence:g,classDiagram:h,gantt:u,pie:"pie",mindmap:f,renderError:w,theme:D,samples:S,mermaidSyntax:y,preview:k,exportSvg:v,exportPng:q,previewPlaceholder:x,whatIs:C,howToUse:M,useCases:P,faq:b,relatedTools:G};export{h as classDiagram,c as classDiagramSample,T as default,t as description,q as exportPng,v as exportSvg,b as faq,p as flowchart,a as flowchartSample,u as gantt,d as ganttSample,M as howToUse,y as mermaidSyntax,f as mindmap,l as mindmapSample,E as pie,m as pieSample,k as preview,x as previewPlaceholder,G as relatedTools,w as renderError,S as samples,g as sequence,o as sequenceSample,D as theme,s as themeDark,n as themeDefault,r as themeForest,i as themeNeutral,e as title,P as useCases,C as whatIs};
