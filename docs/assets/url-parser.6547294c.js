import{S as c,i as _,s as p,c as d,e as m,a as f,b as h,u as g,g as w,f as $,t as b,h as y,j as v}from"./index.83cf3a15.js";function z(n){let e,i,o;const l=n[2].default,s=d(l,n,n[1],null);return{c(){e=m("div"),s&&s.c(),f(e,"style",i=`width: ${n[0]}px;height: ${n[0]}px`)},m(t,a){h(t,e,a),s&&s.m(e,null),o=!0},p(t,[a]){s&&s.p&&(!o||a&2)&&g(s,l,t,t[1],o?$(l,t[1],a,null):w(t[1]),null),(!o||a&1&&i!==(i=`width: ${t[0]}px;height: ${t[0]}px`))&&f(e,"style",i)},i(t){o||(b(s,t),o=!0)},o(t){y(s,t),o=!1},d(t){t&&v(e),s&&s.d(t)}}}function C(n,e,i){let{$$slots:o={},$$scope:l}=e,{size:s=35}=e;return n.$$set=t=>{"size"in t&&i(0,s=t.size),"$$scope"in t&&i(1,l=t.$$scope)},[s,l,o]}class R extends c{constructor(e){super(),_(this,e,C,z,p,{size:0})}}const r=/https?:\/\/(?:[0-9A-Z-]+\.)?(?:youtu\.be\/|youtube(?:-nocookie)?\.com\S*[^\w\s-])([\w-]{11})(?=[^\w-]|$)(?![?=&+%\w.-]*(?:['"][^<>]*>|<\/a>))[?=&+%\w.-]*/ig;function u(n,e){return n.indexOf(e)>-1}function S(n){let e=n.replace(r,"$1");if(u(e,";")){const i=e.split(";");if(u(i[1],"%")){const o=decodeURIComponent(i[1]);e=("http://youtube.com"+o).replace(r,"$1")}else e=i[0]}else u(e,"#")&&(e=e.split("#")[0]);return e}export{R as X,S as g};
