import{cw as t,c2 as e,cx as m,cy as s,cg as p,cz as w,cA as x,af as A,cB as b}from"./index-7af450d7.js";import{s as h,c as j}from"./sphere-bc5627d2.js";function a(r){return r?{origin:t(r.origin),vector:t(r.vector)}:{origin:e(),vector:e()}}function P(r,o,n=a()){return m(n.origin,r),s(n.vector,o,r),n}function d(r,o,n){return y(r,o,0,1,n)}function y(r,o,n,u,c){const{vector:i,origin:v}=r,f=s(j.get(),o,v),g=p(i,f)/w(i);return x(c,i,A(g,n,u)),b(c,c,r.origin)}new h(()=>a());export{P as b,d as j,a as v};