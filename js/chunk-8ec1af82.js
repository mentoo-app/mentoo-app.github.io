(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8ec1af82"],{"0115":function(t,n,e){"use strict";e.r(n);var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"psy"},[e("NavBar",{directives:[{name:"show",rawName:"v-show",value:t.navShow,expression:"navShow"}],attrs:{title:t.title,isleftarrow:t.isleftarrow,id:"nav"}}),e("div",{attrs:{id:"content-container"}},[e("Card",{attrs:{xStart:"8vw",hei:"90vh",wid:"100%",roundSize:"1vmin",roundSizeLeft:"3vmin",id:"back"}},[e("div",{staticClass:"inject"})]),e("Card",{staticClass:"input",style:{"--my-top":t.top},attrs:{xStart:"4vw",hei:"10vh",wid:"100%",roundSize:"1vmin",roundSizeLeft:"3vmin"}},[e("input",{attrs:{type:"text",name:"",id:"chat_input",placeholder:"Beginnen Sie hier zu tippen…"},on:{focus:t.changeTop,blur:t.changeBack}}),e("SvgIcon",{attrs:{name:"send_icon",height:"3ch",width:"3ch"}})],1)],1)],1)},a=[],r=e("ae8d"),c=e("d000"),o={name:"Psy_list_single",components:{Card:r["a"],NavBar:c["a"]},methods:{changeTop:function(){this.top="calc("+window.innerHeight+"px-10vh)"},changeBack:function(){this.top="calc(90vh)"}},computed:{Faq:function(){var t=this.$route.query.questionId;return window.PageData.edu[t]}},data:function(){return{title:"Einzel-Chat",isleftarrow:"",transitionName:"fade",navShow:!0,helper:"Lavender Rain",me:"KranichZSR",top:"calc(90vh)"}}},s=o,u=(e("9b7a"),e("2877")),h=Object(u["a"])(s,i,a,!1,null,"247cb8d2",null);n["default"]=h.exports},"7acc":function(t,n,e){"use strict";e("ef54")},"87fb":function(t,n,e){"use strict";e("fb1a")},"99af":function(t,n,e){"use strict";var i=e("23e7"),a=e("d039"),r=e("e8b5"),c=e("861d"),o=e("7b0b"),s=e("50c4"),u=e("8418"),h=e("65f0"),l=e("1dde"),d=e("b622"),f=e("2d00"),p=d("isConcatSpreadable"),v=9007199254740991,m="Maximum allowed index exceeded",w=f>=51||!a((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),g=l("concat"),S=function(t){if(!c(t))return!1;var n=t[p];return void 0!==n?!!n:r(t)},x=!w||!g;i({target:"Array",proto:!0,forced:x},{concat:function(t){var n,e,i,a,r,c=o(this),l=h(c,0),d=0;for(n=-1,i=arguments.length;n<i;n++)if(r=-1===n?c:arguments[n],S(r)){if(a=s(r.length),d+a>v)throw TypeError(m);for(e=0;e<a;e++,d++)e in r&&u(l,d,r[e])}else{if(d>=v)throw TypeError(m);u(l,d++,r)}return l.length=d,l}})},"9b7a":function(t,n,e){"use strict";e("faea")},a15b:function(t,n,e){"use strict";var i=e("23e7"),a=e("44ad"),r=e("fc6a"),c=e("a640"),o=[].join,s=a!=Object,u=c("join",",");i({target:"Array",proto:!0,forced:s||!u},{join:function(t){return o.call(r(this),void 0===t?",":t)}})},a640:function(t,n,e){"use strict";var i=e("d039");t.exports=function(t,n){var e=[][t];return!!e&&i((function(){e.call(null,n||function(){throw 1},1)}))}},ae8d:function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"card",style:{"--my-clip-path":t.clipId}},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"0",height:"0"}},[e("defs",[e("clipPath",{attrs:{id:t.id}},[e("path",{attrs:{d:t.clipPathStyle}})])])]),t._t("default")],2)},a=[];e("99af"),e("caad"),e("2532"),e("fb6a");function r(t){return t/180*Math.PI}function c(t,n,e,i,a,c){var o=e*Math.tan(r(t/2)),s=o*Math.cos(r(t)),u=o*Math.sin(r(t)),h=e*Math.tan(r((90-t)/2)),l=h*Math.cos(r(t)),d=o*Math.sin(r(t)),f=n-s,p=u,v=n*Math.tan(r(t)),m="M".concat(f,",").concat(p);return m+="a".concat(e,",").concat(e,",0,0,1,").concat(s+o,",").concat(-u),m+="h".concat(a-n-o-i),m+="a".concat(i,",").concat(i,",0,0,1,").concat(i,",").concat(i),m+="v".concat(c-2*i),m+="a".concat(i,",").concat(i,",0,0,1,").concat(-i,",").concat(i),m+="H".concat(i),m+="a".concat(i,",").concat(i,",0,0,1,").concat(-i,",").concat(-i),m+="V".concat(v+h),m+="a".concat(e,",").concat(e,",0,0,1,").concat(l,",").concat(-h-d),m+="Z",m}function o(t){var n=Math.max(document.documentElement.clientHeight,window.innerHeight||0);return t*n/100}function s(t){var n=Math.max(document.documentElement.clientWidth,window.innerWidth||0);return t*n/100}function u(t){return Math.min(o(t),s(t))}function h(t){return Math.max(o(t),s(t))}function l(t){if(t.includes("px")){var n=t.slice(0,-2);return parseFloat(n)}if(t.includes("vh")){var e=t.slice(0,-2);return o(parseFloat(e))}if(t.includes("vw")){var i=t.slice(0,-2);return s(parseFloat(i))}if(t.includes("vmin")){var a=t.slice(0,-2);return u(parseFloat(a))}if(t.includes("vmax")){var r=t.slice(0,-2);return h(parseFloat(r))}if(t.includes("%")){var c=t.slice(0,-1);return s(parseFloat(c))}return 0}var d={name:"Card",props:{angle:{type:String,default:"40"},xStart:{type:String,default:"20.25px"},roundSizeLeft:{type:String,default:"5px"},roundSize:{type:String,default:"5px"},wid:{type:String,default:"375px"},hei:{type:String,default:""}},methods:{listenResize:function(){this.clipPathStyle=this.dPath()}},beforeDestroy:function(){window.removeEventListener("resize",this.listenResize),window.removeEventListener("hashchange",this.listenResize)},data:function(){return{id:null,clipPathStyle:function(){return"M50.21624234808966,3.846229355124001a16.44,16.44,0,0,1,10.567428303246707,-3.846229355124001h487.21632934866363a7.2884,7.2884,0,0,1,7.2884,7.2884v487.4232a7.2884,7.2884,0,0,1,-7.2884,7.2884H7.2884a7.2884,7.2884,0,0,1,-7.2884,-7.2884V53.64875768858312a16.44,16.44,0,0,1,5.872571696753293,-11.512327255192178Z"},dPath:function(){var t=l(this.xStart),n=l(this.roundSize),e=l(this.roundSizeLeft),i=l(this.wid),a="";return a=""==this.hei?l(this.$el.clientHeight+"px"):l(this.hei),c(parseFloat(this.angle),t,e,n,i,a)}}},mounted:function(){this.clipPathStyle=this.dPath(),window.addEventListener("resize",this.listenResize),window.addEventListener("hashchange",this.listenResize),this.id="clipping"+this._uid},created:function(){this.clipPathStyle="M50.21624234808966,3.846229355124001a16.44,16.44,0,0,1,10.567428303246707,-3.846229355124001h487.21632934866363a7.2884,7.2884,0,0,1,7.2884,7.2884v487.4232a7.2884,7.2884,0,0,1,-7.2884,7.2884H7.2884a7.2884,7.2884,0,0,1,-7.2884,-7.2884V53.64875768858312a16.44,16.44,0,0,1,5.872571696753293,-11.512327255192178Z"},computed:{clipId:function(){return"url(#"+this.id+")"}}},f=d,p=(e("7acc"),e("2877")),v=Object(p["a"])(f,i,a,!1,null,"6741ad1c",null);n["a"]=v.exports},d000:function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"NavBar"}},[e("van-nav-bar",{attrs:{fixed:"",title:t.title,"left-arrow":t.isleftarrow,menu:t.hasmenu},on:{"click-left":t.onClickLeft,"click-right":t.onClickRight},scopedSlots:t._u([{key:"left",fn:function(){return[e("SvgIcon",{attrs:{name:"back_icon",width:"1.5rem",height:"1.5rem"}})]},proxy:!0},{key:"right",fn:function(){return[t.hasmenu?e("SvgIcon",{attrs:{name:"menu_icon",width:"1.7rem",height:"1.7rem"}}):e("SvgIcon",{attrs:{name:"home_icon",width:"1.7rem",height:"1.7rem"}})]},proxy:!0}])})],1)},a=[],r=(e("a15b"),e("fb6a"),e("1276"),e("ac1f"),{props:["title","isleftarrow","hasmenu"],methods:{onClickLeft:function(){var t=this.$router.currentRoute.path.split("/").slice(0,-1).join("/");""==t&&(t="/"),this.$router.push(t)},onClickRight:function(){this.hasmenu?this.$router.push("/main/menu"):this.$router.push("/main")}}}),c=r,o=(e("87fb"),e("2877")),s=Object(o["a"])(c,i,a,!1,null,"36320043",null);n["a"]=s.exports},ef54:function(t,n,e){},faea:function(t,n,e){},fb1a:function(t,n,e){}}]);