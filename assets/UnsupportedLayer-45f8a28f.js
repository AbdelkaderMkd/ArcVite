import{dZ as n,d_ as p,hO as d,aQ as o,aR as a,aT as l,cm as u,aA as y}from"./index-383689b1.js";let t=class extends n(p(u)){constructor(e){super(e),this.resourceInfo=null,this.type="unsupported"}initialize(){this.addResolvingPromise(new Promise((e,r)=>{d(()=>{const s=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type);let i="Unsupported layer type";s&&(i+=" "+s),r(new y("layer:unsupported-layer-type",i,{layerType:s}))})}))}read(e,r){const s={resourceInfo:e};e.id!=null&&(s.id=e.id),e.title!=null&&(s.title=e.title),super.read(s,r)}write(e,r){return Object.assign(e||{},this.resourceInfo,{id:this.id})}};o([a({readOnly:!0})],t.prototype,"resourceInfo",void 0),o([a({type:["show","hide"]})],t.prototype,"listMode",void 0),o([a({json:{read:!1},readOnly:!0,value:"unsupported"})],t.prototype,"type",void 0),t=o([l("esri.layers.UnsupportedLayer")],t);const h=t;export{h as default};