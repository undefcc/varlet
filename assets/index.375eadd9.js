import{F as L,u as O}from"./provide.d55b06dc.js";import{I as Q}from"./index.8afb1785.js";import{b as f,i as X,t as Y}from"./shared.2d2ec151.js";import{u as Z}from"./components.c996eb06.js";import{_}from"./elevation.c2941a7c.js";import{q as x,r as C,N as ee,b as V,d as N,o as m,c as F,a as u,m as o,B as $,f as B,k as z,n as g,I as ae,t as ne,h as le,z as te}from"./vendor.ea41cd30.js";function oe(e){return["text","password"].includes(e)}const re={modelValue:{type:[String,Number]},type:{type:String,default:"text",validator:oe},textarea:{type:Boolean,default:!1},rows:{type:[String,Number],default:8},placeholder:{type:String},line:{type:Boolean,default:!0},hint:{type:Boolean,default:!0},textColor:{type:String},focusColor:{type:String},blurColor:{type:String},maxlength:{type:[String,Number]},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},resize:{type:Boolean,default:!1},validateTrigger:{type:Array,default:()=>["onInput","onClear"]},rules:{type:Array},onFocus:{type:Function},onBlur:{type:Function},onClick:{type:Function},onClear:{type:Function},onInput:{type:Function},onChange:{type:Function},"onUpdate:modelValue":{type:Function}};const ie=x({name:"VarInput",components:{VarIcon:Q,VarFormDetails:L},props:re,setup(e){const y=C(`var-input-${ee().uid}`),h=C(null),s=C(!1),d=V(()=>X(e.modelValue)),I=V(()=>{const{type:a}=e;return a==="password"?a:d.value?"number":"text"}),p=V(()=>{const{maxlength:a,modelValue:n}=e;return a?f(n)?`0 / ${a}`:`${String(n).length}/${a}`:""}),{bindForm:c,form:l}=O(),{errorMessage:T,validateWithTrigger:j,validate:U,resetValidation:b}=Z(),i=a=>{te(()=>{const{validateTrigger:n,rules:t,modelValue:r}=e;j(n,a,t,r)})},E=()=>{const{hint:a,modelValue:n}=e;if(!a&&!f(n))return"var-input--placeholder-hidden";if(a&&(!f(n)||s.value))return"var-input--placeholder-hint"},S=a=>d.value?Y(a):a,P=a=>{var n;s.value=!0,(n=e.onFocus)==null||n.call(e,a),i("onFocus")},A=a=>{var n;s.value=!1,(n=e.onBlur)==null||n.call(e,a),i("onBlur")},R=a=>{var r,v;const{value:n}=a.target,t=S(n);(r=e["onUpdate:modelValue"])==null||r.call(e,t),(v=e.onInput)==null||v.call(e,t,a),i("onInput")},W=a=>{var t;const{value:n}=a.target;(t=e.onChange)==null||t.call(e,S(n),a),i("onChange")},q=()=>{var M;const{disabled:a,readonly:n,clearable:t,onClear:r}=e;if((l==null?void 0:l.disabled.value)||(l==null?void 0:l.readonly.value)||a||n||!t)return;const v=d.value?0:"";(M=e["onUpdate:modelValue"])==null||M.call(e,v),r==null||r(v),i("onClear")},G=a=>{const{disabled:n,onClick:t}=e;(l==null?void 0:l.disabled.value)||n||(t==null||t(a),i("onClick"))},w=()=>{var a;(a=e["onUpdate:modelValue"])==null||a.call(e,d.value?0:""),b()},D=()=>U(e.rules,e.modelValue),H=()=>{h.value.focus()},J=()=>{h.value.blur()},K={reset:w,validate:D,resetValidation:b};return c==null||c(K),{el:h,type:I,id:y,isFocus:s,errorMessage:T,maxlengthText:p,formDisabled:l==null?void 0:l.disabled,formReadonly:l==null?void 0:l.readonly,isEmpty:f,computePlaceholderState:E,handleFocus:P,handleBlur:A,handleInput:R,handleChange:W,handleClear:q,handleClick:G,validate:D,resetValidation:b,reset:w,focus:H,blur:J}}}),ue={key:0,class:"var-input__autocomplete"},se=["for"];function de(e,y,h,s,d,I){const p=N("var-icon"),c=N("var-form-details");return m(),F("div",{class:o(["var-input var--box",[e.disabled?"var-input--disabled":null]]),onClick:y[0]||(y[0]=(...l)=>e.handleClick&&e.handleClick(...l))},[u("div",{class:o(["var-input__controller",[e.isFocus?"var-input--focus":null,e.errorMessage?"var-input--error":null,e.formDisabled||e.disabled?"var-input--disabled":null]]),style:g({color:e.errorMessage?void 0:e.isFocus?e.focusColor:e.blurColor})},[u("div",{class:o(["var-input__icon",[e.hint?null:"var-input--non-hint"]])},[$(e.$slots,"prepend-icon")],2),u("div",{class:o(["var-input__wrap",[e.hint?null:"var-input--non-hint"]])},[e.type==="password"?(m(),F("input",ue)):B("v-if",!0),(m(),z(ae(e.textarea?"textarea":"input"),{class:o(["var-input__input",[e.formDisabled||e.disabled?"var-input--disabled":null,e.textarea?"var-input--textarea":null,e.errorMessage?"var-input--caret-error":null]]),ref:"el",autocomplete:"new-password",id:e.id,disabled:e.formDisabled||e.disabled||e.formReadonly||e.readonly,type:e.type,value:e.modelValue,maxlength:e.maxlength,rows:e.rows,style:g({color:e.textColor,caretColor:e.errorMessage?null:e.focusColor,resize:e.resize?"vertical":"none"}),onFocus:e.handleFocus,onBlur:e.handleBlur,onInput:e.handleInput,onChange:e.handleChange},null,8,["id","disabled","type","value","maxlength","rows","class","style","onFocus","onBlur","onInput","onChange"])),u("label",{class:o([e.textarea?"var-input__textarea-placeholder":"var-input__placeholder",e.computePlaceholderState(),e.hint?null:"var-input--placeholder-non-hint"]),for:e.id},ne(e.placeholder),11,se)],2),u("div",{class:o(["var-input__icon",[e.hint?null:"var-input--non-hint"]])},[$(e.$slots,"append-icon",{},()=>[e.clearable&&!e.isEmpty(e.modelValue)?(m(),z(p,{key:0,class:"var-input__clear-icon","var-input-cover":"",name:"close-circle",size:"14px",onClick:e.handleClear},null,8,["onClick"])):B("v-if",!0)])],2)],6),e.line?(m(),F("div",{key:0,class:o(["var-input__line",[e.formDisabled||e.disabled?"var-input--line-disabled":null,e.errorMessage?"var-input--line-error":null]]),style:g({background:e.errorMessage?void 0:e.blurColor})},[u("div",{class:o(["var-input__dot",[e.isFocus?"var-input--spread":null,e.formDisabled||e.disabled?"var-input--line-disabled":null,e.errorMessage?"var-input--line-error":null]]),style:g({background:e.errorMessage?void 0:e.focusColor})},null,6)],6)):B("v-if",!0),le(c,{"error-message":e.errorMessage,"maxlength-text":e.maxlengthText},null,8,["error-message","maxlength-text"])],2)}var k=_(ie,[["render",de]]);k.install=function(e){e.component(k.name,k)};export{k as I};