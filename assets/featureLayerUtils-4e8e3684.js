import{s as x,dh as y,di as E,T as n,dj as L,dk as K,az as F,a7 as R,aV as j,dl as D}from"./index-7af450d7.js";import{i as f}from"./originUtils-1469eeaf.js";import z from"./FeatureLayer-319285dc.js";import{r as q}from"./fetchService-24afbc84.js";import{o as w}from"./jsonContext-214dada0.js";import{i as c,a as M,u as I,l as m}from"./portalItemUtils-dccd86d0.js";import"./multiOriginJSONSupportUtils-c978f4c3.js";import"./UniqueValueRenderer-ae66d11f.js";import"./LegendOptions-b705a3af.js";import"./diffUtils-e1a6fe87.js";import"./SizeVariable-cf2f4876.js";import"./colorRamps-7576a038.js";import"./lengthUtils-e64d76bb.js";import"./ColorStop-883f8268.js";import"./featureFlags-78d5fc35.js";import"./styleUtils-739c5f34.js";import"./jsonUtils-682433dd.js";import"./DictionaryLoader-67337d0e.js";import"./LRUCache-cbaf1d46.js";import"./Version-8dc7cd3d.js";import"./FieldsIndex-1b2afc91.js";import"./heatmapUtils-73c81fd5.js";import"./MultiOriginJSONSupport-e7108a96.js";import"./LabelClass-411c9c4e.js";import"./labelUtils-623797c2.js";import"./defaultsJSON-b087dd4d.js";import"./FeatureLayerBase-d7bab8c2.js";import"./Field-fc2bd34d.js";import"./fieldType-37e9db9e.js";import"./commonProperties-6df6e9c8.js";import"./ElevationInfo-01ca0eb8.js";import"./featureLayerUtils-32d2df52.js";import"./AttachmentQuery-369a7bf2.js";import"./Query-4c693c57.js";import"./RelationshipQuery-e08691fd.js";import"./serviceCapabilitiesUtils-bb1dfa3f.js";import"./editsZScale-3b71ac13.js";import"./queryZScale-beb984cb.js";import"./FeatureSet-304f2314.js";import"./APIKeyMixin-973fd1e3.js";import"./ArcGISService-864476a0.js";import"./BlendLayer-c340bf2a.js";import"./jsonUtils-42356934.js";import"./parser-6c4b5959.js";import"./CustomParametersMixin-2761d37f.js";import"./EditBusLayer-863d7222.js";import"./FeatureEffectLayer-3598deb6.js";import"./FeatureEffect-2bbd4e53.js";import"./FeatureReductionLayer-27eafd0b.js";import"./clusterUtils-66bf1196.js";import"./OperationalLayer-e9632b36.js";import"./OrderedLayer-8b6c10f8.js";import"./PortalLayer-3cc055a3.js";import"./RefreshableLayer-d99e4996.js";import"./ScaleRangeLayer-561bf95e.js";import"./TemporalLayer-ff769747.js";import"./FeatureTemplate-8916744f.js";import"./FeatureType-67661609.js";import"./fieldProperties-c1ed8f4a.js";import"./labelingInfo-58602860.js";import"./versionUtils-60748a92.js";import"./styleUtils-f88ffca3.js";import"./TopFeaturesQuery-e7fbfaaf.js";import"./popupUtils-5a880190.js";const U=x.getLogger("esri.layers.FeatureLayer"),d="Feature Service";function u(t,a){return`Layer (title: ${t.title}, id: ${t.id}) of type '${t.declaredClass}' ${a}`}function g(t,a){if(a.type!==d)throw new n("feature-layer:portal-item-wrong-type",u(t,`should have portal item of type "${d}"`))}async function A(t){if(await t.load(),E(t))throw new n("feature-layer:save",u(t,"using an in-memory source cannot be saved to a portal item"))}function Y(t,a){let r=(t.messages??[]).filter(({type:e})=>e==="error").map(({name:e,message:s,details:o})=>new n(e,s,o));if(a!=null&&a.ignoreUnsupported&&(r=r.filter(({name:e})=>e!=="layer:unsupported"&&e!=="symbol:unsupported"&&e!=="symbol-layer:unsupported"&&e!=="property:unsupported"&&e!=="url:unsupported")),r.length>0)throw new n("feature-layer:save","Failed to save feature layer due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:r})}async function h(t,a,r){"beforeSave"in t&&typeof t.beforeSave=="function"&&await t.beforeSave();const e=t.write({},a);return Y(a,r),e}function J(t){const{layer:a,layerJSON:r}=t;return a.isTable?{layers:[],tables:[r]}:{layers:[r],tables:[]}}function v(t){c(t,m.JSAPI),t.typeKeywords&&(t.typeKeywords=t.typeKeywords.filter((a,r,e)=>e.indexOf(a)===r))}function _(t){const a=t.portalItem;if(!a)throw U.error("save: requires the portalItem property to be set"),new n("feature-layer:portal-item-not-set",u(t,"requires the portalItem property to be set"));if(!a.loaded)throw new n("feature-layer:portal-item-not-loaded",u(t,"cannot be saved to a portal item that does not exist or is inaccessible"));g(t,a)}async function N(t,a){return/\/\d+\/?$/.test(t.url??"")?J(a[0]):k(t,a)}async function k(t,a){const{layer:{url:r,customParameters:e,apiKey:s}}=a[0];let o=await t.fetchData("json");o&&o.layers!=null&&o.tables!=null||(o=await B(o,{url:r??"",customParameters:e,apiKey:s},a.map(i=>i.layer.layerId)));for(const i of a)O(i.layer,i.layerJSON,o);return o}async function B(t,a,r){t||(t={}),t.layers||(t.layers=[]),t.tables||(t.tables=[]);const{url:e,customParameters:s,apiKey:o}=a,{serviceJSON:i,layersJSON:l}=await q(e,{customParameters:s,apiKey:o}),p=S(t.layers,i.layers,r),b=S(t.tables,i.tables,r);t.layers=p.itemResources,t.tables=b.itemResources;const T=[...p.added,...b.added],P=l?[...l.layers,...l.tables]:[];return await C(t,T,e,P),t}function S(t,a,r){const e=L(t,a,(o,i)=>o.id===i.id);t=t.filter(o=>!e.removed.some(i=>i.id===o.id));const s=e.added.map(({id:o})=>({id:o}));return s.forEach(({id:o})=>{t.push({id:o})}),{itemResources:t,added:s.filter(({id:o})=>!r.includes(o))}}async function C(t,a,r,e){const s=a.map(({id:o})=>new z({url:r,layerId:o,sourceJSON:e.find(({id:i})=>i===o)}));await K(s.map(o=>o.load())),s.forEach(o=>{const{layerId:i,loaded:l,defaultPopupTemplate:p}=o;!l||p==null||O(o,{id:i,popupInfo:p.toJSON()},t)})}function O(t,a,r){t.isTable?$(r.tables,a):$(r.layers,a)}function $(t,a){if(!t)return;const r=t.findIndex(({id:e})=>e===a.id);r===-1?t.push(a):t[r]=a}function G(t){const{portalItem:a}=t;return D(t)&&!t.dynamicDataSource&&!!(a!=null&&a.loaded)&&a.type===d}async function V(t){if(!(t!=null&&t.length))throw new n("feature-layer-utils-saveall:missing-parameters","'layers' array should contain at least one feature layer");await Promise.all(t.map(e=>e.load()));for(const e of t)if(!G(e))throw new n("feature-layer-utils-saveall:invalid-parameters",`'layers' array should only contain layers or tables in a feature service loaded from 'Feature Service' item. ${u(e,"does not conform")}`,{layer:e});const a=t.map(e=>e.portalItem.id);if(new Set(a).size>1)throw new n("feature-layer-utils-saveall:invalid-parameters","All layers in the 'layers' array should be loaded from the same portal item");const r=t.map(e=>e.layerId);if(new Set(r).size!==r.length)throw new n("feature-layer-utils-saveall:invalid-parameters","'layers' array should contain only one instance each of layer or table in a feature service")}function H(t,a){let r=F.from(a);return r.id&&(r=r.clone(),r.id=null),r.type??(r.type=d),r.portal??(r.portal=R.getDefault()),g(t,r),r}async function Q(t,a){const{url:r,layerId:e,title:s,fullExtent:o,isTable:i}=t,l=j(r),p=l!=null&&l.serverType==="FeatureServer";a.url=p?r:`${r}/${e}`,a.title||(a.title=s),a.extent=null,i||o==null||(a.extent=await M(o)),I(a,m.METADATA),I(a,m.MULTI_LAYER),c(a,m.SINGLE_LAYER),i&&c(a,m.TABLE),v(a)}async function W(t,a,r){var s;const e=t.portal;await(e==null?void 0:e.signIn()),await((s=e==null?void 0:e.user)==null?void 0:s.addItem({item:t,data:a,folder:r==null?void 0:r.folder}))}const ma=y(X);async function X(t,a){await A(t),_(t);const r=t.portalItem,e=w(r),s=await h(t,e,a),o=await N(r,[{layer:t,layerJSON:s}]);return v(r),await r.update({data:o}),f(e),r}const ua=y(async(t,a)=>{await V(t);const r=t[0].portalItem,e=w(r),s=await Promise.all(t.map(i=>h(i,e,a))),o=await N(r,t.map((i,l)=>({layer:i,layerJSON:s[l]})));return v(r),await r.update({data:o}),await Promise.all(t.slice(1).map(i=>i.portalItem.reload())),f(e),r.clone()}),da=y(Z);async function Z(t,a,r){await A(t);const e=H(t,a),s=w(e),o=J({layer:t,layerJSON:await h(t,s,r)});return await Q(t,e),await W(e,o,r),t.portalItem=e,f(s),e}export{ma as save,ua as saveAll,da as saveAs};