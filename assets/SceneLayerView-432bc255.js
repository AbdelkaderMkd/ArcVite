import{bw as B,cK as S,d3 as Q,aQ as c,aT as U,aR as p,aw as D,ph as W,aW as Y,pi as H,d5 as J,d7 as X,cu as Z,dh as ee,ba as te,dj as ne,ea as T,e1 as R,ci as re,dS as C,df as se,dg as ie,dQ as oe}from"./index-383689b1.js";import{n as v}from"./FeatureLikeLayerView3D-56ecbb88.js";import{a as ae,n as le,u as de}from"./DefinitionExpressionSceneLayerView-6b323f7c.js";import{d as ue}from"./LayerView-fd5dbfea.js";const ce={setAttribute(){},setGeometry(e){},rollback(){},commit(){}};var E;function Ee(e,n){const t=n.attributes[e.objectIdField],r=e.sessions.get(t);if(r)return r;const s=B(n.attributes),o=new Set;if(t==null)return ce;const l=e.i3sOverrides.createInteractiveEditSession(t),i=new Map,y=(m,b)=>{const f=i.get(m);if(f==null){const d=b.indexOf(t);return i.set(m,d),d}return f};let a=E.EDITING;const g={setAttribute(m,b){if(a!==E.EDITING)return;const f=e.fieldsIndex.get(m);if(!f)return;const d=e.attributeStorageInfo.findIndex(F=>F.name===f.name);if(d<0)return;l.setAttribute(d,b);const u=e.attributeStorageInfo[d];let h=!1;o.add(m),e.forEachNode((F,_)=>{const A=y(F,_);if(A===-1)return;const N=e.getAttributeData(F.index);if(N){const O=N[u.name];O&&(O[A]=b,e.setAttributeData(F.index,N,n),h=!0)}}),h&&e.clearMemCache()},setGeometry(m){a===E.EDITING&&l.setGeometry(m)},rollback(){if(a===E.EDITING){for(const m of o)this.setAttribute(m,s[m]);l.rollback(),a=E.ROLLED_BACK,e.sessions.delete(t)}},commit(){a===E.EDITING&&(l.commit(),a=E.COMMITTED,e.sessions.delete(t))}};return e.sessions.set(t,g),g}function xe(e,n){var f;const t=e.fieldsIndex,r=e.objectIdField,s=e.globalIdField;if(s==null)return;const o=new Map,l=G(n.addedFeatures),i=n.edits.addFeatures,y=L(n.updatedFeatures),a=n.edits.updateFeatures,g=me(t,r,s,(f=n.edits)==null?void 0:f.deleteFeatures),m=L(n.deletedFeatures,g),b=n.edits.deleteFeatures;if(i!=null&&i.length>0)for(const d of i){const u=v(t,d.attributes,s),h=l.get(u);d.geometry!=null&&d.geometry.type==="mesh"&&h!=null&&o.set(h,d.geometry)}if(a!=null&&a.length>0)for(const d of a){const u=v(t,d.attributes,r);d.geometry!=null&&d.geometry.type==="mesh"&&y.has(u)&&o.set(u,d.geometry)}if(b!=null&&b.length>0)for(const d of b){let u=null;u="attributes"in d?v(t,d.attributes,r):d.objectId,u!=null&&m.has(u)&&o.set(u,null)}for(const[d,u]of o)e.i3sOverrides.updateGeometry(d,u)}function ve(e,n){var b;const t=pe(e,n),r=fe(e,n);if(t.size===0&&r.size===0)return;const s=new Map;for(let f=0;f<e.attributeStorageInfo.length;f++)s.set(e.attributeStorageInfo[f].name,f);let o=!1;t.forEach((f,d)=>{const u=e.getAttributeData(d);let h=!1;f.forEach((F,_)=>{const A=u!=null?u[_]:null,N=s.get(_);for(const{featureIndex:O,value:M,featureId:K}of F)A&&(A[O]=M,h=!0,o=!0),e.i3sOverrides.updateAttributeValue(K,N,M)}),h&&e.setAttributeData(d,u,null)}),o&&e.clearMemCache();const{fieldsIndex:l,i3sOverrides:i,objectIdField:y,globalIdField:a}=e,g=(b=i.layer.associatedLayer)==null?void 0:b.infoFor3D,m=new Set(g?[...Object.values(g.assetMapFieldRoles),...Object.values(g.transformFieldRoles)]:[]);for(const[f,d]of r){i.featureAdded(f);const{attributes:u}=d;for(const h in u){if(h!==y&&h!==a&&m.has(h))continue;const F=l.normalizeFieldName(h),_=F!=null?s.get(F):null;if(_==null)continue;const A=u[h];i.updateAttributeValue(f,_,A)}}}function fe(e,{edits:n,addedFeatures:t}){const r=new Map,s=n.addAssetFeatures,{fieldsIndex:o,globalIdField:l}=e;if(!s||s.length===0||l==null)return r;const i=G(t);for(const y of s){const a=v(o,y.attributes,l),g=i.get(a);y.geometry!=null&&y.geometry.type==="mesh"&&g!=null&&r.set(g,y)}return r}function pe(e,n){const t=n.edits.updateFeatures;if(!t||t.length===0)return new q;const r=L(n.updatedFeatures),s=new q,o=new Map;for(let a=0;a<e.attributeStorageInfo.length;a++)o.set(e.attributeStorageInfo[a].name,a);const l=e.fieldsIndex,i=e.objectIdField,y=t.filter(a=>{const g=v(l,a.attributes,i);return r.has(g)});return e.forEachNode((a,g)=>{const m=new Set(g);for(const b of y){const f=v(l,b.attributes,i);if(!m.has(f))continue;const d=g.indexOf(f);for(const u in b.attributes){const h=e.fieldsIndex.normalizeFieldName(u),F=ye(s,a.index,h),_=b.attributes[u];F.push({featureIndex:d,featureId:f,value:_})}}}),s}function ye(e,n,t){const r=ge(e,n),s=t!=null&&r.get(t);if(s)return s;const o=new Array;return r.set(t,o),o}function ge(e,n){const t=e.get(n);if(t)return t;const r=new he;return e.set(n,r),r}function me(e,n,t,r){const s=new Map;if(!r)return s;for(const o of r){let l=null,i=null;"attributes"in o?(l=v(e,o.attributes,n),i=v(e,o.attributes,t)):(l=o.objectId,i=o.globalId),i!=null&&l!=null&&s.set(i,l)}return s}function G(e){const n=new Map;if(!e)return n;for(const t of e)t.globalId!=null&&t.objectId!=null&&t.error==null&&n.set(t.globalId,t.objectId);return n}function L(e,n=null){const t=new Set;if(!e)return t;for(const r of e)if(r.error==null){if(r.objectId!=null&&r.objectId!==-1)t.add(r.objectId);else if(r.globalId!=null&&n!=null){const s=n.get(r.globalId);s!=null&&t.add(s)}}return t}(function(e){e[e.EDITING=0]="EDITING",e[e.ROLLED_BACK=1]="ROLLED_BACK",e[e.COMMITTED=2]="COMMITTED"})(E||(E={}));const he=Map,q=Map;function Ae(){return{requiredFields:{type:[String],readOnly:!0},availableFields:{type:[String],readOnly:!0,get:function(){const{layer:e,layer:{fieldsIndex:n},requiredFields:t}=this;return e.outFields?S(n,[...Q(n,e.outFields),...t]):S(n,t)}}}}const V=e=>{let n=class extends e{constructor(){super(...arguments),this._numUpdating=0,this._asyncUpdateState=new Map}get updating(){return this._numUpdating>0}autoUpdateAsync(t,r){return be(s=>this._updateAsync(t,s),r)}async _updateAsync(t,r){if(!this._startAsyncUpdate(t)){try{const s=await r();this._set(t,s)}catch{D.getLogger(this).warn(`Async update of "${String(t)}" failed. Async update functions should not throw exceptions.`)}this._endAsyncUpdate(t)&&this._updateAsync(t,r)}}_startAsyncUpdate(t){const r=this._asyncUpdateState.get(t)??w.None;return r&w.Updating?(this._asyncUpdateState.set(t,r|w.Invalidated),!0):(++this._numUpdating,this._asyncUpdateState.set(t,r|w.Updating),!1)}_endAsyncUpdate(t){--this._numUpdating;const r=(this._asyncUpdateState.get(t)??w.None)&~w.Updating;return r&w.Invalidated?(this._asyncUpdateState.set(t,r&~w.Invalidated),!0):(this._asyncUpdateState.set(t,r),!1)}};return c([p({readOnly:!0})],n.prototype,"updating",null),c([p()],n.prototype,"_numUpdating",void 0),n=c([U("esri.core.AsyncUpdate")],n),n};var w;function be(e,n){const t=()=>{o&&!l&&e(r)},r=()=>{if(!o||l)return n();o.clear(),l=!0;const i=H(o,n);return l=!1,i},s=()=>{o&&(o.destroy(),o=null)};let o=new W(t),l=!1;return e(r),{remove:s}}(function(e){e[e.None=0]="None",e[e.Updating=1]="Updating",e[e.Invalidated=2]="Invalidated"})(w||(w={}));let P=class extends V(Y){};P=c([U("esri.core.AsyncUpdate")],P);const k="esri.views.3d.layers.support.SceneLayerViewRequiredFields";let x=class extends V(Z){get layer(){return this.layerView.layer}get requiredFields(){const{layerView:{layer:{fieldsIndex:e},definitionExpressionFields:n},rendererFields:t,labelingFields:r,viewFilterFields:s}=this;return S(e,[...n??[],...t??[],...r??[],...s??[]])}constructor(e){super(e)}initialize(){this.handles.add([this.autoUpdateAsync("rendererFields",async()=>{const{fieldsIndex:e,renderer:n}=this.layer;return n?j(t=>n.collectRequiredFields(t,e)):null}),this.autoUpdateAsync("labelingFields",async()=>{const{layer:e}=this;return e.labelsVisible?j(n=>J(n,e)):null}),this.autoUpdateAsync("viewFilterFields",()=>{const{layer:e,filter:n}=this.layerView;return j(t=>X(t,e,n))})])}};async function j(e){const n=new Set;try{return await e(n),Array.from(n).sort()}catch(t){return D.getLogger(k).error(t),null}}c([p()],x.prototype,"layerView",void 0),c([p()],x.prototype,"layer",null),c([p()],x.prototype,"requiredFields",null),c([p()],x.prototype,"rendererFields",void 0),c([p()],x.prototype,"labelingFields",void 0),c([p()],x.prototype,"viewFilterFields",void 0),x=c([U(k)],x);const z="esri.views.layers.SceneLayerView",$=D.getLogger(z);let I=class extends ue{constructor(){super(...arguments),this.layer=null,this.filter=null,this._geometryEngine=null,this._projectionEngineLoaded=!1,this._abortController=new AbortController}get availableFields(){return[]}get maximumNumberOfFeatures(){return 0}set maximumNumberOfFeatures(e){throw new Error("Not implemented")}get maximumNumberOfFeaturesExceeded(){return!1}get layerFilter(){return ae(this._layerFilter)}get _layerFilter(){const e=this.layer.filter;if(e==null||e.geometries.length<1)return null;const n=this._geometryEngine;if(n==null||!this._projectionEngineLoaded&&this._filterNeedsProjectionEngine)return le;const t=e.geometries.at(0).spatialReference,r=e.geometries.toArray().map(i=>{try{i=n.simplify(i)}catch{return $.warnOncePerTick("Failed to simplify scene filter mask polygon. Polygon will be ignored."),null}if(i==null)return null;if(i.spatialReference.equals(t))return i;try{return ee(i,t)}catch{return $.warnOncePerTick("Failed to project scene filter mask polygon. Polygon will be ignored."),null}}).filter(te).sort((i,y)=>i.extent.xmin-y.extent.xmin),s=new Set,o=new Array,l=new Array;for(let i of r){const y=i.extent.xmin;if(o.length=0,s.forEach(a=>{if(y>=a.extent.xmax)return l.push(a),void s.delete(a);i.extent.ymin<=a.extent.ymax&&i.extent.ymax>=a.extent.ymin&&n.intersects(i,a)&&o.push(a)}),o.length>0){o.push(i);try{i=n.union(o)}catch{$.warnOncePerTick("Failed to unify filter mask polygons. Polygon will be ignored.");continue}o.pop(),o.forEach(a=>s.delete(a))}s.add(i)}return s.forEach(i=>l.push(i)),l.length>0?{spatialRelationship:e.spatialRelationship,geometries:l}:null}get _filterNeedsProjectionEngine(){const e=this.layer.filter;if(e==null||e.geometries.length<=1)return!1;const n=e.geometries.at(0).spatialReference;return e.geometries.some(({spatialReference:t})=>!t.equals(n)&&!ne(t,n))}get layerFilterUpdating(){return de(this._layerFilter)}initialize(){const{signal:e}=this._abortController;T(()=>{var n,t,r;return this.destroyed||!this._geometryEngine&&((r=(t=(n=this.layer)==null?void 0:n.filter)==null?void 0:t.geometries)==null?void 0:r.length)},e).then(async()=>{R(e),this._geometryEngine=await re(()=>import("./geometryEngine-2dda1ca3.js"),["assets/geometryEngine-2dda1ca3.js","assets/geometryEngineBase-d78b1422.js","assets/index-383689b1.js","assets/index-90fc0cd1.css","assets/hydrated-6f78e8b6.js"])}).catch(C),this._projectionEngineLoaded=se(),T(()=>this.destroyed||!this._projectionEngineLoaded&&this._filterNeedsProjectionEngine,e).then(async()=>{R(e),await ie(),this._projectionEngineLoaded=!0}).catch(C)}destroy(){this._abortController=oe(this._abortController)}highlight(e){throw new Error("Not implemented")}queryFeatures(e,n){throw new Error("Not implemented")}queryObjectIds(e,n){throw new Error("Not implemented")}queryFeatureCount(e,n){throw new Error("Not implemented")}createQuery(){throw new Error("Not implemented")}queryExtent(e,n){throw new Error("Not implemented")}};c([p()],I.prototype,"layer",void 0),c([p()],I.prototype,"availableFields",null),c([p()],I.prototype,"maximumNumberOfFeatures",null),c([p({readOnly:!0})],I.prototype,"maximumNumberOfFeaturesExceeded",null),c([p()],I.prototype,"filter",void 0),c([p({readOnly:!0})],I.prototype,"layerFilter",null),c([p({readOnly:!0})],I.prototype,"_layerFilter",null),c([p()],I.prototype,"_geometryEngine",void 0),c([p()],I.prototype,"_projectionEngineLoaded",void 0),c([p()],I.prototype,"_filterNeedsProjectionEngine",null),c([p()],I.prototype,"layerFilterUpdating",null),I=c([U(z)],I);const Oe=I;export{Ae as i,Oe as j,ve as l,x as p,Ee as r,xe as s};