(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-33c1933c"],{"0adf":function(t,e,n){},"7acc":function(t,e,n){"use strict";n("ef54")},"99af":function(t,e,n){"use strict";var a=n("23e7"),i=n("d039"),r=n("e8b5"),c=n("861d"),s=n("7b0b"),o=n("50c4"),l=n("8418"),d=n("65f0"),u=n("1dde"),h=n("b622"),f=n("2d00"),v=h("isConcatSpreadable"),p=9007199254740991,m="Maximum allowed index exceeded",w=f>=51||!i((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),g=u("concat"),S=function(t){if(!c(t))return!1;var e=t[v];return void 0!==e?!!e:r(t)},b=!w||!g;a({target:"Array",proto:!0,forced:b},{concat:function(t){var e,n,a,i,r,c=s(this),u=d(c,0),h=0;for(e=-1,a=arguments.length;e<a;e++)if(r=-1===e?c:arguments[e],S(r)){if(i=o(r.length),h+i>p)throw TypeError(m);for(n=0;n<i;n++,h++)n in r&&l(u,h,r[n])}else{if(h>=p)throw TypeError(m);l(u,h++,r)}return u.length=h,u}})},ae8d:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card",style:{"--my-clip-path":t.clipId}},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"0",height:"0"}},[n("defs",[n("clipPath",{attrs:{id:t.id}},[n("path",{attrs:{d:t.clipPathStyle}})])])]),t._t("default")],2)},i=[];n("99af"),n("caad"),n("2532"),n("fb6a");function r(t){return t/180*Math.PI}function c(t,e,n,a,i,c){var s=n*Math.tan(r(t/2)),o=s*Math.cos(r(t)),l=s*Math.sin(r(t)),d=n*Math.tan(r((90-t)/2)),u=d*Math.cos(r(t)),h=s*Math.sin(r(t)),f=e-o,v=l,p=e*Math.tan(r(t)),m="M".concat(f,",").concat(v);return m+="a".concat(n,",").concat(n,",0,0,1,").concat(o+s,",").concat(-l),m+="h".concat(i-e-s-a),m+="a".concat(a,",").concat(a,",0,0,1,").concat(a,",").concat(a),m+="v".concat(c-2*a),m+="a".concat(a,",").concat(a,",0,0,1,").concat(-a,",").concat(a),m+="H".concat(a),m+="a".concat(a,",").concat(a,",0,0,1,").concat(-a,",").concat(-a),m+="V".concat(p+d),m+="a".concat(n,",").concat(n,",0,0,1,").concat(u,",").concat(-d-h),m+="Z",m}function s(t){var e=Math.max(document.documentElement.clientHeight,window.innerHeight||0);return t*e/100}function o(t){var e=Math.max(document.documentElement.clientWidth,window.innerWidth||0);return t*e/100}function l(t){return Math.min(s(t),o(t))}function d(t){return Math.max(s(t),o(t))}function u(t){if(t.includes("px")){var e=t.slice(0,-2);return parseFloat(e)}if(t.includes("vh")){var n=t.slice(0,-2);return s(parseFloat(n))}if(t.includes("vw")){var a=t.slice(0,-2);return o(parseFloat(a))}if(t.includes("vmin")){var i=t.slice(0,-2);return l(parseFloat(i))}if(t.includes("vmax")){var r=t.slice(0,-2);return d(parseFloat(r))}if(t.includes("%")){var c=t.slice(0,-1);return o(parseFloat(c))}return 0}var h={name:"Card",props:{angle:{type:String,default:"40"},xStart:{type:String,default:"20.25px"},roundSizeLeft:{type:String,default:"5px"},roundSize:{type:String,default:"5px"},wid:{type:String,default:"375px"},hei:{type:String,default:""}},methods:{listenResize:function(){this.clipPathStyle=this.dPath()}},beforeDestroy:function(){window.removeEventListener("resize",this.listenResize),window.removeEventListener("hashchange",this.listenResize)},data:function(){return{id:null,clipPathStyle:function(){return"M50.21624234808966,3.846229355124001a16.44,16.44,0,0,1,10.567428303246707,-3.846229355124001h487.21632934866363a7.2884,7.2884,0,0,1,7.2884,7.2884v487.4232a7.2884,7.2884,0,0,1,-7.2884,7.2884H7.2884a7.2884,7.2884,0,0,1,-7.2884,-7.2884V53.64875768858312a16.44,16.44,0,0,1,5.872571696753293,-11.512327255192178Z"},dPath:function(){var t=u(this.xStart),e=u(this.roundSize),n=u(this.roundSizeLeft),a=u(this.wid),i="";return i=""==this.hei?u(this.$el.clientHeight+"px"):u(this.hei),c(parseFloat(this.angle),t,n,e,a,i)}}},mounted:function(){this.clipPathStyle=this.dPath(),window.addEventListener("resize",this.listenResize),window.addEventListener("hashchange",this.listenResize),this.id="clipping"+this._uid},created:function(){this.clipPathStyle="M50.21624234808966,3.846229355124001a16.44,16.44,0,0,1,10.567428303246707,-3.846229355124001h487.21632934866363a7.2884,7.2884,0,0,1,7.2884,7.2884v487.4232a7.2884,7.2884,0,0,1,-7.2884,7.2884H7.2884a7.2884,7.2884,0,0,1,-7.2884,-7.2884V53.64875768858312a16.44,16.44,0,0,1,5.872571696753293,-11.512327255192178Z"},computed:{clipId:function(){return"url(#"+this.id+")"}}},f=h,v=(n("7acc"),n("2877")),p=Object(v["a"])(f,a,i,!1,null,"6741ad1c",null);e["a"]=p.exports},b183:function(t,e,n){"use strict";n("0adf")},cd56:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"menu"},[n("NavBar",{directives:[{name:"show",rawName:"v-show",value:t.navShow,expression:"navShow"}],attrs:{title:t.title,isleftarrow:t.isleftarrow,fixed:"",hasmenu:"true"}}),n("div",{attrs:{id:"place-holder"}}),n("div",{attrs:{id:"content-container"}},[n("SvgIcon",{attrs:{name:"menu_headline",color:"#5fbf44",height:"10vh",width:"60vw",id:"headline"}}),n("div",{attrs:{id:"card-container"}},t._l(t.items,(function(e){return n("Card",{key:e.id,attrs:{xStart:"6vw",wid:"88vw",roundSize:"3vmin",roundSizeLeft:"4vmin",angle:"50"},nativeOn:{click:function(n){return t.$router.push("/main/"+e.name)}}},[n("div",{staticClass:"inject"},[n("SvgIcon",{staticClass:"number",attrs:{name:"0"+e.id+"_"+e.name,color:"#5fbf44",height:"30vw",width:"40vw"}}),n("div",{staticClass:"title"},[n("SvgIcon",{staticClass:"arrow",attrs:{name:"arrow_in",color:"#5fbf44",height:"1.5ch",width:"2ch"}}),n("div",{staticClass:"title_name"},[n("span",[t._v(t._s(e.title1))]),n("br"),n("span",[t._v(t._s(e.title2))])])],1),n("SvgIcon",{staticClass:"icon",attrs:{name:e.name+"_icon",color:"#5fbf44",height:"15vh",width:"50vw"}})],1)])})),1)],1)],1)},i=[],r=n("ae8d"),c=n("d000"),s={name:"Menu",components:{Card:r["a"],NavBar:c["a"]},data:function(){return{active:0,title:"",isleftarrow:!1,transitionName:"fade",navShow:!0,items:[{id:1,title1:"Strafanzeige",title2:"an die Polizei",name:"police"},{id:2,title1:"Strafanzeige",title2:"an die Kanzlei",name:"lawyer"},{id:3,title1:"Care Management",title2:"im Krankenhaus",name:"hospital"},{id:4,title1:"Psychologische",title2:"Beratung",name:"psy"}]}}},o=s,l=(n("b183"),n("2877")),d=Object(l["a"])(o,a,i,!1,null,"06a5b9b5",null);e["default"]=d.exports},ef54:function(t,e,n){}}]);