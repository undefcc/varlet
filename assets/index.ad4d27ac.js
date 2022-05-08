import{I as s}from"./index.d42cde01.js";import{I as U}from"./index.b1a92e1f.js";import{A as t}from"./AppType.b3af8291.js";import{d as E}from"./index.5d153c96.js";import{u as I,a as C,_ as B,b as M,c as A}from"./en-US.2ec95554.js";import{a as N,b as T}from"./utils.98d16bca.js";import{_ as S,r as k,at as D,h as w,i as z,x as l,ag as e,P as o,au as p,F as P,ai as R,aj as L,M as r,N as n,p as $}from"./elevation.0a6066f5.js";import"./provide.5bbdf46b.js";import"./components.c8d2cf33.js";import"./elements.50c32b0e.js";var j={basicUsage:"\u57FA\u672C\u4F7F\u7528",plainMode:"\u6734\u7D20\u6A21\u5F0F",textarea:"\u6587\u672C\u57DF",maxlength:"\u6700\u5927\u957F\u5EA6",disabled:"\u7981\u7528",readonly:"\u53EA\u8BFB",clearable:"\u53EF\u6E05\u9664",displayIcon:"\u663E\u793A\u56FE\u6807",validate:"\u5B57\u6BB5\u6821\u9A8C",placeholder:"\u8BF7\u8F93\u5165\u6587\u672C",maxMessage:"\u6587\u672C\u957F\u5EA6\u5FC5\u987B\u5927\u4E8E6",clearableText:"\u53EF\u6E05\u9664\u6587\u672C"},q={basicUsage:"Basic Usage",plainMode:"Plain Mode",textarea:"Textarea",maxlength:"Maxlength",disabled:"Disabled",readonly:"Readonly",clearable:"Clearable",displayIcon:"Display Icon",validate:"Validate",placeholder:"Please enter text",maxMessage:"Text length must be greater than 6",clearableText:"Clearable Text"};const{add:y,use:G,pack:a,packs:oe,merge:se}=I(),H=m=>{A(m),G(m)};C("zh-CN",B);C("en-US",M);y("zh-CN",j);y("en-US",q);const J=m=>(R("data-v-62dfe97d"),m=m(),L(),m),K=J(()=>$("div",{style:{height:"40px"}},null,-1)),O={setup(m){const _=k({value:"",value2:"",value3:"",value4:"",value5:"",value6:"",value7:"",value8:"",value9:""}),{value:c,value2:i,value3:v,value4:h,value5:V,value6:x,value7:b,value8:f,value9:g}=D(_);return N(F=>{H(F),_.value5=a.value.clearableText}),T(E),(F,d)=>(w(),z(P,null,[l(e(t),{class:"pb"},{default:o(()=>[r(n(e(a).basicUsage),1)]),_:1}),l(e(s),{placeholder:e(a).placeholder,modelValue:e(c),"onUpdate:modelValue":d[0]||(d[0]=u=>p(c)?c.value=u:null)},null,8,["placeholder","modelValue"]),l(e(t),{class:"pb"},{default:o(()=>[r(n(e(a).plainMode),1)]),_:1}),l(e(s),{hint:!1,line:!1,placeholder:e(a).placeholder,modelValue:e(b),"onUpdate:modelValue":d[1]||(d[1]=u=>p(b)?b.value=u:null)},null,8,["placeholder","modelValue"]),l(e(t),{class:"pb"},{default:o(()=>[r(n(e(a).textarea),1)]),_:1}),l(e(s),{placeholder:e(a).placeholder,textarea:"",modelValue:e(i),"onUpdate:modelValue":d[2]||(d[2]=u=>p(i)?i.value=u:null)},null,8,["placeholder","modelValue"]),l(e(t),{class:"pb"},{default:o(()=>[r(n(e(a).maxlength),1)]),_:1}),l(e(s),{placeholder:e(a).placeholder,maxlength:10,modelValue:e(f),"onUpdate:modelValue":d[3]||(d[3]=u=>p(f)?f.value=u:null)},null,8,["placeholder","modelValue"]),l(e(t),{class:"pb"},{default:o(()=>[r(n(e(a).disabled),1)]),_:1}),l(e(s),{placeholder:e(a).placeholder,disabled:"",modelValue:e(v),"onUpdate:modelValue":d[4]||(d[4]=u=>p(v)?v.value=u:null)},null,8,["placeholder","modelValue"]),l(e(t),{class:"pb"},{default:o(()=>[r(n(e(a).readonly),1)]),_:1}),l(e(s),{placeholder:e(a).placeholder,readonly:"",modelValue:e(h),"onUpdate:modelValue":d[5]||(d[5]=u=>p(h)?h.value=u:null)},null,8,["placeholder","modelValue"]),l(e(t),{class:"pb"},{default:o(()=>[r(n(e(a).clearable),1)]),_:1}),l(e(s),{placeholder:e(a).placeholder,clearable:"",modelValue:e(V),"onUpdate:modelValue":d[6]||(d[6]=u=>p(V)?V.value=u:null)},null,8,["placeholder","modelValue"]),l(e(t),{class:"pb"},{default:o(()=>[r(n(e(a).displayIcon),1)]),_:1}),l(e(s),{placeholder:e(a).placeholder,modelValue:e(x),"onUpdate:modelValue":d[7]||(d[7]=u=>p(x)?x.value=u:null)},{"prepend-icon":o(()=>[l(e(U),{class:"prepend-icon",name:"plus"})]),"append-icon":o(()=>[l(e(U),{class:"append-icon",name:"minus"})]),_:1},8,["placeholder","modelValue"]),l(e(t),null,{default:o(()=>[r(n(e(a).validate),1)]),_:1}),l(e(s),{placeholder:e(a).placeholder,rules:[u=>u.length>6||e(a).maxMessage],modelValue:e(g),"onUpdate:modelValue":d[8]||(d[8]=u=>p(g)?g.value=u:null)},null,8,["placeholder","rules","modelValue"]),K],64))}};var te=S(O,[["__scopeId","data-v-62dfe97d"]]);export{te as default};