import{a as r,b as a,c as s}from"./index-694ce44d.js";function p(t){return"portalItem"in t}const y=t=>{let i=class extends t{get apiKey(){var e;return this._isOverridden("apiKey")?this._get("apiKey"):p(this)?(e=this.portalItem)==null?void 0:e.apiKey:null}set apiKey(e){e!=null?this._override("apiKey",e):(this._clearOverride("apiKey"),this.clear("apiKey","user"))}};return r([a({type:String})],i.prototype,"apiKey",null),i=r([s("esri.layers.mixins.APIKeyMixin")],i),i};export{y as i};
