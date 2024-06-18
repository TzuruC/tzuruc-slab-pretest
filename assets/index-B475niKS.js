(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function Te(e,t){return function(){return e.apply(t,arguments)}}const{toString:Xe}=Object.prototype,{getPrototypeOf:se}=Object,v=(e=>t=>{const n=Xe.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),A=e=>(e=e.toLowerCase(),t=>v(t)===e),W=e=>t=>typeof t===e,{isArray:D}=Array,U=W("undefined");function Qe(e){return e!==null&&!U(e)&&e.constructor!==null&&!U(e.constructor)&&x(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Ae=A("ArrayBuffer");function Ze(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Ae(e.buffer),t}const Ye=W("string"),x=W("function"),Ce=W("number"),J=e=>e!==null&&typeof e=="object",et=e=>e===!0||e===!1,q=e=>{if(v(e)!=="object")return!1;const t=se(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},tt=A("Date"),nt=A("File"),rt=A("Blob"),ot=A("FileList"),st=e=>J(e)&&x(e.pipe),it=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||x(e.append)&&((t=v(e))==="formdata"||t==="object"&&x(e.toString)&&e.toString()==="[object FormData]"))},at=A("URLSearchParams"),[ct,lt,ut,ft]=["ReadableStream","Request","Response","Headers"].map(A),dt=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function M(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,o;if(typeof e!="object"&&(e=[e]),D(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),s=i.length;let a;for(r=0;r<s;r++)a=i[r],t.call(null,e[a],a,e)}}function Ne(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,o;for(;r-- >0;)if(o=n[r],t===o.toLowerCase())return o;return null}const Pe=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Fe=e=>!U(e)&&e!==Pe;function Z(){const{caseless:e}=Fe(this)&&this||{},t={},n=(r,o)=>{const i=e&&Ne(t,o)||o;q(t[i])&&q(r)?t[i]=Z(t[i],r):q(r)?t[i]=Z({},r):D(r)?t[i]=r.slice():t[i]=r};for(let r=0,o=arguments.length;r<o;r++)arguments[r]&&M(arguments[r],n);return t}const ht=(e,t,n,{allOwnKeys:r}={})=>(M(t,(o,i)=>{n&&x(o)?e[i]=Te(o,n):e[i]=o},{allOwnKeys:r}),e),pt=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),mt=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},yt=(e,t,n,r)=>{let o,i,s;const a={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),i=o.length;i-- >0;)s=o[i],(!r||r(s,e,t))&&!a[s]&&(t[s]=e[s],a[s]=!0);e=n!==!1&&se(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},gt=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},bt=e=>{if(!e)return null;if(D(e))return e;let t=e.length;if(!Ce(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},wt=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&se(Uint8Array)),Et=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let o;for(;(o=r.next())&&!o.done;){const i=o.value;t.call(e,i[0],i[1])}},St=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Rt=A("HTMLFormElement"),Ot=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,o){return r.toUpperCase()+o}),de=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),xt=A("RegExp"),_e=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};M(n,(o,i)=>{let s;(s=t(o,i,e))!==!1&&(r[i]=s||o)}),Object.defineProperties(e,r)},Tt=e=>{_e(e,(t,n)=>{if(x(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(x(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},At=(e,t)=>{const n={},r=o=>{o.forEach(i=>{n[i]=!0})};return D(e)?r(e):r(String(e).split(t)),n},Ct=()=>{},Nt=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t,K="abcdefghijklmnopqrstuvwxyz",he="0123456789",Le={DIGIT:he,ALPHA:K,ALPHA_DIGIT:K+K.toUpperCase()+he},Pt=(e=16,t=Le.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function Ft(e){return!!(e&&x(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const _t=e=>{const t=new Array(10),n=(r,o)=>{if(J(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[o]=r;const i=D(r)?[]:{};return M(r,(s,a)=>{const u=n(s,o+1);!U(u)&&(i[a]=u)}),t[o]=void 0,i}}return r};return n(e,0)},Lt=A("AsyncFunction"),Dt=e=>e&&(J(e)||x(e))&&x(e.then)&&x(e.catch),c={isArray:D,isArrayBuffer:Ae,isBuffer:Qe,isFormData:it,isArrayBufferView:Ze,isString:Ye,isNumber:Ce,isBoolean:et,isObject:J,isPlainObject:q,isReadableStream:ct,isRequest:lt,isResponse:ut,isHeaders:ft,isUndefined:U,isDate:tt,isFile:nt,isBlob:rt,isRegExp:xt,isFunction:x,isStream:st,isURLSearchParams:at,isTypedArray:wt,isFileList:ot,forEach:M,merge:Z,extend:ht,trim:dt,stripBOM:pt,inherits:mt,toFlatObject:yt,kindOf:v,kindOfTest:A,endsWith:gt,toArray:bt,forEachEntry:Et,matchAll:St,isHTMLForm:Rt,hasOwnProperty:de,hasOwnProp:de,reduceDescriptors:_e,freezeMethods:Tt,toObjectSet:At,toCamelCase:Ot,noop:Ct,toFiniteNumber:Nt,findKey:Ne,global:Pe,isContextDefined:Fe,ALPHABET:Le,generateString:Pt,isSpecCompliantForm:Ft,toJSONObject:_t,isAsyncFn:Lt,isThenable:Dt};function p(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}c.inherits(p,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:c.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const De=p.prototype,Be={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Be[e]={value:e}});Object.defineProperties(p,Be);Object.defineProperty(De,"isAxiosError",{value:!0});p.from=(e,t,n,r,o,i)=>{const s=Object.create(De);return c.toFlatObject(e,s,function(u){return u!==Error.prototype},a=>a!=="isAxiosError"),p.call(s,e.message,t,n,r,o),s.cause=e,s.name=e.name,i&&Object.assign(s,i),s};const Bt=null;function Y(e){return c.isPlainObject(e)||c.isArray(e)}function je(e){return c.endsWith(e,"[]")?e.slice(0,-2):e}function pe(e,t,n){return e?e.concat(t).map(function(o,i){return o=je(o),!n&&i?"["+o+"]":o}).join(n?".":""):t}function jt(e){return c.isArray(e)&&!e.some(Y)}const Ut=c.toFlatObject(c,{},null,function(t){return/^is[A-Z]/.test(t)});function V(e,t,n){if(!c.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=c.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(m,y){return!c.isUndefined(y[m])});const r=n.metaTokens,o=n.visitor||l,i=n.dots,s=n.indexes,u=(n.Blob||typeof Blob<"u"&&Blob)&&c.isSpecCompliantForm(t);if(!c.isFunction(o))throw new TypeError("visitor must be a function");function f(h){if(h===null)return"";if(c.isDate(h))return h.toISOString();if(!u&&c.isBlob(h))throw new p("Blob is not supported. Use a Buffer instead.");return c.isArrayBuffer(h)||c.isTypedArray(h)?u&&typeof Blob=="function"?new Blob([h]):Buffer.from(h):h}function l(h,m,y){let E=h;if(h&&!y&&typeof h=="object"){if(c.endsWith(m,"{}"))m=r?m:m.slice(0,-2),h=JSON.stringify(h);else if(c.isArray(h)&&jt(h)||(c.isFileList(h)||c.endsWith(m,"[]"))&&(E=c.toArray(h)))return m=je(m),E.forEach(function(w,P){!(c.isUndefined(w)||w===null)&&t.append(s===!0?pe([m],P,i):s===null?m:m+"[]",f(w))}),!1}return Y(h)?!0:(t.append(pe(y,m,i),f(h)),!1)}const d=[],g=Object.assign(Ut,{defaultVisitor:l,convertValue:f,isVisitable:Y});function b(h,m){if(!c.isUndefined(h)){if(d.indexOf(h)!==-1)throw Error("Circular reference detected in "+m.join("."));d.push(h),c.forEach(h,function(E,R){(!(c.isUndefined(E)||E===null)&&o.call(t,E,c.isString(R)?R.trim():R,m,g))===!0&&b(E,m?m.concat(R):[R])}),d.pop()}}if(!c.isObject(e))throw new TypeError("data must be an object");return b(e),t}function me(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function ie(e,t){this._pairs=[],e&&V(e,this,t)}const Ue=ie.prototype;Ue.append=function(t,n){this._pairs.push([t,n])};Ue.toString=function(t){const n=t?function(r){return t.call(this,r,me)}:me;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};function Mt(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Me(e,t,n){if(!t)return e;const r=n&&n.encode||Mt,o=n&&n.serialize;let i;if(o?i=o(t,n):i=c.isURLSearchParams(t)?t.toString():new ie(t,n).toString(r),i){const s=e.indexOf("#");s!==-1&&(e=e.slice(0,s)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class ye{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){c.forEach(this.handlers,function(r){r!==null&&t(r)})}}const ke={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},kt=typeof URLSearchParams<"u"?URLSearchParams:ie,qt=typeof FormData<"u"?FormData:null,Ht=typeof Blob<"u"?Blob:null,It={isBrowser:!0,classes:{URLSearchParams:kt,FormData:qt,Blob:Ht},protocols:["http","https","file","blob","url","data"]},ae=typeof window<"u"&&typeof document<"u",zt=(e=>ae&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),vt=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Wt=ae&&window.location.href||"http://localhost",Jt=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:ae,hasStandardBrowserEnv:zt,hasStandardBrowserWebWorkerEnv:vt,origin:Wt},Symbol.toStringTag,{value:"Module"})),T={...Jt,...It};function Vt(e,t){return V(e,new T.classes.URLSearchParams,Object.assign({visitor:function(n,r,o,i){return T.isNode&&c.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}function $t(e){return c.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Kt(e){const t={},n=Object.keys(e);let r;const o=n.length;let i;for(r=0;r<o;r++)i=n[r],t[i]=e[i];return t}function qe(e){function t(n,r,o,i){let s=n[i++];if(s==="__proto__")return!0;const a=Number.isFinite(+s),u=i>=n.length;return s=!s&&c.isArray(o)?o.length:s,u?(c.hasOwnProp(o,s)?o[s]=[o[s],r]:o[s]=r,!a):((!o[s]||!c.isObject(o[s]))&&(o[s]=[]),t(n,r,o[s],i)&&c.isArray(o[s])&&(o[s]=Kt(o[s])),!a)}if(c.isFormData(e)&&c.isFunction(e.entries)){const n={};return c.forEachEntry(e,(r,o)=>{t($t(r),o,n,0)}),n}return null}function Gt(e,t,n){if(c.isString(e))try{return(t||JSON.parse)(e),c.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const k={transitional:ke,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",o=r.indexOf("application/json")>-1,i=c.isObject(t);if(i&&c.isHTMLForm(t)&&(t=new FormData(t)),c.isFormData(t))return o?JSON.stringify(qe(t)):t;if(c.isArrayBuffer(t)||c.isBuffer(t)||c.isStream(t)||c.isFile(t)||c.isBlob(t)||c.isReadableStream(t))return t;if(c.isArrayBufferView(t))return t.buffer;if(c.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let a;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Vt(t,this.formSerializer).toString();if((a=c.isFileList(t))||r.indexOf("multipart/form-data")>-1){const u=this.env&&this.env.FormData;return V(a?{"files[]":t}:t,u&&new u,this.formSerializer)}}return i||o?(n.setContentType("application/json",!1),Gt(t)):t}],transformResponse:[function(t){const n=this.transitional||k.transitional,r=n&&n.forcedJSONParsing,o=this.responseType==="json";if(c.isResponse(t)||c.isReadableStream(t))return t;if(t&&c.isString(t)&&(r&&!this.responseType||o)){const s=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(a){if(s)throw a.name==="SyntaxError"?p.from(a,p.ERR_BAD_RESPONSE,this,null,this.response):a}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:T.classes.FormData,Blob:T.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};c.forEach(["delete","get","head","post","put","patch"],e=>{k.headers[e]={}});const Xt=c.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Qt=e=>{const t={};let n,r,o;return e&&e.split(`
`).forEach(function(s){o=s.indexOf(":"),n=s.substring(0,o).trim().toLowerCase(),r=s.substring(o+1).trim(),!(!n||t[n]&&Xt[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},ge=Symbol("internals");function j(e){return e&&String(e).trim().toLowerCase()}function H(e){return e===!1||e==null?e:c.isArray(e)?e.map(H):String(e)}function Zt(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const Yt=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function G(e,t,n,r,o){if(c.isFunction(r))return r.call(this,t,n);if(o&&(t=n),!!c.isString(t)){if(c.isString(r))return t.indexOf(r)!==-1;if(c.isRegExp(r))return r.test(t)}}function en(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function tn(e,t){const n=c.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(o,i,s){return this[r].call(this,t,o,i,s)},configurable:!0})})}class O{constructor(t){t&&this.set(t)}set(t,n,r){const o=this;function i(a,u,f){const l=j(u);if(!l)throw new Error("header name must be a non-empty string");const d=c.findKey(o,l);(!d||o[d]===void 0||f===!0||f===void 0&&o[d]!==!1)&&(o[d||u]=H(a))}const s=(a,u)=>c.forEach(a,(f,l)=>i(f,l,u));if(c.isPlainObject(t)||t instanceof this.constructor)s(t,n);else if(c.isString(t)&&(t=t.trim())&&!Yt(t))s(Qt(t),n);else if(c.isHeaders(t))for(const[a,u]of t.entries())i(u,a,r);else t!=null&&i(n,t,r);return this}get(t,n){if(t=j(t),t){const r=c.findKey(this,t);if(r){const o=this[r];if(!n)return o;if(n===!0)return Zt(o);if(c.isFunction(n))return n.call(this,o,r);if(c.isRegExp(n))return n.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=j(t),t){const r=c.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||G(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let o=!1;function i(s){if(s=j(s),s){const a=c.findKey(r,s);a&&(!n||G(r,r[a],a,n))&&(delete r[a],o=!0)}}return c.isArray(t)?t.forEach(i):i(t),o}clear(t){const n=Object.keys(this);let r=n.length,o=!1;for(;r--;){const i=n[r];(!t||G(this,this[i],i,t,!0))&&(delete this[i],o=!0)}return o}normalize(t){const n=this,r={};return c.forEach(this,(o,i)=>{const s=c.findKey(r,i);if(s){n[s]=H(o),delete n[i];return}const a=t?en(i):String(i).trim();a!==i&&delete n[i],n[a]=H(o),r[a]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return c.forEach(this,(r,o)=>{r!=null&&r!==!1&&(n[o]=t&&c.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(o=>r.set(o)),r}static accessor(t){const r=(this[ge]=this[ge]={accessors:{}}).accessors,o=this.prototype;function i(s){const a=j(s);r[a]||(tn(o,s),r[a]=!0)}return c.isArray(t)?t.forEach(i):i(t),this}}O.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);c.reduceDescriptors(O.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});c.freezeMethods(O);function X(e,t){const n=this||k,r=t||n,o=O.from(r.headers);let i=r.data;return c.forEach(e,function(a){i=a.call(n,i,o.normalize(),t?t.status:void 0)}),o.normalize(),i}function He(e){return!!(e&&e.__CANCEL__)}function B(e,t,n){p.call(this,e??"canceled",p.ERR_CANCELED,t,n),this.name="CanceledError"}c.inherits(B,p,{__CANCEL__:!0});function Ie(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new p("Request failed with status code "+n.status,[p.ERR_BAD_REQUEST,p.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function nn(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function rn(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o=0,i=0,s;return t=t!==void 0?t:1e3,function(u){const f=Date.now(),l=r[i];s||(s=f),n[o]=u,r[o]=f;let d=i,g=0;for(;d!==o;)g+=n[d++],d=d%e;if(o=(o+1)%e,o===i&&(i=(i+1)%e),f-s<t)return;const b=l&&f-l;return b?Math.round(g*1e3/b):void 0}}function on(e,t){let n=0;const r=1e3/t;let o=null;return function(){const s=this===!0,a=Date.now();if(s||a-n>r)return o&&(clearTimeout(o),o=null),n=a,e.apply(null,arguments);o||(o=setTimeout(()=>(o=null,n=Date.now(),e.apply(null,arguments)),r-(a-n)))}}const I=(e,t,n=3)=>{let r=0;const o=rn(50,250);return on(i=>{const s=i.loaded,a=i.lengthComputable?i.total:void 0,u=s-r,f=o(u),l=s<=a;r=s;const d={loaded:s,total:a,progress:a?s/a:void 0,bytes:u,rate:f||void 0,estimated:f&&a&&l?(a-s)/f:void 0,event:i,lengthComputable:a!=null};d[t?"download":"upload"]=!0,e(d)},n)},sn=T.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function o(i){let s=i;return t&&(n.setAttribute("href",s),s=n.href),n.setAttribute("href",s),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=o(window.location.href),function(s){const a=c.isString(s)?o(s):s;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}(),an=T.hasStandardBrowserEnv?{write(e,t,n,r,o,i){const s=[e+"="+encodeURIComponent(t)];c.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),c.isString(r)&&s.push("path="+r),c.isString(o)&&s.push("domain="+o),i===!0&&s.push("secure"),document.cookie=s.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function cn(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function ln(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function ze(e,t){return e&&!cn(t)?ln(e,t):t}const be=e=>e instanceof O?{...e}:e;function _(e,t){t=t||{};const n={};function r(f,l,d){return c.isPlainObject(f)&&c.isPlainObject(l)?c.merge.call({caseless:d},f,l):c.isPlainObject(l)?c.merge({},l):c.isArray(l)?l.slice():l}function o(f,l,d){if(c.isUndefined(l)){if(!c.isUndefined(f))return r(void 0,f,d)}else return r(f,l,d)}function i(f,l){if(!c.isUndefined(l))return r(void 0,l)}function s(f,l){if(c.isUndefined(l)){if(!c.isUndefined(f))return r(void 0,f)}else return r(void 0,l)}function a(f,l,d){if(d in t)return r(f,l);if(d in e)return r(void 0,f)}const u={url:i,method:i,data:i,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,withXSRFToken:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:a,headers:(f,l)=>o(be(f),be(l),!0)};return c.forEach(Object.keys(Object.assign({},e,t)),function(l){const d=u[l]||o,g=d(e[l],t[l],l);c.isUndefined(g)&&d!==a||(n[l]=g)}),n}const ve=e=>{const t=_({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:o,xsrfCookieName:i,headers:s,auth:a}=t;t.headers=s=O.from(s),t.url=Me(ze(t.baseURL,t.url),e.params,e.paramsSerializer),a&&s.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):"")));let u;if(c.isFormData(n)){if(T.hasStandardBrowserEnv||T.hasStandardBrowserWebWorkerEnv)s.setContentType(void 0);else if((u=s.getContentType())!==!1){const[f,...l]=u?u.split(";").map(d=>d.trim()).filter(Boolean):[];s.setContentType([f||"multipart/form-data",...l].join("; "))}}if(T.hasStandardBrowserEnv&&(r&&c.isFunction(r)&&(r=r(t)),r||r!==!1&&sn(t.url))){const f=o&&i&&an.read(i);f&&s.set(o,f)}return t},un=typeof XMLHttpRequest<"u",fn=un&&function(e){return new Promise(function(n,r){const o=ve(e);let i=o.data;const s=O.from(o.headers).normalize();let{responseType:a}=o,u;function f(){o.cancelToken&&o.cancelToken.unsubscribe(u),o.signal&&o.signal.removeEventListener("abort",u)}let l=new XMLHttpRequest;l.open(o.method.toUpperCase(),o.url,!0),l.timeout=o.timeout;function d(){if(!l)return;const b=O.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders()),m={data:!a||a==="text"||a==="json"?l.responseText:l.response,status:l.status,statusText:l.statusText,headers:b,config:e,request:l};Ie(function(E){n(E),f()},function(E){r(E),f()},m),l=null}"onloadend"in l?l.onloadend=d:l.onreadystatechange=function(){!l||l.readyState!==4||l.status===0&&!(l.responseURL&&l.responseURL.indexOf("file:")===0)||setTimeout(d)},l.onabort=function(){l&&(r(new p("Request aborted",p.ECONNABORTED,o,l)),l=null)},l.onerror=function(){r(new p("Network Error",p.ERR_NETWORK,o,l)),l=null},l.ontimeout=function(){let h=o.timeout?"timeout of "+o.timeout+"ms exceeded":"timeout exceeded";const m=o.transitional||ke;o.timeoutErrorMessage&&(h=o.timeoutErrorMessage),r(new p(h,m.clarifyTimeoutError?p.ETIMEDOUT:p.ECONNABORTED,o,l)),l=null},i===void 0&&s.setContentType(null),"setRequestHeader"in l&&c.forEach(s.toJSON(),function(h,m){l.setRequestHeader(m,h)}),c.isUndefined(o.withCredentials)||(l.withCredentials=!!o.withCredentials),a&&a!=="json"&&(l.responseType=o.responseType),typeof o.onDownloadProgress=="function"&&l.addEventListener("progress",I(o.onDownloadProgress,!0)),typeof o.onUploadProgress=="function"&&l.upload&&l.upload.addEventListener("progress",I(o.onUploadProgress)),(o.cancelToken||o.signal)&&(u=b=>{l&&(r(!b||b.type?new B(null,e,l):b),l.abort(),l=null)},o.cancelToken&&o.cancelToken.subscribe(u),o.signal&&(o.signal.aborted?u():o.signal.addEventListener("abort",u)));const g=nn(o.url);if(g&&T.protocols.indexOf(g)===-1){r(new p("Unsupported protocol "+g+":",p.ERR_BAD_REQUEST,e));return}l.send(i||null)})},dn=(e,t)=>{let n=new AbortController,r;const o=function(u){if(!r){r=!0,s();const f=u instanceof Error?u:this.reason;n.abort(f instanceof p?f:new B(f instanceof Error?f.message:f))}};let i=t&&setTimeout(()=>{o(new p(`timeout ${t} of ms exceeded`,p.ETIMEDOUT))},t);const s=()=>{e&&(i&&clearTimeout(i),i=null,e.forEach(u=>{u&&(u.removeEventListener?u.removeEventListener("abort",o):u.unsubscribe(o))}),e=null)};e.forEach(u=>u&&u.addEventListener&&u.addEventListener("abort",o));const{signal:a}=n;return a.unsubscribe=s,[a,()=>{i&&clearTimeout(i),i=null}]},hn=function*(e,t){let n=e.byteLength;if(!t||n<t){yield e;return}let r=0,o;for(;r<n;)o=r+t,yield e.slice(r,o),r=o},pn=async function*(e,t,n){for await(const r of e)yield*hn(ArrayBuffer.isView(r)?r:await n(String(r)),t)},we=(e,t,n,r,o)=>{const i=pn(e,t,o);let s=0;return new ReadableStream({type:"bytes",async pull(a){const{done:u,value:f}=await i.next();if(u){a.close(),r();return}let l=f.byteLength;n&&n(s+=l),a.enqueue(new Uint8Array(f))},cancel(a){return r(a),i.return()}},{highWaterMark:2})},Ee=(e,t)=>{const n=e!=null;return r=>setTimeout(()=>t({lengthComputable:n,total:e,loaded:r}))},$=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",We=$&&typeof ReadableStream=="function",ee=$&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),mn=We&&(()=>{let e=!1;const t=new Request(T.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t})(),Se=64*1024,te=We&&!!(()=>{try{return c.isReadableStream(new Response("").body)}catch{}})(),z={stream:te&&(e=>e.body)};$&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!z[t]&&(z[t]=c.isFunction(e[t])?n=>n[t]():(n,r)=>{throw new p(`Response type '${t}' is not supported`,p.ERR_NOT_SUPPORT,r)})})})(new Response);const yn=async e=>{if(e==null)return 0;if(c.isBlob(e))return e.size;if(c.isSpecCompliantForm(e))return(await new Request(e).arrayBuffer()).byteLength;if(c.isArrayBufferView(e))return e.byteLength;if(c.isURLSearchParams(e)&&(e=e+""),c.isString(e))return(await ee(e)).byteLength},gn=async(e,t)=>{const n=c.toFiniteNumber(e.getContentLength());return n??yn(t)},bn=$&&(async e=>{let{url:t,method:n,data:r,signal:o,cancelToken:i,timeout:s,onDownloadProgress:a,onUploadProgress:u,responseType:f,headers:l,withCredentials:d="same-origin",fetchOptions:g}=ve(e);f=f?(f+"").toLowerCase():"text";let[b,h]=o||i||s?dn([o,i],s):[],m,y;const E=()=>{!m&&setTimeout(()=>{b&&b.unsubscribe()}),m=!0};let R;try{if(u&&mn&&n!=="get"&&n!=="head"&&(R=await gn(l,r))!==0){let C=new Request(t,{method:"POST",body:r,duplex:"half"}),L;c.isFormData(r)&&(L=C.headers.get("content-type"))&&l.setContentType(L),C.body&&(r=we(C.body,Se,Ee(R,I(u)),null,ee))}c.isString(d)||(d=d?"cors":"omit"),y=new Request(t,{...g,signal:b,method:n.toUpperCase(),headers:l.normalize().toJSON(),body:r,duplex:"half",withCredentials:d});let w=await fetch(y);const P=te&&(f==="stream"||f==="response");if(te&&(a||P)){const C={};["status","statusText","headers"].forEach(fe=>{C[fe]=w[fe]});const L=c.toFiniteNumber(w.headers.get("content-length"));w=new Response(we(w.body,Se,a&&Ee(L,I(a,!0)),P&&E,ee),C)}f=f||"text";let Ge=await z[c.findKey(z,f)||"text"](w,e);return!P&&E(),h&&h(),await new Promise((C,L)=>{Ie(C,L,{data:Ge,headers:O.from(w.headers),status:w.status,statusText:w.statusText,config:e,request:y})})}catch(w){throw E(),w&&w.name==="TypeError"&&/fetch/i.test(w.message)?Object.assign(new p("Network Error",p.ERR_NETWORK,e,y),{cause:w.cause||w}):p.from(w,w&&w.code,e,y)}}),ne={http:Bt,xhr:fn,fetch:bn};c.forEach(ne,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Re=e=>`- ${e}`,wn=e=>c.isFunction(e)||e===null||e===!1,Je={getAdapter:e=>{e=c.isArray(e)?e:[e];const{length:t}=e;let n,r;const o={};for(let i=0;i<t;i++){n=e[i];let s;if(r=n,!wn(n)&&(r=ne[(s=String(n)).toLowerCase()],r===void 0))throw new p(`Unknown adapter '${s}'`);if(r)break;o[s||"#"+i]=r}if(!r){const i=Object.entries(o).map(([a,u])=>`adapter ${a} `+(u===!1?"is not supported by the environment":"is not available in the build"));let s=t?i.length>1?`since :
`+i.map(Re).join(`
`):" "+Re(i[0]):"as no adapter specified";throw new p("There is no suitable adapter to dispatch the request "+s,"ERR_NOT_SUPPORT")}return r},adapters:ne};function Q(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new B(null,e)}function Oe(e){return Q(e),e.headers=O.from(e.headers),e.data=X.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Je.getAdapter(e.adapter||k.adapter)(e).then(function(r){return Q(e),r.data=X.call(e,e.transformResponse,r),r.headers=O.from(r.headers),r},function(r){return He(r)||(Q(e),r&&r.response&&(r.response.data=X.call(e,e.transformResponse,r.response),r.response.headers=O.from(r.response.headers))),Promise.reject(r)})}const Ve="1.7.2",ce={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{ce[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const xe={};ce.transitional=function(t,n,r){function o(i,s){return"[Axios v"+Ve+"] Transitional option '"+i+"'"+s+(r?". "+r:"")}return(i,s,a)=>{if(t===!1)throw new p(o(s," has been removed"+(n?" in "+n:"")),p.ERR_DEPRECATED);return n&&!xe[s]&&(xe[s]=!0,console.warn(o(s," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,s,a):!0}};function En(e,t,n){if(typeof e!="object")throw new p("options must be an object",p.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const i=r[o],s=t[i];if(s){const a=e[i],u=a===void 0||s(a,i,e);if(u!==!0)throw new p("option "+i+" must be "+u,p.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new p("Unknown option "+i,p.ERR_BAD_OPTION)}}const re={assertOptions:En,validators:ce},N=re.validators;class F{constructor(t){this.defaults=t,this.interceptors={request:new ye,response:new ye}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let o;Error.captureStackTrace?Error.captureStackTrace(o={}):o=new Error;const i=o.stack?o.stack.replace(/^.+\n/,""):"";try{r.stack?i&&!String(r.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+i):r.stack=i}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=_(this.defaults,n);const{transitional:r,paramsSerializer:o,headers:i}=n;r!==void 0&&re.assertOptions(r,{silentJSONParsing:N.transitional(N.boolean),forcedJSONParsing:N.transitional(N.boolean),clarifyTimeoutError:N.transitional(N.boolean)},!1),o!=null&&(c.isFunction(o)?n.paramsSerializer={serialize:o}:re.assertOptions(o,{encode:N.function,serialize:N.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let s=i&&c.merge(i.common,i[n.method]);i&&c.forEach(["delete","get","head","post","put","patch","common"],h=>{delete i[h]}),n.headers=O.concat(s,i);const a=[];let u=!0;this.interceptors.request.forEach(function(m){typeof m.runWhen=="function"&&m.runWhen(n)===!1||(u=u&&m.synchronous,a.unshift(m.fulfilled,m.rejected))});const f=[];this.interceptors.response.forEach(function(m){f.push(m.fulfilled,m.rejected)});let l,d=0,g;if(!u){const h=[Oe.bind(this),void 0];for(h.unshift.apply(h,a),h.push.apply(h,f),g=h.length,l=Promise.resolve(n);d<g;)l=l.then(h[d++],h[d++]);return l}g=a.length;let b=n;for(d=0;d<g;){const h=a[d++],m=a[d++];try{b=h(b)}catch(y){m.call(this,y);break}}try{l=Oe.call(this,b)}catch(h){return Promise.reject(h)}for(d=0,g=f.length;d<g;)l=l.then(f[d++],f[d++]);return l}getUri(t){t=_(this.defaults,t);const n=ze(t.baseURL,t.url);return Me(n,t.params,t.paramsSerializer)}}c.forEach(["delete","get","head","options"],function(t){F.prototype[t]=function(n,r){return this.request(_(r||{},{method:t,url:n,data:(r||{}).data}))}});c.forEach(["post","put","patch"],function(t){function n(r){return function(i,s,a){return this.request(_(a||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:s}))}}F.prototype[t]=n(),F.prototype[t+"Form"]=n(!0)});class le{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(o=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](o);r._listeners=null}),this.promise.then=o=>{let i;const s=new Promise(a=>{r.subscribe(a),i=a}).then(o);return s.cancel=function(){r.unsubscribe(i)},s},t(function(i,s,a){r.reason||(r.reason=new B(i,s,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new le(function(o){t=o}),cancel:t}}}function Sn(e){return function(n){return e.apply(null,n)}}function Rn(e){return c.isObject(e)&&e.isAxiosError===!0}const oe={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(oe).forEach(([e,t])=>{oe[t]=e});function $e(e){const t=new F(e),n=Te(F.prototype.request,t);return c.extend(n,F.prototype,t,{allOwnKeys:!0}),c.extend(n,t,null,{allOwnKeys:!0}),n.create=function(o){return $e(_(e,o))},n}const S=$e(k);S.Axios=F;S.CanceledError=B;S.CancelToken=le;S.isCancel=He;S.VERSION=Ve;S.toFormData=V;S.AxiosError=p;S.Cancel=S.CanceledError;S.all=function(t){return Promise.all(t)};S.spread=Sn;S.isAxiosError=Rn;S.mergeConfig=_;S.AxiosHeaders=O;S.formToJSON=e=>qe(c.isHTMLForm(e)?new FormData(e):e);S.getAdapter=Je.getAdapter;S.HttpStatusCode=oe;S.default=S;S.get("./json/sales_data.json").then(function(e){let t=e.data.sales;xn(t),Tn(t),An(t),d3.selectAll(".c3-axis-y-label").attr("transform","translate(20,100)")}).catch(function(e){console.log(e)});function Ke(e,t,n){c3.generate({bindto:e,size:{height:300,width:800},data:{x:"x",columns:t},axis:{x:{type:"category",label:{text:"日期",position:"outer-right"}},y:{label:{text:n,position:"inner-top"}}}})}function On(e,t){c3.generate({bindto:e,size:{height:300,width:800},data:{x:"x",columns:t,type:"bar"},bar:{width:{ratio:.25}},axis:{x:{type:"category",label:{text:"產品類別",position:"innter-top"}},y:{label:{text:"數量",position:"inner-top"}}}})}function xn(e){const t={};e.forEach(s=>{t[s.date]=!0});const n=Object.keys(t).sort(),r={};e.forEach(s=>{r[s.category]||(r[s.category]=n.reduce((a,u)=>(a[u]=0,a),{})),r[s.category][s.date]+=s.sales_amount});const o={};Object.keys(r).forEach(s=>{o[s]=n.map(a=>r[s][a])});const i=Object.entries(o).map(([s,a])=>[s,...a]);i.unshift(["x",...n]),Ke("#test1chart1",i,"銷貨數量")}function Tn(e){const t={};e.forEach(s=>{t[s.date]=!0});const n=Object.keys(t).sort(),r={};e.forEach(s=>{r[s.category]||(r[s.category]=n.reduce((a,u)=>(a[u]=0,a),{})),r[s.category][s.date]=s.sales_amount*s.units_sold});const o={};Object.keys(r).forEach(s=>{o[s]=n.map(a=>r[s][a])});const i=Object.entries(o).map(([s,a])=>[s,...a]);i.unshift(["x",...n]),Ke("#test1chart2",i,"單價×銷貨數量")}function An(e){const t={};e.forEach(s=>{t[s.category]=!0});const n=Object.keys(t),r={};e.forEach(s=>{r[s.date]||(r[s.date]=n.reduce((a,u)=>(a[u]=0,a),{})),r[s.date][s.category]+=s.sales_amount});const o={};Object.keys(r).forEach(s=>{o[s]=n.map(a=>r[s][a])});const i=Object.entries(o).map(([s,a])=>[s,...a]);i.unshift(["x",...n]),On("#test1chart3",i)}S.get("./json/ShipManagement.json").then(function(e){let t=e.data.shipOperations;Nn(t),Pn(t),Fn(t),_n(t),d3.selectAll(".c3-axis-y-label").attr("transform","translate(20,100)")}).catch(function(e){console.log(e)}).finally(function(){});function Cn(e,t,n,r){c3.generate({bindto:e,size:{height:300,width:800},data:{x:"x",columns:t,type:"spline"},axis:{x:{type:"category",label:{text:"日期(月)",position:"outer-right"}},y:{max:n,min:r,label:{text:"燃油消耗率",position:"inner-top"}}}})}function ue(e,t,n,r){c3.generate({bindto:e,size:{height:300,width:800},data:{x:"x",columns:t,type:"bar"},bar:{width:{ratio:.25}},axis:{x:{type:"category",label:{text:n,position:"outer-right"}},y:{label:{text:r,position:"inner-top"}}}})}function Nn(e){let t=[],n=[];e.forEach(r=>{t.push(r.month),n.push(Math.floor(r.distanceTravelled/r.fuelConsumption*100)/100)}),Cn("#chartBoatFuelEff",[["x",...t],["船隻燃油效率變化",...n]],Math.floor(n.sort().pop())+1,Math.floor(n.sort().shift()))}function Pn(e){let t=[],n=[];e.forEach(r=>{t.push(r.month),n.push(Math.floor(r.distanceTravelled/r.cargoWeight*100)/100)}),ue("#chartCargoTsportEff",[["x",...t],["單位重量貨物的航程距離",...n]],"日期(月)","貨物運輸效率")}function Fn(e){let t=[],n=[],r=[],o=0,i=0,s=0;e.forEach(y=>{t.push(y.month),r.push(y.fuelConsumption),n.push(Math.floor(y.distanceTravelled/y.cargoWeight*100)/100),o+=y.fuelConsumption,i+=y.distanceTravelled,s+=y.cargoWeight});function a(y,E){return y.reduce((w,P)=>w+P[E],0)/y.length}a(e,"fuelConsumption"),a(e,"distanceTravelled"),a(e,"cargoWeight");function u(y,E){const R=y.map(w=>w[E]);return{max:Math.max(...R),min:Math.min(...R)}}const f=u(e,"fuelConsumption"),l=u(e,"distanceTravelled"),d=u(e,"cargoWeight");function g(y,E,R){return(y-E)/(R-E)}e.map(y=>[g(y.fuelConsumption,f.min,f.max),g(y.distanceTravelled,l.min,l.max),g(y.cargoWeight,d.min,d.max)]);const b=e.map(y=>[g(y.fuelConsumption,f.min,f.max)]),h=e.map(y=>[g(y.distanceTravelled,l.min,l.max)]),m=e.map(y=>[g(y.cargoWeight,d.min,d.max)]);ue("#chartCompAnalys",[["x",...t],["燃油消耗",...b],["航行英里數",...h],["貨物噸位",...m]],"日期(月)","判定指標")}function _n(e){let t=[];e.forEach(d=>{t.push(d.month)});function n(d,g){const b=d.map(h=>h[g]);return{max:Math.max(...b),min:Math.min(...b)}}const r=n(e,"fuelConsumption"),o=n(e,"distanceTravelled"),i=n(e,"cargoWeight");function s(d,g,b){return(d-g)/(b-g)}const a=e.map(d=>[s(d.fuelConsumption,r.min,r.max)]),u=e.map(d=>[s(d.distanceTravelled,o.min,o.max)]),f=e.map(d=>[s(d.cargoWeight,i.min,i.max)]),l=t.map((d,g)=>[d,a[g][0],u[g][0],f[g][0]]);l.unshift(["x","燃油消耗","航行英里數","貨物噸位"]),ue("#chartCompAnalys2",l," ","判定指標")}
