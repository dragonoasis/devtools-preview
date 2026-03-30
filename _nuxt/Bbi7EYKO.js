import{_}from"./CrI1JeLd.js";import{_ as f}from"./C9gLKMNy.js";import{_ as d}from"./C9Svqrz2.js";import{_ as g}from"./ZiTbjr06.js";import{e as h,o as k,l as v,x,b as i,a as m,U as w,f as l,d as y,n as $}from"./Cb_ZoXDB.js";import"./26IaOCZs.js";import"./BxjeTn8e.js";function C(n){const t=n.trim().replace(/^docker\s+run\s+/,"").match(/"[^"]*"|'[^']*'|\S+/g)||[],s={name:"app",image:"unknown",ports:[],volumes:[],environment:[]};let e=0;for(;e<t.length;){const o=t[e];if(o==="-d"||o==="--detach"||o==="--rm"||o==="-it"||o==="-i"||o==="-t")e++;else if(o==="--name"&&t[e+1])s.name=t[e+1],e+=2;else if((o==="-p"||o==="--publish")&&t[e+1])s.ports.push(t[e+1]),e+=2;else if(o.startsWith("-p")&&o.length>2)s.ports.push(o.slice(2)),e++;else if((o==="-v"||o==="--volume")&&t[e+1])s.volumes.push(t[e+1]),e+=2;else if((o==="-e"||o==="--env")&&t[e+1])s.environment.push(t[e+1]),e+=2;else if(o==="--restart"&&t[e+1])s.restart=t[e+1],e+=2;else if(o==="--network"&&t[e+1])s.network_mode=t[e+1],e+=2;else if((o==="-w"||o==="--workdir")&&t[e+1])s.working_dir=t[e+1],e+=2;else if(o==="--hostname"&&t[e+1])s.hostname=t[e+1],e+=2;else if(o.startsWith("-"))e+=2;else{s.image=t.slice(e).join(" ");break}}return s}function b(n){let r=`services:
  ${n.name}:
    image: ${n.image}
`;if(n.restart&&(r+=`    restart: ${n.restart}
`),n.network_mode&&(r+=`    network_mode: ${n.network_mode}
`),n.hostname&&(r+=`    hostname: ${n.hostname}
`),n.working_dir&&(r+=`    working_dir: ${n.working_dir}
`),n.ports.length){r+=`    ports:
`;for(const t of n.ports)r+=`      - "${t}"
`}if(n.volumes.length){r+=`    volumes:
`;for(const t of n.volumes)r+=`      - ${t}
`}if(n.environment.length){r+=`    environment:
`;for(const t of n.environment)r+=`      - ${t}
`}return r}const B={class:"flex flex-col gap-4"},U={class:"flex items-center justify-between"},S=h({__name:"component",setup(n){const r=y("docker run -d --name my-app -p 8080:80 -p 443:443 -v /data:/app/data -e NODE_ENV=production -e DB_HOST=localhost --restart unless-stopped nginx:alpine"),t=$(()=>{const s=r.value.trim();if(!s)return"";try{return b(C(s))}catch{return"Error parsing command"}});return(s,e)=>{const o=_,a=f,c=d,u=g;return k(),v(u,null,{default:x(()=>[i("div",B,[m(o,{modelValue:l(r),"onUpdate:modelValue":e[0]||(e[0]=p=>w(r)?r.value=p:null),label:"docker run Command",placeholder:"docker run -d --name myapp -p 8080:80 nginx:alpine",rows:4,monospace:""},null,8,["modelValue"]),i("div",U,[e[1]||(e[1]=i("label",{class:"text-sm font-medium text-gray-700 dark:text-gray-300"},"docker-compose.yml",-1)),m(a,{text:l(t)},null,8,["text"])]),m(c,{code:l(t),language:"yaml"},null,8,["code"])])]),_:1})}}});export{S as default};
