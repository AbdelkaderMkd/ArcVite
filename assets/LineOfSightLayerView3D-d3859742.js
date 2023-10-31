import{b0 as h,cD as w,aA as r,dO as d,aP as V,dQ as _,eZ as c,ci as u,aQ as e,aR as n,aT as p}from"./index-383689b1.js";import{n as A}from"./LayerView3D-80043e5c.js";import{d as f}from"./LayerView-fd5dbfea.js";const o="analysis-view-handles";let i=class extends A(f){constructor(s){super(s),this.type="line-of-sight-3d",this._analysisModule=null}initialize(){this.handles.add(h(()=>this.layer.analysis,s=>{this._destroyAnalysisView(),s!=null&&this._createAnalysisView(s)},w),o)}destroy(){this.handles.remove(o),this._destroyAnalysisView()}async whenAnalysisView(){if(this.analysisView!=null)return this.analysisView;if(this._createAnalysisViewTask!=null)return this._createAnalysisViewTask.promise;throw new r("layerview:no-analysisview-for-analysis","The analysis has not been set on the LineOfSightLayer of this layer view")}isUpdating(){return this._createAnalysisViewTask!=null||this.analysisView!=null&&this.analysisView.updating}_createAnalysisView(s){const t=d(async a=>(this.analysisView=await this._createAnalysisViewPromise(s,a),this._createAnalysisViewTask===t&&(this._createAnalysisViewTask=null),this.analysisView));this._createAnalysisViewTask=t}_destroyAnalysisView(){this.analysisView=V(this.analysisView),this._createAnalysisViewTask=_(this._createAnalysisViewTask)}async _createAnalysisViewPromise(s,t){let a=this._analysisModule;if(a==null){const y=await this._loadAnalysisModule();this._analysisModule=y,a=y}const l=new a.default({analysis:s,view:this.view,parent:this});if(await l.when(),c(t))throw l.destroy(),new r("layerview:no-analysisview-for-analysis","The analysis has not been added to the LineOfSightLayer of this layer view",{analysis:s});return l}_loadAnalysisModule(){return u(()=>import("./LineOfSightAnalysisView3D-60f8a54a.js"),["assets/LineOfSightAnalysisView3D-60f8a54a.js","assets/index-383689b1.js","assets/index-90fc0cd1.css","assets/AnalysisView3D-0fd3537d.js","assets/LineOfSightAnalysisTarget-23c43575.js","assets/persistable-ff1293bf.js","assets/resourceExtension-3683de57.js","assets/LineVisualElement-d2cf7b61.js","assets/analysisThemeUtils-0cdab925.js","assets/colorUtils-c6d7a582.js","assets/manipulatorUtils-11ea4a42.js","assets/ImageMaterial-8d447d01.js","assets/manipulatorUtils-ff593efa.js","assets/PointVisualElement-fd394b54.js","assets/VisualElementResources-ac07cbc4.js","assets/analysisViewUtils-bb4f86e2.js","assets/dragEventPipeline-21cae1ac.js","assets/drawUtils-428f2af2.js"])}};e([n()],i.prototype,"type",void 0),e([n()],i.prototype,"layer",void 0),e([n()],i.prototype,"analysisView",void 0),e([n()],i.prototype,"_createAnalysisViewTask",void 0),i=e([p("esri.views.3d.layers.LineOfSightLayerView3D")],i);const k=i;export{k as default};