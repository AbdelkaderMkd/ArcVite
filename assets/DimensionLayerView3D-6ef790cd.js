import{aQ as a,aR as t,aT as y,b5 as h,dP as w,b0 as d,cD as c,aA as u,dO as V,aP as p,dQ as _,eZ as m,ci as v}from"./index-383689b1.js";import{n as A}from"./LayerView3D-80043e5c.js";import{d as D}from"./LayerView-fd5dbfea.js";const f=i=>{let s=class extends i{constructor(...e){super(...e),this.layer=null}get interactive(){return this.analysisView!=null&&this.analysisView.interactive}set interactive(e){this.analysisView!=null&&(this.analysisView.interactive=e)}get results(){return this.analysisView!=null?this.analysisView.results:new h}get selectedDimension(){return this.analysisView!=null?this.analysisView.selectedDimension:null}set selectedDimension(e){this.analysisView!=null&&(this.analysisView.selectedDimension=e)}async createLengthDimensions(e){if(this.analysisView==null)throw w();await this.analysisView.createLengthDimensions(e)}};return a([t()],s.prototype,"layer",void 0),a([t()],s.prototype,"interactive",null),a([t({readOnly:!0})],s.prototype,"results",null),a([t()],s.prototype,"selectedDimension",null),a([t()],s.prototype,"analysisView",void 0),s=a([y("esri.views.layers.DimensionLayerView")],s),s},o="analysis-view-handles";let n=class extends A(f(D)){constructor(i){super(i),this.type="dimension-3d",this._analysisModule=null}initialize(){this.handles.add(d(()=>this.layer.source,i=>{this._destroyAnalysisView(),i!=null&&this._createAnalysisView(i)},c),o)}destroy(){this.handles.remove(o),this._destroyAnalysisView()}isUpdating(){return this._createAnalysisViewTask!=null||this.analysisView!=null&&this.analysisView.updating}async whenAnalysisView(){if(this.analysisView!=null)return this.analysisView;if(this._createAnalysisViewTask!=null)return this._createAnalysisViewTask.promise;throw new u("layerview:no-analysisview-for-analysis","The analysis has not been set on the DimensionLayer of this layer view")}_createAnalysisView(i){const s=V(async e=>(this.analysisView=await this._createAnalysisViewPromise(i,e),this._createAnalysisViewTask===s&&(this._createAnalysisViewTask=null),this.analysisView));this.addResolvingPromise(s.promise),this._createAnalysisViewTask=s}_destroyAnalysisView(){this.analysisView=p(this.analysisView),this._createAnalysisViewTask=_(this._createAnalysisViewTask)}async _createAnalysisViewPromise(i,s){let e=this._analysisModule;if(e==null){const r=await this._loadAnalysisModule();this._analysisModule=r,e=r}const l=new e.default({analysis:i,view:this.view,parent:this});if(await l.when(),m(s))throw l.destroy(),w();return l}_loadAnalysisModule(){return v(()=>import("./DimensionAnalysisView3D-cd04bea8.js"),["assets/DimensionAnalysisView3D-cd04bea8.js","assets/index-383689b1.js","assets/index-90fc0cd1.css","assets/AnalysisView3D-0fd3537d.js","assets/LengthDimension-266a4797.js","assets/quantityFormatUtils-65d5b034.js","assets/Segment-9bb1c862.js","assets/LineVisualElement-d2cf7b61.js","assets/TextOverlayItem-8ee3715f.js","assets/euclideanLengthMeasurementUtils-b79fc2ab.js","assets/measurementUtils-ba18aea5.js","assets/analysisThemeUtils-0cdab925.js","assets/colorUtils-c6d7a582.js","assets/manipulatorUtils-11ea4a42.js","assets/ImageMaterial-8d447d01.js","assets/Factory-1764838d.js","assets/dragEventPipeline-21cae1ac.js","assets/drawUtils-428f2af2.js","assets/VerticesVisualElement-67e16476.js","assets/RightAngleQuadVisualElement-621cfda0.js","assets/VisualElementResources-ac07cbc4.js","assets/PointVisualElement-fd394b54.js","assets/SnappingContext-c6804e8e.js","assets/PointSnappingHint-ed855f12.js","assets/EditGeometryOperations-57341d6f.js","assets/SnappingOperation-f70b0b78.js","assets/dehydratedFeatureComparison-0846371a.js","assets/analysisViewUtils-bb4f86e2.js"])}};a([t()],n.prototype,"type",void 0),a([t()],n.prototype,"analysisView",void 0),a([t()],n.prototype,"_createAnalysisViewTask",void 0),n=a([y("esri.views.3d.layers.DimensionLayerView3D")],n);const g=n;export{g as default};