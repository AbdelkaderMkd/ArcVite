import{hh as d,cb as b,nu as s,aQ as l,aR as r,cd as c,jC as f,aT as p,aW as h,kk as j}from"./index-383689b1.js";import{g as a}from"./persistable-ff1293bf.js";function y(t,e){return u(t)===u(e)}function u(t){if(t==null)return null;const e=t.layer!=null?t.layer.id:"";let i=null;return i=t.objectId!=null?t.objectId:t.layer!=null&&"objectIdField"in t.layer&&t.layer.objectIdField!=null&&t.attributes!=null?t.attributes[t.layer.objectIdField]:t.uid,i==null?null:`o-${e}-${i}`}const I={json:{write:{writer:v,target:{"feature.layerId":{type:[Number,String]},"feature.objectId":{type:[Number,String]}}},origins:{"web-scene":{read:$}}}};function v(t,e){var i;t!=null&&((i=t.layer)==null?void 0:i.objectIdField)!=null&&t.attributes!=null&&(e.feature={layerId:t.layer.id,objectId:t.attributes[t.layer.objectIdField]})}function $(t){if(t.layerId!=null&&t.objectId!=null)return{uid:null,layer:{id:t.layerId,objectIdField:"ObjectId"},attributes:{ObjectId:t.objectId}}}let n=class extends d(b(h)){constructor(e){super(e),this.position=null,this.elevationInfo=null,this.feature=null}equals(e){return s(this.position,e.position)&&s(this.elevationInfo,e.elevationInfo)&&y(this.feature,e.feature)}};l([r({type:c,json:{write:{isRequired:!0}}})],n.prototype,"position",void 0),l([r({type:f}),a()],n.prototype,"elevationInfo",void 0),l([r(I)],n.prototype,"feature",void 0),n=l([p("esri.analysis.LineOfSightAnalysisObserver")],n);const O=n;let o=class extends d(j){constructor(t){super(t),this.position=null,this.elevationInfo=null,this.feature=null}equals(t){return s(this.position,t.position)&&s(this.elevationInfo,t.elevationInfo)&&y(this.feature,t.feature)}};l([r({type:c}),a()],o.prototype,"position",void 0),l([r({type:f}),a()],o.prototype,"elevationInfo",void 0),l([r(I)],o.prototype,"feature",void 0),o=l([p("esri.analysis.LineOfSightAnalysisTarget")],o);const w=o;export{w as f,u as l,O as u};