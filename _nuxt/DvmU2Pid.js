import{g as O,o as c,c as d,f as n,N as u,an as h,aq as _,x as a,a3 as j,R as v,a1 as $,a2 as J,ad as N,t as x,z as b}from"./DCR7Smch.js";import{u as K}from"./HV44Cmaj.js";import{u as F}from"./Dv3Ef6RP.js";function w(r,e=[]){const t=[];for(const[o,s]of Object.entries(r))s&&typeof s=="object"&&"value"in s?t.push({path:[...e,o],value:String(s.value)}):s&&typeof s=="object"&&t.push(...w(s,[...e,o]));return t}function y(r){return r.join("-")}function V(r,e="--"){return`:root {
${r.map(t=>`  ${e}${y(t.path)}: ${t.value};`).join(`
`)}
}`}function P(r){return r.map(e=>`$${y(e.path)}: ${e.value};`).join(`
`)}function T(r){const e={};for(const[t,o]of Object.entries(r))o&&typeof o=="object"&&"value"in o?e[t]=o.value:o&&typeof o=="object"&&(e[t]=T(o));return e}function R(r){const e=T(r);return`// tailwind.config.js
export default {
  theme: {
    extend: ${JSON.stringify(e,null,6).replace(/^/gm,"    ").trim()}
  }
}`}function z(r){return`export const tokens = ${JSON.stringify(Object.fromEntries(r.map(e=>[y(e.path),e.value])),null,2)}`}function B(r,e,t="--"){if(!r.trim())return{output:"",errorKey:""};try{const o=JSON.parse(r),s=w(o);return s.length===0?{output:"",errorKey:"noTokensFound"}:e==="css"?{output:V(s,t),errorKey:""}:e==="scss"?{output:P(s),errorKey:""}:e==="tailwind"?{output:R(o),errorKey:""}:{output:z(s),errorKey:""}}catch{return{output:"",errorKey:"invalidJson"}}}const D={class:"space-y-6"},U={class:"flex items-center justify-between mb-2"},E={class:"text-sm font-medium"},I={key:0,class:"text-red-500 text-sm mt-1"},L={class:"flex items-center gap-4"},M={class:"text-sm font-medium"},q={class:"flex gap-2"},A=["onClick"],G={key:0,class:"flex items-center gap-2"},H={class:"text-sm font-medium"},Q=["aria-label"],W={key:1},X={class:"flex items-center justify-between mb-2"},Y={class:"text-sm font-medium"},Z={class:"bg-gray-50 dark:bg-gray-800 rounded-lg p-4 text-sm font-mono overflow-auto max-h-96"},ee=`{
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
}`,ne=O({__name:"component",setup(r){const{tt:e}=K(),t=(k,i)=>e("figma-token-converter",k,i),o=x(""),s=x("css"),p=x("--");function S(){o.value=ee}const f=b(()=>B(o.value,s.value,p.value)),m=b(()=>f.value.output),g=b(()=>f.value.errorKey==="noTokensFound"?t("noTokensFound",'No tokens found. Tokens should have a "value" property.'):f.value.errorKey==="invalidJson"?t("invalidJson","Invalid JSON"):""),{copy:C}=F();return(k,i)=>(c(),d("div",D,[n("div",null,[n("div",U,[n("label",E,u(t("designTokensJson","Design Tokens JSON")),1),n("button",{class:"text-sm text-emerald-600 hover:underline",onClick:S},u(t("loadSample","Load Sample")),1)]),h(n("textarea",{"onUpdate:modelValue":i[0]||(i[0]=l=>j(o)?o.value=l:null),class:"w-full h-56 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 bg-white dark:bg-gray-800 font-mono text-sm",placeholder:'{ "color": { "primary": { "value": "#3b82f6" } } }'},null,512),[[_,a(o)]]),a(g)?(c(),d("p",I,u(a(g)),1)):v("",!0)]),n("div",L,[n("label",M,u(t("outputFormat","Output Format:")),1),n("div",q,[(c(),d($,null,J(["css","scss","tailwind","js"],l=>n("button",{key:l,class:N(["px-3 py-1.5 rounded-lg text-sm border",a(s)===l?"bg-emerald-600 text-white border-emerald-600":"border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"]),onClick:te=>s.value=l},u(l.toUpperCase()),11,A)),64))])]),a(s)==="css"?(c(),d("div",G,[n("label",H,u(t("variablePrefix","Variable Prefix:")),1),h(n("input",{"onUpdate:modelValue":i[1]||(i[1]=l=>j(p)?p.value=l:null),type:"text","aria-label":t("variablePrefix","Variable Prefix:"),class:"w-24 border border-gray-300 dark:border-gray-600 rounded px-2 py-1 font-mono text-sm bg-white dark:bg-gray-800"},null,8,Q),[[_,a(p)]])])):v("",!0),a(m)?(c(),d("div",W,[n("div",X,[n("label",Y,u(t("output","Output")),1),n("button",{class:"text-sm text-emerald-600 hover:underline",onClick:i[2]||(i[2]=l=>a(C)(a(m)))},u(t("copy","Copy")),1)]),n("pre",Z,u(a(m)),1)])):v("",!0)]))}});export{ne as default};
