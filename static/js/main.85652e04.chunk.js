(this["webpackJsonpreact-test-table"]=this["webpackJsonpreact-test-table"]||[]).push([[0],{129:function(e,t,n){e.exports={picker:"ColorPicker_picker__Mf1Kb"}},130:function(e,t,n){e.exports={table:"Table_table__3cVv6"}},131:function(e,t,n){e.exports=n(405)},136:function(e,t,n){},137:function(e,t,n){},405:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(126),c=n.n(o),l=(n(136),n(43)),i=n(127),u=n(26),m=n(12),d=(n(137),function(e){var t=e.id,n=e.rowName,o=e.changeRow,c=e.isColor,l=e.dataAttr,i=Object(a.useState)(!1),u=Object(m.a)(i,2),d=u[0],s=u[1],f=Object(a.useState)(n),b=Object(m.a)(f,2),p=b[0],w=b[1];return r.a.createElement("td",{onClick:function(){return s(!0)},onBlur:function(){s(!1),o(t,l,p)},"data-column":l},d?r.a.createElement("input",{autoFocus:!0,value:p,onChange:function(e){return w(e.currentTarget.value)},type:c?"color":"text"}):r.a.createElement("span",null,p))}),s=n(75),f=n.n(s),b=n(45),p=n.n(b),w=function(e){var t=e.onHandler,n=e.btnName,a=e.btnText,o="".concat("add"===n?p.a.add:p.a.del);return r.a.createElement("button",{onClick:t,className:"".concat(p.a.btn," ").concat(o)},a)},h=n(128),E=n(129),g=n.n(E),v=function(e){var t=e.rowName,n=e.id,o=e.dataAttr,c=e.changeRow,l=Object(a.useState)(!1),i=Object(m.a)(l,2),u=i[0],d=i[1];return r.a.createElement("td",null,r.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},r.a.createElement("span",{onClick:function(){return d(!u)}},t),u&&r.a.createElement("button",{style:{backgroundColor:"red",color:"#fff"},onClick:function(){return d(!1)}},"x")),u&&r.a.createElement(h.ChromePicker,{className:g.a.picker,color:t,onChangeComplete:function(e){c(n,o,e.hex)}}))},y=function(e){var t=e.id,n=e.index,a=e.name,o=e.type,c=e.color,l=e.deleteRow,i=e.changeRow,u=e.tableRowDown,m=e.tableRowUp;return r.a.createElement(r.a.Fragment,null,r.a.createElement("tr",null,r.a.createElement("td",{"data-column":"id"},t),r.a.createElement(d,{id:t,rowName:a,changeRow:i,dataAttr:"name"}),r.a.createElement(d,{id:t,rowName:o,changeRow:i,dataAttr:"type"}),r.a.createElement(v,{rowName:c,changeRow:i,id:t,dataAttr:"color"}),r.a.createElement("td",{"data-column":"delete"},r.a.createElement("div",{className:f.a.actionCell},r.a.createElement("div",{className:f.a.filter},r.a.createElement("span",{style:{marginRight:"10px"},onClick:function(){return m(n)}},"\u2191"),r.a.createElement("span",{onClick:function(){return u(n)}},"\u2193")),r.a.createElement("div",null,r.a.createElement(w,{onHandler:function(){return l(t)},btnName:"del",btnText:"Del row"}))))))},R=n(130),_=n.n(R),N=function(e){var t=e.table,n=e.deleteRow,a=e.changeRow,o=e.tableRowDown,c=e.tableRowUp,l=t.map((function(e,t){return r.a.createElement(y,{id:e.id,index:t,name:e.name,type:e.type,color:e.color,deleteRow:n,changeRow:a,tableRowDown:o,tableRowUp:c,key:e.id})}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("table",{className:_.a.table},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"id"),r.a.createElement("th",null,"name"),r.a.createElement("th",null,"type"),r.a.createElement("th",null,"color"),r.a.createElement("th",null,"actions / delete"))),r.a.createElement("tbody",null,l)))},O=[{id:2,name:"name2",type:"main2",color:"#cccccc"},{id:1,name:"name1",type:"main",color:"#f4f4f4"},{id:3,name:"name3",type:"main3",color:"#000000"}],j=function(){var e=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:localStorage,r=Object(a.useState)((function(){try{var a=n.getItem(e);return"string"!==typeof a?(n.setItem(e,JSON.stringify(t)),t):JSON.parse(a||"null")}catch(r){return console.log(r),t}})),o=Object(m.a)(r,2),c=o[0],l=o[1];return Object(a.useEffect)((function(){try{var t=JSON.stringify(c);n.setItem(e,t)}catch(a){console.log(a)}})),[c,l]}("table",O),t=Object(m.a)(e,2),n=t[0],o=t[1],c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=new Map;return e.map((function(r,o){switch(o){case t:return a.set(o,e[n]);case n:return a.set(o,e[t]);default:return a.set(o,e[o])}})),Array.from(a.values())};return r.a.createElement("div",{className:"App"},r.a.createElement(N,{table:n,deleteRow:function(e){o(n.filter((function(t){return t.id!==e})))},changeRow:function(e,t,a){o(n.map((function(n){return n.id===e?Object(i.a)({},n,Object(l.a)({},t,a)):n})))},tableRowUp:function(e){var t=e-1;t<0?(n.push(n.shift()),o(Object(u.a)(n))):o(c(n,e,t))},tableRowDown:function(e){var t=e+1;e===n.length-1?(n.unshift(n.pop()),o(Object(u.a)(n))):o(c(n,e,t))}}),r.a.createElement(w,{onHandler:function(){return o([].concat(Object(u.a)(n),[{id:Math.max.apply(Math,Object(u.a)(n.map((function(e){return e.id}))))+1,name:"nameNewTest",type:"mainNewTest",color:"#000000"}]))},btnName:"add",btnText:"Add"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},45:function(e,t,n){e.exports={del:"Button_del__3EaLH",add:"Button_add__21Klw",btn:"Button_btn__3xaJM"}},75:function(e,t,n){e.exports={filter:"TableRow_filter__VKQo5",actionCell:"TableRow_actionCell__w8fcf"}}},[[131,1,2]]]);
//# sourceMappingURL=main.85652e04.chunk.js.map