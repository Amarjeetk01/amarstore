import{a as m,b as g,g as f,r,j as e,t as h,L as o,ba as p,P as b}from"./index-CFi3jwE8.js";const v=()=>{const i=m(),s=g(f),[c,l]=r.useState(!1),d=decodeURIComponent(location.search),t=new URLSearchParams(d).get("token"),[u,a]=r.useState(!1),x=async()=>{try{a(!0),p(t)&&l(!0)}catch(n){b.error(n||"An error occurred"),i("/")}finally{a(!1)}};return r.useEffect(()=>{s&&t&&x()},[s,t]),u?e.jsx(h,{}):s&&c&&e.jsx("div",{className:"bg-scroll bg-no-repeat",style:{backgroundImage:'url("/orderSuccess.png")',backgroundSize:"cover",minHeight:"100vh",display:"flex",flexDirection:"column",justifyContent:"flex-end"},children:e.jsx("div",{style:{backgroundColor:"rgba(0, 0, 0, 0.55)",flex:1},children:e.jsx("main",{className:"grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8 ",children:e.jsxs("div",{className:"text-center bg-green-200 p-3 rounded-md",children:[e.jsx("p",{className:" text-2xl font-semibold text-indigo-800",children:"Your Order Has Been Confirmed"}),e.jsx("h1",{className:"mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl",children:"Enjoy Your Purchase!"}),e.jsxs("p",{className:"mt-6 text-base leading-7 text-gray-400",children:[" ","Check your order/s."]}),e.jsxs("div",{className:"mt-10 flex items-center justify-center gap-x-6",children:[e.jsx(o,{to:"/orders",className:"rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",children:"Go order Details"}),e.jsxs(o,{to:"/",className:"text-sm font-semibold text-gray-900",children:["Continue Shopping ",e.jsx("span",{"aria-hidden":"true",children:"→"})]})]})]})})})})};export{v as default};