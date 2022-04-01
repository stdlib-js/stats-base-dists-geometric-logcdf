// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).logcdf=n()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=function(){try{return r({},"x",{}),!0}catch(r){return!1}},t=Object.defineProperty,e=Object.prototype,u=e.toString,o=e.__defineGetter__,i=e.__defineSetter__,f=e.__lookupGetter__,a=e.__lookupSetter__;var c=t,l=function(r,n,t){var c,l,y,v;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((l="value"in t)&&(f.call(r,n)||a.call(r,n)?(c=r.__proto__,r.__proto__=e,delete r[n],r[n]=t.value,r.__proto__=c):r[n]=t.value),y="get"in t,v="set"in t,l&&(y||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&o&&o.call(r,n,t.get),v&&i&&i.call(r,n,t.set),r},y=n()?c:l;var v=function(r,n,t){y(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})};var p=function(r){return r!=r},b=Math.floor;var d=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var w=function(){return d&&"symbol"==typeof Symbol.toStringTag},A=Object.prototype.toString,s=A;var _=function(r){return s.call(r)},m=Object.prototype.hasOwnProperty;var h=function(r,n){return null!=r&&m.call(r,n)},U="function"==typeof Symbol?Symbol.toStringTag:"",N=h,g=U,j=A;var I=_,O=function(r){var n,t,e;if(null==r)return j.call(r);t=r[g],n=N(r,g);try{r[g]=void 0}catch(n){return j.call(r)}return e=j.call(r),n?r[g]=t:delete r[g],e},S=w()?O:I,E=S,F="function"==typeof Uint32Array;var T="function"==typeof Uint32Array?Uint32Array:null,H=function(r){return F&&r instanceof Uint32Array||"[object Uint32Array]"===E(r)},G=T;var P=function(){var r,n;if("function"!=typeof G)return!1;try{n=new G(n=[1,3.14,-3.14,4294967296,4294967297]),r=H(n)&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var L="function"==typeof Uint32Array?Uint32Array:void 0,V=function(){throw new Error("not implemented")},W=P()?L:V,x=S,M="function"==typeof Float64Array;var k="function"==typeof Float64Array?Float64Array:null,Y=function(r){return M&&r instanceof Float64Array||"[object Float64Array]"===x(r)},q=k;var C=function(){var r,n;if("function"!=typeof q)return!1;try{n=new q([1,3.14,-3.14,NaN]),r=Y(n)&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r};var z="function"==typeof Float64Array?Float64Array:void 0,B=function(){throw new Error("not implemented")},D=C()?z:B,J=S,K="function"==typeof Uint8Array;var Q="function"==typeof Uint8Array?Uint8Array:null,R=function(r){return K&&r instanceof Uint8Array||"[object Uint8Array]"===J(r)},X=Q;var Z=function(){var r,n;if("function"!=typeof X)return!1;try{n=new X(n=[1,3.14,-3.14,256,257]),r=R(n)&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var $="function"==typeof Uint8Array?Uint8Array:void 0,rr=function(){throw new Error("not implemented")},nr=Z()?$:rr,tr=S,er="function"==typeof Uint16Array;var ur="function"==typeof Uint16Array?Uint16Array:null,or=function(r){return er&&r instanceof Uint16Array||"[object Uint16Array]"===tr(r)},ir=ur;var fr=function(){var r,n;if("function"!=typeof ir)return!1;try{n=new ir(n=[1,3.14,-3.14,65536,65537]),r=or(n)&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var ar,cr="function"==typeof Uint16Array?Uint16Array:void 0,lr=function(){throw new Error("not implemented")},yr={uint16:fr()?cr:lr,uint8:nr};(ar=new yr.uint16(1))[0]=4660;var vr=52===new yr.uint8(ar.buffer)[0],pr=W,br=!0===vr?1:0,dr=new D(1),wr=new pr(dr.buffer);var Ar=function(r){return dr[0]=r,wr[br]},sr=W,_r=!0===vr?1:0,mr=new D(1),hr=new sr(mr.buffer);var Ur=function(r,n){return mr[0]=r,hr[_r]=n>>>0,mr[0]},Nr=Ur,gr=Number.POSITIVE_INFINITY,jr=Number.NEGATIVE_INFINITY;var Ir=p,Or=Ar,Sr=Nr,Er=gr,Fr=jr,Tr=function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))},Hr=.6931471803691238,Gr=1.9082149292705877e-10;var Pr=function(r){var n,t,e,u,o,i,f,a,c,l;if(r<-1||Ir(r))return NaN;if(-1===r)return Fr;if(r===Er)return r;if(0===r)return r;if(l=1,(e=r<0?-r:r)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(l=0,u=r,t=1)}return 0!==l&&(e<9007199254740992?(o=(l=((t=Or(c=1+r))>>20)-1023)>0?1-(c-r):r-(c-1),o/=c):(l=((t=Or(c=r))>>20)-1023,o=0),(t&=1048575)<434334?c=Sr(c,1072693248|t):(l+=1,c=Sr(c,1071644672|t),t=1048576-t>>2),u=c-1),n=.5*u*u,0===t?0===u?l*Hr+(o+=l*Gr):l*Hr-((a=n*(1-.6666666666666666*u))-(l*Gr+o)-u):(a=(f=(i=u/(2+u))*i)*Tr(f),0===l?u-(n-i*(n+a)):l*Hr-(n-(i*(n+a)+(l*Gr+o))-u))},Lr=b;var Vr=function(r){return Lr(r)===r},Wr=Vr;var xr=function(r){return Wr(r/2)};var Mr=function(r){return xr(r>0?r-1:r+1)},kr=gr,Yr=jr;var qr=function(r){return r===kr||r===Yr},Cr=Math.sqrt;var zr,Br,Dr=function(r){return Math.abs(r)};!0===vr?(zr=1,Br=0):(zr=0,Br=1);var Jr=W,Kr={HIGH:zr,LOW:Br},Qr=new D(1),Rr=new Jr(Qr.buffer),Xr=Kr.HIGH,Zr=Kr.LOW;var $r=function(r,n){return Qr[0]=n,r[0]=Rr[Xr],r[1]=Rr[Zr],r};var rn=function(r,n){return 1===arguments.length?$r([0,0],r):$r(r,n)},nn=rn,tn=W,en=!0===vr?0:1,un=new D(1),on=new tn(un.buffer);var fn=function(r,n){return un[0]=r,on[en]=n>>>0,un[0]},an=fn;var cn,ln,yn=function(r){return 0|r};!0===vr?(cn=1,ln=0):(cn=0,ln=1);var vn=W,pn={HIGH:cn,LOW:ln},bn=new D(1),dn=new vn(bn.buffer),wn=pn.HIGH,An=pn.LOW;var sn=function(r,n){return dn[wn]=r,dn[An]=n,bn[0]},_n=nn,mn=Ar,hn=sn,Un=[0,0];var Nn=function(r,n){var t,e;return _n(Un,r),t=Un[0],t&=2147483647,e=mn(n),hn(t|=e&=2147483648,Un[1])},gn=Mr,jn=Nn,In=jr,On=gr;var Sn=Ar;var En=Dr,Fn=gr;var Tn=Ar,Hn=an,Gn=Nr,Pn=function(r){return 0===r?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+.20697501780033842*r))))},Ln=1048576,Vn=[1,1.5],Wn=[0,.5849624872207642],xn=[0,1.350039202129749e-8];var Mn=an,kn=function(r){return 0===r?.5:.5+r*(.25*r-.3333333333333333)};var Yn=qr,qn=p,Cn=Dr;var zn=function(r,n){return qn(n)||Yn(n)?(r[0]=n,r[1]=0,r):0!==n&&Cn(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)};var Bn=function(r,n){return 1===arguments.length?zn([0,0],r):zn(r,n)},Dn=Ar;var Jn=function(r){var n=Dn(r);return(n=(2146435072&n)>>>20)-1023|0},Kn=gr,Qn=jr,Rn=p,Xn=qr,Zn=Nn,$n=Bn,rt=Jn,nt=nn,tt=sn,et=[0,0],ut=[0,0];var ot=function(r,n){var t,e;return 0===n||0===r||Rn(r)||Xn(r)?r:($n(et,r),n+=et[1],(n+=rt(r=et[0]))<-1074?Zn(0,r):n>1023?r<0?Qn:Kn:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,nt(ut,r),t=ut[0],t&=2148532223,e*tt(t|=n+1023<<20,ut[1])))};var it=Ar,ft=Nr,at=an,ct=yn,lt=ot,yt=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)},vt=2147483647,pt=1048575,bt=1048576;var dt=p,wt=Mr,At=qr,st=Vr,_t=Cr,mt=Dr,ht=nn,Ut=an,Nt=yn,gt=jr,jt=gr,It=function(r,n){return n===In?On:n===On?0:n>0?gn(n)?r:0:gn(n)?jn(On,r):On},Ot=function(r,n){return(2147483647&Sn(r))<=1072693247?n<0?1/0:0:n>0?1/0:0},St=function(r,n){return-1===r?(r-r)/(r-r):1===r?1:En(r)<1==(n===Fn)?0:Fn},Et=function(r,n,t){var e,u,o,i,f,a,c,l,y,v,p,b,d,w,A,s,_,m,h,U;return m=0,t<Ln&&(m-=53,t=Tn(n*=9007199254740992)),m+=(t>>20)-1023|0,t=1072693248|(h=1048575&t|0),h<=235662?U=0:h<767610?U=1:(U=0,m+=1,t-=Ln),e=524288+(t>>1|536870912),f=(_=1/((n=Gn(n,t))+(c=Vn[U])))*((s=n-c)-(i=Hn(u=s*_,0))*(a=Gn(0,e+=U<<18))-i*(n-(a-c))),A=(o=u*u)*o*Pn(o),a=Hn(a=3+(o=i*i)+(A+=f*(i+u)),0),d=(p=-7.028461650952758e-9*(y=Hn(y=(s=i*a)+(_=f*a+(A-(a-3-o))*u),0))+.9617966939259756*(_-(y-s))+xn[U])-((b=Hn(b=(v=.9617967009544373*y)+p+(l=Wn[U])+(w=m),0))-w-l-v),r[0]=b,r[1]=d,r},Ft=function(r,n){var t,e,u,o,i;return t=(i=1.9259629911266175e-8*(u=n-1)-1.4426950408889634*(u*u*kn(u)))-((e=Mn(e=(o=1.4426950216293335*u)+i,0))-o),r[0]=e,r[1]=t,r},Tt=function(r,n,t){var e,u,o,i,f,a,c,l,y;return y=((l=r&vt|0)>>20)-1023|0,c=0,l>1071644672&&(u=ft(0,((c=r+(bt>>y+1)>>>0)&~(pt>>(y=((c&vt)>>20)-1023|0)))>>>0),c=(c&pt|bt)>>20-y>>>0,r<0&&(c=-c),n-=u),f=(i=.6931471805599453*(t-((u=at(u=t+n,0))-n))+-1.904654299957768e-9*u)-((a=(o=.6931471824645996*u)+i)-o),e=a-(u=a*a)*yt(u),r=it(a=1-(a*e/(e-2)-(f+a*f)-a)),r=ct(r),a=(r+=c<<20>>>0)>>20<=0?lt(a,c):ft(a,r)},Ht=2147483647,Gt=1083179008,Pt=1e300,Lt=1e-300,Vt=[0,0],Wt=[0,0];var xt=function r(n,t){var e,u,o,i,f,a,c,l,y,v,p,b,d,w;if(dt(n)||dt(t))return NaN;if(ht(Vt,t),f=Vt[0],0===Vt[1]){if(0===t)return 1;if(1===t)return n;if(-1===t)return 1/n;if(.5===t)return _t(n);if(-.5===t)return 1/_t(n);if(2===t)return n*n;if(3===t)return n*n*n;if(4===t)return(n*=n)*n;if(At(t))return St(n,t)}if(ht(Vt,n),i=Vt[0],0===Vt[1]){if(0===i)return It(n,t);if(1===n)return 1;if(-1===n&&wt(t))return-1;if(At(n))return n===gt?r(-0,-t):t<0?0:jt}if(n<0&&!1===st(t))return(n-n)/(n-n);if(o=mt(n),e=i&Ht|0,u=f&Ht|0,c=f>>>31|0,a=(a=i>>>31|0)&&wt(t)?-1:1,u>1105199104){if(u>1139802112)return Ot(n,t);if(e<1072693247)return 1===c?a*Pt*Pt:a*Lt*Lt;if(e>1072693248)return 0===c?a*Pt*Pt:a*Lt*Lt;p=Ft(Wt,o)}else p=Et(Wt,o,e);if(v=(t-(l=Ut(t,0)))*p[0]+t*p[1],y=l*p[0],ht(Vt,b=v+y),d=Nt(Vt[0]),w=Nt(Vt[1]),d>=Gt){if(0!=(d-Gt|w))return a*Pt*Pt;if(v+8008566259537294e-32>b-y)return a*Pt*Pt}else if((d&Ht)>=1083231232){if(0!=(d-3230714880|w))return a*Lt*Lt;if(v<=b-y)return a*Lt*Lt}return a*(b=Tt(d,y,v))},Mt=p,kt=b,Yt=Pr,qt=xt,Ct=jr,zt=gr;var Bt=function(r){return function(){return r}},Dt=p,Jt=b,Kt=Pr,Qt=xt,Rt=jr,Xt=gr;var Zt=function(r,n){return Mt(r)||Mt(n)||n<0||n>1?NaN:r<0?Ct:r===zt?0:(r=kt(r),Yt(-qt(1-n,r+1)))};return v(Zt,"factory",(function(r){return Dt(r)||r<0||r>1?Bt(NaN):function(n){if(Dt(n))return NaN;if(n<0)return Rt;if(n===Xt)return 0;return n=Jt(n),Kt(-Qt(1-r,n+1))}})),Zt}));
//# sourceMappingURL=bundle.js.map
