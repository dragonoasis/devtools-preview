import{g as M,as as V,o as a,c as o,f as t,N as s,an as $,aq as L,x as n,a3 as E,R as d,a1 as b,a2 as k,ad as A,O as q,t as w,z as S}from"./DwUGk4tV.js";import{y as H}from"./0CWv_uuM.js";import{u as R}from"./DBkJBJD9.js";const z=["get","post","put","patch","delete","head","options","trace"];function F(i){const l=i.trim();if(!l)return{document:null,error:""};try{const e=H.load(l);return!e||typeof e!="object"||Array.isArray(e)?{document:null,error:"Document must be an object"}:{document:e,error:""}}catch(e){return{document:null,error:e instanceof Error?e.message:"Invalid OpenAPI document"}}}function v(i){return i&&typeof i=="object"&&!Array.isArray(i)?i:{}}function J(i){if(!i)return[];const l=v(i.paths),e=[];for(const[c,y]of Object.entries(l))for(const[x,g]of Object.entries(v(y))){if(!z.includes(x.toLowerCase()))continue;const m=v(g);e.push({path:c,method:x.toUpperCase(),summary:typeof m.summary=="string"?m.summary:"",operationId:typeof m.operationId=="string"?m.operationId:"",tags:Array.isArray(m.tags)?m.tags.filter(I=>typeof I=="string"):[],details:m})}return e}function Y(i){if(!i)return[];const l=v(v(i.components).schemas);return Object.entries(l).map(([e,c])=>({name:e,schema:v(c)}))}function G(i,l){const e=l.trim().toLowerCase();return e?i.filter(c=>c.path.toLowerCase().includes(e)||c.method.toLowerCase().includes(e)||c.summary.toLowerCase().includes(e)||c.operationId.toLowerCase().includes(e)||c.tags.some(y=>y.toLowerCase().includes(e))):i}const W={ref:"ref",array:"array",object:"object"};function D(i,l=W){if(typeof i.$ref=="string")return i.$ref.split("/").pop()||l.ref;if(i.type==="array"){const e=i.items;return e&&typeof e=="object"?`${D(e,l)}[]`:l.array}return typeof i.type=="string"?i.type:l.object}const Q={class:"space-y-6"},K={class:"flex items-center justify-between mb-2"},X={class:"text-sm font-medium"},Z=["placeholder"],ee={key:0,class:"text-red-500 text-sm mt-1"},te={key:0,class:"bg-gray-50 dark:bg-gray-800 rounded-xl p-4"},se={class:"text-xl font-bold"},re={class:"flex gap-3 text-sm text-gray-500 mt-1"},ae={key:0},oe={key:1},ne={key:0,class:"text-sm mt-2"},ie=["placeholder"],de={class:"text-lg font-semibold mb-3"},ce={class:"space-y-2"},le=["aria-expanded","onClick"],pe={class:"font-mono text-sm"},ue={class:"text-sm text-gray-500 ml-auto"},me={key:0,class:"px-4 py-3 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-sm space-y-2"},ye={key:0},ge={class:"text-gray-500"},he={key:1},fe={class:"text-gray-500"},xe={key:2},_e={class:"text-gray-500 font-medium"},be={class:"ml-4 mt-1 space-y-1"},ve={class:"text-gray-400 ml-1"},ke={key:0,class:"text-red-500 text-xs ml-1"},we={key:1,class:"text-blue-500 text-xs ml-1"},Ie={key:3},Pe={class:"text-gray-500 font-medium"},Ae={class:"ml-4 mt-1 space-y-1"},Se={class:"text-gray-500 ml-2"},Oe={key:1},je={class:"text-lg font-semibold mb-3"},Ce={class:"space-y-2"},Te=["aria-expanded","onClick"],$e={class:"font-mono font-semibold"},Le={class:"text-sm text-gray-500"},Ee={key:0,class:"px-4 py-3 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900"},qe={key:0,class:"space-y-1 text-sm"},De={class:"text-blue-500 text-xs"},Be={key:0,class:"text-gray-400 text-xs"},Ne={key:1,class:"text-red-500 text-xs"},Ue={key:1,class:"text-xs overflow-auto"},Me=`openapi: "3.0.3"
info:
  title: Pet Store API
  version: "1.0.0"
  description: A sample API for a pet store
paths:
  /pets:
    get:
      summary: List all pets
      operationId: listPets
      tags: [pets]
      parameters:
        - name: limit
          in: query
          schema:
            type: integer
            maximum: 100
      responses:
        "200":
          description: A list of pets
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: "#/components/schemas/Pet"
    post:
      summary: Create a pet
      operationId: createPet
      tags: [pets]
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: "#/components/schemas/Pet"
      responses:
        "201":
          description: Pet created
  /pets/{petId}:
    get:
      summary: Get a pet by ID
      operationId: getPetById
      tags: [pets]
      parameters:
        - name: petId
          in: path
          required: true
          schema:
            type: string
      responses:
        "200":
          description: A pet
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/Pet"
        "404":
          description: Pet not found
components:
  schemas:
    Pet:
      type: object
      required: [id, name]
      properties:
        id:
          type: integer
          format: int64
        name:
          type: string
        tag:
          type: string`,ze=M({__name:"component",setup(i){const{tt:l}=R(),e=(p,f)=>l("openapi-swagger-viewer",p,f),c=w(""),y=w(null),x=w(""),g=w(new Set),m=w("");function I(){const p=F(c.value);y.value=p.document,x.value=p.error?p.error==="Document must be an object"?e("invalidOpenapiSpecification","Invalid OpenAPI specification"):p.error:""}function B(){c.value=Me,I()}V(c,()=>I());const _=S(()=>y.value?.info??void 0),N=S(()=>J(y.value)),O=S(()=>Y(y.value)),j=S(()=>G(N.value,m.value));function C(p){g.value.has(p)?g.value.delete(p):g.value.add(p)}const U={GET:"bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300",POST:"bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300",PUT:"bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300",PATCH:"bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300",DELETE:"bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300",HEAD:"bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300",OPTIONS:"bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300"};function T(p){return D(p,{ref:e("refType","ref"),array:e("arrayType","array"),object:e("objectType","object")})}return(p,f)=>(a(),o("div",Q,[t("div",null,[t("div",K,[t("label",X,s(e("openapiSpecification","OpenAPI Specification (YAML or JSON)")),1),t("button",{class:"text-sm text-emerald-600 hover:underline",onClick:B},s(e("loadSample","Load sample")),1)]),$(t("textarea",{"onUpdate:modelValue":f[0]||(f[0]=r=>E(c)?c.value=r:null),class:"w-full h-48 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 bg-white dark:bg-gray-800 font-mono text-sm",placeholder:e("openapiPlaceholder","Paste OpenAPI 3.x YAML or JSON here...")},null,8,Z),[[L,n(c)]]),n(x)?(a(),o("p",ee,s(n(x)),1)):d("",!0)]),n(y)?(a(),o(b,{key:0},[n(_)?(a(),o("div",te,[t("h3",se,s(n(_).title||e("untitledApi","Untitled API")),1),t("div",re,[n(_).version?(a(),o("span",ae,"v"+s(n(_).version),1)):d("",!0),n(y).openapi?(a(),o("span",oe,"OpenAPI "+s(n(y).openapi),1)):d("",!0)]),n(_).description?(a(),o("p",ne,s(n(_).description),1)):d("",!0)])):d("",!0),$(t("input",{"onUpdate:modelValue":f[1]||(f[1]=r=>E(m)?m.value=r:null),type:"text",class:"w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 bg-white dark:bg-gray-800 text-sm",placeholder:e("filterEndpoints","Filter endpoints...")},null,8,ie),[[L,n(m)]]),t("div",null,[t("h3",de,s(e("endpoints","Endpoints"))+" ("+s(n(j).length)+") ",1),t("div",ce,[(a(!0),o(b,null,k(n(j),(r,h)=>(a(),o("div",{key:`${r.method}-${r.path}`,class:"border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"},[t("button",{type:"button",class:"flex w-full items-center gap-3 px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-800","aria-expanded":n(g).has(`ep-${h}`),onClick:u=>C(`ep-${h}`)},[t("span",{class:A(["px-2 py-0.5 rounded text-xs font-bold",U[r.method]||""])},s(r.method),3),t("span",pe,s(r.path),1),t("span",ue,s(r.summary),1),t("span",{class:A(["i-tabler-chevron-down text-gray-400 transition-transform",{"rotate-180":n(g).has(`ep-${h}`)}]),"aria-hidden":"true"},null,2)],8,le),n(g).has(`ep-${h}`)?(a(),o("div",me,[r.operationId?(a(),o("div",ye,[t("span",ge,s(e("operationId","Operation ID"))+":",1),f[2]||(f[2]=q()),t("code",null,s(r.operationId),1)])):d("",!0),r.tags.length?(a(),o("div",he,[t("span",fe,s(e("tags","Tags"))+":",1),q(" "+s(r.tags.join(", ")),1)])):d("",!0),r.details.parameters?.length?(a(),o("div",xe,[t("span",_e,s(e("parameters","Parameters"))+":",1),t("div",be,[(a(!0),o(b,null,k(r.details.parameters,u=>(a(),o("div",{key:u.name},[t("code",null,s(u.name),1),t("span",ve,"("+s(u.in)+")",1),u.required?(a(),o("span",ke,s(e("required","required")),1)):d("",!0),u.schema?.type?(a(),o("span",we,s(u.schema.type),1)):d("",!0)]))),128))])])):d("",!0),r.details.responses?(a(),o("div",Ie,[t("span",Pe,s(e("responses","Responses"))+":",1),t("div",Ae,[(a(!0),o(b,null,k(r.details.responses,(u,P)=>(a(),o("div",{key:P},[t("span",{class:A(["font-mono",String(P).startsWith("2")?"text-green-600":String(P).startsWith("4")?"text-orange-600":"text-gray-600"])},s(P),3),t("span",Se,s(u.description),1)]))),128))])])):d("",!0)])):d("",!0)]))),128))])]),n(O).length?(a(),o("div",Oe,[t("h3",je,s(e("schemas","Schemas"))+" ("+s(n(O).length)+") ",1),t("div",Ce,[(a(!0),o(b,null,k(n(O),r=>(a(),o("div",{key:r.name,class:"border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"},[t("button",{type:"button",class:"flex w-full items-center gap-3 px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-800","aria-expanded":n(g).has(`schema-${r.name}`),onClick:h=>C(`schema-${r.name}`)},[t("span",$e,s(r.name),1),t("span",Le,s(T(r.schema)),1),t("span",{class:A(["i-tabler-chevron-down text-gray-400 ml-auto transition-transform",{"rotate-180":n(g).has(`schema-${r.name}`)}]),"aria-hidden":"true"},null,2)],8,Te),n(g).has(`schema-${r.name}`)?(a(),o("div",Ee,[r.schema.properties?(a(),o("div",qe,[(a(!0),o(b,null,k(r.schema.properties,(h,u)=>(a(),o("div",{key:u,class:"flex items-center gap-2"},[t("code",null,s(u),1),t("span",De,s(T(h)),1),h.format?(a(),o("span",Be,"("+s(h.format)+")",1)):d("",!0),r.schema.required?.includes(u)?(a(),o("span",Ne,s(e("required","required")),1)):d("",!0)]))),128))])):(a(),o("pre",Ue,s(JSON.stringify(r.schema,null,2)),1))])):d("",!0)]))),128))])])):d("",!0)],64)):d("",!0)]))}});export{ze as default};
