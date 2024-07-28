import{r as i,$ as p,_ as $,j as u,h as v}from"./index-CCD08qCO.js";const c="horizontal",x=["horizontal","vertical"],s=i.forwardRef((e,r)=>{const{decorative:o,orientation:t=c,...a}=e,n=d(t)?t:c,l=o?{role:"none"}:{"aria-orientation":n==="vertical"?n:void 0,role:"separator"};return i.createElement(p.div,$({"data-orientation":n},l,a,{ref:r}))});s.propTypes={orientation(e,r,o){const t=e[r],a=String(t);return t&&!d(t)?new Error(h(a,o)):null}};function h(e,r){return`Invalid prop \`orientation\` of value \`${e}\` supplied to \`${r}\`, expected one of:
  - horizontal
  - vertical

Defaulting to \`${c}\`.`}function d(e){return x.includes(e)}const f=s,m=i.forwardRef(({className:e,orientation:r="horizontal",decorative:o=!0,...t},a)=>u.jsx(f,{ref:a,decorative:o,orientation:r,className:v("shrink-0 bg-border",r==="horizontal"?"h-[1px] w-full":"h-full w-[1px]",e),...t}));m.displayName=f.displayName;export{m as S};
