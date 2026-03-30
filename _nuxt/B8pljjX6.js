const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./BAdrcvIH.js","./Cb_ZoXDB.js","./entry.B-8a2mqc.css","./CE1G-McA.js"])))=>i.map(i=>d[i]);
import{e as P,A as j,a5 as _,o as c,c as u,b as t,V as D,Y as A,f as o,U as R,F as S,w as L,t as h,W as F,d as m,a0 as V}from"./Cb_ZoXDB.js";const Y={class:"space-y-6"},N={class:"flex flex-wrap items-center gap-4"},G=["value"],I={class:"flex gap-1 flex-wrap"},q=["onClick"],H={class:"grid grid-cols-1 lg:grid-cols-2 gap-4"},z={class:"flex items-center justify-between mb-2"},Q={class:"flex gap-2"},W=["disabled"],$=["disabled"],J=["innerHTML"],K={key:1,class:"text-red-500 text-sm text-center whitespace-pre-wrap"},X={key:2,class:"text-gray-400 text-sm"},te=P({__name:"component",setup(Z){const l=m(`graph TD
    A[Start] --> B{Is it working?}
    B -- Yes --> C[Great!]
    B -- No --> D[Debug]
    D --> B
    C --> E[Ship it!]`),s=m(""),g=m(""),i=m("default"),B=m();let d=null,y=0,v=null;const C=["default","dark","forest","neutral"],p={flowchart:`graph TD
    A[Start] --> B{Is it working?}
    B -- Yes --> C[Great!]
    B -- No --> D[Debug]
    D --> B
    C --> E[Ship it!]`,sequence:`sequenceDiagram
    participant Client
    participant Server
    participant Database
    Client->>Server: HTTP Request
    Server->>Database: Query
    Database-->>Server: Results
    Server-->>Client: JSON Response`,classDiagram:`classDiagram
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
    Animal <|-- Cat`,gantt:`gantt
    title Project Timeline
    dateFormat  YYYY-MM-DD
    section Planning
    Requirements    :a1, 2026-01-01, 14d
    Design          :a2, after a1, 10d
    section Development
    Frontend        :b1, after a2, 21d
    Backend         :b2, after a2, 28d
    section Testing
    QA              :c1, after b2, 14d`,pie:`pie title Browser Market Share
    "Chrome" : 65
    "Safari" : 19
    "Firefox" : 4
    "Edge" : 4
    "Other" : 8`,mindmap:`mindmap
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
      Redis`};async function U(){d=(await V(()=>import("./BAdrcvIH.js").then(e=>e.bF),__vite__mapDeps([0,1,2,3]),import.meta.url)).default,d.initialize({startOnLoad:!1,theme:i.value,securityLevel:"strict"})}async function b(){if(!d||!l.value.trim()){s.value="";return}g.value="";try{y++;const r=`mermaid-svg-${y}`,{svg:e}=await d.render(r,l.value);s.value=e}catch(r){g.value=r instanceof Error?r.message:"Render error"}}function T(){v&&clearTimeout(v),v=setTimeout(()=>b(),300)}j(async()=>{await U(),b()}),_(l,()=>T()),_(i,async()=>{d&&(d.initialize({startOnLoad:!1,theme:i.value,securityLevel:"strict"}),b())});function E(r){l.value=p[r]||p.flowchart}function M(){if(!s.value)return;const r=new Blob([s.value],{type:"image/svg+xml"}),e=URL.createObjectURL(r),a=document.createElement("a");a.href=e,a.download="diagram.svg",a.click(),URL.revokeObjectURL(e)}async function O(){if(!s.value)return;const r=new Blob([s.value],{type:"image/svg+xml"}),e=URL.createObjectURL(r),a=new Image;a.onload=()=>{const n=document.createElement("canvas");n.width=a.naturalWidth*2,n.height=a.naturalHeight*2;const f=n.getContext("2d");f.scale(2,2),f.drawImage(a,0,0),n.toBlob(w=>{if(!w)return;const k=URL.createObjectURL(w),x=document.createElement("a");x.href=k,x.download="diagram.png",x.click(),URL.revokeObjectURL(k)},"image/png"),URL.revokeObjectURL(e)},a.src=e}return(r,e)=>(c(),u("div",Y,[t("div",N,[t("div",null,[e[2]||(e[2]=t("label",{class:"block text-xs text-gray-500 mb-1"},"Theme",-1)),D(t("select",{"onUpdate:modelValue":e[0]||(e[0]=a=>R(i)?i.value=a:null),class:"border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-white dark:bg-gray-800 text-sm"},[(c(),u(S,null,L(C,a=>t("option",{key:a,value:a},h(a),9,G)),64))],512),[[A,o(i)]])]),t("div",null,[e[3]||(e[3]=t("label",{class:"block text-xs text-gray-500 mb-1"},"Samples",-1)),t("div",I,[(c(),u(S,null,L(p,(a,n)=>t("button",{key:n,class:"px-2 py-1 text-xs border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-700",onClick:f=>E(n)},h(n),9,q)),64))])])]),t("div",H,[t("div",null,[e[4]||(e[4]=t("label",{class:"block text-sm font-medium mb-2"},"Mermaid Syntax",-1)),D(t("textarea",{"onUpdate:modelValue":e[1]||(e[1]=a=>R(l)?l.value=a:null),class:"w-full h-80 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 bg-white dark:bg-gray-800 font-mono text-sm resize-none",spellcheck:"false"},null,512),[[F,o(l)]])]),t("div",null,[t("div",z,[e[5]||(e[5]=t("label",{class:"text-sm font-medium"},"Preview",-1)),t("div",Q,[t("button",{class:"text-xs text-emerald-600 hover:underline",disabled:!o(s),onClick:M}," Export SVG ",8,W),t("button",{class:"text-xs text-emerald-600 hover:underline",disabled:!o(s),onClick:O}," Export PNG ",8,$)])]),t("div",{ref_key:"previewRef",ref:B,class:"w-full h-80 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 overflow-auto flex items-center justify-center p-4"},[o(s)?(c(),u("div",{key:0,innerHTML:o(s)},null,8,J)):o(g)?(c(),u("div",K,h(o(g)),1)):(c(),u("div",X,"Preview will appear here..."))],512)])])]))}});export{te as default};
