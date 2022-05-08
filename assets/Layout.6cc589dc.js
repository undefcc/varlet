import{_ as S,h as o,i as m,p as T,d as B,a as r,g as p,$ as j,u as q,b as Q,a0 as W,a8 as O,c as s,a9 as G,q as C,t as b,ab as V,x as v,N as w,l as M,k as $,K as z,P as I,v as H,F as D,ad as F,j as K,M as J,H as R,Q as U,r as X,al as A,a6 as Y,e as Z,w as x,n as ee}from"./elevation.0a6066f5.js";import{A as ae}from"./AnimationBox.e3e6966f.js";import"./main.9bb13eee.js";import"./clipboard.4312f935.js";const ne={name:"AppMobile",props:{componentName:{type:String},language:{type:String},replace:{type:String}}},te={class:"varlet-site-mobile"},se={class:"varlet-site-mobile-content"},oe=["src"];function re(e,n,l,_,h,i){return o(),m("div",te,[T("div",se,[T("iframe",{id:"mobile",src:`./mobile.html#/${l.componentName}?language=${l.language}&platform=pc&replace=${l.replace}`},null,8,oe)])])}var le=S(ne,[["render",re],["__scopeId","data-v-70803dd9"]]);const ie=B({name:"AppHeader",components:{AnimationBox:ae},props:{language:{type:String}},setup(){const e=r(p(s,"title")),n=r(p(s,"logo")),l=p(s,"themesKey"),_=r(p(s,"pc.header.i18n")),h=r(p(s,"pc.header.playground")),i=r(p(s,"pc.header.github")),y=p(s,"pc.redirect"),c=r(p(s,"pc.header.darkMode")),a=r(j(l)),u=r(!1),d=q(),t=Q(()=>G(_.value)),g=()=>{const{language:f}=C();d.replace(`/${f}${y}`)},k=f=>{const{menuName:E}=C();d.replace(`/${f}/${E}`),u.value=!1},N=f=>{a.value=f,O(s,a.value),window.localStorage.setItem(l,a.value)},L=()=>({action:"themesChange",from:"pc",data:a.value}),P=()=>{N(a.value==="darkThemes"?"themes":"darkThemes"),window.postMessage(L(),"*"),document.getElementById("mobile").contentWindow.postMessage(L(),"*")};return W((f,E)=>{E==="mobile"&&N(f)}),O(s,a.value),window.postMessage(L(),"*"),{logo:n,title:e,languages:_,nonEmptyLanguages:t,playground:h,github:i,isOpenMenu:u,darkMode:c,currentThemes:a,backRoot:g,handleLanguageChange:k,toggleTheme:P}}}),ce={class:"varlet-site-header"},ue={key:0,class:"varlet-site-header__title"},de={class:"varlet-site-header__tail"},pe=["href"],me=["href"];function ge(e,n,l,_,h,i){const y=b("animation-box"),c=b("var-site-icon"),a=b("var-site-cell"),u=V("ripple");return o(),m("div",ce,[T("div",{class:"varlet-site-header__lead",onClick:n[0]||(n[0]=(...d)=>e.backRoot&&e.backRoot(...d))},[v(y,{class:"varlet-site-header__logo"}),e.title?(o(),m("div",ue,w(e.title),1)):M("v-if",!0)]),T("div",de,[e.playground?$((o(),m("a",{key:0,class:"varlet-site-header__link",target:"_blank",href:e.playground},[v(c,{name:"code-json",size:24})],8,pe)),[[u]]):M("v-if",!0),e.github?$((o(),m("a",{key:1,class:"varlet-site-header__link",target:"_blank",href:e.github},[v(c,{name:"github",size:28})],8,me)),[[u]]):M("v-if",!0),e.darkMode?$((o(),m("div",{key:2,class:"varlet-site-header__theme",onClick:n[1]||(n[1]=(...d)=>e.toggleTheme&&e.toggleTheme(...d))},[v(c,{size:"26px",name:e.currentThemes==="themes"?"white-balance-sunny":"weather-night",style:z({marginBottom:e.currentThemes==="darkThemes"&&"2px",marginTop:e.currentThemes==="themes"&&"2px"})},null,8,["name","style"])])),[[u]]):M("v-if",!0),e.languages?(o(),m("div",{key:3,class:"varlet-site-header__language",onMouseenter:n[2]||(n[2]=d=>e.isOpenMenu=!0),onMouseleave:n[3]||(n[3]=d=>e.isOpenMenu=!1)},[v(c,{name:"translate",size:"26px"}),v(c,{name:"chevron-down"}),v(U,{name:"fade"},{default:I(()=>[$(T("div",{class:"varlet-site-header__language-list var-site-elevation--5",style:z({pointerEvents:e.isOpenMenu?"auto":"none"})},[(o(!0),m(D,null,F(e.nonEmptyLanguages,(d,t)=>$((o(),K(a,{key:t,class:R({"varlet-site-header__language-list--active":e.language===t}),onClick:g=>e.handleLanguageChange(t)},{default:I(()=>[J(w(d),1)]),_:2},1032,["class","onClick"])),[[u]])),128))],4),[[H,e.isOpenMenu]])]),_:1})],32)):M("v-if",!0)])])}var _e=S(ie,[["render",ge],["__scopeId","data-v-466f81e2"]]);const ve=B({name:"AppSidebar",props:{menu:{type:Array},menuName:{type:String},language:{type:String}},emits:["change"],setup(e,{emit:n}){const l=X(A),_=r(p(s,"themes"));return{menuTypes:l,themes:_,changeRoute:i=>{i.type===A.TITLE||e.menuName===i.doc||n("change",i)}}}}),he={class:"varlet-site-sidebar var-elevation--3"},ye={key:0,class:"varlet-site-sidebar__item--title"},be={key:1};function fe(e,n,l,_,h,i){const y=b("var-site-cell"),c=V("ripple");return o(),m("div",he,[(o(!0),m(D,null,F(e.menu,(a,u)=>$((o(),K(y,{class:R(["varlet-site-sidebar__item",{"varlet-site-sidebar__item--active":a.doc===e.menuName,"varlet-site-sidebar__link":a.type!==e.menuTypes.TITLE,"varlet-site-sidebar__title":a.type===e.menuTypes.TITLE}]),id:a.doc,key:u,onClick:d=>e.changeRoute(a)},{default:I(()=>[a.type===e.menuTypes.TITLE?(o(),m("span",ye,w(a.text[e.language]),1)):(o(),m("span",be,w(a.text[e.language]),1))]),_:2},1032,["id","class","onClick"])),[[c,{touchmoveForbid:!1,disabled:a.type===e.menuTypes.TITLE,color:e.themes["color-side-bar"]}]])),128))])}var $e=S(ve,[["render",fe],["__scopeId","data-v-22eb4266"]]);const Te=B({components:{AppMobile:le,AppHeader:_e,AppSidebar:$e},setup(){const e=r(p(s,"pc.menu",[])),n=r(p(s,"useMobile")),l=p(s,"mobile.redirect"),_=r(""),h=r(null),i=r(""),y=r(null),c=Y(),a=t=>{const g=e.value.find(k=>k.doc===t);return(g==null?void 0:g.type)===A.COMPONENT?t:l.slice(1)},u=()=>{const{menuName:t}=C();ee(()=>{const g=document.querySelector(".varlet-site-sidebar").getElementsByClassName("var-site-cell"),k=e.value.findIndex(N=>N.doc===t);k!==-1&&g[k].scrollIntoView({block:"center",inline:"start"})})},d=t=>{y.value.scrollTop=0,h.value=a(t.doc),i.value=t.doc};return Z(u),x(()=>c.path,()=>{const{language:t,menuName:g}=C();!t||!g||(h.value=a(g),i.value=g,_.value=t,document.title=p(s,"pc.title")[t])},{immediate:!0}),{menu:e,language:_,componentName:h,menuName:i,doc:y,useMobile:n,handleSidebarChange:d}}}),ke={class:"varlet-site"},Me={class:"varlet-site-content"};function Ne(e,n,l,_,h,i){const y=b("app-header"),c=b("app-sidebar"),a=b("router-view"),u=b("app-mobile");return o(),m("div",ke,[v(y,{language:e.language},null,8,["language"]),T("div",Me,[v(c,{language:e.language,menu:e.menu,"menu-name":e.menuName,onChange:e.handleSidebarChange},null,8,["language","menu","menu-name","onChange"]),T("div",{class:R(["varlet-site-doc-container",[!e.useMobile&&"varlet-site-doc-container--pc-only"]]),ref:"doc"},[v(a)],2),$(v(u,{"component-name":e.componentName,language:e.language,replace:e.menuName},null,8,["component-name","language","replace"]),[[H,e.useMobile]])])])}var Ee=S(Te,[["render",Ne]]);export{Ee as default};