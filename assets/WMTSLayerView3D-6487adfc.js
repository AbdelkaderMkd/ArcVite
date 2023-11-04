import{eq as d,gc as f,aO as u,b2 as n,aC as s,aD as a,aF as m}from"./index-3572d442.js";import{n as c}from"./LayerView3D-e03f69d7.js";import{o as p}from"./TiledLayerView3D-ee2433cc.js";import{u as g}from"./LayerView-e8e5ef51.js";import{a as y}from"./RefreshableLayerView-13947b50.js";let r=class extends y(p(c(g))){constructor(){super(...arguments),this.type="wmts-3d"}initialize(){this._getCompatibleTileInfoMatrixSet(e=>this._getTileInfoSupportError(e.tileInfo,e.fullExtent));const t=d(()=>{var e,i;return(i=(e=this.view)==null?void 0:e.basemapTerrain)==null?void 0:i.tilingSchemeLocked}).then(()=>{const e=this._getCompatibleTileInfoMatrixSet(i=>this._getTileInfoError(i.tileInfo,i.fullExtent));e!=null&&(e.id!==null&&this.layer.activeLayer.tileMatrixSetId!==e.id&&(this.layer.activeLayer.tileMatrixSetId=e.id),e.tileInfo&&(this.tileInfo=e.tileInfo),this.layer.fullExtent=e.fullExtent)});this.addResolvingPromise(t),this.when(()=>this._postInitialize())}get hasMixedImageFormats(){return!0}refresh(){this.emit("data-changed")}canResume(){if(!super.canResume())return!1;const t=this.layer.activeLayer.tileMatrixSet;return t!=null&&!this._getTileInfoError(t.tileInfo,t.fullExtent)}async doRefresh(){this.suspended||this.emit("data-changed")}_postInitialize(){this._updatingHandles.add(()=>{var t,e;return(e=(t=this.layer)==null?void 0:t.activeLayer)==null?void 0:e.styleId},()=>this.refresh()),this._updatingHandles.add(()=>{var t;return(t=this.layer)==null?void 0:t.activeLayer},t=>{const e=this._getCompatibleTileInfoMatrixSet(i=>this._getTileInfoError(i.tileInfo,i.fullExtent),!0);e&&e.id!=null&&t.tileMatrixSetId!==e.id&&(this.layer.activeLayer.tileMatrixSetId=e.id),this.notifyChange("suspended"),this.canResume()&&this.refresh()})}_getCompatibleTileInfoMatrixSet(t,e=!1){const i=f(this.layer);if(i!=null){if(u.isCollection(i))return i.find(h=>{const l=t(h);return l!=null&&(e?n.getLogger(this).error("The selected tile matrix set is not compatible with the view",l):this.addResolvingPromise(Promise.reject(l))),l==null});const o=t(i);return o!=null&&(e?n.getLogger(this).error("The selected tile matrix set is not compatible with the view",o):this.addResolvingPromise(Promise.reject(o))),i}return null}_getTileInfoError(t,e){return this._getTileInfoSupportError(t,e)||this._getTileInfoCompatibilityError(t,this.view.basemapTerrain.tilingScheme)}};s([a({readOnly:!0})],r.prototype,"hasMixedImageFormats",null),s([a()],r.prototype,"layer",void 0),s([a()],r.prototype,"suspended",void 0),s([a()],r.prototype,"tileInfo",void 0),r=s([m("esri.views.3d.layers.WMTSLayerView3d")],r);const S=r;export{S as default};