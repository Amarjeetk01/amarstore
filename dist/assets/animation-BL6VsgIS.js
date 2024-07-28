var i={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function o(e){if(typeof e=="number")return{value:e,unit:"px"};var t,r=(e.match(/^[0-9.]*/)||"").toString();r.includes(".")?t=parseFloat(r):t=parseInt(r,10);var n=(e.match(/[^0-9]*$/)||"").toString();return i[n]?{value:t,unit:n}:(console.warn("React Spinners: ".concat(e," is not a valid css value. Defaulting to ").concat(t,"px.")),{value:t,unit:"px"})}function l(e){var t=o(e);return"".concat(t.value).concat(t.unit)}var v=function(e,t,r){var n="react-spinners-".concat(e,"-").concat(r);if(typeof window>"u"||!window.document)return n;var a=document.createElement("style");document.head.appendChild(a);var u=a.sheet,c=`
    @keyframes `.concat(n,` {
      `).concat(t,`
    }
  `);return u&&u.insertRule(c,0),n};export{l as a,v as c};
