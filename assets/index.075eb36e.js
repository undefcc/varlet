import{D as m}from"./index.beb036ce.js";import{B as r}from"./index.9fd58e7c.js";import{I as S}from"./index.e289ac8a.js";import{S as i}from"./index.0bae5fcb.js";import{C as g}from"./index.42a3f7dc.js";import{A as w}from"./AppType.042e062b.js";import{d as x}from"./index.5d153c96.js";import{u as N,a as h,_ as T,b as $,c as z}from"./en-US.fc3ce502.js";import{a as I,b as M}from"./utils.ffe55eac.js";import{_ as P,r as V,at as H,f as L,h as R,n as a,ag as e,N as t,au as y,F as J,J as l,K as n}from"./vue-router.esm-bundler.c9213159.js";import"./index.4ab1c0b7.js";import"./lock.435ac84b.js";import"./index.58b947ca.js";import"./zIndex.1d90dfeb.js";import"./components.78cffb68.js";/* empty css               */import"./index.8fb9de0f.js";import"./elements.7f2ac399.js";import"./index.f8843d67.js";var K={functionCall:"\u51FD\u6570\u8C03\u7528",basicUsage:"\u57FA\u672C\u4F7F\u7528",modifyTitle:"\u4FEE\u6539\u6807\u9898",hideButton:"\u9690\u85CF\u6309\u94AE",handleUserBehavior:"\u5904\u7406\u7528\u6237\u884C\u4E3A",asyncClose:"\u5F02\u6B65\u5173\u95ED",componentCall:"\u7EC4\u4EF6\u8C03\u7528",title:"\u5170\u4EAD\u5E8F",message:"\u5170\u4EAD\u4E34\u5E16 \u884C\u4E66\u5982\u884C\u4E91\u6D41\u6C34",customSlots:"\u81EA\u5B9A\u4E49\u63D2\u69FD",asyncCloseProgress:"\u6B63\u5728\u5F02\u6B65\u5173\u95ED"},W={functionCall:"Function Call",basicUsage:"Basic Usage",modifyTitle:"Modify Title",hideButton:"Hide Button",handleUserBehavior:"Handle User Behavior",asyncClose:"Asynchronous closing",componentCall:"Component Call",title:"Beat It",message:"Don't Wanna See No Blood, Don't Be A Macho Man",customSlots:"Custom Slots",asyncCloseProgress:"Asynchronous shutdown in progress"};const{add:_,use:j,pack:o,packs:de,merge:Ce}=N(),q=d=>{z(d),j(d)};h("zh-CN",T);h("en-US",$);_("zh-CN",K);_("en-US",W);const G={setup(d){const C=m.Component,E=V({show:!1,show1:!1,show2:!1}),{show:c,show1:p,show2:f}=H(E),v={confirm:()=>i.success("confirm"),cancel:()=>i.error("cancel"),close:()=>i.info("close")},U=()=>m({message:o.value.message}),b=async()=>v[await m(o.value.message)](),D=()=>{m({title:o.value.title,message:o.value.message})},F=()=>{m({message:o.value.message,confirmButton:!1,cancelButton:!1})},B=(k,s)=>{i.loading(o.value.asyncCloseProgress),setTimeout(()=>{v[k](),s()},1e3)},A=()=>{m({message:o.value.message,onBeforeClose:B})};return I(q),M(x),(k,s)=>(L(),R(J,null,[a(e(w),null,{default:t(()=>[l(n(e(o).functionCall),1)]),_:1}),a(e(r),{type:"primary",block:"",onClick:U},{default:t(()=>[l(n(e(o).basicUsage),1)]),_:1}),a(e(r),{type:"primary",block:"",onClick:D},{default:t(()=>[l(n(e(o).modifyTitle),1)]),_:1}),a(e(r),{type:"primary",block:"",onClick:F},{default:t(()=>[l(n(e(o).hideButton),1)]),_:1}),a(e(r),{type:"primary",block:"",onClick:b},{default:t(()=>[l(n(e(o).handleUserBehavior),1)]),_:1}),a(e(r),{type:"primary",block:"",onClick:A},{default:t(()=>[l(n(e(o).asyncClose),1)]),_:1}),a(e(w),null,{default:t(()=>[l(n(e(o).componentCall),1)]),_:1}),a(e(r),{type:"warning",block:"",onClick:s[0]||(s[0]=u=>c.value=!0)},{default:t(()=>[l(n(e(o).basicUsage),1)]),_:1}),a(e(C),{show:e(c),"onUpdate:show":s[1]||(s[1]=u=>y(c)?c.value=u:null),title:e(o).title,message:e(o).message,onConfirm:s[2]||(s[2]=()=>e(i).success("confirm")),onCancel:s[3]||(s[3]=()=>e(i).error("cancel")),onClosed:s[4]||(s[4]=()=>e(i).info("closed"))},null,8,["show","title","message"]),a(e(r),{type:"warning",block:"",onClick:s[5]||(s[5]=u=>p.value=!0)},{default:t(()=>[l(n(e(o).asyncClose),1)]),_:1}),a(e(C),{show:e(p),"onUpdate:show":s[6]||(s[6]=u=>y(p)?p.value=u:null),title:e(o).title,message:e(o).message,onBeforeClose:B},null,8,["show","title","message"]),a(e(r),{type:"warning",block:"",onClick:s[7]||(s[7]=u=>f.value=!0)},{default:t(()=>[l(n(e(o).customSlots),1)]),_:1}),a(e(C),{show:e(f),"onUpdate:show":s[8]||(s[8]=u=>y(f)?f.value=u:null)},{title:t(()=>[a(e(S),{name:"information",color:"#2979ff"})]),default:t(()=>[a(e(g),null,{default:t(()=>[l(n(e(o).message),1)]),_:1}),a(e(g),null,{default:t(()=>[l(n(e(o).message),1)]),_:1}),a(e(g),null,{default:t(()=>[l(n(e(o).message),1)]),_:1})]),_:1},8,["show"])],64))}};var ge=P(G,[["__scopeId","data-v-4a422242"]]);export{ge as default};