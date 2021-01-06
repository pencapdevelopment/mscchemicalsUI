(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{1365:function(e,t,a){"use strict";a.r(t);var n=a(39),r=a(40),s=a(624),o=a(664),i=a(18),l=a(0),c=a.n(l),m=a(1354),d=a(911),p=a(625),u=a(663),f=a(34),g=a(67);function h(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var a,n=Object(i.a)(e);if(t){var r=Object(i.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(o.a)(this,a)}}var b=function(e){Object(s.a)(a,e);var t=h(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={loading:!1,email:"",otp:"",otpSent:!1,password:"",cnfPassword:""},e.mobileChange=function(t){e.setState({email:t.target.value})},e.otpChange=function(t){e.setState({otp:t.target.value})},e.passwordChange=function(t){e.setState({password:t.target.value})},e.cnfPasswordChange=function(t){e.setState({cnfPassword:t.target.value})},e.onSubmit=function(t){t.preventDefault(),e.state.otpSent?e.state.password===e.state.cnfPassword?fetch(g.j+g.d+"save-new-password?email="+e.state.email+"&emailToken="+e.state.otp+"&chgPassword="+e.state.password+"&cnfPassword="+e.state.cnfPassword,{method:"POST"}).then(function(e){return e.json()}).then(function(t){console.log(t),e.setState({loginError:t.message})}).catch(function(t){e.setState({loginError:"Error while processing"})}):e.setState({loginError:"Entered password & confirm passwords are not same."}):fetch(g.j+g.d+"forgot-password?userName="+e.state.email,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e.state.email})}).then(function(e){return e.json()}).then(function(t){201===t.status?(e.setState({otpSent:!0}),e.setState({loginError:t.message})):e.setState({loginError:t.message})}).catch(function(t){e.setState({loginError:"Error while processing"})})},e}return Object(r.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"block-center mt-4 wd-xl"},c.a.createElement("style",null,".card img {height: 34px}"),c.a.createElement("div",{className:"card card-flat"},c.a.createElement("div",{className:"card-header text-center bg-default"},c.a.createElement("a",{href:"#s"},c.a.createElement("img",{className:"block-center rounded",src:"img/logo.png",alt:"Logo"}))),c.a.createElement("div",{className:"card-body"},c.a.createElement("p",{className:"text-center py-2"},"PASSWORD RESET"),c.a.createElement("form",{onSubmit:this.onSubmit},c.a.createElement("p",{className:"text-center d-none"},"Fill with your mail to receive instructions on how to reset your password."),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"text-muted"},"Email"),c.a.createElement("div",{className:"input-group with-focus"},c.a.createElement(d.a,{type:"text",name:"email",className:"border-right-0",placeholder:"Enter email",disabled:this.state.otpSent,onChange:this.mobileChange,"data-validate":'["required", "email"]',value:this.state.email,minLength:"5",maxLength:"100"}),c.a.createElement("div",{className:"input-group-append"},c.a.createElement("span",{className:"input-group-text text-muted bg-transparent border-left-0"},c.a.createElement("em",{className:"fa fa-mobile"}))))),this.state.otpSent&&c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"text-muted"},"OTP"),c.a.createElement("div",{className:"input-group with-focus"},c.a.createElement(d.a,{type:"text",name:"otp",className:"border-right-0",placeholder:"Enter OTP",onChange:this.otpChange,"data-validate":'["required", "number"]',value:this.state.otp,minLength:"4",maxLength:"4",pattern:"\\d*",required:!0}),c.a.createElement("div",{className:"input-group-append"},c.a.createElement("span",{className:"input-group-text text-muted bg-transparent border-left-0"},c.a.createElement("em",{className:"fa fa-key"}))))),this.state.otpSent&&c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"text-muted"},"New Password"),c.a.createElement("div",{className:"input-group with-focus"},c.a.createElement(d.a,{type:"password",id:"id-password",name:"password",className:"border-right-0",placeholder:"New Password",onChange:this.passwordChange,"data-validate":'["required"]',value:this.state.password,minLength:"5",maxLength:"50",required:!0}),c.a.createElement("div",{className:"input-group-append"},c.a.createElement("span",{className:"input-group-text text-muted bg-transparent border-left-0"},c.a.createElement("em",{className:"fa fa-lock"}))),c.a.createElement("span",{className:"invalid-feedback"},"Field is required"))),this.state.otpSent&&c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"text-muted"},"Confirm Password"),c.a.createElement("div",{className:"input-group with-focus"},c.a.createElement(d.a,{type:"password",id:"id-password1",name:"password1",className:"border-right-0",placeholder:"Confirm Password",onChange:this.cnfPasswordChange,"data-validate":'["required"]',value:this.state.cnfPassword,minLength:"5",maxLength:"50",required:!0}),c.a.createElement("div",{className:"input-group-append"},c.a.createElement("span",{className:"input-group-text text-muted bg-transparent border-left-0"},c.a.createElement("em",{className:"fa fa-lock"}))),c.a.createElement("span",{className:"invalid-feedback"},"Field is required"))),c.a.createElement("p",null,this.state.loginError),c.a.createElement("button",{className:"btn btn-primary btn-block",type:"submit"},this.state.otpSent?"Update Password":"Send OTP"))),c.a.createElement("div",{className:"card-footer text-center"},c.a.createElement(m.a,{to:"login",className:"text-muted"},"Back to Login"))),c.a.createElement("div",{className:"p-3 text-center"},c.a.createElement("span",{className:"mr-2"},"\xa9"),c.a.createElement("span",null,"2019"),c.a.createElement("span",{className:"mx-2"},"-"),c.a.createElement("span",null,"SMS Panel")))}}]),a}(l.Component);t.default=Object(p.b)(function(e){return{loginStatus:e.login}},function(e){return{actions:Object(f.b)(u,e)}})(b)},911:function(e,t,a){"use strict";var n=a(6),r=a(10),s=a(17),o=a(19),i=a(0),l=a.n(i),c=a(1),m=a.n(c),d=a(13),p=a.n(d),u=a(3),f={children:m.a.node,type:m.a.string,size:m.a.oneOfType([m.a.number,m.a.string]),bsSize:m.a.string,valid:m.a.bool,invalid:m.a.bool,tag:u.o,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),plaintext:m.a.bool,addon:m.a.bool,className:m.a.string,cssModule:m.a.object},g=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(s.a)(a)),a.focus=a.focus.bind(Object(s.a)(a)),a}Object(o.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,s=e.type,o=e.bsSize,i=e.valid,c=e.invalid,m=e.tag,d=e.addon,f=e.plaintext,g=e.innerRef,h=Object(r.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),b=["radio","checkbox"].indexOf(s)>-1,E=new RegExp("\\D","g"),v=m||("select"===s||"textarea"===s?s:"input"),w="form-control";f?(w+="-plaintext",v=m||"input"):"file"===s?w+="-file":"range"===s?w+="-range":b&&(w=d?null:"form-check-input"),h.size&&E.test(h.size)&&(Object(u.q)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),o=h.size,delete h.size);var N=Object(u.k)(p()(t,c&&"is-invalid",i&&"is-valid",!!o&&"form-control-"+o,w),a);return("input"===v||m&&"function"===typeof m)&&(h.type=s),h.children&&!f&&"select"!==s&&"string"===typeof v&&"select"!==v&&(Object(u.q)('Input with a type of "'+s+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete h.children),l.a.createElement(v,Object(n.a)({},h,{ref:g,className:N,"aria-invalid":c}))},t}(l.a.Component);g.propTypes=f,g.defaultProps={type:"text"},t.a=g}}]);
//# sourceMappingURL=10.92673017.chunk.js.map