const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./D5sxdG14.js","./DCR7Smch.js","./entry.CLzMGJv2.css","./DsqdWQfm.js"])))=>i.map(i=>d[i]);
import{g as F,t as v,i as I,as as R,o as u,c as g,f as r,N as c,an as T,az as Y,x as l,a3 as B,a1 as C,a2 as E,aq as G,z as k,aE as V}from"./DCR7Smch.js";import{u as H}from"./HV44Cmaj.js";const Q=`graph TD
  A[Start] --> B[End]`,$=["architecture","block","block-beta","c4component","c4container","c4context","c4deployment","c4dynamic","classdiagram","classdiagram-v2","erdiagram","flowchart","flowchart-elk","gantt","gitgraph","graph","info","journey","kanban","mindmap","packet","packet-beta","pie","quadrantchart","radar","requirementdiagram","sankey","sankey-beta","sequencediagram","statediagram","statediagram-v2","timeline","treemap","xychart","xychart-beta","zenuml"];function W(d){return d.trim()||Q}function J(d){const n=W(d).split(/\r?\n/);let e=0;if(n[e]?.trim()==="---"){for(e+=1;e<n.length&&n[e]?.trim()!=="---";)e+=1;e+=1}for(;e<n.length;){const s=n[e].trim();if(s&&!s.startsWith("%%"))return s.split(/[\s:]+/)[0].toLowerCase();e+=1}return""}function K(d){return $.includes(d.toLowerCase())}function X(d){const n=J(d);return n?K(n)?[]:[`"${n}" is not a Mermaid diagram type. A definition starts with one, such as flowchart, sequenceDiagram or gantt.`]:["The diagram is empty."]}const Z={class:"space-y-6"},ee={class:"flex flex-wrap items-center gap-4"},te={class:"block text-xs text-gray-500 mb-1"},ae=["aria-label"],re=["value"],ne={class:"block text-xs text-gray-500 mb-1"},se={class:"flex gap-1 flex-wrap"},ie=["onClick"],oe={class:"grid grid-cols-1 lg:grid-cols-2 gap-4"},le={class:"block text-sm font-medium mb-2"},ce=["aria-label"],de={class:"flex items-center justify-between mb-2"},me={class:"text-sm font-medium"},ue={class:"flex gap-2"},ge=["disabled"],pe=["disabled"],he=["innerHTML"],fe={key:1,class:"text-red-500 text-sm text-center whitespace-pre-wrap"},ve={key:2,class:"text-gray-400 text-sm"},ye=F({__name:"component",setup(d){const{tt:n}=H(),e=(i,a)=>n("mermaid-live-editor",i,a),s=v(e("flowchartSample",`graph TD
    A[Start] --> B{Is it working?}
    B -- Yes --> C[Great!]
    B -- No --> D[Debug]
    D --> B
    C --> E[Ship it!]`)),o=v(""),f=v(""),p=v("default"),M=v();let h=null,D=0,b=null;const U=["default","dark","forest","neutral"],A=k(()=>({default:e("themeDefault","default"),dark:e("themeDark","dark"),forest:e("themeForest","forest"),neutral:e("themeNeutral","neutral")})),x=k(()=>({flowchart:e("flowchartSample",`graph TD
    A[Start] --> B{Is it working?}
    B -- Yes --> C[Great!]
    B -- No --> D[Debug]
    D --> B
    C --> E[Ship it!]`),sequence:e("sequenceSample",`sequenceDiagram
    participant Client
    participant Server
    participant Database
    Client->>Server: HTTP Request
    Server->>Database: Query
    Database-->>Server: Results
    Server-->>Client: JSON Response`),classDiagram:e("classDiagramSample",`classDiagram
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
    Animal <|-- Cat`),gantt:e("ganttSample",`gantt
    title Project Timeline
    dateFormat  YYYY-MM-DD
    section Planning
    Requirements    :a1, 2026-01-01, 14d
    Design          :a2, after a1, 10d
    section Development
    Frontend        :b1, after a2, 21d
    Backend         :b2, after a2, 28d
    section Testing
    QA              :c1, after b2, 14d`),pie:e("pieSample",`pie title Browser Market Share
    "Chrome" : 65
    "Safari" : 19
    "Firefox" : 4
    "Edge" : 4
    "Other" : 8`),mindmap:e("mindmapSample",`mindmap
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
      Redis`)})),P=k(()=>({flowchart:e("flowchart","flowchart"),sequence:e("sequence","sequence"),classDiagram:e("classDiagram","classDiagram"),gantt:e("gantt","gantt"),pie:e("pie","pie"),mindmap:e("mindmap","mindmap")}));async function q(){h=(await V(()=>import("./D5sxdG14.js").then(a=>a.cb),__vite__mapDeps([0,1,2,3]),import.meta.url)).default,h.initialize({startOnLoad:!1,theme:p.value,securityLevel:"strict"})}async function y(){if(!h||!s.value.trim()){o.value="";return}const i=X(s.value);if(i.length){o.value="",f.value=i[0];return}f.value="";try{D++;const a=`mermaid-svg-${D}`,{svg:t}=await h.render(a,s.value);o.value=t}catch(a){f.value=a instanceof Error?a.message:e("renderError","Render error")}}function j(){b&&clearTimeout(b),b=setTimeout(()=>y(),300)}I(async()=>{await q(),y()}),R(s,()=>j()),R(p,async()=>{h&&(h.initialize({startOnLoad:!1,theme:p.value,securityLevel:"strict"}),y())});function O(i){s.value=x.value[i]||x.value.flowchart}function N(){if(!o.value)return;const i=new Blob([o.value],{type:"image/svg+xml"}),a=URL.createObjectURL(i),t=document.createElement("a");t.href=a,t.download="diagram.svg",t.click(),URL.revokeObjectURL(a)}async function z(){if(!o.value)return;const i=new Blob([o.value],{type:"image/svg+xml"}),a=URL.createObjectURL(i),t=new Image;t.onload=()=>{const m=document.createElement("canvas");m.width=t.naturalWidth*2,m.height=t.naturalHeight*2;const _=m.getContext("2d");_.scale(2,2),_.drawImage(t,0,0),m.toBlob(S=>{if(!S)return;const L=URL.createObjectURL(S),w=document.createElement("a");w.href=L,w.download="diagram.png",w.click(),URL.revokeObjectURL(L)},"image/png"),URL.revokeObjectURL(a)},t.src=a}return(i,a)=>(u(),g("div",Z,[r("div",ee,[r("div",null,[r("label",te,c(e("theme","Theme")),1),T(r("select",{"onUpdate:modelValue":a[0]||(a[0]=t=>B(p)?p.value=t:null),"aria-label":e("theme","Theme"),class:"border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-white dark:bg-gray-800 text-sm"},[(u(),g(C,null,E(U,t=>r("option",{key:t,value:t},c(l(A)[t]),9,re)),64))],8,ae),[[Y,l(p)]])]),r("div",null,[r("label",ne,c(e("samples","Samples")),1),r("div",se,[(u(!0),g(C,null,E(l(x),(t,m)=>(u(),g("button",{key:m,class:"px-2 py-1 text-xs border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-700",onClick:_=>O(m)},c(l(P)[m]),9,ie))),128))])])]),r("div",oe,[r("div",null,[r("label",le,c(e("mermaidSyntax","Mermaid Syntax")),1),T(r("textarea",{"onUpdate:modelValue":a[1]||(a[1]=t=>B(s)?s.value=t:null),"aria-label":e("mermaidSyntax","Mermaid Syntax"),class:"w-full h-80 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 bg-white dark:bg-gray-800 font-mono text-sm resize-none",spellcheck:"false"},null,8,ce),[[G,l(s)]])]),r("div",null,[r("div",de,[r("label",me,c(e("preview","Preview")),1),r("div",ue,[r("button",{class:"text-xs text-emerald-600 hover:underline",disabled:!l(o),onClick:N},c(e("exportSvg","Export SVG")),9,ge),r("button",{class:"text-xs text-emerald-600 hover:underline",disabled:!l(o),onClick:z},c(e("exportPng","Export PNG")),9,pe)])]),r("div",{ref_key:"previewRef",ref:M,class:"w-full h-80 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 overflow-auto flex items-center justify-center p-4"},[l(o)?(u(),g("div",{key:0,innerHTML:l(o)},null,8,he)):l(f)?(u(),g("div",fe,c(l(f)),1)):(u(),g("div",ve,c(e("previewPlaceholder","Preview will appear here...")),1))],512)])])]))}});export{ye as default};
