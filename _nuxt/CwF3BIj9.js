const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Dz7Gw-MZ.js","./DsqdWQfm.js","./XYy2GoxL.js","./Dk_eJUSQ.js"])))=>i.map(i=>d[i]);
import{aE as T,g as D,as as H,o as g,c as v,f as s,N as u,an as x,aq as S,x as r,a3 as k,az as M,a1 as O,a2 as C,R as E,ad as V,t as h,z as I}from"./AMDqLr7M.js";import{d as A,a as z}from"./BwrctbU_.js";import{u as R}from"./E9VimmFC.js";import{u as L}from"./R_uIwSG9.js";import"./29AI5lD1.js";function U(y){return Array.from(y).map(p=>p.toString(16).padStart(2,"0")).join(" ")}function q(y){const p=y.trim();if(/^[0-9a-f\s]+$/i.test(p)){const e=p.split(/\s+/).filter(Boolean);if(e.some(t=>t.length>2))throw new Error("invalidHexByte");return new Uint8Array(e.map(t=>Number.parseInt(t,16)))}return z(p)}async function F(y){if(!y.trim())return[];const e=(await T(()=>import("./Dz7Gw-MZ.js").then(a=>a.i),__vite__mapDeps([0,1,2,3]),import.meta.url)).parse(y,{keepCase:!0}).root,t=[],m=(a,l="")=>{for(const[f,o]of Object.entries(a)){if(!o||typeof o!="object")continue;const _=l?`${l}.${f}`:f;"fields"in o&&t.push(_);const b=o.nested;b&&m(b,_)}},c=e.nested;return c&&m(c),t}async function G(y,p,e,t={}){const a=(await T(()=>import("./Dz7Gw-MZ.js").then(_=>_.i),__vite__mapDeps([0,1,2,3]),import.meta.url)).parse(y,{keepCase:!0}).root.lookupType(p),l=JSON.parse(e),f=a.verify(l);if(f)throw new Error(`${t.verification??"Verification"}: ${f}`);const o=a.encode(a.create(l)).finish();return`${t.hex??"Hex"} (${o.length} ${t.bytes??"bytes"}):
${U(o)}

${t.base64??"Base64"}:
${A(o)}`}async function Y(y,p,e){const c=(await T(()=>import("./Dz7Gw-MZ.js").then(f=>f.i),__vite__mapDeps([0,1,2,3]),import.meta.url)).parse(y,{keepCase:!0}).root.lookupType(p),a=c.decode(q(e)),l=c.toObject(a,{longs:String,enums:String,bytes:String,defaults:!0});return JSON.stringify(l,null,2)}const K={class:"space-y-6"},Q={class:"flex items-center justify-between mb-2"},W={class:"text-sm font-medium"},X=["placeholder"],Z={key:0,class:"flex items-center gap-4"},ee={class:"text-sm font-medium"},te=["aria-label"],oe=["value"],re={class:"flex gap-2"},se=["onClick"],ae={key:1},ne={class:"block text-sm font-medium mb-2"},le=["placeholder"],ie=["disabled"],de={key:2},ce={class:"block text-sm font-medium mb-2"},ue=["placeholder"],pe=["disabled"],me={key:3,class:"text-red-500 text-sm"},fe={key:4},ye={class:"flex items-center justify-between mb-2"},be={class:"text-sm font-medium"},ge={class:"w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 bg-gray-50 dark:bg-gray-900 font-mono text-sm overflow-auto max-h-64 whitespace-pre-wrap"},ve=`syntax = "proto3";

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
}`,he=`{
  "name": "Alice",
  "age": 30,
  "email": "alice@example.com",
  "tags": ["developer", "lead"],
  "address": {
    "street": "123 Main St",
    "city": "Springfield",
    "zip": "62701"
  }
}`,Te=D({__name:"component",setup(y){const{tt:p}=R(),e=(i,d)=>p("protobuf-json-converter",i,d),t=h(""),m=h(""),c=h(""),a=h(""),l=h(""),f=h([]),o=h(""),_=h("encode"),b=h(!1),P=I(()=>({invalidHexByte:e("invalidHexByte","Invalid hex byte"),schemaParseError:e("schemaParseError","Schema parse error"),encodeError:e("encodeError","Encode error"),decodeError:e("decodeError","Decode error")})),w=(i,d)=>i instanceof Error?P.value[i.message]||i.message:P.value[d];async function B(){if(l.value="",f.value=[],o.value="",!!t.value.trim())try{const i=await F(t.value);f.value=i,i.length>0&&(o.value=i[0])}catch(i){l.value=w(i,"schemaParseError")}}async function J(){if(!(!t.value.trim()||!m.value.trim()||!o.value)){b.value=!0,l.value="",a.value="";try{a.value=await G(t.value,o.value,m.value,{hex:e("hex","Hex"),bytes:e("bytes","bytes"),base64:"Base64",verification:e("verification","Verification")})}catch(i){l.value=w(i,"encodeError")}finally{b.value=!1}}}async function j(){if(!(!t.value.trim()||!c.value.trim()||!o.value)){b.value=!0,l.value="",a.value="";try{a.value=await Y(t.value,o.value,c.value)}catch(i){l.value=w(i,"decodeError")}finally{b.value=!1}}}function N(){t.value=ve,m.value=he,B()}H(t,()=>B());const{copy:$}=L();return(i,d)=>(g(),v("div",K,[s("div",null,[s("div",Q,[s("label",W,u(e("protoSchema",".proto Schema")),1),s("button",{class:"text-sm text-emerald-600 hover:underline",onClick:N},u(e("loadSample","Load Sample")),1)]),x(s("textarea",{"onUpdate:modelValue":d[0]||(d[0]=n=>k(t)?t.value=n:null),class:"w-full h-48 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 bg-white dark:bg-gray-800 font-mono text-sm",placeholder:e("pasteYourProtoSchemaDefinitionHere","Paste your .proto schema definition here..."),spellcheck:"false"},null,8,X),[[S,r(t)]])]),r(f).length?(g(),v("div",Z,[s("label",ee,u(e("messageType","Message Type")),1),x(s("select",{"onUpdate:modelValue":d[1]||(d[1]=n=>k(o)?o.value=n:null),"aria-label":e("messageType","Message Type"),class:"border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-white dark:bg-gray-800 text-sm"},[(g(!0),v(O,null,C(r(f),n=>(g(),v("option",{key:n,value:n},u(n),9,oe))),128))],8,te),[[M,r(o)]])])):E("",!0),s("div",re,[(g(),v(O,null,C(["encode","decode"],n=>s("button",{key:n,class:V(["px-4 py-2 rounded-lg text-sm font-medium transition-colors",r(_)===n?"bg-emerald-600 text-white":"bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"]),onClick:_e=>_.value=n},u(n==="encode"?e("jsonToProtobuf","JSON → Protobuf"):e("protobufToJson","Protobuf → JSON")),11,se)),64))]),r(_)==="encode"?(g(),v("div",ae,[s("label",ne,u(e("jsonData","JSON Data")),1),x(s("textarea",{"onUpdate:modelValue":d[2]||(d[2]=n=>k(m)?m.value=n:null),class:"w-full h-40 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 bg-white dark:bg-gray-800 font-mono text-sm",placeholder:e("pasteJSONData","Paste JSON data...")},null,8,le),[[S,r(m)]]),s("button",{class:"mt-2 px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 disabled:opacity-50",disabled:r(b)||!r(m).trim()||!r(o),onClick:J},u(e("encodeToProtobuf","Encode to Protobuf")),9,ie)])):(g(),v("div",de,[s("label",ce,u(e("protobufBinaryHexOrBase64","Protobuf Binary (Hex or Base64)")),1),x(s("textarea",{"onUpdate:modelValue":d[3]||(d[3]=n=>k(c)?c.value=n:null),class:"w-full h-40 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 bg-white dark:bg-gray-800 font-mono text-sm",placeholder:e("pasteHexBytesEG0a05416c696365OrBase64","Paste hex bytes (e.g., 0a 05 41 6c 69 63 65) or Base64...")},null,8,ue),[[S,r(c)]]),s("button",{class:"mt-2 px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 disabled:opacity-50",disabled:r(b)||!r(c).trim()||!r(o),onClick:j},u(e("decodeToJson","Decode to JSON")),9,pe)])),r(l)?(g(),v("p",me,u(r(l)),1)):E("",!0),r(a)?(g(),v("div",fe,[s("div",ye,[s("label",be,u(e("result","Result")),1),s("button",{class:"text-sm text-emerald-600 hover:underline",onClick:d[4]||(d[4]=n=>r($)(r(a)))},u(e("copy","Copy")),1)]),s("pre",ge,u(r(a)),1)])):E("",!0)]))}});export{Te as default};
