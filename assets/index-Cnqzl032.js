(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function r(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(i){if(i.ep)return;i.ep=!0;const a=r(i);fetch(i.href,a)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const It=globalThis,be=It.ShadowRoot&&(It.ShadyCSS===void 0||It.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ge=Symbol(),Te=new WeakMap;let pr=class{constructor(t,r,o){if(this._$cssResult$=!0,o!==ge)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(be&&t===void 0){const o=r!==void 0&&r.length===1;o&&(t=Te.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&Te.set(r,t))}return t}toString(){return this.cssText}};const Gr=e=>new pr(typeof e=="string"?e:e+"",void 0,ge),x=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((o,i,a)=>o+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[a+1],e[0]);return new pr(r,e,ge)},Yr=(e,t)=>{if(be)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const o=document.createElement("style"),i=It.litNonce;i!==void 0&&o.setAttribute("nonce",i),o.textContent=r.cssText,e.appendChild(o)}},Re=be?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const o of t.cssRules)r+=o.cssText;return Gr(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Zr,defineProperty:Xr,getOwnPropertyDescriptor:Jr,getOwnPropertyNames:Qr,getOwnPropertySymbols:to,getPrototypeOf:eo}=Object,Jt=globalThis,Le=Jt.trustedTypes,ro=Le?Le.emptyScript:"",oo=Jt.reactiveElementPolyfillSupport,At=(e,t)=>e,ut={toAttribute(e,t){switch(t){case Boolean:e=e?ro:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},ve=(e,t)=>!Zr(e,t),Ue={attribute:!0,type:String,converter:ut,reflect:!1,useDefault:!1,hasChanged:ve};Symbol.metadata??=Symbol("metadata"),Jt.litPropertyMetadata??=new WeakMap;let ct=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,r=Ue){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(t,r),!r.noAccessor){const o=Symbol(),i=this.getPropertyDescriptor(t,o,r);i!==void 0&&Xr(this.prototype,t,i)}}static getPropertyDescriptor(t,r,o){const{get:i,set:a}=Jr(this.prototype,t)??{get(){return this[r]},set(n){this[r]=n}};return{get:i,set(n){const s=i?.call(this);a?.call(this,n),this.requestUpdate(t,s,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Ue}static _$Ei(){if(this.hasOwnProperty(At("elementProperties")))return;const t=eo(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(At("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(At("properties"))){const r=this.properties,o=[...Qr(r),...to(r)];for(const i of o)this.createProperty(i,r[i])}const t=this[Symbol.metadata];if(t!==null){const r=litPropertyMetadata.get(t);if(r!==void 0)for(const[o,i]of r)this.elementProperties.set(o,i)}this._$Eh=new Map;for(const[r,o]of this.elementProperties){const i=this._$Eu(r,o);i!==void 0&&this._$Eh.set(i,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const i of o)r.unshift(Re(i))}else t!==void 0&&r.push(Re(t));return r}static _$Eu(t,r){const o=r.attribute;return o===!1?void 0:typeof o=="string"?o:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,r=this.constructor.elementProperties;for(const o of r.keys())this.hasOwnProperty(o)&&(t.set(o,this[o]),delete this[o]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Yr(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,r,o){this._$AK(t,o)}_$ET(t,r){const o=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,o);if(i!==void 0&&o.reflect===!0){const a=(o.converter?.toAttribute!==void 0?o.converter:ut).toAttribute(r,o.type);this._$Em=t,a==null?this.removeAttribute(i):this.setAttribute(i,a),this._$Em=null}}_$AK(t,r){const o=this.constructor,i=o._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const a=o.getPropertyOptions(i),n=typeof a.converter=="function"?{fromAttribute:a.converter}:a.converter?.fromAttribute!==void 0?a.converter:ut;this._$Em=i;const s=n.fromAttribute(r,a.type);this[i]=s??this._$Ej?.get(i)??s,this._$Em=null}}requestUpdate(t,r,o,i=!1,a){if(t!==void 0){const n=this.constructor;if(i===!1&&(a=this[t]),o??=n.getPropertyOptions(t),!((o.hasChanged??ve)(a,r)||o.useDefault&&o.reflect&&a===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,o))))return;this.C(t,r,o)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,r,{useDefault:o,reflect:i,wrapped:a},n){o&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??r??this[t]),a!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||o||(r=void 0),this._$AL.set(t,r)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,a]of this._$Ep)this[i]=a;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[i,a]of o){const{wrapped:n}=a,s=this[i];n!==!0||this._$AL.has(i)||s===void 0||this.C(i,void 0,a,s)}}let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),this._$EO?.forEach(o=>o.hostUpdate?.()),this.update(r)):this._$EM()}catch(o){throw t=!1,this._$EM(),o}t&&this._$AE(r)}willUpdate(t){}_$AE(t){this._$EO?.forEach(r=>r.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(r=>this._$ET(r,this[r])),this._$EM()}updated(t){}firstUpdated(t){}};ct.elementStyles=[],ct.shadowRootOptions={mode:"open"},ct[At("elementProperties")]=new Map,ct[At("finalized")]=new Map,oo?.({ReactiveElement:ct}),(Jt.reactiveElementVersions??=[]).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ye=globalThis,Me=e=>e,Wt=ye.trustedTypes,Fe=Wt?Wt.createPolicy("lit-html",{createHTML:e=>e}):void 0,fr="$lit$",B=`lit$${Math.random().toFixed(9).slice(2)}$`,mr="?"+B,io=`<${mr}>`,ot=document,zt=()=>ot.createComment(""),St=e=>e===null||typeof e!="object"&&typeof e!="function",we=Array.isArray,ao=e=>we(e)||typeof e?.[Symbol.iterator]=="function",re=`[ 	
\f\r]`,bt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ie=/-->/g,Ne=/>/g,X=RegExp(`>|${re}(?:([^\\s"'>=/]+)(${re}*=${re}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ve=/'/g,Be=/"/g,br=/^(?:script|style|textarea|title)$/i,no=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),b=no(1),L=Symbol.for("lit-noChange"),_=Symbol.for("lit-nothing"),je=new WeakMap,et=ot.createTreeWalker(ot,129);function gr(e,t){if(!we(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Fe!==void 0?Fe.createHTML(t):t}const so=(e,t)=>{const r=e.length-1,o=[];let i,a=t===2?"<svg>":t===3?"<math>":"",n=bt;for(let s=0;s<r;s++){const l=e[s];let d,u,c=-1,m=0;for(;m<l.length&&(n.lastIndex=m,u=n.exec(l),u!==null);)m=n.lastIndex,n===bt?u[1]==="!--"?n=Ie:u[1]!==void 0?n=Ne:u[2]!==void 0?(br.test(u[2])&&(i=RegExp("</"+u[2],"g")),n=X):u[3]!==void 0&&(n=X):n===X?u[0]===">"?(n=i??bt,c=-1):u[1]===void 0?c=-2:(c=n.lastIndex-u[2].length,d=u[1],n=u[3]===void 0?X:u[3]==='"'?Be:Ve):n===Be||n===Ve?n=X:n===Ie||n===Ne?n=bt:(n=X,i=void 0);const f=n===X&&e[s+1].startsWith("/>")?" ":"";a+=n===bt?l+io:c>=0?(o.push(d),l.slice(0,c)+fr+l.slice(c)+B+f):l+B+(c===-2?s:f)}return[gr(e,a+(e[r]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),o]};class Pt{constructor({strings:t,_$litType$:r},o){let i;this.parts=[];let a=0,n=0;const s=t.length-1,l=this.parts,[d,u]=so(t,r);if(this.el=Pt.createElement(d,o),et.currentNode=this.el.content,r===2||r===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(i=et.nextNode())!==null&&l.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(const c of i.getAttributeNames())if(c.endsWith(fr)){const m=u[n++],f=i.getAttribute(c).split(B),g=/([.?@])?(.*)/.exec(m);l.push({type:1,index:a,name:g[2],strings:f,ctor:g[1]==="."?co:g[1]==="?"?uo:g[1]==="@"?ho:Qt}),i.removeAttribute(c)}else c.startsWith(B)&&(l.push({type:6,index:a}),i.removeAttribute(c));if(br.test(i.tagName)){const c=i.textContent.split(B),m=c.length-1;if(m>0){i.textContent=Wt?Wt.emptyScript:"";for(let f=0;f<m;f++)i.append(c[f],zt()),et.nextNode(),l.push({type:2,index:++a});i.append(c[m],zt())}}}else if(i.nodeType===8)if(i.data===mr)l.push({type:2,index:a});else{let c=-1;for(;(c=i.data.indexOf(B,c+1))!==-1;)l.push({type:7,index:a}),c+=B.length-1}a++}}static createElement(t,r){const o=ot.createElement("template");return o.innerHTML=t,o}}function ht(e,t,r=e,o){if(t===L)return t;let i=o!==void 0?r._$Co?.[o]:r._$Cl;const a=St(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,r,o)),o!==void 0?(r._$Co??=[])[o]=i:r._$Cl=i),i!==void 0&&(t=ht(e,i._$AS(e,t.values),i,o)),t}class lo{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:r},parts:o}=this._$AD,i=(t?.creationScope??ot).importNode(r,!0);et.currentNode=i;let a=et.nextNode(),n=0,s=0,l=o[0];for(;l!==void 0;){if(n===l.index){let d;l.type===2?d=new Tt(a,a.nextSibling,this,t):l.type===1?d=new l.ctor(a,l.name,l.strings,this,t):l.type===6&&(d=new po(a,this,t)),this._$AV.push(d),l=o[++s]}n!==l?.index&&(a=et.nextNode(),n++)}return et.currentNode=ot,i}p(t){let r=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(t,o,r),r+=o.strings.length-2):o._$AI(t[r])),r++}}class Tt{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,r,o,i){this.type=2,this._$AH=_,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=o,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&t?.nodeType===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=ht(this,t,r),St(t)?t===_||t==null||t===""?(this._$AH!==_&&this._$AR(),this._$AH=_):t!==this._$AH&&t!==L&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):ao(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==_&&St(this._$AH)?this._$AA.nextSibling.data=t:this.T(ot.createTextNode(t)),this._$AH=t}$(t){const{values:r,_$litType$:o}=t,i=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=Pt.createElement(gr(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===i)this._$AH.p(r);else{const a=new lo(i,this),n=a.u(this.options);a.p(r),this.T(n),this._$AH=a}}_$AC(t){let r=je.get(t.strings);return r===void 0&&je.set(t.strings,r=new Pt(t)),r}k(t){we(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let o,i=0;for(const a of t)i===r.length?r.push(o=new Tt(this.O(zt()),this.O(zt()),this,this.options)):o=r[i],o._$AI(a),i++;i<r.length&&(this._$AR(o&&o._$AB.nextSibling,i),r.length=i)}_$AR(t=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);t!==this._$AB;){const o=Me(t).nextSibling;Me(t).remove(),t=o}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class Qt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,o,i,a){this.type=1,this._$AH=_,this._$AN=void 0,this.element=t,this.name=r,this._$AM=i,this.options=a,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=_}_$AI(t,r=this,o,i){const a=this.strings;let n=!1;if(a===void 0)t=ht(this,t,r,0),n=!St(t)||t!==this._$AH&&t!==L,n&&(this._$AH=t);else{const s=t;let l,d;for(t=a[0],l=0;l<a.length-1;l++)d=ht(this,s[o+l],r,l),d===L&&(d=this._$AH[l]),n||=!St(d)||d!==this._$AH[l],d===_?t=_:t!==_&&(t+=(d??"")+a[l+1]),this._$AH[l]=d}n&&!i&&this.j(t)}j(t){t===_?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class co extends Qt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===_?void 0:t}}class uo extends Qt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==_)}}class ho extends Qt{constructor(t,r,o,i,a){super(t,r,o,i,a),this.type=5}_$AI(t,r=this){if((t=ht(this,t,r,0)??_)===L)return;const o=this._$AH,i=t===_&&o!==_||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,a=t!==_&&(o===_||i);i&&this.element.removeEventListener(this.name,this,o),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class po{constructor(t,r,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){ht(this,t)}}const fo=ye.litHtmlPolyfillSupport;fo?.(Pt,Tt),(ye.litHtmlVersions??=[]).push("3.3.2");const mo=(e,t,r)=>{const o=r?.renderBefore??t;let i=o._$litPart$;if(i===void 0){const a=r?.renderBefore??null;o._$litPart$=i=new Tt(t.insertBefore(zt(),a),a,void 0,r??{})}return i._$AI(e),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _e=globalThis;let O=class extends ct{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=mo(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return L}};O._$litElement$=!0,O.finalized=!0,_e.litElementHydrateSupport?.({LitElement:O});const bo=_e.litElementPolyfillSupport;bo?.({LitElement:O});(_e.litElementVersions??=[]).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const at=e=>(t,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const go={attribute:!0,type:String,converter:ut,reflect:!1,hasChanged:ve},vo=(e=go,t,r)=>{const{kind:o,metadata:i}=r;let a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),o==="setter"&&((e=Object.create(e)).wrapped=!0),a.set(r.name,e),o==="accessor"){const{name:n}=r;return{set(s){const l=t.get.call(this);t.set.call(this,s),this.requestUpdate(n,l,e,!0,s)},init(s){return s!==void 0&&this.C(n,void 0,e,s),s}}}if(o==="setter"){const{name:n}=r;return function(s){const l=this[n];t.call(this,s),this.requestUpdate(n,l,e,!0,s)}}throw Error("Unsupported decorator location: "+o)};function p(e){return(t,r)=>typeof r=="object"?vo(e,t,r):((o,i,a)=>{const n=i.hasOwnProperty(a);return i.constructor.createProperty(a,o),n?Object.getOwnPropertyDescriptor(i,a):void 0})(e,t,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function C(e){return p({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const yo=(e,t,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,r),r);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function K(e,t){return(r,o,i)=>{const a=n=>n.renderRoot?.querySelector(e)??null;return yo(r,o,{get(){return a(this)}})}}var ce="";function de(e){ce=e}function wo(e=""){if(!ce){const t=[...document.getElementsByTagName("script")],r=t.find(o=>o.hasAttribute("data-shoelace"));if(r)de(r.getAttribute("data-shoelace"));else{const o=t.find(a=>/shoelace(\.min)?\.js($|\?)/.test(a.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(a.src));let i="";o&&(i=o.getAttribute("src")),de(i.split("/").slice(0,-1).join("/"))}}return ce.replace(/\/$/,"")+(e?`/${e.replace(/^\//,"")}`:"")}var _o={name:"default",resolver:e=>wo(`assets/icons/${e}.svg`)},xo=_o,He={caret:`
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
  `},ko={name:"system",resolver:e=>e in He?`data:image/svg+xml,${encodeURIComponent(He[e])}`:""},$o=ko,Eo=[xo,$o],ue=[];function Ao(e){ue.push(e)}function Co(e){ue=ue.filter(t=>t!==e)}function We(e){return Eo.find(t=>t.name===e)}var zo=x`
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
`,vr=Object.defineProperty,So=Object.defineProperties,Po=Object.getOwnPropertyDescriptor,Oo=Object.getOwnPropertyDescriptors,qe=Object.getOwnPropertySymbols,Do=Object.prototype.hasOwnProperty,To=Object.prototype.propertyIsEnumerable,oe=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),xe=e=>{throw TypeError(e)},Ke=(e,t,r)=>t in e?vr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,pt=(e,t)=>{for(var r in t||(t={}))Do.call(t,r)&&Ke(e,r,t[r]);if(qe)for(var r of qe(t))To.call(t,r)&&Ke(e,r,t[r]);return e},ke=(e,t)=>So(e,Oo(t)),h=(e,t,r,o)=>{for(var i=o>1?void 0:o?Po(t,r):t,a=e.length-1,n;a>=0;a--)(n=e[a])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&vr(t,r,i),i},yr=(e,t,r)=>t.has(e)||xe("Cannot "+r),Ro=(e,t,r)=>(yr(e,t,"read from private field"),t.get(e)),Lo=(e,t,r)=>t.has(e)?xe("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),Uo=(e,t,r,o)=>(yr(e,t,"write to private field"),t.set(e,r),r),Mo=function(e,t){this[0]=e,this[1]=t},Fo=e=>{var t=e[oe("asyncIterator")],r=!1,o,i={};return t==null?(t=e[oe("iterator")](),o=a=>i[a]=n=>t[a](n)):(t=t.call(e),o=a=>i[a]=n=>{if(r){if(r=!1,a==="throw")throw n;return n}return r=!0,{done:!1,value:new Mo(new Promise(s=>{var l=t[a](n);l instanceof Object||xe("Object expected"),s(l)}),1)}}),i[oe("iterator")]=()=>i,o("next"),"throw"in t?o("throw"):i.throw=a=>{throw a},"return"in t&&o("return"),i};function G(e,t){const r=pt({waitUntilFirstUpdate:!1},t);return(o,i)=>{const{update:a}=o,n=Array.isArray(e)?e:[e];o.update=function(s){n.forEach(l=>{const d=l;if(s.has(d)){const u=s.get(d),c=this[d];u!==c&&(!r.waitUntilFirstUpdate||this.hasUpdated)&&this[i](u,c)}}),a.call(this,s)}}}var Y=x`
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
`,Nt,D=class extends O{constructor(){super(),Lo(this,Nt,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([e,t])=>{this.constructor.define(e,t)})}emit(e,t){const r=new CustomEvent(e,pt({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(r),r}static define(e,t=this,r={}){const o=customElements.get(e);if(!o){try{customElements.define(e,t,r)}catch{customElements.define(e,class extends t{},r)}return}let i=" (unknown version)",a=i;"version"in t&&t.version&&(i=" v"+t.version),"version"in o&&o.version&&(a=" v"+o.version),!(i&&a&&i===a)&&console.warn(`Attempted to register <${e}>${i}, but <${e}>${a} has already been registered.`)}attributeChangedCallback(e,t,r){Ro(this,Nt)||(this.constructor.elementProperties.forEach((o,i)=>{o.reflect&&this[i]!=null&&this.initialReflectedProperties.set(i,this[i])}),Uo(this,Nt,!0)),super.attributeChangedCallback(e,t,r)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,r)=>{e.has(r)&&this[r]==null&&(this[r]=t)})}};Nt=new WeakMap;D.version="2.20.1";D.dependencies={};h([p()],D.prototype,"dir",2);h([p()],D.prototype,"lang",2);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Io=(e,t)=>e?._$litType$!==void 0,No=e=>e.strings===void 0,Vo={},Bo=(e,t=Vo)=>e._$AH=t;var gt=Symbol(),Ut=Symbol(),ie,ae=new Map,U=class extends D{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(e,t){var r;let o;if(t?.spriteSheet)return this.svg=b`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,this.svg;try{if(o=await fetch(e,{mode:"cors"}),!o.ok)return o.status===410?gt:Ut}catch{return Ut}try{const i=document.createElement("div");i.innerHTML=await o.text();const a=i.firstElementChild;if(((r=a?.tagName)==null?void 0:r.toLowerCase())!=="svg")return gt;ie||(ie=new DOMParser);const s=ie.parseFromString(a.outerHTML,"text/html").body.querySelector("svg");return s?(s.part.add("svg"),document.adoptNode(s)):gt}catch{return gt}}connectedCallback(){super.connectedCallback(),Ao(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),Co(this)}getIconSource(){const e=We(this.library);return this.name&&e?{url:e.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var e;const{url:t,fromLibrary:r}=this.getIconSource(),o=r?We(this.library):void 0;if(!t){this.svg=null;return}let i=ae.get(t);if(i||(i=this.resolveIcon(t,o),ae.set(t,i)),!this.initialRender)return;const a=await i;if(a===Ut&&ae.delete(t),t===this.getIconSource().url){if(Io(a)){if(this.svg=a,o){await this.updateComplete;const n=this.shadowRoot.querySelector("[part='svg']");typeof o.mutator=="function"&&n&&o.mutator(n)}return}switch(a){case Ut:case gt:this.svg=null,this.emit("sl-error");break;default:this.svg=a.cloneNode(!0),(e=o?.mutator)==null||e.call(o,this.svg),this.emit("sl-load")}}}render(){return this.svg}};U.styles=[Y,zo];h([C()],U.prototype,"svg",2);h([p({reflect:!0})],U.prototype,"name",2);h([p()],U.prototype,"src",2);h([p()],U.prototype,"label",2);h([p({reflect:!0})],U.prototype,"library",2);h([G("label")],U.prototype,"handleLabelChange",1);h([G(["name","src","library"])],U.prototype,"setIcon",1);U.define("sl-icon");var jo=x`
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
`;function*$e(e=document.activeElement){e!=null&&(yield e,"shadowRoot"in e&&e.shadowRoot&&e.shadowRoot.mode!=="closed"&&(yield*Fo($e(e.shadowRoot.activeElement))))}function Ho(){return[...$e()].pop()}var Ge=new WeakMap;function wr(e){let t=Ge.get(e);return t||(t=window.getComputedStyle(e,null),Ge.set(e,t)),t}function Wo(e){if(typeof e.checkVisibility=="function")return e.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});const t=wr(e);return t.visibility!=="hidden"&&t.display!=="none"}function qo(e){const t=wr(e),{overflowY:r,overflowX:o}=t;return r==="scroll"||o==="scroll"?!0:r!=="auto"||o!=="auto"?!1:e.scrollHeight>e.clientHeight&&r==="auto"||e.scrollWidth>e.clientWidth&&o==="auto"}function Ko(e){const t=e.tagName.toLowerCase(),r=Number(e.getAttribute("tabindex"));if(e.hasAttribute("tabindex")&&(isNaN(r)||r<=-1)||e.hasAttribute("disabled")||e.closest("[inert]"))return!1;if(t==="input"&&e.getAttribute("type")==="radio"){const a=e.getRootNode(),n=`input[type='radio'][name="${e.getAttribute("name")}"]`,s=a.querySelector(`${n}:checked`);return s?s===e:a.querySelector(n)===e}return Wo(e)?(t==="audio"||t==="video")&&e.hasAttribute("controls")||e.hasAttribute("tabindex")||e.hasAttribute("contenteditable")&&e.getAttribute("contenteditable")!=="false"||["button","input","select","textarea","a","audio","video","summary","iframe"].includes(t)?!0:qo(e):!1}function Go(e,t){var r;return((r=e.getRootNode({composed:!0}))==null?void 0:r.host)!==t}function Ye(e){const t=new WeakMap,r=[];function o(i){if(i instanceof Element){if(i.hasAttribute("inert")||i.closest("[inert]")||t.has(i))return;t.set(i,!0),!r.includes(i)&&Ko(i)&&r.push(i),i instanceof HTMLSlotElement&&Go(i,e)&&i.assignedElements({flatten:!0}).forEach(a=>{o(a)}),i.shadowRoot!==null&&i.shadowRoot.mode==="open"&&o(i.shadowRoot)}for(const a of i.children)o(a)}return o(e),r.sort((i,a)=>{const n=Number(i.getAttribute("tabindex"))||0;return(Number(a.getAttribute("tabindex"))||0)-n})}var vt=[],Yo=class{constructor(e){this.tabDirection="forward",this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=t=>{var r;if(t.key!=="Tab"||this.isExternalActivated||!this.isActive())return;const o=Ho();if(this.previousFocus=o,this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;t.shiftKey?this.tabDirection="backward":this.tabDirection="forward";const i=Ye(this.element);let a=i.findIndex(s=>s===o);this.previousFocus=this.currentFocus;const n=this.tabDirection==="forward"?1:-1;for(;;){a+n>=i.length?a=0:a+n<0?a=i.length-1:a+=n,this.previousFocus=this.currentFocus;const s=i[a];if(this.tabDirection==="backward"&&this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus)||s&&this.possiblyHasTabbableChildren(s))return;t.preventDefault(),this.currentFocus=s,(r=this.currentFocus)==null||r.focus({preventScroll:!1});const l=[...$e()];if(l.includes(this.currentFocus)||!l.includes(this.previousFocus))break}setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=e,this.elementsWithTabbableControls=["iframe"]}activate(){vt.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){vt=vt.filter(e=>e!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return vt[vt.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){const e=Ye(this.element);if(!this.element.matches(":focus-within")){const t=e[0],r=e[e.length-1],o=this.tabDirection==="forward"?t:r;typeof o?.focus=="function"&&(this.currentFocus=o,o.focus({preventScroll:!1}))}}}possiblyHasTabbableChildren(e){return this.elementsWithTabbableControls.includes(e.tagName.toLowerCase())||e.hasAttribute("controls")}},he=new Set;function Zo(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}function Xo(){const e=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(e)||!e?0:e}function ne(e){if(he.add(e),!document.documentElement.classList.contains("sl-scroll-lock")){const t=Zo()+Xo();let r=getComputedStyle(document.documentElement).scrollbarGutter;(!r||r==="auto")&&(r="stable"),t<2&&(r=""),document.documentElement.style.setProperty("--sl-scroll-lock-gutter",r),document.documentElement.classList.add("sl-scroll-lock"),document.documentElement.style.setProperty("--sl-scroll-lock-size",`${t}px`)}}function se(e){he.delete(e),he.size===0&&(document.documentElement.classList.remove("sl-scroll-lock"),document.documentElement.style.removeProperty("--sl-scroll-lock-size"))}var Jo=e=>{var t;const{activeElement:r}=document;r&&e.contains(r)&&((t=document.activeElement)==null||t.blur())},Qo=x`
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
 */const J={ATTRIBUTE:1,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},_r=e=>(...t)=>({_$litDirective$:e,values:t});let xr=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,o){this._$Ct=t,this._$AM=r,this._$Ci=o}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const H=_r(class extends xr{constructor(e){if(super(e),e.type!==J.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in t)t[o]&&!this.nt?.has(o)&&this.st.add(o);return this.render(t)}const r=e.element.classList;for(const o of this.st)o in t||(r.remove(o),this.st.delete(o));for(const o in t){const i=!!t[o];i===this.st.has(o)||this.nt?.has(o)||(i?(r.add(o),this.st.add(o)):(r.remove(o),this.st.delete(o)))}return L}});/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const kr=Symbol.for(""),ti=e=>{if(e?.r===kr)return e?._$litStatic$},qt=(e,...t)=>({_$litStatic$:t.reduce((r,o,i)=>r+(a=>{if(a._$litStatic$!==void 0)return a._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${a}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(o)+e[i+1],e[0]),r:kr}),Ze=new Map,ei=e=>(t,...r)=>{const o=r.length;let i,a;const n=[],s=[];let l,d=0,u=!1;for(;d<o;){for(l=t[d];d<o&&(a=r[d],(i=ti(a))!==void 0);)l+=i+t[++d],u=!0;d!==o&&s.push(a),n.push(l),d++}if(d===o&&n.push(t[o]),u){const c=n.join("$$lit$$");(t=Ze.get(c))===void 0&&(n.raw=n,Ze.set(c,t=n)),r=s}return e(t,...r)},Vt=ei(b);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const w=e=>e??_;var z=class extends D{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){const e=!!this.href,t=e?qt`a`:qt`button`;return Vt`
      <${t}
        part="base"
        class=${H({"icon-button":!0,"icon-button--disabled":!e&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${w(e?void 0:this.disabled)}
        type=${w(e?void 0:"button")}
        href=${w(e?this.href:void 0)}
        target=${w(e?this.target:void 0)}
        download=${w(e?this.download:void 0)}
        rel=${w(e&&this.target?"noreferrer noopener":void 0)}
        role=${w(e?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${w(this.name)}
          library=${w(this.library)}
          src=${w(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${t}>
    `}};z.styles=[Y,Qo];z.dependencies={"sl-icon":U};h([K(".icon-button")],z.prototype,"button",2);h([C()],z.prototype,"hasFocus",2);h([p()],z.prototype,"name",2);h([p()],z.prototype,"library",2);h([p()],z.prototype,"src",2);h([p()],z.prototype,"href",2);h([p()],z.prototype,"target",2);h([p()],z.prototype,"download",2);h([p()],z.prototype,"label",2);h([p({type:Boolean,reflect:!0})],z.prototype,"disabled",2);var $r=new Map,ri=new WeakMap;function oi(e){return e??{keyframes:[],options:{duration:0}}}function Xe(e,t){return t.toLowerCase()==="rtl"?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function M(e,t){$r.set(e,oi(t))}function yt(e,t,r){const o=ri.get(e);if(o?.[t])return Xe(o[t],r.dir);const i=$r.get(t);return i?Xe(i,r.dir):{keyframes:[],options:{duration:0}}}function Je(e,t){return new Promise(r=>{function o(i){i.target===e&&(e.removeEventListener(t,o),r())}e.addEventListener(t,o)})}function wt(e,t,r){return new Promise(o=>{if(r?.duration===1/0)throw new Error("Promise-based animations must be finite.");const i=e.animate(t,ke(pt({},r),{duration:ii()?0:r.duration}));i.addEventListener("cancel",o,{once:!0}),i.addEventListener("finish",o,{once:!0})})}function ii(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Mt(e){return Promise.all(e.getAnimations().map(t=>new Promise(r=>{t.cancel(),requestAnimationFrame(r)})))}var Ee=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=r=>{const o=r.target;(this.slotNames.includes("[default]")&&!o.name||o.name&&this.slotNames.includes(o.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===e.TEXT_NODE&&e.textContent.trim()!=="")return!0;if(e.nodeType===e.ELEMENT_NODE){const t=e;if(t.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};const pe=new Set,dt=new Map;let Q,Ae="ltr",Ce="en";const Er=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(Er){const e=new MutationObserver(Cr);Ae=document.documentElement.dir||"ltr",Ce=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function Ar(...e){e.map(t=>{const r=t.$code.toLowerCase();dt.has(r)?dt.set(r,Object.assign(Object.assign({},dt.get(r)),t)):dt.set(r,t),Q||(Q=t)}),Cr()}function Cr(){Er&&(Ae=document.documentElement.dir||"ltr",Ce=document.documentElement.lang||navigator.language),[...pe.keys()].map(e=>{typeof e.requestUpdate=="function"&&e.requestUpdate()})}let ai=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){pe.add(this.host)}hostDisconnected(){pe.delete(this.host)}dir(){return`${this.host.dir||Ae}`.toLowerCase()}lang(){return`${this.host.lang||Ce}`.toLowerCase()}getTranslationData(t){var r,o;const i=new Intl.Locale(t.replace(/_/g,"-")),a=i?.language.toLowerCase(),n=(o=(r=i?.region)===null||r===void 0?void 0:r.toLowerCase())!==null&&o!==void 0?o:"",s=dt.get(`${a}-${n}`),l=dt.get(a);return{locale:i,language:a,region:n,primary:s,secondary:l}}exists(t,r){var o;const{primary:i,secondary:a}=this.getTranslationData((o=r.lang)!==null&&o!==void 0?o:this.lang());return r=Object.assign({includeFallback:!1},r),!!(i&&i[t]||a&&a[t]||r.includeFallback&&Q&&Q[t])}term(t,...r){const{primary:o,secondary:i}=this.getTranslationData(this.lang());let a;if(o&&o[t])a=o[t];else if(i&&i[t])a=i[t];else if(Q&&Q[t])a=Q[t];else return console.error(`No translation found for: ${String(t)}`),String(t);return typeof a=="function"?a(...r):a}date(t,r){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),r).format(t)}number(t,r){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),r).format(t)}relativeTime(t,r,o){return new Intl.RelativeTimeFormat(this.lang(),o).format(t,r)}};var zr={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>e===0?"No options selected":e===1?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};Ar(zr);var ni=zr,ze=class extends ai{};Ar(ni);function Qe(e){return e.charAt(0).toUpperCase()+e.slice(1)}var P=class extends D{constructor(){super(...arguments),this.hasSlotController=new Ee(this,"footer"),this.localize=new ze(this),this.modal=new Yo(this),this.open=!1,this.label="",this.placement="end",this.contained=!1,this.noHeader=!1,this.handleDocumentKeyDown=e=>{this.contained||e.key==="Escape"&&this.modal.isActive()&&this.open&&(e.stopImmediatePropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.drawer.hidden=!this.open,this.open&&(this.addOpenListeners(),this.contained||(this.modal.activate(),ne(this)))}disconnectedCallback(){super.disconnectedCallback(),se(this),this.removeOpenListeners()}requestClose(e){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){const r=yt(this,"drawer.denyClose",{dir:this.localize.dir()});wt(this.panel,r.keyframes,r.options);return}this.hide()}addOpenListeners(){var e;"CloseWatcher"in window?((e=this.closeWatcher)==null||e.destroy(),this.contained||(this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard"))):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var e;document.removeEventListener("keydown",this.handleDocumentKeyDown),(e=this.closeWatcher)==null||e.destroy()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),ne(this));const e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([Mt(this.drawer),Mt(this.overlay)]),this.drawer.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")});const t=yt(this,`drawer.show${Qe(this.placement)}`,{dir:this.localize.dir()}),r=yt(this,"drawer.overlay.show",{dir:this.localize.dir()});await Promise.all([wt(this.panel,t.keyframes,t.options),wt(this.overlay,r.keyframes,r.options)]),this.emit("sl-after-show")}else{Jo(this),this.emit("sl-hide"),this.removeOpenListeners(),this.contained||(this.modal.deactivate(),se(this)),await Promise.all([Mt(this.drawer),Mt(this.overlay)]);const e=yt(this,`drawer.hide${Qe(this.placement)}`,{dir:this.localize.dir()}),t=yt(this,"drawer.overlay.hide",{dir:this.localize.dir()});await Promise.all([wt(this.overlay,t.keyframes,t.options).then(()=>{this.overlay.hidden=!0}),wt(this.panel,e.keyframes,e.options).then(()=>{this.panel.hidden=!0})]),this.drawer.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1;const r=this.originalTrigger;typeof r?.focus=="function"&&setTimeout(()=>r.focus()),this.emit("sl-after-hide")}}handleNoModalChange(){this.open&&!this.contained&&(this.modal.activate(),ne(this)),this.open&&this.contained&&(this.modal.deactivate(),se(this))}async show(){if(!this.open)return this.open=!0,Je(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Je(this,"sl-after-hide")}render(){return b`
      <div
        part="base"
        class=${H({drawer:!0,"drawer--open":this.open,"drawer--top":this.placement==="top","drawer--end":this.placement==="end","drawer--bottom":this.placement==="bottom","drawer--start":this.placement==="start","drawer--contained":this.contained,"drawer--fixed":!this.contained,"drawer--rtl":this.localize.dir()==="rtl","drawer--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="drawer__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${w(this.noHeader?this.label:void 0)}
          aria-labelledby=${w(this.noHeader?void 0:"title")}
          tabindex="0"
        >
          ${this.noHeader?"":b`
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
    `}};P.styles=[Y,jo];P.dependencies={"sl-icon-button":z};h([K(".drawer")],P.prototype,"drawer",2);h([K(".drawer__panel")],P.prototype,"panel",2);h([K(".drawer__overlay")],P.prototype,"overlay",2);h([p({type:Boolean,reflect:!0})],P.prototype,"open",2);h([p({reflect:!0})],P.prototype,"label",2);h([p({reflect:!0})],P.prototype,"placement",2);h([p({type:Boolean,reflect:!0})],P.prototype,"contained",2);h([p({attribute:"no-header",type:Boolean,reflect:!0})],P.prototype,"noHeader",2);h([G("open",{waitUntilFirstUpdate:!0})],P.prototype,"handleOpenChange",1);h([G("contained",{waitUntilFirstUpdate:!0})],P.prototype,"handleNoModalChange",1);M("drawer.showTop",{keyframes:[{opacity:0,translate:"0 -100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});M("drawer.hideTop",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 -100%"}],options:{duration:250,easing:"ease"}});M("drawer.showEnd",{keyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});M("drawer.hideEnd",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],options:{duration:250,easing:"ease"}});M("drawer.showBottom",{keyframes:[{opacity:0,translate:"0 100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});M("drawer.hideBottom",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 100%"}],options:{duration:250,easing:"ease"}});M("drawer.showStart",{keyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});M("drawer.hideStart",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],options:{duration:250,easing:"ease"}});M("drawer.denyClose",{keyframes:[{scale:1},{scale:1.01},{scale:1}],options:{duration:250}});M("drawer.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});M("drawer.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});P.define("sl-drawer");z.define("sl-icon-button");var si=x`
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
`,Sr=class extends D{constructor(){super(...arguments),this.localize=new ze(this)}render(){return b`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};Sr.styles=[Y,si];var _t=new WeakMap,xt=new WeakMap,kt=new WeakMap,le=new WeakSet,Ft=new WeakMap,Pr=class{constructor(e,t){this.handleFormData=r=>{const o=this.options.disabled(this.host),i=this.options.name(this.host),a=this.options.value(this.host),n=this.host.tagName.toLowerCase()==="sl-button";this.host.isConnected&&!o&&!n&&typeof i=="string"&&i.length>0&&typeof a<"u"&&(Array.isArray(a)?a.forEach(s=>{r.formData.append(i,s.toString())}):r.formData.append(i,a.toString()))},this.handleFormSubmit=r=>{var o;const i=this.options.disabled(this.host),a=this.options.reportValidity;this.form&&!this.form.noValidate&&((o=_t.get(this.form))==null||o.forEach(n=>{this.setUserInteracted(n,!0)})),this.form&&!this.form.noValidate&&!i&&!a(this.host)&&(r.preventDefault(),r.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),Ft.set(this.host,[])},this.handleInteraction=r=>{const o=Ft.get(this.host);o.includes(r.type)||o.push(r.type),o.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const r=this.form.querySelectorAll("*");for(const o of r)if(typeof o.checkValidity=="function"&&!o.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const r=this.form.querySelectorAll("*");for(const o of r)if(typeof o.reportValidity=="function"&&!o.reportValidity())return!1}return!0},(this.host=e).addController(this),this.options=pt({form:r=>{const o=r.form;if(o){const a=r.getRootNode().querySelector(`#${o}`);if(a)return a}return r.closest("form")},name:r=>r.name,value:r=>r.value,defaultValue:r=>r.defaultValue,disabled:r=>{var o;return(o=r.disabled)!=null?o:!1},reportValidity:r=>typeof r.reportValidity=="function"?r.reportValidity():!0,checkValidity:r=>typeof r.checkValidity=="function"?r.checkValidity():!0,setValue:(r,o)=>r.value=o,assumeInteractionOn:["sl-input"]},t)}hostConnected(){const e=this.options.form(this.host);e&&this.attachForm(e),Ft.set(this.host,[]),this.options.assumeInteractionOn.forEach(t=>{this.host.addEventListener(t,this.handleInteraction)})}hostDisconnected(){this.detachForm(),Ft.delete(this.host),this.options.assumeInteractionOn.forEach(e=>{this.host.removeEventListener(e,this.handleInteraction)})}hostUpdated(){const e=this.options.form(this.host);e||this.detachForm(),e&&this.form!==e&&(this.detachForm(),this.attachForm(e)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(e){e?(this.form=e,_t.has(this.form)?_t.get(this.form).add(this.host):_t.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),xt.has(this.form)||(xt.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),kt.has(this.form)||(kt.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const e=_t.get(this.form);e&&(e.delete(this.host),e.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),xt.has(this.form)&&(this.form.reportValidity=xt.get(this.form),xt.delete(this.form)),kt.has(this.form)&&(this.form.checkValidity=kt.get(this.form),kt.delete(this.form)),this.form=void 0))}setUserInteracted(e,t){t?le.add(e):le.delete(e),e.requestUpdate()}doAction(e,t){if(this.form){const r=document.createElement("button");r.type=e,r.style.position="absolute",r.style.width="0",r.style.height="0",r.style.clipPath="inset(50%)",r.style.overflow="hidden",r.style.whiteSpace="nowrap",t&&(r.name=t.name,r.value=t.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(o=>{t.hasAttribute(o)&&r.setAttribute(o,t.getAttribute(o))})),this.form.append(r),r.click(),r.remove()}}getForm(){var e;return(e=this.form)!=null?e:null}reset(e){this.doAction("reset",e)}submit(e){this.doAction("submit",e)}setValidity(e){const t=this.host,r=!!le.has(t),o=!!t.required;t.toggleAttribute("data-required",o),t.toggleAttribute("data-optional",!o),t.toggleAttribute("data-invalid",!e),t.toggleAttribute("data-valid",e),t.toggleAttribute("data-user-invalid",!e&&r),t.toggleAttribute("data-user-valid",e&&r)}updateValidity(){const e=this.host;this.setValidity(e.validity.valid)}emitInvalidEvent(e){const t=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});e||t.preventDefault(),this.host.dispatchEvent(t)||e?.preventDefault()}},Se=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1});Object.freeze(ke(pt({},Se),{valid:!1,valueMissing:!0}));Object.freeze(ke(pt({},Se),{valid:!1,customError:!0}));var li=x`
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
`,v=class extends D{constructor(){super(...arguments),this.formControlController=new Pr(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new Ee(this,"[default]","prefix","suffix"),this.localize=new ze(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:Se}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(e){this.isButton()&&(this.button.setCustomValidity(e),this.formControlController.updateValidity())}render(){const e=this.isLink(),t=e?qt`a`:qt`button`;return Vt`
      <${t}
        part="base"
        class=${H({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${w(e?void 0:this.disabled)}
        type=${w(e?void 0:this.type)}
        title=${this.title}
        name=${w(e?void 0:this.name)}
        value=${w(e?void 0:this.value)}
        href=${w(e&&!this.disabled?this.href:void 0)}
        target=${w(e?this.target:void 0)}
        download=${w(e?this.download:void 0)}
        rel=${w(e?this.rel:void 0)}
        role=${w(e?void 0:"button")}
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
        ${this.caret?Vt` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?Vt`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${t}>
    `}};v.styles=[Y,li];v.dependencies={"sl-icon":U,"sl-spinner":Sr};h([K(".button")],v.prototype,"button",2);h([C()],v.prototype,"hasFocus",2);h([C()],v.prototype,"invalid",2);h([p()],v.prototype,"title",2);h([p({reflect:!0})],v.prototype,"variant",2);h([p({reflect:!0})],v.prototype,"size",2);h([p({type:Boolean,reflect:!0})],v.prototype,"caret",2);h([p({type:Boolean,reflect:!0})],v.prototype,"disabled",2);h([p({type:Boolean,reflect:!0})],v.prototype,"loading",2);h([p({type:Boolean,reflect:!0})],v.prototype,"outline",2);h([p({type:Boolean,reflect:!0})],v.prototype,"pill",2);h([p({type:Boolean,reflect:!0})],v.prototype,"circle",2);h([p()],v.prototype,"type",2);h([p()],v.prototype,"name",2);h([p()],v.prototype,"value",2);h([p()],v.prototype,"href",2);h([p()],v.prototype,"target",2);h([p()],v.prototype,"rel",2);h([p()],v.prototype,"download",2);h([p()],v.prototype,"form",2);h([p({attribute:"formaction"})],v.prototype,"formAction",2);h([p({attribute:"formenctype"})],v.prototype,"formEnctype",2);h([p({attribute:"formmethod"})],v.prototype,"formMethod",2);h([p({attribute:"formnovalidate",type:Boolean})],v.prototype,"formNoValidate",2);h([p({attribute:"formtarget"})],v.prototype,"formTarget",2);h([G("disabled",{waitUntilFirstUpdate:!0})],v.prototype,"handleDisabledChange",1);v.define("sl-button");var ci=x`
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
`,te=class extends D{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};te.styles=[Y,ci];h([p({type:Boolean,reflect:!0})],te.prototype,"vertical",2);h([G("vertical")],te.prototype,"handleVerticalChange",1);te.define("sl-divider");function di(e){for(var t=[],r=0;r<e.length;){var o=e[r];if(o==="*"||o==="+"||o==="?"){t.push({type:"MODIFIER",index:r,value:e[r++]});continue}if(o==="\\"){t.push({type:"ESCAPED_CHAR",index:r++,value:e[r++]});continue}if(o==="{"){t.push({type:"OPEN",index:r,value:e[r++]});continue}if(o==="}"){t.push({type:"CLOSE",index:r,value:e[r++]});continue}if(o===":"){for(var i="",a=r+1;a<e.length;){var n=e.charCodeAt(a);if(n>=48&&n<=57||n>=65&&n<=90||n>=97&&n<=122||n===95){i+=e[a++];continue}break}if(!i)throw new TypeError("Missing parameter name at ".concat(r));t.push({type:"NAME",index:r,value:i}),r=a;continue}if(o==="("){var s=1,l="",a=r+1;if(e[a]==="?")throw new TypeError('Pattern cannot start with "?" at '.concat(a));for(;a<e.length;){if(e[a]==="\\"){l+=e[a++]+e[a++];continue}if(e[a]===")"){if(s--,s===0){a++;break}}else if(e[a]==="("&&(s++,e[a+1]!=="?"))throw new TypeError("Capturing groups are not allowed at ".concat(a));l+=e[a++]}if(s)throw new TypeError("Unbalanced pattern at ".concat(r));if(!l)throw new TypeError("Missing pattern at ".concat(r));t.push({type:"PATTERN",index:r,value:l}),r=a;continue}t.push({type:"CHAR",index:r,value:e[r++]})}return t.push({type:"END",index:r,value:""}),t}function Pe(e,t){t===void 0&&(t={});for(var r=di(e),o=t.prefixes,i=o===void 0?"./":o,a=t.delimiter,n=a===void 0?"/#?":a,s=[],l=0,d=0,u="",c=function(S){if(d<r.length&&r[d].type===S)return r[d++].value},m=function(S){var k=c(S);if(k!==void 0)return k;var I=r[d],ee=I.type,Kr=I.index;throw new TypeError("Unexpected ".concat(ee," at ").concat(Kr,", expected ").concat(S))},f=function(){for(var S="",k;k=c("CHAR")||c("ESCAPED_CHAR");)S+=k;return S},g=function(S){for(var k=0,I=n;k<I.length;k++){var ee=I[k];if(S.indexOf(ee)>-1)return!0}return!1},F=function(S){var k=s[s.length-1],I=S||(k&&typeof k=="string"?k:"");if(k&&!I)throw new TypeError('Must have text between two parameters, missing text after "'.concat(k.name,'"'));return!I||g(I)?"[^".concat(j(n),"]+?"):"(?:(?!".concat(j(I),")[^").concat(j(n),"])+?")};d<r.length;){var E=c("CHAR"),A=c("NAME"),st=c("PATTERN");if(A||st){var T=E||"";i.indexOf(T)===-1&&(u+=T,T=""),u&&(s.push(u),u=""),s.push({name:A||l++,prefix:T,suffix:"",pattern:st||F(T),modifier:c("MODIFIER")||""});continue}var y=E||c("ESCAPED_CHAR");if(y){u+=y;continue}u&&(s.push(u),u="");var Z=c("OPEN");if(Z){var T=f(),V=c("NAME")||"",mt=c("PATTERN")||"",lt=f();m("CLOSE"),s.push({name:V||(mt?l++:""),pattern:V&&!mt?F(T):mt,prefix:T,suffix:lt,modifier:c("MODIFIER")||""});continue}m("END")}return s}function Or(e,t){return Dr(Pe(e,t),t)}function Dr(e,t){t===void 0&&(t={});var r=Oe(t),o=t.encode,i=o===void 0?function(l){return l}:o,a=t.validate,n=a===void 0?!0:a,s=e.map(function(l){if(typeof l=="object")return new RegExp("^(?:".concat(l.pattern,")$"),r)});return function(l){for(var d="",u=0;u<e.length;u++){var c=e[u];if(typeof c=="string"){d+=c;continue}var m=l?l[c.name]:void 0,f=c.modifier==="?"||c.modifier==="*",g=c.modifier==="*"||c.modifier==="+";if(Array.isArray(m)){if(!g)throw new TypeError('Expected "'.concat(c.name,'" to not repeat, but got an array'));if(m.length===0){if(f)continue;throw new TypeError('Expected "'.concat(c.name,'" to not be empty'))}for(var F=0;F<m.length;F++){var E=i(m[F],c);if(n&&!s[u].test(E))throw new TypeError('Expected all "'.concat(c.name,'" to match "').concat(c.pattern,'", but got "').concat(E,'"'));d+=c.prefix+E+c.suffix}continue}if(typeof m=="string"||typeof m=="number"){var E=i(String(m),c);if(n&&!s[u].test(E))throw new TypeError('Expected "'.concat(c.name,'" to match "').concat(c.pattern,'", but got "').concat(E,'"'));d+=c.prefix+E+c.suffix;continue}if(!f){var A=g?"an array":"a string";throw new TypeError('Expected "'.concat(c.name,'" to be ').concat(A))}}return d}}function j(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function Oe(e){return e&&e.sensitive?"":"i"}function ui(e,t){if(!t)return e;for(var r=/\((?:\?<(.*?)>)?(?!\?)/g,o=0,i=r.exec(e.source);i;)t.push({name:i[1]||o++,prefix:"",suffix:"",modifier:"",pattern:""}),i=r.exec(e.source);return e}function hi(e,t,r){var o=e.map(function(i){return Tr(i,t,r).source});return new RegExp("(?:".concat(o.join("|"),")"),Oe(r))}function pi(e,t,r){return fi(Pe(e,r),t,r)}function fi(e,t,r){r===void 0&&(r={});for(var o=r.strict,i=o===void 0?!1:o,a=r.start,n=a===void 0?!0:a,s=r.end,l=s===void 0?!0:s,d=r.encode,u=d===void 0?function(k){return k}:d,c=r.delimiter,m=c===void 0?"/#?":c,f=r.endsWith,g=f===void 0?"":f,F="[".concat(j(g),"]|$"),E="[".concat(j(m),"]"),A=n?"^":"",st=0,T=e;st<T.length;st++){var y=T[st];if(typeof y=="string")A+=j(u(y));else{var Z=j(u(y.prefix)),V=j(u(y.suffix));if(y.pattern)if(t&&t.push(y),Z||V)if(y.modifier==="+"||y.modifier==="*"){var mt=y.modifier==="*"?"?":"";A+="(?:".concat(Z,"((?:").concat(y.pattern,")(?:").concat(V).concat(Z,"(?:").concat(y.pattern,"))*)").concat(V,")").concat(mt)}else A+="(?:".concat(Z,"(").concat(y.pattern,")").concat(V,")").concat(y.modifier);else{if(y.modifier==="+"||y.modifier==="*")throw new TypeError('Can not repeat "'.concat(y.name,'" without a prefix and suffix'));A+="(".concat(y.pattern,")").concat(y.modifier)}else A+="(?:".concat(Z).concat(V,")").concat(y.modifier)}}if(l)i||(A+="".concat(E,"?")),A+=r.endsWith?"(?=".concat(F,")"):"$";else{var lt=e[e.length-1],S=typeof lt=="string"?E.indexOf(lt[lt.length-1])>-1:lt===void 0;i||(A+="(?:".concat(E,"(?=").concat(F,"))?")),S||(A+="(?=".concat(E,"|").concat(F,")"))}return new RegExp(A,Oe(r))}function Tr(e,t,r){return e instanceof RegExp?ui(e,t):Array.isArray(e)?hi(e,t,r):pi(e,t,r)}const rt=Symbol("NotFoundResult");class Rr extends Error{code;context;constructor(t){super(W(`Page not found (${t.pathname})`)),this.context=t,this.code=404}}function tt(e){return typeof e=="object"&&!!e}function Ot(e){return typeof e=="function"}function N(e){return typeof e=="string"}function Kt(e=[]){return Array.isArray(e)?e:[e]}function W(e){return`[Vaadin.Router] ${e}`}function Lr(e){return new Rr(e)}function Ur(e){return(Array.isArray(e)?e[0]:e)??""}function Gt(e){return Ur(e?.path)}function mi(e){return Array.isArray(e)&&e.length>0?e:void 0}const fe=new Map;fe.set("|false",{keys:[],pattern:/(?:)/u});function tr(e){try{return decodeURIComponent(e)}catch{return e}}function bi(e,t,r=!1,o=[],i){const a=`${e}|${String(r)}`,n=Ur(t);let s=fe.get(a);if(!s){const u=[];s={keys:u,pattern:Tr(e,u,{end:r,strict:e===""})},fe.set(a,s)}const l=s.pattern.exec(n);if(!l)return null;const d={...i};for(let u=1;u<l.length;u++){const c=s.keys[u-1],m=c.name,f=l[u];(f!==void 0||!Object.prototype.hasOwnProperty.call(d,m))&&(c.modifier==="+"||c.modifier==="*"?d[m]=f?f.split(/[/?#]/u).map(tr):[]:d[m]=f&&tr(f))}return{keys:[...o,...s.keys],params:d,path:l[0]}}var gi=bi;function Mr(e,t,r,o,i){let a,n,s=0,l=Gt(e);return l.startsWith("/")&&(r&&(l=l.substring(1)),r=!0),{next(d){if(e===d)return{done:!0,value:void 0};e.__children??=mi(e.children);const u=e.__children??[],c=!e.__children&&!e.children;if(!a&&(a=gi(l,t,c,o,i),a))return{value:{keys:a.keys,params:a.params,path:a.path,route:e}};if(a&&u.length>0)for(;s<u.length;){if(!n){const f=u[s];f.parent=e;let g=a.path.length;g>0&&t.charAt(g)==="/"&&(g+=1),n=Mr(f,t.substring(g),r,a.keys,a.params)}const m=n.next(d);if(!m.done)return{done:!1,value:m.value};n=null,s+=1}return{done:!0,value:void 0}}}}var vi=Mr;function yi(e){if(Ot(e.route.action))return e.route.action(e)}function wi(e,t){let r=e;for(;r;)if(r=r.parent,r===t)return!0;return!1}function _i(e){return!!e&&typeof e=="object"&&"next"in e&&"params"in e&&"result"in e&&"route"in e}class xi extends Error{cause;code;context;constructor(t,r){let o=`Path '${t.pathname}' is not properly resolved due to an error.`;const i=Gt(t.route);i&&(o+=` Resolution had failed on route: '${i}'`),super(o),this.cause=r?.cause,this.code=r?.code,this.context=t}warn(){console.warn(this.message)}}function ki(e,t){const{path:r,route:o}=t;if(o&&!o.__synthetic){const i={path:r,route:o};if(o.parent&&e.chain)for(let a=e.chain.length-1;a>=0&&e.chain[a].route!==o.parent;a--)e.chain.pop();e.chain?.push(i)}}class $i{baseUrl;#r;errorHandler;resolveRoute;#t;constructor(t,{baseUrl:r="",context:o,errorHandler:i,resolveRoute:a=yi}={}){if(Object(t)!==t)throw new TypeError("Invalid routes");this.baseUrl=r,this.errorHandler=i,this.resolveRoute=a,Array.isArray(t)?this.#t={__children:t,__synthetic:!0,action:()=>{},path:""}:this.#t={...t,parent:void 0},this.#r={...o,hash:"",async next(){return rt},params:{},pathname:"",resolver:this,route:this.#t,search:"",chain:[]}}get root(){return this.#t}get context(){return this.#r}get __effectiveBaseUrl(){return this.baseUrl?new URL(this.baseUrl,document.baseURI||document.URL).href.replace(/[^/]*$/u,""):""}getRoutes(){return[...this.#t.__children??[]]}removeRoutes(){this.#t.__children=[]}async resolve(t){const r=this,o={...this.#r,...N(t)?{pathname:t}:t,next:d},i=vi(this.#t,this.__normalizePathname(o.pathname)??o.pathname,!!this.baseUrl),a=this.resolveRoute;let n=null,s=null,l=o;async function d(u=!1,c=n?.value?.route,m){const f=m===null?n?.value?.route:void 0;if(n=s??i.next(f),s=null,!u&&(n.done||!wi(n.value.route,c)))return s=n,rt;if(n.done)throw Lr(o);l={...o,params:n.value.params,route:n.value.route,chain:l.chain?.slice()},ki(l,n.value);const g=await a(l);return g!=null&&g!==rt?(l.result=_i(g)?g.result:g,r.#r=l,l):await d(u,c,g)}try{return await d(!0,this.#t)}catch(u){const c=u instanceof Rr?u:new xi(l,{code:500,cause:u});if(this.errorHandler)return l.result=this.errorHandler(c),l;throw u}}setRoutes(t){return this.#t.__children=[...Kt(t)],{}}__normalizePathname(t){if(!this.baseUrl)return t;const r=this.__effectiveBaseUrl,o=t.startsWith("/")?new URL(r).origin+t:`./${t}`,i=new URL(o,r).href;if(i.startsWith(r))return i.slice(r.length)}addRoutes(t){return this.#t.__children=[...this.#t.__children??[],...Kt(t)],this.getRoutes()}}var Fr=$i;function Ir(e,t,r,o){const i=t.name??o?.(t);if(i&&(e.has(i)?e.get(i)?.push(t):e.set(i,[t])),Array.isArray(r))for(const a of r)a.parent=t,Ir(e,a,a.__children??a.children,o)}function er(e,t){const r=e.get(t);if(r){if(r.length>1)throw new Error(`Duplicate route with name "${t}". Try seting unique 'name' route properties.`);return r[0]}}function Ei(e,t={}){if(!(e instanceof Fr))throw new TypeError("An instance of Resolver is expected");const r=new Map,o=new Map;return(i,a)=>{let n=er(o,i);if(!n&&(o.clear(),Ir(o,e.root,e.root.__children,t.cacheKeyProvider),n=er(o,i),!n))throw new Error(`Route "${i}" not found`);let s=n.fullPath?r.get(n.fullPath):void 0;if(!s){let u=Gt(n),c=n.parent;for(;c;){const g=Gt(c);g&&(u=`${g.replace(/\/$/u,"")}/${u.replace(/^\//u,"")}`),c=c.parent}const m=Pe(u),f=Object.create(null);for(const g of m)N(g)||(f[g.name]=!0);s={keys:f,tokens:m},r.set(u,s),n.fullPath=u}let d=Dr(s.tokens,{encode:encodeURIComponent,...t})(a)||"/";if(t.stringifyQueryParams&&a){const u={};for(const[m,f]of Object.entries(a))!(m in s.keys)&&f&&(u[m]=f);const c=t.stringifyQueryParams(u);c&&(d+=c.startsWith("?")?c:`?${c}`)}return d}}var Ai=Ei;const Ci=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,Bt=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function zi(){function e(){return!0}return Nr(e)}function Si(){try{return Pi()?!0:Oi()?Bt?!Di():!zi():!1}catch{return!1}}function Pi(){return localStorage.getItem("vaadin.developmentmode.force")}function Oi(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function Di(){return!!(Bt&&Object.keys(Bt).map(t=>Bt[t]).filter(t=>t.productionMode).length>0)}function Nr(e,t){if(typeof e!="function")return;const r=Ci.exec(e.toString());if(r)try{e=new Function(r[1])}catch(o){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",o)}return e(t)}window.Vaadin=window.Vaadin||{};const rr=function(e,t){if(window.Vaadin.developmentMode)return Nr(e,t)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=Si());function Ti(){/*! vaadin-dev-mode:start
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

  vaadin-dev-mode:end **/}const Ri=function(){if(typeof rr=="function")return rr(Ti)};function Li(e,t=window.Vaadin??={}){t.registrations??=[],t.registrations.push({is:"@vaadin/router",version:"2.0.1"})}Li();Ri();const Ui=e=>{const t=getComputedStyle(e).getPropertyValue("animation-name");return t&&t!=="none"},Mi=(e,t)=>{const r=()=>{e.removeEventListener("animationend",r),t()};e.addEventListener("animationend",r)};async function Fi(e,t){return e.classList.add(t),await new Promise(r=>{if(Ui(e)){const o=e.getBoundingClientRect(),i=`height: ${o.bottom-o.top}px; width: ${o.right-o.left}px`;e.setAttribute("style",`position: absolute; ${i}`),Mi(e,()=>{e.classList.remove(t),e.removeAttribute("style"),r()})}else e.classList.remove(t),r()})}var or=Fi;function Vr(e){if(!e||!N(e.path))throw new Error(W('Expected route config to be an object with a "path" string property, or an array of such objects'));if(!Ot(e.action)&&!Array.isArray(e.children)&&!Ot(e.children)&&!N(e.component)&&!N(e.redirect))throw new Error(W(`Expected route config "${e.path}" to include either "component, redirect" or "action" function but none found.`));e.redirect&&["bundle","component"].forEach(t=>{t in e&&console.warn(W(`Route config "${String(e.path)}" has both "redirect" and "${t}" properties, and "redirect" will always override the latter. Did you mean to only use "${t}"?`))})}function ir(e){Kt(e).forEach(t=>Vr(t))}function Ii({next:e,...t}){return t}function jt(e,t){const r=t.__effectiveBaseUrl;return r?new URL(e.replace(/^\//u,""),r).pathname:e}function Br(e){return e.map(t=>t.path).reduce((t,r)=>r.length?`${t.replace(/\/$/u,"")}/${r.replace(/^\//u,"")}`:t,"")}function Ni(e){return Br(e.map(t=>t.route))}function R({chain:e=[],hash:t="",params:r={},pathname:o="",redirectFrom:i,resolver:a,search:n=""},s){const l=e.map(d=>d.route);return{baseUrl:a?.baseUrl??"",getUrl:(d={})=>a?jt(Or(Ni(e))({...r,...d}),a):"",hash:t,params:r,pathname:o,redirectFrom:i,route:s??(Array.isArray(l)?l.at(-1):void 0)??null,routes:l,search:n,searchParams:new URLSearchParams(n)}}function ar(e,t){const r={...e.params};return{redirect:{from:e.pathname,params:r,pathname:t}}}function Vi(e,t){if(t.location=R(e),e.chain){const r=e.chain.map(o=>o.route).indexOf(e.route);e.chain[r].element=t}return t}function Ht(e,t,...r){if(typeof e=="function")return e.apply(t,r)}function nr(e,t,...r){return o=>o&&tt(o)&&("cancel"in o||"redirect"in o)?o:Ht(t?.[e],t,...r)}function Bi(e,t){if(!Array.isArray(e)&&!tt(e))throw new Error(W(`Incorrect "children" value for the route ${String(t.path)}: expected array or object, but got ${String(e)}`));const r=Kt(e);r.forEach(o=>Vr(o)),t.__children=r}function Ct(e,t){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${e}`,{cancelable:e==="go",detail:t}))}function ji(e){if(typeof e!="object")return String(e);const[t="Unknown"]=/ (.*)\]$/u.exec(String(e))??[];return t==="Object"||t==="Array"?`${t} ${JSON.stringify(e)}`:t}function Hi(e){const{port:t,protocol:r}=e,a=r==="http:"&&t==="80"||r==="https:"&&t==="443"?e.hostname:e.host;return`${r}//${a}`}function sr(e){if(e instanceof Element)return e.nodeName.toLowerCase()}function lr(e){if(e.defaultPrevented||e.button!==0||e.shiftKey||e.ctrlKey||e.altKey||e.metaKey)return;let t=e.target;const r=e instanceof MouseEvent?e.composedPath():e.path??[];for(let l=0;l<r.length;l++){const d=r[l];if("nodeName"in d&&d.nodeName.toLowerCase()==="a"){t=d;break}}for(;t&&t instanceof Node&&sr(t)!=="a";)t=t.parentNode;if(!t||sr(t)!=="a")return;const o=t;if(o.target&&o.target.toLowerCase()!=="_self"||o.hasAttribute("download")||o.hasAttribute("router-ignore")||o.pathname===window.location.pathname&&o.hash!==""||(o.origin||Hi(o))!==window.location.origin)return;const{hash:a,pathname:n,search:s}=o;Ct("go",{hash:a,pathname:n,search:s})&&e instanceof MouseEvent&&(e.preventDefault(),e.type==="click"&&window.scrollTo(0,0))}const Wi={activate(){window.document.addEventListener("click",lr)},inactivate(){window.document.removeEventListener("click",lr)}};var qi=Wi;function cr(e){if(e.state==="vaadin-router-ignore")return;const{hash:t,pathname:r,search:o}=window.location;Ct("go",{hash:t,pathname:r,search:o})}const Ki={activate(){window.addEventListener("popstate",cr)},inactivate(){window.removeEventListener("popstate",cr)}};var Gi=Ki;let dr=[];const Yi={CLICK:qi,POPSTATE:Gi};function ur(e=[]){dr.forEach(t=>t.inactivate()),e.forEach(t=>t.activate()),dr=e}const Zi=256;function $t(){return{cancel:!0}}const hr={__renderId:-1,params:{},route:{__synthetic:!0,children:[],path:"",action(){}},pathname:"",async next(){return rt}};class Xi extends Fr{location=R({resolver:this});ready=Promise.resolve(this.location);#r=new WeakSet;#t=new WeakSet;#d=this.#v.bind(this);#n=0;#a;__previousContext;#s;#o=null;#e=null;constructor(t,r){const i=document.head.querySelector("base")?.getAttribute("href");super([],{baseUrl:i?new URL(i,document.URL).href.replace(/[^/]*$/u,""):void 0,...r,resolveRoute:async a=>await this.#y(a)}),ur(Object.values(Yi)),this.setOutlet(t),this.subscribe()}async#y(t){const{route:r}=t;if(Ot(r.children)){let i=await r.children(Ii(t));Ot(r.children)||({children:i}=r),Bi(i,r)}const o={component:i=>{const a=document.createElement(i);return this.#t.add(a),a},prevent:$t,redirect:i=>ar(t,i)};return await Promise.resolve().then(async()=>{if(this.#i(t))return await Ht(r.action,r,t,o)}).then(i=>{if(i!=null&&(typeof i=="object"||typeof i=="symbol")&&(i instanceof HTMLElement||i===rt||tt(i)&&"redirect"in i))return i;if(N(r.redirect))return o.redirect(r.redirect)}).then(i=>{if(i!=null)return i;if(N(r.component))return o.component(r.component)})}setOutlet(t){t&&this.#b(t),this.#a=t}getOutlet(){return this.#a}async setRoutes(t,r=!1){return this.__previousContext=void 0,this.#s=void 0,ir(t),super.setRoutes(t),r||this.#v(),await this.ready}addRoutes(t){return ir(t),super.addRoutes(t)}async render(t,r=!1){this.#n+=1;const o=this.#n,i={...hr,...N(t)?{hash:"",search:"",pathname:t}:t,__renderId:o};return this.ready=this.#w(i,r),await this.ready}async#w(t,r){const{__renderId:o}=t;try{const i=await this.resolve(t),a=await this.#l(i);if(!this.#i(a))return this.location;const n=this.__previousContext;if(a===n)return this.#c(n,!0),this.location;if(this.location=R(a),r&&this.#c(a,o===1),Ct("location-changed",{router:this,location:this.location}),a.__skipAttach)return this.#g(a,n),this.__previousContext=a,this.location;this.#k(a,n);const s=this.#z(a);if(this.#C(a),this.#A(a,n),await s,this.#i(a))return this.#$(),this.__previousContext=a,this.location}catch(i){if(o===this.#n){r&&this.#c(this.context);for(const a of this.#a?.children??[])a.remove();throw this.location=R(Object.assign(t,{resolver:this})),Ct("error",{router:this,error:i,...t}),i}}return this.location}async#l(t,r=t){const o=await this.#u(r),a=o!==r?o:t,s=jt(Br(o.chain??[]),this)===o.pathname,l=async(u,c=u.route,m)=>{const f=await u.next(!1,c,m);return f===null||f===rt?s?u:c.parent!=null?await l(u,c.parent,f):f:f},d=await l(o);if(d==null||d===rt)throw Lr(a);return d!==o?await this.#l(a,d):await this.#_(o)}async#u(t){const{result:r}=t;if(r instanceof HTMLElement)return Vi(t,r),t;if(r&&"redirect"in r){const o=await this.#m(r.redirect,t.__redirectCount,t.__renderId);return await this.#u(o)}throw r instanceof Error?r:new Error(W(`Invalid route resolution result for path "${t.pathname}". Expected redirect object or HTML element, but got: "${ji(r)}". Double check the action return value for the route.`))}async#_(t){return await this.#x(t).then(async r=>r===this.__previousContext||r===t?r:await this.#l(r))}async#x(t){const r=this.__previousContext??{},o=r.chain??[],i=t.chain??[];let a=Promise.resolve(void 0);const n=s=>ar(t,s);if(t.__divergedChainIndex=0,t.__skipAttach=!1,o.length){for(let s=0;s<Math.min(o.length,i.length)&&!(o[s].route!==i[s].route||o[s].path!==i[s].path&&o[s].element!==i[s].element||!this.#f(o[s].element,i[s].element));t.__divergedChainIndex++,s++);if(t.__skipAttach=i.length===o.length&&t.__divergedChainIndex===i.length&&this.#f(t.result,r.result),t.__skipAttach){for(let s=i.length-1;s>=0;s--)a=this.#h(a,t,{prevent:$t},o[s]);for(let s=0;s<i.length;s++)a=this.#p(a,t,{prevent:$t,redirect:n},i[s]),o[s].element.location=R(t,o[s].route)}else for(let s=o.length-1;s>=t.__divergedChainIndex;s--)a=this.#h(a,t,{prevent:$t},o[s])}if(!t.__skipAttach)for(let s=0;s<i.length;s++)s<t.__divergedChainIndex?s<o.length&&o[s].element&&(o[s].element.location=R(t,o[s].route)):(a=this.#p(a,t,{prevent:$t,redirect:n},i[s]),i[s].element&&(i[s].element.location=R(t,i[s].route)));return await a.then(async s=>{if(s&&tt(s)){if("cancel"in s&&this.__previousContext)return this.__previousContext.__renderId=t.__renderId,this.__previousContext;if("redirect"in s)return await this.#m(s.redirect,t.__redirectCount,t.__renderId)}return t})}async#h(t,r,o,i){const a=R(r);let n=await t;if(this.#i(r)&&(n=nr("onBeforeLeave",i.element,a,o,this)(n)),!(tt(n)&&"redirect"in n))return n}async#p(t,r,o,i){const a=R(r,i.route),n=await t;if(this.#i(r))return nr("onBeforeEnter",i.element,a,o,this)(n)}#f(t,r){return t instanceof Element&&r instanceof Element?this.#t.has(t)&&this.#t.has(r)?t.localName===r.localName:t===r:!1}#i(t){return t.__renderId===this.#n}async#m(t,r=0,o=0){if(r>Zi)throw new Error(W(`Too many redirects when rendering ${t.from}`));return await this.resolve({...hr,pathname:this.urlForPath(t.pathname,t.params),redirectFrom:t.from,__redirectCount:r+1,__renderId:o})}#b(t=this.#a){if(!(t instanceof Element||t instanceof DocumentFragment))throw new TypeError(W(`Expected router outlet to be a valid DOM Element | DocumentFragment (but got ${t})`))}#c({pathname:t,search:r="",hash:o=""},i){if(window.location.pathname!==t||window.location.search!==r||window.location.hash!==o){const a=i?"replaceState":"pushState";window.history[a](null,document.title,t+r+o),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}#g(t,r){let o=this.#a;for(let i=0;i<(t.__divergedChainIndex??0);i++){const a=r?.chain?.[i].element;if(a)if(a.parentNode===o)t.chain[i].element=a,o=a;else break}return o}#k(t,r){this.#b(),this.#E();const o=this.#g(t,r);this.#o=[],this.#e=Array.from(o?.children??[]).filter(a=>this.#r.has(a)&&a!==t.result);let i=o;for(let a=t.__divergedChainIndex??0;a<(t.chain?.length??0);a++){const n=t.chain[a].element;n&&(i?.appendChild(n),this.#r.add(n),i===o&&this.#o.push(n),i=n)}}#$(){if(this.#e)for(const t of this.#e)t.remove();this.#e=null,this.#o=null}#E(){if(this.#e&&this.#o){for(const t of this.#o)t.remove();this.#e=null,this.#o=null}}#A(t,r){if(!(!r?.chain||t.__divergedChainIndex==null))for(let o=r.chain.length-1;o>=t.__divergedChainIndex&&this.#i(t);o--){const i=r.chain[o].element;if(i)try{const a=R(t);Ht(i.onAfterLeave,i,a,{},this)}finally{if(this.#e?.includes(i))for(const a of i.children)a.remove()}}}#C(t){if(!(!t.chain||t.__divergedChainIndex==null))for(let r=t.__divergedChainIndex;r<t.chain.length&&this.#i(t);r++){const o=t.chain[r].element;if(o){const i=R(t,t.chain[r].route);Ht(o.onAfterEnter,o,i,{},this)}}}async#z(t){const r=this.#e?.[0],o=this.#o?.[0],i=[],{chain:a=[]}=t;let n;for(let s=a.length-1;s>=0;s--)if(a[s].route.animate){n=a[s].route.animate;break}if(r&&o&&n){const s=tt(n)&&n.leave?n.leave:"leaving",l=tt(n)&&n.enter?n.enter:"entering";i.push(or(r,s)),i.push(or(o,l))}return await Promise.all(i),t}subscribe(){window.addEventListener("vaadin-router-go",this.#d)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.#d)}#v(t){const{pathname:r,search:o,hash:i}=t instanceof CustomEvent?t.detail:window.location;N(this.__normalizePathname(r))&&(t?.preventDefault&&t.preventDefault(),this.render({pathname:r,search:o,hash:i},!0))}static setTriggers(...t){ur(t)}urlForName(t,r){return this.#s||(this.#s=Ai(this,{cacheKeyProvider(o){return"component"in o&&typeof o.component=="string"?o.component:void 0}})),jt(this.#s(t,r??void 0),this)}urlForPath(t,r){return jt(Or(t)(r??void 0),this)}static go(t){const{pathname:r,search:o,hash:i}=N(t)?new URL(t,"http://a"):t;return Ct("go",{pathname:r,search:o,hash:i})}}const nt=x`
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
`;var Ji=Object.defineProperty,Qi=Object.getOwnPropertyDescriptor,jr=(e,t,r,o)=>{for(var i=o>1?void 0:o?Qi(t,r):t,a=e.length-1,n;a>=0;a--)(n=e[a])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&Ji(t,r,i),i};let Yt=class extends O{constructor(){super(),this.deferredPrompt=null,window.addEventListener("beforeinstallprompt",e=>{e.preventDefault(),this.deferredPrompt=e}),window.addEventListener("appinstalled",()=>{this.deferredPrompt=null})}connectedCallback(){super.connectedCallback();const e=new CustomEvent("change-title",{detail:{title:"Strona Główna"},bubbles:!0,composed:!0});this.dispatchEvent(e)}async installApp(){if(!this.deferredPrompt)return;this.deferredPrompt.prompt();const{outcome:e}=await this.deferredPrompt.userChoice;e==="accepted"&&(this.deferredPrompt=null)}handleNavigation(e){const r="/mParafia/"+e.substring(1);window.history.pushState({},"",r),window.dispatchEvent(new PopStateEvent("popstate"))}render(){return b`
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

        ${this.deferredPrompt?b`
          <div class="install-section">
            <sl-button variant="primary" pill class="install-btn" @click="${this.installApp}">
              <sl-icon slot="prefix" name="download"></sl-icon>
              Zainstaluj mParafię
            </sl-button>
          </div>
        `:null}
      </main>
    `}};Yt.styles=[nt,x`
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
    `];jr([C()],Yt.prototype,"deferredPrompt",2);Yt=jr([at("app-home")],Yt);var ta=x`
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
`,ea=(e="value")=>(t,r)=>{const o=t.constructor,i=o.prototype.attributeChangedCallback;o.prototype.attributeChangedCallback=function(a,n,s){var l;const d=o.getPropertyOptions(e),u=typeof d.attribute=="string"?d.attribute:e;if(a===u){const c=d.converter||ut,f=(typeof c=="function"?c:(l=c?.fromAttribute)!=null?l:ut.fromAttribute)(s,d.type);this[e]!==f&&(this[r]=f)}i.call(this,a,n,s)}},ra=x`
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
 */const oa=_r(class extends xr{constructor(e){if(super(e),e.type!==J.PROPERTY&&e.type!==J.ATTRIBUTE&&e.type!==J.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!No(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===L||t===_)return t;const r=e.element,o=e.name;if(e.type===J.PROPERTY){if(t===r[o])return L}else if(e.type===J.BOOLEAN_ATTRIBUTE){if(!!t===r.hasAttribute(o))return L}else if(e.type===J.ATTRIBUTE&&r.getAttribute(o)===t+"")return L;return Bo(e),t}});var $=class extends D{constructor(){super(...arguments),this.formControlController=new Pr(this,{value:e=>e.checked?e.value||"on":void 0,defaultValue:e=>e.defaultChecked,setValue:(e,t)=>e.checked=t}),this.hasSlotController=new Ee(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleClick(){this.checked=!this.checked,this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleKeyDown(e){e.key==="ArrowLeft"&&(e.preventDefault(),this.checked=!1,this.emit("sl-change"),this.emit("sl-input")),e.key==="ArrowRight"&&(e.preventDefault(),this.checked=!0,this.emit("sl-change"),this.emit("sl-input"))}handleCheckedChange(){this.input.checked=this.checked,this.formControlController.updateValidity()}handleDisabledChange(){this.formControlController.setValidity(!0)}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("help-text"),t=this.helpText?!0:!!e;return b`
      <div
        class=${H({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-help-text":t})}
      >
        <label
          part="base"
          class=${H({switch:!0,"switch--checked":this.checked,"switch--disabled":this.disabled,"switch--focused":this.hasFocus,"switch--small":this.size==="small","switch--medium":this.size==="medium","switch--large":this.size==="large"})}
        >
          <input
            class="switch__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${w(this.value)}
            .checked=${oa(this.checked)}
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
    `}};$.styles=[Y,ra,ta];h([K('input[type="checkbox"]')],$.prototype,"input",2);h([C()],$.prototype,"hasFocus",2);h([p()],$.prototype,"title",2);h([p()],$.prototype,"name",2);h([p()],$.prototype,"value",2);h([p({reflect:!0})],$.prototype,"size",2);h([p({type:Boolean,reflect:!0})],$.prototype,"disabled",2);h([p({type:Boolean,reflect:!0})],$.prototype,"checked",2);h([ea("checked")],$.prototype,"defaultChecked",2);h([p({reflect:!0})],$.prototype,"form",2);h([p({type:Boolean,reflect:!0})],$.prototype,"required",2);h([p({attribute:"help-text"})],$.prototype,"helpText",2);h([G("checked",{waitUntilFirstUpdate:!0})],$.prototype,"handleCheckedChange",1);h([G("disabled",{waitUntilFirstUpdate:!0})],$.prototype,"handleDisabledChange",1);$.define("sl-switch");var ia=x`
  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`,Rt=class extends D{constructor(){super(...arguments),this.disableRole=!1,this.label=""}handleFocus(e){const t=Et(e.target);t?.toggleAttribute("data-sl-button-group__button--focus",!0)}handleBlur(e){const t=Et(e.target);t?.toggleAttribute("data-sl-button-group__button--focus",!1)}handleMouseOver(e){const t=Et(e.target);t?.toggleAttribute("data-sl-button-group__button--hover",!0)}handleMouseOut(e){const t=Et(e.target);t?.toggleAttribute("data-sl-button-group__button--hover",!1)}handleSlotChange(){const e=[...this.defaultSlot.assignedElements({flatten:!0})];e.forEach(t=>{const r=e.indexOf(t),o=Et(t);o&&(o.toggleAttribute("data-sl-button-group__button",!0),o.toggleAttribute("data-sl-button-group__button--first",r===0),o.toggleAttribute("data-sl-button-group__button--inner",r>0&&r<e.length-1),o.toggleAttribute("data-sl-button-group__button--last",r===e.length-1),o.toggleAttribute("data-sl-button-group__button--radio",o.tagName.toLowerCase()==="sl-radio-button"))})}render(){return b`
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
    `}};Rt.styles=[Y,ia];h([K("slot")],Rt.prototype,"defaultSlot",2);h([C()],Rt.prototype,"disableRole",2);h([p()],Rt.prototype,"label",2);function Et(e){var t;const r="sl-button, sl-radio-button";return(t=e.closest(r))!=null?t:e.querySelector(r)}Rt.define("sl-button-group");var aa=Object.defineProperty,na=Object.getOwnPropertyDescriptor,ft=(e,t,r,o)=>{for(var i=o>1?void 0:o?na(t,r):t,a=e.length-1,n;a>=0;a--)(n=e[a])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&aa(t,r,i),i};let q=class extends O{constructor(){super(...arguments),this.time="",this.name="",this.targetUrl="",this.category="wydarzenie",this.multiline=!1}handleClick(){if(!this.targetUrl)return;window.history.pushState({},"","/mParafia/mock-event"),window.dispatchEvent(new PopStateEvent("popstate"))}render(){const e=this.category==="wydarzenie";return b`
      <div class="item-container ${this.category} ${this.multiline?"is-multiline":""}" @click="${this.handleClick}">
        <span class="time">${this.time}</span>
        <span class="name">${this.name}</span>

        ${e?b`<sl-icon name="star-fill"></sl-icon>`:b`<sl-icon name="people-fill"></sl-icon>`}
      </div>
    `}};q.styles=[nt,x`
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
    `];ft([p({type:String})],q.prototype,"time",2);ft([p({type:String})],q.prototype,"name",2);ft([p({type:String})],q.prototype,"targetUrl",2);ft([p({type:String})],q.prototype,"category",2);ft([p({type:Boolean})],q.prototype,"multiline",2);q=ft([at("calendar-item")],q);var sa=Object.defineProperty,la=Object.getOwnPropertyDescriptor,Lt=(e,t,r,o)=>{for(var i=o>1?void 0:o?la(t,r):t,a=e.length-1,n;a>=0;a--)(n=e[a])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&sa(t,r,i),i};const Hr=[{date:"2026-03-01",title:"Zbiórka LSO",time:"09:00",category:"lso",targetUrl:"/grupy/lso"},{date:"2026-03-01",title:"Domowy Kościół",time:"16:00",category:"domowy",targetUrl:"/grupy/domowy"},{date:"2026-03-04",title:"Krąg Biblijny",time:"18:45",category:"biblijna",targetUrl:"/grupy/biblijna"},{date:"2026-03-06",title:"Droga Krzyżowa",time:"17:30",category:"wydarzenie",targetUrl:"/wydarzenia/droga-krzyzowa"},{date:"2026-03-07",title:"Oaza Dzieci Bożych",time:"11:00",category:"odb",targetUrl:"/grupy/odb"},{date:"2026-03-08",title:"Gorzkie Żale",time:"17:15",category:"wydarzenie",targetUrl:"/wydarzenia/gorzkie-zale"},{date:"2026-03-12",title:"Rada Parafialna",time:"20:00",category:"rada",targetUrl:"/grupy/rada"},{date:"2026-03-13",title:"Spotkanie Oazy",time:"19:00",category:"oaza",targetUrl:"/grupy/oaza"},{date:"2026-03-13",title:"Droga Krzyżowa",time:"17:30",category:"wydarzenie",targetUrl:"/wydarzenia/droga-krzyzowa"},{date:"2026-03-15",title:"Zbiórka LSO",time:"09:00",category:"lso",targetUrl:"/grupy/lso"},{date:"2026-03-18",title:"Krąg Biblijny",time:"18:45",category:"biblijna",targetUrl:"/grupy/biblijna"},{date:"2026-03-20",title:"Droga Krzyżowa",time:"17:30",category:"wydarzenie",targetUrl:"/wydarzenia/droga-krzyzowa"},{date:"2026-03-21",title:"Oaza Dzieci Bożych",time:"11:00",category:"odb",targetUrl:"/grupy/odb"},{date:"2026-03-22",title:"Gorzkie Żale",time:"17:15",category:"wydarzenie",targetUrl:"/wydarzenia/gorzkie-zale"},{date:"2026-03-27",title:"Droga Krzyżowa",time:"17:30",category:"wydarzenie",targetUrl:"/wydarzenia/droga-krzyzowa"},{date:"2026-03-28",title:"Spotkanie Oazy",time:"19:00",category:"oaza",targetUrl:"/grupy/oaza"},{date:"2026-03-29",title:"Niedziela Palmowa - Konkurs Palm",time:"11:00",category:"wydarzenie",targetUrl:"/wydarzenia/palmy"},{date:"2026-03-29",title:"Gorzkie Żale",time:"17:15",category:"wydarzenie",targetUrl:"/wydarzenia/gorzkie-zale"},{date:"2026-03-30",title:"Droga Krzyżowa (Oaza)",time:"17:30",category:"oaza",targetUrl:"/grupy/oaza"},{date:"2026-03-30",title:"Rada Parafialna",time:"20:00",category:"rada",targetUrl:"/grupy/rada"},{date:"2026-03-31",title:"Próba Scholi (Triduum)",time:"18:30",category:"schola",targetUrl:"/grupy/schola"},{date:"2026-04-02",title:"Msza Wieczerzy Pańskiej",time:"18:00",category:"wydarzenie",targetUrl:"/wydarzenia/wielki-czwartek"},{date:"2026-04-03",title:"Ciemna Jutrznia",time:"08:00",category:"wydarzenie",targetUrl:"/wydarzenia/jutrznia"},{date:"2026-04-03",title:"Liturgia Męki Pańskiej",time:"18:00",category:"wydarzenie",targetUrl:"/wydarzenia/wielki-piatek"},{date:"2026-04-04",title:"Święcenie Pokarmów",time:"09:00",category:"wydarzenie",targetUrl:"/wydarzenia/swiecenie"},{date:"2026-04-04",title:"Wigilia Paschalna",time:"20:00",category:"wydarzenie",targetUrl:"/wydarzenia/wigilia-paschalna"},{date:"2026-04-05",title:"Rezurekcja",time:"06:00",category:"wydarzenie",targetUrl:"/wydarzenia/wielkanoc"},{date:"2026-04-07",title:"Krąg Biblijny",time:"18:45",category:"biblijna",targetUrl:"/grupy/biblijna"},{date:"2026-04-09",title:"Rada Parafialna",time:"20:00",category:"rada",targetUrl:"/grupy/rada"},{date:"2026-04-10",title:"Próba Scholi",time:"18:30",category:"schola",targetUrl:"/grupy/schola"},{date:"2026-04-11",title:"Spotkanie Oazy",time:"19:00",category:"oaza",targetUrl:"/grupy/oaza"},{date:"2026-04-12",title:"Zbiórka LSO",time:"09:00",category:"lso",targetUrl:"/grupy/lso"},{date:"2026-04-14",title:"Krąg Biblijny",time:"18:45",category:"biblijna",targetUrl:"/grupy/biblijna"},{date:"2026-04-16",title:"Rada Parafialna",time:"20:00",category:"rada",targetUrl:"/grupy/rada"},{date:"2026-04-17",title:"Próba Scholi",time:"18:30",category:"schola",targetUrl:"/grupy/schola"},{date:"2026-04-18",title:"Oaza Dzieci Bożych",time:"11:00",category:"odb",targetUrl:"/grupy/odb"},{date:"2026-04-19",title:"Domowy Kościół",time:"16:00",category:"domowy",targetUrl:"/grupy/domowy"},{date:"2026-04-23",title:"Uroczystość św. Wojciecha (Odpust)",time:"18:00",category:"wydarzenie",targetUrl:"/wydarzenia/odpust"},{date:"2026-04-24",title:"Spotkanie Oazy",time:"19:00",category:"oaza",targetUrl:"/grupy/oaza"},{date:"2026-04-26",title:"Zbiórka LSO",time:"09:00",category:"lso",targetUrl:"/grupy/lso"},{date:"2026-05-01",title:"Rozpoczęcie Nabożeństw Majowych",time:"17:30",category:"wydarzenie",targetUrl:"/wydarzenia/majowe"},{date:"2026-05-03",title:"NMP Królowej Polski",time:"11:00",category:"wydarzenie",targetUrl:"/wydarzenia/3-maja"},{date:"2026-05-08",title:"Spotkanie Oazy",time:"19:00",category:"oaza",targetUrl:"/grupy/oaza"},{date:"2026-05-09",title:"Oaza Dzieci Bożych",time:"11:00",category:"odb",targetUrl:"/grupy/odb"},{date:"2026-05-10",title:"Zbiórka LSO",time:"09:00",category:"lso",targetUrl:"/grupy/lso"},{date:"2026-05-13",title:"Nabożeństwo Fatimskie",time:"20:00",category:"wydarzenie",targetUrl:"/wydarzenia/fatimskie"},{date:"2026-05-14",title:"Rada Parafialna",time:"20:00",category:"rada",targetUrl:"/grupy/rada"},{date:"2026-05-17",title:"Domowy Kościół",time:"16:00",category:"domowy",targetUrl:"/grupy/domowy"},{date:"2026-05-22",title:"Spotkanie Oazy",time:"19:00",category:"oaza",targetUrl:"/grupy/oaza"},{date:"2026-05-24",title:"Zesłanie Ducha Świętego",time:"11:00",category:"wydarzenie",targetUrl:"/wydarzenia/zeslanie"},{date:"2026-05-27",title:"Krąg Biblijny",time:"18:45",category:"biblijna",targetUrl:"/grupy/biblijna"},{date:"2026-05-31",title:"Zakończenie Nabożeństw Majowych",time:"17:30",category:"wydarzenie",targetUrl:"/wydarzenia/majowe"}];let it=class extends O{constructor(){super(...arguments),this.events=Hr,this.currentView="month",this.currentDate=new Date,this.showOnlyMyGroups=!1,this.myGroups=["oaza","schola"]}connectedCallback(){super.connectedCallback();const e=new CustomEvent("change-title",{detail:{title:"Kalendarz Parafialny"},bubbles:!0,composed:!0});this.dispatchEvent(e)}getFilteredEvents(){return this.showOnlyMyGroups?this.events.filter(e=>e.category==="wydarzenie"||this.myGroups.includes(e.category)):this.events}_navigate(e){const t=new Date(this.currentDate),r=e==="next"?1:-1;if(this.currentView==="month"){const o=(t.getMonth()+r+12)%12;t.setMonth(t.getMonth()+r),t.getMonth()!==o&&t.setDate(0)}else this.currentView==="week"?t.setDate(t.getDate()+7*r):this.currentView==="day"&&t.setDate(t.getDate()+r);this.currentDate=t,this.requestUpdate()}switchToDayView(e){this.currentDate=e,this.currentView="day"}changeView(e){this.currentView=e,this.currentDate=new Date,this.requestUpdate()}_getHeaderTitle(){if(this.currentView==="month")return this.currentDate.toLocaleDateString("pl-PL",{month:"long",year:"numeric"});if(this.currentView==="day")return this.currentDate.toLocaleDateString("pl-PL",{weekday:"long",day:"numeric",month:"long"});{const e=this._getStartOfWeek(this.currentDate),t=new Date(e);t.setDate(t.getDate()+6);const r=e.toLocaleDateString("pl-PL",{day:"numeric",month:"short"}),o=t.toLocaleDateString("pl-PL",{day:"numeric",month:"short"});return`${r} - ${o} ${t.getFullYear()}`}}_getStartOfWeek(e){const t=new Date(e),r=t.getDay(),o=t.getDate()-r+(r===0?-6:1);return new Date(t.setDate(o))}_isToday(e){const t=new Date;return e.getDate()===t.getDate()&&e.getMonth()===t.getMonth()&&e.getFullYear()===t.getFullYear()}_formatDateString(e){const t=e.getFullYear(),r=String(e.getMonth()+1).padStart(2,"0"),o=String(e.getDate()).padStart(2,"0");return`${t}-${r}-${o}`}render(){return b`
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
                @sl-change=${e=>{this.showOnlyMyGroups=e.target.checked,this.requestUpdate()}} >
                Tylko moje grupy i główne wydarzenia
              </sl-switch>
            </div>

      ${this.currentView==="month"?this.renderMonthView():null}
      ${this.currentView==="week"?this.renderWeekView():null}
      ${this.currentView==="day"?this.renderDayView():null}
    `}renderMonthView(){const e=this.currentDate.getFullYear(),t=this.currentDate.getMonth(),r=new Date(e,t+1,0).getDate(),o=Array.from({length:r},(s,l)=>l+1),i=new Date(e,t,1).getDay(),a=i===0?6:i-1,n=Array.from({length:a},(s,l)=>l);return b`
      <div class="grid-month">
        ${["Pn","Wt","Śr","Cz","Pt","Sb","Nd"].map(s=>b`<div class="day-name">${s}</div>`)}
        ${n.map(()=>b`<div class="day empty"></div>`)}
        ${o.map(s=>{const l=this._formatDateString(new Date(e,t,s)),d=this.getFilteredEvents().filter(c=>c.date===l),u=this._isToday(new Date(e,t,s));return b`
            <div
              class=${H({day:!0,today:u})}
              @click=${()=>this.switchToDayView(new Date(e,t,s))}
            >
              <span class="day-number">${s}</span>
              ${this.renderEventTags(d,"month")}
            </div>
          `})}
      </div>
    `}renderWeekView(){const e=this._getStartOfWeek(this.currentDate),t=Array.from({length:7},(r,o)=>{const i=new Date(e);return i.setDate(i.getDate()+o),i});return b`
      <div class="grid-week">
        ${t.map(r=>{const o=this._formatDateString(r),i=this.getFilteredEvents().filter(n=>n.date===o),a=this._isToday(r);return b`
            <div
              class=${H({"week-day":!0,today:a})}
              @click=${()=>this.switchToDayView(r)}
            >
              <div class="week-day-header">
                <div class="week-day-name">${r.toLocaleDateString("pl-PL",{weekday:"short"})}</div>
                <div class="week-day-number">${r.getDate()}</div>
              </div>

              ${i.length>0?b`
                    <div class="week-events-container">
                      ${this.renderEventTags(i,"week")}
                    </div>
                  `:b`<div class="no-events-small">Brak</div>`}
            </div>
          `})}
      </div>
    `}renderDayView(){const e=this._formatDateString(this.currentDate),t=this.getFilteredEvents().filter(o=>o.date===e),r=this._isToday(this.currentDate);return b`
      <div class="list-view">
        <div class=${H({"list-day-row":!0,today:r})}>
          <div class="list-day-header">Wydarzenia</div>

          ${t.length>0?this.renderEventTags(t,"day"):b`<span class="no-events" style="display:block; padding: 20px 0; font-size: 0.85rem; color: #666; text-align: center; font-style: italic;">Brak wydarzeń zaplanowanych na ten dzień.</span>`}
        </div>
      </div>
    `}renderEventTags(e,t){const r=t==="week"||t==="day",o=t==="day"||t==="week";return e.map(i=>b`
      <calendar-item
        time="${i.time}"
        name="${i.title}"
        category="${i.category}"
        ?multiline=${r}
        targetUrl="${o?i.targetUrl:""}"

        @click=${a=>{t==="week"&&a.stopPropagation()}}
      >
      </calendar-item>
    `)}};it.styles=[nt,x`
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
    `];Lt([C()],it.prototype,"events",2);Lt([C()],it.prototype,"currentView",2);Lt([C()],it.prototype,"currentDate",2);Lt([C()],it.prototype,"showOnlyMyGroups",2);it=Lt([at("app-calendar")],it);var ca=Object.defineProperty,da=Object.getOwnPropertyDescriptor,Wr=(e,t,r,o)=>{for(var i=o>1?void 0:o?da(t,r):t,a=e.length-1,n;a>=0;a--)(n=e[a])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&ca(t,r,i),i};let Zt=class extends O{constructor(){super(...arguments),this.groups=[{id:"domowy",name:"Domowy Kościół",photoUrl:"dk_small.jpg"},{id:"lso",name:"Liturgiczna Służba Ołtarza",photoUrl:"lso_small.jpg"},{id:"schola",name:'Schola "Aniołki Królowej"',photoUrl:"schola_small.jpg"},{id:"biblijna",name:"Grupa biblijna",photoUrl:"biblijna_small.jpg"},{id:"oaza",name:"Oaza",photoUrl:"oaza_small.png"},{id:"rada",name:"Rada Parafialna",photoUrl:"rada_small.png"},{id:"odb",name:"Oaza Dzieci Bożych",photoUrl:"odb_small.png"}]}connectedCallback(){super.connectedCallback(),this.dispatchEvent(new CustomEvent("change-title",{detail:{title:"Grupy Parafialne"},bubbles:!0,composed:!0}))}render(){return b`
      <div class="groups-grid">
        ${this.groups.map(e=>b`
          <div class="group-card" @click=${()=>window.location.href="/mParafia/mock-event"}>
            <div class="group-photo">
              <img src="/mParafia/photos/${e.photoUrl}" alt="${e.name}">
            </div>
            <div class="group-info">
              <h3>${e.name}</h3>
            </div>
            <sl-icon name="chevron-right" style="margin-left: auto; color: var(--color-wood-medium);"></sl-icon>
          </div>
        `)}
      </div>
    `}};Zt.styles=[nt,x`
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
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #fff;
        flex-shrink: 0;
      }

      .group-photo img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .group-info h3 {
        margin: 0;
        color: var(--color-wood-dark);
        font-size: 1.1rem;
      }
    `];Wr([C()],Zt.prototype,"groups",2);Zt=Wr([at("app-groups")],Zt);var ua=Object.defineProperty,ha=Object.getOwnPropertyDescriptor,qr=(e,t,r,o)=>{for(var i=o>1?void 0:o?ha(t,r):t,a=e.length-1,n;a>=0;a--)(n=e[a])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&ua(t,r,i),i};let Xt=class extends O{constructor(){super(...arguments),this.events=Hr}connectedCallback(){super.connectedCallback(),this.dispatchEvent(new CustomEvent("change-title",{detail:{title:"Nadchodzące Wydarzenia"},bubbles:!0,composed:!0}))}getGroupedEvents(){const e={},t=new Date().toISOString().split("T")[0];return[...this.events].filter(o=>o.date>=t).sort((o,i)=>new Date(o.date).getTime()-new Date(i.date).getTime()).forEach(o=>{e[o.date]||(e[o.date]=[]),e[o.date].push(o)}),e}formatDate(e){return new Date(e).toLocaleDateString("pl-PL",{weekday:"long",day:"numeric",month:"long"})}render(){const e=this.getGroupedEvents();return b`
      ${Object.keys(e).map(t=>b`
        <div class="day-section">
          <div class="day-header">${this.formatDate(t)}</div>
          <div class="events-list">
            ${e[t].map(r=>b`
              <calendar-item
                time="${r.time}"
                name="${r.title}"
                category="${r.category}"
                multiline
                @click=${()=>window.location.href="/mParafia/mock-event"}
              ></calendar-item>
            `)}
          </div>
        </div>
      `)}
    `}};Xt.styles=[nt,x`
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
    `];qr([C()],Xt.prototype,"events",2);Xt=qr([at("app-events")],Xt);var pa=Object.getOwnPropertyDescriptor,fa=(e,t,r,o)=>{for(var i=o>1?void 0:o?pa(t,r):t,a=e.length-1,n;a>=0;a--)(n=e[a])&&(i=n(i)||i);return i};let me=class extends O{connectedCallback(){super.connectedCallback(),this.dispatchEvent(new CustomEvent("change-title",{detail:{title:"Strona w przygotowaniu"},bubbles:!0,composed:!0}))}_navHome(){window.history.pushState({},"","/mParafia/"),window.dispatchEvent(new PopStateEvent("popstate"))}render(){return b`
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
    `}};me.styles=[nt,x`
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

    `];me=fa([at("app-event-mock-detail")],me);var ma=Object.defineProperty,ba=Object.getOwnPropertyDescriptor,De=(e,t,r,o)=>{for(var i=o>1?void 0:o?ba(t,r):t,a=e.length-1,n;a>=0;a--)(n=e[a])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&ma(t,r,i),i};const ga="/mParafia/";de(`${ga}shoelace-assets`);let Dt=class extends O{constructor(){super(...arguments),this.pageTitle="mParafia",this.touchStartX=0,this.touchStartY=0,this.touchEndX=0,this.touchEndY=0,this.handleTouchStart=e=>{this.touchStartX=e.changedTouches[0].screenX,this.touchStartY=e.changedTouches[0].screenY},this.handleTouchMove=e=>{this.touchStartX<=30&&e.preventDefault()},this.handleTouchEnd=e=>{this.touchEndX=e.changedTouches[0].screenX,this.touchEndY=e.changedTouches[0].screenY,this.checkSwipe()}}connectedCallback(){super.connectedCallback(),window.addEventListener("touchstart",this.handleTouchStart,{passive:!0}),window.addEventListener("touchmove",this.handleTouchMove,{passive:!1}),window.addEventListener("touchend",this.handleTouchEnd,{passive:!0})}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("touchstart",this.handleTouchStart),window.removeEventListener("touchmove",this.handleTouchMove),window.removeEventListener("touchend",this.handleTouchEnd)}checkSwipe(){const e=this.touchEndX-this.touchStartX,t=this.touchEndY-this.touchStartY;if(Math.abs(t)>Math.abs(e))return;this.touchStartX<=40&&e>50&&this.drawer&&!this.drawer.open&&this.drawer.show(),this.drawer&&this.drawer.open&&e<-50&&this.drawer.hide()}firstUpdated(){const e=this.shadowRoot?.querySelector("#router-outlet"),t="/mParafia/";new Xi(e,{baseUrl:t}).setRoutes([{path:"/",component:"app-home"},{path:"/kalendarz",component:"app-calendar"},{path:"/grupy",component:"app-groups"},{path:"/wydarzenia",component:"app-events"},{path:"/mock-event",component:"app-event-mock-detail"},{path:"(.*)",redirect:"/"}])}handleTitleChange(e){this.pageTitle=e.detail.title}openMenu(){this.drawer.show()}handleNavigation(e){this.drawer.hide();const r="/mParafia/"+e.substring(1);window.history.pushState({},"",r),window.dispatchEvent(new PopStateEvent("popstate"))}render(){return b`
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
    `}};Dt.styles=[nt,x`
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
    `];De([K("sl-drawer")],Dt.prototype,"drawer",2);De([C()],Dt.prototype,"pageTitle",2);Dt=De([at("app-index")],Dt);
//# sourceMappingURL=index-Cnqzl032.js.map
