"use strict";var u=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var n=u(function(h,a){
var t=require('@stdlib/math-base-assert-is-nan/dist'),c=require('@stdlib/math-base-special-floor/dist'),s=require('@stdlib/math-base-special-log1p/dist'),N=require('@stdlib/math-base-special-pow/dist'),l=require('@stdlib/constants-float64-ninf/dist'),F=require('@stdlib/constants-float64-pinf/dist');function g(r,e){return t(r)||t(e)||e<0||e>1?NaN:r<0?l:r===F?0:(r=c(r),s(-N(1-e,r+1)))}a.exports=g
});var q=u(function(j,f){
var y=require('@stdlib/utils-constant-function/dist'),o=require('@stdlib/math-base-assert-is-nan/dist'),I=require('@stdlib/math-base-special-floor/dist'),d=require('@stdlib/math-base-special-log1p/dist'),w=require('@stdlib/math-base-special-pow/dist'),P=require('@stdlib/constants-float64-ninf/dist'),m=require('@stdlib/constants-float64-pinf/dist');function p(r){if(o(r)||r<0||r>1)return y(NaN);return e;function e(i){return o(i)?NaN:i<0?P:i===m?0:(i=I(i),d(-w(1-r,i+1)))}}f.exports=p
});var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),v=n(),R=q();O(v,"factory",R);module.exports=v;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
