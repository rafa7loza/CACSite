(this.webpackJsonpcac_site=this.webpackJsonpcac_site||[]).push([[0],{27:function(e,t,a){e.exports=a(55)},32:function(e,t,a){},33:function(e,t,a){},41:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(24),l=a.n(c),i=(a(32),a(6)),o=a(8),s=(a(33),function(e){var t=e.onClick,a=e.children,n=e.className;return r.a.createElement("div",{className:"cac_button ".concat(n||""),onClick:t},a)}),u=a(7),m=a.n(u),f=a(12),d=a(11),p=a(13),g=a.n(p);a(35),a(39);g.a.initializeApp({apiKey:"AIzaSyCGuTMhZblWZXxX_5HLcgpOrFVB7GD6OPI",authDomain:"cacsite-d2389.firebaseapp.com",databaseURL:"https://cacsite-d2389.firebaseio.com",projectId:"cacsite-d2389",storageBucket:"cacsite-d2389.appspot.com",messagingSenderId:"955823965171",appId:"1:955823965171:web:40f5d9fa10fc6ca4960886",measurementId:"G-2EZ3Z62XX5"});var C=g.a.firestore(),v=g.a.auth(),E=new g.a.auth.GoogleAuthProvider,h=function(){return v.signInWithRedirect(E)},b=function(e,t){var a,n,r,c;return m.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:if(e){l.next=2;break}return l.abrupt("return");case 2:return a=C.doc("users/".concat(e.uid)),l.next=5,m.a.awrap(a.get());case 5:if(l.sent.exists){l.next=16;break}return n=e.displayName,r=e.email,c=e.photoURL,l.prev=8,l.next=11,m.a.awrap(a.set(Object(f.a)({displayName:n,photoURL:c,email:r},t)));case 11:l.next=16;break;case 13:l.prev=13,l.t0=l.catch(8),console.error("Error creating user",l.t0.mesage);case 16:return l.abrupt("return",_(e.uid));case 17:case"end":return l.stop()}}),null,null,[[8,13]])},_=function(e){var t;return m.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(e){a.next=2;break}return a.abrupt("return",null);case 2:return a.prev=2,a.next=5,m.a.awrap(C.doc("users/".concat(e)).get());case 5:return t=a.sent,a.abrupt("return",Object(f.a)({uid:e},t.data()));case 9:a.prev=9,a.t0=a.catch(2),console.error("Error feching user",a.t0.mesage);case 12:case"end":return a.stop()}}),null,null,[[2,9]])},O=Object(n.createContext)({}),L=function(e){var t=e.children,a=Object(n.useState)({isLoading:!0}),c=Object(d.a)(a,2),l=c[0],i=c[1];return Object(n.useEffect)((function(){return v.onAuthStateChanged((function(e){var t;return m.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(null==e){a.next=8;break}return i({isLoading:!0,logged:!0}),a.next=4,m.a.awrap(b(e));case 4:t=a.sent,i(Object(f.a)({},t,{isLoading:!1,logged:!0})),a.next=9;break;case 8:i({isLoading:!1,logged:!1});case 9:case"end":return a.stop()}}))}))}),[]),r.a.createElement(O.Provider,{value:l},t)};function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function w(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var N=r.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M30.1111 29.3764L32.2408 31.0362H34.8555L36.9852 29.3764H36.23L34.6843 30.5811H34.1696L34.8487 29.3764H33.2935L33.0273 30.5811H32.412L30.8663 29.3764H30.1111ZM30.1111 24.8819V25.523H36.9852V24.8819H30.1111ZM30.1111 26.0432V26.634H36.9852V26.0432H30.1111ZM30.1111 27.1543V27.7451H36.9852V27.1543H30.1111ZM30.1111 28.2653V28.8562H36.9852V28.2653H30.1111ZM29.0666 24.2299H38.0297V29.8477L35.2276 32.0304H31.8687L29.0666 29.8477V24.2299Z",fill:"#918F8F"}),j=r.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.6817 5.90298C14.3622 5.90298 15.0169 6.01164 15.6308 6.21267C16.4159 6.00621 17.239 5.89619 18.0893 5.89619C18.4084 5.89619 18.7236 5.91249 19.036 5.94237C19.6567 5.40315 20.4676 5.07716 21.3545 5.07716C23.0863 5.07716 24.5274 6.32133 24.833 7.96482C25.6452 8.08978 26.3678 8.49046 26.8989 9.06772C26.5892 9.38555 26.3013 9.72512 26.0391 10.0823C27.104 11.6335 27.7288 13.5119 27.7288 15.5357C27.7288 16.3493 27.6283 17.1371 27.4381 17.891C27.5753 18.4057 27.6487 18.945 27.6487 19.5018C27.6487 22.9545 24.8493 25.7539 21.3953 25.7539C20.4418 25.7539 19.5385 25.5407 18.729 25.1576C17.9208 26.2388 16.6305 26.9397 15.1772 26.9397C12.8899 26.9397 11.0073 25.2065 10.7696 22.9817C8.44971 22.8391 6.61199 20.9131 6.61199 18.5579C6.61199 17.1928 7.22864 15.9731 8.19844 15.1609C7.7081 14.2685 7.42966 13.2444 7.42966 12.155C7.42966 8.70235 10.229 5.90298 13.6817 5.90298ZM18.0893 6.77227C20.5518 6.77227 22.778 7.78824 24.3698 9.42494L21.0992 12.697C20.344 11.897 19.275 11.3985 18.0893 11.3985C15.8033 11.3985 13.9507 13.2512 13.9507 15.5357C13.9507 17.8217 15.8033 19.6743 18.0893 19.6743C19.275 19.6743 20.344 19.1759 21.0992 18.3759L24.3698 21.6479C22.778 23.2832 20.5518 24.3006 18.0893 24.3006C13.2484 24.3006 9.32443 20.3766 9.32443 15.5357C9.32443 10.6963 13.2484 6.77227 18.0893 6.77227ZM18.0893 6.20044C23.2452 6.20044 27.4246 10.3798 27.4246 15.5357C27.4246 20.6917 23.2452 24.8724 18.0893 24.8724C12.9333 24.8724 8.7526 20.6917 8.7526 15.5357C8.7526 10.3798 12.9333 6.20044 18.0893 6.20044ZM7.76379 22.9844C9.36246 22.9844 10.6582 24.2802 10.6582 25.8802C10.6582 27.4789 9.36246 28.776 7.76379 28.776C6.16377 28.776 4.86663 27.4789 4.86663 25.8802C4.86663 24.2802 6.16377 22.9844 7.76379 22.9844ZM2.25335 26.5661C3.49751 26.5661 4.50534 27.574 4.50534 28.8195C4.50534 30.0636 3.49751 31.0715 2.25335 31.0715C1.00918 31.0715 0 30.0636 0 28.8195C0 27.574 1.00918 26.5661 2.25335 26.5661Z",fill:"#4A79C6"}),x=r.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M33.6358 6.23168C36.643 6.23168 39.3215 7.64155 41.0465 9.83649C39.9313 11.4569 39.278 13.4209 39.278 15.5357C39.278 16.1646 39.335 16.7785 39.4451 17.3748L34.5268 7.03848C33.8586 7.03848 33.1917 7.03848 32.5248 7.03848L28.1308 16.2706C28.1484 16.0274 28.158 15.7816 28.158 15.5357C28.158 13.6002 27.6079 11.7231 26.5647 10.1C26.7644 9.84464 26.979 9.60015 27.2058 9.36789C27.3647 9.2049 27.3688 8.94683 27.2153 8.77841L27.2058 8.7689C28.8887 7.19468 31.1488 6.23168 33.6358 6.23168ZM33.2324 0H34.0378V4.82724H33.2324V0ZM23.3986 3.80448L22.8037 4.34642L23.9949 5.65442C24.2027 5.83914 24.3915 6.0456 24.5559 6.27107L26.0364 7.89826L26.0608 7.90913L26.6489 7.37533L23.3986 3.80448ZM28.3631 0.910032L27.6133 1.19934L29.3546 5.70196L30.1057 5.41129L28.3631 0.910032ZM43.8716 3.80448L44.4665 4.34642L41.2176 7.91728L40.6213 7.37533L43.8716 3.80448ZM38.9072 0.910032L39.657 1.19934L37.9157 5.70196L37.1646 5.41129L38.9072 0.910032ZM29.3519 23.2887L29.8694 22.2021H37.1822L37.6997 23.2887H29.3519ZM35.2834 18.2115L33.5258 14.517L31.7682 18.2115H35.2834Z",fill:"#FAD306"}),H=r.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M49.3468 5.89619C54.6698 5.89619 58.9864 10.2127 58.9864 15.5357C58.9864 20.1008 55.8135 23.9243 51.5526 24.9226L55.258 27.1787L48.2385 28.8847L50.5407 25.1019C50.1496 25.1508 49.7516 25.1766 49.3468 25.1766C44.0225 25.1766 39.7059 20.8601 39.7059 15.5357C39.7059 10.2127 44.0225 5.89619 49.3468 5.89619ZM49.3468 6.77227C51.8094 6.77227 54.0355 7.78825 55.6274 9.42494L52.3567 12.697C51.6015 11.897 50.5326 11.3985 49.3468 11.3985C47.0609 11.3985 45.2082 13.2512 45.2082 15.5357C45.2082 17.8217 47.0609 19.6743 49.3468 19.6743C50.5326 19.6743 51.6015 19.1759 52.3567 18.3759L55.6274 21.6479C54.0355 23.2832 51.8094 24.3006 49.3468 24.3006C44.506 24.3006 40.582 20.3766 40.582 15.5357C40.582 10.6963 44.506 6.77227 49.3468 6.77227Z",fill:"#AB1C21"}),R=r.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M51.6449 28.0575C51.9383 30.2022 52.3893 31.7316 55.1139 31.574C56.5292 31.4925 57.6865 31.6637 58.5136 32.0385C59.1099 32.3075 59.5432 32.6837 59.7891 33.1496C60.0091 33.5652 60.077 34.0433 59.9792 34.5717H59.387C59.4902 34.1316 59.4495 33.7445 59.277 33.4199C59.0923 33.0695 58.7527 32.7815 58.276 32.5655C57.5303 32.2287 56.4654 32.0766 55.1465 32.1513C52.157 32.317 51.3774 30.6721 51.0731 28.196L51.6449 28.0575Z",fill:"#231F20"}),Z=function(e){var t=e.svgRef,a=e.title,n=w(e,["svgRef","title"]);return r.a.createElement("svg",y({width:61,height:35,viewBox:"0 0 61 35",fill:"none",ref:t},n),a?r.a.createElement("title",null,a):null,N,j,x,H,R)},M=r.a.forwardRef((function(e,t){return r.a.createElement(Z,y({svgRef:t},e))}));a.p;function V(){return(V=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function k(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var P=r.a.createElement("rect",{width:18,height:18,fill:"none"}),S=r.a.createElement("path",{d:"M14.9731 5.99063H7.18247C6.44419 5.99063 5.84302 6.5918 5.84302 7.33008V12.7547C5.84302 13.493 6.44419 14.0906 7.18247 14.0906H11.6403C11.7387 14.0906 11.8372 14.1328 11.9075 14.2031L14.1223 16.2457C14.2454 16.3652 14.4493 16.316 14.4493 16.1438V14.3649C14.4493 14.1539 14.5829 14.0871 14.7938 14.0871H14.829C15.5672 14.0871 16.309 13.493 16.309 12.7512V7.33008C16.3125 6.58829 15.7114 5.99063 14.9731 5.99063V5.99063Z",fill:"currentColor"}),F=r.a.createElement("path",{d:"M6.13125 5.1293H12.368V2.83359C12.368 2.20078 11.8547 1.6875 11.2219 1.6875H2.83359C2.20078 1.6875 1.6875 2.20078 1.6875 2.83359V8.64141C1.6875 9.27422 2.20078 9.7875 2.83359 9.7875H4.98164V6.27539C4.98516 5.64258 5.49844 5.1293 6.13125 5.1293V5.1293Z",fill:"currentColor"}),I=function(e){var t=e.svgRef,a=e.title,n=k(e,["svgRef","title"]);return r.a.createElement("svg",V({width:18,height:18,viewBox:"0 0 18 18",fill:"none",ref:t},n),a?r.a.createElement("title",null,a):null,P,S,F)},A=r.a.forwardRef((function(e,t){return r.a.createElement(I,V({svgRef:t},e))}));a.p;function B(){return(B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function U(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var D=r.a.createElement("path",{d:"M6.5 15C7.34127 15 8.02938 14.325 8.02938 13.5H4.97058C4.97058 14.325 5.65873 15 6.5 15ZM11.4706 10.5V6.375C11.4706 4.0875 9.82656 2.13757 7.64706 1.64996V1.125C7.64706 0.487428 7.15007 0 6.5 0C5.84993 0 5.35293 0.487428 5.35293 1.125V1.64996C3.1734 2.13757 1.52938 4.0875 1.52938 6.375V10.5L0 12V12.75H13V12L11.4706 10.5Z",fill:"currentColor"}),G=function(e){var t=e.svgRef,a=e.title,n=U(e,["svgRef","title"]);return r.a.createElement("svg",B({width:13,height:15,viewBox:"0 0 13 15",fill:"none",ref:t},n),a?r.a.createElement("title",null,a):null,D)},W=r.a.forwardRef((function(e,t){return r.a.createElement(G,B({svgRef:t},e))}));a.p;function X(){return(X=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function q(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var z=r.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.375 12.75C2.85419 12.75 0 9.89579 0 6.37499C0 2.85418 2.85419 0 6.375 0C9.89582 0 12.75 2.85418 12.75 6.37499C12.75 7.87268 12.2335 9.24975 11.369 10.3378L14.7864 13.7552C15.0712 14.04 15.0712 14.5017 14.7864 14.7864C14.5017 15.0712 14.04 15.0712 13.7552 14.7864L10.3378 11.369C9.24973 12.2335 7.87268 12.75 6.375 12.75ZM11.25 6.37495C11.25 9.06733 9.06739 11.2499 6.375 11.2499C3.68261 11.2499 1.5 9.06733 1.5 6.37495C1.5 3.68257 3.68261 1.49996 6.375 1.49996C9.06739 1.49996 11.25 3.68257 11.25 6.37495Z",fill:"currentColor"}),J=function(e){var t=e.svgRef,a=e.title,n=q(e,["svgRef","title"]);return r.a.createElement("svg",X({width:15,height:15,viewBox:"0 0 15 15",fill:"none",ref:t},n),a?r.a.createElement("title",null,a):null,z)},K=r.a.forwardRef((function(e,t){return r.a.createElement(J,X({svgRef:t},e))})),T=(a.p,a(41),function(){var e=Object(n.useContext)(O),t=Object(o.f)();return console.log(t),r.a.createElement("div",{className:"cac_header"},r.a.createElement(M,{alt:"Club de Algoritmia CUCEI logo",className:"cac_header_logo"}),r.a.createElement("div",{className:"cac_user-interface"},r.a.createElement(K,{className:"cac_header_icon search-icon",alt:"search icon"}),!e.isLoading&&e.logged?r.a.createElement(r.a.Fragment,null,r.a.createElement(A,{className:"cac_header_icon message-icon",alt:"message icon"}),r.a.createElement(W,{className:"cac_header_icon notification-icon",alt:"notification icon"}),r.a.createElement("img",{src:e.photoURL,alt:"user",className:"cac_header_user-photo"})):r.a.createElement(r.a.Fragment,null,r.a.createElement(i.b,{to:"/login"},r.a.createElement(s,{className:"cac_header_button cac_button--outline"},"Sign in ")),r.a.createElement(s,{className:"cac_header_button  cac_button--fill"},"Sign up"))))}),$=(a(46),function(){return r.a.createElement("div",{className:"cac_footer"})}),Q=(a(47),a(48),function(e){var t=e.user;return r.a.createElement("div",{className:"cac_user-side"},r.a.createElement("img",{src:t.photoURL,alt:"profile-pic",className:"cac_user-side_photo"}),r.a.createElement("div",{className:"cac_user-side_info"},r.a.createElement("p",{className:"cac_user-side_name"},t.displayName,r.a.createElement("br",null)," "),r.a.createElement("p",{className:"cac_user-side_mail"},t.email)))}),Y=function(e){var t=e.className,a=Object(n.useContext)(O);return r.a.createElement("div",{className:"cac_side ".concat(t)},!a.isLoading&&a.logged?r.a.createElement(Q,{user:a}):null)},ee=(a(49),function(e){e.className;var t=Object(n.useContext)(O);return r.a.createElement(r.a.Fragment,null,t.isLoading?null:r.a.createElement("div",{className:"cac_login"},t.logged?r.a.createElement("div",{className:"cac_logged"},r.a.createElement(s,{onClick:function(){return v.signOut()}},"Sign Out")):r.a.createElement("div",{className:"cac_login_buttons"},r.a.createElement(s,{onClick:function(){return h()},className:"login_button button button_outline"},r.a.createElement("span",null,"Log in")))))}),te=(a(50),function(e){var t=e.className,a=e.selection;return r.a.createElement("div",{className:"cac_navigation ".concat(t||"")},r.a.createElement(i.b,{to:"/home",className:"cac_section ".concat("home"===a?"active":"")},"Home"),r.a.createElement(i.b,{to:"/public",className:"cac_section ".concat("public"===a?"active":"")},"Public")," ",r.a.createElement(i.b,{to:"/editorial",className:"cac_section ".concat("editorial"===a?"active":"")},"Editorial")," ",r.a.createElement(i.b,{to:"/weekly-problem",className:"cac_section ".concat("weekly-problem"===a?"active":"")},"Weekly Problem"),r.a.createElement("div",{className:"login"},r.a.createElement(ee,null)))}),ae=(a(51),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(te,{selection:"home"}),r.a.createElement("div",{className:"cac_home"},r.a.createElement(Y,{className:"cac_home_side"})))});a(52);function ne(){return(ne=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function re(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var ce=r.a.createElement("path",{d:"M19.9883 9.20472H19.2499V9.16668H10.9999V12.8333H16.1805C15.4247 14.9678 13.3938 16.5 10.9999 16.5C7.96254 16.5 5.49992 14.0374 5.49992 11C5.49992 7.96264 7.96254 5.50001 10.9999 5.50001C12.402 5.50001 13.6775 6.02893 14.6487 6.89289L17.2415 4.30009C15.6043 2.7743 13.4144 1.83334 10.9999 1.83334C5.93763 1.83334 1.83325 5.93772 1.83325 11C1.83325 16.0623 5.93763 20.1667 10.9999 20.1667C16.0622 20.1667 20.1666 16.0623 20.1666 11C20.1666 10.3854 20.1033 9.78543 19.9883 9.20472Z",fill:"#FFC107"}),le=r.a.createElement("path",{d:"M2.89038 6.73338L5.90209 8.94209C6.71701 6.92451 8.69059 5.50001 11.0001 5.50001C12.4022 5.50001 13.6777 6.02893 14.6489 6.89288L17.2417 4.30009C15.6045 2.7743 13.4146 1.83334 11.0001 1.83334C7.47921 1.83334 4.4258 3.82114 2.89038 6.73338Z",fill:"#FF3D00"}),ie=r.a.createElement("path",{d:"M11 20.1666C13.3677 20.1666 15.5191 19.2605 17.1458 17.787L14.3087 15.3862C13.3884 16.0834 12.2444 16.5 11 16.5C8.61573 16.5 6.59127 14.9797 5.82861 12.8581L2.83936 15.1612C4.35644 18.1298 7.43736 20.1666 11 20.1666Z",fill:"#4CAF50"}),oe=r.a.createElement("path",{d:"M19.9884 9.2047H19.25V9.16666H11V12.8333H16.1805C15.8175 13.8586 15.158 14.7427 14.3073 15.3867C14.3078 15.3862 14.3083 15.3862 14.3087 15.3858L17.1458 17.7865C16.945 17.9689 20.1667 15.5833 20.1667 11C20.1667 10.3854 20.1034 9.78541 19.9884 9.2047Z",fill:"#1976D2"}),se=function(e){var t=e.svgRef,a=e.title,n=re(e,["svgRef","title"]);return r.a.createElement("svg",ne({width:22,height:22,viewBox:"0 0 22 22",fill:"none",ref:t},n),a?r.a.createElement("title",null,a):null,ce,le,ie,oe)},ue=r.a.forwardRef((function(e,t){return r.a.createElement(se,ne({svgRef:t},e))})),me=(a.p,a(53),function(){var e=Object(n.useState)(""),t=Object(d.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),i=Object(d.a)(l,2),o=i[0],u=i[1];return r.a.createElement("div",{className:"cac_sign-in"},r.a.createElement(M,{alt:"Club de Algoritmia CUCEI logo",className:"cac_sign-in_logo"}),r.a.createElement("div",{className:"cac_sign-in_container"},r.a.createElement("div",{className:"cac_sign-in_input-container"},r.a.createElement("span",{className:"cac_sign-in_label"},"Email address"),r.a.createElement("input",{className:"cac_sign-in_input",type:"email",id:"email",name:"email",required:!0,value:a,onChange:function(e){return c(e.target.value)}})),r.a.createElement("div",{className:"cac_sign-in_input-container"},r.a.createElement("span",{className:"cac_sign-in_label"},"Password"),r.a.createElement("span",{className:"cac_sign-in_add"},"Forgot password?"),r.a.createElement("input",{className:"cac_sign-in_input",type:"password",id:"password",name:"password",required:!0,value:o,onChange:function(e){return u(e.target.value)}})),r.a.createElement(s,{className:"cac_button--fill cac_sign-in_button"},"Sign in"),r.a.createElement("span",{className:"cac_sign-in_span"},"or"),r.a.createElement(s,{className:"cac_sign-in_google",onClick:function(){return h()}},r.a.createElement(ue,{className:"cac_sign-in_google-logo"}),r.a.createElement("span",null," Sign in with Google"))))});a(54);var fe=function(){return r.a.createElement(L,null,r.a.createElement("div",{className:"cac"},r.a.createElement(i.a,{basename:""},r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/",render:function(e){var t=e.match;return r.a.createElement(r.a.Fragment,null,r.a.createElement(T,null)," ",r.a.createElement(ae,{match:t}),r.a.createElement($,null))}}),r.a.createElement(o.a,{exact:!0,path:"/home",render:function(e){var t=e.match;return r.a.createElement(r.a.Fragment,null,r.a.createElement(T,null)," ",r.a.createElement(ae,{match:t}),r.a.createElement($,null))}}),r.a.createElement(o.a,{exact:!0,path:"/login",render:function(e){var t=e.match;return r.a.createElement(me,{match:t})}}),r.a.createElement(o.a,{exact:!0,path:"/profile",render:function(e){var t=e.match;return r.a.createElement(r.a.Fragment,null,r.a.createElement(T,null)," ",r.a.createElement(ae,{match:t}),r.a.createElement($,null))}}),r.a.createElement(o.a,{exact:!0,path:"/profile/:uid",render:function(e){var t=e.match;return r.a.createElement(r.a.Fragment,null,r.a.createElement(T,null)," ",r.a.createElement(ae,{match:t}),r.a.createElement($,null))}}),r.a.createElement(o.a,{render:function(e){var t=e.match;return r.a.createElement(r.a.Fragment,null," ",r.a.createElement(T,null)," ",r.a.createElement(ae,{match:t})," ",r.a.createElement($,null))}}),r.a.createElement(ae,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(fe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[27,1,2]]]);
//# sourceMappingURL=main.853839a1.chunk.js.map