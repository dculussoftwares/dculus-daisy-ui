import{S,i as W,s as z,C as y,w as $,x as h,y as v,z as A,A as H,q as b,o as w,B as g,K as B,af as j,k as D,m as I,g as u,d as c,e as p,t as x,c as d,a as m,h as k,b as f,F as _,a7 as q,U as P}from"../../chunks/vendor-5cac9afb.js";import{M as F}from"../../chunks/_markdown-ee1724ce.js";import{p as K,C as T,a as V,r as R}from"../../chunks/actions-ff0f5607.js";import"../../chunks/stores-65dc3cfc.js";import"../../chunks/Ads-d963baca.js";import"../../chunks/index-ca7bdbea.js";import"../../chunks/SEO-1211c133.js";import"../../chunks/preload-helper-ec9aa979.js";import"../../chunks/Translate-d5e84a47.js";function U(i){let e,o,l;return{c(){e=p("div"),o=p("div"),l=x("Hello!"),this.h()},l(a){e=d(a,"DIV",{class:!0});var s=m(e);o=d(s,"DIV",{class:!0});var r=m(o);l=k(r,"Hello!"),r.forEach(c),s.forEach(c),this.h()},h(){f(o,"class","flex justify-center px-4 py-16 border-t border-base-300"),f(e,"class","border mockup-window border-base-300 w-full")},m(a,s){u(a,e,s),_(e,o),_(o,l)},d(a){a&&c(e)}}}function G(i){let e,o=`<div class="$$mockup-window border border-base-300">
  <div class="flex justify-center px-4 py-16 border-t border-base-300">Hello!</div>
</div>`,l,a,s,r;return{c(){e=p("pre"),l=x(o),this.h()},l(t){e=d(t,"PRE",{slot:!0});var n=m(e);l=k(n,o),n.forEach(c),this.h()},h(){f(e,"slot","html")},m(t,n){u(t,e,n),_(e,l),s||(r=q(a=R.call(null,e,{to:i[0]})),s=!0)},p(t,n){a&&P(a.update)&&n&1&&a.update.call(null,{to:t[0]})},d(t){t&&c(e),s=!1,r()}}}function J(i){let e,o,l;return{c(){e=p("div"),o=p("div"),l=x("Hello!"),this.h()},l(a){e=d(a,"DIV",{class:!0});var s=m(e);o=d(s,"DIV",{class:!0});var r=m(o);l=k(r,"Hello!"),r.forEach(c),s.forEach(c),this.h()},h(){f(o,"class","flex justify-center px-4 py-16 bg-base-200"),f(e,"class","border mockup-window bg-base-300 w-full")},m(a,s){u(a,e,s),_(e,o),_(o,l)},d(a){a&&c(e)}}}function L(i){let e,o=`<div class="$$mockup-window border bg-base-300">
  <div class="flex justify-center px-4 py-16 bg-base-200">Hello!</div>
</div>`,l,a,s,r;return{c(){e=p("pre"),l=x(o),this.h()},l(t){e=d(t,"PRE",{slot:!0});var n=m(e);l=k(n,o),n.forEach(c),this.h()},h(){f(e,"slot","html")},m(t,n){u(t,e,n),_(e,l),s||(r=q(a=R.call(null,e,{to:i[0]})),s=!0)},p(t,n){a&&P(a.update)&&n&1&&a.update.call(null,{to:t[0]})},d(t){t&&c(e),s=!1,r()}}}function N(i){let e,o,l,a,s,r;return e=new T({props:{data:[{type:"component",class:"mockup-window",desc:"Container element"}]}}),l=new V({props:{title:"window mockup with border",$$slots:{html:[G],default:[U]},$$scope:{ctx:i}}}),s=new V({props:{title:"window mockup with background color",$$slots:{html:[L],default:[J]},$$scope:{ctx:i}}}),{c(){$(e.$$.fragment),o=D(),$(l.$$.fragment),a=D(),$(s.$$.fragment)},l(t){h(e.$$.fragment,t),o=I(t),h(l.$$.fragment,t),a=I(t),h(s.$$.fragment,t)},m(t,n){v(e,t,n),u(t,o,n),v(l,t,n),u(t,a,n),v(s,t,n),r=!0},p(t,n){const E={};n&5&&(E.$$scope={dirty:n,ctx:t}),l.$set(E);const C={};n&5&&(C.$$scope={dirty:n,ctx:t}),s.$set(C)},i(t){r||(b(e.$$.fragment,t),b(l.$$.fragment,t),b(s.$$.fragment,t),r=!0)},o(t){w(e.$$.fragment,t),w(l.$$.fragment,t),w(s.$$.fragment,t),r=!1},d(t){g(e,t),t&&c(o),g(l,t),t&&c(a),g(s,t)}}}function O(i){let e,o;const l=[i[1],M];let a={$$slots:{default:[N]},$$scope:{ctx:i}};for(let s=0;s<l.length;s+=1)a=y(a,l[s]);return e=new F({props:a}),{c(){$(e.$$.fragment)},l(s){h(e.$$.fragment,s)},m(s,r){v(e,s,r),o=!0},p(s,[r]){const t=r&2?A(l,[r&2&&H(s[1]),r&0&&H(M)]):{};r&5&&(t.$$scope={dirty:r,ctx:s}),e.$set(t)},i(s){o||(b(e.$$.fragment,s),o=!0)},o(s){w(e.$$.fragment,s),o=!1},d(s){g(e,s)}}}const M={title:"Window mockup",desc:"Window mockup shows a box that looks like an operating system window.",published:!0};function Q(i,e,o){let l;return B(i,K,a=>o(0,l=a)),i.$$set=a=>{o(1,e=y(y({},e),j(a)))},e=j(e),[l,e]}class re extends S{constructor(e){super();W(this,e,Q,O,z,{})}}export{re as default,M as metadata};
