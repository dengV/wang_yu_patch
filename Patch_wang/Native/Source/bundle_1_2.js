!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=8)}([function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=window||t}).call(e,n(9))},function(t,e,n){"use strict";function r(){try{_lufix_declare.apply(void 0,arguments)}catch(t){}}function o(){var t=void 0;try{t=_lufix_evaluate.apply(void 0,arguments)}catch(t){}finally{return t}}function a(t){return u[++l]=t,l}Object.defineProperty(e,"__esModule",{value:!0}),e.logger=void 0,e.declare=r,e.evaluate=o,e.getCallbackId=a;var i=n(0),c=function(t){return t&&t.__esModule?t:{default:t}}(i),u={},l=0;c.default._lufix_callback=function(t){var e=u[t];return delete u[t],e};var s=c.default.console.log;c.default.console.log=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];o({__type:"log_i",__content:{info:e}}),s.apply(c.default.console,e)};e.logger=s},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t){if(!t.__octransfer)return t;switch(t.type){case"array":return new u(t.object,t.origin);default:return new b(t.object,t.origin)}}function c(t){if(void 0==t)return t;switch(t.__type){case"instance":return(0,_.instanceCommand)(t.__content,function(t){return i(t.objInstance)});case"class":return(0,_.classCommand)(t.__content,function(t){if(null==g[t]){var e=new w(t);return g[t]=e,e}return g[t]});case"function":return(0,_.funcCommand)(t.__content,null);case"protocol":return(0,_.protocolCommand)(t.__content,null);default:return t}}function u(t,e){Array.call(this),this.push.apply(this,o(t)),Object.freeze(e),this.getOrigin=function(){return e},this.preEle=t}function l(){for(var t={},e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];var o=!0,a=!1,i=void 0;try{for(var c,u=n[Symbol.iterator]();!(o=(c=u.next()).done);o=!0){var l=c.value;null==g[l]&&(t[l]=new w(l))}}catch(t){a=!0,i=t}finally{try{!o&&u.return&&u.return()}finally{if(a)throw i}}return Object.assign(g,t),Object.freeze(Object.assign({},g))}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();e.requireCocoa=l;var f=n(1),p=n(7),_=n(4),y=n(6),h=n(0),d=r(h);n(5);var v=n(3),m=r(v),g={};d.default.lambdaDefine=m.default,Object.defineProperty(Object.prototype,p.metafuncName,{value:function(t){for(var e=arguments.length,n=Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var o=this;if(o[t]&&"function"==typeof o[t])return o[t].apply(o,n);var a=(0,y.objcSelectorConvert)(t,n.length),i=this;return c((0,f.evaluate)({__type:"method_i",__content:{selName:a,object:i,arguments:n}}))},writable:!0}),Object.defineProperties(Object.prototype,{oc_get_prop:{value:function(t){var e=this;return e[t]?e[t]:c((0,f.evaluate)({__type:"property_i",__content:{propName:t,object:e,type:"getter"}}))},writable:!0},oc_set_prop:{value:function(t,e){if("function"==typeof e)return void(this.name=e);var n=this;c((0,f.evaluate)({__type:"property_i",__content:{propName:t,object:n,value:e,type:"setter"}}))||(n[t]=e)},writable:!0},strongify:{value:function(){return c((0,f.evaluate)({__type:"arc",__content:{object:this,type:"strong"}}))},writable:!1},weakify:{value:function(){return c((0,f.evaluate)({__type:"arc",__content:{object:this,type:"weak"}}))},writable:!1}});var b=function t(e,n){a(this,t),Object.freeze(n),this.getOrigin=function(){return n},Object.assign(this,e)};b.prototype.oc_get_prop=function(t){if(this[t])return this[t];var e=this.getOrigin();return Object.prototype.oc_get_prop.call(e,t)},b.prototype.oc_set_prop=function(t,e){return"function"==typeof e?void(this.name=e):(null===e&&delete this[t],Object.prototype.oc_set_prop.call(this.getOrigin(),t,e))},b.prototype[p.metafuncName]=function(t){for(var e=arguments.length,n=Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var o=this.getOrigin();return this[t]&&"function"==typeof this[t]?this[t].apply(this,n):Object.prototype[p.metafuncName].apply(o,arguments)},u.prototype=Object.create(Array.prototype),u.prototype.constructor=u,u.prototype.commit=function(){var t=Array.from(this);(0,f.evaluate)({__type:"method_i",__content:{selName:"jsDiff:",object:this.getOrigin(),arguments:[t]}}),this.preEle=t},u.prototype.oc_set_prop=function(t,e){"number"==typeof t?(this[t]=e,this.commit()):Object.prototype.oc_set_prop.apply(this,arguments)},u.prototype[p.metafuncName]=function(t){var e=this;if(this[t]&&"function"==typeof this[t]){for(var n=arguments.length,r=Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];if(["pop","push","shift","unshift","splice","sort","reverse"].includes(t)){var a=e[t].apply(e,r);return this.commit(),a}return"function"==typeof e.preEle[t]&&"oc_set_prop"!==t?e.preEle[t].apply(e.preEle,r):e[t].apply(e,r)}};var j=function t(e){a(this,t),this.isSuper=!0,this.instance=e};j.prototype[p.metafuncName]=function(t){for(var e=arguments.length,n=Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var o=c(this.instance);if(null==o[t]){var a=(0,y.objcSelectorConvert)(t,n.length),i=void 0;return i=o instanceof w?(0,f.evaluate)({__type:"super_c",__content:{selName:a,className:o.className,arguments:n}}):(0,f.evaluate)({__type:"super_i",__content:{selName:a,object:o,arguments:n}}),c(i)}return Object.prototype[p.metafuncName].apply(o,arguments)},d.default.Super=j;var w=function(){function t(e){a(this,t),this.className=e}return s(t,[{key:"renewClsMethods",value:function(t){var e=this,n=Object.keys(t),r=!0,o=!1,a=void 0;try{for(var i,u=n[Symbol.iterator]();!(r=(i=u.next()).done);r=!0){var l;(function(){function n(t){for(var e=c(t),n=arguments.length,o=Array(n>1?n-1:0),a=1;a<n;a++)o[a-1]=arguments[a];return r.apply(e,o)}l=i.value;var r=t[l];if(!(r instanceof Function))return"continue";var o=(0,y.objcSelectorConvert)(l,r.length),a=(0,f.getCallbackId)(n);(0,f.declare)({__type:"method_c",__content:{selName:o,jsFn:a,clsName:e.className}})})()}}catch(t){o=!0,a=t}finally{try{!r&&u.return&&u.return()}finally{if(o)throw a}}}},{key:"renewInstanceMethods",value:function(t){var e=this,n=Object.keys(t),r=!0,o=!1,a=void 0;try{for(var i,u=n[Symbol.iterator]();!(r=(i=u.next()).done);r=!0){var l;(function(){function n(t){for(var e=c(t),n=arguments.length,o=Array(n>1?n-1:0),a=1;a<n;a++)o[a-1]=arguments[a];return r.apply(e,o)}l=i.value;var r=t[l];if(!(r instanceof Function))return"continue";var o=(0,y.objcSelectorConvert)(l,r.length),a=(0,f.getCallbackId)(n);(0,f.declare)({__type:"method_i",__content:{selName:o,jsFn:a,clsName:e.className}})})()}}catch(t){o=!0,a=t}finally{try{!r&&u.return&&u.return()}finally{if(o)throw a}}}},{key:"createInstanceMethods",value:function(){var t=this.methodEncodingHelper.apply(this,arguments),e=!0,n=!1,r=void 0;try{for(var o,a=t[Symbol.iterator]();!(e=(o=a.next()).done);e=!0){var i=o.value;i.clsName=this.className,(0,f.declare)({__type:"method_create_i",__content:i})}}catch(t){n=!0,r=t}finally{try{!e&&a.return&&a.return()}finally{if(n)throw r}}}},{key:"createClassMethods",value:function(){var t=this.methodEncodingHelper.apply(this,arguments),e=!0,n=!1,r=void 0;try{for(var o,a=t[Symbol.iterator]();!(e=(o=a.next()).done);e=!0){var i=o.value;i.clsName=this.className,(0,f.declare)({__type:"method_create_c",__content:i})}}catch(t){n=!0,r=t}finally{try{!e&&a.return&&a.return()}finally{if(n)throw r}}}},{key:"methodEncodingHelper",value:function(){return Array.prototype.map.call(arguments,function(t){function e(t){for(var e=c(t),n=arguments.length,r=Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];return o.apply(e,r)}var n=void 0,r=void 0,o=t(function(t,e){n=t,r=e});return{type:n,selName:(0,y.objcSelectorConvert)(r,o.length),jsFn:(0,f.getCallbackId)(e)}})}}]),t}();w.prototype[p.metafuncName]=function(t){for(var e=arguments.length,n=Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var o=this;if(null==o[t]){var a=(0,y.objcSelectorConvert)(t,n.length),i=this;return c((0,f.evaluate)({__type:"method_c",__content:{selName:a,className:this.className,object:i,arguments:n}}))}return Object.prototype[p.metafuncName].apply(o,arguments)}},function(t,e,n){"use strict";function r(t,e){var n=(0,o.getCallbackId)(e);return(0,o.evaluate)({__type:"block",__content:{typeEncoding:t,jsFn:n}})}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;var o=n(1)},function(t,e,n){"use strict";function r(t,e){return e(t)}function o(t,e){return e(t.className)}function a(t,e){return t}function i(t,e){return t}Object.defineProperty(e,"__esModule",{value:!0}),e.instanceCommand=r,e.classCommand=o,e.protocolCommand=a,e.funcCommand=i},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var o=n(0),a=function(t){return t&&t.__esModule?t:{default:t}}(o),i=function t(e,n){r(this,t),this.x=e,this.y=n},c=function t(e,n){r(this,t),this.width=e,this.height=n},u=function t(e,n){function o(){}return r(this,t),Object.assign(new o,e,n)},l=function t(e,n){r(this,t),this.location=e,this.length=n},s=[function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return new(Function.prototype.bind.apply(i,[null].concat(e)))},function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return new(Function.prototype.bind.apply(c,[null].concat(e)))},function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return new(Function.prototype.bind.apply(u,[null].concat(e)))},function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return new(Function.prototype.bind.apply(l,[null].concat(e)))}];a.default.Point=s[0],a.default.Size=s[1],a.default.Rect=s[2],a.default.NSRange=s[3]},function(t,e,n){"use strict";function r(t,e){var n=t.replace(/__/g,"-").replace(/_/g,":").replace(/-/g,"_");return n.split(":").length-1<e&&(n+=":"),n}Object.defineProperty(e,"__esModule",{value:!0}),e.objcSelectorConvert=r},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.metafuncName="__methodMissing"},function(t,e,n){"use strict";var r=n(2),o=(0,r.requireCocoa)("ViewController","UIColor"),a=o.ViewController,i=o.UIColor,c=(0,r.requireCocoa)("IndexTableViewController"),u=c.IndexTableViewController;a.__methodMissing("renewInstanceMethods",{clickIt:function(){var t=this.__methodMissing("weakify");this.__methodMissing("oc_get_prop","click").__methodMissing("rac__signalForControlEvents",64).__methodMissing("subscribeNext",lambdaDefine("v,@",function(e){t.__methodMissing("oc_get_prop","view").__methodMissing("oc_set_prop","backgroundColor",i.__methodMissing("__methodMissing","cyanColor"))}))}}),u.__methodMissing("renewInstanceMethods",{hookJSMethod:function(){this.__methodMissing("oc_get_prop","tableView").__methodMissing("oc_set_prop","rowHeight",300)}}),a.__methodMissing("renewInstanceMethods",{setName:function(){this.__methodMissing("oc_set_prop","name","你好，世界。")}})},function(t,e,n){"use strict";var r,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this")}catch(t){"object"===("undefined"==typeof window?"undefined":o(window))&&(r=window)}t.exports=r}]);