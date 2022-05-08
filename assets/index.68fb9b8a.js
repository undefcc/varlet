import{b as B,i as C,c as H}from"./elements.50c32b0e.js";import{t as I,c as R,a as M}from"./components.c8d2cf33.js";import{d as D,a as o,b as p,w as P,E as V,G as A,e as G,D as J,_ as K,h as O,i as U,p as j,J as q,H as $,K as k}from"./elevation.0a6066f5.js";const Q={offsetTop:{type:[String,Number],default:0},zIndex:{type:[String,Number],default:10},cssMode:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},onScroll:{type:Function}};const{n:X,classes:Y}=R("sticky"),Z=D({name:"VarSticky",props:Q,setup(e){const n=o(null),i=o(null),a=o(!1),d=o("0px"),r=o("0px"),v=o("auto"),m=o("auto"),b=o("auto"),h=o("auto"),E=p(()=>!e.disabled&&e.cssMode),F=p(()=>!e.disabled&&a.value),l=p(()=>B(e.offsetTop));let t;const s=()=>{const{onScroll:w,cssMode:W,disabled:L}=e;if(L)return;let f=0;if(t!==window){const{top:z}=t.getBoundingClientRect();f=z}const g=i.value,c=n.value,{top:T,left:N}=c.getBoundingClientRect(),x=T-f;x<=l.value?(W||(v.value=`${c.offsetWidth}px`,m.value=`${c.offsetHeight}px`,d.value=`${f+l.value}px`,r.value=`${N}px`,b.value=`${g.offsetWidth}px`,h.value=`${g.offsetHeight}px`,a.value=!0),M(w,l.value,!0)):(a.value=!1,M(w,x,!1))},y=async()=>{await C(),t=H(n.value),t!==window&&t.addEventListener("scroll",s),window.addEventListener("scroll",s),s()},S=()=>{t!==window&&t.removeEventListener("scroll",s),window.removeEventListener("scroll",s)};return P(()=>e.disabled,s),V(y),A(S),G(y),J(S),{n:X,classes:Y,stickyEl:n,wrapperEl:i,isFixed:a,offsetTop:l,fixedTop:d,fixedLeft:r,fixedWidth:v,fixedHeight:m,fixedWrapperWidth:b,fixedWrapperHeight:h,enableCSSMode:E,enableFixedMode:F,toNumber:I}}});function _(e,n,i,a,d,r){return O(),U("div",{class:$(e.classes(e.n(),[e.enableCSSMode,e.n("--css-mode")])),ref:"stickyEl",style:k({zIndex:e.toNumber(e.zIndex),top:e.enableCSSMode?`${e.offsetTop}px`:void 0,width:e.enableFixedMode?e.fixedWidth:void 0,height:e.enableFixedMode?e.fixedHeight:void 0})},[j("div",{class:$(e.n("wrapper")),ref:"wrapperEl",style:k({zIndex:e.toNumber(e.zIndex),position:e.enableFixedMode?"fixed":void 0,width:e.enableFixedMode?e.fixedWrapperWidth:void 0,height:e.enableFixedMode?e.fixedWrapperHeight:void 0,left:e.enableFixedMode?e.fixedLeft:void 0,top:e.enableFixedMode?e.fixedTop:void 0})},[q(e.$slots,"default")],6)],6)}var u=K(Z,[["render",_]]);u.install=function(e){e.component(u.name,u)};export{u as S,Q as p};