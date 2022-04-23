import{B as l}from"./index.995aacb5.js";import{I as i}from"./index.bd1a1c4d.js";import{S as s}from"./index.e67e99ba.js";import{A as r}from"./AppType.14280320.js";import{S as B}from"./index.65fa0f7b.js";import{d as y}from"./index.079ade67.js";import{u as C,a as f,_ as S,b as E,c as A}from"./en-US.307522bf.js";import{w as k,a as h}from"./utils.dea25200.js";import{o as b,c as x,i as u,V as t,j as e,F,m as a,t as n}from"./vendor.4fe81855.js";import"./index.46338cdd.js";import"./index.afd38bc1.js";/* empty css               */import"./elements.579153f5.js";import"./components.cd8ba2fd.js";import"./index.f32c995c.js";import"./elevation.46d11dfe.js";import"./zIndex.6b63131d.js";import"./lock.fc59b905.js";var z={themeColorButton:"\u4E3B\u9898\u8272\u6309\u94AE",defaultButton:"\u9ED8\u8BA4\u6309\u94AE",primaryButton:"\u4E3B\u8981\u6309\u94AE",infoButton:"\u4FE1\u606F\u6309\u94AE",successButton:"\u6210\u529F\u6309\u94AE",warningButton:"\u8B66\u544A\u6309\u94AE",dangerButton:"\u5371\u9669\u6309\u94AE",textButton:"\u6587\u5B57\u6309\u94AE",plainTextButton:"\u7EAF\u6587\u5B57\u6309\u94AE",outlineButton:"\u5916\u8FB9\u6846\u6309\u94AE",disabledStatus:"\u7981\u7528\u72B6\u6001",loadingStatus:"\u52A0\u8F7D\u72B6\u6001",buttonSize:"\u6309\u94AE\u5C3A\u5BF8",normalButton:"\u5E38\u89C4\u6309\u94AE",smallButton:"\u5C0F\u578B\u6309\u94AE",miniButton:"\u8FF7\u4F60\u6309\u94AE",largeButton:"\u5927\u578B\u6309\u94AE",blockButton:"\u5757\u7EA7\u6309\u94AE",customColor:"\u81EA\u5B9A\u4E49\u989C\u8272",backgroundTextColor:"\u80CC\u666F/\u6587\u5B57",linearGradientColor:"\u4F7F\u7528\u6E10\u53D8",roundButton:"\u5706\u5F62\u6309\u94AE",event:"\u6CE8\u518C\u4E8B\u4EF6",click:"\u70B9\u51FB",touchstart:"\u89E6\u6478",autoLoading:"\u81EA\u52A8\u52A0\u8F7D",clickSuccess:"\u70B9\u51FB\u6210\u529F",touchstartSuccess:"\u89E6\u6478\u6210\u529F"},T={themeColorButton:"Theme Color Button",defaultButton:"Default Button",primaryButton:"Primary Button",infoButton:"Info Button",successButton:"Success Button",warningButton:"Warning Button",dangerButton:"Danger Button",textButton:"Text Button",plainTextButton:"Plain Text Button",outlineButton:"Outline Button",disabledStatus:"Disabled Status",loadingStatus:"Loading Status",buttonSize:"Button Size",normalButton:"Normal Button",smallButton:"Small Button",miniButton:"Mini Button",largeButton:"Large Button",blockButton:"Block Button",customColor:"Custom Color",textColor:"Text Color",backgroundTextColor:"Background/Text Color",linearGradientColor:"LinearGradient Color",roundButton:"Round Button",event:"Event",click:"Click",touchstart:"Touchstart",autoLoading:"Auto Loading",clickSuccess:"Click Success",touchstartSuccess:"Touchstart Success"};const{add:p,use:w,pack:o,packs:X,merge:Y}=C(),L=d=>{A(d),w(d)};f("zh-CN",S);f("en-US",E);p("zh-CN",z);p("en-US",T);const Z={setup(d){const m=()=>{B.success(o.value.clickSuccess)},_=()=>{B.success(o.value.touchstartSuccess)},g=()=>new Promise(c=>{setTimeout(c,2e3)});return k(L),h(y),(c,v)=>(b(),x(F,null,[u(t(r),null,{default:e(()=>[a(n(t(o).themeColorButton),1)]),_:1}),u(t(s),{size:[10,10]},{default:e(()=>[u(t(l),null,{default:e(()=>[a(n(t(o).defaultButton),1)]),_:1}),u(t(l),{type:"primary"},{default:e(()=>[a(n(t(o).primaryButton),1)]),_:1}),u(t(l),{type:"info"},{default:e(()=>[a(n(t(o).infoButton),1)]),_:1}),u(t(l),{type:"success"},{default:e(()=>[a(n(t(o).successButton),1)]),_:1}),u(t(l),{type:"warning"},{default:e(()=>[a(n(t(o).warningButton),1)]),_:1}),u(t(l),{type:"danger"},{default:e(()=>[a(n(t(o).dangerButton),1)]),_:1})]),_:1}),u(t(r),null,{default:e(()=>[a(n(t(o).textButton),1)]),_:1}),u(t(s),{size:[10,10]},{default:e(()=>[u(t(l),{text:"",outline:"",type:"primary"},{default:e(()=>[a(n(t(o).outlineButton),1)]),_:1}),u(t(l),{text:"",type:"primary"},{default:e(()=>[a(n(t(o).plainTextButton),1)]),_:1})]),_:1}),u(t(r),null,{default:e(()=>[a(n(t(o).disabledStatus),1)]),_:1}),u(t(s),{size:[10,10]},{default:e(()=>[u(t(l),{disabled:""},{default:e(()=>[a(n(t(o).disabledStatus),1)]),_:1}),u(t(l),{disabled:"",text:"",outline:""},{default:e(()=>[a(n(t(o).disabledStatus),1)]),_:1}),u(t(l),{disabled:"",text:""},{default:e(()=>[a(n(t(o).disabledStatus),1)]),_:1})]),_:1}),u(t(r),null,{default:e(()=>[a(n(t(o).loadingStatus),1)]),_:1}),u(t(s),{size:[10,10]},{default:e(()=>[u(t(l),{loading:"",type:"primary"},{default:e(()=>[a(n(t(o).loadingStatus),1)]),_:1}),u(t(l),{loading:"",type:"info","loading-type":"rect"},{default:e(()=>[a(n(t(o).loadingStatus),1)]),_:1}),u(t(l),{loading:"",type:"success","loading-type":"disappear"},{default:e(()=>[a(n(t(o).loadingStatus),1)]),_:1}),u(t(l),{loading:"",type:"danger","loading-type":"cube"},{default:e(()=>[a(n(t(o).loadingStatus),1)]),_:1}),u(t(l),{loading:"",type:"warning","loading-type":"wave"},{default:e(()=>[a(n(t(o).loadingStatus),1)]),_:1})]),_:1}),u(t(r),null,{default:e(()=>[a(n(t(o).buttonSize),1)]),_:1}),u(t(s),{align:"center",size:[10,10]},{default:e(()=>[u(t(l),{type:"primary"},{default:e(()=>[a(n(t(o).normalButton),1)]),_:1}),u(t(l),{type:"success",size:"small"},{default:e(()=>[a(n(t(o).smallButton),1)]),_:1}),u(t(l),{type:"warning",size:"mini"},{default:e(()=>[a(n(t(o).miniButton),1)]),_:1}),u(t(l),{type:"danger",size:"large"},{default:e(()=>[a(n(t(o).largeButton),1)]),_:1})]),_:1}),u(t(r),null,{default:e(()=>[a(n(t(o).blockButton),1)]),_:1}),u(t(l),{block:"",type:"primary"},{default:e(()=>[a(n(t(o).blockButton),1)]),_:1}),u(t(r),null,{default:e(()=>[a(n(t(o).customColor),1)]),_:1}),u(t(s),{size:[10,10]},{default:e(()=>[u(t(l),{color:"#69dbaa","text-color":"#eee"},{default:e(()=>[a(n(t(o).backgroundTextColor),1)]),_:1}),u(t(l),{color:"linear-gradient(to right, #69dbaa, #3a7afe)","text-color":"#fff"},{default:e(()=>[a(n(t(o).linearGradientColor),1)]),_:1})]),_:1}),u(t(r),null,{default:e(()=>[a(n(t(o).roundButton),1)]),_:1}),u(t(s),{size:[10,10]},{default:e(()=>[u(t(l),{type:"primary",round:""},{default:e(()=>[u(t(i),{name:"plus"})]),_:1}),u(t(l),{type:"info",round:""},{default:e(()=>[u(t(i),{name:"information"})]),_:1}),u(t(l),{type:"success",round:""},{default:e(()=>[u(t(i),{name:"check"})]),_:1}),u(t(l),{type:"warning",round:""},{default:e(()=>[u(t(i),{name:"warning"})]),_:1}),u(t(l),{type:"danger",round:""},{default:e(()=>[u(t(i),{name:"window-close"})]),_:1})]),_:1}),u(t(r),null,{default:e(()=>[a(n(t(o).event),1)]),_:1}),u(t(s),{size:[10,10]},{default:e(()=>[u(t(l),{type:"success",onClick:m},{default:e(()=>[a(n(t(o).click),1)]),_:1}),u(t(l),{type:"success",onTouchstart:_},{default:e(()=>[a(n(t(o).touchstart),1)]),_:1}),u(t(l),{type:"success",onClick:g,"auto-loading":""},{default:e(()=>[a(n(t(o).autoLoading),1)]),_:1})]),_:1})],64))}};export{Z as default};