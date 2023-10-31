import{hc as i,hd as d,he as f,bZ as h}from"./index-383689b1.js";import{t as l}from"./query-3e31e3f5.js";import"./pbfQueryUtils-394408b5.js";import"./pbf-1f7c5ba7.js";function y(n){const t=n.toJSON();return t.attachmentTypes&&(t.attachmentTypes=t.attachmentTypes.join(",")),t.keywords&&(t.keywords=t.keywords.join(",")),t.globalIds&&(t.globalIds=t.globalIds.join(",")),t.objectIds&&(t.objectIds=t.objectIds.join(",")),t.size&&(t.size=t.size.join(",")),t}function O(n,t){const e={};for(const o of t){const{parentObjectId:a,parentGlobalId:s,attachmentInfos:r}=o;for(const c of r){const{id:p}=c,u=i(d(`${n.path}/${a}/attachments/${p}`)),m=f.fromJSON(c);m.set({url:u,parentObjectId:a,parentGlobalId:s}),e[a]?e[a].push(m):e[a]=[m]}}return e}function A(n,t,e){let o={query:l({...n.query,f:"json",...y(t)})};return e&&(o={...e,...o,query:{...e.query,...o.query}}),h(n.path+"/queryAttachments",o).then(a=>a.data.attachmentGroups)}async function $(n,t,e){const{objectIds:o}=t,a=[];for(const s of o)a.push(h(n.path+"/"+s+"/attachments",e));return Promise.all(a).then(s=>o.map((r,c)=>({parentObjectId:r,attachmentInfos:s[c].data.attachmentInfos})))}export{A as executeAttachmentQuery,$ as fetchAttachments,O as processAttachmentQueryResult};