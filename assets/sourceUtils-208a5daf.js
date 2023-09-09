import{co as m,cp as p,U as g,cq as y,cr as w,cs as f,_}from"./index-694ce44d.js";class I{constructor(){this.code=null,this.description=null}}class b{constructor(n){this.error=new I,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=n}}function d(e){return new b(e)}class v{constructor(n){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=n}}function V(e){return new v(e)}const a=new Set;function j(e,n,i,h=!1,u){a.clear();for(const s in i){const t=e.get(s);if(!t)continue;const l=i[s],r=q(t,l);if(r!==l&&u&&u.push({name:"invalid-value-type",message:"attribute value was converted to match the field type",details:{field:t,originalValue:l,sanitizedValue:r}}),a.add(t.name),t&&(h||t.editable)){const c=m(t,r);if(c)return d(p(c,t,r));n[t.name]=r}}for(const s of(e==null?void 0:e.requiredFields)??[])if(!a.has(s.name))return d(`missing required field "${s.name}"`);return null}function q(e,n){let i=n;return typeof n=="string"&&g(e)?i=parseFloat(n):n!=null&&y(e)&&typeof n!="string"&&(i=String(n)),w(i)}let o;function F(e,n){if(!e||!f(n))return e;if("rings"in e||"paths"in e){if(o==null)throw new TypeError("geometry engine not loaded");return o.simplify(n,e)}return e}async function P(){return o==null&&(o=await _(()=>import("./geometryEngineJSON-0b85ed2d.js"),["assets/geometryEngineJSON-0b85ed2d.js","assets/geometryEngineBase-663354d9.js","assets/index-694ce44d.js","assets/index-e81f504d.css","assets/geometryEngineJSON-a8bb0837.js","assets/json-48e3ea08.js"])),o}async function G(e,n){!f(e)||n!=="esriGeometryPolygon"&&n!=="esriGeometryPolyline"||await P()}export{V as c,j as d,F as h,d as u,G as y};
