(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-23ae4113"],{"5b78":function(t,e,a){var n={"./news/demo/Demo_Berlin_Card.png":"d1a8","./news/demo/Demo_Luegde_Card.png":"5c8a","./news/pre/Drama_Taboo_Card.png":"f66a","./news/pre/Munich_Round_Card.png":"eac9"};function i(t){var e=r(t);return a(e)}function r(t){if(!a.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}i.keys=function(){return Object.keys(n)},i.resolve=r,t.exports=i,i.id="5b78"},"5c8a":function(t,e,a){t.exports=a.p+"img/Demo_Luegde_Card.png"},"9acb":function(t,e,a){},a6a8:function(t,e,a){"use strict";a("9acb")},cbc4:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"news"},[n("NavBar",{directives:[{name:"show",rawName:"v-show",value:t.navShow,expression:"navShow"}],attrs:{title:t.title,isleftarrow:t.isleftarrow,id:"nav"}}),n("div",{attrs:{id:"content-container"}},[n("div",{attrs:{id:"card-container"}},t._l(this.Activities,(function(e,i){return n("router-link",{key:i,attrs:{to:{name:"News_list_detail",query:{activityType:t.ActivityType,activityId:i}}}},[n("Card",{attrs:{xStart:"5vw",wid:"92vw",roundSize:"1.86vmin",roundSizeLeft:"3vmin",angle:"40"}},[n("div",{staticClass:"inject"},[n("span",{staticClass:"title"},[t._v(t._s(e.title))]),n("div",{staticClass:"image"},[n("img",{attrs:{src:a("5b78")("./"+e.img.slice(0,-4)+"_Card.png")}}),n("div",{staticClass:"label"},[t._v(t._s(e.label))])])])])],1)})),1)]),n("TabBar",{directives:[{name:"show",rawName:"v-show",value:t.tabShow,expression:"tabShow"}],attrs:{active:4}})],1)},i=[],r=a("ae8d"),s=a("d000"),o=a("0311"),c={name:"News_list",components:{Card:r["a"],NavBar:s["a"],TabBar:o["a"]},methods:{},computed:{Activities:function(){var t=this.$route.query.activityType;return window.PageData.news[t]},ActivityType:function(){return this.$route.query.activityType},title:function(){return"demo"==this.ActivityType?"Demonstration teilnehmen":"Andere News wissen"}},data:function(){return{isleftarrow:"",transitionName:"fade",navShow:!0,tabShow:!0}}},d=c,u=(a("a6a8"),a("2877")),v=Object(u["a"])(d,n,i,!1,null,"111ad375",null);e["default"]=v.exports},d1a8:function(t,e,a){t.exports=a.p+"img/Demo_Berlin_Card.png"},eac9:function(t,e,a){t.exports=a.p+"img/Munich_Round_Card.png"},f66a:function(t,e,a){t.exports=a.p+"img/Drama_Taboo_Card.png"}}]);