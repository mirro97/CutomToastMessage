(function(t){function o(o){for(var i,n,r=o[0],c=o[1],l=o[2],f=0,u=[];f<r.length;f++)n=r[f],Object.prototype.hasOwnProperty.call(e,n)&&e[n]&&u.push(e[n][0]),e[n]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);p&&p(o);while(u.length)u.shift()();return a.push.apply(a,l||[]),s()}function s(){for(var t,o=0;o<a.length;o++){for(var s=a[o],i=!0,r=1;r<s.length;r++){var c=s[r];0!==e[c]&&(i=!1)}i&&(a.splice(o--,1),t=n(n.s=s[0]))}return t}var i={},e={app:0},a=[];function n(o){if(i[o])return i[o].exports;var s=i[o]={i:o,l:!1,exports:{}};return t[o].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=i,n.d=function(t,o,s){n.o(t,o)||Object.defineProperty(t,o,{enumerable:!0,get:s})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,o){if(1&o&&(t=n(t)),8&o)return t;if(4&o&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&o&&"string"!=typeof t)for(var i in t)n.d(s,i,function(o){return t[o]}.bind(null,i));return s},n.n=function(t){var o=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(o,"a",o),o},n.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},n.p="/CutomToastMessage/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=o,r=r.slice();for(var l=0;l<r.length;l++)o(r[l]);var p=c;a.push([0,"chunk-vendors"]),s()})({0:function(t,o,s){t.exports=s("56d7")},"034f":function(t,o,s){"use strict";s("85ec")},"039f":function(t,o,s){"use strict";s("b09b")},"1f5f":function(t,o,s){"use strict";s("cffe")},"56d7":function(t,o,s){"use strict";s.r(o);s("e260"),s("e6cf"),s("cca6"),s("a79d");var i=s("2b0e"),e=function(){var t=this,o=t.$createElement,s=t._self._c||o;return s("div",{attrs:{id:"app"}},[s("Header"),s("ToastSetting"),s("Footer")],1)},a=[],n=function(){var t=this,o=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,o=t.$createElement,s=t._self._c||o;return s("div",{staticClass:"header-container"},[s("i",{staticClass:"fas fa-bread-slice"}),s("h1",{staticClass:"title"},[t._v(" Vue with Toast ")])])}],c={},l=c,p=(s("bd23"),s("2877")),f=Object(p["a"])(l,n,r,!1,null,"f9cff6d0",null),u=f.exports,d=function(){var t=this,o=t.$createElement,s=t._self._c||o;return s("div",[s("div",{staticClass:"test-container"},[s("OptionsView",{attrs:{options:t.form}}),s("div",{staticClass:"setting-container"},[s("div",{staticClass:"input-options"},[s("div",{staticClass:"i-options t-title"},[s("strong",{staticClass:"option-t"},[t._v("title")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.title,expression:"form.title"}],staticClass:"input-box",attrs:{type:"text"},domProps:{value:t.form.title},on:{input:function(o){o.target.composing||t.$set(t.form,"title",o.target.value)}}})]),s("div",{staticClass:"i-options t-description"},[s("strong",{staticClass:"option-t"},[t._v("description")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.description,expression:"form.description"}],staticClass:"input-box",attrs:{type:"text"},domProps:{value:t.form.description},on:{input:function(o){o.target.composing||t.$set(t.form,"description",o.target.value)}}})]),s("div",{staticClass:"i-options t-timeout"},[s("strong",{staticClass:"option-t"},[t._v("timeout")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.timeOut,expression:"form.timeOut"}],staticClass:"input-box",attrs:{type:"text"},domProps:{value:t.form.timeOut},on:{input:function(o){o.target.composing||t.$set(t.form,"timeOut",o.target.value)}}})]),s("div",{staticClass:"i-options t-toastBoxColor"},[s("strong",{staticClass:"option-t"},[t._v("toastBoxColor")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.toastBoxColor,expression:"form.toastBoxColor"}],staticClass:"input-box",attrs:{type:"text"},domProps:{value:t.form.toastBoxColor},on:{input:function(o){o.target.composing||t.$set(t.form,"toastBoxColor",o.target.value)}}})])]),s("div",{staticClass:"set-position"},[s("strong",{staticClass:"option-t"},[t._v("position")]),s("div",{staticClass:"option-value"},[s("div",{staticClass:"r-options"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.position,expression:"form.position"}],attrs:{type:"radio",id:"top-left",value:"top-left"},domProps:{checked:t._q(t.form.position,"top-left")},on:{change:function(o){return t.$set(t.form,"position","top-left")}}}),s("label",{attrs:{for:"top-left"}},["top-left"===t.form.position?s("div",{staticClass:"chk-box"},[s("i",{staticClass:"far fa-check-square"})]):s("div",{staticClass:"chk-box"},[s("i",{staticClass:"far fa-square"})]),t._v(" top-left ")])]),s("div",{staticClass:"r-options"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.position,expression:"form.position"}],attrs:{type:"radio",id:"top-right",value:"top-right"},domProps:{checked:t._q(t.form.position,"top-right")},on:{change:function(o){return t.$set(t.form,"position","top-right")}}}),s("label",{attrs:{for:"top-right"}},["top-right"===t.form.position?s("div",{staticClass:"chk-box"},[s("i",{staticClass:"far fa-check-square"})]):s("div",{staticClass:"chk-box"},[s("i",{staticClass:"far fa-square"})]),t._v(" top-right ")])]),s("div",{staticClass:"r-options"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.position,expression:"form.position"}],attrs:{type:"radio",id:"top-center",value:"top-center"},domProps:{checked:t._q(t.form.position,"top-center")},on:{change:function(o){return t.$set(t.form,"position","top-center")}}}),s("label",{attrs:{for:"top-center"}},["top-center"===t.form.position?s("div",{staticClass:"chk-box"},[s("i",{staticClass:"far fa-check-square"})]):s("div",{staticClass:"chk-box"},[s("i",{staticClass:"far fa-square"})]),t._v(" top-center ")])]),s("div",{staticClass:"r-options"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.position,expression:"form.position"}],attrs:{type:"radio",id:"bottom-left",value:"bottom-left"},domProps:{checked:t._q(t.form.position,"bottom-left")},on:{change:function(o){return t.$set(t.form,"position","bottom-left")}}}),s("label",{attrs:{for:"bottom-left"}},["bottom-left"===t.form.position?s("div",{staticClass:"chk-box"},[s("i",{staticClass:"far fa-check-square"})]):s("div",{staticClass:"chk-box"},[s("i",{staticClass:"far fa-square"})]),t._v(" bottom-left ")])]),s("div",{staticClass:"r-options"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.position,expression:"form.position"}],attrs:{type:"radio",id:"bottom-right",value:"bottom-right"},domProps:{checked:t._q(t.form.position,"bottom-right")},on:{change:function(o){return t.$set(t.form,"position","bottom-right")}}}),s("label",{attrs:{for:"bottom-right"}},["bottom-right"===t.form.position?s("div",{staticClass:"chk-box"},[s("i",{staticClass:"far fa-check-square"})]):s("div",{staticClass:"chk-box"},[s("i",{staticClass:"far fa-square"})]),t._v(" bottom-right ")])]),s("div",{staticClass:"r-options"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.position,expression:"form.position"}],attrs:{type:"radio",id:"bottom-center",value:"bottom-center"},domProps:{checked:t._q(t.form.position,"bottom-center")},on:{change:function(o){return t.$set(t.form,"position","bottom-center")}}}),s("label",{attrs:{for:"bottom-center"}},["bottom-center"===t.form.position?s("div",{staticClass:"chk-box"},[s("i",{staticClass:"far fa-check-square"})]):s("div",{staticClass:"chk-box"},[s("i",{staticClass:"far fa-square"})]),t._v(" bottom-center ")])])])]),s("div",{staticClass:"set-type"},[s("strong",{staticClass:"option-t"},[t._v("type")]),s("div",{staticClass:"option-value"},[s("div",{staticClass:"r-options"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.type,expression:"form.type"}],attrs:{type:"radio",id:"default",value:"default"},domProps:{checked:t._q(t.form.type,"default")},on:{change:function(o){return t.$set(t.form,"type","default")}}}),s("label",{attrs:{for:"default"}},["default"===t.form.type?s("div",{staticClass:"chk-box"},[s("i",{staticClass:"far fa-check-square"})]):s("div",{staticClass:"chk-box"},[s("i",{staticClass:"far fa-square"})]),t._v(" default ")])]),s("div",{staticClass:"r-options"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.type,expression:"form.type"}],attrs:{type:"radio",id:"info",value:"info"},domProps:{checked:t._q(t.form.type,"info")},on:{change:function(o){return t.$set(t.form,"type","info")}}}),s("label",{attrs:{for:"info"}},["info"===t.form.type?s("div",{staticClass:"chk-box"},[s("i",{staticClass:"far fa-check-square"})]):s("div",{staticClass:"chk-box"},[s("i",{staticClass:"far fa-square"})]),t._v(" info ")])]),s("div",{staticClass:"r-options"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.type,expression:"form.type"}],attrs:{type:"radio",id:"warning",value:"warning"},domProps:{checked:t._q(t.form.type,"warning")},on:{change:function(o){return t.$set(t.form,"type","warning")}}}),s("label",{attrs:{for:"warning"}},["warning"===t.form.type?s("div",{staticClass:"chk-box"},[s("i",{staticClass:"far fa-check-square"})]):s("div",{staticClass:"chk-box"},[s("i",{staticClass:"far fa-square"})]),t._v(" warning ")])]),s("div",{staticClass:"r-options"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.type,expression:"form.type"}],attrs:{type:"radio",id:"success",value:"success"},domProps:{checked:t._q(t.form.type,"success")},on:{change:function(o){return t.$set(t.form,"type","success")}}}),s("label",{attrs:{for:"success"}},["success"===t.form.type?s("div",{staticClass:"chk-box"},[s("i",{staticClass:"far fa-check-square"})]):s("div",{staticClass:"chk-box"},[s("i",{staticClass:"far fa-square"})]),t._v(" success ")])]),s("div",{staticClass:"r-options"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.type,expression:"form.type"}],attrs:{type:"radio",id:"danger",value:"danger"},domProps:{checked:t._q(t.form.type,"danger")},on:{change:function(o){return t.$set(t.form,"type","danger")}}}),s("label",{attrs:{for:"danger"}},["danger"===t.form.type?s("div",{staticClass:"chk-box"},[s("i",{staticClass:"far fa-check-square"})]):s("div",{staticClass:"chk-box"},[s("i",{staticClass:"far fa-square"})]),t._v(" danger ")])])])]),s("div",{staticClass:"set-transition"},[s("strong",{staticClass:"option-t"},[t._v("transition")]),s("div",{staticClass:"option-value"},[s("div",{staticClass:"r-options"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.transition,expression:"form.transition"}],attrs:{type:"radio",id:"bounce",value:"bounce"},domProps:{checked:t._q(t.form.transition,"bounce")},on:{change:function(o){return t.$set(t.form,"transition","bounce")}}}),s("label",{attrs:{for:"bounce"}},["bounce"===t.form.transition?s("div",{staticClass:"chk-box"},[s("i",{staticClass:"far fa-check-square"})]):s("div",{staticClass:"chk-box"},[s("i",{staticClass:"far fa-square"})]),t._v(" bounce ")])]),s("div",{staticClass:"r-options"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.transition,expression:"form.transition"}],attrs:{type:"radio",id:"zoom",value:"zoom"},domProps:{checked:t._q(t.form.transition,"zoom")},on:{change:function(o){return t.$set(t.form,"transition","zoom")}}}),s("label",{attrs:{for:"zoom"}},["zoom"===t.form.transition?s("div",{staticClass:"chk-box"},[s("i",{staticClass:"far fa-check-square"})]):s("div",{staticClass:"chk-box"},[s("i",{staticClass:"far fa-square"})]),t._v(" zoom ")])]),s("div",{staticClass:"r-options"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.transition,expression:"form.transition"}],attrs:{type:"radio",id:"slide",value:"slide"},domProps:{checked:t._q(t.form.transition,"slide")},on:{change:function(o){return t.$set(t.form,"transition","slide")}}}),s("label",{attrs:{for:"slide"}},["slide"===t.form.transition?s("div",{staticClass:"chk-box"},[s("i",{staticClass:"far fa-check-square"})]):s("div",{staticClass:"chk-box"},[s("i",{staticClass:"far fa-square"})]),t._v(" slide ")])])])])]),s("button",{staticClass:"btn",on:{click:t.add}},[t._v(" Show Toast ")])],1),s("div",{staticClass:"v-toast-container"},t._l(t.toastList,(function(o,i){return s("div",{key:i,staticClass:"v-toast",class:i},t._l(o,(function(t){return s(t.component,{key:t.id,tag:"Toast",attrs:{options:t.data}})})),1)})),0)])},m=[],v=function(){var t=this,o=t.$createElement,s=t._self._c||o;return s("transition",{attrs:{name:t.setTransition(),type:"animation",appear:""}},[!0===t.toast_is_open?s("div",{staticClass:"toastMsg",class:t.options.type,style:{background:t.options.toastBoxColor}},[s("div",{staticClass:"content-container"},[s("div",{staticClass:"content"},["info"===t.options.type?s("div",{staticClass:"icon"},[s("i",{staticClass:"fas fa-info-circle"})]):t._e(),"warning"===t.options.type?s("div",{staticClass:"icon"},[s("i",{staticClass:"fas fa-exclamation-triangle"})]):t._e(),"success"===t.options.type?s("div",{staticClass:"icon"},[s("i",{staticClass:"fas fa-thumbs-up"})]):t._e(),"danger"===t.options.type?s("div",{staticClass:"icon"},[s("i",{staticClass:"fas fa-skull-crossbones"})]):t._e(),s("div",{staticClass:"title"},[t._v(" "+t._s(t.options.title)+" ")]),s("div",{staticClass:"description"},[t._v(" "+t._s(t.options.description)+" ")])]),s("i",{staticClass:"fas fa-times delete",on:{click:function(o){t.toast_is_open=!1}}})]),s("transition",{attrs:{name:"pgBar",type:"animation",duration:t.progressBar(),appear:""}},[s("div",{staticClass:"progress-bar",attrs:{id:t.progressId}})])],1):t._e()])},h=[],b={props:{options:Object},data:function(){return{toast_is_open:!0,transitionList:{"top-left":{bounce:"bounceLeft",zoom:"zoomIn",slide:"slideLeft"},"top-center":{bounce:"bounceDown",zoom:"zoomIn",slide:"slideDown"},"top-right":{bounce:"bounceRight",zoom:"zoomIn",slide:"slideRight"},"bottom-left":{bounce:"bounceLeft",zoom:"zoomIn",slide:"slideLeft"},"bottom-center":{bounce:"bounceUp",zoom:"zoomIn",slide:"slideUp"},"bottom-right":{bounce:"bounceRight",zoom:"zoomIn",slide:"slideRight"}},progressId:null}},methods:{setTransition:function(){this.progressId=(new Date).getTime(),this.closeToast();var t=this.transitionList,o=this.options.position,s=this.options.transition;for(var i in t)if(i===o)for(var e in t[i])if(e===s)return t[i][e]},closeToast:function(){var t=this,o=this.options.timeOut;setTimeout((function(){t.toast_is_open=!1}),1e3*o)},progressBar:function(){var t=this.options.timeOut;return 1e3*t}},mounted:function(){document.getElementById(this.progressId).style["animation-duration"]="".concat(this.options.timeOut,"s"),console.log("test!")}},C=b,_=(s("5ca8"),Object(p["a"])(C,v,h,!1,null,"6ec5155f",null)),g=_.exports,y=function(){var t=this,o=t.$createElement,s=t._self._c||o;return s("div",{staticClass:"show-msg"},[s("div",[t._v(" createToast({ "),t.options.title?s("div",[t._v("  title: '"+t._s(t.options.title)+"'")]):t._e(),t.options.description?s("div",[t._v("   description: '"+t._s(t.options.description)+"' ")]):t._e(),t.options.timeOut?s("div",[t._v("  timeOut: "+t._s(t.options.timeOut))]):t._e(),t.options.toastBoxColor?s("div",[t._v("   toastBoxColor: '"+t._s(t.options.toastBoxColor)+"' ")]):t._e(),t.options.position?s("div",[t._v("   position: '"+t._s(t.options.position)+"' ")]):t._e(),t.options.type?s("div",[t._v("  type: '"+t._s(t.options.type)+"'")]):t._e(),t.options.transition?s("div",[t._v("   transition: '"+t._s(t.options.transition)+"' ")]):t._e(),t._v(" }) ")])])},x=[],k={props:{options:Object}},w=k,O=(s("1f5f"),Object(p["a"])(w,y,x,!1,null,null,null)),q=O.exports,T={components:{Toast:g,OptionsView:q},data:function(){return{form:{title:"타이틀을 입력해주세요",description:"내용을 입력해주세요",timeOut:5,toastBoxColor:"",position:"top-right",type:"default",transition:"bounce"},toastList:{"top-left":[],"top-center":[],"top-right":[],"bottom-left":[],"bottom-center":[],"bottom-right":[]}}},methods:{add:function(){var t=Object.assign({},this.form);for(var o in this.toastList)o===this.form.position&&this.toastList[o].push({id:this.toastList.length,component:"toast",data:t})}}},P=T,$=(s("bc64"),Object(p["a"])(P,d,m,!1,null,"1404b51a",null)),N=$.exports,E=function(){var t=this,o=t.$createElement;t._self._c;return t._m(0)},j=[function(){var t=this,o=t.$createElement,s=t._self._c||o;return s("div",{staticClass:"footer"},[s("p",[t._v("© Copyright 2021 "),s("strong",{staticClass:"name"},[t._v("sujeong.k")])])])}],z={},I=z,S=(s("039f"),Object(p["a"])(I,E,j,!1,null,"2375344d",null)),B=S.exports,L={components:{Header:u,ToastSetting:N,Footer:B}},M=L,R=(s("034f"),Object(p["a"])(M,e,a,!1,null,null,null)),D=R.exports,U=s("2f62"),V={SET_TITLE:function(t,o){t.title=o},SET_DESCRIPTION:function(t,o){t.descrition=o},SET_TIMEOUT:function(t,o){t.timeOut=o},SET_BOXCOLOR:function(t,o){t.toastBoxColor=o},SET_POSITION:function(t,o){t.pickedPos=o},SET_TYPE:function(t,o){t.pickedType=o},SET_TRANSITION:function(t,o){t.pickedTrans=o}};i["a"].use(U["a"]);var F=new U["a"].Store({state:{pickedPos:"top-right",pickedType:"",pickedTrans:"",title:"타이틀을 입력해주세요",descrition:"내용을 입력해주세요",timeOut:1e3,toastBoxColor:"#fff"},mutations:V});i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(D)},store:F}).$mount("#app")},"5ca8":function(t,o,s){"use strict";s("8bd6")},"85ec":function(t,o,s){},"8bd6":function(t,o,s){},a318:function(t,o,s){},b09b:function(t,o,s){},bc64:function(t,o,s){"use strict";s("d3a9")},bd23:function(t,o,s){"use strict";s("a318")},cffe:function(t,o,s){},d3a9:function(t,o,s){}});
//# sourceMappingURL=app.0991f00e.js.map