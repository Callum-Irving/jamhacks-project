(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{29:function(t,e,n){},30:function(t,e,n){},31:function(t,e,n){},41:function(t,e,n){},43:function(t,e,n){},44:function(t,e,n){},45:function(t,e,n){"use strict";n.r(e);var c=n(0),s=n.n(c),a=n(20),o=n.n(a),r=(n(29),n(30),n(31),n(9)),i=n(1);var l=function(){return Object(i.jsxs)("div",{className:"navbar",children:[Object(i.jsx)(r.b,{to:"/",className:"home-link",children:Object(i.jsx)("h1",{children:"TutorialRoach"})}),Object(i.jsxs)("ul",{className:"link-group",children:[Object(i.jsx)(r.b,{to:"/categories",children:Object(i.jsx)("button",{className:"navlink",children:"Categories"})}),Object(i.jsx)(r.b,{to:"/post",children:Object(i.jsx)("button",{className:"navlink",children:"Post"})})]})]})};n(41);var j=function(){return Object(i.jsxs)("div",{className:"content home",children:[Object(i.jsx)("h1",{children:"What is TutorialRoach?"}),Object(i.jsx)("p",{className:"info-paragraph",children:"TutorialRoach is an online learning site where anyone can create new tutorials/lessons! TutorialRoach uses blockchain technology to make stored data tamperproof, making this platform very secure."})]})},h=n(19),u=n(22);n(43);var b=function(){var t=Object(u.a)(),e=t.register,n=t.handleSubmit;return Object(i.jsx)("div",{className:"content",children:Object(i.jsxs)("form",{onSubmit:n((function(t){console.log(t),fetch("https://tutorial-roach.herokuapp.com/api/createpost",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(t){console.log(t)}))})),className:"post-form",children:[Object(i.jsx)("textarea",Object(h.a)(Object(h.a)({},e("content",{required:!0})),{},{className:"text-entry"})),Object(i.jsx)("button",{className:"submit-button",children:"Submit"})]})})},p=n(2),d=n.n(p),m=n(7),O=n(12),x=n(13),f=n(24),v=n(23),g=(n(44),function(t){Object(f.a)(n,t);var e=Object(v.a)(n);function n(t){var c;return Object(O.a)(this,n),(c=e.call(this,t)).componentDidMount=Object(m.a)(d.a.mark((function t(){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:fetch("https://tutorial-roach.herokuapp.com/api/getposts").then((function(t){if(t.ok)return t.json()})).then((function(t){c.setState({posts:t.posts})}));case 1:case"end":return t.stop()}}),t)}))),c.state={posts:[]},c}return Object(x.a)(n,[{key:"render",value:function(){return Object(i.jsxs)("div",{className:"content category-grid",children:[Object(i.jsx)("h1",{children:"All Posts"}),Object(i.jsx)("ul",{className:"posts",children:this.state.posts.map((function(t){return Object(i.jsx)("li",{children:t[1]},t[0])}))})]})}}]),n}(s.a.Component)),N=n(3);var k=function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(l,{}),Object(i.jsxs)(N.c,{children:[Object(i.jsx)(N.a,{exact:!0,path:"/",component:j}),Object(i.jsx)(N.a,{path:"/categories",component:g}),Object(i.jsx)(N.a,{path:"/post",component:b})]})]})};o.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(r.a,{children:Object(i.jsx)(k,{})})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.b9986317.chunk.js.map