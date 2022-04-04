import{m as f}from"./elements.92736b4e.js";import{d as k,P as S,q as b,r as F,C as w,e as l,o as x,c as R,i as r,j as s,F as E,m as p,t as i}from"./vendor.49f89f0d.js";import{R as P}from"./index.b100158c.js";import{S as B}from"./index.943405c8.js";import{B as N}from"./index.e8e6e97d.js";import{A as U}from"./AppType.6775b756.js";import{d as z}from"./index.9b1139e6.js";import{w as D,g as j}from"./utils.3a4595f4.js";import{u as A,a as g,_ as L,b as O,c as q}from"./en-US.628e0d34.js";import{_ as K}from"./elevation.229458c1.js";import"./shared.506a394a.js";import"./index.2b3dacb8.js";import"./components.2481c71b.js";import"./provide.e985b336.js";import"./index.f8492b74.js";import"./index.48ee5316.js";import"./index.9e43ebc8.js";const n=k({name:"VarStyleProvider",props:{styleVars:{type:Object,default:()=>({})}},setup(t,{slots:o}){return()=>{var a;return S("div",{class:"var-style-provider",style:f(t.styleVars)},(a=o.default)==null?void 0:a.call(o))}}}),_=[];function c(t={}){_.forEach(a=>document.documentElement.style.removeProperty(a)),_.length=0;const o=f(t);Object.entries(o).forEach(([a,e])=>{document.documentElement.style.setProperty(a,e),_.push(a)})}c.Component=n;n.install=function(t){t.component(n.name,n)};c.install=function(t){t.component(n.name,n)};var G={componentCall:"\u7EC4\u4EF6\u8C03\u7528",functionCall:"\u51FD\u6570\u8C03\u7528",toggleTheme:"\u5207\u6362\u6837\u5F0F\u53D8\u91CF",toggleRootTheme:"\u5207\u6362\u6839\u8282\u70B9\u6837\u5F0F\u53D8\u91CF"},H={componentCall:"Component Call",functionCall:"Function Call",toggleTheme:"Toggle Theme",toggleRootTheme:"Toggle Root Theme"};const{add:h,use:I,pack:J,packs:de,merge:_e}=A(),M=t=>{q(t),I(t)};g("zh-CN",L);g("en-US",O);h("zh-CN",G);h("en-US",H);const Q={name:"StyleProviderExample",components:{VarStyleProvider:c.Component,VarRate:P,VarSwitch:B,VarButton:N,AppType:U},setup(){const t=b({score:5,license:!0}),o=F(null),a={"--rate-primary-color":"var(--color-success)","--button-primary-color":"var(--color-success)","--switch-handle-active-background":"var(--color-success)","--switch-track-active-background":"var(--color-success)"},e=()=>{o.value=o.value?null:a};let m=null;const v={"--color-primary":"#3f51b5"},u=()=>{m=m?null:v,c(m)};return D(M),w(()=>{c(j()==="darkThemes"?z:null)}),{pack:J,state:t,styleVars:o,toggleTheme:e,toggleRootTheme:u}}};function W(t,o,a,e,m,v){const u=l("app-type"),C=l("var-rate"),T=l("var-switch"),y=l("var-button"),V=l("var-style-provider");return x(),R(E,null,[r(u,null,{default:s(()=>[p(i(e.pack.componentCall),1)]),_:1}),r(V,{"style-vars":e.styleVars},{default:s(()=>[r(C,{modelValue:e.state.score,"onUpdate:modelValue":o[0]||(o[0]=d=>e.state.score=d)},null,8,["modelValue"]),r(T,{modelValue:e.state.license,"onUpdate:modelValue":o[1]||(o[1]=d=>e.state.license=d)},null,8,["modelValue"]),r(y,{style:{"margin-top":"10px"},type:"primary",block:"",onClick:e.toggleTheme},{default:s(()=>[p(i(e.pack.toggleTheme),1)]),_:1},8,["onClick"])]),_:1},8,["style-vars"]),r(u,null,{default:s(()=>[p(i(e.pack.functionCall),1)]),_:1}),r(y,{type:"primary",block:"",onClick:e.toggleRootTheme},{default:s(()=>[p(i(e.pack.toggleRootTheme),1)]),_:1},8,["onClick"])],64)}var ve=K(Q,[["render",W]]);export{ve as default};