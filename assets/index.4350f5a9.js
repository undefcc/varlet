var N=Object.defineProperty,j=Object.defineProperties;var E=Object.getOwnPropertyDescriptors;var w=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var F=(e,a,n)=>a in e?N(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n,u=(e,a)=>{for(var n in a||(a={}))I.call(a,n)&&F(e,n,a[n]);if(w)for(var n of w(a))V.call(a,n)&&F(e,n,a[n]);return e},v=(e,a)=>j(e,E(a));import{A as z}from"./AppType.934f96e7.js";import{t as m}from"./elements.6395be39.js";import{m as b,t as A}from"./shared.506a394a.js";import{_ as C}from"./elevation.f7de2a7a.js";import{d as $,q as M,b as S,x as L,S as q,$ as G,o as g,c as k,G as H,p as R,n as W,t as o,h as J,e as B,a as l,i as t,j as d,F as K,m as c}from"./vendor.efca09d3.js";import{I as O}from"./index.f0ba8e12.js";import{d as P}from"./index.9b1139e6.js";import{u as Q,a as T,_ as X,b as Y,c as Z}from"./en-US.f8762106.js";import{w as ee,a as ae}from"./utils.5a4067e3.js";const te={inset:{type:[Boolean,Number,String],default:!1},vertical:{type:Boolean,default:!1},description:{type:String},margin:{type:String},dashed:{type:Boolean,default:!1}};const ne=$({name:"VarDivider",props:te,setup(e,{slots:a}){const n=M({withText:!1}),i=S(()=>b(e.inset)?e.inset:!0),f=S(()=>{const{inset:s,vertical:r,margin:h}=e,x={margin:h};if(b(s)||s===0)return u({},x);const y=A(s),D=Math.abs(y)+(s+"").replace(y+"","");return r?v(u({},x),{height:`calc(80% - ${m(D)})`}):v(u({},x),{width:`calc(100% - ${m(D)})`,left:y>0?m(D):m(0)})}),p=()=>{var s;n.withText=Boolean((s=a.default)==null?void 0:s.call(a).length)||Boolean(e.description)};return L(()=>{p()}),q(()=>{p()}),v(u({},G(n)),{style:f,isInset:i})}}),se={key:0,class:"var-divider__text"};function ie(e,a,n,i,f,p){return g(),k("div",{class:R(["var-divider var--box",[e.vertical?"var-divider--vertical":null,e.withText?"var-divider--with-text":null,e.isInset?"var-divider--inset":null,e.dashed?"var-divider--dashed":null]]),style:W(e.style)},[H(e.$slots,"default",{},()=>[e.description?(g(),k("span",se,o(e.description),1)):J("v-if",!0)])],6)}var _=C(ne,[["render",ie]]);_.install=function(e){e.component(_.name,_)};var re={basicUsage:"\u57FA\u672C\u4F7F\u7528",dashed:"\u865A\u7EBF",inset:"\u7F29\u8FDB",vertical:"\u5782\u76F4\u5206\u5272\u7EBF",text:"\u6587\u5B57",withDesc:"\u5E26\u6709\u6587\u5B57\u63CF\u8FF0\u7684\u5206\u5272\u7EBF",withDescText:"\u6587\u5B57\u63CF\u8FF0",custom:"\u81EA\u5B9A\u4E49"},oe={basicUsage:"Basic Usage",dashed:"Dashed Divider",inset:"Inset Divider",vertical:"Vertical Divider",text:"Text",withDesc:"The Divider with description",withDescText:"Description",custom:"Custom"};const{add:U,use:le,pack:de,packs:we,merge:Fe}=Q(),ce=e=>{Z(e),le(e)};T("zh-CN",X);T("en-US",Y);U("zh-CN",re);U("en-US",oe);const ue={name:"DividerExample",components:{VarIcon:O,VarDivider:_,AppType:z},setup(){return ee(ce),ae(P),{pack:de}}},pe={class:"vertical-divider-wrapper"};function ve(e,a,n,i,f,p){const s=B("app-type"),r=B("var-divider"),h=B("var-icon");return g(),k(K,null,[l("div",null,[t(s,null,{default:d(()=>[c(o(i.pack.basicUsage),1)]),_:1}),t(r)]),l("div",null,[t(s,null,{default:d(()=>[c(o(i.pack.dashed),1)]),_:1}),t(r,{dashed:""})]),l("div",null,[t(s,null,{default:d(()=>[c(o(i.pack.inset),1)]),_:1}),t(r,{inset:""}),t(r,{inset:36,margin:"36px 0"}),t(r,{inset:"-36px"})]),l("div",null,[t(s,null,{default:d(()=>[c(o(i.pack.vertical),1)]),_:1}),l("div",pe,[l("span",null,o(i.pack.text),1),t(r,{vertical:""}),l("span",null,o(i.pack.text),1),t(r,{vertical:""}),l("span",null,o(i.pack.text),1)])]),l("div",null,[t(s,null,{default:d(()=>[c(o(i.pack.withDesc),1)]),_:1}),t(r,{description:i.pack.withDescText},null,8,["description"])]),l("div",null,[t(s,null,{default:d(()=>[c(o(i.pack.custom),1)]),_:1}),t(r,null,{default:d(()=>[t(h,{name:"heart-outline",style:{margin:"0 16px",color:"rgb(41, 121, 255)"}})]),_:1})])],64)}var be=C(ue,[["render",ve],["__scopeId","data-v-4134a172"]]);export{be as default};