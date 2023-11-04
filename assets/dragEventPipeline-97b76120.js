import{aO as A,aC as u,aJ as R,nv as f,bZ as C,b2 as T,aD as h,aF as F,as as z,dT as g,nw as O,eL as E,aZ as G,aU as P,nx as D,m6 as I,g9 as _,di as $,cA as U,b1 as W}from"./index-3572d442.js";import{r as M}from"./drawUtils-55d69bda.js";var v;(function(a){a[a.WhenToolEditable=0]="WhenToolEditable",a[a.WhenToolNotEditable=1]="WhenToolNotEditable",a[a.Always=2]="Always"})(v||(v={}));class q{constructor(){this._isToolEditable=!0,this._manipulators=new A,this._resourceContexts={manipulator3D:{}},this._attached=!1}set isToolEditable(t){this._isToolEditable=t}get length(){return this._manipulators.length}add(t,e=v.WhenToolEditable){this.addMany([t],e)}addMany(t,e=v.WhenToolEditable){for(const n of t){const i={manipulator:n,visibilityPredicate:e,attached:!1};this._manipulators.add(i),this._attached&&this._updateManipulatorAttachment(i)}}remove(t){for(let e=0;e<this._manipulators.length;e++)if(this._manipulators.at(e).manipulator===t){const n=this._manipulators.splice(e,1)[0];this._detachManipulator(n);break}}removeAll(){this._manipulators.forEach(t=>{this._detachManipulator(t)}),this._manipulators.removeAll()}attach(){this._manipulators.forEach(t=>{this._updateManipulatorAttachment(t)}),this._attached=!0}detach(){this._manipulators.forEach(t=>{this._detachManipulator(t)}),this._attached=!1}destroy(){this.detach(),this._manipulators.forEach(({manipulator:t})=>t.destroy()),this._manipulators.destroy(),this._resourceContexts=null}on(t,e){return this._manipulators.on(t,n=>{e(n)})}forEach(t){for(const e of this._manipulators.items)t(e)}some(t){return this._manipulators.items.some(t)}toArray(){const t=[];return this.forEach(e=>t.push(e.manipulator)),t}intersect(t,e){let n=null,i=Number.MAX_VALUE;return this._manipulators.forEach(({manipulator:r,attached:l})=>{if(!l||!r.interactive)return;const o=r.intersectionDistance(t,e);o!=null&&o<i&&(i=o,n=r)}),n}_updateManipulatorAttachment(t){this._isManipulatorItemVisible(t)?this._attachManipulator(t):this._detachManipulator(t)}_attachManipulator(t){t.attached||(t.manipulator.attach&&t.manipulator.attach(this._resourceContexts),t.attached=!0)}_detachManipulator(t){if(!t.attached)return;const e=t.manipulator;e.grabbing=!1,e.dragging=!1,e.hovering=!1,e.selected=!1,e.detach&&e.detach(this._resourceContexts),t.attached=!1}_isManipulatorItemVisible(t){return t.visibilityPredicate===v.Always||(this._isToolEditable?t.visibilityPredicate===v.WhenToolEditable:t.visibilityPredicate===v.WhenToolNotEditable)}}let s=class extends R{constructor(t){super(t),this.manipulators=new q,this.automaticManipulatorSelection=!0,this.hasGrabbedManipulators=!1,this.hasHoveredManipulators=!1,this.firstGrabbedManipulator=null,this.created=!1,this.removeIncompleteOnCancel=!0,this._editableFlags=new Map([[f.MANAGER,!0],[f.USER,!0]]),this._creationFinishedResolver=C()}get active(){return this.view!=null&&this.view.activeTool===this}set visible(t){this._get("visible")!==t&&(this._set("visible",t),this._syncVisible())}get editable(){return this.getEditableFlag(f.USER)}set editable(t){this.setEditableFlag(f.USER,t)}get updating(){return!1}get cursor(){return null}get hasFocusedManipulators(){return this.hasGrabbedManipulators||this.hasHoveredManipulators}destroy(){this.manipulators.destroy(),this._set("view",null)}onAdd(){this._syncVisible()}activate(){this.view!=null?(this.view.focus(),this.onActivate()):T.getLogger(this).error("Can't activate tool if view is not defined.")}deactivate(){this.onDeactivate()}handleInputEvent(t){this.onInputEvent(t)}handleInputEventAfter(t){this.onInputEventAfter(t)}setEditableFlag(t,e){this._editableFlags.set(t,e),this.manipulators.isToolEditable=this.internallyEditable,this._updateManipulatorAttachment(),t===f.USER&&this.notifyChange("editable"),this.onEditableChange(),this.onManipulatorSelectionChanged()}getEditableFlag(t){return this._editableFlags.get(t)??!1}whenCreated(){return this._creationFinishedResolver.promise}onManipulatorSelectionChanged(){}onActivate(){}onDeactivate(){}onShow(){}onHide(){}onEditableChange(){}onInputEvent(t){}onInputEventAfter(t){}get internallyEditable(){return this.getEditableFlag(f.USER)&&this.getEditableFlag(f.MANAGER)}finishToolCreation(){this.created||this._creationFinishedResolver.resolve(this),this._set("created",!0)}_syncVisible(){if(this.initialized){if(this.visible)this._show();else if(this._hide(),this.active)return void(this.view.activeTool=null)}}_show(){this._updateManipulatorAttachment(),this.onShow()}_hide(){this._updateManipulatorAttachment(),this.onHide()}_updateManipulatorAttachment(){this.visible?this.manipulators.attach():this.manipulators.detach()}};u([h({constructOnly:!0})],s.prototype,"view",void 0),u([h({readOnly:!0})],s.prototype,"active",null),u([h({value:!0})],s.prototype,"visible",null),u([h({value:!0})],s.prototype,"editable",null),u([h({readOnly:!0})],s.prototype,"manipulators",void 0),u([h({readOnly:!0})],s.prototype,"updating",null),u([h()],s.prototype,"cursor",null),u([h({readOnly:!0})],s.prototype,"automaticManipulatorSelection",void 0),u([h()],s.prototype,"hasFocusedManipulators",null),u([h()],s.prototype,"hasGrabbedManipulators",void 0),u([h()],s.prototype,"hasHoveredManipulators",void 0),u([h()],s.prototype,"firstGrabbedManipulator",void 0),u([h({readOnly:!0})],s.prototype,"created",void 0),u([h({readOnly:!0})],s.prototype,"removeIncompleteOnCancel",void 0),s=u([F("esri.views.interactive.InteractiveToolBase")],s);function V(a,t){let e=null,n=null;return i=>{if(i.action==="cancel")return void(n!=null&&(n.execute({action:"cancel"}),e=null,n=null));const r={action:i.action,screenStart:i.start,screenEnd:i.screenPoint};i.action==="start"&&e==null&&(e=new y,n=new y,t(a,e,n,i.pointerType,r)),e!=null&&e.execute(r),i.action==="end"&&e!=null&&(e=null,n=null)}}function Q(a,t){return a.events.on("drag",V(a,t))}function tt(a,t){const e=[a.x,a.y,a.z??0],n=t,i=[Math.cos(n),Math.sin(n)],r=Math.sqrt(i[0]*i[0]+i[1]*i[1]);if(r===0)return null;i[0]/=r,i[1]/=r;const l=o=>{const c=(o.x-e[0])*i[0]+(o.y-e[1])*i[1];o.x=e[0]+c*i[0],o.y=e[1]+c*i[1]};return o=>(l(o.mapStart),l(o.mapEnd),{...o,axis:i})}function N(a,t){let e=null;return n=>{if(n.action==="start"&&(e=Z(a,n.mapStart.spatialReference,t)),e==null)return null;const i=n.mapEnd.x-n.mapStart.x,r=n.mapEnd.y-n.mapStart.y,l=n.mapEnd.z-n.mapStart.z;return e.move(i,r,l,n.action),{...n,translationX:i,translationY:r,translationZ:l}}}function S(a,t){return a==null?null:a.spatialReference.equals(t)?a.clone():E(a,t)}function Z(a,t,e){const n=a.geometry,i=O(t);if(n==null)return null;if(n.type==="mesh")return H(a,n,i,e);const r=S(n,i),l=n.spatialReference;return r==null?null:{move:(o,c,d)=>{const p=M(r.clone(),o,c,d);p.spatialReference.equals(l)?a.geometry=p:a.geometry=E(p,l)}}}function H(a,t,e,n){if(t.vertexSpace.isRelative)return X(a,t,t.vertexSpace,e);if(!t.spatialReference.equals(e))return null;let i=0,r=0,l=0;return{move:(o,c,d)=>{const p=o-i,m=c-r,b=d-l;if(p||m||b){const w=new G(t.origin.x+p,t.origin.y+m,(t.origin.z??0)+b,t.origin.spatialReference);t.centerAt(w,{geographic:t.vertexSpace.isRelative?void 0:n===P.Global}),a.notifyGeometryChanged(),i=o,r=c,l=d}}}}function X(a,t,e,n){const i=S(e.getOriginPoint(t.spatialReference),n),r=t.spatialReference;return i==null?null:{move:(l,o,c,d)=>{const p=M(i.clone(),l,o,c);if(p.spatialReference.equals(r))e.setOriginFromPoint(p);else{const m=E(p,r);m!=null&&e.setOriginFromPoint(m)}if(e.isGeoreferenced)a.notifyGeometryChanged();else{const m=d==="end";a.notifyMeshTransformChanged(m?{action:D.UpdateFastLocalOrigin}:{})}}}}function et(a,t=null,e){var l;let n=null;const i=t==null||(l=a.spatialReference)!=null&&l.equals(t)?o=>o:o=>o!=null?E(o,t):o,r={exclude:[],...e};return o=>{if(o.action==="start"&&(n=i(a.toMap(o.screenStart,r))),n==null)return null;const c=i(a.toMap(o.screenEnd,r));return c!=null?{...o,mapStart:n,mapEnd:c}:null}}function nt(a,t){const e=a.map(n=>N(n,t)).filter(z);return n=>{const i=n.mapEnd.x-n.mapStart.x,r=n.mapEnd.y-n.mapStart.y,l=n.mapEnd.z-n.mapStart.z;return e.forEach(o=>o(n)),{...n,translationX:i,translationY:r,translationZ:l}}}function L(a,t){const e=new Map;for(const n of t)e.set(n,U(a[n]));return n=>(e.forEach((i,r)=>{a[r]=i}),n)}function Y(a){return a.geometry!=null&&a.geometry.type==="mesh"?k(a,a.geometry):L(a,["geometry"])}function k(a,t){var r;const{vertexSpace:e}=t;if(e.isGeoreferenced){const l=t.vertexAttributes.clonePositional();return o=>(t.vertexAttributes=l,a.notifyGeometryChanged(),o)}const n=I(e.origin),i=(r=t.transform)==null?void 0:r.clone();return l=>(t.transform=i,t.vertexSpace.origin=n,a.notifyMeshTransformChanged(),l)}function at(a){const t=a.map(e=>Y(e)).filter(e=>e!=null);return e=>(t.forEach(n=>n(e)),e)}function it(){let a=0,t=0,e=0;return n=>{n.action==="start"&&(a=n.mapStart.x,t=n.mapStart.y,e=n.mapStart.z);const i=n.mapEnd.x-a,r=n.mapEnd.y-t,l=n.mapEnd.z-e;return a=n.mapEnd.x,t=n.mapEnd.y,e=n.mapEnd.z,{...n,mapDeltaX:i,mapDeltaY:r,mapDeltaZ:l,mapDeltaSpatialReference:n.mapStart.spatialReference}}}function rt(){let a=0,t=0;return e=>{e.action==="start"&&(a=e.screenStart.x,t=e.screenStart.y);const n=e.screenEnd.x-a,i=e.screenEnd.y-t;return a=e.screenEnd.x,t=e.screenEnd.y,{...e,screenDeltaX:n,screenDeltaY:i}}}function ot(a,t){let e=null,n=0,i=0;return r=>{var d;if(r.action==="start"&&(e=(d=a.toScreen)==null?void 0:d.call(a,t),e!=null&&(e.x<0||e.x>a.width||e.y<0||e.y>a.height?e=null:(n=r.screenStart.x-e.x,i=r.screenStart.y-e.y))),e==null)return null;const l=_(r.screenEnd.x-n,0,a.width),o=_(r.screenEnd.y-i,0,a.height),c=W(l,o);return r.screenStart=e,r.screenEnd=c,r}}const j=()=>{};class y{constructor(){this.execute=j}next(t,e=new y){return t!=null&&(this.execute=n=>{const i=t(n);i!=null&&e.execute(i)}),e}}function lt(a,t,e=[]){if(a.type==="2d")return i=>i;let n=null;return i=>{i.action==="start"&&(n=a.toMap(i.screenStart,{exclude:e}),n!=null&&(n.z=g(n,a,t)));const r=a.toMap(i.screenEnd,{exclude:e});r!=null&&(r.z=g(r,a,t));const l=n!=null&&r!=null?{sceneStart:n,sceneEnd:r}:null;return{...i,scenePoints:l}}}function x(a,t,e){const n=t.elevationProvider.getElevation(a.x,a.y,a.z??0,a.spatialReference,"scene")??0,i=$(a);return i.z=n,i.hasZ=!0,i.z=g(i,t,e),i}function st(a,t){if(a.type==="2d")return n=>n;let e=null;return n=>{n.action==="start"&&(e=x(n.mapStart,a,t));const i=x(n.mapEnd,a,t),r=e!=null&&i!=null?{sceneStart:e,sceneEnd:i}:null;return{...n,scenePoints:r}}}export{lt as C,ot as D,st as O,it as P,L as R,y as U,Q as d,q as i,nt as j,s as l,rt as q,et as v,at as w,N as x,tt as y,Y as z};