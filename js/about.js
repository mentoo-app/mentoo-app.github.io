(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"02c9":function(t,e,n){},"24d0":function(t,e,n){"use strict";n("02c9")},8418:function(t,e,n){"use strict";var a=n("c04e"),i=n("9bf2"),r=n("5c6c");t.exports=function(t,e,n){var c=a(e);c in t?i.f(t,c,r(0,n)):t[c]=n}},"99af":function(t,e,n){"use strict";var a=n("23e7"),i=n("d039"),r=n("e8b5"),c=n("861d"),o=n("7b0b"),s=n("50c4"),u=n("8418"),l=n("65f0"),d=n("1dde"),f=n("b622"),h=n("2d00"),p=f("isConcatSpreadable"),v=9007199254740991,m="Maximum allowed index exceeded",x=h>=51||!i((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),b=d("concat"),g=function(t){if(!c(t))return!1;var e=t[p];return void 0!==e?!!e:r(t)},w=!x||!b;a({target:"Array",proto:!0,forced:w},{concat:function(t){var e,n,a,i,r,c=o(this),d=l(c,0),f=0;for(e=-1,a=arguments.length;e<a;e++)if(r=-1===e?c:arguments[e],g(r)){if(i=s(r.length),f+i>v)throw TypeError(m);for(n=0;n<i;n++,f++)n in r&&u(d,f,r[n])}else{if(f>=v)throw TypeError(m);u(d,f++,r)}return d.length=f,d}})},a725:function(t,e,n){},cf05:function(t,e,n){t.exports=n.p+"img/logo.png"},d504:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"full",attrs:{id:"index-page"}},[t._m(0),n("router-link",{staticStyle:{"text-decoration":"none",color:"inherit"},attrs:{to:"/about"}},[n("div",{staticClass:"card-shadow"},[n("div",{staticClass:"index-card",attrs:{id:"title-container"}},[n("Card",{attrs:{xStart:"10vw",wid:"100vw",roundSize:"1.33vmin",roundSizeLeft:"3vmin"}},[n("SvgIcon",{attrs:{name:"headline_mentoo_page"}}),n("p",[t._v(" „#Men Too“ ist eine Hilfsplattform, welche den männlichen Opfern von sexuellem Missbrauch Soforthilfe leisten soll. ")])],1)],1)])])],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"index-head"},[a("img",{attrs:{id:"logo",src:n("cf05")}})])}],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{style:{"--clipPath":t.clipPathStyle},attrs:{id:"card"}},[t._t("default")],2)},c=[];n("99af"),n("caad"),n("2532"),n("fb6a"),n("a9e3");function o(t){return t/180*Math.PI}function s(t,e,n,a,i,r){console.log(r);var c=n*Math.tan(o(t/2)),s=c*Math.cos(o(t)),u=c*Math.sin(o(t)),l=n*Math.tan(o((90-t)/2)),d=l*Math.cos(o(t)),f=c*Math.sin(o(t)),h=e-s,p=u,v=e*Math.tan(o(t)),m="M ".concat(h," ").concat(p);return m+="a ".concat(n," ").concat(n," 0 0 1 ").concat(s+c," ").concat(-u),m+="h ".concat(i-e-c),m+="a ".concat(a," ").concat(a," 0 0 1 ").concat(a," ").concat(a),m+="v ".concat(r-2*a),m+="a ".concat(a," ").concat(a," 0 0 1 ").concat(-a," ").concat(a),m+="H ".concat(a),m+="a ".concat(a," ").concat(a," 0 0 1 ").concat(-a," ").concat(-a),m+="V ".concat(v+l),m+="a ".concat(n," ").concat(n," 0 0 1 ").concat(d," ").concat(-l-f),m+="Z",m}function u(t){var e=Math.max(document.documentElement.clientHeight,window.innerHeight||0);return t*e/100}function l(t){var e=Math.max(document.documentElement.clientWidth,window.innerWidth||0);return t*e/100}function d(t){return Math.min(u(t),l(t))}function f(t){return Math.max(u(t),l(t))}function h(t){if(t.includes("px")){var e=t.slice(0,-2);return parseFloat(e)}if(t.includes("vh")){var n=t.slice(0,-2);return u(parseFloat(n))}if(t.includes("vw")){var a=t.slice(0,-2);return l(parseFloat(a))}if(t.includes("vmin")){var i=t.slice(0,-2);return d(parseFloat(i))}if(t.includes("vmax")){var r=t.slice(0,-2);return f(parseFloat(r))}if(t.includes("%")){var c=t.slice(0,-1);return l(parseFloat(c))}return 0}var p={name:"Card",props:{angle:{type:Number,default:40},xStart:{type:String,default:"20.25px"},roundSizeLeft:{type:String,default:"5px"},roundSize:{type:String,default:"5px"},wid:{type:String,default:"375px"},hei:{type:String,default:""}},methods:{listenResize:function(){this.clipPathStyle="path('"+this.dPath()+"')"}},beforeDestroy:function(){window.removeEventListener("resize",this.listenResize)},data:function(){return{clipPathStyle:function(){return""},dPath:function(){var t=h(this.xStart),e=h(this.roundSize),n=h(this.roundSizeLeft),a=h(this.wid),i="";return i=""==this.hei?h(this.$el.clientHeight+"px"):h(this.hei),s(this.angle,t,n,e,a,i)}}},mounted:function(){this.clipPathStyle="path('"+this.dPath()+"')",window.addEventListener("resize",this.listenResize)}},v=p,m=(n("d98b"),n("2877")),x=Object(m["a"])(v,r,c,!1,null,"152f829f",null),b=x.exports,g={name:"Index",components:{Card:b}},w=g,y=(n("24d0"),Object(m["a"])(w,a,i,!1,null,"0541b3e4",null));e["default"]=y.exports},d98b:function(t,e,n){"use strict";n("a725")},f820:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("h1",[t._v("Main Menu To be continue")])])}],r=n("2877"),c={},o=Object(r["a"])(c,a,i,!1,null,null,null);e["default"]=o.exports},fb6a:function(t,e,n){"use strict";var a=n("23e7"),i=n("861d"),r=n("e8b5"),c=n("23cb"),o=n("50c4"),s=n("fc6a"),u=n("8418"),l=n("b622"),d=n("1dde"),f=d("slice"),h=l("species"),p=[].slice,v=Math.max;a({target:"Array",proto:!0,forced:!f},{slice:function(t,e){var n,a,l,d=s(this),f=o(d.length),m=c(t,f),x=c(void 0===e?f:e,f);if(r(d)&&(n=d.constructor,"function"!=typeof n||n!==Array&&!r(n.prototype)?i(n)&&(n=n[h],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return p.call(d,m,x);for(a=new(void 0===n?Array:n)(v(x-m,0)),l=0;m<x;m++,l++)m in d&&u(a,l,d[m]);return a.length=l,a}})}}]);