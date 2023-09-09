import{h as w,y as g,r as I,l as S,e as f,d as o,S as d,s as T,a as n,b as m,c as V}from"./index-694ce44d.js";import{t as v,n as y}from"./imageUtils-33370248.js";import{f as q,d as x}from"./LayerView-0c3abff6.js";import{a as M}from"./RefreshableLayerView-622fb2f0.js";import"./BitmapTileContainer-b825b7cf.js";import"./Bitmap-c7a69538.js";import"./Container-98784fc3.js";import"./parser-efb788bb.js";import"./definitions-a76b7e9e.js";import"./enums-b14466b3.js";import"./Texture-de2922f0.js";import"./TiledDisplayObject-a6540d9f.js";import"./WGLContainer-8c37a38c.js";import"./VertexArrayObject-51fe5775.js";import"./VertexElementDescriptor-2925c6af.js";import"./color-807fab76.js";import"./enums-f1a6a48a.js";import"./ProgramTemplate-6419e6e4.js";import"./GeometryUtils-c90a4bf4.js";import"./heatmapUtils-c03ab930.js";import"./StyleDefinition-29c49b98.js";import"./config-1337d16e.js";import"./earcut-25af7c0e.js";import"./featureConversionUtils-0828833d.js";import"./OptimizedGeometry-33b2eb0d.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./TileContainer-8ad69116.js";const R=[102113,102100,3857,3785,900913],b=[0,0];let a=class extends M(v(q(x))){constructor(){super(...arguments),this._tileStrategy=null,this._fetchQueue=null,this._tileRequests=new Map,this.layer=null}get tileMatrixSet(){const e=this._getTileMatrixSetBySpatialReference(this.layer.activeLayer);return e?(e.id!==this.layer.activeLayer.tileMatrixSetId&&(this.layer.activeLayer.tileMatrixSetId=e.id),e):null}update(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume()}attach(){var t;const e=(t=this.tileMatrixSet)==null?void 0:t.tileInfo;e&&(this._tileInfoView=new w(e),this._fetchQueue=new g({tileInfoView:this._tileInfoView,concurrency:16,process:(i,s)=>this.fetchTile(i,s)}),this._tileStrategy=new I({cachePolicy:"keep",resampling:!0,acquireTile:i=>this.acquireTile(i),releaseTile:i=>this.releaseTile(i),tileInfoView:this._tileInfoView}),this.addAttachHandles(S(()=>{var i,s;return[(s=(i=this.layer)==null?void 0:i.activeLayer)==null?void 0:s.styleId,this.tileMatrixSet]},()=>this._refresh())),super.attach())}detach(){var e,t;super.detach(),(e=this._tileStrategy)==null||e.destroy(),(t=this._fetchQueue)==null||t.destroy(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}releaseTile(e){this._fetchQueue.abort(e.key.id),this._bitmapView.removeChild(e),e.once("detach",()=>e.destroy()),this.requestUpdate()}acquireTile(e){const t=this._bitmapView.createTile(e),i=t.bitmap;return[i.x,i.y]=this._tileInfoView.getTileCoords(b,t.key),i.resolution=this._tileInfoView.getTileResolution(t.key),[i.width,i.height]=this._tileInfoView.tileInfo.size,this._enqueueTileFetch(t),this._bitmapView.addChild(t),this.requestUpdate(),t}async doRefresh(){!this.attached||this.updateRequested||this.suspended||this._refresh()}isUpdating(){var e;return((e=this._fetchQueue)==null?void 0:e.updating)??!1}async fetchTile(e,t={}){const i="tilemapCache"in this.layer?this.layer.tilemapCache:null,{signal:s,resamplingLevel:r=0}=t;if(!i)return this._fetchImage(e,s);const l=new f(0,0,0,0);let u;try{await i.fetchAvailabilityUpsample(e.level,e.row,e.col,l,{signal:s}),u=await this._fetchImage(l,s)}catch(h){if(o(h))throw h;if(r<3){const c=this._tileInfoView.getTileParentId(e.id);if(c){const p=new f(c),_=await this.fetchTile(p,{...t,resamplingLevel:r+1});return y(this._tileInfoView,_,p,e)}}throw h}return y(this._tileInfoView,u,l,e)}canResume(){const e=super.canResume();return e&&this.tileMatrixSet!==null}supportsSpatialReference(e){var t;return((t=this.layer.activeLayer.tileMatrixSets)==null?void 0:t.some(i=>{var s;return d((s=i.tileInfo)==null?void 0:s.spatialReference,e)}))??!1}async _enqueueTileFetch(e){if(!this._fetchQueue.has(e.key.id)){try{const t=await this._fetchQueue.push(e.key);e.bitmap.source=t,e.bitmap.width=this._tileInfoView.tileInfo.size[0],e.bitmap.height=this._tileInfoView.tileInfo.size[1],e.once("attach",()=>this.requestUpdate())}catch(t){o(t)||T.getLogger(this).error(t)}this.requestUpdate()}}async _fetchImage(e,t){return this.layer.fetchImageBitmapTile(e.level,e.row,e.col,{signal:t})}_refresh(){this._fetchQueue.reset(),this._tileStrategy.refresh(e=>{if(!e.bitmap.source)return;const t={id:e.key.id,fulfilled:!1,promise:this._fetchQueue.push(e.key).then(i=>{e.bitmap.source=i}).catch(i=>{o(i)||(e.bitmap.source=null)}).finally(()=>{e.requestRender(),t.fulfilled=!0})};this._tileRequests.set(e,t)})}_getTileMatrixSetBySpatialReference(e){const t=this.view.spatialReference;if(!e.tileMatrixSets)return null;let i=e.tileMatrixSets.find(s=>{var r;return d((r=s.tileInfo)==null?void 0:r.spatialReference,t)});return!i&&t.isWebMercator&&(i=e.tileMatrixSets.find(s=>{var r;return R.includes(((r=s.tileInfo)==null?void 0:r.spatialReference.wkid)??-1)})),i}};n([m()],a.prototype,"_fetchQueue",void 0),n([m({readOnly:!0})],a.prototype,"tileMatrixSet",null),a=n([V("esri.views.2d.layers.WMTSLayerView2D")],a);const se=a;export{se as default};
