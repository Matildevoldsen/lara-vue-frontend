(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{123:function(t,e,r){"use strict";r.r(e);r(15);var n=r(0).a.extend({props:{article:{type:Object,required:!0},user:{type:Object,required:!0}},computed:{name:function(){return this.user.name}}}),l=(r(231),r(6)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.article&&t.user&&t.name?r("div",{staticClass:"card-hover overflow-hidden transition-all hover:shadow-2xl shadow-lg rounded-lg h-90 lg:w-96 w-full md:w-80 cursor-pointer m-auto"},[r("a",{staticClass:"w-full block h-full",attrs:{href:"#"}},[t.article.thumbnail?r("img",{staticClass:"max-h-40 w-full object-cover",attrs:{alt:t.article.thumbnail_alt,src:t.article.thumbnail}}):t._e(),t._v(" "),r("div",{staticClass:"bg-white dark:bg-gray-800 w-full p-4"},[r("p",{staticClass:"text-indigo-500 text-md font-medium"},[t._v("\n        "+t._s(t.article.title)+"\n      ")]),t._v(" "),r("p",{staticClass:"text-gray-800 dark:text-white text-xl font-medium mb-2"},[t._v("\n        "+t._s(t.article.sub_heading)+"\n      ")]),t._v(" "),r("p",{staticClass:"text-gray-400 dark:text-gray-300 font-light text-md"},[t._v("\n        "+t._s(t.article.meta_description)+"\n      ")]),t._v(" "),t.user&&t.user.name&&t.user.avatar?r("div",{staticClass:"flex items-center mt-4"},[r("a",{staticClass:"block relative",attrs:{href:"#"}},[t.user&&t.user.name&&t.user.avatar?r("img",{staticClass:"mx-auto object-cover rounded-full h-10 w-10 ",attrs:{alt:"A photo of ".name,src:t.user.avatar}}):t._e()]),t._v(" "),r("div",{staticClass:"flex flex-col justify-between ml-4 text-sm"},[r("p",{staticClass:"text-gray-800 dark:text-white"},[t._v("\n            "+t._s(t.name)+"\n          ")]),t._v(" "),r("p",{staticClass:"text-gray-400 dark:text-gray-300"},[t._v("\n            "+t._s(t.article.created_at)+" - "+t._s(t.article.estimated_read_time)+"\n          ")])])]):t._e()])])]):t._e()}),[],!1,null,null,null);e.default=component.exports},124:function(t,e,r){"use strict";r.r(e);var n=r(0).a.extend({data:function(){return{menu:{title:"Sort By"}}}}),l=r(6),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"w-full bg-white p-12"},[r("div",{staticClass:"header flex items-end justify-between mb-12"},[t._m(0),t._v(" "),r("div",{staticClass:"text-end flex-row flex"},[r("Menu",{staticClass:"mt-2",attrs:{menu:t.menu}},[r("MenuItem",{attrs:{title:"Latest"}}),t._v(" "),r("MenuItem",{attrs:{title:"Popularity"}}),t._v(" "),r("MenuItem",{attrs:{title:"Oldest"}})],1),t._v(" "),r("button",{staticClass:"ml-5 flex items-center p-4  transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none"},[r("svg",{staticClass:"h-5 w-5",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[r("path",{attrs:{d:"M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"}})])])],1)]),t._v(" "),r("div",{staticClass:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12"},[t._t("default")],2),t._v(" "),r("div",{staticClass:"px-5 bg-white py-5 flex flex-col xs:flex-row items-center xs:justify-between"},[r("div",{staticClass:"flex items-center"},[r("button",{staticClass:"w-full p-4 border text-base rounded-l-xl text-gray-600 bg-white hover:bg-gray-100",attrs:{type:"button"}},[r("svg",{attrs:{width:"9",fill:"currentColor",height:"8",viewBox:"0 0 1792 1792",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z"}})])]),t._v(" "),r("button",{staticClass:"w-full px-4 py-2 border-t border-b text-base text-indigo-500 bg-white hover:bg-gray-100 ",attrs:{type:"button"}},[t._v("\n        1\n      ")]),t._v(" "),r("button",{staticClass:"w-full px-4 py-2 border text-base text-gray-600 bg-white hover:bg-gray-100",attrs:{type:"button"}},[t._v("\n        2\n      ")]),t._v(" "),r("button",{staticClass:"w-full px-4 py-2 border-t border-b text-base text-gray-600 bg-white hover:bg-gray-100",attrs:{type:"button"}},[t._v("\n        3\n      ")]),t._v(" "),r("button",{staticClass:"w-full px-4 py-2 border text-base text-gray-600 bg-white hover:bg-gray-100",attrs:{type:"button"}},[t._v("\n        4\n      ")]),t._v(" "),r("button",{staticClass:"w-full p-4 border-t border-b border-r text-base  rounded-r-xl text-gray-600 bg-white hover:bg-gray-100",attrs:{type:"button"}},[r("svg",{attrs:{width:"9",fill:"currentColor",height:"8",viewBox:"0 0 1792 1792",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"}})])])])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"title"},[r("p",{staticClass:"text-4xl font-bold text-gray-800 mb-4"},[t._v("\n        Lastest articles\n      ")]),t._v(" "),r("p",{staticClass:"text-2xl font-light text-gray-400"},[t._v("\n        Develop your knowledge within Laravel, NuxtJS, VueJS and Tailwind CSS.\n      ")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{MenuItem:r(86).default,Menu:r(87).default})},163:function(t,e,r){var content=r(232);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(55).default)("086f4320",content,!0,{sourceMap:!1})},164:function(t,e,r){var content=r(234);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(55).default)("bc0f4dfc",content,!0,{sourceMap:!1})},173:function(t,e,r){"use strict";r.r(e);var n=r(0).a.extend({data:function(){return{form:{password:""}}}}),l=r(6),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"absolute h-screen w-full h-full z-50 inset-0 overflow-y-auto"},[r("div",{},[r("div",{staticClass:"absolute flex justify-center justify-items-center align-baseline w-full h-full inset-0 bg-gray-500 opacity-75 "},[r("div",{staticClass:"shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-800 w-64 m-auto"},[r("div",{staticClass:"w-full z-50 h-full text-center"},[r("div",{staticClass:"flex h-full flex-col justify-between"},[r("p",{staticClass:"text-gray-800 dark:text-gray-200 text-xl font-bold mt-4"},[t._v("\n              Confirm your password\n            ")]),t._v(" "),r("p",{staticClass:"text-gray-600 dark:text-gray-400 text-xs py-2 px-6"},[r("Input",{attrs:{type:"password"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),t._v(" "),t._m(0)])])])])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex items-center justify-between gap-4 w-full mt-8"},[r("button",{staticClass:"py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ",attrs:{type:"button"}},[t._v("\n                Delete\n              ")]),t._v(" "),r("button",{staticClass:"py-2 px-4  bg-white hover:bg-gray-100 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-indigo-500 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ",attrs:{type:"button"}},[t._v("\n                Cancel\n              ")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Input:r(44).default})},174:function(t,e,r){"use strict";r.r(e);r(233);var n=r(6),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",{staticClass:"NuxtLogo",attrs:{width:"245",height:"180",viewBox:"0 0 452 342",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M139 330l-1-2c-2-4-2-8-1-13H29L189 31l67 121 22-16-67-121c-1-2-9-14-22-14-6 0-15 2-22 15L5 303c-1 3-8 16-2 27 4 6 10 12 24 12h136c-14 0-21-6-24-12z",fill:"#00C58E"}}),t._v(" "),r("path",{attrs:{d:"M447 304L317 70c-2-2-9-15-22-15-6 0-15 3-22 15l-17 28v54l39-67 129 230h-49a23 23 0 0 1-2 14l-1 1c-6 11-21 12-23 12h76c3 0 17-1 24-12 3-5 5-14-2-26z",fill:"#108775"}}),t._v(" "),r("path",{attrs:{d:"M376 330v-1l1-2c1-4 2-8 1-12l-4-12-102-178-15-27h-1l-15 27-102 178-4 12a24 24 0 0 0 2 15c4 6 10 12 24 12h190c3 0 18-1 25-12zM256 152l93 163H163l93-163z",fill:"#2F495E"}})])}),[],!1,null,null,null);e.default=component.exports},175:function(t,e,r){"use strict";r.r(e);var n=r(6),component=Object(n.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("div")}),[],!1,null,null,null);e.default=component.exports},183:function(t,e,r){"use strict";var n=r(3),l=(r(28),r(15),r(0).a.extend({data:function(){return{showMenuBar:!1,menu:{title:"Settings"}}},fetch:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.$auth.loggedIn&&(t.menu.title=t.$auth.user.name);case 1:case"end":return e.stop()}}),e)})))()},methods:{logout:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,console.log("logging out");case 2:return e.next=4,t.$auth.logout();case 4:return e.next=6,t.$router.push("/");case 6:case"end":return e.stop()}}),e)})))()}}})),o=r(6),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",[r("nav",{staticClass:"z-20 bg-white dark:bg-gray-800  shadow py-4 "},[r("div",{staticClass:"max-w-7xl mx-auto px-8"},[r("div",{staticClass:"flex items-center justify-between h-16"},[t._m(0),t._v(" "),r("div",{staticClass:"block"},[r("div",{staticClass:"hidden md:block -mr-2 flex"},[r("form",{staticClass:"flex w-full max-w-sm space-x-3"},[t._m(1),t._v(" "),t.$auth.loggedIn?r("Menu",{staticClass:"mt-1",attrs:{menu:t.menu}},[r("MenuItem",{attrs:{title:"My Profile"}}),t._v(" "),r("nuxt-link",{attrs:{to:"user/ProfileSettings"}},[r("MenuItem",{attrs:{title:"Profile Settings"}})],1),t._v(" "),r("a",{on:{click:t.logout}},[r("MenuItem",{attrs:{title:"Logout"}})],1)],1):t._e()],1)]),t._v(" "),r("div",{staticClass:"ml-4 flex items-center md:ml-6"})]),t._v(" "),r("div",{staticClass:"-mr-2 flex md:hidden"},[r("button",{staticClass:"text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none",on:{click:function(e){t.showMenuBar=!t.showMenuBar}}},[r("svg",{staticClass:"h-8 w-8",attrs:{width:"20",height:"20",fill:"currentColor",viewBox:"0 0 1792 1792",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"}})])])])])]),t._v(" "),t.showMenuBar?r("div",{staticClass:"md:hidden flex justify-center",staticStyle:{"flex-direction":"column","align-content":"center","align-items":"center"}},[t._m(2),t._v(" "),t._m(3)]):t._e()])]),t._v(" "),r("Nuxt"),t._v(" "),r("Footer")],1)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:" flex items-center"},[r("a",{staticClass:"flex-shrink-0 font-bold font-italic text-lg text-uppercase",staticStyle:{"font-family":"'Kanit', sans-serif"},attrs:{href:"/"}},[r("span",{staticClass:"text-red-500"},[t._v("Lara-")]),r("span",{staticClass:"text-green-500"},[t._v("vue")])]),t._v(" "),r("div",{staticClass:"hidden md:block"},[r("div",{staticClass:"ml-10 flex items-baseline space-x-4"},[r("a",{staticClass:"text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium",attrs:{href:"/#"}},[t._v("\n                  Home\n                ")]),t._v(" "),r("a",{staticClass:"text-gray-800 dark:text-white  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium",attrs:{href:"/#"}},[t._v("\n                  Laravel\n                ")]),t._v(" "),r("a",{staticClass:"text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium",attrs:{href:"/#"}},[t._v("\n                  Vue\n                ")]),t._v(" "),r("a",{staticClass:"text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium",attrs:{href:"/#"}},[t._v("\n                  Components & Projects\n                ")]),t._v(" "),r("a",{staticClass:"text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium",attrs:{href:"/#"}},[t._v("\n                  Contact\n                ")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:" relative "},[e("input",{staticClass:" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent",attrs:{type:"text",id:'"form-subscribe-Search',placeholder:"Search..."}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"px-2 pt-2 pb-3 space-y-1 sm:px-3"},[r("a",{staticClass:"text-gray-800 dark:text-white block px-3 py-2 rounded-md text-base font-medium",attrs:{href:"/#"}},[t._v("\n            Home\n          ")]),t._v(" "),r("a",{staticClass:"text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium",attrs:{href:"/#"}},[t._v("\n            Laravel\n          ")]),t._v(" "),r("a",{staticClass:"text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium",attrs:{href:"/#"}},[t._v("\n            Vue\n          ")]),t._v(" "),r("a",{staticClass:"text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium",attrs:{href:"/#"}},[t._v("\n            Components & Projects\n          ")]),t._v(" "),r("a",{staticClass:"text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium",attrs:{href:"/#"}},[t._v("\n            Contact\n          ")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"p-2 flex"},[r("form",{staticClass:"flex w-full max-w-sm space-x-3"},[r("div",{staticClass:" relative "},[r("input",{staticClass:" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent",attrs:{type:"text",id:"search",placeholder:"Search..."}})]),t._v(" "),r("button",{staticClass:"flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200",attrs:{type:"submit"}},[t._v("\n              Search\n            ")])])])}],!1,null,null,null);e.a=component.exports;installComponents(component,{Input:r(44).default,MenuItem:r(86).default,Menu:r(87).default,Footer:r(88).default})},184:function(t,e,r){r(185),t.exports=r(186)},202:function(t,e,r){"use strict";r.r(e),e.default=function(t){var e=t.$auth,r=t.redirect;if(!e.user.email_verified_at)return r({name:"notVerified"})}},220:function(t,e,r){t.exports=r.p+"img/8.2c75053.svg"},225:function(t,e,r){var content=r(226);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(55).default)("7b44be22",content,!0,{sourceMap:!1})},226:function(t,e,r){var n=r(54),l=r(227),o=r(228),c=n((function(i){return i[1]})),d=l(o);c.push([t.i,'@font-face{\n  font-style:normal;\n\n  font-display:swap;\n\n  unicode-range:U+000-5ff;\n\n  font-family:"Kanit";\n\n  src:local("Kanit"),url('+d+') format("ttf")\n}\n\nbody{\n  background-color:rgb(243 244 246)\n}',""]),t.exports=c},228:function(t,e,r){t.exports=r.p+"fonts/Kanit-Regular.6e70a0f.ttf"},229:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJoLTUgdy01IiB2aWV3Qm94PSIwIDAgMjAgMjAiIGZpbGw9ImN1cnJlbnRDb2xvciI+CiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNS4yOTMgNy4yOTNhMSAxIDAgMDExLjQxNCAwTDEwIDEwLjU4NmwzLjI5My0zLjI5M2ExIDEgMCAxMTEuNDE0IDEuNDE0bC00IDRhMSAxIDAgMDEtMS40MTQgMGwtNC00YTEgMSAwIDAxMC0xLjQxNHoiIGNsaXAtcnVsZT0iZXZlbm9kZCIgLz4KPC9zdmc+Cg=="},230:function(t,e){},231:function(t,e,r){"use strict";r(163)},232:function(t,e,r){var n=r(54)((function(i){return i[1]}));n.push([t.i,".card-hover{\n  transition-duration:1s\n}\n.card-hover:hover{\n  transform:perspective(60em) rotateX(18deg)\n}",""]),t.exports=n},233:function(t,e,r){"use strict";r(164)},234:function(t,e,r){var n=r(54)((function(i){return i[1]}));n.push([t.i,".NuxtLogo{\n  -webkit-animation:appear 1s;\n          animation:appear 1s;\n  margin:auto\n}\n@-webkit-keyframes appear{\n0%{\n    opacity:0\n}\n}\n@keyframes appear{\n0%{\n    opacity:0\n}\n}",""]),t.exports=n},39:function(t,e,r){"use strict";var n={props:["error"],layout:"error"},l=r(6),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[404===t.error.statusCode?n("div",{staticClass:"bg-indigo-900 relative overflow-hidden h-screen"},[n("img",{staticClass:"absolute h-full w-full object-cover",attrs:{src:r(220)}}),t._v(" "),n("div",{staticClass:"inset-0 bg-black opacity-25 absolute"}),t._v(" "),t._m(0)]):t._e()])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40"},[r("div",{staticClass:"w-full font-mono flex flex-col items-center relative z-10"},[r("h1",{staticClass:"font-extrabold text-5xl text-center text-white leading-tight mt-4"},[t._v("\n          Whoops! You're alone here\n        ")]),t._v(" "),r("p",{staticClass:"font-extrabold text-8xl my-44 text-white animate-bounce"},[t._v("\n          404\n        ")])])])}],!1,null,null,null);e.a=component.exports},44:function(t,e,r){"use strict";r.r(e);var n=r(0).a.extend({props:{error:{type:String,required:!1},iconLeft:{type:String,required:!1},value:{type:String,required:!1},id:{type:String,required:!1},name:{type:String,required:!1},placeholder:{type:String,required:!1},type:{type:String,required:!0},formStyle:{type:String,required:!0}},methods:{updateField:function(){this.$emit("input",this.$refs.field.value)}},computed:{getClass:function(){return this.error?"ring-red-500 ring-2 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent":(console.log("pass error"),"default"!==this.formStyle&&this.formStyle?"transparent"===this.formStyle?"rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent":void 0:"rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent")}}}),l=r(6),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.iconLeft?r("div",{staticClass:"flex flex-col mb-2"},[r("div",{staticClass:"flex relative mb-5 "},[t.iconLeft?r("span",{staticClass:"rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm"},[r("img",{attrs:{width:"20",src:t.iconLeft,alt:"Icon"}})]):t._e(),t._v(" "),r("input",{ref:"field",class:t.getClass,attrs:{type:t.type?t.type:"text",id:t.id?t.id:"",placeholder:t.placeholder},domProps:{value:t.value},on:{input:t.updateField}}),t._v(" "),t.error?r("svg",{staticClass:"absolute text-red-500 right-2 bottom-3",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"15",height:"15",fill:"currentColor",viewBox:"0 0 1792 1792"}},[r("path",{attrs:{d:"M1024 1375v-190q0-14-9.5-23.5t-22.5-9.5h-192q-13 0-22.5 9.5t-9.5 23.5v190q0 14 9.5 23.5t22.5 9.5h192q13 0 22.5-9.5t9.5-23.5zm-2-374l18-459q0-12-10-19-13-11-24-11h-220q-11 0-24 11-10 7-10 21l17 457q0 10 10 16.5t24 6.5h185q14 0 23.5-6.5t10.5-16.5zm-14-934l768 1408q35 63-2 126-17 29-46.5 46t-63.5 17h-1536q-34 0-63.5-17t-46.5-46q-37-63-2-126l768-1408q17-31 47-49t65-18 65 18 47 49z"}})]):t._e(),t._v(" "),t.error?r("p",{staticClass:"absolute text-sm text-red-500 -bottom-6"},[t._v("\n        "+t._s(t.error)+"\n      ")]):t._e()])]):t._e(),t._v(" "),t.iconLeft?t._e():r("div",[r("input",{ref:"field",class:t.getClass,attrs:{type:t.type?t.type:"text",id:t.id?t.id:"",placeholder:t.placeholder},domProps:{value:t.value?t.value:""},on:{input:t.updateField}}),t._v(" "),t.error?r("svg",{staticClass:"absolute text-red-500 right-2 bottom-3",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"15",height:"15",fill:"currentColor",viewBox:"0 0 1792 1792"}},[r("path",{attrs:{d:"M1024 1375v-190q0-14-9.5-23.5t-22.5-9.5h-192q-13 0-22.5 9.5t-9.5 23.5v190q0 14 9.5 23.5t22.5 9.5h192q13 0 22.5-9.5t9.5-23.5zm-2-374l18-459q0-12-10-19-13-11-24-11h-220q-11 0-24 11-10 7-10 21l17 457q0 10 10 16.5t24 6.5h185q14 0 23.5-6.5t10.5-16.5zm-14-934l768 1408q35 63-2 126-17 29-46.5 46t-63.5 17h-1536q-34 0-63.5-17t-46.5-46q-37-63-2-126l768-1408q17-31 47-49t65-18 65 18 47 49z"}})]):t._e(),t._v(" "),t.error?r("p",{staticClass:"absolute text-sm text-red-500 -bottom-6"},[t._v("\n      "+t._s(t.error)+"\n    ")]):t._e()])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Input:r(44).default})},86:function(t,e,r){"use strict";r.r(e);var n=r(0).a.extend({props:{title:{required:!0,type:String}}}),l=r(6),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a",{staticClass:"block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600",attrs:{href:"#",role:"menuitem"}},[r("span",{staticClass:"flex flex-col"},[r("span",[t._v("\n                      "+t._s(t.title)+"\n                  ")])])])}),[],!1,null,null,null);e.default=component.exports},87:function(t,e,r){"use strict";r.r(e);var n=r(0).a.extend({props:{menu:{required:!0,type:Object}},data:function(){return{show:!1}}}),l=r(6),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"relative inline-block text-left"},[n("div",[n("button",{staticClass:" border border-gray-300 bg-white dark:bg-gray-800 shadow-sm flex items-center justify-center w-full rounded-md  px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-50 hover:bg-gray-50 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500",attrs:{type:"button",id:"options-menu"},on:{click:function(e){t.show=!t.show}}},[t._v("\n      "+t._s(t.menu.title)+"\n      "),n("img",{attrs:{src:r(229),width:"20"}})])]),t._v(" "),t.show?n("div",{staticClass:"origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5"},[n("div",{staticClass:"py-1 ",attrs:{role:"menu","aria-orientation":"vertical","aria-labelledby":"options-menu"}},[t._t("default")],2)]):t._e()])}),[],!1,null,null,null);e.default=component.exports},88:function(t,e,r){"use strict";r.r(e);var n=r(6),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",{staticClass:"z-20 footer bg-white dark:bg-gray-800 pt-4 pb-8 xl:pt-8"},[r("div",{staticClass:"max-w-screen-lg xl:max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 text-gray-400 dark:text-gray-300"},[t._m(0),t._v(" "),r("div",{staticClass:"pt-8 flex border-t border-gray-200 max-w-xs mx-auto items-center justify-between"},[r("a",{attrs:{href:"#"}},[r("svg",{staticClass:"text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200",attrs:{width:"20",height:"20",fill:"currentColor",viewBox:"0 0 1792 1792",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z"}})])]),t._v(" "),r("a",{attrs:{href:"#"}},[r("svg",{staticClass:"text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200",attrs:{width:"20",height:"20",fill:"currentColor",viewBox:"0 0 1792 1792",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z"}})])]),t._v(" "),r("a",{attrs:{href:"#"}},[r("svg",{staticClass:"text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",viewBox:"0 0 1792 1792"}},[r("path",{attrs:{d:"M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z"}})])]),t._v(" "),r("a",{attrs:{href:"#"}},[r("svg",{staticClass:"text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200",attrs:{width:"20",height:"20",fill:"currentColor",viewBox:"0 0 1792 1792",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z"}})])]),t._v(" "),r("a",{attrs:{href:"#"}},[r("svg",{staticClass:"text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200",attrs:{width:"20",height:"20",fill:"currentColor",viewBox:"0 0 1792 1792",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M1551 1476q15-6 26-3t11 17.5-15 33.5q-13 16-44 43.5t-95.5 68-141 74-188 58-229.5 24.5q-119 0-238-31t-209-76.5-172.5-104-132.5-105-84-87.5q-8-9-10-16.5t1-12 8-7 11.5-2 11.5 4.5q192 117 300 166 389 176 799 90 190-40 391-135zm207-115q11 16 2.5 69.5t-28.5 102.5q-34 83-85 124-17 14-26 9t0-24q21-45 44.5-121.5t6.5-98.5q-5-7-15.5-11.5t-27-6-29.5-2.5-35 0-31.5 2-31 3-22.5 2q-6 1-13 1.5t-11 1-8.5 1-7 .5h-10l-3-.5-2-1.5-1.5-3q-6-16 47-40t103-30q46-7 108-1t76 24zm-394-443q0 31 13.5 64t32 58 37.5 46 33 32l13 11-227 224q-40-37-79-75.5t-58-58.5l-19-20q-11-11-25-33-38 59-97.5 102.5t-127.5 63.5-140 23-137.5-21-117.5-65.5-83-113-31-162.5q0-84 28-154t72-116.5 106.5-83 122.5-57 130-34.5 119.5-18.5 99.5-6.5v-127q0-65-21-97-34-53-121-53-6 0-16.5 1t-40.5 12-56 29.5-56 59.5-48 96l-294-27q0-60 22-119t67-113 108-95 151.5-65.5 190.5-24.5q100 0 181 25t129.5 61.5 81 83 45 86 12.5 73.5v589zm-672 21q0 86 70 133 66 44 139 22 84-25 114-123 14-45 14-101v-162q-59 2-111 12t-106.5 33.5-87 71-32.5 114.5z"}})])])]),t._v(" "),t._m(1),t._v(" "),r("div",{staticClass:"text-center pt-10 sm:pt-12 font-light flex items-center justify-center"},[t._v("\n      Created by Matilde\n    ")])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{staticClass:"text-lg font-light pb-8 flex flex-wrap justify-center"},[r("li",{staticClass:"w-1/2 md:w-1/3 lg:w-1/3"},[r("div",{staticClass:"text-center"},[r("h2",{staticClass:"text-gray-500 dark:text-gray-200 text-md uppercase mb-4"},[t._v("\n            Laravel\n          ")]),t._v(" "),r("ul",[r("li",{staticClass:"mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200"},[r("a",{attrs:{href:"#"}},[t._v("\n                Tutorial\n              ")])]),t._v(" "),r("li",{staticClass:"mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200"},[r("a",{attrs:{href:"#"}},[t._v("\n                Components\n              ")])]),t._v(" "),r("li",{staticClass:"mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200"},[r("a",{attrs:{href:"#"}},[t._v("\n                Projects\n              ")])]),t._v(" "),r("li",{staticClass:"mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200"},[r("a",{attrs:{href:"#"}},[t._v("\n                News\n              ")])])])])]),t._v(" "),r("li",{staticClass:"w-1/2 md:w-1/3 lg:w-1/3"},[r("div",{staticClass:"text-center"},[r("h2",{staticClass:"text-gray-500 dark:text-gray-200 text-md uppercase mb-4"},[t._v("\n            VueJS\n          ")]),t._v(" "),r("ul",[r("li",{staticClass:"mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200"},[r("a",{attrs:{href:"#"}},[t._v("\n                Tutorial\n              ")])]),t._v(" "),r("li",{staticClass:"mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200"},[r("a",{attrs:{href:"#"}},[t._v("\n                Components\n              ")])]),t._v(" "),r("li",{staticClass:"mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200"},[r("a",{attrs:{href:"#"}},[t._v("\n                Projects\n              ")])]),t._v(" "),r("li",{staticClass:"mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200"},[r("a",{attrs:{href:"#"}},[t._v("\n                News\n              ")])])])])]),t._v(" "),r("li",{staticClass:"w-1/2 md:w-1/3 lg:w-1/3"},[r("div",{staticClass:"text-center"},[r("h2",{staticClass:"text-gray-500 dark:text-gray-200 text-md uppercase mb-4"},[t._v("\n            Other\n          ")]),t._v(" "),r("ul",[r("li",{staticClass:"mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200"},[r("a",{attrs:{href:"#"}},[t._v("\n                Contact\n              ")])]),t._v(" "),r("li",{staticClass:"mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200"},[r("a",{attrs:{href:"#"}},[t._v("\n                About me\n              ")])]),t._v(" "),r("li",{staticClass:"mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200"},[r("a",{attrs:{href:"#"}},[t._v("\n                Projects\n              ")])])])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"text-center pt-10 sm:pt-12 font-light flex items-center justify-center"},[r("form",{staticClass:"flex w-full max-w-sm space-x-3"},[r("div",{staticClass:" relative "},[r("input",{staticClass:" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent",attrs:{type:"text",id:'"form-subscribe-Subscribe',placeholder:"Email"}})]),t._v(" "),r("button",{staticClass:"flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200",attrs:{type:"submit"}},[t._v("\n          Subscribe\n        ")])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Input:r(44).default,Footer:r(88).default})}},[[184,10,1,11]]]);