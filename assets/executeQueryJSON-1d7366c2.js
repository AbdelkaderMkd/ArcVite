import{aR as i}from"./index-7af450d7.js";import{m as c}from"./query-a617fcf5.js";import{d as e}from"./FeatureSet-304f2314.js";import{b as s}from"./Query-4c693c57.js";async function R(r,o,t){const a=await p(r,o,t);return e.fromJSON(a)}async function p(r,o,t){const a=i(r),m={...t},n=s.from(o),{data:f}=await c(a,n,n.sourceSpatialReference,m);return f}export{p as a,R as s};
