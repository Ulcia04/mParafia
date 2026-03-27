import{setBasePath as pe}from"https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.16.0/dist/utilities/base-path.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function e(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=e(s);fetch(s.href,i)}})();pe("https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.16.0/cdn/");/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const G=globalThis,pt=G.ShadowRoot&&(G.ShadyCSS===void 0||G.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ft=Symbol(),Et=new WeakMap;let Wt=class{constructor(t,e,o){if(this._$cssResult$=!0,o!==ft)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(pt&&t===void 0){const o=e!==void 0&&e.length===1;o&&(t=Et.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&Et.set(e,t))}return t}toString(){return this.cssText}};const fe=r=>new Wt(typeof r=="string"?r:r+"",void 0,ft),_=(r,...t)=>{const e=r.length===1?r[0]:t.reduce((o,s,i)=>o+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[i+1],r[0]);return new Wt(e,r,ft)},be=(r,t)=>{if(pt)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const o=document.createElement("style"),s=G.litNonce;s!==void 0&&o.setAttribute("nonce",s),o.textContent=e.cssText,r.appendChild(o)}},kt=pt?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const o of t.cssRules)e+=o.cssText;return fe(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:ge,defineProperty:me,getOwnPropertyDescriptor:ve,getOwnPropertyNames:ye,getOwnPropertySymbols:we,getPrototypeOf:_e}=Object,tt=globalThis,St=tt.trustedTypes,$e=St?St.emptyScript:"",xe=tt.reactiveElementPolyfillSupport,V=(r,t)=>r,Y={toAttribute(r,t){switch(t){case Boolean:r=r?$e:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},bt=(r,t)=>!ge(r,t),Pt={attribute:!0,type:String,converter:Y,reflect:!1,useDefault:!1,hasChanged:bt};Symbol.metadata??=Symbol("metadata"),tt.litPropertyMetadata??=new WeakMap;let O=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Pt){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const o=Symbol(),s=this.getPropertyDescriptor(t,o,e);s!==void 0&&me(this.prototype,t,s)}}static getPropertyDescriptor(t,e,o){const{get:s,set:i}=ve(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get:s,set(n){const a=s?.call(this);i?.call(this,n),this.requestUpdate(t,a,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Pt}static _$Ei(){if(this.hasOwnProperty(V("elementProperties")))return;const t=_e(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(V("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(V("properties"))){const e=this.properties,o=[...ye(e),...we(e)];for(const s of o)this.createProperty(s,e[s])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[o,s]of e)this.elementProperties.set(o,s)}this._$Eh=new Map;for(const[e,o]of this.elementProperties){const s=this._$Eu(e,o);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const s of o)e.unshift(kt(s))}else t!==void 0&&e.push(kt(t));return e}static _$Eu(t,e){const o=e.attribute;return o===!1?void 0:typeof o=="string"?o:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const o of e.keys())this.hasOwnProperty(o)&&(t.set(o,this[o]),delete this[o]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return be(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,o){this._$AK(t,o)}_$ET(t,e){const o=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,o);if(s!==void 0&&o.reflect===!0){const i=(o.converter?.toAttribute!==void 0?o.converter:Y).toAttribute(e,o.type);this._$Em=t,i==null?this.removeAttribute(s):this.setAttribute(s,i),this._$Em=null}}_$AK(t,e){const o=this.constructor,s=o._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const i=o.getPropertyOptions(s),n=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:Y;this._$Em=s;const a=n.fromAttribute(e,i.type);this[s]=a??this._$Ej?.get(s)??a,this._$Em=null}}requestUpdate(t,e,o,s=!1,i){if(t!==void 0){const n=this.constructor;if(s===!1&&(i=this[t]),o??=n.getPropertyOptions(t),!((o.hasChanged??bt)(i,e)||o.useDefault&&o.reflect&&i===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,o))))return;this.C(t,e,o)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:o,reflect:s,wrapped:i},n){o&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),i!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||o||(e=void 0),this._$AL.set(t,e)),s===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[s,i]of this._$Ep)this[s]=i;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[s,i]of o){const{wrapped:n}=i,a=this[s];n!==!0||this._$AL.has(s)||a===void 0||this.C(s,void 0,i,a)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(o=>o.hostUpdate?.()),this.update(e)):this._$EM()}catch(o){throw t=!1,this._$EM(),o}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};O.elementStyles=[],O.shadowRootOptions={mode:"open"},O[V("elementProperties")]=new Map,O[V("finalized")]=new Map,xe?.({ReactiveElement:O}),(tt.reactiveElementVersions??=[]).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gt=globalThis,Lt=r=>r,X=gt.trustedTypes,Ot=X?X.createPolicy("lit-html",{createHTML:r=>r}):void 0,Zt="$lit$",x=`lit$${Math.random().toFixed(9).slice(2)}$`,Kt="?"+x,Ae=`<${Kt}>`,P=document,D=()=>P.createComment(""),I=r=>r===null||typeof r!="object"&&typeof r!="function",mt=Array.isArray,Ce=r=>mt(r)||typeof r?.[Symbol.iterator]=="function",st=`[ 	
\f\r]`,M=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ut=/-->/g,Rt=/>/g,E=RegExp(`>|${st}(?:([^\\s"'>=/]+)(${st}*=${st}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Mt=/'/g,zt=/"/g,Gt=/^(?:script|style|textarea|title)$/i,Ee=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),w=Ee(1),L=Symbol.for("lit-noChange"),b=Symbol.for("lit-nothing"),Nt=new WeakMap,S=P.createTreeWalker(P,129);function Jt(r,t){if(!mt(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ot!==void 0?Ot.createHTML(t):t}const ke=(r,t)=>{const e=r.length-1,o=[];let s,i=t===2?"<svg>":t===3?"<math>":"",n=M;for(let a=0;a<e;a++){const l=r[a];let d,f,c=-1,g=0;for(;g<l.length&&(n.lastIndex=g,f=n.exec(l),f!==null);)g=n.lastIndex,n===M?f[1]==="!--"?n=Ut:f[1]!==void 0?n=Rt:f[2]!==void 0?(Gt.test(f[2])&&(s=RegExp("</"+f[2],"g")),n=E):f[3]!==void 0&&(n=E):n===E?f[0]===">"?(n=s??M,c=-1):f[1]===void 0?c=-2:(c=n.lastIndex-f[2].length,d=f[1],n=f[3]===void 0?E:f[3]==='"'?zt:Mt):n===zt||n===Mt?n=E:n===Ut||n===Rt?n=M:(n=E,s=void 0);const m=n===E&&r[a+1].startsWith("/>")?" ":"";i+=n===M?l+Ae:c>=0?(o.push(d),l.slice(0,c)+Zt+l.slice(c)+x+m):l+x+(c===-2?a:m)}return[Jt(r,i+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),o]};class j{constructor({strings:t,_$litType$:e},o){let s;this.parts=[];let i=0,n=0;const a=t.length-1,l=this.parts,[d,f]=ke(t,e);if(this.el=j.createElement(d,o),S.currentNode=this.el.content,e===2||e===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(s=S.nextNode())!==null&&l.length<a;){if(s.nodeType===1){if(s.hasAttributes())for(const c of s.getAttributeNames())if(c.endsWith(Zt)){const g=f[n++],m=s.getAttribute(c).split(x),W=/([.?@])?(.*)/.exec(g);l.push({type:1,index:i,name:W[2],strings:m,ctor:W[1]==="."?Pe:W[1]==="?"?Le:W[1]==="@"?Oe:et}),s.removeAttribute(c)}else c.startsWith(x)&&(l.push({type:6,index:i}),s.removeAttribute(c));if(Gt.test(s.tagName)){const c=s.textContent.split(x),g=c.length-1;if(g>0){s.textContent=X?X.emptyScript:"";for(let m=0;m<g;m++)s.append(c[m],D()),S.nextNode(),l.push({type:2,index:++i});s.append(c[g],D())}}}else if(s.nodeType===8)if(s.data===Kt)l.push({type:2,index:i});else{let c=-1;for(;(c=s.data.indexOf(x,c+1))!==-1;)l.push({type:7,index:i}),c+=x.length-1}i++}}static createElement(t,e){const o=P.createElement("template");return o.innerHTML=t,o}}function R(r,t,e=r,o){if(t===L)return t;let s=o!==void 0?e._$Co?.[o]:e._$Cl;const i=I(t)?void 0:t._$litDirective$;return s?.constructor!==i&&(s?._$AO?.(!1),i===void 0?s=void 0:(s=new i(r),s._$AT(r,e,o)),o!==void 0?(e._$Co??=[])[o]=s:e._$Cl=s),s!==void 0&&(t=R(r,s._$AS(r,t.values),s,o)),t}class Se{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:o}=this._$AD,s=(t?.creationScope??P).importNode(e,!0);S.currentNode=s;let i=S.nextNode(),n=0,a=0,l=o[0];for(;l!==void 0;){if(n===l.index){let d;l.type===2?d=new F(i,i.nextSibling,this,t):l.type===1?d=new l.ctor(i,l.name,l.strings,this,t):l.type===6&&(d=new Ue(i,this,t)),this._$AV.push(d),l=o[++a]}n!==l?.index&&(i=S.nextNode(),n++)}return S.currentNode=P,s}p(t){let e=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}}class F{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,o,s){this.type=2,this._$AH=b,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=R(this,t,e),I(t)?t===b||t==null||t===""?(this._$AH!==b&&this._$AR(),this._$AH=b):t!==this._$AH&&t!==L&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Ce(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==b&&I(this._$AH)?this._$AA.nextSibling.data=t:this.T(P.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:o}=t,s=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=j.createElement(Jt(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===s)this._$AH.p(e);else{const i=new Se(s,this),n=i.u(this.options);i.p(e),this.T(n),this._$AH=i}}_$AC(t){let e=Nt.get(t.strings);return e===void 0&&Nt.set(t.strings,e=new j(t)),e}k(t){mt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,s=0;for(const i of t)s===e.length?e.push(o=new F(this.O(D()),this.O(D()),this,this.options)):o=e[s],o._$AI(i),s++;s<e.length&&(this._$AR(o&&o._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const o=Lt(t).nextSibling;Lt(t).remove(),t=o}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class et{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,o,s,i){this.type=1,this._$AH=b,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=i,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=b}_$AI(t,e=this,o,s){const i=this.strings;let n=!1;if(i===void 0)t=R(this,t,e,0),n=!I(t)||t!==this._$AH&&t!==L,n&&(this._$AH=t);else{const a=t;let l,d;for(t=i[0],l=0;l<i.length-1;l++)d=R(this,a[o+l],e,l),d===L&&(d=this._$AH[l]),n||=!I(d)||d!==this._$AH[l],d===b?t=b:t!==b&&(t+=(d??"")+i[l+1]),this._$AH[l]=d}n&&!s&&this.j(t)}j(t){t===b?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Pe extends et{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===b?void 0:t}}class Le extends et{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==b)}}class Oe extends et{constructor(t,e,o,s,i){super(t,e,o,s,i),this.type=5}_$AI(t,e=this){if((t=R(this,t,e,0)??b)===L)return;const o=this._$AH,s=t===b&&o!==b||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,i=t!==b&&(o===b||s);s&&this.element.removeEventListener(this.name,this,o),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class Ue{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){R(this,t)}}const Re=gt.litHtmlPolyfillSupport;Re?.(j,F),(gt.litHtmlVersions??=[]).push("3.3.2");const Me=(r,t,e)=>{const o=e?.renderBefore??t;let s=o._$litPart$;if(s===void 0){const i=e?.renderBefore??null;o._$litPart$=s=new F(t.insertBefore(D(),i),i,void 0,e??{})}return s._$AI(r),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vt=globalThis;let A=class extends O{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Me(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return L}};A._$litElement$=!0,A.finalized=!0,vt.litElementHydrateSupport?.({LitElement:A});const ze=vt.litElementPolyfillSupport;ze?.({LitElement:A});(vt.litElementVersions??=[]).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const yt=r=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(r,t)}):customElements.define(r,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ne={attribute:!0,type:String,converter:Y,reflect:!1,hasChanged:bt},Te=(r=Ne,t,e)=>{const{kind:o,metadata:s}=e;let i=globalThis.litPropertyMetadata.get(s);if(i===void 0&&globalThis.litPropertyMetadata.set(s,i=new Map),o==="setter"&&((r=Object.create(r)).wrapped=!0),i.set(e.name,r),o==="accessor"){const{name:n}=e;return{set(a){const l=t.get.call(this);t.set.call(this,a),this.requestUpdate(n,l,r,!0,a)},init(a){return a!==void 0&&this.C(n,void 0,r,a),a}}}if(o==="setter"){const{name:n}=e;return function(a){const l=this[n];t.call(this,a),this.requestUpdate(n,l,r,!0,a)}}throw Error("Unsupported decorator location: "+o)};function h(r){return(t,e)=>typeof e=="object"?Te(r,t,e):((o,s,i)=>{const n=s.hasOwnProperty(i);return s.constructor.createProperty(i,o),n?Object.getOwnPropertyDescriptor(s,i):void 0})(r,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function rt(r){return h({...r,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Be=(r,t,e)=>(e.configurable=!0,e.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(r,t,e),e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ve(r,t){return(e,o,s)=>{const i=n=>n.renderRoot?.querySelector(r)??null;return Be(e,o,{get(){return i(this)}})}}var De=_`
  :host {
    --border-color: var(--sl-color-neutral-200);
    --border-radius: var(--sl-border-radius-medium);
    --border-width: 1px;
    --padding: var(--sl-spacing-large);

    display: inline-block;
  }

  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-small);
    border: solid var(--border-width) var(--border-color);
    border-radius: var(--border-radius);
  }

  .card__image {
    display: flex;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
  }

  .card__image::slotted(img) {
    display: block;
    width: 100%;
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card__header {
    display: block;
    border-bottom: solid var(--border-width) var(--border-color);
    padding: calc(var(--padding) / 2) var(--padding);
  }

  .card:not(.card--has-header) .card__header {
    display: none;
  }

  .card:not(.card--has-image) .card__header {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  .card__body {
    display: block;
    padding: var(--padding);
  }

  .card--has-footer .card__footer {
    display: block;
    border-top: solid var(--border-width) var(--border-color);
    padding: var(--padding);
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }
`,Yt=class{constructor(r,...t){this.slotNames=[],this.handleSlotChange=e=>{const o=e.target;(this.slotNames.includes("[default]")&&!o.name||o.name&&this.slotNames.includes(o.name))&&this.host.requestUpdate()},(this.host=r).addController(this),this.slotNames=t}hasDefaultSlot(){return[...this.host.childNodes].some(r=>{if(r.nodeType===r.TEXT_NODE&&r.textContent.trim()!=="")return!0;if(r.nodeType===r.ELEMENT_NODE){const t=r;if(t.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(r){return this.host.querySelector(`:scope > [slot="${r}"]`)!==null}test(r){return r==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(r)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}},ot=_`
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
`,Xt=Object.defineProperty,Ie=Object.defineProperties,je=Object.getOwnPropertyDescriptor,He=Object.getOwnPropertyDescriptors,Tt=Object.getOwnPropertySymbols,Fe=Object.prototype.hasOwnProperty,qe=Object.prototype.propertyIsEnumerable,Qt=r=>{throw TypeError(r)},Bt=(r,t,e)=>t in r?Xt(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,q=(r,t)=>{for(var e in t||(t={}))Fe.call(t,e)&&Bt(r,e,t[e]);if(Tt)for(var e of Tt(t))qe.call(t,e)&&Bt(r,e,t[e]);return r},te=(r,t)=>Ie(r,He(t)),u=(r,t,e,o)=>{for(var s=o>1?void 0:o?je(t,e):t,i=r.length-1,n;i>=0;i--)(n=r[i])&&(s=(o?n(t,e,s):n(s))||s);return o&&s&&Xt(t,e,s),s},ee=(r,t,e)=>t.has(r)||Qt("Cannot "+e),We=(r,t,e)=>(ee(r,t,"read from private field"),t.get(r)),Ze=(r,t,e)=>t.has(r)?Qt("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(r):t.set(r,e),Ke=(r,t,e,o)=>(ee(r,t,"write to private field"),t.set(r,e),e),J,C=class extends A{constructor(){super(),Ze(this,J,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([r,t])=>{this.constructor.define(r,t)})}emit(r,t){const e=new CustomEvent(r,q({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(e),e}static define(r,t=this,e={}){const o=customElements.get(r);if(!o){try{customElements.define(r,t,e)}catch{customElements.define(r,class extends t{},e)}return}let s=" (unknown version)",i=s;"version"in t&&t.version&&(s=" v"+t.version),"version"in o&&o.version&&(i=" v"+o.version),!(s&&i&&s===i)&&console.warn(`Attempted to register <${r}>${s}, but <${r}>${i} has already been registered.`)}attributeChangedCallback(r,t,e){We(this,J)||(this.constructor.elementProperties.forEach((o,s)=>{o.reflect&&this[s]!=null&&this.initialReflectedProperties.set(s,this[s])}),Ke(this,J,!0)),super.attributeChangedCallback(r,t,e)}willUpdate(r){super.willUpdate(r),this.initialReflectedProperties.forEach((t,e)=>{r.has(e)&&this[e]==null&&(this[e]=t)})}};J=new WeakMap;C.version="2.20.1";C.dependencies={};u([h()],C.prototype,"dir",2);u([h()],C.prototype,"lang",2);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ge={ATTRIBUTE:1},Je=r=>(...t)=>({_$litDirective$:r,values:t});let Ye=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,o){this._$Ct=t,this._$AM=e,this._$Ci=o}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const re=Je(class extends Ye{constructor(r){if(super(r),r.type!==Ge.ATTRIBUTE||r.name!=="class"||r.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(r){return" "+Object.keys(r).filter(t=>r[t]).join(" ")+" "}update(r,[t]){if(this.st===void 0){this.st=new Set,r.strings!==void 0&&(this.nt=new Set(r.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in t)t[o]&&!this.nt?.has(o)&&this.st.add(o);return this.render(t)}const e=r.element.classList;for(const o of this.st)o in t||(e.remove(o),this.st.delete(o));for(const o in t){const s=!!t[o];s===this.st.has(o)||this.nt?.has(o)||(s?(e.add(o),this.st.add(o)):(e.remove(o),this.st.delete(o)))}return L}});var oe=class extends C{constructor(){super(...arguments),this.hasSlotController=new Yt(this,"footer","header","image")}render(){return w`
      <div
        part="base"
        class=${re({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};oe.styles=[ot,De];oe.define("sl-card");var Xe=_`
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
`;const ct=new Set,U=new Map;let k,wt="ltr",_t="en";const se=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(se){const r=new MutationObserver(ne);wt=document.documentElement.dir||"ltr",_t=document.documentElement.lang||navigator.language,r.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function ie(...r){r.map(t=>{const e=t.$code.toLowerCase();U.has(e)?U.set(e,Object.assign(Object.assign({},U.get(e)),t)):U.set(e,t),k||(k=t)}),ne()}function ne(){se&&(wt=document.documentElement.dir||"ltr",_t=document.documentElement.lang||navigator.language),[...ct.keys()].map(r=>{typeof r.requestUpdate=="function"&&r.requestUpdate()})}let Qe=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){ct.add(this.host)}hostDisconnected(){ct.delete(this.host)}dir(){return`${this.host.dir||wt}`.toLowerCase()}lang(){return`${this.host.lang||_t}`.toLowerCase()}getTranslationData(t){var e,o;const s=new Intl.Locale(t.replace(/_/g,"-")),i=s?.language.toLowerCase(),n=(o=(e=s?.region)===null||e===void 0?void 0:e.toLowerCase())!==null&&o!==void 0?o:"",a=U.get(`${i}-${n}`),l=U.get(i);return{locale:s,language:i,region:n,primary:a,secondary:l}}exists(t,e){var o;const{primary:s,secondary:i}=this.getTranslationData((o=e.lang)!==null&&o!==void 0?o:this.lang());return e=Object.assign({includeFallback:!1},e),!!(s&&s[t]||i&&i[t]||e.includeFallback&&k&&k[t])}term(t,...e){const{primary:o,secondary:s}=this.getTranslationData(this.lang());let i;if(o&&o[t])i=o[t];else if(s&&s[t])i=s[t];else if(k&&k[t])i=k[t];else return console.error(`No translation found for: ${String(t)}`),String(t);return typeof i=="function"?i(...e):i}date(t,e){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),e).format(t)}number(t,e){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),e).format(t)}relativeTime(t,e,o){return new Intl.RelativeTimeFormat(this.lang(),o).format(t,e)}};var ae={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(r,t)=>`Go to slide ${r} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:r=>r===0?"No options selected":r===1?"1 option selected":`${r} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:r=>`Slide ${r}`,toggleColorFormat:"Toggle color format"};ie(ae);var tr=ae,le=class extends Qe{};ie(tr);var ce=class extends C{constructor(){super(...arguments),this.localize=new le(this)}render(){return w`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};ce.styles=[ot,Xe];var z=new WeakMap,N=new WeakMap,T=new WeakMap,it=new WeakSet,Z=new WeakMap,er=class{constructor(r,t){this.handleFormData=e=>{const o=this.options.disabled(this.host),s=this.options.name(this.host),i=this.options.value(this.host),n=this.host.tagName.toLowerCase()==="sl-button";this.host.isConnected&&!o&&!n&&typeof s=="string"&&s.length>0&&typeof i<"u"&&(Array.isArray(i)?i.forEach(a=>{e.formData.append(s,a.toString())}):e.formData.append(s,i.toString()))},this.handleFormSubmit=e=>{var o;const s=this.options.disabled(this.host),i=this.options.reportValidity;this.form&&!this.form.noValidate&&((o=z.get(this.form))==null||o.forEach(n=>{this.setUserInteracted(n,!0)})),this.form&&!this.form.noValidate&&!s&&!i(this.host)&&(e.preventDefault(),e.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),Z.set(this.host,[])},this.handleInteraction=e=>{const o=Z.get(this.host);o.includes(e.type)||o.push(e.type),o.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const e=this.form.querySelectorAll("*");for(const o of e)if(typeof o.checkValidity=="function"&&!o.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const e=this.form.querySelectorAll("*");for(const o of e)if(typeof o.reportValidity=="function"&&!o.reportValidity())return!1}return!0},(this.host=r).addController(this),this.options=q({form:e=>{const o=e.form;if(o){const i=e.getRootNode().querySelector(`#${o}`);if(i)return i}return e.closest("form")},name:e=>e.name,value:e=>e.value,defaultValue:e=>e.defaultValue,disabled:e=>{var o;return(o=e.disabled)!=null?o:!1},reportValidity:e=>typeof e.reportValidity=="function"?e.reportValidity():!0,checkValidity:e=>typeof e.checkValidity=="function"?e.checkValidity():!0,setValue:(e,o)=>e.value=o,assumeInteractionOn:["sl-input"]},t)}hostConnected(){const r=this.options.form(this.host);r&&this.attachForm(r),Z.set(this.host,[]),this.options.assumeInteractionOn.forEach(t=>{this.host.addEventListener(t,this.handleInteraction)})}hostDisconnected(){this.detachForm(),Z.delete(this.host),this.options.assumeInteractionOn.forEach(r=>{this.host.removeEventListener(r,this.handleInteraction)})}hostUpdated(){const r=this.options.form(this.host);r||this.detachForm(),r&&this.form!==r&&(this.detachForm(),this.attachForm(r)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(r){r?(this.form=r,z.has(this.form)?z.get(this.form).add(this.host):z.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),N.has(this.form)||(N.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),T.has(this.form)||(T.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const r=z.get(this.form);r&&(r.delete(this.host),r.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),N.has(this.form)&&(this.form.reportValidity=N.get(this.form),N.delete(this.form)),T.has(this.form)&&(this.form.checkValidity=T.get(this.form),T.delete(this.form)),this.form=void 0))}setUserInteracted(r,t){t?it.add(r):it.delete(r),r.requestUpdate()}doAction(r,t){if(this.form){const e=document.createElement("button");e.type=r,e.style.position="absolute",e.style.width="0",e.style.height="0",e.style.clipPath="inset(50%)",e.style.overflow="hidden",e.style.whiteSpace="nowrap",t&&(e.name=t.name,e.value=t.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(o=>{t.hasAttribute(o)&&e.setAttribute(o,t.getAttribute(o))})),this.form.append(e),e.click(),e.remove()}}getForm(){var r;return(r=this.form)!=null?r:null}reset(r){this.doAction("reset",r)}submit(r){this.doAction("submit",r)}setValidity(r){const t=this.host,e=!!it.has(t),o=!!t.required;t.toggleAttribute("data-required",o),t.toggleAttribute("data-optional",!o),t.toggleAttribute("data-invalid",!r),t.toggleAttribute("data-valid",r),t.toggleAttribute("data-user-invalid",!r&&e),t.toggleAttribute("data-user-valid",r&&e)}updateValidity(){const r=this.host;this.setValidity(r.validity.valid)}emitInvalidEvent(r){const t=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});r||t.preventDefault(),this.host.dispatchEvent(t)||r?.preventDefault()}},$t=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1});Object.freeze(te(q({},$t),{valid:!1,valueMissing:!0}));Object.freeze(te(q({},$t),{valid:!1,customError:!0}));var rr=_`
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
`,dt="";function Vt(r){dt=r}function or(r=""){if(!dt){const t=[...document.getElementsByTagName("script")],e=t.find(o=>o.hasAttribute("data-shoelace"));if(e)Vt(e.getAttribute("data-shoelace"));else{const o=t.find(i=>/shoelace(\.min)?\.js($|\?)/.test(i.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(i.src));let s="";o&&(s=o.getAttribute("src")),Vt(s.split("/").slice(0,-1).join("/"))}}return dt.replace(/\/$/,"")+(r?`/${r.replace(/^\//,"")}`:"")}var sr={name:"default",resolver:r=>or(`assets/icons/${r}.svg`)},ir=sr,Dt={caret:`
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
  `},nr={name:"system",resolver:r=>r in Dt?`data:image/svg+xml,${encodeURIComponent(Dt[r])}`:""},ar=nr,lr=[ir,ar],ut=[];function cr(r){ut.push(r)}function dr(r){ut=ut.filter(t=>t!==r)}function It(r){return lr.find(t=>t.name===r)}var ur=_`
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
`;function xt(r,t){const e=q({waitUntilFirstUpdate:!1},t);return(o,s)=>{const{update:i}=o,n=Array.isArray(r)?r:[r];o.update=function(a){n.forEach(l=>{const d=l;if(a.has(d)){const f=a.get(d),c=this[d];f!==c&&(!e.waitUntilFirstUpdate||this.hasUpdated)&&this[s](f,c)}}),i.call(this,a)}}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const hr=(r,t)=>r?._$litType$!==void 0;var B=Symbol(),K=Symbol(),nt,at=new Map,v=class extends C{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(r,t){var e;let o;if(t?.spriteSheet)return this.svg=w`<svg part="svg">
        <use part="use" href="${r}"></use>
      </svg>`,this.svg;try{if(o=await fetch(r,{mode:"cors"}),!o.ok)return o.status===410?B:K}catch{return K}try{const s=document.createElement("div");s.innerHTML=await o.text();const i=s.firstElementChild;if(((e=i?.tagName)==null?void 0:e.toLowerCase())!=="svg")return B;nt||(nt=new DOMParser);const a=nt.parseFromString(i.outerHTML,"text/html").body.querySelector("svg");return a?(a.part.add("svg"),document.adoptNode(a)):B}catch{return B}}connectedCallback(){super.connectedCallback(),cr(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),dr(this)}getIconSource(){const r=It(this.library);return this.name&&r?{url:r.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var r;const{url:t,fromLibrary:e}=this.getIconSource(),o=e?It(this.library):void 0;if(!t){this.svg=null;return}let s=at.get(t);if(s||(s=this.resolveIcon(t,o),at.set(t,s)),!this.initialRender)return;const i=await s;if(i===K&&at.delete(t),t===this.getIconSource().url){if(hr(i)){if(this.svg=i,o){await this.updateComplete;const n=this.shadowRoot.querySelector("[part='svg']");typeof o.mutator=="function"&&n&&o.mutator(n)}return}switch(i){case K:case B:this.svg=null,this.emit("sl-error");break;default:this.svg=i.cloneNode(!0),(r=o?.mutator)==null||r.call(o,this.svg),this.emit("sl-load")}}}render(){return this.svg}};v.styles=[ot,ur];u([rt()],v.prototype,"svg",2);u([h({reflect:!0})],v.prototype,"name",2);u([h()],v.prototype,"src",2);u([h()],v.prototype,"label",2);u([h({reflect:!0})],v.prototype,"library",2);u([xt("label")],v.prototype,"handleLabelChange",1);u([xt(["name","src","library"])],v.prototype,"setIcon",1);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const de=Symbol.for(""),pr=r=>{if(r?.r===de)return r?._$litStatic$},jt=(r,...t)=>({_$litStatic$:t.reduce((e,o,s)=>e+(i=>{if(i._$litStatic$!==void 0)return i._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${i}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(o)+r[s+1],r[0]),r:de}),Ht=new Map,fr=r=>(t,...e)=>{const o=e.length;let s,i;const n=[],a=[];let l,d=0,f=!1;for(;d<o;){for(l=t[d];d<o&&(i=e[d],(s=pr(i))!==void 0);)l+=s+t[++d],f=!0;d!==o&&a.push(i),n.push(l),d++}if(d===o&&n.push(t[o]),f){const c=n.join("$$lit$$");(t=Ht.get(c))===void 0&&(n.raw=n,Ht.set(c,t=n)),e=a}return r(t,...e)},lt=fr(w);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const y=r=>r??b;var p=class extends C{constructor(){super(...arguments),this.formControlController=new er(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new Yt(this,"[default]","prefix","suffix"),this.localize=new le(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:$t}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(r){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(r)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(r){this.button.focus(r)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(r){this.isButton()&&(this.button.setCustomValidity(r),this.formControlController.updateValidity())}render(){const r=this.isLink(),t=r?jt`a`:jt`button`;return lt`
      <${t}
        part="base"
        class=${re({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${y(r?void 0:this.disabled)}
        type=${y(r?void 0:this.type)}
        title=${this.title}
        name=${y(r?void 0:this.name)}
        value=${y(r?void 0:this.value)}
        href=${y(r&&!this.disabled?this.href:void 0)}
        target=${y(r?this.target:void 0)}
        download=${y(r?this.download:void 0)}
        rel=${y(r?this.rel:void 0)}
        role=${y(r?void 0:"button")}
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
        ${this.caret?lt` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?lt`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${t}>
    `}};p.styles=[ot,rr];p.dependencies={"sl-icon":v,"sl-spinner":ce};u([Ve(".button")],p.prototype,"button",2);u([rt()],p.prototype,"hasFocus",2);u([rt()],p.prototype,"invalid",2);u([h()],p.prototype,"title",2);u([h({reflect:!0})],p.prototype,"variant",2);u([h({reflect:!0})],p.prototype,"size",2);u([h({type:Boolean,reflect:!0})],p.prototype,"caret",2);u([h({type:Boolean,reflect:!0})],p.prototype,"disabled",2);u([h({type:Boolean,reflect:!0})],p.prototype,"loading",2);u([h({type:Boolean,reflect:!0})],p.prototype,"outline",2);u([h({type:Boolean,reflect:!0})],p.prototype,"pill",2);u([h({type:Boolean,reflect:!0})],p.prototype,"circle",2);u([h()],p.prototype,"type",2);u([h()],p.prototype,"name",2);u([h()],p.prototype,"value",2);u([h()],p.prototype,"href",2);u([h()],p.prototype,"target",2);u([h()],p.prototype,"rel",2);u([h()],p.prototype,"download",2);u([h()],p.prototype,"form",2);u([h({attribute:"formaction"})],p.prototype,"formAction",2);u([h({attribute:"formenctype"})],p.prototype,"formEnctype",2);u([h({attribute:"formmethod"})],p.prototype,"formMethod",2);u([h({attribute:"formnovalidate",type:Boolean})],p.prototype,"formNoValidate",2);u([h({attribute:"formtarget"})],p.prototype,"formTarget",2);u([xt("disabled",{waitUntilFirstUpdate:!0})],p.prototype,"handleDisabledChange",1);p.define("sl-button");v.define("sl-icon");const br=_`
  @media(min-width: 1000px) {
    sl-card {
      max-width: 70vw;
    }
  }

  :host {
    --color-wood-dark: #7F451D;
    --color-wood-medium: #C18756;
    --color-sand-light: #FFE9D4;
    
    --sl-color-primary-600: var(--color-wood-dark);
    --sl-color-primary-500: var(--color-wood-medium);

    display: block;
    background-color: var(--color-sand-light);
    min-height: 100vh;
}

  main {
    padding: 20px;
    padding-top: 54px;
    background-color: var(--color-sand-light);
    min-height: 100vh;
    color: var(--color-wood-dark);
    font-family: var(--sl-font-sans, sans-serif);
  }
`;var gr=Object.defineProperty,mr=Object.getOwnPropertyDescriptor,ue=(r,t,e,o)=>{for(var s=o>1?void 0:o?mr(t,e):t,i=r.length-1,n;i>=0;i--)(n=r[i])&&(s=(o?n(t,e,s):n(s))||s);return o&&s&&gr(t,e,s),s};let Q=class extends A{constructor(){super(),this.deferredPrompt=null,window.addEventListener("beforeinstallprompt",r=>{r.preventDefault(),this.deferredPrompt=r}),window.addEventListener("appinstalled",()=>{this.deferredPrompt=null})}async installApp(){if(!this.deferredPrompt)return;this.deferredPrompt.prompt();const{outcome:r}=await this.deferredPrompt.userChoice;r==="accepted"&&(this.deferredPrompt=null)}render(){return w`
      <main>
        <div style="text-align: center; margin-bottom: 20px;">
          <img src="./assets/icons/icon_512.png" style="width: 90px; border-radius: 22px; box-shadow: 0 4px 15px rgba(127, 69, 29, 0.3);">
          <h1 style="color: var(--color-wood-dark); margin-top: 15px;">mParafia</h1>
        </div>

        <sl-card>
          <div slot="header" style="font-weight: bold; color: var(--color-wood-dark); display: flex; align-items: center; gap: 8px;">
            <sl-icon name="megaphone"></sl-icon> Ogłoszenia parafialne
          </div>
          Zapraszamy na nabożeństwo majowe o godzinie 18:00.
        </sl-card>

        <div class="grid-container">
          
          <sl-button class="tile-button" style="height: 110px;">
            <div style="display: flex; flex-direction: column; gap: 8px;">
              <sl-icon name="calendar3" style="font-size: 28px;"></sl-icon>
              <span>Msze św.</span>
            </div>
          </sl-button>

          <sl-button class="tile-button" style="height: 110px;">
            <div style="display: flex; flex-direction: column; gap: 8px;">
              <sl-icon name="journal-text" style="font-size: 28px;"></sl-icon>
              <span>Intencje</span>
            </div>
          </sl-button>

          <sl-button class="tile-button" style="height: 110px;">
            <div style="display: flex; flex-direction: column; gap: 8px;">
              <sl-icon name="person-lines-fill" style="font-size: 28px;"></sl-icon>
              <span>Kancelaria</span>
            </div>
          </sl-button>

          <sl-button class="tile-button" style="height: 110px;">
            <div style="display: flex; flex-direction: column; gap: 8px;">
              <sl-icon name="geo-alt" style="font-size: 28px;"></sl-icon>
              <span>Dojazd</span>
            </div>
          </sl-button>

        </div>

        ${this.deferredPrompt?w`
          <div class="install-section">
            <sl-button variant="primary" pill @click="${this.installApp}" style="width: 100%;">
              <sl-icon slot="prefix" name="download"></sl-icon>
              Zainstaluj mParafię
            </sl-button>
          </div>
        `:null}
      </main>
    `}};Q.styles=[br,_`
    main {
      padding: 16px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 15px;
    }

    sl-button.tile-button::part(base) {
      background-color: var(--color-wood-dark);
      border-color: var(--color-wood-dark);
      transition: all 0.2s ease;
    }

    sl-button.tile-button::part(base):hover,
    sl-button.tile-button::part(base):active {
      background-color: var(--color-wood-medium);
      border-color: var(--color-wood-medium);
      transform: scale(0.98);
    }

    sl-button.tile-button sl-icon,
    sl-button.tile-button span {
      color: var(--color-sand-light); 
    }

    sl-button span {
      font-weight: 500;
    }

    .grid-container {
      display: grid; 
      grid-template-columns: 1fr 1fr; 
      gap: 15px; 
      width: 100%;
      max-width: 500px;
    }

    sl-card {
      width: 100%;
      max-width: 500px;
      --border-radius: 16px;
      border: none;
      --sl-color-neutral-0: var(--color-wood-medium); 
      --sl-panel-background-color: var(--color-wood-medium);
      box-shadow: none; 
    }

    sl-card::part(header),
    sl-card::part(body) {
      color: var(--color-wood-dark);
    }

    sl-card::part(header) {
      border-bottom: 2px solid var(--color-wood-dark);
    }

    sl-card [slot="header"] sl-icon {
      color: var(--color-wood-dark);
    }

    .install-section {
      margin-top: 20px;
      width: 100%;
      max-width: 400px;
    }
  `];ue([rt()],Q.prototype,"deferredPrompt",2);Q=ue([yt("app-home")],Q);const vr="modulepreload",yr=function(r){return"/mParafia/"+r},Ft={},wr=function(t,e,o){let s=Promise.resolve();if(e&&e.length>0){document.getElementsByTagName("link");const n=document.querySelector("meta[property=csp-nonce]"),a=n?.nonce||n?.getAttribute("nonce");s=Promise.allSettled(e.map(l=>{if(l=yr(l),l in Ft)return;Ft[l]=!0;const d=l.endsWith(".css"),f=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${f}`))return;const c=document.createElement("link");if(c.rel=d?"stylesheet":vr,d||(c.as="script"),c.crossOrigin="",c.href=l,a&&c.setAttribute("nonce",a),document.head.appendChild(c),d)return new Promise((g,m)=>{c.addEventListener("load",g),c.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${l}`)))})}))}function i(n){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=n,window.dispatchEvent(a),!a.defaultPrevented)throw n}return s.then(n=>{for(const a of n||[])a.status==="rejected"&&i(a.reason);return t().catch(i)})},At=Symbol.for("app-tools::log::1.x");globalThis[At]={setDebug:_r,debug:"window"in globalThis?new URL(window.location.href).searchParams.has("app-tools-debug"):!1};function _r(r){globalThis[At].debug=!!r}function $r(r,t){globalThis[At].debug&&(console.groupCollapsed(`[app-tools] ${r}`),t&&console.log(t),console.groupEnd())}function xr(r){return(t,e)=>{$r(`${r}: ${t}`,e)}}const $=xr("router");class Ar extends Event{constructor(t){super("route-changed"),this.context=t}}class Cr extends EventTarget{context={params:{},query:{},title:"",url:new URL(window.location.href)};constructor(t){super(),this.config=t,this.routes=t.routes.map(e=>({...e,urlPattern:new URLPattern({pathname:e.path,baseURL:window.location.href,search:"*",hash:"*"})})),$("Initialized routes",this.routes),queueMicrotask(()=>{this.navigate(new URL(window.location.href),{replace:!0})}),window.addEventListener("popstate",this._onPopState),window.addEventListener("click",this._onAnchorClick)}uninstall(){window.removeEventListener("popstate",this._onPopState),window.removeEventListener("click",this._onAnchorClick)}get url(){return new URL(window.location.href)}get fallback(){return new URL(this.config?.fallback||this.baseUrl.href.substring(window.location.origin.length),this.baseUrl)}get baseUrl(){return new URL("./",document.baseURI)}render(){return $(`Rendering route ${this.context.url.pathname}${this.context.url.search}${this.context.url.hash}`,{context:this.context,route:this.route}),this.route?.render?.(this.context)}_matchRoute(t){for(const e of this.routes){const o=e.urlPattern.exec(t);if(o){const{title:s}=e,i=Object.fromEntries(new URLSearchParams(t.search)),n=o?.pathname?.groups??{};return this.context={url:t,title:typeof s=="function"?s({params:n,query:i,url:t}):s,params:n,query:i},e}}return $(`No route matched for ${t.pathname}${t.search}${t.hash}`,t),null}_notifyUrlChanged(){this.dispatchEvent(new Ar(this.context))}_onPopState=()=>{this.navigate(new URL(window.location.href),{backNav:!0})};_onAnchorClick=t=>{if(t.defaultPrevented||t.button!==0||t.metaKey||t.ctrlKey||t.shiftKey)return;const e=t.composedPath().find(i=>i.tagName==="A");if(!e||!e.href)return;const o=new URL(e.href);if(this.url.href===o.href||o.host!==window.location.host||e.hasAttribute("download")||e.href.includes("mailto:"))return;const s=e.getAttribute("target");s&&s!==""&&s!=="_self"||(t.preventDefault(),this.navigate(o))};_collectPlugins(t){return[...this.config?.plugins??[],...t?.plugins??[]]}async navigate(t,e={}){typeof t=="string"&&(t=new URL(t,this.baseUrl));let o=this._matchRoute(t)||this._matchRoute(this.fallback);$(`Navigating to ${t.pathname}${t.search}${t.hash}`,{context:this.context,route:this.route});let s=this._collectPlugins(o),i;do{i=!1;for(const n of s)try{const a=await n?.shouldNavigate?.(this.context);if(a&&!await a.condition()){t=new URL(a.redirect,this.baseUrl),o=this._matchRoute(t)||this._matchRoute(this.fallback),s=this._collectPlugins(o),$("Redirecting",{context:this.context,route:this.route}),i=!0;break}}catch(a){throw $(`Plugin "${n.name}" error on shouldNavigate hook`,a),a}}while(i);if(this.route=o,!this.route)throw new Error(`[ROUTER] No route or fallback matched for url ${t}`);for(const n of s)try{await n?.beforeNavigation?.(this.context)}catch(a){throw $(`Plugin "${n.name}" error on beforeNavigation hook`,a),a}e?.replace?window.history.replaceState(null,"",`${t.pathname}${t.search}${t.hash}`):e.backNav||window.history.pushState(null,"",`${t.pathname}${t.search}${t.hash}`),document.title=this.context.title,this._notifyUrlChanged();for(const n of s)try{await n?.afterNavigation?.(this.context)}catch(a){throw $(`Plugin "${n.name}" error on afterNavigation hook`,a),a}}}globalThis.URLPattern||await wr(()=>import("./index-DPyTNidZ.js"),[]);const Er="/mParafia/",qt=new Cr({routes:[{path:he(),title:"Home",render:()=>w`<app-home></app-home>`}]});function he(r){var t=Er;return t}var kr=Object.defineProperty,Sr=Object.getOwnPropertyDescriptor,Ct=(r,t,e,o)=>{for(var s=o>1?void 0:o?Sr(t,e):t,i=r.length-1,n;i>=0;i--)(n=r[i])&&(s=(o?n(t,e,s):n(s))||s);return o&&s&&kr(t,e,s),s};let H=class extends A{constructor(){super(...arguments),this.title="PWA Starter",this.enableBack=!1}render(){return w`
      <header>

        <div id="back-button-block">
          ${this.enableBack?w`<sl-button size="small" href="${he()}">
            Back
          </sl-button>`:null}

          <h1>${this.title}</h1>
        </div>
      </header>
    `}};H.styles=_`
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: var(--app-color-primary);
      color: white;
      padding: 12px;
      padding-top: 4px;

      position: fixed;
      left: env(titlebar-area-x, 0);
      top: env(titlebar-area-y, 0);
      height: env(titlebar-area-height, 30px);
      width: env(titlebar-area-width, 100%);
      -webkit-app-region: drag;
    }

    header h1 {
      margin-top: 0;
      margin-bottom: 0;
      font-size: 12px;
      font-weight: bold;
    }

    nav a {
      margin-left: 10px;
    }

    #back-button-block {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 8px;
    }

    @media(prefers-color-scheme: light) {
      header {
        color: black;
      }

      nav a {
        color: initial;
      }
    }
  `;Ct([h({type:String})],H.prototype,"title",2);Ct([h({type:Boolean})],H.prototype,"enableBack",2);H=Ct([yt("app-header")],H);var Pr=Object.getOwnPropertyDescriptor,Lr=(r,t,e,o)=>{for(var s=o>1?void 0:o?Pr(t,e):t,i=r.length-1,n;i>=0;i--)(n=r[i])&&(s=n(s)||s);return s};let ht=class extends A{firstUpdated(){qt.addEventListener("route-changed",()=>{"startViewTransition"in document?document.startViewTransition(()=>this.requestUpdate()):this.requestUpdate()})}render(){return qt.render()}};ht.styles=_`
    main {
      padding-left: 16px;
      padding-right: 16px;
      padding-bottom: 16px;
    }
  `;ht=Lr([yt("app-index")],ht);
//# sourceMappingURL=index-Cp3i40OP.js.map
