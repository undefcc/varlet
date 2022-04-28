import{p as q,S as J}from"./index.2191ed45.js";import{d as F,r as v,f as l,E as z,D as Q,P as Z,T as _,_ as K,o as X,x,p as ee,a as N,z as U,V as j,n as R,X as te,aj as ae,j as oe,l as ne,c as ie}from"./elevation.4b2b848a.js";import{p as se,j as le,l as re,c as I,a as D,i as ce,G as V,h as de,m as ue}from"./components.21c4ed88.js";import{t as ve,e as H,i as fe}from"./elements.eca917ca.js";import{R as be}from"./index.e49719fd.js";function W(e){return["horizontal","vertical"].includes(e)}const me={active:{type:[String,Number],default:0},layoutDirection:{type:String,default:"horizontal",validator:W},itemDirection:{type:String,default:"horizontal",validator:W},fixedBottom:{type:Boolean,default:!1},activeColor:{type:String},inactiveColor:{type:String},disabledColor:{type:String},color:{type:String},indicatorColor:{type:String},indicatorSize:{type:[String,Number]},elevation:{type:Boolean,default:!1},sticky:{type:Boolean,default:!1},safeArea:{type:Boolean,default:!1},offsetTop:se(q,"offsetTop"),onClick:{type:Function},onChange:{type:Function},"onUpdate:active":{type:Function}},O=Symbol("TABS_BIND_TAB_KEY"),G=Symbol("TABS_COUNT_TAB_KEY");function pe(){const{childProviders:e,bindChildren:o}=le(O),{length:i}=re(G);return{length:i,tabList:e,bindTabList:o}}const{n:ye,classes:he}=I("tabs"),Ce=F({name:"VarTabs",components:{VarSticky:J},inheritAttrs:!1,props:me,setup(e){const o=v("0px"),i=v("0px"),f=v("0px"),b=v("0px"),n=v(!1),m=v(null),y=l(()=>e.active),k=l(()=>e.activeColor),r=l(()=>e.inactiveColor),S=l(()=>e.disabledColor),$=l(()=>e.itemDirection),{tabList:h,bindTabList:A,length:c}=pe(),g=a=>{var Y;const t=(Y=a.name.value)!=null?Y:a.index.value,{active:p,onChange:T,onClick:M}=e;D(e["onUpdate:active"],t),D(M,t),t!==p&&D(T,t)},E=()=>h.find(({name:a})=>e.active===a.value),B=a=>h.find(({index:t})=>(a!=null?a:e.active)===t.value),w=()=>{if(c.value===0)return;const{active:a}=e;if(ce(a)){const t=a>c.value-1?c.value-1:0;return D(e["onUpdate:active"],t),B(t)}},d=()=>{n.value=h.length>=5},u=({element:a})=>{const t=a.value;e.layoutDirection==="horizontal"?(o.value=`${t==null?void 0:t.offsetWidth}px`,f.value=`${t==null?void 0:t.offsetLeft}px`):(i.value=`${t==null?void 0:t.offsetHeight}px`,b.value=`${t==null?void 0:t.offsetTop}px`)},C=({element:a})=>{if(!n.value)return;const t=m.value,p=a.value;if(e.layoutDirection==="horizontal"){const T=p.offsetLeft+p.offsetWidth/2-t.offsetWidth/2;H(t,{left:T,animation:V})}else{const T=p.offsetTop+p.offsetHeight/2-t.offsetHeight/2;H(t,{top:T,animation:V})}},s=()=>{const a=E()||B()||w();!a||a.disabled.value||(d(),u(a),C(a))};return A({active:y,activeColor:k,inactiveColor:r,disabledColor:S,itemDirection:$,resize:s,onTabClick:g}),z(()=>c.value,async()=>{await fe(),s()}),z(()=>e.active,s),Q(()=>window.addEventListener("resize",s)),Z(()=>window.removeEventListener("resize",s)),{indicatorWidth:o,indicatorHeight:i,indicatorX:f,indicatorY:b,scrollable:n,scrollerEl:m,Transition:_,toSizeUnit:ve,n:ye,classes:he,resize:s}}});function Te(e,o,i,f,b,n){return X(),x(ae(e.sticky?"var-sticky":e.Transition),{"offset-top":e.sticky?e.offsetTop:null},{default:ee(()=>[N("div",te({class:e.classes(e.n(),"var--box",e.n(`--item-${e.itemDirection}`),e.n(`--layout-${e.layoutDirection}-padding`),[e.elevation,"var-elevation--4"],[e.fixedBottom,e.n("--fixed-bottom")],[e.safeArea,e.n("--safe-area")]),style:{background:e.color}},e.$attrs),[N("div",{ref:"scrollerEl",class:U(e.classes(e.n("tab-wrap"),[e.scrollable,e.n(`--layout-${e.layoutDirection}-scrollable`)],e.n(`--layout-${e.layoutDirection}`)))},[j(e.$slots,"default"),N("div",{class:U(e.classes(e.n("indicator"),e.n(`--layout-${e.layoutDirection}-indicator`))),style:R({width:e.layoutDirection==="horizontal"?e.indicatorWidth:e.toSizeUnit(e.indicatorSize),height:e.layoutDirection==="horizontal"?e.toSizeUnit(e.indicatorSize):e.indicatorHeight,transform:e.layoutDirection==="horizontal"?`translateX(${e.indicatorX})`:`translateY(${e.indicatorY})`,background:e.indicatorColor||e.activeColor})},null,6)],2)],16)]),_:3},8,["offset-top"])}var P=K(Ce,[["render",Te]]);P.install=function(e){e.component(P.name,P)};const Se={name:{type:[String,Number]},disabled:{type:Boolean,default:!1},onClick:{type:Function}};function $e(){const{parentProvider:e,bindParent:o}=de(O),{index:i}=ue(G);if(!e||!o||!i)throw Error("<var-tab/> must in <var-tabs/>");return{index:i,tabs:e,bindTabs:o}}const{n:ge,classes:Be}=I("tab"),De=F({name:"VarTab",directives:{Ripple:be},props:Se,setup(e){const o=v(null),i=l(()=>e.name),f=l(()=>e.disabled),b=l(()=>o.value),{index:n,tabs:m,bindTabs:y}=$e(),{onTabClick:k,active:r,activeColor:S,inactiveColor:$,disabledColor:h,itemDirection:A,resize:c}=m,g={name:i,index:n,disabled:f,element:b};y(g);const E=()=>{const{disabled:d,name:u}=e;return d?h.value:r.value===u||r.value===(n==null?void 0:n.value)?S.value:$.value},B=()=>{const{disabled:d,name:u}=e;return d?"var-tab--disabled":r.value===u||r.value===(n==null?void 0:n.value)?"var-tab--active":"var-tab--inactive"},w=d=>{const{disabled:u,name:C,onClick:s}=e;u||(s==null||s(C!=null?C:n.value,d),k(g))};return z(()=>e.name,c),z(()=>e.disabled,c),{n:ge,classes:Be,tabEl:o,active:r,activeColor:S,inactiveColor:$,itemDirection:A,computeColorStyle:E,computeColorClass:B,handleClick:w}}});function ze(e,o,i,f,b,n){const m=oe("ripple");return ne((X(),ie("div",{class:U(e.classes(e.n(),"var--box",e.computeColorClass(),e.n(`--${e.itemDirection}`))),ref:"tabEl",style:R({color:e.computeColorStyle()}),onClick:o[0]||(o[0]=(...y)=>e.handleClick&&e.handleClick(...y))},[j(e.$slots,"default")],6)),[[m,{disabled:e.disabled}]])}var L=K(De,[["render",ze]]);L.install=function(e){e.component(L.name,L)};export{P as T,L as a};