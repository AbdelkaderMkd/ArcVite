import{c as we}from"./arcadeTimeUtils-8ab169ee.js";import{Q as A,V as L,A as R,L as P,c as x,_ as ge,S as Ie,B as se,v as S,I as j,z as N,E as B,P as Fe,q as z,$ as Ee,O as De,b as H,h as be,a0 as xe,a1 as q,a2 as K,a3 as Y}from"./arcadeUtils-eefae6c8.js";import{t as p,e as y}from"./executionError-c92d3b85.js";import{e as le,j as Ae,q as fe,f as Ne,c as ce,a as Te,b as Se,d as Le,g as X,k as ve,F as Pe,T as Re,y as k,x as Ce,E as V,D as v,A as _}from"./featureSetUtils-80ef5c2e.js";import{t as Me}from"./portalUtils-2c33d54f.js";import{u as Oe,N as ue}from"./SpatialFilter-e4effe63.js";import{a7 as de,dw as ke}from"./index-7af450d7.js";import{f as b}from"./WhereClause-c114e0fc.js";import $ from"./FeatureLayer-319285dc.js";import{y as W}from"./Field-fc2bd34d.js";import"./FieldsIndex-1b2afc91.js";import"./number-f10d87fd.js";import"./featureConversionUtils-3aeae00f.js";import"./OptimizedGeometry-33b2eb0d.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./clusterUtils-66bf1196.js";import"./SizeVariable-cf2f4876.js";import"./colorRamps-7576a038.js";import"./LegendOptions-b705a3af.js";import"./lengthUtils-e64d76bb.js";import"./Query-4c693c57.js";import"./executeQueryJSON-1d7366c2.js";import"./query-a617fcf5.js";import"./normalizeUtils-fbcb2351.js";import"./normalizeUtilsCommon-7cb21fa5.js";import"./pbfQueryUtils-4625bc70.js";import"./pbf-5f594bd6.js";import"./queryZScale-beb984cb.js";import"./FeatureSet-304f2314.js";import"./executeQueryPBF-21794b64.js";import"./AttachmentInfo-fc4216b3.js";import"./AttachmentQuery-369a7bf2.js";import"./executeForIds-66e93137.js";import"./RelationshipQuery-e08691fd.js";import"./fieldType-37e9db9e.js";import"./TopFeaturesQuery-e7fbfaaf.js";import"./SubtypeGroupLayer-be901af0.js";import"./MultiOriginJSONSupport-e7108a96.js";import"./LabelClass-411c9c4e.js";import"./labelUtils-623797c2.js";import"./defaultsJSON-b087dd4d.js";import"./featureFlags-78d5fc35.js";import"./APIKeyMixin-973fd1e3.js";import"./ArcGISService-864476a0.js";import"./BlendLayer-c340bf2a.js";import"./jsonUtils-42356934.js";import"./parser-6c4b5959.js";import"./CustomParametersMixin-2761d37f.js";import"./EditBusLayer-863d7222.js";import"./FeatureLayerBase-d7bab8c2.js";import"./commonProperties-6df6e9c8.js";import"./ElevationInfo-01ca0eb8.js";import"./featureLayerUtils-32d2df52.js";import"./jsonUtils-682433dd.js";import"./UniqueValueRenderer-ae66d11f.js";import"./diffUtils-e1a6fe87.js";import"./ColorStop-883f8268.js";import"./styleUtils-739c5f34.js";import"./DictionaryLoader-67337d0e.js";import"./LRUCache-cbaf1d46.js";import"./Version-8dc7cd3d.js";import"./heatmapUtils-73c81fd5.js";import"./serviceCapabilitiesUtils-bb1dfa3f.js";import"./OperationalLayer-e9632b36.js";import"./PortalLayer-3cc055a3.js";import"./portalItemUtils-dccd86d0.js";import"./RefreshableLayer-d99e4996.js";import"./ScaleRangeLayer-561bf95e.js";import"./TemporalLayer-ff769747.js";import"./fieldProperties-c1ed8f4a.js";import"./FeatureTemplate-8916744f.js";import"./labelingInfo-58602860.js";import"./popupUtils-5a880190.js";import"./versionUtils-60748a92.js";import"./FeatureType-67661609.js";import"./geometryEngineAsync-aeabba4d.js";import"./editsZScale-3b71ac13.js";import"./FeatureEffectLayer-3598deb6.js";import"./FeatureEffect-2bbd4e53.js";import"./FeatureReductionLayer-27eafd0b.js";import"./OrderedLayer-8b6c10f8.js";import"./styleUtils-f88ffca3.js";function ze(o,n,r,d){if(d.length===1){if(N(d[0]))return Y(o,d[0],-1);if(z(d[0]))return Y(o,d[0].toArray(),-1)}return Y(o,d,-1)}async function ee(o,n,r){const d=o.getVariables();if(d.length>0){const E=[];for(let i=0;i<d.length;i++){const t={name:d[i]};E.push(await n.evaluateIdentifier(r,t))}const e={};for(let i=0;i<d.length;i++)e[d[i]]=E[i];return o.parameters=e,o}return o}function c(o,n,r=null){for(const d in o)if(d.toLowerCase()===n.toLowerCase())return o[d];return r}function me(o){if(o===null)return null;const n={type:c(o,"type",""),name:c(o,"name","")};if(n.type==="range")n.range=c(o,"range",[]);else{n.codedValues=[];for(const r of c(o,"codedValues",[]))n.codedValues.push({name:c(r,"name",""),code:c(r,"code",null)})}return n}function ne(o){if(o===null)return null;const n={},r=c(o,"wkt",null);r!==null&&(n.wkt=r);const d=c(o,"wkid",null);return d!==null&&(n.wkid=d),n}function pe(o){if(o===null)return null;const n={hasZ:c(o,"hasz",!1),hasM:c(o,"hasm",!1)},r=c(o,"spatialreference",null);r&&(n.spatialReference=ne(r));const d=c(o,"x",null);if(d!==null)return n.x=d,n.y=c(o,"y",null),n;const E=c(o,"rings",null);if(E!==null)return n.rings=E,n;const e=c(o,"paths",null);if(e!==null)return n.paths=e,n;const i=c(o,"points",null);if(i!==null)return n.points=i,n;for(const t of["xmin","xmax","ymin","ymax","zmin","zmax","mmin","mmax"]){const u=c(o,t,null);u!==null&&(n[t]=u)}return n}function je(o,n){for(const r of n)if(r===o)return!0;return!1}function He(o){return!!o.layerDefinition&&!!o.featureSet&&je(o.layerDefinition.geometryType,["",null,"esriGeometryNull","esriGeometryPoint","esriGeometryPolyline","esriGeometryPolygon","esriGeometryMultipoint","esriGeometryEnvelope"])!==!1&&N(o.layerDefinition.fields)!==!1&&N(o.featureSet.features)!==!1}function yt(o){o.mode==="async"&&(o.functions.timezone=function(n,r){return o.standardFunctionAsync(n,r,async(d,E,e)=>{if(A(e,1,2,n,r),L(e[0])){if(await e[0].load(),e.length===1||e[1]===null)return e[0].dateTimeReferenceFieldIndex.layerDateFieldsTimeZone;if(!(e[1]instanceof R)||e[1].hasField("type")===!1)throw new p(n,y.InvalidParameter,r);const u=e[1].field("type");if(P(u)===!1)throw new p(n,y.InvalidParameter,r);switch(x(u).toLowerCase()){case"preferredtimezone":return e[0].dateTimeReferenceFieldIndex.layerPreferredTimeZone;case"editfieldsinfo":return e[0].dateTimeReferenceFieldIndex.layerEditFieldsTimeZone;case"timeinfo":return e[0].dateTimeReferenceFieldIndex.layerTimeInfoTimeZone;case"field":if(e[1].hasField("fieldname")&&P(e[1].field("fieldname")))return e[0].dateTimeReferenceFieldIndex.fieldTimeZone(x(e[1].field("fieldname")))}throw new p(n,y.InvalidParameter,r)}const i=ge(e[0],Ie(n));if(i===null)return null;const t=i.timeZone;return t==="system"?we.systemTimeZoneCanonicalName:t})},o.functions.sqltimestamp=function(n,r){return o.standardFunctionAsync(n,r,async(d,E,e)=>{A(e,1,3,n,r);const i=e[0];if(se(i)){if(e.length===1)return i.toSQLString();if(e.length===2)return i.changeTimeZone(x(e[1])).toSQLString();throw new p(n,y.InvalidParameter,r)}if(L(i)){if(e.length!==3)throw new p(n,y.InvalidParameter,r);await i.load();const t=x(e[1]);if(se(e[2])===!1)throw new p(n,y.InvalidParameter,r);const u=i.fieldTimeZone(t);return u===null?e[2].toSQLString():e[2].changeTimeZone(u).toSQLString()}throw new p(n,y.InvalidParameter,r)})},o.signatures.push({name:"sqltimestamp",min:2,max:4}),o.functions.featuresetbyid=function(n,r){return o.standardFunctionAsync(n,r,(d,E,e)=>{if(A(e,2,4,n,r),e[0]instanceof le){const i=x(e[1]);let t=S(e[2],null);const u=j(S(e[3],!0));if(t===null&&(t=["*"]),N(t)===!1)throw new p(n,y.InvalidParameter,r);return e[0].featureSetById(i,u,t)}throw new p(n,y.InvalidParameter,r)})},o.signatures.push({name:"featuresetbyid",min:2,max:4}),o.functions.getfeatureset=function(n,r){return o.standardFunctionAsync(n,r,(d,E,e)=>{if(A(e,1,2,n,r),B(e[0])){let i=S(e[1],"datasource");return i===null&&(i="datasource"),i=x(i).toLowerCase(),Ae(e[0].fullSchema(),i,n.lrucache,n.interceptor,n.spatialReference)}throw new p(n,y.InvalidParameter,r)})},o.signatures.push({name:"getfeatureset",min:1,max:2}),o.functions.featuresetbyportalitem=function(n,r){return o.standardFunctionAsync(n,r,(d,E,e)=>{var l;if(A(e,2,5,n,r),e[0]===null)throw new p(n,y.PortalRequired,r);if(e[0]instanceof Fe){const a=x(e[1]),s=x(e[2]);let f=S(e[3],null);const h=j(S(e[4],!0));if(f===null&&(f=["*"]),N(f)===!1)throw new p(n,y.InvalidParameter,r);let w=null;return w=n.services&&n.services.portal?n.services.portal:de.getDefault(),w=Me(e[0],w),fe(a,s,n.spatialReference,f,h,w,n.lrucache,n.interceptor)}if(P(e[0])===!1)throw new p(n,y.PortalRequired,r);const i=x(e[0]),t=x(e[1]);let u=S(e[2],null);const m=j(S(e[3],!0));if(u===null&&(u=["*"]),N(u)===!1)throw new p(n,y.InvalidParameter,r);return fe(i,t,n.spatialReference,u,m,((l=n.services)==null?void 0:l.portal)??de.getDefault(),n.lrucache,n.interceptor)})},o.signatures.push({name:"featuresetbyportalitem",min:2,max:5}),o.functions.featuresetbyname=function(n,r){return o.standardFunctionAsync(n,r,(d,E,e)=>{if(A(e,2,4,n,r),e[0]instanceof le){const i=x(e[1]);let t=S(e[2],null);const u=j(S(e[3],!0));if(t===null&&(t=["*"]),N(t)===!1)throw new p(n,y.InvalidParameter,r);return e[0].featureSetByName(i,u,t)}throw new p(n,y.InvalidParameter,r)})},o.signatures.push({name:"featuresetbyname",min:2,max:4}),o.functions.featureset=function(n,r){return o.standardFunction(n,r,(d,E,e)=>{var u;A(e,1,1,n,r);let i=e[0];const t={layerDefinition:{geometryType:"",objectIdField:"",hasM:!1,hasZ:!1,globalIdField:"",typeIdField:"",fields:[]},featureSet:{geometryType:"",features:[]}};if(P(i))i=JSON.parse(i),i.layerDefinition!==void 0?(t.layerDefinition=i.layerDefinition,t.featureSet=i.featureSet,i.layerDefinition.spatialReference&&(t.layerDefinition.spatialReference=i.layerDefinition.spatialReference)):(t.featureSet.features=i.features,t.featureSet.geometryType=i.geometryType,t.layerDefinition.geometryType=t.featureSet.geometryType,t.layerDefinition.objectIdField=i.objectIdFieldName??"",t.layerDefinition.typeIdField=i.typeIdFieldName,t.layerDefinition.globalIdField=i.globalIdFieldName,t.layerDefinition.fields=i.fields,i.spatialReference&&(t.layerDefinition.spatialReference=i.spatialReference));else{if(!(e[0]instanceof R))throw new p(n,y.InvalidParameter,r);{i=JSON.parse(e[0].castToText(!0));const m=c(i,"layerdefinition");if(m!==null){t.layerDefinition.geometryType=c(m,"geometrytype",""),t.featureSet.geometryType=t.layerDefinition.geometryType,t.layerDefinition.globalIdField=c(m,"globalidfield",""),t.layerDefinition.objectIdField=c(m,"objectidfield",""),t.layerDefinition.typeIdField=c(m,"typeidfield",""),t.layerDefinition.hasZ=c(m,"hasz",!1)===!0,t.layerDefinition.hasM=c(m,"hasm",!1)===!0;const l=c(m,"spatialreference",null);l&&(t.layerDefinition.spatialReference=ne(l));for(const s of c(m,"fields",[])){const f={name:c(s,"name",""),alias:c(s,"alias",""),type:c(s,"type",""),nullable:c(s,"nullable",!0),editable:c(s,"editable",!0),length:c(s,"length",null),domain:me(c(s,"domain"))};t.layerDefinition.fields.push(f)}const a=c(i,"featureset",null);if(a){const s={};for(const f of t.layerDefinition.fields)s[f.name.toLowerCase()]=f.name;for(const f of c(a,"features",[])){const h={},w=c(f,"attributes",{});for(const I in w)h[s[I.toLowerCase()]]=w[I];t.featureSet.features.push({attributes:h,geometry:pe(c(f,"geometry",null))})}}}else{t.layerDefinition.hasZ=c(i,"hasz",!1)===!0,t.layerDefinition.hasM=c(i,"hasm",!1)===!0,t.layerDefinition.geometryType=c(i,"geometrytype",""),t.featureSet.geometryType=t.layerDefinition.geometryType,t.layerDefinition.objectIdField=c(i,"objectidfieldname",""),t.layerDefinition.typeIdField=c(i,"typeidfieldname","");const l=c(i,"spatialreference",null);l&&(t.layerDefinition.spatialReference=ne(l));let a=c(i,"fields",null);if(N(a))for(const h of a){const w={name:c(h,"name",""),alias:c(h,"alias",""),type:c(h,"type",""),nullable:c(h,"nullable",!0),editable:c(h,"editable",!0),length:c(h,"length",null),domain:me(c(h,"domain"))};t.layerDefinition.fields.push(w)}else a=null,t.layerDefinition.fields=a;const s={};for(const h of t.layerDefinition.fields)s[h.name.toLowerCase()]=h.name;let f=c(i,"features",null);if(N(f))for(const h of f){const w={},I=c(h,"attributes",{});for(const D in I)w[s[D.toLowerCase()]]=I[D];t.featureSet.features.push({attributes:w,geometry:pe(c(h,"geometry",null))})}else f=null,t.featureSet.features=f}}}if(He(t)===!1)throw new p(n,y.InvalidParameter,r);return(((u=t==null?void 0:t.layerDefinition)==null?void 0:u.geometryType)||"")===""&&(t.layerDefinition.geometryType="esriGeometryNull"),Ne.create(t,n.spatialReference)})},o.signatures.push({name:"featureset",min:1,max:1}),o.functions.filter=function(n,r){return o.standardFunctionAsync(n,r,async(d,E,e)=>{if(A(e,2,2,n,r),N(e[0])||z(e[0])){const i=[];let t=e[0];t instanceof Ee&&(t=t.toArray());let u=null;if(!De(e[1]))throw new p(n,y.InvalidParameter,r);u=e[1].createFunction(n);for(const m of t){const l=u(m);ke(l)?await l===!0&&i.push(m):l===!0&&i.push(m)}return i}if(L(e[0])){const i=await e[0].load(),t=b.create(e[1],i.getFieldsIndex()),u=t.getVariables();if(u.length>0){const m=[];for(let a=0;a<u.length;a++){const s={name:u[a]};m.push(await o.evaluateIdentifier(n,s))}const l={};for(let a=0;a<u.length;a++)l[u[a]]=m[a];return t.parameters=l,new ce({parentfeatureset:e[0],whereclause:t})}return new ce({parentfeatureset:e[0],whereclause:t})}throw new p(n,y.InvalidParameter,r)})},o.signatures.push({name:"filter",min:2,max:2}),o.functions.orderby=function(n,r){return o.standardFunctionAsync(n,r,async(d,E,e)=>{if(A(e,2,2,n,r),L(e[0])){const i=new Te(e[1]);return new Se({parentfeatureset:e[0],orderbyclause:i})}throw new p(n,y.InvalidParameter,r)})},o.signatures.push({name:"orderby",min:2,max:2}),o.functions.top=function(n,r){return o.standardFunctionAsync(n,r,async(d,E,e)=>{if(A(e,2,2,n,r),L(e[0]))return new Le({parentfeatureset:e[0],topnum:e[1]});if(N(e[0]))return H(e[1])>=e[0].length?e[0].slice(0):e[0].slice(0,H(e[1]));if(z(e[0]))return H(e[1])>=e[0].length()?e[0].slice(0):e[0].slice(0,H(e[1]));throw new p(n,y.InvalidParameter,r)})},o.signatures.push({name:"top",min:2,max:2}),o.functions.first=function(n,r){return o.standardFunctionAsync(n,r,async(d,E,e)=>{if(A(e,1,1,n,r),L(e[0])){const i=await e[0].first(d.abortSignal);if(i!==null){const t=be.createFromGraphicLikeObject(i.geometry,i.attributes,e[0],n.timeReference);return t._underlyingGraphic=i,t}return i}return N(e[0])?e[0].length===0?null:e[0][0]:z(e[0])?e[0].length()===0?null:e[0].get(0):null})},o.signatures.push({name:"first",min:1,max:1}),o.functions.attachments=function(n,r){return o.standardFunctionAsync(n,r,async(d,E,e)=>{A(e,1,2,n,r);const i={minsize:-1,maxsize:-1,types:null,returnMetadata:!1};if(e.length>1){if(e[1]instanceof R){if(e[1].hasField("minsize")&&(i.minsize=H(e[1].field("minsize"))),e[1].hasField("metadata")&&(i.returnMetadata=j(e[1].field("metadata"))),e[1].hasField("maxsize")&&(i.maxsize=H(e[1].field("maxsize"))),e[1].hasField("types")){const t=xe(e[1].field("types"),!1);t.length>0&&(i.types=t)}}else if(e[1]!==null)throw new p(n,y.InvalidParameter,r)}if(B(e[0])){let t=e[0]._layer;return t instanceof $&&(t=X(t,n.spatialReference,["*"],!0,n.lrucache,n.interceptor)),t===null?[]:L(t)===!1?[]:(await t.load(),t.queryAttachments(e[0].field(t.objectIdField),i.minsize,i.maxsize,i.types,i.returnMetadata))}if(e[0]===null)return[];throw new p(n,y.InvalidParameter,r)})},o.signatures.push({name:"attachments",min:1,max:2}),o.functions.featuresetbyrelationshipname=function(n,r){return o.standardFunctionAsync(n,r,async(d,E,e)=>{A(e,2,4,n,r);const i=e[0],t=x(e[1]);let u=S(e[2],null);const m=j(S(e[3],!0));if(u===null&&(u=["*"]),N(u)===!1)throw new p(n,y.InvalidParameter,r);if(e[0]===null)return null;if(!B(e[0]))throw new p(n,y.InvalidParameter,r);let l=i._layer;if(l instanceof $&&(l=X(l,n.spatialReference,["*"],!0,n.lrucache,n.interceptor)),l===null||L(l)===!1)return null;l=await l.load();const a=l.relationshipMetaData().filter(I=>I.name===t);if(a.length===0)return null;if(a[0].relationshipTableId!==void 0&&a[0].relationshipTableId!==null&&a[0].relationshipTableId>-1)return ve(l,a[0],i.field(l.objectIdField),l.spatialReference,u,m,n.lrucache,n.interceptor);let s=l.serviceUrl();if(!s)return null;s=s.charAt(s.length-1)==="/"?s+a[0].relatedTableId.toString():s+"/"+a[0].relatedTableId.toString();const f=await Pe(s,l.spatialReference,u,m,n.lrucache,n.interceptor);await f.load();let h=f.relationshipMetaData();if(h=h.filter(I=>I.id===a[0].id),i.hasField(a[0].keyField)===!1||i.field(a[0].keyField)===null){const I=await l.getFeatureByObjectId(i.field(l.objectIdField),[a[0].keyField]);if(I){const D=b.create(h[0].keyField+"= @id",f.getFieldsIndex());return D.parameters={id:I.attributes[a[0].keyField]},f.filter(D)}return new Oe({parentfeatureset:f})}const w=b.create(h[0].keyField+"= @id",f.getFieldsIndex());return w.parameters={id:i.field(a[0].keyField)},f.filter(w)})},o.signatures.push({name:"featuresetbyrelationshipname",min:2,max:4}),o.functions.featuresetbyassociation=function(n,r){return o.standardFunctionAsync(n,r,async(d,E,e)=>{A(e,2,3,n,r);const i=e[0],t=x(S(e[1],"")).toLowerCase(),u=P(e[2])?x(e[2]):null;if(e[0]===null)return null;if(!B(e[0]))throw new p(n,y.InvalidParameter,r);let m=i._layer;if(m instanceof $&&(m=X(m,n.spatialReference,["*"],!0,n.lrucache,n.interceptor)),m===null||L(m)===!1)return null;await m.load();const l=m.serviceUrl(),a=await Re(l,n.spatialReference);let s=null,f=null,h=!1;if(u!==null&&u!==""&&u!==void 0){for(const F of a.terminals)F.terminalName===u&&(f=F.terminalId);f===null&&(h=!0)}const w=a.associations.getFieldsIndex(),I=w.get("TOGLOBALID").name,D=w.get("FROMGLOBALID").name,Q=w.get("TOTERMINALID").name,J=w.get("FROMTERMINALID").name,Z=w.get("FROMNETWORKSOURCEID").name,G=w.get("TONETWORKSOURCEID").name,O=w.get("ASSOCIATIONTYPE").name,ye=w.get("ISCONTENTVISIBLE").name,he=w.get("OBJECTID").name;for(const F of m.fields)if(F.type==="global-id"){s=i.field(F.name);break}let C=null,te=new k(new W({name:"percentalong",alias:"percentalong",type:"double"}),b.create("0",a.associations.getFieldsIndex())),ie=new k(new W({name:"side",alias:"side",type:"string"}),b.create("''",a.associations.getFieldsIndex()));const T="globalid",re="globalId",ae={};for(const F in a.lkp)ae[F]=a.lkp[F].sourceId;const M=new Ce(new W({name:"classname",alias:"classname",type:"string"}),null,ae);let g="";switch(t){case"midspan":{g=`((${I}='${s}') OR ( ${D}='${s}')) AND (${O} IN (5))`,M.codefield=b.create(`CASE WHEN (${I}='${s}') THEN ${Z} ELSE ${G} END`,a.associations.getFieldsIndex());const F=K(v.findField(a.associations.fields,D));F.name=T,F.alias=T,C=new k(F,b.create(`CASE WHEN (${D}='${s}') THEN ${I} ELSE ${D} END`,a.associations.getFieldsIndex())),te=a.unVersion>=4?new _(v.findField(a.associations.fields,w.get("PERCENTALONG").name)):new k(new W({name:"percentalong",alias:"percentalong",type:"double"}),b.create("0",a.associations.getFieldsIndex()));break}case"junctionedge":{g=`((${I}='${s}') OR ( ${D}='${s}')) AND (${O} IN (4,6))`,M.codefield=b.create(`CASE WHEN (${I}='${s}') THEN ${Z} ELSE ${G} END`,a.associations.getFieldsIndex());const F=K(v.findField(a.associations.fields,D));F.name=T,F.alias=T,C=new k(F,b.create(`CASE WHEN (${D}='${s}') THEN ${I} ELSE ${D} END`,a.associations.getFieldsIndex())),ie=new k(new W({name:"side",alias:"side",type:"string"}),b.create(`CASE WHEN (${O}=4) THEN 'from' ELSE 'to' END`,a.associations.getFieldsIndex()));break}case"connected":{let F=`${I}='@T'`,oe=`${D}='@T'`;f!==null&&(F+=` AND ${Q}=@A`,oe+=` AND ${J}=@A`),g="(("+F+") OR ("+oe+"))",g=q(g,"@T",s??""),F=q(F,"@T",s??""),f!==null&&(F=q(F,"@A",f.toString()),g=q(g,"@A",f.toString())),M.codefield=b.create("CASE WHEN "+F+` THEN ${Z} ELSE ${G} END`,a.associations.getFieldsIndex());const U=K(v.findField(a.associations.fields,D));U.name=T,U.alias=T,C=new k(U,b.create("CASE WHEN "+F+` THEN ${D} ELSE ${I} END`,a.associations.getFieldsIndex()));break}case"container":g=`${I}='${s}' AND ${O} = 2`,f!==null&&(g+=` AND ${Q} = `+f.toString()),M.codefield=Z,g="( "+g+" )",C=new V(v.findField(a.associations.fields,D),T,T);break;case"content":g=`(${D}='${s}' AND ${O} = 2)`,f!==null&&(g+=` AND ${J} = `+f.toString()),M.codefield=G,g="( "+g+" )",C=new V(v.findField(a.associations.fields,I),T,T);break;case"structure":g=`(${I}='${s}' AND ${O} = 3)`,f!==null&&(g+=` AND ${Q} = `+f.toString()),M.codefield=Z,g="( "+g+" )",C=new V(v.findField(a.associations.fields,D),T,re);break;case"attached":g=`(${D}='${s}' AND ${O} = 3)`,f!==null&&(g+=` AND ${J} = `+f.toString()),M.codefield=G,g="( "+g+" )",C=new V(v.findField(a.associations.fields,I),T,re);break;default:throw new p(n,y.InvalidParameter,r)}return h&&(g="1 <> 1"),new v({parentfeatureset:a.associations,adaptedFields:[new _(v.findField(a.associations.fields,he)),new _(v.findField(a.associations.fields,ye)),C,ie,M,te],extraFilter:g?b.create(g,a.associations.getFieldsIndex()):null})})},o.signatures.push({name:"featuresetbyassociation",min:2,max:6}),o.functions.groupby=function(n,r){return o.standardFunctionAsync(n,r,async(d,E,e)=>{if(A(e,3,3,n,r),!L(e[0]))throw new p(n,y.InvalidParameter,r);const i=await e[0].load(),t=[],u=[];let m=!1,l=[];if(P(e[1]))l.push(e[1]);else if(e[1]instanceof R)l.push(e[1]);else if(N(e[1]))l=e[1];else{if(!z(e[1]))throw new p(n,y.InvalidParameter,r);l=e[1].toArray()}for(const a of l)if(P(a)){const s=b.create(x(a),i.getFieldsIndex()),f=ue(s)===!0?x(a):"%%%%FIELDNAME";t.push({name:f,expression:s}),f==="%%%%FIELDNAME"&&(m=!0)}else{if(!(a instanceof R))throw new p(n,y.InvalidParameter,r);{const s=a.hasField("name")?a.field("name"):"%%%%FIELDNAME",f=a.hasField("expression")?a.field("expression"):"";if(s==="%%%%FIELDNAME"&&(m=!0),!s)throw new p(n,y.InvalidParameter,r);t.push({name:s,expression:b.create(f||s,i.getFieldsIndex())})}}if(l=[],P(e[2]))l.push(e[2]);else if(N(e[2]))l=e[2];else if(z(e[2]))l=e[2].toArray();else{if(!(e[2]instanceof R))throw new p(n,y.InvalidParameter,r);l.push(e[2])}for(const a of l){if(!(a instanceof R))throw new p(n,y.InvalidParameter,r);{const s=a.hasField("name")?a.field("name"):"",f=a.hasField("statistic")?a.field("statistic"):"",h=a.hasField("expression")?a.field("expression"):"";if(!s||!f||!h)throw new p(n,y.InvalidParameter,r);u.push({name:s,statistic:f.toLowerCase(),expression:b.create(h,i.getFieldsIndex())})}}if(m){const a={};for(const f of i.fields)a[f.name.toLowerCase()]=1;for(const f of t)f.name!=="%%%%FIELDNAME"&&(a[f.name.toLowerCase()]=1);for(const f of u)f.name!=="%%%%FIELDNAME"&&(a[f.name.toLowerCase()]=1);let s=0;for(const f of t)if(f.name==="%%%%FIELDNAME"){for(;a["field_"+s.toString()]===1;)s++;a["field_"+s.toString()]=1,f.name="FIELD_"+s.toString()}}for(const a of t)await ee(a.expression,o,n);for(const a of u)await ee(a.expression,o,n);return e[0].groupby(t,u)})},o.signatures.push({name:"groupby",min:3,max:3}),o.functions.distinct=function(n,r){return o.standardFunctionAsync(n,r,async(d,E,e)=>{if(L(e[0])){A(e,2,2,n,r);const i=await e[0].load(),t=[];let u=[];if(P(e[1]))u.push(e[1]);else if(e[1]instanceof R)u.push(e[1]);else if(N(e[1]))u=e[1];else{if(!z(e[1]))throw new p(n,y.InvalidParameter,r);u=e[1].toArray()}let m=!1;for(const l of u)if(P(l)){const a=b.create(x(l),i.getFieldsIndex()),s=ue(a)===!0?x(l):"%%%%FIELDNAME";t.push({name:s,expression:a}),s==="%%%%FIELDNAME"&&(m=!0)}else{if(!(l instanceof R))throw new p(n,y.InvalidParameter,r);{const a=l.hasField("name")?l.field("name"):"%%%%FIELDNAME",s=l.hasField("expression")?l.field("expression"):"";if(a==="%%%%FIELDNAME"&&(m=!0),!a)throw new p(n,y.InvalidParameter,r);t.push({name:a,expression:b.create(s||a,i.getFieldsIndex())})}}if(m){const l={};for(const s of i.fields)l[s.name.toLowerCase()]=1;for(const s of t)s.name!=="%%%%FIELDNAME"&&(l[s.name.toLowerCase()]=1);let a=0;for(const s of t)if(s.name==="%%%%FIELDNAME"){for(;l["field_"+a.toString()]===1;)a++;l["field_"+a.toString()]=1,s.name="FIELD_"+a.toString()}}for(const l of t)await ee(l.expression,o,n);return e[0].groupby(t,[])}return ze("distinct",d,E,e)})})}export{yt as registerFunctions};