(this["webpackJsonpreact-typewriter-component-example"]=this["webpackJsonpreact-typewriter-component-example"]||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(2),l=n.n(a),u=n(1),o=function(e,t,n){var c=Object(r.useRef)(),a=Object(r.useRef)(null);Object(r.useEffect)((function(){c.current=e}),[e]),Object(r.useEffect)((function(){if(null!==t)return a.current=setInterval((function(){c.current()}),t),function(){return clearInterval(a.current)}}),[t]),Object(r.useEffect)((function(){n&&clearInterval(a.current)}),[n])},s=function(e){switch(e){case"R":return{color:"red"};case"B":return{color:"blue"};default:return{color:"black"}}},i=function(e){var t=e.msg,n=e.typeSpeed,a=e.callback,l=Object(r.useState)(null),i=Object(u.a)(l,2),f=i[0],m=i[1],b=Object(r.useState)(!0),p=Object(u.a)(b,2),g=p[0],d=p[1],h=Object(r.useState)(!1),v=Object(u.a)(h,2),E=v[0],y=v[1],j=Object(r.useRef)([{msg:"",flags:{color:"black"}}]),O=Object(r.useRef)(0),k=Object(r.useRef)(0),S=Object(r.useRef)(a);o((function(){d((function(e){return!e}))}),250,E),o((function(){if(f){var e=f.slice();e[O.current]+=j.current[O.current].msg.charAt(k.current),m(e),k.current+=1,k.current>=j.current[O.current].msg.length&&(k.current=0,O.current+=1),O.current>=j.current.length&&y(!0)}}),n,E);return Object(r.useEffect)((function(){for(var e=0,n=!1,r=0;r<t.length;r++){if("\\"===t.charAt(r)){e+=1;var c={color:"black"};(n=!n)&&(c=s(t.charAt(r+1))),j.current.push({msg:"",flags:c}),r+=2}j.current[e].msg+=t.charAt(r)}var a=new Array(j.current.length).fill("");m(a);var l=function e(){a&&(y(!0),document.removeEventListener("keypress",e),document.removeEventListener("click",e))};document.addEventListener("keypress",l),document.addEventListener("click",l)}),[t,n]),Object(r.useEffect)((function(){E&&(d(!1),S.current())}),[E]),E?c.a.createElement(r.Fragment,null,j.current.map((function(e,t){return c.a.createElement("span",{key:t,style:{color:e.flags.color}},e.msg)})),c.a.createElement("br",null),c.a.createElement("br",null)):c.a.createElement(r.Fragment,null,f&&f.map((function(e,t){return c.a.createElement("span",{key:t,style:{color:j.current[t].flags.color}},e)})),g&&c.a.createElement(r.Fragment,null,"|"),c.a.createElement("br",null),c.a.createElement("br",null))},f=function(e){var t=e.msgs,n=e.typeSpeed,a=e.actionables,l=e.active,o=void 0===l||l,s=Object(r.useState)(null),f=Object(u.a)(s,2),m=f[0],b=f[1],p=Object(r.useState)(!1),g=Object(u.a)(p,2),d=g[0],h=g[1],v=Object(r.useRef)();return Object(r.useEffect)((function(){var e=new Array(t.length).fill(!1);e[0]=!0,b(e)}),[t.length]),Object(r.useEffect)((function(){return o?v.current.scrollIntoView({behavior:"smooth"}):void 0})),o?c.a.createElement(r.Fragment,null,m&&t.map((function(e,r){return m[r]?c.a.createElement(i,{key:r,msg:e,typeSpeed:n,callback:function(){var e=m.slice();r+1<t.length?(e[r+1]=!0,b(e)):h(!0)}}):null})),d&&c.a.createElement("div",{className:"button-container"},a.map((function(e,t){return c.a.createElement("button",{key:t,onClick:e.callback?function(){e.callback(),h(!1)}:null},e.text)}))),c.a.createElement("div",{ref:v})):c.a.createElement(r.Fragment,null)},m=function(){var e=Object(r.useState)(!1),t=Object(u.a)(e,2),n=t[0],a=t[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement(f,{msgs:["Here is an example on how to use this React component.","Currently, only colours \\Rred\\R and \\Bblue\\B are supported. More to come.","Style the component using regular CSS.","Messages can be skipped by clicking or pressing space.","Actionables are buttons displayed after the messages have been finished typing.","They have callbacks that can be used to set state (or whatever you like) to move your text adventure along.","The 'StoryPage' component has an 'active' switch that can be used to prompt new text to display after actionables.","Forthcoming features will include conditionals for actionables, more typing effects, sound queues, and more."],typeSpeed:100,actionables:[{text:"Click me for more text.",callback:function(){return a(!0)}},{text:"Non-functional actionable"}]}),c.a.createElement(f,{msgs:["You clicked the button and activated more text! This one types faster.","That's all for the example."],actionables:[{text:"Non-functional actionable"}],active:n}))};n(10);l.a.render(c.a.createElement(m,null),document.getElementById("root"))},3:function(e,t,n){e.exports=n(11)}},[[3,1,2]]]);
//# sourceMappingURL=main.fa50375d.chunk.js.map