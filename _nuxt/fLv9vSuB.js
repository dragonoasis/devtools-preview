const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./RFYoLeHj.js","./CE1G-McA.js"])))=>i.map(i=>d[i]);
import{e as M,a5 as B,o as b,c as f,b as s,V as w,W as P,f as o,U as S,Y as U,F as j,w as E,t as C,h as T,v as I,d as y,a0 as N}from"./ClG9gD6O.js";import{u as L}from"./Dp0PkiNc.js";import"./Cg5sA8a9.js";const R={class:"space-y-6"},z={key:0,class:"flex items-center gap-4"},H=["value"],F={class:"flex gap-2"},W=["onClick"],Y={key:1},q=["disabled"],G={key:2},K=["disabled"],Q={key:3,class:"text-red-500 text-sm"},X={key:4},Z={class:"flex items-center justify-between mb-2"},ee={class:"w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 bg-gray-50 dark:bg-gray-900 font-mono text-sm overflow-auto max-h-64 whitespace-pre-wrap"},te=`syntax = "proto3";

message Person {
  string name = 1;
  int32 age = 2;
  string email = 3;
  repeated string tags = 4;

  message Address {
    string street = 1;
    string city = 2;
    string zip = 3;
  }

  Address address = 5;
}

message Team {
  string name = 1;
  repeated Person members = 2;
}`,oe=`{
  "name": "Alice",
  "age": 30,
  "email": "alice@example.com",
  "tags": ["developer", "lead"],
  "address": {
    "street": "123 Main St",
    "city": "Springfield",
    "zip": "62701"
  }
}`,le=M({__name:"component",setup(se){const u=y(""),v=y(""),x=y(""),h=y(""),g=y(""),_=y([]),c=y(""),O=y("encode"),k=y(!1);async function $(){if(g.value="",_.value=[],c.value="",!!u.value.trim())try{let n=function(m,p=""){if(m.nested)for(const[r,a]of Object.entries(m.nested)){const l=p?`${p}.${r}`:r;a.constructor?.className==="Type"&&d.push(l),a.nested&&n(a,l)}};const i=(await N(()=>import("./RFYoLeHj.js").then(m=>m.i),__vite__mapDeps([0,1]),import.meta.url)).parse(u.value,{keepCase:!0}).root,d=[];if(n(i),d.length===0){const m=(p,r="")=>{for(const[a,l]of Object.entries(p))l&&typeof l=="object"&&"fields"in l&&d.push(r?`${r}.${a}`:a),l&&typeof l=="object"&&"nested"in l&&m(l.nested,r?`${r}.${a}`:a)};i.nested&&m(i.nested)}_.value=d,d.length>0&&(c.value=d[0])}catch(n){g.value=n instanceof Error?n.message:"Schema parse error"}}async function A(){if(!(!u.value.trim()||!v.value.trim()||!c.value)){k.value=!0,g.value="",h.value="";try{const e=(await N(()=>import("./RFYoLeHj.js").then(l=>l.i),__vite__mapDeps([0,1]),import.meta.url)).parse(u.value,{keepCase:!0}).root.lookupType(c.value),i=JSON.parse(v.value),d=e.verify(i);if(d){g.value=`Verification: ${d}`;return}const m=e.create(i),p=e.encode(m).finish(),r=Array.from(p).map(l=>l.toString(16).padStart(2,"0")).join(" "),a=btoa(String.fromCharCode(...p));h.value=`Hex (${p.length} bytes):
${r}

Base64:
${a}`}catch(n){g.value=n instanceof Error?n.message:"Encode error"}finally{k.value=!1}}}async function V(){if(!(!u.value.trim()||!x.value.trim()||!c.value)){k.value=!0,g.value="",h.value="";try{const e=(await N(()=>import("./RFYoLeHj.js").then(r=>r.i),__vite__mapDeps([0,1]),import.meta.url)).parse(u.value,{keepCase:!0}).root.lookupType(c.value);let i;const d=x.value.trim();if(/^[0-9a-f\s]+$/i.test(d)){const r=d.split(/\s+/).map(a=>Number.parseInt(a,16));i=new Uint8Array(r)}else{const r=atob(d);i=new Uint8Array(r.length);for(let a=0;a<r.length;a++)i[a]=r.charCodeAt(a)}const m=e.decode(i),p=e.toObject(m,{longs:String,enums:String,bytes:String,defaults:!0});h.value=JSON.stringify(p,null,2)}catch(n){g.value=n instanceof Error?n.message:"Decode error"}finally{k.value=!1}}}function D(){u.value=te,v.value=oe,$()}B(u,()=>$());const{copy:J}=L();return(n,t)=>(b(),f("div",R,[s("div",null,[s("div",{class:"flex items-center justify-between mb-2"},[t[5]||(t[5]=s("label",{class:"text-sm font-medium"},".proto Schema",-1)),s("button",{class:"text-sm text-emerald-600 hover:underline",onClick:D},"Load Sample")]),w(s("textarea",{"onUpdate:modelValue":t[0]||(t[0]=e=>S(u)?u.value=e:null),class:"w-full h-48 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 bg-white dark:bg-gray-800 font-mono text-sm",placeholder:"Paste your .proto schema definition here...",spellcheck:"false"},null,512),[[P,o(u)]])]),o(_).length?(b(),f("div",z,[t[6]||(t[6]=s("label",{class:"text-sm font-medium"},"Message Type",-1)),w(s("select",{"onUpdate:modelValue":t[1]||(t[1]=e=>S(c)?c.value=e:null),class:"border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-white dark:bg-gray-800 text-sm"},[(b(!0),f(j,null,E(o(_),e=>(b(),f("option",{key:e,value:e},C(e),9,H))),128))],512),[[U,o(c)]])])):T("",!0),s("div",F,[(b(),f(j,null,E(["encode","decode"],e=>s("button",{key:e,class:I(["px-4 py-2 rounded-lg text-sm font-medium transition-colors",o(O)===e?"bg-emerald-600 text-white":"bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"]),onClick:i=>O.value=e},C(e==="encode"?"JSON → Protobuf":"Protobuf → JSON"),11,W)),64))]),o(O)==="encode"?(b(),f("div",Y,[t[7]||(t[7]=s("label",{class:"block text-sm font-medium mb-2"},"JSON Data",-1)),w(s("textarea",{"onUpdate:modelValue":t[2]||(t[2]=e=>S(v)?v.value=e:null),class:"w-full h-40 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 bg-white dark:bg-gray-800 font-mono text-sm",placeholder:"Paste JSON data..."},null,512),[[P,o(v)]]),s("button",{class:"mt-2 px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 disabled:opacity-50",disabled:o(k)||!o(v).trim()||!o(c),onClick:A}," Encode to Protobuf ",8,q)])):(b(),f("div",G,[t[8]||(t[8]=s("label",{class:"block text-sm font-medium mb-2"},"Protobuf Binary (Hex or Base64)",-1)),w(s("textarea",{"onUpdate:modelValue":t[3]||(t[3]=e=>S(x)?x.value=e:null),class:"w-full h-40 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 bg-white dark:bg-gray-800 font-mono text-sm",placeholder:"Paste hex bytes (e.g., 0a 05 41 6c 69 63 65) or Base64..."},null,512),[[P,o(x)]]),s("button",{class:"mt-2 px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 disabled:opacity-50",disabled:o(k)||!o(x).trim()||!o(c),onClick:V}," Decode to JSON ",8,K)])),o(g)?(b(),f("p",Q,C(o(g)),1)):T("",!0),o(h)?(b(),f("div",X,[s("div",Z,[t[9]||(t[9]=s("label",{class:"text-sm font-medium"},"Result",-1)),s("button",{class:"text-sm text-emerald-600 hover:underline",onClick:t[4]||(t[4]=e=>o(J)(o(h)))},"Copy")]),s("pre",ee,C(o(h)),1)])):T("",!0)]))}});export{le as default};
