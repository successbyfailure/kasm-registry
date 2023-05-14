(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[858],{4873:function(e,a,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/new/[[...workspace]]",function(){return l(5790)}])},5790:function(e,a,l){"use strict";l.r(a),l.d(a,{__N_SSG:function(){return u},default:function(){return p}});var s=l(5893),t=l(9008),r=l.n(t),n=l(7294),i=l(3162),c=l(8813),o=l(3157),d=l(1163),m=JSON.parse('{"wZ":[{"description":"Instancia Maker con software de dise\xf1o e impresion","docker_registry":"https://docker.mapache.xyz/v1/","image_src":"davinci.png","name":"docker.mapache.xyz/kasm-davinci:latest","run_config":{"hostname":"Davinci"},"exec_config":{},"categories":["Browser"],"friendly_name":"Davinci","architecture":["amd64"],"compatibility":["1.13.x"],"sha":"524bccaf0c5663215e127bb7d9605a376663a65c"},{"description":"Instancia Maker con software de dise\xf1o e impresion","docker_registry":"https://docker.mapache.xyz/v1/","image_src":"borg.png","name":"docker.mapache.xyz/kasm-infra:latest","run_config":{"hostname":"Infra"},"exec_config":{},"categories":["Browser"],"friendly_name":"Infra","architecture":["amd64"],"compatibility":["1.13.x"],"sha":"375cc626f8236ced35fe6a9f8566dd7cd3372642"},{"friendly_name":"ML-Develop","description":"Instancia Cuda Con RTXs","docker_registry":"https://docker.mapache.xyz/v1/","image_src":"ml.png","name":"docker.mapache.xyz/kasm-ml:latest","run_config":{"hostname":"ml","security_opt":["seccomp=unconfined"],"privileged":true,"shm_size":"1gb","environment":{"NVIDIA_DISABLE_REQUIRE":"1","NVIDIA_DRIVER_CAPABILITIES":"all"}},"exec_config":{},"categories":["Developer"],"architecture":["amd64"],"compatibility":["1.13.x"],"require_gpu":true,"enabled":true,"image_type":"Container","cores":2,"memory":4096,"sha":"0dc5c4995e2db86b0dc1a7bb7980318ad488d6a7"}]}'),u=!0;function p(e){let{workspace:a}=e,t=(0,n.useRef)(null),u=(0,n.useRef)(null),p=(0,n.useRef)(null),[h,x]=(0,n.useState)(null),[b,g]=(0,n.useState)(null),[v,y]=(0,n.useState)(null),[w,j]=(0,n.useState)("png"),[_,N]=(0,n.useState)(null),k={friendly_name:null,image_src:null,description:null,name:null,cores:2,memory:2768,gpu_count:0,cpu_allocation_method:"Inherit",docker_registry:"https://index.docker.io/v1/",categories:[],require_gpu:!1,enabled:!0,image_type:"Container"},[I,C]=(0,n.useState)(k);(0,d.useRouter)(),(0,n.useEffect)(()=>{if(null===a)p.current.value="",t.current.value="",u.current.value="",x(null),g(null),y(null),C(k);else if(a&&a[0]){let e=m.wZ.find(e=>e.name===atob(a[0]));if(delete e.sha,p.current.value=e.description,t.current.value=e.name,u.current.value=e.friendly_name,e.categories){let l=[];e.categories.map(e=>l.push({label:e,value:e})),x(l)}if(e.architecture){let s=[];e.architecture.map(e=>s.push({label:e,value:e})),g(s)}N("../../icons/"+e.image_src),C({...I,...e})}},[a]);let S={control:(e,a)=>({...e,background:"#f1f5f9",borderRadius:"0.5rem",borderColor:"#94a3b8"}),multiValue(e,a){let{data:l}=a;return{...e,backgroundColor:"#dde6f1"}}};(0,n.useEffect)(()=>{if(I&&I.friendly_name){let e={...I};e.image_src=R(e.friendly_name)+"."+w,C(e)}},[w]);let D=e=>{let a={...I};a.categories=e.map(e=>e.value),C(a);let l=[];a.categories.map(e=>l.push({label:e,value:e})),x(l)},E=e=>{let a={...I};a.architecture=e.map(e=>e.value),C(a);let l=[];a.architecture.map(e=>l.push({label:e,value:e})),g(l)};function R(e){var a=e.toString().toLowerCase();return(a=(a=(a=a.split(/\&+/).join("-and-")).split(/[^a-z0-9]/).join("-")).split(/-+/).join("-")).trim("-")}let z=()=>{var e=l(5733);let a=new e,s=a.folder(I.friendly_name);if(s.file("workspace.json",JSON.stringify(I,null,2)),v)s.file(I.image_src,v.file);else if(_){let t=fetch(_).then(e=>e.blob());s.file(I.image_src,t)}a.generateAsync({type:"blob"}).then(function(e){(0,i.saveAs)(e,R(I.friendly_name)+".zip")})},A=e=>{let a={...I};a[e.target.name]=e.target.value,"icon"===e.target.name&&(delete a.icon,y({value:e.target.value,file:e.target.files[0]}),j(e.target.value.substr(e.target.value.lastIndexOf(".")+1)),N(null)),a.friendly_name&&(a.image_src=R(a.friendly_name)+"."+w),C(a)};return(0,s.jsxs)("div",{className:"",children:[(0,s.jsxs)(r(),{children:[(0,s.jsx)("title",{children:"Kasm Workspaces"}),(0,s.jsx)("meta",{name:"description",content:"List of workspaces for Kasm Webspaces"}),(0,s.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,s.jsxs)("div",{className:"flex flex-col lg:flex-row w-full my-20 max-w-6xl text-sm rounded-xl overflow-hidden mx-auto",children:[(0,s.jsxs)("div",{className:"w-full lg:w-1/2 p-16 bg-slate-300",children:[(0,s.jsx)("h1",{className:"text-2xl font-medium mb-2",children:"Add Workspace"}),(0,s.jsxs)("div",{className:"flex flex-col",children:[(0,s.jsx)("p",{className:"mb-8 opacity-70",children:'This page is designed to allow admins to generate the JSON they need to upload to the "workspaces" directory. It also allows end users to see what settings are needed if they want to manually copy them into a new workspace.'}),(0,s.jsx)("label",{className:"mb-2 font-medium",children:"Icon"}),(0,s.jsx)("input",{type:"file",name:"icon",onChange:A,className:"mb-2 p-2 rounded-lg bg-slate-100 border border-solid border-slate-400"}),(0,s.jsx)("p",{className:"mb-6 opacity-70",children:"Select the image to use, image will be renamed when it's downloaded."}),(0,s.jsx)("label",{className:"mb-2 font-medium",children:"Friendly Name"}),(0,s.jsx)("input",{ref:u,name:"friendly_name",onChange:A,className:"mb-2 p-2 rounded-lg bg-slate-100 border border-solid border-slate-400"}),(0,s.jsx)("p",{className:"mb-6 opacity-70",children:"This is the name that will show for users"}),(0,s.jsx)("label",{className:"mb-2 font-medium",children:"Categories"}),(0,s.jsx)(c.Z,{instanceId:"1",name:"categories",isMulti:!0,options:[{value:"Browser",label:"Browser"},{value:"Communication",label:"Communication"},{value:"Desktop",label:"Desktop"},{value:"Development",label:"Development"},{value:"Games",label:"Games"},{value:"Multimedia",label:"Multimedia"},{value:"Office",label:"Office"},{value:"Privacy",label:"Privacy"},{value:"Productivity",label:"Productivity"},{value:"Remote Access",label:"Remote Access"}],onChange:D,styles:S,value:h}),(0,s.jsx)("p",{className:"mb-6 mt-2 opacity-70",children:"You can select from the available option or create new ones."}),(0,s.jsx)("label",{className:"mb-2 font-medium",children:"Description"}),(0,s.jsx)("input",{ref:p,name:"description",onChange:A,className:"mb-2 p-2 rounded-lg bg-slate-100 border border-solid border-slate-400"}),(0,s.jsx)("p",{className:"mb-6 opacity-70",children:"A short description about the workspace"}),(0,s.jsx)("label",{className:"mb-2 font-medium",children:"Docker Image"}),(0,s.jsx)("input",{ref:t,name:"name",onChange:A,className:"mb-2 p-2 rounded-lg bg-slate-100 border border-solid border-slate-400"}),(0,s.jsxs)("p",{className:"mb-6 opacity-70",children:["The docker image to use, i.e. ",(0,s.jsx)("code",{className:"text-xs p-1 px-2 rounded bg-white/40",children:"kasmweb/filezilla:develop"})]}),(0,s.jsx)("label",{className:"mb-2 font-medium",children:"Architecture"}),(0,s.jsx)(o.ZP,{instanceId:"2",name:"architecture",isMulti:!0,options:[{value:"amd64",label:"amd64"},{value:"arm64",label:"arm64"}],onChange:E,styles:S,value:b}),(0,s.jsx)("p",{className:"mb-6 mt-2 opacity-70",children:"You can select from the available option or create new ones."})]})]}),(0,s.jsxs)("div",{className:"w-full lg:w-1/2 p-16 bg-slate-100",children:[(0,s.jsx)(f,{workspace:I,icon:v,inlineImage:_}),(0,s.jsx)("pre",{className:"my-8 overflow-y-auto text-xs",children:JSON.stringify({...I},null,2)}),(0,s.jsx)("button",{onClick:z,className:"p-4 relative z-10 px-5 bg-cyan-700 border-t border-white/20 border-solid hover:bg-slate-900 transition m-2 rounded items-center text-white/70 flex cursor-pointer",children:"Download"})]})]})]})}function f(e){let{workspace:a,icon:l,inlineImage:t}=e,[r,i]=(0,n.useState)(!1),c=null;if(l){let o=new Blob([l.file]);c=URL.createObjectURL(o),a.image_src=c}return(0,s.jsx)("div",{className:"rounded-xl group w-full shadow max-w-xs relative overflow-hidden h-[100px] border border-solid flex flex-col justify-between bg-slate-300 border-slate-400/50",children:(0,s.jsxs)("div",{className:"absolute top-0 left-0 right-0 h-[200px] transition-all"+(r?" -translate-y-1/2":""),children:[(0,s.jsxs)("div",{onClick:()=>i(!0),className:"h-[100px] p-4 relative overflow-hidden cursor-pointer",children:[(0,s.jsx)("img",{className:"h-[90px] group-hover:scale-150 transition-all absolute left-2 top-1",src:a.image_src,onError(e){null!==t&&(e.target.src=t)},alt:a.friendly_name}),(0,s.jsxs)("div",{className:"flex-col pl-28",children:[(0,s.jsx)("div",{className:"font-bold",children:a.friendly_name||"Friendly Name"}),(0,s.jsxs)("div",{className:"text-xs mb-2 flex gap-2",children:["Mapache Webtops"," ",(0,s.jsx)("span",{children:void 0})]}),(0,s.jsx)("div",{className:" h-8"})]}),(0,s.jsxs)("div",{className:"absolute bottom-0 left-0 right-0 bg-slate-400/20 h-8 text-[10px] flex items-center justify-center",children:[a.architecture&&a.architecture.map((e,a)=>(0,s.jsx)("span",{className:"p-2 py-0 m-[1px] inline-block rounded bg-slate-400/70",children:e},"arch"+a)),a.categories.map((e,a)=>(0,s.jsx)("span",{className:"p-2 py-0 m-[1px] inline-block rounded bg-slate-300/90",children:e},"cat"+a))]}),!1]}),(0,s.jsxs)("div",{className:"h-[100px] text-xs relative p-2 pl-4 flex",children:[(0,s.jsx)("button",{className:"absolute right-2 top-2 bg-slate-100 rounded-full flex justify-center items-center h-6 w-6",onClick:()=>i(!1),children:(0,s.jsx)("svg",{style:{height:"14px"},xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",children:(0,s.jsx)("path",{d:"M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"})})}),(0,s.jsxs)("div",{className:"flex flex-col flex-grow",children:[(0,s.jsx)("div",{className:"font-bold",children:a.friendly_name})," ",a.description]}),(0,s.jsxs)("div",{className:"flex flex-col justify-end gap-1",children:[(0,s.jsx)("div",{className:"text-xs text-color w-full p-4 py-1 rounded-lg bg-black/5 flex justify-center items-center",children:"Edit"}),(0,s.jsx)("button",{className:"text-xs w-full p-4 py-1 rounded-lg flex justify-center items-center bg-blue-500 font-bold text-white",children:"Install"})]})]})]})})}}},function(e){e.O(0,[484,774,888,179],function(){return e(e.s=4873)}),_N_E=e.O()}]);