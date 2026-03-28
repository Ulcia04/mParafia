(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function r(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(n){if(n.ep)return;n.ep=!0;const i=r(n);fetch(n.href,i)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pt=globalThis,ae=Pt.ShadowRoot&&(Pt.ShadyCSS===void 0||Pt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,le=Symbol(),Ee=new WeakMap;let nr=class{constructor(t,r,o){if(this._$cssResult$=!0,o!==le)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(ae&&t===void 0){const o=r!==void 0&&r.length===1;o&&(t=Ee.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&Ee.set(r,t))}return t}toString(){return this.cssText}};const Mr=e=>new nr(typeof e=="string"?e:e+"",void 0,le),C=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((o,n,i)=>o+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+e[i+1],e[0]);return new nr(r,e,le)},zr=(e,t)=>{if(ae)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const o=document.createElement("style"),n=Pt.litNonce;n!==void 0&&o.setAttribute("nonce",n),o.textContent=r.cssText,e.appendChild(o)}},Ae=ae?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const o of t.cssRules)r+=o.cssText;return Mr(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Ir,defineProperty:Dr,getOwnPropertyDescriptor:Ur,getOwnPropertyNames:Fr,getOwnPropertySymbols:Nr,getPrototypeOf:Hr}=Object,Ht=globalThis,Ce=Ht.trustedTypes,Br=Ce?Ce.emptyScript:"",Vr=Ht.reactiveElementPolyfillSupport,vt=(e,t)=>e,zt={toAttribute(e,t){switch(t){case Boolean:e=e?Br:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},ce=(e,t)=>!Ir(e,t),ke={attribute:!0,type:String,converter:zt,reflect:!1,useDefault:!1,hasChanged:ce};Symbol.metadata??=Symbol("metadata"),Ht.litPropertyMetadata??=new WeakMap;let X=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,r=ke){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(t,r),!r.noAccessor){const o=Symbol(),n=this.getPropertyDescriptor(t,o,r);n!==void 0&&Dr(this.prototype,t,n)}}static getPropertyDescriptor(t,r,o){const{get:n,set:i}=Ur(this.prototype,t)??{get(){return this[r]},set(s){this[r]=s}};return{get:n,set(s){const a=n?.call(this);i?.call(this,s),this.requestUpdate(t,a,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??ke}static _$Ei(){if(this.hasOwnProperty(vt("elementProperties")))return;const t=Hr(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(vt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(vt("properties"))){const r=this.properties,o=[...Fr(r),...Nr(r)];for(const n of o)this.createProperty(n,r[n])}const t=this[Symbol.metadata];if(t!==null){const r=litPropertyMetadata.get(t);if(r!==void 0)for(const[o,n]of r)this.elementProperties.set(o,n)}this._$Eh=new Map;for(const[r,o]of this.elementProperties){const n=this._$Eu(r,o);n!==void 0&&this._$Eh.set(n,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const n of o)r.unshift(Ae(n))}else t!==void 0&&r.push(Ae(t));return r}static _$Eu(t,r){const o=r.attribute;return o===!1?void 0:typeof o=="string"?o:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,r=this.constructor.elementProperties;for(const o of r.keys())this.hasOwnProperty(o)&&(t.set(o,this[o]),delete this[o]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return zr(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,r,o){this._$AK(t,o)}_$ET(t,r){const o=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,o);if(n!==void 0&&o.reflect===!0){const i=(o.converter?.toAttribute!==void 0?o.converter:zt).toAttribute(r,o.type);this._$Em=t,i==null?this.removeAttribute(n):this.setAttribute(n,i),this._$Em=null}}_$AK(t,r){const o=this.constructor,n=o._$Eh.get(t);if(n!==void 0&&this._$Em!==n){const i=o.getPropertyOptions(n),s=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:zt;this._$Em=n;const a=s.fromAttribute(r,i.type);this[n]=a??this._$Ej?.get(n)??a,this._$Em=null}}requestUpdate(t,r,o,n=!1,i){if(t!==void 0){const s=this.constructor;if(n===!1&&(i=this[t]),o??=s.getPropertyOptions(t),!((o.hasChanged??ce)(i,r)||o.useDefault&&o.reflect&&i===this._$Ej?.get(t)&&!this.hasAttribute(s._$Eu(t,o))))return;this.C(t,r,o)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,r,{useDefault:o,reflect:n,wrapped:i},s){o&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,s??r??this[t]),i!==!0||s!==void 0)||(this._$AL.has(t)||(this.hasUpdated||o||(r=void 0),this._$AL.set(t,r)),n===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[n,i]of this._$Ep)this[n]=i;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[n,i]of o){const{wrapped:s}=i,a=this[n];s!==!0||this._$AL.has(n)||a===void 0||this.C(n,void 0,i,a)}}let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),this._$EO?.forEach(o=>o.hostUpdate?.()),this.update(r)):this._$EM()}catch(o){throw t=!1,this._$EM(),o}t&&this._$AE(r)}willUpdate(t){}_$AE(t){this._$EO?.forEach(r=>r.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(r=>this._$ET(r,this[r])),this._$EM()}updated(t){}firstUpdated(t){}};X.elementStyles=[],X.shadowRootOptions={mode:"open"},X[vt("elementProperties")]=new Map,X[vt("finalized")]=new Map,Vr?.({ReactiveElement:X}),(Ht.reactiveElementVersions??=[]).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const de=globalThis,Se=e=>e,It=de.trustedTypes,Pe=It?It.createPolicy("lit-html",{createHTML:e=>e}):void 0,ir="$lit$",F=`lit$${Math.random().toFixed(9).slice(2)}$`,sr="?"+F,jr=`<${sr}>`,G=document,gt=()=>G.createComment(""),yt=e=>e===null||typeof e!="object"&&typeof e!="function",ue=Array.isArray,Wr=e=>ue(e)||typeof e?.[Symbol.iterator]=="function",Wt=`[ 	
\f\r]`,at=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Re=/-->/g,Le=/>/g,V=RegExp(`>|${Wt}(?:([^\\s"'>=/]+)(${Wt}*=${Wt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Oe=/'/g,Te=/"/g,ar=/^(?:script|style|textarea|title)$/i,qr=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),R=qr(1),Y=Symbol.for("lit-noChange"),w=Symbol.for("lit-nothing"),Me=new WeakMap,q=G.createTreeWalker(G,129);function lr(e,t){if(!ue(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Pe!==void 0?Pe.createHTML(t):t}const Kr=(e,t)=>{const r=e.length-1,o=[];let n,i=t===2?"<svg>":t===3?"<math>":"",s=at;for(let a=0;a<r;a++){const l=e[a];let u,d,c=-1,b=0;for(;b<l.length&&(s.lastIndex=b,d=s.exec(l),d!==null);)b=s.lastIndex,s===at?d[1]==="!--"?s=Re:d[1]!==void 0?s=Le:d[2]!==void 0?(ar.test(d[2])&&(n=RegExp("</"+d[2],"g")),s=V):d[3]!==void 0&&(s=V):s===V?d[0]===">"?(s=n??at,c=-1):d[1]===void 0?c=-2:(c=s.lastIndex-d[2].length,u=d[1],s=d[3]===void 0?V:d[3]==='"'?Te:Oe):s===Te||s===Oe?s=V:s===Re||s===Le?s=at:(s=V,n=void 0);const f=s===V&&e[a+1].startsWith("/>")?" ":"";i+=s===at?l+jr:c>=0?(o.push(u),l.slice(0,c)+ir+l.slice(c)+F+f):l+F+(c===-2?a:f)}return[lr(e,i+(e[r]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),o]};class wt{constructor({strings:t,_$litType$:r},o){let n;this.parts=[];let i=0,s=0;const a=t.length-1,l=this.parts,[u,d]=Kr(t,r);if(this.el=wt.createElement(u,o),q.currentNode=this.el.content,r===2||r===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(n=q.nextNode())!==null&&l.length<a;){if(n.nodeType===1){if(n.hasAttributes())for(const c of n.getAttributeNames())if(c.endsWith(ir)){const b=d[s++],f=n.getAttribute(c).split(F),v=/([.?@])?(.*)/.exec(b);l.push({type:1,index:i,name:v[2],strings:f,ctor:v[1]==="."?Yr:v[1]==="?"?Zr:v[1]==="@"?Jr:Bt}),n.removeAttribute(c)}else c.startsWith(F)&&(l.push({type:6,index:i}),n.removeAttribute(c));if(ar.test(n.tagName)){const c=n.textContent.split(F),b=c.length-1;if(b>0){n.textContent=It?It.emptyScript:"";for(let f=0;f<b;f++)n.append(c[f],gt()),q.nextNode(),l.push({type:2,index:++i});n.append(c[b],gt())}}}else if(n.nodeType===8)if(n.data===sr)l.push({type:2,index:i});else{let c=-1;for(;(c=n.data.indexOf(F,c+1))!==-1;)l.push({type:7,index:i}),c+=F.length-1}i++}}static createElement(t,r){const o=G.createElement("template");return o.innerHTML=t,o}}function tt(e,t,r=e,o){if(t===Y)return t;let n=o!==void 0?r._$Co?.[o]:r._$Cl;const i=yt(t)?void 0:t._$litDirective$;return n?.constructor!==i&&(n?._$AO?.(!1),i===void 0?n=void 0:(n=new i(e),n._$AT(e,r,o)),o!==void 0?(r._$Co??=[])[o]=n:r._$Cl=n),n!==void 0&&(t=tt(e,n._$AS(e,t.values),n,o)),t}class Gr{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:r},parts:o}=this._$AD,n=(t?.creationScope??G).importNode(r,!0);q.currentNode=n;let i=q.nextNode(),s=0,a=0,l=o[0];for(;l!==void 0;){if(s===l.index){let u;l.type===2?u=new xt(i,i.nextSibling,this,t):l.type===1?u=new l.ctor(i,l.name,l.strings,this,t):l.type===6&&(u=new Xr(i,this,t)),this._$AV.push(u),l=o[++a]}s!==l?.index&&(i=q.nextNode(),s++)}return q.currentNode=G,n}p(t){let r=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(t,o,r),r+=o.strings.length-2):o._$AI(t[r])),r++}}class xt{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,r,o,n){this.type=2,this._$AH=w,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=o,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&t?.nodeType===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=tt(this,t,r),yt(t)?t===w||t==null||t===""?(this._$AH!==w&&this._$AR(),this._$AH=w):t!==this._$AH&&t!==Y&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Wr(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==w&&yt(this._$AH)?this._$AA.nextSibling.data=t:this.T(G.createTextNode(t)),this._$AH=t}$(t){const{values:r,_$litType$:o}=t,n=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=wt.createElement(lr(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===n)this._$AH.p(r);else{const i=new Gr(n,this),s=i.u(this.options);i.p(r),this.T(s),this._$AH=i}}_$AC(t){let r=Me.get(t.strings);return r===void 0&&Me.set(t.strings,r=new wt(t)),r}k(t){ue(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let o,n=0;for(const i of t)n===r.length?r.push(o=new xt(this.O(gt()),this.O(gt()),this,this.options)):o=r[n],o._$AI(i),n++;n<r.length&&(this._$AR(o&&o._$AB.nextSibling,n),r.length=n)}_$AR(t=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);t!==this._$AB;){const o=Se(t).nextSibling;Se(t).remove(),t=o}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class Bt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,o,n,i){this.type=1,this._$AH=w,this._$AN=void 0,this.element=t,this.name=r,this._$AM=n,this.options=i,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=w}_$AI(t,r=this,o,n){const i=this.strings;let s=!1;if(i===void 0)t=tt(this,t,r,0),s=!yt(t)||t!==this._$AH&&t!==Y,s&&(this._$AH=t);else{const a=t;let l,u;for(t=i[0],l=0;l<i.length-1;l++)u=tt(this,a[o+l],r,l),u===Y&&(u=this._$AH[l]),s||=!yt(u)||u!==this._$AH[l],u===w?t=w:t!==w&&(t+=(u??"")+i[l+1]),this._$AH[l]=u}s&&!n&&this.j(t)}j(t){t===w?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Yr extends Bt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===w?void 0:t}}class Zr extends Bt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==w)}}class Jr extends Bt{constructor(t,r,o,n,i){super(t,r,o,n,i),this.type=5}_$AI(t,r=this){if((t=tt(this,t,r,0)??w)===Y)return;const o=this._$AH,n=t===w&&o!==w||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,i=t!==w&&(o===w||n);n&&this.element.removeEventListener(this.name,this,o),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class Xr{constructor(t,r,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){tt(this,t)}}const Qr=de.litHtmlPolyfillSupport;Qr?.(wt,xt),(de.litHtmlVersions??=[]).push("3.3.2");const to=(e,t,r)=>{const o=r?.renderBefore??t;let n=o._$litPart$;if(n===void 0){const i=r?.renderBefore??null;o._$litPart$=n=new xt(t.insertBefore(gt(),i),i,void 0,r??{})}return n._$AI(e),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const he=globalThis;let I=class extends X{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=to(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Y}};I._$litElement$=!0,I.finalized=!0,he.litElementHydrateSupport?.({LitElement:I});const eo=he.litElementPolyfillSupport;eo?.({LitElement:I});(he.litElementVersions??=[]).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Et=e=>(t,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ro={attribute:!0,type:String,converter:zt,reflect:!1,hasChanged:ce},oo=(e=ro,t,r)=>{const{kind:o,metadata:n}=r;let i=globalThis.litPropertyMetadata.get(n);if(i===void 0&&globalThis.litPropertyMetadata.set(n,i=new Map),o==="setter"&&((e=Object.create(e)).wrapped=!0),i.set(r.name,e),o==="accessor"){const{name:s}=r;return{set(a){const l=t.get.call(this);t.set.call(this,a),this.requestUpdate(s,l,e,!0,a)},init(a){return a!==void 0&&this.C(s,void 0,e,a),a}}}if(o==="setter"){const{name:s}=r;return function(a){const l=this[s];t.call(this,a),this.requestUpdate(s,l,e,!0,a)}}throw Error("Unsupported decorator location: "+o)};function p(e){return(t,r)=>typeof r=="object"?oo(e,t,r):((o,n,i)=>{const s=n.hasOwnProperty(i);return n.constructor.createProperty(i,o),s?Object.getOwnPropertyDescriptor(n,i):void 0})(e,t,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function et(e){return p({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const no=(e,t,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,r),r);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function rt(e,t){return(r,o,n)=>{const i=s=>s.renderRoot?.querySelector(e)??null;return no(r,o,{get(){return i(this)}})}}var Xt="";function Qt(e){Xt=e}function io(e=""){if(!Xt){const t=[...document.getElementsByTagName("script")],r=t.find(o=>o.hasAttribute("data-shoelace"));if(r)Qt(r.getAttribute("data-shoelace"));else{const o=t.find(i=>/shoelace(\.min)?\.js($|\?)/.test(i.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(i.src));let n="";o&&(n=o.getAttribute("src")),Qt(n.split("/").slice(0,-1).join("/"))}}return Xt.replace(/\/$/,"")+(e?`/${e.replace(/^\//,"")}`:"")}var so={name:"default",resolver:e=>io(`assets/icons/${e}.svg`)},ao=so,ze={caret:`
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
  `},lo={name:"system",resolver:e=>e in ze?`data:image/svg+xml,${encodeURIComponent(ze[e])}`:""},co=lo,uo=[ao,co],te=[];function ho(e){te.push(e)}function po(e){te=te.filter(t=>t!==e)}function Ie(e){return uo.find(t=>t.name===e)}var fo=C`
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
`,cr=Object.defineProperty,bo=Object.defineProperties,vo=Object.getOwnPropertyDescriptor,mo=Object.getOwnPropertyDescriptors,De=Object.getOwnPropertySymbols,go=Object.prototype.hasOwnProperty,yo=Object.prototype.propertyIsEnumerable,qt=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),pe=e=>{throw TypeError(e)},Ue=(e,t,r)=>t in e?cr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,ot=(e,t)=>{for(var r in t||(t={}))go.call(t,r)&&Ue(e,r,t[r]);if(De)for(var r of De(t))yo.call(t,r)&&Ue(e,r,t[r]);return e},fe=(e,t)=>bo(e,mo(t)),h=(e,t,r,o)=>{for(var n=o>1?void 0:o?vo(t,r):t,i=e.length-1,s;i>=0;i--)(s=e[i])&&(n=(o?s(t,r,n):s(n))||n);return o&&n&&cr(t,r,n),n},dr=(e,t,r)=>t.has(e)||pe("Cannot "+r),wo=(e,t,r)=>(dr(e,t,"read from private field"),t.get(e)),_o=(e,t,r)=>t.has(e)?pe("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),$o=(e,t,r,o)=>(dr(e,t,"write to private field"),t.set(e,r),r),xo=function(e,t){this[0]=e,this[1]=t},Eo=e=>{var t=e[qt("asyncIterator")],r=!1,o,n={};return t==null?(t=e[qt("iterator")](),o=i=>n[i]=s=>t[i](s)):(t=t.call(e),o=i=>n[i]=s=>{if(r){if(r=!1,i==="throw")throw s;return s}return r=!0,{done:!1,value:new xo(new Promise(a=>{var l=t[i](s);l instanceof Object||pe("Object expected"),a(l)}),1)}}),n[qt("iterator")]=()=>n,o("next"),"throw"in t?o("throw"):n.throw=i=>{throw i},"return"in t&&o("return"),n};function nt(e,t){const r=ot({waitUntilFirstUpdate:!1},t);return(o,n)=>{const{update:i}=o,s=Array.isArray(e)?e:[e];o.update=function(a){s.forEach(l=>{const u=l;if(a.has(u)){const d=a.get(u),c=this[u];d!==c&&(!r.waitUntilFirstUpdate||this.hasUpdated)&&this[n](d,c)}}),i.call(this,a)}}}var it=C`
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
`,Rt,D=class extends I{constructor(){super(),_o(this,Rt,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([e,t])=>{this.constructor.define(e,t)})}emit(e,t){const r=new CustomEvent(e,ot({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(r),r}static define(e,t=this,r={}){const o=customElements.get(e);if(!o){try{customElements.define(e,t,r)}catch{customElements.define(e,class extends t{},r)}return}let n=" (unknown version)",i=n;"version"in t&&t.version&&(n=" v"+t.version),"version"in o&&o.version&&(i=" v"+o.version),!(n&&i&&n===i)&&console.warn(`Attempted to register <${e}>${n}, but <${e}>${i} has already been registered.`)}attributeChangedCallback(e,t,r){wo(this,Rt)||(this.constructor.elementProperties.forEach((o,n)=>{o.reflect&&this[n]!=null&&this.initialReflectedProperties.set(n,this[n])}),$o(this,Rt,!0)),super.attributeChangedCallback(e,t,r)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,r)=>{e.has(r)&&this[r]==null&&(this[r]=t)})}};Rt=new WeakMap;D.version="2.20.1";D.dependencies={};h([p()],D.prototype,"dir",2);h([p()],D.prototype,"lang",2);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ao=(e,t)=>e?._$litType$!==void 0;var lt=Symbol(),Ct=Symbol(),Kt,Gt=new Map,L=class extends D{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(e,t){var r;let o;if(t?.spriteSheet)return this.svg=R`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,this.svg;try{if(o=await fetch(e,{mode:"cors"}),!o.ok)return o.status===410?lt:Ct}catch{return Ct}try{const n=document.createElement("div");n.innerHTML=await o.text();const i=n.firstElementChild;if(((r=i?.tagName)==null?void 0:r.toLowerCase())!=="svg")return lt;Kt||(Kt=new DOMParser);const a=Kt.parseFromString(i.outerHTML,"text/html").body.querySelector("svg");return a?(a.part.add("svg"),document.adoptNode(a)):lt}catch{return lt}}connectedCallback(){super.connectedCallback(),ho(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),po(this)}getIconSource(){const e=Ie(this.library);return this.name&&e?{url:e.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var e;const{url:t,fromLibrary:r}=this.getIconSource(),o=r?Ie(this.library):void 0;if(!t){this.svg=null;return}let n=Gt.get(t);if(n||(n=this.resolveIcon(t,o),Gt.set(t,n)),!this.initialRender)return;const i=await n;if(i===Ct&&Gt.delete(t),t===this.getIconSource().url){if(Ao(i)){if(this.svg=i,o){await this.updateComplete;const s=this.shadowRoot.querySelector("[part='svg']");typeof o.mutator=="function"&&s&&o.mutator(s)}return}switch(i){case Ct:case lt:this.svg=null,this.emit("sl-error");break;default:this.svg=i.cloneNode(!0),(e=o?.mutator)==null||e.call(o,this.svg),this.emit("sl-load")}}}render(){return this.svg}};L.styles=[it,fo];h([et()],L.prototype,"svg",2);h([p({reflect:!0})],L.prototype,"name",2);h([p()],L.prototype,"src",2);h([p()],L.prototype,"label",2);h([p({reflect:!0})],L.prototype,"library",2);h([nt("label")],L.prototype,"handleLabelChange",1);h([nt(["name","src","library"])],L.prototype,"setIcon",1);L.define("sl-icon");var Co=C`
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
`;function*be(e=document.activeElement){e!=null&&(yield e,"shadowRoot"in e&&e.shadowRoot&&e.shadowRoot.mode!=="closed"&&(yield*Eo(be(e.shadowRoot.activeElement))))}function ko(){return[...be()].pop()}var Fe=new WeakMap;function ur(e){let t=Fe.get(e);return t||(t=window.getComputedStyle(e,null),Fe.set(e,t)),t}function So(e){if(typeof e.checkVisibility=="function")return e.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});const t=ur(e);return t.visibility!=="hidden"&&t.display!=="none"}function Po(e){const t=ur(e),{overflowY:r,overflowX:o}=t;return r==="scroll"||o==="scroll"?!0:r!=="auto"||o!=="auto"?!1:e.scrollHeight>e.clientHeight&&r==="auto"||e.scrollWidth>e.clientWidth&&o==="auto"}function Ro(e){const t=e.tagName.toLowerCase(),r=Number(e.getAttribute("tabindex"));if(e.hasAttribute("tabindex")&&(isNaN(r)||r<=-1)||e.hasAttribute("disabled")||e.closest("[inert]"))return!1;if(t==="input"&&e.getAttribute("type")==="radio"){const i=e.getRootNode(),s=`input[type='radio'][name="${e.getAttribute("name")}"]`,a=i.querySelector(`${s}:checked`);return a?a===e:i.querySelector(s)===e}return So(e)?(t==="audio"||t==="video")&&e.hasAttribute("controls")||e.hasAttribute("tabindex")||e.hasAttribute("contenteditable")&&e.getAttribute("contenteditable")!=="false"||["button","input","select","textarea","a","audio","video","summary","iframe"].includes(t)?!0:Po(e):!1}function Lo(e,t){var r;return((r=e.getRootNode({composed:!0}))==null?void 0:r.host)!==t}function Ne(e){const t=new WeakMap,r=[];function o(n){if(n instanceof Element){if(n.hasAttribute("inert")||n.closest("[inert]")||t.has(n))return;t.set(n,!0),!r.includes(n)&&Ro(n)&&r.push(n),n instanceof HTMLSlotElement&&Lo(n,e)&&n.assignedElements({flatten:!0}).forEach(i=>{o(i)}),n.shadowRoot!==null&&n.shadowRoot.mode==="open"&&o(n.shadowRoot)}for(const i of n.children)o(i)}return o(e),r.sort((n,i)=>{const s=Number(n.getAttribute("tabindex"))||0;return(Number(i.getAttribute("tabindex"))||0)-s})}var ct=[],Oo=class{constructor(e){this.tabDirection="forward",this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=t=>{var r;if(t.key!=="Tab"||this.isExternalActivated||!this.isActive())return;const o=ko();if(this.previousFocus=o,this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;t.shiftKey?this.tabDirection="backward":this.tabDirection="forward";const n=Ne(this.element);let i=n.findIndex(a=>a===o);this.previousFocus=this.currentFocus;const s=this.tabDirection==="forward"?1:-1;for(;;){i+s>=n.length?i=0:i+s<0?i=n.length-1:i+=s,this.previousFocus=this.currentFocus;const a=n[i];if(this.tabDirection==="backward"&&this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus)||a&&this.possiblyHasTabbableChildren(a))return;t.preventDefault(),this.currentFocus=a,(r=this.currentFocus)==null||r.focus({preventScroll:!1});const l=[...be()];if(l.includes(this.currentFocus)||!l.includes(this.previousFocus))break}setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=e,this.elementsWithTabbableControls=["iframe"]}activate(){ct.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){ct=ct.filter(e=>e!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return ct[ct.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){const e=Ne(this.element);if(!this.element.matches(":focus-within")){const t=e[0],r=e[e.length-1],o=this.tabDirection==="forward"?t:r;typeof o?.focus=="function"&&(this.currentFocus=o,o.focus({preventScroll:!1}))}}}possiblyHasTabbableChildren(e){return this.elementsWithTabbableControls.includes(e.tagName.toLowerCase())||e.hasAttribute("controls")}},ee=new Set;function To(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}function Mo(){const e=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(e)||!e?0:e}function Yt(e){if(ee.add(e),!document.documentElement.classList.contains("sl-scroll-lock")){const t=To()+Mo();let r=getComputedStyle(document.documentElement).scrollbarGutter;(!r||r==="auto")&&(r="stable"),t<2&&(r=""),document.documentElement.style.setProperty("--sl-scroll-lock-gutter",r),document.documentElement.classList.add("sl-scroll-lock"),document.documentElement.style.setProperty("--sl-scroll-lock-size",`${t}px`)}}function Zt(e){ee.delete(e),ee.size===0&&(document.documentElement.classList.remove("sl-scroll-lock"),document.documentElement.style.removeProperty("--sl-scroll-lock-size"))}var zo=e=>{var t;const{activeElement:r}=document;r&&e.contains(r)&&((t=document.activeElement)==null||t.blur())},Io=C`
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
 */const Do={ATTRIBUTE:1},Uo=e=>(...t)=>({_$litDirective$:e,values:t});let Fo=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,o){this._$Ct=t,this._$AM=r,this._$Ci=o}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ve=Uo(class extends Fo{constructor(e){if(super(e),e.type!==Do.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in t)t[o]&&!this.nt?.has(o)&&this.st.add(o);return this.render(t)}const r=e.element.classList;for(const o of this.st)o in t||(r.remove(o),this.st.delete(o));for(const o in t){const n=!!t[o];n===this.st.has(o)||this.nt?.has(o)||(n?(r.add(o),this.st.add(o)):(r.remove(o),this.st.delete(o)))}return Y}});/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const hr=Symbol.for(""),No=e=>{if(e?.r===hr)return e?._$litStatic$},Dt=(e,...t)=>({_$litStatic$:t.reduce((r,o,n)=>r+(i=>{if(i._$litStatic$!==void 0)return i._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${i}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(o)+e[n+1],e[0]),r:hr}),He=new Map,Ho=e=>(t,...r)=>{const o=r.length;let n,i;const s=[],a=[];let l,u=0,d=!1;for(;u<o;){for(l=t[u];u<o&&(i=r[u],(n=No(i))!==void 0);)l+=n+t[++u],d=!0;u!==o&&a.push(i),s.push(l),u++}if(u===o&&s.push(t[o]),d){const c=s.join("$$lit$$");(t=He.get(c))===void 0&&(s.raw=s,He.set(c,t=s)),r=a}return e(t,...r)},Lt=Ho(R);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const y=e=>e??w;var E=class extends D{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){const e=!!this.href,t=e?Dt`a`:Dt`button`;return Lt`
      <${t}
        part="base"
        class=${ve({"icon-button":!0,"icon-button--disabled":!e&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${y(e?void 0:this.disabled)}
        type=${y(e?void 0:"button")}
        href=${y(e?this.href:void 0)}
        target=${y(e?this.target:void 0)}
        download=${y(e?this.download:void 0)}
        rel=${y(e&&this.target?"noreferrer noopener":void 0)}
        role=${y(e?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${y(this.name)}
          library=${y(this.library)}
          src=${y(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${t}>
    `}};E.styles=[it,Io];E.dependencies={"sl-icon":L};h([rt(".icon-button")],E.prototype,"button",2);h([et()],E.prototype,"hasFocus",2);h([p()],E.prototype,"name",2);h([p()],E.prototype,"library",2);h([p()],E.prototype,"src",2);h([p()],E.prototype,"href",2);h([p()],E.prototype,"target",2);h([p()],E.prototype,"download",2);h([p()],E.prototype,"label",2);h([p({type:Boolean,reflect:!0})],E.prototype,"disabled",2);var pr=new Map,Bo=new WeakMap;function Vo(e){return e??{keyframes:[],options:{duration:0}}}function Be(e,t){return t.toLowerCase()==="rtl"?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function O(e,t){pr.set(e,Vo(t))}function dt(e,t,r){const o=Bo.get(e);if(o?.[t])return Be(o[t],r.dir);const n=pr.get(t);return n?Be(n,r.dir):{keyframes:[],options:{duration:0}}}function Ve(e,t){return new Promise(r=>{function o(n){n.target===e&&(e.removeEventListener(t,o),r())}e.addEventListener(t,o)})}function ut(e,t,r){return new Promise(o=>{if(r?.duration===1/0)throw new Error("Promise-based animations must be finite.");const n=e.animate(t,fe(ot({},r),{duration:jo()?0:r.duration}));n.addEventListener("cancel",o,{once:!0}),n.addEventListener("finish",o,{once:!0})})}function jo(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function kt(e){return Promise.all(e.getAnimations().map(t=>new Promise(r=>{t.cancel(),requestAnimationFrame(r)})))}var fr=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=r=>{const o=r.target;(this.slotNames.includes("[default]")&&!o.name||o.name&&this.slotNames.includes(o.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===e.TEXT_NODE&&e.textContent.trim()!=="")return!0;if(e.nodeType===e.ELEMENT_NODE){const t=e;if(t.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};const re=new Set,Q=new Map;let j,me="ltr",ge="en";const br=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(br){const e=new MutationObserver(mr);me=document.documentElement.dir||"ltr",ge=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function vr(...e){e.map(t=>{const r=t.$code.toLowerCase();Q.has(r)?Q.set(r,Object.assign(Object.assign({},Q.get(r)),t)):Q.set(r,t),j||(j=t)}),mr()}function mr(){br&&(me=document.documentElement.dir||"ltr",ge=document.documentElement.lang||navigator.language),[...re.keys()].map(e=>{typeof e.requestUpdate=="function"&&e.requestUpdate()})}let Wo=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){re.add(this.host)}hostDisconnected(){re.delete(this.host)}dir(){return`${this.host.dir||me}`.toLowerCase()}lang(){return`${this.host.lang||ge}`.toLowerCase()}getTranslationData(t){var r,o;const n=new Intl.Locale(t.replace(/_/g,"-")),i=n?.language.toLowerCase(),s=(o=(r=n?.region)===null||r===void 0?void 0:r.toLowerCase())!==null&&o!==void 0?o:"",a=Q.get(`${i}-${s}`),l=Q.get(i);return{locale:n,language:i,region:s,primary:a,secondary:l}}exists(t,r){var o;const{primary:n,secondary:i}=this.getTranslationData((o=r.lang)!==null&&o!==void 0?o:this.lang());return r=Object.assign({includeFallback:!1},r),!!(n&&n[t]||i&&i[t]||r.includeFallback&&j&&j[t])}term(t,...r){const{primary:o,secondary:n}=this.getTranslationData(this.lang());let i;if(o&&o[t])i=o[t];else if(n&&n[t])i=n[t];else if(j&&j[t])i=j[t];else return console.error(`No translation found for: ${String(t)}`),String(t);return typeof i=="function"?i(...r):i}date(t,r){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),r).format(t)}number(t,r){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),r).format(t)}relativeTime(t,r,o){return new Intl.RelativeTimeFormat(this.lang(),o).format(t,r)}};var gr={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>e===0?"No options selected":e===1?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};vr(gr);var qo=gr,ye=class extends Wo{};vr(qo);function je(e){return e.charAt(0).toUpperCase()+e.slice(1)}var k=class extends D{constructor(){super(...arguments),this.hasSlotController=new fr(this,"footer"),this.localize=new ye(this),this.modal=new Oo(this),this.open=!1,this.label="",this.placement="end",this.contained=!1,this.noHeader=!1,this.handleDocumentKeyDown=e=>{this.contained||e.key==="Escape"&&this.modal.isActive()&&this.open&&(e.stopImmediatePropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.drawer.hidden=!this.open,this.open&&(this.addOpenListeners(),this.contained||(this.modal.activate(),Yt(this)))}disconnectedCallback(){super.disconnectedCallback(),Zt(this),this.removeOpenListeners()}requestClose(e){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){const r=dt(this,"drawer.denyClose",{dir:this.localize.dir()});ut(this.panel,r.keyframes,r.options);return}this.hide()}addOpenListeners(){var e;"CloseWatcher"in window?((e=this.closeWatcher)==null||e.destroy(),this.contained||(this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard"))):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var e;document.removeEventListener("keydown",this.handleDocumentKeyDown),(e=this.closeWatcher)==null||e.destroy()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),Yt(this));const e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([kt(this.drawer),kt(this.overlay)]),this.drawer.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")});const t=dt(this,`drawer.show${je(this.placement)}`,{dir:this.localize.dir()}),r=dt(this,"drawer.overlay.show",{dir:this.localize.dir()});await Promise.all([ut(this.panel,t.keyframes,t.options),ut(this.overlay,r.keyframes,r.options)]),this.emit("sl-after-show")}else{zo(this),this.emit("sl-hide"),this.removeOpenListeners(),this.contained||(this.modal.deactivate(),Zt(this)),await Promise.all([kt(this.drawer),kt(this.overlay)]);const e=dt(this,`drawer.hide${je(this.placement)}`,{dir:this.localize.dir()}),t=dt(this,"drawer.overlay.hide",{dir:this.localize.dir()});await Promise.all([ut(this.overlay,t.keyframes,t.options).then(()=>{this.overlay.hidden=!0}),ut(this.panel,e.keyframes,e.options).then(()=>{this.panel.hidden=!0})]),this.drawer.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1;const r=this.originalTrigger;typeof r?.focus=="function"&&setTimeout(()=>r.focus()),this.emit("sl-after-hide")}}handleNoModalChange(){this.open&&!this.contained&&(this.modal.activate(),Yt(this)),this.open&&this.contained&&(this.modal.deactivate(),Zt(this))}async show(){if(!this.open)return this.open=!0,Ve(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Ve(this,"sl-after-hide")}render(){return R`
      <div
        part="base"
        class=${ve({drawer:!0,"drawer--open":this.open,"drawer--top":this.placement==="top","drawer--end":this.placement==="end","drawer--bottom":this.placement==="bottom","drawer--start":this.placement==="start","drawer--contained":this.contained,"drawer--fixed":!this.contained,"drawer--rtl":this.localize.dir()==="rtl","drawer--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="drawer__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${y(this.noHeader?this.label:void 0)}
          aria-labelledby=${y(this.noHeader?void 0:"title")}
          tabindex="0"
        >
          ${this.noHeader?"":R`
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
    `}};k.styles=[it,Co];k.dependencies={"sl-icon-button":E};h([rt(".drawer")],k.prototype,"drawer",2);h([rt(".drawer__panel")],k.prototype,"panel",2);h([rt(".drawer__overlay")],k.prototype,"overlay",2);h([p({type:Boolean,reflect:!0})],k.prototype,"open",2);h([p({reflect:!0})],k.prototype,"label",2);h([p({reflect:!0})],k.prototype,"placement",2);h([p({type:Boolean,reflect:!0})],k.prototype,"contained",2);h([p({attribute:"no-header",type:Boolean,reflect:!0})],k.prototype,"noHeader",2);h([nt("open",{waitUntilFirstUpdate:!0})],k.prototype,"handleOpenChange",1);h([nt("contained",{waitUntilFirstUpdate:!0})],k.prototype,"handleNoModalChange",1);O("drawer.showTop",{keyframes:[{opacity:0,translate:"0 -100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});O("drawer.hideTop",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 -100%"}],options:{duration:250,easing:"ease"}});O("drawer.showEnd",{keyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});O("drawer.hideEnd",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],options:{duration:250,easing:"ease"}});O("drawer.showBottom",{keyframes:[{opacity:0,translate:"0 100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});O("drawer.hideBottom",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 100%"}],options:{duration:250,easing:"ease"}});O("drawer.showStart",{keyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});O("drawer.hideStart",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],options:{duration:250,easing:"ease"}});O("drawer.denyClose",{keyframes:[{scale:1},{scale:1.01},{scale:1}],options:{duration:250}});O("drawer.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});O("drawer.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});k.define("sl-drawer");E.define("sl-icon-button");var Ko=C`
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
`,yr=class extends D{constructor(){super(...arguments),this.localize=new ye(this)}render(){return R`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};yr.styles=[it,Ko];var ht=new WeakMap,pt=new WeakMap,ft=new WeakMap,Jt=new WeakSet,St=new WeakMap,Go=class{constructor(e,t){this.handleFormData=r=>{const o=this.options.disabled(this.host),n=this.options.name(this.host),i=this.options.value(this.host),s=this.host.tagName.toLowerCase()==="sl-button";this.host.isConnected&&!o&&!s&&typeof n=="string"&&n.length>0&&typeof i<"u"&&(Array.isArray(i)?i.forEach(a=>{r.formData.append(n,a.toString())}):r.formData.append(n,i.toString()))},this.handleFormSubmit=r=>{var o;const n=this.options.disabled(this.host),i=this.options.reportValidity;this.form&&!this.form.noValidate&&((o=ht.get(this.form))==null||o.forEach(s=>{this.setUserInteracted(s,!0)})),this.form&&!this.form.noValidate&&!n&&!i(this.host)&&(r.preventDefault(),r.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),St.set(this.host,[])},this.handleInteraction=r=>{const o=St.get(this.host);o.includes(r.type)||o.push(r.type),o.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const r=this.form.querySelectorAll("*");for(const o of r)if(typeof o.checkValidity=="function"&&!o.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const r=this.form.querySelectorAll("*");for(const o of r)if(typeof o.reportValidity=="function"&&!o.reportValidity())return!1}return!0},(this.host=e).addController(this),this.options=ot({form:r=>{const o=r.form;if(o){const i=r.getRootNode().querySelector(`#${o}`);if(i)return i}return r.closest("form")},name:r=>r.name,value:r=>r.value,defaultValue:r=>r.defaultValue,disabled:r=>{var o;return(o=r.disabled)!=null?o:!1},reportValidity:r=>typeof r.reportValidity=="function"?r.reportValidity():!0,checkValidity:r=>typeof r.checkValidity=="function"?r.checkValidity():!0,setValue:(r,o)=>r.value=o,assumeInteractionOn:["sl-input"]},t)}hostConnected(){const e=this.options.form(this.host);e&&this.attachForm(e),St.set(this.host,[]),this.options.assumeInteractionOn.forEach(t=>{this.host.addEventListener(t,this.handleInteraction)})}hostDisconnected(){this.detachForm(),St.delete(this.host),this.options.assumeInteractionOn.forEach(e=>{this.host.removeEventListener(e,this.handleInteraction)})}hostUpdated(){const e=this.options.form(this.host);e||this.detachForm(),e&&this.form!==e&&(this.detachForm(),this.attachForm(e)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(e){e?(this.form=e,ht.has(this.form)?ht.get(this.form).add(this.host):ht.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),pt.has(this.form)||(pt.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),ft.has(this.form)||(ft.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const e=ht.get(this.form);e&&(e.delete(this.host),e.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),pt.has(this.form)&&(this.form.reportValidity=pt.get(this.form),pt.delete(this.form)),ft.has(this.form)&&(this.form.checkValidity=ft.get(this.form),ft.delete(this.form)),this.form=void 0))}setUserInteracted(e,t){t?Jt.add(e):Jt.delete(e),e.requestUpdate()}doAction(e,t){if(this.form){const r=document.createElement("button");r.type=e,r.style.position="absolute",r.style.width="0",r.style.height="0",r.style.clipPath="inset(50%)",r.style.overflow="hidden",r.style.whiteSpace="nowrap",t&&(r.name=t.name,r.value=t.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(o=>{t.hasAttribute(o)&&r.setAttribute(o,t.getAttribute(o))})),this.form.append(r),r.click(),r.remove()}}getForm(){var e;return(e=this.form)!=null?e:null}reset(e){this.doAction("reset",e)}submit(e){this.doAction("submit",e)}setValidity(e){const t=this.host,r=!!Jt.has(t),o=!!t.required;t.toggleAttribute("data-required",o),t.toggleAttribute("data-optional",!o),t.toggleAttribute("data-invalid",!e),t.toggleAttribute("data-valid",e),t.toggleAttribute("data-user-invalid",!e&&r),t.toggleAttribute("data-user-valid",e&&r)}updateValidity(){const e=this.host;this.setValidity(e.validity.valid)}emitInvalidEvent(e){const t=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});e||t.preventDefault(),this.host.dispatchEvent(t)||e?.preventDefault()}},we=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1});Object.freeze(fe(ot({},we),{valid:!1,valueMissing:!0}));Object.freeze(fe(ot({},we),{valid:!1,customError:!0}));var Yo=C`
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
`,m=class extends D{constructor(){super(...arguments),this.formControlController=new Go(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new fr(this,"[default]","prefix","suffix"),this.localize=new ye(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:we}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(e){this.isButton()&&(this.button.setCustomValidity(e),this.formControlController.updateValidity())}render(){const e=this.isLink(),t=e?Dt`a`:Dt`button`;return Lt`
      <${t}
        part="base"
        class=${ve({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${y(e?void 0:this.disabled)}
        type=${y(e?void 0:this.type)}
        title=${this.title}
        name=${y(e?void 0:this.name)}
        value=${y(e?void 0:this.value)}
        href=${y(e&&!this.disabled?this.href:void 0)}
        target=${y(e?this.target:void 0)}
        download=${y(e?this.download:void 0)}
        rel=${y(e?this.rel:void 0)}
        role=${y(e?void 0:"button")}
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
        ${this.caret?Lt` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?Lt`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${t}>
    `}};m.styles=[it,Yo];m.dependencies={"sl-icon":L,"sl-spinner":yr};h([rt(".button")],m.prototype,"button",2);h([et()],m.prototype,"hasFocus",2);h([et()],m.prototype,"invalid",2);h([p()],m.prototype,"title",2);h([p({reflect:!0})],m.prototype,"variant",2);h([p({reflect:!0})],m.prototype,"size",2);h([p({type:Boolean,reflect:!0})],m.prototype,"caret",2);h([p({type:Boolean,reflect:!0})],m.prototype,"disabled",2);h([p({type:Boolean,reflect:!0})],m.prototype,"loading",2);h([p({type:Boolean,reflect:!0})],m.prototype,"outline",2);h([p({type:Boolean,reflect:!0})],m.prototype,"pill",2);h([p({type:Boolean,reflect:!0})],m.prototype,"circle",2);h([p()],m.prototype,"type",2);h([p()],m.prototype,"name",2);h([p()],m.prototype,"value",2);h([p()],m.prototype,"href",2);h([p()],m.prototype,"target",2);h([p()],m.prototype,"rel",2);h([p()],m.prototype,"download",2);h([p()],m.prototype,"form",2);h([p({attribute:"formaction"})],m.prototype,"formAction",2);h([p({attribute:"formenctype"})],m.prototype,"formEnctype",2);h([p({attribute:"formmethod"})],m.prototype,"formMethod",2);h([p({attribute:"formnovalidate",type:Boolean})],m.prototype,"formNoValidate",2);h([p({attribute:"formtarget"})],m.prototype,"formTarget",2);h([nt("disabled",{waitUntilFirstUpdate:!0})],m.prototype,"handleDisabledChange",1);m.define("sl-button");var Zo=C`
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
`,Vt=class extends D{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};Vt.styles=[it,Zo];h([p({type:Boolean,reflect:!0})],Vt.prototype,"vertical",2);h([nt("vertical")],Vt.prototype,"handleVerticalChange",1);Vt.define("sl-divider");function Jo(e){for(var t=[],r=0;r<e.length;){var o=e[r];if(o==="*"||o==="+"||o==="?"){t.push({type:"MODIFIER",index:r,value:e[r++]});continue}if(o==="\\"){t.push({type:"ESCAPED_CHAR",index:r++,value:e[r++]});continue}if(o==="{"){t.push({type:"OPEN",index:r,value:e[r++]});continue}if(o==="}"){t.push({type:"CLOSE",index:r,value:e[r++]});continue}if(o===":"){for(var n="",i=r+1;i<e.length;){var s=e.charCodeAt(i);if(s>=48&&s<=57||s>=65&&s<=90||s>=97&&s<=122||s===95){n+=e[i++];continue}break}if(!n)throw new TypeError("Missing parameter name at ".concat(r));t.push({type:"NAME",index:r,value:n}),r=i;continue}if(o==="("){var a=1,l="",i=r+1;if(e[i]==="?")throw new TypeError('Pattern cannot start with "?" at '.concat(i));for(;i<e.length;){if(e[i]==="\\"){l+=e[i++]+e[i++];continue}if(e[i]===")"){if(a--,a===0){i++;break}}else if(e[i]==="("&&(a++,e[i+1]!=="?"))throw new TypeError("Capturing groups are not allowed at ".concat(i));l+=e[i++]}if(a)throw new TypeError("Unbalanced pattern at ".concat(r));if(!l)throw new TypeError("Missing pattern at ".concat(r));t.push({type:"PATTERN",index:r,value:l}),r=i;continue}t.push({type:"CHAR",index:r,value:e[r++]})}return t.push({type:"END",index:r,value:""}),t}function _e(e,t){t===void 0&&(t={});for(var r=Jo(e),o=t.prefixes,n=o===void 0?"./":o,i=t.delimiter,s=i===void 0?"/#?":i,a=[],l=0,u=0,d="",c=function(A){if(u<r.length&&r[u].type===A)return r[u++].value},b=function(A){var _=c(A);if(_!==void 0)return _;var M=r[u],jt=M.type,Tr=M.index;throw new TypeError("Unexpected ".concat(jt," at ").concat(Tr,", expected ").concat(A))},f=function(){for(var A="",_;_=c("CHAR")||c("ESCAPED_CHAR");)A+=_;return A},v=function(A){for(var _=0,M=s;_<M.length;_++){var jt=M[_];if(A.indexOf(jt)>-1)return!0}return!1},T=function(A){var _=a[a.length-1],M=A||(_&&typeof _=="string"?_:"");if(_&&!M)throw new TypeError('Must have text between two parameters, missing text after "'.concat(_.name,'"'));return!M||v(M)?"[^".concat(N(s),"]+?"):"(?:(?!".concat(N(M),")[^").concat(N(s),"])+?")};u<r.length;){var $=c("CHAR"),x=c("NAME"),Z=c("PATTERN");if(x||Z){var S=$||"";n.indexOf(S)===-1&&(d+=S,S=""),d&&(a.push(d),d=""),a.push({name:x||l++,prefix:S,suffix:"",pattern:Z||T(S),modifier:c("MODIFIER")||""});continue}var g=$||c("ESCAPED_CHAR");if(g){d+=g;continue}d&&(a.push(d),d="");var B=c("OPEN");if(B){var S=f(),U=c("NAME")||"",st=c("PATTERN")||"",J=f();b("CLOSE"),a.push({name:U||(st?l++:""),pattern:U&&!st?T(S):st,prefix:S,suffix:J,modifier:c("MODIFIER")||""});continue}b("END")}return a}function wr(e,t){return _r(_e(e,t),t)}function _r(e,t){t===void 0&&(t={});var r=$e(t),o=t.encode,n=o===void 0?function(l){return l}:o,i=t.validate,s=i===void 0?!0:i,a=e.map(function(l){if(typeof l=="object")return new RegExp("^(?:".concat(l.pattern,")$"),r)});return function(l){for(var u="",d=0;d<e.length;d++){var c=e[d];if(typeof c=="string"){u+=c;continue}var b=l?l[c.name]:void 0,f=c.modifier==="?"||c.modifier==="*",v=c.modifier==="*"||c.modifier==="+";if(Array.isArray(b)){if(!v)throw new TypeError('Expected "'.concat(c.name,'" to not repeat, but got an array'));if(b.length===0){if(f)continue;throw new TypeError('Expected "'.concat(c.name,'" to not be empty'))}for(var T=0;T<b.length;T++){var $=n(b[T],c);if(s&&!a[d].test($))throw new TypeError('Expected all "'.concat(c.name,'" to match "').concat(c.pattern,'", but got "').concat($,'"'));u+=c.prefix+$+c.suffix}continue}if(typeof b=="string"||typeof b=="number"){var $=n(String(b),c);if(s&&!a[d].test($))throw new TypeError('Expected "'.concat(c.name,'" to match "').concat(c.pattern,'", but got "').concat($,'"'));u+=c.prefix+$+c.suffix;continue}if(!f){var x=v?"an array":"a string";throw new TypeError('Expected "'.concat(c.name,'" to be ').concat(x))}}return u}}function N(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function $e(e){return e&&e.sensitive?"":"i"}function Xo(e,t){if(!t)return e;for(var r=/\((?:\?<(.*?)>)?(?!\?)/g,o=0,n=r.exec(e.source);n;)t.push({name:n[1]||o++,prefix:"",suffix:"",modifier:"",pattern:""}),n=r.exec(e.source);return e}function Qo(e,t,r){var o=e.map(function(n){return $r(n,t,r).source});return new RegExp("(?:".concat(o.join("|"),")"),$e(r))}function tn(e,t,r){return en(_e(e,r),t,r)}function en(e,t,r){r===void 0&&(r={});for(var o=r.strict,n=o===void 0?!1:o,i=r.start,s=i===void 0?!0:i,a=r.end,l=a===void 0?!0:a,u=r.encode,d=u===void 0?function(_){return _}:u,c=r.delimiter,b=c===void 0?"/#?":c,f=r.endsWith,v=f===void 0?"":f,T="[".concat(N(v),"]|$"),$="[".concat(N(b),"]"),x=s?"^":"",Z=0,S=e;Z<S.length;Z++){var g=S[Z];if(typeof g=="string")x+=N(d(g));else{var B=N(d(g.prefix)),U=N(d(g.suffix));if(g.pattern)if(t&&t.push(g),B||U)if(g.modifier==="+"||g.modifier==="*"){var st=g.modifier==="*"?"?":"";x+="(?:".concat(B,"((?:").concat(g.pattern,")(?:").concat(U).concat(B,"(?:").concat(g.pattern,"))*)").concat(U,")").concat(st)}else x+="(?:".concat(B,"(").concat(g.pattern,")").concat(U,")").concat(g.modifier);else{if(g.modifier==="+"||g.modifier==="*")throw new TypeError('Can not repeat "'.concat(g.name,'" without a prefix and suffix'));x+="(".concat(g.pattern,")").concat(g.modifier)}else x+="(?:".concat(B).concat(U,")").concat(g.modifier)}}if(l)n||(x+="".concat($,"?")),x+=r.endsWith?"(?=".concat(T,")"):"$";else{var J=e[e.length-1],A=typeof J=="string"?$.indexOf(J[J.length-1])>-1:J===void 0;n||(x+="(?:".concat($,"(?=").concat(T,"))?")),A||(x+="(?=".concat($,"|").concat(T,")"))}return new RegExp(x,$e(r))}function $r(e,t,r){return e instanceof RegExp?Xo(e,t):Array.isArray(e)?Qo(e,t,r):tn(e,t,r)}const K=Symbol("NotFoundResult");class xr extends Error{code;context;constructor(t){super(H(`Page not found (${t.pathname})`)),this.context=t,this.code=404}}function W(e){return typeof e=="object"&&!!e}function _t(e){return typeof e=="function"}function z(e){return typeof e=="string"}function Ut(e=[]){return Array.isArray(e)?e:[e]}function H(e){return`[Vaadin.Router] ${e}`}function Er(e){return new xr(e)}function Ar(e){return(Array.isArray(e)?e[0]:e)??""}function Ft(e){return Ar(e?.path)}function rn(e){return Array.isArray(e)&&e.length>0?e:void 0}const oe=new Map;oe.set("|false",{keys:[],pattern:/(?:)/u});function We(e){try{return decodeURIComponent(e)}catch{return e}}function on(e,t,r=!1,o=[],n){const i=`${e}|${String(r)}`,s=Ar(t);let a=oe.get(i);if(!a){const d=[];a={keys:d,pattern:$r(e,d,{end:r,strict:e===""})},oe.set(i,a)}const l=a.pattern.exec(s);if(!l)return null;const u={...n};for(let d=1;d<l.length;d++){const c=a.keys[d-1],b=c.name,f=l[d];(f!==void 0||!Object.prototype.hasOwnProperty.call(u,b))&&(c.modifier==="+"||c.modifier==="*"?u[b]=f?f.split(/[/?#]/u).map(We):[]:u[b]=f&&We(f))}return{keys:[...o,...a.keys],params:u,path:l[0]}}var nn=on;function Cr(e,t,r,o,n){let i,s,a=0,l=Ft(e);return l.startsWith("/")&&(r&&(l=l.substring(1)),r=!0),{next(u){if(e===u)return{done:!0,value:void 0};e.__children??=rn(e.children);const d=e.__children??[],c=!e.__children&&!e.children;if(!i&&(i=nn(l,t,c,o,n),i))return{value:{keys:i.keys,params:i.params,path:i.path,route:e}};if(i&&d.length>0)for(;a<d.length;){if(!s){const f=d[a];f.parent=e;let v=i.path.length;v>0&&t.charAt(v)==="/"&&(v+=1),s=Cr(f,t.substring(v),r,i.keys,i.params)}const b=s.next(u);if(!b.done)return{done:!1,value:b.value};s=null,a+=1}return{done:!0,value:void 0}}}}var sn=Cr;function an(e){if(_t(e.route.action))return e.route.action(e)}function ln(e,t){let r=e;for(;r;)if(r=r.parent,r===t)return!0;return!1}function cn(e){return!!e&&typeof e=="object"&&"next"in e&&"params"in e&&"result"in e&&"route"in e}class dn extends Error{cause;code;context;constructor(t,r){let o=`Path '${t.pathname}' is not properly resolved due to an error.`;const n=Ft(t.route);n&&(o+=` Resolution had failed on route: '${n}'`),super(o),this.cause=r?.cause,this.code=r?.code,this.context=t}warn(){console.warn(this.message)}}function un(e,t){const{path:r,route:o}=t;if(o&&!o.__synthetic){const n={path:r,route:o};if(o.parent&&e.chain)for(let i=e.chain.length-1;i>=0&&e.chain[i].route!==o.parent;i--)e.chain.pop();e.chain?.push(n)}}class hn{baseUrl;#r;errorHandler;resolveRoute;#t;constructor(t,{baseUrl:r="",context:o,errorHandler:n,resolveRoute:i=an}={}){if(Object(t)!==t)throw new TypeError("Invalid routes");this.baseUrl=r,this.errorHandler=n,this.resolveRoute=i,Array.isArray(t)?this.#t={__children:t,__synthetic:!0,action:()=>{},path:""}:this.#t={...t,parent:void 0},this.#r={...o,hash:"",async next(){return K},params:{},pathname:"",resolver:this,route:this.#t,search:"",chain:[]}}get root(){return this.#t}get context(){return this.#r}get __effectiveBaseUrl(){return this.baseUrl?new URL(this.baseUrl,document.baseURI||document.URL).href.replace(/[^/]*$/u,""):""}getRoutes(){return[...this.#t.__children??[]]}removeRoutes(){this.#t.__children=[]}async resolve(t){const r=this,o={...this.#r,...z(t)?{pathname:t}:t,next:u},n=sn(this.#t,this.__normalizePathname(o.pathname)??o.pathname,!!this.baseUrl),i=this.resolveRoute;let s=null,a=null,l=o;async function u(d=!1,c=s?.value?.route,b){const f=b===null?s?.value?.route:void 0;if(s=a??n.next(f),a=null,!d&&(s.done||!ln(s.value.route,c)))return a=s,K;if(s.done)throw Er(o);l={...o,params:s.value.params,route:s.value.route,chain:l.chain?.slice()},un(l,s.value);const v=await i(l);return v!=null&&v!==K?(l.result=cn(v)?v.result:v,r.#r=l,l):await u(d,c,v)}try{return await u(!0,this.#t)}catch(d){const c=d instanceof xr?d:new dn(l,{code:500,cause:d});if(this.errorHandler)return l.result=this.errorHandler(c),l;throw d}}setRoutes(t){return this.#t.__children=[...Ut(t)],{}}__normalizePathname(t){if(!this.baseUrl)return t;const r=this.__effectiveBaseUrl,o=t.startsWith("/")?new URL(r).origin+t:`./${t}`,n=new URL(o,r).href;if(n.startsWith(r))return n.slice(r.length)}addRoutes(t){return this.#t.__children=[...this.#t.__children??[],...Ut(t)],this.getRoutes()}}var kr=hn;function Sr(e,t,r,o){const n=t.name??o?.(t);if(n&&(e.has(n)?e.get(n)?.push(t):e.set(n,[t])),Array.isArray(r))for(const i of r)i.parent=t,Sr(e,i,i.__children??i.children,o)}function qe(e,t){const r=e.get(t);if(r){if(r.length>1)throw new Error(`Duplicate route with name "${t}". Try seting unique 'name' route properties.`);return r[0]}}function pn(e,t={}){if(!(e instanceof kr))throw new TypeError("An instance of Resolver is expected");const r=new Map,o=new Map;return(n,i)=>{let s=qe(o,n);if(!s&&(o.clear(),Sr(o,e.root,e.root.__children,t.cacheKeyProvider),s=qe(o,n),!s))throw new Error(`Route "${n}" not found`);let a=s.fullPath?r.get(s.fullPath):void 0;if(!a){let d=Ft(s),c=s.parent;for(;c;){const v=Ft(c);v&&(d=`${v.replace(/\/$/u,"")}/${d.replace(/^\//u,"")}`),c=c.parent}const b=_e(d),f=Object.create(null);for(const v of b)z(v)||(f[v.name]=!0);a={keys:f,tokens:b},r.set(d,a),s.fullPath=d}let u=_r(a.tokens,{encode:encodeURIComponent,...t})(i)||"/";if(t.stringifyQueryParams&&i){const d={};for(const[b,f]of Object.entries(i))!(b in a.keys)&&f&&(d[b]=f);const c=t.stringifyQueryParams(d);c&&(u+=c.startsWith("?")?c:`?${c}`)}return u}}var fn=pn;const bn=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,Ot=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function vn(){function e(){return!0}return Pr(e)}function mn(){try{return gn()?!0:yn()?Ot?!wn():!vn():!1}catch{return!1}}function gn(){return localStorage.getItem("vaadin.developmentmode.force")}function yn(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function wn(){return!!(Ot&&Object.keys(Ot).map(t=>Ot[t]).filter(t=>t.productionMode).length>0)}function Pr(e,t){if(typeof e!="function")return;const r=bn.exec(e.toString());if(r)try{e=new Function(r[1])}catch(o){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",o)}return e(t)}window.Vaadin=window.Vaadin||{};const Ke=function(e,t){if(window.Vaadin.developmentMode)return Pr(e,t)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=mn());function _n(){/*! vaadin-dev-mode:start
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

  vaadin-dev-mode:end **/}const $n=function(){if(typeof Ke=="function")return Ke(_n)};function xn(e,t=window.Vaadin??={}){t.registrations??=[],t.registrations.push({is:"@vaadin/router",version:"2.0.1"})}xn();$n();const En=e=>{const t=getComputedStyle(e).getPropertyValue("animation-name");return t&&t!=="none"},An=(e,t)=>{const r=()=>{e.removeEventListener("animationend",r),t()};e.addEventListener("animationend",r)};async function Cn(e,t){return e.classList.add(t),await new Promise(r=>{if(En(e)){const o=e.getBoundingClientRect(),n=`height: ${o.bottom-o.top}px; width: ${o.right-o.left}px`;e.setAttribute("style",`position: absolute; ${n}`),An(e,()=>{e.classList.remove(t),e.removeAttribute("style"),r()})}else e.classList.remove(t),r()})}var Ge=Cn;function Rr(e){if(!e||!z(e.path))throw new Error(H('Expected route config to be an object with a "path" string property, or an array of such objects'));if(!_t(e.action)&&!Array.isArray(e.children)&&!_t(e.children)&&!z(e.component)&&!z(e.redirect))throw new Error(H(`Expected route config "${e.path}" to include either "component, redirect" or "action" function but none found.`));e.redirect&&["bundle","component"].forEach(t=>{t in e&&console.warn(H(`Route config "${String(e.path)}" has both "redirect" and "${t}" properties, and "redirect" will always override the latter. Did you mean to only use "${t}"?`))})}function Ye(e){Ut(e).forEach(t=>Rr(t))}function kn({next:e,...t}){return t}function Tt(e,t){const r=t.__effectiveBaseUrl;return r?new URL(e.replace(/^\//u,""),r).pathname:e}function Lr(e){return e.map(t=>t.path).reduce((t,r)=>r.length?`${t.replace(/\/$/u,"")}/${r.replace(/^\//u,"")}`:t,"")}function Sn(e){return Lr(e.map(t=>t.route))}function P({chain:e=[],hash:t="",params:r={},pathname:o="",redirectFrom:n,resolver:i,search:s=""},a){const l=e.map(u=>u.route);return{baseUrl:i?.baseUrl??"",getUrl:(u={})=>i?Tt(wr(Sn(e))({...r,...u}),i):"",hash:t,params:r,pathname:o,redirectFrom:n,route:a??(Array.isArray(l)?l.at(-1):void 0)??null,routes:l,search:s,searchParams:new URLSearchParams(s)}}function Ze(e,t){const r={...e.params};return{redirect:{from:e.pathname,params:r,pathname:t}}}function Pn(e,t){if(t.location=P(e),e.chain){const r=e.chain.map(o=>o.route).indexOf(e.route);e.chain[r].element=t}return t}function Mt(e,t,...r){if(typeof e=="function")return e.apply(t,r)}function Je(e,t,...r){return o=>o&&W(o)&&("cancel"in o||"redirect"in o)?o:Mt(t?.[e],t,...r)}function Rn(e,t){if(!Array.isArray(e)&&!W(e))throw new Error(H(`Incorrect "children" value for the route ${String(t.path)}: expected array or object, but got ${String(e)}`));const r=Ut(e);r.forEach(o=>Rr(o)),t.__children=r}function mt(e,t){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${e}`,{cancelable:e==="go",detail:t}))}function Ln(e){if(typeof e!="object")return String(e);const[t="Unknown"]=/ (.*)\]$/u.exec(String(e))??[];return t==="Object"||t==="Array"?`${t} ${JSON.stringify(e)}`:t}function On(e){const{port:t,protocol:r}=e,i=r==="http:"&&t==="80"||r==="https:"&&t==="443"?e.hostname:e.host;return`${r}//${i}`}function Xe(e){if(e instanceof Element)return e.nodeName.toLowerCase()}function Qe(e){if(e.defaultPrevented||e.button!==0||e.shiftKey||e.ctrlKey||e.altKey||e.metaKey)return;let t=e.target;const r=e instanceof MouseEvent?e.composedPath():e.path??[];for(let l=0;l<r.length;l++){const u=r[l];if("nodeName"in u&&u.nodeName.toLowerCase()==="a"){t=u;break}}for(;t&&t instanceof Node&&Xe(t)!=="a";)t=t.parentNode;if(!t||Xe(t)!=="a")return;const o=t;if(o.target&&o.target.toLowerCase()!=="_self"||o.hasAttribute("download")||o.hasAttribute("router-ignore")||o.pathname===window.location.pathname&&o.hash!==""||(o.origin||On(o))!==window.location.origin)return;const{hash:i,pathname:s,search:a}=o;mt("go",{hash:i,pathname:s,search:a})&&e instanceof MouseEvent&&(e.preventDefault(),e.type==="click"&&window.scrollTo(0,0))}const Tn={activate(){window.document.addEventListener("click",Qe)},inactivate(){window.document.removeEventListener("click",Qe)}};var Mn=Tn;function tr(e){if(e.state==="vaadin-router-ignore")return;const{hash:t,pathname:r,search:o}=window.location;mt("go",{hash:t,pathname:r,search:o})}const zn={activate(){window.addEventListener("popstate",tr)},inactivate(){window.removeEventListener("popstate",tr)}};var In=zn;let er=[];const Dn={CLICK:Mn,POPSTATE:In};function rr(e=[]){er.forEach(t=>t.inactivate()),e.forEach(t=>t.activate()),er=e}const Un=256;function bt(){return{cancel:!0}}const or={__renderId:-1,params:{},route:{__synthetic:!0,children:[],path:"",action(){}},pathname:"",async next(){return K}};class Fn extends kr{location=P({resolver:this});ready=Promise.resolve(this.location);#r=new WeakSet;#t=new WeakSet;#d=this.#g.bind(this);#s=0;#i;__previousContext;#a;#o=null;#e=null;constructor(t,r){const n=document.head.querySelector("base")?.getAttribute("href");super([],{baseUrl:n?new URL(n,document.URL).href.replace(/[^/]*$/u,""):void 0,...r,resolveRoute:async i=>await this.#y(i)}),rr(Object.values(Dn)),this.setOutlet(t),this.subscribe()}async#y(t){const{route:r}=t;if(_t(r.children)){let n=await r.children(kn(t));_t(r.children)||({children:n}=r),Rn(n,r)}const o={component:n=>{const i=document.createElement(n);return this.#t.add(i),i},prevent:bt,redirect:n=>Ze(t,n)};return await Promise.resolve().then(async()=>{if(this.#n(t))return await Mt(r.action,r,t,o)}).then(n=>{if(n!=null&&(typeof n=="object"||typeof n=="symbol")&&(n instanceof HTMLElement||n===K||W(n)&&"redirect"in n))return n;if(z(r.redirect))return o.redirect(r.redirect)}).then(n=>{if(n!=null)return n;if(z(r.component))return o.component(r.component)})}setOutlet(t){t&&this.#v(t),this.#i=t}getOutlet(){return this.#i}async setRoutes(t,r=!1){return this.__previousContext=void 0,this.#a=void 0,Ye(t),super.setRoutes(t),r||this.#g(),await this.ready}addRoutes(t){return Ye(t),super.addRoutes(t)}async render(t,r=!1){this.#s+=1;const o=this.#s,n={...or,...z(t)?{hash:"",search:"",pathname:t}:t,__renderId:o};return this.ready=this.#w(n,r),await this.ready}async#w(t,r){const{__renderId:o}=t;try{const n=await this.resolve(t),i=await this.#l(n);if(!this.#n(i))return this.location;const s=this.__previousContext;if(i===s)return this.#c(s,!0),this.location;if(this.location=P(i),r&&this.#c(i,o===1),mt("location-changed",{router:this,location:this.location}),i.__skipAttach)return this.#m(i,s),this.__previousContext=i,this.location;this.#x(i,s);const a=this.#S(i);if(this.#k(i),this.#C(i,s),await a,this.#n(i))return this.#E(),this.__previousContext=i,this.location}catch(n){if(o===this.#s){r&&this.#c(this.context);for(const i of this.#i?.children??[])i.remove();throw this.location=P(Object.assign(t,{resolver:this})),mt("error",{router:this,error:n,...t}),n}}return this.location}async#l(t,r=t){const o=await this.#u(r),i=o!==r?o:t,a=Tt(Lr(o.chain??[]),this)===o.pathname,l=async(d,c=d.route,b)=>{const f=await d.next(!1,c,b);return f===null||f===K?a?d:c.parent!=null?await l(d,c.parent,f):f:f},u=await l(o);if(u==null||u===K)throw Er(i);return u!==o?await this.#l(i,u):await this.#_(o)}async#u(t){const{result:r}=t;if(r instanceof HTMLElement)return Pn(t,r),t;if(r&&"redirect"in r){const o=await this.#b(r.redirect,t.__redirectCount,t.__renderId);return await this.#u(o)}throw r instanceof Error?r:new Error(H(`Invalid route resolution result for path "${t.pathname}". Expected redirect object or HTML element, but got: "${Ln(r)}". Double check the action return value for the route.`))}async#_(t){return await this.#$(t).then(async r=>r===this.__previousContext||r===t?r:await this.#l(r))}async#$(t){const r=this.__previousContext??{},o=r.chain??[],n=t.chain??[];let i=Promise.resolve(void 0);const s=a=>Ze(t,a);if(t.__divergedChainIndex=0,t.__skipAttach=!1,o.length){for(let a=0;a<Math.min(o.length,n.length)&&!(o[a].route!==n[a].route||o[a].path!==n[a].path&&o[a].element!==n[a].element||!this.#f(o[a].element,n[a].element));t.__divergedChainIndex++,a++);if(t.__skipAttach=n.length===o.length&&t.__divergedChainIndex===n.length&&this.#f(t.result,r.result),t.__skipAttach){for(let a=n.length-1;a>=0;a--)i=this.#h(i,t,{prevent:bt},o[a]);for(let a=0;a<n.length;a++)i=this.#p(i,t,{prevent:bt,redirect:s},n[a]),o[a].element.location=P(t,o[a].route)}else for(let a=o.length-1;a>=t.__divergedChainIndex;a--)i=this.#h(i,t,{prevent:bt},o[a])}if(!t.__skipAttach)for(let a=0;a<n.length;a++)a<t.__divergedChainIndex?a<o.length&&o[a].element&&(o[a].element.location=P(t,o[a].route)):(i=this.#p(i,t,{prevent:bt,redirect:s},n[a]),n[a].element&&(n[a].element.location=P(t,n[a].route)));return await i.then(async a=>{if(a&&W(a)){if("cancel"in a&&this.__previousContext)return this.__previousContext.__renderId=t.__renderId,this.__previousContext;if("redirect"in a)return await this.#b(a.redirect,t.__redirectCount,t.__renderId)}return t})}async#h(t,r,o,n){const i=P(r);let s=await t;if(this.#n(r)&&(s=Je("onBeforeLeave",n.element,i,o,this)(s)),!(W(s)&&"redirect"in s))return s}async#p(t,r,o,n){const i=P(r,n.route),s=await t;if(this.#n(r))return Je("onBeforeEnter",n.element,i,o,this)(s)}#f(t,r){return t instanceof Element&&r instanceof Element?this.#t.has(t)&&this.#t.has(r)?t.localName===r.localName:t===r:!1}#n(t){return t.__renderId===this.#s}async#b(t,r=0,o=0){if(r>Un)throw new Error(H(`Too many redirects when rendering ${t.from}`));return await this.resolve({...or,pathname:this.urlForPath(t.pathname,t.params),redirectFrom:t.from,__redirectCount:r+1,__renderId:o})}#v(t=this.#i){if(!(t instanceof Element||t instanceof DocumentFragment))throw new TypeError(H(`Expected router outlet to be a valid DOM Element | DocumentFragment (but got ${t})`))}#c({pathname:t,search:r="",hash:o=""},n){if(window.location.pathname!==t||window.location.search!==r||window.location.hash!==o){const i=n?"replaceState":"pushState";window.history[i](null,document.title,t+r+o),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}#m(t,r){let o=this.#i;for(let n=0;n<(t.__divergedChainIndex??0);n++){const i=r?.chain?.[n].element;if(i)if(i.parentNode===o)t.chain[n].element=i,o=i;else break}return o}#x(t,r){this.#v(),this.#A();const o=this.#m(t,r);this.#o=[],this.#e=Array.from(o?.children??[]).filter(i=>this.#r.has(i)&&i!==t.result);let n=o;for(let i=t.__divergedChainIndex??0;i<(t.chain?.length??0);i++){const s=t.chain[i].element;s&&(n?.appendChild(s),this.#r.add(s),n===o&&this.#o.push(s),n=s)}}#E(){if(this.#e)for(const t of this.#e)t.remove();this.#e=null,this.#o=null}#A(){if(this.#e&&this.#o){for(const t of this.#o)t.remove();this.#e=null,this.#o=null}}#C(t,r){if(!(!r?.chain||t.__divergedChainIndex==null))for(let o=r.chain.length-1;o>=t.__divergedChainIndex&&this.#n(t);o--){const n=r.chain[o].element;if(n)try{const i=P(t);Mt(n.onAfterLeave,n,i,{},this)}finally{if(this.#e?.includes(n))for(const i of n.children)i.remove()}}}#k(t){if(!(!t.chain||t.__divergedChainIndex==null))for(let r=t.__divergedChainIndex;r<t.chain.length&&this.#n(t);r++){const o=t.chain[r].element;if(o){const n=P(t,t.chain[r].route);Mt(o.onAfterEnter,o,n,{},this)}}}async#S(t){const r=this.#e?.[0],o=this.#o?.[0],n=[],{chain:i=[]}=t;let s;for(let a=i.length-1;a>=0;a--)if(i[a].route.animate){s=i[a].route.animate;break}if(r&&o&&s){const a=W(s)&&s.leave?s.leave:"leaving",l=W(s)&&s.enter?s.enter:"entering";n.push(Ge(r,a)),n.push(Ge(o,l))}return await Promise.all(n),t}subscribe(){window.addEventListener("vaadin-router-go",this.#d)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.#d)}#g(t){const{pathname:r,search:o,hash:n}=t instanceof CustomEvent?t.detail:window.location;z(this.__normalizePathname(r))&&(t?.preventDefault&&t.preventDefault(),this.render({pathname:r,search:o,hash:n},!0))}static setTriggers(...t){rr(t)}urlForName(t,r){return this.#a||(this.#a=fn(this,{cacheKeyProvider(o){return"component"in o&&typeof o.component=="string"?o.component:void 0}})),Tt(this.#a(t,r??void 0),this)}urlForPath(t,r){return Tt(wr(t)(r??void 0),this)}static go(t){const{pathname:r,search:o,hash:n}=z(t)?new URL(t,"http://a"):t;return mt("go",{pathname:r,search:o,hash:n})}}const At=C`
  :host {
    --color-wood-dark: #7F451D;
    --color-wood-medium: #C18756;
    --color-cookie-medium: #E8C09A;
    --color-sand-light: #FFE9D4;

    --sl-color-primary-600: var(--color-wood-dark);
    --sl-color-primary-500: var(--color-wood-medium);

    font-family: var(--sl-font-sans, sans-serif);
  }
`;var Nn=Object.defineProperty,Hn=Object.getOwnPropertyDescriptor,Or=(e,t,r,o)=>{for(var n=o>1?void 0:o?Hn(t,r):t,i=e.length-1,s;i>=0;i--)(s=e[i])&&(n=(o?s(t,r,n):s(n))||n);return o&&n&&Nn(t,r,n),n};let Nt=class extends I{constructor(){super(),this.deferredPrompt=null,window.addEventListener("beforeinstallprompt",t=>{t.preventDefault(),this.deferredPrompt=t}),window.addEventListener("appinstalled",()=>{this.deferredPrompt=null})}connectedCallback(){super.connectedCallback();const t=new CustomEvent("change-title",{detail:{title:"Strona Główna"},bubbles:!0,composed:!0});this.dispatchEvent(t)}async installApp(){if(!this.deferredPrompt)return;this.deferredPrompt.prompt();const{outcome:t}=await this.deferredPrompt.userChoice;t==="accepted"&&(this.deferredPrompt=null)}render(){return R`
      <main>

        <div class="logo-container">
          <img src="./assets/icons/icon_512.png" class="logo-img" alt="Ikona mParafia">
        </div>

        <div class="grid-container">

          <sl-button class="tile-button">
            <sl-icon name="calendar3"></sl-icon>
            <span>Msze św.</span>
          </sl-button>

          <sl-button class="tile-button">
            <sl-icon name="journal-text"></sl-icon>
            <span>Intencje</span>
          </sl-button>

          <sl-button class="tile-button">
            <sl-icon name="person-lines-fill"></sl-icon>
            <span>Kancelaria</span>
          </sl-button>

          <sl-button class="tile-button">
            <sl-icon name="geo-alt"></sl-icon>
            <span>Dojazd</span>
          </sl-button>

        </div>

        ${this.deferredPrompt?R`
          <div class="install-section">
            <sl-button variant="primary" pill class="install-btn" @click="${this.installApp}">
              <sl-icon slot="prefix" name="download"></sl-icon>
              Zainstaluj mParafię
            </sl-button>
          </div>
        `:null}
      </main>
    `}};Nt.styles=[At,C`
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
    `];Or([et()],Nt.prototype,"deferredPrompt",2);Nt=Or([Et("app-home")],Nt);var Bn=Object.getOwnPropertyDescriptor,Vn=(e,t,r,o)=>{for(var n=o>1?void 0:o?Bn(t,r):t,i=e.length-1,s;i>=0;i--)(s=e[i])&&(n=s(n)||n);return n};let ne=class extends I{connectedCallback(){super.connectedCallback();const t=new CustomEvent("change-title",{detail:{title:"Wklej tu swój tytuł"},bubbles:!0,composed:!0});this.dispatchEvent(t)}render(){return R`
      <div>
        <!-- wnętrze podstrony -->
      </div>
    `}};ne.styles=[At,C`
      /* style  css tylko dla tej konkretnej podstrony */
    `];ne=Vn([Et("app-calendar")],ne);var jn=Object.getOwnPropertyDescriptor,Wn=(e,t,r,o)=>{for(var n=o>1?void 0:o?jn(t,r):t,i=e.length-1,s;i>=0;i--)(s=e[i])&&(n=s(n)||n);return n};let ie=class extends I{connectedCallback(){super.connectedCallback();const t=new CustomEvent("change-title",{detail:{title:"Grupy"},bubbles:!0,composed:!0});this.dispatchEvent(t)}render(){return R`
      <div>
        <!-- wnętrze podstrony -->
      </div>
    `}};ie.styles=[At,C`
      /* style  css tylko dla tej konkretnej podstrony */
    `];ie=Wn([Et("app-groups")],ie);var qn=Object.getOwnPropertyDescriptor,Kn=(e,t,r,o)=>{for(var n=o>1?void 0:o?qn(t,r):t,i=e.length-1,s;i>=0;i--)(s=e[i])&&(n=s(n)||n);return n};let se=class extends I{connectedCallback(){super.connectedCallback();const e=new CustomEvent("change-title",{detail:{title:"Wydarzenia"},bubbles:!0,composed:!0});this.dispatchEvent(e)}render(){return R`
      <div>
        <!-- wnętrze podstrony -->
      </div>
    `}};se.styles=[At,C`
      /* style  css tylko dla tej konkretnej podstrony */
    `];se=Kn([Et("app-events")],se);var Gn=Object.defineProperty,Yn=Object.getOwnPropertyDescriptor,xe=(e,t,r,o)=>{for(var n=o>1?void 0:o?Yn(t,r):t,i=e.length-1,s;i>=0;i--)(s=e[i])&&(n=(o?s(t,r,n):s(n))||n);return o&&n&&Gn(t,r,n),n};Qt("https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.16.0/cdn/");let $t=class extends I{constructor(){super(...arguments),this.pageTitle="mParafia"}firstUpdated(){const e=this.shadowRoot?.querySelector("#router-outlet"),t="/mParafia/";new Fn(e,{baseUrl:t}).setRoutes([{path:"/",component:"app-home"},{path:"/kalendarz",component:"app-calendar"},{path:"/grupy",component:"app-groups"},{path:"/wydarzenia",component:"app-events"},{path:"(.*)",redirect:"/"}])}handleTitleChange(e){this.pageTitle=e.detail.title}openMenu(){this.drawer.show()}handleNavigation(e){this.drawer.hide();const r="/mParafia/"+e.substring(1);window.history.pushState({},"",r),window.dispatchEvent(new PopStateEvent("popstate"))}render(){return R`
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
    `}};$t.styles=[At,C`
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
        padding: 10px 16px;
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
        --size: 350px;
      }
    `];xe([rt("sl-drawer")],$t.prototype,"drawer",2);xe([et()],$t.prototype,"pageTitle",2);$t=xe([Et("app-index")],$t);
//# sourceMappingURL=index-CgQgDYA6.js.map
