var e=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,n=(a,l,u)=>l in a?e(a,l,{enumerable:!0,configurable:!0,writable:!0,value:u}):a[l]=u;import{C as d}from"./index.2e676031.js";import{A as s}from"./AppType.5a8a2ee0.js";import{_ as r,w as p}from"./IconSfc.7d4b9349.js";import{u as i,a as m,_ as c,b as v,c as f}from"./en-US.f5da4181.js";import{p as g,a2 as V,d as b,o as h,c as y,g as j,w as U,F as k,S as x,U as _,k as z,t as C,a as O}from"./vendor.613212a8.js";import"./index.7b1ee4f9.js";import"./shared.6d6b25a1.js";import"./elements.f945da86.js";import"./index.642010f1.js";import"./provide.23310c81.js";import"./components.7c010433.js";const{add:S,use:w,pack:P,packs:B,merge:A}=i(),F=e=>{f(e),w(e)};m("zh-CN",c),m("en-US",v),S("zh-CN",{basicUsage:"基本使用",range:"设置取值范围",step:"设置步长",toFixed:"保留小数",disabled:"禁用",readonly:"只读",lazyChange:"异步变更",size:"设置尺寸",validate:"字段校验",validateMessage:"请选择大于5的值"}),S("en-US",{basicUsage:"Basic Usage",range:"Set the value range",step:"Set step",toFixed:"Decimal length",disabled:"Disabled",readonly:"Readonly",lazyChange:"Asynchronous change",size:"Set size",validate:"Validate",validateMessage:"Please select a value greater than 5"});const D={name:"CounterExample",components:{[d.name]:d,AppType:s},setup(){const e=g({value:0,value2:0,value3:0,value4:0,value5:0,value6:0,value7:0,value8:0,value9:0});return p(F),d=((e,a)=>{for(var l in a||(a={}))o.call(a,l)&&n(e,l,a[l]);if(u)for(var l of u(a))t.call(a,l)&&n(e,l,a[l]);return e})({pack:P},V(e)),a(d,l({handleBeforeChange:(e,a)=>{setTimeout((()=>{a(e)}),500)}}));var d}},I=(e=>(x("data-v-c49cb070"),e=e(),_(),e))((()=>O("div",{class:"space"},null,-1)));var M=r(D,[["render",function(e,a,l,u,o,t){const n=b("app-type"),d=b("var-counter");return h(),y(k,null,[j(n,null,{default:U((()=>[z(C(u.pack.basicUsage),1)])),_:1}),j(d,{modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=a=>e.value=a)},null,8,["modelValue"]),j(n,null,{default:U((()=>[z(C(u.pack.range),1)])),_:1}),j(d,{min:0,max:5,modelValue:e.value2,"onUpdate:modelValue":a[1]||(a[1]=a=>e.value2=a)},null,8,["modelValue"]),j(n,null,{default:U((()=>[z(C(u.pack.step),1)])),_:1}),j(d,{step:10,modelValue:e.value3,"onUpdate:modelValue":a[2]||(a[2]=a=>e.value3=a)},null,8,["modelValue"]),j(n,null,{default:U((()=>[z(C(u.pack.toFixed),1)])),_:1}),j(d,{"decimal-length":1,modelValue:e.value4,"onUpdate:modelValue":a[3]||(a[3]=a=>e.value4=a)},null,8,["modelValue"]),j(n,null,{default:U((()=>[z(C(u.pack.size),1)])),_:1}),j(d,{"input-text-size":"18px","input-width":"50px","button-size":"36px",modelValue:e.value5,"onUpdate:modelValue":a[4]||(a[4]=a=>e.value5=a)},null,8,["modelValue"]),j(n,null,{default:U((()=>[z(C(u.pack.disabled),1)])),_:1}),j(d,{disabled:"",modelValue:e.value6,"onUpdate:modelValue":a[5]||(a[5]=a=>e.value6=a)},null,8,["modelValue"]),j(n,null,{default:U((()=>[z(C(u.pack.readonly),1)])),_:1}),j(d,{readonly:"",modelValue:e.value7,"onUpdate:modelValue":a[6]||(a[6]=a=>e.value7=a)},null,8,["modelValue"]),j(n,null,{default:U((()=>[z(C(u.pack.lazyChange),1)])),_:1}),j(d,{"lazy-change":"",modelValue:e.value8,"onUpdate:modelValue":a[7]||(a[7]=a=>e.value8=a),onBeforeChange:u.handleBeforeChange},null,8,["modelValue","onBeforeChange"]),j(n,null,{default:U((()=>[z(C(u.pack.validate),1)])),_:1}),j(d,{rules:[e=>e>5||u.pack.validateMessage],modelValue:e.value9,"onUpdate:modelValue":a[8]||(a[8]=a=>e.value9=a)},null,8,["rules","modelValue"]),I],64)}],["__scopeId","data-v-c49cb070"]]);export{M as default};