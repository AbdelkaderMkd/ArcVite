import{ds as p,ay as n,bo as h,aC as i,aD as a,aF as u}from"./index-3572d442.js";import{n as f}from"./LayerView3D-e03f69d7.js";import{o as m}from"./TiledLayerView3D-ee2433cc.js";import{u as y}from"./LayerView-e8e5ef51.js";import{a as d}from"./RefreshableLayerView-13947b50.js";import{S as c,G as g}from"./MapServiceLayerViewHelper-34b42220.js";import"./popupUtils-8716dbe3.js";let t=class extends d(m(f(y))){constructor(){super(...arguments),this.type="tile-3d",this._popupHighlightHelper=null}get imageFormatIsOpaque(){return this.layer.tileInfo.format==="jpg"}get hasMixedImageFormats(){return this.layer.tileInfo.format==="mixed"}get tileInfo(){return this.layer.tileInfo}initialize(){var e,r;if(this.layer.type==="web-tile"){const s=(e=this.layer.fullExtent)==null?void 0:e.spatialReference,l=(r=this.layer.tileInfo)==null?void 0:r.spatialReference;if(s==null||l==null||!p(s,l)){const o=this.layer.originOf("fullExtent")==="defaults"||this.layer.fullExtent==null?"SceneView requires fullExtent to be specified by the user on WebTileLayer":"SceneView requires fullExtent to be specified in the same spatial reference as tileInfo on WebTileLayer";this.addResolvingPromise(Promise.reject(new n("layerview:incompatible-fullextent",o)))}}c(this,this.layer)&&(this._popupHighlightHelper=new g({createFetchPopupFeaturesQueryGeometry:(s,l)=>h(s,l,this.view),layerView:this,updatingHandles:this._updatingHandles})),this._addTilingSchemeMatchPromise()}destroy(){var e;(e=this._popupHighlightHelper)==null||e.destroy()}async fetchPopupFeatures(e,r){return this._popupHighlightHelper?this._popupHighlightHelper.fetchPopupFeatures(e,r):[]}async doRefresh(){this.suspended||this.emit("data-changed")}};i([a()],t.prototype,"imageFormatIsOpaque",null),i([a()],t.prototype,"hasMixedImageFormats",null),i([a()],t.prototype,"layer",void 0),i([a()],t.prototype,"tileInfo",null),t=i([u("esri.views.3d.layers.TileLayerView3D")],t);const P=t;export{P as default};