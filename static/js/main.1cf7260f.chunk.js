(this["webpackJsonpreact-test-table"]=this["webpackJsonpreact-test-table"]||[]).push([[0],[,,,,,,function(e,t,n){e.exports={table:"Table_table__3M_gK"}},,,function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(5),o=n.n(r),l=(n(14),n(8)),u=n(7),i=n(1),m=(n(15),function(e){var t=Object(a.useState)(!1),n=Object(i.a)(t,2),r=n[0],o=n[1],l=Object(a.useState)(e.rowName),u=Object(i.a)(l,2),m=u[0],d=u[1],s=Object(a.useRef)(null);Object(a.useEffect)((function(){var e;r&&(console.log(s.current),null===(e=s.current)||void 0===e||e.click())}),[r]);return c.a.createElement("td",{onClick:function(){return o(!0)},onBlur:function(){o(!1),e.changeRow(e.id,e.rowName)},"data-column":e.dataAttr},r?c.a.createElement("input",{autoFocus:!0,value:m,onChange:function(e){return d(e.currentTarget.value)},type:e.isColor?"color":"text",ref:s}):c.a.createElement("span",{style:{backgroundColor:m}},m))}),d=function(e){var t=e.id,n=e.name,a=e.type,r=e.color,o=e.deleteRow,l=e.changeRow;return c.a.createElement(c.a.Fragment,null,c.a.createElement("tr",null,c.a.createElement("td",{"data-column":"id"},t),c.a.createElement(m,{id:t,rowName:n,changeRow:l,dataAttr:"name"}),c.a.createElement(m,{id:t,rowName:a,changeRow:l,dataAttr:"type"}),c.a.createElement(m,{id:t,rowName:r,isColor:!0,changeRow:l,dataAttr:"color"}),c.a.createElement("td",{"data-column":"delete"},c.a.createElement("button",{onClick:function(){return o(t)}},"X"))))},s=n(6),f=n.n(s),E=function(e){var t=e.table,n=e.deleteRow,a=e.changeRow,r=t.map((function(e){return c.a.createElement(d,{id:e.id,name:e.name,type:e.type,color:e.color,deleteRow:n,changeRow:a,key:e.id})}));return c.a.createElement(c.a.Fragment,null,c.a.createElement("table",{className:f.a.table},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"id"),c.a.createElement("th",null,"name"),c.a.createElement("th",null,"type"),c.a.createElement("th",null,"color"),c.a.createElement("th",null,"delete"))),c.a.createElement("tbody",null,r)))},g=[{id:2,name:"name2",type:"main2",color:"#cccccc"},{id:1,name:"name1",type:"main",color:"#f4f4f4"},{id:3,name:"name3",type:"main3",color:"#000000"}],h=function(){var e=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:localStorage,c=Object(a.useState)((function(){try{var a=n.getItem(e);return"string"!==typeof a?(n.setItem(e,JSON.stringify(t)),t):JSON.parse(a||"null")}catch(c){return console.log(c),t}})),r=Object(i.a)(c,2),o=r[0],l=r[1];return Object(a.useEffect)((function(){try{var t=JSON.stringify(o);n.setItem(e,t)}catch(a){console.log(a)}})),[o,l]}("table",g),t=Object(i.a)(e,2),n=t[0],r=t[1];return c.a.createElement("div",{className:"App"},c.a.createElement(E,{table:n,deleteRow:function(e){r(n.filter((function(t){return t.id!==e})))},changeRow:function(e,t){r(n.map((function(n){return n.id===e?Object(l.a)({},n,{name:t}):n})))}}),c.a.createElement("button",{onClick:function(){return r([].concat(Object(u.a)(n),[{id:n.length+1,name:"name3",type:"main3",color:"#000000"}]))}},"Add"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.1cf7260f.chunk.js.map