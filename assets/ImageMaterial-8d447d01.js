import{mn as T,mo as P,mp as v,f3 as m,mq as u,mr as y,ms as O,mt as A,mu as $,lX as i,mv as f,mw as S,mx as c,my as C,iv as g,aQ as o,mz as n,mA as d,mB as E,ci as x,mC as w,mD as b,mE as N,mF as D,mG as M,mH as R,mI as I,mJ as F,mK as L,mL as U,mM as W,mN as B,mO as G,mP as z,mQ as H,mR as Q,mS as j,lY as p,mT as q,mU as V,mV as J,mW as K}from"./index-383689b1.js";function X(a){const e=new T,{vertex:t,fragment:s}=e;return P(t,a),e.include(v,a),e.attributes.add(m.POSITION,"vec3"),e.attributes.add(m.UV0,"vec2"),e.varyings.add("vpos","vec3"),a.hasMultipassTerrain&&e.varyings.add("depth","float"),t.code.add(u`
    void main(void) {
      vpos = position;
      ${a.hasMultipassTerrain?"depth = (view * vec4(vpos, 1.0)).z;":""}
      vTexCoord = uv0;
      gl_Position = transformPosition(proj, view, vpos);
    }
  `),e.include(y,a),e.include(O,a),s.uniforms.add(new A("tex",l=>l.texture),new $("opacity",l=>l.opacity)),e.varyings.add("vTexCoord","vec2"),a.output===i.Alpha?s.code.add(u`
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
    `)),e}const Y=Object.freeze(Object.defineProperty({__proto__:null,build:X},Symbol.toStringTag,{value:"Module"}));class h extends b{initializeProgram(e){return new N(e.rctx,h.shader.get().build(this.configuration),D)}_setPipelineState(e,t){const s=this.configuration,l=e===c.NONE,_=e===c.FrontFace;return M({blending:s.output!==i.Color&&s.output!==i.Alpha||!s.transparent?null:l?k:R(e),culling:I(s.cullFace),depthTest:{func:F(e)},depthWrite:l?s.writeDepth?L:null:U(e),colorWrite:W,stencilWrite:s.hasOccludees?B:null,stencilTest:s.hasOccludees?t?G:z:null,polygonOffset:l||_?null:H(s.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._setPipelineState(this.configuration.transparencyPassType,!0),this._setPipelineState(this.configuration.transparencyPassType,!1)}getPipelineState(e,t){return t?this._occludeePipelineState:super.getPipelineState(e,t)}}h.shader=new E(Y,()=>x(()=>import("./ImageMaterial.glsl-146fd065.js"),["assets/ImageMaterial.glsl-146fd065.js","assets/index-383689b1.js","assets/index-90fc0cd1.css"]));const k=C(g.ONE,g.ONE_MINUS_SRC_ALPHA);class r extends w{constructor(){super(...arguments),this.output=i.Color,this.cullFace=d.None,this.hasSlicePlane=!1,this.transparent=!1,this.enableOffset=!0,this.writeDepth=!0,this.hasOccludees=!1,this.transparencyPassType=c.NONE,this.hasMultipassTerrain=!1,this.cullAboveGround=!1}}o([n({count:i.COUNT})],r.prototype,"output",void 0),o([n({count:d.COUNT})],r.prototype,"cullFace",void 0),o([n()],r.prototype,"hasSlicePlane",void 0),o([n()],r.prototype,"transparent",void 0),o([n()],r.prototype,"enableOffset",void 0),o([n()],r.prototype,"writeDepth",void 0),o([n()],r.prototype,"hasOccludees",void 0),o([n({count:c.COUNT})],r.prototype,"transparencyPassType",void 0),o([n()],r.prototype,"hasMultipassTerrain",void 0),o([n()],r.prototype,"cullAboveGround",void 0);class ae extends Q{constructor(e){super(e,new ee),this.supportsEdges=!0,this._configuration=new r}getConfiguration(e,t){return this._configuration.output=e,this._configuration.cullFace=this.parameters.cullFace,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.transparencyPassType=t.transparencyPassType,this._configuration.enableOffset=t.camera.relativeElevation<j,this._configuration.hasMultipassTerrain=t.multipassTerrain.enabled,this._configuration.cullAboveGround=t.multipassTerrain.cullAboveGround,this._configuration}requiresSlot(e,t){return t===i.Color||t===i.Alpha||t===i.Highlight?e===p.DRAPED_MATERIAL?!0:t===i.Highlight?e===p.OPAQUE_MATERIAL:e===(this.parameters.transparent?this.parameters.writeDepth?p.TRANSPARENT_MATERIAL:p.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL:p.OPAQUE_MATERIAL):!1}createGLMaterial(e){return new Z(e)}createBufferWriter(){return new q(V)}}class Z extends J{constructor(e){super({...e,...e.material.parameters})}_updateParameters(e){return this.updateTexture(this._material.parameters.textureId),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(h,e)}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&(this._material.setParameters({hasOccludees:e.hasOccludees}),this._updateParameters(e))}beginSlot(e){return this._output!==i.Color&&this._output!==i.Alpha||this._updateOccludeeState(e),this._updateParameters(e)}}class ee extends K{constructor(){super(...arguments),this.transparent=!1,this.writeDepth=!0,this.hasSlicePlane=!1,this.cullFace=d.None,this.hasOccludees=!1,this.opacity=1,this.textureId=null,this.initTextureTransparent=!0}}export{ae as c,X as v};
