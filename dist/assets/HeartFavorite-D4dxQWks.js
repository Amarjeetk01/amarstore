import{c as r,k as y,a as g,b as n,g as k,ay as p,r as o,j as a,t as S,b0 as x,b1 as A}from"./index-CCD08qCO.js";/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=r("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=r("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]),m=({product:s,updateSignedInUser:w})=>{const i=y(),l=g(),t=n(k),d=n(p),[h,c]=o.useState(!1);o.useEffect(()=>{const e=async()=>{c(t.wishlist.includes(s.id))};t&&s.id&&e()},[t,s.id]);const u=async e=>{e.preventDefault();try{if(t)await i(x({productId:s.id})),i(A()),c(t.wishlist.includes(s.id));else{l("/login");return}}catch(f){console.log("[wishlist_POST]",f)}};return d==="loading"?a.jsx(S,{}):a.jsx("button",{onClick:u,children:a.jsx(j,{fill:`${h?"red":"white"}`})})};export{m as H,b as S};
