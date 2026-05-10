(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function r(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(i){if(i.ep)return;i.ep=!0;const n=r(i);fetch(i.href,n)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Fn=globalThis,so=Fn.ShadowRoot&&(Fn.ShadyCSS===void 0||Fn.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,oo=Symbol(),cl=new WeakMap;let e0=class{constructor(t,r,a){if(this._$cssResult$=!0,a!==oo)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(so&&t===void 0){const a=r!==void 0&&r.length===1;a&&(t=cl.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),a&&cl.set(r,t))}return t}toString(){return this.cssText}};const Ph=e=>new e0(typeof e=="string"?e:e+"",void 0,oo),ye=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((a,i,n)=>a+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[n+1],e[0]);return new e0(r,e,oo)},Lh=(e,t)=>{if(so)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const a=document.createElement("style"),i=Fn.litNonce;i!==void 0&&a.setAttribute("nonce",i),a.textContent=r.cssText,e.appendChild(a)}},ul=so?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const a of t.cssRules)r+=a.cssText;return Ph(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Nh,defineProperty:$h,getOwnPropertyDescriptor:Mh,getOwnPropertyNames:Bh,getOwnPropertySymbols:zh,getPrototypeOf:Uh}=Object,es=globalThis,hl=es.trustedTypes,Vh=hl?hl.emptyScript:"",Hh=es.reactiveElementPolyfillSupport,ki=(e,t)=>e,Ga={toAttribute(e,t){switch(t){case Boolean:e=e?Vh:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},lo=(e,t)=>!Nh(e,t),fl={attribute:!0,type:String,converter:Ga,reflect:!1,useDefault:!1,hasChanged:lo};Symbol.metadata??=Symbol("metadata"),es.litPropertyMetadata??=new WeakMap;let Ma=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,r=fl){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(t,r),!r.noAccessor){const a=Symbol(),i=this.getPropertyDescriptor(t,a,r);i!==void 0&&$h(this.prototype,t,i)}}static getPropertyDescriptor(t,r,a){const{get:i,set:n}=Mh(this.prototype,t)??{get(){return this[r]},set(s){this[r]=s}};return{get:i,set(s){const o=i?.call(this);n?.call(this,s),this.requestUpdate(t,o,a)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??fl}static _$Ei(){if(this.hasOwnProperty(ki("elementProperties")))return;const t=Uh(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(ki("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ki("properties"))){const r=this.properties,a=[...Bh(r),...zh(r)];for(const i of a)this.createProperty(i,r[i])}const t=this[Symbol.metadata];if(t!==null){const r=litPropertyMetadata.get(t);if(r!==void 0)for(const[a,i]of r)this.elementProperties.set(a,i)}this._$Eh=new Map;for(const[r,a]of this.elementProperties){const i=this._$Eu(r,a);i!==void 0&&this._$Eh.set(i,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const a=new Set(t.flat(1/0).reverse());for(const i of a)r.unshift(ul(i))}else t!==void 0&&r.push(ul(t));return r}static _$Eu(t,r){const a=r.attribute;return a===!1?void 0:typeof a=="string"?a:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,r=this.constructor.elementProperties;for(const a of r.keys())this.hasOwnProperty(a)&&(t.set(a,this[a]),delete this[a]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Lh(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,r,a){this._$AK(t,a)}_$ET(t,r){const a=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,a);if(i!==void 0&&a.reflect===!0){const n=(a.converter?.toAttribute!==void 0?a.converter:Ga).toAttribute(r,a.type);this._$Em=t,n==null?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(t,r){const a=this.constructor,i=a._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const n=a.getPropertyOptions(i),s=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute!==void 0?n.converter:Ga;this._$Em=i;const o=s.fromAttribute(r,n.type);this[i]=o??this._$Ej?.get(i)??o,this._$Em=null}}requestUpdate(t,r,a,i=!1,n){if(t!==void 0){const s=this.constructor;if(i===!1&&(n=this[t]),a??=s.getPropertyOptions(t),!((a.hasChanged??lo)(n,r)||a.useDefault&&a.reflect&&n===this._$Ej?.get(t)&&!this.hasAttribute(s._$Eu(t,a))))return;this.C(t,r,a)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,r,{useDefault:a,reflect:i,wrapped:n},s){a&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,s??r??this[t]),n!==!0||s!==void 0)||(this._$AL.has(t)||(this.hasUpdated||a||(r=void 0),this._$AL.set(t,r)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,n]of this._$Ep)this[i]=n;this._$Ep=void 0}const a=this.constructor.elementProperties;if(a.size>0)for(const[i,n]of a){const{wrapped:s}=n,o=this[i];s!==!0||this._$AL.has(i)||o===void 0||this.C(i,void 0,n,o)}}let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),this._$EO?.forEach(a=>a.hostUpdate?.()),this.update(r)):this._$EM()}catch(a){throw t=!1,this._$EM(),a}t&&this._$AE(r)}willUpdate(t){}_$AE(t){this._$EO?.forEach(r=>r.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(r=>this._$ET(r,this[r])),this._$EM()}updated(t){}firstUpdated(t){}};Ma.elementStyles=[],Ma.shadowRootOptions={mode:"open"},Ma[ki("elementProperties")]=new Map,Ma[ki("finalized")]=new Map,Hh?.({ReactiveElement:Ma}),(es.reactiveElementVersions??=[]).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const co=globalThis,dl=e=>e,Ln=co.trustedTypes,pl=Ln?Ln.createPolicy("lit-html",{createHTML:e=>e}):void 0,t0="$lit$",Wr=`lit$${Math.random().toFixed(9).slice(2)}$`,r0="?"+Wr,Wh=`<${r0}>`,xa=document,$i=()=>xa.createComment(""),Mi=e=>e===null||typeof e!="object"&&typeof e!="function",uo=Array.isArray,jh=e=>uo(e)||typeof e?.[Symbol.iterator]=="function",xs=`[ 	
\f\r]`,hi=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,gl=/-->/g,ml=/>/g,oa=RegExp(`>|${xs}(?:([^\\s"'>=/]+)(${xs}*=${xs}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),vl=/'/g,xl=/"/g,a0=/^(?:script|style|textarea|title)$/i,Gh=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),K=Gh(1),Zt=Symbol.for("lit-noChange"),Ge=Symbol.for("lit-nothing"),bl=new WeakMap,da=xa.createTreeWalker(xa,129);function i0(e,t){if(!uo(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return pl!==void 0?pl.createHTML(t):t}const Xh=(e,t)=>{const r=e.length-1,a=[];let i,n=t===2?"<svg>":t===3?"<math>":"",s=hi;for(let o=0;o<r;o++){const l=e[o];let c,u,h=-1,d=0;for(;d<l.length&&(s.lastIndex=d,u=s.exec(l),u!==null);)d=s.lastIndex,s===hi?u[1]==="!--"?s=gl:u[1]!==void 0?s=ml:u[2]!==void 0?(a0.test(u[2])&&(i=RegExp("</"+u[2],"g")),s=oa):u[3]!==void 0&&(s=oa):s===oa?u[0]===">"?(s=i??hi,h=-1):u[1]===void 0?h=-2:(h=s.lastIndex-u[2].length,c=u[1],s=u[3]===void 0?oa:u[3]==='"'?xl:vl):s===xl||s===vl?s=oa:s===gl||s===ml?s=hi:(s=oa,i=void 0);const f=s===oa&&e[o+1].startsWith("/>")?" ":"";n+=s===hi?l+Wh:h>=0?(a.push(c),l.slice(0,h)+t0+l.slice(h)+Wr+f):l+Wr+(h===-2?o:f)}return[i0(e,n+(e[r]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),a]};class Bi{constructor({strings:t,_$litType$:r},a){let i;this.parts=[];let n=0,s=0;const o=t.length-1,l=this.parts,[c,u]=Xh(t,r);if(this.el=Bi.createElement(c,a),da.currentNode=this.el.content,r===2||r===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(i=da.nextNode())!==null&&l.length<o;){if(i.nodeType===1){if(i.hasAttributes())for(const h of i.getAttributeNames())if(h.endsWith(t0)){const d=u[s++],f=i.getAttribute(h).split(Wr),p=/([.?@])?(.*)/.exec(d);l.push({type:1,index:n,name:p[2],strings:f,ctor:p[1]==="."?Yh:p[1]==="?"?qh:p[1]==="@"?Zh:ts}),i.removeAttribute(h)}else h.startsWith(Wr)&&(l.push({type:6,index:n}),i.removeAttribute(h));if(a0.test(i.tagName)){const h=i.textContent.split(Wr),d=h.length-1;if(d>0){i.textContent=Ln?Ln.emptyScript:"";for(let f=0;f<d;f++)i.append(h[f],$i()),da.nextNode(),l.push({type:2,index:++n});i.append(h[d],$i())}}}else if(i.nodeType===8)if(i.data===r0)l.push({type:2,index:n});else{let h=-1;for(;(h=i.data.indexOf(Wr,h+1))!==-1;)l.push({type:7,index:n}),h+=Wr.length-1}n++}}static createElement(t,r){const a=xa.createElement("template");return a.innerHTML=t,a}}function Xa(e,t,r=e,a){if(t===Zt)return t;let i=a!==void 0?r._$Co?.[a]:r._$Cl;const n=Mi(t)?void 0:t._$litDirective$;return i?.constructor!==n&&(i?._$AO?.(!1),n===void 0?i=void 0:(i=new n(e),i._$AT(e,r,a)),a!==void 0?(r._$Co??=[])[a]=i:r._$Cl=i),i!==void 0&&(t=Xa(e,i._$AS(e,t.values),i,a)),t}class Kh{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:r},parts:a}=this._$AD,i=(t?.creationScope??xa).importNode(r,!0);da.currentNode=i;let n=da.nextNode(),s=0,o=0,l=a[0];for(;l!==void 0;){if(s===l.index){let c;l.type===2?c=new en(n,n.nextSibling,this,t):l.type===1?c=new l.ctor(n,l.name,l.strings,this,t):l.type===6&&(c=new Jh(n,this,t)),this._$AV.push(c),l=a[++o]}s!==l?.index&&(n=da.nextNode(),s++)}return da.currentNode=xa,i}p(t){let r=0;for(const a of this._$AV)a!==void 0&&(a.strings!==void 0?(a._$AI(t,a,r),r+=a.strings.length-2):a._$AI(t[r])),r++}}class en{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,r,a,i){this.type=2,this._$AH=Ge,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=a,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&t?.nodeType===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=Xa(this,t,r),Mi(t)?t===Ge||t==null||t===""?(this._$AH!==Ge&&this._$AR(),this._$AH=Ge):t!==this._$AH&&t!==Zt&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):jh(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==Ge&&Mi(this._$AH)?this._$AA.nextSibling.data=t:this.T(xa.createTextNode(t)),this._$AH=t}$(t){const{values:r,_$litType$:a}=t,i=typeof a=="number"?this._$AC(t):(a.el===void 0&&(a.el=Bi.createElement(i0(a.h,a.h[0]),this.options)),a);if(this._$AH?._$AD===i)this._$AH.p(r);else{const n=new Kh(i,this),s=n.u(this.options);n.p(r),this.T(s),this._$AH=n}}_$AC(t){let r=bl.get(t.strings);return r===void 0&&bl.set(t.strings,r=new Bi(t)),r}k(t){uo(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let a,i=0;for(const n of t)i===r.length?r.push(a=new en(this.O($i()),this.O($i()),this,this.options)):a=r[i],a._$AI(n),i++;i<r.length&&(this._$AR(a&&a._$AB.nextSibling,i),r.length=i)}_$AR(t=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);t!==this._$AB;){const a=dl(t).nextSibling;dl(t).remove(),t=a}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class ts{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,a,i,n){this.type=1,this._$AH=Ge,this._$AN=void 0,this.element=t,this.name=r,this._$AM=i,this.options=n,a.length>2||a[0]!==""||a[1]!==""?(this._$AH=Array(a.length-1).fill(new String),this.strings=a):this._$AH=Ge}_$AI(t,r=this,a,i){const n=this.strings;let s=!1;if(n===void 0)t=Xa(this,t,r,0),s=!Mi(t)||t!==this._$AH&&t!==Zt,s&&(this._$AH=t);else{const o=t;let l,c;for(t=n[0],l=0;l<n.length-1;l++)c=Xa(this,o[a+l],r,l),c===Zt&&(c=this._$AH[l]),s||=!Mi(c)||c!==this._$AH[l],c===Ge?t=Ge:t!==Ge&&(t+=(c??"")+n[l+1]),this._$AH[l]=c}s&&!i&&this.j(t)}j(t){t===Ge?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Yh extends ts{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Ge?void 0:t}}class qh extends ts{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==Ge)}}class Zh extends ts{constructor(t,r,a,i,n){super(t,r,a,i,n),this.type=5}_$AI(t,r=this){if((t=Xa(this,t,r,0)??Ge)===Zt)return;const a=this._$AH,i=t===Ge&&a!==Ge||t.capture!==a.capture||t.once!==a.once||t.passive!==a.passive,n=t!==Ge&&(a===Ge||i);i&&this.element.removeEventListener(this.name,this,a),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class Jh{constructor(t,r,a){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=a}get _$AU(){return this._$AM._$AU}_$AI(t){Xa(this,t)}}const Qh=co.litHtmlPolyfillSupport;Qh?.(Bi,en),(co.litHtmlVersions??=[]).push("3.3.2");const ef=(e,t,r)=>{const a=r?.renderBefore??t;let i=a._$litPart$;if(i===void 0){const n=r?.renderBefore??null;a._$litPart$=i=new en(t.insertBefore($i(),n),n,void 0,r??{})}return i._$AI(e),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ho=globalThis;let tt=class extends Ma{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=ef(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Zt}};tt._$litElement$=!0,tt.finalized=!0,ho.litElementHydrateSupport?.({LitElement:tt});const tf=ho.litElementPolyfillSupport;tf?.({LitElement:tt});(ho.litElementVersions??=[]).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Rt=e=>(t,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const rf={attribute:!0,type:String,converter:Ga,reflect:!1,hasChanged:lo},af=(e=rf,t,r)=>{const{kind:a,metadata:i}=r;let n=globalThis.litPropertyMetadata.get(i);if(n===void 0&&globalThis.litPropertyMetadata.set(i,n=new Map),a==="setter"&&((e=Object.create(e)).wrapped=!0),n.set(r.name,e),a==="accessor"){const{name:s}=r;return{set(o){const l=t.get.call(this);t.set.call(this,o),this.requestUpdate(s,l,e,!0,o)},init(o){return o!==void 0&&this.C(s,void 0,e,o),o}}}if(a==="setter"){const{name:s}=r;return function(o){const l=this[s];t.call(this,o),this.requestUpdate(s,l,e,!0,o)}}throw Error("Unsupported decorator location: "+a)};function I(e){return(t,r)=>typeof r=="object"?af(e,t,r):((a,i,n)=>{const s=i.hasOwnProperty(n);return i.constructor.createProperty(n,a),s?Object.getOwnPropertyDescriptor(i,n):void 0})(e,t,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function fe(e){return I({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function nf(e){return(t,r)=>{const a=typeof t=="function"?t:t[r];Object.assign(a,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const sf=(e,t,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,r),r);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function me(e,t){return(r,a,i)=>{const n=s=>s.renderRoot?.querySelector(e)??null;return sf(r,a,{get(){return n(this)}})}}var Ns="";function $s(e){Ns=e}function of(e=""){if(!Ns){const t=[...document.getElementsByTagName("script")],r=t.find(a=>a.hasAttribute("data-shoelace"));if(r)$s(r.getAttribute("data-shoelace"));else{const a=t.find(n=>/shoelace(\.min)?\.js($|\?)/.test(n.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(n.src));let i="";a&&(i=a.getAttribute("src")),$s(i.split("/").slice(0,-1).join("/"))}}return Ns.replace(/\/$/,"")+(e?`/${e.replace(/^\//,"")}`:"")}var lf={name:"default",resolver:e=>of(`assets/icons/${e}.svg`)},cf=lf,wl={caret:`
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
  `},uf={name:"system",resolver:e=>e in wl?`data:image/svg+xml,${encodeURIComponent(wl[e])}`:""},hf=uf,ff=[cf,hf],Ms=[];function df(e){Ms.push(e)}function pf(e){Ms=Ms.filter(t=>t!==e)}function yl(e){return ff.find(t=>t.name===e)}var gf=ye`
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
`,n0=Object.defineProperty,mf=Object.defineProperties,vf=Object.getOwnPropertyDescriptor,xf=Object.getOwnPropertyDescriptors,_l=Object.getOwnPropertySymbols,bf=Object.prototype.hasOwnProperty,wf=Object.prototype.propertyIsEnumerable,bs=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),fo=e=>{throw TypeError(e)},kl=(e,t,r)=>t in e?n0(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,aa=(e,t)=>{for(var r in t||(t={}))bf.call(t,r)&&kl(e,r,t[r]);if(_l)for(var r of _l(t))wf.call(t,r)&&kl(e,r,t[r]);return e},rs=(e,t)=>mf(e,xf(t)),y=(e,t,r,a)=>{for(var i=a>1?void 0:a?vf(t,r):t,n=e.length-1,s;n>=0;n--)(s=e[n])&&(i=(a?s(t,r,i):s(i))||i);return a&&i&&n0(t,r,i),i},s0=(e,t,r)=>t.has(e)||fo("Cannot "+r),yf=(e,t,r)=>(s0(e,t,"read from private field"),t.get(e)),_f=(e,t,r)=>t.has(e)?fo("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),kf=(e,t,r,a)=>(s0(e,t,"write to private field"),t.set(e,r),r),Ef=function(e,t){this[0]=e,this[1]=t},Tf=e=>{var t=e[bs("asyncIterator")],r=!1,a,i={};return t==null?(t=e[bs("iterator")](),a=n=>i[n]=s=>t[n](s)):(t=t.call(e),a=n=>i[n]=s=>{if(r){if(r=!1,n==="throw")throw s;return s}return r=!0,{done:!1,value:new Ef(new Promise(o=>{var l=t[n](s);l instanceof Object||fo("Object expected"),o(l)}),1)}}),i[bs("iterator")]=()=>i,a("next"),"throw"in t?a("throw"):i.throw=n=>{throw n},"return"in t&&a("return"),i};function Re(e,t){const r=aa({waitUntilFirstUpdate:!1},t);return(a,i)=>{const{update:n}=a,s=Array.isArray(e)?e:[e];a.update=function(o){s.forEach(l=>{const c=l;if(o.has(c)){const u=o.get(c),h=this[c];u!==h&&(!r.waitUntilFirstUpdate||this.hasUpdated)&&this[i](u,h)}}),n.call(this,o)}}}var Ve=ye`
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
`,Dn,$e=class extends tt{constructor(){super(),_f(this,Dn,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([e,t])=>{this.constructor.define(e,t)})}emit(e,t){const r=new CustomEvent(e,aa({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(r),r}static define(e,t=this,r={}){const a=customElements.get(e);if(!a){try{customElements.define(e,t,r)}catch{customElements.define(e,class extends t{},r)}return}let i=" (unknown version)",n=i;"version"in t&&t.version&&(i=" v"+t.version),"version"in a&&a.version&&(n=" v"+a.version),!(i&&n&&i===n)&&console.warn(`Attempted to register <${e}>${i}, but <${e}>${n} has already been registered.`)}attributeChangedCallback(e,t,r){yf(this,Dn)||(this.constructor.elementProperties.forEach((a,i)=>{a.reflect&&this[i]!=null&&this.initialReflectedProperties.set(i,this[i])}),kf(this,Dn,!0)),super.attributeChangedCallback(e,t,r)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,r)=>{e.has(r)&&this[r]==null&&(this[r]=t)})}};Dn=new WeakMap;$e.version="2.20.1";$e.dependencies={};y([I()],$e.prototype,"dir",2);y([I()],$e.prototype,"lang",2);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Af=(e,t)=>e?._$litType$!==void 0,Cf=e=>e.strings===void 0,Sf={},Ff=(e,t=Sf)=>e._$AH=t;var fi=Symbol(),vn=Symbol(),ws,ys=new Map,It=class extends $e{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(e,t){var r;let a;if(t?.spriteSheet)return this.svg=K`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,this.svg;try{if(a=await fetch(e,{mode:"cors"}),!a.ok)return a.status===410?fi:vn}catch{return vn}try{const i=document.createElement("div");i.innerHTML=await a.text();const n=i.firstElementChild;if(((r=n?.tagName)==null?void 0:r.toLowerCase())!=="svg")return fi;ws||(ws=new DOMParser);const o=ws.parseFromString(n.outerHTML,"text/html").body.querySelector("svg");return o?(o.part.add("svg"),document.adoptNode(o)):fi}catch{return fi}}connectedCallback(){super.connectedCallback(),df(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),pf(this)}getIconSource(){const e=yl(this.library);return this.name&&e?{url:e.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var e;const{url:t,fromLibrary:r}=this.getIconSource(),a=r?yl(this.library):void 0;if(!t){this.svg=null;return}let i=ys.get(t);if(i||(i=this.resolveIcon(t,a),ys.set(t,i)),!this.initialRender)return;const n=await i;if(n===vn&&ys.delete(t),t===this.getIconSource().url){if(Af(n)){if(this.svg=n,a){await this.updateComplete;const s=this.shadowRoot.querySelector("[part='svg']");typeof a.mutator=="function"&&s&&a.mutator(s)}return}switch(n){case vn:case fi:this.svg=null,this.emit("sl-error");break;default:this.svg=n.cloneNode(!0),(e=a?.mutator)==null||e.call(a,this.svg),this.emit("sl-load")}}}render(){return this.svg}};It.styles=[Ve,gf];y([fe()],It.prototype,"svg",2);y([I({reflect:!0})],It.prototype,"name",2);y([I()],It.prototype,"src",2);y([I()],It.prototype,"label",2);y([I({reflect:!0})],It.prototype,"library",2);y([Re("label")],It.prototype,"handleLabelChange",1);y([Re(["name","src","library"])],It.prototype,"setIcon",1);It.define("sl-icon");var Df=ye`
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
`;function*po(e=document.activeElement){e!=null&&(yield e,"shadowRoot"in e&&e.shadowRoot&&e.shadowRoot.mode!=="closed"&&(yield*Tf(po(e.shadowRoot.activeElement))))}function Of(){return[...po()].pop()}var El=new WeakMap;function o0(e){let t=El.get(e);return t||(t=window.getComputedStyle(e,null),El.set(e,t)),t}function Rf(e){if(typeof e.checkVisibility=="function")return e.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});const t=o0(e);return t.visibility!=="hidden"&&t.display!=="none"}function If(e){const t=o0(e),{overflowY:r,overflowX:a}=t;return r==="scroll"||a==="scroll"?!0:r!=="auto"||a!=="auto"?!1:e.scrollHeight>e.clientHeight&&r==="auto"||e.scrollWidth>e.clientWidth&&a==="auto"}function Pf(e){const t=e.tagName.toLowerCase(),r=Number(e.getAttribute("tabindex"));if(e.hasAttribute("tabindex")&&(isNaN(r)||r<=-1)||e.hasAttribute("disabled")||e.closest("[inert]"))return!1;if(t==="input"&&e.getAttribute("type")==="radio"){const n=e.getRootNode(),s=`input[type='radio'][name="${e.getAttribute("name")}"]`,o=n.querySelector(`${s}:checked`);return o?o===e:n.querySelector(s)===e}return Rf(e)?(t==="audio"||t==="video")&&e.hasAttribute("controls")||e.hasAttribute("tabindex")||e.hasAttribute("contenteditable")&&e.getAttribute("contenteditable")!=="false"||["button","input","select","textarea","a","audio","video","summary","iframe"].includes(t)?!0:If(e):!1}function Lf(e,t){var r;return((r=e.getRootNode({composed:!0}))==null?void 0:r.host)!==t}function Tl(e){const t=new WeakMap,r=[];function a(i){if(i instanceof Element){if(i.hasAttribute("inert")||i.closest("[inert]")||t.has(i))return;t.set(i,!0),!r.includes(i)&&Pf(i)&&r.push(i),i instanceof HTMLSlotElement&&Lf(i,e)&&i.assignedElements({flatten:!0}).forEach(n=>{a(n)}),i.shadowRoot!==null&&i.shadowRoot.mode==="open"&&a(i.shadowRoot)}for(const n of i.children)a(n)}return a(e),r.sort((i,n)=>{const s=Number(i.getAttribute("tabindex"))||0;return(Number(n.getAttribute("tabindex"))||0)-s})}var di=[],l0=class{constructor(e){this.tabDirection="forward",this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=t=>{var r;if(t.key!=="Tab"||this.isExternalActivated||!this.isActive())return;const a=Of();if(this.previousFocus=a,this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;t.shiftKey?this.tabDirection="backward":this.tabDirection="forward";const i=Tl(this.element);let n=i.findIndex(o=>o===a);this.previousFocus=this.currentFocus;const s=this.tabDirection==="forward"?1:-1;for(;;){n+s>=i.length?n=0:n+s<0?n=i.length-1:n+=s,this.previousFocus=this.currentFocus;const o=i[n];if(this.tabDirection==="backward"&&this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus)||o&&this.possiblyHasTabbableChildren(o))return;t.preventDefault(),this.currentFocus=o,(r=this.currentFocus)==null||r.focus({preventScroll:!1});const l=[...po()];if(l.includes(this.currentFocus)||!l.includes(this.previousFocus))break}setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=e,this.elementsWithTabbableControls=["iframe"]}activate(){di.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){di=di.filter(e=>e!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return di[di.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){const e=Tl(this.element);if(!this.element.matches(":focus-within")){const t=e[0],r=e[e.length-1],a=this.tabDirection==="forward"?t:r;typeof a?.focus=="function"&&(this.currentFocus=a,a.focus({preventScroll:!1}))}}}possiblyHasTabbableChildren(e){return this.elementsWithTabbableControls.includes(e.tagName.toLowerCase())||e.hasAttribute("controls")}};function Nf(e,t){return{top:Math.round(e.getBoundingClientRect().top-t.getBoundingClientRect().top),left:Math.round(e.getBoundingClientRect().left-t.getBoundingClientRect().left)}}var Bs=new Set;function $f(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}function Mf(){const e=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(e)||!e?0:e}function Ei(e){if(Bs.add(e),!document.documentElement.classList.contains("sl-scroll-lock")){const t=$f()+Mf();let r=getComputedStyle(document.documentElement).scrollbarGutter;(!r||r==="auto")&&(r="stable"),t<2&&(r=""),document.documentElement.style.setProperty("--sl-scroll-lock-gutter",r),document.documentElement.classList.add("sl-scroll-lock"),document.documentElement.style.setProperty("--sl-scroll-lock-size",`${t}px`)}}function Ti(e){Bs.delete(e),Bs.size===0&&(document.documentElement.classList.remove("sl-scroll-lock"),document.documentElement.style.removeProperty("--sl-scroll-lock-size"))}function zs(e,t,r="vertical",a="smooth"){const i=Nf(e,t),n=i.top+t.scrollTop,s=i.left+t.scrollLeft,o=t.scrollLeft,l=t.scrollLeft+t.offsetWidth,c=t.scrollTop,u=t.scrollTop+t.offsetHeight;(r==="horizontal"||r==="both")&&(s<o?t.scrollTo({left:s,behavior:a}):s+e.clientWidth>l&&t.scrollTo({left:s-t.offsetWidth+e.clientWidth,behavior:a})),(r==="vertical"||r==="both")&&(n<c?t.scrollTo({top:n,behavior:a}):n+e.clientHeight>u&&t.scrollTo({top:n-t.offsetHeight+e.clientHeight,behavior:a}))}var go=e=>{var t;const{activeElement:r}=document;r&&e.contains(r)&&((t=document.activeElement)==null||t.blur())},Bf=ye`
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
 */const Hr={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},mo=e=>(...t)=>({_$litDirective$:e,values:t});let vo=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,a){this._$Ct=t,this._$AM=r,this._$Ci=a}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Le=mo(class extends vo{constructor(e){if(super(e),e.type!==Hr.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(a=>a!=="")));for(const a in t)t[a]&&!this.nt?.has(a)&&this.st.add(a);return this.render(t)}const r=e.element.classList;for(const a of this.st)a in t||(r.remove(a),this.st.delete(a));for(const a in t){const i=!!t[a];i===this.st.has(a)||this.nt?.has(a)||(i?(r.add(a),this.st.add(a)):(r.remove(a),this.st.delete(a)))}return Zt}});/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const c0=Symbol.for(""),zf=e=>{if(e?.r===c0)return e?._$litStatic$},Nn=(e,...t)=>({_$litStatic$:t.reduce((r,a,i)=>r+(n=>{if(n._$litStatic$!==void 0)return n._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${n}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(a)+e[i+1],e[0]),r:c0}),Al=new Map,Uf=e=>(t,...r)=>{const a=r.length;let i,n;const s=[],o=[];let l,c=0,u=!1;for(;c<a;){for(l=t[c];c<a&&(n=r[c],(i=zf(n))!==void 0);)l+=i+t[++c],u=!0;c!==a&&o.push(n),s.push(l),c++}if(c===a&&s.push(t[a]),u){const h=s.join("$$lit$$");(t=Al.get(h))===void 0&&(s.raw=s,Al.set(h,t=s)),r=o}return e(t,...r)},Ai=Uf(K);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pe=e=>e??Ge;var lt=class extends $e{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){const e=!!this.href,t=e?Nn`a`:Nn`button`;return Ai`
      <${t}
        part="base"
        class=${Le({"icon-button":!0,"icon-button--disabled":!e&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${pe(e?void 0:this.disabled)}
        type=${pe(e?void 0:"button")}
        href=${pe(e?this.href:void 0)}
        target=${pe(e?this.target:void 0)}
        download=${pe(e?this.download:void 0)}
        rel=${pe(e&&this.target?"noreferrer noopener":void 0)}
        role=${pe(e?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${pe(this.name)}
          library=${pe(this.library)}
          src=${pe(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${t}>
    `}};lt.styles=[Ve,Bf];lt.dependencies={"sl-icon":It};y([me(".icon-button")],lt.prototype,"button",2);y([fe()],lt.prototype,"hasFocus",2);y([I()],lt.prototype,"name",2);y([I()],lt.prototype,"library",2);y([I()],lt.prototype,"src",2);y([I()],lt.prototype,"href",2);y([I()],lt.prototype,"target",2);y([I()],lt.prototype,"download",2);y([I()],lt.prototype,"label",2);y([I({type:Boolean,reflect:!0})],lt.prototype,"disabled",2);var u0=new Map,Vf=new WeakMap;function Hf(e){return e??{keyframes:[],options:{duration:0}}}function Cl(e,t){return t.toLowerCase()==="rtl"?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function at(e,t){u0.set(e,Hf(t))}function Nt(e,t,r){const a=Vf.get(e);if(a?.[t])return Cl(a[t],r.dir);const i=u0.get(t);return i?Cl(i,r.dir):{keyframes:[],options:{duration:0}}}function Zr(e,t){return new Promise(r=>{function a(i){i.target===e&&(e.removeEventListener(t,a),r())}e.addEventListener(t,a)})}function $t(e,t,r){return new Promise(a=>{if(r?.duration===1/0)throw new Error("Promise-based animations must be finite.");const i=e.animate(t,rs(aa({},r),{duration:Wf()?0:r.duration}));i.addEventListener("cancel",a,{once:!0}),i.addEventListener("finish",a,{once:!0})})}function Wf(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Jt(e){return Promise.all(e.getAnimations().map(t=>new Promise(r=>{t.cancel(),requestAnimationFrame(r)})))}var yr=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=r=>{const a=r.target;(this.slotNames.includes("[default]")&&!a.name||a.name&&this.slotNames.includes(a.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===e.TEXT_NODE&&e.textContent.trim()!=="")return!0;if(e.nodeType===e.ELEMENT_NODE){const t=e;if(t.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};const Us=new Set,za=new Map;let ua,xo="ltr",bo="en";const h0=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(h0){const e=new MutationObserver(d0);xo=document.documentElement.dir||"ltr",bo=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function f0(...e){e.map(t=>{const r=t.$code.toLowerCase();za.has(r)?za.set(r,Object.assign(Object.assign({},za.get(r)),t)):za.set(r,t),ua||(ua=t)}),d0()}function d0(){h0&&(xo=document.documentElement.dir||"ltr",bo=document.documentElement.lang||navigator.language),[...Us.keys()].map(e=>{typeof e.requestUpdate=="function"&&e.requestUpdate()})}let jf=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){Us.add(this.host)}hostDisconnected(){Us.delete(this.host)}dir(){return`${this.host.dir||xo}`.toLowerCase()}lang(){return`${this.host.lang||bo}`.toLowerCase()}getTranslationData(t){var r,a;const i=new Intl.Locale(t.replace(/_/g,"-")),n=i?.language.toLowerCase(),s=(a=(r=i?.region)===null||r===void 0?void 0:r.toLowerCase())!==null&&a!==void 0?a:"",o=za.get(`${n}-${s}`),l=za.get(n);return{locale:i,language:n,region:s,primary:o,secondary:l}}exists(t,r){var a;const{primary:i,secondary:n}=this.getTranslationData((a=r.lang)!==null&&a!==void 0?a:this.lang());return r=Object.assign({includeFallback:!1},r),!!(i&&i[t]||n&&n[t]||r.includeFallback&&ua&&ua[t])}term(t,...r){const{primary:a,secondary:i}=this.getTranslationData(this.lang());let n;if(a&&a[t])n=a[t];else if(i&&i[t])n=i[t];else if(ua&&ua[t])n=ua[t];else return console.error(`No translation found for: ${String(t)}`),String(t);return typeof n=="function"?n(...r):n}date(t,r){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),r).format(t)}number(t,r){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),r).format(t)}relativeTime(t,r,a){return new Intl.RelativeTimeFormat(this.lang(),a).format(t,r)}};var p0={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>e===0?"No options selected":e===1?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};f0(p0);var Gf=p0,er=class extends jf{};f0(Gf);function Sl(e){return e.charAt(0).toUpperCase()+e.slice(1)}var Wt=class extends $e{constructor(){super(...arguments),this.hasSlotController=new yr(this,"footer"),this.localize=new er(this),this.modal=new l0(this),this.open=!1,this.label="",this.placement="end",this.contained=!1,this.noHeader=!1,this.handleDocumentKeyDown=e=>{this.contained||e.key==="Escape"&&this.modal.isActive()&&this.open&&(e.stopImmediatePropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.drawer.hidden=!this.open,this.open&&(this.addOpenListeners(),this.contained||(this.modal.activate(),Ei(this)))}disconnectedCallback(){super.disconnectedCallback(),Ti(this),this.removeOpenListeners()}requestClose(e){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){const r=Nt(this,"drawer.denyClose",{dir:this.localize.dir()});$t(this.panel,r.keyframes,r.options);return}this.hide()}addOpenListeners(){var e;"CloseWatcher"in window?((e=this.closeWatcher)==null||e.destroy(),this.contained||(this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard"))):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var e;document.removeEventListener("keydown",this.handleDocumentKeyDown),(e=this.closeWatcher)==null||e.destroy()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),Ei(this));const e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([Jt(this.drawer),Jt(this.overlay)]),this.drawer.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")});const t=Nt(this,`drawer.show${Sl(this.placement)}`,{dir:this.localize.dir()}),r=Nt(this,"drawer.overlay.show",{dir:this.localize.dir()});await Promise.all([$t(this.panel,t.keyframes,t.options),$t(this.overlay,r.keyframes,r.options)]),this.emit("sl-after-show")}else{go(this),this.emit("sl-hide"),this.removeOpenListeners(),this.contained||(this.modal.deactivate(),Ti(this)),await Promise.all([Jt(this.drawer),Jt(this.overlay)]);const e=Nt(this,`drawer.hide${Sl(this.placement)}`,{dir:this.localize.dir()}),t=Nt(this,"drawer.overlay.hide",{dir:this.localize.dir()});await Promise.all([$t(this.overlay,t.keyframes,t.options).then(()=>{this.overlay.hidden=!0}),$t(this.panel,e.keyframes,e.options).then(()=>{this.panel.hidden=!0})]),this.drawer.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1;const r=this.originalTrigger;typeof r?.focus=="function"&&setTimeout(()=>r.focus()),this.emit("sl-after-hide")}}handleNoModalChange(){this.open&&!this.contained&&(this.modal.activate(),Ei(this)),this.open&&this.contained&&(this.modal.deactivate(),Ti(this))}async show(){if(!this.open)return this.open=!0,Zr(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Zr(this,"sl-after-hide")}render(){return K`
      <div
        part="base"
        class=${Le({drawer:!0,"drawer--open":this.open,"drawer--top":this.placement==="top","drawer--end":this.placement==="end","drawer--bottom":this.placement==="bottom","drawer--start":this.placement==="start","drawer--contained":this.contained,"drawer--fixed":!this.contained,"drawer--rtl":this.localize.dir()==="rtl","drawer--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="drawer__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${pe(this.noHeader?this.label:void 0)}
          aria-labelledby=${pe(this.noHeader?void 0:"title")}
          tabindex="0"
        >
          ${this.noHeader?"":K`
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
    `}};Wt.styles=[Ve,Df];Wt.dependencies={"sl-icon-button":lt};y([me(".drawer")],Wt.prototype,"drawer",2);y([me(".drawer__panel")],Wt.prototype,"panel",2);y([me(".drawer__overlay")],Wt.prototype,"overlay",2);y([I({type:Boolean,reflect:!0})],Wt.prototype,"open",2);y([I({reflect:!0})],Wt.prototype,"label",2);y([I({reflect:!0})],Wt.prototype,"placement",2);y([I({type:Boolean,reflect:!0})],Wt.prototype,"contained",2);y([I({attribute:"no-header",type:Boolean,reflect:!0})],Wt.prototype,"noHeader",2);y([Re("open",{waitUntilFirstUpdate:!0})],Wt.prototype,"handleOpenChange",1);y([Re("contained",{waitUntilFirstUpdate:!0})],Wt.prototype,"handleNoModalChange",1);at("drawer.showTop",{keyframes:[{opacity:0,translate:"0 -100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});at("drawer.hideTop",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 -100%"}],options:{duration:250,easing:"ease"}});at("drawer.showEnd",{keyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});at("drawer.hideEnd",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],options:{duration:250,easing:"ease"}});at("drawer.showBottom",{keyframes:[{opacity:0,translate:"0 100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});at("drawer.hideBottom",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 100%"}],options:{duration:250,easing:"ease"}});at("drawer.showStart",{keyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});at("drawer.hideStart",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],options:{duration:250,easing:"ease"}});at("drawer.denyClose",{keyframes:[{scale:1},{scale:1.01},{scale:1}],options:{duration:250}});at("drawer.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});at("drawer.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});Wt.define("sl-drawer");lt.define("sl-icon-button");var Xf=ye`
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
`,wo=class extends $e{constructor(){super(...arguments),this.localize=new er(this)}render(){return K`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};wo.styles=[Ve,Xf];var pi=new WeakMap,gi=new WeakMap,mi=new WeakMap,_s=new WeakSet,xn=new WeakMap,Ja=class{constructor(e,t){this.handleFormData=r=>{const a=this.options.disabled(this.host),i=this.options.name(this.host),n=this.options.value(this.host),s=this.host.tagName.toLowerCase()==="sl-button";this.host.isConnected&&!a&&!s&&typeof i=="string"&&i.length>0&&typeof n<"u"&&(Array.isArray(n)?n.forEach(o=>{r.formData.append(i,o.toString())}):r.formData.append(i,n.toString()))},this.handleFormSubmit=r=>{var a;const i=this.options.disabled(this.host),n=this.options.reportValidity;this.form&&!this.form.noValidate&&((a=pi.get(this.form))==null||a.forEach(s=>{this.setUserInteracted(s,!0)})),this.form&&!this.form.noValidate&&!i&&!n(this.host)&&(r.preventDefault(),r.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),xn.set(this.host,[])},this.handleInteraction=r=>{const a=xn.get(this.host);a.includes(r.type)||a.push(r.type),a.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const r=this.form.querySelectorAll("*");for(const a of r)if(typeof a.checkValidity=="function"&&!a.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const r=this.form.querySelectorAll("*");for(const a of r)if(typeof a.reportValidity=="function"&&!a.reportValidity())return!1}return!0},(this.host=e).addController(this),this.options=aa({form:r=>{const a=r.form;if(a){const n=r.getRootNode().querySelector(`#${a}`);if(n)return n}return r.closest("form")},name:r=>r.name,value:r=>r.value,defaultValue:r=>r.defaultValue,disabled:r=>{var a;return(a=r.disabled)!=null?a:!1},reportValidity:r=>typeof r.reportValidity=="function"?r.reportValidity():!0,checkValidity:r=>typeof r.checkValidity=="function"?r.checkValidity():!0,setValue:(r,a)=>r.value=a,assumeInteractionOn:["sl-input"]},t)}hostConnected(){const e=this.options.form(this.host);e&&this.attachForm(e),xn.set(this.host,[]),this.options.assumeInteractionOn.forEach(t=>{this.host.addEventListener(t,this.handleInteraction)})}hostDisconnected(){this.detachForm(),xn.delete(this.host),this.options.assumeInteractionOn.forEach(e=>{this.host.removeEventListener(e,this.handleInteraction)})}hostUpdated(){const e=this.options.form(this.host);e||this.detachForm(),e&&this.form!==e&&(this.detachForm(),this.attachForm(e)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(e){e?(this.form=e,pi.has(this.form)?pi.get(this.form).add(this.host):pi.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),gi.has(this.form)||(gi.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),mi.has(this.form)||(mi.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const e=pi.get(this.form);e&&(e.delete(this.host),e.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),gi.has(this.form)&&(this.form.reportValidity=gi.get(this.form),gi.delete(this.form)),mi.has(this.form)&&(this.form.checkValidity=mi.get(this.form),mi.delete(this.form)),this.form=void 0))}setUserInteracted(e,t){t?_s.add(e):_s.delete(e),e.requestUpdate()}doAction(e,t){if(this.form){const r=document.createElement("button");r.type=e,r.style.position="absolute",r.style.width="0",r.style.height="0",r.style.clipPath="inset(50%)",r.style.overflow="hidden",r.style.whiteSpace="nowrap",t&&(r.name=t.name,r.value=t.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(a=>{t.hasAttribute(a)&&r.setAttribute(a,t.getAttribute(a))})),this.form.append(r),r.click(),r.remove()}}getForm(){var e;return(e=this.form)!=null?e:null}reset(e){this.doAction("reset",e)}submit(e){this.doAction("submit",e)}setValidity(e){const t=this.host,r=!!_s.has(t),a=!!t.required;t.toggleAttribute("data-required",a),t.toggleAttribute("data-optional",!a),t.toggleAttribute("data-invalid",!e),t.toggleAttribute("data-valid",e),t.toggleAttribute("data-user-invalid",!e&&r),t.toggleAttribute("data-user-valid",e&&r)}updateValidity(){const e=this.host;this.setValidity(e.validity.valid)}emitInvalidEvent(e){const t=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});e||t.preventDefault(),this.host.dispatchEvent(t)||e?.preventDefault()}},as=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1}),Kf=Object.freeze(rs(aa({},as),{valid:!1,valueMissing:!0})),Yf=Object.freeze(rs(aa({},as),{valid:!1,customError:!0})),g0=ye`
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
`,Ne=class extends $e{constructor(){super(...arguments),this.formControlController=new Ja(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new yr(this,"[default]","prefix","suffix"),this.localize=new er(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:as}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(e){this.isButton()&&(this.button.setCustomValidity(e),this.formControlController.updateValidity())}render(){const e=this.isLink(),t=e?Nn`a`:Nn`button`;return Ai`
      <${t}
        part="base"
        class=${Le({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${pe(e?void 0:this.disabled)}
        type=${pe(e?void 0:this.type)}
        title=${this.title}
        name=${pe(e?void 0:this.name)}
        value=${pe(e?void 0:this.value)}
        href=${pe(e&&!this.disabled?this.href:void 0)}
        target=${pe(e?this.target:void 0)}
        download=${pe(e?this.download:void 0)}
        rel=${pe(e?this.rel:void 0)}
        role=${pe(e?void 0:"button")}
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
        ${this.caret?Ai` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?Ai`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${t}>
    `}};Ne.styles=[Ve,g0];Ne.dependencies={"sl-icon":It,"sl-spinner":wo};y([me(".button")],Ne.prototype,"button",2);y([fe()],Ne.prototype,"hasFocus",2);y([fe()],Ne.prototype,"invalid",2);y([I()],Ne.prototype,"title",2);y([I({reflect:!0})],Ne.prototype,"variant",2);y([I({reflect:!0})],Ne.prototype,"size",2);y([I({type:Boolean,reflect:!0})],Ne.prototype,"caret",2);y([I({type:Boolean,reflect:!0})],Ne.prototype,"disabled",2);y([I({type:Boolean,reflect:!0})],Ne.prototype,"loading",2);y([I({type:Boolean,reflect:!0})],Ne.prototype,"outline",2);y([I({type:Boolean,reflect:!0})],Ne.prototype,"pill",2);y([I({type:Boolean,reflect:!0})],Ne.prototype,"circle",2);y([I()],Ne.prototype,"type",2);y([I()],Ne.prototype,"name",2);y([I()],Ne.prototype,"value",2);y([I()],Ne.prototype,"href",2);y([I()],Ne.prototype,"target",2);y([I()],Ne.prototype,"rel",2);y([I()],Ne.prototype,"download",2);y([I()],Ne.prototype,"form",2);y([I({attribute:"formaction"})],Ne.prototype,"formAction",2);y([I({attribute:"formenctype"})],Ne.prototype,"formEnctype",2);y([I({attribute:"formmethod"})],Ne.prototype,"formMethod",2);y([I({attribute:"formnovalidate",type:Boolean})],Ne.prototype,"formNoValidate",2);y([I({attribute:"formtarget"})],Ne.prototype,"formTarget",2);y([Re("disabled",{waitUntilFirstUpdate:!0})],Ne.prototype,"handleDisabledChange",1);Ne.define("sl-button");var qf=ye`
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
`,is=class extends $e{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};is.styles=[Ve,qf];y([I({type:Boolean,reflect:!0})],is.prototype,"vertical",2);y([Re("vertical")],is.prototype,"handleVerticalChange",1);is.define("sl-divider");function Zf(e){for(var t=[],r=0;r<e.length;){var a=e[r];if(a==="*"||a==="+"||a==="?"){t.push({type:"MODIFIER",index:r,value:e[r++]});continue}if(a==="\\"){t.push({type:"ESCAPED_CHAR",index:r++,value:e[r++]});continue}if(a==="{"){t.push({type:"OPEN",index:r,value:e[r++]});continue}if(a==="}"){t.push({type:"CLOSE",index:r,value:e[r++]});continue}if(a===":"){for(var i="",n=r+1;n<e.length;){var s=e.charCodeAt(n);if(s>=48&&s<=57||s>=65&&s<=90||s>=97&&s<=122||s===95){i+=e[n++];continue}break}if(!i)throw new TypeError("Missing parameter name at ".concat(r));t.push({type:"NAME",index:r,value:i}),r=n;continue}if(a==="("){var o=1,l="",n=r+1;if(e[n]==="?")throw new TypeError('Pattern cannot start with "?" at '.concat(n));for(;n<e.length;){if(e[n]==="\\"){l+=e[n++]+e[n++];continue}if(e[n]===")"){if(o--,o===0){n++;break}}else if(e[n]==="("&&(o++,e[n+1]!=="?"))throw new TypeError("Capturing groups are not allowed at ".concat(n));l+=e[n++]}if(o)throw new TypeError("Unbalanced pattern at ".concat(r));if(!l)throw new TypeError("Missing pattern at ".concat(r));t.push({type:"PATTERN",index:r,value:l}),r=n;continue}t.push({type:"CHAR",index:r,value:e[r++]})}return t.push({type:"END",index:r,value:""}),t}function yo(e,t){t===void 0&&(t={});for(var r=Zf(e),a=t.prefixes,i=a===void 0?"./":a,n=t.delimiter,s=n===void 0?"/#?":n,o=[],l=0,c=0,u="",h=function(R){if(c<r.length&&r[c].type===R)return r[c++].value},d=function(R){var H=h(R);if(H!==void 0)return H;var z=r[c],L=z.type,Z=z.index;throw new TypeError("Unexpected ".concat(L," at ").concat(Z,", expected ").concat(R))},f=function(){for(var R="",H;H=h("CHAR")||h("ESCAPED_CHAR");)R+=H;return R},p=function(R){for(var H=0,z=s;H<z.length;H++){var L=z[H];if(R.indexOf(L)>-1)return!0}return!1},g=function(R){var H=o[o.length-1],z=R||(H&&typeof H=="string"?H:"");if(H&&!z)throw new TypeError('Must have text between two parameters, missing text after "'.concat(H.name,'"'));return!z||p(z)?"[^".concat(jr(s),"]+?"):"(?:(?!".concat(jr(z),")[^").concat(jr(s),"])+?")};c<r.length;){var m=h("CHAR"),w=h("NAME"),C=h("PATTERN");if(w||C){var x=m||"";i.indexOf(x)===-1&&(u+=x,x=""),u&&(o.push(u),u=""),o.push({name:w||l++,prefix:x,suffix:"",pattern:C||g(x),modifier:h("MODIFIER")||""});continue}var D=m||h("ESCAPED_CHAR");if(D){u+=D;continue}u&&(o.push(u),u="");var M=h("OPEN");if(M){var x=f(),O=h("NAME")||"",E=h("PATTERN")||"",B=f();d("CLOSE"),o.push({name:O||(E?l++:""),pattern:O&&!E?g(x):E,prefix:x,suffix:B,modifier:h("MODIFIER")||""});continue}d("END")}return o}function m0(e,t){return v0(yo(e,t),t)}function v0(e,t){t===void 0&&(t={});var r=_o(t),a=t.encode,i=a===void 0?function(l){return l}:a,n=t.validate,s=n===void 0?!0:n,o=e.map(function(l){if(typeof l=="object")return new RegExp("^(?:".concat(l.pattern,")$"),r)});return function(l){for(var c="",u=0;u<e.length;u++){var h=e[u];if(typeof h=="string"){c+=h;continue}var d=l?l[h.name]:void 0,f=h.modifier==="?"||h.modifier==="*",p=h.modifier==="*"||h.modifier==="+";if(Array.isArray(d)){if(!p)throw new TypeError('Expected "'.concat(h.name,'" to not repeat, but got an array'));if(d.length===0){if(f)continue;throw new TypeError('Expected "'.concat(h.name,'" to not be empty'))}for(var g=0;g<d.length;g++){var m=i(d[g],h);if(s&&!o[u].test(m))throw new TypeError('Expected all "'.concat(h.name,'" to match "').concat(h.pattern,'", but got "').concat(m,'"'));c+=h.prefix+m+h.suffix}continue}if(typeof d=="string"||typeof d=="number"){var m=i(String(d),h);if(s&&!o[u].test(m))throw new TypeError('Expected "'.concat(h.name,'" to match "').concat(h.pattern,'", but got "').concat(m,'"'));c+=h.prefix+m+h.suffix;continue}if(!f){var w=p?"an array":"a string";throw new TypeError('Expected "'.concat(h.name,'" to be ').concat(w))}}return c}}function jr(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function _o(e){return e&&e.sensitive?"":"i"}function Jf(e,t){if(!t)return e;for(var r=/\((?:\?<(.*?)>)?(?!\?)/g,a=0,i=r.exec(e.source);i;)t.push({name:i[1]||a++,prefix:"",suffix:"",modifier:"",pattern:""}),i=r.exec(e.source);return e}function Qf(e,t,r){var a=e.map(function(i){return x0(i,t,r).source});return new RegExp("(?:".concat(a.join("|"),")"),_o(r))}function ed(e,t,r){return td(yo(e,r),t,r)}function td(e,t,r){r===void 0&&(r={});for(var a=r.strict,i=a===void 0?!1:a,n=r.start,s=n===void 0?!0:n,o=r.end,l=o===void 0?!0:o,c=r.encode,u=c===void 0?function(H){return H}:c,h=r.delimiter,d=h===void 0?"/#?":h,f=r.endsWith,p=f===void 0?"":f,g="[".concat(jr(p),"]|$"),m="[".concat(jr(d),"]"),w=s?"^":"",C=0,x=e;C<x.length;C++){var D=x[C];if(typeof D=="string")w+=jr(u(D));else{var M=jr(u(D.prefix)),O=jr(u(D.suffix));if(D.pattern)if(t&&t.push(D),M||O)if(D.modifier==="+"||D.modifier==="*"){var E=D.modifier==="*"?"?":"";w+="(?:".concat(M,"((?:").concat(D.pattern,")(?:").concat(O).concat(M,"(?:").concat(D.pattern,"))*)").concat(O,")").concat(E)}else w+="(?:".concat(M,"(").concat(D.pattern,")").concat(O,")").concat(D.modifier);else{if(D.modifier==="+"||D.modifier==="*")throw new TypeError('Can not repeat "'.concat(D.name,'" without a prefix and suffix'));w+="(".concat(D.pattern,")").concat(D.modifier)}else w+="(?:".concat(M).concat(O,")").concat(D.modifier)}}if(l)i||(w+="".concat(m,"?")),w+=r.endsWith?"(?=".concat(g,")"):"$";else{var B=e[e.length-1],R=typeof B=="string"?m.indexOf(B[B.length-1])>-1:B===void 0;i||(w+="(?:".concat(m,"(?=").concat(g,"))?")),R||(w+="(?=".concat(m,"|").concat(g,")"))}return new RegExp(w,_o(r))}function x0(e,t,r){return e instanceof RegExp?Jf(e,t):Array.isArray(e)?Qf(e,t,r):ed(e,t,r)}const ga=Symbol("NotFoundResult");class b0 extends Error{code;context;constructor(t){super(Yr(`Page not found (${t.pathname})`)),this.context=t,this.code=404}}function ha(e){return typeof e=="object"&&!!e}function zi(e){return typeof e=="function"}function xr(e){return typeof e=="string"}function $n(e=[]){return Array.isArray(e)?e:[e]}function Yr(e){return`[Vaadin.Router] ${e}`}function w0(e){return new b0(e)}function y0(e){return(Array.isArray(e)?e[0]:e)??""}function Mn(e){return y0(e?.path)}function rd(e){return Array.isArray(e)&&e.length>0?e:void 0}const Vs=new Map;Vs.set("|false",{keys:[],pattern:/(?:)/u});function Fl(e){try{return decodeURIComponent(e)}catch{return e}}function ad(e,t,r=!1,a=[],i){const n=`${e}|${String(r)}`,s=y0(t);let o=Vs.get(n);if(!o){const u=[];o={keys:u,pattern:x0(e,u,{end:r,strict:e===""})},Vs.set(n,o)}const l=o.pattern.exec(s);if(!l)return null;const c={...i};for(let u=1;u<l.length;u++){const h=o.keys[u-1],d=h.name,f=l[u];(f!==void 0||!Object.prototype.hasOwnProperty.call(c,d))&&(h.modifier==="+"||h.modifier==="*"?c[d]=f?f.split(/[/?#]/u).map(Fl):[]:c[d]=f&&Fl(f))}return{keys:[...a,...o.keys],params:c,path:l[0]}}var id=ad;function _0(e,t,r,a,i){let n,s,o=0,l=Mn(e);return l.startsWith("/")&&(r&&(l=l.substring(1)),r=!0),{next(c){if(e===c)return{done:!0,value:void 0};e.__children??=rd(e.children);const u=e.__children??[],h=!e.__children&&!e.children;if(!n&&(n=id(l,t,h,a,i),n))return{value:{keys:n.keys,params:n.params,path:n.path,route:e}};if(n&&u.length>0)for(;o<u.length;){if(!s){const f=u[o];f.parent=e;let p=n.path.length;p>0&&t.charAt(p)==="/"&&(p+=1),s=_0(f,t.substring(p),r,n.keys,n.params)}const d=s.next(c);if(!d.done)return{done:!1,value:d.value};s=null,o+=1}return{done:!0,value:void 0}}}}var nd=_0;function sd(e){if(zi(e.route.action))return e.route.action(e)}function od(e,t){let r=e;for(;r;)if(r=r.parent,r===t)return!0;return!1}function ld(e){return!!e&&typeof e=="object"&&"next"in e&&"params"in e&&"result"in e&&"route"in e}class cd extends Error{cause;code;context;constructor(t,r){let a=`Path '${t.pathname}' is not properly resolved due to an error.`;const i=Mn(t.route);i&&(a+=` Resolution had failed on route: '${i}'`),super(a),this.cause=r?.cause,this.code=r?.code,this.context=t}warn(){console.warn(this.message)}}function ud(e,t){const{path:r,route:a}=t;if(a&&!a.__synthetic){const i={path:r,route:a};if(a.parent&&e.chain)for(let n=e.chain.length-1;n>=0&&e.chain[n].route!==a.parent;n--)e.chain.pop();e.chain?.push(i)}}class hd{baseUrl;#r;errorHandler;resolveRoute;#e;constructor(t,{baseUrl:r="",context:a,errorHandler:i,resolveRoute:n=sd}={}){if(Object(t)!==t)throw new TypeError("Invalid routes");this.baseUrl=r,this.errorHandler=i,this.resolveRoute=n,Array.isArray(t)?this.#e={__children:t,__synthetic:!0,action:()=>{},path:""}:this.#e={...t,parent:void 0},this.#r={...a,hash:"",async next(){return ga},params:{},pathname:"",resolver:this,route:this.#e,search:"",chain:[]}}get root(){return this.#e}get context(){return this.#r}get __effectiveBaseUrl(){return this.baseUrl?new URL(this.baseUrl,document.baseURI||document.URL).href.replace(/[^/]*$/u,""):""}getRoutes(){return[...this.#e.__children??[]]}removeRoutes(){this.#e.__children=[]}async resolve(t){const r=this,a={...this.#r,...xr(t)?{pathname:t}:t,next:c},i=nd(this.#e,this.__normalizePathname(a.pathname)??a.pathname,!!this.baseUrl),n=this.resolveRoute;let s=null,o=null,l=a;async function c(u=!1,h=s?.value?.route,d){const f=d===null?s?.value?.route:void 0;if(s=o??i.next(f),o=null,!u&&(s.done||!od(s.value.route,h)))return o=s,ga;if(s.done)throw w0(a);l={...a,params:s.value.params,route:s.value.route,chain:l.chain?.slice()},ud(l,s.value);const p=await n(l);return p!=null&&p!==ga?(l.result=ld(p)?p.result:p,r.#r=l,l):await c(u,h,p)}try{return await c(!0,this.#e)}catch(u){const h=u instanceof b0?u:new cd(l,{code:500,cause:u});if(this.errorHandler)return l.result=this.errorHandler(h),l;throw u}}setRoutes(t){return this.#e.__children=[...$n(t)],{}}__normalizePathname(t){if(!this.baseUrl)return t;const r=this.__effectiveBaseUrl,a=t.startsWith("/")?new URL(r).origin+t:`./${t}`,i=new URL(a,r).href;if(i.startsWith(r))return i.slice(r.length)}addRoutes(t){return this.#e.__children=[...this.#e.__children??[],...$n(t)],this.getRoutes()}}var k0=hd;function E0(e,t,r,a){const i=t.name??a?.(t);if(i&&(e.has(i)?e.get(i)?.push(t):e.set(i,[t])),Array.isArray(r))for(const n of r)n.parent=t,E0(e,n,n.__children??n.children,a)}function Dl(e,t){const r=e.get(t);if(r){if(r.length>1)throw new Error(`Duplicate route with name "${t}". Try seting unique 'name' route properties.`);return r[0]}}function fd(e,t={}){if(!(e instanceof k0))throw new TypeError("An instance of Resolver is expected");const r=new Map,a=new Map;return(i,n)=>{let s=Dl(a,i);if(!s&&(a.clear(),E0(a,e.root,e.root.__children,t.cacheKeyProvider),s=Dl(a,i),!s))throw new Error(`Route "${i}" not found`);let o=s.fullPath?r.get(s.fullPath):void 0;if(!o){let u=Mn(s),h=s.parent;for(;h;){const p=Mn(h);p&&(u=`${p.replace(/\/$/u,"")}/${u.replace(/^\//u,"")}`),h=h.parent}const d=yo(u),f=Object.create(null);for(const p of d)xr(p)||(f[p.name]=!0);o={keys:f,tokens:d},r.set(u,o),s.fullPath=u}let c=v0(o.tokens,{encode:encodeURIComponent,...t})(n)||"/";if(t.stringifyQueryParams&&n){const u={};for(const[d,f]of Object.entries(n))!(d in o.keys)&&f&&(u[d]=f);const h=t.stringifyQueryParams(u);h&&(c+=h.startsWith("?")?h:`?${h}`)}return c}}var dd=fd;const pd=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,On=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function gd(){function e(){return!0}return T0(e)}function md(){try{return vd()?!0:xd()?On?!bd():!gd():!1}catch{return!1}}function vd(){return localStorage.getItem("vaadin.developmentmode.force")}function xd(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function bd(){return!!(On&&Object.keys(On).map(t=>On[t]).filter(t=>t.productionMode).length>0)}function T0(e,t){if(typeof e!="function")return;const r=pd.exec(e.toString());if(r)try{e=new Function(r[1])}catch(a){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",a)}return e(t)}window.Vaadin=window.Vaadin||{};const Ol=function(e,t){if(window.Vaadin.developmentMode)return T0(e,t)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=md());function wd(){/*! vaadin-dev-mode:start
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

  vaadin-dev-mode:end **/}const yd=function(){if(typeof Ol=="function")return Ol(wd)};function _d(e,t=window.Vaadin??={}){t.registrations??=[],t.registrations.push({is:"@vaadin/router",version:"2.0.1"})}_d();yd();const kd=e=>{const t=getComputedStyle(e).getPropertyValue("animation-name");return t&&t!=="none"},Ed=(e,t)=>{const r=()=>{e.removeEventListener("animationend",r),t()};e.addEventListener("animationend",r)};async function Td(e,t){return e.classList.add(t),await new Promise(r=>{if(kd(e)){const a=e.getBoundingClientRect(),i=`height: ${a.bottom-a.top}px; width: ${a.right-a.left}px`;e.setAttribute("style",`position: absolute; ${i}`),Ed(e,()=>{e.classList.remove(t),e.removeAttribute("style"),r()})}else e.classList.remove(t),r()})}var Rl=Td;function A0(e){if(!e||!xr(e.path))throw new Error(Yr('Expected route config to be an object with a "path" string property, or an array of such objects'));if(!zi(e.action)&&!Array.isArray(e.children)&&!zi(e.children)&&!xr(e.component)&&!xr(e.redirect))throw new Error(Yr(`Expected route config "${e.path}" to include either "component, redirect" or "action" function but none found.`));e.redirect&&["bundle","component"].forEach(t=>{t in e&&console.warn(Yr(`Route config "${String(e.path)}" has both "redirect" and "${t}" properties, and "redirect" will always override the latter. Did you mean to only use "${t}"?`))})}function Il(e){$n(e).forEach(t=>A0(t))}function Ad({next:e,...t}){return t}function Rn(e,t){const r=t.__effectiveBaseUrl;return r?new URL(e.replace(/^\//u,""),r).pathname:e}function C0(e){return e.map(t=>t.path).reduce((t,r)=>r.length?`${t.replace(/\/$/u,"")}/${r.replace(/^\//u,"")}`:t,"")}function Cd(e){return C0(e.map(t=>t.route))}function nr({chain:e=[],hash:t="",params:r={},pathname:a="",redirectFrom:i,resolver:n,search:s=""},o){const l=e.map(c=>c.route);return{baseUrl:n?.baseUrl??"",getUrl:(c={})=>n?Rn(m0(Cd(e))({...r,...c}),n):"",hash:t,params:r,pathname:a,redirectFrom:i,route:o??(Array.isArray(l)?l.at(-1):void 0)??null,routes:l,search:s,searchParams:new URLSearchParams(s)}}function Pl(e,t){const r={...e.params};return{redirect:{from:e.pathname,params:r,pathname:t}}}function Sd(e,t){if(t.location=nr(e),e.chain){const r=e.chain.map(a=>a.route).indexOf(e.route);e.chain[r].element=t}return t}function In(e,t,...r){if(typeof e=="function")return e.apply(t,r)}function Ll(e,t,...r){return a=>a&&ha(a)&&("cancel"in a||"redirect"in a)?a:In(t?.[e],t,...r)}function Fd(e,t){if(!Array.isArray(e)&&!ha(e))throw new Error(Yr(`Incorrect "children" value for the route ${String(t.path)}: expected array or object, but got ${String(e)}`));const r=$n(e);r.forEach(a=>A0(a)),t.__children=r}function Ci(e,t){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${e}`,{cancelable:e==="go",detail:t}))}function Dd(e){if(typeof e!="object")return String(e);const[t="Unknown"]=/ (.*)\]$/u.exec(String(e))??[];return t==="Object"||t==="Array"?`${t} ${JSON.stringify(e)}`:t}function Od(e){const{port:t,protocol:r}=e,n=r==="http:"&&t==="80"||r==="https:"&&t==="443"?e.hostname:e.host;return`${r}//${n}`}function Nl(e){if(e instanceof Element)return e.nodeName.toLowerCase()}function $l(e){if(e.defaultPrevented||e.button!==0||e.shiftKey||e.ctrlKey||e.altKey||e.metaKey)return;let t=e.target;const r=e instanceof MouseEvent?e.composedPath():e.path??[];for(let l=0;l<r.length;l++){const c=r[l];if("nodeName"in c&&c.nodeName.toLowerCase()==="a"){t=c;break}}for(;t&&t instanceof Node&&Nl(t)!=="a";)t=t.parentNode;if(!t||Nl(t)!=="a")return;const a=t;if(a.target&&a.target.toLowerCase()!=="_self"||a.hasAttribute("download")||a.hasAttribute("router-ignore")||a.pathname===window.location.pathname&&a.hash!==""||(a.origin||Od(a))!==window.location.origin)return;const{hash:n,pathname:s,search:o}=a;Ci("go",{hash:n,pathname:s,search:o})&&e instanceof MouseEvent&&(e.preventDefault(),e.type==="click"&&window.scrollTo(0,0))}const Rd={activate(){window.document.addEventListener("click",$l)},inactivate(){window.document.removeEventListener("click",$l)}};var Id=Rd;function Ml(e){if(e.state==="vaadin-router-ignore")return;const{hash:t,pathname:r,search:a}=window.location;Ci("go",{hash:t,pathname:r,search:a})}const Pd={activate(){window.addEventListener("popstate",Ml)},inactivate(){window.removeEventListener("popstate",Ml)}};var Ld=Pd;let Bl=[];const Nd={CLICK:Id,POPSTATE:Ld};function zl(e=[]){Bl.forEach(t=>t.inactivate()),e.forEach(t=>t.activate()),Bl=e}const $d=256;function vi(){return{cancel:!0}}const Ul={__renderId:-1,params:{},route:{__synthetic:!0,children:[],path:"",action(){}},pathname:"",async next(){return ga}};class Md extends k0{location=nr({resolver:this});ready=Promise.resolve(this.location);#r=new WeakSet;#e=new WeakSet;#u=this.#x.bind(this);#s=0;#n;__previousContext;#o;#a=null;#t=null;constructor(t,r){const i=document.head.querySelector("base")?.getAttribute("href");super([],{baseUrl:i?new URL(i,document.URL).href.replace(/[^/]*$/u,""):void 0,...r,resolveRoute:async n=>await this.#b(n)}),zl(Object.values(Nd)),this.setOutlet(t),this.subscribe()}async#b(t){const{route:r}=t;if(zi(r.children)){let i=await r.children(Ad(t));zi(r.children)||({children:i}=r),Fd(i,r)}const a={component:i=>{const n=document.createElement(i);return this.#e.add(n),n},prevent:vi,redirect:i=>Pl(t,i)};return await Promise.resolve().then(async()=>{if(this.#i(t))return await In(r.action,r,t,a)}).then(i=>{if(i!=null&&(typeof i=="object"||typeof i=="symbol")&&(i instanceof HTMLElement||i===ga||ha(i)&&"redirect"in i))return i;if(xr(r.redirect))return a.redirect(r.redirect)}).then(i=>{if(i!=null)return i;if(xr(r.component))return a.component(r.component)})}setOutlet(t){t&&this.#m(t),this.#n=t}getOutlet(){return this.#n}async setRoutes(t,r=!1){return this.__previousContext=void 0,this.#o=void 0,Il(t),super.setRoutes(t),r||this.#x(),await this.ready}addRoutes(t){return Il(t),super.addRoutes(t)}async render(t,r=!1){this.#s+=1;const a=this.#s,i={...Ul,...xr(t)?{hash:"",search:"",pathname:t}:t,__renderId:a};return this.ready=this.#w(i,r),await this.ready}async#w(t,r){const{__renderId:a}=t;try{const i=await this.resolve(t),n=await this.#l(i);if(!this.#i(n))return this.location;const s=this.__previousContext;if(n===s)return this.#c(s,!0),this.location;if(this.location=nr(n),r&&this.#c(n,a===1),Ci("location-changed",{router:this,location:this.location}),n.__skipAttach)return this.#v(n,s),this.__previousContext=n,this.location;this.#k(n,s);const o=this.#S(n);if(this.#C(n),this.#A(n,s),await o,this.#i(n))return this.#E(),this.__previousContext=n,this.location}catch(i){if(a===this.#s){r&&this.#c(this.context);for(const n of this.#n?.children??[])n.remove();throw this.location=nr(Object.assign(t,{resolver:this})),Ci("error",{router:this,error:i,...t}),i}}return this.location}async#l(t,r=t){const a=await this.#h(r),n=a!==r?a:t,o=Rn(C0(a.chain??[]),this)===a.pathname,l=async(u,h=u.route,d)=>{const f=await u.next(!1,h,d);return f===null||f===ga?o?u:h.parent!=null?await l(u,h.parent,f):f:f},c=await l(a);if(c==null||c===ga)throw w0(n);return c!==a?await this.#l(n,c):await this.#y(a)}async#h(t){const{result:r}=t;if(r instanceof HTMLElement)return Sd(t,r),t;if(r&&"redirect"in r){const a=await this.#g(r.redirect,t.__redirectCount,t.__renderId);return await this.#h(a)}throw r instanceof Error?r:new Error(Yr(`Invalid route resolution result for path "${t.pathname}". Expected redirect object or HTML element, but got: "${Dd(r)}". Double check the action return value for the route.`))}async#y(t){return await this.#_(t).then(async r=>r===this.__previousContext||r===t?r:await this.#l(r))}async#_(t){const r=this.__previousContext??{},a=r.chain??[],i=t.chain??[];let n=Promise.resolve(void 0);const s=o=>Pl(t,o);if(t.__divergedChainIndex=0,t.__skipAttach=!1,a.length){for(let o=0;o<Math.min(a.length,i.length)&&!(a[o].route!==i[o].route||a[o].path!==i[o].path&&a[o].element!==i[o].element||!this.#p(a[o].element,i[o].element));t.__divergedChainIndex++,o++);if(t.__skipAttach=i.length===a.length&&t.__divergedChainIndex===i.length&&this.#p(t.result,r.result),t.__skipAttach){for(let o=i.length-1;o>=0;o--)n=this.#f(n,t,{prevent:vi},a[o]);for(let o=0;o<i.length;o++)n=this.#d(n,t,{prevent:vi,redirect:s},i[o]),a[o].element.location=nr(t,a[o].route)}else for(let o=a.length-1;o>=t.__divergedChainIndex;o--)n=this.#f(n,t,{prevent:vi},a[o])}if(!t.__skipAttach)for(let o=0;o<i.length;o++)o<t.__divergedChainIndex?o<a.length&&a[o].element&&(a[o].element.location=nr(t,a[o].route)):(n=this.#d(n,t,{prevent:vi,redirect:s},i[o]),i[o].element&&(i[o].element.location=nr(t,i[o].route)));return await n.then(async o=>{if(o&&ha(o)){if("cancel"in o&&this.__previousContext)return this.__previousContext.__renderId=t.__renderId,this.__previousContext;if("redirect"in o)return await this.#g(o.redirect,t.__redirectCount,t.__renderId)}return t})}async#f(t,r,a,i){const n=nr(r);let s=await t;if(this.#i(r)&&(s=Ll("onBeforeLeave",i.element,n,a,this)(s)),!(ha(s)&&"redirect"in s))return s}async#d(t,r,a,i){const n=nr(r,i.route),s=await t;if(this.#i(r))return Ll("onBeforeEnter",i.element,n,a,this)(s)}#p(t,r){return t instanceof Element&&r instanceof Element?this.#e.has(t)&&this.#e.has(r)?t.localName===r.localName:t===r:!1}#i(t){return t.__renderId===this.#s}async#g(t,r=0,a=0){if(r>$d)throw new Error(Yr(`Too many redirects when rendering ${t.from}`));return await this.resolve({...Ul,pathname:this.urlForPath(t.pathname,t.params),redirectFrom:t.from,__redirectCount:r+1,__renderId:a})}#m(t=this.#n){if(!(t instanceof Element||t instanceof DocumentFragment))throw new TypeError(Yr(`Expected router outlet to be a valid DOM Element | DocumentFragment (but got ${t})`))}#c({pathname:t,search:r="",hash:a=""},i){if(window.location.pathname!==t||window.location.search!==r||window.location.hash!==a){const n=i?"replaceState":"pushState";window.history[n](null,document.title,t+r+a),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}#v(t,r){let a=this.#n;for(let i=0;i<(t.__divergedChainIndex??0);i++){const n=r?.chain?.[i].element;if(n)if(n.parentNode===a)t.chain[i].element=n,a=n;else break}return a}#k(t,r){this.#m(),this.#T();const a=this.#v(t,r);this.#a=[],this.#t=Array.from(a?.children??[]).filter(n=>this.#r.has(n)&&n!==t.result);let i=a;for(let n=t.__divergedChainIndex??0;n<(t.chain?.length??0);n++){const s=t.chain[n].element;s&&(i?.appendChild(s),this.#r.add(s),i===a&&this.#a.push(s),i=s)}}#E(){if(this.#t)for(const t of this.#t)t.remove();this.#t=null,this.#a=null}#T(){if(this.#t&&this.#a){for(const t of this.#a)t.remove();this.#t=null,this.#a=null}}#A(t,r){if(!(!r?.chain||t.__divergedChainIndex==null))for(let a=r.chain.length-1;a>=t.__divergedChainIndex&&this.#i(t);a--){const i=r.chain[a].element;if(i)try{const n=nr(t);In(i.onAfterLeave,i,n,{},this)}finally{if(this.#t?.includes(i))for(const n of i.children)n.remove()}}}#C(t){if(!(!t.chain||t.__divergedChainIndex==null))for(let r=t.__divergedChainIndex;r<t.chain.length&&this.#i(t);r++){const a=t.chain[r].element;if(a){const i=nr(t,t.chain[r].route);In(a.onAfterEnter,a,i,{},this)}}}async#S(t){const r=this.#t?.[0],a=this.#a?.[0],i=[],{chain:n=[]}=t;let s;for(let o=n.length-1;o>=0;o--)if(n[o].route.animate){s=n[o].route.animate;break}if(r&&a&&s){const o=ha(s)&&s.leave?s.leave:"leaving",l=ha(s)&&s.enter?s.enter:"entering";i.push(Rl(r,o)),i.push(Rl(a,l))}return await Promise.all(i),t}subscribe(){window.addEventListener("vaadin-router-go",this.#u)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.#u)}#x(t){const{pathname:r,search:a,hash:i}=t instanceof CustomEvent?t.detail:window.location;xr(this.__normalizePathname(r))&&(t?.preventDefault&&t.preventDefault(),this.render({pathname:r,search:a,hash:i},!0))}static setTriggers(...t){zl(t)}urlForName(t,r){return this.#o||(this.#o=dd(this,{cacheKeyProvider(a){return"component"in a&&typeof a.component=="string"?a.component:void 0}})),Rn(this.#o(t,r??void 0),this)}urlForPath(t,r){return Rn(m0(t)(r??void 0),this)}static go(t){const{pathname:r,search:a,hash:i}=xr(t)?new URL(t,"http://a"):t;return Ci("go",{pathname:r,search:a,hash:i})}}const Pt=ye`
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
`;var Bd=ye`
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
`,ko=(e="value")=>(t,r)=>{const a=t.constructor,i=a.prototype.attributeChangedCallback;a.prototype.attributeChangedCallback=function(n,s,o){var l;const c=a.getPropertyOptions(e),u=typeof c.attribute=="string"?c.attribute:e;if(n===u){const h=c.converter||Ga,f=(typeof h=="function"?h:(l=h?.fromAttribute)!=null?l:Ga.fromAttribute)(o,c.type);this[e]!==f&&(this[r]=f)}i.call(this,n,s,o)}},tn=ye`
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
 */const Eo=mo(class extends vo{constructor(e){if(super(e),e.type!==Hr.PROPERTY&&e.type!==Hr.ATTRIBUTE&&e.type!==Hr.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Cf(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===Zt||t===Ge)return t;const r=e.element,a=e.name;if(e.type===Hr.PROPERTY){if(t===r[a])return Zt}else if(e.type===Hr.BOOLEAN_ATTRIBUTE){if(!!t===r.hasAttribute(a))return Zt}else if(e.type===Hr.ATTRIBUTE&&r.getAttribute(a)===t+"")return Zt;return Ff(e),t}});var Pe=class extends $e{constructor(){super(...arguments),this.formControlController=new Ja(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new yr(this,"help-text","label"),this.hasFocus=!1,this.title="",this.name="",this.value="",this.size="medium",this.filled=!1,this.label="",this.helpText="",this.placeholder="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.form="",this.required=!1,this.spellcheck=!0,this.defaultValue=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.setTextareaHeight()),this.updateComplete.then(()=>{this.setTextareaHeight(),this.resizeObserver.observe(this.input)})}firstUpdated(){this.formControlController.updateValidity()}disconnectedCallback(){var e;super.disconnectedCallback(),this.input&&((e=this.resizeObserver)==null||e.unobserve(this.input))}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.setTextareaHeight(),this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}setTextareaHeight(){this.resize==="auto"?(this.sizeAdjuster.style.height=`${this.input.clientHeight}px`,this.input.style.height="auto",this.input.style.height=`${this.input.scrollHeight}px`):this.input.style.height=""}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleRowsChange(){this.setTextareaHeight()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity(),this.setTextareaHeight()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(e){if(e){typeof e.top=="number"&&(this.input.scrollTop=e.top),typeof e.left=="number"&&(this.input.scrollLeft=e.left);return}return{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(e,t,r="none"){this.input.setSelectionRange(e,t,r)}setRangeText(e,t,r,a="preserve"){const i=t??this.input.selectionStart,n=r??this.input.selectionEnd;this.input.setRangeText(e,i,n,a),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaHeight())}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),r=this.label?!0:!!e,a=this.helpText?!0:!!t;return K`
      <div
        part="form-control"
        class=${Le({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":r,"form-control--has-help-text":a})}
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
            class=${Le({textarea:!0,"textarea--small":this.size==="small","textarea--medium":this.size==="medium","textarea--large":this.size==="large","textarea--standard":!this.filled,"textarea--filled":this.filled,"textarea--disabled":this.disabled,"textarea--focused":this.hasFocus,"textarea--empty":!this.value,"textarea--resize-none":this.resize==="none","textarea--resize-vertical":this.resize==="vertical","textarea--resize-auto":this.resize==="auto"})}
          >
            <textarea
              part="textarea"
              id="input"
              class="textarea__control"
              title=${this.title}
              name=${pe(this.name)}
              .value=${Eo(this.value)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${pe(this.placeholder)}
              rows=${pe(this.rows)}
              minlength=${pe(this.minlength)}
              maxlength=${pe(this.maxlength)}
              autocapitalize=${pe(this.autocapitalize)}
              autocorrect=${pe(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${pe(this.spellcheck)}
              enterkeyhint=${pe(this.enterkeyhint)}
              inputmode=${pe(this.inputmode)}
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
    `}};Pe.styles=[Ve,tn,Bd];y([me(".textarea__control")],Pe.prototype,"input",2);y([me(".textarea__size-adjuster")],Pe.prototype,"sizeAdjuster",2);y([fe()],Pe.prototype,"hasFocus",2);y([I()],Pe.prototype,"title",2);y([I()],Pe.prototype,"name",2);y([I()],Pe.prototype,"value",2);y([I({reflect:!0})],Pe.prototype,"size",2);y([I({type:Boolean,reflect:!0})],Pe.prototype,"filled",2);y([I()],Pe.prototype,"label",2);y([I({attribute:"help-text"})],Pe.prototype,"helpText",2);y([I()],Pe.prototype,"placeholder",2);y([I({type:Number})],Pe.prototype,"rows",2);y([I()],Pe.prototype,"resize",2);y([I({type:Boolean,reflect:!0})],Pe.prototype,"disabled",2);y([I({type:Boolean,reflect:!0})],Pe.prototype,"readonly",2);y([I({reflect:!0})],Pe.prototype,"form",2);y([I({type:Boolean,reflect:!0})],Pe.prototype,"required",2);y([I({type:Number})],Pe.prototype,"minlength",2);y([I({type:Number})],Pe.prototype,"maxlength",2);y([I()],Pe.prototype,"autocapitalize",2);y([I()],Pe.prototype,"autocorrect",2);y([I()],Pe.prototype,"autocomplete",2);y([I({type:Boolean})],Pe.prototype,"autofocus",2);y([I()],Pe.prototype,"enterkeyhint",2);y([I({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],Pe.prototype,"spellcheck",2);y([I()],Pe.prototype,"inputmode",2);y([ko()],Pe.prototype,"defaultValue",2);y([Re("disabled",{waitUntilFirstUpdate:!0})],Pe.prototype,"handleDisabledChange",1);y([Re("rows",{waitUntilFirstUpdate:!0})],Pe.prototype,"handleRowsChange",1);y([Re("value",{waitUntilFirstUpdate:!0})],Pe.prototype,"handleValueChange",1);Pe.define("sl-textarea");var zd=ye`
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
`,_e=class extends $e{constructor(){super(...arguments),this.formControlController=new Ja(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new yr(this,"help-text","label"),this.localize=new er(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var e;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,((e=this.input)==null?void 0:e.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(e){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=e,this.value=this.__dateInput.value}get valueAsNumber(){var e;return this.__numberInput.value=this.value,((e=this.input)==null?void 0:e.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(e){this.__numberInput.valueAsNumber=e,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(e){e.preventDefault(),this.value!==""&&(this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")),this.input.focus()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleKeyDown(e){const t=e.metaKey||e.ctrlKey||e.shiftKey||e.altKey;e.key==="Enter"&&!t&&setTimeout(()=>{!e.defaultPrevented&&!e.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(e,t,r="none"){this.input.setSelectionRange(e,t,r)}setRangeText(e,t,r,a="preserve"){const i=t??this.input.selectionStart,n=r??this.input.selectionEnd;this.input.setRangeText(e,i,n,a),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),r=this.label?!0:!!e,a=this.helpText?!0:!!t,n=this.clearable&&!this.disabled&&!this.readonly&&(typeof this.value=="number"||this.value.length>0);return K`
      <div
        part="form-control"
        class=${Le({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":r,"form-control--has-help-text":a})}
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
            class=${Le({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
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
              name=${pe(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${pe(this.placeholder)}
              minlength=${pe(this.minlength)}
              maxlength=${pe(this.maxlength)}
              min=${pe(this.min)}
              max=${pe(this.max)}
              step=${pe(this.step)}
              .value=${Eo(this.value)}
              autocapitalize=${pe(this.autocapitalize)}
              autocomplete=${pe(this.autocomplete)}
              autocorrect=${pe(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${pe(this.pattern)}
              enterkeyhint=${pe(this.enterkeyhint)}
              inputmode=${pe(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${n?K`
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
            ${this.passwordToggle&&!this.disabled?K`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?K`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        `:K`
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
    `}};_e.styles=[Ve,tn,zd];_e.dependencies={"sl-icon":It};y([me(".input__control")],_e.prototype,"input",2);y([fe()],_e.prototype,"hasFocus",2);y([I()],_e.prototype,"title",2);y([I({reflect:!0})],_e.prototype,"type",2);y([I()],_e.prototype,"name",2);y([I()],_e.prototype,"value",2);y([ko()],_e.prototype,"defaultValue",2);y([I({reflect:!0})],_e.prototype,"size",2);y([I({type:Boolean,reflect:!0})],_e.prototype,"filled",2);y([I({type:Boolean,reflect:!0})],_e.prototype,"pill",2);y([I()],_e.prototype,"label",2);y([I({attribute:"help-text"})],_e.prototype,"helpText",2);y([I({type:Boolean})],_e.prototype,"clearable",2);y([I({type:Boolean,reflect:!0})],_e.prototype,"disabled",2);y([I()],_e.prototype,"placeholder",2);y([I({type:Boolean,reflect:!0})],_e.prototype,"readonly",2);y([I({attribute:"password-toggle",type:Boolean})],_e.prototype,"passwordToggle",2);y([I({attribute:"password-visible",type:Boolean})],_e.prototype,"passwordVisible",2);y([I({attribute:"no-spin-buttons",type:Boolean})],_e.prototype,"noSpinButtons",2);y([I({reflect:!0})],_e.prototype,"form",2);y([I({type:Boolean,reflect:!0})],_e.prototype,"required",2);y([I()],_e.prototype,"pattern",2);y([I({type:Number})],_e.prototype,"minlength",2);y([I({type:Number})],_e.prototype,"maxlength",2);y([I()],_e.prototype,"min",2);y([I()],_e.prototype,"max",2);y([I()],_e.prototype,"step",2);y([I()],_e.prototype,"autocapitalize",2);y([I()],_e.prototype,"autocorrect",2);y([I()],_e.prototype,"autocomplete",2);y([I({type:Boolean})],_e.prototype,"autofocus",2);y([I()],_e.prototype,"enterkeyhint",2);y([I({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],_e.prototype,"spellcheck",2);y([I()],_e.prototype,"inputmode",2);y([Re("disabled",{waitUntilFirstUpdate:!0})],_e.prototype,"handleDisabledChange",1);y([Re("step",{waitUntilFirstUpdate:!0})],_e.prototype,"handleStepChange",1);y([Re("value",{waitUntilFirstUpdate:!0})],_e.prototype,"handleValueChange",1);_e.define("sl-input");wo.define("sl-spinner");var Ud=Object.defineProperty,Vd=Object.getOwnPropertyDescriptor,rn=(e,t,r,a)=>{for(var i=a>1?void 0:a?Vd(t,r):t,n=e.length-1,s;n>=0;n--)(s=e[n])&&(i=(a?s(t,r,i):s(i))||i);return a&&i&&Ud(t,r,i),i};let ba=class extends tt{constructor(){super(...arguments),this.publishedQuestions=[],this.isSubmitting=!1}connectedCallback(){super.connectedCallback(),this.dispatchEvent(new CustomEvent("change-title",{detail:{title:"Pytania do Księdza"},bubbles:!0,composed:!0}))}async firstUpdated(){await this.fetchQuestions()}async fetchQuestions(){try{const e=await fetch("http://localhost:3000/api/questions");e.ok&&(this.publishedQuestions=await e.json())}catch(e){console.error(e)}}async submitQuestion(){const e=this.questionInput.value,t=this.authorInput.value,r=t&&t.trim()!==""?t.trim():null;if(!e||e.trim()===""){alert("Proszę wpisać treść pytania.");return}this.isSubmitting=!0;try{(await fetch("http://localhost:3000/api/questions",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({content:e,author:r})})).ok?(alert("Dziękujemy! Twoje pytanie zostało wysłane. Pojawi się tutaj, gdy ksiądz na nie odpowie."),this.questionInput.value="",this.authorInput.value=""):alert("Wystąpił błąd podczas wysyłania pytania.")}catch{alert("Brak połączenia z serwerem.")}finally{this.isSubmitting=!1}}render(){return K`
      <div class="qa-wrapper">
        <div class="ask-section">
          <p>Masz pytanie dotyczące życia parafii? Zadaj je tutaj!</p>
          <sl-input id="author-input" placeholder="Twoje imię (zostaw puste, aby zapytać anonimowo)"></sl-input>

          <sl-textarea id="new-question" placeholder="Napisz swoje pytanie..." rows="4" resize="auto"></sl-textarea>

          <button class="custom-btn" @click=${this.submitQuestion} ?disabled=${this.isSubmitting}>
            ${this.isSubmitting?K`Wysyłanie... <sl-spinner style="--indicator-color: white;"></sl-spinner>`:K`Wyślij pytanie <sl-icon name="send-fill-sand"></sl-icon>`}
          </button>
        </div>

        ${this.publishedQuestions.length===0?K`
          <div class="qa-item" style="text-align: center; color: var(--color-wood-medium);">
            Brak opublikowanych odpowiedzi. Bądź pierwszy i zadaj pytanie!
          </div>
        `:""}

        ${this.publishedQuestions.map(e=>K`
          <div class="qa-item">
            <div class="question">
              <sl-icon name="person-circle"></sl-icon>
              <div>
                <strong>${e.author?e.author:"Anonimowy"}:</strong> ${e.content}
              </div>
            </div>
            <div class="answer">
              <strong style="display:block; margin-bottom: 2px;">Odpowiedź duszpasterza:</strong>
              <div class="answer-text">${e.answer?e.answer.trim():K`<span style="color: red;">Błąd: Brak tekstu odpowiedzi w bazie danych!</span>`}</div>
            </div>
            <div class="date">${new Date(e.createdAt).toLocaleDateString("pl-PL")}</div>
          </div>
        `)}
      </div>
    `}};ba.styles=[Pt,ye`
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
    `];rn([fe()],ba.prototype,"publishedQuestions",2);rn([fe()],ba.prototype,"isSubmitting",2);rn([me("#new-question")],ba.prototype,"questionInput",2);rn([me("#author-input")],ba.prototype,"authorInput",2);ba=rn([Rt("app-qa")],ba);var Hd=Object.defineProperty,Wd=Object.getOwnPropertyDescriptor,S0=(e,t,r,a)=>{for(var i=a>1?void 0:a?Wd(t,r):t,n=e.length-1,s;n>=0;n--)(s=e[n])&&(i=(a?s(t,r,i):s(i))||i);return a&&i&&Hd(t,r,i),i};let Bn=class extends tt{constructor(){super(),this.deferredPrompt=null,window.addEventListener("beforeinstallprompt",e=>{e.preventDefault(),this.deferredPrompt=e}),window.addEventListener("appinstalled",()=>{this.deferredPrompt=null})}connectedCallback(){super.connectedCallback();const e=new CustomEvent("change-title",{detail:{title:"Strona Główna"},bubbles:!0,composed:!0});this.dispatchEvent(e)}async installApp(){if(!this.deferredPrompt)return;this.deferredPrompt.prompt();const{outcome:e}=await this.deferredPrompt.userChoice;e==="accepted"&&(this.deferredPrompt=null)}handleNavigation(e){const r="/mParafia/"+e.substring(1);window.history.pushState({},"",r),window.dispatchEvent(new PopStateEvent("popstate"))}render(){return K`
      <main>

        <div class="logo-container">
          <img src="./icons/icon_512.png" class="logo-img" alt="Ikona mParafia">
        </div>

<div class="grid-container">

          <sl-button class="tile-button" @click="${()=>this.handleNavigation("/ogloszenia")}">
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

          <sl-button class="tile-button" @click="${()=>this.handleNavigation("/dokumenty")}">
            <sl-icon name="file-earmark-text-fill"></sl-icon>
            <span>Dokumenty</span>
          </sl-button>

          <sl-button class="tile-button" @click="${()=>this.handleNavigation("/qa")}">
            <sl-icon name="chat-quote-fill"></sl-icon>
            <span>Pytania (Q&A)</span>
          </sl-button>

        </div>
        </div>

        ${this.deferredPrompt?K`
          <div class="install-section">
            <sl-button variant="primary" pill class="install-btn" @click="${this.installApp}">
              <sl-icon slot="prefix" name="download"></sl-icon>
              Zainstaluj mParafię
            </sl-button>
          </div>
        `:null}
      </main>
    `}};Bn.styles=[Pt,ye`
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
    `];S0([fe()],Bn.prototype,"deferredPrompt",2);Bn=S0([Rt("app-home")],Bn);var jd=ye`
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
`,Et=class extends $e{constructor(){super(...arguments),this.formControlController=new Ja(this,{value:e=>e.checked?e.value||"on":void 0,defaultValue:e=>e.defaultChecked,setValue:(e,t)=>e.checked=t}),this.hasSlotController=new yr(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleClick(){this.checked=!this.checked,this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleKeyDown(e){e.key==="ArrowLeft"&&(e.preventDefault(),this.checked=!1,this.emit("sl-change"),this.emit("sl-input")),e.key==="ArrowRight"&&(e.preventDefault(),this.checked=!0,this.emit("sl-change"),this.emit("sl-input"))}handleCheckedChange(){this.input.checked=this.checked,this.formControlController.updateValidity()}handleDisabledChange(){this.formControlController.setValidity(!0)}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("help-text"),t=this.helpText?!0:!!e;return K`
      <div
        class=${Le({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-help-text":t})}
      >
        <label
          part="base"
          class=${Le({switch:!0,"switch--checked":this.checked,"switch--disabled":this.disabled,"switch--focused":this.hasFocus,"switch--small":this.size==="small","switch--medium":this.size==="medium","switch--large":this.size==="large"})}
        >
          <input
            class="switch__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${pe(this.value)}
            .checked=${Eo(this.checked)}
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
    `}};Et.styles=[Ve,tn,jd];y([me('input[type="checkbox"]')],Et.prototype,"input",2);y([fe()],Et.prototype,"hasFocus",2);y([I()],Et.prototype,"title",2);y([I()],Et.prototype,"name",2);y([I()],Et.prototype,"value",2);y([I({reflect:!0})],Et.prototype,"size",2);y([I({type:Boolean,reflect:!0})],Et.prototype,"disabled",2);y([I({type:Boolean,reflect:!0})],Et.prototype,"checked",2);y([ko("checked")],Et.prototype,"defaultChecked",2);y([I({reflect:!0})],Et.prototype,"form",2);y([I({type:Boolean,reflect:!0})],Et.prototype,"required",2);y([I({attribute:"help-text"})],Et.prototype,"helpText",2);y([Re("checked",{waitUntilFirstUpdate:!0})],Et.prototype,"handleCheckedChange",1);y([Re("disabled",{waitUntilFirstUpdate:!0})],Et.prototype,"handleDisabledChange",1);Et.define("sl-switch");var Gd=ye`
  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`,Qa=class extends $e{constructor(){super(...arguments),this.disableRole=!1,this.label=""}handleFocus(e){const t=xi(e.target);t?.toggleAttribute("data-sl-button-group__button--focus",!0)}handleBlur(e){const t=xi(e.target);t?.toggleAttribute("data-sl-button-group__button--focus",!1)}handleMouseOver(e){const t=xi(e.target);t?.toggleAttribute("data-sl-button-group__button--hover",!0)}handleMouseOut(e){const t=xi(e.target);t?.toggleAttribute("data-sl-button-group__button--hover",!1)}handleSlotChange(){const e=[...this.defaultSlot.assignedElements({flatten:!0})];e.forEach(t=>{const r=e.indexOf(t),a=xi(t);a&&(a.toggleAttribute("data-sl-button-group__button",!0),a.toggleAttribute("data-sl-button-group__button--first",r===0),a.toggleAttribute("data-sl-button-group__button--inner",r>0&&r<e.length-1),a.toggleAttribute("data-sl-button-group__button--last",r===e.length-1),a.toggleAttribute("data-sl-button-group__button--radio",a.tagName.toLowerCase()==="sl-radio-button"))})}render(){return K`
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
    `}};Qa.styles=[Ve,Gd];y([me("slot")],Qa.prototype,"defaultSlot",2);y([fe()],Qa.prototype,"disableRole",2);y([I()],Qa.prototype,"label",2);function xi(e){var t;const r="sl-button, sl-radio-button";return(t=e.closest(r))!=null?t:e.querySelector(r)}Qa.define("sl-button-group");var Xd=ye`
  :host {
    display: block;
  }

  .form-control {
    position: relative;
    border: none;
    padding: 0;
    margin: 0;
  }

  .form-control__label {
    padding: 0;
  }

  .radio-group--required .radio-group__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`,gt=class extends $e{constructor(){super(...arguments),this.formControlController=new Ja(this),this.hasSlotController=new yr(this,"help-text","label"),this.customValidityMessage="",this.hasButtonGroup=!1,this.errorMessage="",this.defaultValue="",this.label="",this.helpText="",this.name="option",this.value="",this.size="medium",this.form="",this.required=!1}get validity(){const e=this.required&&!this.value;return this.customValidityMessage!==""?Yf:e?Kf:as}get validationMessage(){const e=this.required&&!this.value;return this.customValidityMessage!==""?this.customValidityMessage:e?this.validationInput.validationMessage:""}connectedCallback(){super.connectedCallback(),this.defaultValue=this.value}firstUpdated(){this.formControlController.updateValidity()}getAllRadios(){return[...this.querySelectorAll("sl-radio, sl-radio-button")]}handleRadioClick(e){const t=e.target.closest("sl-radio, sl-radio-button"),r=this.getAllRadios(),a=this.value;!t||t.disabled||(this.value=t.value,r.forEach(i=>i.checked=i===t),this.value!==a&&(this.emit("sl-change"),this.emit("sl-input")))}handleKeyDown(e){var t;if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(e.key))return;const r=this.getAllRadios().filter(o=>!o.disabled),a=(t=r.find(o=>o.checked))!=null?t:r[0],i=e.key===" "?0:["ArrowUp","ArrowLeft"].includes(e.key)?-1:1,n=this.value;let s=r.indexOf(a)+i;s<0&&(s=r.length-1),s>r.length-1&&(s=0),this.getAllRadios().forEach(o=>{o.checked=!1,this.hasButtonGroup||o.setAttribute("tabindex","-1")}),this.value=r[s].value,r[s].checked=!0,this.hasButtonGroup?r[s].shadowRoot.querySelector("button").focus():(r[s].setAttribute("tabindex","0"),r[s].focus()),this.value!==n&&(this.emit("sl-change"),this.emit("sl-input")),e.preventDefault()}handleLabelClick(){this.focus()}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}async syncRadioElements(){var e,t;const r=this.getAllRadios();if(await Promise.all(r.map(async a=>{await a.updateComplete,a.checked=a.value===this.value,a.size=this.size})),this.hasButtonGroup=r.some(a=>a.tagName.toLowerCase()==="sl-radio-button"),r.length>0&&!r.some(a=>a.checked))if(this.hasButtonGroup){const a=(e=r[0].shadowRoot)==null?void 0:e.querySelector("button");a&&a.setAttribute("tabindex","0")}else r[0].setAttribute("tabindex","0");if(this.hasButtonGroup){const a=(t=this.shadowRoot)==null?void 0:t.querySelector("sl-button-group");a&&(a.disableRole=!0)}}syncRadios(){if(customElements.get("sl-radio")&&customElements.get("sl-radio-button")){this.syncRadioElements();return}customElements.get("sl-radio")?this.syncRadioElements():customElements.whenDefined("sl-radio").then(()=>this.syncRadios()),customElements.get("sl-radio-button")?this.syncRadioElements():customElements.whenDefined("sl-radio-button").then(()=>this.syncRadios())}updateCheckedRadio(){this.getAllRadios().forEach(t=>t.checked=t.value===this.value),this.formControlController.setValidity(this.validity.valid)}handleSizeChange(){this.syncRadios()}handleValueChange(){this.hasUpdated&&this.updateCheckedRadio()}checkValidity(){const e=this.required&&!this.value,t=this.customValidityMessage!=="";return e||t?(this.formControlController.emitInvalidEvent(),!1):!0}getForm(){return this.formControlController.getForm()}reportValidity(){const e=this.validity.valid;return this.errorMessage=this.customValidityMessage||e?"":this.validationInput.validationMessage,this.formControlController.setValidity(e),this.validationInput.hidden=!0,clearTimeout(this.validationTimeout),e||(this.validationInput.hidden=!1,this.validationInput.reportValidity(),this.validationTimeout=setTimeout(()=>this.validationInput.hidden=!0,1e4)),e}setCustomValidity(e=""){this.customValidityMessage=e,this.errorMessage=e,this.validationInput.setCustomValidity(e),this.formControlController.updateValidity()}focus(e){const t=this.getAllRadios(),r=t.find(n=>n.checked),a=t.find(n=>!n.disabled),i=r||a;i&&i.focus(e)}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),r=this.label?!0:!!e,a=this.helpText?!0:!!t,i=K`
      <slot @slotchange=${this.syncRadios} @click=${this.handleRadioClick} @keydown=${this.handleKeyDown}></slot>
    `;return K`
      <fieldset
        part="form-control"
        class=${Le({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--radio-group":!0,"form-control--has-label":r,"form-control--has-help-text":a})}
        role="radiogroup"
        aria-labelledby="label"
        aria-describedby="help-text"
        aria-errormessage="error-message"
      >
        <label
          part="form-control-label"
          id="label"
          class="form-control__label"
          aria-hidden=${r?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div class="visually-hidden">
            <div id="error-message" aria-live="assertive">${this.errorMessage}</div>
            <label class="radio-group__validation">
              <input
                type="text"
                class="radio-group__validation-input"
                ?required=${this.required}
                tabindex="-1"
                hidden
                @invalid=${this.handleInvalid}
              />
            </label>
          </div>

          ${this.hasButtonGroup?K`
                <sl-button-group part="button-group" exportparts="base:button-group__base" role="presentation">
                  ${i}
                </sl-button-group>
              `:i}
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${a?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </fieldset>
    `}};gt.styles=[Ve,tn,Xd];gt.dependencies={"sl-button-group":Qa};y([me("slot:not([name])")],gt.prototype,"defaultSlot",2);y([me(".radio-group__validation-input")],gt.prototype,"validationInput",2);y([fe()],gt.prototype,"hasButtonGroup",2);y([fe()],gt.prototype,"errorMessage",2);y([fe()],gt.prototype,"defaultValue",2);y([I()],gt.prototype,"label",2);y([I({attribute:"help-text"})],gt.prototype,"helpText",2);y([I()],gt.prototype,"name",2);y([I({reflect:!0})],gt.prototype,"value",2);y([I({reflect:!0})],gt.prototype,"size",2);y([I({reflect:!0})],gt.prototype,"form",2);y([I({type:Boolean,reflect:!0})],gt.prototype,"required",2);y([Re("size",{waitUntilFirstUpdate:!0})],gt.prototype,"handleSizeChange",1);y([Re("value")],gt.prototype,"handleValueChange",1);gt.define("sl-radio-group");var Kd=ye`
  ${g0}

  .button__prefix,
  .button__suffix,
  .button__label {
    display: inline-flex;
    position: relative;
    align-items: center;
  }

  /* We use a hidden input so constraint validation errors work, since they don't appear to show when used with buttons.
    We can't actually hide it, though, otherwise the messages will be suppressed by the browser. */
  .hidden-input {
    all: unset;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    outline: dotted 1px red;
    opacity: 0;
    z-index: -1;
  }
`,fr=class extends $e{constructor(){super(...arguments),this.hasSlotController=new yr(this,"[default]","prefix","suffix"),this.hasFocus=!1,this.checked=!1,this.disabled=!1,this.size="medium",this.pill=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","presentation")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleClick(e){if(this.disabled){e.preventDefault(),e.stopPropagation();return}this.checked=!0}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}focus(e){this.input.focus(e)}blur(){this.input.blur()}render(){return Ai`
      <div part="base" role="presentation">
        <button
          part="${`button${this.checked?" button--checked":""}`}"
          role="radio"
          aria-checked="${this.checked}"
          class=${Le({button:!0,"button--default":!0,"button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--checked":this.checked,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--outline":!0,"button--pill":this.pill,"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
          aria-disabled=${this.disabled}
          type="button"
          value=${pe(this.value)}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @click=${this.handleClick}
        >
          <slot name="prefix" part="prefix" class="button__prefix"></slot>
          <slot part="label" class="button__label"></slot>
          <slot name="suffix" part="suffix" class="button__suffix"></slot>
        </button>
      </div>
    `}};fr.styles=[Ve,Kd];y([me(".button")],fr.prototype,"input",2);y([me(".hidden-input")],fr.prototype,"hiddenInput",2);y([fe()],fr.prototype,"hasFocus",2);y([I({type:Boolean,reflect:!0})],fr.prototype,"checked",2);y([I()],fr.prototype,"value",2);y([I({type:Boolean,reflect:!0})],fr.prototype,"disabled",2);y([I({reflect:!0})],fr.prototype,"size",2);y([I({type:Boolean,reflect:!0})],fr.prototype,"pill",2);y([Re("disabled",{waitUntilFirstUpdate:!0})],fr.prototype,"handleDisabledChange",1);fr.define("sl-radio-button");var Yd=Object.defineProperty,qd=Object.getOwnPropertyDescriptor,Ca=(e,t,r,a)=>{for(var i=a>1?void 0:a?qd(t,r):t,n=e.length-1,s;n>=0;n--)(s=e[n])&&(i=(a?s(t,r,i):s(i))||i);return a&&i&&Yd(t,r,i),i};let Pr=class extends tt{constructor(){super(...arguments),this.time="",this.name="",this.targetUrl="",this.category="wydarzenie",this.multiline=!1,this.groupColor=""}handleClick(){if(!this.targetUrl)return;window.history.pushState({},"","/mParafia/mock-event"),window.dispatchEvent(new PopStateEvent("popstate"))}render(){const e=this.category==="wydarzenie",t=this.category==="intencja",r=this.groupColor?this.groupColor:"var(--color-wood-dark)";return K`
      <div
        class="item-container ${this.multiline?"is-multiline":""}"
        style="background-color: ${r};"
        @click="${this.handleClick}"
      >
        <span class="time">${this.time}</span>
        <span class="name">${this.name}</span>

        ${t?K`<sl-icon name="bookmark-fill"></sl-icon>`:e?K`<sl-icon name="star-fill"></sl-icon>`:K`<sl-icon name="people-fill"></sl-icon>`}
      </div>
    `}};Pr.styles=[Pt,ye`
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

      // .wydarzenie { background-color: var(--color-wood-dark); }
      // .domowy { background-color: #B87333; }
      // .lso { background-color: #4A69BD; }
      // .schola { background-color: #D4AF37; }
      // .biblijna { background-color: #6B8E23; }
      // .oaza { background-color: #829583; }
      // .rada { background-color: #535C68; }
      // .odb { background-color: #C98B8B; }
    `];Ca([I({type:String})],Pr.prototype,"time",2);Ca([I({type:String})],Pr.prototype,"name",2);Ca([I({type:String})],Pr.prototype,"targetUrl",2);Ca([I({type:String})],Pr.prototype,"category",2);Ca([I({type:Boolean})],Pr.prototype,"multiline",2);Ca([I({type:String})],Pr.prototype,"groupColor",2);Pr=Ca([Rt("calendar-item")],Pr);var Zd=Object.defineProperty,Jd=Object.getOwnPropertyDescriptor,Sa=(e,t,r,a)=>{for(var i=a>1?void 0:a?Jd(t,r):t,n=e.length-1,s;n>=0;n--)(s=e[n])&&(i=(a?s(t,r,i):s(i))||i);return a&&i&&Zd(t,r,i),i};let Lr=class extends tt{constructor(){super(...arguments),this.events=[],this.groups=[],this.currentView="month",this.currentDate=new Date,this.showOnlyMyGroups=!1,this.displayMode="all"}connectedCallback(){super.connectedCallback();const e=new CustomEvent("change-title",{detail:{title:"Kalendarz Parafialny"},bubbles:!0,composed:!0});this.dispatchEvent(e)}async firstUpdated(){await this.fetchEvents(),await this.fetchGroups()}async fetchEvents(){try{const e=await fetch("http://localhost:3000/api/events/all");if(!e.ok)throw new Error("Błąd połączenia");this.events=await e.json(),console.log("Dane pobrane:",this.events)}catch(e){console.error("Nie udało się pobrać wydarzeń:",e)}}async fetchGroups(){try{const e=await fetch("http://localhost:3000/api/groups");if(!e.ok)throw new Error("Błąd połączenia");this.groups=await e.json()}catch(e){console.error("Nie udało się pobrać grup:",e)}}getFilteredEvents(){let e=this.events;if(this.displayMode==="events"?e=e.filter(t=>!t.title.startsWith("Intencja:")):this.displayMode==="intentions"&&(e=e.filter(t=>t.title.startsWith("Intencja:"))),this.showOnlyMyGroups&&this.displayMode!=="intentions"){const t=this.groups.map(r=>r.name.toLowerCase());e=e.filter(r=>{const a=r.category?r.category.toLowerCase():"wydarzenie";return a==="wydarzenie"||t.includes(a)})}return e}_navigate(e){const t=new Date(this.currentDate),r=e==="next"?1:-1;if(this.currentView==="month"){const a=(t.getMonth()+r+12)%12;t.setMonth(t.getMonth()+r),t.getMonth()!==a&&t.setDate(0)}else this.currentView==="week"?t.setDate(t.getDate()+7*r):this.currentView==="day"&&t.setDate(t.getDate()+r);this.currentDate=t,this.requestUpdate()}switchToDayView(e){this.currentDate=e,this.currentView="day"}changeView(e){this.currentView=e,this.currentDate=new Date,this.requestUpdate()}_getHeaderTitle(){if(this.currentView==="month")return this.currentDate.toLocaleDateString("pl-PL",{month:"long",year:"numeric"});if(this.currentView==="day")return this.currentDate.toLocaleDateString("pl-PL",{weekday:"long",day:"numeric",month:"long"});{const e=this._getStartOfWeek(this.currentDate),t=new Date(e);t.setDate(t.getDate()+6);const r=e.toLocaleDateString("pl-PL",{day:"numeric",month:"short"}),a=t.toLocaleDateString("pl-PL",{day:"numeric",month:"short"});return`${r} - ${a} ${t.getFullYear()}`}}_getStartOfWeek(e){const t=new Date(e),r=t.getDay(),a=t.getDate()-r+(r===0?-6:1);return new Date(t.setDate(a))}_isToday(e){const t=new Date;return e.getDate()===t.getDate()&&e.getMonth()===t.getMonth()&&e.getFullYear()===t.getFullYear()}render(){return K`
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
          <sl-button
            variant=${this.displayMode==="all"?"primary":"default"}
            @click=${()=>{this.displayMode="all",this.requestUpdate()}}>
            Wszystko
          </sl-button>
          <sl-button
            variant=${this.displayMode==="events"?"primary":"default"}
            @click=${()=>{this.displayMode="events",this.requestUpdate()}}>
            Wydarzenia
          </sl-button>
          <sl-button
            variant=${this.displayMode==="intentions"?"primary":"default"}
            @click=${()=>{this.displayMode="intentions",this.requestUpdate()}}>
            Intencje
          </sl-button>
        </sl-button-group>

        ${this.displayMode!=="intentions"?K`
          <sl-switch
            ?checked=${this.showOnlyMyGroups}
            @sl-change=${e=>{this.showOnlyMyGroups=e.target.checked,this.requestUpdate()}} >
            Tylko moje grupy i główne wydarzenia
          </sl-switch>
        `:""}
      </div>

      ${this.currentView==="month"?this.renderMonthView():null}
      ${this.currentView==="week"?this.renderWeekView():null}
      ${this.currentView==="day"?this.renderDayView():null}
    `}_getEventsForDate(e){return this.getFilteredEvents().filter(t=>{if(!t.startTime)return!1;const r=new Date(t.startTime);return r.getFullYear()===e.getFullYear()&&r.getMonth()===e.getMonth()&&r.getDate()===e.getDate()})}renderMonthView(){const e=this.currentDate.getFullYear(),t=this.currentDate.getMonth(),r=new Date(e,t+1,0).getDate(),a=Array.from({length:r},(o,l)=>l+1),i=new Date(e,t,1).getDay(),n=i===0?6:i-1,s=Array.from({length:n},(o,l)=>l);return K`
      <div class="grid-month">
        ${["Pn","Wt","Śr","Cz","Pt","Sb","Nd"].map(o=>K`<div class="day-name">${o}</div>`)}
        ${s.map(()=>K`<div class="day empty"></div>`)}
        ${a.map(o=>{const l=new Date(e,t,o),c=this._getEventsForDate(l),u=this._isToday(l);return K`
            <div
              class=${Le({day:!0,today:u})}
              @click=${()=>this.switchToDayView(l)}
            >
              <span class="day-number">${o}</span>
              ${this.renderEventTags(c,"month")}
            </div>
          `})}
      </div>
    `}renderWeekView(){const e=this._getStartOfWeek(this.currentDate),t=Array.from({length:7},(r,a)=>{const i=new Date(e);return i.setDate(i.getDate()+a),i});return K`
      <div class="grid-week">
        ${t.map(r=>{const a=this._getEventsForDate(r),i=this._isToday(r);return K`
            <div
              class=${Le({"week-day":!0,today:i})}
              @click=${()=>this.switchToDayView(r)}
            >
              <div class="week-day-header">
                <div class="week-day-name">${r.toLocaleDateString("pl-PL",{weekday:"short"})}</div>
                <div class="week-day-number">${r.getDate()}</div>
              </div>

              ${a.length>0?K`
                    <div class="week-events-container">
                      ${this.renderEventTags(a,"week")}
                    </div>
                  `:K`<div class="no-events-small">Brak</div>`}
            </div>
          `})}
      </div>
    `}renderDayView(){const e=this._getEventsForDate(this.currentDate),t=this._isToday(this.currentDate);return K`
      <div class="list-view">
        <div class=${Le({"list-day-row":!0,today:t})}>
          <div class="list-day-header">Wydarzenia</div>

          ${e.length>0?this.renderEventTags(e,"day"):K`<span class="no-events" style="display:block; padding: 20px 0; font-size: 0.85rem; color: #666; text-align: center; font-style: italic;">Brak wydarzeń zaplanowanych na ten dzień.</span>`}
        </div>
      </div>
    `}renderEventTags(e,t){const r=t==="week"||t==="day",a=t==="day"||t==="week";return e.map(i=>{const s=new Date(i.startTime).toLocaleTimeString("pl-PL",{hour:"2-digit",minute:"2-digit"}),o=i.title.startsWith("Intencja:"),l=o?i.title.replace("Intencja:","").trim():i.title,c=this.groups.find(d=>d.id===i.groupId);let u=c?"grupa":"wydarzenie",h=c&&c.color?c.color:"";return o&&(u="intencja",h="#C18756"),K`
        <calendar-item
          .time="${s}"
          .name="${l}"
          .category="${u}"
          .groupColor="${h}"
          ?multiline=${r}
          targetUrl="${a?`/wydarzenia/${i.id}`:""}"
        >
        </calendar-item>
      `})}};Lr.styles=[Pt,ye`
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
    `];Sa([fe()],Lr.prototype,"events",2);Sa([fe()],Lr.prototype,"groups",2);Sa([fe()],Lr.prototype,"currentView",2);Sa([fe()],Lr.prototype,"currentDate",2);Sa([fe()],Lr.prototype,"showOnlyMyGroups",2);Sa([fe()],Lr.prototype,"displayMode",2);Lr=Sa([Rt("app-calendar")],Lr);var Qd=Object.defineProperty,ep=Object.getOwnPropertyDescriptor,To=(e,t,r,a)=>{for(var i=a>1?void 0:a?ep(t,r):t,n=e.length-1,s;n>=0;n--)(s=e[n])&&(i=(a?s(t,r,i):s(i))||i);return a&&i&&Qd(t,r,i),i};let Ui=class extends tt{constructor(){super(...arguments),this.groups=[],this.isLoading=!0}connectedCallback(){super.connectedCallback(),this.dispatchEvent(new CustomEvent("change-title",{detail:{title:"Grupy Parafialne"},bubbles:!0,composed:!0}))}async firstUpdated(){await this.fetchGroups()}async fetchGroups(){try{const e=await fetch("http://localhost:3000/api/groups");if(!e.ok)throw new Error("Błąd połączenia z serwerem");this.groups=await e.json()}catch(e){console.error("Nie udało się pobrać grup:",e)}finally{this.isLoading=!1}}render(){return this.isLoading?K`
        <div class="center-content">
          <sl-spinner style="font-size: 2rem;"></sl-spinner>
        </div>
      `:this.groups.length===0?K`
        <div class="center-content">
          Brak grup parafialnych w bazie danych.
        </div>
      `:K`
      <div class="groups-grid">
        ${this.groups.map(e=>K`
          <div class="group-card" @click=${()=>window.location.href=`/mParafia/grupa?id=${e.id}`}>

            <div class="group-photo">
              ${e.photoUrl?K`<img src="${e.photoUrl}" style="width: 100%; height: 100%; border-radius: 50%; object-fit: cover;" />`:K`<sl-icon name="people-fill" style="font-size: 24px; color: var(--color-wood-dark);"></sl-icon>`}
            </div>

            <div class="group-info">
              <h3>${e.name}</h3>
              ${e.description?K`<p class="group-desc">${e.description}</p>`:""}
            </div>

            <sl-icon name="chevron-right" style="margin-left: auto; color: var(--color-wood-medium); flex-shrink: 0;"></sl-icon>
          </div>
        `)}
      </div>
    `}};Ui.styles=[Pt,ye`
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
    `];To([fe()],Ui.prototype,"groups",2);To([fe()],Ui.prototype,"isLoading",2);Ui=To([Rt("app-groups")],Ui);var tp=Object.defineProperty,rp=Object.getOwnPropertyDescriptor,Ao=(e,t,r,a)=>{for(var i=a>1?void 0:a?rp(t,r):t,n=e.length-1,s;n>=0;n--)(s=e[n])&&(i=(a?s(t,r,i):s(i))||i);return a&&i&&tp(t,r,i),i};let Vi=class extends tt{constructor(){super(...arguments),this.events=[],this.groups=[]}connectedCallback(){super.connectedCallback(),this.dispatchEvent(new CustomEvent("change-title",{detail:{title:"Nadchodzące Wydarzenia"},bubbles:!0,composed:!0}))}async firstUpdated(){await this.fetchGroups(),await this.fetchEvents()}async fetchGroups(){try{const e=await fetch("http://localhost:3000/api/groups");e.ok&&(this.groups=await e.json())}catch(e){console.error("Nie udało się pobrać grup:",e)}}async fetchEvents(){try{const e=await fetch("http://localhost:3000/api/events");if(!e.ok)throw new Error("Błąd połączenia");this.events=await e.json()}catch(e){console.error("Nie udało się pobrać wydarzeń:",e)}}getGroupedEvents(){const e={},t=new Date;return t.setHours(0,0,0,0),[...this.events].filter(a=>new Date(a.startTime)>=t).sort((a,i)=>new Date(a.startTime).getTime()-new Date(i.startTime).getTime()).forEach(a=>{const i=a.startTime.split("T")[0];e[i]||(e[i]=[]),e[i].push(a)}),e}formatDate(e){return new Date(e).toLocaleDateString("pl-PL",{weekday:"long",day:"numeric",month:"long"})}render(){const e=this.getGroupedEvents();return K`
      ${Object.keys(e).map(t=>K`
        <div class="day-section">
          <div class="day-header">${this.formatDate(t)}</div>
          <div class="events-list">
            ${e[t].map(r=>{const a=new Date(r.startTime).toLocaleTimeString("pl-PL",{hour:"2-digit",minute:"2-digit"}),i=r.title.startsWith("Intencja:"),n=i?r.title.replace("Intencja:","").trim():r.title,s=this.groups.find(c=>c.id===r.groupId);let o=s?"grupa":"wydarzenie",l=s&&s.color?s.color:"";return i&&(o="intencja",l="#C18756"),K`
                <calendar-item
                  .time="${a}"
                  .name="${n}"
                  .category="${o}"
                  .groupColor="${l}"
                  .targetUrl="/mParafia/wydarzenie?id=${r.id}"
                  multiline
                ></calendar-item>
              `})}
          </div>
        </div>
      `)}
    `}};Vi.styles=[Pt,ye`
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
    `];Ao([fe()],Vi.prototype,"events",2);Ao([fe()],Vi.prototype,"groups",2);Vi=Ao([Rt("app-events")],Vi);var ap=Object.getOwnPropertyDescriptor,ip=(e,t,r,a)=>{for(var i=a>1?void 0:a?ap(t,r):t,n=e.length-1,s;n>=0;n--)(s=e[n])&&(i=s(i)||i);return i};let Hs=class extends tt{connectedCallback(){super.connectedCallback(),this.dispatchEvent(new CustomEvent("change-title",{detail:{title:"Strona w przygotowaniu"},bubbles:!0,composed:!0}))}_navHome(){window.history.pushState({},"","/mParafia/"),window.dispatchEvent(new PopStateEvent("popstate"))}render(){return K`
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
    `}};Hs.styles=[Pt,ye`
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

    `];Hs=ip([Rt("app-event-mock-detail")],Hs);var np=ye`
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
`,sp=ye`
  :host {
    display: contents;
  }
`,ns=class extends $e{constructor(){super(...arguments),this.observedElements=[],this.disabled=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(e=>{this.emit("sl-resize",{detail:{entries:e}})}),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){this.disabled||this.startObserver()}startObserver(){const e=this.shadowRoot.querySelector("slot");if(e!==null){const t=e.assignedElements({flatten:!0});this.observedElements.forEach(r=>this.resizeObserver.unobserve(r)),this.observedElements=[],t.forEach(r=>{this.resizeObserver.observe(r),this.observedElements.push(r)})}}stopObserver(){this.resizeObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}render(){return K` <slot @slotchange=${this.handleSlotChange}></slot> `}};ns.styles=[Ve,sp];y([I({type:Boolean,reflect:!0})],ns.prototype,"disabled",2);y([Re("disabled",{waitUntilFirstUpdate:!0})],ns.prototype,"handleDisabledChange",1);var mt=class extends $e{constructor(){super(...arguments),this.tabs=[],this.focusableTabs=[],this.panels=[],this.localize=new er(this),this.hasScrollControls=!1,this.shouldHideScrollStartButton=!1,this.shouldHideScrollEndButton=!1,this.placement="top",this.activation="auto",this.noScrollControls=!1,this.fixedScrollControls=!1,this.scrollOffset=1}connectedCallback(){const e=Promise.all([customElements.whenDefined("sl-tab"),customElements.whenDefined("sl-tab-panel")]);super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.repositionIndicator(),this.updateScrollControls()}),this.mutationObserver=new MutationObserver(t=>{const r=t.filter(({target:a})=>{if(a===this)return!0;if(a.closest("sl-tab-group")!==this)return!1;const i=a.tagName.toLowerCase();return i==="sl-tab"||i==="sl-tab-panel"});if(r.length!==0){if(r.some(a=>!["aria-labelledby","aria-controls"].includes(a.attributeName))&&setTimeout(()=>this.setAriaLabels()),r.some(a=>a.attributeName==="disabled"))this.syncTabsAndPanels();else if(r.some(a=>a.attributeName==="active")){const i=r.filter(n=>n.attributeName==="active"&&n.target.tagName.toLowerCase()==="sl-tab").map(n=>n.target).find(n=>n.active);i&&this.setActiveTab(i)}}}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,attributeFilter:["active","disabled","name","panel"],childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),e.then(()=>{new IntersectionObserver((r,a)=>{var i;r[0].intersectionRatio>0&&(this.setAriaLabels(),this.setActiveTab((i=this.getActiveTab())!=null?i:this.tabs[0],{emitEvents:!1}),a.unobserve(r[0].target))}).observe(this.tabGroup)})})}disconnectedCallback(){var e,t;super.disconnectedCallback(),(e=this.mutationObserver)==null||e.disconnect(),this.nav&&((t=this.resizeObserver)==null||t.unobserve(this.nav))}getAllTabs(){return this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()}getAllPanels(){return[...this.body.assignedElements()].filter(e=>e.tagName.toLowerCase()==="sl-tab-panel")}getActiveTab(){return this.tabs.find(e=>e.active)}handleClick(e){const r=e.target.closest("sl-tab");r?.closest("sl-tab-group")===this&&r!==null&&this.setActiveTab(r,{scrollBehavior:"smooth"})}handleKeyDown(e){const r=e.target.closest("sl-tab");if(r?.closest("sl-tab-group")===this&&(["Enter"," "].includes(e.key)&&r!==null&&(this.setActiveTab(r,{scrollBehavior:"smooth"}),e.preventDefault()),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key))){const i=this.tabs.find(o=>o.matches(":focus")),n=this.localize.dir()==="rtl";let s=null;if(i?.tagName.toLowerCase()==="sl-tab"){if(e.key==="Home")s=this.focusableTabs[0];else if(e.key==="End")s=this.focusableTabs[this.focusableTabs.length-1];else if(["top","bottom"].includes(this.placement)&&e.key===(n?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&e.key==="ArrowUp"){const o=this.tabs.findIndex(l=>l===i);s=this.findNextFocusableTab(o,"backward")}else if(["top","bottom"].includes(this.placement)&&e.key===(n?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&e.key==="ArrowDown"){const o=this.tabs.findIndex(l=>l===i);s=this.findNextFocusableTab(o,"forward")}if(!s)return;s.tabIndex=0,s.focus({preventScroll:!0}),this.activation==="auto"?this.setActiveTab(s,{scrollBehavior:"smooth"}):this.tabs.forEach(o=>{o.tabIndex=o===s?0:-1}),["top","bottom"].includes(this.placement)&&zs(s,this.nav,"horizontal"),e.preventDefault()}}}handleScrollToStart(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}setActiveTab(e,t){if(t=aa({emitEvents:!0,scrollBehavior:"auto"},t),e!==this.activeTab&&!e.disabled){const r=this.activeTab;this.activeTab=e,this.tabs.forEach(a=>{a.active=a===this.activeTab,a.tabIndex=a===this.activeTab?0:-1}),this.panels.forEach(a=>{var i;return a.active=a.name===((i=this.activeTab)==null?void 0:i.panel)}),this.syncIndicator(),["top","bottom"].includes(this.placement)&&zs(this.activeTab,this.nav,"horizontal",t.scrollBehavior),t.emitEvents&&(r&&this.emit("sl-tab-hide",{detail:{name:r.panel}}),this.emit("sl-tab-show",{detail:{name:this.activeTab.panel}}))}}setAriaLabels(){this.tabs.forEach(e=>{const t=this.panels.find(r=>r.name===e.panel);t&&(e.setAttribute("aria-controls",t.getAttribute("id")),t.setAttribute("aria-labelledby",e.getAttribute("id")))})}repositionIndicator(){const e=this.getActiveTab();if(!e)return;const t=e.clientWidth,r=e.clientHeight,a=this.localize.dir()==="rtl",i=this.getAllTabs(),s=i.slice(0,i.indexOf(e)).reduce((o,l)=>({left:o.left+l.clientWidth,top:o.top+l.clientHeight}),{left:0,top:0});switch(this.placement){case"top":case"bottom":this.indicator.style.width=`${t}px`,this.indicator.style.height="auto",this.indicator.style.translate=a?`${-1*s.left}px`:`${s.left}px`;break;case"start":case"end":this.indicator.style.width="auto",this.indicator.style.height=`${r}px`,this.indicator.style.translate=`0 ${s.top}px`;break}}syncTabsAndPanels(){this.tabs=this.getAllTabs(),this.focusableTabs=this.tabs.filter(e=>!e.disabled),this.panels=this.getAllPanels(),this.syncIndicator(),this.updateComplete.then(()=>this.updateScrollControls())}findNextFocusableTab(e,t){let r=null;const a=t==="forward"?1:-1;let i=e+a;for(;e<this.tabs.length;){if(r=this.tabs[i]||null,r===null){t==="forward"?r=this.focusableTabs[0]:r=this.focusableTabs[this.focusableTabs.length-1];break}if(!r.disabled)break;i+=a}return r}updateScrollButtons(){this.hasScrollControls&&!this.fixedScrollControls&&(this.shouldHideScrollStartButton=this.scrollFromStart()<=this.scrollOffset,this.shouldHideScrollEndButton=this.isScrolledToEnd())}isScrolledToEnd(){return this.scrollFromStart()+this.nav.clientWidth>=this.nav.scrollWidth-this.scrollOffset}scrollFromStart(){return this.localize.dir()==="rtl"?-this.nav.scrollLeft:this.nav.scrollLeft}updateScrollControls(){this.noScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth+1,this.updateScrollButtons()}syncIndicator(){this.getActiveTab()?(this.indicator.style.display="block",this.repositionIndicator()):this.indicator.style.display="none"}show(e){const t=this.tabs.find(r=>r.panel===e);t&&this.setActiveTab(t,{scrollBehavior:"smooth"})}render(){const e=this.localize.dir()==="rtl";return K`
      <div
        part="base"
        class=${Le({"tab-group":!0,"tab-group--top":this.placement==="top","tab-group--bottom":this.placement==="bottom","tab-group--start":this.placement==="start","tab-group--end":this.placement==="end","tab-group--rtl":this.localize.dir()==="rtl","tab-group--has-scroll-controls":this.hasScrollControls})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls?K`
                <sl-icon-button
                  part="scroll-button scroll-button--start"
                  exportparts="base:scroll-button__base"
                  class=${Le({"tab-group__scroll-button":!0,"tab-group__scroll-button--start":!0,"tab-group__scroll-button--start--hidden":this.shouldHideScrollStartButton})}
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

          ${this.hasScrollControls?K`
                <sl-icon-button
                  part="scroll-button scroll-button--end"
                  exportparts="base:scroll-button__base"
                  class=${Le({"tab-group__scroll-button":!0,"tab-group__scroll-button--end":!0,"tab-group__scroll-button--end--hidden":this.shouldHideScrollEndButton})}
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
    `}};mt.styles=[Ve,np];mt.dependencies={"sl-icon-button":lt,"sl-resize-observer":ns};y([me(".tab-group")],mt.prototype,"tabGroup",2);y([me(".tab-group__body")],mt.prototype,"body",2);y([me(".tab-group__nav")],mt.prototype,"nav",2);y([me(".tab-group__indicator")],mt.prototype,"indicator",2);y([fe()],mt.prototype,"hasScrollControls",2);y([fe()],mt.prototype,"shouldHideScrollStartButton",2);y([fe()],mt.prototype,"shouldHideScrollEndButton",2);y([I()],mt.prototype,"placement",2);y([I()],mt.prototype,"activation",2);y([I({attribute:"no-scroll-controls",type:Boolean})],mt.prototype,"noScrollControls",2);y([I({attribute:"fixed-scroll-controls",type:Boolean})],mt.prototype,"fixedScrollControls",2);y([nf({passive:!0})],mt.prototype,"updateScrollButtons",1);y([Re("noScrollControls",{waitUntilFirstUpdate:!0})],mt.prototype,"updateScrollControls",1);y([Re("placement",{waitUntilFirstUpdate:!0})],mt.prototype,"syncIndicator",1);mt.define("sl-tab-group");var op=(e,t)=>{let r=0;return function(...a){window.clearTimeout(r),r=window.setTimeout(()=>{e.call(this,...a)},t)}},Vl=(e,t,r)=>{const a=e[t];e[t]=function(...i){a.call(this,...i),r.call(this,a,...i)}};(()=>{if(typeof window>"u")return;if(!("onscrollend"in window)){const t=new Set,r=new WeakMap,a=n=>{for(const s of n.changedTouches)t.add(s.identifier)},i=n=>{for(const s of n.changedTouches)t.delete(s.identifier)};document.addEventListener("touchstart",a,!0),document.addEventListener("touchend",i,!0),document.addEventListener("touchcancel",i,!0),Vl(EventTarget.prototype,"addEventListener",function(n,s){if(s!=="scrollend")return;const o=op(()=>{t.size?o():this.dispatchEvent(new Event("scrollend"))},100);n.call(this,"scroll",o,{passive:!0}),r.set(this,o)}),Vl(EventTarget.prototype,"removeEventListener",function(n,s){if(s!=="scrollend")return;const o=r.get(this);o&&n.call(this,"scroll",o,{passive:!0})})}})();var lp=ye`
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
`,cp=0,dr=class extends $e{constructor(){super(...arguments),this.localize=new er(this),this.attrId=++cp,this.componentId=`sl-tab-${this.attrId}`,this.panel="",this.active=!1,this.closable=!1,this.disabled=!1,this.tabIndex=0}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tab")}handleCloseClick(e){e.stopPropagation(),this.emit("sl-close")}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false"),this.disabled&&!this.active?this.tabIndex=-1:this.tabIndex=0}render(){return this.id=this.id.length>0?this.id:this.componentId,K`
      <div
        part="base"
        class=${Le({tab:!0,"tab--active":this.active,"tab--closable":this.closable,"tab--disabled":this.disabled})}
      >
        <slot></slot>
        ${this.closable?K`
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
    `}};dr.styles=[Ve,lp];dr.dependencies={"sl-icon-button":lt};y([me(".tab")],dr.prototype,"tab",2);y([I({reflect:!0})],dr.prototype,"panel",2);y([I({type:Boolean,reflect:!0})],dr.prototype,"active",2);y([I({type:Boolean,reflect:!0})],dr.prototype,"closable",2);y([I({type:Boolean,reflect:!0})],dr.prototype,"disabled",2);y([I({type:Number,reflect:!0})],dr.prototype,"tabIndex",2);y([Re("active")],dr.prototype,"handleActiveChange",1);y([Re("disabled")],dr.prototype,"handleDisabledChange",1);dr.define("sl-tab");var up=ye`
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
`,hp=0,an=class extends $e{constructor(){super(...arguments),this.attrId=++hp,this.componentId=`sl-tab-panel-${this.attrId}`,this.name="",this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute("role","tabpanel")}handleActiveChange(){this.setAttribute("aria-hidden",this.active?"false":"true")}render(){return K`
      <slot
        part="base"
        class=${Le({"tab-panel":!0,"tab-panel--active":this.active})}
      ></slot>
    `}};an.styles=[Ve,up];y([I({reflect:!0})],an.prototype,"name",2);y([I({type:Boolean,reflect:!0})],an.prototype,"active",2);y([Re("active")],an.prototype,"handleActiveChange",1);an.define("sl-tab-panel");var fp=ye`
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
`,_r=class extends $e{constructor(){super(...arguments),this.hasError=!1,this.image="",this.label="",this.initials="",this.loading="eager",this.shape="circle"}handleImageChange(){this.hasError=!1}handleImageLoadError(){this.hasError=!0,this.emit("sl-error")}render(){const e=K`
      <img
        part="image"
        class="avatar__image"
        src="${this.image}"
        loading="${this.loading}"
        alt=""
        @error="${this.handleImageLoadError}"
      />
    `;let t=K``;return this.initials?t=K`<div part="initials" class="avatar__initials">${this.initials}</div>`:t=K`
        <div part="icon" class="avatar__icon" aria-hidden="true">
          <slot name="icon">
            <sl-icon name="person-fill" library="system"></sl-icon>
          </slot>
        </div>
      `,K`
      <div
        part="base"
        class=${Le({avatar:!0,"avatar--circle":this.shape==="circle","avatar--rounded":this.shape==="rounded","avatar--square":this.shape==="square"})}
        role="img"
        aria-label=${this.label}
      >
        ${this.image&&!this.hasError?e:t}
      </div>
    `}};_r.styles=[Ve,fp];_r.dependencies={"sl-icon":It};y([fe()],_r.prototype,"hasError",2);y([I()],_r.prototype,"image",2);y([I()],_r.prototype,"label",2);y([I()],_r.prototype,"initials",2);y([I()],_r.prototype,"loading",2);y([I({reflect:!0})],_r.prototype,"shape",2);y([Re("image")],_r.prototype,"handleImageChange",1);_r.define("sl-avatar");var dp=ye`
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
`,kr=class extends $e{constructor(){super(...arguments),this.hasSlotController=new yr(this,"footer"),this.localize=new er(this),this.modal=new l0(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=e=>{e.key==="Escape"&&this.modal.isActive()&&this.open&&(e.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),Ei(this))}disconnectedCallback(){super.disconnectedCallback(),this.modal.deactivate(),Ti(this),this.removeOpenListeners()}requestClose(e){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){const r=Nt(this,"dialog.denyClose",{dir:this.localize.dir()});$t(this.panel,r.keyframes,r.options);return}this.hide()}addOpenListeners(){var e;"CloseWatcher"in window?((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard")):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var e;(e=this.closeWatcher)==null||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),Ei(this);const e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([Jt(this.dialog),Jt(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")});const t=Nt(this,"dialog.show",{dir:this.localize.dir()}),r=Nt(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([$t(this.panel,t.keyframes,t.options),$t(this.overlay,r.keyframes,r.options)]),this.emit("sl-after-show")}else{go(this),this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([Jt(this.dialog),Jt(this.overlay)]);const e=Nt(this,"dialog.hide",{dir:this.localize.dir()}),t=Nt(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([$t(this.overlay,t.keyframes,t.options).then(()=>{this.overlay.hidden=!0}),$t(this.panel,e.keyframes,e.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,Ti(this);const r=this.originalTrigger;typeof r?.focus=="function"&&setTimeout(()=>r.focus()),this.emit("sl-after-hide")}}async show(){if(!this.open)return this.open=!0,Zr(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Zr(this,"sl-after-hide")}render(){return K`
      <div
        part="base"
        class=${Le({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${pe(this.noHeader?this.label:void 0)}
          aria-labelledby=${pe(this.noHeader?void 0:"title")}
          tabindex="-1"
        >
          ${this.noHeader?"":K`
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
    `}};kr.styles=[Ve,dp];kr.dependencies={"sl-icon-button":lt};y([me(".dialog")],kr.prototype,"dialog",2);y([me(".dialog__panel")],kr.prototype,"panel",2);y([me(".dialog__overlay")],kr.prototype,"overlay",2);y([I({type:Boolean,reflect:!0})],kr.prototype,"open",2);y([I({reflect:!0})],kr.prototype,"label",2);y([I({attribute:"no-header",type:Boolean,reflect:!0})],kr.prototype,"noHeader",2);y([Re("open",{waitUntilFirstUpdate:!0})],kr.prototype,"handleOpenChange",1);at("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});at("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});at("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}});at("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});at("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});kr.define("sl-dialog");var pp=Object.defineProperty,gp=Object.getOwnPropertyDescriptor,nn=(e,t,r,a)=>{for(var i=a>1?void 0:a?gp(t,r):t,n=e.length-1,s;n>=0;n--)(s=e[n])&&(i=(a?s(t,r,i):s(i))||i);return a&&i&&pp(t,r,i),i};let wa=class extends tt{constructor(){super(...arguments),this.groups=[],this.editingGroup=null,this.isSubmitting=!1}async firstUpdated(){this.fetchGroups()}async fetchGroups(){const e=await fetch("http://localhost:3000/api/groups");this.groups=await e.json()}openEdit(e=null){this.editingGroup=e||{name:"",description:"",photoUrl:"",color:"#B87333"},this.dialog.show()}async save(){if(!this.editingGroup?.name||this.editingGroup.name.trim()===""){alert("Nazwa grupy jest wymagana!");return}if(!this.isSubmitting){this.isSubmitting=!0;try{const e=this.editingGroup.id?"PUT":"POST",t=this.editingGroup.id?`http://localhost:3000/api/groups/${this.editingGroup.id}`:"http://localhost:3000/api/groups";(await fetch(t,{method:e,headers:{"Content-Type":"application/json"},body:JSON.stringify(this.editingGroup)})).ok?(this.dialog.hide(),await this.fetchGroups()):alert("Wystąpił błąd przy zapisywaniu grupy.")}catch(e){console.error(e),alert("Nie udało się połączyć z serwerem.")}finally{this.isSubmitting=!1}}}async deleteGroup(e){confirm("Czy na pewno chcesz usunąć tę grupę?")&&(await fetch(`http://localhost:3000/api/groups/${e}`,{method:"DELETE"}),this.fetchGroups())}async handleFileUpload(e){const t=e.target.files[0];if(!t)return;const r=new FormData;r.append("photo",t);try{const a=await fetch("http://localhost:3000/api/upload",{method:"POST",body:r});if(a.ok){const i=await a.json();this.editingGroup={...this.editingGroup,photoUrl:i.url},this.requestUpdate()}else alert("Błąd podczas wgrywania zdjęcia.")}catch(a){console.error(a),alert("Nie udało się połączyć z serwerem.")}}render(){return K`
      <div class="header-actions">
        <h2>Lista Grup</h2>
        <sl-button variant="primary" @click=${()=>this.openEdit()}>
          <sl-icon slot="prefix" name="plus-lg"></sl-icon> Dodaj Grupę
        </sl-button>
      </div>

      <div class="list-container">
        ${this.groups.map(e=>K`
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
              ${e.description?K`<span class="entity-desc">${e.description}</span>`:""}
            </div>

            <div class="actions-container">
              <sl-button size="small" variant="default" @click=${()=>this.openEdit(e)}>
                <sl-icon slot="prefix" name="pencil"></sl-icon> Edytuj
              </sl-button>

              <sl-button size="small" variant="danger" outline @click=${()=>this.deleteGroup(e.id)}>
                <sl-icon slot="prefix" name="trash"></sl-icon> Usuń
              </sl-button>
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
          ${this.editingGroup?.photoUrl?K`<img src="${this.editingGroup.photoUrl}" style="max-width: 100px; border-radius: 8px; border: 1px solid var(--color-wood-medium);" />`:""}
        </div>
        <sl-textarea label="Opis" .value=${this.editingGroup?.description} @sl-input=${e=>this.editingGroup.description=e.target.value}></sl-textarea>
      </form>
        <sl-button slot="footer" variant="primary" @click=${this.save}>Zapisz zmiany</sl-button>
      </sl-dialog>

    `}};wa.styles=[Pt,ye`
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
    `];nn([fe()],wa.prototype,"groups",2);nn([me("sl-dialog")],wa.prototype,"dialog",2);nn([fe()],wa.prototype,"editingGroup",2);nn([fe()],wa.prototype,"isSubmitting",2);wa=nn([Rt("app-admin-groups")],wa);var mp=ye`
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
`,sn=class extends $e{constructor(){super(...arguments),this.variant="primary",this.pill=!1,this.pulse=!1}render(){return K`
      <span
        part="base"
        class=${Le({badge:!0,"badge--primary":this.variant==="primary","badge--success":this.variant==="success","badge--neutral":this.variant==="neutral","badge--warning":this.variant==="warning","badge--danger":this.variant==="danger","badge--pill":this.pill,"badge--pulse":this.pulse})}
        role="status"
      >
        <slot></slot>
      </span>
    `}};sn.styles=[Ve,mp];y([I({reflect:!0})],sn.prototype,"variant",2);y([I({type:Boolean,reflect:!0})],sn.prototype,"pill",2);y([I({type:Boolean,reflect:!0})],sn.prototype,"pulse",2);sn.define("sl-badge");var vp=Object.defineProperty,xp=Object.getOwnPropertyDescriptor,Fa=(e,t,r,a)=>{for(var i=a>1?void 0:a?xp(t,r):t,n=e.length-1,s;n>=0;n--)(s=e[n])&&(i=(a?s(t,r,i):s(i))||i);return a&&i&&vp(t,r,i),i};let Nr=class extends tt{constructor(){super(...arguments),this.announcements=[],this.isSubmitting=!1,this.editingId=null}async firstUpdated(){await this.fetchAnnouncements()}async fetchAnnouncements(){try{const e=await fetch("http://localhost:3000/api/announcements");if(e.ok){const t=await e.json();this.announcements=t.sort((r,a)=>r.isMain?-1:a.isMain?1:new Date(a.date).getTime()-new Date(r.date).getTime())}}catch(e){console.error("Błąd pobierania ogłoszeń:",e)}}async handleSubmit(e){e.preventDefault();const t=this.titleInput.value,r=this.dateInput.value,a=this.contentInput.value;if(!t||!r||!a){alert("Wypełnij wszystkie pola!");return}this.isSubmitting=!0;try{let i;this.editingId?i=await fetch(`http://localhost:3000/api/announcements/${this.editingId}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:t,date:r,content:a})}):i=await fetch("http://localhost:3000/api/announcements",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:t,date:r,content:a})}),i.ok?(this.resetForm(),await this.fetchAnnouncements()):alert("Błąd zapisu ogłoszenia.")}catch(i){console.error("Błąd:",i)}finally{this.isSubmitting=!1}}async handleDelete(e){if(confirm("Czy na pewno chcesz usunąć to ogłoszenie?"))try{(await fetch(`http://localhost:3000/api/announcements/${e}`,{method:"DELETE"})).ok&&(this.editingId===e&&this.resetForm(),await this.fetchAnnouncements())}catch(t){console.error("Błąd usuwania:",t)}}async toggleMain(e){try{(await fetch(`http://localhost:3000/api/announcements/${e}/toggle-main`,{method:"PUT"})).ok&&await this.fetchAnnouncements()}catch(t){console.error("Błąd przy przełączaniu głównego ogłoszenia:",t)}}startEditing(e){this.editingId=e.id,this.titleInput.value=e.title;const t=new Date(e.date).toISOString().split("T")[0];this.dateInput.value=t,this.contentInput.value=e.content,window.scrollTo({top:0,behavior:"smooth"})}resetForm(){this.editingId=null,this.titleInput.value="",this.dateInput.value="",this.contentInput.value=""}formatDate(e){return new Date(e).toLocaleDateString("pl-PL")}render(){return K`
      <div class="form-section ${this.editingId?"is-editing":""}">
        <div class="form-title">
          <h2>${this.editingId?"Edytuj ogłoszenie":"Dodaj nowe ogłoszenia"}</h2>
          ${this.editingId?K`<sl-badge variant="warning" pill>Tryb Edycji</sl-badge>`:""}
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
            ${this.editingId?K`<sl-button variant="default" @click="${this.resetForm}">Anuluj</sl-button>`:""}
          </div>
        </form>
      </div>

      <sl-divider></sl-divider>

      <div class="list-section">
        <h3>Zarządzaj ogłoszeniami</h3>
        
        ${this.announcements.length===0?K`<p style="color: #666;">Brak ogłoszeń w bazie.</p>`:this.announcements.map(e=>K`
            <div class="announcement-item ${e.isMain?"is-main":""}">
              
              <sl-icon 
                class="main-tick ${e.isMain?"is-active":""}" 
                name="${e.isMain?"check-circle-fill":"check-circle"}" 
                @click="${()=>this.toggleMain(e.id)}"
                title="${e.isMain?"Odznacz jako główne":"Ustaw jako główne"}">
              </sl-icon>

              <div class="announcement-header">
                <div class="announcement-info">
                  <h4>
                    ${e.title}
                    ${e.isMain?K`<sl-badge variant="success" pill>Strona Główna</sl-badge>`:""}
                  </h4>
                  <span>Data: ${this.formatDate(e.date)}</span>
                </div>
              </div>

              <div class="actions">
                <sl-button size="small" @click="${()=>this.startEditing(e)}">
                  <sl-icon slot="prefix" name="pencil"></sl-icon>
                  Edytuj
                </sl-button>
                
                <sl-button size="small" variant="danger" outline @click="${()=>this.handleDelete(e.id)}">
                  <sl-icon slot="prefix" name="trash"></sl-icon>
                  Usuń
                </sl-button>
              </div>

            </div>
          `)}
      </div>
    `}};Nr.styles=[Pt,ye`
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
    `];Fa([fe()],Nr.prototype,"announcements",2);Fa([fe()],Nr.prototype,"isSubmitting",2);Fa([fe()],Nr.prototype,"editingId",2);Fa([me("#title-input")],Nr.prototype,"titleInput",2);Fa([me("#date-input")],Nr.prototype,"dateInput",2);Fa([me("#content-input")],Nr.prototype,"contentInput",2);Nr=Fa([Rt("app-admin-announcements")],Nr);var bp=ye`
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
`,Da=class extends $e{constructor(){super(...arguments),this.localize=new er(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit("sl-remove")}render(){return K`
      <span
        part="base"
        class=${Le({tag:!0,"tag--primary":this.variant==="primary","tag--success":this.variant==="success","tag--neutral":this.variant==="neutral","tag--warning":this.variant==="warning","tag--danger":this.variant==="danger","tag--text":this.variant==="text","tag--small":this.size==="small","tag--medium":this.size==="medium","tag--large":this.size==="large","tag--pill":this.pill,"tag--removable":this.removable})}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable?K`
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
    `}};Da.styles=[Ve,bp];Da.dependencies={"sl-icon-button":lt};y([I({reflect:!0})],Da.prototype,"variant",2);y([I({reflect:!0})],Da.prototype,"size",2);y([I({type:Boolean,reflect:!0})],Da.prototype,"pill",2);y([I({type:Boolean})],Da.prototype,"removable",2);var wp=ye`
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
`,yp=ye`
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
`;const Jr=Math.min,Bt=Math.max,zn=Math.round,bn=Math.floor,br=e=>({x:e,y:e}),_p={left:"right",right:"left",bottom:"top",top:"bottom"};function Ws(e,t,r){return Bt(e,Jr(t,r))}function ei(e,t){return typeof e=="function"?e(t):e}function Qr(e){return e.split("-")[0]}function ti(e){return e.split("-")[1]}function F0(e){return e==="x"?"y":"x"}function Co(e){return e==="y"?"height":"width"}function Dr(e){const t=e[0];return t==="t"||t==="b"?"y":"x"}function So(e){return F0(Dr(e))}function kp(e,t,r){r===void 0&&(r=!1);const a=ti(e),i=So(e),n=Co(i);let s=i==="x"?a===(r?"end":"start")?"right":"left":a==="start"?"bottom":"top";return t.reference[n]>t.floating[n]&&(s=Un(s)),[s,Un(s)]}function Ep(e){const t=Un(e);return[js(e),t,js(t)]}function js(e){return e.includes("start")?e.replace("start","end"):e.replace("end","start")}const Hl=["left","right"],Wl=["right","left"],Tp=["top","bottom"],Ap=["bottom","top"];function Cp(e,t,r){switch(e){case"top":case"bottom":return r?t?Wl:Hl:t?Hl:Wl;case"left":case"right":return t?Tp:Ap;default:return[]}}function Sp(e,t,r,a){const i=ti(e);let n=Cp(Qr(e),r==="start",a);return i&&(n=n.map(s=>s+"-"+i),t&&(n=n.concat(n.map(js)))),n}function Un(e){const t=Qr(e);return _p[t]+e.slice(t.length)}function Fp(e){return{top:0,right:0,bottom:0,left:0,...e}}function D0(e){return typeof e!="number"?Fp(e):{top:e,right:e,bottom:e,left:e}}function Vn(e){const{x:t,y:r,width:a,height:i}=e;return{width:a,height:i,top:r,left:t,right:t+a,bottom:r+i,x:t,y:r}}function jl(e,t,r){let{reference:a,floating:i}=e;const n=Dr(t),s=So(t),o=Co(s),l=Qr(t),c=n==="y",u=a.x+a.width/2-i.width/2,h=a.y+a.height/2-i.height/2,d=a[o]/2-i[o]/2;let f;switch(l){case"top":f={x:u,y:a.y-i.height};break;case"bottom":f={x:u,y:a.y+a.height};break;case"right":f={x:a.x+a.width,y:h};break;case"left":f={x:a.x-i.width,y:h};break;default:f={x:a.x,y:a.y}}switch(ti(t)){case"start":f[s]-=d*(r&&c?-1:1);break;case"end":f[s]+=d*(r&&c?-1:1);break}return f}async function Dp(e,t){var r;t===void 0&&(t={});const{x:a,y:i,platform:n,rects:s,elements:o,strategy:l}=e,{boundary:c="clippingAncestors",rootBoundary:u="viewport",elementContext:h="floating",altBoundary:d=!1,padding:f=0}=ei(t,e),p=D0(f),m=o[d?h==="floating"?"reference":"floating":h],w=Vn(await n.getClippingRect({element:(r=await(n.isElement==null?void 0:n.isElement(m)))==null||r?m:m.contextElement||await(n.getDocumentElement==null?void 0:n.getDocumentElement(o.floating)),boundary:c,rootBoundary:u,strategy:l})),C=h==="floating"?{x:a,y:i,width:s.floating.width,height:s.floating.height}:s.reference,x=await(n.getOffsetParent==null?void 0:n.getOffsetParent(o.floating)),D=await(n.isElement==null?void 0:n.isElement(x))?await(n.getScale==null?void 0:n.getScale(x))||{x:1,y:1}:{x:1,y:1},M=Vn(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({elements:o,rect:C,offsetParent:x,strategy:l}):C);return{top:(w.top-M.top+p.top)/D.y,bottom:(M.bottom-w.bottom+p.bottom)/D.y,left:(w.left-M.left+p.left)/D.x,right:(M.right-w.right+p.right)/D.x}}const Op=50,Rp=async(e,t,r)=>{const{placement:a="bottom",strategy:i="absolute",middleware:n=[],platform:s}=r,o=s.detectOverflow?s:{...s,detectOverflow:Dp},l=await(s.isRTL==null?void 0:s.isRTL(t));let c=await s.getElementRects({reference:e,floating:t,strategy:i}),{x:u,y:h}=jl(c,a,l),d=a,f=0;const p={};for(let g=0;g<n.length;g++){const m=n[g];if(!m)continue;const{name:w,fn:C}=m,{x,y:D,data:M,reset:O}=await C({x:u,y:h,initialPlacement:a,placement:d,strategy:i,middlewareData:p,rects:c,platform:o,elements:{reference:e,floating:t}});u=x??u,h=D??h,p[w]={...p[w],...M},O&&f<Op&&(f++,typeof O=="object"&&(O.placement&&(d=O.placement),O.rects&&(c=O.rects===!0?await s.getElementRects({reference:e,floating:t,strategy:i}):O.rects),{x:u,y:h}=jl(c,d,l)),g=-1)}return{x:u,y:h,placement:d,strategy:i,middlewareData:p}},Ip=e=>({name:"arrow",options:e,async fn(t){const{x:r,y:a,placement:i,rects:n,platform:s,elements:o,middlewareData:l}=t,{element:c,padding:u=0}=ei(e,t)||{};if(c==null)return{};const h=D0(u),d={x:r,y:a},f=So(i),p=Co(f),g=await s.getDimensions(c),m=f==="y",w=m?"top":"left",C=m?"bottom":"right",x=m?"clientHeight":"clientWidth",D=n.reference[p]+n.reference[f]-d[f]-n.floating[p],M=d[f]-n.reference[f],O=await(s.getOffsetParent==null?void 0:s.getOffsetParent(c));let E=O?O[x]:0;(!E||!await(s.isElement==null?void 0:s.isElement(O)))&&(E=o.floating[x]||n.floating[p]);const B=D/2-M/2,R=E/2-g[p]/2-1,H=Jr(h[w],R),z=Jr(h[C],R),L=H,Z=E-g[p]-z,se=E/2-g[p]/2+B,te=Ws(L,se,Z),le=!l.arrow&&ti(i)!=null&&se!==te&&n.reference[p]/2-(se<L?H:z)-g[p]/2<0,re=le?se<L?se-L:se-Z:0;return{[f]:d[f]+re,data:{[f]:te,centerOffset:se-te-re,...le&&{alignmentOffset:re}},reset:le}}}),Pp=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var r,a;const{placement:i,middlewareData:n,rects:s,initialPlacement:o,platform:l,elements:c}=t,{mainAxis:u=!0,crossAxis:h=!0,fallbackPlacements:d,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:p="none",flipAlignment:g=!0,...m}=ei(e,t);if((r=n.arrow)!=null&&r.alignmentOffset)return{};const w=Qr(i),C=Dr(o),x=Qr(o)===o,D=await(l.isRTL==null?void 0:l.isRTL(c.floating)),M=d||(x||!g?[Un(o)]:Ep(o)),O=p!=="none";!d&&O&&M.push(...Sp(o,g,p,D));const E=[o,...M],B=await l.detectOverflow(t,m),R=[];let H=((a=n.flip)==null?void 0:a.overflows)||[];if(u&&R.push(B[w]),h){const se=kp(i,s,D);R.push(B[se[0]],B[se[1]])}if(H=[...H,{placement:i,overflows:R}],!R.every(se=>se<=0)){var z,L;const se=(((z=n.flip)==null?void 0:z.index)||0)+1,te=E[se];if(te&&(!(h==="alignment"?C!==Dr(te):!1)||H.every(Ee=>Dr(Ee.placement)===C?Ee.overflows[0]>0:!0)))return{data:{index:se,overflows:H},reset:{placement:te}};let le=(L=H.filter(re=>re.overflows[0]<=0).sort((re,Ee)=>re.overflows[1]-Ee.overflows[1])[0])==null?void 0:L.placement;if(!le)switch(f){case"bestFit":{var Z;const re=(Z=H.filter(Ee=>{if(O){const W=Dr(Ee.placement);return W===C||W==="y"}return!0}).map(Ee=>[Ee.placement,Ee.overflows.filter(W=>W>0).reduce((W,de)=>W+de,0)]).sort((Ee,W)=>Ee[1]-W[1])[0])==null?void 0:Z[0];re&&(le=re);break}case"initialPlacement":le=o;break}if(i!==le)return{reset:{placement:le}}}return{}}}},Lp=new Set(["left","top"]);async function Np(e,t){const{placement:r,platform:a,elements:i}=e,n=await(a.isRTL==null?void 0:a.isRTL(i.floating)),s=Qr(r),o=ti(r),l=Dr(r)==="y",c=Lp.has(s)?-1:1,u=n&&l?-1:1,h=ei(t,e);let{mainAxis:d,crossAxis:f,alignmentAxis:p}=typeof h=="number"?{mainAxis:h,crossAxis:0,alignmentAxis:null}:{mainAxis:h.mainAxis||0,crossAxis:h.crossAxis||0,alignmentAxis:h.alignmentAxis};return o&&typeof p=="number"&&(f=o==="end"?p*-1:p),l?{x:f*u,y:d*c}:{x:d*c,y:f*u}}const $p=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var r,a;const{x:i,y:n,placement:s,middlewareData:o}=t,l=await Np(t,e);return s===((r=o.offset)==null?void 0:r.placement)&&(a=o.arrow)!=null&&a.alignmentOffset?{}:{x:i+l.x,y:n+l.y,data:{...l,placement:s}}}}},Mp=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:r,y:a,placement:i,platform:n}=t,{mainAxis:s=!0,crossAxis:o=!1,limiter:l={fn:w=>{let{x:C,y:x}=w;return{x:C,y:x}}},...c}=ei(e,t),u={x:r,y:a},h=await n.detectOverflow(t,c),d=Dr(Qr(i)),f=F0(d);let p=u[f],g=u[d];if(s){const w=f==="y"?"top":"left",C=f==="y"?"bottom":"right",x=p+h[w],D=p-h[C];p=Ws(x,p,D)}if(o){const w=d==="y"?"top":"left",C=d==="y"?"bottom":"right",x=g+h[w],D=g-h[C];g=Ws(x,g,D)}const m=l.fn({...t,[f]:p,[d]:g});return{...m,data:{x:m.x-r,y:m.y-a,enabled:{[f]:s,[d]:o}}}}}},Bp=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){var r,a;const{placement:i,rects:n,platform:s,elements:o}=t,{apply:l=()=>{},...c}=ei(e,t),u=await s.detectOverflow(t,c),h=Qr(i),d=ti(i),f=Dr(i)==="y",{width:p,height:g}=n.floating;let m,w;h==="top"||h==="bottom"?(m=h,w=d===(await(s.isRTL==null?void 0:s.isRTL(o.floating))?"start":"end")?"left":"right"):(w=h,m=d==="end"?"top":"bottom");const C=g-u.top-u.bottom,x=p-u.left-u.right,D=Jr(g-u[m],C),M=Jr(p-u[w],x),O=!t.middlewareData.shift;let E=D,B=M;if((r=t.middlewareData.shift)!=null&&r.enabled.x&&(B=x),(a=t.middlewareData.shift)!=null&&a.enabled.y&&(E=C),O&&!d){const H=Bt(u.left,0),z=Bt(u.right,0),L=Bt(u.top,0),Z=Bt(u.bottom,0);f?B=p-2*(H!==0||z!==0?H+z:Bt(u.left,u.right)):E=g-2*(L!==0||Z!==0?L+Z:Bt(u.top,u.bottom))}await l({...t,availableWidth:B,availableHeight:E});const R=await s.getDimensions(o.floating);return p!==R.width||g!==R.height?{reset:{rects:!0}}:{}}}};function ss(){return typeof window<"u"}function ri(e){return O0(e)?(e.nodeName||"").toLowerCase():"#document"}function Vt(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Er(e){var t;return(t=(O0(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function O0(e){return ss()?e instanceof Node||e instanceof Vt(e).Node:!1}function ur(e){return ss()?e instanceof Element||e instanceof Vt(e).Element:!1}function Mr(e){return ss()?e instanceof HTMLElement||e instanceof Vt(e).HTMLElement:!1}function Gl(e){return!ss()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof Vt(e).ShadowRoot}function on(e){const{overflow:t,overflowX:r,overflowY:a,display:i}=hr(e);return/auto|scroll|overlay|hidden|clip/.test(t+a+r)&&i!=="inline"&&i!=="contents"}function zp(e){return/^(table|td|th)$/.test(ri(e))}function os(e){try{if(e.matches(":popover-open"))return!0}catch{}try{return e.matches(":modal")}catch{return!1}}const Up=/transform|translate|scale|rotate|perspective|filter/,Vp=/paint|layout|strict|content/,la=e=>!!e&&e!=="none";let ks;function ls(e){const t=ur(e)?hr(e):e;return la(t.transform)||la(t.translate)||la(t.scale)||la(t.rotate)||la(t.perspective)||!Fo()&&(la(t.backdropFilter)||la(t.filter))||Up.test(t.willChange||"")||Vp.test(t.contain||"")}function Hp(e){let t=ea(e);for(;Mr(t)&&!Ka(t);){if(ls(t))return t;if(os(t))return null;t=ea(t)}return null}function Fo(){return ks==null&&(ks=typeof CSS<"u"&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),ks}function Ka(e){return/^(html|body|#document)$/.test(ri(e))}function hr(e){return Vt(e).getComputedStyle(e)}function cs(e){return ur(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function ea(e){if(ri(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Gl(e)&&e.host||Er(e);return Gl(t)?t.host:t}function R0(e){const t=ea(e);return Ka(t)?e.ownerDocument?e.ownerDocument.body:e.body:Mr(t)&&on(t)?t:R0(t)}function Hi(e,t,r){var a;t===void 0&&(t=[]),r===void 0&&(r=!0);const i=R0(e),n=i===((a=e.ownerDocument)==null?void 0:a.body),s=Vt(i);if(n){const o=Gs(s);return t.concat(s,s.visualViewport||[],on(i)?i:[],o&&r?Hi(o):[])}else return t.concat(i,Hi(i,[],r))}function Gs(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function I0(e){const t=hr(e);let r=parseFloat(t.width)||0,a=parseFloat(t.height)||0;const i=Mr(e),n=i?e.offsetWidth:r,s=i?e.offsetHeight:a,o=zn(r)!==n||zn(a)!==s;return o&&(r=n,a=s),{width:r,height:a,$:o}}function Do(e){return ur(e)?e:e.contextElement}function Va(e){const t=Do(e);if(!Mr(t))return br(1);const r=t.getBoundingClientRect(),{width:a,height:i,$:n}=I0(t);let s=(n?zn(r.width):r.width)/a,o=(n?zn(r.height):r.height)/i;return(!s||!Number.isFinite(s))&&(s=1),(!o||!Number.isFinite(o))&&(o=1),{x:s,y:o}}const Wp=br(0);function P0(e){const t=Vt(e);return!Fo()||!t.visualViewport?Wp:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function jp(e,t,r){return t===void 0&&(t=!1),!r||t&&r!==Vt(e)?!1:t}function ya(e,t,r,a){t===void 0&&(t=!1),r===void 0&&(r=!1);const i=e.getBoundingClientRect(),n=Do(e);let s=br(1);t&&(a?ur(a)&&(s=Va(a)):s=Va(e));const o=jp(n,r,a)?P0(n):br(0);let l=(i.left+o.x)/s.x,c=(i.top+o.y)/s.y,u=i.width/s.x,h=i.height/s.y;if(n){const d=Vt(n),f=a&&ur(a)?Vt(a):a;let p=d,g=Gs(p);for(;g&&a&&f!==p;){const m=Va(g),w=g.getBoundingClientRect(),C=hr(g),x=w.left+(g.clientLeft+parseFloat(C.paddingLeft))*m.x,D=w.top+(g.clientTop+parseFloat(C.paddingTop))*m.y;l*=m.x,c*=m.y,u*=m.x,h*=m.y,l+=x,c+=D,p=Vt(g),g=Gs(p)}}return Vn({width:u,height:h,x:l,y:c})}function us(e,t){const r=cs(e).scrollLeft;return t?t.left+r:ya(Er(e)).left+r}function L0(e,t){const r=e.getBoundingClientRect(),a=r.left+t.scrollLeft-us(e,r),i=r.top+t.scrollTop;return{x:a,y:i}}function Gp(e){let{elements:t,rect:r,offsetParent:a,strategy:i}=e;const n=i==="fixed",s=Er(a),o=t?os(t.floating):!1;if(a===s||o&&n)return r;let l={scrollLeft:0,scrollTop:0},c=br(1);const u=br(0),h=Mr(a);if((h||!h&&!n)&&((ri(a)!=="body"||on(s))&&(l=cs(a)),h)){const f=ya(a);c=Va(a),u.x=f.x+a.clientLeft,u.y=f.y+a.clientTop}const d=s&&!h&&!n?L0(s,l):br(0);return{width:r.width*c.x,height:r.height*c.y,x:r.x*c.x-l.scrollLeft*c.x+u.x+d.x,y:r.y*c.y-l.scrollTop*c.y+u.y+d.y}}function Xp(e){return Array.from(e.getClientRects())}function Kp(e){const t=Er(e),r=cs(e),a=e.ownerDocument.body,i=Bt(t.scrollWidth,t.clientWidth,a.scrollWidth,a.clientWidth),n=Bt(t.scrollHeight,t.clientHeight,a.scrollHeight,a.clientHeight);let s=-r.scrollLeft+us(e);const o=-r.scrollTop;return hr(a).direction==="rtl"&&(s+=Bt(t.clientWidth,a.clientWidth)-i),{width:i,height:n,x:s,y:o}}const Xl=25;function Yp(e,t){const r=Vt(e),a=Er(e),i=r.visualViewport;let n=a.clientWidth,s=a.clientHeight,o=0,l=0;if(i){n=i.width,s=i.height;const u=Fo();(!u||u&&t==="fixed")&&(o=i.offsetLeft,l=i.offsetTop)}const c=us(a);if(c<=0){const u=a.ownerDocument,h=u.body,d=getComputedStyle(h),f=u.compatMode==="CSS1Compat"&&parseFloat(d.marginLeft)+parseFloat(d.marginRight)||0,p=Math.abs(a.clientWidth-h.clientWidth-f);p<=Xl&&(n-=p)}else c<=Xl&&(n+=c);return{width:n,height:s,x:o,y:l}}function qp(e,t){const r=ya(e,!0,t==="fixed"),a=r.top+e.clientTop,i=r.left+e.clientLeft,n=Mr(e)?Va(e):br(1),s=e.clientWidth*n.x,o=e.clientHeight*n.y,l=i*n.x,c=a*n.y;return{width:s,height:o,x:l,y:c}}function Kl(e,t,r){let a;if(t==="viewport")a=Yp(e,r);else if(t==="document")a=Kp(Er(e));else if(ur(t))a=qp(t,r);else{const i=P0(e);a={x:t.x-i.x,y:t.y-i.y,width:t.width,height:t.height}}return Vn(a)}function N0(e,t){const r=ea(e);return r===t||!ur(r)||Ka(r)?!1:hr(r).position==="fixed"||N0(r,t)}function Zp(e,t){const r=t.get(e);if(r)return r;let a=Hi(e,[],!1).filter(o=>ur(o)&&ri(o)!=="body"),i=null;const n=hr(e).position==="fixed";let s=n?ea(e):e;for(;ur(s)&&!Ka(s);){const o=hr(s),l=ls(s);!l&&o.position==="fixed"&&(i=null),(n?!l&&!i:!l&&o.position==="static"&&!!i&&(i.position==="absolute"||i.position==="fixed")||on(s)&&!l&&N0(e,s))?a=a.filter(u=>u!==s):i=o,s=ea(s)}return t.set(e,a),a}function Jp(e){let{element:t,boundary:r,rootBoundary:a,strategy:i}=e;const s=[...r==="clippingAncestors"?os(t)?[]:Zp(t,this._c):[].concat(r),a],o=Kl(t,s[0],i);let l=o.top,c=o.right,u=o.bottom,h=o.left;for(let d=1;d<s.length;d++){const f=Kl(t,s[d],i);l=Bt(f.top,l),c=Jr(f.right,c),u=Jr(f.bottom,u),h=Bt(f.left,h)}return{width:c-h,height:u-l,x:h,y:l}}function Qp(e){const{width:t,height:r}=I0(e);return{width:t,height:r}}function eg(e,t,r){const a=Mr(t),i=Er(t),n=r==="fixed",s=ya(e,!0,n,t);let o={scrollLeft:0,scrollTop:0};const l=br(0);function c(){l.x=us(i)}if(a||!a&&!n)if((ri(t)!=="body"||on(i))&&(o=cs(t)),a){const f=ya(t,!0,n,t);l.x=f.x+t.clientLeft,l.y=f.y+t.clientTop}else i&&c();n&&!a&&i&&c();const u=i&&!a&&!n?L0(i,o):br(0),h=s.left+o.scrollLeft-l.x-u.x,d=s.top+o.scrollTop-l.y-u.y;return{x:h,y:d,width:s.width,height:s.height}}function Es(e){return hr(e).position==="static"}function Yl(e,t){if(!Mr(e)||hr(e).position==="fixed")return null;if(t)return t(e);let r=e.offsetParent;return Er(e)===r&&(r=r.ownerDocument.body),r}function $0(e,t){const r=Vt(e);if(os(e))return r;if(!Mr(e)){let i=ea(e);for(;i&&!Ka(i);){if(ur(i)&&!Es(i))return i;i=ea(i)}return r}let a=Yl(e,t);for(;a&&zp(a)&&Es(a);)a=Yl(a,t);return a&&Ka(a)&&Es(a)&&!ls(a)?r:a||Hp(e)||r}const tg=async function(e){const t=this.getOffsetParent||$0,r=this.getDimensions,a=await r(e.floating);return{reference:eg(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:a.width,height:a.height}}};function rg(e){return hr(e).direction==="rtl"}const Pn={convertOffsetParentRelativeRectToViewportRelativeRect:Gp,getDocumentElement:Er,getClippingRect:Jp,getOffsetParent:$0,getElementRects:tg,getClientRects:Xp,getDimensions:Qp,getScale:Va,isElement:ur,isRTL:rg};function M0(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function ag(e,t){let r=null,a;const i=Er(e);function n(){var o;clearTimeout(a),(o=r)==null||o.disconnect(),r=null}function s(o,l){o===void 0&&(o=!1),l===void 0&&(l=1),n();const c=e.getBoundingClientRect(),{left:u,top:h,width:d,height:f}=c;if(o||t(),!d||!f)return;const p=bn(h),g=bn(i.clientWidth-(u+d)),m=bn(i.clientHeight-(h+f)),w=bn(u),x={rootMargin:-p+"px "+-g+"px "+-m+"px "+-w+"px",threshold:Bt(0,Jr(1,l))||1};let D=!0;function M(O){const E=O[0].intersectionRatio;if(E!==l){if(!D)return s();E?s(!1,E):a=setTimeout(()=>{s(!1,1e-7)},1e3)}E===1&&!M0(c,e.getBoundingClientRect())&&s(),D=!1}try{r=new IntersectionObserver(M,{...x,root:i.ownerDocument})}catch{r=new IntersectionObserver(M,x)}r.observe(e)}return s(!0),n}function ig(e,t,r,a){a===void 0&&(a={});const{ancestorScroll:i=!0,ancestorResize:n=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:o=typeof IntersectionObserver=="function",animationFrame:l=!1}=a,c=Do(e),u=i||n?[...c?Hi(c):[],...t?Hi(t):[]]:[];u.forEach(w=>{i&&w.addEventListener("scroll",r,{passive:!0}),n&&w.addEventListener("resize",r)});const h=c&&o?ag(c,r):null;let d=-1,f=null;s&&(f=new ResizeObserver(w=>{let[C]=w;C&&C.target===c&&f&&t&&(f.unobserve(t),cancelAnimationFrame(d),d=requestAnimationFrame(()=>{var x;(x=f)==null||x.observe(t)})),r()}),c&&!l&&f.observe(c),t&&f.observe(t));let p,g=l?ya(e):null;l&&m();function m(){const w=ya(e);g&&!M0(g,w)&&r(),g=w,p=requestAnimationFrame(m)}return r(),()=>{var w;u.forEach(C=>{i&&C.removeEventListener("scroll",r),n&&C.removeEventListener("resize",r)}),h?.(),(w=f)==null||w.disconnect(),f=null,l&&cancelAnimationFrame(p)}}const ng=$p,sg=Mp,og=Pp,ql=Bp,lg=Ip,cg=(e,t,r)=>{const a=new Map,i={platform:Pn,...r},n={...i.platform,_c:a};return Rp(e,t,{...i,platform:n})};function ug(e){return hg(e)}function Ts(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}function hg(e){for(let t=e;t;t=Ts(t))if(t instanceof Element&&getComputedStyle(t).display==="none")return null;for(let t=Ts(e);t;t=Ts(t)){if(!(t instanceof Element))continue;const r=getComputedStyle(t);if(r.display!=="contents"&&(r.position!=="static"||ls(r)||t.tagName==="BODY"))return t}return null}function fg(e){return e!==null&&typeof e=="object"&&"getBoundingClientRect"in e&&("contextElement"in e?e.contextElement instanceof Element:!0)}var ze=class extends $e{constructor(){super(...arguments),this.localize=new er(this),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect(),r=this.placement.includes("top")||this.placement.includes("bottom");let a=0,i=0,n=0,s=0,o=0,l=0,c=0,u=0;r?e.top<t.top?(a=e.left,i=e.bottom,n=e.right,s=e.bottom,o=t.left,l=t.top,c=t.right,u=t.top):(a=t.left,i=t.bottom,n=t.right,s=t.bottom,o=e.left,l=e.top,c=e.right,u=e.top):e.left<t.left?(a=e.right,i=e.top,n=t.left,s=t.top,o=e.right,l=e.bottom,c=t.left,u=t.bottom):(a=t.right,i=t.top,n=e.left,s=e.top,o=t.right,l=t.bottom,c=e.left,u=e.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${a}px`),this.style.setProperty("--hover-bridge-top-left-y",`${i}px`),this.style.setProperty("--hover-bridge-top-right-x",`${n}px`),this.style.setProperty("--hover-bridge-top-right-y",`${s}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${o}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${l}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${c}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${u}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has("active")&&(this.active?this.start():this.stop()),e.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else this.anchor instanceof Element||fg(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){!this.anchorEl||!this.active||(this.cleanup=ig(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>e())):e()})}reposition(){if(!this.active||!this.anchorEl)return;const e=[ng({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push(ql({apply:({rects:r})=>{const a=this.sync==="width"||this.sync==="both",i=this.sync==="height"||this.sync==="both";this.popup.style.width=a?`${r.reference.width}px`:"",this.popup.style.height=i?`${r.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&e.push(og({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&e.push(sg({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?e.push(ql({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:r,availableHeight:a})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${a}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${r}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&e.push(lg({element:this.arrowEl,padding:this.arrowPadding}));const t=this.strategy==="absolute"?r=>Pn.getOffsetParent(r,ug):Pn.getOffsetParent;cg(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:this.strategy,platform:rs(aa({},Pn),{getOffsetParent:t})}).then(({x:r,y:a,middlewareData:i,placement:n})=>{const s=this.localize.dir()==="rtl",o={top:"bottom",right:"left",bottom:"top",left:"right"}[n.split("-")[0]];if(this.setAttribute("data-current-placement",n),Object.assign(this.popup.style,{left:`${r}px`,top:`${a}px`}),this.arrow){const l=i.arrow.x,c=i.arrow.y;let u="",h="",d="",f="";if(this.arrowPlacement==="start"){const p=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";u=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",h=s?p:"",f=s?"":p}else if(this.arrowPlacement==="end"){const p=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";h=s?"":p,f=s?p:"",d=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(f=typeof l=="number"?"calc(50% - var(--arrow-size-diagonal))":"",u=typeof c=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(f=typeof l=="number"?`${l}px`:"",u=typeof c=="number"?`${c}px`:"");Object.assign(this.arrowEl.style,{top:u,right:h,bottom:d,left:f,[o]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return K`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${Le({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${Le({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?K`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};ze.styles=[Ve,yp];y([me(".popup")],ze.prototype,"popup",2);y([me(".popup__arrow")],ze.prototype,"arrowEl",2);y([I()],ze.prototype,"anchor",2);y([I({type:Boolean,reflect:!0})],ze.prototype,"active",2);y([I({reflect:!0})],ze.prototype,"placement",2);y([I({reflect:!0})],ze.prototype,"strategy",2);y([I({type:Number})],ze.prototype,"distance",2);y([I({type:Number})],ze.prototype,"skidding",2);y([I({type:Boolean})],ze.prototype,"arrow",2);y([I({attribute:"arrow-placement"})],ze.prototype,"arrowPlacement",2);y([I({attribute:"arrow-padding",type:Number})],ze.prototype,"arrowPadding",2);y([I({type:Boolean})],ze.prototype,"flip",2);y([I({attribute:"flip-fallback-placements",converter:{fromAttribute:e=>e.split(" ").map(t=>t.trim()).filter(t=>t!==""),toAttribute:e=>e.join(" ")}})],ze.prototype,"flipFallbackPlacements",2);y([I({attribute:"flip-fallback-strategy"})],ze.prototype,"flipFallbackStrategy",2);y([I({type:Object})],ze.prototype,"flipBoundary",2);y([I({attribute:"flip-padding",type:Number})],ze.prototype,"flipPadding",2);y([I({type:Boolean})],ze.prototype,"shift",2);y([I({type:Object})],ze.prototype,"shiftBoundary",2);y([I({attribute:"shift-padding",type:Number})],ze.prototype,"shiftPadding",2);y([I({attribute:"auto-size"})],ze.prototype,"autoSize",2);y([I()],ze.prototype,"sync",2);y([I({type:Object})],ze.prototype,"autoSizeBoundary",2);y([I({attribute:"auto-size-padding",type:Number})],ze.prototype,"autoSizePadding",2);y([I({attribute:"hover-bridge",type:Boolean})],ze.prototype,"hoverBridge",2);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Xs extends vo{constructor(t){if(super(t),this.it=Ge,t.type!==Hr.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===Ge||t==null)return this._t=void 0,this.it=t;if(t===Zt)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const r=[t];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}}Xs.directiveName="unsafeHTML",Xs.resultType=1;const dg=mo(Xs);var Ce=class extends $e{constructor(){super(...arguments),this.formControlController=new Ja(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new yr(this,"help-text","label"),this.localize=new er(this),this.typeToSelectString="",this.hasFocus=!1,this.displayLabel="",this.selectedOptions=[],this.valueHasChanged=!1,this.name="",this._value="",this.defaultValue="",this.size="medium",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.clearable=!1,this.open=!1,this.hoist=!1,this.filled=!1,this.pill=!1,this.label="",this.placement="bottom",this.helpText="",this.form="",this.required=!1,this.getTag=e=>K`
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
    `,this.handleDocumentFocusIn=e=>{const t=e.composedPath();this&&!t.includes(this)&&this.hide()},this.handleDocumentKeyDown=e=>{const t=e.target,r=t.closest(".select__clear")!==null,a=t.closest("sl-icon-button")!==null;if(!(r||a)){if(e.key==="Escape"&&this.open&&!this.closeWatcher&&(e.preventDefault(),e.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),e.key==="Enter"||e.key===" "&&this.typeToSelectString===""){if(e.preventDefault(),e.stopImmediatePropagation(),!this.open){this.show();return}this.currentOption&&!this.currentOption.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})));return}if(["ArrowUp","ArrowDown","Home","End"].includes(e.key)){const i=this.getAllOptions(),n=i.indexOf(this.currentOption);let s=Math.max(0,n);if(e.preventDefault(),!this.open&&(this.show(),this.currentOption))return;e.key==="ArrowDown"?(s=n+1,s>i.length-1&&(s=0)):e.key==="ArrowUp"?(s=n-1,s<0&&(s=i.length-1)):e.key==="Home"?s=0:e.key==="End"&&(s=i.length-1),this.setCurrentOption(i[s])}if(e.key&&e.key.length===1||e.key==="Backspace"){const i=this.getAllOptions();if(e.metaKey||e.ctrlKey||e.altKey)return;if(!this.open){if(e.key==="Backspace")return;this.show()}e.stopPropagation(),e.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),e.key==="Backspace"?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=e.key.toLowerCase();for(const n of i)if(n.getTextLabel().toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(n);break}}}},this.handleDocumentMouseDown=e=>{const t=e.composedPath();this&&!t.includes(this)&&this.hide()}}get value(){return this._value}set value(e){this.multiple?e=Array.isArray(e)?e:e.split(" "):e=Array.isArray(e)?e.join(" "):e,this._value!==e&&(this.valueHasChanged=!0,this._value=e)}get validity(){return this.valueInput.validity}get validationMessage(){return this.valueInput.validationMessage}connectedCallback(){super.connectedCallback(),setTimeout(()=>{this.handleDefaultSlotChange()}),this.open=!1}addOpenListeners(){var e;document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().addEventListener("focusin",this.handleDocumentFocusIn),"CloseWatcher"in window&&((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.open&&(this.hide(),this.displayInput.focus({preventScroll:!0}))})}removeOpenListeners(){var e;document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().removeEventListener("focusin",this.handleDocumentFocusIn),(e=this.closeWatcher)==null||e.destroy()}handleFocus(){this.hasFocus=!0,this.displayInput.setSelectionRange(0,0),this.emit("sl-focus")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleLabelClick(){this.displayInput.focus()}handleComboboxMouseDown(e){const r=e.composedPath().some(a=>a instanceof Element&&a.tagName.toLowerCase()==="sl-icon-button");this.disabled||r||(e.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(e){e.key!=="Tab"&&(e.stopPropagation(),this.handleDocumentKeyDown(e))}handleClearClick(e){e.stopPropagation(),this.valueHasChanged=!0,this.value!==""&&(this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")}))}handleClearMouseDown(e){e.stopPropagation(),e.preventDefault()}handleOptionClick(e){const r=e.target.closest("sl-option"),a=this.value;r&&!r.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(r):this.setSelectedOptions(r),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.value!==a&&this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){customElements.get("sl-option")||customElements.whenDefined("sl-option").then(()=>this.handleDefaultSlotChange());const e=this.getAllOptions(),t=this.valueHasChanged?this.value:this.defaultValue,r=Array.isArray(t)?t:[t],a=[];e.forEach(i=>a.push(i.value)),this.setSelectedOptions(e.filter(i=>r.includes(i.value)))}handleTagRemove(e,t){e.stopPropagation(),this.valueHasChanged=!0,this.disabled||(this.toggleOptionSelection(t,!1),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}))}getAllOptions(){return[...this.querySelectorAll("sl-option")]}getFirstOption(){return this.querySelector("sl-option")}setCurrentOption(e){this.getAllOptions().forEach(r=>{r.current=!1,r.tabIndex=-1}),e&&(this.currentOption=e,e.current=!0,e.tabIndex=0,e.focus())}setSelectedOptions(e){const t=this.getAllOptions(),r=Array.isArray(e)?e:[e];t.forEach(a=>a.selected=!1),r.length&&r.forEach(a=>a.selected=!0),this.selectionChanged()}toggleOptionSelection(e,t){t===!0||t===!1?e.selected=t:e.selected=!e.selected,this.selectionChanged()}selectionChanged(){var e,t,r;const a=this.getAllOptions();this.selectedOptions=a.filter(n=>n.selected);const i=this.valueHasChanged;if(this.multiple)this.value=this.selectedOptions.map(n=>n.value),this.placeholder&&this.value.length===0?this.displayLabel="":this.displayLabel=this.localize.term("numOptionsSelected",this.selectedOptions.length);else{const n=this.selectedOptions[0];this.value=(e=n?.value)!=null?e:"",this.displayLabel=(r=(t=n?.getTextLabel)==null?void 0:t.call(n))!=null?r:""}this.valueHasChanged=i,this.updateComplete.then(()=>{this.formControlController.updateValidity()})}get tags(){return this.selectedOptions.map((e,t)=>{if(t<this.maxOptionsVisible||this.maxOptionsVisible<=0){const r=this.getTag(e,t);return K`<div @sl-remove=${a=>this.handleTagRemove(a,e)}>
          ${typeof r=="string"?dg(r):r}
        </div>`}else if(t===this.maxOptionsVisible)return K`<sl-tag size=${this.size}>+${this.selectedOptions.length-t}</sl-tag>`;return K``})}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleDisabledChange(){this.disabled&&(this.open=!1,this.handleOpenChange())}attributeChangedCallback(e,t,r){if(super.attributeChangedCallback(e,t,r),e==="value"){const a=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=a}}handleValueChange(){if(!this.valueHasChanged){const r=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=r}const e=this.getAllOptions(),t=Array.isArray(this.value)?this.value:[this.value];this.setSelectedOptions(e.filter(r=>t.includes(r.value)))}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption()),this.emit("sl-show"),this.addOpenListeners(),await Jt(this),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)});const{keyframes:e,options:t}=Nt(this,"select.show",{dir:this.localize.dir()});await $t(this.popup.popup,e,t),this.currentOption&&zs(this.currentOption,this.listbox,"vertical","auto"),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await Jt(this);const{keyframes:e,options:t}=Nt(this,"select.hide",{dir:this.localize.dir()});await $t(this.popup.popup,e,t),this.listbox.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,Zr(this,"sl-after-show")}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,Zr(this,"sl-after-hide")}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(e){this.valueInput.setCustomValidity(e),this.formControlController.updateValidity()}focus(e){this.displayInput.focus(e)}blur(){this.displayInput.blur()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),r=this.label?!0:!!e,a=this.helpText?!0:!!t,i=this.clearable&&!this.disabled&&this.value.length>0,n=this.placeholder&&this.value&&this.value.length<=0;return K`
      <div
        part="form-control"
        class=${Le({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":r,"form-control--has-help-text":a})}
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
            class=${Le({select:!0,"select--standard":!0,"select--filled":this.filled,"select--pill":this.pill,"select--open":this.open,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--focused":this.hasFocus,"select--placeholder-visible":n,"select--top":this.placement==="top","select--bottom":this.placement==="bottom","select--small":this.size==="small","select--medium":this.size==="medium","select--large":this.size==="large"})}
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

              ${this.multiple?K`<div part="tags" class="select__tags">${this.tags}</div>`:""}

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

              ${i?K`
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
    `}};Ce.styles=[Ve,tn,wp];Ce.dependencies={"sl-icon":It,"sl-popup":ze,"sl-tag":Da};y([me(".select")],Ce.prototype,"popup",2);y([me(".select__combobox")],Ce.prototype,"combobox",2);y([me(".select__display-input")],Ce.prototype,"displayInput",2);y([me(".select__value-input")],Ce.prototype,"valueInput",2);y([me(".select__listbox")],Ce.prototype,"listbox",2);y([fe()],Ce.prototype,"hasFocus",2);y([fe()],Ce.prototype,"displayLabel",2);y([fe()],Ce.prototype,"currentOption",2);y([fe()],Ce.prototype,"selectedOptions",2);y([fe()],Ce.prototype,"valueHasChanged",2);y([I()],Ce.prototype,"name",2);y([fe()],Ce.prototype,"value",1);y([I({attribute:"value"})],Ce.prototype,"defaultValue",2);y([I({reflect:!0})],Ce.prototype,"size",2);y([I()],Ce.prototype,"placeholder",2);y([I({type:Boolean,reflect:!0})],Ce.prototype,"multiple",2);y([I({attribute:"max-options-visible",type:Number})],Ce.prototype,"maxOptionsVisible",2);y([I({type:Boolean,reflect:!0})],Ce.prototype,"disabled",2);y([I({type:Boolean})],Ce.prototype,"clearable",2);y([I({type:Boolean,reflect:!0})],Ce.prototype,"open",2);y([I({type:Boolean})],Ce.prototype,"hoist",2);y([I({type:Boolean,reflect:!0})],Ce.prototype,"filled",2);y([I({type:Boolean,reflect:!0})],Ce.prototype,"pill",2);y([I()],Ce.prototype,"label",2);y([I({reflect:!0})],Ce.prototype,"placement",2);y([I({attribute:"help-text"})],Ce.prototype,"helpText",2);y([I({reflect:!0})],Ce.prototype,"form",2);y([I({type:Boolean,reflect:!0})],Ce.prototype,"required",2);y([I()],Ce.prototype,"getTag",2);y([Re("disabled",{waitUntilFirstUpdate:!0})],Ce.prototype,"handleDisabledChange",1);y([Re(["defaultValue","value"],{waitUntilFirstUpdate:!0})],Ce.prototype,"handleValueChange",1);y([Re("open",{waitUntilFirstUpdate:!0})],Ce.prototype,"handleOpenChange",1);at("select.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});at("select.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});Ce.define("sl-select");var pg=ye`
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
`,tr=class extends $e{constructor(){super(...arguments),this.localize=new er(this),this.isInitialized=!1,this.current=!1,this.selected=!1,this.hasHover=!1,this.value="",this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false")}handleDefaultSlotChange(){this.isInitialized?customElements.whenDefined("sl-select").then(()=>{const e=this.closest("sl-select");e&&e.handleDefaultSlotChange()}):this.isInitialized=!0}handleMouseEnter(){this.hasHover=!0}handleMouseLeave(){this.hasHover=!1}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleValueChange(){typeof this.value!="string"&&(this.value=String(this.value)),this.value.includes(" ")&&(console.error("Option values cannot include a space. All spaces have been replaced with underscores.",this),this.value=this.value.replace(/ /g,"_"))}getTextLabel(){const e=this.childNodes;let t="";return[...e].forEach(r=>{r.nodeType===Node.ELEMENT_NODE&&(r.hasAttribute("slot")||(t+=r.textContent)),r.nodeType===Node.TEXT_NODE&&(t+=r.textContent)}),t.trim()}render(){return K`
      <div
        part="base"
        class=${Le({option:!0,"option--current":this.current,"option--disabled":this.disabled,"option--selected":this.selected,"option--hover":this.hasHover})}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <sl-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></sl-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `}};tr.styles=[Ve,pg];tr.dependencies={"sl-icon":It};y([me(".option__label")],tr.prototype,"defaultSlot",2);y([fe()],tr.prototype,"current",2);y([fe()],tr.prototype,"selected",2);y([fe()],tr.prototype,"hasHover",2);y([I({reflect:!0})],tr.prototype,"value",2);y([I({type:Boolean,reflect:!0})],tr.prototype,"disabled",2);y([Re("disabled")],tr.prototype,"handleDisabledChange",1);y([Re("selected")],tr.prototype,"handleSelectedChange",1);y([Re("value")],tr.prototype,"handleValueChange",1);tr.define("sl-option");var gg=ye`
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
`,jt=class ca extends $e{constructor(){super(...arguments),this.hasSlotController=new yr(this,"icon","suffix"),this.localize=new er(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0,this.remainingTime=this.duration}static get toastStack(){return this.currentToastStack||(this.currentToastStack=Object.assign(document.createElement("div"),{className:"sl-toast-stack"})),this.currentToastStack}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){this.handleCountdownChange(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration),this.remainingTime=this.duration,this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100))}pauseAutoHide(){var t;(t=this.countdownAnimation)==null||t.pause(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval)}resumeAutoHide(){var t;this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.remainingTime),this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100),(t=this.countdownAnimation)==null||t.play())}handleCountdownChange(){if(this.open&&this.duration<1/0&&this.countdown){const{countdownElement:t}=this,r="100%",a="0";this.countdownAnimation=t.animate([{width:r},{width:a}],{duration:this.duration,easing:"linear"})}}handleCloseClick(){this.hide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await Jt(this.base),this.base.hidden=!1;const{keyframes:t,options:r}=Nt(this,"alert.show",{dir:this.localize.dir()});await $t(this.base,t,r),this.emit("sl-after-show")}else{go(this),this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),await Jt(this.base);const{keyframes:t,options:r}=Nt(this,"alert.hide",{dir:this.localize.dir()});await $t(this.base,t,r),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,Zr(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Zr(this,"sl-after-hide")}async toast(){return new Promise(t=>{this.handleCountdownChange(),ca.toastStack.parentElement===null&&document.body.append(ca.toastStack),ca.toastStack.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("sl-after-hide",()=>{ca.toastStack.removeChild(this),t(),ca.toastStack.querySelector("sl-alert")===null&&ca.toastStack.remove()},{once:!0})})}render(){return K`
      <div
        part="base"
        class=${Le({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-countdown":!!this.countdown,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":this.variant==="primary","alert--success":this.variant==="success","alert--neutral":this.variant==="neutral","alert--warning":this.variant==="warning","alert--danger":this.variant==="danger"})}
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

        ${this.closable?K`
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

        ${this.countdown?K`
              <div
                class=${Le({alert__countdown:!0,"alert__countdown--ltr":this.countdown==="ltr"})}
              >
                <div class="alert__countdown-elapsed"></div>
              </div>
            `:""}
      </div>
    `}};jt.styles=[Ve,gg];jt.dependencies={"sl-icon-button":lt};y([me('[part~="base"]')],jt.prototype,"base",2);y([me(".alert__countdown-elapsed")],jt.prototype,"countdownElement",2);y([I({type:Boolean,reflect:!0})],jt.prototype,"open",2);y([I({type:Boolean,reflect:!0})],jt.prototype,"closable",2);y([I({reflect:!0})],jt.prototype,"variant",2);y([I({type:Number})],jt.prototype,"duration",2);y([I({type:String,reflect:!0})],jt.prototype,"countdown",2);y([fe()],jt.prototype,"remainingTime",2);y([Re("open",{waitUntilFirstUpdate:!0})],jt.prototype,"handleOpenChange",1);y([Re("duration")],jt.prototype,"handleDurationChange",1);var mg=jt;at("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});at("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});mg.define("sl-alert");/*! xlsx.js (C) 2013-present SheetJS -- http://sheetjs.com */var B0=1252,vg=[874,932,936,949,950,1250,1251,1252,1253,1254,1255,1256,1257,1258,1e4],Oo={0:1252,1:65001,2:65001,77:1e4,128:932,129:949,130:1361,134:936,136:950,161:1253,162:1254,163:1258,177:1255,178:1256,186:1257,204:1251,222:874,238:1250,255:1252,69:6969},Ro=function(e){vg.indexOf(e)!=-1&&(B0=Oo[0]=e)};function xg(){Ro(1252)}var or=function(e){Ro(e)};function z0(){or(1200),xg()}function Zl(e){for(var t=[],r=0,a=e.length;r<a;++r)t[r]=e.charCodeAt(r);return t}function bg(e){for(var t=[],r=0;r<e.length>>1;++r)t[r]=String.fromCharCode(e.charCodeAt(2*r)+(e.charCodeAt(2*r+1)<<8));return t.join("")}function U0(e){for(var t=[],r=0;r<e.length>>1;++r)t[r]=String.fromCharCode(e.charCodeAt(2*r+1)+(e.charCodeAt(2*r)<<8));return t.join("")}var bi=function(e){var t=e.charCodeAt(0),r=e.charCodeAt(1);return t==255&&r==254?bg(e.slice(2)):t==254&&r==255?U0(e.slice(2)):t==65279?e.slice(1):e},wn=function(t){return String.fromCharCode(t)},Jl=function(t){return String.fromCharCode(t)},Wi,Xr="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function Ql(e){for(var t="",r=0,a=0,i=0,n=0,s=0,o=0,l=0,c=0;c<e.length;)r=e.charCodeAt(c++),n=r>>2,a=e.charCodeAt(c++),s=(r&3)<<4|a>>4,i=e.charCodeAt(c++),o=(a&15)<<2|i>>6,l=i&63,isNaN(a)?o=l=64:isNaN(i)&&(l=64),t+=Xr.charAt(n)+Xr.charAt(s)+Xr.charAt(o)+Xr.charAt(l);return t}function Ht(e){var t="",r=0,a=0,i=0,n=0,s=0,o=0,l=0;e=e.replace(/[^\w\+\/\=]/g,"");for(var c=0;c<e.length;)n=Xr.indexOf(e.charAt(c++)),s=Xr.indexOf(e.charAt(c++)),r=n<<2|s>>4,t+=String.fromCharCode(r),o=Xr.indexOf(e.charAt(c++)),a=(s&15)<<4|o>>2,o!==64&&(t+=String.fromCharCode(a)),l=Xr.indexOf(e.charAt(c++)),i=(o&3)<<6|l,l!==64&&(t+=String.fromCharCode(i));return t}var Ae=function(){return typeof Buffer<"u"&&typeof process<"u"&&typeof process.versions<"u"&&!!process.versions.node}(),Oa=function(){if(typeof Buffer<"u"){var e=!Buffer.from;if(!e)try{Buffer.from("foo","utf8")}catch{e=!0}return e?function(t,r){return r?new Buffer(t,r):new Buffer(t)}:Buffer.from.bind(Buffer)}return function(){}}();function ta(e){return Ae?Buffer.alloc?Buffer.alloc(e):new Buffer(e):typeof Uint8Array<"u"?new Uint8Array(e):new Array(e)}function ec(e){return Ae?Buffer.allocUnsafe?Buffer.allocUnsafe(e):new Buffer(e):typeof Uint8Array<"u"?new Uint8Array(e):new Array(e)}var sr=function(t){return Ae?Oa(t,"binary"):t.split("").map(function(r){return r.charCodeAt(0)&255})};function Ra(e){if(Array.isArray(e))return e.map(function(a){return String.fromCharCode(a)}).join("");for(var t=[],r=0;r<e.length;++r)t[r]=String.fromCharCode(e[r]);return t.join("")}function Io(e){if(typeof ArrayBuffer>"u")throw new Error("Unsupported");if(e instanceof ArrayBuffer)return Io(new Uint8Array(e));for(var t=new Array(e.length),r=0;r<e.length;++r)t[r]=e[r];return t}var Gr=Ae?function(e){return Buffer.concat(e.map(function(t){return Buffer.isBuffer(t)?t:Oa(t)}))}:function(e){if(typeof Uint8Array<"u"){var t=0,r=0;for(t=0;t<e.length;++t)r+=e[t].length;var a=new Uint8Array(r),i=0;for(t=0,r=0;t<e.length;r+=i,++t)if(i=e[t].length,e[t]instanceof Uint8Array)a.set(e[t],r);else{if(typeof e[t]=="string")throw"wtf";a.set(new Uint8Array(e[t]),r)}return a}return[].concat.apply([],e.map(function(n){return Array.isArray(n)?n:[].slice.call(n)}))};function wg(e){for(var t=[],r=0,a=e.length+250,i=ta(e.length+255),n=0;n<e.length;++n){var s=e.charCodeAt(n);if(s<128)i[r++]=s;else if(s<2048)i[r++]=192|s>>6&31,i[r++]=128|s&63;else if(s>=55296&&s<57344){s=(s&1023)+64;var o=e.charCodeAt(++n)&1023;i[r++]=240|s>>8&7,i[r++]=128|s>>2&63,i[r++]=128|o>>6&15|(s&3)<<4,i[r++]=128|o&63}else i[r++]=224|s>>12&15,i[r++]=128|s>>6&63,i[r++]=128|s&63;r>a&&(t.push(i.slice(0,r)),r=0,i=ta(65535),a=65530)}return t.push(i.slice(0,r)),Gr(t)}var Dt=/\u0000/g,wi=/[\u0001-\u0006]/g;function Ha(e){for(var t="",r=e.length-1;r>=0;)t+=e.charAt(r--);return t}function lr(e,t){var r=""+e;return r.length>=t?r:je("0",t-r.length)+r}function Po(e,t){var r=""+e;return r.length>=t?r:je(" ",t-r.length)+r}function Hn(e,t){var r=""+e;return r.length>=t?r:r+je(" ",t-r.length)}function yg(e,t){var r=""+Math.round(e);return r.length>=t?r:je("0",t-r.length)+r}function _g(e,t){var r=""+e;return r.length>=t?r:je("0",t-r.length)+r}var tc=Math.pow(2,32);function $a(e,t){if(e>tc||e<-tc)return yg(e,t);var r=Math.round(e);return _g(r,t)}function Wn(e,t){return t=t||0,e.length>=7+t&&(e.charCodeAt(t)|32)===103&&(e.charCodeAt(t+1)|32)===101&&(e.charCodeAt(t+2)|32)===110&&(e.charCodeAt(t+3)|32)===101&&(e.charCodeAt(t+4)|32)===114&&(e.charCodeAt(t+5)|32)===97&&(e.charCodeAt(t+6)|32)===108}var rc=[["Sun","Sunday"],["Mon","Monday"],["Tue","Tuesday"],["Wed","Wednesday"],["Thu","Thursday"],["Fri","Friday"],["Sat","Saturday"]],As=[["J","Jan","January"],["F","Feb","February"],["M","Mar","March"],["A","Apr","April"],["M","May","May"],["J","Jun","June"],["J","Jul","July"],["A","Aug","August"],["S","Sep","September"],["O","Oct","October"],["N","Nov","November"],["D","Dec","December"]];function kg(e){return e||(e={}),e[0]="General",e[1]="0",e[2]="0.00",e[3]="#,##0",e[4]="#,##0.00",e[9]="0%",e[10]="0.00%",e[11]="0.00E+00",e[12]="# ?/?",e[13]="# ??/??",e[14]="m/d/yy",e[15]="d-mmm-yy",e[16]="d-mmm",e[17]="mmm-yy",e[18]="h:mm AM/PM",e[19]="h:mm:ss AM/PM",e[20]="h:mm",e[21]="h:mm:ss",e[22]="m/d/yy h:mm",e[37]="#,##0 ;(#,##0)",e[38]="#,##0 ;[Red](#,##0)",e[39]="#,##0.00;(#,##0.00)",e[40]="#,##0.00;[Red](#,##0.00)",e[45]="mm:ss",e[46]="[h]:mm:ss",e[47]="mmss.0",e[48]="##0.0E+0",e[49]="@",e[56]='"上午/下午 "hh"時"mm"分"ss"秒 "',e}var we={0:"General",1:"0",2:"0.00",3:"#,##0",4:"#,##0.00",9:"0%",10:"0.00%",11:"0.00E+00",12:"# ?/?",13:"# ??/??",14:"m/d/yy",15:"d-mmm-yy",16:"d-mmm",17:"mmm-yy",18:"h:mm AM/PM",19:"h:mm:ss AM/PM",20:"h:mm",21:"h:mm:ss",22:"m/d/yy h:mm",37:"#,##0 ;(#,##0)",38:"#,##0 ;[Red](#,##0)",39:"#,##0.00;(#,##0.00)",40:"#,##0.00;[Red](#,##0.00)",45:"mm:ss",46:"[h]:mm:ss",47:"mmss.0",48:"##0.0E+0",49:"@",56:'"上午/下午 "hh"時"mm"分"ss"秒 "'},ac={5:37,6:38,7:39,8:40,23:0,24:0,25:0,26:0,27:14,28:14,29:14,30:14,31:14,50:14,51:14,52:14,53:14,54:14,55:14,56:14,57:14,58:14,59:1,60:2,61:3,62:4,67:9,68:10,69:12,70:13,71:14,72:14,73:15,74:16,75:17,76:20,77:21,78:22,79:45,80:46,81:47,82:0},Eg={5:'"$"#,##0_);\\("$"#,##0\\)',63:'"$"#,##0_);\\("$"#,##0\\)',6:'"$"#,##0_);[Red]\\("$"#,##0\\)',64:'"$"#,##0_);[Red]\\("$"#,##0\\)',7:'"$"#,##0.00_);\\("$"#,##0.00\\)',65:'"$"#,##0.00_);\\("$"#,##0.00\\)',8:'"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',66:'"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',41:'_(* #,##0_);_(* \\(#,##0\\);_(* "-"_);_(@_)',42:'_("$"* #,##0_);_("$"* \\(#,##0\\);_("$"* "-"_);_(@_)',43:'_(* #,##0.00_);_(* \\(#,##0.00\\);_(* "-"??_);_(@_)',44:'_("$"* #,##0.00_);_("$"* \\(#,##0.00\\);_("$"* "-"??_);_(@_)'};function jn(e,t,r){for(var a=e<0?-1:1,i=e*a,n=0,s=1,o=0,l=1,c=0,u=0,h=Math.floor(i);c<t&&(h=Math.floor(i),o=h*s+n,u=h*c+l,!(i-h<5e-8));)i=1/(i-h),n=s,s=o,l=c,c=u;if(u>t&&(c>t?(u=l,o=n):(u=c,o=s)),!r)return[0,a*o,u];var d=Math.floor(a*o/u);return[d,a*o-d*u,u]}function pa(e,t,r){if(e>2958465||e<0)return null;var a=e|0,i=Math.floor(86400*(e-a)),n=0,s=[],o={D:a,T:i,u:86400*(e-a)-i,y:0,m:0,d:0,H:0,M:0,S:0,q:0};if(Math.abs(o.u)<1e-6&&(o.u=0),t&&t.date1904&&(a+=1462),o.u>.9999&&(o.u=0,++i==86400&&(o.T=i=0,++a,++o.D)),a===60)s=r?[1317,10,29]:[1900,2,29],n=3;else if(a===0)s=r?[1317,8,29]:[1900,1,0],n=6;else{a>60&&--a;var l=new Date(1900,0,1);l.setDate(l.getDate()+a-1),s=[l.getFullYear(),l.getMonth()+1,l.getDate()],n=l.getDay(),a<60&&(n=(n+6)%7),r&&(n=Dg(l,s))}return o.y=s[0],o.m=s[1],o.d=s[2],o.S=i%60,i=Math.floor(i/60),o.M=i%60,i=Math.floor(i/60),o.H=i,o.q=n,o}var V0=new Date(1899,11,31,0,0,0),Tg=V0.getTime(),Ag=new Date(1900,2,1,0,0,0);function H0(e,t){var r=e.getTime();return t?r-=1461*24*60*60*1e3:e>=Ag&&(r+=24*60*60*1e3),(r-(Tg+(e.getTimezoneOffset()-V0.getTimezoneOffset())*6e4))/(24*60*60*1e3)}function Lo(e){return e.indexOf(".")==-1?e:e.replace(/(?:\.0*|(\.\d*[1-9])0+)$/,"$1")}function Cg(e){return e.indexOf("E")==-1?e:e.replace(/(?:\.0*|(\.\d*[1-9])0+)[Ee]/,"$1E").replace(/(E[+-])(\d)$/,"$10$2")}function Sg(e){var t=e<0?12:11,r=Lo(e.toFixed(12));return r.length<=t||(r=e.toPrecision(10),r.length<=t)?r:e.toExponential(5)}function Fg(e){var t=Lo(e.toFixed(11));return t.length>(e<0?12:11)||t==="0"||t==="-0"?e.toPrecision(6):t}function ji(e){var t=Math.floor(Math.log(Math.abs(e))*Math.LOG10E),r;return t>=-4&&t<=-1?r=e.toPrecision(10+t):Math.abs(t)<=9?r=Sg(e):t===10?r=e.toFixed(10).substr(0,12):r=Fg(e),Lo(Cg(r.toUpperCase()))}function _a(e,t){switch(typeof e){case"string":return e;case"boolean":return e?"TRUE":"FALSE";case"number":return(e|0)===e?e.toString(10):ji(e);case"undefined":return"";case"object":if(e==null)return"";if(e instanceof Date)return Qt(14,H0(e,t&&t.date1904),t)}throw new Error("unsupported value in General format: "+e)}function Dg(e,t){t[0]-=581;var r=e.getDay();return e<60&&(r=(r+6)%7),r}function Og(e,t,r,a){var i="",n=0,s=0,o=r.y,l,c=0;switch(e){case 98:o=r.y+543;case 121:switch(t.length){case 1:case 2:l=o%100,c=2;break;default:l=o%1e4,c=4;break}break;case 109:switch(t.length){case 1:case 2:l=r.m,c=t.length;break;case 3:return As[r.m-1][1];case 5:return As[r.m-1][0];default:return As[r.m-1][2]}break;case 100:switch(t.length){case 1:case 2:l=r.d,c=t.length;break;case 3:return rc[r.q][0];default:return rc[r.q][1]}break;case 104:switch(t.length){case 1:case 2:l=1+(r.H+11)%12,c=t.length;break;default:throw"bad hour format: "+t}break;case 72:switch(t.length){case 1:case 2:l=r.H,c=t.length;break;default:throw"bad hour format: "+t}break;case 77:switch(t.length){case 1:case 2:l=r.M,c=t.length;break;default:throw"bad minute format: "+t}break;case 115:if(t!="s"&&t!="ss"&&t!=".0"&&t!=".00"&&t!=".000")throw"bad second format: "+t;return r.u===0&&(t=="s"||t=="ss")?lr(r.S,t.length):(a>=2?s=a===3?1e3:100:s=a===1?10:1,n=Math.round(s*(r.S+r.u)),n>=60*s&&(n=0),t==="s"?n===0?"0":""+n/s:(i=lr(n,2+a),t==="ss"?i.substr(0,2):"."+i.substr(2,t.length-1)));case 90:switch(t){case"[h]":case"[hh]":l=r.D*24+r.H;break;case"[m]":case"[mm]":l=(r.D*24+r.H)*60+r.M;break;case"[s]":case"[ss]":l=((r.D*24+r.H)*60+r.M)*60+Math.round(r.S+r.u);break;default:throw"bad abstime format: "+t}c=t.length===3?1:2;break;case 101:l=o,c=1;break}var u=c>0?lr(l,c):"";return u}function Kr(e){var t=3;if(e.length<=t)return e;for(var r=e.length%t,a=e.substr(0,r);r!=e.length;r+=t)a+=(a.length>0?",":"")+e.substr(r,t);return a}var W0=/%/g;function Rg(e,t,r){var a=t.replace(W0,""),i=t.length-a.length;return Rr(e,a,r*Math.pow(10,2*i))+je("%",i)}function Ig(e,t,r){for(var a=t.length-1;t.charCodeAt(a-1)===44;)--a;return Rr(e,t.substr(0,a),r/Math.pow(10,3*(t.length-a)))}function j0(e,t){var r,a=e.indexOf("E")-e.indexOf(".")-1;if(e.match(/^#+0.0E\+0$/)){if(t==0)return"0.0E+0";if(t<0)return"-"+j0(e,-t);var i=e.indexOf(".");i===-1&&(i=e.indexOf("E"));var n=Math.floor(Math.log(t)*Math.LOG10E)%i;if(n<0&&(n+=i),r=(t/Math.pow(10,n)).toPrecision(a+1+(i+n)%i),r.indexOf("e")===-1){var s=Math.floor(Math.log(t)*Math.LOG10E);for(r.indexOf(".")===-1?r=r.charAt(0)+"."+r.substr(1)+"E+"+(s-r.length+n):r+="E+"+(s-n);r.substr(0,2)==="0.";)r=r.charAt(0)+r.substr(2,i)+"."+r.substr(2+i),r=r.replace(/^0+([1-9])/,"$1").replace(/^0+\./,"0.");r=r.replace(/\+-/,"-")}r=r.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/,function(o,l,c,u){return l+c+u.substr(0,(i+n)%i)+"."+u.substr(n)+"E"})}else r=t.toExponential(a);return e.match(/E\+00$/)&&r.match(/e[+-]\d$/)&&(r=r.substr(0,r.length-1)+"0"+r.charAt(r.length-1)),e.match(/E\-/)&&r.match(/e\+/)&&(r=r.replace(/e\+/,"e")),r.replace("e","E")}var G0=/# (\?+)( ?)\/( ?)(\d+)/;function Pg(e,t,r){var a=parseInt(e[4],10),i=Math.round(t*a),n=Math.floor(i/a),s=i-n*a,o=a;return r+(n===0?"":""+n)+" "+(s===0?je(" ",e[1].length+1+e[4].length):Po(s,e[1].length)+e[2]+"/"+e[3]+lr(o,e[4].length))}function Lg(e,t,r){return r+(t===0?"":""+t)+je(" ",e[1].length+2+e[4].length)}var X0=/^#*0*\.([0#]+)/,K0=/\).*[0#]/,Y0=/\(###\) ###\\?-####/;function Ct(e){for(var t="",r,a=0;a!=e.length;++a)switch(r=e.charCodeAt(a)){case 35:break;case 63:t+=" ";break;case 48:t+="0";break;default:t+=String.fromCharCode(r)}return t}function ic(e,t){var r=Math.pow(10,t);return""+Math.round(e*r)/r}function nc(e,t){var r=e-Math.floor(e),a=Math.pow(10,t);return t<(""+Math.round(r*a)).length?0:Math.round(r*a)}function Ng(e,t){return t<(""+Math.round((e-Math.floor(e))*Math.pow(10,t))).length?1:0}function $g(e){return e<2147483647&&e>-2147483648?""+(e>=0?e|0:e-1|0):""+Math.floor(e)}function Yt(e,t,r){if(e.charCodeAt(0)===40&&!t.match(K0)){var a=t.replace(/\( */,"").replace(/ \)/,"").replace(/\)/,"");return r>=0?Yt("n",a,r):"("+Yt("n",a,-r)+")"}if(t.charCodeAt(t.length-1)===44)return Ig(e,t,r);if(t.indexOf("%")!==-1)return Rg(e,t,r);if(t.indexOf("E")!==-1)return j0(t,r);if(t.charCodeAt(0)===36)return"$"+Yt(e,t.substr(t.charAt(1)==" "?2:1),r);var i,n,s,o,l=Math.abs(r),c=r<0?"-":"";if(t.match(/^00+$/))return c+$a(l,t.length);if(t.match(/^[#?]+$/))return i=$a(r,0),i==="0"&&(i=""),i.length>t.length?i:Ct(t.substr(0,t.length-i.length))+i;if(n=t.match(G0))return Pg(n,l,c);if(t.match(/^#+0+$/))return c+$a(l,t.length-t.indexOf("0"));if(n=t.match(X0))return i=ic(r,n[1].length).replace(/^([^\.]+)$/,"$1."+Ct(n[1])).replace(/\.$/,"."+Ct(n[1])).replace(/\.(\d*)$/,function(p,g){return"."+g+je("0",Ct(n[1]).length-g.length)}),t.indexOf("0.")!==-1?i:i.replace(/^0\./,".");if(t=t.replace(/^#+([0.])/,"$1"),n=t.match(/^(0*)\.(#*)$/))return c+ic(l,n[2].length).replace(/\.(\d*[1-9])0*$/,".$1").replace(/^(-?\d*)$/,"$1.").replace(/^0\./,n[1].length?"0.":".");if(n=t.match(/^#{1,3},##0(\.?)$/))return c+Kr($a(l,0));if(n=t.match(/^#,##0\.([#0]*0)$/))return r<0?"-"+Yt(e,t,-r):Kr(""+(Math.floor(r)+Ng(r,n[1].length)))+"."+lr(nc(r,n[1].length),n[1].length);if(n=t.match(/^#,#*,#0/))return Yt(e,t.replace(/^#,#*,/,""),r);if(n=t.match(/^([0#]+)(\\?-([0#]+))+$/))return i=Ha(Yt(e,t.replace(/[\\-]/g,""),r)),s=0,Ha(Ha(t.replace(/\\/g,"")).replace(/[0#]/g,function(p){return s<i.length?i.charAt(s++):p==="0"?"0":""}));if(t.match(Y0))return i=Yt(e,"##########",r),"("+i.substr(0,3)+") "+i.substr(3,3)+"-"+i.substr(6);var u="";if(n=t.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/))return s=Math.min(n[4].length,7),o=jn(l,Math.pow(10,s)-1,!1),i=""+c,u=Rr("n",n[1],o[1]),u.charAt(u.length-1)==" "&&(u=u.substr(0,u.length-1)+"0"),i+=u+n[2]+"/"+n[3],u=Hn(o[2],s),u.length<n[4].length&&(u=Ct(n[4].substr(n[4].length-u.length))+u),i+=u,i;if(n=t.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/))return s=Math.min(Math.max(n[1].length,n[4].length),7),o=jn(l,Math.pow(10,s)-1,!0),c+(o[0]||(o[1]?"":"0"))+" "+(o[1]?Po(o[1],s)+n[2]+"/"+n[3]+Hn(o[2],s):je(" ",2*s+1+n[2].length+n[3].length));if(n=t.match(/^[#0?]+$/))return i=$a(r,0),t.length<=i.length?i:Ct(t.substr(0,t.length-i.length))+i;if(n=t.match(/^([#0?]+)\.([#0]+)$/)){i=""+r.toFixed(Math.min(n[2].length,10)).replace(/([^0])0+$/,"$1"),s=i.indexOf(".");var h=t.indexOf(".")-s,d=t.length-i.length-h;return Ct(t.substr(0,h)+i+t.substr(t.length-d))}if(n=t.match(/^00,000\.([#0]*0)$/))return s=nc(r,n[1].length),r<0?"-"+Yt(e,t,-r):Kr($g(r)).replace(/^\d,\d{3}$/,"0$&").replace(/^\d*$/,function(p){return"00,"+(p.length<3?lr(0,3-p.length):"")+p})+"."+lr(s,n[1].length);switch(t){case"###,##0.00":return Yt(e,"#,##0.00",r);case"###,###":case"##,###":case"#,###":var f=Kr($a(l,0));return f!=="0"?c+f:"";case"###,###.00":return Yt(e,"###,##0.00",r).replace(/^0\./,".");case"#,###.00":return Yt(e,"#,##0.00",r).replace(/^0\./,".")}throw new Error("unsupported format |"+t+"|")}function Mg(e,t,r){for(var a=t.length-1;t.charCodeAt(a-1)===44;)--a;return Rr(e,t.substr(0,a),r/Math.pow(10,3*(t.length-a)))}function Bg(e,t,r){var a=t.replace(W0,""),i=t.length-a.length;return Rr(e,a,r*Math.pow(10,2*i))+je("%",i)}function q0(e,t){var r,a=e.indexOf("E")-e.indexOf(".")-1;if(e.match(/^#+0.0E\+0$/)){if(t==0)return"0.0E+0";if(t<0)return"-"+q0(e,-t);var i=e.indexOf(".");i===-1&&(i=e.indexOf("E"));var n=Math.floor(Math.log(t)*Math.LOG10E)%i;if(n<0&&(n+=i),r=(t/Math.pow(10,n)).toPrecision(a+1+(i+n)%i),!r.match(/[Ee]/)){var s=Math.floor(Math.log(t)*Math.LOG10E);r.indexOf(".")===-1?r=r.charAt(0)+"."+r.substr(1)+"E+"+(s-r.length+n):r+="E+"+(s-n),r=r.replace(/\+-/,"-")}r=r.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/,function(o,l,c,u){return l+c+u.substr(0,(i+n)%i)+"."+u.substr(n)+"E"})}else r=t.toExponential(a);return e.match(/E\+00$/)&&r.match(/e[+-]\d$/)&&(r=r.substr(0,r.length-1)+"0"+r.charAt(r.length-1)),e.match(/E\-/)&&r.match(/e\+/)&&(r=r.replace(/e\+/,"e")),r.replace("e","E")}function vr(e,t,r){if(e.charCodeAt(0)===40&&!t.match(K0)){var a=t.replace(/\( */,"").replace(/ \)/,"").replace(/\)/,"");return r>=0?vr("n",a,r):"("+vr("n",a,-r)+")"}if(t.charCodeAt(t.length-1)===44)return Mg(e,t,r);if(t.indexOf("%")!==-1)return Bg(e,t,r);if(t.indexOf("E")!==-1)return q0(t,r);if(t.charCodeAt(0)===36)return"$"+vr(e,t.substr(t.charAt(1)==" "?2:1),r);var i,n,s,o,l=Math.abs(r),c=r<0?"-":"";if(t.match(/^00+$/))return c+lr(l,t.length);if(t.match(/^[#?]+$/))return i=""+r,r===0&&(i=""),i.length>t.length?i:Ct(t.substr(0,t.length-i.length))+i;if(n=t.match(G0))return Lg(n,l,c);if(t.match(/^#+0+$/))return c+lr(l,t.length-t.indexOf("0"));if(n=t.match(X0))return i=(""+r).replace(/^([^\.]+)$/,"$1."+Ct(n[1])).replace(/\.$/,"."+Ct(n[1])),i=i.replace(/\.(\d*)$/,function(p,g){return"."+g+je("0",Ct(n[1]).length-g.length)}),t.indexOf("0.")!==-1?i:i.replace(/^0\./,".");if(t=t.replace(/^#+([0.])/,"$1"),n=t.match(/^(0*)\.(#*)$/))return c+(""+l).replace(/\.(\d*[1-9])0*$/,".$1").replace(/^(-?\d*)$/,"$1.").replace(/^0\./,n[1].length?"0.":".");if(n=t.match(/^#{1,3},##0(\.?)$/))return c+Kr(""+l);if(n=t.match(/^#,##0\.([#0]*0)$/))return r<0?"-"+vr(e,t,-r):Kr(""+r)+"."+je("0",n[1].length);if(n=t.match(/^#,#*,#0/))return vr(e,t.replace(/^#,#*,/,""),r);if(n=t.match(/^([0#]+)(\\?-([0#]+))+$/))return i=Ha(vr(e,t.replace(/[\\-]/g,""),r)),s=0,Ha(Ha(t.replace(/\\/g,"")).replace(/[0#]/g,function(p){return s<i.length?i.charAt(s++):p==="0"?"0":""}));if(t.match(Y0))return i=vr(e,"##########",r),"("+i.substr(0,3)+") "+i.substr(3,3)+"-"+i.substr(6);var u="";if(n=t.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/))return s=Math.min(n[4].length,7),o=jn(l,Math.pow(10,s)-1,!1),i=""+c,u=Rr("n",n[1],o[1]),u.charAt(u.length-1)==" "&&(u=u.substr(0,u.length-1)+"0"),i+=u+n[2]+"/"+n[3],u=Hn(o[2],s),u.length<n[4].length&&(u=Ct(n[4].substr(n[4].length-u.length))+u),i+=u,i;if(n=t.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/))return s=Math.min(Math.max(n[1].length,n[4].length),7),o=jn(l,Math.pow(10,s)-1,!0),c+(o[0]||(o[1]?"":"0"))+" "+(o[1]?Po(o[1],s)+n[2]+"/"+n[3]+Hn(o[2],s):je(" ",2*s+1+n[2].length+n[3].length));if(n=t.match(/^[#0?]+$/))return i=""+r,t.length<=i.length?i:Ct(t.substr(0,t.length-i.length))+i;if(n=t.match(/^([#0]+)\.([#0]+)$/)){i=""+r.toFixed(Math.min(n[2].length,10)).replace(/([^0])0+$/,"$1"),s=i.indexOf(".");var h=t.indexOf(".")-s,d=t.length-i.length-h;return Ct(t.substr(0,h)+i+t.substr(t.length-d))}if(n=t.match(/^00,000\.([#0]*0)$/))return r<0?"-"+vr(e,t,-r):Kr(""+r).replace(/^\d,\d{3}$/,"0$&").replace(/^\d*$/,function(p){return"00,"+(p.length<3?lr(0,3-p.length):"")+p})+"."+lr(0,n[1].length);switch(t){case"###,###":case"##,###":case"#,###":var f=Kr(""+l);return f!=="0"?c+f:"";default:if(t.match(/\.[0#?]*$/))return vr(e,t.slice(0,t.lastIndexOf(".")),r)+Ct(t.slice(t.lastIndexOf(".")))}throw new Error("unsupported format |"+t+"|")}function Rr(e,t,r){return(r|0)===r?vr(e,t,r):Yt(e,t,r)}function zg(e){for(var t=[],r=!1,a=0,i=0;a<e.length;++a)switch(e.charCodeAt(a)){case 34:r=!r;break;case 95:case 42:case 92:++a;break;case 59:t[t.length]=e.substr(i,a-i),i=a+1}if(t[t.length]=e.substr(i),r===!0)throw new Error("Format |"+e+"| unterminated string ");return t}var Z0=/\[[HhMmSs\u0E0A\u0E19\u0E17]*\]/;function ai(e){for(var t=0,r="",a="";t<e.length;)switch(r=e.charAt(t)){case"G":Wn(e,t)&&(t+=6),t++;break;case'"':for(;e.charCodeAt(++t)!==34&&t<e.length;);++t;break;case"\\":t+=2;break;case"_":t+=2;break;case"@":++t;break;case"B":case"b":if(e.charAt(t+1)==="1"||e.charAt(t+1)==="2")return!0;case"M":case"D":case"Y":case"H":case"S":case"E":case"m":case"d":case"y":case"h":case"s":case"e":case"g":return!0;case"A":case"a":case"上":if(e.substr(t,3).toUpperCase()==="A/P"||e.substr(t,5).toUpperCase()==="AM/PM"||e.substr(t,5).toUpperCase()==="上午/下午")return!0;++t;break;case"[":for(a=r;e.charAt(t++)!=="]"&&t<e.length;)a+=e.charAt(t);if(a.match(Z0))return!0;break;case".":case"0":case"#":for(;t<e.length&&("0#?.,E+-%".indexOf(r=e.charAt(++t))>-1||r=="\\"&&e.charAt(t+1)=="-"&&"0#".indexOf(e.charAt(t+2))>-1););break;case"?":for(;e.charAt(++t)===r;);break;case"*":++t,(e.charAt(t)==" "||e.charAt(t)=="*")&&++t;break;case"(":case")":++t;break;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":for(;t<e.length&&"0123456789".indexOf(e.charAt(++t))>-1;);break;case" ":++t;break;default:++t;break}return!1}function Ug(e,t,r,a){for(var i=[],n="",s=0,o="",l="t",c,u,h,d="H";s<e.length;)switch(o=e.charAt(s)){case"G":if(!Wn(e,s))throw new Error("unrecognized character "+o+" in "+e);i[i.length]={t:"G",v:"General"},s+=7;break;case'"':for(n="";(h=e.charCodeAt(++s))!==34&&s<e.length;)n+=String.fromCharCode(h);i[i.length]={t:"t",v:n},++s;break;case"\\":var f=e.charAt(++s),p=f==="("||f===")"?f:"t";i[i.length]={t:p,v:f},++s;break;case"_":i[i.length]={t:"t",v:" "},s+=2;break;case"@":i[i.length]={t:"T",v:t},++s;break;case"B":case"b":if(e.charAt(s+1)==="1"||e.charAt(s+1)==="2"){if(c==null&&(c=pa(t,r,e.charAt(s+1)==="2"),c==null))return"";i[i.length]={t:"X",v:e.substr(s,2)},l=o,s+=2;break}case"M":case"D":case"Y":case"H":case"S":case"E":o=o.toLowerCase();case"m":case"d":case"y":case"h":case"s":case"e":case"g":if(t<0||c==null&&(c=pa(t,r),c==null))return"";for(n=o;++s<e.length&&e.charAt(s).toLowerCase()===o;)n+=o;o==="m"&&l.toLowerCase()==="h"&&(o="M"),o==="h"&&(o=d),i[i.length]={t:o,v:n},l=o;break;case"A":case"a":case"上":var g={t:o,v:o};if(c==null&&(c=pa(t,r)),e.substr(s,3).toUpperCase()==="A/P"?(c!=null&&(g.v=c.H>=12?"P":"A"),g.t="T",d="h",s+=3):e.substr(s,5).toUpperCase()==="AM/PM"?(c!=null&&(g.v=c.H>=12?"PM":"AM"),g.t="T",s+=5,d="h"):e.substr(s,5).toUpperCase()==="上午/下午"?(c!=null&&(g.v=c.H>=12?"下午":"上午"),g.t="T",s+=5,d="h"):(g.t="t",++s),c==null&&g.t==="T")return"";i[i.length]=g,l=o;break;case"[":for(n=o;e.charAt(s++)!=="]"&&s<e.length;)n+=e.charAt(s);if(n.slice(-1)!=="]")throw'unterminated "[" block: |'+n+"|";if(n.match(Z0)){if(c==null&&(c=pa(t,r),c==null))return"";i[i.length]={t:"Z",v:n.toLowerCase()},l=n.charAt(1)}else n.indexOf("$")>-1&&(n=(n.match(/\$([^-\[\]]*)/)||[])[1]||"$",ai(e)||(i[i.length]={t:"t",v:n}));break;case".":if(c!=null){for(n=o;++s<e.length&&(o=e.charAt(s))==="0";)n+=o;i[i.length]={t:"s",v:n};break}case"0":case"#":for(n=o;++s<e.length&&"0#?.,E+-%".indexOf(o=e.charAt(s))>-1;)n+=o;i[i.length]={t:"n",v:n};break;case"?":for(n=o;e.charAt(++s)===o;)n+=o;i[i.length]={t:o,v:n},l=o;break;case"*":++s,(e.charAt(s)==" "||e.charAt(s)=="*")&&++s;break;case"(":case")":i[i.length]={t:a===1?"t":o,v:o},++s;break;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":for(n=o;s<e.length&&"0123456789".indexOf(e.charAt(++s))>-1;)n+=e.charAt(s);i[i.length]={t:"D",v:n};break;case" ":i[i.length]={t:o,v:o},++s;break;case"$":i[i.length]={t:"t",v:"$"},++s;break;default:if(",$-+/():!^&'~{}<>=€acfijklopqrtuvwxzP".indexOf(o)===-1)throw new Error("unrecognized character "+o+" in "+e);i[i.length]={t:"t",v:o},++s;break}var m=0,w=0,C;for(s=i.length-1,l="t";s>=0;--s)switch(i[s].t){case"h":case"H":i[s].t=d,l="h",m<1&&(m=1);break;case"s":(C=i[s].v.match(/\.0+$/))&&(w=Math.max(w,C[0].length-1)),m<3&&(m=3);case"d":case"y":case"M":case"e":l=i[s].t;break;case"m":l==="s"&&(i[s].t="M",m<2&&(m=2));break;case"X":break;case"Z":m<1&&i[s].v.match(/[Hh]/)&&(m=1),m<2&&i[s].v.match(/[Mm]/)&&(m=2),m<3&&i[s].v.match(/[Ss]/)&&(m=3)}switch(m){case 0:break;case 1:c.u>=.5&&(c.u=0,++c.S),c.S>=60&&(c.S=0,++c.M),c.M>=60&&(c.M=0,++c.H);break;case 2:c.u>=.5&&(c.u=0,++c.S),c.S>=60&&(c.S=0,++c.M);break}var x="",D;for(s=0;s<i.length;++s)switch(i[s].t){case"t":case"T":case" ":case"D":break;case"X":i[s].v="",i[s].t=";";break;case"d":case"m":case"y":case"h":case"H":case"M":case"s":case"e":case"b":case"Z":i[s].v=Og(i[s].t.charCodeAt(0),i[s].v,c,w),i[s].t="t";break;case"n":case"?":for(D=s+1;i[D]!=null&&((o=i[D].t)==="?"||o==="D"||(o===" "||o==="t")&&i[D+1]!=null&&(i[D+1].t==="?"||i[D+1].t==="t"&&i[D+1].v==="/")||i[s].t==="("&&(o===" "||o==="n"||o===")")||o==="t"&&(i[D].v==="/"||i[D].v===" "&&i[D+1]!=null&&i[D+1].t=="?"));)i[s].v+=i[D].v,i[D]={v:"",t:";"},++D;x+=i[s].v,s=D-1;break;case"G":i[s].t="t",i[s].v=_a(t,r);break}var M="",O,E;if(x.length>0){x.charCodeAt(0)==40?(O=t<0&&x.charCodeAt(0)===45?-t:t,E=Rr("n",x,O)):(O=t<0&&a>1?-t:t,E=Rr("n",x,O),O<0&&i[0]&&i[0].t=="t"&&(E=E.substr(1),i[0].v="-"+i[0].v)),D=E.length-1;var B=i.length;for(s=0;s<i.length;++s)if(i[s]!=null&&i[s].t!="t"&&i[s].v.indexOf(".")>-1){B=s;break}var R=i.length;if(B===i.length&&E.indexOf("E")===-1){for(s=i.length-1;s>=0;--s)i[s]==null||"n?".indexOf(i[s].t)===-1||(D>=i[s].v.length-1?(D-=i[s].v.length,i[s].v=E.substr(D+1,i[s].v.length)):D<0?i[s].v="":(i[s].v=E.substr(0,D+1),D=-1),i[s].t="t",R=s);D>=0&&R<i.length&&(i[R].v=E.substr(0,D+1)+i[R].v)}else if(B!==i.length&&E.indexOf("E")===-1){for(D=E.indexOf(".")-1,s=B;s>=0;--s)if(!(i[s]==null||"n?".indexOf(i[s].t)===-1)){for(u=i[s].v.indexOf(".")>-1&&s===B?i[s].v.indexOf(".")-1:i[s].v.length-1,M=i[s].v.substr(u+1);u>=0;--u)D>=0&&(i[s].v.charAt(u)==="0"||i[s].v.charAt(u)==="#")&&(M=E.charAt(D--)+M);i[s].v=M,i[s].t="t",R=s}for(D>=0&&R<i.length&&(i[R].v=E.substr(0,D+1)+i[R].v),D=E.indexOf(".")+1,s=B;s<i.length;++s)if(!(i[s]==null||"n?(".indexOf(i[s].t)===-1&&s!==B)){for(u=i[s].v.indexOf(".")>-1&&s===B?i[s].v.indexOf(".")+1:0,M=i[s].v.substr(0,u);u<i[s].v.length;++u)D<E.length&&(M+=E.charAt(D++));i[s].v=M,i[s].t="t",R=s}}}for(s=0;s<i.length;++s)i[s]!=null&&"n?".indexOf(i[s].t)>-1&&(O=a>1&&t<0&&s>0&&i[s-1].v==="-"?-t:t,i[s].v=Rr(i[s].t,i[s].v,O),i[s].t="t");var H="";for(s=0;s!==i.length;++s)i[s]!=null&&(H+=i[s].v);return H}var sc=/\[(=|>[=]?|<[>=]?)(-?\d+(?:\.\d*)?)\]/;function oc(e,t){if(t==null)return!1;var r=parseFloat(t[2]);switch(t[1]){case"=":if(e==r)return!0;break;case">":if(e>r)return!0;break;case"<":if(e<r)return!0;break;case"<>":if(e!=r)return!0;break;case">=":if(e>=r)return!0;break;case"<=":if(e<=r)return!0;break}return!1}function Vg(e,t){var r=zg(e),a=r.length,i=r[a-1].indexOf("@");if(a<4&&i>-1&&--a,r.length>4)throw new Error("cannot find right format for |"+r.join("|")+"|");if(typeof t!="number")return[4,r.length===4||i>-1?r[r.length-1]:"@"];switch(r.length){case 1:r=i>-1?["General","General","General",r[0]]:[r[0],r[0],r[0],"@"];break;case 2:r=i>-1?[r[0],r[0],r[0],r[1]]:[r[0],r[1],r[0],"@"];break;case 3:r=i>-1?[r[0],r[1],r[0],r[2]]:[r[0],r[1],r[2],"@"];break}var n=t>0?r[0]:t<0?r[1]:r[2];if(r[0].indexOf("[")===-1&&r[1].indexOf("[")===-1)return[a,n];if(r[0].match(/\[[=<>]/)!=null||r[1].match(/\[[=<>]/)!=null){var s=r[0].match(sc),o=r[1].match(sc);return oc(t,s)?[a,r[0]]:oc(t,o)?[a,r[1]]:[a,r[s!=null&&o!=null?2:1]]}return[a,n]}function Qt(e,t,r){r==null&&(r={});var a="";switch(typeof e){case"string":e=="m/d/yy"&&r.dateNF?a=r.dateNF:a=e;break;case"number":e==14&&r.dateNF?a=r.dateNF:a=(r.table!=null?r.table:we)[e],a==null&&(a=r.table&&r.table[ac[e]]||we[ac[e]]),a==null&&(a=Eg[e]||"General");break}if(Wn(a,0))return _a(t,r);t instanceof Date&&(t=H0(t,r.date1904));var i=Vg(a,t);if(Wn(i[1]))return _a(t,r);if(t===!0)t="TRUE";else if(t===!1)t="FALSE";else if(t===""||t==null)return"";return Ug(i[1],t,r,i[0])}function ma(e,t){if(typeof t!="number"){t=+t||-1;for(var r=0;r<392;++r){if(we[r]==null){t<0&&(t=r);continue}if(we[r]==e){t=r;break}}t<0&&(t=391)}return we[t]=e,t}function J0(){we=kg()}var Hg={5:'"$"#,##0_);\\("$"#,##0\\)',6:'"$"#,##0_);[Red]\\("$"#,##0\\)',7:'"$"#,##0.00_);\\("$"#,##0.00\\)',8:'"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',23:"General",24:"General",25:"General",26:"General",27:"m/d/yy",28:"m/d/yy",29:"m/d/yy",30:"m/d/yy",31:"m/d/yy",32:"h:mm:ss",33:"h:mm:ss",34:"h:mm:ss",35:"h:mm:ss",36:"m/d/yy",41:'_(* #,##0_);_(* (#,##0);_(* "-"_);_(@_)',42:'_("$"* #,##0_);_("$"* (#,##0);_("$"* "-"_);_(@_)',43:'_(* #,##0.00_);_(* (#,##0.00);_(* "-"??_);_(@_)',44:'_("$"* #,##0.00_);_("$"* (#,##0.00);_("$"* "-"??_);_(@_)',50:"m/d/yy",51:"m/d/yy",52:"m/d/yy",53:"m/d/yy",54:"m/d/yy",55:"m/d/yy",56:"m/d/yy",57:"m/d/yy",58:"m/d/yy",59:"0",60:"0.00",61:"#,##0",62:"#,##0.00",63:'"$"#,##0_);\\("$"#,##0\\)',64:'"$"#,##0_);[Red]\\("$"#,##0\\)',65:'"$"#,##0.00_);\\("$"#,##0.00\\)',66:'"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',67:"0%",68:"0.00%",69:"# ?/?",70:"# ??/??",71:"m/d/yy",72:"m/d/yy",73:"d-mmm-yy",74:"d-mmm",75:"mmm-yy",76:"h:mm",77:"h:mm:ss",78:"m/d/yy h:mm",79:"mm:ss",80:"[h]:mm:ss",81:"mmss.0"},Q0=/[dD]+|[mM]+|[yYeE]+|[Hh]+|[Ss]+/g;function Wg(e){var t=typeof e=="number"?we[e]:e;return t=t.replace(Q0,"(\\d+)"),new RegExp("^"+t+"$")}function jg(e,t,r){var a=-1,i=-1,n=-1,s=-1,o=-1,l=-1;(t.match(Q0)||[]).forEach(function(h,d){var f=parseInt(r[d+1],10);switch(h.toLowerCase().charAt(0)){case"y":a=f;break;case"d":n=f;break;case"h":s=f;break;case"s":l=f;break;case"m":s>=0?o=f:i=f;break}}),l>=0&&o==-1&&i>=0&&(o=i,i=-1);var c=(""+(a>=0?a:new Date().getFullYear())).slice(-4)+"-"+("00"+(i>=1?i:1)).slice(-2)+"-"+("00"+(n>=1?n:1)).slice(-2);c.length==7&&(c="0"+c),c.length==8&&(c="20"+c);var u=("00"+(s>=0?s:0)).slice(-2)+":"+("00"+(o>=0?o:0)).slice(-2)+":"+("00"+(l>=0?l:0)).slice(-2);return s==-1&&o==-1&&l==-1?c:a==-1&&i==-1&&n==-1?u:c+"T"+u}var Gg=function(){var e={};e.version="1.2.0";function t(){for(var E=0,B=new Array(256),R=0;R!=256;++R)E=R,E=E&1?-306674912^E>>>1:E>>>1,E=E&1?-306674912^E>>>1:E>>>1,E=E&1?-306674912^E>>>1:E>>>1,E=E&1?-306674912^E>>>1:E>>>1,E=E&1?-306674912^E>>>1:E>>>1,E=E&1?-306674912^E>>>1:E>>>1,E=E&1?-306674912^E>>>1:E>>>1,E=E&1?-306674912^E>>>1:E>>>1,B[R]=E;return typeof Int32Array<"u"?new Int32Array(B):B}var r=t();function a(E){var B=0,R=0,H=0,z=typeof Int32Array<"u"?new Int32Array(4096):new Array(4096);for(H=0;H!=256;++H)z[H]=E[H];for(H=0;H!=256;++H)for(R=E[H],B=256+H;B<4096;B+=256)R=z[B]=R>>>8^E[R&255];var L=[];for(H=1;H!=16;++H)L[H-1]=typeof Int32Array<"u"?z.subarray(H*256,H*256+256):z.slice(H*256,H*256+256);return L}var i=a(r),n=i[0],s=i[1],o=i[2],l=i[3],c=i[4],u=i[5],h=i[6],d=i[7],f=i[8],p=i[9],g=i[10],m=i[11],w=i[12],C=i[13],x=i[14];function D(E,B){for(var R=B^-1,H=0,z=E.length;H<z;)R=R>>>8^r[(R^E.charCodeAt(H++))&255];return~R}function M(E,B){for(var R=B^-1,H=E.length-15,z=0;z<H;)R=x[E[z++]^R&255]^C[E[z++]^R>>8&255]^w[E[z++]^R>>16&255]^m[E[z++]^R>>>24]^g[E[z++]]^p[E[z++]]^f[E[z++]]^d[E[z++]]^h[E[z++]]^u[E[z++]]^c[E[z++]]^l[E[z++]]^o[E[z++]]^s[E[z++]]^n[E[z++]]^r[E[z++]];for(H+=15;z<H;)R=R>>>8^r[(R^E[z++])&255];return~R}function O(E,B){for(var R=B^-1,H=0,z=E.length,L=0,Z=0;H<z;)L=E.charCodeAt(H++),L<128?R=R>>>8^r[(R^L)&255]:L<2048?(R=R>>>8^r[(R^(192|L>>6&31))&255],R=R>>>8^r[(R^(128|L&63))&255]):L>=55296&&L<57344?(L=(L&1023)+64,Z=E.charCodeAt(H++)&1023,R=R>>>8^r[(R^(240|L>>8&7))&255],R=R>>>8^r[(R^(128|L>>2&63))&255],R=R>>>8^r[(R^(128|Z>>6&15|(L&3)<<4))&255],R=R>>>8^r[(R^(128|Z&63))&255]):(R=R>>>8^r[(R^(224|L>>12&15))&255],R=R>>>8^r[(R^(128|L>>6&63))&255],R=R>>>8^r[(R^(128|L&63))&255]);return~R}return e.table=r,e.bstr=D,e.buf=M,e.str=O,e}(),Se=function(){var t={};t.version="1.2.1";function r(v,k){for(var b=v.split("/"),_=k.split("/"),T=0,A=0,V=Math.min(b.length,_.length);T<V;++T){if(A=b[T].length-_[T].length)return A;if(b[T]!=_[T])return b[T]<_[T]?-1:1}return b.length-_.length}function a(v){if(v.charAt(v.length-1)=="/")return v.slice(0,-1).indexOf("/")===-1?v:a(v.slice(0,-1));var k=v.lastIndexOf("/");return k===-1?v:v.slice(0,k+1)}function i(v){if(v.charAt(v.length-1)=="/")return i(v.slice(0,-1));var k=v.lastIndexOf("/");return k===-1?v:v.slice(k+1)}function n(v,k){typeof k=="string"&&(k=new Date(k));var b=k.getHours();b=b<<6|k.getMinutes(),b=b<<5|k.getSeconds()>>>1,v.write_shift(2,b);var _=k.getFullYear()-1980;_=_<<4|k.getMonth()+1,_=_<<5|k.getDate(),v.write_shift(2,_)}function s(v){var k=v.read_shift(2)&65535,b=v.read_shift(2)&65535,_=new Date,T=b&31;b>>>=5;var A=b&15;b>>>=4,_.setMilliseconds(0),_.setFullYear(b+1980),_.setMonth(A-1),_.setDate(T);var V=k&31;k>>>=5;var Y=k&63;return k>>>=6,_.setHours(k),_.setMinutes(Y),_.setSeconds(V<<1),_}function o(v){ft(v,0);for(var k={},b=0;v.l<=v.length-4;){var _=v.read_shift(2),T=v.read_shift(2),A=v.l+T,V={};switch(_){case 21589:b=v.read_shift(1),b&1&&(V.mtime=v.read_shift(4)),T>5&&(b&2&&(V.atime=v.read_shift(4)),b&4&&(V.ctime=v.read_shift(4))),V.mtime&&(V.mt=new Date(V.mtime*1e3));break}v.l=A,k[_]=V}return k}var l;function c(){return l||(l={})}function u(v,k){if(v[0]==80&&v[1]==75)return ll(v,k);if((v[0]|32)==109&&(v[1]|32)==105)return Sh(v,k);if(v.length<512)throw new Error("CFB file size "+v.length+" < 512");var b=3,_=512,T=0,A=0,V=0,Y=0,U=0,j=[],X=v.slice(0,512);ft(X,0);var J=h(X);switch(b=J[0],b){case 3:_=512;break;case 4:_=4096;break;case 0:if(J[1]==0)return ll(v,k);default:throw new Error("Major Version: Expected 3 or 4 saw "+b)}_!==512&&(X=v.slice(0,_),ft(X,28));var ie=v.slice(0,_);d(X,b);var he=X.read_shift(4,"i");if(b===3&&he!==0)throw new Error("# Directory Sectors: Expected 0 saw "+he);X.l+=4,V=X.read_shift(4,"i"),X.l+=4,X.chk("00100000","Mini Stream Cutoff Size: "),Y=X.read_shift(4,"i"),T=X.read_shift(4,"i"),U=X.read_shift(4,"i"),A=X.read_shift(4,"i");for(var ee=-1,ce=0;ce<109&&(ee=X.read_shift(4,"i"),!(ee<0));++ce)j[ce]=ee;var be=f(v,_);m(U,A,be,_,j);var He=C(be,V,j,_);He[V].name="!Directory",T>0&&Y!==Z&&(He[Y].name="!MiniFAT"),He[j[0]].name="!FAT",He.fat_addrs=j,He.ssz=_;var We={},vt=[],li=[],ci=[];x(V,He,be,vt,T,We,li,Y),p(li,ci,vt),vt.shift();var ui={FileIndex:li,FullPaths:ci};return k&&k.raw&&(ui.raw={header:ie,sectors:be}),ui}function h(v){if(v[v.l]==80&&v[v.l+1]==75)return[0,0];v.chk(se,"Header Signature: "),v.l+=16;var k=v.read_shift(2,"u");return[v.read_shift(2,"u"),k]}function d(v,k){var b=9;switch(v.l+=2,b=v.read_shift(2)){case 9:if(k!=3)throw new Error("Sector Shift: Expected 9 saw "+b);break;case 12:if(k!=4)throw new Error("Sector Shift: Expected 12 saw "+b);break;default:throw new Error("Sector Shift: Expected 9 or 12 saw "+b)}v.chk("0600","Mini Sector Shift: "),v.chk("000000000000","Reserved: ")}function f(v,k){for(var b=Math.ceil(v.length/k)-1,_=[],T=1;T<b;++T)_[T-1]=v.slice(T*k,(T+1)*k);return _[b-1]=v.slice(b*k),_}function p(v,k,b){for(var _=0,T=0,A=0,V=0,Y=0,U=b.length,j=[],X=[];_<U;++_)j[_]=X[_]=_,k[_]=b[_];for(;Y<X.length;++Y)_=X[Y],T=v[_].L,A=v[_].R,V=v[_].C,j[_]===_&&(T!==-1&&j[T]!==T&&(j[_]=j[T]),A!==-1&&j[A]!==A&&(j[_]=j[A])),V!==-1&&(j[V]=_),T!==-1&&_!=j[_]&&(j[T]=j[_],X.lastIndexOf(T)<Y&&X.push(T)),A!==-1&&_!=j[_]&&(j[A]=j[_],X.lastIndexOf(A)<Y&&X.push(A));for(_=1;_<U;++_)j[_]===_&&(A!==-1&&j[A]!==A?j[_]=j[A]:T!==-1&&j[T]!==T&&(j[_]=j[T]));for(_=1;_<U;++_)if(v[_].type!==0){if(Y=_,Y!=j[Y])do Y=j[Y],k[_]=k[Y]+"/"+k[_];while(Y!==0&&j[Y]!==-1&&Y!=j[Y]);j[_]=-1}for(k[0]+="/",_=1;_<U;++_)v[_].type!==2&&(k[_]+="/")}function g(v,k,b){for(var _=v.start,T=v.size,A=[],V=_;b&&T>0&&V>=0;)A.push(k.slice(V*L,V*L+L)),T-=L,V=fa(b,V*4);return A.length===0?nt(0):Gr(A).slice(0,v.size)}function m(v,k,b,_,T){var A=Z;if(v===Z){if(k!==0)throw new Error("DIFAT chain shorter than expected")}else if(v!==-1){var V=b[v],Y=(_>>>2)-1;if(!V)return;for(var U=0;U<Y&&(A=fa(V,U*4))!==Z;++U)T.push(A);m(fa(V,_-4),k-1,b,_,T)}}function w(v,k,b,_,T){var A=[],V=[];T||(T=[]);var Y=_-1,U=0,j=0;for(U=k;U>=0;){T[U]=!0,A[A.length]=U,V.push(v[U]);var X=b[Math.floor(U*4/_)];if(j=U*4&Y,_<4+j)throw new Error("FAT boundary crossed: "+U+" 4 "+_);if(!v[X])break;U=fa(v[X],j)}return{nodes:A,data:vc([V])}}function C(v,k,b,_){var T=v.length,A=[],V=[],Y=[],U=[],j=_-1,X=0,J=0,ie=0,he=0;for(X=0;X<T;++X)if(Y=[],ie=X+k,ie>=T&&(ie-=T),!V[ie]){U=[];var ee=[];for(J=ie;J>=0;){ee[J]=!0,V[J]=!0,Y[Y.length]=J,U.push(v[J]);var ce=b[Math.floor(J*4/_)];if(he=J*4&j,_<4+he)throw new Error("FAT boundary crossed: "+J+" 4 "+_);if(!v[ce]||(J=fa(v[ce],he),ee[J]))break}A[ie]={nodes:Y,data:vc([U])}}return A}function x(v,k,b,_,T,A,V,Y){for(var U=0,j=_.length?2:0,X=k[v].data,J=0,ie=0,he;J<X.length;J+=128){var ee=X.slice(J,J+128);ft(ee,64),ie=ee.read_shift(2),he=zo(ee,0,ie-j),_.push(he);var ce={name:he,type:ee.read_shift(1),color:ee.read_shift(1),L:ee.read_shift(4,"i"),R:ee.read_shift(4,"i"),C:ee.read_shift(4,"i"),clsid:ee.read_shift(16),state:ee.read_shift(4,"i"),start:0,size:0},be=ee.read_shift(2)+ee.read_shift(2)+ee.read_shift(2)+ee.read_shift(2);be!==0&&(ce.ct=D(ee,ee.l-8));var He=ee.read_shift(2)+ee.read_shift(2)+ee.read_shift(2)+ee.read_shift(2);He!==0&&(ce.mt=D(ee,ee.l-8)),ce.start=ee.read_shift(4,"i"),ce.size=ee.read_shift(4,"i"),ce.size<0&&ce.start<0&&(ce.size=ce.type=0,ce.start=Z,ce.name=""),ce.type===5?(U=ce.start,T>0&&U!==Z&&(k[U].name="!StreamData")):ce.size>=4096?(ce.storage="fat",k[ce.start]===void 0&&(k[ce.start]=w(b,ce.start,k.fat_addrs,k.ssz)),k[ce.start].name=ce.name,ce.content=k[ce.start].data.slice(0,ce.size)):(ce.storage="minifat",ce.size<0?ce.size=0:U!==Z&&ce.start!==Z&&k[U]&&(ce.content=g(ce,k[U].data,(k[Y]||{}).data))),ce.content&&ft(ce.content,0),A[he]=ce,V.push(ce)}}function D(v,k){return new Date((zt(v,k+4)/1e7*Math.pow(2,32)+zt(v,k)/1e7-11644473600)*1e3)}function M(v,k){return c(),u(l.readFileSync(v),k)}function O(v,k){var b=k&&k.type;switch(b||Ae&&Buffer.isBuffer(v)&&(b="buffer"),b||"base64"){case"file":return M(v,k);case"base64":return u(sr(Ht(v)),k);case"binary":return u(sr(v),k)}return u(v,k)}function E(v,k){var b=k||{},_=b.root||"Root Entry";if(v.FullPaths||(v.FullPaths=[]),v.FileIndex||(v.FileIndex=[]),v.FullPaths.length!==v.FileIndex.length)throw new Error("inconsistent CFB structure");v.FullPaths.length===0&&(v.FullPaths[0]=_+"/",v.FileIndex[0]={name:_,type:5}),b.CLSID&&(v.FileIndex[0].clsid=b.CLSID),B(v)}function B(v){var k="Sh33tJ5";if(!Se.find(v,"/"+k)){var b=nt(4);b[0]=55,b[1]=b[3]=50,b[2]=54,v.FileIndex.push({name:k,type:2,content:b,size:4,L:69,R:69,C:69}),v.FullPaths.push(v.FullPaths[0]+k),R(v)}}function R(v,k){E(v);for(var b=!1,_=!1,T=v.FullPaths.length-1;T>=0;--T){var A=v.FileIndex[T];switch(A.type){case 0:_?b=!0:(v.FileIndex.pop(),v.FullPaths.pop());break;case 1:case 2:case 5:_=!0,isNaN(A.R*A.L*A.C)&&(b=!0),A.R>-1&&A.L>-1&&A.R==A.L&&(b=!0);break;default:b=!0;break}}if(!(!b&&!k)){var V=new Date(1987,1,19),Y=0,U=Object.create?Object.create(null):{},j=[];for(T=0;T<v.FullPaths.length;++T)U[v.FullPaths[T]]=!0,v.FileIndex[T].type!==0&&j.push([v.FullPaths[T],v.FileIndex[T]]);for(T=0;T<j.length;++T){var X=a(j[T][0]);_=U[X],_||(j.push([X,{name:i(X).replace("/",""),type:1,clsid:le,ct:V,mt:V,content:null}]),U[X]=!0)}for(j.sort(function(he,ee){return r(he[0],ee[0])}),v.FullPaths=[],v.FileIndex=[],T=0;T<j.length;++T)v.FullPaths[T]=j[T][0],v.FileIndex[T]=j[T][1];for(T=0;T<j.length;++T){var J=v.FileIndex[T],ie=v.FullPaths[T];if(J.name=i(ie).replace("/",""),J.L=J.R=J.C=-(J.color=1),J.size=J.content?J.content.length:0,J.start=0,J.clsid=J.clsid||le,T===0)J.C=j.length>1?1:-1,J.size=0,J.type=5;else if(ie.slice(-1)=="/"){for(Y=T+1;Y<j.length&&a(v.FullPaths[Y])!=ie;++Y);for(J.C=Y>=j.length?-1:Y,Y=T+1;Y<j.length&&a(v.FullPaths[Y])!=a(ie);++Y);J.R=Y>=j.length?-1:Y,J.type=1}else a(v.FullPaths[T+1]||"")==a(ie)&&(J.R=T+1),J.type=2}}}function H(v,k){var b=k||{};if(b.fileType=="mad")return Fh(v,b);switch(R(v),b.fileType){case"zip":return _h(v,b)}var _=function(he){for(var ee=0,ce=0,be=0;be<he.FileIndex.length;++be){var He=he.FileIndex[be];if(He.content){var We=He.content.length;We>0&&(We<4096?ee+=We+63>>6:ce+=We+511>>9)}}for(var vt=he.FullPaths.length+3>>2,li=ee+7>>3,ci=ee+127>>7,ui=li+ce+vt+ci,sa=ui+127>>7,vs=sa<=109?0:Math.ceil((sa-109)/127);ui+sa+vs+127>>7>sa;)vs=++sa<=109?0:Math.ceil((sa-109)/127);var Fr=[1,vs,sa,ci,vt,ce,ee,0];return he.FileIndex[0].size=ee<<6,Fr[7]=(he.FileIndex[0].start=Fr[0]+Fr[1]+Fr[2]+Fr[3]+Fr[4]+Fr[5])+(Fr[6]+7>>3),Fr}(v),T=nt(_[7]<<9),A=0,V=0;{for(A=0;A<8;++A)T.write_shift(1,te[A]);for(A=0;A<8;++A)T.write_shift(2,0);for(T.write_shift(2,62),T.write_shift(2,3),T.write_shift(2,65534),T.write_shift(2,9),T.write_shift(2,6),A=0;A<3;++A)T.write_shift(2,0);for(T.write_shift(4,0),T.write_shift(4,_[2]),T.write_shift(4,_[0]+_[1]+_[2]+_[3]-1),T.write_shift(4,0),T.write_shift(4,4096),T.write_shift(4,_[3]?_[0]+_[1]+_[2]-1:Z),T.write_shift(4,_[3]),T.write_shift(-4,_[1]?_[0]-1:Z),T.write_shift(4,_[1]),A=0;A<109;++A)T.write_shift(-4,A<_[2]?_[1]+A:-1)}if(_[1])for(V=0;V<_[1];++V){for(;A<236+V*127;++A)T.write_shift(-4,A<_[2]?_[1]+A:-1);T.write_shift(-4,V===_[1]-1?Z:V+1)}var Y=function(he){for(V+=he;A<V-1;++A)T.write_shift(-4,A+1);he&&(++A,T.write_shift(-4,Z))};for(V=A=0,V+=_[1];A<V;++A)T.write_shift(-4,re.DIFSECT);for(V+=_[2];A<V;++A)T.write_shift(-4,re.FATSECT);Y(_[3]),Y(_[4]);for(var U=0,j=0,X=v.FileIndex[0];U<v.FileIndex.length;++U)X=v.FileIndex[U],X.content&&(j=X.content.length,!(j<4096)&&(X.start=V,Y(j+511>>9)));for(Y(_[6]+7>>3);T.l&511;)T.write_shift(-4,re.ENDOFCHAIN);for(V=A=0,U=0;U<v.FileIndex.length;++U)X=v.FileIndex[U],X.content&&(j=X.content.length,!(!j||j>=4096)&&(X.start=V,Y(j+63>>6)));for(;T.l&511;)T.write_shift(-4,re.ENDOFCHAIN);for(A=0;A<_[4]<<2;++A){var J=v.FullPaths[A];if(!J||J.length===0){for(U=0;U<17;++U)T.write_shift(4,0);for(U=0;U<3;++U)T.write_shift(4,-1);for(U=0;U<12;++U)T.write_shift(4,0);continue}X=v.FileIndex[A],A===0&&(X.start=X.size?X.start-1:Z);var ie=A===0&&b.root||X.name;if(j=2*(ie.length+1),T.write_shift(64,ie,"utf16le"),T.write_shift(2,j),T.write_shift(1,X.type),T.write_shift(1,X.color),T.write_shift(-4,X.L),T.write_shift(-4,X.R),T.write_shift(-4,X.C),X.clsid)T.write_shift(16,X.clsid,"hex");else for(U=0;U<4;++U)T.write_shift(4,0);T.write_shift(4,X.state||0),T.write_shift(4,0),T.write_shift(4,0),T.write_shift(4,0),T.write_shift(4,0),T.write_shift(4,X.start),T.write_shift(4,X.size),T.write_shift(4,0)}for(A=1;A<v.FileIndex.length;++A)if(X=v.FileIndex[A],X.size>=4096)if(T.l=X.start+1<<9,Ae&&Buffer.isBuffer(X.content))X.content.copy(T,T.l,0,X.size),T.l+=X.size+511&-512;else{for(U=0;U<X.size;++U)T.write_shift(1,X.content[U]);for(;U&511;++U)T.write_shift(1,0)}for(A=1;A<v.FileIndex.length;++A)if(X=v.FileIndex[A],X.size>0&&X.size<4096)if(Ae&&Buffer.isBuffer(X.content))X.content.copy(T,T.l,0,X.size),T.l+=X.size+63&-64;else{for(U=0;U<X.size;++U)T.write_shift(1,X.content[U]);for(;U&63;++U)T.write_shift(1,0)}if(Ae)T.l=T.length;else for(;T.l<T.length;)T.write_shift(1,0);return T}function z(v,k){var b=v.FullPaths.map(function(U){return U.toUpperCase()}),_=b.map(function(U){var j=U.split("/");return j[j.length-(U.slice(-1)=="/"?2:1)]}),T=!1;k.charCodeAt(0)===47?(T=!0,k=b[0].slice(0,-1)+k):T=k.indexOf("/")!==-1;var A=k.toUpperCase(),V=T===!0?b.indexOf(A):_.indexOf(A);if(V!==-1)return v.FileIndex[V];var Y=!A.match(wi);for(A=A.replace(Dt,""),Y&&(A=A.replace(wi,"!")),V=0;V<b.length;++V)if((Y?b[V].replace(wi,"!"):b[V]).replace(Dt,"")==A||(Y?_[V].replace(wi,"!"):_[V]).replace(Dt,"")==A)return v.FileIndex[V];return null}var L=64,Z=-2,se="d0cf11e0a1b11ae1",te=[208,207,17,224,161,177,26,225],le="00000000000000000000000000000000",re={MAXREGSECT:-6,DIFSECT:-4,FATSECT:-3,ENDOFCHAIN:Z,FREESECT:-1,HEADER_SIGNATURE:se,HEADER_MINOR_VERSION:"3e00",MAXREGSID:-6,NOSTREAM:-1,HEADER_CLSID:le,EntryTypes:["unknown","storage","stream","lockbytes","property","root"]};function Ee(v,k,b){c();var _=H(v,b);l.writeFileSync(k,_)}function W(v){for(var k=new Array(v.length),b=0;b<v.length;++b)k[b]=String.fromCharCode(v[b]);return k.join("")}function de(v,k){var b=H(v,k);switch(k&&k.type||"buffer"){case"file":return c(),l.writeFileSync(k.filename,b),b;case"binary":return typeof b=="string"?b:W(b);case"base64":return Ql(typeof b=="string"?b:W(b));case"buffer":if(Ae)return Buffer.isBuffer(b)?b:Oa(b);case"array":return typeof b=="string"?sr(b):b}return b}var ve;function S(v){try{var k=v.InflateRaw,b=new k;if(b._processChunk(new Uint8Array([3,0]),b._finishFlushFlag),b.bytesRead)ve=v;else throw new Error("zlib does not expose bytesRead")}catch(_){console.error("cannot use native zlib: "+(_.message||_))}}function G(v,k){if(!ve)return sl(v,k);var b=ve.InflateRaw,_=new b,T=_._processChunk(v.slice(v.l),_._finishFlushFlag);return v.l+=_.bytesRead,T}function N(v){return ve?ve.deflateRawSync(v):ke(v)}var P=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],q=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258],ne=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577];function ue(v){var k=(v<<1|v<<11)&139536|(v<<5|v<<15)&558144;return(k>>16|k>>8|k)&255}for(var ae=typeof Uint8Array<"u",Q=ae?new Uint8Array(256):[],De=0;De<256;++De)Q[De]=ue(De);function F(v,k){var b=Q[v&255];return k<=8?b>>>8-k:(b=b<<8|Q[v>>8&255],k<=16?b>>>16-k:(b=b<<8|Q[v>>16&255],b>>>24-k))}function Ke(v,k){var b=k&7,_=k>>>3;return(v[_]|(b<=6?0:v[_+1]<<8))>>>b&3}function Ie(v,k){var b=k&7,_=k>>>3;return(v[_]|(b<=5?0:v[_+1]<<8))>>>b&7}function Me(v,k){var b=k&7,_=k>>>3;return(v[_]|(b<=4?0:v[_+1]<<8))>>>b&15}function Te(v,k){var b=k&7,_=k>>>3;return(v[_]|(b<=3?0:v[_+1]<<8))>>>b&31}function oe(v,k){var b=k&7,_=k>>>3;return(v[_]|(b<=1?0:v[_+1]<<8))>>>b&127}function Ye(v,k,b){var _=k&7,T=k>>>3,A=(1<<b)-1,V=v[T]>>>_;return b<8-_||(V|=v[T+1]<<8-_,b<16-_)||(V|=v[T+2]<<16-_,b<24-_)||(V|=v[T+3]<<24-_),V&A}function Gt(v,k,b){var _=k&7,T=k>>>3;return _<=5?v[T]|=(b&7)<<_:(v[T]|=b<<_&255,v[T+1]=(b&7)>>8-_),k+3}function pr(v,k,b){var _=k&7,T=k>>>3;return b=(b&1)<<_,v[T]|=b,k+1}function Cr(v,k,b){var _=k&7,T=k>>>3;return b<<=_,v[T]|=b&255,b>>>=8,v[T+1]=b,k+8}function si(v,k,b){var _=k&7,T=k>>>3;return b<<=_,v[T]|=b&255,b>>>=8,v[T+1]=b&255,v[T+2]=b>>>8,k+16}function zr(v,k){var b=v.length,_=2*b>k?2*b:k+5,T=0;if(b>=k)return v;if(Ae){var A=ec(_);if(v.copy)v.copy(A);else for(;T<v.length;++T)A[T]=v[T];return A}else if(ae){var V=new Uint8Array(_);if(V.set)V.set(v);else for(;T<b;++T)V[T]=v[T];return V}return v.length=_,v}function Mt(v){for(var k=new Array(v),b=0;b<v;++b)k[b]=0;return k}function Sr(v,k,b){var _=1,T=0,A=0,V=0,Y=0,U=v.length,j=ae?new Uint16Array(32):Mt(32);for(A=0;A<32;++A)j[A]=0;for(A=U;A<b;++A)v[A]=0;U=v.length;var X=ae?new Uint16Array(U):Mt(U);for(A=0;A<U;++A)j[T=v[A]]++,_<T&&(_=T),X[A]=0;for(j[0]=0,A=1;A<=_;++A)j[A+16]=Y=Y+j[A-1]<<1;for(A=0;A<U;++A)Y=v[A],Y!=0&&(X[A]=j[Y+16]++);var J=0;for(A=0;A<U;++A)if(J=v[A],J!=0)for(Y=F(X[A],_)>>_-J,V=(1<<_+4-J)-1;V>=0;--V)k[Y|V<<J]=J&15|A<<4;return _}var Ur=ae?new Uint16Array(512):Mt(512),oi=ae?new Uint16Array(32):Mt(32);if(!ae){for(var At=0;At<512;++At)Ur[At]=0;for(At=0;At<32;++At)oi[At]=0}(function(){for(var v=[],k=0;k<32;k++)v.push(5);Sr(v,oi,32);var b=[];for(k=0;k<=143;k++)b.push(8);for(;k<=255;k++)b.push(9);for(;k<=279;k++)b.push(7);for(;k<=287;k++)b.push(8);Sr(b,Ur,288)})();var gr=function(){for(var k=ae?new Uint8Array(32768):[],b=0,_=0;b<ne.length-1;++b)for(;_<ne[b+1];++_)k[_]=b;for(;_<32768;++_)k[_]=29;var T=ae?new Uint8Array(259):[];for(b=0,_=0;b<q.length-1;++b)for(;_<q[b+1];++_)T[_]=b;function A(Y,U){for(var j=0;j<Y.length;){var X=Math.min(65535,Y.length-j),J=j+X==Y.length;for(U.write_shift(1,+J),U.write_shift(2,X),U.write_shift(2,~X&65535);X-- >0;)U[U.l++]=Y[j++]}return U.l}function V(Y,U){for(var j=0,X=0,J=ae?new Uint16Array(32768):[];X<Y.length;){var ie=Math.min(65535,Y.length-X);if(ie<10){for(j=Gt(U,j,+(X+ie==Y.length)),j&7&&(j+=8-(j&7)),U.l=j/8|0,U.write_shift(2,ie),U.write_shift(2,~ie&65535);ie-- >0;)U[U.l++]=Y[X++];j=U.l*8;continue}j=Gt(U,j,+(X+ie==Y.length)+2);for(var he=0;ie-- >0;){var ee=Y[X];he=(he<<5^ee)&32767;var ce=-1,be=0;if((ce=J[he])&&(ce|=X&-32768,ce>X&&(ce-=32768),ce<X))for(;Y[ce+be]==Y[X+be]&&be<250;)++be;if(be>2){ee=T[be],ee<=22?j=Cr(U,j,Q[ee+1]>>1)-1:(Cr(U,j,3),j+=5,Cr(U,j,Q[ee-23]>>5),j+=3);var He=ee<8?0:ee-4>>2;He>0&&(si(U,j,be-q[ee]),j+=He),ee=k[X-ce],j=Cr(U,j,Q[ee]>>3),j-=3;var We=ee<4?0:ee-2>>1;We>0&&(si(U,j,X-ce-ne[ee]),j+=We);for(var vt=0;vt<be;++vt)J[he]=X&32767,he=(he<<5^Y[X])&32767,++X;ie-=be-1}else ee<=143?ee=ee+48:j=pr(U,j,1),j=Cr(U,j,Q[ee]),J[he]=X&32767,++X}j=Cr(U,j,0)-1}return U.l=(j+7)/8|0,U.l}return function(U,j){return U.length<8?A(U,j):V(U,j)}}();function ke(v){var k=nt(50+Math.floor(v.length*1.1)),b=gr(v,k);return k.slice(0,b)}var qe=ae?new Uint16Array(32768):Mt(32768),Xt=ae?new Uint16Array(32768):Mt(32768),it=ae?new Uint16Array(128):Mt(128),na=1,nl=1;function bh(v,k){var b=Te(v,k)+257;k+=5;var _=Te(v,k)+1;k+=5;var T=Me(v,k)+4;k+=4;for(var A=0,V=ae?new Uint8Array(19):Mt(19),Y=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],U=1,j=ae?new Uint8Array(8):Mt(8),X=ae?new Uint8Array(8):Mt(8),J=V.length,ie=0;ie<T;++ie)V[P[ie]]=A=Ie(v,k),U<A&&(U=A),j[A]++,k+=3;var he=0;for(j[0]=0,ie=1;ie<=U;++ie)X[ie]=he=he+j[ie-1]<<1;for(ie=0;ie<J;++ie)(he=V[ie])!=0&&(Y[ie]=X[he]++);var ee=0;for(ie=0;ie<J;++ie)if(ee=V[ie],ee!=0){he=Q[Y[ie]]>>8-ee;for(var ce=(1<<7-ee)-1;ce>=0;--ce)it[he|ce<<ee]=ee&7|ie<<3}var be=[];for(U=1;be.length<b+_;)switch(he=it[oe(v,k)],k+=he&7,he>>>=3){case 16:for(A=3+Ke(v,k),k+=2,he=be[be.length-1];A-- >0;)be.push(he);break;case 17:for(A=3+Ie(v,k),k+=3;A-- >0;)be.push(0);break;case 18:for(A=11+oe(v,k),k+=7;A-- >0;)be.push(0);break;default:be.push(he),U<he&&(U=he);break}var He=be.slice(0,b),We=be.slice(b);for(ie=b;ie<286;++ie)He[ie]=0;for(ie=_;ie<30;++ie)We[ie]=0;return na=Sr(He,qe,286),nl=Sr(We,Xt,30),k}function wh(v,k){if(v[0]==3&&!(v[1]&3))return[ta(k),2];for(var b=0,_=0,T=ec(k||1<<18),A=0,V=T.length>>>0,Y=0,U=0;!(_&1);){if(_=Ie(v,b),b+=3,_>>>1)_>>1==1?(Y=9,U=5):(b=bh(v,b),Y=na,U=nl);else{b&7&&(b+=8-(b&7));var j=v[b>>>3]|v[(b>>>3)+1]<<8;if(b+=32,j>0)for(!k&&V<A+j&&(T=zr(T,A+j),V=T.length);j-- >0;)T[A++]=v[b>>>3],b+=8;continue}for(;;){!k&&V<A+32767&&(T=zr(T,A+32767),V=T.length);var X=Ye(v,b,Y),J=_>>>1==1?Ur[X]:qe[X];if(b+=J&15,J>>>=4,!(J>>>8&255))T[A++]=J;else{if(J==256)break;J-=257;var ie=J<8?0:J-4>>2;ie>5&&(ie=0);var he=A+q[J];ie>0&&(he+=Ye(v,b,ie),b+=ie),X=Ye(v,b,U),J=_>>>1==1?oi[X]:Xt[X],b+=J&15,J>>>=4;var ee=J<4?0:J-2>>1,ce=ne[J];for(ee>0&&(ce+=Ye(v,b,ee),b+=ee),!k&&V<he&&(T=zr(T,he+100),V=T.length);A<he;)T[A]=T[A-ce],++A}}}return k?[T,b+7>>>3]:[T.slice(0,A),b+7>>>3]}function sl(v,k){var b=v.slice(v.l||0),_=wh(b,k);return v.l+=_[1],_[0]}function ol(v,k){if(v)typeof console<"u"&&console.error(k);else throw new Error(k)}function ll(v,k){var b=v;ft(b,0);var _=[],T=[],A={FileIndex:_,FullPaths:T};E(A,{root:k.root});for(var V=b.length-4;(b[V]!=80||b[V+1]!=75||b[V+2]!=5||b[V+3]!=6)&&V>=0;)--V;b.l=V+4,b.l+=4;var Y=b.read_shift(2);b.l+=6;var U=b.read_shift(4);for(b.l=U,V=0;V<Y;++V){b.l+=20;var j=b.read_shift(4),X=b.read_shift(4),J=b.read_shift(2),ie=b.read_shift(2),he=b.read_shift(2);b.l+=8;var ee=b.read_shift(4),ce=o(b.slice(b.l+J,b.l+J+ie));b.l+=J+ie+he;var be=b.l;b.l=ee+4,yh(b,j,X,A,ce),b.l=be}return A}function yh(v,k,b,_,T){v.l+=2;var A=v.read_shift(2),V=v.read_shift(2),Y=s(v);if(A&8257)throw new Error("Unsupported ZIP encryption");for(var U=v.read_shift(4),j=v.read_shift(4),X=v.read_shift(4),J=v.read_shift(2),ie=v.read_shift(2),he="",ee=0;ee<J;++ee)he+=String.fromCharCode(v[v.l++]);if(ie){var ce=o(v.slice(v.l,v.l+ie));(ce[21589]||{}).mt&&(Y=ce[21589].mt),((T||{})[21589]||{}).mt&&(Y=T[21589].mt)}v.l+=ie;var be=v.slice(v.l,v.l+j);switch(V){case 8:be=G(v,X);break;case 0:break;default:throw new Error("Unsupported ZIP Compression method "+V)}var He=!1;A&8&&(U=v.read_shift(4),U==134695760&&(U=v.read_shift(4),He=!0),j=v.read_shift(4),X=v.read_shift(4)),j!=k&&ol(He,"Bad compressed size: "+k+" != "+j),X!=b&&ol(He,"Bad uncompressed size: "+b+" != "+X),ms(_,he,be,{unsafe:!0,mt:Y})}function _h(v,k){var b=k||{},_=[],T=[],A=nt(1),V=b.compression?8:0,Y=0,U=0,j=0,X=0,J=0,ie=v.FullPaths[0],he=ie,ee=v.FileIndex[0],ce=[],be=0;for(U=1;U<v.FullPaths.length;++U)if(he=v.FullPaths[U].slice(ie.length),ee=v.FileIndex[U],!(!ee.size||!ee.content||he=="Sh33tJ5")){var He=X,We=nt(he.length);for(j=0;j<he.length;++j)We.write_shift(1,he.charCodeAt(j)&127);We=We.slice(0,We.l),ce[J]=Gg.buf(ee.content,0);var vt=ee.content;V==8&&(vt=N(vt)),A=nt(30),A.write_shift(4,67324752),A.write_shift(2,20),A.write_shift(2,Y),A.write_shift(2,V),ee.mt?n(A,ee.mt):A.write_shift(4,0),A.write_shift(-4,ce[J]),A.write_shift(4,vt.length),A.write_shift(4,ee.content.length),A.write_shift(2,We.length),A.write_shift(2,0),X+=A.length,_.push(A),X+=We.length,_.push(We),X+=vt.length,_.push(vt),A=nt(46),A.write_shift(4,33639248),A.write_shift(2,0),A.write_shift(2,20),A.write_shift(2,Y),A.write_shift(2,V),A.write_shift(4,0),A.write_shift(-4,ce[J]),A.write_shift(4,vt.length),A.write_shift(4,ee.content.length),A.write_shift(2,We.length),A.write_shift(2,0),A.write_shift(2,0),A.write_shift(2,0),A.write_shift(2,0),A.write_shift(4,0),A.write_shift(4,He),be+=A.l,T.push(A),be+=We.length,T.push(We),++J}return A=nt(22),A.write_shift(4,101010256),A.write_shift(2,0),A.write_shift(2,0),A.write_shift(2,J),A.write_shift(2,J),A.write_shift(4,be),A.write_shift(4,X),A.write_shift(2,0),Gr([Gr(_),Gr(T),A])}var mn={htm:"text/html",xml:"text/xml",gif:"image/gif",jpg:"image/jpeg",png:"image/png",mso:"application/x-mso",thmx:"application/vnd.ms-officetheme",sh33tj5:"application/octet-stream"};function kh(v,k){if(v.ctype)return v.ctype;var b=v.name||"",_=b.match(/\.([^\.]+)$/);return _&&mn[_[1]]||k&&(_=(b=k).match(/[\.\\]([^\.\\])+$/),_&&mn[_[1]])?mn[_[1]]:"application/octet-stream"}function Eh(v){for(var k=Ql(v),b=[],_=0;_<k.length;_+=76)b.push(k.slice(_,_+76));return b.join(`\r
`)+`\r
`}function Th(v){var k=v.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF=]/g,function(j){var X=j.charCodeAt(0).toString(16).toUpperCase();return"="+(X.length==1?"0"+X:X)});k=k.replace(/ $/mg,"=20").replace(/\t$/mg,"=09"),k.charAt(0)==`
`&&(k="=0D"+k.slice(1)),k=k.replace(/\r(?!\n)/mg,"=0D").replace(/\n\n/mg,`
=0A`).replace(/([^\r\n])\n/mg,"$1=0A");for(var b=[],_=k.split(`\r
`),T=0;T<_.length;++T){var A=_[T];if(A.length==0){b.push("");continue}for(var V=0;V<A.length;){var Y=76,U=A.slice(V,V+Y);U.charAt(Y-1)=="="?Y--:U.charAt(Y-2)=="="?Y-=2:U.charAt(Y-3)=="="&&(Y-=3),U=A.slice(V,V+Y),V+=Y,V<A.length&&(U+="="),b.push(U)}}return b.join(`\r
`)}function Ah(v){for(var k=[],b=0;b<v.length;++b){for(var _=v[b];b<=v.length&&_.charAt(_.length-1)=="=";)_=_.slice(0,_.length-1)+v[++b];k.push(_)}for(var T=0;T<k.length;++T)k[T]=k[T].replace(/[=][0-9A-Fa-f]{2}/g,function(A){return String.fromCharCode(parseInt(A.slice(1),16))});return sr(k.join(`\r
`))}function Ch(v,k,b){for(var _="",T="",A="",V,Y=0;Y<10;++Y){var U=k[Y];if(!U||U.match(/^\s*$/))break;var j=U.match(/^(.*?):\s*([^\s].*)$/);if(j)switch(j[1].toLowerCase()){case"content-location":_=j[2].trim();break;case"content-type":A=j[2].trim();break;case"content-transfer-encoding":T=j[2].trim();break}}switch(++Y,T.toLowerCase()){case"base64":V=sr(Ht(k.slice(Y).join("")));break;case"quoted-printable":V=Ah(k.slice(Y));break;default:throw new Error("Unsupported Content-Transfer-Encoding "+T)}var X=ms(v,_.slice(b.length),V,{unsafe:!0});A&&(X.ctype=A)}function Sh(v,k){if(W(v.slice(0,13)).toLowerCase()!="mime-version:")throw new Error("Unsupported MAD header");var b=k&&k.root||"",_=(Ae&&Buffer.isBuffer(v)?v.toString("binary"):W(v)).split(`\r
`),T=0,A="";for(T=0;T<_.length;++T)if(A=_[T],!!/^Content-Location:/i.test(A)&&(A=A.slice(A.indexOf("file")),b||(b=A.slice(0,A.lastIndexOf("/")+1)),A.slice(0,b.length)!=b))for(;b.length>0&&(b=b.slice(0,b.length-1),b=b.slice(0,b.lastIndexOf("/")+1),A.slice(0,b.length)!=b););var V=(_[1]||"").match(/boundary="(.*?)"/);if(!V)throw new Error("MAD cannot find boundary");var Y="--"+(V[1]||""),U=[],j=[],X={FileIndex:U,FullPaths:j};E(X);var J,ie=0;for(T=0;T<_.length;++T){var he=_[T];he!==Y&&he!==Y+"--"||(ie++&&Ch(X,_.slice(J,T),b),J=T)}return X}function Fh(v,k){var b=k||{},_=b.boundary||"SheetJS";_="------="+_;for(var T=["MIME-Version: 1.0",'Content-Type: multipart/related; boundary="'+_.slice(2)+'"',"","",""],A=v.FullPaths[0],V=A,Y=v.FileIndex[0],U=1;U<v.FullPaths.length;++U)if(V=v.FullPaths[U].slice(A.length),Y=v.FileIndex[U],!(!Y.size||!Y.content||V=="Sh33tJ5")){V=V.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF]/g,function(be){return"_x"+be.charCodeAt(0).toString(16)+"_"}).replace(/[\u0080-\uFFFF]/g,function(be){return"_u"+be.charCodeAt(0).toString(16)+"_"});for(var j=Y.content,X=Ae&&Buffer.isBuffer(j)?j.toString("binary"):W(j),J=0,ie=Math.min(1024,X.length),he=0,ee=0;ee<=ie;++ee)(he=X.charCodeAt(ee))>=32&&he<128&&++J;var ce=J>=ie*4/5;T.push(_),T.push("Content-Location: "+(b.root||"file:///C:/SheetJS/")+V),T.push("Content-Transfer-Encoding: "+(ce?"quoted-printable":"base64")),T.push("Content-Type: "+kh(Y,V)),T.push(""),T.push(ce?Th(X):Eh(X))}return T.push(_+`--\r
`),T.join(`\r
`)}function Dh(v){var k={};return E(k,v),k}function ms(v,k,b,_){var T=_&&_.unsafe;T||E(v);var A=!T&&Se.find(v,k);if(!A){var V=v.FullPaths[0];k.slice(0,V.length)==V?V=k:(V.slice(-1)!="/"&&(V+="/"),V=(V+k).replace("//","/")),A={name:i(k),type:2},v.FileIndex.push(A),v.FullPaths.push(V),T||Se.utils.cfb_gc(v)}return A.content=b,A.size=b?b.length:0,_&&(_.CLSID&&(A.clsid=_.CLSID),_.mt&&(A.mt=_.mt),_.ct&&(A.ct=_.ct)),A}function Oh(v,k){E(v);var b=Se.find(v,k);if(b){for(var _=0;_<v.FileIndex.length;++_)if(v.FileIndex[_]==b)return v.FileIndex.splice(_,1),v.FullPaths.splice(_,1),!0}return!1}function Rh(v,k,b){E(v);var _=Se.find(v,k);if(_){for(var T=0;T<v.FileIndex.length;++T)if(v.FileIndex[T]==_)return v.FileIndex[T].name=i(b),v.FullPaths[T]=b,!0}return!1}function Ih(v){R(v,!0)}return t.find=z,t.read=O,t.parse=u,t.write=de,t.writeFile=Ee,t.utils={cfb_new:Dh,cfb_add:ms,cfb_del:Oh,cfb_mov:Rh,cfb_gc:Ih,ReadShift:Si,CheckField:yu,prep_blob:ft,bconcat:Gr,use_zlib:S,_deflateRaw:ke,_inflateRaw:sl,consts:re},t}();function Xg(e){if(typeof Deno<"u")return Deno.readFileSync(e);if(typeof $<"u"&&typeof File<"u"&&typeof Folder<"u")try{var t=File(e);t.open("r"),t.encoding="binary";var r=t.read();return t.close(),r}catch(a){if(!a.message||!a.message.match(/onstruct/))throw a}throw new Error("Cannot access file "+e)}function wr(e){for(var t=Object.keys(e),r=[],a=0;a<t.length;++a)Object.prototype.hasOwnProperty.call(e,t[a])&&r.push(t[a]);return r}function No(e){for(var t=[],r=wr(e),a=0;a!==r.length;++a)t[e[r[a]]]=r[a];return t}var Gn=new Date(1899,11,30,0,0,0);function Ot(e,t){var r=e.getTime(),a=Gn.getTime()+(e.getTimezoneOffset()-Gn.getTimezoneOffset())*6e4;return(r-a)/(24*60*60*1e3)}var eu=new Date,Kg=Gn.getTime()+(eu.getTimezoneOffset()-Gn.getTimezoneOffset())*6e4,lc=eu.getTimezoneOffset();function hs(e){var t=new Date;return t.setTime(e*24*60*60*1e3+Kg),t.getTimezoneOffset()!==lc&&t.setTime(t.getTime()+(t.getTimezoneOffset()-lc)*6e4),t}function Yg(e){var t=0,r=0,a=!1,i=e.match(/P([0-9\.]+Y)?([0-9\.]+M)?([0-9\.]+D)?T([0-9\.]+H)?([0-9\.]+M)?([0-9\.]+S)?/);if(!i)throw new Error("|"+e+"| is not an ISO8601 Duration");for(var n=1;n!=i.length;++n)if(i[n]){switch(r=1,n>3&&(a=!0),i[n].slice(i[n].length-1)){case"Y":throw new Error("Unsupported ISO Duration Field: "+i[n].slice(i[n].length-1));case"D":r*=24;case"H":r*=60;case"M":if(a)r*=60;else throw new Error("Unsupported ISO Duration Field: M")}t+=r*parseInt(i[n],10)}return t}var cc=new Date("2017-02-19T19:06:09.000Z"),tu=isNaN(cc.getFullYear())?new Date("2/19/17"):cc,qg=tu.getFullYear()==2017;function ut(e,t){var r=new Date(e);if(qg)return t>0?r.setTime(r.getTime()+r.getTimezoneOffset()*60*1e3):t<0&&r.setTime(r.getTime()-r.getTimezoneOffset()*60*1e3),r;if(e instanceof Date)return e;if(tu.getFullYear()==1917&&!isNaN(r.getFullYear())){var a=r.getFullYear();return e.indexOf(""+a)>-1||r.setFullYear(r.getFullYear()+100),r}var i=e.match(/\d+/g)||["2017","2","19","0","0","0"],n=new Date(+i[0],+i[1]-1,+i[2],+i[3]||0,+i[4]||0,+i[5]||0);return e.indexOf("Z")>-1&&(n=new Date(n.getTime()-n.getTimezoneOffset()*60*1e3)),n}function ka(e,t){if(Ae&&Buffer.isBuffer(e)){if(t){if(e[0]==255&&e[1]==254)return _i(e.slice(2).toString("utf16le"));if(e[1]==254&&e[2]==255)return _i(U0(e.slice(2).toString("binary")))}return e.toString("binary")}if(typeof TextDecoder<"u")try{if(t){if(e[0]==255&&e[1]==254)return _i(new TextDecoder("utf-16le").decode(e.slice(2)));if(e[0]==254&&e[1]==255)return _i(new TextDecoder("utf-16be").decode(e.slice(2)))}var r={"€":"","‚":"",ƒ:"","„":"","…":"","†":"","‡":"","ˆ":"","‰":"",Š:"","‹":"",Œ:"",Ž:"","‘":"","’":"","“":"","”":"","•":"","–":"","—":"","˜":"","™":"",š:"","›":"",œ:"",ž:"",Ÿ:""};return Array.isArray(e)&&(e=new Uint8Array(e)),new TextDecoder("latin1").decode(e).replace(/[€‚ƒ„…†‡ˆ‰Š‹ŒŽ‘’“”•–—˜™š›œžŸ]/g,function(n){return r[n]||n})}catch{}for(var a=[],i=0;i!=e.length;++i)a.push(String.fromCharCode(e[i]));return a.join("")}function dt(e){if(typeof JSON<"u"&&!Array.isArray(e))return JSON.parse(JSON.stringify(e));if(typeof e!="object"||e==null)return e;if(e instanceof Date)return new Date(e.getTime());var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=dt(e[r]));return t}function je(e,t){for(var r="";r.length<t;)r+=e;return r}function cr(e){var t=Number(e);if(!isNaN(t))return isFinite(t)?t:NaN;if(!/\d/.test(e))return t;var r=1,a=e.replace(/([\d]),([\d])/g,"$1$2").replace(/[$]/g,"").replace(/[%]/g,function(){return r*=100,""});return!isNaN(t=Number(a))||(a=a.replace(/[(](.*)[)]/,function(i,n){return r=-r,n}),!isNaN(t=Number(a)))?t/r:t}var Zg=["january","february","march","april","may","june","july","august","september","october","november","december"];function Ya(e){var t=new Date(e),r=new Date(NaN),a=t.getYear(),i=t.getMonth(),n=t.getDate();if(isNaN(n))return r;var s=e.toLowerCase();if(s.match(/jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec/)){if(s=s.replace(/[^a-z]/g,"").replace(/([^a-z]|^)[ap]m?([^a-z]|$)/,""),s.length>3&&Zg.indexOf(s)==-1)return r}else if(s.match(/[a-z]/))return r;return a<0||a>8099?r:(i>0||n>1)&&a!=101?t:e.match(/[^-0-9:,\/\\]/)?r:t}var Jg=function(){var e="abacaba".split(/(:?b)/i).length==5;return function(r,a,i){if(e||typeof a=="string")return r.split(a);for(var n=r.split(a),s=[n[0]],o=1;o<n.length;++o)s.push(i),s.push(n[o]);return s}}();function ru(e){return e?e.content&&e.type?ka(e.content,!0):e.data?bi(e.data):e.asNodeBuffer&&Ae?bi(e.asNodeBuffer().toString("binary")):e.asBinary?bi(e.asBinary()):e._data&&e._data.getContent?bi(ka(Array.prototype.slice.call(e._data.getContent(),0))):null:null}function au(e){if(!e)return null;if(e.data)return Zl(e.data);if(e.asNodeBuffer&&Ae)return e.asNodeBuffer();if(e._data&&e._data.getContent){var t=e._data.getContent();return typeof t=="string"?Zl(t):Array.prototype.slice.call(t)}return e.content&&e.type?e.content:null}function Qg(e){return e&&e.name.slice(-4)===".bin"?au(e):ru(e)}function qt(e,t){for(var r=e.FullPaths||wr(e.files),a=t.toLowerCase().replace(/[\/]/g,"\\"),i=a.replace(/\\/g,"/"),n=0;n<r.length;++n){var s=r[n].replace(/^Root Entry[\/]/,"").toLowerCase();if(a==s||i==s)return e.files?e.files[r[n]]:e.FileIndex[n]}return null}function $o(e,t){var r=qt(e,t);if(r==null)throw new Error("Cannot find file "+t+" in zip");return r}function Qe(e,t,r){if(!r)return Qg($o(e,t));if(!t)return null;try{return Qe(e,t)}catch{return null}}function Ut(e,t,r){if(!r)return ru($o(e,t));if(!t)return null;try{return Ut(e,t)}catch{return null}}function e1(e,t,r){return au($o(e,t))}function uc(e){for(var t=e.FullPaths||wr(e.files),r=[],a=0;a<t.length;++a)t[a].slice(-1)!="/"&&r.push(t[a].replace(/^Root Entry[\/]/,""));return r.sort()}function t1(e,t,r){if(e.FullPaths){if(typeof r=="string"){var a;return Ae?a=Oa(r):a=wg(r),Se.utils.cfb_add(e,t,a)}Se.utils.cfb_add(e,t,r)}else e.file(t,r)}function iu(e,t){switch(t.type){case"base64":return Se.read(e,{type:"base64"});case"binary":return Se.read(e,{type:"binary"});case"buffer":case"array":return Se.read(e,{type:"buffer"})}throw new Error("Unrecognized type "+t.type)}function yi(e,t){if(e.charAt(0)=="/")return e.slice(1);var r=t.split("/");t.slice(-1)!="/"&&r.pop();for(var a=e.split("/");a.length!==0;){var i=a.shift();i===".."?r.pop():i!=="."&&r.push(i)}return r.join("/")}var nu=`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\r
`,r1=/([^"\s?>\/]+)\s*=\s*((?:")([^"]*)(?:")|(?:')([^']*)(?:')|([^'">\s]+))/g,hc=/<[\/\?]?[a-zA-Z0-9:_-]+(?:\s+[^"\s?>\/]+\s*=\s*(?:"[^"]*"|'[^']*'|[^'">\s=]+))*\s*[\/\?]?>/mg,a1=/<[^>]*>/g,Tt=nu.match(hc)?hc:a1,i1=/<\w*:/,n1=/<(\/?)\w+:/;function ge(e,t,r){for(var a={},i=0,n=0;i!==e.length&&!((n=e.charCodeAt(i))===32||n===10||n===13);++i);if(t||(a[0]=e.slice(0,i)),i===e.length)return a;var s=e.match(r1),o=0,l="",c=0,u="",h="",d=1;if(s)for(c=0;c!=s.length;++c){for(h=s[c],n=0;n!=h.length&&h.charCodeAt(n)!==61;++n);for(u=h.slice(0,n).trim();h.charCodeAt(n+1)==32;)++n;for(d=(i=h.charCodeAt(n+1))==34||i==39?1:0,l=h.slice(n+1+d,h.length-d),o=0;o!=u.length&&u.charCodeAt(o)!==58;++o);if(o===u.length)u.indexOf("_")>0&&(u=u.slice(0,u.indexOf("_"))),a[u]=l,a[u.toLowerCase()]=l;else{var f=(o===5&&u.slice(0,5)==="xmlns"?"xmlns":"")+u.slice(o+1);if(a[f]&&u.slice(o-3,o)=="ext")continue;a[f]=l,a[f.toLowerCase()]=l}}return a}function Tr(e){return e.replace(n1,"<$1")}var su={"&quot;":'"',"&apos;":"'","&gt;":">","&lt;":"<","&amp;":"&"},s1=No(su),Oe=function(){var e=/&(?:quot|apos|gt|lt|amp|#x?([\da-fA-F]+));/ig,t=/_x([\da-fA-F]{4})_/ig;return function r(a){var i=a+"",n=i.indexOf("<![CDATA[");if(n==-1)return i.replace(e,function(o,l){return su[o]||String.fromCharCode(parseInt(l,o.indexOf("x")>-1?16:10))||o}).replace(t,function(o,l){return String.fromCharCode(parseInt(l,16))});var s=i.indexOf("]]>");return r(i.slice(0,n))+i.slice(n+9,s)+r(i.slice(s+3))}}(),o1=/[&<>'"]/g,l1=/[\u0000-\u001f]/g;function Mo(e){var t=e+"";return t.replace(o1,function(r){return s1[r]}).replace(/\n/g,"<br/>").replace(l1,function(r){return"&#x"+("000"+r.charCodeAt(0).toString(16)).slice(-4)+";"})}var fc=function(){var e=/&#(\d+);/g;function t(r,a){return String.fromCharCode(parseInt(a,10))}return function(a){return a.replace(e,t)}}();function Ue(e){switch(e){case 1:case!0:case"1":case"true":case"TRUE":return!0;default:return!1}}function Cs(e){for(var t="",r=0,a=0,i=0,n=0,s=0,o=0;r<e.length;){if(a=e.charCodeAt(r++),a<128){t+=String.fromCharCode(a);continue}if(i=e.charCodeAt(r++),a>191&&a<224){s=(a&31)<<6,s|=i&63,t+=String.fromCharCode(s);continue}if(n=e.charCodeAt(r++),a<240){t+=String.fromCharCode((a&15)<<12|(i&63)<<6|n&63);continue}s=e.charCodeAt(r++),o=((a&7)<<18|(i&63)<<12|(n&63)<<6|s&63)-65536,t+=String.fromCharCode(55296+(o>>>10&1023)),t+=String.fromCharCode(56320+(o&1023))}return t}function dc(e){var t=ta(2*e.length),r,a,i=1,n=0,s=0,o;for(a=0;a<e.length;a+=i)i=1,(o=e.charCodeAt(a))<128?r=o:o<224?(r=(o&31)*64+(e.charCodeAt(a+1)&63),i=2):o<240?(r=(o&15)*4096+(e.charCodeAt(a+1)&63)*64+(e.charCodeAt(a+2)&63),i=3):(i=4,r=(o&7)*262144+(e.charCodeAt(a+1)&63)*4096+(e.charCodeAt(a+2)&63)*64+(e.charCodeAt(a+3)&63),r-=65536,s=55296+(r>>>10&1023),r=56320+(r&1023)),s!==0&&(t[n++]=s&255,t[n++]=s>>>8,s=0),t[n++]=r%256,t[n++]=r>>>8;return t.slice(0,n).toString("ucs2")}function pc(e){return Oa(e,"binary").toString("utf8")}var yn="foo bar bazâð£",Be=Ae&&(pc(yn)==Cs(yn)&&pc||dc(yn)==Cs(yn)&&dc)||Cs,_i=Ae?function(e){return Oa(e,"utf8").toString("binary")}:function(e){for(var t=[],r=0,a=0,i=0;r<e.length;)switch(a=e.charCodeAt(r++),!0){case a<128:t.push(String.fromCharCode(a));break;case a<2048:t.push(String.fromCharCode(192+(a>>6))),t.push(String.fromCharCode(128+(a&63)));break;case(a>=55296&&a<57344):a-=55296,i=e.charCodeAt(r++)-56320+(a<<10),t.push(String.fromCharCode(240+(i>>18&7))),t.push(String.fromCharCode(144+(i>>12&63))),t.push(String.fromCharCode(128+(i>>6&63))),t.push(String.fromCharCode(128+(i&63)));break;default:t.push(String.fromCharCode(224+(a>>12))),t.push(String.fromCharCode(128+(a>>6&63))),t.push(String.fromCharCode(128+(a&63)))}return t.join("")},Gi=function(){var e={};return function(r,a){var i=r+"|"+(a||"");return e[i]?e[i]:e[i]=new RegExp("<(?:\\w+:)?"+r+'(?: xml:space="preserve")?(?:[^>]*)>([\\s\\S]*?)</(?:\\w+:)?'+r+">",a||"")}}(),ou=function(){var e=[["nbsp"," "],["middot","·"],["quot",'"'],["apos","'"],["gt",">"],["lt","<"],["amp","&"]].map(function(t){return[new RegExp("&"+t[0]+";","ig"),t[1]]});return function(r){for(var a=r.replace(/^[\t\n\r ]+/,"").replace(/[\t\n\r ]+$/,"").replace(/>\s+/g,">").replace(/\s+</g,"<").replace(/[\t\n\r ]+/g," ").replace(/<\s*[bB][rR]\s*\/?>/g,`
`).replace(/<[^>]*>/g,""),i=0;i<e.length;++i)a=a.replace(e[i][0],e[i][1]);return a}}(),c1=function(){var e={};return function(r){return e[r]!==void 0?e[r]:e[r]=new RegExp("<(?:vt:)?"+r+">([\\s\\S]*?)</(?:vt:)?"+r+">","g")}}(),u1=/<\/?(?:vt:)?variant>/g,h1=/<(?:vt:)([^>]*)>([\s\S]*)</;function gc(e,t){var r=ge(e),a=e.match(c1(r.baseType))||[],i=[];if(a.length!=r.size){if(t.WTF)throw new Error("unexpected vector length "+a.length+" != "+r.size);return i}return a.forEach(function(n){var s=n.replace(u1,"").match(h1);s&&i.push({v:Be(s[2]),t:s[1]})}),i}var f1=/(^\s|\s$|\n)/;function d1(e){return wr(e).map(function(t){return" "+t+'="'+e[t]+'"'}).join("")}function p1(e,t,r){return"<"+e+(r!=null?d1(r):"")+(t!=null?(t.match(f1)?' xml:space="preserve"':"")+">"+t+"</"+e:"/")+">"}function Bo(e){if(Ae&&Buffer.isBuffer(e))return e.toString("utf8");if(typeof e=="string")return e;if(typeof Uint8Array<"u"&&e instanceof Uint8Array)return Be(Ra(Io(e)));throw new Error("Bad input format: expected Buffer or string")}var Xi=/<(\/?)([^\s?><!\/:]*:|)([^\s?<>:\/]+)(?:[\s?:\/][^>]*)?>/mg,g1={CT:"http://schemas.openxmlformats.org/package/2006/content-types"},m1=["http://schemas.openxmlformats.org/spreadsheetml/2006/main","http://purl.oclc.org/ooxml/spreadsheetml/main","http://schemas.microsoft.com/office/excel/2006/main","http://schemas.microsoft.com/office/excel/2006/2"];function v1(e,t){for(var r=1-2*(e[t+7]>>>7),a=((e[t+7]&127)<<4)+(e[t+6]>>>4&15),i=e[t+6]&15,n=5;n>=0;--n)i=i*256+e[t+n];return a==2047?i==0?r*(1/0):NaN:(a==0?a=-1022:(a-=1023,i+=Math.pow(2,52)),r*Math.pow(2,a-52)*i)}function x1(e,t,r){var a=(t<0||1/t==-1/0?1:0)<<7,i=0,n=0,s=a?-t:t;isFinite(s)?s==0?i=n=0:(i=Math.floor(Math.log(s)/Math.LN2),n=s*Math.pow(2,52-i),i<=-1023&&(!isFinite(n)||n<Math.pow(2,52))?i=-1022:(n-=Math.pow(2,52),i+=1023)):(i=2047,n=isNaN(t)?26985:0);for(var o=0;o<=5;++o,n/=256)e[r+o]=n&255;e[r+6]=(i&15)<<4|n&15,e[r+7]=i>>4|a}var mc=function(e){for(var t=[],r=10240,a=0;a<e[0].length;++a)if(e[0][a])for(var i=0,n=e[0][a].length;i<n;i+=r)t.push.apply(t,e[0][a].slice(i,i+r));return t},vc=Ae?function(e){return e[0].length>0&&Buffer.isBuffer(e[0][0])?Buffer.concat(e[0].map(function(t){return Buffer.isBuffer(t)?t:Oa(t)})):mc(e)}:mc,xc=function(e,t,r){for(var a=[],i=t;i<r;i+=2)a.push(String.fromCharCode(Or(e,i)));return a.join("").replace(Dt,"")},zo=Ae?function(e,t,r){return Buffer.isBuffer(e)?e.toString("utf16le",t,r).replace(Dt,""):xc(e,t,r)}:xc,bc=function(e,t,r){for(var a=[],i=t;i<t+r;++i)a.push(("0"+e[i].toString(16)).slice(-2));return a.join("")},lu=Ae?function(e,t,r){return Buffer.isBuffer(e)?e.toString("hex",t,t+r):bc(e,t,r)}:bc,wc=function(e,t,r){for(var a=[],i=t;i<r;i++)a.push(String.fromCharCode(Ba(e,i)));return a.join("")},ln=Ae?function(t,r,a){return Buffer.isBuffer(t)?t.toString("utf8",r,a):wc(t,r,a)}:wc,cu=function(e,t){var r=zt(e,t);return r>0?ln(e,t+4,t+4+r-1):""},uu=cu,hu=function(e,t){var r=zt(e,t);return r>0?ln(e,t+4,t+4+r-1):""},fu=hu,du=function(e,t){var r=2*zt(e,t);return r>0?ln(e,t+4,t+4+r-1):""},pu=du,gu=function(t,r){var a=zt(t,r);return a>0?zo(t,r+4,r+4+a):""},mu=gu,vu=function(e,t){var r=zt(e,t);return r>0?ln(e,t+4,t+4+r):""},xu=vu,bu=function(e,t){return v1(e,t)},Xn=bu,wu=function(t){return Array.isArray(t)||typeof Uint8Array<"u"&&t instanceof Uint8Array};Ae&&(uu=function(t,r){if(!Buffer.isBuffer(t))return cu(t,r);var a=t.readUInt32LE(r);return a>0?t.toString("utf8",r+4,r+4+a-1):""},fu=function(t,r){if(!Buffer.isBuffer(t))return hu(t,r);var a=t.readUInt32LE(r);return a>0?t.toString("utf8",r+4,r+4+a-1):""},pu=function(t,r){if(!Buffer.isBuffer(t))return du(t,r);var a=2*t.readUInt32LE(r);return t.toString("utf16le",r+4,r+4+a-1)},mu=function(t,r){if(!Buffer.isBuffer(t))return gu(t,r);var a=t.readUInt32LE(r);return t.toString("utf16le",r+4,r+4+a)},xu=function(t,r){if(!Buffer.isBuffer(t))return vu(t,r);var a=t.readUInt32LE(r);return t.toString("utf8",r+4,r+4+a)},Xn=function(t,r){return Buffer.isBuffer(t)?t.readDoubleLE(r):bu(t,r)},wu=function(t){return Buffer.isBuffer(t)||Array.isArray(t)||typeof Uint8Array<"u"&&t instanceof Uint8Array});var Ba=function(e,t){return e[t]},Or=function(e,t){return e[t+1]*256+e[t]},b1=function(e,t){var r=e[t+1]*256+e[t];return r<32768?r:(65535-r+1)*-1},zt=function(e,t){return e[t+3]*(1<<24)+(e[t+2]<<16)+(e[t+1]<<8)+e[t]},fa=function(e,t){return e[t+3]<<24|e[t+2]<<16|e[t+1]<<8|e[t]},w1=function(e,t){return e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3]};function Si(e,t){var r="",a,i,n=[],s,o,l,c;switch(t){case"dbcs":if(c=this.l,Ae&&Buffer.isBuffer(this))r=this.slice(this.l,this.l+2*e).toString("utf16le");else for(l=0;l<e;++l)r+=String.fromCharCode(Or(this,c)),c+=2;e*=2;break;case"utf8":r=ln(this,this.l,this.l+e);break;case"utf16le":e*=2,r=zo(this,this.l,this.l+e);break;case"wstr":return Si.call(this,e,"dbcs");case"lpstr-ansi":r=uu(this,this.l),e=4+zt(this,this.l);break;case"lpstr-cp":r=fu(this,this.l),e=4+zt(this,this.l);break;case"lpwstr":r=pu(this,this.l),e=4+2*zt(this,this.l);break;case"lpp4":e=4+zt(this,this.l),r=mu(this,this.l),e&2&&(e+=2);break;case"8lpp4":e=4+zt(this,this.l),r=xu(this,this.l),e&3&&(e+=4-(e&3));break;case"cstr":for(e=0,r="";(s=Ba(this,this.l+e++))!==0;)n.push(wn(s));r=n.join("");break;case"_wstr":for(e=0,r="";(s=Or(this,this.l+e))!==0;)n.push(wn(s)),e+=2;e+=2,r=n.join("");break;case"dbcs-cont":for(r="",c=this.l,l=0;l<e;++l){if(this.lens&&this.lens.indexOf(c)!==-1)return s=Ba(this,c),this.l=c+1,o=Si.call(this,e-l,s?"dbcs-cont":"sbcs-cont"),n.join("")+o;n.push(wn(Or(this,c))),c+=2}r=n.join(""),e*=2;break;case"cpstr":case"sbcs-cont":for(r="",c=this.l,l=0;l!=e;++l){if(this.lens&&this.lens.indexOf(c)!==-1)return s=Ba(this,c),this.l=c+1,o=Si.call(this,e-l,s?"dbcs-cont":"sbcs-cont"),n.join("")+o;n.push(wn(Ba(this,c))),c+=1}r=n.join("");break;default:switch(e){case 1:return a=Ba(this,this.l),this.l++,a;case 2:return a=(t==="i"?b1:Or)(this,this.l),this.l+=2,a;case 4:case-4:return t==="i"||!(this[this.l+3]&128)?(a=(e>0?fa:w1)(this,this.l),this.l+=4,a):(i=zt(this,this.l),this.l+=4,i);case 8:case-8:if(t==="f")return e==8?i=Xn(this,this.l):i=Xn([this[this.l+7],this[this.l+6],this[this.l+5],this[this.l+4],this[this.l+3],this[this.l+2],this[this.l+1],this[this.l+0]],0),this.l+=8,i;e=8;case 16:r=lu(this,this.l,e);break}}return this.l+=e,r}var y1=function(e,t,r){e[r]=t&255,e[r+1]=t>>>8&255,e[r+2]=t>>>16&255,e[r+3]=t>>>24&255},_1=function(e,t,r){e[r]=t&255,e[r+1]=t>>8&255,e[r+2]=t>>16&255,e[r+3]=t>>24&255},k1=function(e,t,r){e[r]=t&255,e[r+1]=t>>>8&255};function E1(e,t,r){var a=0,i=0;if(r==="dbcs"){for(i=0;i!=t.length;++i)k1(this,t.charCodeAt(i),this.l+2*i);a=2*t.length}else if(r==="sbcs"){for(t=t.replace(/[^\x00-\x7F]/g,"_"),i=0;i!=t.length;++i)this[this.l+i]=t.charCodeAt(i)&255;a=t.length}else if(r==="hex"){for(;i<e;++i)this[this.l++]=parseInt(t.slice(2*i,2*i+2),16)||0;return this}else if(r==="utf16le"){var n=Math.min(this.l+e,this.length);for(i=0;i<Math.min(t.length,e);++i){var s=t.charCodeAt(i);this[this.l++]=s&255,this[this.l++]=s>>8}for(;this.l<n;)this[this.l++]=0;return this}else switch(e){case 1:a=1,this[this.l]=t&255;break;case 2:a=2,this[this.l]=t&255,t>>>=8,this[this.l+1]=t&255;break;case 3:a=3,this[this.l]=t&255,t>>>=8,this[this.l+1]=t&255,t>>>=8,this[this.l+2]=t&255;break;case 4:a=4,y1(this,t,this.l);break;case 8:if(a=8,r==="f"){x1(this,t,this.l);break}case 16:break;case-4:a=4,_1(this,t,this.l);break}return this.l+=a,this}function yu(e,t){var r=lu(this,this.l,e.length>>1);if(r!==e)throw new Error(t+"Expected "+e+" saw "+r);this.l+=e.length>>1}function ft(e,t){e.l=t,e.read_shift=Si,e.chk=yu,e.write_shift=E1}function kt(e,t){e.l+=t}function nt(e){var t=ta(e);return ft(t,0),t}function Br(e,t,r){if(e){var a,i,n;ft(e,e.l||0);for(var s=e.length,o=0,l=0;e.l<s;){o=e.read_shift(1),o&128&&(o=(o&127)+((e.read_shift(1)&127)<<7));var c=Qn[o]||Qn[65535];for(a=e.read_shift(1),n=a&127,i=1;i<4&&a&128;++i)n+=((a=e.read_shift(1))&127)<<7*i;l=e.l+n;var u=c.f&&c.f(e,n,r);if(e.l=l,t(u,c,o))return}}}function Ks(){var e=[],t=Ae?256:2048,r=function(c){var u=nt(c);return ft(u,0),u},a=r(t),i=function(){a&&(a.length>a.l&&(a=a.slice(0,a.l),a.l=a.length),a.length>0&&e.push(a),a=null)},n=function(c){return a&&c<a.length-a.l?a:(i(),a=r(Math.max(c+1,t)))},s=function(){return i(),Gr(e)},o=function(c){i(),a=c,a.l==null&&(a.l=a.length),n(t)};return{next:n,push:o,end:s,_bufs:e}}function Fi(e,t,r){var a=dt(e);if(t.s?(a.cRel&&(a.c+=t.s.c),a.rRel&&(a.r+=t.s.r)):(a.cRel&&(a.c+=t.c),a.rRel&&(a.r+=t.r)),!r||r.biff<12){for(;a.c>=256;)a.c-=256;for(;a.r>=65536;)a.r-=65536}return a}function yc(e,t,r){var a=dt(e);return a.s=Fi(a.s,t.s,r),a.e=Fi(a.e,t.s,r),a}function Di(e,t){if(e.cRel&&e.c<0)for(e=dt(e);e.c<0;)e.c+=t>8?16384:256;if(e.rRel&&e.r<0)for(e=dt(e);e.r<0;)e.r+=t>8?1048576:t>5?65536:16384;var r=xe(e);return!e.cRel&&e.cRel!=null&&(r=C1(r)),!e.rRel&&e.rRel!=null&&(r=T1(r)),r}function Ss(e,t){return e.s.r==0&&!e.s.rRel&&e.e.r==(t.biff>=12?1048575:t.biff>=8?65536:16384)&&!e.e.rRel?(e.s.cRel?"":"$")+st(e.s.c)+":"+(e.e.cRel?"":"$")+st(e.e.c):e.s.c==0&&!e.s.cRel&&e.e.c==(t.biff>=12?16383:255)&&!e.e.cRel?(e.s.rRel?"":"$")+pt(e.s.r)+":"+(e.e.rRel?"":"$")+pt(e.e.r):Di(e.s,t.biff)+":"+Di(e.e,t.biff)}function Uo(e){return parseInt(A1(e),10)-1}function pt(e){return""+(e+1)}function T1(e){return e.replace(/([A-Z]|^)(\d+)$/,"$1$$$2")}function A1(e){return e.replace(/\$(\d+)$/,"$1")}function Vo(e){for(var t=S1(e),r=0,a=0;a!==t.length;++a)r=26*r+t.charCodeAt(a)-64;return r-1}function st(e){if(e<0)throw new Error("invalid column "+e);var t="";for(++e;e;e=Math.floor((e-1)/26))t=String.fromCharCode((e-1)%26+65)+t;return t}function C1(e){return e.replace(/^([A-Z])/,"$$$1")}function S1(e){return e.replace(/^\$([A-Z])/,"$1")}function F1(e){return e.replace(/(\$?[A-Z]*)(\$?\d*)/,"$1,$2").split(",")}function Ft(e){for(var t=0,r=0,a=0;a<e.length;++a){var i=e.charCodeAt(a);i>=48&&i<=57?t=10*t+(i-48):i>=65&&i<=90&&(r=26*r+(i-64))}return{c:r-1,r:t-1}}function xe(e){for(var t=e.c+1,r="";t;t=(t-1)/26|0)r=String.fromCharCode((t-1)%26+65)+r;return r+(e.r+1)}function ii(e){var t=e.indexOf(":");return t==-1?{s:Ft(e),e:Ft(e)}:{s:Ft(e.slice(0,t)),e:Ft(e.slice(t+1))}}function Fe(e,t){return typeof t>"u"||typeof t=="number"?Fe(e.s,e.e):(typeof e!="string"&&(e=xe(e)),typeof t!="string"&&(t=xe(t)),e==t?e:e+":"+t)}function Xe(e){var t={s:{c:0,r:0},e:{c:0,r:0}},r=0,a=0,i=0,n=e.length;for(r=0;a<n&&!((i=e.charCodeAt(a)-64)<1||i>26);++a)r=26*r+i;for(t.s.c=--r,r=0;a<n&&!((i=e.charCodeAt(a)-48)<0||i>9);++a)r=10*r+i;if(t.s.r=--r,a===n||i!=10)return t.e.c=t.s.c,t.e.r=t.s.r,t;for(++a,r=0;a!=n&&!((i=e.charCodeAt(a)-64)<1||i>26);++a)r=26*r+i;for(t.e.c=--r,r=0;a!=n&&!((i=e.charCodeAt(a)-48)<0||i>9);++a)r=10*r+i;return t.e.r=--r,t}function _c(e,t){var r=e.t=="d"&&t instanceof Date;if(e.z!=null)try{return e.w=Qt(e.z,r?Ot(t):t)}catch{}try{return e.w=Qt((e.XF||{}).numFmtId||(r?14:0),r?Ot(t):t)}catch{return""+t}}function $r(e,t,r){return e==null||e.t==null||e.t=="z"?"":e.w!==void 0?e.w:(e.t=="d"&&!e.z&&r&&r.dateNF&&(e.z=r.dateNF),e.t=="e"?La[e.v]||e.v:t==null?_c(e,e.v):_c(e,t))}function ia(e,t){var r=t&&t.sheet?t.sheet:"Sheet1",a={};return a[r]=e,{SheetNames:[r],Sheets:a}}function _u(e,t,r){var a=r||{},i=e?Array.isArray(e):a.dense,n=e||(i?[]:{}),s=0,o=0;if(n&&a.origin!=null){if(typeof a.origin=="number")s=a.origin;else{var l=typeof a.origin=="string"?Ft(a.origin):a.origin;s=l.r,o=l.c}n["!ref"]||(n["!ref"]="A1:A1")}var c={s:{c:1e7,r:1e7},e:{c:0,r:0}};if(n["!ref"]){var u=Xe(n["!ref"]);c.s.c=u.s.c,c.s.r=u.s.r,c.e.c=Math.max(c.e.c,u.e.c),c.e.r=Math.max(c.e.r,u.e.r),s==-1&&(c.e.r=s=u.e.r+1)}for(var h=0;h!=t.length;++h)if(t[h]){if(!Array.isArray(t[h]))throw new Error("aoa_to_sheet expects an array of arrays");for(var d=0;d!=t[h].length;++d)if(!(typeof t[h][d]>"u")){var f={v:t[h][d]},p=s+h,g=o+d;if(c.s.r>p&&(c.s.r=p),c.s.c>g&&(c.s.c=g),c.e.r<p&&(c.e.r=p),c.e.c<g&&(c.e.c=g),t[h][d]&&typeof t[h][d]=="object"&&!Array.isArray(t[h][d])&&!(t[h][d]instanceof Date))f=t[h][d];else if(Array.isArray(f.v)&&(f.f=t[h][d][1],f.v=f.v[0]),f.v===null)if(f.f)f.t="n";else if(a.nullError)f.t="e",f.v=0;else if(a.sheetStubs)f.t="z";else continue;else typeof f.v=="number"?f.t="n":typeof f.v=="boolean"?f.t="b":f.v instanceof Date?(f.z=a.dateNF||we[14],a.cellDates?(f.t="d",f.w=Qt(f.z,Ot(f.v))):(f.t="n",f.v=Ot(f.v),f.w=Qt(f.z,f.v))):f.t="s";if(i)n[p]||(n[p]=[]),n[p][g]&&n[p][g].z&&(f.z=n[p][g].z),n[p][g]=f;else{var m=xe({c:g,r:p});n[m]&&n[m].z&&(f.z=n[m].z),n[m]=f}}}return c.s.c<1e7&&(n["!ref"]=Fe(c)),n}function ni(e,t){return _u(null,e,t)}function D1(e){return e.read_shift(4,"i")}function _t(e){var t=e.read_shift(4);return t===0?"":e.read_shift(t,"dbcs")}function O1(e){return{ich:e.read_shift(2),ifnt:e.read_shift(2)}}function Ho(e,t){var r=e.l,a=e.read_shift(1),i=_t(e),n=[],s={t:i,h:i};if(a&1){for(var o=e.read_shift(4),l=0;l!=o;++l)n.push(O1(e));s.r=n}else s.r=[{ich:0,ifnt:0}];return e.l=r+t,s}var R1=Ho;function rr(e){var t=e.read_shift(4),r=e.read_shift(2);return r+=e.read_shift(1)<<16,e.l++,{c:t,iStyleRef:r}}function Ia(e){var t=e.read_shift(2);return t+=e.read_shift(1)<<16,e.l++,{c:-1,iStyleRef:t}}var I1=_t;function Wo(e){var t=e.read_shift(4);return t===0||t===4294967295?"":e.read_shift(t,"dbcs")}var P1=_t,Ys=Wo;function jo(e){var t=e.slice(e.l,e.l+4),r=t[0]&1,a=t[0]&2;e.l+=4;var i=a===0?Xn([0,0,0,0,t[0]&252,t[1],t[2],t[3]],0):fa(t,0)>>2;return r?i/100:i}function ku(e){var t={s:{},e:{}};return t.s.r=e.read_shift(4),t.e.r=e.read_shift(4),t.s.c=e.read_shift(4),t.e.c=e.read_shift(4),t}var Pa=ku;function wt(e){if(e.length-e.l<8)throw"XLS Xnum Buffer underflow";return e.read_shift(8,"f")}function L1(e){var t={},r=e.read_shift(1),a=r>>>1,i=e.read_shift(1),n=e.read_shift(2,"i"),s=e.read_shift(1),o=e.read_shift(1),l=e.read_shift(1);switch(e.l++,a){case 0:t.auto=1;break;case 1:t.index=i;var c=va[i];c&&(t.rgb=Yi(c));break;case 2:t.rgb=Yi([s,o,l]);break;case 3:t.theme=i;break}return n!=0&&(t.tint=n>0?n/32767:n/32768),t}function N1(e){var t=e.read_shift(1);e.l++;var r={fBold:t&1,fItalic:t&2,fUnderline:t&4,fStrikeout:t&8,fOutline:t&16,fShadow:t&32,fCondense:t&64,fExtend:t&128};return r}function Eu(e,t){var r={2:"BITMAP",3:"METAFILEPICT",8:"DIB",14:"ENHMETAFILE"},a=e.read_shift(4);switch(a){case 0:return"";case 4294967295:case 4294967294:return r[e.read_shift(4)]||""}if(a>400)throw new Error("Unsupported Clipboard: "+a.toString(16));return e.l-=4,e.read_shift(0,t==1?"lpstr":"lpwstr")}function $1(e){return Eu(e,1)}function M1(e){return Eu(e,2)}var Go=2,Lt=3,_n=11,kc=12,Kn=19,kn=64,B1=65,z1=71,U1=4108,V1=4126,ct=80,Tu=81,H1=[ct,Tu],W1={1:{n:"CodePage",t:Go},2:{n:"Category",t:ct},3:{n:"PresentationFormat",t:ct},4:{n:"ByteCount",t:Lt},5:{n:"LineCount",t:Lt},6:{n:"ParagraphCount",t:Lt},7:{n:"SlideCount",t:Lt},8:{n:"NoteCount",t:Lt},9:{n:"HiddenCount",t:Lt},10:{n:"MultimediaClipCount",t:Lt},11:{n:"ScaleCrop",t:_n},12:{n:"HeadingPairs",t:U1},13:{n:"TitlesOfParts",t:V1},14:{n:"Manager",t:ct},15:{n:"Company",t:ct},16:{n:"LinksUpToDate",t:_n},17:{n:"CharacterCount",t:Lt},19:{n:"SharedDoc",t:_n},22:{n:"HyperlinksChanged",t:_n},23:{n:"AppVersion",t:Lt,p:"version"},24:{n:"DigSig",t:B1},26:{n:"ContentType",t:ct},27:{n:"ContentStatus",t:ct},28:{n:"Language",t:ct},29:{n:"Version",t:ct},255:{},2147483648:{n:"Locale",t:Kn},2147483651:{n:"Behavior",t:Kn},1919054434:{}},j1={1:{n:"CodePage",t:Go},2:{n:"Title",t:ct},3:{n:"Subject",t:ct},4:{n:"Author",t:ct},5:{n:"Keywords",t:ct},6:{n:"Comments",t:ct},7:{n:"Template",t:ct},8:{n:"LastAuthor",t:ct},9:{n:"RevNumber",t:ct},10:{n:"EditTime",t:kn},11:{n:"LastPrinted",t:kn},12:{n:"CreatedDate",t:kn},13:{n:"ModifiedDate",t:kn},14:{n:"PageCount",t:Lt},15:{n:"WordCount",t:Lt},16:{n:"CharCount",t:Lt},17:{n:"Thumbnail",t:z1},18:{n:"Application",t:ct},19:{n:"DocSecurity",t:Lt},255:{},2147483648:{n:"Locale",t:Kn},2147483651:{n:"Behavior",t:Kn},1919054434:{}},Ec={1:"US",2:"CA",3:"",7:"RU",20:"EG",30:"GR",31:"NL",32:"BE",33:"FR",34:"ES",36:"HU",39:"IT",41:"CH",43:"AT",44:"GB",45:"DK",46:"SE",47:"NO",48:"PL",49:"DE",52:"MX",55:"BR",61:"AU",64:"NZ",66:"TH",81:"JP",82:"KR",84:"VN",86:"CN",90:"TR",105:"JS",213:"DZ",216:"MA",218:"LY",351:"PT",354:"IS",358:"FI",420:"CZ",886:"TW",961:"LB",962:"JO",963:"SY",964:"IQ",965:"KW",966:"SA",971:"AE",972:"IL",974:"QA",981:"IR",65535:"US"},G1=[null,"solid","mediumGray","darkGray","lightGray","darkHorizontal","darkVertical","darkDown","darkUp","darkGrid","darkTrellis","lightHorizontal","lightVertical","lightDown","lightUp","lightGrid","lightTrellis","gray125","gray0625"];function X1(e){return e.map(function(t){return[t>>16&255,t>>8&255,t&255]})}var K1=X1([0,16777215,16711680,65280,255,16776960,16711935,65535,0,16777215,16711680,65280,255,16776960,16711935,65535,8388608,32768,128,8421376,8388736,32896,12632256,8421504,10066431,10040166,16777164,13434879,6684774,16744576,26316,13421823,128,16711935,16776960,65535,8388736,8388608,32896,255,52479,13434879,13434828,16777113,10079487,16751052,13408767,16764057,3368703,3394764,10079232,16763904,16750848,16737792,6710937,9868950,13158,3381606,13056,3355392,10040064,10040166,3355545,3355443,16777215,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]),va=dt(K1),La={0:"#NULL!",7:"#DIV/0!",15:"#VALUE!",23:"#REF!",29:"#NAME?",36:"#NUM!",42:"#N/A",43:"#GETTING_DATA",255:"#WTF?"},Au={"#NULL!":0,"#DIV/0!":7,"#VALUE!":15,"#REF!":23,"#NAME?":29,"#NUM!":36,"#N/A":42,"#GETTING_DATA":43,"#WTF?":255},Tc={"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml":"workbooks","application/vnd.ms-excel.sheet.macroEnabled.main+xml":"workbooks","application/vnd.ms-excel.sheet.binary.macroEnabled.main":"workbooks","application/vnd.ms-excel.addin.macroEnabled.main+xml":"workbooks","application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml":"workbooks","application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml":"sheets","application/vnd.ms-excel.worksheet":"sheets","application/vnd.ms-excel.binIndexWs":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml":"charts","application/vnd.ms-excel.chartsheet":"charts","application/vnd.ms-excel.macrosheet+xml":"macros","application/vnd.ms-excel.macrosheet":"macros","application/vnd.ms-excel.intlmacrosheet":"TODO","application/vnd.ms-excel.binIndexMs":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml":"dialogs","application/vnd.ms-excel.dialogsheet":"dialogs","application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml":"strs","application/vnd.ms-excel.sharedStrings":"strs","application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml":"styles","application/vnd.ms-excel.styles":"styles","application/vnd.openxmlformats-package.core-properties+xml":"coreprops","application/vnd.openxmlformats-officedocument.custom-properties+xml":"custprops","application/vnd.openxmlformats-officedocument.extended-properties+xml":"extprops","application/vnd.openxmlformats-officedocument.customXmlProperties+xml":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.customProperty":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml":"comments","application/vnd.ms-excel.comments":"comments","application/vnd.ms-excel.threadedcomments+xml":"threadedcomments","application/vnd.ms-excel.person+xml":"people","application/vnd.openxmlformats-officedocument.spreadsheetml.sheetMetadata+xml":"metadata","application/vnd.ms-excel.sheetMetadata":"metadata","application/vnd.ms-excel.pivotTable":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.pivotTable+xml":"TODO","application/vnd.openxmlformats-officedocument.drawingml.chart+xml":"TODO","application/vnd.ms-office.chartcolorstyle+xml":"TODO","application/vnd.ms-office.chartstyle+xml":"TODO","application/vnd.ms-office.chartex+xml":"TODO","application/vnd.ms-excel.calcChain":"calcchains","application/vnd.openxmlformats-officedocument.spreadsheetml.calcChain+xml":"calcchains","application/vnd.openxmlformats-officedocument.spreadsheetml.printerSettings":"TODO","application/vnd.ms-office.activeX":"TODO","application/vnd.ms-office.activeX+xml":"TODO","application/vnd.ms-excel.attachedToolbars":"TODO","application/vnd.ms-excel.connections":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml":"TODO","application/vnd.ms-excel.externalLink":"links","application/vnd.openxmlformats-officedocument.spreadsheetml.externalLink+xml":"links","application/vnd.ms-excel.pivotCacheDefinition":"TODO","application/vnd.ms-excel.pivotCacheRecords":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheDefinition+xml":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheRecords+xml":"TODO","application/vnd.ms-excel.queryTable":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.queryTable+xml":"TODO","application/vnd.ms-excel.userNames":"TODO","application/vnd.ms-excel.revisionHeaders":"TODO","application/vnd.ms-excel.revisionLog":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.revisionHeaders+xml":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.revisionLog+xml":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.userNames+xml":"TODO","application/vnd.ms-excel.tableSingleCells":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.tableSingleCells+xml":"TODO","application/vnd.ms-excel.slicer":"TODO","application/vnd.ms-excel.slicerCache":"TODO","application/vnd.ms-excel.slicer+xml":"TODO","application/vnd.ms-excel.slicerCache+xml":"TODO","application/vnd.ms-excel.wsSortMap":"TODO","application/vnd.ms-excel.table":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml":"TODO","application/vnd.openxmlformats-officedocument.theme+xml":"themes","application/vnd.openxmlformats-officedocument.themeOverride+xml":"TODO","application/vnd.ms-excel.Timeline+xml":"TODO","application/vnd.ms-excel.TimelineCache+xml":"TODO","application/vnd.ms-office.vbaProject":"vba","application/vnd.ms-office.vbaProjectSignature":"TODO","application/vnd.ms-office.volatileDependencies":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.volatileDependencies+xml":"TODO","application/vnd.ms-excel.controlproperties+xml":"TODO","application/vnd.openxmlformats-officedocument.model+data":"TODO","application/vnd.ms-excel.Survey+xml":"TODO","application/vnd.openxmlformats-officedocument.drawing+xml":"drawings","application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml":"TODO","application/vnd.openxmlformats-officedocument.drawingml.diagramColors+xml":"TODO","application/vnd.openxmlformats-officedocument.drawingml.diagramData+xml":"TODO","application/vnd.openxmlformats-officedocument.drawingml.diagramLayout+xml":"TODO","application/vnd.openxmlformats-officedocument.drawingml.diagramStyle+xml":"TODO","application/vnd.openxmlformats-officedocument.vmlDrawing":"TODO","application/vnd.openxmlformats-package.relationships+xml":"rels","application/vnd.openxmlformats-officedocument.oleObject":"TODO","image/png":"TODO",sheet:"js"};function Y1(){return{workbooks:[],sheets:[],charts:[],dialogs:[],macros:[],rels:[],strs:[],comments:[],threadedcomments:[],links:[],coreprops:[],extprops:[],custprops:[],themes:[],styles:[],calcchains:[],vba:[],drawings:[],metadata:[],people:[],TODO:[],xmlns:""}}function q1(e){var t=Y1();if(!e||!e.match)return t;var r={};if((e.match(Tt)||[]).forEach(function(a){var i=ge(a);switch(i[0].replace(i1,"<")){case"<?xml":break;case"<Types":t.xmlns=i["xmlns"+(i[0].match(/<(\w+):/)||["",""])[1]];break;case"<Default":r[i.Extension]=i.ContentType;break;case"<Override":t[Tc[i.ContentType]]!==void 0&&t[Tc[i.ContentType]].push(i.PartName);break}}),t.xmlns!==g1.CT)throw new Error("Unknown Namespace: "+t.xmlns);return t.calcchain=t.calcchains.length>0?t.calcchains[0]:"",t.sst=t.strs.length>0?t.strs[0]:"",t.style=t.styles.length>0?t.styles[0]:"",t.defaults=r,delete t.calcchains,t}var Ua={WB:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument",SHEET:"http://sheetjs.openxmlformats.org/officeDocument/2006/relationships/officeDocument",HLINK:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink",VML:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/vmlDrawing",XPATH:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/externalLinkPath",XMISS:"http://schemas.microsoft.com/office/2006/relationships/xlExternalLinkPath/xlPathMissing",XLINK:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/externalLink",CXML:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/customXml",CXMLP:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/customXmlProps",CMNT:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/comments",CORE_PROPS:"http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties",EXT_PROPS:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties",CUST_PROPS:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/custom-properties",SST:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings",STY:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles",THEME:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme",CHART:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/chart",CHARTEX:"http://schemas.microsoft.com/office/2014/relationships/chartEx",CS:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/chartsheet",WS:["http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet","http://purl.oclc.org/ooxml/officeDocument/relationships/worksheet"],DS:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/dialogsheet",MS:"http://schemas.microsoft.com/office/2006/relationships/xlMacrosheet",IMG:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/image",DRAW:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/drawing",XLMETA:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/sheetMetadata",TCMNT:"http://schemas.microsoft.com/office/2017/10/relationships/threadedComment",PEOPLE:"http://schemas.microsoft.com/office/2017/10/relationships/person",VBA:"http://schemas.microsoft.com/office/2006/relationships/vbaProject"};function qs(e){var t=e.lastIndexOf("/");return e.slice(0,t+1)+"_rels/"+e.slice(t+1)+".rels"}function Oi(e,t){var r={"!id":{}};if(!e)return r;t.charAt(0)!=="/"&&(t="/"+t);var a={};return(e.match(Tt)||[]).forEach(function(i){var n=ge(i);if(n[0]==="<Relationship"){var s={};s.Type=n.Type,s.Target=n.Target,s.Id=n.Id,n.TargetMode&&(s.TargetMode=n.TargetMode);var o=n.TargetMode==="External"?n.Target:yi(n.Target,t);r[o]=s,a[n.Id]=s}}),r["!id"]=a,r}var Z1="application/vnd.oasis.opendocument.spreadsheet";function J1(e,t){for(var r=Bo(e),a,i;a=Xi.exec(r);)switch(a[3]){case"manifest":break;case"file-entry":if(i=ge(a[0],!1),i.path=="/"&&i.type!==Z1)throw new Error("This OpenDocument is not a spreadsheet");break;case"encryption-data":case"algorithm":case"start-key-generation":case"key-derivation":throw new Error("Unsupported ODS Encryption");default:if(t&&t.WTF)throw a}}var Ri=[["cp:category","Category"],["cp:contentStatus","ContentStatus"],["cp:keywords","Keywords"],["cp:lastModifiedBy","LastAuthor"],["cp:lastPrinted","LastPrinted"],["cp:revision","RevNumber"],["cp:version","Version"],["dc:creator","Author"],["dc:description","Comments"],["dc:identifier","Identifier"],["dc:language","Language"],["dc:subject","Subject"],["dc:title","Title"],["dcterms:created","CreatedDate","date"],["dcterms:modified","ModifiedDate","date"]],Q1=function(){for(var e=new Array(Ri.length),t=0;t<Ri.length;++t){var r=Ri[t],a="(?:"+r[0].slice(0,r[0].indexOf(":"))+":)"+r[0].slice(r[0].indexOf(":")+1);e[t]=new RegExp("<"+a+"[^>]*>([\\s\\S]*?)</"+a+">")}return e}();function Cu(e){var t={};e=Be(e);for(var r=0;r<Ri.length;++r){var a=Ri[r],i=e.match(Q1[r]);i!=null&&i.length>0&&(t[a[1]]=Oe(i[1])),a[2]==="date"&&t[a[1]]&&(t[a[1]]=ut(t[a[1]]))}return t}var em=[["Application","Application","string"],["AppVersion","AppVersion","string"],["Company","Company","string"],["DocSecurity","DocSecurity","string"],["Manager","Manager","string"],["HyperlinksChanged","HyperlinksChanged","bool"],["SharedDoc","SharedDoc","bool"],["LinksUpToDate","LinksUpToDate","bool"],["ScaleCrop","ScaleCrop","bool"],["HeadingPairs","HeadingPairs","raw"],["TitlesOfParts","TitlesOfParts","raw"]];function Su(e,t,r,a){var i=[];if(typeof e=="string")i=gc(e,a);else for(var n=0;n<e.length;++n)i=i.concat(e[n].map(function(u){return{v:u}}));var s=typeof t=="string"?gc(t,a).map(function(u){return u.v}):t,o=0,l=0;if(s.length>0)for(var c=0;c!==i.length;c+=2){switch(l=+i[c+1].v,i[c].v){case"Worksheets":case"工作表":case"Листы":case"أوراق العمل":case"ワークシート":case"גליונות עבודה":case"Arbeitsblätter":case"Çalışma Sayfaları":case"Feuilles de calcul":case"Fogli di lavoro":case"Folhas de cálculo":case"Planilhas":case"Regneark":case"Hojas de cálculo":case"Werkbladen":r.Worksheets=l,r.SheetNames=s.slice(o,o+l);break;case"Named Ranges":case"Rangos con nombre":case"名前付き一覧":case"Benannte Bereiche":case"Navngivne områder":r.NamedRanges=l,r.DefinedNames=s.slice(o,o+l);break;case"Charts":case"Diagramme":r.Chartsheets=l,r.ChartNames=s.slice(o,o+l);break}o+=l}}function tm(e,t,r){var a={};return t||(t={}),e=Be(e),em.forEach(function(i){var n=(e.match(Gi(i[0]))||[])[1];switch(i[2]){case"string":n&&(t[i[1]]=Oe(n));break;case"bool":t[i[1]]=n==="true";break;case"raw":var s=e.match(new RegExp("<"+i[0]+"[^>]*>([\\s\\S]*?)</"+i[0]+">"));s&&s.length>0&&(a[i[1]]=s[1]);break}}),a.HeadingPairs&&a.TitlesOfParts&&Su(a.HeadingPairs,a.TitlesOfParts,t,r),t}var rm=/<[^>]+>[^<]*/g;function am(e,t){var r={},a="",i=e.match(rm);if(i)for(var n=0;n!=i.length;++n){var s=i[n],o=ge(s);switch(o[0]){case"<?xml":break;case"<Properties":break;case"<property":a=Oe(o.name);break;case"</property>":a=null;break;default:if(s.indexOf("<vt:")===0){var l=s.split(">"),c=l[0].slice(4),u=l[1];switch(c){case"lpstr":case"bstr":case"lpwstr":r[a]=Oe(u);break;case"bool":r[a]=Ue(u);break;case"i1":case"i2":case"i4":case"i8":case"int":case"uint":r[a]=parseInt(u,10);break;case"r4":case"r8":case"decimal":r[a]=parseFloat(u);break;case"filetime":case"date":r[a]=ut(u);break;case"cy":case"error":r[a]=Oe(u);break;default:if(c.slice(-1)=="/")break;t.WTF&&typeof console<"u"&&console.warn("Unexpected",s,c,l)}}else if(s.slice(0,2)!=="</"){if(t.WTF)throw new Error(s)}}}return r}var im={Title:"Title",Subject:"Subject",Author:"Author",Keywords:"Keywords",Comments:"Description",LastAuthor:"LastAuthor",RevNumber:"Revision",Application:"AppName",LastPrinted:"LastPrinted",CreatedDate:"Created",ModifiedDate:"LastSaved",Category:"Category",Manager:"Manager",Company:"Company",AppVersion:"Version",ContentStatus:"ContentStatus",Identifier:"Identifier",Language:"Language"},Fs;function nm(e,t,r){Fs||(Fs=No(im)),t=Fs[t]||t,e[t]=r}function Xo(e){var t=e.read_shift(4),r=e.read_shift(4);return new Date((r/1e7*Math.pow(2,32)+t/1e7-11644473600)*1e3).toISOString().replace(/\.000/,"")}function Fu(e,t,r){var a=e.l,i=e.read_shift(0,"lpstr-cp");if(r)for(;e.l-a&3;)++e.l;return i}function Du(e,t,r){var a=e.read_shift(0,"lpwstr");return a}function Ou(e,t,r){return t===31?Du(e):Fu(e,t,r)}function Zs(e,t,r){return Ou(e,t,r===!1?0:4)}function sm(e,t){if(!t)throw new Error("VtUnalignedString must have positive length");return Ou(e,t,0)}function om(e){for(var t=e.read_shift(4),r=[],a=0;a!=t;++a){var i=e.l;r[a]=e.read_shift(0,"lpwstr").replace(Dt,""),e.l-i&2&&(e.l+=2)}return r}function lm(e){for(var t=e.read_shift(4),r=[],a=0;a!=t;++a)r[a]=e.read_shift(0,"lpstr-cp").replace(Dt,"");return r}function cm(e){var t=e.l,r=Yn(e,Tu);e[e.l]==0&&e[e.l+1]==0&&e.l-t&2&&(e.l+=2);var a=Yn(e,Lt);return[r,a]}function um(e){for(var t=e.read_shift(4),r=[],a=0;a<t/2;++a)r.push(cm(e));return r}function Ac(e,t){for(var r=e.read_shift(4),a={},i=0;i!=r;++i){var n=e.read_shift(4),s=e.read_shift(4);a[n]=e.read_shift(s,t===1200?"utf16le":"utf8").replace(Dt,"").replace(wi,"!"),t===1200&&s%2&&(e.l+=2)}return e.l&3&&(e.l=e.l>>3<<2),a}function Ru(e){var t=e.read_shift(4),r=e.slice(e.l,e.l+t);return e.l+=t,(t&3)>0&&(e.l+=4-(t&3)&3),r}function hm(e){var t={};return t.Size=e.read_shift(4),e.l+=t.Size+3-(t.Size-1)%4,t}function Yn(e,t,r){var a=e.read_shift(2),i,n=r||{};if(e.l+=2,t!==kc&&a!==t&&H1.indexOf(t)===-1&&!((t&65534)==4126&&(a&65534)==4126))throw new Error("Expected type "+t+" saw "+a);switch(t===kc?a:t){case 2:return i=e.read_shift(2,"i"),n.raw||(e.l+=2),i;case 3:return i=e.read_shift(4,"i"),i;case 11:return e.read_shift(4)!==0;case 19:return i=e.read_shift(4),i;case 30:return Fu(e,a,4).replace(Dt,"");case 31:return Du(e);case 64:return Xo(e);case 65:return Ru(e);case 71:return hm(e);case 80:return Zs(e,a,!n.raw).replace(Dt,"");case 81:return sm(e,a).replace(Dt,"");case 4108:return um(e);case 4126:case 4127:return a==4127?om(e):lm(e);default:throw new Error("TypedPropertyValue unrecognized type "+t+" "+a)}}function Cc(e,t){var r=e.l,a=e.read_shift(4),i=e.read_shift(4),n=[],s=0,o=0,l=-1,c={};for(s=0;s!=i;++s){var u=e.read_shift(4),h=e.read_shift(4);n[s]=[u,h+r]}n.sort(function(C,x){return C[1]-x[1]});var d={};for(s=0;s!=i;++s){if(e.l!==n[s][1]){var f=!0;if(s>0&&t)switch(t[n[s-1][0]].t){case 2:e.l+2===n[s][1]&&(e.l+=2,f=!1);break;case 80:e.l<=n[s][1]&&(e.l=n[s][1],f=!1);break;case 4108:e.l<=n[s][1]&&(e.l=n[s][1],f=!1);break}if((!t||s==0)&&e.l<=n[s][1]&&(f=!1,e.l=n[s][1]),f)throw new Error("Read Error: Expected address "+n[s][1]+" at "+e.l+" :"+s)}if(t){var p=t[n[s][0]];if(d[p.n]=Yn(e,p.t,{raw:!0}),p.p==="version"&&(d[p.n]=String(d[p.n]>>16)+"."+("0000"+String(d[p.n]&65535)).slice(-4)),p.n=="CodePage")switch(d[p.n]){case 0:d[p.n]=1252;case 874:case 932:case 936:case 949:case 950:case 1250:case 1251:case 1253:case 1254:case 1255:case 1256:case 1257:case 1258:case 1e4:case 1200:case 1201:case 1252:case 65e3:case-536:case 65001:case-535:or(o=d[p.n]>>>0&65535);break;default:throw new Error("Unsupported CodePage: "+d[p.n])}}else if(n[s][0]===1){if(o=d.CodePage=Yn(e,Go),or(o),l!==-1){var g=e.l;e.l=n[l][1],c=Ac(e,o),e.l=g}}else if(n[s][0]===0){if(o===0){l=s,e.l=n[s+1][1];continue}c=Ac(e,o)}else{var m=c[n[s][0]],w;switch(e[e.l]){case 65:e.l+=4,w=Ru(e);break;case 30:e.l+=4,w=Zs(e,e[e.l-4]).replace(/\u0000+$/,"");break;case 31:e.l+=4,w=Zs(e,e[e.l-4]).replace(/\u0000+$/,"");break;case 3:e.l+=4,w=e.read_shift(4,"i");break;case 19:e.l+=4,w=e.read_shift(4);break;case 5:e.l+=4,w=e.read_shift(8,"f");break;case 11:e.l+=4,w=Ze(e,4);break;case 64:e.l+=4,w=ut(Xo(e));break;default:throw new Error("unparsed value: "+e[e.l])}d[m]=w}}return e.l=r+a,d}function Sc(e,t,r){var a=e.content;if(!a)return{};ft(a,0);var i,n,s,o,l=0;a.chk("feff","Byte Order: "),a.read_shift(2);var c=a.read_shift(4),u=a.read_shift(16);if(u!==Se.utils.consts.HEADER_CLSID&&u!==r)throw new Error("Bad PropertySet CLSID "+u);if(i=a.read_shift(4),i!==1&&i!==2)throw new Error("Unrecognized #Sets: "+i);if(n=a.read_shift(16),o=a.read_shift(4),i===1&&o!==a.l)throw new Error("Length mismatch: "+o+" !== "+a.l);i===2&&(s=a.read_shift(16),l=a.read_shift(4));var h=Cc(a,t),d={SystemIdentifier:c};for(var f in h)d[f]=h[f];if(d.FMTID=n,i===1)return d;if(l-a.l==2&&(a.l+=2),a.l!==l)throw new Error("Length mismatch 2: "+a.l+" !== "+l);var p;try{p=Cc(a,null)}catch{}for(f in p)d[f]=p[f];return d.FMTID=[n,s],d}function Vr(e,t){return e.read_shift(t),null}function fm(e,t,r){for(var a=[],i=e.l+t;e.l<i;)a.push(r(e,i-e.l));if(i!==e.l)throw new Error("Slurp error");return a}function Ze(e,t){return e.read_shift(t)===1}function et(e){return e.read_shift(2,"u")}function Iu(e,t){return fm(e,t,et)}function dm(e){var t=e.read_shift(1),r=e.read_shift(1);return r===1?t:t===1}function cn(e,t,r){var a=e.read_shift(r&&r.biff>=12?2:1),i="sbcs-cont";if(r&&r.biff>=8,!r||r.biff==8){var n=e.read_shift(1);n&&(i="dbcs-cont")}else r.biff==12&&(i="wstr");r.biff>=2&&r.biff<=5&&(i="cpstr");var s=a?e.read_shift(a,i):"";return s}function pm(e){var t=e.read_shift(2),r=e.read_shift(1),a=r&4,i=r&8,n=1+(r&1),s=0,o,l={};i&&(s=e.read_shift(2)),a&&(o=e.read_shift(4));var c=n==2?"dbcs-cont":"sbcs-cont",u=t===0?"":e.read_shift(t,c);return i&&(e.l+=4*s),a&&(e.l+=o),l.t=u,i||(l.raw="<t>"+l.t+"</t>",l.r=l.t),l}function Ea(e,t,r){var a;if(r){if(r.biff>=2&&r.biff<=5)return e.read_shift(t,"cpstr");if(r.biff>=12)return e.read_shift(t,"dbcs-cont")}var i=e.read_shift(1);return i===0?a=e.read_shift(t,"sbcs-cont"):a=e.read_shift(t,"dbcs-cont"),a}function un(e,t,r){var a=e.read_shift(r&&r.biff==2?1:2);return a===0?(e.l++,""):Ea(e,a,r)}function Na(e,t,r){if(r.biff>5)return un(e,t,r);var a=e.read_shift(1);return a===0?(e.l++,""):e.read_shift(a,r.biff<=4||!e.lens?"cpstr":"sbcs-cont")}function gm(e){var t=e.read_shift(1);e.l++;var r=e.read_shift(2);return e.l+=2,[t,r]}function mm(e){var t=e.read_shift(4),r=e.l,a=!1;t>24&&(e.l+=t-24,e.read_shift(16)==="795881f43b1d7f48af2c825dc4852763"&&(a=!0),e.l=r);var i=e.read_shift((a?t-24:t)>>1,"utf16le").replace(Dt,"");return a&&(e.l+=24),i}function vm(e){for(var t=e.read_shift(2),r="";t-- >0;)r+="../";var a=e.read_shift(0,"lpstr-ansi");if(e.l+=2,e.read_shift(2)!=57005)throw new Error("Bad FileMoniker");var i=e.read_shift(4);if(i===0)return r+a.replace(/\\/g,"/");var n=e.read_shift(4);if(e.read_shift(2)!=3)throw new Error("Bad FileMoniker");var s=e.read_shift(n>>1,"utf16le").replace(Dt,"");return r+s}function xm(e,t){var r=e.read_shift(16);switch(r){case"e0c9ea79f9bace118c8200aa004ba90b":return mm(e);case"0303000000000000c000000000000046":return vm(e);default:throw new Error("Unsupported Moniker "+r)}}function En(e){var t=e.read_shift(4),r=t>0?e.read_shift(t,"utf16le").replace(Dt,""):"";return r}function bm(e,t){var r=e.l+t,a=e.read_shift(4);if(a!==2)throw new Error("Unrecognized streamVersion: "+a);var i=e.read_shift(2);e.l+=2;var n,s,o,l,c="",u,h;i&16&&(n=En(e,r-e.l)),i&128&&(s=En(e,r-e.l)),(i&257)===257&&(o=En(e,r-e.l)),(i&257)===1&&(l=xm(e,r-e.l)),i&8&&(c=En(e,r-e.l)),i&32&&(u=e.read_shift(16)),i&64&&(h=Xo(e)),e.l=r;var d=s||o||l||"";d&&c&&(d+="#"+c),d||(d="#"+c),i&2&&d.charAt(0)=="/"&&d.charAt(1)!="/"&&(d="file://"+d);var f={Target:d};return u&&(f.guid=u),h&&(f.time=h),n&&(f.Tooltip=n),f}function Pu(e){var t=e.read_shift(1),r=e.read_shift(1),a=e.read_shift(1),i=e.read_shift(1);return[t,r,a,i]}function Lu(e,t){var r=Pu(e);return r[3]=0,r}function Ar(e){var t=e.read_shift(2),r=e.read_shift(2),a=e.read_shift(2);return{r:t,c:r,ixfe:a}}function wm(e){var t=e.read_shift(2),r=e.read_shift(2);return e.l+=8,{type:t,flags:r}}function ym(e,t,r){return t===0?"":Na(e,t,r)}function _m(e,t,r){var a=r.biff>8?4:2,i=e.read_shift(a),n=e.read_shift(a,"i"),s=e.read_shift(a,"i");return[i,n,s]}function Nu(e){var t=e.read_shift(2),r=jo(e);return[t,r]}function km(e,t,r){e.l+=4,t-=4;var a=e.l+t,i=cn(e,t,r),n=e.read_shift(2);if(a-=e.l,n!==a)throw new Error("Malformed AddinUdf: padding = "+a+" != "+n);return e.l+=n,i}function fs(e){var t=e.read_shift(2),r=e.read_shift(2),a=e.read_shift(2),i=e.read_shift(2);return{s:{c:a,r:t},e:{c:i,r}}}function $u(e){var t=e.read_shift(2),r=e.read_shift(2),a=e.read_shift(1),i=e.read_shift(1);return{s:{c:a,r:t},e:{c:i,r}}}var Em=$u;function Mu(e){e.l+=4;var t=e.read_shift(2),r=e.read_shift(2),a=e.read_shift(2);return e.l+=12,[r,t,a]}function Tm(e){var t={};return e.l+=4,e.l+=16,t.fSharedNote=e.read_shift(2),e.l+=4,t}function Am(e){var t={};return e.l+=4,e.cf=e.read_shift(2),t}function xt(e){e.l+=2,e.l+=e.read_shift(2)}var Cm={0:xt,4:xt,5:xt,6:xt,7:Am,8:xt,9:xt,10:xt,11:xt,12:xt,13:Tm,14:xt,15:xt,16:xt,17:xt,18:xt,19:xt,20:xt,21:Mu};function Sm(e,t){for(var r=e.l+t,a=[];e.l<r;){var i=e.read_shift(2);e.l-=2;try{a.push(Cm[i](e,r-e.l))}catch{return e.l=r,a}}return e.l!=r&&(e.l=r),a}function Tn(e,t){var r={BIFFVer:0,dt:0};switch(r.BIFFVer=e.read_shift(2),t-=2,t>=2&&(r.dt=e.read_shift(2),e.l-=2),r.BIFFVer){case 1536:case 1280:case 1024:case 768:case 512:case 2:case 7:break;default:if(t>6)throw new Error("Unexpected BIFF Ver "+r.BIFFVer)}return e.read_shift(t),r}function Fm(e,t){return t===0||e.read_shift(2),1200}function Dm(e,t,r){if(r.enc)return e.l+=t,"";var a=e.l,i=Na(e,0,r);return e.read_shift(t+a-e.l),i}function Om(e,t,r){var a=r&&r.biff==8||t==2?e.read_shift(2):(e.l+=t,0);return{fDialog:a&16,fBelow:a&64,fRight:a&128}}function Rm(e,t,r){var a=e.read_shift(4),i=e.read_shift(1)&3,n=e.read_shift(1);switch(n){case 0:n="Worksheet";break;case 1:n="Macrosheet";break;case 2:n="Chartsheet";break;case 6:n="VBAModule";break}var s=cn(e,0,r);return s.length===0&&(s="Sheet1"),{pos:a,hs:i,dt:n,name:s}}function Im(e,t){for(var r=e.l+t,a=e.read_shift(4),i=e.read_shift(4),n=[],s=0;s!=i&&e.l<r;++s)n.push(pm(e));return n.Count=a,n.Unique=i,n}function Pm(e,t){var r={};return r.dsst=e.read_shift(2),e.l+=t-2,r}function Lm(e){var t={};t.r=e.read_shift(2),t.c=e.read_shift(2),t.cnt=e.read_shift(2)-t.c;var r=e.read_shift(2);e.l+=4;var a=e.read_shift(1);return e.l+=3,a&7&&(t.level=a&7),a&32&&(t.hidden=!0),a&64&&(t.hpt=r/20),t}function Nm(e){var t=wm(e);if(t.type!=2211)throw new Error("Invalid Future Record "+t.type);var r=e.read_shift(4);return r!==0}function $m(e){return e.read_shift(2),e.read_shift(4)}function Fc(e,t,r){var a=0;r&&r.biff==2||(a=e.read_shift(2));var i=e.read_shift(2);r&&r.biff==2&&(a=1-(i>>15),i&=32767);var n={Unsynced:a&1,DyZero:(a&2)>>1,ExAsc:(a&4)>>2,ExDsc:(a&8)>>3};return[n,i]}function Mm(e){var t=e.read_shift(2),r=e.read_shift(2),a=e.read_shift(2),i=e.read_shift(2),n=e.read_shift(2),s=e.read_shift(2),o=e.read_shift(2),l=e.read_shift(2),c=e.read_shift(2);return{Pos:[t,r],Dim:[a,i],Flags:n,CurTab:s,FirstTab:o,Selected:l,TabRatio:c}}function Bm(e,t,r){if(r&&r.biff>=2&&r.biff<5)return{};var a=e.read_shift(2);return{RTL:a&64}}function zm(){}function Um(e,t,r){var a={dyHeight:e.read_shift(2),fl:e.read_shift(2)};switch(r&&r.biff||8){case 2:break;case 3:case 4:e.l+=2;break;default:e.l+=10;break}return a.name=cn(e,0,r),a}function Vm(e){var t=Ar(e);return t.isst=e.read_shift(4),t}function Hm(e,t,r){r.biffguess&&r.biff==2&&(r.biff=5);var a=e.l+t,i=Ar(e);r.biff==2&&e.l++;var n=un(e,a-e.l,r);return i.val=n,i}function Wm(e,t,r){var a=e.read_shift(2),i=Na(e,0,r);return[a,i]}var jm=Na;function Dc(e,t,r){var a=e.l+t,i=r.biff==8||!r.biff?4:2,n=e.read_shift(i),s=e.read_shift(i),o=e.read_shift(2),l=e.read_shift(2);return e.l=a,{s:{r:n,c:o},e:{r:s,c:l}}}function Gm(e){var t=e.read_shift(2),r=e.read_shift(2),a=Nu(e);return{r:t,c:r,ixfe:a[0],rknum:a[1]}}function Xm(e,t){for(var r=e.l+t-2,a=e.read_shift(2),i=e.read_shift(2),n=[];e.l<r;)n.push(Nu(e));if(e.l!==r)throw new Error("MulRK read error");var s=e.read_shift(2);if(n.length!=s-i+1)throw new Error("MulRK length mismatch");return{r:a,c:i,C:s,rkrec:n}}function Km(e,t){for(var r=e.l+t-2,a=e.read_shift(2),i=e.read_shift(2),n=[];e.l<r;)n.push(e.read_shift(2));if(e.l!==r)throw new Error("MulBlank read error");var s=e.read_shift(2);if(n.length!=s-i+1)throw new Error("MulBlank length mismatch");return{r:a,c:i,C:s,ixfe:n}}function Ym(e,t,r,a){var i={},n=e.read_shift(4),s=e.read_shift(4),o=e.read_shift(4),l=e.read_shift(2);return i.patternType=G1[o>>26],a.cellStyles&&(i.alc=n&7,i.fWrap=n>>3&1,i.alcV=n>>4&7,i.fJustLast=n>>7&1,i.trot=n>>8&255,i.cIndent=n>>16&15,i.fShrinkToFit=n>>20&1,i.iReadOrder=n>>22&2,i.fAtrNum=n>>26&1,i.fAtrFnt=n>>27&1,i.fAtrAlc=n>>28&1,i.fAtrBdr=n>>29&1,i.fAtrPat=n>>30&1,i.fAtrProt=n>>31&1,i.dgLeft=s&15,i.dgRight=s>>4&15,i.dgTop=s>>8&15,i.dgBottom=s>>12&15,i.icvLeft=s>>16&127,i.icvRight=s>>23&127,i.grbitDiag=s>>30&3,i.icvTop=o&127,i.icvBottom=o>>7&127,i.icvDiag=o>>14&127,i.dgDiag=o>>21&15,i.icvFore=l&127,i.icvBack=l>>7&127,i.fsxButton=l>>14&1),i}function qm(e,t,r){var a={};return a.ifnt=e.read_shift(2),a.numFmtId=e.read_shift(2),a.flags=e.read_shift(2),a.fStyle=a.flags>>2&1,t-=6,a.data=Ym(e,t,a.fStyle,r),a}function Zm(e){e.l+=4;var t=[e.read_shift(2),e.read_shift(2)];if(t[0]!==0&&t[0]--,t[1]!==0&&t[1]--,t[0]>7||t[1]>7)throw new Error("Bad Gutters: "+t.join("|"));return t}function Oc(e,t,r){var a=Ar(e);(r.biff==2||t==9)&&++e.l;var i=dm(e);return a.val=i,a.t=i===!0||i===!1?"b":"e",a}function Jm(e,t,r){r.biffguess&&r.biff==2&&(r.biff=5);var a=Ar(e),i=wt(e);return a.val=i,a}var Rc=ym;function Qm(e,t,r){var a=e.l+t,i=e.read_shift(2),n=e.read_shift(2);if(r.sbcch=n,n==1025||n==14849)return[n,i];if(n<1||n>255)throw new Error("Unexpected SupBook type: "+n);for(var s=Ea(e,n),o=[];a>e.l;)o.push(un(e));return[n,i,s,o]}function Ic(e,t,r){var a=e.read_shift(2),i,n={fBuiltIn:a&1,fWantAdvise:a>>>1&1,fWantPict:a>>>2&1,fOle:a>>>3&1,fOleLink:a>>>4&1,cf:a>>>5&1023,fIcon:a>>>15&1};return r.sbcch===14849&&(i=km(e,t-2,r)),n.body=i||e.read_shift(t-2),typeof i=="string"&&(n.Name=i),n}var ev=["_xlnm.Consolidate_Area","_xlnm.Auto_Open","_xlnm.Auto_Close","_xlnm.Extract","_xlnm.Database","_xlnm.Criteria","_xlnm.Print_Area","_xlnm.Print_Titles","_xlnm.Recorder","_xlnm.Data_Form","_xlnm.Auto_Activate","_xlnm.Auto_Deactivate","_xlnm.Sheet_Title","_xlnm._FilterDatabase"];function Pc(e,t,r){var a=e.l+t,i=e.read_shift(2),n=e.read_shift(1),s=e.read_shift(1),o=e.read_shift(r&&r.biff==2?1:2),l=0;(!r||r.biff>=5)&&(r.biff!=5&&(e.l+=2),l=e.read_shift(2),r.biff==5&&(e.l+=2),e.l+=4);var c=Ea(e,s,r);i&32&&(c=ev[c.charCodeAt(0)]);var u=a-e.l;r&&r.biff==2&&--u;var h=a==e.l||o===0||!(u>0)?[]:Lw(e,u,r,o);return{chKey:n,Name:c,itab:l,rgce:h}}function Bu(e,t,r){if(r.biff<8)return tv(e,t,r);for(var a=[],i=e.l+t,n=e.read_shift(r.biff>8?4:2);n--!==0;)a.push(_m(e,r.biff>8?12:6,r));if(e.l!=i)throw new Error("Bad ExternSheet: "+e.l+" != "+i);return a}function tv(e,t,r){e[e.l+1]==3&&e[e.l]++;var a=cn(e,t,r);return a.charCodeAt(0)==3?a.slice(1):a}function rv(e,t,r){if(r.biff<8){e.l+=t;return}var a=e.read_shift(2),i=e.read_shift(2),n=Ea(e,a,r),s=Ea(e,i,r);return[n,s]}function av(e,t,r){var a=$u(e);e.l++;var i=e.read_shift(1);return t-=8,[Nw(e,t,r),i,a]}function Lc(e,t,r){var a=Em(e);switch(r.biff){case 2:e.l++,t-=7;break;case 3:case 4:e.l+=2,t-=8;break;default:e.l+=6,t-=12}return[a,Iw(e,t,r)]}function iv(e){var t=e.read_shift(4)!==0,r=e.read_shift(4)!==0,a=e.read_shift(4);return[t,r,a]}function nv(e,t,r){if(!(r.biff<8)){var a=e.read_shift(2),i=e.read_shift(2),n=e.read_shift(2),s=e.read_shift(2),o=Na(e,0,r);return r.biff<8&&e.read_shift(1),[{r:a,c:i},o,s,n]}}function sv(e,t,r){return nv(e,t,r)}function ov(e,t){for(var r=[],a=e.read_shift(2);a--;)r.push(fs(e));return r}function lv(e,t,r){if(r&&r.biff<8)return uv(e,t,r);var a=Mu(e),i=Sm(e,t-22,a[1]);return{cmo:a,ft:i}}var cv={8:function(e,t){var r=e.l+t;e.l+=10;var a=e.read_shift(2);e.l+=4,e.l+=2,e.l+=2,e.l+=2,e.l+=4;var i=e.read_shift(1);return e.l+=i,e.l=r,{fmt:a}}};function uv(e,t,r){e.l+=4;var a=e.read_shift(2),i=e.read_shift(2),n=e.read_shift(2);e.l+=2,e.l+=2,e.l+=2,e.l+=2,e.l+=2,e.l+=2,e.l+=2,e.l+=2,e.l+=2,e.l+=6,t-=36;var s=[];return s.push((cv[a]||kt)(e,t,r)),{cmo:[i,a,n],ft:s}}function hv(e,t,r){var a=e.l,i="";try{e.l+=4;var n=(r.lastobj||{cmo:[0,0]}).cmo[1],s;[0,5,7,11,12,14].indexOf(n)==-1?e.l+=6:s=gm(e,6,r);var o=e.read_shift(2);e.read_shift(2),et(e,2);var l=e.read_shift(2);e.l+=l;for(var c=1;c<e.lens.length-1;++c){if(e.l-a!=e.lens[c])throw new Error("TxO: bad continue record");var u=e[e.l],h=Ea(e,e.lens[c+1]-e.lens[c]-1);if(i+=h,i.length>=(u?o:2*o))break}if(i.length!==o&&i.length!==o*2)throw new Error("cchText: "+o+" != "+i.length);return e.l=a+t,{t:i}}catch{return e.l=a+t,{t:i}}}function fv(e,t){var r=fs(e);e.l+=16;var a=bm(e,t-24);return[r,a]}function dv(e,t){e.read_shift(2);var r=fs(e),a=e.read_shift((t-10)/2,"dbcs-cont");return a=a.replace(Dt,""),[r,a]}function pv(e){var t=[0,0],r;return r=e.read_shift(2),t[0]=Ec[r]||r,r=e.read_shift(2),t[1]=Ec[r]||r,t}function gv(e){for(var t=e.read_shift(2),r=[];t-- >0;)r.push(Lu(e));return r}function mv(e){for(var t=e.read_shift(2),r=[];t-- >0;)r.push(Lu(e));return r}function vv(e){e.l+=2;var t={cxfs:0,crc:0};return t.cxfs=e.read_shift(2),t.crc=e.read_shift(4),t}function zu(e,t,r){if(!r.cellStyles)return kt(e,t);var a=r&&r.biff>=12?4:2,i=e.read_shift(a),n=e.read_shift(a),s=e.read_shift(a),o=e.read_shift(a),l=e.read_shift(2);a==2&&(e.l+=2);var c={s:i,e:n,w:s,ixfe:o,flags:l};return(r.biff>=5||!r.biff)&&(c.level=l>>8&7),c}function xv(e,t){var r={};return t<32||(e.l+=16,r.header=wt(e),r.footer=wt(e),e.l+=2),r}function bv(e,t,r){var a={area:!1};if(r.biff!=5)return e.l+=t,a;var i=e.read_shift(1);return e.l+=3,i&16&&(a.area=!0),a}var wv=Ar,yv=Iu,_v=un;function kv(e){var t=e.read_shift(2),r=e.read_shift(2),a=e.read_shift(4),i={fmt:t,env:r,len:a,data:e.slice(e.l,e.l+a)};return e.l+=a,i}function Ev(e,t,r){r.biffguess&&r.biff==5&&(r.biff=2);var a=Ar(e);++e.l;var i=Na(e,t-7,r);return a.t="str",a.val=i,a}function Tv(e){var t=Ar(e);++e.l;var r=wt(e);return t.t="n",t.val=r,t}function Av(e){var t=Ar(e);++e.l;var r=e.read_shift(2);return t.t="n",t.val=r,t}function Cv(e){var t=e.read_shift(1);return t===0?(e.l++,""):e.read_shift(t,"sbcs-cont")}function Sv(e,t){e.l+=6,e.l+=2,e.l+=1,e.l+=3,e.l+=1,e.l+=t-13}function Fv(e,t,r){var a=e.l+t,i=Ar(e),n=e.read_shift(2),s=Ea(e,n,r);return e.l=a,i.t="str",i.val=s,i}var Dv=[2,3,48,49,131,139,140,245],Nc=function(){var e={1:437,2:850,3:1252,4:1e4,100:852,101:866,102:865,103:861,104:895,105:620,106:737,107:857,120:950,121:949,122:936,123:932,124:874,125:1255,126:1256,150:10007,151:10029,152:10006,200:1250,201:1251,202:1254,203:1253,0:20127,8:865,9:437,10:850,11:437,13:437,14:850,15:437,16:850,17:437,18:850,19:932,20:850,21:437,22:850,23:865,24:437,25:437,26:850,27:437,28:863,29:850,31:852,34:852,35:852,36:860,37:850,38:866,55:850,64:852,77:936,78:949,79:950,80:874,87:1252,88:1252,89:1252,108:863,134:737,135:852,136:857,204:1257,255:16969},t=No({1:437,2:850,3:1252,4:1e4,100:852,101:866,102:865,103:861,104:895,105:620,106:737,107:857,120:950,121:949,122:936,123:932,124:874,125:1255,126:1256,150:10007,151:10029,152:10006,200:1250,201:1251,202:1254,203:1253,0:20127});function r(o,l){var c=[],u=ta(1);switch(l.type){case"base64":u=sr(Ht(o));break;case"binary":u=sr(o);break;case"buffer":case"array":u=o;break}ft(u,0);var h=u.read_shift(1),d=!!(h&136),f=!1,p=!1;switch(h){case 2:break;case 3:break;case 48:f=!0,d=!0;break;case 49:f=!0,d=!0;break;case 131:break;case 139:break;case 140:p=!0;break;case 245:break;default:throw new Error("DBF Unsupported Version: "+h.toString(16))}var g=0,m=521;h==2&&(g=u.read_shift(2)),u.l+=3,h!=2&&(g=u.read_shift(4)),g>1048576&&(g=1e6),h!=2&&(m=u.read_shift(2));var w=u.read_shift(2),C=l.codepage||1252;h!=2&&(u.l+=16,u.read_shift(1),u[u.l]!==0&&(C=e[u[u.l]]),u.l+=1,u.l+=2),p&&(u.l+=36);for(var x=[],D={},M=Math.min(u.length,h==2?521:m-10-(f?264:0)),O=p?32:11;u.l<M&&u[u.l]!=13;)switch(D={},D.name=Wi.utils.decode(C,u.slice(u.l,u.l+O)).replace(/[\u0000\r\n].*$/g,""),u.l+=O,D.type=String.fromCharCode(u.read_shift(1)),h!=2&&!p&&(D.offset=u.read_shift(4)),D.len=u.read_shift(1),h==2&&(D.offset=u.read_shift(2)),D.dec=u.read_shift(1),D.name.length&&x.push(D),h!=2&&(u.l+=p?13:14),D.type){case"B":(!f||D.len!=8)&&l.WTF&&console.log("Skipping "+D.name+":"+D.type);break;case"G":case"P":l.WTF&&console.log("Skipping "+D.name+":"+D.type);break;case"+":case"0":case"@":case"C":case"D":case"F":case"I":case"L":case"M":case"N":case"O":case"T":case"Y":break;default:throw new Error("Unknown Field Type: "+D.type)}if(u[u.l]!==13&&(u.l=m-1),u.read_shift(1)!==13)throw new Error("DBF Terminator not found "+u.l+" "+u[u.l]);u.l=m;var E=0,B=0;for(c[0]=[],B=0;B!=x.length;++B)c[0][B]=x[B].name;for(;g-- >0;){if(u[u.l]===42){u.l+=w;continue}for(++u.l,c[++E]=[],B=0,B=0;B!=x.length;++B){var R=u.slice(u.l,u.l+x[B].len);u.l+=x[B].len,ft(R,0);var H=Wi.utils.decode(C,R);switch(x[B].type){case"C":H.trim().length&&(c[E][B]=H.replace(/\s+$/,""));break;case"D":H.length===8?c[E][B]=new Date(+H.slice(0,4),+H.slice(4,6)-1,+H.slice(6,8)):c[E][B]=H;break;case"F":c[E][B]=parseFloat(H.trim());break;case"+":case"I":c[E][B]=p?R.read_shift(-4,"i")^2147483648:R.read_shift(4,"i");break;case"L":switch(H.trim().toUpperCase()){case"Y":case"T":c[E][B]=!0;break;case"N":case"F":c[E][B]=!1;break;case"":case"?":break;default:throw new Error("DBF Unrecognized L:|"+H+"|")}break;case"M":if(!d)throw new Error("DBF Unexpected MEMO for type "+h.toString(16));c[E][B]="##MEMO##"+(p?parseInt(H.trim(),10):R.read_shift(4));break;case"N":H=H.replace(/\u0000/g,"").trim(),H&&H!="."&&(c[E][B]=+H||0);break;case"@":c[E][B]=new Date(R.read_shift(-8,"f")-621356832e5);break;case"T":c[E][B]=new Date((R.read_shift(4)-2440588)*864e5+R.read_shift(4));break;case"Y":c[E][B]=R.read_shift(4,"i")/1e4+R.read_shift(4,"i")/1e4*Math.pow(2,32);break;case"O":c[E][B]=-R.read_shift(-8,"f");break;case"B":if(f&&x[B].len==8){c[E][B]=R.read_shift(8,"f");break}case"G":case"P":R.l+=x[B].len;break;case"0":if(x[B].name==="_NullFlags")break;default:throw new Error("DBF Unsupported data type "+x[B].type)}}}if(h!=2&&u.l<u.length&&u[u.l++]!=26)throw new Error("DBF EOF Marker missing "+(u.l-1)+" of "+u.length+" "+u[u.l-1].toString(16));return l&&l.sheetRows&&(c=c.slice(0,l.sheetRows)),l.DBF=x,c}function a(o,l){var c=l||{};c.dateNF||(c.dateNF="yyyymmdd");var u=ni(r(o,c),c);return u["!cols"]=c.DBF.map(function(h){return{wch:h.len,DBF:h}}),delete c.DBF,u}function i(o,l){try{return ia(a(o,l),l)}catch(c){if(l&&l.WTF)throw c}return{SheetNames:[],Sheets:{}}}var n={B:8,C:250,L:1,D:8,"?":0,"":0};function s(o,l){var c=l||{};if(+c.codepage>=0&&or(+c.codepage),c.type=="string")throw new Error("Cannot write DBF to JS string");var u=Ks(),h=io(o,{header:1,raw:!0,cellDates:!0}),d=h[0],f=h.slice(1),p=o["!cols"]||[],g=0,m=0,w=0,C=1;for(g=0;g<d.length;++g){if(((p[g]||{}).DBF||{}).name){d[g]=p[g].DBF.name,++w;continue}if(d[g]!=null){if(++w,typeof d[g]=="number"&&(d[g]=d[g].toString(10)),typeof d[g]!="string")throw new Error("DBF Invalid column name "+d[g]+" |"+typeof d[g]+"|");if(d.indexOf(d[g])!==g){for(m=0;m<1024;++m)if(d.indexOf(d[g]+"_"+m)==-1){d[g]+="_"+m;break}}}}var x=Xe(o["!ref"]),D=[],M=[],O=[];for(g=0;g<=x.e.c-x.s.c;++g){var E="",B="",R=0,H=[];for(m=0;m<f.length;++m)f[m][g]!=null&&H.push(f[m][g]);if(H.length==0||d[g]==null){D[g]="?";continue}for(m=0;m<H.length;++m){switch(typeof H[m]){case"number":B="B";break;case"string":B="C";break;case"boolean":B="L";break;case"object":B=H[m]instanceof Date?"D":"C";break;default:B="C"}R=Math.max(R,String(H[m]).length),E=E&&E!=B?"C":B}R>250&&(R=250),B=((p[g]||{}).DBF||{}).type,B=="C"&&p[g].DBF.len>R&&(R=p[g].DBF.len),E=="B"&&B=="N"&&(E="N",O[g]=p[g].DBF.dec,R=p[g].DBF.len),M[g]=E=="C"||B=="N"?R:n[E]||0,C+=M[g],D[g]=E}var z=u.next(32);for(z.write_shift(4,318902576),z.write_shift(4,f.length),z.write_shift(2,296+32*w),z.write_shift(2,C),g=0;g<4;++g)z.write_shift(4,0);for(z.write_shift(4,0|(+t[B0]||3)<<8),g=0,m=0;g<d.length;++g)if(d[g]!=null){var L=u.next(32),Z=(d[g].slice(-10)+"\0\0\0\0\0\0\0\0\0\0\0").slice(0,11);L.write_shift(1,Z,"sbcs"),L.write_shift(1,D[g]=="?"?"C":D[g],"sbcs"),L.write_shift(4,m),L.write_shift(1,M[g]||n[D[g]]||0),L.write_shift(1,O[g]||0),L.write_shift(1,2),L.write_shift(4,0),L.write_shift(1,0),L.write_shift(4,0),L.write_shift(4,0),m+=M[g]||n[D[g]]||0}var se=u.next(264);for(se.write_shift(4,13),g=0;g<65;++g)se.write_shift(4,0);for(g=0;g<f.length;++g){var te=u.next(C);for(te.write_shift(1,0),m=0;m<d.length;++m)if(d[m]!=null)switch(D[m]){case"L":te.write_shift(1,f[g][m]==null?63:f[g][m]?84:70);break;case"B":te.write_shift(8,f[g][m]||0,"f");break;case"N":var le="0";for(typeof f[g][m]=="number"&&(le=f[g][m].toFixed(O[m]||0)),w=0;w<M[m]-le.length;++w)te.write_shift(1,32);te.write_shift(1,le,"sbcs");break;case"D":f[g][m]?(te.write_shift(4,("0000"+f[g][m].getFullYear()).slice(-4),"sbcs"),te.write_shift(2,("00"+(f[g][m].getMonth()+1)).slice(-2),"sbcs"),te.write_shift(2,("00"+f[g][m].getDate()).slice(-2),"sbcs")):te.write_shift(8,"00000000","sbcs");break;case"C":var re=String(f[g][m]!=null?f[g][m]:"").slice(0,M[m]);for(te.write_shift(1,re,"sbcs"),w=0;w<M[m]-re.length;++w)te.write_shift(1,32);break}}return u.next(1).write_shift(1,26),u.end()}return{to_workbook:i,to_sheet:a,from_sheet:s}}(),Ov=function(){var e={AA:"À",BA:"Á",CA:"Â",DA:195,HA:"Ä",JA:197,AE:"È",BE:"É",CE:"Ê",HE:"Ë",AI:"Ì",BI:"Í",CI:"Î",HI:"Ï",AO:"Ò",BO:"Ó",CO:"Ô",DO:213,HO:"Ö",AU:"Ù",BU:"Ú",CU:"Û",HU:"Ü",Aa:"à",Ba:"á",Ca:"â",Da:227,Ha:"ä",Ja:229,Ae:"è",Be:"é",Ce:"ê",He:"ë",Ai:"ì",Bi:"í",Ci:"î",Hi:"ï",Ao:"ò",Bo:"ó",Co:"ô",Do:245,Ho:"ö",Au:"ù",Bu:"ú",Cu:"û",Hu:"ü",KC:"Ç",Kc:"ç",q:"æ",z:"œ",a:"Æ",j:"Œ",DN:209,Dn:241,Hy:255,S:169,c:170,R:174,"B ":180,0:176,1:177,2:178,3:179,5:181,6:182,7:183,Q:185,k:186,b:208,i:216,l:222,s:240,y:248,"!":161,'"':162,"#":163,"(":164,"%":165,"'":167,"H ":168,"+":171,";":187,"<":188,"=":189,">":190,"?":191,"{":223},t=new RegExp("\x1BN("+wr(e).join("|").replace(/\|\|\|/,"|\\||").replace(/([?()+])/g,"\\$1")+"|\\|)","gm"),r=function(d,f){var p=e[f];return typeof p=="number"?Jl(p):p},a=function(d,f,p){var g=f.charCodeAt(0)-32<<4|p.charCodeAt(0)-48;return g==59?d:Jl(g)};e["|"]=254;function i(d,f){switch(f.type){case"base64":return n(Ht(d),f);case"binary":return n(d,f);case"buffer":return n(Ae&&Buffer.isBuffer(d)?d.toString("binary"):Ra(d),f);case"array":return n(ka(d),f)}throw new Error("Unrecognized type "+f.type)}function n(d,f){var p=d.split(/[\n\r]+/),g=-1,m=-1,w=0,C=0,x=[],D=[],M=null,O={},E=[],B=[],R=[],H=0,z;for(+f.codepage>=0&&or(+f.codepage);w!==p.length;++w){H=0;var L=p[w].trim().replace(/\x1B([\x20-\x2F])([\x30-\x3F])/g,a).replace(t,r),Z=L.replace(/;;/g,"\0").split(";").map(function(P){return P.replace(/\u0000/g,";")}),se=Z[0],te;if(L.length>0)switch(se){case"ID":break;case"E":break;case"B":break;case"O":break;case"W":break;case"P":Z[1].charAt(0)=="P"&&D.push(L.slice(3).replace(/;;/g,";"));break;case"C":var le=!1,re=!1,Ee=!1,W=!1,de=-1,ve=-1;for(C=1;C<Z.length;++C)switch(Z[C].charAt(0)){case"A":break;case"X":m=parseInt(Z[C].slice(1))-1,re=!0;break;case"Y":for(g=parseInt(Z[C].slice(1))-1,re||(m=0),z=x.length;z<=g;++z)x[z]=[];break;case"K":te=Z[C].slice(1),te.charAt(0)==='"'?te=te.slice(1,te.length-1):te==="TRUE"?te=!0:te==="FALSE"?te=!1:isNaN(cr(te))?isNaN(Ya(te).getDate())||(te=ut(te)):(te=cr(te),M!==null&&ai(M)&&(te=hs(te))),le=!0;break;case"E":W=!0;var S=Wa(Z[C].slice(1),{r:g,c:m});x[g][m]=[x[g][m],S];break;case"S":Ee=!0,x[g][m]=[x[g][m],"S5S"];break;case"G":break;case"R":de=parseInt(Z[C].slice(1))-1;break;case"C":ve=parseInt(Z[C].slice(1))-1;break;default:if(f&&f.WTF)throw new Error("SYLK bad record "+L)}if(le&&(x[g][m]&&x[g][m].length==2?x[g][m][0]=te:x[g][m]=te,M=null),Ee){if(W)throw new Error("SYLK shared formula cannot have own formula");var G=de>-1&&x[de][ve];if(!G||!G[1])throw new Error("SYLK shared formula cannot find base");x[g][m][1]=qu(G[1],{r:g-de,c:m-ve})}break;case"F":var N=0;for(C=1;C<Z.length;++C)switch(Z[C].charAt(0)){case"X":m=parseInt(Z[C].slice(1))-1,++N;break;case"Y":for(g=parseInt(Z[C].slice(1))-1,z=x.length;z<=g;++z)x[z]=[];break;case"M":H=parseInt(Z[C].slice(1))/20;break;case"F":break;case"G":break;case"P":M=D[parseInt(Z[C].slice(1))];break;case"S":break;case"D":break;case"N":break;case"W":for(R=Z[C].slice(1).split(" "),z=parseInt(R[0],10);z<=parseInt(R[1],10);++z)H=parseInt(R[2],10),B[z-1]=H===0?{hidden:!0}:{wch:H},qa(B[z-1]);break;case"C":m=parseInt(Z[C].slice(1))-1,B[m]||(B[m]={});break;case"R":g=parseInt(Z[C].slice(1))-1,E[g]||(E[g]={}),H>0?(E[g].hpt=H,E[g].hpx=qi(H)):H===0&&(E[g].hidden=!0);break;default:if(f&&f.WTF)throw new Error("SYLK bad record "+L)}N<1&&(M=null);break;default:if(f&&f.WTF)throw new Error("SYLK bad record "+L)}}return E.length>0&&(O["!rows"]=E),B.length>0&&(O["!cols"]=B),f&&f.sheetRows&&(x=x.slice(0,f.sheetRows)),[x,O]}function s(d,f){var p=i(d,f),g=p[0],m=p[1],w=ni(g,f);return wr(m).forEach(function(C){w[C]=m[C]}),w}function o(d,f){return ia(s(d,f),f)}function l(d,f,p,g){var m="C;Y"+(p+1)+";X"+(g+1)+";K";switch(d.t){case"n":m+=d.v||0,d.f&&!d.F&&(m+=";E"+vb(d.f,{r:p,c:g}));break;case"b":m+=d.v?"TRUE":"FALSE";break;case"e":m+=d.w||d.v;break;case"d":m+='"'+(d.w||d.v)+'"';break;case"s":m+='"'+d.v.replace(/"/g,"").replace(/;/g,";;")+'"';break}return m}function c(d,f){f.forEach(function(p,g){var m="F;W"+(g+1)+" "+(g+1)+" ";p.hidden?m+="0":(typeof p.width=="number"&&!p.wpx&&(p.wpx=Zn(p.width)),typeof p.wpx=="number"&&!p.wch&&(p.wch=Jn(p.wpx)),typeof p.wch=="number"&&(m+=Math.round(p.wch))),m.charAt(m.length-1)!=" "&&d.push(m)})}function u(d,f){f.forEach(function(p,g){var m="F;";p.hidden?m+="M0;":p.hpt?m+="M"+20*p.hpt+";":p.hpx&&(m+="M"+20*Xu(p.hpx)+";"),m.length>2&&d.push(m+"R"+(g+1))})}function h(d,f){var p=["ID;PWXL;N;E"],g=[],m=Xe(d["!ref"]),w,C=Array.isArray(d),x=`\r
`;p.push("P;PGeneral"),p.push("F;P0;DG0G8;M255"),d["!cols"]&&c(p,d["!cols"]),d["!rows"]&&u(p,d["!rows"]),p.push("B;Y"+(m.e.r-m.s.r+1)+";X"+(m.e.c-m.s.c+1)+";D"+[m.s.c,m.s.r,m.e.c,m.e.r].join(" "));for(var D=m.s.r;D<=m.e.r;++D)for(var M=m.s.c;M<=m.e.c;++M){var O=xe({r:D,c:M});w=C?(d[D]||[])[M]:d[O],!(!w||w.v==null&&(!w.f||w.F))&&g.push(l(w,d,D,M))}return p.join(x)+x+g.join(x)+x+"E"+x}return{to_workbook:o,to_sheet:s,from_sheet:h}}(),Rv=function(){function e(n,s){switch(s.type){case"base64":return t(Ht(n),s);case"binary":return t(n,s);case"buffer":return t(Ae&&Buffer.isBuffer(n)?n.toString("binary"):Ra(n),s);case"array":return t(ka(n),s)}throw new Error("Unrecognized type "+s.type)}function t(n,s){for(var o=n.split(`
`),l=-1,c=-1,u=0,h=[];u!==o.length;++u){if(o[u].trim()==="BOT"){h[++l]=[],c=0;continue}if(!(l<0)){var d=o[u].trim().split(","),f=d[0],p=d[1];++u;for(var g=o[u]||"";(g.match(/["]/g)||[]).length&1&&u<o.length-1;)g+=`
`+o[++u];switch(g=g.trim(),+f){case-1:if(g==="BOT"){h[++l]=[],c=0;continue}else if(g!=="EOD")throw new Error("Unrecognized DIF special command "+g);break;case 0:g==="TRUE"?h[l][c]=!0:g==="FALSE"?h[l][c]=!1:isNaN(cr(p))?isNaN(Ya(p).getDate())?h[l][c]=p:h[l][c]=ut(p):h[l][c]=cr(p),++c;break;case 1:g=g.slice(1,g.length-1),g=g.replace(/""/g,'"'),g&&g.match(/^=".*"$/)&&(g=g.slice(2,-1)),h[l][c++]=g!==""?g:null;break}if(g==="EOD")break}}return s&&s.sheetRows&&(h=h.slice(0,s.sheetRows)),h}function r(n,s){return ni(e(n,s),s)}function a(n,s){return ia(r(n,s),s)}var i=function(){var n=function(l,c,u,h,d){l.push(c),l.push(u+","+h),l.push('"'+d.replace(/"/g,'""')+'"')},s=function(l,c,u,h){l.push(c+","+u),l.push(c==1?'"'+h.replace(/"/g,'""')+'"':h)};return function(l){var c=[],u=Xe(l["!ref"]),h,d=Array.isArray(l);n(c,"TABLE",0,1,"sheetjs"),n(c,"VECTORS",0,u.e.r-u.s.r+1,""),n(c,"TUPLES",0,u.e.c-u.s.c+1,""),n(c,"DATA",0,0,"");for(var f=u.s.r;f<=u.e.r;++f){s(c,-1,0,"BOT");for(var p=u.s.c;p<=u.e.c;++p){var g=xe({r:f,c:p});if(h=d?(l[f]||[])[p]:l[g],!h){s(c,1,0,"");continue}switch(h.t){case"n":var m=h.w;!m&&h.v!=null&&(m=h.v),m==null?h.f&&!h.F?s(c,1,0,"="+h.f):s(c,1,0,""):s(c,0,m,"V");break;case"b":s(c,0,h.v?1:0,h.v?"TRUE":"FALSE");break;case"s":s(c,1,0,isNaN(h.v)?h.v:'="'+h.v+'"');break;case"d":h.w||(h.w=Qt(h.z||we[14],Ot(ut(h.v)))),s(c,0,h.w,"V");break;default:s(c,1,0,"")}}}s(c,-1,0,"EOD");var w=`\r
`,C=c.join(w);return C}}();return{to_workbook:a,to_sheet:r,from_sheet:i}}(),Iv=function(){function e(h){return h.replace(/\\b/g,"\\").replace(/\\c/g,":").replace(/\\n/g,`
`)}function t(h){return h.replace(/\\/g,"\\b").replace(/:/g,"\\c").replace(/\n/g,"\\n")}function r(h,d){for(var f=h.split(`
`),p=-1,g=-1,m=0,w=[];m!==f.length;++m){var C=f[m].trim().split(":");if(C[0]==="cell"){var x=Ft(C[1]);if(w.length<=x.r)for(p=w.length;p<=x.r;++p)w[p]||(w[p]=[]);switch(p=x.r,g=x.c,C[2]){case"t":w[p][g]=e(C[3]);break;case"v":w[p][g]=+C[3];break;case"vtf":var D=C[C.length-1];case"vtc":switch(C[3]){case"nl":w[p][g]=!!+C[4];break;default:w[p][g]=+C[4];break}C[2]=="vtf"&&(w[p][g]=[w[p][g],D])}}}return d&&d.sheetRows&&(w=w.slice(0,d.sheetRows)),w}function a(h,d){return ni(r(h,d),d)}function i(h,d){return ia(a(h,d),d)}var n=["socialcalc:version:1.5","MIME-Version: 1.0","Content-Type: multipart/mixed; boundary=SocialCalcSpreadsheetControlSave"].join(`
`),s=["--SocialCalcSpreadsheetControlSave","Content-type: text/plain; charset=UTF-8"].join(`
`)+`
`,o=["# SocialCalc Spreadsheet Control Save","part:sheet"].join(`
`),l="--SocialCalcSpreadsheetControlSave--";function c(h){if(!h||!h["!ref"])return"";for(var d=[],f=[],p,g="",m=ii(h["!ref"]),w=Array.isArray(h),C=m.s.r;C<=m.e.r;++C)for(var x=m.s.c;x<=m.e.c;++x)if(g=xe({r:C,c:x}),p=w?(h[C]||[])[x]:h[g],!(!p||p.v==null||p.t==="z")){switch(f=["cell",g,"t"],p.t){case"s":case"str":f.push(t(p.v));break;case"n":p.f?(f[2]="vtf",f[3]="n",f[4]=p.v,f[5]=t(p.f)):(f[2]="v",f[3]=p.v);break;case"b":f[2]="vt"+(p.f?"f":"c"),f[3]="nl",f[4]=p.v?"1":"0",f[5]=t(p.f||(p.v?"TRUE":"FALSE"));break;case"d":var D=Ot(ut(p.v));f[2]="vtc",f[3]="nd",f[4]=""+D,f[5]=p.w||Qt(p.z||we[14],D);break;case"e":continue}d.push(f.join(":"))}return d.push("sheet:c:"+(m.e.c-m.s.c+1)+":r:"+(m.e.r-m.s.r+1)+":tvf:1"),d.push("valueformat:1:text-wiki"),d.join(`
`)}function u(h){return[n,s,o,s,c(h),l].join(`
`)}return{to_workbook:i,to_sheet:a,from_sheet:u}}(),Ki=function(){function e(u,h,d,f,p){p.raw?h[d][f]=u:u===""||(u==="TRUE"?h[d][f]=!0:u==="FALSE"?h[d][f]=!1:isNaN(cr(u))?isNaN(Ya(u).getDate())?h[d][f]=u:h[d][f]=ut(u):h[d][f]=cr(u))}function t(u,h){var d=h||{},f=[];if(!u||u.length===0)return f;for(var p=u.split(/[\r\n]/),g=p.length-1;g>=0&&p[g].length===0;)--g;for(var m=10,w=0,C=0;C<=g;++C)w=p[C].indexOf(" "),w==-1?w=p[C].length:w++,m=Math.max(m,w);for(C=0;C<=g;++C){f[C]=[];var x=0;for(e(p[C].slice(0,m).trim(),f,C,x,d),x=1;x<=(p[C].length-m)/10+1;++x)e(p[C].slice(m+(x-1)*10,m+x*10).trim(),f,C,x,d)}return d.sheetRows&&(f=f.slice(0,d.sheetRows)),f}var r={44:",",9:"	",59:";",124:"|"},a={44:3,9:2,59:1,124:0};function i(u){for(var h={},d=!1,f=0,p=0;f<u.length;++f)(p=u.charCodeAt(f))==34?d=!d:!d&&p in r&&(h[p]=(h[p]||0)+1);p=[];for(f in h)Object.prototype.hasOwnProperty.call(h,f)&&p.push([h[f],f]);if(!p.length){h=a;for(f in h)Object.prototype.hasOwnProperty.call(h,f)&&p.push([h[f],f])}return p.sort(function(g,m){return g[0]-m[0]||a[g[1]]-a[m[1]]}),r[p.pop()[1]]||44}function n(u,h){var d=h||{},f="",p=d.dense?[]:{},g={s:{c:0,r:0},e:{c:0,r:0}};u.slice(0,4)=="sep="?u.charCodeAt(5)==13&&u.charCodeAt(6)==10?(f=u.charAt(4),u=u.slice(7)):u.charCodeAt(5)==13||u.charCodeAt(5)==10?(f=u.charAt(4),u=u.slice(6)):f=i(u.slice(0,1024)):d&&d.FS?f=d.FS:f=i(u.slice(0,1024));var m=0,w=0,C=0,x=0,D=0,M=f.charCodeAt(0),O=!1,E=0,B=u.charCodeAt(0);u=u.replace(/\r\n/mg,`
`);var R=d.dateNF!=null?Wg(d.dateNF):null;function H(){var z=u.slice(x,D),L={};if(z.charAt(0)=='"'&&z.charAt(z.length-1)=='"'&&(z=z.slice(1,-1).replace(/""/g,'"')),z.length===0)L.t="z";else if(d.raw)L.t="s",L.v=z;else if(z.trim().length===0)L.t="s",L.v=z;else if(z.charCodeAt(0)==61)z.charCodeAt(1)==34&&z.charCodeAt(z.length-1)==34?(L.t="s",L.v=z.slice(2,-1).replace(/""/g,'"')):bb(z)?(L.t="n",L.f=z.slice(1)):(L.t="s",L.v=z);else if(z=="TRUE")L.t="b",L.v=!0;else if(z=="FALSE")L.t="b",L.v=!1;else if(!isNaN(C=cr(z)))L.t="n",d.cellText!==!1&&(L.w=z),L.v=C;else if(!isNaN(Ya(z).getDate())||R&&z.match(R)){L.z=d.dateNF||we[14];var Z=0;R&&z.match(R)&&(z=jg(z,d.dateNF,z.match(R)||[]),Z=1),d.cellDates?(L.t="d",L.v=ut(z,Z)):(L.t="n",L.v=Ot(ut(z,Z))),d.cellText!==!1&&(L.w=Qt(L.z,L.v instanceof Date?Ot(L.v):L.v)),d.cellNF||delete L.z}else L.t="s",L.v=z;if(L.t=="z"||(d.dense?(p[m]||(p[m]=[]),p[m][w]=L):p[xe({c:w,r:m})]=L),x=D+1,B=u.charCodeAt(x),g.e.c<w&&(g.e.c=w),g.e.r<m&&(g.e.r=m),E==M)++w;else if(w=0,++m,d.sheetRows&&d.sheetRows<=m)return!0}e:for(;D<u.length;++D)switch(E=u.charCodeAt(D)){case 34:B===34&&(O=!O);break;case M:case 10:case 13:if(!O&&H())break e;break}return D-x>0&&H(),p["!ref"]=Fe(g),p}function s(u,h){return!(h&&h.PRN)||h.FS||u.slice(0,4)=="sep="||u.indexOf("	")>=0||u.indexOf(",")>=0||u.indexOf(";")>=0?n(u,h):ni(t(u,h),h)}function o(u,h){var d="",f=h.type=="string"?[0,0,0,0]:tl(u,h);switch(h.type){case"base64":d=Ht(u);break;case"binary":d=u;break;case"buffer":h.codepage==65001?d=u.toString("utf8"):h.codepage&&typeof Wi<"u"||(d=Ae&&Buffer.isBuffer(u)?u.toString("binary"):Ra(u));break;case"array":d=ka(u);break;case"string":d=u;break;default:throw new Error("Unrecognized type "+h.type)}return f[0]==239&&f[1]==187&&f[2]==191?d=Be(d.slice(3)):h.type!="string"&&h.type!="buffer"&&h.codepage==65001?d=Be(d):h.type=="binary"&&typeof Wi<"u",d.slice(0,19)=="socialcalc:version:"?Iv.to_sheet(h.type=="string"?d:Be(d),h):s(d,h)}function l(u,h){return ia(o(u,h),h)}function c(u){for(var h=[],d=Xe(u["!ref"]),f,p=Array.isArray(u),g=d.s.r;g<=d.e.r;++g){for(var m=[],w=d.s.c;w<=d.e.c;++w){var C=xe({r:g,c:w});if(f=p?(u[g]||[])[w]:u[C],!f||f.v==null){m.push("          ");continue}for(var x=(f.w||($r(f),f.w)||"").slice(0,10);x.length<10;)x+=" ";m.push(x+(w===0?" ":""))}h.push(m.join(""))}return h.join(`
`)}return{to_workbook:l,to_sheet:o,from_sheet:c}}();function Pv(e,t){var r=t||{},a=!!r.WTF;r.WTF=!0;try{var i=Ov.to_workbook(e,r);return r.WTF=a,i}catch(n){if(r.WTF=a,!n.message.match(/SYLK bad record ID/)&&a)throw n;return Ki.to_workbook(e,t)}}var Ii=function(){function e(S,G,N){if(S){ft(S,S.l||0);for(var P=N.Enum||de;S.l<S.length;){var q=S.read_shift(2),ne=P[q]||P[65535],ue=S.read_shift(2),ae=S.l+ue,Q=ne.f&&ne.f(S,ue,N);if(S.l=ae,G(Q,ne,q))return}}}function t(S,G){switch(G.type){case"base64":return r(sr(Ht(S)),G);case"binary":return r(sr(S),G);case"buffer":case"array":return r(S,G)}throw"Unsupported type "+G.type}function r(S,G){if(!S)return S;var N=G||{},P=N.dense?[]:{},q="Sheet1",ne="",ue=0,ae={},Q=[],De=[],F={s:{r:0,c:0},e:{r:0,c:0}},Ke=N.sheetRows||0;if(S[2]==0&&(S[3]==8||S[3]==9)&&S.length>=16&&S[14]==5&&S[15]===108)throw new Error("Unsupported Works 3 for Mac file");if(S[2]==2)N.Enum=de,e(S,function(oe,Ye,Gt){switch(Gt){case 0:N.vers=oe,oe>=4096&&(N.qpro=!0);break;case 6:F=oe;break;case 204:oe&&(ne=oe);break;case 222:ne=oe;break;case 15:case 51:N.qpro||(oe[1].v=oe[1].v.slice(1));case 13:case 14:case 16:Gt==14&&(oe[2]&112)==112&&(oe[2]&15)>1&&(oe[2]&15)<15&&(oe[1].z=N.dateNF||we[14],N.cellDates&&(oe[1].t="d",oe[1].v=hs(oe[1].v))),N.qpro&&oe[3]>ue&&(P["!ref"]=Fe(F),ae[q]=P,Q.push(q),P=N.dense?[]:{},F={s:{r:0,c:0},e:{r:0,c:0}},ue=oe[3],q=ne||"Sheet"+(ue+1),ne="");var pr=N.dense?(P[oe[0].r]||[])[oe[0].c]:P[xe(oe[0])];if(pr){pr.t=oe[1].t,pr.v=oe[1].v,oe[1].z!=null&&(pr.z=oe[1].z),oe[1].f!=null&&(pr.f=oe[1].f);break}N.dense?(P[oe[0].r]||(P[oe[0].r]=[]),P[oe[0].r][oe[0].c]=oe[1]):P[xe(oe[0])]=oe[1];break}},N);else if(S[2]==26||S[2]==14)N.Enum=ve,S[2]==14&&(N.qpro=!0,S.l=0),e(S,function(oe,Ye,Gt){switch(Gt){case 204:q=oe;break;case 22:oe[1].v=oe[1].v.slice(1);case 23:case 24:case 25:case 37:case 39:case 40:if(oe[3]>ue&&(P["!ref"]=Fe(F),ae[q]=P,Q.push(q),P=N.dense?[]:{},F={s:{r:0,c:0},e:{r:0,c:0}},ue=oe[3],q="Sheet"+(ue+1)),Ke>0&&oe[0].r>=Ke)break;N.dense?(P[oe[0].r]||(P[oe[0].r]=[]),P[oe[0].r][oe[0].c]=oe[1]):P[xe(oe[0])]=oe[1],F.e.c<oe[0].c&&(F.e.c=oe[0].c),F.e.r<oe[0].r&&(F.e.r=oe[0].r);break;case 27:oe[14e3]&&(De[oe[14e3][0]]=oe[14e3][1]);break;case 1537:De[oe[0]]=oe[1],oe[0]==ue&&(q=oe[1]);break}},N);else throw new Error("Unrecognized LOTUS BOF "+S[2]);if(P["!ref"]=Fe(F),ae[ne||q]=P,Q.push(ne||q),!De.length)return{SheetNames:Q,Sheets:ae};for(var Ie={},Me=[],Te=0;Te<De.length;++Te)ae[Q[Te]]?(Me.push(De[Te]||Q[Te]),Ie[De[Te]]=ae[De[Te]]||ae[Q[Te]]):(Me.push(De[Te]),Ie[De[Te]]={"!ref":"A1"});return{SheetNames:Me,Sheets:Ie}}function a(S,G){var N=G||{};if(+N.codepage>=0&&or(+N.codepage),N.type=="string")throw new Error("Cannot write WK1 to JS string");var P=Ks(),q=Xe(S["!ref"]),ne=Array.isArray(S),ue=[];ir(P,0,n(1030)),ir(P,6,l(q));for(var ae=Math.min(q.e.r,8191),Q=q.s.r;Q<=ae;++Q)for(var De=pt(Q),F=q.s.c;F<=q.e.c;++F){Q===q.s.r&&(ue[F]=st(F));var Ke=ue[F]+De,Ie=ne?(S[Q]||[])[F]:S[Ke];if(!(!Ie||Ie.t=="z"))if(Ie.t=="n")(Ie.v|0)==Ie.v&&Ie.v>=-32768&&Ie.v<=32767?ir(P,13,f(Q,F,Ie.v)):ir(P,14,g(Q,F,Ie.v));else{var Me=$r(Ie);ir(P,15,h(Q,F,Me.slice(0,239)))}}return ir(P,1),P.end()}function i(S,G){var N=G||{};if(+N.codepage>=0&&or(+N.codepage),N.type=="string")throw new Error("Cannot write WK3 to JS string");var P=Ks();ir(P,0,s(S));for(var q=0,ne=0;q<S.SheetNames.length;++q)(S.Sheets[S.SheetNames[q]]||{})["!ref"]&&ir(P,27,W(S.SheetNames[q],ne++));var ue=0;for(q=0;q<S.SheetNames.length;++q){var ae=S.Sheets[S.SheetNames[q]];if(!(!ae||!ae["!ref"])){for(var Q=Xe(ae["!ref"]),De=Array.isArray(ae),F=[],Ke=Math.min(Q.e.r,8191),Ie=Q.s.r;Ie<=Ke;++Ie)for(var Me=pt(Ie),Te=Q.s.c;Te<=Q.e.c;++Te){Ie===Q.s.r&&(F[Te]=st(Te));var oe=F[Te]+Me,Ye=De?(ae[Ie]||[])[Te]:ae[oe];if(!(!Ye||Ye.t=="z"))if(Ye.t=="n")ir(P,23,H(Ie,Te,ue,Ye.v));else{var Gt=$r(Ye);ir(P,22,E(Ie,Te,ue,Gt.slice(0,239)))}}++ue}}return ir(P,1),P.end()}function n(S){var G=nt(2);return G.write_shift(2,S),G}function s(S){var G=nt(26);G.write_shift(2,4096),G.write_shift(2,4),G.write_shift(4,0);for(var N=0,P=0,q=0,ne=0;ne<S.SheetNames.length;++ne){var ue=S.SheetNames[ne],ae=S.Sheets[ue];if(!(!ae||!ae["!ref"])){++q;var Q=ii(ae["!ref"]);N<Q.e.r&&(N=Q.e.r),P<Q.e.c&&(P=Q.e.c)}}return N>8191&&(N=8191),G.write_shift(2,N),G.write_shift(1,q),G.write_shift(1,P),G.write_shift(2,0),G.write_shift(2,0),G.write_shift(1,1),G.write_shift(1,2),G.write_shift(4,0),G.write_shift(4,0),G}function o(S,G,N){var P={s:{c:0,r:0},e:{c:0,r:0}};return G==8&&N.qpro?(P.s.c=S.read_shift(1),S.l++,P.s.r=S.read_shift(2),P.e.c=S.read_shift(1),S.l++,P.e.r=S.read_shift(2),P):(P.s.c=S.read_shift(2),P.s.r=S.read_shift(2),G==12&&N.qpro&&(S.l+=2),P.e.c=S.read_shift(2),P.e.r=S.read_shift(2),G==12&&N.qpro&&(S.l+=2),P.s.c==65535&&(P.s.c=P.e.c=P.s.r=P.e.r=0),P)}function l(S){var G=nt(8);return G.write_shift(2,S.s.c),G.write_shift(2,S.s.r),G.write_shift(2,S.e.c),G.write_shift(2,S.e.r),G}function c(S,G,N){var P=[{c:0,r:0},{t:"n",v:0},0,0];return N.qpro&&N.vers!=20768?(P[0].c=S.read_shift(1),P[3]=S.read_shift(1),P[0].r=S.read_shift(2),S.l+=2):(P[2]=S.read_shift(1),P[0].c=S.read_shift(2),P[0].r=S.read_shift(2)),P}function u(S,G,N){var P=S.l+G,q=c(S,G,N);if(q[1].t="s",N.vers==20768){S.l++;var ne=S.read_shift(1);return q[1].v=S.read_shift(ne,"utf8"),q}return N.qpro&&S.l++,q[1].v=S.read_shift(P-S.l,"cstr"),q}function h(S,G,N){var P=nt(7+N.length);P.write_shift(1,255),P.write_shift(2,G),P.write_shift(2,S),P.write_shift(1,39);for(var q=0;q<P.length;++q){var ne=N.charCodeAt(q);P.write_shift(1,ne>=128?95:ne)}return P.write_shift(1,0),P}function d(S,G,N){var P=c(S,G,N);return P[1].v=S.read_shift(2,"i"),P}function f(S,G,N){var P=nt(7);return P.write_shift(1,255),P.write_shift(2,G),P.write_shift(2,S),P.write_shift(2,N,"i"),P}function p(S,G,N){var P=c(S,G,N);return P[1].v=S.read_shift(8,"f"),P}function g(S,G,N){var P=nt(13);return P.write_shift(1,255),P.write_shift(2,G),P.write_shift(2,S),P.write_shift(8,N,"f"),P}function m(S,G,N){var P=S.l+G,q=c(S,G,N);if(q[1].v=S.read_shift(8,"f"),N.qpro)S.l=P;else{var ne=S.read_shift(2);D(S.slice(S.l,S.l+ne),q),S.l+=ne}return q}function w(S,G,N){var P=G&32768;return G&=-32769,G=(P?S:0)+(G>=8192?G-16384:G),(P?"":"$")+(N?st(G):pt(G))}var C={51:["FALSE",0],52:["TRUE",0],70:["LEN",1],80:["SUM",69],81:["AVERAGEA",69],82:["COUNTA",69],83:["MINA",69],84:["MAXA",69],111:["T",1]},x=["","","","","","","","","","+","-","*","/","^","=","<>","<=",">=","<",">","","","","","&","","","","","","",""];function D(S,G){ft(S,0);for(var N=[],P=0,q="",ne="",ue="",ae="";S.l<S.length;){var Q=S[S.l++];switch(Q){case 0:N.push(S.read_shift(8,"f"));break;case 1:ne=w(G[0].c,S.read_shift(2),!0),q=w(G[0].r,S.read_shift(2),!1),N.push(ne+q);break;case 2:{var De=w(G[0].c,S.read_shift(2),!0),F=w(G[0].r,S.read_shift(2),!1);ne=w(G[0].c,S.read_shift(2),!0),q=w(G[0].r,S.read_shift(2),!1),N.push(De+F+":"+ne+q)}break;case 3:if(S.l<S.length){console.error("WK1 premature formula end");return}break;case 4:N.push("("+N.pop()+")");break;case 5:N.push(S.read_shift(2));break;case 6:{for(var Ke="";Q=S[S.l++];)Ke+=String.fromCharCode(Q);N.push('"'+Ke.replace(/"/g,'""')+'"')}break;case 8:N.push("-"+N.pop());break;case 23:N.push("+"+N.pop());break;case 22:N.push("NOT("+N.pop()+")");break;case 20:case 21:ae=N.pop(),ue=N.pop(),N.push(["AND","OR"][Q-20]+"("+ue+","+ae+")");break;default:if(Q<32&&x[Q])ae=N.pop(),ue=N.pop(),N.push(ue+x[Q]+ae);else if(C[Q]){if(P=C[Q][1],P==69&&(P=S[S.l++]),P>N.length){console.error("WK1 bad formula parse 0x"+Q.toString(16)+":|"+N.join("|")+"|");return}var Ie=N.slice(-P);N.length-=P,N.push(C[Q][0]+"("+Ie.join(",")+")")}else return Q<=7?console.error("WK1 invalid opcode "+Q.toString(16)):Q<=24?console.error("WK1 unsupported op "+Q.toString(16)):Q<=30?console.error("WK1 invalid opcode "+Q.toString(16)):Q<=115?console.error("WK1 unsupported function opcode "+Q.toString(16)):console.error("WK1 unrecognized opcode "+Q.toString(16))}}N.length==1?G[1].f=""+N[0]:console.error("WK1 bad formula parse |"+N.join("|")+"|")}function M(S){var G=[{c:0,r:0},{t:"n",v:0},0];return G[0].r=S.read_shift(2),G[3]=S[S.l++],G[0].c=S[S.l++],G}function O(S,G){var N=M(S);return N[1].t="s",N[1].v=S.read_shift(G-4,"cstr"),N}function E(S,G,N,P){var q=nt(6+P.length);q.write_shift(2,S),q.write_shift(1,N),q.write_shift(1,G),q.write_shift(1,39);for(var ne=0;ne<P.length;++ne){var ue=P.charCodeAt(ne);q.write_shift(1,ue>=128?95:ue)}return q.write_shift(1,0),q}function B(S,G){var N=M(S);N[1].v=S.read_shift(2);var P=N[1].v>>1;if(N[1].v&1)switch(P&7){case 0:P=(P>>3)*5e3;break;case 1:P=(P>>3)*500;break;case 2:P=(P>>3)/20;break;case 3:P=(P>>3)/200;break;case 4:P=(P>>3)/2e3;break;case 5:P=(P>>3)/2e4;break;case 6:P=(P>>3)/16;break;case 7:P=(P>>3)/64;break}return N[1].v=P,N}function R(S,G){var N=M(S),P=S.read_shift(4),q=S.read_shift(4),ne=S.read_shift(2);if(ne==65535)return P===0&&q===3221225472?(N[1].t="e",N[1].v=15):P===0&&q===3489660928?(N[1].t="e",N[1].v=42):N[1].v=0,N;var ue=ne&32768;return ne=(ne&32767)-16446,N[1].v=(1-ue*2)*(q*Math.pow(2,ne+32)+P*Math.pow(2,ne)),N}function H(S,G,N,P){var q=nt(14);if(q.write_shift(2,S),q.write_shift(1,N),q.write_shift(1,G),P==0)return q.write_shift(4,0),q.write_shift(4,0),q.write_shift(2,65535),q;var ne=0,ue=0,ae=0,Q=0;return P<0&&(ne=1,P=-P),ue=Math.log2(P)|0,P/=Math.pow(2,ue-31),Q=P>>>0,Q&2147483648||(P/=2,++ue,Q=P>>>0),P-=Q,Q|=2147483648,Q>>>=0,P*=Math.pow(2,32),ae=P>>>0,q.write_shift(4,ae),q.write_shift(4,Q),ue+=16383+(ne?32768:0),q.write_shift(2,ue),q}function z(S,G){var N=R(S);return S.l+=G-14,N}function L(S,G){var N=M(S),P=S.read_shift(4);return N[1].v=P>>6,N}function Z(S,G){var N=M(S),P=S.read_shift(8,"f");return N[1].v=P,N}function se(S,G){var N=Z(S);return S.l+=G-10,N}function te(S,G){return S[S.l+G-1]==0?S.read_shift(G,"cstr"):""}function le(S,G){var N=S[S.l++];N>G-1&&(N=G-1);for(var P="";P.length<N;)P+=String.fromCharCode(S[S.l++]);return P}function re(S,G,N){if(!(!N.qpro||G<21)){var P=S.read_shift(1);S.l+=17,S.l+=1,S.l+=2;var q=S.read_shift(G-21,"cstr");return[P,q]}}function Ee(S,G){for(var N={},P=S.l+G;S.l<P;){var q=S.read_shift(2);if(q==14e3){for(N[q]=[0,""],N[q][0]=S.read_shift(2);S[S.l];)N[q][1]+=String.fromCharCode(S[S.l]),S.l++;S.l++}}return N}function W(S,G){var N=nt(5+S.length);N.write_shift(2,14e3),N.write_shift(2,G);for(var P=0;P<S.length;++P){var q=S.charCodeAt(P);N[N.l++]=q>127?95:q}return N[N.l++]=0,N}var de={0:{n:"BOF",f:et},1:{n:"EOF"},2:{n:"CALCMODE"},3:{n:"CALCORDER"},4:{n:"SPLIT"},5:{n:"SYNC"},6:{n:"RANGE",f:o},7:{n:"WINDOW1"},8:{n:"COLW1"},9:{n:"WINTWO"},10:{n:"COLW2"},11:{n:"NAME"},12:{n:"BLANK"},13:{n:"INTEGER",f:d},14:{n:"NUMBER",f:p},15:{n:"LABEL",f:u},16:{n:"FORMULA",f:m},24:{n:"TABLE"},25:{n:"ORANGE"},26:{n:"PRANGE"},27:{n:"SRANGE"},28:{n:"FRANGE"},29:{n:"KRANGE1"},32:{n:"HRANGE"},35:{n:"KRANGE2"},36:{n:"PROTEC"},37:{n:"FOOTER"},38:{n:"HEADER"},39:{n:"SETUP"},40:{n:"MARGINS"},41:{n:"LABELFMT"},42:{n:"TITLES"},43:{n:"SHEETJS"},45:{n:"GRAPH"},46:{n:"NGRAPH"},47:{n:"CALCCOUNT"},48:{n:"UNFORMATTED"},49:{n:"CURSORW12"},50:{n:"WINDOW"},51:{n:"STRING",f:u},55:{n:"PASSWORD"},56:{n:"LOCKED"},60:{n:"QUERY"},61:{n:"QUERYNAME"},62:{n:"PRINT"},63:{n:"PRINTNAME"},64:{n:"GRAPH2"},65:{n:"GRAPHNAME"},66:{n:"ZOOM"},67:{n:"SYMSPLIT"},68:{n:"NSROWS"},69:{n:"NSCOLS"},70:{n:"RULER"},71:{n:"NNAME"},72:{n:"ACOMM"},73:{n:"AMACRO"},74:{n:"PARSE"},102:{n:"PRANGES??"},103:{n:"RRANGES??"},104:{n:"FNAME??"},105:{n:"MRANGES??"},204:{n:"SHEETNAMECS",f:te},222:{n:"SHEETNAMELP",f:le},65535:{n:""}},ve={0:{n:"BOF"},1:{n:"EOF"},2:{n:"PASSWORD"},3:{n:"CALCSET"},4:{n:"WINDOWSET"},5:{n:"SHEETCELLPTR"},6:{n:"SHEETLAYOUT"},7:{n:"COLUMNWIDTH"},8:{n:"HIDDENCOLUMN"},9:{n:"USERRANGE"},10:{n:"SYSTEMRANGE"},11:{n:"ZEROFORCE"},12:{n:"SORTKEYDIR"},13:{n:"FILESEAL"},14:{n:"DATAFILLNUMS"},15:{n:"PRINTMAIN"},16:{n:"PRINTSTRING"},17:{n:"GRAPHMAIN"},18:{n:"GRAPHSTRING"},19:{n:"??"},20:{n:"ERRCELL"},21:{n:"NACELL"},22:{n:"LABEL16",f:O},23:{n:"NUMBER17",f:R},24:{n:"NUMBER18",f:B},25:{n:"FORMULA19",f:z},26:{n:"FORMULA1A"},27:{n:"XFORMAT",f:Ee},28:{n:"DTLABELMISC"},29:{n:"DTLABELCELL"},30:{n:"GRAPHWINDOW"},31:{n:"CPA"},32:{n:"LPLAUTO"},33:{n:"QUERY"},34:{n:"HIDDENSHEET"},35:{n:"??"},37:{n:"NUMBER25",f:L},38:{n:"??"},39:{n:"NUMBER27",f:Z},40:{n:"FORMULA28",f:se},142:{n:"??"},147:{n:"??"},150:{n:"??"},151:{n:"??"},152:{n:"??"},153:{n:"??"},154:{n:"??"},155:{n:"??"},156:{n:"??"},163:{n:"??"},174:{n:"??"},175:{n:"??"},176:{n:"??"},177:{n:"??"},184:{n:"??"},185:{n:"??"},186:{n:"??"},187:{n:"??"},188:{n:"??"},195:{n:"??"},201:{n:"??"},204:{n:"SHEETNAMECS",f:te},205:{n:"??"},206:{n:"??"},207:{n:"??"},208:{n:"??"},256:{n:"??"},259:{n:"??"},260:{n:"??"},261:{n:"??"},262:{n:"??"},263:{n:"??"},265:{n:"??"},266:{n:"??"},267:{n:"??"},268:{n:"??"},270:{n:"??"},271:{n:"??"},384:{n:"??"},389:{n:"??"},390:{n:"??"},393:{n:"??"},396:{n:"??"},512:{n:"??"},514:{n:"??"},513:{n:"??"},516:{n:"??"},517:{n:"??"},640:{n:"??"},641:{n:"??"},642:{n:"??"},643:{n:"??"},644:{n:"??"},645:{n:"??"},646:{n:"??"},647:{n:"??"},648:{n:"??"},658:{n:"??"},659:{n:"??"},660:{n:"??"},661:{n:"??"},662:{n:"??"},665:{n:"??"},666:{n:"??"},768:{n:"??"},772:{n:"??"},1537:{n:"SHEETINFOQP",f:re},1600:{n:"??"},1602:{n:"??"},1793:{n:"??"},1794:{n:"??"},1795:{n:"??"},1796:{n:"??"},1920:{n:"??"},2048:{n:"??"},2049:{n:"??"},2052:{n:"??"},2688:{n:"??"},10998:{n:"??"},12849:{n:"??"},28233:{n:"??"},28484:{n:"??"},65535:{n:""}};return{sheet_to_wk1:a,book_to_wk3:i,to_workbook:t}}();function Lv(e){var t={},r=e.match(Tt),a=0,i=!1;if(r)for(;a!=r.length;++a){var n=ge(r[a]);switch(n[0].replace(/\w*:/g,"")){case"<condense":break;case"<extend":break;case"<shadow":if(!n.val)break;case"<shadow>":case"<shadow/>":t.shadow=1;break;case"</shadow>":break;case"<charset":if(n.val=="1")break;t.cp=Oo[parseInt(n.val,10)];break;case"<outline":if(!n.val)break;case"<outline>":case"<outline/>":t.outline=1;break;case"</outline>":break;case"<rFont":t.name=n.val;break;case"<sz":t.sz=n.val;break;case"<strike":if(!n.val)break;case"<strike>":case"<strike/>":t.strike=1;break;case"</strike>":break;case"<u":if(!n.val)break;switch(n.val){case"double":t.uval="double";break;case"singleAccounting":t.uval="single-accounting";break;case"doubleAccounting":t.uval="double-accounting";break}case"<u>":case"<u/>":t.u=1;break;case"</u>":break;case"<b":if(n.val=="0")break;case"<b>":case"<b/>":t.b=1;break;case"</b>":break;case"<i":if(n.val=="0")break;case"<i>":case"<i/>":t.i=1;break;case"</i>":break;case"<color":n.rgb&&(t.color=n.rgb.slice(2,8));break;case"<color>":case"<color/>":case"</color>":break;case"<family":t.family=n.val;break;case"<family>":case"<family/>":case"</family>":break;case"<vertAlign":t.valign=n.val;break;case"<vertAlign>":case"<vertAlign/>":case"</vertAlign>":break;case"<scheme":break;case"<scheme>":case"<scheme/>":case"</scheme>":break;case"<extLst":case"<extLst>":case"</extLst>":break;case"<ext":i=!0;break;case"</ext>":i=!1;break;default:if(n[0].charCodeAt(1)!==47&&!i)throw new Error("Unrecognized rich format "+n[0])}}return t}var Nv=function(){var e=Gi("t"),t=Gi("rPr");function r(n){var s=n.match(e);if(!s)return{t:"s",v:""};var o={t:"s",v:Oe(s[1])},l=n.match(t);return l&&(o.s=Lv(l[1])),o}var a=/<(?:\w+:)?r>/g,i=/<\/(?:\w+:)?r>/;return function(s){return s.replace(a,"").split(i).map(r).filter(function(o){return o.v})}}(),$v=function(){var t=/(\r\n|\n)/g;function r(i,n,s){var o=[];i.u&&o.push("text-decoration: underline;"),i.uval&&o.push("text-underline-style:"+i.uval+";"),i.sz&&o.push("font-size:"+i.sz+"pt;"),i.outline&&o.push("text-effect: outline;"),i.shadow&&o.push("text-shadow: auto;"),n.push('<span style="'+o.join("")+'">'),i.b&&(n.push("<b>"),s.push("</b>")),i.i&&(n.push("<i>"),s.push("</i>")),i.strike&&(n.push("<s>"),s.push("</s>"));var l=i.valign||"";return l=="superscript"||l=="super"?l="sup":l=="subscript"&&(l="sub"),l!=""&&(n.push("<"+l+">"),s.push("</"+l+">")),s.push("</span>"),i}function a(i){var n=[[],i.v,[]];return i.v?(i.s&&r(i.s,n[0],n[2]),n[0].join("")+n[1].replace(t,"<br/>")+n[2].join("")):""}return function(n){return n.map(a).join("")}}(),Mv=/<(?:\w+:)?t[^>]*>([^<]*)<\/(?:\w+:)?t>/g,Bv=/<(?:\w+:)?r>/,zv=/<(?:\w+:)?rPh.*?>([\s\S]*?)<\/(?:\w+:)?rPh>/g;function Ko(e,t){var r=t?t.cellHTML:!0,a={};return e?(e.match(/^\s*<(?:\w+:)?t[^>]*>/)?(a.t=Oe(Be(e.slice(e.indexOf(">")+1).split(/<\/(?:\w+:)?t>/)[0]||"")),a.r=Be(e),r&&(a.h=Mo(a.t))):e.match(Bv)&&(a.r=Be(e),a.t=Oe(Be((e.replace(zv,"").match(Mv)||[]).join("").replace(Tt,""))),r&&(a.h=$v(Nv(a.r)))),a):{t:""}}var Uv=/<(?:\w+:)?sst([^>]*)>([\s\S]*)<\/(?:\w+:)?sst>/,Vv=/<(?:\w+:)?(?:si|sstItem)>/g,Hv=/<\/(?:\w+:)?(?:si|sstItem)>/;function Wv(e,t){var r=[],a="";if(!e)return r;var i=e.match(Uv);if(i){a=i[2].replace(Vv,"").split(Hv);for(var n=0;n!=a.length;++n){var s=Ko(a[n].trim(),t);s!=null&&(r[r.length]=s)}i=ge(i[1]),r.Count=i.count,r.Unique=i.uniqueCount}return r}function jv(e){return[e.read_shift(4),e.read_shift(4)]}function Gv(e,t){var r=[],a=!1;return Br(e,function(n,s,o){switch(o){case 159:r.Count=n[0],r.Unique=n[1];break;case 19:r.push(n);break;case 160:return!0;case 35:a=!0;break;case 36:a=!1;break;default:if(s.T,!a||t.WTF)throw new Error("Unexpected record 0x"+o.toString(16))}}),r}function Uu(e){for(var t=[],r=e.split(""),a=0;a<r.length;++a)t[a]=r[a].charCodeAt(0);return t}function Ir(e,t){var r={};return r.Major=e.read_shift(2),r.Minor=e.read_shift(2),t>=4&&(e.l+=t-4),r}function Xv(e){var t={};return t.id=e.read_shift(0,"lpp4"),t.R=Ir(e,4),t.U=Ir(e,4),t.W=Ir(e,4),t}function Kv(e){for(var t=e.read_shift(4),r=e.l+t-4,a={},i=e.read_shift(4),n=[];i-- >0;)n.push({t:e.read_shift(4),v:e.read_shift(0,"lpp4")});if(a.name=e.read_shift(0,"lpp4"),a.comps=n,e.l!=r)throw new Error("Bad DataSpaceMapEntry: "+e.l+" != "+r);return a}function Yv(e){var t=[];e.l+=4;for(var r=e.read_shift(4);r-- >0;)t.push(Kv(e));return t}function qv(e){var t=[];e.l+=4;for(var r=e.read_shift(4);r-- >0;)t.push(e.read_shift(0,"lpp4"));return t}function Zv(e){var t={};return e.read_shift(4),e.l+=4,t.id=e.read_shift(0,"lpp4"),t.name=e.read_shift(0,"lpp4"),t.R=Ir(e,4),t.U=Ir(e,4),t.W=Ir(e,4),t}function Jv(e){var t=Zv(e);if(t.ename=e.read_shift(0,"8lpp4"),t.blksz=e.read_shift(4),t.cmode=e.read_shift(4),e.read_shift(4)!=4)throw new Error("Bad !Primary record");return t}function Vu(e,t){var r=e.l+t,a={};a.Flags=e.read_shift(4)&63,e.l+=4,a.AlgID=e.read_shift(4);var i=!1;switch(a.AlgID){case 26126:case 26127:case 26128:i=a.Flags==36;break;case 26625:i=a.Flags==4;break;case 0:i=a.Flags==16||a.Flags==4||a.Flags==36;break;default:throw"Unrecognized encryption algorithm: "+a.AlgID}if(!i)throw new Error("Encryption Flags/AlgID mismatch");return a.AlgIDHash=e.read_shift(4),a.KeySize=e.read_shift(4),a.ProviderType=e.read_shift(4),e.l+=8,a.CSPName=e.read_shift(r-e.l>>1,"utf16le"),e.l=r,a}function Hu(e,t){var r={},a=e.l+t;return e.l+=4,r.Salt=e.slice(e.l,e.l+16),e.l+=16,r.Verifier=e.slice(e.l,e.l+16),e.l+=16,e.read_shift(4),r.VerifierHash=e.slice(e.l,a),e.l=a,r}function Qv(e){var t=Ir(e);switch(t.Minor){case 2:return[t.Minor,ex(e)];case 3:return[t.Minor,tx()];case 4:return[t.Minor,rx(e)]}throw new Error("ECMA-376 Encrypted file unrecognized Version: "+t.Minor)}function ex(e){var t=e.read_shift(4);if((t&63)!=36)throw new Error("EncryptionInfo mismatch");var r=e.read_shift(4),a=Vu(e,r),i=Hu(e,e.length-e.l);return{t:"Std",h:a,v:i}}function tx(){throw new Error("File is password-protected: ECMA-376 Extensible")}function rx(e){var t=["saltSize","blockSize","keyBits","hashSize","cipherAlgorithm","cipherChaining","hashAlgorithm","saltValue"];e.l+=4;var r=e.read_shift(e.length-e.l,"utf8"),a={};return r.replace(Tt,function(n){var s=ge(n);switch(Tr(s[0])){case"<?xml":break;case"<encryption":case"</encryption>":break;case"<keyData":t.forEach(function(o){a[o]=s[o]});break;case"<dataIntegrity":a.encryptedHmacKey=s.encryptedHmacKey,a.encryptedHmacValue=s.encryptedHmacValue;break;case"<keyEncryptors>":case"<keyEncryptors":a.encs=[];break;case"</keyEncryptors>":break;case"<keyEncryptor":a.uri=s.uri;break;case"</keyEncryptor>":break;case"<encryptedKey":a.encs.push(s);break;default:throw s[0]}}),a}function ax(e,t){var r={},a=r.EncryptionVersionInfo=Ir(e,4);if(t-=4,a.Minor!=2)throw new Error("unrecognized minor version code: "+a.Minor);if(a.Major>4||a.Major<2)throw new Error("unrecognized major version code: "+a.Major);r.Flags=e.read_shift(4),t-=4;var i=e.read_shift(4);return t-=4,r.EncryptionHeader=Vu(e,i),t-=i,r.EncryptionVerifier=Hu(e,t),r}function ix(e){var t={},r=t.EncryptionVersionInfo=Ir(e,4);if(r.Major!=1||r.Minor!=1)throw"unrecognized version code "+r.Major+" : "+r.Minor;return t.Salt=e.read_shift(16),t.EncryptedVerifier=e.read_shift(16),t.EncryptedVerifierHash=e.read_shift(16),t}function nx(e){var t=0,r,a=Uu(e),i=a.length+1,n,s,o,l,c;for(r=ta(i),r[0]=a.length,n=1;n!=i;++n)r[n]=a[n-1];for(n=i-1;n>=0;--n)s=r[n],o=t&16384?1:0,l=t<<1&32767,c=o|l,t=c^s;return t^52811}var Wu=function(){var e=[187,255,255,186,255,255,185,128,0,190,15,0,191,15,0],t=[57840,7439,52380,33984,4364,3600,61902,12606,6258,57657,54287,34041,10252,43370,20163],r=[44796,19929,39858,10053,20106,40212,10761,31585,63170,64933,60267,50935,40399,11199,17763,35526,1453,2906,5812,11624,23248,885,1770,3540,7080,14160,28320,56640,55369,41139,20807,41614,21821,43642,17621,28485,56970,44341,19019,38038,14605,29210,60195,50791,40175,10751,21502,43004,24537,18387,36774,3949,7898,15796,31592,63184,47201,24803,49606,37805,14203,28406,56812,17824,35648,1697,3394,6788,13576,27152,43601,17539,35078,557,1114,2228,4456,30388,60776,51953,34243,7079,14158,28316,14128,28256,56512,43425,17251,34502,7597,13105,26210,52420,35241,883,1766,3532,4129,8258,16516,33032,4657,9314,18628],a=function(s){return(s/2|s*128)&255},i=function(s,o){return a(s^o)},n=function(s){for(var o=t[s.length-1],l=104,c=s.length-1;c>=0;--c)for(var u=s[c],h=0;h!=7;++h)u&64&&(o^=r[l]),u*=2,--l;return o};return function(s){for(var o=Uu(s),l=n(o),c=o.length,u=ta(16),h=0;h!=16;++h)u[h]=0;var d,f,p;for((c&1)===1&&(d=l>>8,u[c]=i(e[0],d),--c,d=l&255,f=o[o.length-1],u[c]=i(f,d));c>0;)--c,d=l>>8,u[c]=i(o[c],d),--c,d=l&255,u[c]=i(o[c],d);for(c=15,p=15-o.length;p>0;)d=l>>8,u[c]=i(e[p],d),--c,--p,d=l&255,u[c]=i(o[c],d),--c,--p;return u}}(),sx=function(e,t,r,a,i){i||(i=t),a||(a=Wu(e));var n,s;for(n=0;n!=t.length;++n)s=t[n],s^=a[r],s=(s>>5|s<<3)&255,i[n]=s,++r;return[i,r,a]},ox=function(e){var t=0,r=Wu(e);return function(a){var i=sx("",a,t,r);return t=i[1],i[0]}};function lx(e,t,r,a){var i={key:et(e),verificationBytes:et(e)};return r.password&&(i.verifier=nx(r.password)),a.valid=i.verificationBytes===i.verifier,a.valid&&(a.insitu=ox(r.password)),i}function cx(e,t,r){var a=r||{};return a.Info=e.read_shift(2),e.l-=2,a.Info===1?a.Data=ix(e):a.Data=ax(e,t),a}function ux(e,t,r){var a={Type:r.biff>=8?e.read_shift(2):0};return a.Type?cx(e,t-2,a):lx(e,r.biff>=8?t:t-2,r,a),a}var hx=function(){function e(i,n){switch(n.type){case"base64":return t(Ht(i),n);case"binary":return t(i,n);case"buffer":return t(Ae&&Buffer.isBuffer(i)?i.toString("binary"):Ra(i),n);case"array":return t(ka(i),n)}throw new Error("Unrecognized type "+n.type)}function t(i,n){var s=n||{},o=s.dense?[]:{},l=i.match(/\\trowd.*?\\row\b/g);if(!l.length)throw new Error("RTF missing table");var c={s:{c:0,r:0},e:{c:0,r:l.length-1}};return l.forEach(function(u,h){Array.isArray(o)&&(o[h]=[]);for(var d=/\\\w+\b/g,f=0,p,g=-1;p=d.exec(u);){switch(p[0]){case"\\cell":var m=u.slice(f,d.lastIndex-p[0].length);if(m[0]==" "&&(m=m.slice(1)),++g,m.length){var w={v:m,t:"s"};Array.isArray(o)?o[h][g]=w:o[xe({r:h,c:g})]=w}break}f=d.lastIndex}g>c.e.c&&(c.e.c=g)}),o["!ref"]=Fe(c),o}function r(i,n){return ia(e(i,n),n)}function a(i){for(var n=["{\\rtf1\\ansi"],s=Xe(i["!ref"]),o,l=Array.isArray(i),c=s.s.r;c<=s.e.r;++c){n.push("\\trowd\\trautofit1");for(var u=s.s.c;u<=s.e.c;++u)n.push("\\cellx"+(u+1));for(n.push("\\pard\\intbl"),u=s.s.c;u<=s.e.c;++u){var h=xe({r:c,c:u});o=l?(i[c]||[])[u]:i[h],!(!o||o.v==null&&(!o.f||o.F))&&(n.push(" "+(o.w||($r(o),o.w))),n.push("\\cell"))}n.push("\\pard\\intbl\\row")}return n.join("")+"}"}return{to_workbook:r,to_sheet:e,from_sheet:a}}();function fx(e){var t=e.slice(e[0]==="#"?1:0).slice(0,6);return[parseInt(t.slice(0,2),16),parseInt(t.slice(2,4),16),parseInt(t.slice(4,6),16)]}function Yi(e){for(var t=0,r=1;t!=3;++t)r=r*256+(e[t]>255?255:e[t]<0?0:e[t]);return r.toString(16).toUpperCase().slice(1)}function dx(e){var t=e[0]/255,r=e[1]/255,a=e[2]/255,i=Math.max(t,r,a),n=Math.min(t,r,a),s=i-n;if(s===0)return[0,0,t];var o=0,l=0,c=i+n;switch(l=s/(c>1?2-c:c),i){case t:o=((r-a)/s+6)%6;break;case r:o=(a-t)/s+2;break;case a:o=(t-r)/s+4;break}return[o/6,l,c/2]}function px(e){var t=e[0],r=e[1],a=e[2],i=r*2*(a<.5?a:1-a),n=a-i/2,s=[n,n,n],o=6*t,l;if(r!==0)switch(o|0){case 0:case 6:l=i*o,s[0]+=i,s[1]+=l;break;case 1:l=i*(2-o),s[0]+=l,s[1]+=i;break;case 2:l=i*(o-2),s[1]+=i,s[2]+=l;break;case 3:l=i*(4-o),s[1]+=l,s[2]+=i;break;case 4:l=i*(o-4),s[2]+=i,s[0]+=l;break;case 5:l=i*(6-o),s[2]+=l,s[0]+=i;break}for(var c=0;c!=3;++c)s[c]=Math.round(s[c]*255);return s}function qn(e,t){if(t===0)return e;var r=dx(fx(e));return t<0?r[2]=r[2]*(1+t):r[2]=1-(1-r[2])*(1-t),Yi(px(r))}var ju=6,gx=15,mx=1,St=ju;function Zn(e){return Math.floor((e+Math.round(128/St)/256)*St)}function Jn(e){return Math.floor((e-5)/St*100+.5)/100}function Js(e){return Math.round((e*St+5)/St*256)/256}function Ds(e){return Js(Jn(Zn(e)))}function Yo(e){var t=Math.abs(e-Ds(e)),r=St;if(t>.005)for(St=mx;St<gx;++St)Math.abs(e-Ds(e))<=t&&(t=Math.abs(e-Ds(e)),r=St);St=r}function qa(e){e.width?(e.wpx=Zn(e.width),e.wch=Jn(e.wpx),e.MDW=St):e.wpx?(e.wch=Jn(e.wpx),e.width=Js(e.wch),e.MDW=St):typeof e.wch=="number"&&(e.width=Js(e.wch),e.wpx=Zn(e.width),e.MDW=St),e.customWidth&&delete e.customWidth}var vx=96,Gu=vx;function Xu(e){return e*96/Gu}function qi(e){return e*Gu/96}var xx={None:"none",Solid:"solid",Gray50:"mediumGray",Gray75:"darkGray",Gray25:"lightGray",HorzStripe:"darkHorizontal",VertStripe:"darkVertical",ReverseDiagStripe:"darkDown",DiagStripe:"darkUp",DiagCross:"darkGrid",ThickDiagCross:"darkTrellis",ThinHorzStripe:"lightHorizontal",ThinVertStripe:"lightVertical",ThinReverseDiagStripe:"lightDown",ThinHorzCross:"lightGrid"};function bx(e,t,r,a){t.Borders=[];var i={},n=!1;(e[0].match(Tt)||[]).forEach(function(s){var o=ge(s);switch(Tr(o[0])){case"<borders":case"<borders>":case"</borders>":break;case"<border":case"<border>":case"<border/>":i={},o.diagonalUp&&(i.diagonalUp=Ue(o.diagonalUp)),o.diagonalDown&&(i.diagonalDown=Ue(o.diagonalDown)),t.Borders.push(i);break;case"</border>":break;case"<left/>":break;case"<left":case"<left>":break;case"</left>":break;case"<right/>":break;case"<right":case"<right>":break;case"</right>":break;case"<top/>":break;case"<top":case"<top>":break;case"</top>":break;case"<bottom/>":break;case"<bottom":case"<bottom>":break;case"</bottom>":break;case"<diagonal":case"<diagonal>":case"<diagonal/>":break;case"</diagonal>":break;case"<horizontal":case"<horizontal>":case"<horizontal/>":break;case"</horizontal>":break;case"<vertical":case"<vertical>":case"<vertical/>":break;case"</vertical>":break;case"<start":case"<start>":case"<start/>":break;case"</start>":break;case"<end":case"<end>":case"<end/>":break;case"</end>":break;case"<color":case"<color>":break;case"<color/>":case"</color>":break;case"<extLst":case"<extLst>":case"</extLst>":break;case"<ext":n=!0;break;case"</ext>":n=!1;break;default:if(a&&a.WTF&&!n)throw new Error("unrecognized "+o[0]+" in borders")}})}function wx(e,t,r,a){t.Fills=[];var i={},n=!1;(e[0].match(Tt)||[]).forEach(function(s){var o=ge(s);switch(Tr(o[0])){case"<fills":case"<fills>":case"</fills>":break;case"<fill>":case"<fill":case"<fill/>":i={},t.Fills.push(i);break;case"</fill>":break;case"<gradientFill>":break;case"<gradientFill":case"</gradientFill>":t.Fills.push(i),i={};break;case"<patternFill":case"<patternFill>":o.patternType&&(i.patternType=o.patternType);break;case"<patternFill/>":case"</patternFill>":break;case"<bgColor":i.bgColor||(i.bgColor={}),o.indexed&&(i.bgColor.indexed=parseInt(o.indexed,10)),o.theme&&(i.bgColor.theme=parseInt(o.theme,10)),o.tint&&(i.bgColor.tint=parseFloat(o.tint)),o.rgb&&(i.bgColor.rgb=o.rgb.slice(-6));break;case"<bgColor/>":case"</bgColor>":break;case"<fgColor":i.fgColor||(i.fgColor={}),o.theme&&(i.fgColor.theme=parseInt(o.theme,10)),o.tint&&(i.fgColor.tint=parseFloat(o.tint)),o.rgb!=null&&(i.fgColor.rgb=o.rgb.slice(-6));break;case"<fgColor/>":case"</fgColor>":break;case"<stop":case"<stop/>":break;case"</stop>":break;case"<color":case"<color/>":break;case"</color>":break;case"<extLst":case"<extLst>":case"</extLst>":break;case"<ext":n=!0;break;case"</ext>":n=!1;break;default:if(a&&a.WTF&&!n)throw new Error("unrecognized "+o[0]+" in fills")}})}function yx(e,t,r,a){t.Fonts=[];var i={},n=!1;(e[0].match(Tt)||[]).forEach(function(s){var o=ge(s);switch(Tr(o[0])){case"<fonts":case"<fonts>":case"</fonts>":break;case"<font":case"<font>":break;case"</font>":case"<font/>":t.Fonts.push(i),i={};break;case"<name":o.val&&(i.name=Be(o.val));break;case"<name/>":case"</name>":break;case"<b":i.bold=o.val?Ue(o.val):1;break;case"<b/>":i.bold=1;break;case"<i":i.italic=o.val?Ue(o.val):1;break;case"<i/>":i.italic=1;break;case"<u":switch(o.val){case"none":i.underline=0;break;case"single":i.underline=1;break;case"double":i.underline=2;break;case"singleAccounting":i.underline=33;break;case"doubleAccounting":i.underline=34;break}break;case"<u/>":i.underline=1;break;case"<strike":i.strike=o.val?Ue(o.val):1;break;case"<strike/>":i.strike=1;break;case"<outline":i.outline=o.val?Ue(o.val):1;break;case"<outline/>":i.outline=1;break;case"<shadow":i.shadow=o.val?Ue(o.val):1;break;case"<shadow/>":i.shadow=1;break;case"<condense":i.condense=o.val?Ue(o.val):1;break;case"<condense/>":i.condense=1;break;case"<extend":i.extend=o.val?Ue(o.val):1;break;case"<extend/>":i.extend=1;break;case"<sz":o.val&&(i.sz=+o.val);break;case"<sz/>":case"</sz>":break;case"<vertAlign":o.val&&(i.vertAlign=o.val);break;case"<vertAlign/>":case"</vertAlign>":break;case"<family":o.val&&(i.family=parseInt(o.val,10));break;case"<family/>":case"</family>":break;case"<scheme":o.val&&(i.scheme=o.val);break;case"<scheme/>":case"</scheme>":break;case"<charset":if(o.val=="1")break;o.codepage=Oo[parseInt(o.val,10)];break;case"<color":if(i.color||(i.color={}),o.auto&&(i.color.auto=Ue(o.auto)),o.rgb)i.color.rgb=o.rgb.slice(-6);else if(o.indexed){i.color.index=parseInt(o.indexed,10);var l=va[i.color.index];i.color.index==81&&(l=va[1]),l||(l=va[1]),i.color.rgb=l[0].toString(16)+l[1].toString(16)+l[2].toString(16)}else o.theme&&(i.color.theme=parseInt(o.theme,10),o.tint&&(i.color.tint=parseFloat(o.tint)),o.theme&&r.themeElements&&r.themeElements.clrScheme&&(i.color.rgb=qn(r.themeElements.clrScheme[i.color.theme].rgb,i.color.tint||0)));break;case"<color/>":case"</color>":break;case"<AlternateContent":n=!0;break;case"</AlternateContent>":n=!1;break;case"<extLst":case"<extLst>":case"</extLst>":break;case"<ext":n=!0;break;case"</ext>":n=!1;break;default:if(a&&a.WTF&&!n)throw new Error("unrecognized "+o[0]+" in fonts")}})}function _x(e,t,r){t.NumberFmt=[];for(var a=wr(we),i=0;i<a.length;++i)t.NumberFmt[a[i]]=we[a[i]];var n=e[0].match(Tt);if(n)for(i=0;i<n.length;++i){var s=ge(n[i]);switch(Tr(s[0])){case"<numFmts":case"</numFmts>":case"<numFmts/>":case"<numFmts>":break;case"<numFmt":{var o=Oe(Be(s.formatCode)),l=parseInt(s.numFmtId,10);if(t.NumberFmt[l]=o,l>0){if(l>392){for(l=392;l>60&&t.NumberFmt[l]!=null;--l);t.NumberFmt[l]=o}ma(o,l)}}break;case"</numFmt>":break;default:if(r.WTF)throw new Error("unrecognized "+s[0]+" in numFmts")}}}var An=["numFmtId","fillId","fontId","borderId","xfId"],Cn=["applyAlignment","applyBorder","applyFill","applyFont","applyNumberFormat","applyProtection","pivotButton","quotePrefix"];function kx(e,t,r){t.CellXf=[];var a,i=!1;(e[0].match(Tt)||[]).forEach(function(n){var s=ge(n),o=0;switch(Tr(s[0])){case"<cellXfs":case"<cellXfs>":case"<cellXfs/>":case"</cellXfs>":break;case"<xf":case"<xf/>":for(a=s,delete a[0],o=0;o<An.length;++o)a[An[o]]&&(a[An[o]]=parseInt(a[An[o]],10));for(o=0;o<Cn.length;++o)a[Cn[o]]&&(a[Cn[o]]=Ue(a[Cn[o]]));if(t.NumberFmt&&a.numFmtId>392){for(o=392;o>60;--o)if(t.NumberFmt[a.numFmtId]==t.NumberFmt[o]){a.numFmtId=o;break}}t.CellXf.push(a);break;case"</xf>":break;case"<alignment":case"<alignment/>":var l={};s.vertical&&(l.vertical=s.vertical),s.horizontal&&(l.horizontal=s.horizontal),s.textRotation!=null&&(l.textRotation=s.textRotation),s.indent&&(l.indent=s.indent),s.wrapText&&(l.wrapText=Ue(s.wrapText)),a.alignment=l;break;case"</alignment>":break;case"<protection":break;case"</protection>":case"<protection/>":break;case"<AlternateContent":i=!0;break;case"</AlternateContent>":i=!1;break;case"<extLst":case"<extLst>":case"</extLst>":break;case"<ext":i=!0;break;case"</ext>":i=!1;break;default:if(r&&r.WTF&&!i)throw new Error("unrecognized "+s[0]+" in cellXfs")}})}var Ex=function(){var t=/<(?:\w+:)?numFmts([^>]*)>[\S\s]*?<\/(?:\w+:)?numFmts>/,r=/<(?:\w+:)?cellXfs([^>]*)>[\S\s]*?<\/(?:\w+:)?cellXfs>/,a=/<(?:\w+:)?fills([^>]*)>[\S\s]*?<\/(?:\w+:)?fills>/,i=/<(?:\w+:)?fonts([^>]*)>[\S\s]*?<\/(?:\w+:)?fonts>/,n=/<(?:\w+:)?borders([^>]*)>[\S\s]*?<\/(?:\w+:)?borders>/;return function(o,l,c){var u={};if(!o)return u;o=o.replace(/<!--([\s\S]*?)-->/mg,"").replace(/<!DOCTYPE[^\[]*\[[^\]]*\]>/gm,"");var h;return(h=o.match(t))&&_x(h,u,c),(h=o.match(i))&&yx(h,u,l,c),(h=o.match(a))&&wx(h,u,l,c),(h=o.match(n))&&bx(h,u,l,c),(h=o.match(r))&&kx(h,u,c),u}}();function Tx(e,t){var r=e.read_shift(2),a=_t(e);return[r,a]}function Ax(e,t,r){var a={};a.sz=e.read_shift(2)/20;var i=N1(e);i.fItalic&&(a.italic=1),i.fCondense&&(a.condense=1),i.fExtend&&(a.extend=1),i.fShadow&&(a.shadow=1),i.fOutline&&(a.outline=1),i.fStrikeout&&(a.strike=1);var n=e.read_shift(2);switch(n===700&&(a.bold=1),e.read_shift(2)){case 1:a.vertAlign="superscript";break;case 2:a.vertAlign="subscript";break}var s=e.read_shift(1);s!=0&&(a.underline=s);var o=e.read_shift(1);o>0&&(a.family=o);var l=e.read_shift(1);switch(l>0&&(a.charset=l),e.l++,a.color=L1(e),e.read_shift(1)){case 1:a.scheme="major";break;case 2:a.scheme="minor";break}return a.name=_t(e),a}var Cx=kt;function Sx(e,t){var r=e.l+t,a=e.read_shift(2),i=e.read_shift(2);return e.l=r,{ixfe:a,numFmtId:i}}var Fx=kt;function Dx(e,t,r){var a={};a.NumberFmt=[];for(var i in we)a.NumberFmt[i]=we[i];a.CellXf=[],a.Fonts=[];var n=[],s=!1;return Br(e,function(l,c,u){switch(u){case 44:a.NumberFmt[l[0]]=l[1],ma(l[1],l[0]);break;case 43:a.Fonts.push(l),l.color.theme!=null&&t&&t.themeElements&&t.themeElements.clrScheme&&(l.color.rgb=qn(t.themeElements.clrScheme[l.color.theme].rgb,l.color.tint||0));break;case 1025:break;case 45:break;case 46:break;case 47:n[n.length-1]==617&&a.CellXf.push(l);break;case 48:case 507:case 572:case 475:break;case 1171:case 2102:case 1130:case 512:case 2095:case 3072:break;case 35:s=!0;break;case 36:s=!1;break;case 37:n.push(u),s=!0;break;case 38:n.pop(),s=!1;break;default:if(c.T>0)n.push(u);else if(c.T<0)n.pop();else if(!s||r.WTF&&n[n.length-1]!=37)throw new Error("Unexpected record 0x"+u.toString(16))}}),a}var Ox=["</a:lt1>","</a:dk1>","</a:lt2>","</a:dk2>","</a:accent1>","</a:accent2>","</a:accent3>","</a:accent4>","</a:accent5>","</a:accent6>","</a:hlink>","</a:folHlink>"];function Rx(e,t,r){t.themeElements.clrScheme=[];var a={};(e[0].match(Tt)||[]).forEach(function(i){var n=ge(i);switch(n[0]){case"<a:clrScheme":case"</a:clrScheme>":break;case"<a:srgbClr":a.rgb=n.val;break;case"<a:sysClr":a.rgb=n.lastClr;break;case"<a:dk1>":case"</a:dk1>":case"<a:lt1>":case"</a:lt1>":case"<a:dk2>":case"</a:dk2>":case"<a:lt2>":case"</a:lt2>":case"<a:accent1>":case"</a:accent1>":case"<a:accent2>":case"</a:accent2>":case"<a:accent3>":case"</a:accent3>":case"<a:accent4>":case"</a:accent4>":case"<a:accent5>":case"</a:accent5>":case"<a:accent6>":case"</a:accent6>":case"<a:hlink>":case"</a:hlink>":case"<a:folHlink>":case"</a:folHlink>":n[0].charAt(1)==="/"?(t.themeElements.clrScheme[Ox.indexOf(n[0])]=a,a={}):a.name=n[0].slice(3,n[0].length-1);break;default:if(r&&r.WTF)throw new Error("Unrecognized "+n[0]+" in clrScheme")}})}function Ix(){}function Px(){}var Lx=/<a:clrScheme([^>]*)>[\s\S]*<\/a:clrScheme>/,Nx=/<a:fontScheme([^>]*)>[\s\S]*<\/a:fontScheme>/,$x=/<a:fmtScheme([^>]*)>[\s\S]*<\/a:fmtScheme>/;function Mx(e,t,r){t.themeElements={};var a;[["clrScheme",Lx,Rx],["fontScheme",Nx,Ix],["fmtScheme",$x,Px]].forEach(function(i){if(!(a=e.match(i[1])))throw new Error(i[0]+" not found in themeElements");i[2](a,t,r)})}var Bx=/<a:themeElements([^>]*)>[\s\S]*<\/a:themeElements>/;function Ku(e,t){(!e||e.length===0)&&(e=zx());var r,a={};if(!(r=e.match(Bx)))throw new Error("themeElements not found in theme");return Mx(r[0],a,t),a.raw=e,a}function zx(e,t){var r=[nu];return r[r.length]='<a:theme xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" name="Office Theme">',r[r.length]="<a:themeElements>",r[r.length]='<a:clrScheme name="Office">',r[r.length]='<a:dk1><a:sysClr val="windowText" lastClr="000000"/></a:dk1>',r[r.length]='<a:lt1><a:sysClr val="window" lastClr="FFFFFF"/></a:lt1>',r[r.length]='<a:dk2><a:srgbClr val="1F497D"/></a:dk2>',r[r.length]='<a:lt2><a:srgbClr val="EEECE1"/></a:lt2>',r[r.length]='<a:accent1><a:srgbClr val="4F81BD"/></a:accent1>',r[r.length]='<a:accent2><a:srgbClr val="C0504D"/></a:accent2>',r[r.length]='<a:accent3><a:srgbClr val="9BBB59"/></a:accent3>',r[r.length]='<a:accent4><a:srgbClr val="8064A2"/></a:accent4>',r[r.length]='<a:accent5><a:srgbClr val="4BACC6"/></a:accent5>',r[r.length]='<a:accent6><a:srgbClr val="F79646"/></a:accent6>',r[r.length]='<a:hlink><a:srgbClr val="0000FF"/></a:hlink>',r[r.length]='<a:folHlink><a:srgbClr val="800080"/></a:folHlink>',r[r.length]="</a:clrScheme>",r[r.length]='<a:fontScheme name="Office">',r[r.length]="<a:majorFont>",r[r.length]='<a:latin typeface="Cambria"/>',r[r.length]='<a:ea typeface=""/>',r[r.length]='<a:cs typeface=""/>',r[r.length]='<a:font script="Jpan" typeface="ＭＳ Ｐゴシック"/>',r[r.length]='<a:font script="Hang" typeface="맑은 고딕"/>',r[r.length]='<a:font script="Hans" typeface="宋体"/>',r[r.length]='<a:font script="Hant" typeface="新細明體"/>',r[r.length]='<a:font script="Arab" typeface="Times New Roman"/>',r[r.length]='<a:font script="Hebr" typeface="Times New Roman"/>',r[r.length]='<a:font script="Thai" typeface="Tahoma"/>',r[r.length]='<a:font script="Ethi" typeface="Nyala"/>',r[r.length]='<a:font script="Beng" typeface="Vrinda"/>',r[r.length]='<a:font script="Gujr" typeface="Shruti"/>',r[r.length]='<a:font script="Khmr" typeface="MoolBoran"/>',r[r.length]='<a:font script="Knda" typeface="Tunga"/>',r[r.length]='<a:font script="Guru" typeface="Raavi"/>',r[r.length]='<a:font script="Cans" typeface="Euphemia"/>',r[r.length]='<a:font script="Cher" typeface="Plantagenet Cherokee"/>',r[r.length]='<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>',r[r.length]='<a:font script="Tibt" typeface="Microsoft Himalaya"/>',r[r.length]='<a:font script="Thaa" typeface="MV Boli"/>',r[r.length]='<a:font script="Deva" typeface="Mangal"/>',r[r.length]='<a:font script="Telu" typeface="Gautami"/>',r[r.length]='<a:font script="Taml" typeface="Latha"/>',r[r.length]='<a:font script="Syrc" typeface="Estrangelo Edessa"/>',r[r.length]='<a:font script="Orya" typeface="Kalinga"/>',r[r.length]='<a:font script="Mlym" typeface="Kartika"/>',r[r.length]='<a:font script="Laoo" typeface="DokChampa"/>',r[r.length]='<a:font script="Sinh" typeface="Iskoola Pota"/>',r[r.length]='<a:font script="Mong" typeface="Mongolian Baiti"/>',r[r.length]='<a:font script="Viet" typeface="Times New Roman"/>',r[r.length]='<a:font script="Uigh" typeface="Microsoft Uighur"/>',r[r.length]='<a:font script="Geor" typeface="Sylfaen"/>',r[r.length]="</a:majorFont>",r[r.length]="<a:minorFont>",r[r.length]='<a:latin typeface="Calibri"/>',r[r.length]='<a:ea typeface=""/>',r[r.length]='<a:cs typeface=""/>',r[r.length]='<a:font script="Jpan" typeface="ＭＳ Ｐゴシック"/>',r[r.length]='<a:font script="Hang" typeface="맑은 고딕"/>',r[r.length]='<a:font script="Hans" typeface="宋体"/>',r[r.length]='<a:font script="Hant" typeface="新細明體"/>',r[r.length]='<a:font script="Arab" typeface="Arial"/>',r[r.length]='<a:font script="Hebr" typeface="Arial"/>',r[r.length]='<a:font script="Thai" typeface="Tahoma"/>',r[r.length]='<a:font script="Ethi" typeface="Nyala"/>',r[r.length]='<a:font script="Beng" typeface="Vrinda"/>',r[r.length]='<a:font script="Gujr" typeface="Shruti"/>',r[r.length]='<a:font script="Khmr" typeface="DaunPenh"/>',r[r.length]='<a:font script="Knda" typeface="Tunga"/>',r[r.length]='<a:font script="Guru" typeface="Raavi"/>',r[r.length]='<a:font script="Cans" typeface="Euphemia"/>',r[r.length]='<a:font script="Cher" typeface="Plantagenet Cherokee"/>',r[r.length]='<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>',r[r.length]='<a:font script="Tibt" typeface="Microsoft Himalaya"/>',r[r.length]='<a:font script="Thaa" typeface="MV Boli"/>',r[r.length]='<a:font script="Deva" typeface="Mangal"/>',r[r.length]='<a:font script="Telu" typeface="Gautami"/>',r[r.length]='<a:font script="Taml" typeface="Latha"/>',r[r.length]='<a:font script="Syrc" typeface="Estrangelo Edessa"/>',r[r.length]='<a:font script="Orya" typeface="Kalinga"/>',r[r.length]='<a:font script="Mlym" typeface="Kartika"/>',r[r.length]='<a:font script="Laoo" typeface="DokChampa"/>',r[r.length]='<a:font script="Sinh" typeface="Iskoola Pota"/>',r[r.length]='<a:font script="Mong" typeface="Mongolian Baiti"/>',r[r.length]='<a:font script="Viet" typeface="Arial"/>',r[r.length]='<a:font script="Uigh" typeface="Microsoft Uighur"/>',r[r.length]='<a:font script="Geor" typeface="Sylfaen"/>',r[r.length]="</a:minorFont>",r[r.length]="</a:fontScheme>",r[r.length]='<a:fmtScheme name="Office">',r[r.length]="<a:fillStyleLst>",r[r.length]='<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>',r[r.length]='<a:gradFill rotWithShape="1">',r[r.length]="<a:gsLst>",r[r.length]='<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="50000"/><a:satMod val="300000"/></a:schemeClr></a:gs>',r[r.length]='<a:gs pos="35000"><a:schemeClr val="phClr"><a:tint val="37000"/><a:satMod val="300000"/></a:schemeClr></a:gs>',r[r.length]='<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="15000"/><a:satMod val="350000"/></a:schemeClr></a:gs>',r[r.length]="</a:gsLst>",r[r.length]='<a:lin ang="16200000" scaled="1"/>',r[r.length]="</a:gradFill>",r[r.length]='<a:gradFill rotWithShape="1">',r[r.length]="<a:gsLst>",r[r.length]='<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="100000"/><a:shade val="100000"/><a:satMod val="130000"/></a:schemeClr></a:gs>',r[r.length]='<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="50000"/><a:shade val="100000"/><a:satMod val="350000"/></a:schemeClr></a:gs>',r[r.length]="</a:gsLst>",r[r.length]='<a:lin ang="16200000" scaled="0"/>',r[r.length]="</a:gradFill>",r[r.length]="</a:fillStyleLst>",r[r.length]="<a:lnStyleLst>",r[r.length]='<a:ln w="9525" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"><a:shade val="95000"/><a:satMod val="105000"/></a:schemeClr></a:solidFill><a:prstDash val="solid"/></a:ln>',r[r.length]='<a:ln w="25400" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>',r[r.length]='<a:ln w="38100" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>',r[r.length]="</a:lnStyleLst>",r[r.length]="<a:effectStyleLst>",r[r.length]="<a:effectStyle>",r[r.length]="<a:effectLst>",r[r.length]='<a:outerShdw blurRad="40000" dist="20000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="38000"/></a:srgbClr></a:outerShdw>',r[r.length]="</a:effectLst>",r[r.length]="</a:effectStyle>",r[r.length]="<a:effectStyle>",r[r.length]="<a:effectLst>",r[r.length]='<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>',r[r.length]="</a:effectLst>",r[r.length]="</a:effectStyle>",r[r.length]="<a:effectStyle>",r[r.length]="<a:effectLst>",r[r.length]='<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>',r[r.length]="</a:effectLst>",r[r.length]='<a:scene3d><a:camera prst="orthographicFront"><a:rot lat="0" lon="0" rev="0"/></a:camera><a:lightRig rig="threePt" dir="t"><a:rot lat="0" lon="0" rev="1200000"/></a:lightRig></a:scene3d>',r[r.length]='<a:sp3d><a:bevelT w="63500" h="25400"/></a:sp3d>',r[r.length]="</a:effectStyle>",r[r.length]="</a:effectStyleLst>",r[r.length]="<a:bgFillStyleLst>",r[r.length]='<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>',r[r.length]='<a:gradFill rotWithShape="1">',r[r.length]="<a:gsLst>",r[r.length]='<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="40000"/><a:satMod val="350000"/></a:schemeClr></a:gs>',r[r.length]='<a:gs pos="40000"><a:schemeClr val="phClr"><a:tint val="45000"/><a:shade val="99000"/><a:satMod val="350000"/></a:schemeClr></a:gs>',r[r.length]='<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="20000"/><a:satMod val="255000"/></a:schemeClr></a:gs>',r[r.length]="</a:gsLst>",r[r.length]='<a:path path="circle"><a:fillToRect l="50000" t="-80000" r="50000" b="180000"/></a:path>',r[r.length]="</a:gradFill>",r[r.length]='<a:gradFill rotWithShape="1">',r[r.length]="<a:gsLst>",r[r.length]='<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="80000"/><a:satMod val="300000"/></a:schemeClr></a:gs>',r[r.length]='<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="30000"/><a:satMod val="200000"/></a:schemeClr></a:gs>',r[r.length]="</a:gsLst>",r[r.length]='<a:path path="circle"><a:fillToRect l="50000" t="50000" r="50000" b="50000"/></a:path>',r[r.length]="</a:gradFill>",r[r.length]="</a:bgFillStyleLst>",r[r.length]="</a:fmtScheme>",r[r.length]="</a:themeElements>",r[r.length]="<a:objectDefaults>",r[r.length]="<a:spDef>",r[r.length]='<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="1"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="3"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="2"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="lt1"/></a:fontRef></a:style>',r[r.length]="</a:spDef>",r[r.length]="<a:lnDef>",r[r.length]='<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="2"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="0"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="1"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="tx1"/></a:fontRef></a:style>',r[r.length]="</a:lnDef>",r[r.length]="</a:objectDefaults>",r[r.length]="<a:extraClrSchemeLst/>",r[r.length]="</a:theme>",r.join("")}function Ux(e,t,r){var a=e.l+t,i=e.read_shift(4);if(i!==124226){if(!r.cellStyles){e.l=a;return}var n=e.slice(e.l);e.l=a;var s;try{s=iu(n,{type:"array"})}catch{return}var o=Ut(s,"theme/theme/theme1.xml",!0);if(o)return Ku(o,r)}}function Vx(e){return e.read_shift(4)}function Hx(e){var t={};switch(t.xclrType=e.read_shift(2),t.nTintShade=e.read_shift(2),t.xclrType){case 0:e.l+=4;break;case 1:t.xclrValue=Wx(e,4);break;case 2:t.xclrValue=Pu(e);break;case 3:t.xclrValue=Vx(e);break;case 4:e.l+=4;break}return e.l+=8,t}function Wx(e,t){return kt(e,t)}function jx(e,t){return kt(e,t)}function Gx(e){var t=e.read_shift(2),r=e.read_shift(2)-4,a=[t];switch(t){case 4:case 5:case 7:case 8:case 9:case 10:case 11:case 13:a[1]=Hx(e);break;case 6:a[1]=jx(e,r);break;case 14:case 15:a[1]=e.read_shift(r===1?1:2);break;default:throw new Error("Unrecognized ExtProp type: "+t+" "+r)}return a}function Xx(e,t){var r=e.l+t;e.l+=2;var a=e.read_shift(2);e.l+=2;for(var i=e.read_shift(2),n=[];i-- >0;)n.push(Gx(e,r-e.l));return{ixfe:a,ext:n}}function Kx(e,t){t.forEach(function(r){switch(r[0]){}})}function Yx(e,t){return{flags:e.read_shift(4),version:e.read_shift(4),name:_t(e)}}function qx(e){for(var t=[],r=e.read_shift(4);r-- >0;)t.push([e.read_shift(4),e.read_shift(4)]);return t}function Zx(e){return e.l+=4,e.read_shift(4)!=0}function Jx(e,t,r){var a={Types:[],Cell:[],Value:[]},i=r||{},n=[],s=!1,o=2;return Br(e,function(l,c,u){switch(u){case 335:a.Types.push({name:l.name});break;case 51:l.forEach(function(h){o==1?a.Cell.push({type:a.Types[h[0]-1].name,index:h[1]}):o==0&&a.Value.push({type:a.Types[h[0]-1].name,index:h[1]})});break;case 337:o=l?1:0;break;case 338:o=2;break;case 35:n.push(u),s=!0;break;case 36:n.pop(),s=!1;break;default:if(!c.T){if(!s||i.WTF&&n[n.length-1]!=35)throw new Error("Unexpected record 0x"+u.toString(16))}}}),a}function Qx(e,t,r){var a={Types:[],Cell:[],Value:[]};if(!e)return a;var i=!1,n=2,s;return e.replace(Tt,function(o){var l=ge(o);switch(Tr(l[0])){case"<?xml":break;case"<metadata":case"</metadata>":break;case"<metadataTypes":case"</metadataTypes>":break;case"<metadataType":a.Types.push({name:l.name});break;case"</metadataType>":break;case"<futureMetadata":for(var c=0;c<a.Types.length;++c)a.Types[c].name==l.name&&(s=a.Types[c]);break;case"</futureMetadata>":break;case"<bk>":break;case"</bk>":break;case"<rc":n==1?a.Cell.push({type:a.Types[l.t-1].name,index:+l.v}):n==0&&a.Value.push({type:a.Types[l.t-1].name,index:+l.v});break;case"</rc>":break;case"<cellMetadata":n=1;break;case"</cellMetadata>":n=2;break;case"<valueMetadata":n=0;break;case"</valueMetadata>":n=2;break;case"<extLst":case"<extLst>":case"</extLst>":case"<extLst/>":break;case"<ext":i=!0;break;case"</ext>":i=!1;break;case"<rvb":if(!s)break;s.offsets||(s.offsets=[]),s.offsets.push(+l.i);break;default:if(!i&&r.WTF)throw new Error("unrecognized "+l[0]+" in metadata")}return o}),a}function eb(e){var t=[];if(!e)return t;var r=1;return(e.match(Tt)||[]).forEach(function(a){var i=ge(a);switch(i[0]){case"<?xml":break;case"<calcChain":case"<calcChain>":case"</calcChain>":break;case"<c":delete i[0],i.i?r=i.i:i.i=r,t.push(i);break}}),t}function tb(e){var t={};t.i=e.read_shift(4);var r={};r.r=e.read_shift(4),r.c=e.read_shift(4),t.r=xe(r);var a=e.read_shift(1);return a&2&&(t.l="1"),a&8&&(t.a="1"),t}function rb(e,t,r){var a=[];return Br(e,function(n,s,o){switch(o){case 63:a.push(n);break;default:if(!s.T)throw new Error("Unexpected record 0x"+o.toString(16))}}),a}function ab(e,t,r,a){if(!e)return e;var i=a||{},n=!1;Br(e,function(o,l,c){switch(c){case 359:case 363:case 364:case 366:case 367:case 368:case 369:case 370:case 371:case 472:case 577:case 578:case 579:case 580:case 581:case 582:case 583:case 584:case 585:case 586:case 587:break;case 35:n=!0;break;case 36:n=!1;break;default:if(!l.T){if(!n||i.WTF)throw new Error("Unexpected record 0x"+c.toString(16))}}},i)}function ib(e,t){if(!e)return"??";var r=(e.match(/<c:chart [^>]*r:id="([^"]*)"/)||["",""])[1];return t["!id"][r].Target}function $c(e,t,r,a){var i=Array.isArray(e),n;t.forEach(function(s){var o=Ft(s.ref);if(i?(e[o.r]||(e[o.r]=[]),n=e[o.r][o.c]):n=e[s.ref],!n){n={t:"z"},i?e[o.r][o.c]=n:e[s.ref]=n;var l=Xe(e["!ref"]||"BDWGO1000001:A1");l.s.r>o.r&&(l.s.r=o.r),l.e.r<o.r&&(l.e.r=o.r),l.s.c>o.c&&(l.s.c=o.c),l.e.c<o.c&&(l.e.c=o.c);var c=Fe(l);c!==e["!ref"]&&(e["!ref"]=c)}n.c||(n.c=[]);var u={a:s.author,t:s.t,r:s.r,T:r};s.h&&(u.h=s.h);for(var h=n.c.length-1;h>=0;--h){if(!r&&n.c[h].T)return;r&&!n.c[h].T&&n.c.splice(h,1)}if(r&&a){for(h=0;h<a.length;++h)if(u.a==a[h].id){u.a=a[h].name||u.a;break}}n.c.push(u)})}function nb(e,t){if(e.match(/<(?:\w+:)?comments *\/>/))return[];var r=[],a=[],i=e.match(/<(?:\w+:)?authors>([\s\S]*)<\/(?:\w+:)?authors>/);i&&i[1]&&i[1].split(/<\/\w*:?author>/).forEach(function(s){if(!(s===""||s.trim()==="")){var o=s.match(/<(?:\w+:)?author[^>]*>(.*)/);o&&r.push(o[1])}});var n=e.match(/<(?:\w+:)?commentList>([\s\S]*)<\/(?:\w+:)?commentList>/);return n&&n[1]&&n[1].split(/<\/\w*:?comment>/).forEach(function(s){if(!(s===""||s.trim()==="")){var o=s.match(/<(?:\w+:)?comment[^>]*>/);if(o){var l=ge(o[0]),c={author:l.authorId&&r[l.authorId]||"sheetjsghost",ref:l.ref,guid:l.guid},u=Ft(l.ref);if(!(t.sheetRows&&t.sheetRows<=u.r)){var h=s.match(/<(?:\w+:)?text>([\s\S]*)<\/(?:\w+:)?text>/),d=!!h&&!!h[1]&&Ko(h[1])||{r:"",t:"",h:""};c.r=d.r,d.r=="<t></t>"&&(d.t=d.h=""),c.t=(d.t||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`),t.cellHTML&&(c.h=d.h),a.push(c)}}}}),a}function sb(e,t){var r=[],a=!1,i={},n=0;return e.replace(Tt,function(o,l){var c=ge(o);switch(Tr(c[0])){case"<?xml":break;case"<ThreadedComments":break;case"</ThreadedComments>":break;case"<threadedComment":i={author:c.personId,guid:c.id,ref:c.ref,T:1};break;case"</threadedComment>":i.t!=null&&r.push(i);break;case"<text>":case"<text":n=l+o.length;break;case"</text>":i.t=e.slice(n,l).replace(/\r\n/g,`
`).replace(/\r/g,`
`);break;case"<mentions":case"<mentions>":a=!0;break;case"</mentions>":a=!1;break;case"<extLst":case"<extLst>":case"</extLst>":case"<extLst/>":break;case"<ext":a=!0;break;case"</ext>":a=!1;break;default:if(!a&&t.WTF)throw new Error("unrecognized "+c[0]+" in threaded comments")}return o}),r}function ob(e,t){var r=[],a=!1;return e.replace(Tt,function(n){var s=ge(n);switch(Tr(s[0])){case"<?xml":break;case"<personList":break;case"</personList>":break;case"<person":r.push({name:s.displayname,id:s.id});break;case"</person>":break;case"<extLst":case"<extLst>":case"</extLst>":case"<extLst/>":break;case"<ext":a=!0;break;case"</ext>":a=!1;break;default:if(!a&&t.WTF)throw new Error("unrecognized "+s[0]+" in threaded comments")}return n}),r}function lb(e){var t={};t.iauthor=e.read_shift(4);var r=Pa(e);return t.rfx=r.s,t.ref=xe(r.s),e.l+=16,t}var cb=_t;function ub(e,t){var r=[],a=[],i={},n=!1;return Br(e,function(o,l,c){switch(c){case 632:a.push(o);break;case 635:i=o;break;case 637:i.t=o.t,i.h=o.h,i.r=o.r;break;case 636:if(i.author=a[i.iauthor],delete i.iauthor,t.sheetRows&&i.rfx&&t.sheetRows<=i.rfx.r)break;i.t||(i.t=""),delete i.rfx,r.push(i);break;case 3072:break;case 35:n=!0;break;case 36:n=!1;break;case 37:break;case 38:break;default:if(!l.T){if(!n||t.WTF)throw new Error("Unexpected record 0x"+c.toString(16))}}}),r}var hb="application/vnd.ms-office.vbaProject";function fb(e){var t=Se.utils.cfb_new({root:"R"});return e.FullPaths.forEach(function(r,a){if(!(r.slice(-1)==="/"||!r.match(/_VBA_PROJECT_CUR/))){var i=r.replace(/^[^\/]*/,"R").replace(/\/_VBA_PROJECT_CUR\u0000*/,"");Se.utils.cfb_add(t,i,e.FileIndex[a].content)}}),Se.write(t)}function db(){return{"!type":"dialog"}}function pb(){return{"!type":"dialog"}}function gb(){return{"!type":"macro"}}function mb(){return{"!type":"macro"}}var Wa=function(){var e=/(^|[^A-Za-z_])R(\[?-?\d+\]|[1-9]\d*|)C(\[?-?\d+\]|[1-9]\d*|)(?![A-Za-z0-9_])/g,t={r:0,c:0};function r(a,i,n,s){var o=!1,l=!1;n.length==0?l=!0:n.charAt(0)=="["&&(l=!0,n=n.slice(1,-1)),s.length==0?o=!0:s.charAt(0)=="["&&(o=!0,s=s.slice(1,-1));var c=n.length>0?parseInt(n,10)|0:0,u=s.length>0?parseInt(s,10)|0:0;return o?u+=t.c:--u,l?c+=t.r:--c,i+(o?"":"$")+st(u)+(l?"":"$")+pt(c)}return function(i,n){return t=n,i.replace(e,r)}}(),Yu=/(^|[^._A-Z0-9])([$]?)([A-Z]{1,2}|[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D])([$]?)(10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})(?![_.\(A-Za-z0-9])/g,vb=function(){return function(t,r){return t.replace(Yu,function(a,i,n,s,o,l){var c=Vo(s)-(n?0:r.c),u=Uo(l)-(o?0:r.r),h=u==0?"":o?u+1:"["+u+"]",d=c==0?"":n?c+1:"["+c+"]";return i+"R"+h+"C"+d})}}();function qu(e,t){return e.replace(Yu,function(r,a,i,n,s,o){return a+(i=="$"?i+n:st(Vo(n)+t.c))+(s=="$"?s+o:pt(Uo(o)+t.r))})}function xb(e,t,r){var a=ii(t),i=a.s,n=Ft(r),s={r:n.r-i.r,c:n.c-i.c};return qu(e,s)}function bb(e){return e.length!=1}function Mc(e){return e.replace(/_xlfn\./g,"")}function Je(e){e.l+=1}function ra(e,t){var r=e.read_shift(2);return[r&16383,r>>14&1,r>>15&1]}function Zu(e,t,r){var a=2;if(r){if(r.biff>=2&&r.biff<=5)return Ju(e);r.biff==12&&(a=4)}var i=e.read_shift(a),n=e.read_shift(a),s=ra(e),o=ra(e);return{s:{r:i,c:s[0],cRel:s[1],rRel:s[2]},e:{r:n,c:o[0],cRel:o[1],rRel:o[2]}}}function Ju(e){var t=ra(e),r=ra(e),a=e.read_shift(1),i=e.read_shift(1);return{s:{r:t[0],c:a,cRel:t[1],rRel:t[2]},e:{r:r[0],c:i,cRel:r[1],rRel:r[2]}}}function wb(e,t,r){if(r.biff<8)return Ju(e);var a=e.read_shift(r.biff==12?4:2),i=e.read_shift(r.biff==12?4:2),n=ra(e),s=ra(e);return{s:{r:a,c:n[0],cRel:n[1],rRel:n[2]},e:{r:i,c:s[0],cRel:s[1],rRel:s[2]}}}function Qu(e,t,r){if(r&&r.biff>=2&&r.biff<=5)return yb(e);var a=e.read_shift(r&&r.biff==12?4:2),i=ra(e);return{r:a,c:i[0],cRel:i[1],rRel:i[2]}}function yb(e){var t=ra(e),r=e.read_shift(1);return{r:t[0],c:r,cRel:t[1],rRel:t[2]}}function _b(e){var t=e.read_shift(2),r=e.read_shift(2);return{r:t,c:r&255,fQuoted:!!(r&16384),cRel:r>>15,rRel:r>>15}}function kb(e,t,r){var a=r&&r.biff?r.biff:8;if(a>=2&&a<=5)return Eb(e);var i=e.read_shift(a>=12?4:2),n=e.read_shift(2),s=(n&16384)>>14,o=(n&32768)>>15;if(n&=16383,o==1)for(;i>524287;)i-=1048576;if(s==1)for(;n>8191;)n=n-16384;return{r:i,c:n,cRel:s,rRel:o}}function Eb(e){var t=e.read_shift(2),r=e.read_shift(1),a=(t&32768)>>15,i=(t&16384)>>14;return t&=16383,a==1&&t>=8192&&(t=t-16384),i==1&&r>=128&&(r=r-256),{r:t,c:r,cRel:i,rRel:a}}function Tb(e,t,r){var a=(e[e.l++]&96)>>5,i=Zu(e,r.biff>=2&&r.biff<=5?6:8,r);return[a,i]}function Ab(e,t,r){var a=(e[e.l++]&96)>>5,i=e.read_shift(2,"i"),n=8;if(r)switch(r.biff){case 5:e.l+=12,n=6;break;case 12:n=12;break}var s=Zu(e,n,r);return[a,i,s]}function Cb(e,t,r){var a=(e[e.l++]&96)>>5;return e.l+=r&&r.biff>8?12:r.biff<8?6:8,[a]}function Sb(e,t,r){var a=(e[e.l++]&96)>>5,i=e.read_shift(2),n=8;if(r)switch(r.biff){case 5:e.l+=12,n=6;break;case 12:n=12;break}return e.l+=n,[a,i]}function Fb(e,t,r){var a=(e[e.l++]&96)>>5,i=wb(e,t-1,r);return[a,i]}function Db(e,t,r){var a=(e[e.l++]&96)>>5;return e.l+=r.biff==2?6:r.biff==12?14:7,[a]}function Bc(e){var t=e[e.l+1]&1,r=1;return e.l+=4,[t,r]}function Ob(e,t,r){e.l+=2;for(var a=e.read_shift(r&&r.biff==2?1:2),i=[],n=0;n<=a;++n)i.push(e.read_shift(r&&r.biff==2?1:2));return i}function Rb(e,t,r){var a=e[e.l+1]&255?1:0;return e.l+=2,[a,e.read_shift(r&&r.biff==2?1:2)]}function Ib(e,t,r){var a=e[e.l+1]&255?1:0;return e.l+=2,[a,e.read_shift(r&&r.biff==2?1:2)]}function Pb(e){var t=e[e.l+1]&255?1:0;return e.l+=2,[t,e.read_shift(2)]}function Lb(e,t,r){var a=e[e.l+1]&255?1:0;return e.l+=r&&r.biff==2?3:4,[a]}function eh(e){var t=e.read_shift(1),r=e.read_shift(1);return[t,r]}function Nb(e){return e.read_shift(2),eh(e)}function $b(e){return e.read_shift(2),eh(e)}function Mb(e,t,r){var a=(e[e.l]&96)>>5;e.l+=1;var i=Qu(e,0,r);return[a,i]}function Bb(e,t,r){var a=(e[e.l]&96)>>5;e.l+=1;var i=kb(e,0,r);return[a,i]}function zb(e,t,r){var a=(e[e.l]&96)>>5;e.l+=1;var i=e.read_shift(2);r&&r.biff==5&&(e.l+=12);var n=Qu(e,0,r);return[a,i,n]}function Ub(e,t,r){var a=(e[e.l]&96)>>5;e.l+=1;var i=e.read_shift(r&&r.biff<=3?1:2);return[Vw[i],ah[i],a]}function Vb(e,t,r){var a=e[e.l++],i=e.read_shift(1),n=r&&r.biff<=3?[a==88?-1:0,e.read_shift(1)]:Hb(e);return[i,(n[0]===0?ah:Uw)[n[1]]]}function Hb(e){return[e[e.l+1]>>7,e.read_shift(2)&32767]}function Wb(e,t,r){e.l+=r&&r.biff==2?3:4}function jb(e,t,r){if(e.l++,r&&r.biff==12)return[e.read_shift(4,"i"),0];var a=e.read_shift(2),i=e.read_shift(r&&r.biff==2?1:2);return[a,i]}function Gb(e){return e.l++,La[e.read_shift(1)]}function Xb(e){return e.l++,e.read_shift(2)}function Kb(e){return e.l++,e.read_shift(1)!==0}function Yb(e){return e.l++,wt(e)}function qb(e,t,r){return e.l++,cn(e,t-1,r)}function Zb(e,t){var r=[e.read_shift(1)];if(t==12)switch(r[0]){case 2:r[0]=4;break;case 4:r[0]=16;break;case 0:r[0]=1;break;case 1:r[0]=2;break}switch(r[0]){case 4:r[1]=Ze(e,1)?"TRUE":"FALSE",t!=12&&(e.l+=7);break;case 37:case 16:r[1]=La[e[e.l]],e.l+=t==12?4:8;break;case 0:e.l+=8;break;case 1:r[1]=wt(e);break;case 2:r[1]=Na(e,0,{biff:t>0&&t<8?2:t});break;default:throw new Error("Bad SerAr: "+r[0])}return r}function Jb(e,t,r){for(var a=e.read_shift(r.biff==12?4:2),i=[],n=0;n!=a;++n)i.push((r.biff==12?Pa:fs)(e));return i}function Qb(e,t,r){var a=0,i=0;r.biff==12?(a=e.read_shift(4),i=e.read_shift(4)):(i=1+e.read_shift(1),a=1+e.read_shift(2)),r.biff>=2&&r.biff<8&&(--a,--i==0&&(i=256));for(var n=0,s=[];n!=a&&(s[n]=[]);++n)for(var o=0;o!=i;++o)s[n][o]=Zb(e,r.biff);return s}function ew(e,t,r){var a=e.read_shift(1)>>>5&3,i=!r||r.biff>=8?4:2,n=e.read_shift(i);switch(r.biff){case 2:e.l+=5;break;case 3:case 4:e.l+=8;break;case 5:e.l+=12;break}return[a,0,n]}function tw(e,t,r){if(r.biff==5)return rw(e);var a=e.read_shift(1)>>>5&3,i=e.read_shift(2),n=e.read_shift(4);return[a,i,n]}function rw(e){var t=e.read_shift(1)>>>5&3,r=e.read_shift(2,"i");e.l+=8;var a=e.read_shift(2);return e.l+=12,[t,r,a]}function aw(e,t,r){var a=e.read_shift(1)>>>5&3;e.l+=r&&r.biff==2?3:4;var i=e.read_shift(r&&r.biff==2?1:2);return[a,i]}function iw(e,t,r){var a=e.read_shift(1)>>>5&3,i=e.read_shift(r&&r.biff==2?1:2);return[a,i]}function nw(e,t,r){var a=e.read_shift(1)>>>5&3;return e.l+=4,r.biff<8&&e.l--,r.biff==12&&(e.l+=2),[a]}function sw(e,t,r){var a=(e[e.l++]&96)>>5,i=e.read_shift(2),n=4;if(r)switch(r.biff){case 5:n=15;break;case 12:n=6;break}return e.l+=n,[a,i]}var ow=kt,lw=kt,cw=kt;function hn(e,t,r){return e.l+=2,[_b(e)]}function qo(e){return e.l+=6,[]}var uw=hn,hw=qo,fw=qo,dw=hn;function th(e){return e.l+=2,[et(e),e.read_shift(2)&1]}var pw=hn,gw=th,mw=qo,vw=hn,xw=hn,bw=["Data","All","Headers","??","?Data2","??","?DataHeaders","??","Totals","??","??","??","?DataTotals","??","??","??","?Current"];function ww(e){e.l+=2;var t=e.read_shift(2),r=e.read_shift(2),a=e.read_shift(4),i=e.read_shift(2),n=e.read_shift(2),s=bw[r>>2&31];return{ixti:t,coltype:r&3,rt:s,idx:a,c:i,C:n}}function yw(e){return e.l+=2,[e.read_shift(4)]}function _w(e,t,r){return e.l+=5,e.l+=2,e.l+=r.biff==2?1:4,["PTGSHEET"]}function kw(e,t,r){return e.l+=r.biff==2?4:5,["PTGENDSHEET"]}function Ew(e){var t=e.read_shift(1)>>>5&3,r=e.read_shift(2);return[t,r]}function Tw(e){var t=e.read_shift(1)>>>5&3,r=e.read_shift(2);return[t,r]}function Aw(e){return e.l+=4,[0,0]}var zc={1:{n:"PtgExp",f:jb},2:{n:"PtgTbl",f:cw},3:{n:"PtgAdd",f:Je},4:{n:"PtgSub",f:Je},5:{n:"PtgMul",f:Je},6:{n:"PtgDiv",f:Je},7:{n:"PtgPower",f:Je},8:{n:"PtgConcat",f:Je},9:{n:"PtgLt",f:Je},10:{n:"PtgLe",f:Je},11:{n:"PtgEq",f:Je},12:{n:"PtgGe",f:Je},13:{n:"PtgGt",f:Je},14:{n:"PtgNe",f:Je},15:{n:"PtgIsect",f:Je},16:{n:"PtgUnion",f:Je},17:{n:"PtgRange",f:Je},18:{n:"PtgUplus",f:Je},19:{n:"PtgUminus",f:Je},20:{n:"PtgPercent",f:Je},21:{n:"PtgParen",f:Je},22:{n:"PtgMissArg",f:Je},23:{n:"PtgStr",f:qb},26:{n:"PtgSheet",f:_w},27:{n:"PtgEndSheet",f:kw},28:{n:"PtgErr",f:Gb},29:{n:"PtgBool",f:Kb},30:{n:"PtgInt",f:Xb},31:{n:"PtgNum",f:Yb},32:{n:"PtgArray",f:Db},33:{n:"PtgFunc",f:Ub},34:{n:"PtgFuncVar",f:Vb},35:{n:"PtgName",f:ew},36:{n:"PtgRef",f:Mb},37:{n:"PtgArea",f:Tb},38:{n:"PtgMemArea",f:aw},39:{n:"PtgMemErr",f:ow},40:{n:"PtgMemNoMem",f:lw},41:{n:"PtgMemFunc",f:iw},42:{n:"PtgRefErr",f:nw},43:{n:"PtgAreaErr",f:Cb},44:{n:"PtgRefN",f:Bb},45:{n:"PtgAreaN",f:Fb},46:{n:"PtgMemAreaN",f:Ew},47:{n:"PtgMemNoMemN",f:Tw},57:{n:"PtgNameX",f:tw},58:{n:"PtgRef3d",f:zb},59:{n:"PtgArea3d",f:Ab},60:{n:"PtgRefErr3d",f:sw},61:{n:"PtgAreaErr3d",f:Sb},255:{}},Cw={64:32,96:32,65:33,97:33,66:34,98:34,67:35,99:35,68:36,100:36,69:37,101:37,70:38,102:38,71:39,103:39,72:40,104:40,73:41,105:41,74:42,106:42,75:43,107:43,76:44,108:44,77:45,109:45,78:46,110:46,79:47,111:47,88:34,120:34,89:57,121:57,90:58,122:58,91:59,123:59,92:60,124:60,93:61,125:61},Sw={1:{n:"PtgElfLel",f:th},2:{n:"PtgElfRw",f:vw},3:{n:"PtgElfCol",f:uw},6:{n:"PtgElfRwV",f:xw},7:{n:"PtgElfColV",f:dw},10:{n:"PtgElfRadical",f:pw},11:{n:"PtgElfRadicalS",f:mw},13:{n:"PtgElfColS",f:hw},15:{n:"PtgElfColSV",f:fw},16:{n:"PtgElfRadicalLel",f:gw},25:{n:"PtgList",f:ww},29:{n:"PtgSxName",f:yw},255:{}},Fw={0:{n:"PtgAttrNoop",f:Aw},1:{n:"PtgAttrSemi",f:Lb},2:{n:"PtgAttrIf",f:Ib},4:{n:"PtgAttrChoose",f:Ob},8:{n:"PtgAttrGoto",f:Rb},16:{n:"PtgAttrSum",f:Wb},32:{n:"PtgAttrBaxcel",f:Bc},33:{n:"PtgAttrBaxcel",f:Bc},64:{n:"PtgAttrSpace",f:Nb},65:{n:"PtgAttrSpaceSemi",f:$b},128:{n:"PtgAttrIfError",f:Pb},255:{}};function fn(e,t,r,a){if(a.biff<8)return kt(e,t);for(var i=e.l+t,n=[],s=0;s!==r.length;++s)switch(r[s][0]){case"PtgArray":r[s][1]=Qb(e,0,a),n.push(r[s][1]);break;case"PtgMemArea":r[s][2]=Jb(e,r[s][1],a),n.push(r[s][2]);break;case"PtgExp":a&&a.biff==12&&(r[s][1][1]=e.read_shift(4),n.push(r[s][1]));break;case"PtgList":case"PtgElfRadicalS":case"PtgElfColS":case"PtgElfColSV":throw"Unsupported "+r[s][0]}return t=i-e.l,t!==0&&n.push(kt(e,t)),n}function dn(e,t,r){for(var a=e.l+t,i,n,s=[];a!=e.l;)t=a-e.l,n=e[e.l],i=zc[n]||zc[Cw[n]],(n===24||n===25)&&(i=(n===24?Sw:Fw)[e[e.l+1]]),!i||!i.f?kt(e,t):s.push([i.n,i.f(e,t,r)]);return s}function Dw(e){for(var t=[],r=0;r<e.length;++r){for(var a=e[r],i=[],n=0;n<a.length;++n){var s=a[n];if(s)switch(s[0]){case 2:i.push('"'+s[1].replace(/"/g,'""')+'"');break;default:i.push(s[1])}else i.push("")}t.push(i.join(","))}return t.join(";")}var Ow={PtgAdd:"+",PtgConcat:"&",PtgDiv:"/",PtgEq:"=",PtgGe:">=",PtgGt:">",PtgLe:"<=",PtgLt:"<",PtgMul:"*",PtgNe:"<>",PtgPower:"^",PtgSub:"-"};function Rw(e,t){if(!e&&!(t&&t.biff<=5&&t.biff>=2))throw new Error("empty sheet name");return/[^\w\u4E00-\u9FFF\u3040-\u30FF]/.test(e)?"'"+e+"'":e}function rh(e,t,r){if(!e)return"SH33TJSERR0";if(r.biff>8&&(!e.XTI||!e.XTI[t]))return e.SheetNames[t];if(!e.XTI)return"SH33TJSERR6";var a=e.XTI[t];if(r.biff<8)return t>1e4&&(t-=65536),t<0&&(t=-t),t==0?"":e.XTI[t-1];if(!a)return"SH33TJSERR1";var i="";if(r.biff>8)switch(e[a[0]][0]){case 357:return i=a[1]==-1?"#REF":e.SheetNames[a[1]],a[1]==a[2]?i:i+":"+e.SheetNames[a[2]];case 358:return r.SID!=null?e.SheetNames[r.SID]:"SH33TJSSAME"+e[a[0]][0];case 355:default:return"SH33TJSSRC"+e[a[0]][0]}switch(e[a[0]][0][0]){case 1025:return i=a[1]==-1?"#REF":e.SheetNames[a[1]]||"SH33TJSERR3",a[1]==a[2]?i:i+":"+e.SheetNames[a[2]];case 14849:return e[a[0]].slice(1).map(function(n){return n.Name}).join(";;");default:return e[a[0]][0][3]?(i=a[1]==-1?"#REF":e[a[0]][0][3][a[1]]||"SH33TJSERR4",a[1]==a[2]?i:i+":"+e[a[0]][0][3][a[2]]):"SH33TJSERR2"}}function Uc(e,t,r){var a=rh(e,t,r);return a=="#REF"?a:Rw(a,r)}function bt(e,t,r,a,i){var n=i&&i.biff||8,s={s:{c:0,r:0}},o=[],l,c,u,h=0,d=0,f,p="";if(!e[0]||!e[0][0])return"";for(var g=-1,m="",w=0,C=e[0].length;w<C;++w){var x=e[0][w];switch(x[0]){case"PtgUminus":o.push("-"+o.pop());break;case"PtgUplus":o.push("+"+o.pop());break;case"PtgPercent":o.push(o.pop()+"%");break;case"PtgAdd":case"PtgConcat":case"PtgDiv":case"PtgEq":case"PtgGe":case"PtgGt":case"PtgLe":case"PtgLt":case"PtgMul":case"PtgNe":case"PtgPower":case"PtgSub":if(l=o.pop(),c=o.pop(),g>=0){switch(e[0][g][1][0]){case 0:m=je(" ",e[0][g][1][1]);break;case 1:m=je("\r",e[0][g][1][1]);break;default:if(m="",i.WTF)throw new Error("Unexpected PtgAttrSpaceType "+e[0][g][1][0])}c=c+m,g=-1}o.push(c+Ow[x[0]]+l);break;case"PtgIsect":l=o.pop(),c=o.pop(),o.push(c+" "+l);break;case"PtgUnion":l=o.pop(),c=o.pop(),o.push(c+","+l);break;case"PtgRange":l=o.pop(),c=o.pop(),o.push(c+":"+l);break;case"PtgAttrChoose":break;case"PtgAttrGoto":break;case"PtgAttrIf":break;case"PtgAttrIfError":break;case"PtgRef":u=Fi(x[1][1],s,i),o.push(Di(u,n));break;case"PtgRefN":u=r?Fi(x[1][1],r,i):x[1][1],o.push(Di(u,n));break;case"PtgRef3d":h=x[1][1],u=Fi(x[1][2],s,i),p=Uc(a,h,i),o.push(p+"!"+Di(u,n));break;case"PtgFunc":case"PtgFuncVar":var D=x[1][0],M=x[1][1];D||(D=0),D&=127;var O=D==0?[]:o.slice(-D);o.length-=D,M==="User"&&(M=O.shift()),o.push(M+"("+O.join(",")+")");break;case"PtgBool":o.push(x[1]?"TRUE":"FALSE");break;case"PtgInt":o.push(x[1]);break;case"PtgNum":o.push(String(x[1]));break;case"PtgStr":o.push('"'+x[1].replace(/"/g,'""')+'"');break;case"PtgErr":o.push(x[1]);break;case"PtgAreaN":f=yc(x[1][1],r?{s:r}:s,i),o.push(Ss(f,i));break;case"PtgArea":f=yc(x[1][1],s,i),o.push(Ss(f,i));break;case"PtgArea3d":h=x[1][1],f=x[1][2],p=Uc(a,h,i),o.push(p+"!"+Ss(f,i));break;case"PtgAttrSum":o.push("SUM("+o.pop()+")");break;case"PtgAttrBaxcel":case"PtgAttrSemi":break;case"PtgName":d=x[1][2];var E=(a.names||[])[d-1]||(a[0]||[])[d],B=E?E.Name:"SH33TJSNAME"+String(d);B&&B.slice(0,6)=="_xlfn."&&!i.xlfn&&(B=B.slice(6)),o.push(B);break;case"PtgNameX":var R=x[1][1];d=x[1][2];var H;if(i.biff<=5)R<0&&(R=-R),a[R]&&(H=a[R][d]);else{var z="";if(((a[R]||[])[0]||[])[0]==14849||(((a[R]||[])[0]||[])[0]==1025?a[R][d]&&a[R][d].itab>0&&(z=a.SheetNames[a[R][d].itab-1]+"!"):z=a.SheetNames[d-1]+"!"),a[R]&&a[R][d])z+=a[R][d].Name;else if(a[0]&&a[0][d])z+=a[0][d].Name;else{var L=(rh(a,R,i)||"").split(";;");L[d-1]?z=L[d-1]:z+="SH33TJSERRX"}o.push(z);break}H||(H={Name:"SH33TJSERRY"}),o.push(H.Name);break;case"PtgParen":var Z="(",se=")";if(g>=0){switch(m="",e[0][g][1][0]){case 2:Z=je(" ",e[0][g][1][1])+Z;break;case 3:Z=je("\r",e[0][g][1][1])+Z;break;case 4:se=je(" ",e[0][g][1][1])+se;break;case 5:se=je("\r",e[0][g][1][1])+se;break;default:if(i.WTF)throw new Error("Unexpected PtgAttrSpaceType "+e[0][g][1][0])}g=-1}o.push(Z+o.pop()+se);break;case"PtgRefErr":o.push("#REF!");break;case"PtgRefErr3d":o.push("#REF!");break;case"PtgExp":u={c:x[1][1],r:x[1][0]};var te={c:r.c,r:r.r};if(a.sharedf[xe(u)]){var le=a.sharedf[xe(u)];o.push(bt(le,s,te,a,i))}else{var re=!1;for(l=0;l!=a.arrayf.length;++l)if(c=a.arrayf[l],!(u.c<c[0].s.c||u.c>c[0].e.c)&&!(u.r<c[0].s.r||u.r>c[0].e.r)){o.push(bt(c[1],s,te,a,i)),re=!0;break}re||o.push(x[1])}break;case"PtgArray":o.push("{"+Dw(x[1])+"}");break;case"PtgMemArea":break;case"PtgAttrSpace":case"PtgAttrSpaceSemi":g=w;break;case"PtgTbl":break;case"PtgMemErr":break;case"PtgMissArg":o.push("");break;case"PtgAreaErr":o.push("#REF!");break;case"PtgAreaErr3d":o.push("#REF!");break;case"PtgList":o.push("Table"+x[1].idx+"[#"+x[1].rt+"]");break;case"PtgMemAreaN":case"PtgMemNoMemN":case"PtgAttrNoop":case"PtgSheet":case"PtgEndSheet":break;case"PtgMemFunc":break;case"PtgMemNoMem":break;case"PtgElfCol":case"PtgElfColS":case"PtgElfColSV":case"PtgElfColV":case"PtgElfLel":case"PtgElfRadical":case"PtgElfRadicalLel":case"PtgElfRadicalS":case"PtgElfRw":case"PtgElfRwV":throw new Error("Unsupported ELFs");case"PtgSxName":throw new Error("Unrecognized Formula Token: "+String(x));default:throw new Error("Unrecognized Formula Token: "+String(x))}var Ee=["PtgAttrSpace","PtgAttrSpaceSemi","PtgAttrGoto"];if(i.biff!=3&&g>=0&&Ee.indexOf(e[0][w][0])==-1){x=e[0][g];var W=!0;switch(x[1][0]){case 4:W=!1;case 0:m=je(" ",x[1][1]);break;case 5:W=!1;case 1:m=je("\r",x[1][1]);break;default:if(m="",i.WTF)throw new Error("Unexpected PtgAttrSpaceType "+x[1][0])}o.push((W?m:"")+o.pop()+(W?"":m)),g=-1}}if(o.length>1&&i.WTF)throw new Error("bad formula stack");return o[0]}function Iw(e,t,r){var a=e.l+t,i=r.biff==2?1:2,n,s=e.read_shift(i);if(s==65535)return[[],kt(e,t-2)];var o=dn(e,s,r);return t!==s+i&&(n=fn(e,t-s-i,o,r)),e.l=a,[o,n]}function Pw(e,t,r){var a=e.l+t,i=r.biff==2?1:2,n,s=e.read_shift(i);if(s==65535)return[[],kt(e,t-2)];var o=dn(e,s,r);return t!==s+i&&(n=fn(e,t-s-i,o,r)),e.l=a,[o,n]}function Lw(e,t,r,a){var i=e.l+t,n=dn(e,a,r),s;return i!==e.l&&(s=fn(e,i-e.l,n,r)),[n,s]}function Nw(e,t,r){var a=e.l+t,i,n=e.read_shift(2),s=dn(e,n,r);return n==65535?[[],kt(e,t-2)]:(t!==n+2&&(i=fn(e,a-n-2,s,r)),[s,i])}function $w(e){var t;if(Or(e,e.l+6)!==65535)return[wt(e),"n"];switch(e[e.l]){case 0:return e.l+=8,["String","s"];case 1:return t=e[e.l+2]===1,e.l+=8,[t,"b"];case 2:return t=e[e.l+2],e.l+=8,[t,"e"];case 3:return e.l+=8,["","s"]}return[]}function Os(e,t,r){var a=e.l+t,i=Ar(e);r.biff==2&&++e.l;var n=$w(e),s=e.read_shift(1);r.biff!=2&&(e.read_shift(1),r.biff>=5&&e.read_shift(4));var o=Pw(e,a-e.l,r);return{cell:i,val:n[0],formula:o,shared:s>>3&1,tt:n[1]}}function ds(e,t,r){var a=e.read_shift(4),i=dn(e,a,r),n=e.read_shift(4),s=n>0?fn(e,n,i,r):null;return[i,s]}var Mw=ds,ps=ds,Bw=ds,zw=ds,Uw={0:"BEEP",1:"OPEN",2:"OPEN.LINKS",3:"CLOSE.ALL",4:"SAVE",5:"SAVE.AS",6:"FILE.DELETE",7:"PAGE.SETUP",8:"PRINT",9:"PRINTER.SETUP",10:"QUIT",11:"NEW.WINDOW",12:"ARRANGE.ALL",13:"WINDOW.SIZE",14:"WINDOW.MOVE",15:"FULL",16:"CLOSE",17:"RUN",22:"SET.PRINT.AREA",23:"SET.PRINT.TITLES",24:"SET.PAGE.BREAK",25:"REMOVE.PAGE.BREAK",26:"FONT",27:"DISPLAY",28:"PROTECT.DOCUMENT",29:"PRECISION",30:"A1.R1C1",31:"CALCULATE.NOW",32:"CALCULATION",34:"DATA.FIND",35:"EXTRACT",36:"DATA.DELETE",37:"SET.DATABASE",38:"SET.CRITERIA",39:"SORT",40:"DATA.SERIES",41:"TABLE",42:"FORMAT.NUMBER",43:"ALIGNMENT",44:"STYLE",45:"BORDER",46:"CELL.PROTECTION",47:"COLUMN.WIDTH",48:"UNDO",49:"CUT",50:"COPY",51:"PASTE",52:"CLEAR",53:"PASTE.SPECIAL",54:"EDIT.DELETE",55:"INSERT",56:"FILL.RIGHT",57:"FILL.DOWN",61:"DEFINE.NAME",62:"CREATE.NAMES",63:"FORMULA.GOTO",64:"FORMULA.FIND",65:"SELECT.LAST.CELL",66:"SHOW.ACTIVE.CELL",67:"GALLERY.AREA",68:"GALLERY.BAR",69:"GALLERY.COLUMN",70:"GALLERY.LINE",71:"GALLERY.PIE",72:"GALLERY.SCATTER",73:"COMBINATION",74:"PREFERRED",75:"ADD.OVERLAY",76:"GRIDLINES",77:"SET.PREFERRED",78:"AXES",79:"LEGEND",80:"ATTACH.TEXT",81:"ADD.ARROW",82:"SELECT.CHART",83:"SELECT.PLOT.AREA",84:"PATTERNS",85:"MAIN.CHART",86:"OVERLAY",87:"SCALE",88:"FORMAT.LEGEND",89:"FORMAT.TEXT",90:"EDIT.REPEAT",91:"PARSE",92:"JUSTIFY",93:"HIDE",94:"UNHIDE",95:"WORKSPACE",96:"FORMULA",97:"FORMULA.FILL",98:"FORMULA.ARRAY",99:"DATA.FIND.NEXT",100:"DATA.FIND.PREV",101:"FORMULA.FIND.NEXT",102:"FORMULA.FIND.PREV",103:"ACTIVATE",104:"ACTIVATE.NEXT",105:"ACTIVATE.PREV",106:"UNLOCKED.NEXT",107:"UNLOCKED.PREV",108:"COPY.PICTURE",109:"SELECT",110:"DELETE.NAME",111:"DELETE.FORMAT",112:"VLINE",113:"HLINE",114:"VPAGE",115:"HPAGE",116:"VSCROLL",117:"HSCROLL",118:"ALERT",119:"NEW",120:"CANCEL.COPY",121:"SHOW.CLIPBOARD",122:"MESSAGE",124:"PASTE.LINK",125:"APP.ACTIVATE",126:"DELETE.ARROW",127:"ROW.HEIGHT",128:"FORMAT.MOVE",129:"FORMAT.SIZE",130:"FORMULA.REPLACE",131:"SEND.KEYS",132:"SELECT.SPECIAL",133:"APPLY.NAMES",134:"REPLACE.FONT",135:"FREEZE.PANES",136:"SHOW.INFO",137:"SPLIT",138:"ON.WINDOW",139:"ON.DATA",140:"DISABLE.INPUT",142:"OUTLINE",143:"LIST.NAMES",144:"FILE.CLOSE",145:"SAVE.WORKBOOK",146:"DATA.FORM",147:"COPY.CHART",148:"ON.TIME",149:"WAIT",150:"FORMAT.FONT",151:"FILL.UP",152:"FILL.LEFT",153:"DELETE.OVERLAY",155:"SHORT.MENUS",159:"SET.UPDATE.STATUS",161:"COLOR.PALETTE",162:"DELETE.STYLE",163:"WINDOW.RESTORE",164:"WINDOW.MAXIMIZE",166:"CHANGE.LINK",167:"CALCULATE.DOCUMENT",168:"ON.KEY",169:"APP.RESTORE",170:"APP.MOVE",171:"APP.SIZE",172:"APP.MINIMIZE",173:"APP.MAXIMIZE",174:"BRING.TO.FRONT",175:"SEND.TO.BACK",185:"MAIN.CHART.TYPE",186:"OVERLAY.CHART.TYPE",187:"SELECT.END",188:"OPEN.MAIL",189:"SEND.MAIL",190:"STANDARD.FONT",191:"CONSOLIDATE",192:"SORT.SPECIAL",193:"GALLERY.3D.AREA",194:"GALLERY.3D.COLUMN",195:"GALLERY.3D.LINE",196:"GALLERY.3D.PIE",197:"VIEW.3D",198:"GOAL.SEEK",199:"WORKGROUP",200:"FILL.GROUP",201:"UPDATE.LINK",202:"PROMOTE",203:"DEMOTE",204:"SHOW.DETAIL",206:"UNGROUP",207:"OBJECT.PROPERTIES",208:"SAVE.NEW.OBJECT",209:"SHARE",210:"SHARE.NAME",211:"DUPLICATE",212:"APPLY.STYLE",213:"ASSIGN.TO.OBJECT",214:"OBJECT.PROTECTION",215:"HIDE.OBJECT",216:"SET.EXTRACT",217:"CREATE.PUBLISHER",218:"SUBSCRIBE.TO",219:"ATTRIBUTES",220:"SHOW.TOOLBAR",222:"PRINT.PREVIEW",223:"EDIT.COLOR",224:"SHOW.LEVELS",225:"FORMAT.MAIN",226:"FORMAT.OVERLAY",227:"ON.RECALC",228:"EDIT.SERIES",229:"DEFINE.STYLE",240:"LINE.PRINT",243:"ENTER.DATA",249:"GALLERY.RADAR",250:"MERGE.STYLES",251:"EDITION.OPTIONS",252:"PASTE.PICTURE",253:"PASTE.PICTURE.LINK",254:"SPELLING",256:"ZOOM",259:"INSERT.OBJECT",260:"WINDOW.MINIMIZE",265:"SOUND.NOTE",266:"SOUND.PLAY",267:"FORMAT.SHAPE",268:"EXTEND.POLYGON",269:"FORMAT.AUTO",272:"GALLERY.3D.BAR",273:"GALLERY.3D.SURFACE",274:"FILL.AUTO",276:"CUSTOMIZE.TOOLBAR",277:"ADD.TOOL",278:"EDIT.OBJECT",279:"ON.DOUBLECLICK",280:"ON.ENTRY",281:"WORKBOOK.ADD",282:"WORKBOOK.MOVE",283:"WORKBOOK.COPY",284:"WORKBOOK.OPTIONS",285:"SAVE.WORKSPACE",288:"CHART.WIZARD",289:"DELETE.TOOL",290:"MOVE.TOOL",291:"WORKBOOK.SELECT",292:"WORKBOOK.ACTIVATE",293:"ASSIGN.TO.TOOL",295:"COPY.TOOL",296:"RESET.TOOL",297:"CONSTRAIN.NUMERIC",298:"PASTE.TOOL",302:"WORKBOOK.NEW",305:"SCENARIO.CELLS",306:"SCENARIO.DELETE",307:"SCENARIO.ADD",308:"SCENARIO.EDIT",309:"SCENARIO.SHOW",310:"SCENARIO.SHOW.NEXT",311:"SCENARIO.SUMMARY",312:"PIVOT.TABLE.WIZARD",313:"PIVOT.FIELD.PROPERTIES",314:"PIVOT.FIELD",315:"PIVOT.ITEM",316:"PIVOT.ADD.FIELDS",318:"OPTIONS.CALCULATION",319:"OPTIONS.EDIT",320:"OPTIONS.VIEW",321:"ADDIN.MANAGER",322:"MENU.EDITOR",323:"ATTACH.TOOLBARS",324:"VBAActivate",325:"OPTIONS.CHART",328:"VBA.INSERT.FILE",330:"VBA.PROCEDURE.DEFINITION",336:"ROUTING.SLIP",338:"ROUTE.DOCUMENT",339:"MAIL.LOGON",342:"INSERT.PICTURE",343:"EDIT.TOOL",344:"GALLERY.DOUGHNUT",350:"CHART.TREND",352:"PIVOT.ITEM.PROPERTIES",354:"WORKBOOK.INSERT",355:"OPTIONS.TRANSITION",356:"OPTIONS.GENERAL",370:"FILTER.ADVANCED",373:"MAIL.ADD.MAILER",374:"MAIL.DELETE.MAILER",375:"MAIL.REPLY",376:"MAIL.REPLY.ALL",377:"MAIL.FORWARD",378:"MAIL.NEXT.LETTER",379:"DATA.LABEL",380:"INSERT.TITLE",381:"FONT.PROPERTIES",382:"MACRO.OPTIONS",383:"WORKBOOK.HIDE",384:"WORKBOOK.UNHIDE",385:"WORKBOOK.DELETE",386:"WORKBOOK.NAME",388:"GALLERY.CUSTOM",390:"ADD.CHART.AUTOFORMAT",391:"DELETE.CHART.AUTOFORMAT",392:"CHART.ADD.DATA",393:"AUTO.OUTLINE",394:"TAB.ORDER",395:"SHOW.DIALOG",396:"SELECT.ALL",397:"UNGROUP.SHEETS",398:"SUBTOTAL.CREATE",399:"SUBTOTAL.REMOVE",400:"RENAME.OBJECT",412:"WORKBOOK.SCROLL",413:"WORKBOOK.NEXT",414:"WORKBOOK.PREV",415:"WORKBOOK.TAB.SPLIT",416:"FULL.SCREEN",417:"WORKBOOK.PROTECT",420:"SCROLLBAR.PROPERTIES",421:"PIVOT.SHOW.PAGES",422:"TEXT.TO.COLUMNS",423:"FORMAT.CHARTTYPE",424:"LINK.FORMAT",425:"TRACER.DISPLAY",430:"TRACER.NAVIGATE",431:"TRACER.CLEAR",432:"TRACER.ERROR",433:"PIVOT.FIELD.GROUP",434:"PIVOT.FIELD.UNGROUP",435:"CHECKBOX.PROPERTIES",436:"LABEL.PROPERTIES",437:"LISTBOX.PROPERTIES",438:"EDITBOX.PROPERTIES",439:"PIVOT.REFRESH",440:"LINK.COMBO",441:"OPEN.TEXT",442:"HIDE.DIALOG",443:"SET.DIALOG.FOCUS",444:"ENABLE.OBJECT",445:"PUSHBUTTON.PROPERTIES",446:"SET.DIALOG.DEFAULT",447:"FILTER",448:"FILTER.SHOW.ALL",449:"CLEAR.OUTLINE",450:"FUNCTION.WIZARD",451:"ADD.LIST.ITEM",452:"SET.LIST.ITEM",453:"REMOVE.LIST.ITEM",454:"SELECT.LIST.ITEM",455:"SET.CONTROL.VALUE",456:"SAVE.COPY.AS",458:"OPTIONS.LISTS.ADD",459:"OPTIONS.LISTS.DELETE",460:"SERIES.AXES",461:"SERIES.X",462:"SERIES.Y",463:"ERRORBAR.X",464:"ERRORBAR.Y",465:"FORMAT.CHART",466:"SERIES.ORDER",467:"MAIL.LOGOFF",468:"CLEAR.ROUTING.SLIP",469:"APP.ACTIVATE.MICROSOFT",470:"MAIL.EDIT.MAILER",471:"ON.SHEET",472:"STANDARD.WIDTH",473:"SCENARIO.MERGE",474:"SUMMARY.INFO",475:"FIND.FILE",476:"ACTIVE.CELL.FONT",477:"ENABLE.TIPWIZARD",478:"VBA.MAKE.ADDIN",480:"INSERTDATATABLE",481:"WORKGROUP.OPTIONS",482:"MAIL.SEND.MAILER",485:"AUTOCORRECT",489:"POST.DOCUMENT",491:"PICKLIST",493:"VIEW.SHOW",494:"VIEW.DEFINE",495:"VIEW.DELETE",509:"SHEET.BACKGROUND",510:"INSERT.MAP.OBJECT",511:"OPTIONS.MENONO",517:"MSOCHECKS",518:"NORMAL",519:"LAYOUT",520:"RM.PRINT.AREA",521:"CLEAR.PRINT.AREA",522:"ADD.PRINT.AREA",523:"MOVE.BRK",545:"HIDECURR.NOTE",546:"HIDEALL.NOTES",547:"DELETE.NOTE",548:"TRAVERSE.NOTES",549:"ACTIVATE.NOTES",620:"PROTECT.REVISIONS",621:"UNPROTECT.REVISIONS",647:"OPTIONS.ME",653:"WEB.PUBLISH",667:"NEWWEBQUERY",673:"PIVOT.TABLE.CHART",753:"OPTIONS.SAVE",755:"OPTIONS.SPELL",808:"HIDEALL.INKANNOTS"},ah={0:"COUNT",1:"IF",2:"ISNA",3:"ISERROR",4:"SUM",5:"AVERAGE",6:"MIN",7:"MAX",8:"ROW",9:"COLUMN",10:"NA",11:"NPV",12:"STDEV",13:"DOLLAR",14:"FIXED",15:"SIN",16:"COS",17:"TAN",18:"ATAN",19:"PI",20:"SQRT",21:"EXP",22:"LN",23:"LOG10",24:"ABS",25:"INT",26:"SIGN",27:"ROUND",28:"LOOKUP",29:"INDEX",30:"REPT",31:"MID",32:"LEN",33:"VALUE",34:"TRUE",35:"FALSE",36:"AND",37:"OR",38:"NOT",39:"MOD",40:"DCOUNT",41:"DSUM",42:"DAVERAGE",43:"DMIN",44:"DMAX",45:"DSTDEV",46:"VAR",47:"DVAR",48:"TEXT",49:"LINEST",50:"TREND",51:"LOGEST",52:"GROWTH",53:"GOTO",54:"HALT",55:"RETURN",56:"PV",57:"FV",58:"NPER",59:"PMT",60:"RATE",61:"MIRR",62:"IRR",63:"RAND",64:"MATCH",65:"DATE",66:"TIME",67:"DAY",68:"MONTH",69:"YEAR",70:"WEEKDAY",71:"HOUR",72:"MINUTE",73:"SECOND",74:"NOW",75:"AREAS",76:"ROWS",77:"COLUMNS",78:"OFFSET",79:"ABSREF",80:"RELREF",81:"ARGUMENT",82:"SEARCH",83:"TRANSPOSE",84:"ERROR",85:"STEP",86:"TYPE",87:"ECHO",88:"SET.NAME",89:"CALLER",90:"DEREF",91:"WINDOWS",92:"SERIES",93:"DOCUMENTS",94:"ACTIVE.CELL",95:"SELECTION",96:"RESULT",97:"ATAN2",98:"ASIN",99:"ACOS",100:"CHOOSE",101:"HLOOKUP",102:"VLOOKUP",103:"LINKS",104:"INPUT",105:"ISREF",106:"GET.FORMULA",107:"GET.NAME",108:"SET.VALUE",109:"LOG",110:"EXEC",111:"CHAR",112:"LOWER",113:"UPPER",114:"PROPER",115:"LEFT",116:"RIGHT",117:"EXACT",118:"TRIM",119:"REPLACE",120:"SUBSTITUTE",121:"CODE",122:"NAMES",123:"DIRECTORY",124:"FIND",125:"CELL",126:"ISERR",127:"ISTEXT",128:"ISNUMBER",129:"ISBLANK",130:"T",131:"N",132:"FOPEN",133:"FCLOSE",134:"FSIZE",135:"FREADLN",136:"FREAD",137:"FWRITELN",138:"FWRITE",139:"FPOS",140:"DATEVALUE",141:"TIMEVALUE",142:"SLN",143:"SYD",144:"DDB",145:"GET.DEF",146:"REFTEXT",147:"TEXTREF",148:"INDIRECT",149:"REGISTER",150:"CALL",151:"ADD.BAR",152:"ADD.MENU",153:"ADD.COMMAND",154:"ENABLE.COMMAND",155:"CHECK.COMMAND",156:"RENAME.COMMAND",157:"SHOW.BAR",158:"DELETE.MENU",159:"DELETE.COMMAND",160:"GET.CHART.ITEM",161:"DIALOG.BOX",162:"CLEAN",163:"MDETERM",164:"MINVERSE",165:"MMULT",166:"FILES",167:"IPMT",168:"PPMT",169:"COUNTA",170:"CANCEL.KEY",171:"FOR",172:"WHILE",173:"BREAK",174:"NEXT",175:"INITIATE",176:"REQUEST",177:"POKE",178:"EXECUTE",179:"TERMINATE",180:"RESTART",181:"HELP",182:"GET.BAR",183:"PRODUCT",184:"FACT",185:"GET.CELL",186:"GET.WORKSPACE",187:"GET.WINDOW",188:"GET.DOCUMENT",189:"DPRODUCT",190:"ISNONTEXT",191:"GET.NOTE",192:"NOTE",193:"STDEVP",194:"VARP",195:"DSTDEVP",196:"DVARP",197:"TRUNC",198:"ISLOGICAL",199:"DCOUNTA",200:"DELETE.BAR",201:"UNREGISTER",204:"USDOLLAR",205:"FINDB",206:"SEARCHB",207:"REPLACEB",208:"LEFTB",209:"RIGHTB",210:"MIDB",211:"LENB",212:"ROUNDUP",213:"ROUNDDOWN",214:"ASC",215:"DBCS",216:"RANK",219:"ADDRESS",220:"DAYS360",221:"TODAY",222:"VDB",223:"ELSE",224:"ELSE.IF",225:"END.IF",226:"FOR.CELL",227:"MEDIAN",228:"SUMPRODUCT",229:"SINH",230:"COSH",231:"TANH",232:"ASINH",233:"ACOSH",234:"ATANH",235:"DGET",236:"CREATE.OBJECT",237:"VOLATILE",238:"LAST.ERROR",239:"CUSTOM.UNDO",240:"CUSTOM.REPEAT",241:"FORMULA.CONVERT",242:"GET.LINK.INFO",243:"TEXT.BOX",244:"INFO",245:"GROUP",246:"GET.OBJECT",247:"DB",248:"PAUSE",251:"RESUME",252:"FREQUENCY",253:"ADD.TOOLBAR",254:"DELETE.TOOLBAR",255:"User",256:"RESET.TOOLBAR",257:"EVALUATE",258:"GET.TOOLBAR",259:"GET.TOOL",260:"SPELLING.CHECK",261:"ERROR.TYPE",262:"APP.TITLE",263:"WINDOW.TITLE",264:"SAVE.TOOLBAR",265:"ENABLE.TOOL",266:"PRESS.TOOL",267:"REGISTER.ID",268:"GET.WORKBOOK",269:"AVEDEV",270:"BETADIST",271:"GAMMALN",272:"BETAINV",273:"BINOMDIST",274:"CHIDIST",275:"CHIINV",276:"COMBIN",277:"CONFIDENCE",278:"CRITBINOM",279:"EVEN",280:"EXPONDIST",281:"FDIST",282:"FINV",283:"FISHER",284:"FISHERINV",285:"FLOOR",286:"GAMMADIST",287:"GAMMAINV",288:"CEILING",289:"HYPGEOMDIST",290:"LOGNORMDIST",291:"LOGINV",292:"NEGBINOMDIST",293:"NORMDIST",294:"NORMSDIST",295:"NORMINV",296:"NORMSINV",297:"STANDARDIZE",298:"ODD",299:"PERMUT",300:"POISSON",301:"TDIST",302:"WEIBULL",303:"SUMXMY2",304:"SUMX2MY2",305:"SUMX2PY2",306:"CHITEST",307:"CORREL",308:"COVAR",309:"FORECAST",310:"FTEST",311:"INTERCEPT",312:"PEARSON",313:"RSQ",314:"STEYX",315:"SLOPE",316:"TTEST",317:"PROB",318:"DEVSQ",319:"GEOMEAN",320:"HARMEAN",321:"SUMSQ",322:"KURT",323:"SKEW",324:"ZTEST",325:"LARGE",326:"SMALL",327:"QUARTILE",328:"PERCENTILE",329:"PERCENTRANK",330:"MODE",331:"TRIMMEAN",332:"TINV",334:"MOVIE.COMMAND",335:"GET.MOVIE",336:"CONCATENATE",337:"POWER",338:"PIVOT.ADD.DATA",339:"GET.PIVOT.TABLE",340:"GET.PIVOT.FIELD",341:"GET.PIVOT.ITEM",342:"RADIANS",343:"DEGREES",344:"SUBTOTAL",345:"SUMIF",346:"COUNTIF",347:"COUNTBLANK",348:"SCENARIO.GET",349:"OPTIONS.LISTS.GET",350:"ISPMT",351:"DATEDIF",352:"DATESTRING",353:"NUMBERSTRING",354:"ROMAN",355:"OPEN.DIALOG",356:"SAVE.DIALOG",357:"VIEW.GET",358:"GETPIVOTDATA",359:"HYPERLINK",360:"PHONETIC",361:"AVERAGEA",362:"MAXA",363:"MINA",364:"STDEVPA",365:"VARPA",366:"STDEVA",367:"VARA",368:"BAHTTEXT",369:"THAIDAYOFWEEK",370:"THAIDIGIT",371:"THAIMONTHOFYEAR",372:"THAINUMSOUND",373:"THAINUMSTRING",374:"THAISTRINGLENGTH",375:"ISTHAIDIGIT",376:"ROUNDBAHTDOWN",377:"ROUNDBAHTUP",378:"THAIYEAR",379:"RTD",380:"CUBEVALUE",381:"CUBEMEMBER",382:"CUBEMEMBERPROPERTY",383:"CUBERANKEDMEMBER",384:"HEX2BIN",385:"HEX2DEC",386:"HEX2OCT",387:"DEC2BIN",388:"DEC2HEX",389:"DEC2OCT",390:"OCT2BIN",391:"OCT2HEX",392:"OCT2DEC",393:"BIN2DEC",394:"BIN2OCT",395:"BIN2HEX",396:"IMSUB",397:"IMDIV",398:"IMPOWER",399:"IMABS",400:"IMSQRT",401:"IMLN",402:"IMLOG2",403:"IMLOG10",404:"IMSIN",405:"IMCOS",406:"IMEXP",407:"IMARGUMENT",408:"IMCONJUGATE",409:"IMAGINARY",410:"IMREAL",411:"COMPLEX",412:"IMSUM",413:"IMPRODUCT",414:"SERIESSUM",415:"FACTDOUBLE",416:"SQRTPI",417:"QUOTIENT",418:"DELTA",419:"GESTEP",420:"ISEVEN",421:"ISODD",422:"MROUND",423:"ERF",424:"ERFC",425:"BESSELJ",426:"BESSELK",427:"BESSELY",428:"BESSELI",429:"XIRR",430:"XNPV",431:"PRICEMAT",432:"YIELDMAT",433:"INTRATE",434:"RECEIVED",435:"DISC",436:"PRICEDISC",437:"YIELDDISC",438:"TBILLEQ",439:"TBILLPRICE",440:"TBILLYIELD",441:"PRICE",442:"YIELD",443:"DOLLARDE",444:"DOLLARFR",445:"NOMINAL",446:"EFFECT",447:"CUMPRINC",448:"CUMIPMT",449:"EDATE",450:"EOMONTH",451:"YEARFRAC",452:"COUPDAYBS",453:"COUPDAYS",454:"COUPDAYSNC",455:"COUPNCD",456:"COUPNUM",457:"COUPPCD",458:"DURATION",459:"MDURATION",460:"ODDLPRICE",461:"ODDLYIELD",462:"ODDFPRICE",463:"ODDFYIELD",464:"RANDBETWEEN",465:"WEEKNUM",466:"AMORDEGRC",467:"AMORLINC",468:"CONVERT",724:"SHEETJS",469:"ACCRINT",470:"ACCRINTM",471:"WORKDAY",472:"NETWORKDAYS",473:"GCD",474:"MULTINOMIAL",475:"LCM",476:"FVSCHEDULE",477:"CUBEKPIMEMBER",478:"CUBESET",479:"CUBESETCOUNT",480:"IFERROR",481:"COUNTIFS",482:"SUMIFS",483:"AVERAGEIF",484:"AVERAGEIFS"},Vw={2:1,3:1,10:0,15:1,16:1,17:1,18:1,19:0,20:1,21:1,22:1,23:1,24:1,25:1,26:1,27:2,30:2,31:3,32:1,33:1,34:0,35:0,38:1,39:2,40:3,41:3,42:3,43:3,44:3,45:3,47:3,48:2,53:1,61:3,63:0,65:3,66:3,67:1,68:1,69:1,70:1,71:1,72:1,73:1,74:0,75:1,76:1,77:1,79:2,80:2,83:1,85:0,86:1,89:0,90:1,94:0,95:0,97:2,98:1,99:1,101:3,102:3,105:1,106:1,108:2,111:1,112:1,113:1,114:1,117:2,118:1,119:4,121:1,126:1,127:1,128:1,129:1,130:1,131:1,133:1,134:1,135:1,136:2,137:2,138:2,140:1,141:1,142:3,143:4,144:4,161:1,162:1,163:1,164:1,165:2,172:1,175:2,176:2,177:3,178:2,179:1,184:1,186:1,189:3,190:1,195:3,196:3,197:1,198:1,199:3,201:1,207:4,210:3,211:1,212:2,213:2,214:1,215:1,225:0,229:1,230:1,231:1,232:1,233:1,234:1,235:3,244:1,247:4,252:2,257:1,261:1,271:1,273:4,274:2,275:2,276:2,277:3,278:3,279:1,280:3,281:3,282:3,283:1,284:1,285:2,286:4,287:3,288:2,289:4,290:3,291:3,292:3,293:4,294:1,295:3,296:1,297:3,298:1,299:2,300:3,301:3,302:4,303:2,304:2,305:2,306:2,307:2,308:2,309:3,310:2,311:2,312:2,313:2,314:2,315:2,316:4,325:2,326:2,327:2,328:2,331:2,332:2,337:2,342:1,343:1,346:2,347:1,350:4,351:3,352:1,353:2,360:1,368:1,369:1,370:1,371:1,372:1,373:1,374:1,375:1,376:1,377:1,378:1,382:3,385:1,392:1,393:1,396:2,397:2,398:2,399:1,400:1,401:1,402:1,403:1,404:1,405:1,406:1,407:1,408:1,409:1,410:1,414:4,415:1,416:1,417:2,420:1,421:1,422:2,424:1,425:2,426:2,427:2,428:2,430:3,438:3,439:3,440:3,443:2,444:2,445:2,446:2,447:6,448:6,449:2,450:2,464:2,468:3,476:2,479:1,480:2,65535:0};function Vc(e){return e.slice(0,3)=="of:"&&(e=e.slice(3)),e.charCodeAt(0)==61&&(e=e.slice(1),e.charCodeAt(0)==61&&(e=e.slice(1))),e=e.replace(/COM\.MICROSOFT\./g,""),e=e.replace(/\[((?:\.[A-Z]+[0-9]+)(?::\.[A-Z]+[0-9]+)?)\]/g,function(t,r){return r.replace(/\./g,"")}),e=e.replace(/\[.(#[A-Z]*[?!])\]/g,"$1"),e.replace(/[;~]/g,",").replace(/\|/g,";")}function Rs(e){var t=e.split(":"),r=t[0].split(".")[0];return[r,t[0].split(".")[1]+(t.length>1?":"+(t[1].split(".")[1]||t[1].split(".")[0]):"")]}var Pi={},ja={};function Li(e,t){if(e){var r=[.7,.7,.75,.75,.3,.3];t=="xlml"&&(r=[1,1,1,1,.5,.5]),e.left==null&&(e.left=r[0]),e.right==null&&(e.right=r[1]),e.top==null&&(e.top=r[2]),e.bottom==null&&(e.bottom=r[3]),e.header==null&&(e.header=r[4]),e.footer==null&&(e.footer=r[5])}}function ih(e,t,r,a,i,n){try{a.cellNF&&(e.z=we[t])}catch(o){if(a.WTF)throw o}if(!(e.t==="z"&&!a.cellStyles)){if(e.t==="d"&&typeof e.v=="string"&&(e.v=ut(e.v)),(!a||a.cellText!==!1)&&e.t!=="z")try{if(we[t]==null&&ma(Hg[t]||"General",t),e.t==="e")e.w=e.w||La[e.v];else if(t===0)if(e.t==="n")(e.v|0)===e.v?e.w=e.v.toString(10):e.w=ji(e.v);else if(e.t==="d"){var s=Ot(e.v);(s|0)===s?e.w=s.toString(10):e.w=ji(s)}else{if(e.v===void 0)return"";e.w=_a(e.v,ja)}else e.t==="d"?e.w=Qt(t,Ot(e.v),ja):e.w=Qt(t,e.v,ja)}catch(o){if(a.WTF)throw o}if(a.cellStyles&&r!=null)try{e.s=n.Fills[r],e.s.fgColor&&e.s.fgColor.theme&&!e.s.fgColor.rgb&&(e.s.fgColor.rgb=qn(i.themeElements.clrScheme[e.s.fgColor.theme].rgb,e.s.fgColor.tint||0),a.WTF&&(e.s.fgColor.raw_rgb=i.themeElements.clrScheme[e.s.fgColor.theme].rgb)),e.s.bgColor&&e.s.bgColor.theme&&(e.s.bgColor.rgb=qn(i.themeElements.clrScheme[e.s.bgColor.theme].rgb,e.s.bgColor.tint||0),a.WTF&&(e.s.bgColor.raw_rgb=i.themeElements.clrScheme[e.s.bgColor.theme].rgb))}catch(o){if(a.WTF&&n.Fills)throw o}}}function Hw(e,t){var r=Xe(t);r.s.r<=r.e.r&&r.s.c<=r.e.c&&r.s.r>=0&&r.s.c>=0&&(e["!ref"]=Fe(r))}var Ww=/<(?:\w:)?mergeCell ref="[A-Z0-9:]+"\s*[\/]?>/g,jw=/<(?:\w+:)?sheetData[^>]*>([\s\S]*)<\/(?:\w+:)?sheetData>/,Gw=/<(?:\w:)?hyperlink [^>]*>/mg,Xw=/"(\w*:\w*)"/,Kw=/<(?:\w:)?col\b[^>]*[\/]?>/g,Yw=/<(?:\w:)?autoFilter[^>]*([\/]|>([\s\S]*)<\/(?:\w:)?autoFilter)>/g,qw=/<(?:\w:)?pageMargins[^>]*\/>/g,nh=/<(?:\w:)?sheetPr\b(?:[^>a-z][^>]*)?\/>/,Zw=/<(?:\w:)?sheetPr[^>]*(?:[\/]|>([\s\S]*)<\/(?:\w:)?sheetPr)>/,Jw=/<(?:\w:)?sheetViews[^>]*(?:[\/]|>([\s\S]*)<\/(?:\w:)?sheetViews)>/;function Qw(e,t,r,a,i,n,s){if(!e)return e;a||(a={"!id":{}});var o=t.dense?[]:{},l={s:{r:2e6,c:2e6},e:{r:0,c:0}},c="",u="",h=e.match(jw);h?(c=e.slice(0,h.index),u=e.slice(h.index+h[0].length)):c=u=e;var d=c.match(nh);d?Zo(d[0],o,i,r):(d=c.match(Zw))&&ey(d[0],d[1]||"",o,i,r);var f=(c.match(/<(?:\w*:)?dimension/)||{index:-1}).index;if(f>0){var p=c.slice(f,f+50).match(Xw);p&&Hw(o,p[1])}var g=c.match(Jw);g&&g[1]&&sy(g[1],i);var m=[];if(t.cellStyles){var w=c.match(Kw);w&&ay(m,w)}h&&oy(h[1],o,t,l,n,s);var C=u.match(Yw);C&&(o["!autofilter"]=iy(C[0]));var x=[],D=u.match(Ww);if(D)for(f=0;f!=D.length;++f)x[f]=Xe(D[f].slice(D[f].indexOf('"')+1));var M=u.match(Gw);M&&ty(o,M,a);var O=u.match(qw);if(O&&(o["!margins"]=ry(ge(O[0]))),!o["!ref"]&&l.e.c>=l.s.c&&l.e.r>=l.s.r&&(o["!ref"]=Fe(l)),t.sheetRows>0&&o["!ref"]){var E=Xe(o["!ref"]);t.sheetRows<=+E.e.r&&(E.e.r=t.sheetRows-1,E.e.r>l.e.r&&(E.e.r=l.e.r),E.e.r<E.s.r&&(E.s.r=E.e.r),E.e.c>l.e.c&&(E.e.c=l.e.c),E.e.c<E.s.c&&(E.s.c=E.e.c),o["!fullref"]=o["!ref"],o["!ref"]=Fe(E))}return m.length>0&&(o["!cols"]=m),x.length>0&&(o["!merges"]=x),o}function Zo(e,t,r,a){var i=ge(e);r.Sheets[a]||(r.Sheets[a]={}),i.codeName&&(r.Sheets[a].CodeName=Oe(Be(i.codeName)))}function ey(e,t,r,a,i){Zo(e.slice(0,e.indexOf(">")),r,a,i)}function ty(e,t,r){for(var a=Array.isArray(e),i=0;i!=t.length;++i){var n=ge(Be(t[i]),!0);if(!n.ref)return;var s=((r||{})["!id"]||[])[n.id];s?(n.Target=s.Target,n.location&&(n.Target+="#"+Oe(n.location))):(n.Target="#"+Oe(n.location),s={Target:n.Target,TargetMode:"Internal"}),n.Rel=s,n.tooltip&&(n.Tooltip=n.tooltip,delete n.tooltip);for(var o=Xe(n.ref),l=o.s.r;l<=o.e.r;++l)for(var c=o.s.c;c<=o.e.c;++c){var u=xe({c,r:l});a?(e[l]||(e[l]=[]),e[l][c]||(e[l][c]={t:"z",v:void 0}),e[l][c].l=n):(e[u]||(e[u]={t:"z",v:void 0}),e[u].l=n)}}}function ry(e){var t={};return["left","right","top","bottom","header","footer"].forEach(function(r){e[r]&&(t[r]=parseFloat(e[r]))}),t}function ay(e,t){for(var r=!1,a=0;a!=t.length;++a){var i=ge(t[a],!0);i.hidden&&(i.hidden=Ue(i.hidden));var n=parseInt(i.min,10)-1,s=parseInt(i.max,10)-1;for(i.outlineLevel&&(i.level=+i.outlineLevel||0),delete i.min,delete i.max,i.width=+i.width,!r&&i.width&&(r=!0,Yo(i.width)),qa(i);n<=s;)e[n++]=dt(i)}}function iy(e){var t={ref:(e.match(/ref="([^"]*)"/)||[])[1]};return t}var ny=/<(?:\w:)?sheetView(?:[^>a-z][^>]*)?\/?>/;function sy(e,t){t.Views||(t.Views=[{}]),(e.match(ny)||[]).forEach(function(r,a){var i=ge(r);t.Views[a]||(t.Views[a]={}),+i.zoomScale&&(t.Views[a].zoom=+i.zoomScale),Ue(i.rightToLeft)&&(t.Views[a].RTL=!0)})}var oy=function(){var e=/<(?:\w+:)?c[ \/>]/,t=/<\/(?:\w+:)?row>/,r=/r=["']([^"']*)["']/,a=/<(?:\w+:)?is>([\S\s]*?)<\/(?:\w+:)?is>/,i=/ref=["']([^"']*)["']/,n=Gi("v"),s=Gi("f");return function(l,c,u,h,d,f){for(var p=0,g="",m=[],w=[],C=0,x=0,D=0,M="",O,E,B=0,R=0,H,z,L=0,Z=0,se=Array.isArray(f.CellXf),te,le=[],re=[],Ee=Array.isArray(c),W=[],de={},ve=!1,S=!!u.sheetStubs,G=l.split(t),N=0,P=G.length;N!=P;++N){g=G[N].trim();var q=g.length;if(q!==0){var ne=0;e:for(p=0;p<q;++p)switch(g[p]){case">":if(g[p-1]!="/"){++p;break e}if(u&&u.cellStyles){if(E=ge(g.slice(ne,p),!0),B=E.r!=null?parseInt(E.r,10):B+1,R=-1,u.sheetRows&&u.sheetRows<B)continue;de={},ve=!1,E.ht&&(ve=!0,de.hpt=parseFloat(E.ht),de.hpx=qi(de.hpt)),E.hidden=="1"&&(ve=!0,de.hidden=!0),E.outlineLevel!=null&&(ve=!0,de.level=+E.outlineLevel),ve&&(W[B-1]=de)}break;case"<":ne=p;break}if(ne>=p)break;if(E=ge(g.slice(ne,p),!0),B=E.r!=null?parseInt(E.r,10):B+1,R=-1,!(u.sheetRows&&u.sheetRows<B)){h.s.r>B-1&&(h.s.r=B-1),h.e.r<B-1&&(h.e.r=B-1),u&&u.cellStyles&&(de={},ve=!1,E.ht&&(ve=!0,de.hpt=parseFloat(E.ht),de.hpx=qi(de.hpt)),E.hidden=="1"&&(ve=!0,de.hidden=!0),E.outlineLevel!=null&&(ve=!0,de.level=+E.outlineLevel),ve&&(W[B-1]=de)),m=g.slice(p).split(e);for(var ue=0;ue!=m.length&&m[ue].trim().charAt(0)=="<";++ue);for(m=m.slice(ue),p=0;p!=m.length;++p)if(g=m[p].trim(),g.length!==0){if(w=g.match(r),C=p,x=0,D=0,g="<c "+(g.slice(0,1)=="<"?">":"")+g,w!=null&&w.length===2){for(C=0,M=w[1],x=0;x!=M.length&&!((D=M.charCodeAt(x)-64)<1||D>26);++x)C=26*C+D;--C,R=C}else++R;for(x=0;x!=g.length&&g.charCodeAt(x)!==62;++x);if(++x,E=ge(g.slice(0,x),!0),E.r||(E.r=xe({r:B-1,c:R})),M=g.slice(x),O={t:""},(w=M.match(n))!=null&&w[1]!==""&&(O.v=Oe(w[1])),u.cellFormula){if((w=M.match(s))!=null&&w[1]!==""){if(O.f=Oe(Be(w[1])).replace(/\r\n/g,`
`),u.xlfn||(O.f=Mc(O.f)),w[0].indexOf('t="array"')>-1)O.F=(M.match(i)||[])[1],O.F.indexOf(":")>-1&&le.push([Xe(O.F),O.F]);else if(w[0].indexOf('t="shared"')>-1){z=ge(w[0]);var ae=Oe(Be(w[1]));u.xlfn||(ae=Mc(ae)),re[parseInt(z.si,10)]=[z,ae,E.r]}}else(w=M.match(/<f[^>]*\/>/))&&(z=ge(w[0]),re[z.si]&&(O.f=xb(re[z.si][1],re[z.si][2],E.r)));var Q=Ft(E.r);for(x=0;x<le.length;++x)Q.r>=le[x][0].s.r&&Q.r<=le[x][0].e.r&&Q.c>=le[x][0].s.c&&Q.c<=le[x][0].e.c&&(O.F=le[x][1])}if(E.t==null&&O.v===void 0)if(O.f||O.F)O.v=0,O.t="n";else if(S)O.t="z";else continue;else O.t=E.t||"n";switch(h.s.c>R&&(h.s.c=R),h.e.c<R&&(h.e.c=R),O.t){case"n":if(O.v==""||O.v==null){if(!S)continue;O.t="z"}else O.v=parseFloat(O.v);break;case"s":if(typeof O.v>"u"){if(!S)continue;O.t="z"}else H=Pi[parseInt(O.v,10)],O.v=H.t,O.r=H.r,u.cellHTML&&(O.h=H.h);break;case"str":O.t="s",O.v=O.v!=null?Be(O.v):"",u.cellHTML&&(O.h=Mo(O.v));break;case"inlineStr":w=M.match(a),O.t="s",w!=null&&(H=Ko(w[1]))?(O.v=H.t,u.cellHTML&&(O.h=H.h)):O.v="";break;case"b":O.v=Ue(O.v);break;case"d":u.cellDates?O.v=ut(O.v,1):(O.v=Ot(ut(O.v,1)),O.t="n");break;case"e":(!u||u.cellText!==!1)&&(O.w=O.v),O.v=Au[O.v];break}if(L=Z=0,te=null,se&&E.s!==void 0&&(te=f.CellXf[E.s],te!=null&&(te.numFmtId!=null&&(L=te.numFmtId),u.cellStyles&&te.fillId!=null&&(Z=te.fillId))),ih(O,L,Z,u,d,f),u.cellDates&&se&&O.t=="n"&&ai(we[L])&&(O.t="d",O.v=hs(O.v)),E.cm&&u.xlmeta){var De=(u.xlmeta.Cell||[])[+E.cm-1];De&&De.type=="XLDAPR"&&(O.D=!0)}if(Ee){var F=Ft(E.r);c[F.r]||(c[F.r]=[]),c[F.r][F.c]=O}else c[E.r]=O}}}}W.length>0&&(c["!rows"]=W)}}();function ly(e,t){var r={},a=e.l+t;r.r=e.read_shift(4),e.l+=4;var i=e.read_shift(2);e.l+=1;var n=e.read_shift(1);return e.l=a,n&7&&(r.level=n&7),n&16&&(r.hidden=!0),n&32&&(r.hpt=i/20),r}var cy=Pa;function uy(){}function hy(e,t){var r={},a=e[e.l];return++e.l,r.above=!(a&64),r.left=!(a&128),e.l+=18,r.name=I1(e),r}function fy(e){var t=rr(e);return[t]}function dy(e){var t=Ia(e);return[t]}function py(e){var t=rr(e),r=e.read_shift(1);return[t,r,"b"]}function gy(e){var t=Ia(e),r=e.read_shift(1);return[t,r,"b"]}function my(e){var t=rr(e),r=e.read_shift(1);return[t,r,"e"]}function vy(e){var t=Ia(e),r=e.read_shift(1);return[t,r,"e"]}function xy(e){var t=rr(e),r=e.read_shift(4);return[t,r,"s"]}function by(e){var t=Ia(e),r=e.read_shift(4);return[t,r,"s"]}function wy(e){var t=rr(e),r=wt(e);return[t,r,"n"]}function sh(e){var t=Ia(e),r=wt(e);return[t,r,"n"]}function yy(e){var t=rr(e),r=jo(e);return[t,r,"n"]}function _y(e){var t=Ia(e),r=jo(e);return[t,r,"n"]}function ky(e){var t=rr(e),r=Ho(e);return[t,r,"is"]}function Ey(e){var t=rr(e),r=_t(e);return[t,r,"str"]}function Ty(e){var t=Ia(e),r=_t(e);return[t,r,"str"]}function Ay(e,t,r){var a=e.l+t,i=rr(e);i.r=r["!row"];var n=e.read_shift(1),s=[i,n,"b"];if(r.cellFormula){e.l+=2;var o=ps(e,a-e.l,r);s[3]=bt(o,null,i,r.supbooks,r)}else e.l=a;return s}function Cy(e,t,r){var a=e.l+t,i=rr(e);i.r=r["!row"];var n=e.read_shift(1),s=[i,n,"e"];if(r.cellFormula){e.l+=2;var o=ps(e,a-e.l,r);s[3]=bt(o,null,i,r.supbooks,r)}else e.l=a;return s}function Sy(e,t,r){var a=e.l+t,i=rr(e);i.r=r["!row"];var n=wt(e),s=[i,n,"n"];if(r.cellFormula){e.l+=2;var o=ps(e,a-e.l,r);s[3]=bt(o,null,i,r.supbooks,r)}else e.l=a;return s}function Fy(e,t,r){var a=e.l+t,i=rr(e);i.r=r["!row"];var n=_t(e),s=[i,n,"str"];if(r.cellFormula){e.l+=2;var o=ps(e,a-e.l,r);s[3]=bt(o,null,i,r.supbooks,r)}else e.l=a;return s}var Dy=Pa;function Oy(e,t){var r=e.l+t,a=Pa(e),i=Wo(e),n=_t(e),s=_t(e),o=_t(e);e.l=r;var l={rfx:a,relId:i,loc:n,display:o};return s&&(l.Tooltip=s),l}function Ry(){}function Iy(e,t,r){var a=e.l+t,i=ku(e),n=e.read_shift(1),s=[i];if(s[2]=n,r.cellFormula){var o=Mw(e,a-e.l,r);s[1]=o}else e.l=a;return s}function Py(e,t,r){var a=e.l+t,i=Pa(e),n=[i];if(r.cellFormula){var s=zw(e,a-e.l,r);n[1]=s,e.l=a}else e.l=a;return n}var Ly=["left","right","top","bottom","header","footer"];function Ny(e){var t={};return Ly.forEach(function(r){t[r]=wt(e)}),t}function $y(e){var t=e.read_shift(2);return e.l+=28,{RTL:t&32}}function My(){}function By(){}function zy(e,t,r,a,i,n,s){if(!e)return e;var o=t||{};a||(a={"!id":{}});var l=o.dense?[]:{},c,u={s:{r:2e6,c:2e6},e:{r:0,c:0}},h=!1,d=!1,f,p,g,m,w,C,x,D,M,O=[];o.biff=12,o["!row"]=0;var E=0,B=!1,R=[],H={},z=o.supbooks||i.supbooks||[[]];if(z.sharedf=H,z.arrayf=R,z.SheetNames=i.SheetNames||i.Sheets.map(function(Ee){return Ee.name}),!o.supbooks&&(o.supbooks=z,i.Names))for(var L=0;L<i.Names.length;++L)z[0][L+1]=i.Names[L];var Z=[],se=[],te=!1;Qn[16]={n:"BrtShortReal",f:sh};var le;if(Br(e,function(W,de,ve){if(!d)switch(ve){case 148:c=W;break;case 0:f=W,o.sheetRows&&o.sheetRows<=f.r&&(d=!0),D=pt(m=f.r),o["!row"]=f.r,(W.hidden||W.hpt||W.level!=null)&&(W.hpt&&(W.hpx=qi(W.hpt)),se[W.r]=W);break;case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 13:case 14:case 15:case 16:case 17:case 18:case 62:switch(p={t:W[2]},W[2]){case"n":p.v=W[1];break;case"s":x=Pi[W[1]],p.v=x.t,p.r=x.r;break;case"b":p.v=!!W[1];break;case"e":p.v=W[1],o.cellText!==!1&&(p.w=La[p.v]);break;case"str":p.t="s",p.v=W[1];break;case"is":p.t="s",p.v=W[1].t;break}if((g=s.CellXf[W[0].iStyleRef])&&ih(p,g.numFmtId,null,o,n,s),w=W[0].c==-1?w+1:W[0].c,o.dense?(l[m]||(l[m]=[]),l[m][w]=p):l[st(w)+D]=p,o.cellFormula){for(B=!1,E=0;E<R.length;++E){var S=R[E];f.r>=S[0].s.r&&f.r<=S[0].e.r&&w>=S[0].s.c&&w<=S[0].e.c&&(p.F=Fe(S[0]),B=!0)}!B&&W.length>3&&(p.f=W[3])}if(u.s.r>f.r&&(u.s.r=f.r),u.s.c>w&&(u.s.c=w),u.e.r<f.r&&(u.e.r=f.r),u.e.c<w&&(u.e.c=w),o.cellDates&&g&&p.t=="n"&&ai(we[g.numFmtId])){var G=pa(p.v);G&&(p.t="d",p.v=new Date(G.y,G.m-1,G.d,G.H,G.M,G.S,G.u))}le&&(le.type=="XLDAPR"&&(p.D=!0),le=void 0);break;case 1:case 12:if(!o.sheetStubs||h)break;p={t:"z",v:void 0},w=W[0].c==-1?w+1:W[0].c,o.dense?(l[m]||(l[m]=[]),l[m][w]=p):l[st(w)+D]=p,u.s.r>f.r&&(u.s.r=f.r),u.s.c>w&&(u.s.c=w),u.e.r<f.r&&(u.e.r=f.r),u.e.c<w&&(u.e.c=w),le&&(le.type=="XLDAPR"&&(p.D=!0),le=void 0);break;case 176:O.push(W);break;case 49:le=((o.xlmeta||{}).Cell||[])[W-1];break;case 494:var N=a["!id"][W.relId];for(N?(W.Target=N.Target,W.loc&&(W.Target+="#"+W.loc),W.Rel=N):W.relId==""&&(W.Target="#"+W.loc),m=W.rfx.s.r;m<=W.rfx.e.r;++m)for(w=W.rfx.s.c;w<=W.rfx.e.c;++w)o.dense?(l[m]||(l[m]=[]),l[m][w]||(l[m][w]={t:"z",v:void 0}),l[m][w].l=W):(C=xe({c:w,r:m}),l[C]||(l[C]={t:"z",v:void 0}),l[C].l=W);break;case 426:if(!o.cellFormula)break;R.push(W),M=o.dense?l[m][w]:l[st(w)+D],M.f=bt(W[1],u,{r:f.r,c:w},z,o),M.F=Fe(W[0]);break;case 427:if(!o.cellFormula)break;H[xe(W[0].s)]=W[1],M=o.dense?l[m][w]:l[st(w)+D],M.f=bt(W[1],u,{r:f.r,c:w},z,o);break;case 60:if(!o.cellStyles)break;for(;W.e>=W.s;)Z[W.e--]={width:W.w/256,hidden:!!(W.flags&1),level:W.level},te||(te=!0,Yo(W.w/256)),qa(Z[W.e+1]);break;case 161:l["!autofilter"]={ref:Fe(W)};break;case 476:l["!margins"]=W;break;case 147:i.Sheets[r]||(i.Sheets[r]={}),W.name&&(i.Sheets[r].CodeName=W.name),(W.above||W.left)&&(l["!outline"]={above:W.above,left:W.left});break;case 137:i.Views||(i.Views=[{}]),i.Views[0]||(i.Views[0]={}),W.RTL&&(i.Views[0].RTL=!0);break;case 485:break;case 64:case 1053:break;case 151:break;case 152:case 175:case 644:case 625:case 562:case 396:case 1112:case 1146:case 471:case 1050:case 649:case 1105:case 589:case 607:case 564:case 1055:case 168:case 174:case 1180:case 499:case 507:case 550:case 171:case 167:case 1177:case 169:case 1181:case 551:case 552:case 661:case 639:case 478:case 537:case 477:case 536:case 1103:case 680:case 1104:case 1024:case 663:case 535:case 678:case 504:case 1043:case 428:case 170:case 3072:case 50:case 2070:case 1045:break;case 35:h=!0;break;case 36:h=!1;break;case 37:h=!0;break;case 38:h=!1;break;default:if(!de.T){if(!h||o.WTF)throw new Error("Unexpected record 0x"+ve.toString(16))}}},o),delete o.supbooks,delete o["!row"],!l["!ref"]&&(u.s.r<2e6||c&&(c.e.r>0||c.e.c>0||c.s.r>0||c.s.c>0))&&(l["!ref"]=Fe(c||u)),o.sheetRows&&l["!ref"]){var re=Xe(l["!ref"]);o.sheetRows<=+re.e.r&&(re.e.r=o.sheetRows-1,re.e.r>u.e.r&&(re.e.r=u.e.r),re.e.r<re.s.r&&(re.s.r=re.e.r),re.e.c>u.e.c&&(re.e.c=u.e.c),re.e.c<re.s.c&&(re.s.c=re.e.c),l["!fullref"]=l["!ref"],l["!ref"]=Fe(re))}return O.length>0&&(l["!merges"]=O),Z.length>0&&(l["!cols"]=Z),se.length>0&&(l["!rows"]=se),l}function Uy(e){var t=[],r=e.match(/^<c:numCache>/),a;(e.match(/<c:pt idx="(\d*)">(.*?)<\/c:pt>/mg)||[]).forEach(function(n){var s=n.match(/<c:pt idx="(\d*?)"><c:v>(.*)<\/c:v><\/c:pt>/);s&&(t[+s[1]]=r?+s[2]:s[2])});var i=Oe((e.match(/<c:formatCode>([\s\S]*?)<\/c:formatCode>/)||["","General"])[1]);return(e.match(/<c:f>(.*?)<\/c:f>/mg)||[]).forEach(function(n){a=n.replace(/<.*?>/g,"")}),[t,i,a]}function Vy(e,t,r,a,i,n){var s=n||{"!type":"chart"};if(!e)return n;var o=0,l=0,c="A",u={s:{r:2e6,c:2e6},e:{r:0,c:0}};return(e.match(/<c:numCache>[\s\S]*?<\/c:numCache>/gm)||[]).forEach(function(h){var d=Uy(h);u.s.r=u.s.c=0,u.e.c=o,c=st(o),d[0].forEach(function(f,p){s[c+pt(p)]={t:"n",v:f,z:d[1]},l=p}),u.e.r<l&&(u.e.r=l),++o}),o>0&&(s["!ref"]=Fe(u)),s}function Hy(e,t,r,a,i){if(!e)return e;a||(a={"!id":{}});var n={"!type":"chart","!drawel":null,"!rel":""},s,o=e.match(nh);return o&&Zo(o[0],n,i,r),(s=e.match(/drawing r:id="(.*?)"/))&&(n["!rel"]=s[1]),a["!id"][n["!rel"]]&&(n["!drawel"]=a["!id"][n["!rel"]]),n}function Wy(e,t){e.l+=10;var r=_t(e);return{name:r}}function jy(e,t,r,a,i){if(!e)return e;a||(a={"!id":{}});var n={"!type":"chart","!drawel":null,"!rel":""},s=!1;return Br(e,function(l,c,u){switch(u){case 550:n["!rel"]=l;break;case 651:i.Sheets[r]||(i.Sheets[r]={}),l.name&&(i.Sheets[r].CodeName=l.name);break;case 562:case 652:case 669:case 679:case 551:case 552:case 476:case 3072:break;case 35:s=!0;break;case 36:s=!1;break;case 37:break;case 38:break;default:if(!(c.T>0)){if(!(c.T<0)){if(!s||t.WTF)throw new Error("Unexpected record 0x"+u.toString(16))}}}},t),a["!id"][n["!rel"]]&&(n["!drawel"]=a["!id"][n["!rel"]]),n}var oh=[["allowRefreshQuery",!1,"bool"],["autoCompressPictures",!0,"bool"],["backupFile",!1,"bool"],["checkCompatibility",!1,"bool"],["CodeName",""],["date1904",!1,"bool"],["defaultThemeVersion",0,"int"],["filterPrivacy",!1,"bool"],["hidePivotFieldList",!1,"bool"],["promptedSolutions",!1,"bool"],["publishItems",!1,"bool"],["refreshAllConnections",!1,"bool"],["saveExternalLinkValues",!0,"bool"],["showBorderUnselectedTables",!0,"bool"],["showInkAnnotation",!0,"bool"],["showObjects","all"],["showPivotChartFilter",!1,"bool"],["updateLinks","userSet"]],Gy=[["activeTab",0,"int"],["autoFilterDateGrouping",!0,"bool"],["firstSheet",0,"int"],["minimized",!1,"bool"],["showHorizontalScroll",!0,"bool"],["showSheetTabs",!0,"bool"],["showVerticalScroll",!0,"bool"],["tabRatio",600,"int"],["visibility","visible"]],Xy=[],Ky=[["calcCompleted","true"],["calcMode","auto"],["calcOnSave","true"],["concurrentCalc","true"],["fullCalcOnLoad","false"],["fullPrecision","true"],["iterate","false"],["iterateCount","100"],["iterateDelta","0.001"],["refMode","A1"]];function Hc(e,t){for(var r=0;r!=e.length;++r)for(var a=e[r],i=0;i!=t.length;++i){var n=t[i];if(a[n[0]]==null)a[n[0]]=n[1];else switch(n[2]){case"bool":typeof a[n[0]]=="string"&&(a[n[0]]=Ue(a[n[0]]));break;case"int":typeof a[n[0]]=="string"&&(a[n[0]]=parseInt(a[n[0]],10));break}}}function Wc(e,t){for(var r=0;r!=t.length;++r){var a=t[r];if(e[a[0]]==null)e[a[0]]=a[1];else switch(a[2]){case"bool":typeof e[a[0]]=="string"&&(e[a[0]]=Ue(e[a[0]]));break;case"int":typeof e[a[0]]=="string"&&(e[a[0]]=parseInt(e[a[0]],10));break}}}function lh(e){Wc(e.WBProps,oh),Wc(e.CalcPr,Ky),Hc(e.WBView,Gy),Hc(e.Sheets,Xy),ja.date1904=Ue(e.WBProps.date1904)}var Yy="][*?/\\".split("");function qy(e,t){if(e.length>31)throw new Error("Sheet names cannot exceed 31 chars");var r=!0;return Yy.forEach(function(a){if(e.indexOf(a)!=-1)throw new Error("Sheet name cannot contain : \\ / ? * [ ]")}),r}var Zy=/<\w+:workbook/;function Jy(e,t){if(!e)throw new Error("Could not find file");var r={AppVersion:{},WBProps:{},WBView:[],Sheets:[],CalcPr:{},Names:[],xmlns:""},a=!1,i="xmlns",n={},s=0;if(e.replace(Tt,function(l,c){var u=ge(l);switch(Tr(u[0])){case"<?xml":break;case"<workbook":l.match(Zy)&&(i="xmlns"+l.match(/<(\w+):/)[1]),r.xmlns=u[i];break;case"</workbook>":break;case"<fileVersion":delete u[0],r.AppVersion=u;break;case"<fileVersion/>":case"</fileVersion>":break;case"<fileSharing":break;case"<fileSharing/>":break;case"<workbookPr":case"<workbookPr/>":oh.forEach(function(h){if(u[h[0]]!=null)switch(h[2]){case"bool":r.WBProps[h[0]]=Ue(u[h[0]]);break;case"int":r.WBProps[h[0]]=parseInt(u[h[0]],10);break;default:r.WBProps[h[0]]=u[h[0]]}}),u.codeName&&(r.WBProps.CodeName=Be(u.codeName));break;case"</workbookPr>":break;case"<workbookProtection":break;case"<workbookProtection/>":break;case"<bookViews":case"<bookViews>":case"</bookViews>":break;case"<workbookView":case"<workbookView/>":delete u[0],r.WBView.push(u);break;case"</workbookView>":break;case"<sheets":case"<sheets>":case"</sheets>":break;case"<sheet":switch(u.state){case"hidden":u.Hidden=1;break;case"veryHidden":u.Hidden=2;break;default:u.Hidden=0}delete u.state,u.name=Oe(Be(u.name)),delete u[0],r.Sheets.push(u);break;case"</sheet>":break;case"<functionGroups":case"<functionGroups/>":break;case"<functionGroup":break;case"<externalReferences":case"</externalReferences>":case"<externalReferences>":break;case"<externalReference":break;case"<definedNames/>":break;case"<definedNames>":case"<definedNames":a=!0;break;case"</definedNames>":a=!1;break;case"<definedName":n={},n.Name=Be(u.name),u.comment&&(n.Comment=u.comment),u.localSheetId&&(n.Sheet=+u.localSheetId),Ue(u.hidden||"0")&&(n.Hidden=!0),s=c+l.length;break;case"</definedName>":n.Ref=Oe(Be(e.slice(s,c))),r.Names.push(n);break;case"<definedName/>":break;case"<calcPr":delete u[0],r.CalcPr=u;break;case"<calcPr/>":delete u[0],r.CalcPr=u;break;case"</calcPr>":break;case"<oleSize":break;case"<customWorkbookViews>":case"</customWorkbookViews>":case"<customWorkbookViews":break;case"<customWorkbookView":case"</customWorkbookView>":break;case"<pivotCaches>":case"</pivotCaches>":case"<pivotCaches":break;case"<pivotCache":break;case"<smartTagPr":case"<smartTagPr/>":break;case"<smartTagTypes":case"<smartTagTypes>":case"</smartTagTypes>":break;case"<smartTagType":break;case"<webPublishing":case"<webPublishing/>":break;case"<fileRecoveryPr":case"<fileRecoveryPr/>":break;case"<webPublishObjects>":case"<webPublishObjects":case"</webPublishObjects>":break;case"<webPublishObject":break;case"<extLst":case"<extLst>":case"</extLst>":case"<extLst/>":break;case"<ext":a=!0;break;case"</ext>":a=!1;break;case"<ArchID":break;case"<AlternateContent":case"<AlternateContent>":a=!0;break;case"</AlternateContent>":a=!1;break;case"<revisionPtr":break;default:if(!a&&t.WTF)throw new Error("unrecognized "+u[0]+" in workbook")}return l}),m1.indexOf(r.xmlns)===-1)throw new Error("Unknown Namespace: "+r.xmlns);return lh(r),r}function Qy(e,t){var r={};return r.Hidden=e.read_shift(4),r.iTabID=e.read_shift(4),r.strRelID=Ys(e),r.name=_t(e),r}function e2(e,t){var r={},a=e.read_shift(4);r.defaultThemeVersion=e.read_shift(4);var i=t>8?_t(e):"";return i.length>0&&(r.CodeName=i),r.autoCompressPictures=!!(a&65536),r.backupFile=!!(a&64),r.checkCompatibility=!!(a&4096),r.date1904=!!(a&1),r.filterPrivacy=!!(a&8),r.hidePivotFieldList=!!(a&1024),r.promptedSolutions=!!(a&16),r.publishItems=!!(a&2048),r.refreshAllConnections=!!(a&262144),r.saveExternalLinkValues=!!(a&128),r.showBorderUnselectedTables=!!(a&4),r.showInkAnnotation=!!(a&32),r.showObjects=["all","placeholders","none"][a>>13&3],r.showPivotChartFilter=!!(a&32768),r.updateLinks=["userSet","never","always"][a>>8&3],r}function t2(e,t){var r={};return e.read_shift(4),r.ArchID=e.read_shift(4),e.l+=t-8,r}function r2(e,t,r){var a=e.l+t;e.l+=4,e.l+=1;var i=e.read_shift(4),n=P1(e),s=Bw(e,0,r),o=Wo(e);e.l=a;var l={Name:n,Ptg:s};return i<268435455&&(l.Sheet=i),o&&(l.Comment=o),l}function a2(e,t){var r={AppVersion:{},WBProps:{},WBView:[],Sheets:[],CalcPr:{},xmlns:""},a=[],i=!1;t||(t={}),t.biff=12;var n=[],s=[[]];return s.SheetNames=[],s.XTI=[],Qn[16]={n:"BrtFRTArchID$",f:t2},Br(e,function(l,c,u){switch(u){case 156:s.SheetNames.push(l.name),r.Sheets.push(l);break;case 153:r.WBProps=l;break;case 39:l.Sheet!=null&&(t.SID=l.Sheet),l.Ref=bt(l.Ptg,null,null,s,t),delete t.SID,delete l.Ptg,n.push(l);break;case 1036:break;case 357:case 358:case 355:case 667:s[0].length?s.push([u,l]):s[0]=[u,l],s[s.length-1].XTI=[];break;case 362:s.length===0&&(s[0]=[],s[0].XTI=[]),s[s.length-1].XTI=s[s.length-1].XTI.concat(l),s.XTI=s.XTI.concat(l);break;case 361:break;case 2071:case 158:case 143:case 664:case 353:break;case 3072:case 3073:case 534:case 677:case 157:case 610:case 2050:case 155:case 548:case 676:case 128:case 665:case 2128:case 2125:case 549:case 2053:case 596:case 2076:case 2075:case 2082:case 397:case 154:case 1117:case 553:case 2091:break;case 35:a.push(u),i=!0;break;case 36:a.pop(),i=!1;break;case 37:a.push(u),i=!0;break;case 38:a.pop(),i=!1;break;case 16:break;default:if(!c.T){if(!i||t.WTF&&a[a.length-1]!=37&&a[a.length-1]!=35)throw new Error("Unexpected record 0x"+u.toString(16))}}},t),lh(r),r.Names=n,r.supbooks=s,r}function i2(e,t,r){return t.slice(-4)===".bin"?a2(e,r):Jy(e,r)}function n2(e,t,r,a,i,n,s,o){return t.slice(-4)===".bin"?zy(e,a,r,i,n,s,o):Qw(e,a,r,i,n,s,o)}function s2(e,t,r,a,i,n,s,o){return t.slice(-4)===".bin"?jy(e,a,r,i,n):Hy(e,a,r,i,n)}function o2(e,t,r,a,i,n,s,o){return t.slice(-4)===".bin"?gb():mb()}function l2(e,t,r,a,i,n,s,o){return t.slice(-4)===".bin"?db():pb()}function c2(e,t,r,a){return t.slice(-4)===".bin"?Dx(e,r,a):Ex(e,r,a)}function u2(e,t,r){return Ku(e,r)}function h2(e,t,r){return t.slice(-4)===".bin"?Gv(e,r):Wv(e,r)}function f2(e,t,r){return t.slice(-4)===".bin"?ub(e,r):nb(e,r)}function d2(e,t,r){return t.slice(-4)===".bin"?rb(e):eb(e)}function p2(e,t,r,a){return r.slice(-4)===".bin"?ab(e,t,r,a):void 0}function g2(e,t,r){return t.slice(-4)===".bin"?Jx(e,t,r):Qx(e,t,r)}var ch=/([\w:]+)=((?:")([^"]*)(?:")|(?:')([^']*)(?:'))/g,uh=/([\w:]+)=((?:")(?:[^"]*)(?:")|(?:')(?:[^']*)(?:'))/;function ar(e,t){var r=e.split(/\s+/),a=[];if(a[0]=r[0],r.length===1)return a;var i=e.match(ch),n,s,o,l;if(i)for(l=0;l!=i.length;++l)n=i[l].match(uh),(s=n[1].indexOf(":"))===-1?a[n[1]]=n[2].slice(1,n[2].length-1):(n[1].slice(0,6)==="xmlns:"?o="xmlns"+n[1].slice(6):o=n[1].slice(s+1),a[o]=n[2].slice(1,n[2].length-1));return a}function m2(e){var t=e.split(/\s+/),r={};if(t.length===1)return r;var a=e.match(ch),i,n,s,o;if(a)for(o=0;o!=a.length;++o)i=a[o].match(uh),(n=i[1].indexOf(":"))===-1?r[i[1]]=i[2].slice(1,i[2].length-1):(i[1].slice(0,6)==="xmlns:"?s="xmlns"+i[1].slice(6):s=i[1].slice(n+1),r[s]=i[2].slice(1,i[2].length-1));return r}var Ni;function v2(e,t){var r=Ni[e]||Oe(e);return r==="General"?_a(t):Qt(r,t)}function x2(e,t,r,a){var i=a;switch((r[0].match(/dt:dt="([\w.]+)"/)||["",""])[1]){case"boolean":i=Ue(a);break;case"i2":case"int":i=parseInt(a,10);break;case"r4":case"float":i=parseFloat(a);break;case"date":case"dateTime.tz":i=ut(a);break;case"i8":case"string":case"fixed":case"uuid":case"bin.base64":break;default:throw new Error("bad custprop:"+r[0])}e[Oe(t)]=i}function b2(e,t,r){if(e.t!=="z"){if(!r||r.cellText!==!1)try{e.t==="e"?e.w=e.w||La[e.v]:t==="General"?e.t==="n"?(e.v|0)===e.v?e.w=e.v.toString(10):e.w=ji(e.v):e.w=_a(e.v):e.w=v2(t||"General",e.v)}catch(n){if(r.WTF)throw n}try{var a=Ni[t]||t||"General";if(r.cellNF&&(e.z=a),r.cellDates&&e.t=="n"&&ai(a)){var i=pa(e.v);i&&(e.t="d",e.v=new Date(i.y,i.m-1,i.d,i.H,i.M,i.S,i.u))}}catch(n){if(r.WTF)throw n}}}function w2(e,t,r){if(r.cellStyles&&t.Interior){var a=t.Interior;a.Pattern&&(a.patternType=xx[a.Pattern]||a.Pattern)}e[t.ID]=t}function y2(e,t,r,a,i,n,s,o,l,c){var u="General",h=a.StyleID,d={};c=c||{};var f=[],p=0;for(h===void 0&&o&&(h=o.StyleID),h===void 0&&s&&(h=s.StyleID);n[h]!==void 0&&(n[h].nf&&(u=n[h].nf),n[h].Interior&&f.push(n[h].Interior),!!n[h].Parent);)h=n[h].Parent;switch(r.Type){case"Boolean":a.t="b",a.v=Ue(e);break;case"String":a.t="s",a.r=fc(Oe(e)),a.v=e.indexOf("<")>-1?Oe(t||e).replace(/<.*?>/g,""):a.r;break;case"DateTime":e.slice(-1)!="Z"&&(e+="Z"),a.v=(ut(e)-new Date(Date.UTC(1899,11,30)))/(24*60*60*1e3),a.v!==a.v?a.v=Oe(e):a.v<60&&(a.v=a.v-1),(!u||u=="General")&&(u="yyyy-mm-dd");case"Number":a.v===void 0&&(a.v=+e),a.t||(a.t="n");break;case"Error":a.t="e",a.v=Au[e],c.cellText!==!1&&(a.w=e);break;default:e==""&&t==""?a.t="z":(a.t="s",a.v=fc(t||e));break}if(b2(a,u,c),c.cellFormula!==!1)if(a.Formula){var g=Oe(a.Formula);g.charCodeAt(0)==61&&(g=g.slice(1)),a.f=Wa(g,i),delete a.Formula,a.ArrayRange=="RC"?a.F=Wa("RC:RC",i):a.ArrayRange&&(a.F=Wa(a.ArrayRange,i),l.push([Xe(a.F),a.F]))}else for(p=0;p<l.length;++p)i.r>=l[p][0].s.r&&i.r<=l[p][0].e.r&&i.c>=l[p][0].s.c&&i.c<=l[p][0].e.c&&(a.F=l[p][1]);c.cellStyles&&(f.forEach(function(m){!d.patternType&&m.patternType&&(d.patternType=m.patternType)}),a.s=d),a.StyleID!==void 0&&(a.ixfe=a.StyleID)}function _2(e){e.t=e.v||"",e.t=e.t.replace(/\r\n/g,`
`).replace(/\r/g,`
`),e.v=e.w=e.ixfe=void 0}function Is(e,t){var r=t||{};J0();var a=bi(Bo(e));(r.type=="binary"||r.type=="array"||r.type=="base64")&&(a=Be(a));var i=a.slice(0,1024).toLowerCase(),n=!1;if(i=i.replace(/".*?"/g,""),(i.indexOf(">")&1023)>Math.min(i.indexOf(",")&1023,i.indexOf(";")&1023)){var s=dt(r);return s.type="string",Ki.to_workbook(a,s)}if(i.indexOf("<?xml")==-1&&["html","table","head","meta","script","style","div"].forEach(function(Ye){i.indexOf("<"+Ye)>=0&&(n=!0)}),n)return O2(a,r);Ni={"General Number":"General","General Date":we[22],"Long Date":"dddd, mmmm dd, yyyy","Medium Date":we[15],"Short Date":we[14],"Long Time":we[19],"Medium Time":we[18],"Short Time":we[20],Currency:'"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',Fixed:we[2],Standard:we[4],Percent:we[10],Scientific:we[11],"Yes/No":'"Yes";"Yes";"No";@',"True/False":'"True";"True";"False";@',"On/Off":'"Yes";"Yes";"No";@'};var o,l=[],c,u={},h=[],d=r.dense?[]:{},f="",p={},g={},m=ar('<Data ss:Type="String">'),w=0,C=0,x=0,D={s:{r:2e6,c:2e6},e:{r:0,c:0}},M={},O={},E="",B=0,R=[],H={},z={},L=0,Z=[],se=[],te={},le=[],re,Ee=!1,W=[],de=[],ve={},S=0,G=0,N={Sheets:[],WBProps:{date1904:!1}},P={};Xi.lastIndex=0,a=a.replace(/<!--([\s\S]*?)-->/mg,"");for(var q="";o=Xi.exec(a);)switch(o[3]=(q=o[3]).toLowerCase()){case"data":if(q=="data"){if(o[1]==="/"){if((c=l.pop())[0]!==o[3])throw new Error("Bad state: "+c.join("|"))}else o[0].charAt(o[0].length-2)!=="/"&&l.push([o[3],!0]);break}if(l[l.length-1][1])break;o[1]==="/"?y2(a.slice(w,o.index),E,m,l[l.length-1][0]=="comment"?te:p,{c:C,r:x},M,le[C],g,W,r):(E="",m=ar(o[0]),w=o.index+o[0].length);break;case"cell":if(o[1]==="/")if(se.length>0&&(p.c=se),(!r.sheetRows||r.sheetRows>x)&&p.v!==void 0&&(r.dense?(d[x]||(d[x]=[]),d[x][C]=p):d[st(C)+pt(x)]=p),p.HRef&&(p.l={Target:Oe(p.HRef)},p.HRefScreenTip&&(p.l.Tooltip=p.HRefScreenTip),delete p.HRef,delete p.HRefScreenTip),(p.MergeAcross||p.MergeDown)&&(S=C+(parseInt(p.MergeAcross,10)|0),G=x+(parseInt(p.MergeDown,10)|0),R.push({s:{c:C,r:x},e:{c:S,r:G}})),!r.sheetStubs)p.MergeAcross?C=S+1:++C;else if(p.MergeAcross||p.MergeDown){for(var ne=C;ne<=S;++ne)for(var ue=x;ue<=G;++ue)(ne>C||ue>x)&&(r.dense?(d[ue]||(d[ue]=[]),d[ue][ne]={t:"z"}):d[st(ne)+pt(ue)]={t:"z"});C=S+1}else++C;else p=m2(o[0]),p.Index&&(C=+p.Index-1),C<D.s.c&&(D.s.c=C),C>D.e.c&&(D.e.c=C),o[0].slice(-2)==="/>"&&++C,se=[];break;case"row":o[1]==="/"||o[0].slice(-2)==="/>"?(x<D.s.r&&(D.s.r=x),x>D.e.r&&(D.e.r=x),o[0].slice(-2)==="/>"&&(g=ar(o[0]),g.Index&&(x=+g.Index-1)),C=0,++x):(g=ar(o[0]),g.Index&&(x=+g.Index-1),ve={},(g.AutoFitHeight=="0"||g.Height)&&(ve.hpx=parseInt(g.Height,10),ve.hpt=Xu(ve.hpx),de[x]=ve),g.Hidden=="1"&&(ve.hidden=!0,de[x]=ve));break;case"worksheet":if(o[1]==="/"){if((c=l.pop())[0]!==o[3])throw new Error("Bad state: "+c.join("|"));h.push(f),D.s.r<=D.e.r&&D.s.c<=D.e.c&&(d["!ref"]=Fe(D),r.sheetRows&&r.sheetRows<=D.e.r&&(d["!fullref"]=d["!ref"],D.e.r=r.sheetRows-1,d["!ref"]=Fe(D))),R.length&&(d["!merges"]=R),le.length>0&&(d["!cols"]=le),de.length>0&&(d["!rows"]=de),u[f]=d}else D={s:{r:2e6,c:2e6},e:{r:0,c:0}},x=C=0,l.push([o[3],!1]),c=ar(o[0]),f=Oe(c.Name),d=r.dense?[]:{},R=[],W=[],de=[],P={name:f,Hidden:0},N.Sheets.push(P);break;case"table":if(o[1]==="/"){if((c=l.pop())[0]!==o[3])throw new Error("Bad state: "+c.join("|"))}else{if(o[0].slice(-2)=="/>")break;l.push([o[3],!1]),le=[],Ee=!1}break;case"style":o[1]==="/"?w2(M,O,r):O=ar(o[0]);break;case"numberformat":O.nf=Oe(ar(o[0]).Format||"General"),Ni[O.nf]&&(O.nf=Ni[O.nf]);for(var ae=0;ae!=392&&we[ae]!=O.nf;++ae);if(ae==392){for(ae=57;ae!=392;++ae)if(we[ae]==null){ma(O.nf,ae);break}}break;case"column":if(l[l.length-1][0]!=="table")break;if(re=ar(o[0]),re.Hidden&&(re.hidden=!0,delete re.Hidden),re.Width&&(re.wpx=parseInt(re.Width,10)),!Ee&&re.wpx>10){Ee=!0,St=ju;for(var Q=0;Q<le.length;++Q)le[Q]&&qa(le[Q])}Ee&&qa(re),le[re.Index-1||le.length]=re;for(var De=0;De<+re.Span;++De)le[le.length]=dt(re);break;case"namedrange":if(o[1]==="/")break;N.Names||(N.Names=[]);var F=ge(o[0]),Ke={Name:F.Name,Ref:Wa(F.RefersTo.slice(1),{r:0,c:0})};N.Sheets.length>0&&(Ke.Sheet=N.Sheets.length-1),N.Names.push(Ke);break;case"namedcell":break;case"b":break;case"i":break;case"u":break;case"s":break;case"em":break;case"h2":break;case"h3":break;case"sub":break;case"sup":break;case"span":break;case"alignment":break;case"borders":break;case"border":break;case"font":if(o[0].slice(-2)==="/>")break;o[1]==="/"?E+=a.slice(B,o.index):B=o.index+o[0].length;break;case"interior":if(!r.cellStyles)break;O.Interior=ar(o[0]);break;case"protection":break;case"author":case"title":case"description":case"created":case"keywords":case"subject":case"category":case"company":case"lastauthor":case"lastsaved":case"lastprinted":case"version":case"revision":case"totaltime":case"hyperlinkbase":case"manager":case"contentstatus":case"identifier":case"language":case"appname":if(o[0].slice(-2)==="/>")break;o[1]==="/"?nm(H,q,a.slice(L,o.index)):L=o.index+o[0].length;break;case"paragraphs":break;case"styles":case"workbook":if(o[1]==="/"){if((c=l.pop())[0]!==o[3])throw new Error("Bad state: "+c.join("|"))}else l.push([o[3],!1]);break;case"comment":if(o[1]==="/"){if((c=l.pop())[0]!==o[3])throw new Error("Bad state: "+c.join("|"));_2(te),se.push(te)}else l.push([o[3],!1]),c=ar(o[0]),te={a:c.Author};break;case"autofilter":if(o[1]==="/"){if((c=l.pop())[0]!==o[3])throw new Error("Bad state: "+c.join("|"))}else if(o[0].charAt(o[0].length-2)!=="/"){var Ie=ar(o[0]);d["!autofilter"]={ref:Wa(Ie.Range).replace(/\$/g,"")},l.push([o[3],!0])}break;case"name":break;case"datavalidation":if(o[1]==="/"){if((c=l.pop())[0]!==o[3])throw new Error("Bad state: "+c.join("|"))}else o[0].charAt(o[0].length-2)!=="/"&&l.push([o[3],!0]);break;case"pixelsperinch":break;case"componentoptions":case"documentproperties":case"customdocumentproperties":case"officedocumentsettings":case"pivottable":case"pivotcache":case"names":case"mapinfo":case"pagebreaks":case"querytable":case"sorting":case"schema":case"conditionalformatting":case"smarttagtype":case"smarttags":case"excelworkbook":case"workbookoptions":case"worksheetoptions":if(o[1]==="/"){if((c=l.pop())[0]!==o[3])throw new Error("Bad state: "+c.join("|"))}else o[0].charAt(o[0].length-2)!=="/"&&l.push([o[3],!0]);break;case"null":break;default:if(l.length==0&&o[3]=="document"||l.length==0&&o[3]=="uof")return qc(a,r);var Me=!0;switch(l[l.length-1][0]){case"officedocumentsettings":switch(o[3]){case"allowpng":break;case"removepersonalinformation":break;case"downloadcomponents":break;case"locationofcomponents":break;case"colors":break;case"color":break;case"index":break;case"rgb":break;case"targetscreensize":break;case"readonlyrecommended":break;default:Me=!1}break;case"componentoptions":switch(o[3]){case"toolbar":break;case"hideofficelogo":break;case"spreadsheetautofit":break;case"label":break;case"caption":break;case"maxheight":break;case"maxwidth":break;case"nextsheetnumber":break;default:Me=!1}break;case"excelworkbook":switch(o[3]){case"date1904":N.WBProps.date1904=!0;break;case"windowheight":break;case"windowwidth":break;case"windowtopx":break;case"windowtopy":break;case"tabratio":break;case"protectstructure":break;case"protectwindow":break;case"protectwindows":break;case"activesheet":break;case"displayinknotes":break;case"firstvisiblesheet":break;case"supbook":break;case"sheetname":break;case"sheetindex":break;case"sheetindexfirst":break;case"sheetindexlast":break;case"dll":break;case"acceptlabelsinformulas":break;case"donotsavelinkvalues":break;case"iteration":break;case"maxiterations":break;case"maxchange":break;case"path":break;case"xct":break;case"count":break;case"selectedsheets":break;case"calculation":break;case"uncalced":break;case"startupprompt":break;case"crn":break;case"externname":break;case"formula":break;case"colfirst":break;case"collast":break;case"wantadvise":break;case"boolean":break;case"error":break;case"text":break;case"ole":break;case"noautorecover":break;case"publishobjects":break;case"donotcalculatebeforesave":break;case"number":break;case"refmoder1c1":break;case"embedsavesmarttags":break;default:Me=!1}break;case"workbookoptions":switch(o[3]){case"owcversion":break;case"height":break;case"width":break;default:Me=!1}break;case"worksheetoptions":switch(o[3]){case"visible":if(o[0].slice(-2)!=="/>")if(o[1]==="/")switch(a.slice(L,o.index)){case"SheetHidden":P.Hidden=1;break;case"SheetVeryHidden":P.Hidden=2;break}else L=o.index+o[0].length;break;case"header":d["!margins"]||Li(d["!margins"]={},"xlml"),isNaN(+ge(o[0]).Margin)||(d["!margins"].header=+ge(o[0]).Margin);break;case"footer":d["!margins"]||Li(d["!margins"]={},"xlml"),isNaN(+ge(o[0]).Margin)||(d["!margins"].footer=+ge(o[0]).Margin);break;case"pagemargins":var Te=ge(o[0]);d["!margins"]||Li(d["!margins"]={},"xlml"),isNaN(+Te.Top)||(d["!margins"].top=+Te.Top),isNaN(+Te.Left)||(d["!margins"].left=+Te.Left),isNaN(+Te.Right)||(d["!margins"].right=+Te.Right),isNaN(+Te.Bottom)||(d["!margins"].bottom=+Te.Bottom);break;case"displayrighttoleft":N.Views||(N.Views=[]),N.Views[0]||(N.Views[0]={}),N.Views[0].RTL=!0;break;case"freezepanes":break;case"frozennosplit":break;case"splithorizontal":case"splitvertical":break;case"donotdisplaygridlines":break;case"activerow":break;case"activecol":break;case"toprowbottompane":break;case"leftcolumnrightpane":break;case"unsynced":break;case"print":break;case"printerrors":break;case"panes":break;case"scale":break;case"pane":break;case"number":break;case"layout":break;case"pagesetup":break;case"selected":break;case"protectobjects":break;case"enableselection":break;case"protectscenarios":break;case"validprinterinfo":break;case"horizontalresolution":break;case"verticalresolution":break;case"numberofcopies":break;case"activepane":break;case"toprowvisible":break;case"leftcolumnvisible":break;case"fittopage":break;case"rangeselection":break;case"papersizeindex":break;case"pagelayoutzoom":break;case"pagebreakzoom":break;case"filteron":break;case"fitwidth":break;case"fitheight":break;case"commentslayout":break;case"zoom":break;case"lefttoright":break;case"gridlines":break;case"allowsort":break;case"allowfilter":break;case"allowinsertrows":break;case"allowdeleterows":break;case"allowinsertcols":break;case"allowdeletecols":break;case"allowinserthyperlinks":break;case"allowformatcells":break;case"allowsizecols":break;case"allowsizerows":break;case"nosummaryrowsbelowdetail":d["!outline"]||(d["!outline"]={}),d["!outline"].above=!0;break;case"tabcolorindex":break;case"donotdisplayheadings":break;case"showpagelayoutzoom":break;case"nosummarycolumnsrightdetail":d["!outline"]||(d["!outline"]={}),d["!outline"].left=!0;break;case"blackandwhite":break;case"donotdisplayzeros":break;case"displaypagebreak":break;case"rowcolheadings":break;case"donotdisplayoutline":break;case"noorientation":break;case"allowusepivottables":break;case"zeroheight":break;case"viewablerange":break;case"selection":break;case"protectcontents":break;default:Me=!1}break;case"pivottable":case"pivotcache":switch(o[3]){case"immediateitemsondrop":break;case"showpagemultipleitemlabel":break;case"compactrowindent":break;case"location":break;case"pivotfield":break;case"orientation":break;case"layoutform":break;case"layoutsubtotallocation":break;case"layoutcompactrow":break;case"position":break;case"pivotitem":break;case"datatype":break;case"datafield":break;case"sourcename":break;case"parentfield":break;case"ptlineitems":break;case"ptlineitem":break;case"countofsameitems":break;case"item":break;case"itemtype":break;case"ptsource":break;case"cacheindex":break;case"consolidationreference":break;case"filename":break;case"reference":break;case"nocolumngrand":break;case"norowgrand":break;case"blanklineafteritems":break;case"hidden":break;case"subtotal":break;case"basefield":break;case"mapchilditems":break;case"function":break;case"refreshonfileopen":break;case"printsettitles":break;case"mergelabels":break;case"defaultversion":break;case"refreshname":break;case"refreshdate":break;case"refreshdatecopy":break;case"versionlastrefresh":break;case"versionlastupdate":break;case"versionupdateablemin":break;case"versionrefreshablemin":break;case"calculation":break;default:Me=!1}break;case"pagebreaks":switch(o[3]){case"colbreaks":break;case"colbreak":break;case"rowbreaks":break;case"rowbreak":break;case"colstart":break;case"colend":break;case"rowend":break;default:Me=!1}break;case"autofilter":switch(o[3]){case"autofiltercolumn":break;case"autofiltercondition":break;case"autofilterand":break;case"autofilteror":break;default:Me=!1}break;case"querytable":switch(o[3]){case"id":break;case"autoformatfont":break;case"autoformatpattern":break;case"querysource":break;case"querytype":break;case"enableredirections":break;case"refreshedinxl9":break;case"urlstring":break;case"htmltables":break;case"connection":break;case"commandtext":break;case"refreshinfo":break;case"notitles":break;case"nextid":break;case"columninfo":break;case"overwritecells":break;case"donotpromptforfile":break;case"textwizardsettings":break;case"source":break;case"number":break;case"decimal":break;case"thousandseparator":break;case"trailingminusnumbers":break;case"formatsettings":break;case"fieldtype":break;case"delimiters":break;case"tab":break;case"comma":break;case"autoformatname":break;case"versionlastedit":break;case"versionlastrefresh":break;default:Me=!1}break;case"datavalidation":switch(o[3]){case"range":break;case"type":break;case"min":break;case"max":break;case"sort":break;case"descending":break;case"order":break;case"casesensitive":break;case"value":break;case"errorstyle":break;case"errormessage":break;case"errortitle":break;case"inputmessage":break;case"inputtitle":break;case"combohide":break;case"inputhide":break;case"condition":break;case"qualifier":break;case"useblank":break;case"value1":break;case"value2":break;case"format":break;case"cellrangelist":break;default:Me=!1}break;case"sorting":case"conditionalformatting":switch(o[3]){case"range":break;case"type":break;case"min":break;case"max":break;case"sort":break;case"descending":break;case"order":break;case"casesensitive":break;case"value":break;case"errorstyle":break;case"errormessage":break;case"errortitle":break;case"cellrangelist":break;case"inputmessage":break;case"inputtitle":break;case"combohide":break;case"inputhide":break;case"condition":break;case"qualifier":break;case"useblank":break;case"value1":break;case"value2":break;case"format":break;default:Me=!1}break;case"mapinfo":case"schema":case"data":switch(o[3]){case"map":break;case"entry":break;case"range":break;case"xpath":break;case"field":break;case"xsdtype":break;case"filteron":break;case"aggregate":break;case"elementtype":break;case"attributetype":break;case"schema":case"element":case"complextype":case"datatype":case"all":case"attribute":case"extends":break;case"row":break;default:Me=!1}break;case"smarttags":break;default:Me=!1;break}if(Me||o[3].match(/!\[CDATA/))break;if(!l[l.length-1][1])throw"Unrecognized tag: "+o[3]+"|"+l.join("|");if(l[l.length-1][0]==="customdocumentproperties"){if(o[0].slice(-2)==="/>")break;o[1]==="/"?x2(z,q,Z,a.slice(L,o.index)):(Z=o,L=o.index+o[0].length);break}if(r.WTF)throw"Unrecognized tag: "+o[3]+"|"+l.join("|")}var oe={};return!r.bookSheets&&!r.bookProps&&(oe.Sheets=u),oe.SheetNames=h,oe.Workbook=N,oe.SSF=dt(we),oe.Props=H,oe.Custprops=z,oe}function Qs(e,t){switch(el(t=t||{}),t.type||"base64"){case"base64":return Is(Ht(e),t);case"binary":case"buffer":case"file":return Is(e,t);case"array":return Is(Ra(e),t)}}function k2(e){var t={},r=e.content;if(r.l=28,t.AnsiUserType=r.read_shift(0,"lpstr-ansi"),t.AnsiClipboardFormat=$1(r),r.length-r.l<=4)return t;var a=r.read_shift(4);if(a==0||a>40||(r.l-=4,t.Reserved1=r.read_shift(0,"lpstr-ansi"),r.length-r.l<=4)||(a=r.read_shift(4),a!==1907505652)||(t.UnicodeClipboardFormat=M1(r),a=r.read_shift(4),a==0||a>40))return t;r.l-=4,t.Reserved2=r.read_shift(0,"lpwstr")}var E2=[60,1084,2066,2165,2175];function T2(e,t,r,a,i){var n=a,s=[],o=r.slice(r.l,r.l+n);if(i&&i.enc&&i.enc.insitu&&o.length>0)switch(e){case 9:case 521:case 1033:case 2057:case 47:case 405:case 225:case 406:case 312:case 404:case 10:break;case 133:break;default:i.enc.insitu(o)}s.push(o),r.l+=n;for(var l=Or(r,r.l),c=eo[l],u=0;c!=null&&E2.indexOf(l)>-1;)n=Or(r,r.l+2),u=r.l+4,l==2066?u+=4:(l==2165||l==2175)&&(u+=12),o=r.slice(u,r.l+4+n),s.push(o),r.l+=4+n,c=eo[l=Or(r,r.l)];var h=Gr(s);ft(h,0);var d=0;h.lens=[];for(var f=0;f<s.length;++f)h.lens.push(d),d+=s[f].length;if(h.length<a)throw"XLS Record 0x"+e.toString(16)+" Truncated: "+h.length+" < "+a;return t.f(h,h.length,i)}function mr(e,t,r){if(e.t!=="z"&&e.XF){var a=0;try{a=e.z||e.XF.numFmtId||0,t.cellNF&&(e.z=we[a])}catch(n){if(t.WTF)throw n}if(!t||t.cellText!==!1)try{e.t==="e"?e.w=e.w||La[e.v]:a===0||a=="General"?e.t==="n"?(e.v|0)===e.v?e.w=e.v.toString(10):e.w=ji(e.v):e.w=_a(e.v):e.w=Qt(a,e.v,{date1904:!!r,dateNF:t&&t.dateNF})}catch(n){if(t.WTF)throw n}if(t.cellDates&&a&&e.t=="n"&&ai(we[a]||String(a))){var i=pa(e.v);i&&(e.t="d",e.v=new Date(i.y,i.m-1,i.d,i.H,i.M,i.S,i.u))}}}function Sn(e,t,r){return{v:e,ixfe:t,t:r}}function A2(e,t){var r={opts:{}},a={},i=t.dense?[]:{},n={},s={},o=null,l=[],c="",u={},h,d="",f,p,g,m,w={},C=[],x,D,M=[],O=[],E={Sheets:[],WBProps:{date1904:!1},Views:[{}]},B={},R=function(ke){return ke<8?va[ke]:ke<64&&O[ke-8]||va[ke]},H=function(ke,qe,Xt){var it=qe.XF.data;if(!(!it||!it.patternType||!Xt||!Xt.cellStyles)){qe.s={},qe.s.patternType=it.patternType;var na;(na=Yi(R(it.icvFore)))&&(qe.s.fgColor={rgb:na}),(na=Yi(R(it.icvBack)))&&(qe.s.bgColor={rgb:na})}},z=function(ke,qe,Xt){if(!(ve>1)&&!(Xt.sheetRows&&ke.r>=Xt.sheetRows)){if(Xt.cellStyles&&qe.XF&&qe.XF.data&&H(ke,qe,Xt),delete qe.ixfe,delete qe.XF,h=ke,d=xe(ke),(!s||!s.s||!s.e)&&(s={s:{r:0,c:0},e:{r:0,c:0}}),ke.r<s.s.r&&(s.s.r=ke.r),ke.c<s.s.c&&(s.s.c=ke.c),ke.r+1>s.e.r&&(s.e.r=ke.r+1),ke.c+1>s.e.c&&(s.e.c=ke.c+1),Xt.cellFormula&&qe.f){for(var it=0;it<C.length;++it)if(!(C[it][0].s.c>ke.c||C[it][0].s.r>ke.r)&&!(C[it][0].e.c<ke.c||C[it][0].e.r<ke.r)){qe.F=Fe(C[it][0]),(C[it][0].s.c!=ke.c||C[it][0].s.r!=ke.r)&&delete qe.f,qe.f&&(qe.f=""+bt(C[it][1],s,ke,W,L));break}}Xt.dense?(i[ke.r]||(i[ke.r]=[]),i[ke.r][ke.c]=qe):i[d]=qe}},L={enc:!1,sbcch:0,snames:[],sharedf:w,arrayf:C,rrtabid:[],lastuser:"",biff:8,codepage:0,winlocked:0,cellStyles:!!t&&!!t.cellStyles,WTF:!!t&&!!t.wtf};t.password&&(L.password=t.password);var Z,se=[],te=[],le=[],re=[],Ee=!1,W=[];W.SheetNames=L.snames,W.sharedf=L.sharedf,W.arrayf=L.arrayf,W.names=[],W.XTI=[];var de=0,ve=0,S=0,G=[],N=[],P;L.codepage=1200,or(1200);for(var q=!1;e.l<e.length-1;){var ne=e.l,ue=e.read_shift(2);if(ue===0&&de===10)break;var ae=e.l===e.length?0:e.read_shift(2),Q=eo[ue];if(Q&&Q.f){if(t.bookSheets&&de===133&&ue!==133)break;if(de=ue,Q.r===2||Q.r==12){var De=e.read_shift(2);if(ae-=2,!L.enc&&De!==ue&&((De&255)<<8|De>>8)!==ue)throw new Error("rt mismatch: "+De+"!="+ue);Q.r==12&&(e.l+=10,ae-=10)}var F={};if(ue===10?F=Q.f(e,ae,L):F=T2(ue,Q,e,ae,L),ve==0&&[9,521,1033,2057].indexOf(de)===-1)continue;switch(ue){case 34:r.opts.Date1904=E.WBProps.date1904=F;break;case 134:r.opts.WriteProtect=!0;break;case 47:if(L.enc||(e.l=0),L.enc=F,!t.password)throw new Error("File is password-protected");if(F.valid==null)throw new Error("Encryption scheme unsupported");if(!F.valid)throw new Error("Password is incorrect");break;case 92:L.lastuser=F;break;case 66:var Ke=Number(F);switch(Ke){case 21010:Ke=1200;break;case 32768:Ke=1e4;break;case 32769:Ke=1252;break}or(L.codepage=Ke),q=!0;break;case 317:L.rrtabid=F;break;case 25:L.winlocked=F;break;case 439:r.opts.RefreshAll=F;break;case 12:r.opts.CalcCount=F;break;case 16:r.opts.CalcDelta=F;break;case 17:r.opts.CalcIter=F;break;case 13:r.opts.CalcMode=F;break;case 14:r.opts.CalcPrecision=F;break;case 95:r.opts.CalcSaveRecalc=F;break;case 15:L.CalcRefMode=F;break;case 2211:r.opts.FullCalc=F;break;case 129:F.fDialog&&(i["!type"]="dialog"),F.fBelow||((i["!outline"]||(i["!outline"]={})).above=!0),F.fRight||((i["!outline"]||(i["!outline"]={})).left=!0);break;case 224:M.push(F);break;case 430:W.push([F]),W[W.length-1].XTI=[];break;case 35:case 547:W[W.length-1].push(F);break;case 24:case 536:P={Name:F.Name,Ref:bt(F.rgce,s,null,W,L)},F.itab>0&&(P.Sheet=F.itab-1),W.names.push(P),W[0]||(W[0]=[],W[0].XTI=[]),W[W.length-1].push(F),F.Name=="_xlnm._FilterDatabase"&&F.itab>0&&F.rgce&&F.rgce[0]&&F.rgce[0][0]&&F.rgce[0][0][0]=="PtgArea3d"&&(N[F.itab-1]={ref:Fe(F.rgce[0][0][1][2])});break;case 22:L.ExternCount=F;break;case 23:W.length==0&&(W[0]=[],W[0].XTI=[]),W[W.length-1].XTI=W[W.length-1].XTI.concat(F),W.XTI=W.XTI.concat(F);break;case 2196:if(L.biff<8)break;P!=null&&(P.Comment=F[1]);break;case 18:i["!protect"]=F;break;case 19:F!==0&&L.WTF&&console.error("Password verifier: "+F);break;case 133:n[F.pos]=F,L.snames.push(F.name);break;case 10:{if(--ve)break;if(s.e){if(s.e.r>0&&s.e.c>0){if(s.e.r--,s.e.c--,i["!ref"]=Fe(s),t.sheetRows&&t.sheetRows<=s.e.r){var Ie=s.e.r;s.e.r=t.sheetRows-1,i["!fullref"]=i["!ref"],i["!ref"]=Fe(s),s.e.r=Ie}s.e.r++,s.e.c++}se.length>0&&(i["!merges"]=se),te.length>0&&(i["!objects"]=te),le.length>0&&(i["!cols"]=le),re.length>0&&(i["!rows"]=re),E.Sheets.push(B)}c===""?u=i:a[c]=i,i=t.dense?[]:{}}break;case 9:case 521:case 1033:case 2057:{if(L.biff===8&&(L.biff={9:2,521:3,1033:4}[ue]||{512:2,768:3,1024:4,1280:5,1536:8,2:2,7:2}[F.BIFFVer]||8),L.biffguess=F.BIFFVer==0,F.BIFFVer==0&&F.dt==4096&&(L.biff=5,q=!0,or(L.codepage=28591)),L.biff==8&&F.BIFFVer==0&&F.dt==16&&(L.biff=2),ve++)break;if(i=t.dense?[]:{},L.biff<8&&!q&&(q=!0,or(L.codepage=t.codepage||1252)),L.biff<5||F.BIFFVer==0&&F.dt==4096){c===""&&(c="Sheet1"),s={s:{r:0,c:0},e:{r:0,c:0}};var Me={pos:e.l-ae,name:c};n[Me.pos]=Me,L.snames.push(c)}else c=(n[ne]||{name:""}).name;F.dt==32&&(i["!type"]="chart"),F.dt==64&&(i["!type"]="macro"),se=[],te=[],L.arrayf=C=[],le=[],re=[],Ee=!1,B={Hidden:(n[ne]||{hs:0}).hs,name:c}}break;case 515:case 3:case 2:i["!type"]=="chart"&&(t.dense?(i[F.r]||[])[F.c]:i[xe({c:F.c,r:F.r})])&&++F.c,x={ixfe:F.ixfe,XF:M[F.ixfe]||{},v:F.val,t:"n"},S>0&&(x.z=G[x.ixfe>>8&63]),mr(x,t,r.opts.Date1904),z({c:F.c,r:F.r},x,t);break;case 5:case 517:x={ixfe:F.ixfe,XF:M[F.ixfe],v:F.val,t:F.t},S>0&&(x.z=G[x.ixfe>>8&63]),mr(x,t,r.opts.Date1904),z({c:F.c,r:F.r},x,t);break;case 638:x={ixfe:F.ixfe,XF:M[F.ixfe],v:F.rknum,t:"n"},S>0&&(x.z=G[x.ixfe>>8&63]),mr(x,t,r.opts.Date1904),z({c:F.c,r:F.r},x,t);break;case 189:for(var Te=F.c;Te<=F.C;++Te){var oe=F.rkrec[Te-F.c][0];x={ixfe:oe,XF:M[oe],v:F.rkrec[Te-F.c][1],t:"n"},S>0&&(x.z=G[x.ixfe>>8&63]),mr(x,t,r.opts.Date1904),z({c:Te,r:F.r},x,t)}break;case 6:case 518:case 1030:{if(F.val=="String"){o=F;break}if(x=Sn(F.val,F.cell.ixfe,F.tt),x.XF=M[x.ixfe],t.cellFormula){var Ye=F.formula;if(Ye&&Ye[0]&&Ye[0][0]&&Ye[0][0][0]=="PtgExp"){var Gt=Ye[0][0][1][0],pr=Ye[0][0][1][1],Cr=xe({r:Gt,c:pr});w[Cr]?x.f=""+bt(F.formula,s,F.cell,W,L):x.F=((t.dense?(i[Gt]||[])[pr]:i[Cr])||{}).F}else x.f=""+bt(F.formula,s,F.cell,W,L)}S>0&&(x.z=G[x.ixfe>>8&63]),mr(x,t,r.opts.Date1904),z(F.cell,x,t),o=F}break;case 7:case 519:if(o)o.val=F,x=Sn(F,o.cell.ixfe,"s"),x.XF=M[x.ixfe],t.cellFormula&&(x.f=""+bt(o.formula,s,o.cell,W,L)),S>0&&(x.z=G[x.ixfe>>8&63]),mr(x,t,r.opts.Date1904),z(o.cell,x,t),o=null;else throw new Error("String record expects Formula");break;case 33:case 545:{C.push(F);var si=xe(F[0].s);if(f=t.dense?(i[F[0].s.r]||[])[F[0].s.c]:i[si],t.cellFormula&&f){if(!o||!si||!f)break;f.f=""+bt(F[1],s,F[0],W,L),f.F=Fe(F[0])}}break;case 1212:{if(!t.cellFormula)break;if(d){if(!o)break;w[xe(o.cell)]=F[0],f=t.dense?(i[o.cell.r]||[])[o.cell.c]:i[xe(o.cell)],(f||{}).f=""+bt(F[0],s,h,W,L)}}break;case 253:x=Sn(l[F.isst].t,F.ixfe,"s"),l[F.isst].h&&(x.h=l[F.isst].h),x.XF=M[x.ixfe],S>0&&(x.z=G[x.ixfe>>8&63]),mr(x,t,r.opts.Date1904),z({c:F.c,r:F.r},x,t);break;case 513:t.sheetStubs&&(x={ixfe:F.ixfe,XF:M[F.ixfe],t:"z"},S>0&&(x.z=G[x.ixfe>>8&63]),mr(x,t,r.opts.Date1904),z({c:F.c,r:F.r},x,t));break;case 190:if(t.sheetStubs)for(var zr=F.c;zr<=F.C;++zr){var Mt=F.ixfe[zr-F.c];x={ixfe:Mt,XF:M[Mt],t:"z"},S>0&&(x.z=G[x.ixfe>>8&63]),mr(x,t,r.opts.Date1904),z({c:zr,r:F.r},x,t)}break;case 214:case 516:case 4:x=Sn(F.val,F.ixfe,"s"),x.XF=M[x.ixfe],S>0&&(x.z=G[x.ixfe>>8&63]),mr(x,t,r.opts.Date1904),z({c:F.c,r:F.r},x,t);break;case 0:case 512:ve===1&&(s=F);break;case 252:l=F;break;case 1054:if(L.biff==4){G[S++]=F[1];for(var Sr=0;Sr<S+163&&we[Sr]!=F[1];++Sr);Sr>=163&&ma(F[1],S+163)}else ma(F[1],F[0]);break;case 30:{G[S++]=F;for(var Ur=0;Ur<S+163&&we[Ur]!=F;++Ur);Ur>=163&&ma(F,S+163)}break;case 229:se=se.concat(F);break;case 93:te[F.cmo[0]]=L.lastobj=F;break;case 438:L.lastobj.TxO=F;break;case 127:L.lastobj.ImData=F;break;case 440:for(m=F[0].s.r;m<=F[0].e.r;++m)for(g=F[0].s.c;g<=F[0].e.c;++g)f=t.dense?(i[m]||[])[g]:i[xe({c:g,r:m})],f&&(f.l=F[1]);break;case 2048:for(m=F[0].s.r;m<=F[0].e.r;++m)for(g=F[0].s.c;g<=F[0].e.c;++g)f=t.dense?(i[m]||[])[g]:i[xe({c:g,r:m})],f&&f.l&&(f.l.Tooltip=F[1]);break;case 28:{if(L.biff<=5&&L.biff>=2)break;f=t.dense?(i[F[0].r]||[])[F[0].c]:i[xe(F[0])];var oi=te[F[2]];f||(t.dense?(i[F[0].r]||(i[F[0].r]=[]),f=i[F[0].r][F[0].c]={t:"z"}):f=i[xe(F[0])]={t:"z"},s.e.r=Math.max(s.e.r,F[0].r),s.s.r=Math.min(s.s.r,F[0].r),s.e.c=Math.max(s.e.c,F[0].c),s.s.c=Math.min(s.s.c,F[0].c)),f.c||(f.c=[]),p={a:F[1],t:oi.TxO.t},f.c.push(p)}break;case 2173:Kx(M[F.ixfe],F.ext);break;case 125:{if(!L.cellStyles)break;for(;F.e>=F.s;)le[F.e--]={width:F.w/256,level:F.level||0,hidden:!!(F.flags&1)},Ee||(Ee=!0,Yo(F.w/256)),qa(le[F.e+1])}break;case 520:{var At={};F.level!=null&&(re[F.r]=At,At.level=F.level),F.hidden&&(re[F.r]=At,At.hidden=!0),F.hpt&&(re[F.r]=At,At.hpt=F.hpt,At.hpx=qi(F.hpt))}break;case 38:case 39:case 40:case 41:i["!margins"]||Li(i["!margins"]={}),i["!margins"][{38:"left",39:"right",40:"top",41:"bottom"}[ue]]=F;break;case 161:i["!margins"]||Li(i["!margins"]={}),i["!margins"].header=F.header,i["!margins"].footer=F.footer;break;case 574:F.RTL&&(E.Views[0].RTL=!0);break;case 146:O=F;break;case 2198:Z=F;break;case 140:D=F;break;case 442:c?B.CodeName=F||B.name:E.WBProps.CodeName=F||"ThisWorkbook";break}}else Q||console.error("Missing Info for XLS Record 0x"+ue.toString(16)),e.l+=ae}return r.SheetNames=wr(n).sort(function(gr,ke){return Number(gr)-Number(ke)}).map(function(gr){return n[gr].name}),t.bookSheets||(r.Sheets=a),!r.SheetNames.length&&u["!ref"]?(r.SheetNames.push("Sheet1"),r.Sheets&&(r.Sheets.Sheet1=u)):r.Preamble=u,r.Sheets&&N.forEach(function(gr,ke){r.Sheets[r.SheetNames[ke]]["!autofilter"]=gr}),r.Strings=l,r.SSF=dt(we),L.enc&&(r.Encryption=L.enc),Z&&(r.Themes=Z),r.Metadata={},D!==void 0&&(r.Metadata.Country=D),W.names.length>0&&(E.Names=W.names),r.Workbook=E,r}var jc={SI:"e0859ff2f94f6810ab9108002b27b3d9",DSI:"02d5cdd59c2e1b10939708002b2cf9ae",UDI:"05d5cdd59c2e1b10939708002b2cf9ae"};function C2(e,t,r){var a=Se.find(e,"/!DocumentSummaryInformation");if(a&&a.size>0)try{var i=Sc(a,W1,jc.DSI);for(var n in i)t[n]=i[n]}catch(c){if(r.WTF)throw c}var s=Se.find(e,"/!SummaryInformation");if(s&&s.size>0)try{var o=Sc(s,j1,jc.SI);for(var l in o)t[l]==null&&(t[l]=o[l])}catch(c){if(r.WTF)throw c}t.HeadingPairs&&t.TitlesOfParts&&(Su(t.HeadingPairs,t.TitlesOfParts,t,r),delete t.HeadingPairs,delete t.TitlesOfParts)}function hh(e,t){t||(t={}),el(t),z0(),t.codepage&&Ro(t.codepage);var r,a;if(e.FullPaths){if(Se.find(e,"/encryption"))throw new Error("File is password-protected");r=Se.find(e,"!CompObj"),a=Se.find(e,"/Workbook")||Se.find(e,"/Book")}else{switch(t.type){case"base64":e=sr(Ht(e));break;case"binary":e=sr(e);break;case"buffer":break;case"array":Array.isArray(e)||(e=Array.prototype.slice.call(e));break}ft(e,0),a={content:e}}var i,n;if(r&&k2(r),t.bookProps&&!t.bookSheets)i={};else{var s=Ae?"buffer":"array";if(a&&a.content)i=A2(a.content,t);else if((n=Se.find(e,"PerfectOffice_MAIN"))&&n.content)i=Ii.to_workbook(n.content,(t.type=s,t));else if((n=Se.find(e,"NativeContent_MAIN"))&&n.content)i=Ii.to_workbook(n.content,(t.type=s,t));else throw(n=Se.find(e,"MN0"))&&n.content?new Error("Unsupported Works 4 for Mac file"):new Error("Cannot find Workbook stream");t.bookVBA&&e.FullPaths&&Se.find(e,"/_VBA_PROJECT_CUR/VBA/dir")&&(i.vbaraw=fb(e))}var o={};return e.FullPaths&&C2(e,o,t),i.Props=i.Custprops=o,t.bookFiles&&(i.cfb=e),i}var Qn={0:{f:ly},1:{f:fy},2:{f:yy},3:{f:my},4:{f:py},5:{f:wy},6:{f:Ey},7:{f:xy},8:{f:Fy},9:{f:Sy},10:{f:Ay},11:{f:Cy},12:{f:dy},13:{f:_y},14:{f:vy},15:{f:gy},16:{f:sh},17:{f:Ty},18:{f:by},19:{f:Ho},20:{},21:{},22:{},23:{},24:{},25:{},26:{},27:{},28:{},29:{},30:{},31:{},32:{},33:{},34:{},35:{T:1},36:{T:-1},37:{T:1},38:{T:-1},39:{f:r2},40:{},42:{},43:{f:Ax},44:{f:Tx},45:{f:Cx},46:{f:Fx},47:{f:Sx},48:{},49:{f:D1},50:{},51:{f:qx},52:{T:1},53:{T:-1},54:{T:1},55:{T:-1},56:{T:1},57:{T:-1},58:{},59:{},60:{f:zu},62:{f:ky},63:{f:tb},64:{f:My},65:{},66:{},67:{},68:{},69:{},70:{},128:{},129:{T:1},130:{T:-1},131:{T:1,f:kt,p:0},132:{T:-1},133:{T:1},134:{T:-1},135:{T:1},136:{T:-1},137:{T:1,f:$y},138:{T:-1},139:{T:1},140:{T:-1},141:{T:1},142:{T:-1},143:{T:1},144:{T:-1},145:{T:1},146:{T:-1},147:{f:hy},148:{f:cy,p:16},151:{f:Ry},152:{},153:{f:e2},154:{},155:{},156:{f:Qy},157:{},158:{},159:{T:1,f:jv},160:{T:-1},161:{T:1,f:Pa},162:{T:-1},163:{T:1},164:{T:-1},165:{T:1},166:{T:-1},167:{},168:{},169:{},170:{},171:{},172:{T:1},173:{T:-1},174:{},175:{},176:{f:Dy},177:{T:1},178:{T:-1},179:{T:1},180:{T:-1},181:{T:1},182:{T:-1},183:{T:1},184:{T:-1},185:{T:1},186:{T:-1},187:{T:1},188:{T:-1},189:{T:1},190:{T:-1},191:{T:1},192:{T:-1},193:{T:1},194:{T:-1},195:{T:1},196:{T:-1},197:{T:1},198:{T:-1},199:{T:1},200:{T:-1},201:{T:1},202:{T:-1},203:{T:1},204:{T:-1},205:{T:1},206:{T:-1},207:{T:1},208:{T:-1},209:{T:1},210:{T:-1},211:{T:1},212:{T:-1},213:{T:1},214:{T:-1},215:{T:1},216:{T:-1},217:{T:1},218:{T:-1},219:{T:1},220:{T:-1},221:{T:1},222:{T:-1},223:{T:1},224:{T:-1},225:{T:1},226:{T:-1},227:{T:1},228:{T:-1},229:{T:1},230:{T:-1},231:{T:1},232:{T:-1},233:{T:1},234:{T:-1},235:{T:1},236:{T:-1},237:{T:1},238:{T:-1},239:{T:1},240:{T:-1},241:{T:1},242:{T:-1},243:{T:1},244:{T:-1},245:{T:1},246:{T:-1},247:{T:1},248:{T:-1},249:{T:1},250:{T:-1},251:{T:1},252:{T:-1},253:{T:1},254:{T:-1},255:{T:1},256:{T:-1},257:{T:1},258:{T:-1},259:{T:1},260:{T:-1},261:{T:1},262:{T:-1},263:{T:1},264:{T:-1},265:{T:1},266:{T:-1},267:{T:1},268:{T:-1},269:{T:1},270:{T:-1},271:{T:1},272:{T:-1},273:{T:1},274:{T:-1},275:{T:1},276:{T:-1},277:{},278:{T:1},279:{T:-1},280:{T:1},281:{T:-1},282:{T:1},283:{T:1},284:{T:-1},285:{T:1},286:{T:-1},287:{T:1},288:{T:-1},289:{T:1},290:{T:-1},291:{T:1},292:{T:-1},293:{T:1},294:{T:-1},295:{T:1},296:{T:-1},297:{T:1},298:{T:-1},299:{T:1},300:{T:-1},301:{T:1},302:{T:-1},303:{T:1},304:{T:-1},305:{T:1},306:{T:-1},307:{T:1},308:{T:-1},309:{T:1},310:{T:-1},311:{T:1},312:{T:-1},313:{T:-1},314:{T:1},315:{T:-1},316:{T:1},317:{T:-1},318:{T:1},319:{T:-1},320:{T:1},321:{T:-1},322:{T:1},323:{T:-1},324:{T:1},325:{T:-1},326:{T:1},327:{T:-1},328:{T:1},329:{T:-1},330:{T:1},331:{T:-1},332:{T:1},333:{T:-1},334:{T:1},335:{f:Yx},336:{T:-1},337:{f:Zx,T:1},338:{T:-1},339:{T:1},340:{T:-1},341:{T:1},342:{T:-1},343:{T:1},344:{T:-1},345:{T:1},346:{T:-1},347:{T:1},348:{T:-1},349:{T:1},350:{T:-1},351:{},352:{},353:{T:1},354:{T:-1},355:{f:Ys},357:{},358:{},359:{},360:{T:1},361:{},362:{f:Bu},363:{},364:{},366:{},367:{},368:{},369:{},370:{},371:{},372:{T:1},373:{T:-1},374:{T:1},375:{T:-1},376:{T:1},377:{T:-1},378:{T:1},379:{T:-1},380:{T:1},381:{T:-1},382:{T:1},383:{T:-1},384:{T:1},385:{T:-1},386:{T:1},387:{T:-1},388:{T:1},389:{T:-1},390:{T:1},391:{T:-1},392:{T:1},393:{T:-1},394:{T:1},395:{T:-1},396:{},397:{},398:{},399:{},400:{},401:{T:1},403:{},404:{},405:{},406:{},407:{},408:{},409:{},410:{},411:{},412:{},413:{},414:{},415:{},416:{},417:{},418:{},419:{},420:{},421:{},422:{T:1},423:{T:1},424:{T:-1},425:{T:-1},426:{f:Iy},427:{f:Py},428:{},429:{T:1},430:{T:-1},431:{T:1},432:{T:-1},433:{T:1},434:{T:-1},435:{T:1},436:{T:-1},437:{T:1},438:{T:-1},439:{T:1},440:{T:-1},441:{T:1},442:{T:-1},443:{T:1},444:{T:-1},445:{T:1},446:{T:-1},447:{T:1},448:{T:-1},449:{T:1},450:{T:-1},451:{T:1},452:{T:-1},453:{T:1},454:{T:-1},455:{T:1},456:{T:-1},457:{T:1},458:{T:-1},459:{T:1},460:{T:-1},461:{T:1},462:{T:-1},463:{T:1},464:{T:-1},465:{T:1},466:{T:-1},467:{T:1},468:{T:-1},469:{T:1},470:{T:-1},471:{},472:{},473:{T:1},474:{T:-1},475:{},476:{f:Ny},477:{},478:{},479:{T:1},480:{T:-1},481:{T:1},482:{T:-1},483:{T:1},484:{T:-1},485:{f:uy},486:{T:1},487:{T:-1},488:{T:1},489:{T:-1},490:{T:1},491:{T:-1},492:{T:1},493:{T:-1},494:{f:Oy},495:{T:1},496:{T:-1},497:{T:1},498:{T:-1},499:{},500:{T:1},501:{T:-1},502:{T:1},503:{T:-1},504:{},505:{T:1},506:{T:-1},507:{},508:{T:1},509:{T:-1},510:{T:1},511:{T:-1},512:{},513:{},514:{T:1},515:{T:-1},516:{T:1},517:{T:-1},518:{T:1},519:{T:-1},520:{T:1},521:{T:-1},522:{},523:{},524:{},525:{},526:{},527:{},528:{T:1},529:{T:-1},530:{T:1},531:{T:-1},532:{T:1},533:{T:-1},534:{},535:{},536:{},537:{},538:{T:1},539:{T:-1},540:{T:1},541:{T:-1},542:{T:1},548:{},549:{},550:{f:Ys},551:{},552:{},553:{},554:{T:1},555:{T:-1},556:{T:1},557:{T:-1},558:{T:1},559:{T:-1},560:{T:1},561:{T:-1},562:{},564:{},565:{T:1},566:{T:-1},569:{T:1},570:{T:-1},572:{},573:{T:1},574:{T:-1},577:{},578:{},579:{},580:{},581:{},582:{},583:{},584:{},585:{},586:{},587:{},588:{T:-1},589:{},590:{T:1},591:{T:-1},592:{T:1},593:{T:-1},594:{T:1},595:{T:-1},596:{},597:{T:1},598:{T:-1},599:{T:1},600:{T:-1},601:{T:1},602:{T:-1},603:{T:1},604:{T:-1},605:{T:1},606:{T:-1},607:{},608:{T:1},609:{T:-1},610:{},611:{T:1},612:{T:-1},613:{T:1},614:{T:-1},615:{T:1},616:{T:-1},617:{T:1},618:{T:-1},619:{T:1},620:{T:-1},625:{},626:{T:1},627:{T:-1},628:{T:1},629:{T:-1},630:{T:1},631:{T:-1},632:{f:cb},633:{T:1},634:{T:-1},635:{T:1,f:lb},636:{T:-1},637:{f:R1},638:{T:1},639:{},640:{T:-1},641:{T:1},642:{T:-1},643:{T:1},644:{},645:{T:-1},646:{T:1},648:{T:1},649:{},650:{T:-1},651:{f:Wy},652:{},653:{T:1},654:{T:-1},655:{T:1},656:{T:-1},657:{T:1},658:{T:-1},659:{},660:{T:1},661:{},662:{T:-1},663:{},664:{T:1},665:{},666:{T:-1},667:{},668:{},669:{},671:{T:1},672:{T:-1},673:{T:1},674:{T:-1},675:{},676:{},677:{},678:{},679:{},680:{},681:{},1024:{},1025:{},1026:{T:1},1027:{T:-1},1028:{T:1},1029:{T:-1},1030:{},1031:{T:1},1032:{T:-1},1033:{T:1},1034:{T:-1},1035:{},1036:{},1037:{},1038:{T:1},1039:{T:-1},1040:{},1041:{T:1},1042:{T:-1},1043:{},1044:{},1045:{},1046:{T:1},1047:{T:-1},1048:{T:1},1049:{T:-1},1050:{},1051:{T:1},1052:{T:1},1053:{f:By},1054:{T:1},1055:{},1056:{T:1},1057:{T:-1},1058:{T:1},1059:{T:-1},1061:{},1062:{T:1},1063:{T:-1},1064:{T:1},1065:{T:-1},1066:{T:1},1067:{T:-1},1068:{T:1},1069:{T:-1},1070:{T:1},1071:{T:-1},1072:{T:1},1073:{T:-1},1075:{T:1},1076:{T:-1},1077:{T:1},1078:{T:-1},1079:{T:1},1080:{T:-1},1081:{T:1},1082:{T:-1},1083:{T:1},1084:{T:-1},1085:{},1086:{T:1},1087:{T:-1},1088:{T:1},1089:{T:-1},1090:{T:1},1091:{T:-1},1092:{T:1},1093:{T:-1},1094:{T:1},1095:{T:-1},1096:{},1097:{T:1},1098:{},1099:{T:-1},1100:{T:1},1101:{T:-1},1102:{},1103:{},1104:{},1105:{},1111:{},1112:{},1113:{T:1},1114:{T:-1},1115:{T:1},1116:{T:-1},1117:{},1118:{T:1},1119:{T:-1},1120:{T:1},1121:{T:-1},1122:{T:1},1123:{T:-1},1124:{T:1},1125:{T:-1},1126:{},1128:{T:1},1129:{T:-1},1130:{},1131:{T:1},1132:{T:-1},1133:{T:1},1134:{T:-1},1135:{T:1},1136:{T:-1},1137:{T:1},1138:{T:-1},1139:{T:1},1140:{T:-1},1141:{},1142:{T:1},1143:{T:-1},1144:{T:1},1145:{T:-1},1146:{},1147:{T:1},1148:{T:-1},1149:{T:1},1150:{T:-1},1152:{T:1},1153:{T:-1},1154:{T:-1},1155:{T:-1},1156:{T:-1},1157:{T:1},1158:{T:-1},1159:{T:1},1160:{T:-1},1161:{T:1},1162:{T:-1},1163:{T:1},1164:{T:-1},1165:{T:1},1166:{T:-1},1167:{T:1},1168:{T:-1},1169:{T:1},1170:{T:-1},1171:{},1172:{T:1},1173:{T:-1},1177:{},1178:{T:1},1180:{},1181:{},1182:{},2048:{T:1},2049:{T:-1},2050:{},2051:{T:1},2052:{T:-1},2053:{},2054:{},2055:{T:1},2056:{T:-1},2057:{T:1},2058:{T:-1},2060:{},2067:{},2068:{T:1},2069:{T:-1},2070:{},2071:{},2072:{T:1},2073:{T:-1},2075:{},2076:{},2077:{T:1},2078:{T:-1},2079:{},2080:{T:1},2081:{T:-1},2082:{},2083:{T:1},2084:{T:-1},2085:{T:1},2086:{T:-1},2087:{T:1},2088:{T:-1},2089:{T:1},2090:{T:-1},2091:{},2092:{},2093:{T:1},2094:{T:-1},2095:{},2096:{T:1},2097:{T:-1},2098:{T:1},2099:{T:-1},2100:{T:1},2101:{T:-1},2102:{},2103:{T:1},2104:{T:-1},2105:{},2106:{T:1},2107:{T:-1},2108:{},2109:{T:1},2110:{T:-1},2111:{T:1},2112:{T:-1},2113:{T:1},2114:{T:-1},2115:{},2116:{},2117:{},2118:{T:1},2119:{T:-1},2120:{},2121:{T:1},2122:{T:-1},2123:{T:1},2124:{T:-1},2125:{},2126:{T:1},2127:{T:-1},2128:{},2129:{T:1},2130:{T:-1},2131:{T:1},2132:{T:-1},2133:{T:1},2134:{},2135:{},2136:{},2137:{T:1},2138:{T:-1},2139:{T:1},2140:{T:-1},2141:{},3072:{},3073:{},4096:{T:1},4097:{T:-1},5002:{T:1},5003:{T:-1},5081:{T:1},5082:{T:-1},5083:{},5084:{T:1},5085:{T:-1},5086:{T:1},5087:{T:-1},5088:{},5089:{},5090:{},5092:{T:1},5093:{T:-1},5094:{},5095:{T:1},5096:{T:-1},5097:{},5099:{},65535:{n:""}},eo={6:{f:Os},10:{f:Vr},12:{f:et},13:{f:et},14:{f:Ze},15:{f:Ze},16:{f:wt},17:{f:Ze},18:{f:Ze},19:{f:et},20:{f:Rc},21:{f:Rc},23:{f:Bu},24:{f:Pc},25:{f:Ze},26:{},27:{},28:{f:sv},29:{},34:{f:Ze},35:{f:Ic},38:{f:wt},39:{f:wt},40:{f:wt},41:{f:wt},42:{f:Ze},43:{f:Ze},47:{f:ux},49:{f:Um},51:{f:et},60:{},61:{f:Mm},64:{f:Ze},65:{f:zm},66:{f:et},77:{},80:{},81:{},82:{},85:{f:et},89:{},90:{},91:{},92:{f:Dm},93:{f:lv},94:{},95:{f:Ze},96:{},97:{},99:{f:Ze},125:{f:zu},128:{f:Zm},129:{f:Om},130:{f:et},131:{f:Ze},132:{f:Ze},133:{f:Rm},134:{},140:{f:pv},141:{f:et},144:{},146:{f:mv},151:{},152:{},153:{},154:{},155:{},156:{f:et},157:{},158:{},160:{f:yv},161:{f:xv},174:{},175:{},176:{},177:{},178:{},180:{},181:{},182:{},184:{},185:{},189:{f:Xm},190:{f:Km},193:{f:Vr},197:{},198:{},199:{},200:{},201:{},202:{f:Ze},203:{},204:{},205:{},206:{},207:{},208:{},209:{},210:{},211:{},213:{},215:{},216:{},217:{},218:{f:et},220:{},221:{f:Ze},222:{},224:{f:qm},225:{f:Fm},226:{f:Vr},227:{},229:{f:ov},233:{},235:{},236:{},237:{},239:{},240:{},241:{},242:{},244:{},245:{},246:{},247:{},248:{},249:{},251:{},252:{f:Im},253:{f:Vm},255:{f:Pm},256:{},259:{},290:{},311:{},312:{},315:{},317:{f:Iu},318:{},319:{},320:{},330:{},331:{},333:{},334:{},335:{},336:{},337:{},338:{},339:{},340:{},351:{},352:{f:Ze},353:{f:Vr},401:{},402:{},403:{},404:{},405:{},406:{},407:{},408:{},425:{},426:{},427:{},428:{},429:{},430:{f:Qm},431:{f:Ze},432:{},433:{},434:{},437:{},438:{f:hv},439:{f:Ze},440:{f:fv},441:{},442:{f:un},443:{},444:{f:et},445:{},446:{},448:{f:Vr},449:{f:$m,r:2},450:{f:Vr},512:{f:Dc},513:{f:wv},515:{f:Jm},516:{f:Hm},517:{f:Oc},519:{f:_v},520:{f:Lm},523:{},545:{f:Lc},549:{f:Fc},566:{},574:{f:Bm},638:{f:Gm},659:{},1048:{},1054:{f:Wm},1084:{},1212:{f:av},2048:{f:dv},2049:{},2050:{},2051:{},2052:{},2053:{},2054:{},2055:{},2056:{},2057:{f:Tn},2058:{},2059:{},2060:{},2061:{},2062:{},2063:{},2064:{},2066:{},2067:{},2128:{},2129:{},2130:{},2131:{},2132:{},2133:{},2134:{},2135:{},2136:{},2137:{},2138:{},2146:{},2147:{r:12},2148:{},2149:{},2150:{},2151:{f:Vr},2152:{},2154:{},2155:{},2156:{},2161:{},2162:{},2164:{},2165:{},2166:{},2167:{},2168:{},2169:{},2170:{},2171:{},2172:{f:vv,r:12},2173:{f:Xx,r:12},2174:{},2175:{},2180:{},2181:{},2182:{},2183:{},2184:{},2185:{},2186:{},2187:{},2188:{f:Ze,r:12},2189:{},2190:{r:12},2191:{},2192:{},2194:{},2195:{},2196:{f:rv,r:12},2197:{},2198:{f:Ux,r:12},2199:{},2200:{},2201:{},2202:{f:iv,r:12},2203:{f:Vr},2204:{},2205:{},2206:{},2207:{},2211:{f:Nm},2212:{},2213:{},2214:{},2215:{},4097:{},4098:{},4099:{},4102:{},4103:{},4105:{},4106:{},4107:{},4108:{},4109:{},4116:{},4117:{},4118:{},4119:{},4120:{},4121:{},4122:{},4123:{},4124:{},4125:{},4126:{},4127:{},4128:{},4129:{},4130:{},4132:{},4133:{},4134:{f:et},4135:{},4146:{},4147:{},4148:{},4149:{},4154:{},4156:{},4157:{},4158:{},4159:{},4160:{},4161:{},4163:{},4164:{f:bv},4165:{},4166:{},4168:{},4170:{},4171:{},4174:{},4175:{},4176:{},4177:{},4187:{},4188:{f:gv},4189:{},4191:{},4192:{},4193:{},4194:{},4195:{},4196:{},4197:{},4198:{},4199:{},4200:{},0:{f:Dc},1:{},2:{f:Av},3:{f:Tv},4:{f:Ev},5:{f:Oc},7:{f:Cv},8:{},9:{f:Tn},11:{},22:{f:et},30:{f:jm},31:{},32:{},33:{f:Lc},36:{},37:{f:Fc},50:{f:Sv},62:{},52:{},67:{},68:{f:et},69:{},86:{},126:{},127:{f:kv},135:{},136:{},137:{},145:{},148:{},149:{},150:{},169:{},171:{},188:{},191:{},192:{},194:{},195:{},214:{f:Fv},223:{},234:{},354:{},421:{},518:{f:Os},521:{f:Tn},536:{f:Pc},547:{f:Ic},561:{},579:{},1030:{f:Os},1033:{f:Tn},1091:{},2157:{},2163:{},2177:{},2240:{},2241:{},2242:{},2243:{},2244:{},2245:{},2246:{},2247:{},2248:{},2249:{},2250:{},2251:{},2262:{r:12},29282:{}};function ir(e,t,r,a){var i=t;if(!isNaN(i)){var n=(r||[]).length||0,s=e.next(4);s.write_shift(2,i),s.write_shift(2,n),n>0&&wu(r)&&e.push(r)}}function Gc(e,t){var r=t||{},a=r.dense?[]:{};e=e.replace(/<!--.*?-->/g,"");var i=e.match(/<table/i);if(!i)throw new Error("Invalid HTML: could not find <table>");var n=e.match(/<\/table/i),s=i.index,o=n&&n.index||e.length,l=Jg(e.slice(s,o),/(:?<tr[^>]*>)/i,"<tr>"),c=-1,u=0,h=0,d=0,f={s:{r:1e7,c:1e7},e:{r:0,c:0}},p=[];for(s=0;s<l.length;++s){var g=l[s].trim(),m=g.slice(0,3).toLowerCase();if(m=="<tr"){if(++c,r.sheetRows&&r.sheetRows<=c){--c;break}u=0;continue}if(!(m!="<td"&&m!="<th")){var w=g.split(/<\/t[dh]>/i);for(o=0;o<w.length;++o){var C=w[o].trim();if(C.match(/<t[dh]/i)){for(var x=C,D=0;x.charAt(0)=="<"&&(D=x.indexOf(">"))>-1;)x=x.slice(D+1);for(var M=0;M<p.length;++M){var O=p[M];O.s.c==u&&O.s.r<c&&c<=O.e.r&&(u=O.e.c+1,M=-1)}var E=ge(C.slice(0,C.indexOf(">")));d=E.colspan?+E.colspan:1,((h=+E.rowspan)>1||d>1)&&p.push({s:{r:c,c:u},e:{r:c+(h||1)-1,c:u+d-1}});var B=E.t||E["data-t"]||"";if(!x.length){u+=d;continue}if(x=ou(x),f.s.r>c&&(f.s.r=c),f.e.r<c&&(f.e.r=c),f.s.c>u&&(f.s.c=u),f.e.c<u&&(f.e.c=u),!x.length){u+=d;continue}var R={t:"s",v:x};r.raw||!x.trim().length||B=="s"||(x==="TRUE"?R={t:"b",v:!0}:x==="FALSE"?R={t:"b",v:!1}:isNaN(cr(x))?isNaN(Ya(x).getDate())||(R={t:"d",v:ut(x)},r.cellDates||(R={t:"n",v:Ot(R.v)}),R.z=r.dateNF||we[14]):R={t:"n",v:cr(x)}),r.dense?(a[c]||(a[c]=[]),a[c][u]=R):a[xe({r:c,c:u})]=R,u+=d}}}}return a["!ref"]=Fe(f),p.length&&(a["!merges"]=p),a}function S2(e,t,r,a){for(var i=e["!merges"]||[],n=[],s=t.s.c;s<=t.e.c;++s){for(var o=0,l=0,c=0;c<i.length;++c)if(!(i[c].s.r>r||i[c].s.c>s)&&!(i[c].e.r<r||i[c].e.c<s)){if(i[c].s.r<r||i[c].s.c<s){o=-1;break}o=i[c].e.r-i[c].s.r+1,l=i[c].e.c-i[c].s.c+1;break}if(!(o<0)){var u=xe({r,c:s}),h=a.dense?(e[r]||[])[s]:e[u],d=h&&h.v!=null&&(h.h||Mo(h.w||($r(h),h.w)||""))||"",f={};o>1&&(f.rowspan=o),l>1&&(f.colspan=l),a.editable?d='<span contenteditable="true">'+d+"</span>":h&&(f["data-t"]=h&&h.t||"z",h.v!=null&&(f["data-v"]=h.v),h.z!=null&&(f["data-z"]=h.z),h.l&&(h.l.Target||"#").charAt(0)!="#"&&(d='<a href="'+h.l.Target+'">'+d+"</a>")),f.id=(a.id||"sjs")+"-"+u,n.push(p1("td",d,f))}}var p="<tr>";return p+n.join("")+"</tr>"}var F2='<html><head><meta charset="utf-8"/><title>SheetJS Table Export</title></head><body>',D2="</body></html>";function O2(e,t){var r=e.match(/<table[\s\S]*?>[\s\S]*?<\/table>/gi);if(!r||r.length==0)throw new Error("Invalid HTML: could not find <table>");if(r.length==1)return ia(Gc(r[0],t),t);var a=rl();return r.forEach(function(i,n){al(a,Gc(i,t),"Sheet"+(n+1))}),a}function R2(e,t,r){var a=[];return a.join("")+"<table"+(r&&r.id?' id="'+r.id+'"':"")+">"}function I2(e,t){var r=t||{},a=r.header!=null?r.header:F2,i=r.footer!=null?r.footer:D2,n=[a],s=ii(e["!ref"]);r.dense=Array.isArray(e),n.push(R2(e,s,r));for(var o=s.s.r;o<=s.e.r;++o)n.push(S2(e,s,o,r));return n.push("</table>"+i),n.join("")}function fh(e,t,r){var a=r||{},i=0,n=0;if(a.origin!=null)if(typeof a.origin=="number")i=a.origin;else{var s=typeof a.origin=="string"?Ft(a.origin):a.origin;i=s.r,n=s.c}var o=t.getElementsByTagName("tr"),l=Math.min(a.sheetRows||1e7,o.length),c={s:{r:0,c:0},e:{r:i,c:n}};if(e["!ref"]){var u=ii(e["!ref"]);c.s.r=Math.min(c.s.r,u.s.r),c.s.c=Math.min(c.s.c,u.s.c),c.e.r=Math.max(c.e.r,u.e.r),c.e.c=Math.max(c.e.c,u.e.c),i==-1&&(c.e.r=i=u.e.r+1)}var h=[],d=0,f=e["!rows"]||(e["!rows"]=[]),p=0,g=0,m=0,w=0,C=0,x=0;for(e["!cols"]||(e["!cols"]=[]);p<o.length&&g<l;++p){var D=o[p];if(Xc(D)){if(a.display)continue;f[g]={hidden:!0}}var M=D.children;for(m=w=0;m<M.length;++m){var O=M[m];if(!(a.display&&Xc(O))){var E=O.hasAttribute("data-v")?O.getAttribute("data-v"):O.hasAttribute("v")?O.getAttribute("v"):ou(O.innerHTML),B=O.getAttribute("data-z")||O.getAttribute("z");for(d=0;d<h.length;++d){var R=h[d];R.s.c==w+n&&R.s.r<g+i&&g+i<=R.e.r&&(w=R.e.c+1-n,d=-1)}x=+O.getAttribute("colspan")||1,((C=+O.getAttribute("rowspan")||1)>1||x>1)&&h.push({s:{r:g+i,c:w+n},e:{r:g+i+(C||1)-1,c:w+n+(x||1)-1}});var H={t:"s",v:E},z=O.getAttribute("data-t")||O.getAttribute("t")||"";E!=null&&(E.length==0?H.t=z||"z":a.raw||E.trim().length==0||z=="s"||(E==="TRUE"?H={t:"b",v:!0}:E==="FALSE"?H={t:"b",v:!1}:isNaN(cr(E))?isNaN(Ya(E).getDate())||(H={t:"d",v:ut(E)},a.cellDates||(H={t:"n",v:Ot(H.v)}),H.z=a.dateNF||we[14]):H={t:"n",v:cr(E)})),H.z===void 0&&B!=null&&(H.z=B);var L="",Z=O.getElementsByTagName("A");if(Z&&Z.length)for(var se=0;se<Z.length&&!(Z[se].hasAttribute("href")&&(L=Z[se].getAttribute("href"),L.charAt(0)!="#"));++se);L&&L.charAt(0)!="#"&&(H.l={Target:L}),a.dense?(e[g+i]||(e[g+i]=[]),e[g+i][w+n]=H):e[xe({c:w+n,r:g+i})]=H,c.e.c<w+n&&(c.e.c=w+n),w+=x}}++g}return h.length&&(e["!merges"]=(e["!merges"]||[]).concat(h)),c.e.r=Math.max(c.e.r,g-1+i),e["!ref"]=Fe(c),g>=l&&(e["!fullref"]=Fe((c.e.r=o.length-p+g-1+i,c))),e}function dh(e,t){var r=t||{},a=r.dense?[]:{};return fh(a,e,t)}function P2(e,t){return ia(dh(e,t),t)}function Xc(e){var t="",r=L2(e);return r&&(t=r(e).getPropertyValue("display")),t||(t=e.style&&e.style.display),t==="none"}function L2(e){return e.ownerDocument.defaultView&&typeof e.ownerDocument.defaultView.getComputedStyle=="function"?e.ownerDocument.defaultView.getComputedStyle:typeof getComputedStyle=="function"?getComputedStyle:null}function N2(e){var t=e.replace(/[\t\r\n]/g," ").trim().replace(/ +/g," ").replace(/<text:s\/>/g," ").replace(/<text:s text:c="(\d+)"\/>/g,function(a,i){return Array(parseInt(i,10)+1).join(" ")}).replace(/<text:tab[^>]*\/>/g,"	").replace(/<text:line-break\/>/g,`
`),r=Oe(t.replace(/<[^>]*>/g,""));return[r]}var Kc={day:["d","dd"],month:["m","mm"],year:["y","yy"],hours:["h","hh"],minutes:["m","mm"],seconds:["s","ss"],"am-pm":["A/P","AM/PM"],"day-of-week":["ddd","dddd"],era:["e","ee"],quarter:["\\Qm",'m\\"th quarter"']};function ph(e,t){var r=t||{},a=Bo(e),i=[],n,s,o={name:""},l="",c=0,u,h,d={},f=[],p=r.dense?[]:{},g,m,w={value:""},C="",x=0,D=[],M=-1,O=-1,E={s:{r:1e6,c:1e7},e:{r:0,c:0}},B=0,R={},H=[],z={},L=0,Z=0,se=[],te=1,le=1,re=[],Ee={Names:[]},W={},de=["",""],ve=[],S={},G="",N=0,P=!1,q=!1,ne=0;for(Xi.lastIndex=0,a=a.replace(/<!--([\s\S]*?)-->/mg,"").replace(/<!DOCTYPE[^\[]*\[[^\]]*\]>/gm,"");g=Xi.exec(a);)switch(g[3]=g[3].replace(/_.*$/,"")){case"table":case"工作表":g[1]==="/"?(E.e.c>=E.s.c&&E.e.r>=E.s.r?p["!ref"]=Fe(E):p["!ref"]="A1:A1",r.sheetRows>0&&r.sheetRows<=E.e.r&&(p["!fullref"]=p["!ref"],E.e.r=r.sheetRows-1,p["!ref"]=Fe(E)),H.length&&(p["!merges"]=H),se.length&&(p["!rows"]=se),u.name=u.名称||u.name,typeof JSON<"u"&&JSON.stringify(u),f.push(u.name),d[u.name]=p,q=!1):g[0].charAt(g[0].length-2)!=="/"&&(u=ge(g[0],!1),M=O=-1,E.s.r=E.s.c=1e7,E.e.r=E.e.c=0,p=r.dense?[]:{},H=[],se=[],q=!0);break;case"table-row-group":g[1]==="/"?--B:++B;break;case"table-row":case"行":if(g[1]==="/"){M+=te,te=1;break}if(h=ge(g[0],!1),h.行号?M=h.行号-1:M==-1&&(M=0),te=+h["number-rows-repeated"]||1,te<10)for(ne=0;ne<te;++ne)B>0&&(se[M+ne]={level:B});O=-1;break;case"covered-table-cell":g[1]!=="/"&&++O,r.sheetStubs&&(r.dense?(p[M]||(p[M]=[]),p[M][O]={t:"z"}):p[xe({r:M,c:O})]={t:"z"}),C="",D=[];break;case"table-cell":case"数据":if(g[0].charAt(g[0].length-2)==="/")++O,w=ge(g[0],!1),le=parseInt(w["number-columns-repeated"]||"1",10),m={t:"z",v:null},w.formula&&r.cellFormula!=!1&&(m.f=Vc(Oe(w.formula))),(w.数据类型||w["value-type"])=="string"&&(m.t="s",m.v=Oe(w["string-value"]||""),r.dense?(p[M]||(p[M]=[]),p[M][O]=m):p[xe({r:M,c:O})]=m),O+=le-1;else if(g[1]!=="/"){++O,C="",x=0,D=[],le=1;var ue=te?M+te-1:M;if(O>E.e.c&&(E.e.c=O),O<E.s.c&&(E.s.c=O),M<E.s.r&&(E.s.r=M),ue>E.e.r&&(E.e.r=ue),w=ge(g[0],!1),ve=[],S={},m={t:w.数据类型||w["value-type"],v:null},r.cellFormula)if(w.formula&&(w.formula=Oe(w.formula)),w["number-matrix-columns-spanned"]&&w["number-matrix-rows-spanned"]&&(L=parseInt(w["number-matrix-rows-spanned"],10)||0,Z=parseInt(w["number-matrix-columns-spanned"],10)||0,z={s:{r:M,c:O},e:{r:M+L-1,c:O+Z-1}},m.F=Fe(z),re.push([z,m.F])),w.formula)m.f=Vc(w.formula);else for(ne=0;ne<re.length;++ne)M>=re[ne][0].s.r&&M<=re[ne][0].e.r&&O>=re[ne][0].s.c&&O<=re[ne][0].e.c&&(m.F=re[ne][1]);switch((w["number-columns-spanned"]||w["number-rows-spanned"])&&(L=parseInt(w["number-rows-spanned"],10)||0,Z=parseInt(w["number-columns-spanned"],10)||0,z={s:{r:M,c:O},e:{r:M+L-1,c:O+Z-1}},H.push(z)),w["number-columns-repeated"]&&(le=parseInt(w["number-columns-repeated"],10)),m.t){case"boolean":m.t="b",m.v=Ue(w["boolean-value"]);break;case"float":m.t="n",m.v=parseFloat(w.value);break;case"percentage":m.t="n",m.v=parseFloat(w.value);break;case"currency":m.t="n",m.v=parseFloat(w.value);break;case"date":m.t="d",m.v=ut(w["date-value"]),r.cellDates||(m.t="n",m.v=Ot(m.v)),m.z="m/d/yy";break;case"time":m.t="n",m.v=Yg(w["time-value"])/86400,r.cellDates&&(m.t="d",m.v=hs(m.v)),m.z="HH:MM:SS";break;case"number":m.t="n",m.v=parseFloat(w.数据数值);break;default:if(m.t==="string"||m.t==="text"||!m.t)m.t="s",w["string-value"]!=null&&(C=Oe(w["string-value"]),D=[]);else throw new Error("Unsupported value type "+m.t)}}else{if(P=!1,m.t==="s"&&(m.v=C||"",D.length&&(m.R=D),P=x==0),W.Target&&(m.l=W),ve.length>0&&(m.c=ve,ve=[]),C&&r.cellText!==!1&&(m.w=C),P&&(m.t="z",delete m.v),(!P||r.sheetStubs)&&!(r.sheetRows&&r.sheetRows<=M))for(var ae=0;ae<te;++ae){if(le=parseInt(w["number-columns-repeated"]||"1",10),r.dense)for(p[M+ae]||(p[M+ae]=[]),p[M+ae][O]=ae==0?m:dt(m);--le>0;)p[M+ae][O+le]=dt(m);else for(p[xe({r:M+ae,c:O})]=m;--le>0;)p[xe({r:M+ae,c:O+le})]=dt(m);E.e.c<=O&&(E.e.c=O)}le=parseInt(w["number-columns-repeated"]||"1",10),O+=le-1,le=0,m={},C="",D=[]}W={};break;case"document":case"document-content":case"电子表格文档":case"spreadsheet":case"主体":case"scripts":case"styles":case"font-face-decls":case"master-styles":if(g[1]==="/"){if((n=i.pop())[0]!==g[3])throw"Bad state: "+n}else g[0].charAt(g[0].length-2)!=="/"&&i.push([g[3],!0]);break;case"annotation":if(g[1]==="/"){if((n=i.pop())[0]!==g[3])throw"Bad state: "+n;S.t=C,D.length&&(S.R=D),S.a=G,ve.push(S)}else g[0].charAt(g[0].length-2)!=="/"&&i.push([g[3],!1]);G="",N=0,C="",x=0,D=[];break;case"creator":g[1]==="/"?G=a.slice(N,g.index):N=g.index+g[0].length;break;case"meta":case"元数据":case"settings":case"config-item-set":case"config-item-map-indexed":case"config-item-map-entry":case"config-item-map-named":case"shapes":case"frame":case"text-box":case"image":case"data-pilot-tables":case"list-style":case"form":case"dde-links":case"event-listeners":case"chart":if(g[1]==="/"){if((n=i.pop())[0]!==g[3])throw"Bad state: "+n}else g[0].charAt(g[0].length-2)!=="/"&&i.push([g[3],!1]);C="",x=0,D=[];break;case"scientific-number":break;case"currency-symbol":break;case"currency-style":break;case"number-style":case"percentage-style":case"date-style":case"time-style":if(g[1]==="/"){if(R[o.name]=l,(n=i.pop())[0]!==g[3])throw"Bad state: "+n}else g[0].charAt(g[0].length-2)!=="/"&&(l="",o=ge(g[0],!1),i.push([g[3],!0]));break;case"script":break;case"libraries":break;case"automatic-styles":break;case"default-style":case"page-layout":break;case"style":break;case"map":break;case"font-face":break;case"paragraph-properties":break;case"table-properties":break;case"table-column-properties":break;case"table-row-properties":break;case"table-cell-properties":break;case"number":switch(i[i.length-1][0]){case"time-style":case"date-style":s=ge(g[0],!1),l+=Kc[g[3]][s.style==="long"?1:0];break}break;case"fraction":break;case"day":case"month":case"year":case"era":case"day-of-week":case"week-of-year":case"quarter":case"hours":case"minutes":case"seconds":case"am-pm":switch(i[i.length-1][0]){case"time-style":case"date-style":s=ge(g[0],!1),l+=Kc[g[3]][s.style==="long"?1:0];break}break;case"boolean-style":break;case"boolean":break;case"text-style":break;case"text":if(g[0].slice(-2)==="/>")break;if(g[1]==="/")switch(i[i.length-1][0]){case"number-style":case"date-style":case"time-style":l+=a.slice(c,g.index);break}else c=g.index+g[0].length;break;case"named-range":s=ge(g[0],!1),de=Rs(s["cell-range-address"]);var Q={Name:s.name,Ref:de[0]+"!"+de[1]};q&&(Q.Sheet=f.length),Ee.Names.push(Q);break;case"text-content":break;case"text-properties":break;case"embedded-text":break;case"body":case"电子表格":break;case"forms":break;case"table-column":break;case"table-header-rows":break;case"table-rows":break;case"table-column-group":break;case"table-header-columns":break;case"table-columns":break;case"null-date":break;case"graphic-properties":break;case"calculation-settings":break;case"named-expressions":break;case"label-range":break;case"label-ranges":break;case"named-expression":break;case"sort":break;case"sort-by":break;case"sort-groups":break;case"tab":break;case"line-break":break;case"span":break;case"p":case"文本串":if(["master-styles"].indexOf(i[i.length-1][0])>-1)break;if(g[1]==="/"&&(!w||!w["string-value"])){var De=N2(a.slice(x,g.index));C=(C.length>0?C+`
`:"")+De[0]}else ge(g[0],!1),x=g.index+g[0].length;break;case"s":break;case"database-range":if(g[1]==="/")break;try{de=Rs(ge(g[0])["target-range-address"]),d[de[0]]["!autofilter"]={ref:de[1]}}catch{}break;case"date":break;case"object":break;case"title":case"标题":break;case"desc":break;case"binary-data":break;case"table-source":break;case"scenario":break;case"iteration":break;case"content-validations":break;case"content-validation":break;case"help-message":break;case"error-message":break;case"database-ranges":break;case"filter":break;case"filter-and":break;case"filter-or":break;case"filter-condition":break;case"list-level-style-bullet":break;case"list-level-style-number":break;case"list-level-properties":break;case"sender-firstname":case"sender-lastname":case"sender-initials":case"sender-title":case"sender-position":case"sender-email":case"sender-phone-private":case"sender-fax":case"sender-company":case"sender-phone-work":case"sender-street":case"sender-city":case"sender-postal-code":case"sender-country":case"sender-state-or-province":case"author-name":case"author-initials":case"chapter":case"file-name":case"template-name":case"sheet-name":break;case"event-listener":break;case"initial-creator":case"creation-date":case"print-date":case"generator":case"document-statistic":case"user-defined":case"editing-duration":case"editing-cycles":break;case"config-item":break;case"page-number":break;case"page-count":break;case"time":break;case"cell-range-source":break;case"detective":break;case"operation":break;case"highlighted-range":break;case"data-pilot-table":case"source-cell-range":case"source-service":case"data-pilot-field":case"data-pilot-level":case"data-pilot-subtotals":case"data-pilot-subtotal":case"data-pilot-members":case"data-pilot-member":case"data-pilot-display-info":case"data-pilot-sort-info":case"data-pilot-layout-info":case"data-pilot-field-reference":case"data-pilot-groups":case"data-pilot-group":case"data-pilot-group-member":break;case"rect":break;case"dde-connection-decls":case"dde-connection-decl":case"dde-link":case"dde-source":break;case"properties":break;case"property":break;case"a":if(g[1]!=="/"){if(W=ge(g[0],!1),!W.href)break;W.Target=Oe(W.href),delete W.href,W.Target.charAt(0)=="#"&&W.Target.indexOf(".")>-1?(de=Rs(W.Target.slice(1)),W.Target="#"+de[0]+"!"+de[1]):W.Target.match(/^\.\.[\\\/]/)&&(W.Target=W.Target.slice(3))}break;case"table-protection":break;case"data-pilot-grand-total":break;case"office-document-common-attrs":break;default:switch(g[2]){case"dc:":case"calcext:":case"loext:":case"ooo:":case"chartooo:":case"draw:":case"style:":case"chart:":case"form:":case"uof:":case"表:":case"字:":break;default:if(r.WTF)throw new Error(g)}}var F={Sheets:d,SheetNames:f,Workbook:Ee};return r.bookSheets&&delete F.Sheets,F}function Yc(e,t){t=t||{},qt(e,"META-INF/manifest.xml")&&J1(Qe(e,"META-INF/manifest.xml"),t);var r=Ut(e,"content.xml");if(!r)throw new Error("Missing content.xml in ODS / UOF file");var a=ph(Be(r),t);return qt(e,"meta.xml")&&(a.Props=Cu(Qe(e,"meta.xml"))),a}function qc(e,t){return ph(e,t)}/*! sheetjs (C) 2013-present SheetJS -- http://sheetjs.com */function Jo(e){return new DataView(e.buffer,e.byteOffset,e.byteLength)}function to(e){return typeof TextDecoder<"u"?new TextDecoder().decode(e):Be(Ra(e))}function ro(e){var t=e.reduce(function(i,n){return i+n.length},0),r=new Uint8Array(t),a=0;return e.forEach(function(i){r.set(i,a),a+=i.length}),r}function Zc(e){return e-=e>>1&1431655765,e=(e&858993459)+(e>>2&858993459),(e+(e>>4)&252645135)*16843009>>>24}function $2(e,t){for(var r=(e[t+15]&127)<<7|e[t+14]>>1,a=e[t+14]&1,i=t+13;i>=t;--i)a=a*256+e[i];return(e[t+15]&128?-a:a)*Math.pow(10,r-6176)}function Zi(e,t){var r=t?t[0]:0,a=e[r]&127;e:if(e[r++]>=128&&(a|=(e[r]&127)<<7,e[r++]<128||(a|=(e[r]&127)<<14,e[r++]<128)||(a|=(e[r]&127)<<21,e[r++]<128)||(a+=(e[r]&127)*Math.pow(2,28),++r,e[r++]<128)||(a+=(e[r]&127)*Math.pow(2,35),++r,e[r++]<128)||(a+=(e[r]&127)*Math.pow(2,42),++r,e[r++]<128)))break e;return t&&(t[0]=r),a}function ot(e){var t=0,r=e[t]&127;e:if(e[t++]>=128){if(r|=(e[t]&127)<<7,e[t++]<128||(r|=(e[t]&127)<<14,e[t++]<128)||(r|=(e[t]&127)<<21,e[t++]<128))break e;r|=(e[t]&127)<<28}return r}function yt(e){for(var t=[],r=[0];r[0]<e.length;){var a=r[0],i=Zi(e,r),n=i&7;i=Math.floor(i/8);var s=0,o;if(i==0)break;switch(n){case 0:{for(var l=r[0];e[r[0]++]>=128;);o=e.slice(l,r[0])}break;case 5:s=4,o=e.slice(r[0],r[0]+s),r[0]+=s;break;case 1:s=8,o=e.slice(r[0],r[0]+s),r[0]+=s;break;case 2:s=Zi(e,r),o=e.slice(r[0],r[0]+s),r[0]+=s;break;case 3:case 4:default:throw new Error("PB Type ".concat(n," for Field ").concat(i," at offset ").concat(a))}var c={data:o,type:n};t[i]==null?t[i]=[c]:t[i].push(c)}return t}function Qo(e,t){return e?.map(function(r){return t(r.data)})||[]}function M2(e){for(var t,r=[],a=[0];a[0]<e.length;){var i=Zi(e,a),n=yt(e.slice(a[0],a[0]+i));a[0]+=i;var s={id:ot(n[1][0].data),messages:[]};n[2].forEach(function(o){var l=yt(o.data),c=ot(l[3][0].data);s.messages.push({meta:l,data:e.slice(a[0],a[0]+c)}),a[0]+=c}),(t=n[3])!=null&&t[0]&&(s.merge=ot(n[3][0].data)>>>0>0),r.push(s)}return r}function B2(e,t){if(e!=0)throw new Error("Unexpected Snappy chunk type ".concat(e));for(var r=[0],a=Zi(t,r),i=[];r[0]<t.length;){var n=t[r[0]]&3;if(n==0){var s=t[r[0]++]>>2;if(s<60)++s;else{var o=s-59;s=t[r[0]],o>1&&(s|=t[r[0]+1]<<8),o>2&&(s|=t[r[0]+2]<<16),o>3&&(s|=t[r[0]+3]<<24),s>>>=0,s++,r[0]+=o}i.push(t.slice(r[0],r[0]+s)),r[0]+=s;continue}else{var l=0,c=0;if(n==1?(c=(t[r[0]]>>2&7)+4,l=(t[r[0]++]&224)<<3,l|=t[r[0]++]):(c=(t[r[0]++]>>2)+1,n==2?(l=t[r[0]]|t[r[0]+1]<<8,r[0]+=2):(l=(t[r[0]]|t[r[0]+1]<<8|t[r[0]+2]<<16|t[r[0]+3]<<24)>>>0,r[0]+=4)),i=[ro(i)],l==0)throw new Error("Invalid offset 0");if(l>i[0].length)throw new Error("Invalid offset beyond length");if(c>=l)for(i.push(i[0].slice(-l)),c-=l;c>=i[i.length-1].length;)i.push(i[i.length-1]),c-=i[i.length-1].length;i.push(i[0].slice(-l,-l+c))}}var u=ro(i);if(u.length!=a)throw new Error("Unexpected length: ".concat(u.length," != ").concat(a));return u}function z2(e){for(var t=[],r=0;r<e.length;){var a=e[r++],i=e[r]|e[r+1]<<8|e[r+2]<<16;r+=3,t.push(B2(a,e.slice(r,r+i))),r+=i}if(r!==e.length)throw new Error("data is not a valid framed stream!");return ro(t)}function U2(e,t,r,a){var i=Jo(e),n=i.getUint32(4,!0),s=(a>1?12:8)+Zc(n&(a>1?3470:398))*4,o=-1,l=-1,c=NaN,u=new Date(2001,0,1);n&512&&(o=i.getUint32(s,!0),s+=4),s+=Zc(n&(a>1?12288:4096))*4,n&16&&(l=i.getUint32(s,!0),s+=4),n&32&&(c=i.getFloat64(s,!0),s+=8),n&64&&(u.setTime(u.getTime()+i.getFloat64(s,!0)*1e3),s+=8);var h;switch(e[2]){case 0:break;case 2:h={t:"n",v:c};break;case 3:h={t:"s",v:t[l]};break;case 5:h={t:"d",v:u};break;case 6:h={t:"b",v:c>0};break;case 7:h={t:"n",v:c/86400};break;case 8:h={t:"e",v:0};break;case 9:if(o>-1)h={t:"s",v:r[o]};else if(l>-1)h={t:"s",v:t[l]};else if(!isNaN(c))h={t:"n",v:c};else throw new Error("Unsupported cell type ".concat(e.slice(0,4)));break;default:throw new Error("Unsupported cell type ".concat(e.slice(0,4)))}return h}function V2(e,t,r){var a=Jo(e),i=a.getUint32(8,!0),n=12,s=-1,o=-1,l=NaN,c=NaN,u=new Date(2001,0,1);i&1&&(l=$2(e,n),n+=16),i&2&&(c=a.getFloat64(n,!0),n+=8),i&4&&(u.setTime(u.getTime()+a.getFloat64(n,!0)*1e3),n+=8),i&8&&(o=a.getUint32(n,!0),n+=4),i&16&&(s=a.getUint32(n,!0),n+=4);var h;switch(e[1]){case 0:break;case 2:h={t:"n",v:l};break;case 3:h={t:"s",v:t[o]};break;case 5:h={t:"d",v:u};break;case 6:h={t:"b",v:c>0};break;case 7:h={t:"n",v:c/86400};break;case 8:h={t:"e",v:0};break;case 9:if(s>-1)h={t:"s",v:r[s]};else throw new Error("Unsupported cell type ".concat(e[1]," : ").concat(i&31," : ").concat(e.slice(0,4)));break;case 10:h={t:"n",v:l};break;default:throw new Error("Unsupported cell type ".concat(e[1]," : ").concat(i&31," : ").concat(e.slice(0,4)))}return h}function H2(e,t,r){switch(e[0]){case 0:case 1:case 2:case 3:return U2(e,t,r,e[0]);case 5:return V2(e,t,r);default:throw new Error("Unsupported payload version ".concat(e[0]))}}function qr(e){var t=yt(e);return Zi(t[1][0].data)}function Jc(e,t){var r=yt(t.data),a=ot(r[1][0].data),i=r[3],n=[];return(i||[]).forEach(function(s){var o=yt(s.data),l=ot(o[1][0].data)>>>0;switch(a){case 1:n[l]=to(o[3][0].data);break;case 8:{var c=e[qr(o[9][0].data)][0],u=yt(c.data),h=e[qr(u[1][0].data)][0],d=ot(h.meta[1][0].data);if(d!=2001)throw new Error("2000 unexpected reference to ".concat(d));var f=yt(h.data);n[l]=f[3].map(function(p){return to(p.data)}).join("")}break}}),n}function W2(e,t){var r,a,i,n,s,o,l,c,u,h,d,f,p,g,m=yt(e),w=ot(m[1][0].data)>>>0,C=ot(m[2][0].data)>>>0,x=((a=(r=m[8])==null?void 0:r[0])==null?void 0:a.data)&&ot(m[8][0].data)>0||!1,D,M;if((n=(i=m[7])==null?void 0:i[0])!=null&&n.data&&t!=0)D=(o=(s=m[7])==null?void 0:s[0])==null?void 0:o.data,M=(c=(l=m[6])==null?void 0:l[0])==null?void 0:c.data;else if((h=(u=m[4])==null?void 0:u[0])!=null&&h.data&&t!=1)D=(f=(d=m[4])==null?void 0:d[0])==null?void 0:f.data,M=(g=(p=m[3])==null?void 0:p[0])==null?void 0:g.data;else throw"NUMBERS Tile missing ".concat(t," cell storage");for(var O=x?4:1,E=Jo(D),B=[],R=0;R<D.length/2;++R){var H=E.getUint16(R*2,!0);H<65535&&B.push([R,H])}if(B.length!=C)throw"Expected ".concat(C," cells, found ").concat(B.length);var z=[];for(R=0;R<B.length-1;++R)z[B[R][0]]=M.subarray(B[R][1]*O,B[R+1][1]*O);return B.length>=1&&(z[B[B.length-1][0]]=M.subarray(B[B.length-1][1]*O)),{R:w,cells:z}}function j2(e,t){var r,a=yt(t.data),i=(r=a?.[7])!=null&&r[0]?ot(a[7][0].data)>>>0>0?1:0:-1,n=Qo(a[5],function(s){return W2(s,i)});return{nrows:ot(a[4][0].data)>>>0,data:n.reduce(function(s,o){return s[o.R]||(s[o.R]=[]),o.cells.forEach(function(l,c){if(s[o.R][c])throw new Error("Duplicate cell r=".concat(o.R," c=").concat(c));s[o.R][c]=l}),s},[])}}function G2(e,t,r){var a,i=yt(t.data),n={s:{r:0,c:0},e:{r:0,c:0}};if(n.e.r=(ot(i[6][0].data)>>>0)-1,n.e.r<0)throw new Error("Invalid row varint ".concat(i[6][0].data));if(n.e.c=(ot(i[7][0].data)>>>0)-1,n.e.c<0)throw new Error("Invalid col varint ".concat(i[7][0].data));r["!ref"]=Fe(n);var s=yt(i[4][0].data),o=Jc(e,e[qr(s[4][0].data)][0]),l=(a=s[17])!=null&&a[0]?Jc(e,e[qr(s[17][0].data)][0]):[],c=yt(s[3][0].data),u=0;c[1].forEach(function(h){var d=yt(h.data),f=e[qr(d[2][0].data)][0],p=ot(f.meta[1][0].data);if(p!=6002)throw new Error("6001 unexpected reference to ".concat(p));var g=j2(e,f);g.data.forEach(function(m,w){m.forEach(function(C,x){var D=xe({r:u+w,c:x}),M=H2(C,o,l);M&&(r[D]=M)})}),u+=g.nrows})}function X2(e,t){var r=yt(t.data),a={"!ref":"A1"},i=e[qr(r[2][0].data)],n=ot(i[0].meta[1][0].data);if(n!=6001)throw new Error("6000 unexpected reference to ".concat(n));return G2(e,i[0],a),a}function K2(e,t){var r,a=yt(t.data),i={name:(r=a[1])!=null&&r[0]?to(a[1][0].data):"",sheets:[]},n=Qo(a[2],qr);return n.forEach(function(s){e[s].forEach(function(o){var l=ot(o.meta[1][0].data);l==6e3&&i.sheets.push(X2(e,o))})}),i}function Y2(e,t){var r=rl(),a=yt(t.data),i=Qo(a[1],qr);if(i.forEach(function(n){e[n].forEach(function(s){var o=ot(s.meta[1][0].data);if(o==2){var l=K2(e,s);l.sheets.forEach(function(c,u){al(r,c,u==0?l.name:l.name+"_"+u,!0)})}})}),r.SheetNames.length==0)throw new Error("Empty NUMBERS file");return r}function Ps(e){var t,r,a,i,n={},s=[];if(e.FullPaths.forEach(function(l){if(l.match(/\.iwpv2/))throw new Error("Unsupported password protection")}),e.FileIndex.forEach(function(l){if(l.name.match(/\.iwa$/)){var c;try{c=z2(l.content)}catch(h){return console.log("?? "+l.content.length+" "+(h.message||h))}var u;try{u=M2(c)}catch(h){return console.log("## "+(h.message||h))}u.forEach(function(h){n[h.id]=h.messages,s.push(h.id)})}}),!s.length)throw new Error("File has no messages");var o=((i=(a=(r=(t=n?.[1])==null?void 0:t[0])==null?void 0:r.meta)==null?void 0:a[1])==null?void 0:i[0].data)&&ot(n[1][0].meta[1][0].data)==1&&n[1][0];if(o||s.forEach(function(l){n[l].forEach(function(c){var u=ot(c.meta[1][0].data)>>>0;if(u==1)if(!o)o=c;else throw new Error("Document has multiple roots")})}),!o)throw new Error("Cannot find Document root");return Y2(n,o)}function q2(e){return function(r){for(var a=0;a!=e.length;++a){var i=e[a];r[i[0]]===void 0&&(r[i[0]]=i[1]),i[2]==="n"&&(r[i[0]]=Number(r[i[0]]))}}}function el(e){q2([["cellNF",!1],["cellHTML",!0],["cellFormula",!0],["cellStyles",!1],["cellText",!0],["cellDates",!1],["sheetStubs",!1],["sheetRows",0,"n"],["bookDeps",!1],["bookSheets",!1],["bookProps",!1],["bookFiles",!1],["bookVBA",!1],["password",""],["WTF",!1]])(e)}function Z2(e){return Ua.WS.indexOf(e)>-1?"sheet":e==Ua.CS?"chart":e==Ua.DS?"dialog":e==Ua.MS?"macro":e&&e.length?e:"sheet"}function J2(e,t){if(!e)return 0;try{e=t.map(function(a){return a.id||(a.id=a.strRelID),[a.name,e["!id"][a.id].Target,Z2(e["!id"][a.id].Type)]})}catch{return null}return!e||e.length===0?null:e}function Q2(e,t,r,a,i,n,s,o,l,c,u,h){try{n[a]=Oi(Ut(e,r,!0),t);var d=Qe(e,t),f;switch(o){case"sheet":f=n2(d,t,i,l,n[a],c,u,h);break;case"chart":if(f=s2(d,t,i,l,n[a],c,u,h),!f||!f["!drawel"])break;var p=yi(f["!drawel"].Target,t),g=qs(p),m=ib(Ut(e,p,!0),Oi(Ut(e,g,!0),p)),w=yi(m,p),C=qs(w);f=Vy(Ut(e,w,!0),w,l,Oi(Ut(e,C,!0),w),c,f);break;case"macro":f=o2(d,t,i,l,n[a],c,u,h);break;case"dialog":f=l2(d,t,i,l,n[a],c,u,h);break;default:throw new Error("Unrecognized sheet type "+o)}s[a]=f;var x=[];n&&n[a]&&wr(n[a]).forEach(function(D){var M="";if(n[a][D].Type==Ua.CMNT){M=yi(n[a][D].Target,t);var O=f2(Qe(e,M,!0),M,l);if(!O||!O.length)return;$c(f,O,!1)}n[a][D].Type==Ua.TCMNT&&(M=yi(n[a][D].Target,t),x=x.concat(sb(Qe(e,M,!0),l)))}),x&&x.length&&$c(f,x,!0,l.people||[])}catch(D){if(l.WTF)throw D}}function Kt(e){return e.charAt(0)=="/"?e.slice(1):e}function e_(e,t){if(J0(),t=t||{},el(t),qt(e,"META-INF/manifest.xml")||qt(e,"objectdata.xml"))return Yc(e,t);if(qt(e,"Index/Document.iwa")){if(typeof Uint8Array>"u")throw new Error("NUMBERS file parsing requires Uint8Array support");if(typeof Ps<"u"){if(e.FileIndex)return Ps(e);var r=Se.utils.cfb_new();return uc(e).forEach(function(se){t1(r,se,e1(e,se))}),Ps(r)}throw new Error("Unsupported NUMBERS file")}if(!qt(e,"[Content_Types].xml"))throw qt(e,"index.xml.gz")?new Error("Unsupported NUMBERS 08 file"):qt(e,"index.xml")?new Error("Unsupported NUMBERS 09 file"):new Error("Unsupported ZIP file");var a=uc(e),i=q1(Ut(e,"[Content_Types].xml")),n=!1,s,o;if(i.workbooks.length===0&&(o="xl/workbook.xml",Qe(e,o,!0)&&i.workbooks.push(o)),i.workbooks.length===0){if(o="xl/workbook.bin",!Qe(e,o,!0))throw new Error("Could not find workbook");i.workbooks.push(o),n=!0}i.workbooks[0].slice(-3)=="bin"&&(n=!0);var l={},c={};if(!t.bookSheets&&!t.bookProps){if(Pi=[],i.sst)try{Pi=h2(Qe(e,Kt(i.sst)),i.sst,t)}catch(se){if(t.WTF)throw se}t.cellStyles&&i.themes.length&&(l=u2(Ut(e,i.themes[0].replace(/^\//,""),!0)||"",i.themes[0],t)),i.style&&(c=c2(Qe(e,Kt(i.style)),i.style,l,t))}i.links.map(function(se){try{var te=Oi(Ut(e,qs(Kt(se))),se);return p2(Qe(e,Kt(se)),te,se,t)}catch{}});var u=i2(Qe(e,Kt(i.workbooks[0])),i.workbooks[0],t),h={},d="";i.coreprops.length&&(d=Qe(e,Kt(i.coreprops[0]),!0),d&&(h=Cu(d)),i.extprops.length!==0&&(d=Qe(e,Kt(i.extprops[0]),!0),d&&tm(d,h,t)));var f={};(!t.bookSheets||t.bookProps)&&i.custprops.length!==0&&(d=Ut(e,Kt(i.custprops[0]),!0),d&&(f=am(d,t)));var p={};if((t.bookSheets||t.bookProps)&&(u.Sheets?s=u.Sheets.map(function(te){return te.name}):h.Worksheets&&h.SheetNames.length>0&&(s=h.SheetNames),t.bookProps&&(p.Props=h,p.Custprops=f),t.bookSheets&&typeof s<"u"&&(p.SheetNames=s),t.bookSheets?p.SheetNames:t.bookProps))return p;s={};var g={};t.bookDeps&&i.calcchain&&(g=d2(Qe(e,Kt(i.calcchain)),i.calcchain));var m=0,w={},C,x;{var D=u.Sheets;h.Worksheets=D.length,h.SheetNames=[];for(var M=0;M!=D.length;++M)h.SheetNames[M]=D[M].name}var O=n?"bin":"xml",E=i.workbooks[0].lastIndexOf("/"),B=(i.workbooks[0].slice(0,E+1)+"_rels/"+i.workbooks[0].slice(E+1)+".rels").replace(/^\//,"");qt(e,B)||(B="xl/_rels/workbook."+O+".rels");var R=Oi(Ut(e,B,!0),B.replace(/_rels.*/,"s5s"));(i.metadata||[]).length>=1&&(t.xlmeta=g2(Qe(e,Kt(i.metadata[0])),i.metadata[0],t)),(i.people||[]).length>=1&&(t.people=ob(Qe(e,Kt(i.people[0])),t)),R&&(R=J2(R,u.Sheets));var H=Qe(e,"xl/worksheets/sheet.xml",!0)?1:0;e:for(m=0;m!=h.Worksheets;++m){var z="sheet";if(R&&R[m]?(C="xl/"+R[m][1].replace(/[\/]?xl\//,""),qt(e,C)||(C=R[m][1]),qt(e,C)||(C=B.replace(/_rels\/.*$/,"")+R[m][1]),z=R[m][2]):(C="xl/worksheets/sheet"+(m+1-H)+"."+O,C=C.replace(/sheet0\./,"sheet.")),x=C.replace(/^(.*)(\/)([^\/]*)$/,"$1/_rels/$3.rels"),t&&t.sheets!=null)switch(typeof t.sheets){case"number":if(m!=t.sheets)continue e;break;case"string":if(h.SheetNames[m].toLowerCase()!=t.sheets.toLowerCase())continue e;break;default:if(Array.isArray&&Array.isArray(t.sheets)){for(var L=!1,Z=0;Z!=t.sheets.length;++Z)typeof t.sheets[Z]=="number"&&t.sheets[Z]==m&&(L=1),typeof t.sheets[Z]=="string"&&t.sheets[Z].toLowerCase()==h.SheetNames[m].toLowerCase()&&(L=1);if(!L)continue e}}Q2(e,C,x,h.SheetNames[m],m,w,s,z,t,u,l,c)}return p={Directory:i,Workbook:u,Props:h,Custprops:f,Deps:g,Sheets:s,SheetNames:h.SheetNames,Strings:Pi,Styles:c,Themes:l,SSF:dt(we)},t&&t.bookFiles&&(e.files?(p.keys=a,p.files=e.files):(p.keys=[],p.files={},e.FullPaths.forEach(function(se,te){se=se.replace(/^Root Entry[\/]/,""),p.keys.push(se),p.files[se]=e.FileIndex[te]}))),t&&t.bookVBA&&(i.vba.length>0?p.vbaraw=Qe(e,Kt(i.vba[0]),!0):i.defaults&&i.defaults.bin===hb&&(p.vbaraw=Qe(e,"xl/vbaProject.bin",!0))),p}function t_(e,t){var r=t||{},a="Workbook",i=Se.find(e,a);try{if(a="/!DataSpaces/Version",i=Se.find(e,a),!i||!i.content)throw new Error("ECMA-376 Encrypted file missing "+a);if(Xv(i.content),a="/!DataSpaces/DataSpaceMap",i=Se.find(e,a),!i||!i.content)throw new Error("ECMA-376 Encrypted file missing "+a);var n=Yv(i.content);if(n.length!==1||n[0].comps.length!==1||n[0].comps[0].t!==0||n[0].name!=="StrongEncryptionDataSpace"||n[0].comps[0].v!=="EncryptedPackage")throw new Error("ECMA-376 Encrypted file bad "+a);if(a="/!DataSpaces/DataSpaceInfo/StrongEncryptionDataSpace",i=Se.find(e,a),!i||!i.content)throw new Error("ECMA-376 Encrypted file missing "+a);var s=qv(i.content);if(s.length!=1||s[0]!="StrongEncryptionTransform")throw new Error("ECMA-376 Encrypted file bad "+a);if(a="/!DataSpaces/TransformInfo/StrongEncryptionTransform/!Primary",i=Se.find(e,a),!i||!i.content)throw new Error("ECMA-376 Encrypted file missing "+a);Jv(i.content)}catch{}if(a="/EncryptionInfo",i=Se.find(e,a),!i||!i.content)throw new Error("ECMA-376 Encrypted file missing "+a);var o=Qv(i.content);if(a="/EncryptedPackage",i=Se.find(e,a),!i||!i.content)throw new Error("ECMA-376 Encrypted file missing "+a);if(o[0]==4&&typeof decrypt_agile<"u")return decrypt_agile(o[1],i.content,r.password||"",r);if(o[0]==2&&typeof decrypt_std76<"u")return decrypt_std76(o[1],i.content,r.password||"",r);throw new Error("File is password-protected")}function tl(e,t){var r="";switch((t||{}).type||"base64"){case"buffer":return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7]];case"base64":r=Ht(e.slice(0,12));break;case"binary":r=e;break;case"array":return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7]];default:throw new Error("Unrecognized type "+(t&&t.type||"undefined"))}return[r.charCodeAt(0),r.charCodeAt(1),r.charCodeAt(2),r.charCodeAt(3),r.charCodeAt(4),r.charCodeAt(5),r.charCodeAt(6),r.charCodeAt(7)]}function r_(e,t){return Se.find(e,"EncryptedPackage")?t_(e,t):hh(e,t)}function a_(e,t){var r,a=e,i=t||{};return i.type||(i.type=Ae&&Buffer.isBuffer(e)?"buffer":"base64"),r=iu(a,i),e_(r,i)}function gh(e,t){var r=0;e:for(;r<e.length;)switch(e.charCodeAt(r)){case 10:case 13:case 32:++r;break;case 60:return Qs(e.slice(r),t);default:break e}return Ki.to_workbook(e,t)}function i_(e,t){var r="",a=tl(e,t);switch(t.type){case"base64":r=Ht(e);break;case"binary":r=e;break;case"buffer":r=e.toString("binary");break;case"array":r=ka(e);break;default:throw new Error("Unrecognized type "+t.type)}return a[0]==239&&a[1]==187&&a[2]==191&&(r=Be(r)),t.type="binary",gh(r,t)}function n_(e,t){var r=e;return t.type=="base64"&&(r=Ht(r)),r=Wi.utils.decode(1200,r.slice(2),"str"),t.type="binary",gh(r,t)}function s_(e){return e.match(/[^\x00-\x7F]/)?_i(e):e}function Ls(e,t,r,a){return a?(r.type="string",Ki.to_workbook(e,r)):Ki.to_workbook(t,r)}function ao(e,t){z0();var r=t||{};if(typeof ArrayBuffer<"u"&&e instanceof ArrayBuffer)return ao(new Uint8Array(e),(r=dt(r),r.type="array",r));typeof Uint8Array<"u"&&e instanceof Uint8Array&&!r.type&&(r.type=typeof Deno<"u"?"buffer":"array");var a=e,i=[0,0,0,0],n=!1;if(r.cellStyles&&(r.cellNF=!0,r.sheetStubs=!0),ja={},r.dateNF&&(ja.dateNF=r.dateNF),r.type||(r.type=Ae&&Buffer.isBuffer(e)?"buffer":"base64"),r.type=="file"&&(r.type=Ae?"buffer":"binary",a=Xg(e),typeof Uint8Array<"u"&&!Ae&&(r.type="array")),r.type=="string"&&(n=!0,r.type="binary",r.codepage=65001,a=s_(e)),r.type=="array"&&typeof Uint8Array<"u"&&e instanceof Uint8Array&&typeof ArrayBuffer<"u"){var s=new ArrayBuffer(3),o=new Uint8Array(s);if(o.foo="bar",!o.foo)return r=dt(r),r.type="array",ao(Io(a),r)}switch((i=tl(a,r))[0]){case 208:if(i[1]===207&&i[2]===17&&i[3]===224&&i[4]===161&&i[5]===177&&i[6]===26&&i[7]===225)return r_(Se.read(a,r),r);break;case 9:if(i[1]<=8)return hh(a,r);break;case 60:return Qs(a,r);case 73:if(i[1]===73&&i[2]===42&&i[3]===0)throw new Error("TIFF Image File is not a spreadsheet");if(i[1]===68)return Pv(a,r);break;case 84:if(i[1]===65&&i[2]===66&&i[3]===76)return Rv.to_workbook(a,r);break;case 80:return i[1]===75&&i[2]<9&&i[3]<9?a_(a,r):Ls(e,a,r,n);case 239:return i[3]===60?Qs(a,r):Ls(e,a,r,n);case 255:if(i[1]===254)return n_(a,r);if(i[1]===0&&i[2]===2&&i[3]===0)return Ii.to_workbook(a,r);break;case 0:if(i[1]===0&&(i[2]>=2&&i[3]===0||i[2]===0&&(i[3]===8||i[3]===9)))return Ii.to_workbook(a,r);break;case 3:case 131:case 139:case 140:return Nc.to_workbook(a,r);case 123:if(i[1]===92&&i[2]===114&&i[3]===116)return hx.to_workbook(a,r);break;case 10:case 13:case 32:return i_(a,r);case 137:if(i[1]===80&&i[2]===78&&i[3]===71)throw new Error("PNG Image File is not a spreadsheet");break}return Dv.indexOf(i[0])>-1&&i[2]<=12&&i[3]<=31?Nc.to_workbook(a,r):Ls(e,a,r,n)}function o_(e,t,r,a,i,n,s,o){var l=pt(r),c=o.defval,u=o.raw||!Object.prototype.hasOwnProperty.call(o,"raw"),h=!0,d=i===1?[]:{};if(i!==1)if(Object.defineProperty)try{Object.defineProperty(d,"__rowNum__",{value:r,enumerable:!1})}catch{d.__rowNum__=r}else d.__rowNum__=r;if(!s||e[r])for(var f=t.s.c;f<=t.e.c;++f){var p=s?e[r][f]:e[a[f]+l];if(p===void 0||p.t===void 0){if(c===void 0)continue;n[f]!=null&&(d[n[f]]=c);continue}var g=p.v;switch(p.t){case"z":if(g==null)break;continue;case"e":g=g==0?null:void 0;break;case"s":case"d":case"b":case"n":break;default:throw new Error("unrecognized type "+p.t)}if(n[f]!=null){if(g==null)if(p.t=="e"&&g===null)d[n[f]]=null;else if(c!==void 0)d[n[f]]=c;else if(u&&g===null)d[n[f]]=null;else continue;else d[n[f]]=u&&(p.t!=="n"||p.t==="n"&&o.rawNumbers!==!1)?g:$r(p,g,o);g!=null&&(h=!1)}}return{row:d,isempty:h}}function io(e,t){if(e==null||e["!ref"]==null)return[];var r={t:"n",v:0},a=0,i=1,n=[],s=0,o="",l={s:{r:0,c:0},e:{r:0,c:0}},c=t||{},u=c.range!=null?c.range:e["!ref"];switch(c.header===1?a=1:c.header==="A"?a=2:Array.isArray(c.header)?a=3:c.header==null&&(a=0),typeof u){case"string":l=Xe(u);break;case"number":l=Xe(e["!ref"]),l.s.r=u;break;default:l=u}a>0&&(i=0);var h=pt(l.s.r),d=[],f=[],p=0,g=0,m=Array.isArray(e),w=l.s.r,C=0,x={};m&&!e[w]&&(e[w]=[]);var D=c.skipHidden&&e["!cols"]||[],M=c.skipHidden&&e["!rows"]||[];for(C=l.s.c;C<=l.e.c;++C)if(!(D[C]||{}).hidden)switch(d[C]=st(C),r=m?e[w][C]:e[d[C]+h],a){case 1:n[C]=C-l.s.c;break;case 2:n[C]=d[C];break;case 3:n[C]=c.header[C-l.s.c];break;default:if(r==null&&(r={w:"__EMPTY",t:"s"}),o=s=$r(r,null,c),g=x[s]||0,!g)x[s]=1;else{do o=s+"_"+g++;while(x[o]);x[s]=g,x[o]=1}n[C]=o}for(w=l.s.r+i;w<=l.e.r;++w)if(!(M[w]||{}).hidden){var O=o_(e,l,w,d,a,n,m,c);(O.isempty===!1||(a===1?c.blankrows!==!1:c.blankrows))&&(f[p++]=O.row)}return f.length=p,f}var Qc=/"/g;function l_(e,t,r,a,i,n,s,o){for(var l=!0,c=[],u="",h=pt(r),d=t.s.c;d<=t.e.c;++d)if(a[d]){var f=o.dense?(e[r]||[])[d]:e[a[d]+h];if(f==null)u="";else if(f.v!=null){l=!1,u=""+(o.rawNumbers&&f.t=="n"?f.v:$r(f,null,o));for(var p=0,g=0;p!==u.length;++p)if((g=u.charCodeAt(p))===i||g===n||g===34||o.forceQuotes){u='"'+u.replace(Qc,'""')+'"';break}u=="ID"&&(u='"ID"')}else f.f!=null&&!f.F?(l=!1,u="="+f.f,u.indexOf(",")>=0&&(u='"'+u.replace(Qc,'""')+'"')):u="";c.push(u)}return o.blankrows===!1&&l?null:c.join(s)}function mh(e,t){var r=[],a=t??{};if(e==null||e["!ref"]==null)return"";var i=Xe(e["!ref"]),n=a.FS!==void 0?a.FS:",",s=n.charCodeAt(0),o=a.RS!==void 0?a.RS:`
`,l=o.charCodeAt(0),c=new RegExp((n=="|"?"\\|":n)+"+$"),u="",h=[];a.dense=Array.isArray(e);for(var d=a.skipHidden&&e["!cols"]||[],f=a.skipHidden&&e["!rows"]||[],p=i.s.c;p<=i.e.c;++p)(d[p]||{}).hidden||(h[p]=st(p));for(var g=0,m=i.s.r;m<=i.e.r;++m)(f[m]||{}).hidden||(u=l_(e,i,m,h,s,l,n,a),u!=null&&(a.strip&&(u=u.replace(c,"")),(u||a.blankrows!==!1)&&r.push((g++?o:"")+u)));return delete a.dense,r.join("")}function c_(e,t){t||(t={}),t.FS="	",t.RS=`
`;var r=mh(e,t);return r}function u_(e){var t="",r,a="";if(e==null||e["!ref"]==null)return[];var i=Xe(e["!ref"]),n="",s=[],o,l=[],c=Array.isArray(e);for(o=i.s.c;o<=i.e.c;++o)s[o]=st(o);for(var u=i.s.r;u<=i.e.r;++u)for(n=pt(u),o=i.s.c;o<=i.e.c;++o)if(t=s[o]+n,r=c?(e[u]||[])[o]:e[t],a="",r!==void 0){if(r.F!=null){if(t=r.F,!r.f)continue;a=r.f,t.indexOf(":")==-1&&(t=t+":"+t)}if(r.f!=null)a=r.f;else{if(r.t=="z")continue;if(r.t=="n"&&r.v!=null)a=""+r.v;else if(r.t=="b")a=r.v?"TRUE":"FALSE";else if(r.w!==void 0)a="'"+r.w;else{if(r.v===void 0)continue;r.t=="s"?a="'"+r.v:a=""+r.v}}l[l.length]=t+"="+a}return l}function vh(e,t,r){var a=r||{},i=+!a.skipHeader,n=e||{},s=0,o=0;if(n&&a.origin!=null)if(typeof a.origin=="number")s=a.origin;else{var l=typeof a.origin=="string"?Ft(a.origin):a.origin;s=l.r,o=l.c}var c,u={s:{c:0,r:0},e:{c:o,r:s+t.length-1+i}};if(n["!ref"]){var h=Xe(n["!ref"]);u.e.c=Math.max(u.e.c,h.e.c),u.e.r=Math.max(u.e.r,h.e.r),s==-1&&(s=h.e.r+1,u.e.r=s+t.length-1+i)}else s==-1&&(s=0,u.e.r=t.length-1+i);var d=a.header||[],f=0;t.forEach(function(g,m){wr(g).forEach(function(w){(f=d.indexOf(w))==-1&&(d[f=d.length]=w);var C=g[w],x="z",D="",M=xe({c:o+f,r:s+m+i});c=Ji(n,M),C&&typeof C=="object"&&!(C instanceof Date)?n[M]=C:(typeof C=="number"?x="n":typeof C=="boolean"?x="b":typeof C=="string"?x="s":C instanceof Date?(x="d",a.cellDates||(x="n",C=Ot(C)),D=a.dateNF||we[14]):C===null&&a.nullError&&(x="e",C=0),c?(c.t=x,c.v=C,delete c.w,delete c.R,D&&(c.z=D)):n[M]=c={t:x,v:C},D&&(c.z=D))})}),u.e.c=Math.max(u.e.c,o+d.length-1);var p=pt(s);if(i)for(f=0;f<d.length;++f)n[st(f+o)+p]={t:"s",v:d[f]};return n["!ref"]=Fe(u),n}function h_(e,t){return vh(null,e,t)}function Ji(e,t,r){if(typeof t=="string"){if(Array.isArray(e)){var a=Ft(t);return e[a.r]||(e[a.r]=[]),e[a.r][a.c]||(e[a.r][a.c]={t:"z"})}return e[t]||(e[t]={t:"z"})}return typeof t!="number"?Ji(e,xe(t)):Ji(e,xe({r:t,c:r||0}))}function f_(e,t){if(typeof t=="number"){if(t>=0&&e.SheetNames.length>t)return t;throw new Error("Cannot find sheet # "+t)}else if(typeof t=="string"){var r=e.SheetNames.indexOf(t);if(r>-1)return r;throw new Error("Cannot find sheet name |"+t+"|")}else throw new Error("Cannot find sheet |"+t+"|")}function rl(){return{SheetNames:[],Sheets:{}}}function al(e,t,r,a){var i=1;if(!r)for(;i<=65535&&e.SheetNames.indexOf(r="Sheet"+i)!=-1;++i,r=void 0);if(!r||e.SheetNames.length>=65535)throw new Error("Too many worksheets");if(a&&e.SheetNames.indexOf(r)>=0){var n=r.match(/(^.*?)(\d+)$/);i=n&&+n[2]||0;var s=n&&n[1]||r;for(++i;i<=65535&&e.SheetNames.indexOf(r=s+i)!=-1;++i);}if(qy(r),e.SheetNames.indexOf(r)>=0)throw new Error("Worksheet with name |"+r+"| already exists!");return e.SheetNames.push(r),e.Sheets[r]=t,r}function d_(e,t,r){e.Workbook||(e.Workbook={}),e.Workbook.Sheets||(e.Workbook.Sheets=[]);var a=f_(e,t);switch(e.Workbook.Sheets[a]||(e.Workbook.Sheets[a]={}),r){case 0:case 1:case 2:break;default:throw new Error("Bad sheet visibility setting "+r)}e.Workbook.Sheets[a].Hidden=r}function p_(e,t){return e.z=t,e}function xh(e,t,r){return t?(e.l={Target:t},r&&(e.l.Tooltip=r)):delete e.l,e}function g_(e,t,r){return xh(e,"#"+t,r)}function m_(e,t,r){e.c||(e.c=[]),e.c.push({t,a:r||"SheetJS"})}function v_(e,t,r,a){for(var i=typeof t!="string"?t:Xe(t),n=typeof t=="string"?t:Fe(t),s=i.s.r;s<=i.e.r;++s)for(var o=i.s.c;o<=i.e.c;++o){var l=Ji(e,s,o);l.t="n",l.F=n,delete l.v,s==i.s.r&&o==i.s.c&&(l.f=r,a&&(l.D=!0))}return e}var x_={encode_col:st,encode_row:pt,encode_cell:xe,encode_range:Fe,decode_col:Vo,decode_row:Uo,split_cell:F1,decode_cell:Ft,decode_range:ii,format_cell:$r,sheet_add_aoa:_u,sheet_add_json:vh,sheet_add_dom:fh,aoa_to_sheet:ni,json_to_sheet:h_,table_to_sheet:dh,table_to_book:P2,sheet_to_csv:mh,sheet_to_txt:c_,sheet_to_json:io,sheet_to_html:I2,sheet_to_formulae:u_,sheet_to_row_object_array:io,sheet_get_cell:Ji,book_new:rl,book_append_sheet:al,book_set_sheet_visibility:d_,cell_set_number_format:p_,cell_set_hyperlink:xh,cell_set_internal_link:g_,cell_add_comment:m_,sheet_set_array_formula:v_,consts:{SHEET_VISIBLE:0,SHEET_HIDDEN:1,SHEET_VERY_HIDDEN:2}},b_=Object.defineProperty,w_=Object.getOwnPropertyDescriptor,ht=(e,t,r,a)=>{for(var i=a>1?void 0:a?w_(t,r):t,n=e.length-1,s;n>=0;n--)(s=e[n])&&(i=(a?s(t,r,i):s(i))||i);return a&&i&&b_(t,r,i),i};let rt=class extends tt{constructor(){super(...arguments),this.events=[],this.groups=[],this.isEditing=!1,this.selectedEventId=null,this.isSubmitting=!1,this.adminView="events",this.isImporting=!1,this.importErrors=[],this.importSuccessMsg=null}connectedCallback(){super.connectedCallback(),this.dispatchEvent(new CustomEvent("change-title",{detail:{title:"Zarządzanie Wydarzeniami"},bubbles:!0,composed:!0}))}async firstUpdated(){await this.fetchData()}async fetchData(){try{const[e,t]=await Promise.all([fetch("http://localhost:3000/api/events/all"),fetch("http://localhost:3000/api/groups")]);this.events=await e.json(),this.groups=await t.json()}catch(e){console.error("Błąd pobierania danych:",e)}}openAddDialog(){this.isEditing=!1,this.selectedEventId=null,this.dialog.show(),setTimeout(()=>{this.resetForm(),this.adminView==="intentions"&&(this.inputTitle.value="Intencja: ")},0)}async handleEdit(e){this.isEditing=!0,this.selectedEventId=e.id,this.dialog.show(),setTimeout(()=>{this.inputTitle.value=e.title,this.inputDate.value=e.startTime.substring(0,16),this.inputDescription.value=e.description||"",this.inputLocation.value=e.location||"",this.inputGroup.value=e.groupId?.toString()||""},50)}async handleDelete(e){if(confirm("Czy na pewno chcesz usunąć to wydarzenie?"))try{(await fetch(`http://localhost:3000/api/events/${e}`,{method:"DELETE"})).ok&&await this.fetchData()}catch(t){console.error(t)}}async saveEvent(){if(!this.inputTitle.value||!this.inputDate.value){alert("Proszę wypełnić wymagane pola: Tytuł oraz Datę!");return}if(this.isSubmitting)return;this.isSubmitting=!0;let e=null;const t=this.inputGroup.value;t&&t.toString().trim()!==""&&t!=="null"&&(e=Number(t));const r={title:this.inputTitle.value,startTime:new Date(this.inputDate.value).toISOString(),description:this.inputDescription.value,location:this.inputLocation.value,groupId:e},a=this.isEditing?`http://localhost:3000/api/events/${this.selectedEventId}`:"http://localhost:3000/api/events",i=this.isEditing?"PUT":"POST";try{(await fetch(a,{method:i,headers:{"Content-Type":"application/json"},body:JSON.stringify(r)})).ok?(this.dialog.hide(),await this.fetchData()):alert("Wystąpił błąd podczas zapisywania wydarzenia.")}catch(n){console.error(n),alert("Nie udało się połączyć z serwerem.")}finally{this.isSubmitting=!1}}resetForm(){this.inputTitle.value="",this.inputDate.value="",this.inputDescription.value="",this.inputLocation.value="",this.inputGroup.value=""}openExcelDrawer(){this.importErrors=[],this.importSuccessMsg=null,this.fileInput&&(this.fileInput.value=""),this.drawer.show()}triggerFileSelect(){this.fileInput.click()}handleFileUpload(e){const t=e.target.files?.[0];if(!t)return;this.isImporting=!0,this.importErrors=[],this.importSuccessMsg=null;const r=new FileReader;r.onload=async a=>{try{const i=a.target?.result,n=ao(i,{type:"binary",cellDates:!0}),s=n.SheetNames[0],o=n.Sheets[s],l=x_.sheet_to_json(o,{header:1}),c=[];for(let h=1;h<l.length;h++){const d=l[h];if(!d||d.length===0)continue;const f=d[0],p=d[1],g=d[2],m=d[3];if(!f&&!p&&!g)continue;if(!f||!p||!g){this.importErrors.push(`Wiersz ${h+1}: Brakuje daty, godziny lub treści intencji!`);continue}let w="";if(f instanceof Date)w=f.toISOString().split("T")[0];else if(typeof f=="string"){const O=f.includes(".")?f.split("."):f.split("-");O.length===3&&(w=f.includes(".")?`${O[2]}-${O[1]}-${O[0]}`:f)}let C="";if(p instanceof Date)C=p.toISOString().split("T")[1].substring(0,5);else if(typeof p=="string")C=p.replace(".",":");else if(typeof p=="number"){const O=Math.round(p*24*3600),E=Math.floor(O/3600),B=Math.floor(O%3600/60);C=`${E.toString().padStart(2,"0")}:${B.toString().padStart(2,"0")}`}if(!w||!C||w.length<10){this.importErrors.push(`Wiersz ${h+1}: Zły format daty (${f}) lub godziny (${p}).`);continue}const x=new Date(`${w}T${C}:00`).toISOString(),D=`Intencja: ${g}`,M=m?`Od kogo: ${m}`:"";c.push({title:D,description:M,startTime:x})}if(this.importErrors.length>0){this.isImporting=!1;return}if(c.length===0){this.importErrors.push("Nie znaleziono żadnych danych do zaimportowania."),this.isImporting=!1;return}const u=await fetch("http://localhost:3000/api/events/bulk",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({events:c})});if(u.ok){const h=await u.json();this.importSuccessMsg=h.message,await this.fetchData()}else this.importErrors.push("Serwer odrzucił dane. Spróbuj ponownie.")}catch(i){this.importErrors.push("Wystąpił błąd czytania pliku. Upewnij się, że to czysty plik .xlsx!"),console.error(i)}finally{this.isImporting=!1}},r.readAsBinaryString(t)}renderEventList(e,t=!1){return e.map(r=>K`
      <div class="event-card ${t?"archive-card":""}">
        <div class="event-info">
          <h4>${r.title}</h4>
          <p>
            ${new Date(r.startTime).toLocaleString("pl-PL",{dateStyle:"medium",timeStyle:"short"})}
            | ${r.location||"Brak lokalizacji"}
          </p>
          ${r.groupId?K`<sl-badge variant="neutral">${this.groups.find(a=>a.id===r.groupId)?.name}</sl-badge>`:""}
        </div>
        <div class="actions">
          <sl-button size="small" variant="default" @click=${()=>this.handleEdit(r)}>
             <sl-icon slot="prefix" name="pencil"></sl-icon> Edytuj
          </sl-button>
          <sl-button size="small" variant="danger" outline @click=${()=>this.handleDelete(r.id)}>
             <sl-icon slot="prefix" name="trash"></sl-icon> Usuń
          </sl-button>
        </div>
      </div>
    `)}render(){const e=new Date,t=n=>n.title.startsWith("Intencja:"),r=this.events.filter(n=>this.adminView==="intentions"?t(n):!t(n)),a=r.filter(n=>new Date(n.startTime)>=e),i=r.filter(n=>new Date(n.startTime)<e);return K`
      <div style="display: flex; justify-content: center; margin-bottom: 25px;">
        <sl-radio-group value=${this.adminView} @sl-change=${n=>{this.adminView=n.target.value,this.requestUpdate()}}>
          <sl-radio-button value="events">Zarządzaj Wydarzeniami</sl-radio-button>
          <sl-radio-button value="intentions">Zarządzaj Intencjami</sl-radio-button>
        </sl-radio-group>
      </div>

      <div class="header-actions">
        <h2>${this.adminView==="events"?"Lista Wydarzeń":"Lista Intencji Mszalnych"}</h2>

        <div style="display: flex; gap: 10px;">
          ${this.adminView==="intentions"?K`
            <sl-button variant="success" outline @click=${this.openExcelDrawer}>
              <sl-icon slot="prefix" name="file-earmark-excel"></sl-icon> Wgraj z Excela
            </sl-button>
          `:""}
          <sl-button variant="primary" @click=${this.openAddDialog}>
            <sl-icon slot="prefix" name="plus-lg"></sl-icon> Dodaj ręcznie
          </sl-button>
        </div>
      </div>

      <div class="section-title">
        <sl-icon name="calendar-check"></sl-icon> Nadchodzące i Aktywne
      </div>
      ${a.length?this.renderEventList(a):K`<p>Brak zaplanowanych pozycji.</p>`}

      <sl-divider></sl-divider>

      <div class="section-title">
        <sl-icon name="archive"></sl-icon> Archiwum (Zakończone)
      </div>
      ${i.length?this.renderEventList(i,!0):K`<p>Archiwum jest puste.</p>`}

      <sl-dialog label="${this.isEditing?"Edytuj":"Nowy Wpis"}">
        <form>
          <sl-input id="form-title" label="Tytuł" required></sl-input>
          <sl-input id="form-date" type="datetime-local" label="Data i godzina" required></sl-input>
          <sl-input id="form-location" label="Miejsce"></sl-input>
          <sl-select id="form-group" label="Grupa (opcjonalnie)" clearable>
            ${this.groups.map(n=>K`<sl-option value="${n.id}">${n.name}</sl-option>`)}
          </sl-select>
          <sl-textarea id="form-description" label="Opis"></sl-textarea>
        </form>
        <sl-button slot="footer" variant="primary" @click=${this.saveEvent} ?loading=${this.isSubmitting}>
          ${this.isEditing?"Zapisz zmiany":"Dodaj"}
        </sl-button>
      </sl-dialog>

      <sl-drawer label="Import Intencji z pliku Excel" class="drawer-overview">
        <div class="upload-container">
          <div class="instructions">
            <strong>Jak przygotować plik Excel (.xlsx)?</strong>
            <p style="margin-top: 5px; font-size: 0.9rem;">Pierwszy wiersz (nagłówek) zostanie zignorowany. Ułóż dane w następujących kolumnach:</p>
            <ul>
              <li><strong>Kolumna A:</strong> Data (np. 15.05.2024 lub 2024-05-15)</li>
              <li><strong>Kolumna B:</strong> Godzina (np. 18:00)</li>
              <li><strong>Kolumna C:</strong> Treść intencji (np. "Za śp. Jana")</li>
              <li><strong>Kolumna D:</strong> Od kogo (Opcjonalnie, np. "od żony")</li>
            </ul>
          </div>
          <input type="file" id="excel-upload" accept=".xlsx, .xls" style="display: none;" @change=${this.handleFileUpload}>

          ${this.importSuccessMsg?"":K`
            <sl-button variant="primary" size="large" @click=${this.triggerFileSelect} ?loading=${this.isImporting}>
              <sl-icon slot="prefix" name="upload"></sl-icon> Wybierz plik z komputera
            </sl-button>
          `}

          ${this.importErrors.length>0?K`
            <div class="error-box">
              <strong>Znaleziono błędy w pliku:</strong>
              <ul>${this.importErrors.map(n=>K`<li>${n}</li>`)}</ul>
            </div>
          `:""}

          ${this.importSuccessMsg?K`
            <sl-alert variant="success" open>
              <sl-icon slot="icon" name="check2-circle"></sl-icon>
              <strong>Sukces!</strong><br />${this.importSuccessMsg}
            </sl-alert>
          `:""}
        </div>
        <sl-button slot="footer" variant="default" @click=${()=>this.drawer.hide()}>Zamknij</sl-button>
      </sl-drawer>
    `}};rt.styles=[Pt,ye`
      :host { display: block; padding: 20px; max-width: 900px; margin: 0 auto; }
      .header-actions { display: flex; justify-content: space-between; align-items: center; margin-bottom: 30px; flex-wrap: wrap; gap: 10px;}
      .event-card { background: var(--color-sand-light); border: 1px solid var(--color-wood-medium); border-radius: 8px; padding: 15px; margin-bottom: 15px; display: flex; justify-content: space-between; align-items: center; }
      .event-info h4 { margin: 0; color: var(--color-wood-dark); }
      .event-info p { margin: 5px 0 0 0; font-size: 0.9rem; color: #666; }
      .actions { display: flex; gap: 10px; }
      .section-title { color: var(--color-wood-dark); margin: 40px 0 20px 0; font-size: 1.2rem; display: flex; align-items: center; gap: 10px; }
      .archive-card { opacity: 0.7; filter: grayscale(0.5); }
      form { display: flex; flex-direction: column; gap: 15px; }

      /* Style dla importu Excela */
      .upload-container { display: flex; flex-direction: column; gap: 20px; padding: 10px; }
      .instructions { background-color: var(--color-sand-light); padding: 15px; border-left: 4px solid var(--color-wood-dark); border-radius: 4px; }
      .instructions ul { margin: 10px 0 0 0; padding-left: 20px; color: #444; }
      .error-box { color: #b91c1c; background-color: #fef2f2; border: 1px solid #f87171; padding: 10px; border-radius: 6px; font-size: 0.9rem; }
      .error-box ul { margin: 5px 0 0 0; padding-left: 15px; }

      @media (max-width: 600px) {
        .event-card { flex-direction: column; align-items: flex-start; gap: 15px; }
        .actions { width: 100%; justify-content: flex-end; }
      }
    `];ht([fe()],rt.prototype,"events",2);ht([fe()],rt.prototype,"groups",2);ht([fe()],rt.prototype,"isEditing",2);ht([fe()],rt.prototype,"selectedEventId",2);ht([fe()],rt.prototype,"isSubmitting",2);ht([fe()],rt.prototype,"adminView",2);ht([fe()],rt.prototype,"isImporting",2);ht([fe()],rt.prototype,"importErrors",2);ht([fe()],rt.prototype,"importSuccessMsg",2);ht([me("#form-title")],rt.prototype,"inputTitle",2);ht([me("#form-date")],rt.prototype,"inputDate",2);ht([me("#form-description")],rt.prototype,"inputDescription",2);ht([me("#form-location")],rt.prototype,"inputLocation",2);ht([me("#form-group")],rt.prototype,"inputGroup",2);ht([me("sl-dialog")],rt.prototype,"dialog",2);ht([me("sl-drawer")],rt.prototype,"drawer",2);ht([me("#excel-upload")],rt.prototype,"fileInput",2);rt=ht([Rt("app-admin-events")],rt);var y_=Object.defineProperty,__=Object.getOwnPropertyDescriptor,gs=(e,t,r,a)=>{for(var i=a>1?void 0:a?__(t,r):t,n=e.length-1,s;n>=0;n--)(s=e[n])&&(i=(a?s(t,r,i):s(i))||i);return a&&i&&y_(t,r,i),i};let Za=class extends tt{constructor(){super(...arguments),this.questions=[],this.isSubmitting=!1,this.editingPublishedId=null}async firstUpdated(){await this.fetchQuestions()}async fetchQuestions(){try{const e=await fetch("http://localhost:3000/api/questions/all");this.questions=await e.json()}catch(e){console.error(e)}}async handleSave(e){const r=this.shadowRoot?.getElementById(`answer-${e}`)?.value;if(!r||r.trim()===""){alert("Odpowiedź nie może być pusta!");return}this.isSubmitting=!0;try{(await fetch(`http://localhost:3000/api/questions/${e}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({answer:r,isPublished:!0})})).ok&&(this.editingPublishedId=null,await this.fetchQuestions())}catch{alert("Błąd podczas zapisywania.")}finally{this.isSubmitting=!1}}async handleDelete(e){if(confirm("Czy na pewno usunąć to pytanie?"))try{(await fetch(`http://localhost:3000/api/questions/${e}`,{method:"DELETE"})).ok&&await this.fetchQuestions()}catch(t){console.error(t)}}render(){const e=this.questions.filter(r=>!r.isPublished),t=this.questions.filter(r=>r.isPublished);return K`
      <div class="header">
        <h2>Panel Zarządzania Q&A</h2>
      </div>

      <h3 style="color: var(--color-wood-dark);">Nowe pytania (${e.length})</h3>
      ${e.length===0?K`<p>Brak nowych pytań od parafian.</p>`:""}

      ${e.map(r=>K`
        <div class="question-card" style="border-left: 5px solid #d97706;">
          <div class="q-header">
            <sl-badge variant="warning">Nowe</sl-badge>
            <span class="date">${new Date(r.createdAt).toLocaleString("pl-PL")}</span>
          </div>
          <div class="content">
            <sl-icon name="person-circle"></sl-icon>
            <strong>${r.author?r.author:"Anonimowy"}:</strong> ${r.content}
          </div>

          <sl-textarea id="answer-${r.id}" placeholder="Twoja odpowiedź..." rows="3"></sl-textarea>

          <div class="actions">
            <sl-button size="small" variant="danger" outline @click=${()=>this.handleDelete(r.id)}>Usuń</sl-button>
            <sl-button size="small" variant="success" ?loading=${this.isSubmitting} @click=${()=>this.handleSave(r.id)}>
               Odpowiedz i publikuj
            </sl-button>
          </div>
        </div>
      `)}

      <sl-divider></sl-divider>

      <h3 style="color: var(--color-wood-dark);">Opublikowane odpowiedzi (${t.length})</h3>

      ${t.map(r=>K`
        <div class="question-card">
          <div class="q-header">
            <sl-badge variant="success">Widoczne dla wszystkich</sl-badge>
            <span class="date">${new Date(r.createdAt).toLocaleString("pl-PL")}</span>
          </div>
          <div class="content">
            <sl-icon name="person-circle"></sl-icon>
            <strong>${r.author?r.author:"Anonimowy"}:</strong> ${r.content}
          </div>

          ${this.editingPublishedId===r.id?K`
            <sl-textarea id="answer-${r.id}" .value=${r.answer||""} rows="3"></sl-textarea>
            <div class="actions">
              <sl-button size="small" @click=${()=>this.editingPublishedId=null}>Anuluj</sl-button>
              <sl-button size="small" variant="success" ?loading=${this.isSubmitting} @click=${()=>this.handleSave(r.id)}>
                Zapisz poprawkę
              </sl-button>
            </div>
          `:K`
            <div class="answer-section">
               <strong>Odpowiedź duszpasterza:</strong><br/>
               ${r.answer}
            </div>
            <div class="actions">
              <sl-button size="small" variant="danger" outline @click=${()=>this.handleDelete(r.id)}>Usuń</sl-button>
              <sl-button size="small" variant="default" @click=${()=>this.editingPublishedId=r.id}>
                <sl-icon slot="prefix" name="pencil"></sl-icon> Edytuj treść
              </sl-button>
            </div>
          `}
        </div>
      `)}
    `}};Za.styles=[Pt,ye`
      :host { display: block; padding: 10px 0; }

      p { color: var(--color-wood-dark); }

      .header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 25px; }
      .header h2 { margin: 0; color: var(--color-wood-dark); font-size: 1.3rem; }

      .question-card {
        background: var(--color-sand-light);
        border: 1px solid var(--color-wood-medium);
        border-radius: 8px;
        padding: 15px;
        margin-bottom: 15px;
      }

      .q-header { display: flex; justify-content: space-between; margin-bottom: 10px; }
      .date { font-size: 0.85rem; color: #666; }
      .content { font-size: 1.1rem; color: var(--color-wood-dark); font-weight: 500; margin-bottom: 15px; }

      .answer-section {
        background: rgba(255,255,255,0.6);
        padding: 12px;
        border-radius: 6px;
        margin-bottom: 10px;
        color: var(--color-wood-dark);
        border-left: 3px solid #198754;
      }

      .actions { display: flex; gap: 10px; justify-content: flex-end; margin-top: 10px;}
    `];gs([fe()],Za.prototype,"questions",2);gs([fe()],Za.prototype,"isSubmitting",2);gs([fe()],Za.prototype,"editingPublishedId",2);Za=gs([Rt("app-admin-qa")],Za);var k_=Object.getOwnPropertyDescriptor,E_=(e,t,r,a)=>{for(var i=a>1?void 0:a?k_(t,r):t,n=e.length-1,s;n>=0;n--)(s=e[n])&&(i=s(i)||i);return i};let no=class extends tt{connectedCallback(){super.connectedCallback(),this.dispatchEvent(new CustomEvent("change-title",{detail:{title:"Panel Administratora"},bubbles:!0,composed:!0}))}render(){return K`
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

          <sl-tab slot="nav" panel="qa">
            <sl-icon name="patch-question" style="margin-right: 8px;"></sl-icon> Q&A
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

          <sl-tab-panel name="qa">
            <app-admin-qa></app-admin-qa>
          </sl-tab-panel>

        </sl-tab-group>
      </div>
    `}};no.styles=[Pt,ye`
      :host {
        display: block;
        padding: 20px;
        max-width: 900px;
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
    `];no=E_([Rt("app-admin")],no);var T_=Object.defineProperty,A_=Object.getOwnPropertyDescriptor,pn=(e,t,r,a)=>{for(var i=a>1?void 0:a?A_(t,r):t,n=e.length-1,s;n>=0;n--)(s=e[n])&&(i=(a?s(t,r,i):s(i))||i);return a&&i&&T_(t,r,i),i};let Ta=class extends tt{constructor(){super(...arguments),this.groupId=null,this.group=null,this.events=[],this.isLoading=!0}connectedCallback(){super.connectedCallback();const t=new URLSearchParams(window.location.search).get("id");t&&(this.groupId=parseInt(t,10))}async firstUpdated(){this.groupId?await this.fetchGroupDetails():this.isLoading=!1}async fetchGroupDetails(){try{const e=await fetch("http://localhost:3000/api/groups");if(e.ok){const r=await e.json();this.group=r.find(a=>a.id===this.groupId)||null,this.group&&this.dispatchEvent(new CustomEvent("change-title",{detail:{title:this.group.name},bubbles:!0,composed:!0}))}const t=await fetch("http://localhost:3000/api/events");if(t.ok){const r=await t.json();this.events=r.filter(a=>a.groupId===this.groupId)}}catch(e){console.error("Błąd podczas pobierania danych:",e)}finally{this.isLoading=!1}}formatDate(e){return new Date(e).toLocaleDateString("pl-PL",{weekday:"long",day:"numeric",month:"long",hour:"2-digit",minute:"2-digit"})}render(){return this.isLoading?K`
        <div class="center-content">
          <sl-spinner style="font-size: 2rem;"></sl-spinner>
        </div>
      `:this.group?K`
      <div class="header-section">
        <div class="group-photo-large">
          ${this.group.photoUrl?K`<img src="${this.group.photoUrl}" style="width: 100%; height: 100%; border-radius: 50%; object-fit: cover;" />`:K`<sl-icon name="people-fill"></sl-icon>`}
        </div>
        <h2 class="group-name">${this.group.name}</h2>
        ${this.group.description?K`<p class="group-description">${this.group.description}</p>`:K`<p class="group-description">Ta grupa nie ma jeszcze opisu.</p>`}
      </div>

      <div class="events-section">
        <h3 class="section-title">Wydarzenia grupy</h3>

        ${this.events.length===0?K`<p style="color: #7F451D; text-align: center;">Brak nadchodzących wydarzeń dla tej grupy.</p>`:K`
              <div class="events-list">
                ${this.events.map(e=>{const t=this.formatDate(e.startTime);return K`
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
    `:K`
        <div class="center-content">
          <p>Nie znaleziono takiej grupy.</p>
        </div>
      `}};Ta.styles=[Pt,ye`
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
    `];pn([fe()],Ta.prototype,"groupId",2);pn([fe()],Ta.prototype,"group",2);pn([fe()],Ta.prototype,"events",2);pn([fe()],Ta.prototype,"isLoading",2);Ta=pn([Rt("app-group-detail")],Ta);var C_=Object.defineProperty,S_=Object.getOwnPropertyDescriptor,gn=(e,t,r,a)=>{for(var i=a>1?void 0:a?S_(t,r):t,n=e.length-1,s;n>=0;n--)(s=e[n])&&(i=(a?s(t,r,i):s(i))||i);return a&&i&&C_(t,r,i),i};let Aa=class extends tt{constructor(){super(...arguments),this.mainAnnouncements=[],this.archive=[],this.showArchive=!1,this.isLoading=!0}connectedCallback(){super.connectedCallback();const e=new CustomEvent("change-title",{detail:{title:"Ogłoszenia Parafialne"},bubbles:!0,composed:!0});this.dispatchEvent(e)}async firstUpdated(){try{const e=await fetch("http://localhost:3000/api/announcements");if(e.ok){const t=await e.json();this.mainAnnouncements=t.filter(r=>r.isMain),this.archive=t.filter(r=>!r.isMain).sort((r,a)=>new Date(a.date).getTime()-new Date(r.date).getTime())}}finally{this.isLoading=!1}}formatDate(e){return new Date(e).toLocaleDateString("pl-PL",{day:"numeric",month:"long",year:"numeric"})}render(){return this.isLoading?K`<div style="text-align:center; padding: 40px;"><sl-spinner style="font-size: 2rem; --indicator-color: var(--color-wood-medium);"></sl-spinner></div>`:K`
      <div>
        ${this.mainAnnouncements.map(e=>K`
          <div class="paper">
            <h2 class="title">${e.title}</h2>
            <span class="date">${this.formatDate(e.date)}</span>
            <sl-divider style="--color: var(--color-wood-medium);"></sl-divider>
            <div class="content">${e.content}</div>
          </div>
        `)}

        ${this.mainAnnouncements.length===0?K`
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

        ${this.showArchive?K`
          <div class="archive-list">
            ${this.archive.map(e=>K`
              <div class="archive-item">
                <h4 style="margin:0; color: var(--color-wood-dark);">${e.title}</h4>
                <small style="color: var(--color-wood-medium);">${this.formatDate(e.date)}</small>
                <p class="content" style="font-size: 0.95rem; margin-top: 10px;">${e.content}</p>
              </div>
            `)}
          </div>
        `:""}
      </div>
    `}};Aa.styles=[Pt,ye`
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
    `];gn([fe()],Aa.prototype,"mainAnnouncements",2);gn([fe()],Aa.prototype,"archive",2);gn([fe()],Aa.prototype,"showArchive",2);gn([fe()],Aa.prototype,"isLoading",2);Aa=gn([Rt("app-announcements")],Aa);var F_=Object.defineProperty,D_=Object.getOwnPropertyDescriptor,il=(e,t,r,a)=>{for(var i=a>1?void 0:a?D_(t,r):t,n=e.length-1,s;n>=0;n--)(s=e[n])&&(i=(a?s(t,r,i):s(i))||i);return a&&i&&F_(t,r,i),i};const O_="/mParafia/";$s(`${O_}shoelace-assets`);let Qi=class extends tt{constructor(){super(...arguments),this.pageTitle="mParafia",this.touchStartX=0,this.touchStartY=0,this.touchEndX=0,this.touchEndY=0,this.handleTouchStart=e=>{this.touchStartX=e.changedTouches[0].screenX,this.touchStartY=e.changedTouches[0].screenY},this.handleTouchMove=e=>{this.touchStartX<=30&&e.preventDefault()},this.handleTouchEnd=e=>{this.touchEndX=e.changedTouches[0].screenX,this.touchEndY=e.changedTouches[0].screenY,this.checkSwipe()}}connectedCallback(){super.connectedCallback(),window.addEventListener("touchstart",this.handleTouchStart,{passive:!0}),window.addEventListener("touchmove",this.handleTouchMove,{passive:!1}),window.addEventListener("touchend",this.handleTouchEnd,{passive:!0})}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("touchstart",this.handleTouchStart),window.removeEventListener("touchmove",this.handleTouchMove),window.removeEventListener("touchend",this.handleTouchEnd)}checkSwipe(){const e=this.touchEndX-this.touchStartX,t=this.touchEndY-this.touchStartY;if(Math.abs(t)>Math.abs(e))return;this.touchStartX<=40&&e>50&&this.drawer&&!this.drawer.open&&this.drawer.show(),this.drawer&&this.drawer.open&&e<-50&&this.drawer.hide()}firstUpdated(){const e=this.shadowRoot?.querySelector("#router-outlet"),t="/mParafia/";new Md(e,{baseUrl:t}).setRoutes([{path:"/",component:"app-home"},{path:"/kalendarz",component:"app-calendar"},{path:"/grupy",component:"app-groups"},{path:"/wydarzenia",component:"app-events"},{path:"/mock-event",component:"app-event-mock-detail"},{path:"/grupa",component:"app-group-detail"},{path:"/admin",component:"app-admin"},{path:"/admin/events",component:"app-admin-events"},{path:"/ogloszenia",component:"app-announcements"},{path:"/qa",component:"app-qa"},{path:"(.*)",redirect:"/"}])}handleTitleChange(e){this.pageTitle=e.detail.title}openMenu(){this.drawer.show()}handleNavigation(e){this.drawer.hide();const r="/mParafia/"+e.substring(1);window.history.pushState({},"",r),window.dispatchEvent(new PopStateEvent("popstate"))}render(){return K`
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
          <sl-icon-button name="bell" label="Powiadomienia"></sl-icon-button>
        </header>

        <main id="router-outlet" @change-title="${this.handleTitleChange}"> </main>

      </div>
    `}};Qi.styles=[Pt,ye`
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
    `];il([me("sl-drawer")],Qi.prototype,"drawer",2);il([fe()],Qi.prototype,"pageTitle",2);Qi=il([Rt("app-index")],Qi);
//# sourceMappingURL=index-DBsC1urd.js.map
