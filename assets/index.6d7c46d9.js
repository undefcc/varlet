import{b as p,f as d}from"./components.8013e964.js";import{S as l,a as m}from"./provide.f33f1c50.js";import{_ as c}from"./elevation.f7de2a7a.js";import{d as v,r as f,o as _,c as u,G as w,n as S}from"./vendor.efca09d3.js";function I(){const{bindParent:e,parentProvider:t}=p(l),{index:s}=d(m);if(!e||!t||!s)throw Error("<var-swipe-item/> must in <var-swipe/>");return{index:s,swipe:t,bindSwipe:e}}const E=v({name:"VarSwipeItem",setup(){const e=f(0),{swipe:t,bindSwipe:s,index:n}=I(),{size:a,vertical:i}=t;return s({index:n,setTranslate:o=>{e.value=o}}),{size:a,vertical:i,translate:e}}});function P(e,t,s,n,a,i){return _(),u("div",{class:"var-swipe-item",style:S({width:e.vertical?void 0:`${e.size}px`,height:e.vertical?`${e.size}px`:void 0,transform:`translate${e.vertical?"Y":"X"}(${e.translate}px)`})},[w(e.$slots,"default")],4)}var r=c(E,[["render",P]]);r.install=function(e){e.component(r.name,r)};export{r as S};