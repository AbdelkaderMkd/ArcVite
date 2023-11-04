import{aC as r,aD as o,aF as I,fG as C,fq as B,aO as E,aE as F,ds as X,fD as $,fI as Y,fe as h,bA as ee,cT as te,iw as se,co as G,cA as re,mU as ie,f6 as ae,f7 as oe,f8 as ne,hV as le,f9 as pe,hX as de,fr as ye,g_ as ue,mW as ce,mh as A,g8 as T,b2 as c,cn as he,fj as fe,cC as ge,ay as d,eA as me,aY as ve,lB as be,el as we,f2 as Ie,iT as x,qa as Le,iK as P,hZ as S,br as Fe,eq as Se,ms as D,qb as _e,mu as je,qc as Ee,qd as Oe,pG as $e,mj as Ae,mk as Te,ml as xe,mm as R,iB as Pe,qe as De,lC as Re,lD as qe,bu as Ne,mp as Ue,lE as Ce,cW as Ge}from"./index-3572d442.js";import{E as Qe,P as q}from"./SceneService-48e0cac7.js";import{l as Ve}from"./associatedFeatureServiceUtils-c41b5d8e.js";import{s as ke}from"./capabilities-c607cf72.js";import{s as Q,l as Je,u as Ke,m as He}from"./I3SLayerDefinitions-34015864.js";import{a as We}from"./lazyLayerLoader-5d9fbd85.js";import{j as Me}from"./persistable-5593d627.js";import{i as ze}from"./I3SUtil-36f5abf4.js";import{n as Ze,p as Be}from"./popupUtils-8716dbe3.js";import"./I3SIndexInfo-ef3d64e4.js";import"./resourceExtension-7f55cdd7.js";import"./I3SBinaryReader-32e63862.js";let u=class extends C{constructor(){super(...arguments),this.name=null,this.field=null,this.currentRangeExtent=null,this.fullRangeExtent=null,this.type="rangeInfo"}};r([o({type:String,json:{read:!0,write:!0}})],u.prototype,"name",void 0),r([o({type:String,json:{read:!0,write:!0}})],u.prototype,"field",void 0),r([o({type:[Number],json:{read:!0,write:!0}})],u.prototype,"currentRangeExtent",void 0),r([o({type:[Number],json:{read:!0,write:!0}})],u.prototype,"fullRangeExtent",void 0),r([o({type:["rangeInfo"],readOnly:!0,json:{read:!1,write:!0}})],u.prototype,"type",void 0),u=r([I("esri.layers.support.RangeInfo")],u);var b;let _=b=class extends B(E.ofType(F)){constructor(e){super(e)}clone(){return new b(this.items.map(e=>e.clone()))}write(e,t){return this.toJSON(t)}toJSON(e){var s;const t=(s=e==null?void 0:e.layer)==null?void 0:s.spatialReference;return t?this.toArray().map(i=>{if(!t.equals(i.spatialReference)){if(!X(i.spatialReference,t))return e!=null&&e.messages&&e.messages.push(new $("scenefilter:unsupported","Scene filters with incompatible spatial references are not supported",{modification:this,spatialReference:e.layer.spatialReference,context:e})),null;const l=new F;Y(i,l,t),i=l}const n=i.toJSON(e);return delete n.spatialReference,n}).filter(i=>i!=null):(e!=null&&e.messages&&e.messages.push(new $("scenefilter:unsupported","Writing Scene filters without context layer is not supported",{modification:this,spatialReference:e.layer.spatialReference,context:e})),this.toArray().map(i=>i.toJSON(e)))}static fromJSON(e,t){const s=new b;return e.forEach(i=>s.add(F.fromJSON(i,t))),s}};_=b=r([I("esri.layers.support.PolygonCollection")],_);const w=_;var j;let f=j=class extends C{constructor(e){super(e),this.spatialRelationship="disjoint",this.geometries=new w,this._geometriesSource=null}initialize(){this.addHandles(ee(()=>this.geometries,"after-changes",()=>this.geometries=this.geometries,te))}readGeometries(e,t,s){Array.isArray(e)?this.geometries=w.fromJSON(e,s):this._geometriesSource={url:se(e,s),context:s}}async loadGeometries(e,t){if(this._geometriesSource==null)return;const{url:s,context:i}=this._geometriesSource,n=await G(s,{responseType:"json",signal:t==null?void 0:t.signal}),l=e.toJSON(),p=n.data.map(y=>({...y,spatialReference:l}));this.geometries=w.fromJSON(p,i),this._geometriesSource=null}clone(){const e=new j({geometries:re(this.geometries),spatialRelationship:this.spatialRelationship});return e._geometriesSource=this._geometriesSource,e}};r([o({type:["disjoint","contains"],nonNullable:!0,json:{write:!0}})],f.prototype,"spatialRelationship",void 0),r([o({type:w,nonNullable:!0,json:{write:!0}}),Me({origins:["web-scene","portal-item"],type:"resource",prefix:"geometries",contentAddressed:!0})],f.prototype,"geometries",void 0),r([h(["web-scene","portal-item"],"geometries")],f.prototype,"readGeometries",null),f=j=r([I("esri.layers.support.SceneFilter")],f);const Xe=f,Ye=new Set(["3DObject","Point"]),N=Ce();let a=class extends ie(Qe(ae(oe(ne(le(pe(de(ye(Ge))))))))){constructor(...e){super(...e),this.featureReduction=null,this.rangeInfos=null,this.operationalLayerType="ArcGISSceneServiceLayer",this.type="scene",this.fields=null,this.floorInfo=null,this.outFields=null,this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.excludeObjectIds=new E,this.definitionExpression=null,this.filter=null,this.path=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.priority=null,this.semantic=null,this.cachedDrawingInfo={color:!1},this.popupEnabled=!0,this.popupTemplate=null,this.objectIdField=null,this.globalIdField=null,this._fieldUsageInfo={},this.screenSizePerspectiveEnabled=!0,this.serviceItemId=void 0}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}destroy(){this._set("renderer",null)}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,t){var i,n,l;const s=(n=(i=this.getFeatureType(t==null?void 0:t.feature))==null?void 0:i.domains)==null?void 0:n[e];return s&&s.type!=="inherited"?s:((l=this.getField(e))==null?void 0:l.domain)??null}getFeatureType(e){return e&&this.associatedLayer?this.associatedLayer.getFeatureType(e):null}get types(){var e;return((e=this.associatedLayer)==null?void 0:e.types)??[]}get typeIdField(){var e;return((e=this.associatedLayer)==null?void 0:e.typeIdField)??null}get templates(){var e;return((e=this.associatedLayer)==null?void 0:e.templates)??null}get formTemplate(){var e;return((e=this.associatedLayer)==null?void 0:e.formTemplate)??null}get fieldsIndex(){return new ue(this.fields)}readNodePages(e,t,s){return t.layerType==="Point"&&(e=t.pointNodePages),e==null||typeof e!="object"?null:Q.fromJSON(e,s)}set elevationInfo(e){this._set("elevationInfo",e),this.loaded&&this._validateElevationInfo()}get effectiveCapabilities(){var e;return this._capabilitiesFromAssociatedFeatureLayer((e=this.associatedLayer)==null?void 0:e.effectiveCapabilities)}get effectiveEditingEnabled(){return this.associatedLayer!=null&&ce(this.associatedLayer)}get geometryType(){return et[this.profile]||"mesh"}set renderer(e){A(e,this.fieldsIndex),this._set("renderer",e)}readCachedDrawingInfo(e){return e!=null&&typeof e=="object"||(e={}),e.color==null&&(e.color=!1),e}get capabilities(){var e;return this._capabilitiesFromAssociatedFeatureLayer((e=this.associatedLayer)==null?void 0:e.capabilities)}_capabilitiesFromAssociatedFeatureLayer(e){var O;e=e??ke;const{query:t,queryRelated:s,editing:{supportsGlobalId:i,supportsRollbackOnFailure:n,supportsUploadWithItemId:l,supportsGeometryUpdate:p,supportsReturnServiceEditsInSourceSpatialReference:y},data:{supportsZ:g,supportsM:m,isVersioned:V,supportsAttachment:k},operations:{supportsEditing:J,supportsAdd:K,supportsUpdate:H,supportsDelete:W,supportsQuery:M,supportsQueryAttachments:z,supportsAsyncConvert3D:Z}}=e,v=e.operations.supportsChangeTracking,L=!!((O=this.associatedLayer)!=null&&O.infoFor3D)&&T();return{query:t,queryRelated:s,editing:{supportsGlobalId:i,supportsReturnServiceEditsInSourceSpatialReference:y,supportsRollbackOnFailure:n,supportsGeometryUpdate:L&&p,supportsUploadWithItemId:l},data:{supportsAttachment:k,supportsZ:g,supportsM:m,isVersioned:V},operations:{supportsQuery:M,supportsQueryAttachments:z,supportsEditing:J&&v,supportsAdd:L&&K&&v,supportsDelete:L&&W&&v,supportsUpdate:H&&v,supportsAsyncConvert3D:Z}}}get editingEnabled(){var e;return this._isOverridden("editingEnabled")?this._get("editingEnabled"):((e=this.associatedLayer)==null?void 0:e.editingEnabled)??!1}set editingEnabled(e){this._overrideIfSome("editingEnabled",e)}get infoFor3D(){var e;return((e=this.associatedLayer)==null?void 0:e.infoFor3D)??null}get relationships(){var e;return(e=this.associatedLayer)==null?void 0:e.relationships}get defaultPopupTemplate(){return this.associatedLayer||this.attributeStorageInfo?this.createPopupTemplate():null}readObjectIdField(e,t){return!e&&t.fields&&t.fields.some(s=>(s.type==="esriFieldTypeOID"&&(e=s.name),!!e)),e||void 0}readGlobalIdField(e,t){return!e&&t.fields&&t.fields.some(s=>(s.type==="esriFieldTypeGlobalID"&&(e=s.name),!!e)),e||void 0}get displayField(){var e;return((e=this.associatedLayer)==null?void 0:e.displayField)??null}readProfile(e,t){const s=t.store.profile;return s!=null&&U[s]?U[s]:(c.getLogger(this).error("Unknown or missing profile",{profile:s,layer:this}),"mesh-pyramids")}load(e){return this.addResolvingPromise(this._load(e)),Promise.resolve(this)}async _load(e){const t=e!=null?e.signal:null;await this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(he),await this._fetchService(t),await Promise.all([this._fetchIndexAndUpdateExtent(this.nodePages,t),this._setAssociatedFeatureLayer(t),this._loadFilterGeometries()]),this._validateElevationInfo(),this._applyAssociatedLayerOverrides(),this._populateFieldUsageInfo(),await fe(this,{origin:"service"},t),A(this.renderer,this.fieldsIndex),await this.finishLoadEditablePortalLayer(e)}async beforeSave(){this.filter!=null&&(this.filter=this.filter.clone(),await this.load())}async _loadFilterGeometries(){if(this.filter)try{await this.filter.loadGeometries(this.spatialReference)}catch(e){c.getLogger(this).error("#_loadFilterGeometries()",this,"Failed to load filter geometries. Geometry filter will not be applied for this layer.",{error:e}),this.filter=null}}createQuery(){const e=new ge;return this.geometryType!=="mesh"&&(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e.outFields=["*"],e}queryExtent(e,t){return this._getAssociatedLayerForQuery().then(s=>s.queryExtent(e||this.createQuery(),t))}queryFeatureCount(e,t){return this._getAssociatedLayerForQuery().then(s=>s.queryFeatureCount(e||this.createQuery(),t))}queryFeatures(e,t){return this._getAssociatedLayerForQuery().then(s=>s.queryFeatures(e||this.createQuery(),t)).then(s=>{if(s!=null&&s.features)for(const i of s.features)i.layer=this,i.sourceLayer=this;return s})}async queryRelatedFeatures(e,t){if(await this.load(),!this.associatedLayer)throw new d("scenelayer:query-not-available","SceneLayer queries are not available without an associated feature layer",{layer:this});return this.associatedLayer.queryRelatedFeatures(e,t)}async queryRelatedFeaturesCount(e,t){if(await this.load(),!this.associatedLayer)throw new d("scenelayer:query-not-available","SceneLayer queries are not available without an associated feature layer",{layer:this});return this.associatedLayer.queryRelatedFeaturesCount(e,t)}async queryCachedAttributes(e,t){const s=me(this.fieldsIndex,await Ze(this,Be(this)));return ze(this.parsedUrl.path,this.attributeStorageInfo??[],e,t,s)}async queryCachedFeature(e,t){const s=await this.queryCachedAttributes(e,[t]);if(!s||s.length===0)throw new d("scenelayer:feature-not-in-cached-data","Feature not found in cached data");const i=new ve;return i.attributes=s[0],i.layer=this,i.sourceLayer=this,i}queryObjectIds(e,t){return this._getAssociatedLayerForQuery().then(s=>s.queryObjectIds(e||this.createQuery(),t))}queryAttachments(e,t){return this._getAssociatedLayerForQuery().then(s=>s.queryAttachments(e,t))}getFieldUsageInfo(e){const t={supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1};return this.loaded?this._fieldUsageInfo[e]||t:(c.getLogger(this).error("#getFieldUsageInfo()","Unavailable until layer is loaded"),t)}createPopupTemplate(e){return be(this,e)}_getAssociatedLayerForQuery(){const e=this.associatedLayer;return e!=null&&e.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()}async _loadAssociatedLayerForQuery(){if(await this.load(),!this.associatedLayer)throw new d("scenelayer:query-not-available","SceneLayer queries are not available without an associated feature layer",{layer:this});try{await this.associatedLayer.load()}catch(e){throw new d("scenelayer:query-not-available","SceneLayer associated feature layer could not be loaded",{layer:this,error:e})}return this.associatedLayer}hasCachedStatistics(e){return this.statisticsInfo!=null&&this.statisticsInfo.some(t=>t.name===e)}async queryCachedStatistics(e,t){if(await this.load(t),!this.statisticsInfo)throw new d("scenelayer:no-cached-statistics","Cached statistics are not available for this layer");const s=this.fieldsIndex.get(e);if(!s)throw new d("scenelayer:field-unexisting",`Field '${e}' does not exist on the layer`);for(const i of this.statisticsInfo)if(i.name===s.name){const n=we(this.parsedUrl.path,i.href);return G(n,{query:{f:"json",token:this.apiKey},responseType:"json",signal:t?t.signal:null}).then(l=>l.data)}throw new d("scenelayer:no-cached-statistics","Cached statistics for this attribute are not available")}async saveAs(e,t){return this._debouncedSaveOperations(q.SAVE_AS,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"scene"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"scene"};return this._debouncedSaveOperations(q.SAVE,e)}async applyEdits(e,t){const{applyEdits:s}=await Ie(()=>import("./editingSupport-d0a4ed6a.js"),["assets/editingSupport-d0a4ed6a.js","assets/index-3572d442.js","assets/index-0320859f.css"]);let i=t;await this.load();const n=this.associatedLayer;if(!n)throw new d(`${this.type}-layer:not-editable`,"Service is not editable");await n.load();const{globalIdField:l}=n,p=!!n.infoFor3D,y=(i==null?void 0:i.globalIdUsed)??!0;if(p&&l==null)throw new d(`${this.type}-layer:not-editable`,"Valid globalIdField expected on editable SceneLayer");if(p&&!y)throw new d(`${this.type}-layer:globalid-required`,"globalIdUsed must not be false for SceneLayer editing as globalIds are required.");return x(n.url)&&p&&e.deleteFeatures!=null&&l!=null&&(i={...i,globalIdToObjectId:await Le(n,e.deleteFeatures,l)}),s(this,n.source,e,i)}async uploadAssets(e,t){if(await this.load(),this.associatedLayer==null)throw new d(`${this.type}-layer:not-editable`,"Service is not editable");return await this.associatedLayer.load(),this.associatedLayer.uploadAssets(e,t)}on(e,t){return super.on(e,t)}validateLayer(e){if(e.layerType&&!Ye.has(e.layerType))throw new d("scenelayer:layer-type-not-supported","SceneLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new d("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x, 2.x"});if(this.version.major>2)throw new d("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x, 2.x"});function t(s,i){let n=!1,l=!1;if(s==null)n=!0,l=!0;else{const p=i&&i.isGeographic;switch(s){case"east-north-up":case"earth-centered":n=!0,l=p;break;case"vertex-reference-frame":n=!0,l=!p;break;default:n=!1}}if(!n)throw new d("scenelayer:unsupported-normal-reference-frame","Normal reference frame is invalid.");if(!l)throw new d("scenelayer:incompatible-normal-reference-frame","Normal reference frame is incompatible with layer spatial reference.")}t(this.normalReferenceFrame,this.spatialReference)}_getTypeKeywords(){const e=[];if(this.profile==="points")e.push("Point");else{if(this.profile!=="mesh-pyramids")throw new d("scenelayer:unknown-profile","SceneLayer:save() encountered an unknown SceneLayer profile: "+this.profile);e.push("3DObject")}return e}_populateFieldUsageInfo(){var e,t;if(this._fieldUsageInfo={},this.fields)for(const s of this.fields){const i=!(!this.attributeStorageInfo||!this.attributeStorageInfo.some(p=>p.name===s.name)),n=!!((t=(e=this.associatedLayer)==null?void 0:e.fields)!=null&&t.some(p=>p&&s.name===p.name)),l={supportsLabelingInfo:i,supportsRenderer:i,supportsPopupTemplate:i||n,supportsLayerQuery:n};this._fieldUsageInfo[s.name]=l}}_applyAssociatedLayerOverrides(){this._applyAssociatedLayerFieldsOverrides(),this._applyAssociatedLayerPopupOverrides(),this._applyAssociatedLayerExtentOverride(),this._applyAssociatedLayerPrivileges()}_applyAssociatedLayerFieldsOverrides(){var t;if(!((t=this.associatedLayer)!=null&&t.fields))return;let e=null;for(const s of this.associatedLayer.fields){const i=this.getField(s.name);i?(!i.domain&&s.domain&&(i.domain=s.domain.clone()),i.editable=s.editable,i.nullable=s.nullable,i.length=s.length):(e||(e=this.fields?this.fields.slice():[]),e.push(s.clone()))}e&&this._set("fields",e)}_applyAssociatedLayerPopupOverrides(){if(!this.associatedLayer)return;const e=["popupTemplate","popupEnabled"],t=P(this);for(let s=0;s<e.length;s++){const i=e[s],n=this.originIdOf(i),l=this.associatedLayer.originIdOf(i);n<l&&(l===S.SERVICE||l===S.PORTAL_ITEM)&&t.setAtOrigin(i,this.associatedLayer[i],l)}}_applyAssociatedLayerExtentOverride(){var i,n,l,p,y,g,m;const e=(n=(i=this.associatedLayer)==null?void 0:i.editingInfo)==null?void 0:n.lastEditDate,t=(l=this.associatedLayer)==null?void 0:l.serverGens,s=(p=this.associatedLayer)==null?void 0:p.getAtOrigin("fullExtent","service");!T()||((y=this.associatedLayer)==null?void 0:y.infoFor3D)==null||!s||!x((g=this.associatedLayer)==null?void 0:g.url)||!e||((m=this.serviceUpdateTimeStamp)==null?void 0:m.lastUpdate)===e.getTime()||!this.serviceUpdateTimeStamp&&(t==null?void 0:t.minServerGen)===(t==null?void 0:t.serverGen)||P(this).setAtOrigin("fullExtent",s.clone(),S.SERVICE)}_applyAssociatedLayerPrivileges(){const e=this.associatedLayer;e&&(this._set("userHasEditingPrivileges",e.userHasEditingPrivileges),this._set("userHasFullEditingPrivileges",e.userHasFullEditingPrivileges),this._set("userHasUpdateItemPrivileges",e.userHasUpdateItemPrivileges))}async _setAssociatedFeatureLayer(e){if(["mesh-pyramids","points"].includes(this.profile))try{const{serverUrl:t,layerId:s,portalItem:i}=await Ve(`${this.url}/layers/${this.layerId}`,{sceneLayerItem:this.portalItem,apiKey:this.apiKey,signal:e}),n=await We.FeatureLayer();this.associatedLayer=new n({url:t,layerId:s,portalItem:i}),await this.associatedLayer.load()}catch(t){Fe(t)||this._logWarningOnPopupEnabled()}}async _logWarningOnPopupEnabled(){await Se(()=>this.popupEnabled&&this.popupTemplate!=null);const e=`this SceneLayer: ${this.title}`;this.attributeStorageInfo==null?c.getLogger(this).warn(`Associated FeatureLayer could not be loaded and no binary attributes found. Popups will not work on ${e}`):c.getLogger(this).info(`Associated FeatureLayer could not be loaded. Falling back to binary attributes for Popups on ${e}`)}_validateElevationInfo(){const e=this.elevationInfo;this.profile==="mesh-pyramids"&&D(c.getLogger(this),_e("Mesh scene layers","relative-to-scene",e)),D(c.getLogger(this),je("Scene layers",e))}};r([o({types:{key:"type",base:Ee,typeMap:{selection:Oe}},json:{origins:{"web-scene":{name:"layerDefinition.featureReduction",write:!0},"portal-item":{name:"layerDefinition.featureReduction",write:!0}}}})],a.prototype,"featureReduction",void 0),r([o({type:[u],json:{read:!1,origins:{"web-scene":{name:"layerDefinition.rangeInfos",write:!0},"portal-item":{name:"layerDefinition.rangeInfos",write:!0}}}})],a.prototype,"rangeInfos",void 0),r([o({json:{read:!1}})],a.prototype,"associatedLayer",void 0),r([o({type:["show","hide"]})],a.prototype,"listMode",void 0),r([o({type:["ArcGISSceneServiceLayer"]})],a.prototype,"operationalLayerType",void 0),r([o({json:{read:!1},readOnly:!0})],a.prototype,"type",void 0),r([o({...N.fields,readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],a.prototype,"fields",void 0),r([o()],a.prototype,"types",null),r([o()],a.prototype,"typeIdField",null),r([o()],a.prototype,"templates",null),r([o()],a.prototype,"formTemplate",null),r([o({readOnly:!0,clonable:!1})],a.prototype,"fieldsIndex",null),r([o({type:$e,json:{read:{source:"layerDefinition.floorInfo"},write:{target:"layerDefinition.floorInfo"}}})],a.prototype,"floorInfo",void 0),r([o(N.outFields)],a.prototype,"outFields",void 0),r([o({type:Q,readOnly:!0,json:{read:!1}})],a.prototype,"nodePages",void 0),r([h("service","nodePages",["nodePages","pointNodePages"])],a.prototype,"readNodePages",null),r([o({type:[Je],readOnly:!0})],a.prototype,"materialDefinitions",void 0),r([o({type:[Ke],readOnly:!0})],a.prototype,"textureSetDefinitions",void 0),r([o({type:[He],readOnly:!0})],a.prototype,"geometryDefinitions",void 0),r([o({readOnly:!0})],a.prototype,"serviceUpdateTimeStamp",void 0),r([o({readOnly:!0})],a.prototype,"attributeStorageInfo",void 0),r([o({readOnly:!0})],a.prototype,"statisticsInfo",void 0),r([o({type:E.ofType(Number),nonNullable:!0,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.excludeObjectIds",write:{enabled:!0}}})],a.prototype,"excludeObjectIds",void 0),r([o({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],a.prototype,"definitionExpression",void 0),r([o({type:Xe,json:{name:"layerDefinition.polygonFilter",write:{enabled:!0,allowNull:!0},origins:{service:{read:!1,write:!1}}}})],a.prototype,"filter",void 0),r([o({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],a.prototype,"path",void 0),r([o(Ae)],a.prototype,"elevationInfo",null),r([o({readOnly:!0,json:{read:!1}})],a.prototype,"effectiveCapabilities",null),r([o({readOnly:!0})],a.prototype,"effectiveEditingEnabled",null),r([o({type:String})],a.prototype,"geometryType",null),r([o(Te)],a.prototype,"labelsVisible",void 0),r([o({type:[xe],json:{origins:{service:{name:"drawingInfo.labelingInfo",read:{reader:R},write:!1}},name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:R},write:!0}})],a.prototype,"labelingInfo",void 0),r([o(Pe)],a.prototype,"legendEnabled",void 0),r([o({type:Number,json:{origins:{"web-document":{default:1,write:{enabled:!0,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}},read:{source:["opacity","layerDefinition.drawingInfo.transparency"],reader(e,t){var i,n;if(typeof e=="number"&&e>=0&&e<=1)return e;const s=(n=(i=t.layerDefinition)==null?void 0:i.drawingInfo)==null?void 0:n.transparency;return s!==void 0?De(s):void 0}}},"portal-item":{write:!0},service:{read:!1}}}})],a.prototype,"opacity",void 0),r([o({type:["Low","High"],readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],a.prototype,"priority",void 0),r([o({type:["Labels"],readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],a.prototype,"semantic",void 0),r([o({types:Re,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],a.prototype,"renderer",null),r([o({json:{read:!1}})],a.prototype,"cachedDrawingInfo",void 0),r([h("service","cachedDrawingInfo")],a.prototype,"readCachedDrawingInfo",null),r([o({readOnly:!0,json:{read:!1}})],a.prototype,"capabilities",null),r([o({type:Boolean,json:{read:!1}})],a.prototype,"editingEnabled",null),r([o({readOnly:!0,json:{write:!1,read:!1}})],a.prototype,"infoFor3D",null),r([o({readOnly:!0,json:{write:!1,read:!1}})],a.prototype,"relationships",null),r([o(qe)],a.prototype,"popupEnabled",void 0),r([o({type:Ne,json:{name:"popupInfo",write:!0}})],a.prototype,"popupTemplate",void 0),r([o({readOnly:!0,json:{read:!1}})],a.prototype,"defaultPopupTemplate",null),r([o({type:String,json:{read:!1}})],a.prototype,"objectIdField",void 0),r([h("service","objectIdField",["objectIdField","fields"])],a.prototype,"readObjectIdField",null),r([o({type:String,json:{read:!1}})],a.prototype,"globalIdField",void 0),r([h("service","globalIdField",["globalIdField","fields"])],a.prototype,"readGlobalIdField",null),r([o({readOnly:!0,type:String,json:{read:!1}})],a.prototype,"displayField",null),r([o({type:String,json:{read:!1}})],a.prototype,"profile",void 0),r([h("service","profile",["store.profile"])],a.prototype,"readProfile",null),r([o({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],a.prototype,"normalReferenceFrame",void 0),r([o(Ue)],a.prototype,"screenSizePerspectiveEnabled",void 0),r([o({json:{read:!1,origins:{service:{read:!0}}}})],a.prototype,"serviceItemId",void 0),a=r([I("esri.layers.SceneLayer")],a);const U={"mesh-pyramids":"mesh-pyramids",meshpyramids:"mesh-pyramids","features-meshes":"mesh-pyramids",points:"points","features-points":"points",lines:"lines","features-lines":"lines",polygons:"polygons","features-polygons":"polygons"},et={"mesh-pyramids":"mesh",points:"point",lines:"polyline",polygons:"polygon"},ct=a;export{ct as default};