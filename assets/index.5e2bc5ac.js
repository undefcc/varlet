import{S as p}from"./index.fc66e389.js";import{b as _,f as u}from"./components.d1abe7d6.js";import{T as d,a as b}from"./provide.ec093b3b.js";import{_ as f}from"./elevation.6148c8fa.js";import{d as l,r as c,b as v,e as I,o as T,l as S,j as C,G as B,h as E,p as j}from"./vendor.8243c41e.js";function w(){const{parentProvider:e,bindParent:a}=_(d),{index:t}=u(b);if(!e||!a||!t)throw Error("<var-tab-item/> must in <var-tabs-items/>");return{index:t,tabsItems:e,bindTabsItems:a}}const x={name:{type:[String,Number]}};const P=l({name:"VarTabItem",components:{VarSwipeItem:p},props:x,setup(e){const a=c(!1),t=c(!1),r=v(()=>e.name),{index:n,bindTabsItems:o}=w();return o({index:n,name:r,setCurrent:m=>{!t.value&&m&&(t.value=!0),a.value=m}}),{current:a,initSlot:t}}});function A(e,a,t,r,n,o){const i=I("var-swipe-item");return T(),S(i,{class:j(["var-tab-item",[!e.current&&"var-tab-item--inactive"]]),"var-tab-item-cover":""},{default:C(()=>[e.initSlot?B(e.$slots,"default",{key:0}):E("v-if",!0)]),_:3},8,["class"])}var s=f(P,[["render",A]]);s.install=function(e){e.component(s.name,s)};export{s as T};