!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof exports?exports["middleware-interlock"]=r():e["middleware-interlock"]=r()}(window,(function(){return function(e){var r={};function n(t){if(r[t])return r[t].exports;var u=r[t]={i:t,l:!1,exports:{}};return e[t].call(u.exports,u,u.exports,n),u.l=!0,u.exports}return n.m=e,n.c=r,n.d=function(e,r,t){n.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,r){if(1&r&&(e=n(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var u in e)n.d(t,u,function(r){return e[r]}.bind(null,u));return t},n.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(r,"a",r),r},n.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},n.p="",n(n.s=0)}([function(e,r,n){"use strict";function t(e,r,n,t,u,o,a){try{var i=e[o](a),c=i.value}catch(e){return void n(e)}i.done?r(c):Promise.resolve(c).then(t,u)}n.r(r),n.d(r,"retry",(function(){return u})),n.d(r,"catchError",(function(){return o}));var u=function(e,r){var n=e,u=r;return{name:"retry",next:function(e){var r=0;return new Promise((function(o){var a=function(){var i,c=(i=regeneratorRuntime.mark((function t(){var i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e();case 3:i=t.sent,t.next=12;break;case 6:if(t.prev=6,t.t0=t.catch(0),!((r+=1)<n)){t.next=11;break}return t.abrupt("return",setTimeout((function(){return a(e)}),u));case 11:return t.abrupt("return",o({error:t.t0}));case 12:return t.abrupt("return",o(i));case 13:case"end":return t.stop()}}),t,null,[[0,6]])})),function(){var e=this,r=arguments;return new Promise((function(n,u){var o=i.apply(e,r);function a(e){t(o,n,u,a,c,"next",e)}function c(e){t(o,n,u,a,c,"throw",e)}a(void 0)}))});return function(){return c.apply(this,arguments)}}();a(e)}))}}},o=function(e){return{name:"catchError",next:function(r){return e(r),null}}};function a(e,r,n,t,u,o,a){try{var i=e[o](a),c=i.value}catch(e){return void n(e)}i.done?r(c):Promise.resolve(c).then(t,u)}function i(e){return function(){var r=this,n=arguments;return new Promise((function(t,u){var o=e.apply(r,n);function i(e){a(o,t,u,i,c,"next",e)}function c(e){a(o,t,u,i,c,"throw",e)}i(void 0)}))}}r.default=function(){var e={},r=function(e,r){return r(e)};return{createMiddleware:function(n){var t=n.preMiddleware,u=void 0===t?r:t,o=n.combineMiddleware;e=void 0===o?e:o,r=u},dispatch:function(n){var t=r(n,(function(e){return e})),u=function(r){return e[r.type](r)};return{data:u(t),pipe:function(){var e=arguments,r=this;return i(regeneratorRuntime.mark((function n(){var o,a,c,f,s,p;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:for(o=e.length,a=new Array(o),c=0;c<o;c++)a[c]=e[c];return f=a,s=function(){var e=i(regeneratorRuntime.mark((function e(r,n){var o,a,i,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n;case 3:o=e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),o=f.length&&"retry"===f[0].name?function(){return u(t)}:{error:e.t0};case 9:if(a=r[0],r.shift(),o.error||!r.length||"catchError"!==r[0].name){e.next=13;break}return e.abrupt("return",o);case 13:return i=r.length>0,e.next=16,a.next(o);case 16:return c=e.sent,e.abrupt("return",i?s(r,c):c);case 18:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(r,n){return e.apply(this,arguments)}}(),n.next=5,r.data;case 5:return p=n.sent,n.abrupt("return",s(f,p));case 7:case"end":return n.stop()}}),n)})))()}}}}}}])}));