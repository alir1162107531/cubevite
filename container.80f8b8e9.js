import{r as e,a,c as l,u as s,b as t,d as o,o as n,w as d,e as i,p as r,f as u,g as c,h,i as m,j as f,k as p,t as g,T as w,l as v,v as _,F as x,m as k,n as b,q as y}from"./index.9b6b6501.js";import{a as I}from"./axios.9f088939.js";import"./vendor.fa9df649.js";var j={setup(){let r=e(!0);const u=a(l),c=e("../components/form/select"),h=s(),m=t(),f=o(),p=e(f.state.userInfo.metaData),g=e(f.state.userDetailInfo);return n((()=>{console.log(f.getters.token)})),d((()=>{c.value=h.path})),i(r,((e,a)=>{console.log(r)})),{showmenu:r,ChildRoutes:u,defaultActive:c,logout:()=>{localStorage.clear(),m.replace("/login")},store:f,userInfo:p,loginMsg:g}},methods:{getUserInfo(){I.get("/users/alir1162107531").then((e=>{console.log(e)})).catch((e=>{console.log("err:",e)}))}}};const C=y();r("data-v-33ba66d4");const M=f("svg",{t:"1618386448999",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"7603","data-spm-anchor-id":"a313x.7781069.0.i1",width:"100",height:"50"},[f("path",{d:"M784.6 192h-155.8L321.6 697.2 219.8 512l175.4-320h-155.8L64 512l175.4 320h155.8l307.4-505.2 101.6 185.2-175.4 320h155.8L960 512 784.6 192z","p-id":"7604",fill:"#ffffff","data-spm-anchor-id":"a313x.7781069.0.i2",class:""})],-1),L={class:"header-dropdown"},V={class:"el-dropdown-link"},q=f("i",{class:"el-icon-arrow-down el-icon--right"},null,-1),z=p("退出登录");u();const A=C(((e,a,l,s,t,o)=>{const n=c("el-switch"),d=c("el-dropdown-item"),i=c("el-dropdown-menu"),r=c("el-dropdown"),u=c("el-header"),y=c("el-menu-item"),I=c("el-submenu"),j=c("el-menu"),A=c("el-aside"),D=c("router-view"),R=c("el-main"),S=c("el-container");return h(),m(S,{style:{height:"100vh"}},{default:C((()=>[f(u,{class:"header"},{default:C((()=>[M,f("div",L,[f(n,{modelValue:s.showmenu,"onUpdate:modelValue":a[1]||(a[1]=e=>s.showmenu=e)},null,8,["modelValue"]),f("img",{src:s.loginMsg.avatar_url,alt:"",srcset:""},null,8,["src"]),f(r,{size:"small"},{dropdown:C((()=>[f(i,null,{default:C((()=>[f(d,{onClick:s.logout},{default:C((()=>[z])),_:1},8,["onClick"])])),_:1})])),default:C((()=>[f("span",V,[p(g(s.loginMsg.name)+" ",1),q])])),_:1})])])),_:1}),f(S,null,{default:C((()=>[f(w,{name:"aside-toggle"},{default:C((()=>[v(f("div",null,[f(A,{width:"180px",class:"menu"},{default:C((()=>[f(j,{"default-active":s.defaultActive,"unique-opened":!0,router:!0,"background-color":"#333853"},{default:C((()=>[(h(!0),m(x,null,k(s.ChildRoutes,((e,a)=>(h(),m(x,{key:e.path+a},[e.children&&e.children.length>0?(h(),m(I,{key:0,index:e.path},{title:C((()=>[p(g(e.name),1)])),default:C((()=>[(h(!0),m(x,null,k(e.children,((a,l)=>(h(),m(x,{key:a.path+l},[a.meta.isShow?(h(),m(y,{key:0,index:e.path+"/"+a.path},{default:C((()=>[p(g(a.name),1)])),_:2},1032,["index"])):b("",!0)],64)))),128))])),_:2},1032,["index"])):(h(),m(y,{key:1,index:e.path},{title:C((()=>[p(g(e.name),1)])),_:2},1032,["index"]))],64)))),128))])),_:1},8,["default-active"])])),_:1})],512),[[_,s.showmenu]])])),_:1}),f(R,{class:"container-main"},{default:C((()=>[f(D)])),_:1})])),_:1})])),_:1})}));j.render=A,j.__scopeId="data-v-33ba66d4";export default j;
