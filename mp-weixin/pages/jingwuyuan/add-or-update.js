(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/jingwuyuan/add-or-update"],{"319b":function(t,n,e){"use strict";var i,r=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return i}))},"64c4":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=r(e("a34a"));function r(t){return t&&t.__esModule?t:{default:t}}function a(t,n,e,i,r,a,u){try{var o=t[a](u),s=o.value}catch(c){return void e(c)}o.done?n(s):Promise.resolve(s).then(i,r)}function u(t){return function(){var n=this,e=arguments;return new Promise((function(i,r){var u=t.apply(n,e);function o(t){a(u,i,r,o,s,"next",t)}function s(t){a(u,i,r,o,s,"throw",t)}o(void 0)}))}}var o=function(){Promise.all([e.e("common/vendor"),e.e("components/w-picker/w-picker")]).then(function(){return resolve(e("ffd4"))}.bind(null,e)).catch(e.oe)},s={data:function(){return{ruleForm:{jingwuhao:"",mima:"",xingming:"",touxiang:"",xingbie:"",lianxifangshi:""},xingbieOptions:[],xingbieIndex:0,user:{},ro:{jingwuhao:!1,mima:!1,xingming:!1,touxiang:!1,xingbie:!1,lianxifangshi:!1}}},components:{wPicker:o},computed:{},onLoad:function(){var n=u(i.default.mark((function n(e){var r,a,u,o;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=t.getStorageSync("nowTable"),n.next=3,this.$api.session(r);case 3:if(a=n.sent,this.user=a.data,this.xingbieOptions="男,女".split(","),this.ruleForm.userid=t.getStorageSync("userid"),e.refid&&(this.ruleForm.refid=e.refid,this.ruleForm.nickname=t.getStorageSync("nickname")),!e.id){n.next=14;break}return this.ruleForm.id=e.id,n.next=12,this.$api.info("jingwuyuan",this.ruleForm.id);case 12:a=n.sent,this.ruleForm=a.data;case 14:if(!e.cross){n.next=45;break}u=t.getStorageSync("crossObj"),n.t0=i.default.keys(u);case 17:if((n.t1=n.t0()).done){n.next=45;break}if(o=n.t1.value,"jingwuhao"!=o){n.next=23;break}return this.ruleForm.jingwuhao=u[o],this.ro.jingwuhao=!0,n.abrupt("continue",17);case 23:if("mima"!=o){n.next=27;break}return this.ruleForm.mima=u[o],this.ro.mima=!0,n.abrupt("continue",17);case 27:if("xingming"!=o){n.next=31;break}return this.ruleForm.xingming=u[o],this.ro.xingming=!0,n.abrupt("continue",17);case 31:if("touxiang"!=o){n.next=35;break}return this.ruleForm.touxiang=u[o],this.ro.touxiang=!0,n.abrupt("continue",17);case 35:if("xingbie"!=o){n.next=39;break}return this.ruleForm.xingbie=u[o],this.ro.xingbie=!0,n.abrupt("continue",17);case 39:if("lianxifangshi"!=o){n.next=43;break}return this.ruleForm.lianxifangshi=u[o],this.ro.lianxifangshi=!0,n.abrupt("continue",17);case 43:n.next=17;break;case 45:this.styleChange();case 46:case"end":return n.stop()}}),n,this)})));function e(t){return n.apply(this,arguments)}return e}(),methods:{styleChange:function(){this.$nextTick((function(){}))},xingbieChange:function(t){this.xingbieIndex=t.target.value,this.ruleForm.xingbie=this.xingbieOptions[this.xingbieIndex]},touxiangTap:function(){var t=this;this.$api.upload((function(n){t.ruleForm.touxiang=t.$base.url+"upload/"+n.file,t.$forceUpdate(),t.$nextTick((function(){t.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var t=u(i.default.mark((function t(){return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.ruleForm.jingwuhao){t.next=3;break}return this.$utils.msg("警务号不能为空"),t.abrupt("return");case 3:if(this.ruleForm.mima){t.next=6;break}return this.$utils.msg("密码不能为空"),t.abrupt("return");case 6:if(this.ruleForm.xingming){t.next=9;break}return this.$utils.msg("姓名不能为空"),t.abrupt("return");case 9:if(!this.ruleForm.id){t.next=14;break}return t.next=12,this.$api.update("jingwuyuan",this.ruleForm);case 12:t.next=16;break;case 14:return t.next=16,this.$api.add("jingwuyuan",this.ruleForm);case 16:this.$utils.msgBack("提交成功");case 17:case"end":return t.stop()}}),t,this)})));function n(){return t.apply(this,arguments)}return n}(),optionsChange:function(t){this.index=t.target.value},bindDateChange:function(t){this.date=t.target.value},getDate:function(t){var n=new Date,e=n.getFullYear(),i=n.getMonth()+1,r=n.getDate();return"start"===t?e-=60:"end"===t&&(e+=2),i=i>9?i:"0"+i,r=r>9?r:"0"+r,"".concat(e,"-").concat(i,"-").concat(r)},toggleTab:function(t){this.$refs[t].show()}}};n.default=s}).call(this,e("543d")["default"])},"87da":function(t,n,e){"use strict";e.r(n);var i=e("64c4"),r=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(n,t,(function(){return i[t]}))}(a);n["default"]=r.a},"926c":function(t,n,e){"use strict";var i=e("f3b0"),r=e.n(i);r.a},cd2d:function(t,n,e){"use strict";(function(t){e("838f"),e("921b");i(e("66fd"));var n=i(e("e520"));function i(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},e520:function(t,n,e){"use strict";e.r(n);var i=e("319b"),r=e("87da");for(var a in r)"default"!==a&&function(t){e.d(n,t,(function(){return r[t]}))}(a);e("926c");var u,o=e("f0c5"),s=Object(o["a"])(r["default"],i["b"],i["c"],!1,null,"5038fa99",null,!1,i["a"],u);n["default"]=s.exports},f3b0:function(t,n,e){}},[["cd2d","common/runtime","common/vendor"]]]);