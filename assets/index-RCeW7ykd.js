(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function r(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(i){if(i.ep)return;i.ep=!0;const n=r(i);fetch(i.href,n)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Un=globalThis,Ts=Un.ShadowRoot&&(Un.ShadyCSS===void 0||Un.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,As=Symbol(),Sl=new WeakMap;let x0=class{constructor(t,r,a){if(this._$cssResult$=!0,a!==As)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(Ts&&t===void 0){const a=r!==void 0&&r.length===1;a&&(t=Sl.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),a&&Sl.set(r,t))}return t}toString(){return this.cssText}};const eh=e=>new x0(typeof e=="string"?e:e+"",void 0,As),fe=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((a,i,n)=>a+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[n+1],e[0]);return new x0(r,e,As)},th=(e,t)=>{if(Ts)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const a=document.createElement("style"),i=Un.litNonce;i!==void 0&&a.setAttribute("nonce",i),a.textContent=r.cssText,e.appendChild(a)}},Cl=Ts?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const a of t.cssRules)r+=a.cssText;return eh(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:rh,defineProperty:ah,getOwnPropertyDescriptor:ih,getOwnPropertyNames:nh,getOwnPropertySymbols:oh,getPrototypeOf:sh}=Object,mo=globalThis,Fl=mo.trustedTypes,lh=Fl?Fl.emptyScript:"",ch=mo.reactiveElementPolyfillSupport,Ii=(e,t)=>e,Qa={toAttribute(e,t){switch(t){case Boolean:e=e?lh:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},Ss=(e,t)=>!rh(e,t),Dl={attribute:!0,type:String,converter:Qa,reflect:!1,useDefault:!1,hasChanged:Ss};Symbol.metadata??=Symbol("metadata"),mo.litPropertyMetadata??=new WeakMap;let Wa=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,r=Dl){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(t,r),!r.noAccessor){const a=Symbol(),i=this.getPropertyDescriptor(t,a,r);i!==void 0&&ah(this.prototype,t,i)}}static getPropertyDescriptor(t,r,a){const{get:i,set:n}=ih(this.prototype,t)??{get(){return this[r]},set(o){this[r]=o}};return{get:i,set(o){const s=i?.call(this);n?.call(this,o),this.requestUpdate(t,s,a)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Dl}static _$Ei(){if(this.hasOwnProperty(Ii("elementProperties")))return;const t=sh(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Ii("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ii("properties"))){const r=this.properties,a=[...nh(r),...oh(r)];for(const i of a)this.createProperty(i,r[i])}const t=this[Symbol.metadata];if(t!==null){const r=litPropertyMetadata.get(t);if(r!==void 0)for(const[a,i]of r)this.elementProperties.set(a,i)}this._$Eh=new Map;for(const[r,a]of this.elementProperties){const i=this._$Eu(r,a);i!==void 0&&this._$Eh.set(i,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const a=new Set(t.flat(1/0).reverse());for(const i of a)r.unshift(Cl(i))}else t!==void 0&&r.push(Cl(t));return r}static _$Eu(t,r){const a=r.attribute;return a===!1?void 0:typeof a=="string"?a:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,r=this.constructor.elementProperties;for(const a of r.keys())this.hasOwnProperty(a)&&(t.set(a,this[a]),delete this[a]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return th(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,r,a){this._$AK(t,a)}_$ET(t,r){const a=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,a);if(i!==void 0&&a.reflect===!0){const n=(a.converter?.toAttribute!==void 0?a.converter:Qa).toAttribute(r,a.type);this._$Em=t,n==null?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(t,r){const a=this.constructor,i=a._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const n=a.getPropertyOptions(i),o=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute!==void 0?n.converter:Qa;this._$Em=i;const s=o.fromAttribute(r,n.type);this[i]=s??this._$Ej?.get(i)??s,this._$Em=null}}requestUpdate(t,r,a,i=!1,n){if(t!==void 0){const o=this.constructor;if(i===!1&&(n=this[t]),a??=o.getPropertyOptions(t),!((a.hasChanged??Ss)(n,r)||a.useDefault&&a.reflect&&n===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,a))))return;this.C(t,r,a)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,r,{useDefault:a,reflect:i,wrapped:n},o){a&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??r??this[t]),n!==!0||o!==void 0)||(this._$AL.has(t)||(this.hasUpdated||a||(r=void 0),this._$AL.set(t,r)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,n]of this._$Ep)this[i]=n;this._$Ep=void 0}const a=this.constructor.elementProperties;if(a.size>0)for(const[i,n]of a){const{wrapped:o}=n,s=this[i];o!==!0||this._$AL.has(i)||s===void 0||this.C(i,void 0,n,s)}}let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),this._$EO?.forEach(a=>a.hostUpdate?.()),this.update(r)):this._$EM()}catch(a){throw t=!1,this._$EM(),a}t&&this._$AE(r)}willUpdate(t){}_$AE(t){this._$EO?.forEach(r=>r.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(r=>this._$ET(r,this[r])),this._$EM()}updated(t){}firstUpdated(t){}};Wa.elementStyles=[],Wa.shadowRootOptions={mode:"open"},Wa[Ii("elementProperties")]=new Map,Wa[Ii("finalized")]=new Map,ch?.({ReactiveElement:Wa}),(mo.reactiveElementVersions??=[]).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Cs=globalThis,Ol=e=>e,Xn=Cs.trustedTypes,Il=Xn?Xn.createPolicy("lit-html",{createHTML:e=>e}):void 0,b0="$lit$",Kr=`lit$${Math.random().toFixed(9).slice(2)}$`,w0="?"+Kr,dh=`<${w0}>`,Ta=document,Wi=()=>Ta.createComment(""),Gi=e=>e===null||typeof e!="object"&&typeof e!="function",Fs=Array.isArray,uh=e=>Fs(e)||typeof e?.[Symbol.iterator]=="function",$o=`[ 	
\f\r]`,wi=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Pl=/-->/g,Rl=/>/g,pa=RegExp(`>|${$o}(?:([^\\s"'>=/]+)(${$o}*=${$o}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),$l=/'/g,Ll=/"/g,y0=/^(?:script|style|textarea|title)$/i,hh=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),L=hh(1),Jt=Symbol.for("lit-noChange"),qe=Symbol.for("lit-nothing"),Nl=new WeakMap,wa=Ta.createTreeWalker(Ta,129);function _0(e,t){if(!Fs(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Il!==void 0?Il.createHTML(t):t}const fh=(e,t)=>{const r=e.length-1,a=[];let i,n=t===2?"<svg>":t===3?"<math>":"",o=wi;for(let s=0;s<r;s++){const l=e[s];let c,d,u=-1,f=0;for(;f<l.length&&(o.lastIndex=f,d=o.exec(l),d!==null);)f=o.lastIndex,o===wi?d[1]==="!--"?o=Pl:d[1]!==void 0?o=Rl:d[2]!==void 0?(y0.test(d[2])&&(i=RegExp("</"+d[2],"g")),o=pa):d[3]!==void 0&&(o=pa):o===pa?d[0]===">"?(o=i??wi,u=-1):d[1]===void 0?u=-2:(u=o.lastIndex-d[2].length,c=d[1],o=d[3]===void 0?pa:d[3]==='"'?Ll:$l):o===Ll||o===$l?o=pa:o===Pl||o===Rl?o=wi:(o=pa,i=void 0);const h=o===pa&&e[s+1].startsWith("/>")?" ":"";n+=o===wi?l+dh:u>=0?(a.push(c),l.slice(0,u)+b0+l.slice(u)+Kr+h):l+Kr+(u===-2?s:h)}return[_0(e,n+(e[r]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),a]};class Ki{constructor({strings:t,_$litType$:r},a){let i;this.parts=[];let n=0,o=0;const s=t.length-1,l=this.parts,[c,d]=fh(t,r);if(this.el=Ki.createElement(c,a),wa.currentNode=this.el.content,r===2||r===3){const u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(i=wa.nextNode())!==null&&l.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(const u of i.getAttributeNames())if(u.endsWith(b0)){const f=d[o++],h=i.getAttribute(u).split(Kr),p=/([.?@])?(.*)/.exec(f);l.push({type:1,index:n,name:p[2],strings:h,ctor:p[1]==="."?gh:p[1]==="?"?mh:p[1]==="@"?vh:vo}),i.removeAttribute(u)}else u.startsWith(Kr)&&(l.push({type:6,index:n}),i.removeAttribute(u));if(y0.test(i.tagName)){const u=i.textContent.split(Kr),f=u.length-1;if(f>0){i.textContent=Xn?Xn.emptyScript:"";for(let h=0;h<f;h++)i.append(u[h],Wi()),wa.nextNode(),l.push({type:2,index:++n});i.append(u[f],Wi())}}}else if(i.nodeType===8)if(i.data===w0)l.push({type:2,index:n});else{let u=-1;for(;(u=i.data.indexOf(Kr,u+1))!==-1;)l.push({type:7,index:n}),u+=Kr.length-1}n++}}static createElement(t,r){const a=Ta.createElement("template");return a.innerHTML=t,a}}function ei(e,t,r=e,a){if(t===Jt)return t;let i=a!==void 0?r._$Co?.[a]:r._$Cl;const n=Gi(t)?void 0:t._$litDirective$;return i?.constructor!==n&&(i?._$AO?.(!1),n===void 0?i=void 0:(i=new n(e),i._$AT(e,r,a)),a!==void 0?(r._$Co??=[])[a]=i:r._$Cl=i),i!==void 0&&(t=ei(e,i._$AS(e,t.values),i,a)),t}class ph{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:r},parts:a}=this._$AD,i=(t?.creationScope??Ta).importNode(r,!0);wa.currentNode=i;let n=wa.nextNode(),o=0,s=0,l=a[0];for(;l!==void 0;){if(o===l.index){let c;l.type===2?c=new un(n,n.nextSibling,this,t):l.type===1?c=new l.ctor(n,l.name,l.strings,this,t):l.type===6&&(c=new xh(n,this,t)),this._$AV.push(c),l=a[++s]}o!==l?.index&&(n=wa.nextNode(),o++)}return wa.currentNode=Ta,i}p(t){let r=0;for(const a of this._$AV)a!==void 0&&(a.strings!==void 0?(a._$AI(t,a,r),r+=a.strings.length-2):a._$AI(t[r])),r++}}class un{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,r,a,i){this.type=2,this._$AH=qe,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=a,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&t?.nodeType===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=ei(this,t,r),Gi(t)?t===qe||t==null||t===""?(this._$AH!==qe&&this._$AR(),this._$AH=qe):t!==this._$AH&&t!==Jt&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):uh(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==qe&&Gi(this._$AH)?this._$AA.nextSibling.data=t:this.T(Ta.createTextNode(t)),this._$AH=t}$(t){const{values:r,_$litType$:a}=t,i=typeof a=="number"?this._$AC(t):(a.el===void 0&&(a.el=Ki.createElement(_0(a.h,a.h[0]),this.options)),a);if(this._$AH?._$AD===i)this._$AH.p(r);else{const n=new ph(i,this),o=n.u(this.options);n.p(r),this.T(o),this._$AH=n}}_$AC(t){let r=Nl.get(t.strings);return r===void 0&&Nl.set(t.strings,r=new Ki(t)),r}k(t){Fs(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let a,i=0;for(const n of t)i===r.length?r.push(a=new un(this.O(Wi()),this.O(Wi()),this,this.options)):a=r[i],a._$AI(n),i++;i<r.length&&(this._$AR(a&&a._$AB.nextSibling,i),r.length=i)}_$AR(t=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);t!==this._$AB;){const a=Ol(t).nextSibling;Ol(t).remove(),t=a}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class vo{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,a,i,n){this.type=1,this._$AH=qe,this._$AN=void 0,this.element=t,this.name=r,this._$AM=i,this.options=n,a.length>2||a[0]!==""||a[1]!==""?(this._$AH=Array(a.length-1).fill(new String),this.strings=a):this._$AH=qe}_$AI(t,r=this,a,i){const n=this.strings;let o=!1;if(n===void 0)t=ei(this,t,r,0),o=!Gi(t)||t!==this._$AH&&t!==Jt,o&&(this._$AH=t);else{const s=t;let l,c;for(t=n[0],l=0;l<n.length-1;l++)c=ei(this,s[a+l],r,l),c===Jt&&(c=this._$AH[l]),o||=!Gi(c)||c!==this._$AH[l],c===qe?t=qe:t!==qe&&(t+=(c??"")+n[l+1]),this._$AH[l]=c}o&&!i&&this.j(t)}j(t){t===qe?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class gh extends vo{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===qe?void 0:t}}class mh extends vo{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==qe)}}class vh extends vo{constructor(t,r,a,i,n){super(t,r,a,i,n),this.type=5}_$AI(t,r=this){if((t=ei(this,t,r,0)??qe)===Jt)return;const a=this._$AH,i=t===qe&&a!==qe||t.capture!==a.capture||t.once!==a.once||t.passive!==a.passive,n=t!==qe&&(a===qe||i);i&&this.element.removeEventListener(this.name,this,a),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class xh{constructor(t,r,a){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=a}get _$AU(){return this._$AM._$AU}_$AI(t){ei(this,t)}}const bh=Cs.litHtmlPolyfillSupport;bh?.(Ki,un),(Cs.litHtmlVersions??=[]).push("3.3.3");const wh=(e,t,r)=>{const a=r?.renderBefore??t;let i=a._$litPart$;if(i===void 0){const n=r?.renderBefore??null;a._$litPart$=i=new un(t.insertBefore(Wi(),n),n,void 0,r??{})}return i._$AI(e),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ds=globalThis;let Le=class extends Wa{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=wh(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Jt}};Le._$litElement$=!0,Le.finalized=!0,Ds.litElementHydrateSupport?.({LitElement:Le});const yh=Ds.litElementPolyfillSupport;yh?.({LitElement:Le});(Ds.litElementVersions??=[]).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ve=e=>(t,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _h={attribute:!0,type:String,converter:Qa,reflect:!1,hasChanged:Ss},kh=(e=_h,t,r)=>{const{kind:a,metadata:i}=r;let n=globalThis.litPropertyMetadata.get(i);if(n===void 0&&globalThis.litPropertyMetadata.set(i,n=new Map),a==="setter"&&((e=Object.create(e)).wrapped=!0),n.set(r.name,e),a==="accessor"){const{name:o}=r;return{set(s){const l=t.get.call(this);t.set.call(this,s),this.requestUpdate(o,l,e,!0,s)},init(s){return s!==void 0&&this.C(o,void 0,e,s),s}}}if(a==="setter"){const{name:o}=r;return function(s){const l=this[o];t.call(this,s),this.requestUpdate(o,l,e,!0,s)}}throw Error("Unsupported decorator location: "+a)};function P(e){return(t,r)=>typeof r=="object"?kh(e,t,r):((a,i,n)=>{const o=i.hasOwnProperty(n);return i.constructor.createProperty(n,a),o?Object.getOwnPropertyDescriptor(i,n):void 0})(e,t,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function J(e){return P({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Eh(e){return(t,r)=>{const a=typeof t=="function"?t:t[r];Object.assign(a,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Th=(e,t,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,r),r);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function xe(e,t){return(r,a,i)=>{const n=o=>o.renderRoot?.querySelector(e)??null;return Th(r,a,{get(){return n(this)}})}}var Qo="";function es(e){Qo=e}function Ah(e=""){if(!Qo){const t=[...document.getElementsByTagName("script")],r=t.find(a=>a.hasAttribute("data-shoelace"));if(r)es(r.getAttribute("data-shoelace"));else{const a=t.find(n=>/shoelace(\.min)?\.js($|\?)/.test(n.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(n.src));let i="";a&&(i=a.getAttribute("src")),es(i.split("/").slice(0,-1).join("/"))}}return Qo.replace(/\/$/,"")+(e?`/${e.replace(/^\//,"")}`:"")}var Sh={name:"default",resolver:e=>Ah(`assets/icons/${e}.svg`)},Ch=Sh,zl={caret:`
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
  `},Fh={name:"system",resolver:e=>e in zl?`data:image/svg+xml,${encodeURIComponent(zl[e])}`:""},Dh=Fh,Oh=[Ch,Dh],ts=[];function Ih(e){ts.push(e)}function Ph(e){ts=ts.filter(t=>t!==e)}function Ml(e){return Oh.find(t=>t.name===e)}var Rh=fe`
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
`,k0=Object.defineProperty,$h=Object.defineProperties,Lh=Object.getOwnPropertyDescriptor,Nh=Object.getOwnPropertyDescriptors,Bl=Object.getOwnPropertySymbols,zh=Object.prototype.hasOwnProperty,Mh=Object.prototype.propertyIsEnumerable,Lo=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),Os=e=>{throw TypeError(e)},Ul=(e,t,r)=>t in e?k0(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,la=(e,t)=>{for(var r in t||(t={}))zh.call(t,r)&&Ul(e,r,t[r]);if(Bl)for(var r of Bl(t))Mh.call(t,r)&&Ul(e,r,t[r]);return e},xo=(e,t)=>$h(e,Nh(t)),_=(e,t,r,a)=>{for(var i=a>1?void 0:a?Lh(t,r):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(i=(a?o(t,r,i):o(i))||i);return a&&i&&k0(t,r,i),i},E0=(e,t,r)=>t.has(e)||Os("Cannot "+r),Bh=(e,t,r)=>(E0(e,t,"read from private field"),t.get(e)),Uh=(e,t,r)=>t.has(e)?Os("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),Vh=(e,t,r,a)=>(E0(e,t,"write to private field"),t.set(e,r),r),Hh=function(e,t){this[0]=e,this[1]=t},jh=e=>{var t=e[Lo("asyncIterator")],r=!1,a,i={};return t==null?(t=e[Lo("iterator")](),a=n=>i[n]=o=>t[n](o)):(t=t.call(e),a=n=>i[n]=o=>{if(r){if(r=!1,n==="throw")throw o;return o}return r=!0,{done:!1,value:new Hh(new Promise(s=>{var l=t[n](o);l instanceof Object||Os("Object expected"),s(l)}),1)}}),i[Lo("iterator")]=()=>i,a("next"),"throw"in t?a("throw"):i.throw=n=>{throw n},"return"in t&&a("return"),i};function Re(e,t){const r=la({waitUntilFirstUpdate:!1},t);return(a,i)=>{const{update:n}=a,o=Array.isArray(e)?e:[e];a.update=function(s){o.forEach(l=>{const c=l;if(s.has(c)){const d=s.get(c),u=this[c];d!==u&&(!r.waitUntilFirstUpdate||this.hasUpdated)&&this[i](d,u)}}),n.call(this,s)}}}var Xe=fe`
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
`,Vn,Be=class extends Le{constructor(){super(),Uh(this,Vn,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([e,t])=>{this.constructor.define(e,t)})}emit(e,t){const r=new CustomEvent(e,la({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(r),r}static define(e,t=this,r={}){const a=customElements.get(e);if(!a){try{customElements.define(e,t,r)}catch{customElements.define(e,class extends t{},r)}return}let i=" (unknown version)",n=i;"version"in t&&t.version&&(i=" v"+t.version),"version"in a&&a.version&&(n=" v"+a.version),!(i&&n&&i===n)&&console.warn(`Attempted to register <${e}>${i}, but <${e}>${n} has already been registered.`)}attributeChangedCallback(e,t,r){Bh(this,Vn)||(this.constructor.elementProperties.forEach((a,i)=>{a.reflect&&this[i]!=null&&this.initialReflectedProperties.set(i,this[i])}),Vh(this,Vn,!0)),super.attributeChangedCallback(e,t,r)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,r)=>{e.has(r)&&this[r]==null&&(this[r]=t)})}};Vn=new WeakMap;Be.version="2.20.1";Be.dependencies={};_([P()],Be.prototype,"dir",2);_([P()],Be.prototype,"lang",2);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Wh=(e,t)=>e?._$litType$!==void 0,Gh=e=>e.strings===void 0,Kh={},Xh=(e,t=Kh)=>e._$AH=t;var yi=Symbol(),Fn=Symbol(),No,zo=new Map,St=class extends Be{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(e,t){var r;let a;if(t?.spriteSheet)return this.svg=L`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,this.svg;try{if(a=await fetch(e,{mode:"cors"}),!a.ok)return a.status===410?yi:Fn}catch{return Fn}try{const i=document.createElement("div");i.innerHTML=await a.text();const n=i.firstElementChild;if(((r=n?.tagName)==null?void 0:r.toLowerCase())!=="svg")return yi;No||(No=new DOMParser);const s=No.parseFromString(n.outerHTML,"text/html").body.querySelector("svg");return s?(s.part.add("svg"),document.adoptNode(s)):yi}catch{return yi}}connectedCallback(){super.connectedCallback(),Ih(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),Ph(this)}getIconSource(){const e=Ml(this.library);return this.name&&e?{url:e.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var e;const{url:t,fromLibrary:r}=this.getIconSource(),a=r?Ml(this.library):void 0;if(!t){this.svg=null;return}let i=zo.get(t);if(i||(i=this.resolveIcon(t,a),zo.set(t,i)),!this.initialRender)return;const n=await i;if(n===Fn&&zo.delete(t),t===this.getIconSource().url){if(Wh(n)){if(this.svg=n,a){await this.updateComplete;const o=this.shadowRoot.querySelector("[part='svg']");typeof a.mutator=="function"&&o&&a.mutator(o)}return}switch(n){case Fn:case yi:this.svg=null,this.emit("sl-error");break;default:this.svg=n.cloneNode(!0),(e=a?.mutator)==null||e.call(a,this.svg),this.emit("sl-load")}}}render(){return this.svg}};St.styles=[Xe,Rh];_([J()],St.prototype,"svg",2);_([P({reflect:!0})],St.prototype,"name",2);_([P()],St.prototype,"src",2);_([P()],St.prototype,"label",2);_([P({reflect:!0})],St.prototype,"library",2);_([Re("label")],St.prototype,"handleLabelChange",1);_([Re(["name","src","library"])],St.prototype,"setIcon",1);St.define("sl-icon");var Yh=fe`
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
`;function*Is(e=document.activeElement){e!=null&&(yield e,"shadowRoot"in e&&e.shadowRoot&&e.shadowRoot.mode!=="closed"&&(yield*jh(Is(e.shadowRoot.activeElement))))}function qh(){return[...Is()].pop()}var Vl=new WeakMap;function T0(e){let t=Vl.get(e);return t||(t=window.getComputedStyle(e,null),Vl.set(e,t)),t}function Zh(e){if(typeof e.checkVisibility=="function")return e.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});const t=T0(e);return t.visibility!=="hidden"&&t.display!=="none"}function Jh(e){const t=T0(e),{overflowY:r,overflowX:a}=t;return r==="scroll"||a==="scroll"?!0:r!=="auto"||a!=="auto"?!1:e.scrollHeight>e.clientHeight&&r==="auto"||e.scrollWidth>e.clientWidth&&a==="auto"}function Qh(e){const t=e.tagName.toLowerCase(),r=Number(e.getAttribute("tabindex"));if(e.hasAttribute("tabindex")&&(isNaN(r)||r<=-1)||e.hasAttribute("disabled")||e.closest("[inert]"))return!1;if(t==="input"&&e.getAttribute("type")==="radio"){const n=e.getRootNode(),o=`input[type='radio'][name="${e.getAttribute("name")}"]`,s=n.querySelector(`${o}:checked`);return s?s===e:n.querySelector(o)===e}return Zh(e)?(t==="audio"||t==="video")&&e.hasAttribute("controls")||e.hasAttribute("tabindex")||e.hasAttribute("contenteditable")&&e.getAttribute("contenteditable")!=="false"||["button","input","select","textarea","a","audio","video","summary","iframe"].includes(t)?!0:Jh(e):!1}function ef(e,t){var r;return((r=e.getRootNode({composed:!0}))==null?void 0:r.host)!==t}function Hl(e){const t=new WeakMap,r=[];function a(i){if(i instanceof Element){if(i.hasAttribute("inert")||i.closest("[inert]")||t.has(i))return;t.set(i,!0),!r.includes(i)&&Qh(i)&&r.push(i),i instanceof HTMLSlotElement&&ef(i,e)&&i.assignedElements({flatten:!0}).forEach(n=>{a(n)}),i.shadowRoot!==null&&i.shadowRoot.mode==="open"&&a(i.shadowRoot)}for(const n of i.children)a(n)}return a(e),r.sort((i,n)=>{const o=Number(i.getAttribute("tabindex"))||0;return(Number(n.getAttribute("tabindex"))||0)-o})}var _i=[],A0=class{constructor(e){this.tabDirection="forward",this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=t=>{var r;if(t.key!=="Tab"||this.isExternalActivated||!this.isActive())return;const a=qh();if(this.previousFocus=a,this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;t.shiftKey?this.tabDirection="backward":this.tabDirection="forward";const i=Hl(this.element);let n=i.findIndex(s=>s===a);this.previousFocus=this.currentFocus;const o=this.tabDirection==="forward"?1:-1;for(;;){n+o>=i.length?n=0:n+o<0?n=i.length-1:n+=o,this.previousFocus=this.currentFocus;const s=i[n];if(this.tabDirection==="backward"&&this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus)||s&&this.possiblyHasTabbableChildren(s))return;t.preventDefault(),this.currentFocus=s,(r=this.currentFocus)==null||r.focus({preventScroll:!1});const l=[...Is()];if(l.includes(this.currentFocus)||!l.includes(this.previousFocus))break}setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=e,this.elementsWithTabbableControls=["iframe"]}activate(){_i.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){_i=_i.filter(e=>e!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return _i[_i.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){const e=Hl(this.element);if(!this.element.matches(":focus-within")){const t=e[0],r=e[e.length-1],a=this.tabDirection==="forward"?t:r;typeof a?.focus=="function"&&(this.currentFocus=a,a.focus({preventScroll:!1}))}}}possiblyHasTabbableChildren(e){return this.elementsWithTabbableControls.includes(e.tagName.toLowerCase())||e.hasAttribute("controls")}};function tf(e,t){return{top:Math.round(e.getBoundingClientRect().top-t.getBoundingClientRect().top),left:Math.round(e.getBoundingClientRect().left-t.getBoundingClientRect().left)}}var rs=new Set;function rf(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}function af(){const e=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(e)||!e?0:e}function Pi(e){if(rs.add(e),!document.documentElement.classList.contains("sl-scroll-lock")){const t=rf()+af();let r=getComputedStyle(document.documentElement).scrollbarGutter;(!r||r==="auto")&&(r="stable"),t<2&&(r=""),document.documentElement.style.setProperty("--sl-scroll-lock-gutter",r),document.documentElement.classList.add("sl-scroll-lock"),document.documentElement.style.setProperty("--sl-scroll-lock-size",`${t}px`)}}function Ri(e){rs.delete(e),rs.size===0&&(document.documentElement.classList.remove("sl-scroll-lock"),document.documentElement.style.removeProperty("--sl-scroll-lock-size"))}function as(e,t,r="vertical",a="smooth"){const i=tf(e,t),n=i.top+t.scrollTop,o=i.left+t.scrollLeft,s=t.scrollLeft,l=t.scrollLeft+t.offsetWidth,c=t.scrollTop,d=t.scrollTop+t.offsetHeight;(r==="horizontal"||r==="both")&&(o<s?t.scrollTo({left:o,behavior:a}):o+e.clientWidth>l&&t.scrollTo({left:o-t.offsetWidth+e.clientWidth,behavior:a})),(r==="vertical"||r==="both")&&(n<c?t.scrollTo({top:n,behavior:a}):n+e.clientHeight>d&&t.scrollTo({top:n-t.offsetHeight+e.clientHeight,behavior:a}))}var Ps=e=>{var t;const{activeElement:r}=document;r&&e.contains(r)&&((t=document.activeElement)==null||t.blur())},nf=fe`
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
 */const Gr={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},Rs=e=>(...t)=>({_$litDirective$:e,values:t});let $s=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,a){this._$Ct=t,this._$AM=r,this._$Ci=a}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ne=Rs(class extends $s{constructor(e){if(super(e),e.type!==Gr.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(a=>a!=="")));for(const a in t)t[a]&&!this.nt?.has(a)&&this.st.add(a);return this.render(t)}const r=e.element.classList;for(const a of this.st)a in t||(r.remove(a),this.st.delete(a));for(const a in t){const i=!!t[a];i===this.st.has(a)||this.nt?.has(a)||(i?(r.add(a),this.st.add(a)):(r.remove(a),this.st.delete(a)))}return Jt}});/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const S0=Symbol.for(""),of=e=>{if(e?.r===S0)return e?._$litStatic$},Yn=(e,...t)=>({_$litStatic$:t.reduce((r,a,i)=>r+(n=>{if(n._$litStatic$!==void 0)return n._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${n}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(a)+e[i+1],e[0]),r:S0}),jl=new Map,sf=e=>(t,...r)=>{const a=r.length;let i,n;const o=[],s=[];let l,c=0,d=!1;for(;c<a;){for(l=t[c];c<a&&(n=r[c],(i=of(n))!==void 0);)l+=i+t[++c],d=!0;c!==a&&s.push(n),o.push(l),c++}if(c===a&&o.push(t[a]),d){const u=o.join("$$lit$$");(t=jl.get(u))===void 0&&(o.raw=o,jl.set(u,t=o)),r=s}return e(t,...r)},Hn=sf(L);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ge=e=>e??qe;var ut=class extends Be{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){const e=!!this.href,t=e?Yn`a`:Yn`button`;return Hn`
      <${t}
        part="base"
        class=${Ne({"icon-button":!0,"icon-button--disabled":!e&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${ge(e?void 0:this.disabled)}
        type=${ge(e?void 0:"button")}
        href=${ge(e?this.href:void 0)}
        target=${ge(e?this.target:void 0)}
        download=${ge(e?this.download:void 0)}
        rel=${ge(e&&this.target?"noreferrer noopener":void 0)}
        role=${ge(e?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${ge(this.name)}
          library=${ge(this.library)}
          src=${ge(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${t}>
    `}};ut.styles=[Xe,nf];ut.dependencies={"sl-icon":St};_([xe(".icon-button")],ut.prototype,"button",2);_([J()],ut.prototype,"hasFocus",2);_([P()],ut.prototype,"name",2);_([P()],ut.prototype,"library",2);_([P()],ut.prototype,"src",2);_([P()],ut.prototype,"href",2);_([P()],ut.prototype,"target",2);_([P()],ut.prototype,"download",2);_([P()],ut.prototype,"label",2);_([P({type:Boolean,reflect:!0})],ut.prototype,"disabled",2);var C0=new Map,lf=new WeakMap;function cf(e){return e??{keyframes:[],options:{duration:0}}}function Wl(e,t){return t.toLowerCase()==="rtl"?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function ot(e,t){C0.set(e,cf(t))}function Nt(e,t,r){const a=lf.get(e);if(a?.[t])return Wl(a[t],r.dir);const i=C0.get(t);return i?Wl(i,r.dir):{keyframes:[],options:{duration:0}}}function ea(e,t){return new Promise(r=>{function a(i){i.target===e&&(e.removeEventListener(t,a),r())}e.addEventListener(t,a)})}function zt(e,t,r){return new Promise(a=>{if(r?.duration===1/0)throw new Error("Promise-based animations must be finite.");const i=e.animate(t,xo(la({},r),{duration:df()?0:r.duration}));i.addEventListener("cancel",a,{once:!0}),i.addEventListener("finish",a,{once:!0})})}function df(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Qt(e){return Promise.all(e.getAnimations().map(t=>new Promise(r=>{t.cancel(),requestAnimationFrame(r)})))}var Mr=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=r=>{const a=r.target;(this.slotNames.includes("[default]")&&!a.name||a.name&&this.slotNames.includes(a.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===e.TEXT_NODE&&e.textContent.trim()!=="")return!0;if(e.nodeType===e.ELEMENT_NODE){const t=e;if(t.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};const is=new Set,Ka=new Map;let va,Ls="ltr",Ns="en";const F0=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(F0){const e=new MutationObserver(O0);Ls=document.documentElement.dir||"ltr",Ns=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function D0(...e){e.map(t=>{const r=t.$code.toLowerCase();Ka.has(r)?Ka.set(r,Object.assign(Object.assign({},Ka.get(r)),t)):Ka.set(r,t),va||(va=t)}),O0()}function O0(){F0&&(Ls=document.documentElement.dir||"ltr",Ns=document.documentElement.lang||navigator.language),[...is.keys()].map(e=>{typeof e.requestUpdate=="function"&&e.requestUpdate()})}let uf=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){is.add(this.host)}hostDisconnected(){is.delete(this.host)}dir(){return`${this.host.dir||Ls}`.toLowerCase()}lang(){return`${this.host.lang||Ns}`.toLowerCase()}getTranslationData(t){var r,a;let i;try{i=new Intl.Locale(t.replace(/_/g,"-"))}catch{return{locale:void 0,language:"",region:"",primary:void 0,secondary:void 0}}const n=i.language.toLowerCase(),o=(a=(r=i.region)===null||r===void 0?void 0:r.toLowerCase())!==null&&a!==void 0?a:"",s=Ka.get(`${n}-${o}`),l=Ka.get(n);return{locale:i,language:n,region:o,primary:s,secondary:l}}exists(t,r){var a;const{primary:i,secondary:n}=this.getTranslationData((a=r.lang)!==null&&a!==void 0?a:this.lang());return r=Object.assign({includeFallback:!1},r),!!(i&&i[t]||n&&n[t]||r.includeFallback&&va&&va[t])}term(t,...r){const{primary:a,secondary:i}=this.getTranslationData(this.lang());let n;if(a&&a[t])n=a[t];else if(i&&i[t])n=i[t];else if(va&&va[t])n=va[t];else return console.error(`No translation found for: ${String(t)}`),String(t);return typeof n=="function"?n(...r):n}date(t,r){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),r).format(t)}number(t,r){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),r).format(t)}relativeTime(t,r,a){return new Intl.RelativeTimeFormat(this.lang(),a).format(t,r)}};var I0={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>e===0?"No options selected":e===1?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};D0(I0);var hf=I0,tr=class extends uf{};D0(hf);function Gl(e){return e.charAt(0).toUpperCase()+e.slice(1)}var Wt=class extends Be{constructor(){super(...arguments),this.hasSlotController=new Mr(this,"footer"),this.localize=new tr(this),this.modal=new A0(this),this.open=!1,this.label="",this.placement="end",this.contained=!1,this.noHeader=!1,this.handleDocumentKeyDown=e=>{this.contained||e.key==="Escape"&&this.modal.isActive()&&this.open&&(e.stopImmediatePropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.drawer.hidden=!this.open,this.open&&(this.addOpenListeners(),this.contained||(this.modal.activate(),Pi(this)))}disconnectedCallback(){super.disconnectedCallback(),Ri(this),this.removeOpenListeners()}requestClose(e){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){const r=Nt(this,"drawer.denyClose",{dir:this.localize.dir()});zt(this.panel,r.keyframes,r.options);return}this.hide()}addOpenListeners(){var e;"CloseWatcher"in window?((e=this.closeWatcher)==null||e.destroy(),this.contained||(this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard"))):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var e;document.removeEventListener("keydown",this.handleDocumentKeyDown),(e=this.closeWatcher)==null||e.destroy()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),Pi(this));const e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([Qt(this.drawer),Qt(this.overlay)]),this.drawer.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")});const t=Nt(this,`drawer.show${Gl(this.placement)}`,{dir:this.localize.dir()}),r=Nt(this,"drawer.overlay.show",{dir:this.localize.dir()});await Promise.all([zt(this.panel,t.keyframes,t.options),zt(this.overlay,r.keyframes,r.options)]),this.emit("sl-after-show")}else{Ps(this),this.emit("sl-hide"),this.removeOpenListeners(),this.contained||(this.modal.deactivate(),Ri(this)),await Promise.all([Qt(this.drawer),Qt(this.overlay)]);const e=Nt(this,`drawer.hide${Gl(this.placement)}`,{dir:this.localize.dir()}),t=Nt(this,"drawer.overlay.hide",{dir:this.localize.dir()});await Promise.all([zt(this.overlay,t.keyframes,t.options).then(()=>{this.overlay.hidden=!0}),zt(this.panel,e.keyframes,e.options).then(()=>{this.panel.hidden=!0})]),this.drawer.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1;const r=this.originalTrigger;typeof r?.focus=="function"&&setTimeout(()=>r.focus()),this.emit("sl-after-hide")}}handleNoModalChange(){this.open&&!this.contained&&(this.modal.activate(),Pi(this)),this.open&&this.contained&&(this.modal.deactivate(),Ri(this))}async show(){if(!this.open)return this.open=!0,ea(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,ea(this,"sl-after-hide")}render(){return L`
      <div
        part="base"
        class=${Ne({drawer:!0,"drawer--open":this.open,"drawer--top":this.placement==="top","drawer--end":this.placement==="end","drawer--bottom":this.placement==="bottom","drawer--start":this.placement==="start","drawer--contained":this.contained,"drawer--fixed":!this.contained,"drawer--rtl":this.localize.dir()==="rtl","drawer--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="drawer__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${ge(this.noHeader?this.label:void 0)}
          aria-labelledby=${ge(this.noHeader?void 0:"title")}
          tabindex="0"
        >
          ${this.noHeader?"":L`
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
    `}};Wt.styles=[Xe,Yh];Wt.dependencies={"sl-icon-button":ut};_([xe(".drawer")],Wt.prototype,"drawer",2);_([xe(".drawer__panel")],Wt.prototype,"panel",2);_([xe(".drawer__overlay")],Wt.prototype,"overlay",2);_([P({type:Boolean,reflect:!0})],Wt.prototype,"open",2);_([P({reflect:!0})],Wt.prototype,"label",2);_([P({reflect:!0})],Wt.prototype,"placement",2);_([P({type:Boolean,reflect:!0})],Wt.prototype,"contained",2);_([P({attribute:"no-header",type:Boolean,reflect:!0})],Wt.prototype,"noHeader",2);_([Re("open",{waitUntilFirstUpdate:!0})],Wt.prototype,"handleOpenChange",1);_([Re("contained",{waitUntilFirstUpdate:!0})],Wt.prototype,"handleNoModalChange",1);ot("drawer.showTop",{keyframes:[{opacity:0,translate:"0 -100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});ot("drawer.hideTop",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 -100%"}],options:{duration:250,easing:"ease"}});ot("drawer.showEnd",{keyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});ot("drawer.hideEnd",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],options:{duration:250,easing:"ease"}});ot("drawer.showBottom",{keyframes:[{opacity:0,translate:"0 100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});ot("drawer.hideBottom",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 100%"}],options:{duration:250,easing:"ease"}});ot("drawer.showStart",{keyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});ot("drawer.hideStart",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],options:{duration:250,easing:"ease"}});ot("drawer.denyClose",{keyframes:[{scale:1},{scale:1.01},{scale:1}],options:{duration:250}});ot("drawer.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});ot("drawer.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});Wt.define("sl-drawer");ut.define("sl-icon-button");var ff=fe`
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
`,zs=class extends Be{constructor(){super(...arguments),this.localize=new tr(this)}render(){return L`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};zs.styles=[Xe,ff];var ki=new WeakMap,Ei=new WeakMap,Ti=new WeakMap,Mo=new WeakSet,Dn=new WeakMap,oi=class{constructor(e,t){this.handleFormData=r=>{const a=this.options.disabled(this.host),i=this.options.name(this.host),n=this.options.value(this.host),o=this.host.tagName.toLowerCase()==="sl-button";this.host.isConnected&&!a&&!o&&typeof i=="string"&&i.length>0&&typeof n<"u"&&(Array.isArray(n)?n.forEach(s=>{r.formData.append(i,s.toString())}):r.formData.append(i,n.toString()))},this.handleFormSubmit=r=>{var a;const i=this.options.disabled(this.host),n=this.options.reportValidity;this.form&&!this.form.noValidate&&((a=ki.get(this.form))==null||a.forEach(o=>{this.setUserInteracted(o,!0)})),this.form&&!this.form.noValidate&&!i&&!n(this.host)&&(r.preventDefault(),r.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),Dn.set(this.host,[])},this.handleInteraction=r=>{const a=Dn.get(this.host);a.includes(r.type)||a.push(r.type),a.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const r=this.form.querySelectorAll("*");for(const a of r)if(typeof a.checkValidity=="function"&&!a.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const r=this.form.querySelectorAll("*");for(const a of r)if(typeof a.reportValidity=="function"&&!a.reportValidity())return!1}return!0},(this.host=e).addController(this),this.options=la({form:r=>{const a=r.form;if(a){const n=r.getRootNode().querySelector(`#${a}`);if(n)return n}return r.closest("form")},name:r=>r.name,value:r=>r.value,defaultValue:r=>r.defaultValue,disabled:r=>{var a;return(a=r.disabled)!=null?a:!1},reportValidity:r=>typeof r.reportValidity=="function"?r.reportValidity():!0,checkValidity:r=>typeof r.checkValidity=="function"?r.checkValidity():!0,setValue:(r,a)=>r.value=a,assumeInteractionOn:["sl-input"]},t)}hostConnected(){const e=this.options.form(this.host);e&&this.attachForm(e),Dn.set(this.host,[]),this.options.assumeInteractionOn.forEach(t=>{this.host.addEventListener(t,this.handleInteraction)})}hostDisconnected(){this.detachForm(),Dn.delete(this.host),this.options.assumeInteractionOn.forEach(e=>{this.host.removeEventListener(e,this.handleInteraction)})}hostUpdated(){const e=this.options.form(this.host);e||this.detachForm(),e&&this.form!==e&&(this.detachForm(),this.attachForm(e)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(e){e?(this.form=e,ki.has(this.form)?ki.get(this.form).add(this.host):ki.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),Ei.has(this.form)||(Ei.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),Ti.has(this.form)||(Ti.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const e=ki.get(this.form);e&&(e.delete(this.host),e.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),Ei.has(this.form)&&(this.form.reportValidity=Ei.get(this.form),Ei.delete(this.form)),Ti.has(this.form)&&(this.form.checkValidity=Ti.get(this.form),Ti.delete(this.form)),this.form=void 0))}setUserInteracted(e,t){t?Mo.add(e):Mo.delete(e),e.requestUpdate()}doAction(e,t){if(this.form){const r=document.createElement("button");r.type=e,r.style.position="absolute",r.style.width="0",r.style.height="0",r.style.clipPath="inset(50%)",r.style.overflow="hidden",r.style.whiteSpace="nowrap",t&&(r.name=t.name,r.value=t.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(a=>{t.hasAttribute(a)&&r.setAttribute(a,t.getAttribute(a))})),this.form.append(r),r.click(),r.remove()}}getForm(){var e;return(e=this.form)!=null?e:null}reset(e){this.doAction("reset",e)}submit(e){this.doAction("submit",e)}setValidity(e){const t=this.host,r=!!Mo.has(t),a=!!t.required;t.toggleAttribute("data-required",a),t.toggleAttribute("data-optional",!a),t.toggleAttribute("data-invalid",!e),t.toggleAttribute("data-valid",e),t.toggleAttribute("data-user-invalid",!e&&r),t.toggleAttribute("data-user-valid",e&&r)}updateValidity(){const e=this.host;this.setValidity(e.validity.valid)}emitInvalidEvent(e){const t=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});e||t.preventDefault(),this.host.dispatchEvent(t)||e?.preventDefault()}},Ms=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1});Object.freeze(xo(la({},Ms),{valid:!1,valueMissing:!0}));Object.freeze(xo(la({},Ms),{valid:!1,customError:!0}));var pf=fe`
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
`,ze=class extends Be{constructor(){super(...arguments),this.formControlController=new oi(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new Mr(this,"[default]","prefix","suffix"),this.localize=new tr(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:Ms}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(e){this.isButton()&&(this.button.setCustomValidity(e),this.formControlController.updateValidity())}render(){const e=this.isLink(),t=e?Yn`a`:Yn`button`;return Hn`
      <${t}
        part="base"
        class=${Ne({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${ge(e?void 0:this.disabled)}
        type=${ge(e?void 0:this.type)}
        title=${this.title}
        name=${ge(e?void 0:this.name)}
        value=${ge(e?void 0:this.value)}
        href=${ge(e&&!this.disabled?this.href:void 0)}
        target=${ge(e?this.target:void 0)}
        download=${ge(e?this.download:void 0)}
        rel=${ge(e?this.rel:void 0)}
        role=${ge(e?void 0:"button")}
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
        ${this.caret?Hn` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?Hn`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${t}>
    `}};ze.styles=[Xe,pf];ze.dependencies={"sl-icon":St,"sl-spinner":zs};_([xe(".button")],ze.prototype,"button",2);_([J()],ze.prototype,"hasFocus",2);_([J()],ze.prototype,"invalid",2);_([P()],ze.prototype,"title",2);_([P({reflect:!0})],ze.prototype,"variant",2);_([P({reflect:!0})],ze.prototype,"size",2);_([P({type:Boolean,reflect:!0})],ze.prototype,"caret",2);_([P({type:Boolean,reflect:!0})],ze.prototype,"disabled",2);_([P({type:Boolean,reflect:!0})],ze.prototype,"loading",2);_([P({type:Boolean,reflect:!0})],ze.prototype,"outline",2);_([P({type:Boolean,reflect:!0})],ze.prototype,"pill",2);_([P({type:Boolean,reflect:!0})],ze.prototype,"circle",2);_([P()],ze.prototype,"type",2);_([P()],ze.prototype,"name",2);_([P()],ze.prototype,"value",2);_([P()],ze.prototype,"href",2);_([P()],ze.prototype,"target",2);_([P()],ze.prototype,"rel",2);_([P()],ze.prototype,"download",2);_([P()],ze.prototype,"form",2);_([P({attribute:"formaction"})],ze.prototype,"formAction",2);_([P({attribute:"formenctype"})],ze.prototype,"formEnctype",2);_([P({attribute:"formmethod"})],ze.prototype,"formMethod",2);_([P({attribute:"formnovalidate",type:Boolean})],ze.prototype,"formNoValidate",2);_([P({attribute:"formtarget"})],ze.prototype,"formTarget",2);_([Re("disabled",{waitUntilFirstUpdate:!0})],ze.prototype,"handleDisabledChange",1);ze.define("sl-button");var gf=fe`
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
`,bo=class extends Be{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};bo.styles=[Xe,gf];_([P({type:Boolean,reflect:!0})],bo.prototype,"vertical",2);_([Re("vertical")],bo.prototype,"handleVerticalChange",1);bo.define("sl-divider");function mf(e){for(var t=[],r=0;r<e.length;){var a=e[r];if(a==="*"||a==="+"||a==="?"){t.push({type:"MODIFIER",index:r,value:e[r++]});continue}if(a==="\\"){t.push({type:"ESCAPED_CHAR",index:r++,value:e[r++]});continue}if(a==="{"){t.push({type:"OPEN",index:r,value:e[r++]});continue}if(a==="}"){t.push({type:"CLOSE",index:r,value:e[r++]});continue}if(a===":"){for(var i="",n=r+1;n<e.length;){var o=e.charCodeAt(n);if(o>=48&&o<=57||o>=65&&o<=90||o>=97&&o<=122||o===95){i+=e[n++];continue}break}if(!i)throw new TypeError("Missing parameter name at ".concat(r));t.push({type:"NAME",index:r,value:i}),r=n;continue}if(a==="("){var s=1,l="",n=r+1;if(e[n]==="?")throw new TypeError('Pattern cannot start with "?" at '.concat(n));for(;n<e.length;){if(e[n]==="\\"){l+=e[n++]+e[n++];continue}if(e[n]===")"){if(s--,s===0){n++;break}}else if(e[n]==="("&&(s++,e[n+1]!=="?"))throw new TypeError("Capturing groups are not allowed at ".concat(n));l+=e[n++]}if(s)throw new TypeError("Unbalanced pattern at ".concat(r));if(!l)throw new TypeError("Missing pattern at ".concat(r));t.push({type:"PATTERN",index:r,value:l}),r=n;continue}t.push({type:"CHAR",index:r,value:e[r++]})}return t.push({type:"END",index:r,value:""}),t}function Bs(e,t){t===void 0&&(t={});for(var r=mf(e),a=t.prefixes,i=a===void 0?"./":a,n=t.delimiter,o=n===void 0?"/#?":n,s=[],l=0,c=0,d="",u=function(O){if(c<r.length&&r[c].type===O)return r[c++].value},f=function(O){var j=u(O);if(j!==void 0)return j;var U=r[c],N=U.type,Z=U.index;throw new TypeError("Unexpected ".concat(N," at ").concat(Z,", expected ").concat(O))},h=function(){for(var O="",j;j=u("CHAR")||u("ESCAPED_CHAR");)O+=j;return O},p=function(O){for(var j=0,U=o;j<U.length;j++){var N=U[j];if(O.indexOf(N)>-1)return!0}return!1},g=function(O){var j=s[s.length-1],U=O||(j&&typeof j=="string"?j:"");if(j&&!U)throw new TypeError('Must have text between two parameters, missing text after "'.concat(j.name,'"'));return!U||p(U)?"[^".concat(Xr(o),"]+?"):"(?:(?!".concat(Xr(U),")[^").concat(Xr(o),"])+?")};c<r.length;){var m=u("CHAR"),w=u("NAME"),S=u("PATTERN");if(w||S){var x=m||"";i.indexOf(x)===-1&&(d+=x,x=""),d&&(s.push(d),d=""),s.push({name:w||l++,prefix:x,suffix:"",pattern:S||g(x),modifier:u("MODIFIER")||""});continue}var D=m||u("ESCAPED_CHAR");if(D){d+=D;continue}d&&(s.push(d),d="");var M=u("OPEN");if(M){var x=h(),I=u("NAME")||"",T=u("PATTERN")||"",B=h();f("CLOSE"),s.push({name:I||(T?l++:""),pattern:I&&!T?g(x):T,prefix:x,suffix:B,modifier:u("MODIFIER")||""});continue}f("END")}return s}function P0(e,t){return R0(Bs(e,t),t)}function R0(e,t){t===void 0&&(t={});var r=Us(t),a=t.encode,i=a===void 0?function(l){return l}:a,n=t.validate,o=n===void 0?!0:n,s=e.map(function(l){if(typeof l=="object")return new RegExp("^(?:".concat(l.pattern,")$"),r)});return function(l){for(var c="",d=0;d<e.length;d++){var u=e[d];if(typeof u=="string"){c+=u;continue}var f=l?l[u.name]:void 0,h=u.modifier==="?"||u.modifier==="*",p=u.modifier==="*"||u.modifier==="+";if(Array.isArray(f)){if(!p)throw new TypeError('Expected "'.concat(u.name,'" to not repeat, but got an array'));if(f.length===0){if(h)continue;throw new TypeError('Expected "'.concat(u.name,'" to not be empty'))}for(var g=0;g<f.length;g++){var m=i(f[g],u);if(o&&!s[d].test(m))throw new TypeError('Expected all "'.concat(u.name,'" to match "').concat(u.pattern,'", but got "').concat(m,'"'));c+=u.prefix+m+u.suffix}continue}if(typeof f=="string"||typeof f=="number"){var m=i(String(f),u);if(o&&!s[d].test(m))throw new TypeError('Expected "'.concat(u.name,'" to match "').concat(u.pattern,'", but got "').concat(m,'"'));c+=u.prefix+m+u.suffix;continue}if(!h){var w=p?"an array":"a string";throw new TypeError('Expected "'.concat(u.name,'" to be ').concat(w))}}return c}}function Xr(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function Us(e){return e&&e.sensitive?"":"i"}function vf(e,t){if(!t)return e;for(var r=/\((?:\?<(.*?)>)?(?!\?)/g,a=0,i=r.exec(e.source);i;)t.push({name:i[1]||a++,prefix:"",suffix:"",modifier:"",pattern:""}),i=r.exec(e.source);return e}function xf(e,t,r){var a=e.map(function(i){return $0(i,t,r).source});return new RegExp("(?:".concat(a.join("|"),")"),Us(r))}function bf(e,t,r){return wf(Bs(e,r),t,r)}function wf(e,t,r){r===void 0&&(r={});for(var a=r.strict,i=a===void 0?!1:a,n=r.start,o=n===void 0?!0:n,s=r.end,l=s===void 0?!0:s,c=r.encode,d=c===void 0?function(j){return j}:c,u=r.delimiter,f=u===void 0?"/#?":u,h=r.endsWith,p=h===void 0?"":h,g="[".concat(Xr(p),"]|$"),m="[".concat(Xr(f),"]"),w=o?"^":"",S=0,x=e;S<x.length;S++){var D=x[S];if(typeof D=="string")w+=Xr(d(D));else{var M=Xr(d(D.prefix)),I=Xr(d(D.suffix));if(D.pattern)if(t&&t.push(D),M||I)if(D.modifier==="+"||D.modifier==="*"){var T=D.modifier==="*"?"?":"";w+="(?:".concat(M,"((?:").concat(D.pattern,")(?:").concat(I).concat(M,"(?:").concat(D.pattern,"))*)").concat(I,")").concat(T)}else w+="(?:".concat(M,"(").concat(D.pattern,")").concat(I,")").concat(D.modifier);else{if(D.modifier==="+"||D.modifier==="*")throw new TypeError('Can not repeat "'.concat(D.name,'" without a prefix and suffix'));w+="(".concat(D.pattern,")").concat(D.modifier)}else w+="(?:".concat(M).concat(I,")").concat(D.modifier)}}if(l)i||(w+="".concat(m,"?")),w+=r.endsWith?"(?=".concat(g,")"):"$";else{var B=e[e.length-1],O=typeof B=="string"?m.indexOf(B[B.length-1])>-1:B===void 0;i||(w+="(?:".concat(m,"(?=").concat(g,"))?")),O||(w+="(?=".concat(m,"|").concat(g,")"))}return new RegExp(w,Us(r))}function $0(e,t,r){return e instanceof RegExp?vf(e,t):Array.isArray(e)?xf(e,t,r):bf(e,t,r)}const _a=Symbol("NotFoundResult");class L0 extends Error{code;context;constructor(t){super(Jr(`Page not found (${t.pathname})`)),this.context=t,this.code=404}}function xa(e){return typeof e=="object"&&!!e}function Xi(e){return typeof e=="function"}function br(e){return typeof e=="string"}function qn(e=[]){return Array.isArray(e)?e:[e]}function Jr(e){return`[Vaadin.Router] ${e}`}function N0(e){return new L0(e)}function z0(e){return(Array.isArray(e)?e[0]:e)??""}function Zn(e){return z0(e?.path)}function yf(e){return Array.isArray(e)&&e.length>0?e:void 0}const ns=new Map;ns.set("|false",{keys:[],pattern:/(?:)/u});function Kl(e){try{return decodeURIComponent(e)}catch{return e}}function _f(e,t,r=!1,a=[],i){const n=`${e}|${String(r)}`,o=z0(t);let s=ns.get(n);if(!s){const d=[];s={keys:d,pattern:$0(e,d,{end:r,strict:e===""})},ns.set(n,s)}const l=s.pattern.exec(o);if(!l)return null;const c={...i};for(let d=1;d<l.length;d++){const u=s.keys[d-1],f=u.name,h=l[d];(h!==void 0||!Object.prototype.hasOwnProperty.call(c,f))&&(u.modifier==="+"||u.modifier==="*"?c[f]=h?h.split(/[/?#]/u).map(Kl):[]:c[f]=h&&Kl(h))}return{keys:[...a,...s.keys],params:c,path:l[0]}}var kf=_f;function M0(e,t,r,a,i){let n,o,s=0,l=Zn(e);return l.startsWith("/")&&(r&&(l=l.substring(1)),r=!0),{next(c){if(e===c)return{done:!0,value:void 0};e.__children??=yf(e.children);const d=e.__children??[],u=!e.__children&&!e.children;if(!n&&(n=kf(l,t,u,a,i),n))return{value:{keys:n.keys,params:n.params,path:n.path,route:e}};if(n&&d.length>0)for(;s<d.length;){if(!o){const h=d[s];h.parent=e;let p=n.path.length;p>0&&t.charAt(p)==="/"&&(p+=1),o=M0(h,t.substring(p),r,n.keys,n.params)}const f=o.next(c);if(!f.done)return{done:!1,value:f.value};o=null,s+=1}return{done:!0,value:void 0}}}}var Ef=M0;function Tf(e){if(Xi(e.route.action))return e.route.action(e)}function Af(e,t){let r=e;for(;r;)if(r=r.parent,r===t)return!0;return!1}function Sf(e){return!!e&&typeof e=="object"&&"next"in e&&"params"in e&&"result"in e&&"route"in e}class Cf extends Error{cause;code;context;constructor(t,r){let a=`Path '${t.pathname}' is not properly resolved due to an error.`;const i=Zn(t.route);i&&(a+=` Resolution had failed on route: '${i}'`),super(a),this.cause=r?.cause,this.code=r?.code,this.context=t}warn(){console.warn(this.message)}}function Ff(e,t){const{path:r,route:a}=t;if(a&&!a.__synthetic){const i={path:r,route:a};if(a.parent&&e.chain)for(let n=e.chain.length-1;n>=0&&e.chain[n].route!==a.parent;n--)e.chain.pop();e.chain?.push(i)}}class Df{baseUrl;#r;errorHandler;resolveRoute;#e;constructor(t,{baseUrl:r="",context:a,errorHandler:i,resolveRoute:n=Tf}={}){if(Object(t)!==t)throw new TypeError("Invalid routes");this.baseUrl=r,this.errorHandler=i,this.resolveRoute=n,Array.isArray(t)?this.#e={__children:t,__synthetic:!0,action:()=>{},path:""}:this.#e={...t,parent:void 0},this.#r={...a,hash:"",async next(){return _a},params:{},pathname:"",resolver:this,route:this.#e,search:"",chain:[]}}get root(){return this.#e}get context(){return this.#r}get __effectiveBaseUrl(){return this.baseUrl?new URL(this.baseUrl,document.baseURI||document.URL).href.replace(/[^/]*$/u,""):""}getRoutes(){return[...this.#e.__children??[]]}removeRoutes(){this.#e.__children=[]}async resolve(t){const r=this,a={...this.#r,...br(t)?{pathname:t}:t,next:c},i=Ef(this.#e,this.__normalizePathname(a.pathname)??a.pathname,!!this.baseUrl),n=this.resolveRoute;let o=null,s=null,l=a;async function c(d=!1,u=o?.value?.route,f){const h=f===null?o?.value?.route:void 0;if(o=s??i.next(h),s=null,!d&&(o.done||!Af(o.value.route,u)))return s=o,_a;if(o.done)throw N0(a);l={...a,params:o.value.params,route:o.value.route,chain:l.chain?.slice()},Ff(l,o.value);const p=await n(l);return p!=null&&p!==_a?(l.result=Sf(p)?p.result:p,r.#r=l,l):await c(d,u,p)}try{return await c(!0,this.#e)}catch(d){const u=d instanceof L0?d:new Cf(l,{code:500,cause:d});if(this.errorHandler)return l.result=this.errorHandler(u),l;throw d}}setRoutes(t){return this.#e.__children=[...qn(t)],{}}__normalizePathname(t){if(!this.baseUrl)return t;const r=this.__effectiveBaseUrl,a=t.startsWith("/")?new URL(r).origin+t:`./${t}`,i=new URL(a,r).href;if(i.startsWith(r))return i.slice(r.length)}addRoutes(t){return this.#e.__children=[...this.#e.__children??[],...qn(t)],this.getRoutes()}}var B0=Df;function U0(e,t,r,a){const i=t.name??a?.(t);if(i&&(e.has(i)?e.get(i)?.push(t):e.set(i,[t])),Array.isArray(r))for(const n of r)n.parent=t,U0(e,n,n.__children??n.children,a)}function Xl(e,t){const r=e.get(t);if(r){if(r.length>1)throw new Error(`Duplicate route with name "${t}". Try seting unique 'name' route properties.`);return r[0]}}function Of(e,t={}){if(!(e instanceof B0))throw new TypeError("An instance of Resolver is expected");const r=new Map,a=new Map;return(i,n)=>{let o=Xl(a,i);if(!o&&(a.clear(),U0(a,e.root,e.root.__children,t.cacheKeyProvider),o=Xl(a,i),!o))throw new Error(`Route "${i}" not found`);let s=o.fullPath?r.get(o.fullPath):void 0;if(!s){let d=Zn(o),u=o.parent;for(;u;){const p=Zn(u);p&&(d=`${p.replace(/\/$/u,"")}/${d.replace(/^\//u,"")}`),u=u.parent}const f=Bs(d),h=Object.create(null);for(const p of f)br(p)||(h[p.name]=!0);s={keys:h,tokens:f},r.set(d,s),o.fullPath=d}let c=R0(s.tokens,{encode:encodeURIComponent,...t})(n)||"/";if(t.stringifyQueryParams&&n){const d={};for(const[f,h]of Object.entries(n))!(f in s.keys)&&h&&(d[f]=h);const u=t.stringifyQueryParams(d);u&&(c+=u.startsWith("?")?u:`?${u}`)}return c}}var If=Of;const Pf=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,jn=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function Rf(){function e(){return!0}return V0(e)}function $f(){try{return Lf()?!0:Nf()?jn?!zf():!Rf():!1}catch{return!1}}function Lf(){return localStorage.getItem("vaadin.developmentmode.force")}function Nf(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function zf(){return!!(jn&&Object.keys(jn).map(t=>jn[t]).filter(t=>t.productionMode).length>0)}function V0(e,t){if(typeof e!="function")return;const r=Pf.exec(e.toString());if(r)try{e=new Function(r[1])}catch(a){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",a)}return e(t)}window.Vaadin=window.Vaadin||{};const Yl=function(e,t){if(window.Vaadin.developmentMode)return V0(e,t)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=$f());function Mf(){/*! vaadin-dev-mode:start
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

  vaadin-dev-mode:end **/}const Bf=function(){if(typeof Yl=="function")return Yl(Mf)};function Uf(e,t=window.Vaadin??={}){t.registrations??=[],t.registrations.push({is:"@vaadin/router",version:"2.0.1"})}Uf();Bf();const Vf=e=>{const t=getComputedStyle(e).getPropertyValue("animation-name");return t&&t!=="none"},Hf=(e,t)=>{const r=()=>{e.removeEventListener("animationend",r),t()};e.addEventListener("animationend",r)};async function jf(e,t){return e.classList.add(t),await new Promise(r=>{if(Vf(e)){const a=e.getBoundingClientRect(),i=`height: ${a.bottom-a.top}px; width: ${a.right-a.left}px`;e.setAttribute("style",`position: absolute; ${i}`),Hf(e,()=>{e.classList.remove(t),e.removeAttribute("style"),r()})}else e.classList.remove(t),r()})}var ql=jf;function H0(e){if(!e||!br(e.path))throw new Error(Jr('Expected route config to be an object with a "path" string property, or an array of such objects'));if(!Xi(e.action)&&!Array.isArray(e.children)&&!Xi(e.children)&&!br(e.component)&&!br(e.redirect))throw new Error(Jr(`Expected route config "${e.path}" to include either "component, redirect" or "action" function but none found.`));e.redirect&&["bundle","component"].forEach(t=>{t in e&&console.warn(Jr(`Route config "${String(e.path)}" has both "redirect" and "${t}" properties, and "redirect" will always override the latter. Did you mean to only use "${t}"?`))})}function Zl(e){qn(e).forEach(t=>H0(t))}function Wf({next:e,...t}){return t}function Wn(e,t){const r=t.__effectiveBaseUrl;return r?new URL(e.replace(/^\//u,""),r).pathname:e}function j0(e){return e.map(t=>t.path).reduce((t,r)=>r.length?`${t.replace(/\/$/u,"")}/${r.replace(/^\//u,"")}`:t,"")}function Gf(e){return j0(e.map(t=>t.route))}function or({chain:e=[],hash:t="",params:r={},pathname:a="",redirectFrom:i,resolver:n,search:o=""},s){const l=e.map(c=>c.route);return{baseUrl:n?.baseUrl??"",getUrl:(c={})=>n?Wn(P0(Gf(e))({...r,...c}),n):"",hash:t,params:r,pathname:a,redirectFrom:i,route:s??(Array.isArray(l)?l.at(-1):void 0)??null,routes:l,search:o,searchParams:new URLSearchParams(o)}}function Jl(e,t){const r={...e.params};return{redirect:{from:e.pathname,params:r,pathname:t}}}function Kf(e,t){if(t.location=or(e),e.chain){const r=e.chain.map(a=>a.route).indexOf(e.route);e.chain[r].element=t}return t}function Gn(e,t,...r){if(typeof e=="function")return e.apply(t,r)}function Ql(e,t,...r){return a=>a&&xa(a)&&("cancel"in a||"redirect"in a)?a:Gn(t?.[e],t,...r)}function Xf(e,t){if(!Array.isArray(e)&&!xa(e))throw new Error(Jr(`Incorrect "children" value for the route ${String(t.path)}: expected array or object, but got ${String(e)}`));const r=qn(e);r.forEach(a=>H0(a)),t.__children=r}function $i(e,t){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${e}`,{cancelable:e==="go",detail:t}))}function Yf(e){if(typeof e!="object")return String(e);const[t="Unknown"]=/ (.*)\]$/u.exec(String(e))??[];return t==="Object"||t==="Array"?`${t} ${JSON.stringify(e)}`:t}function qf(e){const{port:t,protocol:r}=e,n=r==="http:"&&t==="80"||r==="https:"&&t==="443"?e.hostname:e.host;return`${r}//${n}`}function ec(e){if(e instanceof Element)return e.nodeName.toLowerCase()}function tc(e){if(e.defaultPrevented||e.button!==0||e.shiftKey||e.ctrlKey||e.altKey||e.metaKey)return;let t=e.target;const r=e instanceof MouseEvent?e.composedPath():e.path??[];for(let l=0;l<r.length;l++){const c=r[l];if("nodeName"in c&&c.nodeName.toLowerCase()==="a"){t=c;break}}for(;t&&t instanceof Node&&ec(t)!=="a";)t=t.parentNode;if(!t||ec(t)!=="a")return;const a=t;if(a.target&&a.target.toLowerCase()!=="_self"||a.hasAttribute("download")||a.hasAttribute("router-ignore")||a.pathname===window.location.pathname&&a.hash!==""||(a.origin||qf(a))!==window.location.origin)return;const{hash:n,pathname:o,search:s}=a;$i("go",{hash:n,pathname:o,search:s})&&e instanceof MouseEvent&&(e.preventDefault(),e.type==="click"&&window.scrollTo(0,0))}const Zf={activate(){window.document.addEventListener("click",tc)},inactivate(){window.document.removeEventListener("click",tc)}};var Jf=Zf;function rc(e){if(e.state==="vaadin-router-ignore")return;const{hash:t,pathname:r,search:a}=window.location;$i("go",{hash:t,pathname:r,search:a})}const Qf={activate(){window.addEventListener("popstate",rc)},inactivate(){window.removeEventListener("popstate",rc)}};var ep=Qf;let ac=[];const tp={CLICK:Jf,POPSTATE:ep};function ic(e=[]){ac.forEach(t=>t.inactivate()),e.forEach(t=>t.activate()),ac=e}const rp=256;function Ai(){return{cancel:!0}}const nc={__renderId:-1,params:{},route:{__synthetic:!0,children:[],path:"",action(){}},pathname:"",async next(){return _a}};class ap extends B0{location=or({resolver:this});ready=Promise.resolve(this.location);#r=new WeakSet;#e=new WeakSet;#d=this.#x.bind(this);#o=0;#n;__previousContext;#s;#a=null;#t=null;constructor(t,r){const i=document.head.querySelector("base")?.getAttribute("href");super([],{baseUrl:i?new URL(i,document.URL).href.replace(/[^/]*$/u,""):void 0,...r,resolveRoute:async n=>await this.#b(n)}),ic(Object.values(tp)),this.setOutlet(t),this.subscribe()}async#b(t){const{route:r}=t;if(Xi(r.children)){let i=await r.children(Wf(t));Xi(r.children)||({children:i}=r),Xf(i,r)}const a={component:i=>{const n=document.createElement(i);return this.#e.add(n),n},prevent:Ai,redirect:i=>Jl(t,i)};return await Promise.resolve().then(async()=>{if(this.#i(t))return await Gn(r.action,r,t,a)}).then(i=>{if(i!=null&&(typeof i=="object"||typeof i=="symbol")&&(i instanceof HTMLElement||i===_a||xa(i)&&"redirect"in i))return i;if(br(r.redirect))return a.redirect(r.redirect)}).then(i=>{if(i!=null)return i;if(br(r.component))return a.component(r.component)})}setOutlet(t){t&&this.#m(t),this.#n=t}getOutlet(){return this.#n}async setRoutes(t,r=!1){return this.__previousContext=void 0,this.#s=void 0,Zl(t),super.setRoutes(t),r||this.#x(),await this.ready}addRoutes(t){return Zl(t),super.addRoutes(t)}async render(t,r=!1){this.#o+=1;const a=this.#o,i={...nc,...br(t)?{hash:"",search:"",pathname:t}:t,__renderId:a};return this.ready=this.#w(i,r),await this.ready}async#w(t,r){const{__renderId:a}=t;try{const i=await this.resolve(t),n=await this.#l(i);if(!this.#i(n))return this.location;const o=this.__previousContext;if(n===o)return this.#c(o,!0),this.location;if(this.location=or(n),r&&this.#c(n,a===1),$i("location-changed",{router:this,location:this.location}),n.__skipAttach)return this.#v(n,o),this.__previousContext=n,this.location;this.#k(n,o);const s=this.#C(n);if(this.#S(n),this.#A(n,o),await s,this.#i(n))return this.#E(),this.__previousContext=n,this.location}catch(i){if(a===this.#o){r&&this.#c(this.context);for(const n of this.#n?.children??[])n.remove();throw this.location=or(Object.assign(t,{resolver:this})),$i("error",{router:this,error:i,...t}),i}}return this.location}async#l(t,r=t){const a=await this.#u(r),n=a!==r?a:t,s=Wn(j0(a.chain??[]),this)===a.pathname,l=async(d,u=d.route,f)=>{const h=await d.next(!1,u,f);return h===null||h===_a?s?d:u.parent!=null?await l(d,u.parent,h):h:h},c=await l(a);if(c==null||c===_a)throw N0(n);return c!==a?await this.#l(n,c):await this.#y(a)}async#u(t){const{result:r}=t;if(r instanceof HTMLElement)return Kf(t,r),t;if(r&&"redirect"in r){const a=await this.#g(r.redirect,t.__redirectCount,t.__renderId);return await this.#u(a)}throw r instanceof Error?r:new Error(Jr(`Invalid route resolution result for path "${t.pathname}". Expected redirect object or HTML element, but got: "${Yf(r)}". Double check the action return value for the route.`))}async#y(t){return await this.#_(t).then(async r=>r===this.__previousContext||r===t?r:await this.#l(r))}async#_(t){const r=this.__previousContext??{},a=r.chain??[],i=t.chain??[];let n=Promise.resolve(void 0);const o=s=>Jl(t,s);if(t.__divergedChainIndex=0,t.__skipAttach=!1,a.length){for(let s=0;s<Math.min(a.length,i.length)&&!(a[s].route!==i[s].route||a[s].path!==i[s].path&&a[s].element!==i[s].element||!this.#p(a[s].element,i[s].element));t.__divergedChainIndex++,s++);if(t.__skipAttach=i.length===a.length&&t.__divergedChainIndex===i.length&&this.#p(t.result,r.result),t.__skipAttach){for(let s=i.length-1;s>=0;s--)n=this.#h(n,t,{prevent:Ai},a[s]);for(let s=0;s<i.length;s++)n=this.#f(n,t,{prevent:Ai,redirect:o},i[s]),a[s].element.location=or(t,a[s].route)}else for(let s=a.length-1;s>=t.__divergedChainIndex;s--)n=this.#h(n,t,{prevent:Ai},a[s])}if(!t.__skipAttach)for(let s=0;s<i.length;s++)s<t.__divergedChainIndex?s<a.length&&a[s].element&&(a[s].element.location=or(t,a[s].route)):(n=this.#f(n,t,{prevent:Ai,redirect:o},i[s]),i[s].element&&(i[s].element.location=or(t,i[s].route)));return await n.then(async s=>{if(s&&xa(s)){if("cancel"in s&&this.__previousContext)return this.__previousContext.__renderId=t.__renderId,this.__previousContext;if("redirect"in s)return await this.#g(s.redirect,t.__redirectCount,t.__renderId)}return t})}async#h(t,r,a,i){const n=or(r);let o=await t;if(this.#i(r)&&(o=Ql("onBeforeLeave",i.element,n,a,this)(o)),!(xa(o)&&"redirect"in o))return o}async#f(t,r,a,i){const n=or(r,i.route),o=await t;if(this.#i(r))return Ql("onBeforeEnter",i.element,n,a,this)(o)}#p(t,r){return t instanceof Element&&r instanceof Element?this.#e.has(t)&&this.#e.has(r)?t.localName===r.localName:t===r:!1}#i(t){return t.__renderId===this.#o}async#g(t,r=0,a=0){if(r>rp)throw new Error(Jr(`Too many redirects when rendering ${t.from}`));return await this.resolve({...nc,pathname:this.urlForPath(t.pathname,t.params),redirectFrom:t.from,__redirectCount:r+1,__renderId:a})}#m(t=this.#n){if(!(t instanceof Element||t instanceof DocumentFragment))throw new TypeError(Jr(`Expected router outlet to be a valid DOM Element | DocumentFragment (but got ${t})`))}#c({pathname:t,search:r="",hash:a=""},i){if(window.location.pathname!==t||window.location.search!==r||window.location.hash!==a){const n=i?"replaceState":"pushState";window.history[n](null,document.title,t+r+a),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}#v(t,r){let a=this.#n;for(let i=0;i<(t.__divergedChainIndex??0);i++){const n=r?.chain?.[i].element;if(n)if(n.parentNode===a)t.chain[i].element=n,a=n;else break}return a}#k(t,r){this.#m(),this.#T();const a=this.#v(t,r);this.#a=[],this.#t=Array.from(a?.children??[]).filter(n=>this.#r.has(n)&&n!==t.result);let i=a;for(let n=t.__divergedChainIndex??0;n<(t.chain?.length??0);n++){const o=t.chain[n].element;o&&(i?.appendChild(o),this.#r.add(o),i===a&&this.#a.push(o),i=o)}}#E(){if(this.#t)for(const t of this.#t)t.remove();this.#t=null,this.#a=null}#T(){if(this.#t&&this.#a){for(const t of this.#a)t.remove();this.#t=null,this.#a=null}}#A(t,r){if(!(!r?.chain||t.__divergedChainIndex==null))for(let a=r.chain.length-1;a>=t.__divergedChainIndex&&this.#i(t);a--){const i=r.chain[a].element;if(i)try{const n=or(t);Gn(i.onAfterLeave,i,n,{},this)}finally{if(this.#t?.includes(i))for(const n of i.children)n.remove()}}}#S(t){if(!(!t.chain||t.__divergedChainIndex==null))for(let r=t.__divergedChainIndex;r<t.chain.length&&this.#i(t);r++){const a=t.chain[r].element;if(a){const i=or(t,t.chain[r].route);Gn(a.onAfterEnter,a,i,{},this)}}}async#C(t){const r=this.#t?.[0],a=this.#a?.[0],i=[],{chain:n=[]}=t;let o;for(let s=n.length-1;s>=0;s--)if(n[s].route.animate){o=n[s].route.animate;break}if(r&&a&&o){const s=xa(o)&&o.leave?o.leave:"leaving",l=xa(o)&&o.enter?o.enter:"entering";i.push(ql(r,s)),i.push(ql(a,l))}return await Promise.all(i),t}subscribe(){window.addEventListener("vaadin-router-go",this.#d)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.#d)}#x(t){const{pathname:r,search:a,hash:i}=t instanceof CustomEvent?t.detail:window.location;br(this.__normalizePathname(r))&&(t?.preventDefault&&t.preventDefault(),this.render({pathname:r,search:a,hash:i},!0))}static setTriggers(...t){ic(t)}urlForName(t,r){return this.#s||(this.#s=If(this,{cacheKeyProvider(a){return"component"in a&&typeof a.component=="string"?a.component:void 0}})),Wn(this.#s(t,r??void 0),this)}urlForPath(t,r){return Wn(P0(t)(r??void 0),this)}static go(t){const{pathname:r,search:a,hash:i}=br(t)?new URL(t,"http://a"):t;return $i("go",{pathname:r,search:a,hash:i})}}const He=fe`
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
`,ip="http://localhost:3000/api";async function ve(e,t={}){const r=t.body instanceof FormData,a={...t.headers};!r&&!a["Content-Type"]&&(a["Content-Type"]="application/json");const i={...t,credentials:"include",headers:a};try{const n=await fetch(`${ip}${e}`,i);if(n.status===401){console.warn("🔒 Sesja wygasła. Wylogowuję..."),localStorage.removeItem("isAdmin"),localStorage.removeItem("isSuperAdmin"),localStorage.removeItem("allowedGroups");const o="/mParafia/",s="/admin-login",l=o==="/"?s:o+s.substring(1);window.location.pathname!==l&&(window.location.href=l)}return n}catch(n){throw console.error("Błąd API:",n),n}}var np=fe`
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
`,wo=(e="value")=>(t,r)=>{const a=t.constructor,i=a.prototype.attributeChangedCallback;a.prototype.attributeChangedCallback=function(n,o,s){var l;const c=a.getPropertyOptions(e),d=typeof c.attribute=="string"?c.attribute:e;if(n===d){const u=c.converter||Qa,h=(typeof u=="function"?u:(l=u?.fromAttribute)!=null?l:Qa.fromAttribute)(s,c.type);this[e]!==h&&(this[r]=h)}i.call(this,n,o,s)}},hn=fe`
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
 */const Yi=Rs(class extends $s{constructor(e){if(super(e),e.type!==Gr.PROPERTY&&e.type!==Gr.ATTRIBUTE&&e.type!==Gr.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Gh(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===Jt||t===qe)return t;const r=e.element,a=e.name;if(e.type===Gr.PROPERTY){if(t===r[a])return Jt}else if(e.type===Gr.BOOLEAN_ATTRIBUTE){if(!!t===r.hasAttribute(a))return Jt}else if(e.type===Gr.ATTRIBUTE&&r.getAttribute(a)===t+"")return Jt;return Xh(e),t}});var $e=class extends Be{constructor(){super(...arguments),this.formControlController=new oi(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new Mr(this,"help-text","label"),this.hasFocus=!1,this.title="",this.name="",this.value="",this.size="medium",this.filled=!1,this.label="",this.helpText="",this.placeholder="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.form="",this.required=!1,this.spellcheck=!0,this.defaultValue=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.setTextareaHeight()),this.updateComplete.then(()=>{this.setTextareaHeight(),this.resizeObserver.observe(this.input)})}firstUpdated(){this.formControlController.updateValidity()}disconnectedCallback(){var e;super.disconnectedCallback(),this.input&&((e=this.resizeObserver)==null||e.unobserve(this.input))}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.setTextareaHeight(),this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}setTextareaHeight(){this.resize==="auto"?(this.sizeAdjuster.style.height=`${this.input.clientHeight}px`,this.input.style.height="auto",this.input.style.height=`${this.input.scrollHeight}px`):this.input.style.height=""}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleRowsChange(){this.setTextareaHeight()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity(),this.setTextareaHeight()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(e){if(e){typeof e.top=="number"&&(this.input.scrollTop=e.top),typeof e.left=="number"&&(this.input.scrollLeft=e.left);return}return{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(e,t,r="none"){this.input.setSelectionRange(e,t,r)}setRangeText(e,t,r,a="preserve"){const i=t??this.input.selectionStart,n=r??this.input.selectionEnd;this.input.setRangeText(e,i,n,a),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaHeight())}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),r=this.label?!0:!!e,a=this.helpText?!0:!!t;return L`
      <div
        part="form-control"
        class=${Ne({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":r,"form-control--has-help-text":a})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${r?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${Ne({textarea:!0,"textarea--small":this.size==="small","textarea--medium":this.size==="medium","textarea--large":this.size==="large","textarea--standard":!this.filled,"textarea--filled":this.filled,"textarea--disabled":this.disabled,"textarea--focused":this.hasFocus,"textarea--empty":!this.value,"textarea--resize-none":this.resize==="none","textarea--resize-vertical":this.resize==="vertical","textarea--resize-auto":this.resize==="auto"})}
          >
            <textarea
              part="textarea"
              id="input"
              class="textarea__control"
              title=${this.title}
              name=${ge(this.name)}
              .value=${Yi(this.value)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${ge(this.placeholder)}
              rows=${ge(this.rows)}
              minlength=${ge(this.minlength)}
              maxlength=${ge(this.maxlength)}
              autocapitalize=${ge(this.autocapitalize)}
              autocorrect=${ge(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${ge(this.spellcheck)}
              enterkeyhint=${ge(this.enterkeyhint)}
              inputmode=${ge(this.inputmode)}
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
          aria-hidden=${a?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};$e.styles=[Xe,hn,np];_([xe(".textarea__control")],$e.prototype,"input",2);_([xe(".textarea__size-adjuster")],$e.prototype,"sizeAdjuster",2);_([J()],$e.prototype,"hasFocus",2);_([P()],$e.prototype,"title",2);_([P()],$e.prototype,"name",2);_([P()],$e.prototype,"value",2);_([P({reflect:!0})],$e.prototype,"size",2);_([P({type:Boolean,reflect:!0})],$e.prototype,"filled",2);_([P()],$e.prototype,"label",2);_([P({attribute:"help-text"})],$e.prototype,"helpText",2);_([P()],$e.prototype,"placeholder",2);_([P({type:Number})],$e.prototype,"rows",2);_([P()],$e.prototype,"resize",2);_([P({type:Boolean,reflect:!0})],$e.prototype,"disabled",2);_([P({type:Boolean,reflect:!0})],$e.prototype,"readonly",2);_([P({reflect:!0})],$e.prototype,"form",2);_([P({type:Boolean,reflect:!0})],$e.prototype,"required",2);_([P({type:Number})],$e.prototype,"minlength",2);_([P({type:Number})],$e.prototype,"maxlength",2);_([P()],$e.prototype,"autocapitalize",2);_([P()],$e.prototype,"autocorrect",2);_([P()],$e.prototype,"autocomplete",2);_([P({type:Boolean})],$e.prototype,"autofocus",2);_([P()],$e.prototype,"enterkeyhint",2);_([P({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],$e.prototype,"spellcheck",2);_([P()],$e.prototype,"inputmode",2);_([wo()],$e.prototype,"defaultValue",2);_([Re("disabled",{waitUntilFirstUpdate:!0})],$e.prototype,"handleDisabledChange",1);_([Re("rows",{waitUntilFirstUpdate:!0})],$e.prototype,"handleRowsChange",1);_([Re("value",{waitUntilFirstUpdate:!0})],$e.prototype,"handleValueChange",1);$e.define("sl-textarea");var op=fe`
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
`,ke=class extends Be{constructor(){super(...arguments),this.formControlController=new oi(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new Mr(this,"help-text","label"),this.localize=new tr(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var e;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,((e=this.input)==null?void 0:e.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(e){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=e,this.value=this.__dateInput.value}get valueAsNumber(){var e;return this.__numberInput.value=this.value,((e=this.input)==null?void 0:e.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(e){this.__numberInput.valueAsNumber=e,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(e){e.preventDefault(),this.value!==""&&(this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")),this.input.focus()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleKeyDown(e){const t=e.metaKey||e.ctrlKey||e.shiftKey||e.altKey;e.key==="Enter"&&!t&&setTimeout(()=>{!e.defaultPrevented&&!e.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(e,t,r="none"){this.input.setSelectionRange(e,t,r)}setRangeText(e,t,r,a="preserve"){const i=t??this.input.selectionStart,n=r??this.input.selectionEnd;this.input.setRangeText(e,i,n,a),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),r=this.label?!0:!!e,a=this.helpText?!0:!!t,n=this.clearable&&!this.disabled&&!this.readonly&&(typeof this.value=="number"||this.value.length>0);return L`
      <div
        part="form-control"
        class=${Ne({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":r,"form-control--has-help-text":a})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${r?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${Ne({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
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
              name=${ge(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${ge(this.placeholder)}
              minlength=${ge(this.minlength)}
              maxlength=${ge(this.maxlength)}
              min=${ge(this.min)}
              max=${ge(this.max)}
              step=${ge(this.step)}
              .value=${Yi(this.value)}
              autocapitalize=${ge(this.autocapitalize)}
              autocomplete=${ge(this.autocomplete)}
              autocorrect=${ge(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${ge(this.pattern)}
              enterkeyhint=${ge(this.enterkeyhint)}
              inputmode=${ge(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${n?L`
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
            ${this.passwordToggle&&!this.disabled?L`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?L`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        `:L`
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
          aria-hidden=${a?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};ke.styles=[Xe,hn,op];ke.dependencies={"sl-icon":St};_([xe(".input__control")],ke.prototype,"input",2);_([J()],ke.prototype,"hasFocus",2);_([P()],ke.prototype,"title",2);_([P({reflect:!0})],ke.prototype,"type",2);_([P()],ke.prototype,"name",2);_([P()],ke.prototype,"value",2);_([wo()],ke.prototype,"defaultValue",2);_([P({reflect:!0})],ke.prototype,"size",2);_([P({type:Boolean,reflect:!0})],ke.prototype,"filled",2);_([P({type:Boolean,reflect:!0})],ke.prototype,"pill",2);_([P()],ke.prototype,"label",2);_([P({attribute:"help-text"})],ke.prototype,"helpText",2);_([P({type:Boolean})],ke.prototype,"clearable",2);_([P({type:Boolean,reflect:!0})],ke.prototype,"disabled",2);_([P()],ke.prototype,"placeholder",2);_([P({type:Boolean,reflect:!0})],ke.prototype,"readonly",2);_([P({attribute:"password-toggle",type:Boolean})],ke.prototype,"passwordToggle",2);_([P({attribute:"password-visible",type:Boolean})],ke.prototype,"passwordVisible",2);_([P({attribute:"no-spin-buttons",type:Boolean})],ke.prototype,"noSpinButtons",2);_([P({reflect:!0})],ke.prototype,"form",2);_([P({type:Boolean,reflect:!0})],ke.prototype,"required",2);_([P()],ke.prototype,"pattern",2);_([P({type:Number})],ke.prototype,"minlength",2);_([P({type:Number})],ke.prototype,"maxlength",2);_([P()],ke.prototype,"min",2);_([P()],ke.prototype,"max",2);_([P()],ke.prototype,"step",2);_([P()],ke.prototype,"autocapitalize",2);_([P()],ke.prototype,"autocorrect",2);_([P()],ke.prototype,"autocomplete",2);_([P({type:Boolean})],ke.prototype,"autofocus",2);_([P()],ke.prototype,"enterkeyhint",2);_([P({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],ke.prototype,"spellcheck",2);_([P()],ke.prototype,"inputmode",2);_([Re("disabled",{waitUntilFirstUpdate:!0})],ke.prototype,"handleDisabledChange",1);_([Re("step",{waitUntilFirstUpdate:!0})],ke.prototype,"handleStepChange",1);_([Re("value",{waitUntilFirstUpdate:!0})],ke.prototype,"handleValueChange",1);ke.define("sl-input");zs.define("sl-spinner");var sp=Object.defineProperty,lp=Object.getOwnPropertyDescriptor,fn=(e,t,r,a)=>{for(var i=a>1?void 0:a?lp(t,r):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(i=(a?o(t,r,i):o(i))||i);return a&&i&&sp(t,r,i),i};let Aa=class extends Le{constructor(){super(...arguments),this.publishedQuestions=[],this.isSubmitting=!1}connectedCallback(){super.connectedCallback(),this.dispatchEvent(new CustomEvent("change-title",{detail:{title:"Pytania do Księdza"},bubbles:!0,composed:!0}))}async firstUpdated(){await this.fetchQuestions()}async fetchQuestions(){try{const e=await ve("/questions");if(e.ok){const t=await e.json();this.publishedQuestions=t.filter(r=>r.isPublished)}}catch(e){console.error("Błąd podczas pobierania pytań:",e)}}async submitQuestion(){const e=this.questionInput.value,t=this.authorInput.value,r=t&&t.trim()!==""?t.trim():"Anonimowy";if(!e||e.trim()===""){alert("Proszę wpisać treść pytania.");return}this.isSubmitting=!0;try{const a=await ve("/questions",{method:"POST",body:JSON.stringify({content:e,author:r,answer:"",isPublished:!1})});if(a.ok)alert("Dziękujemy! Twoje pytanie zostało wysłane. Pojawi się tutaj, gdy ksiądz na nie odpowie."),this.questionInput.value="",this.authorInput.value="";else{const i=await a.text();console.error("Szczegóły błędu od serwera:",i),alert(`Błąd serwera (Status: ${a.status}). Otwórz konsolę (F12 -> Console), aby zobaczyć szczegóły.`)}}catch(a){console.error("Błąd sieci:",a),alert("Brak połączenia z serwerem.")}finally{this.isSubmitting=!1}}render(){return L`
      <div class="qa-wrapper">
        <div class="ask-section">
          <p>Masz pytanie dotyczące życia parafii? Zadaj je tutaj!</p>
          <sl-input id="author-input" placeholder="Twoje imię (zostaw puste, aby zapytać anonimowo)"></sl-input>

          <sl-textarea id="new-question" placeholder="Napisz swoje pytanie..." rows="4" resize="auto"></sl-textarea>

          <button class="custom-btn" @click=${this.submitQuestion} ?disabled=${this.isSubmitting}>
            ${this.isSubmitting?L`Wysyłanie... <sl-spinner style="--indicator-color: white;"></sl-spinner>`:L`Wyślij pytanie <sl-icon name="send-fill-sand"></sl-icon>`}
          </button>
        </div>

        ${this.publishedQuestions.length===0?L`
          <div class="qa-item" style="text-align: center; color: var(--color-wood-medium);">
            Brak opublikowanych odpowiedzi. Bądź pierwszy i zadaj pytanie!
          </div>
        `:""}

        ${this.publishedQuestions.map(e=>L`
          <div class="qa-item">
            <div class="question">
              <sl-icon name="person-circle"></sl-icon>
              <div>
                <strong>${e.author?e.author:"Anonimowy"}:</strong> ${e.content}
              </div>
            </div>
            <div class="answer">
              <strong style="display:block; margin-bottom: 2px;">Odpowiedź duszpasterza:</strong>
              <div class="answer-text">${e.answer?e.answer.trim():L`<span style="color: red;">Błąd: Brak tekstu odpowiedzi w bazie danych!</span>`}</div>
            </div>
            <div class="date">${new Date(e.createdAt).toLocaleDateString("pl-PL")}</div>
          </div>
        `)}
      </div>
    `}};Aa.styles=[He,fe`
      :host {
        display: block;
        padding: 10px;
        width: 100%;
        max-width: 900px;
        margin: 0 auto;
        box-sizing: border-box;
      }

      .qa-wrapper {
        display: flex;
        flex-direction: column;
        gap: 20px;
      }

      .page-title {
        color: var(--color-wood-dark);
        margin: 0 0 5px 0;
        display: flex;
        align-items: center;
        gap: 12px;
        font-size: 1.6rem;
      }

      .ask-section {
        background-color: var(--color-sand-light);
        border: 2px solid var(--color-wood-medium);
        border-radius: 12px;
        padding: 15px;
        display: flex;
        flex-direction: column;
        gap: 12px;
      }

      .ask-section p {
        margin: 0;
        color: var(--color-wood-dark);
        font-weight: bold;
        font-size: 1.1rem;
      }

      sl-input, sl-textarea {
        --sl-input-background-color: var(--color-sand-light);
        --sl-input-background-color-hover: var(--color-sand-light);
        --sl-input-background-color-focus: var(--color-sand-light);

        --sl-input-border-color: var(--color-wood-medium);
        --sl-input-border-color-hover: var(--color-wood-dark);
        --sl-input-border-color-focus: var(--color-wood-dark);

        --sl-input-color: var(--color-wood-dark);
        --sl-input-color-hover: var(--color-wood-dark);
        --sl-input-color-focus: var(--color-wood-dark);

        --sl-input-placeholder-color: var(--color-wood-dark);
        --sl-focus-ring-color: var(--color-wood-dark)
      }

      .custom-btn {
        background-color: var(--color-wood-medium);
        border: none;
        color: var(--color-sand-light);
        border-radius: 25px;
        padding: 10px 20px;
        font-size: 1rem;
        font-weight: bold;
        font-family: inherit;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        transition: transform 0.2s ease, background-color 0.2s ease;
        align-self: flex-end;
      }

      .custom-btn:active {
        transform: scale(0.98);
        background-color: var(--color-wood-dark);
      }

      @media (hover: hover) {
        .custom-btn:hover {
          background-color: var(--color-wood-dark);
        }
      }

      .custom-btn:disabled {
        opacity: 0.7;
        cursor: not-allowed;
        transform: none;
      }

      .qa-item {
        background-color: var(--color-sand-light);
        border: 2px solid var(--color-wood-medium);
        border-radius: 12px;
        padding: 15px;
        display: flex;
        flex-direction: column;
        gap: 10px;
      }

      .question {
        font-size: 1.05rem;
        color: var(--color-wood-dark);
        display: flex;
        gap: 10px;
        align-items: flex-start;
      }

      .question sl-icon {
        font-size: 1.4rem;
        color: var(--color-wood-medium);
        flex-shrink: 0;
        margin-top: 1px;
      }

      .answer {
        background-color: var(--color-cookie-medium);
        border-left: 4px solid var(--color-wood-dark);
        padding: 10px 15px;
        border-radius: 0 8px 8px 0;
        color: var(--color-wood-dark);
        line-height: 1.5;
      }

      .answer-text {
        white-space: pre-wrap;
      }

      .date {
        font-size: 0.8rem;
        color: var(--color-wood-medium);
        text-align: right;
        margin-top: -2px;
      }
    `];fn([J()],Aa.prototype,"publishedQuestions",2);fn([J()],Aa.prototype,"isSubmitting",2);fn([xe("#new-question")],Aa.prototype,"questionInput",2);fn([xe("#author-input")],Aa.prototype,"authorInput",2);Aa=fn([Ve("app-qa")],Aa);var cp=Object.defineProperty,dp=Object.getOwnPropertyDescriptor,W0=(e,t,r,a)=>{for(var i=a>1?void 0:a?dp(t,r):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(i=(a?o(t,r,i):o(i))||i);return a&&i&&cp(t,r,i),i};let Jn=class extends Le{constructor(){super(),this.deferredPrompt=null,window.addEventListener("beforeinstallprompt",e=>{e.preventDefault(),this.deferredPrompt=e}),window.addEventListener("appinstalled",()=>{this.deferredPrompt=null})}connectedCallback(){super.connectedCallback();const e=new CustomEvent("change-title",{detail:{title:"Strona Główna"},bubbles:!0,composed:!0});this.dispatchEvent(e)}async installApp(){if(!this.deferredPrompt)return;this.deferredPrompt.prompt();const{outcome:e}=await this.deferredPrompt.userChoice;e==="accepted"&&(this.deferredPrompt=null)}handleNavigation(e){const r="/mParafia/"+e.substring(1);window.history.pushState({},"",r),window.dispatchEvent(new PopStateEvent("popstate"))}render(){return L`
      <main>

        <div class="logo-container">
          <img src="./icons/icon_512.png" class="logo-img" alt="Ikona mParafia">
        </div>

        <div class="grid-container">

          <sl-button class="tile-button full-width" @click="${()=>this.handleNavigation("/ogloszenia")}">
            <sl-icon name="megaphone-fill"></sl-icon>
            <span>Ogłoszenia</span>
          </sl-button>

          <sl-button class="tile-button" @click="${()=>this.handleNavigation("/nabozenstwa")}">
            <sl-icon name="bell-fill"></sl-icon>
            <span>Nabożeństwa</span>
          </sl-button>

          <sl-button class="tile-button" @click="${()=>this.handleNavigation("/kalendarz")}">
            <sl-icon name="calendar2-check-fill"></sl-icon>
            <span>Kalendarz</span>
          </sl-button>

          <sl-button class="tile-button" @click="${()=>this.handleNavigation("/wydarzenia")}">
            <sl-icon name="star-fill"></sl-icon>
            <span>Wydarzenia</span>
          </sl-button>

          <sl-button class="tile-button" @click="${()=>this.handleNavigation("/grupy")}">
            <sl-icon name="people-fill"></sl-icon>
            <span>Grupy</span>
          </sl-button>

          <sl-button class="tile-button" @click="${()=>this.handleNavigation("/spowiedz")}">
            <sl-icon name="heart-fill"></sl-icon>
            <span>Spowiedź</span>
          </sl-button>

          <sl-button class="tile-button" @click="${()=>this.handleNavigation("/kancelaria")}">
            <sl-icon name="person-heart"></sl-icon>
            <span>Kancelaria</span>
          </sl-button>

          <sl-button class="tile-button" @click="${()=>this.handleNavigation("/dojazd")}">
            <sl-icon name="geo-alt-fill"></sl-icon>
            <span>Dojazd</span>
          </sl-button>

          <sl-button class="tile-button" @click="${()=>this.handleNavigation("/qa")}">
            <sl-icon name="chat-quote-fill"></sl-icon>
            <span>Pytania (Q&A)</span>
          </sl-button>

        </div>

        ${this.deferredPrompt?L`
          <div class="install-section">
            <sl-button variant="primary" pill class="install-btn" @click="${this.installApp}">
              <sl-icon slot="prefix" name="download"></sl-icon>
              Zainstaluj mParafię
            </sl-button>
          </div>
        `:null}
      </main>
    `}};Jn.styles=[He,fe`
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

      /* --- NOWA KLASA: KAFELEK NA CAŁĄ SZEROKOŚĆ --- */
      .full-width {
        grid-column: span 2;
      }

      /* --- STYLE DLA POJEDYNCZEGO KAFELKA --- */
      sl-button.tile-button::part(base) {
        background-color: var(--color-wood-dark);
        border-color: var(--color-wood-dark);
        transition: all 0.2s ease;
        padding: 0;
        height: 100px;
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
    `];W0([J()],Jn.prototype,"deferredPrompt",2);Jn=W0([Ve("app-home")],Jn);var up=fe`
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
`,Ct=class extends Be{constructor(){super(...arguments),this.formControlController=new oi(this,{value:e=>e.checked?e.value||"on":void 0,defaultValue:e=>e.defaultChecked,setValue:(e,t)=>e.checked=t}),this.hasSlotController=new Mr(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleClick(){this.checked=!this.checked,this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleKeyDown(e){e.key==="ArrowLeft"&&(e.preventDefault(),this.checked=!1,this.emit("sl-change"),this.emit("sl-input")),e.key==="ArrowRight"&&(e.preventDefault(),this.checked=!0,this.emit("sl-change"),this.emit("sl-input"))}handleCheckedChange(){this.input.checked=this.checked,this.formControlController.updateValidity()}handleDisabledChange(){this.formControlController.setValidity(!0)}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("help-text"),t=this.helpText?!0:!!e;return L`
      <div
        class=${Ne({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-help-text":t})}
      >
        <label
          part="base"
          class=${Ne({switch:!0,"switch--checked":this.checked,"switch--disabled":this.disabled,"switch--focused":this.hasFocus,"switch--small":this.size==="small","switch--medium":this.size==="medium","switch--large":this.size==="large"})}
        >
          <input
            class="switch__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${ge(this.value)}
            .checked=${Yi(this.checked)}
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
          aria-hidden=${t?"false":"true"}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};Ct.styles=[Xe,hn,up];_([xe('input[type="checkbox"]')],Ct.prototype,"input",2);_([J()],Ct.prototype,"hasFocus",2);_([P()],Ct.prototype,"title",2);_([P()],Ct.prototype,"name",2);_([P()],Ct.prototype,"value",2);_([P({reflect:!0})],Ct.prototype,"size",2);_([P({type:Boolean,reflect:!0})],Ct.prototype,"disabled",2);_([P({type:Boolean,reflect:!0})],Ct.prototype,"checked",2);_([wo("checked")],Ct.prototype,"defaultChecked",2);_([P({reflect:!0})],Ct.prototype,"form",2);_([P({type:Boolean,reflect:!0})],Ct.prototype,"required",2);_([P({attribute:"help-text"})],Ct.prototype,"helpText",2);_([Re("checked",{waitUntilFirstUpdate:!0})],Ct.prototype,"handleCheckedChange",1);_([Re("disabled",{waitUntilFirstUpdate:!0})],Ct.prototype,"handleDisabledChange",1);Ct.define("sl-switch");var hp=fe`
  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`,pn=class extends Be{constructor(){super(...arguments),this.disableRole=!1,this.label=""}handleFocus(e){const t=Si(e.target);t?.toggleAttribute("data-sl-button-group__button--focus",!0)}handleBlur(e){const t=Si(e.target);t?.toggleAttribute("data-sl-button-group__button--focus",!1)}handleMouseOver(e){const t=Si(e.target);t?.toggleAttribute("data-sl-button-group__button--hover",!0)}handleMouseOut(e){const t=Si(e.target);t?.toggleAttribute("data-sl-button-group__button--hover",!1)}handleSlotChange(){const e=[...this.defaultSlot.assignedElements({flatten:!0})];e.forEach(t=>{const r=e.indexOf(t),a=Si(t);a&&(a.toggleAttribute("data-sl-button-group__button",!0),a.toggleAttribute("data-sl-button-group__button--first",r===0),a.toggleAttribute("data-sl-button-group__button--inner",r>0&&r<e.length-1),a.toggleAttribute("data-sl-button-group__button--last",r===e.length-1),a.toggleAttribute("data-sl-button-group__button--radio",a.tagName.toLowerCase()==="sl-radio-button"))})}render(){return L`
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
    `}};pn.styles=[Xe,hp];_([xe("slot")],pn.prototype,"defaultSlot",2);_([J()],pn.prototype,"disableRole",2);_([P()],pn.prototype,"label",2);function Si(e){var t;const r="sl-button, sl-radio-button";return(t=e.closest(r))!=null?t:e.querySelector(r)}pn.define("sl-button-group");var fp=Object.defineProperty,pp=Object.getOwnPropertyDescriptor,$a=(e,t,r,a)=>{for(var i=a>1?void 0:a?pp(t,r):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(i=(a?o(t,r,i):o(i))||i);return a&&i&&fp(t,r,i),i};let Lr=class extends Le{constructor(){super(...arguments),this.time="",this.name="",this.targetUrl="",this.category="wydarzenie",this.multiline=!1,this.groupColor=""}handleClick(){this.targetUrl&&(window.history.pushState({},"",this.targetUrl),window.dispatchEvent(new PopStateEvent("popstate")))}render(){const e=this.category==="wydarzenie",t=this.category==="intencja",r=this.groupColor?this.groupColor:"";return L`
      <div
        class="item-container ${this.multiline?"is-multiline":""}"
        style="${r?`--local-bg-color: ${r};`:""}"
        @click="${this.handleClick}"
      >
        <span class="time">${this.time}</span>
        <span class="name">${this.name}</span>

        ${t?L`<sl-icon name="bookmark-fill"></sl-icon>`:e?L`<sl-icon name="star-fill"></sl-icon>`:L`<sl-icon name="people-fill"></sl-icon>`}
      </div>
    `}};Lr.styles=[He,fe`
      :host {
        display: block;
        width: 100%;
      }

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
        /* Używamy zmiennej przekazanej przez atrybut style, z fallbackiem do domyślnego koloru, wymuszając priorytet */
        background-color: var(--local-bg-color, var(--color-wood-dark)) !important;
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
    `];$a([P({type:String})],Lr.prototype,"time",2);$a([P({type:String})],Lr.prototype,"name",2);$a([P({type:String})],Lr.prototype,"targetUrl",2);$a([P({type:String})],Lr.prototype,"category",2);$a([P({type:Boolean})],Lr.prototype,"multiline",2);$a([P({type:String})],Lr.prototype,"groupColor",2);Lr=$a([Ve("calendar-item")],Lr);var gp=Object.defineProperty,mp=Object.getOwnPropertyDescriptor,ca=(e,t,r,a)=>{for(var i=a>1?void 0:a?mp(t,r):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(i=(a?o(t,r,i):o(i))||i);return a&&i&&gp(t,r,i),i};let yr=class extends Le{constructor(){super(...arguments),this.events=[],this.groups=[],this.currentView="month",this.currentDate=new Date,this.showOnlyMyGroups=localStorage.getItem("showOnlyMyGroups")==="true",this.displayMode="all",this.firstDayOfWeek=localStorage.getItem("firstDay")||"monday",this.boundRefreshSettings=this.refreshSettings.bind(this)}connectedCallback(){super.connectedCallback(),this.dispatchEvent(new CustomEvent("change-title",{detail:{title:"Kalendarz Parafialny"},bubbles:!0,composed:!0})),this.refreshSettings(),window.addEventListener("settings-changed",this.boundRefreshSettings)}disconnectedCallback(){window.removeEventListener("settings-changed",this.boundRefreshSettings),super.disconnectedCallback()}refreshSettings(){this.firstDayOfWeek=localStorage.getItem("firstDay")||"monday",this.showOnlyMyGroups=localStorage.getItem("showOnlyMyGroups")==="true",this.requestUpdate()}async firstUpdated(){await this.fetchEvents(),await this.fetchGroups()}async fetchEvents(){try{const e=await ve("/events/all");e.ok&&(this.events=await e.json(),console.log("DANE Z BACKENDU:",this.events))}catch(e){console.error("Nie udało się pobrać wydarzeń:",e)}}async fetchGroups(){try{const e=await ve("/groups");e.ok&&(this.groups=await e.json(),console.log(this.groups))}catch(e){console.error("Nie udało się pobrać grup:",e)}}getFilteredEvents(){let e=this.events;if(this.displayMode==="events"?e=e.filter(t=>!t.title.startsWith("Intencja:")):this.displayMode==="intentions"&&(e=e.filter(t=>t.title.startsWith("Intencja:"))),this.showOnlyMyGroups&&this.displayMode!=="intentions"){const t=localStorage.getItem("myGroups"),r=t?JSON.parse(t).map(Number):[];e=e.filter(a=>!a.groups||a.groups.length===0?!0:a.groups.some(i=>r.includes(Number(i.groupId))))}return e}_navigate(e){const t=new Date(this.currentDate),r=e==="next"?1:-1;this.currentView==="month"?t.setMonth(t.getMonth()+r):this.currentView==="week"?t.setDate(t.getDate()+7*r):this.currentView==="day"&&t.setDate(t.getDate()+r),this.currentDate=t,this.requestUpdate()}switchToDayView(e){this.currentDate=e,this.currentView="day"}changeView(e){this.currentView=e,this.currentDate=new Date,this.requestUpdate()}_getHeaderTitle(){if(this.currentView==="month")return this.currentDate.toLocaleDateString("pl-PL",{month:"long",year:"numeric"});if(this.currentView==="day")return this.currentDate.toLocaleDateString("pl-PL",{weekday:"long",day:"numeric",month:"long"});{const e=this._getStartOfWeek(this.currentDate),t=new Date(e);t.setDate(t.getDate()+6);const r=e.toLocaleDateString("pl-PL",{day:"numeric",month:"short"}),a=t.toLocaleDateString("pl-PL",{day:"numeric",month:"short"});return`${r} - ${a} ${t.getFullYear()}`}}_getStartOfWeek(e){const t=new Date(e),r=t.getDay();if(this.firstDayOfWeek==="sunday")t.setDate(t.getDate()-r);else{const a=t.getDate()-r+(r===0?-6:1);t.setDate(a)}return t.setHours(0,0,0,0),t}_isToday(e){const t=new Date;return e.getDate()===t.getDate()&&e.getMonth()===t.getMonth()&&e.getFullYear()===t.getFullYear()}_getEventsForDate(e){return this.getFilteredEvents().filter(t=>{if(!t.startTime)return!1;const r=new Date(t.startTime);return r.getFullYear()===e.getFullYear()&&r.getMonth()===e.getMonth()&&r.getDate()===e.getDate()})}render(){return L`
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

      <div class="filter-controls" style="flex-direction: column; gap: 15px;">
        <sl-button-group>
          <sl-button variant=${this.displayMode==="all"?"primary":"default"} @click=${()=>{this.displayMode="all",this.requestUpdate()}}>Wszystko</sl-button>
          <sl-button variant=${this.displayMode==="events"?"primary":"default"} @click=${()=>{this.displayMode="events",this.requestUpdate()}}>Wydarzenia</sl-button>
          <sl-button variant=${this.displayMode==="intentions"?"primary":"default"} @click=${()=>{this.displayMode="intentions",this.requestUpdate()}}>Intencje</sl-button>
        </sl-button-group>

        ${this.displayMode!=="intentions"?L`
          <sl-switch
            ?checked=${this.showOnlyMyGroups}
            @sl-change=${e=>{this.showOnlyMyGroups=e.target.checked,localStorage.setItem("showOnlyMyGroups",e.target.checked.toString()),this.requestUpdate()}} >
            Tylko moje grupy i główne wydarzenia
          </sl-switch>
        `:""}
      </div>

      ${this.currentView==="month"?this.renderMonthView():null}
      ${this.currentView==="week"?this.renderWeekView():null}
      ${this.currentView==="day"?this.renderDayView():null}
    `}renderMonthView(){const e=this.currentDate.getFullYear(),t=this.currentDate.getMonth(),r=new Date(e,t+1,0).getDate(),a=Array.from({length:r},(l,c)=>c+1),i=this.firstDayOfWeek==="monday"?["Pn","Wt","Śr","Cz","Pt","Sb","Nd"]:["Nd","Pn","Wt","Śr","Cz","Pt","Sb"],n=new Date(e,t,1).getDay();let o;this.firstDayOfWeek==="monday"?o=n===0?6:n-1:o=n;const s=Array.from({length:o},(l,c)=>c);return L`
      <div class="grid-month">
        ${i.map(l=>L`<div class="day-name">${l}</div>`)}
        ${s.map(()=>L`<div class="day empty"></div>`)}
        ${a.map(l=>{const c=new Date(e,t,l),d=this._getEventsForDate(c),u=this._isToday(c);return L`
            <div class=${Ne({day:!0,today:u})} @click=${()=>this.switchToDayView(c)}>
              <span class="day-number">${l}</span>
              ${this.renderEventTags(d,"month")}
            </div>
          `})}
      </div>
    `}renderWeekView(){const e=this._getStartOfWeek(this.currentDate),t=Array.from({length:7},(a,i)=>{const n=new Date(e);return n.setDate(n.getDate()+i),n}),r=this.firstDayOfWeek==="monday"?["Pn","Wt","Śr","Cz","Pt","Sb","Nd"]:["Nd","Pn","Wt","Śr","Cz","Pt","Sb"];return L`
      <div class="grid-week">
        ${t.map((a,i)=>{const n=this._getEventsForDate(a),o=this._isToday(a);return L`
            <div class=${Ne({"week-day":!0,today:o})} @click=${()=>this.switchToDayView(a)}>
              <div class="week-day-header">
                <div class="week-day-name">${r[i]}</div>
                <div class="week-day-number">${a.getDate()}</div>
              </div>

              ${n.length>0?L`<div class="week-events-container">${this.renderEventTags(n,"week")}</div>`:L`<div class="no-events-small">Brak</div>`}
            </div>
          `})}
      </div>
    `}renderDayView(){const e=this._getEventsForDate(this.currentDate),t=this._isToday(this.currentDate);return L`
      <div class="list-view">
        <div class=${Ne({"list-day-row":!0,today:t})}>
          <div class="list-day-header">Wydarzenia</div>
          ${e.length>0?this.renderEventTags(e,"day"):L`<span class="no-events" style="display:block; padding: 20px 0; font-size: 0.85rem; color: #666; text-align: center; font-style: italic;">Brak wydarzeń zaplanowanych na ten dzień.</span>`}
        </div>
      </div>
    `}renderEventTags(e,t){const r=t==="week"||t==="day",a=t==="day"||t==="week";return e.map(i=>{const o=new Date(i.startTime).toLocaleTimeString("pl-PL",{hour:"2-digit",minute:"2-digit"}),s=i.title.startsWith("Intencja:"),l=s?i.title.replace("Intencja:","").trim():i.title,c=i.groups&&i.groups.length>0?i.groups[0]:null;let d=c?"grupa":"wydarzenie",u=c&&c.group?.color?c.group.color:"";return s&&(d="intencja",u="#C18756"),L`
        <calendar-item
          .time="${o}"
          .name="${l}"
          .category="${d}"
          .groupColor="${u}"
          ?multiline=${r}
          targetUrl="${a?`/mParafia/wydarzenie?id=${i.id}`:""}"
        >
        </calendar-item>
      `})}};yr.styles=[He,fe`
      :host { display: block; padding: 10px; width: 100%; max-width: 900px; margin: 0 auto; box-sizing: border-box; }
      .view-controls { display: flex; justify-content: center; margin-bottom: 20px; }
      sl-button-group sl-button[variant="default"]::part(base) { color: var(--color-wood-medium); border-color: var(--color-wood-medium); background-color: transparent; }
      sl-button-group sl-button[variant="default"]::part(base):hover { background-color: rgba(193, 135, 86, 0.1); }
      sl-button-group sl-button[variant="primary"]::part(base) { background-color: var(--color-wood-dark); border-color: var(--color-wood-dark); color: var(--color-sand-light); }
      .calendar-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; color: var(--color-wood-dark); }
      .calendar-header h2 { margin: 0; text-transform: capitalize; font-size: 1.3rem; }
      sl-icon-button { color: var(--color-wood-dark); font-size: 1.8rem; }
      .grid-month { display: grid; grid-template-columns: repeat(7, 1fr); gap: 4px; background-color: var(--color-wood-medium); padding: 6px; border-radius: 12px; }
      .day-name { text-align: center; font-weight: bold; color: var(--color-sand-light); font-size: 0.85rem; padding: 5px 0; }
      .day { background: var(--color-sand-light); min-height: 35px; padding: 2px; display: flex; flex-direction: column; border-radius: 6px; color: var(--color-wood-dark); overflow: hidden; cursor: pointer; transition: filter 0.2s ease; }
      .day:hover { filter: brightness(0.95); }
      .day.empty { background: transparent; border: none; cursor: default; }
      .day.empty:hover { filter: none; }
      .day.today { background-color: #E8C09A; box-shadow: inset 0 0 10px rgba(127, 69, 29, 0.2); }
      .day-number { font-size: 0.9rem; margin-bottom: 4px; margin-left: 2px; }
      .day.today > .day-number { font-size: 1rem; font-weight: bold; }
      .grid-week { display: grid; grid-template-columns: repeat(7, 1fr); gap: 6px; background-color: var(--color-wood-medium); padding: 8px; border-radius: 12px; min-height: 350px; overflow-x: auto; scrollbar-width: thin; scrollbar-color: var(--color-wood-medium) var(--color-sand-light); touch-action: pan-x pan-y; }
      .grid-week::-webkit-scrollbar { height: 10px; }
      .grid-week::-webkit-scrollbar-track { background: var(--color-sand-light); border-radius: 6px; }
      .grid-week::-webkit-scrollbar-thumb { background: var(--color-wood-medium); border-radius: 6px; }
      .week-day { background: var(--color-sand-light); border-radius: 6px; padding: 8px; display: flex; flex-direction: column; color: var(--color-wood-dark); min-width: 140px; cursor: pointer; transition: filter 0.2s ease; }
      .week-day:hover { filter: brightness(0.95); }
      .week-day-header { text-align: center; border-bottom: 2px solid var(--color-wood-medium); padding-bottom: 5px; margin-bottom: 8px; }
      .week-day-name { font-weight: bold; text-transform: uppercase; font-size: 0.8rem; }
      .week-day-number { font-size: 1.4rem; font-weight: bold; }
      .week-day.today { background-color: #E8C09A; }
      .no-events-small { text-align: center; font-size: 0.75rem; color: #888; margin-top: 10px; font-style: italic; }
      .list-view { background-color: var(--color-wood-medium); padding: 15px; border-radius: 12px; display: flex; flex-direction: column; gap: 10px; }
      .list-day-row { background: var(--color-sand-light); border-radius: 8px; padding: 15px; color: var(--color-wood-dark); }
      .list-day-header { font-weight: bold; font-size: 1.2rem; border-bottom: 2px solid var(--color-wood-medium); padding-bottom: 10px; margin-bottom: 15px; }
      .list-day-row.today { background-color: #E8C09A; }
      .filter-controls { display: flex; justify-content: center; align-items: center; margin-bottom: 25px; width: 100%; }
      sl-switch { --sl-toggle-size: 1.2rem; display: flex; align-items: center; }
      sl-switch::part(thumb) { background-color: var(--color-wood-medium) !important; border: 2px solid var(--color-wood-medium) !important; transition: background-color 0.3s ease, border-color 0.3s ease !important; }
      sl-switch[checked]::part(thumb) { background-color: var(--color-wood-dark) !important; border-color: var(--color-wood-dark) !important; }
      sl-switch::part(control) { background-color: var(--color-cookie-medium) !important; border-color: var(--color-cookie-medium) !important; box-shadow: none !important; outline: none !important; transition: background-color 0.3s ease, border-color 0.3s ease !important; }
      sl-switch[checked]::part(control) { background-color: var(--color-wood-medium) !important; border-color: var(--color-wood-medium) !important; }
      sl-switch::part(label) { color: var(--color-wood-dark); font-size: 0.9rem; font-weight: 500; margin-left: 8px; transition: font-weight 0.1s ease !important; }
      sl-switch[checked]::part(label) { font-weight: 530; }
    `];ca([J()],yr.prototype,"events",2);ca([J()],yr.prototype,"groups",2);ca([J()],yr.prototype,"currentView",2);ca([J()],yr.prototype,"currentDate",2);ca([J()],yr.prototype,"showOnlyMyGroups",2);ca([J()],yr.prototype,"displayMode",2);ca([J()],yr.prototype,"firstDayOfWeek",2);yr=ca([Ve("app-calendar")],yr);var vp=Object.defineProperty,xp=Object.getOwnPropertyDescriptor,Vs=(e,t,r,a)=>{for(var i=a>1?void 0:a?xp(t,r):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(i=(a?o(t,r,i):o(i))||i);return a&&i&&vp(t,r,i),i};let qi=class extends Le{constructor(){super(...arguments),this.groups=[],this.isLoading=!0}connectedCallback(){super.connectedCallback(),this.dispatchEvent(new CustomEvent("change-title",{detail:{title:"Grupy Parafialne"},bubbles:!0,composed:!0}))}async firstUpdated(){await this.fetchGroups()}async fetchGroups(){try{const e=await ve("/groups");if(!e.ok)throw new Error("Błąd połączenia z serwerem");this.groups=await e.json()}catch(e){console.error("Nie udało się pobrać grup:",e)}finally{this.isLoading=!1}}render(){return this.isLoading?L`
        <div class="center-content">
          <sl-spinner style="font-size: 2rem;"></sl-spinner>
        </div>
      `:this.groups.length===0?L`
        <div class="center-content">
          Brak grup parafialnych w bazie danych.
        </div>
      `:L`
      <div class="groups-grid">
        ${this.groups.map(e=>L`
          <div class="group-card" @click=${()=>window.location.href=`/mParafia/grupa?id=${e.id}`}>

            <div class="group-photo">
              ${e.photoUrl?L`<img src="${e.photoUrl}" style="width: 100%; height: 100%; border-radius: 50%; object-fit: cover;" />`:L`<sl-icon name="people-fill" style="font-size: 24px; color: var(--color-wood-dark);"></sl-icon>`}
            </div>

            <div class="group-info">
              <h3>${e.name}</h3>
              ${e.description?L`<p class="group-desc">${e.description}</p>`:""}
            </div>

            <sl-icon name="chevron-right" style="margin-left: auto; color: var(--color-wood-medium); flex-shrink: 0;"></sl-icon>
          </div>
        `)}
      </div>
    `}};qi.styles=[He,fe`
      :host {
        display: block;
        padding: 10px;
        width: 100%;
        max-width: 900px;
        margin: 0 auto;
        box-sizing: border-box;
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
        flex: 1;
        min-width: 0;
      }

      .group-desc {
        margin: 4px 0 0 0;
        font-size: 0.85rem;
        color: var(--color-wood-dark);
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
    `];Vs([J()],qi.prototype,"groups",2);Vs([J()],qi.prototype,"isLoading",2);qi=Vs([Ve("app-groups")],qi);var bp=Object.defineProperty,wp=Object.getOwnPropertyDescriptor,Hs=(e,t,r,a)=>{for(var i=a>1?void 0:a?wp(t,r):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(i=(a?o(t,r,i):o(i))||i);return a&&i&&bp(t,r,i),i};let Zi=class extends Le{constructor(){super(...arguments),this.events=[],this.groups=[]}connectedCallback(){super.connectedCallback(),this.dispatchEvent(new CustomEvent("change-title",{detail:{title:"Nadchodzące Wydarzenia"},bubbles:!0,composed:!0}))}async firstUpdated(){await this.fetchGroups(),await this.fetchEvents()}async fetchGroups(){try{const e=await ve("/groups");e.ok&&(this.groups=await e.json())}catch(e){console.error("Nie udało się pobrać grup:",e)}}async fetchEvents(){try{const e=await ve("/events/all");if(!e.ok)throw new Error("Błąd połączenia");this.events=await e.json()}catch(e){console.error("Nie udało się pobrać wydarzeń:",e)}}getGroupedEvents(){const e={},t=new Date;return t.setHours(0,0,0,0),[...this.events].filter(a=>new Date(a.startTime)>=t).sort((a,i)=>new Date(a.startTime).getTime()-new Date(i.startTime).getTime()).forEach(a=>{const i=a.startTime.split("T")[0];e[i]||(e[i]=[]),e[i].push(a)}),e}formatDate(e){return new Date(e).toLocaleDateString("pl-PL",{weekday:"long",day:"numeric",month:"long"})}render(){const e=this.getGroupedEvents();return L`
      ${Object.keys(e).map(t=>L`
        <div class="day-section">
          <div class="day-header">${this.formatDate(t)}</div>
          <div class="events-list">
            ${e[t].map(r=>{const a=new Date(r.startTime).toLocaleTimeString("pl-PL",{hour:"2-digit",minute:"2-digit"}),i=r.title.startsWith("Intencja:"),n=i?r.title.replace("Intencja:","").trim():r.title,o=r.groups&&r.groups.length>0?r.groups[0]:null,s=o?this.groups.find(d=>Number(d.id)===Number(o.groupId)):null;let l=s?"grupa":"wydarzenie",c=s&&s.color?s.color:"";return i&&(l="intencja",c="#C18756"),L`
                <calendar-item
                  .time="${a}"
                  .name="${n}"
                  .category="${l}"
                  .groupColor="${c}"
                  .targetUrl="/mParafia/wydarzenie?id=${r.id}"
                  multiline
                ></calendar-item>
              `})}
          </div>
        </div>
      `)}
    `}};Zi.styles=[He,fe`
      :host {
        display: block;
        padding: 10px;
        width: 100%;
        max-width: 900px;
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
    `];Hs([J()],Zi.prototype,"events",2);Hs([J()],Zi.prototype,"groups",2);Zi=Hs([Ve("app-events")],Zi);var yp=Object.defineProperty,_p=Object.getOwnPropertyDescriptor,yo=(e,t,r,a)=>{for(var i=a>1?void 0:a?_p(t,r):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(i=(a?o(t,r,i):o(i))||i);return a&&i&&yp(t,r,i),i};let ti=class extends Le{constructor(){super(...arguments),this.eventId=null,this.event=null,this.isLoading=!0}connectedCallback(){super.connectedCallback();const t=new URLSearchParams(window.location.search).get("id");t&&(this.eventId=parseInt(t,10))}async firstUpdated(){this.eventId?await this.fetchEventDetails():this.isLoading=!1}async fetchEventDetails(){try{console.log("🔍 1. Szukam wydarzenia z ID:",this.eventId);const e=await fetch("http://localhost:3000/api/events/all");if(e.ok){const t=await e.json();console.log("📦 2. Pobrane wszystkie wydarzenia z bazy:",t),this.event=t.find(r=>r.id===this.eventId)||null,console.log("🎯 3. Wynik dopasowania:",this.event),this.event&&this.dispatchEvent(new CustomEvent("change-title",{detail:{title:"Szczegóły wydarzenia"},bubbles:!0,composed:!0}))}else console.error("⚠️ Serwer zwrócił błąd:",e.status)}catch(e){console.error("🚨 Błąd połączenia z API:",e)}finally{this.isLoading=!1}}formatDate(e){return new Date(e).toLocaleDateString("pl-PL",{weekday:"long",day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"})}downloadCalendarEvent(){if(!this.event)return;const e=new Date(this.event.startTime),t=new Date(e.getTime()+60*60*1e3),r=o=>o.toISOString().replace(/-|:|\.\d+/g,""),a=["BEGIN:VCALENDAR","VERSION:2.0","BEGIN:VEVENT",`SUMMARY:${this.event.title}`,`DESCRIPTION:${this.event.description||"Brak opisu"}`,`LOCATION:${this.event.location||"Brak lokalizacji"}`,`DTSTART:${r(e)}`,`DTEND:${r(t)}`,"END:VEVENT","END:VCALENDAR"].join("\\n"),i=new Blob([a],{type:"text/calendar;charset=utf-8"}),n=document.createElement("a");n.href=window.URL.createObjectURL(i),n.setAttribute("download",`${this.event.title.replace(/\\s+/g,"_")}.ics`),document.body.appendChild(n),n.click(),document.body.removeChild(n)}render(){return this.isLoading?L`
        <div class="center-content">
          <sl-spinner style="font-size: 2rem;"></sl-spinner>
        </div>
      `:this.event?L`
      <div class="event-card">
        <h2 class="event-title">${this.event.title}</h2>

        <div class="detail-row">
          <sl-icon name="calendar-event"></sl-icon>
          <div>
            <strong>Kiedy:</strong><br />
            ${this.formatDate(this.event.startTime)}
          </div>
        </div>

        <div class="detail-row">
          <sl-icon name="geo-alt"></sl-icon>
          <div>
            <strong>Gdzie:</strong><br />
            ${this.event.location?this.event.location:"Miejsce nie zostało podane"}
          </div>
        </div>

        ${this.event.description?L`
          <div class="description">
            ${this.event.title.startsWith("Intencja:")?L`<div class="desc-title"><strong>Intencja:</strong></div><div class="desc-content">${this.event.description.replace(/Od kogo:/gi,"").trim()}</div>`:L`<div class="desc-title"><strong>Opis:</strong></div><div class="desc-content">${this.event.description}</div>`}
          </div>
        `:""}

        <div class="actions">
          <sl-button variant="default" @click=${()=>window.history.back()}>
            <sl-icon slot="prefix" name="chevron-left"></sl-icon>
            Wróć
          </sl-button>

          <sl-button variant="primary" @click=${this.downloadCalendarEvent}>
            <sl-icon slot="prefix" name="bell-fill"></sl-icon>
            Dodaj przypomnienie (Kalendarz)
          </sl-button>
        </div>
      </div>
    `:L`
        <div class="center-content" style="flex-direction: column; align-items: center; gap: 15px;">
          <sl-icon name="exclamation-circle" style="font-size: 3rem;"></sl-icon>
          <p>Nie znaleziono szczegółów tego wydarzenia.</p>
          <sl-button variant="default" @click=${()=>window.history.back()}>
            <sl-icon slot="prefix" name="arrow-left"></sl-icon>
            Wróć
          </sl-button>
        </div>
      `}};ti.styles=[He,fe`
      :host {
        display: block;
        padding: 15px;
        width: 100%;
        max-width: 800px;
        margin: 0 auto;
        box-sizing: border-box;
      }

      .center-content {
        display: flex;
        justify-content: center;
        padding: 40px;
        color: var(--color-wood-medium);
      }

      .event-card {
        background-color: var(--color-sand-light);
        padding: 25px;
        border-radius: 12px;
        border: 2px solid var(--color-wood-medium);
        box-shadow: 0 4px 12px rgba(0,0,0,0.05);
      }

      .event-title {
        font-size: 1.8rem;
        color: var(--color-wood-dark);
        margin: 0 0 20px 0;
        text-align: center;
        font-weight: bold;
      }

      .detail-row {
        display: flex;
        align-items: flex-start;
        gap: 12px;
        margin-bottom: 15px;
        font-size: 1.1rem;
        color: var(--color-wood-dark);
      }

      .detail-row sl-icon {
        font-size: 1.5rem;
        color: var(--color-wood-medium);
        margin-top: 2px;
      }

      .description {
        margin-top: 20px;
        padding-top: 15px;
        padding-left: calc(1.5rem + 12px);
        text-align: left;
        color: var(--color-wood-dark);
      }

      .desc-title {
        margin-bottom: 5px;
      }

      .desc-content {
        white-space: pre-wrap;
        line-height: 1.6;
      }

      sl-button[variant="default"]::part(base) {
        background-color: #4A4A4A !important;
        border-color: #4A4A4A !important;
        color: var(--color-sand-light) !important;
      }

      sl-button[variant="default"]::part(base):hover,
      sl-button[variant="default"]::part(base):active {
        background-color: #333333 !important;
        border-color: #333333 !important;
      }

      sl-button::part(prefix) {
        margin-right: 8px;
      }

      .actions {
        display: flex;
        gap: 15px;
        margin-top: 25px;
        justify-content: center;
        flex-wrap: wrap;
      }
    `];yo([J()],ti.prototype,"eventId",2);yo([J()],ti.prototype,"event",2);yo([J()],ti.prototype,"isLoading",2);ti=yo([Ve("app-event-detail")],ti);var kp=Object.getOwnPropertyDescriptor,Ep=(e,t,r,a)=>{for(var i=a>1?void 0:a?kp(t,r):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(i=o(i)||i);return i};let os=class extends Le{connectedCallback(){super.connectedCallback(),this.dispatchEvent(new CustomEvent("change-title",{detail:{title:"Strona w przygotowaniu"},bubbles:!0,composed:!0}))}_navHome(){window.history.pushState({},"","/mParafia/"),window.dispatchEvent(new PopStateEvent("popstate"))}render(){return L`
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
    `}};os.styles=[He,fe`
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

    `];os=Ep([Ve("app-event-mock-detail")],os);var Tp=fe`
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
`,Ap=fe`
  :host {
    display: contents;
  }
`,_o=class extends Be{constructor(){super(...arguments),this.observedElements=[],this.disabled=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(e=>{this.emit("sl-resize",{detail:{entries:e}})}),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){this.disabled||this.startObserver()}startObserver(){const e=this.shadowRoot.querySelector("slot");if(e!==null){const t=e.assignedElements({flatten:!0});this.observedElements.forEach(r=>this.resizeObserver.unobserve(r)),this.observedElements=[],t.forEach(r=>{this.resizeObserver.observe(r),this.observedElements.push(r)})}}stopObserver(){this.resizeObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}render(){return L` <slot @slotchange=${this.handleSlotChange}></slot> `}};_o.styles=[Xe,Ap];_([P({type:Boolean,reflect:!0})],_o.prototype,"disabled",2);_([Re("disabled",{waitUntilFirstUpdate:!0})],_o.prototype,"handleDisabledChange",1);var bt=class extends Be{constructor(){super(...arguments),this.tabs=[],this.focusableTabs=[],this.panels=[],this.localize=new tr(this),this.hasScrollControls=!1,this.shouldHideScrollStartButton=!1,this.shouldHideScrollEndButton=!1,this.placement="top",this.activation="auto",this.noScrollControls=!1,this.fixedScrollControls=!1,this.scrollOffset=1}connectedCallback(){const e=Promise.all([customElements.whenDefined("sl-tab"),customElements.whenDefined("sl-tab-panel")]);super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.repositionIndicator(),this.updateScrollControls()}),this.mutationObserver=new MutationObserver(t=>{const r=t.filter(({target:a})=>{if(a===this)return!0;if(a.closest("sl-tab-group")!==this)return!1;const i=a.tagName.toLowerCase();return i==="sl-tab"||i==="sl-tab-panel"});if(r.length!==0){if(r.some(a=>!["aria-labelledby","aria-controls"].includes(a.attributeName))&&setTimeout(()=>this.setAriaLabels()),r.some(a=>a.attributeName==="disabled"))this.syncTabsAndPanels();else if(r.some(a=>a.attributeName==="active")){const i=r.filter(n=>n.attributeName==="active"&&n.target.tagName.toLowerCase()==="sl-tab").map(n=>n.target).find(n=>n.active);i&&this.setActiveTab(i)}}}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,attributeFilter:["active","disabled","name","panel"],childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),e.then(()=>{new IntersectionObserver((r,a)=>{var i;r[0].intersectionRatio>0&&(this.setAriaLabels(),this.setActiveTab((i=this.getActiveTab())!=null?i:this.tabs[0],{emitEvents:!1}),a.unobserve(r[0].target))}).observe(this.tabGroup)})})}disconnectedCallback(){var e,t;super.disconnectedCallback(),(e=this.mutationObserver)==null||e.disconnect(),this.nav&&((t=this.resizeObserver)==null||t.unobserve(this.nav))}getAllTabs(){return this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()}getAllPanels(){return[...this.body.assignedElements()].filter(e=>e.tagName.toLowerCase()==="sl-tab-panel")}getActiveTab(){return this.tabs.find(e=>e.active)}handleClick(e){const r=e.target.closest("sl-tab");r?.closest("sl-tab-group")===this&&r!==null&&this.setActiveTab(r,{scrollBehavior:"smooth"})}handleKeyDown(e){const r=e.target.closest("sl-tab");if(r?.closest("sl-tab-group")===this&&(["Enter"," "].includes(e.key)&&r!==null&&(this.setActiveTab(r,{scrollBehavior:"smooth"}),e.preventDefault()),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key))){const i=this.tabs.find(s=>s.matches(":focus")),n=this.localize.dir()==="rtl";let o=null;if(i?.tagName.toLowerCase()==="sl-tab"){if(e.key==="Home")o=this.focusableTabs[0];else if(e.key==="End")o=this.focusableTabs[this.focusableTabs.length-1];else if(["top","bottom"].includes(this.placement)&&e.key===(n?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&e.key==="ArrowUp"){const s=this.tabs.findIndex(l=>l===i);o=this.findNextFocusableTab(s,"backward")}else if(["top","bottom"].includes(this.placement)&&e.key===(n?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&e.key==="ArrowDown"){const s=this.tabs.findIndex(l=>l===i);o=this.findNextFocusableTab(s,"forward")}if(!o)return;o.tabIndex=0,o.focus({preventScroll:!0}),this.activation==="auto"?this.setActiveTab(o,{scrollBehavior:"smooth"}):this.tabs.forEach(s=>{s.tabIndex=s===o?0:-1}),["top","bottom"].includes(this.placement)&&as(o,this.nav,"horizontal"),e.preventDefault()}}}handleScrollToStart(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}setActiveTab(e,t){if(t=la({emitEvents:!0,scrollBehavior:"auto"},t),e!==this.activeTab&&!e.disabled){const r=this.activeTab;this.activeTab=e,this.tabs.forEach(a=>{a.active=a===this.activeTab,a.tabIndex=a===this.activeTab?0:-1}),this.panels.forEach(a=>{var i;return a.active=a.name===((i=this.activeTab)==null?void 0:i.panel)}),this.syncIndicator(),["top","bottom"].includes(this.placement)&&as(this.activeTab,this.nav,"horizontal",t.scrollBehavior),t.emitEvents&&(r&&this.emit("sl-tab-hide",{detail:{name:r.panel}}),this.emit("sl-tab-show",{detail:{name:this.activeTab.panel}}))}}setAriaLabels(){this.tabs.forEach(e=>{const t=this.panels.find(r=>r.name===e.panel);t&&(e.setAttribute("aria-controls",t.getAttribute("id")),t.setAttribute("aria-labelledby",e.getAttribute("id")))})}repositionIndicator(){const e=this.getActiveTab();if(!e)return;const t=e.clientWidth,r=e.clientHeight,a=this.localize.dir()==="rtl",i=this.getAllTabs(),o=i.slice(0,i.indexOf(e)).reduce((s,l)=>({left:s.left+l.clientWidth,top:s.top+l.clientHeight}),{left:0,top:0});switch(this.placement){case"top":case"bottom":this.indicator.style.width=`${t}px`,this.indicator.style.height="auto",this.indicator.style.translate=a?`${-1*o.left}px`:`${o.left}px`;break;case"start":case"end":this.indicator.style.width="auto",this.indicator.style.height=`${r}px`,this.indicator.style.translate=`0 ${o.top}px`;break}}syncTabsAndPanels(){this.tabs=this.getAllTabs(),this.focusableTabs=this.tabs.filter(e=>!e.disabled),this.panels=this.getAllPanels(),this.syncIndicator(),this.updateComplete.then(()=>this.updateScrollControls())}findNextFocusableTab(e,t){let r=null;const a=t==="forward"?1:-1;let i=e+a;for(;e<this.tabs.length;){if(r=this.tabs[i]||null,r===null){t==="forward"?r=this.focusableTabs[0]:r=this.focusableTabs[this.focusableTabs.length-1];break}if(!r.disabled)break;i+=a}return r}updateScrollButtons(){this.hasScrollControls&&!this.fixedScrollControls&&(this.shouldHideScrollStartButton=this.scrollFromStart()<=this.scrollOffset,this.shouldHideScrollEndButton=this.isScrolledToEnd())}isScrolledToEnd(){return this.scrollFromStart()+this.nav.clientWidth>=this.nav.scrollWidth-this.scrollOffset}scrollFromStart(){return this.localize.dir()==="rtl"?-this.nav.scrollLeft:this.nav.scrollLeft}updateScrollControls(){this.noScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth+1,this.updateScrollButtons()}syncIndicator(){this.getActiveTab()?(this.indicator.style.display="block",this.repositionIndicator()):this.indicator.style.display="none"}show(e){const t=this.tabs.find(r=>r.panel===e);t&&this.setActiveTab(t,{scrollBehavior:"smooth"})}render(){const e=this.localize.dir()==="rtl";return L`
      <div
        part="base"
        class=${Ne({"tab-group":!0,"tab-group--top":this.placement==="top","tab-group--bottom":this.placement==="bottom","tab-group--start":this.placement==="start","tab-group--end":this.placement==="end","tab-group--rtl":this.localize.dir()==="rtl","tab-group--has-scroll-controls":this.hasScrollControls})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls?L`
                <sl-icon-button
                  part="scroll-button scroll-button--start"
                  exportparts="base:scroll-button__base"
                  class=${Ne({"tab-group__scroll-button":!0,"tab-group__scroll-button--start":!0,"tab-group__scroll-button--start--hidden":this.shouldHideScrollStartButton})}
                  name=${e?"chevron-right":"chevron-left"}
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

          ${this.hasScrollControls?L`
                <sl-icon-button
                  part="scroll-button scroll-button--end"
                  exportparts="base:scroll-button__base"
                  class=${Ne({"tab-group__scroll-button":!0,"tab-group__scroll-button--end":!0,"tab-group__scroll-button--end--hidden":this.shouldHideScrollEndButton})}
                  name=${e?"chevron-left":"chevron-right"}
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
    `}};bt.styles=[Xe,Tp];bt.dependencies={"sl-icon-button":ut,"sl-resize-observer":_o};_([xe(".tab-group")],bt.prototype,"tabGroup",2);_([xe(".tab-group__body")],bt.prototype,"body",2);_([xe(".tab-group__nav")],bt.prototype,"nav",2);_([xe(".tab-group__indicator")],bt.prototype,"indicator",2);_([J()],bt.prototype,"hasScrollControls",2);_([J()],bt.prototype,"shouldHideScrollStartButton",2);_([J()],bt.prototype,"shouldHideScrollEndButton",2);_([P()],bt.prototype,"placement",2);_([P()],bt.prototype,"activation",2);_([P({attribute:"no-scroll-controls",type:Boolean})],bt.prototype,"noScrollControls",2);_([P({attribute:"fixed-scroll-controls",type:Boolean})],bt.prototype,"fixedScrollControls",2);_([Eh({passive:!0})],bt.prototype,"updateScrollButtons",1);_([Re("noScrollControls",{waitUntilFirstUpdate:!0})],bt.prototype,"updateScrollControls",1);_([Re("placement",{waitUntilFirstUpdate:!0})],bt.prototype,"syncIndicator",1);bt.define("sl-tab-group");var Sp=(e,t)=>{let r=0;return function(...a){window.clearTimeout(r),r=window.setTimeout(()=>{e.call(this,...a)},t)}},oc=(e,t,r)=>{const a=e[t];e[t]=function(...i){a.call(this,...i),r.call(this,a,...i)}};(()=>{if(typeof window>"u")return;if(!("onscrollend"in window)){const t=new Set,r=new WeakMap,a=n=>{for(const o of n.changedTouches)t.add(o.identifier)},i=n=>{for(const o of n.changedTouches)t.delete(o.identifier)};document.addEventListener("touchstart",a,!0),document.addEventListener("touchend",i,!0),document.addEventListener("touchcancel",i,!0),oc(EventTarget.prototype,"addEventListener",function(n,o){if(o!=="scrollend")return;const s=Sp(()=>{t.size?s():this.dispatchEvent(new Event("scrollend"))},100);n.call(this,"scroll",s,{passive:!0}),r.set(this,s)}),oc(EventTarget.prototype,"removeEventListener",function(n,o){if(o!=="scrollend")return;const s=r.get(this);s&&n.call(this,"scroll",s,{passive:!0})})}})();var Cp=fe`
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
`,Fp=0,pr=class extends Be{constructor(){super(...arguments),this.localize=new tr(this),this.attrId=++Fp,this.componentId=`sl-tab-${this.attrId}`,this.panel="",this.active=!1,this.closable=!1,this.disabled=!1,this.tabIndex=0}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tab")}handleCloseClick(e){e.stopPropagation(),this.emit("sl-close")}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false"),this.disabled&&!this.active?this.tabIndex=-1:this.tabIndex=0}render(){return this.id=this.id.length>0?this.id:this.componentId,L`
      <div
        part="base"
        class=${Ne({tab:!0,"tab--active":this.active,"tab--closable":this.closable,"tab--disabled":this.disabled})}
      >
        <slot></slot>
        ${this.closable?L`
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
    `}};pr.styles=[Xe,Cp];pr.dependencies={"sl-icon-button":ut};_([xe(".tab")],pr.prototype,"tab",2);_([P({reflect:!0})],pr.prototype,"panel",2);_([P({type:Boolean,reflect:!0})],pr.prototype,"active",2);_([P({type:Boolean,reflect:!0})],pr.prototype,"closable",2);_([P({type:Boolean,reflect:!0})],pr.prototype,"disabled",2);_([P({type:Number,reflect:!0})],pr.prototype,"tabIndex",2);_([Re("active")],pr.prototype,"handleActiveChange",1);_([Re("disabled")],pr.prototype,"handleDisabledChange",1);pr.define("sl-tab");var Dp=fe`
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
`,Op=0,gn=class extends Be{constructor(){super(...arguments),this.attrId=++Op,this.componentId=`sl-tab-panel-${this.attrId}`,this.name="",this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute("role","tabpanel")}handleActiveChange(){this.setAttribute("aria-hidden",this.active?"false":"true")}render(){return L`
      <slot
        part="base"
        class=${Ne({"tab-panel":!0,"tab-panel--active":this.active})}
      ></slot>
    `}};gn.styles=[Xe,Dp];_([P({reflect:!0})],gn.prototype,"name",2);_([P({type:Boolean,reflect:!0})],gn.prototype,"active",2);_([Re("active")],gn.prototype,"handleActiveChange",1);gn.define("sl-tab-panel");var Ip=fe`
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
`,Er=class extends Be{constructor(){super(...arguments),this.hasError=!1,this.image="",this.label="",this.initials="",this.loading="eager",this.shape="circle"}handleImageChange(){this.hasError=!1}handleImageLoadError(){this.hasError=!0,this.emit("sl-error")}render(){const e=L`
      <img
        part="image"
        class="avatar__image"
        src="${this.image}"
        loading="${this.loading}"
        alt=""
        @error="${this.handleImageLoadError}"
      />
    `;let t=L``;return this.initials?t=L`<div part="initials" class="avatar__initials">${this.initials}</div>`:t=L`
        <div part="icon" class="avatar__icon" aria-hidden="true">
          <slot name="icon">
            <sl-icon name="person-fill" library="system"></sl-icon>
          </slot>
        </div>
      `,L`
      <div
        part="base"
        class=${Ne({avatar:!0,"avatar--circle":this.shape==="circle","avatar--rounded":this.shape==="rounded","avatar--square":this.shape==="square"})}
        role="img"
        aria-label=${this.label}
      >
        ${this.image&&!this.hasError?e:t}
      </div>
    `}};Er.styles=[Xe,Ip];Er.dependencies={"sl-icon":St};_([J()],Er.prototype,"hasError",2);_([P()],Er.prototype,"image",2);_([P()],Er.prototype,"label",2);_([P()],Er.prototype,"initials",2);_([P()],Er.prototype,"loading",2);_([P({reflect:!0})],Er.prototype,"shape",2);_([Re("image")],Er.prototype,"handleImageChange",1);Er.define("sl-avatar");var Pp=fe`
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
`,Tr=class extends Be{constructor(){super(...arguments),this.hasSlotController=new Mr(this,"footer"),this.localize=new tr(this),this.modal=new A0(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=e=>{e.key==="Escape"&&this.modal.isActive()&&this.open&&(e.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),Pi(this))}disconnectedCallback(){super.disconnectedCallback(),this.modal.deactivate(),Ri(this),this.removeOpenListeners()}requestClose(e){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){const r=Nt(this,"dialog.denyClose",{dir:this.localize.dir()});zt(this.panel,r.keyframes,r.options);return}this.hide()}addOpenListeners(){var e;"CloseWatcher"in window?((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard")):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var e;(e=this.closeWatcher)==null||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),Pi(this);const e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([Qt(this.dialog),Qt(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")});const t=Nt(this,"dialog.show",{dir:this.localize.dir()}),r=Nt(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([zt(this.panel,t.keyframes,t.options),zt(this.overlay,r.keyframes,r.options)]),this.emit("sl-after-show")}else{Ps(this),this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([Qt(this.dialog),Qt(this.overlay)]);const e=Nt(this,"dialog.hide",{dir:this.localize.dir()}),t=Nt(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([zt(this.overlay,t.keyframes,t.options).then(()=>{this.overlay.hidden=!0}),zt(this.panel,e.keyframes,e.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,Ri(this);const r=this.originalTrigger;typeof r?.focus=="function"&&setTimeout(()=>r.focus()),this.emit("sl-after-hide")}}async show(){if(!this.open)return this.open=!0,ea(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,ea(this,"sl-after-hide")}render(){return L`
      <div
        part="base"
        class=${Ne({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${ge(this.noHeader?this.label:void 0)}
          aria-labelledby=${ge(this.noHeader?void 0:"title")}
          tabindex="-1"
        >
          ${this.noHeader?"":L`
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
    `}};Tr.styles=[Xe,Pp];Tr.dependencies={"sl-icon-button":ut};_([xe(".dialog")],Tr.prototype,"dialog",2);_([xe(".dialog__panel")],Tr.prototype,"panel",2);_([xe(".dialog__overlay")],Tr.prototype,"overlay",2);_([P({type:Boolean,reflect:!0})],Tr.prototype,"open",2);_([P({reflect:!0})],Tr.prototype,"label",2);_([P({attribute:"no-header",type:Boolean,reflect:!0})],Tr.prototype,"noHeader",2);_([Re("open",{waitUntilFirstUpdate:!0})],Tr.prototype,"handleOpenChange",1);ot("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});ot("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});ot("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}});ot("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});ot("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});Tr.define("sl-dialog");var Rp=Object.defineProperty,$p=Object.getOwnPropertyDescriptor,mn=(e,t,r,a)=>{for(var i=a>1?void 0:a?$p(t,r):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(i=(a?o(t,r,i):o(i))||i);return a&&i&&Rp(t,r,i),i};let Sa=class extends Le{constructor(){super(...arguments),this.groups=[],this.editingGroup=null,this.isSubmitting=!1}async firstUpdated(){this.fetchGroups()}async fetchGroups(){const e=await ve("/groups");e.ok&&(this.groups=await e.json())}openEdit(e=null){this.editingGroup=e||{name:"",description:"",photoUrl:"",color:"#B87333"},this.dialog.show()}async save(){if(!this.editingGroup?.name||this.editingGroup.name.trim()==="")return alert("Nazwa grupy jest wymagana!");if(!this.isSubmitting){this.isSubmitting=!0;try{const e=this.editingGroup.id?"PUT":"POST",t=this.editingGroup.id?`/groups/${this.editingGroup.id}`:"/groups";(await ve(t,{method:e,body:JSON.stringify(this.editingGroup)})).ok?(this.dialog.hide(),await this.fetchGroups()):alert("Wystąpił błąd przy zapisywaniu grupy.")}catch(e){console.error(e)}finally{this.isSubmitting=!1}}}async deleteGroup(e){confirm("Czy na pewno chcesz usunąć tę grupę?")&&(await ve(`/groups/${e}`,{method:"DELETE"}),this.fetchGroups())}async handleFileUpload(e){const t=e.target.files[0];if(!t)return;const r=new FormData;r.append("photo",t);try{const a=await ve("/upload",{method:"POST",body:r});if(a.ok){const i=await a.json();this.editingGroup={...this.editingGroup,photoUrl:i.url},this.requestUpdate()}else alert("Błąd podczas wgrywania zdjęcia.")}catch(a){console.error(a)}}render(){return L`
      <div class="header-actions">
        <h2>Lista Grup</h2>
        <sl-button variant="primary" @click=${()=>this.openEdit()}>
          <sl-icon slot="prefix" name="plus-lg"></sl-icon> Dodaj Grupę
        </sl-button>
      </div>
      <div class="list-container">
        ${this.groups.map(e=>L`
          <div class="list-item">
            <div class="logo-container"><sl-avatar image="${e.photoUrl||""}" label="${e.name}" initials="${e.name.substring(0,2).toUpperCase()}" style="--size: 50px;"></sl-avatar></div>
            <div class="content-container"><span class="entity-name">${e.name}</span>${e.description?L`<span class="entity-desc">${e.description}</span>`:""}</div>
            <div class="actions-container">
              <sl-button size="small" class="btn-edit" @click=${()=>this.openEdit(e)}><sl-icon slot="prefix" name="pencil"></sl-icon> Edytuj</sl-button>
              <sl-button size="small" class="btn-delete" @click=${()=>this.deleteGroup(e.id)}><sl-icon slot="prefix" name="trash"></sl-icon> Usuń</sl-button>
            </div>
          </div>
        `)}
      </div>
      <sl-dialog label="${this.editingGroup?.id?"Edytuj Grupę":"Nowa Grupa"}">
        <form>
          <sl-input label="Nazwa" required .value=${this.editingGroup?.name} @sl-input=${e=>this.editingGroup.name=e.target.value}></sl-input>
          <sl-input type="color" label="Kolor grupy" .value=${this.editingGroup?.color} @sl-input=${e=>this.editingGroup.color=e.target.value}></sl-input>
          <div style="display: flex; flex-direction: column; gap: 8px;">
            <label style="font-size: 0.9rem; color: var(--color-wood-dark);">Logo grupy (Zdjęcie z komputera)</label>
            <input type="file" accept="image/*" @change=${this.handleFileUpload} />
            ${this.editingGroup?.photoUrl?L`<img src="${this.editingGroup.photoUrl}" style="max-width: 100px; border-radius: 8px; border: 1px solid var(--color-wood-medium);" />`:""}
          </div>
          <sl-textarea label="Opis" .value=${this.editingGroup?.description} @sl-input=${e=>this.editingGroup.description=e.target.value}></sl-textarea>
        </form>
        <sl-button slot="footer" variant="primary" @click=${this.save}>Zapisz zmiany</sl-button>
      </sl-dialog>
    `}};Sa.styles=[He,fe`
      :host { display: block; padding: 10px; max-width: 900px; width: 100%; margin: 0 auto; box-sizing: border-box; }
      .header-actions { display: flex; justify-content: space-between; align-items: center; margin-bottom: 25px; }
      .header-actions h2 { margin: 0; color: var(--color-wood-dark); font-size: 1.3rem; }
      .list-container { display: flex; flex-direction: column; gap: 15px; }
      .list-item { display: flex; align-items: center; background-color: var(--color-sand-light); border: 2px solid var(--color-wood-medium); border-radius: 12px; padding: 15px 20px; transition: background-color 0.2s ease, border-color 0.2s ease; }
      .logo-container { margin-right: 20px; }
      .content-container { flex: 1; display: flex; flex-direction: column; }
      .entity-name { font-weight: bold; font-size: 1.15rem; color: var(--color-wood-dark); }
      .entity-desc { font-size: 0.9rem; color: var(--color-wood-dark); opacity: 0.8; margin-top: 6px; display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical; overflow: hidden; }
      .actions-container { display: flex; gap: 10px; margin-left: 15px; }
      .btn-edit::part(base) { background-color: #d97706; border-color: #d97706; }
      .btn-edit::part(base):hover { background-color: #db6104; border-color: #db6104; }
      .btn-edit::part(label), .btn-edit::part(prefix) { color: var(--color-sand-light) !important; }
      .btn-delete::part(base) { background-color: rgba(220, 38, 38, 0.8); border-color: transparent; }
      .btn-delete::part(base):hover { background-color: rgba(220, 38, 38, 1); }
      .btn-delete::part(label), .btn-delete::part(prefix) { color: var(--color-sand-light) !important; }
      form { display: flex; flex-direction: column; gap: 15px; color: var(--color-wood-dark); }
      sl-input, sl-textarea { --sl-input-background-color: var(--color-sand-light); --sl-input-background-color-hover: var(--color-sand-light); --sl-input-background-color-focus: var(--color-sand-light); --sl-input-border-color: var(--color-wood-medium); --sl-input-border-color-hover: var(--color-wood-medium); --sl-input-border-color-focus: var(--color-wood-medium); --sl-input-color: var(--color-wood-dark); --sl-input-color-hover: var(--color-wood-dark); --sl-input-color-focus: var(--color-wood-dark); --sl-input-label-color: var(--color-wood-dark); }
      input[type="file"] { color: var(--color-wood-dark); }
      input[type="file"]::file-selector-button { border: 1px solid var(--color-wood-medium); padding: 8px 16px; border-radius: 8px; background-color: var(--color-sand-light); color: var(--color-wood-dark); cursor: pointer; transition: all 0.2s ease; margin-right: 10px; font-weight: bold; }
      input[type="file"]::file-selector-button:hover { background-color: var(--color-cookie-medium); border-color: var(--color-wood-medium); }
      sl-dialog { --sl-panel-background-color: var(--color-sand-light); color: var(--color-wood-dark); }
      sl-dialog::part(title) { color: var(--color-wood-dark); font-weight: bold; }
      sl-dialog::part(close-button) { color: var(--color-wood-dark); }
    `];mn([J()],Sa.prototype,"groups",2);mn([xe("sl-dialog")],Sa.prototype,"dialog",2);mn([J()],Sa.prototype,"editingGroup",2);mn([J()],Sa.prototype,"isSubmitting",2);Sa=mn([Ve("app-admin-groups")],Sa);var Lp=fe`
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
`,vn=class extends Be{constructor(){super(...arguments),this.variant="primary",this.pill=!1,this.pulse=!1}render(){return L`
      <span
        part="base"
        class=${Ne({badge:!0,"badge--primary":this.variant==="primary","badge--success":this.variant==="success","badge--neutral":this.variant==="neutral","badge--warning":this.variant==="warning","badge--danger":this.variant==="danger","badge--pill":this.pill,"badge--pulse":this.pulse})}
        role="status"
      >
        <slot></slot>
      </span>
    `}};vn.styles=[Xe,Lp];_([P({reflect:!0})],vn.prototype,"variant",2);_([P({type:Boolean,reflect:!0})],vn.prototype,"pill",2);_([P({type:Boolean,reflect:!0})],vn.prototype,"pulse",2);vn.define("sl-badge");var Np=Object.defineProperty,zp=Object.getOwnPropertyDescriptor,La=(e,t,r,a)=>{for(var i=a>1?void 0:a?zp(t,r):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(i=(a?o(t,r,i):o(i))||i);return a&&i&&Np(t,r,i),i};let Nr=class extends Le{constructor(){super(...arguments),this.announcements=[],this.isSubmitting=!1,this.editingId=null}async firstUpdated(){await this.fetchAnnouncements()}async fetchAnnouncements(){try{const e=await ve("/announcements");if(e.ok){const t=await e.json();this.announcements=t.sort((r,a)=>r.isMain?-1:a.isMain?1:new Date(a.date).getTime()-new Date(r.date).getTime())}}catch(e){console.error("Błąd pobierania ogłoszeń:",e)}}async handleSubmit(e){e.preventDefault();const t=this.titleInput.value,r=this.dateInput.value,a=this.contentInput.value;if(!t||!r||!a)return alert("Wypełnij wszystkie pola!");this.isSubmitting=!0;try{const i=this.editingId?`/announcements/${this.editingId}`:"/announcements",n=this.editingId?"PUT":"POST";(await ve(i,{method:n,body:JSON.stringify({title:t,date:r,content:a})})).ok?(this.resetForm(),await this.fetchAnnouncements()):alert("Błąd zapisu ogłoszenia.")}catch(i){console.error("Błąd:",i)}finally{this.isSubmitting=!1}}async handleDelete(e){if(confirm("Czy na pewno chcesz usunąć to ogłoszenie?"))try{(await ve(`/announcements/${e}`,{method:"DELETE"})).ok&&(this.editingId===e&&this.resetForm(),await this.fetchAnnouncements())}catch(t){console.error("Błąd usuwania:",t)}}async toggleMain(e){try{(await ve(`/announcements/${e}/toggle-main`,{method:"PUT"})).ok&&await this.fetchAnnouncements()}catch(t){console.error("Błąd:",t)}}startEditing(e){this.editingId=e.id,this.titleInput.value=e.title,this.dateInput.value=new Date(e.date).toISOString().split("T")[0],this.contentInput.value=e.content,window.scrollTo({top:0,behavior:"smooth"})}resetForm(){this.editingId=null,this.titleInput.value="",this.dateInput.value="",this.contentInput.value=""}formatDate(e){return new Date(e).toLocaleDateString("pl-PL")}render(){return L`
      <div class="form-section ${this.editingId?"is-editing":""}">
        <div class="form-title">
          <h2>${this.editingId?"Edytuj ogłoszenie":"Dodaj nowe ogłoszenia"}</h2>
          ${this.editingId?L`<sl-badge variant="warning" pill>Tryb Edycji</sl-badge>`:""}
        </div>
        <form @submit="${this.handleSubmit}">
          <div class="form-row">
            <sl-input id="title-input" label="Tytuł" placeholder="np. III Niedziela Zwykła" required></sl-input>
            <sl-input id="date-input" type="date" label="Data" required></sl-input>
          </div>
          <sl-textarea id="content-input" label="Treść ogłoszeń" placeholder="Wpisz tutaj treść ogłoszeń..." rows="6" resize="auto" required></sl-textarea>
          <div class="button-group">
            <sl-button type="submit" variant="primary" class="submit-btn" ?loading="${this.isSubmitting}"><sl-icon slot="prefix" name="${this.editingId?"save":"plus-circle"}"></sl-icon>${this.editingId?"Zapisz zmiany":"Opublikuj ogłoszenia"}</sl-button>
            ${this.editingId?L`<sl-button class="btn-cancel" @click="${this.resetForm}">Anuluj</sl-button>`:""}
          </div>
        </form>
      </div>
      <sl-divider></sl-divider>
      <div class="list-section">
        <h3>Zarządzaj ogłoszeniami</h3>
        ${this.announcements.length===0?L`<p style="color: var(--color-wood-dark);">Brak ogłoszeń w bazie.</p>`:this.announcements.map(e=>L`
            <div class="announcement-item ${e.isMain?"is-main":""}">
              <sl-icon class="main-tick ${e.isMain?"is-active":""}" name="${e.isMain?"check-circle-fill":"check-circle"}" @click="${()=>this.toggleMain(e.id)}" title="${e.isMain?"Odznacz jako główne":"Ustaw jako główne"}"></sl-icon>
              <div class="announcement-header"><div class="announcement-info"><h4>${e.title} ${e.isMain?L`<sl-badge variant="success" pill>Strona Główna</sl-badge>`:""}</h4><span>Data: ${this.formatDate(e.date)}</span></div></div>
              <div class="actions">
                <sl-button size="small" class="btn-edit" @click="${()=>this.startEditing(e)}"><sl-icon slot="prefix" name="pencil"></sl-icon>Edytuj</sl-button>
                <sl-button size="small" class="btn-delete" @click="${()=>this.handleDelete(e.id)}"><sl-icon slot="prefix" name="trash"></sl-icon>Usuń</sl-button>
              </div>
            </div>
          `)}
      </div>
    `}};Nr.styles=[He,fe`
      :host { display: block; padding: 10px; max-width: 900px; width: 100%; margin: 0 auto; box-sizing: border-box; }
      .form-section { background-color: var(--color-sand-light); padding: 25px; border-radius: 12px; border: 2px solid var(--color-wood-medium); margin-bottom: 30px; transition: border-color 0.3s ease, box-shadow 0.3s ease; }
      .form-section.is-editing { border-color: var(--sl-color-warning-500); box-shadow: 0 0 0 3px rgba(217, 119, 6, 0.2); }
      .form-title { color: var(--color-wood-dark); margin-top: -20px; margin-bottom: 20px; display: flex; justify-content: space-between; align-items: center; }
      .form-row { display: flex; gap: 15px; margin-bottom: 15px; flex-wrap: wrap; }
      .form-row sl-input { flex: 1; min-width: 200px; }
      sl-textarea { margin-bottom: 20px; }
      sl-input, sl-textarea, sl-select { --sl-input-color: var(--color-wood-dark); --sl-input-color-hover: var(--color-wood-dark); --sl-input-color-focus: var(--color-wood-dark); --sl-input-label-color: var(--color-wood-dark); --sl-input-placeholder-color: var(--color-wood-dark); --sl-input-help-text-color: var(--color-wood-dark); --sl-input-background-color: var(--color-sand-light); --sl-input-background-color-hover: var(--color-sand-light); --sl-input-background-color-focus: var(--color-sand-light); --sl-input-border-color: var(--color-wood-medium); --sl-input-border-color-hover: var(--color-wood-medium); --sl-input-border-color-focus: var(--color-wood-medium); }
      sl-input::part(input)::-webkit-calendar-picker-indicator { filter: invert(30%) sepia(40%) saturate(800%) hue-rotate(345deg) brightness(90%) contrast(90%); cursor: pointer; opacity: 0.8; }
      sl-input::part(input)::-webkit-calendar-picker-indicator:hover { opacity: 1; }
      .button-group { display: flex; gap: 10px; }
      .submit-btn { flex: 1; }
      .btn-cancel::part(base) { color: var(--color-wood-dark); border-color: var(--color-wood-medium); background-color: transparent; }
      .btn-cancel::part(base):hover { background-color: var(--color-cookie-medium); border-color: var(--color-wood-dark); }
      .list-section h3 { color: var(--color-wood-dark); margin-bottom: 20px; font-size: 1.3rem; }
      .announcement-item { position: relative; background-color: var(--color-sand-light); border: 2px solid var(--color-wood-medium); border-radius: 12px; padding: 20px; margin-bottom: 15px; display: flex; flex-direction: column; gap: 12px; transition: background-color 0.2s ease, border-color 0.2s ease; }
      .announcement-item.is-main { border: 2px solid var(--sl-color-success-600); box-shadow: 0 2px 8px rgba(25, 135, 84, 0.1); }
      .main-tick { position: absolute; top: 20px; right: 20px; font-size: 1.8rem; color: var(--color-wood-medium); cursor: pointer; transition: transform 0.2s, color 0.2s; }
      .main-tick:hover { transform: scale(1.1); }
      .main-tick.is-active { color: var(--sl-color-success-600); }
      .announcement-header { display: flex; justify-content: space-between; align-items: flex-start; width: 100%; padding-right: 40px; }
      .announcement-info h4 { margin: 0 0 8px 0; color: var(--color-wood-dark); display: flex; align-items: center; gap: 10px; font-size: 1.15rem; }
      .announcement-info span { font-size: 0.9rem; color: var(--color-wood-dark); opacity: 0.8; }
      .actions { display: flex; gap: 10px; align-items: center; flex-wrap: wrap; margin-top: 5px; }
      .btn-edit::part(base) { background-color: #d97706; border-color: #d97706; }
      .btn-edit::part(base):hover { background-color: #db6104; border-color: #db6104; }
      .btn-edit::part(label), .btn-edit::part(prefix) { color: var(--color-sand-light) !important; }
      .btn-delete::part(base) { background-color: rgba(220, 38, 38, 0.8); border-color: transparent; }
      .btn-delete::part(base):hover { background-color: rgba(220, 38, 38, 1); }
      .btn-delete::part(label), .btn-delete::part(prefix) { color: var(--color-sand-light) !important; }
    `];La([J()],Nr.prototype,"announcements",2);La([J()],Nr.prototype,"isSubmitting",2);La([J()],Nr.prototype,"editingId",2);La([xe("#title-input")],Nr.prototype,"titleInput",2);La([xe("#date-input")],Nr.prototype,"dateInput",2);La([xe("#content-input")],Nr.prototype,"contentInput",2);Nr=La([Ve("app-admin-announcements")],Nr);var Mp=fe`
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
`,Na=class extends Be{constructor(){super(...arguments),this.localize=new tr(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit("sl-remove")}render(){return L`
      <span
        part="base"
        class=${Ne({tag:!0,"tag--primary":this.variant==="primary","tag--success":this.variant==="success","tag--neutral":this.variant==="neutral","tag--warning":this.variant==="warning","tag--danger":this.variant==="danger","tag--text":this.variant==="text","tag--small":this.size==="small","tag--medium":this.size==="medium","tag--large":this.size==="large","tag--pill":this.pill,"tag--removable":this.removable})}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable?L`
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
    `}};Na.styles=[Xe,Mp];Na.dependencies={"sl-icon-button":ut};_([P({reflect:!0})],Na.prototype,"variant",2);_([P({reflect:!0})],Na.prototype,"size",2);_([P({type:Boolean,reflect:!0})],Na.prototype,"pill",2);_([P({type:Boolean})],Na.prototype,"removable",2);var Bp=fe`
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
`,Up=fe`
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
`;const ta=Math.min,Bt=Math.max,Qn=Math.round,On=Math.floor,wr=e=>({x:e,y:e}),Vp={left:"right",right:"left",bottom:"top",top:"bottom"};function ss(e,t,r){return Bt(e,ta(t,r))}function si(e,t){return typeof e=="function"?e(t):e}function ra(e){return e.split("-")[0]}function li(e){return e.split("-")[1]}function G0(e){return e==="x"?"y":"x"}function js(e){return e==="y"?"height":"width"}function Ir(e){const t=e[0];return t==="t"||t==="b"?"y":"x"}function Ws(e){return G0(Ir(e))}function Hp(e,t,r){r===void 0&&(r=!1);const a=li(e),i=Ws(e),n=js(i);let o=i==="x"?a===(r?"end":"start")?"right":"left":a==="start"?"bottom":"top";return t.reference[n]>t.floating[n]&&(o=eo(o)),[o,eo(o)]}function jp(e){const t=eo(e);return[ls(e),t,ls(t)]}function ls(e){return e.includes("start")?e.replace("start","end"):e.replace("end","start")}const sc=["left","right"],lc=["right","left"],Wp=["top","bottom"],Gp=["bottom","top"];function Kp(e,t,r){switch(e){case"top":case"bottom":return r?t?lc:sc:t?sc:lc;case"left":case"right":return t?Wp:Gp;default:return[]}}function Xp(e,t,r,a){const i=li(e);let n=Kp(ra(e),r==="start",a);return i&&(n=n.map(o=>o+"-"+i),t&&(n=n.concat(n.map(ls)))),n}function eo(e){const t=ra(e);return Vp[t]+e.slice(t.length)}function Yp(e){return{top:0,right:0,bottom:0,left:0,...e}}function K0(e){return typeof e!="number"?Yp(e):{top:e,right:e,bottom:e,left:e}}function to(e){const{x:t,y:r,width:a,height:i}=e;return{width:a,height:i,top:r,left:t,right:t+a,bottom:r+i,x:t,y:r}}function cc(e,t,r){let{reference:a,floating:i}=e;const n=Ir(t),o=Ws(t),s=js(o),l=ra(t),c=n==="y",d=a.x+a.width/2-i.width/2,u=a.y+a.height/2-i.height/2,f=a[s]/2-i[s]/2;let h;switch(l){case"top":h={x:d,y:a.y-i.height};break;case"bottom":h={x:d,y:a.y+a.height};break;case"right":h={x:a.x+a.width,y:u};break;case"left":h={x:a.x-i.width,y:u};break;default:h={x:a.x,y:a.y}}switch(li(t)){case"start":h[o]-=f*(r&&c?-1:1);break;case"end":h[o]+=f*(r&&c?-1:1);break}return h}async function qp(e,t){var r;t===void 0&&(t={});const{x:a,y:i,platform:n,rects:o,elements:s,strategy:l}=e,{boundary:c="clippingAncestors",rootBoundary:d="viewport",elementContext:u="floating",altBoundary:f=!1,padding:h=0}=si(t,e),p=K0(h),m=s[f?u==="floating"?"reference":"floating":u],w=to(await n.getClippingRect({element:(r=await(n.isElement==null?void 0:n.isElement(m)))==null||r?m:m.contextElement||await(n.getDocumentElement==null?void 0:n.getDocumentElement(s.floating)),boundary:c,rootBoundary:d,strategy:l})),S=u==="floating"?{x:a,y:i,width:o.floating.width,height:o.floating.height}:o.reference,x=await(n.getOffsetParent==null?void 0:n.getOffsetParent(s.floating)),D=await(n.isElement==null?void 0:n.isElement(x))?await(n.getScale==null?void 0:n.getScale(x))||{x:1,y:1}:{x:1,y:1},M=to(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({elements:s,rect:S,offsetParent:x,strategy:l}):S);return{top:(w.top-M.top+p.top)/D.y,bottom:(M.bottom-w.bottom+p.bottom)/D.y,left:(w.left-M.left+p.left)/D.x,right:(M.right-w.right+p.right)/D.x}}const Zp=50,Jp=async(e,t,r)=>{const{placement:a="bottom",strategy:i="absolute",middleware:n=[],platform:o}=r,s=o.detectOverflow?o:{...o,detectOverflow:qp},l=await(o.isRTL==null?void 0:o.isRTL(t));let c=await o.getElementRects({reference:e,floating:t,strategy:i}),{x:d,y:u}=cc(c,a,l),f=a,h=0;const p={};for(let g=0;g<n.length;g++){const m=n[g];if(!m)continue;const{name:w,fn:S}=m,{x,y:D,data:M,reset:I}=await S({x:d,y:u,initialPlacement:a,placement:f,strategy:i,middlewareData:p,rects:c,platform:s,elements:{reference:e,floating:t}});d=x??d,u=D??u,p[w]={...p[w],...M},I&&h<Zp&&(h++,typeof I=="object"&&(I.placement&&(f=I.placement),I.rects&&(c=I.rects===!0?await o.getElementRects({reference:e,floating:t,strategy:i}):I.rects),{x:d,y:u}=cc(c,f,l)),g=-1)}return{x:d,y:u,placement:f,strategy:i,middlewareData:p}},Qp=e=>({name:"arrow",options:e,async fn(t){const{x:r,y:a,placement:i,rects:n,platform:o,elements:s,middlewareData:l}=t,{element:c,padding:d=0}=si(e,t)||{};if(c==null)return{};const u=K0(d),f={x:r,y:a},h=Ws(i),p=js(h),g=await o.getDimensions(c),m=h==="y",w=m?"top":"left",S=m?"bottom":"right",x=m?"clientHeight":"clientWidth",D=n.reference[p]+n.reference[h]-f[h]-n.floating[p],M=f[h]-n.reference[h],I=await(o.getOffsetParent==null?void 0:o.getOffsetParent(c));let T=I?I[x]:0;(!T||!await(o.isElement==null?void 0:o.isElement(I)))&&(T=s.floating[x]||n.floating[p]);const B=D/2-M/2,O=T/2-g[p]/2-1,j=ta(u[w],O),U=ta(u[S],O),N=j,Z=T-g[p]-U,se=T/2-g[p]/2+B,re=ss(N,se,Z),ce=!l.arrow&&li(i)!=null&&se!==re&&n.reference[p]/2-(se<N?j:U)-g[p]/2<0,ae=ce?se<N?se-N:se-Z:0;return{[h]:f[h]+ae,data:{[h]:re,centerOffset:se-re-ae,...ce&&{alignmentOffset:ae}},reset:ce}}}),eg=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var r,a;const{placement:i,middlewareData:n,rects:o,initialPlacement:s,platform:l,elements:c}=t,{mainAxis:d=!0,crossAxis:u=!0,fallbackPlacements:f,fallbackStrategy:h="bestFit",fallbackAxisSideDirection:p="none",flipAlignment:g=!0,...m}=si(e,t);if((r=n.arrow)!=null&&r.alignmentOffset)return{};const w=ra(i),S=Ir(s),x=ra(s)===s,D=await(l.isRTL==null?void 0:l.isRTL(c.floating)),M=f||(x||!g?[eo(s)]:jp(s)),I=p!=="none";!f&&I&&M.push(...Xp(s,g,p,D));const T=[s,...M],B=await l.detectOverflow(t,m),O=[];let j=((a=n.flip)==null?void 0:a.overflows)||[];if(d&&O.push(B[w]),u){const se=Hp(i,o,D);O.push(B[se[0]],B[se[1]])}if(j=[...j,{placement:i,overflows:O}],!O.every(se=>se<=0)){var U,N;const se=(((U=n.flip)==null?void 0:U.index)||0)+1,re=T[se];if(re&&(!(u==="alignment"?S!==Ir(re):!1)||j.every(Te=>Ir(Te.placement)===S?Te.overflows[0]>0:!0)))return{data:{index:se,overflows:j},reset:{placement:re}};let ce=(N=j.filter(ae=>ae.overflows[0]<=0).sort((ae,Te)=>ae.overflows[1]-Te.overflows[1])[0])==null?void 0:N.placement;if(!ce)switch(h){case"bestFit":{var Z;const ae=(Z=j.filter(Te=>{if(I){const W=Ir(Te.placement);return W===S||W==="y"}return!0}).map(Te=>[Te.placement,Te.overflows.filter(W=>W>0).reduce((W,pe)=>W+pe,0)]).sort((Te,W)=>Te[1]-W[1])[0])==null?void 0:Z[0];ae&&(ce=ae);break}case"initialPlacement":ce=s;break}if(i!==ce)return{reset:{placement:ce}}}return{}}}},tg=new Set(["left","top"]);async function rg(e,t){const{placement:r,platform:a,elements:i}=e,n=await(a.isRTL==null?void 0:a.isRTL(i.floating)),o=ra(r),s=li(r),l=Ir(r)==="y",c=tg.has(o)?-1:1,d=n&&l?-1:1,u=si(t,e);let{mainAxis:f,crossAxis:h,alignmentAxis:p}=typeof u=="number"?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:u.mainAxis||0,crossAxis:u.crossAxis||0,alignmentAxis:u.alignmentAxis};return s&&typeof p=="number"&&(h=s==="end"?p*-1:p),l?{x:h*d,y:f*c}:{x:f*c,y:h*d}}const ag=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var r,a;const{x:i,y:n,placement:o,middlewareData:s}=t,l=await rg(t,e);return o===((r=s.offset)==null?void 0:r.placement)&&(a=s.arrow)!=null&&a.alignmentOffset?{}:{x:i+l.x,y:n+l.y,data:{...l,placement:o}}}}},ig=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:r,y:a,placement:i,platform:n}=t,{mainAxis:o=!0,crossAxis:s=!1,limiter:l={fn:w=>{let{x:S,y:x}=w;return{x:S,y:x}}},...c}=si(e,t),d={x:r,y:a},u=await n.detectOverflow(t,c),f=Ir(ra(i)),h=G0(f);let p=d[h],g=d[f];if(o){const w=h==="y"?"top":"left",S=h==="y"?"bottom":"right",x=p+u[w],D=p-u[S];p=ss(x,p,D)}if(s){const w=f==="y"?"top":"left",S=f==="y"?"bottom":"right",x=g+u[w],D=g-u[S];g=ss(x,g,D)}const m=l.fn({...t,[h]:p,[f]:g});return{...m,data:{x:m.x-r,y:m.y-a,enabled:{[h]:o,[f]:s}}}}}},ng=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){var r,a;const{placement:i,rects:n,platform:o,elements:s}=t,{apply:l=()=>{},...c}=si(e,t),d=await o.detectOverflow(t,c),u=ra(i),f=li(i),h=Ir(i)==="y",{width:p,height:g}=n.floating;let m,w;u==="top"||u==="bottom"?(m=u,w=f===(await(o.isRTL==null?void 0:o.isRTL(s.floating))?"start":"end")?"left":"right"):(w=u,m=f==="end"?"top":"bottom");const S=g-d.top-d.bottom,x=p-d.left-d.right,D=ta(g-d[m],S),M=ta(p-d[w],x),I=!t.middlewareData.shift;let T=D,B=M;if((r=t.middlewareData.shift)!=null&&r.enabled.x&&(B=x),(a=t.middlewareData.shift)!=null&&a.enabled.y&&(T=S),I&&!f){const j=Bt(d.left,0),U=Bt(d.right,0),N=Bt(d.top,0),Z=Bt(d.bottom,0);h?B=p-2*(j!==0||U!==0?j+U:Bt(d.left,d.right)):T=g-2*(N!==0||Z!==0?N+Z:Bt(d.top,d.bottom))}await l({...t,availableWidth:B,availableHeight:T});const O=await o.getDimensions(s.floating);return p!==O.width||g!==O.height?{reset:{rects:!0}}:{}}}};function ko(){return typeof window<"u"}function ci(e){return X0(e)?(e.nodeName||"").toLowerCase():"#document"}function Ht(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Ar(e){var t;return(t=(X0(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function X0(e){return ko()?e instanceof Node||e instanceof Ht(e).Node:!1}function ur(e){return ko()?e instanceof Element||e instanceof Ht(e).Element:!1}function Br(e){return ko()?e instanceof HTMLElement||e instanceof Ht(e).HTMLElement:!1}function dc(e){return!ko()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof Ht(e).ShadowRoot}function xn(e){const{overflow:t,overflowX:r,overflowY:a,display:i}=hr(e);return/auto|scroll|overlay|hidden|clip/.test(t+a+r)&&i!=="inline"&&i!=="contents"}function og(e){return/^(table|td|th)$/.test(ci(e))}function Eo(e){try{if(e.matches(":popover-open"))return!0}catch{}try{return e.matches(":modal")}catch{return!1}}const sg=/transform|translate|scale|rotate|perspective|filter/,lg=/paint|layout|strict|content/,ga=e=>!!e&&e!=="none";let Bo;function To(e){const t=ur(e)?hr(e):e;return ga(t.transform)||ga(t.translate)||ga(t.scale)||ga(t.rotate)||ga(t.perspective)||!Gs()&&(ga(t.backdropFilter)||ga(t.filter))||sg.test(t.willChange||"")||lg.test(t.contain||"")}function cg(e){let t=aa(e);for(;Br(t)&&!ri(t);){if(To(t))return t;if(Eo(t))return null;t=aa(t)}return null}function Gs(){return Bo==null&&(Bo=typeof CSS<"u"&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),Bo}function ri(e){return/^(html|body|#document)$/.test(ci(e))}function hr(e){return Ht(e).getComputedStyle(e)}function Ao(e){return ur(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function aa(e){if(ci(e)==="html")return e;const t=e.assignedSlot||e.parentNode||dc(e)&&e.host||Ar(e);return dc(t)?t.host:t}function Y0(e){const t=aa(e);return ri(t)?e.ownerDocument?e.ownerDocument.body:e.body:Br(t)&&xn(t)?t:Y0(t)}function Ji(e,t,r){var a;t===void 0&&(t=[]),r===void 0&&(r=!0);const i=Y0(e),n=i===((a=e.ownerDocument)==null?void 0:a.body),o=Ht(i);if(n){const s=cs(o);return t.concat(o,o.visualViewport||[],xn(i)?i:[],s&&r?Ji(s):[])}else return t.concat(i,Ji(i,[],r))}function cs(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function q0(e){const t=hr(e);let r=parseFloat(t.width)||0,a=parseFloat(t.height)||0;const i=Br(e),n=i?e.offsetWidth:r,o=i?e.offsetHeight:a,s=Qn(r)!==n||Qn(a)!==o;return s&&(r=n,a=o),{width:r,height:a,$:s}}function Ks(e){return ur(e)?e:e.contextElement}function Ya(e){const t=Ks(e);if(!Br(t))return wr(1);const r=t.getBoundingClientRect(),{width:a,height:i,$:n}=q0(t);let o=(n?Qn(r.width):r.width)/a,s=(n?Qn(r.height):r.height)/i;return(!o||!Number.isFinite(o))&&(o=1),(!s||!Number.isFinite(s))&&(s=1),{x:o,y:s}}const dg=wr(0);function Z0(e){const t=Ht(e);return!Gs()||!t.visualViewport?dg:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function ug(e,t,r){return t===void 0&&(t=!1),!r||t&&r!==Ht(e)?!1:t}function Ca(e,t,r,a){t===void 0&&(t=!1),r===void 0&&(r=!1);const i=e.getBoundingClientRect(),n=Ks(e);let o=wr(1);t&&(a?ur(a)&&(o=Ya(a)):o=Ya(e));const s=ug(n,r,a)?Z0(n):wr(0);let l=(i.left+s.x)/o.x,c=(i.top+s.y)/o.y,d=i.width/o.x,u=i.height/o.y;if(n){const f=Ht(n),h=a&&ur(a)?Ht(a):a;let p=f,g=cs(p);for(;g&&a&&h!==p;){const m=Ya(g),w=g.getBoundingClientRect(),S=hr(g),x=w.left+(g.clientLeft+parseFloat(S.paddingLeft))*m.x,D=w.top+(g.clientTop+parseFloat(S.paddingTop))*m.y;l*=m.x,c*=m.y,d*=m.x,u*=m.y,l+=x,c+=D,p=Ht(g),g=cs(p)}}return to({width:d,height:u,x:l,y:c})}function So(e,t){const r=Ao(e).scrollLeft;return t?t.left+r:Ca(Ar(e)).left+r}function J0(e,t){const r=e.getBoundingClientRect(),a=r.left+t.scrollLeft-So(e,r),i=r.top+t.scrollTop;return{x:a,y:i}}function hg(e){let{elements:t,rect:r,offsetParent:a,strategy:i}=e;const n=i==="fixed",o=Ar(a),s=t?Eo(t.floating):!1;if(a===o||s&&n)return r;let l={scrollLeft:0,scrollTop:0},c=wr(1);const d=wr(0),u=Br(a);if((u||!u&&!n)&&((ci(a)!=="body"||xn(o))&&(l=Ao(a)),u)){const h=Ca(a);c=Ya(a),d.x=h.x+a.clientLeft,d.y=h.y+a.clientTop}const f=o&&!u&&!n?J0(o,l):wr(0);return{width:r.width*c.x,height:r.height*c.y,x:r.x*c.x-l.scrollLeft*c.x+d.x+f.x,y:r.y*c.y-l.scrollTop*c.y+d.y+f.y}}function fg(e){return Array.from(e.getClientRects())}function pg(e){const t=Ar(e),r=Ao(e),a=e.ownerDocument.body,i=Bt(t.scrollWidth,t.clientWidth,a.scrollWidth,a.clientWidth),n=Bt(t.scrollHeight,t.clientHeight,a.scrollHeight,a.clientHeight);let o=-r.scrollLeft+So(e);const s=-r.scrollTop;return hr(a).direction==="rtl"&&(o+=Bt(t.clientWidth,a.clientWidth)-i),{width:i,height:n,x:o,y:s}}const uc=25;function gg(e,t){const r=Ht(e),a=Ar(e),i=r.visualViewport;let n=a.clientWidth,o=a.clientHeight,s=0,l=0;if(i){n=i.width,o=i.height;const d=Gs();(!d||d&&t==="fixed")&&(s=i.offsetLeft,l=i.offsetTop)}const c=So(a);if(c<=0){const d=a.ownerDocument,u=d.body,f=getComputedStyle(u),h=d.compatMode==="CSS1Compat"&&parseFloat(f.marginLeft)+parseFloat(f.marginRight)||0,p=Math.abs(a.clientWidth-u.clientWidth-h);p<=uc&&(n-=p)}else c<=uc&&(n+=c);return{width:n,height:o,x:s,y:l}}function mg(e,t){const r=Ca(e,!0,t==="fixed"),a=r.top+e.clientTop,i=r.left+e.clientLeft,n=Br(e)?Ya(e):wr(1),o=e.clientWidth*n.x,s=e.clientHeight*n.y,l=i*n.x,c=a*n.y;return{width:o,height:s,x:l,y:c}}function hc(e,t,r){let a;if(t==="viewport")a=gg(e,r);else if(t==="document")a=pg(Ar(e));else if(ur(t))a=mg(t,r);else{const i=Z0(e);a={x:t.x-i.x,y:t.y-i.y,width:t.width,height:t.height}}return to(a)}function Q0(e,t){const r=aa(e);return r===t||!ur(r)||ri(r)?!1:hr(r).position==="fixed"||Q0(r,t)}function vg(e,t){const r=t.get(e);if(r)return r;let a=Ji(e,[],!1).filter(s=>ur(s)&&ci(s)!=="body"),i=null;const n=hr(e).position==="fixed";let o=n?aa(e):e;for(;ur(o)&&!ri(o);){const s=hr(o),l=To(o);!l&&s.position==="fixed"&&(i=null),(n?!l&&!i:!l&&s.position==="static"&&!!i&&(i.position==="absolute"||i.position==="fixed")||xn(o)&&!l&&Q0(e,o))?a=a.filter(d=>d!==o):i=s,o=aa(o)}return t.set(e,a),a}function xg(e){let{element:t,boundary:r,rootBoundary:a,strategy:i}=e;const o=[...r==="clippingAncestors"?Eo(t)?[]:vg(t,this._c):[].concat(r),a],s=hc(t,o[0],i);let l=s.top,c=s.right,d=s.bottom,u=s.left;for(let f=1;f<o.length;f++){const h=hc(t,o[f],i);l=Bt(h.top,l),c=ta(h.right,c),d=ta(h.bottom,d),u=Bt(h.left,u)}return{width:c-u,height:d-l,x:u,y:l}}function bg(e){const{width:t,height:r}=q0(e);return{width:t,height:r}}function wg(e,t,r){const a=Br(t),i=Ar(t),n=r==="fixed",o=Ca(e,!0,n,t);let s={scrollLeft:0,scrollTop:0};const l=wr(0);function c(){l.x=So(i)}if(a||!a&&!n)if((ci(t)!=="body"||xn(i))&&(s=Ao(t)),a){const h=Ca(t,!0,n,t);l.x=h.x+t.clientLeft,l.y=h.y+t.clientTop}else i&&c();n&&!a&&i&&c();const d=i&&!a&&!n?J0(i,s):wr(0),u=o.left+s.scrollLeft-l.x-d.x,f=o.top+s.scrollTop-l.y-d.y;return{x:u,y:f,width:o.width,height:o.height}}function Uo(e){return hr(e).position==="static"}function fc(e,t){if(!Br(e)||hr(e).position==="fixed")return null;if(t)return t(e);let r=e.offsetParent;return Ar(e)===r&&(r=r.ownerDocument.body),r}function ed(e,t){const r=Ht(e);if(Eo(e))return r;if(!Br(e)){let i=aa(e);for(;i&&!ri(i);){if(ur(i)&&!Uo(i))return i;i=aa(i)}return r}let a=fc(e,t);for(;a&&og(a)&&Uo(a);)a=fc(a,t);return a&&ri(a)&&Uo(a)&&!To(a)?r:a||cg(e)||r}const yg=async function(e){const t=this.getOffsetParent||ed,r=this.getDimensions,a=await r(e.floating);return{reference:wg(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:a.width,height:a.height}}};function _g(e){return hr(e).direction==="rtl"}const Kn={convertOffsetParentRelativeRectToViewportRelativeRect:hg,getDocumentElement:Ar,getClippingRect:xg,getOffsetParent:ed,getElementRects:yg,getClientRects:fg,getDimensions:bg,getScale:Ya,isElement:ur,isRTL:_g};function td(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function kg(e,t){let r=null,a;const i=Ar(e);function n(){var s;clearTimeout(a),(s=r)==null||s.disconnect(),r=null}function o(s,l){s===void 0&&(s=!1),l===void 0&&(l=1),n();const c=e.getBoundingClientRect(),{left:d,top:u,width:f,height:h}=c;if(s||t(),!f||!h)return;const p=On(u),g=On(i.clientWidth-(d+f)),m=On(i.clientHeight-(u+h)),w=On(d),x={rootMargin:-p+"px "+-g+"px "+-m+"px "+-w+"px",threshold:Bt(0,ta(1,l))||1};let D=!0;function M(I){const T=I[0].intersectionRatio;if(T!==l){if(!D)return o();T?o(!1,T):a=setTimeout(()=>{o(!1,1e-7)},1e3)}T===1&&!td(c,e.getBoundingClientRect())&&o(),D=!1}try{r=new IntersectionObserver(M,{...x,root:i.ownerDocument})}catch{r=new IntersectionObserver(M,x)}r.observe(e)}return o(!0),n}function Eg(e,t,r,a){a===void 0&&(a={});const{ancestorScroll:i=!0,ancestorResize:n=!0,elementResize:o=typeof ResizeObserver=="function",layoutShift:s=typeof IntersectionObserver=="function",animationFrame:l=!1}=a,c=Ks(e),d=i||n?[...c?Ji(c):[],...t?Ji(t):[]]:[];d.forEach(w=>{i&&w.addEventListener("scroll",r,{passive:!0}),n&&w.addEventListener("resize",r)});const u=c&&s?kg(c,r):null;let f=-1,h=null;o&&(h=new ResizeObserver(w=>{let[S]=w;S&&S.target===c&&h&&t&&(h.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var x;(x=h)==null||x.observe(t)})),r()}),c&&!l&&h.observe(c),t&&h.observe(t));let p,g=l?Ca(e):null;l&&m();function m(){const w=Ca(e);g&&!td(g,w)&&r(),g=w,p=requestAnimationFrame(m)}return r(),()=>{var w;d.forEach(S=>{i&&S.removeEventListener("scroll",r),n&&S.removeEventListener("resize",r)}),u?.(),(w=h)==null||w.disconnect(),h=null,l&&cancelAnimationFrame(p)}}const Tg=ag,Ag=ig,Sg=eg,pc=ng,Cg=Qp,Fg=(e,t,r)=>{const a=new Map,i={platform:Kn,...r},n={...i.platform,_c:a};return Jp(e,t,{...i,platform:n})};function Dg(e){return Og(e)}function Vo(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}function Og(e){for(let t=e;t;t=Vo(t))if(t instanceof Element&&getComputedStyle(t).display==="none")return null;for(let t=Vo(e);t;t=Vo(t)){if(!(t instanceof Element))continue;const r=getComputedStyle(t);if(r.display!=="contents"&&(r.position!=="static"||To(r)||t.tagName==="BODY"))return t}return null}function Ig(e){return e!==null&&typeof e=="object"&&"getBoundingClientRect"in e&&("contextElement"in e?e.contextElement instanceof Element:!0)}var je=class extends Be{constructor(){super(...arguments),this.localize=new tr(this),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect(),r=this.placement.includes("top")||this.placement.includes("bottom");let a=0,i=0,n=0,o=0,s=0,l=0,c=0,d=0;r?e.top<t.top?(a=e.left,i=e.bottom,n=e.right,o=e.bottom,s=t.left,l=t.top,c=t.right,d=t.top):(a=t.left,i=t.bottom,n=t.right,o=t.bottom,s=e.left,l=e.top,c=e.right,d=e.top):e.left<t.left?(a=e.right,i=e.top,n=t.left,o=t.top,s=e.right,l=e.bottom,c=t.left,d=t.bottom):(a=t.right,i=t.top,n=e.left,o=e.top,s=t.right,l=t.bottom,c=e.left,d=e.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${a}px`),this.style.setProperty("--hover-bridge-top-left-y",`${i}px`),this.style.setProperty("--hover-bridge-top-right-x",`${n}px`),this.style.setProperty("--hover-bridge-top-right-y",`${o}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${s}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${l}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${c}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${d}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has("active")&&(this.active?this.start():this.stop()),e.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else this.anchor instanceof Element||Ig(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){!this.anchorEl||!this.active||(this.cleanup=Eg(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>e())):e()})}reposition(){if(!this.active||!this.anchorEl)return;const e=[Tg({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push(pc({apply:({rects:r})=>{const a=this.sync==="width"||this.sync==="both",i=this.sync==="height"||this.sync==="both";this.popup.style.width=a?`${r.reference.width}px`:"",this.popup.style.height=i?`${r.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&e.push(Sg({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&e.push(Ag({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?e.push(pc({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:r,availableHeight:a})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${a}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${r}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&e.push(Cg({element:this.arrowEl,padding:this.arrowPadding}));const t=this.strategy==="absolute"?r=>Kn.getOffsetParent(r,Dg):Kn.getOffsetParent;Fg(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:this.strategy,platform:xo(la({},Kn),{getOffsetParent:t})}).then(({x:r,y:a,middlewareData:i,placement:n})=>{const o=this.localize.dir()==="rtl",s={top:"bottom",right:"left",bottom:"top",left:"right"}[n.split("-")[0]];if(this.setAttribute("data-current-placement",n),Object.assign(this.popup.style,{left:`${r}px`,top:`${a}px`}),this.arrow){const l=i.arrow.x,c=i.arrow.y;let d="",u="",f="",h="";if(this.arrowPlacement==="start"){const p=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";d=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",u=o?p:"",h=o?"":p}else if(this.arrowPlacement==="end"){const p=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";u=o?"":p,h=o?p:"",f=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(h=typeof l=="number"?"calc(50% - var(--arrow-size-diagonal))":"",d=typeof c=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(h=typeof l=="number"?`${l}px`:"",d=typeof c=="number"?`${c}px`:"");Object.assign(this.arrowEl.style,{top:d,right:u,bottom:f,left:h,[s]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return L`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${Ne({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${Ne({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?L`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};je.styles=[Xe,Up];_([xe(".popup")],je.prototype,"popup",2);_([xe(".popup__arrow")],je.prototype,"arrowEl",2);_([P()],je.prototype,"anchor",2);_([P({type:Boolean,reflect:!0})],je.prototype,"active",2);_([P({reflect:!0})],je.prototype,"placement",2);_([P({reflect:!0})],je.prototype,"strategy",2);_([P({type:Number})],je.prototype,"distance",2);_([P({type:Number})],je.prototype,"skidding",2);_([P({type:Boolean})],je.prototype,"arrow",2);_([P({attribute:"arrow-placement"})],je.prototype,"arrowPlacement",2);_([P({attribute:"arrow-padding",type:Number})],je.prototype,"arrowPadding",2);_([P({type:Boolean})],je.prototype,"flip",2);_([P({attribute:"flip-fallback-placements",converter:{fromAttribute:e=>e.split(" ").map(t=>t.trim()).filter(t=>t!==""),toAttribute:e=>e.join(" ")}})],je.prototype,"flipFallbackPlacements",2);_([P({attribute:"flip-fallback-strategy"})],je.prototype,"flipFallbackStrategy",2);_([P({type:Object})],je.prototype,"flipBoundary",2);_([P({attribute:"flip-padding",type:Number})],je.prototype,"flipPadding",2);_([P({type:Boolean})],je.prototype,"shift",2);_([P({type:Object})],je.prototype,"shiftBoundary",2);_([P({attribute:"shift-padding",type:Number})],je.prototype,"shiftPadding",2);_([P({attribute:"auto-size"})],je.prototype,"autoSize",2);_([P()],je.prototype,"sync",2);_([P({type:Object})],je.prototype,"autoSizeBoundary",2);_([P({attribute:"auto-size-padding",type:Number})],je.prototype,"autoSizePadding",2);_([P({attribute:"hover-bridge",type:Boolean})],je.prototype,"hoverBridge",2);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ds extends $s{constructor(t){if(super(t),this.it=qe,t.type!==Gr.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===qe||t==null)return this._t=void 0,this.it=t;if(t===Jt)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const r=[t];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}}ds.directiveName="unsafeHTML",ds.resultType=1;const rd=Rs(ds);var Ce=class extends Be{constructor(){super(...arguments),this.formControlController=new oi(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new Mr(this,"help-text","label"),this.localize=new tr(this),this.typeToSelectString="",this.hasFocus=!1,this.displayLabel="",this.selectedOptions=[],this.valueHasChanged=!1,this.name="",this._value="",this.defaultValue="",this.size="medium",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.clearable=!1,this.open=!1,this.hoist=!1,this.filled=!1,this.pill=!1,this.label="",this.placement="bottom",this.helpText="",this.form="",this.required=!1,this.getTag=e=>L`
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
        @sl-remove=${t=>this.handleTagRemove(t,e)}
      >
        ${e.getTextLabel()}
      </sl-tag>
    `,this.handleDocumentFocusIn=e=>{const t=e.composedPath();this&&!t.includes(this)&&this.hide()},this.handleDocumentKeyDown=e=>{const t=e.target,r=t.closest(".select__clear")!==null,a=t.closest("sl-icon-button")!==null;if(!(r||a)){if(e.key==="Escape"&&this.open&&!this.closeWatcher&&(e.preventDefault(),e.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),e.key==="Enter"||e.key===" "&&this.typeToSelectString===""){if(e.preventDefault(),e.stopImmediatePropagation(),!this.open){this.show();return}this.currentOption&&!this.currentOption.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})));return}if(["ArrowUp","ArrowDown","Home","End"].includes(e.key)){const i=this.getAllOptions(),n=i.indexOf(this.currentOption);let o=Math.max(0,n);if(e.preventDefault(),!this.open&&(this.show(),this.currentOption))return;e.key==="ArrowDown"?(o=n+1,o>i.length-1&&(o=0)):e.key==="ArrowUp"?(o=n-1,o<0&&(o=i.length-1)):e.key==="Home"?o=0:e.key==="End"&&(o=i.length-1),this.setCurrentOption(i[o])}if(e.key&&e.key.length===1||e.key==="Backspace"){const i=this.getAllOptions();if(e.metaKey||e.ctrlKey||e.altKey)return;if(!this.open){if(e.key==="Backspace")return;this.show()}e.stopPropagation(),e.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),e.key==="Backspace"?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=e.key.toLowerCase();for(const n of i)if(n.getTextLabel().toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(n);break}}}},this.handleDocumentMouseDown=e=>{const t=e.composedPath();this&&!t.includes(this)&&this.hide()}}get value(){return this._value}set value(e){this.multiple?e=Array.isArray(e)?e:e.split(" "):e=Array.isArray(e)?e.join(" "):e,this._value!==e&&(this.valueHasChanged=!0,this._value=e)}get validity(){return this.valueInput.validity}get validationMessage(){return this.valueInput.validationMessage}connectedCallback(){super.connectedCallback(),setTimeout(()=>{this.handleDefaultSlotChange()}),this.open=!1}addOpenListeners(){var e;document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().addEventListener("focusin",this.handleDocumentFocusIn),"CloseWatcher"in window&&((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.open&&(this.hide(),this.displayInput.focus({preventScroll:!0}))})}removeOpenListeners(){var e;document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().removeEventListener("focusin",this.handleDocumentFocusIn),(e=this.closeWatcher)==null||e.destroy()}handleFocus(){this.hasFocus=!0,this.displayInput.setSelectionRange(0,0),this.emit("sl-focus")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleLabelClick(){this.displayInput.focus()}handleComboboxMouseDown(e){const r=e.composedPath().some(a=>a instanceof Element&&a.tagName.toLowerCase()==="sl-icon-button");this.disabled||r||(e.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(e){e.key!=="Tab"&&(e.stopPropagation(),this.handleDocumentKeyDown(e))}handleClearClick(e){e.stopPropagation(),this.valueHasChanged=!0,this.value!==""&&(this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")}))}handleClearMouseDown(e){e.stopPropagation(),e.preventDefault()}handleOptionClick(e){const r=e.target.closest("sl-option"),a=this.value;r&&!r.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(r):this.setSelectedOptions(r),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.value!==a&&this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){customElements.get("sl-option")||customElements.whenDefined("sl-option").then(()=>this.handleDefaultSlotChange());const e=this.getAllOptions(),t=this.valueHasChanged?this.value:this.defaultValue,r=Array.isArray(t)?t:[t],a=[];e.forEach(i=>a.push(i.value)),this.setSelectedOptions(e.filter(i=>r.includes(i.value)))}handleTagRemove(e,t){e.stopPropagation(),this.valueHasChanged=!0,this.disabled||(this.toggleOptionSelection(t,!1),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}))}getAllOptions(){return[...this.querySelectorAll("sl-option")]}getFirstOption(){return this.querySelector("sl-option")}setCurrentOption(e){this.getAllOptions().forEach(r=>{r.current=!1,r.tabIndex=-1}),e&&(this.currentOption=e,e.current=!0,e.tabIndex=0,e.focus())}setSelectedOptions(e){const t=this.getAllOptions(),r=Array.isArray(e)?e:[e];t.forEach(a=>a.selected=!1),r.length&&r.forEach(a=>a.selected=!0),this.selectionChanged()}toggleOptionSelection(e,t){t===!0||t===!1?e.selected=t:e.selected=!e.selected,this.selectionChanged()}selectionChanged(){var e,t,r;const a=this.getAllOptions();this.selectedOptions=a.filter(n=>n.selected);const i=this.valueHasChanged;if(this.multiple)this.value=this.selectedOptions.map(n=>n.value),this.placeholder&&this.value.length===0?this.displayLabel="":this.displayLabel=this.localize.term("numOptionsSelected",this.selectedOptions.length);else{const n=this.selectedOptions[0];this.value=(e=n?.value)!=null?e:"",this.displayLabel=(r=(t=n?.getTextLabel)==null?void 0:t.call(n))!=null?r:""}this.valueHasChanged=i,this.updateComplete.then(()=>{this.formControlController.updateValidity()})}get tags(){return this.selectedOptions.map((e,t)=>{if(t<this.maxOptionsVisible||this.maxOptionsVisible<=0){const r=this.getTag(e,t);return L`<div @sl-remove=${a=>this.handleTagRemove(a,e)}>
          ${typeof r=="string"?rd(r):r}
        </div>`}else if(t===this.maxOptionsVisible)return L`<sl-tag size=${this.size}>+${this.selectedOptions.length-t}</sl-tag>`;return L``})}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleDisabledChange(){this.disabled&&(this.open=!1,this.handleOpenChange())}attributeChangedCallback(e,t,r){if(super.attributeChangedCallback(e,t,r),e==="value"){const a=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=a}}handleValueChange(){if(!this.valueHasChanged){const r=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=r}const e=this.getAllOptions(),t=Array.isArray(this.value)?this.value:[this.value];this.setSelectedOptions(e.filter(r=>t.includes(r.value)))}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption()),this.emit("sl-show"),this.addOpenListeners(),await Qt(this),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)});const{keyframes:e,options:t}=Nt(this,"select.show",{dir:this.localize.dir()});await zt(this.popup.popup,e,t),this.currentOption&&as(this.currentOption,this.listbox,"vertical","auto"),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await Qt(this);const{keyframes:e,options:t}=Nt(this,"select.hide",{dir:this.localize.dir()});await zt(this.popup.popup,e,t),this.listbox.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,ea(this,"sl-after-show")}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,ea(this,"sl-after-hide")}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(e){this.valueInput.setCustomValidity(e),this.formControlController.updateValidity()}focus(e){this.displayInput.focus(e)}blur(){this.displayInput.blur()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),r=this.label?!0:!!e,a=this.helpText?!0:!!t,i=this.clearable&&!this.disabled&&this.value.length>0,n=this.placeholder&&this.value&&this.value.length<=0;return L`
      <div
        part="form-control"
        class=${Ne({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":r,"form-control--has-help-text":a})}
      >
        <label
          id="label"
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${r?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <sl-popup
            class=${Ne({select:!0,"select--standard":!0,"select--filled":this.filled,"select--pill":this.pill,"select--open":this.open,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--focused":this.hasFocus,"select--placeholder-visible":n,"select--top":this.placement==="top","select--bottom":this.placement==="bottom","select--small":this.size==="small","select--medium":this.size==="medium","select--large":this.size==="large"})}
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

              ${this.multiple?L`<div part="tags" class="select__tags">${this.tags}</div>`:""}

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

              ${i?L`
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
          aria-hidden=${a?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};Ce.styles=[Xe,hn,Bp];Ce.dependencies={"sl-icon":St,"sl-popup":je,"sl-tag":Na};_([xe(".select")],Ce.prototype,"popup",2);_([xe(".select__combobox")],Ce.prototype,"combobox",2);_([xe(".select__display-input")],Ce.prototype,"displayInput",2);_([xe(".select__value-input")],Ce.prototype,"valueInput",2);_([xe(".select__listbox")],Ce.prototype,"listbox",2);_([J()],Ce.prototype,"hasFocus",2);_([J()],Ce.prototype,"displayLabel",2);_([J()],Ce.prototype,"currentOption",2);_([J()],Ce.prototype,"selectedOptions",2);_([J()],Ce.prototype,"valueHasChanged",2);_([P()],Ce.prototype,"name",2);_([J()],Ce.prototype,"value",1);_([P({attribute:"value"})],Ce.prototype,"defaultValue",2);_([P({reflect:!0})],Ce.prototype,"size",2);_([P()],Ce.prototype,"placeholder",2);_([P({type:Boolean,reflect:!0})],Ce.prototype,"multiple",2);_([P({attribute:"max-options-visible",type:Number})],Ce.prototype,"maxOptionsVisible",2);_([P({type:Boolean,reflect:!0})],Ce.prototype,"disabled",2);_([P({type:Boolean})],Ce.prototype,"clearable",2);_([P({type:Boolean,reflect:!0})],Ce.prototype,"open",2);_([P({type:Boolean})],Ce.prototype,"hoist",2);_([P({type:Boolean,reflect:!0})],Ce.prototype,"filled",2);_([P({type:Boolean,reflect:!0})],Ce.prototype,"pill",2);_([P()],Ce.prototype,"label",2);_([P({reflect:!0})],Ce.prototype,"placement",2);_([P({attribute:"help-text"})],Ce.prototype,"helpText",2);_([P({reflect:!0})],Ce.prototype,"form",2);_([P({type:Boolean,reflect:!0})],Ce.prototype,"required",2);_([P()],Ce.prototype,"getTag",2);_([Re("disabled",{waitUntilFirstUpdate:!0})],Ce.prototype,"handleDisabledChange",1);_([Re(["defaultValue","value"],{waitUntilFirstUpdate:!0})],Ce.prototype,"handleValueChange",1);_([Re("open",{waitUntilFirstUpdate:!0})],Ce.prototype,"handleOpenChange",1);ot("select.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});ot("select.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});Ce.define("sl-select");var Pg=fe`
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
`,rr=class extends Be{constructor(){super(...arguments),this.localize=new tr(this),this.isInitialized=!1,this.current=!1,this.selected=!1,this.hasHover=!1,this.value="",this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false")}handleDefaultSlotChange(){this.isInitialized?customElements.whenDefined("sl-select").then(()=>{const e=this.closest("sl-select");e&&e.handleDefaultSlotChange()}):this.isInitialized=!0}handleMouseEnter(){this.hasHover=!0}handleMouseLeave(){this.hasHover=!1}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleValueChange(){typeof this.value!="string"&&(this.value=String(this.value)),this.value.includes(" ")&&(console.error("Option values cannot include a space. All spaces have been replaced with underscores.",this),this.value=this.value.replace(/ /g,"_"))}getTextLabel(){const e=this.childNodes;let t="";return[...e].forEach(r=>{r.nodeType===Node.ELEMENT_NODE&&(r.hasAttribute("slot")||(t+=r.textContent)),r.nodeType===Node.TEXT_NODE&&(t+=r.textContent)}),t.trim()}render(){return L`
      <div
        part="base"
        class=${Ne({option:!0,"option--current":this.current,"option--disabled":this.disabled,"option--selected":this.selected,"option--hover":this.hasHover})}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <sl-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></sl-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `}};rr.styles=[Xe,Pg];rr.dependencies={"sl-icon":St};_([xe(".option__label")],rr.prototype,"defaultSlot",2);_([J()],rr.prototype,"current",2);_([J()],rr.prototype,"selected",2);_([J()],rr.prototype,"hasHover",2);_([P({reflect:!0})],rr.prototype,"value",2);_([P({type:Boolean,reflect:!0})],rr.prototype,"disabled",2);_([Re("disabled")],rr.prototype,"handleDisabledChange",1);_([Re("selected")],rr.prototype,"handleSelectedChange",1);_([Re("value")],rr.prototype,"handleValueChange",1);rr.define("sl-option");var Rg=fe`
  :host {
    display: contents;

    /* For better DX, we'll reset the margin here so the base part can inherit it */
    margin: 0;
  }

  .alert {
    position: relative;
    display: flex;
    align-items: stretch;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-top-width: calc(var(--sl-panel-border-width) * 3);
    border-radius: var(--sl-border-radius-medium);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-normal);
    line-height: 1.6;
    color: var(--sl-color-neutral-700);
    margin: inherit;
    overflow: hidden;
  }

  .alert:not(.alert--has-icon) .alert__icon,
  .alert:not(.alert--closable) .alert__close-button {
    display: none;
  }

  .alert__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-large);
    padding-inline-start: var(--sl-spacing-large);
  }

  .alert--has-countdown {
    border-bottom: none;
  }

  .alert--primary {
    border-top-color: var(--sl-color-primary-600);
  }

  .alert--primary .alert__icon {
    color: var(--sl-color-primary-600);
  }

  .alert--success {
    border-top-color: var(--sl-color-success-600);
  }

  .alert--success .alert__icon {
    color: var(--sl-color-success-600);
  }

  .alert--neutral {
    border-top-color: var(--sl-color-neutral-600);
  }

  .alert--neutral .alert__icon {
    color: var(--sl-color-neutral-600);
  }

  .alert--warning {
    border-top-color: var(--sl-color-warning-600);
  }

  .alert--warning .alert__icon {
    color: var(--sl-color-warning-600);
  }

  .alert--danger {
    border-top-color: var(--sl-color-danger-600);
  }

  .alert--danger .alert__icon {
    color: var(--sl-color-danger-600);
  }

  .alert__message {
    flex: 1 1 auto;
    display: block;
    padding: var(--sl-spacing-large);
    overflow: hidden;
  }

  .alert__close-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
    margin-inline-end: var(--sl-spacing-medium);
    align-self: center;
  }

  .alert__countdown {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: calc(var(--sl-panel-border-width) * 3);
    background-color: var(--sl-panel-border-color);
    display: flex;
  }

  .alert__countdown--ltr {
    justify-content: flex-end;
  }

  .alert__countdown .alert__countdown-elapsed {
    height: 100%;
    width: 0;
  }

  .alert--primary .alert__countdown-elapsed {
    background-color: var(--sl-color-primary-600);
  }

  .alert--success .alert__countdown-elapsed {
    background-color: var(--sl-color-success-600);
  }

  .alert--neutral .alert__countdown-elapsed {
    background-color: var(--sl-color-neutral-600);
  }

  .alert--warning .alert__countdown-elapsed {
    background-color: var(--sl-color-warning-600);
  }

  .alert--danger .alert__countdown-elapsed {
    background-color: var(--sl-color-danger-600);
  }

  .alert__timer {
    display: none;
  }
`,Gt=class ma extends Be{constructor(){super(...arguments),this.hasSlotController=new Mr(this,"icon","suffix"),this.localize=new tr(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0,this.remainingTime=this.duration}static get toastStack(){return this.currentToastStack||(this.currentToastStack=Object.assign(document.createElement("div"),{className:"sl-toast-stack"})),this.currentToastStack}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){this.handleCountdownChange(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration),this.remainingTime=this.duration,this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100))}pauseAutoHide(){var t;(t=this.countdownAnimation)==null||t.pause(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval)}resumeAutoHide(){var t;this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.remainingTime),this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100),(t=this.countdownAnimation)==null||t.play())}handleCountdownChange(){if(this.open&&this.duration<1/0&&this.countdown){const{countdownElement:t}=this,r="100%",a="0";this.countdownAnimation=t.animate([{width:r},{width:a}],{duration:this.duration,easing:"linear"})}}handleCloseClick(){this.hide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await Qt(this.base),this.base.hidden=!1;const{keyframes:t,options:r}=Nt(this,"alert.show",{dir:this.localize.dir()});await zt(this.base,t,r),this.emit("sl-after-show")}else{Ps(this),this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),await Qt(this.base);const{keyframes:t,options:r}=Nt(this,"alert.hide",{dir:this.localize.dir()});await zt(this.base,t,r),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,ea(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,ea(this,"sl-after-hide")}async toast(){return new Promise(t=>{this.handleCountdownChange(),ma.toastStack.parentElement===null&&document.body.append(ma.toastStack),ma.toastStack.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("sl-after-hide",()=>{ma.toastStack.removeChild(this),t(),ma.toastStack.querySelector("sl-alert")===null&&ma.toastStack.remove()},{once:!0})})}render(){return L`
      <div
        part="base"
        class=${Ne({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-countdown":!!this.countdown,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":this.variant==="primary","alert--success":this.variant==="success","alert--neutral":this.variant==="neutral","alert--warning":this.variant==="warning","alert--danger":this.variant==="danger"})}
        role="alert"
        aria-hidden=${this.open?"false":"true"}
        @mouseenter=${this.pauseAutoHide}
        @mouseleave=${this.resumeAutoHide}
      >
        <div part="icon" class="alert__icon">
          <slot name="icon"></slot>
        </div>

        <div part="message" class="alert__message" aria-live="polite">
          <slot></slot>
        </div>

        ${this.closable?L`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                class="alert__close-button"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                @click=${this.handleCloseClick}
              ></sl-icon-button>
            `:""}

        <div role="timer" class="alert__timer">${this.remainingTime}</div>

        ${this.countdown?L`
              <div
                class=${Ne({alert__countdown:!0,"alert__countdown--ltr":this.countdown==="ltr"})}
              >
                <div class="alert__countdown-elapsed"></div>
              </div>
            `:""}
      </div>
    `}};Gt.styles=[Xe,Rg];Gt.dependencies={"sl-icon-button":ut};_([xe('[part~="base"]')],Gt.prototype,"base",2);_([xe(".alert__countdown-elapsed")],Gt.prototype,"countdownElement",2);_([P({type:Boolean,reflect:!0})],Gt.prototype,"open",2);_([P({type:Boolean,reflect:!0})],Gt.prototype,"closable",2);_([P({reflect:!0})],Gt.prototype,"variant",2);_([P({type:Number})],Gt.prototype,"duration",2);_([P({type:String,reflect:!0})],Gt.prototype,"countdown",2);_([J()],Gt.prototype,"remainingTime",2);_([Re("open",{waitUntilFirstUpdate:!0})],Gt.prototype,"handleOpenChange",1);_([Re("duration")],Gt.prototype,"handleDurationChange",1);var $g=Gt;ot("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});ot("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});$g.define("sl-alert");/*! xlsx.js (C) 2013-present SheetJS -- http://sheetjs.com */var ad=1252,Lg=[874,932,936,949,950,1250,1251,1252,1253,1254,1255,1256,1257,1258,1e4],Xs={0:1252,1:65001,2:65001,77:1e4,128:932,129:949,130:1361,134:936,136:950,161:1253,162:1254,163:1258,177:1255,178:1256,186:1257,204:1251,222:874,238:1250,255:1252,69:6969},Ys=function(e){Lg.indexOf(e)!=-1&&(ad=Xs[0]=e)};function Ng(){Ys(1252)}var lr=function(e){Ys(e)};function id(){lr(1200),Ng()}function gc(e){for(var t=[],r=0,a=e.length;r<a;++r)t[r]=e.charCodeAt(r);return t}function zg(e){for(var t=[],r=0;r<e.length>>1;++r)t[r]=String.fromCharCode(e.charCodeAt(2*r)+(e.charCodeAt(2*r+1)<<8));return t.join("")}function nd(e){for(var t=[],r=0;r<e.length>>1;++r)t[r]=String.fromCharCode(e.charCodeAt(2*r+1)+(e.charCodeAt(2*r)<<8));return t.join("")}var Ci=function(e){var t=e.charCodeAt(0),r=e.charCodeAt(1);return t==255&&r==254?zg(e.slice(2)):t==254&&r==255?nd(e.slice(2)):t==65279?e.slice(1):e},In=function(t){return String.fromCharCode(t)},mc=function(t){return String.fromCharCode(t)},Qi,qr="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function vc(e){for(var t="",r=0,a=0,i=0,n=0,o=0,s=0,l=0,c=0;c<e.length;)r=e.charCodeAt(c++),n=r>>2,a=e.charCodeAt(c++),o=(r&3)<<4|a>>4,i=e.charCodeAt(c++),s=(a&15)<<2|i>>6,l=i&63,isNaN(a)?s=l=64:isNaN(i)&&(l=64),t+=qr.charAt(n)+qr.charAt(o)+qr.charAt(s)+qr.charAt(l);return t}function jt(e){var t="",r=0,a=0,i=0,n=0,o=0,s=0,l=0;e=e.replace(/[^\w\+\/\=]/g,"");for(var c=0;c<e.length;)n=qr.indexOf(e.charAt(c++)),o=qr.indexOf(e.charAt(c++)),r=n<<2|o>>4,t+=String.fromCharCode(r),s=qr.indexOf(e.charAt(c++)),a=(o&15)<<4|s>>2,s!==64&&(t+=String.fromCharCode(a)),l=qr.indexOf(e.charAt(c++)),i=(s&3)<<6|l,l!==64&&(t+=String.fromCharCode(i));return t}var Se=function(){return typeof Buffer<"u"&&typeof process<"u"&&typeof process.versions<"u"&&!!process.versions.node}(),za=function(){if(typeof Buffer<"u"){var e=!Buffer.from;if(!e)try{Buffer.from("foo","utf8")}catch{e=!0}return e?function(t,r){return r?new Buffer(t,r):new Buffer(t)}:Buffer.from.bind(Buffer)}return function(){}}();function ia(e){return Se?Buffer.alloc?Buffer.alloc(e):new Buffer(e):typeof Uint8Array<"u"?new Uint8Array(e):new Array(e)}function xc(e){return Se?Buffer.allocUnsafe?Buffer.allocUnsafe(e):new Buffer(e):typeof Uint8Array<"u"?new Uint8Array(e):new Array(e)}var sr=function(t){return Se?za(t,"binary"):t.split("").map(function(r){return r.charCodeAt(0)&255})};function Ma(e){if(Array.isArray(e))return e.map(function(a){return String.fromCharCode(a)}).join("");for(var t=[],r=0;r<e.length;++r)t[r]=String.fromCharCode(e[r]);return t.join("")}function qs(e){if(typeof ArrayBuffer>"u")throw new Error("Unsupported");if(e instanceof ArrayBuffer)return qs(new Uint8Array(e));for(var t=new Array(e.length),r=0;r<e.length;++r)t[r]=e[r];return t}var Yr=Se?function(e){return Buffer.concat(e.map(function(t){return Buffer.isBuffer(t)?t:za(t)}))}:function(e){if(typeof Uint8Array<"u"){var t=0,r=0;for(t=0;t<e.length;++t)r+=e[t].length;var a=new Uint8Array(r),i=0;for(t=0,r=0;t<e.length;r+=i,++t)if(i=e[t].length,e[t]instanceof Uint8Array)a.set(e[t],r);else{if(typeof e[t]=="string")throw"wtf";a.set(new Uint8Array(e[t]),r)}return a}return[].concat.apply([],e.map(function(n){return Array.isArray(n)?n:[].slice.call(n)}))};function Mg(e){for(var t=[],r=0,a=e.length+250,i=ia(e.length+255),n=0;n<e.length;++n){var o=e.charCodeAt(n);if(o<128)i[r++]=o;else if(o<2048)i[r++]=192|o>>6&31,i[r++]=128|o&63;else if(o>=55296&&o<57344){o=(o&1023)+64;var s=e.charCodeAt(++n)&1023;i[r++]=240|o>>8&7,i[r++]=128|o>>2&63,i[r++]=128|s>>6&15|(o&3)<<4,i[r++]=128|s&63}else i[r++]=224|o>>12&15,i[r++]=128|o>>6&63,i[r++]=128|o&63;r>a&&(t.push(i.slice(0,r)),r=0,i=ia(65535),a=65530)}return t.push(i.slice(0,r)),Yr(t)}var Rt=/\u0000/g,Fi=/[\u0001-\u0006]/g;function qa(e){for(var t="",r=e.length-1;r>=0;)t+=e.charAt(r--);return t}function cr(e,t){var r=""+e;return r.length>=t?r:Ye("0",t-r.length)+r}function Zs(e,t){var r=""+e;return r.length>=t?r:Ye(" ",t-r.length)+r}function ro(e,t){var r=""+e;return r.length>=t?r:r+Ye(" ",t-r.length)}function Bg(e,t){var r=""+Math.round(e);return r.length>=t?r:Ye("0",t-r.length)+r}function Ug(e,t){var r=""+e;return r.length>=t?r:Ye("0",t-r.length)+r}var bc=Math.pow(2,32);function ja(e,t){if(e>bc||e<-bc)return Bg(e,t);var r=Math.round(e);return Ug(r,t)}function ao(e,t){return t=t||0,e.length>=7+t&&(e.charCodeAt(t)|32)===103&&(e.charCodeAt(t+1)|32)===101&&(e.charCodeAt(t+2)|32)===110&&(e.charCodeAt(t+3)|32)===101&&(e.charCodeAt(t+4)|32)===114&&(e.charCodeAt(t+5)|32)===97&&(e.charCodeAt(t+6)|32)===108}var wc=[["Sun","Sunday"],["Mon","Monday"],["Tue","Tuesday"],["Wed","Wednesday"],["Thu","Thursday"],["Fri","Friday"],["Sat","Saturday"]],Ho=[["J","Jan","January"],["F","Feb","February"],["M","Mar","March"],["A","Apr","April"],["M","May","May"],["J","Jun","June"],["J","Jul","July"],["A","Aug","August"],["S","Sep","September"],["O","Oct","October"],["N","Nov","November"],["D","Dec","December"]];function Vg(e){return e||(e={}),e[0]="General",e[1]="0",e[2]="0.00",e[3]="#,##0",e[4]="#,##0.00",e[9]="0%",e[10]="0.00%",e[11]="0.00E+00",e[12]="# ?/?",e[13]="# ??/??",e[14]="m/d/yy",e[15]="d-mmm-yy",e[16]="d-mmm",e[17]="mmm-yy",e[18]="h:mm AM/PM",e[19]="h:mm:ss AM/PM",e[20]="h:mm",e[21]="h:mm:ss",e[22]="m/d/yy h:mm",e[37]="#,##0 ;(#,##0)",e[38]="#,##0 ;[Red](#,##0)",e[39]="#,##0.00;(#,##0.00)",e[40]="#,##0.00;[Red](#,##0.00)",e[45]="mm:ss",e[46]="[h]:mm:ss",e[47]="mmss.0",e[48]="##0.0E+0",e[49]="@",e[56]='"上午/下午 "hh"時"mm"分"ss"秒 "',e}var _e={0:"General",1:"0",2:"0.00",3:"#,##0",4:"#,##0.00",9:"0%",10:"0.00%",11:"0.00E+00",12:"# ?/?",13:"# ??/??",14:"m/d/yy",15:"d-mmm-yy",16:"d-mmm",17:"mmm-yy",18:"h:mm AM/PM",19:"h:mm:ss AM/PM",20:"h:mm",21:"h:mm:ss",22:"m/d/yy h:mm",37:"#,##0 ;(#,##0)",38:"#,##0 ;[Red](#,##0)",39:"#,##0.00;(#,##0.00)",40:"#,##0.00;[Red](#,##0.00)",45:"mm:ss",46:"[h]:mm:ss",47:"mmss.0",48:"##0.0E+0",49:"@",56:'"上午/下午 "hh"時"mm"分"ss"秒 "'},yc={5:37,6:38,7:39,8:40,23:0,24:0,25:0,26:0,27:14,28:14,29:14,30:14,31:14,50:14,51:14,52:14,53:14,54:14,55:14,56:14,57:14,58:14,59:1,60:2,61:3,62:4,67:9,68:10,69:12,70:13,71:14,72:14,73:15,74:16,75:17,76:20,77:21,78:22,79:45,80:46,81:47,82:0},Hg={5:'"$"#,##0_);\\("$"#,##0\\)',63:'"$"#,##0_);\\("$"#,##0\\)',6:'"$"#,##0_);[Red]\\("$"#,##0\\)',64:'"$"#,##0_);[Red]\\("$"#,##0\\)',7:'"$"#,##0.00_);\\("$"#,##0.00\\)',65:'"$"#,##0.00_);\\("$"#,##0.00\\)',8:'"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',66:'"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',41:'_(* #,##0_);_(* \\(#,##0\\);_(* "-"_);_(@_)',42:'_("$"* #,##0_);_("$"* \\(#,##0\\);_("$"* "-"_);_(@_)',43:'_(* #,##0.00_);_(* \\(#,##0.00\\);_(* "-"??_);_(@_)',44:'_("$"* #,##0.00_);_("$"* \\(#,##0.00\\);_("$"* "-"??_);_(@_)'};function io(e,t,r){for(var a=e<0?-1:1,i=e*a,n=0,o=1,s=0,l=1,c=0,d=0,u=Math.floor(i);c<t&&(u=Math.floor(i),s=u*o+n,d=u*c+l,!(i-u<5e-8));)i=1/(i-u),n=o,o=s,l=c,c=d;if(d>t&&(c>t?(d=l,s=n):(d=c,s=o)),!r)return[0,a*s,d];var f=Math.floor(a*s/d);return[f,a*s-f*d,d]}function ya(e,t,r){if(e>2958465||e<0)return null;var a=e|0,i=Math.floor(86400*(e-a)),n=0,o=[],s={D:a,T:i,u:86400*(e-a)-i,y:0,m:0,d:0,H:0,M:0,S:0,q:0};if(Math.abs(s.u)<1e-6&&(s.u=0),t&&t.date1904&&(a+=1462),s.u>.9999&&(s.u=0,++i==86400&&(s.T=i=0,++a,++s.D)),a===60)o=r?[1317,10,29]:[1900,2,29],n=3;else if(a===0)o=r?[1317,8,29]:[1900,1,0],n=6;else{a>60&&--a;var l=new Date(1900,0,1);l.setDate(l.getDate()+a-1),o=[l.getFullYear(),l.getMonth()+1,l.getDate()],n=l.getDay(),a<60&&(n=(n+6)%7),r&&(n=Yg(l,o))}return s.y=o[0],s.m=o[1],s.d=o[2],s.S=i%60,i=Math.floor(i/60),s.M=i%60,i=Math.floor(i/60),s.H=i,s.q=n,s}var od=new Date(1899,11,31,0,0,0),jg=od.getTime(),Wg=new Date(1900,2,1,0,0,0);function sd(e,t){var r=e.getTime();return t?r-=1461*24*60*60*1e3:e>=Wg&&(r+=24*60*60*1e3),(r-(jg+(e.getTimezoneOffset()-od.getTimezoneOffset())*6e4))/(24*60*60*1e3)}function Js(e){return e.indexOf(".")==-1?e:e.replace(/(?:\.0*|(\.\d*[1-9])0+)$/,"$1")}function Gg(e){return e.indexOf("E")==-1?e:e.replace(/(?:\.0*|(\.\d*[1-9])0+)[Ee]/,"$1E").replace(/(E[+-])(\d)$/,"$10$2")}function Kg(e){var t=e<0?12:11,r=Js(e.toFixed(12));return r.length<=t||(r=e.toPrecision(10),r.length<=t)?r:e.toExponential(5)}function Xg(e){var t=Js(e.toFixed(11));return t.length>(e<0?12:11)||t==="0"||t==="-0"?e.toPrecision(6):t}function en(e){var t=Math.floor(Math.log(Math.abs(e))*Math.LOG10E),r;return t>=-4&&t<=-1?r=e.toPrecision(10+t):Math.abs(t)<=9?r=Kg(e):t===10?r=e.toFixed(10).substr(0,12):r=Xg(e),Js(Gg(r.toUpperCase()))}function Fa(e,t){switch(typeof e){case"string":return e;case"boolean":return e?"TRUE":"FALSE";case"number":return(e|0)===e?e.toString(10):en(e);case"undefined":return"";case"object":if(e==null)return"";if(e instanceof Date)return er(14,sd(e,t&&t.date1904),t)}throw new Error("unsupported value in General format: "+e)}function Yg(e,t){t[0]-=581;var r=e.getDay();return e<60&&(r=(r+6)%7),r}function qg(e,t,r,a){var i="",n=0,o=0,s=r.y,l,c=0;switch(e){case 98:s=r.y+543;case 121:switch(t.length){case 1:case 2:l=s%100,c=2;break;default:l=s%1e4,c=4;break}break;case 109:switch(t.length){case 1:case 2:l=r.m,c=t.length;break;case 3:return Ho[r.m-1][1];case 5:return Ho[r.m-1][0];default:return Ho[r.m-1][2]}break;case 100:switch(t.length){case 1:case 2:l=r.d,c=t.length;break;case 3:return wc[r.q][0];default:return wc[r.q][1]}break;case 104:switch(t.length){case 1:case 2:l=1+(r.H+11)%12,c=t.length;break;default:throw"bad hour format: "+t}break;case 72:switch(t.length){case 1:case 2:l=r.H,c=t.length;break;default:throw"bad hour format: "+t}break;case 77:switch(t.length){case 1:case 2:l=r.M,c=t.length;break;default:throw"bad minute format: "+t}break;case 115:if(t!="s"&&t!="ss"&&t!=".0"&&t!=".00"&&t!=".000")throw"bad second format: "+t;return r.u===0&&(t=="s"||t=="ss")?cr(r.S,t.length):(a>=2?o=a===3?1e3:100:o=a===1?10:1,n=Math.round(o*(r.S+r.u)),n>=60*o&&(n=0),t==="s"?n===0?"0":""+n/o:(i=cr(n,2+a),t==="ss"?i.substr(0,2):"."+i.substr(2,t.length-1)));case 90:switch(t){case"[h]":case"[hh]":l=r.D*24+r.H;break;case"[m]":case"[mm]":l=(r.D*24+r.H)*60+r.M;break;case"[s]":case"[ss]":l=((r.D*24+r.H)*60+r.M)*60+Math.round(r.S+r.u);break;default:throw"bad abstime format: "+t}c=t.length===3?1:2;break;case 101:l=s,c=1;break}var d=c>0?cr(l,c):"";return d}function Zr(e){var t=3;if(e.length<=t)return e;for(var r=e.length%t,a=e.substr(0,r);r!=e.length;r+=t)a+=(a.length>0?",":"")+e.substr(r,t);return a}var ld=/%/g;function Zg(e,t,r){var a=t.replace(ld,""),i=t.length-a.length;return Rr(e,a,r*Math.pow(10,2*i))+Ye("%",i)}function Jg(e,t,r){for(var a=t.length-1;t.charCodeAt(a-1)===44;)--a;return Rr(e,t.substr(0,a),r/Math.pow(10,3*(t.length-a)))}function cd(e,t){var r,a=e.indexOf("E")-e.indexOf(".")-1;if(e.match(/^#+0.0E\+0$/)){if(t==0)return"0.0E+0";if(t<0)return"-"+cd(e,-t);var i=e.indexOf(".");i===-1&&(i=e.indexOf("E"));var n=Math.floor(Math.log(t)*Math.LOG10E)%i;if(n<0&&(n+=i),r=(t/Math.pow(10,n)).toPrecision(a+1+(i+n)%i),r.indexOf("e")===-1){var o=Math.floor(Math.log(t)*Math.LOG10E);for(r.indexOf(".")===-1?r=r.charAt(0)+"."+r.substr(1)+"E+"+(o-r.length+n):r+="E+"+(o-n);r.substr(0,2)==="0.";)r=r.charAt(0)+r.substr(2,i)+"."+r.substr(2+i),r=r.replace(/^0+([1-9])/,"$1").replace(/^0+\./,"0.");r=r.replace(/\+-/,"-")}r=r.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/,function(s,l,c,d){return l+c+d.substr(0,(i+n)%i)+"."+d.substr(n)+"E"})}else r=t.toExponential(a);return e.match(/E\+00$/)&&r.match(/e[+-]\d$/)&&(r=r.substr(0,r.length-1)+"0"+r.charAt(r.length-1)),e.match(/E\-/)&&r.match(/e\+/)&&(r=r.replace(/e\+/,"e")),r.replace("e","E")}var dd=/# (\?+)( ?)\/( ?)(\d+)/;function Qg(e,t,r){var a=parseInt(e[4],10),i=Math.round(t*a),n=Math.floor(i/a),o=i-n*a,s=a;return r+(n===0?"":""+n)+" "+(o===0?Ye(" ",e[1].length+1+e[4].length):Zs(o,e[1].length)+e[2]+"/"+e[3]+cr(s,e[4].length))}function em(e,t,r){return r+(t===0?"":""+t)+Ye(" ",e[1].length+2+e[4].length)}var ud=/^#*0*\.([0#]+)/,hd=/\).*[0#]/,fd=/\(###\) ###\\?-####/;function Ot(e){for(var t="",r,a=0;a!=e.length;++a)switch(r=e.charCodeAt(a)){case 35:break;case 63:t+=" ";break;case 48:t+="0";break;default:t+=String.fromCharCode(r)}return t}function _c(e,t){var r=Math.pow(10,t);return""+Math.round(e*r)/r}function kc(e,t){var r=e-Math.floor(e),a=Math.pow(10,t);return t<(""+Math.round(r*a)).length?0:Math.round(r*a)}function tm(e,t){return t<(""+Math.round((e-Math.floor(e))*Math.pow(10,t))).length?1:0}function rm(e){return e<2147483647&&e>-2147483648?""+(e>=0?e|0:e-1|0):""+Math.floor(e)}function qt(e,t,r){if(e.charCodeAt(0)===40&&!t.match(hd)){var a=t.replace(/\( */,"").replace(/ \)/,"").replace(/\)/,"");return r>=0?qt("n",a,r):"("+qt("n",a,-r)+")"}if(t.charCodeAt(t.length-1)===44)return Jg(e,t,r);if(t.indexOf("%")!==-1)return Zg(e,t,r);if(t.indexOf("E")!==-1)return cd(t,r);if(t.charCodeAt(0)===36)return"$"+qt(e,t.substr(t.charAt(1)==" "?2:1),r);var i,n,o,s,l=Math.abs(r),c=r<0?"-":"";if(t.match(/^00+$/))return c+ja(l,t.length);if(t.match(/^[#?]+$/))return i=ja(r,0),i==="0"&&(i=""),i.length>t.length?i:Ot(t.substr(0,t.length-i.length))+i;if(n=t.match(dd))return Qg(n,l,c);if(t.match(/^#+0+$/))return c+ja(l,t.length-t.indexOf("0"));if(n=t.match(ud))return i=_c(r,n[1].length).replace(/^([^\.]+)$/,"$1."+Ot(n[1])).replace(/\.$/,"."+Ot(n[1])).replace(/\.(\d*)$/,function(p,g){return"."+g+Ye("0",Ot(n[1]).length-g.length)}),t.indexOf("0.")!==-1?i:i.replace(/^0\./,".");if(t=t.replace(/^#+([0.])/,"$1"),n=t.match(/^(0*)\.(#*)$/))return c+_c(l,n[2].length).replace(/\.(\d*[1-9])0*$/,".$1").replace(/^(-?\d*)$/,"$1.").replace(/^0\./,n[1].length?"0.":".");if(n=t.match(/^#{1,3},##0(\.?)$/))return c+Zr(ja(l,0));if(n=t.match(/^#,##0\.([#0]*0)$/))return r<0?"-"+qt(e,t,-r):Zr(""+(Math.floor(r)+tm(r,n[1].length)))+"."+cr(kc(r,n[1].length),n[1].length);if(n=t.match(/^#,#*,#0/))return qt(e,t.replace(/^#,#*,/,""),r);if(n=t.match(/^([0#]+)(\\?-([0#]+))+$/))return i=qa(qt(e,t.replace(/[\\-]/g,""),r)),o=0,qa(qa(t.replace(/\\/g,"")).replace(/[0#]/g,function(p){return o<i.length?i.charAt(o++):p==="0"?"0":""}));if(t.match(fd))return i=qt(e,"##########",r),"("+i.substr(0,3)+") "+i.substr(3,3)+"-"+i.substr(6);var d="";if(n=t.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/))return o=Math.min(n[4].length,7),s=io(l,Math.pow(10,o)-1,!1),i=""+c,d=Rr("n",n[1],s[1]),d.charAt(d.length-1)==" "&&(d=d.substr(0,d.length-1)+"0"),i+=d+n[2]+"/"+n[3],d=ro(s[2],o),d.length<n[4].length&&(d=Ot(n[4].substr(n[4].length-d.length))+d),i+=d,i;if(n=t.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/))return o=Math.min(Math.max(n[1].length,n[4].length),7),s=io(l,Math.pow(10,o)-1,!0),c+(s[0]||(s[1]?"":"0"))+" "+(s[1]?Zs(s[1],o)+n[2]+"/"+n[3]+ro(s[2],o):Ye(" ",2*o+1+n[2].length+n[3].length));if(n=t.match(/^[#0?]+$/))return i=ja(r,0),t.length<=i.length?i:Ot(t.substr(0,t.length-i.length))+i;if(n=t.match(/^([#0?]+)\.([#0]+)$/)){i=""+r.toFixed(Math.min(n[2].length,10)).replace(/([^0])0+$/,"$1"),o=i.indexOf(".");var u=t.indexOf(".")-o,f=t.length-i.length-u;return Ot(t.substr(0,u)+i+t.substr(t.length-f))}if(n=t.match(/^00,000\.([#0]*0)$/))return o=kc(r,n[1].length),r<0?"-"+qt(e,t,-r):Zr(rm(r)).replace(/^\d,\d{3}$/,"0$&").replace(/^\d*$/,function(p){return"00,"+(p.length<3?cr(0,3-p.length):"")+p})+"."+cr(o,n[1].length);switch(t){case"###,##0.00":return qt(e,"#,##0.00",r);case"###,###":case"##,###":case"#,###":var h=Zr(ja(l,0));return h!=="0"?c+h:"";case"###,###.00":return qt(e,"###,##0.00",r).replace(/^0\./,".");case"#,###.00":return qt(e,"#,##0.00",r).replace(/^0\./,".")}throw new Error("unsupported format |"+t+"|")}function am(e,t,r){for(var a=t.length-1;t.charCodeAt(a-1)===44;)--a;return Rr(e,t.substr(0,a),r/Math.pow(10,3*(t.length-a)))}function im(e,t,r){var a=t.replace(ld,""),i=t.length-a.length;return Rr(e,a,r*Math.pow(10,2*i))+Ye("%",i)}function pd(e,t){var r,a=e.indexOf("E")-e.indexOf(".")-1;if(e.match(/^#+0.0E\+0$/)){if(t==0)return"0.0E+0";if(t<0)return"-"+pd(e,-t);var i=e.indexOf(".");i===-1&&(i=e.indexOf("E"));var n=Math.floor(Math.log(t)*Math.LOG10E)%i;if(n<0&&(n+=i),r=(t/Math.pow(10,n)).toPrecision(a+1+(i+n)%i),!r.match(/[Ee]/)){var o=Math.floor(Math.log(t)*Math.LOG10E);r.indexOf(".")===-1?r=r.charAt(0)+"."+r.substr(1)+"E+"+(o-r.length+n):r+="E+"+(o-n),r=r.replace(/\+-/,"-")}r=r.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/,function(s,l,c,d){return l+c+d.substr(0,(i+n)%i)+"."+d.substr(n)+"E"})}else r=t.toExponential(a);return e.match(/E\+00$/)&&r.match(/e[+-]\d$/)&&(r=r.substr(0,r.length-1)+"0"+r.charAt(r.length-1)),e.match(/E\-/)&&r.match(/e\+/)&&(r=r.replace(/e\+/,"e")),r.replace("e","E")}function xr(e,t,r){if(e.charCodeAt(0)===40&&!t.match(hd)){var a=t.replace(/\( */,"").replace(/ \)/,"").replace(/\)/,"");return r>=0?xr("n",a,r):"("+xr("n",a,-r)+")"}if(t.charCodeAt(t.length-1)===44)return am(e,t,r);if(t.indexOf("%")!==-1)return im(e,t,r);if(t.indexOf("E")!==-1)return pd(t,r);if(t.charCodeAt(0)===36)return"$"+xr(e,t.substr(t.charAt(1)==" "?2:1),r);var i,n,o,s,l=Math.abs(r),c=r<0?"-":"";if(t.match(/^00+$/))return c+cr(l,t.length);if(t.match(/^[#?]+$/))return i=""+r,r===0&&(i=""),i.length>t.length?i:Ot(t.substr(0,t.length-i.length))+i;if(n=t.match(dd))return em(n,l,c);if(t.match(/^#+0+$/))return c+cr(l,t.length-t.indexOf("0"));if(n=t.match(ud))return i=(""+r).replace(/^([^\.]+)$/,"$1."+Ot(n[1])).replace(/\.$/,"."+Ot(n[1])),i=i.replace(/\.(\d*)$/,function(p,g){return"."+g+Ye("0",Ot(n[1]).length-g.length)}),t.indexOf("0.")!==-1?i:i.replace(/^0\./,".");if(t=t.replace(/^#+([0.])/,"$1"),n=t.match(/^(0*)\.(#*)$/))return c+(""+l).replace(/\.(\d*[1-9])0*$/,".$1").replace(/^(-?\d*)$/,"$1.").replace(/^0\./,n[1].length?"0.":".");if(n=t.match(/^#{1,3},##0(\.?)$/))return c+Zr(""+l);if(n=t.match(/^#,##0\.([#0]*0)$/))return r<0?"-"+xr(e,t,-r):Zr(""+r)+"."+Ye("0",n[1].length);if(n=t.match(/^#,#*,#0/))return xr(e,t.replace(/^#,#*,/,""),r);if(n=t.match(/^([0#]+)(\\?-([0#]+))+$/))return i=qa(xr(e,t.replace(/[\\-]/g,""),r)),o=0,qa(qa(t.replace(/\\/g,"")).replace(/[0#]/g,function(p){return o<i.length?i.charAt(o++):p==="0"?"0":""}));if(t.match(fd))return i=xr(e,"##########",r),"("+i.substr(0,3)+") "+i.substr(3,3)+"-"+i.substr(6);var d="";if(n=t.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/))return o=Math.min(n[4].length,7),s=io(l,Math.pow(10,o)-1,!1),i=""+c,d=Rr("n",n[1],s[1]),d.charAt(d.length-1)==" "&&(d=d.substr(0,d.length-1)+"0"),i+=d+n[2]+"/"+n[3],d=ro(s[2],o),d.length<n[4].length&&(d=Ot(n[4].substr(n[4].length-d.length))+d),i+=d,i;if(n=t.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/))return o=Math.min(Math.max(n[1].length,n[4].length),7),s=io(l,Math.pow(10,o)-1,!0),c+(s[0]||(s[1]?"":"0"))+" "+(s[1]?Zs(s[1],o)+n[2]+"/"+n[3]+ro(s[2],o):Ye(" ",2*o+1+n[2].length+n[3].length));if(n=t.match(/^[#0?]+$/))return i=""+r,t.length<=i.length?i:Ot(t.substr(0,t.length-i.length))+i;if(n=t.match(/^([#0]+)\.([#0]+)$/)){i=""+r.toFixed(Math.min(n[2].length,10)).replace(/([^0])0+$/,"$1"),o=i.indexOf(".");var u=t.indexOf(".")-o,f=t.length-i.length-u;return Ot(t.substr(0,u)+i+t.substr(t.length-f))}if(n=t.match(/^00,000\.([#0]*0)$/))return r<0?"-"+xr(e,t,-r):Zr(""+r).replace(/^\d,\d{3}$/,"0$&").replace(/^\d*$/,function(p){return"00,"+(p.length<3?cr(0,3-p.length):"")+p})+"."+cr(0,n[1].length);switch(t){case"###,###":case"##,###":case"#,###":var h=Zr(""+l);return h!=="0"?c+h:"";default:if(t.match(/\.[0#?]*$/))return xr(e,t.slice(0,t.lastIndexOf(".")),r)+Ot(t.slice(t.lastIndexOf(".")))}throw new Error("unsupported format |"+t+"|")}function Rr(e,t,r){return(r|0)===r?xr(e,t,r):qt(e,t,r)}function nm(e){for(var t=[],r=!1,a=0,i=0;a<e.length;++a)switch(e.charCodeAt(a)){case 34:r=!r;break;case 95:case 42:case 92:++a;break;case 59:t[t.length]=e.substr(i,a-i),i=a+1}if(t[t.length]=e.substr(i),r===!0)throw new Error("Format |"+e+"| unterminated string ");return t}var gd=/\[[HhMmSs\u0E0A\u0E19\u0E17]*\]/;function di(e){for(var t=0,r="",a="";t<e.length;)switch(r=e.charAt(t)){case"G":ao(e,t)&&(t+=6),t++;break;case'"':for(;e.charCodeAt(++t)!==34&&t<e.length;);++t;break;case"\\":t+=2;break;case"_":t+=2;break;case"@":++t;break;case"B":case"b":if(e.charAt(t+1)==="1"||e.charAt(t+1)==="2")return!0;case"M":case"D":case"Y":case"H":case"S":case"E":case"m":case"d":case"y":case"h":case"s":case"e":case"g":return!0;case"A":case"a":case"上":if(e.substr(t,3).toUpperCase()==="A/P"||e.substr(t,5).toUpperCase()==="AM/PM"||e.substr(t,5).toUpperCase()==="上午/下午")return!0;++t;break;case"[":for(a=r;e.charAt(t++)!=="]"&&t<e.length;)a+=e.charAt(t);if(a.match(gd))return!0;break;case".":case"0":case"#":for(;t<e.length&&("0#?.,E+-%".indexOf(r=e.charAt(++t))>-1||r=="\\"&&e.charAt(t+1)=="-"&&"0#".indexOf(e.charAt(t+2))>-1););break;case"?":for(;e.charAt(++t)===r;);break;case"*":++t,(e.charAt(t)==" "||e.charAt(t)=="*")&&++t;break;case"(":case")":++t;break;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":for(;t<e.length&&"0123456789".indexOf(e.charAt(++t))>-1;);break;case" ":++t;break;default:++t;break}return!1}function om(e,t,r,a){for(var i=[],n="",o=0,s="",l="t",c,d,u,f="H";o<e.length;)switch(s=e.charAt(o)){case"G":if(!ao(e,o))throw new Error("unrecognized character "+s+" in "+e);i[i.length]={t:"G",v:"General"},o+=7;break;case'"':for(n="";(u=e.charCodeAt(++o))!==34&&o<e.length;)n+=String.fromCharCode(u);i[i.length]={t:"t",v:n},++o;break;case"\\":var h=e.charAt(++o),p=h==="("||h===")"?h:"t";i[i.length]={t:p,v:h},++o;break;case"_":i[i.length]={t:"t",v:" "},o+=2;break;case"@":i[i.length]={t:"T",v:t},++o;break;case"B":case"b":if(e.charAt(o+1)==="1"||e.charAt(o+1)==="2"){if(c==null&&(c=ya(t,r,e.charAt(o+1)==="2"),c==null))return"";i[i.length]={t:"X",v:e.substr(o,2)},l=s,o+=2;break}case"M":case"D":case"Y":case"H":case"S":case"E":s=s.toLowerCase();case"m":case"d":case"y":case"h":case"s":case"e":case"g":if(t<0||c==null&&(c=ya(t,r),c==null))return"";for(n=s;++o<e.length&&e.charAt(o).toLowerCase()===s;)n+=s;s==="m"&&l.toLowerCase()==="h"&&(s="M"),s==="h"&&(s=f),i[i.length]={t:s,v:n},l=s;break;case"A":case"a":case"上":var g={t:s,v:s};if(c==null&&(c=ya(t,r)),e.substr(o,3).toUpperCase()==="A/P"?(c!=null&&(g.v=c.H>=12?"P":"A"),g.t="T",f="h",o+=3):e.substr(o,5).toUpperCase()==="AM/PM"?(c!=null&&(g.v=c.H>=12?"PM":"AM"),g.t="T",o+=5,f="h"):e.substr(o,5).toUpperCase()==="上午/下午"?(c!=null&&(g.v=c.H>=12?"下午":"上午"),g.t="T",o+=5,f="h"):(g.t="t",++o),c==null&&g.t==="T")return"";i[i.length]=g,l=s;break;case"[":for(n=s;e.charAt(o++)!=="]"&&o<e.length;)n+=e.charAt(o);if(n.slice(-1)!=="]")throw'unterminated "[" block: |'+n+"|";if(n.match(gd)){if(c==null&&(c=ya(t,r),c==null))return"";i[i.length]={t:"Z",v:n.toLowerCase()},l=n.charAt(1)}else n.indexOf("$")>-1&&(n=(n.match(/\$([^-\[\]]*)/)||[])[1]||"$",di(e)||(i[i.length]={t:"t",v:n}));break;case".":if(c!=null){for(n=s;++o<e.length&&(s=e.charAt(o))==="0";)n+=s;i[i.length]={t:"s",v:n};break}case"0":case"#":for(n=s;++o<e.length&&"0#?.,E+-%".indexOf(s=e.charAt(o))>-1;)n+=s;i[i.length]={t:"n",v:n};break;case"?":for(n=s;e.charAt(++o)===s;)n+=s;i[i.length]={t:s,v:n},l=s;break;case"*":++o,(e.charAt(o)==" "||e.charAt(o)=="*")&&++o;break;case"(":case")":i[i.length]={t:a===1?"t":s,v:s},++o;break;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":for(n=s;o<e.length&&"0123456789".indexOf(e.charAt(++o))>-1;)n+=e.charAt(o);i[i.length]={t:"D",v:n};break;case" ":i[i.length]={t:s,v:s},++o;break;case"$":i[i.length]={t:"t",v:"$"},++o;break;default:if(",$-+/():!^&'~{}<>=€acfijklopqrtuvwxzP".indexOf(s)===-1)throw new Error("unrecognized character "+s+" in "+e);i[i.length]={t:"t",v:s},++o;break}var m=0,w=0,S;for(o=i.length-1,l="t";o>=0;--o)switch(i[o].t){case"h":case"H":i[o].t=f,l="h",m<1&&(m=1);break;case"s":(S=i[o].v.match(/\.0+$/))&&(w=Math.max(w,S[0].length-1)),m<3&&(m=3);case"d":case"y":case"M":case"e":l=i[o].t;break;case"m":l==="s"&&(i[o].t="M",m<2&&(m=2));break;case"X":break;case"Z":m<1&&i[o].v.match(/[Hh]/)&&(m=1),m<2&&i[o].v.match(/[Mm]/)&&(m=2),m<3&&i[o].v.match(/[Ss]/)&&(m=3)}switch(m){case 0:break;case 1:c.u>=.5&&(c.u=0,++c.S),c.S>=60&&(c.S=0,++c.M),c.M>=60&&(c.M=0,++c.H);break;case 2:c.u>=.5&&(c.u=0,++c.S),c.S>=60&&(c.S=0,++c.M);break}var x="",D;for(o=0;o<i.length;++o)switch(i[o].t){case"t":case"T":case" ":case"D":break;case"X":i[o].v="",i[o].t=";";break;case"d":case"m":case"y":case"h":case"H":case"M":case"s":case"e":case"b":case"Z":i[o].v=qg(i[o].t.charCodeAt(0),i[o].v,c,w),i[o].t="t";break;case"n":case"?":for(D=o+1;i[D]!=null&&((s=i[D].t)==="?"||s==="D"||(s===" "||s==="t")&&i[D+1]!=null&&(i[D+1].t==="?"||i[D+1].t==="t"&&i[D+1].v==="/")||i[o].t==="("&&(s===" "||s==="n"||s===")")||s==="t"&&(i[D].v==="/"||i[D].v===" "&&i[D+1]!=null&&i[D+1].t=="?"));)i[o].v+=i[D].v,i[D]={v:"",t:";"},++D;x+=i[o].v,o=D-1;break;case"G":i[o].t="t",i[o].v=Fa(t,r);break}var M="",I,T;if(x.length>0){x.charCodeAt(0)==40?(I=t<0&&x.charCodeAt(0)===45?-t:t,T=Rr("n",x,I)):(I=t<0&&a>1?-t:t,T=Rr("n",x,I),I<0&&i[0]&&i[0].t=="t"&&(T=T.substr(1),i[0].v="-"+i[0].v)),D=T.length-1;var B=i.length;for(o=0;o<i.length;++o)if(i[o]!=null&&i[o].t!="t"&&i[o].v.indexOf(".")>-1){B=o;break}var O=i.length;if(B===i.length&&T.indexOf("E")===-1){for(o=i.length-1;o>=0;--o)i[o]==null||"n?".indexOf(i[o].t)===-1||(D>=i[o].v.length-1?(D-=i[o].v.length,i[o].v=T.substr(D+1,i[o].v.length)):D<0?i[o].v="":(i[o].v=T.substr(0,D+1),D=-1),i[o].t="t",O=o);D>=0&&O<i.length&&(i[O].v=T.substr(0,D+1)+i[O].v)}else if(B!==i.length&&T.indexOf("E")===-1){for(D=T.indexOf(".")-1,o=B;o>=0;--o)if(!(i[o]==null||"n?".indexOf(i[o].t)===-1)){for(d=i[o].v.indexOf(".")>-1&&o===B?i[o].v.indexOf(".")-1:i[o].v.length-1,M=i[o].v.substr(d+1);d>=0;--d)D>=0&&(i[o].v.charAt(d)==="0"||i[o].v.charAt(d)==="#")&&(M=T.charAt(D--)+M);i[o].v=M,i[o].t="t",O=o}for(D>=0&&O<i.length&&(i[O].v=T.substr(0,D+1)+i[O].v),D=T.indexOf(".")+1,o=B;o<i.length;++o)if(!(i[o]==null||"n?(".indexOf(i[o].t)===-1&&o!==B)){for(d=i[o].v.indexOf(".")>-1&&o===B?i[o].v.indexOf(".")+1:0,M=i[o].v.substr(0,d);d<i[o].v.length;++d)D<T.length&&(M+=T.charAt(D++));i[o].v=M,i[o].t="t",O=o}}}for(o=0;o<i.length;++o)i[o]!=null&&"n?".indexOf(i[o].t)>-1&&(I=a>1&&t<0&&o>0&&i[o-1].v==="-"?-t:t,i[o].v=Rr(i[o].t,i[o].v,I),i[o].t="t");var j="";for(o=0;o!==i.length;++o)i[o]!=null&&(j+=i[o].v);return j}var Ec=/\[(=|>[=]?|<[>=]?)(-?\d+(?:\.\d*)?)\]/;function Tc(e,t){if(t==null)return!1;var r=parseFloat(t[2]);switch(t[1]){case"=":if(e==r)return!0;break;case">":if(e>r)return!0;break;case"<":if(e<r)return!0;break;case"<>":if(e!=r)return!0;break;case">=":if(e>=r)return!0;break;case"<=":if(e<=r)return!0;break}return!1}function sm(e,t){var r=nm(e),a=r.length,i=r[a-1].indexOf("@");if(a<4&&i>-1&&--a,r.length>4)throw new Error("cannot find right format for |"+r.join("|")+"|");if(typeof t!="number")return[4,r.length===4||i>-1?r[r.length-1]:"@"];switch(r.length){case 1:r=i>-1?["General","General","General",r[0]]:[r[0],r[0],r[0],"@"];break;case 2:r=i>-1?[r[0],r[0],r[0],r[1]]:[r[0],r[1],r[0],"@"];break;case 3:r=i>-1?[r[0],r[1],r[0],r[2]]:[r[0],r[1],r[2],"@"];break}var n=t>0?r[0]:t<0?r[1]:r[2];if(r[0].indexOf("[")===-1&&r[1].indexOf("[")===-1)return[a,n];if(r[0].match(/\[[=<>]/)!=null||r[1].match(/\[[=<>]/)!=null){var o=r[0].match(Ec),s=r[1].match(Ec);return Tc(t,o)?[a,r[0]]:Tc(t,s)?[a,r[1]]:[a,r[o!=null&&s!=null?2:1]]}return[a,n]}function er(e,t,r){r==null&&(r={});var a="";switch(typeof e){case"string":e=="m/d/yy"&&r.dateNF?a=r.dateNF:a=e;break;case"number":e==14&&r.dateNF?a=r.dateNF:a=(r.table!=null?r.table:_e)[e],a==null&&(a=r.table&&r.table[yc[e]]||_e[yc[e]]),a==null&&(a=Hg[e]||"General");break}if(ao(a,0))return Fa(t,r);t instanceof Date&&(t=sd(t,r.date1904));var i=sm(a,t);if(ao(i[1]))return Fa(t,r);if(t===!0)t="TRUE";else if(t===!1)t="FALSE";else if(t===""||t==null)return"";return om(i[1],t,r,i[0])}function ka(e,t){if(typeof t!="number"){t=+t||-1;for(var r=0;r<392;++r){if(_e[r]==null){t<0&&(t=r);continue}if(_e[r]==e){t=r;break}}t<0&&(t=391)}return _e[t]=e,t}function md(){_e=Vg()}var lm={5:'"$"#,##0_);\\("$"#,##0\\)',6:'"$"#,##0_);[Red]\\("$"#,##0\\)',7:'"$"#,##0.00_);\\("$"#,##0.00\\)',8:'"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',23:"General",24:"General",25:"General",26:"General",27:"m/d/yy",28:"m/d/yy",29:"m/d/yy",30:"m/d/yy",31:"m/d/yy",32:"h:mm:ss",33:"h:mm:ss",34:"h:mm:ss",35:"h:mm:ss",36:"m/d/yy",41:'_(* #,##0_);_(* (#,##0);_(* "-"_);_(@_)',42:'_("$"* #,##0_);_("$"* (#,##0);_("$"* "-"_);_(@_)',43:'_(* #,##0.00_);_(* (#,##0.00);_(* "-"??_);_(@_)',44:'_("$"* #,##0.00_);_("$"* (#,##0.00);_("$"* "-"??_);_(@_)',50:"m/d/yy",51:"m/d/yy",52:"m/d/yy",53:"m/d/yy",54:"m/d/yy",55:"m/d/yy",56:"m/d/yy",57:"m/d/yy",58:"m/d/yy",59:"0",60:"0.00",61:"#,##0",62:"#,##0.00",63:'"$"#,##0_);\\("$"#,##0\\)',64:'"$"#,##0_);[Red]\\("$"#,##0\\)',65:'"$"#,##0.00_);\\("$"#,##0.00\\)',66:'"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',67:"0%",68:"0.00%",69:"# ?/?",70:"# ??/??",71:"m/d/yy",72:"m/d/yy",73:"d-mmm-yy",74:"d-mmm",75:"mmm-yy",76:"h:mm",77:"h:mm:ss",78:"m/d/yy h:mm",79:"mm:ss",80:"[h]:mm:ss",81:"mmss.0"},vd=/[dD]+|[mM]+|[yYeE]+|[Hh]+|[Ss]+/g;function cm(e){var t=typeof e=="number"?_e[e]:e;return t=t.replace(vd,"(\\d+)"),new RegExp("^"+t+"$")}function dm(e,t,r){var a=-1,i=-1,n=-1,o=-1,s=-1,l=-1;(t.match(vd)||[]).forEach(function(u,f){var h=parseInt(r[f+1],10);switch(u.toLowerCase().charAt(0)){case"y":a=h;break;case"d":n=h;break;case"h":o=h;break;case"s":l=h;break;case"m":o>=0?s=h:i=h;break}}),l>=0&&s==-1&&i>=0&&(s=i,i=-1);var c=(""+(a>=0?a:new Date().getFullYear())).slice(-4)+"-"+("00"+(i>=1?i:1)).slice(-2)+"-"+("00"+(n>=1?n:1)).slice(-2);c.length==7&&(c="0"+c),c.length==8&&(c="20"+c);var d=("00"+(o>=0?o:0)).slice(-2)+":"+("00"+(s>=0?s:0)).slice(-2)+":"+("00"+(l>=0?l:0)).slice(-2);return o==-1&&s==-1&&l==-1?c:a==-1&&i==-1&&n==-1?d:c+"T"+d}var um=function(){var e={};e.version="1.2.0";function t(){for(var T=0,B=new Array(256),O=0;O!=256;++O)T=O,T=T&1?-306674912^T>>>1:T>>>1,T=T&1?-306674912^T>>>1:T>>>1,T=T&1?-306674912^T>>>1:T>>>1,T=T&1?-306674912^T>>>1:T>>>1,T=T&1?-306674912^T>>>1:T>>>1,T=T&1?-306674912^T>>>1:T>>>1,T=T&1?-306674912^T>>>1:T>>>1,T=T&1?-306674912^T>>>1:T>>>1,B[O]=T;return typeof Int32Array<"u"?new Int32Array(B):B}var r=t();function a(T){var B=0,O=0,j=0,U=typeof Int32Array<"u"?new Int32Array(4096):new Array(4096);for(j=0;j!=256;++j)U[j]=T[j];for(j=0;j!=256;++j)for(O=T[j],B=256+j;B<4096;B+=256)O=U[B]=O>>>8^T[O&255];var N=[];for(j=1;j!=16;++j)N[j-1]=typeof Int32Array<"u"?U.subarray(j*256,j*256+256):U.slice(j*256,j*256+256);return N}var i=a(r),n=i[0],o=i[1],s=i[2],l=i[3],c=i[4],d=i[5],u=i[6],f=i[7],h=i[8],p=i[9],g=i[10],m=i[11],w=i[12],S=i[13],x=i[14];function D(T,B){for(var O=B^-1,j=0,U=T.length;j<U;)O=O>>>8^r[(O^T.charCodeAt(j++))&255];return~O}function M(T,B){for(var O=B^-1,j=T.length-15,U=0;U<j;)O=x[T[U++]^O&255]^S[T[U++]^O>>8&255]^w[T[U++]^O>>16&255]^m[T[U++]^O>>>24]^g[T[U++]]^p[T[U++]]^h[T[U++]]^f[T[U++]]^u[T[U++]]^d[T[U++]]^c[T[U++]]^l[T[U++]]^s[T[U++]]^o[T[U++]]^n[T[U++]]^r[T[U++]];for(j+=15;U<j;)O=O>>>8^r[(O^T[U++])&255];return~O}function I(T,B){for(var O=B^-1,j=0,U=T.length,N=0,Z=0;j<U;)N=T.charCodeAt(j++),N<128?O=O>>>8^r[(O^N)&255]:N<2048?(O=O>>>8^r[(O^(192|N>>6&31))&255],O=O>>>8^r[(O^(128|N&63))&255]):N>=55296&&N<57344?(N=(N&1023)+64,Z=T.charCodeAt(j++)&1023,O=O>>>8^r[(O^(240|N>>8&7))&255],O=O>>>8^r[(O^(128|N>>2&63))&255],O=O>>>8^r[(O^(128|Z>>6&15|(N&3)<<4))&255],O=O>>>8^r[(O^(128|Z&63))&255]):(O=O>>>8^r[(O^(224|N>>12&15))&255],O=O>>>8^r[(O^(128|N>>6&63))&255],O=O>>>8^r[(O^(128|N&63))&255]);return~O}return e.table=r,e.bstr=D,e.buf=M,e.str=I,e}(),Fe=function(){var t={};t.version="1.2.1";function r(v,k){for(var b=v.split("/"),y=k.split("/"),E=0,A=0,H=Math.min(b.length,y.length);E<H;++E){if(A=b[E].length-y[E].length)return A;if(b[E]!=y[E])return b[E]<y[E]?-1:1}return b.length-y.length}function a(v){if(v.charAt(v.length-1)=="/")return v.slice(0,-1).indexOf("/")===-1?v:a(v.slice(0,-1));var k=v.lastIndexOf("/");return k===-1?v:v.slice(0,k+1)}function i(v){if(v.charAt(v.length-1)=="/")return i(v.slice(0,-1));var k=v.lastIndexOf("/");return k===-1?v:v.slice(k+1)}function n(v,k){typeof k=="string"&&(k=new Date(k));var b=k.getHours();b=b<<6|k.getMinutes(),b=b<<5|k.getSeconds()>>>1,v.write_shift(2,b);var y=k.getFullYear()-1980;y=y<<4|k.getMonth()+1,y=y<<5|k.getDate(),v.write_shift(2,y)}function o(v){var k=v.read_shift(2)&65535,b=v.read_shift(2)&65535,y=new Date,E=b&31;b>>>=5;var A=b&15;b>>>=4,y.setMilliseconds(0),y.setFullYear(b+1980),y.setMonth(A-1),y.setDate(E);var H=k&31;k>>>=5;var Y=k&63;return k>>>=6,y.setHours(k),y.setMinutes(Y),y.setSeconds(H<<1),y}function s(v){mt(v,0);for(var k={},b=0;v.l<=v.length-4;){var y=v.read_shift(2),E=v.read_shift(2),A=v.l+E,H={};switch(y){case 21589:b=v.read_shift(1),b&1&&(H.mtime=v.read_shift(4)),E>5&&(b&2&&(H.atime=v.read_shift(4)),b&4&&(H.ctime=v.read_shift(4))),H.mtime&&(H.mt=new Date(H.mtime*1e3));break}v.l=A,k[y]=H}return k}var l;function c(){return l||(l={})}function d(v,k){if(v[0]==80&&v[1]==75)return Al(v,k);if((v[0]|32)==109&&(v[1]|32)==105)return Xu(v,k);if(v.length<512)throw new Error("CFB file size "+v.length+" < 512");var b=3,y=512,E=0,A=0,H=0,Y=0,V=0,G=[],X=v.slice(0,512);mt(X,0);var Q=u(X);switch(b=Q[0],b){case 3:y=512;break;case 4:y=4096;break;case 0:if(Q[1]==0)return Al(v,k);default:throw new Error("Major Version: Expected 3 or 4 saw "+b)}y!==512&&(X=v.slice(0,y),mt(X,28));var ne=v.slice(0,y);f(X,b);var he=X.read_shift(4,"i");if(b===3&&he!==0)throw new Error("# Directory Sectors: Expected 0 saw "+he);X.l+=4,H=X.read_shift(4,"i"),X.l+=4,X.chk("00100000","Mini Stream Cutoff Size: "),Y=X.read_shift(4,"i"),E=X.read_shift(4,"i"),V=X.read_shift(4,"i"),A=X.read_shift(4,"i");for(var te=-1,de=0;de<109&&(te=X.read_shift(4,"i"),!(te<0));++de)G[de]=te;var ye=h(v,y);m(V,A,ye,y,G);var Ge=S(ye,H,G,y);Ge[H].name="!Directory",E>0&&Y!==Z&&(Ge[Y].name="!MiniFAT"),Ge[G[0]].name="!FAT",Ge.fat_addrs=G,Ge.ssz=y;var Ke={},wt=[],vi=[],xi=[];x(H,Ge,ye,wt,E,Ke,vi,Y),p(vi,xi,wt),wt.shift();var bi={FileIndex:vi,FullPaths:xi};return k&&k.raw&&(bi.raw={header:ne,sectors:ye}),bi}function u(v){if(v[v.l]==80&&v[v.l+1]==75)return[0,0];v.chk(se,"Header Signature: "),v.l+=16;var k=v.read_shift(2,"u");return[v.read_shift(2,"u"),k]}function f(v,k){var b=9;switch(v.l+=2,b=v.read_shift(2)){case 9:if(k!=3)throw new Error("Sector Shift: Expected 9 saw "+b);break;case 12:if(k!=4)throw new Error("Sector Shift: Expected 12 saw "+b);break;default:throw new Error("Sector Shift: Expected 9 or 12 saw "+b)}v.chk("0600","Mini Sector Shift: "),v.chk("000000000000","Reserved: ")}function h(v,k){for(var b=Math.ceil(v.length/k)-1,y=[],E=1;E<b;++E)y[E-1]=v.slice(E*k,(E+1)*k);return y[b-1]=v.slice(b*k),y}function p(v,k,b){for(var y=0,E=0,A=0,H=0,Y=0,V=b.length,G=[],X=[];y<V;++y)G[y]=X[y]=y,k[y]=b[y];for(;Y<X.length;++Y)y=X[Y],E=v[y].L,A=v[y].R,H=v[y].C,G[y]===y&&(E!==-1&&G[E]!==E&&(G[y]=G[E]),A!==-1&&G[A]!==A&&(G[y]=G[A])),H!==-1&&(G[H]=y),E!==-1&&y!=G[y]&&(G[E]=G[y],X.lastIndexOf(E)<Y&&X.push(E)),A!==-1&&y!=G[y]&&(G[A]=G[y],X.lastIndexOf(A)<Y&&X.push(A));for(y=1;y<V;++y)G[y]===y&&(A!==-1&&G[A]!==A?G[y]=G[A]:E!==-1&&G[E]!==E&&(G[y]=G[E]));for(y=1;y<V;++y)if(v[y].type!==0){if(Y=y,Y!=G[Y])do Y=G[Y],k[y]=k[Y]+"/"+k[y];while(Y!==0&&G[Y]!==-1&&Y!=G[Y]);G[y]=-1}for(k[0]+="/",y=1;y<V;++y)v[y].type!==2&&(k[y]+="/")}function g(v,k,b){for(var y=v.start,E=v.size,A=[],H=y;b&&E>0&&H>=0;)A.push(k.slice(H*N,H*N+N)),E-=N,H=ba(b,H*4);return A.length===0?lt(0):Yr(A).slice(0,v.size)}function m(v,k,b,y,E){var A=Z;if(v===Z){if(k!==0)throw new Error("DIFAT chain shorter than expected")}else if(v!==-1){var H=b[v],Y=(y>>>2)-1;if(!H)return;for(var V=0;V<Y&&(A=ba(H,V*4))!==Z;++V)E.push(A);m(ba(H,y-4),k-1,b,y,E)}}function w(v,k,b,y,E){var A=[],H=[];E||(E=[]);var Y=y-1,V=0,G=0;for(V=k;V>=0;){E[V]=!0,A[A.length]=V,H.push(v[V]);var X=b[Math.floor(V*4/y)];if(G=V*4&Y,y<4+G)throw new Error("FAT boundary crossed: "+V+" 4 "+y);if(!v[X])break;V=ba(v[X],G)}return{nodes:A,data:$c([H])}}function S(v,k,b,y){var E=v.length,A=[],H=[],Y=[],V=[],G=y-1,X=0,Q=0,ne=0,he=0;for(X=0;X<E;++X)if(Y=[],ne=X+k,ne>=E&&(ne-=E),!H[ne]){V=[];var te=[];for(Q=ne;Q>=0;){te[Q]=!0,H[Q]=!0,Y[Y.length]=Q,V.push(v[Q]);var de=b[Math.floor(Q*4/y)];if(he=Q*4&G,y<4+he)throw new Error("FAT boundary crossed: "+Q+" 4 "+y);if(!v[de]||(Q=ba(v[de],he),te[Q]))break}A[ne]={nodes:Y,data:$c([V])}}return A}function x(v,k,b,y,E,A,H,Y){for(var V=0,G=y.length?2:0,X=k[v].data,Q=0,ne=0,he;Q<X.length;Q+=128){var te=X.slice(Q,Q+128);mt(te,64),ne=te.read_shift(2),he=al(te,0,ne-G),y.push(he);var de={name:he,type:te.read_shift(1),color:te.read_shift(1),L:te.read_shift(4,"i"),R:te.read_shift(4,"i"),C:te.read_shift(4,"i"),clsid:te.read_shift(16),state:te.read_shift(4,"i"),start:0,size:0},ye=te.read_shift(2)+te.read_shift(2)+te.read_shift(2)+te.read_shift(2);ye!==0&&(de.ct=D(te,te.l-8));var Ge=te.read_shift(2)+te.read_shift(2)+te.read_shift(2)+te.read_shift(2);Ge!==0&&(de.mt=D(te,te.l-8)),de.start=te.read_shift(4,"i"),de.size=te.read_shift(4,"i"),de.size<0&&de.start<0&&(de.size=de.type=0,de.start=Z,de.name=""),de.type===5?(V=de.start,E>0&&V!==Z&&(k[V].name="!StreamData")):de.size>=4096?(de.storage="fat",k[de.start]===void 0&&(k[de.start]=w(b,de.start,k.fat_addrs,k.ssz)),k[de.start].name=de.name,de.content=k[de.start].data.slice(0,de.size)):(de.storage="minifat",de.size<0?de.size=0:V!==Z&&de.start!==Z&&k[V]&&(de.content=g(de,k[V].data,(k[Y]||{}).data))),de.content&&mt(de.content,0),A[he]=de,H.push(de)}}function D(v,k){return new Date((Ut(v,k+4)/1e7*Math.pow(2,32)+Ut(v,k)/1e7-11644473600)*1e3)}function M(v,k){return c(),d(l.readFileSync(v),k)}function I(v,k){var b=k&&k.type;switch(b||Se&&Buffer.isBuffer(v)&&(b="buffer"),b||"base64"){case"file":return M(v,k);case"base64":return d(sr(jt(v)),k);case"binary":return d(sr(v),k)}return d(v,k)}function T(v,k){var b=k||{},y=b.root||"Root Entry";if(v.FullPaths||(v.FullPaths=[]),v.FileIndex||(v.FileIndex=[]),v.FullPaths.length!==v.FileIndex.length)throw new Error("inconsistent CFB structure");v.FullPaths.length===0&&(v.FullPaths[0]=y+"/",v.FileIndex[0]={name:y,type:5}),b.CLSID&&(v.FileIndex[0].clsid=b.CLSID),B(v)}function B(v){var k="Sh33tJ5";if(!Fe.find(v,"/"+k)){var b=lt(4);b[0]=55,b[1]=b[3]=50,b[2]=54,v.FileIndex.push({name:k,type:2,content:b,size:4,L:69,R:69,C:69}),v.FullPaths.push(v.FullPaths[0]+k),O(v)}}function O(v,k){T(v);for(var b=!1,y=!1,E=v.FullPaths.length-1;E>=0;--E){var A=v.FileIndex[E];switch(A.type){case 0:y?b=!0:(v.FileIndex.pop(),v.FullPaths.pop());break;case 1:case 2:case 5:y=!0,isNaN(A.R*A.L*A.C)&&(b=!0),A.R>-1&&A.L>-1&&A.R==A.L&&(b=!0);break;default:b=!0;break}}if(!(!b&&!k)){var H=new Date(1987,1,19),Y=0,V=Object.create?Object.create(null):{},G=[];for(E=0;E<v.FullPaths.length;++E)V[v.FullPaths[E]]=!0,v.FileIndex[E].type!==0&&G.push([v.FullPaths[E],v.FileIndex[E]]);for(E=0;E<G.length;++E){var X=a(G[E][0]);y=V[X],y||(G.push([X,{name:i(X).replace("/",""),type:1,clsid:ce,ct:H,mt:H,content:null}]),V[X]=!0)}for(G.sort(function(he,te){return r(he[0],te[0])}),v.FullPaths=[],v.FileIndex=[],E=0;E<G.length;++E)v.FullPaths[E]=G[E][0],v.FileIndex[E]=G[E][1];for(E=0;E<G.length;++E){var Q=v.FileIndex[E],ne=v.FullPaths[E];if(Q.name=i(ne).replace("/",""),Q.L=Q.R=Q.C=-(Q.color=1),Q.size=Q.content?Q.content.length:0,Q.start=0,Q.clsid=Q.clsid||ce,E===0)Q.C=G.length>1?1:-1,Q.size=0,Q.type=5;else if(ne.slice(-1)=="/"){for(Y=E+1;Y<G.length&&a(v.FullPaths[Y])!=ne;++Y);for(Q.C=Y>=G.length?-1:Y,Y=E+1;Y<G.length&&a(v.FullPaths[Y])!=a(ne);++Y);Q.R=Y>=G.length?-1:Y,Q.type=1}else a(v.FullPaths[E+1]||"")==a(ne)&&(Q.R=E+1),Q.type=2}}}function j(v,k){var b=k||{};if(b.fileType=="mad")return Yu(v,b);switch(O(v),b.fileType){case"zip":return Vu(v,b)}var y=function(he){for(var te=0,de=0,ye=0;ye<he.FileIndex.length;++ye){var Ge=he.FileIndex[ye];if(Ge.content){var Ke=Ge.content.length;Ke>0&&(Ke<4096?te+=Ke+63>>6:de+=Ke+511>>9)}}for(var wt=he.FullPaths.length+3>>2,vi=te+7>>3,xi=te+127>>7,bi=vi+de+wt+xi,fa=bi+127>>7,Ro=fa<=109?0:Math.ceil((fa-109)/127);bi+fa+Ro+127>>7>fa;)Ro=++fa<=109?0:Math.ceil((fa-109)/127);var Or=[1,Ro,fa,xi,wt,de,te,0];return he.FileIndex[0].size=te<<6,Or[7]=(he.FileIndex[0].start=Or[0]+Or[1]+Or[2]+Or[3]+Or[4]+Or[5])+(Or[6]+7>>3),Or}(v),E=lt(y[7]<<9),A=0,H=0;{for(A=0;A<8;++A)E.write_shift(1,re[A]);for(A=0;A<8;++A)E.write_shift(2,0);for(E.write_shift(2,62),E.write_shift(2,3),E.write_shift(2,65534),E.write_shift(2,9),E.write_shift(2,6),A=0;A<3;++A)E.write_shift(2,0);for(E.write_shift(4,0),E.write_shift(4,y[2]),E.write_shift(4,y[0]+y[1]+y[2]+y[3]-1),E.write_shift(4,0),E.write_shift(4,4096),E.write_shift(4,y[3]?y[0]+y[1]+y[2]-1:Z),E.write_shift(4,y[3]),E.write_shift(-4,y[1]?y[0]-1:Z),E.write_shift(4,y[1]),A=0;A<109;++A)E.write_shift(-4,A<y[2]?y[1]+A:-1)}if(y[1])for(H=0;H<y[1];++H){for(;A<236+H*127;++A)E.write_shift(-4,A<y[2]?y[1]+A:-1);E.write_shift(-4,H===y[1]-1?Z:H+1)}var Y=function(he){for(H+=he;A<H-1;++A)E.write_shift(-4,A+1);he&&(++A,E.write_shift(-4,Z))};for(H=A=0,H+=y[1];A<H;++A)E.write_shift(-4,ae.DIFSECT);for(H+=y[2];A<H;++A)E.write_shift(-4,ae.FATSECT);Y(y[3]),Y(y[4]);for(var V=0,G=0,X=v.FileIndex[0];V<v.FileIndex.length;++V)X=v.FileIndex[V],X.content&&(G=X.content.length,!(G<4096)&&(X.start=H,Y(G+511>>9)));for(Y(y[6]+7>>3);E.l&511;)E.write_shift(-4,ae.ENDOFCHAIN);for(H=A=0,V=0;V<v.FileIndex.length;++V)X=v.FileIndex[V],X.content&&(G=X.content.length,!(!G||G>=4096)&&(X.start=H,Y(G+63>>6)));for(;E.l&511;)E.write_shift(-4,ae.ENDOFCHAIN);for(A=0;A<y[4]<<2;++A){var Q=v.FullPaths[A];if(!Q||Q.length===0){for(V=0;V<17;++V)E.write_shift(4,0);for(V=0;V<3;++V)E.write_shift(4,-1);for(V=0;V<12;++V)E.write_shift(4,0);continue}X=v.FileIndex[A],A===0&&(X.start=X.size?X.start-1:Z);var ne=A===0&&b.root||X.name;if(G=2*(ne.length+1),E.write_shift(64,ne,"utf16le"),E.write_shift(2,G),E.write_shift(1,X.type),E.write_shift(1,X.color),E.write_shift(-4,X.L),E.write_shift(-4,X.R),E.write_shift(-4,X.C),X.clsid)E.write_shift(16,X.clsid,"hex");else for(V=0;V<4;++V)E.write_shift(4,0);E.write_shift(4,X.state||0),E.write_shift(4,0),E.write_shift(4,0),E.write_shift(4,0),E.write_shift(4,0),E.write_shift(4,X.start),E.write_shift(4,X.size),E.write_shift(4,0)}for(A=1;A<v.FileIndex.length;++A)if(X=v.FileIndex[A],X.size>=4096)if(E.l=X.start+1<<9,Se&&Buffer.isBuffer(X.content))X.content.copy(E,E.l,0,X.size),E.l+=X.size+511&-512;else{for(V=0;V<X.size;++V)E.write_shift(1,X.content[V]);for(;V&511;++V)E.write_shift(1,0)}for(A=1;A<v.FileIndex.length;++A)if(X=v.FileIndex[A],X.size>0&&X.size<4096)if(Se&&Buffer.isBuffer(X.content))X.content.copy(E,E.l,0,X.size),E.l+=X.size+63&-64;else{for(V=0;V<X.size;++V)E.write_shift(1,X.content[V]);for(;V&63;++V)E.write_shift(1,0)}if(Se)E.l=E.length;else for(;E.l<E.length;)E.write_shift(1,0);return E}function U(v,k){var b=v.FullPaths.map(function(V){return V.toUpperCase()}),y=b.map(function(V){var G=V.split("/");return G[G.length-(V.slice(-1)=="/"?2:1)]}),E=!1;k.charCodeAt(0)===47?(E=!0,k=b[0].slice(0,-1)+k):E=k.indexOf("/")!==-1;var A=k.toUpperCase(),H=E===!0?b.indexOf(A):y.indexOf(A);if(H!==-1)return v.FileIndex[H];var Y=!A.match(Fi);for(A=A.replace(Rt,""),Y&&(A=A.replace(Fi,"!")),H=0;H<b.length;++H)if((Y?b[H].replace(Fi,"!"):b[H]).replace(Rt,"")==A||(Y?y[H].replace(Fi,"!"):y[H]).replace(Rt,"")==A)return v.FileIndex[H];return null}var N=64,Z=-2,se="d0cf11e0a1b11ae1",re=[208,207,17,224,161,177,26,225],ce="00000000000000000000000000000000",ae={MAXREGSECT:-6,DIFSECT:-4,FATSECT:-3,ENDOFCHAIN:Z,FREESECT:-1,HEADER_SIGNATURE:se,HEADER_MINOR_VERSION:"3e00",MAXREGSID:-6,NOSTREAM:-1,HEADER_CLSID:ce,EntryTypes:["unknown","storage","stream","lockbytes","property","root"]};function Te(v,k,b){c();var y=j(v,b);l.writeFileSync(k,y)}function W(v){for(var k=new Array(v.length),b=0;b<v.length;++b)k[b]=String.fromCharCode(v[b]);return k.join("")}function pe(v,k){var b=j(v,k);switch(k&&k.type||"buffer"){case"file":return c(),l.writeFileSync(k.filename,b),b;case"binary":return typeof b=="string"?b:W(b);case"base64":return vc(typeof b=="string"?b:W(b));case"buffer":if(Se)return Buffer.isBuffer(b)?b:za(b);case"array":return typeof b=="string"?sr(b):b}return b}var be;function C(v){try{var k=v.InflateRaw,b=new k;if(b._processChunk(new Uint8Array([3,0]),b._finishFlushFlag),b.bytesRead)be=v;else throw new Error("zlib does not expose bytesRead")}catch(y){console.error("cannot use native zlib: "+(y.message||y))}}function K(v,k){if(!be)return El(v,k);var b=be.InflateRaw,y=new b,E=y._processChunk(v.slice(v.l),y._finishFlushFlag);return v.l+=y.bytesRead,E}function z(v){return be?be.deflateRawSync(v):Ee(v)}var R=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],q=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258],oe=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577];function ue(v){var k=(v<<1|v<<11)&139536|(v<<5|v<<15)&558144;return(k>>16|k>>8|k)&255}for(var ie=typeof Uint8Array<"u",ee=ie?new Uint8Array(256):[],Oe=0;Oe<256;++Oe)ee[Oe]=ue(Oe);function F(v,k){var b=ee[v&255];return k<=8?b>>>8-k:(b=b<<8|ee[v>>8&255],k<=16?b>>>16-k:(b=b<<8|ee[v>>16&255],b>>>24-k))}function Je(v,k){var b=k&7,y=k>>>3;return(v[y]|(b<=6?0:v[y+1]<<8))>>>b&3}function Pe(v,k){var b=k&7,y=k>>>3;return(v[y]|(b<=5?0:v[y+1]<<8))>>>b&7}function Me(v,k){var b=k&7,y=k>>>3;return(v[y]|(b<=4?0:v[y+1]<<8))>>>b&15}function Ae(v,k){var b=k&7,y=k>>>3;return(v[y]|(b<=3?0:v[y+1]<<8))>>>b&31}function le(v,k){var b=k&7,y=k>>>3;return(v[y]|(b<=1?0:v[y+1]<<8))>>>b&127}function Qe(v,k,b){var y=k&7,E=k>>>3,A=(1<<b)-1,H=v[E]>>>y;return b<8-y||(H|=v[E+1]<<8-y,b<16-y)||(H|=v[E+2]<<16-y,b<24-y)||(H|=v[E+3]<<24-y),H&A}function Kt(v,k,b){var y=k&7,E=k>>>3;return y<=5?v[E]|=(b&7)<<y:(v[E]|=b<<y&255,v[E+1]=(b&7)>>8-y),k+3}function gr(v,k,b){var y=k&7,E=k>>>3;return b=(b&1)<<y,v[E]|=b,k+1}function Fr(v,k,b){var y=k&7,E=k>>>3;return b<<=y,v[E]|=b&255,b>>>=8,v[E+1]=b,k+8}function gi(v,k,b){var y=k&7,E=k>>>3;return b<<=y,v[E]|=b&255,b>>>=8,v[E+1]=b&255,v[E+2]=b>>>8,k+16}function Hr(v,k){var b=v.length,y=2*b>k?2*b:k+5,E=0;if(b>=k)return v;if(Se){var A=xc(y);if(v.copy)v.copy(A);else for(;E<v.length;++E)A[E]=v[E];return A}else if(ie){var H=new Uint8Array(y);if(H.set)H.set(v);else for(;E<b;++E)H[E]=v[E];return H}return v.length=y,v}function Mt(v){for(var k=new Array(v),b=0;b<v;++b)k[b]=0;return k}function Dr(v,k,b){var y=1,E=0,A=0,H=0,Y=0,V=v.length,G=ie?new Uint16Array(32):Mt(32);for(A=0;A<32;++A)G[A]=0;for(A=V;A<b;++A)v[A]=0;V=v.length;var X=ie?new Uint16Array(V):Mt(V);for(A=0;A<V;++A)G[E=v[A]]++,y<E&&(y=E),X[A]=0;for(G[0]=0,A=1;A<=y;++A)G[A+16]=Y=Y+G[A-1]<<1;for(A=0;A<V;++A)Y=v[A],Y!=0&&(X[A]=G[Y+16]++);var Q=0;for(A=0;A<V;++A)if(Q=v[A],Q!=0)for(Y=F(X[A],y)>>y-Q,H=(1<<y+4-Q)-1;H>=0;--H)k[Y|H<<Q]=Q&15|A<<4;return y}var jr=ie?new Uint16Array(512):Mt(512),mi=ie?new Uint16Array(32):Mt(32);if(!ie){for(var Dt=0;Dt<512;++Dt)jr[Dt]=0;for(Dt=0;Dt<32;++Dt)mi[Dt]=0}(function(){for(var v=[],k=0;k<32;k++)v.push(5);Dr(v,mi,32);var b=[];for(k=0;k<=143;k++)b.push(8);for(;k<=255;k++)b.push(9);for(;k<=279;k++)b.push(7);for(;k<=287;k++)b.push(8);Dr(b,jr,288)})();var mr=function(){for(var k=ie?new Uint8Array(32768):[],b=0,y=0;b<oe.length-1;++b)for(;y<oe[b+1];++y)k[y]=b;for(;y<32768;++y)k[y]=29;var E=ie?new Uint8Array(259):[];for(b=0,y=0;b<q.length-1;++b)for(;y<q[b+1];++y)E[y]=b;function A(Y,V){for(var G=0;G<Y.length;){var X=Math.min(65535,Y.length-G),Q=G+X==Y.length;for(V.write_shift(1,+Q),V.write_shift(2,X),V.write_shift(2,~X&65535);X-- >0;)V[V.l++]=Y[G++]}return V.l}function H(Y,V){for(var G=0,X=0,Q=ie?new Uint16Array(32768):[];X<Y.length;){var ne=Math.min(65535,Y.length-X);if(ne<10){for(G=Kt(V,G,+(X+ne==Y.length)),G&7&&(G+=8-(G&7)),V.l=G/8|0,V.write_shift(2,ne),V.write_shift(2,~ne&65535);ne-- >0;)V[V.l++]=Y[X++];G=V.l*8;continue}G=Kt(V,G,+(X+ne==Y.length)+2);for(var he=0;ne-- >0;){var te=Y[X];he=(he<<5^te)&32767;var de=-1,ye=0;if((de=Q[he])&&(de|=X&-32768,de>X&&(de-=32768),de<X))for(;Y[de+ye]==Y[X+ye]&&ye<250;)++ye;if(ye>2){te=E[ye],te<=22?G=Fr(V,G,ee[te+1]>>1)-1:(Fr(V,G,3),G+=5,Fr(V,G,ee[te-23]>>5),G+=3);var Ge=te<8?0:te-4>>2;Ge>0&&(gi(V,G,ye-q[te]),G+=Ge),te=k[X-de],G=Fr(V,G,ee[te]>>3),G-=3;var Ke=te<4?0:te-2>>1;Ke>0&&(gi(V,G,X-de-oe[te]),G+=Ke);for(var wt=0;wt<ye;++wt)Q[he]=X&32767,he=(he<<5^Y[X])&32767,++X;ne-=ye-1}else te<=143?te=te+48:G=gr(V,G,1),G=Fr(V,G,ee[te]),Q[he]=X&32767,++X}G=Fr(V,G,0)-1}return V.l=(G+7)/8|0,V.l}return function(V,G){return V.length<8?A(V,G):H(V,G)}}();function Ee(v){var k=lt(50+Math.floor(v.length*1.1)),b=mr(v,k);return k.slice(0,b)}var et=ie?new Uint16Array(32768):Mt(32768),Xt=ie?new Uint16Array(32768):Mt(32768),st=ie?new Uint16Array(128):Mt(128),ha=1,kl=1;function Mu(v,k){var b=Ae(v,k)+257;k+=5;var y=Ae(v,k)+1;k+=5;var E=Me(v,k)+4;k+=4;for(var A=0,H=ie?new Uint8Array(19):Mt(19),Y=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],V=1,G=ie?new Uint8Array(8):Mt(8),X=ie?new Uint8Array(8):Mt(8),Q=H.length,ne=0;ne<E;++ne)H[R[ne]]=A=Pe(v,k),V<A&&(V=A),G[A]++,k+=3;var he=0;for(G[0]=0,ne=1;ne<=V;++ne)X[ne]=he=he+G[ne-1]<<1;for(ne=0;ne<Q;++ne)(he=H[ne])!=0&&(Y[ne]=X[he]++);var te=0;for(ne=0;ne<Q;++ne)if(te=H[ne],te!=0){he=ee[Y[ne]]>>8-te;for(var de=(1<<7-te)-1;de>=0;--de)st[he|de<<te]=te&7|ne<<3}var ye=[];for(V=1;ye.length<b+y;)switch(he=st[le(v,k)],k+=he&7,he>>>=3){case 16:for(A=3+Je(v,k),k+=2,he=ye[ye.length-1];A-- >0;)ye.push(he);break;case 17:for(A=3+Pe(v,k),k+=3;A-- >0;)ye.push(0);break;case 18:for(A=11+le(v,k),k+=7;A-- >0;)ye.push(0);break;default:ye.push(he),V<he&&(V=he);break}var Ge=ye.slice(0,b),Ke=ye.slice(b);for(ne=b;ne<286;++ne)Ge[ne]=0;for(ne=y;ne<30;++ne)Ke[ne]=0;return ha=Dr(Ge,et,286),kl=Dr(Ke,Xt,30),k}function Bu(v,k){if(v[0]==3&&!(v[1]&3))return[ia(k),2];for(var b=0,y=0,E=xc(k||1<<18),A=0,H=E.length>>>0,Y=0,V=0;!(y&1);){if(y=Pe(v,b),b+=3,y>>>1)y>>1==1?(Y=9,V=5):(b=Mu(v,b),Y=ha,V=kl);else{b&7&&(b+=8-(b&7));var G=v[b>>>3]|v[(b>>>3)+1]<<8;if(b+=32,G>0)for(!k&&H<A+G&&(E=Hr(E,A+G),H=E.length);G-- >0;)E[A++]=v[b>>>3],b+=8;continue}for(;;){!k&&H<A+32767&&(E=Hr(E,A+32767),H=E.length);var X=Qe(v,b,Y),Q=y>>>1==1?jr[X]:et[X];if(b+=Q&15,Q>>>=4,!(Q>>>8&255))E[A++]=Q;else{if(Q==256)break;Q-=257;var ne=Q<8?0:Q-4>>2;ne>5&&(ne=0);var he=A+q[Q];ne>0&&(he+=Qe(v,b,ne),b+=ne),X=Qe(v,b,V),Q=y>>>1==1?mi[X]:Xt[X],b+=Q&15,Q>>>=4;var te=Q<4?0:Q-2>>1,de=oe[Q];for(te>0&&(de+=Qe(v,b,te),b+=te),!k&&H<he&&(E=Hr(E,he+100),H=E.length);A<he;)E[A]=E[A-de],++A}}}return k?[E,b+7>>>3]:[E.slice(0,A),b+7>>>3]}function El(v,k){var b=v.slice(v.l||0),y=Bu(b,k);return v.l+=y[1],y[0]}function Tl(v,k){if(v)typeof console<"u"&&console.error(k);else throw new Error(k)}function Al(v,k){var b=v;mt(b,0);var y=[],E=[],A={FileIndex:y,FullPaths:E};T(A,{root:k.root});for(var H=b.length-4;(b[H]!=80||b[H+1]!=75||b[H+2]!=5||b[H+3]!=6)&&H>=0;)--H;b.l=H+4,b.l+=4;var Y=b.read_shift(2);b.l+=6;var V=b.read_shift(4);for(b.l=V,H=0;H<Y;++H){b.l+=20;var G=b.read_shift(4),X=b.read_shift(4),Q=b.read_shift(2),ne=b.read_shift(2),he=b.read_shift(2);b.l+=8;var te=b.read_shift(4),de=s(b.slice(b.l+Q,b.l+Q+ne));b.l+=Q+ne+he;var ye=b.l;b.l=te+4,Uu(b,G,X,A,de),b.l=ye}return A}function Uu(v,k,b,y,E){v.l+=2;var A=v.read_shift(2),H=v.read_shift(2),Y=o(v);if(A&8257)throw new Error("Unsupported ZIP encryption");for(var V=v.read_shift(4),G=v.read_shift(4),X=v.read_shift(4),Q=v.read_shift(2),ne=v.read_shift(2),he="",te=0;te<Q;++te)he+=String.fromCharCode(v[v.l++]);if(ne){var de=s(v.slice(v.l,v.l+ne));(de[21589]||{}).mt&&(Y=de[21589].mt),((E||{})[21589]||{}).mt&&(Y=E[21589].mt)}v.l+=ne;var ye=v.slice(v.l,v.l+G);switch(H){case 8:ye=K(v,X);break;case 0:break;default:throw new Error("Unsupported ZIP Compression method "+H)}var Ge=!1;A&8&&(V=v.read_shift(4),V==134695760&&(V=v.read_shift(4),Ge=!0),G=v.read_shift(4),X=v.read_shift(4)),G!=k&&Tl(Ge,"Bad compressed size: "+k+" != "+G),X!=b&&Tl(Ge,"Bad uncompressed size: "+b+" != "+X),Po(y,he,ye,{unsafe:!0,mt:Y})}function Vu(v,k){var b=k||{},y=[],E=[],A=lt(1),H=b.compression?8:0,Y=0,V=0,G=0,X=0,Q=0,ne=v.FullPaths[0],he=ne,te=v.FileIndex[0],de=[],ye=0;for(V=1;V<v.FullPaths.length;++V)if(he=v.FullPaths[V].slice(ne.length),te=v.FileIndex[V],!(!te.size||!te.content||he=="Sh33tJ5")){var Ge=X,Ke=lt(he.length);for(G=0;G<he.length;++G)Ke.write_shift(1,he.charCodeAt(G)&127);Ke=Ke.slice(0,Ke.l),de[Q]=um.buf(te.content,0);var wt=te.content;H==8&&(wt=z(wt)),A=lt(30),A.write_shift(4,67324752),A.write_shift(2,20),A.write_shift(2,Y),A.write_shift(2,H),te.mt?n(A,te.mt):A.write_shift(4,0),A.write_shift(-4,de[Q]),A.write_shift(4,wt.length),A.write_shift(4,te.content.length),A.write_shift(2,Ke.length),A.write_shift(2,0),X+=A.length,y.push(A),X+=Ke.length,y.push(Ke),X+=wt.length,y.push(wt),A=lt(46),A.write_shift(4,33639248),A.write_shift(2,0),A.write_shift(2,20),A.write_shift(2,Y),A.write_shift(2,H),A.write_shift(4,0),A.write_shift(-4,de[Q]),A.write_shift(4,wt.length),A.write_shift(4,te.content.length),A.write_shift(2,Ke.length),A.write_shift(2,0),A.write_shift(2,0),A.write_shift(2,0),A.write_shift(2,0),A.write_shift(4,0),A.write_shift(4,Ge),ye+=A.l,E.push(A),ye+=Ke.length,E.push(Ke),++Q}return A=lt(22),A.write_shift(4,101010256),A.write_shift(2,0),A.write_shift(2,0),A.write_shift(2,Q),A.write_shift(2,Q),A.write_shift(4,ye),A.write_shift(4,X),A.write_shift(2,0),Yr([Yr(y),Yr(E),A])}var Cn={htm:"text/html",xml:"text/xml",gif:"image/gif",jpg:"image/jpeg",png:"image/png",mso:"application/x-mso",thmx:"application/vnd.ms-officetheme",sh33tj5:"application/octet-stream"};function Hu(v,k){if(v.ctype)return v.ctype;var b=v.name||"",y=b.match(/\.([^\.]+)$/);return y&&Cn[y[1]]||k&&(y=(b=k).match(/[\.\\]([^\.\\])+$/),y&&Cn[y[1]])?Cn[y[1]]:"application/octet-stream"}function ju(v){for(var k=vc(v),b=[],y=0;y<k.length;y+=76)b.push(k.slice(y,y+76));return b.join(`\r
`)+`\r
`}function Wu(v){var k=v.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF=]/g,function(G){var X=G.charCodeAt(0).toString(16).toUpperCase();return"="+(X.length==1?"0"+X:X)});k=k.replace(/ $/mg,"=20").replace(/\t$/mg,"=09"),k.charAt(0)==`
`&&(k="=0D"+k.slice(1)),k=k.replace(/\r(?!\n)/mg,"=0D").replace(/\n\n/mg,`
=0A`).replace(/([^\r\n])\n/mg,"$1=0A");for(var b=[],y=k.split(`\r
`),E=0;E<y.length;++E){var A=y[E];if(A.length==0){b.push("");continue}for(var H=0;H<A.length;){var Y=76,V=A.slice(H,H+Y);V.charAt(Y-1)=="="?Y--:V.charAt(Y-2)=="="?Y-=2:V.charAt(Y-3)=="="&&(Y-=3),V=A.slice(H,H+Y),H+=Y,H<A.length&&(V+="="),b.push(V)}}return b.join(`\r
`)}function Gu(v){for(var k=[],b=0;b<v.length;++b){for(var y=v[b];b<=v.length&&y.charAt(y.length-1)=="=";)y=y.slice(0,y.length-1)+v[++b];k.push(y)}for(var E=0;E<k.length;++E)k[E]=k[E].replace(/[=][0-9A-Fa-f]{2}/g,function(A){return String.fromCharCode(parseInt(A.slice(1),16))});return sr(k.join(`\r
`))}function Ku(v,k,b){for(var y="",E="",A="",H,Y=0;Y<10;++Y){var V=k[Y];if(!V||V.match(/^\s*$/))break;var G=V.match(/^(.*?):\s*([^\s].*)$/);if(G)switch(G[1].toLowerCase()){case"content-location":y=G[2].trim();break;case"content-type":A=G[2].trim();break;case"content-transfer-encoding":E=G[2].trim();break}}switch(++Y,E.toLowerCase()){case"base64":H=sr(jt(k.slice(Y).join("")));break;case"quoted-printable":H=Gu(k.slice(Y));break;default:throw new Error("Unsupported Content-Transfer-Encoding "+E)}var X=Po(v,y.slice(b.length),H,{unsafe:!0});A&&(X.ctype=A)}function Xu(v,k){if(W(v.slice(0,13)).toLowerCase()!="mime-version:")throw new Error("Unsupported MAD header");var b=k&&k.root||"",y=(Se&&Buffer.isBuffer(v)?v.toString("binary"):W(v)).split(`\r
`),E=0,A="";for(E=0;E<y.length;++E)if(A=y[E],!!/^Content-Location:/i.test(A)&&(A=A.slice(A.indexOf("file")),b||(b=A.slice(0,A.lastIndexOf("/")+1)),A.slice(0,b.length)!=b))for(;b.length>0&&(b=b.slice(0,b.length-1),b=b.slice(0,b.lastIndexOf("/")+1),A.slice(0,b.length)!=b););var H=(y[1]||"").match(/boundary="(.*?)"/);if(!H)throw new Error("MAD cannot find boundary");var Y="--"+(H[1]||""),V=[],G=[],X={FileIndex:V,FullPaths:G};T(X);var Q,ne=0;for(E=0;E<y.length;++E){var he=y[E];he!==Y&&he!==Y+"--"||(ne++&&Ku(X,y.slice(Q,E),b),Q=E)}return X}function Yu(v,k){var b=k||{},y=b.boundary||"SheetJS";y="------="+y;for(var E=["MIME-Version: 1.0",'Content-Type: multipart/related; boundary="'+y.slice(2)+'"',"","",""],A=v.FullPaths[0],H=A,Y=v.FileIndex[0],V=1;V<v.FullPaths.length;++V)if(H=v.FullPaths[V].slice(A.length),Y=v.FileIndex[V],!(!Y.size||!Y.content||H=="Sh33tJ5")){H=H.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF]/g,function(ye){return"_x"+ye.charCodeAt(0).toString(16)+"_"}).replace(/[\u0080-\uFFFF]/g,function(ye){return"_u"+ye.charCodeAt(0).toString(16)+"_"});for(var G=Y.content,X=Se&&Buffer.isBuffer(G)?G.toString("binary"):W(G),Q=0,ne=Math.min(1024,X.length),he=0,te=0;te<=ne;++te)(he=X.charCodeAt(te))>=32&&he<128&&++Q;var de=Q>=ne*4/5;E.push(y),E.push("Content-Location: "+(b.root||"file:///C:/SheetJS/")+H),E.push("Content-Transfer-Encoding: "+(de?"quoted-printable":"base64")),E.push("Content-Type: "+Hu(Y,H)),E.push(""),E.push(de?Wu(X):ju(X))}return E.push(y+`--\r
`),E.join(`\r
`)}function qu(v){var k={};return T(k,v),k}function Po(v,k,b,y){var E=y&&y.unsafe;E||T(v);var A=!E&&Fe.find(v,k);if(!A){var H=v.FullPaths[0];k.slice(0,H.length)==H?H=k:(H.slice(-1)!="/"&&(H+="/"),H=(H+k).replace("//","/")),A={name:i(k),type:2},v.FileIndex.push(A),v.FullPaths.push(H),E||Fe.utils.cfb_gc(v)}return A.content=b,A.size=b?b.length:0,y&&(y.CLSID&&(A.clsid=y.CLSID),y.mt&&(A.mt=y.mt),y.ct&&(A.ct=y.ct)),A}function Zu(v,k){T(v);var b=Fe.find(v,k);if(b){for(var y=0;y<v.FileIndex.length;++y)if(v.FileIndex[y]==b)return v.FileIndex.splice(y,1),v.FullPaths.splice(y,1),!0}return!1}function Ju(v,k,b){T(v);var y=Fe.find(v,k);if(y){for(var E=0;E<v.FileIndex.length;++E)if(v.FileIndex[E]==y)return v.FileIndex[E].name=i(b),v.FullPaths[E]=b,!0}return!1}function Qu(v){O(v,!0)}return t.find=U,t.read=I,t.parse=d,t.write=pe,t.writeFile=Te,t.utils={cfb_new:qu,cfb_add:Po,cfb_del:Zu,cfb_mov:Ju,cfb_gc:Qu,ReadShift:Li,CheckField:Md,prep_blob:mt,bconcat:Yr,use_zlib:C,_deflateRaw:Ee,_inflateRaw:El,consts:ae},t}();function hm(e){if(typeof Deno<"u")return Deno.readFileSync(e);if(typeof $<"u"&&typeof File<"u"&&typeof Folder<"u")try{var t=File(e);t.open("r"),t.encoding="binary";var r=t.read();return t.close(),r}catch(a){if(!a.message||!a.message.match(/onstruct/))throw a}throw new Error("Cannot access file "+e)}function _r(e){for(var t=Object.keys(e),r=[],a=0;a<t.length;++a)Object.prototype.hasOwnProperty.call(e,t[a])&&r.push(t[a]);return r}function Qs(e){for(var t=[],r=_r(e),a=0;a!==r.length;++a)t[e[r[a]]]=r[a];return t}var no=new Date(1899,11,30,0,0,0);function $t(e,t){var r=e.getTime(),a=no.getTime()+(e.getTimezoneOffset()-no.getTimezoneOffset())*6e4;return(r-a)/(24*60*60*1e3)}var xd=new Date,fm=no.getTime()+(xd.getTimezoneOffset()-no.getTimezoneOffset())*6e4,Ac=xd.getTimezoneOffset();function Co(e){var t=new Date;return t.setTime(e*24*60*60*1e3+fm),t.getTimezoneOffset()!==Ac&&t.setTime(t.getTime()+(t.getTimezoneOffset()-Ac)*6e4),t}function pm(e){var t=0,r=0,a=!1,i=e.match(/P([0-9\.]+Y)?([0-9\.]+M)?([0-9\.]+D)?T([0-9\.]+H)?([0-9\.]+M)?([0-9\.]+S)?/);if(!i)throw new Error("|"+e+"| is not an ISO8601 Duration");for(var n=1;n!=i.length;++n)if(i[n]){switch(r=1,n>3&&(a=!0),i[n].slice(i[n].length-1)){case"Y":throw new Error("Unsupported ISO Duration Field: "+i[n].slice(i[n].length-1));case"D":r*=24;case"H":r*=60;case"M":if(a)r*=60;else throw new Error("Unsupported ISO Duration Field: M")}t+=r*parseInt(i[n],10)}return t}var Sc=new Date("2017-02-19T19:06:09.000Z"),bd=isNaN(Sc.getFullYear())?new Date("2/19/17"):Sc,gm=bd.getFullYear()==2017;function ft(e,t){var r=new Date(e);if(gm)return t>0?r.setTime(r.getTime()+r.getTimezoneOffset()*60*1e3):t<0&&r.setTime(r.getTime()-r.getTimezoneOffset()*60*1e3),r;if(e instanceof Date)return e;if(bd.getFullYear()==1917&&!isNaN(r.getFullYear())){var a=r.getFullYear();return e.indexOf(""+a)>-1||r.setFullYear(r.getFullYear()+100),r}var i=e.match(/\d+/g)||["2017","2","19","0","0","0"],n=new Date(+i[0],+i[1]-1,+i[2],+i[3]||0,+i[4]||0,+i[5]||0);return e.indexOf("Z")>-1&&(n=new Date(n.getTime()-n.getTimezoneOffset()*60*1e3)),n}function Da(e,t){if(Se&&Buffer.isBuffer(e)){if(t){if(e[0]==255&&e[1]==254)return Oi(e.slice(2).toString("utf16le"));if(e[1]==254&&e[2]==255)return Oi(nd(e.slice(2).toString("binary")))}return e.toString("binary")}if(typeof TextDecoder<"u")try{if(t){if(e[0]==255&&e[1]==254)return Oi(new TextDecoder("utf-16le").decode(e.slice(2)));if(e[0]==254&&e[1]==255)return Oi(new TextDecoder("utf-16be").decode(e.slice(2)))}var r={"€":"","‚":"",ƒ:"","„":"","…":"","†":"","‡":"","ˆ":"","‰":"",Š:"","‹":"",Œ:"",Ž:"","‘":"","’":"","“":"","”":"","•":"","–":"","—":"","˜":"","™":"",š:"","›":"",œ:"",ž:"",Ÿ:""};return Array.isArray(e)&&(e=new Uint8Array(e)),new TextDecoder("latin1").decode(e).replace(/[€‚ƒ„…†‡ˆ‰Š‹ŒŽ‘’“”•–—˜™š›œžŸ]/g,function(n){return r[n]||n})}catch{}for(var a=[],i=0;i!=e.length;++i)a.push(String.fromCharCode(e[i]));return a.join("")}function vt(e){if(typeof JSON<"u"&&!Array.isArray(e))return JSON.parse(JSON.stringify(e));if(typeof e!="object"||e==null)return e;if(e instanceof Date)return new Date(e.getTime());var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=vt(e[r]));return t}function Ye(e,t){for(var r="";r.length<t;)r+=e;return r}function dr(e){var t=Number(e);if(!isNaN(t))return isFinite(t)?t:NaN;if(!/\d/.test(e))return t;var r=1,a=e.replace(/([\d]),([\d])/g,"$1$2").replace(/[$]/g,"").replace(/[%]/g,function(){return r*=100,""});return!isNaN(t=Number(a))||(a=a.replace(/[(](.*)[)]/,function(i,n){return r=-r,n}),!isNaN(t=Number(a)))?t/r:t}var mm=["january","february","march","april","may","june","july","august","september","october","november","december"];function ai(e){var t=new Date(e),r=new Date(NaN),a=t.getYear(),i=t.getMonth(),n=t.getDate();if(isNaN(n))return r;var o=e.toLowerCase();if(o.match(/jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec/)){if(o=o.replace(/[^a-z]/g,"").replace(/([^a-z]|^)[ap]m?([^a-z]|$)/,""),o.length>3&&mm.indexOf(o)==-1)return r}else if(o.match(/[a-z]/))return r;return a<0||a>8099?r:(i>0||n>1)&&a!=101?t:e.match(/[^-0-9:,\/\\]/)?r:t}var vm=function(){var e="abacaba".split(/(:?b)/i).length==5;return function(r,a,i){if(e||typeof a=="string")return r.split(a);for(var n=r.split(a),o=[n[0]],s=1;s<n.length;++s)o.push(i),o.push(n[s]);return o}}();function wd(e){return e?e.content&&e.type?Da(e.content,!0):e.data?Ci(e.data):e.asNodeBuffer&&Se?Ci(e.asNodeBuffer().toString("binary")):e.asBinary?Ci(e.asBinary()):e._data&&e._data.getContent?Ci(Da(Array.prototype.slice.call(e._data.getContent(),0))):null:null}function yd(e){if(!e)return null;if(e.data)return gc(e.data);if(e.asNodeBuffer&&Se)return e.asNodeBuffer();if(e._data&&e._data.getContent){var t=e._data.getContent();return typeof t=="string"?gc(t):Array.prototype.slice.call(t)}return e.content&&e.type?e.content:null}function xm(e){return e&&e.name.slice(-4)===".bin"?yd(e):wd(e)}function Zt(e,t){for(var r=e.FullPaths||_r(e.files),a=t.toLowerCase().replace(/[\/]/g,"\\"),i=a.replace(/\\/g,"/"),n=0;n<r.length;++n){var o=r[n].replace(/^Root Entry[\/]/,"").toLowerCase();if(a==o||i==o)return e.files?e.files[r[n]]:e.FileIndex[n]}return null}function el(e,t){var r=Zt(e,t);if(r==null)throw new Error("Cannot find file "+t+" in zip");return r}function at(e,t,r){if(!r)return xm(el(e,t));if(!t)return null;try{return at(e,t)}catch{return null}}function Vt(e,t,r){if(!r)return wd(el(e,t));if(!t)return null;try{return Vt(e,t)}catch{return null}}function bm(e,t,r){return yd(el(e,t))}function Cc(e){for(var t=e.FullPaths||_r(e.files),r=[],a=0;a<t.length;++a)t[a].slice(-1)!="/"&&r.push(t[a].replace(/^Root Entry[\/]/,""));return r.sort()}function wm(e,t,r){if(e.FullPaths){if(typeof r=="string"){var a;return Se?a=za(r):a=Mg(r),Fe.utils.cfb_add(e,t,a)}Fe.utils.cfb_add(e,t,r)}else e.file(t,r)}function _d(e,t){switch(t.type){case"base64":return Fe.read(e,{type:"base64"});case"binary":return Fe.read(e,{type:"binary"});case"buffer":case"array":return Fe.read(e,{type:"buffer"})}throw new Error("Unrecognized type "+t.type)}function Di(e,t){if(e.charAt(0)=="/")return e.slice(1);var r=t.split("/");t.slice(-1)!="/"&&r.pop();for(var a=e.split("/");a.length!==0;){var i=a.shift();i===".."?r.pop():i!=="."&&r.push(i)}return r.join("/")}var kd=`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\r
`,ym=/([^"\s?>\/]+)\s*=\s*((?:")([^"]*)(?:")|(?:')([^']*)(?:')|([^'">\s]+))/g,Fc=/<[\/\?]?[a-zA-Z0-9:_-]+(?:\s+[^"\s?>\/]+\s*=\s*(?:"[^"]*"|'[^']*'|[^'">\s=]+))*\s*[\/\?]?>/mg,_m=/<[^>]*>/g,Ft=kd.match(Fc)?Fc:_m,km=/<\w*:/,Em=/<(\/?)\w+:/;function me(e,t,r){for(var a={},i=0,n=0;i!==e.length&&!((n=e.charCodeAt(i))===32||n===10||n===13);++i);if(t||(a[0]=e.slice(0,i)),i===e.length)return a;var o=e.match(ym),s=0,l="",c=0,d="",u="",f=1;if(o)for(c=0;c!=o.length;++c){for(u=o[c],n=0;n!=u.length&&u.charCodeAt(n)!==61;++n);for(d=u.slice(0,n).trim();u.charCodeAt(n+1)==32;)++n;for(f=(i=u.charCodeAt(n+1))==34||i==39?1:0,l=u.slice(n+1+f,u.length-f),s=0;s!=d.length&&d.charCodeAt(s)!==58;++s);if(s===d.length)d.indexOf("_")>0&&(d=d.slice(0,d.indexOf("_"))),a[d]=l,a[d.toLowerCase()]=l;else{var h=(s===5&&d.slice(0,5)==="xmlns"?"xmlns":"")+d.slice(s+1);if(a[h]&&d.slice(s-3,s)=="ext")continue;a[h]=l,a[h.toLowerCase()]=l}}return a}function Sr(e){return e.replace(Em,"<$1")}var Ed={"&quot;":'"',"&apos;":"'","&gt;":">","&lt;":"<","&amp;":"&"},Tm=Qs(Ed),Ie=function(){var e=/&(?:quot|apos|gt|lt|amp|#x?([\da-fA-F]+));/ig,t=/_x([\da-fA-F]{4})_/ig;return function r(a){var i=a+"",n=i.indexOf("<![CDATA[");if(n==-1)return i.replace(e,function(s,l){return Ed[s]||String.fromCharCode(parseInt(l,s.indexOf("x")>-1?16:10))||s}).replace(t,function(s,l){return String.fromCharCode(parseInt(l,16))});var o=i.indexOf("]]>");return r(i.slice(0,n))+i.slice(n+9,o)+r(i.slice(o+3))}}(),Am=/[&<>'"]/g,Sm=/[\u0000-\u001f]/g;function tl(e){var t=e+"";return t.replace(Am,function(r){return Tm[r]}).replace(/\n/g,"<br/>").replace(Sm,function(r){return"&#x"+("000"+r.charCodeAt(0).toString(16)).slice(-4)+";"})}var Dc=function(){var e=/&#(\d+);/g;function t(r,a){return String.fromCharCode(parseInt(a,10))}return function(a){return a.replace(e,t)}}();function We(e){switch(e){case 1:case!0:case"1":case"true":case"TRUE":return!0;default:return!1}}function jo(e){for(var t="",r=0,a=0,i=0,n=0,o=0,s=0;r<e.length;){if(a=e.charCodeAt(r++),a<128){t+=String.fromCharCode(a);continue}if(i=e.charCodeAt(r++),a>191&&a<224){o=(a&31)<<6,o|=i&63,t+=String.fromCharCode(o);continue}if(n=e.charCodeAt(r++),a<240){t+=String.fromCharCode((a&15)<<12|(i&63)<<6|n&63);continue}o=e.charCodeAt(r++),s=((a&7)<<18|(i&63)<<12|(n&63)<<6|o&63)-65536,t+=String.fromCharCode(55296+(s>>>10&1023)),t+=String.fromCharCode(56320+(s&1023))}return t}function Oc(e){var t=ia(2*e.length),r,a,i=1,n=0,o=0,s;for(a=0;a<e.length;a+=i)i=1,(s=e.charCodeAt(a))<128?r=s:s<224?(r=(s&31)*64+(e.charCodeAt(a+1)&63),i=2):s<240?(r=(s&15)*4096+(e.charCodeAt(a+1)&63)*64+(e.charCodeAt(a+2)&63),i=3):(i=4,r=(s&7)*262144+(e.charCodeAt(a+1)&63)*4096+(e.charCodeAt(a+2)&63)*64+(e.charCodeAt(a+3)&63),r-=65536,o=55296+(r>>>10&1023),r=56320+(r&1023)),o!==0&&(t[n++]=o&255,t[n++]=o>>>8,o=0),t[n++]=r%256,t[n++]=r>>>8;return t.slice(0,n).toString("ucs2")}function Ic(e){return za(e,"binary").toString("utf8")}var Pn="foo bar bazâð£",Ue=Se&&(Ic(Pn)==jo(Pn)&&Ic||Oc(Pn)==jo(Pn)&&Oc)||jo,Oi=Se?function(e){return za(e,"utf8").toString("binary")}:function(e){for(var t=[],r=0,a=0,i=0;r<e.length;)switch(a=e.charCodeAt(r++),!0){case a<128:t.push(String.fromCharCode(a));break;case a<2048:t.push(String.fromCharCode(192+(a>>6))),t.push(String.fromCharCode(128+(a&63)));break;case(a>=55296&&a<57344):a-=55296,i=e.charCodeAt(r++)-56320+(a<<10),t.push(String.fromCharCode(240+(i>>18&7))),t.push(String.fromCharCode(144+(i>>12&63))),t.push(String.fromCharCode(128+(i>>6&63))),t.push(String.fromCharCode(128+(i&63)));break;default:t.push(String.fromCharCode(224+(a>>12))),t.push(String.fromCharCode(128+(a>>6&63))),t.push(String.fromCharCode(128+(a&63)))}return t.join("")},tn=function(){var e={};return function(r,a){var i=r+"|"+(a||"");return e[i]?e[i]:e[i]=new RegExp("<(?:\\w+:)?"+r+'(?: xml:space="preserve")?(?:[^>]*)>([\\s\\S]*?)</(?:\\w+:)?'+r+">",a||"")}}(),Td=function(){var e=[["nbsp"," "],["middot","·"],["quot",'"'],["apos","'"],["gt",">"],["lt","<"],["amp","&"]].map(function(t){return[new RegExp("&"+t[0]+";","ig"),t[1]]});return function(r){for(var a=r.replace(/^[\t\n\r ]+/,"").replace(/[\t\n\r ]+$/,"").replace(/>\s+/g,">").replace(/\s+</g,"<").replace(/[\t\n\r ]+/g," ").replace(/<\s*[bB][rR]\s*\/?>/g,`
`).replace(/<[^>]*>/g,""),i=0;i<e.length;++i)a=a.replace(e[i][0],e[i][1]);return a}}(),Cm=function(){var e={};return function(r){return e[r]!==void 0?e[r]:e[r]=new RegExp("<(?:vt:)?"+r+">([\\s\\S]*?)</(?:vt:)?"+r+">","g")}}(),Fm=/<\/?(?:vt:)?variant>/g,Dm=/<(?:vt:)([^>]*)>([\s\S]*)</;function Pc(e,t){var r=me(e),a=e.match(Cm(r.baseType))||[],i=[];if(a.length!=r.size){if(t.WTF)throw new Error("unexpected vector length "+a.length+" != "+r.size);return i}return a.forEach(function(n){var o=n.replace(Fm,"").match(Dm);o&&i.push({v:Ue(o[2]),t:o[1]})}),i}var Om=/(^\s|\s$|\n)/;function Im(e){return _r(e).map(function(t){return" "+t+'="'+e[t]+'"'}).join("")}function Pm(e,t,r){return"<"+e+(r!=null?Im(r):"")+(t!=null?(t.match(Om)?' xml:space="preserve"':"")+">"+t+"</"+e:"/")+">"}function rl(e){if(Se&&Buffer.isBuffer(e))return e.toString("utf8");if(typeof e=="string")return e;if(typeof Uint8Array<"u"&&e instanceof Uint8Array)return Ue(Ma(qs(e)));throw new Error("Bad input format: expected Buffer or string")}var rn=/<(\/?)([^\s?><!\/:]*:|)([^\s?<>:\/]+)(?:[\s?:\/][^>]*)?>/mg,Rm={CT:"http://schemas.openxmlformats.org/package/2006/content-types"},$m=["http://schemas.openxmlformats.org/spreadsheetml/2006/main","http://purl.oclc.org/ooxml/spreadsheetml/main","http://schemas.microsoft.com/office/excel/2006/main","http://schemas.microsoft.com/office/excel/2006/2"];function Lm(e,t){for(var r=1-2*(e[t+7]>>>7),a=((e[t+7]&127)<<4)+(e[t+6]>>>4&15),i=e[t+6]&15,n=5;n>=0;--n)i=i*256+e[t+n];return a==2047?i==0?r*(1/0):NaN:(a==0?a=-1022:(a-=1023,i+=Math.pow(2,52)),r*Math.pow(2,a-52)*i)}function Nm(e,t,r){var a=(t<0||1/t==-1/0?1:0)<<7,i=0,n=0,o=a?-t:t;isFinite(o)?o==0?i=n=0:(i=Math.floor(Math.log(o)/Math.LN2),n=o*Math.pow(2,52-i),i<=-1023&&(!isFinite(n)||n<Math.pow(2,52))?i=-1022:(n-=Math.pow(2,52),i+=1023)):(i=2047,n=isNaN(t)?26985:0);for(var s=0;s<=5;++s,n/=256)e[r+s]=n&255;e[r+6]=(i&15)<<4|n&15,e[r+7]=i>>4|a}var Rc=function(e){for(var t=[],r=10240,a=0;a<e[0].length;++a)if(e[0][a])for(var i=0,n=e[0][a].length;i<n;i+=r)t.push.apply(t,e[0][a].slice(i,i+r));return t},$c=Se?function(e){return e[0].length>0&&Buffer.isBuffer(e[0][0])?Buffer.concat(e[0].map(function(t){return Buffer.isBuffer(t)?t:za(t)})):Rc(e)}:Rc,Lc=function(e,t,r){for(var a=[],i=t;i<r;i+=2)a.push(String.fromCharCode(Pr(e,i)));return a.join("").replace(Rt,"")},al=Se?function(e,t,r){return Buffer.isBuffer(e)?e.toString("utf16le",t,r).replace(Rt,""):Lc(e,t,r)}:Lc,Nc=function(e,t,r){for(var a=[],i=t;i<t+r;++i)a.push(("0"+e[i].toString(16)).slice(-2));return a.join("")},Ad=Se?function(e,t,r){return Buffer.isBuffer(e)?e.toString("hex",t,t+r):Nc(e,t,r)}:Nc,zc=function(e,t,r){for(var a=[],i=t;i<r;i++)a.push(String.fromCharCode(Ga(e,i)));return a.join("")},bn=Se?function(t,r,a){return Buffer.isBuffer(t)?t.toString("utf8",r,a):zc(t,r,a)}:zc,Sd=function(e,t){var r=Ut(e,t);return r>0?bn(e,t+4,t+4+r-1):""},Cd=Sd,Fd=function(e,t){var r=Ut(e,t);return r>0?bn(e,t+4,t+4+r-1):""},Dd=Fd,Od=function(e,t){var r=2*Ut(e,t);return r>0?bn(e,t+4,t+4+r-1):""},Id=Od,Pd=function(t,r){var a=Ut(t,r);return a>0?al(t,r+4,r+4+a):""},Rd=Pd,$d=function(e,t){var r=Ut(e,t);return r>0?bn(e,t+4,t+4+r):""},Ld=$d,Nd=function(e,t){return Lm(e,t)},oo=Nd,zd=function(t){return Array.isArray(t)||typeof Uint8Array<"u"&&t instanceof Uint8Array};Se&&(Cd=function(t,r){if(!Buffer.isBuffer(t))return Sd(t,r);var a=t.readUInt32LE(r);return a>0?t.toString("utf8",r+4,r+4+a-1):""},Dd=function(t,r){if(!Buffer.isBuffer(t))return Fd(t,r);var a=t.readUInt32LE(r);return a>0?t.toString("utf8",r+4,r+4+a-1):""},Id=function(t,r){if(!Buffer.isBuffer(t))return Od(t,r);var a=2*t.readUInt32LE(r);return t.toString("utf16le",r+4,r+4+a-1)},Rd=function(t,r){if(!Buffer.isBuffer(t))return Pd(t,r);var a=t.readUInt32LE(r);return t.toString("utf16le",r+4,r+4+a)},Ld=function(t,r){if(!Buffer.isBuffer(t))return $d(t,r);var a=t.readUInt32LE(r);return t.toString("utf8",r+4,r+4+a)},oo=function(t,r){return Buffer.isBuffer(t)?t.readDoubleLE(r):Nd(t,r)},zd=function(t){return Buffer.isBuffer(t)||Array.isArray(t)||typeof Uint8Array<"u"&&t instanceof Uint8Array});var Ga=function(e,t){return e[t]},Pr=function(e,t){return e[t+1]*256+e[t]},zm=function(e,t){var r=e[t+1]*256+e[t];return r<32768?r:(65535-r+1)*-1},Ut=function(e,t){return e[t+3]*(1<<24)+(e[t+2]<<16)+(e[t+1]<<8)+e[t]},ba=function(e,t){return e[t+3]<<24|e[t+2]<<16|e[t+1]<<8|e[t]},Mm=function(e,t){return e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3]};function Li(e,t){var r="",a,i,n=[],o,s,l,c;switch(t){case"dbcs":if(c=this.l,Se&&Buffer.isBuffer(this))r=this.slice(this.l,this.l+2*e).toString("utf16le");else for(l=0;l<e;++l)r+=String.fromCharCode(Pr(this,c)),c+=2;e*=2;break;case"utf8":r=bn(this,this.l,this.l+e);break;case"utf16le":e*=2,r=al(this,this.l,this.l+e);break;case"wstr":return Li.call(this,e,"dbcs");case"lpstr-ansi":r=Cd(this,this.l),e=4+Ut(this,this.l);break;case"lpstr-cp":r=Dd(this,this.l),e=4+Ut(this,this.l);break;case"lpwstr":r=Id(this,this.l),e=4+2*Ut(this,this.l);break;case"lpp4":e=4+Ut(this,this.l),r=Rd(this,this.l),e&2&&(e+=2);break;case"8lpp4":e=4+Ut(this,this.l),r=Ld(this,this.l),e&3&&(e+=4-(e&3));break;case"cstr":for(e=0,r="";(o=Ga(this,this.l+e++))!==0;)n.push(In(o));r=n.join("");break;case"_wstr":for(e=0,r="";(o=Pr(this,this.l+e))!==0;)n.push(In(o)),e+=2;e+=2,r=n.join("");break;case"dbcs-cont":for(r="",c=this.l,l=0;l<e;++l){if(this.lens&&this.lens.indexOf(c)!==-1)return o=Ga(this,c),this.l=c+1,s=Li.call(this,e-l,o?"dbcs-cont":"sbcs-cont"),n.join("")+s;n.push(In(Pr(this,c))),c+=2}r=n.join(""),e*=2;break;case"cpstr":case"sbcs-cont":for(r="",c=this.l,l=0;l!=e;++l){if(this.lens&&this.lens.indexOf(c)!==-1)return o=Ga(this,c),this.l=c+1,s=Li.call(this,e-l,o?"dbcs-cont":"sbcs-cont"),n.join("")+s;n.push(In(Ga(this,c))),c+=1}r=n.join("");break;default:switch(e){case 1:return a=Ga(this,this.l),this.l++,a;case 2:return a=(t==="i"?zm:Pr)(this,this.l),this.l+=2,a;case 4:case-4:return t==="i"||!(this[this.l+3]&128)?(a=(e>0?ba:Mm)(this,this.l),this.l+=4,a):(i=Ut(this,this.l),this.l+=4,i);case 8:case-8:if(t==="f")return e==8?i=oo(this,this.l):i=oo([this[this.l+7],this[this.l+6],this[this.l+5],this[this.l+4],this[this.l+3],this[this.l+2],this[this.l+1],this[this.l+0]],0),this.l+=8,i;e=8;case 16:r=Ad(this,this.l,e);break}}return this.l+=e,r}var Bm=function(e,t,r){e[r]=t&255,e[r+1]=t>>>8&255,e[r+2]=t>>>16&255,e[r+3]=t>>>24&255},Um=function(e,t,r){e[r]=t&255,e[r+1]=t>>8&255,e[r+2]=t>>16&255,e[r+3]=t>>24&255},Vm=function(e,t,r){e[r]=t&255,e[r+1]=t>>>8&255};function Hm(e,t,r){var a=0,i=0;if(r==="dbcs"){for(i=0;i!=t.length;++i)Vm(this,t.charCodeAt(i),this.l+2*i);a=2*t.length}else if(r==="sbcs"){for(t=t.replace(/[^\x00-\x7F]/g,"_"),i=0;i!=t.length;++i)this[this.l+i]=t.charCodeAt(i)&255;a=t.length}else if(r==="hex"){for(;i<e;++i)this[this.l++]=parseInt(t.slice(2*i,2*i+2),16)||0;return this}else if(r==="utf16le"){var n=Math.min(this.l+e,this.length);for(i=0;i<Math.min(t.length,e);++i){var o=t.charCodeAt(i);this[this.l++]=o&255,this[this.l++]=o>>8}for(;this.l<n;)this[this.l++]=0;return this}else switch(e){case 1:a=1,this[this.l]=t&255;break;case 2:a=2,this[this.l]=t&255,t>>>=8,this[this.l+1]=t&255;break;case 3:a=3,this[this.l]=t&255,t>>>=8,this[this.l+1]=t&255,t>>>=8,this[this.l+2]=t&255;break;case 4:a=4,Bm(this,t,this.l);break;case 8:if(a=8,r==="f"){Nm(this,t,this.l);break}case 16:break;case-4:a=4,Um(this,t,this.l);break}return this.l+=a,this}function Md(e,t){var r=Ad(this,this.l,e.length>>1);if(r!==e)throw new Error(t+"Expected "+e+" saw "+r);this.l+=e.length>>1}function mt(e,t){e.l=t,e.read_shift=Li,e.chk=Md,e.write_shift=Hm}function At(e,t){e.l+=t}function lt(e){var t=ia(e);return mt(t,0),t}function Ur(e,t,r){if(e){var a,i,n;mt(e,e.l||0);for(var o=e.length,s=0,l=0;e.l<o;){s=e.read_shift(1),s&128&&(s=(s&127)+((e.read_shift(1)&127)<<7));var c=fo[s]||fo[65535];for(a=e.read_shift(1),n=a&127,i=1;i<4&&a&128;++i)n+=((a=e.read_shift(1))&127)<<7*i;l=e.l+n;var d=c.f&&c.f(e,n,r);if(e.l=l,t(d,c,s))return}}}function us(){var e=[],t=Se?256:2048,r=function(c){var d=lt(c);return mt(d,0),d},a=r(t),i=function(){a&&(a.length>a.l&&(a=a.slice(0,a.l),a.l=a.length),a.length>0&&e.push(a),a=null)},n=function(c){return a&&c<a.length-a.l?a:(i(),a=r(Math.max(c+1,t)))},o=function(){return i(),Yr(e)},s=function(c){i(),a=c,a.l==null&&(a.l=a.length),n(t)};return{next:n,push:s,end:o,_bufs:e}}function Ni(e,t,r){var a=vt(e);if(t.s?(a.cRel&&(a.c+=t.s.c),a.rRel&&(a.r+=t.s.r)):(a.cRel&&(a.c+=t.c),a.rRel&&(a.r+=t.r)),!r||r.biff<12){for(;a.c>=256;)a.c-=256;for(;a.r>=65536;)a.r-=65536}return a}function Mc(e,t,r){var a=vt(e);return a.s=Ni(a.s,t.s,r),a.e=Ni(a.e,t.s,r),a}function zi(e,t){if(e.cRel&&e.c<0)for(e=vt(e);e.c<0;)e.c+=t>8?16384:256;if(e.rRel&&e.r<0)for(e=vt(e);e.r<0;)e.r+=t>8?1048576:t>5?65536:16384;var r=we(e);return!e.cRel&&e.cRel!=null&&(r=Gm(r)),!e.rRel&&e.rRel!=null&&(r=jm(r)),r}function Wo(e,t){return e.s.r==0&&!e.s.rRel&&e.e.r==(t.biff>=12?1048575:t.biff>=8?65536:16384)&&!e.e.rRel?(e.s.cRel?"":"$")+ct(e.s.c)+":"+(e.e.cRel?"":"$")+ct(e.e.c):e.s.c==0&&!e.s.cRel&&e.e.c==(t.biff>=12?16383:255)&&!e.e.cRel?(e.s.rRel?"":"$")+xt(e.s.r)+":"+(e.e.rRel?"":"$")+xt(e.e.r):zi(e.s,t.biff)+":"+zi(e.e,t.biff)}function il(e){return parseInt(Wm(e),10)-1}function xt(e){return""+(e+1)}function jm(e){return e.replace(/([A-Z]|^)(\d+)$/,"$1$$$2")}function Wm(e){return e.replace(/\$(\d+)$/,"$1")}function nl(e){for(var t=Km(e),r=0,a=0;a!==t.length;++a)r=26*r+t.charCodeAt(a)-64;return r-1}function ct(e){if(e<0)throw new Error("invalid column "+e);var t="";for(++e;e;e=Math.floor((e-1)/26))t=String.fromCharCode((e-1)%26+65)+t;return t}function Gm(e){return e.replace(/^([A-Z])/,"$$$1")}function Km(e){return e.replace(/^\$([A-Z])/,"$1")}function Xm(e){return e.replace(/(\$?[A-Z]*)(\$?\d*)/,"$1,$2").split(",")}function Pt(e){for(var t=0,r=0,a=0;a<e.length;++a){var i=e.charCodeAt(a);i>=48&&i<=57?t=10*t+(i-48):i>=65&&i<=90&&(r=26*r+(i-64))}return{c:r-1,r:t-1}}function we(e){for(var t=e.c+1,r="";t;t=(t-1)/26|0)r=String.fromCharCode((t-1)%26+65)+r;return r+(e.r+1)}function ui(e){var t=e.indexOf(":");return t==-1?{s:Pt(e),e:Pt(e)}:{s:Pt(e.slice(0,t)),e:Pt(e.slice(t+1))}}function De(e,t){return typeof t>"u"||typeof t=="number"?De(e.s,e.e):(typeof e!="string"&&(e=we(e)),typeof t!="string"&&(t=we(t)),e==t?e:e+":"+t)}function Ze(e){var t={s:{c:0,r:0},e:{c:0,r:0}},r=0,a=0,i=0,n=e.length;for(r=0;a<n&&!((i=e.charCodeAt(a)-64)<1||i>26);++a)r=26*r+i;for(t.s.c=--r,r=0;a<n&&!((i=e.charCodeAt(a)-48)<0||i>9);++a)r=10*r+i;if(t.s.r=--r,a===n||i!=10)return t.e.c=t.s.c,t.e.r=t.s.r,t;for(++a,r=0;a!=n&&!((i=e.charCodeAt(a)-64)<1||i>26);++a)r=26*r+i;for(t.e.c=--r,r=0;a!=n&&!((i=e.charCodeAt(a)-48)<0||i>9);++a)r=10*r+i;return t.e.r=--r,t}function Bc(e,t){var r=e.t=="d"&&t instanceof Date;if(e.z!=null)try{return e.w=er(e.z,r?$t(t):t)}catch{}try{return e.w=er((e.XF||{}).numFmtId||(r?14:0),r?$t(t):t)}catch{return""+t}}function zr(e,t,r){return e==null||e.t==null||e.t=="z"?"":e.w!==void 0?e.w:(e.t=="d"&&!e.z&&r&&r.dateNF&&(e.z=r.dateNF),e.t=="e"?Va[e.v]||e.v:t==null?Bc(e,e.v):Bc(e,t))}function da(e,t){var r=t&&t.sheet?t.sheet:"Sheet1",a={};return a[r]=e,{SheetNames:[r],Sheets:a}}function Bd(e,t,r){var a=r||{},i=e?Array.isArray(e):a.dense,n=e||(i?[]:{}),o=0,s=0;if(n&&a.origin!=null){if(typeof a.origin=="number")o=a.origin;else{var l=typeof a.origin=="string"?Pt(a.origin):a.origin;o=l.r,s=l.c}n["!ref"]||(n["!ref"]="A1:A1")}var c={s:{c:1e7,r:1e7},e:{c:0,r:0}};if(n["!ref"]){var d=Ze(n["!ref"]);c.s.c=d.s.c,c.s.r=d.s.r,c.e.c=Math.max(c.e.c,d.e.c),c.e.r=Math.max(c.e.r,d.e.r),o==-1&&(c.e.r=o=d.e.r+1)}for(var u=0;u!=t.length;++u)if(t[u]){if(!Array.isArray(t[u]))throw new Error("aoa_to_sheet expects an array of arrays");for(var f=0;f!=t[u].length;++f)if(!(typeof t[u][f]>"u")){var h={v:t[u][f]},p=o+u,g=s+f;if(c.s.r>p&&(c.s.r=p),c.s.c>g&&(c.s.c=g),c.e.r<p&&(c.e.r=p),c.e.c<g&&(c.e.c=g),t[u][f]&&typeof t[u][f]=="object"&&!Array.isArray(t[u][f])&&!(t[u][f]instanceof Date))h=t[u][f];else if(Array.isArray(h.v)&&(h.f=t[u][f][1],h.v=h.v[0]),h.v===null)if(h.f)h.t="n";else if(a.nullError)h.t="e",h.v=0;else if(a.sheetStubs)h.t="z";else continue;else typeof h.v=="number"?h.t="n":typeof h.v=="boolean"?h.t="b":h.v instanceof Date?(h.z=a.dateNF||_e[14],a.cellDates?(h.t="d",h.w=er(h.z,$t(h.v))):(h.t="n",h.v=$t(h.v),h.w=er(h.z,h.v))):h.t="s";if(i)n[p]||(n[p]=[]),n[p][g]&&n[p][g].z&&(h.z=n[p][g].z),n[p][g]=h;else{var m=we({c:g,r:p});n[m]&&n[m].z&&(h.z=n[m].z),n[m]=h}}}return c.s.c<1e7&&(n["!ref"]=De(c)),n}function hi(e,t){return Bd(null,e,t)}function Ym(e){return e.read_shift(4,"i")}function Tt(e){var t=e.read_shift(4);return t===0?"":e.read_shift(t,"dbcs")}function qm(e){return{ich:e.read_shift(2),ifnt:e.read_shift(2)}}function ol(e,t){var r=e.l,a=e.read_shift(1),i=Tt(e),n=[],o={t:i,h:i};if(a&1){for(var s=e.read_shift(4),l=0;l!=s;++l)n.push(qm(e));o.r=n}else o.r=[{ich:0,ifnt:0}];return e.l=r+t,o}var Zm=ol;function ar(e){var t=e.read_shift(4),r=e.read_shift(2);return r+=e.read_shift(1)<<16,e.l++,{c:t,iStyleRef:r}}function Ba(e){var t=e.read_shift(2);return t+=e.read_shift(1)<<16,e.l++,{c:-1,iStyleRef:t}}var Jm=Tt;function sl(e){var t=e.read_shift(4);return t===0||t===4294967295?"":e.read_shift(t,"dbcs")}var Qm=Tt,hs=sl;function ll(e){var t=e.slice(e.l,e.l+4),r=t[0]&1,a=t[0]&2;e.l+=4;var i=a===0?oo([0,0,0,0,t[0]&252,t[1],t[2],t[3]],0):ba(t,0)>>2;return r?i/100:i}function Ud(e){var t={s:{},e:{}};return t.s.r=e.read_shift(4),t.e.r=e.read_shift(4),t.s.c=e.read_shift(4),t.e.c=e.read_shift(4),t}var Ua=Ud;function kt(e){if(e.length-e.l<8)throw"XLS Xnum Buffer underflow";return e.read_shift(8,"f")}function ev(e){var t={},r=e.read_shift(1),a=r>>>1,i=e.read_shift(1),n=e.read_shift(2,"i"),o=e.read_shift(1),s=e.read_shift(1),l=e.read_shift(1);switch(e.l++,a){case 0:t.auto=1;break;case 1:t.index=i;var c=Ea[i];c&&(t.rgb=nn(c));break;case 2:t.rgb=nn([o,s,l]);break;case 3:t.theme=i;break}return n!=0&&(t.tint=n>0?n/32767:n/32768),t}function tv(e){var t=e.read_shift(1);e.l++;var r={fBold:t&1,fItalic:t&2,fUnderline:t&4,fStrikeout:t&8,fOutline:t&16,fShadow:t&32,fCondense:t&64,fExtend:t&128};return r}function Vd(e,t){var r={2:"BITMAP",3:"METAFILEPICT",8:"DIB",14:"ENHMETAFILE"},a=e.read_shift(4);switch(a){case 0:return"";case 4294967295:case 4294967294:return r[e.read_shift(4)]||""}if(a>400)throw new Error("Unsupported Clipboard: "+a.toString(16));return e.l-=4,e.read_shift(0,t==1?"lpstr":"lpwstr")}function rv(e){return Vd(e,1)}function av(e){return Vd(e,2)}var cl=2,Lt=3,Rn=11,Uc=12,so=19,$n=64,iv=65,nv=71,ov=4108,sv=4126,ht=80,Hd=81,lv=[ht,Hd],cv={1:{n:"CodePage",t:cl},2:{n:"Category",t:ht},3:{n:"PresentationFormat",t:ht},4:{n:"ByteCount",t:Lt},5:{n:"LineCount",t:Lt},6:{n:"ParagraphCount",t:Lt},7:{n:"SlideCount",t:Lt},8:{n:"NoteCount",t:Lt},9:{n:"HiddenCount",t:Lt},10:{n:"MultimediaClipCount",t:Lt},11:{n:"ScaleCrop",t:Rn},12:{n:"HeadingPairs",t:ov},13:{n:"TitlesOfParts",t:sv},14:{n:"Manager",t:ht},15:{n:"Company",t:ht},16:{n:"LinksUpToDate",t:Rn},17:{n:"CharacterCount",t:Lt},19:{n:"SharedDoc",t:Rn},22:{n:"HyperlinksChanged",t:Rn},23:{n:"AppVersion",t:Lt,p:"version"},24:{n:"DigSig",t:iv},26:{n:"ContentType",t:ht},27:{n:"ContentStatus",t:ht},28:{n:"Language",t:ht},29:{n:"Version",t:ht},255:{},2147483648:{n:"Locale",t:so},2147483651:{n:"Behavior",t:so},1919054434:{}},dv={1:{n:"CodePage",t:cl},2:{n:"Title",t:ht},3:{n:"Subject",t:ht},4:{n:"Author",t:ht},5:{n:"Keywords",t:ht},6:{n:"Comments",t:ht},7:{n:"Template",t:ht},8:{n:"LastAuthor",t:ht},9:{n:"RevNumber",t:ht},10:{n:"EditTime",t:$n},11:{n:"LastPrinted",t:$n},12:{n:"CreatedDate",t:$n},13:{n:"ModifiedDate",t:$n},14:{n:"PageCount",t:Lt},15:{n:"WordCount",t:Lt},16:{n:"CharCount",t:Lt},17:{n:"Thumbnail",t:nv},18:{n:"Application",t:ht},19:{n:"DocSecurity",t:Lt},255:{},2147483648:{n:"Locale",t:so},2147483651:{n:"Behavior",t:so},1919054434:{}},Vc={1:"US",2:"CA",3:"",7:"RU",20:"EG",30:"GR",31:"NL",32:"BE",33:"FR",34:"ES",36:"HU",39:"IT",41:"CH",43:"AT",44:"GB",45:"DK",46:"SE",47:"NO",48:"PL",49:"DE",52:"MX",55:"BR",61:"AU",64:"NZ",66:"TH",81:"JP",82:"KR",84:"VN",86:"CN",90:"TR",105:"JS",213:"DZ",216:"MA",218:"LY",351:"PT",354:"IS",358:"FI",420:"CZ",886:"TW",961:"LB",962:"JO",963:"SY",964:"IQ",965:"KW",966:"SA",971:"AE",972:"IL",974:"QA",981:"IR",65535:"US"},uv=[null,"solid","mediumGray","darkGray","lightGray","darkHorizontal","darkVertical","darkDown","darkUp","darkGrid","darkTrellis","lightHorizontal","lightVertical","lightDown","lightUp","lightGrid","lightTrellis","gray125","gray0625"];function hv(e){return e.map(function(t){return[t>>16&255,t>>8&255,t&255]})}var fv=hv([0,16777215,16711680,65280,255,16776960,16711935,65535,0,16777215,16711680,65280,255,16776960,16711935,65535,8388608,32768,128,8421376,8388736,32896,12632256,8421504,10066431,10040166,16777164,13434879,6684774,16744576,26316,13421823,128,16711935,16776960,65535,8388736,8388608,32896,255,52479,13434879,13434828,16777113,10079487,16751052,13408767,16764057,3368703,3394764,10079232,16763904,16750848,16737792,6710937,9868950,13158,3381606,13056,3355392,10040064,10040166,3355545,3355443,16777215,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]),Ea=vt(fv),Va={0:"#NULL!",7:"#DIV/0!",15:"#VALUE!",23:"#REF!",29:"#NAME?",36:"#NUM!",42:"#N/A",43:"#GETTING_DATA",255:"#WTF?"},jd={"#NULL!":0,"#DIV/0!":7,"#VALUE!":15,"#REF!":23,"#NAME?":29,"#NUM!":36,"#N/A":42,"#GETTING_DATA":43,"#WTF?":255},Hc={"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml":"workbooks","application/vnd.ms-excel.sheet.macroEnabled.main+xml":"workbooks","application/vnd.ms-excel.sheet.binary.macroEnabled.main":"workbooks","application/vnd.ms-excel.addin.macroEnabled.main+xml":"workbooks","application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml":"workbooks","application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml":"sheets","application/vnd.ms-excel.worksheet":"sheets","application/vnd.ms-excel.binIndexWs":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml":"charts","application/vnd.ms-excel.chartsheet":"charts","application/vnd.ms-excel.macrosheet+xml":"macros","application/vnd.ms-excel.macrosheet":"macros","application/vnd.ms-excel.intlmacrosheet":"TODO","application/vnd.ms-excel.binIndexMs":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml":"dialogs","application/vnd.ms-excel.dialogsheet":"dialogs","application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml":"strs","application/vnd.ms-excel.sharedStrings":"strs","application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml":"styles","application/vnd.ms-excel.styles":"styles","application/vnd.openxmlformats-package.core-properties+xml":"coreprops","application/vnd.openxmlformats-officedocument.custom-properties+xml":"custprops","application/vnd.openxmlformats-officedocument.extended-properties+xml":"extprops","application/vnd.openxmlformats-officedocument.customXmlProperties+xml":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.customProperty":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml":"comments","application/vnd.ms-excel.comments":"comments","application/vnd.ms-excel.threadedcomments+xml":"threadedcomments","application/vnd.ms-excel.person+xml":"people","application/vnd.openxmlformats-officedocument.spreadsheetml.sheetMetadata+xml":"metadata","application/vnd.ms-excel.sheetMetadata":"metadata","application/vnd.ms-excel.pivotTable":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.pivotTable+xml":"TODO","application/vnd.openxmlformats-officedocument.drawingml.chart+xml":"TODO","application/vnd.ms-office.chartcolorstyle+xml":"TODO","application/vnd.ms-office.chartstyle+xml":"TODO","application/vnd.ms-office.chartex+xml":"TODO","application/vnd.ms-excel.calcChain":"calcchains","application/vnd.openxmlformats-officedocument.spreadsheetml.calcChain+xml":"calcchains","application/vnd.openxmlformats-officedocument.spreadsheetml.printerSettings":"TODO","application/vnd.ms-office.activeX":"TODO","application/vnd.ms-office.activeX+xml":"TODO","application/vnd.ms-excel.attachedToolbars":"TODO","application/vnd.ms-excel.connections":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml":"TODO","application/vnd.ms-excel.externalLink":"links","application/vnd.openxmlformats-officedocument.spreadsheetml.externalLink+xml":"links","application/vnd.ms-excel.pivotCacheDefinition":"TODO","application/vnd.ms-excel.pivotCacheRecords":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheDefinition+xml":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheRecords+xml":"TODO","application/vnd.ms-excel.queryTable":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.queryTable+xml":"TODO","application/vnd.ms-excel.userNames":"TODO","application/vnd.ms-excel.revisionHeaders":"TODO","application/vnd.ms-excel.revisionLog":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.revisionHeaders+xml":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.revisionLog+xml":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.userNames+xml":"TODO","application/vnd.ms-excel.tableSingleCells":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.tableSingleCells+xml":"TODO","application/vnd.ms-excel.slicer":"TODO","application/vnd.ms-excel.slicerCache":"TODO","application/vnd.ms-excel.slicer+xml":"TODO","application/vnd.ms-excel.slicerCache+xml":"TODO","application/vnd.ms-excel.wsSortMap":"TODO","application/vnd.ms-excel.table":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml":"TODO","application/vnd.openxmlformats-officedocument.theme+xml":"themes","application/vnd.openxmlformats-officedocument.themeOverride+xml":"TODO","application/vnd.ms-excel.Timeline+xml":"TODO","application/vnd.ms-excel.TimelineCache+xml":"TODO","application/vnd.ms-office.vbaProject":"vba","application/vnd.ms-office.vbaProjectSignature":"TODO","application/vnd.ms-office.volatileDependencies":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.volatileDependencies+xml":"TODO","application/vnd.ms-excel.controlproperties+xml":"TODO","application/vnd.openxmlformats-officedocument.model+data":"TODO","application/vnd.ms-excel.Survey+xml":"TODO","application/vnd.openxmlformats-officedocument.drawing+xml":"drawings","application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml":"TODO","application/vnd.openxmlformats-officedocument.drawingml.diagramColors+xml":"TODO","application/vnd.openxmlformats-officedocument.drawingml.diagramData+xml":"TODO","application/vnd.openxmlformats-officedocument.drawingml.diagramLayout+xml":"TODO","application/vnd.openxmlformats-officedocument.drawingml.diagramStyle+xml":"TODO","application/vnd.openxmlformats-officedocument.vmlDrawing":"TODO","application/vnd.openxmlformats-package.relationships+xml":"rels","application/vnd.openxmlformats-officedocument.oleObject":"TODO","image/png":"TODO",sheet:"js"};function pv(){return{workbooks:[],sheets:[],charts:[],dialogs:[],macros:[],rels:[],strs:[],comments:[],threadedcomments:[],links:[],coreprops:[],extprops:[],custprops:[],themes:[],styles:[],calcchains:[],vba:[],drawings:[],metadata:[],people:[],TODO:[],xmlns:""}}function gv(e){var t=pv();if(!e||!e.match)return t;var r={};if((e.match(Ft)||[]).forEach(function(a){var i=me(a);switch(i[0].replace(km,"<")){case"<?xml":break;case"<Types":t.xmlns=i["xmlns"+(i[0].match(/<(\w+):/)||["",""])[1]];break;case"<Default":r[i.Extension]=i.ContentType;break;case"<Override":t[Hc[i.ContentType]]!==void 0&&t[Hc[i.ContentType]].push(i.PartName);break}}),t.xmlns!==Rm.CT)throw new Error("Unknown Namespace: "+t.xmlns);return t.calcchain=t.calcchains.length>0?t.calcchains[0]:"",t.sst=t.strs.length>0?t.strs[0]:"",t.style=t.styles.length>0?t.styles[0]:"",t.defaults=r,delete t.calcchains,t}var Xa={WB:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument",SHEET:"http://sheetjs.openxmlformats.org/officeDocument/2006/relationships/officeDocument",HLINK:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink",VML:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/vmlDrawing",XPATH:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/externalLinkPath",XMISS:"http://schemas.microsoft.com/office/2006/relationships/xlExternalLinkPath/xlPathMissing",XLINK:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/externalLink",CXML:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/customXml",CXMLP:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/customXmlProps",CMNT:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/comments",CORE_PROPS:"http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties",EXT_PROPS:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties",CUST_PROPS:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/custom-properties",SST:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings",STY:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles",THEME:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme",CHART:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/chart",CHARTEX:"http://schemas.microsoft.com/office/2014/relationships/chartEx",CS:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/chartsheet",WS:["http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet","http://purl.oclc.org/ooxml/officeDocument/relationships/worksheet"],DS:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/dialogsheet",MS:"http://schemas.microsoft.com/office/2006/relationships/xlMacrosheet",IMG:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/image",DRAW:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/drawing",XLMETA:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/sheetMetadata",TCMNT:"http://schemas.microsoft.com/office/2017/10/relationships/threadedComment",PEOPLE:"http://schemas.microsoft.com/office/2017/10/relationships/person",VBA:"http://schemas.microsoft.com/office/2006/relationships/vbaProject"};function fs(e){var t=e.lastIndexOf("/");return e.slice(0,t+1)+"_rels/"+e.slice(t+1)+".rels"}function Mi(e,t){var r={"!id":{}};if(!e)return r;t.charAt(0)!=="/"&&(t="/"+t);var a={};return(e.match(Ft)||[]).forEach(function(i){var n=me(i);if(n[0]==="<Relationship"){var o={};o.Type=n.Type,o.Target=n.Target,o.Id=n.Id,n.TargetMode&&(o.TargetMode=n.TargetMode);var s=n.TargetMode==="External"?n.Target:Di(n.Target,t);r[s]=o,a[n.Id]=o}}),r["!id"]=a,r}var mv="application/vnd.oasis.opendocument.spreadsheet";function vv(e,t){for(var r=rl(e),a,i;a=rn.exec(r);)switch(a[3]){case"manifest":break;case"file-entry":if(i=me(a[0],!1),i.path=="/"&&i.type!==mv)throw new Error("This OpenDocument is not a spreadsheet");break;case"encryption-data":case"algorithm":case"start-key-generation":case"key-derivation":throw new Error("Unsupported ODS Encryption");default:if(t&&t.WTF)throw a}}var Bi=[["cp:category","Category"],["cp:contentStatus","ContentStatus"],["cp:keywords","Keywords"],["cp:lastModifiedBy","LastAuthor"],["cp:lastPrinted","LastPrinted"],["cp:revision","RevNumber"],["cp:version","Version"],["dc:creator","Author"],["dc:description","Comments"],["dc:identifier","Identifier"],["dc:language","Language"],["dc:subject","Subject"],["dc:title","Title"],["dcterms:created","CreatedDate","date"],["dcterms:modified","ModifiedDate","date"]],xv=function(){for(var e=new Array(Bi.length),t=0;t<Bi.length;++t){var r=Bi[t],a="(?:"+r[0].slice(0,r[0].indexOf(":"))+":)"+r[0].slice(r[0].indexOf(":")+1);e[t]=new RegExp("<"+a+"[^>]*>([\\s\\S]*?)</"+a+">")}return e}();function Wd(e){var t={};e=Ue(e);for(var r=0;r<Bi.length;++r){var a=Bi[r],i=e.match(xv[r]);i!=null&&i.length>0&&(t[a[1]]=Ie(i[1])),a[2]==="date"&&t[a[1]]&&(t[a[1]]=ft(t[a[1]]))}return t}var bv=[["Application","Application","string"],["AppVersion","AppVersion","string"],["Company","Company","string"],["DocSecurity","DocSecurity","string"],["Manager","Manager","string"],["HyperlinksChanged","HyperlinksChanged","bool"],["SharedDoc","SharedDoc","bool"],["LinksUpToDate","LinksUpToDate","bool"],["ScaleCrop","ScaleCrop","bool"],["HeadingPairs","HeadingPairs","raw"],["TitlesOfParts","TitlesOfParts","raw"]];function Gd(e,t,r,a){var i=[];if(typeof e=="string")i=Pc(e,a);else for(var n=0;n<e.length;++n)i=i.concat(e[n].map(function(d){return{v:d}}));var o=typeof t=="string"?Pc(t,a).map(function(d){return d.v}):t,s=0,l=0;if(o.length>0)for(var c=0;c!==i.length;c+=2){switch(l=+i[c+1].v,i[c].v){case"Worksheets":case"工作表":case"Листы":case"أوراق العمل":case"ワークシート":case"גליונות עבודה":case"Arbeitsblätter":case"Çalışma Sayfaları":case"Feuilles de calcul":case"Fogli di lavoro":case"Folhas de cálculo":case"Planilhas":case"Regneark":case"Hojas de cálculo":case"Werkbladen":r.Worksheets=l,r.SheetNames=o.slice(s,s+l);break;case"Named Ranges":case"Rangos con nombre":case"名前付き一覧":case"Benannte Bereiche":case"Navngivne områder":r.NamedRanges=l,r.DefinedNames=o.slice(s,s+l);break;case"Charts":case"Diagramme":r.Chartsheets=l,r.ChartNames=o.slice(s,s+l);break}s+=l}}function wv(e,t,r){var a={};return t||(t={}),e=Ue(e),bv.forEach(function(i){var n=(e.match(tn(i[0]))||[])[1];switch(i[2]){case"string":n&&(t[i[1]]=Ie(n));break;case"bool":t[i[1]]=n==="true";break;case"raw":var o=e.match(new RegExp("<"+i[0]+"[^>]*>([\\s\\S]*?)</"+i[0]+">"));o&&o.length>0&&(a[i[1]]=o[1]);break}}),a.HeadingPairs&&a.TitlesOfParts&&Gd(a.HeadingPairs,a.TitlesOfParts,t,r),t}var yv=/<[^>]+>[^<]*/g;function _v(e,t){var r={},a="",i=e.match(yv);if(i)for(var n=0;n!=i.length;++n){var o=i[n],s=me(o);switch(s[0]){case"<?xml":break;case"<Properties":break;case"<property":a=Ie(s.name);break;case"</property>":a=null;break;default:if(o.indexOf("<vt:")===0){var l=o.split(">"),c=l[0].slice(4),d=l[1];switch(c){case"lpstr":case"bstr":case"lpwstr":r[a]=Ie(d);break;case"bool":r[a]=We(d);break;case"i1":case"i2":case"i4":case"i8":case"int":case"uint":r[a]=parseInt(d,10);break;case"r4":case"r8":case"decimal":r[a]=parseFloat(d);break;case"filetime":case"date":r[a]=ft(d);break;case"cy":case"error":r[a]=Ie(d);break;default:if(c.slice(-1)=="/")break;t.WTF&&typeof console<"u"&&console.warn("Unexpected",o,c,l)}}else if(o.slice(0,2)!=="</"){if(t.WTF)throw new Error(o)}}}return r}var kv={Title:"Title",Subject:"Subject",Author:"Author",Keywords:"Keywords",Comments:"Description",LastAuthor:"LastAuthor",RevNumber:"Revision",Application:"AppName",LastPrinted:"LastPrinted",CreatedDate:"Created",ModifiedDate:"LastSaved",Category:"Category",Manager:"Manager",Company:"Company",AppVersion:"Version",ContentStatus:"ContentStatus",Identifier:"Identifier",Language:"Language"},Go;function Ev(e,t,r){Go||(Go=Qs(kv)),t=Go[t]||t,e[t]=r}function dl(e){var t=e.read_shift(4),r=e.read_shift(4);return new Date((r/1e7*Math.pow(2,32)+t/1e7-11644473600)*1e3).toISOString().replace(/\.000/,"")}function Kd(e,t,r){var a=e.l,i=e.read_shift(0,"lpstr-cp");if(r)for(;e.l-a&3;)++e.l;return i}function Xd(e,t,r){var a=e.read_shift(0,"lpwstr");return a}function Yd(e,t,r){return t===31?Xd(e):Kd(e,t,r)}function ps(e,t,r){return Yd(e,t,r===!1?0:4)}function Tv(e,t){if(!t)throw new Error("VtUnalignedString must have positive length");return Yd(e,t,0)}function Av(e){for(var t=e.read_shift(4),r=[],a=0;a!=t;++a){var i=e.l;r[a]=e.read_shift(0,"lpwstr").replace(Rt,""),e.l-i&2&&(e.l+=2)}return r}function Sv(e){for(var t=e.read_shift(4),r=[],a=0;a!=t;++a)r[a]=e.read_shift(0,"lpstr-cp").replace(Rt,"");return r}function Cv(e){var t=e.l,r=lo(e,Hd);e[e.l]==0&&e[e.l+1]==0&&e.l-t&2&&(e.l+=2);var a=lo(e,Lt);return[r,a]}function Fv(e){for(var t=e.read_shift(4),r=[],a=0;a<t/2;++a)r.push(Cv(e));return r}function jc(e,t){for(var r=e.read_shift(4),a={},i=0;i!=r;++i){var n=e.read_shift(4),o=e.read_shift(4);a[n]=e.read_shift(o,t===1200?"utf16le":"utf8").replace(Rt,"").replace(Fi,"!"),t===1200&&o%2&&(e.l+=2)}return e.l&3&&(e.l=e.l>>3<<2),a}function qd(e){var t=e.read_shift(4),r=e.slice(e.l,e.l+t);return e.l+=t,(t&3)>0&&(e.l+=4-(t&3)&3),r}function Dv(e){var t={};return t.Size=e.read_shift(4),e.l+=t.Size+3-(t.Size-1)%4,t}function lo(e,t,r){var a=e.read_shift(2),i,n=r||{};if(e.l+=2,t!==Uc&&a!==t&&lv.indexOf(t)===-1&&!((t&65534)==4126&&(a&65534)==4126))throw new Error("Expected type "+t+" saw "+a);switch(t===Uc?a:t){case 2:return i=e.read_shift(2,"i"),n.raw||(e.l+=2),i;case 3:return i=e.read_shift(4,"i"),i;case 11:return e.read_shift(4)!==0;case 19:return i=e.read_shift(4),i;case 30:return Kd(e,a,4).replace(Rt,"");case 31:return Xd(e);case 64:return dl(e);case 65:return qd(e);case 71:return Dv(e);case 80:return ps(e,a,!n.raw).replace(Rt,"");case 81:return Tv(e,a).replace(Rt,"");case 4108:return Fv(e);case 4126:case 4127:return a==4127?Av(e):Sv(e);default:throw new Error("TypedPropertyValue unrecognized type "+t+" "+a)}}function Wc(e,t){var r=e.l,a=e.read_shift(4),i=e.read_shift(4),n=[],o=0,s=0,l=-1,c={};for(o=0;o!=i;++o){var d=e.read_shift(4),u=e.read_shift(4);n[o]=[d,u+r]}n.sort(function(S,x){return S[1]-x[1]});var f={};for(o=0;o!=i;++o){if(e.l!==n[o][1]){var h=!0;if(o>0&&t)switch(t[n[o-1][0]].t){case 2:e.l+2===n[o][1]&&(e.l+=2,h=!1);break;case 80:e.l<=n[o][1]&&(e.l=n[o][1],h=!1);break;case 4108:e.l<=n[o][1]&&(e.l=n[o][1],h=!1);break}if((!t||o==0)&&e.l<=n[o][1]&&(h=!1,e.l=n[o][1]),h)throw new Error("Read Error: Expected address "+n[o][1]+" at "+e.l+" :"+o)}if(t){var p=t[n[o][0]];if(f[p.n]=lo(e,p.t,{raw:!0}),p.p==="version"&&(f[p.n]=String(f[p.n]>>16)+"."+("0000"+String(f[p.n]&65535)).slice(-4)),p.n=="CodePage")switch(f[p.n]){case 0:f[p.n]=1252;case 874:case 932:case 936:case 949:case 950:case 1250:case 1251:case 1253:case 1254:case 1255:case 1256:case 1257:case 1258:case 1e4:case 1200:case 1201:case 1252:case 65e3:case-536:case 65001:case-535:lr(s=f[p.n]>>>0&65535);break;default:throw new Error("Unsupported CodePage: "+f[p.n])}}else if(n[o][0]===1){if(s=f.CodePage=lo(e,cl),lr(s),l!==-1){var g=e.l;e.l=n[l][1],c=jc(e,s),e.l=g}}else if(n[o][0]===0){if(s===0){l=o,e.l=n[o+1][1];continue}c=jc(e,s)}else{var m=c[n[o][0]],w;switch(e[e.l]){case 65:e.l+=4,w=qd(e);break;case 30:e.l+=4,w=ps(e,e[e.l-4]).replace(/\u0000+$/,"");break;case 31:e.l+=4,w=ps(e,e[e.l-4]).replace(/\u0000+$/,"");break;case 3:e.l+=4,w=e.read_shift(4,"i");break;case 19:e.l+=4,w=e.read_shift(4);break;case 5:e.l+=4,w=e.read_shift(8,"f");break;case 11:e.l+=4,w=tt(e,4);break;case 64:e.l+=4,w=ft(dl(e));break;default:throw new Error("unparsed value: "+e[e.l])}f[m]=w}}return e.l=r+a,f}function Gc(e,t,r){var a=e.content;if(!a)return{};mt(a,0);var i,n,o,s,l=0;a.chk("feff","Byte Order: "),a.read_shift(2);var c=a.read_shift(4),d=a.read_shift(16);if(d!==Fe.utils.consts.HEADER_CLSID&&d!==r)throw new Error("Bad PropertySet CLSID "+d);if(i=a.read_shift(4),i!==1&&i!==2)throw new Error("Unrecognized #Sets: "+i);if(n=a.read_shift(16),s=a.read_shift(4),i===1&&s!==a.l)throw new Error("Length mismatch: "+s+" !== "+a.l);i===2&&(o=a.read_shift(16),l=a.read_shift(4));var u=Wc(a,t),f={SystemIdentifier:c};for(var h in u)f[h]=u[h];if(f.FMTID=n,i===1)return f;if(l-a.l==2&&(a.l+=2),a.l!==l)throw new Error("Length mismatch 2: "+a.l+" !== "+l);var p;try{p=Wc(a,null)}catch{}for(h in p)f[h]=p[h];return f.FMTID=[n,o],f}function Wr(e,t){return e.read_shift(t),null}function Ov(e,t,r){for(var a=[],i=e.l+t;e.l<i;)a.push(r(e,i-e.l));if(i!==e.l)throw new Error("Slurp error");return a}function tt(e,t){return e.read_shift(t)===1}function it(e){return e.read_shift(2,"u")}function Zd(e,t){return Ov(e,t,it)}function Iv(e){var t=e.read_shift(1),r=e.read_shift(1);return r===1?t:t===1}function wn(e,t,r){var a=e.read_shift(r&&r.biff>=12?2:1),i="sbcs-cont";if(r&&r.biff>=8,!r||r.biff==8){var n=e.read_shift(1);n&&(i="dbcs-cont")}else r.biff==12&&(i="wstr");r.biff>=2&&r.biff<=5&&(i="cpstr");var o=a?e.read_shift(a,i):"";return o}function Pv(e){var t=e.read_shift(2),r=e.read_shift(1),a=r&4,i=r&8,n=1+(r&1),o=0,s,l={};i&&(o=e.read_shift(2)),a&&(s=e.read_shift(4));var c=n==2?"dbcs-cont":"sbcs-cont",d=t===0?"":e.read_shift(t,c);return i&&(e.l+=4*o),a&&(e.l+=s),l.t=d,i||(l.raw="<t>"+l.t+"</t>",l.r=l.t),l}function Oa(e,t,r){var a;if(r){if(r.biff>=2&&r.biff<=5)return e.read_shift(t,"cpstr");if(r.biff>=12)return e.read_shift(t,"dbcs-cont")}var i=e.read_shift(1);return i===0?a=e.read_shift(t,"sbcs-cont"):a=e.read_shift(t,"dbcs-cont"),a}function yn(e,t,r){var a=e.read_shift(r&&r.biff==2?1:2);return a===0?(e.l++,""):Oa(e,a,r)}function Ha(e,t,r){if(r.biff>5)return yn(e,t,r);var a=e.read_shift(1);return a===0?(e.l++,""):e.read_shift(a,r.biff<=4||!e.lens?"cpstr":"sbcs-cont")}function Rv(e){var t=e.read_shift(1);e.l++;var r=e.read_shift(2);return e.l+=2,[t,r]}function $v(e){var t=e.read_shift(4),r=e.l,a=!1;t>24&&(e.l+=t-24,e.read_shift(16)==="795881f43b1d7f48af2c825dc4852763"&&(a=!0),e.l=r);var i=e.read_shift((a?t-24:t)>>1,"utf16le").replace(Rt,"");return a&&(e.l+=24),i}function Lv(e){for(var t=e.read_shift(2),r="";t-- >0;)r+="../";var a=e.read_shift(0,"lpstr-ansi");if(e.l+=2,e.read_shift(2)!=57005)throw new Error("Bad FileMoniker");var i=e.read_shift(4);if(i===0)return r+a.replace(/\\/g,"/");var n=e.read_shift(4);if(e.read_shift(2)!=3)throw new Error("Bad FileMoniker");var o=e.read_shift(n>>1,"utf16le").replace(Rt,"");return r+o}function Nv(e,t){var r=e.read_shift(16);switch(r){case"e0c9ea79f9bace118c8200aa004ba90b":return $v(e);case"0303000000000000c000000000000046":return Lv(e);default:throw new Error("Unsupported Moniker "+r)}}function Ln(e){var t=e.read_shift(4),r=t>0?e.read_shift(t,"utf16le").replace(Rt,""):"";return r}function zv(e,t){var r=e.l+t,a=e.read_shift(4);if(a!==2)throw new Error("Unrecognized streamVersion: "+a);var i=e.read_shift(2);e.l+=2;var n,o,s,l,c="",d,u;i&16&&(n=Ln(e,r-e.l)),i&128&&(o=Ln(e,r-e.l)),(i&257)===257&&(s=Ln(e,r-e.l)),(i&257)===1&&(l=Nv(e,r-e.l)),i&8&&(c=Ln(e,r-e.l)),i&32&&(d=e.read_shift(16)),i&64&&(u=dl(e)),e.l=r;var f=o||s||l||"";f&&c&&(f+="#"+c),f||(f="#"+c),i&2&&f.charAt(0)=="/"&&f.charAt(1)!="/"&&(f="file://"+f);var h={Target:f};return d&&(h.guid=d),u&&(h.time=u),n&&(h.Tooltip=n),h}function Jd(e){var t=e.read_shift(1),r=e.read_shift(1),a=e.read_shift(1),i=e.read_shift(1);return[t,r,a,i]}function Qd(e,t){var r=Jd(e);return r[3]=0,r}function Cr(e){var t=e.read_shift(2),r=e.read_shift(2),a=e.read_shift(2);return{r:t,c:r,ixfe:a}}function Mv(e){var t=e.read_shift(2),r=e.read_shift(2);return e.l+=8,{type:t,flags:r}}function Bv(e,t,r){return t===0?"":Ha(e,t,r)}function Uv(e,t,r){var a=r.biff>8?4:2,i=e.read_shift(a),n=e.read_shift(a,"i"),o=e.read_shift(a,"i");return[i,n,o]}function eu(e){var t=e.read_shift(2),r=ll(e);return[t,r]}function Vv(e,t,r){e.l+=4,t-=4;var a=e.l+t,i=wn(e,t,r),n=e.read_shift(2);if(a-=e.l,n!==a)throw new Error("Malformed AddinUdf: padding = "+a+" != "+n);return e.l+=n,i}function Fo(e){var t=e.read_shift(2),r=e.read_shift(2),a=e.read_shift(2),i=e.read_shift(2);return{s:{c:a,r:t},e:{c:i,r}}}function tu(e){var t=e.read_shift(2),r=e.read_shift(2),a=e.read_shift(1),i=e.read_shift(1);return{s:{c:a,r:t},e:{c:i,r}}}var Hv=tu;function ru(e){e.l+=4;var t=e.read_shift(2),r=e.read_shift(2),a=e.read_shift(2);return e.l+=12,[r,t,a]}function jv(e){var t={};return e.l+=4,e.l+=16,t.fSharedNote=e.read_shift(2),e.l+=4,t}function Wv(e){var t={};return e.l+=4,e.cf=e.read_shift(2),t}function yt(e){e.l+=2,e.l+=e.read_shift(2)}var Gv={0:yt,4:yt,5:yt,6:yt,7:Wv,8:yt,9:yt,10:yt,11:yt,12:yt,13:jv,14:yt,15:yt,16:yt,17:yt,18:yt,19:yt,20:yt,21:ru};function Kv(e,t){for(var r=e.l+t,a=[];e.l<r;){var i=e.read_shift(2);e.l-=2;try{a.push(Gv[i](e,r-e.l))}catch{return e.l=r,a}}return e.l!=r&&(e.l=r),a}function Nn(e,t){var r={BIFFVer:0,dt:0};switch(r.BIFFVer=e.read_shift(2),t-=2,t>=2&&(r.dt=e.read_shift(2),e.l-=2),r.BIFFVer){case 1536:case 1280:case 1024:case 768:case 512:case 2:case 7:break;default:if(t>6)throw new Error("Unexpected BIFF Ver "+r.BIFFVer)}return e.read_shift(t),r}function Xv(e,t){return t===0||e.read_shift(2),1200}function Yv(e,t,r){if(r.enc)return e.l+=t,"";var a=e.l,i=Ha(e,0,r);return e.read_shift(t+a-e.l),i}function qv(e,t,r){var a=r&&r.biff==8||t==2?e.read_shift(2):(e.l+=t,0);return{fDialog:a&16,fBelow:a&64,fRight:a&128}}function Zv(e,t,r){var a=e.read_shift(4),i=e.read_shift(1)&3,n=e.read_shift(1);switch(n){case 0:n="Worksheet";break;case 1:n="Macrosheet";break;case 2:n="Chartsheet";break;case 6:n="VBAModule";break}var o=wn(e,0,r);return o.length===0&&(o="Sheet1"),{pos:a,hs:i,dt:n,name:o}}function Jv(e,t){for(var r=e.l+t,a=e.read_shift(4),i=e.read_shift(4),n=[],o=0;o!=i&&e.l<r;++o)n.push(Pv(e));return n.Count=a,n.Unique=i,n}function Qv(e,t){var r={};return r.dsst=e.read_shift(2),e.l+=t-2,r}function e1(e){var t={};t.r=e.read_shift(2),t.c=e.read_shift(2),t.cnt=e.read_shift(2)-t.c;var r=e.read_shift(2);e.l+=4;var a=e.read_shift(1);return e.l+=3,a&7&&(t.level=a&7),a&32&&(t.hidden=!0),a&64&&(t.hpt=r/20),t}function t1(e){var t=Mv(e);if(t.type!=2211)throw new Error("Invalid Future Record "+t.type);var r=e.read_shift(4);return r!==0}function r1(e){return e.read_shift(2),e.read_shift(4)}function Kc(e,t,r){var a=0;r&&r.biff==2||(a=e.read_shift(2));var i=e.read_shift(2);r&&r.biff==2&&(a=1-(i>>15),i&=32767);var n={Unsynced:a&1,DyZero:(a&2)>>1,ExAsc:(a&4)>>2,ExDsc:(a&8)>>3};return[n,i]}function a1(e){var t=e.read_shift(2),r=e.read_shift(2),a=e.read_shift(2),i=e.read_shift(2),n=e.read_shift(2),o=e.read_shift(2),s=e.read_shift(2),l=e.read_shift(2),c=e.read_shift(2);return{Pos:[t,r],Dim:[a,i],Flags:n,CurTab:o,FirstTab:s,Selected:l,TabRatio:c}}function i1(e,t,r){if(r&&r.biff>=2&&r.biff<5)return{};var a=e.read_shift(2);return{RTL:a&64}}function n1(){}function o1(e,t,r){var a={dyHeight:e.read_shift(2),fl:e.read_shift(2)};switch(r&&r.biff||8){case 2:break;case 3:case 4:e.l+=2;break;default:e.l+=10;break}return a.name=wn(e,0,r),a}function s1(e){var t=Cr(e);return t.isst=e.read_shift(4),t}function l1(e,t,r){r.biffguess&&r.biff==2&&(r.biff=5);var a=e.l+t,i=Cr(e);r.biff==2&&e.l++;var n=yn(e,a-e.l,r);return i.val=n,i}function c1(e,t,r){var a=e.read_shift(2),i=Ha(e,0,r);return[a,i]}var d1=Ha;function Xc(e,t,r){var a=e.l+t,i=r.biff==8||!r.biff?4:2,n=e.read_shift(i),o=e.read_shift(i),s=e.read_shift(2),l=e.read_shift(2);return e.l=a,{s:{r:n,c:s},e:{r:o,c:l}}}function u1(e){var t=e.read_shift(2),r=e.read_shift(2),a=eu(e);return{r:t,c:r,ixfe:a[0],rknum:a[1]}}function h1(e,t){for(var r=e.l+t-2,a=e.read_shift(2),i=e.read_shift(2),n=[];e.l<r;)n.push(eu(e));if(e.l!==r)throw new Error("MulRK read error");var o=e.read_shift(2);if(n.length!=o-i+1)throw new Error("MulRK length mismatch");return{r:a,c:i,C:o,rkrec:n}}function f1(e,t){for(var r=e.l+t-2,a=e.read_shift(2),i=e.read_shift(2),n=[];e.l<r;)n.push(e.read_shift(2));if(e.l!==r)throw new Error("MulBlank read error");var o=e.read_shift(2);if(n.length!=o-i+1)throw new Error("MulBlank length mismatch");return{r:a,c:i,C:o,ixfe:n}}function p1(e,t,r,a){var i={},n=e.read_shift(4),o=e.read_shift(4),s=e.read_shift(4),l=e.read_shift(2);return i.patternType=uv[s>>26],a.cellStyles&&(i.alc=n&7,i.fWrap=n>>3&1,i.alcV=n>>4&7,i.fJustLast=n>>7&1,i.trot=n>>8&255,i.cIndent=n>>16&15,i.fShrinkToFit=n>>20&1,i.iReadOrder=n>>22&2,i.fAtrNum=n>>26&1,i.fAtrFnt=n>>27&1,i.fAtrAlc=n>>28&1,i.fAtrBdr=n>>29&1,i.fAtrPat=n>>30&1,i.fAtrProt=n>>31&1,i.dgLeft=o&15,i.dgRight=o>>4&15,i.dgTop=o>>8&15,i.dgBottom=o>>12&15,i.icvLeft=o>>16&127,i.icvRight=o>>23&127,i.grbitDiag=o>>30&3,i.icvTop=s&127,i.icvBottom=s>>7&127,i.icvDiag=s>>14&127,i.dgDiag=s>>21&15,i.icvFore=l&127,i.icvBack=l>>7&127,i.fsxButton=l>>14&1),i}function g1(e,t,r){var a={};return a.ifnt=e.read_shift(2),a.numFmtId=e.read_shift(2),a.flags=e.read_shift(2),a.fStyle=a.flags>>2&1,t-=6,a.data=p1(e,t,a.fStyle,r),a}function m1(e){e.l+=4;var t=[e.read_shift(2),e.read_shift(2)];if(t[0]!==0&&t[0]--,t[1]!==0&&t[1]--,t[0]>7||t[1]>7)throw new Error("Bad Gutters: "+t.join("|"));return t}function Yc(e,t,r){var a=Cr(e);(r.biff==2||t==9)&&++e.l;var i=Iv(e);return a.val=i,a.t=i===!0||i===!1?"b":"e",a}function v1(e,t,r){r.biffguess&&r.biff==2&&(r.biff=5);var a=Cr(e),i=kt(e);return a.val=i,a}var qc=Bv;function x1(e,t,r){var a=e.l+t,i=e.read_shift(2),n=e.read_shift(2);if(r.sbcch=n,n==1025||n==14849)return[n,i];if(n<1||n>255)throw new Error("Unexpected SupBook type: "+n);for(var o=Oa(e,n),s=[];a>e.l;)s.push(yn(e));return[n,i,o,s]}function Zc(e,t,r){var a=e.read_shift(2),i,n={fBuiltIn:a&1,fWantAdvise:a>>>1&1,fWantPict:a>>>2&1,fOle:a>>>3&1,fOleLink:a>>>4&1,cf:a>>>5&1023,fIcon:a>>>15&1};return r.sbcch===14849&&(i=Vv(e,t-2,r)),n.body=i||e.read_shift(t-2),typeof i=="string"&&(n.Name=i),n}var b1=["_xlnm.Consolidate_Area","_xlnm.Auto_Open","_xlnm.Auto_Close","_xlnm.Extract","_xlnm.Database","_xlnm.Criteria","_xlnm.Print_Area","_xlnm.Print_Titles","_xlnm.Recorder","_xlnm.Data_Form","_xlnm.Auto_Activate","_xlnm.Auto_Deactivate","_xlnm.Sheet_Title","_xlnm._FilterDatabase"];function Jc(e,t,r){var a=e.l+t,i=e.read_shift(2),n=e.read_shift(1),o=e.read_shift(1),s=e.read_shift(r&&r.biff==2?1:2),l=0;(!r||r.biff>=5)&&(r.biff!=5&&(e.l+=2),l=e.read_shift(2),r.biff==5&&(e.l+=2),e.l+=4);var c=Oa(e,o,r);i&32&&(c=b1[c.charCodeAt(0)]);var d=a-e.l;r&&r.biff==2&&--d;var u=a==e.l||s===0||!(d>0)?[]:ey(e,d,r,s);return{chKey:n,Name:c,itab:l,rgce:u}}function au(e,t,r){if(r.biff<8)return w1(e,t,r);for(var a=[],i=e.l+t,n=e.read_shift(r.biff>8?4:2);n--!==0;)a.push(Uv(e,r.biff>8?12:6,r));if(e.l!=i)throw new Error("Bad ExternSheet: "+e.l+" != "+i);return a}function w1(e,t,r){e[e.l+1]==3&&e[e.l]++;var a=wn(e,t,r);return a.charCodeAt(0)==3?a.slice(1):a}function y1(e,t,r){if(r.biff<8){e.l+=t;return}var a=e.read_shift(2),i=e.read_shift(2),n=Oa(e,a,r),o=Oa(e,i,r);return[n,o]}function _1(e,t,r){var a=tu(e);e.l++;var i=e.read_shift(1);return t-=8,[ty(e,t,r),i,a]}function Qc(e,t,r){var a=Hv(e);switch(r.biff){case 2:e.l++,t-=7;break;case 3:case 4:e.l+=2,t-=8;break;default:e.l+=6,t-=12}return[a,Jw(e,t,r)]}function k1(e){var t=e.read_shift(4)!==0,r=e.read_shift(4)!==0,a=e.read_shift(4);return[t,r,a]}function E1(e,t,r){if(!(r.biff<8)){var a=e.read_shift(2),i=e.read_shift(2),n=e.read_shift(2),o=e.read_shift(2),s=Ha(e,0,r);return r.biff<8&&e.read_shift(1),[{r:a,c:i},s,o,n]}}function T1(e,t,r){return E1(e,t,r)}function A1(e,t){for(var r=[],a=e.read_shift(2);a--;)r.push(Fo(e));return r}function S1(e,t,r){if(r&&r.biff<8)return F1(e,t,r);var a=ru(e),i=Kv(e,t-22,a[1]);return{cmo:a,ft:i}}var C1={8:function(e,t){var r=e.l+t;e.l+=10;var a=e.read_shift(2);e.l+=4,e.l+=2,e.l+=2,e.l+=2,e.l+=4;var i=e.read_shift(1);return e.l+=i,e.l=r,{fmt:a}}};function F1(e,t,r){e.l+=4;var a=e.read_shift(2),i=e.read_shift(2),n=e.read_shift(2);e.l+=2,e.l+=2,e.l+=2,e.l+=2,e.l+=2,e.l+=2,e.l+=2,e.l+=2,e.l+=2,e.l+=6,t-=36;var o=[];return o.push((C1[a]||At)(e,t,r)),{cmo:[i,a,n],ft:o}}function D1(e,t,r){var a=e.l,i="";try{e.l+=4;var n=(r.lastobj||{cmo:[0,0]}).cmo[1],o;[0,5,7,11,12,14].indexOf(n)==-1?e.l+=6:o=Rv(e,6,r);var s=e.read_shift(2);e.read_shift(2),it(e,2);var l=e.read_shift(2);e.l+=l;for(var c=1;c<e.lens.length-1;++c){if(e.l-a!=e.lens[c])throw new Error("TxO: bad continue record");var d=e[e.l],u=Oa(e,e.lens[c+1]-e.lens[c]-1);if(i+=u,i.length>=(d?s:2*s))break}if(i.length!==s&&i.length!==s*2)throw new Error("cchText: "+s+" != "+i.length);return e.l=a+t,{t:i}}catch{return e.l=a+t,{t:i}}}function O1(e,t){var r=Fo(e);e.l+=16;var a=zv(e,t-24);return[r,a]}function I1(e,t){e.read_shift(2);var r=Fo(e),a=e.read_shift((t-10)/2,"dbcs-cont");return a=a.replace(Rt,""),[r,a]}function P1(e){var t=[0,0],r;return r=e.read_shift(2),t[0]=Vc[r]||r,r=e.read_shift(2),t[1]=Vc[r]||r,t}function R1(e){for(var t=e.read_shift(2),r=[];t-- >0;)r.push(Qd(e));return r}function $1(e){for(var t=e.read_shift(2),r=[];t-- >0;)r.push(Qd(e));return r}function L1(e){e.l+=2;var t={cxfs:0,crc:0};return t.cxfs=e.read_shift(2),t.crc=e.read_shift(4),t}function iu(e,t,r){if(!r.cellStyles)return At(e,t);var a=r&&r.biff>=12?4:2,i=e.read_shift(a),n=e.read_shift(a),o=e.read_shift(a),s=e.read_shift(a),l=e.read_shift(2);a==2&&(e.l+=2);var c={s:i,e:n,w:o,ixfe:s,flags:l};return(r.biff>=5||!r.biff)&&(c.level=l>>8&7),c}function N1(e,t){var r={};return t<32||(e.l+=16,r.header=kt(e),r.footer=kt(e),e.l+=2),r}function z1(e,t,r){var a={area:!1};if(r.biff!=5)return e.l+=t,a;var i=e.read_shift(1);return e.l+=3,i&16&&(a.area=!0),a}var M1=Cr,B1=Zd,U1=yn;function V1(e){var t=e.read_shift(2),r=e.read_shift(2),a=e.read_shift(4),i={fmt:t,env:r,len:a,data:e.slice(e.l,e.l+a)};return e.l+=a,i}function H1(e,t,r){r.biffguess&&r.biff==5&&(r.biff=2);var a=Cr(e);++e.l;var i=Ha(e,t-7,r);return a.t="str",a.val=i,a}function j1(e){var t=Cr(e);++e.l;var r=kt(e);return t.t="n",t.val=r,t}function W1(e){var t=Cr(e);++e.l;var r=e.read_shift(2);return t.t="n",t.val=r,t}function G1(e){var t=e.read_shift(1);return t===0?(e.l++,""):e.read_shift(t,"sbcs-cont")}function K1(e,t){e.l+=6,e.l+=2,e.l+=1,e.l+=3,e.l+=1,e.l+=t-13}function X1(e,t,r){var a=e.l+t,i=Cr(e),n=e.read_shift(2),o=Oa(e,n,r);return e.l=a,i.t="str",i.val=o,i}var Y1=[2,3,48,49,131,139,140,245],e0=function(){var e={1:437,2:850,3:1252,4:1e4,100:852,101:866,102:865,103:861,104:895,105:620,106:737,107:857,120:950,121:949,122:936,123:932,124:874,125:1255,126:1256,150:10007,151:10029,152:10006,200:1250,201:1251,202:1254,203:1253,0:20127,8:865,9:437,10:850,11:437,13:437,14:850,15:437,16:850,17:437,18:850,19:932,20:850,21:437,22:850,23:865,24:437,25:437,26:850,27:437,28:863,29:850,31:852,34:852,35:852,36:860,37:850,38:866,55:850,64:852,77:936,78:949,79:950,80:874,87:1252,88:1252,89:1252,108:863,134:737,135:852,136:857,204:1257,255:16969},t=Qs({1:437,2:850,3:1252,4:1e4,100:852,101:866,102:865,103:861,104:895,105:620,106:737,107:857,120:950,121:949,122:936,123:932,124:874,125:1255,126:1256,150:10007,151:10029,152:10006,200:1250,201:1251,202:1254,203:1253,0:20127});function r(s,l){var c=[],d=ia(1);switch(l.type){case"base64":d=sr(jt(s));break;case"binary":d=sr(s);break;case"buffer":case"array":d=s;break}mt(d,0);var u=d.read_shift(1),f=!!(u&136),h=!1,p=!1;switch(u){case 2:break;case 3:break;case 48:h=!0,f=!0;break;case 49:h=!0,f=!0;break;case 131:break;case 139:break;case 140:p=!0;break;case 245:break;default:throw new Error("DBF Unsupported Version: "+u.toString(16))}var g=0,m=521;u==2&&(g=d.read_shift(2)),d.l+=3,u!=2&&(g=d.read_shift(4)),g>1048576&&(g=1e6),u!=2&&(m=d.read_shift(2));var w=d.read_shift(2),S=l.codepage||1252;u!=2&&(d.l+=16,d.read_shift(1),d[d.l]!==0&&(S=e[d[d.l]]),d.l+=1,d.l+=2),p&&(d.l+=36);for(var x=[],D={},M=Math.min(d.length,u==2?521:m-10-(h?264:0)),I=p?32:11;d.l<M&&d[d.l]!=13;)switch(D={},D.name=Qi.utils.decode(S,d.slice(d.l,d.l+I)).replace(/[\u0000\r\n].*$/g,""),d.l+=I,D.type=String.fromCharCode(d.read_shift(1)),u!=2&&!p&&(D.offset=d.read_shift(4)),D.len=d.read_shift(1),u==2&&(D.offset=d.read_shift(2)),D.dec=d.read_shift(1),D.name.length&&x.push(D),u!=2&&(d.l+=p?13:14),D.type){case"B":(!h||D.len!=8)&&l.WTF&&console.log("Skipping "+D.name+":"+D.type);break;case"G":case"P":l.WTF&&console.log("Skipping "+D.name+":"+D.type);break;case"+":case"0":case"@":case"C":case"D":case"F":case"I":case"L":case"M":case"N":case"O":case"T":case"Y":break;default:throw new Error("Unknown Field Type: "+D.type)}if(d[d.l]!==13&&(d.l=m-1),d.read_shift(1)!==13)throw new Error("DBF Terminator not found "+d.l+" "+d[d.l]);d.l=m;var T=0,B=0;for(c[0]=[],B=0;B!=x.length;++B)c[0][B]=x[B].name;for(;g-- >0;){if(d[d.l]===42){d.l+=w;continue}for(++d.l,c[++T]=[],B=0,B=0;B!=x.length;++B){var O=d.slice(d.l,d.l+x[B].len);d.l+=x[B].len,mt(O,0);var j=Qi.utils.decode(S,O);switch(x[B].type){case"C":j.trim().length&&(c[T][B]=j.replace(/\s+$/,""));break;case"D":j.length===8?c[T][B]=new Date(+j.slice(0,4),+j.slice(4,6)-1,+j.slice(6,8)):c[T][B]=j;break;case"F":c[T][B]=parseFloat(j.trim());break;case"+":case"I":c[T][B]=p?O.read_shift(-4,"i")^2147483648:O.read_shift(4,"i");break;case"L":switch(j.trim().toUpperCase()){case"Y":case"T":c[T][B]=!0;break;case"N":case"F":c[T][B]=!1;break;case"":case"?":break;default:throw new Error("DBF Unrecognized L:|"+j+"|")}break;case"M":if(!f)throw new Error("DBF Unexpected MEMO for type "+u.toString(16));c[T][B]="##MEMO##"+(p?parseInt(j.trim(),10):O.read_shift(4));break;case"N":j=j.replace(/\u0000/g,"").trim(),j&&j!="."&&(c[T][B]=+j||0);break;case"@":c[T][B]=new Date(O.read_shift(-8,"f")-621356832e5);break;case"T":c[T][B]=new Date((O.read_shift(4)-2440588)*864e5+O.read_shift(4));break;case"Y":c[T][B]=O.read_shift(4,"i")/1e4+O.read_shift(4,"i")/1e4*Math.pow(2,32);break;case"O":c[T][B]=-O.read_shift(-8,"f");break;case"B":if(h&&x[B].len==8){c[T][B]=O.read_shift(8,"f");break}case"G":case"P":O.l+=x[B].len;break;case"0":if(x[B].name==="_NullFlags")break;default:throw new Error("DBF Unsupported data type "+x[B].type)}}}if(u!=2&&d.l<d.length&&d[d.l++]!=26)throw new Error("DBF EOF Marker missing "+(d.l-1)+" of "+d.length+" "+d[d.l-1].toString(16));return l&&l.sheetRows&&(c=c.slice(0,l.sheetRows)),l.DBF=x,c}function a(s,l){var c=l||{};c.dateNF||(c.dateNF="yyyymmdd");var d=hi(r(s,c),c);return d["!cols"]=c.DBF.map(function(u){return{wch:u.len,DBF:u}}),delete c.DBF,d}function i(s,l){try{return da(a(s,l),l)}catch(c){if(l&&l.WTF)throw c}return{SheetNames:[],Sheets:{}}}var n={B:8,C:250,L:1,D:8,"?":0,"":0};function o(s,l){var c=l||{};if(+c.codepage>=0&&lr(+c.codepage),c.type=="string")throw new Error("Cannot write DBF to JS string");var d=us(),u=ys(s,{header:1,raw:!0,cellDates:!0}),f=u[0],h=u.slice(1),p=s["!cols"]||[],g=0,m=0,w=0,S=1;for(g=0;g<f.length;++g){if(((p[g]||{}).DBF||{}).name){f[g]=p[g].DBF.name,++w;continue}if(f[g]!=null){if(++w,typeof f[g]=="number"&&(f[g]=f[g].toString(10)),typeof f[g]!="string")throw new Error("DBF Invalid column name "+f[g]+" |"+typeof f[g]+"|");if(f.indexOf(f[g])!==g){for(m=0;m<1024;++m)if(f.indexOf(f[g]+"_"+m)==-1){f[g]+="_"+m;break}}}}var x=Ze(s["!ref"]),D=[],M=[],I=[];for(g=0;g<=x.e.c-x.s.c;++g){var T="",B="",O=0,j=[];for(m=0;m<h.length;++m)h[m][g]!=null&&j.push(h[m][g]);if(j.length==0||f[g]==null){D[g]="?";continue}for(m=0;m<j.length;++m){switch(typeof j[m]){case"number":B="B";break;case"string":B="C";break;case"boolean":B="L";break;case"object":B=j[m]instanceof Date?"D":"C";break;default:B="C"}O=Math.max(O,String(j[m]).length),T=T&&T!=B?"C":B}O>250&&(O=250),B=((p[g]||{}).DBF||{}).type,B=="C"&&p[g].DBF.len>O&&(O=p[g].DBF.len),T=="B"&&B=="N"&&(T="N",I[g]=p[g].DBF.dec,O=p[g].DBF.len),M[g]=T=="C"||B=="N"?O:n[T]||0,S+=M[g],D[g]=T}var U=d.next(32);for(U.write_shift(4,318902576),U.write_shift(4,h.length),U.write_shift(2,296+32*w),U.write_shift(2,S),g=0;g<4;++g)U.write_shift(4,0);for(U.write_shift(4,0|(+t[ad]||3)<<8),g=0,m=0;g<f.length;++g)if(f[g]!=null){var N=d.next(32),Z=(f[g].slice(-10)+"\0\0\0\0\0\0\0\0\0\0\0").slice(0,11);N.write_shift(1,Z,"sbcs"),N.write_shift(1,D[g]=="?"?"C":D[g],"sbcs"),N.write_shift(4,m),N.write_shift(1,M[g]||n[D[g]]||0),N.write_shift(1,I[g]||0),N.write_shift(1,2),N.write_shift(4,0),N.write_shift(1,0),N.write_shift(4,0),N.write_shift(4,0),m+=M[g]||n[D[g]]||0}var se=d.next(264);for(se.write_shift(4,13),g=0;g<65;++g)se.write_shift(4,0);for(g=0;g<h.length;++g){var re=d.next(S);for(re.write_shift(1,0),m=0;m<f.length;++m)if(f[m]!=null)switch(D[m]){case"L":re.write_shift(1,h[g][m]==null?63:h[g][m]?84:70);break;case"B":re.write_shift(8,h[g][m]||0,"f");break;case"N":var ce="0";for(typeof h[g][m]=="number"&&(ce=h[g][m].toFixed(I[m]||0)),w=0;w<M[m]-ce.length;++w)re.write_shift(1,32);re.write_shift(1,ce,"sbcs");break;case"D":h[g][m]?(re.write_shift(4,("0000"+h[g][m].getFullYear()).slice(-4),"sbcs"),re.write_shift(2,("00"+(h[g][m].getMonth()+1)).slice(-2),"sbcs"),re.write_shift(2,("00"+h[g][m].getDate()).slice(-2),"sbcs")):re.write_shift(8,"00000000","sbcs");break;case"C":var ae=String(h[g][m]!=null?h[g][m]:"").slice(0,M[m]);for(re.write_shift(1,ae,"sbcs"),w=0;w<M[m]-ae.length;++w)re.write_shift(1,32);break}}return d.next(1).write_shift(1,26),d.end()}return{to_workbook:i,to_sheet:a,from_sheet:o}}(),q1=function(){var e={AA:"À",BA:"Á",CA:"Â",DA:195,HA:"Ä",JA:197,AE:"È",BE:"É",CE:"Ê",HE:"Ë",AI:"Ì",BI:"Í",CI:"Î",HI:"Ï",AO:"Ò",BO:"Ó",CO:"Ô",DO:213,HO:"Ö",AU:"Ù",BU:"Ú",CU:"Û",HU:"Ü",Aa:"à",Ba:"á",Ca:"â",Da:227,Ha:"ä",Ja:229,Ae:"è",Be:"é",Ce:"ê",He:"ë",Ai:"ì",Bi:"í",Ci:"î",Hi:"ï",Ao:"ò",Bo:"ó",Co:"ô",Do:245,Ho:"ö",Au:"ù",Bu:"ú",Cu:"û",Hu:"ü",KC:"Ç",Kc:"ç",q:"æ",z:"œ",a:"Æ",j:"Œ",DN:209,Dn:241,Hy:255,S:169,c:170,R:174,"B ":180,0:176,1:177,2:178,3:179,5:181,6:182,7:183,Q:185,k:186,b:208,i:216,l:222,s:240,y:248,"!":161,'"':162,"#":163,"(":164,"%":165,"'":167,"H ":168,"+":171,";":187,"<":188,"=":189,">":190,"?":191,"{":223},t=new RegExp("\x1BN("+_r(e).join("|").replace(/\|\|\|/,"|\\||").replace(/([?()+])/g,"\\$1")+"|\\|)","gm"),r=function(f,h){var p=e[h];return typeof p=="number"?mc(p):p},a=function(f,h,p){var g=h.charCodeAt(0)-32<<4|p.charCodeAt(0)-48;return g==59?f:mc(g)};e["|"]=254;function i(f,h){switch(h.type){case"base64":return n(jt(f),h);case"binary":return n(f,h);case"buffer":return n(Se&&Buffer.isBuffer(f)?f.toString("binary"):Ma(f),h);case"array":return n(Da(f),h)}throw new Error("Unrecognized type "+h.type)}function n(f,h){var p=f.split(/[\n\r]+/),g=-1,m=-1,w=0,S=0,x=[],D=[],M=null,I={},T=[],B=[],O=[],j=0,U;for(+h.codepage>=0&&lr(+h.codepage);w!==p.length;++w){j=0;var N=p[w].trim().replace(/\x1B([\x20-\x2F])([\x30-\x3F])/g,a).replace(t,r),Z=N.replace(/;;/g,"\0").split(";").map(function(R){return R.replace(/\u0000/g,";")}),se=Z[0],re;if(N.length>0)switch(se){case"ID":break;case"E":break;case"B":break;case"O":break;case"W":break;case"P":Z[1].charAt(0)=="P"&&D.push(N.slice(3).replace(/;;/g,";"));break;case"C":var ce=!1,ae=!1,Te=!1,W=!1,pe=-1,be=-1;for(S=1;S<Z.length;++S)switch(Z[S].charAt(0)){case"A":break;case"X":m=parseInt(Z[S].slice(1))-1,ae=!0;break;case"Y":for(g=parseInt(Z[S].slice(1))-1,ae||(m=0),U=x.length;U<=g;++U)x[U]=[];break;case"K":re=Z[S].slice(1),re.charAt(0)==='"'?re=re.slice(1,re.length-1):re==="TRUE"?re=!0:re==="FALSE"?re=!1:isNaN(dr(re))?isNaN(ai(re).getDate())||(re=ft(re)):(re=dr(re),M!==null&&di(M)&&(re=Co(re))),ce=!0;break;case"E":W=!0;var C=Za(Z[S].slice(1),{r:g,c:m});x[g][m]=[x[g][m],C];break;case"S":Te=!0,x[g][m]=[x[g][m],"S5S"];break;case"G":break;case"R":pe=parseInt(Z[S].slice(1))-1;break;case"C":be=parseInt(Z[S].slice(1))-1;break;default:if(h&&h.WTF)throw new Error("SYLK bad record "+N)}if(ce&&(x[g][m]&&x[g][m].length==2?x[g][m][0]=re:x[g][m]=re,M=null),Te){if(W)throw new Error("SYLK shared formula cannot have own formula");var K=pe>-1&&x[pe][be];if(!K||!K[1])throw new Error("SYLK shared formula cannot find base");x[g][m][1]=pu(K[1],{r:g-pe,c:m-be})}break;case"F":var z=0;for(S=1;S<Z.length;++S)switch(Z[S].charAt(0)){case"X":m=parseInt(Z[S].slice(1))-1,++z;break;case"Y":for(g=parseInt(Z[S].slice(1))-1,U=x.length;U<=g;++U)x[U]=[];break;case"M":j=parseInt(Z[S].slice(1))/20;break;case"F":break;case"G":break;case"P":M=D[parseInt(Z[S].slice(1))];break;case"S":break;case"D":break;case"N":break;case"W":for(O=Z[S].slice(1).split(" "),U=parseInt(O[0],10);U<=parseInt(O[1],10);++U)j=parseInt(O[2],10),B[U-1]=j===0?{hidden:!0}:{wch:j},ii(B[U-1]);break;case"C":m=parseInt(Z[S].slice(1))-1,B[m]||(B[m]={});break;case"R":g=parseInt(Z[S].slice(1))-1,T[g]||(T[g]={}),j>0?(T[g].hpt=j,T[g].hpx=on(j)):j===0&&(T[g].hidden=!0);break;default:if(h&&h.WTF)throw new Error("SYLK bad record "+N)}z<1&&(M=null);break;default:if(h&&h.WTF)throw new Error("SYLK bad record "+N)}}return T.length>0&&(I["!rows"]=T),B.length>0&&(I["!cols"]=B),h&&h.sheetRows&&(x=x.slice(0,h.sheetRows)),[x,I]}function o(f,h){var p=i(f,h),g=p[0],m=p[1],w=hi(g,h);return _r(m).forEach(function(S){w[S]=m[S]}),w}function s(f,h){return da(o(f,h),h)}function l(f,h,p,g){var m="C;Y"+(p+1)+";X"+(g+1)+";K";switch(f.t){case"n":m+=f.v||0,f.f&&!f.F&&(m+=";E"+Lb(f.f,{r:p,c:g}));break;case"b":m+=f.v?"TRUE":"FALSE";break;case"e":m+=f.w||f.v;break;case"d":m+='"'+(f.w||f.v)+'"';break;case"s":m+='"'+f.v.replace(/"/g,"").replace(/;/g,";;")+'"';break}return m}function c(f,h){h.forEach(function(p,g){var m="F;W"+(g+1)+" "+(g+1)+" ";p.hidden?m+="0":(typeof p.width=="number"&&!p.wpx&&(p.wpx=uo(p.width)),typeof p.wpx=="number"&&!p.wch&&(p.wch=ho(p.wpx)),typeof p.wch=="number"&&(m+=Math.round(p.wch))),m.charAt(m.length-1)!=" "&&f.push(m)})}function d(f,h){h.forEach(function(p,g){var m="F;";p.hidden?m+="M0;":p.hpt?m+="M"+20*p.hpt+";":p.hpx&&(m+="M"+20*uu(p.hpx)+";"),m.length>2&&f.push(m+"R"+(g+1))})}function u(f,h){var p=["ID;PWXL;N;E"],g=[],m=Ze(f["!ref"]),w,S=Array.isArray(f),x=`\r
`;p.push("P;PGeneral"),p.push("F;P0;DG0G8;M255"),f["!cols"]&&c(p,f["!cols"]),f["!rows"]&&d(p,f["!rows"]),p.push("B;Y"+(m.e.r-m.s.r+1)+";X"+(m.e.c-m.s.c+1)+";D"+[m.s.c,m.s.r,m.e.c,m.e.r].join(" "));for(var D=m.s.r;D<=m.e.r;++D)for(var M=m.s.c;M<=m.e.c;++M){var I=we({r:D,c:M});w=S?(f[D]||[])[M]:f[I],!(!w||w.v==null&&(!w.f||w.F))&&g.push(l(w,f,D,M))}return p.join(x)+x+g.join(x)+x+"E"+x}return{to_workbook:s,to_sheet:o,from_sheet:u}}(),Z1=function(){function e(n,o){switch(o.type){case"base64":return t(jt(n),o);case"binary":return t(n,o);case"buffer":return t(Se&&Buffer.isBuffer(n)?n.toString("binary"):Ma(n),o);case"array":return t(Da(n),o)}throw new Error("Unrecognized type "+o.type)}function t(n,o){for(var s=n.split(`
`),l=-1,c=-1,d=0,u=[];d!==s.length;++d){if(s[d].trim()==="BOT"){u[++l]=[],c=0;continue}if(!(l<0)){var f=s[d].trim().split(","),h=f[0],p=f[1];++d;for(var g=s[d]||"";(g.match(/["]/g)||[]).length&1&&d<s.length-1;)g+=`
`+s[++d];switch(g=g.trim(),+h){case-1:if(g==="BOT"){u[++l]=[],c=0;continue}else if(g!=="EOD")throw new Error("Unrecognized DIF special command "+g);break;case 0:g==="TRUE"?u[l][c]=!0:g==="FALSE"?u[l][c]=!1:isNaN(dr(p))?isNaN(ai(p).getDate())?u[l][c]=p:u[l][c]=ft(p):u[l][c]=dr(p),++c;break;case 1:g=g.slice(1,g.length-1),g=g.replace(/""/g,'"'),g&&g.match(/^=".*"$/)&&(g=g.slice(2,-1)),u[l][c++]=g!==""?g:null;break}if(g==="EOD")break}}return o&&o.sheetRows&&(u=u.slice(0,o.sheetRows)),u}function r(n,o){return hi(e(n,o),o)}function a(n,o){return da(r(n,o),o)}var i=function(){var n=function(l,c,d,u,f){l.push(c),l.push(d+","+u),l.push('"'+f.replace(/"/g,'""')+'"')},o=function(l,c,d,u){l.push(c+","+d),l.push(c==1?'"'+u.replace(/"/g,'""')+'"':u)};return function(l){var c=[],d=Ze(l["!ref"]),u,f=Array.isArray(l);n(c,"TABLE",0,1,"sheetjs"),n(c,"VECTORS",0,d.e.r-d.s.r+1,""),n(c,"TUPLES",0,d.e.c-d.s.c+1,""),n(c,"DATA",0,0,"");for(var h=d.s.r;h<=d.e.r;++h){o(c,-1,0,"BOT");for(var p=d.s.c;p<=d.e.c;++p){var g=we({r:h,c:p});if(u=f?(l[h]||[])[p]:l[g],!u){o(c,1,0,"");continue}switch(u.t){case"n":var m=u.w;!m&&u.v!=null&&(m=u.v),m==null?u.f&&!u.F?o(c,1,0,"="+u.f):o(c,1,0,""):o(c,0,m,"V");break;case"b":o(c,0,u.v?1:0,u.v?"TRUE":"FALSE");break;case"s":o(c,1,0,isNaN(u.v)?u.v:'="'+u.v+'"');break;case"d":u.w||(u.w=er(u.z||_e[14],$t(ft(u.v)))),o(c,0,u.w,"V");break;default:o(c,1,0,"")}}}o(c,-1,0,"EOD");var w=`\r
`,S=c.join(w);return S}}();return{to_workbook:a,to_sheet:r,from_sheet:i}}(),J1=function(){function e(u){return u.replace(/\\b/g,"\\").replace(/\\c/g,":").replace(/\\n/g,`
`)}function t(u){return u.replace(/\\/g,"\\b").replace(/:/g,"\\c").replace(/\n/g,"\\n")}function r(u,f){for(var h=u.split(`
`),p=-1,g=-1,m=0,w=[];m!==h.length;++m){var S=h[m].trim().split(":");if(S[0]==="cell"){var x=Pt(S[1]);if(w.length<=x.r)for(p=w.length;p<=x.r;++p)w[p]||(w[p]=[]);switch(p=x.r,g=x.c,S[2]){case"t":w[p][g]=e(S[3]);break;case"v":w[p][g]=+S[3];break;case"vtf":var D=S[S.length-1];case"vtc":switch(S[3]){case"nl":w[p][g]=!!+S[4];break;default:w[p][g]=+S[4];break}S[2]=="vtf"&&(w[p][g]=[w[p][g],D])}}}return f&&f.sheetRows&&(w=w.slice(0,f.sheetRows)),w}function a(u,f){return hi(r(u,f),f)}function i(u,f){return da(a(u,f),f)}var n=["socialcalc:version:1.5","MIME-Version: 1.0","Content-Type: multipart/mixed; boundary=SocialCalcSpreadsheetControlSave"].join(`
`),o=["--SocialCalcSpreadsheetControlSave","Content-type: text/plain; charset=UTF-8"].join(`
`)+`
`,s=["# SocialCalc Spreadsheet Control Save","part:sheet"].join(`
`),l="--SocialCalcSpreadsheetControlSave--";function c(u){if(!u||!u["!ref"])return"";for(var f=[],h=[],p,g="",m=ui(u["!ref"]),w=Array.isArray(u),S=m.s.r;S<=m.e.r;++S)for(var x=m.s.c;x<=m.e.c;++x)if(g=we({r:S,c:x}),p=w?(u[S]||[])[x]:u[g],!(!p||p.v==null||p.t==="z")){switch(h=["cell",g,"t"],p.t){case"s":case"str":h.push(t(p.v));break;case"n":p.f?(h[2]="vtf",h[3]="n",h[4]=p.v,h[5]=t(p.f)):(h[2]="v",h[3]=p.v);break;case"b":h[2]="vt"+(p.f?"f":"c"),h[3]="nl",h[4]=p.v?"1":"0",h[5]=t(p.f||(p.v?"TRUE":"FALSE"));break;case"d":var D=$t(ft(p.v));h[2]="vtc",h[3]="nd",h[4]=""+D,h[5]=p.w||er(p.z||_e[14],D);break;case"e":continue}f.push(h.join(":"))}return f.push("sheet:c:"+(m.e.c-m.s.c+1)+":r:"+(m.e.r-m.s.r+1)+":tvf:1"),f.push("valueformat:1:text-wiki"),f.join(`
`)}function d(u){return[n,o,s,o,c(u),l].join(`
`)}return{to_workbook:i,to_sheet:a,from_sheet:d}}(),an=function(){function e(d,u,f,h,p){p.raw?u[f][h]=d:d===""||(d==="TRUE"?u[f][h]=!0:d==="FALSE"?u[f][h]=!1:isNaN(dr(d))?isNaN(ai(d).getDate())?u[f][h]=d:u[f][h]=ft(d):u[f][h]=dr(d))}function t(d,u){var f=u||{},h=[];if(!d||d.length===0)return h;for(var p=d.split(/[\r\n]/),g=p.length-1;g>=0&&p[g].length===0;)--g;for(var m=10,w=0,S=0;S<=g;++S)w=p[S].indexOf(" "),w==-1?w=p[S].length:w++,m=Math.max(m,w);for(S=0;S<=g;++S){h[S]=[];var x=0;for(e(p[S].slice(0,m).trim(),h,S,x,f),x=1;x<=(p[S].length-m)/10+1;++x)e(p[S].slice(m+(x-1)*10,m+x*10).trim(),h,S,x,f)}return f.sheetRows&&(h=h.slice(0,f.sheetRows)),h}var r={44:",",9:"	",59:";",124:"|"},a={44:3,9:2,59:1,124:0};function i(d){for(var u={},f=!1,h=0,p=0;h<d.length;++h)(p=d.charCodeAt(h))==34?f=!f:!f&&p in r&&(u[p]=(u[p]||0)+1);p=[];for(h in u)Object.prototype.hasOwnProperty.call(u,h)&&p.push([u[h],h]);if(!p.length){u=a;for(h in u)Object.prototype.hasOwnProperty.call(u,h)&&p.push([u[h],h])}return p.sort(function(g,m){return g[0]-m[0]||a[g[1]]-a[m[1]]}),r[p.pop()[1]]||44}function n(d,u){var f=u||{},h="",p=f.dense?[]:{},g={s:{c:0,r:0},e:{c:0,r:0}};d.slice(0,4)=="sep="?d.charCodeAt(5)==13&&d.charCodeAt(6)==10?(h=d.charAt(4),d=d.slice(7)):d.charCodeAt(5)==13||d.charCodeAt(5)==10?(h=d.charAt(4),d=d.slice(6)):h=i(d.slice(0,1024)):f&&f.FS?h=f.FS:h=i(d.slice(0,1024));var m=0,w=0,S=0,x=0,D=0,M=h.charCodeAt(0),I=!1,T=0,B=d.charCodeAt(0);d=d.replace(/\r\n/mg,`
`);var O=f.dateNF!=null?cm(f.dateNF):null;function j(){var U=d.slice(x,D),N={};if(U.charAt(0)=='"'&&U.charAt(U.length-1)=='"'&&(U=U.slice(1,-1).replace(/""/g,'"')),U.length===0)N.t="z";else if(f.raw)N.t="s",N.v=U;else if(U.trim().length===0)N.t="s",N.v=U;else if(U.charCodeAt(0)==61)U.charCodeAt(1)==34&&U.charCodeAt(U.length-1)==34?(N.t="s",N.v=U.slice(2,-1).replace(/""/g,'"')):zb(U)?(N.t="n",N.f=U.slice(1)):(N.t="s",N.v=U);else if(U=="TRUE")N.t="b",N.v=!0;else if(U=="FALSE")N.t="b",N.v=!1;else if(!isNaN(S=dr(U)))N.t="n",f.cellText!==!1&&(N.w=U),N.v=S;else if(!isNaN(ai(U).getDate())||O&&U.match(O)){N.z=f.dateNF||_e[14];var Z=0;O&&U.match(O)&&(U=dm(U,f.dateNF,U.match(O)||[]),Z=1),f.cellDates?(N.t="d",N.v=ft(U,Z)):(N.t="n",N.v=$t(ft(U,Z))),f.cellText!==!1&&(N.w=er(N.z,N.v instanceof Date?$t(N.v):N.v)),f.cellNF||delete N.z}else N.t="s",N.v=U;if(N.t=="z"||(f.dense?(p[m]||(p[m]=[]),p[m][w]=N):p[we({c:w,r:m})]=N),x=D+1,B=d.charCodeAt(x),g.e.c<w&&(g.e.c=w),g.e.r<m&&(g.e.r=m),T==M)++w;else if(w=0,++m,f.sheetRows&&f.sheetRows<=m)return!0}e:for(;D<d.length;++D)switch(T=d.charCodeAt(D)){case 34:B===34&&(I=!I);break;case M:case 10:case 13:if(!I&&j())break e;break}return D-x>0&&j(),p["!ref"]=De(g),p}function o(d,u){return!(u&&u.PRN)||u.FS||d.slice(0,4)=="sep="||d.indexOf("	")>=0||d.indexOf(",")>=0||d.indexOf(";")>=0?n(d,u):hi(t(d,u),u)}function s(d,u){var f="",h=u.type=="string"?[0,0,0,0]:xl(d,u);switch(u.type){case"base64":f=jt(d);break;case"binary":f=d;break;case"buffer":u.codepage==65001?f=d.toString("utf8"):u.codepage&&typeof Qi<"u"||(f=Se&&Buffer.isBuffer(d)?d.toString("binary"):Ma(d));break;case"array":f=Da(d);break;case"string":f=d;break;default:throw new Error("Unrecognized type "+u.type)}return h[0]==239&&h[1]==187&&h[2]==191?f=Ue(f.slice(3)):u.type!="string"&&u.type!="buffer"&&u.codepage==65001?f=Ue(f):u.type=="binary"&&typeof Qi<"u",f.slice(0,19)=="socialcalc:version:"?J1.to_sheet(u.type=="string"?f:Ue(f),u):o(f,u)}function l(d,u){return da(s(d,u),u)}function c(d){for(var u=[],f=Ze(d["!ref"]),h,p=Array.isArray(d),g=f.s.r;g<=f.e.r;++g){for(var m=[],w=f.s.c;w<=f.e.c;++w){var S=we({r:g,c:w});if(h=p?(d[g]||[])[w]:d[S],!h||h.v==null){m.push("          ");continue}for(var x=(h.w||(zr(h),h.w)||"").slice(0,10);x.length<10;)x+=" ";m.push(x+(w===0?" ":""))}u.push(m.join(""))}return u.join(`
`)}return{to_workbook:l,to_sheet:s,from_sheet:c}}();function Q1(e,t){var r=t||{},a=!!r.WTF;r.WTF=!0;try{var i=q1.to_workbook(e,r);return r.WTF=a,i}catch(n){if(r.WTF=a,!n.message.match(/SYLK bad record ID/)&&a)throw n;return an.to_workbook(e,t)}}var Ui=function(){function e(C,K,z){if(C){mt(C,C.l||0);for(var R=z.Enum||pe;C.l<C.length;){var q=C.read_shift(2),oe=R[q]||R[65535],ue=C.read_shift(2),ie=C.l+ue,ee=oe.f&&oe.f(C,ue,z);if(C.l=ie,K(ee,oe,q))return}}}function t(C,K){switch(K.type){case"base64":return r(sr(jt(C)),K);case"binary":return r(sr(C),K);case"buffer":case"array":return r(C,K)}throw"Unsupported type "+K.type}function r(C,K){if(!C)return C;var z=K||{},R=z.dense?[]:{},q="Sheet1",oe="",ue=0,ie={},ee=[],Oe=[],F={s:{r:0,c:0},e:{r:0,c:0}},Je=z.sheetRows||0;if(C[2]==0&&(C[3]==8||C[3]==9)&&C.length>=16&&C[14]==5&&C[15]===108)throw new Error("Unsupported Works 3 for Mac file");if(C[2]==2)z.Enum=pe,e(C,function(le,Qe,Kt){switch(Kt){case 0:z.vers=le,le>=4096&&(z.qpro=!0);break;case 6:F=le;break;case 204:le&&(oe=le);break;case 222:oe=le;break;case 15:case 51:z.qpro||(le[1].v=le[1].v.slice(1));case 13:case 14:case 16:Kt==14&&(le[2]&112)==112&&(le[2]&15)>1&&(le[2]&15)<15&&(le[1].z=z.dateNF||_e[14],z.cellDates&&(le[1].t="d",le[1].v=Co(le[1].v))),z.qpro&&le[3]>ue&&(R["!ref"]=De(F),ie[q]=R,ee.push(q),R=z.dense?[]:{},F={s:{r:0,c:0},e:{r:0,c:0}},ue=le[3],q=oe||"Sheet"+(ue+1),oe="");var gr=z.dense?(R[le[0].r]||[])[le[0].c]:R[we(le[0])];if(gr){gr.t=le[1].t,gr.v=le[1].v,le[1].z!=null&&(gr.z=le[1].z),le[1].f!=null&&(gr.f=le[1].f);break}z.dense?(R[le[0].r]||(R[le[0].r]=[]),R[le[0].r][le[0].c]=le[1]):R[we(le[0])]=le[1];break}},z);else if(C[2]==26||C[2]==14)z.Enum=be,C[2]==14&&(z.qpro=!0,C.l=0),e(C,function(le,Qe,Kt){switch(Kt){case 204:q=le;break;case 22:le[1].v=le[1].v.slice(1);case 23:case 24:case 25:case 37:case 39:case 40:if(le[3]>ue&&(R["!ref"]=De(F),ie[q]=R,ee.push(q),R=z.dense?[]:{},F={s:{r:0,c:0},e:{r:0,c:0}},ue=le[3],q="Sheet"+(ue+1)),Je>0&&le[0].r>=Je)break;z.dense?(R[le[0].r]||(R[le[0].r]=[]),R[le[0].r][le[0].c]=le[1]):R[we(le[0])]=le[1],F.e.c<le[0].c&&(F.e.c=le[0].c),F.e.r<le[0].r&&(F.e.r=le[0].r);break;case 27:le[14e3]&&(Oe[le[14e3][0]]=le[14e3][1]);break;case 1537:Oe[le[0]]=le[1],le[0]==ue&&(q=le[1]);break}},z);else throw new Error("Unrecognized LOTUS BOF "+C[2]);if(R["!ref"]=De(F),ie[oe||q]=R,ee.push(oe||q),!Oe.length)return{SheetNames:ee,Sheets:ie};for(var Pe={},Me=[],Ae=0;Ae<Oe.length;++Ae)ie[ee[Ae]]?(Me.push(Oe[Ae]||ee[Ae]),Pe[Oe[Ae]]=ie[Oe[Ae]]||ie[ee[Ae]]):(Me.push(Oe[Ae]),Pe[Oe[Ae]]={"!ref":"A1"});return{SheetNames:Me,Sheets:Pe}}function a(C,K){var z=K||{};if(+z.codepage>=0&&lr(+z.codepage),z.type=="string")throw new Error("Cannot write WK1 to JS string");var R=us(),q=Ze(C["!ref"]),oe=Array.isArray(C),ue=[];nr(R,0,n(1030)),nr(R,6,l(q));for(var ie=Math.min(q.e.r,8191),ee=q.s.r;ee<=ie;++ee)for(var Oe=xt(ee),F=q.s.c;F<=q.e.c;++F){ee===q.s.r&&(ue[F]=ct(F));var Je=ue[F]+Oe,Pe=oe?(C[ee]||[])[F]:C[Je];if(!(!Pe||Pe.t=="z"))if(Pe.t=="n")(Pe.v|0)==Pe.v&&Pe.v>=-32768&&Pe.v<=32767?nr(R,13,h(ee,F,Pe.v)):nr(R,14,g(ee,F,Pe.v));else{var Me=zr(Pe);nr(R,15,u(ee,F,Me.slice(0,239)))}}return nr(R,1),R.end()}function i(C,K){var z=K||{};if(+z.codepage>=0&&lr(+z.codepage),z.type=="string")throw new Error("Cannot write WK3 to JS string");var R=us();nr(R,0,o(C));for(var q=0,oe=0;q<C.SheetNames.length;++q)(C.Sheets[C.SheetNames[q]]||{})["!ref"]&&nr(R,27,W(C.SheetNames[q],oe++));var ue=0;for(q=0;q<C.SheetNames.length;++q){var ie=C.Sheets[C.SheetNames[q]];if(!(!ie||!ie["!ref"])){for(var ee=Ze(ie["!ref"]),Oe=Array.isArray(ie),F=[],Je=Math.min(ee.e.r,8191),Pe=ee.s.r;Pe<=Je;++Pe)for(var Me=xt(Pe),Ae=ee.s.c;Ae<=ee.e.c;++Ae){Pe===ee.s.r&&(F[Ae]=ct(Ae));var le=F[Ae]+Me,Qe=Oe?(ie[Pe]||[])[Ae]:ie[le];if(!(!Qe||Qe.t=="z"))if(Qe.t=="n")nr(R,23,j(Pe,Ae,ue,Qe.v));else{var Kt=zr(Qe);nr(R,22,T(Pe,Ae,ue,Kt.slice(0,239)))}}++ue}}return nr(R,1),R.end()}function n(C){var K=lt(2);return K.write_shift(2,C),K}function o(C){var K=lt(26);K.write_shift(2,4096),K.write_shift(2,4),K.write_shift(4,0);for(var z=0,R=0,q=0,oe=0;oe<C.SheetNames.length;++oe){var ue=C.SheetNames[oe],ie=C.Sheets[ue];if(!(!ie||!ie["!ref"])){++q;var ee=ui(ie["!ref"]);z<ee.e.r&&(z=ee.e.r),R<ee.e.c&&(R=ee.e.c)}}return z>8191&&(z=8191),K.write_shift(2,z),K.write_shift(1,q),K.write_shift(1,R),K.write_shift(2,0),K.write_shift(2,0),K.write_shift(1,1),K.write_shift(1,2),K.write_shift(4,0),K.write_shift(4,0),K}function s(C,K,z){var R={s:{c:0,r:0},e:{c:0,r:0}};return K==8&&z.qpro?(R.s.c=C.read_shift(1),C.l++,R.s.r=C.read_shift(2),R.e.c=C.read_shift(1),C.l++,R.e.r=C.read_shift(2),R):(R.s.c=C.read_shift(2),R.s.r=C.read_shift(2),K==12&&z.qpro&&(C.l+=2),R.e.c=C.read_shift(2),R.e.r=C.read_shift(2),K==12&&z.qpro&&(C.l+=2),R.s.c==65535&&(R.s.c=R.e.c=R.s.r=R.e.r=0),R)}function l(C){var K=lt(8);return K.write_shift(2,C.s.c),K.write_shift(2,C.s.r),K.write_shift(2,C.e.c),K.write_shift(2,C.e.r),K}function c(C,K,z){var R=[{c:0,r:0},{t:"n",v:0},0,0];return z.qpro&&z.vers!=20768?(R[0].c=C.read_shift(1),R[3]=C.read_shift(1),R[0].r=C.read_shift(2),C.l+=2):(R[2]=C.read_shift(1),R[0].c=C.read_shift(2),R[0].r=C.read_shift(2)),R}function d(C,K,z){var R=C.l+K,q=c(C,K,z);if(q[1].t="s",z.vers==20768){C.l++;var oe=C.read_shift(1);return q[1].v=C.read_shift(oe,"utf8"),q}return z.qpro&&C.l++,q[1].v=C.read_shift(R-C.l,"cstr"),q}function u(C,K,z){var R=lt(7+z.length);R.write_shift(1,255),R.write_shift(2,K),R.write_shift(2,C),R.write_shift(1,39);for(var q=0;q<R.length;++q){var oe=z.charCodeAt(q);R.write_shift(1,oe>=128?95:oe)}return R.write_shift(1,0),R}function f(C,K,z){var R=c(C,K,z);return R[1].v=C.read_shift(2,"i"),R}function h(C,K,z){var R=lt(7);return R.write_shift(1,255),R.write_shift(2,K),R.write_shift(2,C),R.write_shift(2,z,"i"),R}function p(C,K,z){var R=c(C,K,z);return R[1].v=C.read_shift(8,"f"),R}function g(C,K,z){var R=lt(13);return R.write_shift(1,255),R.write_shift(2,K),R.write_shift(2,C),R.write_shift(8,z,"f"),R}function m(C,K,z){var R=C.l+K,q=c(C,K,z);if(q[1].v=C.read_shift(8,"f"),z.qpro)C.l=R;else{var oe=C.read_shift(2);D(C.slice(C.l,C.l+oe),q),C.l+=oe}return q}function w(C,K,z){var R=K&32768;return K&=-32769,K=(R?C:0)+(K>=8192?K-16384:K),(R?"":"$")+(z?ct(K):xt(K))}var S={51:["FALSE",0],52:["TRUE",0],70:["LEN",1],80:["SUM",69],81:["AVERAGEA",69],82:["COUNTA",69],83:["MINA",69],84:["MAXA",69],111:["T",1]},x=["","","","","","","","","","+","-","*","/","^","=","<>","<=",">=","<",">","","","","","&","","","","","","",""];function D(C,K){mt(C,0);for(var z=[],R=0,q="",oe="",ue="",ie="";C.l<C.length;){var ee=C[C.l++];switch(ee){case 0:z.push(C.read_shift(8,"f"));break;case 1:oe=w(K[0].c,C.read_shift(2),!0),q=w(K[0].r,C.read_shift(2),!1),z.push(oe+q);break;case 2:{var Oe=w(K[0].c,C.read_shift(2),!0),F=w(K[0].r,C.read_shift(2),!1);oe=w(K[0].c,C.read_shift(2),!0),q=w(K[0].r,C.read_shift(2),!1),z.push(Oe+F+":"+oe+q)}break;case 3:if(C.l<C.length){console.error("WK1 premature formula end");return}break;case 4:z.push("("+z.pop()+")");break;case 5:z.push(C.read_shift(2));break;case 6:{for(var Je="";ee=C[C.l++];)Je+=String.fromCharCode(ee);z.push('"'+Je.replace(/"/g,'""')+'"')}break;case 8:z.push("-"+z.pop());break;case 23:z.push("+"+z.pop());break;case 22:z.push("NOT("+z.pop()+")");break;case 20:case 21:ie=z.pop(),ue=z.pop(),z.push(["AND","OR"][ee-20]+"("+ue+","+ie+")");break;default:if(ee<32&&x[ee])ie=z.pop(),ue=z.pop(),z.push(ue+x[ee]+ie);else if(S[ee]){if(R=S[ee][1],R==69&&(R=C[C.l++]),R>z.length){console.error("WK1 bad formula parse 0x"+ee.toString(16)+":|"+z.join("|")+"|");return}var Pe=z.slice(-R);z.length-=R,z.push(S[ee][0]+"("+Pe.join(",")+")")}else return ee<=7?console.error("WK1 invalid opcode "+ee.toString(16)):ee<=24?console.error("WK1 unsupported op "+ee.toString(16)):ee<=30?console.error("WK1 invalid opcode "+ee.toString(16)):ee<=115?console.error("WK1 unsupported function opcode "+ee.toString(16)):console.error("WK1 unrecognized opcode "+ee.toString(16))}}z.length==1?K[1].f=""+z[0]:console.error("WK1 bad formula parse |"+z.join("|")+"|")}function M(C){var K=[{c:0,r:0},{t:"n",v:0},0];return K[0].r=C.read_shift(2),K[3]=C[C.l++],K[0].c=C[C.l++],K}function I(C,K){var z=M(C);return z[1].t="s",z[1].v=C.read_shift(K-4,"cstr"),z}function T(C,K,z,R){var q=lt(6+R.length);q.write_shift(2,C),q.write_shift(1,z),q.write_shift(1,K),q.write_shift(1,39);for(var oe=0;oe<R.length;++oe){var ue=R.charCodeAt(oe);q.write_shift(1,ue>=128?95:ue)}return q.write_shift(1,0),q}function B(C,K){var z=M(C);z[1].v=C.read_shift(2);var R=z[1].v>>1;if(z[1].v&1)switch(R&7){case 0:R=(R>>3)*5e3;break;case 1:R=(R>>3)*500;break;case 2:R=(R>>3)/20;break;case 3:R=(R>>3)/200;break;case 4:R=(R>>3)/2e3;break;case 5:R=(R>>3)/2e4;break;case 6:R=(R>>3)/16;break;case 7:R=(R>>3)/64;break}return z[1].v=R,z}function O(C,K){var z=M(C),R=C.read_shift(4),q=C.read_shift(4),oe=C.read_shift(2);if(oe==65535)return R===0&&q===3221225472?(z[1].t="e",z[1].v=15):R===0&&q===3489660928?(z[1].t="e",z[1].v=42):z[1].v=0,z;var ue=oe&32768;return oe=(oe&32767)-16446,z[1].v=(1-ue*2)*(q*Math.pow(2,oe+32)+R*Math.pow(2,oe)),z}function j(C,K,z,R){var q=lt(14);if(q.write_shift(2,C),q.write_shift(1,z),q.write_shift(1,K),R==0)return q.write_shift(4,0),q.write_shift(4,0),q.write_shift(2,65535),q;var oe=0,ue=0,ie=0,ee=0;return R<0&&(oe=1,R=-R),ue=Math.log2(R)|0,R/=Math.pow(2,ue-31),ee=R>>>0,ee&2147483648||(R/=2,++ue,ee=R>>>0),R-=ee,ee|=2147483648,ee>>>=0,R*=Math.pow(2,32),ie=R>>>0,q.write_shift(4,ie),q.write_shift(4,ee),ue+=16383+(oe?32768:0),q.write_shift(2,ue),q}function U(C,K){var z=O(C);return C.l+=K-14,z}function N(C,K){var z=M(C),R=C.read_shift(4);return z[1].v=R>>6,z}function Z(C,K){var z=M(C),R=C.read_shift(8,"f");return z[1].v=R,z}function se(C,K){var z=Z(C);return C.l+=K-10,z}function re(C,K){return C[C.l+K-1]==0?C.read_shift(K,"cstr"):""}function ce(C,K){var z=C[C.l++];z>K-1&&(z=K-1);for(var R="";R.length<z;)R+=String.fromCharCode(C[C.l++]);return R}function ae(C,K,z){if(!(!z.qpro||K<21)){var R=C.read_shift(1);C.l+=17,C.l+=1,C.l+=2;var q=C.read_shift(K-21,"cstr");return[R,q]}}function Te(C,K){for(var z={},R=C.l+K;C.l<R;){var q=C.read_shift(2);if(q==14e3){for(z[q]=[0,""],z[q][0]=C.read_shift(2);C[C.l];)z[q][1]+=String.fromCharCode(C[C.l]),C.l++;C.l++}}return z}function W(C,K){var z=lt(5+C.length);z.write_shift(2,14e3),z.write_shift(2,K);for(var R=0;R<C.length;++R){var q=C.charCodeAt(R);z[z.l++]=q>127?95:q}return z[z.l++]=0,z}var pe={0:{n:"BOF",f:it},1:{n:"EOF"},2:{n:"CALCMODE"},3:{n:"CALCORDER"},4:{n:"SPLIT"},5:{n:"SYNC"},6:{n:"RANGE",f:s},7:{n:"WINDOW1"},8:{n:"COLW1"},9:{n:"WINTWO"},10:{n:"COLW2"},11:{n:"NAME"},12:{n:"BLANK"},13:{n:"INTEGER",f},14:{n:"NUMBER",f:p},15:{n:"LABEL",f:d},16:{n:"FORMULA",f:m},24:{n:"TABLE"},25:{n:"ORANGE"},26:{n:"PRANGE"},27:{n:"SRANGE"},28:{n:"FRANGE"},29:{n:"KRANGE1"},32:{n:"HRANGE"},35:{n:"KRANGE2"},36:{n:"PROTEC"},37:{n:"FOOTER"},38:{n:"HEADER"},39:{n:"SETUP"},40:{n:"MARGINS"},41:{n:"LABELFMT"},42:{n:"TITLES"},43:{n:"SHEETJS"},45:{n:"GRAPH"},46:{n:"NGRAPH"},47:{n:"CALCCOUNT"},48:{n:"UNFORMATTED"},49:{n:"CURSORW12"},50:{n:"WINDOW"},51:{n:"STRING",f:d},55:{n:"PASSWORD"},56:{n:"LOCKED"},60:{n:"QUERY"},61:{n:"QUERYNAME"},62:{n:"PRINT"},63:{n:"PRINTNAME"},64:{n:"GRAPH2"},65:{n:"GRAPHNAME"},66:{n:"ZOOM"},67:{n:"SYMSPLIT"},68:{n:"NSROWS"},69:{n:"NSCOLS"},70:{n:"RULER"},71:{n:"NNAME"},72:{n:"ACOMM"},73:{n:"AMACRO"},74:{n:"PARSE"},102:{n:"PRANGES??"},103:{n:"RRANGES??"},104:{n:"FNAME??"},105:{n:"MRANGES??"},204:{n:"SHEETNAMECS",f:re},222:{n:"SHEETNAMELP",f:ce},65535:{n:""}},be={0:{n:"BOF"},1:{n:"EOF"},2:{n:"PASSWORD"},3:{n:"CALCSET"},4:{n:"WINDOWSET"},5:{n:"SHEETCELLPTR"},6:{n:"SHEETLAYOUT"},7:{n:"COLUMNWIDTH"},8:{n:"HIDDENCOLUMN"},9:{n:"USERRANGE"},10:{n:"SYSTEMRANGE"},11:{n:"ZEROFORCE"},12:{n:"SORTKEYDIR"},13:{n:"FILESEAL"},14:{n:"DATAFILLNUMS"},15:{n:"PRINTMAIN"},16:{n:"PRINTSTRING"},17:{n:"GRAPHMAIN"},18:{n:"GRAPHSTRING"},19:{n:"??"},20:{n:"ERRCELL"},21:{n:"NACELL"},22:{n:"LABEL16",f:I},23:{n:"NUMBER17",f:O},24:{n:"NUMBER18",f:B},25:{n:"FORMULA19",f:U},26:{n:"FORMULA1A"},27:{n:"XFORMAT",f:Te},28:{n:"DTLABELMISC"},29:{n:"DTLABELCELL"},30:{n:"GRAPHWINDOW"},31:{n:"CPA"},32:{n:"LPLAUTO"},33:{n:"QUERY"},34:{n:"HIDDENSHEET"},35:{n:"??"},37:{n:"NUMBER25",f:N},38:{n:"??"},39:{n:"NUMBER27",f:Z},40:{n:"FORMULA28",f:se},142:{n:"??"},147:{n:"??"},150:{n:"??"},151:{n:"??"},152:{n:"??"},153:{n:"??"},154:{n:"??"},155:{n:"??"},156:{n:"??"},163:{n:"??"},174:{n:"??"},175:{n:"??"},176:{n:"??"},177:{n:"??"},184:{n:"??"},185:{n:"??"},186:{n:"??"},187:{n:"??"},188:{n:"??"},195:{n:"??"},201:{n:"??"},204:{n:"SHEETNAMECS",f:re},205:{n:"??"},206:{n:"??"},207:{n:"??"},208:{n:"??"},256:{n:"??"},259:{n:"??"},260:{n:"??"},261:{n:"??"},262:{n:"??"},263:{n:"??"},265:{n:"??"},266:{n:"??"},267:{n:"??"},268:{n:"??"},270:{n:"??"},271:{n:"??"},384:{n:"??"},389:{n:"??"},390:{n:"??"},393:{n:"??"},396:{n:"??"},512:{n:"??"},514:{n:"??"},513:{n:"??"},516:{n:"??"},517:{n:"??"},640:{n:"??"},641:{n:"??"},642:{n:"??"},643:{n:"??"},644:{n:"??"},645:{n:"??"},646:{n:"??"},647:{n:"??"},648:{n:"??"},658:{n:"??"},659:{n:"??"},660:{n:"??"},661:{n:"??"},662:{n:"??"},665:{n:"??"},666:{n:"??"},768:{n:"??"},772:{n:"??"},1537:{n:"SHEETINFOQP",f:ae},1600:{n:"??"},1602:{n:"??"},1793:{n:"??"},1794:{n:"??"},1795:{n:"??"},1796:{n:"??"},1920:{n:"??"},2048:{n:"??"},2049:{n:"??"},2052:{n:"??"},2688:{n:"??"},10998:{n:"??"},12849:{n:"??"},28233:{n:"??"},28484:{n:"??"},65535:{n:""}};return{sheet_to_wk1:a,book_to_wk3:i,to_workbook:t}}();function ex(e){var t={},r=e.match(Ft),a=0,i=!1;if(r)for(;a!=r.length;++a){var n=me(r[a]);switch(n[0].replace(/\w*:/g,"")){case"<condense":break;case"<extend":break;case"<shadow":if(!n.val)break;case"<shadow>":case"<shadow/>":t.shadow=1;break;case"</shadow>":break;case"<charset":if(n.val=="1")break;t.cp=Xs[parseInt(n.val,10)];break;case"<outline":if(!n.val)break;case"<outline>":case"<outline/>":t.outline=1;break;case"</outline>":break;case"<rFont":t.name=n.val;break;case"<sz":t.sz=n.val;break;case"<strike":if(!n.val)break;case"<strike>":case"<strike/>":t.strike=1;break;case"</strike>":break;case"<u":if(!n.val)break;switch(n.val){case"double":t.uval="double";break;case"singleAccounting":t.uval="single-accounting";break;case"doubleAccounting":t.uval="double-accounting";break}case"<u>":case"<u/>":t.u=1;break;case"</u>":break;case"<b":if(n.val=="0")break;case"<b>":case"<b/>":t.b=1;break;case"</b>":break;case"<i":if(n.val=="0")break;case"<i>":case"<i/>":t.i=1;break;case"</i>":break;case"<color":n.rgb&&(t.color=n.rgb.slice(2,8));break;case"<color>":case"<color/>":case"</color>":break;case"<family":t.family=n.val;break;case"<family>":case"<family/>":case"</family>":break;case"<vertAlign":t.valign=n.val;break;case"<vertAlign>":case"<vertAlign/>":case"</vertAlign>":break;case"<scheme":break;case"<scheme>":case"<scheme/>":case"</scheme>":break;case"<extLst":case"<extLst>":case"</extLst>":break;case"<ext":i=!0;break;case"</ext>":i=!1;break;default:if(n[0].charCodeAt(1)!==47&&!i)throw new Error("Unrecognized rich format "+n[0])}}return t}var tx=function(){var e=tn("t"),t=tn("rPr");function r(n){var o=n.match(e);if(!o)return{t:"s",v:""};var s={t:"s",v:Ie(o[1])},l=n.match(t);return l&&(s.s=ex(l[1])),s}var a=/<(?:\w+:)?r>/g,i=/<\/(?:\w+:)?r>/;return function(o){return o.replace(a,"").split(i).map(r).filter(function(s){return s.v})}}(),rx=function(){var t=/(\r\n|\n)/g;function r(i,n,o){var s=[];i.u&&s.push("text-decoration: underline;"),i.uval&&s.push("text-underline-style:"+i.uval+";"),i.sz&&s.push("font-size:"+i.sz+"pt;"),i.outline&&s.push("text-effect: outline;"),i.shadow&&s.push("text-shadow: auto;"),n.push('<span style="'+s.join("")+'">'),i.b&&(n.push("<b>"),o.push("</b>")),i.i&&(n.push("<i>"),o.push("</i>")),i.strike&&(n.push("<s>"),o.push("</s>"));var l=i.valign||"";return l=="superscript"||l=="super"?l="sup":l=="subscript"&&(l="sub"),l!=""&&(n.push("<"+l+">"),o.push("</"+l+">")),o.push("</span>"),i}function a(i){var n=[[],i.v,[]];return i.v?(i.s&&r(i.s,n[0],n[2]),n[0].join("")+n[1].replace(t,"<br/>")+n[2].join("")):""}return function(n){return n.map(a).join("")}}(),ax=/<(?:\w+:)?t[^>]*>([^<]*)<\/(?:\w+:)?t>/g,ix=/<(?:\w+:)?r>/,nx=/<(?:\w+:)?rPh.*?>([\s\S]*?)<\/(?:\w+:)?rPh>/g;function ul(e,t){var r=t?t.cellHTML:!0,a={};return e?(e.match(/^\s*<(?:\w+:)?t[^>]*>/)?(a.t=Ie(Ue(e.slice(e.indexOf(">")+1).split(/<\/(?:\w+:)?t>/)[0]||"")),a.r=Ue(e),r&&(a.h=tl(a.t))):e.match(ix)&&(a.r=Ue(e),a.t=Ie(Ue((e.replace(nx,"").match(ax)||[]).join("").replace(Ft,""))),r&&(a.h=rx(tx(a.r)))),a):{t:""}}var ox=/<(?:\w+:)?sst([^>]*)>([\s\S]*)<\/(?:\w+:)?sst>/,sx=/<(?:\w+:)?(?:si|sstItem)>/g,lx=/<\/(?:\w+:)?(?:si|sstItem)>/;function cx(e,t){var r=[],a="";if(!e)return r;var i=e.match(ox);if(i){a=i[2].replace(sx,"").split(lx);for(var n=0;n!=a.length;++n){var o=ul(a[n].trim(),t);o!=null&&(r[r.length]=o)}i=me(i[1]),r.Count=i.count,r.Unique=i.uniqueCount}return r}function dx(e){return[e.read_shift(4),e.read_shift(4)]}function ux(e,t){var r=[],a=!1;return Ur(e,function(n,o,s){switch(s){case 159:r.Count=n[0],r.Unique=n[1];break;case 19:r.push(n);break;case 160:return!0;case 35:a=!0;break;case 36:a=!1;break;default:if(o.T,!a||t.WTF)throw new Error("Unexpected record 0x"+s.toString(16))}}),r}function nu(e){for(var t=[],r=e.split(""),a=0;a<r.length;++a)t[a]=r[a].charCodeAt(0);return t}function $r(e,t){var r={};return r.Major=e.read_shift(2),r.Minor=e.read_shift(2),t>=4&&(e.l+=t-4),r}function hx(e){var t={};return t.id=e.read_shift(0,"lpp4"),t.R=$r(e,4),t.U=$r(e,4),t.W=$r(e,4),t}function fx(e){for(var t=e.read_shift(4),r=e.l+t-4,a={},i=e.read_shift(4),n=[];i-- >0;)n.push({t:e.read_shift(4),v:e.read_shift(0,"lpp4")});if(a.name=e.read_shift(0,"lpp4"),a.comps=n,e.l!=r)throw new Error("Bad DataSpaceMapEntry: "+e.l+" != "+r);return a}function px(e){var t=[];e.l+=4;for(var r=e.read_shift(4);r-- >0;)t.push(fx(e));return t}function gx(e){var t=[];e.l+=4;for(var r=e.read_shift(4);r-- >0;)t.push(e.read_shift(0,"lpp4"));return t}function mx(e){var t={};return e.read_shift(4),e.l+=4,t.id=e.read_shift(0,"lpp4"),t.name=e.read_shift(0,"lpp4"),t.R=$r(e,4),t.U=$r(e,4),t.W=$r(e,4),t}function vx(e){var t=mx(e);if(t.ename=e.read_shift(0,"8lpp4"),t.blksz=e.read_shift(4),t.cmode=e.read_shift(4),e.read_shift(4)!=4)throw new Error("Bad !Primary record");return t}function ou(e,t){var r=e.l+t,a={};a.Flags=e.read_shift(4)&63,e.l+=4,a.AlgID=e.read_shift(4);var i=!1;switch(a.AlgID){case 26126:case 26127:case 26128:i=a.Flags==36;break;case 26625:i=a.Flags==4;break;case 0:i=a.Flags==16||a.Flags==4||a.Flags==36;break;default:throw"Unrecognized encryption algorithm: "+a.AlgID}if(!i)throw new Error("Encryption Flags/AlgID mismatch");return a.AlgIDHash=e.read_shift(4),a.KeySize=e.read_shift(4),a.ProviderType=e.read_shift(4),e.l+=8,a.CSPName=e.read_shift(r-e.l>>1,"utf16le"),e.l=r,a}function su(e,t){var r={},a=e.l+t;return e.l+=4,r.Salt=e.slice(e.l,e.l+16),e.l+=16,r.Verifier=e.slice(e.l,e.l+16),e.l+=16,e.read_shift(4),r.VerifierHash=e.slice(e.l,a),e.l=a,r}function xx(e){var t=$r(e);switch(t.Minor){case 2:return[t.Minor,bx(e)];case 3:return[t.Minor,wx()];case 4:return[t.Minor,yx(e)]}throw new Error("ECMA-376 Encrypted file unrecognized Version: "+t.Minor)}function bx(e){var t=e.read_shift(4);if((t&63)!=36)throw new Error("EncryptionInfo mismatch");var r=e.read_shift(4),a=ou(e,r),i=su(e,e.length-e.l);return{t:"Std",h:a,v:i}}function wx(){throw new Error("File is password-protected: ECMA-376 Extensible")}function yx(e){var t=["saltSize","blockSize","keyBits","hashSize","cipherAlgorithm","cipherChaining","hashAlgorithm","saltValue"];e.l+=4;var r=e.read_shift(e.length-e.l,"utf8"),a={};return r.replace(Ft,function(n){var o=me(n);switch(Sr(o[0])){case"<?xml":break;case"<encryption":case"</encryption>":break;case"<keyData":t.forEach(function(s){a[s]=o[s]});break;case"<dataIntegrity":a.encryptedHmacKey=o.encryptedHmacKey,a.encryptedHmacValue=o.encryptedHmacValue;break;case"<keyEncryptors>":case"<keyEncryptors":a.encs=[];break;case"</keyEncryptors>":break;case"<keyEncryptor":a.uri=o.uri;break;case"</keyEncryptor>":break;case"<encryptedKey":a.encs.push(o);break;default:throw o[0]}}),a}function _x(e,t){var r={},a=r.EncryptionVersionInfo=$r(e,4);if(t-=4,a.Minor!=2)throw new Error("unrecognized minor version code: "+a.Minor);if(a.Major>4||a.Major<2)throw new Error("unrecognized major version code: "+a.Major);r.Flags=e.read_shift(4),t-=4;var i=e.read_shift(4);return t-=4,r.EncryptionHeader=ou(e,i),t-=i,r.EncryptionVerifier=su(e,t),r}function kx(e){var t={},r=t.EncryptionVersionInfo=$r(e,4);if(r.Major!=1||r.Minor!=1)throw"unrecognized version code "+r.Major+" : "+r.Minor;return t.Salt=e.read_shift(16),t.EncryptedVerifier=e.read_shift(16),t.EncryptedVerifierHash=e.read_shift(16),t}function Ex(e){var t=0,r,a=nu(e),i=a.length+1,n,o,s,l,c;for(r=ia(i),r[0]=a.length,n=1;n!=i;++n)r[n]=a[n-1];for(n=i-1;n>=0;--n)o=r[n],s=t&16384?1:0,l=t<<1&32767,c=s|l,t=c^o;return t^52811}var lu=function(){var e=[187,255,255,186,255,255,185,128,0,190,15,0,191,15,0],t=[57840,7439,52380,33984,4364,3600,61902,12606,6258,57657,54287,34041,10252,43370,20163],r=[44796,19929,39858,10053,20106,40212,10761,31585,63170,64933,60267,50935,40399,11199,17763,35526,1453,2906,5812,11624,23248,885,1770,3540,7080,14160,28320,56640,55369,41139,20807,41614,21821,43642,17621,28485,56970,44341,19019,38038,14605,29210,60195,50791,40175,10751,21502,43004,24537,18387,36774,3949,7898,15796,31592,63184,47201,24803,49606,37805,14203,28406,56812,17824,35648,1697,3394,6788,13576,27152,43601,17539,35078,557,1114,2228,4456,30388,60776,51953,34243,7079,14158,28316,14128,28256,56512,43425,17251,34502,7597,13105,26210,52420,35241,883,1766,3532,4129,8258,16516,33032,4657,9314,18628],a=function(o){return(o/2|o*128)&255},i=function(o,s){return a(o^s)},n=function(o){for(var s=t[o.length-1],l=104,c=o.length-1;c>=0;--c)for(var d=o[c],u=0;u!=7;++u)d&64&&(s^=r[l]),d*=2,--l;return s};return function(o){for(var s=nu(o),l=n(s),c=s.length,d=ia(16),u=0;u!=16;++u)d[u]=0;var f,h,p;for((c&1)===1&&(f=l>>8,d[c]=i(e[0],f),--c,f=l&255,h=s[s.length-1],d[c]=i(h,f));c>0;)--c,f=l>>8,d[c]=i(s[c],f),--c,f=l&255,d[c]=i(s[c],f);for(c=15,p=15-s.length;p>0;)f=l>>8,d[c]=i(e[p],f),--c,--p,f=l&255,d[c]=i(s[c],f),--c,--p;return d}}(),Tx=function(e,t,r,a,i){i||(i=t),a||(a=lu(e));var n,o;for(n=0;n!=t.length;++n)o=t[n],o^=a[r],o=(o>>5|o<<3)&255,i[n]=o,++r;return[i,r,a]},Ax=function(e){var t=0,r=lu(e);return function(a){var i=Tx("",a,t,r);return t=i[1],i[0]}};function Sx(e,t,r,a){var i={key:it(e),verificationBytes:it(e)};return r.password&&(i.verifier=Ex(r.password)),a.valid=i.verificationBytes===i.verifier,a.valid&&(a.insitu=Ax(r.password)),i}function Cx(e,t,r){var a=r||{};return a.Info=e.read_shift(2),e.l-=2,a.Info===1?a.Data=kx(e):a.Data=_x(e,t),a}function Fx(e,t,r){var a={Type:r.biff>=8?e.read_shift(2):0};return a.Type?Cx(e,t-2,a):Sx(e,r.biff>=8?t:t-2,r,a),a}var Dx=function(){function e(i,n){switch(n.type){case"base64":return t(jt(i),n);case"binary":return t(i,n);case"buffer":return t(Se&&Buffer.isBuffer(i)?i.toString("binary"):Ma(i),n);case"array":return t(Da(i),n)}throw new Error("Unrecognized type "+n.type)}function t(i,n){var o=n||{},s=o.dense?[]:{},l=i.match(/\\trowd.*?\\row\b/g);if(!l.length)throw new Error("RTF missing table");var c={s:{c:0,r:0},e:{c:0,r:l.length-1}};return l.forEach(function(d,u){Array.isArray(s)&&(s[u]=[]);for(var f=/\\\w+\b/g,h=0,p,g=-1;p=f.exec(d);){switch(p[0]){case"\\cell":var m=d.slice(h,f.lastIndex-p[0].length);if(m[0]==" "&&(m=m.slice(1)),++g,m.length){var w={v:m,t:"s"};Array.isArray(s)?s[u][g]=w:s[we({r:u,c:g})]=w}break}h=f.lastIndex}g>c.e.c&&(c.e.c=g)}),s["!ref"]=De(c),s}function r(i,n){return da(e(i,n),n)}function a(i){for(var n=["{\\rtf1\\ansi"],o=Ze(i["!ref"]),s,l=Array.isArray(i),c=o.s.r;c<=o.e.r;++c){n.push("\\trowd\\trautofit1");for(var d=o.s.c;d<=o.e.c;++d)n.push("\\cellx"+(d+1));for(n.push("\\pard\\intbl"),d=o.s.c;d<=o.e.c;++d){var u=we({r:c,c:d});s=l?(i[c]||[])[d]:i[u],!(!s||s.v==null&&(!s.f||s.F))&&(n.push(" "+(s.w||(zr(s),s.w))),n.push("\\cell"))}n.push("\\pard\\intbl\\row")}return n.join("")+"}"}return{to_workbook:r,to_sheet:e,from_sheet:a}}();function Ox(e){var t=e.slice(e[0]==="#"?1:0).slice(0,6);return[parseInt(t.slice(0,2),16),parseInt(t.slice(2,4),16),parseInt(t.slice(4,6),16)]}function nn(e){for(var t=0,r=1;t!=3;++t)r=r*256+(e[t]>255?255:e[t]<0?0:e[t]);return r.toString(16).toUpperCase().slice(1)}function Ix(e){var t=e[0]/255,r=e[1]/255,a=e[2]/255,i=Math.max(t,r,a),n=Math.min(t,r,a),o=i-n;if(o===0)return[0,0,t];var s=0,l=0,c=i+n;switch(l=o/(c>1?2-c:c),i){case t:s=((r-a)/o+6)%6;break;case r:s=(a-t)/o+2;break;case a:s=(t-r)/o+4;break}return[s/6,l,c/2]}function Px(e){var t=e[0],r=e[1],a=e[2],i=r*2*(a<.5?a:1-a),n=a-i/2,o=[n,n,n],s=6*t,l;if(r!==0)switch(s|0){case 0:case 6:l=i*s,o[0]+=i,o[1]+=l;break;case 1:l=i*(2-s),o[0]+=l,o[1]+=i;break;case 2:l=i*(s-2),o[1]+=i,o[2]+=l;break;case 3:l=i*(4-s),o[1]+=l,o[2]+=i;break;case 4:l=i*(s-4),o[2]+=i,o[0]+=l;break;case 5:l=i*(6-s),o[2]+=l,o[0]+=i;break}for(var c=0;c!=3;++c)o[c]=Math.round(o[c]*255);return o}function co(e,t){if(t===0)return e;var r=Ix(Ox(e));return t<0?r[2]=r[2]*(1+t):r[2]=1-(1-r[2])*(1-t),nn(Px(r))}var cu=6,Rx=15,$x=1,It=cu;function uo(e){return Math.floor((e+Math.round(128/It)/256)*It)}function ho(e){return Math.floor((e-5)/It*100+.5)/100}function gs(e){return Math.round((e*It+5)/It*256)/256}function Ko(e){return gs(ho(uo(e)))}function hl(e){var t=Math.abs(e-Ko(e)),r=It;if(t>.005)for(It=$x;It<Rx;++It)Math.abs(e-Ko(e))<=t&&(t=Math.abs(e-Ko(e)),r=It);It=r}function ii(e){e.width?(e.wpx=uo(e.width),e.wch=ho(e.wpx),e.MDW=It):e.wpx?(e.wch=ho(e.wpx),e.width=gs(e.wch),e.MDW=It):typeof e.wch=="number"&&(e.width=gs(e.wch),e.wpx=uo(e.width),e.MDW=It),e.customWidth&&delete e.customWidth}var Lx=96,du=Lx;function uu(e){return e*96/du}function on(e){return e*du/96}var Nx={None:"none",Solid:"solid",Gray50:"mediumGray",Gray75:"darkGray",Gray25:"lightGray",HorzStripe:"darkHorizontal",VertStripe:"darkVertical",ReverseDiagStripe:"darkDown",DiagStripe:"darkUp",DiagCross:"darkGrid",ThickDiagCross:"darkTrellis",ThinHorzStripe:"lightHorizontal",ThinVertStripe:"lightVertical",ThinReverseDiagStripe:"lightDown",ThinHorzCross:"lightGrid"};function zx(e,t,r,a){t.Borders=[];var i={},n=!1;(e[0].match(Ft)||[]).forEach(function(o){var s=me(o);switch(Sr(s[0])){case"<borders":case"<borders>":case"</borders>":break;case"<border":case"<border>":case"<border/>":i={},s.diagonalUp&&(i.diagonalUp=We(s.diagonalUp)),s.diagonalDown&&(i.diagonalDown=We(s.diagonalDown)),t.Borders.push(i);break;case"</border>":break;case"<left/>":break;case"<left":case"<left>":break;case"</left>":break;case"<right/>":break;case"<right":case"<right>":break;case"</right>":break;case"<top/>":break;case"<top":case"<top>":break;case"</top>":break;case"<bottom/>":break;case"<bottom":case"<bottom>":break;case"</bottom>":break;case"<diagonal":case"<diagonal>":case"<diagonal/>":break;case"</diagonal>":break;case"<horizontal":case"<horizontal>":case"<horizontal/>":break;case"</horizontal>":break;case"<vertical":case"<vertical>":case"<vertical/>":break;case"</vertical>":break;case"<start":case"<start>":case"<start/>":break;case"</start>":break;case"<end":case"<end>":case"<end/>":break;case"</end>":break;case"<color":case"<color>":break;case"<color/>":case"</color>":break;case"<extLst":case"<extLst>":case"</extLst>":break;case"<ext":n=!0;break;case"</ext>":n=!1;break;default:if(a&&a.WTF&&!n)throw new Error("unrecognized "+s[0]+" in borders")}})}function Mx(e,t,r,a){t.Fills=[];var i={},n=!1;(e[0].match(Ft)||[]).forEach(function(o){var s=me(o);switch(Sr(s[0])){case"<fills":case"<fills>":case"</fills>":break;case"<fill>":case"<fill":case"<fill/>":i={},t.Fills.push(i);break;case"</fill>":break;case"<gradientFill>":break;case"<gradientFill":case"</gradientFill>":t.Fills.push(i),i={};break;case"<patternFill":case"<patternFill>":s.patternType&&(i.patternType=s.patternType);break;case"<patternFill/>":case"</patternFill>":break;case"<bgColor":i.bgColor||(i.bgColor={}),s.indexed&&(i.bgColor.indexed=parseInt(s.indexed,10)),s.theme&&(i.bgColor.theme=parseInt(s.theme,10)),s.tint&&(i.bgColor.tint=parseFloat(s.tint)),s.rgb&&(i.bgColor.rgb=s.rgb.slice(-6));break;case"<bgColor/>":case"</bgColor>":break;case"<fgColor":i.fgColor||(i.fgColor={}),s.theme&&(i.fgColor.theme=parseInt(s.theme,10)),s.tint&&(i.fgColor.tint=parseFloat(s.tint)),s.rgb!=null&&(i.fgColor.rgb=s.rgb.slice(-6));break;case"<fgColor/>":case"</fgColor>":break;case"<stop":case"<stop/>":break;case"</stop>":break;case"<color":case"<color/>":break;case"</color>":break;case"<extLst":case"<extLst>":case"</extLst>":break;case"<ext":n=!0;break;case"</ext>":n=!1;break;default:if(a&&a.WTF&&!n)throw new Error("unrecognized "+s[0]+" in fills")}})}function Bx(e,t,r,a){t.Fonts=[];var i={},n=!1;(e[0].match(Ft)||[]).forEach(function(o){var s=me(o);switch(Sr(s[0])){case"<fonts":case"<fonts>":case"</fonts>":break;case"<font":case"<font>":break;case"</font>":case"<font/>":t.Fonts.push(i),i={};break;case"<name":s.val&&(i.name=Ue(s.val));break;case"<name/>":case"</name>":break;case"<b":i.bold=s.val?We(s.val):1;break;case"<b/>":i.bold=1;break;case"<i":i.italic=s.val?We(s.val):1;break;case"<i/>":i.italic=1;break;case"<u":switch(s.val){case"none":i.underline=0;break;case"single":i.underline=1;break;case"double":i.underline=2;break;case"singleAccounting":i.underline=33;break;case"doubleAccounting":i.underline=34;break}break;case"<u/>":i.underline=1;break;case"<strike":i.strike=s.val?We(s.val):1;break;case"<strike/>":i.strike=1;break;case"<outline":i.outline=s.val?We(s.val):1;break;case"<outline/>":i.outline=1;break;case"<shadow":i.shadow=s.val?We(s.val):1;break;case"<shadow/>":i.shadow=1;break;case"<condense":i.condense=s.val?We(s.val):1;break;case"<condense/>":i.condense=1;break;case"<extend":i.extend=s.val?We(s.val):1;break;case"<extend/>":i.extend=1;break;case"<sz":s.val&&(i.sz=+s.val);break;case"<sz/>":case"</sz>":break;case"<vertAlign":s.val&&(i.vertAlign=s.val);break;case"<vertAlign/>":case"</vertAlign>":break;case"<family":s.val&&(i.family=parseInt(s.val,10));break;case"<family/>":case"</family>":break;case"<scheme":s.val&&(i.scheme=s.val);break;case"<scheme/>":case"</scheme>":break;case"<charset":if(s.val=="1")break;s.codepage=Xs[parseInt(s.val,10)];break;case"<color":if(i.color||(i.color={}),s.auto&&(i.color.auto=We(s.auto)),s.rgb)i.color.rgb=s.rgb.slice(-6);else if(s.indexed){i.color.index=parseInt(s.indexed,10);var l=Ea[i.color.index];i.color.index==81&&(l=Ea[1]),l||(l=Ea[1]),i.color.rgb=l[0].toString(16)+l[1].toString(16)+l[2].toString(16)}else s.theme&&(i.color.theme=parseInt(s.theme,10),s.tint&&(i.color.tint=parseFloat(s.tint)),s.theme&&r.themeElements&&r.themeElements.clrScheme&&(i.color.rgb=co(r.themeElements.clrScheme[i.color.theme].rgb,i.color.tint||0)));break;case"<color/>":case"</color>":break;case"<AlternateContent":n=!0;break;case"</AlternateContent>":n=!1;break;case"<extLst":case"<extLst>":case"</extLst>":break;case"<ext":n=!0;break;case"</ext>":n=!1;break;default:if(a&&a.WTF&&!n)throw new Error("unrecognized "+s[0]+" in fonts")}})}function Ux(e,t,r){t.NumberFmt=[];for(var a=_r(_e),i=0;i<a.length;++i)t.NumberFmt[a[i]]=_e[a[i]];var n=e[0].match(Ft);if(n)for(i=0;i<n.length;++i){var o=me(n[i]);switch(Sr(o[0])){case"<numFmts":case"</numFmts>":case"<numFmts/>":case"<numFmts>":break;case"<numFmt":{var s=Ie(Ue(o.formatCode)),l=parseInt(o.numFmtId,10);if(t.NumberFmt[l]=s,l>0){if(l>392){for(l=392;l>60&&t.NumberFmt[l]!=null;--l);t.NumberFmt[l]=s}ka(s,l)}}break;case"</numFmt>":break;default:if(r.WTF)throw new Error("unrecognized "+o[0]+" in numFmts")}}}var zn=["numFmtId","fillId","fontId","borderId","xfId"],Mn=["applyAlignment","applyBorder","applyFill","applyFont","applyNumberFormat","applyProtection","pivotButton","quotePrefix"];function Vx(e,t,r){t.CellXf=[];var a,i=!1;(e[0].match(Ft)||[]).forEach(function(n){var o=me(n),s=0;switch(Sr(o[0])){case"<cellXfs":case"<cellXfs>":case"<cellXfs/>":case"</cellXfs>":break;case"<xf":case"<xf/>":for(a=o,delete a[0],s=0;s<zn.length;++s)a[zn[s]]&&(a[zn[s]]=parseInt(a[zn[s]],10));for(s=0;s<Mn.length;++s)a[Mn[s]]&&(a[Mn[s]]=We(a[Mn[s]]));if(t.NumberFmt&&a.numFmtId>392){for(s=392;s>60;--s)if(t.NumberFmt[a.numFmtId]==t.NumberFmt[s]){a.numFmtId=s;break}}t.CellXf.push(a);break;case"</xf>":break;case"<alignment":case"<alignment/>":var l={};o.vertical&&(l.vertical=o.vertical),o.horizontal&&(l.horizontal=o.horizontal),o.textRotation!=null&&(l.textRotation=o.textRotation),o.indent&&(l.indent=o.indent),o.wrapText&&(l.wrapText=We(o.wrapText)),a.alignment=l;break;case"</alignment>":break;case"<protection":break;case"</protection>":case"<protection/>":break;case"<AlternateContent":i=!0;break;case"</AlternateContent>":i=!1;break;case"<extLst":case"<extLst>":case"</extLst>":break;case"<ext":i=!0;break;case"</ext>":i=!1;break;default:if(r&&r.WTF&&!i)throw new Error("unrecognized "+o[0]+" in cellXfs")}})}var Hx=function(){var t=/<(?:\w+:)?numFmts([^>]*)>[\S\s]*?<\/(?:\w+:)?numFmts>/,r=/<(?:\w+:)?cellXfs([^>]*)>[\S\s]*?<\/(?:\w+:)?cellXfs>/,a=/<(?:\w+:)?fills([^>]*)>[\S\s]*?<\/(?:\w+:)?fills>/,i=/<(?:\w+:)?fonts([^>]*)>[\S\s]*?<\/(?:\w+:)?fonts>/,n=/<(?:\w+:)?borders([^>]*)>[\S\s]*?<\/(?:\w+:)?borders>/;return function(s,l,c){var d={};if(!s)return d;s=s.replace(/<!--([\s\S]*?)-->/mg,"").replace(/<!DOCTYPE[^\[]*\[[^\]]*\]>/gm,"");var u;return(u=s.match(t))&&Ux(u,d,c),(u=s.match(i))&&Bx(u,d,l,c),(u=s.match(a))&&Mx(u,d,l,c),(u=s.match(n))&&zx(u,d,l,c),(u=s.match(r))&&Vx(u,d,c),d}}();function jx(e,t){var r=e.read_shift(2),a=Tt(e);return[r,a]}function Wx(e,t,r){var a={};a.sz=e.read_shift(2)/20;var i=tv(e);i.fItalic&&(a.italic=1),i.fCondense&&(a.condense=1),i.fExtend&&(a.extend=1),i.fShadow&&(a.shadow=1),i.fOutline&&(a.outline=1),i.fStrikeout&&(a.strike=1);var n=e.read_shift(2);switch(n===700&&(a.bold=1),e.read_shift(2)){case 1:a.vertAlign="superscript";break;case 2:a.vertAlign="subscript";break}var o=e.read_shift(1);o!=0&&(a.underline=o);var s=e.read_shift(1);s>0&&(a.family=s);var l=e.read_shift(1);switch(l>0&&(a.charset=l),e.l++,a.color=ev(e),e.read_shift(1)){case 1:a.scheme="major";break;case 2:a.scheme="minor";break}return a.name=Tt(e),a}var Gx=At;function Kx(e,t){var r=e.l+t,a=e.read_shift(2),i=e.read_shift(2);return e.l=r,{ixfe:a,numFmtId:i}}var Xx=At;function Yx(e,t,r){var a={};a.NumberFmt=[];for(var i in _e)a.NumberFmt[i]=_e[i];a.CellXf=[],a.Fonts=[];var n=[],o=!1;return Ur(e,function(l,c,d){switch(d){case 44:a.NumberFmt[l[0]]=l[1],ka(l[1],l[0]);break;case 43:a.Fonts.push(l),l.color.theme!=null&&t&&t.themeElements&&t.themeElements.clrScheme&&(l.color.rgb=co(t.themeElements.clrScheme[l.color.theme].rgb,l.color.tint||0));break;case 1025:break;case 45:break;case 46:break;case 47:n[n.length-1]==617&&a.CellXf.push(l);break;case 48:case 507:case 572:case 475:break;case 1171:case 2102:case 1130:case 512:case 2095:case 3072:break;case 35:o=!0;break;case 36:o=!1;break;case 37:n.push(d),o=!0;break;case 38:n.pop(),o=!1;break;default:if(c.T>0)n.push(d);else if(c.T<0)n.pop();else if(!o||r.WTF&&n[n.length-1]!=37)throw new Error("Unexpected record 0x"+d.toString(16))}}),a}var qx=["</a:lt1>","</a:dk1>","</a:lt2>","</a:dk2>","</a:accent1>","</a:accent2>","</a:accent3>","</a:accent4>","</a:accent5>","</a:accent6>","</a:hlink>","</a:folHlink>"];function Zx(e,t,r){t.themeElements.clrScheme=[];var a={};(e[0].match(Ft)||[]).forEach(function(i){var n=me(i);switch(n[0]){case"<a:clrScheme":case"</a:clrScheme>":break;case"<a:srgbClr":a.rgb=n.val;break;case"<a:sysClr":a.rgb=n.lastClr;break;case"<a:dk1>":case"</a:dk1>":case"<a:lt1>":case"</a:lt1>":case"<a:dk2>":case"</a:dk2>":case"<a:lt2>":case"</a:lt2>":case"<a:accent1>":case"</a:accent1>":case"<a:accent2>":case"</a:accent2>":case"<a:accent3>":case"</a:accent3>":case"<a:accent4>":case"</a:accent4>":case"<a:accent5>":case"</a:accent5>":case"<a:accent6>":case"</a:accent6>":case"<a:hlink>":case"</a:hlink>":case"<a:folHlink>":case"</a:folHlink>":n[0].charAt(1)==="/"?(t.themeElements.clrScheme[qx.indexOf(n[0])]=a,a={}):a.name=n[0].slice(3,n[0].length-1);break;default:if(r&&r.WTF)throw new Error("Unrecognized "+n[0]+" in clrScheme")}})}function Jx(){}function Qx(){}var eb=/<a:clrScheme([^>]*)>[\s\S]*<\/a:clrScheme>/,tb=/<a:fontScheme([^>]*)>[\s\S]*<\/a:fontScheme>/,rb=/<a:fmtScheme([^>]*)>[\s\S]*<\/a:fmtScheme>/;function ab(e,t,r){t.themeElements={};var a;[["clrScheme",eb,Zx],["fontScheme",tb,Jx],["fmtScheme",rb,Qx]].forEach(function(i){if(!(a=e.match(i[1])))throw new Error(i[0]+" not found in themeElements");i[2](a,t,r)})}var ib=/<a:themeElements([^>]*)>[\s\S]*<\/a:themeElements>/;function hu(e,t){(!e||e.length===0)&&(e=nb());var r,a={};if(!(r=e.match(ib)))throw new Error("themeElements not found in theme");return ab(r[0],a,t),a.raw=e,a}function nb(e,t){var r=[kd];return r[r.length]='<a:theme xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" name="Office Theme">',r[r.length]="<a:themeElements>",r[r.length]='<a:clrScheme name="Office">',r[r.length]='<a:dk1><a:sysClr val="windowText" lastClr="000000"/></a:dk1>',r[r.length]='<a:lt1><a:sysClr val="window" lastClr="FFFFFF"/></a:lt1>',r[r.length]='<a:dk2><a:srgbClr val="1F497D"/></a:dk2>',r[r.length]='<a:lt2><a:srgbClr val="EEECE1"/></a:lt2>',r[r.length]='<a:accent1><a:srgbClr val="4F81BD"/></a:accent1>',r[r.length]='<a:accent2><a:srgbClr val="C0504D"/></a:accent2>',r[r.length]='<a:accent3><a:srgbClr val="9BBB59"/></a:accent3>',r[r.length]='<a:accent4><a:srgbClr val="8064A2"/></a:accent4>',r[r.length]='<a:accent5><a:srgbClr val="4BACC6"/></a:accent5>',r[r.length]='<a:accent6><a:srgbClr val="F79646"/></a:accent6>',r[r.length]='<a:hlink><a:srgbClr val="0000FF"/></a:hlink>',r[r.length]='<a:folHlink><a:srgbClr val="800080"/></a:folHlink>',r[r.length]="</a:clrScheme>",r[r.length]='<a:fontScheme name="Office">',r[r.length]="<a:majorFont>",r[r.length]='<a:latin typeface="Cambria"/>',r[r.length]='<a:ea typeface=""/>',r[r.length]='<a:cs typeface=""/>',r[r.length]='<a:font script="Jpan" typeface="ＭＳ Ｐゴシック"/>',r[r.length]='<a:font script="Hang" typeface="맑은 고딕"/>',r[r.length]='<a:font script="Hans" typeface="宋体"/>',r[r.length]='<a:font script="Hant" typeface="新細明體"/>',r[r.length]='<a:font script="Arab" typeface="Times New Roman"/>',r[r.length]='<a:font script="Hebr" typeface="Times New Roman"/>',r[r.length]='<a:font script="Thai" typeface="Tahoma"/>',r[r.length]='<a:font script="Ethi" typeface="Nyala"/>',r[r.length]='<a:font script="Beng" typeface="Vrinda"/>',r[r.length]='<a:font script="Gujr" typeface="Shruti"/>',r[r.length]='<a:font script="Khmr" typeface="MoolBoran"/>',r[r.length]='<a:font script="Knda" typeface="Tunga"/>',r[r.length]='<a:font script="Guru" typeface="Raavi"/>',r[r.length]='<a:font script="Cans" typeface="Euphemia"/>',r[r.length]='<a:font script="Cher" typeface="Plantagenet Cherokee"/>',r[r.length]='<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>',r[r.length]='<a:font script="Tibt" typeface="Microsoft Himalaya"/>',r[r.length]='<a:font script="Thaa" typeface="MV Boli"/>',r[r.length]='<a:font script="Deva" typeface="Mangal"/>',r[r.length]='<a:font script="Telu" typeface="Gautami"/>',r[r.length]='<a:font script="Taml" typeface="Latha"/>',r[r.length]='<a:font script="Syrc" typeface="Estrangelo Edessa"/>',r[r.length]='<a:font script="Orya" typeface="Kalinga"/>',r[r.length]='<a:font script="Mlym" typeface="Kartika"/>',r[r.length]='<a:font script="Laoo" typeface="DokChampa"/>',r[r.length]='<a:font script="Sinh" typeface="Iskoola Pota"/>',r[r.length]='<a:font script="Mong" typeface="Mongolian Baiti"/>',r[r.length]='<a:font script="Viet" typeface="Times New Roman"/>',r[r.length]='<a:font script="Uigh" typeface="Microsoft Uighur"/>',r[r.length]='<a:font script="Geor" typeface="Sylfaen"/>',r[r.length]="</a:majorFont>",r[r.length]="<a:minorFont>",r[r.length]='<a:latin typeface="Calibri"/>',r[r.length]='<a:ea typeface=""/>',r[r.length]='<a:cs typeface=""/>',r[r.length]='<a:font script="Jpan" typeface="ＭＳ Ｐゴシック"/>',r[r.length]='<a:font script="Hang" typeface="맑은 고딕"/>',r[r.length]='<a:font script="Hans" typeface="宋体"/>',r[r.length]='<a:font script="Hant" typeface="新細明體"/>',r[r.length]='<a:font script="Arab" typeface="Arial"/>',r[r.length]='<a:font script="Hebr" typeface="Arial"/>',r[r.length]='<a:font script="Thai" typeface="Tahoma"/>',r[r.length]='<a:font script="Ethi" typeface="Nyala"/>',r[r.length]='<a:font script="Beng" typeface="Vrinda"/>',r[r.length]='<a:font script="Gujr" typeface="Shruti"/>',r[r.length]='<a:font script="Khmr" typeface="DaunPenh"/>',r[r.length]='<a:font script="Knda" typeface="Tunga"/>',r[r.length]='<a:font script="Guru" typeface="Raavi"/>',r[r.length]='<a:font script="Cans" typeface="Euphemia"/>',r[r.length]='<a:font script="Cher" typeface="Plantagenet Cherokee"/>',r[r.length]='<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>',r[r.length]='<a:font script="Tibt" typeface="Microsoft Himalaya"/>',r[r.length]='<a:font script="Thaa" typeface="MV Boli"/>',r[r.length]='<a:font script="Deva" typeface="Mangal"/>',r[r.length]='<a:font script="Telu" typeface="Gautami"/>',r[r.length]='<a:font script="Taml" typeface="Latha"/>',r[r.length]='<a:font script="Syrc" typeface="Estrangelo Edessa"/>',r[r.length]='<a:font script="Orya" typeface="Kalinga"/>',r[r.length]='<a:font script="Mlym" typeface="Kartika"/>',r[r.length]='<a:font script="Laoo" typeface="DokChampa"/>',r[r.length]='<a:font script="Sinh" typeface="Iskoola Pota"/>',r[r.length]='<a:font script="Mong" typeface="Mongolian Baiti"/>',r[r.length]='<a:font script="Viet" typeface="Arial"/>',r[r.length]='<a:font script="Uigh" typeface="Microsoft Uighur"/>',r[r.length]='<a:font script="Geor" typeface="Sylfaen"/>',r[r.length]="</a:minorFont>",r[r.length]="</a:fontScheme>",r[r.length]='<a:fmtScheme name="Office">',r[r.length]="<a:fillStyleLst>",r[r.length]='<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>',r[r.length]='<a:gradFill rotWithShape="1">',r[r.length]="<a:gsLst>",r[r.length]='<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="50000"/><a:satMod val="300000"/></a:schemeClr></a:gs>',r[r.length]='<a:gs pos="35000"><a:schemeClr val="phClr"><a:tint val="37000"/><a:satMod val="300000"/></a:schemeClr></a:gs>',r[r.length]='<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="15000"/><a:satMod val="350000"/></a:schemeClr></a:gs>',r[r.length]="</a:gsLst>",r[r.length]='<a:lin ang="16200000" scaled="1"/>',r[r.length]="</a:gradFill>",r[r.length]='<a:gradFill rotWithShape="1">',r[r.length]="<a:gsLst>",r[r.length]='<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="100000"/><a:shade val="100000"/><a:satMod val="130000"/></a:schemeClr></a:gs>',r[r.length]='<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="50000"/><a:shade val="100000"/><a:satMod val="350000"/></a:schemeClr></a:gs>',r[r.length]="</a:gsLst>",r[r.length]='<a:lin ang="16200000" scaled="0"/>',r[r.length]="</a:gradFill>",r[r.length]="</a:fillStyleLst>",r[r.length]="<a:lnStyleLst>",r[r.length]='<a:ln w="9525" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"><a:shade val="95000"/><a:satMod val="105000"/></a:schemeClr></a:solidFill><a:prstDash val="solid"/></a:ln>',r[r.length]='<a:ln w="25400" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>',r[r.length]='<a:ln w="38100" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>',r[r.length]="</a:lnStyleLst>",r[r.length]="<a:effectStyleLst>",r[r.length]="<a:effectStyle>",r[r.length]="<a:effectLst>",r[r.length]='<a:outerShdw blurRad="40000" dist="20000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="38000"/></a:srgbClr></a:outerShdw>',r[r.length]="</a:effectLst>",r[r.length]="</a:effectStyle>",r[r.length]="<a:effectStyle>",r[r.length]="<a:effectLst>",r[r.length]='<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>',r[r.length]="</a:effectLst>",r[r.length]="</a:effectStyle>",r[r.length]="<a:effectStyle>",r[r.length]="<a:effectLst>",r[r.length]='<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>',r[r.length]="</a:effectLst>",r[r.length]='<a:scene3d><a:camera prst="orthographicFront"><a:rot lat="0" lon="0" rev="0"/></a:camera><a:lightRig rig="threePt" dir="t"><a:rot lat="0" lon="0" rev="1200000"/></a:lightRig></a:scene3d>',r[r.length]='<a:sp3d><a:bevelT w="63500" h="25400"/></a:sp3d>',r[r.length]="</a:effectStyle>",r[r.length]="</a:effectStyleLst>",r[r.length]="<a:bgFillStyleLst>",r[r.length]='<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>',r[r.length]='<a:gradFill rotWithShape="1">',r[r.length]="<a:gsLst>",r[r.length]='<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="40000"/><a:satMod val="350000"/></a:schemeClr></a:gs>',r[r.length]='<a:gs pos="40000"><a:schemeClr val="phClr"><a:tint val="45000"/><a:shade val="99000"/><a:satMod val="350000"/></a:schemeClr></a:gs>',r[r.length]='<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="20000"/><a:satMod val="255000"/></a:schemeClr></a:gs>',r[r.length]="</a:gsLst>",r[r.length]='<a:path path="circle"><a:fillToRect l="50000" t="-80000" r="50000" b="180000"/></a:path>',r[r.length]="</a:gradFill>",r[r.length]='<a:gradFill rotWithShape="1">',r[r.length]="<a:gsLst>",r[r.length]='<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="80000"/><a:satMod val="300000"/></a:schemeClr></a:gs>',r[r.length]='<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="30000"/><a:satMod val="200000"/></a:schemeClr></a:gs>',r[r.length]="</a:gsLst>",r[r.length]='<a:path path="circle"><a:fillToRect l="50000" t="50000" r="50000" b="50000"/></a:path>',r[r.length]="</a:gradFill>",r[r.length]="</a:bgFillStyleLst>",r[r.length]="</a:fmtScheme>",r[r.length]="</a:themeElements>",r[r.length]="<a:objectDefaults>",r[r.length]="<a:spDef>",r[r.length]='<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="1"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="3"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="2"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="lt1"/></a:fontRef></a:style>',r[r.length]="</a:spDef>",r[r.length]="<a:lnDef>",r[r.length]='<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="2"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="0"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="1"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="tx1"/></a:fontRef></a:style>',r[r.length]="</a:lnDef>",r[r.length]="</a:objectDefaults>",r[r.length]="<a:extraClrSchemeLst/>",r[r.length]="</a:theme>",r.join("")}function ob(e,t,r){var a=e.l+t,i=e.read_shift(4);if(i!==124226){if(!r.cellStyles){e.l=a;return}var n=e.slice(e.l);e.l=a;var o;try{o=_d(n,{type:"array"})}catch{return}var s=Vt(o,"theme/theme/theme1.xml",!0);if(s)return hu(s,r)}}function sb(e){return e.read_shift(4)}function lb(e){var t={};switch(t.xclrType=e.read_shift(2),t.nTintShade=e.read_shift(2),t.xclrType){case 0:e.l+=4;break;case 1:t.xclrValue=cb(e,4);break;case 2:t.xclrValue=Jd(e);break;case 3:t.xclrValue=sb(e);break;case 4:e.l+=4;break}return e.l+=8,t}function cb(e,t){return At(e,t)}function db(e,t){return At(e,t)}function ub(e){var t=e.read_shift(2),r=e.read_shift(2)-4,a=[t];switch(t){case 4:case 5:case 7:case 8:case 9:case 10:case 11:case 13:a[1]=lb(e);break;case 6:a[1]=db(e,r);break;case 14:case 15:a[1]=e.read_shift(r===1?1:2);break;default:throw new Error("Unrecognized ExtProp type: "+t+" "+r)}return a}function hb(e,t){var r=e.l+t;e.l+=2;var a=e.read_shift(2);e.l+=2;for(var i=e.read_shift(2),n=[];i-- >0;)n.push(ub(e,r-e.l));return{ixfe:a,ext:n}}function fb(e,t){t.forEach(function(r){switch(r[0]){}})}function pb(e,t){return{flags:e.read_shift(4),version:e.read_shift(4),name:Tt(e)}}function gb(e){for(var t=[],r=e.read_shift(4);r-- >0;)t.push([e.read_shift(4),e.read_shift(4)]);return t}function mb(e){return e.l+=4,e.read_shift(4)!=0}function vb(e,t,r){var a={Types:[],Cell:[],Value:[]},i=r||{},n=[],o=!1,s=2;return Ur(e,function(l,c,d){switch(d){case 335:a.Types.push({name:l.name});break;case 51:l.forEach(function(u){s==1?a.Cell.push({type:a.Types[u[0]-1].name,index:u[1]}):s==0&&a.Value.push({type:a.Types[u[0]-1].name,index:u[1]})});break;case 337:s=l?1:0;break;case 338:s=2;break;case 35:n.push(d),o=!0;break;case 36:n.pop(),o=!1;break;default:if(!c.T){if(!o||i.WTF&&n[n.length-1]!=35)throw new Error("Unexpected record 0x"+d.toString(16))}}}),a}function xb(e,t,r){var a={Types:[],Cell:[],Value:[]};if(!e)return a;var i=!1,n=2,o;return e.replace(Ft,function(s){var l=me(s);switch(Sr(l[0])){case"<?xml":break;case"<metadata":case"</metadata>":break;case"<metadataTypes":case"</metadataTypes>":break;case"<metadataType":a.Types.push({name:l.name});break;case"</metadataType>":break;case"<futureMetadata":for(var c=0;c<a.Types.length;++c)a.Types[c].name==l.name&&(o=a.Types[c]);break;case"</futureMetadata>":break;case"<bk>":break;case"</bk>":break;case"<rc":n==1?a.Cell.push({type:a.Types[l.t-1].name,index:+l.v}):n==0&&a.Value.push({type:a.Types[l.t-1].name,index:+l.v});break;case"</rc>":break;case"<cellMetadata":n=1;break;case"</cellMetadata>":n=2;break;case"<valueMetadata":n=0;break;case"</valueMetadata>":n=2;break;case"<extLst":case"<extLst>":case"</extLst>":case"<extLst/>":break;case"<ext":i=!0;break;case"</ext>":i=!1;break;case"<rvb":if(!o)break;o.offsets||(o.offsets=[]),o.offsets.push(+l.i);break;default:if(!i&&r.WTF)throw new Error("unrecognized "+l[0]+" in metadata")}return s}),a}function bb(e){var t=[];if(!e)return t;var r=1;return(e.match(Ft)||[]).forEach(function(a){var i=me(a);switch(i[0]){case"<?xml":break;case"<calcChain":case"<calcChain>":case"</calcChain>":break;case"<c":delete i[0],i.i?r=i.i:i.i=r,t.push(i);break}}),t}function wb(e){var t={};t.i=e.read_shift(4);var r={};r.r=e.read_shift(4),r.c=e.read_shift(4),t.r=we(r);var a=e.read_shift(1);return a&2&&(t.l="1"),a&8&&(t.a="1"),t}function yb(e,t,r){var a=[];return Ur(e,function(n,o,s){switch(s){case 63:a.push(n);break;default:if(!o.T)throw new Error("Unexpected record 0x"+s.toString(16))}}),a}function _b(e,t,r,a){if(!e)return e;var i=a||{},n=!1;Ur(e,function(s,l,c){switch(c){case 359:case 363:case 364:case 366:case 367:case 368:case 369:case 370:case 371:case 472:case 577:case 578:case 579:case 580:case 581:case 582:case 583:case 584:case 585:case 586:case 587:break;case 35:n=!0;break;case 36:n=!1;break;default:if(!l.T){if(!n||i.WTF)throw new Error("Unexpected record 0x"+c.toString(16))}}},i)}function kb(e,t){if(!e)return"??";var r=(e.match(/<c:chart [^>]*r:id="([^"]*)"/)||["",""])[1];return t["!id"][r].Target}function t0(e,t,r,a){var i=Array.isArray(e),n;t.forEach(function(o){var s=Pt(o.ref);if(i?(e[s.r]||(e[s.r]=[]),n=e[s.r][s.c]):n=e[o.ref],!n){n={t:"z"},i?e[s.r][s.c]=n:e[o.ref]=n;var l=Ze(e["!ref"]||"BDWGO1000001:A1");l.s.r>s.r&&(l.s.r=s.r),l.e.r<s.r&&(l.e.r=s.r),l.s.c>s.c&&(l.s.c=s.c),l.e.c<s.c&&(l.e.c=s.c);var c=De(l);c!==e["!ref"]&&(e["!ref"]=c)}n.c||(n.c=[]);var d={a:o.author,t:o.t,r:o.r,T:r};o.h&&(d.h=o.h);for(var u=n.c.length-1;u>=0;--u){if(!r&&n.c[u].T)return;r&&!n.c[u].T&&n.c.splice(u,1)}if(r&&a){for(u=0;u<a.length;++u)if(d.a==a[u].id){d.a=a[u].name||d.a;break}}n.c.push(d)})}function Eb(e,t){if(e.match(/<(?:\w+:)?comments *\/>/))return[];var r=[],a=[],i=e.match(/<(?:\w+:)?authors>([\s\S]*)<\/(?:\w+:)?authors>/);i&&i[1]&&i[1].split(/<\/\w*:?author>/).forEach(function(o){if(!(o===""||o.trim()==="")){var s=o.match(/<(?:\w+:)?author[^>]*>(.*)/);s&&r.push(s[1])}});var n=e.match(/<(?:\w+:)?commentList>([\s\S]*)<\/(?:\w+:)?commentList>/);return n&&n[1]&&n[1].split(/<\/\w*:?comment>/).forEach(function(o){if(!(o===""||o.trim()==="")){var s=o.match(/<(?:\w+:)?comment[^>]*>/);if(s){var l=me(s[0]),c={author:l.authorId&&r[l.authorId]||"sheetjsghost",ref:l.ref,guid:l.guid},d=Pt(l.ref);if(!(t.sheetRows&&t.sheetRows<=d.r)){var u=o.match(/<(?:\w+:)?text>([\s\S]*)<\/(?:\w+:)?text>/),f=!!u&&!!u[1]&&ul(u[1])||{r:"",t:"",h:""};c.r=f.r,f.r=="<t></t>"&&(f.t=f.h=""),c.t=(f.t||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`),t.cellHTML&&(c.h=f.h),a.push(c)}}}}),a}function Tb(e,t){var r=[],a=!1,i={},n=0;return e.replace(Ft,function(s,l){var c=me(s);switch(Sr(c[0])){case"<?xml":break;case"<ThreadedComments":break;case"</ThreadedComments>":break;case"<threadedComment":i={author:c.personId,guid:c.id,ref:c.ref,T:1};break;case"</threadedComment>":i.t!=null&&r.push(i);break;case"<text>":case"<text":n=l+s.length;break;case"</text>":i.t=e.slice(n,l).replace(/\r\n/g,`
`).replace(/\r/g,`
`);break;case"<mentions":case"<mentions>":a=!0;break;case"</mentions>":a=!1;break;case"<extLst":case"<extLst>":case"</extLst>":case"<extLst/>":break;case"<ext":a=!0;break;case"</ext>":a=!1;break;default:if(!a&&t.WTF)throw new Error("unrecognized "+c[0]+" in threaded comments")}return s}),r}function Ab(e,t){var r=[],a=!1;return e.replace(Ft,function(n){var o=me(n);switch(Sr(o[0])){case"<?xml":break;case"<personList":break;case"</personList>":break;case"<person":r.push({name:o.displayname,id:o.id});break;case"</person>":break;case"<extLst":case"<extLst>":case"</extLst>":case"<extLst/>":break;case"<ext":a=!0;break;case"</ext>":a=!1;break;default:if(!a&&t.WTF)throw new Error("unrecognized "+o[0]+" in threaded comments")}return n}),r}function Sb(e){var t={};t.iauthor=e.read_shift(4);var r=Ua(e);return t.rfx=r.s,t.ref=we(r.s),e.l+=16,t}var Cb=Tt;function Fb(e,t){var r=[],a=[],i={},n=!1;return Ur(e,function(s,l,c){switch(c){case 632:a.push(s);break;case 635:i=s;break;case 637:i.t=s.t,i.h=s.h,i.r=s.r;break;case 636:if(i.author=a[i.iauthor],delete i.iauthor,t.sheetRows&&i.rfx&&t.sheetRows<=i.rfx.r)break;i.t||(i.t=""),delete i.rfx,r.push(i);break;case 3072:break;case 35:n=!0;break;case 36:n=!1;break;case 37:break;case 38:break;default:if(!l.T){if(!n||t.WTF)throw new Error("Unexpected record 0x"+c.toString(16))}}}),r}var Db="application/vnd.ms-office.vbaProject";function Ob(e){var t=Fe.utils.cfb_new({root:"R"});return e.FullPaths.forEach(function(r,a){if(!(r.slice(-1)==="/"||!r.match(/_VBA_PROJECT_CUR/))){var i=r.replace(/^[^\/]*/,"R").replace(/\/_VBA_PROJECT_CUR\u0000*/,"");Fe.utils.cfb_add(t,i,e.FileIndex[a].content)}}),Fe.write(t)}function Ib(){return{"!type":"dialog"}}function Pb(){return{"!type":"dialog"}}function Rb(){return{"!type":"macro"}}function $b(){return{"!type":"macro"}}var Za=function(){var e=/(^|[^A-Za-z_])R(\[?-?\d+\]|[1-9]\d*|)C(\[?-?\d+\]|[1-9]\d*|)(?![A-Za-z0-9_])/g,t={r:0,c:0};function r(a,i,n,o){var s=!1,l=!1;n.length==0?l=!0:n.charAt(0)=="["&&(l=!0,n=n.slice(1,-1)),o.length==0?s=!0:o.charAt(0)=="["&&(s=!0,o=o.slice(1,-1));var c=n.length>0?parseInt(n,10)|0:0,d=o.length>0?parseInt(o,10)|0:0;return s?d+=t.c:--d,l?c+=t.r:--c,i+(s?"":"$")+ct(d)+(l?"":"$")+xt(c)}return function(i,n){return t=n,i.replace(e,r)}}(),fu=/(^|[^._A-Z0-9])([$]?)([A-Z]{1,2}|[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D])([$]?)(10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})(?![_.\(A-Za-z0-9])/g,Lb=function(){return function(t,r){return t.replace(fu,function(a,i,n,o,s,l){var c=nl(o)-(n?0:r.c),d=il(l)-(s?0:r.r),u=d==0?"":s?d+1:"["+d+"]",f=c==0?"":n?c+1:"["+c+"]";return i+"R"+u+"C"+f})}}();function pu(e,t){return e.replace(fu,function(r,a,i,n,o,s){return a+(i=="$"?i+n:ct(nl(n)+t.c))+(o=="$"?o+s:xt(il(s)+t.r))})}function Nb(e,t,r){var a=ui(t),i=a.s,n=Pt(r),o={r:n.r-i.r,c:n.c-i.c};return pu(e,o)}function zb(e){return e.length!=1}function r0(e){return e.replace(/_xlfn\./g,"")}function rt(e){e.l+=1}function na(e,t){var r=e.read_shift(2);return[r&16383,r>>14&1,r>>15&1]}function gu(e,t,r){var a=2;if(r){if(r.biff>=2&&r.biff<=5)return mu(e);r.biff==12&&(a=4)}var i=e.read_shift(a),n=e.read_shift(a),o=na(e),s=na(e);return{s:{r:i,c:o[0],cRel:o[1],rRel:o[2]},e:{r:n,c:s[0],cRel:s[1],rRel:s[2]}}}function mu(e){var t=na(e),r=na(e),a=e.read_shift(1),i=e.read_shift(1);return{s:{r:t[0],c:a,cRel:t[1],rRel:t[2]},e:{r:r[0],c:i,cRel:r[1],rRel:r[2]}}}function Mb(e,t,r){if(r.biff<8)return mu(e);var a=e.read_shift(r.biff==12?4:2),i=e.read_shift(r.biff==12?4:2),n=na(e),o=na(e);return{s:{r:a,c:n[0],cRel:n[1],rRel:n[2]},e:{r:i,c:o[0],cRel:o[1],rRel:o[2]}}}function vu(e,t,r){if(r&&r.biff>=2&&r.biff<=5)return Bb(e);var a=e.read_shift(r&&r.biff==12?4:2),i=na(e);return{r:a,c:i[0],cRel:i[1],rRel:i[2]}}function Bb(e){var t=na(e),r=e.read_shift(1);return{r:t[0],c:r,cRel:t[1],rRel:t[2]}}function Ub(e){var t=e.read_shift(2),r=e.read_shift(2);return{r:t,c:r&255,fQuoted:!!(r&16384),cRel:r>>15,rRel:r>>15}}function Vb(e,t,r){var a=r&&r.biff?r.biff:8;if(a>=2&&a<=5)return Hb(e);var i=e.read_shift(a>=12?4:2),n=e.read_shift(2),o=(n&16384)>>14,s=(n&32768)>>15;if(n&=16383,s==1)for(;i>524287;)i-=1048576;if(o==1)for(;n>8191;)n=n-16384;return{r:i,c:n,cRel:o,rRel:s}}function Hb(e){var t=e.read_shift(2),r=e.read_shift(1),a=(t&32768)>>15,i=(t&16384)>>14;return t&=16383,a==1&&t>=8192&&(t=t-16384),i==1&&r>=128&&(r=r-256),{r:t,c:r,cRel:i,rRel:a}}function jb(e,t,r){var a=(e[e.l++]&96)>>5,i=gu(e,r.biff>=2&&r.biff<=5?6:8,r);return[a,i]}function Wb(e,t,r){var a=(e[e.l++]&96)>>5,i=e.read_shift(2,"i"),n=8;if(r)switch(r.biff){case 5:e.l+=12,n=6;break;case 12:n=12;break}var o=gu(e,n,r);return[a,i,o]}function Gb(e,t,r){var a=(e[e.l++]&96)>>5;return e.l+=r&&r.biff>8?12:r.biff<8?6:8,[a]}function Kb(e,t,r){var a=(e[e.l++]&96)>>5,i=e.read_shift(2),n=8;if(r)switch(r.biff){case 5:e.l+=12,n=6;break;case 12:n=12;break}return e.l+=n,[a,i]}function Xb(e,t,r){var a=(e[e.l++]&96)>>5,i=Mb(e,t-1,r);return[a,i]}function Yb(e,t,r){var a=(e[e.l++]&96)>>5;return e.l+=r.biff==2?6:r.biff==12?14:7,[a]}function a0(e){var t=e[e.l+1]&1,r=1;return e.l+=4,[t,r]}function qb(e,t,r){e.l+=2;for(var a=e.read_shift(r&&r.biff==2?1:2),i=[],n=0;n<=a;++n)i.push(e.read_shift(r&&r.biff==2?1:2));return i}function Zb(e,t,r){var a=e[e.l+1]&255?1:0;return e.l+=2,[a,e.read_shift(r&&r.biff==2?1:2)]}function Jb(e,t,r){var a=e[e.l+1]&255?1:0;return e.l+=2,[a,e.read_shift(r&&r.biff==2?1:2)]}function Qb(e){var t=e[e.l+1]&255?1:0;return e.l+=2,[t,e.read_shift(2)]}function ew(e,t,r){var a=e[e.l+1]&255?1:0;return e.l+=r&&r.biff==2?3:4,[a]}function xu(e){var t=e.read_shift(1),r=e.read_shift(1);return[t,r]}function tw(e){return e.read_shift(2),xu(e)}function rw(e){return e.read_shift(2),xu(e)}function aw(e,t,r){var a=(e[e.l]&96)>>5;e.l+=1;var i=vu(e,0,r);return[a,i]}function iw(e,t,r){var a=(e[e.l]&96)>>5;e.l+=1;var i=Vb(e,0,r);return[a,i]}function nw(e,t,r){var a=(e[e.l]&96)>>5;e.l+=1;var i=e.read_shift(2);r&&r.biff==5&&(e.l+=12);var n=vu(e,0,r);return[a,i,n]}function ow(e,t,r){var a=(e[e.l]&96)>>5;e.l+=1;var i=e.read_shift(r&&r.biff<=3?1:2);return[sy[i],yu[i],a]}function sw(e,t,r){var a=e[e.l++],i=e.read_shift(1),n=r&&r.biff<=3?[a==88?-1:0,e.read_shift(1)]:lw(e);return[i,(n[0]===0?yu:oy)[n[1]]]}function lw(e){return[e[e.l+1]>>7,e.read_shift(2)&32767]}function cw(e,t,r){e.l+=r&&r.biff==2?3:4}function dw(e,t,r){if(e.l++,r&&r.biff==12)return[e.read_shift(4,"i"),0];var a=e.read_shift(2),i=e.read_shift(r&&r.biff==2?1:2);return[a,i]}function uw(e){return e.l++,Va[e.read_shift(1)]}function hw(e){return e.l++,e.read_shift(2)}function fw(e){return e.l++,e.read_shift(1)!==0}function pw(e){return e.l++,kt(e)}function gw(e,t,r){return e.l++,wn(e,t-1,r)}function mw(e,t){var r=[e.read_shift(1)];if(t==12)switch(r[0]){case 2:r[0]=4;break;case 4:r[0]=16;break;case 0:r[0]=1;break;case 1:r[0]=2;break}switch(r[0]){case 4:r[1]=tt(e,1)?"TRUE":"FALSE",t!=12&&(e.l+=7);break;case 37:case 16:r[1]=Va[e[e.l]],e.l+=t==12?4:8;break;case 0:e.l+=8;break;case 1:r[1]=kt(e);break;case 2:r[1]=Ha(e,0,{biff:t>0&&t<8?2:t});break;default:throw new Error("Bad SerAr: "+r[0])}return r}function vw(e,t,r){for(var a=e.read_shift(r.biff==12?4:2),i=[],n=0;n!=a;++n)i.push((r.biff==12?Ua:Fo)(e));return i}function xw(e,t,r){var a=0,i=0;r.biff==12?(a=e.read_shift(4),i=e.read_shift(4)):(i=1+e.read_shift(1),a=1+e.read_shift(2)),r.biff>=2&&r.biff<8&&(--a,--i==0&&(i=256));for(var n=0,o=[];n!=a&&(o[n]=[]);++n)for(var s=0;s!=i;++s)o[n][s]=mw(e,r.biff);return o}function bw(e,t,r){var a=e.read_shift(1)>>>5&3,i=!r||r.biff>=8?4:2,n=e.read_shift(i);switch(r.biff){case 2:e.l+=5;break;case 3:case 4:e.l+=8;break;case 5:e.l+=12;break}return[a,0,n]}function ww(e,t,r){if(r.biff==5)return yw(e);var a=e.read_shift(1)>>>5&3,i=e.read_shift(2),n=e.read_shift(4);return[a,i,n]}function yw(e){var t=e.read_shift(1)>>>5&3,r=e.read_shift(2,"i");e.l+=8;var a=e.read_shift(2);return e.l+=12,[t,r,a]}function _w(e,t,r){var a=e.read_shift(1)>>>5&3;e.l+=r&&r.biff==2?3:4;var i=e.read_shift(r&&r.biff==2?1:2);return[a,i]}function kw(e,t,r){var a=e.read_shift(1)>>>5&3,i=e.read_shift(r&&r.biff==2?1:2);return[a,i]}function Ew(e,t,r){var a=e.read_shift(1)>>>5&3;return e.l+=4,r.biff<8&&e.l--,r.biff==12&&(e.l+=2),[a]}function Tw(e,t,r){var a=(e[e.l++]&96)>>5,i=e.read_shift(2),n=4;if(r)switch(r.biff){case 5:n=15;break;case 12:n=6;break}return e.l+=n,[a,i]}var Aw=At,Sw=At,Cw=At;function _n(e,t,r){return e.l+=2,[Ub(e)]}function fl(e){return e.l+=6,[]}var Fw=_n,Dw=fl,Ow=fl,Iw=_n;function bu(e){return e.l+=2,[it(e),e.read_shift(2)&1]}var Pw=_n,Rw=bu,$w=fl,Lw=_n,Nw=_n,zw=["Data","All","Headers","??","?Data2","??","?DataHeaders","??","Totals","??","??","??","?DataTotals","??","??","??","?Current"];function Mw(e){e.l+=2;var t=e.read_shift(2),r=e.read_shift(2),a=e.read_shift(4),i=e.read_shift(2),n=e.read_shift(2),o=zw[r>>2&31];return{ixti:t,coltype:r&3,rt:o,idx:a,c:i,C:n}}function Bw(e){return e.l+=2,[e.read_shift(4)]}function Uw(e,t,r){return e.l+=5,e.l+=2,e.l+=r.biff==2?1:4,["PTGSHEET"]}function Vw(e,t,r){return e.l+=r.biff==2?4:5,["PTGENDSHEET"]}function Hw(e){var t=e.read_shift(1)>>>5&3,r=e.read_shift(2);return[t,r]}function jw(e){var t=e.read_shift(1)>>>5&3,r=e.read_shift(2);return[t,r]}function Ww(e){return e.l+=4,[0,0]}var i0={1:{n:"PtgExp",f:dw},2:{n:"PtgTbl",f:Cw},3:{n:"PtgAdd",f:rt},4:{n:"PtgSub",f:rt},5:{n:"PtgMul",f:rt},6:{n:"PtgDiv",f:rt},7:{n:"PtgPower",f:rt},8:{n:"PtgConcat",f:rt},9:{n:"PtgLt",f:rt},10:{n:"PtgLe",f:rt},11:{n:"PtgEq",f:rt},12:{n:"PtgGe",f:rt},13:{n:"PtgGt",f:rt},14:{n:"PtgNe",f:rt},15:{n:"PtgIsect",f:rt},16:{n:"PtgUnion",f:rt},17:{n:"PtgRange",f:rt},18:{n:"PtgUplus",f:rt},19:{n:"PtgUminus",f:rt},20:{n:"PtgPercent",f:rt},21:{n:"PtgParen",f:rt},22:{n:"PtgMissArg",f:rt},23:{n:"PtgStr",f:gw},26:{n:"PtgSheet",f:Uw},27:{n:"PtgEndSheet",f:Vw},28:{n:"PtgErr",f:uw},29:{n:"PtgBool",f:fw},30:{n:"PtgInt",f:hw},31:{n:"PtgNum",f:pw},32:{n:"PtgArray",f:Yb},33:{n:"PtgFunc",f:ow},34:{n:"PtgFuncVar",f:sw},35:{n:"PtgName",f:bw},36:{n:"PtgRef",f:aw},37:{n:"PtgArea",f:jb},38:{n:"PtgMemArea",f:_w},39:{n:"PtgMemErr",f:Aw},40:{n:"PtgMemNoMem",f:Sw},41:{n:"PtgMemFunc",f:kw},42:{n:"PtgRefErr",f:Ew},43:{n:"PtgAreaErr",f:Gb},44:{n:"PtgRefN",f:iw},45:{n:"PtgAreaN",f:Xb},46:{n:"PtgMemAreaN",f:Hw},47:{n:"PtgMemNoMemN",f:jw},57:{n:"PtgNameX",f:ww},58:{n:"PtgRef3d",f:nw},59:{n:"PtgArea3d",f:Wb},60:{n:"PtgRefErr3d",f:Tw},61:{n:"PtgAreaErr3d",f:Kb},255:{}},Gw={64:32,96:32,65:33,97:33,66:34,98:34,67:35,99:35,68:36,100:36,69:37,101:37,70:38,102:38,71:39,103:39,72:40,104:40,73:41,105:41,74:42,106:42,75:43,107:43,76:44,108:44,77:45,109:45,78:46,110:46,79:47,111:47,88:34,120:34,89:57,121:57,90:58,122:58,91:59,123:59,92:60,124:60,93:61,125:61},Kw={1:{n:"PtgElfLel",f:bu},2:{n:"PtgElfRw",f:Lw},3:{n:"PtgElfCol",f:Fw},6:{n:"PtgElfRwV",f:Nw},7:{n:"PtgElfColV",f:Iw},10:{n:"PtgElfRadical",f:Pw},11:{n:"PtgElfRadicalS",f:$w},13:{n:"PtgElfColS",f:Dw},15:{n:"PtgElfColSV",f:Ow},16:{n:"PtgElfRadicalLel",f:Rw},25:{n:"PtgList",f:Mw},29:{n:"PtgSxName",f:Bw},255:{}},Xw={0:{n:"PtgAttrNoop",f:Ww},1:{n:"PtgAttrSemi",f:ew},2:{n:"PtgAttrIf",f:Jb},4:{n:"PtgAttrChoose",f:qb},8:{n:"PtgAttrGoto",f:Zb},16:{n:"PtgAttrSum",f:cw},32:{n:"PtgAttrBaxcel",f:a0},33:{n:"PtgAttrBaxcel",f:a0},64:{n:"PtgAttrSpace",f:tw},65:{n:"PtgAttrSpaceSemi",f:rw},128:{n:"PtgAttrIfError",f:Qb},255:{}};function kn(e,t,r,a){if(a.biff<8)return At(e,t);for(var i=e.l+t,n=[],o=0;o!==r.length;++o)switch(r[o][0]){case"PtgArray":r[o][1]=xw(e,0,a),n.push(r[o][1]);break;case"PtgMemArea":r[o][2]=vw(e,r[o][1],a),n.push(r[o][2]);break;case"PtgExp":a&&a.biff==12&&(r[o][1][1]=e.read_shift(4),n.push(r[o][1]));break;case"PtgList":case"PtgElfRadicalS":case"PtgElfColS":case"PtgElfColSV":throw"Unsupported "+r[o][0]}return t=i-e.l,t!==0&&n.push(At(e,t)),n}function En(e,t,r){for(var a=e.l+t,i,n,o=[];a!=e.l;)t=a-e.l,n=e[e.l],i=i0[n]||i0[Gw[n]],(n===24||n===25)&&(i=(n===24?Kw:Xw)[e[e.l+1]]),!i||!i.f?At(e,t):o.push([i.n,i.f(e,t,r)]);return o}function Yw(e){for(var t=[],r=0;r<e.length;++r){for(var a=e[r],i=[],n=0;n<a.length;++n){var o=a[n];if(o)switch(o[0]){case 2:i.push('"'+o[1].replace(/"/g,'""')+'"');break;default:i.push(o[1])}else i.push("")}t.push(i.join(","))}return t.join(";")}var qw={PtgAdd:"+",PtgConcat:"&",PtgDiv:"/",PtgEq:"=",PtgGe:">=",PtgGt:">",PtgLe:"<=",PtgLt:"<",PtgMul:"*",PtgNe:"<>",PtgPower:"^",PtgSub:"-"};function Zw(e,t){if(!e&&!(t&&t.biff<=5&&t.biff>=2))throw new Error("empty sheet name");return/[^\w\u4E00-\u9FFF\u3040-\u30FF]/.test(e)?"'"+e+"'":e}function wu(e,t,r){if(!e)return"SH33TJSERR0";if(r.biff>8&&(!e.XTI||!e.XTI[t]))return e.SheetNames[t];if(!e.XTI)return"SH33TJSERR6";var a=e.XTI[t];if(r.biff<8)return t>1e4&&(t-=65536),t<0&&(t=-t),t==0?"":e.XTI[t-1];if(!a)return"SH33TJSERR1";var i="";if(r.biff>8)switch(e[a[0]][0]){case 357:return i=a[1]==-1?"#REF":e.SheetNames[a[1]],a[1]==a[2]?i:i+":"+e.SheetNames[a[2]];case 358:return r.SID!=null?e.SheetNames[r.SID]:"SH33TJSSAME"+e[a[0]][0];case 355:default:return"SH33TJSSRC"+e[a[0]][0]}switch(e[a[0]][0][0]){case 1025:return i=a[1]==-1?"#REF":e.SheetNames[a[1]]||"SH33TJSERR3",a[1]==a[2]?i:i+":"+e.SheetNames[a[2]];case 14849:return e[a[0]].slice(1).map(function(n){return n.Name}).join(";;");default:return e[a[0]][0][3]?(i=a[1]==-1?"#REF":e[a[0]][0][3][a[1]]||"SH33TJSERR4",a[1]==a[2]?i:i+":"+e[a[0]][0][3][a[2]]):"SH33TJSERR2"}}function n0(e,t,r){var a=wu(e,t,r);return a=="#REF"?a:Zw(a,r)}function _t(e,t,r,a,i){var n=i&&i.biff||8,o={s:{c:0,r:0}},s=[],l,c,d,u=0,f=0,h,p="";if(!e[0]||!e[0][0])return"";for(var g=-1,m="",w=0,S=e[0].length;w<S;++w){var x=e[0][w];switch(x[0]){case"PtgUminus":s.push("-"+s.pop());break;case"PtgUplus":s.push("+"+s.pop());break;case"PtgPercent":s.push(s.pop()+"%");break;case"PtgAdd":case"PtgConcat":case"PtgDiv":case"PtgEq":case"PtgGe":case"PtgGt":case"PtgLe":case"PtgLt":case"PtgMul":case"PtgNe":case"PtgPower":case"PtgSub":if(l=s.pop(),c=s.pop(),g>=0){switch(e[0][g][1][0]){case 0:m=Ye(" ",e[0][g][1][1]);break;case 1:m=Ye("\r",e[0][g][1][1]);break;default:if(m="",i.WTF)throw new Error("Unexpected PtgAttrSpaceType "+e[0][g][1][0])}c=c+m,g=-1}s.push(c+qw[x[0]]+l);break;case"PtgIsect":l=s.pop(),c=s.pop(),s.push(c+" "+l);break;case"PtgUnion":l=s.pop(),c=s.pop(),s.push(c+","+l);break;case"PtgRange":l=s.pop(),c=s.pop(),s.push(c+":"+l);break;case"PtgAttrChoose":break;case"PtgAttrGoto":break;case"PtgAttrIf":break;case"PtgAttrIfError":break;case"PtgRef":d=Ni(x[1][1],o,i),s.push(zi(d,n));break;case"PtgRefN":d=r?Ni(x[1][1],r,i):x[1][1],s.push(zi(d,n));break;case"PtgRef3d":u=x[1][1],d=Ni(x[1][2],o,i),p=n0(a,u,i),s.push(p+"!"+zi(d,n));break;case"PtgFunc":case"PtgFuncVar":var D=x[1][0],M=x[1][1];D||(D=0),D&=127;var I=D==0?[]:s.slice(-D);s.length-=D,M==="User"&&(M=I.shift()),s.push(M+"("+I.join(",")+")");break;case"PtgBool":s.push(x[1]?"TRUE":"FALSE");break;case"PtgInt":s.push(x[1]);break;case"PtgNum":s.push(String(x[1]));break;case"PtgStr":s.push('"'+x[1].replace(/"/g,'""')+'"');break;case"PtgErr":s.push(x[1]);break;case"PtgAreaN":h=Mc(x[1][1],r?{s:r}:o,i),s.push(Wo(h,i));break;case"PtgArea":h=Mc(x[1][1],o,i),s.push(Wo(h,i));break;case"PtgArea3d":u=x[1][1],h=x[1][2],p=n0(a,u,i),s.push(p+"!"+Wo(h,i));break;case"PtgAttrSum":s.push("SUM("+s.pop()+")");break;case"PtgAttrBaxcel":case"PtgAttrSemi":break;case"PtgName":f=x[1][2];var T=(a.names||[])[f-1]||(a[0]||[])[f],B=T?T.Name:"SH33TJSNAME"+String(f);B&&B.slice(0,6)=="_xlfn."&&!i.xlfn&&(B=B.slice(6)),s.push(B);break;case"PtgNameX":var O=x[1][1];f=x[1][2];var j;if(i.biff<=5)O<0&&(O=-O),a[O]&&(j=a[O][f]);else{var U="";if(((a[O]||[])[0]||[])[0]==14849||(((a[O]||[])[0]||[])[0]==1025?a[O][f]&&a[O][f].itab>0&&(U=a.SheetNames[a[O][f].itab-1]+"!"):U=a.SheetNames[f-1]+"!"),a[O]&&a[O][f])U+=a[O][f].Name;else if(a[0]&&a[0][f])U+=a[0][f].Name;else{var N=(wu(a,O,i)||"").split(";;");N[f-1]?U=N[f-1]:U+="SH33TJSERRX"}s.push(U);break}j||(j={Name:"SH33TJSERRY"}),s.push(j.Name);break;case"PtgParen":var Z="(",se=")";if(g>=0){switch(m="",e[0][g][1][0]){case 2:Z=Ye(" ",e[0][g][1][1])+Z;break;case 3:Z=Ye("\r",e[0][g][1][1])+Z;break;case 4:se=Ye(" ",e[0][g][1][1])+se;break;case 5:se=Ye("\r",e[0][g][1][1])+se;break;default:if(i.WTF)throw new Error("Unexpected PtgAttrSpaceType "+e[0][g][1][0])}g=-1}s.push(Z+s.pop()+se);break;case"PtgRefErr":s.push("#REF!");break;case"PtgRefErr3d":s.push("#REF!");break;case"PtgExp":d={c:x[1][1],r:x[1][0]};var re={c:r.c,r:r.r};if(a.sharedf[we(d)]){var ce=a.sharedf[we(d)];s.push(_t(ce,o,re,a,i))}else{var ae=!1;for(l=0;l!=a.arrayf.length;++l)if(c=a.arrayf[l],!(d.c<c[0].s.c||d.c>c[0].e.c)&&!(d.r<c[0].s.r||d.r>c[0].e.r)){s.push(_t(c[1],o,re,a,i)),ae=!0;break}ae||s.push(x[1])}break;case"PtgArray":s.push("{"+Yw(x[1])+"}");break;case"PtgMemArea":break;case"PtgAttrSpace":case"PtgAttrSpaceSemi":g=w;break;case"PtgTbl":break;case"PtgMemErr":break;case"PtgMissArg":s.push("");break;case"PtgAreaErr":s.push("#REF!");break;case"PtgAreaErr3d":s.push("#REF!");break;case"PtgList":s.push("Table"+x[1].idx+"[#"+x[1].rt+"]");break;case"PtgMemAreaN":case"PtgMemNoMemN":case"PtgAttrNoop":case"PtgSheet":case"PtgEndSheet":break;case"PtgMemFunc":break;case"PtgMemNoMem":break;case"PtgElfCol":case"PtgElfColS":case"PtgElfColSV":case"PtgElfColV":case"PtgElfLel":case"PtgElfRadical":case"PtgElfRadicalLel":case"PtgElfRadicalS":case"PtgElfRw":case"PtgElfRwV":throw new Error("Unsupported ELFs");case"PtgSxName":throw new Error("Unrecognized Formula Token: "+String(x));default:throw new Error("Unrecognized Formula Token: "+String(x))}var Te=["PtgAttrSpace","PtgAttrSpaceSemi","PtgAttrGoto"];if(i.biff!=3&&g>=0&&Te.indexOf(e[0][w][0])==-1){x=e[0][g];var W=!0;switch(x[1][0]){case 4:W=!1;case 0:m=Ye(" ",x[1][1]);break;case 5:W=!1;case 1:m=Ye("\r",x[1][1]);break;default:if(m="",i.WTF)throw new Error("Unexpected PtgAttrSpaceType "+x[1][0])}s.push((W?m:"")+s.pop()+(W?"":m)),g=-1}}if(s.length>1&&i.WTF)throw new Error("bad formula stack");return s[0]}function Jw(e,t,r){var a=e.l+t,i=r.biff==2?1:2,n,o=e.read_shift(i);if(o==65535)return[[],At(e,t-2)];var s=En(e,o,r);return t!==o+i&&(n=kn(e,t-o-i,s,r)),e.l=a,[s,n]}function Qw(e,t,r){var a=e.l+t,i=r.biff==2?1:2,n,o=e.read_shift(i);if(o==65535)return[[],At(e,t-2)];var s=En(e,o,r);return t!==o+i&&(n=kn(e,t-o-i,s,r)),e.l=a,[s,n]}function ey(e,t,r,a){var i=e.l+t,n=En(e,a,r),o;return i!==e.l&&(o=kn(e,i-e.l,n,r)),[n,o]}function ty(e,t,r){var a=e.l+t,i,n=e.read_shift(2),o=En(e,n,r);return n==65535?[[],At(e,t-2)]:(t!==n+2&&(i=kn(e,a-n-2,o,r)),[o,i])}function ry(e){var t;if(Pr(e,e.l+6)!==65535)return[kt(e),"n"];switch(e[e.l]){case 0:return e.l+=8,["String","s"];case 1:return t=e[e.l+2]===1,e.l+=8,[t,"b"];case 2:return t=e[e.l+2],e.l+=8,[t,"e"];case 3:return e.l+=8,["","s"]}return[]}function Xo(e,t,r){var a=e.l+t,i=Cr(e);r.biff==2&&++e.l;var n=ry(e),o=e.read_shift(1);r.biff!=2&&(e.read_shift(1),r.biff>=5&&e.read_shift(4));var s=Qw(e,a-e.l,r);return{cell:i,val:n[0],formula:s,shared:o>>3&1,tt:n[1]}}function Do(e,t,r){var a=e.read_shift(4),i=En(e,a,r),n=e.read_shift(4),o=n>0?kn(e,n,i,r):null;return[i,o]}var ay=Do,Oo=Do,iy=Do,ny=Do,oy={0:"BEEP",1:"OPEN",2:"OPEN.LINKS",3:"CLOSE.ALL",4:"SAVE",5:"SAVE.AS",6:"FILE.DELETE",7:"PAGE.SETUP",8:"PRINT",9:"PRINTER.SETUP",10:"QUIT",11:"NEW.WINDOW",12:"ARRANGE.ALL",13:"WINDOW.SIZE",14:"WINDOW.MOVE",15:"FULL",16:"CLOSE",17:"RUN",22:"SET.PRINT.AREA",23:"SET.PRINT.TITLES",24:"SET.PAGE.BREAK",25:"REMOVE.PAGE.BREAK",26:"FONT",27:"DISPLAY",28:"PROTECT.DOCUMENT",29:"PRECISION",30:"A1.R1C1",31:"CALCULATE.NOW",32:"CALCULATION",34:"DATA.FIND",35:"EXTRACT",36:"DATA.DELETE",37:"SET.DATABASE",38:"SET.CRITERIA",39:"SORT",40:"DATA.SERIES",41:"TABLE",42:"FORMAT.NUMBER",43:"ALIGNMENT",44:"STYLE",45:"BORDER",46:"CELL.PROTECTION",47:"COLUMN.WIDTH",48:"UNDO",49:"CUT",50:"COPY",51:"PASTE",52:"CLEAR",53:"PASTE.SPECIAL",54:"EDIT.DELETE",55:"INSERT",56:"FILL.RIGHT",57:"FILL.DOWN",61:"DEFINE.NAME",62:"CREATE.NAMES",63:"FORMULA.GOTO",64:"FORMULA.FIND",65:"SELECT.LAST.CELL",66:"SHOW.ACTIVE.CELL",67:"GALLERY.AREA",68:"GALLERY.BAR",69:"GALLERY.COLUMN",70:"GALLERY.LINE",71:"GALLERY.PIE",72:"GALLERY.SCATTER",73:"COMBINATION",74:"PREFERRED",75:"ADD.OVERLAY",76:"GRIDLINES",77:"SET.PREFERRED",78:"AXES",79:"LEGEND",80:"ATTACH.TEXT",81:"ADD.ARROW",82:"SELECT.CHART",83:"SELECT.PLOT.AREA",84:"PATTERNS",85:"MAIN.CHART",86:"OVERLAY",87:"SCALE",88:"FORMAT.LEGEND",89:"FORMAT.TEXT",90:"EDIT.REPEAT",91:"PARSE",92:"JUSTIFY",93:"HIDE",94:"UNHIDE",95:"WORKSPACE",96:"FORMULA",97:"FORMULA.FILL",98:"FORMULA.ARRAY",99:"DATA.FIND.NEXT",100:"DATA.FIND.PREV",101:"FORMULA.FIND.NEXT",102:"FORMULA.FIND.PREV",103:"ACTIVATE",104:"ACTIVATE.NEXT",105:"ACTIVATE.PREV",106:"UNLOCKED.NEXT",107:"UNLOCKED.PREV",108:"COPY.PICTURE",109:"SELECT",110:"DELETE.NAME",111:"DELETE.FORMAT",112:"VLINE",113:"HLINE",114:"VPAGE",115:"HPAGE",116:"VSCROLL",117:"HSCROLL",118:"ALERT",119:"NEW",120:"CANCEL.COPY",121:"SHOW.CLIPBOARD",122:"MESSAGE",124:"PASTE.LINK",125:"APP.ACTIVATE",126:"DELETE.ARROW",127:"ROW.HEIGHT",128:"FORMAT.MOVE",129:"FORMAT.SIZE",130:"FORMULA.REPLACE",131:"SEND.KEYS",132:"SELECT.SPECIAL",133:"APPLY.NAMES",134:"REPLACE.FONT",135:"FREEZE.PANES",136:"SHOW.INFO",137:"SPLIT",138:"ON.WINDOW",139:"ON.DATA",140:"DISABLE.INPUT",142:"OUTLINE",143:"LIST.NAMES",144:"FILE.CLOSE",145:"SAVE.WORKBOOK",146:"DATA.FORM",147:"COPY.CHART",148:"ON.TIME",149:"WAIT",150:"FORMAT.FONT",151:"FILL.UP",152:"FILL.LEFT",153:"DELETE.OVERLAY",155:"SHORT.MENUS",159:"SET.UPDATE.STATUS",161:"COLOR.PALETTE",162:"DELETE.STYLE",163:"WINDOW.RESTORE",164:"WINDOW.MAXIMIZE",166:"CHANGE.LINK",167:"CALCULATE.DOCUMENT",168:"ON.KEY",169:"APP.RESTORE",170:"APP.MOVE",171:"APP.SIZE",172:"APP.MINIMIZE",173:"APP.MAXIMIZE",174:"BRING.TO.FRONT",175:"SEND.TO.BACK",185:"MAIN.CHART.TYPE",186:"OVERLAY.CHART.TYPE",187:"SELECT.END",188:"OPEN.MAIL",189:"SEND.MAIL",190:"STANDARD.FONT",191:"CONSOLIDATE",192:"SORT.SPECIAL",193:"GALLERY.3D.AREA",194:"GALLERY.3D.COLUMN",195:"GALLERY.3D.LINE",196:"GALLERY.3D.PIE",197:"VIEW.3D",198:"GOAL.SEEK",199:"WORKGROUP",200:"FILL.GROUP",201:"UPDATE.LINK",202:"PROMOTE",203:"DEMOTE",204:"SHOW.DETAIL",206:"UNGROUP",207:"OBJECT.PROPERTIES",208:"SAVE.NEW.OBJECT",209:"SHARE",210:"SHARE.NAME",211:"DUPLICATE",212:"APPLY.STYLE",213:"ASSIGN.TO.OBJECT",214:"OBJECT.PROTECTION",215:"HIDE.OBJECT",216:"SET.EXTRACT",217:"CREATE.PUBLISHER",218:"SUBSCRIBE.TO",219:"ATTRIBUTES",220:"SHOW.TOOLBAR",222:"PRINT.PREVIEW",223:"EDIT.COLOR",224:"SHOW.LEVELS",225:"FORMAT.MAIN",226:"FORMAT.OVERLAY",227:"ON.RECALC",228:"EDIT.SERIES",229:"DEFINE.STYLE",240:"LINE.PRINT",243:"ENTER.DATA",249:"GALLERY.RADAR",250:"MERGE.STYLES",251:"EDITION.OPTIONS",252:"PASTE.PICTURE",253:"PASTE.PICTURE.LINK",254:"SPELLING",256:"ZOOM",259:"INSERT.OBJECT",260:"WINDOW.MINIMIZE",265:"SOUND.NOTE",266:"SOUND.PLAY",267:"FORMAT.SHAPE",268:"EXTEND.POLYGON",269:"FORMAT.AUTO",272:"GALLERY.3D.BAR",273:"GALLERY.3D.SURFACE",274:"FILL.AUTO",276:"CUSTOMIZE.TOOLBAR",277:"ADD.TOOL",278:"EDIT.OBJECT",279:"ON.DOUBLECLICK",280:"ON.ENTRY",281:"WORKBOOK.ADD",282:"WORKBOOK.MOVE",283:"WORKBOOK.COPY",284:"WORKBOOK.OPTIONS",285:"SAVE.WORKSPACE",288:"CHART.WIZARD",289:"DELETE.TOOL",290:"MOVE.TOOL",291:"WORKBOOK.SELECT",292:"WORKBOOK.ACTIVATE",293:"ASSIGN.TO.TOOL",295:"COPY.TOOL",296:"RESET.TOOL",297:"CONSTRAIN.NUMERIC",298:"PASTE.TOOL",302:"WORKBOOK.NEW",305:"SCENARIO.CELLS",306:"SCENARIO.DELETE",307:"SCENARIO.ADD",308:"SCENARIO.EDIT",309:"SCENARIO.SHOW",310:"SCENARIO.SHOW.NEXT",311:"SCENARIO.SUMMARY",312:"PIVOT.TABLE.WIZARD",313:"PIVOT.FIELD.PROPERTIES",314:"PIVOT.FIELD",315:"PIVOT.ITEM",316:"PIVOT.ADD.FIELDS",318:"OPTIONS.CALCULATION",319:"OPTIONS.EDIT",320:"OPTIONS.VIEW",321:"ADDIN.MANAGER",322:"MENU.EDITOR",323:"ATTACH.TOOLBARS",324:"VBAActivate",325:"OPTIONS.CHART",328:"VBA.INSERT.FILE",330:"VBA.PROCEDURE.DEFINITION",336:"ROUTING.SLIP",338:"ROUTE.DOCUMENT",339:"MAIL.LOGON",342:"INSERT.PICTURE",343:"EDIT.TOOL",344:"GALLERY.DOUGHNUT",350:"CHART.TREND",352:"PIVOT.ITEM.PROPERTIES",354:"WORKBOOK.INSERT",355:"OPTIONS.TRANSITION",356:"OPTIONS.GENERAL",370:"FILTER.ADVANCED",373:"MAIL.ADD.MAILER",374:"MAIL.DELETE.MAILER",375:"MAIL.REPLY",376:"MAIL.REPLY.ALL",377:"MAIL.FORWARD",378:"MAIL.NEXT.LETTER",379:"DATA.LABEL",380:"INSERT.TITLE",381:"FONT.PROPERTIES",382:"MACRO.OPTIONS",383:"WORKBOOK.HIDE",384:"WORKBOOK.UNHIDE",385:"WORKBOOK.DELETE",386:"WORKBOOK.NAME",388:"GALLERY.CUSTOM",390:"ADD.CHART.AUTOFORMAT",391:"DELETE.CHART.AUTOFORMAT",392:"CHART.ADD.DATA",393:"AUTO.OUTLINE",394:"TAB.ORDER",395:"SHOW.DIALOG",396:"SELECT.ALL",397:"UNGROUP.SHEETS",398:"SUBTOTAL.CREATE",399:"SUBTOTAL.REMOVE",400:"RENAME.OBJECT",412:"WORKBOOK.SCROLL",413:"WORKBOOK.NEXT",414:"WORKBOOK.PREV",415:"WORKBOOK.TAB.SPLIT",416:"FULL.SCREEN",417:"WORKBOOK.PROTECT",420:"SCROLLBAR.PROPERTIES",421:"PIVOT.SHOW.PAGES",422:"TEXT.TO.COLUMNS",423:"FORMAT.CHARTTYPE",424:"LINK.FORMAT",425:"TRACER.DISPLAY",430:"TRACER.NAVIGATE",431:"TRACER.CLEAR",432:"TRACER.ERROR",433:"PIVOT.FIELD.GROUP",434:"PIVOT.FIELD.UNGROUP",435:"CHECKBOX.PROPERTIES",436:"LABEL.PROPERTIES",437:"LISTBOX.PROPERTIES",438:"EDITBOX.PROPERTIES",439:"PIVOT.REFRESH",440:"LINK.COMBO",441:"OPEN.TEXT",442:"HIDE.DIALOG",443:"SET.DIALOG.FOCUS",444:"ENABLE.OBJECT",445:"PUSHBUTTON.PROPERTIES",446:"SET.DIALOG.DEFAULT",447:"FILTER",448:"FILTER.SHOW.ALL",449:"CLEAR.OUTLINE",450:"FUNCTION.WIZARD",451:"ADD.LIST.ITEM",452:"SET.LIST.ITEM",453:"REMOVE.LIST.ITEM",454:"SELECT.LIST.ITEM",455:"SET.CONTROL.VALUE",456:"SAVE.COPY.AS",458:"OPTIONS.LISTS.ADD",459:"OPTIONS.LISTS.DELETE",460:"SERIES.AXES",461:"SERIES.X",462:"SERIES.Y",463:"ERRORBAR.X",464:"ERRORBAR.Y",465:"FORMAT.CHART",466:"SERIES.ORDER",467:"MAIL.LOGOFF",468:"CLEAR.ROUTING.SLIP",469:"APP.ACTIVATE.MICROSOFT",470:"MAIL.EDIT.MAILER",471:"ON.SHEET",472:"STANDARD.WIDTH",473:"SCENARIO.MERGE",474:"SUMMARY.INFO",475:"FIND.FILE",476:"ACTIVE.CELL.FONT",477:"ENABLE.TIPWIZARD",478:"VBA.MAKE.ADDIN",480:"INSERTDATATABLE",481:"WORKGROUP.OPTIONS",482:"MAIL.SEND.MAILER",485:"AUTOCORRECT",489:"POST.DOCUMENT",491:"PICKLIST",493:"VIEW.SHOW",494:"VIEW.DEFINE",495:"VIEW.DELETE",509:"SHEET.BACKGROUND",510:"INSERT.MAP.OBJECT",511:"OPTIONS.MENONO",517:"MSOCHECKS",518:"NORMAL",519:"LAYOUT",520:"RM.PRINT.AREA",521:"CLEAR.PRINT.AREA",522:"ADD.PRINT.AREA",523:"MOVE.BRK",545:"HIDECURR.NOTE",546:"HIDEALL.NOTES",547:"DELETE.NOTE",548:"TRAVERSE.NOTES",549:"ACTIVATE.NOTES",620:"PROTECT.REVISIONS",621:"UNPROTECT.REVISIONS",647:"OPTIONS.ME",653:"WEB.PUBLISH",667:"NEWWEBQUERY",673:"PIVOT.TABLE.CHART",753:"OPTIONS.SAVE",755:"OPTIONS.SPELL",808:"HIDEALL.INKANNOTS"},yu={0:"COUNT",1:"IF",2:"ISNA",3:"ISERROR",4:"SUM",5:"AVERAGE",6:"MIN",7:"MAX",8:"ROW",9:"COLUMN",10:"NA",11:"NPV",12:"STDEV",13:"DOLLAR",14:"FIXED",15:"SIN",16:"COS",17:"TAN",18:"ATAN",19:"PI",20:"SQRT",21:"EXP",22:"LN",23:"LOG10",24:"ABS",25:"INT",26:"SIGN",27:"ROUND",28:"LOOKUP",29:"INDEX",30:"REPT",31:"MID",32:"LEN",33:"VALUE",34:"TRUE",35:"FALSE",36:"AND",37:"OR",38:"NOT",39:"MOD",40:"DCOUNT",41:"DSUM",42:"DAVERAGE",43:"DMIN",44:"DMAX",45:"DSTDEV",46:"VAR",47:"DVAR",48:"TEXT",49:"LINEST",50:"TREND",51:"LOGEST",52:"GROWTH",53:"GOTO",54:"HALT",55:"RETURN",56:"PV",57:"FV",58:"NPER",59:"PMT",60:"RATE",61:"MIRR",62:"IRR",63:"RAND",64:"MATCH",65:"DATE",66:"TIME",67:"DAY",68:"MONTH",69:"YEAR",70:"WEEKDAY",71:"HOUR",72:"MINUTE",73:"SECOND",74:"NOW",75:"AREAS",76:"ROWS",77:"COLUMNS",78:"OFFSET",79:"ABSREF",80:"RELREF",81:"ARGUMENT",82:"SEARCH",83:"TRANSPOSE",84:"ERROR",85:"STEP",86:"TYPE",87:"ECHO",88:"SET.NAME",89:"CALLER",90:"DEREF",91:"WINDOWS",92:"SERIES",93:"DOCUMENTS",94:"ACTIVE.CELL",95:"SELECTION",96:"RESULT",97:"ATAN2",98:"ASIN",99:"ACOS",100:"CHOOSE",101:"HLOOKUP",102:"VLOOKUP",103:"LINKS",104:"INPUT",105:"ISREF",106:"GET.FORMULA",107:"GET.NAME",108:"SET.VALUE",109:"LOG",110:"EXEC",111:"CHAR",112:"LOWER",113:"UPPER",114:"PROPER",115:"LEFT",116:"RIGHT",117:"EXACT",118:"TRIM",119:"REPLACE",120:"SUBSTITUTE",121:"CODE",122:"NAMES",123:"DIRECTORY",124:"FIND",125:"CELL",126:"ISERR",127:"ISTEXT",128:"ISNUMBER",129:"ISBLANK",130:"T",131:"N",132:"FOPEN",133:"FCLOSE",134:"FSIZE",135:"FREADLN",136:"FREAD",137:"FWRITELN",138:"FWRITE",139:"FPOS",140:"DATEVALUE",141:"TIMEVALUE",142:"SLN",143:"SYD",144:"DDB",145:"GET.DEF",146:"REFTEXT",147:"TEXTREF",148:"INDIRECT",149:"REGISTER",150:"CALL",151:"ADD.BAR",152:"ADD.MENU",153:"ADD.COMMAND",154:"ENABLE.COMMAND",155:"CHECK.COMMAND",156:"RENAME.COMMAND",157:"SHOW.BAR",158:"DELETE.MENU",159:"DELETE.COMMAND",160:"GET.CHART.ITEM",161:"DIALOG.BOX",162:"CLEAN",163:"MDETERM",164:"MINVERSE",165:"MMULT",166:"FILES",167:"IPMT",168:"PPMT",169:"COUNTA",170:"CANCEL.KEY",171:"FOR",172:"WHILE",173:"BREAK",174:"NEXT",175:"INITIATE",176:"REQUEST",177:"POKE",178:"EXECUTE",179:"TERMINATE",180:"RESTART",181:"HELP",182:"GET.BAR",183:"PRODUCT",184:"FACT",185:"GET.CELL",186:"GET.WORKSPACE",187:"GET.WINDOW",188:"GET.DOCUMENT",189:"DPRODUCT",190:"ISNONTEXT",191:"GET.NOTE",192:"NOTE",193:"STDEVP",194:"VARP",195:"DSTDEVP",196:"DVARP",197:"TRUNC",198:"ISLOGICAL",199:"DCOUNTA",200:"DELETE.BAR",201:"UNREGISTER",204:"USDOLLAR",205:"FINDB",206:"SEARCHB",207:"REPLACEB",208:"LEFTB",209:"RIGHTB",210:"MIDB",211:"LENB",212:"ROUNDUP",213:"ROUNDDOWN",214:"ASC",215:"DBCS",216:"RANK",219:"ADDRESS",220:"DAYS360",221:"TODAY",222:"VDB",223:"ELSE",224:"ELSE.IF",225:"END.IF",226:"FOR.CELL",227:"MEDIAN",228:"SUMPRODUCT",229:"SINH",230:"COSH",231:"TANH",232:"ASINH",233:"ACOSH",234:"ATANH",235:"DGET",236:"CREATE.OBJECT",237:"VOLATILE",238:"LAST.ERROR",239:"CUSTOM.UNDO",240:"CUSTOM.REPEAT",241:"FORMULA.CONVERT",242:"GET.LINK.INFO",243:"TEXT.BOX",244:"INFO",245:"GROUP",246:"GET.OBJECT",247:"DB",248:"PAUSE",251:"RESUME",252:"FREQUENCY",253:"ADD.TOOLBAR",254:"DELETE.TOOLBAR",255:"User",256:"RESET.TOOLBAR",257:"EVALUATE",258:"GET.TOOLBAR",259:"GET.TOOL",260:"SPELLING.CHECK",261:"ERROR.TYPE",262:"APP.TITLE",263:"WINDOW.TITLE",264:"SAVE.TOOLBAR",265:"ENABLE.TOOL",266:"PRESS.TOOL",267:"REGISTER.ID",268:"GET.WORKBOOK",269:"AVEDEV",270:"BETADIST",271:"GAMMALN",272:"BETAINV",273:"BINOMDIST",274:"CHIDIST",275:"CHIINV",276:"COMBIN",277:"CONFIDENCE",278:"CRITBINOM",279:"EVEN",280:"EXPONDIST",281:"FDIST",282:"FINV",283:"FISHER",284:"FISHERINV",285:"FLOOR",286:"GAMMADIST",287:"GAMMAINV",288:"CEILING",289:"HYPGEOMDIST",290:"LOGNORMDIST",291:"LOGINV",292:"NEGBINOMDIST",293:"NORMDIST",294:"NORMSDIST",295:"NORMINV",296:"NORMSINV",297:"STANDARDIZE",298:"ODD",299:"PERMUT",300:"POISSON",301:"TDIST",302:"WEIBULL",303:"SUMXMY2",304:"SUMX2MY2",305:"SUMX2PY2",306:"CHITEST",307:"CORREL",308:"COVAR",309:"FORECAST",310:"FTEST",311:"INTERCEPT",312:"PEARSON",313:"RSQ",314:"STEYX",315:"SLOPE",316:"TTEST",317:"PROB",318:"DEVSQ",319:"GEOMEAN",320:"HARMEAN",321:"SUMSQ",322:"KURT",323:"SKEW",324:"ZTEST",325:"LARGE",326:"SMALL",327:"QUARTILE",328:"PERCENTILE",329:"PERCENTRANK",330:"MODE",331:"TRIMMEAN",332:"TINV",334:"MOVIE.COMMAND",335:"GET.MOVIE",336:"CONCATENATE",337:"POWER",338:"PIVOT.ADD.DATA",339:"GET.PIVOT.TABLE",340:"GET.PIVOT.FIELD",341:"GET.PIVOT.ITEM",342:"RADIANS",343:"DEGREES",344:"SUBTOTAL",345:"SUMIF",346:"COUNTIF",347:"COUNTBLANK",348:"SCENARIO.GET",349:"OPTIONS.LISTS.GET",350:"ISPMT",351:"DATEDIF",352:"DATESTRING",353:"NUMBERSTRING",354:"ROMAN",355:"OPEN.DIALOG",356:"SAVE.DIALOG",357:"VIEW.GET",358:"GETPIVOTDATA",359:"HYPERLINK",360:"PHONETIC",361:"AVERAGEA",362:"MAXA",363:"MINA",364:"STDEVPA",365:"VARPA",366:"STDEVA",367:"VARA",368:"BAHTTEXT",369:"THAIDAYOFWEEK",370:"THAIDIGIT",371:"THAIMONTHOFYEAR",372:"THAINUMSOUND",373:"THAINUMSTRING",374:"THAISTRINGLENGTH",375:"ISTHAIDIGIT",376:"ROUNDBAHTDOWN",377:"ROUNDBAHTUP",378:"THAIYEAR",379:"RTD",380:"CUBEVALUE",381:"CUBEMEMBER",382:"CUBEMEMBERPROPERTY",383:"CUBERANKEDMEMBER",384:"HEX2BIN",385:"HEX2DEC",386:"HEX2OCT",387:"DEC2BIN",388:"DEC2HEX",389:"DEC2OCT",390:"OCT2BIN",391:"OCT2HEX",392:"OCT2DEC",393:"BIN2DEC",394:"BIN2OCT",395:"BIN2HEX",396:"IMSUB",397:"IMDIV",398:"IMPOWER",399:"IMABS",400:"IMSQRT",401:"IMLN",402:"IMLOG2",403:"IMLOG10",404:"IMSIN",405:"IMCOS",406:"IMEXP",407:"IMARGUMENT",408:"IMCONJUGATE",409:"IMAGINARY",410:"IMREAL",411:"COMPLEX",412:"IMSUM",413:"IMPRODUCT",414:"SERIESSUM",415:"FACTDOUBLE",416:"SQRTPI",417:"QUOTIENT",418:"DELTA",419:"GESTEP",420:"ISEVEN",421:"ISODD",422:"MROUND",423:"ERF",424:"ERFC",425:"BESSELJ",426:"BESSELK",427:"BESSELY",428:"BESSELI",429:"XIRR",430:"XNPV",431:"PRICEMAT",432:"YIELDMAT",433:"INTRATE",434:"RECEIVED",435:"DISC",436:"PRICEDISC",437:"YIELDDISC",438:"TBILLEQ",439:"TBILLPRICE",440:"TBILLYIELD",441:"PRICE",442:"YIELD",443:"DOLLARDE",444:"DOLLARFR",445:"NOMINAL",446:"EFFECT",447:"CUMPRINC",448:"CUMIPMT",449:"EDATE",450:"EOMONTH",451:"YEARFRAC",452:"COUPDAYBS",453:"COUPDAYS",454:"COUPDAYSNC",455:"COUPNCD",456:"COUPNUM",457:"COUPPCD",458:"DURATION",459:"MDURATION",460:"ODDLPRICE",461:"ODDLYIELD",462:"ODDFPRICE",463:"ODDFYIELD",464:"RANDBETWEEN",465:"WEEKNUM",466:"AMORDEGRC",467:"AMORLINC",468:"CONVERT",724:"SHEETJS",469:"ACCRINT",470:"ACCRINTM",471:"WORKDAY",472:"NETWORKDAYS",473:"GCD",474:"MULTINOMIAL",475:"LCM",476:"FVSCHEDULE",477:"CUBEKPIMEMBER",478:"CUBESET",479:"CUBESETCOUNT",480:"IFERROR",481:"COUNTIFS",482:"SUMIFS",483:"AVERAGEIF",484:"AVERAGEIFS"},sy={2:1,3:1,10:0,15:1,16:1,17:1,18:1,19:0,20:1,21:1,22:1,23:1,24:1,25:1,26:1,27:2,30:2,31:3,32:1,33:1,34:0,35:0,38:1,39:2,40:3,41:3,42:3,43:3,44:3,45:3,47:3,48:2,53:1,61:3,63:0,65:3,66:3,67:1,68:1,69:1,70:1,71:1,72:1,73:1,74:0,75:1,76:1,77:1,79:2,80:2,83:1,85:0,86:1,89:0,90:1,94:0,95:0,97:2,98:1,99:1,101:3,102:3,105:1,106:1,108:2,111:1,112:1,113:1,114:1,117:2,118:1,119:4,121:1,126:1,127:1,128:1,129:1,130:1,131:1,133:1,134:1,135:1,136:2,137:2,138:2,140:1,141:1,142:3,143:4,144:4,161:1,162:1,163:1,164:1,165:2,172:1,175:2,176:2,177:3,178:2,179:1,184:1,186:1,189:3,190:1,195:3,196:3,197:1,198:1,199:3,201:1,207:4,210:3,211:1,212:2,213:2,214:1,215:1,225:0,229:1,230:1,231:1,232:1,233:1,234:1,235:3,244:1,247:4,252:2,257:1,261:1,271:1,273:4,274:2,275:2,276:2,277:3,278:3,279:1,280:3,281:3,282:3,283:1,284:1,285:2,286:4,287:3,288:2,289:4,290:3,291:3,292:3,293:4,294:1,295:3,296:1,297:3,298:1,299:2,300:3,301:3,302:4,303:2,304:2,305:2,306:2,307:2,308:2,309:3,310:2,311:2,312:2,313:2,314:2,315:2,316:4,325:2,326:2,327:2,328:2,331:2,332:2,337:2,342:1,343:1,346:2,347:1,350:4,351:3,352:1,353:2,360:1,368:1,369:1,370:1,371:1,372:1,373:1,374:1,375:1,376:1,377:1,378:1,382:3,385:1,392:1,393:1,396:2,397:2,398:2,399:1,400:1,401:1,402:1,403:1,404:1,405:1,406:1,407:1,408:1,409:1,410:1,414:4,415:1,416:1,417:2,420:1,421:1,422:2,424:1,425:2,426:2,427:2,428:2,430:3,438:3,439:3,440:3,443:2,444:2,445:2,446:2,447:6,448:6,449:2,450:2,464:2,468:3,476:2,479:1,480:2,65535:0};function o0(e){return e.slice(0,3)=="of:"&&(e=e.slice(3)),e.charCodeAt(0)==61&&(e=e.slice(1),e.charCodeAt(0)==61&&(e=e.slice(1))),e=e.replace(/COM\.MICROSOFT\./g,""),e=e.replace(/\[((?:\.[A-Z]+[0-9]+)(?::\.[A-Z]+[0-9]+)?)\]/g,function(t,r){return r.replace(/\./g,"")}),e=e.replace(/\[.(#[A-Z]*[?!])\]/g,"$1"),e.replace(/[;~]/g,",").replace(/\|/g,";")}function Yo(e){var t=e.split(":"),r=t[0].split(".")[0];return[r,t[0].split(".")[1]+(t.length>1?":"+(t[1].split(".")[1]||t[1].split(".")[0]):"")]}var Vi={},Ja={};function Hi(e,t){if(e){var r=[.7,.7,.75,.75,.3,.3];t=="xlml"&&(r=[1,1,1,1,.5,.5]),e.left==null&&(e.left=r[0]),e.right==null&&(e.right=r[1]),e.top==null&&(e.top=r[2]),e.bottom==null&&(e.bottom=r[3]),e.header==null&&(e.header=r[4]),e.footer==null&&(e.footer=r[5])}}function _u(e,t,r,a,i,n){try{a.cellNF&&(e.z=_e[t])}catch(s){if(a.WTF)throw s}if(!(e.t==="z"&&!a.cellStyles)){if(e.t==="d"&&typeof e.v=="string"&&(e.v=ft(e.v)),(!a||a.cellText!==!1)&&e.t!=="z")try{if(_e[t]==null&&ka(lm[t]||"General",t),e.t==="e")e.w=e.w||Va[e.v];else if(t===0)if(e.t==="n")(e.v|0)===e.v?e.w=e.v.toString(10):e.w=en(e.v);else if(e.t==="d"){var o=$t(e.v);(o|0)===o?e.w=o.toString(10):e.w=en(o)}else{if(e.v===void 0)return"";e.w=Fa(e.v,Ja)}else e.t==="d"?e.w=er(t,$t(e.v),Ja):e.w=er(t,e.v,Ja)}catch(s){if(a.WTF)throw s}if(a.cellStyles&&r!=null)try{e.s=n.Fills[r],e.s.fgColor&&e.s.fgColor.theme&&!e.s.fgColor.rgb&&(e.s.fgColor.rgb=co(i.themeElements.clrScheme[e.s.fgColor.theme].rgb,e.s.fgColor.tint||0),a.WTF&&(e.s.fgColor.raw_rgb=i.themeElements.clrScheme[e.s.fgColor.theme].rgb)),e.s.bgColor&&e.s.bgColor.theme&&(e.s.bgColor.rgb=co(i.themeElements.clrScheme[e.s.bgColor.theme].rgb,e.s.bgColor.tint||0),a.WTF&&(e.s.bgColor.raw_rgb=i.themeElements.clrScheme[e.s.bgColor.theme].rgb))}catch(s){if(a.WTF&&n.Fills)throw s}}}function ly(e,t){var r=Ze(t);r.s.r<=r.e.r&&r.s.c<=r.e.c&&r.s.r>=0&&r.s.c>=0&&(e["!ref"]=De(r))}var cy=/<(?:\w:)?mergeCell ref="[A-Z0-9:]+"\s*[\/]?>/g,dy=/<(?:\w+:)?sheetData[^>]*>([\s\S]*)<\/(?:\w+:)?sheetData>/,uy=/<(?:\w:)?hyperlink [^>]*>/mg,hy=/"(\w*:\w*)"/,fy=/<(?:\w:)?col\b[^>]*[\/]?>/g,py=/<(?:\w:)?autoFilter[^>]*([\/]|>([\s\S]*)<\/(?:\w:)?autoFilter)>/g,gy=/<(?:\w:)?pageMargins[^>]*\/>/g,ku=/<(?:\w:)?sheetPr\b(?:[^>a-z][^>]*)?\/>/,my=/<(?:\w:)?sheetPr[^>]*(?:[\/]|>([\s\S]*)<\/(?:\w:)?sheetPr)>/,vy=/<(?:\w:)?sheetViews[^>]*(?:[\/]|>([\s\S]*)<\/(?:\w:)?sheetViews)>/;function xy(e,t,r,a,i,n,o){if(!e)return e;a||(a={"!id":{}});var s=t.dense?[]:{},l={s:{r:2e6,c:2e6},e:{r:0,c:0}},c="",d="",u=e.match(dy);u?(c=e.slice(0,u.index),d=e.slice(u.index+u[0].length)):c=d=e;var f=c.match(ku);f?pl(f[0],s,i,r):(f=c.match(my))&&by(f[0],f[1]||"",s,i,r);var h=(c.match(/<(?:\w*:)?dimension/)||{index:-1}).index;if(h>0){var p=c.slice(h,h+50).match(hy);p&&ly(s,p[1])}var g=c.match(vy);g&&g[1]&&Ty(g[1],i);var m=[];if(t.cellStyles){var w=c.match(fy);w&&_y(m,w)}u&&Ay(u[1],s,t,l,n,o);var S=d.match(py);S&&(s["!autofilter"]=ky(S[0]));var x=[],D=d.match(cy);if(D)for(h=0;h!=D.length;++h)x[h]=Ze(D[h].slice(D[h].indexOf('"')+1));var M=d.match(uy);M&&wy(s,M,a);var I=d.match(gy);if(I&&(s["!margins"]=yy(me(I[0]))),!s["!ref"]&&l.e.c>=l.s.c&&l.e.r>=l.s.r&&(s["!ref"]=De(l)),t.sheetRows>0&&s["!ref"]){var T=Ze(s["!ref"]);t.sheetRows<=+T.e.r&&(T.e.r=t.sheetRows-1,T.e.r>l.e.r&&(T.e.r=l.e.r),T.e.r<T.s.r&&(T.s.r=T.e.r),T.e.c>l.e.c&&(T.e.c=l.e.c),T.e.c<T.s.c&&(T.s.c=T.e.c),s["!fullref"]=s["!ref"],s["!ref"]=De(T))}return m.length>0&&(s["!cols"]=m),x.length>0&&(s["!merges"]=x),s}function pl(e,t,r,a){var i=me(e);r.Sheets[a]||(r.Sheets[a]={}),i.codeName&&(r.Sheets[a].CodeName=Ie(Ue(i.codeName)))}function by(e,t,r,a,i){pl(e.slice(0,e.indexOf(">")),r,a,i)}function wy(e,t,r){for(var a=Array.isArray(e),i=0;i!=t.length;++i){var n=me(Ue(t[i]),!0);if(!n.ref)return;var o=((r||{})["!id"]||[])[n.id];o?(n.Target=o.Target,n.location&&(n.Target+="#"+Ie(n.location))):(n.Target="#"+Ie(n.location),o={Target:n.Target,TargetMode:"Internal"}),n.Rel=o,n.tooltip&&(n.Tooltip=n.tooltip,delete n.tooltip);for(var s=Ze(n.ref),l=s.s.r;l<=s.e.r;++l)for(var c=s.s.c;c<=s.e.c;++c){var d=we({c,r:l});a?(e[l]||(e[l]=[]),e[l][c]||(e[l][c]={t:"z",v:void 0}),e[l][c].l=n):(e[d]||(e[d]={t:"z",v:void 0}),e[d].l=n)}}}function yy(e){var t={};return["left","right","top","bottom","header","footer"].forEach(function(r){e[r]&&(t[r]=parseFloat(e[r]))}),t}function _y(e,t){for(var r=!1,a=0;a!=t.length;++a){var i=me(t[a],!0);i.hidden&&(i.hidden=We(i.hidden));var n=parseInt(i.min,10)-1,o=parseInt(i.max,10)-1;for(i.outlineLevel&&(i.level=+i.outlineLevel||0),delete i.min,delete i.max,i.width=+i.width,!r&&i.width&&(r=!0,hl(i.width)),ii(i);n<=o;)e[n++]=vt(i)}}function ky(e){var t={ref:(e.match(/ref="([^"]*)"/)||[])[1]};return t}var Ey=/<(?:\w:)?sheetView(?:[^>a-z][^>]*)?\/?>/;function Ty(e,t){t.Views||(t.Views=[{}]),(e.match(Ey)||[]).forEach(function(r,a){var i=me(r);t.Views[a]||(t.Views[a]={}),+i.zoomScale&&(t.Views[a].zoom=+i.zoomScale),We(i.rightToLeft)&&(t.Views[a].RTL=!0)})}var Ay=function(){var e=/<(?:\w+:)?c[ \/>]/,t=/<\/(?:\w+:)?row>/,r=/r=["']([^"']*)["']/,a=/<(?:\w+:)?is>([\S\s]*?)<\/(?:\w+:)?is>/,i=/ref=["']([^"']*)["']/,n=tn("v"),o=tn("f");return function(l,c,d,u,f,h){for(var p=0,g="",m=[],w=[],S=0,x=0,D=0,M="",I,T,B=0,O=0,j,U,N=0,Z=0,se=Array.isArray(h.CellXf),re,ce=[],ae=[],Te=Array.isArray(c),W=[],pe={},be=!1,C=!!d.sheetStubs,K=l.split(t),z=0,R=K.length;z!=R;++z){g=K[z].trim();var q=g.length;if(q!==0){var oe=0;e:for(p=0;p<q;++p)switch(g[p]){case">":if(g[p-1]!="/"){++p;break e}if(d&&d.cellStyles){if(T=me(g.slice(oe,p),!0),B=T.r!=null?parseInt(T.r,10):B+1,O=-1,d.sheetRows&&d.sheetRows<B)continue;pe={},be=!1,T.ht&&(be=!0,pe.hpt=parseFloat(T.ht),pe.hpx=on(pe.hpt)),T.hidden=="1"&&(be=!0,pe.hidden=!0),T.outlineLevel!=null&&(be=!0,pe.level=+T.outlineLevel),be&&(W[B-1]=pe)}break;case"<":oe=p;break}if(oe>=p)break;if(T=me(g.slice(oe,p),!0),B=T.r!=null?parseInt(T.r,10):B+1,O=-1,!(d.sheetRows&&d.sheetRows<B)){u.s.r>B-1&&(u.s.r=B-1),u.e.r<B-1&&(u.e.r=B-1),d&&d.cellStyles&&(pe={},be=!1,T.ht&&(be=!0,pe.hpt=parseFloat(T.ht),pe.hpx=on(pe.hpt)),T.hidden=="1"&&(be=!0,pe.hidden=!0),T.outlineLevel!=null&&(be=!0,pe.level=+T.outlineLevel),be&&(W[B-1]=pe)),m=g.slice(p).split(e);for(var ue=0;ue!=m.length&&m[ue].trim().charAt(0)=="<";++ue);for(m=m.slice(ue),p=0;p!=m.length;++p)if(g=m[p].trim(),g.length!==0){if(w=g.match(r),S=p,x=0,D=0,g="<c "+(g.slice(0,1)=="<"?">":"")+g,w!=null&&w.length===2){for(S=0,M=w[1],x=0;x!=M.length&&!((D=M.charCodeAt(x)-64)<1||D>26);++x)S=26*S+D;--S,O=S}else++O;for(x=0;x!=g.length&&g.charCodeAt(x)!==62;++x);if(++x,T=me(g.slice(0,x),!0),T.r||(T.r=we({r:B-1,c:O})),M=g.slice(x),I={t:""},(w=M.match(n))!=null&&w[1]!==""&&(I.v=Ie(w[1])),d.cellFormula){if((w=M.match(o))!=null&&w[1]!==""){if(I.f=Ie(Ue(w[1])).replace(/\r\n/g,`
`),d.xlfn||(I.f=r0(I.f)),w[0].indexOf('t="array"')>-1)I.F=(M.match(i)||[])[1],I.F.indexOf(":")>-1&&ce.push([Ze(I.F),I.F]);else if(w[0].indexOf('t="shared"')>-1){U=me(w[0]);var ie=Ie(Ue(w[1]));d.xlfn||(ie=r0(ie)),ae[parseInt(U.si,10)]=[U,ie,T.r]}}else(w=M.match(/<f[^>]*\/>/))&&(U=me(w[0]),ae[U.si]&&(I.f=Nb(ae[U.si][1],ae[U.si][2],T.r)));var ee=Pt(T.r);for(x=0;x<ce.length;++x)ee.r>=ce[x][0].s.r&&ee.r<=ce[x][0].e.r&&ee.c>=ce[x][0].s.c&&ee.c<=ce[x][0].e.c&&(I.F=ce[x][1])}if(T.t==null&&I.v===void 0)if(I.f||I.F)I.v=0,I.t="n";else if(C)I.t="z";else continue;else I.t=T.t||"n";switch(u.s.c>O&&(u.s.c=O),u.e.c<O&&(u.e.c=O),I.t){case"n":if(I.v==""||I.v==null){if(!C)continue;I.t="z"}else I.v=parseFloat(I.v);break;case"s":if(typeof I.v>"u"){if(!C)continue;I.t="z"}else j=Vi[parseInt(I.v,10)],I.v=j.t,I.r=j.r,d.cellHTML&&(I.h=j.h);break;case"str":I.t="s",I.v=I.v!=null?Ue(I.v):"",d.cellHTML&&(I.h=tl(I.v));break;case"inlineStr":w=M.match(a),I.t="s",w!=null&&(j=ul(w[1]))?(I.v=j.t,d.cellHTML&&(I.h=j.h)):I.v="";break;case"b":I.v=We(I.v);break;case"d":d.cellDates?I.v=ft(I.v,1):(I.v=$t(ft(I.v,1)),I.t="n");break;case"e":(!d||d.cellText!==!1)&&(I.w=I.v),I.v=jd[I.v];break}if(N=Z=0,re=null,se&&T.s!==void 0&&(re=h.CellXf[T.s],re!=null&&(re.numFmtId!=null&&(N=re.numFmtId),d.cellStyles&&re.fillId!=null&&(Z=re.fillId))),_u(I,N,Z,d,f,h),d.cellDates&&se&&I.t=="n"&&di(_e[N])&&(I.t="d",I.v=Co(I.v)),T.cm&&d.xlmeta){var Oe=(d.xlmeta.Cell||[])[+T.cm-1];Oe&&Oe.type=="XLDAPR"&&(I.D=!0)}if(Te){var F=Pt(T.r);c[F.r]||(c[F.r]=[]),c[F.r][F.c]=I}else c[T.r]=I}}}}W.length>0&&(c["!rows"]=W)}}();function Sy(e,t){var r={},a=e.l+t;r.r=e.read_shift(4),e.l+=4;var i=e.read_shift(2);e.l+=1;var n=e.read_shift(1);return e.l=a,n&7&&(r.level=n&7),n&16&&(r.hidden=!0),n&32&&(r.hpt=i/20),r}var Cy=Ua;function Fy(){}function Dy(e,t){var r={},a=e[e.l];return++e.l,r.above=!(a&64),r.left=!(a&128),e.l+=18,r.name=Jm(e),r}function Oy(e){var t=ar(e);return[t]}function Iy(e){var t=Ba(e);return[t]}function Py(e){var t=ar(e),r=e.read_shift(1);return[t,r,"b"]}function Ry(e){var t=Ba(e),r=e.read_shift(1);return[t,r,"b"]}function $y(e){var t=ar(e),r=e.read_shift(1);return[t,r,"e"]}function Ly(e){var t=Ba(e),r=e.read_shift(1);return[t,r,"e"]}function Ny(e){var t=ar(e),r=e.read_shift(4);return[t,r,"s"]}function zy(e){var t=Ba(e),r=e.read_shift(4);return[t,r,"s"]}function My(e){var t=ar(e),r=kt(e);return[t,r,"n"]}function Eu(e){var t=Ba(e),r=kt(e);return[t,r,"n"]}function By(e){var t=ar(e),r=ll(e);return[t,r,"n"]}function Uy(e){var t=Ba(e),r=ll(e);return[t,r,"n"]}function Vy(e){var t=ar(e),r=ol(e);return[t,r,"is"]}function Hy(e){var t=ar(e),r=Tt(e);return[t,r,"str"]}function jy(e){var t=Ba(e),r=Tt(e);return[t,r,"str"]}function Wy(e,t,r){var a=e.l+t,i=ar(e);i.r=r["!row"];var n=e.read_shift(1),o=[i,n,"b"];if(r.cellFormula){e.l+=2;var s=Oo(e,a-e.l,r);o[3]=_t(s,null,i,r.supbooks,r)}else e.l=a;return o}function Gy(e,t,r){var a=e.l+t,i=ar(e);i.r=r["!row"];var n=e.read_shift(1),o=[i,n,"e"];if(r.cellFormula){e.l+=2;var s=Oo(e,a-e.l,r);o[3]=_t(s,null,i,r.supbooks,r)}else e.l=a;return o}function Ky(e,t,r){var a=e.l+t,i=ar(e);i.r=r["!row"];var n=kt(e),o=[i,n,"n"];if(r.cellFormula){e.l+=2;var s=Oo(e,a-e.l,r);o[3]=_t(s,null,i,r.supbooks,r)}else e.l=a;return o}function Xy(e,t,r){var a=e.l+t,i=ar(e);i.r=r["!row"];var n=Tt(e),o=[i,n,"str"];if(r.cellFormula){e.l+=2;var s=Oo(e,a-e.l,r);o[3]=_t(s,null,i,r.supbooks,r)}else e.l=a;return o}var Yy=Ua;function qy(e,t){var r=e.l+t,a=Ua(e),i=sl(e),n=Tt(e),o=Tt(e),s=Tt(e);e.l=r;var l={rfx:a,relId:i,loc:n,display:s};return o&&(l.Tooltip=o),l}function Zy(){}function Jy(e,t,r){var a=e.l+t,i=Ud(e),n=e.read_shift(1),o=[i];if(o[2]=n,r.cellFormula){var s=ay(e,a-e.l,r);o[1]=s}else e.l=a;return o}function Qy(e,t,r){var a=e.l+t,i=Ua(e),n=[i];if(r.cellFormula){var o=ny(e,a-e.l,r);n[1]=o,e.l=a}else e.l=a;return n}var e2=["left","right","top","bottom","header","footer"];function t2(e){var t={};return e2.forEach(function(r){t[r]=kt(e)}),t}function r2(e){var t=e.read_shift(2);return e.l+=28,{RTL:t&32}}function a2(){}function i2(){}function n2(e,t,r,a,i,n,o){if(!e)return e;var s=t||{};a||(a={"!id":{}});var l=s.dense?[]:{},c,d={s:{r:2e6,c:2e6},e:{r:0,c:0}},u=!1,f=!1,h,p,g,m,w,S,x,D,M,I=[];s.biff=12,s["!row"]=0;var T=0,B=!1,O=[],j={},U=s.supbooks||i.supbooks||[[]];if(U.sharedf=j,U.arrayf=O,U.SheetNames=i.SheetNames||i.Sheets.map(function(Te){return Te.name}),!s.supbooks&&(s.supbooks=U,i.Names))for(var N=0;N<i.Names.length;++N)U[0][N+1]=i.Names[N];var Z=[],se=[],re=!1;fo[16]={n:"BrtShortReal",f:Eu};var ce;if(Ur(e,function(W,pe,be){if(!f)switch(be){case 148:c=W;break;case 0:h=W,s.sheetRows&&s.sheetRows<=h.r&&(f=!0),D=xt(m=h.r),s["!row"]=h.r,(W.hidden||W.hpt||W.level!=null)&&(W.hpt&&(W.hpx=on(W.hpt)),se[W.r]=W);break;case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 13:case 14:case 15:case 16:case 17:case 18:case 62:switch(p={t:W[2]},W[2]){case"n":p.v=W[1];break;case"s":x=Vi[W[1]],p.v=x.t,p.r=x.r;break;case"b":p.v=!!W[1];break;case"e":p.v=W[1],s.cellText!==!1&&(p.w=Va[p.v]);break;case"str":p.t="s",p.v=W[1];break;case"is":p.t="s",p.v=W[1].t;break}if((g=o.CellXf[W[0].iStyleRef])&&_u(p,g.numFmtId,null,s,n,o),w=W[0].c==-1?w+1:W[0].c,s.dense?(l[m]||(l[m]=[]),l[m][w]=p):l[ct(w)+D]=p,s.cellFormula){for(B=!1,T=0;T<O.length;++T){var C=O[T];h.r>=C[0].s.r&&h.r<=C[0].e.r&&w>=C[0].s.c&&w<=C[0].e.c&&(p.F=De(C[0]),B=!0)}!B&&W.length>3&&(p.f=W[3])}if(d.s.r>h.r&&(d.s.r=h.r),d.s.c>w&&(d.s.c=w),d.e.r<h.r&&(d.e.r=h.r),d.e.c<w&&(d.e.c=w),s.cellDates&&g&&p.t=="n"&&di(_e[g.numFmtId])){var K=ya(p.v);K&&(p.t="d",p.v=new Date(K.y,K.m-1,K.d,K.H,K.M,K.S,K.u))}ce&&(ce.type=="XLDAPR"&&(p.D=!0),ce=void 0);break;case 1:case 12:if(!s.sheetStubs||u)break;p={t:"z",v:void 0},w=W[0].c==-1?w+1:W[0].c,s.dense?(l[m]||(l[m]=[]),l[m][w]=p):l[ct(w)+D]=p,d.s.r>h.r&&(d.s.r=h.r),d.s.c>w&&(d.s.c=w),d.e.r<h.r&&(d.e.r=h.r),d.e.c<w&&(d.e.c=w),ce&&(ce.type=="XLDAPR"&&(p.D=!0),ce=void 0);break;case 176:I.push(W);break;case 49:ce=((s.xlmeta||{}).Cell||[])[W-1];break;case 494:var z=a["!id"][W.relId];for(z?(W.Target=z.Target,W.loc&&(W.Target+="#"+W.loc),W.Rel=z):W.relId==""&&(W.Target="#"+W.loc),m=W.rfx.s.r;m<=W.rfx.e.r;++m)for(w=W.rfx.s.c;w<=W.rfx.e.c;++w)s.dense?(l[m]||(l[m]=[]),l[m][w]||(l[m][w]={t:"z",v:void 0}),l[m][w].l=W):(S=we({c:w,r:m}),l[S]||(l[S]={t:"z",v:void 0}),l[S].l=W);break;case 426:if(!s.cellFormula)break;O.push(W),M=s.dense?l[m][w]:l[ct(w)+D],M.f=_t(W[1],d,{r:h.r,c:w},U,s),M.F=De(W[0]);break;case 427:if(!s.cellFormula)break;j[we(W[0].s)]=W[1],M=s.dense?l[m][w]:l[ct(w)+D],M.f=_t(W[1],d,{r:h.r,c:w},U,s);break;case 60:if(!s.cellStyles)break;for(;W.e>=W.s;)Z[W.e--]={width:W.w/256,hidden:!!(W.flags&1),level:W.level},re||(re=!0,hl(W.w/256)),ii(Z[W.e+1]);break;case 161:l["!autofilter"]={ref:De(W)};break;case 476:l["!margins"]=W;break;case 147:i.Sheets[r]||(i.Sheets[r]={}),W.name&&(i.Sheets[r].CodeName=W.name),(W.above||W.left)&&(l["!outline"]={above:W.above,left:W.left});break;case 137:i.Views||(i.Views=[{}]),i.Views[0]||(i.Views[0]={}),W.RTL&&(i.Views[0].RTL=!0);break;case 485:break;case 64:case 1053:break;case 151:break;case 152:case 175:case 644:case 625:case 562:case 396:case 1112:case 1146:case 471:case 1050:case 649:case 1105:case 589:case 607:case 564:case 1055:case 168:case 174:case 1180:case 499:case 507:case 550:case 171:case 167:case 1177:case 169:case 1181:case 551:case 552:case 661:case 639:case 478:case 537:case 477:case 536:case 1103:case 680:case 1104:case 1024:case 663:case 535:case 678:case 504:case 1043:case 428:case 170:case 3072:case 50:case 2070:case 1045:break;case 35:u=!0;break;case 36:u=!1;break;case 37:u=!0;break;case 38:u=!1;break;default:if(!pe.T){if(!u||s.WTF)throw new Error("Unexpected record 0x"+be.toString(16))}}},s),delete s.supbooks,delete s["!row"],!l["!ref"]&&(d.s.r<2e6||c&&(c.e.r>0||c.e.c>0||c.s.r>0||c.s.c>0))&&(l["!ref"]=De(c||d)),s.sheetRows&&l["!ref"]){var ae=Ze(l["!ref"]);s.sheetRows<=+ae.e.r&&(ae.e.r=s.sheetRows-1,ae.e.r>d.e.r&&(ae.e.r=d.e.r),ae.e.r<ae.s.r&&(ae.s.r=ae.e.r),ae.e.c>d.e.c&&(ae.e.c=d.e.c),ae.e.c<ae.s.c&&(ae.s.c=ae.e.c),l["!fullref"]=l["!ref"],l["!ref"]=De(ae))}return I.length>0&&(l["!merges"]=I),Z.length>0&&(l["!cols"]=Z),se.length>0&&(l["!rows"]=se),l}function o2(e){var t=[],r=e.match(/^<c:numCache>/),a;(e.match(/<c:pt idx="(\d*)">(.*?)<\/c:pt>/mg)||[]).forEach(function(n){var o=n.match(/<c:pt idx="(\d*?)"><c:v>(.*)<\/c:v><\/c:pt>/);o&&(t[+o[1]]=r?+o[2]:o[2])});var i=Ie((e.match(/<c:formatCode>([\s\S]*?)<\/c:formatCode>/)||["","General"])[1]);return(e.match(/<c:f>(.*?)<\/c:f>/mg)||[]).forEach(function(n){a=n.replace(/<.*?>/g,"")}),[t,i,a]}function s2(e,t,r,a,i,n){var o=n||{"!type":"chart"};if(!e)return n;var s=0,l=0,c="A",d={s:{r:2e6,c:2e6},e:{r:0,c:0}};return(e.match(/<c:numCache>[\s\S]*?<\/c:numCache>/gm)||[]).forEach(function(u){var f=o2(u);d.s.r=d.s.c=0,d.e.c=s,c=ct(s),f[0].forEach(function(h,p){o[c+xt(p)]={t:"n",v:h,z:f[1]},l=p}),d.e.r<l&&(d.e.r=l),++s}),s>0&&(o["!ref"]=De(d)),o}function l2(e,t,r,a,i){if(!e)return e;a||(a={"!id":{}});var n={"!type":"chart","!drawel":null,"!rel":""},o,s=e.match(ku);return s&&pl(s[0],n,i,r),(o=e.match(/drawing r:id="(.*?)"/))&&(n["!rel"]=o[1]),a["!id"][n["!rel"]]&&(n["!drawel"]=a["!id"][n["!rel"]]),n}function c2(e,t){e.l+=10;var r=Tt(e);return{name:r}}function d2(e,t,r,a,i){if(!e)return e;a||(a={"!id":{}});var n={"!type":"chart","!drawel":null,"!rel":""},o=!1;return Ur(e,function(l,c,d){switch(d){case 550:n["!rel"]=l;break;case 651:i.Sheets[r]||(i.Sheets[r]={}),l.name&&(i.Sheets[r].CodeName=l.name);break;case 562:case 652:case 669:case 679:case 551:case 552:case 476:case 3072:break;case 35:o=!0;break;case 36:o=!1;break;case 37:break;case 38:break;default:if(!(c.T>0)){if(!(c.T<0)){if(!o||t.WTF)throw new Error("Unexpected record 0x"+d.toString(16))}}}},t),a["!id"][n["!rel"]]&&(n["!drawel"]=a["!id"][n["!rel"]]),n}var Tu=[["allowRefreshQuery",!1,"bool"],["autoCompressPictures",!0,"bool"],["backupFile",!1,"bool"],["checkCompatibility",!1,"bool"],["CodeName",""],["date1904",!1,"bool"],["defaultThemeVersion",0,"int"],["filterPrivacy",!1,"bool"],["hidePivotFieldList",!1,"bool"],["promptedSolutions",!1,"bool"],["publishItems",!1,"bool"],["refreshAllConnections",!1,"bool"],["saveExternalLinkValues",!0,"bool"],["showBorderUnselectedTables",!0,"bool"],["showInkAnnotation",!0,"bool"],["showObjects","all"],["showPivotChartFilter",!1,"bool"],["updateLinks","userSet"]],u2=[["activeTab",0,"int"],["autoFilterDateGrouping",!0,"bool"],["firstSheet",0,"int"],["minimized",!1,"bool"],["showHorizontalScroll",!0,"bool"],["showSheetTabs",!0,"bool"],["showVerticalScroll",!0,"bool"],["tabRatio",600,"int"],["visibility","visible"]],h2=[],f2=[["calcCompleted","true"],["calcMode","auto"],["calcOnSave","true"],["concurrentCalc","true"],["fullCalcOnLoad","false"],["fullPrecision","true"],["iterate","false"],["iterateCount","100"],["iterateDelta","0.001"],["refMode","A1"]];function s0(e,t){for(var r=0;r!=e.length;++r)for(var a=e[r],i=0;i!=t.length;++i){var n=t[i];if(a[n[0]]==null)a[n[0]]=n[1];else switch(n[2]){case"bool":typeof a[n[0]]=="string"&&(a[n[0]]=We(a[n[0]]));break;case"int":typeof a[n[0]]=="string"&&(a[n[0]]=parseInt(a[n[0]],10));break}}}function l0(e,t){for(var r=0;r!=t.length;++r){var a=t[r];if(e[a[0]]==null)e[a[0]]=a[1];else switch(a[2]){case"bool":typeof e[a[0]]=="string"&&(e[a[0]]=We(e[a[0]]));break;case"int":typeof e[a[0]]=="string"&&(e[a[0]]=parseInt(e[a[0]],10));break}}}function Au(e){l0(e.WBProps,Tu),l0(e.CalcPr,f2),s0(e.WBView,u2),s0(e.Sheets,h2),Ja.date1904=We(e.WBProps.date1904)}var p2="][*?/\\".split("");function g2(e,t){if(e.length>31)throw new Error("Sheet names cannot exceed 31 chars");var r=!0;return p2.forEach(function(a){if(e.indexOf(a)!=-1)throw new Error("Sheet name cannot contain : \\ / ? * [ ]")}),r}var m2=/<\w+:workbook/;function v2(e,t){if(!e)throw new Error("Could not find file");var r={AppVersion:{},WBProps:{},WBView:[],Sheets:[],CalcPr:{},Names:[],xmlns:""},a=!1,i="xmlns",n={},o=0;if(e.replace(Ft,function(l,c){var d=me(l);switch(Sr(d[0])){case"<?xml":break;case"<workbook":l.match(m2)&&(i="xmlns"+l.match(/<(\w+):/)[1]),r.xmlns=d[i];break;case"</workbook>":break;case"<fileVersion":delete d[0],r.AppVersion=d;break;case"<fileVersion/>":case"</fileVersion>":break;case"<fileSharing":break;case"<fileSharing/>":break;case"<workbookPr":case"<workbookPr/>":Tu.forEach(function(u){if(d[u[0]]!=null)switch(u[2]){case"bool":r.WBProps[u[0]]=We(d[u[0]]);break;case"int":r.WBProps[u[0]]=parseInt(d[u[0]],10);break;default:r.WBProps[u[0]]=d[u[0]]}}),d.codeName&&(r.WBProps.CodeName=Ue(d.codeName));break;case"</workbookPr>":break;case"<workbookProtection":break;case"<workbookProtection/>":break;case"<bookViews":case"<bookViews>":case"</bookViews>":break;case"<workbookView":case"<workbookView/>":delete d[0],r.WBView.push(d);break;case"</workbookView>":break;case"<sheets":case"<sheets>":case"</sheets>":break;case"<sheet":switch(d.state){case"hidden":d.Hidden=1;break;case"veryHidden":d.Hidden=2;break;default:d.Hidden=0}delete d.state,d.name=Ie(Ue(d.name)),delete d[0],r.Sheets.push(d);break;case"</sheet>":break;case"<functionGroups":case"<functionGroups/>":break;case"<functionGroup":break;case"<externalReferences":case"</externalReferences>":case"<externalReferences>":break;case"<externalReference":break;case"<definedNames/>":break;case"<definedNames>":case"<definedNames":a=!0;break;case"</definedNames>":a=!1;break;case"<definedName":n={},n.Name=Ue(d.name),d.comment&&(n.Comment=d.comment),d.localSheetId&&(n.Sheet=+d.localSheetId),We(d.hidden||"0")&&(n.Hidden=!0),o=c+l.length;break;case"</definedName>":n.Ref=Ie(Ue(e.slice(o,c))),r.Names.push(n);break;case"<definedName/>":break;case"<calcPr":delete d[0],r.CalcPr=d;break;case"<calcPr/>":delete d[0],r.CalcPr=d;break;case"</calcPr>":break;case"<oleSize":break;case"<customWorkbookViews>":case"</customWorkbookViews>":case"<customWorkbookViews":break;case"<customWorkbookView":case"</customWorkbookView>":break;case"<pivotCaches>":case"</pivotCaches>":case"<pivotCaches":break;case"<pivotCache":break;case"<smartTagPr":case"<smartTagPr/>":break;case"<smartTagTypes":case"<smartTagTypes>":case"</smartTagTypes>":break;case"<smartTagType":break;case"<webPublishing":case"<webPublishing/>":break;case"<fileRecoveryPr":case"<fileRecoveryPr/>":break;case"<webPublishObjects>":case"<webPublishObjects":case"</webPublishObjects>":break;case"<webPublishObject":break;case"<extLst":case"<extLst>":case"</extLst>":case"<extLst/>":break;case"<ext":a=!0;break;case"</ext>":a=!1;break;case"<ArchID":break;case"<AlternateContent":case"<AlternateContent>":a=!0;break;case"</AlternateContent>":a=!1;break;case"<revisionPtr":break;default:if(!a&&t.WTF)throw new Error("unrecognized "+d[0]+" in workbook")}return l}),$m.indexOf(r.xmlns)===-1)throw new Error("Unknown Namespace: "+r.xmlns);return Au(r),r}function x2(e,t){var r={};return r.Hidden=e.read_shift(4),r.iTabID=e.read_shift(4),r.strRelID=hs(e),r.name=Tt(e),r}function b2(e,t){var r={},a=e.read_shift(4);r.defaultThemeVersion=e.read_shift(4);var i=t>8?Tt(e):"";return i.length>0&&(r.CodeName=i),r.autoCompressPictures=!!(a&65536),r.backupFile=!!(a&64),r.checkCompatibility=!!(a&4096),r.date1904=!!(a&1),r.filterPrivacy=!!(a&8),r.hidePivotFieldList=!!(a&1024),r.promptedSolutions=!!(a&16),r.publishItems=!!(a&2048),r.refreshAllConnections=!!(a&262144),r.saveExternalLinkValues=!!(a&128),r.showBorderUnselectedTables=!!(a&4),r.showInkAnnotation=!!(a&32),r.showObjects=["all","placeholders","none"][a>>13&3],r.showPivotChartFilter=!!(a&32768),r.updateLinks=["userSet","never","always"][a>>8&3],r}function w2(e,t){var r={};return e.read_shift(4),r.ArchID=e.read_shift(4),e.l+=t-8,r}function y2(e,t,r){var a=e.l+t;e.l+=4,e.l+=1;var i=e.read_shift(4),n=Qm(e),o=iy(e,0,r),s=sl(e);e.l=a;var l={Name:n,Ptg:o};return i<268435455&&(l.Sheet=i),s&&(l.Comment=s),l}function _2(e,t){var r={AppVersion:{},WBProps:{},WBView:[],Sheets:[],CalcPr:{},xmlns:""},a=[],i=!1;t||(t={}),t.biff=12;var n=[],o=[[]];return o.SheetNames=[],o.XTI=[],fo[16]={n:"BrtFRTArchID$",f:w2},Ur(e,function(l,c,d){switch(d){case 156:o.SheetNames.push(l.name),r.Sheets.push(l);break;case 153:r.WBProps=l;break;case 39:l.Sheet!=null&&(t.SID=l.Sheet),l.Ref=_t(l.Ptg,null,null,o,t),delete t.SID,delete l.Ptg,n.push(l);break;case 1036:break;case 357:case 358:case 355:case 667:o[0].length?o.push([d,l]):o[0]=[d,l],o[o.length-1].XTI=[];break;case 362:o.length===0&&(o[0]=[],o[0].XTI=[]),o[o.length-1].XTI=o[o.length-1].XTI.concat(l),o.XTI=o.XTI.concat(l);break;case 361:break;case 2071:case 158:case 143:case 664:case 353:break;case 3072:case 3073:case 534:case 677:case 157:case 610:case 2050:case 155:case 548:case 676:case 128:case 665:case 2128:case 2125:case 549:case 2053:case 596:case 2076:case 2075:case 2082:case 397:case 154:case 1117:case 553:case 2091:break;case 35:a.push(d),i=!0;break;case 36:a.pop(),i=!1;break;case 37:a.push(d),i=!0;break;case 38:a.pop(),i=!1;break;case 16:break;default:if(!c.T){if(!i||t.WTF&&a[a.length-1]!=37&&a[a.length-1]!=35)throw new Error("Unexpected record 0x"+d.toString(16))}}},t),Au(r),r.Names=n,r.supbooks=o,r}function k2(e,t,r){return t.slice(-4)===".bin"?_2(e,r):v2(e,r)}function E2(e,t,r,a,i,n,o,s){return t.slice(-4)===".bin"?n2(e,a,r,i,n,o,s):xy(e,a,r,i,n,o,s)}function T2(e,t,r,a,i,n,o,s){return t.slice(-4)===".bin"?d2(e,a,r,i,n):l2(e,a,r,i,n)}function A2(e,t,r,a,i,n,o,s){return t.slice(-4)===".bin"?Rb():$b()}function S2(e,t,r,a,i,n,o,s){return t.slice(-4)===".bin"?Ib():Pb()}function C2(e,t,r,a){return t.slice(-4)===".bin"?Yx(e,r,a):Hx(e,r,a)}function F2(e,t,r){return hu(e,r)}function D2(e,t,r){return t.slice(-4)===".bin"?ux(e,r):cx(e,r)}function O2(e,t,r){return t.slice(-4)===".bin"?Fb(e,r):Eb(e,r)}function I2(e,t,r){return t.slice(-4)===".bin"?yb(e):bb(e)}function P2(e,t,r,a){return r.slice(-4)===".bin"?_b(e,t,r,a):void 0}function R2(e,t,r){return t.slice(-4)===".bin"?vb(e,t,r):xb(e,t,r)}var Su=/([\w:]+)=((?:")([^"]*)(?:")|(?:')([^']*)(?:'))/g,Cu=/([\w:]+)=((?:")(?:[^"]*)(?:")|(?:')(?:[^']*)(?:'))/;function ir(e,t){var r=e.split(/\s+/),a=[];if(a[0]=r[0],r.length===1)return a;var i=e.match(Su),n,o,s,l;if(i)for(l=0;l!=i.length;++l)n=i[l].match(Cu),(o=n[1].indexOf(":"))===-1?a[n[1]]=n[2].slice(1,n[2].length-1):(n[1].slice(0,6)==="xmlns:"?s="xmlns"+n[1].slice(6):s=n[1].slice(o+1),a[s]=n[2].slice(1,n[2].length-1));return a}function $2(e){var t=e.split(/\s+/),r={};if(t.length===1)return r;var a=e.match(Su),i,n,o,s;if(a)for(s=0;s!=a.length;++s)i=a[s].match(Cu),(n=i[1].indexOf(":"))===-1?r[i[1]]=i[2].slice(1,i[2].length-1):(i[1].slice(0,6)==="xmlns:"?o="xmlns"+i[1].slice(6):o=i[1].slice(n+1),r[o]=i[2].slice(1,i[2].length-1));return r}var ji;function L2(e,t){var r=ji[e]||Ie(e);return r==="General"?Fa(t):er(r,t)}function N2(e,t,r,a){var i=a;switch((r[0].match(/dt:dt="([\w.]+)"/)||["",""])[1]){case"boolean":i=We(a);break;case"i2":case"int":i=parseInt(a,10);break;case"r4":case"float":i=parseFloat(a);break;case"date":case"dateTime.tz":i=ft(a);break;case"i8":case"string":case"fixed":case"uuid":case"bin.base64":break;default:throw new Error("bad custprop:"+r[0])}e[Ie(t)]=i}function z2(e,t,r){if(e.t!=="z"){if(!r||r.cellText!==!1)try{e.t==="e"?e.w=e.w||Va[e.v]:t==="General"?e.t==="n"?(e.v|0)===e.v?e.w=e.v.toString(10):e.w=en(e.v):e.w=Fa(e.v):e.w=L2(t||"General",e.v)}catch(n){if(r.WTF)throw n}try{var a=ji[t]||t||"General";if(r.cellNF&&(e.z=a),r.cellDates&&e.t=="n"&&di(a)){var i=ya(e.v);i&&(e.t="d",e.v=new Date(i.y,i.m-1,i.d,i.H,i.M,i.S,i.u))}}catch(n){if(r.WTF)throw n}}}function M2(e,t,r){if(r.cellStyles&&t.Interior){var a=t.Interior;a.Pattern&&(a.patternType=Nx[a.Pattern]||a.Pattern)}e[t.ID]=t}function B2(e,t,r,a,i,n,o,s,l,c){var d="General",u=a.StyleID,f={};c=c||{};var h=[],p=0;for(u===void 0&&s&&(u=s.StyleID),u===void 0&&o&&(u=o.StyleID);n[u]!==void 0&&(n[u].nf&&(d=n[u].nf),n[u].Interior&&h.push(n[u].Interior),!!n[u].Parent);)u=n[u].Parent;switch(r.Type){case"Boolean":a.t="b",a.v=We(e);break;case"String":a.t="s",a.r=Dc(Ie(e)),a.v=e.indexOf("<")>-1?Ie(t||e).replace(/<.*?>/g,""):a.r;break;case"DateTime":e.slice(-1)!="Z"&&(e+="Z"),a.v=(ft(e)-new Date(Date.UTC(1899,11,30)))/(24*60*60*1e3),a.v!==a.v?a.v=Ie(e):a.v<60&&(a.v=a.v-1),(!d||d=="General")&&(d="yyyy-mm-dd");case"Number":a.v===void 0&&(a.v=+e),a.t||(a.t="n");break;case"Error":a.t="e",a.v=jd[e],c.cellText!==!1&&(a.w=e);break;default:e==""&&t==""?a.t="z":(a.t="s",a.v=Dc(t||e));break}if(z2(a,d,c),c.cellFormula!==!1)if(a.Formula){var g=Ie(a.Formula);g.charCodeAt(0)==61&&(g=g.slice(1)),a.f=Za(g,i),delete a.Formula,a.ArrayRange=="RC"?a.F=Za("RC:RC",i):a.ArrayRange&&(a.F=Za(a.ArrayRange,i),l.push([Ze(a.F),a.F]))}else for(p=0;p<l.length;++p)i.r>=l[p][0].s.r&&i.r<=l[p][0].e.r&&i.c>=l[p][0].s.c&&i.c<=l[p][0].e.c&&(a.F=l[p][1]);c.cellStyles&&(h.forEach(function(m){!f.patternType&&m.patternType&&(f.patternType=m.patternType)}),a.s=f),a.StyleID!==void 0&&(a.ixfe=a.StyleID)}function U2(e){e.t=e.v||"",e.t=e.t.replace(/\r\n/g,`
`).replace(/\r/g,`
`),e.v=e.w=e.ixfe=void 0}function qo(e,t){var r=t||{};md();var a=Ci(rl(e));(r.type=="binary"||r.type=="array"||r.type=="base64")&&(a=Ue(a));var i=a.slice(0,1024).toLowerCase(),n=!1;if(i=i.replace(/".*?"/g,""),(i.indexOf(">")&1023)>Math.min(i.indexOf(",")&1023,i.indexOf(";")&1023)){var o=vt(r);return o.type="string",an.to_workbook(a,o)}if(i.indexOf("<?xml")==-1&&["html","table","head","meta","script","style","div"].forEach(function(Qe){i.indexOf("<"+Qe)>=0&&(n=!0)}),n)return q2(a,r);ji={"General Number":"General","General Date":_e[22],"Long Date":"dddd, mmmm dd, yyyy","Medium Date":_e[15],"Short Date":_e[14],"Long Time":_e[19],"Medium Time":_e[18],"Short Time":_e[20],Currency:'"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',Fixed:_e[2],Standard:_e[4],Percent:_e[10],Scientific:_e[11],"Yes/No":'"Yes";"Yes";"No";@',"True/False":'"True";"True";"False";@',"On/Off":'"Yes";"Yes";"No";@'};var s,l=[],c,d={},u=[],f=r.dense?[]:{},h="",p={},g={},m=ir('<Data ss:Type="String">'),w=0,S=0,x=0,D={s:{r:2e6,c:2e6},e:{r:0,c:0}},M={},I={},T="",B=0,O=[],j={},U={},N=0,Z=[],se=[],re={},ce=[],ae,Te=!1,W=[],pe=[],be={},C=0,K=0,z={Sheets:[],WBProps:{date1904:!1}},R={};rn.lastIndex=0,a=a.replace(/<!--([\s\S]*?)-->/mg,"");for(var q="";s=rn.exec(a);)switch(s[3]=(q=s[3]).toLowerCase()){case"data":if(q=="data"){if(s[1]==="/"){if((c=l.pop())[0]!==s[3])throw new Error("Bad state: "+c.join("|"))}else s[0].charAt(s[0].length-2)!=="/"&&l.push([s[3],!0]);break}if(l[l.length-1][1])break;s[1]==="/"?B2(a.slice(w,s.index),T,m,l[l.length-1][0]=="comment"?re:p,{c:S,r:x},M,ce[S],g,W,r):(T="",m=ir(s[0]),w=s.index+s[0].length);break;case"cell":if(s[1]==="/")if(se.length>0&&(p.c=se),(!r.sheetRows||r.sheetRows>x)&&p.v!==void 0&&(r.dense?(f[x]||(f[x]=[]),f[x][S]=p):f[ct(S)+xt(x)]=p),p.HRef&&(p.l={Target:Ie(p.HRef)},p.HRefScreenTip&&(p.l.Tooltip=p.HRefScreenTip),delete p.HRef,delete p.HRefScreenTip),(p.MergeAcross||p.MergeDown)&&(C=S+(parseInt(p.MergeAcross,10)|0),K=x+(parseInt(p.MergeDown,10)|0),O.push({s:{c:S,r:x},e:{c:C,r:K}})),!r.sheetStubs)p.MergeAcross?S=C+1:++S;else if(p.MergeAcross||p.MergeDown){for(var oe=S;oe<=C;++oe)for(var ue=x;ue<=K;++ue)(oe>S||ue>x)&&(r.dense?(f[ue]||(f[ue]=[]),f[ue][oe]={t:"z"}):f[ct(oe)+xt(ue)]={t:"z"});S=C+1}else++S;else p=$2(s[0]),p.Index&&(S=+p.Index-1),S<D.s.c&&(D.s.c=S),S>D.e.c&&(D.e.c=S),s[0].slice(-2)==="/>"&&++S,se=[];break;case"row":s[1]==="/"||s[0].slice(-2)==="/>"?(x<D.s.r&&(D.s.r=x),x>D.e.r&&(D.e.r=x),s[0].slice(-2)==="/>"&&(g=ir(s[0]),g.Index&&(x=+g.Index-1)),S=0,++x):(g=ir(s[0]),g.Index&&(x=+g.Index-1),be={},(g.AutoFitHeight=="0"||g.Height)&&(be.hpx=parseInt(g.Height,10),be.hpt=uu(be.hpx),pe[x]=be),g.Hidden=="1"&&(be.hidden=!0,pe[x]=be));break;case"worksheet":if(s[1]==="/"){if((c=l.pop())[0]!==s[3])throw new Error("Bad state: "+c.join("|"));u.push(h),D.s.r<=D.e.r&&D.s.c<=D.e.c&&(f["!ref"]=De(D),r.sheetRows&&r.sheetRows<=D.e.r&&(f["!fullref"]=f["!ref"],D.e.r=r.sheetRows-1,f["!ref"]=De(D))),O.length&&(f["!merges"]=O),ce.length>0&&(f["!cols"]=ce),pe.length>0&&(f["!rows"]=pe),d[h]=f}else D={s:{r:2e6,c:2e6},e:{r:0,c:0}},x=S=0,l.push([s[3],!1]),c=ir(s[0]),h=Ie(c.Name),f=r.dense?[]:{},O=[],W=[],pe=[],R={name:h,Hidden:0},z.Sheets.push(R);break;case"table":if(s[1]==="/"){if((c=l.pop())[0]!==s[3])throw new Error("Bad state: "+c.join("|"))}else{if(s[0].slice(-2)=="/>")break;l.push([s[3],!1]),ce=[],Te=!1}break;case"style":s[1]==="/"?M2(M,I,r):I=ir(s[0]);break;case"numberformat":I.nf=Ie(ir(s[0]).Format||"General"),ji[I.nf]&&(I.nf=ji[I.nf]);for(var ie=0;ie!=392&&_e[ie]!=I.nf;++ie);if(ie==392){for(ie=57;ie!=392;++ie)if(_e[ie]==null){ka(I.nf,ie);break}}break;case"column":if(l[l.length-1][0]!=="table")break;if(ae=ir(s[0]),ae.Hidden&&(ae.hidden=!0,delete ae.Hidden),ae.Width&&(ae.wpx=parseInt(ae.Width,10)),!Te&&ae.wpx>10){Te=!0,It=cu;for(var ee=0;ee<ce.length;++ee)ce[ee]&&ii(ce[ee])}Te&&ii(ae),ce[ae.Index-1||ce.length]=ae;for(var Oe=0;Oe<+ae.Span;++Oe)ce[ce.length]=vt(ae);break;case"namedrange":if(s[1]==="/")break;z.Names||(z.Names=[]);var F=me(s[0]),Je={Name:F.Name,Ref:Za(F.RefersTo.slice(1),{r:0,c:0})};z.Sheets.length>0&&(Je.Sheet=z.Sheets.length-1),z.Names.push(Je);break;case"namedcell":break;case"b":break;case"i":break;case"u":break;case"s":break;case"em":break;case"h2":break;case"h3":break;case"sub":break;case"sup":break;case"span":break;case"alignment":break;case"borders":break;case"border":break;case"font":if(s[0].slice(-2)==="/>")break;s[1]==="/"?T+=a.slice(B,s.index):B=s.index+s[0].length;break;case"interior":if(!r.cellStyles)break;I.Interior=ir(s[0]);break;case"protection":break;case"author":case"title":case"description":case"created":case"keywords":case"subject":case"category":case"company":case"lastauthor":case"lastsaved":case"lastprinted":case"version":case"revision":case"totaltime":case"hyperlinkbase":case"manager":case"contentstatus":case"identifier":case"language":case"appname":if(s[0].slice(-2)==="/>")break;s[1]==="/"?Ev(j,q,a.slice(N,s.index)):N=s.index+s[0].length;break;case"paragraphs":break;case"styles":case"workbook":if(s[1]==="/"){if((c=l.pop())[0]!==s[3])throw new Error("Bad state: "+c.join("|"))}else l.push([s[3],!1]);break;case"comment":if(s[1]==="/"){if((c=l.pop())[0]!==s[3])throw new Error("Bad state: "+c.join("|"));U2(re),se.push(re)}else l.push([s[3],!1]),c=ir(s[0]),re={a:c.Author};break;case"autofilter":if(s[1]==="/"){if((c=l.pop())[0]!==s[3])throw new Error("Bad state: "+c.join("|"))}else if(s[0].charAt(s[0].length-2)!=="/"){var Pe=ir(s[0]);f["!autofilter"]={ref:Za(Pe.Range).replace(/\$/g,"")},l.push([s[3],!0])}break;case"name":break;case"datavalidation":if(s[1]==="/"){if((c=l.pop())[0]!==s[3])throw new Error("Bad state: "+c.join("|"))}else s[0].charAt(s[0].length-2)!=="/"&&l.push([s[3],!0]);break;case"pixelsperinch":break;case"componentoptions":case"documentproperties":case"customdocumentproperties":case"officedocumentsettings":case"pivottable":case"pivotcache":case"names":case"mapinfo":case"pagebreaks":case"querytable":case"sorting":case"schema":case"conditionalformatting":case"smarttagtype":case"smarttags":case"excelworkbook":case"workbookoptions":case"worksheetoptions":if(s[1]==="/"){if((c=l.pop())[0]!==s[3])throw new Error("Bad state: "+c.join("|"))}else s[0].charAt(s[0].length-2)!=="/"&&l.push([s[3],!0]);break;case"null":break;default:if(l.length==0&&s[3]=="document"||l.length==0&&s[3]=="uof")return p0(a,r);var Me=!0;switch(l[l.length-1][0]){case"officedocumentsettings":switch(s[3]){case"allowpng":break;case"removepersonalinformation":break;case"downloadcomponents":break;case"locationofcomponents":break;case"colors":break;case"color":break;case"index":break;case"rgb":break;case"targetscreensize":break;case"readonlyrecommended":break;default:Me=!1}break;case"componentoptions":switch(s[3]){case"toolbar":break;case"hideofficelogo":break;case"spreadsheetautofit":break;case"label":break;case"caption":break;case"maxheight":break;case"maxwidth":break;case"nextsheetnumber":break;default:Me=!1}break;case"excelworkbook":switch(s[3]){case"date1904":z.WBProps.date1904=!0;break;case"windowheight":break;case"windowwidth":break;case"windowtopx":break;case"windowtopy":break;case"tabratio":break;case"protectstructure":break;case"protectwindow":break;case"protectwindows":break;case"activesheet":break;case"displayinknotes":break;case"firstvisiblesheet":break;case"supbook":break;case"sheetname":break;case"sheetindex":break;case"sheetindexfirst":break;case"sheetindexlast":break;case"dll":break;case"acceptlabelsinformulas":break;case"donotsavelinkvalues":break;case"iteration":break;case"maxiterations":break;case"maxchange":break;case"path":break;case"xct":break;case"count":break;case"selectedsheets":break;case"calculation":break;case"uncalced":break;case"startupprompt":break;case"crn":break;case"externname":break;case"formula":break;case"colfirst":break;case"collast":break;case"wantadvise":break;case"boolean":break;case"error":break;case"text":break;case"ole":break;case"noautorecover":break;case"publishobjects":break;case"donotcalculatebeforesave":break;case"number":break;case"refmoder1c1":break;case"embedsavesmarttags":break;default:Me=!1}break;case"workbookoptions":switch(s[3]){case"owcversion":break;case"height":break;case"width":break;default:Me=!1}break;case"worksheetoptions":switch(s[3]){case"visible":if(s[0].slice(-2)!=="/>")if(s[1]==="/")switch(a.slice(N,s.index)){case"SheetHidden":R.Hidden=1;break;case"SheetVeryHidden":R.Hidden=2;break}else N=s.index+s[0].length;break;case"header":f["!margins"]||Hi(f["!margins"]={},"xlml"),isNaN(+me(s[0]).Margin)||(f["!margins"].header=+me(s[0]).Margin);break;case"footer":f["!margins"]||Hi(f["!margins"]={},"xlml"),isNaN(+me(s[0]).Margin)||(f["!margins"].footer=+me(s[0]).Margin);break;case"pagemargins":var Ae=me(s[0]);f["!margins"]||Hi(f["!margins"]={},"xlml"),isNaN(+Ae.Top)||(f["!margins"].top=+Ae.Top),isNaN(+Ae.Left)||(f["!margins"].left=+Ae.Left),isNaN(+Ae.Right)||(f["!margins"].right=+Ae.Right),isNaN(+Ae.Bottom)||(f["!margins"].bottom=+Ae.Bottom);break;case"displayrighttoleft":z.Views||(z.Views=[]),z.Views[0]||(z.Views[0]={}),z.Views[0].RTL=!0;break;case"freezepanes":break;case"frozennosplit":break;case"splithorizontal":case"splitvertical":break;case"donotdisplaygridlines":break;case"activerow":break;case"activecol":break;case"toprowbottompane":break;case"leftcolumnrightpane":break;case"unsynced":break;case"print":break;case"printerrors":break;case"panes":break;case"scale":break;case"pane":break;case"number":break;case"layout":break;case"pagesetup":break;case"selected":break;case"protectobjects":break;case"enableselection":break;case"protectscenarios":break;case"validprinterinfo":break;case"horizontalresolution":break;case"verticalresolution":break;case"numberofcopies":break;case"activepane":break;case"toprowvisible":break;case"leftcolumnvisible":break;case"fittopage":break;case"rangeselection":break;case"papersizeindex":break;case"pagelayoutzoom":break;case"pagebreakzoom":break;case"filteron":break;case"fitwidth":break;case"fitheight":break;case"commentslayout":break;case"zoom":break;case"lefttoright":break;case"gridlines":break;case"allowsort":break;case"allowfilter":break;case"allowinsertrows":break;case"allowdeleterows":break;case"allowinsertcols":break;case"allowdeletecols":break;case"allowinserthyperlinks":break;case"allowformatcells":break;case"allowsizecols":break;case"allowsizerows":break;case"nosummaryrowsbelowdetail":f["!outline"]||(f["!outline"]={}),f["!outline"].above=!0;break;case"tabcolorindex":break;case"donotdisplayheadings":break;case"showpagelayoutzoom":break;case"nosummarycolumnsrightdetail":f["!outline"]||(f["!outline"]={}),f["!outline"].left=!0;break;case"blackandwhite":break;case"donotdisplayzeros":break;case"displaypagebreak":break;case"rowcolheadings":break;case"donotdisplayoutline":break;case"noorientation":break;case"allowusepivottables":break;case"zeroheight":break;case"viewablerange":break;case"selection":break;case"protectcontents":break;default:Me=!1}break;case"pivottable":case"pivotcache":switch(s[3]){case"immediateitemsondrop":break;case"showpagemultipleitemlabel":break;case"compactrowindent":break;case"location":break;case"pivotfield":break;case"orientation":break;case"layoutform":break;case"layoutsubtotallocation":break;case"layoutcompactrow":break;case"position":break;case"pivotitem":break;case"datatype":break;case"datafield":break;case"sourcename":break;case"parentfield":break;case"ptlineitems":break;case"ptlineitem":break;case"countofsameitems":break;case"item":break;case"itemtype":break;case"ptsource":break;case"cacheindex":break;case"consolidationreference":break;case"filename":break;case"reference":break;case"nocolumngrand":break;case"norowgrand":break;case"blanklineafteritems":break;case"hidden":break;case"subtotal":break;case"basefield":break;case"mapchilditems":break;case"function":break;case"refreshonfileopen":break;case"printsettitles":break;case"mergelabels":break;case"defaultversion":break;case"refreshname":break;case"refreshdate":break;case"refreshdatecopy":break;case"versionlastrefresh":break;case"versionlastupdate":break;case"versionupdateablemin":break;case"versionrefreshablemin":break;case"calculation":break;default:Me=!1}break;case"pagebreaks":switch(s[3]){case"colbreaks":break;case"colbreak":break;case"rowbreaks":break;case"rowbreak":break;case"colstart":break;case"colend":break;case"rowend":break;default:Me=!1}break;case"autofilter":switch(s[3]){case"autofiltercolumn":break;case"autofiltercondition":break;case"autofilterand":break;case"autofilteror":break;default:Me=!1}break;case"querytable":switch(s[3]){case"id":break;case"autoformatfont":break;case"autoformatpattern":break;case"querysource":break;case"querytype":break;case"enableredirections":break;case"refreshedinxl9":break;case"urlstring":break;case"htmltables":break;case"connection":break;case"commandtext":break;case"refreshinfo":break;case"notitles":break;case"nextid":break;case"columninfo":break;case"overwritecells":break;case"donotpromptforfile":break;case"textwizardsettings":break;case"source":break;case"number":break;case"decimal":break;case"thousandseparator":break;case"trailingminusnumbers":break;case"formatsettings":break;case"fieldtype":break;case"delimiters":break;case"tab":break;case"comma":break;case"autoformatname":break;case"versionlastedit":break;case"versionlastrefresh":break;default:Me=!1}break;case"datavalidation":switch(s[3]){case"range":break;case"type":break;case"min":break;case"max":break;case"sort":break;case"descending":break;case"order":break;case"casesensitive":break;case"value":break;case"errorstyle":break;case"errormessage":break;case"errortitle":break;case"inputmessage":break;case"inputtitle":break;case"combohide":break;case"inputhide":break;case"condition":break;case"qualifier":break;case"useblank":break;case"value1":break;case"value2":break;case"format":break;case"cellrangelist":break;default:Me=!1}break;case"sorting":case"conditionalformatting":switch(s[3]){case"range":break;case"type":break;case"min":break;case"max":break;case"sort":break;case"descending":break;case"order":break;case"casesensitive":break;case"value":break;case"errorstyle":break;case"errormessage":break;case"errortitle":break;case"cellrangelist":break;case"inputmessage":break;case"inputtitle":break;case"combohide":break;case"inputhide":break;case"condition":break;case"qualifier":break;case"useblank":break;case"value1":break;case"value2":break;case"format":break;default:Me=!1}break;case"mapinfo":case"schema":case"data":switch(s[3]){case"map":break;case"entry":break;case"range":break;case"xpath":break;case"field":break;case"xsdtype":break;case"filteron":break;case"aggregate":break;case"elementtype":break;case"attributetype":break;case"schema":case"element":case"complextype":case"datatype":case"all":case"attribute":case"extends":break;case"row":break;default:Me=!1}break;case"smarttags":break;default:Me=!1;break}if(Me||s[3].match(/!\[CDATA/))break;if(!l[l.length-1][1])throw"Unrecognized tag: "+s[3]+"|"+l.join("|");if(l[l.length-1][0]==="customdocumentproperties"){if(s[0].slice(-2)==="/>")break;s[1]==="/"?N2(U,q,Z,a.slice(N,s.index)):(Z=s,N=s.index+s[0].length);break}if(r.WTF)throw"Unrecognized tag: "+s[3]+"|"+l.join("|")}var le={};return!r.bookSheets&&!r.bookProps&&(le.Sheets=d),le.SheetNames=u,le.Workbook=z,le.SSF=vt(_e),le.Props=j,le.Custprops=U,le}function ms(e,t){switch(vl(t=t||{}),t.type||"base64"){case"base64":return qo(jt(e),t);case"binary":case"buffer":case"file":return qo(e,t);case"array":return qo(Ma(e),t)}}function V2(e){var t={},r=e.content;if(r.l=28,t.AnsiUserType=r.read_shift(0,"lpstr-ansi"),t.AnsiClipboardFormat=rv(r),r.length-r.l<=4)return t;var a=r.read_shift(4);if(a==0||a>40||(r.l-=4,t.Reserved1=r.read_shift(0,"lpstr-ansi"),r.length-r.l<=4)||(a=r.read_shift(4),a!==1907505652)||(t.UnicodeClipboardFormat=av(r),a=r.read_shift(4),a==0||a>40))return t;r.l-=4,t.Reserved2=r.read_shift(0,"lpwstr")}var H2=[60,1084,2066,2165,2175];function j2(e,t,r,a,i){var n=a,o=[],s=r.slice(r.l,r.l+n);if(i&&i.enc&&i.enc.insitu&&s.length>0)switch(e){case 9:case 521:case 1033:case 2057:case 47:case 405:case 225:case 406:case 312:case 404:case 10:break;case 133:break;default:i.enc.insitu(s)}o.push(s),r.l+=n;for(var l=Pr(r,r.l),c=vs[l],d=0;c!=null&&H2.indexOf(l)>-1;)n=Pr(r,r.l+2),d=r.l+4,l==2066?d+=4:(l==2165||l==2175)&&(d+=12),s=r.slice(d,r.l+4+n),o.push(s),r.l+=4+n,c=vs[l=Pr(r,r.l)];var u=Yr(o);mt(u,0);var f=0;u.lens=[];for(var h=0;h<o.length;++h)u.lens.push(f),f+=o[h].length;if(u.length<a)throw"XLS Record 0x"+e.toString(16)+" Truncated: "+u.length+" < "+a;return t.f(u,u.length,i)}function vr(e,t,r){if(e.t!=="z"&&e.XF){var a=0;try{a=e.z||e.XF.numFmtId||0,t.cellNF&&(e.z=_e[a])}catch(n){if(t.WTF)throw n}if(!t||t.cellText!==!1)try{e.t==="e"?e.w=e.w||Va[e.v]:a===0||a=="General"?e.t==="n"?(e.v|0)===e.v?e.w=e.v.toString(10):e.w=en(e.v):e.w=Fa(e.v):e.w=er(a,e.v,{date1904:!!r,dateNF:t&&t.dateNF})}catch(n){if(t.WTF)throw n}if(t.cellDates&&a&&e.t=="n"&&di(_e[a]||String(a))){var i=ya(e.v);i&&(e.t="d",e.v=new Date(i.y,i.m-1,i.d,i.H,i.M,i.S,i.u))}}}function Bn(e,t,r){return{v:e,ixfe:t,t:r}}function W2(e,t){var r={opts:{}},a={},i=t.dense?[]:{},n={},o={},s=null,l=[],c="",d={},u,f="",h,p,g,m,w={},S=[],x,D,M=[],I=[],T={Sheets:[],WBProps:{date1904:!1},Views:[{}]},B={},O=function(Ee){return Ee<8?Ea[Ee]:Ee<64&&I[Ee-8]||Ea[Ee]},j=function(Ee,et,Xt){var st=et.XF.data;if(!(!st||!st.patternType||!Xt||!Xt.cellStyles)){et.s={},et.s.patternType=st.patternType;var ha;(ha=nn(O(st.icvFore)))&&(et.s.fgColor={rgb:ha}),(ha=nn(O(st.icvBack)))&&(et.s.bgColor={rgb:ha})}},U=function(Ee,et,Xt){if(!(be>1)&&!(Xt.sheetRows&&Ee.r>=Xt.sheetRows)){if(Xt.cellStyles&&et.XF&&et.XF.data&&j(Ee,et,Xt),delete et.ixfe,delete et.XF,u=Ee,f=we(Ee),(!o||!o.s||!o.e)&&(o={s:{r:0,c:0},e:{r:0,c:0}}),Ee.r<o.s.r&&(o.s.r=Ee.r),Ee.c<o.s.c&&(o.s.c=Ee.c),Ee.r+1>o.e.r&&(o.e.r=Ee.r+1),Ee.c+1>o.e.c&&(o.e.c=Ee.c+1),Xt.cellFormula&&et.f){for(var st=0;st<S.length;++st)if(!(S[st][0].s.c>Ee.c||S[st][0].s.r>Ee.r)&&!(S[st][0].e.c<Ee.c||S[st][0].e.r<Ee.r)){et.F=De(S[st][0]),(S[st][0].s.c!=Ee.c||S[st][0].s.r!=Ee.r)&&delete et.f,et.f&&(et.f=""+_t(S[st][1],o,Ee,W,N));break}}Xt.dense?(i[Ee.r]||(i[Ee.r]=[]),i[Ee.r][Ee.c]=et):i[f]=et}},N={enc:!1,sbcch:0,snames:[],sharedf:w,arrayf:S,rrtabid:[],lastuser:"",biff:8,codepage:0,winlocked:0,cellStyles:!!t&&!!t.cellStyles,WTF:!!t&&!!t.wtf};t.password&&(N.password=t.password);var Z,se=[],re=[],ce=[],ae=[],Te=!1,W=[];W.SheetNames=N.snames,W.sharedf=N.sharedf,W.arrayf=N.arrayf,W.names=[],W.XTI=[];var pe=0,be=0,C=0,K=[],z=[],R;N.codepage=1200,lr(1200);for(var q=!1;e.l<e.length-1;){var oe=e.l,ue=e.read_shift(2);if(ue===0&&pe===10)break;var ie=e.l===e.length?0:e.read_shift(2),ee=vs[ue];if(ee&&ee.f){if(t.bookSheets&&pe===133&&ue!==133)break;if(pe=ue,ee.r===2||ee.r==12){var Oe=e.read_shift(2);if(ie-=2,!N.enc&&Oe!==ue&&((Oe&255)<<8|Oe>>8)!==ue)throw new Error("rt mismatch: "+Oe+"!="+ue);ee.r==12&&(e.l+=10,ie-=10)}var F={};if(ue===10?F=ee.f(e,ie,N):F=j2(ue,ee,e,ie,N),be==0&&[9,521,1033,2057].indexOf(pe)===-1)continue;switch(ue){case 34:r.opts.Date1904=T.WBProps.date1904=F;break;case 134:r.opts.WriteProtect=!0;break;case 47:if(N.enc||(e.l=0),N.enc=F,!t.password)throw new Error("File is password-protected");if(F.valid==null)throw new Error("Encryption scheme unsupported");if(!F.valid)throw new Error("Password is incorrect");break;case 92:N.lastuser=F;break;case 66:var Je=Number(F);switch(Je){case 21010:Je=1200;break;case 32768:Je=1e4;break;case 32769:Je=1252;break}lr(N.codepage=Je),q=!0;break;case 317:N.rrtabid=F;break;case 25:N.winlocked=F;break;case 439:r.opts.RefreshAll=F;break;case 12:r.opts.CalcCount=F;break;case 16:r.opts.CalcDelta=F;break;case 17:r.opts.CalcIter=F;break;case 13:r.opts.CalcMode=F;break;case 14:r.opts.CalcPrecision=F;break;case 95:r.opts.CalcSaveRecalc=F;break;case 15:N.CalcRefMode=F;break;case 2211:r.opts.FullCalc=F;break;case 129:F.fDialog&&(i["!type"]="dialog"),F.fBelow||((i["!outline"]||(i["!outline"]={})).above=!0),F.fRight||((i["!outline"]||(i["!outline"]={})).left=!0);break;case 224:M.push(F);break;case 430:W.push([F]),W[W.length-1].XTI=[];break;case 35:case 547:W[W.length-1].push(F);break;case 24:case 536:R={Name:F.Name,Ref:_t(F.rgce,o,null,W,N)},F.itab>0&&(R.Sheet=F.itab-1),W.names.push(R),W[0]||(W[0]=[],W[0].XTI=[]),W[W.length-1].push(F),F.Name=="_xlnm._FilterDatabase"&&F.itab>0&&F.rgce&&F.rgce[0]&&F.rgce[0][0]&&F.rgce[0][0][0]=="PtgArea3d"&&(z[F.itab-1]={ref:De(F.rgce[0][0][1][2])});break;case 22:N.ExternCount=F;break;case 23:W.length==0&&(W[0]=[],W[0].XTI=[]),W[W.length-1].XTI=W[W.length-1].XTI.concat(F),W.XTI=W.XTI.concat(F);break;case 2196:if(N.biff<8)break;R!=null&&(R.Comment=F[1]);break;case 18:i["!protect"]=F;break;case 19:F!==0&&N.WTF&&console.error("Password verifier: "+F);break;case 133:n[F.pos]=F,N.snames.push(F.name);break;case 10:{if(--be)break;if(o.e){if(o.e.r>0&&o.e.c>0){if(o.e.r--,o.e.c--,i["!ref"]=De(o),t.sheetRows&&t.sheetRows<=o.e.r){var Pe=o.e.r;o.e.r=t.sheetRows-1,i["!fullref"]=i["!ref"],i["!ref"]=De(o),o.e.r=Pe}o.e.r++,o.e.c++}se.length>0&&(i["!merges"]=se),re.length>0&&(i["!objects"]=re),ce.length>0&&(i["!cols"]=ce),ae.length>0&&(i["!rows"]=ae),T.Sheets.push(B)}c===""?d=i:a[c]=i,i=t.dense?[]:{}}break;case 9:case 521:case 1033:case 2057:{if(N.biff===8&&(N.biff={9:2,521:3,1033:4}[ue]||{512:2,768:3,1024:4,1280:5,1536:8,2:2,7:2}[F.BIFFVer]||8),N.biffguess=F.BIFFVer==0,F.BIFFVer==0&&F.dt==4096&&(N.biff=5,q=!0,lr(N.codepage=28591)),N.biff==8&&F.BIFFVer==0&&F.dt==16&&(N.biff=2),be++)break;if(i=t.dense?[]:{},N.biff<8&&!q&&(q=!0,lr(N.codepage=t.codepage||1252)),N.biff<5||F.BIFFVer==0&&F.dt==4096){c===""&&(c="Sheet1"),o={s:{r:0,c:0},e:{r:0,c:0}};var Me={pos:e.l-ie,name:c};n[Me.pos]=Me,N.snames.push(c)}else c=(n[oe]||{name:""}).name;F.dt==32&&(i["!type"]="chart"),F.dt==64&&(i["!type"]="macro"),se=[],re=[],N.arrayf=S=[],ce=[],ae=[],Te=!1,B={Hidden:(n[oe]||{hs:0}).hs,name:c}}break;case 515:case 3:case 2:i["!type"]=="chart"&&(t.dense?(i[F.r]||[])[F.c]:i[we({c:F.c,r:F.r})])&&++F.c,x={ixfe:F.ixfe,XF:M[F.ixfe]||{},v:F.val,t:"n"},C>0&&(x.z=K[x.ixfe>>8&63]),vr(x,t,r.opts.Date1904),U({c:F.c,r:F.r},x,t);break;case 5:case 517:x={ixfe:F.ixfe,XF:M[F.ixfe],v:F.val,t:F.t},C>0&&(x.z=K[x.ixfe>>8&63]),vr(x,t,r.opts.Date1904),U({c:F.c,r:F.r},x,t);break;case 638:x={ixfe:F.ixfe,XF:M[F.ixfe],v:F.rknum,t:"n"},C>0&&(x.z=K[x.ixfe>>8&63]),vr(x,t,r.opts.Date1904),U({c:F.c,r:F.r},x,t);break;case 189:for(var Ae=F.c;Ae<=F.C;++Ae){var le=F.rkrec[Ae-F.c][0];x={ixfe:le,XF:M[le],v:F.rkrec[Ae-F.c][1],t:"n"},C>0&&(x.z=K[x.ixfe>>8&63]),vr(x,t,r.opts.Date1904),U({c:Ae,r:F.r},x,t)}break;case 6:case 518:case 1030:{if(F.val=="String"){s=F;break}if(x=Bn(F.val,F.cell.ixfe,F.tt),x.XF=M[x.ixfe],t.cellFormula){var Qe=F.formula;if(Qe&&Qe[0]&&Qe[0][0]&&Qe[0][0][0]=="PtgExp"){var Kt=Qe[0][0][1][0],gr=Qe[0][0][1][1],Fr=we({r:Kt,c:gr});w[Fr]?x.f=""+_t(F.formula,o,F.cell,W,N):x.F=((t.dense?(i[Kt]||[])[gr]:i[Fr])||{}).F}else x.f=""+_t(F.formula,o,F.cell,W,N)}C>0&&(x.z=K[x.ixfe>>8&63]),vr(x,t,r.opts.Date1904),U(F.cell,x,t),s=F}break;case 7:case 519:if(s)s.val=F,x=Bn(F,s.cell.ixfe,"s"),x.XF=M[x.ixfe],t.cellFormula&&(x.f=""+_t(s.formula,o,s.cell,W,N)),C>0&&(x.z=K[x.ixfe>>8&63]),vr(x,t,r.opts.Date1904),U(s.cell,x,t),s=null;else throw new Error("String record expects Formula");break;case 33:case 545:{S.push(F);var gi=we(F[0].s);if(h=t.dense?(i[F[0].s.r]||[])[F[0].s.c]:i[gi],t.cellFormula&&h){if(!s||!gi||!h)break;h.f=""+_t(F[1],o,F[0],W,N),h.F=De(F[0])}}break;case 1212:{if(!t.cellFormula)break;if(f){if(!s)break;w[we(s.cell)]=F[0],h=t.dense?(i[s.cell.r]||[])[s.cell.c]:i[we(s.cell)],(h||{}).f=""+_t(F[0],o,u,W,N)}}break;case 253:x=Bn(l[F.isst].t,F.ixfe,"s"),l[F.isst].h&&(x.h=l[F.isst].h),x.XF=M[x.ixfe],C>0&&(x.z=K[x.ixfe>>8&63]),vr(x,t,r.opts.Date1904),U({c:F.c,r:F.r},x,t);break;case 513:t.sheetStubs&&(x={ixfe:F.ixfe,XF:M[F.ixfe],t:"z"},C>0&&(x.z=K[x.ixfe>>8&63]),vr(x,t,r.opts.Date1904),U({c:F.c,r:F.r},x,t));break;case 190:if(t.sheetStubs)for(var Hr=F.c;Hr<=F.C;++Hr){var Mt=F.ixfe[Hr-F.c];x={ixfe:Mt,XF:M[Mt],t:"z"},C>0&&(x.z=K[x.ixfe>>8&63]),vr(x,t,r.opts.Date1904),U({c:Hr,r:F.r},x,t)}break;case 214:case 516:case 4:x=Bn(F.val,F.ixfe,"s"),x.XF=M[x.ixfe],C>0&&(x.z=K[x.ixfe>>8&63]),vr(x,t,r.opts.Date1904),U({c:F.c,r:F.r},x,t);break;case 0:case 512:be===1&&(o=F);break;case 252:l=F;break;case 1054:if(N.biff==4){K[C++]=F[1];for(var Dr=0;Dr<C+163&&_e[Dr]!=F[1];++Dr);Dr>=163&&ka(F[1],C+163)}else ka(F[1],F[0]);break;case 30:{K[C++]=F;for(var jr=0;jr<C+163&&_e[jr]!=F;++jr);jr>=163&&ka(F,C+163)}break;case 229:se=se.concat(F);break;case 93:re[F.cmo[0]]=N.lastobj=F;break;case 438:N.lastobj.TxO=F;break;case 127:N.lastobj.ImData=F;break;case 440:for(m=F[0].s.r;m<=F[0].e.r;++m)for(g=F[0].s.c;g<=F[0].e.c;++g)h=t.dense?(i[m]||[])[g]:i[we({c:g,r:m})],h&&(h.l=F[1]);break;case 2048:for(m=F[0].s.r;m<=F[0].e.r;++m)for(g=F[0].s.c;g<=F[0].e.c;++g)h=t.dense?(i[m]||[])[g]:i[we({c:g,r:m})],h&&h.l&&(h.l.Tooltip=F[1]);break;case 28:{if(N.biff<=5&&N.biff>=2)break;h=t.dense?(i[F[0].r]||[])[F[0].c]:i[we(F[0])];var mi=re[F[2]];h||(t.dense?(i[F[0].r]||(i[F[0].r]=[]),h=i[F[0].r][F[0].c]={t:"z"}):h=i[we(F[0])]={t:"z"},o.e.r=Math.max(o.e.r,F[0].r),o.s.r=Math.min(o.s.r,F[0].r),o.e.c=Math.max(o.e.c,F[0].c),o.s.c=Math.min(o.s.c,F[0].c)),h.c||(h.c=[]),p={a:F[1],t:mi.TxO.t},h.c.push(p)}break;case 2173:fb(M[F.ixfe],F.ext);break;case 125:{if(!N.cellStyles)break;for(;F.e>=F.s;)ce[F.e--]={width:F.w/256,level:F.level||0,hidden:!!(F.flags&1)},Te||(Te=!0,hl(F.w/256)),ii(ce[F.e+1])}break;case 520:{var Dt={};F.level!=null&&(ae[F.r]=Dt,Dt.level=F.level),F.hidden&&(ae[F.r]=Dt,Dt.hidden=!0),F.hpt&&(ae[F.r]=Dt,Dt.hpt=F.hpt,Dt.hpx=on(F.hpt))}break;case 38:case 39:case 40:case 41:i["!margins"]||Hi(i["!margins"]={}),i["!margins"][{38:"left",39:"right",40:"top",41:"bottom"}[ue]]=F;break;case 161:i["!margins"]||Hi(i["!margins"]={}),i["!margins"].header=F.header,i["!margins"].footer=F.footer;break;case 574:F.RTL&&(T.Views[0].RTL=!0);break;case 146:I=F;break;case 2198:Z=F;break;case 140:D=F;break;case 442:c?B.CodeName=F||B.name:T.WBProps.CodeName=F||"ThisWorkbook";break}}else ee||console.error("Missing Info for XLS Record 0x"+ue.toString(16)),e.l+=ie}return r.SheetNames=_r(n).sort(function(mr,Ee){return Number(mr)-Number(Ee)}).map(function(mr){return n[mr].name}),t.bookSheets||(r.Sheets=a),!r.SheetNames.length&&d["!ref"]?(r.SheetNames.push("Sheet1"),r.Sheets&&(r.Sheets.Sheet1=d)):r.Preamble=d,r.Sheets&&z.forEach(function(mr,Ee){r.Sheets[r.SheetNames[Ee]]["!autofilter"]=mr}),r.Strings=l,r.SSF=vt(_e),N.enc&&(r.Encryption=N.enc),Z&&(r.Themes=Z),r.Metadata={},D!==void 0&&(r.Metadata.Country=D),W.names.length>0&&(T.Names=W.names),r.Workbook=T,r}var c0={SI:"e0859ff2f94f6810ab9108002b27b3d9",DSI:"02d5cdd59c2e1b10939708002b2cf9ae",UDI:"05d5cdd59c2e1b10939708002b2cf9ae"};function G2(e,t,r){var a=Fe.find(e,"/!DocumentSummaryInformation");if(a&&a.size>0)try{var i=Gc(a,cv,c0.DSI);for(var n in i)t[n]=i[n]}catch(c){if(r.WTF)throw c}var o=Fe.find(e,"/!SummaryInformation");if(o&&o.size>0)try{var s=Gc(o,dv,c0.SI);for(var l in s)t[l]==null&&(t[l]=s[l])}catch(c){if(r.WTF)throw c}t.HeadingPairs&&t.TitlesOfParts&&(Gd(t.HeadingPairs,t.TitlesOfParts,t,r),delete t.HeadingPairs,delete t.TitlesOfParts)}function Fu(e,t){t||(t={}),vl(t),id(),t.codepage&&Ys(t.codepage);var r,a;if(e.FullPaths){if(Fe.find(e,"/encryption"))throw new Error("File is password-protected");r=Fe.find(e,"!CompObj"),a=Fe.find(e,"/Workbook")||Fe.find(e,"/Book")}else{switch(t.type){case"base64":e=sr(jt(e));break;case"binary":e=sr(e);break;case"buffer":break;case"array":Array.isArray(e)||(e=Array.prototype.slice.call(e));break}mt(e,0),a={content:e}}var i,n;if(r&&V2(r),t.bookProps&&!t.bookSheets)i={};else{var o=Se?"buffer":"array";if(a&&a.content)i=W2(a.content,t);else if((n=Fe.find(e,"PerfectOffice_MAIN"))&&n.content)i=Ui.to_workbook(n.content,(t.type=o,t));else if((n=Fe.find(e,"NativeContent_MAIN"))&&n.content)i=Ui.to_workbook(n.content,(t.type=o,t));else throw(n=Fe.find(e,"MN0"))&&n.content?new Error("Unsupported Works 4 for Mac file"):new Error("Cannot find Workbook stream");t.bookVBA&&e.FullPaths&&Fe.find(e,"/_VBA_PROJECT_CUR/VBA/dir")&&(i.vbaraw=Ob(e))}var s={};return e.FullPaths&&G2(e,s,t),i.Props=i.Custprops=s,t.bookFiles&&(i.cfb=e),i}var fo={0:{f:Sy},1:{f:Oy},2:{f:By},3:{f:$y},4:{f:Py},5:{f:My},6:{f:Hy},7:{f:Ny},8:{f:Xy},9:{f:Ky},10:{f:Wy},11:{f:Gy},12:{f:Iy},13:{f:Uy},14:{f:Ly},15:{f:Ry},16:{f:Eu},17:{f:jy},18:{f:zy},19:{f:ol},20:{},21:{},22:{},23:{},24:{},25:{},26:{},27:{},28:{},29:{},30:{},31:{},32:{},33:{},34:{},35:{T:1},36:{T:-1},37:{T:1},38:{T:-1},39:{f:y2},40:{},42:{},43:{f:Wx},44:{f:jx},45:{f:Gx},46:{f:Xx},47:{f:Kx},48:{},49:{f:Ym},50:{},51:{f:gb},52:{T:1},53:{T:-1},54:{T:1},55:{T:-1},56:{T:1},57:{T:-1},58:{},59:{},60:{f:iu},62:{f:Vy},63:{f:wb},64:{f:a2},65:{},66:{},67:{},68:{},69:{},70:{},128:{},129:{T:1},130:{T:-1},131:{T:1,f:At,p:0},132:{T:-1},133:{T:1},134:{T:-1},135:{T:1},136:{T:-1},137:{T:1,f:r2},138:{T:-1},139:{T:1},140:{T:-1},141:{T:1},142:{T:-1},143:{T:1},144:{T:-1},145:{T:1},146:{T:-1},147:{f:Dy},148:{f:Cy,p:16},151:{f:Zy},152:{},153:{f:b2},154:{},155:{},156:{f:x2},157:{},158:{},159:{T:1,f:dx},160:{T:-1},161:{T:1,f:Ua},162:{T:-1},163:{T:1},164:{T:-1},165:{T:1},166:{T:-1},167:{},168:{},169:{},170:{},171:{},172:{T:1},173:{T:-1},174:{},175:{},176:{f:Yy},177:{T:1},178:{T:-1},179:{T:1},180:{T:-1},181:{T:1},182:{T:-1},183:{T:1},184:{T:-1},185:{T:1},186:{T:-1},187:{T:1},188:{T:-1},189:{T:1},190:{T:-1},191:{T:1},192:{T:-1},193:{T:1},194:{T:-1},195:{T:1},196:{T:-1},197:{T:1},198:{T:-1},199:{T:1},200:{T:-1},201:{T:1},202:{T:-1},203:{T:1},204:{T:-1},205:{T:1},206:{T:-1},207:{T:1},208:{T:-1},209:{T:1},210:{T:-1},211:{T:1},212:{T:-1},213:{T:1},214:{T:-1},215:{T:1},216:{T:-1},217:{T:1},218:{T:-1},219:{T:1},220:{T:-1},221:{T:1},222:{T:-1},223:{T:1},224:{T:-1},225:{T:1},226:{T:-1},227:{T:1},228:{T:-1},229:{T:1},230:{T:-1},231:{T:1},232:{T:-1},233:{T:1},234:{T:-1},235:{T:1},236:{T:-1},237:{T:1},238:{T:-1},239:{T:1},240:{T:-1},241:{T:1},242:{T:-1},243:{T:1},244:{T:-1},245:{T:1},246:{T:-1},247:{T:1},248:{T:-1},249:{T:1},250:{T:-1},251:{T:1},252:{T:-1},253:{T:1},254:{T:-1},255:{T:1},256:{T:-1},257:{T:1},258:{T:-1},259:{T:1},260:{T:-1},261:{T:1},262:{T:-1},263:{T:1},264:{T:-1},265:{T:1},266:{T:-1},267:{T:1},268:{T:-1},269:{T:1},270:{T:-1},271:{T:1},272:{T:-1},273:{T:1},274:{T:-1},275:{T:1},276:{T:-1},277:{},278:{T:1},279:{T:-1},280:{T:1},281:{T:-1},282:{T:1},283:{T:1},284:{T:-1},285:{T:1},286:{T:-1},287:{T:1},288:{T:-1},289:{T:1},290:{T:-1},291:{T:1},292:{T:-1},293:{T:1},294:{T:-1},295:{T:1},296:{T:-1},297:{T:1},298:{T:-1},299:{T:1},300:{T:-1},301:{T:1},302:{T:-1},303:{T:1},304:{T:-1},305:{T:1},306:{T:-1},307:{T:1},308:{T:-1},309:{T:1},310:{T:-1},311:{T:1},312:{T:-1},313:{T:-1},314:{T:1},315:{T:-1},316:{T:1},317:{T:-1},318:{T:1},319:{T:-1},320:{T:1},321:{T:-1},322:{T:1},323:{T:-1},324:{T:1},325:{T:-1},326:{T:1},327:{T:-1},328:{T:1},329:{T:-1},330:{T:1},331:{T:-1},332:{T:1},333:{T:-1},334:{T:1},335:{f:pb},336:{T:-1},337:{f:mb,T:1},338:{T:-1},339:{T:1},340:{T:-1},341:{T:1},342:{T:-1},343:{T:1},344:{T:-1},345:{T:1},346:{T:-1},347:{T:1},348:{T:-1},349:{T:1},350:{T:-1},351:{},352:{},353:{T:1},354:{T:-1},355:{f:hs},357:{},358:{},359:{},360:{T:1},361:{},362:{f:au},363:{},364:{},366:{},367:{},368:{},369:{},370:{},371:{},372:{T:1},373:{T:-1},374:{T:1},375:{T:-1},376:{T:1},377:{T:-1},378:{T:1},379:{T:-1},380:{T:1},381:{T:-1},382:{T:1},383:{T:-1},384:{T:1},385:{T:-1},386:{T:1},387:{T:-1},388:{T:1},389:{T:-1},390:{T:1},391:{T:-1},392:{T:1},393:{T:-1},394:{T:1},395:{T:-1},396:{},397:{},398:{},399:{},400:{},401:{T:1},403:{},404:{},405:{},406:{},407:{},408:{},409:{},410:{},411:{},412:{},413:{},414:{},415:{},416:{},417:{},418:{},419:{},420:{},421:{},422:{T:1},423:{T:1},424:{T:-1},425:{T:-1},426:{f:Jy},427:{f:Qy},428:{},429:{T:1},430:{T:-1},431:{T:1},432:{T:-1},433:{T:1},434:{T:-1},435:{T:1},436:{T:-1},437:{T:1},438:{T:-1},439:{T:1},440:{T:-1},441:{T:1},442:{T:-1},443:{T:1},444:{T:-1},445:{T:1},446:{T:-1},447:{T:1},448:{T:-1},449:{T:1},450:{T:-1},451:{T:1},452:{T:-1},453:{T:1},454:{T:-1},455:{T:1},456:{T:-1},457:{T:1},458:{T:-1},459:{T:1},460:{T:-1},461:{T:1},462:{T:-1},463:{T:1},464:{T:-1},465:{T:1},466:{T:-1},467:{T:1},468:{T:-1},469:{T:1},470:{T:-1},471:{},472:{},473:{T:1},474:{T:-1},475:{},476:{f:t2},477:{},478:{},479:{T:1},480:{T:-1},481:{T:1},482:{T:-1},483:{T:1},484:{T:-1},485:{f:Fy},486:{T:1},487:{T:-1},488:{T:1},489:{T:-1},490:{T:1},491:{T:-1},492:{T:1},493:{T:-1},494:{f:qy},495:{T:1},496:{T:-1},497:{T:1},498:{T:-1},499:{},500:{T:1},501:{T:-1},502:{T:1},503:{T:-1},504:{},505:{T:1},506:{T:-1},507:{},508:{T:1},509:{T:-1},510:{T:1},511:{T:-1},512:{},513:{},514:{T:1},515:{T:-1},516:{T:1},517:{T:-1},518:{T:1},519:{T:-1},520:{T:1},521:{T:-1},522:{},523:{},524:{},525:{},526:{},527:{},528:{T:1},529:{T:-1},530:{T:1},531:{T:-1},532:{T:1},533:{T:-1},534:{},535:{},536:{},537:{},538:{T:1},539:{T:-1},540:{T:1},541:{T:-1},542:{T:1},548:{},549:{},550:{f:hs},551:{},552:{},553:{},554:{T:1},555:{T:-1},556:{T:1},557:{T:-1},558:{T:1},559:{T:-1},560:{T:1},561:{T:-1},562:{},564:{},565:{T:1},566:{T:-1},569:{T:1},570:{T:-1},572:{},573:{T:1},574:{T:-1},577:{},578:{},579:{},580:{},581:{},582:{},583:{},584:{},585:{},586:{},587:{},588:{T:-1},589:{},590:{T:1},591:{T:-1},592:{T:1},593:{T:-1},594:{T:1},595:{T:-1},596:{},597:{T:1},598:{T:-1},599:{T:1},600:{T:-1},601:{T:1},602:{T:-1},603:{T:1},604:{T:-1},605:{T:1},606:{T:-1},607:{},608:{T:1},609:{T:-1},610:{},611:{T:1},612:{T:-1},613:{T:1},614:{T:-1},615:{T:1},616:{T:-1},617:{T:1},618:{T:-1},619:{T:1},620:{T:-1},625:{},626:{T:1},627:{T:-1},628:{T:1},629:{T:-1},630:{T:1},631:{T:-1},632:{f:Cb},633:{T:1},634:{T:-1},635:{T:1,f:Sb},636:{T:-1},637:{f:Zm},638:{T:1},639:{},640:{T:-1},641:{T:1},642:{T:-1},643:{T:1},644:{},645:{T:-1},646:{T:1},648:{T:1},649:{},650:{T:-1},651:{f:c2},652:{},653:{T:1},654:{T:-1},655:{T:1},656:{T:-1},657:{T:1},658:{T:-1},659:{},660:{T:1},661:{},662:{T:-1},663:{},664:{T:1},665:{},666:{T:-1},667:{},668:{},669:{},671:{T:1},672:{T:-1},673:{T:1},674:{T:-1},675:{},676:{},677:{},678:{},679:{},680:{},681:{},1024:{},1025:{},1026:{T:1},1027:{T:-1},1028:{T:1},1029:{T:-1},1030:{},1031:{T:1},1032:{T:-1},1033:{T:1},1034:{T:-1},1035:{},1036:{},1037:{},1038:{T:1},1039:{T:-1},1040:{},1041:{T:1},1042:{T:-1},1043:{},1044:{},1045:{},1046:{T:1},1047:{T:-1},1048:{T:1},1049:{T:-1},1050:{},1051:{T:1},1052:{T:1},1053:{f:i2},1054:{T:1},1055:{},1056:{T:1},1057:{T:-1},1058:{T:1},1059:{T:-1},1061:{},1062:{T:1},1063:{T:-1},1064:{T:1},1065:{T:-1},1066:{T:1},1067:{T:-1},1068:{T:1},1069:{T:-1},1070:{T:1},1071:{T:-1},1072:{T:1},1073:{T:-1},1075:{T:1},1076:{T:-1},1077:{T:1},1078:{T:-1},1079:{T:1},1080:{T:-1},1081:{T:1},1082:{T:-1},1083:{T:1},1084:{T:-1},1085:{},1086:{T:1},1087:{T:-1},1088:{T:1},1089:{T:-1},1090:{T:1},1091:{T:-1},1092:{T:1},1093:{T:-1},1094:{T:1},1095:{T:-1},1096:{},1097:{T:1},1098:{},1099:{T:-1},1100:{T:1},1101:{T:-1},1102:{},1103:{},1104:{},1105:{},1111:{},1112:{},1113:{T:1},1114:{T:-1},1115:{T:1},1116:{T:-1},1117:{},1118:{T:1},1119:{T:-1},1120:{T:1},1121:{T:-1},1122:{T:1},1123:{T:-1},1124:{T:1},1125:{T:-1},1126:{},1128:{T:1},1129:{T:-1},1130:{},1131:{T:1},1132:{T:-1},1133:{T:1},1134:{T:-1},1135:{T:1},1136:{T:-1},1137:{T:1},1138:{T:-1},1139:{T:1},1140:{T:-1},1141:{},1142:{T:1},1143:{T:-1},1144:{T:1},1145:{T:-1},1146:{},1147:{T:1},1148:{T:-1},1149:{T:1},1150:{T:-1},1152:{T:1},1153:{T:-1},1154:{T:-1},1155:{T:-1},1156:{T:-1},1157:{T:1},1158:{T:-1},1159:{T:1},1160:{T:-1},1161:{T:1},1162:{T:-1},1163:{T:1},1164:{T:-1},1165:{T:1},1166:{T:-1},1167:{T:1},1168:{T:-1},1169:{T:1},1170:{T:-1},1171:{},1172:{T:1},1173:{T:-1},1177:{},1178:{T:1},1180:{},1181:{},1182:{},2048:{T:1},2049:{T:-1},2050:{},2051:{T:1},2052:{T:-1},2053:{},2054:{},2055:{T:1},2056:{T:-1},2057:{T:1},2058:{T:-1},2060:{},2067:{},2068:{T:1},2069:{T:-1},2070:{},2071:{},2072:{T:1},2073:{T:-1},2075:{},2076:{},2077:{T:1},2078:{T:-1},2079:{},2080:{T:1},2081:{T:-1},2082:{},2083:{T:1},2084:{T:-1},2085:{T:1},2086:{T:-1},2087:{T:1},2088:{T:-1},2089:{T:1},2090:{T:-1},2091:{},2092:{},2093:{T:1},2094:{T:-1},2095:{},2096:{T:1},2097:{T:-1},2098:{T:1},2099:{T:-1},2100:{T:1},2101:{T:-1},2102:{},2103:{T:1},2104:{T:-1},2105:{},2106:{T:1},2107:{T:-1},2108:{},2109:{T:1},2110:{T:-1},2111:{T:1},2112:{T:-1},2113:{T:1},2114:{T:-1},2115:{},2116:{},2117:{},2118:{T:1},2119:{T:-1},2120:{},2121:{T:1},2122:{T:-1},2123:{T:1},2124:{T:-1},2125:{},2126:{T:1},2127:{T:-1},2128:{},2129:{T:1},2130:{T:-1},2131:{T:1},2132:{T:-1},2133:{T:1},2134:{},2135:{},2136:{},2137:{T:1},2138:{T:-1},2139:{T:1},2140:{T:-1},2141:{},3072:{},3073:{},4096:{T:1},4097:{T:-1},5002:{T:1},5003:{T:-1},5081:{T:1},5082:{T:-1},5083:{},5084:{T:1},5085:{T:-1},5086:{T:1},5087:{T:-1},5088:{},5089:{},5090:{},5092:{T:1},5093:{T:-1},5094:{},5095:{T:1},5096:{T:-1},5097:{},5099:{},65535:{n:""}},vs={6:{f:Xo},10:{f:Wr},12:{f:it},13:{f:it},14:{f:tt},15:{f:tt},16:{f:kt},17:{f:tt},18:{f:tt},19:{f:it},20:{f:qc},21:{f:qc},23:{f:au},24:{f:Jc},25:{f:tt},26:{},27:{},28:{f:T1},29:{},34:{f:tt},35:{f:Zc},38:{f:kt},39:{f:kt},40:{f:kt},41:{f:kt},42:{f:tt},43:{f:tt},47:{f:Fx},49:{f:o1},51:{f:it},60:{},61:{f:a1},64:{f:tt},65:{f:n1},66:{f:it},77:{},80:{},81:{},82:{},85:{f:it},89:{},90:{},91:{},92:{f:Yv},93:{f:S1},94:{},95:{f:tt},96:{},97:{},99:{f:tt},125:{f:iu},128:{f:m1},129:{f:qv},130:{f:it},131:{f:tt},132:{f:tt},133:{f:Zv},134:{},140:{f:P1},141:{f:it},144:{},146:{f:$1},151:{},152:{},153:{},154:{},155:{},156:{f:it},157:{},158:{},160:{f:B1},161:{f:N1},174:{},175:{},176:{},177:{},178:{},180:{},181:{},182:{},184:{},185:{},189:{f:h1},190:{f:f1},193:{f:Wr},197:{},198:{},199:{},200:{},201:{},202:{f:tt},203:{},204:{},205:{},206:{},207:{},208:{},209:{},210:{},211:{},213:{},215:{},216:{},217:{},218:{f:it},220:{},221:{f:tt},222:{},224:{f:g1},225:{f:Xv},226:{f:Wr},227:{},229:{f:A1},233:{},235:{},236:{},237:{},239:{},240:{},241:{},242:{},244:{},245:{},246:{},247:{},248:{},249:{},251:{},252:{f:Jv},253:{f:s1},255:{f:Qv},256:{},259:{},290:{},311:{},312:{},315:{},317:{f:Zd},318:{},319:{},320:{},330:{},331:{},333:{},334:{},335:{},336:{},337:{},338:{},339:{},340:{},351:{},352:{f:tt},353:{f:Wr},401:{},402:{},403:{},404:{},405:{},406:{},407:{},408:{},425:{},426:{},427:{},428:{},429:{},430:{f:x1},431:{f:tt},432:{},433:{},434:{},437:{},438:{f:D1},439:{f:tt},440:{f:O1},441:{},442:{f:yn},443:{},444:{f:it},445:{},446:{},448:{f:Wr},449:{f:r1,r:2},450:{f:Wr},512:{f:Xc},513:{f:M1},515:{f:v1},516:{f:l1},517:{f:Yc},519:{f:U1},520:{f:e1},523:{},545:{f:Qc},549:{f:Kc},566:{},574:{f:i1},638:{f:u1},659:{},1048:{},1054:{f:c1},1084:{},1212:{f:_1},2048:{f:I1},2049:{},2050:{},2051:{},2052:{},2053:{},2054:{},2055:{},2056:{},2057:{f:Nn},2058:{},2059:{},2060:{},2061:{},2062:{},2063:{},2064:{},2066:{},2067:{},2128:{},2129:{},2130:{},2131:{},2132:{},2133:{},2134:{},2135:{},2136:{},2137:{},2138:{},2146:{},2147:{r:12},2148:{},2149:{},2150:{},2151:{f:Wr},2152:{},2154:{},2155:{},2156:{},2161:{},2162:{},2164:{},2165:{},2166:{},2167:{},2168:{},2169:{},2170:{},2171:{},2172:{f:L1,r:12},2173:{f:hb,r:12},2174:{},2175:{},2180:{},2181:{},2182:{},2183:{},2184:{},2185:{},2186:{},2187:{},2188:{f:tt,r:12},2189:{},2190:{r:12},2191:{},2192:{},2194:{},2195:{},2196:{f:y1,r:12},2197:{},2198:{f:ob,r:12},2199:{},2200:{},2201:{},2202:{f:k1,r:12},2203:{f:Wr},2204:{},2205:{},2206:{},2207:{},2211:{f:t1},2212:{},2213:{},2214:{},2215:{},4097:{},4098:{},4099:{},4102:{},4103:{},4105:{},4106:{},4107:{},4108:{},4109:{},4116:{},4117:{},4118:{},4119:{},4120:{},4121:{},4122:{},4123:{},4124:{},4125:{},4126:{},4127:{},4128:{},4129:{},4130:{},4132:{},4133:{},4134:{f:it},4135:{},4146:{},4147:{},4148:{},4149:{},4154:{},4156:{},4157:{},4158:{},4159:{},4160:{},4161:{},4163:{},4164:{f:z1},4165:{},4166:{},4168:{},4170:{},4171:{},4174:{},4175:{},4176:{},4177:{},4187:{},4188:{f:R1},4189:{},4191:{},4192:{},4193:{},4194:{},4195:{},4196:{},4197:{},4198:{},4199:{},4200:{},0:{f:Xc},1:{},2:{f:W1},3:{f:j1},4:{f:H1},5:{f:Yc},7:{f:G1},8:{},9:{f:Nn},11:{},22:{f:it},30:{f:d1},31:{},32:{},33:{f:Qc},36:{},37:{f:Kc},50:{f:K1},62:{},52:{},67:{},68:{f:it},69:{},86:{},126:{},127:{f:V1},135:{},136:{},137:{},145:{},148:{},149:{},150:{},169:{},171:{},188:{},191:{},192:{},194:{},195:{},214:{f:X1},223:{},234:{},354:{},421:{},518:{f:Xo},521:{f:Nn},536:{f:Jc},547:{f:Zc},561:{},579:{},1030:{f:Xo},1033:{f:Nn},1091:{},2157:{},2163:{},2177:{},2240:{},2241:{},2242:{},2243:{},2244:{},2245:{},2246:{},2247:{},2248:{},2249:{},2250:{},2251:{},2262:{r:12},29282:{}};function nr(e,t,r,a){var i=t;if(!isNaN(i)){var n=(r||[]).length||0,o=e.next(4);o.write_shift(2,i),o.write_shift(2,n),n>0&&zd(r)&&e.push(r)}}function d0(e,t){var r=t||{},a=r.dense?[]:{};e=e.replace(/<!--.*?-->/g,"");var i=e.match(/<table/i);if(!i)throw new Error("Invalid HTML: could not find <table>");var n=e.match(/<\/table/i),o=i.index,s=n&&n.index||e.length,l=vm(e.slice(o,s),/(:?<tr[^>]*>)/i,"<tr>"),c=-1,d=0,u=0,f=0,h={s:{r:1e7,c:1e7},e:{r:0,c:0}},p=[];for(o=0;o<l.length;++o){var g=l[o].trim(),m=g.slice(0,3).toLowerCase();if(m=="<tr"){if(++c,r.sheetRows&&r.sheetRows<=c){--c;break}d=0;continue}if(!(m!="<td"&&m!="<th")){var w=g.split(/<\/t[dh]>/i);for(s=0;s<w.length;++s){var S=w[s].trim();if(S.match(/<t[dh]/i)){for(var x=S,D=0;x.charAt(0)=="<"&&(D=x.indexOf(">"))>-1;)x=x.slice(D+1);for(var M=0;M<p.length;++M){var I=p[M];I.s.c==d&&I.s.r<c&&c<=I.e.r&&(d=I.e.c+1,M=-1)}var T=me(S.slice(0,S.indexOf(">")));f=T.colspan?+T.colspan:1,((u=+T.rowspan)>1||f>1)&&p.push({s:{r:c,c:d},e:{r:c+(u||1)-1,c:d+f-1}});var B=T.t||T["data-t"]||"";if(!x.length){d+=f;continue}if(x=Td(x),h.s.r>c&&(h.s.r=c),h.e.r<c&&(h.e.r=c),h.s.c>d&&(h.s.c=d),h.e.c<d&&(h.e.c=d),!x.length){d+=f;continue}var O={t:"s",v:x};r.raw||!x.trim().length||B=="s"||(x==="TRUE"?O={t:"b",v:!0}:x==="FALSE"?O={t:"b",v:!1}:isNaN(dr(x))?isNaN(ai(x).getDate())||(O={t:"d",v:ft(x)},r.cellDates||(O={t:"n",v:$t(O.v)}),O.z=r.dateNF||_e[14]):O={t:"n",v:dr(x)}),r.dense?(a[c]||(a[c]=[]),a[c][d]=O):a[we({r:c,c:d})]=O,d+=f}}}}return a["!ref"]=De(h),p.length&&(a["!merges"]=p),a}function K2(e,t,r,a){for(var i=e["!merges"]||[],n=[],o=t.s.c;o<=t.e.c;++o){for(var s=0,l=0,c=0;c<i.length;++c)if(!(i[c].s.r>r||i[c].s.c>o)&&!(i[c].e.r<r||i[c].e.c<o)){if(i[c].s.r<r||i[c].s.c<o){s=-1;break}s=i[c].e.r-i[c].s.r+1,l=i[c].e.c-i[c].s.c+1;break}if(!(s<0)){var d=we({r,c:o}),u=a.dense?(e[r]||[])[o]:e[d],f=u&&u.v!=null&&(u.h||tl(u.w||(zr(u),u.w)||""))||"",h={};s>1&&(h.rowspan=s),l>1&&(h.colspan=l),a.editable?f='<span contenteditable="true">'+f+"</span>":u&&(h["data-t"]=u&&u.t||"z",u.v!=null&&(h["data-v"]=u.v),u.z!=null&&(h["data-z"]=u.z),u.l&&(u.l.Target||"#").charAt(0)!="#"&&(f='<a href="'+u.l.Target+'">'+f+"</a>")),h.id=(a.id||"sjs")+"-"+d,n.push(Pm("td",f,h))}}var p="<tr>";return p+n.join("")+"</tr>"}var X2='<html><head><meta charset="utf-8"/><title>SheetJS Table Export</title></head><body>',Y2="</body></html>";function q2(e,t){var r=e.match(/<table[\s\S]*?>[\s\S]*?<\/table>/gi);if(!r||r.length==0)throw new Error("Invalid HTML: could not find <table>");if(r.length==1)return da(d0(r[0],t),t);var a=bl();return r.forEach(function(i,n){wl(a,d0(i,t),"Sheet"+(n+1))}),a}function Z2(e,t,r){var a=[];return a.join("")+"<table"+(r&&r.id?' id="'+r.id+'"':"")+">"}function J2(e,t){var r=t||{},a=r.header!=null?r.header:X2,i=r.footer!=null?r.footer:Y2,n=[a],o=ui(e["!ref"]);r.dense=Array.isArray(e),n.push(Z2(e,o,r));for(var s=o.s.r;s<=o.e.r;++s)n.push(K2(e,o,s,r));return n.push("</table>"+i),n.join("")}function Du(e,t,r){var a=r||{},i=0,n=0;if(a.origin!=null)if(typeof a.origin=="number")i=a.origin;else{var o=typeof a.origin=="string"?Pt(a.origin):a.origin;i=o.r,n=o.c}var s=t.getElementsByTagName("tr"),l=Math.min(a.sheetRows||1e7,s.length),c={s:{r:0,c:0},e:{r:i,c:n}};if(e["!ref"]){var d=ui(e["!ref"]);c.s.r=Math.min(c.s.r,d.s.r),c.s.c=Math.min(c.s.c,d.s.c),c.e.r=Math.max(c.e.r,d.e.r),c.e.c=Math.max(c.e.c,d.e.c),i==-1&&(c.e.r=i=d.e.r+1)}var u=[],f=0,h=e["!rows"]||(e["!rows"]=[]),p=0,g=0,m=0,w=0,S=0,x=0;for(e["!cols"]||(e["!cols"]=[]);p<s.length&&g<l;++p){var D=s[p];if(u0(D)){if(a.display)continue;h[g]={hidden:!0}}var M=D.children;for(m=w=0;m<M.length;++m){var I=M[m];if(!(a.display&&u0(I))){var T=I.hasAttribute("data-v")?I.getAttribute("data-v"):I.hasAttribute("v")?I.getAttribute("v"):Td(I.innerHTML),B=I.getAttribute("data-z")||I.getAttribute("z");for(f=0;f<u.length;++f){var O=u[f];O.s.c==w+n&&O.s.r<g+i&&g+i<=O.e.r&&(w=O.e.c+1-n,f=-1)}x=+I.getAttribute("colspan")||1,((S=+I.getAttribute("rowspan")||1)>1||x>1)&&u.push({s:{r:g+i,c:w+n},e:{r:g+i+(S||1)-1,c:w+n+(x||1)-1}});var j={t:"s",v:T},U=I.getAttribute("data-t")||I.getAttribute("t")||"";T!=null&&(T.length==0?j.t=U||"z":a.raw||T.trim().length==0||U=="s"||(T==="TRUE"?j={t:"b",v:!0}:T==="FALSE"?j={t:"b",v:!1}:isNaN(dr(T))?isNaN(ai(T).getDate())||(j={t:"d",v:ft(T)},a.cellDates||(j={t:"n",v:$t(j.v)}),j.z=a.dateNF||_e[14]):j={t:"n",v:dr(T)})),j.z===void 0&&B!=null&&(j.z=B);var N="",Z=I.getElementsByTagName("A");if(Z&&Z.length)for(var se=0;se<Z.length&&!(Z[se].hasAttribute("href")&&(N=Z[se].getAttribute("href"),N.charAt(0)!="#"));++se);N&&N.charAt(0)!="#"&&(j.l={Target:N}),a.dense?(e[g+i]||(e[g+i]=[]),e[g+i][w+n]=j):e[we({c:w+n,r:g+i})]=j,c.e.c<w+n&&(c.e.c=w+n),w+=x}}++g}return u.length&&(e["!merges"]=(e["!merges"]||[]).concat(u)),c.e.r=Math.max(c.e.r,g-1+i),e["!ref"]=De(c),g>=l&&(e["!fullref"]=De((c.e.r=s.length-p+g-1+i,c))),e}function Ou(e,t){var r=t||{},a=r.dense?[]:{};return Du(a,e,t)}function Q2(e,t){return da(Ou(e,t),t)}function u0(e){var t="",r=e_(e);return r&&(t=r(e).getPropertyValue("display")),t||(t=e.style&&e.style.display),t==="none"}function e_(e){return e.ownerDocument.defaultView&&typeof e.ownerDocument.defaultView.getComputedStyle=="function"?e.ownerDocument.defaultView.getComputedStyle:typeof getComputedStyle=="function"?getComputedStyle:null}function t_(e){var t=e.replace(/[\t\r\n]/g," ").trim().replace(/ +/g," ").replace(/<text:s\/>/g," ").replace(/<text:s text:c="(\d+)"\/>/g,function(a,i){return Array(parseInt(i,10)+1).join(" ")}).replace(/<text:tab[^>]*\/>/g,"	").replace(/<text:line-break\/>/g,`
`),r=Ie(t.replace(/<[^>]*>/g,""));return[r]}var h0={day:["d","dd"],month:["m","mm"],year:["y","yy"],hours:["h","hh"],minutes:["m","mm"],seconds:["s","ss"],"am-pm":["A/P","AM/PM"],"day-of-week":["ddd","dddd"],era:["e","ee"],quarter:["\\Qm",'m\\"th quarter"']};function Iu(e,t){var r=t||{},a=rl(e),i=[],n,o,s={name:""},l="",c=0,d,u,f={},h=[],p=r.dense?[]:{},g,m,w={value:""},S="",x=0,D=[],M=-1,I=-1,T={s:{r:1e6,c:1e7},e:{r:0,c:0}},B=0,O={},j=[],U={},N=0,Z=0,se=[],re=1,ce=1,ae=[],Te={Names:[]},W={},pe=["",""],be=[],C={},K="",z=0,R=!1,q=!1,oe=0;for(rn.lastIndex=0,a=a.replace(/<!--([\s\S]*?)-->/mg,"").replace(/<!DOCTYPE[^\[]*\[[^\]]*\]>/gm,"");g=rn.exec(a);)switch(g[3]=g[3].replace(/_.*$/,"")){case"table":case"工作表":g[1]==="/"?(T.e.c>=T.s.c&&T.e.r>=T.s.r?p["!ref"]=De(T):p["!ref"]="A1:A1",r.sheetRows>0&&r.sheetRows<=T.e.r&&(p["!fullref"]=p["!ref"],T.e.r=r.sheetRows-1,p["!ref"]=De(T)),j.length&&(p["!merges"]=j),se.length&&(p["!rows"]=se),d.name=d.名称||d.name,typeof JSON<"u"&&JSON.stringify(d),h.push(d.name),f[d.name]=p,q=!1):g[0].charAt(g[0].length-2)!=="/"&&(d=me(g[0],!1),M=I=-1,T.s.r=T.s.c=1e7,T.e.r=T.e.c=0,p=r.dense?[]:{},j=[],se=[],q=!0);break;case"table-row-group":g[1]==="/"?--B:++B;break;case"table-row":case"行":if(g[1]==="/"){M+=re,re=1;break}if(u=me(g[0],!1),u.行号?M=u.行号-1:M==-1&&(M=0),re=+u["number-rows-repeated"]||1,re<10)for(oe=0;oe<re;++oe)B>0&&(se[M+oe]={level:B});I=-1;break;case"covered-table-cell":g[1]!=="/"&&++I,r.sheetStubs&&(r.dense?(p[M]||(p[M]=[]),p[M][I]={t:"z"}):p[we({r:M,c:I})]={t:"z"}),S="",D=[];break;case"table-cell":case"数据":if(g[0].charAt(g[0].length-2)==="/")++I,w=me(g[0],!1),ce=parseInt(w["number-columns-repeated"]||"1",10),m={t:"z",v:null},w.formula&&r.cellFormula!=!1&&(m.f=o0(Ie(w.formula))),(w.数据类型||w["value-type"])=="string"&&(m.t="s",m.v=Ie(w["string-value"]||""),r.dense?(p[M]||(p[M]=[]),p[M][I]=m):p[we({r:M,c:I})]=m),I+=ce-1;else if(g[1]!=="/"){++I,S="",x=0,D=[],ce=1;var ue=re?M+re-1:M;if(I>T.e.c&&(T.e.c=I),I<T.s.c&&(T.s.c=I),M<T.s.r&&(T.s.r=M),ue>T.e.r&&(T.e.r=ue),w=me(g[0],!1),be=[],C={},m={t:w.数据类型||w["value-type"],v:null},r.cellFormula)if(w.formula&&(w.formula=Ie(w.formula)),w["number-matrix-columns-spanned"]&&w["number-matrix-rows-spanned"]&&(N=parseInt(w["number-matrix-rows-spanned"],10)||0,Z=parseInt(w["number-matrix-columns-spanned"],10)||0,U={s:{r:M,c:I},e:{r:M+N-1,c:I+Z-1}},m.F=De(U),ae.push([U,m.F])),w.formula)m.f=o0(w.formula);else for(oe=0;oe<ae.length;++oe)M>=ae[oe][0].s.r&&M<=ae[oe][0].e.r&&I>=ae[oe][0].s.c&&I<=ae[oe][0].e.c&&(m.F=ae[oe][1]);switch((w["number-columns-spanned"]||w["number-rows-spanned"])&&(N=parseInt(w["number-rows-spanned"],10)||0,Z=parseInt(w["number-columns-spanned"],10)||0,U={s:{r:M,c:I},e:{r:M+N-1,c:I+Z-1}},j.push(U)),w["number-columns-repeated"]&&(ce=parseInt(w["number-columns-repeated"],10)),m.t){case"boolean":m.t="b",m.v=We(w["boolean-value"]);break;case"float":m.t="n",m.v=parseFloat(w.value);break;case"percentage":m.t="n",m.v=parseFloat(w.value);break;case"currency":m.t="n",m.v=parseFloat(w.value);break;case"date":m.t="d",m.v=ft(w["date-value"]),r.cellDates||(m.t="n",m.v=$t(m.v)),m.z="m/d/yy";break;case"time":m.t="n",m.v=pm(w["time-value"])/86400,r.cellDates&&(m.t="d",m.v=Co(m.v)),m.z="HH:MM:SS";break;case"number":m.t="n",m.v=parseFloat(w.数据数值);break;default:if(m.t==="string"||m.t==="text"||!m.t)m.t="s",w["string-value"]!=null&&(S=Ie(w["string-value"]),D=[]);else throw new Error("Unsupported value type "+m.t)}}else{if(R=!1,m.t==="s"&&(m.v=S||"",D.length&&(m.R=D),R=x==0),W.Target&&(m.l=W),be.length>0&&(m.c=be,be=[]),S&&r.cellText!==!1&&(m.w=S),R&&(m.t="z",delete m.v),(!R||r.sheetStubs)&&!(r.sheetRows&&r.sheetRows<=M))for(var ie=0;ie<re;++ie){if(ce=parseInt(w["number-columns-repeated"]||"1",10),r.dense)for(p[M+ie]||(p[M+ie]=[]),p[M+ie][I]=ie==0?m:vt(m);--ce>0;)p[M+ie][I+ce]=vt(m);else for(p[we({r:M+ie,c:I})]=m;--ce>0;)p[we({r:M+ie,c:I+ce})]=vt(m);T.e.c<=I&&(T.e.c=I)}ce=parseInt(w["number-columns-repeated"]||"1",10),I+=ce-1,ce=0,m={},S="",D=[]}W={};break;case"document":case"document-content":case"电子表格文档":case"spreadsheet":case"主体":case"scripts":case"styles":case"font-face-decls":case"master-styles":if(g[1]==="/"){if((n=i.pop())[0]!==g[3])throw"Bad state: "+n}else g[0].charAt(g[0].length-2)!=="/"&&i.push([g[3],!0]);break;case"annotation":if(g[1]==="/"){if((n=i.pop())[0]!==g[3])throw"Bad state: "+n;C.t=S,D.length&&(C.R=D),C.a=K,be.push(C)}else g[0].charAt(g[0].length-2)!=="/"&&i.push([g[3],!1]);K="",z=0,S="",x=0,D=[];break;case"creator":g[1]==="/"?K=a.slice(z,g.index):z=g.index+g[0].length;break;case"meta":case"元数据":case"settings":case"config-item-set":case"config-item-map-indexed":case"config-item-map-entry":case"config-item-map-named":case"shapes":case"frame":case"text-box":case"image":case"data-pilot-tables":case"list-style":case"form":case"dde-links":case"event-listeners":case"chart":if(g[1]==="/"){if((n=i.pop())[0]!==g[3])throw"Bad state: "+n}else g[0].charAt(g[0].length-2)!=="/"&&i.push([g[3],!1]);S="",x=0,D=[];break;case"scientific-number":break;case"currency-symbol":break;case"currency-style":break;case"number-style":case"percentage-style":case"date-style":case"time-style":if(g[1]==="/"){if(O[s.name]=l,(n=i.pop())[0]!==g[3])throw"Bad state: "+n}else g[0].charAt(g[0].length-2)!=="/"&&(l="",s=me(g[0],!1),i.push([g[3],!0]));break;case"script":break;case"libraries":break;case"automatic-styles":break;case"default-style":case"page-layout":break;case"style":break;case"map":break;case"font-face":break;case"paragraph-properties":break;case"table-properties":break;case"table-column-properties":break;case"table-row-properties":break;case"table-cell-properties":break;case"number":switch(i[i.length-1][0]){case"time-style":case"date-style":o=me(g[0],!1),l+=h0[g[3]][o.style==="long"?1:0];break}break;case"fraction":break;case"day":case"month":case"year":case"era":case"day-of-week":case"week-of-year":case"quarter":case"hours":case"minutes":case"seconds":case"am-pm":switch(i[i.length-1][0]){case"time-style":case"date-style":o=me(g[0],!1),l+=h0[g[3]][o.style==="long"?1:0];break}break;case"boolean-style":break;case"boolean":break;case"text-style":break;case"text":if(g[0].slice(-2)==="/>")break;if(g[1]==="/")switch(i[i.length-1][0]){case"number-style":case"date-style":case"time-style":l+=a.slice(c,g.index);break}else c=g.index+g[0].length;break;case"named-range":o=me(g[0],!1),pe=Yo(o["cell-range-address"]);var ee={Name:o.name,Ref:pe[0]+"!"+pe[1]};q&&(ee.Sheet=h.length),Te.Names.push(ee);break;case"text-content":break;case"text-properties":break;case"embedded-text":break;case"body":case"电子表格":break;case"forms":break;case"table-column":break;case"table-header-rows":break;case"table-rows":break;case"table-column-group":break;case"table-header-columns":break;case"table-columns":break;case"null-date":break;case"graphic-properties":break;case"calculation-settings":break;case"named-expressions":break;case"label-range":break;case"label-ranges":break;case"named-expression":break;case"sort":break;case"sort-by":break;case"sort-groups":break;case"tab":break;case"line-break":break;case"span":break;case"p":case"文本串":if(["master-styles"].indexOf(i[i.length-1][0])>-1)break;if(g[1]==="/"&&(!w||!w["string-value"])){var Oe=t_(a.slice(x,g.index));S=(S.length>0?S+`
`:"")+Oe[0]}else me(g[0],!1),x=g.index+g[0].length;break;case"s":break;case"database-range":if(g[1]==="/")break;try{pe=Yo(me(g[0])["target-range-address"]),f[pe[0]]["!autofilter"]={ref:pe[1]}}catch{}break;case"date":break;case"object":break;case"title":case"标题":break;case"desc":break;case"binary-data":break;case"table-source":break;case"scenario":break;case"iteration":break;case"content-validations":break;case"content-validation":break;case"help-message":break;case"error-message":break;case"database-ranges":break;case"filter":break;case"filter-and":break;case"filter-or":break;case"filter-condition":break;case"list-level-style-bullet":break;case"list-level-style-number":break;case"list-level-properties":break;case"sender-firstname":case"sender-lastname":case"sender-initials":case"sender-title":case"sender-position":case"sender-email":case"sender-phone-private":case"sender-fax":case"sender-company":case"sender-phone-work":case"sender-street":case"sender-city":case"sender-postal-code":case"sender-country":case"sender-state-or-province":case"author-name":case"author-initials":case"chapter":case"file-name":case"template-name":case"sheet-name":break;case"event-listener":break;case"initial-creator":case"creation-date":case"print-date":case"generator":case"document-statistic":case"user-defined":case"editing-duration":case"editing-cycles":break;case"config-item":break;case"page-number":break;case"page-count":break;case"time":break;case"cell-range-source":break;case"detective":break;case"operation":break;case"highlighted-range":break;case"data-pilot-table":case"source-cell-range":case"source-service":case"data-pilot-field":case"data-pilot-level":case"data-pilot-subtotals":case"data-pilot-subtotal":case"data-pilot-members":case"data-pilot-member":case"data-pilot-display-info":case"data-pilot-sort-info":case"data-pilot-layout-info":case"data-pilot-field-reference":case"data-pilot-groups":case"data-pilot-group":case"data-pilot-group-member":break;case"rect":break;case"dde-connection-decls":case"dde-connection-decl":case"dde-link":case"dde-source":break;case"properties":break;case"property":break;case"a":if(g[1]!=="/"){if(W=me(g[0],!1),!W.href)break;W.Target=Ie(W.href),delete W.href,W.Target.charAt(0)=="#"&&W.Target.indexOf(".")>-1?(pe=Yo(W.Target.slice(1)),W.Target="#"+pe[0]+"!"+pe[1]):W.Target.match(/^\.\.[\\\/]/)&&(W.Target=W.Target.slice(3))}break;case"table-protection":break;case"data-pilot-grand-total":break;case"office-document-common-attrs":break;default:switch(g[2]){case"dc:":case"calcext:":case"loext:":case"ooo:":case"chartooo:":case"draw:":case"style:":case"chart:":case"form:":case"uof:":case"表:":case"字:":break;default:if(r.WTF)throw new Error(g)}}var F={Sheets:f,SheetNames:h,Workbook:Te};return r.bookSheets&&delete F.Sheets,F}function f0(e,t){t=t||{},Zt(e,"META-INF/manifest.xml")&&vv(at(e,"META-INF/manifest.xml"),t);var r=Vt(e,"content.xml");if(!r)throw new Error("Missing content.xml in ODS / UOF file");var a=Iu(Ue(r),t);return Zt(e,"meta.xml")&&(a.Props=Wd(at(e,"meta.xml"))),a}function p0(e,t){return Iu(e,t)}/*! sheetjs (C) 2013-present SheetJS -- http://sheetjs.com */function gl(e){return new DataView(e.buffer,e.byteOffset,e.byteLength)}function xs(e){return typeof TextDecoder<"u"?new TextDecoder().decode(e):Ue(Ma(e))}function bs(e){var t=e.reduce(function(i,n){return i+n.length},0),r=new Uint8Array(t),a=0;return e.forEach(function(i){r.set(i,a),a+=i.length}),r}function g0(e){return e-=e>>1&1431655765,e=(e&858993459)+(e>>2&858993459),(e+(e>>4)&252645135)*16843009>>>24}function r_(e,t){for(var r=(e[t+15]&127)<<7|e[t+14]>>1,a=e[t+14]&1,i=t+13;i>=t;--i)a=a*256+e[i];return(e[t+15]&128?-a:a)*Math.pow(10,r-6176)}function sn(e,t){var r=t?t[0]:0,a=e[r]&127;e:if(e[r++]>=128&&(a|=(e[r]&127)<<7,e[r++]<128||(a|=(e[r]&127)<<14,e[r++]<128)||(a|=(e[r]&127)<<21,e[r++]<128)||(a+=(e[r]&127)*Math.pow(2,28),++r,e[r++]<128)||(a+=(e[r]&127)*Math.pow(2,35),++r,e[r++]<128)||(a+=(e[r]&127)*Math.pow(2,42),++r,e[r++]<128)))break e;return t&&(t[0]=r),a}function dt(e){var t=0,r=e[t]&127;e:if(e[t++]>=128){if(r|=(e[t]&127)<<7,e[t++]<128||(r|=(e[t]&127)<<14,e[t++]<128)||(r|=(e[t]&127)<<21,e[t++]<128))break e;r|=(e[t]&127)<<28}return r}function Et(e){for(var t=[],r=[0];r[0]<e.length;){var a=r[0],i=sn(e,r),n=i&7;i=Math.floor(i/8);var o=0,s;if(i==0)break;switch(n){case 0:{for(var l=r[0];e[r[0]++]>=128;);s=e.slice(l,r[0])}break;case 5:o=4,s=e.slice(r[0],r[0]+o),r[0]+=o;break;case 1:o=8,s=e.slice(r[0],r[0]+o),r[0]+=o;break;case 2:o=sn(e,r),s=e.slice(r[0],r[0]+o),r[0]+=o;break;case 3:case 4:default:throw new Error("PB Type ".concat(n," for Field ").concat(i," at offset ").concat(a))}var c={data:s,type:n};t[i]==null?t[i]=[c]:t[i].push(c)}return t}function ml(e,t){return e?.map(function(r){return t(r.data)})||[]}function a_(e){for(var t,r=[],a=[0];a[0]<e.length;){var i=sn(e,a),n=Et(e.slice(a[0],a[0]+i));a[0]+=i;var o={id:dt(n[1][0].data),messages:[]};n[2].forEach(function(s){var l=Et(s.data),c=dt(l[3][0].data);o.messages.push({meta:l,data:e.slice(a[0],a[0]+c)}),a[0]+=c}),(t=n[3])!=null&&t[0]&&(o.merge=dt(n[3][0].data)>>>0>0),r.push(o)}return r}function i_(e,t){if(e!=0)throw new Error("Unexpected Snappy chunk type ".concat(e));for(var r=[0],a=sn(t,r),i=[];r[0]<t.length;){var n=t[r[0]]&3;if(n==0){var o=t[r[0]++]>>2;if(o<60)++o;else{var s=o-59;o=t[r[0]],s>1&&(o|=t[r[0]+1]<<8),s>2&&(o|=t[r[0]+2]<<16),s>3&&(o|=t[r[0]+3]<<24),o>>>=0,o++,r[0]+=s}i.push(t.slice(r[0],r[0]+o)),r[0]+=o;continue}else{var l=0,c=0;if(n==1?(c=(t[r[0]]>>2&7)+4,l=(t[r[0]++]&224)<<3,l|=t[r[0]++]):(c=(t[r[0]++]>>2)+1,n==2?(l=t[r[0]]|t[r[0]+1]<<8,r[0]+=2):(l=(t[r[0]]|t[r[0]+1]<<8|t[r[0]+2]<<16|t[r[0]+3]<<24)>>>0,r[0]+=4)),i=[bs(i)],l==0)throw new Error("Invalid offset 0");if(l>i[0].length)throw new Error("Invalid offset beyond length");if(c>=l)for(i.push(i[0].slice(-l)),c-=l;c>=i[i.length-1].length;)i.push(i[i.length-1]),c-=i[i.length-1].length;i.push(i[0].slice(-l,-l+c))}}var d=bs(i);if(d.length!=a)throw new Error("Unexpected length: ".concat(d.length," != ").concat(a));return d}function n_(e){for(var t=[],r=0;r<e.length;){var a=e[r++],i=e[r]|e[r+1]<<8|e[r+2]<<16;r+=3,t.push(i_(a,e.slice(r,r+i))),r+=i}if(r!==e.length)throw new Error("data is not a valid framed stream!");return bs(t)}function o_(e,t,r,a){var i=gl(e),n=i.getUint32(4,!0),o=(a>1?12:8)+g0(n&(a>1?3470:398))*4,s=-1,l=-1,c=NaN,d=new Date(2001,0,1);n&512&&(s=i.getUint32(o,!0),o+=4),o+=g0(n&(a>1?12288:4096))*4,n&16&&(l=i.getUint32(o,!0),o+=4),n&32&&(c=i.getFloat64(o,!0),o+=8),n&64&&(d.setTime(d.getTime()+i.getFloat64(o,!0)*1e3),o+=8);var u;switch(e[2]){case 0:break;case 2:u={t:"n",v:c};break;case 3:u={t:"s",v:t[l]};break;case 5:u={t:"d",v:d};break;case 6:u={t:"b",v:c>0};break;case 7:u={t:"n",v:c/86400};break;case 8:u={t:"e",v:0};break;case 9:if(s>-1)u={t:"s",v:r[s]};else if(l>-1)u={t:"s",v:t[l]};else if(!isNaN(c))u={t:"n",v:c};else throw new Error("Unsupported cell type ".concat(e.slice(0,4)));break;default:throw new Error("Unsupported cell type ".concat(e.slice(0,4)))}return u}function s_(e,t,r){var a=gl(e),i=a.getUint32(8,!0),n=12,o=-1,s=-1,l=NaN,c=NaN,d=new Date(2001,0,1);i&1&&(l=r_(e,n),n+=16),i&2&&(c=a.getFloat64(n,!0),n+=8),i&4&&(d.setTime(d.getTime()+a.getFloat64(n,!0)*1e3),n+=8),i&8&&(s=a.getUint32(n,!0),n+=4),i&16&&(o=a.getUint32(n,!0),n+=4);var u;switch(e[1]){case 0:break;case 2:u={t:"n",v:l};break;case 3:u={t:"s",v:t[s]};break;case 5:u={t:"d",v:d};break;case 6:u={t:"b",v:c>0};break;case 7:u={t:"n",v:c/86400};break;case 8:u={t:"e",v:0};break;case 9:if(o>-1)u={t:"s",v:r[o]};else throw new Error("Unsupported cell type ".concat(e[1]," : ").concat(i&31," : ").concat(e.slice(0,4)));break;case 10:u={t:"n",v:l};break;default:throw new Error("Unsupported cell type ".concat(e[1]," : ").concat(i&31," : ").concat(e.slice(0,4)))}return u}function l_(e,t,r){switch(e[0]){case 0:case 1:case 2:case 3:return o_(e,t,r,e[0]);case 5:return s_(e,t,r);default:throw new Error("Unsupported payload version ".concat(e[0]))}}function Qr(e){var t=Et(e);return sn(t[1][0].data)}function m0(e,t){var r=Et(t.data),a=dt(r[1][0].data),i=r[3],n=[];return(i||[]).forEach(function(o){var s=Et(o.data),l=dt(s[1][0].data)>>>0;switch(a){case 1:n[l]=xs(s[3][0].data);break;case 8:{var c=e[Qr(s[9][0].data)][0],d=Et(c.data),u=e[Qr(d[1][0].data)][0],f=dt(u.meta[1][0].data);if(f!=2001)throw new Error("2000 unexpected reference to ".concat(f));var h=Et(u.data);n[l]=h[3].map(function(p){return xs(p.data)}).join("")}break}}),n}function c_(e,t){var r,a,i,n,o,s,l,c,d,u,f,h,p,g,m=Et(e),w=dt(m[1][0].data)>>>0,S=dt(m[2][0].data)>>>0,x=((a=(r=m[8])==null?void 0:r[0])==null?void 0:a.data)&&dt(m[8][0].data)>0||!1,D,M;if((n=(i=m[7])==null?void 0:i[0])!=null&&n.data&&t!=0)D=(s=(o=m[7])==null?void 0:o[0])==null?void 0:s.data,M=(c=(l=m[6])==null?void 0:l[0])==null?void 0:c.data;else if((u=(d=m[4])==null?void 0:d[0])!=null&&u.data&&t!=1)D=(h=(f=m[4])==null?void 0:f[0])==null?void 0:h.data,M=(g=(p=m[3])==null?void 0:p[0])==null?void 0:g.data;else throw"NUMBERS Tile missing ".concat(t," cell storage");for(var I=x?4:1,T=gl(D),B=[],O=0;O<D.length/2;++O){var j=T.getUint16(O*2,!0);j<65535&&B.push([O,j])}if(B.length!=S)throw"Expected ".concat(S," cells, found ").concat(B.length);var U=[];for(O=0;O<B.length-1;++O)U[B[O][0]]=M.subarray(B[O][1]*I,B[O+1][1]*I);return B.length>=1&&(U[B[B.length-1][0]]=M.subarray(B[B.length-1][1]*I)),{R:w,cells:U}}function d_(e,t){var r,a=Et(t.data),i=(r=a?.[7])!=null&&r[0]?dt(a[7][0].data)>>>0>0?1:0:-1,n=ml(a[5],function(o){return c_(o,i)});return{nrows:dt(a[4][0].data)>>>0,data:n.reduce(function(o,s){return o[s.R]||(o[s.R]=[]),s.cells.forEach(function(l,c){if(o[s.R][c])throw new Error("Duplicate cell r=".concat(s.R," c=").concat(c));o[s.R][c]=l}),o},[])}}function u_(e,t,r){var a,i=Et(t.data),n={s:{r:0,c:0},e:{r:0,c:0}};if(n.e.r=(dt(i[6][0].data)>>>0)-1,n.e.r<0)throw new Error("Invalid row varint ".concat(i[6][0].data));if(n.e.c=(dt(i[7][0].data)>>>0)-1,n.e.c<0)throw new Error("Invalid col varint ".concat(i[7][0].data));r["!ref"]=De(n);var o=Et(i[4][0].data),s=m0(e,e[Qr(o[4][0].data)][0]),l=(a=o[17])!=null&&a[0]?m0(e,e[Qr(o[17][0].data)][0]):[],c=Et(o[3][0].data),d=0;c[1].forEach(function(u){var f=Et(u.data),h=e[Qr(f[2][0].data)][0],p=dt(h.meta[1][0].data);if(p!=6002)throw new Error("6001 unexpected reference to ".concat(p));var g=d_(e,h);g.data.forEach(function(m,w){m.forEach(function(S,x){var D=we({r:d+w,c:x}),M=l_(S,s,l);M&&(r[D]=M)})}),d+=g.nrows})}function h_(e,t){var r=Et(t.data),a={"!ref":"A1"},i=e[Qr(r[2][0].data)],n=dt(i[0].meta[1][0].data);if(n!=6001)throw new Error("6000 unexpected reference to ".concat(n));return u_(e,i[0],a),a}function f_(e,t){var r,a=Et(t.data),i={name:(r=a[1])!=null&&r[0]?xs(a[1][0].data):"",sheets:[]},n=ml(a[2],Qr);return n.forEach(function(o){e[o].forEach(function(s){var l=dt(s.meta[1][0].data);l==6e3&&i.sheets.push(h_(e,s))})}),i}function p_(e,t){var r=bl(),a=Et(t.data),i=ml(a[1],Qr);if(i.forEach(function(n){e[n].forEach(function(o){var s=dt(o.meta[1][0].data);if(s==2){var l=f_(e,o);l.sheets.forEach(function(c,d){wl(r,c,d==0?l.name:l.name+"_"+d,!0)})}})}),r.SheetNames.length==0)throw new Error("Empty NUMBERS file");return r}function Zo(e){var t,r,a,i,n={},o=[];if(e.FullPaths.forEach(function(l){if(l.match(/\.iwpv2/))throw new Error("Unsupported password protection")}),e.FileIndex.forEach(function(l){if(l.name.match(/\.iwa$/)){var c;try{c=n_(l.content)}catch(u){return console.log("?? "+l.content.length+" "+(u.message||u))}var d;try{d=a_(c)}catch(u){return console.log("## "+(u.message||u))}d.forEach(function(u){n[u.id]=u.messages,o.push(u.id)})}}),!o.length)throw new Error("File has no messages");var s=((i=(a=(r=(t=n?.[1])==null?void 0:t[0])==null?void 0:r.meta)==null?void 0:a[1])==null?void 0:i[0].data)&&dt(n[1][0].meta[1][0].data)==1&&n[1][0];if(s||o.forEach(function(l){n[l].forEach(function(c){var d=dt(c.meta[1][0].data)>>>0;if(d==1)if(!s)s=c;else throw new Error("Document has multiple roots")})}),!s)throw new Error("Cannot find Document root");return p_(n,s)}function g_(e){return function(r){for(var a=0;a!=e.length;++a){var i=e[a];r[i[0]]===void 0&&(r[i[0]]=i[1]),i[2]==="n"&&(r[i[0]]=Number(r[i[0]]))}}}function vl(e){g_([["cellNF",!1],["cellHTML",!0],["cellFormula",!0],["cellStyles",!1],["cellText",!0],["cellDates",!1],["sheetStubs",!1],["sheetRows",0,"n"],["bookDeps",!1],["bookSheets",!1],["bookProps",!1],["bookFiles",!1],["bookVBA",!1],["password",""],["WTF",!1]])(e)}function m_(e){return Xa.WS.indexOf(e)>-1?"sheet":e==Xa.CS?"chart":e==Xa.DS?"dialog":e==Xa.MS?"macro":e&&e.length?e:"sheet"}function v_(e,t){if(!e)return 0;try{e=t.map(function(a){return a.id||(a.id=a.strRelID),[a.name,e["!id"][a.id].Target,m_(e["!id"][a.id].Type)]})}catch{return null}return!e||e.length===0?null:e}function x_(e,t,r,a,i,n,o,s,l,c,d,u){try{n[a]=Mi(Vt(e,r,!0),t);var f=at(e,t),h;switch(s){case"sheet":h=E2(f,t,i,l,n[a],c,d,u);break;case"chart":if(h=T2(f,t,i,l,n[a],c,d,u),!h||!h["!drawel"])break;var p=Di(h["!drawel"].Target,t),g=fs(p),m=kb(Vt(e,p,!0),Mi(Vt(e,g,!0),p)),w=Di(m,p),S=fs(w);h=s2(Vt(e,w,!0),w,l,Mi(Vt(e,S,!0),w),c,h);break;case"macro":h=A2(f,t,i,l,n[a],c,d,u);break;case"dialog":h=S2(f,t,i,l,n[a],c,d,u);break;default:throw new Error("Unrecognized sheet type "+s)}o[a]=h;var x=[];n&&n[a]&&_r(n[a]).forEach(function(D){var M="";if(n[a][D].Type==Xa.CMNT){M=Di(n[a][D].Target,t);var I=O2(at(e,M,!0),M,l);if(!I||!I.length)return;t0(h,I,!1)}n[a][D].Type==Xa.TCMNT&&(M=Di(n[a][D].Target,t),x=x.concat(Tb(at(e,M,!0),l)))}),x&&x.length&&t0(h,x,!0,l.people||[])}catch(D){if(l.WTF)throw D}}function Yt(e){return e.charAt(0)=="/"?e.slice(1):e}function b_(e,t){if(md(),t=t||{},vl(t),Zt(e,"META-INF/manifest.xml")||Zt(e,"objectdata.xml"))return f0(e,t);if(Zt(e,"Index/Document.iwa")){if(typeof Uint8Array>"u")throw new Error("NUMBERS file parsing requires Uint8Array support");if(typeof Zo<"u"){if(e.FileIndex)return Zo(e);var r=Fe.utils.cfb_new();return Cc(e).forEach(function(se){wm(r,se,bm(e,se))}),Zo(r)}throw new Error("Unsupported NUMBERS file")}if(!Zt(e,"[Content_Types].xml"))throw Zt(e,"index.xml.gz")?new Error("Unsupported NUMBERS 08 file"):Zt(e,"index.xml")?new Error("Unsupported NUMBERS 09 file"):new Error("Unsupported ZIP file");var a=Cc(e),i=gv(Vt(e,"[Content_Types].xml")),n=!1,o,s;if(i.workbooks.length===0&&(s="xl/workbook.xml",at(e,s,!0)&&i.workbooks.push(s)),i.workbooks.length===0){if(s="xl/workbook.bin",!at(e,s,!0))throw new Error("Could not find workbook");i.workbooks.push(s),n=!0}i.workbooks[0].slice(-3)=="bin"&&(n=!0);var l={},c={};if(!t.bookSheets&&!t.bookProps){if(Vi=[],i.sst)try{Vi=D2(at(e,Yt(i.sst)),i.sst,t)}catch(se){if(t.WTF)throw se}t.cellStyles&&i.themes.length&&(l=F2(Vt(e,i.themes[0].replace(/^\//,""),!0)||"",i.themes[0],t)),i.style&&(c=C2(at(e,Yt(i.style)),i.style,l,t))}i.links.map(function(se){try{var re=Mi(Vt(e,fs(Yt(se))),se);return P2(at(e,Yt(se)),re,se,t)}catch{}});var d=k2(at(e,Yt(i.workbooks[0])),i.workbooks[0],t),u={},f="";i.coreprops.length&&(f=at(e,Yt(i.coreprops[0]),!0),f&&(u=Wd(f)),i.extprops.length!==0&&(f=at(e,Yt(i.extprops[0]),!0),f&&wv(f,u,t)));var h={};(!t.bookSheets||t.bookProps)&&i.custprops.length!==0&&(f=Vt(e,Yt(i.custprops[0]),!0),f&&(h=_v(f,t)));var p={};if((t.bookSheets||t.bookProps)&&(d.Sheets?o=d.Sheets.map(function(re){return re.name}):u.Worksheets&&u.SheetNames.length>0&&(o=u.SheetNames),t.bookProps&&(p.Props=u,p.Custprops=h),t.bookSheets&&typeof o<"u"&&(p.SheetNames=o),t.bookSheets?p.SheetNames:t.bookProps))return p;o={};var g={};t.bookDeps&&i.calcchain&&(g=I2(at(e,Yt(i.calcchain)),i.calcchain));var m=0,w={},S,x;{var D=d.Sheets;u.Worksheets=D.length,u.SheetNames=[];for(var M=0;M!=D.length;++M)u.SheetNames[M]=D[M].name}var I=n?"bin":"xml",T=i.workbooks[0].lastIndexOf("/"),B=(i.workbooks[0].slice(0,T+1)+"_rels/"+i.workbooks[0].slice(T+1)+".rels").replace(/^\//,"");Zt(e,B)||(B="xl/_rels/workbook."+I+".rels");var O=Mi(Vt(e,B,!0),B.replace(/_rels.*/,"s5s"));(i.metadata||[]).length>=1&&(t.xlmeta=R2(at(e,Yt(i.metadata[0])),i.metadata[0],t)),(i.people||[]).length>=1&&(t.people=Ab(at(e,Yt(i.people[0])),t)),O&&(O=v_(O,d.Sheets));var j=at(e,"xl/worksheets/sheet.xml",!0)?1:0;e:for(m=0;m!=u.Worksheets;++m){var U="sheet";if(O&&O[m]?(S="xl/"+O[m][1].replace(/[\/]?xl\//,""),Zt(e,S)||(S=O[m][1]),Zt(e,S)||(S=B.replace(/_rels\/.*$/,"")+O[m][1]),U=O[m][2]):(S="xl/worksheets/sheet"+(m+1-j)+"."+I,S=S.replace(/sheet0\./,"sheet.")),x=S.replace(/^(.*)(\/)([^\/]*)$/,"$1/_rels/$3.rels"),t&&t.sheets!=null)switch(typeof t.sheets){case"number":if(m!=t.sheets)continue e;break;case"string":if(u.SheetNames[m].toLowerCase()!=t.sheets.toLowerCase())continue e;break;default:if(Array.isArray&&Array.isArray(t.sheets)){for(var N=!1,Z=0;Z!=t.sheets.length;++Z)typeof t.sheets[Z]=="number"&&t.sheets[Z]==m&&(N=1),typeof t.sheets[Z]=="string"&&t.sheets[Z].toLowerCase()==u.SheetNames[m].toLowerCase()&&(N=1);if(!N)continue e}}x_(e,S,x,u.SheetNames[m],m,w,o,U,t,d,l,c)}return p={Directory:i,Workbook:d,Props:u,Custprops:h,Deps:g,Sheets:o,SheetNames:u.SheetNames,Strings:Vi,Styles:c,Themes:l,SSF:vt(_e)},t&&t.bookFiles&&(e.files?(p.keys=a,p.files=e.files):(p.keys=[],p.files={},e.FullPaths.forEach(function(se,re){se=se.replace(/^Root Entry[\/]/,""),p.keys.push(se),p.files[se]=e.FileIndex[re]}))),t&&t.bookVBA&&(i.vba.length>0?p.vbaraw=at(e,Yt(i.vba[0]),!0):i.defaults&&i.defaults.bin===Db&&(p.vbaraw=at(e,"xl/vbaProject.bin",!0))),p}function w_(e,t){var r=t||{},a="Workbook",i=Fe.find(e,a);try{if(a="/!DataSpaces/Version",i=Fe.find(e,a),!i||!i.content)throw new Error("ECMA-376 Encrypted file missing "+a);if(hx(i.content),a="/!DataSpaces/DataSpaceMap",i=Fe.find(e,a),!i||!i.content)throw new Error("ECMA-376 Encrypted file missing "+a);var n=px(i.content);if(n.length!==1||n[0].comps.length!==1||n[0].comps[0].t!==0||n[0].name!=="StrongEncryptionDataSpace"||n[0].comps[0].v!=="EncryptedPackage")throw new Error("ECMA-376 Encrypted file bad "+a);if(a="/!DataSpaces/DataSpaceInfo/StrongEncryptionDataSpace",i=Fe.find(e,a),!i||!i.content)throw new Error("ECMA-376 Encrypted file missing "+a);var o=gx(i.content);if(o.length!=1||o[0]!="StrongEncryptionTransform")throw new Error("ECMA-376 Encrypted file bad "+a);if(a="/!DataSpaces/TransformInfo/StrongEncryptionTransform/!Primary",i=Fe.find(e,a),!i||!i.content)throw new Error("ECMA-376 Encrypted file missing "+a);vx(i.content)}catch{}if(a="/EncryptionInfo",i=Fe.find(e,a),!i||!i.content)throw new Error("ECMA-376 Encrypted file missing "+a);var s=xx(i.content);if(a="/EncryptedPackage",i=Fe.find(e,a),!i||!i.content)throw new Error("ECMA-376 Encrypted file missing "+a);if(s[0]==4&&typeof decrypt_agile<"u")return decrypt_agile(s[1],i.content,r.password||"",r);if(s[0]==2&&typeof decrypt_std76<"u")return decrypt_std76(s[1],i.content,r.password||"",r);throw new Error("File is password-protected")}function xl(e,t){var r="";switch((t||{}).type||"base64"){case"buffer":return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7]];case"base64":r=jt(e.slice(0,12));break;case"binary":r=e;break;case"array":return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7]];default:throw new Error("Unrecognized type "+(t&&t.type||"undefined"))}return[r.charCodeAt(0),r.charCodeAt(1),r.charCodeAt(2),r.charCodeAt(3),r.charCodeAt(4),r.charCodeAt(5),r.charCodeAt(6),r.charCodeAt(7)]}function y_(e,t){return Fe.find(e,"EncryptedPackage")?w_(e,t):Fu(e,t)}function __(e,t){var r,a=e,i=t||{};return i.type||(i.type=Se&&Buffer.isBuffer(e)?"buffer":"base64"),r=_d(a,i),b_(r,i)}function Pu(e,t){var r=0;e:for(;r<e.length;)switch(e.charCodeAt(r)){case 10:case 13:case 32:++r;break;case 60:return ms(e.slice(r),t);default:break e}return an.to_workbook(e,t)}function k_(e,t){var r="",a=xl(e,t);switch(t.type){case"base64":r=jt(e);break;case"binary":r=e;break;case"buffer":r=e.toString("binary");break;case"array":r=Da(e);break;default:throw new Error("Unrecognized type "+t.type)}return a[0]==239&&a[1]==187&&a[2]==191&&(r=Ue(r)),t.type="binary",Pu(r,t)}function E_(e,t){var r=e;return t.type=="base64"&&(r=jt(r)),r=Qi.utils.decode(1200,r.slice(2),"str"),t.type="binary",Pu(r,t)}function T_(e){return e.match(/[^\x00-\x7F]/)?Oi(e):e}function Jo(e,t,r,a){return a?(r.type="string",an.to_workbook(e,r)):an.to_workbook(t,r)}function ws(e,t){id();var r=t||{};if(typeof ArrayBuffer<"u"&&e instanceof ArrayBuffer)return ws(new Uint8Array(e),(r=vt(r),r.type="array",r));typeof Uint8Array<"u"&&e instanceof Uint8Array&&!r.type&&(r.type=typeof Deno<"u"?"buffer":"array");var a=e,i=[0,0,0,0],n=!1;if(r.cellStyles&&(r.cellNF=!0,r.sheetStubs=!0),Ja={},r.dateNF&&(Ja.dateNF=r.dateNF),r.type||(r.type=Se&&Buffer.isBuffer(e)?"buffer":"base64"),r.type=="file"&&(r.type=Se?"buffer":"binary",a=hm(e),typeof Uint8Array<"u"&&!Se&&(r.type="array")),r.type=="string"&&(n=!0,r.type="binary",r.codepage=65001,a=T_(e)),r.type=="array"&&typeof Uint8Array<"u"&&e instanceof Uint8Array&&typeof ArrayBuffer<"u"){var o=new ArrayBuffer(3),s=new Uint8Array(o);if(s.foo="bar",!s.foo)return r=vt(r),r.type="array",ws(qs(a),r)}switch((i=xl(a,r))[0]){case 208:if(i[1]===207&&i[2]===17&&i[3]===224&&i[4]===161&&i[5]===177&&i[6]===26&&i[7]===225)return y_(Fe.read(a,r),r);break;case 9:if(i[1]<=8)return Fu(a,r);break;case 60:return ms(a,r);case 73:if(i[1]===73&&i[2]===42&&i[3]===0)throw new Error("TIFF Image File is not a spreadsheet");if(i[1]===68)return Q1(a,r);break;case 84:if(i[1]===65&&i[2]===66&&i[3]===76)return Z1.to_workbook(a,r);break;case 80:return i[1]===75&&i[2]<9&&i[3]<9?__(a,r):Jo(e,a,r,n);case 239:return i[3]===60?ms(a,r):Jo(e,a,r,n);case 255:if(i[1]===254)return E_(a,r);if(i[1]===0&&i[2]===2&&i[3]===0)return Ui.to_workbook(a,r);break;case 0:if(i[1]===0&&(i[2]>=2&&i[3]===0||i[2]===0&&(i[3]===8||i[3]===9)))return Ui.to_workbook(a,r);break;case 3:case 131:case 139:case 140:return e0.to_workbook(a,r);case 123:if(i[1]===92&&i[2]===114&&i[3]===116)return Dx.to_workbook(a,r);break;case 10:case 13:case 32:return k_(a,r);case 137:if(i[1]===80&&i[2]===78&&i[3]===71)throw new Error("PNG Image File is not a spreadsheet");break}return Y1.indexOf(i[0])>-1&&i[2]<=12&&i[3]<=31?e0.to_workbook(a,r):Jo(e,a,r,n)}function A_(e,t,r,a,i,n,o,s){var l=xt(r),c=s.defval,d=s.raw||!Object.prototype.hasOwnProperty.call(s,"raw"),u=!0,f=i===1?[]:{};if(i!==1)if(Object.defineProperty)try{Object.defineProperty(f,"__rowNum__",{value:r,enumerable:!1})}catch{f.__rowNum__=r}else f.__rowNum__=r;if(!o||e[r])for(var h=t.s.c;h<=t.e.c;++h){var p=o?e[r][h]:e[a[h]+l];if(p===void 0||p.t===void 0){if(c===void 0)continue;n[h]!=null&&(f[n[h]]=c);continue}var g=p.v;switch(p.t){case"z":if(g==null)break;continue;case"e":g=g==0?null:void 0;break;case"s":case"d":case"b":case"n":break;default:throw new Error("unrecognized type "+p.t)}if(n[h]!=null){if(g==null)if(p.t=="e"&&g===null)f[n[h]]=null;else if(c!==void 0)f[n[h]]=c;else if(d&&g===null)f[n[h]]=null;else continue;else f[n[h]]=d&&(p.t!=="n"||p.t==="n"&&s.rawNumbers!==!1)?g:zr(p,g,s);g!=null&&(u=!1)}}return{row:f,isempty:u}}function ys(e,t){if(e==null||e["!ref"]==null)return[];var r={t:"n",v:0},a=0,i=1,n=[],o=0,s="",l={s:{r:0,c:0},e:{r:0,c:0}},c=t||{},d=c.range!=null?c.range:e["!ref"];switch(c.header===1?a=1:c.header==="A"?a=2:Array.isArray(c.header)?a=3:c.header==null&&(a=0),typeof d){case"string":l=Ze(d);break;case"number":l=Ze(e["!ref"]),l.s.r=d;break;default:l=d}a>0&&(i=0);var u=xt(l.s.r),f=[],h=[],p=0,g=0,m=Array.isArray(e),w=l.s.r,S=0,x={};m&&!e[w]&&(e[w]=[]);var D=c.skipHidden&&e["!cols"]||[],M=c.skipHidden&&e["!rows"]||[];for(S=l.s.c;S<=l.e.c;++S)if(!(D[S]||{}).hidden)switch(f[S]=ct(S),r=m?e[w][S]:e[f[S]+u],a){case 1:n[S]=S-l.s.c;break;case 2:n[S]=f[S];break;case 3:n[S]=c.header[S-l.s.c];break;default:if(r==null&&(r={w:"__EMPTY",t:"s"}),s=o=zr(r,null,c),g=x[o]||0,!g)x[o]=1;else{do s=o+"_"+g++;while(x[s]);x[o]=g,x[s]=1}n[S]=s}for(w=l.s.r+i;w<=l.e.r;++w)if(!(M[w]||{}).hidden){var I=A_(e,l,w,f,a,n,m,c);(I.isempty===!1||(a===1?c.blankrows!==!1:c.blankrows))&&(h[p++]=I.row)}return h.length=p,h}var v0=/"/g;function S_(e,t,r,a,i,n,o,s){for(var l=!0,c=[],d="",u=xt(r),f=t.s.c;f<=t.e.c;++f)if(a[f]){var h=s.dense?(e[r]||[])[f]:e[a[f]+u];if(h==null)d="";else if(h.v!=null){l=!1,d=""+(s.rawNumbers&&h.t=="n"?h.v:zr(h,null,s));for(var p=0,g=0;p!==d.length;++p)if((g=d.charCodeAt(p))===i||g===n||g===34||s.forceQuotes){d='"'+d.replace(v0,'""')+'"';break}d=="ID"&&(d='"ID"')}else h.f!=null&&!h.F?(l=!1,d="="+h.f,d.indexOf(",")>=0&&(d='"'+d.replace(v0,'""')+'"')):d="";c.push(d)}return s.blankrows===!1&&l?null:c.join(o)}function Ru(e,t){var r=[],a=t??{};if(e==null||e["!ref"]==null)return"";var i=Ze(e["!ref"]),n=a.FS!==void 0?a.FS:",",o=n.charCodeAt(0),s=a.RS!==void 0?a.RS:`
`,l=s.charCodeAt(0),c=new RegExp((n=="|"?"\\|":n)+"+$"),d="",u=[];a.dense=Array.isArray(e);for(var f=a.skipHidden&&e["!cols"]||[],h=a.skipHidden&&e["!rows"]||[],p=i.s.c;p<=i.e.c;++p)(f[p]||{}).hidden||(u[p]=ct(p));for(var g=0,m=i.s.r;m<=i.e.r;++m)(h[m]||{}).hidden||(d=S_(e,i,m,u,o,l,n,a),d!=null&&(a.strip&&(d=d.replace(c,"")),(d||a.blankrows!==!1)&&r.push((g++?s:"")+d)));return delete a.dense,r.join("")}function C_(e,t){t||(t={}),t.FS="	",t.RS=`
`;var r=Ru(e,t);return r}function F_(e){var t="",r,a="";if(e==null||e["!ref"]==null)return[];var i=Ze(e["!ref"]),n="",o=[],s,l=[],c=Array.isArray(e);for(s=i.s.c;s<=i.e.c;++s)o[s]=ct(s);for(var d=i.s.r;d<=i.e.r;++d)for(n=xt(d),s=i.s.c;s<=i.e.c;++s)if(t=o[s]+n,r=c?(e[d]||[])[s]:e[t],a="",r!==void 0){if(r.F!=null){if(t=r.F,!r.f)continue;a=r.f,t.indexOf(":")==-1&&(t=t+":"+t)}if(r.f!=null)a=r.f;else{if(r.t=="z")continue;if(r.t=="n"&&r.v!=null)a=""+r.v;else if(r.t=="b")a=r.v?"TRUE":"FALSE";else if(r.w!==void 0)a="'"+r.w;else{if(r.v===void 0)continue;r.t=="s"?a="'"+r.v:a=""+r.v}}l[l.length]=t+"="+a}return l}function $u(e,t,r){var a=r||{},i=+!a.skipHeader,n=e||{},o=0,s=0;if(n&&a.origin!=null)if(typeof a.origin=="number")o=a.origin;else{var l=typeof a.origin=="string"?Pt(a.origin):a.origin;o=l.r,s=l.c}var c,d={s:{c:0,r:0},e:{c:s,r:o+t.length-1+i}};if(n["!ref"]){var u=Ze(n["!ref"]);d.e.c=Math.max(d.e.c,u.e.c),d.e.r=Math.max(d.e.r,u.e.r),o==-1&&(o=u.e.r+1,d.e.r=o+t.length-1+i)}else o==-1&&(o=0,d.e.r=t.length-1+i);var f=a.header||[],h=0;t.forEach(function(g,m){_r(g).forEach(function(w){(h=f.indexOf(w))==-1&&(f[h=f.length]=w);var S=g[w],x="z",D="",M=we({c:s+h,r:o+m+i});c=ln(n,M),S&&typeof S=="object"&&!(S instanceof Date)?n[M]=S:(typeof S=="number"?x="n":typeof S=="boolean"?x="b":typeof S=="string"?x="s":S instanceof Date?(x="d",a.cellDates||(x="n",S=$t(S)),D=a.dateNF||_e[14]):S===null&&a.nullError&&(x="e",S=0),c?(c.t=x,c.v=S,delete c.w,delete c.R,D&&(c.z=D)):n[M]=c={t:x,v:S},D&&(c.z=D))})}),d.e.c=Math.max(d.e.c,s+f.length-1);var p=xt(o);if(i)for(h=0;h<f.length;++h)n[ct(h+s)+p]={t:"s",v:f[h]};return n["!ref"]=De(d),n}function D_(e,t){return $u(null,e,t)}function ln(e,t,r){if(typeof t=="string"){if(Array.isArray(e)){var a=Pt(t);return e[a.r]||(e[a.r]=[]),e[a.r][a.c]||(e[a.r][a.c]={t:"z"})}return e[t]||(e[t]={t:"z"})}return typeof t!="number"?ln(e,we(t)):ln(e,we({r:t,c:r||0}))}function O_(e,t){if(typeof t=="number"){if(t>=0&&e.SheetNames.length>t)return t;throw new Error("Cannot find sheet # "+t)}else if(typeof t=="string"){var r=e.SheetNames.indexOf(t);if(r>-1)return r;throw new Error("Cannot find sheet name |"+t+"|")}else throw new Error("Cannot find sheet |"+t+"|")}function bl(){return{SheetNames:[],Sheets:{}}}function wl(e,t,r,a){var i=1;if(!r)for(;i<=65535&&e.SheetNames.indexOf(r="Sheet"+i)!=-1;++i,r=void 0);if(!r||e.SheetNames.length>=65535)throw new Error("Too many worksheets");if(a&&e.SheetNames.indexOf(r)>=0){var n=r.match(/(^.*?)(\d+)$/);i=n&&+n[2]||0;var o=n&&n[1]||r;for(++i;i<=65535&&e.SheetNames.indexOf(r=o+i)!=-1;++i);}if(g2(r),e.SheetNames.indexOf(r)>=0)throw new Error("Worksheet with name |"+r+"| already exists!");return e.SheetNames.push(r),e.Sheets[r]=t,r}function I_(e,t,r){e.Workbook||(e.Workbook={}),e.Workbook.Sheets||(e.Workbook.Sheets=[]);var a=O_(e,t);switch(e.Workbook.Sheets[a]||(e.Workbook.Sheets[a]={}),r){case 0:case 1:case 2:break;default:throw new Error("Bad sheet visibility setting "+r)}e.Workbook.Sheets[a].Hidden=r}function P_(e,t){return e.z=t,e}function Lu(e,t,r){return t?(e.l={Target:t},r&&(e.l.Tooltip=r)):delete e.l,e}function R_(e,t,r){return Lu(e,"#"+t,r)}function $_(e,t,r){e.c||(e.c=[]),e.c.push({t,a:r||"SheetJS"})}function L_(e,t,r,a){for(var i=typeof t!="string"?t:Ze(t),n=typeof t=="string"?t:De(t),o=i.s.r;o<=i.e.r;++o)for(var s=i.s.c;s<=i.e.c;++s){var l=ln(e,o,s);l.t="n",l.F=n,delete l.v,o==i.s.r&&s==i.s.c&&(l.f=r,a&&(l.D=!0))}return e}var N_={encode_col:ct,encode_row:xt,encode_cell:we,encode_range:De,decode_col:nl,decode_row:il,split_cell:Xm,decode_cell:Pt,decode_range:ui,format_cell:zr,sheet_add_aoa:Bd,sheet_add_json:$u,sheet_add_dom:Du,aoa_to_sheet:hi,json_to_sheet:D_,table_to_sheet:Ou,table_to_book:Q2,sheet_to_csv:Ru,sheet_to_txt:C_,sheet_to_json:ys,sheet_to_html:J2,sheet_to_formulae:F_,sheet_to_row_object_array:ys,sheet_get_cell:ln,book_new:bl,book_append_sheet:wl,book_set_sheet_visibility:I_,cell_set_number_format:P_,cell_set_hyperlink:Lu,cell_set_internal_link:R_,cell_add_comment:$_,sheet_set_array_formula:L_,consts:{SHEET_VISIBLE:0,SHEET_HIDDEN:1,SHEET_VERY_HIDDEN:2}},z_=Object.defineProperty,M_=Object.getOwnPropertyDescriptor,pt=(e,t,r,a)=>{for(var i=a>1?void 0:a?M_(t,r):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(i=(a?o(t,r,i):o(i))||i);return a&&i&&z_(t,r,i),i};let nt=class extends Le{constructor(){super(...arguments),this.events=[],this.groups=[],this.isEditing=!1,this.selectedEventId=null,this.isSubmitting=!1,this.adminView="events",this.isImporting=!1,this.importErrors=[],this.importSuccessMsg=null}async firstUpdated(){await this.fetchData()}async fetchData(){try{const[e,t]=await Promise.all([ve("/events/all"),ve("/groups")]);this.events=await e.json(),this.groups=await t.json()}catch(e){console.error("Błąd pobierania danych:",e)}}openAddDialog(){this.isEditing=!1,this.selectedEventId=null,this.editDialog.show(),setTimeout(()=>{this.resetForm(),this.adminView==="intentions"&&(this.inputTitle.value="Intencja: ")},0)}async handleEdit(e){this.isEditing=!0,this.selectedEventId=e.id,this.editDialog.show();const t=e.groups&&e.groups.length>0?e.groups[0].groupId:null;setTimeout(()=>{this.inputTitle.value=e.title,this.inputDate.value=e.startTime.substring(0,16),this.inputDescription.value=e.description||"",this.inputLocation.value=e.location||"",this.inputGroup.value=t?t.toString():""},50)}async handleDelete(e){if(confirm("Czy na pewno chcesz usunąć to wydarzenie?"))try{(await ve(`/events/${e}`,{method:"DELETE"})).ok&&await this.fetchData()}catch(t){console.error(t)}}async saveEvent(){if(!this.inputTitle.value||!this.inputDate.value)return alert("Wypełnij Tytuł oraz Datę!");if(this.isSubmitting)return;this.isSubmitting=!0;const e=[],t=this.inputGroup.value;t&&t.toString().trim()!==""&&t!=="null"&&e.push(Number(t));const r={title:this.inputTitle.value,startTime:new Date(this.inputDate.value).toISOString(),description:this.inputDescription.value,location:this.inputLocation.value,groupIds:e},a=this.isEditing?`/events/${this.selectedEventId}`:"/events",i=this.isEditing?"PUT":"POST";try{(await ve(a,{method:i,body:JSON.stringify(r)})).ok?(this.editDialog.hide(),await this.fetchData()):alert("Błąd podczas zapisywania wydarzenia.")}catch(n){console.error(n)}finally{this.isSubmitting=!1}}resetForm(){this.inputTitle.value="",this.inputDate.value="",this.inputDescription.value="",this.inputLocation.value="",this.inputGroup.value=""}openExcelDialog(){this.importErrors=[],this.importSuccessMsg=null,this.fileInput&&(this.fileInput.value=""),this.excelDialog.show()}triggerFileSelect(){this.fileInput.click()}handleFileUpload(e){const t=e.target.files?.[0];if(!t)return;this.isImporting=!0,this.importErrors=[],this.importSuccessMsg=null;const r=new FileReader;r.onload=async a=>{try{const i=a.target?.result,n=ws(i,{type:"binary",cellDates:!0}),o=n.SheetNames[0],s=n.Sheets[o],l=N_.sheet_to_json(s,{header:1}),c=[];for(let u=1;u<l.length;u++){const f=l[u];if(!f||f.length===0)continue;const h=f[0],p=f[1],g=f[2],m=f[3];if(!h&&!p&&!g)continue;if(!h||!p||!g){this.importErrors.push(`Wiersz ${u+1}: Brak danych!`);continue}let w="";if(h instanceof Date)w=h.toISOString().split("T")[0];else if(typeof h=="string"){const x=h.includes(".")?h.split("."):h.split("-");x.length===3&&(w=h.includes(".")?`${x[2]}-${x[1]}-${x[0]}`:h)}let S="";if(p instanceof Date)S=p.toISOString().split("T")[1].substring(0,5);else if(typeof p=="string")S=p.replace(".",":");else if(typeof p=="number"){const x=Math.round(p*24*3600);S=`${Math.floor(x/3600).toString().padStart(2,"0")}:${Math.floor(x%3600/60).toString().padStart(2,"0")}`}if(!w||!S||w.length<10){this.importErrors.push(`Wiersz ${u+1}: Zły format daty/godziny.`);continue}c.push({title:`Intencja: ${g}`,description:m?`Od kogo: ${m}`:"",startTime:new Date(`${w}T${S}:00`).toISOString()})}if(this.importErrors.length>0||c.length===0)return;const d=await ve("/events/bulk",{method:"POST",body:JSON.stringify({events:c})});if(d.ok){const u=await d.json();this.importSuccessMsg=u.message,await this.fetchData()}else this.importErrors.push("Serwer odrzucił dane.")}catch(i){this.importErrors.push("Błąd pliku."),console.error(i)}finally{this.isImporting=!1}},r.readAsBinaryString(t)}renderEventList(e,t=!1){return e.map(r=>{const a=r.groups&&r.groups.length>0?r.groups[0]:null,i=a?this.groups.find(n=>Number(n.id)===Number(a.groupId)):null;return L`
        <div class="event-card ${t?"archive-card":""}">
          <div class="event-info">
            <h4>${r.title}</h4>
            <p>${new Date(r.startTime).toLocaleString("pl-PL",{dateStyle:"medium",timeStyle:"short"})} | ${r.location||"Brak lokalizacji"}</p>
            ${i?L`<sl-badge variant="neutral">${i.name}</sl-badge>`:""}
          </div>
          <div class="actions">
            <sl-button size="small" class="btn-edit" @click=${()=>this.handleEdit(r)}><sl-icon slot="prefix" name="pencil"></sl-icon>Edytuj</sl-button>
            <sl-button size="small" class="btn-delete" @click=${()=>this.handleDelete(r.id)}><sl-icon slot="prefix" name="trash"></sl-icon>Usuń</sl-button>
          </div>
        </div>
      `})}render(){const e=new Date,t=n=>n.title.startsWith("Intencja:"),r=this.events.filter(n=>this.adminView==="intentions"?t(n):!t(n)),a=r.filter(n=>new Date(n.startTime)>=e),i=r.filter(n=>new Date(n.startTime)<e);return L`
      <div class="view-controls">
        <sl-button-group>
          <sl-button variant=${this.adminView==="events"?"primary":"default"} @click=${()=>{this.adminView="events",this.requestUpdate()}}>Zarządzaj Wydarzeniami</sl-button>
          <sl-button variant=${this.adminView==="intentions"?"primary":"default"} @click=${()=>{this.adminView="intentions",this.requestUpdate()}}>Zarządzaj Intencjami</sl-button>
        </sl-button-group>
      </div>
      <div class="header-actions">
        <h2>${this.adminView==="events"?"Lista Wydarzeń":"Lista Intencji Mszalnych"}</h2>
        <div style="display: flex; gap: 10px;">
          ${this.adminView==="intentions"?L`<sl-button class="btn-excel" @click=${this.openExcelDialog}><sl-icon slot="prefix" name="file-earmark-excel"></sl-icon> Wgraj z Excela</sl-button>`:""}
          <sl-button variant="primary" @click=${this.openAddDialog}><sl-icon slot="prefix" name="plus-lg"></sl-icon> Dodaj ręcznie</sl-button>
        </div>
      </div>
      <div class="section-title"><sl-icon name="calendar-check"></sl-icon> Nadchodzące i Aktywne</div>
      ${a.length?this.renderEventList(a):L`<p style="color: var(--color-wood-dark);">Brak zaplanowanych pozycji.</p>`}
      <sl-divider></sl-divider>
      <div class="section-title"><sl-icon name="archive"></sl-icon> Archiwum (Zakończone)</div>
      ${i.length?this.renderEventList(i,!0):L`<p style="color: var(--color-wood-dark);">Archiwum jest puste.</p>`}

      <sl-dialog id="edit-dialog" label="${this.isEditing?"Edytuj":"Nowy Wpis"}">
        <form>
          <sl-input id="form-title" label="Tytuł" required></sl-input>
          <sl-input id="form-date" type="datetime-local" label="Data i godzina" required></sl-input>
          <sl-input id="form-location" label="Miejsce"></sl-input>
          <sl-select id="form-group" label="Grupa (opcjonalnie)" clearable>
            ${this.groups.map(n=>L`<sl-option value="${n.id}">${n.name}</sl-option>`)}
          </sl-select>
          <sl-textarea id="form-description" label="Opis"></sl-textarea>
        </form>
        <sl-button slot="footer" variant="primary" @click=${this.saveEvent} ?loading=${this.isSubmitting}>${this.isEditing?"Zapisz zmiany":"Dodaj"}</sl-button>
      </sl-dialog>

      <sl-dialog id="excel-dialog" label="Import Intencji z pliku Excel">
        <div class="upload-container">
          <div class="instructions">
            <strong>Jak przygotować plik Excel (.xlsx)?</strong>
            <p style="margin-top: 5px; font-size: 0.9rem;">Pierwszy wiersz (nagłówek) zostanie zignorowany. Ułóż dane w następujących kolumnach:</p>
            <ul><li><strong>A:</strong> Data</li><li><strong>B:</strong> Godzina</li><li><strong>C:</strong> Treść intencji</li><li><strong>D:</strong> Od kogo (Opcjonalnie)</li></ul>
          </div>
          <input type="file" id="excel-upload" accept=".xlsx, .xls" style="display: none;" @change=${this.handleFileUpload}>
          ${this.importSuccessMsg?"":L`<sl-button class="btn-excel" style="width: 100%; margin-top: 10px;" size="large" @click=${this.triggerFileSelect} ?loading=${this.isImporting}><sl-icon slot="prefix" name="upload"></sl-icon> Wybierz plik</sl-button>`}
          ${this.importErrors.length>0?L`<div class="error-box"><strong>Błędy:</strong><ul>${this.importErrors.map(n=>L`<li>${n}</li>`)}</ul></div>`:""}
          ${this.importSuccessMsg?L`<sl-alert variant="success" open style="margin-top: 15px;"><sl-icon slot="icon" name="check2-circle"></sl-icon><strong>Sukces!</strong><br />${this.importSuccessMsg}</sl-alert>`:""}
        </div>
        <sl-button slot="footer" class="btn-close-footer" @click=${()=>this.excelDialog.hide()}>Zamknij</sl-button>
      </sl-dialog>
    `}};nt.styles=[He,fe`
      :host { display: block; padding: 10px; max-width: 900px; width: 100%; margin: 0 auto; box-sizing: border-box; }
      .header-actions { display: flex; justify-content: space-between; align-items: center; margin-bottom: 25px; flex-wrap: wrap; gap: 15px;}
      .header-actions h2 { margin: 0; color: var(--color-wood-dark); }
      .view-controls { display: flex; justify-content: center; margin-bottom: 25px; }
      sl-button-group sl-button[variant="default"]::part(base) { color: var(--color-wood-medium); border-color: var(--color-wood-medium); background-color: transparent; }
      sl-button-group sl-button[variant="default"]::part(base):hover { background-color: rgba(193, 135, 86, 0.1); }
      sl-button-group sl-button[variant="primary"]::part(base) { background-color: var(--color-wood-dark); border-color: var(--color-wood-dark); color: var(--color-sand-light); }
      .event-card { background-color: var(--color-sand-light); border: 2px solid var(--color-wood-medium); border-radius: 12px; padding: 20px; margin-bottom: 15px; display: flex; justify-content: space-between; align-items: center; transition: background-color 0.2s ease, border-color 0.2s ease; }
      .event-info h4 { margin: 0 0 8px 0; color: var(--color-wood-dark); font-size: 1.15rem; }
      .event-info p { margin: 0; font-size: 0.95rem; color: var(--color-wood-dark); opacity: 0.8; margin-bottom: 8px; }
      .actions { display: flex; gap: 10px; }
      .section-title { color: var(--color-wood-dark); margin: 35px 0 15px 0; font-size: 1.2rem; display: flex; align-items: center; gap: 10px; }
      .archive-card { opacity: 0.7; filter: grayscale(0.4); border-style: dashed; }
      .btn-edit::part(base) { background-color: #d97706; border-color: #d97706; }
      .btn-edit::part(base):hover { background-color: #db6104; border-color: #db6104; }
      .btn-edit::part(label), .btn-edit::part(prefix) { color: var(--color-sand-light) !important; }
      .btn-delete::part(base) { background-color: rgba(220, 38, 38, 0.8); border-color: transparent; }
      .btn-delete::part(base):hover { background-color: rgba(220, 38, 38, 1); }
      .btn-delete::part(label), .btn-delete::part(prefix) { color: var(--color-sand-light) !important; }
      .btn-excel::part(base) { background-color: #15803d; border-color: #15803d; }
      .btn-excel::part(base):hover { background-color: #166534; border-color: #166534; }
      .btn-excel::part(label), .btn-excel::part(prefix) { color: var(--color-sand-light) !important; }
      .btn-close-footer::part(base) { background-color: var(--color-wood-dark); border-color: var(--color-wood-dark); }
      .btn-close-footer::part(base):hover { background-color: var(--color-wood-medium); border-color: var(--color-wood-medium); }
      .btn-close-footer::part(label) { color: var(--color-sand-light) !important; }
      form { display: flex; flex-direction: column; gap: 15px; color: var(--color-wood-dark); }
      sl-input, sl-textarea, sl-select { --sl-input-background-color: var(--color-sand-light); --sl-input-background-color-hover: var(--color-sand-light); --sl-input-background-color-focus: var(--color-sand-light); --sl-input-border-color: var(--color-wood-medium); --sl-input-border-color-hover: var(--color-wood-medium); --sl-input-border-color-focus: var(--color-wood-medium); --sl-input-color: var(--color-wood-dark); --sl-input-label-color: var(--color-wood-dark); }
      sl-dialog { --sl-panel-background-color: var(--color-sand-light); color: var(--color-wood-dark); }
      sl-dialog::part(title) { color: var(--color-wood-dark); font-weight: bold; }
      sl-input::part(input):hover, sl-textarea::part(textarea):hover {
        color: var(--color-wood-dark) !important;
      }
      .upload-container { display: flex; flex-direction: column; gap: 20px; padding: 10px 0; }
      .instructions { background-color: var(--color-cookie-medium); padding: 20px; border-left: 5px solid var(--color-wood-dark); border-radius: 8px; color: var(--color-wood-dark); }
      input[type="file"]::file-selector-button { border: 2px solid var(--color-wood-medium); padding: 8px 16px; border-radius: 8px; background-color: var(--color-sand-light); color: var(--color-wood-dark); cursor: pointer; transition: all 0.2s ease; margin-right: 10px; font-weight: bold; }
      input[type="file"]::file-selector-button:hover { background-color: var(--color-cookie-medium); }
    `];pt([J()],nt.prototype,"events",2);pt([J()],nt.prototype,"groups",2);pt([J()],nt.prototype,"isEditing",2);pt([J()],nt.prototype,"selectedEventId",2);pt([J()],nt.prototype,"isSubmitting",2);pt([J()],nt.prototype,"adminView",2);pt([J()],nt.prototype,"isImporting",2);pt([J()],nt.prototype,"importErrors",2);pt([J()],nt.prototype,"importSuccessMsg",2);pt([xe("#form-title")],nt.prototype,"inputTitle",2);pt([xe("#form-date")],nt.prototype,"inputDate",2);pt([xe("#form-description")],nt.prototype,"inputDescription",2);pt([xe("#form-location")],nt.prototype,"inputLocation",2);pt([xe("#form-group")],nt.prototype,"inputGroup",2);pt([xe("#edit-dialog")],nt.prototype,"editDialog",2);pt([xe("#excel-dialog")],nt.prototype,"excelDialog",2);pt([xe("#excel-upload")],nt.prototype,"fileInput",2);nt=pt([Ve("app-admin-events")],nt);var B_=Object.defineProperty,U_=Object.getOwnPropertyDescriptor,Io=(e,t,r,a)=>{for(var i=a>1?void 0:a?U_(t,r):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(i=(a?o(t,r,i):o(i))||i);return a&&i&&B_(t,r,i),i};let ni=class extends Le{constructor(){super(...arguments),this.questions=[],this.isSubmitting=!1,this.editingId=null}async firstUpdated(){await this.fetchQuestions()}async fetchQuestions(){try{const e=await ve("/questions/all");e.ok&&(this.questions=await e.json())}catch(e){console.error(e)}}async handleSave(e,t){const r=this.shadowRoot?.getElementById(`answer-${e}`),a=this.shadowRoot?.getElementById(`question-${e}`),i=r?.value,n=a?a.value:t;if(!i||i.trim()==="")return alert("Odpowiedź nie może być pusta!");if(!n||n.trim()==="")return alert("Treść pytania nie może być pusta!");this.isSubmitting=!0;try{(await ve(`/questions/${e}`,{method:"PUT",body:JSON.stringify({answer:i,content:n,isPublished:!0})})).ok&&(this.editingId=null,await this.fetchQuestions())}catch{alert("Błąd podczas zapisywania.")}finally{this.isSubmitting=!1}}async handleDelete(e){if(confirm("Czy na pewno usunąć to pytanie?"))try{(await ve(`/questions/${e}`,{method:"DELETE"})).ok&&await this.fetchQuestions()}catch(t){console.error(t)}}render(){const e=this.questions.filter(r=>!r.isPublished),t=this.questions.filter(r=>r.isPublished);return L`
      <div class="header"><h2>Panel Zarządzania Q&A</h2></div>
      <h3 style="color: var(--color-wood-dark);">Nowe pytania (${e.length})</h3>
      ${e.length===0?L`<p>Brak nowych pytań od parafian.</p>`:""}

      ${e.map(r=>L`
        <div class="question-card" style="border-left: 5px solid #d97706;">
          <div class="q-header"><sl-badge variant="warning">Nowe</sl-badge><span class="date">${new Date(r.createdAt).toLocaleString("pl-PL")}</span></div>
          ${this.editingId===r.id?L`
            <sl-textarea id="question-${r.id}" label="Treść pytania (${r.author||" Anonimowy"})" .value=${r.content} rows="2" style="margin-bottom: 15px;"></sl-textarea>
            <sl-textarea id="answer-${r.id}" label="Twoja odpowiedź" placeholder="Wpisz odpowiedź..." rows="3"></sl-textarea>
            <div class="actions">
              <sl-button size="small" class="btn-cancel" @click=${()=>this.editingId=null}>Anuluj</sl-button>
              <sl-button size="small" class="btn-save" ?loading=${this.isSubmitting} @click=${()=>this.handleSave(r.id,r.content)}>Odpowiedz i publikuj</sl-button>
            </div>
          `:L`
            <div class="content">
              <sl-icon name="person-circle"></sl-icon>
              <div><strong>${r.author?r.author:"Anonimowy"}:</strong> ${r.content}</div>
            </div>
            <sl-textarea id="answer-${r.id}" placeholder="Twoja odpowiedź..." rows="3"></sl-textarea>
            <div class="actions">
              <sl-button size="small" class="btn-delete" @click=${()=>this.handleDelete(r.id)}>Usuń</sl-button>
              <sl-button size="small" class="btn-edit" @click=${()=>this.editingId=r.id}><sl-icon slot="prefix" name="pencil"></sl-icon> Edytuj pytanie</sl-button>
              <sl-button size="small" class="btn-save" ?loading=${this.isSubmitting} @click=${()=>this.handleSave(r.id,r.content)}>Odpowiedz i publikuj</sl-button>
            </div>
          `}
        </div>
      `)}

      <sl-divider></sl-divider>
      <h3 style="color: var(--color-wood-dark);">Opublikowane odpowiedzi (${t.length})</h3>

      ${t.map(r=>L`
        <div class="question-card">
          <div class="q-header"><sl-badge variant="success">Widoczne dla wszystkich</sl-badge><span class="date">${new Date(r.createdAt).toLocaleString("pl-PL")}</span></div>
          ${this.editingId===r.id?L`
            <sl-textarea id="question-${r.id}" label="Treść pytania (${r.author||" Anonimowy"})" .value=${r.content} rows="2" style="margin-bottom: 15px;"></sl-textarea>
            <sl-textarea id="answer-${r.id}" label="Odpowiedź duszpasterza" .value=${r.answer||""} rows="3"></sl-textarea>
            <div class="actions">
              <sl-button size="small" class="btn-cancel" @click=${()=>this.editingId=null}>Anuluj</sl-button>
              <sl-button size="small" class="btn-save" ?loading=${this.isSubmitting} @click=${()=>this.handleSave(r.id,r.content)}>Zapisz poprawkę</sl-button>
            </div>
          `:L`
            <div class="content">
              <sl-icon name="person-circle"></sl-icon>
              <div><strong>${r.author?r.author:"Anonimowy"}:</strong> ${r.content}</div>
            </div>
            <div class="answer-section"><strong>Odpowiedź duszpasterza:</strong><br/>${r.answer}</div>
            <div class="actions">
              <sl-button size="small" class="btn-delete" @click=${()=>this.handleDelete(r.id)}>Usuń</sl-button>
              <sl-button size="small" class="btn-edit" @click=${()=>this.editingId=r.id}><sl-icon slot="prefix" name="pencil"></sl-icon> Edytuj</sl-button>
            </div>
          `}
        </div>
      `)}
    `}};ni.styles=[He,fe`
      :host { display: block; padding: 10px; max-width: 900px; width: 100%; margin: 0 auto; box-sizing: border-box; }
      p { color: var(--color-wood-dark); }
      .header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 25px; }
      .header h2 { margin: 0; color: var(--color-wood-dark); font-size: 1.3rem; }
      .question-card { background: var(--color-sand-light); border: 2px solid var(--color-wood-medium); border-radius: 12px; padding: 20px; margin-bottom: 20px; transition: background-color 0.2s ease, border-color 0.2s ease; }
      .question-card[style*="border-left"] { border-left: 6px solid var(--sl-color-warning-500) !important; }
      .q-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; }
      .date { font-size: 0.9rem; color: var(--color-wood-dark); opacity: 0.8; }

      /* --- POPRAWIONE STYLE DLA TREŚCI --- */
      .content {
        display: flex;
        gap: 10px;
        align-items: flex-start;
        font-size: 1.1rem;
        color: var(--color-wood-dark);
        font-weight: 500;
        margin-bottom: 15px;
        line-height: 1.5;
      }
      .content sl-icon {
        font-size: 1.4rem;
        flex-shrink: 0;
        margin-top: 2px;
      }
      /* ---------------------------------- */

      .answer-section { background: var(--color-cookie-medium); padding: 15px 20px; border-radius: 8px; margin-bottom: 15px; color: var(--color-wood-dark); border-left: 4px solid var(--sl-color-success-600); line-height: 1.5; }
      .actions { display: flex; gap: 10px; justify-content: flex-end; margin-top: 15px;}
      sl-textarea { --sl-input-color: var(--color-wood-dark); --sl-input-color-hover: var(--color-wood-dark); --sl-input-color-focus: var(--color-wood-dark); --sl-input-label-color: var(--color-wood-dark); --sl-input-placeholder-color: var(--color-wood-medium); --sl-input-background-color: var(--color-sand-light); --sl-input-background-color-hover: var(--color-sand-light); --sl-input-background-color-focus: var(--color-sand-light); --sl-input-border-color: var(--color-wood-medium); --sl-input-border-color-hover: var(--color-wood-medium); --sl-input-border-color-focus: var(--color-wood-medium); }
      .btn-edit::part(base) { background-color: #d97706; border-color: #d97706; }
      .btn-edit::part(base):hover { background-color: #db6104; border-color: #db6104; }
      .btn-edit::part(label), .btn-edit::part(prefix) { color: var(--color-sand-light) !important; }
      .btn-delete::part(base) { background-color: rgba(220, 38, 38, 0.8); border-color: transparent; }
      .btn-delete::part(base):hover { background-color: rgba(220, 38, 38, 1); }
      .btn-delete::part(label), .btn-delete::part(prefix) { color: var(--color-sand-light) !important; }
      .btn-save::part(base) { background-color: #15803d; border-color: #15803d; }
      .btn-save::part(base):hover { background-color: #166534; border-color: #166534; }
      .btn-save::part(label), .btn-save::part(prefix) { color: var(--color-sand-light) !important; }
      .btn-cancel::part(base) { color: var(--color-wood-dark); border-color: var(--color-wood-medium); background-color: transparent; }
      .btn-cancel::part(base):hover { background-color: var(--color-cookie-medium); border-color: var(--color-wood-dark); }
      sl-divider { --color: var(--color-wood-medium); margin: 25px 0; }
    `];Io([J()],ni.prototype,"questions",2);Io([J()],ni.prototype,"isSubmitting",2);Io([J()],ni.prototype,"editingId",2);ni=Io([Ve("app-admin-qa")],ni);var V_=Object.defineProperty,H_=Object.getOwnPropertyDescriptor,fi=(e,t,r,a)=>{for(var i=a>1?void 0:a?H_(t,r):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(i=(a?o(t,r,i):o(i))||i);return a&&i&&V_(t,r,i),i};let oa=class extends Le{constructor(){super(...arguments),this.items=[],this.editingItem=null,this.isSubmitting=!1,this.isUploading=!1}async firstUpdated(){this.fetchItems()}async fetchItems(){const e=await ve("/kancelaria");e.ok&&(this.items=await e.json())}openEdit(e=null){let t=e?.files;typeof t=="string"&&(t=JSON.parse(t)),this.editingItem=e?{...e,files:t||[]}:{title:"",photoUrl:"",content:"",footer:"",files:[]},this.dialog.show()}async save(){if(console.log("Co wysyłam:",this.editingItem),!this.editingItem.title)return alert("Tytuł jest wymagany!");this.isSubmitting=!0;const e=this.editingItem.id?`/kancelaria/${this.editingItem.id}`:"/kancelaria",t=this.editingItem.id?"PUT":"POST";try{(await ve(e,{method:t,body:JSON.stringify(this.editingItem)})).ok&&(this.dialog.hide(),await this.fetchItems())}catch{alert("Błąd zapisywania!")}finally{this.isSubmitting=!1}}async deleteItem(e){confirm("Usunąć tę sprawę?")&&(await ve(`/kancelaria/${e}`,{method:"DELETE"}),this.fetchItems())}async handlePhotoUpload(e){const t=e.target.files[0];if(!t)return;this.isUploading=!0;const r=new FormData;r.append("photo",t);try{const a=await ve("/upload",{method:"POST",body:r});if(a.ok){const i=await a.json();this.editingItem={...this.editingItem,photoUrl:i.url},this.requestUpdate()}}catch{alert("Błąd wgrywania zdjęcia.")}finally{this.isUploading=!1}}async handleDocumentUpload(e){const t=e.target.files[0];if(!t)return;this.isUploading=!0;const r=new FormData;r.append("photo",t);try{const a=await ve("/upload",{method:"POST",body:r});if(a.ok){const n={url:(await a.json()).url,name:t.name};this.editingItem={...this.editingItem,files:[...this.editingItem.files,n]},this.requestUpdate()}}catch{alert("Błąd wgrywania dokumentu.")}finally{this.isUploading=!1,e.target.value=""}}removeFile(e){const t=this.editingItem.files.filter((r,a)=>a!==e);this.editingItem={...this.editingItem,files:t}}render(){return L`
      <div class="header-actions">
        <h2>Zarządzaj Sprawami Kancelaryjnymi</h2>
        <sl-button variant="primary" @click=${()=>this.openEdit()}>
          <sl-icon slot="prefix" name="plus-lg"></sl-icon> Dodaj Sprawę
        </sl-button>
      </div>

      <div class="list-container">
        ${this.items.map(e=>L`
          <div class="list-item">
            <div class="item-info">
              ${e.photoUrl?L`<img src="${e.photoUrl}">`:L`<sl-icon name="folder"></sl-icon>`}
              ${e.title}
            </div>
            <div class="actions-container">
              <sl-button size="small" class="btn-edit" @click=${()=>this.openEdit(e)}>
                <sl-icon slot="prefix" name="pencil"></sl-icon> Edytuj
              </sl-button>
              <sl-button size="small" class="btn-delete" @click=${()=>this.deleteItem(e.id)}>
                <sl-icon slot="prefix" name="trash"></sl-icon> Usuń
              </sl-button>
            </div>
          </div>
        `)}
      </div>

      <sl-dialog label="${this.editingItem?.id?"Edytuj Sprawę":"Nowa Sprawa"}">
        <form>
          <sl-input label="Tytuł" required .value=${this.editingItem?.title} @sl-input=${e=>this.editingItem.title=e.target.value}></sl-input>

          <div style="display: flex; flex-direction: column; gap: 8px;">
            <label style="font-size: 0.9rem; color: var(--color-wood-dark);">Zdjęcie kafelka</label>
            <input type="file" accept="image/*" @change=${this.handlePhotoUpload} />
            ${this.editingItem?.photoUrl?L`<img src="${this.editingItem.photoUrl}" style="max-width: 100px; border-radius: 8px; border: 1px solid var(--color-wood-medium); margin-top: 5px;" />`:""}
          </div>

          <sl-textarea label="Opis wymaganych dokumentów" rows="5" .value=${this.editingItem?.content} @sl-input=${e=>this.editingItem.content=e.target.value}></sl-textarea>
          <sl-input label="Dopisek pod spodem" .value=${this.editingItem?.footer} @sl-input=${e=>this.editingItem.footer=e.target.value}></sl-input>

          <div style="border: 1px dashed var(--color-wood-medium); padding: 10px; border-radius: 8px;">
            <label style="font-size: 0.9rem; color: var(--color-wood-dark); display: block; margin-bottom: 5px;">Pliki do pobrania</label>
            <input type="file" accept=".pdf,.doc,.docx" @change=${this.handleDocumentUpload} />
            <ul class="files-list">
              ${(this.editingItem?.files||[]).map((e,t)=>L`
                <li>
                  <span style="font-size: 0.9rem; word-break: break-all;">${e.name}</span>
                  <sl-button variant="text" size="small" @click=${()=>this.removeFile(t)}>Usuń</sl-button>
                </li>
              `)}
            </ul>
          </div>
        </form>
        <sl-button slot="footer" variant="primary" ?loading=${this.isSubmitting||this.isUploading} @click=${this.save}>Zapisz</sl-button>
      </sl-dialog>
    `}};oa.styles=[He,fe`
    :host { display: block; padding: 10px; max-width: 900px; width: 100%; margin: 0 auto; box-sizing: border-box; }
    .header-actions { display: flex; justify-content: space-between; align-items: center; margin-bottom: 25px; flex-wrap: wrap; gap: 15px;}
    .header-actions h2 { margin: 0; color: var(--color-wood-dark); }
    .view-controls { display: flex; justify-content: center; margin-bottom: 25px; }
    .list-container { display: flex; flex-direction: column; gap: 15px; }
    .list-item { background: var(--color-sand-light); border: 2px solid var(--color-wood-medium); border-radius: 12px; padding: 15px; display: flex; align-items: center; justify-content: space-between;}
    .item-info { display: flex; align-items: center; gap: 15px; color: var(--color-wood-dark); font-weight: bold; font-size: 1.1rem; }
    .item-info img { width: 50px; height: 50px; border-radius: 50%; object-fit: cover; border: 2px solid var(--color-wood-dark); }
    .actions-container { display: flex; gap: 10px; }
    form { display: flex; flex-direction: column; gap: 15px; }
    sl-input, sl-textarea, sl-select { --sl-input-background-color: var(--color-sand-light); --sl-input-background-color-hover: var(--color-sand-light); --sl-input-background-color-focus: var(--color-sand-light); --sl-input-border-color: var(--color-wood-medium); --sl-input-border-color-hover: var(--color-wood-medium); --sl-input-border-color-focus: var(--color-wood-medium); --sl-input-color: var(--color-wood-dark); --sl-input-label-color: var(--color-wood-dark); }
    sl-dialog { --sl-panel-background-color: var(--color-sand-light); color: var(--color-wood-dark); }
    sl-dialog::part(title) { color: var(--color-wood-dark); font-weight: bold; }
    sl-input::part(input):hover, sl-textarea::part(textarea):hover {
      color: var(--color-wood-dark) !important;
    }
    .upload-container { display: flex; flex-direction: column; gap: 20px; padding: 10px 0; }
    .instructions { background-color: var(--color-cookie-medium); padding: 20px; border-left: 5px solid var(--color-wood-dark); border-radius: 8px; color: var(--color-wood-dark); }
    input[type="file"]::file-selector-button { border: 2px solid var(--color-wood-medium); padding: 8px 16px; border-radius: 8px; background-color: var(--color-sand-light); color: var(--color-wood-dark); cursor: pointer; transition: all 0.2s ease; margin-right: 10px; font-weight: bold; }
    input[type="file"]::file-selector-button:hover { background-color: var(--color-cookie-medium); }
    .files-list { list-style: none; padding: 0; margin-top: 10px; }
    .files-list li { display: flex; justify-content: space-between; align-items: center; background: var(--color-cookie-medium); padding: 8px 12px; border-radius: 6px; margin-bottom: 5px; color: var(--color-wood-dark); }
    .files-list sl-button::part(base) { color: red; }
    .btn-edit::part(base) { background-color: #d97706; border-color: #d97706; color: white; }
    .btn-edit::part(base):hover { background-color: #db6104; border-color: #db6104; }
    .btn-delete::part(base) { background-color: rgba(220, 38, 38, 0.8); border-color: transparent; color: white; }
    .btn-delete::part(base):hover { background-color: rgba(220, 38, 38, 1); }
    .btn-edit::part(label), .btn-edit::part(prefix),
    .btn-delete::part(label), .btn-delete::part(prefix) {
      color: var(--color-sand-light) !important;
    }
    sl-dialog { --sl-panel-background-color: var(--color-sand-light); }
    form { display: flex; flex-direction: column; gap: 15px; }
    .files-list { list-style: none; padding: 0; margin-top: 10px; }
    .files-list li { display: flex; justify-content: space-between; align-items: center; background: var(--color-cookie-medium); padding: 8px 12px; border-radius: 6px; margin-bottom: 5px; color: var(--color-wood-dark); }
  `];fi([J()],oa.prototype,"items",2);fi([xe("sl-dialog")],oa.prototype,"dialog",2);fi([J()],oa.prototype,"editingItem",2);fi([J()],oa.prototype,"isSubmitting",2);fi([J()],oa.prototype,"isUploading",2);oa=fi([Ve("app-admin-kancelaria")],oa);var j_=Object.defineProperty,W_=Object.getOwnPropertyDescriptor,pi=(e,t,r,a)=>{for(var i=a>1?void 0:a?W_(t,r):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(i=(a?o(t,r,i):o(i))||i);return a&&i&&j_(t,r,i),i};let sa=class extends Le{constructor(){super(...arguments),this.admins=[],this.groups=[],this.editingAdmin=null,this.isSubmitting=!1}async firstUpdated(){this.fetchAdmins(),this.fetchGroups()}async fetchAdmins(){try{const e=await ve("/admins");if(e.ok){const t=await e.json();this.admins=t.sort((r,a)=>Number(a.isSuperAdmin)-Number(r.isSuperAdmin))}}catch(e){console.error("Błąd pobierania adminów",e)}}async fetchGroups(){try{const e=await ve("/groups");e.ok&&(this.groups=await e.json())}catch(e){console.error("Błąd pobierania grup",e)}}openEdit(e=null){if(e){const t=e.managedGroups?.map(r=>String(r.groupId))||[];this.editingAdmin={...e,allowedGroupIds:t}}else this.editingAdmin={login:"",password:"",isSuperAdmin:!1,allowedGroupIds:[]};this.dialog.show()}async save(){if(!this.editingAdmin.login)return alert("Login jest wymagany!");if(!this.editingAdmin.id&&!this.editingAdmin.password)return alert("Dla nowego admina musisz podać hasło!");this.isSubmitting=!0;const e=this.editingAdmin.id?`/admins/${this.editingAdmin.id}`:"/admins",t=this.editingAdmin.id?"PUT":"POST";try{const r=await ve(e,{method:t,body:JSON.stringify(this.editingAdmin)});if(r.ok)this.dialog.hide(),await this.fetchAdmins();else{const a=await r.json();alert(a.error||"Błąd zapisywania!")}}catch{alert("Błąd komunikacji z serwerem.")}finally{this.isSubmitting=!1}}async deleteItem(e){confirm("Usunąć tego administratora?")&&(await ve(`/admins/${e}`,{method:"DELETE"}),this.fetchAdmins())}render(){return L`
      <div class="header-actions">
        <h2>Zarządzaj Administratorami</h2>
        <sl-button variant="primary" @click=${()=>this.openEdit()}>
          <sl-icon slot="prefix" name="person-plus-fill"></sl-icon> Dodaj Admina
        </sl-button>
      </div>

      <div class="list-container">
        ${this.admins.map(e=>L`
          <div class="list-item">
            <div class="item-info">
              <div class="admin-header">
                <sl-icon name="person-circle" style="font-size: 1.5rem;"></sl-icon>
                ${e.login}
              </div>
              <div class="admin-details">
                ${e.isSuperAdmin?L`<sl-badge class="badge-super" pill>Superadmin</sl-badge>`:L`
                      <strong>Zarządza grupami:</strong>
                      ${e.managedGroups&&e.managedGroups.length>0?e.managedGroups.map(t=>L`<sl-badge pill>${this.groups.find(r=>r.id===t.groupId)?.name||"Nieznana"}</sl-badge>`):L`<em>Brak przypisanych grup</em>`}
                    `}
              </div>
            </div>
            <div class="actions-container">
              <sl-button size="small" class="btn-edit" @click=${()=>this.openEdit(e)}><sl-icon slot="prefix" name="pencil"></sl-icon> Edytuj</sl-button>
              <sl-button size="small" class="btn-delete" @click=${()=>this.deleteItem(e.id)}><sl-icon slot="prefix" name="trash"></sl-icon> Usuń</sl-button>
            </div>
          </div>
        `)}
      </div>

      <sl-dialog label="${this.editingAdmin?.id?"Edytuj Administratora":"Nowy Administrator"}">
        <form @submit=${e=>e.preventDefault()}>

          ${this.editingAdmin?.id?L`
            <div style="margin-bottom: 5px;">
              <label style="color: var(--color-wood-dark); font-size: 0.9rem; font-weight: bold; display: block; margin-bottom: 5px;">Login administratora</label>
              <div style="font-size: 1.2rem; color: var(--color-wood-dark); display: flex; align-items: center; gap: 8px;">
                <sl-icon name="person-badge-fill"></sl-icon> ${this.editingAdmin.login}
              </div>
            </div>
          `:L`
            <label style="color: var(--color-wood-dark); font-size: 0.9rem; font-weight: bold; margin-bottom: -10px;">Login</label>
            <sl-input
              required
              autocomplete="off"
              .value=${this.editingAdmin?.login||""}
              @sl-input=${e=>this.editingAdmin.login=e.target.value}>
            </sl-input>
          `}

          ${this.editingAdmin?.id?"":L`
            <label style="color: var(--color-wood-dark); font-size: 0.9rem; font-weight: bold; margin-bottom: -10px;">Hasło</label>
            <sl-input
              type="password"
              password-toggle
              required
              autocomplete="new-password"
              .value=${this.editingAdmin?.password||""}
              @sl-input=${e=>this.editingAdmin.password=e.target.value}>
            </sl-input>
          `}

          <div style="margin-top: 10px; margin-bottom: 5px;">
            <sl-switch
              .checked=${this.editingAdmin?.isSuperAdmin||!1}
              @sl-change=${e=>{this.editingAdmin={...this.editingAdmin,isSuperAdmin:e.target.checked},this.requestUpdate()}}>
              Super Administrator (pełen dostęp)
            </sl-switch>
          </div>

          ${this.editingAdmin?.isSuperAdmin?L`
            <div style="padding: 10px; background: rgba(185, 28, 28, 0.1); border-radius: 8px; color: #b91c1c; font-size: 0.9rem;">
              <sl-icon name="info-circle-fill"></sl-icon> Ten użytkownik ma uprawnienia Superadmina, więc ma pełen dostęp do wszystkich grup.
            </div>
          `:L`
            <label style="color: var(--color-wood-dark); font-size: 0.9rem; font-weight: bold; margin-bottom: -10px;">Przypisz grupy do zarządzania</label>
            <sl-select
              multiple
              clearable
              .value=${this.editingAdmin?.allowedGroupIds||[]}
              @sl-change=${e=>{const t=Array.isArray(e.target.value)?e.target.value:[e.target.value];this.editingAdmin.allowedGroupIds=t.map(String)}}>
              ${this.groups.map(e=>L`<sl-option value="${e.id}">${e.name}</sl-option>`)}
            </sl-select>
          `}
        </form>

        <sl-button slot="footer" class="btn-cancel" @click=${()=>this.dialog.hide()}>Anuluj</sl-button>
        <sl-button slot="footer" class="btn-save" ?loading=${this.isSubmitting} @click=${this.save}>Zapisz</sl-button>
      </sl-dialog>
    `}};sa.styles=[He,fe`
    :host { display: block; padding: 10px; max-width: 900px; width: 100%; margin: 0 auto; box-sizing: border-box; }
    .header-actions { display: flex; justify-content: space-between; align-items: center; margin-bottom: 25px; }
    .header-actions h2 { margin: 0; color: var(--color-wood-dark); font-size: 1.3rem; }
    .list-container { display: flex; flex-direction: column; gap: 15px; }
    .list-item { background: var(--color-sand-light); border: 2px solid var(--color-wood-medium); border-radius: 12px; padding: 15px; display: flex; align-items: center; justify-content: space-between; width: 100%; box-sizing: border-box; }
    .item-info { display: flex; flex-direction: column; gap: 5px; flex: 1; overflow: hidden; }
    .admin-header { display: flex; align-items: center; gap: 10px; color: var(--color-wood-dark); font-weight: bold; font-size: 1.1rem; }
    .admin-details { font-size: 0.9rem; color: var(--color-wood-dark); opacity: 0.9; display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
    .actions-container { display: flex; gap: 10px; flex-shrink: 0; }
    .btn-edit::part(base) { background-color: #d97706; border-color: #d97706; }
    .btn-edit::part(base):hover { background-color: #db6104; border-color: #db6104; }
    .btn-edit::part(label), .btn-edit::part(prefix) { color: var(--color-sand-light) !important; }
    .btn-delete::part(base) { background-color: rgba(220, 38, 38, 0.8); border-color: transparent; }
    .btn-delete::part(base):hover { background-color: rgba(220, 38, 38, 1); }
    .btn-delete::part(label), .btn-delete::part(prefix) { color: var(--color-sand-light) !important; }
    .btn-cancel::part(base) { background-color: var(--color-wood-dark); border-color: var(--color-wood-medium); color: var(--color-sand-light); font-weight: 600; }
    .btn-cancel::part(base):hover { background-color: var(--color-wood-dark); border-color: var(--color-wood-dark); }
    .btn-cancel::part(label) { color: var(--color-sand-light) !important; }
    .btn-save::part(base) { background-color: var(--color-wood-dark); border-color: var(--color-wood-dark); color: var(--color-sand-light); font-weight: 600; }
    .btn-save::part(label) { color: var(--color-sand-light) !important; }
    sl-dialog { --sl-panel-background-color: var(--color-sand-light); }
    sl-dialog::part(title) { color: var(--color-wood-dark); font-weight: bold; }
    sl-dialog::part(close-button) { color: var(--color-wood-dark); }
    form { display: flex; flex-direction: column; gap: 15px; }
    sl-input {
      --sl-input-border-color: var(--color-wood-medium);
      --sl-input-focus-border-color: var(--color-wood-dark);
      --sl-input-focus-ring-color: rgba(127, 69, 29, 0.2);
    }
    sl-input::part(base), sl-select::part(combobox) {
      background-color: var(--color-sand-light) !important;
      border-color: var(--color-wood-medium) !important;
    }
    sl-input::part(input), sl-select::part(display-input) {
      background-color: var(--color-sand-light) !important;
      color: var(--color-wood-dark) !important;
    }
    sl-select::part(expand-icon), sl-select::part(clear-button) { color: var(--color-wood-dark); }
    sl-select::part(listbox) {
      background-color: var(--color-sand-light) !important;
      border: 1px solid var(--color-wood-medium);
    }
    sl-option::part(base) {
      background-color: var(--color-sand-light) !important;
      color: var(--color-wood-dark) !important;
    }
    sl-option::part(base):hover,
    sl-option:focus-within::part(base) {
      background-color: var(--color-cookie-medium) !important;
      color: var(--color-wood-dark) !important;
    }
    sl-option[checked]::part(base),
    sl-option[current]::part(base) {
      background-color: var(--color-sand-light) !important;
      color: var(--color-wood-dark) !important;
      font-weight: bold;
    }
    sl-option::part(checked-icon) {
      color: var(--color-wood-dark) !important;
    }
    sl-tag::part(base) {
      background-color: var(--color-wood-medium) !important;
      border-color: var(--color-wood-medium) !important;
      color: var(--color-sand-light) !important;
    }
    sl-tag::part(remove-button) {
      color: var(--color-sand-light) !important;
      opacity: 0.8;
    }
    sl-tag::part(remove-button):hover { opacity: 1; }
    sl-switch { --sl-toggle-size: 1.2rem; display: flex; align-items: center; }
    sl-switch::part(thumb) { background-color: var(--color-wood-medium) !important; border: 2px solid var(--color-wood-medium) !important; transition: background-color 0.3s ease, border-color 0.3s ease !important; }
    sl-switch[checked]::part(thumb) { background-color: var(--color-wood-dark) !important; border-color: var(--color-wood-dark) !important; }
    sl-switch::part(control) { background-color: var(--color-cookie-medium) !important; border-color: var(--color-cookie-medium) !important; box-shadow: none !important; outline: none !important; transition: background-color 0.3s ease, border-color 0.3s ease !important; }
    sl-switch[checked]::part(control) { background-color: var(--color-wood-medium) !important; border-color: var(--color-wood-medium) !important; }
    sl-switch::part(label) { color: var(--color-wood-dark); font-size: 0.9rem; font-weight: 500; margin-left: 8px; transition: font-weight 0.1s ease !important; }
    sl-switch[checked]::part(label) { font-weight: 530; }
    sl-badge::part(base) { background-color: var(--color-wood-dark); color: var(--color-sand-light); border-color: var(--color-wood-dark); }
    .badge-super { background-color: #7F451D !important; border-color: #7F451D !important; }
  `];pi([J()],sa.prototype,"admins",2);pi([J()],sa.prototype,"groups",2);pi([xe("sl-dialog")],sa.prototype,"dialog",2);pi([J()],sa.prototype,"editingAdmin",2);pi([J()],sa.prototype,"isSubmitting",2);sa=pi([Ve("app-admin-admins")],sa);var G_=Object.defineProperty,K_=Object.getOwnPropertyDescriptor,Nu=(e,t,r,a)=>{for(var i=a>1?void 0:a?K_(t,r):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(i=(a?o(t,r,i):o(i))||i);return a&&i&&G_(t,r,i),i};let po=class extends Le{constructor(){super(...arguments),this.loggingOut=!1,this.syncTabWithUrl=()=>{const e=this.shadowRoot?.querySelector("sl-tab-group");if(!e)return;const t=window.location.pathname;t.includes("/events")?e.show("events"):t.includes("/announcements")?e.show("announcements"):t.includes("/qa")?e.show("qa"):t.includes("/kancelaria")?e.show("kancelaria"):t.includes("/admini")?e.show("admini"):e.show("groups")}}connectedCallback(){super.connectedCallback(),this.dispatchEvent(new CustomEvent("change-title",{detail:{title:"Panel Administratora"},bubbles:!0,composed:!0})),window.addEventListener("popstate",this.syncTabWithUrl)}disconnectedCallback(){window.removeEventListener("popstate",this.syncTabWithUrl),super.disconnectedCallback()}async firstUpdated(){setTimeout(()=>{this.syncTabWithUrl()},50)}handleTabChange(e){const t=e.detail.name,r="/mParafia/",a=t==="groups"?"/admin":`/admin/${t}`,i=r+a.substring(1);window.history.pushState({},"",i)}async handleLogout(){this.loggingOut=!0;try{await ve("/admin/logout",{method:"POST"})}catch(e){console.error("Błąd serwera podczas wylogowywania:",e)}finally{localStorage.removeItem("isAdmin"),localStorage.removeItem("isSuperAdmin"),localStorage.removeItem("allowedGroups");const r="/mParafia/"+"/admin-login".substring(1);window.location.href=r}}render(){return L`
      <div class="admin-wrapper">
        <div class="admin-container">
          <sl-tab-group @sl-tab-show=${this.handleTabChange}>
            <sl-tab slot="nav" panel="groups"><sl-icon name="people-fill" style="margin-right: 8px;"></sl-icon> Grupy</sl-tab>
            <sl-tab slot="nav" panel="events"><sl-icon name="star-fill" style="margin-right: 8px;"></sl-icon> Wydarzenia</sl-tab>
            <sl-tab slot="nav" panel="announcements"><sl-icon name="megaphone-fill" style="margin-right: 8px;"></sl-icon> Ogłoszenia</sl-tab>
            <sl-tab slot="nav" panel="qa"><sl-icon name="chat-quote-fill" style="margin-right: 8px;"></sl-icon> Q&A</sl-tab>
            <sl-tab slot="nav" panel="kancelaria"><sl-icon name="journal-bookmark-fill" style="margin-right: 8px;"></sl-icon> Kancelaria</sl-tab>
            <sl-tab slot="nav" panel="admini"><sl-icon name="shield-lock-fill" style="margin-right: 8px;"></sl-icon> Admini</sl-tab>

            <sl-button slot="nav" class="btn-logout" size="small" ?loading="${this.loggingOut}" @click="${this.handleLogout}">
              <sl-icon slot="prefix" name="box-arrow-right"></sl-icon>
              Wyloguj się
            </sl-button>

            <sl-tab-panel name="groups"><app-admin-groups></app-admin-groups></sl-tab-panel>
            <sl-tab-panel name="events"><app-admin-events></app-admin-events></sl-tab-panel>
            <sl-tab-panel name="announcements"><app-admin-announcements></app-admin-announcements></sl-tab-panel>
            <sl-tab-panel name="qa"><app-admin-qa></app-admin-qa></sl-tab-panel>
            <sl-tab-panel name="kancelaria"><app-admin-kancelaria></app-admin-kancelaria></sl-tab-panel>
            <sl-tab-panel name="admini"><app-admin-admins></app-admin-admins></sl-tab-panel>
          </sl-tab-group>
        </div>
      </div>
    `}};po.styles=[He,fe`
      :host { display: block; padding: 10px; max-width: 900px; width: 100%; margin: 0 auto; box-sizing: border-box; }
      .admin-wrapper { position: relative; width: 100%; }
      .btn-logout {
        margin-left: auto;
        margin-right: 15px;
        align-self: center;
      }

      .btn-logout::part(base) {
        background-color: var(--color-wood-dark);
        border-color: var(--color-wood-dark);
        color: var(--color-sand-light) !important;
        font-weight: 600;
        transition: all 0.3s ease;
      }

      .btn-logout::part(label),
      .btn-logout::part(prefix) {
        color: var(--color-sand-light) !important;
      }

      .btn-logout::part(base):hover {
        background-color: var(--color-wood-medium);
        border-color: var(--color-wood-medium);
      }
      .admin-container { background-color: var(--color-sand-light); border: 2px solid var(--color-wood-medium); border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(127, 69, 29, 0.1); }
      sl-tab-group::part(nav) { background-color: var(--color-cookie-medium); border-bottom: 2px solid var(--color-wood-medium); }
      sl-tab::part(base) { color: var(--color-wood-dark); font-weight: 500; padding: 15px 20px; transition: background-color 0.2s; }
      sl-tab[active]::part(base) { font-weight: bold; border-bottom-color: var(--color-wood-dark); color: var(--color-wood-dark); background-color: var(--color-sand-light); }
      sl-tab-panel::part(base) { padding: 25px 15px; }
    `];Nu([J()],po.prototype,"loggingOut",2);po=Nu([Ve("app-admin")],po);var X_=Object.defineProperty,Y_=Object.getOwnPropertyDescriptor,Tn=(e,t,r,a)=>{for(var i=a>1?void 0:a?Y_(t,r):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(i=(a?o(t,r,i):o(i))||i);return a&&i&&X_(t,r,i),i};let Ia=class extends Le{constructor(){super(...arguments),this.groupId=null,this.group=null,this.events=[],this.isLoading=!0}connectedCallback(){super.connectedCallback();const t=new URLSearchParams(window.location.search).get("id");t&&(this.groupId=parseInt(t,10))}async firstUpdated(){this.groupId?await this.fetchGroupDetails():this.isLoading=!1}async fetchGroupDetails(){try{const e=await ve("/groups");if(e.ok){const r=await e.json();this.group=r.find(a=>a.id===this.groupId)||null,this.group&&this.dispatchEvent(new CustomEvent("change-title",{detail:{title:this.group.name},bubbles:!0,composed:!0}))}const t=await ve("/events/all");if(t.ok){const r=await t.json();this.events=r.filter(a=>a.groupId===this.groupId)}}catch(e){console.error("Błąd podczas pobierania danych:",e)}finally{this.isLoading=!1}}formatDate(e){return new Date(e).toLocaleDateString("pl-PL",{weekday:"long",day:"numeric",month:"long",hour:"2-digit",minute:"2-digit"})}render(){return this.isLoading?L`
        <div class="center-content">
          <sl-spinner style="font-size: 2rem;"></sl-spinner>
        </div>
      `:this.group?L`
      <div class="header-section">
        <div class="group-photo-large">
          ${this.group.photoUrl?L`<img src="${this.group.photoUrl}" style="width: 100%; height: 100%; border-radius: 50%; object-fit: cover;" />`:L`<sl-icon name="people-fill"></sl-icon>`}
        </div>
        <h2 class="group-name">${this.group.name}</h2>
        ${this.group.description?L`<p class="group-description">${this.group.description}</p>`:L`<p class="group-description">Ta grupa nie ma jeszcze opisu.</p>`}
      </div>

      <div class="events-section">
        <h3 class="section-title">Wydarzenia grupy</h3>

        ${this.events.length===0?L`<p style="color: #7F451D; text-align: center;">Brak nadchodzących wydarzeń dla tej grupy.</p>`:L`
              <div class="events-list">
                ${this.events.map(e=>{const t=this.formatDate(e.startTime);return L`
                    <calendar-item
                      .time="${t}"
                      .name="${e.title}"
                      .groupColor="${this.group?.color||""}"
                      .targetUrl="/mParafia/wydarzenie?id=${e.id}"
                      category="grupa"
                      multiline
                    ></calendar-item>
                  `})}
              </div>
            `}
      </div>
    `:L`
        <div class="center-content">
          <p>Nie znaleziono takiej grupy.</p>
        </div>
      `}};Ia.styles=[He,fe`
      :host {
        display: block;
        padding: 10px;
        width: 100%;
        max-width: 900px;
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
        color: var(--color-wood-dark);
        line-height: 1.5;
        margin: 0;
        white-space: pre-wrap;
        text-align: justify;
        width: 100%;
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

      calendar-item {
        display: block;
        width: 100%;
        cursor: pointer;
      }
    `];Tn([J()],Ia.prototype,"groupId",2);Tn([J()],Ia.prototype,"group",2);Tn([J()],Ia.prototype,"events",2);Tn([J()],Ia.prototype,"isLoading",2);Ia=Tn([Ve("app-group-detail")],Ia);var q_=Object.defineProperty,Z_=Object.getOwnPropertyDescriptor,An=(e,t,r,a)=>{for(var i=a>1?void 0:a?Z_(t,r):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(i=(a?o(t,r,i):o(i))||i);return a&&i&&q_(t,r,i),i};let Pa=class extends Le{constructor(){super(...arguments),this.mainAnnouncements=[],this.archive=[],this.showArchive=!1,this.isLoading=!0}connectedCallback(){super.connectedCallback();const e=new CustomEvent("change-title",{detail:{title:"Ogłoszenia Parafialne"},bubbles:!0,composed:!0});this.dispatchEvent(e)}async firstUpdated(){try{const e=await ve("/announcements");if(e.ok){const t=await e.json();this.mainAnnouncements=t.filter(r=>r.isMain),this.archive=t.filter(r=>!r.isMain).sort((r,a)=>new Date(a.date).getTime()-new Date(r.date).getTime())}}finally{this.isLoading=!1}}formatDate(e){return new Date(e).toLocaleDateString("pl-PL",{day:"numeric",month:"long",year:"numeric"})}render(){return this.isLoading?L`<div style="text-align:center; padding: 40px;"><sl-spinner style="font-size: 2rem; --indicator-color: var(--color-wood-medium);"></sl-spinner></div>`:L`
      <div>
        ${this.mainAnnouncements.map(e=>L`
          <div class="paper">
            <h2 class="title">${e.title}</h2>
            <span class="date">${this.formatDate(e.date)}</span>
            <sl-divider style="--color: var(--color-wood-medium);"></sl-divider>
            <div class="content">${e.content}</div>
          </div>
        `)}

        ${this.mainAnnouncements.length===0?L`
          <div class="paper" style="text-align: center; color: var(--color-wood-medium);">
            Brak aktualnych ogłoszeń na ten tydzień.
          </div>
        `:""}

        <div style="text-align: center; margin-top: 25px;">
          <button class="custom-archive-btn" @click="${()=>this.showArchive=!this.showArchive}">
            <sl-icon name="${this.showArchive?"chevron-up":"archive"}"></sl-icon>
            ${this.showArchive?"Ukryj Archiwum":"Zobacz Archiwum Ogłoszeń"}
          </button>
        </div>

        ${this.showArchive?L`
          <div class="archive-list">
            ${this.archive.map(e=>L`
              <div class="archive-item">
                <h4 style="margin:0; color: var(--color-wood-dark);">${e.title}</h4>
                <small style="color: var(--color-wood-medium);">${this.formatDate(e.date)}</small>
                <p class="content" style="font-size: 0.95rem; margin-top: 10px;">${e.content}</p>
              </div>
            `)}
          </div>
        `:""}
      </div>
    `}};Pa.styles=[He,fe`
      :host {
        display: block;
        padding: 10px;
        width: 100%;
        max-width: 900px;
        margin: 0 auto;
        box-sizing: border-box;
      }

      .paper {
        background-color: var(--color-sand-light);
        border: 2px solid var(--color-wood-medium);
        border-radius: 12px;
        padding: 25px;
        margin-bottom: 20px;
      }

      .title {
        color: var(--color-wood-dark);
        text-align: center;
        margin: 0;
      }

      .date {
        color: var(--color-wood-medium);
        text-align: center;
        display: block;
        margin-bottom: 15px;
        font-size: 0.9rem;
      }

      .content {
        white-space: pre-line;
        line-height: 1.6;
        color: var(--color-wood-dark);
      }

      .custom-archive-btn {
        background-color: var(--color-sand-light);
        border: 2px solid var(--color-wood-medium);
        color: var(--color-wood-dark);
        border-radius: 25px;
        padding: 10px 20px;
        font-size: 1rem;
        font-weight: bold;
        font-family: inherit;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        gap: 8px;
        transition: transform 0.2s ease, background-color 0.2s ease;
      }

      .custom-archive-btn:active {
        transform: scale(0.98);
        background-color: var(--color-cookie-medium);
      }

      @media (hover: hover) {
        .custom-archive-btn:hover {
          background-color: var(--color-cookie-medium);
        }
      }

      .archive-list {
        margin-top: 25px;
        display: flex;
        flex-direction: column;
        gap: 15px;
      }

      .archive-item {
        background-color: var(--color-sand-light);
        border: 2px solid var(--color-wood-medium);
        border-radius: 12px;
        padding: 15px;
      }
    `];An([J()],Pa.prototype,"mainAnnouncements",2);An([J()],Pa.prototype,"archive",2);An([J()],Pa.prototype,"showArchive",2);An([J()],Pa.prototype,"isLoading",2);Pa=An([Ve("app-announcements")],Pa);var J_=Object.getOwnPropertyDescriptor,Q_=(e,t,r,a)=>{for(var i=a>1?void 0:a?J_(t,r):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(i=o(i)||i);return i};let _s=class extends Le{connectedCallback(){super.connectedCallback();const e=new CustomEvent("change-title",{detail:{title:"Nabożeństwa i Msze Święte"},bubbles:!0,composed:!0});this.dispatchEvent(e)}render(){return L`
      <div class="wrapper">

        <div class="paper">
          <div class="title-container">
            <sl-icon name="bell-fill"></sl-icon>
            <h2>Msze św. w niedziele i święta</h2>
          </div>
          <sl-divider style="--color: var(--color-wood-medium);"></sl-divider>

          <div class="content-block">
            <p><strong>Godziny:</strong><br>
            <ul class="msze-list">
                <li>7.00,
                <li>8.30,
                <li>10.00 (z kazaniem dla dzieci w roku szkolnym),
                <li>11.15,
                <li>12.30,
                <li>14.00 (poza okresem wakacyjnym),
                <li>18.00,
                <li>20.00
                <li>(oraz w soboty o 18.00).
            </ul>
            </p>

            <p><strong>Święta nakazane:</strong>
                Msze św. jak w każdą niedzielę<br>
                <ul class="msze-list">
                    <li>Nowy Rok (1 stycznia),
                    <li>Trzech Króli (6 stycznia),
                    <li>Matki Bożej Królowej Polski (3 maja),
                    <li>Boże Ciało,
                    <li>Wniebowzięcie NMP (15 sierpnia),
                    <li>Wszystkich Świętych (1 listopada)
                </ul>
            </p>

            <p><strong>Inne święta:</strong>
                Msze św.: 7.00, 8.30, 16.30, 18.00 oraz 20.00 <br>
                <ul class="msze-list">
                    <li>Matki Bożej Gromnicznej (2 lutego),
                    <li>Środa Popielcowa,
                    <li>Dzień Zaduszny
                </ul>
            </p>
          </div>
        </div>

        <div class="paper">
          <div class="title-container">
            <sl-icon name="bell-fill"></sl-icon>
            <h2>Msze św. w dni powszednie</h2>
          </div>
          <sl-divider style="--color: var(--color-wood-medium);"></sl-divider>

          <div class="content-block" style="text-align: left;">
            <p>7.00 i 18.00</p>
          </div>
        </div>

        <div class="paper">
          <div class="title-container">
            <sl-icon name="people-fill"></sl-icon>
            <h2>Nabożeństwa</h2>
          </div>
          <sl-divider style="--color: var(--color-wood-medium);"></sl-divider>

          <div class="content-block">
            <ul class="custom-list">
              <li><strong>Środa:</strong> <br> 17.30 różaniec oraz Nowenna do Matki Bożej Nieustającej Pomocy (po Mszy św. o 18.00).</li>
              <li><strong>I piątek miesiąca:</strong> <br>17.00 – 18.00 adoracja oraz spowiedź, <br>po Mszy Uwielbienie (Krąg Rodzin), <br>od 20.00 do 21.00 Adoracja prowadzona przez młodzież.</li>
              <li><strong>III piątek miesiąca:</strong> <br>Msza św. za zmarłych wypominanych<br>Koronka do Bożego Miłosierdzia po Mszy św. o 18.00.</li>
              <li><strong>I sobota:</strong> <br>Msza św. wynagradzająca Niepokalanemu Sercu Maryi za grzechy świata o 8.00 <br> różaniec po Mszy.</li>
              <li><strong>II niedziela miesiąca:</strong> <br>10.00 Msza św. w intencji dzieci przeżywających rocznice urodzin.</li>
            </ul>
          </div>
        </div>

        <div class="paper">
          <div class="title-container">
            <sl-icon name="person-fill-add"></sl-icon>
            <h2>Chrzty</h2>
          </div>
          <sl-divider style="--color: var(--color-wood-medium);"></sl-divider>

          <div class="content-block" style="text-align: left;">
            <p>
                I niedziela miesiąca na Mszy o 14.00 <br>
                III niedziela miesiąca na Mszy o 12.30
            </p>
          </div>
        </div>

      </div>
    `}};_s.styles=[He,fe`
      :host {
        display: block;
        padding: 10px;
        width: 100%;
        max-width: 900px;
        margin: 0 auto;
        box-sizing: border-box;
      }

      .wrapper {
        display: flex;
        flex-direction: column;
        gap: 15px;
      }

      .paper {
        background-color: var(--color-sand-light);
        border: 2px solid var(--color-wood-medium);
        border-radius: 12px;
        padding: 15px;
      }

      .title-container {
        display: flex;
        align-items: center;
        gap: 10px;
        color: var(--color-wood-dark);
        margin-bottom: 8px;
      }

      .title-container h2 {
        margin: 0;
        font-size: 1.25rem;
      }

      .title-container sl-icon {
        font-size: 1.25rem;
      }

      .content-block {
        color: var(--color-wood-dark);
        line-height: 1.5;
        font-size: 1rem;
      }

      .content-block p {
        margin: 8px 0;
      }

      .content-block strong {
        color: var(--color-wood-dark);
        font-size: 1.05rem;
      }

      ul.custom-list {
        list-style-type: none;
        padding: 0;
        margin: 0;
      }

      ul.custom-list li {
        margin-bottom: 12px;
        padding-left: 18px;
        position: relative;
      }

      ul.custom-list li::before {
        content: "•";
        color: var(--color-wood-medium);
        font-weight: bold;
        font-size: 1.2rem;
        position: absolute;
        left: 0;
        top: -1px;
      }

      ul.msze-list {
        list-style-type: none;
        padding: 0;
        margin-top: -6px;
      }

      ul.msze-list li {
        margin-bottom: 2px;
        padding-left: 10px;
        position: relative;
      }

      ul.custom-list li:last-child {
        margin-bottom: 0;
      }
    `];_s=Q_([Ve("app-nabozenstwa")],_s);var ek=Object.getOwnPropertyDescriptor,tk=(e,t,r,a)=>{for(var i=a>1?void 0:a?ek(t,r):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(i=o(i)||i);return i};let ks=class extends Le{connectedCallback(){super.connectedCallback(),this.dispatchEvent(new CustomEvent("change-title",{detail:{title:"Sakrament Pokuty"},bubbles:!0,composed:!0}))}render(){return L`
      <div class="paper">
        <div class="title-container">
          <sl-icon name="heart-fill"></sl-icon>
          <h2>Okazja do spowiedzi św.</h2>
        </div>
        <sl-divider style="--color: var(--color-wood-medium);"></sl-divider>
        <div class="content">
          <div class="item">
            <sl-icon name="check2-circle"></sl-icon>
            <div><strong>Dni powszednie:</strong><br>30 min przed Mszą św.</div>
          </div>
          <div class="item">
            <sl-icon name="check2-circle"></sl-icon>
            <div><strong>Niedziela:</strong><br>W czasie każdej Mszy św.</div>
          </div>
          <div class="item">
            <sl-icon name="check2-circle"></sl-icon>
            <div><strong>I piątek miesiąca:</strong><br>Od 17.00 do 18.00 oraz podczas wieczornej adoracji.</div>
          </div>
        </div>
      </div>
    `}};ks.styles=[He,fe`
      :host { display: block; padding: 10px; max-width: 900px; width: 100%; margin: 0 auto; box-sizing: border-box; }
      .paper { background-color: var(--color-sand-light); border: 2px solid var(--color-wood-medium); border-radius: 12px; padding: 20px; }
      .title-container { display: flex; align-items: center; gap: 10px; color: var(--color-wood-dark); margin-bottom: 10px; }
      .title-container h2 { margin: 0; font-size: 1.25rem; }
      .title-container sl-icon { font-size: 1.25rem; }
      .content { color: var(--color-wood-dark); line-height: 1.6; font-size: 1rem; }
      .item { margin-bottom: 12px; display: flex; gap: 10px; align-items: flex-start; }
      .item sl-icon { color: var(--color-wood-medium); font-size: 1.15rem; margin-top: 3px; }
    `];ks=tk([Ve("app-spowiedz")],ks);var rk=Object.defineProperty,ak=Object.getOwnPropertyDescriptor,zu=(e,t,r,a)=>{for(var i=a>1?void 0:a?ak(t,r):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(i=(a?o(t,r,i):o(i))||i);return a&&i&&rk(t,r,i),i};let go=class extends Le{constructor(){super(...arguments),this.kancelariaItems=[]}connectedCallback(){super.connectedCallback(),this.dispatchEvent(new CustomEvent("change-title",{detail:{title:"Kancelaria Parafialna"},bubbles:!0,composed:!0}))}async firstUpdated(){try{const e=await ve("/kancelaria");e.ok&&(this.kancelariaItems=await e.json())}catch(e){console.error(e)}}navigateToDetails(e){const t="/mParafia/",r=`kancelaria-detale?id=${e}`,a=t+r;window.location.href=a}render(){return L`
      <div class="wrapper">
        <div class="paper">
          <div class="title-container"><sl-icon name="person-heart"></sl-icon><h2>Godziny urzędowania</h2></div>
          <sl-divider style="--color: var(--color-wood-medium);"></sl-divider>
          <div class="content">
            <p><strong>W roku szkolnym:</strong><br>Poniedziałek, środa: 16.00 – 17.00<br>Piątek: 19.00 – 20.00</p>
            <p><strong>W wakacje:</strong><br>Czwartek: 16.00 – 17.00<br>Piątek: 19.00 – 20.00</p>
          </div>
        </div>

        <div class="paper">
          <div class="title-container"><sl-icon name="person-lines-fill"></sl-icon><h2>Kontakt</h2></div>
          <sl-divider style="--color: var(--color-wood-medium);"></sl-divider>
          <div class="contact-list">
            <a href="tel:122622004" class="contact-item"><sl-icon name="telephone-fill"></sl-icon> 12 262 20 04</a>
            <a href="mailto:parafia@mbkp.eu" class="contact-item"><sl-icon name="envelope-fill"></sl-icon> parafia@mbkp.eu</a>
          </div>
        </div>

        <div class="paper">
          <div class="title-container">
            <sl-icon name="folder2-open"></sl-icon>
            <h2>Sprawy do załatwienia</h2>
          </div>
          <sl-divider style="--color: var(--color-wood-medium);"></sl-divider>

          <div class="kancelaria-grid">
            ${this.kancelariaItems.map(e=>L`
              <div class="kancelaria-card" @click=${()=>this.navigateToDetails(e.id)}>
                ${e.photoUrl?L`<img src="${e.photoUrl}" class="card-photo">`:L`<sl-icon name="folder" style="font-size: 2.5rem; color: var(--color-wood-dark); margin-bottom: 12px;"></sl-icon>`}
                <span class="kancelaria-name">${e.title}</span>
              </div>
            `)}
          </div>
        </div>

        <div class="paper bank-section">
          <div class="account-name"> #zbieram punkty do nieba </div>
          <sl-icon name="piggy-bank" class="piggy-icon"></sl-icon>
          <div class="account-name">Parafia Rzymsko-katolicka pw. Matki Bożej Królowej Polski</div>
          <div class="account-number">10 1240 1444 1111 0000 0936 3511</div>
        </div>
      </div>
    `}};go.styles=[He,fe`
      :host { display: block; padding: 10px; width: 100%; max-width: 900px; margin: 0 auto; box-sizing: border-box; }
      .wrapper { display: flex; flex-direction: column; gap: 15px; }

      .paper {
        background-color: var(--color-sand-light);
        border: 2px solid var(--color-wood-medium);
        border-radius: 12px;
        padding: 20px;
      }

      .title-container { display: flex; align-items: center; gap: 10px; color: var(--color-wood-dark); margin-bottom: 8px; }
      .title-container h2 { margin: 0; font-size: 1.25rem; }
      .title-container sl-icon { font-size: 1.25rem; }
      .content { color: var(--color-wood-dark); line-height: 1.5; font-size: 1rem; }
      .content p { margin: 8px 0; }

      .bank-section { text-align: center; }
      .piggy-icon { font-size: 7rem; color: var(--color-wood-dark); margin-bottom: 10px; }
      .account-name { color: var(--color-wood-dark); font-size: 1rem; margin-bottom: 5px; }
      .account-number { font-family: monospace; font-size: 1.1rem; color: var(--color-wood-dark); letter-spacing: 1px; }

      .contact-list { display: flex; flex-direction: column; gap: 10px; margin-top: 5px; }
      .contact-item { display: flex; align-items: center; gap: 10px; color: var(--color-wood-dark); text-decoration: none; font-size: 1.05rem; }
      .contact-item:hover { color: var(--color-wood-medium); }

      .kancelaria-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 15px;
        margin-top: 15px;
      }

      .kancelaria-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        cursor: pointer;
        padding: 10px;
        /* Usuwamy background i border */
        background-color: transparent;
        border: none;
      }

      .card-photo {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        object-fit: cover;
        border: 3px solid var(--color-wood-medium);
        transition: transform 0.3s ease, border-color 0.3s ease;
      }

      .kancelaria-name {
        margin-top: 12px;
        font-weight: bold;
        color: var(--color-wood-dark);
        font-size: 1rem;
        transition: opacity 0.3s ease; /* Płynne znikanie napisu */
      }

      /* Interakcja po najechaniu */
      .kancelaria-card:hover .card-photo {
        transform: scale(1.15); /* Powiększenie zdjęcia */
        border-color: var(--color-wood-dark);
      }

      .kancelaria-card:hover .kancelaria-name {
        opacity: 0; /* Napis znika */
      }

      @media (max-width: 600px) { .kancelaria-grid { grid-template-columns: repeat(2, 1fr); } }
      @media (max-width: 400px) { .kancelaria-grid { grid-template-columns: 1fr; } }
    `];zu([J()],go.prototype,"kancelariaItems",2);go=zu([Ve("app-kancelaria")],go);var ik=Object.getOwnPropertyDescriptor,nk=(e,t,r,a)=>{for(var i=a>1?void 0:a?ik(t,r):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(i=o(i)||i);return i};let Es=class extends Le{connectedCallback(){super.connectedCallback(),this.dispatchEvent(new CustomEvent("change-title",{detail:{title:"Lokalizacja i Dojazd"},bubbles:!0,composed:!0}))}render(){const t=`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent("Kościół MB Królowej Polski w Nowym Ruczaju, Zamiejska 6, 30-382 Kraków")}`;return L`
      <div class="paper">

        <a href="${t}" target="_blank" rel="noopener noreferrer" class="address-link">
          <sl-icon name="geo-alt-fill"></sl-icon>
          <div class="address-text">
            <strong>Parafia MB Królowej Polski</strong>
            ul. Zamiejska 6, 30-382 Kraków
          </div>
          <sl-icon name="chevron-right" style="margin-left: auto; font-size: 1.2rem;"></sl-icon>
        </a>

        <div class="hint">
          <sl-icon name="info-circle"></sl-icon>
          Kliknij adres powyżej, aby wyznaczyć trasę w Google Maps.
        </div>

        <div class="map-container">
          <iframe
            src="https://www.openstreetmap.org/export/embed.html?bbox=19.895,50.020,19.925,50.030&layer=mapnik&marker=50.0253,19.9095"
            allowfullscreen>
          </iframe>
        </div>

      </div>
    `}};Es.styles=[He,fe`
      :host {
        display: block;
        padding: 10px;
        width: 100%;
        max-width: 900px;
        margin: 0 auto;
        box-sizing: border-box;
      }

      .paper {
        background-color: var(--color-sand-light);
        border: 2px solid var(--color-wood-medium);
        border-radius: 12px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
      }

      .address-link {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 15px;
        color: var(--color-wood-dark);
        text-decoration: none;
        transition: background-color 0.2s ease;
      }

      @media (hover: hover) {
        .address-link:hover {
          background-color: rgba(127, 69, 29, 0.05);
        }
      }

      .address-link sl-icon {
        font-size: 1.8rem;
        color: var(--color-wood-medium);
      }

      .address-text {
        font-size: 1rem;
        line-height: 1.4;
      }

      .address-text strong {
        display: block;
        font-size: 1rem;
        color: var(--color-wood-dark);
      }

      .hint {
        padding: 10px 15px;
        font-size: 0.85rem;
        color: var(--color-wood-medium);
        background-color: var(--color-cookie-medium);
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .map-container {
        width: 100%;
        height: 400px;
        border-top: 2px solid var(--color-wood-medium);
        position: relative;
        overflow: hidden;
        background-color: #e5e3df;
      }

      iframe {
        position: absolute;
        top: -10px;
        left: -50px;
        width: calc(100% + 100px);
        height: calc(100% + 70px);
        border: none;
      }
    `];Es=nk([Ve("app-dojazd")],Es);var ok=Object.defineProperty,sk=Object.getOwnPropertyDescriptor,Vr=(e,t,r,a)=>{for(var i=a>1?void 0:a?sk(t,r):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(i=(a?o(t,r,i):o(i))||i);return a&&i&&ok(t,r,i),i};let fr=class extends Le{constructor(){super(...arguments),this.groups=[],this.selectedGroup=null,this.groupEvents=[],this.isSubmitting=!1,this.editingEvent=null,this.isEventSubmitting=!1,this.loggingOut=!1}connectedCallback(){super.connectedCallback(),this.dispatchEvent(new CustomEvent("change-title",{detail:{title:"Zarządzanie Moją Grupą"},bubbles:!0,composed:!0}))}async firstUpdated(){await this.fetchGroups()}async fetchGroups(){try{const e=await ve("/groups");if(e.ok){const t=await e.json();if(localStorage.getItem("isSuperAdmin")==="true")this.groups=t;else{const a=localStorage.getItem("allowedGroups"),i=a?JSON.parse(a):[];this.groups=t.filter(n=>i.includes(n.id))}}}catch(e){console.error("Błąd pobierania grup:",e)}}async selectGroup(e){this.selectedGroup={...e},await this.fetchGroupEvents(e.id)}clearSelection(){this.selectedGroup=null,this.groupEvents=[]}async fetchGroupEvents(e){try{const t=await ve("/events/all");if(t.ok){const r=await t.json();this.groupEvents=r.filter(a=>a.groupId===e).sort((a,i)=>new Date(a.startTime).getTime()-new Date(i.startTime).getTime())}}catch(t){console.error("Błąd pobierania wydarzeń:",t)}}async saveGroupData(){if(this.selectedGroup?.name){this.isSubmitting=!0;try{(await ve(`/groups/${this.selectedGroup.id}`,{method:"PUT",body:JSON.stringify(this.selectedGroup)})).ok?(alert("Zapisano zmiany w grupie!"),await this.fetchGroups()):alert("Błąd podczas zapisywania.")}catch(e){console.error(e)}finally{this.isSubmitting=!1}}}openAddEventDialog(){this.editingEvent={title:"",startTime:"",location:"",description:"",groupId:this.selectedGroup.id},this.eventDialog.show()}openEditEventDialog(e){this.editingEvent={...e},this.eventDialog.show()}async saveEvent(){if(!this.editingEvent?.title||!this.editingEvent?.startTime){alert("Proszę wypełnić wymagane pola: Tytuł oraz Datę!");return}this.isEventSubmitting=!0;const e=!!this.editingEvent.id,t=e?`/events/${this.editingEvent.id}`:"/events",r=e?"PUT":"POST";let a=this.editingEvent.startTime;a&&!a.includes("Z")&&(a=new Date(a).toISOString());const i={...this.editingEvent,startTime:a,groupIds:[this.selectedGroup.id]};try{(await ve(t,{method:r,body:JSON.stringify(i)})).ok?(this.eventDialog.hide(),await this.fetchGroupEvents(this.selectedGroup.id)):alert("Wystąpił błąd podczas zapisywania wydarzenia.")}catch(n){console.error(n),alert("Nie udało się połączyć z serwerem.")}finally{this.isEventSubmitting=!1}}async deleteEvent(e){if(confirm("Czy na pewno chcesz usunąć to wydarzenie?"))try{(await ve(`/events/${e}`,{method:"DELETE"})).ok&&await this.fetchGroupEvents(this.selectedGroup.id)}catch(t){console.error(t)}}async handleLogout(){this.loggingOut=!0;try{await ve("/admin/logout",{method:"POST"})}catch(e){console.error("Błąd serwera podczas wylogowywania:",e)}finally{localStorage.removeItem("isAdmin"),localStorage.removeItem("isSuperAdmin"),localStorage.removeItem("allowedGroups");const r="/mParafia/"+"/admin-login".substring(1);window.location.href=r}}renderSelectionView(){return L`
      <div>
        <h2 class="header-title">Wybierz grupę</h2>
      </div>

      <div class="list-container">
        ${this.groups.map(e=>L`
          <div class="list-item">
            <div class="logo-container">
              <sl-avatar
                image="${e.photoUrl||""}"
                label="${e.name}"
                initials="${e.name.substring(0,2).toUpperCase()}"
                style="--size: 50px;">
              </sl-avatar>
            </div>
            <div class="content-container">
              <span class="entity-name">${e.name}</span>
              ${e.description?L`<span class="entity-desc">${e.description}</span>`:""}
            </div>
            <div class="actions-container">
              <sl-button size="small" class="btn-select" @click=${()=>this.selectGroup(e)}>
                Zarządzaj <sl-icon slot="suffix" name="arrow-right"></sl-icon>
              </sl-button>
            </div>
          </div>
        `)}
      </div>
    `}renderManagementView(){return L`
      <div class="header-actions">
        <sl-button class="btn-back" @click=${this.clearSelection}>
          <sl-icon slot="prefix" name="arrow-left"></sl-icon> Wróć
        </sl-button>
        <h2>Panel Grupy: ${this.selectedGroup.name}</h2>
      </div>

      <div class="admin-container">
        <sl-tab-group>
          <sl-tab slot="nav" panel="info">
            <sl-icon name="pencil-square" style="margin-right: 8px;"></sl-icon> Informacje o grupie
          </sl-tab>
          <sl-tab slot="nav" panel="events">
            <sl-icon name="calendar-event" style="margin-right: 8px;"></sl-icon> Wydarzenia
          </sl-tab>

          <sl-tab-panel name="info">
            <form>
              <sl-input label="Nazwa grupy" .value=${this.selectedGroup.name} @sl-input=${e=>this.selectedGroup.name=e.target.value}></sl-input>
              <sl-textarea label="Opis grupy" rows="4" .value=${this.selectedGroup.description||""} @sl-input=${e=>this.selectedGroup.description=e.target.value}></sl-textarea>
              <sl-button class="btn-submit" style="align-self: flex-start; margin-top: 15px;" ?loading=${this.isSubmitting} @click=${this.saveGroupData}>
                <sl-icon slot="prefix" name="check2-circle"></sl-icon> Zapisz zmiany w profilu
              </sl-button>
            </form>
          </sl-tab-panel>

          <sl-tab-panel name="events">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
              <h3 style="margin: 0; color: var(--color-wood-dark);">Wydarzenia grupy</h3>
              <sl-button class="btn-submit" @click=${this.openAddEventDialog}>
                <sl-icon slot="prefix" name="plus-lg"></sl-icon> Dodaj wydarzenie
              </sl-button>
            </div>

            ${this.groupEvents.length===0?L`<p style="color: var(--color-wood-dark);">Brak zaplanowanych wydarzeń dla tej grupy.</p>`:L`
                <div style="display: flex; flex-direction: column;">
                  ${this.groupEvents.map(e=>L`
                    <div class="event-item">
                      <div>
                        <strong style="font-size: 1.1rem;">${e.title}</strong><br>
                        <span style="font-size: 0.9em; opacity: 0.8;">
                          <sl-icon name="clock" style="margin-right: 4px;"></sl-icon>
                          ${new Date(e.startTime).toLocaleString("pl-PL",{dateStyle:"medium",timeStyle:"short"})}
                        </span>
                        ${e.location?L`<br><span style="font-size: 0.85em; opacity: 0.7;"><sl-icon name="geo-alt"></sl-icon> ${e.location}</span>`:""}
                      </div>
                      <div class="event-actions">
                        <sl-button size="small" class="btn-edit" @click=${()=>this.openEditEventDialog(e)}>
                          <sl-icon slot="prefix" name="pencil"></sl-icon> Edytuj
                        </sl-button>
                        <sl-button size="small" class="btn-delete" @click=${()=>this.deleteEvent(e.id)}>
                          <sl-icon slot="prefix" name="trash"></sl-icon>
                        </sl-button>
                      </div>
                    </div>
                  `)}
                </div>
              `}
          </sl-tab-panel>
        </sl-tab-group>
      </div>

      <sl-dialog id="event-dialog" label="${this.editingEvent?.id?"Edytuj Wydarzenie":"Dodaj Nowe Wydarzenie"}">
        <form>
          <sl-input label="Tytuł" required .value=${this.editingEvent?.title||""} @sl-input=${e=>this.editingEvent.title=e.target.value}></sl-input>
          <sl-input type="datetime-local" label="Data i godzina" required .value=${this.editingEvent?.startTime?this.editingEvent.startTime.substring(0,16):""} @sl-input=${e=>this.editingEvent.startTime=e.target.value}></sl-input>
          <sl-input label="Lokalizacja (opcjonalnie)" .value=${this.editingEvent?.location||""} @sl-input=${e=>this.editingEvent.location=e.target.value}></sl-input>
          <sl-textarea label="Opis" rows="3" .value=${this.editingEvent?.description||""} @sl-input=${e=>this.editingEvent.description=e.target.value}></sl-textarea>
        </form>
        <sl-button slot="footer" class="btn-submit" ?loading=${this.isEventSubmitting} @click=${this.saveEvent}>
          <sl-icon slot="prefix" name="check2-circle"></sl-icon> Zapisz Wydarzenie
        </sl-button>
      </sl-dialog>
    `}render(){return L`
      <div class="top-bar">
        <sl-button
          class="logout-btn"
          size="small"
          ?loading="${this.loggingOut}"
          @click="${this.handleLogout}">
          <sl-icon slot="prefix" name="box-arrow-right"></sl-icon>
          Wyloguj się
        </sl-button>
      </div>

      ${this.selectedGroup?this.renderManagementView():this.renderSelectionView()}
    `}};fr.styles=[He,fe`
      :host {
        display: block;
        padding: 10px;
        max-width: 900px;
        width: 100%;
        margin: 0 auto;
        box-sizing: border-box;
      }

      .top-bar {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 10px;
      }

      sl-button.logout-btn::part(base) {
        background-color: var(--color-wood-dark);
        border-color: var(--color-wood-dark);
        color: var(--color-sand-light) !important;
        font-weight: 600;
        border-radius: 8px;
        transition: filter 0.2s;
      }
      sl-button.logout-btn::part(label), sl-button.logout-btn::part(prefix) {
        color: var(--color-sand-light) !important;
      }
      sl-button.logout-btn::part(base):hover {
        filter: brightness(1.2);
      }

      .header-title { color: var(--color-wood-dark); margin-bottom: 5px; }
      .header-subtitle { color: var(--color-wood-dark); opacity: 0.8; margin-top: 0; margin-bottom: 25px; }
      .list-container { display: flex; flex-direction: column; gap: 15px; }
      .list-item { display: flex; align-items: center; background-color: var(--color-sand-light); border: 2px solid var(--color-wood-medium); border-radius: 12px; padding: 15px 20px; transition: background-color 0.2s ease, border-color 0.2s ease; }
      .logo-container { margin-right: 20px; }
      .content-container { flex: 1; display: flex; flex-direction: column; }
      .entity-name { font-weight: bold; font-size: 1.15rem; color: var(--color-wood-dark); }
      .entity-desc { font-size: 0.9rem; color: var(--color-wood-dark); opacity: 0.8; margin-top: 6px; display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical; overflow: hidden; }
      .actions-container { display: flex; gap: 10px; margin-left: 15px; }
      .btn-select::part(base) { background-color: #d97706; border-color: #d97706; }
      .btn-select::part(base):hover { background-color: #db6104; border-color: #db6104; }
      .btn-select::part(label), .btn-select::part(suffix) { color: var(--color-sand-light) !important; }
      .header-actions { display: flex; align-items: center; gap: 15px; margin-bottom: 25px; }
      .header-actions h2 { margin: 0; color: var(--color-wood-dark); }
      .admin-container { background-color: var(--color-sand-light); border: 2px solid var(--color-wood-medium); border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(127, 69, 29, 0.1); }
      sl-tab-group::part(nav) { background-color: var(--color-cookie-medium); border-bottom: 2px solid var(--color-wood-medium); }
      sl-tab::part(base) { color: var(--color-wood-dark); font-weight: 500; padding: 15px 20px; transition: background-color 0.2s; }
      sl-tab[active]::part(base) { font-weight: bold; border-bottom-color: var(--color-wood-dark); color: var(--color-wood-dark); background-color: var(--color-sand-light); }
      sl-tab-panel::part(base) { padding: 25px 20px; }
      form { display: flex; flex-direction: column; gap: 15px; }
      sl-input, sl-textarea {
        --sl-input-color: var(--color-wood-dark);
        --sl-input-color-hover: var(--color-wood-dark);
        --sl-input-color-focus: var(--color-wood-dark);
        --sl-input-label-color: var(--color-wood-dark);
        --sl-input-border-color: var(--color-wood-medium);
        --sl-input-border-color-hover: var(--color-wood-dark);
        --sl-input-border-color-focus: var(--color-wood-dark);
      }
      sl-input::part(base), sl-textarea::part(base) {
        background-color: var(--color-sand-light) !important;
        transition: box-shadow 0.2s ease;
      }
      sl-input::part(base):focus-within, sl-textarea::part(base):focus-within {
        box-shadow: 0 0 0 3px rgba(127, 69, 29, 0.2) !important;
      }
      sl-input::part(input), sl-textarea::part(textarea) {
        color: var(--color-wood-dark) !important;
      }
      sl-input::part(input):hover, sl-input::part(input):focus,
      sl-textarea::part(textarea):hover, sl-textarea::part(textarea):focus {
        color: var(--color-wood-dark) !important;
      }
      .btn-back::part(base) { background-color: var(--color-wood-dark); border-color: var(--color-wood-dark); border-radius: 8px; transition: all 0.2s ease; }
      .btn-back::part(base):hover { background-color: var(--color-wood-medium); border-color: var(--color-wood-medium); transform: translateY(-2px); box-shadow: 0 4px 12px rgba(127, 69, 29, 0.25); }
      .btn-back::part(label), .btn-back::part(prefix) { color: var(--color-sand-light) !important; }
      .btn-submit::part(base) { background-color: var(--color-wood-dark); border-color: var(--color-wood-dark); border-radius: 8px; transition: all 0.2s ease; padding: 0 10px; }
      .btn-submit::part(base):hover { background-color: var(--color-wood-medium); border-color: var(--color-wood-medium); transform: translateY(-2px); box-shadow: 0 4px 12px rgba(127, 69, 29, 0.25); }
      .btn-submit::part(label), .btn-submit::part(prefix) { color: var(--color-sand-light) !important; }
      sl-dialog { --sl-panel-background-color: var(--color-sand-light); }
      sl-dialog::part(title) { color: var(--color-wood-dark); font-weight: bold; }
      .event-item { padding: 15px; border: 1px solid var(--color-wood-medium); border-radius: 8px; margin-bottom: 10px; display: flex; justify-content: space-between; align-items: center; color: var(--color-wood-dark); background-color: var(--color-sand-light); }
      .event-actions { display: flex; gap: 8px; }
      .btn-edit::part(base) { background-color: #d97706; border-color: #d97706; }
      .btn-edit::part(base):hover { background-color: #db6104; border-color: #db6104; }
      .btn-edit::part(label), .btn-edit::part(prefix) { color: var(--color-sand-light) !important; }
      .btn-delete::part(base) { background-color: rgba(220, 38, 38, 0.8); border-color: transparent; }
      .btn-delete::part(base):hover { background-color: rgba(220, 38, 38, 1); }
      .btn-delete::part(label), .btn-delete::part(prefix) { color: var(--color-sand-light) !important; }
    `];Vr([J()],fr.prototype,"groups",2);Vr([J()],fr.prototype,"selectedGroup",2);Vr([J()],fr.prototype,"groupEvents",2);Vr([J()],fr.prototype,"isSubmitting",2);Vr([J()],fr.prototype,"editingEvent",2);Vr([J()],fr.prototype,"isEventSubmitting",2);Vr([J()],fr.prototype,"loggingOut",2);Vr([xe("#event-dialog")],fr.prototype,"eventDialog",2);fr=Vr([Ve("app-group-admin")],fr);var lk=Object.defineProperty,ck=Object.getOwnPropertyDescriptor,ua=(e,t,r,a)=>{for(var i=a>1?void 0:a?ck(t,r):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(i=(a?o(t,r,i):o(i))||i);return a&&i&&lk(t,r,i),i};let kr=class extends Le{constructor(){super(...arguments),this.loginValue="",this.passwordValue="",this.newPasswordValue="",this.confirmPasswordValue="",this.loading=!1,this.errorMessage="",this.isChangingPassword=!1}connectedCallback(){super.connectedCallback(),this.dispatchEvent(new CustomEvent("change-title",{detail:{title:"Logowanie Administratora"},bubbles:!0,composed:!0}))}toggleMode(){this.isChangingPassword=!this.isChangingPassword,this.errorMessage="",this.passwordValue="",this.newPasswordValue="",this.confirmPasswordValue=""}async handleSubmit(e){e.preventDefault(),this.errorMessage="",this.loading=!0;try{if(this.isChangingPassword){if(this.newPasswordValue!==this.confirmPasswordValue){this.errorMessage="Nowe hasła nie są identyczne!",this.loading=!1;return}const t=await ve("/admin/change-password",{method:"POST",body:JSON.stringify({login:this.loginValue,currentPassword:this.passwordValue,newPassword:this.newPasswordValue})}),r=await t.json();t.ok?this.handleSuccessLogin(r):this.errorMessage=r.error||"Błąd zmiany hasła."}else{const t=await ve("/admin/login",{method:"POST",body:JSON.stringify({login:this.loginValue,password:this.passwordValue})}),r=await t.json();t.ok?this.handleSuccessLogin(r):this.errorMessage=r.error||"Błędny login lub hasło."}}catch{this.errorMessage="Brak połączenia z serwerem."}finally{this.loading=!1}}handleSuccessLogin(e){localStorage.setItem("isAdmin","true"),e.isSuperAdmin?localStorage.setItem("isSuperAdmin","true"):localStorage.removeItem("isSuperAdmin"),e.allowedGroupIds&&localStorage.setItem("allowedGroups",JSON.stringify(e.allowedGroupIds));const a="/mParafia/"+"/admin".substring(1);window.location.href=a}render(){return L`
      <div class="admin-container">
        <h2>
          <sl-icon name="${this.isChangingPassword?"key-fill":"shield-lock-fill"}"></sl-icon>
          ${this.isChangingPassword?"Zmiana Hasła":"Dostęp Zastrzeżony"}
        </h2>

        ${this.errorMessage?L`<sl-alert variant="danger" open><sl-icon slot="icon" name="exclamation-octagon"></sl-icon><strong>Błąd</strong><br />${this.errorMessage}</sl-alert>`:""}

        <form class="login-form" @submit="${this.handleSubmit}">

          <sl-input
            label="Login"
            placeholder="np. szefowa"
            autocomplete="off"
            required
            .value="${this.loginValue}"
            @sl-input="${e=>this.loginValue=e.target.value}">
            <sl-icon slot="prefix" name="person-fill"></sl-icon>
          </sl-input>

          <sl-input
            label="${this.isChangingPassword?"Aktualne hasło":"Hasło"}"
            type="password"
            password-toggle
            autocomplete="off"
            required
            .value="${this.passwordValue}"
            @sl-input="${e=>this.passwordValue=e.target.value}">
            <sl-icon slot="prefix" name="key-fill"></sl-icon>
          </sl-input>

          ${this.isChangingPassword?L`
            <sl-input
              label="Nowe hasło"
              type="password"
              password-toggle
              autocomplete="new-password"
              required
              .value="${this.newPasswordValue}"
              @sl-input="${e=>this.newPasswordValue=e.target.value}">
              <sl-icon slot="prefix" name="shield-lock"></sl-icon>
            </sl-input>

            <sl-input
              label="Powtórz nowe hasło"
              type="password"
              password-toggle
              autocomplete="new-password"
              required
              .value="${this.confirmPasswordValue}"
              @sl-input="${e=>this.confirmPasswordValue=e.target.value}">
              <sl-icon slot="prefix" name="check2-circle"></sl-icon>
            </sl-input>
          `:""}

          <sl-button type="submit" variant="primary" size="large" ?loading="${this.loading}" style="margin-top: 10px;">
            ${this.isChangingPassword?"Zmień hasło i zaloguj się":"Zaloguj się"}
          </sl-button>
        </form>

        <div class="toggle-link" @click="${this.toggleMode}">
          ${this.isChangingPassword?"Anuluj zmianę hasła i wróć do logowania":"Zmień swoje hasło"}
        </div>

      </div>
    `}};kr.styles=[He,fe`
      :host { display: flex; justify-content: center; align-items: center; padding: 20px; min-height: 60vh; }
      .admin-container { background-color: var(--color-sand-light); border: 2px solid var(--color-wood-medium); border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(127, 69, 29, 0.1); padding: 30px; width: 100%; max-width: 420px; display: flex; flex-direction: column; gap: 20px; }
      h2 { color: var(--color-wood-dark); margin: 0; text-align: center; font-size: 1.6rem; display: flex; align-items: center; justify-content: center; gap: 10px; }
      .login-form { display: flex; flex-direction: column; gap: 15px; }

      /* Styl przycisków */
      sl-button::part(base) { background-color: var(--color-wood-dark); border-color: var(--color-wood-dark); color: var(--color-sand-light); font-weight: bold; transition: filter 0.2s; }
      sl-button::part(base):hover { filter: brightness(1.2); }

      .toggle-link {
        color: var(--color-wood-dark);
        text-align: center;
        font-size: 0.9rem;
        cursor: pointer;
        text-decoration: underline;
        margin-top: 5px;
        font-weight: 500;
      }
      .toggle-link:hover { color: #b91c1c; } /* Lekko czerwony przy najechaniu dla wyróżnienia */

      /* Styl pól input - pancerne wymuszenie piaskowych kolorów */
      sl-input {
        --sl-input-background-color: var(--color-sand-light);
        --sl-input-color: var(--color-wood-dark);
        --sl-input-label-color: var(--color-wood-dark);
        --sl-input-border-color: var(--color-wood-medium);
        --sl-input-spacing-small: 0;
      }

      sl-input::part(base) {
        background-color: var(--color-sand-light) !important;
        border-color: var(--color-wood-medium) !important;
        padding: 0 !important;
      }

      sl-input::part(input) {
        background-color: var(--color-sand-light) !important;
        color: var(--color-wood-dark) !important;
        padding-left: 10px !important;
        margin: 0 !important;
        border: none !important;
      }

      /* Blokada autouzupełniania */
      sl-input::part(input):-webkit-autofill,
      sl-input::part(input):-webkit-autofill:hover,
      sl-input::part(input):-webkit-autofill:focus {
        background-color: var(--color-sand-light) !important;
        -webkit-box-shadow: 0 0 0 1000px var(--color-sand-light) inset !important;
        -webkit-text-fill-color: var(--color-wood-dark) !important;
        transition: background-color 5000s ease-in-out 0s;
      }
    `];ua([J()],kr.prototype,"loginValue",2);ua([J()],kr.prototype,"passwordValue",2);ua([J()],kr.prototype,"newPasswordValue",2);ua([J()],kr.prototype,"confirmPasswordValue",2);ua([J()],kr.prototype,"loading",2);ua([J()],kr.prototype,"errorMessage",2);ua([J()],kr.prototype,"isChangingPassword",2);kr=ua([Ve("app-admin-login")],kr);var dk=fe`
  :host {
    display: inline-block;
  }

  .checkbox {
    position: relative;
    display: inline-flex;
    align-items: flex-start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .checkbox--small {
    --toggle-size: var(--sl-toggle-size-small);
    font-size: var(--sl-input-font-size-small);
  }

  .checkbox--medium {
    --toggle-size: var(--sl-toggle-size-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .checkbox--large {
    --toggle-size: var(--sl-toggle-size-large);
    font-size: var(--sl-input-font-size-large);
  }

  .checkbox__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 2px;
    background-color: var(--sl-input-background-color);
    color: var(--sl-color-neutral-0);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
  }

  .checkbox__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  .checkbox__checked-icon,
  .checkbox__indeterminate-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  /* Hover */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Focus */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked/indeterminate */
  .checkbox--checked .checkbox__control,
  .checkbox--indeterminate .checkbox__control {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked/indeterminate + hover */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__control:hover,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked/indeterminate + focus */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .checkbox--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .checkbox__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .checkbox__label::after {
    content: var(--sl-input-required-content);
    color: var(--sl-input-required-content-color);
    margin-inline-start: var(--sl-input-required-content-offset);
  }
`,gt=class extends Be{constructor(){super(...arguments),this.formControlController=new oi(this,{value:e=>e.checked?e.value||"on":void 0,defaultValue:e=>e.defaultChecked,setValue:(e,t)=>e.checked=t}),this.hasSlotController=new Mr(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.indeterminate=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleClick(){this.checked=!this.checked,this.indeterminate=!1,this.emit("sl-change")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStateChange(){this.input.checked=this.checked,this.input.indeterminate=this.indeterminate,this.formControlController.updateValidity()}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("help-text"),t=this.helpText?!0:!!e;return L`
      <div
        class=${Ne({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-help-text":t})}
      >
        <label
          part="base"
          class=${Ne({checkbox:!0,"checkbox--checked":this.checked,"checkbox--disabled":this.disabled,"checkbox--focused":this.hasFocus,"checkbox--indeterminate":this.indeterminate,"checkbox--small":this.size==="small","checkbox--medium":this.size==="medium","checkbox--large":this.size==="large"})}
        >
          <input
            class="checkbox__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${ge(this.value)}
            .indeterminate=${Yi(this.indeterminate)}
            .checked=${Yi(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            aria-checked=${this.checked?"true":"false"}
            aria-describedby="help-text"
            @click=${this.handleClick}
            @input=${this.handleInput}
            @invalid=${this.handleInvalid}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
          />

          <span
            part="control${this.checked?" control--checked":""}${this.indeterminate?" control--indeterminate":""}"
            class="checkbox__control"
          >
            ${this.checked?L`
                  <sl-icon part="checked-icon" class="checkbox__checked-icon" library="system" name="check"></sl-icon>
                `:""}
            ${!this.checked&&this.indeterminate?L`
                  <sl-icon
                    part="indeterminate-icon"
                    class="checkbox__indeterminate-icon"
                    library="system"
                    name="indeterminate"
                  ></sl-icon>
                `:""}
          </span>

          <div part="label" class="checkbox__label">
            <slot></slot>
          </div>
        </label>

        <div
          aria-hidden=${t?"false":"true"}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};gt.styles=[Xe,hn,dk];gt.dependencies={"sl-icon":St};_([xe('input[type="checkbox"]')],gt.prototype,"input",2);_([J()],gt.prototype,"hasFocus",2);_([P()],gt.prototype,"title",2);_([P()],gt.prototype,"name",2);_([P()],gt.prototype,"value",2);_([P({reflect:!0})],gt.prototype,"size",2);_([P({type:Boolean,reflect:!0})],gt.prototype,"disabled",2);_([P({type:Boolean,reflect:!0})],gt.prototype,"checked",2);_([P({type:Boolean,reflect:!0})],gt.prototype,"indeterminate",2);_([wo("checked")],gt.prototype,"defaultChecked",2);_([P({reflect:!0})],gt.prototype,"form",2);_([P({type:Boolean,reflect:!0})],gt.prototype,"required",2);_([P({attribute:"help-text"})],gt.prototype,"helpText",2);_([Re("disabled",{waitUntilFirstUpdate:!0})],gt.prototype,"handleDisabledChange",1);_([Re(["checked","indeterminate"],{waitUntilFirstUpdate:!0})],gt.prototype,"handleStateChange",1);gt.define("sl-checkbox");var uk=Object.defineProperty,hk=Object.getOwnPropertyDescriptor,Sn=(e,t,r,a)=>{for(var i=a>1?void 0:a?hk(t,r):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(i=(a?o(t,r,i):o(i))||i);return a&&i&&uk(t,r,i),i};let Ra=class extends Le{constructor(){super(...arguments),this.groups=[],this.myGroups=[],this.firstDayOfWeek=localStorage.getItem("firstDay")||"monday",this.isDarkMode=!1}connectedCallback(){super.connectedCallback(),this.dispatchEvent(new CustomEvent("change-title",{detail:{title:"Ustawienia Aplikacji"},bubbles:!0,composed:!0})),this.loadSettings()}async loadSettings(){try{const t=await ve("/groups");t.ok&&(this.groups=await t.json())}catch(t){console.error("Błąd pobierania grup w ustawieniach:",t)}const e=localStorage.getItem("myGroups");this.myGroups=e?JSON.parse(e).map(Number):[]}toggleGroup(e){const t=Number(e);this.myGroups.includes(t)?this.myGroups=this.myGroups.filter(r=>r!==t):this.myGroups=[...this.myGroups,t],localStorage.setItem("myGroups",JSON.stringify(this.myGroups)),window.dispatchEvent(new Event("settings-changed"))}updateFirstDay(e){this.firstDayOfWeek=e,localStorage.setItem("firstDay",this.firstDayOfWeek),window.dispatchEvent(new Event("settings-changed"))}handleDarkModeToggle(e){this.isDarkMode=e.target.checked}render(){return this.isDarkMode?L`
        <div class="dark-mode-overlay">
          Odpowiedział im więc Jezus: «Jeszcze przez krótki czas przebywa wśród was światłość. </br>
          Chodźcie, dopóki macie światłość, aby was ciemność nie ogarnęła. </br>
          A kto chodzi w ciemności, nie wie, dokąd idzie. </br>
          Dopóki światłość macie, wierzcie w światłość, abyście byli synami światłości». </br>
          To powiedział Jezus i odszedł, i ukrył się przed nimi. </br>
          J 12, 35-36
          <h2>Ciemny motyw nie istnieje i nie będzie istniał, bo te kolorki w jasnym są za ładne! 😊</h2>
          <sl-button size="large" @click=${()=>this.isDarkMode=!1}>
            Wróć na jasną stronę mocy
          </sl-button>
        </div>
      `:L`

      <div class="section">
        <h3>Pierwszy dzień tygodnia w kalendarzu</h3>
        <div class="view-controls">
          <sl-button-group>
            <sl-button
              variant=${this.firstDayOfWeek==="monday"?"primary":"default"}
              @click=${()=>this.updateFirstDay("monday")}>
              Poniedziałek
            </sl-button>
            <sl-button
              variant=${this.firstDayOfWeek==="sunday"?"primary":"default"}
              @click=${()=>this.updateFirstDay("sunday")}>
              Niedziela
            </sl-button>
          </sl-button-group>
        </div>
      </div>

      <div class="section">
        <h3>Moje grupy (do filtrowania wydarzeń)</h3>
        ${this.groups.length===0?L`<p>Ładowanie grup...</p>`:this.groups.map(e=>L`
          <sl-checkbox
            ?checked=${this.myGroups.includes(Number(e.id))}
            @sl-change=${()=>this.toggleGroup(e.id)}
            style="display: flex; width: fit-content; margin-bottom: 12px; font-size: 1.05rem;">
            ${e.name}
          </sl-checkbox>
        `)}
      </div>

      <div class="section">
        <h3>Wygląd aplikacji</h3>
        <sl-switch .checked=${this.isDarkMode} @sl-change=${this.handleDarkModeToggle}>Ciemny motyw</sl-switch>
      </div>

      <sl-button variant="primary" class="btn-login" href="/mParafia/admin">
        <sl-icon slot="prefix" name="box-arrow-in-right"></sl-icon>
        Panel Administratora
      </sl-button>
    `}};Ra.styles=[He,fe`
      :host {
        display: block;
        padding: 10px;
        max-width: 900px;
        width: 100%;
        margin: 0 auto;
        box-sizing: border-box;
        color: var(--color-wood-dark);
      }
      .section {
        background: var(--color-sand-light);
        padding: 25px;
        border-radius: 12px;
        border: 2px solid var(--color-wood-medium);
        margin-bottom: 20px;
        box-shadow: 0 4px 15px rgba(127, 69, 29, 0.05);
      }
      h3 {
        margin-top: 0;
        margin-bottom: 15px;
        color: var(--color-wood-dark);
      }

      /* ========================================== */
      /* === STYLE DLA TROLL-SCREEN (Dark Mode) === */
      /* ========================================== */
      .dark-mode-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: #2d2d2d;
        color: var(--color-sand-light) !important; /* Wszystkie napisy w kolorze sand */
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        z-index: 9999;
        padding: 20px;
      }

      .dark-mode-overlay h2 {
        font-size: 1.8rem;
        margin-bottom: 30px;
        max-width: 600px;
        line-height: 1.4;
        color: var(--color-sand-light) !important;
      }

      /* Przycisk: tło sand, czcionka dark-wood */
      .dark-mode-overlay sl-button::part(base) {
        background-color: var(--color-sand-light) !important;
        border-color: var(--color-sand-light) !important;
        color: var(--color-wood-dark) !important;
        font-weight: bold;
        border-radius: 25px;
        transition: transform 0.2s ease, background-color 0.2s ease;
      }
      .dark-mode-overlay sl-button::part(label) {
        color: var(--color-wood-dark) !important;
      }
      .dark-mode-overlay sl-button::part(base):hover {
        background-color: var(--color-cookie-medium) !important;
        border-color: var(--color-cookie-medium) !important;
      }

      /* ========================================= */
      /* === STYLE SUWAKA IDENTYCZNE Z KALENDARZEM === */
      /* ========================================= */
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
        font-size: 1rem;
        font-weight: 500;
        margin-left: 8px;
        transition: font-weight 0.1s ease !important;
      }
      sl-switch[checked]::part(label) {
        font-weight: 550;
      }

      /* STYLE DLA KWADRACIKÓW WYBORU */
      sl-checkbox::part(control) {
        background-color: transparent !important;
        border: 2px solid var(--color-wood-dark) !important;
        border-radius: 6px;
        transition: background-color 0.2s ease, border-color 0.2s ease;
      }
      sl-checkbox:not([checked]):hover::part(control) {
        background-color: var(--color-wood-medium) !important;
        border-color: var(--color-wood-medium) !important;
      }
      sl-checkbox[checked]::part(control) {
        background-color: var(--color-wood-dark) !important;
        border-color: var(--color-wood-dark) !important;
      }
      sl-checkbox[checked]:hover::part(control) {
        background-color: var(--color-wood-medium) !important;
        border-color: var(--color-wood-medium) !important;
      }
      sl-checkbox::part(checked-icon) {
        color: var(--color-sand-light) !important;
      }
      sl-checkbox::part(label) {
        color: var(--color-wood-dark);
        user-select: none;
      }

      /* STYLE PRZYCISKÓW Z KALENDARZA */
      .view-controls { display: flex; justify-content: flex-start; margin-top: 15px; }
      sl-button-group sl-button[variant="default"]::part(base) { color: var(--color-wood-medium); border-color: var(--color-wood-medium); background-color: transparent; }
      sl-button-group sl-button[variant="default"]::part(base):hover { background-color: rgba(193, 135, 86, 0.1); }
      sl-button-group sl-button[variant="primary"]::part(base) { background-color: var(--color-wood-dark); border-color: var(--color-wood-dark); color: var(--color-sand-light); }

      .btn-login::part(base) {
        background-color: var(--color-wood-dark);
        border-color: var(--color-wood-dark);
        color: var(--color-sand-light);
        font-weight: 600;
        transition: all 0.3s ease;
        margin-left: 5px
      }

      .btn-login::part(base):hover {
        background-color: var(--color-wood-medium);
        border-color: var(--color-wood-medium);
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      }

      .btn-login::part(base):active {
        transform: translateY(0);
      }

      `];Sn([J()],Ra.prototype,"groups",2);Sn([J()],Ra.prototype,"myGroups",2);Sn([J()],Ra.prototype,"firstDayOfWeek",2);Sn([J()],Ra.prototype,"isDarkMode",2);Ra=Sn([Ve("app-settings")],Ra);var fk=Object.defineProperty,pk=Object.getOwnPropertyDescriptor,yl=(e,t,r,a)=>{for(var i=a>1?void 0:a?pk(t,r):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(i=(a?o(t,r,i):o(i))||i);return a&&i&&fk(t,r,i),i};let cn=class extends Le{constructor(){super(...arguments),this.item=null,this.isLoading=!0}async firstUpdated(){const t=new URLSearchParams(window.location.search).get("id");if(t)try{const r=await ve("/kancelaria");if(r.ok){const a=await r.json();this.item=a.find(i=>i.id===parseInt(t,10)),this.item&&this.dispatchEvent(new CustomEvent("change-title",{detail:{title:this.item.title},bubbles:!0,composed:!0}))}}catch(r){console.error("Błąd pobierania danych kancelarii:",r)}this.isLoading=!1}goBack(){window.history.back()}render(){if(this.isLoading)return L`<div class="center-content"><sl-spinner style="font-size: 2.5rem;"></sl-spinner></div>`;if(!this.item)return L`
      <div class="header-actions"><sl-button class="btn-back" @click=${this.goBack}><sl-icon slot="prefix" name="arrow-left"></sl-icon> Wróć</sl-button></div>
      <div class="paper center-content"><h3 style="color: var(--color-wood-dark);">Nie znaleziono takiej sprawy.</h3></div>
    `;const e=this.item.files&&Array.isArray(this.item.files)?this.item.files:[];return L`
      <div class="header-actions">
        <sl-button class="btn-back" @click=${this.goBack}><sl-icon slot="prefix" name="arrow-left"></sl-icon> Kancelaria</sl-button>
      </div>

      <div class="paper">
        <div class="icon-header">
          ${this.item.photoUrl?L`<img src="${this.item.photoUrl}">`:""}
          <h3>${this.item.title}</h3>
        </div>
        <sl-divider style="--color: var(--color-wood-medium); margin-bottom: 20px;"></sl-divider>

        <div class="content-body">${rd(this.item.content)}</div>

        ${e.length>0?L`
          <div class="files-container">
            <h4 style="margin: 0 0 5px 0; color: var(--color-wood-dark);">Pliki do pobrania:</h4>
            ${e.map(t=>L`
              <div class="file-download-box">
                <div class="file-info">
                  <sl-icon name="file-earmark-pdf" style="font-size: 1.8rem;"></sl-icon>
                  <span>${t.name}</span>
                </div>
                <a class="btn-download-link" href="${t.url}" download="${t.name}" target="_blank">
                  Pobierz plik
                </a>
              </div>
            `)}
          </div>
        `:""}

        ${this.item.footer?L`<div class="footer-note">${this.item.footer}</div>`:""}
      </div>
    `}};cn.styles=[He,fe`
      :host { display: block; padding: 10px; width: 100%; max-width: 900px; margin: 0 auto; box-sizing: border-box; }

      .header-actions { display: flex; align-items: center; gap: 15px; margin-bottom: 25px; }
      .header-actions h2 { margin: 0; color: var(--color-wood-dark); font-size: 1.5rem; }

      .btn-back::part(base) {
        background-color: var(--color-wood-dark);
        border-color: var(--color-wood-dark);
        border-radius: 8px;
        transition: background-color 0.2s ease;
      }
      .btn-back::part(base):hover {
        background-color: var(--color-wood-medium);
        border-color: var(--color-wood-medium);
      }
      .btn-back::part(label), .btn-back::part(prefix) { color: var(--color-sand-light) !important; }

      .paper {
        background-color: var(--color-sand-light);
        border: 2px solid var(--color-wood-medium);
        border-radius: 12px;
        padding: 30px;
        box-shadow: 0 4px 15px rgba(127, 69, 29, 0.05);
      }

      .icon-header { display: flex; align-items: center; gap: 15px; margin-bottom: 20px; color: var(--color-wood-dark); }
      .icon-header img { width: 60px; height: 60px; border-radius: 50%; object-fit: cover; border: 2px solid var(--color-wood-dark); }
      .icon-header h3 { margin: 0; font-size: 1.6rem; }

      .content-body {
        color: var(--color-wood-dark);
        line-height: 1.6;
        font-size: 1.05rem;
        text-align: justify;
        white-space: pre-wrap;
      }
      .content-body ul { padding-left: 20px; text-align: left; }
      .content-body li { margin-bottom: 8px; }

      /* Kontener na wiele plików */
      .files-container { display: flex; flex-direction: column; gap: 10px; margin-top: 30px; }

      .file-download-box {
        background-color: var(--color-cookie-medium);
        border: 2px dashed var(--color-wood-medium);
        border-radius: 8px;
        padding: 15px 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .file-info { display: flex; align-items: center; gap: 10px; color: var(--color-wood-dark); font-weight: bold; }

      .btn-download-link {
        background-color: var(--color-wood-dark);
        border: 2px solid var(--color-wood-dark);
        color: var(--color-sand-light);
        border-radius: 8px;
        padding: 10px 20px;
        font-weight: bold;
        text-decoration: none;
        font-size: 0.95rem;
        transition: all 0.2s ease;
        display: inline-block;
      }
      .btn-download-link:hover {
        background-color: var(--color-wood-medium);
        border-color: var(--color-wood-medium);
        transform: translateY(-1px);
        box-shadow: 0 4px 10px rgba(127, 69, 29, 0.15);
      }

      .footer-note { font-size: 0.95rem; font-style: italic; margin-top: 30px; opacity: 0.9; color: var(--color-wood-dark); text-align: center; }
      .center-content { display: flex; justify-content: center; padding: 50px; }
    `];yl([J()],cn.prototype,"item",2);yl([J()],cn.prototype,"isLoading",2);cn=yl([Ve("app-kancelaria-detail")],cn);var gk=Object.defineProperty,mk=Object.getOwnPropertyDescriptor,_l=(e,t,r,a)=>{for(var i=a>1?void 0:a?mk(t,r):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(i=(a?o(t,r,i):o(i))||i);return a&&i&&gk(t,r,i),i};const vk="/mParafia/";es(`${vk}shoelace-assets`);let dn=class extends Le{constructor(){super(...arguments),this.pageTitle="mParafia",this.touchStartX=0,this.touchStartY=0,this.touchEndX=0,this.touchEndY=0,this.handleTouchStart=e=>{this.touchStartX=e.changedTouches[0].screenX,this.touchStartY=e.changedTouches[0].screenY},this.handleTouchMove=e=>{this.touchStartX<=30&&e.preventDefault()},this.handleTouchEnd=e=>{this.touchEndX=e.changedTouches[0].screenX,this.touchEndY=e.changedTouches[0].screenY,this.checkSwipe()}}connectedCallback(){super.connectedCallback(),window.addEventListener("touchstart",this.handleTouchStart,{passive:!0}),window.addEventListener("touchmove",this.handleTouchMove,{passive:!1}),window.addEventListener("touchend",this.handleTouchEnd,{passive:!0})}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("touchstart",this.handleTouchStart),window.removeEventListener("touchmove",this.handleTouchMove),window.removeEventListener("touchend",this.handleTouchEnd)}checkSwipe(){const e=this.touchEndX-this.touchStartX,t=this.touchEndY-this.touchStartY;if(Math.abs(t)>Math.abs(e))return;this.touchStartX<=40&&e>50&&this.drawer&&!this.drawer.open&&this.drawer.show(),this.drawer&&this.drawer.open&&e<-50&&this.drawer.hide()}firstUpdated(){const e=this.shadowRoot?.querySelector("#router-outlet"),t="/mParafia/",r=new ap(e,{baseUrl:t}),a=(n,o)=>{if(!(localStorage.getItem("isAdmin")==="true"))return o.redirect("/admin-login")},i=(n,o)=>{const s=localStorage.getItem("isAdmin")==="true",l=localStorage.getItem("isSuperAdmin")==="true";if(!s)return o.redirect("/admin-login");if(!l)return o.redirect("/group-admin")};r.setRoutes([{path:"/",component:"app-home"},{path:"/kalendarz",component:"app-calendar"},{path:"/grupy",component:"app-groups"},{path:"/wydarzenia",component:"app-events"},{path:"/mock-event",component:"app-event-mock-detail"},{path:"/wydarzenie",component:"app-event-detail"},{path:"/grupa",component:"app-group-detail"},{path:"/ogloszenia",component:"app-announcements"},{path:"/qa",component:"app-qa"},{path:"/nabozenstwa",component:"app-nabozenstwa"},{path:"/spowiedz",component:"app-spowiedz"},{path:"/kancelaria",component:"app-kancelaria"},{path:"/kancelaria-detale",component:"app-kancelaria-detail"},{path:"/dojazd",component:"app-dojazd"},{path:"/ustawienia",component:"app-settings"},{path:"/admin-login",component:"app-admin-login"},{path:"/admin(.*)",component:"app-admin",action:i},{path:"/group-admin",component:"app-group-admin",action:a},{path:"(.*)",redirect:"/"}])}handleTitleChange(e){this.pageTitle=e.detail.title}openMenu(){this.drawer.show()}handleNavigation(e){this.drawer.hide();const r="/mParafia/"+e.substring(1);window.history.pushState({},"",r),window.dispatchEvent(new PopStateEvent("popstate"))}render(){return L`
      <div class="app-layout">

        <sl-drawer label="Menu" placement="start">

          <div class="menu-links">
            <sl-button variant="text" size="large" @click="${()=>this.handleNavigation("/")}">
              <sl-icon slot="prefix" name="house-fill"></sl-icon> Strona Główna
            </sl-button>
            <sl-button variant="text" size="large" @click="${()=>this.handleNavigation("/ogloszenia")}">
              <sl-icon slot="prefix" name="megaphone-fill"></sl-icon> Ogłoszenia
            </sl-button>
            <sl-button variant="text" size="large" @click="${()=>this.handleNavigation("/nabozenstwa")}">
              <sl-icon slot="prefix" name="bell-fill"></sl-icon> Nabożeństwa
            </sl-button>
            <sl-button variant="text" size="large" @click="${()=>this.handleNavigation("/kalendarz")}">
              <sl-icon slot="prefix" name="calendar2-check-fill"></sl-icon> Kalendarz
            </sl-button>
            <sl-button variant="text" size="large" @click="${()=>this.handleNavigation("/wydarzenia")}">
              <sl-icon slot="prefix" name="star-fill"></sl-icon> Wydarzenia
            </sl-button>
            <sl-button variant="text" size="large" @click="${()=>this.handleNavigation("/grupy")}">
              <sl-icon slot="prefix" name="people-fill"></sl-icon> Grupy
            </sl-button>
            <sl-button variant="text" size="large" @click="${()=>this.handleNavigation("/spowiedz")}">
              <sl-icon slot="prefix" name="heart-fill"></sl-icon> Spowiedź
            </sl-button>
            <sl-button variant="text" size="large" @click="${()=>this.handleNavigation("/kancelaria")}">
              <sl-icon slot="prefix" name="person-heart"></sl-icon> Kancelaria
            </sl-button>
            <sl-button variant="text" size="large" @click="${()=>this.handleNavigation("/dojazd")}">
              <sl-icon slot="prefix" name="geo-alt-fill"></sl-icon> Dojazd
            </sl-button>
            <sl-button variant="text" size="large" @click="${()=>this.handleNavigation("/dokumenty")}">
              <sl-icon slot="prefix" name="file-earmark-text-fill"></sl-icon> Dokumenty
            </sl-button>
            <sl-button variant="text" size="large" @click="${()=>this.handleNavigation("/qa")}">
              <sl-icon slot="prefix" name="chat-quote-fill"></sl-icon> Pytania (Q&A)
            </sl-button>
          </div>

        </sl-drawer>

        <header>
          <sl-icon-button name="list" label="Menu" @click="${this.openMenu}"></sl-icon-button>
          <h1>${this.pageTitle}</h1>
          <sl-icon-button name="gear-fill" label="Ustawienia" @click="${()=>this.handleNavigation("/ustawienia")}"></sl-icon-button>
        </header>

        <main id="router-outlet" @change-title="${this.handleTitleChange}"> </main>

      </div>
    `}};dn.styles=[He,fe`
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
        justify-content: flex-start;
        text-align: left;
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
    `];_l([xe("sl-drawer")],dn.prototype,"drawer",2);_l([J()],dn.prototype,"pageTitle",2);dn=_l([Ve("app-index")],dn);
//# sourceMappingURL=index-RCeW7ykd.js.map
