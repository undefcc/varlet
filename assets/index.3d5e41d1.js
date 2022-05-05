import{I as w}from"./index.e289ac8a.js";import{F as M,u as T}from"./provide.c2fee570.js";import{R as E}from"./index.8fb9de0f.js";import{d as P,a as p,t as c,c as A}from"./components.78cffb68.js";import{t as y}from"./elements.7f2ac399.js";import{d as H,_ as L,W as X,l as I,aa as j,f as v,h as b,D as q,F as G,ac as J,B as K,H as k,E as C,n as z}from"./vue-router.esm-bundler.c9213159.js";const O={modelValue:{type:[String,Number],default:0},count:{type:[String,Number],default:5},color:{type:String},icon:{type:String,default:"star"},emptyColor:{type:String},emptyIcon:{type:String,default:"star-outline"},size:{type:[String,Number],default:"24"},gap:{type:[String,Number],default:"2"},namespace:{type:String},half:{type:Boolean,default:!1},halfIcon:{type:String,default:"star-half-full"},disabled:{type:Boolean,default:!1},disabledColor:{type:String},readonly:{type:Boolean,default:!1},ripple:{type:Boolean,default:!0},rules:{type:Array},onChange:{type:Function},"onUpdate:modelValue":{type:Function}};const{n:u}=A("rate"),Q=H({name:"VarRate",components:{VarIcon:w,VarFormDetails:M},directives:{Ripple:E},props:O,setup(e){const{form:a,bindForm:V}=T(),{errorMessage:f,validateWithTrigger:N,validate:R,resetValidation:i}=P(),g=t=>{const{count:o,size:n,gap:l}=e;return{color:d(t).color,marginRight:t!==c(o)?y(l):0,width:y(n),height:y(n),borderRadius:"50%"}},h=t=>{const{type:o,color:n}=d(t);return{[u("content")]:!0,[u("--disabled")]:(a==null?void 0:a.disabled.value)||e.disabled,[u("--error")]:f.value,[u("--primary")]:o!=="empty"&&!n}},r=t=>{const{type:o}=d(t),{icon:n,halfIcon:l,emptyIcon:s}=e;return o==="full"?n:o==="half"?l:s},d=t=>{const{modelValue:o,disabled:n,disabledColor:l,color:s,half:W,emptyColor:$}=e;let m;return n||(a==null?void 0:a.disabled.value)?m=l:s&&(m=s),t<=c(o)?{type:"full",score:t,color:m}:W&&t<=c(o)+.5?{type:"half",score:t,color:m}:{type:"empty",score:t,color:n||(a==null?void 0:a.disabled.value)?l:$}},B=(t,o)=>{if(e.half){const{offsetWidth:n}=o.target;o.offsetX<=Math.floor(n/2)&&(t-=.5)}p(e["onUpdate:modelValue"],t)},_=()=>R(e.rules,c(e.modelValue)),D=()=>X(()=>N(["onChange"],"onChange",e.rules,e.modelValue)),U=(t,o)=>{const{readonly:n,disabled:l,onChange:s}=e;n||l||(a==null?void 0:a.disabled.value)||(a==null?void 0:a.readonly.value)||(B(t,o),p(s,t),D())},F=()=>{p(e["onUpdate:modelValue"],0),i()};return p(V,{reset:F,validate:_,resetValidation:i}),{errorMessage:f,formDisabled:a==null?void 0:a.disabled,formReadonly:a==null?void 0:a.readonly,getStyle:g,getClass:h,getIconName:r,handleClick:U,reset:F,validate:_,resetValidation:i,toSizeUnit:y,toNumber:c,n:u}}}),Y=["onClick"];function Z(e,a,V,f,N,R){const i=I("var-icon"),g=I("var-form-details"),h=j("ripple");return v(),b("div",{class:C(e.n("warp"))},[q("div",{class:C(e.n())},[(v(!0),b(G,null,J(e.toNumber(e.count),r=>K((v(),b("div",{key:r,style:k(e.getStyle(r)),class:C(e.getClass(r)),onClick:d=>e.handleClick(r,d)},[z(i,{transition:0,namespace:e.namespace,name:e.getIconName(r),style:k({fontSize:e.toSizeUnit(e.size)})},null,8,["namespace","name","style"])],14,Y)),[[h,{disabled:e.formReadonly||e.readonly||e.formDisabled||e.disabled||!e.ripple}]])),128))],2),z(g,{"error-message":e.errorMessage},null,8,["error-message"])],2)}var S=L(Q,[["render",Z]]);S.install=function(e){e.component(S.name,S)};export{S as R};