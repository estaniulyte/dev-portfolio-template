(function(){"use strict";var t={6788:function(t,e,i){var a=i(8935),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",[i("AppBar"),i("v-main",{staticClass:"pb-9 mt-4"},[i("div",{staticClass:"d-flex justify-center"},[i("v-row",{staticClass:"d-flex justify-center",staticStyle:{"max-width":"1300px"},attrs:{"no-gutters":""}},t._l(t.products,(function(e){return i("v-col",{key:e.name,staticClass:"d-flex justify-center mx-1",attrs:{cols:"auto"}},[i("v-card",{staticClass:"d-flex justify-end ma-4 ma-md-2 kk",style:{backgroundImage:"url("+e.image+")"},attrs:{width:"380px","min-width":"330px",height:"400px"}},[i("v-card",{staticClass:"ma-2 pb-3 pa-1 d-flex flex-column",attrs:{width:"70%"}},[i("v-card-title",[t._v(t._s(e.name))]),i("v-card-text",[t._v(" "+t._s(e.description)+" ")]),i("v-list",{attrs:{disabled:""}},t._l(e.benefits,(function(e,a){return i("v-list-item",{key:a,staticClass:"text-body-2"},[i("v-list-item-icon",{staticClass:"ma-1 pa-0"},[i("v-icon",{attrs:{small:"",color:"primary"}},[t._v("mdi-check")])],1),t._v(" "+t._s(e)+" ")],1)})),1),i("v-spacer"),i("v-btn",{staticClass:"d-flex mx-2 mt-2",attrs:{color:"primary"}},[t._v(" "+t._s(e.buttonName)+" ")]),i("v-dialog",{attrs:{transition:"dialog-bottom-transition","max-width":"600"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,r=e.attrs;return[i("v-btn",t._g(t._b({staticClass:"d-flex mx-2 mt-2",attrs:{color:"primary",outlined:""}},"v-btn",r,!1),a),[t._v(" Quick look ")])]}},{key:"default",fn:function(a){return[i("v-card",[i("v-card-text",{staticClass:"pa-6"},[i("v-row",[i("v-col",{attrs:{cols:"7"}},[i("v-row",{staticClass:"text-h5 py-2"},[t._v(" "+t._s(e.name)+" ")]),i("v-row",[i("p",[t._v(t._s(e.fullDescription))])]),i("v-row")],1),i("v-col",{attrs:{cols:"5"}},[i("v-row",{staticClass:"text-h6"},[t._v(" Key features ")]),i("v-row",{staticClass:"d-flex"},[i("v-btn",{staticClass:"d-flex",attrs:{color:"primary",dark:""},on:{click:function(t){a.value=!1}}},[t._v(t._s(e.buttonName))])],1)],1)],1)],1)],1)]}}],null,!0)})],1)],1)],1)})),1)],1)])],1)},n=[],u=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app-bar",{staticClass:"px-0 px-md-10",attrs:{elevation:"0",color:"#181818",height:"65px",app:""}},[i("v-toolbar-title",[i("h3",{staticClass:"pl-2 white--text text-uppercase headline"},[t._v(" LOGO ")])]),i("v-spacer"),i("div",{staticClass:"d-md-flex align-center d-none"},[t._l(t.navigationItems,(function(e){return i("li",{key:e.name,staticClass:"links pl-10",style:{"letter-spacing":"2.1px"}},[i("a",[t._v(t._s(e.name))])])})),i("v-btn",{staticClass:"ml-10 py-5 px-10",style:{"letter-spacing":"2.2px"},attrs:{outlined:"",color:"amber",large:""}},[t._v(" Join us ")])],2),i("div",{staticClass:"d-md-none"},[i("v-btn",{style:{"letter-spacing":"2.2px"},attrs:{color:"white",icon:"","x-large":""}},[i("v-icon",[t._v("mdi-menu")])],1)],1)],1)},o=[],s={name:"AppBar",data:()=>({navigationItems:[{name:"About"},{name:"Products"},{name:"Portfolio"},{name:"Contact"}]})},l=s,c=i(1001),m=i(3453),d=i.n(m),f=i(3343),p=i(680),b=i(6428),v=i(3631),g=i(7921),x=(0,c.Z)(l,u,o,!1,null,"36e6cdec",null),q=x.exports;d()(x,{VAppBar:f.Z,VBtn:p.Z,VIcon:b.Z,VSpacer:v.Z,VToolbarTitle:g.qW});var w={name:"App",components:{AppBar:q},data:()=>({products:[{name:"Title",description:"Curabitur eu nunc eget orci blandit gravida quis molestie neque.",fullDescription:"Curabitur eu nunc eget orci blandit gravida quis molestie neque. Curabitur eu nunc eget orci blandit gravida quis molestie neque.",image:"https://images.unsplash.com/photo-1619971104703-5e99cd3c6efa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",benefits:["Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Etiam id arcu et arcu dignissim fermentum."],buttonName:"Reserve"},{name:"Title",description:"Curabitur eu nunc eget orci blandit gravida quis molestie neque.",fullDescription:"Curabitur eu nunc eget orci blandit gravida quis molestie neque. Curabitur eu nunc eget orci blandit gravida quis molestie neque.",image:"https://images.unsplash.com/photo-1632582308468-9fe9dbd40f3c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",benefits:["Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Etiam id arcu et arcu dignissim fermentum."],buttonName:"Buy"},{name:"Title",description:"Curabitur eu nunc eget orci blandit gravida quis molestie neque.",fullDescription:"Curabitur eu nunc eget orci blandit gravida quis molestie neque. Curabitur eu nunc eget orci blandit gravida quis molestie neque.",image:"https://images.unsplash.com/photo-1632747670036-40a6ce6d6714?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",benefits:["Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Etiam id arcu et arcu dignissim fermentum."],buttonName:"Start for free"},{name:"Title",description:"Curabitur eu nunc eget orci blandit gravida quis molestie neque.",fullDescription:"Curabitur eu nunc eget orci blandit gravida quis molestie neque. Curabitur eu nunc eget orci blandit gravida quis molestie neque.",image:"https://images.unsplash.com/photo-1607608879766-56659d03ea0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",benefits:["Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Etiam id arcu et arcu dignissim fermentum."],buttonName:"Subscribe"},{name:"Title",description:"Aliquam convallis dolor a turpis viverra cursus.",fullDescription:"Aliquam convallis dolor a turpis viverra cursus. Aliquam convallis dolor a turpis viverra cursus. Aliquam convallis dolor a turpis viverra cursus.",image:"https://images.unsplash.com/photo-1656926208235-3dbc9327e84a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",benefits:["Praesent cursus libero at aliquam blandit.","Etiam in enim non felis rutrum iaculis.","Sed vulputate velit eget purus fringilla congue."],buttonName:"Try"},{name:"Title",description:"Curabitur eu nunc eget orci blandit gravida quis molestie neque.",fullDescription:"Aliquam convallis dolor a turpis viverra cursus. Curabitur eu nunc eget orci blandit gravida quis molestie neque.",image:"https://images.unsplash.com/photo-1632260260864-caf7fde5ec36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",benefits:["Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Etiam id arcu et arcu dignissim fermentum."],buttonName:"Subscribe"},{name:"Title",description:"Curabitur eu nunc eget orci blandit gravida quis molestie neque.",fullDescription:"Curabitur eu nunc eget orci blandit gravida quis molestie neque. Curabitur eu nunc eget orci blandit gravida quis molestie neque.",image:"https://images.unsplash.com/photo-1546146477-15a587cd3fcb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80",benefits:["Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Etiam id arcu et arcu dignissim fermentum."],buttonName:"Buy"},{name:"Title",description:"Curabitur eu nunc eget orci blandit gravida quis molestie neque.",fullDescription:"Curabitur eu nunc eget orci blandit gravida quis molestie neque. Curabitur eu nunc eget orci blandit gravida quis molestie neque.",image:"https://images.unsplash.com/photo-1621075020417-f08bcfe30f81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",benefits:["Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Etiam id arcu et arcu dignissim fermentum."],buttonName:"Subscribe"},{name:"Title",description:"Curabitur eu nunc eget orci blandit gravida quis molestie neque.",fullDescription:"Curabitur eu nunc eget orci blandit gravida quis molestie neque. Curabitur eu nunc eget orci blandit gravida quis molestie neque.",image:"https://images.unsplash.com/photo-1579567761406-4684ee0c75b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",benefits:["Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Etiam id arcu et arcu dignissim fermentum."],buttonName:"Get started"}]})},h=w,C=i(7524),y=i(3685),_=i(7118),M=i(2102),D=i(1659),B=i(6816),V=i(7620),H=i(459),Z=i(7877),j=i(2877),A=(0,c.Z)(h,r,n,!1,null,null,null),G=A.exports;d()(A,{VApp:C.Z,VBtn:p.Z,VCard:y.Z,VCardText:_.ZB,VCardTitle:_.EB,VCol:M.Z,VDialog:D.Z,VIcon:b.Z,VList:B.Z,VListItem:V.Z,VListItemIcon:H.Z,VMain:Z.Z,VRow:j.Z,VSpacer:v.Z});var k=i(1910);a.Z.use(k.Z);var T=new k.Z({});a.Z.config.productionTip=!1,new a.Z({vuetify:T,render:t=>t(G)}).$mount("#app")}},e={};function i(a){var r=e[a];if(void 0!==r)return r.exports;var n=e[a]={exports:{}};return t[a](n,n.exports,i),n.exports}i.m=t,function(){var t=[];i.O=function(e,a,r,n){if(!a){var u=1/0;for(c=0;c<t.length;c++){a=t[c][0],r=t[c][1],n=t[c][2];for(var o=!0,s=0;s<a.length;s++)(!1&n||u>=n)&&Object.keys(i.O).every((function(t){return i.O[t](a[s])}))?a.splice(s--,1):(o=!1,n<u&&(u=n));if(o){t.splice(c--,1);var l=r();void 0!==l&&(e=l)}}return e}n=n||0;for(var c=t.length;c>0&&t[c-1][2]>n;c--)t[c]=t[c-1];t[c]=[a,r,n]}}(),function(){i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,{a:e}),e}}(),function(){i.d=function(t,e){for(var a in e)i.o(e,a)&&!i.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};i.O.j=function(e){return 0===t[e]};var e=function(e,a){var r,n,u=a[0],o=a[1],s=a[2],l=0;if(u.some((function(e){return 0!==t[e]}))){for(r in o)i.o(o,r)&&(i.m[r]=o[r]);if(s)var c=s(i)}for(e&&e(a);l<u.length;l++)n=u[l],i.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return i.O(c)},a=self["webpackChunkdev_portfolio_template"]=self["webpackChunkdev_portfolio_template"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=i.O(void 0,[998],(function(){return i(6788)}));a=i.O(a)})();
//# sourceMappingURL=app.cfc5376b.js.map