import{t as i}from"./elements.579153f5.js";import{c as m}from"./components.cd8ba2fd.js";import{_ as c}from"./elevation.46d11dfe.js";import{d as p,o,c as t,a as n,p as a,n as d,G as r,h as f}from"./vendor.4fe81855.js";import{u as h,a as l,_ as v,b,c as B}from"./en-US.307522bf.js";const{n:C,classes:N}=m("table"),y=p({name:"VarTable",props:{fullWidth:{type:[Number,String],default:"100%"}},setup(){return{toSizeUnit:i,n:C,classes:N}}});function S(e,g,z,F,k,D){return o(),t("div",{class:a(e.classes(e.n(),"var-elevation--1 var--box"))},[n("div",{class:a(e.n("main"))},[n("table",{class:a(e.n("table")),style:d({width:e.toSizeUnit(e.fullWidth)})},[r(e.$slots,"default")],6)],2),e.$slots.footer?(o(),t("div",{key:0,class:a(e.n("footer"))},[r(e.$slots,"footer")],2)):f("v-if",!0)],2)}var s=c(y,[["render",S]]);s.install=function(e){e.component(s.name,s)};var U={basicUsage:"\u57FA\u672C\u4F7F\u7528",slot:"\u5C3E\u90E8\u63D2\u69FD",math:"\u6570\u5B66",english:"\u82F1\u8BED",tom:"\u706B\u732B\u6851",jerry:"\u8017\u5B50\u541B",name:"\u59D3\u540D"},_={basicUsage:"Basic Usage",slot:"Footer Slots",math:"Math",english:"English",frontend:"Frontend",tom:"Tom",jerry:"Jerry",name:"Name"};const{add:u,use:$,pack:w,packs:A,merge:G}=h(),J=e=>{B(e),$(e)};l("zh-CN",v);l("en-US",b);u("zh-CN",U);u("en-US",_);export{s as T,w as p,J as u};