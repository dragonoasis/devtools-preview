import{e as D,a5 as N,o as a,c as o,b as t,V as A,W as j,f as l,U as L,t as n,h as i,F as h,w as b,v as k,g as q,d as v,n as P}from"./Cb_ZoXDB.js";import{j as U}from"./B5MQNTTm.js";const V={class:"space-y-6"},B={key:0,class:"text-red-500 text-sm mt-1"},J={key:0,class:"bg-gray-50 dark:bg-gray-800 rounded-xl p-4"},M={class:"text-xl font-bold"},W={class:"flex gap-3 text-sm text-gray-500 mt-1"},Y={key:0},F={key:1},G={key:0,class:"text-sm mt-2"},H={class:"text-lg font-semibold mb-3"},R={class:"space-y-2"},z=["onClick"],Q={class:"font-mono text-sm"},K={class:"text-sm text-gray-500 ml-auto"},X={key:0,class:"px-4 py-3 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-sm space-y-2"},Z={key:0},ee={key:1},te={key:2},se={class:"ml-4 mt-1 space-y-1"},re={class:"text-gray-400 ml-1"},ae={key:0,class:"text-red-500 text-xs ml-1"},oe={key:1,class:"text-blue-500 text-xs ml-1"},ne={key:3},le={class:"ml-4 mt-1 space-y-1"},ie={class:"text-gray-500 ml-2"},de={key:1},ce={class:"text-lg font-semibold mb-3"},pe={class:"space-y-2"},ue=["onClick"],me={class:"font-mono font-semibold"},ge={class:"text-sm text-gray-500"},ye={key:0,class:"px-4 py-3 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900"},he={key:0,class:"space-y-1 text-sm"},xe={class:"text-blue-500 text-xs"},fe={key:0,class:"text-gray-400 text-xs"},be={key:1,class:"text-red-500 text-xs"},ve={key:1,class:"text-xs overflow-auto"},_e=`openapi: "3.0.3"
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
          type: string`,Ie=D({__name:"component",setup(ke){const u=v(""),p=v(null),x=v(""),m=v(new Set),f=v("");function C(){if(x.value="",p.value=null,!!u.value.trim())try{let r;const s=u.value.trim();if(s.startsWith("{")?r=JSON.parse(s):r=U.load(s),typeof r!="object"||r===null){x.value="Invalid OpenAPI specification";return}p.value=r}catch(r){x.value=r instanceof Error?r.message:"Parse error"}}function T(){u.value=_e,C()}N(u,()=>C());const g=P(()=>p.value?p.value.info:null),S=P(()=>{if(!p.value)return[];const r=p.value.paths;if(!r)return[];const s=[];for(const[e,c]of Object.entries(r))for(const[d,y]of Object.entries(c))if(["get","post","put","patch","delete","head","options"].includes(d)){const _=y;s.push({path:e,method:d.toUpperCase(),summary:_.summary||"",operationId:_.operationId||"",tags:_.tags||[],details:_})}return s}),w=P(()=>{if(!p.value)return[];const r=p.value.components;if(!r)return[];const s=r.schemas;return s?Object.entries(s).map(([e,c])=>({name:e,schema:c})):[]}),$=P(()=>{if(!f.value.trim())return S.value;const r=f.value.toLowerCase();return S.value.filter(s=>s.path.toLowerCase().includes(r)||s.method.toLowerCase().includes(r)||s.summary.toLowerCase().includes(r)||s.tags.some(e=>e.toLowerCase().includes(r)))});function O(r){m.value.has(r)?m.value.delete(r):m.value.add(r)}const E={GET:"bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300",POST:"bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300",PUT:"bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300",PATCH:"bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300",DELETE:"bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300",HEAD:"bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300",OPTIONS:"bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300"};function I(r){if(r.$ref)return r.$ref.split("/").pop()||"ref";if(r.type==="array"){const s=r.items;return s?`${I(s)}[]`:"array"}return r.type||"object"}return(r,s)=>(a(),o("div",V,[t("div",null,[t("div",{class:"flex items-center justify-between mb-2"},[s[2]||(s[2]=t("label",{class:"text-sm font-medium"},"OpenAPI Specification (YAML or JSON)",-1)),t("button",{class:"text-sm text-emerald-600 hover:underline",onClick:T}," Load sample ")]),A(t("textarea",{"onUpdate:modelValue":s[0]||(s[0]=e=>L(u)?u.value=e:null),class:"w-full h-48 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 bg-white dark:bg-gray-800 font-mono text-sm",placeholder:"Paste OpenAPI 3.x YAML or JSON here..."},null,512),[[j,l(u)]]),l(x)?(a(),o("p",B,n(l(x)),1)):i("",!0)]),l(p)?(a(),o(h,{key:0},[l(g)?(a(),o("div",J,[t("h3",M,n(l(g).title||"Untitled API"),1),t("div",W,[l(g).version?(a(),o("span",Y,"v"+n(l(g).version),1)):i("",!0),l(p).openapi?(a(),o("span",F,"OpenAPI "+n(l(p).openapi),1)):i("",!0)]),l(g).description?(a(),o("p",G,n(l(g).description),1)):i("",!0)])):i("",!0),A(t("input",{"onUpdate:modelValue":s[1]||(s[1]=e=>L(f)?f.value=e:null),type:"text",class:"w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 bg-white dark:bg-gray-800 text-sm",placeholder:"Filter endpoints..."},null,512),[[j,l(f)]]),t("div",null,[t("h3",H," Endpoints ("+n(l($).length)+") ",1),t("div",R,[(a(!0),o(h,null,b(l($),(e,c)=>(a(),o("div",{key:`${e.method}-${e.path}`,class:"border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"},[t("div",{class:"flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800",onClick:d=>O(`ep-${c}`)},[t("span",{class:k(["px-2 py-0.5 rounded text-xs font-bold",E[e.method]||""])},n(e.method),3),t("span",Q,n(e.path),1),t("span",K,n(e.summary),1),t("span",{class:k(["i-tabler-chevron-down text-gray-400 transition-transform",{"rotate-180":l(m).has(`ep-${c}`)}])},null,2)],8,z),l(m).has(`ep-${c}`)?(a(),o("div",X,[e.operationId?(a(),o("div",Z,[s[3]||(s[3]=t("span",{class:"text-gray-500"},"Operation ID:",-1)),s[4]||(s[4]=q()),t("code",null,n(e.operationId),1)])):i("",!0),e.tags.length?(a(),o("div",ee,[s[5]||(s[5]=t("span",{class:"text-gray-500"},"Tags:",-1)),q(" "+n(e.tags.join(", ")),1)])):i("",!0),e.details.parameters?.length?(a(),o("div",te,[s[6]||(s[6]=t("span",{class:"text-gray-500 font-medium"},"Parameters:",-1)),t("div",se,[(a(!0),o(h,null,b(e.details.parameters,d=>(a(),o("div",{key:d.name},[t("code",null,n(d.name),1),t("span",re,"("+n(d.in)+")",1),d.required?(a(),o("span",ae,"required")):i("",!0),d.schema?.type?(a(),o("span",oe,n(d.schema.type),1)):i("",!0)]))),128))])])):i("",!0),e.details.responses?(a(),o("div",ne,[s[7]||(s[7]=t("span",{class:"text-gray-500 font-medium"},"Responses:",-1)),t("div",le,[(a(!0),o(h,null,b(e.details.responses,(d,y)=>(a(),o("div",{key:y},[t("span",{class:k(["font-mono",String(y).startsWith("2")?"text-green-600":String(y).startsWith("4")?"text-orange-600":"text-gray-600"])},n(y),3),t("span",ie,n(d.description),1)]))),128))])])):i("",!0)])):i("",!0)]))),128))])]),l(w).length?(a(),o("div",de,[t("h3",ce," Schemas ("+n(l(w).length)+") ",1),t("div",pe,[(a(!0),o(h,null,b(l(w),e=>(a(),o("div",{key:e.name,class:"border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"},[t("div",{class:"flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800",onClick:c=>O(`schema-${e.name}`)},[t("span",me,n(e.name),1),t("span",ge,n(I(e.schema)),1),t("span",{class:k(["i-tabler-chevron-down text-gray-400 ml-auto transition-transform",{"rotate-180":l(m).has(`schema-${e.name}`)}])},null,2)],8,ue),l(m).has(`schema-${e.name}`)?(a(),o("div",ye,[e.schema.properties?(a(),o("div",he,[(a(!0),o(h,null,b(e.schema.properties,(c,d)=>(a(),o("div",{key:d,class:"flex items-center gap-2"},[t("code",null,n(d),1),t("span",xe,n(I(c)),1),c.format?(a(),o("span",fe,"("+n(c.format)+")",1)):i("",!0),e.schema.required?.includes(d)?(a(),o("span",be,"required")):i("",!0)]))),128))])):(a(),o("pre",ve,n(JSON.stringify(e.schema,null,2)),1))])):i("",!0)]))),128))])])):i("",!0)],64)):i("",!0)]))}});export{Ie as default};
