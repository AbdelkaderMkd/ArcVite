import{a as t,b as p,c as m}from"./index-7af450d7.js";import a from"./FeatureLayerView2D-faab7c1a.js";import"./Container-1bd2a8b7.js";import"./parser-6c4b5959.js";import"./definitions-5e66166b.js";import"./enums-b14466b3.js";import"./Texture-ddba2d73.js";import"./FeatureEffect-2bbd4e53.js";import"./jsonUtils-42356934.js";import"./Query-4c693c57.js";import"./Field-fc2bd34d.js";import"./fieldType-37e9db9e.js";import"./FeatureSet-304f2314.js";import"./LayerView-e9f88212.js";import"./AttributeStoreView-00aba7d9.js";import"./TiledDisplayObject-d6b9c2e9.js";import"./LabelClass-411c9c4e.js";import"./labelUtils-623797c2.js";import"./defaultsJSON-b087dd4d.js";import"./featureFlags-78d5fc35.js";import"./diffUtils-e1a6fe87.js";import"./labelingInfo-58602860.js";import"./color-a2405c5c.js";import"./enums-f1a6a48a.js";import"./VertexElementDescriptor-2925c6af.js";import"./WGLContainer-82bf5950.js";import"./VertexArrayObject-475aed89.js";import"./ProgramTemplate-5385d3a0.js";import"./GeometryUtils-d05a94d5.js";import"./heatmapUtils-73c81fd5.js";import"./StyleDefinition-29c49b98.js";import"./config-1337d16e.js";import"./earcut-b0b14d3e.js";import"./featureConversionUtils-3aeae00f.js";import"./OptimizedGeometry-33b2eb0d.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./visualVariablesUtils-90138294.js";import"./ExpandedCIM-d3c1e76f.js";import"./BidiEngine-9a40f2f4.js";import"./GeometryUtils-984e8446.js";import"./utils-6b9ab231.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-a383a2df.js";import"./floatRGBA-9e073c80.js";import"./clusterUtils-66bf1196.js";import"./SizeVariable-cf2f4876.js";import"./colorRamps-7576a038.js";import"./LegendOptions-b705a3af.js";import"./lengthUtils-e64d76bb.js";import"./util-9f8e1b8f.js";import"./BitmapTileContainer-78a76989.js";import"./Bitmap-3dc9ab6c.js";import"./TileContainer-a40d1c29.js";import"./CircularArray-ef508845.js";import"./BufferPool-4871e5d7.js";import"./FeatureContainer-5e375654.js";import"./commonProperties-6df6e9c8.js";import"./ElevationInfo-01ca0eb8.js";import"./floorFilterUtils-080a7cd2.js";import"./popupUtils-b661628d.js";import"./RefreshableLayerView-22339721.js";const s=i=>{let r=class extends i{get availableFields(){return this.layer.fieldsIndex.fields.map(e=>e.name)}};return t([p()],r.prototype,"layer",void 0),t([p({readOnly:!0})],r.prototype,"availableFields",null),r=t([m("esri.views.layers.OGCFeatureLayerView")],r),r};let o=class extends s(a){supportsSpatialReference(i){return this.layer.serviceSupportsSpatialReference(i)}};o=t([m("esri.views.2d.layers.OGCFeatureLayerView2D")],o);const vr=o;export{vr as default};
