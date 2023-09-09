import{cn as C,cY as K,a as u,b as c,aT as W,aU as Y,aM as N,N as X,cZ as ee,c as G,ap as Q,fC as te,j as M,aS as re,aP as se,eH as ie,aR as ne,h8 as ae,h9 as oe,a1 as le,P as ue,dh as pe,q as ye,T,V as ce,R as L,fw as he,cK as U,_ as fe,e_ as de,br as _,v as me,ha as ge,hb as be,dk as we,bh as ve}from"./index-694ce44d.js";import{n as A}from"./floorFilterUtils-080a7cd2.js";import{b as xe}from"./normalizeUtils-02a847e9.js";import{n as $e}from"./LabelClass-1bdf648f.js";import{n as Se}from"./sublayerUtils-5b1b7b1d.js";import{n as Re,p as Fe}from"./popupUtils-9a09e3b4.js";function P(e,t){return t?"xoffset"in t&&t.xoffset?Math.max(e,Math.abs(t.xoffset)):"yoffset"in t&&t.yoffset?Math.max(e,Math.abs(t.yoffset||0)):e:e}function Oe(e){let t=0,s=0;for(let i=0;i<e.length;i++){const r=e[i].size;typeof r=="number"&&(t+=r,s++)}return t/s}function H(e,t){return typeof e=="number"?e:e&&e.stops&&e.stops.length?Oe(e.stops):t}function je(e,t){if(!t)return e;const s=t.filter(a=>a.type==="size").map(a=>{const{maxSize:o,minSize:y}=a;return(H(o,e)+H(y,e))/2});let i=0;const r=s.length;if(r===0)return e;for(let a=0;a<r;a++)i+=s[a];const n=Math.floor(i/r);return Math.max(n,e)}function J(e){var r;const t=e&&e.renderer,s=(e&&e.event&&e.event.pointerType)==="touch"?9:6;if(!t)return s;const i="visualVariables"in t?je(s,t.visualVariables):s;if(t.type==="simple")return P(i,t.symbol);if(t.type==="unique-value"){let n=i;return(r=t.uniqueValueInfos)==null||r.forEach(a=>{n=P(n,a.symbol)}),n}if(t.type==="class-breaks"){let n=i;return t.classBreakInfos.forEach(a=>{n=P(n,a.symbol)}),n}return t.type==="dot-density"||t.type,i}const z=e=>e.spatialReference.wkid||JSON.stringify(e.spatialReference);function Ee(e,t){const{dpi:s,gdbVersion:i,geometry:r,geometryPrecision:n,height:a,layerOption:o,mapExtent:y,maxAllowableOffset:l,returnFieldName:p,returnGeometry:h,returnUnformattedValues:f,returnZ:R,spatialReference:x,timeExtent:$,tolerance:m,width:F}=e.toJSON(),{dynamicLayers:b,layerDefs:w,layerIds:v}=Ne(e),E=t&&t.geometry!=null?t.geometry:null,g={geometryPrecision:n,maxAllowableOffset:l,returnFieldName:p,returnGeometry:h,returnUnformattedValues:f,returnZ:R,tolerance:m},O=E&&E.toJSON()||r;if(g.imageDisplay=`${F},${a},${s}`,i&&(g.gdbVersion=i),O&&(delete O.spatialReference,g.geometry=JSON.stringify(O),g.geometryType=C(O)),x?g.sr=x.wkid||JSON.stringify(x):O&&O.spatialReference?g.sr=z(O):y&&y.spatialReference&&(g.sr=z(y)),g.time=$?[$.start,$.end].join(","):null,y){const{xmin:q,ymin:B,xmax:D,ymax:Z}=y;g.mapExtent=`${q},${B},${D},${Z}`}return w&&(g.layerDefs=w),b&&!w&&(g.dynamicLayers=b),g.layers=o==="popup"?"visible":o,v&&!b&&(g.layers+=`:${v.join(",")}`),g}function Ne(e){var x,$;const{mapExtent:t,floors:s,width:i,sublayers:r,layerIds:n,layerOption:a,gdbVersion:o}=e,y=($=(x=r==null?void 0:r.find(m=>m.layer!=null))==null?void 0:x.layer)==null?void 0:$.serviceSublayers,l=a==="popup",p={},h=K({extent:t,width:i,spatialReference:t==null?void 0:t.spatialReference}),f=[],R=m=>{const F=h===0,b=m.minScale===0||h<=m.minScale,w=m.maxScale===0||h>=m.maxScale;if(m.visible&&(F||b&&w))if(m.sublayers)m.sublayers.forEach(R);else{if((n==null?void 0:n.includes(m.id))===!1||l&&(!m.popupTemplate||!m.popupEnabled))return;f.unshift(m)}};if(r==null||r.forEach(R),r&&!f.length)p.layerIds=[];else{const m=Se(f,y,o),F=f.map(b=>{const w=A(s,b);return b.toExportImageJSON(w)});if(m)p.dynamicLayers=JSON.stringify(F);else{if(r){let w=f.map(({id:v})=>v);n&&(w=w.filter(v=>n.includes(v))),p.layerIds=w}else n!=null&&n.length&&(p.layerIds=n);const b=Pe(s,f);if(b!=null&&b.length){const w={};for(const v of b)v.definitionExpression&&(w[v.id]=v.definitionExpression);Object.keys(w).length&&(p.layerDefs=JSON.stringify(w))}}}return p}function Pe(e,t){const s=!!(e!=null&&e.length),i=t.filter(r=>r.definitionExpression!=null||s&&r.floorInfo!=null);return i.length?i.map(r=>{const n=A(e,r),a=$e(n,r.definitionExpression);return{id:r.id,definitionExpression:a??void 0}}):null}var V;let d=V=class extends Q{static from(e){return te(V,e)}constructor(e){super(e),this.dpi=96,this.floors=null,this.gdbVersion=null,this.geometry=null,this.geometryPrecision=null,this.height=400,this.layerIds=null,this.layerOption="top",this.mapExtent=null,this.maxAllowableOffset=null,this.returnFieldName=!0,this.returnGeometry=!1,this.returnM=!1,this.returnUnformattedValues=!0,this.returnZ=!1,this.spatialReference=null,this.sublayers=null,this.timeExtent=null,this.tolerance=null,this.width=400}};u([c({type:Number,json:{write:!0}})],d.prototype,"dpi",void 0),u([c()],d.prototype,"floors",void 0),u([c({type:String,json:{write:!0}})],d.prototype,"gdbVersion",void 0),u([c({types:W,json:{read:Y,write:!0}})],d.prototype,"geometry",void 0),u([c({type:Number,json:{write:!0}})],d.prototype,"geometryPrecision",void 0),u([c({type:Number,json:{write:!0}})],d.prototype,"height",void 0),u([c({type:[Number],json:{write:!0}})],d.prototype,"layerIds",void 0),u([c({type:["top","visible","all","popup"],json:{write:!0}})],d.prototype,"layerOption",void 0),u([c({type:N,json:{write:!0}})],d.prototype,"mapExtent",void 0),u([c({type:Number,json:{write:!0}})],d.prototype,"maxAllowableOffset",void 0),u([c({type:Boolean,json:{write:!0}})],d.prototype,"returnFieldName",void 0),u([c({type:Boolean,json:{write:!0}})],d.prototype,"returnGeometry",void 0),u([c({type:Boolean,json:{write:!0}})],d.prototype,"returnM",void 0),u([c({type:Boolean,json:{write:!0}})],d.prototype,"returnUnformattedValues",void 0),u([c({type:Boolean,json:{write:!0}})],d.prototype,"returnZ",void 0),u([c({type:X,json:{write:!0}})],d.prototype,"spatialReference",void 0),u([c()],d.prototype,"sublayers",void 0),u([c({type:ee,json:{write:!0}})],d.prototype,"timeExtent",void 0),u([c({type:Number,json:{write:!0}})],d.prototype,"tolerance",void 0),u([c({type:Number,json:{write:!0}})],d.prototype,"width",void 0),d=V=u([G("esri.rest.support.IdentifyParameters")],d);const k=d;let S=class extends Q{constructor(e){super(e),this.displayFieldName=null,this.feature=null,this.layerId=null,this.layerName=null}readFeature(e,t){return M.fromJSON({attributes:{...t.attributes},geometry:{...t.geometry}})}writeFeature(e,t){if(!e)return;const{attributes:s,geometry:i}=e;s&&(t.attributes={...s}),i!=null&&(t.geometry=i.toJSON(),t.geometryType=ie.toJSON(i.type))}};u([c({type:String,json:{write:!0}})],S.prototype,"displayFieldName",void 0),u([c({type:M})],S.prototype,"feature",void 0),u([re("feature",["attributes","geometry"])],S.prototype,"readFeature",null),u([se("feature")],S.prototype,"writeFeature",null),u([c({type:Number,json:{write:!0}})],S.prototype,"layerId",void 0),u([c({type:String,json:{write:!0}})],S.prototype,"layerName",void 0),S=u([G("esri.rest.support.IdentifyResult")],S);const Ie=S;async function _e(e,t,s){const i=(t=Ge(t)).geometry?[t.geometry]:[],r=ne(e);return r.path+="/identify",xe(i).then(n=>{const a=Ee(t,{geometry:n&&n[0]}),o=ae({...r.query,f:"json",...a}),y=oe(o,s);return le(r.path,y).then(Ve).then(l=>Me(l,t.sublayers))})}function Ve(e){const t=e.data;return t.results=t.results||[],t.exceededTransferLimit=!!t.exceededTransferLimit,t.results=t.results.map(s=>Ie.fromJSON(s)),t}function Ge(e){return e=k.from(e)}function Me(e,t){if(!(t!=null&&t.length))return e;const s=new Map;function i(r){s.set(r.id,r),r.sublayers&&r.sublayers.forEach(i)}t.forEach(i);for(const r of e.results)r.feature.sourceLayer=s.get(r.layerId);return e}let I=null;function Be(e,t){return t.type==="tile"||t.type==="map-image"}let j=class extends ue{constructor(e){super(e),this._featuresResolutions=new WeakMap,this.highlightGraphics=null,this.highlightGraphicUpdated=null,this.updateHighlightedFeatures=pe(async t=>{this.destroyed||this.updatingHandles.addPromise(this._updateHighlightedFeaturesGeometries(t).catch(()=>{}))})}initialize(){const e=t=>{this.updatingHandles.addPromise(this._updateHighlightedFeaturesSymbols(t).catch(()=>{})),this.updateHighlightedFeatures(this._highlightGeometriesResolution)};this.addHandles([ye(()=>this.highlightGraphics,"change",t=>e(t.added),{onListenerAdd:t=>e(t)})])}async fetchPopupFeatures(e,t){var a,o;const{layerView:{layer:s,view:{scale:i}}}=this;if(!e)throw new T("fetchPopupFeatures:invalid-area","Nothing to fetch without area",{layer:s});const r=Ae(s.sublayers,i,t);if(!r.length)return[];const n=await Le(s,r);if(!((((o=(a=s.capabilities)==null?void 0:a.operations)==null?void 0:o.supportsIdentify)??!0)&&s.version>=10.5)&&!n)throw new T("fetchPopupFeatures:not-supported","query operation is disabled for this service",{layer:s});return n?this._fetchPopupFeaturesUsingQueries(e,r,t):this._fetchPopupFeaturesUsingIdentify(e,r,t)}clearHighlights(){var e;(e=this.highlightGraphics)==null||e.removeAll()}highlight(e){const t=this.highlightGraphics;if(!t)return{remove(){}};let s=null;if(e instanceof M?s=[e]:ce.isCollection(e)&&e.length>0?s=e.toArray():Array.isArray(e)&&e.length>0&&(s=e),s=s==null?void 0:s.filter(L),!s||!s.length)return he();for(const i of s){const r=i.sourceLayer;r!=null&&"geometryType"in r&&r.geometryType==="point"&&(i.visible=!1)}return t.addMany(s),{remove:()=>{t.removeMany(s??[])}}}async _updateHighlightedFeaturesSymbols(e){const{layerView:{view:t},highlightGraphics:s,highlightGraphicUpdated:i}=this;if(s&&i)for(const r of e){const n=r.sourceLayer&&"renderer"in r.sourceLayer&&r.sourceLayer.renderer;r.sourceLayer&&"geometryType"in r.sourceLayer&&r.sourceLayer.geometryType==="point"&&n&&"getSymbolAsync"in n&&n.getSymbolAsync(r).then(async a=>{var l;a||(a=new U);let o=null;const y="visualVariables"in n?(l=n.visualVariables)==null?void 0:l.find(p=>p.type==="size"):void 0;y&&(I||(I=(await fe(()=>import("./SizeVariable-f2e14e5f.js").then(p=>p.v),["assets/SizeVariable-f2e14e5f.js","assets/index-694ce44d.js","assets/index-e81f504d.css","assets/colorRamps-c91442f9.js","assets/LegendOptions-457bb874.js","assets/lengthUtils-ee5fce51.js"])).getSize),o=I(y,r,{view:t.type,scale:t.scale,shape:a.type==="simple-marker"?a.style:null})),o||(o="width"in a&&"height"in a&&a.width!=null&&a.height!=null?Math.max(a.width,a.height):"size"in a?a.size:16),s.includes(r)&&(r.symbol=new U({style:"square",size:o,xoffset:"xoffset"in a?a.xoffset:0,yoffset:"yoffset"in a?a.yoffset:0}),i(r,"symbol"),r.visible=!0)})}}async _updateHighlightedFeaturesGeometries(e){const{layerView:{layer:t,view:s},highlightGraphics:i,highlightGraphicUpdated:r}=this;if(this._highlightGeometriesResolution=e,!r||!(i!=null&&i.length)||!t.capabilities.operations.supportsQuery)return;const n=this._getTargetResolution(e),a=new Map;for(const l of i)if(!this._featuresResolutions.has(l)||this._featuresResolutions.get(l)>n){const p=l.sourceLayer;de(a,p,()=>new Map).set(l.getObjectId(),l)}const o=Array.from(a,([l,p])=>{const h=l.createQuery();return h.objectIds=[...p.keys()],h.outFields=[l.objectIdField],h.returnGeometry=!0,h.maxAllowableOffset=n,h.outSpatialReference=s.spatialReference,l.queryFeatures(h)}),y=await Promise.all(o);if(!this.destroyed)for(const{features:l}of y)for(const p of l){const h=p.sourceLayer,f=a.get(h).get(p.getObjectId());f&&i.includes(f)&&(f.geometry=p.geometry,r(f,"geometry"),this._featuresResolutions.set(f,n))}}_getTargetResolution(e){const t=e*_(this.layerView.view.spatialReference),s=t/16;return s<=10?0:e/t*s}async _fetchPopupFeaturesUsingIdentify(e,t,s){const i=await this._createIdentifyParameters(e,t,s);if(i==null)return[];const{results:r}=await _e(this.layerView.layer.parsedUrl,i);return r.map(n=>n.feature)}async _createIdentifyParameters(e,t,s){const{floors:i,layer:r,timeExtent:n,view:{spatialReference:a,scale:o}}=this.layerView,y=s!=null?s.event:null;if(!t.length)return null;await Promise.all(t.map(({sublayer:x})=>x.load().catch(()=>{})));const l=Math.min(me("mapservice-popup-identify-max-tolerance"),r.allSublayers.reduce((x,$)=>$.renderer?J({renderer:$.renderer,event:y}):x,2)),p=this.createFetchPopupFeaturesQueryGeometry(e,l),h=ge(o,a),f=Math.round(p.width/h),R=new N({xmin:p.center.x-h*f,ymin:p.center.y-h*f,xmax:p.center.x+h*f,ymax:p.center.y+h*f,spatialReference:p.spatialReference});return new k({floors:i,gdbVersion:"gdbVersion"in r?r.gdbVersion:void 0,geometry:e,height:f,layerOption:"popup",mapExtent:R,returnGeometry:!0,spatialReference:a,sublayers:r.sublayers,timeExtent:n,tolerance:l,width:f})}async _fetchPopupFeaturesUsingQueries(e,t,s){const{layerView:{floors:i,timeExtent:r}}=this,n=s!=null?s.event:null,a=t.map(async({sublayer:o,popupTemplate:y})=>{var v;if(await o.load().catch(()=>{}),o.capabilities&&!o.capabilities.operations.supportsQuery)return[];const l=o.createQuery(),p=J({renderer:o.renderer,event:n}),h=this.createFetchPopupFeaturesQueryGeometry(e,p),f=new Set,[R]=await Promise.all([Re(o,y),(v=o.renderer)==null?void 0:v.collectRequiredFields(f,o.fieldsIndex)]);be(f,o.fieldsIndex,R);const x=Array.from(f).sort();if(l.geometry=h,l.outFields=x,l.timeExtent=r,i){const E=i.clone(),g=A(E,o);g!=null&&(l.where=l.where?`(${l.where}) AND (${g})`:g)}const $=this._getTargetResolution(h.width/p),m=await Te(y),F=o.geometryType==="point"||m&&m.arcadeUtils.hasGeometryOperations(y);F||(l.maxAllowableOffset=$);let{features:b}=await o.queryFeatures(l);const w=F?0:$;b=await Ue(o,b);for(const E of b)this._featuresResolutions.set(E,w);return b});return(await we(a)).reverse().reduce((o,y)=>y.value?[...o,...y.value]:o,[]).filter(L)}};function Ae(e,t,s){const i=[],r=n=>{const a=n.minScale===0||t<=n.minScale,o=n.maxScale===0||t>=n.maxScale;if(n.visible&&a&&o){if(n.sublayers)n.sublayers.forEach(r);else if(n.popupEnabled){const y=Fe(n,{...s,defaultPopupTemplateEnabled:!1});y!=null&&i.unshift({sublayer:n,popupTemplate:y})}}};return((e==null?void 0:e.toArray())??[]).reverse().map(r),i}function Te(e){var t;return(t=e.expressionInfos)!=null&&t.length||Array.isArray(e.content)&&e.content.some(s=>s.type==="expression")?ve():Promise.resolve()}async function Le(e,t){var s,i;if((i=(s=e.capabilities)==null?void 0:s.operations)!=null&&i.supportsQuery)return!0;try{return await Promise.any(t.map(({sublayer:r})=>r.load().then(()=>r.capabilities.operations.supportsQuery)))}catch{return!1}}async function Ue(e,t){const s=e.renderer;return s&&"defaultSymbol"in s&&!s.defaultSymbol&&(t=s.valueExpression?await Promise.all(t.map(i=>s.getSymbolAsync(i).then(r=>r?i:null))).then(i=>i.filter(r=>r!=null)):t.filter(i=>s.getSymbol(i)!=null)),t}u([c({constructOnly:!0})],j.prototype,"createFetchPopupFeaturesQueryGeometry",void 0),u([c({constructOnly:!0})],j.prototype,"layerView",void 0),u([c({constructOnly:!0})],j.prototype,"highlightGraphics",void 0),u([c({constructOnly:!0})],j.prototype,"highlightGraphicUpdated",void 0),u([c({constructOnly:!0})],j.prototype,"updatingHandles",void 0),j=u([G("esri.views.layers.support.MapService")],j);function De(e,t,s,i=new N){let r=0;if(s.type==="2d")r=t*(s.resolution??0);else if(s.type==="3d"){const p=s.overlayPixelSizeInMapUnits(e),h=s.basemapSpatialReference;r=h==null||h.equals(s.spatialReference)?t*p:_(h)/_(s.spatialReference)}const n=e.x-r,a=e.y-r,o=e.x+r,y=e.y+r,{spatialReference:l}=s;return i.xmin=Math.min(n,o),i.ymin=Math.min(a,y),i.xmax=Math.max(n,o),i.ymax=Math.max(a,y),i.spatialReference=l,i}new N;export{Be as S,j as U,De as r};
