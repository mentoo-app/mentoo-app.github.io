(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0af7e8c8"],{4139:function(t,i,a){t.exports=a.p+"img/man_index.png"},7421:function(t,i,a){t.exports=a.p+"img/woman_index.png"},8348:function(t,i,a){},aad1:function(t,i,a){"use strict";a("8348")},ea53:function(t,i,a){"use strict";a.r(i);var e=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"police"},[e("NavBar",{directives:[{name:"show",rawName:"v-show",value:t.navShow,expression:"navShow"}],attrs:{title:t.title,isleftarrow:t.isleftarrow,id:"nav"}}),e("div",{attrs:{id:"content-container"}},[1==t.activePage?e("div",{staticClass:"category",attrs:{id:"cat1"}},[e("img",{staticClass:"img",attrs:{src:a("4139")}}),e("p",[t._v("Wenn Sie sich sicher sind, dass Sie eine Anzeige erstatten möchten, dann ist es wichtig, eventuelle Beweise so schnell wie möglich sichern zu lassen.")]),e("div",{staticClass:"card-container"},[e("Card",{attrs:{xStart:"10vw",height:"60vmax",wid:"100%",roundSize:"4vmin",roundSizeLeft:"4vmin"}},[e("div",{staticClass:"inject"},[e("router-link",{staticStyle:{"text-decoration":"none",color:"inherit"},attrs:{to:"/main/police/steps"}},[e("SvgIcon",{staticClass:"link_active1",attrs:{name:"link_police_active"}})],1),e("SvgIcon",{staticClass:"link_inactive1",attrs:{name:"link_110_inactive"},nativeOn:{click:function(i){t.activePage=2}}})],1)])],1)]):e("div",{staticClass:"category",attrs:{id:"cat2"}},[e("img",{staticClass:"img",attrs:{src:a("7421")}}),e("p",[t._v("Wenn alle Beweise vorhanden sind, und Sie noch Anzeige erstatten möchten. Wählen Sie bitte 110!")]),e("div",{staticClass:"card-container"},[e("Card",{attrs:{xStart:"10vw",height:"60vmax",wid:"100%",roundSize:"4vmin",roundSizeLeft:"4vmin"}},[e("div",{staticClass:"inject"},[e("SvgIcon",{staticClass:"link_active2",attrs:{name:"link_110_active"},nativeOn:{click:function(i){return t.call("110")}}}),e("SvgIcon",{staticClass:"link_inactive2",attrs:{name:"link_police_inactive"},nativeOn:{click:function(i){t.activePage=1}}})],1)])],1)])]),e("TabBar",{directives:[{name:"show",rawName:"v-show",value:t.tabShow,expression:"tabShow"}]})],1)},n=[],s=a("d000"),c=a("0311"),r=a("ae8d"),o={name:"Lawyer",components:{Card:r["a"],NavBar:s["a"],TabBar:c["a"]},methods:{call:function(t){window.location.href="tel:"+t},sendSMS:function(t){window.open("sms:"+t)}},data:function(){return{activePage:1,title:"",isleftarrow:"",transitionName:"fade",navShow:!0,tabShow:!0}}},l=o,v=(a("aad1"),a("2877")),d=Object(v["a"])(l,e,n,!1,null,"2077fe48",null);i["default"]=d.exports}}]);