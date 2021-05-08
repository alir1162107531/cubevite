import{v as e}from"./index.19b94127.js";var t=function(e,t){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}},r=Object.prototype.toString;function n(e){return"[object Array]"===r.call(e)}function o(e){return void 0===e}function s(e){return null!==e&&"object"==typeof e}function i(e){if("[object Object]"!==r.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function a(e){return"[object Function]"===r.call(e)}function u(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),n(e))for(var r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.call(null,e[s],s,e)}var c={isArray:n,isArrayBuffer:function(e){return"[object ArrayBuffer]"===r.call(e)},isBuffer:function(e){return null!==e&&!o(e)&&null!==e.constructor&&!o(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:s,isPlainObject:i,isUndefined:o,isDate:function(e){return"[object Date]"===r.call(e)},isFile:function(e){return"[object File]"===r.call(e)},isBlob:function(e){return"[object Blob]"===r.call(e)},isFunction:a,isStream:function(e){return s(e)&&a(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:u,merge:function e(){var t={};function r(r,o){i(t[o])&&i(r)?t[o]=e(t[o],r):i(r)?t[o]=e({},r):n(r)?t[o]=r.slice():t[o]=r}for(var o=0,s=arguments.length;o<s;o++)u(arguments[o],r);return t},extend:function(e,r,n){return u(r,(function(r,o){e[o]=n&&"function"==typeof r?t(r,n):r})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}};function f(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var p=function(e,t,r){if(!t)return e;var n;if(r)n=r(t);else if(c.isURLSearchParams(t))n=t.toString();else{var o=[];c.forEach(t,(function(e,t){null!=e&&(c.isArray(e)?t+="[]":e=[e],c.forEach(e,(function(e){c.isDate(e)?e=e.toISOString():c.isObject(e)&&(e=JSON.stringify(e)),o.push(f(t)+"="+f(e))})))})),n=o.join("&")}if(n){var s=e.indexOf("#");-1!==s&&(e=e.slice(0,s)),e+=(-1===e.indexOf("?")?"?":"&")+n}return e};function d(){this.handlers=[]}d.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},d.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},d.prototype.forEach=function(e){c.forEach(this.handlers,(function(t){null!==t&&e(t)}))};var l=d,h=function(e,t,r){return c.forEach(r,(function(r){e=r(e,t)})),e},m=function(e){return!(!e||!e.__CANCEL__)},g=function(e,t){c.forEach(e,(function(r,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n])}))},y=function(e,t,r,n,o){return function(e,t,r,n,o){return e.config=t,r&&(e.code=r),e.request=n,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}(new Error(e),t,r,n,o)},v=c.isStandardBrowserEnv()?{write:function(e,t,r,n,o,s){var i=[];i.push(e+"="+encodeURIComponent(t)),c.isNumber(r)&&i.push("expires="+new Date(r).toGMTString()),c.isString(n)&&i.push("path="+n),c.isString(o)&&i.push("domain="+o),!0===s&&i.push("secure"),document.cookie=i.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}},w=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],b=c.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function n(e){var n=e;return t&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return e=n(window.location.href),function(t){var r=c.isString(t)?n(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return!0},E=function(e){return new Promise((function(t,r){var n=e.data,o=e.headers;c.isFormData(n)&&delete o["Content-Type"];var s=new XMLHttpRequest;if(e.auth){var i=e.auth.username||"",a=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.Authorization="Basic "+btoa(i+":"+a)}var u,f,d=(u=e.baseURL,f=e.url,u&&!/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(f)?function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}(u,f):f);if(s.open(e.method.toUpperCase(),p(d,e.params,e.paramsSerializer),!0),s.timeout=e.timeout,s.onreadystatechange=function(){if(s&&4===s.readyState&&(0!==s.status||s.responseURL&&0===s.responseURL.indexOf("file:"))){var n,o,i,a,u,f="getAllResponseHeaders"in s?(n=s.getAllResponseHeaders(),u={},n?(c.forEach(n.split("\n"),(function(e){if(a=e.indexOf(":"),o=c.trim(e.substr(0,a)).toLowerCase(),i=c.trim(e.substr(a+1)),o){if(u[o]&&w.indexOf(o)>=0)return;u[o]="set-cookie"===o?(u[o]?u[o]:[]).concat([i]):u[o]?u[o]+", "+i:i}})),u):u):null,p={data:e.responseType&&"text"!==e.responseType?s.response:s.responseText,status:s.status,statusText:s.statusText,headers:f,config:e,request:s};!function(e,t,r){var n=r.config.validateStatus;r.status&&n&&!n(r.status)?t(y("Request failed with status code "+r.status,r.config,null,r.request,r)):e(r)}(t,r,p),s=null}},s.onabort=function(){s&&(r(y("Request aborted",e,"ECONNABORTED",s)),s=null)},s.onerror=function(){r(y("Network Error",e,null,s)),s=null},s.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),r(y(t,e,"ECONNABORTED",s)),s=null},c.isStandardBrowserEnv()){var l=(e.withCredentials||b(d))&&e.xsrfCookieName?v.read(e.xsrfCookieName):void 0;l&&(o[e.xsrfHeaderName]=l)}if("setRequestHeader"in s&&c.forEach(o,(function(e,t){void 0===n&&"content-type"===t.toLowerCase()?delete o[t]:s.setRequestHeader(t,e)})),c.isUndefined(e.withCredentials)||(s.withCredentials=!!e.withCredentials),e.responseType)try{s.responseType=e.responseType}catch(h){if("json"!==e.responseType)throw h}"function"==typeof e.onDownloadProgress&&s.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&s.upload&&s.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){s&&(s.abort(),r(e),s=null)})),n||(n=null),s.send(n)}))},x={"Content-Type":"application/x-www-form-urlencoded"};function C(e,t){!c.isUndefined(e)&&c.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var j,R={adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(j=E),j),transformRequest:[function(e,t){return g(t,"Accept"),g(t,"Content-Type"),c.isFormData(e)||c.isArrayBuffer(e)||c.isBuffer(e)||c.isStream(e)||c.isFile(e)||c.isBlob(e)?e:c.isArrayBufferView(e)?e.buffer:c.isURLSearchParams(e)?(C(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):c.isObject(e)?(C(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(t){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300}};R.headers={common:{Accept:"application/json, text/plain, */*"}},c.forEach(["delete","get","head"],(function(e){R.headers[e]={}})),c.forEach(["post","put","patch"],(function(e){R.headers[e]=c.merge(x)}));var S=R;function A(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var O=function(e){return A(e),e.headers=e.headers||{},e.data=h(e.data,e.headers,e.transformRequest),e.headers=c.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),c.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||S.adapter)(e).then((function(t){return A(e),t.data=h(t.data,t.headers,e.transformResponse),t}),(function(t){return m(t)||(A(e),t&&t.response&&(t.response.data=h(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))},N=function(e,t){t=t||{};var r={},n=["url","method","data"],o=["headers","auth","proxy","params"],s=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],i=["validateStatus"];function a(e,t){return c.isPlainObject(e)&&c.isPlainObject(t)?c.merge(e,t):c.isPlainObject(t)?c.merge({},t):c.isArray(t)?t.slice():t}function u(n){c.isUndefined(t[n])?c.isUndefined(e[n])||(r[n]=a(void 0,e[n])):r[n]=a(e[n],t[n])}c.forEach(n,(function(e){c.isUndefined(t[e])||(r[e]=a(void 0,t[e]))})),c.forEach(o,u),c.forEach(s,(function(n){c.isUndefined(t[n])?c.isUndefined(e[n])||(r[n]=a(void 0,e[n])):r[n]=a(void 0,t[n])})),c.forEach(i,(function(n){n in t?r[n]=a(e[n],t[n]):n in e&&(r[n]=a(void 0,e[n]))}));var f=n.concat(o).concat(s).concat(i),p=Object.keys(e).concat(Object.keys(t)).filter((function(e){return-1===f.indexOf(e)}));return c.forEach(p,u),r};function U(e){this.defaults=e,this.interceptors={request:new l,response:new l}}U.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=N(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[O,void 0],r=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)r=r.then(t.shift(),t.shift());return r},U.prototype.getUri=function(e){return e=N(this.defaults,e),p(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},c.forEach(["delete","get","head","options"],(function(e){U.prototype[e]=function(t,r){return this.request(N(r||{},{method:e,url:t,data:(r||{}).data}))}})),c.forEach(["post","put","patch"],(function(e){U.prototype[e]=function(t,r,n){return this.request(N(n||{},{method:e,url:t,data:r}))}}));var B=U;function T(e){this.message=e}T.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},T.prototype.__CANCEL__=!0;var P=T;function L(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var r=this;e((function(e){r.reason||(r.reason=new P(e),t(r.reason))}))}L.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},L.source=function(){var e;return{token:new L((function(t){e=t})),cancel:e}};var q=L;function k(e){var r=new B(e),n=t(B.prototype.request,r);return c.extend(n,B.prototype,r),c.extend(n,r),n}var D=k(S);D.Axios=B,D.create=function(e){return k(N(D.defaults,e))},D.Cancel=P,D.CancelToken=q,D.isCancel=m,D.all=function(e){return Promise.all(e)},D.spread=function(e){return function(t){return e.apply(null,t)}},D.isAxiosError=function(e){return"object"==typeof e&&!0===e.isAxiosError};var F=D,H=D;F.default=H;const z=F.create({baseURL:"https://api.github.com",timeout:2e4});z.interceptors.request.use((e=>e),(e=>Promise.reject(e))),z.interceptors.response.use((e=>e),(t=>{if(t.response&&t.response.data){const r=t.response,n=r.status,o=r.data.message;e.error(`Code: ${n},Message:${o}`),console.error("[Axios Error]",r)}else e.error(`${t}`);return Promise.reject(t)}));export{z as a};
