/*! For license information please see d5715873e4541a5196acdf4a2c1b02345cb4009a.6a6491710907e81b8ea1.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"/0+H":function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var o=r(n("q1tI")),i=n("lwAK");function a(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.ampFirst,n=void 0!==e&&e,r=t.hybrid,o=void 0!==r&&r,i=t.hasQuery;return n||o&&(void 0!==i&&i)}e.isInAmpMode=a,e.useAmp=function(){return a(o.default.useContext(i.AmpStateContext))}},"0ZXT":function(t,e,n){"use strict";var r=n("1OyB"),o=n("vuIU"),i=n("JX7q"),a=n("Ji7U"),u=n("md7G"),c=n("foSv"),l=n("rePB"),f=n("q1tI"),s=f.createElement;function p(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var d=function(t){Object(a.a)(f,t);var e,n=(e=f,function(){var t,n=Object(c.a)(e);if(p()){var r=Object(c.a)(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return Object(u.a)(this,t)});function f(){var t;Object(r.a)(this,f);for(var e=arguments.length,o=new Array(e),a=0;a<e;a++)o[a]=arguments[a];return t=n.call.apply(n,[this].concat(o)),Object(l.a)(Object(i.a)(t),"checkHref",(function(t){return""!==t})),t}return Object(o.a)(f,[{key:"render",value:function(){var t=this.props,e=t.href,n=t.target,r=t.children;return s("a",{href:e,className:"bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded",target:n},r)}}]),f}(f.Component);e.a=d},"1OyB":function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return r}))},"8Kt/":function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var o=r(n("q1tI")),i=r(n("Xuae")),a=n("lwAK"),u=n("FYa8"),c=n("/0+H");function l(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[o.default.createElement("meta",{charSet:"utf-8"})];return t||e.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),e}function f(t,e){return"string"===typeof e||"number"===typeof e?t:e.type===o.default.Fragment?t.concat(o.default.Children.toArray(e.props.children).reduce((function(t,e){return"string"===typeof e||"number"===typeof e?t:t.concat(e)}),[])):t.concat(e)}e.defaultHead=l;var s=["name","httpEquiv","charSet","itemProp"];function p(t,e){return t.reduce((function(t,e){var n=o.default.Children.toArray(e.props.children);return t.concat(n)}),[]).reduce(f,[]).reverse().concat(l(e.inAmpMode)).filter(function(){var t=new Set,e=new Set,n=new Set,r={};return function(o){var i=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var a=o.key.slice(o.key.indexOf("$")+1);t.has(a)?i=!1:t.add(a)}switch(o.type){case"title":case"base":e.has(o.type)?i=!1:e.add(o.type);break;case"meta":for(var u=0,c=s.length;u<c;u++){var l=s[u];if(o.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?i=!1:n.add(l);else{var f=o.props[l],p=r[l]||new Set;p.has(f)?i=!1:(p.add(f),r[l]=p)}}}return i}}()).reverse().map((function(t,e){var n=t.key||e;return o.default.cloneElement(t,{key:n})}))}var d=i.default();function h(t){var e=t.children;return o.default.createElement(a.AmpStateContext.Consumer,null,(function(t){return o.default.createElement(u.HeadManagerContext.Consumer,null,(function(n){return o.default.createElement(d,{reduceComponentsToState:p,handleStateChange:n,inAmpMode:c.isInAmpMode(t)},e)}))}))}h.rewind=d.rewind,e.default=h},"8MrR":function(t,e,n){"use strict";var r=n("q1tI"),o=n.n(r),i=n("TSYQ"),a=n.n(i),u=n("YFqc"),c=n.n(u),l=n("8Kt/"),f=n.n(l),s=o.a.createElement;var p=function(){var t=Object(r.useState)(!1),e=t[0],n=t[1];return s("header",{className:"bg-gray-900"},s(f.a,null,s("title",null,"Hydrotik | Donovan Adams"),s("link",{rel:"shortcut icon",href:"/favicon.ico",type:"image/x-icon"}),s("link",{rel:"icon",href:"/favicon.ico",type:"image/x-icon"})),s("nav",{className:"flex flex-wrap md:flex-no-wrap items-center justify-between max-w-4xl mx-auto p-4 md:p-8"},s("div",{className:"flex items-center"},s("img",{src:"images/logo.svg",className:"mr-3 text-white w-10",alt:"Hydrotik Logo"}),s(c.a,{href:"".concat("/hydrotik","/")},s("a",{className:"text-white text-xl"},"Hydrotik"))),s("button",{className:"block md:hidden border border-white flex items-center px-3 py-2 rounded text-white",onClick:function(){return n(!e)}},s("svg",{role:"img",className:"fill-current h-3 w-3",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},s("title",null,"Menu"),s("path",{d:"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"}))),s("ul",{className:"".concat(e?"block":"hidden"," md:flex flex-col md:flex-row md:items-center md:justify-center text-sm w-full md:w-auto")},[{title:"Home",route:"".concat("/hydrotik","/")},{title:"About",route:"".concat("/hydrotik","/about")},{title:"Covid Visualization",route:"".concat("/hydrotik","/visualization")}].map((function(t){return s("li",{className:"mt-3 md:mt-0 md:ml-6",key:t.title},s(c.a,{href:t.route},s("a",{className:"block text-white",href:""},t.title)))})))))},d=n("0ZXT"),h=r.createElement,v=function(t){var e=t.footerTitle,n=void 0===e?"\xa9 ".concat((new Date).getFullYear()," Hydrotik"):e;return h("footer",{className:"bg-gray-900"},h("ul",{className:"flex items-center justify-between max-w-4xl mx-auto p-4 md:p-8 text-sm text-white"},h("li",null,n),h("li",null,h(d.a,{href:"https://github.com/hydrotik/hydrotik"},"Github")),h("li",null,h(d.a,{href:"https://www.linkedin.com/in/donovanadams/"},"Linkedin"))))},y=r.createElement;e.a=function(t){var e=t.children,n=t.className;return y("div",{className:a()("flex flex-col min-h-screen",n)},y(p,null),e,y(v,null))}},Bnag:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},EbDI:function(t,e){t.exports=function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}},Ijbi:function(t,e){t.exports=function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}},JX7q:function(t,e,n){"use strict";function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,"a",(function(){return r}))},Ji7U:function(t,e,n){"use strict";function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function o(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}n.d(e,"a",(function(){return o}))},RIqP:function(t,e,n){var r=n("Ijbi"),o=n("EbDI"),i=n("Bnag");t.exports=function(t){return r(t)||o(t)||i()}},TSYQ:function(t,e,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var i=typeof r;if("string"===i||"number"===i)t.push(r);else if(Array.isArray(r)&&r.length){var a=o.apply(null,r);a&&t.push(a)}else if("object"===i)for(var u in r)n.call(r,u)&&r[u]&&t.push(u)}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):void 0===(r=function(){return o}.apply(e,[]))||(t.exports=r)}()},Xuae:function(t,e,n){"use strict";var r=n("lwsE"),o=n("PJYZ"),i=n("W8MJ"),a=n("7W2i"),u=n("a1gu"),c=n("Nsbk"),l=n("RIqP");function f(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(e,"__esModule",{value:!0});var s=n("q1tI"),p=!1;e.default=function(){var t,e=new Set;function n(n){t=n.props.reduceComponentsToState(l(e),n.props),n.props.handleStateChange&&n.props.handleStateChange(t)}return(function(l){a(h,l);var s,d=(s=h,function(){var t,e=c(s);if(f()){var n=c(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return u(this,t)});function h(t){var i;return r(this,h),i=d.call(this,t),p&&(e.add(o(i)),n(o(i))),i}return i(h,null,[{key:"rewind",value:function(){var n=t;return t=void 0,e.clear(),n}}]),i(h,[{key:"componentDidMount",value:function(){e.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){e.delete(this),n(this)}},{key:"render",value:function(){return null}}]),h}(s.Component))}},YFqc:function(t,e,n){t.exports=n("cTJO")},cTJO:function(t,e,n){"use strict";var r=n("lwsE"),o=n("W8MJ"),i=n("7W2i"),a=n("a1gu"),u=n("Nsbk");function c(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var l=n("TqRt"),f=n("284h");e.__esModule=!0,e.default=void 0;var s,p=f(n("q1tI")),d=n("QmWs"),h=n("g/15"),v=l(n("nOHt")),y=n("elyg");function m(t){return t&&"object"===typeof t?(0,h.formatWithValidation)(t):t}var b=new Map,w=window.IntersectionObserver,g={};function x(){return s||(w?s=new w((function(t){t.forEach((function(t){if(b.has(t.target)){var e=b.get(t.target);(t.isIntersecting||t.intersectionRatio>0)&&(s.unobserve(t.target),b.delete(t.target),e())}}))}),{rootMargin:"200px"}):void 0)}var k=function(t){i(l,t);var e,n=(e=l,function(){var t,n=u(e);if(c()){var r=u(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return a(this,t)});function l(t){var e;return r(this,l),(e=n.call(this,t)).p=void 0,e.cleanUpListeners=function(){},e.formatUrls=function(t){var e=null,n=null,r=null;return function(o,i){if(r&&o===e&&i===n)return r;var a=t(o,i);return e=o,n=i,r=a,a}}((function(t,e){return{href:(0,y.addBasePath)(m(t)),as:e?(0,y.addBasePath)(m(e)):e}})),e.linkClicked=function(t){var n=t.currentTarget,r=n.nodeName,o=n.target;if("A"!==r||!(o&&"_self"!==o||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var i=e.formatUrls(e.props.href,e.props.as),a=i.href,u=i.as;if(function(t){var e=(0,d.parse)(t,!1,!0),n=(0,d.parse)((0,h.getLocationOrigin)(),!1,!0);return!e.host||e.protocol===n.protocol&&e.host===n.host}(a)){var c=window.location.pathname;a=(0,d.resolve)(c,a),u=u?(0,d.resolve)(c,u):a,t.preventDefault();var l=e.props.scroll;null==l&&(l=u.indexOf("#")<0),v.default[e.props.replace?"replace":"push"](a,u,{shallow:e.props.shallow}).then((function(t){t&&l&&(window.scrollTo(0,0),document.body.focus())}))}}},e.p=!1!==t.prefetch,e}return o(l,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var t=window.location.pathname,e=this.formatUrls(this.props.href,this.props.as),n=e.href,r=e.as,o=(0,d.resolve)(t,n);return[o,r?(0,d.resolve)(t,r):o]}},{key:"handleRef",value:function(t){var e=this;this.p&&w&&t&&t.tagName&&(this.cleanUpListeners(),g[this.getPaths().join("%")]||(this.cleanUpListeners=function(t,e){var n=x();return n?(n.observe(t),b.set(t,e),function(){try{n.unobserve(t)}catch(e){console.error(e)}b.delete(t)}):function(){}}(t,(function(){e.prefetch()}))))}},{key:"prefetch",value:function(t){if(this.p){var e=this.getPaths();v.default.prefetch(e[0],e[1],t).catch((function(t){0})),g[e.join("%")]=!0}}},{key:"render",value:function(){var t=this,e=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,o=n.as;"string"===typeof e&&(e=p.default.createElement("a",null,e));var i=p.Children.only(e),a={ref:function(e){t.handleRef(e),i&&"object"===typeof i&&i.ref&&("function"===typeof i.ref?i.ref(e):"object"===typeof i.ref&&(i.ref.current=e))},onMouseEnter:function(e){i.props&&"function"===typeof i.props.onMouseEnter&&i.props.onMouseEnter(e),t.prefetch({priority:!0})},onClick:function(e){i.props&&"function"===typeof i.props.onClick&&i.props.onClick(e),e.defaultPrevented||t.linkClicked(e)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(a.href=o||r),p.default.cloneElement(i,a)}}]),l}(p.Component);e.default=k},foSv:function(t,e,n){"use strict";function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",(function(){return r}))},lwAK:function(t,e,n){"use strict";var r=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});var o=r(n("q1tI"));e.AmpStateContext=o.createContext({})},md7G:function(t,e,n){"use strict";function r(t){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t){return(o="function"===typeof Symbol&&"symbol"===r(Symbol.iterator)?function(t){return r(t)}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":r(t)})(t)}n.d(e,"a",(function(){return a}));var i=n("JX7q");function a(t,e){return!e||"object"!==o(e)&&"function"!==typeof e?Object(i.a)(t):e}},rePB:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return r}))},vuIU:function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}n.d(e,"a",(function(){return o}))}}]);