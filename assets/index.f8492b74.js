var E=Object.defineProperty,L=Object.defineProperties;var b=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var v=(e,t,o)=>t in e?E(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,a=(e,t)=>{for(var o in t||(t={}))T.call(t,o)&&v(e,o,t[o]);if(d)for(var o of d(t))g.call(t,o)&&v(e,o,t[o]);return e},l=(e,t)=>L(e,b(t));import{c as h}from"./index.48ee5316.js";import{s as F}from"./elements.92736b4e.js";const m=250;function A(e){const{zIndex:t,position:o}=window.getComputedStyle(e);e.style.overflow="hidden",e.style.overflowX="hidden",e.style.overflowY="hidden",o==="static"&&(e.style.position="relative"),t==="auto"&&(e.style.zIndex="1")}function $(e,t){const{top:o,left:r}=e.getBoundingClientRect(),{clientWidth:i,clientHeight:n}=e,c=Math.sqrt(i**2+n**2)/2,p=c*2,s=t.touches[0].clientX-r,R=t.touches[0].clientY-o,w=(i-c*2)/2,_=(n-c*2)/2,k=s-c,x=R-c;return{x:k,y:x,centerX:w,centerY:_,size:p}}function f(e){const t=this._ripple;if(t.removeRipple(),t.disabled||t.tasker)return;const o=()=>{t.tasker=null;const{x:r,y:i,centerX:n,centerY:c,size:p}=$(this,e),s=document.createElement("div");s.classList.add("var-ripple"),s.style.opacity="0",s.style.transform=`translate(${r}px, ${i}px) scale3d(.3, .3, .3)`,s.style.width=`${p}px`,s.style.height=`${p}px`,t.color&&(s.style.backgroundColor=t.color),s.dataset.createdAt=String(performance.now()),A(this),this.appendChild(s),window.setTimeout(()=>{s.style.transform=`translate(${n}px, ${c}px) scale3d(1, 1, 1)`,s.style.opacity=".25"},20)};t.tasker=window.setTimeout(o,60)}function u(){const e=this._ripple,t=()=>{const o=this.querySelectorAll(".var-ripple");if(!o.length)return;const r=o[o.length-1],i=m-performance.now()+Number(r.dataset.createdAt);setTimeout(()=>{r.style.opacity="0",setTimeout(()=>{var n;return(n=r.parentNode)==null?void 0:n.removeChild(r)},m)},i)};e.tasker?setTimeout(t,60):t()}function y(){const e=this._ripple;!F()||!e.touchmoveForbid||(e.tasker&&window.clearTimeout(e.tasker),e.tasker=null)}function C(e,t){var o,r,i;e._ripple=l(a({tasker:null},(o=t.value)!=null?o:{}),{touchmoveForbid:(i=(r=t.value)==null?void 0:r.touchmoveForbid)!=null?i:h.touchmoveForbid,removeRipple:u.bind(e)}),e.addEventListener("touchstart",f,{passive:!0}),e.addEventListener("touchmove",y,{passive:!0}),e.addEventListener("dragstart",u,{passive:!0}),document.addEventListener("touchend",e._ripple.removeRipple,{passive:!0}),document.addEventListener("touchcancel",e._ripple.removeRipple,{passive:!0})}function I(e){e.removeEventListener("touchstart",f),e.removeEventListener("touchmove",y),e.removeEventListener("dragstart",u),document.removeEventListener("touchend",e._ripple.removeRipple),document.removeEventListener("touchcancel",e._ripple.removeRipple)}function N(e,t){var o,r,i;e._ripple=l(a(a({},e._ripple),(o=t.value)!=null?o:{}),{touchmoveForbid:(i=(r=t.value)==null?void 0:r.touchmoveForbid)!=null?i:h.touchmoveForbid,tasker:null})}const z={mounted:C,unmounted:I,updated:N,install(e){e.directive("ripple",this)}};export{z as R};