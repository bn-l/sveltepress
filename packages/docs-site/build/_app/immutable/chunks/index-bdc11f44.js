function $(){}const ut=t=>t;function ot(t,e){for(const n in e)t[n]=e[n];return t}function at(t){return t&&typeof t=="object"&&typeof t.then=="function"}function U(t){return t()}function G(){return Object.create(null)}function w(t){t.forEach(U)}function q(t){return typeof t=="function"}function qt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function ft(t){return Object.keys(t).length===0}function _t(t,...e){if(t==null)return $;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Ft(t,e,n){t.$$.on_destroy.push(_t(e,n))}function Ht(t,e,n,r){if(t){const i=W(t,e,n,r);return t[0](i)}}function W(t,e,n,r){return t[1]&&r?ot(n.ctx.slice(),t[1](r(e))):n.ctx}function It(t,e,n,r){if(t[2]&&r){const i=t[2](r(n));if(e.dirty===void 0)return i;if(typeof i=="object"){const o=[],c=Math.max(e.dirty.length,i.length);for(let s=0;s<c;s+=1)o[s]=e.dirty[s]|i[s];return o}return e.dirty|i}return e.dirty}function Gt(t,e,n,r,i,o){if(i){const c=W(e,n,r,o);t.p(c,i)}}function Jt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}function Kt(t){const e={};for(const n in t)e[n]=!0;return e}const V=typeof window<"u";let dt=V?()=>window.performance.now():()=>Date.now(),F=V?t=>requestAnimationFrame(t):$;const x=new Set;function X(t){x.forEach(e=>{e.c(t)||(x.delete(e),e.f())}),x.size!==0&&F(X)}function ht(t){let e;return x.size===0&&F(X),{promise:new Promise(n=>{x.add(e={c:t,f:n})}),abort(){x.delete(e)}}}let D=!1;function mt(){D=!0}function pt(){D=!1}function yt(t,e,n,r){for(;t<e;){const i=t+(e-t>>1);n(i)<=r?t=i+1:e=i}return t}function gt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let u=0;u<e.length;u++){const f=e[u];f.claim_order!==void 0&&l.push(f)}e=l}const n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let i=0;for(let l=0;l<e.length;l++){const u=e[l].claim_order,f=(i>0&&e[n[i]].claim_order<=u?i+1:yt(1,i,d=>e[n[d]].claim_order,u))-1;r[l]=n[f]+1;const a=f+1;n[a]=l,i=Math.max(a,i)}const o=[],c=[];let s=e.length-1;for(let l=n[i]+1;l!=0;l=r[l-1]){for(o.push(e[l-1]);s>=l;s--)c.push(e[s]);s--}for(;s>=0;s--)c.push(e[s]);o.reverse(),c.sort((l,u)=>l.claim_order-u.claim_order);for(let l=0,u=0;l<c.length;l++){for(;u<o.length&&c[l].claim_order>=o[u].claim_order;)u++;const f=u<o.length?o[u]:null;t.insertBefore(c[l],f)}}function bt(t,e){t.appendChild(e)}function Y(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function xt(t){const e=tt("style");return $t(Y(t),e),e.sheet}function $t(t,e){return bt(t.head||t,e),e.sheet}function wt(t,e){if(D){for(gt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Qt(t,e,n){D&&!n?wt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function Z(t){t.parentNode&&t.parentNode.removeChild(t)}function tt(t){return document.createElement(t)}function vt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function H(t){return document.createTextNode(t)}function Ut(){return H(" ")}function Wt(){return H("")}function Vt(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function Xt(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function Yt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function kt(t){return Array.from(t.childNodes)}function Et(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function et(t,e,n,r,i=!1){Et(t);const o=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const s=t[c];if(e(s)){const l=n(s);return l===void 0?t.splice(c,1):t[c]=l,i||(t.claim_info.last_index=c),s}}for(let c=t.claim_info.last_index-1;c>=0;c--){const s=t[c];if(e(s)){const l=n(s);return l===void 0?t.splice(c,1):t[c]=l,i?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,s}}return r()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function nt(t,e,n,r){return et(t,i=>i.nodeName===e,i=>{const o=[];for(let c=0;c<i.attributes.length;c++){const s=i.attributes[c];n[s.name]||o.push(s.name)}o.forEach(c=>i.removeAttribute(c))},()=>r(e))}function Zt(t,e,n){return nt(t,e,n,tt)}function te(t,e,n){return nt(t,e,n,vt)}function Nt(t,e){return et(t,n=>n.nodeType===3,n=>{const r=""+e;if(n.data.startsWith(r)){if(n.data.length!==r.length)return n.splitText(r.length)}else n.data=r},()=>H(e),!0)}function ee(t){return Nt(t," ")}function ne(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function re(t,e,n,r){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function rt(t,e,{bubbles:n=!1,cancelable:r=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,r,e),i}function ie(t,e){return new t(e)}const j=new Map;let M=0;function At(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Ct(t,e){const n={stylesheet:xt(e),rules:{}};return j.set(t,n),n}function J(t,e,n,r,i,o,c,s=0){const l=16.666/r;let u=`{
`;for(let g=0;g<=1;g+=l){const b=e+(n-e)*o(g);u+=g*100+`%{${c(b,1-b)}}
`}const f=u+`100% {${c(n,1-n)}}
}`,a=`__svelte_${At(f)}_${s}`,d=Y(t),{stylesheet:_,rules:h}=j.get(d)||Ct(d,t);h[a]||(h[a]=!0,_.insertRule(`@keyframes ${a} ${f}`,_.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${a} ${r}ms linear ${i}ms 1 both`,M+=1,a}function St(t,e){const n=(t.style.animation||"").split(", "),r=n.filter(e?o=>o.indexOf(e)<0:o=>o.indexOf("__svelte")===-1),i=n.length-r.length;i&&(t.style.animation=r.join(", "),M-=i,M||jt())}function jt(){F(()=>{M||(j.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&Z(e)}),j.clear())})}let E;function p(t){E=t}function O(){if(!E)throw new Error("Function called outside component initialization");return E}function ce(t){O().$$.on_mount.push(t)}function se(t){O().$$.after_update.push(t)}function le(){const t=O();return(e,n,{cancelable:r=!1}={})=>{const i=t.$$.callbacks[e];if(i){const o=rt(e,n,{cancelable:r});return i.slice().forEach(c=>{c.call(t,o)}),!o.defaultPrevented}return!0}}const k=[],K=[],C=[],Q=[],it=Promise.resolve();let L=!1;function ct(){L||(L=!0,it.then(I))}function ue(){return ct(),it}function P(t){C.push(t)}const z=new Set;let A=0;function I(){const t=E;do{for(;A<k.length;){const e=k[A];A++,p(e),Mt(e.$$)}for(p(null),k.length=0,A=0;K.length;)K.pop()();for(let e=0;e<C.length;e+=1){const n=C[e];z.has(n)||(z.add(n),n())}C.length=0}while(k.length);for(;Q.length;)Q.pop()();L=!1,z.clear(),p(t)}function Mt(t){if(t.fragment!==null){t.update(),w(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(P)}}let v;function Pt(){return v||(v=Promise.resolve(),v.then(()=>{v=null})),v}function B(t,e,n){t.dispatchEvent(rt(`${e?"intro":"outro"}${n}`))}const S=new Set;let y;function Dt(){y={r:0,c:[],p:y}}function Ot(){y.r||w(y.c),y=y.p}function st(t,e){t&&t.i&&(S.delete(t),t.i(e))}function Rt(t,e,n,r){if(t&&t.o){if(S.has(t))return;S.add(t),y.c.push(()=>{S.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}const Tt={duration:0};function oe(t,e,n,r){const i={direction:"both"};let o=e(t,n,i),c=r?0:1,s=null,l=null,u=null;function f(){u&&St(t,u)}function a(_,h){const m=_.b-c;return h*=Math.abs(m),{a:c,b:_.b,d:m,duration:h,start:_.start,end:_.start+h,group:_.group}}function d(_){const{delay:h=0,duration:m=300,easing:g=ut,tick:b=$,css:R}=o||Tt,T={start:dt()+h,b:_};_||(T.group=y,y.r+=1),s||l?l=T:(R&&(f(),u=J(t,c,_,m,h,g,R)),_&&b(0,1),s=a(T,m),P(()=>B(t,_,"start")),ht(N=>{if(l&&N>l.start&&(s=a(l,m),l=null,B(t,s.b,"start"),R&&(f(),u=J(t,c,s.b,s.duration,0,g,o.css))),s){if(N>=s.end)b(c=s.b,1-c),B(t,s.b,"end"),l||(s.b?f():--s.group.r||w(s.group.c)),s=null;else if(N>=s.start){const lt=N-s.start;c=s.a+s.d*g(lt/s.duration),b(c,1-c)}}return!!(s||l)}))}return{run(_){q(o)?Pt().then(()=>{o=o(i),d(_)}):d(_)},end(){f(),s=l=null}}}function ae(t,e){const n=e.token={};function r(i,o,c,s){if(e.token!==n)return;e.resolved=s;let l=e.ctx;c!==void 0&&(l=l.slice(),l[c]=s);const u=i&&(e.current=i)(l);let f=!1;e.block&&(e.blocks?e.blocks.forEach((a,d)=>{d!==o&&a&&(Dt(),Rt(a,1,1,()=>{e.blocks[d]===a&&(e.blocks[d]=null)}),Ot())}):e.block.d(1),u.c(),st(u,1),u.m(e.mount(),e.anchor),f=!0),e.block=u,e.blocks&&(e.blocks[o]=u),f&&I()}if(at(t)){const i=O();if(t.then(o=>{p(i),r(e.then,1,e.value,o),p(null)},o=>{if(p(i),r(e.catch,2,e.error,o),p(null),!e.hasCatch)throw o}),e.current!==e.pending)return r(e.pending,0),!0}else{if(e.current!==e.then)return r(e.then,1,e.value,t),!0;e.resolved=t}}function fe(t,e,n){const r=e.slice(),{resolved:i}=t;t.current===t.then&&(r[t.value]=i),t.current===t.catch&&(r[t.error]=i),t.block.p(r,n)}function _e(t){t&&t.c()}function de(t,e){t&&t.l(e)}function zt(t,e,n,r){const{fragment:i,after_update:o}=t.$$;i&&i.m(e,n),r||P(()=>{const c=t.$$.on_mount.map(U).filter(q);t.$$.on_destroy?t.$$.on_destroy.push(...c):w(c),t.$$.on_mount=[]}),o.forEach(P)}function Bt(t,e){const n=t.$$;n.fragment!==null&&(w(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Lt(t,e){t.$$.dirty[0]===-1&&(k.push(t),ct(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function he(t,e,n,r,i,o,c,s=[-1]){const l=E;p(t);const u=t.$$={fragment:null,ctx:[],props:o,update:$,not_equal:i,bound:G(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:G(),dirty:s,skip_bound:!1,root:e.target||l.$$.root};c&&c(u.root);let f=!1;if(u.ctx=n?n(t,e.props||{},(a,d,..._)=>{const h=_.length?_[0]:d;return u.ctx&&i(u.ctx[a],u.ctx[a]=h)&&(!u.skip_bound&&u.bound[a]&&u.bound[a](h),f&&Lt(t,a)),d}):[],u.update(),f=!0,w(u.before_update),u.fragment=r?r(u.ctx):!1,e.target){if(e.hydrate){mt();const a=kt(e.target);u.fragment&&u.fragment.l(a),a.forEach(Z)}else u.fragment&&u.fragment.c();e.intro&&st(t.$$.fragment),zt(t,e.target,e.anchor,e.customElement),pt(),I()}p(l)}class me{$destroy(){Bt(this,1),this.$destroy=$}$on(e,n){if(!q(n))return $;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const i=r.indexOf(n);i!==-1&&r.splice(i,1)}}$set(e){this.$$set&&!ft(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{ue as A,$ as B,wt as C,Ht as D,Gt as E,Jt as F,It as G,Ft as H,ae as I,vt as J,te as K,fe as L,Vt as M,Xt as N,w as O,Kt as P,le as Q,P as R,me as S,oe as T,K as U,Ut as a,Qt as b,ee as c,Ot as d,Wt as e,st as f,Dt as g,Z as h,he as i,se as j,tt as k,Zt as l,kt as m,Yt as n,ce as o,re as p,H as q,Nt as r,qt as s,Rt as t,ne as u,ie as v,_e as w,de as x,zt as y,Bt as z};