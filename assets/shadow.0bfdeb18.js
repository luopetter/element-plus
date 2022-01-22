import{_ as p}from"./plugin-vue_export-helper.21dcd24c.js";import{k as s,l as r,ac as S,ad as w,q as e,j as m,e as v,z as y,A as b,B as g,U as h,I as i,G as n,x,F as V}from"./framework.b3e0f3f4.js";const $={},C=o=>(S("data-v-656b59f4"),o=o(),w(),o),k={class:"demo-border"},I=C(()=>e("tbody",null,[e("tr",null,[e("td",{class:"text"},"Name"),e("td",{class:"text"},"Thickness"),e("td",{class:"line"},"Demo")]),e("tr",null,[e("td",{class:"text"},"Solid"),e("td",{class:"text"},"1px"),e("td",{class:"line"},[e("div")])]),e("tr",null,[e("td",{class:"text"},"Dashed"),e("td",{class:"text"},"2px"),e("td",{class:"line"},[e("div",{class:"dashed"})])])],-1)),j=[I];function B(o,_){return s(),r("table",k,j)}var R=p($,[["render",B],["__scopeId","data-v-656b59f4"]]),F=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:R});const z={class:"title"},T={class:"value"},N=m({setup(o){const _=v([{name:"No Radius",type:""},{name:"Small Radius",type:"small"},{name:"Large Radius",type:"base"},{name:"Round Radius",type:"round"}]),c=l=>((t,a)=>getComputedStyle(document.documentElement).getPropertyValue(`--el-${t}-${a}`))("border-radius",l);return(l,u)=>{const t=y("el-col"),a=y("el-row");return s(),b(a,{gutter:12,class:"demo-radius"},{default:g(()=>[(s(!0),r(i,null,h(_.value,(d,f)=>(s(),b(t,{key:f,span:6,xs:{span:12}},{default:g(()=>[e("div",z,n(d.name),1),e("div",T,[e("code",null,"border-radius: "+n(c(d.type)||"0px"),1)]),e("div",{class:"radius",style:x({borderRadius:d.type?`var(--el-border-radius-${d.type})`:""})},null,4)]),_:2},1024))),128))]),_:1})}}});var D=p(N,[["__scopeId","data-v-4011af11"]]),P=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:D});const E={class:"demo-shadow-text"},G=m({setup(o){const _=v([{name:"Basic Shadow",type:"base"},{name:"Light Shadow",type:"light"}]),c=l=>((t,a)=>getComputedStyle(document.documentElement).getPropertyValue(`--el-${t}-${a}`))("box-shadow",l);return(l,u)=>(s(),r("div",null,[(s(!0),r(i,null,h(_.value,(t,a)=>(s(),r(i,{key:a},[e("div",{class:"demo-shadow",style:x({boxShadow:`var(--el-box-shadow-${t.type})`})},null,4),e("span",E,[V(n(t.name)+" ",1),e("code",null,"box-shadow: "+n(c(t.type)),1)])],64))),128))]))}});var L=p(G,[["__scopeId","data-v-12e3ba08"]]),q=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:L});export{F as _,P as a,q as b};
