(this["webpackJsonpinstagram-post"]=this["webpackJsonpinstagram-post"]||[]).push([[0],{61:function(e,t,n){},70:function(e,t,n){var r={"./1.jpg":71,"./2.jpg":72,"./3.jpg":73,"./4.jpg":74,"./5.jpg":75};function o(e){var t=a(e);return n(t)}function a(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id=70},71:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/1.c73334b1.jpg"},72:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/2.b72eb251.jpg"},73:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/3.a692fe88.jpg"},74:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/4.b40ae7fe.jpg"},75:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/5.825d1c43.jpg"},77:function(e,t,n){var r={"./flower.jpg":78};function o(e){var t=a(e);return n(t)}function a(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id=77},78:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/flower.139557a3.jpg"},79:function(e,t,n){},81:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(15),c=n.n(a),i=(n(61),n(12)),s=n(20),u=Object(s.c)({name:"post",initialState:{posts:[{id:0,creator:{username:"kingkong123",location:"Los Angeles, California",profilePicture:"1"},media:"flower",likes:0,comments:[{id:0,postedBy:"John",profilePicture:"2",message:"Hey everyone! First post!",liked:!1,replies:[],repliedTo:null},{id:1,postedBy:"Sarah",profilePicture:"3",message:"Cool!!!",liked:!1,replies:[],repliedTo:null},{id:2,postedBy:"Krystal",profilePicture:"4",message:"Nice one.",liked:!1,replies:[],repliedTo:null}]}]},reducers:{addComment:function(e,t){e.posts[t.payload.postId].comments.push(t.payload.newComment)},toggleCommentLike:function(e,t){var n=e.posts[t.payload.postId].comments.find((function(e){return e.id===t.payload.commentId}));n.liked=!n.liked},fetchPosts:function(e){var t=JSON.parse(localStorage.getItem("posts")).posts;e.posts=t}}}),l=u.actions,d=l.addComment,f=l.toggleCommentLike,m=l.fetchPosts,p=u.reducer,j=n(99),g=n(107),b=n(100),O=n(43),h=n.n(O),x=n(2),v=function(e){var t=e.postCreator,r=t.username,o=t.location,a=t.profilePicture;return Object(x.jsx)(j.a,{avatar:Object(x.jsx)(g.a,{alt:r,src:n(70)("./".concat(a,".jpg")).default}),action:Object(x.jsx)(b.a,{"aria-label":"settings",children:Object(x.jsx)(h.a,{})}),title:r,subheader:o})},y=n(101),k=function(e){var t=e.postMedia;return Object(x.jsx)(y.a,{style:{height:300,width:345},component:"img",image:n(77)("./".concat(t,".jpg")).default,title:t})},w=n(105),C=n(33),S=n(45),I=n.n(S),N=n(44),P=n.n(N),B=function(e){var t=e.comment,n=Object(i.b)();return Object(x.jsxs)(w.a,{marginLeft:"auto",marginRight:"auto",width:"95%",display:"flex",alignItems:"center",children:[Object(x.jsxs)(w.a,{display:"flex",flexGrow:1,children:[Object(x.jsxs)(C.a,{style:{fontWeight:600},children:[t.postedBy," \xa0"]}),Object(x.jsx)(C.a,{children:t.message})]}),Object(x.jsx)(b.a,{"aria-label":t.liked?"unlike comment":"like comment",onClick:function(){return n(f({commentId:t.id,postId:0}))},children:t.liked?Object(x.jsx)(P.a,{}):Object(x.jsx)(I.a,{})})]})},E=function(e){var t=e.comments;return Object(x.jsx)(w.a,{width:"80%",border:1,borderColor:"grey.300",borderRadius:10,children:t.map((function(e){return Object(x.jsx)(B,{comment:e},e.id)}))})},J=n(103),L=n(32),T=n(106),A=n(102),D=function(){var e=Object(i.c)((function(e){return e.post.posts[0].comments})),t=Object(i.b)(),n=Object(r.useState)(""),o=Object(L.a)(n,2),a=o[0],c=o[1],s=function(n){n.preventDefault();var r={id:e.length,postedBy:JSON.parse(localStorage.getItem("user")).username,message:a,liked:!1,replies:[],repliedTo:null};t(d({newComment:r,postId:0})),c("")};return Object(x.jsx)(w.a,{padding:1,marginLeft:"auto",marginRight:"auto",width:"80%",children:Object(x.jsxs)("form",{style:{display:"flex"},onSubmit:s,children:[Object(x.jsx)(T.a,{placeholder:"Add a comment...",fullWidth:!0,value:a,onChange:function(e){c(e.target.value)}}),Object(x.jsx)(A.a,{color:"primary",style:{fontWeight:600,textTransform:"none",marginLeft:"auto"},onClick:s,children:"Post"})]})})},F=function(e){var t=e.postId,n=Object(i.c)((function(e){return e.post.posts[t]})),r=n.creator,o=n.comments,a=n.media;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(v,{postCreator:r}),Object(x.jsx)(J.a,{}),Object(x.jsx)(k,{postMedia:a}),Object(x.jsx)(E,{comments:o}),Object(x.jsx)(J.a,{}),Object(x.jsx)(D,{})]})},M=function(){var e=Object(i.c)((function(e){return e.post})),t=Object(i.b)();return Object(r.useEffect)((function(){JSON.parse(localStorage.getItem("posts"))&&t(m())}),[t]),Object(r.useEffect)((function(){localStorage.setItem("posts",JSON.stringify(e))}),[e]),Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(F,{postId:0})})};n(79);var W=function(){return Object(r.useEffect)((function(){localStorage.getItem("user")||localStorage.setItem("user",JSON.stringify({username:"waterguy242",profilePicture:"/static/images/avatar/5.jpg"}))}),[]),Object(x.jsx)("div",{className:"App",children:Object(x.jsx)("header",{className:"App-header",children:Object(x.jsx)(M,{})})})},R=n(39),U=n.n(R),_=n(46);function G(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return new Promise((function(t){return setTimeout((function(){return t({data:e})}),500)}))}var H=Object(s.b)("counter/fetchCount",function(){var e=Object(_.a)(U.a.mark((function e(t){var n;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G(t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),K=Object(s.c)({name:"counter",initialState:{value:0,status:"idle"},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},incrementByAmount:function(e,t){e.value+=t.payload}},extraReducers:function(e){e.addCase(H.pending,(function(e){e.status="loading"})).addCase(H.fulfilled,(function(e,t){e.status="idle",e.value+=t.payload}))}}),$=K.actions,q=($.increment,$.decrement,$.incrementByAmount,K.reducer),z=Object(s.a)({reducer:{counter:q,post:p}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(Object(x.jsx)(o.a.StrictMode,{children:Object(x.jsx)(i.a,{store:z,children:Object(x.jsx)(W,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[81,1,2]]]);
//# sourceMappingURL=main.41ec1d91.chunk.js.map