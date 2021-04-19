(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{256:function(t,e,n){var content=n(258);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(55).default)("58472cb2",content,!0,{sourceMap:!1})},257:function(t,e,n){"use strict";n(256)},258:function(t,e,n){var r=n(54)((function(i){return i[1]}));r.push([t.i,":root{\n  --avatar-size:6rem\n}\n.circle{\n  background-color:#ccc;\n  border-radius:50%;\n  height:6rem;\n  height:var(--avatar-size);\n  text-align:center;\n  width:6rem;\n  width:var(--avatar-size)\n}\n.initials{\n  font-size:calc(6rem/2);\n  font-size:calc(var(--avatar-size)/2);\n  line-height:1;\n  position:relative;\n  top:1.25rem\n}\n#pen-position{\n  margin-top:-42px;\n  margin-left:56px!important\n}",""]),t.exports=r},265:function(t,e,n){"use strict";n.r(e);var r=n(3),o=(n(28),n(15),n(0).a.extend({data:function(){return{form:{name:this.$auth.user.name,email:this.$auth.user.email,password:"",profile_photo_path:this.$auth.user.profile_photo_path},errors:[],message:"",shouldDeleteAccount:!1}},methods:{updateProfileSettings:function(){this.$axios.get("sanctum/csrf-cookie"),this.$axios.put("user/profile-information",this.form),this.$auth.fetchUser()},deleteAccount:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.delete("api/user");case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),423===e.t0.response.status&&(t.shouldDeleteAccount=!0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))()}}})),l=(n(257),n(6)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"bg-gray-100 bg-opacity-50 mt-5 mb-5"},[n("div",{staticClass:"container max-w-2xl mx-auto shadow-md md:w-3/4 z-10"},[n("div",{staticClass:"p-4 bg-gray-100 border-t-2 border-indigo-400 rounded-lg bg-opacity-5"},[n("div",{staticClass:"max-w-sm mx-auto md:w-full md:mx-0"},[n("div",{staticClass:"inline-flex items-center space-x-4"},[n("a",{staticClass:"circle border-4 border-white shadow",attrs:{href:"#"}},[n("span",{staticClass:"initials"},[t._v(t._s(t.$auth.user.name.split(" ").map((function(t,i,a){return 0===i||i+1===a.length?t[0]:null})).join("")))])]),t._v(" "),n("svg",{staticClass:"bg-white hover:cursor-text shadow p-2 rounded-full w-8 text-indigo-500 absolute",attrs:{id:"pen-position",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[n("path",{attrs:{d:"M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"}})]),t._v(" "),n("h1",{staticClass:"text-gray-600"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"bg-gray-100 rounded-lg border-transparent flex-1 appearance-none w-full py-2 px-4 text-gray-700 placeholder-gray-400 text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent",attrs:{type:"text",id:"company-name",placeholder:"Company Name"},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}})])])])]),t._v(" "),n("div",{staticClass:"space-y-6 bg-white"},[n("div",{staticClass:"items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0"},[n("h2",{staticClass:"max-w-sm mx-auto md:w-1/3"},[t._v("\n          Account\n        ")]),t._v(" "),n("div",{staticClass:"max-w-sm mx-auto md:w-2/3"},[n("div",{staticClass:" relative "},[n("Input",{attrs:{formStyle:"transparent",error:t.errors.email&&t.errors.email[0]?t.errors.email[0]:"",type:"email",placeholder:"email"},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1)])]),t._v(" "),n("hr"),t._v(" "),t._m(0),t._v(" "),n("hr"),t._v(" "),n("div",{staticClass:"items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0"},[n("h2",{staticClass:"max-w-sm mx-auto md:w-1/3"},[t._v("\n          Other\n        ")]),t._v(" "),n("div",{staticClass:"max-w-sm mx-auto space-y-5 md:w-2/3"},[n("div",[n("div",{staticClass:" relative flex"},[n("button",{staticClass:"py-2 mr-5 px-4 flex justify-center items-center  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ",attrs:{type:"button"},on:{click:t.deleteAccount}},[t._v("\n                Delete\n              ")]),t._v(" "),n("button",{staticClass:"py-2 px-4 flex justify-center items-center  bg-gray-600 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ",attrs:{type:"button"}},[t._v("\n                Disable Account\n              ")])])])])]),t._v(" "),n("hr"),t._v(" "),n("div",{staticClass:"w-full px-4 pb-4 ml-auto text-gray-500 md:w-1/3"},[n("button",{staticClass:"py-2 px-4  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ",attrs:{type:"submit"},on:{submit:function(e){return e.preventDefault(),t.updateProfileSettings(e)}}},[t._v("\n          Save\n        ")])])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0"},[n("h2",{staticClass:"max-w-sm mx-auto md:w-1/3"},[t._v("\n          Personal info\n        ")]),t._v(" "),n("div",{staticClass:"max-w-sm mx-auto space-y-5 md:w-2/3"},[n("div",[n("div",{staticClass:" relative "},[n("input",{staticClass:" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent",attrs:{type:"text",id:"user-info-phone",placeholder:"Phone number"}})])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Input:n(44).default,Input:n(44).default})}}]);