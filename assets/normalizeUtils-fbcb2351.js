import{aR as F,cn as T,a1 as X,aU as G,a9 as K,f0 as W,f1 as Z,s as _,aZ as B,D as k,M as P,f2 as O,aK as b,aG as E,T as H}from"./index-7af450d7.js";import{r as v,o as A,i as R,s as C}from"./normalizeUtilsCommon-7cb21fa5.js";async function Q(t,s,f,n){const e=F(t),c=s[0].spatialReference,a={...n,query:{...e.query,f:"json",sr:JSON.stringify(c),target:JSON.stringify({geometryType:T(s[0]),geometries:s}),cutter:JSON.stringify(f)}},o=await X(e.path+"/cut",a),{cutIndexes:u,geometries:y=[]}=o.data;return{cutIndexes:u,geometries:y.map(h=>{const x=G(h);return x.spatialReference=c,x})}}async function V(t,s,f){const n=typeof t=="string"?K(t):t,e=s[0].spatialReference,c=T(s[0]),a={...f,query:{...n.query,f:"json",sr:e.wkid??JSON.stringify(e),geometries:JSON.stringify(W(s))}},{data:o}=await X(n.path+"/simplify",a);return Z(o.geometries,c,e)}const D=_.getLogger("esri.geometry.support.normalizeUtils");function Y(t){return t.type==="polygon"}function tt(t){return t[0].type==="polygon"}function et(t){return t[0].type==="polyline"}function st(t,s){if(!(t instanceof P||t instanceof b)){const e="straightLineDensify: the input geometry is neither polyline nor polygon";throw D.error(e),new H(e)}const f=A(t),n=[];for(const e of f){const c=[];n.push(c),c.push([e[0][0],e[0][1]]);for(let a=0;a<e.length-1;a++){const o=e[a][0],u=e[a][1],y=e[a+1][0],h=e[a+1][1],x=Math.sqrt((y-o)*(y-o)+(h-u)*(h-u)),l=(h-u)/x,m=(y-o)/x,p=x/s;if(p>1){for(let S=1;S<=p-1;S++){const j=S*s,r=m*j+o,i=l*j+u;c.push([r,i])}const w=(x+Math.floor(p-1)*s)/2,L=m*w+o,I=l*w+u;c.push([L,I])}c.push([y,h])}}return Y(t)?new b({rings:n,spatialReference:t.spatialReference}):new P({paths:n,spatialReference:t.spatialReference})}function z(t,s,f){if(s){const n=st(t,1e6);t=E(n,!0)}return f&&(t=C(t,f)),t}function U(t,s,f){if(Array.isArray(t)){const n=t[0];if(n>s){const e=R(n,s);t[0]=n+e*(-2*s)}else if(n<f){const e=R(n,f);t[0]=n+e*(-2*f)}}else{const n=t.x;if(n>s){const e=R(n,s);t=t.clone().offset(e*(-2*s),0)}else if(n<f){const e=R(n,f);t=t.clone().offset(e*(-2*f),0)}}return t}function nt(t,s){let f=-1;for(let n=0;n<s.cutIndexes.length;n++){const e=s.cutIndexes[n],c=s.geometries[n],a=A(c);for(let o=0;o<a.length;o++){const u=a[o];u.some(y=>{if(y[0]<180)return!0;{let h=0;for(let l=0;l<u.length;l++){const m=u[l][0];h=m>h?m:h}h=Number(h.toFixed(9));const x=-360*R(h,180);for(let l=0;l<u.length;l++){const m=c.getPoint(o,l);c.setPoint(o,l,m.clone().offset(x,0))}return!0}})}if(e===f){if(tt(t))for(const o of A(c))t[e]=t[e].addRing(o);else if(et(t))for(const o of A(c))t[e]=t[e].addPath(o)}else f=e,t[e]=c}return t}async function ot(t,s,f){if(!Array.isArray(t))return ot([t],s);s&&typeof s!="string"&&D.warn("normalizeCentralMeridian()","The url object is deprecated, use the url string instead");const n=typeof s=="string"?s:(s==null?void 0:s.url)??B.geometryServiceUrl;let e,c,a,o,u,y,h,x,l=0;const m=[],p=[];for(const r of t)if(r!=null)if(e||(e=r.spatialReference,c=k(e),a=e.isWebMercator,y=a?102100:4326,o=v[y].maxX,u=v[y].minX,h=v[y].plus180Line,x=v[y].minus180Line),c)if(r.type==="mesh")p.push(r);else if(r.type==="point")p.push(U(r.clone(),o,u));else if(r.type==="multipoint"){const i=r.clone();i.points=i.points.map(g=>U(g,o,u)),p.push(i)}else if(r.type==="extent"){const i=r.clone()._normalize(!1,!1,c);p.push(i.rings?new b(i):i)}else if(r.extent){const i=r.extent,g=R(i.xmin,u)*(2*o);let d=g===0?r.clone():C(r.clone(),g);i.offset(g,0),i.intersects(h)&&i.xmax!==o?(l=i.xmax>l?i.xmax:l,d=z(d,a),m.push(d),p.push("cut")):i.intersects(x)&&i.xmin!==u?(l=i.xmax*(2*o)>l?i.xmax*(2*o):l,d=z(d,a,360),m.push(d),p.push("cut")):p.push(d)}else p.push(r.clone());else p.push(r);else p.push(r);let w=R(l,o),L=-90;const I=w,S=new P;for(;w>0;){const r=360*w-180;S.addPath([[r,L],[r,-1*L]]),L*=-1,w--}if(m.length>0&&I>0){const r=nt(m,await Q(n,m,S,f)),i=[],g=[];for(let $=0;$<p.length;$++){const M=p[$];if(M!=="cut")g.push(M);else{const q=r.shift(),N=t[$];N!=null&&N.type==="polygon"&&N.rings&&N.rings.length>1&&q.rings.length>=N.rings.length?(i.push(q),g.push("simplify")):g.push(a?O(q):q)}}if(!i.length)return g;const d=await V(n,i,f),J=[];for(let $=0;$<g.length;$++){const M=g[$];M!=="simplify"?J.push(M):J.push(a?O(d.shift()):d.shift())}return J}const j=[];for(let r=0;r<p.length;r++){const i=p[r];if(i!=="cut")j.push(i);else{const g=m.shift();j.push(a===!0?O(g):g)}}return j}function ft(t,s){const f=k(s);if(f){const[n,e]=f.valid,c=e-n;if(t<n)for(;t<n;)t+=c;if(t>e)for(;t>e;)t-=c}return t}export{ot as b,ft as v};