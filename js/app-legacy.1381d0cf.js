(function(){"use strict";var t={2675:function(t,e,i){i(6992),i(8674),i(9601),i(7727);var a=i(8935),n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",[i("AppBar"),i("v-main",{staticClass:"pb-9 mt-4"},[i("div",{staticClass:"d-flex justify-center"},[i("v-row",{staticClass:"d-flex justify-center",staticStyle:{"max-width":"1300px"},attrs:{"no-gutters":""}},t._l(t.products,(function(e){return i("v-col",{key:e.name,staticClass:"d-flex justify-center mx-1",attrs:{cols:"auto"}},[i("v-card",{staticClass:"d-flex justify-end ma-2 kk",style:{backgroundImage:"url("+e.image+")"},attrs:{width:"380px","min-width":"300px",height:"400px"}},[i("v-card",{staticClass:"ma-2 pb-3 pa-1 d-flex flex-column",attrs:{width:"65%"}},[i("v-card-title",[t._v(t._s(e.name))]),i("v-card-text",[t._v(" "+t._s(e.description)+" ")]),i("v-list",{attrs:{disabled:""}},t._l(e.benefits,(function(e,a){return i("v-list-item",{key:a},[t._v(" "+t._s(e)+" ")])})),1),i("v-spacer"),i("v-btn",{staticClass:"d-flex mx-2 mt-2",attrs:{color:"primary"}},[t._v(" Reserve ")]),i("v-btn",{staticClass:"d-flex mx-2 mt-2",attrs:{color:"primary",outlined:""}},[t._v(" Quick look ")])],1)],1)],1)})),1)],1)])],1)},r=[],o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app-bar",{staticClass:"px-10",attrs:{elevation:"0",color:"#181818",height:"80px","hide-on-scroll":"",app:""}},[i("v-toolbar-title",[i("h3",{staticClass:"white--text text-uppercase headline"},[t._v(" LOGO ")])]),i("v-spacer"),i("div",{staticClass:"d-flex align-center"},[t._l(t.navigationItems,(function(e){return i("li",{key:e.name,staticClass:"links pl-10",style:{"letter-spacing":"2.2px"}},[i("a",[t._v(t._s(e.name))])])})),i("v-btn",{staticClass:"ml-10 py-6 px-10",style:{"letter-spacing":"2.2px"},attrs:{outlined:"",color:"amber",large:""}},[t._v(" Join us ")])],2)],1)},s=[],u={name:"AppBar",data:function(){return{navigationItems:[{name:"About"},{name:"Products"},{name:"Portfolio"},{name:"Contact"}]}}},c=u,l=i(1001),f=i(3453),m=i.n(f),d=i(3343),p=i(5845),b=i(3631),x=i(7921),g=(0,l.Z)(c,o,s,!1,null,"bff9b028",null),v=g.exports;m()(g,{VAppBar:d.Z,VBtn:p.Z,VSpacer:b.Z,VToolbarTitle:x.qW});var h={name:"App",components:{AppBar:v},data:function(){return{products:[{name:"Title",description:"Curabitur eu nunc eget orci blandit gravida quis molestie neque.",image:"https://images.unsplash.com/photo-1619971104703-5e99cd3c6efa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",benefits:["Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Etiam id arcu et arcu dignissim fermentum."]},{name:"Title",description:"Curabitur eu nunc eget orci blandit gravida quis molestie neque.",image:"https://images.unsplash.com/photo-1632582308468-9fe9dbd40f3c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",benefits:["Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Etiam id arcu et arcu dignissim fermentum."]},{name:"Title",description:"Curabitur eu nunc eget orci blandit gravida quis molestie neque.",image:"https://images.unsplash.com/photo-1632747670036-40a6ce6d6714?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",benefits:["Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Etiam id arcu et arcu dignissim fermentum."]},{name:"Title",description:"Curabitur eu nunc eget orci blandit gravida quis molestie neque.",image:"https://images.unsplash.com/photo-1607608879766-56659d03ea0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",benefits:["Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Etiam id arcu et arcu dignissim fermentum."]},{name:"Title",description:"Aliquam convallis dolor a turpis viverra cursus.",image:"https://images.unsplash.com/photo-1656926208235-3dbc9327e84a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",benefits:["Praesent cursus libero at aliquam blandit.","Etiam in enim non felis rutrum iaculis.","Sed vulputate velit eget purus fringilla congue."]},{name:"Title",description:"Curabitur eu nunc eget orci blandit gravida quis molestie neque.",image:"https://images.unsplash.com/photo-1632260260864-caf7fde5ec36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",benefits:["Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Etiam id arcu et arcu dignissim fermentum."]},{name:"Title",description:"Curabitur eu nunc eget orci blandit gravida quis molestie neque.",image:"https://images.unsplash.com/photo-1546146477-15a587cd3fcb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80",benefits:["Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Etiam id arcu et arcu dignissim fermentum."]},{name:"Title",description:"Curabitur eu nunc eget orci blandit gravida quis molestie neque.",image:"https://images.unsplash.com/photo-1621075020417-f08bcfe30f81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",benefits:["Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Etiam id arcu et arcu dignissim fermentum."]},{name:"Title",description:"Curabitur eu nunc eget orci blandit gravida quis molestie neque.",image:"https://images.unsplash.com/photo-1579567761406-4684ee0c75b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",benefits:["Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Etiam id arcu et arcu dignissim fermentum."]}]}}},w=h,y=i(7524),M=i(3685),q=i(7118),C=i(2102),H=i(6816),_=i(7620),B=i(7877),V=i(2877),j=(0,l.Z)(w,n,r,!1,null,null,null),Z=j.exports;m()(j,{VApp:y.Z,VBtn:p.Z,VCard:M.Z,VCardText:q.ZB,VCardTitle:q.EB,VCol:C.Z,VList:H.Z,VListItem:_.Z,VMain:B.Z,VRow:V.Z,VSpacer:b.Z});var G=i(5591);a.Z.use(G.Z);var D=new G.Z({});a.Z.config.productionTip=!1,new a.Z({vuetify:D,render:function(t){return t(Z)}}).$mount("#app")}},e={};function i(a){var n=e[a];if(void 0!==n)return n.exports;var r=e[a]={exports:{}};return t[a](r,r.exports,i),r.exports}i.m=t,function(){var t=[];i.O=function(e,a,n,r){if(!a){var o=1/0;for(l=0;l<t.length;l++){a=t[l][0],n=t[l][1],r=t[l][2];for(var s=!0,u=0;u<a.length;u++)(!1&r||o>=r)&&Object.keys(i.O).every((function(t){return i.O[t](a[u])}))?a.splice(u--,1):(s=!1,r<o&&(o=r));if(s){t.splice(l--,1);var c=n();void 0!==c&&(e=c)}}return e}r=r||0;for(var l=t.length;l>0&&t[l-1][2]>r;l--)t[l]=t[l-1];t[l]=[a,n,r]}}(),function(){i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,{a:e}),e}}(),function(){i.d=function(t,e){for(var a in e)i.o(e,a)&&!i.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};i.O.j=function(e){return 0===t[e]};var e=function(e,a){var n,r,o=a[0],s=a[1],u=a[2],c=0;if(o.some((function(e){return 0!==t[e]}))){for(n in s)i.o(s,n)&&(i.m[n]=s[n]);if(u)var l=u(i)}for(e&&e(a);c<o.length;c++)r=o[c],i.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return i.O(l)},a=self["webpackChunkdev_portfolio_template"]=self["webpackChunkdev_portfolio_template"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=i.O(void 0,[998],(function(){return i(2675)}));a=i.O(a)})();
//# sourceMappingURL=app-legacy.1381d0cf.js.map