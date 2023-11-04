import{I as n,b as m}from"./utils-a5772e52.js";import{at as o,az as c,av as p}from"./index-3572d442.js";import"./jsonContext-bb78002a.js";const i="Image Service",u="imagery-layer-save",g="imagery-layer-save-as",f="imagery-tile-layer-save",v="imagery-tile-layer-save-as";function s(a){var t;if(a.type==="imagery")return{isValid:!0};const{raster:e}=a,r=(e==null?void 0:e.datasetFormat)==="Function"?(t=e.primaryRasters)==null?void 0:t.rasters[0]:e;return{isValid:(r==null?void 0:r.datasetFormat)==="RasterTileServer"&&(r.tileType==="Raster"||r.tileType==="Map"),errorMessage:"imagery tile layer should be created from a tiled image service."}}function l(a){const e=a.layerJSON;return Promise.resolve(e&&Object.keys(e).length?e:null)}async function d(a,e){const{parsedUrl:r,title:t,fullExtent:y}=a;e.url=r.path,e.title||(e.title=t),e.extent=await o(y),a.type==="imagery-tile"&&c(e,p.TILED_IMAGERY)}async function P(a,e){const r=a.type==="imagery"?u:f;return n({layer:a,itemType:i,validateLayer:s,createItemData:l,errorNamePrefix:r},e)}async function R(a,e,r){const t=a.type==="imagery"?g:v;return m({layer:a,itemType:i,validateLayer:s,createItemData:l,errorNamePrefix:t,newItem:e,setItemProperties:d},r)}export{P as save,R as saveAs};