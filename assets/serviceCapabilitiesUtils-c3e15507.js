import{a as d,b as C,c as f,ap as Q,V as w,aV as R,v as F,b7 as x}from"./index-694ce44d.js";var g;let a=g=class extends Q{constructor(s){super(s),this.floorField=null,this.viewAllMode=!1,this.viewAllLevelIds=new w}clone(){return new g({floorField:this.floorField,viewAllMode:this.viewAllMode,viewAllLevelIds:this.viewAllLevelIds})}};d([C({type:String,json:{write:!0}})],a.prototype,"floorField",void 0),d([C({json:{read:!1,write:!1}})],a.prototype,"viewAllMode",void 0),d([C({json:{read:!1,write:!1}})],a.prototype,"viewAllLevelIds",void 0),a=g=d([f("esri.layers.support.LayerFloorInfo")],a);const L=a,T={name:"supportsName",size:"supportsSize",contentType:"supportsContentType",keywords:"supportsKeywords",exifInfo:"supportsExifInfo"};function t(s,e,r){return!!A(s,e,r)}function y(s,e,r){return A(s,e,r)}function A(s,e,r){return s&&s.hasOwnProperty(e)?s[e]:r}function M(s){var r;const e=(r=s==null?void 0:s.supportedSpatialAggregationStatistics)==null?void 0:r.map(o=>o.toLowerCase());return{envelope:!!(e!=null&&e.includes("envelopeaggregate")),centroid:!!(e!=null&&e.includes("centroidaggregate")),convexHull:!!(e!=null&&e.includes("convexhullaggregate"))}}function c(s,e){var o;const r=(o=s==null?void 0:s.supportedOperationsWithCacheHint)==null?void 0:o.map(p=>p.toLowerCase());return!!(r!=null&&r.includes(e.toLowerCase()))}function U(s,e){return{analytics:E(s),attachment:b(s),data:D(s),metadata:I(s),operations:z(s.capabilities,s,e),query:O(s,e),queryRelated:P(s),queryTopFeatures:q(s),editing:B(s)}}function E(s){return{supportsCacheHint:c(s.advancedQueryCapabilities,"queryAnalytics")}}function b(s){const e=s.attachmentProperties,r={supportsName:!1,supportsSize:!1,supportsContentType:!1,supportsKeywords:!1,supportsExifInfo:!1,supportsCacheHint:c(s.advancedQueryCapabilities,"queryAttachments"),supportsResize:t(s,"supportsAttachmentsResizing",!1)};return e&&Array.isArray(e)&&e.forEach(o=>{const p=T[o.name];p&&(r[p]=!!o.isEnabled)}),r}function D(s){return{isVersioned:t(s,"isDataVersioned",!1),supportsAttachment:t(s,"hasAttachments",!1),supportsM:t(s,"hasM",!1),supportsZ:t(s,"hasZ",!1)}}function I(s){return{supportsAdvancedFieldProperties:t(s,"supportsFieldDescriptionProperty",!1)}}function z(s,e,r){const o=s?s.toLowerCase().split(",").map(S=>S.trim()):[],p=r?R(r):null,h=o.includes(p!=null&&p.serverType==="MapServer"?"data":"query"),u=o.includes("editing")&&!e.datesInUnknownTimezone;let i=u&&o.includes("create"),n=u&&o.includes("delete"),l=u&&o.includes("update");const m=o.includes("changetracking"),v=e.advancedQueryCapabilities;return u&&!(i||n||l)&&(i=n=l=!0),{supportsCalculate:t(e,"supportsCalculate",!1),supportsTruncate:t(e,"supportsTruncate",!1),supportsValidateSql:t(e,"supportsValidateSql",!1),supportsAdd:i,supportsDelete:n,supportsEditing:u,supportsChangeTracking:m,supportsQuery:h,supportsQueryAnalytics:t(v,"supportsQueryAnalytic",!1),supportsQueryAttachments:t(v,"supportsQueryAttachments",!1),supportsQueryTopFeatures:t(v,"supportsTopFeaturesQuery",!1),supportsResizeAttachments:t(e,"supportsAttachmentsResizing",!1),supportsSync:o.includes("sync"),supportsUpdate:l,supportsExceedsLimitStatistics:t(e,"supportsExceedsLimitStatistics",!1),supportsAsyncConvert3D:t(e,"supportsAsyncConvert3D",!1)}}function O(s,e){const r=s.advancedQueryCapabilities,o=s.ownershipBasedAccessControlForFeatures,p=s.archivingInfo,h=s.currentVersion,u=e==null?void 0:e.includes("MapServer"),i=!u||h>=F("mapserver-pbf-version-support"),n=x(e),l=new Set((s.supportedQueryFormats??"").split(",").map(m=>m.toLowerCase().trim()));return{supportsStatistics:t(r,"supportsStatistics",s.supportsStatistics),supportsPercentileStatistics:t(r,"supportsPercentileStatistics",!1),supportsSpatialAggregationStatistics:t(r,"supportsSpatialAggregationStatistics",!1),supportedSpatialAggregationStatistics:M(r),supportsCentroid:t(r,"supportsReturningGeometryCentroid",!1),supportsDistance:t(r,"supportsQueryWithDistance",!1),supportsDistinct:t(r,"supportsDistinct",s.supportsAdvancedQueries),supportsExtent:t(r,"supportsReturningQueryExtent",!1),supportsGeometryProperties:t(r,"supportsReturningGeometryProperties",!1),supportsHavingClause:t(r,"supportsHavingClause",!1),supportsOrderBy:t(r,"supportsOrderBy",s.supportsAdvancedQueries),supportsPagination:t(r,"supportsPagination",!1),supportsQuantization:t(s,"supportsCoordinatesQuantization",!1),supportsQuantizationEditMode:t(s,"supportsQuantizationEditMode",!1),supportsQueryGeometry:t(s,"supportsReturningQueryGeometry",!1),supportsResultType:t(r,"supportsQueryWithResultType",!1),supportsMaxRecordCountFactor:t(r,"supportsMaxRecordCountFactor",!1),supportsSqlExpression:t(r,"supportsSqlExpression",!1),supportsStandardizedQueriesOnly:t(s,"useStandardizedQueries",!1),supportsTopFeaturesQuery:t(r,"supportsTopFeaturesQuery",!1),supportsQueryByOthers:t(o,"allowOthersToQuery",!0),supportsHistoricMoment:t(p,"supportsQueryWithHistoricMoment",!1),supportsFormatPBF:i&&l.has("pbf"),supportsDisjointSpatialRelationship:t(r,"supportsDisjointSpatialRel",!1),supportsCacheHint:t(r,"supportsQueryWithCacheHint",!1)||c(r,"query"),supportsDefaultSpatialReference:t(r,"supportsDefaultSR",!1),supportsCompactGeometry:n,supportsFullTextSearch:t(r,"supportsFullTextSearch",!1),maxRecordCountFactor:y(s,"maxRecordCountFactor",void 0),maxRecordCount:y(s,"maxRecordCount",void 0),standardMaxRecordCount:y(s,"standardMaxRecordCount",void 0),tileMaxRecordCount:y(s,"tileMaxRecordCount",void 0)}}function P(s){const e=s.advancedQueryCapabilities,r=t(e,"supportsAdvancedQueryRelated",!1);return{supportsPagination:t(e,"supportsQueryRelatedPagination",!1),supportsCount:r,supportsOrderBy:r,supportsCacheHint:c(e,"queryRelated")}}function q(s){return{supportsCacheHint:c(s.advancedQueryCapabilities,"queryTopFilter")}}function B(s){const e=s.ownershipBasedAccessControlForFeatures,r=s?s.advancedEditingCapabilities:void 0;return{supportsGeometryUpdate:t(s,"allowGeometryUpdates",!0),supportsGlobalId:t(s,"supportsApplyEditsWithGlobalIds",!1),supportsReturnServiceEditsInSourceSpatialReference:t(s,"supportsReturnServiceEditsInSourceSR",!1),supportsRollbackOnFailure:t(s,"supportsRollbackOnFailureParameter",!1),supportsUpdateWithoutM:t(s,"allowUpdateWithoutMValues",!1),supportsUploadWithItemId:t(s,"supportsAttachmentsByUploadId",!1),supportsDeleteByAnonymous:t(e,"allowAnonymousToDelete",!0),supportsDeleteByOthers:t(e,"allowOthersToDelete",!0),supportsUpdateByAnonymous:t(e,"allowAnonymousToUpdate",!0),supportsUpdateByOthers:t(e,"allowOthersToUpdate",!0),supportsAsyncApplyEdits:t(r,"supportsAsyncApplyEdits",!1)}}export{U as n,L as p};
