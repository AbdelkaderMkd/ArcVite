import{aR as a,aM as i}from"./index-7af450d7.js";import{p as e}from"./queryTopFeatures-31541d4c.js";import{S as n}from"./TopFeaturesQuery-e7fbfaaf.js";import"./normalizeUtils-fbcb2351.js";import"./normalizeUtilsCommon-7cb21fa5.js";import"./query-a617fcf5.js";import"./pbfQueryUtils-4625bc70.js";import"./pbf-5f594bd6.js";import"./OptimizedGeometry-33b2eb0d.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./queryZScale-beb984cb.js";async function E(o,r,m){const p=a(o),t=await e(p,n.from(r),{...m});return{count:t.data.count,extent:i.fromJSON(t.data.extent)}}export{E as executeForTopExtents};
