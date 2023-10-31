import{aX as w,aY as y,aZ as I,a_ as V,a$ as v,b0 as T,b1 as H,b2 as n,b3 as g,aw as q,aQ as o,aR as u,aT as b}from"./index-383689b1.js";import"./Rasterizer-24c526d2.js";import"./EffectView-42d45802.js";import"./Container-ed32c6f2.js";import"./BufferPool-a54b46bd.js";import"./enums-b1d611e3.js";import"./WGLContainer-b3d550a0.js";import"./color-90ea320b.js";import"./definitions-24f6db57.js";import"./MaterialKey-bc9622a6.js";import"./number-e491b09e.js";import"./MagnifierPrograms-dd0061a9.js";import{o as U}from"./GraphicsView2D-dd35d9f0.js";import"./AttributeStoreView-9283c0d8.js";import{t as Q,o as f,n as d}from"./imageUtils-e698b6a2.js";import{f as S}from"./LayerView2D-26931b5c.js";import{n as C}from"./HighlightGraphicContainer-3af44fdb.js";import{d as R}from"./LayerView-fd5dbfea.js";import{a as k}from"./RefreshableLayerView-344b5884.js";import{S as F,U as G}from"./MapServiceLayerViewHelper-ad540f5d.js";import"./cimAnalyzer-fbeace2d.js";import"./BidiEngine-9a40f2f4.js";import"./GeometryUtils-984e8446.js";import"./alignmentUtils-ae955d28.js";import"./Rect-ea14f53a.js";import"./rasterizingUtils-465ce7c6.js";import"./WGLBrushVTLSymbol-7648093c.js";import"./GeometryUtils-dd03fc25.js";import"./ShaderCompiler-77d0dcb6.js";import"./ProgramTemplate-3f877313.js";import"./heatmapTextureUtils-dfcf9845.js";import"./pbf-1f7c5ba7.js";import"./imageutils-f0111c68.js";import"./Matcher-069875c6.js";import"./visualVariablesUtils-c75c6d50.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-e1a33598.js";import"./ExpandedCIM-1490c593.js";import"./CircularArray-ef508845.js";import"./throttle-7bf02de9.js";import"./ComputedAttributeStorage-c3d08a49.js";import"./arcadeTimeUtils-f531775a.js";import"./centroid-8e8cfa47.js";import"./normalizeUtilsSync-91b0dd4d.js";import"./projectionSupport-2845339d.js";import"./json-48e3ea08.js";import"./util-91c099d2.js";import"./BitmapTileContainer-361a313d.js";import"./Bitmap-52374ba3.js";import"./TileContainer-c1cadeee.js";import"./BaseGraphicContainer-1b0193fe.js";import"./FeatureContainer-f0d2b018.js";import"./floorFilterUtils-080a7cd2.js";import"./sublayerUtils-3aef8a3d.js";import"./popupUtils-98519cca.js";const L=[0,0];let s=class extends k(Q(S(R))){constructor(){super(...arguments),this._fetchQueue=null,this._highlightGraphics=new w,this._highlightView=null,this._popupHighlightHelper=null,this._tileStrategy=null,this.layer=null}get resampling(){return!("resampling"in this.layer)||this.layer.resampling!==!1}get tilemapCache(){return"tilemapCache"in this.layer?this.layer.tilemapCache:null}update(e){var t;this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume(),(t=this._highlightView)==null||t.processUpdate(e)}attach(){const e="tileServers"in this.layer?this.layer.tileServers:null,t=this.tilemapCache;if(this._tileInfoView=new y(this.layer.tileInfo,this.layer.fullExtent,t==null?void 0:t.effectiveMinLOD,t==null?void 0:t.effectiveMaxLOD),this._fetchQueue=new I({tileInfoView:this._tileInfoView,concurrency:e&&10*e.length||10,process:(i,r)=>this.fetchTile(i,r)}),this._tileStrategy=new V({cachePolicy:"keep",resampling:this.resampling,acquireTile:i=>this.acquireTile(i),releaseTile:i=>this.releaseTile(i),tileInfoView:this._tileInfoView}),F(this,this.layer)){const i=this._highlightView=new U({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new C(this.view.featuresTilingScheme),defaultPointSymbolEnabled:!1});this.container.addChild(this._highlightView.container),this._popupHighlightHelper=new G({createFetchPopupFeaturesQueryGeometry:(r,h)=>v(r,h,this.view),highlightGraphics:this._highlightGraphics,highlightGraphicUpdated:(r,h)=>{i.graphicUpdateHandler({graphic:r,property:h})},layerView:this,updatingHandles:this.updatingHandles})}this.requestUpdate(),this.addAttachHandles(T(()=>this.resampling,()=>{this.doRefresh()})),super.attach()}detach(){var e;super.detach(),this._tileStrategy.destroy(),this._fetchQueue.clear(),this.container.removeAllChildren(),(e=this._popupHighlightHelper)==null||e.destroy(),this._fetchQueue=this._tileStrategy=this._tileInfoView=this._popupHighlightHelper=null}async fetchPopupFeatures(e,t){return this._popupHighlightHelper?this._popupHighlightHelper.fetchPopupFeatures(e,t):[]}highlight(e){return this._popupHighlightHelper?this._popupHighlightHelper.highlight(e):{remove(){}}}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}supportsSpatialReference(e){var t;return H((t=this.layer.tileInfo)==null?void 0:t.spatialReference,e)}async doRefresh(){!this.attached||this.updateRequested||this.suspended||(this._fetchQueue.reset(),this._tileStrategy.refresh(e=>this._enqueueTileFetch(e)))}isUpdating(){var e;return((e=this._fetchQueue)==null?void 0:e.updating)??!1}acquireTile(e){const t=this._bitmapView.createTile(e),i=t.bitmap;return[i.x,i.y]=this._tileInfoView.getTileCoords(L,t.key),i.resolution=this._tileInfoView.getTileResolution(t.key),[i.width,i.height]=this._tileInfoView.tileInfo.size,this._enqueueTileFetch(t),this._bitmapView.addChild(t),this.requestUpdate(),t}releaseTile(e){this._fetchQueue.abort(e.key.id),this._bitmapView.removeChild(e),e.once("detach",()=>e.destroy()),this.requestUpdate()}async fetchTile(e,t={}){const i=this.tilemapCache,{signal:r,resamplingLevel:h=0}=t;if(!i)try{return await this._fetchImage(e,r)}catch(a){if(!n(a)&&!this.resampling)return f(this._tileInfoView.tileInfo.size);if(h<3){const m=this._tileInfoView.getTileParentId(e.id);if(m){const c=new g(m),_=await this.fetchTile(c,{...t,resamplingLevel:h+1});return d(this._tileInfoView,_,c,e)}}throw a}const l=new g(0,0,0,0);let p;try{if(await i.fetchAvailabilityUpsample(e.level,e.row,e.col,l,{signal:r}),l.level!==e.level&&!this.resampling)return f(this._tileInfoView.tileInfo.size);p=await this._fetchImage(l,r)}catch(a){if(n(a))throw a;p=await this._fetchImage(e,r)}return this.resampling?d(this._tileInfoView,p,l,e):p}async _enqueueTileFetch(e){if(!this._fetchQueue.has(e.key.id)){try{const t=await this._fetchQueue.push(e.key);e.bitmap.source=t,e.bitmap.width=this._tileInfoView.tileInfo.size[0],e.bitmap.height=this._tileInfoView.tileInfo.size[1],e.requestRender(),e.once("attach",()=>this.requestUpdate())}catch(t){n(t)||q.getLogger(this).error(t)}this.requestUpdate()}}async _fetchImage(e,t){return this.layer.fetchImageBitmapTile(e.level,e.row,e.col,{signal:t})}};o([u()],s.prototype,"_fetchQueue",void 0),o([u()],s.prototype,"resampling",null),o([u()],s.prototype,"tilemapCache",null),s=o([b("esri.views.2d.layers.TileLayerView2D")],s);const xe=s;export{xe as default};