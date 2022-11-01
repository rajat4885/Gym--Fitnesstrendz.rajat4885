;
(self.AMP=self.AMP||[]).push({m:0,v:"2210172057000",n:"amp-anim",ev:"0.1",l:!0,f:function(t,n){!function(){function n(t,r){return(n=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,r)}function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,n){if(n&&("object"===e(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}var o=Array.isArray;function u(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}var f=Object.prototype;function a(t){return(t.ownerDocument||t).defaultView}function c(t){return t.parent&&t.parent!=t}function l(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},e=r.needsRootBounds,i=r.rootMargin,o=r.threshold,u=c(n)&&(e||i)?n.document:void 0;return new n.IntersectionObserver(t,{threshold:o,root:u,rootMargin:i})}f.hasOwnProperty,f.toString;var s,v=new WeakMap,h=new WeakMap;function b(t){for(var n=new Set,r=t.length-1;r>=0;r--){var e=t[r],i=e.target;if(!n.has(i)){n.add(i);var o=h.get(i);if(o)for(var u=0;u<o.length;u++)(0,o[u])(e)}}}function d(t,n,r,e){for(var i,f,a=function(t,n){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(r)return(r=r.call(t)).next.bind(r);if(Array.isArray(t)||(r=function(t,n){if(t){if("string"==typeof t)return u(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u(t,n):void 0}}(t))||t&&"number"==typeof t.length){r&&(t=r);var e=0;return function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(o(i=t)?i:[i]);!(f=a()).done;){var c=f.value,l=n.getAttribute(c);null!==l?r.setAttribute(c,l):e&&r.removeAttribute(c)}}var y=["Webkit","webkit","Moz","moz","ms","O","o"];function m(t,n,r,e,i){var o=function(t,n,r){if(n.startsWith("--"))return n;var e;s||(e=Object.create(null),s=e);var i=s[n];if(!i||r){if(i=n,void 0===t[n]){var o=function(t){return t.charAt(0).toUpperCase()+t.slice(1)}(n),u=function(t,n){for(var r=0;r<y.length;r++){var e=y[r]+n;if(void 0!==t[e])return e}return""}(t,o);void 0!==t[u]&&(i=u)}r||(s[n]=i)}return i}(t.style,n,i);if(o){var u,f=e?r+e:r;t.style.setProperty((u=o.replace(/[A-Z]/g,(function(t){return"-"+t.toLowerCase()})),y.some((function(t){return u.startsWith(t+"-")}))?"-".concat(u):u),f)}}function A(t,n){void 0===n&&(n=t.hasAttribute("hidden")),n?t.removeAttribute("hidden"):t.setAttribute("hidden","")}self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null},self.__AMP_LOG;var p=["alt","aria-label","aria-describedby","aria-labelledby"],j=["src","srcset"],w="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",g=function(t){!function(t,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(r&&r.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),r&&n(t,r)}(f,t);var e,o,u=(e=f,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,n=r(e);if(o){var u=r(this).constructor;t=Reflect.construct(n,arguments,u)}else t=n.apply(this,arguments);return i(this,t)});function f(t){var n;return(n=u.call(this,t)).ke=null,n.Vg=null,n}var c=f.prototype;return c.isLayoutSupported=function(t){return function(t){return"fixed"==t||"fixed-height"==t||"responsive"==t||"fill"==t||"flex-item"==t||"fluid"==t||"intrinsic"==t}(t)},c.buildCallback=function(){var t,n,r;this.ke=new Image,this.ke.setAttribute("decoding","async"),d(p,this.element,this.ke),(t=this.ke).classList.add("i-amphtml-fill-content"),t.classList.add("i-amphtml-replaced-content"),n=this.element,r=this.ke,n.hasAttribute("object-fit")&&m(r,"object-fit",n.getAttribute("object-fit")),n.hasAttribute("object-position")&&m(r,"object-position",n.getAttribute("object-position")),"img"==this.element.getAttribute("role")&&(this.element.removeAttribute("role"),this.user().error("AMP-ANIM","Setting role=img on amp-anim elements breaks screen readers. Please just set alt or ARIA attributes, they will be correctly propagated for the underlying <img> element.")),A(this.ke,!this.getPlaceholder()),this.element.appendChild(this.ke)},c.isRelayoutNeeded=function(){return!0},c.layoutCallback=function(){var t=this,n=this.ke;return d(j,this.element,n,!0),function(t){if(!t.hasAttribute("src")&&"srcset"in t==0){var n=t.getAttribute("srcset")||"",r=/\S+/.exec(n);if(null==r)return;var e=r[0];t.setAttribute("src",e)}}(n),this.loadPromise(n).then((function(){t.Vg=function(t,n,r){var e=a(t),i=v.get(e);i||v.set(e,i=l(b,e));var o=h.get(t);return o||(o=[],h.set(t,o)),o.push(n),i.observe(t),function(){!function(t,n){var r,e,i,o=h.get(t);if(o&&(e=n,-1!=(i=(r=o).indexOf(e))&&(r.splice(i,1),1)&&!o.length)){var u=a(t),f=v.get(u);null==f||f.unobserve(t),h.delete(t)}}(t,n)}}(t.element,(function(n){var r=n.isIntersecting;return t.Jg(r)}))}))},c.firstLayoutCompleted=function(){},c.unlayoutCallback=function(){var t;return null===(t=this.Vg)||void 0===t||t.call(this),this.Vg=null,this.Jg(!1),this.ke.src=w,this.ke.srcset=w,!0},c.Jg=function(t){this.togglePlaceholder(!t),A(this.ke,t)},f}(t.BaseElement);t.registerElement("amp-anim",g)}();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-anim-0.1.js.map