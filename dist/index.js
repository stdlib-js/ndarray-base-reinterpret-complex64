"use strict";var s=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var u=s(function(m,i){
var v=require('@stdlib/strided-base-reinterpret-complex64/dist'),n=require('@stdlib/ndarray-base-ctor/dist'),p=require('@stdlib/ndarray-base-shape/dist'),q=require('@stdlib/ndarray-base-strides/dist'),g=require('@stdlib/ndarray-base-offset/dist'),d=require('@stdlib/ndarray-base-order/dist'),f=require('@stdlib/ndarray-base-data-buffer/dist'),h=require('@stdlib/blas-base-gscal/dist');function l(e){var r,t,a;return t=p(e,!0),r=q(e,!0),a=t.length,h(a,2,r,1),t.push(2),a===0?r[0]=1:r.push(1),n("float32",v(f(e),0),t,r,g(e)*2,d(e))}i.exports=l
});var o=u();module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
