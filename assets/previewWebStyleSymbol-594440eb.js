import{co as m,i7 as u,i8 as r,i9 as d}from"./index-3572d442.js";function c(e,i,t){const a=e.thumbnail&&e.thumbnail.url;return a?m(a,{responseType:"image"}).then(s=>{const o=n(s.data,t);return t!=null&&t.node?(t.node.appendChild(o),t.node):o}):u(e).then(s=>s?i(s,t):null)}function n(e,i){const t=!/\\.svg$/i.test(e.src)&&i&&i.disableUpsampling,a=Math.max(e.width,e.height);let s=(i==null?void 0:i.maxSize)!=null?r(i.maxSize):d.maxSize;t&&(s=Math.min(a,s));const o=typeof(i==null?void 0:i.size)=="number"?i==null?void 0:i.size:null,h=Math.min(s,o!=null?r(o):a);if(h!==a){const l=e.width!==0&&e.height!==0?e.width/e.height:1;l>=1?(e.width=h,e.height=h/l):(e.width=h*l,e.height=h)}return e}export{c as previewWebStyleSymbol};