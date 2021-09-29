import{l as _}from"./elements.0f1b5e0a.js";import{q as V,M as w,p as S,r as R,G as g,d as l,o as U,c as E,h as r,w as m,F as N,l as p,t as u}from"./vendor.cfbfc887.js";import{R as C}from"./index.3e84a6f0.js";import{S as b}from"./index.7289c626.js";import{B as k}from"./index.d02dece8.js";import{A as P}from"./AppType.c025e0b4.js";import{c as v}from"./index.20a388b7.js";import{u as B,a as T,_ as z,b as D,c as A,w as L,d as O}from"./en-US.f8ac739f.js";import{_ as q}from"./IconSfc.29808136.js";import"./shared.5973ad73.js";import"./index.a43e0611.js";import"./provide.6a63a4bb.js";import"./components.092cc01a.js";import"./index.5c577cbc.js";const n=V({name:"VarStyleProvider",props:{styleVars:{type:Object,default:()=>({})}},setup(o,{slots:t}){return()=>{var a;return w("div",{class:"var-style-provider",style:_(o.styleVars)},(a=t.default)==null?void 0:a.call(t))}}});function c(o={}){const t=_(o);Object.entries(t).forEach(([a,e])=>document.documentElement.style.setProperty(a,e))}c.Component=n;n.install=function(o){o.component(n.name,n)};c.install=function(o){o.component(n.name,n)};var G={componentCall:"\u7EC4\u4EF6\u8C03\u7528",functionCall:"\u51FD\u6570\u8C03\u7528",toggleTheme:"\u5207\u6362\u6837\u5F0F\u53D8\u91CF",toggleRootTheme:"\u5207\u6362\u6839\u8282\u70B9\u6837\u5F0F\u53D8\u91CF"},I={componentCall:"Component Call",functionCall:"Function Call",toggleTheme:"Toggle Theme",toggleRootTheme:"Toggle Root Theme"};const{add:x,use:M,pack:H,packs:me,merge:ie}=B(),J=o=>{A(o),M(o)};T("zh-CN",z);T("en-US",D);x("zh-CN",G);x("en-US",I);const K={name:"StyleProviderExample",components:{[c.Component.name]:c.Component,[C.name]:C,[b.name]:b,[k.name]:k,AppType:P},setup(){const o=S({score:5,license:!0}),t={"--theme-name":"primary","--rate-primary-color":"var(--color-primary)","--button-primary-color":"var(--color-primary)","--switch-handle-active-background":"var(--color-primary)","--switch-track-active-background":"var(--color-primary)"},a={"--theme-name":"success","--rate-primary-color":"var(--color-success)","--button-primary-color":"var(--color-success)","--switch-handle-active-background":"var(--color-success)","--switch-track-active-background":"var(--color-success)"},e=R(t),y=()=>{e.value=e.value["--theme-name"]==="primary"?a:t},f=()=>{const s=window.getComputedStyle(document.documentElement).getPropertyValue("--color-primary").trim();c({"--color-primary":s==="#3a7afe"?"#000":"#3a7afe"})};L(J);const i=v.touchmoveForbid;return O(s=>{s==="pc"&&(v.touchmoveForbid=!1)}),g(()=>{v.touchmoveForbid=i}),g(()=>{c({"--color-primary":"#3a7afe"})}),{pack:H,state:o,styleVars:e,toggleTheme:y,toggleRootTheme:f}}};function Q(o,t,a,e,y,f){const i=l("app-type"),s=l("var-rate"),j=l("var-switch"),h=l("var-button"),F=l("var-style-provider");return U(),E(N,null,[r(i,null,{default:m(()=>[p(u(e.pack.componentCall),1)]),_:1}),r(F,{"style-vars":e.styleVars},{default:m(()=>[r(s,{modelValue:e.state.score,"onUpdate:modelValue":t[0]||(t[0]=d=>e.state.score=d)},null,8,["modelValue"]),r(j,{modelValue:e.state.license,"onUpdate:modelValue":t[1]||(t[1]=d=>e.state.license=d)},null,8,["modelValue"]),r(h,{style:{"margin-top":"10px"},type:"primary",block:"",onClick:e.toggleTheme},{default:m(()=>[p(u(e.pack.toggleTheme),1)]),_:1},8,["onClick"])]),_:1},8,["style-vars"]),r(i,null,{default:m(()=>[p(u(e.pack.functionCall),1)]),_:1}),r(h,{type:"primary",block:"",onClick:e.toggleRootTheme},{default:m(()=>[p(u(e.pack.toggleRootTheme),1)]),_:1},8,["onClick"])],64)}var pe=q(K,[["render",Q]]);export{pe as default};