// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=function(){try{return r({},"x",{}),!0}catch(r){return!1}},t=Object.defineProperty,e=Object.prototype,u=e.toString,o=e.__defineGetter__,i=e.__defineSetter__,a=e.__lookupGetter__,f=e.__lookupSetter__;var c=t,l=function(r,n,t){var c,l,v,y;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((l="value"in t)&&(a.call(r,n)||f.call(r,n)?(c=r.__proto__,r.__proto__=e,delete r[n],r[n]=t.value,r.__proto__=c):r[n]=t.value),v="get"in t,y="set"in t,l&&(v||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return v&&o&&o.call(r,n,t.get),y&&i&&i.call(r,n,t.set),r},v=n()?c:l;var y=function(r,n,t){v(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})};var p=function(r){return r!=r},b=Math.floor;var w=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var A=function(){return w&&"symbol"==typeof Symbol.toStringTag},_=Object.prototype.toString,m=_;var d=function(r){return m.call(r)},s=Object.prototype.hasOwnProperty;var U=function(r,n){return null!=r&&s.call(r,n)},h="function"==typeof Symbol?Symbol.toStringTag:"",N=U,j=h,g=_;var I=d,O=function(r){var n,t,e;if(null==r)return g.call(r);t=r[j],n=N(r,j);try{r[j]=void 0}catch(n){return g.call(r)}return e=g.call(r),n?r[j]=t:delete r[j],e},S=A()?O:I,E=S,F="function"==typeof Uint32Array;var H="function"==typeof Uint32Array?Uint32Array:null,T=function(r){return F&&r instanceof Uint32Array||"[object Uint32Array]"===E(r)},G=H;var P=function(){var r,n;if("function"!=typeof G)return!1;try{n=new G(n=[1,3.14,-3.14,4294967296,4294967297]),r=T(n)&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var L="function"==typeof Uint32Array?Uint32Array:void 0,V=function(){throw new Error("not implemented")},W=P()?L:V,M=S,k="function"==typeof Float64Array;var x="function"==typeof Float64Array?Float64Array:null,Y=function(r){return k&&r instanceof Float64Array||"[object Float64Array]"===M(r)},q=x;var C=function(){var r,n;if("function"!=typeof q)return!1;try{n=new q([1,3.14,-3.14,NaN]),r=Y(n)&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r};var z="function"==typeof Float64Array?Float64Array:void 0,B=function(){throw new Error("not implemented")},D=C()?z:B,J=S,K="function"==typeof Uint8Array;var Q="function"==typeof Uint8Array?Uint8Array:null,R=function(r){return K&&r instanceof Uint8Array||"[object Uint8Array]"===J(r)},X=Q;var Z=function(){var r,n;if("function"!=typeof X)return!1;try{n=new X(n=[1,3.14,-3.14,256,257]),r=R(n)&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var $="function"==typeof Uint8Array?Uint8Array:void 0,rr=function(){throw new Error("not implemented")},nr=Z()?$:rr,tr=S,er="function"==typeof Uint16Array;var ur="function"==typeof Uint16Array?Uint16Array:null,or=function(r){return er&&r instanceof Uint16Array||"[object Uint16Array]"===tr(r)},ir=ur;var ar=function(){var r,n;if("function"!=typeof ir)return!1;try{n=new ir(n=[1,3.14,-3.14,65536,65537]),r=or(n)&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var fr,cr="function"==typeof Uint16Array?Uint16Array:void 0,lr=function(){throw new Error("not implemented")},vr={uint16:ar()?cr:lr,uint8:nr};(fr=new vr.uint16(1))[0]=4660;var yr=52===new vr.uint8(fr.buffer)[0],pr=W,br=!0===yr?1:0,wr=new D(1),Ar=new pr(wr.buffer);var _r=function(r){return wr[0]=r,Ar[br]},mr=W,dr=!0===yr?1:0,sr=new D(1),Ur=new mr(sr.buffer);var hr=function(r,n){return sr[0]=r,Ur[dr]=n>>>0,sr[0]},Nr=hr,jr=Number.POSITIVE_INFINITY,gr=Number.NEGATIVE_INFINITY;var Ir=p,Or=_r,Sr=Nr,Er=jr,Fr=gr,Hr=function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))},Tr=.6931471803691238,Gr=1.9082149292705877e-10;var Pr=function(r){var n,t,e,u,o,i,a,f,c,l;if(r<-1||Ir(r))return NaN;if(-1===r)return Fr;if(r===Er)return r;if(0===r)return r;if(l=1,(e=r<0?-r:r)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(l=0,u=r,t=1)}return 0!==l&&(e<9007199254740992?(o=(l=((t=Or(c=1+r))>>20)-1023)>0?1-(c-r):r-(c-1),o/=c):(l=((t=Or(c=r))>>20)-1023,o=0),(t&=1048575)<434334?c=Sr(c,1072693248|t):(l+=1,c=Sr(c,1071644672|t),t=1048576-t>>2),u=c-1),n=.5*u*u,0===t?0===u?l*Tr+(o+=l*Gr):l*Tr-((f=n*(1-.6666666666666666*u))-(l*Gr+o)-u):(f=(a=(i=u/(2+u))*i)*Hr(a),0===l?u-(n-i*(n+f)):l*Tr-(n-(i*(n+f)+(l*Gr+o))-u))},Lr=b;var Vr=function(r){return Lr(r)===r},Wr=Vr;var Mr=function(r){return Wr(r/2)};var kr=function(r){return Mr(r>0?r-1:r+1)},xr=jr,Yr=gr;var qr=function(r){return r===xr||r===Yr},Cr=Math.sqrt;var zr,Br,Dr=function(r){return Math.abs(r)};!0===yr?(zr=1,Br=0):(zr=0,Br=1);var Jr=W,Kr={HIGH:zr,LOW:Br},Qr=new D(1),Rr=new Jr(Qr.buffer),Xr=Kr.HIGH,Zr=Kr.LOW;var $r=function(r,n){return Qr[0]=n,r[0]=Rr[Xr],r[1]=Rr[Zr],r};var rn=function(r,n){return 1===arguments.length?$r([0,0],r):$r(r,n)},nn=W,tn=!0===yr?0:1,en=new D(1),un=new nn(en.buffer);var on=function(r,n){return en[0]=r,un[tn]=n>>>0,en[0]},an=on;var fn,cn,ln=function(r){return 0|r};!0===yr?(fn=1,cn=0):(fn=0,cn=1);var vn=W,yn={HIGH:fn,LOW:cn},pn=new D(1),bn=new vn(pn.buffer),wn=yn.HIGH,An=yn.LOW;var _n=function(r,n){return bn[wn]=r,bn[An]=n,pn[0]},mn=rn,dn=_r,sn=_n,Un=[0,0];var hn=function(r,n){var t,e;return mn(Un,r),t=Un[0],t&=2147483647,e=dn(n),sn(t|=e&=2147483648,Un[1])},Nn=kr,jn=hn,gn=gr,In=jr;var On=_r;var Sn=Dr,En=jr;var Fn=_r,Hn=an,Tn=Nr,Gn=function(r){return 0===r?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+.20697501780033842*r))))},Pn=[1,1.5],Ln=[0,.5849624872207642],Vn=[0,1.350039202129749e-8];var Wn=an,Mn=function(r){return 0===r?.5:.5+r*(.25*r-.3333333333333333)};var kn=qr,xn=p,Yn=Dr;var qn=function(r,n){return xn(n)||kn(n)?(r[0]=n,r[1]=0,r):0!==n&&Yn(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)};var Cn=_r;var zn=function(r){var n=Cn(r);return(n=(2146435072&n)>>>20)-1023|0},Bn=jr,Dn=gr,Jn=p,Kn=qr,Qn=hn,Rn=function(r,n){return 1===arguments.length?qn([0,0],r):qn(r,n)},Xn=zn,Zn=rn,$n=_n,rt=[0,0],nt=[0,0];var tt=function(r,n){var t,e;return 0===n||0===r||Jn(r)||Kn(r)?r:(Rn(rt,r),n+=rt[1],(n+=Xn(r=rt[0]))<-1074?Qn(0,r):n>1023?r<0?Dn:Bn:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,Zn(nt,r),t=nt[0],t&=2148532223,e*$n(t|=n+1023<<20,nt[1])))};var et=_r,ut=Nr,ot=an,it=ln,at=tt,ft=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)};var ct=p,lt=kr,vt=qr,yt=Vr,pt=Cr,bt=Dr,wt=rn,At=an,_t=ln,mt=gr,dt=jr,st=function(r,n){return n===gn?In:n===In?0:n>0?Nn(n)?r:0:Nn(n)?jn(In,r):In},Ut=function(r,n){return(2147483647&On(r))<=1072693247?n<0?1/0:0:n>0?1/0:0},ht=function(r,n){return-1===r?(r-r)/(r-r):1===r?1:Sn(r)<1==(n===En)?0:En},Nt=function(r,n,t){var e,u,o,i,a,f,c,l,v,y,p,b,w,A,_,m,d,s,U,h;return s=0,t<1048576&&(s-=53,t=Fn(n*=9007199254740992)),s+=(t>>20)-1023|0,t=1072693248|(U=1048575&t|0),U<=235662?h=0:U<767610?h=1:(h=0,s+=1,t-=1048576),e=524288+(t>>1|536870912),a=(d=1/((n=Tn(n,t))+(c=Pn[h])))*((m=n-c)-(i=Hn(u=m*d,0))*(f=Tn(0,e+=h<<18))-i*(n-(f-c))),_=(o=u*u)*o*Gn(o),f=Hn(f=3+(o=i*i)+(_+=a*(i+u)),0),w=(p=-7.028461650952758e-9*(v=Hn(v=(m=i*f)+(d=a*f+(_-(f-3-o))*u),0))+.9617966939259756*(d-(v-m))+Vn[h])-((b=Hn(b=(y=.9617967009544373*v)+p+(l=Ln[h])+(A=s),0))-A-l-y),r[0]=b,r[1]=w,r},jt=function(r,n){var t,e,u,o,i;return t=(i=1.9259629911266175e-8*(u=n-1)-1.4426950408889634*(u*u*Mn(u)))-((e=Wn(e=(o=1.4426950216293335*u)+i,0))-o),r[0]=e,r[1]=t,r},gt=function(r,n,t){var e,u,o,i,a,f,c,l,v,y;return y=((v=2147483647&r|0)>>20)-1023|0,l=0,v>1071644672&&(e=((l=r+(1048576>>y+1)>>>0)&~(1048575>>(y=((2147483647&l)>>20)-1023|0)))>>>0,l=(1048575&l|1048576)>>20-y>>>0,r<0&&(l=-l),n-=o=ut(0,e)),f=(a=.6931471805599453*(t-((o=ot(o=t+n,0))-n))+-1.904654299957768e-9*o)-((c=(i=.6931471824645996*o)+a)-i),u=c-(o=c*c)*ft(o),r=et(c=1-(c*u/(u-2)-(f+c*f)-c)),r=it(r),c=(r+=l<<20>>>0)>>20<=0?at(c,l):ut(c,r)},It=1e300,Ot=1e-300,St=[0,0],Et=[0,0];var Ft=function r(n,t){var e,u,o,i,a,f,c,l,v,y,p,b,w,A;if(ct(n)||ct(t))return NaN;if(wt(St,t),a=St[0],0===St[1]){if(0===t)return 1;if(1===t)return n;if(-1===t)return 1/n;if(.5===t)return pt(n);if(-.5===t)return 1/pt(n);if(2===t)return n*n;if(3===t)return n*n*n;if(4===t)return(n*=n)*n;if(vt(t))return ht(n,t)}if(wt(St,n),i=St[0],0===St[1]){if(0===i)return st(n,t);if(1===n)return 1;if(-1===n&&lt(t))return-1;if(vt(n))return n===mt?r(-0,-t):t<0?0:dt}if(n<0&&!1===yt(t))return(n-n)/(n-n);if(o=bt(n),e=2147483647&i|0,u=2147483647&a|0,c=a>>>31|0,f=(f=i>>>31|0)&&lt(t)?-1:1,u>1105199104){if(u>1139802112)return Ut(n,t);if(e<1072693247)return 1===c?f*It*It:f*Ot*Ot;if(e>1072693248)return 0===c?f*It*It:f*Ot*Ot;p=jt(Et,o)}else p=Nt(Et,o,e);if(y=(t-(l=At(t,0)))*p[0]+t*p[1],v=l*p[0],wt(St,b=y+v),w=_t(St[0]),A=_t(St[1]),w>=1083179008){if(0!=(w-1083179008|A))return f*It*It;if(y+8008566259537294e-32>b-v)return f*It*It}else if((2147483647&w)>=1083231232){if(0!=(w-3230714880|A))return f*Ot*Ot;if(y<=b-v)return f*Ot*Ot}return f*(b=gt(w,v,y))},Ht=p,Tt=b,Gt=Pr,Pt=Ft,Lt=gr,Vt=jr;var Wt=function(r){return function(){return r}},Mt=p,kt=b,xt=Pr,Yt=Ft,qt=gr,Ct=jr;var zt=function(r,n){return Ht(r)||Ht(n)||n<0||n>1?NaN:r<0?Lt:r===Vt?0:(r=Tt(r),Gt(-Pt(1-n,r+1)))},Bt=function(r){return Mt(r)||r<0||r>1?Wt(NaN):function(n){if(Mt(n))return NaN;if(n<0)return qt;if(n===Ct)return 0;return n=kt(n),xt(-Yt(1-r,n+1))}};y(zt,"factory",Bt);var Dt=zt;export{Dt as default,Bt as factory};
//# sourceMappingURL=mod.js.map
