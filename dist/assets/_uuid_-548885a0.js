import{d as c,_ as d}from"./CraftRender.vue_vue_type_script_setup_true_lang-d90b4cbf.js";import{d as m,a7 as i,u as p,J as l,e as f,n as _,c as v,a as h,i as t,y as k,o as w,a9 as y}from"./index-692a6cb5.js";import{N}from"./file-80c6f74e.js";const R={key:0,class:"w-screen h-screen"},J=m({__name:"[uuid]",setup(b){const o=i(),n=p(),r=l(()=>o.params.uuid),e=f(null);return _(r,async()=>{const s=await y(o.params.uuid);if(s){const{json:a}=N(s);e.value=a}else n.replace("/dashboard")},{immediate:!0}),(s,a)=>e.value?(w(),v("div",R,[h(t(d),{data:e.value,"onUpdate:data":a[0]||(a[0]=u=>e.value=u),components:t(c)},null,8,["data","components"])])):k("",!0)}});export{J as default};
