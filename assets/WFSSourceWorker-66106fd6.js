import{aC as p,S as l,cl as o,T as u,cm as g,d as _,s as d}from"./index-694ce44d.js";import{r as f,s as w}from"./featureConversionUtils-0828833d.js";import{m as E}from"./FeatureStore-b8cc0b12.js";import{g as q,f as F}from"./projectionSupport-657658d1.js";import{e as S}from"./QueryEngine-4e0b0889.js";import{T as x,I as T}from"./geojson-a4c561bb.js";import{d as I}from"./sourceUtils-208a5daf.js";import{H as b}from"./wfsUtils-54524509.js";import{r as C}from"./FieldsIndex-c27e2366.js";import"./OptimizedGeometry-33b2eb0d.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./BoundsStore-3c7db29f.js";import"./PooledRBush-c5ff95df.js";import"./timeSupport-d8187380.js";import"./normalizeUtils-02a847e9.js";import"./normalizeUtilsCommon-85cfc130.js";import"./json-48e3ea08.js";import"./LRUCache-962ebf1b.js";import"./WhereClause-83e0ab0f.js";import"./executionError-c92d3b85.js";import"./QueryEngineCapabilities-42e44ded.js";import"./quantizationUtils-d5ac8a7f.js";import"./utils-fd435670.js";import"./generateRendererUtils-f730daa9.js";import"./xmlUtils-444cb4c0.js";import"./Field-4b4f6277.js";import"./fieldType-46122f1d.js";class se{constructor(){this._queryEngine=null,this._customParameters=null,this._snapshotFeatures=async e=>{const{objectIdField:t}=this._queryEngine,s=await b(this._getFeatureUrl??"",this._featureType.typeName,this._getFeatureOutputFormat,{customParameters:this._customParameters,dateFields:this._queryEngine.fieldsIndex.dateFields.map(r=>r.name),signal:e});await x(s),p(e);const a=T(s,{geometryType:this._queryEngine.geometryType,hasZ:!1,objectIdField:t});if(!l(this._queryEngine.spatialReference,o))for(const r of a)r.geometry!=null&&(r.geometry=f(q(w(r.geometry,this._queryEngine.geometryType,!1,!1),o,this._queryEngine.spatialReference)));let n=1;for(const r of a){const i={};I(this._fieldsIndex,i,r.attributes,!0),r.attributes=i,r.attributes[t]==null&&(r.objectId=r.attributes[t]=n++)}return a}}destroy(){var e;(e=this._queryEngine)==null||e.destroy(),this._queryEngine=null}async load(e,t){const{getFeatureUrl:s,getFeatureOutputFormat:a,spatialReference:n,fields:r,geometryType:i,featureType:h,objectIdField:m,customParameters:y}=e;this._featureType=h,this._customParameters=y,this._getFeatureUrl=s,this._getFeatureOutputFormat=a,this._fieldsIndex=new C(r),await this._checkProjection(n),p(t),this._queryEngine=new S({fields:r,geometryType:i,hasM:!1,hasZ:!1,objectIdField:m,spatialReference:n,timeInfo:null,featureStore:new E({geometryType:i,hasM:!1,hasZ:!1})});const c=await this._snapshotFeatures(t.signal);return this._queryEngine.featureStore.addMany(c),{extent:(await this._queryEngine.fetchRecomputedExtents()).fullExtent}}async applyEdits(){throw new u("wfs-source:editing-not-supported","applyEdits() is not supported on WFSLayer")}async queryFeatures(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}async querySnapping(e,t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(e,t.signal)}async refresh(e){var t;return this._customParameters=e,(t=this._snapshotTask)==null||t.abort(),this._snapshotTask=g(this._snapshotFeatures),this._snapshotTask.promise.then(s=>{this._queryEngine.featureStore.clear(),s&&this._queryEngine.featureStore.addMany(s)},s=>{this._queryEngine.featureStore.clear(),_(s)||d.getLogger("esri.layers.WFSLayer").error(new u("wfs-layer:getfeature-error","An error occurred during the GetFeature request",{error:s}))}),await this._waitSnapshotComplete(),{extent:(await this._queryEngine.fetchRecomputedExtents()).fullExtent}}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _checkProjection(e){try{await F(o,e)}catch{throw new u("unsupported-projection","Projection not supported",{spatialReference:e})}}}export{se as default};
