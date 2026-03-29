(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function r(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(n){if(n.ep)return;n.ep=!0;const i=r(n);fetch(n.href,i)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Tt=globalThis,pe=Tt.ShadowRoot&&(Tt.ShadyCSS===void 0||Tt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,fe=Symbol(),Pe=new WeakMap;let cr=class{constructor(t,r,o){if(this._$cssResult$=!0,o!==fe)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(pe&&t===void 0){const o=r!==void 0&&r.length===1;o&&(t=Pe.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&Pe.set(r,t))}return t}toString(){return this.cssText}};const Ir=e=>new cr(typeof e=="string"?e:e+"",void 0,fe),A=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((o,n,i)=>o+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+e[i+1],e[0]);return new cr(r,e,fe)},Nr=(e,t)=>{if(pe)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const o=document.createElement("style"),n=Tt.litNonce;n!==void 0&&o.setAttribute("nonce",n),o.textContent=r.cssText,e.appendChild(o)}},ze=pe?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const o of t.cssRules)r+=o.cssText;return Ir(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Vr,defineProperty:Br,getOwnPropertyDescriptor:Hr,getOwnPropertyNames:jr,getOwnPropertySymbols:Wr,getPrototypeOf:qr}=Object,Kt=globalThis,De=Kt.trustedTypes,Kr=De?De.emptyScript:"",Yr=Kt.reactiveElementPolyfillSupport,xt=(e,t)=>e,Vt={toAttribute(e,t){switch(t){case Boolean:e=e?Kr:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},be=(e,t)=>!Vr(e,t),Le={attribute:!0,type:String,converter:Vt,reflect:!1,useDefault:!1,hasChanged:be};Symbol.metadata??=Symbol("metadata"),Kt.litPropertyMetadata??=new WeakMap;let rt=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,r=Le){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(t,r),!r.noAccessor){const o=Symbol(),n=this.getPropertyDescriptor(t,o,r);n!==void 0&&Br(this.prototype,t,n)}}static getPropertyDescriptor(t,r,o){const{get:n,set:i}=Hr(this.prototype,t)??{get(){return this[r]},set(a){this[r]=a}};return{get:n,set(a){const s=n?.call(this);i?.call(this,a),this.requestUpdate(t,s,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Le}static _$Ei(){if(this.hasOwnProperty(xt("elementProperties")))return;const t=qr(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(xt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(xt("properties"))){const r=this.properties,o=[...jr(r),...Wr(r)];for(const n of o)this.createProperty(n,r[n])}const t=this[Symbol.metadata];if(t!==null){const r=litPropertyMetadata.get(t);if(r!==void 0)for(const[o,n]of r)this.elementProperties.set(o,n)}this._$Eh=new Map;for(const[r,o]of this.elementProperties){const n=this._$Eu(r,o);n!==void 0&&this._$Eh.set(n,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const n of o)r.unshift(ze(n))}else t!==void 0&&r.push(ze(t));return r}static _$Eu(t,r){const o=r.attribute;return o===!1?void 0:typeof o=="string"?o:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,r=this.constructor.elementProperties;for(const o of r.keys())this.hasOwnProperty(o)&&(t.set(o,this[o]),delete this[o]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Nr(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,r,o){this._$AK(t,o)}_$ET(t,r){const o=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,o);if(n!==void 0&&o.reflect===!0){const i=(o.converter?.toAttribute!==void 0?o.converter:Vt).toAttribute(r,o.type);this._$Em=t,i==null?this.removeAttribute(n):this.setAttribute(n,i),this._$Em=null}}_$AK(t,r){const o=this.constructor,n=o._$Eh.get(t);if(n!==void 0&&this._$Em!==n){const i=o.getPropertyOptions(n),a=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:Vt;this._$Em=n;const s=a.fromAttribute(r,i.type);this[n]=s??this._$Ej?.get(n)??s,this._$Em=null}}requestUpdate(t,r,o,n=!1,i){if(t!==void 0){const a=this.constructor;if(n===!1&&(i=this[t]),o??=a.getPropertyOptions(t),!((o.hasChanged??be)(i,r)||o.useDefault&&o.reflect&&i===this._$Ej?.get(t)&&!this.hasAttribute(a._$Eu(t,o))))return;this.C(t,r,o)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,r,{useDefault:o,reflect:n,wrapped:i},a){o&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,a??r??this[t]),i!==!0||a!==void 0)||(this._$AL.has(t)||(this.hasUpdated||o||(r=void 0),this._$AL.set(t,r)),n===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[n,i]of this._$Ep)this[n]=i;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[n,i]of o){const{wrapped:a}=i,s=this[n];a!==!0||this._$AL.has(n)||s===void 0||this.C(n,void 0,i,s)}}let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),this._$EO?.forEach(o=>o.hostUpdate?.()),this.update(r)):this._$EM()}catch(o){throw t=!1,this._$EM(),o}t&&this._$AE(r)}willUpdate(t){}_$AE(t){this._$EO?.forEach(r=>r.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(r=>this._$ET(r,this[r])),this._$EM()}updated(t){}firstUpdated(t){}};rt.elementStyles=[],rt.shadowRootOptions={mode:"open"},rt[xt("elementProperties")]=new Map,rt[xt("finalized")]=new Map,Yr?.({ReactiveElement:rt}),(Kt.reactiveElementVersions??=[]).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const me=globalThis,Oe=e=>e,Bt=me.trustedTypes,Re=Bt?Bt.createPolicy("lit-html",{createHTML:e=>e}):void 0,dr="$lit$",N=`lit$${Math.random().toFixed(9).slice(2)}$`,ur="?"+N,Gr=`<${ur}>`,X=document,At=()=>X.createComment(""),kt=e=>e===null||typeof e!="object"&&typeof e!="function",ge=Array.isArray,Xr=e=>ge(e)||typeof e?.[Symbol.iterator]=="function",Jt=`[ 	
\f\r]`,pt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Te=/-->/g,Me=/>/g,W=RegExp(`>|${Jt}(?:([^\\s"'>=/]+)(${Jt}*=${Jt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ue=/'/g,Fe=/"/g,hr=/^(?:script|style|textarea|title)$/i,Zr=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),v=Zr(1),Z=Symbol.for("lit-noChange"),_=Symbol.for("lit-nothing"),Ie=new WeakMap,Y=X.createTreeWalker(X,129);function pr(e,t){if(!ge(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Re!==void 0?Re.createHTML(t):t}const Jr=(e,t)=>{const r=e.length-1,o=[];let n,i=t===2?"<svg>":t===3?"<math>":"",a=pt;for(let s=0;s<r;s++){const l=e[s];let u,d,c=-1,b=0;for(;b<l.length&&(a.lastIndex=b,d=a.exec(l),d!==null);)b=a.lastIndex,a===pt?d[1]==="!--"?a=Te:d[1]!==void 0?a=Me:d[2]!==void 0?(hr.test(d[2])&&(n=RegExp("</"+d[2],"g")),a=W):d[3]!==void 0&&(a=W):a===W?d[0]===">"?(a=n??pt,c=-1):d[1]===void 0?c=-2:(c=a.lastIndex-d[2].length,u=d[1],a=d[3]===void 0?W:d[3]==='"'?Fe:Ue):a===Fe||a===Ue?a=W:a===Te||a===Me?a=pt:(a=W,n=void 0);const f=a===W&&e[s+1].startsWith("/>")?" ":"";i+=a===pt?l+Gr:c>=0?(o.push(u),l.slice(0,c)+dr+l.slice(c)+N+f):l+N+(c===-2?s:f)}return[pr(e,i+(e[r]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),o]};class Ct{constructor({strings:t,_$litType$:r},o){let n;this.parts=[];let i=0,a=0;const s=t.length-1,l=this.parts,[u,d]=Jr(t,r);if(this.el=Ct.createElement(u,o),Y.currentNode=this.el.content,r===2||r===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(n=Y.nextNode())!==null&&l.length<s;){if(n.nodeType===1){if(n.hasAttributes())for(const c of n.getAttributeNames())if(c.endsWith(dr)){const b=d[a++],f=n.getAttribute(c).split(N),m=/([.?@])?(.*)/.exec(b);l.push({type:1,index:i,name:m[2],strings:f,ctor:m[1]==="."?to:m[1]==="?"?eo:m[1]==="@"?ro:Yt}),n.removeAttribute(c)}else c.startsWith(N)&&(l.push({type:6,index:i}),n.removeAttribute(c));if(hr.test(n.tagName)){const c=n.textContent.split(N),b=c.length-1;if(b>0){n.textContent=Bt?Bt.emptyScript:"";for(let f=0;f<b;f++)n.append(c[f],At()),Y.nextNode(),l.push({type:2,index:++i});n.append(c[b],At())}}}else if(n.nodeType===8)if(n.data===ur)l.push({type:2,index:i});else{let c=-1;for(;(c=n.data.indexOf(N,c+1))!==-1;)l.push({type:7,index:i}),c+=N.length-1}i++}}static createElement(t,r){const o=X.createElement("template");return o.innerHTML=t,o}}function it(e,t,r=e,o){if(t===Z)return t;let n=o!==void 0?r._$Co?.[o]:r._$Cl;const i=kt(t)?void 0:t._$litDirective$;return n?.constructor!==i&&(n?._$AO?.(!1),i===void 0?n=void 0:(n=new i(e),n._$AT(e,r,o)),o!==void 0?(r._$Co??=[])[o]=n:r._$Cl=n),n!==void 0&&(t=it(e,n._$AS(e,t.values),n,o)),t}class Qr{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:r},parts:o}=this._$AD,n=(t?.creationScope??X).importNode(r,!0);Y.currentNode=n;let i=Y.nextNode(),a=0,s=0,l=o[0];for(;l!==void 0;){if(a===l.index){let u;l.type===2?u=new zt(i,i.nextSibling,this,t):l.type===1?u=new l.ctor(i,l.name,l.strings,this,t):l.type===6&&(u=new oo(i,this,t)),this._$AV.push(u),l=o[++s]}a!==l?.index&&(i=Y.nextNode(),a++)}return Y.currentNode=X,n}p(t){let r=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(t,o,r),r+=o.strings.length-2):o._$AI(t[r])),r++}}class zt{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,r,o,n){this.type=2,this._$AH=_,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=o,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&t?.nodeType===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=it(this,t,r),kt(t)?t===_||t==null||t===""?(this._$AH!==_&&this._$AR(),this._$AH=_):t!==this._$AH&&t!==Z&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Xr(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==_&&kt(this._$AH)?this._$AA.nextSibling.data=t:this.T(X.createTextNode(t)),this._$AH=t}$(t){const{values:r,_$litType$:o}=t,n=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=Ct.createElement(pr(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===n)this._$AH.p(r);else{const i=new Qr(n,this),a=i.u(this.options);i.p(r),this.T(a),this._$AH=i}}_$AC(t){let r=Ie.get(t.strings);return r===void 0&&Ie.set(t.strings,r=new Ct(t)),r}k(t){ge(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let o,n=0;for(const i of t)n===r.length?r.push(o=new zt(this.O(At()),this.O(At()),this,this.options)):o=r[n],o._$AI(i),n++;n<r.length&&(this._$AR(o&&o._$AB.nextSibling,n),r.length=n)}_$AR(t=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);t!==this._$AB;){const o=Oe(t).nextSibling;Oe(t).remove(),t=o}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class Yt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,o,n,i){this.type=1,this._$AH=_,this._$AN=void 0,this.element=t,this.name=r,this._$AM=n,this.options=i,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=_}_$AI(t,r=this,o,n){const i=this.strings;let a=!1;if(i===void 0)t=it(this,t,r,0),a=!kt(t)||t!==this._$AH&&t!==Z,a&&(this._$AH=t);else{const s=t;let l,u;for(t=i[0],l=0;l<i.length-1;l++)u=it(this,s[o+l],r,l),u===Z&&(u=this._$AH[l]),a||=!kt(u)||u!==this._$AH[l],u===_?t=_:t!==_&&(t+=(u??"")+i[l+1]),this._$AH[l]=u}a&&!n&&this.j(t)}j(t){t===_?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class to extends Yt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===_?void 0:t}}class eo extends Yt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==_)}}class ro extends Yt{constructor(t,r,o,n,i){super(t,r,o,n,i),this.type=5}_$AI(t,r=this){if((t=it(this,t,r,0)??_)===Z)return;const o=this._$AH,n=t===_&&o!==_||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,i=t!==_&&(o===_||n);n&&this.element.removeEventListener(this.name,this,o),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class oo{constructor(t,r,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){it(this,t)}}const no=me.litHtmlPolyfillSupport;no?.(Ct,zt),(me.litHtmlVersions??=[]).push("3.3.2");const io=(e,t,r)=>{const o=r?.renderBefore??t;let n=o._$litPart$;if(n===void 0){const i=r?.renderBefore??null;o._$litPart$=n=new zt(t.insertBefore(At(),i),i,void 0,r??{})}return n._$AI(e),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ve=globalThis;let D=class extends rt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=io(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Z}};D._$litElement$=!0,D.finalized=!0,ve.litElementHydrateSupport?.({LitElement:D});const ao=ve.litElementPolyfillSupport;ao?.({LitElement:D});(ve.litElementVersions??=[]).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const st=e=>(t,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const so={attribute:!0,type:String,converter:Vt,reflect:!1,hasChanged:be},lo=(e=so,t,r)=>{const{kind:o,metadata:n}=r;let i=globalThis.litPropertyMetadata.get(n);if(i===void 0&&globalThis.litPropertyMetadata.set(n,i=new Map),o==="setter"&&((e=Object.create(e)).wrapped=!0),i.set(r.name,e),o==="accessor"){const{name:a}=r;return{set(s){const l=t.get.call(this);t.set.call(this,s),this.requestUpdate(a,l,e,!0,s)},init(s){return s!==void 0&&this.C(a,void 0,e,s),s}}}if(o==="setter"){const{name:a}=r;return function(s){const l=this[a];t.call(this,s),this.requestUpdate(a,l,e,!0,s)}}throw Error("Unsupported decorator location: "+o)};function p(e){return(t,r)=>typeof r=="object"?lo(e,t,r):((o,n,i)=>{const a=n.hasOwnProperty(i);return n.constructor.createProperty(i,o),a?Object.getOwnPropertyDescriptor(n,i):void 0})(e,t,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function F(e){return p({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const co=(e,t,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,r),r);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function J(e,t){return(r,o,n)=>{const i=a=>a.renderRoot?.querySelector(e)??null;return co(r,o,{get(){return i(this)}})}}var ie="";function ae(e){ie=e}function uo(e=""){if(!ie){const t=[...document.getElementsByTagName("script")],r=t.find(o=>o.hasAttribute("data-shoelace"));if(r)ae(r.getAttribute("data-shoelace"));else{const o=t.find(i=>/shoelace(\.min)?\.js($|\?)/.test(i.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(i.src));let n="";o&&(n=o.getAttribute("src")),ae(n.split("/").slice(0,-1).join("/"))}}return ie.replace(/\/$/,"")+(e?`/${e.replace(/^\//,"")}`:"")}var ho={name:"default",resolver:e=>uo(`assets/icons/${e}.svg`)},po=ho,Ne={caret:`
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
  `},fo={name:"system",resolver:e=>e in Ne?`data:image/svg+xml,${encodeURIComponent(Ne[e])}`:""},bo=fo,mo=[po,bo],se=[];function go(e){se.push(e)}function vo(e){se=se.filter(t=>t!==e)}function Ve(e){return mo.find(t=>t.name===e)}var yo=A`
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
`,fr=Object.defineProperty,wo=Object.defineProperties,_o=Object.getOwnPropertyDescriptor,$o=Object.getOwnPropertyDescriptors,Be=Object.getOwnPropertySymbols,xo=Object.prototype.hasOwnProperty,Eo=Object.prototype.propertyIsEnumerable,Qt=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),ye=e=>{throw TypeError(e)},He=(e,t,r)=>t in e?fr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,lt=(e,t)=>{for(var r in t||(t={}))xo.call(t,r)&&He(e,r,t[r]);if(Be)for(var r of Be(t))Eo.call(t,r)&&He(e,r,t[r]);return e},we=(e,t)=>wo(e,$o(t)),h=(e,t,r,o)=>{for(var n=o>1?void 0:o?_o(t,r):t,i=e.length-1,a;i>=0;i--)(a=e[i])&&(n=(o?a(t,r,n):a(n))||n);return o&&n&&fr(t,r,n),n},br=(e,t,r)=>t.has(e)||ye("Cannot "+r),Ao=(e,t,r)=>(br(e,t,"read from private field"),t.get(e)),ko=(e,t,r)=>t.has(e)?ye("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),Co=(e,t,r,o)=>(br(e,t,"write to private field"),t.set(e,r),r),So=function(e,t){this[0]=e,this[1]=t},Po=e=>{var t=e[Qt("asyncIterator")],r=!1,o,n={};return t==null?(t=e[Qt("iterator")](),o=i=>n[i]=a=>t[i](a)):(t=t.call(e),o=i=>n[i]=a=>{if(r){if(r=!1,i==="throw")throw a;return a}return r=!0,{done:!1,value:new So(new Promise(s=>{var l=t[i](a);l instanceof Object||ye("Object expected"),s(l)}),1)}}),n[Qt("iterator")]=()=>n,o("next"),"throw"in t?o("throw"):n.throw=i=>{throw i},"return"in t&&o("return"),n};function ct(e,t){const r=lt({waitUntilFirstUpdate:!1},t);return(o,n)=>{const{update:i}=o,a=Array.isArray(e)?e:[e];o.update=function(s){a.forEach(l=>{const u=l;if(s.has(u)){const d=s.get(u),c=this[u];d!==c&&(!r.waitUntilFirstUpdate||this.hasUpdated)&&this[n](d,c)}}),i.call(this,s)}}}var Q=A`
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
`,Mt,L=class extends D{constructor(){super(),ko(this,Mt,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([e,t])=>{this.constructor.define(e,t)})}emit(e,t){const r=new CustomEvent(e,lt({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(r),r}static define(e,t=this,r={}){const o=customElements.get(e);if(!o){try{customElements.define(e,t,r)}catch{customElements.define(e,class extends t{},r)}return}let n=" (unknown version)",i=n;"version"in t&&t.version&&(n=" v"+t.version),"version"in o&&o.version&&(i=" v"+o.version),!(n&&i&&n===i)&&console.warn(`Attempted to register <${e}>${n}, but <${e}>${i} has already been registered.`)}attributeChangedCallback(e,t,r){Ao(this,Mt)||(this.constructor.elementProperties.forEach((o,n)=>{o.reflect&&this[n]!=null&&this.initialReflectedProperties.set(n,this[n])}),Co(this,Mt,!0)),super.attributeChangedCallback(e,t,r)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,r)=>{e.has(r)&&this[r]==null&&(this[r]=t)})}};Mt=new WeakMap;L.version="2.20.1";L.dependencies={};h([p()],L.prototype,"dir",2);h([p()],L.prototype,"lang",2);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const zo=(e,t)=>e?._$litType$!==void 0;var ft=Symbol(),Lt=Symbol(),te,ee=new Map,O=class extends L{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(e,t){var r;let o;if(t?.spriteSheet)return this.svg=v`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,this.svg;try{if(o=await fetch(e,{mode:"cors"}),!o.ok)return o.status===410?ft:Lt}catch{return Lt}try{const n=document.createElement("div");n.innerHTML=await o.text();const i=n.firstElementChild;if(((r=i?.tagName)==null?void 0:r.toLowerCase())!=="svg")return ft;te||(te=new DOMParser);const s=te.parseFromString(i.outerHTML,"text/html").body.querySelector("svg");return s?(s.part.add("svg"),document.adoptNode(s)):ft}catch{return ft}}connectedCallback(){super.connectedCallback(),go(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),vo(this)}getIconSource(){const e=Ve(this.library);return this.name&&e?{url:e.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var e;const{url:t,fromLibrary:r}=this.getIconSource(),o=r?Ve(this.library):void 0;if(!t){this.svg=null;return}let n=ee.get(t);if(n||(n=this.resolveIcon(t,o),ee.set(t,n)),!this.initialRender)return;const i=await n;if(i===Lt&&ee.delete(t),t===this.getIconSource().url){if(zo(i)){if(this.svg=i,o){await this.updateComplete;const a=this.shadowRoot.querySelector("[part='svg']");typeof o.mutator=="function"&&a&&o.mutator(a)}return}switch(i){case Lt:case ft:this.svg=null,this.emit("sl-error");break;default:this.svg=i.cloneNode(!0),(e=o?.mutator)==null||e.call(o,this.svg),this.emit("sl-load")}}}render(){return this.svg}};O.styles=[Q,yo];h([F()],O.prototype,"svg",2);h([p({reflect:!0})],O.prototype,"name",2);h([p()],O.prototype,"src",2);h([p()],O.prototype,"label",2);h([p({reflect:!0})],O.prototype,"library",2);h([ct("label")],O.prototype,"handleLabelChange",1);h([ct(["name","src","library"])],O.prototype,"setIcon",1);O.define("sl-icon");var Do=A`
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
`;function*_e(e=document.activeElement){e!=null&&(yield e,"shadowRoot"in e&&e.shadowRoot&&e.shadowRoot.mode!=="closed"&&(yield*Po(_e(e.shadowRoot.activeElement))))}function Lo(){return[..._e()].pop()}var je=new WeakMap;function mr(e){let t=je.get(e);return t||(t=window.getComputedStyle(e,null),je.set(e,t)),t}function Oo(e){if(typeof e.checkVisibility=="function")return e.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});const t=mr(e);return t.visibility!=="hidden"&&t.display!=="none"}function Ro(e){const t=mr(e),{overflowY:r,overflowX:o}=t;return r==="scroll"||o==="scroll"?!0:r!=="auto"||o!=="auto"?!1:e.scrollHeight>e.clientHeight&&r==="auto"||e.scrollWidth>e.clientWidth&&o==="auto"}function To(e){const t=e.tagName.toLowerCase(),r=Number(e.getAttribute("tabindex"));if(e.hasAttribute("tabindex")&&(isNaN(r)||r<=-1)||e.hasAttribute("disabled")||e.closest("[inert]"))return!1;if(t==="input"&&e.getAttribute("type")==="radio"){const i=e.getRootNode(),a=`input[type='radio'][name="${e.getAttribute("name")}"]`,s=i.querySelector(`${a}:checked`);return s?s===e:i.querySelector(a)===e}return Oo(e)?(t==="audio"||t==="video")&&e.hasAttribute("controls")||e.hasAttribute("tabindex")||e.hasAttribute("contenteditable")&&e.getAttribute("contenteditable")!=="false"||["button","input","select","textarea","a","audio","video","summary","iframe"].includes(t)?!0:Ro(e):!1}function Mo(e,t){var r;return((r=e.getRootNode({composed:!0}))==null?void 0:r.host)!==t}function We(e){const t=new WeakMap,r=[];function o(n){if(n instanceof Element){if(n.hasAttribute("inert")||n.closest("[inert]")||t.has(n))return;t.set(n,!0),!r.includes(n)&&To(n)&&r.push(n),n instanceof HTMLSlotElement&&Mo(n,e)&&n.assignedElements({flatten:!0}).forEach(i=>{o(i)}),n.shadowRoot!==null&&n.shadowRoot.mode==="open"&&o(n.shadowRoot)}for(const i of n.children)o(i)}return o(e),r.sort((n,i)=>{const a=Number(n.getAttribute("tabindex"))||0;return(Number(i.getAttribute("tabindex"))||0)-a})}var bt=[],Uo=class{constructor(e){this.tabDirection="forward",this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=t=>{var r;if(t.key!=="Tab"||this.isExternalActivated||!this.isActive())return;const o=Lo();if(this.previousFocus=o,this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;t.shiftKey?this.tabDirection="backward":this.tabDirection="forward";const n=We(this.element);let i=n.findIndex(s=>s===o);this.previousFocus=this.currentFocus;const a=this.tabDirection==="forward"?1:-1;for(;;){i+a>=n.length?i=0:i+a<0?i=n.length-1:i+=a,this.previousFocus=this.currentFocus;const s=n[i];if(this.tabDirection==="backward"&&this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus)||s&&this.possiblyHasTabbableChildren(s))return;t.preventDefault(),this.currentFocus=s,(r=this.currentFocus)==null||r.focus({preventScroll:!1});const l=[..._e()];if(l.includes(this.currentFocus)||!l.includes(this.previousFocus))break}setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=e,this.elementsWithTabbableControls=["iframe"]}activate(){bt.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){bt=bt.filter(e=>e!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return bt[bt.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){const e=We(this.element);if(!this.element.matches(":focus-within")){const t=e[0],r=e[e.length-1],o=this.tabDirection==="forward"?t:r;typeof o?.focus=="function"&&(this.currentFocus=o,o.focus({preventScroll:!1}))}}}possiblyHasTabbableChildren(e){return this.elementsWithTabbableControls.includes(e.tagName.toLowerCase())||e.hasAttribute("controls")}},le=new Set;function Fo(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}function Io(){const e=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(e)||!e?0:e}function re(e){if(le.add(e),!document.documentElement.classList.contains("sl-scroll-lock")){const t=Fo()+Io();let r=getComputedStyle(document.documentElement).scrollbarGutter;(!r||r==="auto")&&(r="stable"),t<2&&(r=""),document.documentElement.style.setProperty("--sl-scroll-lock-gutter",r),document.documentElement.classList.add("sl-scroll-lock"),document.documentElement.style.setProperty("--sl-scroll-lock-size",`${t}px`)}}function oe(e){le.delete(e),le.size===0&&(document.documentElement.classList.remove("sl-scroll-lock"),document.documentElement.style.removeProperty("--sl-scroll-lock-size"))}var No=e=>{var t;const{activeElement:r}=document;r&&e.contains(r)&&((t=document.activeElement)==null||t.blur())},Vo=A`
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
 */const Bo={ATTRIBUTE:1},Ho=e=>(...t)=>({_$litDirective$:e,values:t});let jo=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,o){this._$Ct=t,this._$AM=r,this._$Ci=o}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const nt=Ho(class extends jo{constructor(e){if(super(e),e.type!==Bo.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in t)t[o]&&!this.nt?.has(o)&&this.st.add(o);return this.render(t)}const r=e.element.classList;for(const o of this.st)o in t||(r.remove(o),this.st.delete(o));for(const o in t){const n=!!t[o];n===this.st.has(o)||this.nt?.has(o)||(n?(r.add(o),this.st.add(o)):(r.remove(o),this.st.delete(o)))}return Z}});/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gr=Symbol.for(""),Wo=e=>{if(e?.r===gr)return e?._$litStatic$},Ht=(e,...t)=>({_$litStatic$:t.reduce((r,o,n)=>r+(i=>{if(i._$litStatic$!==void 0)return i._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${i}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(o)+e[n+1],e[0]),r:gr}),qe=new Map,qo=e=>(t,...r)=>{const o=r.length;let n,i;const a=[],s=[];let l,u=0,d=!1;for(;u<o;){for(l=t[u];u<o&&(i=r[u],(n=Wo(i))!==void 0);)l+=n+t[++u],d=!0;u!==o&&s.push(i),a.push(l),u++}if(u===o&&a.push(t[o]),d){const c=a.join("$$lit$$");(t=qe.get(c))===void 0&&(a.raw=a,qe.set(c,t=a)),r=s}return e(t,...r)},Ut=qo(v);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const w=e=>e??_;var k=class extends L{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){const e=!!this.href,t=e?Ht`a`:Ht`button`;return Ut`
      <${t}
        part="base"
        class=${nt({"icon-button":!0,"icon-button--disabled":!e&&this.disabled,"icon-button--focused":this.hasFocus})}
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
    `}};k.styles=[Q,Vo];k.dependencies={"sl-icon":O};h([J(".icon-button")],k.prototype,"button",2);h([F()],k.prototype,"hasFocus",2);h([p()],k.prototype,"name",2);h([p()],k.prototype,"library",2);h([p()],k.prototype,"src",2);h([p()],k.prototype,"href",2);h([p()],k.prototype,"target",2);h([p()],k.prototype,"download",2);h([p()],k.prototype,"label",2);h([p({type:Boolean,reflect:!0})],k.prototype,"disabled",2);var vr=new Map,Ko=new WeakMap;function Yo(e){return e??{keyframes:[],options:{duration:0}}}function Ke(e,t){return t.toLowerCase()==="rtl"?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function R(e,t){vr.set(e,Yo(t))}function mt(e,t,r){const o=Ko.get(e);if(o?.[t])return Ke(o[t],r.dir);const n=vr.get(t);return n?Ke(n,r.dir):{keyframes:[],options:{duration:0}}}function Ye(e,t){return new Promise(r=>{function o(n){n.target===e&&(e.removeEventListener(t,o),r())}e.addEventListener(t,o)})}function gt(e,t,r){return new Promise(o=>{if(r?.duration===1/0)throw new Error("Promise-based animations must be finite.");const n=e.animate(t,we(lt({},r),{duration:Go()?0:r.duration}));n.addEventListener("cancel",o,{once:!0}),n.addEventListener("finish",o,{once:!0})})}function Go(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Ot(e){return Promise.all(e.getAnimations().map(t=>new Promise(r=>{t.cancel(),requestAnimationFrame(r)})))}var yr=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=r=>{const o=r.target;(this.slotNames.includes("[default]")&&!o.name||o.name&&this.slotNames.includes(o.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===e.TEXT_NODE&&e.textContent.trim()!=="")return!0;if(e.nodeType===e.ELEMENT_NODE){const t=e;if(t.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};const ce=new Set,ot=new Map;let q,$e="ltr",xe="en";const wr=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(wr){const e=new MutationObserver($r);$e=document.documentElement.dir||"ltr",xe=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function _r(...e){e.map(t=>{const r=t.$code.toLowerCase();ot.has(r)?ot.set(r,Object.assign(Object.assign({},ot.get(r)),t)):ot.set(r,t),q||(q=t)}),$r()}function $r(){wr&&($e=document.documentElement.dir||"ltr",xe=document.documentElement.lang||navigator.language),[...ce.keys()].map(e=>{typeof e.requestUpdate=="function"&&e.requestUpdate()})}let Xo=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){ce.add(this.host)}hostDisconnected(){ce.delete(this.host)}dir(){return`${this.host.dir||$e}`.toLowerCase()}lang(){return`${this.host.lang||xe}`.toLowerCase()}getTranslationData(t){var r,o;const n=new Intl.Locale(t.replace(/_/g,"-")),i=n?.language.toLowerCase(),a=(o=(r=n?.region)===null||r===void 0?void 0:r.toLowerCase())!==null&&o!==void 0?o:"",s=ot.get(`${i}-${a}`),l=ot.get(i);return{locale:n,language:i,region:a,primary:s,secondary:l}}exists(t,r){var o;const{primary:n,secondary:i}=this.getTranslationData((o=r.lang)!==null&&o!==void 0?o:this.lang());return r=Object.assign({includeFallback:!1},r),!!(n&&n[t]||i&&i[t]||r.includeFallback&&q&&q[t])}term(t,...r){const{primary:o,secondary:n}=this.getTranslationData(this.lang());let i;if(o&&o[t])i=o[t];else if(n&&n[t])i=n[t];else if(q&&q[t])i=q[t];else return console.error(`No translation found for: ${String(t)}`),String(t);return typeof i=="function"?i(...r):i}date(t,r){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),r).format(t)}number(t,r){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),r).format(t)}relativeTime(t,r,o){return new Intl.RelativeTimeFormat(this.lang(),o).format(t,r)}};var xr={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>e===0?"No options selected":e===1?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};_r(xr);var Zo=xr,Ee=class extends Xo{};_r(Zo);function Ge(e){return e.charAt(0).toUpperCase()+e.slice(1)}var S=class extends L{constructor(){super(...arguments),this.hasSlotController=new yr(this,"footer"),this.localize=new Ee(this),this.modal=new Uo(this),this.open=!1,this.label="",this.placement="end",this.contained=!1,this.noHeader=!1,this.handleDocumentKeyDown=e=>{this.contained||e.key==="Escape"&&this.modal.isActive()&&this.open&&(e.stopImmediatePropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.drawer.hidden=!this.open,this.open&&(this.addOpenListeners(),this.contained||(this.modal.activate(),re(this)))}disconnectedCallback(){super.disconnectedCallback(),oe(this),this.removeOpenListeners()}requestClose(e){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){const r=mt(this,"drawer.denyClose",{dir:this.localize.dir()});gt(this.panel,r.keyframes,r.options);return}this.hide()}addOpenListeners(){var e;"CloseWatcher"in window?((e=this.closeWatcher)==null||e.destroy(),this.contained||(this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard"))):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var e;document.removeEventListener("keydown",this.handleDocumentKeyDown),(e=this.closeWatcher)==null||e.destroy()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),re(this));const e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([Ot(this.drawer),Ot(this.overlay)]),this.drawer.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")});const t=mt(this,`drawer.show${Ge(this.placement)}`,{dir:this.localize.dir()}),r=mt(this,"drawer.overlay.show",{dir:this.localize.dir()});await Promise.all([gt(this.panel,t.keyframes,t.options),gt(this.overlay,r.keyframes,r.options)]),this.emit("sl-after-show")}else{No(this),this.emit("sl-hide"),this.removeOpenListeners(),this.contained||(this.modal.deactivate(),oe(this)),await Promise.all([Ot(this.drawer),Ot(this.overlay)]);const e=mt(this,`drawer.hide${Ge(this.placement)}`,{dir:this.localize.dir()}),t=mt(this,"drawer.overlay.hide",{dir:this.localize.dir()});await Promise.all([gt(this.overlay,t.keyframes,t.options).then(()=>{this.overlay.hidden=!0}),gt(this.panel,e.keyframes,e.options).then(()=>{this.panel.hidden=!0})]),this.drawer.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1;const r=this.originalTrigger;typeof r?.focus=="function"&&setTimeout(()=>r.focus()),this.emit("sl-after-hide")}}handleNoModalChange(){this.open&&!this.contained&&(this.modal.activate(),re(this)),this.open&&this.contained&&(this.modal.deactivate(),oe(this))}async show(){if(!this.open)return this.open=!0,Ye(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Ye(this,"sl-after-hide")}render(){return v`
      <div
        part="base"
        class=${nt({drawer:!0,"drawer--open":this.open,"drawer--top":this.placement==="top","drawer--end":this.placement==="end","drawer--bottom":this.placement==="bottom","drawer--start":this.placement==="start","drawer--contained":this.contained,"drawer--fixed":!this.contained,"drawer--rtl":this.localize.dir()==="rtl","drawer--has-footer":this.hasSlotController.test("footer")})}
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
          ${this.noHeader?"":v`
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
    `}};S.styles=[Q,Do];S.dependencies={"sl-icon-button":k};h([J(".drawer")],S.prototype,"drawer",2);h([J(".drawer__panel")],S.prototype,"panel",2);h([J(".drawer__overlay")],S.prototype,"overlay",2);h([p({type:Boolean,reflect:!0})],S.prototype,"open",2);h([p({reflect:!0})],S.prototype,"label",2);h([p({reflect:!0})],S.prototype,"placement",2);h([p({type:Boolean,reflect:!0})],S.prototype,"contained",2);h([p({attribute:"no-header",type:Boolean,reflect:!0})],S.prototype,"noHeader",2);h([ct("open",{waitUntilFirstUpdate:!0})],S.prototype,"handleOpenChange",1);h([ct("contained",{waitUntilFirstUpdate:!0})],S.prototype,"handleNoModalChange",1);R("drawer.showTop",{keyframes:[{opacity:0,translate:"0 -100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});R("drawer.hideTop",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 -100%"}],options:{duration:250,easing:"ease"}});R("drawer.showEnd",{keyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});R("drawer.hideEnd",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],options:{duration:250,easing:"ease"}});R("drawer.showBottom",{keyframes:[{opacity:0,translate:"0 100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});R("drawer.hideBottom",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 100%"}],options:{duration:250,easing:"ease"}});R("drawer.showStart",{keyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});R("drawer.hideStart",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],options:{duration:250,easing:"ease"}});R("drawer.denyClose",{keyframes:[{scale:1},{scale:1.01},{scale:1}],options:{duration:250}});R("drawer.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});R("drawer.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});S.define("sl-drawer");k.define("sl-icon-button");var Jo=A`
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
`,Er=class extends L{constructor(){super(...arguments),this.localize=new Ee(this)}render(){return v`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};Er.styles=[Q,Jo];var vt=new WeakMap,yt=new WeakMap,wt=new WeakMap,ne=new WeakSet,Rt=new WeakMap,Qo=class{constructor(e,t){this.handleFormData=r=>{const o=this.options.disabled(this.host),n=this.options.name(this.host),i=this.options.value(this.host),a=this.host.tagName.toLowerCase()==="sl-button";this.host.isConnected&&!o&&!a&&typeof n=="string"&&n.length>0&&typeof i<"u"&&(Array.isArray(i)?i.forEach(s=>{r.formData.append(n,s.toString())}):r.formData.append(n,i.toString()))},this.handleFormSubmit=r=>{var o;const n=this.options.disabled(this.host),i=this.options.reportValidity;this.form&&!this.form.noValidate&&((o=vt.get(this.form))==null||o.forEach(a=>{this.setUserInteracted(a,!0)})),this.form&&!this.form.noValidate&&!n&&!i(this.host)&&(r.preventDefault(),r.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),Rt.set(this.host,[])},this.handleInteraction=r=>{const o=Rt.get(this.host);o.includes(r.type)||o.push(r.type),o.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const r=this.form.querySelectorAll("*");for(const o of r)if(typeof o.checkValidity=="function"&&!o.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const r=this.form.querySelectorAll("*");for(const o of r)if(typeof o.reportValidity=="function"&&!o.reportValidity())return!1}return!0},(this.host=e).addController(this),this.options=lt({form:r=>{const o=r.form;if(o){const i=r.getRootNode().querySelector(`#${o}`);if(i)return i}return r.closest("form")},name:r=>r.name,value:r=>r.value,defaultValue:r=>r.defaultValue,disabled:r=>{var o;return(o=r.disabled)!=null?o:!1},reportValidity:r=>typeof r.reportValidity=="function"?r.reportValidity():!0,checkValidity:r=>typeof r.checkValidity=="function"?r.checkValidity():!0,setValue:(r,o)=>r.value=o,assumeInteractionOn:["sl-input"]},t)}hostConnected(){const e=this.options.form(this.host);e&&this.attachForm(e),Rt.set(this.host,[]),this.options.assumeInteractionOn.forEach(t=>{this.host.addEventListener(t,this.handleInteraction)})}hostDisconnected(){this.detachForm(),Rt.delete(this.host),this.options.assumeInteractionOn.forEach(e=>{this.host.removeEventListener(e,this.handleInteraction)})}hostUpdated(){const e=this.options.form(this.host);e||this.detachForm(),e&&this.form!==e&&(this.detachForm(),this.attachForm(e)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(e){e?(this.form=e,vt.has(this.form)?vt.get(this.form).add(this.host):vt.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),yt.has(this.form)||(yt.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),wt.has(this.form)||(wt.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const e=vt.get(this.form);e&&(e.delete(this.host),e.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),yt.has(this.form)&&(this.form.reportValidity=yt.get(this.form),yt.delete(this.form)),wt.has(this.form)&&(this.form.checkValidity=wt.get(this.form),wt.delete(this.form)),this.form=void 0))}setUserInteracted(e,t){t?ne.add(e):ne.delete(e),e.requestUpdate()}doAction(e,t){if(this.form){const r=document.createElement("button");r.type=e,r.style.position="absolute",r.style.width="0",r.style.height="0",r.style.clipPath="inset(50%)",r.style.overflow="hidden",r.style.whiteSpace="nowrap",t&&(r.name=t.name,r.value=t.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(o=>{t.hasAttribute(o)&&r.setAttribute(o,t.getAttribute(o))})),this.form.append(r),r.click(),r.remove()}}getForm(){var e;return(e=this.form)!=null?e:null}reset(e){this.doAction("reset",e)}submit(e){this.doAction("submit",e)}setValidity(e){const t=this.host,r=!!ne.has(t),o=!!t.required;t.toggleAttribute("data-required",o),t.toggleAttribute("data-optional",!o),t.toggleAttribute("data-invalid",!e),t.toggleAttribute("data-valid",e),t.toggleAttribute("data-user-invalid",!e&&r),t.toggleAttribute("data-user-valid",e&&r)}updateValidity(){const e=this.host;this.setValidity(e.validity.valid)}emitInvalidEvent(e){const t=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});e||t.preventDefault(),this.host.dispatchEvent(t)||e?.preventDefault()}},Ae=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1});Object.freeze(we(lt({},Ae),{valid:!1,valueMissing:!0}));Object.freeze(we(lt({},Ae),{valid:!1,customError:!0}));var tn=A`
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
`,g=class extends L{constructor(){super(...arguments),this.formControlController=new Qo(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new yr(this,"[default]","prefix","suffix"),this.localize=new Ee(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:Ae}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(e){this.isButton()&&(this.button.setCustomValidity(e),this.formControlController.updateValidity())}render(){const e=this.isLink(),t=e?Ht`a`:Ht`button`;return Ut`
      <${t}
        part="base"
        class=${nt({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
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
        ${this.caret?Ut` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?Ut`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${t}>
    `}};g.styles=[Q,tn];g.dependencies={"sl-icon":O,"sl-spinner":Er};h([J(".button")],g.prototype,"button",2);h([F()],g.prototype,"hasFocus",2);h([F()],g.prototype,"invalid",2);h([p()],g.prototype,"title",2);h([p({reflect:!0})],g.prototype,"variant",2);h([p({reflect:!0})],g.prototype,"size",2);h([p({type:Boolean,reflect:!0})],g.prototype,"caret",2);h([p({type:Boolean,reflect:!0})],g.prototype,"disabled",2);h([p({type:Boolean,reflect:!0})],g.prototype,"loading",2);h([p({type:Boolean,reflect:!0})],g.prototype,"outline",2);h([p({type:Boolean,reflect:!0})],g.prototype,"pill",2);h([p({type:Boolean,reflect:!0})],g.prototype,"circle",2);h([p()],g.prototype,"type",2);h([p()],g.prototype,"name",2);h([p()],g.prototype,"value",2);h([p()],g.prototype,"href",2);h([p()],g.prototype,"target",2);h([p()],g.prototype,"rel",2);h([p()],g.prototype,"download",2);h([p()],g.prototype,"form",2);h([p({attribute:"formaction"})],g.prototype,"formAction",2);h([p({attribute:"formenctype"})],g.prototype,"formEnctype",2);h([p({attribute:"formmethod"})],g.prototype,"formMethod",2);h([p({attribute:"formnovalidate",type:Boolean})],g.prototype,"formNoValidate",2);h([p({attribute:"formtarget"})],g.prototype,"formTarget",2);h([ct("disabled",{waitUntilFirstUpdate:!0})],g.prototype,"handleDisabledChange",1);g.define("sl-button");var en=A`
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
`,Gt=class extends L{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};Gt.styles=[Q,en];h([p({type:Boolean,reflect:!0})],Gt.prototype,"vertical",2);h([ct("vertical")],Gt.prototype,"handleVerticalChange",1);Gt.define("sl-divider");function rn(e){for(var t=[],r=0;r<e.length;){var o=e[r];if(o==="*"||o==="+"||o==="?"){t.push({type:"MODIFIER",index:r,value:e[r++]});continue}if(o==="\\"){t.push({type:"ESCAPED_CHAR",index:r++,value:e[r++]});continue}if(o==="{"){t.push({type:"OPEN",index:r,value:e[r++]});continue}if(o==="}"){t.push({type:"CLOSE",index:r,value:e[r++]});continue}if(o===":"){for(var n="",i=r+1;i<e.length;){var a=e.charCodeAt(i);if(a>=48&&a<=57||a>=65&&a<=90||a>=97&&a<=122||a===95){n+=e[i++];continue}break}if(!n)throw new TypeError("Missing parameter name at ".concat(r));t.push({type:"NAME",index:r,value:n}),r=i;continue}if(o==="("){var s=1,l="",i=r+1;if(e[i]==="?")throw new TypeError('Pattern cannot start with "?" at '.concat(i));for(;i<e.length;){if(e[i]==="\\"){l+=e[i++]+e[i++];continue}if(e[i]===")"){if(s--,s===0){i++;break}}else if(e[i]==="("&&(s++,e[i+1]!=="?"))throw new TypeError("Capturing groups are not allowed at ".concat(i));l+=e[i++]}if(s)throw new TypeError("Unbalanced pattern at ".concat(r));if(!l)throw new TypeError("Missing pattern at ".concat(r));t.push({type:"PATTERN",index:r,value:l}),r=i;continue}t.push({type:"CHAR",index:r,value:e[r++]})}return t.push({type:"END",index:r,value:""}),t}function ke(e,t){t===void 0&&(t={});for(var r=rn(e),o=t.prefixes,n=o===void 0?"./":o,i=t.delimiter,a=i===void 0?"/#?":i,s=[],l=0,u=0,d="",c=function(C){if(u<r.length&&r[u].type===C)return r[u++].value},b=function(C){var $=c(C);if($!==void 0)return $;var M=r[u],Zt=M.type,Fr=M.index;throw new TypeError("Unexpected ".concat(Zt," at ").concat(Fr,", expected ").concat(C))},f=function(){for(var C="",$;$=c("CHAR")||c("ESCAPED_CHAR");)C+=$;return C},m=function(C){for(var $=0,M=a;$<M.length;$++){var Zt=M[$];if(C.indexOf(Zt)>-1)return!0}return!1},T=function(C){var $=s[s.length-1],M=C||($&&typeof $=="string"?$:"");if($&&!M)throw new TypeError('Must have text between two parameters, missing text after "'.concat($.name,'"'));return!M||m(M)?"[^".concat(V(a),"]+?"):"(?:(?!".concat(V(M),")[^").concat(V(a),"])+?")};u<r.length;){var x=c("CHAR"),E=c("NAME"),tt=c("PATTERN");if(E||tt){var P=x||"";n.indexOf(P)===-1&&(d+=P,P=""),d&&(s.push(d),d=""),s.push({name:E||l++,prefix:P,suffix:"",pattern:tt||T(P),modifier:c("MODIFIER")||""});continue}var y=x||c("ESCAPED_CHAR");if(y){d+=y;continue}d&&(s.push(d),d="");var j=c("OPEN");if(j){var P=f(),I=c("NAME")||"",ht=c("PATTERN")||"",et=f();b("CLOSE"),s.push({name:I||(ht?l++:""),pattern:I&&!ht?T(P):ht,prefix:P,suffix:et,modifier:c("MODIFIER")||""});continue}b("END")}return s}function Ar(e,t){return kr(ke(e,t),t)}function kr(e,t){t===void 0&&(t={});var r=Ce(t),o=t.encode,n=o===void 0?function(l){return l}:o,i=t.validate,a=i===void 0?!0:i,s=e.map(function(l){if(typeof l=="object")return new RegExp("^(?:".concat(l.pattern,")$"),r)});return function(l){for(var u="",d=0;d<e.length;d++){var c=e[d];if(typeof c=="string"){u+=c;continue}var b=l?l[c.name]:void 0,f=c.modifier==="?"||c.modifier==="*",m=c.modifier==="*"||c.modifier==="+";if(Array.isArray(b)){if(!m)throw new TypeError('Expected "'.concat(c.name,'" to not repeat, but got an array'));if(b.length===0){if(f)continue;throw new TypeError('Expected "'.concat(c.name,'" to not be empty'))}for(var T=0;T<b.length;T++){var x=n(b[T],c);if(a&&!s[d].test(x))throw new TypeError('Expected all "'.concat(c.name,'" to match "').concat(c.pattern,'", but got "').concat(x,'"'));u+=c.prefix+x+c.suffix}continue}if(typeof b=="string"||typeof b=="number"){var x=n(String(b),c);if(a&&!s[d].test(x))throw new TypeError('Expected "'.concat(c.name,'" to match "').concat(c.pattern,'", but got "').concat(x,'"'));u+=c.prefix+x+c.suffix;continue}if(!f){var E=m?"an array":"a string";throw new TypeError('Expected "'.concat(c.name,'" to be ').concat(E))}}return u}}function V(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function Ce(e){return e&&e.sensitive?"":"i"}function on(e,t){if(!t)return e;for(var r=/\((?:\?<(.*?)>)?(?!\?)/g,o=0,n=r.exec(e.source);n;)t.push({name:n[1]||o++,prefix:"",suffix:"",modifier:"",pattern:""}),n=r.exec(e.source);return e}function nn(e,t,r){var o=e.map(function(n){return Cr(n,t,r).source});return new RegExp("(?:".concat(o.join("|"),")"),Ce(r))}function an(e,t,r){return sn(ke(e,r),t,r)}function sn(e,t,r){r===void 0&&(r={});for(var o=r.strict,n=o===void 0?!1:o,i=r.start,a=i===void 0?!0:i,s=r.end,l=s===void 0?!0:s,u=r.encode,d=u===void 0?function($){return $}:u,c=r.delimiter,b=c===void 0?"/#?":c,f=r.endsWith,m=f===void 0?"":f,T="[".concat(V(m),"]|$"),x="[".concat(V(b),"]"),E=a?"^":"",tt=0,P=e;tt<P.length;tt++){var y=P[tt];if(typeof y=="string")E+=V(d(y));else{var j=V(d(y.prefix)),I=V(d(y.suffix));if(y.pattern)if(t&&t.push(y),j||I)if(y.modifier==="+"||y.modifier==="*"){var ht=y.modifier==="*"?"?":"";E+="(?:".concat(j,"((?:").concat(y.pattern,")(?:").concat(I).concat(j,"(?:").concat(y.pattern,"))*)").concat(I,")").concat(ht)}else E+="(?:".concat(j,"(").concat(y.pattern,")").concat(I,")").concat(y.modifier);else{if(y.modifier==="+"||y.modifier==="*")throw new TypeError('Can not repeat "'.concat(y.name,'" without a prefix and suffix'));E+="(".concat(y.pattern,")").concat(y.modifier)}else E+="(?:".concat(j).concat(I,")").concat(y.modifier)}}if(l)n||(E+="".concat(x,"?")),E+=r.endsWith?"(?=".concat(T,")"):"$";else{var et=e[e.length-1],C=typeof et=="string"?x.indexOf(et[et.length-1])>-1:et===void 0;n||(E+="(?:".concat(x,"(?=").concat(T,"))?")),C||(E+="(?=".concat(x,"|").concat(T,")"))}return new RegExp(E,Ce(r))}function Cr(e,t,r){return e instanceof RegExp?on(e,t):Array.isArray(e)?nn(e,t,r):an(e,t,r)}const G=Symbol("NotFoundResult");class Sr extends Error{code;context;constructor(t){super(B(`Page not found (${t.pathname})`)),this.context=t,this.code=404}}function K(e){return typeof e=="object"&&!!e}function St(e){return typeof e=="function"}function U(e){return typeof e=="string"}function jt(e=[]){return Array.isArray(e)?e:[e]}function B(e){return`[Vaadin.Router] ${e}`}function Pr(e){return new Sr(e)}function zr(e){return(Array.isArray(e)?e[0]:e)??""}function Wt(e){return zr(e?.path)}function ln(e){return Array.isArray(e)&&e.length>0?e:void 0}const de=new Map;de.set("|false",{keys:[],pattern:/(?:)/u});function Xe(e){try{return decodeURIComponent(e)}catch{return e}}function cn(e,t,r=!1,o=[],n){const i=`${e}|${String(r)}`,a=zr(t);let s=de.get(i);if(!s){const d=[];s={keys:d,pattern:Cr(e,d,{end:r,strict:e===""})},de.set(i,s)}const l=s.pattern.exec(a);if(!l)return null;const u={...n};for(let d=1;d<l.length;d++){const c=s.keys[d-1],b=c.name,f=l[d];(f!==void 0||!Object.prototype.hasOwnProperty.call(u,b))&&(c.modifier==="+"||c.modifier==="*"?u[b]=f?f.split(/[/?#]/u).map(Xe):[]:u[b]=f&&Xe(f))}return{keys:[...o,...s.keys],params:u,path:l[0]}}var dn=cn;function Dr(e,t,r,o,n){let i,a,s=0,l=Wt(e);return l.startsWith("/")&&(r&&(l=l.substring(1)),r=!0),{next(u){if(e===u)return{done:!0,value:void 0};e.__children??=ln(e.children);const d=e.__children??[],c=!e.__children&&!e.children;if(!i&&(i=dn(l,t,c,o,n),i))return{value:{keys:i.keys,params:i.params,path:i.path,route:e}};if(i&&d.length>0)for(;s<d.length;){if(!a){const f=d[s];f.parent=e;let m=i.path.length;m>0&&t.charAt(m)==="/"&&(m+=1),a=Dr(f,t.substring(m),r,i.keys,i.params)}const b=a.next(u);if(!b.done)return{done:!1,value:b.value};a=null,s+=1}return{done:!0,value:void 0}}}}var un=Dr;function hn(e){if(St(e.route.action))return e.route.action(e)}function pn(e,t){let r=e;for(;r;)if(r=r.parent,r===t)return!0;return!1}function fn(e){return!!e&&typeof e=="object"&&"next"in e&&"params"in e&&"result"in e&&"route"in e}class bn extends Error{cause;code;context;constructor(t,r){let o=`Path '${t.pathname}' is not properly resolved due to an error.`;const n=Wt(t.route);n&&(o+=` Resolution had failed on route: '${n}'`),super(o),this.cause=r?.cause,this.code=r?.code,this.context=t}warn(){console.warn(this.message)}}function mn(e,t){const{path:r,route:o}=t;if(o&&!o.__synthetic){const n={path:r,route:o};if(o.parent&&e.chain)for(let i=e.chain.length-1;i>=0&&e.chain[i].route!==o.parent;i--)e.chain.pop();e.chain?.push(n)}}class gn{baseUrl;#r;errorHandler;resolveRoute;#t;constructor(t,{baseUrl:r="",context:o,errorHandler:n,resolveRoute:i=hn}={}){if(Object(t)!==t)throw new TypeError("Invalid routes");this.baseUrl=r,this.errorHandler=n,this.resolveRoute=i,Array.isArray(t)?this.#t={__children:t,__synthetic:!0,action:()=>{},path:""}:this.#t={...t,parent:void 0},this.#r={...o,hash:"",async next(){return G},params:{},pathname:"",resolver:this,route:this.#t,search:"",chain:[]}}get root(){return this.#t}get context(){return this.#r}get __effectiveBaseUrl(){return this.baseUrl?new URL(this.baseUrl,document.baseURI||document.URL).href.replace(/[^/]*$/u,""):""}getRoutes(){return[...this.#t.__children??[]]}removeRoutes(){this.#t.__children=[]}async resolve(t){const r=this,o={...this.#r,...U(t)?{pathname:t}:t,next:u},n=un(this.#t,this.__normalizePathname(o.pathname)??o.pathname,!!this.baseUrl),i=this.resolveRoute;let a=null,s=null,l=o;async function u(d=!1,c=a?.value?.route,b){const f=b===null?a?.value?.route:void 0;if(a=s??n.next(f),s=null,!d&&(a.done||!pn(a.value.route,c)))return s=a,G;if(a.done)throw Pr(o);l={...o,params:a.value.params,route:a.value.route,chain:l.chain?.slice()},mn(l,a.value);const m=await i(l);return m!=null&&m!==G?(l.result=fn(m)?m.result:m,r.#r=l,l):await u(d,c,m)}try{return await u(!0,this.#t)}catch(d){const c=d instanceof Sr?d:new bn(l,{code:500,cause:d});if(this.errorHandler)return l.result=this.errorHandler(c),l;throw d}}setRoutes(t){return this.#t.__children=[...jt(t)],{}}__normalizePathname(t){if(!this.baseUrl)return t;const r=this.__effectiveBaseUrl,o=t.startsWith("/")?new URL(r).origin+t:`./${t}`,n=new URL(o,r).href;if(n.startsWith(r))return n.slice(r.length)}addRoutes(t){return this.#t.__children=[...this.#t.__children??[],...jt(t)],this.getRoutes()}}var Lr=gn;function Or(e,t,r,o){const n=t.name??o?.(t);if(n&&(e.has(n)?e.get(n)?.push(t):e.set(n,[t])),Array.isArray(r))for(const i of r)i.parent=t,Or(e,i,i.__children??i.children,o)}function Ze(e,t){const r=e.get(t);if(r){if(r.length>1)throw new Error(`Duplicate route with name "${t}". Try seting unique 'name' route properties.`);return r[0]}}function vn(e,t={}){if(!(e instanceof Lr))throw new TypeError("An instance of Resolver is expected");const r=new Map,o=new Map;return(n,i)=>{let a=Ze(o,n);if(!a&&(o.clear(),Or(o,e.root,e.root.__children,t.cacheKeyProvider),a=Ze(o,n),!a))throw new Error(`Route "${n}" not found`);let s=a.fullPath?r.get(a.fullPath):void 0;if(!s){let d=Wt(a),c=a.parent;for(;c;){const m=Wt(c);m&&(d=`${m.replace(/\/$/u,"")}/${d.replace(/^\//u,"")}`),c=c.parent}const b=ke(d),f=Object.create(null);for(const m of b)U(m)||(f[m.name]=!0);s={keys:f,tokens:b},r.set(d,s),a.fullPath=d}let u=kr(s.tokens,{encode:encodeURIComponent,...t})(i)||"/";if(t.stringifyQueryParams&&i){const d={};for(const[b,f]of Object.entries(i))!(b in s.keys)&&f&&(d[b]=f);const c=t.stringifyQueryParams(d);c&&(u+=c.startsWith("?")?c:`?${c}`)}return u}}var yn=vn;const wn=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,Ft=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function _n(){function e(){return!0}return Rr(e)}function $n(){try{return xn()?!0:En()?Ft?!An():!_n():!1}catch{return!1}}function xn(){return localStorage.getItem("vaadin.developmentmode.force")}function En(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function An(){return!!(Ft&&Object.keys(Ft).map(t=>Ft[t]).filter(t=>t.productionMode).length>0)}function Rr(e,t){if(typeof e!="function")return;const r=wn.exec(e.toString());if(r)try{e=new Function(r[1])}catch(o){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",o)}return e(t)}window.Vaadin=window.Vaadin||{};const Je=function(e,t){if(window.Vaadin.developmentMode)return Rr(e,t)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=$n());function kn(){/*! vaadin-dev-mode:start
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

  vaadin-dev-mode:end **/}const Cn=function(){if(typeof Je=="function")return Je(kn)};function Sn(e,t=window.Vaadin??={}){t.registrations??=[],t.registrations.push({is:"@vaadin/router",version:"2.0.1"})}Sn();Cn();const Pn=e=>{const t=getComputedStyle(e).getPropertyValue("animation-name");return t&&t!=="none"},zn=(e,t)=>{const r=()=>{e.removeEventListener("animationend",r),t()};e.addEventListener("animationend",r)};async function Dn(e,t){return e.classList.add(t),await new Promise(r=>{if(Pn(e)){const o=e.getBoundingClientRect(),n=`height: ${o.bottom-o.top}px; width: ${o.right-o.left}px`;e.setAttribute("style",`position: absolute; ${n}`),zn(e,()=>{e.classList.remove(t),e.removeAttribute("style"),r()})}else e.classList.remove(t),r()})}var Qe=Dn;function Tr(e){if(!e||!U(e.path))throw new Error(B('Expected route config to be an object with a "path" string property, or an array of such objects'));if(!St(e.action)&&!Array.isArray(e.children)&&!St(e.children)&&!U(e.component)&&!U(e.redirect))throw new Error(B(`Expected route config "${e.path}" to include either "component, redirect" or "action" function but none found.`));e.redirect&&["bundle","component"].forEach(t=>{t in e&&console.warn(B(`Route config "${String(e.path)}" has both "redirect" and "${t}" properties, and "redirect" will always override the latter. Did you mean to only use "${t}"?`))})}function tr(e){jt(e).forEach(t=>Tr(t))}function Ln({next:e,...t}){return t}function It(e,t){const r=t.__effectiveBaseUrl;return r?new URL(e.replace(/^\//u,""),r).pathname:e}function Mr(e){return e.map(t=>t.path).reduce((t,r)=>r.length?`${t.replace(/\/$/u,"")}/${r.replace(/^\//u,"")}`:t,"")}function On(e){return Mr(e.map(t=>t.route))}function z({chain:e=[],hash:t="",params:r={},pathname:o="",redirectFrom:n,resolver:i,search:a=""},s){const l=e.map(u=>u.route);return{baseUrl:i?.baseUrl??"",getUrl:(u={})=>i?It(Ar(On(e))({...r,...u}),i):"",hash:t,params:r,pathname:o,redirectFrom:n,route:s??(Array.isArray(l)?l.at(-1):void 0)??null,routes:l,search:a,searchParams:new URLSearchParams(a)}}function er(e,t){const r={...e.params};return{redirect:{from:e.pathname,params:r,pathname:t}}}function Rn(e,t){if(t.location=z(e),e.chain){const r=e.chain.map(o=>o.route).indexOf(e.route);e.chain[r].element=t}return t}function Nt(e,t,...r){if(typeof e=="function")return e.apply(t,r)}function rr(e,t,...r){return o=>o&&K(o)&&("cancel"in o||"redirect"in o)?o:Nt(t?.[e],t,...r)}function Tn(e,t){if(!Array.isArray(e)&&!K(e))throw new Error(B(`Incorrect "children" value for the route ${String(t.path)}: expected array or object, but got ${String(e)}`));const r=jt(e);r.forEach(o=>Tr(o)),t.__children=r}function Et(e,t){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${e}`,{cancelable:e==="go",detail:t}))}function Mn(e){if(typeof e!="object")return String(e);const[t="Unknown"]=/ (.*)\]$/u.exec(String(e))??[];return t==="Object"||t==="Array"?`${t} ${JSON.stringify(e)}`:t}function Un(e){const{port:t,protocol:r}=e,i=r==="http:"&&t==="80"||r==="https:"&&t==="443"?e.hostname:e.host;return`${r}//${i}`}function or(e){if(e instanceof Element)return e.nodeName.toLowerCase()}function nr(e){if(e.defaultPrevented||e.button!==0||e.shiftKey||e.ctrlKey||e.altKey||e.metaKey)return;let t=e.target;const r=e instanceof MouseEvent?e.composedPath():e.path??[];for(let l=0;l<r.length;l++){const u=r[l];if("nodeName"in u&&u.nodeName.toLowerCase()==="a"){t=u;break}}for(;t&&t instanceof Node&&or(t)!=="a";)t=t.parentNode;if(!t||or(t)!=="a")return;const o=t;if(o.target&&o.target.toLowerCase()!=="_self"||o.hasAttribute("download")||o.hasAttribute("router-ignore")||o.pathname===window.location.pathname&&o.hash!==""||(o.origin||Un(o))!==window.location.origin)return;const{hash:i,pathname:a,search:s}=o;Et("go",{hash:i,pathname:a,search:s})&&e instanceof MouseEvent&&(e.preventDefault(),e.type==="click"&&window.scrollTo(0,0))}const Fn={activate(){window.document.addEventListener("click",nr)},inactivate(){window.document.removeEventListener("click",nr)}};var In=Fn;function ir(e){if(e.state==="vaadin-router-ignore")return;const{hash:t,pathname:r,search:o}=window.location;Et("go",{hash:t,pathname:r,search:o})}const Nn={activate(){window.addEventListener("popstate",ir)},inactivate(){window.removeEventListener("popstate",ir)}};var Vn=Nn;let ar=[];const Bn={CLICK:In,POPSTATE:Vn};function sr(e=[]){ar.forEach(t=>t.inactivate()),e.forEach(t=>t.activate()),ar=e}const Hn=256;function _t(){return{cancel:!0}}const lr={__renderId:-1,params:{},route:{__synthetic:!0,children:[],path:"",action(){}},pathname:"",async next(){return G}};class jn extends Lr{location=z({resolver:this});ready=Promise.resolve(this.location);#r=new WeakSet;#t=new WeakSet;#d=this.#v.bind(this);#a=0;#i;__previousContext;#s;#o=null;#e=null;constructor(t,r){const n=document.head.querySelector("base")?.getAttribute("href");super([],{baseUrl:n?new URL(n,document.URL).href.replace(/[^/]*$/u,""):void 0,...r,resolveRoute:async i=>await this.#y(i)}),sr(Object.values(Bn)),this.setOutlet(t),this.subscribe()}async#y(t){const{route:r}=t;if(St(r.children)){let n=await r.children(Ln(t));St(r.children)||({children:n}=r),Tn(n,r)}const o={component:n=>{const i=document.createElement(n);return this.#t.add(i),i},prevent:_t,redirect:n=>er(t,n)};return await Promise.resolve().then(async()=>{if(this.#n(t))return await Nt(r.action,r,t,o)}).then(n=>{if(n!=null&&(typeof n=="object"||typeof n=="symbol")&&(n instanceof HTMLElement||n===G||K(n)&&"redirect"in n))return n;if(U(r.redirect))return o.redirect(r.redirect)}).then(n=>{if(n!=null)return n;if(U(r.component))return o.component(r.component)})}setOutlet(t){t&&this.#m(t),this.#i=t}getOutlet(){return this.#i}async setRoutes(t,r=!1){return this.__previousContext=void 0,this.#s=void 0,tr(t),super.setRoutes(t),r||this.#v(),await this.ready}addRoutes(t){return tr(t),super.addRoutes(t)}async render(t,r=!1){this.#a+=1;const o=this.#a,n={...lr,...U(t)?{hash:"",search:"",pathname:t}:t,__renderId:o};return this.ready=this.#w(n,r),await this.ready}async#w(t,r){const{__renderId:o}=t;try{const n=await this.resolve(t),i=await this.#l(n);if(!this.#n(i))return this.location;const a=this.__previousContext;if(i===a)return this.#c(a,!0),this.location;if(this.location=z(i),r&&this.#c(i,o===1),Et("location-changed",{router:this,location:this.location}),i.__skipAttach)return this.#g(i,a),this.__previousContext=i,this.location;this.#x(i,a);const s=this.#S(i);if(this.#C(i),this.#k(i,a),await s,this.#n(i))return this.#E(),this.__previousContext=i,this.location}catch(n){if(o===this.#a){r&&this.#c(this.context);for(const i of this.#i?.children??[])i.remove();throw this.location=z(Object.assign(t,{resolver:this})),Et("error",{router:this,error:n,...t}),n}}return this.location}async#l(t,r=t){const o=await this.#u(r),i=o!==r?o:t,s=It(Mr(o.chain??[]),this)===o.pathname,l=async(d,c=d.route,b)=>{const f=await d.next(!1,c,b);return f===null||f===G?s?d:c.parent!=null?await l(d,c.parent,f):f:f},u=await l(o);if(u==null||u===G)throw Pr(i);return u!==o?await this.#l(i,u):await this.#_(o)}async#u(t){const{result:r}=t;if(r instanceof HTMLElement)return Rn(t,r),t;if(r&&"redirect"in r){const o=await this.#b(r.redirect,t.__redirectCount,t.__renderId);return await this.#u(o)}throw r instanceof Error?r:new Error(B(`Invalid route resolution result for path "${t.pathname}". Expected redirect object or HTML element, but got: "${Mn(r)}". Double check the action return value for the route.`))}async#_(t){return await this.#$(t).then(async r=>r===this.__previousContext||r===t?r:await this.#l(r))}async#$(t){const r=this.__previousContext??{},o=r.chain??[],n=t.chain??[];let i=Promise.resolve(void 0);const a=s=>er(t,s);if(t.__divergedChainIndex=0,t.__skipAttach=!1,o.length){for(let s=0;s<Math.min(o.length,n.length)&&!(o[s].route!==n[s].route||o[s].path!==n[s].path&&o[s].element!==n[s].element||!this.#f(o[s].element,n[s].element));t.__divergedChainIndex++,s++);if(t.__skipAttach=n.length===o.length&&t.__divergedChainIndex===n.length&&this.#f(t.result,r.result),t.__skipAttach){for(let s=n.length-1;s>=0;s--)i=this.#h(i,t,{prevent:_t},o[s]);for(let s=0;s<n.length;s++)i=this.#p(i,t,{prevent:_t,redirect:a},n[s]),o[s].element.location=z(t,o[s].route)}else for(let s=o.length-1;s>=t.__divergedChainIndex;s--)i=this.#h(i,t,{prevent:_t},o[s])}if(!t.__skipAttach)for(let s=0;s<n.length;s++)s<t.__divergedChainIndex?s<o.length&&o[s].element&&(o[s].element.location=z(t,o[s].route)):(i=this.#p(i,t,{prevent:_t,redirect:a},n[s]),n[s].element&&(n[s].element.location=z(t,n[s].route)));return await i.then(async s=>{if(s&&K(s)){if("cancel"in s&&this.__previousContext)return this.__previousContext.__renderId=t.__renderId,this.__previousContext;if("redirect"in s)return await this.#b(s.redirect,t.__redirectCount,t.__renderId)}return t})}async#h(t,r,o,n){const i=z(r);let a=await t;if(this.#n(r)&&(a=rr("onBeforeLeave",n.element,i,o,this)(a)),!(K(a)&&"redirect"in a))return a}async#p(t,r,o,n){const i=z(r,n.route),a=await t;if(this.#n(r))return rr("onBeforeEnter",n.element,i,o,this)(a)}#f(t,r){return t instanceof Element&&r instanceof Element?this.#t.has(t)&&this.#t.has(r)?t.localName===r.localName:t===r:!1}#n(t){return t.__renderId===this.#a}async#b(t,r=0,o=0){if(r>Hn)throw new Error(B(`Too many redirects when rendering ${t.from}`));return await this.resolve({...lr,pathname:this.urlForPath(t.pathname,t.params),redirectFrom:t.from,__redirectCount:r+1,__renderId:o})}#m(t=this.#i){if(!(t instanceof Element||t instanceof DocumentFragment))throw new TypeError(B(`Expected router outlet to be a valid DOM Element | DocumentFragment (but got ${t})`))}#c({pathname:t,search:r="",hash:o=""},n){if(window.location.pathname!==t||window.location.search!==r||window.location.hash!==o){const i=n?"replaceState":"pushState";window.history[i](null,document.title,t+r+o),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}#g(t,r){let o=this.#i;for(let n=0;n<(t.__divergedChainIndex??0);n++){const i=r?.chain?.[n].element;if(i)if(i.parentNode===o)t.chain[n].element=i,o=i;else break}return o}#x(t,r){this.#m(),this.#A();const o=this.#g(t,r);this.#o=[],this.#e=Array.from(o?.children??[]).filter(i=>this.#r.has(i)&&i!==t.result);let n=o;for(let i=t.__divergedChainIndex??0;i<(t.chain?.length??0);i++){const a=t.chain[i].element;a&&(n?.appendChild(a),this.#r.add(a),n===o&&this.#o.push(a),n=a)}}#E(){if(this.#e)for(const t of this.#e)t.remove();this.#e=null,this.#o=null}#A(){if(this.#e&&this.#o){for(const t of this.#o)t.remove();this.#e=null,this.#o=null}}#k(t,r){if(!(!r?.chain||t.__divergedChainIndex==null))for(let o=r.chain.length-1;o>=t.__divergedChainIndex&&this.#n(t);o--){const n=r.chain[o].element;if(n)try{const i=z(t);Nt(n.onAfterLeave,n,i,{},this)}finally{if(this.#e?.includes(n))for(const i of n.children)i.remove()}}}#C(t){if(!(!t.chain||t.__divergedChainIndex==null))for(let r=t.__divergedChainIndex;r<t.chain.length&&this.#n(t);r++){const o=t.chain[r].element;if(o){const n=z(t,t.chain[r].route);Nt(o.onAfterEnter,o,n,{},this)}}}async#S(t){const r=this.#e?.[0],o=this.#o?.[0],n=[],{chain:i=[]}=t;let a;for(let s=i.length-1;s>=0;s--)if(i[s].route.animate){a=i[s].route.animate;break}if(r&&o&&a){const s=K(a)&&a.leave?a.leave:"leaving",l=K(a)&&a.enter?a.enter:"entering";n.push(Qe(r,s)),n.push(Qe(o,l))}return await Promise.all(n),t}subscribe(){window.addEventListener("vaadin-router-go",this.#d)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.#d)}#v(t){const{pathname:r,search:o,hash:n}=t instanceof CustomEvent?t.detail:window.location;U(this.__normalizePathname(r))&&(t?.preventDefault&&t.preventDefault(),this.render({pathname:r,search:o,hash:n},!0))}static setTriggers(...t){sr(t)}urlForName(t,r){return this.#s||(this.#s=yn(this,{cacheKeyProvider(o){return"component"in o&&typeof o.component=="string"?o.component:void 0}})),It(this.#s(t,r??void 0),this)}urlForPath(t,r){return It(Ar(t)(r??void 0),this)}static go(t){const{pathname:r,search:o,hash:n}=U(t)?new URL(t,"http://a"):t;return Et("go",{pathname:r,search:o,hash:n})}}const dt=A`
  :host, * {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0) !important;
    -webkit-touch-callout: none !important;
  }

  sl-button,
  sl-icon-button,
  sl-drawer,
  sl-menu-item,
  a,
  button {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0) !important;
    outline: none !important;
  }

  :host {
    --color-wood-dark: #7F451D;
    --color-wood-medium: #C18756;
    --color-cookie-medium: #E8C09A;
    --color-sand-light: #FFE9D4;

    --sl-color-primary-600: var(--color-wood-dark);
    --sl-color-primary-500: var(--color-wood-medium);

    font-family: var(--sl-font-sans, sans-serif);
  }
`;var Wn=Object.defineProperty,qn=Object.getOwnPropertyDescriptor,Ur=(e,t,r,o)=>{for(var n=o>1?void 0:o?qn(t,r):t,i=e.length-1,a;i>=0;i--)(a=e[i])&&(n=(o?a(t,r,n):a(n))||n);return o&&n&&Wn(t,r,n),n};let qt=class extends D{constructor(){super(),this.deferredPrompt=null,window.addEventListener("beforeinstallprompt",t=>{t.preventDefault(),this.deferredPrompt=t}),window.addEventListener("appinstalled",()=>{this.deferredPrompt=null})}connectedCallback(){super.connectedCallback();const t=new CustomEvent("change-title",{detail:{title:"Strona Główna"},bubbles:!0,composed:!0});this.dispatchEvent(t)}async installApp(){if(!this.deferredPrompt)return;this.deferredPrompt.prompt();const{outcome:t}=await this.deferredPrompt.userChoice;t==="accepted"&&(this.deferredPrompt=null)}handleNavigation(t){const o="/mParafia/"+t.substring(1);window.history.pushState({},"",o),window.dispatchEvent(new PopStateEvent("popstate"))}render(){return v`
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

          <sl-button class="tile-button" @click="${()=>this.handleNavigation("/kancelaria")}">
            <sl-icon name="person-lines-fill"></sl-icon>
            <span>Kancelaria</span>
          </sl-button>

          <sl-button class="tile-button" @click="${()=>this.handleNavigation("/dojazd")}">
            <sl-icon name="geo-alt"></sl-icon>
            <span>Dojazd</span>
          </sl-button>

        </div>

        ${this.deferredPrompt?v`
          <div class="install-section">
            <sl-button variant="primary" pill class="install-btn" @click="${this.installApp}">
              <sl-icon slot="prefix" name="download"></sl-icon>
              Zainstaluj mParafię
            </sl-button>
          </div>
        `:null}
      </main>
    `}};qt.styles=[dt,A`
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
    `];Ur([F()],qt.prototype,"deferredPrompt",2);qt=Ur([st("app-home")],qt);var Kn=A`
  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`,Dt=class extends L{constructor(){super(...arguments),this.disableRole=!1,this.label=""}handleFocus(e){const t=$t(e.target);t?.toggleAttribute("data-sl-button-group__button--focus",!0)}handleBlur(e){const t=$t(e.target);t?.toggleAttribute("data-sl-button-group__button--focus",!1)}handleMouseOver(e){const t=$t(e.target);t?.toggleAttribute("data-sl-button-group__button--hover",!0)}handleMouseOut(e){const t=$t(e.target);t?.toggleAttribute("data-sl-button-group__button--hover",!1)}handleSlotChange(){const e=[...this.defaultSlot.assignedElements({flatten:!0})];e.forEach(t=>{const r=e.indexOf(t),o=$t(t);o&&(o.toggleAttribute("data-sl-button-group__button",!0),o.toggleAttribute("data-sl-button-group__button--first",r===0),o.toggleAttribute("data-sl-button-group__button--inner",r>0&&r<e.length-1),o.toggleAttribute("data-sl-button-group__button--last",r===e.length-1),o.toggleAttribute("data-sl-button-group__button--radio",o.tagName.toLowerCase()==="sl-radio-button"))})}render(){return v`
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
    `}};Dt.styles=[Q,Kn];h([J("slot")],Dt.prototype,"defaultSlot",2);h([F()],Dt.prototype,"disableRole",2);h([p()],Dt.prototype,"label",2);function $t(e){var t;const r="sl-button, sl-radio-button";return(t=e.closest(r))!=null?t:e.querySelector(r)}Dt.define("sl-button-group");var Yn=Object.defineProperty,Gn=Object.getOwnPropertyDescriptor,ut=(e,t,r,o)=>{for(var n=o>1?void 0:o?Gn(t,r):t,i=e.length-1,a;i>=0;i--)(a=e[i])&&(n=(o?a(t,r,n):a(n))||n);return o&&n&&Yn(t,r,n),n};let H=class extends D{constructor(){super(...arguments),this.time="",this.name="",this.targetUrl="",this.category="wydarzenie",this.multiline=!1}handleClick(){if(!this.targetUrl)return;const t="/mParafia/"+this.targetUrl.substring(1);window.history.pushState({},"",t),window.dispatchEvent(new PopStateEvent("popstate"))}render(){const e=this.category==="wydarzenie";return v`
      <div class="item-container ${this.category} ${this.multiline?"is-multiline":""}" @click="${this.handleClick}">
        <span class="time">${this.time}</span>
        <span class="name">${this.name}</span>

        ${e?v`<sl-icon name="star-fill"></sl-icon>`:v`<sl-icon name="people-fill"></sl-icon>`}
      </div>
    `}};H.styles=[dt,A`
      .item-container {
        display: flex;
        align-items: center;
        gap: 4px;
        color: var(--color-sand-light);
        padding: 2px 4px;
        border-radius: 4px;
        font-size: 10px;
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
      }

      .item-container.is-multiline .name {
        white-space: normal;
        overflow: visible;
        line-height: 1.3;
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
    `];ut([p({type:String})],H.prototype,"time",2);ut([p({type:String})],H.prototype,"name",2);ut([p({type:String})],H.prototype,"targetUrl",2);ut([p({type:String})],H.prototype,"category",2);ut([p({type:Boolean})],H.prototype,"multiline",2);H=ut([st("calendar-item")],H);var Xn=Object.defineProperty,Zn=Object.getOwnPropertyDescriptor,Xt=(e,t,r,o)=>{for(var n=o>1?void 0:o?Zn(t,r):t,i=e.length-1,a;i>=0;i--)(a=e[i])&&(n=(o?a(t,r,n):a(n))||n);return o&&n&&Xn(t,r,n),n};const Jn=[{date:"2026-03-28",title:"Spotkanie Oazy",time:"19:00",category:"oaza",targetUrl:"/grupy/oaza"},{date:"2026-03-28",title:"Msza Wieczorna",time:"18:00",category:"wydarzenie",targetUrl:"/wydarzenia/msza"},{date:"2026-03-29",title:"Próba Scholi",time:"10:00",category:"schola",targetUrl:"/grupy/schola"},{date:"2026-03-29",title:"Zbiórka LSO",time:"09:00",category:"lso",targetUrl:"/grupy/lso"},{date:"2026-04-02",title:"Rada Parafialna",time:"20:00",category:"rada",targetUrl:"/grupy/rada"},{date:"2026-04-03",title:"Droga Krzyżowa",time:"17:30",category:"wydarzenie",targetUrl:"/wydarzenia/droga-krzyzowa"},{date:"2026-04-04",title:"Oaza Dzieci Bożych",time:"11:00",category:"odb",targetUrl:"/grupy/odb"},{date:"2026-04-05",title:"Domowy Kościół",time:"16:00",category:"domowy",targetUrl:"/grupy/domowy"},{date:"2026-04-05",title:"Gorzkie Żale",time:"17:15",category:"wydarzenie",targetUrl:"/wydarzenia/gorzkie-zale"},{date:"2026-04-08",title:"Grupa biblijna",time:"19:15",category:"biblijna",targetUrl:"/grupy/biblijna"},{date:"2026-04-10",title:"Próba Scholi",time:"18:30",category:"schola",targetUrl:"/grupy/schola"},{date:"2026-04-11",title:"Spotkanie Oazy",time:"19:00",category:"oaza",targetUrl:"/grupy/oaza"},{date:"2026-04-12",title:"Zbiórka LSO",time:"09:00",category:"lso",targetUrl:"/grupy/lso"},{date:"2026-04-14",title:"Krąg Biblijny",time:"18:45",category:"biblijna",targetUrl:"/grupy/biblijna"},{date:"2026-04-16",title:"Rada Parafialna",time:"20:00",category:"rada",targetUrl:"/grupy/rada"},{date:"2026-04-18",title:"Oaza Dzieci Bożych",time:"11:00",category:"odb",targetUrl:"/grupy/odb"},{date:"2026-04-19",title:"Domowy Kościół",time:"16:00",category:"domowy",targetUrl:"/grupy/domowy"},{date:"2026-04-24",title:"Spotkanie Oazy",time:"19:00",category:"oaza",targetUrl:"/grupy/oaza"},{date:"2026-04-26",title:"Zbiórka LSO",time:"09:00",category:"lso",targetUrl:"/grupy/lso"}];let at=class extends D{constructor(){super(...arguments),this.events=Jn,this.currentView="month",this.currentDate=new Date}connectedCallback(){super.connectedCallback();const e=new CustomEvent("change-title",{detail:{title:"Kalendarz Parafialny"},bubbles:!0,composed:!0});this.dispatchEvent(e)}_navigate(e){const t=new Date(this.currentDate),r=e==="next"?1:-1;this.currentView==="month"?t.setMonth(t.getMonth()+r):this.currentView==="week"?t.setDate(t.getDate()+7*r):this.currentView==="day"&&t.setDate(t.getDate()+r),this.currentDate=t}switchToDayView(e){this.currentDate=e,this.currentView="day"}_getHeaderTitle(){if(this.currentView==="month")return this.currentDate.toLocaleDateString("pl-PL",{month:"long",year:"numeric"});if(this.currentView==="day")return this.currentDate.toLocaleDateString("pl-PL",{weekday:"long",day:"numeric",month:"long"});{const e=this._getStartOfWeek(this.currentDate),t=new Date(e);t.setDate(t.getDate()+6);const r=e.toLocaleDateString("pl-PL",{day:"numeric",month:"short"}),o=t.toLocaleDateString("pl-PL",{day:"numeric",month:"short"});return`${r} - ${o} ${t.getFullYear()}`}}_getStartOfWeek(e){const t=new Date(e),r=t.getDay(),o=t.getDate()-r+(r===0?-6:1);return new Date(t.setDate(o))}_isToday(e){const t=new Date;return e.getDate()===t.getDate()&&e.getMonth()===t.getMonth()&&e.getFullYear()===t.getFullYear()}_formatDateString(e){const t=e.getFullYear(),r=String(e.getMonth()+1).padStart(2,"0"),o=String(e.getDate()).padStart(2,"0");return`${t}-${r}-${o}`}render(){return v`
      <div class="view-controls">
        <sl-button-group>
          <sl-button variant=${this.currentView==="month"?"primary":"default"} @click=${()=>this.currentView="month"}>Miesiąc</sl-button>
          <sl-button variant=${this.currentView==="week"?"primary":"default"} @click=${()=>this.currentView="week"}>Tydzień</sl-button>
          <sl-button variant=${this.currentView==="day"?"primary":"default"} @click=${()=>this.currentView="day"}>Dzień</sl-button>
        </sl-button-group>
      </div>

      <div class="calendar-header">
        <sl-icon-button name="chevron-left" @click=${()=>this._navigate("prev")}></sl-icon-button>
        <h2>${this._getHeaderTitle()}</h2>
        <sl-icon-button name="chevron-right" @click=${()=>this._navigate("next")}></sl-icon-button>
      </div>

      ${this.currentView==="month"?this.renderMonthView():null}
      ${this.currentView==="week"?this.renderWeekView():null}
      ${this.currentView==="day"?this.renderDayView():null}
    `}renderMonthView(){const e=this.currentDate.getFullYear(),t=this.currentDate.getMonth(),r=new Date(e,t+1,0).getDate(),o=Array.from({length:r},(s,l)=>l+1),n=new Date(e,t,1).getDay(),i=n===0?6:n-1,a=Array.from({length:i},(s,l)=>l);return v`
      <div class="grid-month">
        ${["Pn","Wt","Śr","Cz","Pt","Sb","Nd"].map(s=>v`<div class="day-name">${s}</div>`)}
        ${a.map(()=>v`<div class="day empty"></div>`)}
        ${o.map(s=>{const l=this._formatDateString(new Date(e,t,s)),u=this.events.filter(c=>c.date===l),d=this._isToday(new Date(e,t,s));return v`
            <div
              class=${nt({day:!0,today:d})}
              @click=${()=>this.switchToDayView(new Date(e,t,s))}
            >
              <span class="day-number">${s}</span>
              ${this.renderEventTags(u,"month")}
            </div>
          `})}
      </div>
    `}renderWeekView(){const e=this._getStartOfWeek(this.currentDate),t=Array.from({length:7},(r,o)=>{const n=new Date(e);return n.setDate(n.getDate()+o),n});return v`
      <div class="grid-week">
        ${t.map(r=>{const o=this._formatDateString(r),n=this.events.filter(a=>a.date===o),i=this._isToday(r);return v`
            <div
              class=${nt({"week-day":!0,today:i})}
              @click=${()=>this.switchToDayView(r)}
            >
              <div class="week-day-header">
                <div class="week-day-name">${r.toLocaleDateString("pl-PL",{weekday:"short"})}</div>
                <div class="week-day-number">${r.getDate()}</div>
              </div>

              ${n.length>0?this.renderEventTags(n,"week"):v`<div class="no-events-small">Brak</div>`}
            </div>
          `})}
      </div>
    `}renderDayView(){const e=this._formatDateString(this.currentDate),t=this.events.filter(o=>o.date===e),r=this._isToday(this.currentDate);return v`
      <div class="list-view">
        <div class=${nt({"list-day-row":!0,today:r})}>
          <div class="list-day-header">Wydarzenia</div>

          ${t.length>0?this.renderEventTags(t,"day"):v`<span class="no-events" style="display:block; padding: 20px 0; font-size: 0.85rem; color: #666; text-align: center; font-style: italic;">Brak wydarzeń zaplanowanych na ten dzień.</span>`}
        </div>
      </div>
    `}renderEventTags(e,t){const r=t==="week"||t==="day",o=t==="day";return e.map(n=>v`
      <calendar-item
        time="${n.time}"
        name="${n.title}"
        category="${n.category}"
        ?multiline=${r}
        targetUrl="${o?n.targetUrl:""}">
      </calendar-item>
    `)}};at.styles=[dt,A`
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
        min-height: 30px;
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
        min-width: 100px;
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
    `];Xt([F()],at.prototype,"events",2);Xt([F()],at.prototype,"currentView",2);Xt([F()],at.prototype,"currentDate",2);at=Xt([st("app-calendar")],at);var Qn=Object.getOwnPropertyDescriptor,ti=(e,t,r,o)=>{for(var n=o>1?void 0:o?Qn(t,r):t,i=e.length-1,a;i>=0;i--)(a=e[i])&&(n=a(n)||n);return n};let ue=class extends D{connectedCallback(){super.connectedCallback();const t=new CustomEvent("change-title",{detail:{title:"Grupy"},bubbles:!0,composed:!0});this.dispatchEvent(t)}render(){return v`
      <div>
        <!-- wnętrze podstrony -->
      </div>
    `}};ue.styles=[dt,A`
      /* style  css tylko dla tej konkretnej podstrony */
    `];ue=ti([st("app-groups")],ue);var ei=Object.getOwnPropertyDescriptor,ri=(e,t,r,o)=>{for(var n=o>1?void 0:o?ei(t,r):t,i=e.length-1,a;i>=0;i--)(a=e[i])&&(n=a(n)||n);return n};let he=class extends D{connectedCallback(){super.connectedCallback();const e=new CustomEvent("change-title",{detail:{title:"Wydarzenia"},bubbles:!0,composed:!0});this.dispatchEvent(e)}render(){return v`
      <div>
        <!-- wnętrze podstrony -->
      </div>
    `}};he.styles=[dt,A`
      /* style  css tylko dla tej konkretnej podstrony */
    `];he=ri([st("app-events")],he);var oi=Object.defineProperty,ni=Object.getOwnPropertyDescriptor,Se=(e,t,r,o)=>{for(var n=o>1?void 0:o?ni(t,r):t,i=e.length-1,a;i>=0;i--)(a=e[i])&&(n=(o?a(t,r,n):a(n))||n);return o&&n&&oi(t,r,n),n};const ii="/mParafia/";ae(`${ii}shoelace-assets`);let Pt=class extends D{constructor(){super(...arguments),this.pageTitle="mParafia",this.touchStartX=0,this.touchStartY=0,this.touchEndX=0,this.touchEndY=0,this.handleTouchStart=e=>{this.touchStartX=e.changedTouches[0].screenX,this.touchStartY=e.changedTouches[0].screenY},this.handleTouchMove=e=>{this.touchStartX<=30&&e.preventDefault()},this.handleTouchEnd=e=>{this.touchEndX=e.changedTouches[0].screenX,this.touchEndY=e.changedTouches[0].screenY,this.checkSwipe()}}connectedCallback(){super.connectedCallback(),window.addEventListener("touchstart",this.handleTouchStart,{passive:!0}),window.addEventListener("touchmove",this.handleTouchMove,{passive:!1}),window.addEventListener("touchend",this.handleTouchEnd,{passive:!0})}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("touchstart",this.handleTouchStart),window.removeEventListener("touchmove",this.handleTouchMove),window.removeEventListener("touchend",this.handleTouchEnd)}checkSwipe(){const e=this.touchEndX-this.touchStartX,t=this.touchEndY-this.touchStartY;if(Math.abs(t)>Math.abs(e))return;this.touchStartX<=40&&e>50&&this.drawer&&!this.drawer.open&&this.drawer.show(),this.drawer&&this.drawer.open&&e<-50&&this.drawer.hide()}firstUpdated(){const e=this.shadowRoot?.querySelector("#router-outlet"),t="/mParafia/";new jn(e,{baseUrl:t}).setRoutes([{path:"/",component:"app-home"},{path:"/kalendarz",component:"app-calendar"},{path:"/grupy",component:"app-groups"},{path:"/wydarzenia",component:"app-events"},{path:"(.*)",redirect:"/"}])}handleTitleChange(e){this.pageTitle=e.detail.title}openMenu(){this.drawer.show()}handleNavigation(e){this.drawer.hide();const r="/mParafia/"+e.substring(1);window.history.pushState({},"",r),window.dispatchEvent(new PopStateEvent("popstate"))}render(){return v`
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
    `}};Pt.styles=[dt,A`
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
        z-index: 10;
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
    `];Se([J("sl-drawer")],Pt.prototype,"drawer",2);Se([F()],Pt.prototype,"pageTitle",2);Pt=Se([st("app-index")],Pt);
//# sourceMappingURL=index-bAw460J_.js.map
