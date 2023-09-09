import{i as w,h as y,y as I,r as V,l as v,S as H,d as m,e as g,s as T,a as l,b as n,c as q}from"./index-7af450d7.js";import"./MagnifierPrograms-24d77c0b.js";import"./Container-1bd2a8b7.js";import"./BufferPool-4871e5d7.js";import"./color-a2405c5c.js";import"./WGLContainer-82bf5950.js";import"./enums-b14466b3.js";import"./Texture-ddba2d73.js";import"./ProgramTemplate-5385d3a0.js";import"./definitions-5e66166b.js";import"./GeometryUtils-d05a94d5.js";import"./VertexArrayObject-475aed89.js";import"./StyleDefinition-29c49b98.js";import"./enums-fb086c25.js";import"./OrderIndependentTransparency-309a1bc3.js";import"./floatRGBA-9e073c80.js";import"./testSVGPremultipliedAlpha-db4b5b0f.js";import{o as U}from"./GraphicsView2D-6fcd4698.js";import"./AttributeStoreView-00aba7d9.js";import"./earcut-b0b14d3e.js";import"./featureConversionUtils-3aeae00f.js";import"./lengthUtils-e64d76bb.js";import"./vec3f32-ad1dc57f.js";import"./normalizeUtils-fbcb2351.js";import{t as S,o as f,n as d}from"./imageUtils-a2eefdee.js";import{f as Q,d as b}from"./LayerView-e9f88212.js";import{n as C}from"./HighlightGraphicContainer-d5ceb43c.js";import{a as k}from"./RefreshableLayerView-22339721.js";import{S as F,U as R,r as G}from"./drapedUtils-a38024a4.js";import"./ExpandedCIM-d3c1e76f.js";import"./BidiEngine-9a40f2f4.js";import"./OptimizedGeometry-33b2eb0d.js";import"./GeometryUtils-984e8446.js";import"./enums-f1a6a48a.js";import"./utils-6b9ab231.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-a383a2df.js";import"./rasterizingUtils-7d8b3eb7.js";import"./pbf-5f594bd6.js";import"./imageutils-ee799111.js";import"./Matcher-aa9563e0.js";import"./visualVariablesUtils-90138294.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-d5b37d7d.js";import"./defaultsJSON-b087dd4d.js";import"./LRUCache-cbaf1d46.js";import"./devEnvironmentUtils-5002a058.js";import"./styleUtils-739c5f34.js";import"./featureFlags-78d5fc35.js";import"./webStyleSymbolUtils-a181071f.js";import"./CircularArray-ef508845.js";import"./throttle-7bf02de9.js";import"./ComputedAttributeStorage-5513f9f6.js";import"./FieldsIndex-1b2afc91.js";import"./arcadeTimeUtils-8ab169ee.js";import"./executionError-c92d3b85.js";import"./projectionSupport-d4e23277.js";import"./json-48e3ea08.js";import"./diffUtils-e1a6fe87.js";import"./parser-6c4b5959.js";import"./VertexElementDescriptor-2925c6af.js";import"./heatmapUtils-73c81fd5.js";import"./config-1337d16e.js";import"./basicInterfaces-4ab7cc6a.js";import"./normalizeUtilsSync-dfadfc08.js";import"./normalizeUtilsCommon-7cb21fa5.js";import"./LabelClass-411c9c4e.js";import"./labelUtils-623797c2.js";import"./TiledDisplayObject-d6b9c2e9.js";import"./labelingInfo-58602860.js";import"./clusterUtils-66bf1196.js";import"./SizeVariable-cf2f4876.js";import"./colorRamps-7576a038.js";import"./LegendOptions-b705a3af.js";import"./util-9f8e1b8f.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./BitmapTileContainer-78a76989.js";import"./Bitmap-3dc9ab6c.js";import"./TileContainer-a40d1c29.js";import"./BaseGraphicContainer-b3fb92b3.js";import"./FeatureContainer-5e375654.js";import"./floorFilterUtils-080a7cd2.js";import"./sublayerUtils-b5b269c3.js";import"./popupUtils-b661628d.js";const L=[0,0];let s=class extends k(S(Q(b))){constructor(){super(...arguments),this._fetchQueue=null,this._highlightGraphics=new w,this._highlightView=null,this._popupHighlightHelper=null,this._tileStrategy=null,this.layer=null}get resampling(){return!("resampling"in this.layer)||this.layer.resampling!==!1}get tilemapCache(){return"tilemapCache"in this.layer?this.layer.tilemapCache:null}update(t){var e;this._fetchQueue.pause(),this._fetchQueue.state=t.state,this._tileStrategy.update(t),this._fetchQueue.resume(),(e=this._highlightView)==null||e.processUpdate(t)}attach(){const t="tileServers"in this.layer?this.layer.tileServers:null,e=this.tilemapCache;if(this._tileInfoView=new y(this.layer.tileInfo,this.layer.fullExtent,e==null?void 0:e.effectiveMinLOD,e==null?void 0:e.effectiveMaxLOD),this._fetchQueue=new I({tileInfoView:this._tileInfoView,concurrency:t&&10*t.length||10,process:(i,r)=>this.fetchTile(i,r)}),this._tileStrategy=new V({cachePolicy:"keep",resampling:this.resampling,acquireTile:i=>this.acquireTile(i),releaseTile:i=>this.releaseTile(i),tileInfoView:this._tileInfoView}),F(this,this.layer)){const i=this._highlightView=new U({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new C(this.view.featuresTilingScheme),defaultPointSymbolEnabled:!1});this.container.addChild(this._highlightView.container),this._popupHighlightHelper=new R({createFetchPopupFeaturesQueryGeometry:(r,h)=>G(r,h,this.view),highlightGraphics:this._highlightGraphics,highlightGraphicUpdated:(r,h)=>{i.graphicUpdateHandler({graphic:r,property:h})},layerView:this,updatingHandles:this.updatingHandles})}this.requestUpdate(),this.addAttachHandles(v(()=>this.resampling,()=>{this.doRefresh()})),super.attach()}detach(){var t;super.detach(),this._tileStrategy.destroy(),this._fetchQueue.clear(),this.container.removeAllChildren(),(t=this._popupHighlightHelper)==null||t.destroy(),this._fetchQueue=this._tileStrategy=this._tileInfoView=this._popupHighlightHelper=null}async fetchPopupFeatures(t,e){return this._popupHighlightHelper?this._popupHighlightHelper.fetchPopupFeatures(t,e):[]}highlight(t){return this._popupHighlightHelper?this._popupHighlightHelper.highlight(t):{remove(){}}}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}supportsSpatialReference(t){var e;return H((e=this.layer.tileInfo)==null?void 0:e.spatialReference,t)}async doRefresh(){!this.attached||this.updateRequested||this.suspended||(this._fetchQueue.reset(),this._tileStrategy.refresh(t=>this._enqueueTileFetch(t)))}isUpdating(){var t;return((t=this._fetchQueue)==null?void 0:t.updating)??!1}acquireTile(t){const e=this._bitmapView.createTile(t),i=e.bitmap;return[i.x,i.y]=this._tileInfoView.getTileCoords(L,e.key),i.resolution=this._tileInfoView.getTileResolution(e.key),[i.width,i.height]=this._tileInfoView.tileInfo.size,this._enqueueTileFetch(e),this._bitmapView.addChild(e),this.requestUpdate(),e}releaseTile(t){this._fetchQueue.abort(t.key.id),this._bitmapView.removeChild(t),t.once("detach",()=>t.destroy()),this.requestUpdate()}async fetchTile(t,e={}){const i=this.tilemapCache,{signal:r,resamplingLevel:h=0}=e;if(!i)try{return await this._fetchImage(t,r)}catch(p){if(!m(p)&&!this.resampling)return f(this._tileInfoView.tileInfo.size);if(h<3){const u=this._tileInfoView.getTileParentId(t.id);if(u){const c=new g(u),_=await this.fetchTile(c,{...e,resamplingLevel:h+1});return d(this._tileInfoView,_,c,t)}}throw p}const o=new g(0,0,0,0);let a;try{if(await i.fetchAvailabilityUpsample(t.level,t.row,t.col,o,{signal:r}),o.level!==t.level&&!this.resampling)return f(this._tileInfoView.tileInfo.size);a=await this._fetchImage(o,r)}catch(p){if(m(p))throw p;a=await this._fetchImage(t,r)}return this.resampling?d(this._tileInfoView,a,o,t):a}async _enqueueTileFetch(t){if(!this._fetchQueue.has(t.key.id)){try{const e=await this._fetchQueue.push(t.key);t.bitmap.source=e,t.bitmap.width=this._tileInfoView.tileInfo.size[0],t.bitmap.height=this._tileInfoView.tileInfo.size[1],t.requestRender(),t.once("attach",()=>this.requestUpdate())}catch(e){m(e)||T.getLogger(this).error(e)}this.requestUpdate()}}async _fetchImage(t,e){return this.layer.fetchImageBitmapTile(t.level,t.row,t.col,{signal:e})}};l([n()],s.prototype,"_fetchQueue",void 0),l([n()],s.prototype,"resampling",null),l([n()],s.prototype,"tilemapCache",null),s=l([q("esri.views.2d.layers.TileLayerView2D")],s);const ue=s;export{ue as default};