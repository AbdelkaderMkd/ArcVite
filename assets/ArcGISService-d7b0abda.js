import{a as i,b as s,c as r,aV as a,aW as n,s as u}from"./index-694ce44d.js";const g=l=>{let e=class extends l{get title(){if(this._get("title")&&this.originOf("title")!=="defaults")return this._get("title");if(this.url){const t=a(this.url);if(t!=null&&t.title)return t.title}return this._get("title")||""}set title(t){this._set("title",t)}set url(t){this._set("url",n(t,u.getLogger(this)))}};return i([s()],e.prototype,"title",null),i([s({type:String})],e.prototype,"url",null),e=i([r("esri.layers.mixins.ArcGISService")],e),e};export{g as l};
