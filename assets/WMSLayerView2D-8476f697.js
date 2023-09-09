import{a as o,b as m,c as I,g as M,T as g,d as F,s as C,l as E,aM as R}from"./index-7af450d7.js";import{a as b}from"./BitmapContainer-1fcf9905.js";import{f as q,d as U}from"./LayerView-e9f88212.js";import{v as V}from"./ExportStrategy-b77b8472.js";import{a as W}from"./RefreshableLayerView-22339721.js";import{b as L}from"./commonProperties-6df6e9c8.js";import{l as H}from"./ExportWMSImageParameters-b5c6cd8f.js";import"./WGLContainer-82bf5950.js";import"./definitions-5e66166b.js";import"./VertexArrayObject-475aed89.js";import"./Texture-ddba2d73.js";import"./enums-b14466b3.js";import"./VertexElementDescriptor-2925c6af.js";import"./color-a2405c5c.js";import"./enums-f1a6a48a.js";import"./ProgramTemplate-5385d3a0.js";import"./GeometryUtils-d05a94d5.js";import"./heatmapUtils-73c81fd5.js";import"./StyleDefinition-29c49b98.js";import"./config-1337d16e.js";import"./Container-1bd2a8b7.js";import"./parser-6c4b5959.js";import"./earcut-b0b14d3e.js";import"./featureConversionUtils-3aeae00f.js";import"./OptimizedGeometry-33b2eb0d.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./Bitmap-3dc9ab6c.js";import"./ElevationInfo-01ca0eb8.js";import"./lengthUtils-e64d76bb.js";const j=e=>{let t=class extends e{initialize(){this.exportImageParameters=new H({layer:this.layer})}destroy(){this.exportImageParameters=M(this.exportImageParameters)}get exportImageVersion(){var r;return(r=this.exportImageParameters)==null||r.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}fetchPopupFeatures(r){const{layer:a}=this;if(!r)return Promise.reject(new g("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:a}));const{popupEnabled:p}=a;if(!p)return Promise.reject(new g("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:p}));const u=this.createFetchPopupFeaturesQuery(r);if(!u)return Promise.resolve([]);const{extent:i,width:s,height:n,x:d,y:c}=u;if(!(i&&s&&n))throw new g("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:i,width:s,height:n});return a.fetchFeatureInfo(i,s,n,d,c)}};return o([m()],t.prototype,"exportImageParameters",void 0),o([m({readOnly:!0})],t.prototype,"exportImageVersion",null),o([m()],t.prototype,"layer",void 0),o([m(L)],t.prototype,"timeExtent",void 0),t=o([I("esri.layers.mixins.WMSLayerView")],t),t};let h=class extends j(W(q(U))){constructor(){super(...arguments),this.bitmapContainer=new b}supportsSpatialReference(e){return this.layer.serviceSupportsSpatialReference(e)}update(e){this.strategy.update(e).catch(t=>{F(t)||C.getLogger(this).error(t)})}attach(){const{layer:e}=this,{imageMaxHeight:t,imageMaxWidth:r}=e;this.bitmapContainer=new b,this.container.addChild(this.bitmapContainer),this.strategy=new V({container:this.bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxHeight:t,imageMaxWidth:r,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1}),this.addAttachHandles(E(()=>this.exportImageVersion,()=>this.requestUpdate()))}detach(){this.strategy=M(this.strategy),this.container.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}createFetchPopupFeaturesQuery(e){const{view:t,bitmapContainer:r}=this,{x:a,y:p}=e,{spatialReference:u}=t;let i,s=0,n=0;if(r.children.some($=>{const{width:x,height:f,resolution:w,x:l,y}=$,v=l+w*x,P=y-w*f;return a>=l&&a<=v&&p<=y&&p>=P&&(i=new R({xmin:l,ymin:P,xmax:v,ymax:y,spatialReference:u}),s=x,n=f,!0)}),!i)return null;const d=i.width/s,c=Math.round((a-i.xmin)/d),S=Math.round((i.ymax-p)/d);return{extent:i,width:s,height:n,x:c,y:S}}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(e,t,r,a){return this.layer.fetchImageBitmap(e,t,r,{timeExtent:this.timeExtent,...a})}};o([m()],h.prototype,"strategy",void 0),o([m()],h.prototype,"updating",void 0),h=o([I("esri.views.2d.layers.WMSLayerView2D")],h);const ct=h;export{ct as default};