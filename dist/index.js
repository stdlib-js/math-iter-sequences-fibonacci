"use strict";var l=function(t,r){return function(){return r||t((r={exports:{}}).exports,r),r.exports}};var d=l(function(T,c){
var F=require('@stdlib/assert-is-plain-object/dist'),E=require('@stdlib/assert-has-own-property/dist'),P=require('@stdlib/assert-is-nonnegative-integer/dist').isPrimitive,o=require('@stdlib/error-tools-fmtprodmsg/dist');function j(t,r){if(!F(r))return new TypeError(o('0a32V',r));if(E(r,"iter")){if(t.iter=r.iter,!P(r.iter))return new TypeError(o('0a32t',"iter",r.iter));if(r.iter>79)return new RangeError(o('0a34T',"iter",r.iter));}return null}c.exports=j
});var O=l(function(G,p){
var s=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),g=require('@stdlib/symbol-iterator/dist'),N=d(),m=0,q=1;function b(t){var r,i,f,u,v,a,e,n;if(r={iter:79},arguments.length&&(u=N(r,t),u))throw u;return v=m,a=q,e=0,n=0,i={},s(i,"next",h),s(i,"return",w),g&&s(i,g,x),i;function h(){return n+=1,f||n>r.iter?{done:!0}:(n===1?e=m:n===2?e=q:(e=v+a,v=a,a=e),{value:e,done:!1})}function w(y){return f=!0,arguments.length?{value:y,done:!0}:{done:!0}}function x(){return b(r)}}p.exports=b
});var R=O();module.exports=R;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
