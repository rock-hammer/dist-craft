import{a6 as w,d,o as p,c as f,b as I,P as x,S as C,Q as g,i as c,R as y,a as k,w as R,e as _,F as B,f as z,U as G,_ as N,$ as U,V,m as u,a2 as v,z as P,a7 as q}from"./index-dbd97f2c.js";import{bL as K,bM as E,a as Q,bN as O,e as J,f as S,bO as X,h as Y,bP as L,bQ as Z,bR as F,bC as h,bS as j,bT as ee,bU as ne,bV as te,bW as re,bX as ae,bY as se,b3 as b,bZ as oe,b4 as A,b6 as ie,b_ as le,b$ as ue}from"./file-ba9800ef.js";function ce(e){return e}var pe=1,fe=2;function de(e,n,t,r){var a=t.length,s=a,o=!r;if(e==null)return!s;for(e=Object(e);a--;){var i=t[a];if(o&&i[2]?i[1]!==e[i[0]]:!(i[0]in e))return!1}for(;++a<s;){i=t[a];var l=i[0],m=e[l],$=i[1];if(o&&i[2]){if(m===void 0&&!(l in e))return!1}else{var M=new K;if(r)var D=r(m,$,l,e,n,M);if(!(D===void 0?E($,m,pe|fe,r,M):D))return!1}}return!0}function W(e){return e===e&&!Q(e)}function me(e){for(var n=O(e),t=n.length;t--;){var r=n[t],a=e[r];n[t]=[r,a,W(a)]}return n}function H(e,n){return function(t){return t==null?!1:t[e]===n&&(n!==void 0||e in Object(t))}}function he(e){var n=me(e);return n.length==1&&n[0][2]?H(n[0][0],n[0][1]):function(t){return t===e||de(t,e,n)}}function ge(e,n){return e!=null&&n in Object(e)}function ve(e,n,t){n=J(n,e);for(var r=-1,a=n.length,s=!1;++r<a;){var o=S(n[r]);if(!(s=e!=null&&t(e,o)))break;e=e[o]}return s||++r!=a?s:(a=e==null?0:e.length,!!a&&X(a)&&Y(o,a)&&(L(e)||Z(e)))}function be(e,n){return e!=null&&ve(e,n,ge)}var ye=1,_e=2;function we(e,n){return F(e)&&W(n)?H(S(e),n):function(t){var r=h(t,e);return r===void 0&&r===n?be(t,e):E(n,r,ye|_e)}}function Re(e){return function(n){return n==null?void 0:n[e]}}function xe(e){return function(n){return j(n,e)}}function Ce(e){return F(e)?Re(S(e)):xe(e)}function Pe(e){return typeof e=="function"?e:e==null?ce:typeof e=="object"?L(e)?we(e[0],e[1]):he(e):Ce(e)}function Oe(e){return function(n,t,r){for(var a=-1,s=Object(n),o=r(n),i=o.length;i--;){var l=o[e?i:++a];if(t(s[l],l,s)===!1)break}return n}}var Se=Oe();const Ae=Se;function $e(e,n){return e&&Ae(e,n,O)}function Me(e,n){return ee(n,function(t){return e[t]})}function De(e){return e==null?[]:Me(e,O(e))}function ke(e,n){var t={};return n=Pe(n),$e(e,function(r,a,s){ne(t,a,n(r,a,s))}),t}const Be="DemoA",Ie="演示组件 DemoA",Ee="/cover/default.png",Le="./components-async/DemoA/Main.vue",Fe=Object.freeze(Object.defineProperty({__proto__:null,cover:Ee,name:Be,path:Le,title:Ie},Symbol.toStringTag,{value:"Module"})),We="DemoB",He="演示组件 DemoB",Te="/cover/default.png",ze="./components-async/DemoB/Main.vue",Ge=Object.freeze(Object.defineProperty({__proto__:null,cover:Te,name:We,path:ze,title:He},Symbol.toStringTag,{value:"Module"})),Ne="ImageRender",Ue="图片",Ve="/cover/default.png",qe="./components-async/ImageRender/Main.vue",Ke=Object.freeze(Object.defineProperty({__proto__:null,cover:Ve,name:Ne,path:qe,title:Ue},Symbol.toStringTag,{value:"Module"})),Qe={class:"flex items-center justify-center w-full h-full p-2 bg-indigo-500 rounded"},Je=I("span",{class:"block text-4xl text-white i-icon-park-outline-game-ps"},null,-1),Xe=[Je],Ye=d({name:"DemoPlay",__name:"Main",setup(e){return(n,t)=>(p(),f("div",Qe,Xe))}}),Ze="DemoPlay",je="演示组件 DemoPlay",en="/cover/default.png",nn=Object.freeze(Object.defineProperty({__proto__:null,component:Ye,cover:en,name:Ze,title:je},Symbol.toStringTag,{value:"Module"})),tn=Object.assign({"./components-async/DemoA/Main.vue":()=>w(()=>import("./Main-83473373-b4e6d4ba.js"),["assets/Main-83473373-b4e6d4ba.js","assets/index-dbd97f2c.js","assets/index-33f83179.css"]),"./components-async/DemoB/Main.vue":()=>w(()=>import("./Main-32016457-f3ca4558.js"),["assets/Main-32016457-f3ca4558.js","assets/index-dbd97f2c.js","assets/index-33f83179.css"]),"./components-async/ImageRender/Main.vue":()=>w(()=>import("./Main-e3edf356-744088d0.js"),["assets/Main-e3edf356-744088d0.js","assets/index-dbd97f2c.js","assets/index-33f83179.css"])}),rn=Object.assign({"./components-async/DemoA/define.ts":Fe,"./components-async/DemoB/define.ts":Ge,"./components-async/ImageRender/define.ts":Ke}),an=De(rn).map(e=>({componentLoader:tn[e.path],cover:e.cover,name:e.name,title:e.title})),Pn=[...an,nn],sn=d({name:"CraftBoxContentRender",props:{components:{required:!0,type:Array},config:{required:!0,type:Object}},setup(e){const n=u(()=>h(e.config,"name","")),t=u(()=>h(e.config,"props",{})),r=u(()=>h(e.config,"slots")),a=u(()=>{if(e.config){const i=e.components.find(l=>l.name===n.value);if(i){const l=i.componentLoader;if(ue(l))return l}}return null}),s=u(()=>{if(e.config){const i=e.components.find(l=>l.name===n.value);if(i){const l=i.component;if(l)return l}}return null}),o=u(()=>{if(a.value){const i=a.value;return q(()=>i())}else return null});return()=>{const i=T({components:e.components,slots:r.value});return a.value?v(o.value,t.value,i):s.value?v(s.value,t.value,i):null}}});function T({slots:e,components:n}){let t={};return e&&(t=ke(e,r=>()=>r.map(a=>v(sn,{components:n,config:a})))),t}const on=d({name:"CraftBoxPlaceholder",__name:"BoxPlaceholder",setup(e){const n=b({backgroundColor:"#ffffff",backgroundImage:"repeating-linear-gradient(45deg, #e5e5e5 25%, transparent 25%, transparent 75%, #e5e5e5 75%, #e5e5e5), repeating-linear-gradient(45deg, #e5e5e5 25%, #ffffff 25%, #ffffff 75%, #e5e5e5 75%, #e5e5e5)",backgroundPosition:"0 0, 5px 5px",backgroundSize:"10px 10px",borderColor:A.gray[300],borderRadius:"4px",borderStyle:"dashed",borderWidth:"1px",bottom:0,left:0,position:"absolute",right:0,top:0});return(t,r)=>(p(),f("div",{class:g(c(n))},null,2))}}),ln=d({name:"CraftBoxContentRender",props:{box:{required:!0,type:Object},components:{required:!0,type:Array}},setup(e,{slots:n}){const t=u(()=>h(e.box,"slots")),r=u(()=>te(t.value)&&Object.keys(t.value).some(s=>re(t.value[s]))),a=u(()=>ae({boxProps:e.box.props}));return()=>{var s;const o=(s=n.box)==null?void 0:s.call(n,{box:e.box,id:e.box.id,name:e.box.props.name});return v("div",{class:"absolute inset-0",style:a.value},se(o)?o:r.value?T({components:e.components,slots:t.value}):v(on))}},slots:Object});function un(e,{wrapperRef:n,containerRef:t}){const r=u(()=>{let o=1;switch(e.data.props.fit){case"height":o=e.sceneHeight/e.data.height;break;case"width":o=e.sceneWidth/e.data.width;break;case"contain":o=Math.min(e.sceneWidth/e.data.width,e.sceneHeight/e.data.height);break;case"cover":o=Math.max(e.sceneWidth/e.data.width,e.sceneHeight/e.data.height);break;case"source":o=1;break}return o}),a=u(()=>e.data.height*r.value),s=u(()=>e.data.width*r.value);return{containerRef:t,data:u(()=>e.data),displayHeight:a,displayWidth:s,scale:r,sceneHeight:u(()=>e.sceneHeight),sceneWidth:u(()=>e.sceneWidth),wrapperRef:n}}function cn(e){const n=b({alignItems:"center",display:"flex",justifyContent:"center"}),t=u(()=>({height:`${e.displayHeight.value}px`,width:`${e.displayWidth.value}px`})),r=b({flexGrow:0,flexShrink:0,position:"relative"}),a=u(()=>({...oe({boardProps:e.data.value.props}),backgroundColor:A.white,height:`${e.data.value.height}px`,transform:`scale(${e.scale.value})`,transformOrigin:"center center",width:`${e.data.value.width}px`}));return P({containerClass:r,containerStyle:a,wrapperClass:n,wrapperStyle:t})}const pn={};function fn(e){const n=_(),t=_(),r=un(e,{containerRef:t,wrapperRef:n}),a=cn(r);return{containerRef:t,state:r,style:a,wrapperRef:n}}const dn=d({name:"CraftRenderBoard",__name:"RenderBoard",props:x({data:{},sceneHeight:{},sceneWidth:{}},pn),setup(e,{expose:n}){const t=e,{wrapperRef:r,containerRef:a,style:s,state:o}=fn(t);return n({state:o}),(i,l)=>(p(),f("div",{ref_key:"wrapperRef",ref:r,class:g(c(s).wrapperClass),style:y(c(s).wrapperStyle)},[I("div",{ref_key:"containerRef",ref:a,class:g(c(s).containerClass),style:y(c(s).containerStyle)},[C(i.$slots,"default")],6)],6))}});function mn(e,{wrapperRef:n}){return{data:u(()=>e.data),wrapperRef:n}}function hn(e){const n=b({position:"absolute"}),t=u(()=>({height:`${e.data.value.height}px`,left:`${e.data.value.left}px`,top:`${e.data.value.top}px`,width:`${e.data.value.width}px`}));return P({wrapperClass:n,wrapperStyle:t})}const gn={};function vn(e){const n=_(),t=mn(e,{wrapperRef:n}),r=hn(t);return{state:t,style:r,wrapperRef:n}}const bn=d({name:"CraftRenderBox",__name:"RenderBox",props:x({data:{}},gn),setup(e,{expose:n}){const t=e,{wrapperRef:r,style:a,state:s}=vn(t);return n({state:s}),(o,i)=>(p(),f("div",{ref_key:"wrapperRef",ref:r,class:g(c(a).wrapperClass),style:y(c(a).wrapperStyle)},[C(o.$slots,"default")],6))}});function yn(e,{wrapperRef:n}){const{width:t,height:r}=ie(n);return{components:u(()=>e.components),data:u(()=>e.data),sceneHeight:r,sceneWidth:t,wrapperRef:n}}function _n(e){const n=b({backgroundColor:A.gray[100],height:"100%",position:"relative",width:"100%"}),t=u(()=>le({boardProps:e.data.value.board.props,sceneProps:e.data.value.scene.props}));return P({wrapperClass:n,wrapperStyle:t})}const wn={components:()=>[]};function Rn(e){const n=_(),t=yn(e,{wrapperRef:n}),r=_n(t);return{state:t,style:r,wrapperRef:n}}const On=d({name:"CraftRender",__name:"Render",props:x({data:{},components:{}},wn),setup(e,{expose:n}){const t=e,{wrapperRef:r,style:a,state:s}=Rn(t);return n({state:s}),(o,i)=>(p(),f("div",{ref_key:"wrapperRef",ref:r,class:g(c(a).wrapperClass),style:y(c(a).wrapperStyle)},[k(c(dn),{data:c(s).data.value.board,"scene-height":c(s).sceneHeight.value,"scene-width":c(s).sceneWidth.value},{default:R(()=>[(p(!0),f(B,null,z(c(s).data.value.boxes,l=>(p(),f(B,{key:l.id},[l.props.visible?(p(),G(c(bn),{key:0,data:l},{default:R(()=>[k(c(ln),{box:l,components:c(s).components.value},{box:R(m=>[C(o.$slots,"box",N(U(m)))]),_:2},1032,["box","components"])]),_:2},1032,["data"])):V("",!0)],64))),128))]),_:3},8,["data","scene-height","scene-width"])],6))}});export{ln as K,On as h,Pn as w};
