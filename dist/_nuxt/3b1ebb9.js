(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{264:function(e,t,r){"use strict";r.r(t);var o=r(3),n=(r(28),r(91),r(68),r(0).a.extend({data:function(){return{form:{email:this.$route.query.email||"",password:"",password_confirmation:"",token:this.$route.query.token||""},errors:[],message:""}},methods:{forgotPassword:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.get("sanctum/csrf-cookie");case 2:return t.next=4,e.$axios.post("reset-password",e.form);case 4:e.$router.replace({name:"login"});case 5:case"end":return t.stop()}}),t)})))()}}})),l=r(6),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container mx-auto mt-5"},[r("div",{staticClass:"mx-auto mb-5 flex flex-col w-full max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10"},[r("div",{staticClass:"self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl dark:text-white"},[e._v("\n      Forgot your password?\n    ")]),e._v(" "),r("div",{staticClass:"mt-8"},[r("form",{attrs:{action:"#",autoComplete:"off"},on:{submit:function(t){return t.preventDefault(),e.forgotPassword(t)}}},[e.message?r("div",{staticClass:"bg-yellow-200 border-yellow-600 text-yellow-600 border-l-4 p-4 mb-5",attrs:{role:"alert"}},[r("p",{staticClass:"font-bold"},[e._v("\n            Whoops, looks like something went wrong!\n          ")]),e._v(" "),r("p",[e._v("\n            "+e._s(this.message)+"\n          ")])]):e._e(),e._v(" "),r("Input",{attrs:{type:"email",placeholder:"sofia@example.com",iconLeft:"/sprite/emailIcon.svg",width:"30",error:e.errors.email&&e.errors.email[0]?e.errors.email[0]:""},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}}),e._v(" "),r("Input",{attrs:{type:"password",placeholder:"Please enter a new password",iconLeft:"/sprite/passwordIcon.svg",width:"30",error:e.errors.email&&e.errors.email[0]?e.errors.email[0]:""},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}}),e._v(" "),r("Input",{attrs:{type:"password",placeholder:"Please confirm the password",iconLeft:"/sprite/passwordIcon.svg",width:"30",error:e.errors.email&&e.errors.email[0]?e.errors.email[0]:""},model:{value:e.form.password_confirmation,callback:function(t){e.$set(e.form,"password_confirmation",t)},expression:"form.password_confirmation"}}),e._v(" "),e._m(0),e._v(" "),r("div",{staticClass:"flex w-full"},[r("button",{staticClass:"py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ",attrs:{type:"submit"},on:{submit:function(t){return t.preventDefault(),e.forgotPassword(t)}}},[e._v("\n            Set password\n          ")])])],1)]),e._v(" "),e._m(1)])])}),[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"flex items-center mb-6 -mt-4"},[r("div",{staticClass:"flex ml-auto"},[r("a",{staticClass:"inline-flex text-xs font-thin text-gray-500 sm:text-sm dark:text-gray-100 hover:text-gray-700 dark:hover:text-white",attrs:{href:"#"}},[e._v("\n              Forgot Your Password?\n            ")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"flex items-center justify-center mt-6"},[r("a",{staticClass:"inline-flex items-center text-xs font-thin text-center text-gray-500 hover:text-gray-700 dark:text-gray-100 dark:hover:text-white",attrs:{href:"#",target:"_blank"}},[r("span",{staticClass:"ml-2"},[e._v("\n                      You don't have an account?\n                  ")])])])}],!1,null,null,null);t.default=component.exports;installComponents(component,{Input:r(44).default})}}]);