import{c as qt,r as L,j as y,h as mt,W as Lt,a as ue,k as Ut,b as at,g as le,am as fe,aq as de,P as xt,ar as me,an as pe,aw as ge,aj as xe,V as he,t as ye,ak as be}from"./index-CCD08qCO.js";import{H as Se,S as ve}from"./HeartFavorite-D4dxQWks.js";import{B as je}from"./badge-A_e_ZkDe.js";import{C as Ne,a as we}from"./circle-plus-CsbwOfN2.js";/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ee=qt("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ce=qt("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);function Le(t){return Object.prototype.toString.call(t)==="[object Object]"}function Vt(t){return Le(t)||Array.isArray(t)}function Pe(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function Pt(t,e){const n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;const i=JSON.stringify(Object.keys(t.breakpoints||{})),o=JSON.stringify(Object.keys(e.breakpoints||{}));return i!==o?!1:n.every(s=>{const a=t[s],c=e[s];return typeof a=="function"?`${a}`==`${c}`:!Vt(a)||!Vt(c)?a===c:Pt(a,c)})}function Ht(t){return t.concat().sort((e,n)=>e.name>n.name?1:-1).map(e=>e.options)}function Ae(t,e){if(t.length!==e.length)return!1;const n=Ht(t),r=Ht(e);return n.every((i,o)=>{const s=r[o];return Pt(i,s)})}function At(t){return typeof t=="number"}function Et(t){return typeof t=="string"}function It(t){return typeof t=="boolean"}function Gt(t){return Object.prototype.toString.call(t)==="[object Object]"}function I(t){return Math.abs(t)}function Dt(t){return Math.sign(t)}function ut(t,e){return I(t-e)}function Ie(t,e){if(t===0||e===0||I(t)<=I(e))return 0;const n=ut(I(t),I(e));return I(n/t)}function lt(t){return ft(t).map(Number)}function $(t){return t[pt(t)]}function pt(t){return Math.max(0,t.length-1)}function Tt(t,e){return e===pt(t)}function $t(t,e=0){return Array.from(Array(t),(n,r)=>e+r)}function ft(t){return Object.keys(t)}function Kt(t,e){return[t,e].reduce((n,r)=>(ft(r).forEach(i=>{const o=n[i],s=r[i],a=Gt(o)&&Gt(s);n[i]=a?Kt(o,s):s}),n),{})}function Ct(t,e){return typeof e.MouseEvent<"u"&&t instanceof e.MouseEvent}function De(t,e){const n={start:r,center:i,end:o};function r(){return 0}function i(c){return o(c)/2}function o(c){return e-c}function s(c,u){return Et(t)?n[t](c):t(e,c,u)}return{measure:s}}function dt(){let t=[];function e(i,o,s,a={passive:!0}){let c;if("addEventListener"in i)i.addEventListener(o,s,a),c=()=>i.removeEventListener(o,s,a);else{const u=i;u.addListener(s),c=()=>u.removeListener(s)}return t.push(c),r}function n(){t=t.filter(i=>i())}const r={add:e,clear:n};return r}function Te(t,e,n,r){const i=dt(),o=1e3/60;let s=null,a=0,c=0;function u(){i.add(t,"visibilitychange",()=>{t.hidden&&d()})}function h(){v(),i.clear()}function l(x){if(!c)return;s||(s=x);const f=x-s;for(s=x,a+=f;a>=o;)n(),a-=o;const p=I(a/o);r(p),c&&e.requestAnimationFrame(l)}function g(){c||(c=e.requestAnimationFrame(l))}function v(){e.cancelAnimationFrame(c),s=null,a=0,c=0}function d(){s=null,a=0}return{init:u,destroy:h,start:g,stop:v,update:n,render:r}}function ke(t,e){const n=e==="rtl",r=t==="y",i=r?"y":"x",o=r?"x":"y",s=!r&&n?-1:1,a=h(),c=l();function u(d){const{height:m,width:x}=d;return r?m:x}function h(){return r?"top":n?"right":"left"}function l(){return r?"bottom":n?"left":"right"}function g(d){return d*s}return{scroll:i,cross:o,startEdge:a,endEdge:c,measureSize:u,direction:g}}function st(t=0,e=0){const n=I(t-e);function r(u){return u<t}function i(u){return u>e}function o(u){return r(u)||i(u)}function s(u){return o(u)?r(u)?t:e:u}function a(u){return n?u-n*Math.ceil((u-e)/n):u}return{length:n,max:e,min:t,constrain:s,reachedAny:o,reachedMax:i,reachedMin:r,removeOffset:a}}function Qt(t,e,n){const{constrain:r}=st(0,t),i=t+1;let o=s(e);function s(g){return n?I((i+g)%i):r(g)}function a(){return o}function c(g){return o=s(g),l}function u(g){return h().set(a()+g)}function h(){return Qt(t,a(),n)}const l={get:a,set:c,add:u,clone:h};return l}function Oe(t,e,n,r,i,o,s,a,c,u,h,l,g,v,d,m,x,f,p){const{cross:S,direction:N}=t,E=["INPUT","SELECT","TEXTAREA"],D={passive:!1},j=dt(),w=dt(),P=st(50,225).constrain(v.measure(20)),A={mouse:300,touch:400},k={mouse:500,touch:600},z=d?43:25;let Y=!1,R=0,K=0,W=!1,Q=!1,Z=!1,J=!1;function tt(b){if(!p)return;function C(M){(It(p)||p(b,M))&&B(M)}const O=e;j.add(O,"dragstart",M=>M.preventDefault(),D).add(O,"touchmove",()=>{},D).add(O,"touchend",()=>{}).add(O,"touchstart",C).add(O,"mousedown",C).add(O,"touchcancel",F).add(O,"contextmenu",F).add(O,"click",ot,!0)}function X(){j.clear(),w.clear()}function rt(){const b=J?n:e;w.add(b,"touchmove",q,D).add(b,"touchend",F).add(b,"mousemove",q,D).add(b,"mouseup",F)}function _(b){const C=b.nodeName||"";return E.includes(C)}function it(){return(d?k:A)[J?"mouse":"touch"]}function ct(b,C){const O=l.add(Dt(b)*-1),M=h.byDistance(b,!d).distance;return d||I(b)<P?M:x&&C?M*.5:h.byIndex(O.get(),0).distance}function B(b){const C=Ct(b,r);J=C,Z=d&&C&&!b.buttons&&Y,Y=ut(i.get(),s.get())>=2,!(C&&b.button!==0)&&(_(b.target)||(W=!0,o.pointerDown(b),u.useFriction(0).useDuration(0),i.set(s),rt(),R=o.readPoint(b),K=o.readPoint(b,S),g.emit("pointerDown")))}function q(b){if(!Ct(b,r)&&b.touches.length>=2)return F(b);const O=o.readPoint(b),M=o.readPoint(b,S),U=ut(O,R),H=ut(M,K);if(!Q&&!J&&(!b.cancelable||(Q=U>H,!Q)))return F(b);const G=o.pointerMove(b);U>m&&(Z=!0),u.useFriction(.3).useDuration(1),a.start(),i.add(N(G)),b.preventDefault()}function F(b){const O=h.byDistance(0,!1).index!==l.get(),M=o.pointerUp(b)*it(),U=ct(N(M),O),H=Ie(M,U),G=z-10*H,et=f+H/50;Q=!1,W=!1,w.clear(),u.useDuration(G).useFriction(et),c.distance(U,!d),J=!1,g.emit("pointerUp")}function ot(b){Z&&(b.stopPropagation(),b.preventDefault(),Z=!1)}function V(){return W}return{init:tt,pointerDown:V,destroy:X}}function Me(t,e){let r,i;function o(l){return l.timeStamp}function s(l,g){const d=`client${(g||t.scroll)==="x"?"X":"Y"}`;return(Ct(l,e)?l:l.touches[0])[d]}function a(l){return r=l,i=l,s(l)}function c(l){const g=s(l)-s(i),v=o(l)-o(r)>170;return i=l,v&&(r=l),g}function u(l){if(!r||!i)return 0;const g=s(i)-s(r),v=o(l)-o(r),d=o(l)-o(i)>170,m=g/v;return v&&!d&&I(m)>.1?m:0}return{pointerDown:a,pointerMove:c,pointerUp:u,readPoint:s}}function Fe(){function t(n){const{offsetTop:r,offsetLeft:i,offsetWidth:o,offsetHeight:s}=n;return{top:r,right:i+o,bottom:r+s,left:i,width:o,height:s}}return{measure:t}}function ze(t){function e(r){return t*(r/100)}return{measure:e}}function Be(t,e,n,r,i,o,s){let a,c,u=[],h=!1;function l(m){return i.measureSize(s.measure(m))}function g(m){if(!o)return;c=l(t),u=r.map(l);function x(p){for(const S of p){const N=S.target===t,E=r.indexOf(S.target),D=N?c:u[E],j=l(N?t:r[E]);if(I(j-D)>=.5){n.requestAnimationFrame(()=>{m.reInit(),e.emit("resize")});break}}}a=new ResizeObserver(p=>{h||(It(o)||o(m,p))&&x(p)}),[t].concat(r).forEach(p=>a.observe(p))}function v(){a&&a.disconnect(),h=!0}return{init:g,destroy:v}}function Re(t,e,n,r,i){let o=0,s=0,a=r,c=i,u=t.get(),h=0;function l(){const E=n.get()-t.get(),D=!a;let j=0;return D?(o=0,t.set(n),j=E):(o+=E/a,o*=c,u+=o,t.add(o),j=u-h),s=Dt(j),h=u,N}function g(){const E=n.get()-e.get();return I(E)<.001}function v(){return a}function d(){return s}function m(){return o}function x(){return p(r)}function f(){return S(i)}function p(E){return a=E,N}function S(E){return c=E,N}const N={direction:d,duration:v,velocity:m,seek:l,settled:g,useBaseFriction:f,useBaseDuration:x,useFriction:S,useDuration:p};return N}function Ve(t,e,n,r,i){const o=i.measure(10),s=i.measure(50),a=st(.1,.99);let c=!1;function u(){return!(c||!t.reachedAny(n.get())||!t.reachedAny(e.get()))}function h(v){if(!u())return;const d=t.reachedMin(e.get())?"min":"max",m=I(t[d]-e.get()),x=n.get()-e.get(),f=a.constrain(m/s);n.subtract(x*f),!v&&I(x)<o&&(n.set(t.constrain(n.get())),r.useDuration(25).useBaseFriction())}function l(v){c=!v}return{constrain:h,toggleActive:l}}function He(t,e,n,r,i){const o=st(-e+t,0),s=l(),a=h(),c=g();function u(d,m){return ut(d,m)<1}function h(){const d=s[0],m=$(s),x=s.lastIndexOf(d),f=s.indexOf(m)+1;return st(x,f)}function l(){return n.map((d,m)=>{const{min:x,max:f}=o,p=o.constrain(d),S=!m,N=Tt(n,m);return S?f:N||u(x,p)?x:u(f,p)?f:p}).map(d=>parseFloat(d.toFixed(3)))}function g(){if(e<=t+i)return[o.max];if(r==="keepSnaps")return s;const{min:d,max:m}=a;return s.slice(d,m)}return{snapsContained:c,scrollContainLimit:a}}function Ge(t,e,n){const r=e[0],i=n?r-t:$(e);return{limit:st(i,r)}}function $e(t,e,n,r){const o=e.min+.1,s=e.max+.1,{reachedMin:a,reachedMax:c}=st(o,s);function u(g){return g===1?c(n.get()):g===-1?a(n.get()):!1}function h(g){if(!u(g))return;const v=t*(g*-1);r.forEach(d=>d.add(v))}return{loop:h}}function qe(t){const{max:e,length:n}=t;function r(o){const s=o-e;return n?s/-n:0}return{get:r}}function Ue(t,e,n,r,i){const{startEdge:o,endEdge:s}=t,{groupSlides:a}=i,c=l().map(e.measure),u=g(),h=v();function l(){return a(r).map(m=>$(m)[s]-m[0][o]).map(I)}function g(){return r.map(m=>n[o]-m[o]).map(m=>-I(m))}function v(){return a(u).map(m=>m[0]).map((m,x)=>m+c[x])}return{snaps:u,snapsAligned:h}}function Ke(t,e,n,r,i,o){const{groupSlides:s}=i,{min:a,max:c}=r,u=h();function h(){const g=s(o),v=!t||e==="keepSnaps";return n.length===1?[o]:v?g:g.slice(a,c).map((d,m,x)=>{const f=!m,p=Tt(x,m);if(f){const S=$(x[0])+1;return $t(S)}if(p){const S=pt(o)-$(x)[0]+1;return $t(S,$(x)[0])}return d})}return{slideRegistry:u}}function Qe(t,e,n,r,i){const{reachedAny:o,removeOffset:s,constrain:a}=r;function c(d){return d.concat().sort((m,x)=>I(m)-I(x))[0]}function u(d){const m=t?s(d):a(d),x=e.map((p,S)=>({diff:h(p-m,0),index:S})).sort((p,S)=>I(p.diff)-I(S.diff)),{index:f}=x[0];return{index:f,distance:m}}function h(d,m){const x=[d,d+n,d-n];if(!t)return x[0];if(!m)return c(x);const f=x.filter(p=>Dt(p)===m);return f.length?c(f):$(x)-n}function l(d,m){const x=e[d]-i.get(),f=h(x,m);return{index:d,distance:f}}function g(d,m){const x=i.get()+d,{index:f,distance:p}=u(x),S=!t&&o(x);if(!m||S)return{index:f,distance:d};const N=e[f]-p,E=d+h(N,0);return{index:f,distance:E}}return{byDistance:g,byIndex:l,shortcut:h}}function Je(t,e,n,r,i,o,s){function a(l){const g=l.distance,v=l.index!==e.get();o.add(g),g&&(r.duration()?t.start():(t.update(),t.render(1),t.update())),v&&(n.set(e.get()),e.set(l.index),s.emit("select"))}function c(l,g){const v=i.byDistance(l,g);a(v)}function u(l,g){const v=e.clone().set(l),d=i.byIndex(v.get(),g);a(d)}return{distance:c,index:u}}function Xe(t,e,n,r,i,o){let s=0;function a(){o.add(document,"keydown",c,!1),e.forEach(u)}function c(l){l.code==="Tab"&&(s=new Date().getTime())}function u(l){const g=()=>{if(new Date().getTime()-s>10)return;t.scrollLeft=0;const m=e.indexOf(l),x=n.findIndex(f=>f.includes(m));At(x)&&(i.useDuration(0),r.index(x,0))};o.add(l,"focus",g,{passive:!0,capture:!0})}return{init:a}}function ht(t){let e=t;function n(){return e}function r(c){e=s(c)}function i(c){e+=s(c)}function o(c){e-=s(c)}function s(c){return At(c)?c:c.get()}return{get:n,set:r,add:i,subtract:o}}function Jt(t,e){const n=t.scroll==="x"?o:s,r=e.style;let i=!1;function o(l){return`translate3d(${l}px,0px,0px)`}function s(l){return`translate3d(0px,${l}px,0px)`}function a(l){i||(r.transform=n(t.direction(l)))}function c(l){i=!l}function u(){i||(r.transform="",e.getAttribute("style")||e.removeAttribute("style"))}return{clear:u,to:a,toggleActive:c}}function _e(t,e,n,r,i,o,s,a,c){const h=lt(i),l=lt(i).reverse(),g=f().concat(p());function v(j,w){return j.reduce((P,A)=>P-i[A],w)}function d(j,w){return j.reduce((P,A)=>v(P,w)>0?P.concat([A]):P,[])}function m(j){return o.map((w,P)=>({start:w-r[P]+.5+j,end:w+e-.5+j}))}function x(j,w,P){const A=m(w);return j.map(k=>{const z=P?0:-n,Y=P?n:0,R=P?"end":"start",K=A[k][R];return{index:k,loopPoint:K,slideLocation:ht(-1),translate:Jt(t,c[k]),target:()=>a.get()>K?z:Y}})}function f(){const j=s[0],w=d(l,j);return x(w,n,!1)}function p(){const j=e-s[0]-1,w=d(h,j);return x(w,-n,!0)}function S(){return g.every(({index:j})=>{const w=h.filter(P=>P!==j);return v(w,e)<=.1})}function N(){g.forEach(j=>{const{target:w,translate:P,slideLocation:A}=j,k=w();k!==A.get()&&(P.to(k),A.set(k))})}function E(){g.forEach(j=>j.translate.clear())}return{canLoop:S,clear:E,loop:N,loopPoints:g}}function Ye(t,e,n){let r,i=!1;function o(c){if(!n)return;function u(h){for(const l of h)if(l.type==="childList"){c.reInit(),e.emit("slidesChanged");break}}r=new MutationObserver(h=>{i||(It(n)||n(c,h))&&u(h)}),r.observe(t,{childList:!0})}function s(){r&&r.disconnect(),i=!0}return{init:o,destroy:s}}function Ze(t,e,n,r){const i={};let o=null,s=null,a,c=!1;function u(){a=new IntersectionObserver(d=>{c||(d.forEach(m=>{const x=e.indexOf(m.target);i[x]=m}),o=null,s=null,n.emit("slidesInView"))},{root:t.parentElement,threshold:r}),e.forEach(d=>a.observe(d))}function h(){a&&a.disconnect(),c=!0}function l(d){return ft(i).reduce((m,x)=>{const f=parseInt(x),{isIntersecting:p}=i[f];return(d&&p||!d&&!p)&&m.push(f),m},[])}function g(d=!0){if(d&&o)return o;if(!d&&s)return s;const m=l(d);return d&&(o=m),d||(s=m),m}return{init:u,destroy:h,get:g}}function We(t,e,n,r,i,o){const{measureSize:s,startEdge:a,endEdge:c}=t,u=n[0]&&i,h=d(),l=m(),g=n.map(s),v=x();function d(){if(!u)return 0;const p=n[0];return I(e[a]-p[a])}function m(){if(!u)return 0;const p=o.getComputedStyle($(r));return parseFloat(p.getPropertyValue(`margin-${c}`))}function x(){return n.map((p,S,N)=>{const E=!S,D=Tt(N,S);return E?g[S]+h:D?g[S]+l:N[S+1][a]-p[a]}).map(I)}return{slideSizes:g,slideSizesWithGaps:v,startGap:h,endGap:l}}function tn(t,e,n,r,i,o,s,a,c){const{startEdge:u,endEdge:h,direction:l}=t,g=At(n);function v(f,p){return lt(f).filter(S=>S%p===0).map(S=>f.slice(S,S+p))}function d(f){return f.length?lt(f).reduce((p,S,N)=>{const E=$(p)||0,D=E===0,j=S===pt(f),w=i[u]-o[E][u],P=i[u]-o[S][h],A=!r&&D?l(s):0,k=!r&&j?l(a):0,z=I(P-k-(w+A));return N&&z>e+c&&p.push(S),j&&p.push(f.length),p},[]).map((p,S,N)=>{const E=Math.max(N[S-1]||0);return f.slice(E,p)}):[]}function m(f){return g?v(f,n):d(f)}return{groupSlides:m}}function en(t,e,n,r,i,o,s){const{align:a,axis:c,direction:u,startIndex:h,loop:l,duration:g,dragFree:v,dragThreshold:d,inViewThreshold:m,slidesToScroll:x,skipSnaps:f,containScroll:p,watchResize:S,watchSlides:N,watchDrag:E}=o,D=2,j=Fe(),w=j.measure(e),P=n.map(j.measure),A=ke(c,u),k=A.measureSize(w),z=ze(k),Y=De(a,k),R=!l&&!!p,K=l||!!p,{slideSizes:W,slideSizesWithGaps:Q,startGap:Z,endGap:J}=We(A,w,P,n,K,i),tt=tn(A,k,x,l,w,P,Z,J,D),{snaps:X,snapsAligned:rt}=Ue(A,Y,w,P,tt),_=-$(X)+$(Q),{snapsContained:it,scrollContainLimit:ct}=He(k,_,rt,p,D),B=R?it:rt,{limit:q}=Ge(_,B,l),F=Qt(pt(B),h,l),ot=F.clone(),V=lt(n),T=({dragHandler:nt,scrollBody:Nt,scrollBounds:wt,options:{loop:gt}})=>{gt||wt.constrain(nt.pointerDown()),Nt.seek()},b=({scrollBody:nt,translate:Nt,location:wt,offsetLocation:gt,scrollLooper:se,slideLooper:re,dragHandler:oe,animation:ie,eventHandler:zt,options:{loop:ce}},ae)=>{const Bt=nt.velocity(),Rt=nt.settled();Rt&&!oe.pointerDown()&&(ie.stop(),zt.emit("settle")),Rt||zt.emit("scroll"),gt.set(wt.get()-Bt+Bt*ae),ce&&(se.loop(nt.direction()),re.loop()),Nt.to(gt.get())},C=Te(r,i,()=>T(jt),nt=>b(jt,nt)),O=.68,M=B[F.get()],U=ht(M),H=ht(M),G=ht(M),et=Re(U,H,G,g,O),St=Qe(l,B,_,q,G),vt=Je(C,F,ot,et,St,G,s),Ot=qe(q),Mt=dt(),ee=Ze(e,n,s,m),{slideRegistry:Ft}=Ke(R,p,B,ct,tt,V),ne=Xe(t,n,Ft,vt,et,Mt),jt={ownerDocument:r,ownerWindow:i,eventHandler:s,containerRect:w,slideRects:P,animation:C,axis:A,dragHandler:Oe(A,t,r,i,G,Me(A,i),U,C,vt,et,St,F,s,z,v,d,f,O,E),eventStore:Mt,percentOfView:z,index:F,indexPrevious:ot,limit:q,location:U,offsetLocation:H,options:o,resizeHandler:Be(e,s,i,n,A,S,j),scrollBody:et,scrollBounds:Ve(q,H,G,et,z),scrollLooper:$e(_,q,H,[U,H,G]),scrollProgress:Ot,scrollSnapList:B.map(Ot.get),scrollSnaps:B,scrollTarget:St,scrollTo:vt,slideLooper:_e(A,k,_,W,Q,X,B,H,n),slideFocus:ne,slidesHandler:Ye(e,s,N),slidesInView:ee,slideIndexes:V,slideRegistry:Ft,slidesToScroll:tt,target:G,translate:Jt(A,e)};return jt}function nn(){const t={};let e;function n(c){e=c}function r(c){return t[c]||[]}function i(c){return r(c).forEach(u=>u(e,c)),a}function o(c,u){return t[c]=r(c).concat([u]),a}function s(c,u){return t[c]=r(c).filter(h=>h!==u),a}const a={init:n,emit:i,off:s,on:o};return a}const sn={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0};function rn(t){function e(o,s){return Kt(o,s||{})}function n(o){const s=o.breakpoints||{},a=ft(s).filter(c=>t.matchMedia(c).matches).map(c=>s[c]).reduce((c,u)=>e(c,u),{});return e(o,a)}function r(o){return o.map(s=>ft(s.breakpoints||{})).reduce((s,a)=>s.concat(a),[]).map(t.matchMedia)}return{mergeOptions:e,optionsAtMedia:n,optionsMediaQueries:r}}function on(t){let e=[];function n(o,s){return e=s.filter(({options:a})=>t.optionsAtMedia(a).active!==!1),e.forEach(a=>a.init(o,t)),s.reduce((a,c)=>Object.assign(a,{[c.name]:c}),{})}function r(){e=e.filter(o=>o.destroy())}return{init:n,destroy:r}}function yt(t,e,n){const r=t.ownerDocument,i=r.defaultView,o=rn(i),s=on(o),a=dt(),c=nn(),{mergeOptions:u,optionsAtMedia:h,optionsMediaQueries:l}=o,{on:g,off:v,emit:d}=c,m=k;let x=!1,f,p=u(sn,yt.globalOptions),S=u(p),N=[],E,D,j;function w(){const{container:T,slides:b}=S;D=(Et(T)?t.querySelector(T):T)||t.children[0];const O=Et(b)?D.querySelectorAll(b):b;j=[].slice.call(O||D.children)}function P(T){const b=en(t,D,j,r,i,T,c);if(T.loop&&!b.slideLooper.canLoop()){const C=Object.assign({},T,{loop:!1});return P(C)}return b}function A(T,b){x||(p=u(p,T),S=h(p),N=b||N,w(),f=P(S),l([p,...N.map(({options:C})=>C)]).forEach(C=>a.add(C,"change",k)),S.active&&(f.translate.to(f.location.get()),f.animation.init(),f.slidesInView.init(),f.slideFocus.init(),f.eventHandler.init(V),f.resizeHandler.init(V),f.slidesHandler.init(V),f.options.loop&&f.slideLooper.loop(),D.offsetParent&&j.length&&f.dragHandler.init(V),E=s.init(V,N)))}function k(T,b){const C=X();z(),A(u({startIndex:C},T),b),c.emit("reInit")}function z(){f.dragHandler.destroy(),f.eventStore.clear(),f.translate.clear(),f.slideLooper.clear(),f.resizeHandler.destroy(),f.slidesHandler.destroy(),f.slidesInView.destroy(),f.animation.destroy(),s.destroy(),a.clear()}function Y(){x||(x=!0,a.clear(),z(),c.emit("destroy"))}function R(T,b,C){!S.active||x||(f.scrollBody.useBaseFriction().useDuration(b===!0?0:S.duration),f.scrollTo.index(T,C||0))}function K(T){const b=f.index.add(1).get();R(b,T,-1)}function W(T){const b=f.index.add(-1).get();R(b,T,1)}function Q(){return f.index.add(1).get()!==X()}function Z(){return f.index.add(-1).get()!==X()}function J(){return f.scrollSnapList}function tt(){return f.scrollProgress.get(f.location.get())}function X(){return f.index.get()}function rt(){return f.indexPrevious.get()}function _(){return f.slidesInView.get()}function it(){return f.slidesInView.get(!1)}function ct(){return E}function B(){return f}function q(){return t}function F(){return D}function ot(){return j}const V={canScrollNext:Q,canScrollPrev:Z,containerNode:F,internalEngine:B,destroy:Y,off:v,on:g,emit:d,plugins:ct,previousScrollSnap:rt,reInit:m,rootNode:q,scrollNext:K,scrollPrev:W,scrollProgress:tt,scrollSnapList:J,scrollTo:R,selectedScrollSnap:X,slideNodes:ot,slidesInView:_,slidesNotInView:it};return A(e,n),setTimeout(()=>c.emit("init"),0),V}yt.globalOptions=void 0;function kt(t={},e=[]){const n=L.useRef(t),r=L.useRef(e),[i,o]=L.useState(),[s,a]=L.useState(),c=L.useCallback(()=>{i&&i.reInit(n.current,r.current)},[i]);return L.useEffect(()=>{if(Pe()&&s){yt.globalOptions=kt.globalOptions;const u=yt(s,n.current,r.current);return o(u),()=>u.destroy()}else o(void 0)},[s,o]),L.useEffect(()=>{Pt(n.current,t)||(n.current=t,c())},[t,c]),L.useEffect(()=>{Ae(r.current,e)||(r.current=e,c())},[e,c]),[a,i]}kt.globalOptions=void 0;const Xt=L.createContext(null);function bt(){const t=L.useContext(Xt);if(!t)throw new Error("useCarousel must be used within a <Carousel />");return t}const _t=L.forwardRef(({orientation:t="horizontal",opts:e,setApi:n,plugins:r,className:i,children:o,...s},a)=>{const[c,u]=kt({...e,axis:t==="horizontal"?"x":"y"},r),[h,l]=L.useState(!1),[g,v]=L.useState(!1),d=L.useCallback(p=>{p&&(l(p.canScrollPrev()),v(p.canScrollNext()))},[]),m=L.useCallback(()=>{u==null||u.scrollPrev()},[u]),x=L.useCallback(()=>{u==null||u.scrollNext()},[u]),f=L.useCallback(p=>{p.key==="ArrowLeft"?(p.preventDefault(),m()):p.key==="ArrowRight"&&(p.preventDefault(),x())},[m,x]);return L.useEffect(()=>{!u||!n||n(u)},[u,n]),L.useEffect(()=>{if(u)return d(u),u.on("reInit",d),u.on("select",d),()=>{u==null||u.off("select",d)}},[u,d]),y.jsx(Xt.Provider,{value:{carouselRef:c,api:u,opts:e,orientation:t||((e==null?void 0:e.axis)==="y"?"vertical":"horizontal"),scrollPrev:m,scrollNext:x,canScrollPrev:h,canScrollNext:g},children:y.jsx("div",{ref:a,onKeyDownCapture:f,className:mt("relative",i),role:"region","aria-roledescription":"carousel",...s,children:o})})});_t.displayName="Carousel";const Yt=L.forwardRef(({className:t,...e},n)=>{const{carouselRef:r,orientation:i}=bt();return y.jsx("div",{ref:r,className:"overflow-hidden",children:y.jsx("div",{ref:n,className:mt("flex",i==="horizontal"?"-ml-4":"-mt-4 flex-col",t),...e})})});Yt.displayName="CarouselContent";const Zt=L.forwardRef(({className:t,...e},n)=>{const{orientation:r}=bt();return y.jsx("div",{ref:n,role:"group","aria-roledescription":"slide",className:mt("min-w-0 shrink-0 grow-0 basis-full",r==="horizontal"?"pl-4":"pt-4",t),...e})});Zt.displayName="CarouselItem";const Wt=L.forwardRef(({className:t,variant:e="outline",size:n="icon",...r},i)=>{const{orientation:o,scrollPrev:s,canScrollPrev:a}=bt();return y.jsxs(Lt,{ref:i,variant:e,size:n,className:mt("absolute  h-8 w-8 rounded-full",o==="horizontal"?"-left-12 top-1/2 -translate-y-1/2":"-top-12 left-1/2 -translate-x-1/2 rotate-90",t),disabled:!a,onClick:s,...r,children:[y.jsx(Ee,{className:"h-4 w-4"}),y.jsx("span",{className:"sr-only",children:"Previous slide"})]})});Wt.displayName="CarouselPrevious";const te=L.forwardRef(({className:t,variant:e="outline",size:n="icon",...r},i)=>{const{orientation:o,scrollNext:s,canScrollNext:a}=bt();return y.jsxs(Lt,{ref:i,variant:e,size:n,className:mt("absolute h-8 w-8 rounded-full",o==="horizontal"?"-right-12 top-1/2 -translate-y-1/2":"-bottom-12 left-1/2 -translate-x-1/2 rotate-90",t),disabled:!a,onClick:s,...r,children:[y.jsx(Ce,{className:"h-4 w-4"}),y.jsx("span",{className:"sr-only",children:"Next slide"})]})});te.displayName="CarouselNext";const cn=({productMedia:t})=>{const[e,n]=L.useState(t[0]),[r,i]=L.useState(!1),[o,s]=L.useState(null);return y.jsxs("div",{className:"flex flex-col gap-3 max-w-[500px]",children:[y.jsx("img",{src:e,alt:"product",className:"w-96 h-96 rounded-lg shadow-xl object-cover"}),y.jsx("div",{children:y.jsxs(_t,{className:"max-w-[500px]",opts:{align:"start"},children:[y.jsx(Yt,{className:"-ml-1",children:t.map((a,c)=>y.jsx(Zt,{className:"basis-1/4 overflow-hidden rounded-lg",children:y.jsx("img",{src:a,alt:"product",className:`w-20 h-20 rounded-lg object-cover cursor-pointer transition-transform duration-300 ${e===a?"border-2 border-gray-800":""} ${o===c?"scale-110 ":""}`,onMouseEnter:()=>s(c),onMouseLeave:()=>s(null),onClick:()=>n(a)})},c))}),y.jsx(Wt,{}),y.jsx(te,{}),r&&y.jsx("div",{className:"absolute z-50 border-4 rounded-full pointer-events-none border-gray-500",children:y.jsx("img",{src:e,className:"object-cover w-[200px] h-[200px]",alt:"zoomed-product"})})]})})]})},an=({productInfo:t})=>{const e=ue(),n=Ut(),r=at(le),i=at(fe),o=at(de),[s,a]=L.useState(1),c=(t.price*(1-.001*t.discountPercentage)).toFixed(2),u=async()=>{var h;try{if(r){if((h=i==null?void 0:i.carts)==null?void 0:h.some(g=>g.product.id===t.id))return xt("Item already in cart",{icon:"🛒",style:{borderRadius:"10px",background:"#333",color:"#fff"}});await n(me({productId:t.id,quantity:1})),o?xt.error(o):(xt.success("Item added to cart"),await n(pe()))}else{e("/login");return}}catch{xt.error("Something went wrong!")}};return y.jsxs("div",{className:"max-w-[400px] flex flex-col gap-4",children:[y.jsxs("div",{className:"flex justify-between items-center relative ",children:[y.jsx("div",{className:"absolute top-0 right-0 z-10 ",children:y.jsx(Se,{product:t})}),y.jsx("p",{className:"text-heading4-bold ",children:t.title})]}),y.jsxs("div",{className:"flex justify-between items-center",children:[y.jsx("span",{className:"text-body-bold flex flex-nowrap bg-amber-100 rounded-lg",children:y.jsxs(je,{variant:"outline gap-1",children:[t.rating,y.jsx(ve,{className:"text-rose-700 w-4 h-4"})]})}),y.jsxs("span",{className:"text-heading4-bold text-yellow-500",children:[t.discountPercentage,"% off"]})]}),y.jsxs("div",{className:"flex gap-2",children:[y.jsx("p",{className:"text-base-medium text-grey-2",children:"Category:"}),y.jsx("p",{className:"text-base-bold",children:t.category})]}),y.jsxs("p",{className:"flex flex-nowrap gap-1",children:["₹",y.jsx("span",{className:"line-through text-sm opacity-80",children:t.price}),y.jsx("span",{className:"text-heading3-bold",children:c})]}),y.jsxs("div",{className:"flex flex-col gap-2",children:[y.jsx("p",{className:"text-base-medium text-grey-2",children:"Description:"}),y.jsx("p",{className:"text-small-medium text-justify ",children:t.description})]}),t.attributes&&y.jsxs("div",{className:"flex flex-col gap-2",children:[y.jsx("p",{className:"text-base-medium text-grey-2",children:"Attributes:"}),Object.entries(t.attributes).map(([h,l])=>y.jsxs("p",{children:[y.jsx("span",{className:"text-body-bold",children:`${h}:  `}),y.jsxs("span",{className:"text-small-medium",children:[" ",`${l}`]})]},h))]}),y.jsxs("div",{className:"flex flex-col gap-2",children:[y.jsx("p",{className:"text-base-medium text-grey-2",children:"Quantity:"}),y.jsxs("div",{className:"flex gap-4 items-center",children:[y.jsx(Ne,{className:"hover:text-red-1 cursor-pointer",onClick:()=>s>1&&a(s-1)}),y.jsx("p",{className:"text-body-bold",children:s}),y.jsx(we,{className:"hover:text-red-1 cursor-pointer",onClick:()=>a(s+1)})]})]}),y.jsx("button",{className:"outline text-base-bold py-3 rounded-lg hover:bg-black hover:text-white",onClick:u,children:"Add To Cart"}),r&&r.role==="admin"&&y.jsx(Lt,{onClick:()=>e(`/admin/products/new?id=${t.id}`),className:"outline text-base-bold py-3 rounded-lg bg-blue-700 hover:bg-red-500 hover:text-white",children:"Edit"})]})},mn=()=>{const t=ge(),e=Ut(),n=at(xe),r=at(he);return L.useEffect(()=>{(async()=>{await e(be(t.id))})()},[e,t.id]),y.jsx(y.Fragment,{children:r==="loading"?y.jsx(ye,{}):y.jsx(y.Fragment,{children:n?y.jsxs("div",{className:"flex justify-center items-start gap-16 py-10 px-5 max-md:flex-col max-md:items-center",children:[y.jsx(cn,{productMedia:n.images}),y.jsx(an,{productInfo:n})]}):y.jsx("p",{children:"Not found"})})})};export{mn as default};
