(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],[,,,,,function(e){e.exports=JSON.parse('{"lists":[{"id":1,"name":"\u041f\u0440\u043e\u0434\u0430\u0436\u0438","colorId":5},{"id":2,"name":"\u0424\u0440\u043e\u043d\u0442\u0435\u043d\u0434","colorId":4},{"id":3,"name":"\u0424\u0438\u043b\u044c\u043c\u044b \u0438 \u0441\u0435\u0440\u0438\u0430\u043b\u044b","colorId":3},{"id":4,"name":"\u041a\u043d\u0438\u0433\u0438","colorId":2},{"id":5,"name":"\u041b\u0438\u0447\u043d\u043e\u0435","colorId":1},{"name":"\u0421\u043f\u043e\u0440\u0442","colorId":3,"id":6},{"name":"\u041a\u0443\u0440\u0441 \u043f\u043e ReactJS ToDo","colorId":7,"id":7}],"tasks":[{"id":1,"listId":2,"text":"\u0418\u0437\u0443\u0447\u0438\u0442\u044c JavaScript","completed":true},{"id":2,"listId":2,"text":"\u0418\u0437\u0443\u0447\u0438\u0442\u044c \u043f\u0430\u0442\u0442\u0435\u0440\u043d\u044b \u043f\u0440\u043e\u0435\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f","completed":false},{"id":3,"listId":2,"text":"ReactJS Hooks (useState, useReducer, useEffect \u0438 \u0442.\u0434.)","completed":true},{"id":4,"listId":2,"text":"Redux (redux-observable, redux-saga)","completed":false},{"listId":2,"text":"123","completed":true,"id":5},{"listId":1,"text":"test","completed":false,"id":6},{"listId":1,"text":"qweqwe","completed":false,"id":7},{"listId":1,"text":"qweqwe","completed":true,"id":8},{"listId":1,"text":"123","completed":false,"id":9},{"listId":4,"text":"\u041a\u0443\u043f\u0438\u0442\u044c 1984!","completed":true,"id":10},{"listId":2,"text":"222","completed":true,"id":12},{"listId":7,"text":"\u0421\u0434\u0435\u043b\u0430\u043b\u0438 \u0441\u0430\u0439\u0434\u0431\u0430\u0440","completed":true,"id":15},{"listId":7,"text":"\u0421\u0434\u0435\u043b\u0430\u043b\u0438 \u0441\u043f\u0438\u0441\u043e\u043a \u0437\u0430\u0434\u0430\u0447","completed":true,"id":16},{"listId":7,"text":"\u0421\u0434\u0435\u043b\u0430\u043b\u0438 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0435 \u0438 \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0437\u0430\u0434\u0430\u0447 \u0438 \u0441\u043f\u0438\u0441\u043a\u043e\u0432","completed":true,"id":17}],"colors":[{"id":1,"hex":"#C9D1D3","name":"grey"},{"id":2,"hex":"#42B883","name":"green"},{"id":3,"hex":"#64C4ED","name":"blue"},{"id":4,"hex":"#FFBBCC","name":"pink"},{"id":5,"hex":"#B6E6BD","name":"lime"},{"id":6,"hex":"#C355F5","name":"purple"},{"id":7,"hex":"#110133","name":"black"},{"id":8,"hex":"#FF6464","name":"red"}]}')},,,function(e,t,a){e.exports=a.p+"static/media/allFolders.244e2000.svg"},function(e,t,a){e.exports=a.p+"static/media/addFolder.ba9a0c8a.svg"},function(e,t,a){e.exports=a(22)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(7),c=a.n(l),r=a(2),i=a(1),s=(a(15),a(8)),d=a.n(s),u=a(9),m=a.n(u);function p(e){var t=e.type,a=e.text,n=e.onClick,l=e.activeFolder,c=e.color,r=e.id,i=e.onDeleteFolderClick,s="add"===t?{color:"#767676"}:{};return o.a.createElement("div",{className:"sidebar__folder ".concat(r===l&&"sidebar__folder_type_active"),onClick:function(){n(r)}},"all"===t&&o.a.createElement("img",{className:"sidebar__icon",src:d.a,alt:"\u0418\u043a\u043e\u043d\u043a\u0430 \u0432\u0441\u0435\u0445 \u0437\u0430\u0434\u0430\u0447"}),"add"===t&&o.a.createElement("img",{className:"sidebar__icon",src:m.a,alt:"\u0418\u043a\u043e\u043d\u043a\u0430 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0437\u0430\u0434\u0430\u0447"}),"folder"===t&&o.a.createElement("i",{className:"sidebar__icon sidebar__icon_type_folder",style:{backgroundColor:c}}),o.a.createElement("h2",{className:"sidebar__folder-name",style:s},a),"folder"===t&&o.a.createElement("button",{className:"sidebar__delete",onClick:function(e){e.stopPropagation(),i(r)}}))}a(16),a(17);function f(e){var t=e.isActive,a=e.onSubmit,n=e.colors,l=e.onPopupClose,c=o.a.useState(1),r=Object(i.a)(c,2),s=r[0],d=r[1],u=o.a.useState(""),m=Object(i.a)(u,2),p=m[0],f=m[1];return o.a.createElement("form",{onSubmit:function(e){e.preventDefault(),a(p,s),setTimeout((function(){f(""),d(1)}),200)},className:"popup ".concat(t&&"popup_type_visible"),noValidate:!0},o.a.createElement("input",{className:"popup__input",type:"text",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043f\u0430\u043f\u043a\u0438",onChange:function(e){f(e.target.value)},required:!0,value:p}),o.a.createElement("div",{className:"popup__checkboxes"},n.map((function(e){return o.a.createElement("i",{key:e.id,className:"popup__radiobox ".concat(e.id===s&&"popup__radiobox_type_active"),onClick:function(){d(e.id)},style:{backgroundColor:e.hex}})}))),o.a.createElement("button",{type:"submit",className:"popup__submit ".concat(!p&&"popup__submit_type_disabled"),disabled:!p&&"disabled"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"),o.a.createElement("button",{type:"button",className:"popup__exit",onClick:function(){l(),setTimeout((function(){f(""),d(1)}),200)}}))}function k(e){var t=e.folders,a=e.activeFolder,n=e.onFolderClick,l=e.onAddFolderClick,c=e.popupSubmitHandler,r=e.isPopupActive,i=e.colors,s=e.onPopupClose,d=e.onDeleteFolderClick;return o.a.createElement("div",{className:"sidebar"},0!==t.length&&o.a.createElement(p,{type:"all",text:"\u0412\u0441\u0435 \u0437\u0430\u0434\u0430\u0447\u0438",id:0,activeFolder:a,onClick:n}),o.a.createElement("ul",{className:"sidebar__folders"},t.map((function(e){return o.a.createElement("li",{key:e.id},o.a.createElement(p,{type:"folder",text:e.name,color:e.color,id:e.id,activeFolder:a,onClick:n,onDeleteFolderClick:d}))}))),o.a.createElement(p,{type:"add",text:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u0430\u043f\u043a\u0443",onClick:l,id:1/0}),o.a.createElement(f,{isActive:r,onSubmit:c,colors:i,onPopupClose:s}))}a(18),a(19);function b(e){var t=e.task,a=e.onTaskClick,n=e.onTaskChange,l=e.onTaskDelete,c=o.a.useState(t.text),r=Object(i.a)(c,1)[0],s=t.completed?{textDecoration:"line-through"}:{};return o.a.createElement("div",{className:"task"},o.a.createElement("button",{className:"task__checkbox ".concat(t.completed&&"task__checkbox_type_active"),onClick:function(){a(t.id)}}),o.a.createElement("p",{className:"task__text",style:s,onInput:function(e){n(t.id,e.target.innerText)},onBlur:function(e){n(t.id,e.target.innerText)},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),e.target.blur())},contentEditable:!t.completed,suppressContentEditableWarning:!0},r),o.a.createElement("button",{className:"task__delete",onClick:function(){l(t.id)}}))}a(20);function _(e){var t=e.name,a=e.currentTasks,n=e.color,l=e.onTaskClick,c=e.onTaskChange,r=e.onAddTaskButton,s=e.id,d=e.onTaskDelete,u=e.onFolderChange,m=e.colors,p=e.onFolderColorChange,f=e.colorId,k=o.a.useState(t),_=Object(i.a)(k,1)[0],g=o.a.useState(f),C=Object(i.a)(g,2),x=C[0],v=C[1],E=o.a.useState(!1),I=Object(i.a)(E,2),h=I[0],S=I[1];return o.a.createElement("div",{className:"taskFolder"},o.a.createElement("h2",{onInput:function(e){u(s,e.target.innerText)},onBlur:function(e){u(s,e.target.innerText)},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),e.target.blur())},className:"taskFolder__title",style:{color:n},contentEditable:"true",suppressContentEditableWarning:!0},_),o.a.createElement("div",{className:"taskFolder__line"}," "),o.a.createElement("div",{className:"taskFolder__checkboxes  ".concat(h&&"taskFolder__checkboxes_type_visible")},m.map((function(e){return o.a.createElement("i",{key:e.id,className:"taskFolder__radiobox ".concat(e.id===x&&"taskFolder__radiobox_type_active"),onClick:function(){v(e.id)},style:{backgroundColor:e.hex}})})),o.a.createElement("button",{className:"taskFolder__checkboxes-button",onClick:function(){p(s,x),S(!1)}},"\u041f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c")),o.a.createElement("button",{className:"taskFolder__editColor",onClick:function(){S(!0)}}),a.map((function(e){return o.a.createElement(b,{onTaskDelete:d,key:e.id,task:e,onTaskClick:l,onTaskChange:c})})),0===a.length&&o.a.createElement("p",{className:"taskFolder__empty"},"\u0417\u0430\u0434\u0430\u0447\u0438 \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u044e\u0442"),o.a.createElement("button",{className:"taskFolder__add",onClick:function(){r(s)}}))}function g(e){var t=e.folders,a=e.tasks,n=e.onTaskClick,l=e.onTaskChange,c=e.onAddTaskButton,r=e.onTaskDelete,i=e.onFolderChange,s=e.colors,d=e.onFolderColorChange;return o.a.createElement("div",{className:"taskBar"},t.map((function(e){return o.a.createElement(_,{onFolderColorChange:d,colors:s,onFolderChange:i,onTaskDelete:r,id:e.id,colorId:e.colorId,onAddTaskButton:c,onTaskChange:l,onTaskClick:n,key:e.id,name:e.name,currentTasks:a.filter((function(t){return t.listId===e.id})),color:e.color})})),0===t.length&&o.a.createElement("p",{className:"taskBar__empty"},"\u0417\u0430\u0434\u0430\u0447\u0438 \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u044e\u0442"))}var C=a(5);function x(){var e=o.a.useState(0),t=Object(i.a)(e,2),a=t[0],n=t[1],l=o.a.useState(localStorage.getItem("folders")?JSON.parse(localStorage.getItem("folders")):function(){return localStorage.setItem("folders",JSON.stringify(C.lists)),JSON.parse(localStorage.getItem("folders"))}),c=Object(i.a)(l,2),s=c[0],d=c[1],u=o.a.useState(localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")):function(){return localStorage.setItem("tasks",JSON.stringify(C.tasks)),JSON.parse(localStorage.getItem("tasks"))}),m=Object(i.a)(u,2),p=m[0],f=m[1],b=o.a.useState(localStorage.getItem("colors")?JSON.parse(localStorage.getItem("colors")):function(){return localStorage.setItem("colors",JSON.stringify(C.colors)),JSON.parse(localStorage.getItem("colors"))}),_=Object(i.a)(b,1)[0],x=o.a.useState(!1),v=Object(i.a)(x,2),E=v[0],I=v[1],h=function(e,t){localStorage[e]=JSON.stringify(t)},S=function(){I(!1)};s.map((function(e){return e.color=_.find((function(t){return t.id===e.colorId})).hex,e}));var N=function(e,t){var a=Object(r.a)(e),n=Object(r.a)(t);n.map((function(e,t){return e.id=t+1,e})),a.map((function(e,t){return n.filter((function(t){return t.listId===e.id})).map((function(e){return e.listId=t+1,e})),e.id=t+1,e})),d(a),h("folders",a),f(n),h("tasks",n)};return o.a.createElement("div",{className:"todo"},o.a.createElement(k,{folders:s,activeFolder:a,onAddFolderClick:function(){I(!0)},onFolderClick:function(e){n(e)},isPopupActive:E,popupSubmitHandler:function(e,t){var a=Object(r.a)(s);a.push({name:e,colorId:t,id:s[s.length-1]?s[s.length-1].id+1:1}),N(a,p),S()},colors:_,onPopupClose:S,onDeleteFolderClick:function(e){n(0);var t=Object(r.a)(s),a=t.findIndex((function(t){return t.id===e}));t.splice(a,1);var o=Object(r.a)(p);o=o.filter((function(t){return t.listId!==e})),N(t,o)}}),o.a.createElement(g,{onFolderChange:function(e,t){var a=Object(r.a)(s);a.find((function(t){return t.id===e})).name=t,N(a,p)},onTaskDelete:function(e){var t=Object(r.a)(p),a=t.findIndex((function(t){return t.id===e}));t.splice(a,1),N(s,t)},onAddTaskButton:function(e){console.log(e);var t={listId:e,text:"",completed:!1,id:p[p.length-1]?p[p.length-1].id+1:1};N(s,[].concat(Object(r.a)(p),[t]))},onTaskChange:function(e,t){var a=Object(r.a)(p);a.find((function(t){return t.id===e})).text=t,N(s,a)},onTaskClick:function(e){var t=Object(r.a)(p);t.find((function(t){return t.id===e})).completed=!t.find((function(t){return t.id===e})).completed,N(s,t)},colors:_,folders:0===a?s:[s.find((function(e){return e.id===a}))],tasks:p,onFolderColorChange:function(e,t){var a=Object(r.a)(s);a.find((function(t){return t.id===e})).colorId=t,N(a,p)}}))}a(21);c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(x,null)),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.600cbd27.chunk.js.map