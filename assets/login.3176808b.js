import{a as e,r as a,b as l,p as o,e as s,v as n,x as r,f as t,g as i,h as u,i as d,y as m,m as c,j as g}from"./index.19b94127.js";import{B as p}from"./baseentity.b4c19a94.js";import{a as f}from"./axios.124b63ad.js";class b{static cloneT(e,a){var l=new e(null);return a&&l.setValue(a),l}}b.loginMsg=new class extends p{};const y={setup(){b.loginMsg.apiprefix="localhost:4200";const o=e(null),s=a({account:"admin",password:"admin"}),t=a({account:[{required:!0,message:"请输入账号",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]}),i=l();return{loginForm:s,login:()=>{o.value.validate().then((()=>{if("admin"===s.account&&"admin"===s.password){let e={metaData:{username:"admin"},token:"this is token"};localStorage.setItem("userInfo",JSON.stringify(e)),i.replace("/index"),f.get("/users/alir1162107531").then((a=>{console.log(a),b.loginMsg=a.data;let l=a.data;localStorage.setItem("userDetailInfo",JSON.stringify(l)),n.info(`欢迎您,${e.metaData.username}!`);r.commit("setvalue",{key:"login_permissions",value:{index:"delete"}})})).catch((e=>{console.log("err:",e)}))}else n.error("账号或密码输入不正确！")}))},formInline:o,ruleForm:t}}},w=c();o("data-v-4f3bffc6");const h={class:"login"},v={class:"login-form"},x=g("登录");s();const F=w(((e,a,l,o,s,n)=>{const r=t("el-input"),c=t("el-form-item"),g=t("el-button"),p=t("el-form");return i(),u("section",h,[d("div",v,[d(p,{ref:"formInline",model:o.loginForm,"label-width":"80px",rules:o.ruleForm},{default:w((()=>[d(c,{label:"账号：",prop:"account"},{default:w((()=>[d(r,{modelValue:o.loginForm.account,"onUpdate:modelValue":a[1]||(a[1]=e=>o.loginForm.account=e),size:"large",placeholder:"admin",onKeyup:m(o.login,["enter"])},null,8,["modelValue","onKeyup"])])),_:1}),d(c,{label:"密码：",prop:"password"},{default:w((()=>[d(r,{modelValue:o.loginForm.password,"onUpdate:modelValue":a[2]||(a[2]=e=>o.loginForm.password=e),size:"large",placeholder:"admin",type:"password",onKeyup:m(o.login,["enter"])},null,8,["modelValue","onKeyup"])])),_:1}),d(c,null,{default:w((()=>[d(g,{size:"large",type:"primary",class:"btn",onClick:o.login},{default:w((()=>[x])),_:1},8,["onClick"])])),_:1})])),_:1},8,["model","rules"])])])}));y.render=F,y.__scopeId="data-v-4f3bffc6";export default y;
