(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my-info"],{"140f":function(e,t,r){"use strict";r.r(t);var n=r("9e95"),a=r("572f");for(var i in a)"default"!==i&&function(e){r.d(t,e,(function(){return a[e]}))}(i);var u,s=r("f0c5"),o=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"420cc2a1",null,!1,n["a"],u);t["default"]=o.exports},1511:function(e,t,r){var n=r("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.u-avatar[data-v-9895fe60]{display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:%?28?%;color:#606266;-webkit-border-radius:10px;border-radius:10px;overflow:hidden}.u-avatar-img[data-v-9895fe60]{width:100%;height:100%}',""]),e.exports=t},"27a7":function(e,t,r){"use strict";r.r(t);var n=r("4b67"),a=r.n(n);for(var i in n)"default"!==i&&function(e){r.d(t,e,(function(){return n[e]}))}(i);t["default"]=a.a},4812:function(e,t,r){"use strict";var n=r("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.User=void 0,r("96cf");var a=n(r("1da1")),i=n(r("d4ec")),u=n(r("bee2")),s=r("32fe"),o=r("0695"),c=function(){function e(){(0,i.default)(this,e)}return(0,u.default)(e,null,[{key:"login",value:function(){var e=(0,a.default)(regeneratorRuntime.mark((function e(t,r){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,s.Http.request({url:"/v1/user/login",data:{username:t,password:r},method:"POST"});case 2:if(n=e.sent,n.errorCode){e.next=10;break}return uni.setStorageSync("userInfo",n.data.userInfo),uni.setStorageSync("token",n.data.token),uni.showToast({title:"登录成功"}),e.abrupt("return",!0);case 10:uni.showToast({title:n.msg,icon:"none"});case 11:return e.abrupt("return",!1);case 12:case"end":return e.stop()}}),e)})));function t(t,r){return e.apply(this,arguments)}return t}()},{key:"regUser",value:function(){var e=(0,a.default)(regeneratorRuntime.mark((function e(t,r,n,a,i){var u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,s.Http.request({url:"/v1/user/regUser",data:{username:t,password:n,email:r,repassword:a,qq:i},method:"POST"});case 2:if(u=e.sent,200==u.code){e.next=7;break}uni.showToast({title:u.msg,icon:"none"}),e.next=9;break;case 7:return uni.showToast({title:"注册成功"}),e.abrupt("return",!0);case 9:return e.abrupt("return",!1);case 10:case"end":return e.stop()}}),e)})));function t(t,r,n,a,i){return e.apply(this,arguments)}return t}()},{key:"uploadHeader",value:function(){var e=(0,a.default)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,s.Http.upload({url:"v1/user/uploadHeader",file:t});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"updateName",value:function(){var e=(0,a.default)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,s.Http.tSend({url:"v1/user/updateName",data:{name:t},method:"POST"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"compressImage",value:function(e){if(o.config.compress)return e+o.config.headerCompressRule}},{key:"changePassword",value:function(){var e=(0,a.default)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,s.Http.tSend({url:"v1/user/changePassword",data:t,method:"POST"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"sendFeedback",value:function(){var e=(0,a.default)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,s.Http.tSend({url:"v1/user/sendFeedback",data:t,method:"POST"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()}]),e}();t.User=c},"4b67":function(e,t,r){"use strict";r("a9e3"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n="data:image/png;base64,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",a={name:"u-avatar",props:{bgColor:{type:String,default:"transparent"},src:{type:String,default:""},size:{type:[String,Number],default:"default"},mode:{type:String,default:"circle"},text:{type:String,default:""},imgMode:{type:String,default:"aspectFill"},index:{type:[String,Number],default:""}},data:function(){return{error:!1,avatar:this.src?this.src:n}},watch:{src:function(e){this.avatar=e}},computed:{wrapStyle:function(){var e={};return e.height="large"==this.size?"120rpx":"default"==this.size?"90rpx":"mini"==this.size?"70rpx":this.size+"rpx",e.width=e.height,e.flex="0 0 ".concat(e.height),e.backgroundColor=this.bgColor,e.borderRadius="circle"==this.mode?"500px":"5px",this.text&&(e.padding="0 6rpx"),e},imgStyle:function(){var e={};return e.borderRadius="circle"==this.mode?"500px":"5px",e}},methods:{loadError:function(){this.error=!0,this.avatar=n},click:function(){this.$emit("click",this.index)}}};t.default=a},"572f":function(e,t,r){"use strict";r.r(t);var n=r("7f0c"),a=r.n(n);for(var i in n)"default"!==i&&function(e){r.d(t,e,(function(){return n[e]}))}(i);t["default"]=a.a},"7f0c":function(e,t,r){"use strict";(function(e){var n=r("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r("96cf");var a=n(r("1da1")),i=r("4812"),u={data:function(){return{src:"http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg",show:!1,value:"",type:"text",border:!0}},created:function(){this.userInfo=uni.getStorageSync("userInfo"),this.value=this.userInfo.nickname},onLoad:function(){},methods:{changeName:function(){var e=this;return(0,a.default)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,i.User.updateName(e.value);case 2:r=t.sent,200==r.code?(uni.showToast({title:r.msg}),e.userInfo.nickname=e.value,uni.setStorageSync("userInfo",e.userInfo),e.show=!1):uni.showToast({title:r.msg,icon:"none"});case 4:case"end":return t.stop()}}),t)})))()},clickCell:function(t){e.log(t),this.show=!0},changeHeader:function(){var e=this;uni.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album"],success:function(){var t=(0,a.default)(regeneratorRuntime.mark((function t(r){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.images=r.tempFilePaths[0],e.isChange=!0,uni.showLoading({title:"图片上传中"}),t.next=5,i.User.uploadHeader(r.tempFilePaths[0]);case 5:n=t.sent.data,uni.hideLoading(),n=JSON.parse(n),200==n.code?(uni.showToast({title:"上传成功"}),e.userInfo.avatar=i.User.compressImage(n.data),uni.setStorageSync("userInfo",e.userInfo),e.$forceUpdate()):uni.showToast({title:n.msg,icon:"none"});case 9:case"end":return t.stop()}}),t)})));function r(e){return t.apply(this,arguments)}return r}()})}}};t.default=u}).call(this,r("5a52")["default"])},"87f5":function(e,t,r){"use strict";var n;r.d(t,"b",(function(){return a})),r.d(t,"c",(function(){return i})),r.d(t,"a",(function(){return n}));var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-uni-view",{staticClass:"u-avatar",style:[e.wrapStyle],on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.click.apply(void 0,arguments)}}},[!e.text&&e.avatar?r("v-uni-image",{staticClass:"u-avatar-img",style:[e.imgStyle],attrs:{src:e.avatar,mode:e.mode},on:{error:function(t){arguments[0]=t=e.$handleEvent(t),e.loadError.apply(void 0,arguments)}}}):e.text?r("v-uni-text",{staticClass:"u-line-1"},[e._v(e._s(e.text))]):e._t("default")],2)},i=[]},"9e95":function(e,t,r){"use strict";r.d(t,"b",(function(){return a})),r.d(t,"c",(function(){return i})),r.d(t,"a",(function(){return n}));var n={uPopup:r("d78c").default,uInput:r("820e").default,uButton:r("83b6").default,uCellGroup:r("89b7").default,uCellItem:r("00dc").default,uAvatar:r("df19").default,uIcon:r("6f72").default},a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-uni-view",[r("u-popup",{attrs:{mode:"top",height:"500","close-icon-pos":"bottom-right",closeable:!0},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}},[r("v-uni-view",{staticClass:"flexCenter",staticStyle:{width:"90%",height:"400rpx",margin:"0 auto","flex-direction":"column"}},[r("v-uni-view",{staticStyle:{width:"100%",margin:"50rpx 0"}},[r("u-input",{attrs:{type:e.type,border:e.border,placeholder:"输入名称"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1),r("u-button",{attrs:{type:"primary"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.changeName.apply(void 0,arguments)}}},[e._v("确认修改")])],1)],1),r("u-cell-group",[r("u-cell-item",{attrs:{title:"头像",arrow:!1,"arrow-direction":"down"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.changeHeader.apply(void 0,arguments)}}},[r("v-uni-view",{staticStyle:{display:"flex"},attrs:{slot:"right-icon"},slot:"right-icon"},[r("u-avatar",{staticStyle:{"margin-right":"10rpx"},attrs:{src:e.userInfo.avatar,mode:"square",size:"70"}}),r("u-icon",{attrs:{name:"arrow-right",color:"#c5c5c5"}})],1)],1),r("u-cell-item",{attrs:{title:"昵称",arrow:!1},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.clickCell(2)}}},[r("v-uni-view",{staticStyle:{display:"flex"},attrs:{slot:"right-icon"},slot:"right-icon"},[r("v-uni-text",[e._v(e._s(e.userInfo.nickname))]),r("u-icon",{attrs:{name:"arrow-right",color:"#c5c5c5"}})],1)],1),r("u-cell-item",{attrs:{title:"用户名",arrow:!1}},[r("v-uni-view",{staticStyle:{display:"flex"},attrs:{slot:"right-icon"},slot:"right-icon"},[r("v-uni-text",[e._v(e._s(e.userInfo.username))])],1)],1)],1)],1)},i=[]},d070:function(e,t,r){"use strict";var n=r("ed8a"),a=r.n(n);a.a},df19:function(e,t,r){"use strict";r.r(t);var n=r("87f5"),a=r("27a7");for(var i in a)"default"!==i&&function(e){r.d(t,e,(function(){return a[e]}))}(i);r("d070");var u,s=r("f0c5"),o=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"9895fe60",null,!1,n["a"],u);t["default"]=o.exports},ed8a:function(e,t,r){var n=r("1511");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=r("4f06").default;a("0e5d2d72",n,!0,{sourceMap:!1,shadowMode:!1})}}]);