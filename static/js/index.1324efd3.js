webpackJsonp([1],{0:function(t,e,n){t.exports=n("msSN")},"1N97":function(t,e){},"3JWO":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"SET_PAGE_SWITCHING",function(){return a}),n.d(e,"state",function(){return r}),n.d(e,"mutations",function(){return s}),n.d(e,"actions",function(){return o});var i=n("bOdI"),a="SET_PAGE_SWITCHING",r=function(){return{isPageSwitching:!1}},s=n.n(i)()({},a,function(t,e){t.isPageSwitching=e}),o={setPageSwitching:function(t,e){(0,t.commit)(a,e)}}},"5e9e":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"state",function(){return i}),n.d(e,"mutations",function(){return a});var i=function(){return{enable:!0,type:"none",effect:"none"}},a={setType:function(t,e){t.type=e},setEffect:function(t,e){t.effect=e}}},CJsk:function(t,e){},"E+Ot":function(t,e){},IaLg:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"SET_SIDEBAR_VISIBILITY",function(){return a}),n.d(e,"state",function(){return r}),n.d(e,"mutations",function(){return s}),n.d(e,"actions",function(){return o});var i=n("bOdI"),a="SET_SIDEBAR_VISIBILITY",r=function(){return{show:!1,title:{imageLeft:"",altLeft:"",iconLeft:"home",text:"Home",imageRight:"",altRight:"",iconRight:""},blocks:[{sublistTitle:"Sublist1",list:[{text:"Detail Page 1",icon:"sentiment_satisfied",route:"/detail/1"},{text:"Detail Page 2",image:"https://github.com/google/material-design-icons/blob/master/social/2x_web/ic_mood_bad_black_48dp.png?raw=true",alt:"mood-bad",route:"/detail/2"},{text:"Detail Page 3",icon:"sentiment_neutral",route:"/detail/3"}]}]}},s=n.n(i)()({},a,function(t,e){t.show=e}),o={showSidebar:function(t){(0,t.commit)(a,!0)},hideSidebar:function(t){(0,t.commit)(a,!1)}}},Jfi4:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"SET_APP_HEADER",function(){return o}),n.d(e,"state",function(){return c}),n.d(e,"mutations",function(){return l}),n.d(e,"actions",function(){return u});var i=n("bOdI"),a=n.n(i),r=n("woOf"),s=n.n(r),o="SET_APP_HEADER",c=function(){return{show:!0,title:"Lavas",logoIcon:{src:"",alt:""},showMenu:!0,showBack:!1,showLogo:!1,actions:[]}},l=a()({},o,function(t,e){t=s()(t,e)}),u={setAppHeader:function(t,e){(0,t.commit)(o,e)}}},Ka9b:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"state",function(){return h}),n.d(e,"mutations",function(){return d}),n.d(e,"actions",function(){return p});var i=n("Xxa5"),a=n.n(i),r=n("exGp"),s=n.n(r),o=n("bOdI"),c=n.n(o),l=n("mtWM"),u=n.n(l),h=function(){return{weather:{text:"",temp:0}}},d=c()({},"setWeather",function(t,e){var n=e.weatherText,i=e.weatherTemp;t.weather={text:n,temp:i}}),p={setWeather:function(){var t=s()(a.a.mark(function t(e,n){var i,r,s,o=e.commit;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,i="https://query.yahooapis.com/v1/public/yql?q=select%20item.condition%20from%20weather.forecast%20where%20woeid%20%3D%20"+n.woeid+"&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",t.next=4,u()(i);case 4:r=t.sent,s=r.data.query.results.channel.item.condition,o("setWeather",{weatherText:s.text,weatherTemp:s.temp}),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(0),console.log("error in setWeather"),console.log(t.t0);case 13:case"end":return t.stop()}},t,this,[[0,9]])}));return function(e,n){return t.apply(this,arguments)}}()}},Uz7q:function(t,e){t.exports={buildVersion:1526981345494,build:{ssr:!1,publicPath:"/lavasdist/",compress:!0},middleware:{all:[],server:[],client:[]},router:{mode:"history",base:"/",pageTransition:{type:"slide",transitionClass:"slide"}},errorHandler:{defaultErrorMessage:"Internal Server Error",showRealErrorMessage:!1,errorPath:"/error"},serviceWorker:{swDest:"C:\\Users\\fuyanzhi\\lavas-test\\test1\\dist\\service-worker.js"},skeleton:{enable:!0,asyncCSS:!0}}},VfP6:function(t,e,n){var i={"./appShell/appHeader.js":"Jfi4","./appShell/appSidebar.js":"IaLg","./appShell/common.js":"3JWO","./detailwether.js":"Ka9b","./pageTransition.js":"5e9e"};function a(t){return n(r(t))}function r(t){var e=i[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}a.keys=function(){return Object.keys(i)},a.resolve=r,t.exports=a,a.id="VfP6"},aXZW:function(t,e){},ar43:function(t,e){},msSN:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,a=n("//Fk"),r=n.n(a),s=n("Gu7T"),o=n.n(s),c=n("Xxa5"),l=n.n(c),u=n("exGp"),h=n.n(u),d=n("/5sW"),p=n("1nuA"),f=(i=h()(l.a.mark(function t(e){return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",{});case 1:case"end":return t.stop()}},t,this)})),function(t){return i.apply(this,arguments)});function v(t,e){var n={isClient:!0,app:e,store:t.store,route:t.to,from:t.from},i=t.next;return n.params=n.route.params||{},n.query=n.route.query||{},n.redirect=function(t){var e=t.status,a=void 0===e?302:e,r=t.path,s=void 0===r?"":r,o=t.query,c=void 0===o?{}:o,l=t.external,u=void 0!==l&&l;n._redirected=!0,i({path:s,query:c,status:a,external:u})},n}var m,b=(m=h()(l.a.mark(function t(e,n){var i;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:i=0;case 1:if(!(i<e.length)){t.next=9;break}if(!n._redirected){t.next=4;break}return t.abrupt("return");case 4:return t.next=6,w(e[i],n);case 6:i++,t.next=1;break;case 9:case"end":return t.stop()}},t,this)})),function(t,e){return m.apply(this,arguments)});function w(t,e){var n=void 0;return 2===t.length?n=new r.a(function(n,i){t(e,function(t,a){t?(e.error(t),i(t)):n(a)})}):(n=t(e))&&(n instanceof r.a||"function"==typeof n.then)||(n=r.a.resolve(n)),n}var _=n("Uz7q"),g=n.n(_),y=n("Dd8w"),x=n.n(y),S=n("p3jY"),k=n.n(S),C=n("mvHQ"),T=n.n(C),E=n("pFYg"),O=n.n(E),A=n("/ocq"),P={name:"appshell",metaInfo:{title:"Lavas",meta:[{name:"keywords",content:"lavas PWA"},{name:"description",content:"基于 Vue 的 PWA 解决方案，帮助开发者快速搭建 PWA 应用，解决接入 PWA 的各种问题"}],bodyAttrs:{"empty-appshell":void 0}}},I=n("XyMi"),$=Object(I.a)(P,function(){var t=this.$createElement;return(this._self._c||t)("div")},[],!1,null,null,null).exports,H=n("fZjL"),W=n.n(H),j={name:"error",computed:{message:function(){return this.$route.params.error||"Oops! Something is not quite right o(╥﹏╥)o"}},created:function(){var t=this.$route.query;0!==W()(t).length&&this.$router.replace({name:"error",params:t})}},q=Object(I.a)(j,function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("p",[this._v(this._s(this.message))])])},[],!1,null,null,null).exports,L=n("bOdI"),M=n.n(L),D={props:{toDo:{type:String,default:"xx"}}},R=Object(I.a)(D,function(){var t=this.$createElement;return(this._self._c||t)("li",[this._v(this._s(this.toDo))])},[],!1,null,null,null).exports,B=n("mtWM"),Y=n.n(B),N={data:function(){return{message:"Hello",items:["aaa","bbb"]}},components:{todoitem:R},created:function(){document.addEventListener("fetch",function(t){t.respondWith(caches.match(t.request).then(function(e){if(console.info("xxxxxxxxxxxx"),e)return e;var n=t.request.clone();return fetch(n).then(function(e){if(!e||200!==e.status)return e;var n=e.clone();return caches.open("my-test-cache-v1").then(function(e){e.put(t.request,n)}),e})}))})},methods:M()({reverse:function(t){console.log(t.name)},doThis:function(){var t=h()(l.a.mark(function t(){var e,n,i;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e="https://query.yahooapis.com/v1/public/yql?q=select%20item.condition%20from%20weather.forecast%20where%20woeid%20%3D%20"+2151849+"&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",t.next=4,Y()(e);case 4:n=t.sent,i=n.data.query.results.channel.item.condition,console.log(i),this.message=i;case 8:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),handleCacheEvent:function(t){console.info(t)}},"handleCacheEvent",function(t){console.info(t)}),watch:{message:function(t,e){console.log(t,e)}},computed:{reversemessage:function(){}}},X=Object(I.a)(N,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"content"}},[t._m(0),t._v(" "),n("button",{attrs:{styleSheet:"color=red"},on:{click:t.doThis}},[t._v("xxx")]),t._v(" "),n("button",{on:{click:t.reverse}},[t._v("\n        "+t._s(t.message)+"\n    ")]),t._v(" "),n("button",[t._v("\n        "+t._s(t.reversemessage)+"\n    ")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],domProps:{value:t.message},on:{input:function(e){e.target.composing||(t.message=e.target.value)}}}),t._v(" "),n("ol",t._l(t.items,function(t){return n("todoitem",{key:t.id,attrs:{"to-do":t}})})),t._v(" "),n("img",{attrs:{src:"/static/img/icons/android-chrome-192x192.png",alt:"xxxx"}})])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h2",[this._v("LAVASs")]),this._v(" "),e("h4",[this._v("[ˈlɑ:vəz]")])])}],!1,null,null,null).exports,V=n("NYxO"),F={appHeaderState:{show:!1}};function G(t){t.dispatch("appShell/appHeader/setAppHeader",F.appHeaderState)}var J={name:"search",metaInfo:{title:"Search",titleTemplate:"%s - Lavas",meta:[{name:"keywords",content:"lavas PWA"},{name:"description",content:"基于 Vue 的 PWA 解决方案，帮助开发者快速搭建 PWA 应用，解决接入 PWA 的各种问题"}]},data:function(){return{query:"",loading:!1,data:[]}},methods:{search:function(){var t=h()(l.a.mark(function t(){return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.data=[],this.loading=!0,this.$el.querySelector(".search-input").blur(),t.next=5,new r.a(function(t){setTimeout(t,1e3)});case 5:this.data=[{title:"Ali Connors",headline:"Brunch this weekend?",subtitle:"I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",action:"15 min"},{title:"me, Scrott, Jennifer",headline:"Summer BBQ",subtitle:"Wish I could come, but I'm out of town this weekend.",action:"2 hr"},{title:"Sandra Adams",headline:"Oui oui",subtitle:"Do you have Paris recommendations? Have you ever been?",action:"6 hr"},{title:"Trevor Hansen",headline:"Birthday gift",subtitle:"Have any ideas about what we should get Heidi for her birthday?",action:"12 hr"},{title:"Britta Holt",headline:"Recipe to try",subtitle:"We should eat this: Grate, Squash, Corn, and tomatillo Tacos.",action:"18 hr"}],this.loading=!1;case 7:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},asyncData:function(){var t=h()(l.a.mark(function t(e){var n=e.store;e.route;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:G(n);case 1:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),activated:function(){G(this.$store)}};var K=function(t){n("oCHK")},U=[{path:"/appshell",component:$,meta:{},name:"appshell"},{path:"/",component:X,meta:{},name:"index"},{path:"/search",component:Object(I.a)(J,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-search-page"},[n("header",[n("v-btn",{staticClass:"search-btn",attrs:{light:"",icon:""},nativeOn:{click:function(e){t.$router.go(-1)}}},[n("v-icon",{staticClass:"search-icon"},[t._v("arrow_back")])],1),t._v(" "),n("form",{on:{submit:function(e){return e.preventDefault(),t.search(e)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],staticClass:"search-input",attrs:{type:"search",autocomplete:"off",placeholder:"请输入搜索词",autocapitalize:"off"},domProps:{value:t.query},on:{input:function(e){e.target.composing||(t.query=e.target.value)}}})]),t._v(" "),n("v-btn",{staticClass:"search-btn",attrs:{light:"",icon:""},nativeOn:{click:function(e){t.query=""}}},[n("v-icon",{staticClass:"search-icon"},[t._v("close")])],1)],1),t._v(" "),t.loading?n("div",{staticClass:"search-loading"},[n("v-progress-circular",{staticClass:"primary--text",attrs:{indeterminate:"",size:70}})],1):t._e(),t._v(" "),t.data&&t.data.length?n("div",{staticClass:"search-content"},[n("v-list",{attrs:{"two-line":""}},[t._l(t.data,function(e,i){return[n("v-list-tile",{key:e.title,attrs:{avatar:"",ripple:""}},[n("v-list-tile-content",[n("v-list-tile-title",[t._v(t._s(e.title))]),t._v(" "),n("v-list-tile-sub-title",{staticClass:"grey--text text--darken-4"},[t._v(t._s(e.headline))]),t._v(" "),n("v-list-tile-sub-title",[t._v(t._s(e.subtitle))])],1),t._v(" "),n("v-list-tile-action",[n("v-list-tile-action-text",[t._v(t._s(e.action))]),t._v(" "),n("v-icon",{staticClass:"grey--text text--lighten-1"},[t._v("star_border")])],1)],1),t._v(" "),i+1<t.data.length?n("v-divider",{attrs:{light:""}}):t._e()]})],2)],1):t._e()])},[],!1,K,"data-v-22543504",null).exports,meta:{},name:"search"},{path:"/error",component:q,meta:{},name:"error",alias:"*"}];d.a.use(A.a);var z=["index"],Z=[],Q=[],tt="LAVAS_HISTORY_ARRAY_STACK_LOCAL_KEY",et="LAVAS_HISTORY_STATE_STACK_LOCAL_KEY",nt=[],it=!1;function at(){return history.state?history.state.key:""}function rt(t,e){try{localStorage.setItem(t,"object"===(void 0===e?"undefined":O()(e))?T()(e):e)}catch(t){}}function st(t,e){var n,i=!0;return it?(n=nt.indexOf(at()),i=n===nt.length-1||-1===n||(nt.length=n+1,!1),setTimeout(function(){var t=at(),e=nt.indexOf(t);i&&-1===e&&nt.push(t),rt(et,nt)},300)):((i=function(t,e){var n=Q.indexOf(t.fullPath);return-1===n||(Q.length=n+1,!1)}(t))&&Q.push(t.fullPath),rt(tt,Q)),t.name&&-1!==z.indexOf(t.name)?i=!1:t.name&&-1!==Z.indexOf(t.name)&&(i=!0),i}it=window.history&&"state"in history;var ot=function(t,e,n){if(n)return n;var i={};return t.hash&&(i.selector=t.hash),t.matched.some(function(t){return t.meta.scrollToTop})&&(i.x=0,i.y=0),i},ct=U.filter(function(t){return t.keepAlive||t.meta.keepAlive}).map(function(t){return t.name});function lt(){var t=new A.a({mode:"history",base:"/",scrollBehavior:ot,routes:U});return it?function(){if(history.length>1)try{var t=JSON.parse(localStorage.getItem(et));t&&t.length&&(nt=t.slice(-history.length))}catch(t){}setTimeout(function(){nt.length?nt[nt.length-1]=at():nt.push(at())},300)}():function(t){var e=location.href.replace(location.origin+t,"/");try{var n=JSON.parse(localStorage.getItem(tt));n&&n.length&&n[n.length-1]===e&&(Q=n)}catch(t){}-1===Q.indexOf(e)&&Q.push(e)}(t.options.base),t.beforeEach(function(e,n,i){if(t.app.$store&&t.app.$store.state.pageTransition.enable){var a=st(e)?"slide-left":"slide-right";t.app.$store.commit("pageTransition/setType","slide"),t.app.$store.commit("pageTransition/setEffect",a)}i()}),t}var ut=n("woOf"),ht=n.n(ut),dt=n("BO1k"),pt=n.n(dt);d.a.use(V.a);var ft=n("VfP6"),vt=ft.keys(),mt={},bt=!0,wt=!1,_t=void 0;try{for(var gt,yt=pt()(vt);!(bt=(gt=yt.next()).done);bt=!0){var xt=gt.value;if("./index.js"===xt){mt=Ht(xt);break}}}catch(t){wt=!0,_t=t}finally{try{!bt&&yt.return&&yt.return()}finally{if(wt)throw _t}}if("function"!=typeof mt){mt.modules=mt.modules||{};var St=!0,kt=!1,Ct=void 0;try{for(var Tt,Et=pt()(vt);!(St=(Tt=Et.next()).done);St=!0){var Ot=Tt.value;if("./index.js"!==Ot){var At=Ot.replace(/^\.\//,"").replace(/\.js$/,""),Pt=At.split("/"),It=Wt(mt,Pt);It[At=Pt.pop()]=Ht(Ot),It[At].namespaced=!0}}}catch(t){kt=!0,Ct=t}finally{try{!St&&Et.return&&Et.return()}finally{if(kt)throw Ct}}}var $t=mt instanceof Function?mt:function(){return new V.a.Store(ht()({},mt,{state:mt.state instanceof Function?mt.state():{}}))};function Ht(t){var e=ft(t),n=e.default||e;if(n.commit)throw new Error("[lavas] store/"+t.replace("./","")+" should export a method which returns a Vuex instance.");if(n.state&&"function"!=typeof n.state)throw new Error("[lavas] state should be a function in store/"+t.replace("./",""));return n}function Wt(t,e){if(1===e.length)return t.modules;var n=e.shift(),i=t.modules[n]=t.modules[n]||{};return i.namespaced=!0,i.modules=i.modules||{},Wt(i,e)}var jt=new d.a,qt={name:"appHeader",computed:x()({},Object(V.c)("appShell/appHeader",["show","showMenu","showBack","showLogo","logoIcon","title","actions"]),Object(V.c)("appShell/common",["isPageSwitching"])),methods:{handleClick:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.actionIdx,i=e.route;if(!this.isPageSwitching){var a={};"action"===t&&(a.actionIdx=n),this.$emit("click-"+t,a),jt.$emit("app-header:click-"+t,a),i&&this.$router.push(i)}}}};var Lt=function(t){n("aXZW")},Mt=Object(I.a)(qt,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"slide-down"}},[n("header",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"app-header-wrapper"},[n("div",{staticClass:"app-header-left"},[t.showMenu?n("v-btn",{attrs:{icon:""},nativeOn:{click:function(e){t.handleClick("menu")}}},[n("v-icon",{staticClass:"app-header-icon",attrs:{color:"white"}},[t._v("menu")])],1):t._e(),t._v(" "),t.showBack?n("v-btn",{attrs:{icon:""},nativeOn:{click:function(e){t.handleClick("back")}}},[n("v-icon",{staticClass:"app-header-icon",attrs:{color:"white"}},[t._v("arrow_back")])],1):t._e(),t._v(" "),t.showLogo?n("div",{on:{click:function(e){t.handleClick("logo")}}},[t._t("logo",[t.logoIcon.src?n("img",{staticClass:"app-header-icon",attrs:{src:t.logoIcon.src,alt:t.logoIcon.alt}}):t._e()])],2):t._e()],1),t._v(" "),n("div",{staticClass:"app-header-middle"},[t._t("title",[t._v("\n                "+t._s(t.title)+"\n            ")])],2),t._v(" "),n("div",{staticClass:"app-header-right"},[t._l(t.actions,function(e,i){return t._t("actions",[n("v-btn",{attrs:{icon:"icon"},nativeOn:{click:function(n){t.handleClick("action",{actionIdx:i,route:e.route})}}},[e.icon?n("v-icon",{staticClass:"app-header-icon",attrs:{color:"white"}},[t._v(t._s(e.icon))]):t._e()],1)],{icon:e.icon,route:e.route})})],2)])])},[],!1,Lt,"data-v-35672a54",null).exports,Dt=n("XPnZ"),Rt=n.n(Dt),Bt=function(t){setTimeout(t,1e3/60)};Bt=window.requestAnimationFrame||window.webkitRequestAnimationFrame||Bt;var Yt={props:{value:{type:Boolean,default:!1},enable:{type:Boolean,default:!0},width:{type:Number,default:.75},duration:{type:Number,default:200},region:M()({type:Object},"default",function(){return{top:0,bottom:0,left:0,width:40}})},data:function(){return{clientWidth:320,clientHeight:568,startX:0,startY:0,scrollEnable:!1,wrapperClass:{expand:!1,collapse:!0,"w-left":!0},opacity:0,iscroll:null}},computed:{itsWidth:function(){return this.width<1?Math.round(this.width*this.clientWidth):this.width},widthProp:function(){return this.itsWidth+"px"},status:{get:function(){return this.value},set:function(t){this.$emit("input",t)}},zone:function(){var t=this.region,e=t.top,n=t.right,i=t.bottom,a=t.left,r=t.width,s=t.height,o=this.clientWidth,c=this.clientHeight;return{top:void 0===e?c-i-s:e,left:void 0===a?o-n-r:a,width:void 0===r?o-a-n:r,height:void 0===s?c-e-a:s}}},watch:{status:function(t){t?this.expand():this.collapse()}},mounted:function(){this.clientWidth=document.documentElement.clientWidth,this.clientHeight=document.documentElement.clientHeight,document.body.addEventListener("touchstart",this.touchStart.bind(this)),document.body.addEventListener("touchmove",this.touchMove.bind(this))},methods:{touchStart:function(t){if(!this.wrapperClass.expand&&this.enable){var e=t.touches[0],n=e.clientX,i=e.clientY,a=this.zone,r=a.left,s=a.top,o=a.width,c=a.height;n<r||n>r+o||i<s||i>s+c||(this.scrollEnable=!0,this.startX=n,this.startY=i)}},touchMove:function(t){var e=this;if(this.scrollEnable){var n=t.touches[0],i=n.clientX,a=n.clientY,r=i-this.startX;r>5&&Math.abs(a-this.startY)/r<.577&&(this.wrapperClass.expand=!0,this.wrapperClass.collapse=!1,this.$nextTick(function(){e.bindScroll(t)}))}},toggleClick:function(t){this.status=!1},bindScroll:function(t){var e=this;this.iscroll||(this.iscroll=new Rt.a(this.$refs.sidebarWrapper,{eventPassthrough:!0,scrollY:!1,scrollX:!0,bounce:!1,startX:-this.itsWidth}),this.iscroll.on("scrollEnd",function(){var t=e.iscroll,n=t.directionX,i=t.x;0===i?e.status=!0:i===-e.itsWidth?e.status=!1:e.status=!(n>0)&&(n<0||!e.status)}),this.changeOpacity(),t&&this.iscroll._start(t))},expand:function(){var t=this;this.wrapperClass.expand=!0,this.wrapperClass.collapse=!1,this.$nextTick(function(){t.iscroll||t.bindScroll(),t.iscroll.x<0&&setTimeout(function(){t.iscroll&&t.iscroll.scrollTo(0,0,t.duration)},10)})},collapse:function(){var t=this;this.iscroll&&(this.iscroll.x===-this.itsWidth?this.unbindScroll():(setTimeout(function(){t.iscroll.scrollTo(-t.itsWidth,0,t.duration)}),setTimeout(function(){t.unbindScroll()},this.duration+10)))},unbindScroll:function(){this.iscroll&&(this.iscroll.destroy(),this.iscroll=null,this.wrapperClass.expand=!1,this.wrapperClass.collapse=!0,this.scrollEnable=!1,this.opacity=0,this.$refs.sidebarScroller.setAttribute("style","padding-left:"+this.widthProp))},changeOpacity:function(){this.wrapperClass.expand&&this.iscroll&&(this.opacity=(this.iscroll.x+this.itsWidth)/this.itsWidth*.5,Bt(this.changeOpacity.bind(this)))}}};var Nt=function(t){n("sWqJ")},Xt={components:{Sidebar:Object(I.a)(Yt,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"sidebarWrapper",staticClass:"sidebar-wrapper",class:t.wrapperClass},[n("div",{ref:"sidebarScroller",staticClass:"sidebar-scroller",style:{"padding-left":t.widthProp}},[n("div",{staticClass:"sidebar-main",style:{width:t.widthProp},on:{scroll:function(t){t.stopPropagation()}}},[t._t("default")],2),t._v(" "),n("div",{ref:"sidebarToggle",staticClass:"touch-toggle",style:{opacity:t.opacity,"padding-left":t.widthProp},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.toggleClick(e)}}})])])},[],!1,Nt,"data-v-414ed5f0",null).exports},computed:x()({},Object(V.c)("appShell/appSidebar",["show","title","user","blocks"]),{sidebarStatus:{get:function(){return this.show},set:function(t){t?this.$emit("show-sidebar"):this.$emit("hide-sidebar")}},enableSidebar:function(){return this.$store.state.appShell.appHeader.show&&this.$store.state.appShell.appHeader.showMenu}}),methods:{close:function(){this.sidebarStatus=!1},closeAndGo:function(t){this.$router.push(t),this.close()}}};var Vt=function(t){n("ar43")},Ft=Object(I.a)(Xt,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("sidebar",{attrs:{enable:t.enableSidebar},model:{value:t.sidebarStatus,callback:function(e){t.sidebarStatus=e},expression:"sidebarStatus"}},[n("div",{staticClass:"app-sidebar-content"},[t.title?n("div",{staticClass:"app-sidebar-title",on:{click:function(e){e.stopPropagation(),t.closeAndGo("/")}}},[n("span",{staticClass:"app-sidebar-title-left-icon"},[t.title.imageLeft?n("img",{attrs:{src:t.title.imageLeft,alt:t.title.altLeft}}):t.title.iconLeft?n("v-icon",{attrs:{color:"white"}},[t._v(t._s(t.title.iconLeft))]):t._e()],1),t._v(" "),n("span",[t._v(t._s(t.title.text))]),t._v(" "),t._t("logo",[n("span",{staticClass:"app-sidebar-title-right-logo"},[t.title.imageRight?n("img",{attrs:{src:t.title.imageRight,alt:t.title.altRight}}):t.title.iconRight?n("v-icon",[t._v(t._s(t.title.iconRight))]):t._e()],1)])],2):t._e(),t._v(" "),t.user?n("div",{staticClass:"app-sidebar-user"},[n("div",{staticClass:"user-avatar"},[n("v-icon",{staticClass:"user-avatar-icon"},[t._v("face")])],1),t._v(" "),n("div",{staticClass:"user-info"},[n("div",{staticClass:"user-name"},[n("v-icon",[t._v("person")]),t._v(t._s(t.user.name))],1),t._v(" "),n("div",{staticClass:"user-location"},[n("v-icon",[t._v("room")]),t._v(t._s(t.user.location))],1),t._v(" "),n("div",{staticClass:"user-email"},[n("v-icon",[t._v("email")]),t._v(t._s(t.user.email))],1)])]):t._e(),t._v(" "),t.blocks?n("div",{staticClass:"app-sidebar-blocks"},[n("ul",t._l(t.blocks,function(e,i){return n("li",{key:i,staticClass:"app-sidebar-block"},[e.sublistTitle?n("div",{staticClass:"sub-list-title"},[t._v(t._s(e.sublistTitle))]):t._e(),t._v(" "),e.list?n("ul",t._l(e.list,function(e){return n("li",{key:e.text,on:{click:function(n){n.stopPropagation(),t.closeAndGo(e.route)}}},[e.icon||e.image?n("span",{staticClass:"app-sidebar-block-left-icon"},[e.image?n("img",{attrs:{src:e.image,alt:e.alt}}):e.icon?n("v-icon",[t._v(t._s(e.icon))]):t._e()],1):t._e(),t._v(" "),e.text?n("span",{staticClass:"app-sidebar-block-text"},[t._v(t._s(e.text))]):t._e()])})):t._e()])}))]):t._e()])])},[],!1,Vt,"data-v-e345e3d6",null).exports,Gt={name:"updateToast",props:{text:{type:String,default:"站点发生更新，请手动刷新"}},data:function(){return{show:!1}},mounted:function(){window.addEventListener("sw.update",this.handleUpdate)},beforeDestroy:function(){window.removeEventListener("sw.update",this.handleUpdate)},methods:{handleUpdate:function(t){this.show=!0},handleRefresh:function(){window.location.reload()}}};var Jt=function(t){n("quHv")},Kt={name:"app",components:{UpdateToast:Object(I.a)(Gt,function(){var t=this.$createElement,e=this._self._c||t;return e("transition",{attrs:{name:"popup"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:this.show,expression:"show"}],staticClass:"update-toast"},[e("span",[this._v(this._s(this.text))]),this._v(" "),e("span",{staticClass:"update-toast-close-btn",on:{click:this.handleRefresh}},[e("i",{staticClass:"iconfont icon-refresh"})])])])},[],!1,Jt,"data-v-fc732238",null).exports,AppHeader:Mt,AppSidebar:Ft},computed:x()({},Object(V.c)("pageTransition",{pageTransitionType:function(t){return t.type},pageTransitionEffect:function(t){return t.effect}}),Object(V.c)("appShell/appHeader",{appHeaderShow:function(t){return t.show}}),{pageTransitionClass:function(){return"transition-"+this.pageTransitionType},routerViewKey:function(){var t=this.$route,e=t.name,n=t.params,i=W()(n);return i.length?e+i.reduce(function(t,e){return t+n[e]},""):null}}),data:function(){return{keepAlivePages:ct}},methods:x()({},Object(V.b)("appShell/appSidebar",["showSidebar","hideSidebar"]),Object(V.b)("appShell/common",["setPageSwitching"]),{handleBeforeEnter:function(t){this.setPageSwitching(!0)},handleAfterEnter:function(t){this.setPageSwitching(!1)},handleClickHeaderBack:function(){this.$router.go(-1)},handleClickHeaderMenu:function(){this.showSidebar()},handleHideSidebar:function(){this.hideSidebar()},handleShowSidebar:function(){this.showSidebar()}})};var Ut=function(t){n("E+Ot")},zt=Object(I.a)(Kt,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("v-app",[n("app-header",{staticClass:"app-shell-header",on:{"click-menu":t.handleClickHeaderMenu,"click-back":t.handleClickHeaderBack}}),t._v(" "),n("app-sidebar",{on:{"hide-sidebar":t.handleHideSidebar,"show-sidebar":t.handleShowSidebar}}),t._v(" "),n("transition",{attrs:{name:t.pageTransitionEffect},on:{"before-enter":t.handleBeforeEnter,"after-enter":t.handleAfterEnter}},[n("keep-alive",{attrs:{include:[].concat(t.keepAlivePages)}},[n("router-view",{key:t.routerViewKey,staticClass:"app-view",class:[{"app-view-with-header":t.appHeaderShow},t.pageTransitionClass]})],1)],1),t._v(" "),n("update-toast")],1)],1)},[],!1,Ut,null,null).exports,Zt=n("3EgV"),Qt=n.n(Zt);d.a.use(k.a),d.a.use(Qt.a),d.a.config.productionTip=!1;var te={data:function(){return{percent:0,show:!1,canSuccess:!0,duration:3e3,height:"2px",color:"#ffca2b",failedColor:"#ff0000"}},methods:{start:function(){var t=this;return this.show=!0,this.canSuccess=!0,this._timer&&(clearInterval(this._timer),this.percent=0),this._cut=1e4/Math.floor(this.duration),this._timer=setInterval(function(){t.increase(t._cut*Math.random()),t.percent>95&&t.finish()},100),this},set:function(t){return this.show=!0,this.canSuccess=!0,this.percent=Math.floor(t),this},get:function(){return Math.floor(this.percent)},increase:function(t){return this.percent=this.percent+Math.floor(t),this},decrease:function(t){return this.percent=this.percent-Math.floor(t),this},finish:function(){return this.percent=100,this.hide(),this},pause:function(){return clearInterval(this._timer),this},hide:function(){var t=this;return clearInterval(this._timer),this._timer=null,setTimeout(function(){t.show=!1,t.$nextTick(function(){setTimeout(function(){t.percent=0},200)})},500),this},fail:function(){return this.canSuccess=!1,this}}};var ee=function(t){n("1N97")},ne=Object(I.a)(te,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"progress",style:{width:this.percent+"%",height:this.height,"background-color":this.canSuccess?this.color:this.failedColor,opacity:this.show?1:0}})},[],!1,ee,"data-v-e0e1a4fc",null).exports,ie=n("p5k0"),ae=n.n(ie),re=n("XGXE"),se=n.n(re);n("MU8w"),n("CJsk");ae.a.shim(),se.a.shim();var oe,ce,le=d.a.prototype.$loading=new d.a(ne).$mount(),ue=(oe=lt(),ce=$t(),{App:d.a.extend(x()({router:oe,store:ce},zt)),router:oe,store:ce}),he=ue.App,de=ue.router,pe=ue.store,fe=g.a.build,ve=fe.ssr,me=fe.cssExtract,be=g.a.middleware,we=void 0===be?{}:be,_e=g.a.skeleton,ge=_e.enable,ye=_e.asyncCSS,xe=void 0;if(window.__INITIAL_STATE__&&pe.replaceState(window.__INITIAL_STATE__),document.body.appendChild(le.$el),d.a.mixin({beforeRouteUpdate:function(){var t=h()(l.a.mark(function t(e,n,i){var a;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:(a=this.$options.asyncData)?(le.start(),a.call(this,{store:this.$store,route:e}).then(function(){le.finish(),i()}).catch(i)):i();case 2:case"end":return t.stop()}},t,this)}));return function(e,n,i){return t.apply(this,arguments)}}()}),function(){var t=this;de.beforeEach((e=h()(l.a.mark(function e(n,i,a){var r,s,c,u,h,d,m,w,_;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(r=i.fullPath.split("#")[0],s=n.fullPath.split("#")[0],r!==s){t.next=4;break}return t.abrupt("return",a());case 4:return c=de.getMatchedComponents(n),u=[].concat(o()(we.all||[]),o()(we.client||[]),o()(c.filter(function(t){var e=t.middleware;return!!e}).reduce(function(t,e){var n=e.middleware;return t.concat(n)},[]))),t.next=8,f(u);case 8:if(h=t.sent,!(d=u.find(function(t){return"function"!=typeof h[t]}))){t.next=12;break}throw new Error("Unknown middleware "+d);case 12:return m=!1,w=v({to:n,from:i,store:pe,next:function(t){if(le.finish&&le.finish(),!m){if(m=!0,t.external)return t.query=Object(p.stringify)(t.query),t.path=t.path+(t.query?"?"+t.query:""),window.location.replace(t.path),a();a(t)}}},xe),_=u.map(function(t){return h[t]}),t.next=18,b(_,w);case 18:m||a();case 19:case"end":return t.stop()}},e,t)})),function(t,n,i){return e.apply(this,arguments)}));var e}(),!document.body.hasAttribute("empty-appshell")&&ve)xe=new he,de.onReady(function(){ke(),xe.$mount("#app")});else{var Se=ge&&ye&&me;window.mountLavas=function(){setTimeout(function(){return xe.$mount("#app")},0)},ke(),xe=new he,(!Se||Se&&window.STYLE_READY)&&window.mountLavas()}function ke(){var t=this;de.beforeResolve(function(e,n,i){var a,s=de.getMatchedComponents(e),o=de.getMatchedComponents(n),c=!1,u=s.filter(function(t,e){return c||(c=o[e]!==t)});if(!u.length)return i();le.start(),r.a.all(u.filter(function(t){return t.asyncData&&(!t.asyncDataFetched||!e.meta.keepAlive)}).map((a=h()(l.a.mark(function n(i){return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.asyncData({store:pe,route:e});case 2:i.asyncDataFetched=!0;case 3:case"end":return t.stop()}},n,t)})),function(t){return a.apply(this,arguments)}))).then(function(){le.finish(),i()}).catch(i)})}},oCHK:function(t,e){},quHv:function(t,e){},sWqJ:function(t,e){}},[0]);
//# sourceMappingURL=index.1324efd3.js.map