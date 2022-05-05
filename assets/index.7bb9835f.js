import{b as B,i as C,c as H}from"./elements.7f2ac399.js";import{t as I,c as R,a as M}from"./components.78cffb68.js";import{d as A,a as o,e as p,w as D,z as P,A as V,o as G,y as O,_ as U,f as j,h as q,D as J,G as K,E as $,H as k}from"./vue-router.esm-bundler.c9213159.js";const Q={offsetTop:{type:[String,Number],default:0},zIndex:{type:[String,Number],default:10},cssMode:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},onScroll:{type:Function}};const{n:X,classes:Y}=R("sticky"),Z=A({name:"VarSticky",props:Q,setup(e){const n=o(null),d=o(null),a=o(!1),i=o("0px"),r=o("0px"),v=o("auto"),m=o("auto"),b=o("auto"),h=o("auto"),E=p(()=>!e.disabled&&e.cssMode),F=p(()=>!e.disabled&&a.value),l=p(()=>B(e.offsetTop));let t;const s=()=>{const{onScroll:w,cssMode:W,disabled:L}=e;if(L)return;let f=0;if(t!==window){const{top:N}=t.getBoundingClientRect();f=N}const g=d.value,c=n.value,{top:T,left:z}=c.getBoundingClientRect(),x=T-f;x<=l.value?(W||(v.value=`${c.offsetWidth}px`,m.value=`${c.offsetHeight}px`,i.value=`${f+l.value}px`,r.value=`${z}px`,b.value=`${g.offsetWidth}px`,h.value=`${g.offsetHeight}px`,a.value=!0),M(w,l.value,!0)):(a.value=!1,M(w,x,!1))},y=async()=>{await C(),t=H(n.value),t!==window&&t.addEventListener("scroll",s),window.addEventListener("scroll",s),s()},S=()=>{t!==window&&t.removeEventListener("scroll",s),window.removeEventListener("scroll",s)};return D(()=>e.disabled,s),P(y),V(S),G(y),O(S),{n:X,classes:Y,stickyEl:n,wrapperEl:d,isFixed:a,offsetTop:l,fixedTop:i,fixedLeft:r,fixedWidth:v,fixedHeight:m,fixedWrapperWidth:b,fixedWrapperHeight:h,enableCSSMode:E,enableFixedMode:F,toNumber:I}}});function _(e,n,d,a,i,r){return j(),q("div",{class:$(e.classes(e.n(),[e.enableCSSMode,e.n("--css-mode")])),ref:"stickyEl",style:k({zIndex:e.toNumber(e.zIndex),top:e.enableCSSMode?`${e.offsetTop}px`:void 0,width:e.enableFixedMode?e.fixedWidth:void 0,height:e.enableFixedMode?e.fixedHeight:void 0})},[J("div",{class:$(e.n("wrapper")),ref:"wrapperEl",style:k({zIndex:e.toNumber(e.zIndex),position:e.enableFixedMode?"fixed":void 0,width:e.enableFixedMode?e.fixedWrapperWidth:void 0,height:e.enableFixedMode?e.fixedWrapperHeight:void 0,left:e.enableFixedMode?e.fixedLeft:void 0,top:e.enableFixedMode?e.fixedTop:void 0})},[K(e.$slots,"default")],6)],6)}var u=U(Z,[["render",_]]);u.install=function(e){e.component(u.name,u)};export{u as S,Q as p};