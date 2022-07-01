// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var n,r;n=this,r=function(){"use strict";var n,r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=function(){try{return r({},"x",{}),!0}catch(n){return!1}},e=Object.defineProperty,u=Object.prototype,o=u.toString,i=u.__defineGetter__,f=u.__defineSetter__,c=u.__lookupGetter__,a=u.__lookupSetter__,l=e,y=function(n,r,t){var e,l,y,p;if("object"!=typeof n||null===n||"[object Array]"===o.call(n))throw new TypeError("invalid argument. First argument must be an object. Value: `"+n+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((l="value"in t)&&(c.call(n,r)||a.call(n,r)?(e=n.__proto__,n.__proto__=u,delete n[r],n[r]=t.value,n.__proto__=e):n[r]=t.value),y="get"in t,p="set"in t,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&i&&i.call(n,r,t.get),p&&f&&f.call(n,r,t.set),n},p=t()?l:y,b=function(n,r,t){p(n,r,{configurable:!1,enumerable:!1,writable:!1,value:t})},d=function(n){return n!=n},v=Math.floor,w="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),A=Object.prototype.toString,s=A,_=function(n){return s.call(n)},m=Object.prototype.hasOwnProperty,h=function(n,r){return null!=n&&m.call(n,r)},U="function"==typeof Symbol?Symbol.toStringTag:"",N=h,g=U,j=A,I=_,O=function(n){var r,t,e;if(null==n)return j.call(n);t=n[g],r=N(n,g);try{n[g]=void 0}catch(r){return j.call(n)}return e=j.call(n),r?n[g]=t:delete n[g],e},S=w&&"symbol"==typeof Symbol.toStringTag?O:I,E=S,F="function"==typeof Uint32Array,T="function"==typeof Uint32Array?Uint32Array:null,H=function(n){return F&&n instanceof Uint32Array||"[object Uint32Array]"===E(n)},G=T,P=function(){var n,r;if("function"!=typeof G)return!1;try{r=new G(r=[1,3.14,-3.14,4294967296,4294967297]),n=H(r)&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n},L="function"==typeof Uint32Array?Uint32Array:void 0,V=function(){throw new Error("not implemented")},W=P()?L:V,x=S,M="function"==typeof Float64Array,k="function"==typeof Float64Array?Float64Array:null,Y=function(n){return M&&n instanceof Float64Array||"[object Float64Array]"===x(n)},q=k,C=function(){var n,r;if("function"!=typeof q)return!1;try{r=new q([1,3.14,-3.14,NaN]),n=Y(r)&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){n=!1}return n},z="function"==typeof Float64Array?Float64Array:void 0,B=function(){throw new Error("not implemented")},D=C()?z:B,J=S,K="function"==typeof Uint8Array,Q="function"==typeof Uint8Array?Uint8Array:null,R=function(n){return K&&n instanceof Uint8Array||"[object Uint8Array]"===J(n)},X=Q,Z=function(){var n,r;if("function"!=typeof X)return!1;try{r=new X(r=[1,3.14,-3.14,256,257]),n=R(r)&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n},$="function"==typeof Uint8Array?Uint8Array:void 0,nn=function(){throw new Error("not implemented")},rn=Z()?$:nn,tn=S,en="function"==typeof Uint16Array,un="function"==typeof Uint16Array?Uint16Array:null,on=function(n){return en&&n instanceof Uint16Array||"[object Uint16Array]"===tn(n)},fn=un,cn=function(){var n,r;if("function"!=typeof fn)return!1;try{r=new fn(r=[1,3.14,-3.14,65536,65537]),n=on(r)&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n},an="function"==typeof Uint16Array?Uint16Array:void 0,ln=function(){throw new Error("not implemented")},yn={uint16:cn()?an:ln,uint8:rn};(n=new yn.uint16(1))[0]=4660;var pn,bn,dn=52===new yn.uint8(n.buffer)[0],vn=W,wn=!0===dn?1:0,An=new D(1),sn=new vn(An.buffer),_n=function(n){return An[0]=n,sn[wn]},mn=W,hn=!0===dn?1:0,Un=new D(1),Nn=new mn(Un.buffer),gn=function(n,r){return Un[0]=n,Nn[hn]=r>>>0,Un[0]},jn=gn,In=Number.POSITIVE_INFINITY,On=Number.NEGATIVE_INFINITY,Sn=d,En=_n,Fn=jn,Tn=In,Hn=On,Gn=function(n){return 0===n?.6666666666666735:.6666666666666735+n*(.3999999999940942+n*(.2857142874366239+n*(.22222198432149784+n*(.1818357216161805+n*(.15313837699209373+.14798198605116586*n)))))},Pn=.6931471803691238,Ln=1.9082149292705877e-10,Vn=function(n){var r,t,e,u,o,i,f,c,a,l;if(n<-1||Sn(n))return NaN;if(-1===n)return Hn;if(n===Tn)return n;if(0===n)return n;if(l=1,(e=n<0?-n:n)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?n:n-n*n*.5;n>-.2928932188134525&&(l=0,u=n,t=1)}return 0!==l&&(e<9007199254740992?(o=(l=((t=En(a=1+n))>>20)-1023)>0?1-(a-n):n-(a-1),o/=a):(l=((t=En(a=n))>>20)-1023,o=0),(t&=1048575)<434334?a=Fn(a,1072693248|t):(l+=1,a=Fn(a,1071644672|t),t=1048576-t>>2),u=a-1),r=.5*u*u,0===t?0===u?l*Pn+(o+=l*Ln):l*Pn-((c=r*(1-.6666666666666666*u))-(l*Ln+o)-u):(c=(f=(i=u/(2+u))*i)*Gn(f),0===l?u-(r-i*(r+c)):l*Pn-(r-(i*(r+c)+(l*Ln+o))-u))},Wn=v,xn=function(n){return Wn(n)===n},Mn=xn,kn=function(n){return Mn(n/2)},Yn=function(n){return kn(n>0?n-1:n+1)},qn=In,Cn=On,zn=function(n){return n===qn||n===Cn},Bn=Math.sqrt,Dn=function(n){return Math.abs(n)};!0===dn?(pn=1,bn=0):(pn=0,bn=1);var Jn,Kn,Qn=W,Rn={HIGH:pn,LOW:bn},Xn=new D(1),Zn=new Qn(Xn.buffer),$n=Rn.HIGH,nr=Rn.LOW,rr=function(n,r){return Xn[0]=r,n[0]=Zn[$n],n[1]=Zn[nr],n},tr=function(n,r){return 1===arguments.length?rr([0,0],n):rr(n,r)},er=tr,ur=W,or=!0===dn?0:1,ir=new D(1),fr=new ur(ir.buffer),cr=function(n,r){return ir[0]=n,fr[or]=r>>>0,ir[0]},ar=cr,lr=function(n){return 0|n};!0===dn?(Jn=1,Kn=0):(Jn=0,Kn=1);var yr=W,pr={HIGH:Jn,LOW:Kn},br=new D(1),dr=new yr(br.buffer),vr=pr.HIGH,wr=pr.LOW,Ar=function(n,r){return dr[vr]=n,dr[wr]=r,br[0]},sr=er,_r=_n,mr=Ar,hr=[0,0],Ur=function(n,r){var t,e;return sr(hr,n),t=hr[0],t&=2147483647,e=_r(r),mr(t|=e&=2147483648,hr[1])},Nr=Yn,gr=Ur,jr=On,Ir=In,Or=_n,Sr=Dn,Er=In,Fr=_n,Tr=ar,Hr=jn,Gr=function(n){return 0===n?.5999999999999946:.5999999999999946+n*(.4285714285785502+n*(.33333332981837743+n*(.272728123808534+n*(.23066074577556175+.20697501780033842*n))))},Pr=1048576,Lr=[1,1.5],Vr=[0,.5849624872207642],Wr=[0,1.350039202129749e-8],xr=ar,Mr=function(n){return 0===n?.5:.5+n*(.25*n-.3333333333333333)},kr=zn,Yr=d,qr=Dn,Cr=function(n,r){return Yr(r)||kr(r)?(n[0]=r,n[1]=0,n):0!==r&&qr(r)<22250738585072014e-324?(n[0]=4503599627370496*r,n[1]=-52,n):(n[0]=r,n[1]=0,n)},zr=function(n,r){return 1===arguments.length?Cr([0,0],n):Cr(n,r)},Br=_n,Dr=function(n){var r=Br(n);return(r=(2146435072&r)>>>20)-1023|0},Jr=In,Kr=On,Qr=d,Rr=zn,Xr=Ur,Zr=zr,$r=Dr,nt=er,rt=Ar,tt=[0,0],et=[0,0],ut=function(n,r){var t,e;return 0===r||0===n||Qr(n)||Rr(n)?n:(Zr(tt,n),r+=tt[1],(r+=$r(n=tt[0]))<-1074?Xr(0,n):r>1023?n<0?Kr:Jr:(r<=-1023?(r+=52,e=2220446049250313e-31):e=1,nt(et,n),t=et[0],t&=2148532223,e*rt(t|=r+1023<<20,et[1])))},ot=_n,it=jn,ft=ar,ct=lr,at=ut,lt=function(n){return 0===n?.16666666666666602:.16666666666666602+n*(n*(6613756321437934e-20+n*(4.1381367970572385e-8*n-16533902205465252e-22))-.0027777777777015593)},yt=2147483647,pt=1048575,bt=1048576,dt=d,vt=Yn,wt=zn,At=xn,st=Bn,_t=Dn,mt=er,ht=ar,Ut=lr,Nt=On,gt=In,jt=function(n,r){return r===jr?Ir:r===Ir?0:r>0?Nr(r)?n:0:Nr(r)?gr(Ir,n):Ir},It=function(n,r){return(2147483647&Or(n))<=1072693247?r<0?1/0:0:r>0?1/0:0},Ot=function(n,r){return-1===n?(n-n)/(n-n):1===n?1:Sr(n)<1==(r===Er)?0:Er},St=function(n,r,t){var e,u,o,i,f,c,a,l,y,p,b,d,v,w,A,s,_,m,h,U;return m=0,t<Pr&&(m-=53,t=Fr(r*=9007199254740992)),m+=(t>>20)-1023|0,t=1072693248|(h=1048575&t|0),h<=235662?U=0:h<767610?U=1:(U=0,m+=1,t-=Pr),e=524288+(t>>1|536870912),f=(_=1/((r=Hr(r,t))+(a=Lr[U])))*((s=r-a)-(i=Tr(u=s*_,0))*(c=Hr(0,e+=U<<18))-i*(r-(c-a))),A=(o=u*u)*o*Gr(o),c=Tr(c=3+(o=i*i)+(A+=f*(i+u)),0),v=(b=-7.028461650952758e-9*(y=Tr(y=(s=i*c)+(_=f*c+(A-(c-3-o))*u),0))+.9617966939259756*(_-(y-s))+Wr[U])-((d=Tr(d=(p=.9617967009544373*y)+b+(l=Vr[U])+(w=m),0))-w-l-p),n[0]=d,n[1]=v,n},Et=function(n,r){var t,e,u,o,i;return t=(i=1.9259629911266175e-8*(u=r-1)-u*u*Mr(u)*1.4426950408889634)-((e=xr(e=(o=1.4426950216293335*u)+i,0))-o),n[0]=e,n[1]=t,n},Ft=function(n,r,t){var e,u,o,i,f,c,a,l,y;return y=((l=n&yt|0)>>20)-1023|0,a=0,l>1071644672&&(u=it(0,((a=n+(bt>>y+1)>>>0)&~(pt>>(y=((a&yt)>>20)-1023|0)))>>>0),a=(a&pt|bt)>>20-y>>>0,n<0&&(a=-a),r-=u),f=(i=.6931471805599453*(t-((u=ft(u=t+r,0))-r))+-1.904654299957768e-9*u)-((c=(o=.6931471824645996*u)+i)-o),e=c-(u=c*c)*lt(u),n=ot(c=1-(c*e/(e-2)-(f+c*f)-c)),n=ct(n),c=(n+=a<<20>>>0)>>20<=0?at(c,a):it(c,n)},Tt=2147483647,Ht=1083179008,Gt=1e300,Pt=1e-300,Lt=[0,0],Vt=[0,0],Wt=function n(r,t){var e,u,o,i,f,c,a,l,y,p,b,d,v,w;if(dt(r)||dt(t))return NaN;if(mt(Lt,t),f=Lt[0],0===Lt[1]){if(0===t)return 1;if(1===t)return r;if(-1===t)return 1/r;if(.5===t)return st(r);if(-.5===t)return 1/st(r);if(2===t)return r*r;if(3===t)return r*r*r;if(4===t)return(r*=r)*r;if(wt(t))return Ot(r,t)}if(mt(Lt,r),i=Lt[0],0===Lt[1]){if(0===i)return jt(r,t);if(1===r)return 1;if(-1===r&&vt(t))return-1;if(wt(r))return r===Nt?n(-0,-t):t<0?0:gt}if(r<0&&!1===At(t))return(r-r)/(r-r);if(o=_t(r),e=i&Tt|0,u=f&Tt|0,a=f>>>31|0,c=(c=i>>>31|0)&&vt(t)?-1:1,u>1105199104){if(u>1139802112)return It(r,t);if(e<1072693247)return 1===a?c*Gt*Gt:c*Pt*Pt;if(e>1072693248)return 0===a?c*Gt*Gt:c*Pt*Pt;b=Et(Vt,o)}else b=St(Vt,o,e);if(p=(t-(l=ht(t,0)))*b[0]+t*b[1],y=l*b[0],mt(Lt,d=p+y),v=Ut(Lt[0]),w=Ut(Lt[1]),v>=Ht){if(0!=(v-Ht|w))return c*Gt*Gt;if(p+8008566259537294e-32>d-y)return c*Gt*Gt}else if((v&Tt)>=1083231232){if(0!=(v-3230714880|w))return c*Pt*Pt;if(p<=d-y)return c*Pt*Pt}return c*(d=Ft(v,y,p))},xt=Wt;function Mt(n,r){return d(n)||d(r)||r<0||r>1?NaN:n<0?On:n===In?0:(n=v(n),Vn(-xt(1-r,n+1)))}var kt=function(n){return function(){return n}};return b(Mt,"factory",(function(n){return d(n)||n<0||n>1?kt(NaN):function(r){return d(r)?NaN:r<0?On:r===In?0:(r=v(r),Vn(-xt(1-n,r+1)))}})),Mt},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(n="undefined"!=typeof globalThis?globalThis:n||self).logcdf=r();
//# sourceMappingURL=browser.js.map
