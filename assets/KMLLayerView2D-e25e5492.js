import{im as z,dh as T,cd as $,io as B,ip as k,f9 as U,x as F,bH as O,bF as N,iq as A,T as H,bZ as W,aX as D,b5 as K,b0 as Q,dQ as J,aP as C,cV as E,dg as X,dq as q,h_ as Y,ir as L,c9 as Z,e3 as tt,aQ as v,aR as S,aT as et}from"./index-383689b1.js";import{b as P,g as it,d as at}from"./kmlUtils-f1d972b8.js";import{w as st,b as rt,T as ot}from"./Bitmap-52374ba3.js";import{a as nt}from"./BitmapContainer-348792c1.js";import{f as lt}from"./LayerView2D-26931b5c.js";import{i as M}from"./GraphicContainer-08358de5.js";import{o as R}from"./GraphicsView2D-dd35d9f0.js";import{d as ht}from"./LayerView-fd5dbfea.js";import{C as pt,$ as mt}from"./rasterProjectionHelper-a0f6b67b.js";import{a as ct}from"./WGLContainer-b3d550a0.js";import{o as dt}from"./MaterialPrograms-5c2fc704.js";import"./enums-b1d611e3.js";import"./Container-ed32c6f2.js";import"./EffectView-42d45802.js";import"./definitions-24f6db57.js";import"./BaseGraphicContainer-1b0193fe.js";import"./FeatureContainer-f0d2b018.js";import"./AttributeStoreView-9283c0d8.js";import"./color-90ea320b.js";import"./number-e491b09e.js";import"./visualVariablesUtils-c75c6d50.js";import"./MaterialKey-bc9622a6.js";import"./alignmentUtils-ae955d28.js";import"./cimAnalyzer-fbeace2d.js";import"./BidiEngine-9a40f2f4.js";import"./GeometryUtils-984e8446.js";import"./Rect-ea14f53a.js";import"./ExpandedCIM-1490c593.js";import"./util-91c099d2.js";import"./TileContainer-c1cadeee.js";import"./normalizeUtilsSync-91b0dd4d.js";import"./projectionSupport-2845339d.js";import"./json-48e3ea08.js";import"./Matcher-069875c6.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-e1a33598.js";import"./GeometryUtils-dd03fc25.js";import"./ComputedAttributeStorage-c3d08a49.js";import"./arcadeTimeUtils-f531775a.js";import"./centroid-8e8cfa47.js";import"./WGLBrushVTLSymbol-7648093c.js";import"./ShaderCompiler-77d0dcb6.js";import"./ProgramTemplate-3f877313.js";import"./heatmapTextureUtils-dfcf9845.js";import"./programUtils-f035fe8a.js";class p{constructor(t){if(this._ownsRctx=!1,t)this._ownsRctx=!1,this._rctx=t;else{if(p._instance)return p._instanceRefCount++,p._instance;p._instanceRefCount=1,p._instance=this,this._ownsRctx=!0;const e=document.createElement("canvas").getContext("webgl");e.getExtension("OES_texture_float"),this._rctx=new z(e,{})}const a={applyProjection:!0,bilinear:!1,bicubic:!1},r=dt("raster/reproject","raster/reproject",new Map([["a_position",0]]),a);this._program=this._rctx.programCache.acquire(r.shaders.vertexShader,r.shaders.fragmentShader,r.attributes),this._rctx.useProgram(this._program),this._program.setUniform1f("u_opacity",1),this._program.setUniform1i("u_image",0),this._program.setUniform1i("u_flipY",0),this._program.setUniform1i("u_transformGrid",1),this._quad=new ct(this._rctx,[0,0,1,0,0,1,1,1])}reprojectTexture(t,a,r=!1){const e=T(t.extent,a),s=new $({x:(t.extent.xmax-t.extent.xmin)/t.texture.descriptor.width,y:(t.extent.ymax-t.extent.ymin)/t.texture.descriptor.height,spatialReference:t.extent.spatialReference}),{x:o,y:h}=pt(s,a,t.extent);let n=(o+h)/2;const l=Math.round((e.xmax-e.xmin)/n),u=Math.round((e.ymax-e.ymin)/n);n=(e.width/l+e.height/u)/2;const I=new $({x:n,y:n,spatialReference:e.spatialReference}),g=mt({projectedExtent:e,srcBufferExtent:t.extent,pixelSize:I,hasWrapAround:!0,spacing:[16,16]}),w=B(this._rctx,g),x=new k(l,u);x.wrapMode=U.CLAMP_TO_EDGE;const m=new F(this._rctx,x);this._rctx.bindFramebuffer(m),this._rctx.setViewport(0,0,l,u),this._rctx.useProgram(this._program),this._rctx.bindTexture(t.texture,0),this._rctx.bindTexture(w,1),this._quad.bind();const{width:y=0,height:b=0}=t.texture.descriptor;if(this._program.setUniform2f("u_srcImageSize",y,b),this._program.setUniform2fv("u_transformSpacing",g.spacing),this._program.setUniform2fv("u_transformGridSize",g.size),this._program.setUniform2f("u_targetImageSize",l,u),this._quad.draw(),this._quad.unbind(),this._rctx.useProgram(null),this._rctx.bindFramebuffer(null),w.dispose(),r){const{width:c,height:V}=m,_=new ImageData(c??0,V??0);m.readPixels(0,0,c??0,V??0,O.RGBA,N.UNSIGNED_BYTE,_.data);const G=m.detachColorTexture(A.COLOR_ATTACHMENT0);return m.dispose(),{texture:G,extent:e,imageData:_}}const f=m.detachColorTexture(A.COLOR_ATTACHMENT0);return m.dispose(),{texture:f,extent:e}}reprojectBitmapData(t,a){const r=st(t.bitmapData)?rt(t.bitmapData):t.bitmapData,e=new k;e.wrapMode=U.CLAMP_TO_EDGE,e.width=t.bitmapData.width,e.height=t.bitmapData.height;const s=new H(this._rctx,e,r),o=this.reprojectTexture({texture:s,extent:t.extent},a,!0);o.texture.dispose();const h=document.createElement("canvas"),n=o.imageData;return h.width=n.width,h.height=n.height,h.getContext("2d").putImageData(n,0,0),{bitmapData:h,extent:o.extent}}async loadAndReprojectBitmapData(t,a,r){const e=(await W(t,{responseType:"image"})).data,s=document.createElement("canvas");s.width=e.width,s.height=e.height;const o=s.getContext("2d");o.drawImage(e,0,0);const h=o.getImageData(0,0,s.width,s.height);if(a.spatialReference.equals(r))return{bitmapData:h,extent:a};const n=this.reprojectBitmapData({bitmapData:h,extent:a},r);return{bitmapData:n.bitmapData,extent:n.extent}}destroy(){this._ownsRctx?(p._instanceRefCount--,p._instanceRefCount===0&&(this._quad.dispose(),this._program.dispose(),this._rctx.dispose(),p._instance=null)):(this._quad.dispose(),this._program.dispose())}}p._instanceRefCount=0;class j{constructor(){this.allSublayers=new Map,this.allPoints=[],this.allPolylines=[],this.allPolygons=[],this.allMapImages=[]}}let d=class extends lt(ht){constructor(){super(...arguments),this._bitmapIndex=new Map,this._mapImageContainer=new nt,this._kmlVisualData=new j,this._fetchController=null,this.allVisiblePoints=new D,this.allVisiblePolylines=new D,this.allVisiblePolygons=new D,this.allVisibleMapImages=new K}async hitTest(i,t){var r,e,s;const a=this.layer;return[(r=this._pointsView)==null?void 0:r.hitTest(i),(e=this._polylinesView)==null?void 0:e.hitTest(i),(s=this._polygonsView)==null?void 0:s.hitTest(i)].flat().filter(Boolean).map(o=>(o.layer=a,o.sourceLayer=a,{type:"graphic",graphic:o,layer:a,mapPoint:i}))}update(i){this._polygonsView&&this._polygonsView.processUpdate(i),this._polylinesView&&this._polylinesView.processUpdate(i),this._pointsView&&this._pointsView.processUpdate(i)}attach(){this._fetchController=new AbortController,this.container.addChild(this._mapImageContainer),this._polygonsView=new R({view:this.view,graphics:this.allVisiblePolygons,requestUpdateCallback:()=>this.requestUpdate(),container:new M(this.view.featuresTilingScheme)}),this.container.addChild(this._polygonsView.container),this._polylinesView=new R({view:this.view,graphics:this.allVisiblePolylines,requestUpdateCallback:()=>this.requestUpdate(),container:new M(this.view.featuresTilingScheme)}),this.container.addChild(this._polylinesView.container),this._pointsView=new R({view:this.view,graphics:this.allVisiblePoints,requestUpdateCallback:()=>this.requestUpdate(),container:new M(this.view.featuresTilingScheme)}),this.container.addChild(this._pointsView.container),this.addAttachHandles([this.allVisibleMapImages.on("change",i=>{i.added.forEach(t=>this._addMapImage(t)),i.removed.forEach(t=>this._removeMapImage(t))}),Q(()=>this.layer.visibleSublayers,i=>{for(const[t,a]of this._kmlVisualData.allSublayers)a.visibility=0;for(const t of i){const a=this._kmlVisualData.allSublayers.get(t.id);a&&(a.visibility=1)}this._refreshCollections()})]),this.updatingHandles.addPromise(this._fetchService(this._fetchController.signal)),this._imageReprojector=new p}detach(){this._fetchController=J(this._fetchController),this._mapImageContainer.removeAllChildren(),this.container.removeAllChildren(),this._bitmapIndex.clear(),this._polygonsView=C(this._polygonsView),this._polylinesView=C(this._polylinesView),this._pointsView=C(this._pointsView),this._imageReprojector=C(this._imageReprojector)}moveStart(){}viewChange(){this._polygonsView.viewChange(),this._polylinesView.viewChange(),this._pointsView.viewChange()}moveEnd(){}isUpdating(){return this._pointsView.updating||this._polygonsView.updating||this._polylinesView.updating}_addMapImage(i){var t,a;((t=this.view.spatialReference)!=null&&t.isWGS84||(a=this.view.spatialReference)!=null&&a.isWebMercator)&&this._imageReprojector.loadAndReprojectBitmapData(i.href,E.fromJSON(i.extent),this.view.spatialReference).then(r=>{const e=new ot(r.bitmapData);e.x=r.extent.xmin,e.y=r.extent.ymax,e.resolution=r.extent.width/r.bitmapData.width,e.rotation=i.rotation,this._mapImageContainer.addChild(e),this._bitmapIndex.set(i,e)})}async _getViewDependentUrl(i,t){const{viewFormat:a,viewBoundScale:r,httpQuery:e}=i;if(a!=null){if(t==null)throw new Error("Loading this network link requires a view state.");let s;if(await X(),r!=null&&r!==1){const c=new E(t.extent);c.expand(r),s=c}else s=t.extent;s=T(s,q.WGS84);const o=T(s,q.WebMercator),h=s.xmin,n=s.xmax,l=s.ymin,u=s.ymax,I=t.size[0]*t.pixelRatio,g=t.size[1]*t.pixelRatio,w=Math.max(o.width,o.height),x={"[bboxWest]":h.toString(),"[bboxEast]":n.toString(),"[bboxSouth]":l.toString(),"[bboxNorth]":u.toString(),"[lookatLon]":s.center.x.toString(),"[lookatLat]":s.center.y.toString(),"[lookatRange]":w.toString(),"[lookatTilt]":"0","[lookatHeading]":t.rotation.toString(),"[lookatTerrainLon]":s.center.x.toString(),"[lookatTerrainLat]":s.center.y.toString(),"[lookatTerrainAlt]":"0","[cameraLon]":s.center.x.toString(),"[cameraLat]":s.center.y.toString(),"[cameraAlt]":w.toString(),"[horizFov]":"60","[vertFov]":"60","[horizPixels]":I.toString(),"[vertPixels]":g.toString(),"[terrainEnabled]":"0","[clientVersion]":Y,"[kmlVersion]":"2.2","[clientName]":"ArcGIS API for JavaScript","[language]":"en-US"},m=c=>{for(const V in c){let _;for(_ in x)c[V]=c[V].replace(_,x[_])}},y=L(a);m(y);let b={};e!=null&&(b=L(e),m(b));const f=Z(i.href);return f.query={...f.query,...y,...b},`${f.path}?${tt(y)}`}return i.href}async _fetchService(i){const t=new j;await this._loadVisualData(this.layer.url,t,i),this._kmlVisualData=t,this._refreshCollections()}_refreshCollections(){this.allVisiblePoints.removeAll(),this.allVisiblePolylines.removeAll(),this.allVisiblePolygons.removeAll(),this.allVisibleMapImages.removeAll(),this.allVisiblePoints.addMany(this._kmlVisualData.allPoints.filter(i=>this._isSublayerVisible(i.sublayerId)).map(({item:i})=>i)),this.allVisiblePolylines.addMany(this._kmlVisualData.allPolylines.filter(i=>this._isSublayerVisible(i.sublayerId)).map(({item:i})=>i)),this.allVisiblePolygons.addMany(this._kmlVisualData.allPolygons.filter(i=>this._isSublayerVisible(i.sublayerId)).map(({item:i})=>i)),this.allVisibleMapImages.addMany(this._kmlVisualData.allMapImages.filter(i=>this._isSublayerVisible(i.sublayerId)).map(({item:i})=>i))}_isSublayerVisible(i){const t=this._kmlVisualData.allSublayers.get(i);return!!(t!=null&&t.visibility)&&(t.parentFolderId===-1||this._isSublayerVisible(t.parentFolderId))}_loadVisualData(i,t,a){return this._fetchParsedKML(i,a).then(async r=>{for(const e of r.sublayers){t.allSublayers.set(e.id,e);const s=e.points?await P(e.points):[],o=e.polylines?await P(e.polylines):[],h=e.polygons?await P(e.polygons):[],n=e.mapImages||[];if(t.allPoints.push(...s.map(l=>({item:l,sublayerId:e.id}))),t.allPolylines.push(...o.map(l=>({item:l,sublayerId:e.id}))),t.allPolygons.push(...h.map(l=>({item:l,sublayerId:e.id}))),t.allMapImages.push(...n.map(l=>({item:l,sublayerId:e.id}))),e.networkLink){const l=await this._getViewDependentUrl(e.networkLink,this.view.state);await this._loadVisualData(l,t,a)}}})}_fetchParsedKML(i,t){return it(i,this.layer.spatialReference,this.layer.refreshInterval,t).then(a=>at(a.data))}_removeMapImage(i){const t=this._bitmapIndex.get(i);t&&(this._mapImageContainer.removeChild(t),this._bitmapIndex.delete(i))}};v([S()],d.prototype,"_pointsView",void 0),v([S()],d.prototype,"_polylinesView",void 0),v([S()],d.prototype,"_polygonsView",void 0),v([S()],d.prototype,"updating",void 0),d=v([et("esri.views.2d.layers.KMLLayerView2D")],d);const re=d;export{re as default};