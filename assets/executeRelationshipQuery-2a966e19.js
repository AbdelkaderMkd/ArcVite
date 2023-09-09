import{a1 as m,aR as l}from"./index-694ce44d.js";import{t as p}from"./query-4ea9d361.js";import{d as R}from"./FeatureSet-4437a566.js";import f from"./RelationshipQuery-aa2b3a43.js";import"./normalizeUtils-02a847e9.js";import"./normalizeUtilsCommon-85cfc130.js";import"./pbfQueryUtils-d7a29f70.js";import"./pbf-a4c6cc53.js";import"./OptimizedGeometry-33b2eb0d.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./queryZScale-38870e48.js";import"./Field-4b4f6277.js";import"./fieldType-46122f1d.js";import"./Query-90ca4e6a.js";function j(r,t){const e=r.toJSON();return e.objectIds&&(e.objectIds=e.objectIds.join(",")),e.orderByFields&&(e.orderByFields=e.orderByFields.join(",")),e.outFields&&!(t!=null&&t.returnCountOnly)?e.outFields.includes("*")?e.outFields="*":e.outFields=e.outFields.join(","):delete e.outFields,e.outSpatialReference&&(e.outSR=e.outSR.wkid||JSON.stringify(e.outSR.toJSON()),delete e.outSpatialReference),e.dynamicDataSource&&(e.layer=JSON.stringify({source:e.dynamicDataSource}),delete e.dynamicDataSource),e}async function S(r,t,e){const n=await y(r,t,e),o=n.data,s=o.geometryType,a=o.spatialReference,i={};for(const c of o.relatedRecordGroups){const d={fields:void 0,objectIdFieldName:void 0,geometryType:s,spatialReference:a,hasZ:!!o.hasZ,hasM:!!o.hasM,features:c.relatedRecords};if(c.objectId!=null)i[c.objectId]=d;else for(const u of Object.keys(c))u!=="relatedRecords"&&(i[c[u]]=d)}return{...n,data:i}}async function F(r,t,e){const n=await y(r,t,e,{returnCountOnly:!0}),o=n.data,s={};for(const a of o.relatedRecordGroups)a.objectId!=null&&(s[a.objectId]=a.count);return{...n,data:s}}async function y(r,t,e={},n){const o=p({...r.query,f:"json",...n,...j(t,n)});return m(r.path+"/queryRelatedRecords",{...e,query:{...e.query,...o}})}async function $(r,t,e){t=f.from(t);const n=l(r);return S(n,t,e).then(o=>{const s=o.data,a={};return Object.keys(s).forEach(i=>a[i]=R.fromJSON(s[i])),a})}async function v(r,t,e){t=f.from(t);const n=l(r);return F(n,t,{...e}).then(o=>o.data)}export{$ as executeRelationshipQuery,v as executeRelationshipQueryForCount};