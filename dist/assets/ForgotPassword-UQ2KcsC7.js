import{k as b,r as f,b as i,b2 as p,bb as j,bc as w,ag as y,j as e,L as N,P as o,bd as v}from"./index-CCD08qCO.js";import{B as n}from"./BeatLoader-DJQpjK1z.js";import"./animation-BL6VsgIS.js";function L(){var l;const m=b(),[d,c]=f.useState(!1),s=i(p);i(j);const t=i(w),{register:x,handleSubmit:u,formState:{errors:r}}=y(),g=async h=>{c(!0);try{await o.promise(m(v(h.email)).unwrap(),{loading:"Sending...",success:e.jsx("b",{children:"Mail Sent!"}),error:a=>`Error: ${a.message}`})}catch(a){o.error(`Error: ${a.message}`)}};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8",children:[e.jsxs("div",{className:"sm:mx-auto sm:w-full sm:max-w-sm",children:[e.jsx("img",{className:"mx-auto h-10 w-auto",src:"/logo.png",alt:"AmarStore"}),e.jsx("h2",{className:"mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900",children:"Enter email to reset password"})]}),e.jsxs("div",{className:"mt-10 sm:mx-auto sm:w-full sm:max-w-sm",children:[e.jsxs("form",{noValidate:!0,onSubmit:u(g),className:"space-y-6",children:[e.jsxs("div",{className:"mt-2",children:[e.jsxs("label",{htmlFor:"email",className:"block text-sm font-medium leading-6 text-gray-900",children:[s&&e.jsx(n,{color:"#36d7b7"}),"Email address"]}),e.jsxs("div",{className:"mt-2",children:[e.jsx("input",{id:"email",...x("email",{required:"Email is required",pattern:{value:/\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,message:"Email is not valid"}}),type:"email",className:"block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"}),r.email&&e.jsx("p",{className:"text-red-500",children:(l=r.email)==null?void 0:l.message})]})]}),d&&t&&e.jsx("p",{className:"text-red-500",children:t.message||t}),e.jsx("div",{children:e.jsx("button",{type:"submit",className:"flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",disabled:s,children:s?e.jsx(n,{color:"#36d7b7"}):"Send Email"})})]}),e.jsxs("p",{className:"mt-10 text-center text-sm text-gray-500",children:["Send me back to"," ",e.jsx(N,{to:"/login",className:"font-semibold leading-6 text-indigo-600 hover:text-indigo-500",children:"Login"})]})]})]})})}export{L as default};
