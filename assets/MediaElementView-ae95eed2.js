import{aQ as t,aR as r,aT as l,aW as a,dB as s,dC as d,aS as i}from"./index-383689b1.js";import{c as u}from"./normalizeUtilsSync-91b0dd4d.js";let e=class extends a{constructor(o){super(o)}get bounds(){const o=this.coords;return o==null||o.extent==null?null:s(o.extent)}get coords(){var n;const o=(n=this.element.georeference)==null?void 0:n.coords;return d(o,this.spatialReference).geometry}get normalizedCoords(){return i.fromJSON(u(this.coords))}get normalizedBounds(){const o=this.normalizedCoords!=null?this.normalizedCoords.extent:null;return o!=null?s(o):null}};t([r()],e.prototype,"spatialReference",void 0),t([r()],e.prototype,"element",void 0),t([r()],e.prototype,"bounds",null),t([r()],e.prototype,"coords",null),t([r()],e.prototype,"normalizedCoords",null),t([r()],e.prototype,"normalizedBounds",null),e=t([l("esri.layers.support.MediaElementView")],e);export{e as i};