import{aX as n,b2 as g,aw as d,a$ as l,b0 as u,aQ as s,aR as o,aT as c}from"./index-383689b1.js";import{a as f}from"./BitmapContainer-348792c1.js";import{f as y}from"./LayerView2D-26931b5c.js";import{o as w}from"./GraphicsView2D-dd35d9f0.js";import{n as H}from"./HighlightGraphicContainer-3af44fdb.js";import{v as _}from"./ExportStrategy-22b4e852.js";import{d as v}from"./LayerView-fd5dbfea.js";import{p as x}from"./MapImageLayerView-72908255.js";import{a as U}from"./RefreshableLayerView-344b5884.js";import{U as $}from"./MapServiceLayerViewHelper-ad540f5d.js";import"./WGLContainer-b3d550a0.js";import"./definitions-24f6db57.js";import"./WGLBrushVTLSymbol-7648093c.js";import"./enums-b1d611e3.js";import"./number-e491b09e.js";import"./GeometryUtils-dd03fc25.js";import"./color-90ea320b.js";import"./ShaderCompiler-77d0dcb6.js";import"./ProgramTemplate-3f877313.js";import"./MaterialKey-bc9622a6.js";import"./alignmentUtils-ae955d28.js";import"./heatmapTextureUtils-dfcf9845.js";import"./Container-ed32c6f2.js";import"./EffectView-42d45802.js";import"./cimAnalyzer-fbeace2d.js";import"./BidiEngine-9a40f2f4.js";import"./GeometryUtils-984e8446.js";import"./Rect-ea14f53a.js";import"./normalizeUtilsSync-91b0dd4d.js";import"./projectionSupport-2845339d.js";import"./json-48e3ea08.js";import"./AttributeStoreView-9283c0d8.js";import"./visualVariablesUtils-c75c6d50.js";import"./ExpandedCIM-1490c593.js";import"./util-91c099d2.js";import"./Matcher-069875c6.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-e1a33598.js";import"./ComputedAttributeStorage-c3d08a49.js";import"./arcadeTimeUtils-f531775a.js";import"./centroid-8e8cfa47.js";import"./BaseGraphicContainer-1b0193fe.js";import"./FeatureContainer-f0d2b018.js";import"./TileContainer-c1cadeee.js";import"./Bitmap-52374ba3.js";import"./ExportImageParameters-7dc1872f.js";import"./floorFilterUtils-080a7cd2.js";import"./sublayerUtils-3aef8a3d.js";import"./popupUtils-98519cca.js";let a=class extends x(U(y(v))){constructor(){super(...arguments),this._highlightGraphics=new n,this._updateHash=""}fetchPopupFeatures(t,i){return this._popupHighlightHelper.fetchPopupFeatures(t,i)}update(t){const i=`${this.exportImageVersion}/${t.state.id}/${t.pixelRatio}/${t.stationary}`;this._updateHash!==i&&(this._updateHash=i,this.strategy.update(t).catch(e=>{g(e)||d.getLogger(this).error(e)}),t.stationary&&this._popupHighlightHelper.updateHighlightedFeatures(t.state.resolution)),this._highlightView.processUpdate(t)}attach(){const{imageMaxWidth:t,imageMaxHeight:i,version:e}=this.layer,r=e>=10.3,m=e>=10;this._bitmapContainer=new f,this.container.addChild(this._bitmapContainer),this._highlightView=new w({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new H(this.view.featuresTilingScheme),defaultPointSymbolEnabled:!1}),this.container.addChild(this._highlightView.container),this._popupHighlightHelper=new $({createFetchPopupFeaturesQueryGeometry:(h,p)=>l(h,p,this.view),highlightGraphics:this._highlightGraphics,highlightGraphicUpdated:(h,p)=>{this._highlightView.graphicUpdateHandler({graphic:h,property:p})},layerView:this,updatingHandles:this.updatingHandles}),this.strategy=new _({container:this._bitmapContainer,fetchSource:this.fetchImageBitmap.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxWidth:t,imageMaxHeight:i,imageRotationSupported:r,imageNormalizationSupported:m,hidpi:!0}),this.addAttachHandles(u(()=>this.exportImageVersion,()=>this.requestUpdate())),this.requestUpdate()}detach(){this.strategy.destroy(),this.container.removeAllChildren(),this._bitmapContainer.removeAllChildren(),this._highlightView.destroy(),this._popupHighlightHelper.destroy()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}supportsSpatialReference(t){return this.layer.serviceSupportsSpatialReference(t)}async doRefresh(){this._updateHash="",this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(t,i,e,r){return this.layer.fetchImage(t,i,e,{timeExtent:this.timeExtent,floors:this.floors,...r})}fetchImageBitmap(t,i,e,r){return this.layer.fetchImageBitmap(t,i,e,{timeExtent:this.timeExtent,floors:this.floors,...r})}highlight(t){return this._popupHighlightHelper.highlight(t)}};s([o()],a.prototype,"strategy",void 0),s([o()],a.prototype,"updating",void 0),a=s([c("esri.views.2d.layers.MapImageLayerView2D")],a);const _t=a;export{_t as default};