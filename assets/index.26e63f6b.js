import{I as $}from"./index.e289ac8a.js";import{F as I,u as j}from"./provide.c2fee570.js";import{R as W}from"./index.8fb9de0f.js";import{j as Y,l as q,h as J,m as L,d as Q,a as c,c as Z}from"./components.78cffb68.js";import{d as _,a as E,e as O,w as x,_ as ee,l as S,aa as ae,f as K,h as N,D as A,B as ne,E as d,H as oe,G as C,n as b,W as se}from"./vue-router.esm-bundler.c9213159.js";const D=Symbol("CHECKBOX_GROUP_BIND_CHECKBOX_KEY"),P=Symbol("CHECKBOX_GROUP_COUNT_CHECKBOX_KEY");function Ce(){const{bindChildren:e,childProviders:o}=Y(D),{length:r}=q(P);return{length:r,checkboxes:o,bindCheckboxes:e}}const le={modelValue:{type:[String,Number,Boolean,Object,Array],default:!1},checkedValue:{type:[String,Number,Boolean,Object,Array],default:!0},uncheckedValue:{type:[String,Number,Boolean,Object,Array],default:!1},checkedColor:{type:String},uncheckedColor:{type:String},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},iconSize:{type:[String,Number]},ripple:{type:Boolean,default:!0},validateTrigger:{type:Array,default:["onChange"]},rules:{type:Array},onClick:{type:Function},onChange:{type:Function},"onUpdate:modelValue":{type:Function}};function re(){const{bindParent:e,parentProvider:o}=J(D),{index:r}=L(P);return{index:r,checkboxGroup:o,bindCheckboxGroup:e}}const{n:ie,classes:ce}=Z("checkbox"),de=_({name:"VarCheckbox",directives:{Ripple:W},components:{VarIcon:$,VarFormDetails:I},props:le,setup(e){const o=E(!1),r=O(()=>o.value===e.checkedValue),y=O(()=>e.checkedValue),t=E(!1),{checkboxGroup:s,bindCheckboxGroup:u}=re(),{form:a,bindForm:m}=j(),{errorMessage:k,validateWithTrigger:R,validate:U,resetValidation:v}=Q(),w=n=>{se(()=>{const{validateTrigger:l,rules:i,modelValue:h}=e;R(l,n,i,h)})},p=n=>{o.value=n;const{checkedValue:l,onChange:i}=e;c(e["onUpdate:modelValue"],o.value),c(i,o.value),w("onChange"),n===l?s==null||s.onChecked(l):s==null||s.onUnchecked(l)},z=n=>{const{disabled:l,readonly:i,checkedValue:h,uncheckedValue:X,onClick:G}=e;if((a==null?void 0:a.disabled.value)||l||(c(G,n),(a==null?void 0:a.readonly.value)||i))return;t.value=!0;const T=s?s.checkedCount.value>=Number(s.max.value):!1;!r.value&&T||p(r.value?X:h)},H=n=>{const{checkedValue:l,uncheckedValue:i}=e;o.value=n.includes(l)?l:i},F=()=>{t.value=!1},g=()=>{c(e["onUpdate:modelValue"],e.uncheckedValue),v()},M=n=>{const{checkedValue:l,uncheckedValue:i}=e;![l,i].includes(n)&&(n=r.value?i:l),p(n)},V=()=>U(e.rules,e.modelValue);x(()=>e.modelValue,n=>{o.value=n},{immediate:!0});const B={checkedValue:y,checked:r,sync:H,validate:V,resetValidation:v,reset:g,resetWithAnimation:F};return c(u,B),c(m,B),{withAnimation:t,checked:r,errorMessage:k,checkboxGroupErrorMessage:s==null?void 0:s.errorMessage,formDisabled:a==null?void 0:a.disabled,formReadonly:a==null?void 0:a.readonly,n:ie,classes:ce,handleClick:z,toggle:M,reset:g,validate:V,resetValidation:v}}});function te(e,o,r,y,t,s){const u=S("var-icon"),a=S("var-form-details"),m=ae("ripple");return K(),N("div",{class:d(e.n("wrap")),onClick:o[0]||(o[0]=(...k)=>e.handleClick&&e.handleClick(...k))},[A("div",{class:d(e.n())},[ne((K(),N("div",{class:d(e.classes(e.n("action"),[e.checked,e.n("--checked"),e.n("--unchecked")],[e.errorMessage||e.checkboxGroupErrorMessage,e.n("--error")],[e.formDisabled||e.disabled,e.n("--disabled")])),style:oe({color:e.checked?e.checkedColor:e.uncheckedColor})},[e.checked?C(e.$slots,"checked-icon",{key:0},()=>[b(u,{class:d(e.classes(e.n("icon"),[e.withAnimation,e.n("--with-animation")])),name:"checkbox-marked",size:e.iconSize,"var-checkbox-cover":""},null,8,["class","size"])]):C(e.$slots,"unchecked-icon",{key:1},()=>[b(u,{class:d(e.classes(e.n("icon"),[e.withAnimation,e.n("--with-animation")])),name:"checkbox-blank-outline",size:e.iconSize,"var-checkbox-cover":""},null,8,["class","size"])])],6)),[[m,{disabled:e.formReadonly||e.readonly||e.formDisabled||e.disabled||!e.ripple}]]),A("div",{class:d(e.classes(e.n("text"),[e.errorMessage||e.checkboxGroupErrorMessage,e.n("--error")],[e.formDisabled||e.disabled,e.n("--disabled")]))},[C(e.$slots,"default")],2)],2),b(a,{"error-message":e.errorMessage},null,8,["error-message"])],2)}var f=ee(de,[["render",te]]);f.install=function(e){e.component(f.name,f)};export{f as C,Ce as u};