import{j as s,L as i,a as l,k as d,b as a,U as n,V as m,r as u,t as p,W as h,X as x}from"./index-DOTJXD8y.js";import{S as g}from"./separator-DD2eeTNJ.js";import{D as y}from"./DataTable-DWYcol5s.js";import{D as j}from"./Delete-CyOoxZUk.js";import{P as f}from"./plus-B-DTJDwy.js";import"./input-ZE_ttwkn.js";import"./trash-Dl68YB0l.js";const P=[{accessorKey:"title",header:"Title",cell:({row:e})=>s.jsx(i,{to:`/product/${e.original.id}`,className:"hover:text-red-1",children:e.original.title})},{accessorKey:"category",header:"Category"},{accessorKey:"price",header:"Price (₹)"},{accessorKey:"discountPercentage",header:"Discount (%)"},{accessorKey:"stock",header:"Stock "},{id:"actions",cell:({row:e})=>s.jsx(j,{item:"product",id:e.original.id})}],w=()=>{const e=l(),c=d(),t=a(n),r=a(m),o=async()=>{await c(x())};return u.useEffect(()=>{o()},[]),r==="loading"?s.jsx(p,{}):s.jsxs("div",{className:"px-10 py-5",children:[s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsx("p",{className:"text-heading2-bold",children:"Products"}),s.jsxs(h,{className:"bg-blue-1 text-white",onClick:()=>e("/admin/products/new"),children:[s.jsx(f,{className:"h-4 w-4 mr-2"}),"Create Product"]})]}),s.jsx(g,{className:"bg-grey-1 my-4"}),t&&s.jsx(y,{columns:P,data:t,searchKey:"title"})]})};export{w as default};