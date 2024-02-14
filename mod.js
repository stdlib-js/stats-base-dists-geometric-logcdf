// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function n(r){return"number"==typeof r}function e(r){var t,n="";for(t=0;t<r;t++)n+="0";return n}function a(r,t,n){var a=!1,i=t-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(a=!0,r=r.substr(1)),r=n?r+e(i):e(i)+r,a&&(r="-"+r)),r}var i=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function u(r){var t,e,u;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(e=r.arg,u=parseInt(e,10),!isFinite(u)){if(!n(e))throw new Error("invalid integer. Value: "+e);u=0}return u<0&&("u"===r.specifier||10!==t)&&(u=4294967295+u+1),u<0?(e=(-u).toString(t),r.precision&&(e=a(e,r.precision,r.padRight)),e="-"+e):(e=u.toString(t),u||r.precision?r.precision&&(e=a(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===t&&(r.alternate&&(e="0x"+e),e=r.specifier===o.call(r.specifier)?o.call(e):i.call(e)),8===t&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}function f(r){return"string"==typeof r}var c=Math.abs,l=String.prototype.toLowerCase,p=String.prototype.toUpperCase,s=String.prototype.replace,y=/e\+(\d)$/,v=/e-(\d)$/,g=/^(\d+)$/,d=/^(\d+)e/,w=/\.0$/,h=/\.0*e/,A=/(\..*[^0])0*e/;function b(r){var t,e,a=parseFloat(r.arg);if(!isFinite(a)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+e);a=r.arg}switch(r.specifier){case"e":case"E":e=a.toExponential(r.precision);break;case"f":case"F":e=a.toFixed(r.precision);break;case"g":case"G":c(a)<1e-4?((t=r.precision)>0&&(t-=1),e=a.toExponential(t)):e=a.toPrecision(r.precision),r.alternate||(e=s.call(e,A,"$1e"),e=s.call(e,h,"e"),e=s.call(e,w,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=s.call(e,y,"e+0$1"),e=s.call(e,v,"e-0$1"),r.alternate&&(e=s.call(e,g,"$1."),e=s.call(e,d,"$1.e")),a>=0&&r.sign&&(e=r.sign+e),e=r.specifier===p.call(r.specifier)?p.call(e):l.call(e)}function m(r){var t,n="";for(t=0;t<r;t++)n+=" ";return n}function F(r,t,n){var e=t-r.length;return e<0?r:r=n?r+m(e):m(e)+r}var N=String.fromCharCode,E=isNaN,_=Array.isArray;function I(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function U(r){var t,n,e,i,o,c,l,p,s;if(!_(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",l=1,p=0;p<r.length;p++)if(f(e=r[p]))c+=e;else{if(t=void 0!==e.precision,!(e=I(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+e+"`.");for(e.mapping&&(l=e.mapping),n=e.flags,s=0;s<n.length;s++)switch(i=n.charAt(s)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=n.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===e.width){if(e.width=parseInt(arguments[l],10),l+=1,E(e.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(t&&"*"===e.precision){if(e.precision=parseInt(arguments[l],10),l+=1,E(e.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,t=!1)}switch(e.arg=arguments[l],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(e.padZeros=!1),e.arg=u(e);break;case"s":e.maxWidth=t?e.precision:-1;break;case"c":if(!E(e.arg)){if((o=parseInt(e.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=E(o)?String(e.arg):N(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(e.precision=6),e.arg=b(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=a(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=F(e.arg,e.width,e.padRight)),c+=e.arg||"",l+=1}return c}var j=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function S(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function k(r){var t,n,e,a;for(n=[],a=0,e=j.exec(r);e;)(t=r.slice(a,j.lastIndex-e[0].length)).length&&n.push(t),n.push(S(e)),a=j.lastIndex,e=j.exec(r);return(t=r.slice(a)).length&&n.push(t),n}function x(r){return"string"==typeof r}function O(r){var t,n;if(!x(r))throw new TypeError(O("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=[k(r)],n=1;n<arguments.length;n++)t.push(arguments[n]);return U.apply(null,t)}var H=Object.prototype,T=H.toString,G=H.__defineGetter__,V=H.__defineSetter__,W=H.__lookupGetter__,L=H.__lookupSetter__;var $=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,n){var e,a,i,o;if("object"!=typeof r||null===r||"[object Array]"===T.call(r))throw new TypeError(O("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===T.call(n))throw new TypeError(O("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((a="value"in n)&&(W.call(r,t)||L.call(r,t)?(e=r.__proto__,r.__proto__=H,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),i="get"in n,o="set"in n,a&&(i||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&G&&G.call(r,t,n.get),o&&V&&V.call(r,t,n.set),r};function C(r,t,n){$(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function P(r){return r!=r}var R=Math.floor;var M="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var Z=Object.prototype.toString;var X=Object.prototype.hasOwnProperty;var Y="function"==typeof Symbol?Symbol:void 0,q="function"==typeof Y?Y.toStringTag:"";var z=M&&"symbol"==typeof Symbol.toStringTag?function(r){var t,n,e,a,i;if(null==r)return Z.call(r);n=r[q],i=q,t=null!=(a=r)&&X.call(a,i);try{r[q]=void 0}catch(t){return Z.call(r)}return e=Z.call(r),t?r[q]=n:delete r[q],e}:function(r){return Z.call(r)},B="function"==typeof Uint32Array;var D="function"==typeof Uint32Array?Uint32Array:null;var J,K="function"==typeof Uint32Array?Uint32Array:void 0;J=function(){var r,t,n;if("function"!=typeof D)return!1;try{t=new D(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(B&&n instanceof Uint32Array||"[object Uint32Array]"===z(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?K:function(){throw new Error("not implemented")};var Q=J,rr="function"==typeof Float64Array;var tr="function"==typeof Float64Array?Float64Array:null;var nr,er="function"==typeof Float64Array?Float64Array:void 0;nr=function(){var r,t,n;if("function"!=typeof tr)return!1;try{t=new tr([1,3.14,-3.14,NaN]),n=t,r=(rr&&n instanceof Float64Array||"[object Float64Array]"===z(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?er:function(){throw new Error("not implemented")};var ar=nr,ir="function"==typeof Uint8Array;var or="function"==typeof Uint8Array?Uint8Array:null;var ur,fr="function"==typeof Uint8Array?Uint8Array:void 0;ur=function(){var r,t,n;if("function"!=typeof or)return!1;try{t=new or(t=[1,3.14,-3.14,256,257]),n=t,r=(ir&&n instanceof Uint8Array||"[object Uint8Array]"===z(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?fr:function(){throw new Error("not implemented")};var cr=ur,lr="function"==typeof Uint16Array;var pr="function"==typeof Uint16Array?Uint16Array:null;var sr,yr="function"==typeof Uint16Array?Uint16Array:void 0;sr=function(){var r,t,n;if("function"!=typeof pr)return!1;try{t=new pr(t=[1,3.14,-3.14,65536,65537]),n=t,r=(lr&&n instanceof Uint16Array||"[object Uint16Array]"===z(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?yr:function(){throw new Error("not implemented")};var vr,gr={uint16:sr,uint8:cr};(vr=new gr.uint16(1))[0]=4660;var dr=52===new gr.uint8(vr.buffer)[0],wr=!0===dr?1:0,hr=new ar(1),Ar=new Q(hr.buffer);function br(r){return hr[0]=r,Ar[wr]}var mr="function"==typeof Float64Array;var Fr="function"==typeof Float64Array?Float64Array:null;var Nr,Er="function"==typeof Float64Array?Float64Array:void 0;Nr=function(){var r,t,n;if("function"!=typeof Fr)return!1;try{t=new Fr([1,3.14,-3.14,NaN]),n=t,r=(mr&&n instanceof Float64Array||"[object Float64Array]"===z(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Er:function(){throw new Error("not implemented")};var _r=!0===dr?1:0,Ir=new Nr(1),Ur=new Q(Ir.buffer);function jr(r,t){return Ir[0]=r,Ur[_r]=t>>>0,Ir[0]}var Sr=Number.POSITIVE_INFINITY,kr=Number.NEGATIVE_INFINITY;var xr=.6931471803691238,Or=1.9082149292705877e-10;function Hr(r){var t,n,e,a,i,o,u,f,c,l;if(r<-1||P(r))return NaN;if(-1===r)return kr;if(r===Sr)return r;if(0===r)return r;if(l=1,(e=r<0?-r:r)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(l=0,a=r,n=1)}return 0!==l&&(e<9007199254740992?(i=(l=((n=br(c=1+r))>>20)-1023)>0?1-(c-r):r-(c-1),i/=c):(l=((n=br(c=r))>>20)-1023,i=0),(n&=1048575)<434334?c=jr(c,1072693248|n):(l+=1,c=jr(c,1071644672|n),n=1048576-n>>2),a=c-1),t=.5*a*a,0===n?0===a?l*xr+(i+=l*Or):l*xr-((f=t*(1-.6666666666666666*a))-(l*Or+i)-a):(f=(u=(o=a/(2+a))*o)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(u),0===l?a-(t-o*(t+f)):l*xr-(t-(o*(t+f)+(l*Or+i))-a))}function Tr(r){return R(r)===r}function Gr(r){return Tr(r/2)}function Vr(r){return Gr(r>0?r-1:r+1)}function Wr(r){return r===Sr||r===kr}var Lr=Math.sqrt;function $r(r){return Math.abs(r)}var Cr="function"==typeof Float64Array;var Pr="function"==typeof Float64Array?Float64Array:null;var Rr,Mr,Zr,Xr="function"==typeof Float64Array?Float64Array:void 0;Rr=function(){var r,t,n;if("function"!=typeof Pr)return!1;try{t=new Pr([1,3.14,-3.14,NaN]),n=t,r=(Cr&&n instanceof Float64Array||"[object Float64Array]"===z(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Xr:function(){throw new Error("not implemented")},!0===dr?(Mr=1,Zr=0):(Mr=0,Zr=1);var Yr={HIGH:Mr,LOW:Zr},qr=new Rr(1),zr=new Q(qr.buffer),Br=Yr.HIGH,Dr=Yr.LOW;function Jr(r,t,n,e){return qr[0]=r,t[e]=zr[Br],t[e+n]=zr[Dr],t}function Kr(r){return Jr(r,[0,0],1,0)}C(Kr,"assign",Jr);var Qr="function"==typeof Float64Array;var rt="function"==typeof Float64Array?Float64Array:null;var tt,nt="function"==typeof Float64Array?Float64Array:void 0;tt=function(){var r,t,n;if("function"!=typeof rt)return!1;try{t=new rt([1,3.14,-3.14,NaN]),n=t,r=(Qr&&n instanceof Float64Array||"[object Float64Array]"===z(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?nt:function(){throw new Error("not implemented")};var et=!0===dr?0:1,at=new tt(1),it=new Q(at.buffer);function ot(r,t){return at[0]=r,it[et]=t>>>0,at[0]}function ut(r){return 0|r}var ft="function"==typeof Float64Array;var ct="function"==typeof Float64Array?Float64Array:null;var lt,pt,st,yt="function"==typeof Float64Array?Float64Array:void 0;lt=function(){var r,t,n;if("function"!=typeof ct)return!1;try{t=new ct([1,3.14,-3.14,NaN]),n=t,r=(ft&&n instanceof Float64Array||"[object Float64Array]"===z(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?yt:function(){throw new Error("not implemented")},!0===dr?(pt=1,st=0):(pt=0,st=1);var vt={HIGH:pt,LOW:st},gt=new lt(1),dt=new Q(gt.buffer),wt=vt.HIGH,ht=vt.LOW;function At(r,t,n,e){return gt[0]=r,t[e]=dt[wt],t[e+n]=dt[ht],t}function bt(r){return At(r,[0,0],1,0)}C(bt,"assign",At);var mt="function"==typeof Float64Array;var Ft="function"==typeof Float64Array?Float64Array:null;var Nt,Et,_t,It="function"==typeof Float64Array?Float64Array:void 0;Nt=function(){var r,t,n;if("function"!=typeof Ft)return!1;try{t=new Ft([1,3.14,-3.14,NaN]),n=t,r=(mt&&n instanceof Float64Array||"[object Float64Array]"===z(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?It:function(){throw new Error("not implemented")},!0===dr?(Et=1,_t=0):(Et=0,_t=1);var Ut={HIGH:Et,LOW:_t},jt=new Nt(1),St=new Q(jt.buffer),kt=Ut.HIGH,xt=Ut.LOW;function Ot(r,t){return St[kt]=r,St[xt]=t,jt[0]}var Ht=[0,0];function Tt(r,t){var n,e;return bt.assign(r,Ht,1,0),n=Ht[0],n&=2147483647,e=br(t),Ot(n|=e&=2147483648,Ht[1])}var Gt=[1,1.5],Vt=[0,.5849624872207642],Wt=[0,1.350039202129749e-8];function Lt(r,t,n,e){return P(r)||Wr(r)?(t[e]=r,t[e+n]=0,t):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(t[e]=4503599627370496*r,t[e+n]=-52,t):(t[e]=r,t[e+n]=0,t)}C((function(r){return Lt(r,[0,0],1,0)}),"assign",Lt);var $t="function"==typeof Float64Array;var Ct="function"==typeof Float64Array?Float64Array:null;var Pt,Rt,Mt,Zt="function"==typeof Float64Array?Float64Array:void 0;Pt=function(){var r,t,n;if("function"!=typeof Ct)return!1;try{t=new Ct([1,3.14,-3.14,NaN]),n=t,r=($t&&n instanceof Float64Array||"[object Float64Array]"===z(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Zt:function(){throw new Error("not implemented")},!0===dr?(Rt=1,Mt=0):(Rt=0,Mt=1);var Xt={HIGH:Rt,LOW:Mt},Yt=new Pt(1),qt=new Q(Yt.buffer),zt=Xt.HIGH,Bt=Xt.LOW;function Dt(r,t,n,e){return Yt[0]=r,t[e]=qt[zt],t[e+n]=qt[Bt],t}function Jt(r){return Dt(r,[0,0],1,0)}C(Jt,"assign",Dt);var Kt=[0,0],Qt=[0,0];function rn(r,t){var n,e;return 0===t||0===r||P(r)||Wr(r)?r:(Lt(r,Kt,1,0),t+=Kt[1],t+=function(r){var t=br(r);return(t=(2146435072&t)>>>20)-1023|0}(r=Kt[0]),t<-1074?Tt(0,r):t>1023?r<0?kr:Sr:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,Jt.assign(r,Qt,1,0),n=Qt[0],n&=2148532223,e*Ot(n|=t+1023<<20,Qt[1])))}var tn=1e300,nn=1e-300,en=[0,0],an=[0,0];function on(r,t){var n,e,a,i,o,u,f,c,l,p,s,y,v,g;if(P(r)||P(t))return NaN;if(Kr.assign(t,en,1,0),o=en[0],0===en[1]){if(0===t)return 1;if(1===t)return r;if(-1===t)return 1/r;if(.5===t)return Lr(r);if(-.5===t)return 1/Lr(r);if(2===t)return r*r;if(3===t)return r*r*r;if(4===t)return(r*=r)*r;if(Wr(t))return function(r,t){return-1===r?(r-r)/(r-r):1===r?1:$r(r)<1==(t===Sr)?0:Sr}(r,t)}if(Kr.assign(r,en,1,0),i=en[0],0===en[1]){if(0===i)return function(r,t){return t===kr?Sr:t===Sr?0:t>0?Vr(t)?r:0:Vr(t)?Tt(Sr,r):Sr}(r,t);if(1===r)return 1;if(-1===r&&Vr(t))return-1;if(Wr(r))return r===kr?on(-0,-t):t<0?0:Sr}if(r<0&&!1===Tr(t))return(r-r)/(r-r);if(a=$r(r),n=2147483647&i|0,e=2147483647&o|0,f=o>>>31|0,u=(u=i>>>31|0)&&Vr(t)?-1:1,e>1105199104){if(e>1139802112)return function(r,t){return(2147483647&br(r))<=1072693247?t<0?1/0:0:t>0?1/0:0}(r,t);if(n<1072693247)return 1===f?u*tn*tn:u*nn*nn;if(n>1072693248)return 0===f?u*tn*tn:u*nn*nn;s=function(r,t){var n,e,a,i,o,u;return n=(o=1.9259629911266175e-8*(a=t-1)-a*a*(0===(u=a)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((e=ot(e=(i=1.4426950216293335*a)+o,0))-i),r[0]=e,r[1]=n,r}(an,a)}else s=function(r,t,n){var e,a,i,o,u,f,c,l,p,s,y,v,g,d,w,h,A,b,m,F,N;return b=0,n<1048576&&(b-=53,n=br(t*=9007199254740992)),b+=(n>>20)-1023|0,n=1072693248|(m=1048575&n|0),m<=235662?F=0:m<767610?F=1:(F=0,b+=1,n-=1048576),o=ot(a=(h=(t=jr(t,n))-(c=Gt[F]))*(A=1/(t+c)),0),e=524288+(n>>1|536870912),f=jr(0,e+=F<<18),w=(i=a*a)*i*(0===(N=i)?.5999999999999946:.5999999999999946+N*(.4285714285785502+N*(.33333332981837743+N*(.272728123808534+N*(.23066074577556175+.20697501780033842*N))))),f=ot(f=3+(i=o*o)+(w+=(u=A*(h-o*f-o*(t-(f-c))))*(o+a)),0),g=(y=-7.028461650952758e-9*(p=ot(p=(h=o*f)+(A=u*f+(w-(f-3-i))*a),0))+.9617966939259756*(A-(p-h))+Wt[F])-((v=ot(v=(s=.9617967009544373*p)+y+(l=Vt[F])+(d=b),0))-d-l-s),r[0]=v,r[1]=g,r}(an,a,n);if(y=(p=(t-(c=ot(t,0)))*s[0]+t*s[1])+(l=c*s[0]),Kr.assign(y,en,1,0),v=ut(en[0]),g=ut(en[1]),v>=1083179008){if(0!=(v-1083179008|g))return u*tn*tn;if(p+8008566259537294e-32>y-l)return u*tn*tn}else if((2147483647&v)>=1083231232){if(0!=(v-3230714880|g))return u*nn*nn;if(p<=y-l)return u*nn*nn}return y=function(r,t,n){var e,a,i,o,u,f,c,l,p,s,y;return s=((p=2147483647&r|0)>>20)-1023|0,l=0,p>1071644672&&(e=((l=r+(1048576>>s+1)>>>0)&~(1048575>>(s=((2147483647&l)>>20)-1023|0)))>>>0,l=(1048575&l|1048576)>>20-s>>>0,r<0&&(l=-l),t-=i=jr(0,e)),r=ut(r=br(c=1-((c=(o=.6931471824645996*(i=ot(i=n+t,0)))+(u=.6931471805599453*(n-(i-t))+-1.904654299957768e-9*i))*(a=c-(i=c*c)*(0===(y=i)?.16666666666666602:.16666666666666602+y*(y*(6613756321437934e-20+y*(4.1381367970572385e-8*y-16533902205465252e-22))-.0027777777777015593)))/(a-2)-((f=u-(c-o))+c*f)-c))),(r+=l<<20>>>0)>>20<=0?rn(c,l):jr(c,r)}(v,l,p),u*y}function un(r,t){return P(r)||P(t)||t<0||t>1?NaN:r<0?kr:r===Sr?0:Hr(-on(1-t,(r=R(r))+1))}function fn(r){return P(r)||r<0||r>1?(t=NaN,function(){return t}):function(t){if(P(t))return NaN;if(t<0)return kr;if(t===Sr)return 0;return t=R(t),Hr(-on(1-r,t+1))};var t}C(un,"factory",fn);export{un as default,fn as factory};
//# sourceMappingURL=mod.js.map
