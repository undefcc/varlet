import{e,f as r}from"./components.7c010433.js";import{S as a,a as t}from"./provide.1671a24a.js";import{_ as s}from"./IconSfc.7d4b9349.js";import{q as i,r as n,o,c as p,O as l,n as c}from"./vendor.613212a8.js";var m=s(i({name:"VarSwipeItem",setup(){const s=n(0),{swipe:i,bindSwipe:o,index:p}=function(){const{bindParent:s,parentProvider:i}=e(a),{index:n}=r(t);if(!s||!i||!n)throw Error("<var-swipe-item/> must in <var-swipe/>");return{index:n,swipe:i,bindSwipe:s}}(),{size:l,vertical:c}=i;return o({index:p,setTranslate:e=>{s.value=e}}),{size:l,vertical:c,translate:s}}}),[["render",function(e,r,a,t,s,i){return o(),p("div",{class:"var-swipe-item",style:c({width:e.vertical?null:`${e.size}px`,height:e.vertical?`${e.size}px`:null,transform:`translate${e.vertical?"Y":"X"}(${e.translate}px)`})},[l(e.$slots,"default")],4)}]]);m.install=function(e){e.component(m.name,m)};export{m as S};