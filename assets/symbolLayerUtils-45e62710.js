import{hQ as v,ay as n,co as y,f2 as p,hR as c,eW as w,hS as b,de as l}from"./index-3572d442.js";let s=h();function h(){return new v(50)}function B(){s=h()}async function T(r,o){var i,t;if((i=r.resource)!=null&&i.href)return _(r.resource.href).then(e=>[e.width,e.height]);if((t=r.resource)!=null&&t.primitive)return o!=null?[o,o]:[256,256];throw new n("symbol3d:invalid-symbol-layer","symbol layers of type Icon must have either an href or a primitive resource")}function _(r){return y(r,{responseType:"image"}).then(o=>o.data)}async function x(r,o=null){var t;if(!r.isPrimitive){const e=r.resource.href;if(!e)throw new n("symbol:invalid-resource","The symbol does not have a valid resource");const a=s.get(e);if(a!==void 0)return a;const{fetch:f}=await p(()=>import("./index-3572d442.js").then(d=>d.BM),["assets/index-3572d442.js","assets/index-0320859f.css"]),m=await f(e,{disableTextures:!0}),u=c(m.referenceBoundingBox,l());return s.put(e,u),u}if(!((t=r.resource)!=null&&t.primitive))throw new n("symbol:invalid-resource","The symbol does not have a valid resource");const i=w(b(r.resource.primitive));if(o!=null)for(let e=0;e<i.length;e++)i[e]*=o;return c(i,l())}export{B as clearBoundingBoxCache,T as computeIconLayerResourceSize,x as computeObjectLayerResourceSize};