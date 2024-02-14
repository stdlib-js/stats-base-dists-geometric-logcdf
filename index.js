// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,t;r=this,t=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty;function n(r){return"number"==typeof r}function e(r){var t,n="";for(t=0;t<r;t++)n+="0";return n}function i(r,t,n){var i=!1,o=t-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=n?r+e(o):e(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function f(r){var t,e,f;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(e=r.arg,f=parseInt(e,10),!isFinite(f)){if(!n(e))throw new Error("invalid integer. Value: "+e);f=0}return f<0&&("u"===r.specifier||10!==t)&&(f=4294967295+f+1),f<0?(e=(-f).toString(t),r.precision&&(e=i(e,r.precision,r.padRight)),e="-"+e):(e=f.toString(t),f||r.precision?r.precision&&(e=i(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===t&&(r.alternate&&(e="0x"+e),e=r.specifier===a.call(r.specifier)?a.call(e):o.call(e)),8===t&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}function u(r){return"string"==typeof r}var c=Math.abs,l=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,y=/e\+(\d)$/,d=/e-(\d)$/,g=/^(\d+)$/,w=/^(\d+)e/,v=/\.0$/,h=/\.0*e/,b=/(\..*[^0])0*e/;function A(r){var t,e,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+e);i=r.arg}switch(r.specifier){case"e":case"E":e=i.toExponential(r.precision);break;case"f":case"F":e=i.toFixed(r.precision);break;case"g":case"G":c(i)<1e-4?((t=r.precision)>0&&(t-=1),e=i.toExponential(t)):e=i.toPrecision(r.precision),r.alternate||(e=p.call(e,b,"$1e"),e=p.call(e,h,"e"),e=p.call(e,v,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=p.call(e,y,"e+0$1"),e=p.call(e,d,"e-0$1"),r.alternate&&(e=p.call(e,g,"$1."),e=p.call(e,w,"$1.e")),i>=0&&r.sign&&(e=r.sign+e),e=r.specifier===s.call(r.specifier)?s.call(e):l.call(e)}function m(r){var t,n="";for(t=0;t<r;t++)n+=" ";return n}function F(r,t,n){var e=t-r.length;return e<0?r:r=n?r+m(e):m(e)+r}var N=String.fromCharCode,E=isNaN,_=Array.isArray;function I(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function j(r){var t,n,e,o,a,c,l,s,p;if(!_(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",l=1,s=0;s<r.length;s++)if(u(e=r[s]))c+=e;else{if(t=void 0!==e.precision,!(e=I(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+e+"`.");for(e.mapping&&(l=e.mapping),n=e.flags,p=0;p<n.length;p++)switch(o=n.charAt(p)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=n.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===e.width){if(e.width=parseInt(arguments[l],10),l+=1,E(e.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(t&&"*"===e.precision){if(e.precision=parseInt(arguments[l],10),l+=1,E(e.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,t=!1)}switch(e.arg=arguments[l],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(e.padZeros=!1),e.arg=f(e);break;case"s":e.maxWidth=t?e.precision:-1;break;case"c":if(!E(e.arg)){if((a=parseInt(e.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=E(a)?String(e.arg):N(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(e.precision=6),e.arg=A(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=i(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=F(e.arg,e.width,e.padRight)),c+=e.arg||"",l+=1}return c}var U=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function S(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function x(r){var t,n,e,i;for(n=[],i=0,e=U.exec(r);e;)(t=r.slice(i,U.lastIndex-e[0].length)).length&&n.push(t),n.push(S(e)),i=U.lastIndex,e=U.exec(r);return(t=r.slice(i)).length&&n.push(t),n}function k(r){return"string"==typeof r}function O(r){var t,n;if(!k(r))throw new TypeError(O("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=[x(r)],n=1;n<arguments.length;n++)t.push(arguments[n]);return j.apply(null,t)}var H=Object.prototype,T=H.toString,G=H.__defineGetter__,V=H.__defineSetter__,W=H.__lookupGetter__,L=H.__lookupSetter__,$=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,n){var e,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===T.call(r))throw new TypeError(O("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===T.call(n))throw new TypeError(O("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(W.call(r,t)||L.call(r,t)?(e=r.__proto__,r.__proto__=H,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),o="get"in n,a="set"in n,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&G&&G.call(r,t,n.get),a&&V&&V.call(r,t,n.set),r};function C(r,t,n){$(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function P(r){return r!=r}var R,M=Math.floor,Z="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),X=Object.prototype.toString,Y=Object.prototype.hasOwnProperty,q="function"==typeof Symbol?Symbol:void 0,z="function"==typeof q?q.toStringTag:"",B=Z&&"symbol"==typeof Symbol.toStringTag?function(r){var t,n,e,i,o;if(null==r)return X.call(r);n=r[z],o=z,t=null!=(i=r)&&Y.call(i,o);try{r[z]=void 0}catch(t){return X.call(r)}return e=X.call(r),t?r[z]=n:delete r[z],e}:function(r){return X.call(r)},D="function"==typeof Uint32Array,J="function"==typeof Uint32Array?Uint32Array:null,K="function"==typeof Uint32Array?Uint32Array:void 0;R=function(){var r,t,n;if("function"!=typeof J)return!1;try{t=new J(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(D&&n instanceof Uint32Array||"[object Uint32Array]"===B(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?K:function(){throw new Error("not implemented")};var Q,rr=R,tr="function"==typeof Float64Array,nr="function"==typeof Float64Array?Float64Array:null,er="function"==typeof Float64Array?Float64Array:void 0;Q=function(){var r,t,n;if("function"!=typeof nr)return!1;try{t=new nr([1,3.14,-3.14,NaN]),n=t,r=(tr&&n instanceof Float64Array||"[object Float64Array]"===B(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?er:function(){throw new Error("not implemented")};var ir,or=Q,ar="function"==typeof Uint8Array,fr="function"==typeof Uint8Array?Uint8Array:null,ur="function"==typeof Uint8Array?Uint8Array:void 0;ir=function(){var r,t,n;if("function"!=typeof fr)return!1;try{t=new fr(t=[1,3.14,-3.14,256,257]),n=t,r=(ar&&n instanceof Uint8Array||"[object Uint8Array]"===B(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?ur:function(){throw new Error("not implemented")};var cr,lr=ir,sr="function"==typeof Uint16Array,pr="function"==typeof Uint16Array?Uint16Array:null,yr="function"==typeof Uint16Array?Uint16Array:void 0;cr=function(){var r,t,n;if("function"!=typeof pr)return!1;try{t=new pr(t=[1,3.14,-3.14,65536,65537]),n=t,r=(sr&&n instanceof Uint16Array||"[object Uint16Array]"===B(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?yr:function(){throw new Error("not implemented")};var dr,gr={uint16:cr,uint8:lr};(dr=new gr.uint16(1))[0]=4660;var wr=52===new gr.uint8(dr.buffer)[0],vr=!0===wr?1:0,hr=new or(1),br=new rr(hr.buffer);function Ar(r){return hr[0]=r,br[vr]}var mr,Fr="function"==typeof Float64Array,Nr="function"==typeof Float64Array?Float64Array:null,Er="function"==typeof Float64Array?Float64Array:void 0;mr=function(){var r,t,n;if("function"!=typeof Nr)return!1;try{t=new Nr([1,3.14,-3.14,NaN]),n=t,r=(Fr&&n instanceof Float64Array||"[object Float64Array]"===B(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Er:function(){throw new Error("not implemented")};var _r=!0===wr?1:0,Ir=new mr(1),jr=new rr(Ir.buffer);function Ur(r,t){return Ir[0]=r,jr[_r]=t>>>0,Ir[0]}var Sr=Number.POSITIVE_INFINITY,xr=Number.NEGATIVE_INFINITY,kr=1023,Or=.6931471803691238,Hr=1.9082149292705877e-10;function Tr(r){var t,n,e,i,o,a,f,u,c,l;if(r<-1||P(r))return NaN;if(-1===r)return xr;if(r===Sr)return r;if(0===r)return r;if(l=1,(e=r<0?-r:r)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(l=0,i=r,n=1)}return 0!==l&&(e<9007199254740992?(o=(l=((n=Ar(c=1+r))>>20)-kr)>0?1-(c-r):r-(c-1),o/=c):(l=((n=Ar(c=r))>>20)-kr,o=0),(n&=1048575)<434334?c=Ur(c,1072693248|n):(l+=1,c=Ur(c,1071644672|n),n=1048576-n>>2),i=c-1),t=.5*i*i,0===n?0===i?l*Or+(o+=l*Hr):l*Or-((u=t*(1-.6666666666666666*i))-(l*Hr+o)-i):(u=(f=(a=i/(2+i))*a)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(f),0===l?i-(t-a*(t+u)):l*Or-(t-(a*(t+u)+(l*Hr+o))-i))}function Gr(r){return M(r)===r}function Vr(r){return Gr(r/2)}function Wr(r){return Vr(r>0?r-1:r+1)}function Lr(r){return r===Sr||r===xr}var $r=Math.sqrt;function Cr(r){return Math.abs(r)}var Pr,Rr,Mr,Zr="function"==typeof Float64Array,Xr="function"==typeof Float64Array?Float64Array:null,Yr="function"==typeof Float64Array?Float64Array:void 0;Pr=function(){var r,t,n;if("function"!=typeof Xr)return!1;try{t=new Xr([1,3.14,-3.14,NaN]),n=t,r=(Zr&&n instanceof Float64Array||"[object Float64Array]"===B(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Yr:function(){throw new Error("not implemented")},!0===wr?(Rr=1,Mr=0):(Rr=0,Mr=1);var qr={HIGH:Rr,LOW:Mr},zr=new Pr(1),Br=new rr(zr.buffer),Dr=qr.HIGH,Jr=qr.LOW;function Kr(r,t,n,e){return zr[0]=r,t[e]=Br[Dr],t[e+n]=Br[Jr],t}function Qr(r){return Kr(r,[0,0],1,0)}C(Qr,"assign",Kr);var rt,tt="function"==typeof Float64Array,nt="function"==typeof Float64Array?Float64Array:null,et="function"==typeof Float64Array?Float64Array:void 0;rt=function(){var r,t,n;if("function"!=typeof nt)return!1;try{t=new nt([1,3.14,-3.14,NaN]),n=t,r=(tt&&n instanceof Float64Array||"[object Float64Array]"===B(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?et:function(){throw new Error("not implemented")};var it=!0===wr?0:1,ot=new rt(1),at=new rr(ot.buffer);function ft(r,t){return ot[0]=r,at[it]=t>>>0,ot[0]}function ut(r){return 0|r}var ct,lt,st,pt=2147483647,yt="function"==typeof Float64Array,dt="function"==typeof Float64Array?Float64Array:null,gt="function"==typeof Float64Array?Float64Array:void 0;ct=function(){var r,t,n;if("function"!=typeof dt)return!1;try{t=new dt([1,3.14,-3.14,NaN]),n=t,r=(yt&&n instanceof Float64Array||"[object Float64Array]"===B(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?gt:function(){throw new Error("not implemented")},!0===wr?(lt=1,st=0):(lt=0,st=1);var wt={HIGH:lt,LOW:st},vt=new ct(1),ht=new rr(vt.buffer),bt=wt.HIGH,At=wt.LOW;function mt(r,t,n,e){return vt[0]=r,t[e]=ht[bt],t[e+n]=ht[At],t}function Ft(r){return mt(r,[0,0],1,0)}C(Ft,"assign",mt);var Nt,Et,_t,It="function"==typeof Float64Array,jt="function"==typeof Float64Array?Float64Array:null,Ut="function"==typeof Float64Array?Float64Array:void 0;Nt=function(){var r,t,n;if("function"!=typeof jt)return!1;try{t=new jt([1,3.14,-3.14,NaN]),n=t,r=(It&&n instanceof Float64Array||"[object Float64Array]"===B(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Ut:function(){throw new Error("not implemented")},!0===wr?(Et=1,_t=0):(Et=0,_t=1);var St={HIGH:Et,LOW:_t},xt=new Nt(1),kt=new rr(xt.buffer),Ot=St.HIGH,Ht=St.LOW;function Tt(r,t){return kt[Ot]=r,kt[Ht]=t,xt[0]}var Gt=[0,0];function Vt(r,t){var n,e;return Ft.assign(r,Gt,1,0),n=Gt[0],n&=2147483647,e=Ar(t),Tt(n|=e&=2147483648,Gt[1])}var Wt=1048576,Lt=[1,1.5],$t=[0,.5849624872207642],Ct=[0,1.350039202129749e-8];function Pt(r,t,n,e){return P(r)||Lr(r)?(t[e]=r,t[e+n]=0,t):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(t[e]=4503599627370496*r,t[e+n]=-52,t):(t[e]=r,t[e+n]=0,t)}C((function(r){return Pt(r,[0,0],1,0)}),"assign",Pt);var Rt,Mt,Zt,Xt="function"==typeof Float64Array,Yt="function"==typeof Float64Array?Float64Array:null,qt="function"==typeof Float64Array?Float64Array:void 0;Rt=function(){var r,t,n;if("function"!=typeof Yt)return!1;try{t=new Yt([1,3.14,-3.14,NaN]),n=t,r=(Xt&&n instanceof Float64Array||"[object Float64Array]"===B(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?qt:function(){throw new Error("not implemented")},!0===wr?(Mt=1,Zt=0):(Mt=0,Zt=1);var zt={HIGH:Mt,LOW:Zt},Bt=new Rt(1),Dt=new rr(Bt.buffer),Jt=zt.HIGH,Kt=zt.LOW;function Qt(r,t,n,e){return Bt[0]=r,t[e]=Dt[Jt],t[e+n]=Dt[Kt],t}function rn(r){return Qt(r,[0,0],1,0)}C(rn,"assign",Qt);var tn=[0,0],nn=[0,0];function en(r,t){var n,e;return 0===t||0===r||P(r)||Lr(r)?r:(Pt(r,tn,1,0),t+=tn[1],t+=function(r){var t=Ar(r);return(t=(2146435072&t)>>>20)-kr|0}(r=tn[0]),t<-1074?Vt(0,r):t>1023?r<0?xr:Sr:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,rn.assign(r,nn,1,0),n=nn[0],n&=2148532223,e*Tt(n|=t+kr<<20,nn[1])))}var on=1048575,an=1048576,fn=1083179008,un=1e300,cn=1e-300,ln=[0,0],sn=[0,0];function pn(r,t){var n,e,i,o,a,f,u,c,l,s,p,y,d,g;if(P(r)||P(t))return NaN;if(Qr.assign(t,ln,1,0),a=ln[0],0===ln[1]){if(0===t)return 1;if(1===t)return r;if(-1===t)return 1/r;if(.5===t)return $r(r);if(-.5===t)return 1/$r(r);if(2===t)return r*r;if(3===t)return r*r*r;if(4===t)return(r*=r)*r;if(Lr(t))return function(r,t){return-1===r?(r-r)/(r-r):1===r?1:Cr(r)<1==(t===Sr)?0:Sr}(r,t)}if(Qr.assign(r,ln,1,0),o=ln[0],0===ln[1]){if(0===o)return function(r,t){return t===xr?Sr:t===Sr?0:t>0?Wr(t)?r:0:Wr(t)?Vt(Sr,r):Sr}(r,t);if(1===r)return 1;if(-1===r&&Wr(t))return-1;if(Lr(r))return r===xr?pn(-0,-t):t<0?0:Sr}if(r<0&&!1===Gr(t))return(r-r)/(r-r);if(i=Cr(r),n=o&pt|0,e=a&pt|0,u=a>>>31|0,f=(f=o>>>31|0)&&Wr(t)?-1:1,e>1105199104){if(e>1139802112)return function(r,t){return(Ar(r)&pt)<=1072693247?t<0?1/0:0:t>0?1/0:0}(r,t);if(n<1072693247)return 1===u?f*un*un:f*cn*cn;if(n>1072693248)return 0===u?f*un*un:f*cn*cn;p=function(r,t){var n,e,i,o,a,f;return n=(a=1.9259629911266175e-8*(i=t-1)-i*i*(0===(f=i)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=ft(e=(o=1.4426950216293335*i)+a,0))-o),r[0]=e,r[1]=n,r}(sn,i)}else p=function(r,t,n){var e,i,o,a,f,u,c,l,s,p,y,d,g,w,v,h,b,A,m,F,N;return A=0,n<Wt&&(A-=53,n=Ar(t*=9007199254740992)),A+=(n>>20)-kr|0,n=1072693248|(m=1048575&n|0),m<=235662?F=0:m<767610?F=1:(F=0,A+=1,n-=Wt),a=ft(i=(h=(t=Ur(t,n))-(c=Lt[F]))*(b=1/(t+c)),0),e=524288+(n>>1|536870912),u=Ur(0,e+=F<<18),v=(o=i*i)*o*(0===(N=o)?.5999999999999946:.5999999999999946+N*(.4285714285785502+N*(.33333332981837743+N*(.272728123808534+N*(.23066074577556175+.20697501780033842*N))))),u=ft(u=3+(o=a*a)+(v+=(f=b*(h-a*u-a*(t-(u-c))))*(a+i)),0),g=(y=-7.028461650952758e-9*(s=ft(s=(h=a*u)+(b=f*u+(v-(u-3-o))*i),0))+.9617966939259756*(b-(s-h))+Ct[F])-((d=ft(d=(p=.9617967009544373*s)+y+(l=$t[F])+(w=A),0))-w-l-p),r[0]=d,r[1]=g,r}(sn,i,n);if(y=(s=(t-(c=ft(t,0)))*p[0]+t*p[1])+(l=c*p[0]),Qr.assign(y,ln,1,0),d=ut(ln[0]),g=ut(ln[1]),d>=fn){if(0!=(d-fn|g))return f*un*un;if(s+8008566259537294e-32>y-l)return f*un*un}else if((d&pt)>=1083231232){if(0!=(d-3230714880|g))return f*cn*cn;if(s<=y-l)return f*cn*cn}return y=function(r,t,n){var e,i,o,a,f,u,c,l,s,p;return s=((l=r&pt|0)>>20)-kr|0,c=0,l>1071644672&&(i=Ur(0,((c=r+(an>>s+1)>>>0)&~(on>>(s=((c&pt)>>20)-kr|0)))>>>0),c=(c&on|an)>>20-s>>>0,r<0&&(c=-c),t-=i),r=ut(r=Ar(u=1-((u=(o=.6931471824645996*(i=ft(i=n+t,0)))+(a=.6931471805599453*(n-(i-t))+-1.904654299957768e-9*i))*(e=u-(i=u*u)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((f=a-(u-o))+u*f)-u))),(r+=c<<20>>>0)>>20<=0?en(u,c):Ur(u,r)}(d,l,s),f*y}function yn(r,t){return P(r)||P(t)||t<0||t>1?NaN:r<0?xr:r===Sr?0:Tr(-pn(1-t,(r=M(r))+1))}return C(yn,"factory",(function(r){return P(r)||r<0||r>1?(t=NaN,function(){return t}):function(t){return P(t)?NaN:t<0?xr:t===Sr?0:(t=M(t),Tr(-pn(1-r,t+1)))};var t})),yn},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).logcdf=t();
//# sourceMappingURL=index.js.map
