(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"0311":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"TabBar"}},[n("van-tabbar",{attrs:{route:""}},[n("van-tabbar-item",{attrs:{to:"/police"}},[n("SvgIcon",{attrs:{name:"police_icon"}}),t._v("Polizei")],1),n("van-tabbar-item",{attrs:{to:"/lawyer"}},[n("SvgIcon",{attrs:{name:"lawyer_icon"}}),t._v("Anwaltsbüro")],1),n("van-tabbar-item",[n("SvgIcon",{attrs:{name:"hospital_icon"}}),t._v("Krankenhaus")],1),n("van-tabbar-item",[n("SvgIcon",{attrs:{name:"psy_icon"}}),t._v("Traumahilfe")],1),n("van-tabbar-item",[n("SvgIcon",{attrs:{name:"news_icon"}}),t._v("Auskünfte")],1)],1)],1)},i=[],r={},c=r,o=(n("4f8b"),n("2877")),l=Object(o["a"])(c,a,i,!1,null,"24cafb3c",null);e["a"]=l.exports},"0d67":function(t,e,n){},1276:function(t,e,n){"use strict";var a=n("d784"),i=n("44e7"),r=n("825a"),c=n("1d80"),o=n("4840"),l=n("8aa5"),s=n("50c4"),u=n("14c3"),f=n("9263"),d=n("d039"),v=[].push,h=Math.min,p=4294967295,g=!d((function(){return!RegExp(p,"y")}));a("split",2,(function(t,e,n){var a;return a="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var a=String(c(this)),r=void 0===n?p:n>>>0;if(0===r)return[];if(void 0===t)return[a];if(!i(t))return e.call(a,t,r);var o,l,s,u=[],d=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),h=0,g=new RegExp(t.source,d+"g");while(o=f.call(g,a)){if(l=g.lastIndex,l>h&&(u.push(a.slice(h,o.index)),o.length>1&&o.index<a.length&&v.apply(u,o.slice(1)),s=o[0].length,h=l,u.length>=r))break;g.lastIndex===o.index&&g.lastIndex++}return h===a.length?!s&&g.test("")||u.push(""):u.push(a.slice(h)),u.length>r?u.slice(0,r):u}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var i=c(this),r=void 0==e?void 0:e[t];return void 0!==r?r.call(e,i,n):a.call(String(i),e,n)},function(t,i){var c=n(a,t,this,i,a!==e);if(c.done)return c.value;var f=r(t),d=String(this),v=o(f,RegExp),m=f.unicode,w=(f.ignoreCase?"i":"")+(f.multiline?"m":"")+(f.unicode?"u":"")+(g?"y":"g"),x=new v(g?f:"^(?:"+f.source+")",w),b=void 0===i?p:i>>>0;if(0===b)return[];if(0===d.length)return null===u(x,d)?[d]:[];var S=0,y=0,_=[];while(y<d.length){x.lastIndex=g?y:0;var E,I=u(x,g?d:d.slice(y));if(null===I||(E=h(s(x.lastIndex+(g?0:y)),d.length))===S)y=l(d,y,m);else{if(_.push(d.slice(S,y)),_.length===b)return _;for(var R=1;R<=I.length-1;R++)if(_.push(I[R]),_.length===b)return _;y=S=E}}return _.push(d.slice(S)),_}]}),!g)},"14c3":function(t,e,n){var a=n("c6b6"),i=n("9263");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var r=n.call(t,e);if("object"!==typeof r)throw TypeError("RegExp exec method returned something other than an Object or null");return r}if("RegExp"!==a(t))throw TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},4986:function(t,e,n){"use strict";n("761c")},4987:function(t,e,n){},"4e23":function(t,e,n){"use strict";n("c8b1")},"4f8b":function(t,e,n){"use strict";n("4987")},"50af":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lawyer"},[n("NavBar",{directives:[{name:"show",rawName:"v-show",value:t.navShow,expression:"navShow"}],attrs:{title:t.title,isleftarrow:t.isleftarrow}}),t._v(" Lawyer Content "),n("TabBar",{directives:[{name:"show",rawName:"v-show",value:t.tabShow,expression:"tabShow"}]})],1)},i=[],r=n("d000"),c=n("0311"),o={name:"Lawyer",components:{NavBar:r["a"],TabBar:c["a"]},data:function(){return{active:0,title:"Rezension",isleftarrow:"",transitionName:"fade",navShow:!0,tabShow:!0}}},l=o,s=(n("e819"),n("2877")),u=Object(s["a"])(l,a,i,!1,null,"d5b7ed36",null);e["default"]=u.exports},"6ed3":function(t,e,n){},7369:function(t,e,n){"use strict";n("6ed3")},"761c":function(t,e,n){},8418:function(t,e,n){"use strict";var a=n("c04e"),i=n("9bf2"),r=n("5c6c");t.exports=function(t,e,n){var c=a(e);c in t?i.f(t,c,r(0,n)):t[c]=n}},8650:function(t,e,n){},"8aa5":function(t,e,n){"use strict";var a=n("6547").charAt;t.exports=function(t,e,n){return e+(n?a(t,e).length:1)}},9263:function(t,e,n){"use strict";var a=n("ad6d"),i=n("9f7f"),r=RegExp.prototype.exec,c=String.prototype.replace,o=r,l=function(){var t=/a/,e=/b*/g;return r.call(t,"a"),r.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),s=i.UNSUPPORTED_Y||i.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],f=l||u||s;f&&(o=function(t){var e,n,i,o,f=this,d=s&&f.sticky,v=a.call(f),h=f.source,p=0,g=t;return d&&(v=v.replace("y",""),-1===v.indexOf("g")&&(v+="g"),g=String(t).slice(f.lastIndex),f.lastIndex>0&&(!f.multiline||f.multiline&&"\n"!==t[f.lastIndex-1])&&(h="(?: "+h+")",g=" "+g,p++),n=new RegExp("^(?:"+h+")",v)),u&&(n=new RegExp("^"+h+"$(?!\\s)",v)),l&&(e=f.lastIndex),i=r.call(d?n:f,g),d?i?(i.input=i.input.slice(p),i[0]=i[0].slice(p),i.index=f.lastIndex,f.lastIndex+=i[0].length):f.lastIndex=0:l&&i&&(f.lastIndex=f.global?i.index+i[0].length:e),u&&i&&i.length>1&&c.call(i[0],n,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(i[o]=void 0)})),i}),t.exports=o},"99af":function(t,e,n){"use strict";var a=n("23e7"),i=n("d039"),r=n("e8b5"),c=n("861d"),o=n("7b0b"),l=n("50c4"),s=n("8418"),u=n("65f0"),f=n("1dde"),d=n("b622"),v=n("2d00"),h=d("isConcatSpreadable"),p=9007199254740991,g="Maximum allowed index exceeded",m=v>=51||!i((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),w=f("concat"),x=function(t){if(!c(t))return!1;var e=t[h];return void 0!==e?!!e:r(t)},b=!m||!w;a({target:"Array",proto:!0,forced:b},{concat:function(t){var e,n,a,i,r,c=o(this),f=u(c,0),d=0;for(e=-1,a=arguments.length;e<a;e++)if(r=-1===e?c:arguments[e],x(r)){if(i=l(r.length),d+i>p)throw TypeError(g);for(n=0;n<i;n++,d++)n in r&&s(f,d,r[n])}else{if(d>=p)throw TypeError(g);s(f,d++,r)}return f.length=d,f}})},"9a0b":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"menu"},[n("NavBar",{directives:[{name:"show",rawName:"v-show",value:t.navShow,expression:"navShow"}],attrs:{title:t.title,isleftarrow:t.isleftarrow}}),n("van-tabbar",{attrs:{route:""},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[n("van-tabbar-item",{attrs:{to:"/police"}},[n("SvgIcon",{attrs:{name:"police_icon"}})],1),n("van-tabbar-item",{attrs:{to:"/lawyer"}},[n("SvgIcon",{attrs:{name:"lawyer_icon"}})],1),n("van-tabbar-item",[n("SvgIcon",{attrs:{name:"hospital_icon"}})],1),n("van-tabbar-item",[n("SvgIcon",{attrs:{name:"police_icon"}})],1),n("van-tabbar-item",[n("SvgIcon",{attrs:{name:"news_icon"}})],1)],1)],1)},i=[],r=n("d000"),c={name:"Menu",components:{NavBar:r["a"]},data:function(){return{active:0,title:"Rezension",isleftarrow:"",transitionName:"fade",navShow:!0}}},o=c,l=(n("f752"),n("2877")),s=Object(l["a"])(o,a,i,!1,null,"0757a602",null);e["default"]=s.exports},"9f6a":function(t,e,n){"use strict";n("c1a1")},"9f7f":function(t,e,n){"use strict";var a=n("d039");function i(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=a((function(){var t=i("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=a((function(){var t=i("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a15b:function(t,e,n){"use strict";var a=n("23e7"),i=n("44ad"),r=n("fc6a"),c=n("a640"),o=[].join,l=i!=Object,s=c("join",",");a({target:"Array",proto:!0,forced:l||!s},{join:function(t){return o.call(r(this),void 0===t?",":t)}})},a640:function(t,e,n){"use strict";var a=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&a((function(){n.call(null,e||function(){throw 1},1)}))}},ac1f:function(t,e,n){"use strict";var a=n("23e7"),i=n("9263");a({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},ad6d:function(t,e,n){"use strict";var a=n("825a");t.exports=function(){var t=a(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},ae8d:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"card"}},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"0",height:"0"}},[n("defs",[n("clipPath",{attrs:{id:"clipping"}},[n("path",{attrs:{d:t.clipPathStyle}})])])]),t._t("default")],2)},i=[];n("99af"),n("caad"),n("2532"),n("fb6a"),n("a9e3");function r(t){return t/180*Math.PI}function c(t,e,n,a,i,c){var o=n*Math.tan(r(t/2)),l=o*Math.cos(r(t)),s=o*Math.sin(r(t)),u=n*Math.tan(r((90-t)/2)),f=u*Math.cos(r(t)),d=o*Math.sin(r(t)),v=e-l,h=s,p=e*Math.tan(r(t)),g="M".concat(v,",").concat(h);return g+="a".concat(n,",").concat(n,",0,0,1,").concat(l+o,",").concat(-s),g+="h".concat(i-e-o-a),g+="a".concat(a,",").concat(a,",0,0,1,").concat(a,",").concat(a),g+="v".concat(c-2*a),g+="a".concat(a,",").concat(a,",0,0,1,").concat(-a,",").concat(a),g+="H".concat(a),g+="a".concat(a,",").concat(a,",0,0,1,").concat(-a,",").concat(-a),g+="V".concat(p+u),g+="a".concat(n,",").concat(n,",0,0,1,").concat(f,",").concat(-u-d),g+="Z",g}function o(t){var e=Math.max(document.documentElement.clientHeight,window.innerHeight||0);return t*e/100}function l(t){var e=Math.max(document.documentElement.clientWidth,window.innerWidth||0);return t*e/100}function s(t){return Math.min(o(t),l(t))}function u(t){return Math.max(o(t),l(t))}function f(t){if(t.includes("px")){var e=t.slice(0,-2);return parseFloat(e)}if(t.includes("vh")){var n=t.slice(0,-2);return o(parseFloat(n))}if(t.includes("vw")){var a=t.slice(0,-2);return l(parseFloat(a))}if(t.includes("vmin")){var i=t.slice(0,-2);return s(parseFloat(i))}if(t.includes("vmax")){var r=t.slice(0,-2);return u(parseFloat(r))}if(t.includes("%")){var c=t.slice(0,-1);return l(parseFloat(c))}return 0}var d={name:"Card",props:{angle:{type:Number,default:40},xStart:{type:String,default:"20.25px"},roundSizeLeft:{type:String,default:"5px"},roundSize:{type:String,default:"5px"},wid:{type:String,default:"375px"},hei:{type:String,default:""}},methods:{listenResize:function(){this.clipPathStyle=this.dPath()}},beforeDestroy:function(){window.removeEventListener("resize",this.listenResize)},data:function(){return{clipPathStyle:function(){return"M50.21624234808966,3.846229355124001a16.44,16.44,0,0,1,10.567428303246707,-3.846229355124001h487.21632934866363a7.2884,7.2884,0,0,1,7.2884,7.2884v487.4232a7.2884,7.2884,0,0,1,-7.2884,7.2884H7.2884a7.2884,7.2884,0,0,1,-7.2884,-7.2884V53.64875768858312a16.44,16.44,0,0,1,5.872571696753293,-11.512327255192178Z"},dPath:function(){var t=f(this.xStart),e=f(this.roundSize),n=f(this.roundSizeLeft),a=f(this.wid),i="";return i=""==this.hei?f(this.$el.clientHeight+"px"):f(this.hei),c(this.angle,t,n,e,a,i)}}},mounted:function(){this.clipPathStyle=this.dPath(),window.addEventListener("resize",this.listenResize)},created:function(){this.clipPathStyle="M10 10 H 90 V 90 H 10 L 10 10"}},v=d,h=(n("4e23"),n("2877")),p=Object(h["a"])(v,a,i,!1,null,"433393d0",null);e["a"]=p.exports},c1a1:function(t,e,n){},c8b1:function(t,e,n){},cf05:function(t,e,n){t.exports=n.p+"img/logo.png"},d000:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"NavBar"}},[n("van-nav-bar",{attrs:{title:t.title,"left-arrow":t.isleftarrow},on:{"click-left":t.onClickLeft,"click-right":t.onClickRight},scopedSlots:t._u([{key:"left",fn:function(){return[n("SvgIcon",{attrs:{name:"back_icon",width:"1.5rem",height:"1.5rem"}})]},proxy:!0},{key:"right",fn:function(){return[n("SvgIcon",{attrs:{name:"home_icon",width:"1.7rem",height:"1.7rem"}})]},proxy:!0}])})],1)},i=[],r=(n("a15b"),n("fb6a"),n("1276"),n("ac1f"),{props:["title","isleftarrow"],methods:{onClickLeft:function(){var t="/"+this.$router.currentRoute.path.split("/").slice(0,-1).join("/");this.$router.push(t)},onClickRight:function(){this.$router.push("/")}}}),c=r,o=(n("7369"),n("2877")),l=Object(o["a"])(c,a,i,!1,null,"b2794efa",null);e["a"]=l.exports},d504:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"full",attrs:{id:"index-page"}},[t._m(0),n("router-link",{staticStyle:{"text-decoration":"none",color:"inherit"},attrs:{to:"/police"}},[n("div",{staticClass:"card-shadow"},[n("div",{staticClass:"index-card",attrs:{id:"title-container"}},[n("Card",{attrs:{xStart:"10vw",height:"60vmax",wid:"100%",roundSize:"1.33vmin",roundSizeLeft:"3vmin"}},[n("SvgIcon",{attrs:{name:"headline_mentoo_page"}}),n("p",[t._v(" „#Men Too“ ist eine Hilfsplattform, welche den männlichen Opfern von sexuellem Missbrauch Soforthilfe leisten soll. ")])],1)],1)])])],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"index-head"},[a("img",{attrs:{id:"logo",src:n("cf05")}})])}],r=n("ae8d"),c={name:"Index",components:{Card:r["a"]}},o=c,l=(n("9f6a"),n("2877")),s=Object(l["a"])(o,a,i,!1,null,"02181b98",null);e["default"]=s.exports},d784:function(t,e,n){"use strict";n("ac1f");var a=n("6eeb"),i=n("d039"),r=n("b622"),c=n("9263"),o=n("9112"),l=r("species"),s=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),f=r("replace"),d=function(){return!!/./[f]&&""===/./[f]("a","$0")}(),v=!i((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,f){var h=r(t),p=!i((function(){var e={};return e[h]=function(){return 7},7!=""[t](e)})),g=p&&!i((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[l]=function(){return n},n.flags="",n[h]=/./[h]),n.exec=function(){return e=!0,null},n[h](""),!e}));if(!p||!g||"replace"===t&&(!s||!u||d)||"split"===t&&!v){var m=/./[h],w=n(h,""[t],(function(t,e,n,a,i){return e.exec===c?p&&!i?{done:!0,value:m.call(e,n,a)}:{done:!0,value:t.call(n,e,a)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:d}),x=w[0],b=w[1];a(String.prototype,t,x),a(RegExp.prototype,h,2==e?function(t,e){return b.call(t,this,e)}:function(t){return b.call(t,this)})}f&&o(RegExp.prototype[h],"sham",!0)}},e819:function(t,e,n){"use strict";n("0d67")},ea53:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"police"},[n("NavBar",{directives:[{name:"show",rawName:"v-show",value:t.navShow,expression:"navShow"}],attrs:{title:t.title,isleftarrow:t.isleftarrow}}),n("div",{staticStyle:{width:"100vw",height:"8vh"}}),n("div",{staticStyle:{width:"100vw",height:"80vh","overflow-y":"scroll","font-size":"5rem",padding:"0 1rem"}},[n("div",{attrs:{id:"card-container"}},t._l(t.items,(function(t){return n("Card",{key:t.title,attrs:{xStart:"5vw",wid:"92vw",roundSize:"1.86vmin",roundSizeLeft:"3vmin"}},[n("div",{staticClass:"inject"},[n("SvgIcon",{attrs:{name:"police_icon",color:"#5fbf44",height:"8vh"}})],1)])})),1)]),n("TabBar",{directives:[{name:"show",rawName:"v-show",value:t.tabShow,expression:"tabShow"}]})],1)},i=[],r=n("ae8d"),c=n("d000"),o=n("0311"),l={name:"Police",components:{Card:r["a"],NavBar:c["a"],TabBar:o["a"]},data:function(){return{active:0,title:"Rezension",isleftarrow:"",transitionName:"fade",navShow:!0,tabShow:!0,items:[{title:"1"},{title:"2"},{title:"3"},{title:"4"},{title:"5"},{title:"6"},{title:"7"},{title:"8"},{title:"9"},{title:"10"},{title:"11"},{title:"12"},{title:"13"},{title:"14"},{title:"15"},{title:"16"},{title:"17"},{title:"18"},{title:"19"},{title:"20"}]}}},s=l,u=(n("4986"),n("2877")),f=Object(u["a"])(s,a,i,!1,null,"400fde88",null);e["default"]=f.exports},f752:function(t,e,n){"use strict";n("8650")},fb6a:function(t,e,n){"use strict";var a=n("23e7"),i=n("861d"),r=n("e8b5"),c=n("23cb"),o=n("50c4"),l=n("fc6a"),s=n("8418"),u=n("b622"),f=n("1dde"),d=f("slice"),v=u("species"),h=[].slice,p=Math.max;a({target:"Array",proto:!0,forced:!d},{slice:function(t,e){var n,a,u,f=l(this),d=o(f.length),g=c(t,d),m=c(void 0===e?d:e,d);if(r(f)&&(n=f.constructor,"function"!=typeof n||n!==Array&&!r(n.prototype)?i(n)&&(n=n[v],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return h.call(f,g,m);for(a=new(void 0===n?Array:n)(p(m-g,0)),u=0;g<m;g++,u++)g in f&&s(a,u,f[g]);return a.length=u,a}})}}]);