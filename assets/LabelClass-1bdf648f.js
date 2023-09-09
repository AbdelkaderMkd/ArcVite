import{_ as C,a as i,b as l,aS as S,aP as c,c as d,ap as x,cK as P,cI as L,cL as g,eD as N,x as I,fI as j,fJ as O,fK as B,f9 as J,Q as f}from"./index-694ce44d.js";import{w as y,u as _,_ as D,x as V,f as M,g as R}from"./labelUtils-9d1c424f.js";import{l as W,o as z,S as F,t as K,r as k,s as H,y as Q}from"./defaultsJSON-b087dd4d.js";import{i as h}from"./featureFlags-6cf6afd3.js";async function ee(e,r){const{WhereClause:t}=await C(()=>import("./WhereClause-83e0ab0f.js").then(n=>n.W),["assets/WhereClause-83e0ab0f.js","assets/index-694ce44d.js","assets/index-e81f504d.css","assets/executionError-c92d3b85.js"]);return t.create(e,r)}function re(e,r){return e!=null?r!=null?`(${e}) AND (${r})`:e:r}var v;let a=v=class extends x{constructor(){super(...arguments),this.expression=null,this.title=null,this.value=null}readExpression(e,r){return r.value?y(r.value):e}writeExpression(e,r,t){this.value!=null&&(e=y(this.value)),e!=null&&(r[t]=e)}clone(){return new v({expression:this.expression,title:this.title,value:this.value})}};i([l({type:String,json:{write:{writerEnsuresNonNull:!0}}})],a.prototype,"expression",void 0),i([S("expression",["expression","value"])],a.prototype,"readExpression",null),i([c("expression")],a.prototype,"writeExpression",null),i([l({type:String,json:{write:!0,origins:{"web-scene":{write:!1}}}})],a.prototype,"title",void 0),i([l({json:{read:!1,write:!1}})],a.prototype,"value",void 0),a=v=i([d("esri.layers.support.LabelExpressionInfo")],a);const E=a,te=P.fromJSON(W),ne=L.fromJSON(z),ie=g.fromJSON(F),T=N.fromJSON(K),oe=P.fromJSON(k),le=L.fromJSON(H),se=g.fromJSON(Q);var w;const u=new I({esriServerPointLabelPlacementAboveCenter:"above-center",esriServerPointLabelPlacementAboveLeft:"above-left",esriServerPointLabelPlacementAboveRight:"above-right",esriServerPointLabelPlacementBelowCenter:"below-center",esriServerPointLabelPlacementBelowLeft:"below-left",esriServerPointLabelPlacementBelowRight:"below-right",esriServerPointLabelPlacementCenterCenter:"center-center",esriServerPointLabelPlacementCenterLeft:"center-left",esriServerPointLabelPlacementCenterRight:"center-right",esriServerLinePlacementAboveAfter:"above-after",esriServerLinePlacementAboveAlong:"above-along",esriServerLinePlacementAboveBefore:"above-before",esriServerLinePlacementAboveStart:"above-start",esriServerLinePlacementAboveEnd:"above-end",esriServerLinePlacementBelowAfter:"below-after",esriServerLinePlacementBelowAlong:"below-along",esriServerLinePlacementBelowBefore:"below-before",esriServerLinePlacementBelowStart:"below-start",esriServerLinePlacementBelowEnd:"below-end",esriServerLinePlacementCenterAfter:"center-after",esriServerLinePlacementCenterAlong:"center-along",esriServerLinePlacementCenterBefore:"center-before",esriServerLinePlacementCenterStart:"center-start",esriServerLinePlacementCenterEnd:"center-end",esriServerPolygonPlacementAlwaysHorizontal:"always-horizontal"},{ignoreUnknown:!0});function b(e,r,t){return{enabled:!J(t==null?void 0:t.layer)}}function $(e){var r;return!e||e.origin!=="service"&&((r=e.layer)==null?void 0:r.type)!=="map-image"}function U(e){return(e==null?void 0:e.type)==="map-image"}function A(e){var r,t;return!!U(e)&&!!((t=(r=e.capabilities)==null?void 0:r.exportMap)!=null&&t.supportsArcadeExpressionForLabeling)}function q(e){return $(e)||A(e==null?void 0:e.layer)}let o=w=class extends x{static evaluateWhere(e,r){const t=(n,p,s)=>{switch(p){case"=":return n==s;case"<>":return n!=s;case">":return n>s;case">=":return n>=s;case"<":return n<s;case"<=":return n<=s}return!1};try{if(e==null)return!0;const n=e.split(" ");if(n.length===3)return t(r[n[0]],n[1],n[2]);if(n.length===7){const p=t(r[n[0]],n[1],n[2]),s=n[3],m=t(r[n[4]],n[5],n[6]);switch(s){case"AND":return p&&m;case"OR":return p||m}}return!1}catch{console.log("Error.: can't parse = "+e)}}constructor(e){super(e),this.type="label",this.name=null,this.allowOverrun=!1,this.deconflictionStrategy="static",this.labelExpression=null,this.labelExpressionInfo=null,this.labelPlacement=null,this.labelPosition="curved",this.maxScale=0,this.minScale=0,this.repeatLabel=!0,this.repeatLabelDistance=null,this.symbol=T,this.useCodedValues=void 0,this.where=null}readLabelExpression(e,r){const t=r.labelExpressionInfo;if(!t||!t.value&&!t.expression)return e}writeLabelExpression(e,r,t){if(this.labelExpressionInfo){if(this.labelExpressionInfo.value!=null)e=_(this.labelExpressionInfo.value);else if(this.labelExpressionInfo.expression!=null){const n=D(this.labelExpressionInfo.expression);n&&(e="["+n+"]")}}e!=null&&(r[t]=e)}writeLabelExpressionInfo(e,r,t,n){if(e==null&&this.labelExpression!=null&&$(n))e=new E({expression:this.getLabelExpressionArcade()});else if(!e)return;const p=e.toJSON(n);p.expression&&(r[t]=p)}writeMaxScale(e,r){(e||this.minScale)&&(r.maxScale=e)}writeMinScale(e,r){(e||this.maxScale)&&(r.minScale=e)}getLabelExpression(){return V(this)}getLabelExpressionArcade(){return M(this)}getLabelExpressionSingleField(){return R(this)}hash(){return JSON.stringify(this)}clone(){return new w({allowOverrun:this.allowOverrun,deconflictionStrategy:this.deconflictionStrategy,labelExpression:this.labelExpression,labelExpressionInfo:f(this.labelExpressionInfo),labelPosition:this.labelPosition,labelPlacement:this.labelPlacement,maxScale:this.maxScale,minScale:this.minScale,name:this.name,repeatLabel:this.repeatLabel,repeatLabelDistance:this.repeatLabelDistance,symbol:f(this.symbol),where:this.where,useCodedValues:this.useCodedValues})}};i([l({type:String,json:{write:!0}})],o.prototype,"name",void 0),i([l({type:Boolean,json:{write:!0,default:!1,origins:{"web-scene":{write:!1},"portal-item":{default:!1,write:{overridePolicy:b}}}}})],o.prototype,"allowOverrun",void 0),i([l({type:String,json:{write:!0,default:"static",origins:{"web-scene":{write:!1},"portal-item":{default:"static",write:{overridePolicy:b}}}}})],o.prototype,"deconflictionStrategy",void 0),i([l({type:String,json:{write:{overridePolicy(e,r,t){return this.labelExpressionInfo&&(t==null?void 0:t.origin)==="service"&&A(t.layer)?{enabled:!1}:{allowNull:!0}}}}})],o.prototype,"labelExpression",void 0),i([S("labelExpression")],o.prototype,"readLabelExpression",null),i([c("labelExpression")],o.prototype,"writeLabelExpression",null),i([l({type:E,json:{write:{overridePolicy:(e,r,t)=>q(t)?{allowNull:!0}:{enabled:!1}}}})],o.prototype,"labelExpressionInfo",void 0),i([c("labelExpressionInfo")],o.prototype,"writeLabelExpressionInfo",null),i([l({type:u.apiValues,json:{type:u.jsonValues,read:u.read,write:u.write}})],o.prototype,"labelPlacement",void 0),i([l({type:["curved","parallel"],json:{write:!0,origins:{"web-map":{write:!1},"web-scene":{write:!1},"portal-item":{write:!1}}}})],o.prototype,"labelPosition",void 0),i([l({type:Number})],o.prototype,"maxScale",void 0),i([c("maxScale")],o.prototype,"writeMaxScale",null),i([l({type:Number})],o.prototype,"minScale",void 0),i([c("minScale")],o.prototype,"writeMinScale",null),i([l({type:Boolean,json:{write:!0,origins:{"web-scene":{write:!1},"portal-item":{write:{overridePolicy:b}}}}})],o.prototype,"repeatLabel",void 0),i([l({type:Number,cast:j,json:{write:!0,origins:{"web-scene":{write:!1},"portal-item":{write:{overridePolicy:b}}}}})],o.prototype,"repeatLabelDistance",void 0),i([l({types:O,json:{origins:{"web-scene":{types:B,write:h,default:null}},write:h,default:null}})],o.prototype,"symbol",void 0),i([l({type:Boolean,json:{write:!0}})],o.prototype,"useCodedValues",void 0),i([l({type:String,json:{write:!0}})],o.prototype,"where",void 0),o=w=i([d("esri.layers.support.LabelClass")],o);const ae=o;export{ae as C,oe as N,le as O,te as S,ie as c,ee as e,re as n,ne as u,se as y};
