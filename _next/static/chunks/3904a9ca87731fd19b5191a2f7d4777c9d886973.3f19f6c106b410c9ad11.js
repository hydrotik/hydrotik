(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"/0+H":function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var o=r(n("q1tI")),i=n("lwAK");function a(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.ampFirst,n=void 0!==e&&e,r=t.hybrid,o=void 0!==r&&r,i=t.hasQuery;return n||o&&(void 0!==i&&i)}e.isInAmpMode=a,e.useAmp=function(){return a(o.default.useContext(i.AmpStateContext))}},"1OyB":function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return r}))},"8Kt/":function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var o=r(n("q1tI")),i=r(n("Xuae")),a=n("lwAK"),u=n("FYa8"),c=n("/0+H");function l(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[o.default.createElement("meta",{charSet:"utf-8"})];return t||e.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),e}function s(t,e){return"string"===typeof e||"number"===typeof e?t:e.type===o.default.Fragment?t.concat(o.default.Children.toArray(e.props.children).reduce((function(t,e){return"string"===typeof e||"number"===typeof e?t:t.concat(e)}),[])):t.concat(e)}e.defaultHead=l;var f=["name","httpEquiv","charSet","itemProp"];function p(t,e){return t.reduce((function(t,e){var n=o.default.Children.toArray(e.props.children);return t.concat(n)}),[]).reduce(s,[]).reverse().concat(l(e.inAmpMode)).filter(function(){var t=new Set,e=new Set,n=new Set,r={};return function(o){var i=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var a=o.key.slice(o.key.indexOf("$")+1);t.has(a)?i=!1:t.add(a)}switch(o.type){case"title":case"base":e.has(o.type)?i=!1:e.add(o.type);break;case"meta":for(var u=0,c=f.length;u<c;u++){var l=f[u];if(o.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?i=!1:n.add(l);else{var s=o.props[l],p=r[l]||new Set;p.has(s)?i=!1:(p.add(s),r[l]=p)}}}return i}}()).reverse().map((function(t,e){var n=t.key||e;return o.default.cloneElement(t,{key:n})}))}var h=i.default();function d(t){var e=t.children;return o.default.createElement(a.AmpStateContext.Consumer,null,(function(t){return o.default.createElement(u.HeadManagerContext.Consumer,null,(function(n){return o.default.createElement(h,{reduceComponentsToState:p,handleStateChange:n,inAmpMode:c.isInAmpMode(t)},e)}))}))}d.rewind=h.rewind,e.default=d},"8MrR":function(t,e,n){"use strict";var r=n("q1tI"),o=n("TSYQ"),i=n.n(o),a=n("vNn/"),u=n("YFqc"),c=n.n(u),l=r.createElement,s=function(t){t.children;var e=t.footerTitle,n=void 0===e?"\xa9 "+(new Date).getFullYear()+" Hydrotik":e;return l("footer",{className:"bg-red-300"},l("ul",{className:"flex items-center justify-between max-w-4xl mx-auto p-4 md:p-8 text-sm text-gray-900"},l("li",null,n),l("li",null,l(c.a,{href:"https://github.com/hydrotik"},l("a",{className:"btn-blue no-underline"},"Github")))))},f=r.createElement;e.a=function(t){var e=t.children,n=(t.title,t.className);return f("div",{className:i()("flex flex-col min-h-screen",n)},f(a.a,null),e,f(s,null))}},"8oxB":function(t,e){var n,r,o=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function u(t){if(n===setTimeout)return setTimeout(t,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:i}catch(t){n=i}try{r="function"===typeof clearTimeout?clearTimeout:a}catch(t){r=a}}();var c,l=[],s=!1,f=-1;function p(){s&&c&&(s=!1,c.length?l=c.concat(l):f=-1,l.length&&h())}function h(){if(!s){var t=u(p);s=!0;for(var e=l.length;e;){for(c=l,l=[];++f<e;)c&&c[f].run();f=-1,e=l.length}c=null,s=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function d(t,e){this.fun=t,this.array=e}function m(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];l.push(new d(t,e)),1!==l.length||s||u(h)},d.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},Bnag:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},EbDI:function(t,e){t.exports=function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}},Ijbi:function(t,e){t.exports=function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}},JX7q:function(t,e,n){"use strict";function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,"a",(function(){return r}))},Ji7U:function(t,e,n){"use strict";function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function o(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}n.d(e,"a",(function(){return o}))},RIqP:function(t,e,n){var r=n("Ijbi"),o=n("EbDI"),i=n("Bnag");t.exports=function(t){return r(t)||o(t)||i()}},TSYQ:function(t,e,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var i=typeof r;if("string"===i||"number"===i)t.push(r);else if(Array.isArray(r)&&r.length){var a=o.apply(null,r);a&&t.push(a)}else if("object"===i)for(var u in r)n.call(r,u)&&r[u]&&t.push(u)}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):void 0===(r=function(){return o}.apply(e,[]))||(t.exports=r)}()},Xuae:function(t,e,n){"use strict";var r=n("lwsE"),o=n("PJYZ"),i=n("W8MJ"),a=n("a1gu"),u=n("Nsbk"),c=n("7W2i"),l=n("RIqP");function s(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(e,"__esModule",{value:!0});var f=n("q1tI"),p=!1;e.default=function(){var t,e=new Set;function n(n){t=n.props.reduceComponentsToState(l(e),n.props),n.props.handleStateChange&&n.props.handleStateChange(t)}return function(l){c(d,l);var f,h=(f=d,function(){var t,e=u(f);if(s()){var n=u(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return a(this,t)});function d(t){var i;return r(this,d),i=h.call(this,t),p&&(e.add(o(i)),n(o(i))),i}return i(d,null,[{key:"rewind",value:function(){var n=t;return t=void 0,e.clear(),n}}]),i(d,[{key:"componentDidMount",value:function(){e.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){e.delete(this),n(this)}},{key:"render",value:function(){return null}}]),d}(f.Component)}},YFqc:function(t,e,n){t.exports=n("cTJO")},cTJO:function(t,e,n){"use strict";var r=n("lwsE"),o=n("W8MJ"),i=n("a1gu"),a=n("Nsbk"),u=n("7W2i");function c(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var l=n("TqRt"),s=n("284h");e.__esModule=!0,e.default=void 0;var f,p=s(n("q1tI")),h=n("QmWs"),d=n("g/15"),m=l(n("nOHt"));function v(t){return t&&"object"===typeof t?(0,d.formatWithValidation)(t):t}var y=new Map,b=window.IntersectionObserver,g={};function w(){return f||(b?f=new b((function(t){t.forEach((function(t){if(y.has(t.target)){var e=y.get(t.target);(t.isIntersecting||t.intersectionRatio>0)&&(f.unobserve(t.target),y.delete(t.target),e())}}))}),{rootMargin:"200px"}):void 0)}var x=function(t){u(l,t);var e,n=(e=l,function(){var t,n=a(e);if(c()){var r=a(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return i(this,t)});function l(t){var e;return r(this,l),(e=n.call(this,t)).p=void 0,e.cleanUpListeners=function(){},e.formatUrls=function(t){var e=null,n=null,r=null;return function(o,i){if(r&&o===e&&i===n)return r;var a=t(o,i);return e=o,n=i,r=a,a}}((function(t,e){return{href:v(t),as:e?v(e):e}})),e.linkClicked=function(t){var n=t.currentTarget,r=n.nodeName,o=n.target;if("A"!==r||!(o&&"_self"!==o||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var i=e.formatUrls(e.props.href,e.props.as),a=i.href,u=i.as;if(function(t){var e=(0,h.parse)(t,!1,!0),n=(0,h.parse)((0,d.getLocationOrigin)(),!1,!0);return!e.host||e.protocol===n.protocol&&e.host===n.host}(a)){var c=window.location.pathname;a=(0,h.resolve)(c,a),u=u?(0,h.resolve)(c,u):a,t.preventDefault();var l=e.props.scroll;null==l&&(l=u.indexOf("#")<0),m.default[e.props.replace?"replace":"push"](a,u,{shallow:e.props.shallow}).then((function(t){t&&l&&(window.scrollTo(0,0),document.body.focus())}))}}},e.p=!1!==t.prefetch,e}return o(l,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var t=window.location.pathname,e=this.formatUrls(this.props.href,this.props.as),n=e.href,r=e.as,o=(0,h.resolve)(t,n);return[o,r?(0,h.resolve)(t,r):o]}},{key:"handleRef",value:function(t){var e=this;this.p&&b&&t&&t.tagName&&(this.cleanUpListeners(),g[this.getPaths().join("%")]||(this.cleanUpListeners=function(t,e){var n=w();return n?(n.observe(t),y.set(t,e),function(){try{n.unobserve(t)}catch(e){console.error(e)}y.delete(t)}):function(){}}(t,(function(){e.prefetch()}))))}},{key:"prefetch",value:function(t){if(this.p){var e=this.getPaths();m.default.prefetch(e[0],e[1],t).catch((function(t){0})),g[e.join("%")]=!0}}},{key:"render",value:function(){var t=this,e=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,o=n.as;"string"===typeof e&&(e=p.default.createElement("a",null,e));var i=p.Children.only(e),a={ref:function(e){t.handleRef(e),i&&"object"===typeof i&&i.ref&&("function"===typeof i.ref?i.ref(e):"object"===typeof i.ref&&(i.ref.current=e))},onMouseEnter:function(e){i.props&&"function"===typeof i.props.onMouseEnter&&i.props.onMouseEnter(e),t.prefetch({priority:!0})},onClick:function(e){i.props&&"function"===typeof i.props.onClick&&i.props.onClick(e),e.defaultPrevented||t.linkClicked(e)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(a.href=o||r),p.default.cloneElement(i,a)}}]),l}(p.Component);e.default=x},foSv:function(t,e,n){"use strict";function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",(function(){return r}))},lwAK:function(t,e,n){"use strict";var r=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});var o=r(n("q1tI"));e.AmpStateContext=o.createContext({})},md7G:function(t,e,n){"use strict";function r(t){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t){return(o="function"===typeof Symbol&&"symbol"===r(Symbol.iterator)?function(t){return r(t)}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":r(t)})(t)}n.d(e,"a",(function(){return a}));var i=n("JX7q");function a(t,e){return!e||"object"!==o(e)&&"function"!==typeof e?Object(i.a)(t):e}},rePB:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return r}))},uYCC:function(t,e,n){"use strict";n.d(e,"a",(function(){return h}));var r=n("1OyB"),o=n("vuIU"),i=n("JX7q"),a=n("md7G"),u=n("foSv"),c=n("Ji7U"),l=n("rePB"),s=n("q1tI"),f=n.n(s).a.createElement;function p(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var h=function(t){Object(c.a)(s,t);var e,n=(e=s,function(){var t,n=Object(u.a)(e);if(p()){var r=Object(u.a)(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return Object(a.a)(this,t)});function s(){var t;Object(r.a)(this,s);for(var e=arguments.length,o=new Array(e),a=0;a<e;a++)o[a]=arguments[a];return t=n.call.apply(n,[this].concat(o)),Object(l.a)(Object(i.a)(t),"loadingImage",null),Object(l.a)(Object(i.a)(t),"state",{currentImage:t.props.preview,loading:!0}),Object(l.a)(Object(i.a)(t),"fetchImage",(function(e){var n=new Image;n.onload=function(){return t.setState({currentImage:t.loadingImage.src,loading:!1})},n.src=e,t.loadingImage=n})),Object(l.a)(Object(i.a)(t),"style",(function(t){return{transition:"0.5s filter linear",filter:"".concat(t?"blur(50px)":"")}})),t}return Object(o.a)(s,[{key:"componentDidMount",value:function(){this.fetchImage(this.props.image)}},{key:"componentDidUpdate",value:function(t){var e=this;t.image!==this.props.image&&this.setState({currentImage:t.preview,loading:!0},(function(){e.fetchImage(t.image)}))}},{key:"componentWillUnmount",value:function(){this.loadingImage&&(this.loadingImage.onload=null)}},{key:"render",value:function(){var t=this.state,e=t.currentImage,n=t.loading,r=this.props,o=r.alt,i=r.className,a=r.srcSet;return f("img",{style:this.style(n),src:e,alt:o,className:i,srcSet:a})}}]),s}(s.Component)},"vNn/":function(t,e,n){"use strict";(function(t){var r=n("q1tI"),o=n.n(r),i=n("YFqc"),a=n.n(i),u=n("8Kt/"),c=n.n(u),l=o.a.createElement;e.a=function(){var e=Object(r.useState)(!1),n=e[0],o=e[1];return l("header",{className:"bg-gray-900"},l(c.a,null,l("link",{rel:"shortcut icon",href:"/favicon.ico",type:"image/x-icon"}),l("link",{rel:"icon",href:"/favicon.ico",type:"image/x-icon"})),l("div",{className:"flex flex-wrap md:flex-no-wrap items-center justify-between max-w-4xl mx-auto p-4 md:p-8"},l("div",{className:"flex items-center"},l("img",{src:"images/logo.svg",className:"mr-3 text-white w-10"}),l(a.a,{href:"/"},l("a",{className:"text-white text-xl"},"Hydrotik"))),l("button",{className:"block md:hidden border border-white flex items-center px-3 py-2 rounded text-white",onClick:function(){return o(!n)}},l("svg",{className:"fill-current h-3 w-3",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},l("title",null,"Menu"),l("path",{d:"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"}))),l("ul",{className:"".concat(n?"block":"hidden"," md:flex flex-col md:flex-row md:items-center md:justify-center text-sm w-full md:w-auto")},[{title:"Home",route:t.env.BACKEND_URL+"/"},{title:"About",route:t.env.BACKEND_URL+"/about"}].map((function(t){return l("li",{className:"mt-3 md:mt-0 md:ml-6",key:t.title},l(a.a,{href:t.route},l("a",{className:"block text-white"},t.title)))})))))}}).call(this,n("8oxB"))},vuIU:function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}n.d(e,"a",(function(){return o}))}}]);