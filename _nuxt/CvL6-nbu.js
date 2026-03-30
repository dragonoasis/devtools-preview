import{d as F,aj as z,o as i,c as d,a as o,w,v as _,b as r,s as C,t as g,f as y,F as B,x as D,n as E,y as f,z as S}from"./Cm2mFNgr.js";import{u as R}from"./DaBbq7DK.js";const U={class:"space-y-6"},L={key:0,class:"text-red-500 text-sm mt-1"},M={class:"flex items-center gap-4"},I={class:"flex gap-2"},P=["onClick"],q={key:0,class:"flex items-center gap-2"},A={key:1},G={class:"flex items-center justify-between mb-2"},H={class:"bg-gray-50 dark:bg-gray-800 rounded-lg p-4 text-sm font-mono overflow-auto max-h-96"},K=`{
  "color": {
    "primary": {
      "50": { "value": "#eff6ff" },
      "100": { "value": "#dbeafe" },
      "500": { "value": "#3b82f6" },
      "900": { "value": "#1e3a5f" }
    },
    "success": { "value": "#22c55e" },
    "error": { "value": "#ef4444" }
  },
  "spacing": {
    "xs": { "value": "4px" },
    "sm": { "value": "8px" },
    "md": { "value": "16px" },
    "lg": { "value": "24px" },
    "xl": { "value": "32px" }
  },
  "fontSize": {
    "sm": { "value": "14px" },
    "base": { "value": "16px" },
    "lg": { "value": "18px" },
    "xl": { "value": "20px" }
  },
  "borderRadius": {
    "sm": { "value": "4px" },
    "md": { "value": "8px" },
    "lg": { "value": "16px" },
    "full": { "value": "9999px" }
  }
}`,Y=F({__name:"component",setup(Q){const l=f(""),p=f("css"),c=f("--"),m=f("");function $(){l.value=K}function k(s,e=[]){const t=[];for(const[u,a]of Object.entries(s))a&&typeof a=="object"&&"value"in a?t.push({path:[...e,u],value:String(a.value)}):a&&typeof a=="object"&&t.push(...k(a,[...e,u]));return t}const h=S(()=>{if(!l.value.trim())return{output:"",error:""};try{const s=JSON.parse(l.value),e=k(s);if(e.length===0)return{output:"",error:'No tokens found. Tokens should have a "value" property.'};let t="";switch(p.value){case"css":t=O(e);break;case"scss":t=N(e);break;case"tailwind":t=J(e,s);break;case"js":t=T(e);break}return{output:t,error:""}}catch(s){return{output:"",error:s instanceof Error?s.message:"Invalid JSON"}}}),v=S(()=>h.value.output);z(()=>{m.value=h.value.error});function b(s){return s.join("-")}function O(s){return`:root {
${s.map(t=>`  ${c.value}${b(t.path)}: ${t.value};`).join(`
`)}
}`}function N(s){return s.map(e=>`$${b(e.path)}: ${e.value};`).join(`
`)}function J(s,e){function t(a){const x={};for(const[j,n]of Object.entries(a))n&&typeof n=="object"&&"value"in n?x[j]=n.value:n&&typeof n=="object"&&(x[j]=t(n));return x}const u=t(e);return`// tailwind.config.js
export default {
  theme: {
    extend: ${JSON.stringify(u,null,6).replace(/^/gm,"    ").trim()}
  }
}`}function T(s){const e={};for(const t of s)e[b(t.path)]=t.value;return`export const tokens = ${JSON.stringify(e,null,2)}`}const{copy:V}=R();return(s,e)=>(i(),d("div",U,[o("div",null,[o("div",{class:"flex items-center justify-between mb-2"},[e[3]||(e[3]=o("label",{class:"text-sm font-medium"},"Design Tokens JSON",-1)),o("button",{class:"text-sm text-emerald-600 hover:underline",onClick:$},"Load Sample")]),w(o("textarea",{"onUpdate:modelValue":e[0]||(e[0]=t=>C(l)?l.value=t:null),class:"w-full h-56 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 bg-white dark:bg-gray-800 font-mono text-sm",placeholder:'{ "color": { "primary": { "value": "#3b82f6" } } }'},null,512),[[_,r(l)]]),r(m)?(i(),d("p",L,g(r(m)),1)):y("",!0)]),o("div",M,[e[4]||(e[4]=o("label",{class:"text-sm font-medium"},"Output Format:",-1)),o("div",I,[(i(),d(B,null,D(["css","scss","tailwind","js"],t=>o("button",{key:t,class:E(["px-3 py-1.5 rounded-lg text-sm border",r(p)===t?"bg-emerald-600 text-white border-emerald-600":"border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"]),onClick:u=>p.value=t},g(t.toUpperCase()),11,P)),64))])]),r(p)==="css"?(i(),d("div",q,[e[5]||(e[5]=o("label",{class:"text-sm font-medium"},"Variable Prefix:",-1)),w(o("input",{"onUpdate:modelValue":e[1]||(e[1]=t=>C(c)?c.value=t:null),type:"text",class:"w-24 border border-gray-300 dark:border-gray-600 rounded px-2 py-1 font-mono text-sm bg-white dark:bg-gray-800"},null,512),[[_,r(c)]])])):y("",!0),r(v)?(i(),d("div",A,[o("div",G,[e[6]||(e[6]=o("label",{class:"text-sm font-medium"},"Output",-1)),o("button",{class:"text-sm text-emerald-600 hover:underline",onClick:e[2]||(e[2]=t=>r(V)(r(v)))},"Copy")]),o("pre",H,g(r(v)),1)])):y("",!0)]))}});export{Y as default};
