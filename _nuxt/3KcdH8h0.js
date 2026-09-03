import{g as U,t as w,k as A,o as b,c as f,f as a,a1 as C,a2 as F,an as R,aq as E,x as g,N as p,R as _,a3 as L,aC as O,ad as j,z as V}from"./CL2O9d5B.js";import{u as D}from"./90AMB03R.js";class h extends Error{constructor(o,e){super(e),this.code=o,this.name="BenchmarkExecutionError"}code}function I(){return`
const send = globalThis.postMessage.bind(globalThis)
const blocked = () => {
  throw new Error('Network, nested workers, and messaging are unavailable inside benchmark cases.')
}

for (const name of ['fetch', 'XMLHttpRequest', 'WebSocket', 'EventSource', 'Worker', 'SharedWorker', 'importScripts', 'postMessage']) {
  try {
    Object.defineProperty(globalThis, name, {
      value: blocked,
      configurable: false,
      writable: false,
    })
  } catch {
    globalThis[name] = blocked
  }
}

globalThis.onmessage = ({ data }) => {
  try {
    const fn = new Function(
      'fetch',
      'XMLHttpRequest',
      'WebSocket',
      'EventSource',
      'Worker',
      'SharedWorker',
      'importScripts',
      '"use strict";\\n' + data.code,
    )
    const blockedApis = [blocked, blocked, blocked, blocked, blocked, blocked, blocked]
    for (let index = 0; index < 10; index += 1) fn(...blockedApis)

    const durationsMs = []
    const startedAt = performance.now()
    while (performance.now() - startedAt < data.maxDurationMs && durationsMs.length < data.iterations) {
      const before = performance.now()
      fn(...blockedApis)
      durationsMs.push(performance.now() - before)
    }
    send({ type: 'result', id: data.id, durationsMs })
  } catch (error) {
    send({
      type: 'error',
      id: data.id,
      error: error instanceof Error ? error.message : String(error),
    })
  }
}
`.trim()}function z(t,o){if(typeof t!="object"||t===null)return!1;const e=t;return e.id!==o||e.type!=="error"&&e.type!=="result"?!1:e.type==="error"?typeof e.error=="string":Array.isArray(e.durationsMs)&&e.durationsMs.every(r=>typeof r=="number"&&Number.isFinite(r)&&r>=0)}function $(t){if(typeof Worker>"u"||typeof URL>"u"||typeof Blob>"u")throw new h("unavailable","Web Workers are unavailable in this browser.");const o=URL.createObjectURL(new Blob([t],{type:"text/javascript"}));return{worker:new Worker(o),release:()=>URL.revokeObjectURL(o)}}function q(t,o,e={}){const r=e.timeoutMs??2500;if(!Number.isFinite(r)||r<=0)return Promise.reject(new h("timeout","The worker timeout must be a positive number."));if(e.signal?.aborted)return Promise.reject(new h("aborted","Benchmark execution was cancelled."));const u=I();let c,d=()=>{};try{if(e.workerFactory)c=e.workerFactory(u);else{const i=$(u);c=i.worker,d=i.release}}catch(i){return Promise.reject(i instanceof h?i:new h("unavailable",i instanceof Error?i.message:String(i)))}return new Promise((i,m)=>{let M=!1;const k=y=>{M||(M=!0,clearTimeout(B),e.signal?.removeEventListener("abort",S),c.terminate(),d(),y())},S=()=>k(()=>m(new h("aborted","Benchmark execution was cancelled."))),B=setTimeout(()=>k(()=>m(new h("timeout",`Benchmark case exceeded ${r} ms.`))),r);c.onmessage=y=>{const v=y.data;if(!z(v,t.id)){k(()=>m(new h("runtime","The benchmark worker returned an invalid result.")));return}if(v.type==="error"){k(()=>m(new h("runtime",v.error)));return}k(()=>i({id:t.id,name:t.name,durationsMs:v.durationsMs}))},c.onerror=y=>k(()=>m(new h("runtime",y.message||"The benchmark worker failed."))),e.signal?.addEventListener("abort",S,{once:!0}),c.postMessage({id:t.id,code:t.code,iterations:T(o),maxDurationMs:Math.min(2e3,Math.max(1,r-100))})})}function H(t){const o=t.map(r=>{const u=r.durationsMs.filter(d=>Number.isFinite(d)&&d>0),c=u.length?u.reduce((d,i)=>d+i,0)/u.length:0;return{id:r.id,name:r.name,runs:u.length,avgMs:c,opsPerSec:c>0?1e3/c:0,fastest:!1}}),e=Math.max(0,...o.map(r=>r.opsPerSec));return o.map(r=>({...r,fastest:e>0&&r.opsPerSec===e}))}function T(t,o=1e3){return Number.isFinite(t)?Math.min(1e6,Math.max(1,Math.floor(t))):o}function J(t){return!Number.isFinite(t)||t<0?"0.00":t>=1e6?`${(t/1e6).toFixed(2)}M`:t>=1e3?`${(t/1e3).toFixed(2)}K`:t.toFixed(2)}function X(t){const o=Math.max(0,...t.map(e=>e.opsPerSec));return o>0?o:1}const K={class:"space-y-6"},G={class:"space-y-4"},Q={class:"flex items-center gap-3 mb-2"},Y=["onUpdate:modelValue","aria-label"],Z=["onClick"],ee=["onUpdate:modelValue","placeholder"],te={class:"flex items-center gap-4"},re={class:"flex items-center gap-2"},ne={class:"text-sm"},ae=["aria-label"],se=["disabled"],oe={key:0,role:"alert",class:"space-y-1 rounded-lg bg-red-50 p-3 text-sm text-red-700 dark:bg-red-950/40 dark:text-red-300"},ie={key:1,class:"space-y-3"},ce={class:"text-lg font-semibold"},le={class:"flex items-center justify-between mb-2"},de={class:"flex items-center gap-2"},ue={class:"font-semibold"},me={key:0,class:"px-2 py-0.5 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded text-xs"},be={class:"text-right"},fe={class:"font-mono font-bold text-lg"},ge={class:"text-sm text-gray-500 ml-1"},pe={class:"w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mb-1"},he={class:"text-xs text-gray-500"},ye=U({__name:"component",setup(t){const{tt:o}=D(),e=(l,s)=>o("benchmark-builder",l,s),r=w([{id:1,name:e("stringConcatenation","String concatenation"),code:'let s = ""; for (let i = 0; i < 1000; i++) s += "x";'},{id:2,name:e("arrayJoin","Array join"),code:'const a = []; for (let i = 0; i < 1000; i++) a.push("x"); a.join("");'}]),u=w(1e3),c=w([]),d=w(!1),i=w([]);let m=null,M=3;function k(){const l=r.value.length+1,s=e("generatedCaseName","Case {number}").replace("{number}",String(l));r.value.push({id:M++,name:s,code:""})}function S(l){r.value=r.value.filter(s=>s.id!==l)}function B(l,s){return s instanceof h?s.code==="timeout"?e("caseTimedOut","{name}: stopped after the time limit.").replace("{name}",l):s.code==="aborted"?e("cancelled","Benchmark cancelled."):s.code==="unavailable"?e("workerUnavailable","This browser cannot run isolated benchmark workers."):e("caseFailed","{name}: {message}").replace("{name}",l).replace("{message}",s.message):e("caseFailed","{name}: {message}").replace("{name}",l).replace("{message}",s instanceof Error?s.message:String(s))}function y(){m?.abort()}async function v(){m?.abort();const l=new AbortController;m=l,d.value=!0,c.value=[],i.value=[];const s=T(u.value),n=[];try{for(const x of r.value)if(x.code.trim())try{n.push(await q(x,s,{signal:l.signal}))}catch(N){if(i.value.push(B(x.name,N)),l.signal.aborted)break}c.value=H(n)}finally{m===l&&(m=null),d.value=!1}}A(()=>m?.abort());const W=J,P=V(()=>X(c.value));return(l,s)=>(b(),f("div",K,[a("div",G,[(b(!0),f(C,null,F(g(r),n=>(b(),f("div",{key:n.id,class:"border border-gray-200 dark:border-gray-700 rounded-lg p-4"},[a("div",Q,[R(a("input",{"onUpdate:modelValue":x=>n.name=x,type:"text","aria-label":e("caseName","Benchmark case name"),class:"flex-1 border border-gray-300 dark:border-gray-600 rounded px-3 py-1.5 bg-white dark:bg-gray-800 text-sm font-medium"},null,8,Y),[[E,n.name]]),g(r).length>1?(b(),f("button",{key:0,class:"text-red-500 hover:text-red-700 text-sm",onClick:x=>S(n.id)},p(e("remove","Remove")),9,Z)):_("",!0)]),R(a("textarea",{"onUpdate:modelValue":x=>n.code=x,class:"w-full h-20 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-white dark:bg-gray-800 font-mono text-sm",placeholder:e("javascriptCodeToBenchmark","// JavaScript code to benchmark...")},null,8,ee),[[E,n.code]])]))),128))]),a("div",te,[a("button",{class:"px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 text-sm",onClick:k},p(e("addCase","+ Add Case")),1),a("div",re,[a("label",ne,p(e("maxIterations","Max iterations:")),1),R(a("input",{"onUpdate:modelValue":s[0]||(s[0]=n=>L(u)?u.value=n:null),type:"number","aria-label":e("maxIterations","Max iterations:"),min:"10",max:"100000",class:"w-24 border border-gray-300 dark:border-gray-600 rounded px-2 py-1 text-sm bg-white dark:bg-gray-800"},null,8,ae),[[E,g(u),void 0,{number:!0}]])]),a("button",{class:"px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 font-medium",disabled:g(d),onClick:v},p(g(d)?e("running","Running..."):e("runBenchmark","Run Benchmark")),9,se),g(d)?(b(),f("button",{key:0,class:"px-4 py-2 text-sm text-red-600 hover:underline",onClick:y},p(e("cancel","Cancel")),1)):_("",!0)]),g(i).length?(b(),f("div",oe,[(b(!0),f(C,null,F(g(i),n=>(b(),f("p",{key:n},p(n),1))),128))])):_("",!0),g(c).length?(b(),f("div",ie,[a("h3",ce,p(e("results","Results")),1),(b(!0),f(C,null,F(g(c),n=>(b(),f("div",{key:n.id,class:"bg-gray-50 dark:bg-gray-800 rounded-lg p-4"},[a("div",le,[a("div",de,[a("span",ue,p(n.name),1),n.fastest?(b(),f("span",me,p(e("fastest","Fastest")),1)):_("",!0)]),a("div",be,[a("span",fe,p(g(W)(n.opsPerSec)),1),a("span",ge,p(e("opsSec","ops/sec")),1)])]),a("div",pe,[a("div",{class:j(["h-full rounded-full",n.fastest?"bg-green-500":"bg-blue-500"]),style:O({width:`${n.opsPerSec/g(P)*100}%`})},null,6)]),a("div",he,p(e("runDetails","{avg} ms avg · {runs} runs").replace("{avg}",n.avgMs.toFixed(4)).replace("{runs}",String(n.runs))),1)]))),128))])):_("",!0)]))}});export{ye as default};
