(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,function(t,e,n){t.exports=n(25)},,,,,function(t,e,n){},,function(t,e,n){},,function(t,e,n){},,function(t,e,n){},,function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),c=n(8),r=n.n(c),i=(n(15),n(9)),s=n(6),l=n(1),u=n(2),d=n(4),m=n(3),p=n(5),b=(n(17),n(19),function(t){function e(){return Object(l.a)(this,e),Object(d.a)(this,Object(m.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return o.a.createElement("label",{htmlFor:"input"},"What do you want to keep in mind?",o.a.createElement("input",{type:"text",name:"input",placeholder:"Breathe and smile :)",className:"Input",onKeyUp:this.props.onSubmit}))}}]),e}(a.Component)),f=(n(21),function(t){function e(){return Object(l.a)(this,e),Object(d.a)(this,Object(m.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){var t=this.props,e=t.text,n=t.onClick,a=t.className;return o.a.createElement("li",{className:a,onClick:n},e)}}]),e}(a.Component)),h=(n(23),function(t){function e(){return Object(l.a)(this,e),Object(d.a)(this,Object(m.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){var t=this.props.onClick;return o.a.createElement("button",{onClick:t},"\xd7")}}]),e}(a.Component)),y=function(t){function e(){var t,n;Object(l.a)(this,e);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(d.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(o)))).state={todos:n.loadArray()},n.onEnter=function(t){"Enter"===t.key&&(n.addInputToArray(t),t.target.value="")},n.addInputToArray=function(t){var e=[{text:t.target.value,done:!1}].concat(Object(s.a)(n.state.todos));n.setState({todos:e})},n.updateArray=function(t,e){var a=Object(s.a)(e.slice(0,t)).concat([Object(i.a)({},e[t],{done:!n.state.todos[t].done})],Object(s.a)(e.slice(t+1)));n.setState({todos:a})},n.deleteTodoItem=function(t,e){var a=Object(s.a)(e.slice(0,t)).concat(Object(s.a)(e.slice(t+1)));n.setState({todos:a})},n}return Object(p.a)(e,t),Object(u.a)(e,[{key:"saveToLocalStorage",value:function(){localStorage.setItem("to-do list",JSON.stringify(this.state.todos))}},{key:"loadArray",value:function(){return this.loadFromLocalStorage()||[]}},{key:"loadFromLocalStorage",value:function(){return JSON.parse(localStorage.getItem("to-do list"))}},{key:"render",value:function(){var t=this;return this.saveToLocalStorage(),o.a.createElement("div",{className:"App"},o.a.createElement(b,{onSubmit:function(e){return t.onEnter(e)}}),o.a.createElement("ul",{className:"listContainer"},this.state.todos.map(function(e,n,a){return o.a.createElement("div",{key:"listItem".concat(n),className:"listItem"},o.a.createElement(f,{key:"todo".concat(n),text:e.text,className:t.state.todos[n].done?"ToDo done":"ToDo",onClick:function(){return t.updateArray(n,a)}}),o.a.createElement(h,{key:"btn".concat(n),onClick:function(){t.deleteTodoItem(n,a),t.saveToLocalStorage()}}))})))}}]),e}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}],[[10,2,1]]]);
//# sourceMappingURL=main.fe6e911a.chunk.js.map