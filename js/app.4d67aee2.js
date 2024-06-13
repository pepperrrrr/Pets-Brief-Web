(function(){"use strict";var e={5808:function(e,t,i){var n=i(3169),s=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},a=[],r=i(4008),o={},l=(0,r.A)(o,s,a,!1,null,null,null),u=l.exports,c=i(4959),d=function(){var e=this,t=e._self._c;return t("div",{staticClass:"home"},[t("Header"),t("homeSwiper"),t("div",{staticClass:"explore"},[t("div",{staticClass:"exploreTitle"},[e._v("Explore Pets")]),t("div",{staticClass:"petsButton"},e._l(e.exploreList,(function(i,n){return t("div",{key:n,staticClass:"petsIcon"},[t("img",{attrs:{src:i.iconink,alt:""}}),t("div",[e._v(e._s(i.name))])])})),0)]),t("homeSuggest")],1)},g=[],p=i(2261),h=function(){var e=this,t=e._self._c;return t("div",{staticClass:"homeSwiper"},[t("div",{staticClass:"carousel-prev-icon-left",on:{click:e.prevSlide}}),t("div",{staticClass:"swiperSlides"},e._l(e.homeSwiperList,(function(i,n){return t("div",{key:n,staticClass:"slidesItem",style:{backgroundImage:"url("+i.img+")",left:100*n+"%",transform:e.dynamicstyle}},[t("div",{staticClass:"title"},[e._v(e._s(i.title))])])})),0),t("div",{staticClass:"carousel-prev-icon-right",on:{click:e.nextSlide}}),t("div",{staticClass:"swiperDots"},e._l(e.homeSwiperList,(function(i,n){return t("div",{key:n,staticClass:"dot",class:n===e.currentSlide?" selectDot":""})})),0)])},m=[],f={data(){return{homeSwiperList:[{id:0,title:"Stay Active",subTitle:"",img:"/homeSwiper/swiper3.jpg"},{id:1,title:"Enrich Life",subTitle:"",img:"/homeSwiper/swiper4.jpg"},{id:2,title:"Improve Mental Health",subTitle:"",img:"/homeSwiper/swiper5.jpg"},{id:3,title:"Sleep Better",subTitle:"",img:"/homeSwiper/swiper1.jpg"},{id:4,title:"Boost Happiness",subTitle:"",img:"/homeSwiper/swiper2.jpg"},{id:5,title:"Help Improve the Quality of Life of Cancer Patients",subTitle:"",img:"/homeSwiper/swiper6.jpg"}],dynamicstyle:"",currentSlide:0,interval:Object}},mounted(){},methods:{nextSlide(){this.currentSlide=(this.currentSlide+1)%this.homeSwiperList.length,this.setStyle()},prevSlide(){this.currentSlide=(this.currentSlide-1+this.homeSwiperList.length)%this.homeSwiperList.length,this.setStyle()},setStyle(){this.dynamicstyle=`translatex(-${100*this.currentSlide}%)`}}},v=f,y=(0,r.A)(v,h,m,!1,null,"589de5c7",null),b=y.exports,S=function(){var e=this,t=e._self._c;return t("div",{staticClass:"homeSuggest"},e._l(e.suggestPets,(function(i,n){return t("div",{key:n,staticClass:"suggestPet"},[t("div",{staticClass:"itemImage"},[t("img",{attrs:{src:i.imageLink,alt:""}})]),t("div",{staticClass:"itemText"},[t("div",{staticClass:"itemTile"},[e._v(e._s(i.title))]),t("div",{staticClass:"itemDesc"},[e._v(e._s(i.desc))]),t("div",{staticClass:"itemButton"},[e._v("Learn More")])])])})),0)},w=[],k={data(){return{suggestPets:[{id:0,title:"Siberian Husky",desc:"Beautiful appearance level and majestic posture",imageLink:"/suggestIPets/Husky.jpg"},{id:1,title:"Samoyed",desc:"The whole body is white, elegant and cute, and the hair is very thick",imageLink:"/suggestIPets/Samoyed.jpg"},{id:2,title:"Ragdoll",desc:"One of the heaviest cats with large round eyes, thick hair, and a soft, fleshy body",imageLink:"/suggestIPets/Ragdoll.jpg"},{id:3,title:"Poodle",desc:"Smart and sensible, very able to read people, adaptability is very good",imageLink:"/suggestIPets/Poodle.jpg"},{id:4,title:"Corgy",desc:"Very alert and gentle",imageLink:"/suggestIPets/Corgy.jpg"},{id:5,title:"Miniature Pig",desc:"Short stature slightly black back Adult about 14 kg",imageLink:"/suggestIPets/Pig.jpg"},{id:6,title:"Golden Retriever",desc:"big, but super docile",imageLink:"/suggestIPets/Golden.jpg"},{id:7,title:"Hamster",desc:"It looks like a mouse, but its body is short and thick, its outer body is covered with dense hair, and its tail is slightly shorter",imageLink:"/suggestIPets/Hamster.jpg"},{id:8,title:"Lop",desc:"Long ears tend to hang down and tend to be clingy",imageLink:"/suggestIPets/Lop.jpg"},{id:9,title:"Chinchilla",desc:"The head is big and round, the body is small, the personality is gentle, the voice is sharp and soft",imageLink:"/suggestIPets/Chinchilla.jpg"}]}}},C=k,_=(0,r.A)(C,S,w,!1,null,"99bbdacc",null),L=_.exports,D=i(8609),j={name:"page-Home",components:{Header:p.A,homeSwiper:b,homeSuggest:L},data(){return{exploreList:[{id:0,name:"Cats",iconink:"/img/cat.png"},{id:1,name:"Dogs",iconink:"/img/cat.png"},{id:2,name:"Others",iconink:"/img/cat.png"}]}},mounted(){Promise.all([D.A.dispatch("getData")]).then((e=>{this.briefData=e[0].data.data.briefData,this.tabList=e[0].data.data.tabData,this.sectionList=e[0].data.data.data})).catch((e=>{console.log(e)}))}},A=j,P=(0,r.A)(A,d,g,!1,null,"634dac1e",null),x=P.exports;n.Ay.use(c.Ay);const T=[{path:"/home",name:"home",component:x},{path:"/",redirect:"/home"},{path:"/cats",name:"cats",component:()=>Promise.all([i.e(489),i.e(781)]).then(i.bind(i,5691))},{path:"/dogs",name:"dogs",component:()=>Promise.all([i.e(489),i.e(584)]).then(i.bind(i,9460))},{path:"/mine",name:"mine",component:()=>i.e(934).then(i.bind(i,934))},{path:"/otherSpecies",name:"otherSpecies",component:()=>i.e(834).then(i.bind(i,3834))}],I=new c.Ay({mode:"hash",base:"/",routes:T});var O=I;n.Ay.config.productionTip=!1,new n.Ay({router:O,store:D.A,render:e=>e(u)}).$mount("#app")},8609:function(e,t,i){i.d(t,{A:function(){return g}});var n=i(3169),s=i(3778),a=i(2024);const r=()=>a.A.request({method:"get",url:"/api/home"}),o={isShow:!1,tableList:[],infoData:null,priceSymbol:"$",petsData:{}},l={},u={async getData(){return await r()}},c={};var d={state:o,getters:l,actions:u,mutations:c};n.Ay.use(s.Ay);var g=new s.Ay.Store({modules:{map:d}})},2261:function(e,t,i){i.d(t,{A:function(){return m}});var n=function(){var e=this,t=e._self._c;return t("header",[t("div",{staticClass:"header"},[t("div",{staticClass:"iconHeader"},[t("img",{attrs:{src:"/img/list.png",alt:""},on:{click:e.triggerList}}),t("img",{attrs:{src:"/img/pets.png",alt:""}}),t("img",{attrs:{src:"/img/like.png",alt:""}})]),e._m(0)]),t("div",{staticClass:"headerDialog",class:e.showDialog?"hideDialog":"showDialog"},[t("headerDialog",{on:{getDialogStatus:e.getDialogStatus}})],1)])},s=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"inputHeader"},[t("input",{attrs:{type:"text",placeholder:"please input the name"}})])}],a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"headerDialog"},[t("div",{staticClass:"ueserHead"},[e._m(0),t("img",{attrs:{src:"/img/close.png",alt:""},on:{click:function(t){return e.closeDialog()}}})]),t("div",{staticClass:"pageList"},e._l(e.pageListData,(function(i,n){return t("div",{key:n,staticClass:"listItem"},[t("div",[e._v(e._s(i.name))]),t("img",{attrs:{src:"/img/rightArrow.png",alt:""},on:{click:function(t){return e.jumpPage(i.path)}}})])})),0)])},r=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"userInfo"},[t("img",{attrs:{src:"/img/user.png",alt:""}}),t("div",{staticClass:"userText"},[e._v("Login / Sign up")])])}],o={data(){return{pageListData:[{id:0,name:"Home",value:"home",path:"/home"},{id:1,name:"Cats",value:"cats",path:"/cats"},{id:2,name:"Dogs",value:"dogs",path:"/dogs"},{id:3,name:"Other Species",value:"otherSpecies",path:"/otherSpecies"},{id:4,name:"User",value:"user",path:"/user"},{id:5,name:"Favorite",value:"favorite",path:"/favorite"}]}},methods:{closeDialog(){this.$emit("getDialogStatus",!0)},jumpPage(e){e!=this.$route.path?this.$router.replace(e):this.$emit("getDialogStatus",!0)}}},l=o,u=i(4008),c=(0,u.A)(l,a,r,!1,null,"5d122e62",null),d=c.exports,g={components:{headerDialog:d},data(){return{showDialog:!0}},methods:{triggerList(){this.showDialog=!1},getDialogStatus(e){this.showDialog=e}}},p=g,h=(0,u.A)(p,n,s,!1,null,"3102626b",null),m=h.exports}},t={};function i(n){var s=t[n];if(void 0!==s)return s.exports;var a=t[n]={exports:{}};return e[n].call(a.exports,a,a.exports,i),a.exports}i.m=e,function(){var e=[];i.O=function(t,n,s,a){if(!n){var r=1/0;for(c=0;c<e.length;c++){n=e[c][0],s=e[c][1],a=e[c][2];for(var o=!0,l=0;l<n.length;l++)(!1&a||r>=a)&&Object.keys(i.O).every((function(e){return i.O[e](n[l])}))?n.splice(l--,1):(o=!1,a<r&&(r=a));if(o){e.splice(c--,1);var u=s();void 0!==u&&(t=u)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[n,s,a]}}(),function(){i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,{a:t}),t}}(),function(){i.d=function(e,t){for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){i.f={},i.e=function(e){return Promise.all(Object.keys(i.f).reduce((function(t,n){return i.f[n](e,t),t}),[]))}}(),function(){i.u=function(e){return"js/"+e+"."+{489:"a0bbf2f6",584:"e2155401",781:"36126b41",834:"99074f61",934:"299e5a0d"}[e]+".js"}}(),function(){i.miniCssF=function(e){return"css/"+e+"."+{584:"9eb75648",781:"9eb75648"}[e]+".css"}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="vue-noe-prac:";i.l=function(n,s,a,r){if(e[n])e[n].push(s);else{var o,l;if(void 0!==a)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var d=u[c];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==t+a){o=d;break}}o||(l=!0,o=document.createElement("script"),o.charset="utf-8",o.timeout=120,i.nc&&o.setAttribute("nonce",i.nc),o.setAttribute("data-webpack",t+a),o.src=n),e[n]=[s];var g=function(t,i){o.onerror=o.onload=null,clearTimeout(p);var s=e[n];if(delete e[n],o.parentNode&&o.parentNode.removeChild(o),s&&s.forEach((function(e){return e(i)})),t)return t(i)},p=setTimeout(g.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=g.bind(null,o.onerror),o.onload=g.bind(null,o.onload),l&&document.head.appendChild(o)}}}(),function(){i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){i.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,s,a){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css",i.nc&&(r.nonce=i.nc);var o=function(i){if(r.onerror=r.onload=null,"load"===i.type)s();else{var n=i&&i.type,o=i&&i.target&&i.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+n+": "+o+")");l.name="ChunkLoadError",l.code="CSS_CHUNK_LOAD_FAILED",l.type=n,l.request=o,r.parentNode&&r.parentNode.removeChild(r),a(l)}};return r.onerror=r.onload=o,r.href=t,n?n.parentNode.insertBefore(r,n.nextSibling):document.head.appendChild(r),r},t=function(e,t){for(var i=document.getElementsByTagName("link"),n=0;n<i.length;n++){var s=i[n],a=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(a===e||a===t))return s}var r=document.getElementsByTagName("style");for(n=0;n<r.length;n++){s=r[n],a=s.getAttribute("data-href");if(a===e||a===t)return s}},n=function(n){return new Promise((function(s,a){var r=i.miniCssF(n),o=i.p+r;if(t(r,o))return s();e(n,o,null,s,a)}))},s={524:0};i.f.miniCss=function(e,t){var i={584:1,781:1};s[e]?t.push(s[e]):0!==s[e]&&i[e]&&t.push(s[e]=n(e).then((function(){s[e]=0}),(function(t){throw delete s[e],t})))}}}(),function(){var e={524:0};i.f.j=function(t,n){var s=i.o(e,t)?e[t]:void 0;if(0!==s)if(s)n.push(s[2]);else{var a=new Promise((function(i,n){s=e[t]=[i,n]}));n.push(s[2]=a);var r=i.p+i.u(t),o=new Error,l=function(n){if(i.o(e,t)&&(s=e[t],0!==s&&(e[t]=void 0),s)){var a=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;o.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",o.name="ChunkLoadError",o.type=a,o.request=r,s[1](o)}};i.l(r,l,"chunk-"+t,t)}},i.O.j=function(t){return 0===e[t]};var t=function(t,n){var s,a,r=n[0],o=n[1],l=n[2],u=0;if(r.some((function(t){return 0!==e[t]}))){for(s in o)i.o(o,s)&&(i.m[s]=o[s]);if(l)var c=l(i)}for(t&&t(n);u<r.length;u++)a=r[u],i.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return i.O(c)},n=self["webpackChunkvue_noe_prac"]=self["webpackChunkvue_noe_prac"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=i.O(void 0,[504],(function(){return i(5808)}));n=i.O(n)})();
//# sourceMappingURL=app.4d67aee2.js.map