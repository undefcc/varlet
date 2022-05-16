import{_ as o,t as l,h as r,i as c,p as e,x as n,P as a,ah as d,M as s}from"./elevation.ecb899cd.js";const i={components:{}},p={class:"varlet-site-doc"},u=d('<h1>Server side rendering</h1><div class="card"><h3>Intro</h3><p>Here is the basic way to introduce <code>Varlet</code> in <code>Nuxt</code>. You can introduce the entire <code>Varlet</code> or just a few components as needed. Let\u2019s start with how to introduce the full <code>Varlet</code>.</p></div><div class="card"><h3>Create Nuxt project</h3><p><code>Nuxt.js</code> is a server rendering application framework based on <code>Vue.js</code>\uFF0CFor more details, please go <a href="https://v3.nuxtjs.org/">Nuxt</a>.</p></div>',3),h={class:"card"},m=e("h3",null,"Fully import",-1),_=e("p",null,[e("code",null,"Nuxt"),s(" will automatically read the files in your "),e("code",null,"plugins"),s(" directory and load them. So you can create a new "),e("code",null,"varlet.ts"),s(" in the "),e("code",null,"plugins"),s(" directory and write the following:")],-1),f=e("pre",{class:"hljs"},[e("code",null,[e("span",{class:"hljs-keyword"},"import"),s(" { defineNuxtPlugin } "),e("span",{class:"hljs-keyword"},"from"),s(),e("span",{class:"hljs-string"},"'#app'"),s(`
`),e("span",{class:"hljs-keyword"},"import"),s(" Varlet "),e("span",{class:"hljs-keyword"},"from"),s(),e("span",{class:"hljs-string"},"'@varlet/ui'"),s(`
`),e("span",{class:"hljs-keyword"},"import"),s(),e("span",{class:"hljs-string"},"'@varlet/ui/es/style.js'"),s(`

`),e("span",{class:"hljs-keyword"},"export"),s(),e("span",{class:"hljs-keyword"},"default"),s(" defineNuxtPlugin("),e("span",{class:"hljs-function"},[s("("),e("span",{class:"hljs-params"},"nuxtApp"),s(") =>")]),s(` {
  nuxtApp.vueApp.use(Varlet)
})
`)])],-1),j=e("p",null,[s("The above imports "),e("code",null,"Varlet"),s(" entirely. Note that CSS file needs to be imported separately.")],-1),x={class:"card"},y=e("h3",null,"On demand",-1),v=e("p",null,[s("The on-demand import avoids the full import of components and can effectively reduce the size of the distribution package. Each component is a "),e("code",null,"Vue plugin"),s(" and is composed of "),e("code",null,"component logic"),s(" and "),e("code",null,"style files"),s(". It is manually install and used as follows.")],-1),g=e("pre",{class:"hljs"},[e("code",null,[e("span",{class:"hljs-keyword"},"import"),s(" { defineNuxtPlugin } "),e("span",{class:"hljs-keyword"},"from"),s(),e("span",{class:"hljs-string"},"'#app'"),s(`
`),e("span",{class:"hljs-keyword"},"import"),s(" { Button } "),e("span",{class:"hljs-keyword"},"from"),s(),e("span",{class:"hljs-string"},"'@varlet/ui'"),s(`
`),e("span",{class:"hljs-keyword"},"import"),s(),e("span",{class:"hljs-string"},"'@varlet/ui/es/button/style/index.js'"),s(`

`),e("span",{class:"hljs-keyword"},"export"),s(),e("span",{class:"hljs-keyword"},"default"),s(" defineNuxtPlugin("),e("span",{class:"hljs-function"},[s("("),e("span",{class:"hljs-params"},"nuxtApp"),s(") =>")]),s(` {
  nuxtApp.vueApp.use(Button)
})
`)])],-1),w=e("p",null,[s("For more examples, see "),e("a",{href:"https://github.com/varletjs/varlet-nuxt3-example"},"varlet-nuxt3-example"),s(".")],-1);function k(N,V,b,S,A,B){const t=l("var-site-code-example");return r(),c("div",p,[u,e("div",h,[m,_,n(t,{"playground-ignore":""},{default:a(()=>[f]),_:1}),j]),e("div",x,[y,v,n(t,{"playground-ignore":""},{default:a(()=>[g]),_:1}),w])])}var C=o(i,[["render",k]]);export{C as default};