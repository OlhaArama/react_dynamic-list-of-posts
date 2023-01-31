(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],{17:function(e,t,s){},19:function(e,t,s){},20:function(e,t,s){"use strict";s.r(t);var c=s(9),a=s.n(c),n=s(10),i=s(2),l=s(1),o=(s(15),s(16),s(17),s(3)),r=s.n(o),d=s(0),m=function(e){var t=e.posts,s=e.selectedPost,c=e.setSelectedPost,a=e.setCommentsLoadingError;return Object(d.jsxs)("div",{"data-cy":"PostsList",children:[Object(d.jsx)("p",{className:"title",children:"Posts:"}),Object(d.jsxs)("table",{className:"table is-fullwidth is-striped is-hoverable is-narrow",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{className:"has-background-link-light",children:[Object(d.jsx)("th",{children:"#"}),Object(d.jsx)("th",{children:"Title"}),Object(d.jsx)("th",{children:" "})]})}),Object(d.jsx)("tbody",{children:t.map((function(e){return Object(d.jsxs)("tr",{"data-cy":"Post",children:[Object(d.jsx)("td",{"data-cy":"PostId",children:e.id}),Object(d.jsx)("td",{"data-cy":"PostTitle",children:e.title}),Object(d.jsx)("td",{className:"has-text-right is-vcentered",children:Object(d.jsx)("button",{type:"button","data-cy":"PostButton",className:r()("button","is-link",{"is-light":!s||e.id!==s.id}),onClick:function(){return function(e){s&&e.id===s.id?c(null):(c(e),a(!1))}(e)},children:s&&e.id===s.id?"Close":"Open"})})]},e.id)}))})]})]})},j=(s(19),function(){return Object(d.jsx)("div",{className:"Loader","data-cy":"Loader",children:Object(d.jsx)("div",{className:"Loader__content"})})}),b=s(7),u=s(4),h="https://mate.academy/students-api";function O(e){return new Promise((function(t){setTimeout(t,e)}))}function x(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,c={method:t};return s&&(c.body=JSON.stringify(s),c.headers={"Content-Type":"application/json; charset=UTF-8"}),O(300).then((function(){return fetch(h+e,c)})).then((function(e){if(!e.ok)throw new Error;return e.json()}))}var f=function(e){return x(e)},N=function(e,t){return x(e,"POST",t)},p=function(e){return x(e,"DELETE")},y=function(e){var t=e.addComment,s=e.selectedPostId,c=Object(l.useState)(!1),a=Object(i.a)(c,2),n=a[0],o=a[1],m=Object(l.useState)(!1),j=Object(i.a)(m,2),h=j[0],O=j[1],x=Object(l.useState)(!1),f=Object(i.a)(x,2),p=f[0],y=f[1],g=Object(l.useState)(!1),v=Object(i.a)(g,2),C=v[0],S=v[1],w=Object(l.useState)({postId:0,name:"",email:"",body:""}),E=Object(i.a)(w,2),k=E[0],P=E[1],L=function(e){var t=e.target,s=t.name,c=t.value;switch(P(Object(u.a)(Object(u.a)({},k),{},Object(b.a)({},s,c))),s){case"name":o(!1);break;case"email":O(!1);break;case"body":y(!1)}};return Object(d.jsxs)("form",{"data-cy":"NewCommentForm",onSubmit:function(e){e.preventDefault(),k&&!k.name.trim()&&o(!0),k&&!k.email.trim()&&O(!0),k&&!k.body.trim()&&y(!0),k&&k.name.trim()&&k.email.trim()&&k.body.trim()&&(S(!0),function(e,t){return N("/comments",Object(u.a)(Object(u.a)({},e),{},{postId:t}))}({name:k.name,email:k.email,body:k.body},s).then((function(e){t(Object(u.a)({},e)),o(!1),O(!1),y(!1),P(Object(u.a)(Object(u.a)({},k),{},{body:""}))})).finally((function(){S(!1)})))},children:[Object(d.jsxs)("div",{className:"field","data-cy":"NameField",children:[Object(d.jsx)("label",{className:"label",htmlFor:"comment-author-name",children:"Author Name"}),Object(d.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(d.jsx)("input",{type:"text",name:"name",id:"comment-author-name",placeholder:"Name Surname",className:r()("input",{"is-danger":n}),value:k.name,onChange:L}),Object(d.jsx)("span",{className:"icon is-small is-left",children:Object(d.jsx)("i",{className:"fas fa-user"})}),n&&Object(d.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(d.jsx)("i",{className:"fas fa-exclamation-triangle"})})]}),n&&Object(d.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Name is required"})]}),Object(d.jsxs)("div",{className:"field","data-cy":"EmailField",children:[Object(d.jsx)("label",{className:"label",htmlFor:"comment-author-email",children:"Author Email"}),Object(d.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(d.jsx)("input",{type:"text",name:"email",id:"comment-author-email",placeholder:"email@test.com",className:r()("input",{"is-danger":h}),value:k.email,onChange:L}),Object(d.jsx)("span",{className:"icon is-small is-left",children:Object(d.jsx)("i",{className:"fas fa-envelope"})}),h&&Object(d.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(d.jsx)("i",{className:"fas fa-exclamation-triangle"})})]}),h&&Object(d.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Email is required"})]}),Object(d.jsxs)("div",{className:"field","data-cy":"BodyField",children:[Object(d.jsx)("label",{className:"label",htmlFor:"comment-body",children:"Comment Text"}),Object(d.jsx)("div",{className:"control",children:Object(d.jsx)("textarea",{id:"comment-body",name:"body",placeholder:"Type comment here",className:r()("textarea",{"is-danger":p}),value:k.body,onChange:L})}),p&&Object(d.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Enter some text"})]}),Object(d.jsxs)("div",{className:"field is-grouped",children:[Object(d.jsx)("div",{className:"control",children:Object(d.jsx)("button",{type:"submit",className:r()("button","is-link",{"is-loading":C}),children:"Add"})}),Object(d.jsx)("div",{className:"control",children:Object(d.jsx)("button",{type:"reset",className:"button is-link is-light",onClick:function(){P({postId:s,name:"",email:"",body:""}),o(!1),O(!1),y(!1)},children:"Clear"})})]})]})},g=function(e){var t=e.selectedPost,s=e.comments,c=e.isLoadingComments,a=e.commentsLoadingError,n=e.createNewComment,i=e.isAddingNewComment,l=e.addComment,o=e.deleteComment;return Object(d.jsx)("div",{className:"content","data-cy":"PostDetails",children:Object(d.jsxs)("div",{className:"content","data-cy":"PostDetails",children:[Object(d.jsxs)("div",{className:"block",children:[Object(d.jsx)("h2",{"data-cy":"PostTitle",children:"#".concat(t.id,": ").concat(t.title)}),Object(d.jsx)("p",{"data-cy":"PostBody",children:t.body})]}),Object(d.jsxs)("div",{className:"block",children:[c&&Object(d.jsx)(j,{}),a&&Object(d.jsx)("div",{className:"notification is-danger","data-cy":"CommentsError",children:"Something went wrong"}),!c&&!a&&!s.length&&Object(d.jsx)("p",{className:"title is-4","data-cy":"NoCommentsMessage",children:"No comments yet"}),!c&&!a&&s.length>0&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("p",{className:"title is-4",children:"Comments:"}),s.map((function(e){return Object(d.jsxs)("article",{className:"message is-small","data-cy":"Comment",children:[Object(d.jsxs)("div",{className:"message-header",children:[Object(d.jsx)("a",{href:"mailto:".concat(e.email),"data-cy":"CommentAuthor",children:e.name}),Object(d.jsx)("button",{"data-cy":"CommentDelete",type:"button",className:"delete is-small","aria-label":"delete",onClick:function(){return o(e.id)},children:"delete button"})]}),Object(d.jsx)("div",{className:"message-body","data-cy":"CommentBody",children:e.body})]},e.id)}))]}),!c&&!i&&!a&&Object(d.jsx)("button",{"data-cy":"WriteCommentButton",type:"button",className:"button is-link",onClick:n,children:"Write a comment"})]}),i&&!c&&!a&&Object(d.jsx)(y,{addComment:l,selectedPostId:t.id})]})})},v=function(e){var t=e.users,s=e.selectUser,c=e.selectedUser,a=Object(l.useState)(!1),n=Object(i.a)(a,2),o=n[0],m=n[1];return Object(d.jsxs)("div",{"data-cy":"UserSelector",className:"dropdown is-active",children:[Object(d.jsx)("div",{className:"dropdown-trigger",children:Object(d.jsxs)("button",{type:"button",className:"button","aria-haspopup":"true","aria-controls":"dropdown-menu",onClick:function(){return m(!o)},children:[Object(d.jsx)("span",{children:(null===c||void 0===c?void 0:c.name)||"Choose a user"}),Object(d.jsx)("span",{className:"icon is-small",children:Object(d.jsx)("i",{className:"fas fa-angle-down","aria-hidden":"true"})})]})}),o&&Object(d.jsx)("div",{className:"dropdown-menu",id:"dropdown-menu",role:"menu",children:Object(d.jsx)("div",{className:"dropdown-content",children:t.map((function(e){return Object(d.jsx)("a",{href:"#user-".concat(e.id),className:r()("dropdown-item",{"is-active":!1}),onClick:function(){return function(e){s(e),m(!o)}(e)},children:e.name},e.id)}))})})]})},C=function(){var e=Object(l.useState)([]),t=Object(i.a)(e,2),s=t[0],c=t[1],a=Object(l.useState)([]),o=Object(i.a)(a,2),b=o[0],u=o[1],h=Object(l.useState)(null),O=Object(i.a)(h,2),x=O[0],N=O[1],y=Object(l.useState)(!1),C=Object(i.a)(y,2),S=C[0],w=C[1],E=Object(l.useState)(!1),k=Object(i.a)(E,2),P=k[0],L=k[1],I=Object(l.useState)(null),T=Object(i.a)(I,2),F=T[0],U=T[1],A=Object(l.useState)([]),B=Object(i.a)(A,2),D=B[0],M=B[1],_=Object(l.useState)(!1),J=Object(i.a)(_,2),q=J[0],W=J[1],G=Object(l.useState)(!1),Y=Object(i.a)(G,2),z=Y[0],H=Y[1],K=Object(l.useState)(!1),Q=Object(i.a)(K,2),R=Q[0],V=Q[1];Object(l.useEffect)((function(){f("/users").then((function(e){return c(e)}))}),[]);Object(l.useEffect)((function(){var e;x&&(e=x.id,f("/posts?userId=".concat(e))).then((function(e){return u(e)})).catch((function(){return L(!0)})).finally((function(){return w(!1)}))}),[x]),Object(l.useEffect)((function(){var e;F&&(W(!0),V(!1),(e=F.id,f("/comments?postId=".concat(e))).then((function(e){return M(e)})).catch((function(){return H(!0)})).finally((function(){return W(!1)})))}),[F]);return Object(d.jsx)("main",{className:"section",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"tile is-ancestor",children:[Object(d.jsx)("div",{className:"tile is-parent",children:Object(d.jsxs)("div",{className:"tile is-child box is-success",children:[Object(d.jsx)("div",{className:"block",children:Object(d.jsx)(v,{users:s,selectedUser:x,selectUser:function(e){N(e),w(!0),u([]),U(null),M([]),L(!1)}})}),Object(d.jsxs)("div",{className:"block","data-cy":"MainContent",children:[!x&&Object(d.jsx)("p",{"data-cy":"NoSelectedUser",children:"No user selected"}),S&&Object(d.jsx)(j,{}),P&&Object(d.jsx)("div",{className:"notification is-danger","data-cy":"PostsLoadingError",children:"Something went wrong!"}),!b.length&&!S&&x&&!P&&Object(d.jsx)("div",{className:"notification is-warning","data-cy":"NoPostsYet",children:"No posts yet"}),x&&!P&&b.length>0&&Object(d.jsx)(m,{posts:b,selectedPost:F,setSelectedPost:U,setCommentsLoadingError:H})]})]})}),Object(d.jsx)("div",{"data-cy":"Sidebar",className:r()("tile","is-parent","is-8-desktop","Sidebar",{"Sidebar--open":F}),children:F&&Object(d.jsx)("div",{className:"tile is-child box is-success",children:Object(d.jsx)(g,{selectedPost:F,comments:D,isLoadingComments:q,commentsLoadingError:z,createNewComment:function(){V(!0)},isAddingNewComment:R,addComment:function(e){M([].concat(Object(n.a)(D),[e]))},deleteComment:function(e){M(D.filter((function(t){return t.id!==e}))),function(e){p("/comments/".concat(e))}(e)}})})})]})})})};a.a.render(Object(d.jsx)(C,{}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.083be05f.chunk.js.map