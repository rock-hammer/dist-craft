import{n as x}from"./CraftRender.vue_vue_type_script_setup_true_lang-SHysObrY.js";import{z as s,I as g}from"./_uuid_-10qI7KdO.js";import{d as w,m as l,o,c as r,b as n,z as y,x as S,B as k,y as i,a as z,i as u,l as B}from"./index-OWMVJs2S.js";const C={class:"flex items-center grow"},$=w({name:"UiInputText",__name:"UiInputText",props:{value:{default:""},icon:{default:""},placeholder:{default:""}},emits:["update:value"],setup(p,{emit:c}){const d=p,m=c,{value:t}=x(d,m),f=l(()=>({height:`${s.rowHeight}px`})),h=l(()=>({height:`${s.rowHeight}px`,width:`${s.rowHeight}px`}));return(e,a)=>(o(),r("div",{style:i(f.value),class:"flex flex-row items-center rounded-sm cursor-pointer select-none ui-input-text hover:ring-2 hover:ring-indigo-500"},[n("div",{style:i(h.value),class:"flex flex-row items-center justify-center shrink-0"},[y(e.$slots,"prefix",{},()=>[e.icon?(o(),r("span",{key:0,class:S(e.icon)},null,2)):k("",!0)])],4),n("div",C,[z(u(g),{value:u(t),"onUpdate:value":a[0]||(a[0]=v=>B(t)?t.value=v:null),class:"no-padding",bordered:!1,placeholder:e.placeholder,"allow-clear":!0},null,8,["value","placeholder"])])],4))}});export{$ as _};
