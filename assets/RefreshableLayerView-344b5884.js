import{aQ as s,aR as i,aT as h,c_ as o,b2 as d,aw as l}from"./index-383689b1.js";const y=r=>{let e=class extends r{initialize(){this.handles.add(o(()=>this.layer,"refresh",t=>{this.doRefresh(t.dataChanged).catch(a=>{d(a)||l.getLogger(this).error(a)})}),"RefreshableLayerView")}};return s([i()],e.prototype,"layer",void 0),e=s([h("esri.layers.mixins.RefreshableLayerView")],e),e};export{y as a};