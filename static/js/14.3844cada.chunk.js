(this.webpackJsonpcac_site=this.webpackJsonpcac_site||[]).push([[14],{515:function(e,t,a){"use strict";a.r(t);var n=a(3),c=a.n(n),r=a(4),o=a(0),s=a.n(o),l=a(5),i=a(26),u=a(9),m=a(77);t.default=function(e){var t=e.match,a=Object(o.useContext)(i.a),n=Object(o.useContext)(u.c),p=Object(o.useContext)(u.a),d=Object(o.useState)(!1),f=Object(r.a)(d,2),v=f[0],_=f[1],b=t.params.id;return Object(o.useEffect)((function(){a.fetch.weeklyProblems()}),[a.fetch]),Object(o.useEffect)((function(){var e=function(){return null};if(a.status.weeklyProblems){var t=a.posts.weeklyProblems.find((function(e){return e.id===b}));t?_(t):function(){var t;c.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:t=l.d.doc("weekly-problems/".concat(b));try{e=t.onSnapshot((function(e){return c.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:_(e.data());case 1:case"end":return t.stop()}}))}))}catch(n){console.error(n)}case 2:case"end":return a.stop()}}))}()}return e}),[b,a]),s.a.createElement(s.a.Fragment,null,v&&!n.isLoading&&s.a.createElement(m.a,{enableLink:!1,showAuthor:!1,allUsers:p.usersMap,className:"cac_home_post",data:v,from:"weekly-problems",cropContent:!1,showCommentaries:!0,user:n}))}},72:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return c})),a.d(t,"c",(function(){return o}));var n=function(e){switch(e){case 0:return"January";case 1:return"February";case 2:return"March";case 3:return"April";case 4:return"May";case 5:return"June";case 6:return"July";case 7:return"August";case 8:return"September";case 9:return"October";case 10:return"November";case 11:return"December";default:return null}},c=function(e){for(var t="",a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=a.length,c=0;c<e;c++)t+=a[Math.floor(Math.random()*n)];return t},r=/<br>|<\/br>|<br\/>/gi,o=function(e){return e.replace(r,"")}},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){"use strict";var n=a(3),c=a.n(n),r=a(4),o=a(0),s=a.n(o),l=a(5),i=a(7),u=a(82),m=a.n(u),p=a(83),d=a.n(p),f=a(73),v=a.n(f),_=a(518),b=a(508),h=(a(74),function(e){var t=e.language,a=void 0===t?null:t,n=e.value;return s.a.createElement(_.a,{language:a,style:b.a},n)}),y=a(18),g=a(25),E=a.n(g),k=(a(75),function(e){var t=e.author,a=e.date,n=e.content;return s.a.createElement("div",{className:"cac_commentary"},s.a.createElement("div",{className:"cac_commentary_heading"},s.a.createElement("img",{src:t&&t.photoURL||E.a,alt:t?t.displayName:"",className:"cac_commentary_photo"}),s.a.createElement("div",{className:"cac_commentary_heading_text"},s.a.createElement(i.b,{to:"/profile/".concat(t.id),className:"cac_commentary_name--link"},s.a.createElement(y.a,{className:"cac_commentary_name",rank:t?t.rank:null},t?t.displayName:"")),s.a.createElement(v.a,{className:"cac_post_date",date:a.toDate()}))),s.a.createElement("p",{className:"cac_commentary_content"},n))}),O=a(8);function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function N(e,t){if(null==e)return{};var a,n,c=function(e,t){if(null==e)return{};var a,n,c={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var j=s.a.createElement("title",null,"ionicons-v5-f"),x=function(e){var t=e.svgRef,a=e.title,n=N(e,["svgRef","title"]);return s.a.createElement("svg",w({width:512,height:512,viewBox:"0 0 512 512",ref:t},n),void 0===a?j:a?s.a.createElement("title",null,a):null,s.a.createElement("path",{d:"M352.92,80C288,80,256,144,256,144s-32-64-96.92-64C106.32,80,64.54,124.14,64,176.81c-1.1,109.33,86.73,187.08,183,252.42a16,16,0,0,0,18,0c96.26-65.34,184.09-143.09,183-252.42C447.46,124.14,405.68,80,352.92,80Z",style:{fill:"auto",stroke:"auto",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:32}}))},C=s.a.forwardRef((function(e,t){return s.a.createElement(x,w({svgRef:t},e))}));a.p;function L(){return(L=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function R(e,t){if(null==e)return{};var a,n,c=function(e,t){if(null==e)return{};var a,n,c={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var P=s.a.createElement("title",null,"ionicons-v5-l"),S=function(e){var t=e.svgRef,a=e.title,n=R(e,["svgRef","title"]);return s.a.createElement("svg",L({width:512,height:512,viewBox:"0 0 512 512",ref:t},n),void 0===a?P:a?s.a.createElement("title",null,a):null,s.a.createElement("path",{d:"M408,64H104a56.16,56.16,0,0,0-56,56V312a56.16,56.16,0,0,0,56,56h40v80l93.72-78.14a8,8,0,0,1,5.13-1.86H408a56.16,56.16,0,0,0,56-56V120A56.16,56.16,0,0,0,408,64Z",style:{fill:"auto",stroke:"auto",strokeLinejoin:"round",strokeWidth:32}}))},V=s.a.forwardRef((function(e,t){return s.a.createElement(S,L({svgRef:t},e))}));a.p;function F(){return(F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function M(e,t){if(null==e)return{};var a,n,c=function(e,t){if(null==e)return{};var a,n,c={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var D=s.a.createElement("title",null,"ionicons-v5-h"),U=function(e){var t=e.svgRef,a=e.title,n=M(e,["svgRef","title"]);return s.a.createElement("svg",F({width:512,height:512,viewBox:"0 0 512 512",ref:t},n),void 0===a?D:a?s.a.createElement("title",null,a):null,s.a.createElement("path",{d:"M352,48H160a48,48,0,0,0-48,48V464L256,336,400,464V96A48,48,0,0,0,352,48Z",style:{fill:"auto",stroke:"auto",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:32}}))},A=s.a.forwardRef((function(e,t){return s.a.createElement(U,F({svgRef:t},e))})),J=(a.p,a(72)),H=(a(76),a(86),d()({isValidNode:function(e){return"script"!==e.type&&"break"!==e.type}}));t.a=function(e){var t,a=e.user,n=e.from,u=void 0===n?"posts":n,p=e.showAuthor,d=void 0===p||p,f=e.enableLink,_=void 0===f||f,b=e.data,g=e.allUsers,w=e.preview,N=void 0!==w&&w,j=e.cropContent,x=void 0!==j&&j,L=e.showCommentaries,R=void 0!==L&&L,P=e.onClick,S=void 0===P?function(){return null}:P;t=g[b.author.id]||t;var F=Object(o.useState)(!1),M=Object(r.a)(F,2),D=M[0],U=M[1],B=Object(o.useState)(""),I=Object(r.a)(B,2),W=I[0],Z=I[1],Y=!N&&a.logged&&b.likesList.includes(a.uid),q=Object(o.useState)(!N&&a.logged&&a.saved.includes(b.id)),z=Object(r.a)(q,2),G=z[0],K=z[1];console.log(t);return s.a.createElement(s.a.Fragment,null,t&&s.a.createElement("div",{className:"cac_post ".concat(x?"cac_post--crop":""),onClick:S},s.a.createElement("div",{className:"cac_post_heading"},d&&s.a.createElement("img",{src:t.photoURL||E.a,className:"cac_post_heading_photo",alt:t.displayName}),s.a.createElement("div",{className:"cac_post_text-container"},_?s.a.createElement(i.b,{to:"/".concat(u,"/").concat(b.id),className:"cac_post_title cac_post_title--link"},b.title):s.a.createElement("span",{className:"cac_post_title"},b.title),d&&s.a.createElement(i.b,{to:"/profile/".concat(t.id),className:"cac_post_author--link"},s.a.createElement(y.a,{className:"cac_post_author",rank:t.rank},t.displayName)),N?s.a.createElement("span",{className:"cac_post_date"},b.date):s.a.createElement(v.a,{className:"cac_post_date",live:!1,date:b.timestamp?b.timestamp.toDate():new Date})),s.a.createElement("div",{className:"cac_post_icons"})),s.a.createElement(m.a,{className:"cac_post_content markdown-body ".concat(x?"cac_post_content--crop":""),source:Object(J.c)(b.content),renderers:{code:h},escapeHtml:!1,astPlugins:[H]}),s.a.createElement("div",{className:"cac_post_interaction"},s.a.createElement("div",{className:"cac_post_interaction-box",onClick:function(e){e.stopPropagation();!N&&a.logged?function(){var e;c.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=l.d.doc("".concat(u,"/").concat(b.id)),Y){t.next=6;break}return t.next=4,c.a.awrap(e.update({likesList:l.c.firestore.FieldValue.arrayUnion(a.uid)}));case 4:t.next=8;break;case 6:return t.next=8,c.a.awrap(e.update({likesList:l.c.firestore.FieldValue.arrayRemove(a.uid)}));case 8:case"end":return t.stop()}}))}():alert("You need to sign in to like posts")}},s.a.createElement("span",{className:"cac_post_interaction-counter"},b.likesList.length),s.a.createElement(C,{className:"cac_post_icon cac_post_heart ".concat(Y?"cac_post_heart--filled":"")}),s.a.createElement("span",{className:"cac_post_interaction-label"},"Like")),s.a.createElement("div",{className:"cac_post_interaction-box cac_post_interaction-box--comment"},s.a.createElement("span",{className:"cac_post_interaction-counter"},b.comments.length),s.a.createElement(V,{className:"cac_post_icon cac_post_comment"}),s.a.createElement("span",{className:"cac_post_interaction-label"},"Comment")),s.a.createElement("div",{className:"cac_post_interaction-box",onClick:function(e){e.stopPropagation();!N&&a.logged?function(){var e;c.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=l.d.doc("users/".concat(a.uid)),K(!G),G){t.next=7;break}return t.next=5,c.a.awrap(e.update({saved:l.c.firestore.FieldValue.arrayUnion(b.id)}));case 5:t.next=9;break;case 7:return t.next=9,c.a.awrap(e.update({saved:l.c.firestore.FieldValue.arrayRemove(b.id)}));case 9:case"end":return t.stop()}}))}():alert("you need to sign in to save posts")}},s.a.createElement(A,{className:"cac_post_icon cac_post_bookmark ".concat(G?"cac_post_bookmark--filled":"")}),s.a.createElement("span",{className:"cac_post_interaction-label"},"Save"))),R&&s.a.createElement("div",{className:"cac_post_commentaries-section"},a.logged&&s.a.createElement("div",{className:"cac_post_create-commentary"},s.a.createElement("textarea",{className:"cac_post_create-commentary_textarea",value:W,onChange:function(e){return Z(e.target.value)}}),s.a.createElement(O.b,{className:"cac_poist_create-commentary_button",onClick:function(){!D&&W&&function(){var e,t;c.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return U(!0),e=l.d.doc("".concat(u,"/").concat(b.id)),t={author:a.uid,content:W,date:new Date},n.next=5,c.a.awrap(e.update({comments:l.c.firestore.FieldValue.arrayUnion(t)}));case 5:U(!1),Z("");case 7:case"end":return n.stop()}}))}()}},"Comment")),s.a.createElement("div",{className:"cac_post_commentaries"},b.comments.sort((function(e,t){return t.date.toDate()-e.date.toDate()})).map((function(e,t){var a=e.author,n=e.content,c=e.date;return s.a.createElement(k,{key:t,author:g[a],content:n,date:c})}))))))}},84:function(e,t){}}]);
//# sourceMappingURL=14.3844cada.chunk.js.map