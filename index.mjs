// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.1-esm/index.mjs";import{isPrimitive as i}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.1-esm/index.mjs";function o(d){var m,l,u,f,p,j,a,h;if(m={iter:79},arguments.length&&(f=function(e,r){if(!t(r))return new TypeError(s("0a32V",r));if(n(r,"iter")){if(e.iter=r.iter,!i(r.iter))return new TypeError(s("0a32t","iter",r.iter));if(r.iter>79)return new RangeError(s("0a34T","iter",r.iter))}return null}(m,d),f))throw f;return p=0,j=1,a=0,h=0,e(l={},"next",(function(){if(h+=1,u||h>m.iter)return{done:!0};1===h?a=0:2===h?a=1:(a=p+j,p=j,j=a);return{value:a,done:!1}})),e(l,"return",(function(e){if(u=!0,arguments.length)return{value:e,done:!0};return{done:!0}})),r&&e(l,r,(function(){return o(m)})),l}export{o as default};
//# sourceMappingURL=index.mjs.map
