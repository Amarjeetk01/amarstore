import{j as e,L as t,a as l,k as i,b as a,q as r,s as n,r as m,t as d,v as p}from"./index-DOTJXD8y.js";import{E as x}from"./eye-CS16mxhI.js";import{D as h}from"./DataTable-DWYcol5s.js";import{S as u}from"./separator-DD2eeTNJ.js";import"./input-ZE_ttwkn.js";const g=[{accessorKey:"title",header:"Title",cell:({row:s})=>e.jsx(t,{to:`/products?search=${s.original.collectionName}`,className:"hover:text-red-1",children:s.original.collectionName[0].toUpperCase()+s.original.collectionName.slice(1)})},{accessorKey:"collectionName",header:"Total Products",cell:({row:s})=>e.jsx("p",{children:s.original.collection.length})},{id:"actions",cell:({row:s})=>e.jsx(t,{to:`/products?search=${s.original.collectionName}`,className:"hover:text-blue-500",children:e.jsx(x,{})})}],v=()=>{l();const s=i(),o=a(r),c=a(n);return m.useEffect(()=>{(async()=>{await s(p())})()},[]),c==="loading"?e.jsx(d,{}):e.jsxs("div",{className:"px-10 py-5",children:[e.jsx("div",{className:"flex items-center justify-between",children:e.jsx("p",{className:"text-heading2-bold",children:"Collections"})}),e.jsx(u,{className:"bg-grey-1 my-4"}),e.jsx(h,{columns:g,data:o,searchKey:"title"})]})};export{v as default};