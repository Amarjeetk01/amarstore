import{k as D,a as F,b as y,g as A,am as M,aq as $,ar as L,r as h,j as e,t as Q,an as R,P as o,as as k,at as U,au as _}from"./index-DOTJXD8y.js";import{C as z,a as O}from"./circle-plus-D7L6roSn.js";import{T as B}from"./trash-Dl68YB0l.js";const G=({cartItem:l,handleQuantityDecrease:m,handleQuantityIncrease:t,handleRemove:f,loading:c})=>{const n=l.product,i=l.quantity;return e.jsxs("div",{className:"w-full flex max-sm:flex-col max-sm:gap-3 hover:bg-light-gray px-4 py-3 items-center max-sm:items-start justify-between",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("img",{src:n.images[0],className:"rounded-lg w-32 h-32 object-cover",alt:"product"}),e.jsxs("div",{className:"flex flex-col gap-3 ml-4",children:[e.jsx("p",{className:"text-lg font-semibold",children:n.title}),e.jsxs("p",{className:"flex gap-2 items-center",children:[e.jsxs("span",{className:"line-through text-sm text-gray-500",children:["₹",n.price]}),e.jsxs("span",{className:"text-lg font-bold text-red-600",children:["₹",Math.round(n.price*(1-n.discountPercentage*.01))]})]})]})]}),e.jsxs("div",{className:"flex gap-4 items-center",children:[e.jsx(z,{className:`text-gray-700 cursor-pointer hover:text-red-500 ${c?"cursor-not-allowed":""}`,onClick:()=>i>1&&!c&&m(n.id,i)}),e.jsx("p",{className:"text-lg font-semibold",children:i}),e.jsx(O,{className:`text-gray-700 cursor-pointer hover:text-green-500 ${c?"cursor-not-allowed":""}`,onClick:()=>!c&&t(n.id,i)})]}),e.jsx(B,{className:`text-gray-700 cursor-pointer hover:text-red-500 ${c?"cursor-not-allowed":""}`,onClick:()=>!c&&f(l.id)})]})},H=({total:l,totalItems:m,totalDiscount:t,handleCheckOut:f,loading:c})=>e.jsxs("div",{className:"w-1/3 max-lg:w-full flex flex-col gap-6 bg-gray-100 rounded-lg px-6 py-5",children:[e.jsxs("p",{className:"text-xl font-bold pb-4",children:["Summary"," ",e.jsxs("span",{className:"text-sm text-gray-600",children:["(",m," ",m>1?"items":"item",")"]})]}),e.jsxs("div",{className:"flex justify-between text-base font-medium",children:[e.jsx("span",{children:"Total Amount"}),e.jsxs("span",{children:["₹",l]})]}),e.jsxs("div",{className:"flex justify-between text-base font-medium",children:[e.jsx("span",{children:"Total Discount"}),e.jsxs("span",{children:["₹",t]})]}),e.jsx("hr",{}),e.jsxs("div",{className:"flex justify-between text-lg font-bold",children:[e.jsx("span",{children:"Net Total"}),e.jsxs("span",{children:["₹",(Number(l)-Number(t)).toFixed(2)]})]}),e.jsx("button",{onClick:f,className:`border rounded-lg text-lg font-semibold bg-blue-600 text-white py-3 w-full hover:bg-blue-700 ${c?"cursor-not-allowed":""}`,disabled:c,children:c?"Processing...":"Proceed to Checkout"})]}),W=()=>{const l=D(),m=F(),t=y(A),f=y(M),c=y($),n=y(L),[i,d]=h.useState(!1),[a,p]=h.useState([]),E=async()=>{try{d(!0),await l(R())}catch(s){console.log(s)}finally{d(!1)}};h.useEffect(()=>{t&&E()},[t]),h.useEffect(()=>{f&&p(f.carts)},[f]);const j=a==null?void 0:a.reduce((s,r)=>s+r.product.price*r.quantity,0).toFixed(2),N=a==null?void 0:a.reduce((s,r)=>s+r.quantity,0),b=a==null?void 0:a.reduce((s,r)=>{const x=r.product.price*r.product.discountPercentage*(r.quantity*.01);return s+x},0).toFixed(2),w=async(s,r)=>{const x=a.find(u=>u.product.id===s).product;if(r+1>x.stock){o.error("Cannot add more than available stock!");return}try{d(!0),await l(k({productId:s,quantity:r+1})),n?o.error(n):p(u=>u.map(g=>g.product.id===s?{...g,quantity:g.quantity+1}:g))}catch(u){console.error("Error increasing quantity:",u),o.error("Something went wrong")}finally{d(!1)}},v=async(s,r)=>{try{if(!t){o.error("Unauthorized!");return}r>1&&(d(!0),await l(k({productId:s,quantity:r-1})),n?o.error(n):p(x=>x.map(u=>u.product.id===s?{...u,quantity:u.quantity-1}:u)))}catch(x){console.error("Error decreasing quantity:",x),o.error("Something went wrong")}finally{d(!1)}},C=async s=>{try{t?(d(!0),await l(U(s)),n?o.error(n):(p(r=>r.filter(x=>x.id!==s)),o.success("Item successfully removed!"))):m("/login")}catch(r){o.error("Something went wrong"),console.error("[cart_DELETE]",r)}finally{d(!1)}},S={id:t==null?void 0:t.id,email:t==null?void 0:t.email,name:t==null?void 0:t.name},q=async()=>{try{if(!t)m("/login");else if(a.length===0)o.error("First add items to the cart!");else try{d(!0),await _({customer:S})}catch(s){o.error(s.message)}finally{d(!1)}}catch{o.error("Payment failed. Please check your information and try again.")}},P=h.useMemo(()=>a.map(s=>e.jsx(G,{cartItem:s,handleQuantityDecrease:v,handleQuantityIncrease:w,handleRemove:C,loading:i},s.id)),[a,v,w,C,i]),T=h.useMemo(()=>e.jsx(H,{total:j,totalItems:N,totalDiscount:b,handleCheckOut:q,loading:i}),[j,N,b,q,i]);return c==="loading"||i?e.jsx(Q,{}):e.jsxs("div",{className:"flex gap-20 py-16 px-10 max-lg:flex-col max-sm:px-3",children:[e.jsxs("div",{className:"w-2/3 max-lg:w-full",children:[e.jsx("p",{className:"text-2xl font-bold",children:"Shopping Cart"}),e.jsx("hr",{className:"my-6"}),!a||a.length===0?e.jsx("p",{className:"text-lg font-semibold",children:"No items in the cart"}):e.jsx("div",{children:P})]}),T]})};export{W as default};