(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=o(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ue=globalThis,Bo=Ue.ShadowRoot&&(Ue.ShadyCSS===void 0||Ue.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Mo=Symbol(),li=new WeakMap;let Xi=class{constructor(e,o,i){if(this._$cssResult$=!0,i!==Mo)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=o}get styleSheet(){let e=this.o;const o=this.t;if(Bo&&e===void 0){const i=o!==void 0&&o.length===1;i&&(e=li.get(o)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&li.set(o,e))}return e}toString(){return this.cssText}};const Fr=t=>new Xi(typeof t=="string"?t:t+"",void 0,Mo),E=(t,...e)=>{const o=t.length===1?t[0]:e.reduce((i,r,s)=>i+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[s+1],t[0]);return new Xi(o,t,Mo)},Br=(t,e)=>{if(Bo)t.adoptedStyleSheets=e.map(o=>o instanceof CSSStyleSheet?o:o.styleSheet);else for(const o of e){const i=document.createElement("style"),r=Ue.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=o.cssText,t.appendChild(i)}},ci=Bo?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let o="";for(const i of e.cssRules)o+=i.cssText;return Fr(o)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Mr,defineProperty:Vr,getOwnPropertyDescriptor:Nr,getOwnPropertyNames:Ur,getOwnPropertySymbols:jr,getPrototypeOf:Hr}=Object,ro=globalThis,di=ro.trustedTypes,Wr=di?di.emptyScript:"",qr=ro.reactiveElementPolyfillSupport,we=(t,e)=>t,oe={toAttribute(t,e){switch(e){case Boolean:t=t?Wr:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let o=t;switch(e){case Boolean:o=t!==null;break;case Number:o=t===null?null:Number(t);break;case Object:case Array:try{o=JSON.parse(t)}catch{o=null}}return o}},Vo=(t,e)=>!Mr(t,e),ui={attribute:!0,type:String,converter:oe,reflect:!1,useDefault:!1,hasChanged:Vo};Symbol.metadata??=Symbol("metadata"),ro.litPropertyMetadata??=new WeakMap;let Qt=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,o=ui){if(o.state&&(o.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((o=Object.create(o)).wrapped=!0),this.elementProperties.set(e,o),!o.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(e,i,o);r!==void 0&&Vr(this.prototype,e,r)}}static getPropertyDescriptor(e,o,i){const{get:r,set:s}=Nr(this.prototype,e)??{get(){return this[o]},set(a){this[o]=a}};return{get:r,set(a){const n=r?.call(this);s?.call(this,a),this.requestUpdate(e,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ui}static _$Ei(){if(this.hasOwnProperty(we("elementProperties")))return;const e=Hr(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(we("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(we("properties"))){const o=this.properties,i=[...Ur(o),...jr(o)];for(const r of i)this.createProperty(r,o[r])}const e=this[Symbol.metadata];if(e!==null){const o=litPropertyMetadata.get(e);if(o!==void 0)for(const[i,r]of o)this.elementProperties.set(i,r)}this._$Eh=new Map;for(const[o,i]of this.elementProperties){const r=this._$Eu(o,i);r!==void 0&&this._$Eh.set(r,o)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const o=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const r of i)o.unshift(ci(r))}else e!==void 0&&o.push(ci(e));return o}static _$Eu(e,o){const i=o.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,o=this.constructor.elementProperties;for(const i of o.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Br(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,o,i){this._$AK(e,i)}_$ET(e,o){const i=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,i);if(r!==void 0&&i.reflect===!0){const s=(i.converter?.toAttribute!==void 0?i.converter:oe).toAttribute(o,i.type);this._$Em=e,s==null?this.removeAttribute(r):this.setAttribute(r,s),this._$Em=null}}_$AK(e,o){const i=this.constructor,r=i._$Eh.get(e);if(r!==void 0&&this._$Em!==r){const s=i.getPropertyOptions(r),a=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:oe;this._$Em=r;const n=a.fromAttribute(o,s.type);this[r]=n??this._$Ej?.get(r)??n,this._$Em=null}}requestUpdate(e,o,i,r=!1,s){if(e!==void 0){const a=this.constructor;if(r===!1&&(s=this[e]),i??=a.getPropertyOptions(e),!((i.hasChanged??Vo)(s,o)||i.useDefault&&i.reflect&&s===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,i))))return;this.C(e,o,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,o,{useDefault:i,reflect:r,wrapped:s},a){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??o??this[e]),s!==!0||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||i||(o=void 0),this._$AL.set(e,o)),r===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(o){Promise.reject(o)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[r,s]of this._$Ep)this[r]=s;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[r,s]of i){const{wrapped:a}=s,n=this[r];a!==!0||this._$AL.has(r)||n===void 0||this.C(r,void 0,s,n)}}let e=!1;const o=this._$AL;try{e=this.shouldUpdate(o),e?(this.willUpdate(o),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(o)):this._$EM()}catch(i){throw e=!1,this._$EM(),i}e&&this._$AE(o)}willUpdate(e){}_$AE(e){this._$EO?.forEach(o=>o.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(o=>this._$ET(o,this[o])),this._$EM()}updated(e){}firstUpdated(e){}};Qt.elementStyles=[],Qt.shadowRootOptions={mode:"open"},Qt[we("elementProperties")]=new Map,Qt[we("finalized")]=new Map,qr?.({ReactiveElement:Qt}),(ro.reactiveElementVersions??=[]).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const No=globalThis,hi=t=>t,Ye=No.trustedTypes,pi=Ye?Ye.createPolicy("lit-html",{createHTML:t=>t}):void 0,Zi="$lit$",Tt=`lit$${Math.random().toFixed(9).slice(2)}$`,Ji="?"+Tt,Gr=`<${Ji}>`,qt=document,$e=()=>qt.createComment(""),Ce=t=>t===null||typeof t!="object"&&typeof t!="function",Uo=Array.isArray,Kr=t=>Uo(t)||typeof t?.[Symbol.iterator]=="function",go=`[ 	
\f\r]`,he=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,fi=/-->/g,mi=/>/g,Vt=RegExp(`>|${go}(?:([^\\s"'>=/]+)(${go}*=${go}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),bi=/'/g,gi=/"/g,Qi=/^(?:script|style|textarea|title)$/i,Yr=t=>(e,...o)=>({_$litType$:t,strings:e,values:o}),m=Yr(1),nt=Symbol.for("lit-noChange"),N=Symbol.for("lit-nothing"),vi=new WeakMap,Ht=qt.createTreeWalker(qt,129);function tr(t,e){if(!Uo(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return pi!==void 0?pi.createHTML(e):e}const Xr=(t,e)=>{const o=t.length-1,i=[];let r,s=e===2?"<svg>":e===3?"<math>":"",a=he;for(let n=0;n<o;n++){const c=t[n];let p,h,u=-1,b=0;for(;b<c.length&&(a.lastIndex=b,h=a.exec(c),h!==null);)b=a.lastIndex,a===he?h[1]==="!--"?a=fi:h[1]!==void 0?a=mi:h[2]!==void 0?(Qi.test(h[2])&&(r=RegExp("</"+h[2],"g")),a=Vt):h[3]!==void 0&&(a=Vt):a===Vt?h[0]===">"?(a=r??he,u=-1):h[1]===void 0?u=-2:(u=a.lastIndex-h[2].length,p=h[1],a=h[3]===void 0?Vt:h[3]==='"'?gi:bi):a===gi||a===bi?a=Vt:a===fi||a===mi?a=he:(a=Vt,r=void 0);const f=a===Vt&&t[n+1].startsWith("/>")?" ":"";s+=a===he?c+Gr:u>=0?(i.push(p),c.slice(0,u)+Zi+c.slice(u)+Tt+f):c+Tt+(u===-2?n:f)}return[tr(t,s+(t[o]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};class Ee{constructor({strings:e,_$litType$:o},i){let r;this.parts=[];let s=0,a=0;const n=e.length-1,c=this.parts,[p,h]=Xr(e,o);if(this.el=Ee.createElement(p,i),Ht.currentNode=this.el.content,o===2||o===3){const u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(r=Ht.nextNode())!==null&&c.length<n;){if(r.nodeType===1){if(r.hasAttributes())for(const u of r.getAttributeNames())if(u.endsWith(Zi)){const b=h[a++],f=r.getAttribute(u).split(Tt),g=/([.?@])?(.*)/.exec(b);c.push({type:1,index:s,name:g[2],strings:f,ctor:g[1]==="."?Jr:g[1]==="?"?Qr:g[1]==="@"?ts:so}),r.removeAttribute(u)}else u.startsWith(Tt)&&(c.push({type:6,index:s}),r.removeAttribute(u));if(Qi.test(r.tagName)){const u=r.textContent.split(Tt),b=u.length-1;if(b>0){r.textContent=Ye?Ye.emptyScript:"";for(let f=0;f<b;f++)r.append(u[f],$e()),Ht.nextNode(),c.push({type:2,index:++s});r.append(u[b],$e())}}}else if(r.nodeType===8)if(r.data===Ji)c.push({type:2,index:s});else{let u=-1;for(;(u=r.data.indexOf(Tt,u+1))!==-1;)c.push({type:7,index:s}),u+=Tt.length-1}s++}}static createElement(e,o){const i=qt.createElement("template");return i.innerHTML=e,i}}function ie(t,e,o=t,i){if(e===nt)return e;let r=i!==void 0?o._$Co?.[i]:o._$Cl;const s=Ce(e)?void 0:e._$litDirective$;return r?.constructor!==s&&(r?._$AO?.(!1),s===void 0?r=void 0:(r=new s(t),r._$AT(t,o,i)),i!==void 0?(o._$Co??=[])[i]=r:o._$Cl=r),r!==void 0&&(e=ie(t,r._$AS(t,e.values),r,i)),e}class Zr{constructor(e,o){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=o}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:o},parts:i}=this._$AD,r=(e?.creationScope??qt).importNode(o,!0);Ht.currentNode=r;let s=Ht.nextNode(),a=0,n=0,c=i[0];for(;c!==void 0;){if(a===c.index){let p;c.type===2?p=new Oe(s,s.nextSibling,this,e):c.type===1?p=new c.ctor(s,c.name,c.strings,this,e):c.type===6&&(p=new es(s,this,e)),this._$AV.push(p),c=i[++n]}a!==c?.index&&(s=Ht.nextNode(),a++)}return Ht.currentNode=qt,r}p(e){let o=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,o),o+=i.strings.length-2):i._$AI(e[o])),o++}}class Oe{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,o,i,r){this.type=2,this._$AH=N,this._$AN=void 0,this._$AA=e,this._$AB=o,this._$AM=i,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const o=this._$AM;return o!==void 0&&e?.nodeType===11&&(e=o.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,o=this){e=ie(this,e,o),Ce(e)?e===N||e==null||e===""?(this._$AH!==N&&this._$AR(),this._$AH=N):e!==this._$AH&&e!==nt&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Kr(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==N&&Ce(this._$AH)?this._$AA.nextSibling.data=e:this.T(qt.createTextNode(e)),this._$AH=e}$(e){const{values:o,_$litType$:i}=e,r=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=Ee.createElement(tr(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===r)this._$AH.p(o);else{const s=new Zr(r,this),a=s.u(this.options);s.p(o),this.T(a),this._$AH=s}}_$AC(e){let o=vi.get(e.strings);return o===void 0&&vi.set(e.strings,o=new Ee(e)),o}k(e){Uo(this._$AH)||(this._$AH=[],this._$AR());const o=this._$AH;let i,r=0;for(const s of e)r===o.length?o.push(i=new Oe(this.O($e()),this.O($e()),this,this.options)):i=o[r],i._$AI(s),r++;r<o.length&&(this._$AR(i&&i._$AB.nextSibling,r),o.length=r)}_$AR(e=this._$AA.nextSibling,o){for(this._$AP?.(!1,!0,o);e!==this._$AB;){const i=hi(e).nextSibling;hi(e).remove(),e=i}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}}class so{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,o,i,r,s){this.type=1,this._$AH=N,this._$AN=void 0,this.element=e,this.name=o,this._$AM=r,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=N}_$AI(e,o=this,i,r){const s=this.strings;let a=!1;if(s===void 0)e=ie(this,e,o,0),a=!Ce(e)||e!==this._$AH&&e!==nt,a&&(this._$AH=e);else{const n=e;let c,p;for(e=s[0],c=0;c<s.length-1;c++)p=ie(this,n[i+c],o,c),p===nt&&(p=this._$AH[c]),a||=!Ce(p)||p!==this._$AH[c],p===N?e=N:e!==N&&(e+=(p??"")+s[c+1]),this._$AH[c]=p}a&&!r&&this.j(e)}j(e){e===N?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Jr extends so{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===N?void 0:e}}class Qr extends so{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==N)}}class ts extends so{constructor(e,o,i,r,s){super(e,o,i,r,s),this.type=5}_$AI(e,o=this){if((e=ie(this,e,o,0)??N)===nt)return;const i=this._$AH,r=e===N&&i!==N||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,s=e!==N&&(i===N||r);r&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class es{constructor(e,o,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=o,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){ie(this,e)}}const os=No.litHtmlPolyfillSupport;os?.(Ee,Oe),(No.litHtmlVersions??=[]).push("3.3.2");const is=(t,e,o)=>{const i=o?.renderBefore??e;let r=i._$litPart$;if(r===void 0){const s=o?.renderBefore??null;i._$litPart$=r=new Oe(e.insertBefore($e(),s),s,void 0,o??{})}return r._$AI(t),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const jo=globalThis;let H=class extends Qt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const o=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=is(o,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return nt}};H._$litElement$=!0,H.finalized=!0,jo.litElementHydrateSupport?.({LitElement:H});const rs=jo.litElementPolyfillSupport;rs?.({LitElement:H});(jo.litElementVersions??=[]).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ot=t=>(e,o)=>{o!==void 0?o.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ss={attribute:!0,type:String,converter:oe,reflect:!1,hasChanged:Vo},as=(t=ss,e,o)=>{const{kind:i,metadata:r}=o;let s=globalThis.litPropertyMetadata.get(r);if(s===void 0&&globalThis.litPropertyMetadata.set(r,s=new Map),i==="setter"&&((t=Object.create(t)).wrapped=!0),s.set(o.name,t),i==="accessor"){const{name:a}=o;return{set(n){const c=e.get.call(this);e.set.call(this,n),this.requestUpdate(a,c,t,!0,n)},init(n){return n!==void 0&&this.C(a,void 0,t,n),n}}}if(i==="setter"){const{name:a}=o;return function(n){const c=this[a];e.call(this,n),this.requestUpdate(a,c,t,!0,n)}}throw Error("Unsupported decorator location: "+i)};function d(t){return(e,o)=>typeof o=="object"?as(t,e,o):((i,r,s)=>{const a=r.hasOwnProperty(s);return r.constructor.createProperty(s,i),a?Object.getOwnPropertyDescriptor(r,s):void 0})(t,e,o)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function x(t){return d({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ns(t){return(e,o)=>{const i=typeof e=="function"?e:e[o];Object.assign(i,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ls=(t,e,o)=>(o.configurable=!0,o.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,o),o);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function A(t,e){return(o,i,r)=>{const s=a=>a.renderRoot?.querySelector(t)??null;return ls(o,i,{get(){return s(this)}})}}var Co="";function Eo(t){Co=t}function cs(t=""){if(!Co){const e=[...document.getElementsByTagName("script")],o=e.find(i=>i.hasAttribute("data-shoelace"));if(o)Eo(o.getAttribute("data-shoelace"));else{const i=e.find(s=>/shoelace(\.min)?\.js($|\?)/.test(s.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(s.src));let r="";i&&(r=i.getAttribute("src")),Eo(r.split("/").slice(0,-1).join("/"))}}return Co.replace(/\/$/,"")+(t?`/${t.replace(/^\//,"")}`:"")}var ds={name:"default",resolver:t=>cs(`assets/icons/${t}.svg`)},us=ds,yi={caret:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,check:`
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"chevron-down":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"chevron-left":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,"chevron-right":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,copy:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>
    </svg>
  `,eye:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,"eye-slash":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,eyedropper:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,"grip-vertical":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  `,indeterminate:`
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"person-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,"play-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,"pause-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,radio:`
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `,"star-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,"x-lg":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>
  `,"x-circle-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `},hs={name:"system",resolver:t=>t in yi?`data:image/svg+xml,${encodeURIComponent(yi[t])}`:""},ps=hs,fs=[us,ps],Ao=[];function ms(t){Ao.push(t)}function bs(t){Ao=Ao.filter(e=>e!==t)}function wi(t){return fs.find(e=>e.name===t)}var gs=E`
  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`,er=Object.defineProperty,vs=Object.defineProperties,ys=Object.getOwnPropertyDescriptor,ws=Object.getOwnPropertyDescriptors,xi=Object.getOwnPropertySymbols,xs=Object.prototype.hasOwnProperty,_s=Object.prototype.propertyIsEnumerable,vo=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),Ho=t=>{throw TypeError(t)},_i=(t,e,o)=>e in t?er(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,Bt=(t,e)=>{for(var o in e||(e={}))xs.call(e,o)&&_i(t,o,e[o]);if(xi)for(var o of xi(e))_s.call(e,o)&&_i(t,o,e[o]);return t},ao=(t,e)=>vs(t,ws(e)),l=(t,e,o,i)=>{for(var r=i>1?void 0:i?ys(e,o):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(r=(i?a(e,o,r):a(r))||r);return i&&r&&er(e,o,r),r},or=(t,e,o)=>e.has(t)||Ho("Cannot "+o),ks=(t,e,o)=>(or(t,e,"read from private field"),e.get(t)),$s=(t,e,o)=>e.has(t)?Ho("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,o),Cs=(t,e,o,i)=>(or(t,e,"write to private field"),e.set(t,o),o),Es=function(t,e){this[0]=t,this[1]=e},As=t=>{var e=t[vo("asyncIterator")],o=!1,i,r={};return e==null?(e=t[vo("iterator")](),i=s=>r[s]=a=>e[s](a)):(e=e.call(t),i=s=>r[s]=a=>{if(o){if(o=!1,s==="throw")throw a;return a}return o=!0,{done:!1,value:new Es(new Promise(n=>{var c=e[s](a);c instanceof Object||Ho("Object expected"),n(c)}),1)}}),r[vo("iterator")]=()=>r,i("next"),"throw"in e?i("throw"):r.throw=s=>{throw s},"return"in e&&i("return"),r};function L(t,e){const o=Bt({waitUntilFirstUpdate:!1},e);return(i,r)=>{const{update:s}=i,a=Array.isArray(t)?t:[t];i.update=function(n){a.forEach(c=>{const p=c;if(n.has(p)){const h=n.get(p),u=this[p];h!==u&&(!o.waitUntilFirstUpdate||this.hasUpdated)&&this[r](h,u)}}),s.call(this,n)}}}var U=E`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`,je,F=class extends H{constructor(){super(),$s(this,je,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([t,e])=>{this.constructor.define(t,e)})}emit(t,e){const o=new CustomEvent(t,Bt({bubbles:!0,cancelable:!1,composed:!0,detail:{}},e));return this.dispatchEvent(o),o}static define(t,e=this,o={}){const i=customElements.get(t);if(!i){try{customElements.define(t,e,o)}catch{customElements.define(t,class extends e{},o)}return}let r=" (unknown version)",s=r;"version"in e&&e.version&&(r=" v"+e.version),"version"in i&&i.version&&(s=" v"+i.version),!(r&&s&&r===s)&&console.warn(`Attempted to register <${t}>${r}, but <${t}>${s} has already been registered.`)}attributeChangedCallback(t,e,o){ks(this,je)||(this.constructor.elementProperties.forEach((i,r)=>{i.reflect&&this[r]!=null&&this.initialReflectedProperties.set(r,this[r])}),Cs(this,je,!0)),super.attributeChangedCallback(t,e,o)}willUpdate(t){super.willUpdate(t),this.initialReflectedProperties.forEach((e,o)=>{t.has(o)&&this[o]==null&&(this[o]=e)})}};je=new WeakMap;F.version="2.20.1";F.dependencies={};l([d()],F.prototype,"dir",2);l([d()],F.prototype,"lang",2);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const zs=(t,e)=>t?._$litType$!==void 0,Ss=t=>t.strings===void 0,Ts={},Os=(t,e=Ts)=>t._$AH=e;var pe=Symbol(),Me=Symbol(),yo,wo=new Map,Z=class extends F{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(t,e){var o;let i;if(e?.spriteSheet)return this.svg=m`<svg part="svg">
        <use part="use" href="${t}"></use>
      </svg>`,this.svg;try{if(i=await fetch(t,{mode:"cors"}),!i.ok)return i.status===410?pe:Me}catch{return Me}try{const r=document.createElement("div");r.innerHTML=await i.text();const s=r.firstElementChild;if(((o=s?.tagName)==null?void 0:o.toLowerCase())!=="svg")return pe;yo||(yo=new DOMParser);const n=yo.parseFromString(s.outerHTML,"text/html").body.querySelector("svg");return n?(n.part.add("svg"),document.adoptNode(n)):pe}catch{return pe}}connectedCallback(){super.connectedCallback(),ms(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),bs(this)}getIconSource(){const t=wi(this.library);return this.name&&t?{url:t.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var t;const{url:e,fromLibrary:o}=this.getIconSource(),i=o?wi(this.library):void 0;if(!e){this.svg=null;return}let r=wo.get(e);if(r||(r=this.resolveIcon(e,i),wo.set(e,r)),!this.initialRender)return;const s=await r;if(s===Me&&wo.delete(e),e===this.getIconSource().url){if(zs(s)){if(this.svg=s,i){await this.updateComplete;const a=this.shadowRoot.querySelector("[part='svg']");typeof i.mutator=="function"&&a&&i.mutator(a)}return}switch(s){case Me:case pe:this.svg=null,this.emit("sl-error");break;default:this.svg=s.cloneNode(!0),(t=i?.mutator)==null||t.call(i,this.svg),this.emit("sl-load")}}}render(){return this.svg}};Z.styles=[U,gs];l([x()],Z.prototype,"svg",2);l([d({reflect:!0})],Z.prototype,"name",2);l([d()],Z.prototype,"src",2);l([d()],Z.prototype,"label",2);l([d({reflect:!0})],Z.prototype,"library",2);l([L("label")],Z.prototype,"handleLabelChange",1);l([L(["name","src","library"])],Z.prototype,"setIcon",1);Z.define("sl-icon");var Ds=E`
  :host {
    --size: 25rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .drawer {
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
  }

  .drawer--contained {
    position: absolute;
    z-index: initial;
  }

  .drawer--fixed {
    position: fixed;
    z-index: var(--sl-z-index-drawer);
  }

  .drawer__panel {
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: 2;
    max-width: 100%;
    max-height: 100%;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-large);
    overflow: auto;
    pointer-events: all;
  }

  .drawer__panel:focus {
    outline: none;
  }

  .drawer--top .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--end .drawer__panel {
    top: 0;
    inset-inline-end: 0;
    bottom: auto;
    inset-inline-start: auto;
    width: var(--size);
    height: 100%;
  }

  .drawer--bottom .drawer__panel {
    top: auto;
    inset-inline-end: auto;
    bottom: 0;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--start .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: var(--size);
    height: 100%;
  }

  .drawer__header {
    display: flex;
  }

  .drawer__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .drawer__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .drawer__header-actions sl-icon-button,
  .drawer__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .drawer__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .drawer__footer {
    text-align: right;
    padding: var(--footer-spacing);
  }

  .drawer__footer ::slotted(sl-button:not(:last-of-type)) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .drawer:not(.drawer--has-footer) .drawer__footer {
    display: none;
  }

  .drawer__overlay {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
    pointer-events: all;
  }

  .drawer--contained .drawer__overlay {
    display: none;
  }

  @media (forced-colors: active) {
    .drawer__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`;function*Wo(t=document.activeElement){t!=null&&(yield t,"shadowRoot"in t&&t.shadowRoot&&t.shadowRoot.mode!=="closed"&&(yield*As(Wo(t.shadowRoot.activeElement))))}function Ps(){return[...Wo()].pop()}var ki=new WeakMap;function ir(t){let e=ki.get(t);return e||(e=window.getComputedStyle(t,null),ki.set(t,e)),e}function Ls(t){if(typeof t.checkVisibility=="function")return t.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});const e=ir(t);return e.visibility!=="hidden"&&e.display!=="none"}function Rs(t){const e=ir(t),{overflowY:o,overflowX:i}=e;return o==="scroll"||i==="scroll"?!0:o!=="auto"||i!=="auto"?!1:t.scrollHeight>t.clientHeight&&o==="auto"||t.scrollWidth>t.clientWidth&&i==="auto"}function Is(t){const e=t.tagName.toLowerCase(),o=Number(t.getAttribute("tabindex"));if(t.hasAttribute("tabindex")&&(isNaN(o)||o<=-1)||t.hasAttribute("disabled")||t.closest("[inert]"))return!1;if(e==="input"&&t.getAttribute("type")==="radio"){const s=t.getRootNode(),a=`input[type='radio'][name="${t.getAttribute("name")}"]`,n=s.querySelector(`${a}:checked`);return n?n===t:s.querySelector(a)===t}return Ls(t)?(e==="audio"||e==="video")&&t.hasAttribute("controls")||t.hasAttribute("tabindex")||t.hasAttribute("contenteditable")&&t.getAttribute("contenteditable")!=="false"||["button","input","select","textarea","a","audio","video","summary","iframe"].includes(e)?!0:Rs(t):!1}function Fs(t,e){var o;return((o=t.getRootNode({composed:!0}))==null?void 0:o.host)!==e}function $i(t){const e=new WeakMap,o=[];function i(r){if(r instanceof Element){if(r.hasAttribute("inert")||r.closest("[inert]")||e.has(r))return;e.set(r,!0),!o.includes(r)&&Is(r)&&o.push(r),r instanceof HTMLSlotElement&&Fs(r,t)&&r.assignedElements({flatten:!0}).forEach(s=>{i(s)}),r.shadowRoot!==null&&r.shadowRoot.mode==="open"&&i(r.shadowRoot)}for(const s of r.children)i(s)}return i(t),o.sort((r,s)=>{const a=Number(r.getAttribute("tabindex"))||0;return(Number(s.getAttribute("tabindex"))||0)-a})}var fe=[],rr=class{constructor(t){this.tabDirection="forward",this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=e=>{var o;if(e.key!=="Tab"||this.isExternalActivated||!this.isActive())return;const i=Ps();if(this.previousFocus=i,this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;e.shiftKey?this.tabDirection="backward":this.tabDirection="forward";const r=$i(this.element);let s=r.findIndex(n=>n===i);this.previousFocus=this.currentFocus;const a=this.tabDirection==="forward"?1:-1;for(;;){s+a>=r.length?s=0:s+a<0?s=r.length-1:s+=a,this.previousFocus=this.currentFocus;const n=r[s];if(this.tabDirection==="backward"&&this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus)||n&&this.possiblyHasTabbableChildren(n))return;e.preventDefault(),this.currentFocus=n,(o=this.currentFocus)==null||o.focus({preventScroll:!1});const c=[...Wo()];if(c.includes(this.currentFocus)||!c.includes(this.previousFocus))break}setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=t,this.elementsWithTabbableControls=["iframe"]}activate(){fe.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){fe=fe.filter(t=>t!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return fe[fe.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){const t=$i(this.element);if(!this.element.matches(":focus-within")){const e=t[0],o=t[t.length-1],i=this.tabDirection==="forward"?e:o;typeof i?.focus=="function"&&(this.currentFocus=i,i.focus({preventScroll:!1}))}}}possiblyHasTabbableChildren(t){return this.elementsWithTabbableControls.includes(t.tagName.toLowerCase())||t.hasAttribute("controls")}};function Bs(t,e){return{top:Math.round(t.getBoundingClientRect().top-e.getBoundingClientRect().top),left:Math.round(t.getBoundingClientRect().left-e.getBoundingClientRect().left)}}var zo=new Set;function Ms(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}function Vs(){const t=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(t)||!t?0:t}function xe(t){if(zo.add(t),!document.documentElement.classList.contains("sl-scroll-lock")){const e=Ms()+Vs();let o=getComputedStyle(document.documentElement).scrollbarGutter;(!o||o==="auto")&&(o="stable"),e<2&&(o=""),document.documentElement.style.setProperty("--sl-scroll-lock-gutter",o),document.documentElement.classList.add("sl-scroll-lock"),document.documentElement.style.setProperty("--sl-scroll-lock-size",`${e}px`)}}function _e(t){zo.delete(t),zo.size===0&&(document.documentElement.classList.remove("sl-scroll-lock"),document.documentElement.style.removeProperty("--sl-scroll-lock-size"))}function So(t,e,o="vertical",i="smooth"){const r=Bs(t,e),s=r.top+e.scrollTop,a=r.left+e.scrollLeft,n=e.scrollLeft,c=e.scrollLeft+e.offsetWidth,p=e.scrollTop,h=e.scrollTop+e.offsetHeight;(o==="horizontal"||o==="both")&&(a<n?e.scrollTo({left:a,behavior:i}):a+t.clientWidth>c&&e.scrollTo({left:a-e.offsetWidth+t.clientWidth,behavior:i})),(o==="vertical"||o==="both")&&(s<p?e.scrollTo({top:s,behavior:i}):s+t.clientHeight>h&&e.scrollTo({top:s-e.offsetHeight+t.clientHeight,behavior:i}))}var sr=t=>{var e;const{activeElement:o}=document;o&&t.contains(o)&&((e=document.activeElement)==null||e.blur())},Ns=E`
  :host {
    display: inline-block;
    color: var(--sl-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const St={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},qo=t=>(...e)=>({_$litDirective$:t,values:e});let Go=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,o,i){this._$Ct=e,this._$AM=o,this._$Ci=i}_$AS(e,o){return this.update(e,o)}update(e,o){return this.render(...o)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const R=qo(class extends Go{constructor(t){if(super(t),t.type!==St.ATTRIBUTE||t.name!=="class"||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in e)e[i]&&!this.nt?.has(i)&&this.st.add(i);return this.render(e)}const o=t.element.classList;for(const i of this.st)i in e||(o.remove(i),this.st.delete(i));for(const i in e){const r=!!e[i];r===this.st.has(i)||this.nt?.has(i)||(r?(o.add(i),this.st.add(i)):(o.remove(i),this.st.delete(i)))}return nt}});/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ar=Symbol.for(""),Us=t=>{if(t?.r===ar)return t?._$litStatic$},Xe=(t,...e)=>({_$litStatic$:e.reduce((o,i,r)=>o+(s=>{if(s._$litStatic$!==void 0)return s._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${s}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(i)+t[r+1],t[0]),r:ar}),Ci=new Map,js=t=>(e,...o)=>{const i=o.length;let r,s;const a=[],n=[];let c,p=0,h=!1;for(;p<i;){for(c=e[p];p<i&&(s=o[p],(r=Us(s))!==void 0);)c+=r+e[++p],h=!0;p!==i&&n.push(s),a.push(c),p++}if(p===i&&a.push(e[i]),h){const u=a.join("$$lit$$");(e=Ci.get(u))===void 0&&(a.raw=a,Ci.set(u,e=a)),o=n}return t(e,...o)},He=js(m);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _=t=>t??N;var W=class extends F{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}render(){const t=!!this.href,e=t?Xe`a`:Xe`button`;return He`
      <${e}
        part="base"
        class=${R({"icon-button":!0,"icon-button--disabled":!t&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${_(t?void 0:this.disabled)}
        type=${_(t?void 0:"button")}
        href=${_(t?this.href:void 0)}
        target=${_(t?this.target:void 0)}
        download=${_(t?this.download:void 0)}
        rel=${_(t&&this.target?"noreferrer noopener":void 0)}
        role=${_(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${_(this.name)}
          library=${_(this.library)}
          src=${_(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${e}>
    `}};W.styles=[U,Ns];W.dependencies={"sl-icon":Z};l([A(".icon-button")],W.prototype,"button",2);l([x()],W.prototype,"hasFocus",2);l([d()],W.prototype,"name",2);l([d()],W.prototype,"library",2);l([d()],W.prototype,"src",2);l([d()],W.prototype,"href",2);l([d()],W.prototype,"target",2);l([d()],W.prototype,"download",2);l([d()],W.prototype,"label",2);l([d({type:Boolean,reflect:!0})],W.prototype,"disabled",2);var nr=new Map,Hs=new WeakMap;function Ws(t){return t??{keyframes:[],options:{duration:0}}}function Ei(t,e){return e.toLowerCase()==="rtl"?{keyframes:t.rtlKeyframes||t.keyframes,options:t.options}:t}function q(t,e){nr.set(t,Ws(e))}function st(t,e,o){const i=Hs.get(t);if(i?.[e])return Ei(i[e],o.dir);const r=nr.get(e);return r?Ei(r,o.dir):{keyframes:[],options:{duration:0}}}function re(t,e){return new Promise(o=>{function i(r){r.target===t&&(t.removeEventListener(e,i),o())}t.addEventListener(e,i)})}function at(t,e,o){return new Promise(i=>{if(o?.duration===1/0)throw new Error("Promise-based animations must be finite.");const r=t.animate(e,ao(Bt({},o),{duration:qs()?0:o.duration}));r.addEventListener("cancel",i,{once:!0}),r.addEventListener("finish",i,{once:!0})})}function qs(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function yt(t){return Promise.all(t.getAnimations().map(e=>new Promise(o=>{e.cancel(),requestAnimationFrame(o)})))}var Xt=class{constructor(t,...e){this.slotNames=[],this.handleSlotChange=o=>{const i=o.target;(this.slotNames.includes("[default]")&&!i.name||i.name&&this.slotNames.includes(i.name))&&this.host.requestUpdate()},(this.host=t).addController(this),this.slotNames=e}hasDefaultSlot(){return[...this.host.childNodes].some(t=>{if(t.nodeType===t.TEXT_NODE&&t.textContent.trim()!=="")return!0;if(t.nodeType===t.ELEMENT_NODE){const e=t;if(e.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!e.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(t){return this.host.querySelector(`:scope > [slot="${t}"]`)!==null}test(t){return t==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};const To=new Set,te=new Map;let Ut,Ko="ltr",Yo="en";const lr=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(lr){const t=new MutationObserver(dr);Ko=document.documentElement.dir||"ltr",Yo=document.documentElement.lang||navigator.language,t.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function cr(...t){t.map(e=>{const o=e.$code.toLowerCase();te.has(o)?te.set(o,Object.assign(Object.assign({},te.get(o)),e)):te.set(o,e),Ut||(Ut=e)}),dr()}function dr(){lr&&(Ko=document.documentElement.dir||"ltr",Yo=document.documentElement.lang||navigator.language),[...To.keys()].map(t=>{typeof t.requestUpdate=="function"&&t.requestUpdate()})}let Gs=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){To.add(this.host)}hostDisconnected(){To.delete(this.host)}dir(){return`${this.host.dir||Ko}`.toLowerCase()}lang(){return`${this.host.lang||Yo}`.toLowerCase()}getTranslationData(e){var o,i;const r=new Intl.Locale(e.replace(/_/g,"-")),s=r?.language.toLowerCase(),a=(i=(o=r?.region)===null||o===void 0?void 0:o.toLowerCase())!==null&&i!==void 0?i:"",n=te.get(`${s}-${a}`),c=te.get(s);return{locale:r,language:s,region:a,primary:n,secondary:c}}exists(e,o){var i;const{primary:r,secondary:s}=this.getTranslationData((i=o.lang)!==null&&i!==void 0?i:this.lang());return o=Object.assign({includeFallback:!1},o),!!(r&&r[e]||s&&s[e]||o.includeFallback&&Ut&&Ut[e])}term(e,...o){const{primary:i,secondary:r}=this.getTranslationData(this.lang());let s;if(i&&i[e])s=i[e];else if(r&&r[e])s=r[e];else if(Ut&&Ut[e])s=Ut[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof s=="function"?s(...o):s}date(e,o){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),o).format(e)}number(e,o){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),o).format(e)}relativeTime(e,o,i){return new Intl.RelativeTimeFormat(this.lang(),i).format(e,o)}};var ur={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(t,e)=>`Go to slide ${t} of ${e}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:t=>t===0?"No options selected":t===1?"1 option selected":`${t} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:t=>`Slide ${t}`,toggleColorFormat:"Toggle color format"};cr(ur);var Ks=ur,ft=class extends Gs{};cr(Ks);function Ai(t){return t.charAt(0).toUpperCase()+t.slice(1)}var it=class extends F{constructor(){super(...arguments),this.hasSlotController=new Xt(this,"footer"),this.localize=new ft(this),this.modal=new rr(this),this.open=!1,this.label="",this.placement="end",this.contained=!1,this.noHeader=!1,this.handleDocumentKeyDown=t=>{this.contained||t.key==="Escape"&&this.modal.isActive()&&this.open&&(t.stopImmediatePropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.drawer.hidden=!this.open,this.open&&(this.addOpenListeners(),this.contained||(this.modal.activate(),xe(this)))}disconnectedCallback(){super.disconnectedCallback(),_e(this),this.removeOpenListeners()}requestClose(t){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:t}}).defaultPrevented){const o=st(this,"drawer.denyClose",{dir:this.localize.dir()});at(this.panel,o.keyframes,o.options);return}this.hide()}addOpenListeners(){var t;"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.contained||(this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard"))):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var t;document.removeEventListener("keydown",this.handleDocumentKeyDown),(t=this.closeWatcher)==null||t.destroy()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),xe(this));const t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([yt(this.drawer),yt(this.overlay)]),this.drawer.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(t?t.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),t&&t.setAttribute("autofocus","")});const e=st(this,`drawer.show${Ai(this.placement)}`,{dir:this.localize.dir()}),o=st(this,"drawer.overlay.show",{dir:this.localize.dir()});await Promise.all([at(this.panel,e.keyframes,e.options),at(this.overlay,o.keyframes,o.options)]),this.emit("sl-after-show")}else{sr(this),this.emit("sl-hide"),this.removeOpenListeners(),this.contained||(this.modal.deactivate(),_e(this)),await Promise.all([yt(this.drawer),yt(this.overlay)]);const t=st(this,`drawer.hide${Ai(this.placement)}`,{dir:this.localize.dir()}),e=st(this,"drawer.overlay.hide",{dir:this.localize.dir()});await Promise.all([at(this.overlay,e.keyframes,e.options).then(()=>{this.overlay.hidden=!0}),at(this.panel,t.keyframes,t.options).then(()=>{this.panel.hidden=!0})]),this.drawer.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1;const o=this.originalTrigger;typeof o?.focus=="function"&&setTimeout(()=>o.focus()),this.emit("sl-after-hide")}}handleNoModalChange(){this.open&&!this.contained&&(this.modal.activate(),xe(this)),this.open&&this.contained&&(this.modal.deactivate(),_e(this))}async show(){if(!this.open)return this.open=!0,re(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,re(this,"sl-after-hide")}render(){return m`
      <div
        part="base"
        class=${R({drawer:!0,"drawer--open":this.open,"drawer--top":this.placement==="top","drawer--end":this.placement==="end","drawer--bottom":this.placement==="bottom","drawer--start":this.placement==="start","drawer--contained":this.contained,"drawer--fixed":!this.contained,"drawer--rtl":this.localize.dir()==="rtl","drawer--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="drawer__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${_(this.noHeader?this.label:void 0)}
          aria-labelledby=${_(this.noHeader?void 0:"title")}
          tabindex="0"
        >
          ${this.noHeader?"":m`
                <header part="header" class="drawer__header">
                  <h2 part="title" class="drawer__title" id="title">
                    <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                    <slot name="label"> ${this.label.length>0?this.label:"\uFEFF"} </slot>
                  </h2>
                  <div part="header-actions" class="drawer__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="drawer__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click=${()=>this.requestClose("close-button")}
                    ></sl-icon-button>
                  </div>
                </header>
              `}

          <slot part="body" class="drawer__body"></slot>

          <footer part="footer" class="drawer__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};it.styles=[U,Ds];it.dependencies={"sl-icon-button":W};l([A(".drawer")],it.prototype,"drawer",2);l([A(".drawer__panel")],it.prototype,"panel",2);l([A(".drawer__overlay")],it.prototype,"overlay",2);l([d({type:Boolean,reflect:!0})],it.prototype,"open",2);l([d({reflect:!0})],it.prototype,"label",2);l([d({reflect:!0})],it.prototype,"placement",2);l([d({type:Boolean,reflect:!0})],it.prototype,"contained",2);l([d({attribute:"no-header",type:Boolean,reflect:!0})],it.prototype,"noHeader",2);l([L("open",{waitUntilFirstUpdate:!0})],it.prototype,"handleOpenChange",1);l([L("contained",{waitUntilFirstUpdate:!0})],it.prototype,"handleNoModalChange",1);q("drawer.showTop",{keyframes:[{opacity:0,translate:"0 -100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});q("drawer.hideTop",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 -100%"}],options:{duration:250,easing:"ease"}});q("drawer.showEnd",{keyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});q("drawer.hideEnd",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],options:{duration:250,easing:"ease"}});q("drawer.showBottom",{keyframes:[{opacity:0,translate:"0 100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});q("drawer.hideBottom",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 100%"}],options:{duration:250,easing:"ease"}});q("drawer.showStart",{keyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});q("drawer.hideStart",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],options:{duration:250,easing:"ease"}});q("drawer.denyClose",{keyframes:[{scale:1},{scale:1.01},{scale:1}],options:{duration:250}});q("drawer.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});q("drawer.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});it.define("sl-drawer");W.define("sl-icon-button");var Ys=E`
  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
    flex: none;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.05em, 3em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.05em, 3em;
    }
  }
`,Xo=class extends F{constructor(){super(...arguments),this.localize=new ft(this)}render(){return m`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};Xo.styles=[U,Ys];var me=new WeakMap,be=new WeakMap,ge=new WeakMap,xo=new WeakSet,Ve=new WeakMap,De=class{constructor(t,e){this.handleFormData=o=>{const i=this.options.disabled(this.host),r=this.options.name(this.host),s=this.options.value(this.host),a=this.host.tagName.toLowerCase()==="sl-button";this.host.isConnected&&!i&&!a&&typeof r=="string"&&r.length>0&&typeof s<"u"&&(Array.isArray(s)?s.forEach(n=>{o.formData.append(r,n.toString())}):o.formData.append(r,s.toString()))},this.handleFormSubmit=o=>{var i;const r=this.options.disabled(this.host),s=this.options.reportValidity;this.form&&!this.form.noValidate&&((i=me.get(this.form))==null||i.forEach(a=>{this.setUserInteracted(a,!0)})),this.form&&!this.form.noValidate&&!r&&!s(this.host)&&(o.preventDefault(),o.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),Ve.set(this.host,[])},this.handleInteraction=o=>{const i=Ve.get(this.host);i.includes(o.type)||i.push(o.type),i.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const o=this.form.querySelectorAll("*");for(const i of o)if(typeof i.checkValidity=="function"&&!i.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const o=this.form.querySelectorAll("*");for(const i of o)if(typeof i.reportValidity=="function"&&!i.reportValidity())return!1}return!0},(this.host=t).addController(this),this.options=Bt({form:o=>{const i=o.form;if(i){const s=o.getRootNode().querySelector(`#${i}`);if(s)return s}return o.closest("form")},name:o=>o.name,value:o=>o.value,defaultValue:o=>o.defaultValue,disabled:o=>{var i;return(i=o.disabled)!=null?i:!1},reportValidity:o=>typeof o.reportValidity=="function"?o.reportValidity():!0,checkValidity:o=>typeof o.checkValidity=="function"?o.checkValidity():!0,setValue:(o,i)=>o.value=i,assumeInteractionOn:["sl-input"]},e)}hostConnected(){const t=this.options.form(this.host);t&&this.attachForm(t),Ve.set(this.host,[]),this.options.assumeInteractionOn.forEach(e=>{this.host.addEventListener(e,this.handleInteraction)})}hostDisconnected(){this.detachForm(),Ve.delete(this.host),this.options.assumeInteractionOn.forEach(t=>{this.host.removeEventListener(t,this.handleInteraction)})}hostUpdated(){const t=this.options.form(this.host);t||this.detachForm(),t&&this.form!==t&&(this.detachForm(),this.attachForm(t)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(t){t?(this.form=t,me.has(this.form)?me.get(this.form).add(this.host):me.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),be.has(this.form)||(be.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),ge.has(this.form)||(ge.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const t=me.get(this.form);t&&(t.delete(this.host),t.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),be.has(this.form)&&(this.form.reportValidity=be.get(this.form),be.delete(this.form)),ge.has(this.form)&&(this.form.checkValidity=ge.get(this.form),ge.delete(this.form)),this.form=void 0))}setUserInteracted(t,e){e?xo.add(t):xo.delete(t),t.requestUpdate()}doAction(t,e){if(this.form){const o=document.createElement("button");o.type=t,o.style.position="absolute",o.style.width="0",o.style.height="0",o.style.clipPath="inset(50%)",o.style.overflow="hidden",o.style.whiteSpace="nowrap",e&&(o.name=e.name,o.value=e.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(i=>{e.hasAttribute(i)&&o.setAttribute(i,e.getAttribute(i))})),this.form.append(o),o.click(),o.remove()}}getForm(){var t;return(t=this.form)!=null?t:null}reset(t){this.doAction("reset",t)}submit(t){this.doAction("submit",t)}setValidity(t){const e=this.host,o=!!xo.has(e),i=!!e.required;e.toggleAttribute("data-required",i),e.toggleAttribute("data-optional",!i),e.toggleAttribute("data-invalid",!t),e.toggleAttribute("data-valid",t),e.toggleAttribute("data-user-invalid",!t&&o),e.toggleAttribute("data-user-valid",t&&o)}updateValidity(){const t=this.host;this.setValidity(t.validity.valid)}emitInvalidEvent(t){const e=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});t||e.preventDefault(),this.host.dispatchEvent(e)||t?.preventDefault()}},Zo=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1});Object.freeze(ao(Bt({},Zo),{valid:!1,valueMissing:!0}));Object.freeze(ao(Bt({},Zo),{valid:!1,customError:!0}));var Xs=E`
  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition:
      var(--sl-transition-x-fast) background-color,
      var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border,
      var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up from children */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  @media (forced-colors: active) {
    .button.button--outline.button--checked:not(.button--disabled) {
      outline: solid 2px transparent;
    }
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    height: auto;
    min-height: var(--sl-input-height-small);
    font-size: var(--sl-button-font-size-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    height: auto;
    min-height: var(--sl-input-height-medium);
    font-size: var(--sl-button-font-size-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    height: auto;
    min-height: var(--sl-input-height-large);
    font-size: var(--sl-button-font-size-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    translate: -50% -50%;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host([data-sl-button-group__button--first]:not([data-sl-button-group__button--last])) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host([data-sl-button-group__button--inner]) .button {
    border-radius: 0;
  }

  :host([data-sl-button-group__button--last]:not([data-sl-button-group__button--first])) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host([data-sl-button-group__button]:not([data-sl-button-group__button--first])) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      [data-sl-button-group__button]:not(
          [data-sl-button-group__button--first],
          [data-sl-button-group__button--radio],
          [variant='default']
        ):not(:hover)
    )
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host([data-sl-button-group__button--hover]) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host([data-sl-button-group__button--focus]),
  :host([data-sl-button-group__button][checked]) {
    z-index: 2;
  }
`,D=class extends F{constructor(){super(...arguments),this.formControlController=new De(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new Xt(this,"[default]","prefix","suffix"),this.localize=new ft(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:Zo}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(t){this.isButton()&&(this.button.setCustomValidity(t),this.formControlController.updateValidity())}render(){const t=this.isLink(),e=t?Xe`a`:Xe`button`;return He`
      <${e}
        part="base"
        class=${R({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${_(t?void 0:this.disabled)}
        type=${_(t?void 0:this.type)}
        title=${this.title}
        name=${_(t?void 0:this.name)}
        value=${_(t?void 0:this.value)}
        href=${_(t&&!this.disabled?this.href:void 0)}
        target=${_(t?this.target:void 0)}
        download=${_(t?this.download:void 0)}
        rel=${_(t?this.rel:void 0)}
        role=${_(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?He` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?He`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${e}>
    `}};D.styles=[U,Xs];D.dependencies={"sl-icon":Z,"sl-spinner":Xo};l([A(".button")],D.prototype,"button",2);l([x()],D.prototype,"hasFocus",2);l([x()],D.prototype,"invalid",2);l([d()],D.prototype,"title",2);l([d({reflect:!0})],D.prototype,"variant",2);l([d({reflect:!0})],D.prototype,"size",2);l([d({type:Boolean,reflect:!0})],D.prototype,"caret",2);l([d({type:Boolean,reflect:!0})],D.prototype,"disabled",2);l([d({type:Boolean,reflect:!0})],D.prototype,"loading",2);l([d({type:Boolean,reflect:!0})],D.prototype,"outline",2);l([d({type:Boolean,reflect:!0})],D.prototype,"pill",2);l([d({type:Boolean,reflect:!0})],D.prototype,"circle",2);l([d()],D.prototype,"type",2);l([d()],D.prototype,"name",2);l([d()],D.prototype,"value",2);l([d()],D.prototype,"href",2);l([d()],D.prototype,"target",2);l([d()],D.prototype,"rel",2);l([d()],D.prototype,"download",2);l([d()],D.prototype,"form",2);l([d({attribute:"formaction"})],D.prototype,"formAction",2);l([d({attribute:"formenctype"})],D.prototype,"formEnctype",2);l([d({attribute:"formmethod"})],D.prototype,"formMethod",2);l([d({attribute:"formnovalidate",type:Boolean})],D.prototype,"formNoValidate",2);l([d({attribute:"formtarget"})],D.prototype,"formTarget",2);l([L("disabled",{waitUntilFirstUpdate:!0})],D.prototype,"handleDisabledChange",1);D.define("sl-button");var Zs=E`
  :host {
    --color: var(--sl-panel-border-color);
    --width: var(--sl-panel-border-width);
    --spacing: var(--sl-spacing-medium);
  }

  :host(:not([vertical])) {
    display: block;
    border-top: solid var(--width) var(--color);
    margin: var(--spacing) 0;
  }

  :host([vertical]) {
    display: inline-block;
    height: 100%;
    border-left: solid var(--width) var(--color);
    margin: 0 var(--spacing);
  }
`,no=class extends F{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};no.styles=[U,Zs];l([d({type:Boolean,reflect:!0})],no.prototype,"vertical",2);l([L("vertical")],no.prototype,"handleVerticalChange",1);no.define("sl-divider");function Js(t){for(var e=[],o=0;o<t.length;){var i=t[o];if(i==="*"||i==="+"||i==="?"){e.push({type:"MODIFIER",index:o,value:t[o++]});continue}if(i==="\\"){e.push({type:"ESCAPED_CHAR",index:o++,value:t[o++]});continue}if(i==="{"){e.push({type:"OPEN",index:o,value:t[o++]});continue}if(i==="}"){e.push({type:"CLOSE",index:o,value:t[o++]});continue}if(i===":"){for(var r="",s=o+1;s<t.length;){var a=t.charCodeAt(s);if(a>=48&&a<=57||a>=65&&a<=90||a>=97&&a<=122||a===95){r+=t[s++];continue}break}if(!r)throw new TypeError("Missing parameter name at ".concat(o));e.push({type:"NAME",index:o,value:r}),o=s;continue}if(i==="("){var n=1,c="",s=o+1;if(t[s]==="?")throw new TypeError('Pattern cannot start with "?" at '.concat(s));for(;s<t.length;){if(t[s]==="\\"){c+=t[s++]+t[s++];continue}if(t[s]===")"){if(n--,n===0){s++;break}}else if(t[s]==="("&&(n++,t[s+1]!=="?"))throw new TypeError("Capturing groups are not allowed at ".concat(s));c+=t[s++]}if(n)throw new TypeError("Unbalanced pattern at ".concat(o));if(!c)throw new TypeError("Missing pattern at ".concat(o));e.push({type:"PATTERN",index:o,value:c}),o=s;continue}e.push({type:"CHAR",index:o,value:t[o++]})}return e.push({type:"END",index:o,value:""}),e}function Jo(t,e){e===void 0&&(e={});for(var o=Js(t),i=e.prefixes,r=i===void 0?"./":i,s=e.delimiter,a=s===void 0?"/#?":s,n=[],c=0,p=0,h="",u=function(M){if(p<o.length&&o[p].type===M)return o[p++].value},b=function(M){var O=u(M);if(O!==void 0)return O;var j=o[p],J=j.type,gt=j.index;throw new TypeError("Unexpected ".concat(J," at ").concat(gt,", expected ").concat(M))},f=function(){for(var M="",O;O=u("CHAR")||u("ESCAPED_CHAR");)M+=O;return M},g=function(M){for(var O=0,j=a;O<j.length;O++){var J=j[O];if(M.indexOf(J)>-1)return!0}return!1},y=function(M){var O=n[n.length-1],j=M||(O&&typeof O=="string"?O:"");if(O&&!j)throw new TypeError('Must have text between two parameters, missing text after "'.concat(O.name,'"'));return!j||g(j)?"[^".concat(Ot(a),"]+?"):"(?:(?!".concat(Ot(j),")[^").concat(Ot(a),"])+?")};p<o.length;){var w=u("CHAR"),v=u("NAME"),z=u("PATTERN");if(v||z){var $=w||"";r.indexOf($)===-1&&(h+=$,$=""),h&&(n.push(h),h=""),n.push({name:v||c++,prefix:$,suffix:"",pattern:z||y($),modifier:u("MODIFIER")||""});continue}var k=w||u("ESCAPED_CHAR");if(k){h+=k;continue}h&&(n.push(h),h="");var B=u("OPEN");if(B){var $=f(),P=u("NAME")||"",V=u("PATTERN")||"",K=f();b("CLOSE"),n.push({name:P||(V?c++:""),pattern:P&&!V?y($):V,prefix:$,suffix:K,modifier:u("MODIFIER")||""});continue}b("END")}return n}function hr(t,e){return pr(Jo(t,e),e)}function pr(t,e){e===void 0&&(e={});var o=Qo(e),i=e.encode,r=i===void 0?function(c){return c}:i,s=e.validate,a=s===void 0?!0:s,n=t.map(function(c){if(typeof c=="object")return new RegExp("^(?:".concat(c.pattern,")$"),o)});return function(c){for(var p="",h=0;h<t.length;h++){var u=t[h];if(typeof u=="string"){p+=u;continue}var b=c?c[u.name]:void 0,f=u.modifier==="?"||u.modifier==="*",g=u.modifier==="*"||u.modifier==="+";if(Array.isArray(b)){if(!g)throw new TypeError('Expected "'.concat(u.name,'" to not repeat, but got an array'));if(b.length===0){if(f)continue;throw new TypeError('Expected "'.concat(u.name,'" to not be empty'))}for(var y=0;y<b.length;y++){var w=r(b[y],u);if(a&&!n[h].test(w))throw new TypeError('Expected all "'.concat(u.name,'" to match "').concat(u.pattern,'", but got "').concat(w,'"'));p+=u.prefix+w+u.suffix}continue}if(typeof b=="string"||typeof b=="number"){var w=r(String(b),u);if(a&&!n[h].test(w))throw new TypeError('Expected "'.concat(u.name,'" to match "').concat(u.pattern,'", but got "').concat(w,'"'));p+=u.prefix+w+u.suffix;continue}if(!f){var v=g?"an array":"a string";throw new TypeError('Expected "'.concat(u.name,'" to be ').concat(v))}}return p}}function Ot(t){return t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function Qo(t){return t&&t.sensitive?"":"i"}function Qs(t,e){if(!e)return t;for(var o=/\((?:\?<(.*?)>)?(?!\?)/g,i=0,r=o.exec(t.source);r;)e.push({name:r[1]||i++,prefix:"",suffix:"",modifier:"",pattern:""}),r=o.exec(t.source);return t}function ta(t,e,o){var i=t.map(function(r){return fr(r,e,o).source});return new RegExp("(?:".concat(i.join("|"),")"),Qo(o))}function ea(t,e,o){return oa(Jo(t,o),e,o)}function oa(t,e,o){o===void 0&&(o={});for(var i=o.strict,r=i===void 0?!1:i,s=o.start,a=s===void 0?!0:s,n=o.end,c=n===void 0?!0:n,p=o.encode,h=p===void 0?function(O){return O}:p,u=o.delimiter,b=u===void 0?"/#?":u,f=o.endsWith,g=f===void 0?"":f,y="[".concat(Ot(g),"]|$"),w="[".concat(Ot(b),"]"),v=a?"^":"",z=0,$=t;z<$.length;z++){var k=$[z];if(typeof k=="string")v+=Ot(h(k));else{var B=Ot(h(k.prefix)),P=Ot(h(k.suffix));if(k.pattern)if(e&&e.push(k),B||P)if(k.modifier==="+"||k.modifier==="*"){var V=k.modifier==="*"?"?":"";v+="(?:".concat(B,"((?:").concat(k.pattern,")(?:").concat(P).concat(B,"(?:").concat(k.pattern,"))*)").concat(P,")").concat(V)}else v+="(?:".concat(B,"(").concat(k.pattern,")").concat(P,")").concat(k.modifier);else{if(k.modifier==="+"||k.modifier==="*")throw new TypeError('Can not repeat "'.concat(k.name,'" without a prefix and suffix'));v+="(".concat(k.pattern,")").concat(k.modifier)}else v+="(?:".concat(B).concat(P,")").concat(k.modifier)}}if(c)r||(v+="".concat(w,"?")),v+=o.endsWith?"(?=".concat(y,")"):"$";else{var K=t[t.length-1],M=typeof K=="string"?w.indexOf(K[K.length-1])>-1:K===void 0;r||(v+="(?:".concat(w,"(?=").concat(y,"))?")),M||(v+="(?=".concat(w,"|").concat(y,")"))}return new RegExp(v,Qo(o))}function fr(t,e,o){return t instanceof RegExp?Qs(t,e):Array.isArray(t)?ta(t,e,o):ea(t,e,o)}const Wt=Symbol("NotFoundResult");class mr extends Error{code;context;constructor(e){super(Dt(`Page not found (${e.pathname})`)),this.context=e,this.code=404}}function jt(t){return typeof t=="object"&&!!t}function Ae(t){return typeof t=="function"}function vt(t){return typeof t=="string"}function Ze(t=[]){return Array.isArray(t)?t:[t]}function Dt(t){return`[Vaadin.Router] ${t}`}function br(t){return new mr(t)}function gr(t){return(Array.isArray(t)?t[0]:t)??""}function Je(t){return gr(t?.path)}function ia(t){return Array.isArray(t)&&t.length>0?t:void 0}const Oo=new Map;Oo.set("|false",{keys:[],pattern:/(?:)/u});function zi(t){try{return decodeURIComponent(t)}catch{return t}}function ra(t,e,o=!1,i=[],r){const s=`${t}|${String(o)}`,a=gr(e);let n=Oo.get(s);if(!n){const h=[];n={keys:h,pattern:fr(t,h,{end:o,strict:t===""})},Oo.set(s,n)}const c=n.pattern.exec(a);if(!c)return null;const p={...r};for(let h=1;h<c.length;h++){const u=n.keys[h-1],b=u.name,f=c[h];(f!==void 0||!Object.prototype.hasOwnProperty.call(p,b))&&(u.modifier==="+"||u.modifier==="*"?p[b]=f?f.split(/[/?#]/u).map(zi):[]:p[b]=f&&zi(f))}return{keys:[...i,...n.keys],params:p,path:c[0]}}var sa=ra;function vr(t,e,o,i,r){let s,a,n=0,c=Je(t);return c.startsWith("/")&&(o&&(c=c.substring(1)),o=!0),{next(p){if(t===p)return{done:!0,value:void 0};t.__children??=ia(t.children);const h=t.__children??[],u=!t.__children&&!t.children;if(!s&&(s=sa(c,e,u,i,r),s))return{value:{keys:s.keys,params:s.params,path:s.path,route:t}};if(s&&h.length>0)for(;n<h.length;){if(!a){const f=h[n];f.parent=t;let g=s.path.length;g>0&&e.charAt(g)==="/"&&(g+=1),a=vr(f,e.substring(g),o,s.keys,s.params)}const b=a.next(p);if(!b.done)return{done:!1,value:b.value};a=null,n+=1}return{done:!0,value:void 0}}}}var aa=vr;function na(t){if(Ae(t.route.action))return t.route.action(t)}function la(t,e){let o=t;for(;o;)if(o=o.parent,o===e)return!0;return!1}function ca(t){return!!t&&typeof t=="object"&&"next"in t&&"params"in t&&"result"in t&&"route"in t}class da extends Error{cause;code;context;constructor(e,o){let i=`Path '${e.pathname}' is not properly resolved due to an error.`;const r=Je(e.route);r&&(i+=` Resolution had failed on route: '${r}'`),super(i),this.cause=o?.cause,this.code=o?.code,this.context=e}warn(){console.warn(this.message)}}function ua(t,e){const{path:o,route:i}=e;if(i&&!i.__synthetic){const r={path:o,route:i};if(i.parent&&t.chain)for(let s=t.chain.length-1;s>=0&&t.chain[s].route!==i.parent;s--)t.chain.pop();t.chain?.push(r)}}class ha{baseUrl;#o;errorHandler;resolveRoute;#t;constructor(e,{baseUrl:o="",context:i,errorHandler:r,resolveRoute:s=na}={}){if(Object(e)!==e)throw new TypeError("Invalid routes");this.baseUrl=o,this.errorHandler=r,this.resolveRoute=s,Array.isArray(e)?this.#t={__children:e,__synthetic:!0,action:()=>{},path:""}:this.#t={...e,parent:void 0},this.#o={...i,hash:"",async next(){return Wt},params:{},pathname:"",resolver:this,route:this.#t,search:"",chain:[]}}get root(){return this.#t}get context(){return this.#o}get __effectiveBaseUrl(){return this.baseUrl?new URL(this.baseUrl,document.baseURI||document.URL).href.replace(/[^/]*$/u,""):""}getRoutes(){return[...this.#t.__children??[]]}removeRoutes(){this.#t.__children=[]}async resolve(e){const o=this,i={...this.#o,...vt(e)?{pathname:e}:e,next:p},r=aa(this.#t,this.__normalizePathname(i.pathname)??i.pathname,!!this.baseUrl),s=this.resolveRoute;let a=null,n=null,c=i;async function p(h=!1,u=a?.value?.route,b){const f=b===null?a?.value?.route:void 0;if(a=n??r.next(f),n=null,!h&&(a.done||!la(a.value.route,u)))return n=a,Wt;if(a.done)throw br(i);c={...i,params:a.value.params,route:a.value.route,chain:c.chain?.slice()},ua(c,a.value);const g=await s(c);return g!=null&&g!==Wt?(c.result=ca(g)?g.result:g,o.#o=c,c):await p(h,u,g)}try{return await p(!0,this.#t)}catch(h){const u=h instanceof mr?h:new da(c,{code:500,cause:h});if(this.errorHandler)return c.result=this.errorHandler(u),c;throw h}}setRoutes(e){return this.#t.__children=[...Ze(e)],{}}__normalizePathname(e){if(!this.baseUrl)return e;const o=this.__effectiveBaseUrl,i=e.startsWith("/")?new URL(o).origin+e:`./${e}`,r=new URL(i,o).href;if(r.startsWith(o))return r.slice(o.length)}addRoutes(e){return this.#t.__children=[...this.#t.__children??[],...Ze(e)],this.getRoutes()}}var yr=ha;function wr(t,e,o,i){const r=e.name??i?.(e);if(r&&(t.has(r)?t.get(r)?.push(e):t.set(r,[e])),Array.isArray(o))for(const s of o)s.parent=e,wr(t,s,s.__children??s.children,i)}function Si(t,e){const o=t.get(e);if(o){if(o.length>1)throw new Error(`Duplicate route with name "${e}". Try seting unique 'name' route properties.`);return o[0]}}function pa(t,e={}){if(!(t instanceof yr))throw new TypeError("An instance of Resolver is expected");const o=new Map,i=new Map;return(r,s)=>{let a=Si(i,r);if(!a&&(i.clear(),wr(i,t.root,t.root.__children,e.cacheKeyProvider),a=Si(i,r),!a))throw new Error(`Route "${r}" not found`);let n=a.fullPath?o.get(a.fullPath):void 0;if(!n){let h=Je(a),u=a.parent;for(;u;){const g=Je(u);g&&(h=`${g.replace(/\/$/u,"")}/${h.replace(/^\//u,"")}`),u=u.parent}const b=Jo(h),f=Object.create(null);for(const g of b)vt(g)||(f[g.name]=!0);n={keys:f,tokens:b},o.set(h,n),a.fullPath=h}let p=pr(n.tokens,{encode:encodeURIComponent,...e})(s)||"/";if(e.stringifyQueryParams&&s){const h={};for(const[b,f]of Object.entries(s))!(b in n.keys)&&f&&(h[b]=f);const u=e.stringifyQueryParams(h);u&&(p+=u.startsWith("?")?u:`?${u}`)}return p}}var fa=pa;const ma=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,We=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function ba(){function t(){return!0}return xr(t)}function ga(){try{return va()?!0:ya()?We?!wa():!ba():!1}catch{return!1}}function va(){return localStorage.getItem("vaadin.developmentmode.force")}function ya(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function wa(){return!!(We&&Object.keys(We).map(e=>We[e]).filter(e=>e.productionMode).length>0)}function xr(t,e){if(typeof t!="function")return;const o=ma.exec(t.toString());if(o)try{t=new Function(o[1])}catch(i){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",i)}return t(e)}window.Vaadin=window.Vaadin||{};const Ti=function(t,e){if(window.Vaadin.developmentMode)return xr(t,e)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=ga());function xa(){/*! vaadin-dev-mode:start
  (function () {
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var getPolymerVersion = function getPolymerVersion() {
  return window.Polymer && window.Polymer.version;
};

var StatisticsGatherer = function () {
  function StatisticsGatherer(logger) {
    classCallCheck(this, StatisticsGatherer);

    this.now = new Date().getTime();
    this.logger = logger;
  }

  createClass(StatisticsGatherer, [{
    key: 'frameworkVersionDetectors',
    value: function frameworkVersionDetectors() {
      return {
        'Flow': function Flow() {
          if (window.Vaadin && window.Vaadin.Flow && window.Vaadin.Flow.clients) {
            var flowVersions = Object.keys(window.Vaadin.Flow.clients).map(function (key) {
              return window.Vaadin.Flow.clients[key];
            }).filter(function (client) {
              return client.getVersionInfo;
            }).map(function (client) {
              return client.getVersionInfo().flow;
            });
            if (flowVersions.length > 0) {
              return flowVersions[0];
            }
          }
        },
        'Vaadin Framework': function VaadinFramework() {
          if (window.vaadin && window.vaadin.clients) {
            var frameworkVersions = Object.values(window.vaadin.clients).filter(function (client) {
              return client.getVersionInfo;
            }).map(function (client) {
              return client.getVersionInfo().vaadinVersion;
            });
            if (frameworkVersions.length > 0) {
              return frameworkVersions[0];
            }
          }
        },
        'AngularJs': function AngularJs() {
          if (window.angular && window.angular.version && window.angular.version) {
            return window.angular.version.full;
          }
        },
        'Angular': function Angular() {
          if (window.ng) {
            var tags = document.querySelectorAll("[ng-version]");
            if (tags.length > 0) {
              return tags[0].getAttribute("ng-version");
            }
            return "Unknown";
          }
        },
        'Backbone.js': function BackboneJs() {
          if (window.Backbone) {
            return window.Backbone.VERSION;
          }
        },
        'React': function React() {
          var reactSelector = '[data-reactroot], [data-reactid]';
          if (!!document.querySelector(reactSelector)) {
            // React does not publish the version by default
            return "unknown";
          }
        },
        'Ember': function Ember() {
          if (window.Em && window.Em.VERSION) {
            return window.Em.VERSION;
          } else if (window.Ember && window.Ember.VERSION) {
            return window.Ember.VERSION;
          }
        },
        'jQuery': function (_jQuery) {
          function jQuery() {
            return _jQuery.apply(this, arguments);
          }

          jQuery.toString = function () {
            return _jQuery.toString();
          };

          return jQuery;
        }(function () {
          if (typeof jQuery === 'function' && jQuery.prototype.jquery !== undefined) {
            return jQuery.prototype.jquery;
          }
        }),
        'Polymer': function Polymer() {
          var version = getPolymerVersion();
          if (version) {
            return version;
          }
        },
        'LitElement': function LitElement() {
          var version = window.litElementVersions && window.litElementVersions[0];
          if (version) {
            return version;
          }
        },
        'LitHtml': function LitHtml() {
          var version = window.litHtmlVersions && window.litHtmlVersions[0];
          if (version) {
            return version;
          }
        },
        'Vue.js': function VueJs() {
          if (window.Vue) {
            return window.Vue.version;
          }
        }
      };
    }
  }, {
    key: 'getUsedVaadinElements',
    value: function getUsedVaadinElements(elements) {
      var version = getPolymerVersion();
      var elementClasses = void 0;
      // NOTE: In case you edit the code here, YOU MUST UPDATE any statistics reporting code in Flow.
      // Check all locations calling the method getEntries() in
      // https://github.com/vaadin/flow/blob/master/flow-server/src/main/java/com/vaadin/flow/internal/UsageStatistics.java#L106
      // Currently it is only used by BootstrapHandler.
      if (version && version.indexOf('2') === 0) {
        // Polymer 2: components classes are stored in window.Vaadin
        elementClasses = Object.keys(window.Vaadin).map(function (c) {
          return window.Vaadin[c];
        }).filter(function (c) {
          return c.is;
        });
      } else {
        // Polymer 3: components classes are stored in window.Vaadin.registrations
        elementClasses = window.Vaadin.registrations || [];
      }
      elementClasses.forEach(function (klass) {
        var version = klass.version ? klass.version : "0.0.0";
        elements[klass.is] = { version: version };
      });
    }
  }, {
    key: 'getUsedVaadinThemes',
    value: function getUsedVaadinThemes(themes) {
      ['Lumo', 'Material'].forEach(function (themeName) {
        var theme;
        var version = getPolymerVersion();
        if (version && version.indexOf('2') === 0) {
          // Polymer 2: themes are stored in window.Vaadin
          theme = window.Vaadin[themeName];
        } else {
          // Polymer 3: themes are stored in custom element registry
          theme = customElements.get('vaadin-' + themeName.toLowerCase() + '-styles');
        }
        if (theme && theme.version) {
          themes[themeName] = { version: theme.version };
        }
      });
    }
  }, {
    key: 'getFrameworks',
    value: function getFrameworks(frameworks) {
      var detectors = this.frameworkVersionDetectors();
      Object.keys(detectors).forEach(function (framework) {
        var detector = detectors[framework];
        try {
          var version = detector();
          if (version) {
            frameworks[framework] = { version: version };
          }
        } catch (e) {}
      });
    }
  }, {
    key: 'gather',
    value: function gather(storage) {
      var storedStats = storage.read();
      var gatheredStats = {};
      var types = ["elements", "frameworks", "themes"];

      types.forEach(function (type) {
        gatheredStats[type] = {};
        if (!storedStats[type]) {
          storedStats[type] = {};
        }
      });

      var previousStats = JSON.stringify(storedStats);

      this.getUsedVaadinElements(gatheredStats.elements);
      this.getFrameworks(gatheredStats.frameworks);
      this.getUsedVaadinThemes(gatheredStats.themes);

      var now = this.now;
      types.forEach(function (type) {
        var keys = Object.keys(gatheredStats[type]);
        keys.forEach(function (key) {
          if (!storedStats[type][key] || _typeof(storedStats[type][key]) != _typeof({})) {
            storedStats[type][key] = { firstUsed: now };
          }
          // Discards any previously logged version number
          storedStats[type][key].version = gatheredStats[type][key].version;
          storedStats[type][key].lastUsed = now;
        });
      });

      var newStats = JSON.stringify(storedStats);
      storage.write(newStats);
      if (newStats != previousStats && Object.keys(storedStats).length > 0) {
        this.logger.debug("New stats: " + newStats);
      }
    }
  }]);
  return StatisticsGatherer;
}();

var StatisticsStorage = function () {
  function StatisticsStorage(key) {
    classCallCheck(this, StatisticsStorage);

    this.key = key;
  }

  createClass(StatisticsStorage, [{
    key: 'read',
    value: function read() {
      var localStorageStatsString = localStorage.getItem(this.key);
      try {
        return JSON.parse(localStorageStatsString ? localStorageStatsString : '{}');
      } catch (e) {
        return {};
      }
    }
  }, {
    key: 'write',
    value: function write(data) {
      localStorage.setItem(this.key, data);
    }
  }, {
    key: 'clear',
    value: function clear() {
      localStorage.removeItem(this.key);
    }
  }, {
    key: 'isEmpty',
    value: function isEmpty() {
      var storedStats = this.read();
      var empty = true;
      Object.keys(storedStats).forEach(function (key) {
        if (Object.keys(storedStats[key]).length > 0) {
          empty = false;
        }
      });

      return empty;
    }
  }]);
  return StatisticsStorage;
}();

var StatisticsSender = function () {
  function StatisticsSender(url, logger) {
    classCallCheck(this, StatisticsSender);

    this.url = url;
    this.logger = logger;
  }

  createClass(StatisticsSender, [{
    key: 'send',
    value: function send(data, errorHandler) {
      var logger = this.logger;

      if (navigator.onLine === false) {
        logger.debug("Offline, can't send");
        errorHandler();
        return;
      }
      logger.debug("Sending data to " + this.url);

      var req = new XMLHttpRequest();
      req.withCredentials = true;
      req.addEventListener("load", function () {
        // Stats sent, nothing more to do
        logger.debug("Response: " + req.responseText);
      });
      req.addEventListener("error", function () {
        logger.debug("Send failed");
        errorHandler();
      });
      req.addEventListener("abort", function () {
        logger.debug("Send aborted");
        errorHandler();
      });
      req.open("POST", this.url);
      req.setRequestHeader("Content-Type", "application/json");
      req.send(data);
    }
  }]);
  return StatisticsSender;
}();

var StatisticsLogger = function () {
  function StatisticsLogger(id) {
    classCallCheck(this, StatisticsLogger);

    this.id = id;
  }

  createClass(StatisticsLogger, [{
    key: '_isDebug',
    value: function _isDebug() {
      return localStorage.getItem("vaadin." + this.id + ".debug");
    }
  }, {
    key: 'debug',
    value: function debug(msg) {
      if (this._isDebug()) {
        console.info(this.id + ": " + msg);
      }
    }
  }]);
  return StatisticsLogger;
}();

var UsageStatistics = function () {
  function UsageStatistics() {
    classCallCheck(this, UsageStatistics);

    this.now = new Date();
    this.timeNow = this.now.getTime();
    this.gatherDelay = 10; // Delay between loading this file and gathering stats
    this.initialDelay = 24 * 60 * 60;

    this.logger = new StatisticsLogger("statistics");
    this.storage = new StatisticsStorage("vaadin.statistics.basket");
    this.gatherer = new StatisticsGatherer(this.logger);
    this.sender = new StatisticsSender("https://tools.vaadin.com/usage-stats/submit", this.logger);
  }

  createClass(UsageStatistics, [{
    key: 'maybeGatherAndSend',
    value: function maybeGatherAndSend() {
      var _this = this;

      if (localStorage.getItem(UsageStatistics.optOutKey)) {
        return;
      }
      this.gatherer.gather(this.storage);
      setTimeout(function () {
        _this.maybeSend();
      }, this.gatherDelay * 1000);
    }
  }, {
    key: 'lottery',
    value: function lottery() {
      return true;
    }
  }, {
    key: 'currentMonth',
    value: function currentMonth() {
      return this.now.getYear() * 12 + this.now.getMonth();
    }
  }, {
    key: 'maybeSend',
    value: function maybeSend() {
      var firstUse = Number(localStorage.getItem(UsageStatistics.firstUseKey));
      var monthProcessed = Number(localStorage.getItem(UsageStatistics.monthProcessedKey));

      if (!firstUse) {
        // Use a grace period to avoid interfering with tests, incognito mode etc
        firstUse = this.timeNow;
        localStorage.setItem(UsageStatistics.firstUseKey, firstUse);
      }

      if (this.timeNow < firstUse + this.initialDelay * 1000) {
        this.logger.debug("No statistics will be sent until the initial delay of " + this.initialDelay + "s has passed");
        return;
      }
      if (this.currentMonth() <= monthProcessed) {
        this.logger.debug("This month has already been processed");
        return;
      }
      localStorage.setItem(UsageStatistics.monthProcessedKey, this.currentMonth());
      // Use random sampling
      if (this.lottery()) {
        this.logger.debug("Congratulations, we have a winner!");
      } else {
        this.logger.debug("Sorry, no stats from you this time");
        return;
      }

      this.send();
    }
  }, {
    key: 'send',
    value: function send() {
      // Ensure we have the latest data
      this.gatherer.gather(this.storage);

      // Read, send and clean up
      var data = this.storage.read();
      data["firstUse"] = Number(localStorage.getItem(UsageStatistics.firstUseKey));
      data["usageStatisticsVersion"] = UsageStatistics.version;
      var info = 'This request contains usage statistics gathered from the application running in development mode. \n\nStatistics gathering is automatically disabled and excluded from production builds.\n\nFor details and to opt-out, see https://github.com/vaadin/vaadin-usage-statistics.\n\n\n\n';
      var self = this;
      this.sender.send(info + JSON.stringify(data), function () {
        // Revert the 'month processed' flag
        localStorage.setItem(UsageStatistics.monthProcessedKey, self.currentMonth() - 1);
      });
    }
  }], [{
    key: 'version',
    get: function get$1() {
      return '2.1.2';
    }
  }, {
    key: 'firstUseKey',
    get: function get$1() {
      return 'vaadin.statistics.firstuse';
    }
  }, {
    key: 'monthProcessedKey',
    get: function get$1() {
      return 'vaadin.statistics.monthProcessed';
    }
  }, {
    key: 'optOutKey',
    get: function get$1() {
      return 'vaadin.statistics.optout';
    }
  }]);
  return UsageStatistics;
}();

try {
  window.Vaadin = window.Vaadin || {};
  window.Vaadin.usageStatsChecker = window.Vaadin.usageStatsChecker || new UsageStatistics();
  window.Vaadin.usageStatsChecker.maybeGatherAndSend();
} catch (e) {
  // Intentionally ignored as this is not a problem in the app being developed
}

}());

  vaadin-dev-mode:end **/}const _a=function(){if(typeof Ti=="function")return Ti(xa)};function ka(t,e=window.Vaadin??={}){e.registrations??=[],e.registrations.push({is:"@vaadin/router",version:"2.0.1"})}ka();_a();const $a=t=>{const e=getComputedStyle(t).getPropertyValue("animation-name");return e&&e!=="none"},Ca=(t,e)=>{const o=()=>{t.removeEventListener("animationend",o),e()};t.addEventListener("animationend",o)};async function Ea(t,e){return t.classList.add(e),await new Promise(o=>{if($a(t)){const i=t.getBoundingClientRect(),r=`height: ${i.bottom-i.top}px; width: ${i.right-i.left}px`;t.setAttribute("style",`position: absolute; ${r}`),Ca(t,()=>{t.classList.remove(e),t.removeAttribute("style"),o()})}else t.classList.remove(e),o()})}var Oi=Ea;function _r(t){if(!t||!vt(t.path))throw new Error(Dt('Expected route config to be an object with a "path" string property, or an array of such objects'));if(!Ae(t.action)&&!Array.isArray(t.children)&&!Ae(t.children)&&!vt(t.component)&&!vt(t.redirect))throw new Error(Dt(`Expected route config "${t.path}" to include either "component, redirect" or "action" function but none found.`));t.redirect&&["bundle","component"].forEach(e=>{e in t&&console.warn(Dt(`Route config "${String(t.path)}" has both "redirect" and "${e}" properties, and "redirect" will always override the latter. Did you mean to only use "${e}"?`))})}function Di(t){Ze(t).forEach(e=>_r(e))}function Aa({next:t,...e}){return e}function qe(t,e){const o=e.__effectiveBaseUrl;return o?new URL(t.replace(/^\//u,""),o).pathname:t}function kr(t){return t.map(e=>e.path).reduce((e,o)=>o.length?`${e.replace(/\/$/u,"")}/${o.replace(/^\//u,"")}`:e,"")}function za(t){return kr(t.map(e=>e.route))}function ut({chain:t=[],hash:e="",params:o={},pathname:i="",redirectFrom:r,resolver:s,search:a=""},n){const c=t.map(p=>p.route);return{baseUrl:s?.baseUrl??"",getUrl:(p={})=>s?qe(hr(za(t))({...o,...p}),s):"",hash:e,params:o,pathname:i,redirectFrom:r,route:n??(Array.isArray(c)?c.at(-1):void 0)??null,routes:c,search:a,searchParams:new URLSearchParams(a)}}function Pi(t,e){const o={...t.params};return{redirect:{from:t.pathname,params:o,pathname:e}}}function Sa(t,e){if(e.location=ut(t),t.chain){const o=t.chain.map(i=>i.route).indexOf(t.route);t.chain[o].element=e}return e}function Ge(t,e,...o){if(typeof t=="function")return t.apply(e,o)}function Li(t,e,...o){return i=>i&&jt(i)&&("cancel"in i||"redirect"in i)?i:Ge(e?.[t],e,...o)}function Ta(t,e){if(!Array.isArray(t)&&!jt(t))throw new Error(Dt(`Incorrect "children" value for the route ${String(e.path)}: expected array or object, but got ${String(t)}`));const o=Ze(t);o.forEach(i=>_r(i)),e.__children=o}function ke(t,e){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${t}`,{cancelable:t==="go",detail:e}))}function Oa(t){if(typeof t!="object")return String(t);const[e="Unknown"]=/ (.*)\]$/u.exec(String(t))??[];return e==="Object"||e==="Array"?`${e} ${JSON.stringify(t)}`:e}function Da(t){const{port:e,protocol:o}=t,s=o==="http:"&&e==="80"||o==="https:"&&e==="443"?t.hostname:t.host;return`${o}//${s}`}function Ri(t){if(t instanceof Element)return t.nodeName.toLowerCase()}function Ii(t){if(t.defaultPrevented||t.button!==0||t.shiftKey||t.ctrlKey||t.altKey||t.metaKey)return;let e=t.target;const o=t instanceof MouseEvent?t.composedPath():t.path??[];for(let c=0;c<o.length;c++){const p=o[c];if("nodeName"in p&&p.nodeName.toLowerCase()==="a"){e=p;break}}for(;e&&e instanceof Node&&Ri(e)!=="a";)e=e.parentNode;if(!e||Ri(e)!=="a")return;const i=e;if(i.target&&i.target.toLowerCase()!=="_self"||i.hasAttribute("download")||i.hasAttribute("router-ignore")||i.pathname===window.location.pathname&&i.hash!==""||(i.origin||Da(i))!==window.location.origin)return;const{hash:s,pathname:a,search:n}=i;ke("go",{hash:s,pathname:a,search:n})&&t instanceof MouseEvent&&(t.preventDefault(),t.type==="click"&&window.scrollTo(0,0))}const Pa={activate(){window.document.addEventListener("click",Ii)},inactivate(){window.document.removeEventListener("click",Ii)}};var La=Pa;function Fi(t){if(t.state==="vaadin-router-ignore")return;const{hash:e,pathname:o,search:i}=window.location;ke("go",{hash:e,pathname:o,search:i})}const Ra={activate(){window.addEventListener("popstate",Fi)},inactivate(){window.removeEventListener("popstate",Fi)}};var Ia=Ra;let Bi=[];const Fa={CLICK:La,POPSTATE:Ia};function Mi(t=[]){Bi.forEach(e=>e.inactivate()),t.forEach(e=>e.activate()),Bi=t}const Ba=256;function ve(){return{cancel:!0}}const Vi={__renderId:-1,params:{},route:{__synthetic:!0,children:[],path:"",action(){}},pathname:"",async next(){return Wt}};class Ma extends yr{location=ut({resolver:this});ready=Promise.resolve(this.location);#o=new WeakSet;#t=new WeakSet;#d=this.#v.bind(this);#a=0;#s;__previousContext;#n;#i=null;#e=null;constructor(e,o){const r=document.head.querySelector("base")?.getAttribute("href");super([],{baseUrl:r?new URL(r,document.URL).href.replace(/[^/]*$/u,""):void 0,...o,resolveRoute:async s=>await this.#y(s)}),Mi(Object.values(Fa)),this.setOutlet(e),this.subscribe()}async#y(e){const{route:o}=e;if(Ae(o.children)){let r=await o.children(Aa(e));Ae(o.children)||({children:r}=o),Ta(r,o)}const i={component:r=>{const s=document.createElement(r);return this.#t.add(s),s},prevent:ve,redirect:r=>Pi(e,r)};return await Promise.resolve().then(async()=>{if(this.#r(e))return await Ge(o.action,o,e,i)}).then(r=>{if(r!=null&&(typeof r=="object"||typeof r=="symbol")&&(r instanceof HTMLElement||r===Wt||jt(r)&&"redirect"in r))return r;if(vt(o.redirect))return i.redirect(o.redirect)}).then(r=>{if(r!=null)return r;if(vt(o.component))return i.component(o.component)})}setOutlet(e){e&&this.#b(e),this.#s=e}getOutlet(){return this.#s}async setRoutes(e,o=!1){return this.__previousContext=void 0,this.#n=void 0,Di(e),super.setRoutes(e),o||this.#v(),await this.ready}addRoutes(e){return Di(e),super.addRoutes(e)}async render(e,o=!1){this.#a+=1;const i=this.#a,r={...Vi,...vt(e)?{hash:"",search:"",pathname:e}:e,__renderId:i};return this.ready=this.#w(r,o),await this.ready}async#w(e,o){const{__renderId:i}=e;try{const r=await this.resolve(e),s=await this.#l(r);if(!this.#r(s))return this.location;const a=this.__previousContext;if(s===a)return this.#c(a,!0),this.location;if(this.location=ut(s),o&&this.#c(s,i===1),ke("location-changed",{router:this,location:this.location}),s.__skipAttach)return this.#g(s,a),this.__previousContext=s,this.location;this.#k(s,a);const n=this.#z(s);if(this.#A(s),this.#E(s,a),await n,this.#r(s))return this.#$(),this.__previousContext=s,this.location}catch(r){if(i===this.#a){o&&this.#c(this.context);for(const s of this.#s?.children??[])s.remove();throw this.location=ut(Object.assign(e,{resolver:this})),ke("error",{router:this,error:r,...e}),r}}return this.location}async#l(e,o=e){const i=await this.#u(o),s=i!==o?i:e,n=qe(kr(i.chain??[]),this)===i.pathname,c=async(h,u=h.route,b)=>{const f=await h.next(!1,u,b);return f===null||f===Wt?n?h:u.parent!=null?await c(h,u.parent,f):f:f},p=await c(i);if(p==null||p===Wt)throw br(s);return p!==i?await this.#l(s,p):await this.#x(i)}async#u(e){const{result:o}=e;if(o instanceof HTMLElement)return Sa(e,o),e;if(o&&"redirect"in o){const i=await this.#m(o.redirect,e.__redirectCount,e.__renderId);return await this.#u(i)}throw o instanceof Error?o:new Error(Dt(`Invalid route resolution result for path "${e.pathname}". Expected redirect object or HTML element, but got: "${Oa(o)}". Double check the action return value for the route.`))}async#x(e){return await this.#_(e).then(async o=>o===this.__previousContext||o===e?o:await this.#l(o))}async#_(e){const o=this.__previousContext??{},i=o.chain??[],r=e.chain??[];let s=Promise.resolve(void 0);const a=n=>Pi(e,n);if(e.__divergedChainIndex=0,e.__skipAttach=!1,i.length){for(let n=0;n<Math.min(i.length,r.length)&&!(i[n].route!==r[n].route||i[n].path!==r[n].path&&i[n].element!==r[n].element||!this.#f(i[n].element,r[n].element));e.__divergedChainIndex++,n++);if(e.__skipAttach=r.length===i.length&&e.__divergedChainIndex===r.length&&this.#f(e.result,o.result),e.__skipAttach){for(let n=r.length-1;n>=0;n--)s=this.#h(s,e,{prevent:ve},i[n]);for(let n=0;n<r.length;n++)s=this.#p(s,e,{prevent:ve,redirect:a},r[n]),i[n].element.location=ut(e,i[n].route)}else for(let n=i.length-1;n>=e.__divergedChainIndex;n--)s=this.#h(s,e,{prevent:ve},i[n])}if(!e.__skipAttach)for(let n=0;n<r.length;n++)n<e.__divergedChainIndex?n<i.length&&i[n].element&&(i[n].element.location=ut(e,i[n].route)):(s=this.#p(s,e,{prevent:ve,redirect:a},r[n]),r[n].element&&(r[n].element.location=ut(e,r[n].route)));return await s.then(async n=>{if(n&&jt(n)){if("cancel"in n&&this.__previousContext)return this.__previousContext.__renderId=e.__renderId,this.__previousContext;if("redirect"in n)return await this.#m(n.redirect,e.__redirectCount,e.__renderId)}return e})}async#h(e,o,i,r){const s=ut(o);let a=await e;if(this.#r(o)&&(a=Li("onBeforeLeave",r.element,s,i,this)(a)),!(jt(a)&&"redirect"in a))return a}async#p(e,o,i,r){const s=ut(o,r.route),a=await e;if(this.#r(o))return Li("onBeforeEnter",r.element,s,i,this)(a)}#f(e,o){return e instanceof Element&&o instanceof Element?this.#t.has(e)&&this.#t.has(o)?e.localName===o.localName:e===o:!1}#r(e){return e.__renderId===this.#a}async#m(e,o=0,i=0){if(o>Ba)throw new Error(Dt(`Too many redirects when rendering ${e.from}`));return await this.resolve({...Vi,pathname:this.urlForPath(e.pathname,e.params),redirectFrom:e.from,__redirectCount:o+1,__renderId:i})}#b(e=this.#s){if(!(e instanceof Element||e instanceof DocumentFragment))throw new TypeError(Dt(`Expected router outlet to be a valid DOM Element | DocumentFragment (but got ${e})`))}#c({pathname:e,search:o="",hash:i=""},r){if(window.location.pathname!==e||window.location.search!==o||window.location.hash!==i){const s=r?"replaceState":"pushState";window.history[s](null,document.title,e+o+i),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}#g(e,o){let i=this.#s;for(let r=0;r<(e.__divergedChainIndex??0);r++){const s=o?.chain?.[r].element;if(s)if(s.parentNode===i)e.chain[r].element=s,i=s;else break}return i}#k(e,o){this.#b(),this.#C();const i=this.#g(e,o);this.#i=[],this.#e=Array.from(i?.children??[]).filter(s=>this.#o.has(s)&&s!==e.result);let r=i;for(let s=e.__divergedChainIndex??0;s<(e.chain?.length??0);s++){const a=e.chain[s].element;a&&(r?.appendChild(a),this.#o.add(a),r===i&&this.#i.push(a),r=a)}}#$(){if(this.#e)for(const e of this.#e)e.remove();this.#e=null,this.#i=null}#C(){if(this.#e&&this.#i){for(const e of this.#i)e.remove();this.#e=null,this.#i=null}}#E(e,o){if(!(!o?.chain||e.__divergedChainIndex==null))for(let i=o.chain.length-1;i>=e.__divergedChainIndex&&this.#r(e);i--){const r=o.chain[i].element;if(r)try{const s=ut(e);Ge(r.onAfterLeave,r,s,{},this)}finally{if(this.#e?.includes(r))for(const s of r.children)s.remove()}}}#A(e){if(!(!e.chain||e.__divergedChainIndex==null))for(let o=e.__divergedChainIndex;o<e.chain.length&&this.#r(e);o++){const i=e.chain[o].element;if(i){const r=ut(e,e.chain[o].route);Ge(i.onAfterEnter,i,r,{},this)}}}async#z(e){const o=this.#e?.[0],i=this.#i?.[0],r=[],{chain:s=[]}=e;let a;for(let n=s.length-1;n>=0;n--)if(s[n].route.animate){a=s[n].route.animate;break}if(o&&i&&a){const n=jt(a)&&a.leave?a.leave:"leaving",c=jt(a)&&a.enter?a.enter:"entering";r.push(Oi(o,n)),r.push(Oi(i,c))}return await Promise.all(r),e}subscribe(){window.addEventListener("vaadin-router-go",this.#d)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.#d)}#v(e){const{pathname:o,search:i,hash:r}=e instanceof CustomEvent?e.detail:window.location;vt(this.__normalizePathname(o))&&(e?.preventDefault&&e.preventDefault(),this.render({pathname:o,search:i,hash:r},!0))}static setTriggers(...e){Mi(e)}urlForName(e,o){return this.#n||(this.#n=fa(this,{cacheKeyProvider(i){return"component"in i&&typeof i.component=="string"?i.component:void 0}})),qe(this.#n(e,o??void 0),this)}urlForPath(e,o){return qe(hr(e)(o??void 0),this)}static go(e){const{pathname:o,search:i,hash:r}=vt(e)?new URL(e,"http://a"):e;return ke("go",{pathname:o,search:i,hash:r})}}const rt=E`
  :host, * {
    -webkit-tap-highlight-color: transparent !important;
  }
  :host {
    --color-wood-dark: #7F451D;
    --color-wood-medium: #C18756;
    --color-cookie-medium: #E8C09A;
    --color-sand-light: #FFE9D4;

    --sl-color-primary-500: var(--color-wood-medium);
    --sl-color-primary-600: var(--color-wood-dark);
    --sl-color-primary-700: var(--color-wood-dark);
    --sl-focus-ring-color: rgba(127, 69, 29, 0.3);

    font-family: var(--sl-font-sans, sans-serif);
  }

  sl-button:not([variant="primary"])::part(base),
  sl-icon-button::part(base),
  sl-drawer::part(close-button) {
    color: var(--color-wood-dark) !important;
  }

  sl-icon-button::part(base):active,
  sl-drawer::part(close-button):active {
    filter: brightness(1.5);
  }

  @media (hover: hover) {
    sl-icon-button::part(base):hover,
    sl-drawer::part(close-button):hover {
      filter: brightness(1.5);
    }
  }

  sl-button[variant="primary"]::part(base) {
    background-color: var(--color-wood-dark) !important;
    border-color: var(--color-wood-dark) !important;
    color: var(--color-sand-light) !important;
  }

  sl-menu-item::part(label) {
    color: var(--color-wood-dark);
  }
`;var Va=Object.defineProperty,Na=Object.getOwnPropertyDescriptor,$r=(t,e,o,i)=>{for(var r=i>1?void 0:i?Na(e,o):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(r=(i?a(e,o,r):a(r))||r);return i&&r&&Va(e,o,r),r};let Qe=class extends H{constructor(){super(),this.deferredPrompt=null,window.addEventListener("beforeinstallprompt",t=>{t.preventDefault(),this.deferredPrompt=t}),window.addEventListener("appinstalled",()=>{this.deferredPrompt=null})}connectedCallback(){super.connectedCallback();const t=new CustomEvent("change-title",{detail:{title:"Strona Główna"},bubbles:!0,composed:!0});this.dispatchEvent(t)}async installApp(){if(!this.deferredPrompt)return;this.deferredPrompt.prompt();const{outcome:t}=await this.deferredPrompt.userChoice;t==="accepted"&&(this.deferredPrompt=null)}handleNavigation(t){const o="/mParafia/"+t.substring(1);window.history.pushState({},"",o),window.dispatchEvent(new PopStateEvent("popstate"))}render(){return m`
      <main>

        <div class="logo-container">
          <img src="./icons/icon_512.png" class="logo-img" alt="Ikona mParafia">
        </div>

        <div class="grid-container">

          <sl-button class="tile-button" @click="${()=>this.handleNavigation("/kalendarz")}">
            <sl-icon name="calendar3"></sl-icon>
            <span>Kalendarz</span>
          </sl-button>

          <sl-button class="tile-button" @click="${()=>this.handleNavigation("/ogloszenia")}">
            <sl-icon name="journal-text"></sl-icon>
            <span>Ogłoszenia</span>
          </sl-button>

          <sl-button class="tile-button" @click="${()=>this.handleNavigation("/wydarzenia")}">
            <sl-icon name="people-fill"></sl-icon>
            <span>Wydarzenia</span>
          </sl-button>

          <sl-button class="tile-button" @click="${()=>this.handleNavigation("/grupy")}">
            <sl-icon name="star-fill"></sl-icon>
            <span>Grupy</span>
          </sl-button>

          <sl-button class="tile-button" @click="${()=>this.handleNavigation("/kancelaria")}">
            <sl-icon name="person-lines-fill"></sl-icon>
            <span>Kancelaria</span>
          </sl-button>

          <sl-button class="tile-button" @click="${()=>this.handleNavigation("/dojazd")}">
            <sl-icon name="geo-alt"></sl-icon>
            <span>Dojazd</span>
          </sl-button>

        </div>

        ${this.deferredPrompt?m`
          <div class="install-section">
            <sl-button variant="primary" pill class="install-btn" @click="${this.installApp}">
              <sl-icon slot="prefix" name="download"></sl-icon>
              Zainstaluj mParafię
            </sl-button>
          </div>
        `:null}
      </main>
    `}};Qe.styles=[rt,E`
      main {
        padding: 16px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;
      }

      /* --- STYLE DLA LOGO --- */
      .logo-container {
        text-align: center;
        margin-bottom: 20px;
      }

      .logo-img {
        width: 90px;
        border-radius: 22px;
        box-shadow: 0 4px 15px rgba(127, 69, 29, 0.3);
      }

      /* --- STYLE DLA SIATKI KAFELKÓW --- */
      .grid-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 15px;
        width: 100%;
        max-width: 500px;
      }

      /* --- STYLE DLA POJEDYNCZEGO KAFELKA --- */
      sl-button.tile-button::part(base) {
        background-color: var(--color-wood-dark);
        border-color: var(--color-wood-dark);
        transition: all 0.2s ease;
        padding: 0;
        height: 110px;
        width: 100%;
      }

      sl-button.tile-button::part(base):hover,
      sl-button.tile-button::part(base):active {
        background-color: var(--color-wood-medium);
        border-color: var(--color-wood-medium);
        transform: scale(0.98);
      }

      sl-button.tile-button::part(label) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        gap: 8px;
        padding-top: 4px;
      }

      sl-button.tile-button sl-icon {
        color: var(--color-sand-light);
        font-size: 28px;
      }

      sl-button.tile-button span {
        color: var(--color-sand-light);
        font-weight: 500;
        font-size: 15px;
      }

      /* --- STYLE DLA SEKCJI INSTALACJI PWA --- */
      .install-section {
        margin-top: 20px;
        width: 100%;
        max-width: 400px;
        display: flex;
        justify-content: center;
      }

      sl-button.install-btn::part(base) {
        width: 100%;
        color: var(--color-sand-light);
        justify-content: center;
      }

      sl-button.install-btn sl-icon {
        color: var(--color-sand-light);
      }
    `];$r([x()],Qe.prototype,"deferredPrompt",2);Qe=$r([ot("app-home")],Qe);var Ua=E`
  :host {
    display: inline-block;
  }

  :host([size='small']) {
    --height: var(--sl-toggle-size-small);
    --thumb-size: calc(var(--sl-toggle-size-small) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-small);
  }

  :host([size='medium']) {
    --height: var(--sl-toggle-size-medium);
    --thumb-size: calc(var(--sl-toggle-size-medium) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-medium);
  }

  :host([size='large']) {
    --height: var(--sl-toggle-size-large);
    --thumb-size: calc(var(--sl-toggle-size-large) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-large);
  }

  .switch {
    position: relative;
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-input-font-family);
    font-size: inherit;
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .switch__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--width);
    height: var(--height);
    background-color: var(--sl-color-neutral-400);
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    border-radius: var(--height);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color;
  }

  .switch__control .switch__thumb {
    width: var(--thumb-size);
    height: var(--thumb-size);
    background-color: var(--sl-color-neutral-0);
    border-radius: 50%;
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    translate: calc((var(--width) - var(--height)) / -2);
    transition:
      var(--sl-transition-fast) translate ease,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) box-shadow;
  }

  .switch__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-400);
  }

  /* Focus */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked */
  .switch--checked .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch--checked .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    translate: calc((var(--width) - var(--height)) / 2);
  }

  /* Checked + hover */
  .switch.switch--checked:not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
  }

  /* Checked + focus */
  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .switch--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .switch__label {
    display: inline-block;
    line-height: var(--height);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .switch__label::after {
    content: var(--sl-input-required-content);
    color: var(--sl-input-required-content-color);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  @media (forced-colors: active) {
    .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb,
    .switch--checked .switch__control .switch__thumb {
      background-color: ButtonText;
    }
  }
`,ti=(t="value")=>(e,o)=>{const i=e.constructor,r=i.prototype.attributeChangedCallback;i.prototype.attributeChangedCallback=function(s,a,n){var c;const p=i.getPropertyOptions(t),h=typeof p.attribute=="string"?p.attribute:t;if(s===h){const u=p.converter||oe,f=(typeof u=="function"?u:(c=u?.fromAttribute)!=null?c:oe.fromAttribute)(n,p.type);this[t]!==f&&(this[o]=f)}r.call(this,s,a,n)}},lo=E`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    margin-bottom: var(--sl-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--sl-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--sl-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control__label {
    font-size: var(--sl-input-label-font-size-large);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
    color: var(--sl-input-required-content-color);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--sl-input-help-text-color);
    margin-top: var(--sl-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-large);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--sl-spacing-2x-small);
  }
`;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ei=qo(class extends Go{constructor(t){if(super(t),t.type!==St.PROPERTY&&t.type!==St.ATTRIBUTE&&t.type!==St.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Ss(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===nt||e===N)return e;const o=t.element,i=t.name;if(t.type===St.PROPERTY){if(e===o[i])return nt}else if(t.type===St.BOOLEAN_ATTRIBUTE){if(!!e===o.hasAttribute(i))return nt}else if(t.type===St.ATTRIBUTE&&o.getAttribute(i)===e+"")return nt;return Os(t),e}});var Y=class extends F{constructor(){super(...arguments),this.formControlController=new De(this,{value:t=>t.checked?t.value||"on":void 0,defaultValue:t=>t.defaultChecked,setValue:(t,e)=>t.checked=e}),this.hasSlotController=new Xt(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleClick(){this.checked=!this.checked,this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleKeyDown(t){t.key==="ArrowLeft"&&(t.preventDefault(),this.checked=!1,this.emit("sl-change"),this.emit("sl-input")),t.key==="ArrowRight"&&(t.preventDefault(),this.checked=!0,this.emit("sl-change"),this.emit("sl-input"))}handleCheckedChange(){this.input.checked=this.checked,this.formControlController.updateValidity()}handleDisabledChange(){this.formControlController.setValidity(!0)}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("help-text"),e=this.helpText?!0:!!t;return m`
      <div
        class=${R({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-help-text":e})}
      >
        <label
          part="base"
          class=${R({switch:!0,"switch--checked":this.checked,"switch--disabled":this.disabled,"switch--focused":this.hasFocus,"switch--small":this.size==="small","switch--medium":this.size==="medium","switch--large":this.size==="large"})}
        >
          <input
            class="switch__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${_(this.value)}
            .checked=${ei(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            role="switch"
            aria-checked=${this.checked?"true":"false"}
            aria-describedby="help-text"
            @click=${this.handleClick}
            @input=${this.handleInput}
            @invalid=${this.handleInvalid}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
            @keydown=${this.handleKeyDown}
          />

          <span part="control" class="switch__control">
            <span part="thumb" class="switch__thumb"></span>
          </span>

          <div part="label" class="switch__label">
            <slot></slot>
          </div>
        </label>

        <div
          aria-hidden=${e?"false":"true"}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};Y.styles=[U,lo,Ua];l([A('input[type="checkbox"]')],Y.prototype,"input",2);l([x()],Y.prototype,"hasFocus",2);l([d()],Y.prototype,"title",2);l([d()],Y.prototype,"name",2);l([d()],Y.prototype,"value",2);l([d({reflect:!0})],Y.prototype,"size",2);l([d({type:Boolean,reflect:!0})],Y.prototype,"disabled",2);l([d({type:Boolean,reflect:!0})],Y.prototype,"checked",2);l([ti("checked")],Y.prototype,"defaultChecked",2);l([d({reflect:!0})],Y.prototype,"form",2);l([d({type:Boolean,reflect:!0})],Y.prototype,"required",2);l([d({attribute:"help-text"})],Y.prototype,"helpText",2);l([L("checked",{waitUntilFirstUpdate:!0})],Y.prototype,"handleCheckedChange",1);l([L("disabled",{waitUntilFirstUpdate:!0})],Y.prototype,"handleDisabledChange",1);Y.define("sl-switch");var ja=E`
  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`,Pe=class extends F{constructor(){super(...arguments),this.disableRole=!1,this.label=""}handleFocus(t){const e=ye(t.target);e?.toggleAttribute("data-sl-button-group__button--focus",!0)}handleBlur(t){const e=ye(t.target);e?.toggleAttribute("data-sl-button-group__button--focus",!1)}handleMouseOver(t){const e=ye(t.target);e?.toggleAttribute("data-sl-button-group__button--hover",!0)}handleMouseOut(t){const e=ye(t.target);e?.toggleAttribute("data-sl-button-group__button--hover",!1)}handleSlotChange(){const t=[...this.defaultSlot.assignedElements({flatten:!0})];t.forEach(e=>{const o=t.indexOf(e),i=ye(e);i&&(i.toggleAttribute("data-sl-button-group__button",!0),i.toggleAttribute("data-sl-button-group__button--first",o===0),i.toggleAttribute("data-sl-button-group__button--inner",o>0&&o<t.length-1),i.toggleAttribute("data-sl-button-group__button--last",o===t.length-1),i.toggleAttribute("data-sl-button-group__button--radio",i.tagName.toLowerCase()==="sl-radio-button"))})}render(){return m`
      <div
        part="base"
        class="button-group"
        role="${this.disableRole?"presentation":"group"}"
        aria-label=${this.label}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};Pe.styles=[U,ja];l([A("slot")],Pe.prototype,"defaultSlot",2);l([x()],Pe.prototype,"disableRole",2);l([d()],Pe.prototype,"label",2);function ye(t){var e;const o="sl-button, sl-radio-button";return(e=t.closest(o))!=null?e:t.querySelector(o)}Pe.define("sl-button-group");var Ha=Object.defineProperty,Wa=Object.getOwnPropertyDescriptor,ne=(t,e,o,i)=>{for(var r=i>1?void 0:i?Wa(e,o):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(r=(i?a(e,o,r):a(r))||r);return i&&r&&Ha(e,o,r),r};let Pt=class extends H{constructor(){super(...arguments),this.time="",this.name="",this.targetUrl="",this.category="wydarzenie",this.multiline=!1}handleClick(){if(!this.targetUrl)return;window.history.pushState({},"","/mParafia/mock-event"),window.dispatchEvent(new PopStateEvent("popstate"))}render(){const t=this.category==="wydarzenie";return m`
      <div class="item-container ${this.category} ${this.multiline?"is-multiline":""}" @click="${this.handleClick}">
        <span class="time">${this.time}</span>
        <span class="name">${this.name}</span>

        ${t?m`<sl-icon name="star-fill"></sl-icon>`:m`<sl-icon name="people-fill"></sl-icon>`}
      </div>
    `}};Pt.styles=[rt,E`
      .item-container {
        display: flex;
        align-items: center;
        gap: 4px;
        color: var(--color-sand-light);
        padding: var(--item-padding, 2px 4px);
        border-radius: 4px;
        font-size: var(--item-font-size, 10px);
        width: 100%;
        box-sizing: border-box;
        cursor: pointer;
        transition: transform 0.1s, filter 0.1s;
        margin-bottom: 3px;
        box-shadow: 0 2px 4px rgba(127, 69, 29, 0.15);
      }

      .item-container.is-multiline {
        align-items: flex-start;
        padding: 4px 6px;
      }

      .item-container:active {
        transform: scale(0.97);
        filter: brightness(0.9);
      }

      .time {
        font-weight: bold;
        white-space: nowrap;
      }

      .item-container.is-multiline .time {
        margin-top: 1px;
      }

      .name {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        flex: 1;
        min-width: 0;
      }

      .item-container.is-multiline .name {
        white-space: normal;
        overflow: visible;
        line-height: 1.3;
        word-break: break-word;
        overflow-wrap: break-word;
      }

      sl-icon {
        font-size: 10px;
        opacity: 0.8;
      }

      .item-container.is-multiline sl-icon {
        margin-top: 2px;
      }

      .wydarzenie { background-color: var(--color-wood-dark); }
      .domowy { background-color: #B87333; }
      .lso { background-color: #4A69BD; }
      .schola { background-color: #D4AF37; }
      .biblijna { background-color: #6B8E23; }
      .oaza { background-color: #829583; }
      .rada { background-color: #535C68; }
      .odb { background-color: #C98B8B; }
    `];ne([d({type:String})],Pt.prototype,"time",2);ne([d({type:String})],Pt.prototype,"name",2);ne([d({type:String})],Pt.prototype,"targetUrl",2);ne([d({type:String})],Pt.prototype,"category",2);ne([d({type:Boolean})],Pt.prototype,"multiline",2);Pt=ne([ot("calendar-item")],Pt);var qa=Object.defineProperty,Ga=Object.getOwnPropertyDescriptor,le=(t,e,o,i)=>{for(var r=i>1?void 0:i?Ga(e,o):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(r=(i?a(e,o,r):a(r))||r);return i&&r&&qa(e,o,r),r};let Lt=class extends H{constructor(){super(...arguments),this.events=[],this.groups=[],this.currentView="month",this.currentDate=new Date,this.showOnlyMyGroups=!1}connectedCallback(){super.connectedCallback();const t=new CustomEvent("change-title",{detail:{title:"Kalendarz Parafialny"},bubbles:!0,composed:!0});this.dispatchEvent(t)}async firstUpdated(){await this.fetchEvents(),await this.fetchGroups()}async fetchEvents(){try{const t=await fetch("http://localhost:3000/api/events");if(!t.ok)throw new Error("Błąd połączenia");this.events=await t.json(),console.log("Dane pobrane:",this.events)}catch(t){console.error("Nie udało się pobrać wydarzeń:",t)}}async fetchGroups(){try{const t=await fetch("http://localhost:3000/api/groups");if(!t.ok)throw new Error("Błąd połączenia");this.groups=await t.json()}catch(t){console.error("Nie udało się pobrać grup:",t)}}getFilteredEvents(){if(!this.showOnlyMyGroups)return this.events;const t=this.groups.map(e=>e.name.toLowerCase());return this.events.filter(e=>{const o=e.category?e.category.toLowerCase():"wydarzenie";return o==="wydarzenie"||t.includes(o)})}_navigate(t){const e=new Date(this.currentDate),o=t==="next"?1:-1;if(this.currentView==="month"){const i=(e.getMonth()+o+12)%12;e.setMonth(e.getMonth()+o),e.getMonth()!==i&&e.setDate(0)}else this.currentView==="week"?e.setDate(e.getDate()+7*o):this.currentView==="day"&&e.setDate(e.getDate()+o);this.currentDate=e,this.requestUpdate()}switchToDayView(t){this.currentDate=t,this.currentView="day"}changeView(t){this.currentView=t,this.currentDate=new Date,this.requestUpdate()}_getHeaderTitle(){if(this.currentView==="month")return this.currentDate.toLocaleDateString("pl-PL",{month:"long",year:"numeric"});if(this.currentView==="day")return this.currentDate.toLocaleDateString("pl-PL",{weekday:"long",day:"numeric",month:"long"});{const t=this._getStartOfWeek(this.currentDate),e=new Date(t);e.setDate(e.getDate()+6);const o=t.toLocaleDateString("pl-PL",{day:"numeric",month:"short"}),i=e.toLocaleDateString("pl-PL",{day:"numeric",month:"short"});return`${o} - ${i} ${e.getFullYear()}`}}_getStartOfWeek(t){const e=new Date(t),o=e.getDay(),i=e.getDate()-o+(o===0?-6:1);return new Date(e.setDate(i))}_isToday(t){const e=new Date;return t.getDate()===e.getDate()&&t.getMonth()===e.getMonth()&&t.getFullYear()===e.getFullYear()}render(){return m`
      <div class="view-controls">
        <sl-button-group>
          <sl-button variant=${this.currentView==="month"?"primary":"default"} @click=${()=>this.changeView("month")}>Miesiąc</sl-button>
          <sl-button variant=${this.currentView==="week"?"primary":"default"} @click=${()=>this.changeView("week")}>Tydzień</sl-button>
          <sl-button variant=${this.currentView==="day"?"primary":"default"} @click=${()=>this.changeView("day")}>Dzień</sl-button>
        </sl-button-group>
      </div>

      <div class="calendar-header">
        <sl-icon-button name="chevron-left" @click=${()=>this._navigate("prev")}></sl-icon-button>
        <h2>${this._getHeaderTitle()}</h2>
        <sl-icon-button name="chevron-right" @click=${()=>this._navigate("next")}></sl-icon-button>
      </div>

      <div class="filter-controls">
        <sl-switch
          ?checked=${this.showOnlyMyGroups}
          @sl-change=${t=>{this.showOnlyMyGroups=t.target.checked,this.requestUpdate()}} >
          Tylko moje grupy i główne wydarzenia
        </sl-switch>
      </div>

      ${this.currentView==="month"?this.renderMonthView():null}
      ${this.currentView==="week"?this.renderWeekView():null}
      ${this.currentView==="day"?this.renderDayView():null}
    `}_getEventsForDate(t){return this.getFilteredEvents().filter(e=>{if(!e.startTime)return!1;const o=new Date(e.startTime);return o.getFullYear()===t.getFullYear()&&o.getMonth()===t.getMonth()&&o.getDate()===t.getDate()})}renderMonthView(){const t=this.currentDate.getFullYear(),e=this.currentDate.getMonth(),o=new Date(t,e+1,0).getDate(),i=Array.from({length:o},(n,c)=>c+1),r=new Date(t,e,1).getDay(),s=r===0?6:r-1,a=Array.from({length:s},(n,c)=>c);return m`
      <div class="grid-month">
        ${["Pn","Wt","Śr","Cz","Pt","Sb","Nd"].map(n=>m`<div class="day-name">${n}</div>`)}
        ${a.map(()=>m`<div class="day empty"></div>`)}
        ${i.map(n=>{const c=new Date(t,e,n),p=this._getEventsForDate(c),h=this._isToday(c);return m`
            <div
              class=${R({day:!0,today:h})}
              @click=${()=>this.switchToDayView(c)}
            >
              <span class="day-number">${n}</span>
              ${this.renderEventTags(p,"month")}
            </div>
          `})}
      </div>
    `}renderWeekView(){const t=this._getStartOfWeek(this.currentDate),e=Array.from({length:7},(o,i)=>{const r=new Date(t);return r.setDate(r.getDate()+i),r});return m`
      <div class="grid-week">
        ${e.map(o=>{const i=this._getEventsForDate(o),r=this._isToday(o);return m`
            <div
              class=${R({"week-day":!0,today:r})}
              @click=${()=>this.switchToDayView(o)}
            >
              <div class="week-day-header">
                <div class="week-day-name">${o.toLocaleDateString("pl-PL",{weekday:"short"})}</div>
                <div class="week-day-number">${o.getDate()}</div>
              </div>

              ${i.length>0?m`
                    <div class="week-events-container">
                      ${this.renderEventTags(i,"week")}
                    </div>
                  `:m`<div class="no-events-small">Brak</div>`}
            </div>
          `})}
      </div>
    `}renderDayView(){const t=this._getEventsForDate(this.currentDate),e=this._isToday(this.currentDate);return m`
      <div class="list-view">
        <div class=${R({"list-day-row":!0,today:e})}>
          <div class="list-day-header">Wydarzenia</div>

          ${t.length>0?this.renderEventTags(t,"day"):m`<span class="no-events" style="display:block; padding: 20px 0; font-size: 0.85rem; color: #666; text-align: center; font-style: italic;">Brak wydarzeń zaplanowanych na ten dzień.</span>`}
        </div>
      </div>
    `}renderEventTags(t,e){const o=e==="week"||e==="day",i=e==="day"||e==="week";return t.map(r=>{const a=new Date(r.startTime).toLocaleTimeString("pl-PL",{hour:"2-digit",minute:"2-digit"});return m`
        <calendar-item
          .time="${a}"
          .name="${r.title}"
          .category="${"wydarzenie"}"
          ?multiline=${o}
          targetUrl="${i?`/wydarzenia/${r.id}`:""}"
        >
        </calendar-item>
      `})}};Lt.styles=[rt,E`
      :host {
        display: block;
        padding: 10px;
        width: 100%;
        max-width: 900px;
        margin: 0 auto;
        box-sizing: border-box;
      }

      .view-controls {
        display: flex;
        justify-content: center;
        margin-bottom: 20px;
      }

      sl-button-group sl-button[variant="default"]::part(base) {
        color: var(--color-wood-medium);
        border-color: var(--color-wood-medium);
        background-color: transparent;
      }

      sl-button-group sl-button[variant="default"]::part(base):hover {
        background-color: rgba(193, 135, 86, 0.1);
      }

      sl-button-group sl-button[variant="primary"]::part(base) {
        background-color: var(--color-wood-dark);
        border-color: var(--color-wood-dark);
        color: var(--color-sand-light);
      }

      .calendar-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
        color: var(--color-wood-dark);
      }

      .calendar-header h2 {
        margin: 0;
        text-transform: capitalize;
        font-size: 1.3rem;
      }

      sl-icon-button {
        color: var(--color-wood-dark);
        font-size: 1.8rem;
      }

      .grid-month {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        gap: 4px;
        background-color: var(--color-wood-medium);
        padding: 6px;
        border-radius: 12px;
      }

      .day-name {
        text-align: center;
        font-weight: bold;
        color: var(--color-sand-light);
        font-size: 0.85rem;
        padding: 5px 0;
      }

      .day {
        background: var(--color-sand-light);
        min-height: 35px;
        padding: 2px;
        display: flex;
        flex-direction: column;
        border-radius: 6px;
        color: var(--color-wood-dark);
        overflow: hidden;
        cursor: pointer;
        transition: filter 0.2s ease;
      }

      .day:hover {
        filter: brightness(0.95);
      }

      .day.empty {
        background: transparent;
        border: none;
        cursor: default;
      }
      .day.empty:hover {
        filter: none;
      }

      .day.today {
        background-color: #E8C09A;
        box-shadow: inset 0 0 10px rgba(127, 69, 29, 0.2);
      }

      .day-number {
        font-size: 0.9rem;
        margin-bottom: 4px;
        margin-left: 2px;
      }

      .day.today > .day-number {
         font-size: 1rem;
         font-weight: bold;
      }

      .grid-week {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        gap: 6px;
        background-color: var(--color-wood-medium);
        padding: 8px;
        border-radius: 12px;
        min-height: 350px;
        overflow-x: auto;
        scrollbar-width: thin;
        scrollbar-color: var(--color-wood-medium) var(--color-sand-light);
        touch-action: pan-x pan-y;
      }

      .grid-week::-webkit-scrollbar {
        height: 10px;
      }
      .grid-week::-webkit-scrollbar-track {
        background: var(--color-sand-light);
        border-radius: 6px;
      }
      .grid-week::-webkit-scrollbar-thumb {
        background: var(--color-wood-medium);
        border-radius: 6px;
      }

      .week-day {
        background: var(--color-sand-light);
        border-radius: 6px;
        padding: 8px;
        display: flex;
        flex-direction: column;
        color: var(--color-wood-dark);
        min-width: 140px;
        cursor: pointer;
        transition: filter 0.2s ease;
      }

      .week-day:hover {
        filter: brightness(0.95);
      }

      .week-day-header {
        text-align: center;
        border-bottom: 2px solid var(--color-wood-medium);
        padding-bottom: 5px;
        margin-bottom: 8px;
      }

      .week-day-name {
        font-weight: bold;
        text-transform: uppercase;
        font-size: 0.8rem;
      }

      .week-day-number {
        font-size: 1.4rem;
        font-weight: bold;
      }

      .week-day.today {
        background-color: #E8C09A;
      }

      .no-events-small {
        text-align: center;
        font-size: 0.75rem;
        color: #888;
        margin-top: 10px;
        font-style: italic;
      }

      .list-view {
        background-color: var(--color-wood-medium);
        padding: 15px;
        border-radius: 12px;
        display: flex;
        flex-direction: column;
        gap: 10px;
      }

      .list-day-row {
        background: var(--color-sand-light);
        border-radius: 8px;
        padding: 15px;
        color: var(--color-wood-dark);
      }

      .list-day-header {
        font-weight: bold;
        font-size: 1.2rem;
        border-bottom: 2px solid var(--color-wood-medium);
        padding-bottom: 10px;
        margin-bottom: 15px;
      }

      .list-day-row.today {
        background-color: #E8C09A;
      }

 /* --- STYLE PRZEŁĄCZNIKA (FILTROWANIA) --- */
      .filter-controls {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 25px;
        width: 100%;
      }

      sl-switch {
        --sl-toggle-size: 1.2rem;
        display: flex;
        align-items: center;
      }

      sl-switch::part(thumb) {
        background-color: var(--color-wood-medium) !important;
        border: 2px solid var(--color-wood-medium) !important;
        transition: background-color 0.3s ease, border-color 0.3s ease !important;
      }

      sl-switch[checked]::part(thumb) {
        background-color: var(--color-wood-dark) !important;
        border-color: var(--color-wood-dark) !important;
      }
      sl-switch::part(control) {
        background-color: var(--color-cookie-medium) !important;
        border-color: var(--color-cookie-medium) !important;
        box-shadow: none !important;
        outline: none !important;
        transition: background-color 0.3s ease, border-color 0.3s ease !important;
      }

      sl-switch[checked]::part(control) {
        background-color: var(--color-wood-medium) !important;
        border-color: var(--color-wood-medium) !important;
      }

      sl-switch::part(label) {
        color: var(--color-wood-dark);
        font-size: 0.9rem;
        font-weight: 500;
        margin-left: 8px;
        transition: font-weight 0.1s ease !important;
      }

      sl-switch[checked]::part(label) {
        font-weight: 530;
      }
    `];le([x()],Lt.prototype,"events",2);le([x()],Lt.prototype,"groups",2);le([x()],Lt.prototype,"currentView",2);le([x()],Lt.prototype,"currentDate",2);le([x()],Lt.prototype,"showOnlyMyGroups",2);Lt=le([ot("app-calendar")],Lt);Xo.define("sl-spinner");var Ka=Object.defineProperty,Ya=Object.getOwnPropertyDescriptor,oi=(t,e,o,i)=>{for(var r=i>1?void 0:i?Ya(e,o):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(r=(i?a(e,o,r):a(r))||r);return i&&r&&Ka(e,o,r),r};let ze=class extends H{constructor(){super(...arguments),this.groups=[],this.isLoading=!0}connectedCallback(){super.connectedCallback(),this.dispatchEvent(new CustomEvent("change-title",{detail:{title:"Grupy Parafialne"},bubbles:!0,composed:!0}))}async firstUpdated(){await this.fetchGroups()}async fetchGroups(){try{const t=await fetch("http://localhost:3000/api/groups");if(!t.ok)throw new Error("Błąd połączenia z serwerem");this.groups=await t.json()}catch(t){console.error("Nie udało się pobrać grup:",t)}finally{this.isLoading=!1}}render(){return this.isLoading?m`
        <div class="center-content">
          <sl-spinner style="font-size: 2rem;"></sl-spinner>
        </div>
      `:this.groups.length===0?m`
        <div class="center-content">
          Brak grup parafialnych w bazie danych.
        </div>
      `:m`
      <div class="groups-grid">
        ${this.groups.map(t=>m`
          <div class="group-card" @click=${()=>window.location.href=`/mParafia/grupa?id=${t.id}`}>
            
            <div class="group-photo">
              <sl-icon name="people-fill" style="font-size: 24px; color: var(--color-wood-dark);"></sl-icon>
            </div>
            
            <div class="group-info">
              <h3>${t.name}</h3>
              ${t.description?m`<p class="group-desc">${t.description}</p>`:""}
            </div>
            
            <sl-icon name="chevron-right" style="margin-left: auto; color: var(--color-wood-medium);"></sl-icon>
          </div>
        `)}
      </div>
    `}};ze.styles=[rt,E`
      :host {
        display: block;
        padding: 15px;
        max-width: 800px;
        margin: 0 auto;
      }

      .groups-grid {
        display: flex;
        flex-direction: column;
        gap: 25px;
      }

      .group-card {
        background-color: var(--color-sand-light);
        border: 2px solid var(--color-wood-medium);
        border-radius: 12px;
        padding: 15px;
        display: flex;
        align-items: center;
        gap: 15px;
        cursor: pointer;
        transition: transform 0.2s ease, background-color 0.2s ease;
      }

      .group-card:active {
        transform: scale(0.98);
        background-color: var(--color-cookie-medium);
      }

      @media (hover: hover) {
        .group-card:hover {
          background-color: var(--color-cookie-medium);
        }
      }

      .group-photo {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: 2px solid var(--color-wood-dark);
        display: flex;
        align-items: center;
        justify-content: center;
        background: #fff;
        flex-shrink: 0;
      }

      .group-info h3 {
        margin: 0;
        color: var(--color-wood-dark);
        font-size: 1.1rem;
      }

      .group-desc {
        margin: 4px 0 0 0;
        font-size: 0.85rem;
        color: #666;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
      
      .center-content {
        display: flex;
        justify-content: center;
        padding: 40px;
        color: var(--color-wood-medium);
      }
    `];oi([x()],ze.prototype,"groups",2);oi([x()],ze.prototype,"isLoading",2);ze=oi([ot("app-groups")],ze);var Xa=Object.defineProperty,Za=Object.getOwnPropertyDescriptor,Cr=(t,e,o,i)=>{for(var r=i>1?void 0:i?Za(e,o):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(r=(i?a(e,o,r):a(r))||r);return i&&r&&Xa(e,o,r),r};let to=class extends H{constructor(){super(...arguments),this.events=[]}connectedCallback(){super.connectedCallback(),this.dispatchEvent(new CustomEvent("change-title",{detail:{title:"Nadchodzące Wydarzenia"},bubbles:!0,composed:!0}))}async firstUpdated(){await this.fetchEvents()}async fetchEvents(){try{const t=await fetch("http://localhost:3000/api/events");if(!t.ok)throw new Error("Błąd połączenia");this.events=await t.json()}catch(t){console.error("Nie udało się pobrać wydarzeń:",t)}}getGroupedEvents(){const t={},e=new Date;return e.setHours(0,0,0,0),[...this.events].filter(i=>new Date(i.startTime)>=e).sort((i,r)=>new Date(i.startTime).getTime()-new Date(r.startTime).getTime()).forEach(i=>{const r=i.startTime.split("T")[0];t[r]||(t[r]=[]),t[r].push(i)}),t}formatDate(t){return new Date(t).toLocaleDateString("pl-PL",{weekday:"long",day:"numeric",month:"long"})}render(){const t=this.getGroupedEvents();return m`
      ${Object.keys(t).map(e=>m`
        <div class="day-section">
          <div class="day-header">${this.formatDate(e)}</div>
          <div class="events-list">
            ${t[e].map(o=>{const i=new Date(o.startTime).toLocaleTimeString("pl-PL",{hour:"2-digit",minute:"2-digit"}),r=o.category||"wydarzenie";return m`
                <calendar-item
                  time="${i}"
                  name="${o.title}"
                  category="${r}"
                  multiline
                  @click=${()=>window.location.href="/mParafia/mock-event"}
                ></calendar-item>
              `})}
          </div>
        </div>
      `)}
    `}};to.styles=[rt,E`
      :host {
        display: block;
        padding: 15px;
        width: 100%;
        max-width: 600px;
        margin: 0 auto;
        box-sizing: border-box;
      }

      .day-section {
        margin-bottom: 25px;
        width: 100%;
      }

      .day-header {
        position: sticky;
        top: 60px;
        background-color: var(--color-sand-light);
        color: var(--color-wood-dark);
        padding: 10px 5px;
        font-weight: bold;
        font-size: 1.15rem;
        text-transform: capitalize;
        border-bottom: 2px solid var(--color-wood-medium);
        margin-bottom: 12px;
        z-index: 10;
      }

      .events-list {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        gap: 12px;
        padding: 5px 0;
        width: 100%;
      }

      calendar-item {
        display: block;
        width: 100%;
        --item-font-size: 12px;
        box-sizing: border-box;
        cursor: pointer;
      }
    `];Cr([x()],to.prototype,"events",2);to=Cr([ot("app-events")],to);var Ja=Object.getOwnPropertyDescriptor,Qa=(t,e,o,i)=>{for(var r=i>1?void 0:i?Ja(e,o):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(r=a(r)||r);return r};let Do=class extends H{connectedCallback(){super.connectedCallback(),this.dispatchEvent(new CustomEvent("change-title",{detail:{title:"Strona w przygotowaniu"},bubbles:!0,composed:!0}))}_navHome(){window.history.pushState({},"","/mParafia/"),window.dispatchEvent(new PopStateEvent("popstate"))}render(){return m`
      <div class="placeholder-content">
        <sl-icon name="info-circle" style="font-size: 3rem; color: var(--color-wood-medium);"></sl-icon>
        <h2>Strona w przygotowaniu</h2>
        <p>Tu znajdą się szczegółowe informacje o wybranej grupie lub wydarzeniu.</p>

        <div class="button-group">
          <sl-button variant="primary" @click=${this._navHome}>
            <sl-icon slot="prefix" name="house"></sl-icon>
            Strona Główna
          </sl-button>

          <sl-button variant="default" @click=${()=>window.history.back()}>
            <sl-icon slot="prefix" name="arrow-left"></sl-icon>
            Wróć
          </sl-button>
        </div>
      </div>
    `}};Do.styles=[rt,E`
      :host {
        display: block;
        padding: 20px;
        max-width: 800px;
        margin: 0 auto;
        color: var(--color-wood-dark);
      }

      .placeholder-content {
        background: var(--color-sand-light);
        padding: 40px 20px;
        border-radius: 12px;
        border: 2px dashed var(--color-wood-medium);
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;
      }

      .button-group {
        display: flex;
        gap: 10px;
        margin-top: 20px;
        flex-wrap: wrap;
        justify-content: center;
      }

      sl-button[variant="default"]::part(base) {
        background-color: var(--color-sand-light) !important;
        color: var(--color-wood-dark) !important;
        border-color: var(--color-wood-medium) !important;
      }

      sl-button[variant="primary"]::part(base):hover,
      sl-button[variant="primary"]::part(base):active {
        filter: brightness(1.1) !important;
        background-color: var(--color-wood-dark) !important;
        border-color: var(--color-wood-dark) !important;
      }

      sl-button[variant="default"]::part(base):hover,
      sl-button[variant="default"]::part(base):active {
        background-color: var(--color-sand-light) !important;
        border-color: var(--color-wood-dark) !important;
        color: var(--color-wood-dark) !important;
        filter: brightness(0.95) !important;
      }

      sl-button::part(base):focus-visible {
        outline: none !important;
        box-shadow: 0 0 0 3px rgba(127, 69, 29, 0.2) !important;
      }

    `];Do=Qa([ot("app-event-mock-detail")],Do);var tn=E`
  :host {
    --indicator-color: var(--sl-color-primary-600);
    --track-color: var(--sl-color-neutral-200);
    --track-width: 2px;

    display: block;
  }

  .tab-group {
    display: flex;
    border-radius: 0;
  }

  .tab-group__tabs {
    display: flex;
    position: relative;
  }

  .tab-group__indicator {
    position: absolute;
    transition:
      var(--sl-transition-fast) translate ease,
      var(--sl-transition-fast) width ease;
  }

  .tab-group--has-scroll-controls .tab-group__nav-container {
    position: relative;
    padding: 0 var(--sl-spacing-x-large);
  }

  .tab-group--has-scroll-controls .tab-group__scroll-button--start--hidden,
  .tab-group--has-scroll-controls .tab-group__scroll-button--end--hidden {
    visibility: hidden;
  }

  .tab-group__body {
    display: block;
    overflow: auto;
  }

  .tab-group__scroll-button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    width: var(--sl-spacing-x-large);
  }

  .tab-group__scroll-button--start {
    left: 0;
  }

  .tab-group__scroll-button--end {
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--start {
    left: auto;
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--end {
    left: 0;
    right: auto;
  }

  /*
   * Top
   */

  .tab-group--top {
    flex-direction: column;
  }

  .tab-group--top .tab-group__nav-container {
    order: 1;
  }

  .tab-group--top .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--top .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--top .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-bottom: solid var(--track-width) var(--track-color);
  }

  .tab-group--top .tab-group__indicator {
    bottom: calc(-1 * var(--track-width));
    border-bottom: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--top .tab-group__body {
    order: 2;
  }

  .tab-group--top ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Bottom
   */

  .tab-group--bottom {
    flex-direction: column;
  }

  .tab-group--bottom .tab-group__nav-container {
    order: 2;
  }

  .tab-group--bottom .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--bottom .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--bottom .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-top: solid var(--track-width) var(--track-color);
  }

  .tab-group--bottom .tab-group__indicator {
    top: calc(-1 * var(--track-width));
    border-top: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--bottom .tab-group__body {
    order: 1;
  }

  .tab-group--bottom ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Start
   */

  .tab-group--start {
    flex-direction: row;
  }

  .tab-group--start .tab-group__nav-container {
    order: 1;
  }

  .tab-group--start .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-inline-end: solid var(--track-width) var(--track-color);
  }

  .tab-group--start .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    border-right: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--start.tab-group--rtl .tab-group__indicator {
    right: auto;
    left: calc(-1 * var(--track-width));
  }

  .tab-group--start .tab-group__body {
    flex: 1 1 auto;
    order: 2;
  }

  .tab-group--start ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }

  /*
   * End
   */

  .tab-group--end {
    flex-direction: row;
  }

  .tab-group--end .tab-group__nav-container {
    order: 2;
  }

  .tab-group--end .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-left: solid var(--track-width) var(--track-color);
  }

  .tab-group--end .tab-group__indicator {
    left: calc(-1 * var(--track-width));
    border-inline-start: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--end.tab-group--rtl .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    left: auto;
  }

  .tab-group--end .tab-group__body {
    flex: 1 1 auto;
    order: 1;
  }

  .tab-group--end ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }
`,en=E`
  :host {
    display: contents;
  }
`,co=class extends F{constructor(){super(...arguments),this.observedElements=[],this.disabled=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(t=>{this.emit("sl-resize",{detail:{entries:t}})}),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){this.disabled||this.startObserver()}startObserver(){const t=this.shadowRoot.querySelector("slot");if(t!==null){const e=t.assignedElements({flatten:!0});this.observedElements.forEach(o=>this.resizeObserver.unobserve(o)),this.observedElements=[],e.forEach(o=>{this.resizeObserver.observe(o),this.observedElements.push(o)})}}stopObserver(){this.resizeObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}render(){return m` <slot @slotchange=${this.handleSlotChange}></slot> `}};co.styles=[U,en];l([d({type:Boolean,reflect:!0})],co.prototype,"disabled",2);l([L("disabled",{waitUntilFirstUpdate:!0})],co.prototype,"handleDisabledChange",1);var G=class extends F{constructor(){super(...arguments),this.tabs=[],this.focusableTabs=[],this.panels=[],this.localize=new ft(this),this.hasScrollControls=!1,this.shouldHideScrollStartButton=!1,this.shouldHideScrollEndButton=!1,this.placement="top",this.activation="auto",this.noScrollControls=!1,this.fixedScrollControls=!1,this.scrollOffset=1}connectedCallback(){const t=Promise.all([customElements.whenDefined("sl-tab"),customElements.whenDefined("sl-tab-panel")]);super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.repositionIndicator(),this.updateScrollControls()}),this.mutationObserver=new MutationObserver(e=>{const o=e.filter(({target:i})=>{if(i===this)return!0;if(i.closest("sl-tab-group")!==this)return!1;const r=i.tagName.toLowerCase();return r==="sl-tab"||r==="sl-tab-panel"});if(o.length!==0){if(o.some(i=>!["aria-labelledby","aria-controls"].includes(i.attributeName))&&setTimeout(()=>this.setAriaLabels()),o.some(i=>i.attributeName==="disabled"))this.syncTabsAndPanels();else if(o.some(i=>i.attributeName==="active")){const r=o.filter(s=>s.attributeName==="active"&&s.target.tagName.toLowerCase()==="sl-tab").map(s=>s.target).find(s=>s.active);r&&this.setActiveTab(r)}}}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,attributeFilter:["active","disabled","name","panel"],childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),t.then(()=>{new IntersectionObserver((o,i)=>{var r;o[0].intersectionRatio>0&&(this.setAriaLabels(),this.setActiveTab((r=this.getActiveTab())!=null?r:this.tabs[0],{emitEvents:!1}),i.unobserve(o[0].target))}).observe(this.tabGroup)})})}disconnectedCallback(){var t,e;super.disconnectedCallback(),(t=this.mutationObserver)==null||t.disconnect(),this.nav&&((e=this.resizeObserver)==null||e.unobserve(this.nav))}getAllTabs(){return this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()}getAllPanels(){return[...this.body.assignedElements()].filter(t=>t.tagName.toLowerCase()==="sl-tab-panel")}getActiveTab(){return this.tabs.find(t=>t.active)}handleClick(t){const o=t.target.closest("sl-tab");o?.closest("sl-tab-group")===this&&o!==null&&this.setActiveTab(o,{scrollBehavior:"smooth"})}handleKeyDown(t){const o=t.target.closest("sl-tab");if(o?.closest("sl-tab-group")===this&&(["Enter"," "].includes(t.key)&&o!==null&&(this.setActiveTab(o,{scrollBehavior:"smooth"}),t.preventDefault()),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key))){const r=this.tabs.find(n=>n.matches(":focus")),s=this.localize.dir()==="rtl";let a=null;if(r?.tagName.toLowerCase()==="sl-tab"){if(t.key==="Home")a=this.focusableTabs[0];else if(t.key==="End")a=this.focusableTabs[this.focusableTabs.length-1];else if(["top","bottom"].includes(this.placement)&&t.key===(s?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&t.key==="ArrowUp"){const n=this.tabs.findIndex(c=>c===r);a=this.findNextFocusableTab(n,"backward")}else if(["top","bottom"].includes(this.placement)&&t.key===(s?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&t.key==="ArrowDown"){const n=this.tabs.findIndex(c=>c===r);a=this.findNextFocusableTab(n,"forward")}if(!a)return;a.tabIndex=0,a.focus({preventScroll:!0}),this.activation==="auto"?this.setActiveTab(a,{scrollBehavior:"smooth"}):this.tabs.forEach(n=>{n.tabIndex=n===a?0:-1}),["top","bottom"].includes(this.placement)&&So(a,this.nav,"horizontal"),t.preventDefault()}}}handleScrollToStart(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}setActiveTab(t,e){if(e=Bt({emitEvents:!0,scrollBehavior:"auto"},e),t!==this.activeTab&&!t.disabled){const o=this.activeTab;this.activeTab=t,this.tabs.forEach(i=>{i.active=i===this.activeTab,i.tabIndex=i===this.activeTab?0:-1}),this.panels.forEach(i=>{var r;return i.active=i.name===((r=this.activeTab)==null?void 0:r.panel)}),this.syncIndicator(),["top","bottom"].includes(this.placement)&&So(this.activeTab,this.nav,"horizontal",e.scrollBehavior),e.emitEvents&&(o&&this.emit("sl-tab-hide",{detail:{name:o.panel}}),this.emit("sl-tab-show",{detail:{name:this.activeTab.panel}}))}}setAriaLabels(){this.tabs.forEach(t=>{const e=this.panels.find(o=>o.name===t.panel);e&&(t.setAttribute("aria-controls",e.getAttribute("id")),e.setAttribute("aria-labelledby",t.getAttribute("id")))})}repositionIndicator(){const t=this.getActiveTab();if(!t)return;const e=t.clientWidth,o=t.clientHeight,i=this.localize.dir()==="rtl",r=this.getAllTabs(),a=r.slice(0,r.indexOf(t)).reduce((n,c)=>({left:n.left+c.clientWidth,top:n.top+c.clientHeight}),{left:0,top:0});switch(this.placement){case"top":case"bottom":this.indicator.style.width=`${e}px`,this.indicator.style.height="auto",this.indicator.style.translate=i?`${-1*a.left}px`:`${a.left}px`;break;case"start":case"end":this.indicator.style.width="auto",this.indicator.style.height=`${o}px`,this.indicator.style.translate=`0 ${a.top}px`;break}}syncTabsAndPanels(){this.tabs=this.getAllTabs(),this.focusableTabs=this.tabs.filter(t=>!t.disabled),this.panels=this.getAllPanels(),this.syncIndicator(),this.updateComplete.then(()=>this.updateScrollControls())}findNextFocusableTab(t,e){let o=null;const i=e==="forward"?1:-1;let r=t+i;for(;t<this.tabs.length;){if(o=this.tabs[r]||null,o===null){e==="forward"?o=this.focusableTabs[0]:o=this.focusableTabs[this.focusableTabs.length-1];break}if(!o.disabled)break;r+=i}return o}updateScrollButtons(){this.hasScrollControls&&!this.fixedScrollControls&&(this.shouldHideScrollStartButton=this.scrollFromStart()<=this.scrollOffset,this.shouldHideScrollEndButton=this.isScrolledToEnd())}isScrolledToEnd(){return this.scrollFromStart()+this.nav.clientWidth>=this.nav.scrollWidth-this.scrollOffset}scrollFromStart(){return this.localize.dir()==="rtl"?-this.nav.scrollLeft:this.nav.scrollLeft}updateScrollControls(){this.noScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth+1,this.updateScrollButtons()}syncIndicator(){this.getActiveTab()?(this.indicator.style.display="block",this.repositionIndicator()):this.indicator.style.display="none"}show(t){const e=this.tabs.find(o=>o.panel===t);e&&this.setActiveTab(e,{scrollBehavior:"smooth"})}render(){const t=this.localize.dir()==="rtl";return m`
      <div
        part="base"
        class=${R({"tab-group":!0,"tab-group--top":this.placement==="top","tab-group--bottom":this.placement==="bottom","tab-group--start":this.placement==="start","tab-group--end":this.placement==="end","tab-group--rtl":this.localize.dir()==="rtl","tab-group--has-scroll-controls":this.hasScrollControls})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls?m`
                <sl-icon-button
                  part="scroll-button scroll-button--start"
                  exportparts="base:scroll-button__base"
                  class=${R({"tab-group__scroll-button":!0,"tab-group__scroll-button--start":!0,"tab-group__scroll-button--start--hidden":this.shouldHideScrollStartButton})}
                  name=${t?"chevron-right":"chevron-left"}
                  library="system"
                  tabindex="-1"
                  aria-hidden="true"
                  label=${this.localize.term("scrollToStart")}
                  @click=${this.handleScrollToStart}
                ></sl-icon-button>
              `:""}

          <div class="tab-group__nav" @scrollend=${this.updateScrollButtons}>
            <div part="tabs" class="tab-group__tabs" role="tablist">
              <div part="active-tab-indicator" class="tab-group__indicator"></div>
              <sl-resize-observer @sl-resize=${this.syncIndicator}>
                <slot name="nav" @slotchange=${this.syncTabsAndPanels}></slot>
              </sl-resize-observer>
            </div>
          </div>

          ${this.hasScrollControls?m`
                <sl-icon-button
                  part="scroll-button scroll-button--end"
                  exportparts="base:scroll-button__base"
                  class=${R({"tab-group__scroll-button":!0,"tab-group__scroll-button--end":!0,"tab-group__scroll-button--end--hidden":this.shouldHideScrollEndButton})}
                  name=${t?"chevron-left":"chevron-right"}
                  library="system"
                  tabindex="-1"
                  aria-hidden="true"
                  label=${this.localize.term("scrollToEnd")}
                  @click=${this.handleScrollToEnd}
                ></sl-icon-button>
              `:""}
        </div>

        <slot part="body" class="tab-group__body" @slotchange=${this.syncTabsAndPanels}></slot>
      </div>
    `}};G.styles=[U,tn];G.dependencies={"sl-icon-button":W,"sl-resize-observer":co};l([A(".tab-group")],G.prototype,"tabGroup",2);l([A(".tab-group__body")],G.prototype,"body",2);l([A(".tab-group__nav")],G.prototype,"nav",2);l([A(".tab-group__indicator")],G.prototype,"indicator",2);l([x()],G.prototype,"hasScrollControls",2);l([x()],G.prototype,"shouldHideScrollStartButton",2);l([x()],G.prototype,"shouldHideScrollEndButton",2);l([d()],G.prototype,"placement",2);l([d()],G.prototype,"activation",2);l([d({attribute:"no-scroll-controls",type:Boolean})],G.prototype,"noScrollControls",2);l([d({attribute:"fixed-scroll-controls",type:Boolean})],G.prototype,"fixedScrollControls",2);l([ns({passive:!0})],G.prototype,"updateScrollButtons",1);l([L("noScrollControls",{waitUntilFirstUpdate:!0})],G.prototype,"updateScrollControls",1);l([L("placement",{waitUntilFirstUpdate:!0})],G.prototype,"syncIndicator",1);G.define("sl-tab-group");var on=(t,e)=>{let o=0;return function(...i){window.clearTimeout(o),o=window.setTimeout(()=>{t.call(this,...i)},e)}},Ni=(t,e,o)=>{const i=t[e];t[e]=function(...r){i.call(this,...r),o.call(this,i,...r)}};(()=>{if(typeof window>"u")return;if(!("onscrollend"in window)){const e=new Set,o=new WeakMap,i=s=>{for(const a of s.changedTouches)e.add(a.identifier)},r=s=>{for(const a of s.changedTouches)e.delete(a.identifier)};document.addEventListener("touchstart",i,!0),document.addEventListener("touchend",r,!0),document.addEventListener("touchcancel",r,!0),Ni(EventTarget.prototype,"addEventListener",function(s,a){if(a!=="scrollend")return;const n=on(()=>{e.size?n():this.dispatchEvent(new Event("scrollend"))},100);s.call(this,"scroll",n,{passive:!0}),o.set(this,n)}),Ni(EventTarget.prototype,"removeEventListener",function(s,a){if(a!=="scrollend")return;const n=o.get(this);n&&s.call(this,"scroll",n,{passive:!0})})}})();var rn=E`
  :host {
    display: inline-block;
  }

  .tab {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    border-radius: var(--sl-border-radius-medium);
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-medium) var(--sl-spacing-large);
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
    transition:
      var(--transition-speed) box-shadow,
      var(--transition-speed) color;
  }

  .tab:hover:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  :host(:focus) {
    outline: transparent;
  }

  :host(:focus-visible) {
    color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: calc(-1 * var(--sl-focus-ring-width) - var(--sl-focus-ring-offset));
  }

  .tab.tab--active:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab.tab--closable {
    padding-inline-end: var(--sl-spacing-small);
  }

  .tab.tab--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .tab__close-button {
    font-size: var(--sl-font-size-small);
    margin-inline-start: var(--sl-spacing-small);
  }

  .tab__close-button::part(base) {
    padding: var(--sl-spacing-3x-small);
  }

  @media (forced-colors: active) {
    .tab.tab--active:not(.tab--disabled) {
      outline: solid 1px transparent;
      outline-offset: -3px;
    }
  }
`,sn=0,mt=class extends F{constructor(){super(...arguments),this.localize=new ft(this),this.attrId=++sn,this.componentId=`sl-tab-${this.attrId}`,this.panel="",this.active=!1,this.closable=!1,this.disabled=!1,this.tabIndex=0}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tab")}handleCloseClick(t){t.stopPropagation(),this.emit("sl-close")}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false"),this.disabled&&!this.active?this.tabIndex=-1:this.tabIndex=0}render(){return this.id=this.id.length>0?this.id:this.componentId,m`
      <div
        part="base"
        class=${R({tab:!0,"tab--active":this.active,"tab--closable":this.closable,"tab--disabled":this.disabled})}
      >
        <slot></slot>
        ${this.closable?m`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                class="tab__close-button"
                @click=${this.handleCloseClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </div>
    `}};mt.styles=[U,rn];mt.dependencies={"sl-icon-button":W};l([A(".tab")],mt.prototype,"tab",2);l([d({reflect:!0})],mt.prototype,"panel",2);l([d({type:Boolean,reflect:!0})],mt.prototype,"active",2);l([d({type:Boolean,reflect:!0})],mt.prototype,"closable",2);l([d({type:Boolean,reflect:!0})],mt.prototype,"disabled",2);l([d({type:Number,reflect:!0})],mt.prototype,"tabIndex",2);l([L("active")],mt.prototype,"handleActiveChange",1);l([L("disabled")],mt.prototype,"handleDisabledChange",1);mt.define("sl-tab");var an=E`
  :host {
    --padding: 0;

    display: none;
  }

  :host([active]) {
    display: block;
  }

  .tab-panel {
    display: block;
    padding: var(--padding);
  }
`,nn=0,Le=class extends F{constructor(){super(...arguments),this.attrId=++nn,this.componentId=`sl-tab-panel-${this.attrId}`,this.name="",this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute("role","tabpanel")}handleActiveChange(){this.setAttribute("aria-hidden",this.active?"false":"true")}render(){return m`
      <slot
        part="base"
        class=${R({"tab-panel":!0,"tab-panel--active":this.active})}
      ></slot>
    `}};Le.styles=[U,an];l([d({reflect:!0})],Le.prototype,"name",2);l([d({type:Boolean,reflect:!0})],Le.prototype,"active",2);l([L("active")],Le.prototype,"handleActiveChange",1);Le.define("sl-tab-panel");var ln=E`
  :host {
    display: inline-block;

    --size: 3rem;
  }

  .avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: var(--size);
    height: var(--size);
    background-color: var(--sl-color-neutral-400);
    font-family: var(--sl-font-sans);
    font-size: calc(var(--size) * 0.5);
    font-weight: var(--sl-font-weight-normal);
    color: var(--sl-color-neutral-0);
    user-select: none;
    -webkit-user-select: none;
    vertical-align: middle;
  }

  .avatar--circle,
  .avatar--circle .avatar__image {
    border-radius: var(--sl-border-radius-circle);
  }

  .avatar--rounded,
  .avatar--rounded .avatar__image {
    border-radius: var(--sl-border-radius-medium);
  }

  .avatar--square {
    border-radius: 0;
  }

  .avatar__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .avatar__initials {
    line-height: 1;
    text-transform: uppercase;
  }

  .avatar__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
  }
`,xt=class extends F{constructor(){super(...arguments),this.hasError=!1,this.image="",this.label="",this.initials="",this.loading="eager",this.shape="circle"}handleImageChange(){this.hasError=!1}handleImageLoadError(){this.hasError=!0,this.emit("sl-error")}render(){const t=m`
      <img
        part="image"
        class="avatar__image"
        src="${this.image}"
        loading="${this.loading}"
        alt=""
        @error="${this.handleImageLoadError}"
      />
    `;let e=m``;return this.initials?e=m`<div part="initials" class="avatar__initials">${this.initials}</div>`:e=m`
        <div part="icon" class="avatar__icon" aria-hidden="true">
          <slot name="icon">
            <sl-icon name="person-fill" library="system"></sl-icon>
          </slot>
        </div>
      `,m`
      <div
        part="base"
        class=${R({avatar:!0,"avatar--circle":this.shape==="circle","avatar--rounded":this.shape==="rounded","avatar--square":this.shape==="square"})}
        role="img"
        aria-label=${this.label}
      >
        ${this.image&&!this.hasError?t:e}
      </div>
    `}};xt.styles=[U,ln];xt.dependencies={"sl-icon":Z};l([x()],xt.prototype,"hasError",2);l([d()],xt.prototype,"image",2);l([d()],xt.prototype,"label",2);l([d()],xt.prototype,"initials",2);l([d()],xt.prototype,"loading",2);l([d({reflect:!0})],xt.prototype,"shape",2);l([L("image")],xt.prototype,"handleImageChange",1);xt.define("sl-avatar");var cn=E`
  :host {
    --width: 31rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .dialog {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: var(--sl-z-index-dialog);
  }

  .dialog__panel {
    display: flex;
    flex-direction: column;
    z-index: 2;
    width: var(--width);
    max-width: calc(100% - var(--sl-spacing-2x-large));
    max-height: calc(100% - var(--sl-spacing-2x-large));
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    box-shadow: var(--sl-shadow-x-large);
  }

  .dialog__panel:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (max-width: 420px) {
    .dialog__panel {
      max-height: 80vh;
    }
  }

  .dialog--open .dialog__panel {
    display: flex;
    opacity: 1;
  }

  .dialog__header {
    flex: 0 0 auto;
    display: flex;
  }

  .dialog__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .dialog__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .dialog__header-actions sl-icon-button,
  .dialog__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .dialog__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .dialog__footer {
    flex: 0 0 auto;
    text-align: right;
    padding: var(--footer-spacing);
  }

  .dialog__footer ::slotted(sl-button:not(:first-of-type)) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  .dialog:not(.dialog--has-footer) .dialog__footer {
    display: none;
  }

  .dialog__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
  }

  @media (forced-colors: active) {
    .dialog__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`,_t=class extends F{constructor(){super(...arguments),this.hasSlotController=new Xt(this,"footer"),this.localize=new ft(this),this.modal=new rr(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=t=>{t.key==="Escape"&&this.modal.isActive()&&this.open&&(t.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),xe(this))}disconnectedCallback(){super.disconnectedCallback(),this.modal.deactivate(),_e(this),this.removeOpenListeners()}requestClose(t){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:t}}).defaultPrevented){const o=st(this,"dialog.denyClose",{dir:this.localize.dir()});at(this.panel,o.keyframes,o.options);return}this.hide()}addOpenListeners(){var t;"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard")):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var t;(t=this.closeWatcher)==null||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),xe(this);const t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([yt(this.dialog),yt(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(t?t.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),t&&t.setAttribute("autofocus","")});const e=st(this,"dialog.show",{dir:this.localize.dir()}),o=st(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([at(this.panel,e.keyframes,e.options),at(this.overlay,o.keyframes,o.options)]),this.emit("sl-after-show")}else{sr(this),this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([yt(this.dialog),yt(this.overlay)]);const t=st(this,"dialog.hide",{dir:this.localize.dir()}),e=st(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([at(this.overlay,e.keyframes,e.options).then(()=>{this.overlay.hidden=!0}),at(this.panel,t.keyframes,t.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,_e(this);const o=this.originalTrigger;typeof o?.focus=="function"&&setTimeout(()=>o.focus()),this.emit("sl-after-hide")}}async show(){if(!this.open)return this.open=!0,re(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,re(this,"sl-after-hide")}render(){return m`
      <div
        part="base"
        class=${R({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${_(this.noHeader?this.label:void 0)}
          aria-labelledby=${_(this.noHeader?void 0:"title")}
          tabindex="-1"
        >
          ${this.noHeader?"":m`
                <header part="header" class="dialog__header">
                  <h2 part="title" class="dialog__title" id="title">
                    <slot name="label"> ${this.label.length>0?this.label:"\uFEFF"} </slot>
                  </h2>
                  <div part="header-actions" class="dialog__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="dialog__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click="${()=>this.requestClose("close-button")}"
                    ></sl-icon-button>
                  </div>
                </header>
              `}
          ${""}
          <div part="body" class="dialog__body" tabindex="-1"><slot></slot></div>

          <footer part="footer" class="dialog__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};_t.styles=[U,cn];_t.dependencies={"sl-icon-button":W};l([A(".dialog")],_t.prototype,"dialog",2);l([A(".dialog__panel")],_t.prototype,"panel",2);l([A(".dialog__overlay")],_t.prototype,"overlay",2);l([d({type:Boolean,reflect:!0})],_t.prototype,"open",2);l([d({reflect:!0})],_t.prototype,"label",2);l([d({attribute:"no-header",type:Boolean,reflect:!0})],_t.prototype,"noHeader",2);l([L("open",{waitUntilFirstUpdate:!0})],_t.prototype,"handleOpenChange",1);q("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});q("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});q("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}});q("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});q("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});_t.define("sl-dialog");var dn=E`
  :host {
    display: block;
  }

  .input {
    flex: 1 1 auto;
    display: inline-flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: text;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  /* Standard inputs */
  .input--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .input--standard:hover:not(.input--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }

  .input--standard.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .input--standard.input--focused:not(.input--disabled) .input__control {
    color: var(--sl-input-color-focus);
  }

  .input--standard.input--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input--standard.input--disabled .input__control {
    color: var(--sl-input-color-disabled);
  }

  .input--standard.input--disabled .input__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled inputs */
  .input--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .input--filled:hover:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .input--filled.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .input--filled.input--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    min-width: 0;
    height: 100%;
    color: var(--sl-input-color);
    border: none;
    background: inherit;
    box-shadow: none;
    padding: 0;
    margin: 0;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .input__control::-webkit-search-decoration,
  .input__control::-webkit-search-cancel-button,
  .input__control::-webkit-search-results-button,
  .input__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .input__control:-webkit-autofill,
  .input__control:-webkit-autofill:hover,
  .input__control:-webkit-autofill:focus,
  .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-background-color-hover) inset !important;
    -webkit-text-fill-color: var(--sl-color-primary-500);
    caret-color: var(--sl-input-color);
  }

  .input--filled .input__control:-webkit-autofill,
  .input--filled .input__control:-webkit-autofill:hover,
  .input--filled .input__control:-webkit-autofill:focus,
  .input--filled .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-filled-background-color) inset !important;
  }

  .input__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .input:hover:not(.input--disabled) .input__control {
    color: var(--sl-input-color-hover);
  }

  .input__control:focus {
    outline: none;
  }

  .input__prefix,
  .input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
  }

  .input__prefix ::slotted(sl-icon),
  .input__suffix ::slotted(sl-icon) {
    color: var(--sl-input-icon-color);
  }

  /*
   * Size modifiers
   */

  .input--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    height: var(--sl-input-height-small);
  }

  .input--small .input__control {
    height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-small);
  }

  .input--small .input__clear,
  .input--small .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-small) * 2);
  }

  .input--small .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .input--small .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .input--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    height: var(--sl-input-height-medium);
  }

  .input--medium .input__control {
    height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-medium);
  }

  .input--medium .input__clear,
  .input--medium .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-medium) * 2);
  }

  .input--medium .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .input--medium .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .input--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    height: var(--sl-input-height-large);
  }

  .input--large .input__control {
    height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-large);
  }

  .input--large .input__clear,
  .input--large .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-large) * 2);
  }

  .input--large .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .input--large .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  /*
   * Pill modifier
   */

  .input--pill.input--small {
    border-radius: var(--sl-input-height-small);
  }

  .input--pill.input--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .input--pill.input--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Clearable + Password Toggle
   */

  .input__clear,
  .input__password-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .input__clear:hover,
  .input__password-toggle:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .input__clear:focus,
  .input__password-toggle:focus {
    outline: none;
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Hide the built-in number spinner */
  .input--no-spin-buttons input[type='number']::-webkit-outer-spin-button,
  .input--no-spin-buttons input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
  }

  .input--no-spin-buttons input[type='number'] {
    -moz-appearance: textfield;
  }
`,C=class extends F{constructor(){super(...arguments),this.formControlController=new De(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new Xt(this,"help-text","label"),this.localize=new ft(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var t;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,((t=this.input)==null?void 0:t.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(t){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=t,this.value=this.__dateInput.value}get valueAsNumber(){var t;return this.__numberInput.value=this.value,((t=this.input)==null?void 0:t.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(t){this.__numberInput.valueAsNumber=t,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(t){t.preventDefault(),this.value!==""&&(this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")),this.input.focus()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleKeyDown(t){const e=t.metaKey||t.ctrlKey||t.shiftKey||t.altKey;t.key==="Enter"&&!e&&setTimeout(()=>{!t.defaultPrevented&&!t.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(t,e,o="none"){this.input.setSelectionRange(t,e,o)}setRangeText(t,e,o,i="preserve"){const r=e??this.input.selectionStart,s=o??this.input.selectionEnd;this.input.setRangeText(t,r,s,i),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),o=this.label?!0:!!t,i=this.helpText?!0:!!e,s=this.clearable&&!this.disabled&&!this.readonly&&(typeof this.value=="number"||this.value.length>0);return m`
      <div
        part="form-control"
        class=${R({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":o,"form-control--has-help-text":i})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${o?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${R({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
          >
            <span part="prefix" class="input__prefix">
              <slot name="prefix"></slot>
            </span>

            <input
              part="input"
              id="input"
              class="input__control"
              type=${this.type==="password"&&this.passwordVisible?"text":this.type}
              title=${this.title}
              name=${_(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${_(this.placeholder)}
              minlength=${_(this.minlength)}
              maxlength=${_(this.maxlength)}
              min=${_(this.min)}
              max=${_(this.max)}
              step=${_(this.step)}
              .value=${ei(this.value)}
              autocapitalize=${_(this.autocapitalize)}
              autocomplete=${_(this.autocomplete)}
              autocorrect=${_(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${_(this.pattern)}
              enterkeyhint=${_(this.enterkeyhint)}
              inputmode=${_(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${s?m`
                  <button
                    part="clear-button"
                    class="input__clear"
                    type="button"
                    aria-label=${this.localize.term("clearEntry")}
                    @click=${this.handleClearClick}
                    tabindex="-1"
                  >
                    <slot name="clear-icon">
                      <sl-icon name="x-circle-fill" library="system"></sl-icon>
                    </slot>
                  </button>
                `:""}
            ${this.passwordToggle&&!this.disabled?m`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?m`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        `:m`
                          <slot name="hide-password-icon">
                            <sl-icon name="eye" library="system"></sl-icon>
                          </slot>
                        `}
                  </button>
                `:""}

            <span part="suffix" class="input__suffix">
              <slot name="suffix"></slot>
            </span>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};C.styles=[U,lo,dn];C.dependencies={"sl-icon":Z};l([A(".input__control")],C.prototype,"input",2);l([x()],C.prototype,"hasFocus",2);l([d()],C.prototype,"title",2);l([d({reflect:!0})],C.prototype,"type",2);l([d()],C.prototype,"name",2);l([d()],C.prototype,"value",2);l([ti()],C.prototype,"defaultValue",2);l([d({reflect:!0})],C.prototype,"size",2);l([d({type:Boolean,reflect:!0})],C.prototype,"filled",2);l([d({type:Boolean,reflect:!0})],C.prototype,"pill",2);l([d()],C.prototype,"label",2);l([d({attribute:"help-text"})],C.prototype,"helpText",2);l([d({type:Boolean})],C.prototype,"clearable",2);l([d({type:Boolean,reflect:!0})],C.prototype,"disabled",2);l([d()],C.prototype,"placeholder",2);l([d({type:Boolean,reflect:!0})],C.prototype,"readonly",2);l([d({attribute:"password-toggle",type:Boolean})],C.prototype,"passwordToggle",2);l([d({attribute:"password-visible",type:Boolean})],C.prototype,"passwordVisible",2);l([d({attribute:"no-spin-buttons",type:Boolean})],C.prototype,"noSpinButtons",2);l([d({reflect:!0})],C.prototype,"form",2);l([d({type:Boolean,reflect:!0})],C.prototype,"required",2);l([d()],C.prototype,"pattern",2);l([d({type:Number})],C.prototype,"minlength",2);l([d({type:Number})],C.prototype,"maxlength",2);l([d()],C.prototype,"min",2);l([d()],C.prototype,"max",2);l([d()],C.prototype,"step",2);l([d()],C.prototype,"autocapitalize",2);l([d()],C.prototype,"autocorrect",2);l([d()],C.prototype,"autocomplete",2);l([d({type:Boolean})],C.prototype,"autofocus",2);l([d()],C.prototype,"enterkeyhint",2);l([d({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],C.prototype,"spellcheck",2);l([d()],C.prototype,"inputmode",2);l([L("disabled",{waitUntilFirstUpdate:!0})],C.prototype,"handleDisabledChange",1);l([L("step",{waitUntilFirstUpdate:!0})],C.prototype,"handleStepChange",1);l([L("value",{waitUntilFirstUpdate:!0})],C.prototype,"handleValueChange",1);C.define("sl-input");var un=E`
  :host {
    display: block;
  }

  .textarea {
    display: grid;
    align-items: center;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
    cursor: text;
  }

  /* Standard textareas */
  .textarea--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .textarea--standard:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }
  .textarea--standard:hover:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-hover);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    color: var(--sl-input-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-focus);
  }

  .textarea--standard.textarea--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control,
  .textarea__size-adjuster {
    grid-area: 1 / 1 / 2 / 2;
  }

  .textarea__size-adjuster {
    visibility: hidden;
    pointer-events: none;
    opacity: 0;
  }

  .textarea--standard.textarea--disabled .textarea__control {
    color: var(--sl-input-color-disabled);
  }

  .textarea--standard.textarea--disabled .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled textareas */
  .textarea--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .textarea--filled:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .textarea--filled.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .textarea--filled.textarea--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control {
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: 1.4;
    color: var(--sl-input-color);
    border: none;
    background: none;
    box-shadow: none;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .textarea__control::-webkit-search-decoration,
  .textarea__control::-webkit-search-cancel-button,
  .textarea__control::-webkit-search-results-button,
  .textarea__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .textarea__control:focus {
    outline: none;
  }

  /*
   * Size modifiers
   */

  .textarea--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
  }

  .textarea--small .textarea__control {
    padding: 0.5em var(--sl-input-spacing-small);
  }

  .textarea--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .textarea--medium .textarea__control {
    padding: 0.5em var(--sl-input-spacing-medium);
  }

  .textarea--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
  }

  .textarea--large .textarea__control {
    padding: 0.5em var(--sl-input-spacing-large);
  }

  /*
   * Resize types
   */

  .textarea--resize-none .textarea__control {
    resize: none;
  }

  .textarea--resize-vertical .textarea__control {
    resize: vertical;
  }

  .textarea--resize-auto .textarea__control {
    height: auto;
    resize: none;
    overflow-y: hidden;
  }
`,T=class extends F{constructor(){super(...arguments),this.formControlController=new De(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new Xt(this,"help-text","label"),this.hasFocus=!1,this.title="",this.name="",this.value="",this.size="medium",this.filled=!1,this.label="",this.helpText="",this.placeholder="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.form="",this.required=!1,this.spellcheck=!0,this.defaultValue=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.setTextareaHeight()),this.updateComplete.then(()=>{this.setTextareaHeight(),this.resizeObserver.observe(this.input)})}firstUpdated(){this.formControlController.updateValidity()}disconnectedCallback(){var t;super.disconnectedCallback(),this.input&&((t=this.resizeObserver)==null||t.unobserve(this.input))}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.setTextareaHeight(),this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}setTextareaHeight(){this.resize==="auto"?(this.sizeAdjuster.style.height=`${this.input.clientHeight}px`,this.input.style.height="auto",this.input.style.height=`${this.input.scrollHeight}px`):this.input.style.height=""}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleRowsChange(){this.setTextareaHeight()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity(),this.setTextareaHeight()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(t){if(t){typeof t.top=="number"&&(this.input.scrollTop=t.top),typeof t.left=="number"&&(this.input.scrollLeft=t.left);return}return{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(t,e,o="none"){this.input.setSelectionRange(t,e,o)}setRangeText(t,e,o,i="preserve"){const r=e??this.input.selectionStart,s=o??this.input.selectionEnd;this.input.setRangeText(t,r,s,i),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaHeight())}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),o=this.label?!0:!!t,i=this.helpText?!0:!!e;return m`
      <div
        part="form-control"
        class=${R({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":o,"form-control--has-help-text":i})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${o?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${R({textarea:!0,"textarea--small":this.size==="small","textarea--medium":this.size==="medium","textarea--large":this.size==="large","textarea--standard":!this.filled,"textarea--filled":this.filled,"textarea--disabled":this.disabled,"textarea--focused":this.hasFocus,"textarea--empty":!this.value,"textarea--resize-none":this.resize==="none","textarea--resize-vertical":this.resize==="vertical","textarea--resize-auto":this.resize==="auto"})}
          >
            <textarea
              part="textarea"
              id="input"
              class="textarea__control"
              title=${this.title}
              name=${_(this.name)}
              .value=${ei(this.value)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${_(this.placeholder)}
              rows=${_(this.rows)}
              minlength=${_(this.minlength)}
              maxlength=${_(this.maxlength)}
              autocapitalize=${_(this.autocapitalize)}
              autocorrect=${_(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${_(this.spellcheck)}
              enterkeyhint=${_(this.enterkeyhint)}
              inputmode=${_(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            ></textarea>
            <!-- This "adjuster" exists to prevent layout shifting. https://github.com/shoelace-style/shoelace/issues/2180 -->
            <div part="textarea-adjuster" class="textarea__size-adjuster" ?hidden=${this.resize!=="auto"}></div>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};T.styles=[U,lo,un];l([A(".textarea__control")],T.prototype,"input",2);l([A(".textarea__size-adjuster")],T.prototype,"sizeAdjuster",2);l([x()],T.prototype,"hasFocus",2);l([d()],T.prototype,"title",2);l([d()],T.prototype,"name",2);l([d()],T.prototype,"value",2);l([d({reflect:!0})],T.prototype,"size",2);l([d({type:Boolean,reflect:!0})],T.prototype,"filled",2);l([d()],T.prototype,"label",2);l([d({attribute:"help-text"})],T.prototype,"helpText",2);l([d()],T.prototype,"placeholder",2);l([d({type:Number})],T.prototype,"rows",2);l([d()],T.prototype,"resize",2);l([d({type:Boolean,reflect:!0})],T.prototype,"disabled",2);l([d({type:Boolean,reflect:!0})],T.prototype,"readonly",2);l([d({reflect:!0})],T.prototype,"form",2);l([d({type:Boolean,reflect:!0})],T.prototype,"required",2);l([d({type:Number})],T.prototype,"minlength",2);l([d({type:Number})],T.prototype,"maxlength",2);l([d()],T.prototype,"autocapitalize",2);l([d()],T.prototype,"autocorrect",2);l([d()],T.prototype,"autocomplete",2);l([d({type:Boolean})],T.prototype,"autofocus",2);l([d()],T.prototype,"enterkeyhint",2);l([d({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],T.prototype,"spellcheck",2);l([d()],T.prototype,"inputmode",2);l([ti()],T.prototype,"defaultValue",2);l([L("disabled",{waitUntilFirstUpdate:!0})],T.prototype,"handleDisabledChange",1);l([L("rows",{waitUntilFirstUpdate:!0})],T.prototype,"handleRowsChange",1);l([L("value",{waitUntilFirstUpdate:!0})],T.prototype,"handleValueChange",1);T.define("sl-textarea");var hn=Object.defineProperty,pn=Object.getOwnPropertyDescriptor,uo=(t,e,o,i)=>{for(var r=i>1?void 0:i?pn(e,o):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(r=(i?a(e,o,r):a(r))||r);return i&&r&&hn(e,o,r),r};let se=class extends H{constructor(){super(...arguments),this.groups=[],this.editingGroup=null}async firstUpdated(){this.fetchGroups()}async fetchGroups(){const t=await fetch("http://localhost:3000/api/groups");this.groups=await t.json()}openEdit(t=null){this.editingGroup=t||{name:"",description:"",photoUrl:""},this.dialog.show()}async save(){const t=this.editingGroup.id?"PUT":"POST",e=this.editingGroup.id?`http://localhost:3000/api/groups/${this.editingGroup.id}`:"http://localhost:3000/api/groups";await fetch(e,{method:t,headers:{"Content-Type":"application/json"},body:JSON.stringify(this.editingGroup)}),this.dialog.hide(),this.fetchGroups()}async deleteGroup(t){confirm("Czy na pewno chcesz usunąć tę grupę?")&&(await fetch(`http://localhost:3000/api/groups/${t}`,{method:"DELETE"}),this.fetchGroups())}render(){return m`
      <div class="header-actions">
        <h2>Lista Grup</h2>
        <sl-button variant="primary" @click=${()=>this.openEdit()}>
          <sl-icon slot="prefix" name="plus-lg"></sl-icon> Dodaj Grupę
        </sl-button>
      </div>

      <div class="list-container">
        ${this.groups.map(t=>m`
          <div class="list-item">
            
            <div class="logo-container">
              <sl-avatar 
                image="${t.photoUrl||""}" 
                label="${t.name}" 
                initials="${t.name.substring(0,2).toUpperCase()}" 
                style="--size: 50px;">
              </sl-avatar>
            </div>
            
            <div class="content-container">
              <span class="entity-name">${t.name}</span>
              ${t.description?m`<span class="entity-desc">${t.description}</span>`:""}
            </div>
            
            <div class="actions-container">
              <sl-button size="small" variant="default" @click=${()=>this.openEdit(t)}>
                <sl-icon slot="prefix" name="pencil"></sl-icon> Edytuj
              </sl-button>
              
              <sl-button size="small" variant="danger" outline @click=${()=>this.deleteGroup(t.id)}>
                <sl-icon slot="prefix" name="trash"></sl-icon> Usuń
              </sl-button>
            </div>

          </div>
        `)}
      </div>

      <sl-dialog label="${this.editingGroup?.id?"Edytuj Grupę":"Nowa Grupa"}">
        <form>
          <sl-input label="Nazwa" required .value=${this.editingGroup?.name} @sl-input=${t=>this.editingGroup.name=t.target.value}></sl-input>
          <sl-input label="URL do Logo (Link do zdjęcia)" placeholder="np. https://mojastrona.pl/logo.png" .value=${this.editingGroup?.photoUrl} @sl-input=${t=>this.editingGroup.photoUrl=t.target.value}></sl-input>
          <sl-textarea label="Opis" .value=${this.editingGroup?.description} @sl-input=${t=>this.editingGroup.description=t.target.value}></sl-textarea>
        </form>
        <sl-button slot="footer" variant="primary" @click=${this.save}>Zapisz zmiany</sl-button>
      </sl-dialog>
      
    `}};se.styles=[rt,E`
      :host {
        display: block;
        padding: 10px 0;
      }
      
      .header-actions {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 25px;
      }
      
      .header-actions h2 {
        margin: 0;
        color: var(--color-wood-dark);
        font-size: 1.3rem;
      }

      .list-container {
        display: flex;
        flex-direction: column;
        gap: 12px;
      }

      /* GŁÓWNY STYL DLA ELEMENTU LISTY */
      .list-item {
        display: flex;
        align-items: center;
        background-color: var(--color-sand-light);
        border: 1px solid var(--color-wood-medium);
        border-radius: 10px;
        padding: 12px 15px;
        transition: background-color 0.2s ease, transform 0.1s ease;
      }

      .list-item:hover {
        background-color: var(--color-cookie-medium);
      }

      .logo-container {
        margin-right: 15px;
      }

      .content-container {
        flex: 1; /* Wypełnia środek */
        display: flex;
        flex-direction: column;
      }

      .entity-name {
        font-weight: bold;
        font-size: 1.1rem;
        color: var(--color-wood-dark);
      }

      .entity-desc {
        font-size: 0.85rem;
        color: #666;
        margin-top: 4px;
        display: -webkit-box;
        -webkit-line-clamp: 1; /* Przycina za długi opis do 1 linijki */
        -webkit-box-orient: vertical;
        overflow: hidden;
      }

      .actions-container {
        display: flex;
        gap: 10px;
        margin-left: 10px;
      }

      sl-icon-button {
        font-size: 1.3rem;
        color: var(--color-wood-dark);
      }
      
      sl-icon-button::part(base):hover {
        color: var(--color-wood-medium);
      }

      form {
        display: flex;
        flex-direction: column;
        gap: 15px;
      }
    `];uo([x()],se.prototype,"groups",2);uo([A("sl-dialog")],se.prototype,"dialog",2);uo([x()],se.prototype,"editingGroup",2);se=uo([ot("app-admin-groups")],se);var fn=E`
  :host {
    display: inline-flex;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: max(12px, 0.75em);
    font-weight: var(--sl-font-weight-semibold);
    letter-spacing: var(--sl-letter-spacing-normal);
    line-height: 1;
    border-radius: var(--sl-border-radius-small);
    border: solid 1px var(--sl-color-neutral-0);
    white-space: nowrap;
    padding: 0.35em 0.6em;
    user-select: none;
    -webkit-user-select: none;
    cursor: inherit;
  }

  /* Variant modifiers */
  .badge--primary {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--success {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--neutral {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--warning {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--danger {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /* Pill modifier */
  .badge--pill {
    border-radius: var(--sl-border-radius-pill);
  }

  /* Pulse modifier */
  .badge--pulse {
    animation: pulse 1.5s infinite;
  }

  .badge--pulse.badge--primary {
    --pulse-color: var(--sl-color-primary-600);
  }

  .badge--pulse.badge--success {
    --pulse-color: var(--sl-color-success-600);
  }

  .badge--pulse.badge--neutral {
    --pulse-color: var(--sl-color-neutral-600);
  }

  .badge--pulse.badge--warning {
    --pulse-color: var(--sl-color-warning-600);
  }

  .badge--pulse.badge--danger {
    --pulse-color: var(--sl-color-danger-600);
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--pulse-color);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }
`,Re=class extends F{constructor(){super(...arguments),this.variant="primary",this.pill=!1,this.pulse=!1}render(){return m`
      <span
        part="base"
        class=${R({badge:!0,"badge--primary":this.variant==="primary","badge--success":this.variant==="success","badge--neutral":this.variant==="neutral","badge--warning":this.variant==="warning","badge--danger":this.variant==="danger","badge--pill":this.pill,"badge--pulse":this.pulse})}
        role="status"
      >
        <slot></slot>
      </span>
    `}};Re.styles=[U,fn];l([d({reflect:!0})],Re.prototype,"variant",2);l([d({type:Boolean,reflect:!0})],Re.prototype,"pill",2);l([d({type:Boolean,reflect:!0})],Re.prototype,"pulse",2);Re.define("sl-badge");var mn=Object.defineProperty,bn=Object.getOwnPropertyDescriptor,Zt=(t,e,o,i)=>{for(var r=i>1?void 0:i?bn(e,o):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(r=(i?a(e,o,r):a(r))||r);return i&&r&&mn(e,o,r),r};let Et=class extends H{constructor(){super(...arguments),this.announcements=[],this.isSubmitting=!1,this.editingId=null}async firstUpdated(){await this.fetchAnnouncements()}async fetchAnnouncements(){try{const t=await fetch("http://localhost:3000/api/announcements");if(t.ok){const e=await t.json();this.announcements=e.sort((o,i)=>o.isMain?-1:i.isMain?1:new Date(i.date).getTime()-new Date(o.date).getTime())}}catch(t){console.error("Błąd pobierania ogłoszeń:",t)}}async handleSubmit(t){t.preventDefault();const e=this.titleInput.value,o=this.dateInput.value,i=this.contentInput.value;if(!e||!o||!i){alert("Wypełnij wszystkie pola!");return}this.isSubmitting=!0;try{let r;this.editingId?r=await fetch(`http://localhost:3000/api/announcements/${this.editingId}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:e,date:o,content:i})}):r=await fetch("http://localhost:3000/api/announcements",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:e,date:o,content:i})}),r.ok?(this.resetForm(),await this.fetchAnnouncements()):alert("Błąd zapisu ogłoszenia.")}catch(r){console.error("Błąd:",r)}finally{this.isSubmitting=!1}}async handleDelete(t){if(confirm("Czy na pewno chcesz usunąć to ogłoszenie?"))try{(await fetch(`http://localhost:3000/api/announcements/${t}`,{method:"DELETE"})).ok&&(this.editingId===t&&this.resetForm(),await this.fetchAnnouncements())}catch(e){console.error("Błąd usuwania:",e)}}async toggleMain(t){try{(await fetch(`http://localhost:3000/api/announcements/${t}/toggle-main`,{method:"PUT"})).ok&&await this.fetchAnnouncements()}catch(e){console.error("Błąd przy przełączaniu głównego ogłoszenia:",e)}}startEditing(t){this.editingId=t.id,this.titleInput.value=t.title;const e=new Date(t.date).toISOString().split("T")[0];this.dateInput.value=e,this.contentInput.value=t.content,window.scrollTo({top:0,behavior:"smooth"})}resetForm(){this.editingId=null,this.titleInput.value="",this.dateInput.value="",this.contentInput.value=""}formatDate(t){return new Date(t).toLocaleDateString("pl-PL")}render(){return m`
      <div class="form-section ${this.editingId?"is-editing":""}">
        <div class="form-title">
          <h2>${this.editingId?"Edytuj ogłoszenie":"Dodaj nowe ogłoszenia"}</h2>
          ${this.editingId?m`<sl-badge variant="warning" pill>Tryb Edycji</sl-badge>`:""}
        </div>
        
        <form @submit="${this.handleSubmit}">
          <div class="form-row">
            <sl-input id="title-input" label="Tytuł" placeholder="np. Ogłoszenia - III Niedziela Zwykła" required></sl-input>
            <sl-input id="date-input" type="date" label="Data" required></sl-input>
          </div>
          <sl-textarea id="content-input" label="Treść ogłoszeń" placeholder="Wpisz tutaj treść ogłoszeń..." rows="6" resize="auto" required></sl-textarea>
          <div class="button-group">
            <sl-button type="submit" variant="primary" class="submit-btn" ?loading="${this.isSubmitting}">
              <sl-icon slot="prefix" name="${this.editingId?"save":"plus-circle"}"></sl-icon>
              ${this.editingId?"Zapisz zmiany":"Opublikuj ogłoszenia"}
            </sl-button>
            ${this.editingId?m`<sl-button variant="default" @click="${this.resetForm}">Anuluj</sl-button>`:""}
          </div>
        </form>
      </div>

      <sl-divider></sl-divider>

      <div class="list-section">
        <h3>Zarządzaj ogłoszeniami</h3>
        
        ${this.announcements.length===0?m`<p style="color: #666;">Brak ogłoszeń w bazie.</p>`:this.announcements.map(t=>m`
            <div class="announcement-item ${t.isMain?"is-main":""}">
              
              <sl-icon 
                class="main-tick ${t.isMain?"is-active":""}" 
                name="${t.isMain?"check-circle-fill":"check-circle"}" 
                @click="${()=>this.toggleMain(t.id)}"
                title="${t.isMain?"Odznacz jako główne":"Ustaw jako główne"}">
              </sl-icon>

              <div class="announcement-header">
                <div class="announcement-info">
                  <h4>
                    ${t.title}
                    ${t.isMain?m`<sl-badge variant="success" pill>Strona Główna</sl-badge>`:""}
                  </h4>
                  <span>Data: ${this.formatDate(t.date)}</span>
                </div>
              </div>

              <div class="actions">
                <sl-button size="small" @click="${()=>this.startEditing(t)}">
                  <sl-icon slot="prefix" name="pencil"></sl-icon>
                  Edytuj
                </sl-button>
                
                <sl-button size="small" variant="danger" outline @click="${()=>this.handleDelete(t.id)}">
                  <sl-icon slot="prefix" name="trash"></sl-icon>
                  Usuń
                </sl-button>
              </div>

            </div>
          `)}
      </div>
    `}};Et.styles=[rt,E`
      :host { display: block; padding: 20px; }
      .form-section { background-color: #fff; padding: 20px; border-radius: 8px; border: 1px solid var(--color-wood-medium); margin-bottom: 30px; transition: border-color 0.3s ease, box-shadow 0.3s ease; }
      .form-section.is-editing { border-color: #d97706; box-shadow: 0 0 0 2px rgba(217, 119, 6, 0.2); }
      .form-title { color: var(--color-wood-dark); margin-top: 0; margin-bottom: 15px; display: flex; justify-content: space-between; align-items: center; }
      .form-row { display: flex; gap: 15px; margin-bottom: 15px; }
      .form-row sl-input { flex: 1; }
      sl-textarea { margin-bottom: 15px; }
      .button-group { display: flex; gap: 10px; }
      .submit-btn { flex: 1; }
      .list-section h3 { color: var(--color-wood-dark); margin-bottom: 15px; }
      
      /* KLUCZOWA ZMIANA: position: relative pozwala umieścić ticka w rogu */
      .announcement-item { 
        position: relative; 
        background-color: #fff; 
        border: 1px solid var(--color-wood-medium); 
        border-radius: 8px; 
        padding: 15px; 
        margin-bottom: 15px; 
        display: flex; 
        flex-direction: column; 
        gap: 10px; 
      }
      
      .announcement-item.is-main { 
        border: 2px solid var(--color-wood-dark); 
        background-color: var(--color-sand-light); 
      }
      
      /* NOWE STYLE DLA TICKA */
      .main-tick {
        position: absolute;
        top: 15px;
        right: 15px;
        font-size: 1.6rem;
        color: #ccc;
        cursor: pointer;
        transition: transform 0.2s, color 0.2s;
      }
      
      .main-tick:hover {
        transform: scale(1.1);
      }
      
      .main-tick.is-active {
        color: #198754; /* Ładny zielony kolor zaznaczenia */
      }

      .announcement-header { display: flex; justify-content: space-between; align-items: flex-start; width: 100%; padding-right: 30px; /* miejsce na ticka */ }
      .announcement-info h4 { margin: 0 0 5px 0; color: var(--color-wood-dark); display: flex; align-items: center; gap: 8px;}
      .announcement-info span { font-size: 0.85rem; color: #666; }
      .actions { display: flex; gap: 8px; align-items: center; flex-wrap: wrap; }
    `];Zt([x()],Et.prototype,"announcements",2);Zt([x()],Et.prototype,"isSubmitting",2);Zt([x()],Et.prototype,"editingId",2);Zt([A("#title-input")],Et.prototype,"titleInput",2);Zt([A("#date-input")],Et.prototype,"dateInput",2);Zt([A("#content-input")],Et.prototype,"contentInput",2);Et=Zt([ot("app-admin-announcements")],Et);var gn=E`
  :host {
    display: inline-block;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
  }

  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Variant modifiers
   */

  .tag--primary {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-200);
    color: var(--sl-color-primary-800);
  }

  .tag--primary:active > sl-icon-button {
    color: var(--sl-color-primary-600);
  }

  .tag--success {
    background-color: var(--sl-color-success-50);
    border-color: var(--sl-color-success-200);
    color: var(--sl-color-success-800);
  }

  .tag--success:active > sl-icon-button {
    color: var(--sl-color-success-600);
  }

  .tag--neutral {
    background-color: var(--sl-color-neutral-50);
    border-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-800);
  }

  .tag--neutral:active > sl-icon-button {
    color: var(--sl-color-neutral-600);
  }

  .tag--warning {
    background-color: var(--sl-color-warning-50);
    border-color: var(--sl-color-warning-200);
    color: var(--sl-color-warning-800);
  }

  .tag--warning:active > sl-icon-button {
    color: var(--sl-color-warning-600);
  }

  .tag--danger {
    background-color: var(--sl-color-danger-50);
    border-color: var(--sl-color-danger-200);
    color: var(--sl-color-danger-800);
  }

  .tag--danger:active > sl-icon-button {
    color: var(--sl-color-danger-600);
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--sl-button-font-size-small);
    height: calc(var(--sl-input-height-small) * 0.8);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
    padding: 0 var(--sl-spacing-x-small);
  }

  .tag--medium {
    font-size: var(--sl-button-font-size-medium);
    height: calc(var(--sl-input-height-medium) * 0.8);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
    padding: 0 var(--sl-spacing-small);
  }

  .tag--large {
    font-size: var(--sl-button-font-size-large);
    height: calc(var(--sl-input-height-large) * 0.8);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
    padding: 0 var(--sl-spacing-medium);
  }

  .tag__remove {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /*
   * Pill modifier
   */

  .tag--pill {
    border-radius: var(--sl-border-radius-pill);
  }
`,Jt=class extends F{constructor(){super(...arguments),this.localize=new ft(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit("sl-remove")}render(){return m`
      <span
        part="base"
        class=${R({tag:!0,"tag--primary":this.variant==="primary","tag--success":this.variant==="success","tag--neutral":this.variant==="neutral","tag--warning":this.variant==="warning","tag--danger":this.variant==="danger","tag--text":this.variant==="text","tag--small":this.size==="small","tag--medium":this.size==="medium","tag--large":this.size==="large","tag--pill":this.pill,"tag--removable":this.removable})}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable?m`
              <sl-icon-button
                part="remove-button"
                exportparts="base:remove-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("remove")}
                class="tag__remove"
                @click=${this.handleRemoveClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </span>
    `}};Jt.styles=[U,gn];Jt.dependencies={"sl-icon-button":W};l([d({reflect:!0})],Jt.prototype,"variant",2);l([d({reflect:!0})],Jt.prototype,"size",2);l([d({type:Boolean,reflect:!0})],Jt.prototype,"pill",2);l([d({type:Boolean})],Jt.prototype,"removable",2);var vn=E`
  :host {
    display: block;
  }

  /** The popup */
  .select {
    flex: 1 1 auto;
    display: inline-flex;
    width: 100%;
    position: relative;
    vertical-align: middle;
  }

  .select::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .select[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .select[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  /* Combobox */
  .select__combobox {
    flex: 1;
    display: flex;
    width: 100%;
    min-width: 0;
    position: relative;
    align-items: center;
    justify-content: start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: pointer;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  .select__display-input {
    position: relative;
    width: 100%;
    font: inherit;
    border: none;
    background: none;
    color: var(--sl-input-color);
    cursor: inherit;
    overflow: hidden;
    padding: 0;
    margin: 0;
    -webkit-appearance: none;
  }

  .select__display-input::placeholder {
    color: var(--sl-input-placeholder-color);
  }

  .select:not(.select--disabled):hover .select__display-input {
    color: var(--sl-input-color-hover);
  }

  .select__display-input:focus {
    outline: none;
  }

  /* Visually hide the display input when multiple is enabled */
  .select--multiple:not(.select--placeholder-visible) .select__display-input {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .select__value-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: -1;
  }

  .select__tags {
    display: flex;
    flex: 1;
    align-items: center;
    flex-wrap: wrap;
    margin-inline-start: var(--sl-spacing-2x-small);
  }

  .select__tags::slotted(sl-tag) {
    cursor: pointer !important;
  }

  .select--disabled .select__tags,
  .select--disabled .select__tags::slotted(sl-tag) {
    cursor: not-allowed !important;
  }

  /* Standard selects */
  .select--standard .select__combobox {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .select--standard.select--disabled .select__combobox {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    color: var(--sl-input-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
  }

  .select--standard:not(.select--disabled).select--open .select__combobox,
  .select--standard:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  /* Filled selects */
  .select--filled .select__combobox {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .select--filled:hover:not(.select--disabled) .select__combobox {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .select--filled.select--disabled .select__combobox {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .select--filled:not(.select--disabled).select--open .select__combobox,
  .select--filled:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
  }

  /* Sizes */
  .select--small .select__combobox {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    min-height: var(--sl-input-height-small);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-small);
  }

  .select--small .select__clear {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-block: 2px;
    padding-inline-start: 0;
  }

  .select--small .select__tags {
    gap: 2px;
  }

  .select--medium .select__combobox {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    min-height: var(--sl-input-height-medium);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-medium);
  }

  .select--medium .select__clear {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 3px;
  }

  .select--medium .select__tags {
    gap: 3px;
  }

  .select--large .select__combobox {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    min-height: var(--sl-input-height-large);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-large);
  }

  .select--large .select__clear {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 4px;
  }

  .select--large .select__tags {
    gap: 4px;
  }

  /* Pills */
  .select--pill.select--small .select__combobox {
    border-radius: var(--sl-input-height-small);
  }

  .select--pill.select--medium .select__combobox {
    border-radius: var(--sl-input-height-medium);
  }

  .select--pill.select--large .select__combobox {
    border-radius: var(--sl-input-height-large);
  }

  /* Prefix and Suffix */
  .select__prefix,
  .select__suffix {
    flex: 0;
    display: inline-flex;
    align-items: center;
    color: var(--sl-input-placeholder-color);
  }

  .select__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-small);
  }

  /* Clear button */
  .select__clear {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .select__clear:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .select__clear:focus {
    outline: none;
  }

  /* Expand icon */
  .select__expand-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
    rotate: 0;
    margin-inline-start: var(--sl-spacing-small);
  }

  .select--open .select__expand-icon {
    rotate: -180deg;
  }

  /* Listbox */
  .select__listbox {
    display: block;
    position: relative;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding-block: var(--sl-spacing-x-small);
    padding-inline: 0;
    overflow: auto;
    overscroll-behavior: none;

    /* Make sure it adheres to the popup's auto size */
    max-width: var(--auto-size-available-width);
    max-height: var(--auto-size-available-height);
  }

  .select__listbox ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }

  .select__listbox ::slotted(small) {
    display: block;
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-500);
    padding-block: var(--sl-spacing-2x-small);
    padding-inline: var(--sl-spacing-x-large);
  }
`,yn=E`
  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }

  /* Hover bridge */
  .popup-hover-bridge:not(.popup-hover-bridge--visible) {
    display: none;
  }

  .popup-hover-bridge {
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
      var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
      var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
      var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
    );
  }
`;const Rt=Math.min,Q=Math.max,eo=Math.round,Ne=Math.floor,wt=t=>({x:t,y:t}),wn={left:"right",right:"left",bottom:"top",top:"bottom"};function Po(t,e,o){return Q(t,Rt(e,o))}function ce(t,e){return typeof t=="function"?t(e):t}function It(t){return t.split("-")[0]}function de(t){return t.split("-")[1]}function Er(t){return t==="x"?"y":"x"}function ii(t){return t==="y"?"height":"width"}function Ct(t){const e=t[0];return e==="t"||e==="b"?"y":"x"}function ri(t){return Er(Ct(t))}function xn(t,e,o){o===void 0&&(o=!1);const i=de(t),r=ri(t),s=ii(r);let a=r==="x"?i===(o?"end":"start")?"right":"left":i==="start"?"bottom":"top";return e.reference[s]>e.floating[s]&&(a=oo(a)),[a,oo(a)]}function _n(t){const e=oo(t);return[Lo(t),e,Lo(e)]}function Lo(t){return t.includes("start")?t.replace("start","end"):t.replace("end","start")}const Ui=["left","right"],ji=["right","left"],kn=["top","bottom"],$n=["bottom","top"];function Cn(t,e,o){switch(t){case"top":case"bottom":return o?e?ji:Ui:e?Ui:ji;case"left":case"right":return e?kn:$n;default:return[]}}function En(t,e,o,i){const r=de(t);let s=Cn(It(t),o==="start",i);return r&&(s=s.map(a=>a+"-"+r),e&&(s=s.concat(s.map(Lo)))),s}function oo(t){const e=It(t);return wn[e]+t.slice(e.length)}function An(t){return{top:0,right:0,bottom:0,left:0,...t}}function Ar(t){return typeof t!="number"?An(t):{top:t,right:t,bottom:t,left:t}}function io(t){const{x:e,y:o,width:i,height:r}=t;return{width:i,height:r,top:o,left:e,right:e+i,bottom:o+r,x:e,y:o}}function Hi(t,e,o){let{reference:i,floating:r}=t;const s=Ct(e),a=ri(e),n=ii(a),c=It(e),p=s==="y",h=i.x+i.width/2-r.width/2,u=i.y+i.height/2-r.height/2,b=i[n]/2-r[n]/2;let f;switch(c){case"top":f={x:h,y:i.y-r.height};break;case"bottom":f={x:h,y:i.y+i.height};break;case"right":f={x:i.x+i.width,y:u};break;case"left":f={x:i.x-r.width,y:u};break;default:f={x:i.x,y:i.y}}switch(de(e)){case"start":f[a]-=b*(o&&p?-1:1);break;case"end":f[a]+=b*(o&&p?-1:1);break}return f}async function zn(t,e){var o;e===void 0&&(e={});const{x:i,y:r,platform:s,rects:a,elements:n,strategy:c}=t,{boundary:p="clippingAncestors",rootBoundary:h="viewport",elementContext:u="floating",altBoundary:b=!1,padding:f=0}=ce(e,t),g=Ar(f),w=n[b?u==="floating"?"reference":"floating":u],v=io(await s.getClippingRect({element:(o=await(s.isElement==null?void 0:s.isElement(w)))==null||o?w:w.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(n.floating)),boundary:p,rootBoundary:h,strategy:c})),z=u==="floating"?{x:i,y:r,width:a.floating.width,height:a.floating.height}:a.reference,$=await(s.getOffsetParent==null?void 0:s.getOffsetParent(n.floating)),k=await(s.isElement==null?void 0:s.isElement($))?await(s.getScale==null?void 0:s.getScale($))||{x:1,y:1}:{x:1,y:1},B=io(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:n,rect:z,offsetParent:$,strategy:c}):z);return{top:(v.top-B.top+g.top)/k.y,bottom:(B.bottom-v.bottom+g.bottom)/k.y,left:(v.left-B.left+g.left)/k.x,right:(B.right-v.right+g.right)/k.x}}const Sn=50,Tn=async(t,e,o)=>{const{placement:i="bottom",strategy:r="absolute",middleware:s=[],platform:a}=o,n=a.detectOverflow?a:{...a,detectOverflow:zn},c=await(a.isRTL==null?void 0:a.isRTL(e));let p=await a.getElementRects({reference:t,floating:e,strategy:r}),{x:h,y:u}=Hi(p,i,c),b=i,f=0;const g={};for(let y=0;y<s.length;y++){const w=s[y];if(!w)continue;const{name:v,fn:z}=w,{x:$,y:k,data:B,reset:P}=await z({x:h,y:u,initialPlacement:i,placement:b,strategy:r,middlewareData:g,rects:p,platform:n,elements:{reference:t,floating:e}});h=$??h,u=k??u,g[v]={...g[v],...B},P&&f<Sn&&(f++,typeof P=="object"&&(P.placement&&(b=P.placement),P.rects&&(p=P.rects===!0?await a.getElementRects({reference:t,floating:e,strategy:r}):P.rects),{x:h,y:u}=Hi(p,b,c)),y=-1)}return{x:h,y:u,placement:b,strategy:r,middlewareData:g}},On=t=>({name:"arrow",options:t,async fn(e){const{x:o,y:i,placement:r,rects:s,platform:a,elements:n,middlewareData:c}=e,{element:p,padding:h=0}=ce(t,e)||{};if(p==null)return{};const u=Ar(h),b={x:o,y:i},f=ri(r),g=ii(f),y=await a.getDimensions(p),w=f==="y",v=w?"top":"left",z=w?"bottom":"right",$=w?"clientHeight":"clientWidth",k=s.reference[g]+s.reference[f]-b[f]-s.floating[g],B=b[f]-s.reference[f],P=await(a.getOffsetParent==null?void 0:a.getOffsetParent(p));let V=P?P[$]:0;(!V||!await(a.isElement==null?void 0:a.isElement(P)))&&(V=n.floating[$]||s.floating[g]);const K=k/2-B/2,M=V/2-y[g]/2-1,O=Rt(u[v],M),j=Rt(u[z],M),J=O,gt=V-y[g]-j,X=V/2-y[g]/2+K,Mt=Po(J,X,gt),$t=!c.arrow&&de(r)!=null&&X!==Mt&&s.reference[g]/2-(X<J?O:j)-y[g]/2<0,ct=$t?X<J?X-J:X-gt:0;return{[f]:b[f]+ct,data:{[f]:Mt,centerOffset:X-Mt-ct,...$t&&{alignmentOffset:ct}},reset:$t}}}),Dn=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var o,i;const{placement:r,middlewareData:s,rects:a,initialPlacement:n,platform:c,elements:p}=e,{mainAxis:h=!0,crossAxis:u=!0,fallbackPlacements:b,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:y=!0,...w}=ce(t,e);if((o=s.arrow)!=null&&o.alignmentOffset)return{};const v=It(r),z=Ct(n),$=It(n)===n,k=await(c.isRTL==null?void 0:c.isRTL(p.floating)),B=b||($||!y?[oo(n)]:_n(n)),P=g!=="none";!b&&P&&B.push(...En(n,y,g,k));const V=[n,...B],K=await c.detectOverflow(e,w),M=[];let O=((i=s.flip)==null?void 0:i.overflows)||[];if(h&&M.push(K[v]),u){const X=xn(r,a,k);M.push(K[X[0]],K[X[1]])}if(O=[...O,{placement:r,overflows:M}],!M.every(X=>X<=0)){var j,J;const X=(((j=s.flip)==null?void 0:j.index)||0)+1,Mt=V[X];if(Mt&&(!(u==="alignment"?z!==Ct(Mt):!1)||O.every(dt=>Ct(dt.placement)===z?dt.overflows[0]>0:!0)))return{data:{index:X,overflows:O},reset:{placement:Mt}};let $t=(J=O.filter(ct=>ct.overflows[0]<=0).sort((ct,dt)=>ct.overflows[1]-dt.overflows[1])[0])==null?void 0:J.placement;if(!$t)switch(f){case"bestFit":{var gt;const ct=(gt=O.filter(dt=>{if(P){const zt=Ct(dt.placement);return zt===z||zt==="y"}return!0}).map(dt=>[dt.placement,dt.overflows.filter(zt=>zt>0).reduce((zt,Ir)=>zt+Ir,0)]).sort((dt,zt)=>dt[1]-zt[1])[0])==null?void 0:gt[0];ct&&($t=ct);break}case"initialPlacement":$t=n;break}if(r!==$t)return{reset:{placement:$t}}}return{}}}},Pn=new Set(["left","top"]);async function Ln(t,e){const{placement:o,platform:i,elements:r}=t,s=await(i.isRTL==null?void 0:i.isRTL(r.floating)),a=It(o),n=de(o),c=Ct(o)==="y",p=Pn.has(a)?-1:1,h=s&&c?-1:1,u=ce(e,t);let{mainAxis:b,crossAxis:f,alignmentAxis:g}=typeof u=="number"?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:u.mainAxis||0,crossAxis:u.crossAxis||0,alignmentAxis:u.alignmentAxis};return n&&typeof g=="number"&&(f=n==="end"?g*-1:g),c?{x:f*h,y:b*p}:{x:b*p,y:f*h}}const Rn=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var o,i;const{x:r,y:s,placement:a,middlewareData:n}=e,c=await Ln(e,t);return a===((o=n.offset)==null?void 0:o.placement)&&(i=n.arrow)!=null&&i.alignmentOffset?{}:{x:r+c.x,y:s+c.y,data:{...c,placement:a}}}}},In=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:o,y:i,placement:r,platform:s}=e,{mainAxis:a=!0,crossAxis:n=!1,limiter:c={fn:v=>{let{x:z,y:$}=v;return{x:z,y:$}}},...p}=ce(t,e),h={x:o,y:i},u=await s.detectOverflow(e,p),b=Ct(It(r)),f=Er(b);let g=h[f],y=h[b];if(a){const v=f==="y"?"top":"left",z=f==="y"?"bottom":"right",$=g+u[v],k=g-u[z];g=Po($,g,k)}if(n){const v=b==="y"?"top":"left",z=b==="y"?"bottom":"right",$=y+u[v],k=y-u[z];y=Po($,y,k)}const w=c.fn({...e,[f]:g,[b]:y});return{...w,data:{x:w.x-o,y:w.y-i,enabled:{[f]:a,[b]:n}}}}}},Fn=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){var o,i;const{placement:r,rects:s,platform:a,elements:n}=e,{apply:c=()=>{},...p}=ce(t,e),h=await a.detectOverflow(e,p),u=It(r),b=de(r),f=Ct(r)==="y",{width:g,height:y}=s.floating;let w,v;u==="top"||u==="bottom"?(w=u,v=b===(await(a.isRTL==null?void 0:a.isRTL(n.floating))?"start":"end")?"left":"right"):(v=u,w=b==="end"?"top":"bottom");const z=y-h.top-h.bottom,$=g-h.left-h.right,k=Rt(y-h[w],z),B=Rt(g-h[v],$),P=!e.middlewareData.shift;let V=k,K=B;if((o=e.middlewareData.shift)!=null&&o.enabled.x&&(K=$),(i=e.middlewareData.shift)!=null&&i.enabled.y&&(V=z),P&&!b){const O=Q(h.left,0),j=Q(h.right,0),J=Q(h.top,0),gt=Q(h.bottom,0);f?K=g-2*(O!==0||j!==0?O+j:Q(h.left,h.right)):V=y-2*(J!==0||gt!==0?J+gt:Q(h.top,h.bottom))}await c({...e,availableWidth:K,availableHeight:V});const M=await a.getDimensions(n.floating);return g!==M.width||y!==M.height?{reset:{rects:!0}}:{}}}};function ho(){return typeof window<"u"}function ue(t){return zr(t)?(t.nodeName||"").toLowerCase():"#document"}function tt(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function kt(t){var e;return(e=(zr(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function zr(t){return ho()?t instanceof Node||t instanceof tt(t).Node:!1}function ht(t){return ho()?t instanceof Element||t instanceof tt(t).Element:!1}function At(t){return ho()?t instanceof HTMLElement||t instanceof tt(t).HTMLElement:!1}function Wi(t){return!ho()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof tt(t).ShadowRoot}function Ie(t){const{overflow:e,overflowX:o,overflowY:i,display:r}=pt(t);return/auto|scroll|overlay|hidden|clip/.test(e+i+o)&&r!=="inline"&&r!=="contents"}function Bn(t){return/^(table|td|th)$/.test(ue(t))}function po(t){try{if(t.matches(":popover-open"))return!0}catch{}try{return t.matches(":modal")}catch{return!1}}const Mn=/transform|translate|scale|rotate|perspective|filter/,Vn=/paint|layout|strict|content/,Nt=t=>!!t&&t!=="none";let _o;function fo(t){const e=ht(t)?pt(t):t;return Nt(e.transform)||Nt(e.translate)||Nt(e.scale)||Nt(e.rotate)||Nt(e.perspective)||!si()&&(Nt(e.backdropFilter)||Nt(e.filter))||Mn.test(e.willChange||"")||Vn.test(e.contain||"")}function Nn(t){let e=Ft(t);for(;At(e)&&!ae(e);){if(fo(e))return e;if(po(e))return null;e=Ft(e)}return null}function si(){return _o==null&&(_o=typeof CSS<"u"&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),_o}function ae(t){return/^(html|body|#document)$/.test(ue(t))}function pt(t){return tt(t).getComputedStyle(t)}function mo(t){return ht(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function Ft(t){if(ue(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Wi(t)&&t.host||kt(t);return Wi(e)?e.host:e}function Sr(t){const e=Ft(t);return ae(e)?t.ownerDocument?t.ownerDocument.body:t.body:At(e)&&Ie(e)?e:Sr(e)}function Se(t,e,o){var i;e===void 0&&(e=[]),o===void 0&&(o=!0);const r=Sr(t),s=r===((i=t.ownerDocument)==null?void 0:i.body),a=tt(r);if(s){const n=Ro(a);return e.concat(a,a.visualViewport||[],Ie(r)?r:[],n&&o?Se(n):[])}else return e.concat(r,Se(r,[],o))}function Ro(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function Tr(t){const e=pt(t);let o=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const r=At(t),s=r?t.offsetWidth:o,a=r?t.offsetHeight:i,n=eo(o)!==s||eo(i)!==a;return n&&(o=s,i=a),{width:o,height:i,$:n}}function ai(t){return ht(t)?t:t.contextElement}function ee(t){const e=ai(t);if(!At(e))return wt(1);const o=e.getBoundingClientRect(),{width:i,height:r,$:s}=Tr(e);let a=(s?eo(o.width):o.width)/i,n=(s?eo(o.height):o.height)/r;return(!a||!Number.isFinite(a))&&(a=1),(!n||!Number.isFinite(n))&&(n=1),{x:a,y:n}}const Un=wt(0);function Or(t){const e=tt(t);return!si()||!e.visualViewport?Un:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function jn(t,e,o){return e===void 0&&(e=!1),!o||e&&o!==tt(t)?!1:e}function Gt(t,e,o,i){e===void 0&&(e=!1),o===void 0&&(o=!1);const r=t.getBoundingClientRect(),s=ai(t);let a=wt(1);e&&(i?ht(i)&&(a=ee(i)):a=ee(t));const n=jn(s,o,i)?Or(s):wt(0);let c=(r.left+n.x)/a.x,p=(r.top+n.y)/a.y,h=r.width/a.x,u=r.height/a.y;if(s){const b=tt(s),f=i&&ht(i)?tt(i):i;let g=b,y=Ro(g);for(;y&&i&&f!==g;){const w=ee(y),v=y.getBoundingClientRect(),z=pt(y),$=v.left+(y.clientLeft+parseFloat(z.paddingLeft))*w.x,k=v.top+(y.clientTop+parseFloat(z.paddingTop))*w.y;c*=w.x,p*=w.y,h*=w.x,u*=w.y,c+=$,p+=k,g=tt(y),y=Ro(g)}}return io({width:h,height:u,x:c,y:p})}function bo(t,e){const o=mo(t).scrollLeft;return e?e.left+o:Gt(kt(t)).left+o}function Dr(t,e){const o=t.getBoundingClientRect(),i=o.left+e.scrollLeft-bo(t,o),r=o.top+e.scrollTop;return{x:i,y:r}}function Hn(t){let{elements:e,rect:o,offsetParent:i,strategy:r}=t;const s=r==="fixed",a=kt(i),n=e?po(e.floating):!1;if(i===a||n&&s)return o;let c={scrollLeft:0,scrollTop:0},p=wt(1);const h=wt(0),u=At(i);if((u||!u&&!s)&&((ue(i)!=="body"||Ie(a))&&(c=mo(i)),u)){const f=Gt(i);p=ee(i),h.x=f.x+i.clientLeft,h.y=f.y+i.clientTop}const b=a&&!u&&!s?Dr(a,c):wt(0);return{width:o.width*p.x,height:o.height*p.y,x:o.x*p.x-c.scrollLeft*p.x+h.x+b.x,y:o.y*p.y-c.scrollTop*p.y+h.y+b.y}}function Wn(t){return Array.from(t.getClientRects())}function qn(t){const e=kt(t),o=mo(t),i=t.ownerDocument.body,r=Q(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),s=Q(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let a=-o.scrollLeft+bo(t);const n=-o.scrollTop;return pt(i).direction==="rtl"&&(a+=Q(e.clientWidth,i.clientWidth)-r),{width:r,height:s,x:a,y:n}}const qi=25;function Gn(t,e){const o=tt(t),i=kt(t),r=o.visualViewport;let s=i.clientWidth,a=i.clientHeight,n=0,c=0;if(r){s=r.width,a=r.height;const h=si();(!h||h&&e==="fixed")&&(n=r.offsetLeft,c=r.offsetTop)}const p=bo(i);if(p<=0){const h=i.ownerDocument,u=h.body,b=getComputedStyle(u),f=h.compatMode==="CSS1Compat"&&parseFloat(b.marginLeft)+parseFloat(b.marginRight)||0,g=Math.abs(i.clientWidth-u.clientWidth-f);g<=qi&&(s-=g)}else p<=qi&&(s+=p);return{width:s,height:a,x:n,y:c}}function Kn(t,e){const o=Gt(t,!0,e==="fixed"),i=o.top+t.clientTop,r=o.left+t.clientLeft,s=At(t)?ee(t):wt(1),a=t.clientWidth*s.x,n=t.clientHeight*s.y,c=r*s.x,p=i*s.y;return{width:a,height:n,x:c,y:p}}function Gi(t,e,o){let i;if(e==="viewport")i=Gn(t,o);else if(e==="document")i=qn(kt(t));else if(ht(e))i=Kn(e,o);else{const r=Or(t);i={x:e.x-r.x,y:e.y-r.y,width:e.width,height:e.height}}return io(i)}function Pr(t,e){const o=Ft(t);return o===e||!ht(o)||ae(o)?!1:pt(o).position==="fixed"||Pr(o,e)}function Yn(t,e){const o=e.get(t);if(o)return o;let i=Se(t,[],!1).filter(n=>ht(n)&&ue(n)!=="body"),r=null;const s=pt(t).position==="fixed";let a=s?Ft(t):t;for(;ht(a)&&!ae(a);){const n=pt(a),c=fo(a);!c&&n.position==="fixed"&&(r=null),(s?!c&&!r:!c&&n.position==="static"&&!!r&&(r.position==="absolute"||r.position==="fixed")||Ie(a)&&!c&&Pr(t,a))?i=i.filter(h=>h!==a):r=n,a=Ft(a)}return e.set(t,i),i}function Xn(t){let{element:e,boundary:o,rootBoundary:i,strategy:r}=t;const a=[...o==="clippingAncestors"?po(e)?[]:Yn(e,this._c):[].concat(o),i],n=Gi(e,a[0],r);let c=n.top,p=n.right,h=n.bottom,u=n.left;for(let b=1;b<a.length;b++){const f=Gi(e,a[b],r);c=Q(f.top,c),p=Rt(f.right,p),h=Rt(f.bottom,h),u=Q(f.left,u)}return{width:p-u,height:h-c,x:u,y:c}}function Zn(t){const{width:e,height:o}=Tr(t);return{width:e,height:o}}function Jn(t,e,o){const i=At(e),r=kt(e),s=o==="fixed",a=Gt(t,!0,s,e);let n={scrollLeft:0,scrollTop:0};const c=wt(0);function p(){c.x=bo(r)}if(i||!i&&!s)if((ue(e)!=="body"||Ie(r))&&(n=mo(e)),i){const f=Gt(e,!0,s,e);c.x=f.x+e.clientLeft,c.y=f.y+e.clientTop}else r&&p();s&&!i&&r&&p();const h=r&&!i&&!s?Dr(r,n):wt(0),u=a.left+n.scrollLeft-c.x-h.x,b=a.top+n.scrollTop-c.y-h.y;return{x:u,y:b,width:a.width,height:a.height}}function ko(t){return pt(t).position==="static"}function Ki(t,e){if(!At(t)||pt(t).position==="fixed")return null;if(e)return e(t);let o=t.offsetParent;return kt(t)===o&&(o=o.ownerDocument.body),o}function Lr(t,e){const o=tt(t);if(po(t))return o;if(!At(t)){let r=Ft(t);for(;r&&!ae(r);){if(ht(r)&&!ko(r))return r;r=Ft(r)}return o}let i=Ki(t,e);for(;i&&Bn(i)&&ko(i);)i=Ki(i,e);return i&&ae(i)&&ko(i)&&!fo(i)?o:i||Nn(t)||o}const Qn=async function(t){const e=this.getOffsetParent||Lr,o=this.getDimensions,i=await o(t.floating);return{reference:Jn(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function tl(t){return pt(t).direction==="rtl"}const Ke={convertOffsetParentRelativeRectToViewportRelativeRect:Hn,getDocumentElement:kt,getClippingRect:Xn,getOffsetParent:Lr,getElementRects:Qn,getClientRects:Wn,getDimensions:Zn,getScale:ee,isElement:ht,isRTL:tl};function Rr(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function el(t,e){let o=null,i;const r=kt(t);function s(){var n;clearTimeout(i),(n=o)==null||n.disconnect(),o=null}function a(n,c){n===void 0&&(n=!1),c===void 0&&(c=1),s();const p=t.getBoundingClientRect(),{left:h,top:u,width:b,height:f}=p;if(n||e(),!b||!f)return;const g=Ne(u),y=Ne(r.clientWidth-(h+b)),w=Ne(r.clientHeight-(u+f)),v=Ne(h),$={rootMargin:-g+"px "+-y+"px "+-w+"px "+-v+"px",threshold:Q(0,Rt(1,c))||1};let k=!0;function B(P){const V=P[0].intersectionRatio;if(V!==c){if(!k)return a();V?a(!1,V):i=setTimeout(()=>{a(!1,1e-7)},1e3)}V===1&&!Rr(p,t.getBoundingClientRect())&&a(),k=!1}try{o=new IntersectionObserver(B,{...$,root:r.ownerDocument})}catch{o=new IntersectionObserver(B,$)}o.observe(t)}return a(!0),s}function ol(t,e,o,i){i===void 0&&(i={});const{ancestorScroll:r=!0,ancestorResize:s=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:n=typeof IntersectionObserver=="function",animationFrame:c=!1}=i,p=ai(t),h=r||s?[...p?Se(p):[],...e?Se(e):[]]:[];h.forEach(v=>{r&&v.addEventListener("scroll",o,{passive:!0}),s&&v.addEventListener("resize",o)});const u=p&&n?el(p,o):null;let b=-1,f=null;a&&(f=new ResizeObserver(v=>{let[z]=v;z&&z.target===p&&f&&e&&(f.unobserve(e),cancelAnimationFrame(b),b=requestAnimationFrame(()=>{var $;($=f)==null||$.observe(e)})),o()}),p&&!c&&f.observe(p),e&&f.observe(e));let g,y=c?Gt(t):null;c&&w();function w(){const v=Gt(t);y&&!Rr(y,v)&&o(),y=v,g=requestAnimationFrame(w)}return o(),()=>{var v;h.forEach(z=>{r&&z.removeEventListener("scroll",o),s&&z.removeEventListener("resize",o)}),u?.(),(v=f)==null||v.disconnect(),f=null,c&&cancelAnimationFrame(g)}}const il=Rn,rl=In,sl=Dn,Yi=Fn,al=On,nl=(t,e,o)=>{const i=new Map,r={platform:Ke,...o},s={...r.platform,_c:i};return Tn(t,e,{...r,platform:s})};function ll(t){return cl(t)}function $o(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}function cl(t){for(let e=t;e;e=$o(e))if(e instanceof Element&&getComputedStyle(e).display==="none")return null;for(let e=$o(t);e;e=$o(e)){if(!(e instanceof Element))continue;const o=getComputedStyle(e);if(o.display!=="contents"&&(o.position!=="static"||fo(o)||e.tagName==="BODY"))return e}return null}function dl(t){return t!==null&&typeof t=="object"&&"getBoundingClientRect"in t&&("contextElement"in t?t.contextElement instanceof Element:!0)}var I=class extends F{constructor(){super(...arguments),this.localize=new ft(this),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const t=this.anchorEl.getBoundingClientRect(),e=this.popup.getBoundingClientRect(),o=this.placement.includes("top")||this.placement.includes("bottom");let i=0,r=0,s=0,a=0,n=0,c=0,p=0,h=0;o?t.top<e.top?(i=t.left,r=t.bottom,s=t.right,a=t.bottom,n=e.left,c=e.top,p=e.right,h=e.top):(i=e.left,r=e.bottom,s=e.right,a=e.bottom,n=t.left,c=t.top,p=t.right,h=t.top):t.left<e.left?(i=t.right,r=t.top,s=e.left,a=e.top,n=t.right,c=t.bottom,p=e.left,h=e.bottom):(i=e.right,r=e.top,s=t.left,a=t.top,n=e.right,c=e.bottom,p=t.left,h=t.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${i}px`),this.style.setProperty("--hover-bridge-top-left-y",`${r}px`),this.style.setProperty("--hover-bridge-top-right-x",`${s}px`),this.style.setProperty("--hover-bridge-top-right-y",`${a}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${n}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${c}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${p}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${h}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(t){super.updated(t),t.has("active")&&(this.active?this.start():this.stop()),t.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const t=this.getRootNode();this.anchorEl=t.getElementById(this.anchor)}else this.anchor instanceof Element||dl(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){!this.anchorEl||!this.active||(this.cleanup=ol(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(t=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>t())):t()})}reposition(){if(!this.active||!this.anchorEl)return;const t=[il({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?t.push(Yi({apply:({rects:o})=>{const i=this.sync==="width"||this.sync==="both",r=this.sync==="height"||this.sync==="both";this.popup.style.width=i?`${o.reference.width}px`:"",this.popup.style.height=r?`${o.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&t.push(sl({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&t.push(rl({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?t.push(Yi({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:o,availableHeight:i})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${i}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${o}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&t.push(al({element:this.arrowEl,padding:this.arrowPadding}));const e=this.strategy==="absolute"?o=>Ke.getOffsetParent(o,ll):Ke.getOffsetParent;nl(this.anchorEl,this.popup,{placement:this.placement,middleware:t,strategy:this.strategy,platform:ao(Bt({},Ke),{getOffsetParent:e})}).then(({x:o,y:i,middlewareData:r,placement:s})=>{const a=this.localize.dir()==="rtl",n={top:"bottom",right:"left",bottom:"top",left:"right"}[s.split("-")[0]];if(this.setAttribute("data-current-placement",s),Object.assign(this.popup.style,{left:`${o}px`,top:`${i}px`}),this.arrow){const c=r.arrow.x,p=r.arrow.y;let h="",u="",b="",f="";if(this.arrowPlacement==="start"){const g=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";h=typeof p=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",u=a?g:"",f=a?"":g}else if(this.arrowPlacement==="end"){const g=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";u=a?"":g,f=a?g:"",b=typeof p=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(f=typeof c=="number"?"calc(50% - var(--arrow-size-diagonal))":"",h=typeof p=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(f=typeof c=="number"?`${c}px`:"",h=typeof p=="number"?`${p}px`:"");Object.assign(this.arrowEl.style,{top:h,right:u,bottom:b,left:f,[n]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return m`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${R({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${R({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?m`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};I.styles=[U,yn];l([A(".popup")],I.prototype,"popup",2);l([A(".popup__arrow")],I.prototype,"arrowEl",2);l([d()],I.prototype,"anchor",2);l([d({type:Boolean,reflect:!0})],I.prototype,"active",2);l([d({reflect:!0})],I.prototype,"placement",2);l([d({reflect:!0})],I.prototype,"strategy",2);l([d({type:Number})],I.prototype,"distance",2);l([d({type:Number})],I.prototype,"skidding",2);l([d({type:Boolean})],I.prototype,"arrow",2);l([d({attribute:"arrow-placement"})],I.prototype,"arrowPlacement",2);l([d({attribute:"arrow-padding",type:Number})],I.prototype,"arrowPadding",2);l([d({type:Boolean})],I.prototype,"flip",2);l([d({attribute:"flip-fallback-placements",converter:{fromAttribute:t=>t.split(" ").map(e=>e.trim()).filter(e=>e!==""),toAttribute:t=>t.join(" ")}})],I.prototype,"flipFallbackPlacements",2);l([d({attribute:"flip-fallback-strategy"})],I.prototype,"flipFallbackStrategy",2);l([d({type:Object})],I.prototype,"flipBoundary",2);l([d({attribute:"flip-padding",type:Number})],I.prototype,"flipPadding",2);l([d({type:Boolean})],I.prototype,"shift",2);l([d({type:Object})],I.prototype,"shiftBoundary",2);l([d({attribute:"shift-padding",type:Number})],I.prototype,"shiftPadding",2);l([d({attribute:"auto-size"})],I.prototype,"autoSize",2);l([d()],I.prototype,"sync",2);l([d({type:Object})],I.prototype,"autoSizeBoundary",2);l([d({attribute:"auto-size-padding",type:Number})],I.prototype,"autoSizePadding",2);l([d({attribute:"hover-bridge",type:Boolean})],I.prototype,"hoverBridge",2);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Io extends Go{constructor(e){if(super(e),this.it=N,e.type!==St.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===N||e==null)return this._t=void 0,this.it=e;if(e===nt)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const o=[e];return o.raw=o,this._t={_$litType$:this.constructor.resultType,strings:o,values:[]}}}Io.directiveName="unsafeHTML",Io.resultType=1;const ul=qo(Io);var S=class extends F{constructor(){super(...arguments),this.formControlController=new De(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new Xt(this,"help-text","label"),this.localize=new ft(this),this.typeToSelectString="",this.hasFocus=!1,this.displayLabel="",this.selectedOptions=[],this.valueHasChanged=!1,this.name="",this._value="",this.defaultValue="",this.size="medium",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.clearable=!1,this.open=!1,this.hoist=!1,this.filled=!1,this.pill=!1,this.label="",this.placement="bottom",this.helpText="",this.form="",this.required=!1,this.getTag=t=>m`
      <sl-tag
        part="tag"
        exportparts="
              base:tag__base,
              content:tag__content,
              remove-button:tag__remove-button,
              remove-button__base:tag__remove-button__base
            "
        ?pill=${this.pill}
        size=${this.size}
        removable
        @sl-remove=${e=>this.handleTagRemove(e,t)}
      >
        ${t.getTextLabel()}
      </sl-tag>
    `,this.handleDocumentFocusIn=t=>{const e=t.composedPath();this&&!e.includes(this)&&this.hide()},this.handleDocumentKeyDown=t=>{const e=t.target,o=e.closest(".select__clear")!==null,i=e.closest("sl-icon-button")!==null;if(!(o||i)){if(t.key==="Escape"&&this.open&&!this.closeWatcher&&(t.preventDefault(),t.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),t.key==="Enter"||t.key===" "&&this.typeToSelectString===""){if(t.preventDefault(),t.stopImmediatePropagation(),!this.open){this.show();return}this.currentOption&&!this.currentOption.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})));return}if(["ArrowUp","ArrowDown","Home","End"].includes(t.key)){const r=this.getAllOptions(),s=r.indexOf(this.currentOption);let a=Math.max(0,s);if(t.preventDefault(),!this.open&&(this.show(),this.currentOption))return;t.key==="ArrowDown"?(a=s+1,a>r.length-1&&(a=0)):t.key==="ArrowUp"?(a=s-1,a<0&&(a=r.length-1)):t.key==="Home"?a=0:t.key==="End"&&(a=r.length-1),this.setCurrentOption(r[a])}if(t.key&&t.key.length===1||t.key==="Backspace"){const r=this.getAllOptions();if(t.metaKey||t.ctrlKey||t.altKey)return;if(!this.open){if(t.key==="Backspace")return;this.show()}t.stopPropagation(),t.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),t.key==="Backspace"?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=t.key.toLowerCase();for(const s of r)if(s.getTextLabel().toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(s);break}}}},this.handleDocumentMouseDown=t=>{const e=t.composedPath();this&&!e.includes(this)&&this.hide()}}get value(){return this._value}set value(t){this.multiple?t=Array.isArray(t)?t:t.split(" "):t=Array.isArray(t)?t.join(" "):t,this._value!==t&&(this.valueHasChanged=!0,this._value=t)}get validity(){return this.valueInput.validity}get validationMessage(){return this.valueInput.validationMessage}connectedCallback(){super.connectedCallback(),setTimeout(()=>{this.handleDefaultSlotChange()}),this.open=!1}addOpenListeners(){var t;document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().addEventListener("focusin",this.handleDocumentFocusIn),"CloseWatcher"in window&&((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.open&&(this.hide(),this.displayInput.focus({preventScroll:!0}))})}removeOpenListeners(){var t;document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().removeEventListener("focusin",this.handleDocumentFocusIn),(t=this.closeWatcher)==null||t.destroy()}handleFocus(){this.hasFocus=!0,this.displayInput.setSelectionRange(0,0),this.emit("sl-focus")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleLabelClick(){this.displayInput.focus()}handleComboboxMouseDown(t){const o=t.composedPath().some(i=>i instanceof Element&&i.tagName.toLowerCase()==="sl-icon-button");this.disabled||o||(t.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(t){t.key!=="Tab"&&(t.stopPropagation(),this.handleDocumentKeyDown(t))}handleClearClick(t){t.stopPropagation(),this.valueHasChanged=!0,this.value!==""&&(this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")}))}handleClearMouseDown(t){t.stopPropagation(),t.preventDefault()}handleOptionClick(t){const o=t.target.closest("sl-option"),i=this.value;o&&!o.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(o):this.setSelectedOptions(o),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.value!==i&&this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){customElements.get("sl-option")||customElements.whenDefined("sl-option").then(()=>this.handleDefaultSlotChange());const t=this.getAllOptions(),e=this.valueHasChanged?this.value:this.defaultValue,o=Array.isArray(e)?e:[e],i=[];t.forEach(r=>i.push(r.value)),this.setSelectedOptions(t.filter(r=>o.includes(r.value)))}handleTagRemove(t,e){t.stopPropagation(),this.valueHasChanged=!0,this.disabled||(this.toggleOptionSelection(e,!1),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}))}getAllOptions(){return[...this.querySelectorAll("sl-option")]}getFirstOption(){return this.querySelector("sl-option")}setCurrentOption(t){this.getAllOptions().forEach(o=>{o.current=!1,o.tabIndex=-1}),t&&(this.currentOption=t,t.current=!0,t.tabIndex=0,t.focus())}setSelectedOptions(t){const e=this.getAllOptions(),o=Array.isArray(t)?t:[t];e.forEach(i=>i.selected=!1),o.length&&o.forEach(i=>i.selected=!0),this.selectionChanged()}toggleOptionSelection(t,e){e===!0||e===!1?t.selected=e:t.selected=!t.selected,this.selectionChanged()}selectionChanged(){var t,e,o;const i=this.getAllOptions();this.selectedOptions=i.filter(s=>s.selected);const r=this.valueHasChanged;if(this.multiple)this.value=this.selectedOptions.map(s=>s.value),this.placeholder&&this.value.length===0?this.displayLabel="":this.displayLabel=this.localize.term("numOptionsSelected",this.selectedOptions.length);else{const s=this.selectedOptions[0];this.value=(t=s?.value)!=null?t:"",this.displayLabel=(o=(e=s?.getTextLabel)==null?void 0:e.call(s))!=null?o:""}this.valueHasChanged=r,this.updateComplete.then(()=>{this.formControlController.updateValidity()})}get tags(){return this.selectedOptions.map((t,e)=>{if(e<this.maxOptionsVisible||this.maxOptionsVisible<=0){const o=this.getTag(t,e);return m`<div @sl-remove=${i=>this.handleTagRemove(i,t)}>
          ${typeof o=="string"?ul(o):o}
        </div>`}else if(e===this.maxOptionsVisible)return m`<sl-tag size=${this.size}>+${this.selectedOptions.length-e}</sl-tag>`;return m``})}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleDisabledChange(){this.disabled&&(this.open=!1,this.handleOpenChange())}attributeChangedCallback(t,e,o){if(super.attributeChangedCallback(t,e,o),t==="value"){const i=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=i}}handleValueChange(){if(!this.valueHasChanged){const o=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=o}const t=this.getAllOptions(),e=Array.isArray(this.value)?this.value:[this.value];this.setSelectedOptions(t.filter(o=>e.includes(o.value)))}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption()),this.emit("sl-show"),this.addOpenListeners(),await yt(this),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)});const{keyframes:t,options:e}=st(this,"select.show",{dir:this.localize.dir()});await at(this.popup.popup,t,e),this.currentOption&&So(this.currentOption,this.listbox,"vertical","auto"),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await yt(this);const{keyframes:t,options:e}=st(this,"select.hide",{dir:this.localize.dir()});await at(this.popup.popup,t,e),this.listbox.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,re(this,"sl-after-show")}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,re(this,"sl-after-hide")}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(t){this.valueInput.setCustomValidity(t),this.formControlController.updateValidity()}focus(t){this.displayInput.focus(t)}blur(){this.displayInput.blur()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),o=this.label?!0:!!t,i=this.helpText?!0:!!e,r=this.clearable&&!this.disabled&&this.value.length>0,s=this.placeholder&&this.value&&this.value.length<=0;return m`
      <div
        part="form-control"
        class=${R({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":o,"form-control--has-help-text":i})}
      >
        <label
          id="label"
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${o?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <sl-popup
            class=${R({select:!0,"select--standard":!0,"select--filled":this.filled,"select--pill":this.pill,"select--open":this.open,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--focused":this.hasFocus,"select--placeholder-visible":s,"select--top":this.placement==="top","select--bottom":this.placement==="bottom","select--small":this.size==="small","select--medium":this.size==="medium","select--large":this.size==="large"})}
            placement=${this.placement}
            strategy=${this.hoist?"fixed":"absolute"}
            flip
            shift
            sync="width"
            auto-size="vertical"
            auto-size-padding="10"
          >
            <div
              part="combobox"
              class="select__combobox"
              slot="anchor"
              @keydown=${this.handleComboboxKeyDown}
              @mousedown=${this.handleComboboxMouseDown}
            >
              <slot part="prefix" name="prefix" class="select__prefix"></slot>

              <input
                part="display-input"
                class="select__display-input"
                type="text"
                placeholder=${this.placeholder}
                .disabled=${this.disabled}
                .value=${this.displayLabel}
                autocomplete="off"
                spellcheck="false"
                autocapitalize="off"
                readonly
                aria-controls="listbox"
                aria-expanded=${this.open?"true":"false"}
                aria-haspopup="listbox"
                aria-labelledby="label"
                aria-disabled=${this.disabled?"true":"false"}
                aria-describedby="help-text"
                role="combobox"
                tabindex="0"
                @focus=${this.handleFocus}
                @blur=${this.handleBlur}
              />

              ${this.multiple?m`<div part="tags" class="select__tags">${this.tags}</div>`:""}

              <input
                class="select__value-input"
                type="text"
                ?disabled=${this.disabled}
                ?required=${this.required}
                .value=${Array.isArray(this.value)?this.value.join(", "):this.value}
                tabindex="-1"
                aria-hidden="true"
                @focus=${()=>this.focus()}
                @invalid=${this.handleInvalid}
              />

              ${r?m`
                    <button
                      part="clear-button"
                      class="select__clear"
                      type="button"
                      aria-label=${this.localize.term("clearEntry")}
                      @mousedown=${this.handleClearMouseDown}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <sl-icon name="x-circle-fill" library="system"></sl-icon>
                      </slot>
                    </button>
                  `:""}

              <slot name="suffix" part="suffix" class="select__suffix"></slot>

              <slot name="expand-icon" part="expand-icon" class="select__expand-icon">
                <sl-icon library="system" name="chevron-down"></sl-icon>
              </slot>
            </div>

            <div
              id="listbox"
              role="listbox"
              aria-expanded=${this.open?"true":"false"}
              aria-multiselectable=${this.multiple?"true":"false"}
              aria-labelledby="label"
              part="listbox"
              class="select__listbox"
              tabindex="-1"
              @mouseup=${this.handleOptionClick}
              @slotchange=${this.handleDefaultSlotChange}
            >
              <slot></slot>
            </div>
          </sl-popup>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};S.styles=[U,lo,vn];S.dependencies={"sl-icon":Z,"sl-popup":I,"sl-tag":Jt};l([A(".select")],S.prototype,"popup",2);l([A(".select__combobox")],S.prototype,"combobox",2);l([A(".select__display-input")],S.prototype,"displayInput",2);l([A(".select__value-input")],S.prototype,"valueInput",2);l([A(".select__listbox")],S.prototype,"listbox",2);l([x()],S.prototype,"hasFocus",2);l([x()],S.prototype,"displayLabel",2);l([x()],S.prototype,"currentOption",2);l([x()],S.prototype,"selectedOptions",2);l([x()],S.prototype,"valueHasChanged",2);l([d()],S.prototype,"name",2);l([x()],S.prototype,"value",1);l([d({attribute:"value"})],S.prototype,"defaultValue",2);l([d({reflect:!0})],S.prototype,"size",2);l([d()],S.prototype,"placeholder",2);l([d({type:Boolean,reflect:!0})],S.prototype,"multiple",2);l([d({attribute:"max-options-visible",type:Number})],S.prototype,"maxOptionsVisible",2);l([d({type:Boolean,reflect:!0})],S.prototype,"disabled",2);l([d({type:Boolean})],S.prototype,"clearable",2);l([d({type:Boolean,reflect:!0})],S.prototype,"open",2);l([d({type:Boolean})],S.prototype,"hoist",2);l([d({type:Boolean,reflect:!0})],S.prototype,"filled",2);l([d({type:Boolean,reflect:!0})],S.prototype,"pill",2);l([d()],S.prototype,"label",2);l([d({reflect:!0})],S.prototype,"placement",2);l([d({attribute:"help-text"})],S.prototype,"helpText",2);l([d({reflect:!0})],S.prototype,"form",2);l([d({type:Boolean,reflect:!0})],S.prototype,"required",2);l([d()],S.prototype,"getTag",2);l([L("disabled",{waitUntilFirstUpdate:!0})],S.prototype,"handleDisabledChange",1);l([L(["defaultValue","value"],{waitUntilFirstUpdate:!0})],S.prototype,"handleValueChange",1);l([L("open",{waitUntilFirstUpdate:!0})],S.prototype,"handleOpenChange",1);q("select.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});q("select.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});S.define("sl-select");var hl=E`
  :host {
    display: block;
    user-select: none;
    -webkit-user-select: none;
  }

  :host(:focus) {
    outline: none;
  }

  .option {
    position: relative;
    display: flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-x-small) var(--sl-spacing-medium) var(--sl-spacing-x-small) var(--sl-spacing-x-small);
    transition: var(--sl-transition-fast) fill;
    cursor: pointer;
  }

  .option--hover:not(.option--current):not(.option--disabled) {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  .option--current,
  .option--current.option--disabled {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .option--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .option__label {
    flex: 1 1 auto;
    display: inline-block;
    line-height: var(--sl-line-height-dense);
  }

  .option .option__check {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: hidden;
    padding-inline-end: var(--sl-spacing-2x-small);
  }

  .option--selected .option__check {
    visibility: visible;
  }

  .option__prefix,
  .option__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .option__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .option__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .option {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`,lt=class extends F{constructor(){super(...arguments),this.localize=new ft(this),this.isInitialized=!1,this.current=!1,this.selected=!1,this.hasHover=!1,this.value="",this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false")}handleDefaultSlotChange(){this.isInitialized?customElements.whenDefined("sl-select").then(()=>{const t=this.closest("sl-select");t&&t.handleDefaultSlotChange()}):this.isInitialized=!0}handleMouseEnter(){this.hasHover=!0}handleMouseLeave(){this.hasHover=!1}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleValueChange(){typeof this.value!="string"&&(this.value=String(this.value)),this.value.includes(" ")&&(console.error("Option values cannot include a space. All spaces have been replaced with underscores.",this),this.value=this.value.replace(/ /g,"_"))}getTextLabel(){const t=this.childNodes;let e="";return[...t].forEach(o=>{o.nodeType===Node.ELEMENT_NODE&&(o.hasAttribute("slot")||(e+=o.textContent)),o.nodeType===Node.TEXT_NODE&&(e+=o.textContent)}),e.trim()}render(){return m`
      <div
        part="base"
        class=${R({option:!0,"option--current":this.current,"option--disabled":this.disabled,"option--selected":this.selected,"option--hover":this.hasHover})}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <sl-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></sl-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `}};lt.styles=[U,hl];lt.dependencies={"sl-icon":Z};l([A(".option__label")],lt.prototype,"defaultSlot",2);l([x()],lt.prototype,"current",2);l([x()],lt.prototype,"selected",2);l([x()],lt.prototype,"hasHover",2);l([d({reflect:!0})],lt.prototype,"value",2);l([d({type:Boolean,reflect:!0})],lt.prototype,"disabled",2);l([L("disabled")],lt.prototype,"handleDisabledChange",1);l([L("selected")],lt.prototype,"handleSelectedChange",1);l([L("value")],lt.prototype,"handleValueChange",1);lt.define("sl-option");var pl=Object.defineProperty,fl=Object.getOwnPropertyDescriptor,bt=(t,e,o,i)=>{for(var r=i>1?void 0:i?fl(e,o):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(r=(i?a(e,o,r):a(r))||r);return i&&r&&pl(e,o,r),r};let et=class extends H{constructor(){super(...arguments),this.events=[],this.groups=[],this.isEditing=!1,this.selectedEventId=null}connectedCallback(){super.connectedCallback(),this.dispatchEvent(new CustomEvent("change-title",{detail:{title:"Zarządzanie Wydarzeniami"},bubbles:!0,composed:!0}))}async firstUpdated(){await this.fetchData()}async fetchData(){try{const[t,e]=await Promise.all([fetch("http://localhost:3000/api/events/all"),fetch("http://localhost:3000/api/groups")]);this.events=await t.json(),this.groups=await e.json()}catch(t){console.error("Błąd pobierania danych:",t)}}openAddDialog(){this.isEditing=!1,this.selectedEventId=null,this.dialog.show(),setTimeout(()=>this.resetForm(),0)}async handleEdit(t){this.isEditing=!0,this.selectedEventId=t.id,this.dialog.show(),setTimeout(()=>{this.inputTitle.value=t.title,this.inputDate.value=t.startTime.substring(0,16),this.inputDescription.value=t.description||"",this.inputLocation.value=t.location||"",this.inputGroup.value=t.groupId?.toString()||""},50)}async handleDelete(t){if(confirm("Czy na pewno chcesz usunąć to wydarzenie?"))try{(await fetch(`http://localhost:3000/api/events/${t}`,{method:"DELETE"})).ok&&await this.fetchData()}catch(e){console.error(e)}}async saveEvent(){const t={title:this.inputTitle.value,startTime:new Date(this.inputDate.value).toISOString(),description:this.inputDescription.value,location:this.inputLocation.value,groupId:this.inputGroup.value?Number(this.inputGroup.value):null},e=this.isEditing?`http://localhost:3000/api/events/${this.selectedEventId}`:"http://localhost:3000/api/events",o=this.isEditing?"PUT":"POST";try{(await fetch(e,{method:o,headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).ok&&(this.dialog.hide(),await this.fetchData())}catch(i){console.error(i)}}resetForm(){this.inputTitle.value="",this.inputDate.value="",this.inputDescription.value="",this.inputLocation.value="",this.inputGroup.value=""}renderEventList(t,e=!1){return t.map(o=>m`
      <div class="event-card ${e?"archive-card":""}">
        <div class="event-info">
          <h4>${o.title}</h4>
          <p>
            ${new Date(o.startTime).toLocaleString("pl-PL",{dateStyle:"medium",timeStyle:"short"})}
            | ${o.location||"Brak lokalizacji"}
          </p>
          ${o.groupId?m`<sl-badge variant="neutral">${this.groups.find(i=>i.id===o.groupId)?.name}</sl-badge>`:""}
        </div>
        <div class="actions">
          <sl-button size="small" variant="default" @click=${()=>this.handleEdit(o)}>
             <sl-icon slot="prefix" name="pencil"></sl-icon> Edytuj
          </sl-button>
          
          <sl-button size="small" variant="danger" outline @click=${()=>this.handleDelete(o.id)}>
             <sl-icon slot="prefix" name="trash"></sl-icon> Usuń
          </sl-button>
        </div>
      </div>
    `)}render(){const t=new Date,e=this.events.filter(i=>new Date(i.startTime)>=t),o=this.events.filter(i=>new Date(i.startTime)<t);return m`
      <div class="header-actions">
        <h2>Lista Wydarzeń</h2>
        <sl-button variant="primary" @click=${this.openAddDialog}>
          <sl-icon slot="prefix" name="plus-lg"></sl-icon> Dodaj wydarzenie
        </sl-button>
      </div>

      <div class="section-title">
        <sl-icon name="calendar-check"></sl-icon> Nadchodzące i Aktywne
      </div>
      ${e.length?this.renderEventList(e):m`<p>Brak zaplanowanych wydarzeń.</p>`}

      <sl-divider></sl-divider>

      <div class="section-title">
        <sl-icon name="archive"></sl-icon> Archiwum (Zakończone)
      </div>
      ${o.length?this.renderEventList(o,!0):m`<p>Archiwum jest puste.</p>`}

      <sl-dialog label="${this.isEditing?"Edytuj Wydarzenie":"Nowe Wydarzenie"}">
        <form>
          <sl-input id="form-title" label="Tytuł" required></sl-input>
          <sl-input id="form-date" type="datetime-local" label="Data i godzina" required></sl-input>
          <sl-input id="form-location" label="Miejsce"></sl-input>
          
          <sl-select id="form-group" label="Grupa (opcjonalnie)" clearable>
            ${this.groups.map(i=>m`<sl-option value="${i.id}">${i.name}</sl-option>`)}
          </sl-select>

          <sl-textarea id="form-description" label="Opis"></sl-textarea>
        </form>
        
        <sl-button slot="footer" variant="primary" @click=${this.saveEvent}>
          ${this.isEditing?"Zapisz zmiany":"Dodaj wydarzenie"}
        </sl-button>
      </sl-dialog>
    `}};et.styles=[rt,E`
      :host {
        display: block;
        padding: 20px;
        max-width: 900px;
        margin: 0 auto;
      }

      .header-actions {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 30px;
      }

      .event-card {
        background: var(--color-sand-light);
        border: 1px solid var(--color-wood-medium);
        border-radius: 8px;
        padding: 15px;
        margin-bottom: 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .event-info h4 { margin: 0; color: var(--color-wood-dark); }
      .event-info p { margin: 5px 0 0 0; font-size: 0.9rem; color: #666; }

      .actions { display: flex; gap: 10px; }

      .section-title {
        color: var(--color-wood-dark);
        margin: 40px 0 20px 0;
        font-size: 1.2rem;
        display: flex;
        align-items: center;
        gap: 10px;
      }

      .archive-card { opacity: 0.7; filter: grayscale(0.5); }

      form { display: flex; flex-direction: column; gap: 15px; }

      @media (max-width: 600px) {
        .event-card { flex-direction: column; align-items: flex-start; gap: 15px; }
        .actions { width: 100%; justify-content: flex-end; }
      }
    `];bt([x()],et.prototype,"events",2);bt([x()],et.prototype,"groups",2);bt([x()],et.prototype,"isEditing",2);bt([x()],et.prototype,"selectedEventId",2);bt([A("#form-title")],et.prototype,"inputTitle",2);bt([A("#form-date")],et.prototype,"inputDate",2);bt([A("#form-description")],et.prototype,"inputDescription",2);bt([A("#form-location")],et.prototype,"inputLocation",2);bt([A("#form-group")],et.prototype,"inputGroup",2);bt([A("sl-dialog")],et.prototype,"dialog",2);et=bt([ot("app-admin-events")],et);var ml=Object.getOwnPropertyDescriptor,bl=(t,e,o,i)=>{for(var r=i>1?void 0:i?ml(e,o):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(r=a(r)||r);return r};let Fo=class extends H{connectedCallback(){super.connectedCallback(),this.dispatchEvent(new CustomEvent("change-title",{detail:{title:"Panel Administratora"},bubbles:!0,composed:!0}))}render(){return m`
      <div class="admin-container">
        <sl-tab-group>
          
          <sl-tab slot="nav" panel="groups">
            <sl-icon name="people-fill" style="margin-right: 8px;"></sl-icon> Zarządzaj Grupami
          </sl-tab>
          
          <sl-tab slot="nav" panel="events">
            <sl-icon name="calendar3" style="margin-right: 8px;"></sl-icon> Wydarzenia
          </sl-tab>
          
        <sl-tab slot="nav" panel="announcements">
            <sl-icon name="journal-text" style="margin-right: 8px;"></sl-icon> Ogłoszenia
          </sl-tab>

          <sl-tab-panel name="groups">
            <app-admin-groups></app-admin-groups>
          </sl-tab-panel>

          <sl-tab-panel name="events">
            <app-admin-events></app-admin-events>
          </sl-tab-panel>

          <sl-tab-panel name="announcements">
            <app-admin-announcements></app-admin-announcements>
          </sl-tab-panel>
        </sl-tab-group>
      </div>
    `}};Fo.styles=[rt,E`
      :host {
        display: block;
        padding: 20px;
        max-width: 900px; /* Lekko poszerzamy, żeby karty miały miejsce */
        margin: 0 auto;
      }

      .admin-container {
        background-color: var(--color-sand-light);
        border: 2px solid var(--color-wood-medium);
        border-radius: 12px;
        overflow: hidden; 
      }

      sl-tab-group::part(nav) {
        background-color: var(--color-cookie-medium);
        border-bottom: 2px solid var(--color-wood-medium);
      }
      
      sl-tab::part(base) {
        color: var(--color-wood-dark);
        font-weight: 500;
        padding: 15px 20px;
      }

      sl-tab[active]::part(base) {
        font-weight: bold;
        border-bottom-color: var(--color-wood-dark);
        color: var(--color-wood-dark);
      }
    `];Fo=bl([ot("app-admin")],Fo);var gl=Object.defineProperty,vl=Object.getOwnPropertyDescriptor,Fe=(t,e,o,i)=>{for(var r=i>1?void 0:i?vl(e,o):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(r=(i?a(e,o,r):a(r))||r);return i&&r&&gl(e,o,r),r};let Kt=class extends H{constructor(){super(...arguments),this.groupId=null,this.group=null,this.events=[],this.isLoading=!0}connectedCallback(){super.connectedCallback();const e=new URLSearchParams(window.location.search).get("id");e&&(this.groupId=parseInt(e,10))}async firstUpdated(){this.groupId?await this.fetchGroupDetails():this.isLoading=!1}async fetchGroupDetails(){try{const t=await fetch("http://localhost:3000/api/groups");if(t.ok){const o=await t.json();this.group=o.find(i=>i.id===this.groupId)||null,this.group&&this.dispatchEvent(new CustomEvent("change-title",{detail:{title:this.group.name},bubbles:!0,composed:!0}))}const e=await fetch("http://localhost:3000/api/events");if(e.ok){const o=await e.json();this.events=o.filter(i=>i.groupId===this.groupId)}}catch(t){console.error("Błąd podczas pobierania danych:",t)}finally{this.isLoading=!1}}formatDate(t){return new Date(t).toLocaleDateString("pl-PL",{weekday:"long",day:"numeric",month:"long",hour:"2-digit",minute:"2-digit"})}render(){return this.isLoading?m`
        <div class="center-content">
          <sl-spinner style="font-size: 2rem;"></sl-spinner>
        </div>
      `:this.group?m`
      <div class="header-section">
        <div class="group-photo-large">
          <sl-icon name="people-fill"></sl-icon>
        </div>
        <h2 class="group-name">${this.group.name}</h2>
        ${this.group.description?m`<p class="group-description">${this.group.description}</p>`:m`<p class="group-description">Ta grupa nie ma jeszcze opisu.</p>`}
      </div>

      <div class="events-section">
        <h3 class="section-title">Wydarzenia grupy</h3>
        
        ${this.events.length===0?m`<p style="color: #666; text-align: center;">Brak nadchodzących wydarzeń dla tej grupy.</p>`:m`
              <div class="events-list">
                ${this.events.map(t=>{const e=this.formatDate(t.startTime),o=t.category||"spotkanie";return m`
                    <calendar-item
                      time="${e}"
                      name="${t.title}"
                      category="${o}"
                      multiline
                    ></calendar-item>
                  `})}
              </div>
            `}
      </div>
    `:m`
        <div class="center-content">
          <p>Nie znaleziono takiej grupy.</p>
        </div>
      `}};Kt.styles=[rt,E`
      :host {
        display: block;
        padding: 15px;
        max-width: 600px;
        margin: 0 auto;
        box-sizing: border-box;
      }

      .center-content {
        display: flex;
        justify-content: center;
        padding: 40px;
        color: var(--color-wood-medium);
      }

      .header-section {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        margin-bottom: 30px;
        background-color: var(--color-sand-light);
        padding: 20px;
        border-radius: 16px;
        border: 2px solid var(--color-wood-medium);
      }

      .group-photo-large {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background-color: #fff;
        border: 3px solid var(--color-wood-dark);
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 15px;
        box-shadow: 0 4px 10px rgba(0,0,0,0.1);
      }

      .group-photo-large sl-icon {
        font-size: 50px;
        color: var(--color-wood-dark);
      }

      .group-name {
        font-size: 1.5rem;
        color: var(--color-wood-dark);
        margin: 0 0 10px 0;
      }

      .group-description {
        font-size: 1rem;
        color: #555;
        line-height: 1.5;
        margin: 0;
      }

      .section-title {
        font-size: 1.2rem;
        color: var(--color-wood-dark);
        border-bottom: 2px solid var(--color-wood-medium);
        padding-bottom: 8px;
        margin-bottom: 15px;
      }

      .events-list {
        display: flex;
        flex-direction: column;
        gap: 12px;
        width: 100%;
      }

     /* POPRAWIONE STYLE DLA KALENDARZA */
      calendar-item {
        display: block;
        width: 100%;
        box-sizing: border-box;
        cursor: pointer;
        
        /* 1. Dodajemy ciemne tło, aby jasny tekst był widoczny */
        background-color: var(--color-wood-dark);
        
        /* 2. Zabezpieczamy jasny kolor tekstu (dla Shadow DOM) */
        color: var(--color-sand-light);
        --item-text-color: var(--color-sand-light);
        
        /* 3. Estetyka kafelka */
        border-radius: 12px;
        padding: 5px;
        box-shadow: 0 4px 10px rgba(127, 69, 29, 0.15);
        transition: transform 0.2s ease, background-color 0.2s ease;
      }

      /* Efekt wizualny przy kliknięciu */
      calendar-item:active {
        transform: scale(0.98);
        background-color: var(--color-wood-medium);
      }
    `];Fe([x()],Kt.prototype,"groupId",2);Fe([x()],Kt.prototype,"group",2);Fe([x()],Kt.prototype,"events",2);Fe([x()],Kt.prototype,"isLoading",2);Kt=Fe([ot("app-group-detail")],Kt);var yl=Object.defineProperty,wl=Object.getOwnPropertyDescriptor,Be=(t,e,o,i)=>{for(var r=i>1?void 0:i?wl(e,o):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(r=(i?a(e,o,r):a(r))||r);return i&&r&&yl(e,o,r),r};let Yt=class extends H{constructor(){super(...arguments),this.mainAnnouncements=[],this.archive=[],this.showArchive=!1,this.isLoading=!0}async firstUpdated(){try{const t=await fetch("http://localhost:3000/api/announcements");if(t.ok){const e=await t.json();this.mainAnnouncements=e.filter(o=>o.isMain),this.archive=e.filter(o=>!o.isMain).sort((o,i)=>new Date(i.date).getTime()-new Date(o.date).getTime())}}finally{this.isLoading=!1}}formatDate(t){return new Date(t).toLocaleDateString("pl-PL",{day:"numeric",month:"long",year:"numeric"})}render(){return this.isLoading?m`<div style="text-align:center"><sl-spinner></sl-spinner></div>`:m`
      ${this.mainAnnouncements.map(t=>m`
        <div class="paper">
          <h2 class="title">${t.title}</h2>
          <span class="date">${this.formatDate(t.date)}</span>
          <sl-divider></sl-divider>
          <div class="content">${t.content}</div>
        </div>
      `)}

      ${this.mainAnnouncements.length===0?m`
        <div class="paper" style="text-align: center; color: #777;">
          Brak aktualnych ogłoszeń na ten tydzień.
        </div>
      `:""}

      <div style="text-align: center; margin-top: 20px;">
        <sl-button pill @click="${()=>this.showArchive=!this.showArchive}">
          <sl-icon slot="prefix" name="${this.showArchive?"chevron-up":"archive"}"></sl-icon>
          ${this.showArchive?"Ukryj Archiwum":"Zobacz Archiwum Ogłoszeń"}
        </sl-button>
      </div>

      ${this.showArchive?m`
        <div class="archive-list">
          ${this.archive.map(t=>m`
            <div class="archive-item">
              <h4 style="margin:0">${t.title}</h4>
              <small>${this.formatDate(t.date)}</small>
              <p class="content" style="font-size: 0.9rem; margin-top: 10px;">${t.content}</p>
            </div>
          `)}
        </div>
      `:""}
    `}};Yt.styles=[rt,E`
      :host { display: block; padding: 15px; max-width: 800px; margin: 0 auto; }
      .paper { background: #fff; border: 1px solid var(--color-wood-medium); border-radius: 8px; padding: 25px; margin-bottom: 20px; box-shadow: 0 4px 10px rgba(0,0,0,0.05); }
      .title { color: var(--color-wood-dark); text-align: center; margin: 0; }
      .date { color: #777; text-align: center; display: block; margin-bottom: 15px; font-size: 0.9rem; }
      .content { white-space: pre-line; line-height: 1.6; color: #333; }
      .archive-list { margin-top: 20px; display: flex; flex-direction: column; gap: 15px; }
      .archive-item { padding: 15px; border-left: 4px solid var(--color-wood-medium); background: #fdfdfd; }
    `];Be([x()],Yt.prototype,"mainAnnouncements",2);Be([x()],Yt.prototype,"archive",2);Be([x()],Yt.prototype,"showArchive",2);Be([x()],Yt.prototype,"isLoading",2);Yt=Be([ot("app-announcements")],Yt);var xl=Object.defineProperty,_l=Object.getOwnPropertyDescriptor,ni=(t,e,o,i)=>{for(var r=i>1?void 0:i?_l(e,o):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(r=(i?a(e,o,r):a(r))||r);return i&&r&&xl(e,o,r),r};const kl="/mParafia/";Eo(`${kl}shoelace-assets`);let Te=class extends H{constructor(){super(...arguments),this.pageTitle="mParafia",this.touchStartX=0,this.touchStartY=0,this.touchEndX=0,this.touchEndY=0,this.handleTouchStart=t=>{this.touchStartX=t.changedTouches[0].screenX,this.touchStartY=t.changedTouches[0].screenY},this.handleTouchMove=t=>{this.touchStartX<=30&&t.preventDefault()},this.handleTouchEnd=t=>{this.touchEndX=t.changedTouches[0].screenX,this.touchEndY=t.changedTouches[0].screenY,this.checkSwipe()}}connectedCallback(){super.connectedCallback(),window.addEventListener("touchstart",this.handleTouchStart,{passive:!0}),window.addEventListener("touchmove",this.handleTouchMove,{passive:!1}),window.addEventListener("touchend",this.handleTouchEnd,{passive:!0})}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("touchstart",this.handleTouchStart),window.removeEventListener("touchmove",this.handleTouchMove),window.removeEventListener("touchend",this.handleTouchEnd)}checkSwipe(){const t=this.touchEndX-this.touchStartX,e=this.touchEndY-this.touchStartY;if(Math.abs(e)>Math.abs(t))return;this.touchStartX<=40&&t>50&&this.drawer&&!this.drawer.open&&this.drawer.show(),this.drawer&&this.drawer.open&&t<-50&&this.drawer.hide()}firstUpdated(){const t=this.shadowRoot?.querySelector("#router-outlet"),e="/mParafia/";new Ma(t,{baseUrl:e}).setRoutes([{path:"/",component:"app-home"},{path:"/kalendarz",component:"app-calendar"},{path:"/grupy",component:"app-groups"},{path:"/wydarzenia",component:"app-events"},{path:"/mock-event",component:"app-event-mock-detail"},{path:"/grupa",component:"app-group-detail"},{path:"/admin",component:"app-admin"},{path:"/admin/events",component:"app-admin-events"},{path:"/ogloszenia",component:"app-announcements"},{path:"(.*)",redirect:"/"}])}handleTitleChange(t){this.pageTitle=t.detail.title}openMenu(){this.drawer.show()}handleNavigation(t){this.drawer.hide();const o="/mParafia/"+t.substring(1);window.history.pushState({},"",o),window.dispatchEvent(new PopStateEvent("popstate"))}render(){return m`
      <div class="app-layout">

        <sl-drawer label="Menu mParafii" placement="start">

          <div class="menu-links">
            <sl-button variant="text" size="large" @click="${()=>this.handleNavigation("/")}">
              <sl-icon slot="prefix" name="house"></sl-icon> Strona Główna
            </sl-button>
            <sl-button variant="text" size="large" @click="${()=>this.handleNavigation("/kalendarz")}">
              <sl-icon slot="prefix" name="calendar3"></sl-icon> Kalendarz
            </sl-button>
            <sl-button variant="text" size="large" @click="${()=>this.handleNavigation("/grupy")}">
              <sl-icon slot="prefix" name="people-fill"></sl-icon> Grupy
            </sl-button>
            <sl-button variant="text" size="large" @click="${()=>this.handleNavigation("/wydarzenia")}">
              <sl-icon slot="prefix" name="star-fill"></sl-icon> Wydarzenia
            </sl-button>
          </div>

          <div class="bottom-links">
            <sl-divider></sl-divider>
            
            <sl-button variant="text" size="large" @click="${()=>this.handleNavigation("/admin/events")}">
              <sl-icon slot="prefix" name="shield-lock"></sl-icon> Panel Wydarzeń
            </sl-button>

            <sl-button variant="text" size="large" @click="${()=>this.handleNavigation("/ustawienia")}">
              <sl-icon slot="prefix" name="gear"></sl-icon> Ustawienia
            </sl-button>
          </div>

        </sl-drawer>

        <header>
          <sl-icon-button name="list" label="Menu" @click="${this.openMenu}"></sl-icon-button>
          <h1>${this.pageTitle}</h1>
          <sl-icon-button name="bell" label="Powiadomienia"></sl-icon-button>
        </header>

        <main id="router-outlet" @change-title="${this.handleTitleChange}"> </main>

      </div>
    `}};Te.styles=[rt,E`
      * {
        -webkit-tap-highlight-color: transparent !important;
      }

      sl-button::part(base),
      sl-icon-button::part(base),
      sl-drawer::part(base),
      sl-drawer::part(panel) {
        -webkit-tap-highlight-color: transparent !important;
        outline: none !important;
      }

      .app-layout {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        background-color: var(--color-sand-light);
      }

      header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-top: calc(10px + env(safe-area-inset-top));
        padding-bottom: 10px;
        padding-left: 16px;
        padding-right: 16px;
        background-color: var(--color-sand-light);
        color: var(--color-wood-dark);
        border-bottom: none;
        box-shadow: 0 4px 15px rgba(127, 69, 29, 0.15);

        position: sticky;
        top: 0;
        z-index: 100;
      }

      header h1 {
        margin: 0;
        font-size: 1.2rem;
        font-weight: bold;
      }

      sl-icon-button {
        font-size: 1.5rem;
        color: var(--color-wood-dark);
      }

      sl-icon-button::part(base):hover {
        color: var(--color-wood-medium);
      }

      sl-drawer::part(panel) {
        background-color: var(--color-sand-light);
      }

      sl-drawer::part(header) {
        color: var(--color-wood-dark);
        font-weight: bold;
        font-size: 1.2rem;
        padding-top: calc(0px + env(safe-area-inset-top));
      }

      sl-drawer::part(body) {
        display: flex;
        flex-direction: column;
        padding-bottom: 20px;
      }

      .menu-links {
        display: flex;
        flex-direction: column;
        gap: 10px;
        flex: 1;
      }

      .bottom-links {
        display: flex;
        flex-direction: column;
      }

      main {
        flex: 1;
        padding: 16px;
        display: flex;
        flex-direction: column;
      }

      sl-divider {
        --color: transparent;
        border-bottom: 1px solid rgba(255, 233, 212, 0.8);
        box-shadow: 0 4px 6px rgba(127, 69, 29, 0.2);
        margin: 15px 0;
      }

      sl-drawer {
        --size: 260px;
      }

      .menu-links sl-button,
      .bottom-links sl-button {
        width: 100%;
        justify-content: flex-start;
        transition: filter 0.2s ease;
      }

      .menu-links sl-button::part(base),
      .bottom-links sl-button::part(base) {
        color: var(--color-wood-dark) !important;
      }

      .menu-links sl-button::part(base):active,
      .bottom-links sl-button::part(base):active {
        filter: brightness(1.5) !important;
      }

      @media (hover: hover) {
        .menu-links sl-button::part(base):hover,
        .bottom-links sl-button::part(base):hover {
          filter: brightness(1.5) !important;
        }
      }

      .menu-links sl-icon,
      .bottom-links sl-icon {
        color: var(--color-wood-dark);
      }
    `];ni([A("sl-drawer")],Te.prototype,"drawer",2);ni([x()],Te.prototype,"pageTitle",2);Te=ni([ot("app-index")],Te);
//# sourceMappingURL=index-CdH0XJuO.js.map
