(this["webpackJsonptodo-practice"]=this["webpackJsonptodo-practice"]||[]).push([[0],{214:function(e,t,n){},215:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(35),r=n.n(c);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=n(5),i=n(218),m=n(90),s=[],d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TODO":return[].concat(Object(m.a)(e),[t.todo]);case"REMOVE_TODO":return e.filter((function(e){return e.id!==t.id}));default:return e}},u=n(8),f=n(88),E=n.n(f),b=n(89),p=n.n(b),h=function(){return o.a.createElement("header",{className:"m-0 header p-3",style:{textAlign:"center"}},o.a.createElement("h1",{className:""},"Welcome to my to-do list"),o.a.createElement("p",null,"Enter a to-do below to add it to the list"))},v=n(217),y=n(216),O=function(e){var t=e.handleSubmit,n=e.pristine,a=e.submitting;return o.a.createElement("form",{className:"form m-4",onSubmit:t},o.a.createElement("div",{className:"col d-flex flex-column align-items-center justify-content-center m-0"},o.a.createElement("div",{className:"form-group"},o.a.createElement(v.a,{className:"form-control",type:"text",name:"text",component:"input"})),o.a.createElement("button",{disabled:n||a,className:"btn btn-primary",style:{height:"38px"}},"Add")))},g=O=Object(y.a)({form:"add"})(O),N=function(e){return{type:"ADD_TODO",todo:e}},x=Object(u.b)(null,(function(e){return{removeTodo:function(t){return e(function(e){return{type:"REMOVE_TODO",id:e}}(t))}}}))((function(e){return o.a.createElement("div",{className:"card col-sm-10 col-10 p-1 my-3 item"},o.a.createElement("div",{className:"card-body py-1"},o.a.createElement("div",{className:"row d-flex justify-content-between align-items-center"},o.a.createElement("label",{className:"checkbox-container col-2"},o.a.createElement("input",{type:"checkbox"}),o.a.createElement("span",{className:"checkmark"})),o.a.createElement("p",{className:"font-weight-bold col-6"},e.todo.text),o.a.createElement("button",{onClick:function(){e.removeTodo(e.todo.id)},className:"btn btn-danger"},"Delete"))))})),w=Object(u.b)((function(e){return{todos:e.todos}}))((function(e){return e.todos.map((function(e){return o.a.createElement(x,{key:e.id,todo:e})}))})),j=Object(u.b)(null,(function(e){return{addTodo:function(t){return e(N(t))}}}))((function(e){return o.a.createElement("div",{className:"container-fluid"},o.a.createElement("div",{className:"main-content"},o.a.createElement(h,null),o.a.createElement(g,{onSubmit:function(t){e.addTodo({id:p()(),text:t.text}),t.text=""}}),o.a.createElement(w,null)))})),k=(n(214),function(){var e=Object(l.b)({todos:d,form:i.a});return Object(l.c)(e)}());E.a.get("https://jsonplaceholder.typicode.com/users/1/todos").then((function(e){e.data.forEach((function(e){e.id<4&&k.dispatch(N({text:e.title,id:e.id}))}))})),r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(u.a,{store:k},o.a.createElement(j,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},92:function(e,t,n){e.exports=n(215)}},[[92,1,2]]]);
//# sourceMappingURL=main.4a8d0ad6.chunk.js.map