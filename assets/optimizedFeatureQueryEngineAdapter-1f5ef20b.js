import{hc as G,hd as O}from"./index-3572d442.js";function _(t,e){return t?e?4:3:e?3:2}function P(t,e,o,s,c){if(!(e!=null&&e.lengths.length))return null;const l=(c==null?void 0:c.originPosition)==="upperLeft"?-1:1;t.lengths.length&&(t.lengths.length=0),t.coords.length&&(t.coords.length=0);const r=t.coords,I=[],u=o?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY],{lengths:g,coords:T}=e,d=_(o,s);let m=0;for(const n of g){const i=p(u,T,m,n,o,s,l);i&&I.push(i),m+=n*d}if(I.sort((n,i)=>{let h=l*n[2]-l*i[2];return h===0&&o&&(h=n[4]-i[4]),h}),I.length){let n=6*I[0][2];r[0]=I[0][0]/n,r[1]=I[0][1]/n,o&&(n=6*I[0][4],r[2]=n!==0?I[0][3]/n:0),(r[0]<u[0]||r[0]>u[1]||r[1]<u[2]||r[1]>u[3]||o&&(r[2]<u[4]||r[2]>u[5]))&&(r.length=0)}if(!r.length){const n=e.lengths[0]?S(T,0,g[0],o,s):null;if(!n)return null;r[0]=n[0],r[1]=n[1],o&&n.length>2&&(r[2]=n[2])}return t}function p(t,e,o,s,c,l,r=1){const I=_(c,l);let u=o,g=o+I,T=0,d=0,m=0,n=0,i=0;for(let Y=0,F=s-1;Y<F;Y++,u+=I,g+=I){const f=e[u],E=e[u+1],N=e[u+2],b=e[g],a=e[g+1],A=e[g+2];let V=f*a-b*E;n+=V,T+=(f+b)*V,d+=(E+a)*V,c&&(V=f*A-b*N,m+=(N+A)*V,i+=V),f<t[0]&&(t[0]=f),f>t[1]&&(t[1]=f),E<t[2]&&(t[2]=E),E>t[3]&&(t[3]=E),c&&(N<t[4]&&(t[4]=N),N>t[5]&&(t[5]=N))}if(n*r>0&&(n*=-1),i*r>0&&(i*=-1),!n)return null;const h=[T,d,.5*n];return c&&(h[3]=m,h[4]=.5*i),h}function S(t,e,o,s,c){const l=_(s,c);let r=e,I=e+l,u=0,g=0,T=0,d=0;for(let m=0,n=o-1;m<n;m++,r+=l,I+=l){const i=t[r],h=t[r+1],Y=t[r+2],F=t[I],f=t[I+1],E=t[I+2],N=s?j(i,h,Y,F,f,E):y(i,h,F,f);if(N)if(u+=N,s){const b=$(i,h,Y,F,f,E);g+=N*b[0],T+=N*b[1],d+=N*b[2]}else{const b=M(i,h,F,f);g+=N*b[0],T+=N*b[1]}}return u>0?s?[g/u,T/u,d/u]:[g/u,T/u]:o>0?s?[t[e],t[e+1],t[e+2]]:[t[e],t[e+1]]:null}function y(t,e,o,s){const c=o-t,l=s-e;return Math.sqrt(c*c+l*l)}function j(t,e,o,s,c,l){const r=s-t,I=c-e,u=l-o;return Math.sqrt(r*r+I*I+u*u)}function M(t,e,o,s){return[t+.5*(o-t),e+.5*(s-e)]}function $(t,e,o,s,c,l){return[t+.5*(s-t),e+.5*(c-e),o+.5*(l-o)]}const w={getObjectId:t=>t.objectId,getAttributes:t=>t.attributes,getAttribute:(t,e)=>t.attributes[e],cloneWithGeometry:(t,e)=>new G(e,t.attributes,null,t.objectId),getGeometry:t=>t.geometry,getCentroid:(t,e)=>(t.centroid==null&&(t.centroid=P(new O,t.geometry,e.hasZ,e.hasM)),t.centroid)};export{P as n,w as o};