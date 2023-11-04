import{nT as y,nU as $,nV as A,fW as p,nW as c,nX as I,nY as O,nZ as S,n_ as b,n$ as n,o0 as m,o1 as C,o2 as d,o3 as x,jC as E,aC as o,o4 as r,kr as P,o5 as D,f2 as w,o6 as N,o7 as R,o8 as V,o9 as L,oa as F,ob as M,oc as U,od as W,oe as B,of as j,og as z,oh as G,oi as H,oj as k,ok as q,ol as Q,om as u,on as X,oo as Y,op as Z,oq as J,or as K,os as ee,ot as te,ou as se}from"./index-3572d442.js";function ae(t){const e=new y,{vertex:s,fragment:a}=e;return $(s,t),e.include(A,t),e.attributes.add(p.POSITION,"vec3"),e.attributes.add(p.UV0,"vec2"),t.perspectiveInterpolation&&e.attributes.add(p.PERSPECTIVEDIVIDE,"float"),e.varyings.add("vpos","vec3"),t.multipassEnabled&&e.varyings.add("depth","float"),s.code.add(c`
    void main(void) {
      vpos = position;
      ${t.multipassEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
      vTexCoord = uv0;
      gl_Position = transformPosition(proj, view, vpos);

      ${t.perspectiveInterpolation?"gl_Position *= perspectiveDivide;":""}
    }
  `),e.include(I,t),e.include(O,t),a.uniforms.add(new S("tex",l=>l.texture),new b("opacity",l=>l.opacity)),e.varyings.add("vTexCoord","vec2"),t.output===n.Alpha?a.code.add(c`
    void main() {
      discardBySlice(vpos);
      ${t.multipassEnabled?"terrainDepthTest(depth);":""}

      float alpha = texture(tex, vTexCoord).a * opacity;
      if (alpha  < ${c.float(m)}) {
        discard;
      }

      fragColor = vec4(alpha);
    }
    `):(a.include(C),a.code.add(c`
    void main() {
      discardBySlice(vpos);
      ${t.multipassEnabled?"terrainDepthTest(depth);":""}
      fragColor = texture(tex, vTexCoord) * opacity;

      if (fragColor.a < ${c.float(m)}) {
        discard;
      }

      fragColor = highlightSlice(fragColor, vpos);
      ${t.transparencyPassType===d.Color?"fragColor = premultiplyAlpha(fragColor);":""}
    }
    `)),e}const ie=Object.freeze(Object.defineProperty({__proto__:null,build:ae},Symbol.toStringTag,{value:"Module"}));class _ extends R{initializeProgram(e){return new V(e.rctx,_.shader.get().build(this.configuration),T)}_setPipelineState(e,s){const a=this.configuration,l=e===d.NONE,h=e===d.FrontFace;return L({blending:a.output!==n.Color&&a.output!==n.Alpha||!a.transparent?null:l?oe:F(e),culling:M(a.cullFace),depthTest:{func:U(e)},depthWrite:l?a.writeDepth?W:null:B(e),colorWrite:j,stencilWrite:a.hasOccludees?z:null,stencilTest:a.hasOccludees?s?G:H:null,polygonOffset:l||h?null:k(a.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._setPipelineState(this.configuration.transparencyPassType,!0),this._setPipelineState(this.configuration.transparencyPassType,!1)}getPipeline(e){return e?this._occludeePipelineState:super.getPipeline()}}_.shader=new D(ie,()=>w(()=>import("./ImageMaterial.glsl-fc4be1ad.js"),["assets/ImageMaterial.glsl-fc4be1ad.js","assets/index-3572d442.js","assets/index-0320859f.css"]));const oe=x(E.ONE,E.ONE_MINUS_SRC_ALPHA);class i extends N{constructor(){super(...arguments),this.output=n.Color,this.cullFace=P.None,this.hasSlicePlane=!1,this.transparent=!1,this.enableOffset=!0,this.writeDepth=!0,this.hasOccludees=!1,this.transparencyPassType=d.NONE,this.multipassEnabled=!1,this.cullAboveGround=!1,this.perspectiveInterpolation=!0}}o([r({count:n.COUNT})],i.prototype,"output",void 0),o([r({count:P.COUNT})],i.prototype,"cullFace",void 0),o([r()],i.prototype,"hasSlicePlane",void 0),o([r()],i.prototype,"transparent",void 0),o([r()],i.prototype,"enableOffset",void 0),o([r()],i.prototype,"writeDepth",void 0),o([r()],i.prototype,"hasOccludees",void 0),o([r({count:d.COUNT})],i.prototype,"transparencyPassType",void 0),o([r()],i.prototype,"multipassEnabled",void 0),o([r()],i.prototype,"cullAboveGround",void 0),o([r()],i.prototype,"perspectiveInterpolation",void 0),o([r({constValue:!1})],i.prototype,"occlusionPass",void 0);const T=new Map([[p.POSITION,0],[p.UV0,2],[p.PERSPECTIVEDIVIDE,3]]);let ce=class extends q{constructor(e){super(e,new le),this.supportsEdges=!0,this._vertexAttributeLocations=T,this._configuration=new i}getConfiguration(e,s){return this._configuration.output=e,this._configuration.cullFace=this.parameters.cullFace,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.transparencyPassType=s.transparencyPassType,this._configuration.enableOffset=s.camera.relativeElevation<Q,this._configuration.multipassEnabled=s.multipassEnabled,this._configuration.cullAboveGround=s.multipassTerrain.cullAboveGround,this._configuration.perspectiveInterpolation=this.parameters.perspectiveInterpolation,this._configuration}produces(e,s){return s===n.Color||s===n.Alpha||s===n.Highlight?e===u.DRAPED_MATERIAL?!0:s===n.Highlight?e===u.OPAQUE_MATERIAL:e===(this.parameters.transparent?this.parameters.writeDepth?u.TRANSPARENT_MATERIAL:u.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL:u.OPAQUE_MATERIAL):!1}createGLMaterial(e){return new re(e)}createBufferWriter(){const e=X.clone();return this.parameters.perspectiveInterpolation&&e.f32(p.PERSPECTIVEDIVIDE),new ne(e)}};class re extends Y{constructor(e){super({...e,...e.material.parameters})}_updateParameters(e){return this.updateTexture(this._material.parameters.textureId),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(_,e)}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&(this._material.setParameters({hasOccludees:e.hasOccludees}),this._updateParameters(e))}beginSlot(e){return this._output!==n.Color&&this._output!==n.Alpha||this._updateOccludeeState(e),this._updateParameters(e)}}class ne extends Z{write(e,s,a,l,h){for(const f of this.vertexBufferLayout.fields.keys()){const g=a.attributes.get(f);if(g)if(f===p.PERSPECTIVEDIVIDE){J(g.size===1);const v=l.getField(f,K);v&&ee(g,v,h)}else te(f,g,e,s,l,h)}}}class le extends se{constructor(){super(...arguments),this.transparent=!1,this.writeDepth=!0,this.hasSlicePlane=!1,this.cullFace=P.None,this.hasOccludees=!1,this.opacity=1,this.textureId=null,this.initTextureTransparent=!0,this.perspectiveInterpolation=!1}}export{ce as g,ae as v};
