import{b5 as l,dL as u,aO as m,ba as n,b0 as g,aQ as p,aR as d,aT as _}from"./index-383689b1.js";import{m as w,c as y,C as f,T as k,j as M,S as v,O as V}from"./Stop-3cfa74d3.js";import{f as G}from"./LayerView2D-26931b5c.js";import{i as I}from"./GraphicContainer-08358de5.js";import{o as F}from"./GraphicsView2D-dd35d9f0.js";import{d as H}from"./LayerView-fd5dbfea.js";import"./Container-ed32c6f2.js";import"./EffectView-42d45802.js";import"./definitions-24f6db57.js";import"./enums-b1d611e3.js";import"./BaseGraphicContainer-1b0193fe.js";import"./FeatureContainer-f0d2b018.js";import"./AttributeStoreView-9283c0d8.js";import"./color-90ea320b.js";import"./number-e491b09e.js";import"./WGLContainer-b3d550a0.js";import"./WGLBrushVTLSymbol-7648093c.js";import"./GeometryUtils-dd03fc25.js";import"./ShaderCompiler-77d0dcb6.js";import"./ProgramTemplate-3f877313.js";import"./MaterialKey-bc9622a6.js";import"./alignmentUtils-ae955d28.js";import"./heatmapTextureUtils-dfcf9845.js";import"./visualVariablesUtils-c75c6d50.js";import"./cimAnalyzer-fbeace2d.js";import"./BidiEngine-9a40f2f4.js";import"./GeometryUtils-984e8446.js";import"./Rect-ea14f53a.js";import"./ExpandedCIM-1490c593.js";import"./util-91c099d2.js";import"./TileContainer-c1cadeee.js";import"./normalizeUtilsSync-91b0dd4d.js";import"./projectionSupport-2845339d.js";import"./json-48e3ea08.js";import"./Matcher-069875c6.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-e1a33598.js";import"./ComputedAttributeStorage-c3d08a49.js";import"./arcadeTimeUtils-f531775a.js";import"./centroid-8e8cfa47.js";const C=Object.freeze({remove(){},pause(){},resume(){}}),b=["route-info","direction-line","direction-point","polygon-barrier","polyline-barrier","point-barrier","stop"],a={graphic:null,property:null,oldValue:null,newValue:null};function c(e){return e instanceof w||e instanceof y||e instanceof f||e instanceof k||e instanceof M||e instanceof v||e instanceof V}function U(e){return l.isCollection(e)&&e.length&&c(e.at(0))}function O(e){return Array.isArray(e)&&e.length>0&&c(e[0])}let h=class extends G(H){constructor(){super(...arguments),this._graphics=new l,this._highlightIds=new Map,this._networkFeatureMap=new Map,this._networkGraphicMap=new Map}get _routeItems(){return new u({getCollections:()=>this.layer==null||this.destroyed?[]:[this.layer.routeInfo!=null?new l([this.layer.routeInfo]):null,this.layer.directionLines,this.layer.directionPoints,this.layer.polygonBarriers,this.layer.polylineBarriers,this.layer.pointBarriers,this.layer.stops]})}initialize(){this.updatingHandles.addOnCollectionChange(()=>this._routeItems,e=>this._routeItemsChanged(e),m)}destroy(){var e;this._networkFeatureMap.clear(),this._networkGraphicMap.clear(),this._graphics.removeAll(),(e=this._get("_routeItems"))==null||e.destroy()}attach(){this._createGraphicsView()}detach(){this._destroyGraphicsView()}async fetchPopupFeatures(e){return this._graphicsView.hitTest(e).filter(t=>!!t.popupTemplate)}highlight(e){let t;t=c(e)?[this._getNetworkFeatureUid(e)]:O(e)?e.map(r=>this._getNetworkFeatureUid(r)):U(e)?e.map(r=>this._getNetworkFeatureUid(r)).toArray():[e.uid];const i=t.filter(n);return i.length?(this._addHighlight(i),{remove:()=>this._removeHighlight(i)}):C}async hitTest(e,t){if(this.suspended)return null;const i=this._graphicsView.hitTest(e).filter(n).map(s=>this._networkGraphicMap.get(s));if(!i.length)return null;const{layer:r}=this;return i.reverse().map(s=>({type:"route",layer:r,mapPoint:e,networkFeature:s}))}isUpdating(){return this._graphicsView.updating}moveStart(){}moveEnd(){}update(e){this._graphicsView.processUpdate(e)}viewChange(){this._graphicsView.viewChange()}_addHighlight(e){for(const t of e)if(this._highlightIds.has(t)){const i=this._highlightIds.get(t);this._highlightIds.set(t,i+1)}else this._highlightIds.set(t,1);this._updateHighlight()}_createGraphic(e){const t=e.toGraphic();return t.layer=this.layer,t.sourceLayer=this.layer,t}_createGraphicsView(){const e=this.view,t=()=>this.requestUpdate(),i=new I(e.featuresTilingScheme);this._graphicsView=new F({container:i,graphics:this._graphics,requestUpdateCallback:t,view:e}),this.container.addChild(i),this._updateHighlight()}_destroyGraphicsView(){this.container.removeChild(this._graphicsView.container),this._graphicsView.destroy()}_getDrawOrder(e){const t=this._networkGraphicMap.get(e);return b.indexOf(t.type)}_getNetworkFeatureUid(e){return this._networkFeatureMap.has(e)?this._networkFeatureMap.get(e).uid:null}_removeHighlight(e){for(const t of e)if(this._highlightIds.has(t)){const i=this._highlightIds.get(t)-1;i===0?this._highlightIds.delete(t):this._highlightIds.set(t,i)}this._updateHighlight()}_routeItemsChanged(e){if(e.removed.length){this._graphics.removeMany(e.removed.map(t=>{const i=this._networkFeatureMap.get(t);return this._networkFeatureMap.delete(t),this._networkGraphicMap.delete(i),i}));for(const t of e.removed)this.removeHandles(t)}if(e.added.length){this._graphics.addMany(e.added.map(t=>{const i=this._createGraphic(t);return i.symbol==null?null:(this._networkFeatureMap.set(t,i),this._networkGraphicMap.set(i,t),i)}).filter(n));for(const t of e.added)this.addHandles([g(()=>t.geometry,(i,r)=>{this._updateGraphic(t,"geometry",i,r)}),g(()=>t.symbol,(i,r)=>{this._updateGraphic(t,"symbol",i,r)})],t);this._graphics.sort((t,i)=>this._getDrawOrder(t)-this._getDrawOrder(i))}}_updateGraphic(e,t,i,r){if(!this._networkFeatureMap.has(e)){const o=this._createGraphic(e);return this._networkFeatureMap.set(e,o),this._networkGraphicMap.set(o,e),void this._graphics.add(o)}const s=this._networkFeatureMap.get(e);s[t]=i,a.graphic=s,a.property=t,a.oldValue=r,a.newValue=i,this._graphicsView.graphicUpdateHandler(a)}_updateHighlight(){const e=Array.from(this._highlightIds.keys());this._graphicsView.setHighlight(e)}};p([d()],h.prototype,"_graphics",void 0),p([d()],h.prototype,"_routeItems",null),h=p([_("esri.views.2d.layers.RouteLayerView2D")],h);const ye=h;export{ye as default};