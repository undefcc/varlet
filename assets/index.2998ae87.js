import{R as v}from"./index.ebf8ba42.js";import{t as u}from"./elements.50c32b0e.js";import{c as f}from"./components.c8d2cf33.js";import{d as m,_ as c,ab as y,k as g,h as i,i as t,J as r,H as s,l as n,K as S,N as a}from"./elevation.0a6066f5.js";function k(e){return["fill","contain","cover","none","scale-down"].includes(e)}const C={src:{type:String},fit:{type:String,validator:k,default:"cover"},height:{type:[String,Number]},alt:{type:String},title:{type:String},subtitle:{type:String},description:{type:String},elevation:{type:[Number,String]},ripple:{type:Boolean,default:!1},onClick:{type:Function}};const{n:$,classes:b}=f("card"),h=m({name:"VarCard",directives:{Ripple:v},props:C,setup(){return{n:$,classes:b,toSizeUnit:u}}}),N=["src","alt"];function z(e,l,B,D,V,w){const p=y("ripple");return g((i(),t("div",{class:s(e.classes(e.n(),[e.elevation,`var-elevation--${e.elevation}`,"var-elevation--2"])),onClick:l[0]||(l[0]=(...d)=>e.onClick&&e.onClick(...d))},[r(e.$slots,"image",{},()=>[e.src?(i(),t("img",{key:0,class:s(e.n("image")),style:S({objectFit:e.fit,height:e.toSizeUnit(e.height)}),src:e.src,alt:e.alt},null,14,N)):n("v-if",!0)]),r(e.$slots,"title",{},()=>[e.title?(i(),t("div",{key:0,class:s(e.n("title"))},a(e.title),3)):n("v-if",!0)]),r(e.$slots,"subtitle",{},()=>[e.subtitle?(i(),t("div",{key:0,class:s(e.n("subtitle"))},a(e.subtitle),3)):n("v-if",!0)]),r(e.$slots,"description",{},()=>[e.description?(i(),t("div",{key:0,class:s(e.n("description"))},a(e.description),3)):n("v-if",!0)]),e.$slots.extra?(i(),t("div",{key:0,class:s(e.n("footer"))},[r(e.$slots,"extra")],2)):n("v-if",!0)],2)),[[p,{disabled:!e.ripple}]])}var o=c(h,[["render",z]]);o.install=function(e){e.component(o.name,o)};export{o as C};