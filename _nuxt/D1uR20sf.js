import{e as E,a5 as Q,o as c,c as p,b as e,V as _,W as S,f as a,U as w,t as b,F as T,w as F,v as V,h as v,d as f,a0 as I}from"./Cb_ZoXDB.js";import{u as j}from"./26IaOCZs.js";import"./BxjeTn8e.js";const B={class:"space-y-6"},M={key:0,class:"bg-gray-50 dark:bg-gray-800 rounded-xl p-4"},R={class:"font-semibold mb-3 text-sm"},A={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2"},G={class:"flex items-center gap-2"},N={class:"font-mono text-sm font-medium"},O={key:0,class:"mt-1 text-xs text-gray-500"},q=["disabled"],W={key:1,class:"text-red-500 text-sm whitespace-pre-wrap"},$={key:2},z={class:"flex items-center justify-between mb-2"},H={class:"w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 bg-gray-50 dark:bg-gray-900 font-mono text-sm overflow-auto max-h-64"},J=`type Query {
  users(first: Int, after: String): UserConnection!
  user(id: ID!): User
  posts(authorId: ID): [Post!]!
}

type UserConnection {
  edges: [UserEdge!]!
  pageInfo: PageInfo!
  totalCount: Int!
}

type UserEdge {
  node: User!
  cursor: String!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type User {
  id: ID!
  name: String!
  email: String!
  posts: [Post!]!
  createdAt: String!
}

type Post {
  id: ID!
  title: String!
  body: String!
  author: User!
  published: Boolean!
  createdAt: String!
}

type Mutation {
  createUser(name: String!, email: String!): User!
  createPost(title: String!, body: String!, authorId: ID!): Post!
  deletePost(id: ID!): Boolean!
}`,K=`query GetUsers {
  users(first: 10) {
    edges {
      node {
        id
        name
        email
        posts {
          title
          published
        }
      }
      cursor
    }
    pageInfo {
      hasNextPage
      endCursor
    }
    totalCount
  }
}`,te=E({__name:"component",setup(X){const l=f(""),i=f(""),m=f(""),d=f(""),g=f([]),x=f(!1);async function P(){if(!i.value.trim()){m.value="";return}x.value=!0,d.value="",m.value="";try{const{parse:n,buildSchema:r,validate:t,print:s}=await I(async()=>{const{parse:y,buildSchema:h,validate:U,print:L}=await import("./AKYh77Ga.js");return{parse:y,buildSchema:h,validate:U,print:L}},[],import.meta.url);let o=null;l.value.trim()&&(o=r(l.value));const u=n(i.value);if(o){const y=t(o,u);y.length>0&&(d.value=y.map(h=>`Line ${h.locations?.[0]?.line||"?"}: ${h.message}`).join(`
`))}m.value=s(u)}catch(n){d.value=n instanceof Error?n.message:"Parse error"}finally{x.value=!1}}async function k(){if(!l.value.trim()){g.value=[];return}d.value="";try{const{buildSchema:n}=await I(async()=>{const{buildSchema:s}=await import("./AKYh77Ga.js");return{buildSchema:s}},[],import.meta.url),t=n(l.value).getTypeMap();g.value=Object.entries(t).filter(([s])=>!s.startsWith("__")).filter(([s,o])=>"getFields"in o).map(([s,o])=>{const u="getFields"in o?Object.keys(o.getFields()):[],y=o.astNode?.kind==="InputObjectTypeDefinition"?"Input":s==="Query"||s==="Mutation"||s==="Subscription"?"Root":"Type";return{name:s,kind:y,fields:u}}).sort((s,o)=>{const u={Root:0,Type:1,Input:2};return(u[s.kind]??3)-(u[o.kind]??3)})}catch(n){d.value=n instanceof Error?n.message:"Schema parse error",g.value=[]}}function C(){l.value=J,i.value=K,k()}Q(l,()=>k());const{copy:D}=j();return(n,r)=>(c(),p("div",B,[e("div",null,[e("div",{class:"flex items-center justify-between mb-2"},[r[3]||(r[3]=e("label",{class:"text-sm font-medium"},"GraphQL Schema (SDL)",-1)),e("button",{class:"text-sm text-emerald-600 hover:underline",onClick:C},"Load Sample")]),_(e("textarea",{"onUpdate:modelValue":r[0]||(r[0]=t=>w(l)?l.value=t:null),class:"w-full h-48 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 bg-white dark:bg-gray-800 font-mono text-sm",placeholder:"Paste your GraphQL schema (SDL) here...",spellcheck:"false"},null,512),[[S,a(l)]])]),a(g).length?(c(),p("div",M,[e("h3",R,"Schema Types ("+b(a(g).length)+")",1),e("div",A,[(c(!0),p(T,null,F(a(g),t=>(c(),p("div",{key:t.name,class:"border border-gray-200 dark:border-gray-700 rounded-lg p-2"},[e("div",G,[e("span",{class:V(["px-1.5 py-0.5 rounded text-xs font-bold",t.kind==="Root"?"bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300":t.kind==="Input"?"bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300":"bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300"])},b(t.kind),3),e("span",N,b(t.name),1)]),t.fields.length?(c(),p("div",O,b(t.fields.join(", ")),1)):v("",!0)]))),128))])])):v("",!0),e("div",null,[r[4]||(r[4]=e("label",{class:"block text-sm font-medium mb-2"},"GraphQL Query",-1)),_(e("textarea",{"onUpdate:modelValue":r[1]||(r[1]=t=>w(i)?i.value=t:null),class:"w-full h-40 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 bg-white dark:bg-gray-800 font-mono text-sm",placeholder:"Write your GraphQL query here...",spellcheck:"false"},null,512),[[S,a(i)]])]),e("button",{class:"px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 disabled:opacity-50",disabled:a(x)||!a(i).trim(),onClick:P}," Validate & Format ",8,q),a(d)?(c(),p("p",W,b(a(d)),1)):v("",!0),a(m)?(c(),p("div",$,[e("div",z,[r[5]||(r[5]=e("label",{class:"text-sm font-medium"},"Formatted Query",-1)),e("button",{class:"text-sm text-emerald-600 hover:underline",onClick:r[2]||(r[2]=t=>a(D)(a(m)))},"Copy")]),e("pre",H,b(a(m)),1)])):v("",!0)]))}});export{te as default};
