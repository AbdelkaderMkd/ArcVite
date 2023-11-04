import{fr as rt,pg as it,aC as L,aD as W,iV as Ee,aZ as nt,kb as ve,lM as Me,aF as at,fG as ot,kz as q,rb as qe,bD as ct,ra as se,nT as dt,nU as lt,fW as re,nW as Pe,sw as Re,n_ as ut,o5 as gt,f2 as ht,o7 as pt,o8 as ft,sY as mt,o9 as bt,u2 as _t,jC as J,jN as $t,of as Tt,u3 as wt,ok as Ot,u4 as It,op as Ct,on as At,n$ as Et,om as vt,sF as Mt,km as $,kp as Ne,l3 as Pt,sM as ce,dN as Rt,pd as l,dV as R,d$ as ze,dU as N,dw as ie,e3 as m,e2 as p,u5 as $e,rq as X,pQ as Xe,rt as z,u6 as Ye,e1 as D,dZ as E,fy as y,d_ as O,ro as Nt,u7 as yt,u8 as pe,u9 as St,ua as Ut,m6 as Lt,ub as Ze,dB as xt,kw as Vt,pq as Je,dn as kt,uc as Wt,ri as Qe,ud as fe,qV as ye,rm as Dt,tU as Ht,b2 as jt,ky as B,pP as Q,kr as K,aR as Te,aB as we,oJ as Ke,b6 as v,nB as x,sS as _,de as ne,sW as Se,ue as Ue,jg as ge,je as Le,qW as xe,uf as Ve,ug as ke,uh as Gt,nz as P,nP as Ft,fV as Bt,fX as We}from"./index-3572d442.js";import{M as qt,$ as Oe,e as b,O as et,D as zt}from"./manipulatorUtils-37b2e00d.js";import{g as Xt}from"./ImageMaterial-3a848040.js";import{j as F}from"./persistable-5593d627.js";import{u as Yt,r as Zt}from"./LineVisualElement-19114e99.js";import{a as Jt}from"./Object3DVisualElement-8f3bdc79.js";let I=class extends rt(ot){constructor(t){super(t),this.type="plane",this.position=null,this.heading=0,this.tilt=0,this.width=10,this.height=10}equals(t){return this.heading===t.heading&&this.tilt===t.tilt&&it(this.position,t.position)&&this.width===t.width&&this.height===t.height}};L([W({readOnly:!0,json:{read:!1,write:!0}})],I.prototype,"type",void 0),L([W({type:nt}),F()],I.prototype,"position",void 0),L([W({type:Number,nonNullable:!0,range:{min:0,max:360}}),F(),Ee(e=>ve.normalize(Me(e),0,!0))],I.prototype,"heading",void 0),L([W({type:Number,nonNullable:!0,range:{min:0,max:360}}),F(),Ee(e=>ve.normalize(Me(e),0,!0))],I.prototype,"tilt",void 0),L([W({type:Number,nonNullable:!0}),F()],I.prototype,"width",void 0),L([W({type:Number,nonNullable:!0}),F()],I.prototype,"height",void 0),I=L([at("esri.analysis.SlicePlane")],I);const Qt=I,Kt=q(0,0,0,.04);function es({accentColor:e}){return qe(e,.5)}function ts({accentColor:e}){return qe(e,.7)}const ks=ct("mac")?"Meta":"Control",Ws="Shift",ss=2,rs=1.15,is=1.15,Ds=2500,Hs=.02,ns=Math.cos(se(45)),De=Math.cos(se(5)),js=.95,Gs=.3,Fs=2,as=1,os=3,tt=11,me=22.5,te=40,He=48,cs=2.25,ds=4,je=1,ls=.3,us=6,gs=4,Ge=1600,hs=.4;function ps(e){const t=new dt,{vertex:a,fragment:r,attributes:i,varyings:n}=t;return lt(a,e),i.add(re.POSITION,"vec3"),i.add(re.UV0,"vec2"),n.add("vUV","vec2"),a.code.add(Pe`void main(void) {
vUV = uv0;
gl_Position = proj * view * vec4(position, 1.0);
}`),r.uniforms.add(new Re("backgroundColor",s=>s.backgroundColor),new Re("gridColor",s=>s.gridColor),new ut("gridWidth",s=>s.gridWidth)),r.code.add(Pe`void main() {
const float LINE_WIDTH = 1.0;
vec2 uvScaled = vUV * gridWidth;
vec2 gridUV = (fract(uvScaled + 0.5) - 0.5) / (LINE_WIDTH * fwidth(uvScaled));
vec2 grid = (1.0 - step(0.5, gridUV)) * step(-0.5, gridUV);
grid.x *= step(0.5, uvScaled.x) * step(uvScaled.x, gridWidth - 0.5);
grid.y *= step(0.5, uvScaled.y) * step(uvScaled.y, gridWidth - 0.5);
float gridFade = max(grid.x, grid.y);
float gridAlpha = gridColor.a * gridFade;
fragColor =
vec4(backgroundColor.rgb * backgroundColor.a, backgroundColor.a) * (1.0 - gridAlpha) +
vec4(gridColor.rgb, 1.0) * gridAlpha;
}`),t}const fs=Object.freeze(Object.defineProperty({__proto__:null,build:ps},Symbol.toStringTag,{value:"Module"}));class ms extends wt{constructor(){super(...arguments),this.backgroundColor=q(1,0,0,.5),this.gridColor=q(0,1,0,.5),this.gridWidth=4}}class de extends pt{initializeProgram(t){return new ft(t.rctx,de.shader.get().build(this.configuration),mt)}initializePipeline(){return bt({blending:_t(J.ONE,J.ONE,J.ONE_MINUS_SRC_ALPHA,J.ONE_MINUS_SRC_ALPHA),depthTest:{func:$t.LESS},colorWrite:Tt})}}de.shader=new gt(fs,()=>ht(()=>import("./SlicePlaneMaterial.glsl-6436f4d2.js"),["assets/SlicePlaneMaterial.glsl-6436f4d2.js","assets/index-3572d442.js","assets/index-0320859f.css","assets/manipulatorUtils-37b2e00d.js","assets/ImageMaterial-3a848040.js","assets/persistable-5593d627.js","assets/resourceExtension-7f55cdd7.js","assets/LineVisualElement-19114e99.js","assets/Object3DVisualElement-8f3bdc79.js"]));let bs=class extends Ot{constructor(t){super(t,new $s),this._configuration=new It}createBufferWriter(){return new Ct(At)}produces(t,a){return a===Et.Color&&t===vt.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL}createGLMaterial(t){return new _s(t)}getConfiguration(){return this._configuration}};class _s extends Mt{constructor(t){super(t),this.ensureTechnique(de,null)}beginSlot(){return this.technique}}class $s extends ms{constructor(){super(...arguments),this.renderOccluded=$.Occlude,this.isDecoration=!1}}class Ts extends Jt{constructor(t){super(t),this._material=null,this._renderOccluded=$.OccludeAndTransparent,this._gridWidth=1,this._gridColor=q(1,0,0,1),this._backgroundColor=q(1,0,0,1),this.applyProperties(t)}get renderOccluded(){return this._renderOccluded}set renderOccluded(t){t!==this._renderOccluded&&(this._renderOccluded=t,this._updateMaterial())}get gridWidth(){return this._gridWidth}set gridWidth(t){this._gridWidth!==t&&(this._gridWidth=t,this._updateMaterial())}get gridColor(){return this._gridColor}set gridColor(t){Ne(this._gridColor,t),this._updateMaterial()}get backgroundColor(){return this._backgroundColor}set backgroundColor(t){Ne(this._backgroundColor,t),this._updateMaterial()}createExternalResources(){this._material=new bs(this._materialParameters)}destroyExternalResources(){this._material=null}forEachExternalMaterial(t){this._material!=null&&t(this._material)}createGeometries(t){if(this._material!=null){const a=Pt(this._material);t.addGeometry(a)}}get _materialParameters(){return{backgroundColor:this._backgroundColor,gridWidth:this._gridWidth,gridColor:this._gridColor,renderOccluded:this._renderOccluded,isDecoration:this.isDecoration}}_updateMaterial(){this._material!=null&&this._material.setParameters(this._materialParameters)}}function qs(e,t,a,r,i,n,s,o){return ws(t,s.worldUpAtPosition(e,l.get()),i,n,o.basis1,o.basis2),p(o.basis1,o.basis1,a),p(o.basis2,o.basis2,r),R(o.origin,e),Ye(o.basis2,o.basis1,o.origin,o.plane),o}function ws(e,t,a,r,i,n){const s=D(e,t),o=l.get(),u=l.get();switch(r===M.HORIZONTAL_OR_VERTICAL?Math.abs(s)>ns?M.HORIZONTAL:M.VERTICAL:r){case M.VERTICAL:{const c=Math.abs(s)<=De?e:a.viewUp;E(o,c,t),R(u,t);break}case M.HORIZONTAL:E(o,a.viewUp,t),E(u,t,o);break;case M.TILTED:{const c=Math.abs(s)<=De?t:a.viewUp;E(o,c,e),E(u,e,o);break}}const d=E(l.get(),o,u);D(d,a.viewForward)>0&&p(u,u,-1),y(i,o),y(n,u)}function Os(e,t,a){const r=t.worldUpAtPosition(e.origin,l.get()),i=e.basis1,n=Ae(e,r),s=Math.round(n/H)*H;return fe(e,s-n,i,a)}function zs(e,t,a,r,i,n){const s=R(l.get(),i.origin);m(s,s,p(l.get(),i.basis1,e.direction[0]<0?1:-1)),m(s,s,p(l.get(),i.basis2,e.direction[1]<0?1:-1));const o=N(i.basis1),u=N(i.basis2),d=O(l.get(),a,s),c=O(l.get(),t,s);let g=0,h=0;if(Ce(e)){const le=be(i),j=be(n);g=o-.5*e.direction[0]*D(i.basis1,c)/o,h=u-.5*e.direction[1]*D(i.basis2,c)/u;const Y=j/le;g*=Y,h*=Y}const f=g+.5*e.direction[0]*D(i.basis1,d)/o,w=h+.5*e.direction[1]*D(i.basis2,d)/u,V=p(l.get(),i.basis1,f/o),S=p(l.get(),i.basis2,w/u);(f<=0||Fe(n.origin,V,r)<=Ge)&&R(V,n.basis1),(w<=0||Fe(n.origin,S,r)<=Ge)&&R(S,n.basis2);const T=R(l.get(),s);return m(T,T,p(l.get(),V,e.direction[0]<0?-1:1)),m(T,T,p(l.get(),S,e.direction[1]<0?-1:1)),Nt(T,V,S,n)}function Xs(e,t){return hs*Math.min(t.width,t.height)*t.computeRenderPixelSizeAt(e)}function Ys(e,t,a,r){const i=E(l.get(),t,a);return E(i,i,t),ze(e,i,r)}function Zs(e,t){return qt(e.basis1,e.basis2,e.origin,t)}function Js(e,t,a,r){const i=t.worldUpAtPosition(e.origin,l.get()),n=l.get();switch(a){case ae.HEADING:R(n,i);break;case ae.TILT:R(n,e.basis1)}return ze(e.origin,n,r)}function Qs(e,t,a,r){const i=Ie(a,C.NEGATIVE_X),n=X.get();yt(n,t,i.edge*Math.PI/2);const s=y(l.get(),i.basis);let o=p(l.get(),s,i.direction*r.computeScreenPixelSizeAt(i.position)*te);m(o,o,i.position);const u=r.projectToRenderScreen(o,pe(l.get())),d=Is(r,u);St(r,u,ee),y(ee.direction,ee.direction);const c=l.get();!d&&Ut(a,ee,c)&&(o=c),n[12]=0,n[13]=0,n[14]=0,e.modelTransform=n,e.renderLocation=Lt(o),d?e.state|=oe:e.state&=~oe}function Is(e,t){const[a,r,i,n]=e.viewport,s=Math.min(i,n)/16;let o=!0;return t[0]<a+s?(t[0]=a+s,o=!1):t[0]>a+i-s&&(t[0]=a+i-s,o=!1),t[1]<r+s?(t[1]=r+s,o=!1):t[1]>r+n-s&&(t[1]=r+n-s,o=!1),o}function Ks(e,t,a,r){const i=N(r.basis1),n=N(r.basis2),s=st(r),o=be(r),u=ie(l.get(),0,0,0);m(u,p(l.get(),r.basis1,t.direction[0]),p(l.get(),r.basis2,t.direction[1])),m(u,r.origin,u);let d=0,c=1;if(Ce(t))t.direction[0]===1&&t.direction[1]===-1?d=H:t.direction[0]===1&&t.direction[1]===1?d=Math.PI:t.direction[0]===-1&&t.direction[1]===1&&(d=3*Math.PI/2),c=o;else{const h=t.direction[0]!==0?1:2;d=h===1?H:0,c=(h===1?n:i)-s}const g=$e(X.get(),d);Xe(g,g,ie(l.get(),c,c,c)),z(g,a,g),g[12]=0,g[13]=0,g[14]=0,e.modelTransform=g,e.renderLocation=u}function er(e,t,a,r){const i=r.worldUpAtPosition(a.origin,l.get()),n=Ie(a,C.POSITIVE_X),s=$e(X.get(),n.edge*Math.PI/2);Ze(s,s,-Ae(a,i)),z(s,t,s),s[12]=0,s[13]=0,s[14]=0,e.modelTransform=s,e.renderLocation=n.position}function tr(e,t,a){const r=Ie(a,C.POSITIVE_Y),i=$e(X.get(),r.edge*Math.PI/2);Ze(i,i,H),z(i,t,i),i[12]=0,i[13]=0,i[14]=0,e.modelTransform=i,e.renderLocation=r.position}var C;function Ie(e,t){switch(t){case C.POSITIVE_X:return{basis:e.basis1,direction:1,position:m(l.get(),e.origin,e.basis1),edge:t};case C.POSITIVE_Y:return{basis:e.basis2,direction:1,position:m(l.get(),e.origin,e.basis2),edge:t};case C.NEGATIVE_X:return{basis:e.basis1,direction:-1,position:O(l.get(),e.origin,e.basis1),edge:t};case C.NEGATIVE_Y:return{basis:e.basis2,direction:-1,position:O(l.get(),e.origin,e.basis2),edge:t}}}function Fe(e,t,a){const r=a.projectToRenderScreen(m(l.get(),e,t),pe(l.get())),i=a.projectToRenderScreen(O(l.get(),e,t),pe(l.get()));return xt(O(r,r,i))}function st(e){const t=N(e.basis1),a=N(e.basis2);return ls*Math.min(t,a)}function be(e){return st(e)}function Ce(e){return e.direction[0]!==0&&e.direction[1]!==0}function sr(e){const t=[[-1,-1,0],[1,-1,0],[1,1,0],[-1,1,0],[-1,-1,0]];return new Yt({view:e,attached:!1,color:ts(e.effectiveTheme),width:as,renderOccluded:$.OccludeAndTransparent,geometry:[t],isDecoration:!0})}function rr(e){return new Ts({view:e,attached:!1,backgroundColor:Kt,gridColor:es(e.effectiveTheme),gridWidth:4,renderOccluded:$.OccludeAndTransparent,isDecoration:!0})}function ir(e,t,a,r=new Qt){if(e==null)return null;const{renderCoordsHelper:i}=t,n=i.fromRenderCoords(e.origin,t.spatialReference);if(n==null)return null;const s=Vt(n,a);if(s==null)return null;r.position=s;const o=2*N(e.basis1),u=2*N(e.basis2),d=Je.renderUnitScaleFactor(t.spatialReference,a);r.width=o*d,r.height=u*d;const c=i.worldUpAtPosition(e.origin,l.get());return r.tilt=kt(Ae(e,c)),r.heading=i.headingAtPosition(e.origin,e.basis1)-90,r}function Ae(e,t){return Wt(t,e.basis2,e.basis1)+H}function Cs(e,t,a,r,i,n,s=Qe()){return n.toRenderCoords(e,s.origin)?(n.worldBasisAtPosition(s.origin,ye.X,s.basis1),n.worldBasisAtPosition(s.origin,ye.Y,s.basis2),Ye(s.basis2,s.basis1,s.origin,s.plane),fe(s,-se(t),Dt(s),s),fe(s,se(a),s.basis1,s),p(s.basis1,s.basis1,r/2),p(s.basis2,s.basis2,i/2),Ht(s),s):(jt.getLogger("esri.views.3d.analysis.Slice.sliceToolUtils").error(`Failed to project slice plane position, projection from ${e.spatialReference.wkid} is not supported`),null)}function nr(e,t){if((e==null?void 0:e.position)==null)return null;const a=Zt(e.position,t.spatialReference,t.elevationProvider);if(a==null)return null;const r=Je.renderUnitScaleFactor(e.position.spatialReference,t.spatialReference),i=e.width*r,n=e.height*r;return{position:a,heading:e.heading,tilt:e.tilt,renderWidth:i,renderHeight:n}}function ar(e,t,a,r=Qe()){if(e==null)return null;const i=Cs(e.position,e.heading,e.tilt,e.renderWidth,e.renderHeight,t.renderCoordsHelper,r);return a.tiltEnabled||i==null||Os(i,t.renderCoordsHelper,i),i}(function(e){e[e.POSITIVE_X=0]="POSITIVE_X",e[e.POSITIVE_Y=1]="POSITIVE_Y",e[e.NEGATIVE_X=2]="NEGATIVE_X",e[e.NEGATIVE_Y=3]="NEGATIVE_Y"})(C||(C={}));const A=ce.Custom1;var ae,M;(function(e){e[e.HEADING=1]="HEADING",e[e.TILT=2]="TILT"})(ae||(ae={})),function(e){e[e.HORIZONTAL_OR_VERTICAL=0]="HORIZONTAL_OR_VERTICAL",e[e.HORIZONTAL=1]="HORIZONTAL",e[e.VERTICAL=2]="VERTICAL",e[e.TILTED=3]="TILTED"}(M||(M={}));const oe=ce.Custom2,ee=Rt(),H=Math.PI/2,he=ce.Custom1,As=ce.Custom2;function or(e){return(e.type==="building-scene-3d"?e:null)!=null}var _e;(function(e){e[e.CENTER_ON_CALLOUT=0]="CENTER_ON_CALLOUT",e[e.CENTER_ON_ARROW=1]="CENTER_ON_ARROW"})(_e||(_e={}));class cr extends Oe{constructor(t,a){const r=new B({width:1,renderOccluded:$.OccludeAndTransparent,isDecoration:!0}),i=new Q({cullFace:K.Back,renderOccluded:$.Opaque,isDecoration:!0}),n=new Q({cullFace:K.Back,renderOccluded:$.Opaque,isDecoration:!0}),s=new Q({cullFace:K.Back,renderOccluded:$.Opaque,isDecoration:!0}),o=new Q({writeDepth:!1,cullFace:K.Front,renderOccluded:$.Transparent,isDecoration:!0});super({view:t,...Es({offsetMode:a,tubeMaterial:i,tipMaterial:n,capMaterial:s,outlineMaterial:o,calloutMaterial:r})}),this._themeHandle=Te(()=>t.effectiveTheme.accentColor,u=>{const d=Ke(u),c=v.toUnitRGBA(u),g=v.toUnitRGBA(d),h=v.toUnitRGBA(v.blendColors(d,u,.4)),f=v.toUnitRGBA(v.blendColors(d,u,.14));r.setParameters({color:c}),i.setParameters({color:f}),n.setParameters({color:g}),s.setParameters({color:h}),o.setParameters({color:c})},we)}destroy(){this._themeHandle.remove(),super.destroy()}}function Es({offsetMode:e,tubeMaterial:t,tipMaterial:a,capMaterial:r,outlineMaterial:i,calloutMaterial:n}){const s=e===_e.CENTER_ON_CALLOUT?te:0,o=[P(s,0,-He/2),P(s,0,He/2)],u=Ms(o,!0),d=Be({vertices:o,padding:0,materials:{tube:t,tip:a,cap:r}}),c=Be({vertices:o,padding:cs,materials:{tube:i,tip:i,cap:i}}),g=x(n,[[s,0,0],[s-te,0,0]]),h=x(n,[[s,0,0],[s-te,0,0]]);return{renderObjects:[...d.normal.map(f=>new b(f,_.Unfocused|A)),...c.normal.map(f=>new b(f,_.Unfocused|A)),new b(g,_.Unfocused|A|oe),...d.focused.map(f=>new b(f,_.Focused|A)),...c.focused.map(f=>new b(f,_.Focused|A)),new b(h,_.Focused|A|oe)],autoScaleRenderObjects:!1,collisionType:{type:"line",paths:[u]},collisionPriority:1,radius:tt,state:A}}function Be({vertices:e,padding:t,materials:a}){const r=i=>{const n=e.slice(0),s=O(l.get(),n[0],n[1]);y(s,s);const o=O(l.get(),n[n.length-1],n[n.length-2]);if(y(o,o),t>0){const G=p(ne(),o,-t);n[n.length-1]=m(G,G,n[n.length-1]);const k=p(ne(),s,-t);n[0]=m(k,k,n[0])}const u=i?is:1,d=me*u,c=tt*u,g=Se(X.get());if(t>0){const G=d/4,k=ie(l.get(),0,G,0),Z=1+t/G;Ue(g,g,k),Xe(g,g,ie(l.get(),Z,Z,Z)),Ue(g,g,p(k,k,-1/Z))}const h=Se(ge()),f=P(0,1,0),w=Le(ge(),xe(Ve.get(),f,o));w[12]=n[n.length-1][0],w[13]=n[n.length-1][1],w[14]=n[n.length-1][2],z(w,w,g);const V=a.tube,S=vs(os*(i?rs:1)+t,n,V);S.transformation=h;const T=[S],le=a.tip,j=ke(le,d,c,24,!1,!1,!0);j.transformation=w,T.push(j);const Y=a.cap,ue=ke(Y,d,c,24,!1,!0,!1);ue.transformation=w,T.push(ue);const U=Le(ge(),xe(Ve.get(),f,s));return U[12]=n[0][0],U[13]=n[0][1],U[14]=n[0][2],z(U,U,g),T.push(j.instantiate({transformation:U})),T.push(ue.instantiate({transformation:U})),T};return{normal:r(!1),focused:r(!0)}}function vs(e,t,a){const r=[];for(let n=0;n<12;n++){const s=n/12*2*Math.PI;r.push([Math.cos(s)*e,Math.sin(s)*e])}return Gt(a,r,t,[],[],!1)}function Ms(e,t){const a=O(ne(),e[e.length-1],e[e.length-2]);if(y(a,a),p(a,a,me),m(a,a,e[e.length-1]),t){const r=O(ne(),e[0],e[1]);return y(r,r),p(r,r,me),m(r,r,e[0]),[r,...e,a]}return[...e,a]}class dr extends Oe{constructor(t,a){const r=new Xt({transparent:!0,writeDepth:!1,renderOccluded:$.Opaque,isDecoration:!0}),i=et.calloutWidth,n=new B({width:i,renderOccluded:$.OccludeAndTransparent,isDecoration:!0});super({view:t,...Ps({imageMaterial:r,calloutMaterial:n})}),this._currentTexture=null,this._themeHandle=Te(()=>t.effectiveTheme.accentColor,s=>{const o=Ft(s,.5),u=Ke(s),d=this._currentTexture,c=a(o,u);r.setParameters({textureId:c.texture.id}),n.setParameters({color:v.toUnitRGBA(s)}),this._currentTexture=c,d==null||d.release()},we)}destroy(){var t;this._themeHandle.remove(),(t=this._currentTexture)==null||t.release(),super.destroy()}}function Ps({imageMaterial:e,calloutMaterial:t}){const{focusMultiplier:a,calloutLength:r,discRadius:i}=et,n=i*a,s=(c,g)=>{const h=[0,1,2,2,3,0];return new Bt(g,[[re.POSITION,new We([r-c,-c,0,r+c,-c,0,r+c,c,0,r-c,c,0],h,3,!0)],[re.UV0,new We([0,0,1,0,1,1,0,1],h,2,!0)]])},o=x(t,[[0,0,0],[r-i,0,0]]),u=x(t,[[0,0,0],[r-n,0,0]]),d=A;return{autoScaleRenderObjects:!1,collisionPriority:1,collisionType:{type:"disc",direction:[0,0,1],offset:[r,0,0]},focusMultiplier:a,radius:i,renderObjects:[new b(s(i,e),_.Unfocused|d),new b(o,_.Unfocused|d),new b(s(n,e),_.Focused|d),new b(u,_.Focused|d)],state:d}}class lr extends Oe{constructor(t,a){const r=Ce(a),i=r?ds:je,n=i*ss,s=je,o={renderOccluded:$.OccludeAndTransparent,isDecoration:!0},u=new B({...o,width:i}),d=new B({...o,width:n}),c=new B({...o,width:s});super({view:t,...zt,...Rs({isCorner:r,unfocusedMaterial:u,focusedMaterial:d,outlineMaterial:c})}),this._themeHandle=Te(()=>t.effectiveTheme.accentColor,g=>{const h=v.toUnitRGBA(g);u.setParameters({color:h}),d.setParameters({color:h}),c.setParameters({color:h})},we)}destroy(){this._themeHandle.remove(),super.destroy()}}function Rs({isCorner:e,unfocusedMaterial:t,focusedMaterial:a,outlineMaterial:r}){const i=e?[P(1,0,0),P(0,0,0),P(0,1,0)]:[P(1,0,0),P(-1,0,0)];return{renderObjects:[new b(x(t,i),_.Unfocused|he),new b(x(a,i),_.Focused|he),new b(x(r,i),As)],collisionType:{type:"line",paths:[i]},radius:e?us:gs,state:he}}export{rr as A,oe as B,ae as C,Ce as D,sr as E,be as F,As as G,_e as H,cr as I,Fs as M,he as N,nr as P,or as U,A as V,M as _,lr as a,ks as b,Js as c,qs as d,Zs as e,er as f,dr as g,Qt as h,tr as i,ir as j,Ks as k,Qs as l,Ds as m,ts as n,zs as o,Gs as p,Kt as q,Ws as r,Xs as s,ps as t,Ys as u,ar as v,js as w,Hs as x,es as y,as as z};