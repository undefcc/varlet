import{S as _}from"./index.1d2b7b3e.js";import{u as w}from"./provide.ec093b3b.js";import{_ as I}from"./elevation.6148c8fa.js";import{d as C,r as S,y as p,e as g,o as y,l as T,j,G as x}from"./vendor.8243c41e.js";const $={active:{type:[String,Number],default:0},canSwipe:{type:Boolean,default:!0},loop:{type:Boolean,default:!1},"onUpdate:active":{type:Function}};const B=C({name:"VarTabsItems",components:{VarSwipe:_},props:$,setup(e){const r=S(null),{tabItemList:n,bindTabItem:l,length:u}=w(),m=t=>n.find(({name:a})=>t===a.value),i=t=>n.find(({index:a})=>t===a.value),f=t=>m(t)||i(t),d=t=>{var o;const a=f(t);!a||(n.forEach(({setCurrent:s})=>s(!1)),a.setCurrent(!0),(o=r.value)==null||o.to(a.index.value))},b=t=>{var s,v;const a=n.find(({index:h})=>h.value===t),o=(s=a.name.value)!=null?s:a.index.value;(v=e["onUpdate:active"])==null||v.call(e,o)};return l({}),p(()=>e.active,d),p(()=>u.value,()=>d(e.active)),{swipe:r,handleSwipeChange:b}}});function A(e,r,n,l,u,m){const i=g("var-swipe");return y(),T(i,{class:"var-tabs-items",ref:"swipe",loop:e.loop,touchable:e.canSwipe,indicator:!1,onChange:e.handleSwipeChange},{default:j(()=>[x(e.$slots,"default")]),_:3},8,["loop","touchable","onChange"])}var c=I(B,[["render",A]]);c.install=function(e){e.component(c.name,c)};export{c as T};