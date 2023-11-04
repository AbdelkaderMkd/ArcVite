import{aO as l,f0 as m,aB as _,as as n,bp as g,aR as d,aC as p,aD as u,aF as w}from"./index-3572d442.js";import{m as y,c as f,C as k,T as M,j as V,S as v,O as G}from"./Stop-5eb4a26d.js";import{m as I}from"./LayerView2D-75cdb63f.js";import{i as F}from"./GraphicContainer-cac9e8c3.js";import{r as C}from"./GraphicsView2D-42b00db6.js";import{u as H}from"./LayerView-e8e5ef51.js";import"./Container-6f579da3.js";import"./definitions-f926d1a5.js";import"./enums-b1d611e3.js";import"./BaseGraphicContainer-3f2a02af.js";import"./FeatureContainer-b839d6c2.js";import"./AttributeStoreView-4c28c213.js";import"./color-5d593af9.js";import"./number-e491b09e.js";import"./WGLContainer-98654cd1.js";import"./WGLBrushVTLSymbol-4e301e2a.js";import"./vec4f32-0d1b2306.js";import"./GeometryUtils-dd03fc25.js";import"./ShaderCompiler-77d0dcb6.js";import"./ProgramTemplate-1a91efd6.js";import"./MaterialKey-05dc7bce.js";import"./alignmentUtils-ae955d28.js";import"./heatmapTextureUtils-61534fe7.js";import"./visualVariablesUtils-1fa1b221.js";import"./cimAnalyzer-150a8296.js";import"./BidiEngine-9a40f2f4.js";import"./labelPoint-bb8bc683.js";import"./GeometryUtils-984e8446.js";import"./Rect-ea14f53a.js";import"./ExpandedCIM-ae1f6e0f.js";import"./util-cd4c507d.js";import"./TileContainer-5e05f4a0.js";import"./normalizeUtilsSync-86570995.js";import"./projectionSupport-cd867045.js";import"./json-48e3ea08.js";import"./Matcher-5a02b3c0.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-dc12a110.js";import"./ComputedAttributeStorage-a3f2b133.js";import"./TimeOnly-b48aab9d.js";const U=["route-info","direction-line","direction-point","polygon-barrier","polyline-barrier","point-barrier","stop"],a={graphic:null,property:null,oldValue:null,newValue:null};function c(t){return t instanceof y||t instanceof f||t instanceof k||t instanceof M||t instanceof V||t instanceof v||t instanceof G}function b(t){return l.isCollection(t)&&t.length&&c(t.at(0))}function $(t){return Array.isArray(t)&&t.length>0&&c(t[0])}let h=class extends I(H){constructor(){super(...arguments),this._graphics=new l,this._highlightIds=new Map,this._networkFeatureMap=new Map,this._networkGraphicMap=new Map}get _routeItems(){return new m({getCollections:()=>this.layer==null||this.destroyed?[]:[this.layer.routeInfo!=null?new l([this.layer.routeInfo]):null,this.layer.directionLines,this.layer.directionPoints,this.layer.polygonBarriers,this.layer.polylineBarriers,this.layer.pointBarriers,this.layer.stops]})}initialize(){this._updatingHandles.addOnCollectionChange(()=>this._routeItems,t=>this._routeItemsChanged(t),_)}destroy(){var t;this._networkFeatureMap.clear(),this._networkGraphicMap.clear(),this._graphics.removeAll(),(t=this._get("_routeItems"))==null||t.destroy()}attach(){this._createGraphicsView()}detach(){this._destroyGraphicsView()}async fetchPopupFeatures(t){return this._graphicsView.hitTest(t).filter(e=>!!e.popupTemplate)}highlight(t){let e;e=c(t)?[this._getNetworkFeatureUid(t)]:$(t)?t.map(r=>this._getNetworkFeatureUid(r)):b(t)?t.map(r=>this._getNetworkFeatureUid(r)).toArray():[t.uid];const i=e.filter(n);return i.length?(this._addHighlight(i),g(()=>this._removeHighlight(i))):g()}async hitTest(t,e){if(this.suspended)return null;const i=this._graphicsView.hitTest(t).filter(n).map(s=>this._networkGraphicMap.get(s));if(!i.length)return null;const{layer:r}=this;return i.reverse().map(s=>({type:"route",layer:r,mapPoint:t,networkFeature:s}))}isUpdating(){return this._graphicsView.updating}moveStart(){}moveEnd(){}update(t){this._graphicsView.processUpdate(t)}viewChange(){this._graphicsView.viewChange()}_addHighlight(t){for(const e of t)if(this._highlightIds.has(e)){const i=this._highlightIds.get(e);this._highlightIds.set(e,i+1)}else this._highlightIds.set(e,1);this._updateHighlight()}_createGraphic(t){const e=t.toGraphic();return e.layer=this.layer,e.sourceLayer=this.layer,e}_createGraphicsView(){const t=this.view,e=()=>this.requestUpdate(),i=new F(t.featuresTilingScheme);this._graphicsView=new C({container:i,graphics:this._graphics,requestUpdateCallback:e,view:t}),this.container.addChild(i),this._updateHighlight()}_destroyGraphicsView(){this.container.removeChild(this._graphicsView.container),this._graphicsView.destroy()}_getDrawOrder(t){const e=this._networkGraphicMap.get(t);return U.indexOf(e.type)}_getNetworkFeatureUid(t){return this._networkFeatureMap.has(t)?this._networkFeatureMap.get(t).uid:null}_removeHighlight(t){for(const e of t)if(this._highlightIds.has(e)){const i=this._highlightIds.get(e)-1;i===0?this._highlightIds.delete(e):this._highlightIds.set(e,i)}this._updateHighlight()}_routeItemsChanged(t){if(t.removed.length){this._graphics.removeMany(t.removed.map(e=>{const i=this._networkFeatureMap.get(e);return this._networkFeatureMap.delete(e),this._networkGraphicMap.delete(i),i}));for(const e of t.removed)this.removeHandles(e)}if(t.added.length){this._graphics.addMany(t.added.map(e=>{const i=this._createGraphic(e);return i.symbol==null?null:(this._networkFeatureMap.set(e,i),this._networkGraphicMap.set(i,e),i)}).filter(n));for(const e of t.added)this.addHandles([d(()=>e.geometry,(i,r)=>{this._updateGraphic(e,"geometry",i,r)}),d(()=>e.symbol,(i,r)=>{this._updateGraphic(e,"symbol",i,r)})],e);this._graphics.sort((e,i)=>this._getDrawOrder(e)-this._getDrawOrder(i))}}_updateGraphic(t,e,i,r){if(!this._networkFeatureMap.has(t)){const o=this._createGraphic(t);return this._networkFeatureMap.set(t,o),this._networkGraphicMap.set(o,t),void this._graphics.add(o)}const s=this._networkFeatureMap.get(t);s[e]=i,a.graphic=s,a.property=e,a.oldValue=r,a.newValue=i,this._graphicsView.graphicUpdateHandler(a)}_updateHighlight(){const t=Array.from(this._highlightIds.keys());this._graphicsView.setHighlight(t)}};p([u()],h.prototype,"_graphics",void 0),p([u()],h.prototype,"_routeItems",null),h=p([w("esri.views.2d.layers.RouteLayerView2D")],h);const yt=h;export{yt as default};