(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4a1fbff2"],{"7acc":function(t,e,n){"use strict";n("ef54")},"99af":function(t,e,n){"use strict";var a=n("23e7"),i=n("d039"),c=n("e8b5"),r=n("861d"),o=n("7b0b"),s=n("50c4"),d=n("8418"),l=n("65f0"),u=n("1dde"),h=n("b622"),f=n("2d00"),p=h("isConcatSpreadable"),v=9007199254740991,m="Maximum allowed index exceeded",w=f>=51||!i((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),g=u("concat"),x=function(t){if(!r(t))return!1;var e=t[p];return void 0!==e?!!e:c(t)},S=!w||!g;a({target:"Array",proto:!0,forced:S},{concat:function(t){var e,n,a,i,c,r=o(this),u=l(r,0),h=0;for(e=-1,a=arguments.length;e<a;e++)if(c=-1===e?r:arguments[e],x(c)){if(i=s(c.length),h+i>v)throw TypeError(m);for(n=0;n<i;n++,h++)n in c&&d(u,h,c[n])}else{if(h>=v)throw TypeError(m);d(u,h++,c)}return u.length=h,u}})},ae8d:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card",style:{"--my-clip-path":t.clipId}},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"0",height:"0"}},[n("defs",[n("clipPath",{attrs:{id:t.id}},[n("path",{attrs:{d:t.clipPathStyle}})])])]),t._t("default")],2)},i=[];n("99af"),n("caad"),n("2532"),n("fb6a");function c(t){return t/180*Math.PI}function r(t,e,n,a,i,r){var o=n*Math.tan(c(t/2)),s=o*Math.cos(c(t)),d=o*Math.sin(c(t)),l=n*Math.tan(c((90-t)/2)),u=l*Math.cos(c(t)),h=o*Math.sin(c(t)),f=e-s,p=d,v=e*Math.tan(c(t)),m="M".concat(f,",").concat(p);return m+="a".concat(n,",").concat(n,",0,0,1,").concat(s+o,",").concat(-d),m+="h".concat(i-e-o-a),m+="a".concat(a,",").concat(a,",0,0,1,").concat(a,",").concat(a),m+="v".concat(r-2*a),m+="a".concat(a,",").concat(a,",0,0,1,").concat(-a,",").concat(a),m+="H".concat(a),m+="a".concat(a,",").concat(a,",0,0,1,").concat(-a,",").concat(-a),m+="V".concat(v+l),m+="a".concat(n,",").concat(n,",0,0,1,").concat(u,",").concat(-l-h),m+="Z",m}function o(t){var e=Math.max(document.documentElement.clientHeight,window.innerHeight||0);return t*e/100}function s(t){var e=Math.max(document.documentElement.clientWidth,window.innerWidth||0);return t*e/100}function d(t){return Math.min(o(t),s(t))}function l(t){return Math.max(o(t),s(t))}function u(t){if(t.includes("px")){var e=t.slice(0,-2);return parseFloat(e)}if(t.includes("vh")){var n=t.slice(0,-2);return o(parseFloat(n))}if(t.includes("vw")){var a=t.slice(0,-2);return s(parseFloat(a))}if(t.includes("vmin")){var i=t.slice(0,-2);return d(parseFloat(i))}if(t.includes("vmax")){var c=t.slice(0,-2);return l(parseFloat(c))}if(t.includes("%")){var r=t.slice(0,-1);return s(parseFloat(r))}return 0}var h={name:"Card",props:{angle:{type:String,default:"40"},xStart:{type:String,default:"20.25px"},roundSizeLeft:{type:String,default:"5px"},roundSize:{type:String,default:"5px"},wid:{type:String,default:"375px"},hei:{type:String,default:""}},methods:{listenResize:function(){this.clipPathStyle=this.dPath()}},beforeDestroy:function(){window.removeEventListener("resize",this.listenResize),window.removeEventListener("hashchange",this.listenResize)},data:function(){return{id:null,clipPathStyle:function(){return"M50.21624234808966,3.846229355124001a16.44,16.44,0,0,1,10.567428303246707,-3.846229355124001h487.21632934866363a7.2884,7.2884,0,0,1,7.2884,7.2884v487.4232a7.2884,7.2884,0,0,1,-7.2884,7.2884H7.2884a7.2884,7.2884,0,0,1,-7.2884,-7.2884V53.64875768858312a16.44,16.44,0,0,1,5.872571696753293,-11.512327255192178Z"},dPath:function(){var t=u(this.xStart),e=u(this.roundSize),n=u(this.roundSizeLeft),a=u(this.wid),i="";return i=""==this.hei?u(this.$el.clientHeight+"px"):u(this.hei),r(parseFloat(this.angle),t,n,e,a,i)}}},mounted:function(){this.clipPathStyle=this.dPath(),window.addEventListener("resize",this.listenResize),window.addEventListener("hashchange",this.listenResize),this.id="clipping"+this._uid},created:function(){this.clipPathStyle="M50.21624234808966,3.846229355124001a16.44,16.44,0,0,1,10.567428303246707,-3.846229355124001h487.21632934866363a7.2884,7.2884,0,0,1,7.2884,7.2884v487.4232a7.2884,7.2884,0,0,1,-7.2884,7.2884H7.2884a7.2884,7.2884,0,0,1,-7.2884,-7.2884V53.64875768858312a16.44,16.44,0,0,1,5.872571696753293,-11.512327255192178Z"},computed:{clipId:function(){return"url(#"+this.id+")"}}},f=h,p=(n("7acc"),n("2877")),v=Object(p["a"])(f,a,i,!1,null,"6741ad1c",null);e["a"]=v.exports},b982:function(t,e,n){},cf05:function(t,e,n){t.exports=n.p+"img/logo.png"},d4d0:function(t,e,n){"use strict";n("b982")},d504:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("router-link",{staticStyle:{"text-decoration":"none",color:"inherit"},attrs:{to:"/main"}},[a("div",{staticClass:"full",attrs:{id:"index-page"}},[a("div",{staticClass:"index-head"},[a("img",{attrs:{id:"logo",src:n("cf05")}})]),a("div",{staticClass:"card-shadow"},[a("div",{staticClass:"index-card",attrs:{id:"title-container"}},[a("Card",{attrs:{xStart:"10vw",height:"60vmax",wid:"100%",roundSize:"1.33vmin",roundSizeLeft:"3vmin"}},[a("SvgIcon",{attrs:{name:"headline_mentoo_page"}}),a("p",[t._v(" „#Men Too“ ist eine Hilfsplattform, die männlichen Opfern von sexuellem Missbrauch Soforthilfe leisten soll. ")])],1)],1)])])])},i=[],c=n("ae8d"),r={name:"Index",components:{Card:c["a"]}},o=r,s=(n("d4d0"),n("2877")),d=Object(s["a"])(o,a,i,!1,null,"7f218fa5",null);e["default"]=d.exports},ef54:function(t,e,n){}}]);