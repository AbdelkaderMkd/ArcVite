import{b5 as M,a as d,b as f,c as F,ap as A,Q as C,aP as O,s as q,v as R,T as H}from"./index-694ce44d.js";import{b as k,e as j,j as P,l as w}from"./SizeVariable-f2e14e5f.js";let y=class extends M(A){constructor(n){super(n),this.expression=null,this.title=null,this.returnType=null}};d([f({type:String,json:{write:!0}})],y.prototype,"expression",void 0),d([f({type:String,json:{write:!0}})],y.prototype,"title",void 0),d([f({type:String,json:{write:!0}})],y.prototype,"returnType",void 0),y=d([F("esri.layers.support.ExpressionInfo")],y);const T=y;var z;let v=z=class extends A{constructor(e){super(e),this.isAutoGenerated=!1,this.name=null,this.alias=null,this.onStatisticField=null,this.onStatisticExpression=null,this.statisticType=null}clone(){return new z({name:this.name,alias:this.alias,isAutoGenerated:this.isAutoGenerated,onStatisticExpression:C(this.onStatisticExpression),onStatisticField:this.onStatisticField,statisticType:this.statisticType})}};d([f({type:Boolean,json:{write:!0}})],v.prototype,"isAutoGenerated",void 0),d([f({type:String,json:{write:!0}})],v.prototype,"name",void 0),d([f({type:String,json:{write:!0}})],v.prototype,"alias",void 0),d([f({type:String,json:{write:!0}})],v.prototype,"onStatisticField",void 0),d([f({type:T,json:{write:!0}})],v.prototype,"onStatisticExpression",void 0),d([f({type:String,json:{write:!0}})],v.prototype,"statisticType",void 0),v=z=d([F("esri.layers.support.AggregateField")],v);const _=v,g={Base64:0,Hex:1,String:2,Raw:3},b=8,G=(1<<b)-1;function h(e,n){const s=(65535&e)+(65535&n);return(e>>16)+(n>>16)+(s>>16)<<16|65535&s}function Q(e){const n=[];for(let s=0,i=e.length*b;s<i;s+=b)n[s>>5]|=(e.charCodeAt(s/b)&G)<<s%32;return n}function J(e){const n=[];for(let s=0,i=32*e.length;s<i;s+=b)n.push(String.fromCharCode(e[s>>5]>>>s%32&G));return n.join("")}function K(e){const n="0123456789abcdef",s=[];for(let i=0,r=4*e.length;i<r;i++)s.push(n.charAt(e[i>>2]>>i%4*8+4&15)+n.charAt(e[i>>2]>>i%4*8&15));return s.join("")}function N(e){const n="=",s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",i=[];for(let r=0,t=4*e.length;r<t;r+=3){const a=(e[r>>2]>>r%4*8&255)<<16|(e[r+1>>2]>>(r+1)%4*8&255)<<8|e[r+2>>2]>>(r+2)%4*8&255;for(let m=0;m<4;m++)8*r+6*m>32*e.length?i.push(n):i.push(s.charAt(a>>6*(3-m)&63))}return i.join("")}function W(e,n){return e<<n|e>>>32-n}function E(e,n,s,i,r,t){return h(W(h(h(n,e),h(i,t)),r),s)}function l(e,n,s,i,r,t,a){return E(n&s|~n&i,e,n,r,t,a)}function u(e,n,s,i,r,t,a){return E(n&i|s&~i,e,n,r,t,a)}function c(e,n,s,i,r,t,a){return E(n^s^i,e,n,r,t,a)}function p(e,n,s,i,r,t,a){return E(s^(n|~i),e,n,r,t,a)}function X(e,n){e[n>>5]|=128<<n%32,e[14+(n+64>>>9<<4)]=n;let s=1732584193,i=-271733879,r=-1732584194,t=271733878;for(let a=0;a<e.length;a+=16){const m=s,o=i,U=r,B=t;s=l(s,i,r,t,e[a],7,-680876936),t=l(t,s,i,r,e[a+1],12,-389564586),r=l(r,t,s,i,e[a+2],17,606105819),i=l(i,r,t,s,e[a+3],22,-1044525330),s=l(s,i,r,t,e[a+4],7,-176418897),t=l(t,s,i,r,e[a+5],12,1200080426),r=l(r,t,s,i,e[a+6],17,-1473231341),i=l(i,r,t,s,e[a+7],22,-45705983),s=l(s,i,r,t,e[a+8],7,1770035416),t=l(t,s,i,r,e[a+9],12,-1958414417),r=l(r,t,s,i,e[a+10],17,-42063),i=l(i,r,t,s,e[a+11],22,-1990404162),s=l(s,i,r,t,e[a+12],7,1804603682),t=l(t,s,i,r,e[a+13],12,-40341101),r=l(r,t,s,i,e[a+14],17,-1502002290),i=l(i,r,t,s,e[a+15],22,1236535329),s=u(s,i,r,t,e[a+1],5,-165796510),t=u(t,s,i,r,e[a+6],9,-1069501632),r=u(r,t,s,i,e[a+11],14,643717713),i=u(i,r,t,s,e[a],20,-373897302),s=u(s,i,r,t,e[a+5],5,-701558691),t=u(t,s,i,r,e[a+10],9,38016083),r=u(r,t,s,i,e[a+15],14,-660478335),i=u(i,r,t,s,e[a+4],20,-405537848),s=u(s,i,r,t,e[a+9],5,568446438),t=u(t,s,i,r,e[a+14],9,-1019803690),r=u(r,t,s,i,e[a+3],14,-187363961),i=u(i,r,t,s,e[a+8],20,1163531501),s=u(s,i,r,t,e[a+13],5,-1444681467),t=u(t,s,i,r,e[a+2],9,-51403784),r=u(r,t,s,i,e[a+7],14,1735328473),i=u(i,r,t,s,e[a+12],20,-1926607734),s=c(s,i,r,t,e[a+5],4,-378558),t=c(t,s,i,r,e[a+8],11,-2022574463),r=c(r,t,s,i,e[a+11],16,1839030562),i=c(i,r,t,s,e[a+14],23,-35309556),s=c(s,i,r,t,e[a+1],4,-1530992060),t=c(t,s,i,r,e[a+4],11,1272893353),r=c(r,t,s,i,e[a+7],16,-155497632),i=c(i,r,t,s,e[a+10],23,-1094730640),s=c(s,i,r,t,e[a+13],4,681279174),t=c(t,s,i,r,e[a],11,-358537222),r=c(r,t,s,i,e[a+3],16,-722521979),i=c(i,r,t,s,e[a+6],23,76029189),s=c(s,i,r,t,e[a+9],4,-640364487),t=c(t,s,i,r,e[a+12],11,-421815835),r=c(r,t,s,i,e[a+15],16,530742520),i=c(i,r,t,s,e[a+2],23,-995338651),s=p(s,i,r,t,e[a],6,-198630844),t=p(t,s,i,r,e[a+7],10,1126891415),r=p(r,t,s,i,e[a+14],15,-1416354905),i=p(i,r,t,s,e[a+5],21,-57434055),s=p(s,i,r,t,e[a+12],6,1700485571),t=p(t,s,i,r,e[a+3],10,-1894986606),r=p(r,t,s,i,e[a+10],15,-1051523),i=p(i,r,t,s,e[a+1],21,-2054922799),s=p(s,i,r,t,e[a+8],6,1873313359),t=p(t,s,i,r,e[a+15],10,-30611744),r=p(r,t,s,i,e[a+6],15,-1560198380),i=p(i,r,t,s,e[a+13],21,1309151649),s=p(s,i,r,t,e[a+4],6,-145523070),t=p(t,s,i,r,e[a+11],10,-1120210379),r=p(r,t,s,i,e[a+2],15,718787259),i=p(i,r,t,s,e[a+9],21,-343485551),s=h(s,m),i=h(i,o),r=h(r,U),t=h(t,B)}return[s,i,r,t]}function L(e,n=g.Hex){const s=n||g.Base64,i=X(Q(e),e.length*b);switch(s){case g.Raw:return i;case g.Hex:return K(i);case g.String:return J(i);case g.Base64:return N(i)}}var V;let $=V=class extends k{writeLevels(e,n,s){for(const i in e){const r=this.levels[i];return void(n.stops=r)}}clone(){return new V({axis:this.axis,field:this.field,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,maxDataValue:this.maxDataValue,maxSize:j(this.maxSize)?this.maxSize.clone():this.maxSize,minDataValue:this.minDataValue,minSize:j(this.minSize)?this.minSize.clone():this.minSize,normalizationField:this.normalizationField,stops:this.stops&&this.stops.map(e=>e.clone()),target:this.target,useSymbolValue:this.useSymbolValue,valueRepresentation:this.valueRepresentation,valueUnit:this.valueUnit,legendOptions:this.legendOptions&&this.legendOptions.clone(),levels:C(this.levels)})}};d([f()],$.prototype,"levels",void 0),d([O("levels")],$.prototype,"writeLevels",null),$=V=d([F("esri.views.2d.engine.LevelDependentSizeVariable")],$);const Y=q.getLogger("esri.views.2d.layers.support.clusterUtils");R.add("esri-cluster-arcade-enabled",!0);const Z=R("esri-cluster-arcade-enabled"),ne=(e,n,s,i,r)=>{const t=n.clone();if(!te(t))return t;if(t.authoringInfo||(t.authoringInfo=new P),t.authoringInfo.isAutoGenerated=!0,"visualVariables"in t){const a=(t.visualVariables||[]).filter(o=>o.valueExpression!=="$view.scale"),m=D(a);a.forEach(o=>{o.type==="rotation"?o.field?o.field=x(e,o.field,"avg_angle","number"):o.valueExpression&&(o.field=S(e,o.valueExpression,"avg_angle","number"),o.valueExpression=null):o.normalizationField?(o.field=x(e,o.field,"avg_norm","number",o.normalizationField),o.normalizationField=null):o.field?o.field=x(e,o.field,"avg","number"):o.valueExpression&&(o.field=S(e,o.valueExpression,"avg","number"),o.valueExpression=null)}),m==null&&!ee(a)&&r&&(a.push(I(s,i)),t.dynamicClusterSize=!0),t.visualVariables=a}switch(t.type){case"simple":break;case"pie-chart":for(const a of t.attributes)a.field?a.field=x(e,a.field,"sum","number"):a.valueExpression&&(a.field=S(e,a.valueExpression,"sum","number"),a.valueExpression=null);break;case"unique-value":t.field?t.field=x(e,t.field,"mode","string"):t.valueExpression&&(t.field=S(e,t.valueExpression,"mode","string"),t.valueExpression=null);break;case"class-breaks":t.normalizationField?(t.field=x(e,t.field,"avg_norm","number",t.normalizationField),t.normalizationField=null):t.field?t.field=x(e,t.field,"avg","number"):t.valueExpression&&(t.field=S(e,t.valueExpression,"avg","number"),t.valueExpression=null)}return t},D=e=>{for(const n of e)if(n.type==="size")return n;return null};function oe(e,n,s){const i=e.clone();let r=!1;if("visualVariables"in i){const t=(i.visualVariables||[]).filter(a=>a.valueExpression!=="$view.scale");D(t)==null&&(i.visualVariables||(i.visualVariables=[]),i.visualVariables.push(I(n,s)),i.dynamicClusterSize=!0,r=!0)}return{renderer:i,didInject:r}}const ee=e=>{for(const n of e)if(n.field==="cluster_count")return!0;return!1},I=(e,n)=>{const s=[new w({value:0,size:0}),new w({value:1})];if(n==null)return new k({field:"cluster_count",stops:[...s,new w({value:2,size:0})]});const i=Object.keys(n).reduce((r,t)=>({...r,[t]:[...s,new w({value:Math.max(2,n[t].minValue),size:e.clusterMinSize}),new w({value:Math.max(3,n[t].maxValue),size:e.clusterMaxSize})]}),{});return new $({field:"cluster_count",levels:i})},te=e=>{const n=s=>Y.error(new H("Unsupported-renderer",s,{renderer:e}));if(!e)return!1;switch(e.type){case"unique-value":if(e.field2||e.field3)return n("FeatureReductionCluster does not support multi-field UniqueValueRenderers"),!1;break;case"class-breaks":if(e.normalizationField){const s=e.normalizationType;if(s!=="field")return n(`FeatureReductionCluster does not support a normalizationType of ${s}`),!1}break;case"simple":case"pie-chart":break;default:return n(`FeatureReductionCluster does not support renderers of type ${e.type}`),!1}if(!Z){if("valueExpression"in e&&e.valueExpression)return n("FeatureReductionCluster does not currently support renderer.valueExpression. Support will be added in a future release"),!1;if(("visualVariables"in e&&e.visualVariables||[]).some(s=>!(!("valueExpression"in s)||!s.valueExpression)))return n("FeatureReductionCluster does not currently support visualVariables with a valueExpression. Support will be added in a future release"),!1}return!0};function se(e,n,s){switch(e){case"sum":return`cluster_sum_${n}`;case"avg":case"avg_angle":return`cluster_avg_${n}`;case"mode":return`cluster_type_${n}`;case"avg_norm":{const i=s,r="field",t=n.toLowerCase()+",norm:"+r+","+i.toLowerCase();return"cluster_avg_"+L(t)}}}function S(e,n,s,i){const r=L(n),t=s==="mode"?`cluster_type_${r}`:s==="sum"?`cluster_sum_${r}`:`cluster_avg_${r}`;return e.some(a=>a.name===t)||e.push(new _({name:t,isAutoGenerated:!0,onStatisticExpression:new T({expression:n,returnType:i}),statisticType:s})),t}function x(e,n,s,i,r){if(n==="cluster_count"||e.some(a=>a.name===n))return n;const t=se(s,n,r);return e.some(a=>a.name===t)||(s==="avg_norm"?e.push(new _({name:t,isAutoGenerated:!0,onStatisticExpression:new T({expression:`$feature.${n} / $feature.${r}`,returnType:i}),statisticType:"avg"})):e.push(new _({name:t,isAutoGenerated:!0,onStatisticField:n,statisticType:s}))),t}export{_ as a,te as b,ne as c,D as d,oe as f,g as n,I as v,L as x};
