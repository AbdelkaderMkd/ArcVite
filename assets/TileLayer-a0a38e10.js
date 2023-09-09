import{bF as _,a6 as S,N as v,a9 as T,a1 as m,d1 as b,c_ as w,T as u,aV as O,b7 as $,aF as R,d2 as W,a as s,b as a,aS as P,aP as U,d3 as j,c as L,aE as N}from"./index-694ce44d.js";import{O as A}from"./MultiOriginJSONSupport-23cb4b05.js";import{i as B}from"./APIKeyMixin-92728a8b.js";import{p as M}from"./ArcGISCachedService-2195ca2b.js";import{E as k,f as C,Y as I}from"./SublayersOwner-ae882168.js";import{l as D}from"./ArcGISService-d7b0abda.js";import{a as J}from"./BlendLayer-995c591c.js";import{o as q}from"./CustomParametersMixin-c7fc233c.js";import{c as E}from"./OperationalLayer-dfa3c98e.js";import{j as G}from"./PortalLayer-05b2e66a.js";import{p as V}from"./RefreshableLayer-f7b369e7.js";import{t as F}from"./ScaleRangeLayer-3963d80b.js";import{f as x}from"./commonProperties-2fd36cd6.js";import{o as y}from"./imageBitmapUtils-8516824c.js";import"./TileInfoTilemapCache-2de0d2d7.js";import"./TilemapCache-cec7ef0e.js";import"./ByteSizeUnit-d4757d40.js";import"./LRUCache-962ebf1b.js";import"./Version-6d52fa47.js";import"./portalItemUtils-dc884c84.js";import"./UniqueValueRenderer-3096ae45.js";import"./LegendOptions-457bb874.js";import"./diffUtils-a329eb07.js";import"./SizeVariable-f2e14e5f.js";import"./colorRamps-c91442f9.js";import"./lengthUtils-ee5fce51.js";import"./ColorStop-d3f73d6d.js";import"./featureFlags-6cf6afd3.js";import"./styleUtils-fadc7778.js";import"./jsonUtils-fa57e182.js";import"./DictionaryLoader-926baf58.js";import"./FieldsIndex-c27e2366.js";import"./heatmapUtils-c03ab930.js";import"./LabelClass-1bdf648f.js";import"./labelUtils-9d1c424f.js";import"./defaultsJSON-b087dd4d.js";import"./QueryTask-2d8c874f.js";import"./Query-90ca4e6a.js";import"./Field-4b4f6277.js";import"./fieldType-46122f1d.js";import"./executeForIds-c558933f.js";import"./query-4ea9d361.js";import"./normalizeUtils-02a847e9.js";import"./normalizeUtilsCommon-85cfc130.js";import"./pbfQueryUtils-d7a29f70.js";import"./pbf-a4c6cc53.js";import"./OptimizedGeometry-33b2eb0d.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./queryZScale-38870e48.js";import"./executeQueryJSON-f89ae11c.js";import"./FeatureSet-4437a566.js";import"./executeQueryPBF-95a212a6.js";import"./featureConversionUtils-0828833d.js";import"./FeatureType-65f3c6d4.js";import"./FeatureTemplate-4fa39c92.js";import"./labelingInfo-ea1763c0.js";import"./serviceCapabilitiesUtils-c3e15507.js";import"./AttachmentQuery-20f3be20.js";import"./popupUtils-4f9f6bd9.js";import"./sublayerUtils-5b1b7b1d.js";import"./jsonUtils-99446562.js";import"./parser-efb788bb.js";import"./ElevationInfo-88d880d6.js";var d;const f=["Canvas/World_Dark_Gray_Base","Canvas/World_Dark_Gray_Reference","Canvas/World_Light_Gray_Base","Canvas/World_Light_Gray_Reference","Elevation/World_Hillshade","Elevation/World_Hillshade_Dark","Ocean/World_Ocean_Base","Ocean/World_Ocean_Reference","Ocean_Basemap","Reference/World_Boundaries_and_Places","Reference/World_Boundaries_and_Places_Alternate","Reference/World_Transportation","World_Imagery","World_Street_Map","World_Topo_Map"];let i=d=class extends J(F(k(M(C(E(G(D(A(_(V(B(q(N))))))))))))){constructor(...e){super(...e),this.listMode="show",this.isReference=null,this.operationalLayerType="ArcGISTiledMapServiceLayer",this.resampling=!0,this.sourceJSON=null,this.spatialReference=null,this.path=null,this.sublayers=null,this.type="tile",this.url=null}normalizeCtorArgs(e,r){return typeof e=="string"?{url:e,...r}:e}load(e){const r=e!=null?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(S).then(()=>this._fetchService(r))),Promise.resolve(this)}get attributionDataUrl(){var r;const e=(r=this.parsedUrl)==null?void 0:r.path.toLowerCase();return e?this._getDefaultAttribution(this._getMapName(e)):null}readSpatialReference(e,r){return(e=e||r.tileInfo&&r.tileInfo.spatialReference)&&v.fromJSON(e)}writeSublayers(e,r,t,o){if(!this.loaded||!e)return;const p=e.slice().reverse().flatten(({sublayers:l})=>l&&l.toArray().reverse()).toArray(),n=[],c={writeSublayerStructure:!1,...o};p.forEach(l=>{const h=l.write({},c);n.push(h)}),n.some(l=>Object.keys(l).length>1)&&(r.layers=n)}get tileServers(){var e;return this._getDefaultTileServers((e=this.parsedUrl)==null?void 0:e.path)}castTileServers(e){return Array.isArray(e)?e.map(r=>T(r).path):null}fetchTile(e,r,t,o={}){const{signal:p}=o,n=this.getTileUrl(e,r,t),c={responseType:"image",signal:p,query:{...this.refreshParameters}};return m(n,c).then(l=>l.data)}async fetchImageBitmapTile(e,r,t,o={}){const{signal:p}=o;if(this.fetchTile!==d.prototype.fetchTile){const h=await this.fetchTile(e,r,t,o);return y(h,e,r,t,p)}const n=this.getTileUrl(e,r,t),c={responseType:"blob",signal:p,query:{...this.refreshParameters}},{data:l}=await m(n,c);return y(l,e,r,t,p)}getTileUrl(e,r,t){var c,l;const o=!this.capabilities.operations.supportsTileMap&&this.supportsBlankTile,p=b({...(c=this.parsedUrl)==null?void 0:c.query,blankTile:!o&&null,...this.customParameters,token:this.apiKey}),n=this.tileServers;return`${n&&n.length?n[r%n.length]:(l=this.parsedUrl)==null?void 0:l.path}/tile/${e}/${r}/${t}${p?"?"+p:""}`}loadAll(){return w(this,e=>{e(this.allSublayers)})}_fetchService(e){return new Promise((r,t)=>{if(this.sourceJSON){if(this.sourceJSON.bandCount!=null&&this.sourceJSON.pixelSizeX!=null)throw new u("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");return void r({data:this.sourceJSON})}if(!this.parsedUrl)throw new u("tile-layer:undefined-url","layer's url is not defined");const o=O(this.parsedUrl.path);if(o!=null&&o.serverType==="ImageServer")throw new u("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");m(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},responseType:"json",signal:e}).then(r,t)}).then(r=>{let t=this.url;if(r.ssl&&(t=this.url=t.replace(/^http:/i,"https:")),this.sourceJSON=r.data,this.read(r.data,{origin:"service",url:this.parsedUrl}),this.version===10.1&&!$(t))return this._fetchServerVersion(t,e).then(o=>{this.read({currentVersion:o})}).catch(()=>{})})}_fetchServerVersion(e,r){if(!R(e))return Promise.reject();const t=e.replace(/(.*\/rest)\/.*/i,"$1")+"/info";return m(t,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:r}).then(o=>{if(o.data&&o.data.currentVersion)return o.data.currentVersion;throw new u("tile-layer:version-not-available")})}_getMapName(e){const r=e.match(/^(?:https?:)?\/\/(server\.arcgisonline\.com|services\.arcgisonline\.com|ibasemaps-api\.arcgis\.com)\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/mapserver/i);return r?r[2]:void 0}_getDefaultAttribution(e){if(e==null)return null;let r;e=e.toLowerCase();for(let t=0,o=f.length;t<o;t++)if(r=f[t],r.toLowerCase().includes(e))return W("//static.arcgis.com/attribution/"+r);return null}_getDefaultTileServers(e){if(e==null)return[];const r=e.search(/^(?:https?:)?\/\/server\.arcgisonline\.com/i)!==-1,t=e.search(/^(?:https?:)?\/\/services\.arcgisonline\.com/i)!==-1;return r||t?[e,e.replace(r?/server\.arcgisonline/i:/services\.arcgisonline/i,r?"services.arcgisonline":"server.arcgisonline")]:[]}get hasOverriddenFetchTile(){return!this.fetchTile[g]}};s([a({readOnly:!0})],i.prototype,"attributionDataUrl",null),s([a({type:["show","hide","hide-children"]})],i.prototype,"listMode",void 0),s([a({json:{read:!0,write:!0}})],i.prototype,"blendMode",void 0),s([a({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],i.prototype,"isReference",void 0),s([a({readOnly:!0,type:["ArcGISTiledMapServiceLayer"]})],i.prototype,"operationalLayerType",void 0),s([a({type:Boolean})],i.prototype,"resampling",void 0),s([a()],i.prototype,"sourceJSON",void 0),s([a({type:v})],i.prototype,"spatialReference",void 0),s([P("spatialReference",["spatialReference","tileInfo"])],i.prototype,"readSpatialReference",null),s([a({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],i.prototype,"path",void 0),s([a({readOnly:!0})],i.prototype,"sublayers",void 0),s([U("sublayers",{layers:{type:[I]}})],i.prototype,"writeSublayers",null),s([a({json:{read:!1,write:!1}})],i.prototype,"popupEnabled",void 0),s([a()],i.prototype,"tileServers",null),s([j("tileServers")],i.prototype,"castTileServers",null),s([a({readOnly:!0,json:{read:!1}})],i.prototype,"type",void 0),s([a(x)],i.prototype,"url",void 0),i=d=s([L("esri.layers.TileLayer")],i);const g=Symbol("default-fetch-tile");i.prototype.fetchTile[g]=!0;const tr=i;export{tr as default};
