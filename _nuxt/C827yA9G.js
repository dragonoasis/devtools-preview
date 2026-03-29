import{_}from"./hUCMvIz3.js";import{_ as f}from"./D83Z_VFe.js";import{_ as d}from"./Dj_Botr3.js";import{_ as g}from"./3yjwYqO1.js";import{d as k,o as h,k as v,l as x,a as i,q as m,s as w,b as l,y,z as $}from"./5U_EX6Xb.js";function C(n){const t=n.trim().replace(/^docker\s+run\s+/,"").match(/"[^"]*"|'[^']*'|\S+/g)||[],r={name:"app",image:"unknown",ports:[],volumes:[],environment:[]};let e=0;for(;e<t.length;){const o=t[e];if(o==="-d"||o==="--detach"||o==="--rm"||o==="-it"||o==="-i"||o==="-t")e++;else if(o==="--name"&&t[e+1])r.name=t[e+1],e+=2;else if((o==="-p"||o==="--publish")&&t[e+1])r.ports.push(t[e+1]),e+=2;else if(o.startsWith("-p")&&o.length>2)r.ports.push(o.slice(2)),e++;else if((o==="-v"||o==="--volume")&&t[e+1])r.volumes.push(t[e+1]),e+=2;else if((o==="-e"||o==="--env")&&t[e+1])r.environment.push(t[e+1]),e+=2;else if(o==="--restart"&&t[e+1])r.restart=t[e+1],e+=2;else if(o==="--network"&&t[e+1])r.network_mode=t[e+1],e+=2;else if((o==="-w"||o==="--workdir")&&t[e+1])r.working_dir=t[e+1],e+=2;else if(o==="--hostname"&&t[e+1])r.hostname=t[e+1],e+=2;else if(o.startsWith("-"))e+=2;else{r.image=t.slice(e).join(" ");break}}return r}function b(n){let s=`services:
  ${n.name}:
    image: ${n.image}
`;if(n.restart&&(s+=`    restart: ${n.restart}
`),n.network_mode&&(s+=`    network_mode: ${n.network_mode}
`),n.hostname&&(s+=`    hostname: ${n.hostname}
`),n.working_dir&&(s+=`    working_dir: ${n.working_dir}
`),n.ports.length){s+=`    ports:
`;for(const t of n.ports)s+=`      - "${t}"
`}if(n.volumes.length){s+=`    volumes:
`;for(const t of n.volumes)s+=`      - ${t}
`}if(n.environment.length){s+=`    environment:
`;for(const t of n.environment)s+=`      - ${t}
`}return s}const B={class:"flex flex-col gap-4"},V={class:"flex items-center justify-between"},O=k({__name:"component",setup(n){const s=y("docker run -d --name my-app -p 8080:80 -p 443:443 -v /data:/app/data -e NODE_ENV=production -e DB_HOST=localhost --restart unless-stopped nginx:alpine"),t=$(()=>{const r=s.value.trim();if(!r)return"";try{return b(C(r))}catch{return"Error parsing command"}});return(r,e)=>{const o=_,a=f,c=d,u=g;return h(),v(u,null,{default:x(()=>[i("div",B,[m(o,{modelValue:l(s),"onUpdate:modelValue":e[0]||(e[0]=p=>w(s)?s.value=p:null),label:"docker run Command",placeholder:"docker run -d --name myapp -p 8080:80 nginx:alpine",rows:4,monospace:""},null,8,["modelValue"]),i("div",V,[e[1]||(e[1]=i("label",{class:"text-sm font-medium text-gray-700 dark:text-gray-300"},"docker-compose.yml",-1)),m(a,{text:l(t)},null,8,["text"])]),m(c,{code:l(t),language:"yaml"},null,8,["code"])])]),_:1})}}});export{O as default};
