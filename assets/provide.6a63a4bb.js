import{q as i,o as r,k as m,w as c,c as _,a,t as o,f as d,T as l}from"./vendor.cfbfc887.js";import{_ as f}from"./IconSfc.29808136.js";import{a as p,b as u}from"./components.092cc01a.js";const v={errorMessage:{type:String,default:""},maxlengthText:{type:String,default:""}};const g=i({name:"VarFormDetails",props:v}),h={key:0,class:"var-form-details"},F={class:"var-form-details__message"},M={class:"var-form-details__length"};function I(e,s,b,x,y,T){return r(),m(l,{name:"var-form-details"},{default:c(()=>[e.errorMessage||e.maxlengthText?(r(),_("div",h,[a("div",F,o(e.errorMessage),1),a("div",M,o(e.maxlengthText),1)])):d("v-if",!0)]),_:1})}var t=f(g,[["render",I]]);t.install=function(e){e.component(t.name,t)};const n=Symbol("FORM_BIND_FORM_ITEM_KEY");function C(){const{bindParent:e,parentProvider:s}=p(n);return{bindForm:e,form:s}}function E(){const{bindChildren:e,childProviders:s}=u(n);return{formItems:s,bindFormItems:e}}export{t as F,E as a,C as u};