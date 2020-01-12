(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{17:function(t,e,n){t.exports={Input:"Filter_Input__1c6cN"}},19:function(t,e,n){t.exports=n(50)},24:function(t,e,n){},3:function(t,e,n){t.exports={Label:"AddContacts_Label__r-pYe",Label__text:"AddContacts_Label__text__1uKHL",Input:"AddContacts_Input__2Z1mf",Button:"AddContacts_Button__1AU6y"}},50:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),o=n(6),r=n.n(o),u=(n(24),n(18)),l=n(2),i=n(7),s=n.n(i),m=function(t){var e=t.contact,n=t.deleteContact;return c.a.createElement("li",{className:s.a.ContactListItem},c.a.createElement("p",null,e.name," : ",e.phone),c.a.createElement("button",{className:s.a.Button,onClick:function(){return n(e.id)}},"Delete"))},f=function(t){var e=t.contacts,n=t.deleteContact;return c.a.createElement("ul",null,e.map((function(t){return c.a.createElement(m,{key:t.id,contact:t,deleteContact:n})})))},p=n(3),d=n.n(p),C=n(16),_=n.n(C),b=function(t){var e=t.addContact,n=Object(a.useState)(""),o=Object(l.a)(n,2),r=o[0],u=o[1],i=Object(a.useState)(""),s=Object(l.a)(i,2),m=s[0],f=s[1];return c.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e({id:_.a.generate(),name:r,phone:m}),u(""),f("")},className:d.a.Form},c.a.createElement("input",{className:d.a.Input,placeholder:"Name",type:"text",name:"name",value:r,onChange:function(t){return u(t.target.value)},autoComplete:"off"}),c.a.createElement("input",{className:d.a.Input,placeholder:"Phone",type:"number",name:"phone",value:m,onChange:function(t){return f(t.target.value)},autoComplete:"off"}),c.a.createElement("button",{className:d.a.Button,type:"submit"},"Add contact"))},h=n(17),E=n.n(h),g=function(t){var e=t.filter,n=t.setFilter;return c.a.createElement("div",null,c.a.createElement("input",{className:E.a.Input,type:"text",value:e,onChange:function(t){return n(t.target.value)},id:"search",autoComplete:"off",placeholder:"Search"}),"Search contact")},v=(n(33),n(8));r.a.render(c.a.createElement((function(){var t=Object(a.useState)([]),e=Object(l.a)(t,2),n=e[0],o=e[1],r=Object(a.useState)(""),i=Object(l.a)(r,2),s=i[0],m=i[1];return Object(a.useEffect)((function(){try{var t=localStorage.getItem("contacts");if(!t)return;o(JSON.parse(t))}catch(e){console.log(e)}}),[]),Object(a.useEffect)((function(){localStorage.setItem("contacts",JSON.stringify(n))}),[n]),c.a.createElement(c.a.Fragment,null,c.a.createElement(b,{addContact:function(t){return function(t){void 0===n.find((function(e){return e.name.toLowerCase()===t.name}))?o((function(e){return[t].concat(Object(u.a)(e))})):v.NotificationManager.warning("".concat(t.name," already exist"),"Try another name",3e3)}(t)}}),c.a.createElement(g,{filter:s,setFilter:m}),c.a.createElement(f,{contacts:n.filter((function(t){return t.name.toLowerCase().includes(s.toLowerCase())})),deleteContact:function(t){o((function(e){return e.filter((function(e){return e.id!==t}))}))}}),c.a.createElement(v.NotificationContainer,null))}),null),document.getElementById("root"))},7:function(t,e,n){t.exports={ContactListItem:"ContactListItem_ContactListItem__IiP-t",Button:"ContactListItem_Button__3tpiX"}}},[[19,1,2]]]);
//# sourceMappingURL=main.895d3a85.chunk.js.map