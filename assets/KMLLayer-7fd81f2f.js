import{aX as O,cE as _,q as c,dB as p,l as y,ez as v,aM as d,aQ as $,V as b,a as r,b as l,eA as j,aS as h,c as g,er as F,u as M,N as S,bL as C,a6 as I,aP as N,aE as P}from"./index-694ce44d.js";import{O as K}from"./MultiOriginJSONSupport-23cb4b05.js";import{a as R}from"./BlendLayer-995c591c.js";import{c as T}from"./OperationalLayer-dfa3c98e.js";import{j as z}from"./PortalLayer-05b2e66a.js";import{p as A}from"./RefreshableLayer-f7b369e7.js";import{t as J}from"./ScaleRangeLayer-3963d80b.js";import{f as V}from"./commonProperties-2fd36cd6.js";import{j as W,S as w,g as E,d as x}from"./kmlUtils-70c0841b.js";import"./jsonUtils-99446562.js";import"./parser-efb788bb.js";import"./portalItemUtils-dc884c84.js";import"./ElevationInfo-88d880d6.js";import"./lengthUtils-ee5fce51.js";import"./jsonUtils-fa57e182.js";import"./UniqueValueRenderer-3096ae45.js";import"./LegendOptions-457bb874.js";import"./diffUtils-a329eb07.js";import"./SizeVariable-f2e14e5f.js";import"./colorRamps-c91442f9.js";import"./ColorStop-d3f73d6d.js";import"./featureFlags-6cf6afd3.js";import"./styleUtils-fadc7778.js";import"./DictionaryLoader-926baf58.js";import"./LRUCache-962ebf1b.js";import"./Version-6d52fa47.js";import"./FieldsIndex-c27e2366.js";import"./heatmapUtils-c03ab930.js";import"./FeatureSet-4437a566.js";import"./Field-4b4f6277.js";import"./fieldType-46122f1d.js";var u;let a=u=class extends O.EventedMixin(_(F)){constructor(...t){super(...t),this.description=null,this.fullExtent=null,this.id=null,this.networkLink=null,this.parent=null,this.sublayers=null,this.title=null,this.sourceJSON=null,this.layer=null,this.addHandles([c(()=>this.sublayers,"after-add",({item:e})=>{e.parent=this,e.layer=this.layer},p),c(()=>this.sublayers,"after-remove",({item:e})=>{e.layer=e.parent=null},p),y(()=>this.sublayers,(e,s)=>{if(s)for(const i of s)i.layer=i.parent=null;if(e)for(const i of e)i.parent=this,i.layer=this.layer},p),y(()=>this.layer,e=>{if(this.sublayers)for(const s of this.sublayers)s.layer=e},p)])}initialize(){v(()=>this.networkLink).then(()=>v(()=>this.visible===!0)).then(()=>this.load())}load(t){var i;if(!this.networkLink||this.networkLink.viewFormat)return;const e=t!=null?t.signal:null,s=this._fetchService(((i=this._get("networkLink"))==null?void 0:i.href)??"",e).then(n=>{var m;const L=W(n.sublayers);this.fullExtent=d.fromJSON(L),this.sourceJSON=n;const f=$(b.ofType(u),w(u,n));this.sublayers?this.sublayers.addMany(f):this.sublayers=f,(m=this.layer)==null||m.emit("sublayer-update"),this.layer&&this.layer.notifyChange("visibleSublayers")});return this.addResolvingPromise(s),Promise.resolve(this)}get visible(){return this._get("visible")}set visible(t){this._get("visible")!==t&&(this._set("visible",t),this.layer&&this.layer.notifyChange("visibleSublayers"))}readVisible(t,e){return!!e.visibility}_fetchService(t,e){return E(t,this.layer.outSpatialReference,this.layer.refreshInterval,e).then(s=>x(s.data))}};r([l()],a.prototype,"description",void 0),r([l({type:d})],a.prototype,"fullExtent",void 0),r([l()],a.prototype,"id",void 0),r([l({readOnly:!0,value:null})],a.prototype,"networkLink",void 0),r([l({json:{write:{allowNull:!0}}})],a.prototype,"parent",void 0),r([l({type:b.ofType(u),json:{write:{allowNull:!0}}})],a.prototype,"sublayers",void 0),r([l({value:null,json:{read:{source:"name",reader:t=>j(t)}}})],a.prototype,"title",void 0),r([l({value:!0})],a.prototype,"visible",null),r([h("visible",["visibility"])],a.prototype,"readVisible",null),r([l()],a.prototype,"sourceJSON",void 0),r([l()],a.prototype,"layer",void 0),a=u=r([g("esri.layers.support.KMLSublayer")],a);const k=a,H=["kml","xml"];let o=class extends R(A(J(T(z(K(P)))))){constructor(...t){super(...t),this._visibleFolders=[],this.allSublayers=new M({getCollections:()=>[this.sublayers],getChildrenFunction:e=>e.sublayers}),this.outSpatialReference=S.WGS84,this.path=null,this.legendEnabled=!1,this.operationalLayerType="KML",this.sublayers=null,this.type="kml",this.url=null}initialize(){this.addHandles([y(()=>this.sublayers,(t,e)=>{e&&e.forEach(s=>{s.parent=null,s.layer=null}),t&&t.forEach(s=>{s.parent=this,s.layer=this})},p),this.on("sublayer-update",()=>this.notifyChange("fullExtent"))])}normalizeCtorArgs(t,e){return typeof t=="string"?{url:t,...e}:t}readSublayersFromItemOrWebMap(t,e){this._visibleFolders=e.visibleFolders}readSublayers(t,e,s){return w(k,e,s,this._visibleFolders)}writeSublayers(t,e){const s=[],i=t.toArray();for(;i.length;){const n=i[0];n.networkLink||(n.visible&&s.push(n.id),n.sublayers&&i.push(...n.sublayers.toArray())),i.shift()}e.visibleFolders=s}get title(){const t=this._get("title");return t&&this.originOf("title")!=="defaults"?t:this.url?C(this.url,H)||"KML":t||""}set title(t){this._set("title",t)}get visibleSublayers(){const t=this.sublayers,e=[],s=i=>{i.visible&&(e.push(i),i.sublayers&&i.sublayers.forEach(s))};return t&&t.forEach(s),e}get fullExtent(){return this._recomputeFullExtent()}load(t){const e=t!=null?t.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["KML"],supportsData:!1},t).catch(I).then(()=>this._fetchService(e))),Promise.resolve(this)}destroy(){super.destroy(),this.allSublayers.destroy()}async _fetchService(t){const e=await Promise.resolve().then(()=>this.resourceInfo?{ssl:!1,data:this.resourceInfo}:E(this.url??"",this.outSpatialReference,this.refreshInterval,t)),s=x(e.data);s&&this.read(s,{origin:"service"})}_recomputeFullExtent(){let t=null;this.extent!=null&&(t=this.extent.clone());const e=s=>{if(s.sublayers)for(const i of s.sublayers.items)e(i),i.visible&&i.fullExtent&&(t!=null?t.union(i.fullExtent):t=i.fullExtent.clone())};return e(this),t}};r([l({readOnly:!0})],o.prototype,"allSublayers",void 0),r([l({type:S})],o.prototype,"outSpatialReference",void 0),r([l({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],o.prototype,"path",void 0),r([l({readOnly:!0,json:{read:!1,write:!1}})],o.prototype,"legendEnabled",void 0),r([l({type:["show","hide","hide-children"]})],o.prototype,"listMode",void 0),r([l({type:["KML"]})],o.prototype,"operationalLayerType",void 0),r([l({})],o.prototype,"resourceInfo",void 0),r([l({type:b.ofType(k),json:{write:{ignoreOrigin:!0}}})],o.prototype,"sublayers",void 0),r([h(["web-map","portal-item"],"sublayers",["visibleFolders"])],o.prototype,"readSublayersFromItemOrWebMap",null),r([h("service","sublayers",["sublayers"])],o.prototype,"readSublayers",null),r([N("sublayers")],o.prototype,"writeSublayers",null),r([l({readOnly:!0,json:{read:!1}})],o.prototype,"type",void 0),r([l({json:{origins:{"web-map":{read:{source:"title"}}},write:{ignoreOrigin:!0}}})],o.prototype,"title",null),r([l(V)],o.prototype,"url",void 0),r([l({readOnly:!0})],o.prototype,"visibleSublayers",null),r([l({type:d})],o.prototype,"extent",void 0),r([l()],o.prototype,"fullExtent",null),o=r([g("esri.layers.KMLLayer")],o);const Et=o;export{Et as default};