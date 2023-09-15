import{m7 as T,m8 as P,m9 as v,eJ as m,ma as u,mb as y,mc as A,md as O,me as $,lD as i,mf as f,mg as S,mh as c,mi as E,ih as g,aA as o,mj as n,mk as d,ml as C,bK as x,mm as b,mn as w,mo as D,mp as N,mq as M,mr as R,ms as I,mt as F,mu as L,mv as U,mw as B,mx as G,my as W,mz as z,mA as j,mB as H,mC as q,lE as p,mD as Q,mE as V,mF as k,mG as J}from"./index-80114339.js";function K(a){const e=new T,{vertex:t,fragment:s}=e;return P(t,a),e.include(v,a),e.attributes.add(m.POSITION,"vec3"),e.attributes.add(m.UV0,"vec2"),e.varyings.add("vpos","vec3"),a.hasMultipassTerrain&&e.varyings.add("depth","float"),t.code.add(u`
    void main(void) {
      vpos = position;
      ${a.hasMultipassTerrain?"depth = (view * vec4(vpos, 1.0)).z;":""}
      vTexCoord = uv0;
      gl_Position = transformPosition(proj, view, vpos);
    }
  `),e.include(y,a),e.include(A,a),s.uniforms.add(new O("tex",l=>l.texture),new $("opacity",l=>l.opacity)),e.varyings.add("vTexCoord","vec2"),a.output===i.Alpha?s.code.add(u`
    void main() {
      discardBySlice(vpos);
      ${a.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}

      float alpha = texture(tex, vTexCoord).a * opacity;
      if (alpha  < ${u.float(f)}) {
        discard;
      }

      fragColor = vec4(alpha);
    }
    `):(s.include(S),s.code.add(u`
    void main() {
      discardBySlice(vpos);
      ${a.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
      fragColor = texture(tex, vTexCoord) * opacity;

      if (fragColor.a < ${u.float(f)}) {
        discard;
      }

      fragColor = highlightSlice(fragColor, vpos);
      ${a.transparencyPassType===c.Color?"fragColor = premultiplyAlpha(fragColor);":""}
    }
    `)),e}const X=Object.freeze(Object.defineProperty({__proto__:null,build:K},Symbol.toStringTag,{value:"Module"}));class h extends w{initializeProgram(e){return new D(e.rctx,h.shader.get().build(this.configuration),N)}_setPipelineState(e,t){const s=this.configuration,l=e===c.NONE,_=e===c.FrontFace;return M({blending:s.output!==i.Color&&s.output!==i.Alpha||!s.transparent?null:l?Y:R(e),culling:I(s.cullFace),depthTest:{func:F(e)},depthWrite:l?s.writeDepth?L:null:U(e),colorWrite:B,stencilWrite:s.hasOccludees?G:null,stencilTest:s.hasOccludees?t?W:z:null,polygonOffset:l||_?null:j(s.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._setPipelineState(this.configuration.transparencyPassType,!0),this._setPipelineState(this.configuration.transparencyPassType,!1)}getPipelineState(e,t){return t?this._occludeePipelineState:super.getPipelineState(e,t)}}h.shader=new C(X,()=>x(()=>import("./ImageMaterial.glsl-83dc151a.js"),["assets/ImageMaterial.glsl-83dc151a.js","assets/index-80114339.js","assets/index-e81f504d.css"]));const Y=E(g.ONE,g.ONE_MINUS_SRC_ALPHA);class r extends b{constructor(){super(...arguments),this.output=i.Color,this.cullFace=d.None,this.hasSlicePlane=!1,this.transparent=!1,this.enableOffset=!0,this.writeDepth=!0,this.hasOccludees=!1,this.transparencyPassType=c.NONE,this.hasMultipassTerrain=!1,this.cullAboveGround=!1}}o([n({count:i.COUNT})],r.prototype,"output",void 0),o([n({count:d.COUNT})],r.prototype,"cullFace",void 0),o([n()],r.prototype,"hasSlicePlane",void 0),o([n()],r.prototype,"transparent",void 0),o([n()],r.prototype,"enableOffset",void 0),o([n()],r.prototype,"writeDepth",void 0),o([n()],r.prototype,"hasOccludees",void 0),o([n({count:c.COUNT})],r.prototype,"transparencyPassType",void 0),o([n()],r.prototype,"hasMultipassTerrain",void 0),o([n()],r.prototype,"cullAboveGround",void 0);class ae extends H{constructor(e){super(e,new ee),this.supportsEdges=!0,this._configuration=new r}getConfiguration(e,t){return this._configuration.output=e,this._configuration.cullFace=this.parameters.cullFace,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.transparencyPassType=t.transparencyPassType,this._configuration.enableOffset=t.camera.relativeElevation<q,this._configuration.hasMultipassTerrain=t.multipassTerrain.enabled,this._configuration.cullAboveGround=t.multipassTerrain.cullAboveGround,this._configuration}requiresSlot(e,t){return t===i.Color||t===i.Alpha||t===i.Highlight?e===p.DRAPED_MATERIAL?!0:t===i.Highlight?e===p.OPAQUE_MATERIAL:e===(this.parameters.transparent?this.parameters.writeDepth?p.TRANSPARENT_MATERIAL:p.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL:p.OPAQUE_MATERIAL):!1}createGLMaterial(e){return new Z(e)}createBufferWriter(){return new Q(V)}}class Z extends k{constructor(e){super({...e,...e.material.parameters})}_updateParameters(e){return this.updateTexture(this._material.parameters.textureId),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(h,e)}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&(this._material.setParameters({hasOccludees:e.hasOccludees}),this._updateParameters(e))}beginSlot(e){return this._output!==i.Color&&this._output!==i.Alpha||this._updateOccludeeState(e),this._updateParameters(e)}}class ee extends J{constructor(){super(...arguments),this.transparent=!1,this.writeDepth=!0,this.hasSlicePlane=!1,this.cullFace=d.None,this.hasOccludees=!1,this.opacity=1,this.textureId=null,this.initTextureTransparent=!0}}export{ae as c,K as v};
