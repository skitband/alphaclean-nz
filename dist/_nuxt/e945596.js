(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{266:function(t,e,n){var content=n(294);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(62).default)("2d5b5f3a",content,!0,{sourceMap:!1})},293:function(t,e,n){"use strict";n(266)},294:function(t,e,n){var r=n(61)(!1);r.push([t.i,".text-heading[data-v-65e1f323]{font-size:2.5rem}.sub-heading[data-v-65e1f323]{font-size:1.3rem;font-weight:300}.pricing-card-title[data-v-65e1f323]{color:#17548d;font-size:3rem;padding-top:0;margin-top:0}ul li[data-v-65e1f323]{font-size:1rem;padding:5px;font-weight:400}.alert-heading[data-v-65e1f323]{font-size:1.5rem}.alert-heading-price[data-v-65e1f323]{font-size:2rem;color:#fff;text-align:right;font-weight:bolder}@media (max-width:576px){.alert-heading-price[data-v-65e1f323]{text-align:left!important;color:#fff}}@media (max-width:992px){.alert-heading-price[data-v-65e1f323]{font-size:2rem;color:#fff;text-align:right}}.alert-deepclean[data-v-65e1f323]{background-color:#3f4b5e;border-color:#3f4b5e;color:#fff}",""]),t.exports=r},302:function(t,e,n){"use strict";n.r(e);var r=n(6),o=(n(38),n(63),n(35),{name:"Booking",data:function(){return{emailsent:!1,price:89,services:[{name:"Window Cleaning"},{name:"Carpet Cleaning"},{name:"Rubbish Removal"},{name:"Vacuuming"},{name:"Dust Removal"},{name:"Buffing"},{name:"Odour Treatments"},{name:"Bathroom Cleaning"}],formData:{name:"",email:"",contact:"",message:"Message"}}},methods:{onSubmit:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,output;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$recaptcha.getResponse();case 3:if(n=e.sent,output="\n                    <p>Alpha Clean Inquiry</p>\n                    <h3>Contact Details</h3>\n                    <ul>  \n                        <li>Name: ".concat(t.formData.name,"</li>\n                        <li>Email: ").concat(t.formData.email,"</li>\n                        <li>Phone: ").concat(t.formData.contact,"</li>\n                    </ul>\n                    <h3>Message</h3>\n                    <p>").concat(t.formData.message,"</p>\n                "),!t.$mail.send({subject:"Alpha Clean Inquiry",from:t.formData.email,name:t.formData.name,html:output})){e.next=11;break}return console.log("Form Submitted Success",n),t.emailsent=!0,e.next=11,t.$recaptcha.reset();case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log("Login error:",e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))()}}}),l=(n(293),n(37)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"booking main-block",attrs:{id:"booking"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"row gx-5"},[n("div",{staticClass:"col-md-6 col-sm-12"},[n("h3",{staticClass:"text-heading"},[t._v("Don’t wait, Book a cleaning now.")]),t._v(" "),n("span",{staticClass:"sub-heading"},[t._v("Book expert cleaners and handymen at a moment's notice. Just pick a time and we’ll do the rest.")]),t._v(" "),n("div",{staticClass:"row mb-3 mt-5 justify-content-center"},[n("div",{staticClass:"col-md-6 col-sm-6 text-center"},[n("div",{staticClass:"card mb-4 rounded-3 shadow-sm"},[t._m(0),t._v(" "),n("div",{staticClass:"card-body"},[n("h1",{staticClass:"card-title pricing-card-title"},[t._v("$"+t._s(parseFloat(t.price).toFixed(2)))]),t._v(" "),n("ul",{staticClass:"list-unstyled mt-3 mb-4"},t._l(t.services,(function(e){return n("li",{key:e.name},[t._v(t._s(e.name))])})),0)])])]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"alert alert-primary d-flex align-items-center alert-deepclean",attrs:{role:"alert"}},[n("svg",{staticClass:"bi bi-exclamation-triangle-fill flex-shrink-0 me-2",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"50",height:"24",fill:"currentColor",viewBox:"0 0 16 16",role:"img","aria-label":"Warning:"}},[n("path",{attrs:{d:"M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"}})]),t._v(" "),t._m(1)])])])]),t._v(" "),n("div",{staticClass:"col-md-6 col-sm-12"},[n("form",{staticClass:"form-wrap mt-5",attrs:{method:"post"},on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[t.emailsent?n("div",{staticClass:"alert alert-success alert-dismissible fade show",attrs:{role:"alert"}},[n("h4",{staticClass:"alert-heading"},[t._v("Thank You!")]),t._v(" "),n("p",{staticClass:"text-secondary"},[t._v("Your message has been successfully sent. We will contact you very soon!")]),t._v(" "),n("a",{staticClass:"btn-close",attrs:{"data-bs-dismiss":"alert","aria-label":"Close"},on:{click:function(e){e.preventDefault(),t.emailsent=!1}}})]):t._e(),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.name,expression:"formData.name"}],staticClass:"btn-group1 mb-2 mt-2",attrs:{type:"text",placeholder:"Full Name",required:""},domProps:{value:t.formData.name},on:{input:function(e){e.target.composing||t.$set(t.formData,"name",e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.email,expression:"formData.email"}],staticClass:"btn-group1 mb-2 mt-2",attrs:{type:"email",placeholder:"Email Address",required:""},domProps:{value:t.formData.email},on:{input:function(e){e.target.composing||t.$set(t.formData,"email",e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.contact,expression:"formData.contact"}],staticClass:"btn-group1 mb-2 mt-2",attrs:{type:"number",placeholder:"Contact Number",required:""},domProps:{value:t.formData.contact},on:{input:function(e){e.target.composing||t.$set(t.formData,"contact",e.target.value)}}}),t._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.formData.message,expression:"formData.message"}],staticClass:"btn-group1 mb-2 mt-2",attrs:{rows:"5",required:""},domProps:{value:t.formData.message},on:{input:function(e){e.target.composing||t.$set(t.formData,"message",e.target.value)}}},[t._v("Message")]),t._v(" "),n("recaptcha"),t._v(" "),n("button",{staticClass:"btn-form mt-3 rounded text-uppercase",attrs:{type:"submit"}},[t._v("Submit ")])],1)])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card-header py-3"},[n("h4",{staticClass:"my-0 fw-normal"},[t._v("Daily Rate "),n("br"),t._v(" Package From")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-10 col-sm-12"},[n("h4",{staticClass:"alert-heading"},[t._v("ASK ABOUT OUR ONE OFF "),n("br"),t._v(" DEEP CLEAN STARTING FROM")])]),t._v(" "),n("div",{staticClass:"col-md-2 col-sm-12 justify-content-center align-self-center"},[n("span",{staticClass:"alert-heading-price"},[t._v("$150.00")])])])}],!1,null,"65e1f323",null);e.default=component.exports}}]);