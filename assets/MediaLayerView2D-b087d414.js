import{eT as N,l as I,f as G,eU as X,eV as Z,s as k,T as ee,dF as te,n as W,eW as M,ed as re,eX as ie,dE as se,dG as oe,B as ne,dH as ae,dI as le,dJ as he,dK as me,D as pe,eY as de,V as ce,q as H,y as ue,r as fe,eZ as _e,d as ye,aM as ve,e_ as ge,a as x,b as A,c as we,C as Re,e$ as $e}from"./index-694ce44d.js";import"./UniqueValueRenderer-3096ae45.js";import"./jsonUtils-fa57e182.js";import{j as Me,i as L}from"./perspectiveUtils-fb98fea0.js";import"./MagnifierPrograms-8bc5a4fa.js";import{i as xe}from"./Container-98784fc3.js";import"./BufferPool-cbcff396.js";import{T as Te}from"./color-807fab76.js";import{i as Ee,w as be}from"./WGLContainer-8c37a38c.js";import{D as Ce,F as z}from"./enums-b14466b3.js";import{e as Ve,T as Se}from"./Texture-de2922f0.js";import"./ProgramTemplate-6419e6e4.js";import"./definitions-a76b7e9e.js";import"./GeometryUtils-c90a4bf4.js";import{c as Q,u as qe}from"./VertexArrayObject-51fe5775.js";import"./StyleDefinition-29c49b98.js";import"./enums-fb086c25.js";import"./OrderIndependentTransparency-309a1bc3.js";import"./floatRGBA-1cdb5626.js";import"./testSVGPremultipliedAlpha-dfedd300.js";import"./GraphicsView2D-5322468e.js";import"./AttributeStoreView-4542327c.js";import"./earcut-25af7c0e.js";import"./featureConversionUtils-0828833d.js";import"./lengthUtils-ee5fce51.js";import{r as Ge}from"./vec3f32-ad1dc57f.js";import{v as Ae}from"./normalizeUtils-02a847e9.js";import{e as De}from"./mat3f64-221ce671.js";import{f as Pe,d as Oe}from"./LayerView-0c3abff6.js";import"./LegendOptions-457bb874.js";import"./diffUtils-a329eb07.js";import"./SizeVariable-f2e14e5f.js";import"./colorRamps-c91442f9.js";import"./ColorStop-d3f73d6d.js";import"./featureFlags-6cf6afd3.js";import"./styleUtils-fadc7778.js";import"./DictionaryLoader-926baf58.js";import"./LRUCache-962ebf1b.js";import"./Version-6d52fa47.js";import"./FieldsIndex-c27e2366.js";import"./heatmapUtils-c03ab930.js";import"./normalizeUtilsSync-9066bce3.js";import"./normalizeUtilsCommon-85cfc130.js";import"./ExpandedCIM-77060c38.js";import"./BidiEngine-9a40f2f4.js";import"./OptimizedGeometry-33b2eb0d.js";import"./GeometryUtils-984e8446.js";import"./enums-f1a6a48a.js";import"./utils-f5aaa5be.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-d5ac8a7f.js";import"./rasterizingUtils-0720e7a0.js";import"./pbf-a4c6cc53.js";import"./imageutils-26f27375.js";import"./Matcher-a8074a44.js";import"./visualVariablesUtils-a4775b4a.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-3f03f801.js";import"./defaultsJSON-b087dd4d.js";import"./devEnvironmentUtils-5002a058.js";import"./webStyleSymbolUtils-ff0ff2ec.js";import"./CircularArray-ef508845.js";import"./throttle-7bf02de9.js";import"./ComputedAttributeStorage-cfc9b782.js";import"./arcadeTimeUtils-63972b50.js";import"./executionError-c92d3b85.js";import"./projectionSupport-657658d1.js";import"./json-48e3ea08.js";import"./parser-efb788bb.js";import"./VertexElementDescriptor-2925c6af.js";import"./config-1337d16e.js";import"./basicInterfaces-4ab7cc6a.js";import"./LabelClass-1bdf648f.js";import"./labelUtils-9d1c424f.js";import"./TiledDisplayObject-a6540d9f.js";import"./labelingInfo-ea1763c0.js";import"./clusterUtils-2a049c35.js";import"./util-2693a291.js";import"./OptimizedFeatureSet-1d1ac4b9.js";const y=De();let Ue=class extends xe{constructor(e){super(),this.elementView=e,this.isWrapAround=!1,this.perspectiveTransform=N(),this._vertices=new Float32Array(20),this._handles=[],this._handles.push(I(()=>this.elementView.element.opacity,t=>this.opacity=t,G),I(()=>[this.elementView.coords],()=>{this.requestRender()},G),X(()=>this.elementView.element.loaded,()=>{const t=this.elementView.element;this.ready(),t.type==="video"&&t.content!=null&&this._handles.push(Z(t.content,"play",()=>this.requestRender()))},G)),e.element.load().catch(t=>{k.getLogger("esri.views.2d.layers.MediaLayerView2D").error(new ee("element-load-error","Element cannot be displayed",{element:e,error:t}))})}destroy(){this._handles.forEach(e=>e.remove()),this.texture=te(this.texture)}get dvsMat3(){return this.parent.dvsMat3}beforeRender(e){const{context:t}=e,i=this.elementView.element.content;if(i!=null){const s=i instanceof HTMLImageElement,o=i instanceof HTMLVideoElement,a=s?i.naturalWidth:o?i.videoWidth:i.width,n=s?i.naturalHeight:o?i.videoHeight:i.height;if(this._updatePerspectiveTransform(a,n),this.texture)o&&!i.paused&&(this.texture.setData(i),this.requestRender(),(t.type===W.WEBGL2||M(a)&&M(n))&&this.texture.generateMipmap());else{const m=new Ve;m.wrapMode=Ce.CLAMP_TO_EDGE,m.preMultiplyAlpha=!0,m.width=a,m.height=n,this.texture=new Se(t,m,i),(t.type===W.WEBGL2||M(a)&&M(n))&&this.texture.generateMipmap(),o&&!i.paused&&this.requestRender()}}super.beforeRender(e)}_createTransforms(){return null}updateDrawCoords(e,t){const i=this.elementView.coords;if(i==null)return;const[s,o,a,n]=i.rings[0],m=this._vertices,{x:l,y:h}=e,c=t!==0;c?m.set([o[0]-l,o[1]-h,s[0]-l,s[1]-h,a[0]-l,a[1]-h,n[0]-l,n[1]-h,n[0]-l,n[1]-h,o[0]+t-l,o[1]-h,o[0]+t-l,o[1]-h,s[0]+t-l,s[1]-h,a[0]+t-l,a[1]-h,n[0]+t-l,n[1]-h]):m.set([o[0]-l,o[1]-h,s[0]-l,s[1]-h,a[0]-l,a[1]-h,n[0]-l,n[1]-h]),this.isWrapAround=c}getVAO(e,t,i){if(this.elementView.coords==null)return null;const s=this._vertices;if(this._vao)this._geometryVbo.setData(s);else{this._geometryVbo=Q.createVertex(e,z.DYNAMIC_DRAW,s);const o=Q.createVertex(e,z.STATIC_DRAW,new Uint16Array([0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1]));this._vao=new qe(e,i,t,{geometry:this._geometryVbo,tex:o})}return this._vao}_updatePerspectiveTransform(e,t){const i=this._vertices;Me(y,[0,0,e,0,0,t,e,t],[i[0],i[1],i[4],i[5],i[2],i[3],i[6],i[7]]),re(this.perspectiveTransform,y[6]/y[8]*e,y[7]/y[8]*t)}};class je extends Ee{constructor(){super(...arguments),this._localOrigin=ie(0,0),this._viewStateId=-1,this._dvsMat3=se(),this.requiresDedicatedFBO=!1}get dvsMat3(){return this._dvsMat3}beforeRender(e){this._updateMatrices(e),this._updateOverlays(e,this.children);for(const t of this.children)t.beforeRender(e)}prepareRenderPasses(e){const t=e.registerRenderPass({name:"overlay",brushes:[be.overlay],target:()=>this.children,drawPhase:Te.MAP});return[...super.prepareRenderPasses(e),t]}_updateMatrices(e){const{state:t}=e,{id:i,size:s,pixelRatio:o,resolution:a,rotation:n,viewpoint:m,displayMat3:l}=t;if(this._viewStateId===i)return;const h=Math.PI/180*n,c=o*s[0],f=o*s[1],{x:T,y:g}=m.targetGeometry,E=Ae(T,t.spatialReference);this._localOrigin.x=E,this._localOrigin.y=g;const b=a*c,w=a*f,p=oe(this._dvsMat3);ne(p,p,l),ae(p,p,le(c/2,f/2)),he(p,p,Ge(c/b,-f/w,1)),me(p,p,-h),this._viewStateId=i}_updateOverlays(e,t){const{state:i}=e,{rotation:s,spatialReference:o,worldScreenWidth:a,size:n,viewpoint:m}=i,l=this._localOrigin;let h=0;const c=pe(o);if(c&&o.isWrappable){const f=n[0],T=n[1],g=180/Math.PI*s,E=Math.abs(Math.cos(g)),b=Math.abs(Math.sin(g)),w=Math.round(f*E+T*b),[p,C]=c.valid,u=de(o),{x:D,y:F}=m.targetGeometry,Y=[D,F],V=[0,0];i.toScreen(V,Y);const R=[0,0];let S;S=w>a?.5*a:.5*w;const P=Math.floor((D+.5*u)/u),J=p+P*u,K=C+P*u,q=[V[0]+S,0];i.toMap(R,q),R[0]>K&&(h=u),q[0]=V[0]-S,i.toMap(R,q),R[0]<J&&(h=-u);for(const $ of t){const O=$.elementView.bounds;if(O==null)continue;const[U,,j]=O;U<p&&j>p?$.updateDrawCoords(l,u):j>C&&U<C?$.updateDrawCoords(l,-u):$.updateDrawCoords(l,h)}}else for(const f of t)f.updateDrawCoords(l,h)}}let _=class extends Pe(Oe){constructor(){super(...arguments),this._overlayContainer=null,this._fetchQueue=null,this._tileStrategy=null,this._elementReferences=new Map,this._debugGraphicsView=null,this.layer=null,this.elements=new ce}attach(){this.addAttachHandles([H(()=>this.layer.effectiveSource,"refresh",()=>{this._tileStrategy.refresh(r=>this._updateTile(r)),this.requestUpdate()}),H(()=>this.layer.effectiveSource,"change",({element:r})=>this._elementUpdateHandler(r))]),this._overlayContainer=new je,this.container.addChild(this._overlayContainer),this._fetchQueue=new ue({tileInfoView:this.view.featuresTilingScheme,concurrency:10,process:(r,e)=>this._queryElements(r,e)}),this._tileStrategy=new fe({cachePolicy:"purge",resampling:!0,acquireTile:r=>this._acquireTile(r),releaseTile:r=>this._releaseTile(r),tileInfoView:this.view.featuresTilingScheme}),this.requestUpdate()}detach(){var r;this.elements.removeAll(),this._tileStrategy.destroy(),this._fetchQueue.destroy(),this._overlayContainer.removeAllChildren(),this.container.removeAllChildren(),this._elementReferences.clear(),(r=this._debugGraphicsView)==null||r.destroy()}supportsSpatialReference(r){return!0}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}update(r){var e;this._tileStrategy.update(r),(e=this._debugGraphicsView)==null||e.update(r)}async hitTest(r,e){const t=[],i=r.normalize(),s=[i.x,i.y];for(const{projectedElement:{normalizedCoords:o,element:a}}of this._elementReferences.values())o!=null&&_e(o.rings,s)&&t.push({type:"media",element:a,layer:this.layer,mapPoint:r});return t.reverse()}canResume(){return this.layer.source!=null&&super.canResume()}async doRefresh(){this._fetchQueue.reset(),this._tileStrategy.refresh(r=>this._updateTile(r))}_acquireTile(r){const e=new Ie(r.clone());return this._updateTile(e),e}_updateTile(r){this.updatingHandles.addPromise(this._fetchQueue.push(r.key).then(e=>{const[t,i]=r.setElements(e);this._referenceElements(r,t),this._dereferenceElements(r,i),this.requestUpdate()},e=>{ye(e)||k.getLogger(this).error(e)}))}_releaseTile(r){this._fetchQueue.abort(r.key.id),r.elements&&this._dereferenceElements(r,r.elements),this.requestUpdate()}async _queryElements(r,e){const t=this.layer.effectiveSource;if(t==null)return[];this.view.featuresTilingScheme.getTileBounds(d,r,!0);const i=new ve({xmin:d[0],ymin:d[1],xmax:d[2],ymax:d[3],spatialReference:this.view.spatialReference});return t.queryElements(i,e)}_referenceElements(r,e){if(this.layer.source!=null)for(const t of e)this._referenceElement(r,t)}_referenceElement(r,e){ge(this._elementReferences,e.uid,()=>{const t=new L({element:e,spatialReference:this.view.spatialReference}),i=new Ue(t);return this._overlayContainer.addChild(i),this.elements.add(e),{tiles:new Set,projectedElement:t,overlay:i,debugGraphic:null}}).tiles.add(r)}_dereferenceElements(r,e){for(const t of e)this._dereferenceElement(r,t)}_dereferenceElement(r,e){var i;const t=this._elementReferences.get(e.uid);t.tiles.delete(r),t.tiles.size||(this._overlayContainer.removeChild(t.overlay),t.overlay.destroy(),t.projectedElement.destroy(),this._elementReferences.delete(e.uid),this.elements.remove(e),(i=this._debugGraphicsView)==null||i.graphics.remove(t.debugGraphic))}_elementUpdateHandler(r){var i;let e=this._elementReferences.get(r.uid);if(e){const s=e.projectedElement.normalizedCoords;if(s==null)return this._overlayContainer.removeChild(e.overlay),e.overlay.destroy(),e.projectedElement.destroy(),this._elementReferences.delete(r.uid),this.elements.remove(r),void((i=this._debugGraphicsView)==null?void 0:i.graphics.remove(e.debugGraphic));const o=[],a=[];for(const n of this._tileStrategy.tiles){const m=B(this.view.featuresTilingScheme,n,s);e.tiles.has(n)?m||a.push(n):m&&o.push(n)}for(const n of o)this._referenceElement(n,r);for(const n of a)this._dereferenceElement(n,r);return e=this._elementReferences.get(r.uid),void((e==null?void 0:e.debugGraphic)&&(e.debugGraphic.geometry=e.projectedElement.normalizedCoords,this._debugGraphicsView.graphicUpdateHandler({graphic:e.debugGraphic,property:"geometry"})))}const t=new L({element:r,spatialReference:this.view.spatialReference}).normalizedCoords;if(t!=null)for(const s of this._tileStrategy.tiles)B(this.view.featuresTilingScheme,s,t)&&this._referenceElement(s,r)}};x([A()],_.prototype,"_fetchQueue",void 0),x([A()],_.prototype,"layer",void 0),x([A({readOnly:!0})],_.prototype,"elements",void 0),_=x([we("esri.views.2d.layers.MediaLayerView2D")],_);const d=Re(),v={xmin:0,ymin:0,xmax:0,ymax:0};function B(r,e,t){return r.getTileBounds(d,e.key,!0),v.xmin=d[0],v.ymin=d[1],v.xmax=d[2],v.ymax=d[3],$e(v,t)}class Ie{constructor(e){this.key=e,this.elements=null,this.isReady=!1,this.visible=!0}setElements(e){const t=[],i=new Set(this.elements);this.elements=e;for(const s of e)i.has(s)?i.delete(s):t.push(s);return this.isReady=!0,[t,Array.from(i)]}destroy(){}}const dr=_;export{dr as default};