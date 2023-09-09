import{aq as f,ar as p,as as b,at as h,au as g,av as v,aw as z}from"./index-694ce44d.js";import{c as w}from"./observers-e9dd433c.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.8.0
 */const y={icon:"icon",flipRtl:"flip-rtl"},m={},d={},u={s:16,m:24,l:32};async function C({icon:t,scale:e}){const s=u[e],n=I(t),a=n.charAt(n.length-1)==="F",i=`${a?n.substring(0,n.length-1):n}${s}${a?"F":""}`;if(m[i])return m[i];d[i]||(d[i]=fetch(z(`./assets/icon/${i}.json`)).then(r=>r.json()).catch(()=>(console.error(`"${i}" is not a valid calcite-ui-icon name`),"")));const o=await d[i];return m[i]=o,o}function I(t){const e=!isNaN(Number(t.charAt(0))),s=t.split("-");if(s.length>0){const a=/[a-z]/i;t=s.map((l,i)=>l.replace(a,function(r,c){return i===0&&c===0?r:r.toUpperCase()})).join("")}return e?`i${t}`:t}const x=":host{display:inline-flex;color:var(--calcite-ui-icon-color)}:host([scale=s]){block-size:1rem;inline-size:1rem;min-inline-size:1rem;min-block-size:1rem}:host([scale=m]){block-size:1.5rem;inline-size:1.5rem;min-inline-size:1.5rem;min-block-size:1.5rem}:host([scale=l]){block-size:2rem;inline-size:2rem;min-inline-size:2rem;min-block-size:2rem}.flip-rtl{transform:scaleX(-1)}.svg{display:block}:host([hidden]){display:none}[hidden]{display:none}",D=f(class extends p{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.icon=null,this.flipRtl=!1,this.scale="m",this.textLabel=void 0,this.pathData=void 0,this.visible=!1}connectedCallback(){this.waitUntilVisible(()=>{this.visible=!0,this.loadIconPathData()})}disconnectedCallback(){var t;(t=this.intersectionObserver)==null||t.disconnect(),this.intersectionObserver=null}async componentWillLoad(){this.loadIconPathData()}render(){const{el:t,flipRtl:e,pathData:s,scale:n,textLabel:a}=this,l=b(t),i=u[n],o=!!a,r=[].concat(s||"");return h(v,{"aria-hidden":g(!o),"aria-label":o?a:null,role:o?"img":null},h("svg",{"aria-hidden":"true",class:{[y.flipRtl]:l==="rtl"&&e,svg:!0},fill:"currentColor",height:"100%",viewBox:`0 0 ${i} ${i}`,width:"100%",xmlns:"http://www.w3.org/2000/svg"},r.map(c=>typeof c=="string"?h("path",{d:c}):h("path",{d:c.d,opacity:"opacity"in c?c.opacity:1}))))}async loadIconPathData(){const{icon:t,scale:e,visible:s}=this;!t||!s||(this.pathData=await C({icon:t,scale:e}))}waitUntilVisible(t){if(this.intersectionObserver=w("intersection",e=>{e.forEach(s=>{s.isIntersecting&&(this.intersectionObserver.disconnect(),this.intersectionObserver=null,t())})},{rootMargin:"50px"}),!this.intersectionObserver){t();return}this.intersectionObserver.observe(this.el)}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{icon:["loadIconPathData"],scale:["loadIconPathData"]}}static get style(){return x}},[1,"calcite-icon",{icon:[513],flipRtl:[516,"flip-rtl"],scale:[513],textLabel:[1,"text-label"],pathData:[32],visible:[32]}]);function k(){if(typeof customElements>"u")return;["calcite-icon"].forEach(e=>{switch(e){case"calcite-icon":customElements.get(e)||customElements.define(e,D);break}})}k();export{D as I,k as d};