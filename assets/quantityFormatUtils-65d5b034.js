import{k2 as a,jU as c,k3 as b,k4 as o,k5 as f,k6 as v,k7 as k,k8 as m,k9 as p,ka as $,kb as y,kc as d,kd as h,ke as w,kf as T,kg as U}from"./index-383689b1.js";function g(n,u){return{type:a(u),value:n,unit:u}}function j(n,u){return{type:a(u),value:n,unit:u}}function x(n,u){return{type:a(u),value:n,unit:u}}function S(n,u,t="arithmetic"){return{type:a(u),value:n,unit:u,rotationType:t}}function l(n,u){return g(c(n.value,n.unit,u),u)}function C(n,u){return n==null?u:u==null||n.value>c(u.value,u.unit,n.unit)?n:u}function E(n,u){return n==null?null:{...n,value:n.value*u}}const G=j(0,"meters"),H=x(0,"square-meters");S(0,"radians");function i(n,u,t,e=2,r="abbr"){return f(n,l(u,t).value,t,e,r)}function s(n,u,t,e=2,r="abbr"){return v(n,l(u,t).value,t,e,r)}function q(n,u,t=2,e="abbr"){return k(n,u.value,u.unit,t,e)}function D(n,u,t=2,e="abbr"){return m(n,u.value,u.unit,t,e)}function F(n,u,t=2,e="abbr"){return p(n,u.value,u.unit,t,e)}function M(n,u,t=2,e="abbr"){return $(n,u.value,u.unit,t,e)}function B(n,u,t=2,e="abbr"){return y(n,u.value,u.unit,t,e)}function I(n,u,t=2,e="abbr"){return d(n,u.value,u.unit,t,e)}function L(n,u,t=2,e="abbr"){return h(n,u.value,u.unit,t,e)}function R(n,u,t=2,e="abbr"){return w(n,u.value,u.unit,t,e)}function V(n,u,t=2,e="abbr"){return T(n,u.value,u.unit,t,e)}function z(n,u,t=2,e="abbr"){return U(n,u.value,u.unit,t,e)}function J(n,u,t){return b(n.value,n.unit,n.rotationType,u,t)}function K(n,u,t){return o(n.value,n.unit,n.rotationType,u,t)}function N(n,u,t,e,r="abbr"){switch(e=e??2,t){case"imperial":return I(n,u,e,r);case"metric":return q(n,u,e,r);default:return i(n,u,t,e,r)}}function O(n,u,t,e=2,r="abbr"){switch(t){case"imperial":return L(n,u,e,r);case"metric":return D(n,u,e,r);default:return s(n,u,t,e,r)}}function P(n,u,t,e=2,r="abbr"){switch(t){case"imperial":return R(n,u,e,r);case"metric":return F(n,u,e,r);default:return i(n,u,t,e,r)}}function Q(n,u,t,e=2,r="abbr"){switch(t){case"imperial":return V(n,u,e,r);case"metric":return M(n,u,e,r);default:return s(n,u,t,e,r)}}function W(n,u,t,e=2,r="abbr"){switch(t){case"imperial":return z(n,u,e,r);case"metric":return B(n,u,e,r);default:return i(n,u,t,e,r)}}export{P as F,q as L,I as R,Q as S,J as T,H as U,K as a,E as b,F as d,l as f,i as h,g as i,W as k,x as l,G as m,S as o,N as q,j as r,C as s,O as x,R as y};