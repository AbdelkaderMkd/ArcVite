import{ov as A,jz as ee,dd as te,aR as G,aB as b,jB as I,aK as se,ow as ie,b2 as N,ay as re,kQ as U,ox as $,jv as ne,g0 as ae,T as z,h as W,jM as B,f as oe,kV as le,g1 as he,b1 as ce,jA as de,jF as me,jG as pe,jH as ue,jI as fe,jJ as ye,jK as _e,ho as ve,jL as ge,bG as we,oy as Re,aO as xe,bA as Q,bm as be,bn as $e,oz as Te,br as Me,dL as Ve,oA as Ee,aC as q,aD as k,aF as Ce,bF as Se,oB as je}from"./index-3572d442.js";import{j as Ae,i as F}from"./perspectiveUtils-ec579255.js";import"./Container-6f579da3.js";import"./BufferPool-774466b9.js";import{T as Ge}from"./enums-b1d611e3.js";import{a as qe,w as Pe}from"./WGLContainer-98654cd1.js";import"./vec4f32-0d1b2306.js";import"./color-5d593af9.js";import"./definitions-f926d1a5.js";import"./MaterialKey-05dc7bce.js";import"./number-e491b09e.js";import{l as De}from"./MagnifierPrograms-943bd581.js";import"./GraphicsView2D-42b00db6.js";import"./AttributeStoreView-4c28c213.js";import{m as Oe}from"./LayerView2D-75cdb63f.js";import{u as He}from"./LayerView-e8e5ef51.js";import"./normalizeUtilsSync-86570995.js";import"./WGLBrushVTLSymbol-4e301e2a.js";import"./GeometryUtils-dd03fc25.js";import"./ShaderCompiler-77d0dcb6.js";import"./ProgramTemplate-1a91efd6.js";import"./heatmapTextureUtils-61534fe7.js";import"./alignmentUtils-ae955d28.js";import"./cimAnalyzer-150a8296.js";import"./BidiEngine-9a40f2f4.js";import"./labelPoint-bb8bc683.js";import"./GeometryUtils-984e8446.js";import"./Rect-ea14f53a.js";import"./Rasterizer-0aad8952.js";import"./rasterizingUtils-5eb53e8f.js";import"./pbf-db891cc3.js";import"./imageutils-b3f5044b.js";import"./Matcher-5a02b3c0.js";import"./visualVariablesUtils-1fa1b221.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-dc12a110.js";import"./ExpandedCIM-ae1f6e0f.js";import"./CircularArray-ef508845.js";import"./throttle-7bf02de9.js";import"./ComputedAttributeStorage-a3f2b133.js";import"./TimeOnly-b48aab9d.js";import"./projectionSupport-cd867045.js";import"./json-48e3ea08.js";import"./util-cd4c507d.js";const y=he(),Le={none:A.None,loop:A.Loop,oscillate:A.Oscillate};function Ie(s){return s?{...s,playAnimation:s.playing,repeatType:s.repeatType?Le[s.repeatType]:void 0}:{}}let Ue=class extends ee{constructor(e){super(),this.elementView=e,this.isWrapAround=!1,this.perspectiveTransform=te(),this._playHandle=null,this._vertices=new Float32Array(20),this._handles=[],this._handles.push(G(()=>this.elementView.element.opacity,t=>this.opacity=t,b),G(()=>[this.elementView.coords],()=>{this.requestRender()},b),G(()=>["animationOptions"in this.elementView.element&&this.elementView.element.animationOptions],()=>{var t;(t=this._playHandle)==null||t.remove(),this.texture=I(this.texture),this.requestRender()},b),se(()=>this.elementView.element.loaded,()=>{const t=this.elementView.element;this.ready(),t.type==="video"&&t.content!=null&&this._handles.push(ie(t.content,"play",()=>this.requestRender()))},b)),e.element.load().catch(t=>{N.getLogger("esri.views.2d.layers.MediaLayerView2D").error(new re("element-load-error","Element cannot be displayed",{element:e,error:t}))})}destroy(){var e;(e=this._playHandle)==null||e.remove(),this._handles.forEach(t=>t.remove()),this.texture=I(this.texture)}get dvsMat3(){return this.parent.dvsMat3}beforeRender(e){const{context:t}=e,i=this.elementView.element.content;if(i!=null){const r=i instanceof HTMLImageElement,n=i instanceof HTMLVideoElement,l=r?i.naturalWidth:n?i.videoWidth:i.width,a=r?i.naturalHeight:n?i.videoHeight:i.height;if(this._updatePerspectiveTransform(l,a),this.texture)n&&!i.paused&&(this.texture.setData(i),this.requestRender(),(t.type===U.WEBGL2||$(l)&&$(a))&&this.texture.generateMipmap());else{const c=new ne;if(c.wrapMode=ae.CLAMP_TO_EDGE,c.preMultiplyAlpha=!0,c.width=l,c.height=a,"getFrame"in i){const h=o=>{this.texture?this.texture.setData(o):this.texture=new z(t,c,o),this.requestRender()};"animationOptions"in this.elementView.element&&(this._playHandle=De(i,Ie(this.elementView.element.animationOptions),null,h))}else this.texture=new z(t,c,i);(t.type===U.WEBGL2||$(l)&&$(a))&&this.texture.generateMipmap(),n&&!i.paused&&this.requestRender()}}super.beforeRender(e)}_createTransforms(){return null}updateDrawCoords(e,t){const i=this.elementView.coords;if(i==null)return;const[r,n,l,a]=i.rings[0],c=this._vertices,{x:h,y:o}=e,p=t!==0;p?c.set([n[0]-h,n[1]-o,r[0]-h,r[1]-o,l[0]-h,l[1]-o,a[0]-h,a[1]-o,a[0]-h,a[1]-o,n[0]+t-h,n[1]-o,n[0]+t-h,n[1]-o,r[0]+t-h,r[1]-o,l[0]+t-h,l[1]-o,a[0]+t-h,a[1]-o]):c.set([n[0]-h,n[1]-o,r[0]-h,r[1]-o,l[0]-h,l[1]-o,a[0]-h,a[1]-o]),this.isWrapAround=p}getVAO(e,t,i){if(this.elementView.coords==null)return null;const r=this._vertices;if(this._vao)this._geometryVbo.setData(r);else{this._geometryVbo=W.createVertex(e,B.DYNAMIC_DRAW,r);const n=W.createVertex(e,B.STATIC_DRAW,new Uint16Array([0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1]));this._vao=new oe(e,i,t,{geometry:this._geometryVbo,tex:n})}return this._vao}_updatePerspectiveTransform(e,t){const i=this._vertices;Ae(y,[0,0,e,0,0,t,e,t],[i[0],i[1],i[4],i[5],i[2],i[3],i[6],i[7]]),le(this.perspectiveTransform,y[6]/y[8]*e,y[7]/y[8]*t)}};class ze extends qe{constructor(){super(...arguments),this._localOrigin=ce(0,0),this._viewStateId=-1,this._dvsMat3=de()}get dvsMat3(){return this._dvsMat3}beforeRender(e){this._updateMatrices(e),this._updateOverlays(e,this.children);for(const t of this.children)t.beforeRender(e)}prepareRenderPasses(e){const t=e.registerRenderPass({name:"overlay",brushes:[Pe.overlay],target:()=>this.children,drawPhase:Ge.MAP});return[...super.prepareRenderPasses(e),t]}_updateMatrices(e){const{state:t}=e,{id:i,size:r,pixelRatio:n,resolution:l,rotation:a,viewpoint:c,displayMat3:h}=t;if(this._viewStateId===i)return;const o=Math.PI/180*a,p=n*r[0],f=n*r[1],{x:T,y:g}=c.targetGeometry,M=me(T,t.spatialReference);this._localOrigin.x=M,this._localOrigin.y=g;const V=l*p,w=l*f,d=pe(this._dvsMat3);ue(d,d,h),fe(d,d,ye(p/2,f/2)),_e(d,d,ve(p/V,-f/w,1)),ge(d,d,-o),this._viewStateId=i}_updateOverlays(e,t){const{state:i}=e,{rotation:r,spatialReference:n,worldScreenWidth:l,size:a,viewpoint:c}=i,h=this._localOrigin;let o=0;const p=we(n);if(p&&n.isWrappable){const f=a[0],T=a[1],g=180/Math.PI*r,M=Math.abs(Math.cos(g)),V=Math.abs(Math.sin(g)),w=Math.round(f*M+T*V),[d,E]=p.valid,u=Re(n),{x:P,y:J}=c.targetGeometry,Y=[P,J],C=[0,0];i.toScreen(C,Y);const R=[0,0];let S;S=w>l?.5*l:.5*w;const D=Math.floor((P+.5*u)/u),X=d+D*u,Z=E+D*u,j=[C[0]+S,0];i.toMap(R,j),R[0]>Z&&(o=u),j[0]=C[0]-S,i.toMap(R,j),R[0]<X&&(o=-u);for(const x of t){const O=x.elementView.bounds;if(O==null)continue;const[H,,L]=O;H<d&&L>d?x.updateDrawCoords(h,u):L>E&&H<E?x.updateDrawCoords(h,-u):x.updateDrawCoords(h,o)}}else for(const f of t)f.updateDrawCoords(h,o)}}let v=class extends Oe(He){constructor(){super(...arguments),this._overlayContainer=null,this._fetchQueue=null,this._tileStrategy=null,this._elementReferences=new Map,this._debugGraphicsView=null,this.layer=null,this.elements=new xe}attach(){this.addAttachHandles([Q(()=>this.layer.effectiveSource,"refresh",()=>{this._tileStrategy.refresh(s=>this._updateTile(s)),this.requestUpdate()}),Q(()=>this.layer.effectiveSource,"change",({element:s})=>this._elementUpdateHandler(s))]),this._overlayContainer=new ze,this.container.addChild(this._overlayContainer),this._fetchQueue=new be({tileInfoView:this.view.featuresTilingScheme,concurrency:10,process:(s,e)=>this._queryElements(s,e)}),this._tileStrategy=new $e({cachePolicy:"purge",resampling:!0,acquireTile:s=>this._acquireTile(s),releaseTile:s=>this._releaseTile(s),tileInfoView:this.view.featuresTilingScheme}),this.requestUpdate()}detach(){var s;this.elements.removeAll(),this._tileStrategy.destroy(),this._fetchQueue.destroy(),this._overlayContainer.removeAllChildren(),this.container.removeAllChildren(),this._elementReferences.clear(),(s=this._debugGraphicsView)==null||s.destroy()}supportsSpatialReference(s){return!0}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}update(s){var e;this._tileStrategy.update(s),(e=this._debugGraphicsView)==null||e.update(s)}async hitTest(s,e){const t=[],i=s.normalize(),r=[i.x,i.y];for(const{projectedElement:{normalizedCoords:n,element:l}}of this._elementReferences.values())n!=null&&Te(n.rings,r)&&t.push({type:"media",element:l,layer:this.layer,mapPoint:s,sourcePoint:l.toSource(s)});return t.reverse()}canResume(){return this.layer.source!=null&&super.canResume()}async doRefresh(){this._fetchQueue.reset(),this._tileStrategy.refresh(s=>this._updateTile(s))}_acquireTile(s){const e=new We(s.clone());return this._updateTile(e),e}_updateTile(s){this._updatingHandles.addPromise(this._fetchQueue.push(s.key).then(e=>{const[t,i]=s.setElements(e);this._referenceElements(s,t),this._dereferenceElements(s,i),this.requestUpdate()},e=>{Me(e)||N.getLogger(this).error(e)}))}_releaseTile(s){this._fetchQueue.abort(s.key.id),s.elements&&this._dereferenceElements(s,s.elements),this.requestUpdate()}async _queryElements(s,e){const t=this.layer.effectiveSource;if(t==null)return[];this.view.featuresTilingScheme.getTileBounds(m,s,!0);const i=new Ve({xmin:m[0],ymin:m[1],xmax:m[2],ymax:m[3],spatialReference:this.view.spatialReference});return t.queryElements(i,e)}_referenceElements(s,e){if(this.layer.source!=null)for(const t of e)this._referenceElement(s,t)}_referenceElement(s,e){Ee(this._elementReferences,e.uid,()=>{const t=new F({element:e,spatialReference:this.view.spatialReference}),i=new Ue(t);return this._overlayContainer.addChild(i),this.elements.add(e),{tiles:new Set,projectedElement:t,overlay:i,debugGraphic:null}}).tiles.add(s)}_dereferenceElements(s,e){for(const t of e)this._dereferenceElement(s,t)}_dereferenceElement(s,e){var i;const t=this._elementReferences.get(e.uid);t.tiles.delete(s),t.tiles.size||(this._overlayContainer.removeChild(t.overlay),t.overlay.destroy(),t.projectedElement.destroy(),this._elementReferences.delete(e.uid),this.elements.remove(e),(i=this._debugGraphicsView)==null||i.graphics.remove(t.debugGraphic))}_elementUpdateHandler(s){var i;let e=this._elementReferences.get(s.uid);if(e){const r=e.projectedElement.normalizedCoords;if(r==null)return this._overlayContainer.removeChild(e.overlay),e.overlay.destroy(),e.projectedElement.destroy(),this._elementReferences.delete(s.uid),this.elements.remove(s),void((i=this._debugGraphicsView)==null?void 0:i.graphics.remove(e.debugGraphic));const n=[],l=[];for(const a of this._tileStrategy.tiles){const c=K(this.view.featuresTilingScheme,a,r);e.tiles.has(a)?c||l.push(a):c&&n.push(a)}for(const a of n)this._referenceElement(a,s);for(const a of l)this._dereferenceElement(a,s);return e=this._elementReferences.get(s.uid),void((e==null?void 0:e.debugGraphic)&&(e.debugGraphic.geometry=e.projectedElement.normalizedCoords,this._debugGraphicsView.graphicUpdateHandler({graphic:e.debugGraphic,property:"geometry"})))}const t=new F({element:s,spatialReference:this.view.spatialReference}).normalizedCoords;if(t!=null)for(const r of this._tileStrategy.tiles)K(this.view.featuresTilingScheme,r,t)&&this._referenceElement(r,s)}};q([k()],v.prototype,"layer",void 0),q([k({readOnly:!0})],v.prototype,"elements",void 0),v=q([Ce("esri.views.2d.layers.MediaLayerView2D")],v);const m=Se(),_={xmin:0,ymin:0,xmax:0,ymax:0};function K(s,e,t){return s.getTileBounds(m,e.key,!0),_.xmin=m[0],_.ymin=m[1],_.xmax=m[2],_.ymax=m[3],je(_,t)}class We{constructor(e){this.key=e,this.elements=null,this.isReady=!1,this.visible=!0}setElements(e){const t=[],i=new Set(this.elements);this.elements=e;for(const r of e)i.has(r)?i.delete(r):t.push(r);return this.isReady=!0,[t,Array.from(i)]}destroy(){}}const Pt=v;export{Pt as default};