import{t as _}from"./elements.92736b4e.js";import{t as b}from"./shared.506a394a.js";import{c as z}from"./components.2481c71b.js";import{_ as h}from"./elevation.229458c1.js";import{d as D,o as i,c as r,p as l,G as B,h as p,n as m,a as c,F as S,k as U,r as k,e as y,i as n,j as t,m as o,t as s}from"./vendor.49f89f0d.js";import{B as E}from"./index.e8e6e97d.js";import{A as M}from"./AppType.6775b756.js";import{d as T}from"./index.9b1139e6.js";import{w as V,a as H}from"./utils.3a4595f4.js";import{u as L,a as w,_ as I,b as R,c as W}from"./en-US.628e0d34.js";import"./index.f8492b74.js";import"./index.48ee5316.js";import"./index.9e43ebc8.js";const Z={loading:{type:Boolean,default:!0},title:{type:Boolean,default:!1},card:{type:Boolean,default:!1},avatar:{type:Boolean,default:!1},fullscreen:{type:Boolean,default:!1},fullscreenZIndex:{type:[Number,String],default:100},titleWidth:{type:[Number,String]},cardHeight:{type:[Number,String]},avatarSize:{type:[Number,String]},rows:{type:[Number,String],default:3},rowsWidth:{type:Array,default:()=>[]}};const{n:j,classes:G}=z("skeleton"),q=D({name:"VarSkeleton",props:Z,setup(){return{n:j,classes:G,toSizeUnit:_,toNumber:b}}});function J(a,f,v,e,A,F){return i(),r("div",{class:l(a.classes("var--box",a.n()))},[a.loading?p("v-if",!0):(i(),r("div",{key:0,class:l(a.n("data"))},[B(a.$slots,"default")],2)),a.loading&&!a.fullscreen?(i(),r("div",{key:1,class:l(a.n("content"))},[a.card?(i(),r("div",{key:0,class:l(a.n("card")),style:m({height:a.toSizeUnit(a.cardHeight)})},[c("div",{class:l(a.n("--animation"))},null,2)],6)):p("v-if",!0),c("div",{class:l(a.n("article"))},[a.avatar?(i(),r("div",{key:0,class:l(a.n("avatar")),style:m({width:a.toSizeUnit(a.avatarSize),height:a.toSizeUnit(a.avatarSize)})},[c("div",{class:l(a.n("--animation"))},null,2)],6)):p("v-if",!0),c("div",{class:l(a.n("section"))},[a.title?(i(),r("div",{key:0,class:l(a.n("title")),style:m({width:a.toSizeUnit(a.titleWidth)})},[c("div",{class:l(a.n("--animation"))},null,2)],6)):p("v-if",!0),(i(!0),r(S,null,U(a.toNumber(a.rows),(d,u)=>(i(),r("div",{class:l(a.n("row")),key:d,style:m({width:a.toSizeUnit(a.rowsWidth[u])})},[c("div",{class:l(a.n("--animation"))},null,2)],6))),128))],2)],2)],2)):p("v-if",!0),a.loading&&a.fullscreen?(i(),r("div",{key:2,class:l(a.n("fullscreen")),style:m({zIndex:a.toNumber(a.fullscreenZIndex)})},[c("div",{class:l(a.n("--animation"))},null,2)],6)):p("v-if",!0)],2)}var g=h(q,[["render",J]]);g.install=function(a){a.component(g.name,g)};var K={basicUsage:"\u57FA\u672C\u4F7F\u7528",displayTitle:"\u663E\u793A\u6807\u9898",customRowsHeight:"\u81EA\u5B9A\u4E49\u6BB5\u843D\u9AD8\u5EA6",displayAvatar:"\u663E\u793A\u5934\u50CF",displayCard:"\u663E\u793A\u5361\u7247",fullscreenMode:"\u5168\u5C4F\u6A21\u5F0F",toggleFullscreenMode:"\u5207\u6362\u5168\u5C4F\u6A21\u5F0F",loadingData:"\u52A0\u8F7D\u7684\u6570\u636E"},O={basicUsage:"Basic Usage",displayTitle:"Display Title",customRowsHeight:"Custom Row Heights",displayAvatar:"Display Avatar",displayCard:"Display Card",fullscreenMode:"Fullscreen Mode",toggleFullscreenMode:"Toggle Fullscreen Mode",loadingData:"Loading Data"};const{add:C,use:P,pack:Q,packs:pa,merge:fa}=L(),X=a=>{W(a),P(a)};w("zh-CN",I);w("en-US",R);C("zh-CN",K);C("en-US",O);const Y={name:"SkeletonExample",components:{VarSkeleton:g,VarButton:E,AppType:M},setup(){const a=k(!0),f=k(!1),v=()=>{f.value=!0,setTimeout(()=>{f.value=!1},2e3)};return V(X),H(T),{pack:Q,loading:a,fullscreenLoading:f,fullscreen:v}}};function $(a,f,v,e,A,F){const d=y("app-type"),u=y("var-skeleton"),N=y("var-button");return i(),r(S,null,[n(d,null,{default:t(()=>[o(s(e.pack.basicUsage),1)]),_:1}),n(u,{loading:e.loading},{default:t(()=>[o(s(e.pack.loadingData),1)]),_:1},8,["loading"]),n(d,null,{default:t(()=>[o(s(e.pack.displayTitle),1)]),_:1}),n(u,{title:"",loading:e.loading},{default:t(()=>[o(s(e.pack.loadingData),1)]),_:1},8,["loading"]),n(d,null,{default:t(()=>[o(s(e.pack.customRowsHeight),1)]),_:1}),n(u,{title:"",rows:3,loading:e.loading,"rows-width":["200px","100px","50px"]},{default:t(()=>[o(s(e.pack.loadingData),1)]),_:1},8,["loading"]),n(d,null,{default:t(()=>[o(s(e.pack.displayAvatar),1)]),_:1}),n(u,{title:"",avatar:"",rows:3,loading:e.loading},{default:t(()=>[o(s(e.pack.loadingData),1)]),_:1},8,["loading"]),n(d,null,{default:t(()=>[o(s(e.pack.displayCard),1)]),_:1}),n(u,{title:"",avatar:"",card:"",rows:3,loading:e.loading},{default:t(()=>[o(s(e.pack.loadingData),1)]),_:1},8,["loading"]),n(d,null,{default:t(()=>[o(s(e.pack.fullscreenMode),1)]),_:1}),n(N,{type:"danger",class:"button",onClick:e.fullscreen},{default:t(()=>[o(s(e.pack.toggleFullscreenMode),1)]),_:1},8,["onClick"]),n(u,{fullscreen:"",loading:e.fullscreenLoading},null,8,["loading"])],64)}var ma=h(Y,[["render",$],["__scopeId","data-v-77792966"]]);export{ma as default};