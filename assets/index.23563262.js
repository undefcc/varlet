import{j as c,l as d,c as f}from"./components.27c76418.js";import{b as p}from"./elements.f685cff6.js";import{d as m,b as g,w as u,_ as C,h as v,i as _,J as y,H as b,K as O}from"./elevation.ecb899cd.js";function h(e){return["flex-start","flex-end","center","space-between","space-around"].includes(e)}function w(e){return["flex-start","center","flex-end"].includes(e)}const R={gutter:{type:[String,Number],default:0},justify:{type:String,default:"flex-start",validator:h},align:{type:String,default:"flex-start",validator:w},onClick:{type:Function}},N=Symbol("ROW_BIND_COL_KEY"),S=Symbol("ROW_COUNT_COL_KEY");function k(){const{bindChildren:e,childProviders:t}=c(N),{length:n}=d(S);return{length:n,cols:t,bindCols:e}}const{n:E,classes:$}=f("row"),j=m({name:"VarRow",props:R,setup(e){const{cols:t,bindCols:n,length:l}=k(),a=g(()=>p(e.gutter)/2),s=()=>{t.forEach(i=>{i.setPadding({left:a.value,right:a.value})})},o={computePadding:s};return u(()=>l.value,s),u(()=>e.gutter,s),n(o),{n:E,classes:$,average:a}}});function K(e,t,n,l,a,s){return v(),_("div",{class:b(e.classes(e.n(),"var--box")),style:O({justifyContent:e.justify,alignItems:e.align,margin:e.average?`0 -${e.average}px`:void 0}),onClick:t[0]||(t[0]=(...o)=>e.onClick&&e.onClick(...o))},[y(e.$slots,"default")],6)}var r=C(j,[["render",K]]);r.install=function(e){e.component(r.name,r)};export{r as R,N as a,S as b};