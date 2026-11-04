(()=>{var Om=Object.defineProperty;var zm=(r,e,t)=>e in r?Om(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var Dt=(r,e)=>()=>(r&&(e=r(r=0)),e);var Hm=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var V=(r,e,t)=>zm(r,typeof e!="symbol"?e+"":e,t);function km(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Vm(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Qs(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function wd(){let r=Qs("canvas");return r.style.display="block",r}function Zr(...r){let e="THREE."+r.shift();er?er("log",e,...r):console.log(e,...r)}function Td(r){let e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Le(...r){r=Td(r);let e="THREE."+r.shift();if(er)er("warn",e,...r);else{let t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function Be(...r){r=Td(r);let e="THREE."+r.shift();if(er)er("error",e,...r);else{let t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function ms(...r){let e=r.join(" ");e in iu||(iu[e]=!0,Le(...r))}function Ed(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function li(){let r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(tn[r&255]+tn[r>>8&255]+tn[r>>16&255]+tn[r>>24&255]+"-"+tn[e&255]+tn[e>>8&255]+"-"+tn[e>>16&15|64]+tn[e>>24&255]+"-"+tn[t&63|128]+tn[t>>8&255]+"-"+tn[t>>16&255]+tn[t>>24&255]+tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]).toLowerCase()}function Ke(r,e,t){return Math.max(e,Math.min(t,r))}function Mh(r,e){return(r%e+e)%e}function Gm(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function Wm(r,e,t){return r!==e?(t-r)/(e-r):0}function Xr(r,e,t){return(1-t)*r+t*e}function qm(r,e,t,n){return Xr(r,e,1-Math.exp(-t*n))}function Xm(r,e=1){return e-Math.abs(Mh(r,e*2)-e)}function Ym(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Km(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Zm(r,e){return r+Math.floor(Math.random()*(e-r+1))}function $m(r,e){return r+Math.random()*(e-r)}function jm(r){return r*(.5-Math.random())}function Jm(r){r!==void 0&&(su=r);let e=su+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Qm(r){return r*qr}function e0(r){return r*xs}function t0(r){return r>0&&Number.isInteger(r)&&2**Math.round(Math.log2(r))===r}function n0(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Sh(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function i0(r,e,t,n,i){let s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+n)/2),h=o((e+n)/2),u=s((e-n)/2),f=o((e-n)/2),d=s((n-e)/2),p=o((n-e)/2);switch(i){case"XYX":r.set(a*h,c*u,c*f,a*l);break;case"YZY":r.set(c*f,a*h,c*u,a*l);break;case"ZXZ":r.set(c*u,c*f,a*h,a*l);break;case"XZX":r.set(a*h,c*p,c*d,a*l);break;case"YXY":r.set(c*d,a*h,c*p,a*l);break;case"ZYZ":r.set(c*p,c*d,a*h,a*l);break;default:Le("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Nc(r){switch(r.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function wh(r,e){if(e.constructor===Float32Array)return r;let t=Nc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(r/t,-1)}function Th(r,e){if(e.constructor===Float32Array)return r;let t=Nc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(r*t)}function s0(){let r={enabled:!0,workingColorSpace:fn,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===nt&&(i.r=wi(i.r),i.g=wi(i.g),i.b=wi(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===nt&&(i.r=Zs(i.r),i.g=Zs(i.g),i.b=Zs(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Di?Kr:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[o].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[fn]:{primaries:e,whitePoint:n,transfer:Kr,toXYZ:ou,fromXYZ:au,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:xt},outputColorSpaceConfig:{drawingBufferColorSpace:xt}},[xt]:{primaries:e,whitePoint:n,transfer:nt,toXYZ:ou,fromXYZ:au,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:xt}}}),r}function wi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Zs(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}function _l(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Sa.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Le("Texture: Unable to serialize Texture."),{})}function Ml(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}function Pl(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){hs.fromArray(r,s);let a=i.x*Math.abs(hs.x)+i.y*Math.abs(hs.y)+i.z*Math.abs(hs.z),c=e.dot(hs),l=t.dot(hs),h=n.dot(hs);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}function gu(r){return r.buffer._uuid===void 0&&(r.buffer._uuid=li()),r.byteOffset===0&&r.byteLength===r.buffer.byteLength?r.buffer._uuid:r.buffer._uuid+":"+r.byteOffset+":"+r.byteLength}function _0(r,e,t,n,i,s,o,a){let c;if(e.side===Yt?c=n.intersectTriangle(o,s,i,!0,a):c=n.intersectTriangle(i,s,o,e.side===Gn,a),c===null)return null;sa.copy(a),sa.applyMatrix4(r.matrixWorld);let l=t.ray.origin.distanceTo(sa);return l<t.near||l>t.far?null:{distance:l,point:sa.clone(),object:r}}function ra(r,e,t,n,i,s,o,a,c,l){r.getVertexPosition(a,ea),r.getVertexPosition(c,ta),r.getVertexPosition(l,na);let h=_0(r,e,t,n,ea,ta,na,yu);if(h){let u=new z;$i.getBarycoord(yu,ea,ta,na,u),i&&(h.uv=$i.getInterpolatedAttribute(i,a,c,l,u,new Oe)),s&&(h.uv1=$i.getInterpolatedAttribute(s,a,c,l,u,new Oe)),o&&(h.normal=$i.getInterpolatedAttribute(o,a,c,l,u,new z),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new z,materialIndex:0};$i.getNormal(ea,ta,na,f.normal),h.face=f,h.barycoord=u}return h}function ha(r,e,t,n,i,s,o){let a=r.geometry.attributes.position;if(Ra.fromBufferAttribute(a,i),La.fromBufferAttribute(a,s),t.distanceSqToSegment(Ra,La,zl,Lu)>n)return;zl.applyMatrix4(r.matrixWorld);let l=e.ray.origin.distanceTo(zl);if(!(l<e.near||l>e.far))return{distance:l,point:Lu.clone().applyMatrix4(r.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:r}}function Nu(r,e,t,n,i,s,o){let a=Wl.distanceSqToPoint(r);if(a<t){let c=new z;Wl.closestPointToPoint(r,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}function Ls(r){let e={};for(let t in r){e[t]={};for(let n in r[t]){let i=r[t][n];if(Fu(i))i.isRenderTargetTexture?(Le("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(Fu(i[0])){let s=[];for(let o=0,a=i.length;o<a;o++)s[o]=i[o].clone();e[t][n]=s}else e[t][n]=i.slice();else e[t][n]=i}}return e}function an(r){let e={};for(let t=0;t<r.length;t++){let n=Ls(r[t]);for(let i in n)e[i]=n[i]}return e}function Fu(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function w0(r){let e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Eh(r){let e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Xe.workingColorSpace}function Zi(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Wr(r){return r!==void 0&&r.inTangents!==void 0&&r.outTangents!==void 0}function R0(r){function e(i,s){return r[i]-r[s]}let t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Bu(r,e,t){let n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){let a=t[s]*e;for(let c=0;c!==e;++c)i[o++]=r[a+c]}return i}function L0(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push(...o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}function Pd(r,e,t,n,i){let s=1-r;return s*s*s*e+3*s*s*r*t+3*s*r*r*n+r*r*r*i}function C0(r,e,t,n,i){let s=1-r;return 3*s*s*(t-e)+6*s*r*(n-t)+3*r*r*(i-n)}function P0(r,e,t,n,i){let s=(r-e)/(i-e);for(let o=0;o<8;o++){let a=Pd(s,e,t,n,i)-r;if(Math.abs(a)<1e-10)break;let c=C0(s,e,t,n,i);if(Math.abs(c)<1e-10)break;s=Math.max(0,Math.min(1,s-a/c))}return s}function Du(r,e){for(let t=0,n=r.length;t!==n;t+=2)r[t]+=e}function Uu(r,e){for(let t=0,n=r.length;t!==n;t+=2)r[t]*=e}function I0(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ci;case"vector":case"vector2":case"vector3":case"vector4":return Ji;case"color":return fo;case"quaternion":return Pi;case"bool":case"boolean":return Li;case"string":return Ii}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function N0(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=I0(r.type);if(r.times===void 0){let n=[],i=[];L0(r.keys,n,i,"value"),r.times=n,r.values=i}let t;return e.parse!==void 0?t=e.parse(r):t=new e(r.name,r.times,r.values,r.interpolation),Wr(r.settings)&&(t.settings={inTangents:Zi(r.settings.inTangents,Float32Array),outTangents:Zi(r.settings.outTangents,Float32Array)}),t}function Ou(r){try{let e=r.slice(r.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}function Ch(r,e,t,n){let i=G0(n);switch(t){case mh:return r*e;case ja:return r*e/i.components*i.byteLength;case Ja:return r*e/i.components*i.byteLength;case es:return r*e*2/i.components*i.byteLength;case Qa:return r*e*2/i.components*i.byteLength;case gh:return r*e*3/i.components*i.byteLength;case on:return r*e*4/i.components*i.byteLength;case ec:return r*e*4/i.components*i.byteLength;case Ao:case bo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Mo:case So:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case nc:case sc:return Math.max(r,16)*Math.max(e,8)/4;case tc:case ic:return Math.max(r,8)*Math.max(e,8)/2;case rc:case oc:case cc:case lc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case ac:case wo:case hc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case fc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case uc:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case dc:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case pc:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case mc:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case gc:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case vc:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case xc:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case yc:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case _c:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Ac:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case bc:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Mc:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Sc:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case wc:case Tc:case Ec:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Rc:case Lc:return Math.ceil(r/4)*Math.ceil(e/4)*8;case To:case Cc:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function G0(r){switch(r){case rn:case fh:return{byteLength:1,components:1};case xr:case uh:case bn:return{byteLength:2,components:1};case Za:case $a:return{byteLength:2,components:4};case Ln:case Ka:case Cn:return{byteLength:4,components:1};case dh:case ph:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}var Wa,Gu,jl,Wu,_o,qu,pr,Gn,Yt,sn,Ss,mr,Rn,Jl,Ql,Xu,ws,Yu,Ku,Zu,$u,ju,Ju,Qu,ed,eh,th,td,nd,id,sd,rd,od,ad,cd,ld,va,xa,ya,$s,_a,Aa,ba,Ma,nh,hd,fd,_n,ih,sh,rh,oh,ah,ch,lh,Vl,ud,hh,Ts,gr,qa,Xa,ri,hn,js,Ct,Ya,Es,pt,vr,An,rn,fh,uh,xr,Ka,Ln,Cn,bn,Za,$a,Rs,dh,ph,mh,gh,on,Ti,Bi,ja,Ja,es,Qa,ec,Ao,bo,Mo,So,tc,nc,ic,sc,rc,oc,ac,cc,lc,wo,hc,fc,uc,dc,pc,mc,gc,vc,xc,yc,_c,Ac,bc,Mc,Sc,wc,Tc,Ec,Rc,Lc,To,Cc,dd,pd,md,gs,vs,ma,Gl,ds,ps,Yr,Pc,gd,vh,Eo,yr,vd,Ic,xd,Di,xt,fn,Kr,nt,ga,yd,_d,Ad,bd,xh,Md,Sd,yh,_h,Ah,Ro,bh,zn,Js,iu,er,Rd,Qn,tn,su,qr,xs,Fc,Ph,Oe,Mt,Ih,z,xl,ru,Nh,De,yl,ou,au,Xe,Bs,Sa,r0,tr,o0,Al,Ut,Fh,at,wa,Jt,$r,Ta,Ga,Ie,Ds,Zn,a0,c0,Wi,Wo,Tn,cu,lu,Hn,jr,l0,hu,Us,yi,qo,Dr,h0,f0,fu,uu,du,pu,u0,Os,bl,_t,qt,d0,nr,Ld,qi,Xo,Te,nn,Ei,$n,_i,Sl,Ai,zs,Hs,mu,wl,Tl,El,Rl,Ll,Cl,$i,un,bi,jn,Yo,ks,Vs,Gs,Xi,Yi,ls,Ur,Ko,Zo,hs,Nt,$o,p0,jt,Jr,Qr,yt,m0,Or,Il,gn,g0,On,Nl,Ws,En,zr,Wt,Xt,ir,ln,sr,Fl,v0,x0,Jn,y0,vn,Mi,Bl,jo,Jo,ys,kn,vu,fs,Qo,xu,ea,ta,na,Dl,ia,yu,sa,it,Hr,_u,Au,A0,bu,oa,Ul,Mu,Ol,eo,rr,or,Su,b0,to,Je,qs,wu,aa,Tu,M0,kr,Vr,Ri,us,S0,ca,ji,Eu,Ea,ar,Ra,La,Ru,Gr,la,zl,Lu,_s,Cu,Pu,no,io,cr,Iu,Wl,fa,ua,so,ro,lr,ei,oo,ao,Vn,co,Ca,lo,xn,hr,Cd,T0,E0,Qe,Pa,oi,dn,Ia,Na,ai,Fa,ho,Ba,Da,yn,Li,fo,Ci,Ua,Pi,Ii,Ji,As,si,Oa,Id,ci,Si,ql,fr,Xs,za,uo,bs,po,Hl,zu,Hu,ur,da,pa,ii,mo,Ki,ku,Vu,Lt,Xl,go,Yl,vo,Ni,Kl,Qi,Fi,Ms,kl,xo,Ys,Ks,dr,Ha,ka,Rh,F0,Lh,B0,D0,U0,O0,z0,H0,k0,Zl,ct,Va,V0,yo,Bh,$l,Dh=Dt(()=>{Wa="187",Gu=0,jl=1,Wu=2,_o=1,qu=2,pr=3,Gn=0,Yt=1,sn=2,Ss=0,mr=1,Rn=2,Jl=3,Ql=4,Xu=5,ws=100,Yu=101,Ku=102,Zu=103,$u=104,ju=200,Ju=201,Qu=202,ed=203,eh=204,th=205,td=206,nd=207,id=208,sd=209,rd=210,od=211,ad=212,cd=213,ld=214,va=0,xa=1,ya=2,$s=3,_a=4,Aa=5,ba=6,Ma=7,nh=0,hd=1,fd=2,_n=0,ih=1,sh=2,rh=3,oh=4,ah=5,ch=6,lh=7,Vl="attached",ud="detached",hh=300,Ts=301,gr=302,qa=303,Xa=304,ri=1e3,hn=1001,js=1002,Ct=1003,Ya=1004,Es=1005,pt=1006,vr=1007,An=1008,rn=1009,fh=1010,uh=1011,xr=1012,Ka=1013,Ln=1014,Cn=1015,bn=1016,Za=1017,$a=1018,Rs=1020,dh=35902,ph=35899,mh=1021,gh=1022,on=1023,Ti=1026,Bi=1027,ja=1028,Ja=1029,es=1030,Qa=1031,ec=1033,Ao=33776,bo=33777,Mo=33778,So=33779,tc=35840,nc=35841,ic=35842,sc=35843,rc=36196,oc=37492,ac=37496,cc=37488,lc=37489,wo=37490,hc=37491,fc=37808,uc=37809,dc=37810,pc=37811,mc=37812,gc=37813,vc=37814,xc=37815,yc=37816,_c=37817,Ac=37818,bc=37819,Mc=37820,Sc=37821,wc=36492,Tc=36494,Ec=36495,Rc=36283,Lc=36284,To=36285,Cc=36286,dd=2200,pd=2201,md=2202,gs=2300,vs=2301,ma=2302,Gl=2303,ds=2400,ps=2401,Yr=2402,Pc=2500,gd=2501,vh=0,Eo=1,yr=2,vd=3200,Ic=0,xd=1,Di="",xt="srgb",fn="srgb-linear",Kr="linear",nt="srgb",ga=7680,yd=519,_d=512,Ad=513,bd=514,xh=515,Md=516,Sd=517,yh=518,_h=519,Ah=35044,Ro=35048,bh="300 es",zn=2e3,Js=2001;iu={},er=null;Rd={[va]:va,[ya]:ba,[_a]:_a,[$s]:Aa,[xa]:xa,[ba]:ya,[Ma]:Ma,[Aa]:$s},Qn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}},tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],su=1234567,qr=Math.PI/180,xs=180/Math.PI;Fc={DEG2RAD:qr,RAD2DEG:xs,generateUUID:li,clamp:Ke,euclideanModulo:Mh,mapLinear:Gm,inverseLerp:Wm,lerp:Xr,damp:qm,pingpong:Xm,smoothstep:Ym,smootherstep:Km,randInt:Zm,randFloat:$m,randFloatSpread:jm,seededRandom:Jm,degToRad:Qm,radToDeg:e0,isPowerOfTwo:t0,ceilPowerOfTwo:n0,floorPowerOfTwo:Sh,setQuaternionFromProperEuler:i0,normalize:Th,denormalize:wh},Ph=class Ph{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ph.prototype.isVector2=!0;Oe=Ph,Mt=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3],f=s[o+0],d=s[o+1],p=s[o+2],v=s[o+3];if(u!==v||c!==f||l!==d||h!==p){let m=c*f+l*d+h*p+u*v;m<0&&(f=-f,d=-d,p=-p,v=-v,m=-m);let g=1-a;if(m<.9995){let x=Math.acos(m),M=Math.sin(x);g=Math.sin(g*x)/M,a=Math.sin(a*x)/M,c=c*g+f*a,l=l*g+d*a,h=h*g+p*a,u=u*g+v*a}else{c=c*g+f*a,l=l*g+d*a,h=h*g+p*a,u=u*g+v*a;let x=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=x,l*=x,h*=x,u*=x}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,o){let a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=s[o],f=s[o+1],d=s[o+2],p=s[o+3];return e[t]=a*p+h*u+c*d-l*f,e[t+1]=c*p+h*f+l*u-a*d,e[t+2]=l*p+h*d+a*f-c*u,e[t+3]=h*p-a*u-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(s/2),f=c(n/2),d=c(i/2),p=c(s/2);switch(o){case"XYZ":this._x=f*h*u+l*d*p,this._y=l*d*u-f*h*p,this._z=l*h*p+f*d*u,this._w=l*h*u-f*d*p;break;case"YXZ":this._x=f*h*u+l*d*p,this._y=l*d*u-f*h*p,this._z=l*h*p-f*d*u,this._w=l*h*u+f*d*p;break;case"ZXY":this._x=f*h*u-l*d*p,this._y=l*d*u+f*h*p,this._z=l*h*p+f*d*u,this._w=l*h*u-f*d*p;break;case"ZYX":this._x=f*h*u-l*d*p,this._y=l*d*u+f*h*p,this._z=l*h*p-f*d*u,this._w=l*h*u+f*d*p;break;case"YZX":this._x=f*h*u+l*d*p,this._y=l*d*u+f*h*p,this._z=l*h*p-f*d*u,this._w=l*h*u-f*d*p;break;case"XZY":this._x=f*h*u-l*d*p,this._y=l*d*u-f*h*p,this._z=l*h*p+f*d*u,this._w=l*h*u+f*d*p;break;default:Le("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(s-l)*d,this._z=(o-i)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-c)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+l)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(s-l)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-i)/d,this._x=(s+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+i*l-s*c,this._y=i*h+o*c+s*a-n*l,this._z=s*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,i=-i,s=-s,o=-o,a=-a);let c=1-t;if(a<.9995){let l=Math.acos(a),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+s*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+s*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Ih=class Ih{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ru.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ru.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*i-a*n),h=2*(a*t-s*i),u=2*(s*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-s*u,this.z=i+c*u+s*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-s*a,this.y=s*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return xl.copy(this).projectOnVector(e),this.sub(xl)}reflect(e){return this.sub(xl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Ih.prototype.isVector3=!0;z=Ih,xl=new z,ru=new Mt,Nh=class Nh{constructor(e,t,n,i,s,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,c,l)}set(e,t,n,i,s,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],p=n[8],v=i[0],m=i[3],g=i[6],x=i[1],M=i[4],A=i[7],S=i[2],w=i[5],y=i[8];return s[0]=o*v+a*x+c*S,s[3]=o*m+a*M+c*w,s[6]=o*g+a*A+c*y,s[1]=l*v+h*x+u*S,s[4]=l*m+h*M+u*w,s[7]=l*g+h*A+u*y,s[2]=f*v+d*x+p*S,s[5]=f*m+d*M+p*w,s[8]=f*g+d*A+p*y,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*s*h+n*a*c+i*s*l-i*o*c}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,f=a*c-h*s,d=l*s-o*c,p=t*u+n*f+i*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/p;return e[0]=u*v,e[1]=(i*l-h*n)*v,e[2]=(a*n-i*o)*v,e[3]=f*v,e[4]=(h*t-i*c)*v,e[5]=(i*s-a*t)*v,e[6]=d*v,e[7]=(n*c-l*t)*v,e[8]=(o*t-n*s)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return ms("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(yl.makeScale(e,t)),this}rotate(e){return ms("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(yl.makeRotation(-e)),this}translate(e,t){return ms("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(yl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Nh.prototype.isMatrix3=!0;De=Nh,yl=new De,ou=new De().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),au=new De().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Xe=s0();Sa=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Bs===void 0&&(Bs=Qs("canvas")),Bs.width=e.width,Bs.height=e.height;let i=Bs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Bs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Qs("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=wi(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(wi(t[n]/255)*255):t[n]=wi(t[n]);return{data:t,width:e.width,height:e.height}}else return Le("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},r0=0,tr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:r0++}),this.uuid=li(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(_l(i[o].image)):s.push(_l(i[o]))}else s=_l(i);n.url=s}return t||(e.images[this.uuid]=n),n}};o0=0,Al=new z,Ut=class r extends Qn{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,n=hn,i=hn,s=pt,o=An,a=on,c=rn,l=r.DEFAULT_ANISOTROPY,h=Di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:o0++}),this.uuid=li(),this.name="",this.source=new tr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new De,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Al).x}get height(){return this.source.getSize(Al).y}get depth(){return this.source.getSize(Al).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Le(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Le(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==hh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ri:e.x=e.x-Math.floor(e.x);break;case hn:e.x=e.x<0?0:1;break;case js:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ri:e.y=e.y-Math.floor(e.y);break;case hn:e.y=e.y<0?0:1;break;case js:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Ut.DEFAULT_IMAGE=null;Ut.DEFAULT_MAPPING=hh;Ut.DEFAULT_ANISOTROPY=1;Fh=class Fh{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,c=e.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],p=c[9],v=c[2],m=c[6],g=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-v)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+v)<.1&&Math.abs(p+m)<.1&&Math.abs(l+d+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(l+1)/2,A=(d+1)/2,S=(g+1)/2,w=(h+f)/4,y=(u+v)/4,_=(p+m)/4;return M>A&&M>S?M<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(M),i=w/n,s=y/n):A>S?A<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(A),n=w/i,s=_/i):S<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(S),n=y/s,i=_/s),this.set(n,i,s,t),this}let x=Math.sqrt((m-p)*(m-p)+(u-v)*(u-v)+(f-h)*(f-h));return Math.abs(x)<.001&&(x=1),this.x=(m-p)/x,this.y=(u-v)/x,this.z=(f-h)/x,this.w=Math.acos((l+d+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this.w=Ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this.w=Ke(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Fh.prototype.isVector4=!0;at=Fh,wa=class extends Qn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new at(0,0,e,t),this.scissorTest=!1,this.viewport=new at(0,0,e,t),this.textures=[];let i=n.count;for(let s=0;s<i;s++)this.textures[s]=new Ut({width:e,height:t,depth:n.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:pt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new tr(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Jt=class extends wa{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},$r=class extends Ut{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Ta=class extends Ut{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},Ga=class Ga{constructor(e,t,n,i,s,o,a,c,l,h,u,f,d,p,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,c,l,h,u,f,d,p,v,m)}set(e,t,n,i,s,o,a,c,l,h,u,f,d,p,v,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=s,g[5]=o,g[9]=a,g[13]=c,g[2]=l,g[6]=h,g[10]=u,g[14]=f,g[3]=d,g[7]=p,g[11]=v,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ga().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,i=1/Ds.setFromMatrixColumn(e,0).length(),s=1/Ds.setFromMatrixColumn(e,1).length(),o=1/Ds.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let f=o*h,d=o*u,p=a*h,v=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=d+p*l,t[5]=f-v*l,t[9]=-a*c,t[2]=v-f*l,t[6]=p+d*l,t[10]=o*c}else if(e.order==="YXZ"){let f=c*h,d=c*u,p=l*h,v=l*u;t[0]=f+v*a,t[4]=p*a-d,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=d*a-p,t[6]=v+f*a,t[10]=o*c}else if(e.order==="ZXY"){let f=c*h,d=c*u,p=l*h,v=l*u;t[0]=f-v*a,t[4]=-o*u,t[8]=p+d*a,t[1]=d+p*a,t[5]=o*h,t[9]=v-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let f=o*h,d=o*u,p=a*h,v=a*u;t[0]=c*h,t[4]=p*l-d,t[8]=f*l+v,t[1]=c*u,t[5]=v*l+f,t[9]=d*l-p,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let f=o*c,d=o*l,p=a*c,v=a*l;t[0]=c*h,t[4]=v-f*u,t[8]=p*u+d,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=d*u+p,t[10]=f-v*u}else if(e.order==="XZY"){let f=o*c,d=o*l,p=a*c,v=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=f*u+v,t[5]=o*h,t[9]=d*u-p,t[2]=p*u-d,t[6]=a*h,t[10]=v*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(a0,e,c0)}lookAt(e,t,n){let i=this.elements;return Tn.subVectors(e,t),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),Wi.crossVectors(n,Tn),Wi.lengthSq()===0&&(Math.abs(n.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),Wi.crossVectors(n,Tn)),Wi.normalize(),Wo.crossVectors(Tn,Wi),i[0]=Wi.x,i[4]=Wo.x,i[8]=Tn.x,i[1]=Wi.y,i[5]=Wo.y,i[9]=Tn.y,i[2]=Wi.z,i[6]=Wo.z,i[10]=Tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],p=n[2],v=n[6],m=n[10],g=n[14],x=n[3],M=n[7],A=n[11],S=n[15],w=i[0],y=i[4],_=i[8],P=i[12],R=i[1],I=i[5],B=i[9],N=i[13],L=i[2],D=i[6],F=i[10],G=i[14],W=i[3],H=i[7],K=i[11],$=i[15];return s[0]=o*w+a*R+c*L+l*W,s[4]=o*y+a*I+c*D+l*H,s[8]=o*_+a*B+c*F+l*K,s[12]=o*P+a*N+c*G+l*$,s[1]=h*w+u*R+f*L+d*W,s[5]=h*y+u*I+f*D+d*H,s[9]=h*_+u*B+f*F+d*K,s[13]=h*P+u*N+f*G+d*$,s[2]=p*w+v*R+m*L+g*W,s[6]=p*y+v*I+m*D+g*H,s[10]=p*_+v*B+m*F+g*K,s[14]=p*P+v*N+m*G+g*$,s[3]=x*w+M*R+A*L+S*W,s[7]=x*y+M*I+A*D+S*H,s[11]=x*_+M*B+A*F+S*K,s[15]=x*P+M*N+A*G+S*$,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],f=e[10],d=e[14],p=e[3],v=e[7],m=e[11],g=e[15],x=c*d-l*f,M=a*d-l*u,A=a*f-c*u,S=o*d-l*h,w=o*f-c*h,y=o*u-a*h;return t*(v*x-m*M+g*A)-n*(p*x-m*S+g*w)+i*(p*M-v*S+g*y)-s*(p*A-v*w+m*y)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[1],o=e[5],a=e[9],c=e[2],l=e[6],h=e[10];return t*(o*h-a*l)-n*(s*h-a*c)+i*(s*l-o*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],f=e[10],d=e[11],p=e[12],v=e[13],m=e[14],g=e[15],x=t*a-n*o,M=t*c-i*o,A=t*l-s*o,S=n*c-i*a,w=n*l-s*a,y=i*l-s*c,_=h*v-u*p,P=h*m-f*p,R=h*g-d*p,I=u*m-f*v,B=u*g-d*v,N=f*g-d*m,L=x*N-M*B+A*I+S*R-w*P+y*_;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/L;return e[0]=(a*N-c*B+l*I)*D,e[1]=(i*B-n*N-s*I)*D,e[2]=(v*y-m*w+g*S)*D,e[3]=(f*w-u*y-d*S)*D,e[4]=(c*R-o*N-l*P)*D,e[5]=(t*N-i*R+s*P)*D,e[6]=(m*A-p*y-g*M)*D,e[7]=(h*y-f*A+d*M)*D,e[8]=(o*B-a*R+l*_)*D,e[9]=(n*R-t*B-s*_)*D,e[10]=(p*w-v*A+g*x)*D,e[11]=(u*A-h*w-d*x)*D,e[12]=(a*P-o*I-c*_)*D,e[13]=(t*I-n*P+i*_)*D,e[14]=(v*M-p*S-m*x)*D,e[15]=(h*S-u*M+f*x)*D,this}scale(e){let t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,l=s*o,h=s*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,h=o+o,u=a+a,f=s*l,d=s*h,p=s*u,v=o*h,m=o*u,g=a*u,x=c*l,M=c*h,A=c*u,S=n.x,w=n.y,y=n.z;return i[0]=(1-(v+g))*S,i[1]=(d+A)*S,i[2]=(p-M)*S,i[3]=0,i[4]=(d-A)*w,i[5]=(1-(f+g))*w,i[6]=(m+x)*w,i[7]=0,i[8]=(p+M)*y,i[9]=(m-x)*y,i[10]=(1-(f+v))*y,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let o=Ds.set(i[0],i[1],i[2]).length(),a=Ds.set(i[4],i[5],i[6]).length(),c=Ds.set(i[8],i[9],i[10]).length();s<0&&(o=-o),Zn.copy(this);let l=1/o,h=1/a,u=1/c;return Zn.elements[0]*=l,Zn.elements[1]*=l,Zn.elements[2]*=l,Zn.elements[4]*=h,Zn.elements[5]*=h,Zn.elements[6]*=h,Zn.elements[8]*=u,Zn.elements[9]*=u,Zn.elements[10]*=u,t.setFromRotationMatrix(Zn),n.x=o,n.y=a,n.z=c,this}makePerspective(e,t,n,i,s,o,a=zn,c=!1){let l=this.elements,h=2*s/(t-e),u=2*s/(n-i),f=(t+e)/(t-e),d=(n+i)/(n-i),p,v;if(c)p=s/(o-s),v=o*s/(o-s);else if(a===zn)p=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===Js)p=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=zn,c=!1){let l=this.elements,h=2/(t-e),u=2/(n-i),f=-(t+e)/(t-e),d=-(n+i)/(n-i),p,v;if(c)p=1/(o-s),v=o/(o-s);else if(a===zn)p=-2/(o-s),v=-(o+s)/(o-s);else if(a===Js)p=-1/(o-s),v=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=u,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Ga.prototype.isMatrix4=!0;Ie=Ga,Ds=new z,Zn=new Ie,a0=new z(0,0,0),c0=new z(1,1,1),Wi=new z,Wo=new z,Tn=new z,cu=new Ie,lu=new Mt,Hn=class r{constructor(e=0,t=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,s=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Ke(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ke(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Le("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return cu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(cu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return lu.setFromEuler(this),this.setFromQuaternion(lu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Hn.DEFAULT_ORDER="XYZ";jr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},l0=0,hu=new z,Us=new Mt,yi=new Ie,qo=new z,Dr=new z,h0=new z,f0=new Mt,fu=new z(1,0,0),uu=new z(0,1,0),du=new z(0,0,1),pu={type:"added"},u0={type:"removed"},Os={type:"childadded",child:null},bl={type:"childremoved",child:null},_t=class r extends Qn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:l0++}),this.uuid=li(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new z,t=new Hn,n=new Mt,i=new z(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ie},normalMatrix:{value:new De}}),this.matrix=new Ie,this.matrixWorld=new Ie,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Us.setFromAxisAngle(e,t),this.quaternion.multiply(Us),this}rotateOnWorldAxis(e,t){return Us.setFromAxisAngle(e,t),this.quaternion.premultiply(Us),this}rotateX(e){return this.rotateOnAxis(fu,e)}rotateY(e){return this.rotateOnAxis(uu,e)}rotateZ(e){return this.rotateOnAxis(du,e)}translateOnAxis(e,t){return hu.copy(e).applyQuaternion(this.quaternion),this.position.add(hu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(fu,e)}translateY(e){return this.translateOnAxis(uu,e)}translateZ(e){return this.translateOnAxis(du,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(yi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?qo.copy(e):qo.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Dr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yi.lookAt(Dr,qo,this.up):yi.lookAt(qo,Dr,this.up),this.quaternion.setFromRotationMatrix(yi),i&&(yi.extractRotation(i.matrixWorld),Us.setFromRotationMatrix(yi),this.quaternion.premultiply(Us.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Be("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(pu),Os.child=e,this.dispatchEvent(Os),Os.child=null):Be("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(u0),bl.child=e,this.dispatchEvent(bl),bl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),yi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),yi.multiply(e.parent.matrixWorld)),e.applyMatrix4(yi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(pu),Os.child=e,this.dispatchEvent(Os),Os.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Dr,e,h0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Dr,f0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,i=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*i,s[13]+=n-s[1]*t-s[5]*n-s[9]*i,s[14]+=i-s[2]*t-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];s(e.shapes,u)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];i.animations.push(s(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),d=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};_t.DEFAULT_UP=new z(0,1,0);_t.DEFAULT_MATRIX_AUTO_UPDATE=!0;_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;qt=class extends _t{constructor(){super(),this.isGroup=!0,this.type="Group"}},d0={type:"move"},nr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,n),g=this._getHandJoint(l,v);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,p=.005;l.inputState.pinching&&f>d+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(d0)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new qt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Ld={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qi={h:0,s:0,l:0},Xo={h:0,s:0,l:0};Te=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=Xe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Xe.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=Xe.workingColorSpace){if(e=Mh(e,1),t=Ke(t,0,1),n=Ke(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Ml(o,s,e+1/3),this.g=Ml(o,s,e),this.b=Ml(o,s,e-1/3)}return Xe.colorSpaceToWorking(this,i),this}setStyle(e,t=xt){function n(s){s!==void 0&&parseFloat(s)<1&&Le("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,t);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Le("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);Le("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=xt){let n=Ld[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Le("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wi(e.r),this.g=wi(e.g),this.b=wi(e.b),this}copyLinearToSRGB(e){return this.r=Zs(e.r),this.g=Zs(e.g),this.b=Zs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xt){return Xe.workingToColorSpace(nn.copy(this),e),Math.round(Ke(nn.r*255,0,255))*65536+Math.round(Ke(nn.g*255,0,255))*256+Math.round(Ke(nn.b*255,0,255))}getHexString(e=xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xe.workingColorSpace){Xe.workingToColorSpace(nn.copy(this),t);let n=nn.r,i=nn.g,s=nn.b,o=Math.max(n,i,s),a=Math.min(n,i,s),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-s)/u+(i<s?6:0);break;case i:c=(s-n)/u+2;break;case s:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Xe.workingColorSpace){return Xe.workingToColorSpace(nn.copy(this),t),e.r=nn.r,e.g=nn.g,e.b=nn.b,e}getStyle(e=xt){Xe.workingToColorSpace(nn.copy(this),e);let t=nn.r,n=nn.g,i=nn.b;return e!==xt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(qi),this.setHSL(qi.h+e,qi.s+t,qi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(qi),e.getHSL(Xo);let n=Xr(qi.h,Xo.h,t),i=Xr(qi.s,Xo.s,t),s=Xr(qi.l,Xo.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},nn=new Te;Te.NAMES=Ld;Ei=class extends _t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hn,this.environmentIntensity=1,this.environmentRotation=new Hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},$n=new z,_i=new z,Sl=new z,Ai=new z,zs=new z,Hs=new z,mu=new z,wl=new z,Tl=new z,El=new z,Rl=new at,Ll=new at,Cl=new at,$i=class r{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),$n.subVectors(e,t),i.cross($n);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){$n.subVectors(i,t),_i.subVectors(n,t),Sl.subVectors(e,t);let o=$n.dot($n),a=$n.dot(_i),c=$n.dot(Sl),l=_i.dot(_i),h=_i.dot(Sl),u=o*l-a*a;if(u===0)return s.set(0,0,0),null;let f=1/u,d=(l*c-a*h)*f,p=(o*h-a*c)*f;return s.set(1-d-p,p,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Ai)===null?!1:Ai.x>=0&&Ai.y>=0&&Ai.x+Ai.y<=1}static getInterpolation(e,t,n,i,s,o,a,c){return this.getBarycoord(e,t,n,i,Ai)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Ai.x),c.addScaledVector(o,Ai.y),c.addScaledVector(a,Ai.z),c)}static getInterpolatedAttribute(e,t,n,i,s,o){return Rl.setScalar(0),Ll.setScalar(0),Cl.setScalar(0),Rl.fromBufferAttribute(e,t),Ll.fromBufferAttribute(e,n),Cl.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Rl,s.x),o.addScaledVector(Ll,s.y),o.addScaledVector(Cl,s.z),o}static isFrontFacing(e,t,n,i){return $n.subVectors(n,t),_i.subVectors(e,t),$n.cross(_i).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $n.subVectors(this.c,this.b),_i.subVectors(this.a,this.b),$n.cross(_i).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return r.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,o,a;zs.subVectors(i,n),Hs.subVectors(s,n),wl.subVectors(e,n);let c=zs.dot(wl),l=Hs.dot(wl);if(c<=0&&l<=0)return t.copy(n);Tl.subVectors(e,i);let h=zs.dot(Tl),u=Hs.dot(Tl);if(h>=0&&u<=h)return t.copy(i);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0&&c-h>0)return o=c/(c-h),t.copy(n).addScaledVector(zs,o);El.subVectors(e,s);let d=zs.dot(El),p=Hs.dot(El);if(p>=0&&d<=p)return t.copy(s);let v=d*l-c*p;if(v<=0&&l>=0&&p<=0)return a=l/(l-p),t.copy(n).addScaledVector(Hs,a);let m=h*p-d*u;if(m<=0&&u-h>=0&&d-p>=0)return mu.subVectors(s,i),a=(u-h)/(u-h+(d-p)),t.copy(i).addScaledVector(mu,a);let g=1/(m+v+f);return o=v*g,a=f*g,t.copy(n).addScaledVector(zs,o).addScaledVector(Hs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},un=class{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(jn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(jn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=jn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,jn):jn.fromBufferAttribute(s,o),jn.applyMatrix4(e.matrixWorld),this.expandByPoint(jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Yo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Yo.copy(n.boundingBox)),Yo.applyMatrix4(e.matrixWorld),this.union(Yo)}let i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,jn),jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ur),Ko.subVectors(this.max,Ur),ks.subVectors(e.a,Ur),Vs.subVectors(e.b,Ur),Gs.subVectors(e.c,Ur),Xi.subVectors(Vs,ks),Yi.subVectors(Gs,Vs),ls.subVectors(ks,Gs);let t=[0,-Xi.z,Xi.y,0,-Yi.z,Yi.y,0,-ls.z,ls.y,Xi.z,0,-Xi.x,Yi.z,0,-Yi.x,ls.z,0,-ls.x,-Xi.y,Xi.x,0,-Yi.y,Yi.x,0,-ls.y,ls.x,0];return!Pl(t,ks,Vs,Gs,Ko)||(t=[1,0,0,0,1,0,0,0,1],!Pl(t,ks,Vs,Gs,Ko))?!1:(Zo.crossVectors(Xi,Yi),t=[Zo.x,Zo.y,Zo.z],Pl(t,ks,Vs,Gs,Ko))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},bi=[new z,new z,new z,new z,new z,new z,new z,new z],jn=new z,Yo=new un,ks=new z,Vs=new z,Gs=new z,Xi=new z,Yi=new z,ls=new z,Ur=new z,Ko=new z,Zo=new z,hs=new z;Nt=new z,$o=new Oe,p0=0,jt=class extends Qn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:p0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ah,this.updateRanges=[],this.gpuType=Cn,this.version=0,this._normalizationScale=e!==void 0?Nc(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)$o.fromBufferAttribute(this,t),$o.applyMatrix3(e),this.setXY(t,$o.x,$o.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix3(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix4(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyNormalMatrix(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.transformDirection(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):wh(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Th(e,this.array)}},Jr=class extends jt{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Qr=class extends jt{constructor(e,t,n){super(new Uint32Array(e),t,n)}},yt=class extends jt{constructor(e,t,n){super(new Float32Array(e),t,n)}},m0=new un,Or=new z,Il=new z,gn=class{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):m0.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Or.subVectors(e,this.center);let t=Or.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Or,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Il.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Or.copy(e.center).add(Il)),this.expandByPoint(Or.copy(e.center).sub(Il))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},g0=0,On=new Ie,Nl=new _t,Ws=new z,En=new un,zr=new un,Wt=new z,Xt=class r extends Qn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:g0++}),this.uuid=li(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(km(e)?Qr:Jr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new De().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return On.makeRotationFromQuaternion(e),this.applyMatrix4(On),this}rotateX(e){return On.makeRotationX(e),this.applyMatrix4(On),this}rotateY(e){return On.makeRotationY(e),this.applyMatrix4(On),this}rotateZ(e){return On.makeRotationZ(e),this.applyMatrix4(On),this}translate(e,t,n){return On.makeTranslation(e,t,n),this.applyMatrix4(On),this}scale(e,t,n){return On.makeScale(e,t,n),this.applyMatrix4(On),this}lookAt(e){return Nl.lookAt(e),Nl.updateMatrix(),this.applyMatrix4(Nl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ws).negate(),this.translate(Ws.x,Ws.y,Ws.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,s=e.length;i<s;i++){let o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new yt(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&Le("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new un);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Be("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];En.setFromBufferAttribute(s),this.morphTargetsRelative?(Wt.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(Wt),Wt.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(Wt)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Be('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Be("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){let n=this.boundingSphere.center;if(En.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];zr.setFromBufferAttribute(a),this.morphTargetsRelative?(Wt.addVectors(En.min,zr.min),En.expandByPoint(Wt),Wt.addVectors(En.max,zr.max),En.expandByPoint(Wt)):(En.expandByPoint(zr.min),En.expandByPoint(zr.max))}En.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)Wt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Wt));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Wt.fromBufferAttribute(a,l),c&&(Ws.fromBufferAttribute(e,l),Wt.add(Ws)),i=Math.max(i,n.distanceToSquared(Wt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Be('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Be("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,s=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new jt(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],c=[],l=new Uint8Array(n.count);for(let P=0;P<n.count;P++)a[P]=new z,c[P]=new z;let h=new z,u=new z,f=new z,d=new Oe,p=new Oe,v=new Oe,m=new z,g=new z;function x(P,R,I){l[P]=l[R]=l[I]=1,h.fromBufferAttribute(n,P),u.fromBufferAttribute(n,R),f.fromBufferAttribute(n,I),d.fromBufferAttribute(s,P),p.fromBufferAttribute(s,R),v.fromBufferAttribute(s,I),u.sub(h),f.sub(h),p.sub(d),v.sub(d);let B=1/(p.x*v.y-v.x*p.y);isFinite(B)&&(m.copy(u).multiplyScalar(v.y).addScaledVector(f,-p.y).multiplyScalar(B),g.copy(f).multiplyScalar(p.x).addScaledVector(u,-v.x).multiplyScalar(B),a[P].add(m),a[R].add(m),a[I].add(m),c[P].add(g),c[R].add(g),c[I].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let P=0,R=M.length;P<R;++P){let I=M[P],B=I.start,N=I.count;for(let L=B,D=B+N;L<D;L+=3)x(e.getX(L+0),e.getX(L+1),e.getX(L+2))}let A=new z,S=new z,w=new z,y=new z;function _(P){w.fromBufferAttribute(i,P),y.copy(w);let R=a[P];A.copy(R),A.sub(w.multiplyScalar(w.dot(R))).normalize(),S.crossVectors(y,R);let B=S.dot(c[P])<0?-1:1;o.setXYZW(P,A.x,A.y,A.z,B)}for(let P=0,R=n.count;P<R;++P)l[P]&&_(P);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new jt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let i=new z,s=new z,o=new z,a=new z,c=new z,l=new z,h=new z,u=new z;if(e)for(let f=0,d=e.count;f<d;f+=3){let p=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,p),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,p),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Wt.fromBufferAttribute(e,t),Wt.normalize(),e.setXYZ(t,Wt.x,Wt.y,Wt.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h),d=0,p=0;for(let v=0,m=c.length;v<m;v++){a.isInterleavedBufferAttribute?d=c[v]*a.data.stride+a.offset:d=c[v]*h;for(let g=0;g<h;g++)f[p++]=l[d++]}return new jt(f,h,u)}if(this.index===null)return Le("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,n=this.index.array,i=this.attributes;for(let a in i){let c=i[a],l=e(c,n);t.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let c=[],l=s[a];for(let h=0,u=l.length;h<u;h++){let f=l[h],d=e(f,n);c.push(d)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let i={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let d=l[u];h.push(d.toJSON(e.data))}h.length>0&&(i[c]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(t))}let s=e.morphAttributes;for(let l in s){let h=[],u=s[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},ir=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ah,this.updateRanges=[],this.version=0,this.uuid=li()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=gu(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=gu(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};ln=new z,sr=class r{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i,this._normalizationScale=e!==void 0?Nc(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix4(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.applyNormalMatrix(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.transformDirection(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Zr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new jt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new r(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Zr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):wh(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Th(e,this.data.array)}},Fl=new z,v0=new z,x0=new De,Jn=class{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Fl.subVectors(n,t).cross(v0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let i=e.delta(Fl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||x0.getNormalMatrix(e),i=this.coplanarPoint(Fl).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},y0=0,vn=class extends Qn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:y0++}),this.uuid=li(),this.name="",this.type="Material",this.blending=mr,this.side=Gn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=eh,this.blendDst=th,this.blendEquation=ws,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Te(0,0,0),this.blendAlpha=0,this.depthFunc=$s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ga,this.stencilZFail=ga,this.stencilZPass=ga,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Le(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Le(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let o=[];for(let a in s){let c=s[a];delete c.metadata,o.push(c)}return o}if(t){let s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Te().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Jn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Oe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Oe().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Mi=new z,Bl=new z,jo=new z,Jo=new z,ys=class{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Mi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Mi.copy(this.origin).addScaledVector(this.direction,t),Mi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Bl.copy(e).add(t).multiplyScalar(.5),jo.copy(t).sub(e).normalize(),Jo.copy(this.origin).sub(Bl);let s=e.distanceTo(t)*.5,o=-this.direction.dot(jo),a=Jo.dot(this.direction),c=-Jo.dot(jo),l=Jo.lengthSq(),h=Math.abs(1-o*o),u,f,d,p;if(h>0)if(u=o*c-a,f=o*a-c,p=s*h,u>=0)if(f>=-p)if(f<=p){let v=1/h;u*=v,f*=v,d=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f=-s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f<=-p?(u=Math.max(0,-(-o*s+a)),f=u>0?-s:Math.min(Math.max(-s,-c),s),d=-u*u+f*(f+2*c)+l):f<=p?(u=0,f=Math.min(Math.max(-s,-c),s),d=f*(f+2*c)+l):(u=Math.max(0,-(o*s+a)),f=u>0?s:Math.min(Math.max(-s,-c),s),d=-u*u+f*(f+2*c)+l);else f=o>0?-s:s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Bl).addScaledVector(jo,f),d}intersectSphere(e,t){if(e.radius<0)return null;Mi.subVectors(e.center,this.origin);let n=Mi.dot(this.direction),i=Mi.dot(Mi)-n*n,s=e.radius*e.radius;if(i>s)return null;let o=Math.sqrt(s-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,i=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,i=(e.min.x-f.x)*l),h>=0?(s=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Mi)!==null}intersectTriangle(e,t,n,i,s){let o=this.origin,a=this.direction,c=a.x,l=a.y,h=a.z,u=e.x-o.x,f=e.y-o.y,d=e.z-o.z,p=t.x-o.x,v=t.y-o.y,m=t.z-o.z,g=n.x-o.x,x=n.y-o.y,M=n.z-o.z,A=Math.abs(c),S=Math.abs(l),w=Math.abs(h),y,_,P,R,I,B,N,L,D,F,G,W;if(A>=S&&A>=w?(P=c,B=u,D=p,W=g,c>=0?(y=l,_=h,R=f,I=d,N=v,L=m,F=x,G=M):(y=h,_=l,R=d,I=f,N=m,L=v,F=M,G=x)):S>=w?(P=l,B=f,D=v,W=x,l>=0?(y=h,_=c,R=d,I=u,N=m,L=p,F=M,G=g):(y=c,_=h,R=u,I=d,N=p,L=m,F=g,G=M)):(P=h,B=d,D=m,W=M,h>=0?(y=c,_=l,R=u,I=f,N=p,L=v,F=g,G=x):(y=l,_=c,R=f,I=u,N=v,L=p,F=x,G=g)),P===0)return null;let H=y/P,K=_/P,$=1/P,ne=R-H*B,Me=I-K*B,j=N-H*D,ae=L-K*D,_e=F-H*W,Re=G-K*W,xe=_e*ae-Re*j,ke=ne*Re-Me*_e,Pt=j*Me-ae*ne;if(i){if(xe<0||ke<0||Pt<0)return null}else if((xe<0||ke<0||Pt<0)&&(xe>0||ke>0||Pt>0))return null;let Fe=xe+ke+Pt;if(Fe===0)return null;let rt=$*(xe*B+ke*D+Pt*W);return(Fe>0?rt<0:rt>0)?null:this.at(rt/Fe,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},kn=class extends vn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.combine=nh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},vu=new Ie,fs=new ys,Qo=new gn,xu=new z,ea=new z,ta=new z,na=new z,Dl=new z,ia=new z,yu=new z,sa=new z,it=class extends _t{constructor(e=new Xt,t=new kn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(s&&a){ia.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let h=a[c],u=s[c];h!==0&&(Dl.fromBufferAttribute(u,e),o?ia.addScaledVector(Dl,h):ia.addScaledVector(Dl.sub(t),h))}t.add(ia)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Qo.copy(n.boundingSphere),Qo.applyMatrix4(s),fs.copy(e.ray).recast(e.near),!(Qo.containsPoint(fs.origin)===!1&&(fs.intersectSphere(Qo,xu)===null||fs.origin.distanceToSquared(xu)>(e.far-e.near)**2))&&(vu.copy(s).invert(),fs.copy(e.ray).applyMatrix4(vu),!(n.boundingBox!==null&&fs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,fs)))}_computeIntersections(e,t,n){let i,s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,v=f.length;p<v;p++){let m=f[p],g=o[m.materialIndex],x=Math.max(m.start,d.start),M=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let A=x,S=M;A<S;A+=3){let w=a.getX(A),y=a.getX(A+1),_=a.getX(A+2);i=ra(this,g,e,n,l,h,u,w,y,_),i&&(i.faceIndex=Math.floor(A/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let p=Math.max(0,d.start),v=Math.min(a.count,d.start+d.count);for(let m=p,g=v;m<g;m+=3){let x=a.getX(m),M=a.getX(m+1),A=a.getX(m+2);i=ra(this,o,e,n,l,h,u,x,M,A),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let p=0,v=f.length;p<v;p++){let m=f[p],g=o[m.materialIndex],x=Math.max(m.start,d.start),M=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let A=x,S=M;A<S;A+=3){let w=A,y=A+1,_=A+2;i=ra(this,g,e,n,l,h,u,w,y,_),i&&(i.faceIndex=Math.floor(A/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let p=Math.max(0,d.start),v=Math.min(c.count,d.start+d.count);for(let m=p,g=v;m<g;m+=3){let x=m,M=m+1,A=m+2;i=ra(this,o,e,n,l,h,u,x,M,A),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}};Hr=new at,_u=new at,Au=new at,A0=new at,bu=new Ie,oa=new z,Ul=new gn,Mu=new Ie,Ol=new ys,eo=class extends it{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Vl,this.bindMatrix=new Ie,this.bindMatrixInverse=new Ie,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new un),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,oa),this.boundingBox.expandByPoint(oa)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new gn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,oa),this.boundingSphere.expandByPoint(oa)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ul.copy(this.boundingSphere),Ul.applyMatrix4(i),e.ray.intersectsSphere(Ul)!==!1&&(Mu.copy(i).invert(),Ol.copy(e.ray).applyMatrix4(Mu),!(this.boundingBox!==null&&Ol.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ol)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new at,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Vl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===ud?this.bindMatrixInverse.copy(this.bindMatrix).invert():Le("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;_u.fromBufferAttribute(i.attributes.skinIndex,e),Au.fromBufferAttribute(i.attributes.skinWeight,e),t.isVector4?(Hr.copy(t),t.set(0,0,0,0)):(Hr.set(t.x,t.y,t.z,1),t.set(0,0,0)),Hr.applyMatrix4(this.bindMatrix);for(let s=0;s<4;s++){let o=Au.getComponent(s);if(o!==0){let a=_u.getComponent(s);bu.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(A0.copy(Hr).applyMatrix4(bu),o)}}return t.isVector4&&(t.w=Hr.w),t.applyMatrix4(this.bindMatrixInverse)}},rr=class extends _t{constructor(){super(),this.isBone=!0,this.type="Bone"}},or=class extends Ut{constructor(e=null,t=1,n=1,i,s,o,a,c,l=Ct,h=Ct,u,f){super(null,o,a,c,l,h,i,s,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Su=new Ie,b0=new Ie,to=class r{constructor(e=[],t=[]){this.uuid=li(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Le("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ie)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ie;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){let a=e[s]?e[s].matrixWorld:b0;Su.multiplyMatrices(a,t[s]),Su.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new r(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new or(t,e,e,on,Cn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let s=e.bones[n],o=t[s];o===void 0&&(Le("Skeleton: No bone found with UUID:",s),o=new rr),this.bones.push(o),this.boneInverses.push(new Ie().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){let o=t[i];e.bones.push(o.uuid);let a=n[i];e.boneInverses.push(a.toArray())}return e}},Je=class extends jt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},qs=new Ie,wu=new Ie,aa=[],Tu=new un,M0=new Ie,kr=new it,Vr=new gn,Ri=class extends it{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Je(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,M0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new un),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,qs),Tu.copy(e.boundingBox).applyMatrix4(qs),this.boundingBox.union(Tu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new gn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,qs),Vr.copy(e.boundingSphere).applyMatrix4(qs),this.boundingSphere.union(Vr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(kr.geometry=this.geometry,kr.material=this.material,kr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Vr.copy(this.boundingSphere),Vr.applyMatrix4(n),e.ray.intersectsSphere(Vr)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,qs),wu.multiplyMatrices(n,qs),kr.matrixWorld=wu,kr.raycast(e,aa);for(let o=0,a=aa.length;o<a;o++){let c=aa[o];c.instanceId=s,c.object=this,t.push(c)}aa.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Je(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new or(new Float32Array(i*this.count),i,this.count,ja,Cn));let s=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=i*e;return s[c]=a,s.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},us=new gn,S0=new Oe(.5,.5),ca=new z,ji=class{constructor(e=new Jn,t=new Jn,n=new Jn,i=new Jn,s=new Jn,o=new Jn){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=zn,n=!1){let i=this.planes,s=e.elements,o=s[0],a=s[1],c=s[2],l=s[3],h=s[4],u=s[5],f=s[6],d=s[7],p=s[8],v=s[9],m=s[10],g=s[11],x=s[12],M=s[13],A=s[14],S=s[15];if(i[0].setComponents(l-o,d-h,g-p,S-x).normalize(),i[1].setComponents(l+o,d+h,g+p,S+x).normalize(),i[2].setComponents(l+a,d+u,g+v,S+M).normalize(),i[3].setComponents(l-a,d-u,g-v,S-M).normalize(),n)i[4].setComponents(c,f,m,A).normalize(),i[5].setComponents(l-c,d-f,g-m,S-A).normalize();else if(i[4].setComponents(l-c,d-f,g-m,S-A).normalize(),t===zn)i[5].setComponents(l+c,d+f,g+m,S+A).normalize();else if(t===Js)i[5].setComponents(c,f,m,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),us.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),us.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(us)}intersectsSprite(e){us.center.set(0,0,0);let t=S0.distanceTo(e.center);return us.radius=.7071067811865476+t,us.applyMatrix4(e.matrixWorld),this.intersectsSphere(us)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(ca.x=i.normal.x>0?e.max.x:e.min.x,ca.y=i.normal.y>0?e.max.y:e.min.y,ca.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ca)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Eu=new Ie,Ea=class r{constructor(){this.coordinateSystem=zn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let i=0;i<t.length;i++){let s=t[i];Eu.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),n[i]===void 0&&(n[i]=new ji),n[i].setFromProjectionMatrix(Eu,s.coordinateSystem,s.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let i=0;i<e._count;i++)t[i]===void 0&&(t[i]=new ji),t[i].copy(n[i]);return this._count=e._count,this}clone(){return new r().copy(this)}},ar=class extends vn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Te(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ra=new z,La=new z,Ru=new Ie,Gr=new ys,la=new gn,zl=new z,Lu=new z,_s=class extends _t{constructor(e=new Xt,t=new ar){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Ra.fromBufferAttribute(t,i-1),La.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Ra.distanceTo(La);e.setAttribute("lineDistance",new yt(n,1))}else Le("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),la.copy(n.boundingSphere),la.applyMatrix4(i),la.radius+=s,e.ray.intersectsSphere(la)===!1)return;Ru.copy(i).invert(),Gr.copy(e.ray).applyMatrix4(Ru);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let v=d,m=p-1;v<m;v+=l){let g=h.getX(v),x=h.getX(v+1),M=ha(this,e,Gr,c,g,x,v);M&&t.push(M)}if(this.isLineLoop){let v=h.getX(p-1),m=h.getX(d),g=ha(this,e,Gr,c,v,m,p-1);g&&t.push(g)}}else{let d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let v=d,m=p-1;v<m;v+=l){let g=ha(this,e,Gr,c,v,v+1,v);g&&t.push(g)}if(this.isLineLoop){let v=ha(this,e,Gr,c,p-1,d,p-1);v&&t.push(v)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};Cu=new z,Pu=new z,no=class extends _s{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Cu.fromBufferAttribute(t,i),Pu.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Cu.distanceTo(Pu);e.setAttribute("lineDistance",new yt(n,1))}else Le("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},io=class extends _s{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},cr=class extends vn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Iu=new Ie,Wl=new ys,fa=new gn,ua=new z,so=class extends _t{constructor(e=new Xt,t=new cr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),fa.copy(n.boundingSphere),fa.applyMatrix4(i),fa.radius+=s,e.ray.intersectsSphere(fa)===!1)return;Iu.copy(i).invert(),Wl.copy(e.ray).applyMatrix4(Iu);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let f=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let p=f,v=d;p<v;p++){let m=l.getX(p);ua.fromBufferAttribute(u,m),Nu(ua,m,c,i,e,t,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let p=f,v=d;p<v;p++)ua.fromBufferAttribute(u,p),Nu(ua,p,c,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};ro=class extends Ut{constructor(e=[],t=Ts,n,i,s,o,a,c,l,h){super(e,t,n,i,s,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},lr=class extends Ut{constructor(e,t,n,i,s,o,a,c,l){super(e,t,n,i,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},ei=class extends Ut{constructor(e,t,n=Ln,i,s,o,a=Ct,c=Ct,l,h=Ti,u=1){if(h!==Ti&&h!==Bi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:u};super(f,i,s,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new tr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},oo=class extends ei{constructor(e,t=Ln,n=Ts,i,s,o=Ct,a=Ct,c,l=Ti){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,i,s,o,a,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ao=class extends Ut{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Vn=class r extends Xt{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};let a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],h=[],u=[],f=0,d=0;p("z","y","x",-1,-1,n,t,e,o,s,0),p("z","y","x",1,-1,n,t,-e,o,s,1),p("x","z","y",1,1,e,n,t,i,o,2),p("x","z","y",1,-1,e,n,-t,i,o,3),p("x","y","z",1,-1,e,t,n,i,s,4),p("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new yt(l,3)),this.setAttribute("normal",new yt(h,3)),this.setAttribute("uv",new yt(u,2));function p(v,m,g,x,M,A,S,w,y,_,P){let R=A/y,I=S/_,B=A/2,N=S/2,L=w/2,D=y+1,F=_+1,G=0,W=0,H=new z;for(let K=0;K<F;K++){let $=K*I-N;for(let ne=0;ne<D;ne++){let Me=ne*R-B;H[v]=Me*x,H[m]=$*M,H[g]=L,l.push(H.x,H.y,H.z),H[v]=0,H[m]=0,H[g]=w>0?1:-1,h.push(H.x,H.y,H.z),u.push(ne/y),u.push(1-K/_),G+=1}}for(let K=0;K<_;K++)for(let $=0;$<y;$++){let ne=f+$+D*K,Me=f+$+D*(K+1),j=f+($+1)+D*(K+1),ae=f+($+1)+D*K;c.push(ne,Me,ae),c.push(Me,j,ae),W+=6}a.addGroup(d,W,P),d+=W,f+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},co=class r extends Xt{constructor(e=1,t=1,n=4,i=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i,heightSegments:s},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),s=Math.max(1,Math.floor(s));let o=[],a=[],c=[],l=[],h=t/2,u=Math.PI/2*e,f=t,d=2*u+f,p=n*2+s,v=i+1,m=new z,g=new z;for(let x=0;x<=p;x++){let M=0,A=0,S=0,w=0;if(x<=n){let P=x/n,R=P*Math.PI/2;A=-h-e*Math.cos(R),S=e*Math.sin(R),w=-e*Math.cos(R),M=P*u}else if(x<=n+s){let P=(x-n)/s;A=-h+P*t,S=e,w=0,M=u+P*f}else{let P=(x-n-s)/n,R=P*Math.PI/2;A=h+e*Math.sin(R),S=e*Math.cos(R),w=e*Math.sin(R),M=u+f+P*u}let y=Math.max(0,Math.min(1,M/d)),_=0;x===0?_=.5/i:x===p&&(_=-.5/i);for(let P=0;P<=i;P++){let R=P/i,I=R*Math.PI*2,B=Math.sin(I),N=Math.cos(I);g.x=-S*N,g.y=A,g.z=S*B,a.push(g.x,g.y,g.z),m.set(-S*N,w,S*B),m.normalize(),c.push(m.x,m.y,m.z),l.push(R+_,y)}if(x>0){let P=(x-1)*v;for(let R=0;R<i;R++){let I=P+R,B=P+R+1,N=x*v+R,L=x*v+R+1;o.push(I,B,N),o.push(B,L,N)}}}this.setIndex(o),this.setAttribute("position",new yt(a,3)),this.setAttribute("normal",new yt(c,3)),this.setAttribute("uv",new yt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},Ca=class r extends Xt{constructor(e=1,t=1,n=1,i=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};let l=this;i=Math.floor(i),s=Math.floor(s);let h=[],u=[],f=[],d=[],p=0,v=[],m=n/2,g=0;x(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new yt(u,3)),this.setAttribute("normal",new yt(f,3)),this.setAttribute("uv",new yt(d,2));function x(){let A=new z,S=new z,w=0,y=(t-e)/n;for(let _=0;_<=s;_++){let P=[],R=_/s,I=R*(t-e)+e;for(let B=0;B<=i;B++){let N=B/i,L=N*c+a,D=Math.sin(L),F=Math.cos(L);S.x=I*D,S.y=-R*n+m,S.z=I*F,u.push(S.x,S.y,S.z),A.set(D,y,F).normalize(),f.push(A.x,A.y,A.z),d.push(N,1-R),P.push(p++)}v.push(P)}for(let _=0;_<i;_++)for(let P=0;P<s;P++){let R=v[P][_],I=v[P+1][_],B=v[P+1][_+1],N=v[P][_+1];(e>0||P!==0)&&(h.push(R,I,N),w+=3),(t>0||P!==s-1)&&(h.push(I,B,N),w+=3)}l.addGroup(g,w,0),g+=w}function M(A){let S=p,w=new Oe,y=new z,_=0,P=A===!0?e:t,R=A===!0?1:-1;for(let B=1;B<=i;B++)u.push(0,m*R,0),f.push(0,R,0),d.push(.5,.5),p++;let I=p;for(let B=0;B<=i;B++){let L=B/i*c+a,D=Math.cos(L),F=Math.sin(L);y.x=P*F,y.y=m*R,y.z=P*D,u.push(y.x,y.y,y.z),f.push(0,R,0),w.x=D*.5+.5,w.y=F*.5*R+.5,d.push(w.x,w.y),p++}for(let B=0;B<i;B++){let N=S+B,L=I+B;A===!0?h.push(L,L+1,N):h.push(L+1,L,N),_+=3}l.addGroup(g,_,A===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},lo=class r extends Ca{constructor(e=1,t=1,n=32,i=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new r(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},xn=class r extends Xt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=e/a,f=t/c,d=[],p=[],v=[],m=[];for(let g=0;g<h;g++){let x=g*f-o;for(let M=0;M<l;M++){let A=M*u-s;p.push(A,-x,0),v.push(0,0,1),m.push(M/a),m.push(1-g/c)}}for(let g=0;g<c;g++)for(let x=0;x<a;x++){let M=x+l*g,A=x+l*(g+1),S=x+1+l*(g+1),w=x+1+l*g;d.push(M,A,w),d.push(A,S,w)}this.setIndex(d),this.setAttribute("position",new yt(p,3)),this.setAttribute("normal",new yt(v,3)),this.setAttribute("uv",new yt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}},hr=class r extends Xt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new z,f=new z,d=[],p=[],v=[],m=[];for(let g=0;g<=n;g++){let x=[],M=g/n,A=o+M*a,S=e*Math.cos(A),w=Math.sqrt(e*e-S*S),y=0;g===0&&o===0?y=.5/t:g===n&&c===Math.PI&&(y=-.5/t);for(let _=0;_<=t;_++){let P=_/t,R=i+P*s;u.x=-w*Math.cos(R),u.y=S,u.z=w*Math.sin(R),p.push(u.x,u.y,u.z),f.copy(u).normalize(),v.push(f.x,f.y,f.z),m.push(P+y,1-M),x.push(l++)}h.push(x)}for(let g=0;g<n;g++)for(let x=0;x<t;x++){let M=h[g][x+1],A=h[g][x],S=h[g+1][x],w=h[g+1][x+1];(g!==0||o>0)&&d.push(M,A,w),(g!==n-1||c<Math.PI)&&d.push(A,S,w)}this.setIndex(d),this.setAttribute("position",new yt(p,3)),this.setAttribute("normal",new yt(v,3)),this.setAttribute("uv",new yt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};Cd={clone:Ls,merge:an},T0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,E0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Qe=class extends vn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=T0,this.fragmentShader=E0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ls(e.uniforms),this.uniformsGroups=w0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new Te().setHex(i.value);break;case"v2":this.uniforms[n].value=new Oe().fromArray(i.value);break;case"v3":this.uniforms[n].value=new z().fromArray(i.value);break;case"v4":this.uniforms[n].value=new at().fromArray(i.value);break;case"m3":this.uniforms[n].value=new De().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Ie().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Pa=class extends Qe{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},oi=class extends vn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ic,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},dn=class extends oi{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Oe(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ke(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Te(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Te(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Te(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return ms('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){ms('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},Ia=class extends vn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Na=class extends vn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};ai=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=s)){let a=t[1];e<a&&(n=2,s=a);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=t[--n-1],e>=s)break t}o=n,n=0;break n}break e}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Fa=class extends ai{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ds,endingEnd:ds}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,o=e+1,a=i[s],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case ps:s=e,a=2*t-n;break;case Yr:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case ps:o=e,c=2*n-t;break;case Yr:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(n-t)/(i-t),v=p*p,m=v*p,g=-f*m+2*f*v-f*p,x=(1+f)*m+(-1.5-2*f)*v+(-.5+f)*p+1,M=(-1-d)*m+(1.5+d)*v+.5*p,A=d*m-d*v;for(let S=0;S!==a;++S)s[S]=g*o[h+S]+x*o[l+S]+M*o[c+S]+A*o[u+S];return s}},ho=class extends ai{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(i-t),u=1-h;for(let f=0;f!==a;++f)s[f]=o[l+f]*u+o[c+f]*h;return s}},Ba=class extends ai{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Da=class extends ai{interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let p=(n-t)/(i-t),v=1-p;for(let m=0;m!==a;++m)s[m]=o[l+m]*v+o[c+m]*p;return s}let f=a*2,d=e-1;for(let p=0;p!==a;++p){let v=o[l+p],m=o[c+p],g=d*f+p*2,x=u[g],M=u[g+1],A=e*f+p*2,S=h[A],w=h[A+1],y=P0(n,t,x,S,i);s[p]=Pd(y,v,M,w,m)}return s}};yn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Zi(t,this.TimeBufferType),this.values=Zi(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Zi(e.times,Array),values:Zi(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),Wr(e.settings)&&(n.settings={inTangents:Zi(e.settings.inTangents,Array),outTangents:Zi(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ba(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ho(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Fa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Da(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case gs:t=this.InterpolantFactoryMethodDiscrete;break;case vs:t=this.InterpolantFactoryMethodLinear;break;case ma:t=this.InterpolantFactoryMethodSmooth;break;case Gl:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Le("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return gs;case this.InterpolantFactoryMethodLinear:return vs;case this.InterpolantFactoryMethodSmooth:return ma;case this.InterpolantFactoryMethodBezier:return Gl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e;Wr(this.settings)&&(Du(this.settings.inTangents,e),Du(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;Wr(this.settings)&&(Uu(this.settings.inTangents,e),Uu(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,i=n.length,s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Be("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(Be("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){Be("KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){Be("KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&Vm(i))for(let a=0,c=i.length;a!==c;++a){let l=i[a];if(isNaN(l)){Be("KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ma,s=e.length-1,o=1;for(let a=1;a<s;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(i)c=!0;else{let u=a*n,f=u-n,d=u+n;for(let p=0;p!==n;++p){let v=t[u+p];if(v!==t[f+p]||v!==t[d+p]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,Wr(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};yn.prototype.ValueTypeName="";yn.prototype.TimeBufferType=Float32Array;yn.prototype.ValueBufferType=Float32Array;yn.prototype.DefaultInterpolation=vs;Li=class extends yn{constructor(e,t,n){super(e,t,n)}};Li.prototype.ValueTypeName="bool";Li.prototype.ValueBufferType=Array;Li.prototype.DefaultInterpolation=gs;Li.prototype.InterpolantFactoryMethodLinear=void 0;Li.prototype.InterpolantFactoryMethodSmooth=void 0;fo=class extends yn{constructor(e,t,n,i){super(e,t,n,i)}};fo.prototype.ValueTypeName="color";Ci=class extends yn{constructor(e,t,n,i){super(e,t,n,i)}};Ci.prototype.ValueTypeName="number";Ua=class extends ai{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t),l=e*a;for(let h=l+a;l!==h;l+=4)Mt.slerpFlat(s,0,o,l-a,o,l,c);return s}},Pi=class extends yn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Ua(this.times,this.values,this.getValueSize(),e)}};Pi.prototype.ValueTypeName="quaternion";Pi.prototype.InterpolantFactoryMethodSmooth=void 0;Ii=class extends yn{constructor(e,t,n){super(e,t,n)}};Ii.prototype.ValueTypeName="string";Ii.prototype.ValueBufferType=Array;Ii.prototype.DefaultInterpolation=gs;Ii.prototype.InterpolantFactoryMethodLinear=void 0;Ii.prototype.InterpolantFactoryMethodSmooth=void 0;Ji=class extends yn{constructor(e,t,n,i){super(e,t,n,i)}};Ji.prototype.ValueTypeName="vector";As=class{constructor(e="",t=-1,n=[],i=Pc){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=li(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(N0(n[o]).scale(i));let s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,o=n.length;s!==o;++s)t.push(yn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let s=t.length,o=[];for(let a=0;a<s;a++){let c=[],l=[];c.push((a+s-1)%s,a,(a+1)%s),l.push(0,1,0);let h=R0(c);c=Bu(c,1,h),l=Bu(l,1,h),!i&&c[0]===0&&(c.push(s),l.push(l[0])),o.push(new Ci(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){let l=e[a],h=l.name.match(s);if(h&&h.length>1){let u=h[1],f=i[u];f||(i[u]=f=[]),f.push(l)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};si={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(Ou(r)||(this.files[r]=e))},get:function(r){if(this.enabled!==!1&&!Ou(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};Oa=class{constructor(e,t,n){let i=this,s=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let d=l[u],p=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Id=new Oa,ci=class{constructor(e){this.manager=e!==void 0?e:Id,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};ci.DEFAULT_MATERIAL_NAME="__DEFAULT";Si={},ql=class extends Error{constructor(e,t){super(e),this.response=t}},fr=class extends ci{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=si.get(`file:${e}`);if(s!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0);return}if(Si[e]!==void 0){Si[e].push({onLoad:t,onProgress:n,onError:i});return}Si[e]=[],Si[e].push({onLoad:t,onProgress:n,onError:i});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Le("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=Si[e],u=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),d=f?parseInt(f):0,p=d!==0,v=0,m=new ReadableStream({start(g){x();function x(){u.read().then(({done:M,value:A})=>{if(M)g.close();else{v+=A.byteLength;let S=new ProgressEvent("progress",{lengthComputable:p,loaded:v,total:d});for(let w=0,y=h.length;w<y;w++){let _=h[w];_.onProgress&&_.onProgress(S)}g.enqueue(A),x()}},M=>{g.error(M)})}}});return new Response(m)}else throw new ql(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a==="")return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return l.arrayBuffer().then(p=>d.decode(p))}}}).then(l=>{si.add(`file:${e}`,l);let h=Si[e];delete Si[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onLoad&&d.onLoad(l)}}).catch(l=>{let h=Si[e];if(h===void 0)throw this.manager.itemError(e),l;delete Si[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},Xs=new WeakMap,za=class extends ci{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=si.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);else{let u=Xs.get(o);u===void 0&&(u=[],Xs.set(o,u)),u.push({onLoad:t,onError:i})}return o}let a=Qs("img");function c(){h(),t&&t(this);let u=Xs.get(this)||[];for(let f=0;f<u.length;f++){let d=u[f];d.onLoad&&d.onLoad(this)}Xs.delete(this),s.manager.itemEnd(e)}function l(u){h(),i&&i(u),si.remove(`image:${e}`);let f=Xs.get(this)||[];for(let d=0;d<f.length;d++){let p=f[d];p.onError&&p.onError(u)}Xs.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),si.add(`image:${e}`,a),s.manager.itemStart(e),a.fetchPriority=this.priority,a.src=e,a}},uo=class extends ci{constructor(e){super(e)}load(e,t,n,i){let s=new Ut,o=new za(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}},bs=class extends _t{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Te(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},po=class extends bs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Te(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Hl=new Ie,zu=new z,Hu=new z,ur=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Oe(512,512),this.mapType=rn,this.map=null,this.mapPass=null,this.matrix=new Ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ji,this._frameExtents=new Oe(1,1),this._viewportCount=1,this._viewports=[new at(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;zu.setFromMatrixPosition(e.matrixWorld),t.position.copy(zu),Hu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Hu),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){Hl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Hl,e.coordinateSystem,e.reversedDepth);let s=this._frameExtents,o=i?i.z/s.x:1,a=i?i.w/s.y:1,c=i?i.x/s.x:0,l=i?i.y/s.y:0;e.coordinateSystem===Js||e.reversedDepth?t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),t.multiply(Hl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},da=new z,pa=new Mt,ii=new z,mo=class extends _t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ie,this.projectionMatrix=new Ie,this.projectionMatrixInverse=new Ie,this.coordinateSystem=zn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(da,pa,ii),ii.x===1&&ii.y===1&&ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(da,pa,ii.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(da,pa,ii),ii.x===1&&ii.y===1&&ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(da,pa,ii.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ki=new z,ku=new Oe,Vu=new Oe,Lt=class extends mo{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=xs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(qr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return xs*2*Math.atan(Math.tan(qr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ki.x,Ki.y).multiplyScalar(-e/Ki.z),Ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ki.x,Ki.y).multiplyScalar(-e/Ki.z)}getViewSize(e,t){return this.getViewBounds(e,ku,Vu),t.subVectors(Vu,ku)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(qr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Xl=class extends ur{constructor(){super(new Lt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=xs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},go=class extends bs{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.target=new _t,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new Xl}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Yl=class extends ur{constructor(){super(new Lt(90,1,.5,500)),this.isPointLightShadow=!0}},vo=class extends bs{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Yl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Ni=class extends mo{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Kl=class extends ur{constructor(){super(new Ni(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Qi=class extends bs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.target=new _t,this.shadow=new Kl}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Fi=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},Ms=class extends Xt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}},kl=new WeakMap,xo=class extends ci{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Le("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Le("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=si.get(`image-bitmap:${e}`);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(l=>{kl.has(o)===!0?(i&&i(kl.get(o)),s.manager.itemError(e),s.manager.itemEnd(e)):(t&&t(l),s.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);return}let a={};a.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",a.headers=this.requestHeader,a.priority=this.priority,a.cache=this.cache,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign({},s.options,{colorSpaceConversion:"none"}))}).then(function(l){return si.add(`image-bitmap:${e}`,l),t&&t(l),s.manager.itemEnd(e),l}).catch(function(l){i&&i(l),kl.set(c,l),si.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});si.add(`image-bitmap:${e}`,c),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},Ys=-90,Ks=1,dr=class extends _t{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Lt(Ys,Ks,e,t);i.layers=this.layers,this.add(i);let s=new Lt(Ys,Ks,e,t);s.layers=this.layers,this.add(s);let o=new Lt(Ys,Ks,e,t);o.layers=this.layers,this.add(o);let a=new Lt(Ys,Ks,e,t);a.layers=this.layers,this.add(a);let c=new Lt(Ys,Ks,e,t);c.layers=this.layers,this.add(c);let l=new Lt(Ys,Ks,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,c]=t;for(let l of t)this.remove(l);if(e===zn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Js)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,c,l,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.mipmapsAutoUpdate=v,e.setRenderTarget(n,5,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Ha=class extends Lt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},ka=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,o;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,i=this.valueSize,s=e*i+i,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[s+a]=n[a];o=t}else{o+=t;let a=t/o;this._mixBufferRegion(n,s,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){let c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-s,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){a.setValue(n,i);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,o=i;s!==o;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let o=0;o!==s;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){Mt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){let o=this._workIndex*s;Mt.multiplyQuaternionsFlat(e,o,e,t,e,n),Mt.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,s){let o=1-i;for(let a=0;a!==s;++a){let c=t+a;e[c]=e[c]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,s){for(let o=0;o!==s;++o){let a=t+o;e[a]=e[a]+e[n+o]*i}}},Rh="\\[\\]\\.:\\/",F0=new RegExp("["+Rh+"]","g"),Lh="[^"+Rh+"]",B0="[^"+Rh.replace("\\.","")+"]",D0=/((?:WC+[\/:])*)/.source.replace("WC",Lh),U0=/(WCOD+)?/.source.replace("WCOD",B0),O0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Lh),z0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Lh),H0=new RegExp("^"+D0+U0+O0+z0+"$"),k0=["material","materials","bones","map"],Zl=class{constructor(e,t,n){let i=n||ct.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ct=class r{constructor(e,t,n){this.path=t,this.parsedPath=n||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,n):new r(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(F0,"")}static parseTrackName(e){let t=H0.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);k0.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,s=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Le("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){Be("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Be("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Be("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Be("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Be("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Be("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){Be("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[i];if(o===void 0){let l=t.nodeName;Be("PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Be("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Be("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ct.Composite=Zl;ct.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ct.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ct.prototype.GetterByBindingType=[ct.prototype._getValue_direct,ct.prototype._getValue_array,ct.prototype._getValue_arrayElement,ct.prototype._getValue_toArray];ct.prototype.SetterByBindingTypeAndVersioning=[[ct.prototype._setValue_direct,ct.prototype._setValue_direct_setNeedsUpdate,ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_array,ct.prototype._setValue_array_setNeedsUpdate,ct.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_arrayElement,ct.prototype._setValue_arrayElement_setNeedsUpdate,ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_fromArray,ct.prototype._setValue_fromArray_setNeedsUpdate,ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];Va=class{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;let s=t.tracks,o=s.length,a=new Array(o),c={endingStart:ds,endingEnd:ds};for(let l=0;l!==o;++l){let h=s[l].createInterpolant(null);a[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=pd,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){let i=this._clip.duration,s=e._clip.duration,o=s/i,a=i/s;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let i=this._mixer,s=i.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);let c=a.parameterPositions,l=a.sampleValues;return c[0]=s,c[1]=s+n,l[0]=e/o,l[1]=t/o,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}let s=this._startTime;if(s!==null){let c=(e-s)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);let o=this._updateTime(t),a=this._updateWeight(e);if(a>0){let c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case gd:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulateAdditive(a);break;case Pc:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,i=this.time+e,s=this._loopCount,o=n===md;if(e===0)return s===-1?i:o&&(s&1)===1?t-i:i;if(n===dd){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){let a=Math.floor(i/t);i-=t*a,s+=Math.abs(a);let c=this.repetitions-s;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){let l=e<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this._loopCount=s,this.time=i;if(o&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){let i=this._interpolantSettings;n?(i.endingStart=ps,i.endingEnd=ps):(e?i.endingStart=this.zeroSlopeAtStart?ps:ds:i.endingStart=Yr,t?i.endingEnd=this.zeroSlopeAtEnd?ps:ds:i.endingEnd=Yr)}_scheduleFading(e,t,n){let i=this._mixer,s=i.time,o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,c=o.sampleValues;return a[0]=s,c[0]=t,a[1]=s+e,c[1]=n,this}},V0=new Float32Array(1),yo=class extends Qn{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){let n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,o=e._propertyBindings,a=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName,h=l[c];h===void 0&&(h={},l[c]=h);for(let u=0;u!==s;++u){let f=i[u],d=f.name,p=h[d];if(p!==void 0)++p.referenceCount,o[u]=p;else{if(p=o[u],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,c,d));continue}let v=t&&t._propertyBindings[u].binding.parsedPath;p=new ka(ct.create(n,d,v),f.ValueTypeName,f.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,c,d),o[u]=p}a[u].resultBuffer=p.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let i=this._actions,s=this._actionsByClip,o=s[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=o;else{let a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;let s=e._clip.uuid,o=this._actionsByClip,a=o[s],c=a.knownActions,l=c[c.length-1],h=e._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),e._byClipCacheIndex=null;let u=a.actionByRoot,f=(e._localRoot||this._root).uuid;delete u[f],c.length===0&&delete o[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){let i=this._bindingsByRootAndName,s=this._bindings,o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,o=this._bindingsByRootAndName,a=o[i],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete a[s],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new ho(new Float32Array(2),new Float32Array(2),1,V0),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){let i=t||this._root,s=i.uuid,o=typeof e=="string"?As.findByName(i,e):e,a=o!==null?o.uuid:e,c=this._actionsByClip[a],l=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Pc),c!==void 0){let u=c.actionByRoot[s];if(u!==void 0&&u.blendMode===n)return u;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;let h=new Va(this,o,t,n);return this._bindAction(h,l),this._addInactiveAction(h,a,s),h}existingAction(e,t){let n=t||this._root,i=n.uuid,s=typeof e=="string"?As.findByName(n,e):e,o=s?s.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),o=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(i,e,s,o);let a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){let o=s.knownActions;for(let a=0,c=o.length;a!==c;++a){let l=o[a];this._deactivateAction(l);let h=l._cacheIndex,u=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let o in n){let a=n[o].actionByRoot,c=a[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}let i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(let o in s){let a=s[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}},Bh=class Bh{constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){let s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=i,this}};Bh.prototype.isMatrix2=!0;$l=Bh;typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wa}}));typeof window<"u"&&(window.__THREE__?Le("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wa)});function ep(){let r=null,e=!1,t=null,n=null;function i(s,o){n=r.requestAnimationFrame(i),t(s,o)}return{start:function(){e!==!0&&t!==null&&r!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function W0(r){let e=new WeakMap;function t(a,c){let l=a.array,h=a.usage,u=l.byteLength,f=r.createBuffer();r.bindBuffer(c,f),r.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=r.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=r.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=r.SHORT;else if(l instanceof Uint32Array)d=r.UNSIGNED_INT;else if(l instanceof Int32Array)d=r.INT;else if(l instanceof Int8Array)d=r.BYTE;else if(l instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(r.bindBuffer(l,a),u.length===0)r.bufferSubData(l,0,h);else{u.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<u.length;d++){let p=u[f],v=u[d];v.start<=p.start+p.count+1?p.count=Math.max(p.count,v.start+v.count-p.start):(++f,u[f]=v)}u.length=f+1;for(let d=0,p=u.length;d<p;d++){let v=u[d];r.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(r.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:s,update:o}}function wx(r,e,t,n,i,s){let o=new Te(0),a=i===!0?0:1,c,l,h=null,u=0,f=null;function d(x){let M=x.isScene===!0?x.background:null;if(M&&M.isTexture){let A=x.backgroundBlurriness>0;M=e.get(M,A)}return M}function p(x){let M=!1,A=d(x);A===null?m(o,a):A&&A.isColor&&(m(A,1),M=!0);let S=r.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,s):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(r.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function v(x,M){let A=d(M);A&&A.isCubeTexture?(l===void 0&&(l=new it(new Vn(1,1,1),new Qe({name:"BackgroundCubeMaterial",uniforms:Ls(fi.backgroundCube.uniforms),vertexShader:fi.backgroundCube.vertexShader,fragmentShader:fi.backgroundCube.fragmentShader,side:Yt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(S,w,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=A,l.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Sx.makeRotationFromEuler(M.backgroundRotation)).transpose(),A.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(tp),l.material.toneMapped=Xe.getTransfer(A.colorSpace)!==nt,(h!==A||u!==A.version||f!==r.toneMapping)&&(l.material.needsUpdate=!0,h=A,u=A.version,f=r.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new it(new xn(2,2),new Qe({name:"BackgroundMaterial",uniforms:Ls(fi.background.uniforms),vertexShader:fi.background.vertexShader,fragmentShader:fi.background.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=Xe.getTransfer(A.colorSpace)!==nt,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(h!==A||u!==A.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,h=A,u=A.version,f=r.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function m(x,M){x.getRGB(Bc,Eh(r)),t.buffers.color.setClear(Bc.r,Bc.g,Bc.b,M,s)}function g(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,M=1){o.set(x),a=M,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(x){a=x,m(o,a)},render:p,addToRenderList:v,dispose:g}}function Tx(r,e){let t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null),s=i,o=!1;function a(I,B,N,L,D){let F=!1,G=u(I,L,N,B);s!==G&&(s=G,l(s.object)),F=d(I,L,N,D),F&&p(I,L,N,D),D!==null&&e.update(D,r.ELEMENT_ARRAY_BUFFER),(F||o)&&(o=!1,A(I,B,N,L),D!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(D).buffer))}function c(){return r.createVertexArray()}function l(I){return r.bindVertexArray(I)}function h(I){return r.deleteVertexArray(I)}function u(I,B,N,L){let D=L.wireframe===!0,F=n[B.id];F===void 0&&(F={},n[B.id]=F);let G=I.isInstancedMesh===!0?I.id:0,W=F[G];W===void 0&&(W={},F[G]=W);let H=W[N.id];H===void 0&&(H={},W[N.id]=H);let K=H[D];return K===void 0&&(K=f(c()),H[D]=K),K}function f(I){let B=[],N=[],L=[];for(let D=0;D<t;D++)B[D]=0,N[D]=0,L[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:N,attributeDivisors:L,object:I,attributes:{},index:null}}function d(I,B,N,L){let D=s.attributes,F=B.attributes,G=0,W=N.getAttributes();for(let H in W)if(W[H].location>=0){let $=D[H],ne=F[H];if(ne===void 0&&(H==="instanceMatrix"&&I.instanceMatrix&&(ne=I.instanceMatrix),H==="instanceColor"&&I.instanceColor&&(ne=I.instanceColor)),$===void 0||$.attribute!==ne||ne&&$.data!==ne.data)return!0;G++}return s.attributesNum!==G||s.index!==L}function p(I,B,N,L){let D={},F=B.attributes,G=0,W=N.getAttributes();for(let H in W)if(W[H].location>=0){let $=F[H];$===void 0&&(H==="instanceMatrix"&&I.instanceMatrix&&($=I.instanceMatrix),H==="instanceColor"&&I.instanceColor&&($=I.instanceColor));let ne={};ne.attribute=$,$&&$.data&&(ne.data=$.data),D[H]=ne,G++}s.attributes=D,s.attributesNum=G,s.index=L}function v(){let I=s.newAttributes;for(let B=0,N=I.length;B<N;B++)I[B]=0}function m(I){g(I,0)}function g(I,B){let N=s.newAttributes,L=s.enabledAttributes,D=s.attributeDivisors;N[I]=1,L[I]===0&&(r.enableVertexAttribArray(I),L[I]=1),D[I]!==B&&(r.vertexAttribDivisor(I,B),D[I]=B)}function x(){let I=s.newAttributes,B=s.enabledAttributes;for(let N=0,L=B.length;N<L;N++)B[N]!==I[N]&&(r.disableVertexAttribArray(N),B[N]=0)}function M(I,B,N,L,D,F,G){G===!0?r.vertexAttribIPointer(I,B,N,D,F):r.vertexAttribPointer(I,B,N,L,D,F)}function A(I,B,N,L){v();let D=L.attributes,F=N.getAttributes(),G=B.defaultAttributeValues;for(let W in F){let H=F[W];if(H.location>=0){let K=D[W];if(K===void 0&&(W==="instanceMatrix"&&I.instanceMatrix&&(K=I.instanceMatrix),W==="instanceColor"&&I.instanceColor&&(K=I.instanceColor)),K!==void 0){let $=K.normalized,ne=K.itemSize,Me=e.get(K);if(Me===void 0)continue;let j=Me.buffer,ae=Me.type,_e=Me.bytesPerElement,Re=ae===r.INT||ae===r.UNSIGNED_INT||K.gpuType===Ka;if(K.isInterleavedBufferAttribute){let xe=K.data,ke=xe.isInterleavedBuffer===!0?xe.stride:xe.itemSize,Pt=K.offset;if(xe.isInstancedInterleavedBuffer||xe.isInstancedBufferAttribute){for(let Fe=0;Fe<H.locationSize;Fe++)g(H.location+Fe,xe.meshPerAttribute);I.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let Fe=0;Fe<H.locationSize;Fe++)m(H.location+Fe);r.bindBuffer(r.ARRAY_BUFFER,j);for(let Fe=0;Fe<H.locationSize;Fe++)M(H.location+Fe,ne/H.locationSize,ae,$,ke*_e,(Pt+ne/H.locationSize*Fe)*_e,Re)}else{if(K.isInstancedBufferAttribute){for(let xe=0;xe<H.locationSize;xe++)g(H.location+xe,K.meshPerAttribute);I.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let xe=0;xe<H.locationSize;xe++)m(H.location+xe);r.bindBuffer(r.ARRAY_BUFFER,j);for(let xe=0;xe<H.locationSize;xe++)M(H.location+xe,ne/H.locationSize,ae,$,ne*_e,ne/H.locationSize*xe*_e,Re)}}else if(G!==void 0){let $=G[W];if($!==void 0)switch($.length){case 2:r.vertexAttrib2fv(H.location,$);break;case 3:r.vertexAttrib3fv(H.location,$);break;case 4:r.vertexAttrib4fv(H.location,$);break;default:r.vertexAttrib1fv(H.location,$)}}}}x()}function S(){P();for(let I in n){let B=n[I];for(let N in B){let L=B[N];for(let D in L){let F=L[D];for(let G in F)h(F[G].object),delete F[G];delete L[D]}}delete n[I]}}function w(I){if(n[I.id]===void 0)return;let B=n[I.id];for(let N in B){let L=B[N];for(let D in L){let F=L[D];for(let G in F)h(F[G].object),delete F[G];delete L[D]}}delete n[I.id]}function y(I){for(let B in n){let N=n[B];for(let L in N){let D=N[L];if(D[I.id]===void 0)continue;let F=D[I.id];for(let G in F)h(F[G].object),delete F[G];delete D[I.id]}}}function _(I){for(let B in n){let N=n[B],L=I.isInstancedMesh===!0?I.id:0,D=N[L];if(D!==void 0){for(let F in D){let G=D[F];for(let W in G)h(G[W].object),delete G[W];delete D[F]}delete N[L],Object.keys(N).length===0&&delete n[B]}}}function P(){R(),o=!0,s!==i&&(s=i,l(s.object))}function R(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:P,resetDefaultState:R,dispose:S,releaseStatesOfGeometry:w,releaseStatesOfObject:_,releaseStatesOfProgram:y,initAttributes:v,enableAttribute:m,disableUnusedAttributes:x}}function Ex(r,e,t){let n;function i(c){n=c}function s(c,l){r.drawArrays(n,c,l),t.update(l,n,1)}function o(c,l,h){h!==0&&(r.drawArraysInstanced(n,c,l,h),t.update(l,n,h))}function a(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let f=0;for(let d=0;d<h;d++)f+=l[d];t.update(f,n,1)}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function Rx(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let y=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(y){return!(y!==on&&n.convert(y)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(y){let _=y===bn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(y!==rn&&y!==Cn&&!_&&n.convert(y)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function c(y){if(y==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(Le("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=t.logarithmicDepthBuffer===!0&&u===!1;t.reversedDepthBuffer===!0&&u===!1&&Le("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&u===!0&&Le("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),x=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),M=r.getParameter(r.MAX_VARYING_VECTORS),A=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),S=r.getParameter(r.MAX_SAMPLES),w=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:x,maxVaryings:M,maxFragmentUniforms:A,maxSamples:S,samples:w}}function Lx(r){let e=this,t=null,n=0,i=!1,s=!1,o=new Jn,a=new De,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){let p=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,g=r.get(u);if(!i||p===null||p.length===0||s&&!m)s?h(null):l();else{let x=s?0:n,M=x*4,A=g.clippingState||null;c.value=A,A=h(p,f,M,d);for(let S=0;S!==M;++S)A[S]=t[S];g.clippingState=A,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,p){let v=u!==null?u.length:0,m=null;if(v!==0){if(m=c.value,p!==!0||m===null){let g=d+v*4,x=f.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<g)&&(m=new Float32Array(g));for(let M=0,A=d;M!==v;++M,A+=4)o.copy(u[M]).applyMatrix4(x,a),o.normal.toArray(m,A),m[A+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function Fd(r,e,t){return new Po(r,{minFilter:An,generateMipmaps:e,type:bn,colorSpace:fn,depthBuffer:t})}function Io(r,e,t){return new Qe({name:r,uniforms:e,vertexShader:We.cube_vert,fragmentShader:t,side:Yt,blending:Ss,depthTest:!1,depthWrite:!1})}function Bx(){return Io("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${np}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Dx(){return Io("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:ip}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Ux(){return Io("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Px}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Bd(){return Io("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Dd(){return Io("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Ox(r){let e=new WeakMap,t=new WeakMap,n=null;function i(f,d=!1){return f==null?null:d?o(f):s(f)}function s(f){if(f&&f.isTexture){let d=f.mapping;if(d===qa||d===Xa)if(e.has(f)){let p=e.get(f).texture;return a(p,f.mapping)}else{let p=f.image;if(p&&p.height>0){let v=new Po(p.height);return v.fromEquirectangularTexture(r,f),e.set(f,v),f.addEventListener("dispose",l),a(v.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let d=f.mapping,p=d===qa||d===Xa,v=d===Ts||d===gr;if(p||v){let m=t.get(f),g=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return n===null&&(n=new Ar(r)),m=p?n.fromEquirectangular(f,m):n.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),m.texture;if(m!==void 0)return m.texture;{let x=f.image;return p&&x&&x.height>0||v&&x&&c(x)?(n===null&&(n=new Ar(r)),m=p?n.fromEquirectangular(f):n.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),f.addEventListener("dispose",h),m.texture):null}}}return f}function a(f,d){return d===qa?f.mapping=Ts:d===Xa&&(f.mapping=gr),f}function c(f){let d=0,p=6;for(let v=0;v<p;v++)f[v]!==void 0&&d++;return d===p}function l(f){let d=f.target;d.removeEventListener("dispose",l);let p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function h(f){let d=f.target;d.removeEventListener("dispose",h);let p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:u}}function zx(r){let e={};function t(n){if(e[n]!==void 0)return e[n];let i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&ms("WebGLRenderer: "+n+" extension not supported."),i}}}function Hx(r,e,t,n){let i={},s=new WeakMap,o=new FinalizationRegistry(p=>delete i[p]);function a(p){c(p.target)}function c(p){p.index!==null&&e.remove(p.index);for(let m in p.attributes)e.remove(p.attributes[m]);p.removeEventListener("dispose",a),delete i[p.id],o.unregister(p);let v=s.get(p);v&&(e.remove(v),s.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function l(p,v){return i[v.id]!==void 0||(v.addEventListener("dispose",a),i[v.id]=new WeakRef(v),o.register(v,v.id,v),t.memory.geometries++),v}function h(p){let v=p.attributes;for(let m in v)e.update(v[m],r.ARRAY_BUFFER)}function u(p){let v=p.index,m=p.attributes.position,g=0;if(m===void 0)return;let x=v!==null?v.array.length:m.array.length/3-1,M=m.count>=65535?Qr:Jr,A=new M(Math.ceil(x/3)*6,1),S=A.array;if(v!==null){let y=v.array;g=v.version;for(let _=0,P=0;_<x;_+=3){let R=y[_+0],I=y[_+1],B=y[_+2];S[P++]=R,S[P++]=I,S[P++]=I,S[P++]=B,S[P++]=B,S[P++]=R}}else{g=m.version;for(let y=0,_=0;y<x;y+=3){let P=y+0,R=y+1,I=y+2;S[_++]=P,S[_++]=R,S[_++]=R,S[_++]=I,S[_++]=I,S[_++]=P}}A.version=g;let w=s.get(p);w&&e.remove(w),s.set(p,A)}function f(p){let v=s.get(p);if(v){let m=p.index;m!==null&&v.version<m.version&&u(p)}else u(p);return s.get(p)}function d(){for(let p in i){let v=i[p].deref();v!==void 0&&c(v)}}return{get:l,update:h,getWireframeAttribute:f,dispose:d}}function kx(r,e,t){let n;function i(u){n=u}let s,o;function a(u){s=u.type,o=u.bytesPerElement}function c(u,f){r.drawElements(n,f,s,u*o),t.update(f,n,1)}function l(u,f,d){d!==0&&(r.drawElementsInstanced(n,f,s,u*o,d),t.update(f,n,d))}function h(u,f,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,u,0,d);let v=0;for(let m=0;m<d;m++)v+=f[m];t.update(v,n,1)}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function Vx(r){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:Be("WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Gx(r,e,t){let n=new WeakMap,i=new at;function s(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let P=function(){y.dispose(),n.delete(a),a.removeEventListener("dispose",P)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],x=a.morphAttributes.color||[],M=0;d===!0&&(M=1),p===!0&&(M=2),v===!0&&(M=3);let A=a.attributes.position.count*M,S=1;A>e.maxTextureSize&&(S=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);let w=new Float32Array(A*S*4*u),y=new $r(w,A,S,u);y.type=Cn,y.needsUpdate=!0;let _=M*4;for(let R=0;R<u;R++){let I=m[R],B=g[R],N=x[R],L=A*S*4*R;for(let D=0;D<I.count;D++){let F=D*_;d===!0&&(i.fromBufferAttribute(I,D),w[L+F+0]=i.x,w[L+F+1]=i.y,w[L+F+2]=i.z,w[L+F+3]=0),p===!0&&(i.fromBufferAttribute(B,D),w[L+F+4]=i.x,w[L+F+5]=i.y,w[L+F+6]=i.z,w[L+F+7]=0),v===!0&&(i.fromBufferAttribute(N,D),w[L+F+8]=i.x,w[L+F+9]=i.y,w[L+F+10]=i.z,w[L+F+11]=N.itemSize===4?i.w:1)}}f={count:u,texture:y,size:new Oe(A,S)},n.set(a,f),a.addEventListener("dispose",P)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let d=0;for(let v=0;v<l.length;v++)d+=l[v];let p=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(r,"morphTargetBaseInfluence",p),c.getUniforms().setValue(r,"morphTargetInfluences",l)}c.getUniforms().setValue(r,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function Wx(r,e,t,n,i){let s=new WeakMap;function o(l){let h=i.render.frame,u=l.geometry,f=e.get(l,u);if(s.get(f)!==h&&(e.update(f),s.set(f,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==h&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),s.set(l,h))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==h&&(d.update(),s.set(d,h))}return f}function a(){s=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}function Xx(r,e,t,n,i,s){let o=new Jt(e,t,{type:r,depthBuffer:i,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,c=null,l=null,h=new Xt;h.setAttribute("position",new yt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new yt([0,2,0,0,2,0],2));let u=new Pa({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new it(h,u),d=new Ni(-1,1,1,-1,0,1),p=null,v=null,m=!1,g,x=null,M=[],A=!1;this.setSize=function(S,w){o.setSize(S,w),a!==null&&a.setSize(S,w),c!==null&&c.setSize(S,w);for(let y=0;y<M.length;y++){let _=M[y];_.setSize&&_.setSize(S,w)}},this.setEffects=function(S){M=S,A=M.length>0&&M[0].isRenderPass===!0;let w=o.width,y=o.height;M.length>0&&a===null&&(a=new Jt(w,y,{type:bn,depthBuffer:!1,stencilBuffer:!1}),c=new Jt(w,y,{type:bn,depthBuffer:!1,stencilBuffer:!1}));let _=i===!0&&M.some(P=>P.needsDepthTexture===!0);_!==(o.depthTexture!==null)&&(_===!0&&l===null&&(l=new ei(w,y),s===!0&&(l.format=Bi,l.type=Rs)),o.dispose(),o.depthTexture=_?l:null,o.resolveDepthBuffer=_,o.storeMultisampledDepthBuffer=_);for(let P=0;P<M.length;P++){let R=M[P];R.setSize&&R.setSize(w,y),_&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(l)}},this.begin=function(S,w){if(m||S.toneMapping===_n&&M.length===0)return!1;if(x=w,w!==null){let y=w.width,_=w.height;(o.width!==y||o.height!==_)&&this.setSize(y,_)}return A===!1&&S.setRenderTarget(o),g=S.toneMapping,S.toneMapping=_n,!0},this.hasRenderPass=function(){return A},this.end=function(S,w){S.toneMapping=g,m=!0;let y=o,_=a;for(let P=0;P<M.length;P++){let R=M[P];R.enabled!==!1&&(R.render(S,_,y,w),R.needsSwap!==!1&&(y=_,_=_===a?c:a))}if(p!==S.outputColorSpace||v!==S.toneMapping){p=S.outputColorSpace,v=S.toneMapping,u.defines={},Xe.getTransfer(p)===nt&&(u.defines.SRGB_TRANSFER="");let P=qx[v];P&&(u.defines[P]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=y.texture,S.setRenderTarget(x),S.render(f,d),x=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),h.dispose(),u.dispose()}}function br(r,e,t){let n=r[0];if(n<=0||n>0)return r;let i=e*t,s=Ud[i];if(s===void 0&&(s=new Float32Array(i),Ud[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function Ot(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function zt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Oc(r,e){let t=Od[e];t===void 0&&(t=new Int32Array(e),Od[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Yx(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Kx(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;r.uniform2fv(this.addr,e),zt(t,e)}}function Zx(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ot(t,e))return;r.uniform3fv(this.addr,e),zt(t,e)}}function $x(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;r.uniform4fv(this.addr,e),zt(t,e)}}function jx(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),zt(t,e)}else{if(Ot(t,n))return;kd.set(n),r.uniformMatrix2fv(this.addr,!1,kd),zt(t,n)}}function Jx(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),zt(t,e)}else{if(Ot(t,n))return;Hd.set(n),r.uniformMatrix3fv(this.addr,!1,Hd),zt(t,n)}}function Qx(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),zt(t,e)}else{if(Ot(t,n))return;zd.set(n),r.uniformMatrix4fv(this.addr,!1,zd),zt(t,n)}}function ey(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function ty(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;r.uniform2iv(this.addr,e),zt(t,e)}}function ny(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;r.uniform3iv(this.addr,e),zt(t,e)}}function iy(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;r.uniform4iv(this.addr,e),zt(t,e)}}function sy(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function ry(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;r.uniform2uiv(this.addr,e),zt(t,e)}}function oy(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;r.uniform3uiv(this.addr,e),zt(t,e)}}function ay(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;r.uniform4uiv(this.addr,e),zt(t,e)}}function zc(r){return r.version===0&&(r.compareFunction=_h,r.needsUpdate=!0),r}function cy(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?s=zc(rp):s=sp,t.setTexture2D(e||s,i)}function ly(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||cp,i)}function hy(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_CUBE_SHADOW?s=zc(op):s=lp,t.setTextureCube(e||s,i)}function fy(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||ap,i)}function uy(r){switch(r){case 5126:return Yx;case 35664:return Kx;case 35665:return Zx;case 35666:return $x;case 35674:return jx;case 35675:return Jx;case 35676:return Qx;case 5124:case 35670:return ey;case 35667:case 35671:return ty;case 35668:case 35672:return ny;case 35669:case 35673:return iy;case 5125:return sy;case 36294:return ry;case 36295:return oy;case 36296:return ay;case 35678:case 36198:case 36298:case 36306:case 35682:return cy;case 35679:case 36299:case 36307:return ly;case 35680:case 36300:case 36308:case 36293:return hy;case 36289:case 36303:case 36311:case 36292:return fy}}function dy(r,e){r.uniform1fv(this.addr,e)}function py(r,e){let t=br(e,this.size,2);r.uniform2fv(this.addr,t)}function my(r,e){let t=br(e,this.size,3);r.uniform3fv(this.addr,t)}function gy(r,e){let t=br(e,this.size,4);r.uniform4fv(this.addr,t)}function vy(r,e){let t=br(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function xy(r,e){let t=br(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function yy(r,e){let t=br(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function _y(r,e){r.uniform1iv(this.addr,e)}function Ay(r,e){r.uniform2iv(this.addr,e)}function by(r,e){r.uniform3iv(this.addr,e)}function My(r,e){r.uniform4iv(this.addr,e)}function Sy(r,e){r.uniform1uiv(this.addr,e)}function wy(r,e){r.uniform2uiv(this.addr,e)}function Ty(r,e){r.uniform3uiv(this.addr,e)}function Ey(r,e){r.uniform4uiv(this.addr,e)}function Ry(r,e,t){let n=this.cache,i=e.length,s=Oc(t,i);Ot(n,s)||(r.uniform1iv(this.addr,s),zt(n,s));let o;this.type===r.SAMPLER_2D_SHADOW?o=zc(rp):o=sp;for(let a=0;a!==i;++a)t.setTexture2D(e[a]||o,s[a])}function Ly(r,e,t){let n=this.cache,i=e.length,s=Oc(t,i);Ot(n,s)||(r.uniform1iv(this.addr,s),zt(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||cp,s[o])}function Cy(r,e,t){let n=this.cache,i=e.length,s=Oc(t,i);Ot(n,s)||(r.uniform1iv(this.addr,s),zt(n,s));let o;this.type===r.SAMPLER_CUBE_SHADOW?o=zc(op):o=lp;for(let a=0;a!==i;++a)t.setTextureCube(e[a]||o,s[a])}function Py(r,e,t){let n=this.cache,i=e.length,s=Oc(t,i);Ot(n,s)||(r.uniform1iv(this.addr,s),zt(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||ap,s[o])}function Iy(r){switch(r){case 5126:return dy;case 35664:return py;case 35665:return my;case 35666:return gy;case 35674:return vy;case 35675:return xy;case 35676:return yy;case 5124:case 35670:return _y;case 35667:case 35671:return Ay;case 35668:case 35672:return by;case 35669:case 35673:return My;case 5125:return Sy;case 36294:return wy;case 36295:return Ty;case 36296:return Ey;case 35678:case 36198:case 36298:case 36306:case 35682:return Ry;case 35679:case 36299:case 36307:return Ly;case 35680:case 36300:case 36308:case 36293:return Cy;case 36289:case 36303:case 36311:case 36292:return Py}}function Vd(r,e){r.seq.push(e),r.map[e.id]=e}function Ny(r,e,t){let n=r.name,i=n.length;for(Uh.lastIndex=0;;){let s=Uh.exec(n),o=Uh.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Vd(t,l===void 0?new zh(a,r,e):new Hh(a,r,e));break}else{let u=t.map[a];u===void 0&&(u=new kh(a),Vd(t,u)),t=u}}}function Gd(r,e,t){let n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}function Dy(r,e){let t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Uy(r){Xe._getMatrix(Wd,Xe.workingColorSpace,r);let e=`mat3( ${Wd.elements.map(t=>t.toFixed(4))} )`;switch(Xe.getTransfer(r)){case Kr:return[e,"LinearTransferOETF"];case nt:return[e,"sRGBTransferOETF"];default:return Le("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function qd(r,e,t){let n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+Dy(r.getShaderSource(e),a)}else return s}function Oy(r,e){let t=Uy(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}function Hy(r,e){let t=zy[e];return t===void 0?(Le("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function ky(){Xe.getLuminanceCoefficients(Dc);let r=Dc.x.toFixed(4),e=Dc.y.toFixed(4),t=Dc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Vy(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Co).join(`
`)}function Gy(r){let e=[];for(let t in r){let n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Wy(r,e){let t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(e,i),o=s.name,a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function Co(r){return r!==""}function Xd(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Yd(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function Vh(r){return r.replace(qy,Xy)}function Xy(r,e){let t=We[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Vh(t)}function Kd(r){return r.replace(Yy,Ky)}function Ky(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Zd(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function $y(r){return Zy[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}function Jy(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":jy[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}function e_(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":Qy[r.combine]||"ENVMAP_BLENDING_NONE"}function t_(r,e,t,n){let i=r.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,c=$y(t),l=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Jy(t),u=e_(t),f=Vy(t),d=Gy(s),p=i.createProgram(),v,m,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(Co).join(`
`),v.length>0&&(v+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(Co).join(`
`),m.length>0&&(m+=`
`)):(v=[Zd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Co).join(`
`),m=[Zd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==_n?"#define TONE_MAPPING":"",t.toneMapping!==_n?We.tonemapping_pars_fragment:"",t.toneMapping!==_n?Hy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,Oy("linearToOutputTexel",t.outputColorSpace),ky(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Co).join(`
`)),o=Vh(o),o=Xd(o,t),o=Yd(o,t),a=Vh(a),a=Xd(a,t),a=Yd(a,t),o=Kd(o),a=Kd(a),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,v=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,m=["#define varying in",t.glslVersion===bh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===bh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let x=g+v+o,M=g+m+a,A=Gd(i,i.VERTEX_SHADER,x),S=Gd(i,i.FRAGMENT_SHADER,M);i.attachShader(p,A),i.attachShader(p,S),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function w(R){if(r.debug.checkShaderErrors){let I=i.getProgramInfoLog(p)||"",B=i.getShaderInfoLog(A)||"",N=i.getShaderInfoLog(S)||"",L=I.trim(),D=B.trim(),F=N.trim(),G=!0,W=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(G=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,p,A,S);else{let H=qd(i,A,"vertex"),K=qd(i,S,"fragment");Be("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+L+`
`+H+`
`+K)}else L!==""?Le("WebGLProgram: Program Info Log:",L):(D===""||F==="")&&(W=!1);W&&(R.diagnostics={runnable:G,programLog:L,vertexShader:{log:D,prefix:v},fragmentShader:{log:F,prefix:m}})}i.deleteShader(A),i.deleteShader(S),y=new _r(i,p),_=Wy(i,p)}let y;this.getUniforms=function(){return y===void 0&&w(this),y};let _;this.getAttributes=function(){return _===void 0&&w(this),_};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=i.getProgramParameter(p,Fy)),P},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=By++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=A,this.fragmentShader=S,this}function i_(r){return r===es||r===wo||r===To}function s_(r,e,t,n,i,s){let o=new jr,a=new Gh,c=new Set,l=[],h=new Map,u=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(y){return c.add(y),y===0?"uv":`uv${y}`}function p(y,_,P,R,I,B){let N=R.fog,L=I.geometry,D=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?R.environment:null,F=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,G=e.get(y.envMap||D,F),W=f[y.type],H=n.precision;y.precision!==null&&(H=n.getMaxPrecision(y.precision),H!==y.precision&&Le("WebGLProgram.getParameters:",y.precision,"not supported, using",H,"instead."));let K=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,$=K!==void 0?K.length:0,ne=0;L.morphAttributes.position!==void 0&&(ne=1),L.morphAttributes.normal!==void 0&&(ne=2),L.morphAttributes.color!==void 0&&(ne=3);let Me,j,ae,_e;if(W){let ge=fi[W];Me=ge.vertexShader,j=ge.fragmentShader}else{Me=y.vertexShader,j=y.fragmentShader;let ge=a.getVertexShaderStage(y),ot=a.getFragmentShaderStage(y);a.update(y,ge,ot),ae=ge.id,_e=ot.id}let Re=r.getRenderTarget(),xe=r.state.buffers.depth.getReversed(),ke=I.isInstancedMesh===!0,Pt=I.isBatchedMesh===!0,Fe=!!y.map,rt=!!y.matcap,ht=!!G,Ze=ht&&G.isPMREMTexture===!0,Zt=!!y.aoMap,Ft=!!y.lightMap,mn=!!y.bumpMap&&y.wireframe===!1,At=!!y.normalMap,ni=!!y.displacementMap,kt=!!y.emissiveMap,Fn=!!y.metalnessMap,Bn=!!y.roughnessMap,Dn=y.anisotropy>0,k=y.clearcoat>0,Un=y.diffuseRoughness>0,gt=y.dispersion>0,vt=y.retroreflectivity>0,me=y.iridescence>0,Bt=y.sheen>0,Ne=y.transmission>0,Ue=Dn&&!!y.anisotropyMap,C=k&&!!y.clearcoatMap,b=k&&!!y.clearcoatNormalMap,X=k&&!!y.clearcoatRoughnessMap,se=Un&&!!y.diffuseRoughnessMap,ie=me&&!!y.iridescenceMap,ce=me&&!!y.iridescenceThicknessMap,de=Bt&&!!y.sheenColorMap,Q=Bt&&!!y.sheenRoughnessMap,ee=!!y.specularMap,he=!!y.specularColorMap,U=!!y.specularIntensityMap,te=Ne&&!!y.transmissionMap,J=Ne&&!!y.thicknessMap,fe=!!y.gradientMap,oe=!!y.alphaMap,le=y.alphaTest>0,Ce=!!y.alphaHash,Ge=!!y.extensions,re=_n;y.toneMapped&&(Re===null||Re.isXRRenderTarget===!0)&&(re=r.toneMapping);let Pe=Ze?G.isCompressedCubeTexture?G.image[0].mipmaps:G.mipmaps:null,Ve={shaderID:W,shaderType:y.type,shaderName:y.name,vertexShader:Me,fragmentShader:j,defines:y.defines,customVertexShaderID:ae,customFragmentShaderID:_e,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:H,batching:Pt,batchingColor:Pt&&I._colorsTexture!==null,instancing:ke,instancingColor:ke&&I.instanceColor!==null,instancingMorph:ke&&I.morphTexture!==null,outputColorSpace:Re===null?r.outputColorSpace:Re.isXRRenderTarget===!0?Re.texture.colorSpace:Xe.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Fe,matcap:rt,envMap:ht,envMapMode:ht&&G.mapping,envMapPMREM:Ze,envMapMaxLod:Ze?Pe.length-1:null,envMapSize:Ze?Pe[0].width:null,aoMap:Zt,lightMap:Ft,bumpMap:mn,normalMap:At,displacementMap:ni,emissiveMap:kt,normalMapObjectSpace:At&&y.normalMapType===xd,normalMapTangentSpace:At&&y.normalMapType===Ic,packedNormalMap:At&&y.normalMapType===Ic&&i_(y.normalMap.format),metalnessMap:Fn,roughnessMap:Bn,anisotropy:Dn,anisotropyMap:Ue,clearcoat:k,clearcoatMap:C,clearcoatNormalMap:b,clearcoatRoughnessMap:X,diffuseRoughness:Un,diffuseRoughnessMap:se,dispersion:gt,retroreflection:vt,iridescence:me,iridescenceMap:ie,iridescenceThicknessMap:ce,sheen:Bt,sheenColorMap:de,sheenRoughnessMap:Q,specularMap:ee,specularColorMap:he,specularIntensityMap:U,transmission:Ne,transmissionMap:te,thicknessMap:J,gradientMap:fe,opaque:y.transparent===!1&&y.blending===mr&&y.alphaToCoverage===!1,alphaMap:oe,alphaTest:le,alphaHash:Ce,combine:y.combine,mapUv:Fe&&d(y.map.channel),aoMapUv:Zt&&d(y.aoMap.channel),lightMapUv:Ft&&d(y.lightMap.channel),bumpMapUv:mn&&d(y.bumpMap.channel),normalMapUv:At&&d(y.normalMap.channel),displacementMapUv:ni&&d(y.displacementMap.channel),emissiveMapUv:kt&&d(y.emissiveMap.channel),metalnessMapUv:Fn&&d(y.metalnessMap.channel),roughnessMapUv:Bn&&d(y.roughnessMap.channel),anisotropyMapUv:Ue&&d(y.anisotropyMap.channel),clearcoatMapUv:C&&d(y.clearcoatMap.channel),clearcoatNormalMapUv:b&&d(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:X&&d(y.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:se&&d(y.diffuseRoughnessMap.channel),iridescenceMapUv:ie&&d(y.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&d(y.iridescenceThicknessMap.channel),sheenColorMapUv:de&&d(y.sheenColorMap.channel),sheenRoughnessMapUv:Q&&d(y.sheenRoughnessMap.channel),specularMapUv:ee&&d(y.specularMap.channel),specularColorMapUv:he&&d(y.specularColorMap.channel),specularIntensityMapUv:U&&d(y.specularIntensityMap.channel),transmissionMapUv:te&&d(y.transmissionMap.channel),thicknessMapUv:J&&d(y.thicknessMap.channel),alphaMapUv:oe&&d(y.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(At||Dn),vertexNormals:!!L.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!L.attributes.uv&&(Fe||oe),fog:!!N,useFog:y.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||L.attributes.normal===void 0&&At===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:xe,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:ne,numSunLights:_.sun.length,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numSunLightShadows:_.sunShadowMap.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numLightProbeGrids:B.filter(ge=>ge.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:re,decodeVideoTexture:Fe&&y.map.isVideoTexture===!0&&Xe.getTransfer(y.map.colorSpace)===nt,decodeVideoTextureEmissive:kt&&y.emissiveMap.isVideoTexture===!0&&Xe.getTransfer(y.emissiveMap.colorSpace)===nt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===sn,flipSided:y.side===Yt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Ge&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&y.extensions.multiDraw===!0||Pt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ve.vertexUv1s=c.has(1),Ve.vertexUv2s=c.has(2),Ve.vertexUv3s=c.has(3),c.clear(),Ve}function v(y){let _=[];if(y.shaderID?_.push(y.shaderID):(_.push(y.customVertexShaderID),_.push(y.customFragmentShaderID)),y.defines!==void 0)for(let P in y.defines)_.push(P),_.push(y.defines[P]);return y.isRawShaderMaterial===!1&&(m(_,y),g(_,y),_.push(r.outputColorSpace)),_.push(y.customProgramCacheKey),_.join()}function m(y,_){y.push(_.precision),y.push(_.outputColorSpace),y.push(_.envMapMode),y.push(_.envMapPMREM),y.push(_.envMapMaxLod),y.push(_.envMapSize),y.push(_.mapUv),y.push(_.alphaMapUv),y.push(_.lightMapUv),y.push(_.aoMapUv),y.push(_.bumpMapUv),y.push(_.normalMapUv),y.push(_.displacementMapUv),y.push(_.emissiveMapUv),y.push(_.metalnessMapUv),y.push(_.roughnessMapUv),y.push(_.anisotropyMapUv),y.push(_.clearcoatMapUv),y.push(_.clearcoatNormalMapUv),y.push(_.clearcoatRoughnessMapUv),y.push(_.diffuseRoughnessMapUv),y.push(_.iridescenceMapUv),y.push(_.iridescenceThicknessMapUv),y.push(_.sheenColorMapUv),y.push(_.sheenRoughnessMapUv),y.push(_.specularMapUv),y.push(_.specularColorMapUv),y.push(_.specularIntensityMapUv),y.push(_.transmissionMapUv),y.push(_.thicknessMapUv),y.push(_.combine),y.push(_.fogExp2),y.push(_.sizeAttenuation),y.push(_.morphTargetsCount),y.push(_.numSunLights),y.push(_.numDirLights),y.push(_.numPointLights),y.push(_.numSpotLights),y.push(_.numSpotLightMaps),y.push(_.numHemiLights),y.push(_.numRectAreaLights),y.push(_.numSunLightShadows),y.push(_.numDirLightShadows),y.push(_.numPointLightShadows),y.push(_.numSpotLightShadows),y.push(_.numSpotLightShadowsWithMaps),y.push(_.numLightProbes),y.push(_.numLightProbeGrids),y.push(_.shadowMapType),y.push(_.toneMapping),y.push(_.numClippingPlanes),y.push(_.numClipIntersection),y.push(_.depthPacking)}function g(y,_){o.disableAll(),_.instancing&&o.enable(0),_.instancingColor&&o.enable(1),_.instancingMorph&&o.enable(2),_.matcap&&o.enable(3),_.envMap&&o.enable(4),_.normalMapObjectSpace&&o.enable(5),_.normalMapTangentSpace&&o.enable(6),_.clearcoat&&o.enable(7),_.iridescence&&o.enable(8),_.alphaTest&&o.enable(9),_.vertexColors&&o.enable(10),_.vertexAlphas&&o.enable(11),_.vertexUv1s&&o.enable(12),_.vertexUv2s&&o.enable(13),_.vertexUv3s&&o.enable(14),_.vertexTangents&&o.enable(15),_.anisotropy&&o.enable(16),_.alphaHash&&o.enable(17),_.batching&&o.enable(18),_.dispersion&&o.enable(19),_.retroreflection&&o.enable(24),_.diffuseRoughness&&o.enable(25),_.batchingColor&&o.enable(20),_.gradientMap&&o.enable(21),_.packedNormalMap&&o.enable(22),_.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),_.fog&&o.enable(0),_.useFog&&o.enable(1),_.flatShading&&o.enable(2),_.logarithmicDepthBuffer&&o.enable(3),_.reversedDepthBuffer&&o.enable(4),_.skinning&&o.enable(5),_.morphTargets&&o.enable(6),_.morphNormals&&o.enable(7),_.morphColors&&o.enable(8),_.premultipliedAlpha&&o.enable(9),_.shadowMapEnabled&&o.enable(10),_.doubleSided&&o.enable(11),_.flipSided&&o.enable(12),_.useDepthPacking&&o.enable(13),_.dithering&&o.enable(14),_.transmission&&o.enable(15),_.sheen&&o.enable(16),_.opaque&&o.enable(17),_.pointsUvs&&o.enable(18),_.decodeVideoTexture&&o.enable(19),_.decodeVideoTextureEmissive&&o.enable(20),_.alphaToCoverage&&o.enable(21),_.numLightProbeGrids>0&&o.enable(22),_.hasPositionAttribute&&o.enable(23),y.push(o.mask)}function x(y){let _=f[y.type],P;if(_){let R=fi[_];P=Cd.clone(R.uniforms)}else P=y.uniforms;return P}function M(y,_){let P=h.get(_);return P!==void 0?++P.usedTimes:(P=new t_(r,_,y,i),l.push(P),h.set(_,P)),P}function A(y){if(--y.usedTimes===0){let _=l.indexOf(y);l[_]=l[l.length-1],l.pop(),h.delete(y.cacheKey),y.destroy()}}function S(y){a.remove(y)}function w(){a.dispose()}return{getParameters:p,getProgramCacheKey:v,getUniforms:x,acquireProgram:M,releaseProgram:A,releaseShaderCache:S,programs:l,dispose:w}}function r_(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,c){r.get(o)[a]=c}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function o_(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function $d(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function jd(){let r=[],e=0,t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,p,v,m,g){let x=r[e];return x===void 0?(x={id:f.id,object:f,geometry:d,material:p,materialVariant:o(f),groupOrder:v,renderOrder:f.renderOrder,z:m,group:g},r[e]=x):(x.id=f.id,x.object=f,x.geometry=d,x.material=p,x.materialVariant=o(f),x.groupOrder=v,x.renderOrder=f.renderOrder,x.z=m,x.group=g),e++,x}function c(f,d,p,v,m,g,x){x.reversedDepth===!0&&(m=-m);let M=a(f,d,p,v,m,g);p.transmission>0?n.push(M):p.transparent===!0?i.push(M):t.push(M)}function l(f,d,p,v,m,g){let x=a(f,d,p,v,m,g);p.transmission>0?n.unshift(x):p.transparent===!0?i.unshift(x):t.unshift(x)}function h(f,d){t.length>1&&t.sort(f||o_),n.length>1&&n.sort(d||$d),i.length>1&&i.sort(d||$d)}function u(){for(let f=e,d=r.length;f<d;f++){let p=r[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:c,unshift:l,finish:u,sort:h}}function a_(){let r=new WeakMap;function e(n,i){let s=r.get(n),o;return s===void 0?(o=new jd,r.set(n,[o])):i>=s.length?(o=new jd,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function c_(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new z,color:new Te};break;case"SpotLight":t={position:new z,direction:new z,color:new Te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new Te,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new Te,groundColor:new Te};break;case"RectAreaLight":t={color:new Te,position:new z,halfWidth:new z,halfHeight:new z};break}return r[e.id]=t,t}}}function l_(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}function f_(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function u_(r){let e=new c_,t=l_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new z);let i=new z,s=new Ie,o=new Ie;function a(l){let h=0,u=0,f=0;for(let B=0;B<9;B++)n.probe[B].set(0,0,0);let d=0,p=0,v=0,m=0,g=0,x=0,M=0,A=0,S=0,w=0,y=0,_=0,P=0,R=0;l.sort(f_);for(let B=0,N=l.length;B<N;B++){let L=l[B],D=L.color,F=L.intensity,G=L.distance,W=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===es?W=L.shadow.map.texture:W=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=D.r*F,u+=D.g*F,f+=D.b*F;else if(L.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(L.sh.coefficients[H],F);R++}else if(L.isSunLight){let H=e.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let K=L.shadow,$=t.get(L);$.shadowIntensity=K.intensity,$.shadowBias=K.bias,$.shadowNormalBias=K.normalBias,$.shadowRadius=K.radius,$.shadowMapSize.copy(K.mapSize).multiply(K.getFrameExtents()),n.sunShadow[p]=$,n.sunShadowMap[p]=W;let ne=K.getViewportCount();for(let Me=0;Me<ne;Me++)n.sunShadowMatrix[v+Me]=K.getMatrix(Me),n.sunShadowCascade[v+Me]=K._cascadeData[Me];v+=ne,p++}n.sun[d]=H,d++}else if(L.isDirectionalLight){let H=e.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let K=L.shadow,$=t.get(L);$.shadowIntensity=K.intensity,$.shadowBias=K.bias,$.shadowNormalBias=K.normalBias,$.shadowRadius=K.radius,$.shadowMapSize=K.mapSize,n.directionalShadow[m]=$,n.directionalShadowMap[m]=W,n.directionalShadowMatrix[m]=L.shadow.matrix,S++}n.directional[m]=H,m++}else if(L.isSpotLight){let H=e.get(L);H.position.setFromMatrixPosition(L.matrixWorld),H.color.copy(D).multiplyScalar(F),H.distance=G,H.coneCos=Math.cos(L.angle),H.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),H.decay=L.decay,n.spot[x]=H;let K=L.shadow;if(L.map&&(n.spotLightMap[_]=L.map,_++,K.updateMatrices(L),L.castShadow&&P++),n.spotLightMatrix[x]=K.matrix,L.castShadow){let $=t.get(L);$.shadowIntensity=K.intensity,$.shadowBias=K.bias,$.shadowNormalBias=K.normalBias,$.shadowRadius=K.radius,$.shadowMapSize=K.mapSize,n.spotShadow[x]=$,n.spotShadowMap[x]=W,y++}x++}else if(L.isRectAreaLight){let H=e.get(L);H.color.copy(D).multiplyScalar(F),H.halfWidth.set(L.width*.5,0,0),H.halfHeight.set(0,L.height*.5,0),n.rectArea[M]=H,M++}else if(L.isPointLight){let H=e.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),H.distance=L.distance,H.decay=L.decay,L.castShadow){let K=L.shadow,$=t.get(L);$.shadowIntensity=K.intensity,$.shadowBias=K.bias,$.shadowNormalBias=K.normalBias,$.shadowRadius=K.radius,$.shadowMapSize=K.mapSize,$.shadowCameraNear=K.camera.near,$.shadowCameraFar=K.camera.far,n.pointShadow[g]=$,n.pointShadowMap[g]=W,n.pointShadowMatrix[g]=L.shadow.matrix,w++}n.point[g]=H,g++}else if(L.isHemisphereLight){let H=e.get(L);H.skyColor.copy(L.color).multiplyScalar(F),H.groundColor.copy(L.groundColor).multiplyScalar(F),n.hemi[A]=H,A++}}M>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ve.LTC_FLOAT_1,n.rectAreaLTC2=ve.LTC_FLOAT_2):(n.rectAreaLTC1=ve.LTC_HALF_1,n.rectAreaLTC2=ve.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let I=n.hash;(I.sunLength!==d||I.directionalLength!==m||I.pointLength!==g||I.spotLength!==x||I.rectAreaLength!==M||I.hemiLength!==A||I.numSunShadows!==p||I.numDirectionalShadows!==S||I.numPointShadows!==w||I.numSpotShadows!==y||I.numSpotMaps!==_||I.numLightProbes!==R)&&(n.sun.length=d,n.directional.length=m,n.spot.length=x,n.rectArea.length=M,n.point.length=g,n.hemi.length=A,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=y,n.spotShadowMap.length=y,n.spotLightMatrix.length=y+_-P,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=R,I.sunLength=d,I.directionalLength=m,I.pointLength=g,I.spotLength=x,I.rectAreaLength=M,I.hemiLength=A,I.numSunShadows=p,I.numDirectionalShadows=S,I.numPointShadows=w,I.numSpotShadows=y,I.numSpotMaps=_,I.numLightProbes=R,n.version=h_++)}function c(l,h){let u=0,f=0,d=0,p=0,v=0,m=0,g=h.matrixWorldInverse;for(let x=0,M=l.length;x<M;x++){let A=l[x];if(A.isSunLight){let S=n.sun[u];S.direction.setFromMatrixPosition(A.matrixWorld),S.direction.transformDirection(g),u++}else if(A.isDirectionalLight){let S=n.directional[f];S.direction.setFromMatrixPosition(A.matrixWorld),i.setFromMatrixPosition(A.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(g),f++}else if(A.isSpotLight){let S=n.spot[p];S.position.setFromMatrixPosition(A.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(A.matrixWorld),i.setFromMatrixPosition(A.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(g),p++}else if(A.isRectAreaLight){let S=n.rectArea[v];S.position.setFromMatrixPosition(A.matrixWorld),S.position.applyMatrix4(g),o.identity(),s.copy(A.matrixWorld),s.premultiply(g),o.extractRotation(s),S.halfWidth.set(A.width*.5,0,0),S.halfHeight.set(0,A.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),v++}else if(A.isPointLight){let S=n.point[d];S.position.setFromMatrixPosition(A.matrixWorld),S.position.applyMatrix4(g),d++}else if(A.isHemisphereLight){let S=n.hemi[m];S.direction.setFromMatrixPosition(A.matrixWorld),S.direction.transformDirection(g),m++}}}return{setup:a,setupView:c,state:n}}function Jd(r){let e=new u_(r),t=[],n=[],i=[];function s(u){h.camera=u,t.length=0,n.length=0,i.length=0}function o(u){u.isLightProbeGrid?i.push(u):t.push(u)}function a(u){n.push(u)}function c(){e.setup(t),i.sort((u,f)=>u.priority-f.priority||u.id-f.id)}function l(u){e.setupView(t,u)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function d_(r){let e=new WeakMap;function t(i,s=0){let o=e.get(i),a;return o===void 0?(a=new Jd(r),e.set(i,[a])):s>=o.length?(a=new Jd(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}function x_(r,e,t){let n=new ji,i=new Oe,s=new Oe,o=new at,a=new Ia,c=new Na,l={},h=t.maxTextureSize,u={[Gn]:Yt,[Yt]:Gn,[sn]:sn},f=new Qe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:p_,fragmentShader:m_}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let p=new Xt;p.setAttribute("position",new jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new it(p,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_o;let g=this.type;this.render=function(w,y,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===qu&&(Le("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=_o);let P=r.getRenderTarget(),R=r.getActiveCubeFace(),I=r.getActiveMipmapLevel(),B=r.state;B.setBlending(Ss),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let N=g!==this.type;N&&y.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(D=>D.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,D=w.length;L<D;L++){let F=w[L],G=F.shadow;if(G===void 0){Le("WebGLShadowMap:",F,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);let W=G.getFrameExtents();i.multiply(W),s.copy(G.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/W.x),i.x=s.x*W.x,G.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/W.y),i.y=s.y*W.y,G.mapSize.y=s.y));let H=r.state.buffers.depth.getReversed();if(G.camera._reversedDepth=H,G.map===null||N===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===pr){if(F.isPointLight){Le("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Jt(i.x,i.y,{format:es,type:bn,minFilter:pt,magFilter:pt,generateMipmaps:!1}),G.map.texture.name=F.name+".shadowMap",G.map.depthTexture=new ei(i.x,i.y,Cn),G.map.depthTexture.name=F.name+".shadowMapDepth",G.map.depthTexture.format=Ti,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Ct,G.map.depthTexture.magFilter=Ct}else F.isPointLight?(G.map=new Po(i.x),G.map.depthTexture=new oo(i.x,Ln)):(G.map=new Jt(i.x,i.y),G.map.depthTexture=new ei(i.x,i.y,Ln)),G.map.depthTexture.name=F.name+".shadowMap",G.map.depthTexture.format=Ti,this.type===_o?(G.map.depthTexture.compareFunction=H?yh:xh,G.map.depthTexture.minFilter=pt,G.map.depthTexture.magFilter=pt):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Ct,G.map.depthTexture.magFilter=Ct);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==i.x||G.map.height!==i.y)&&G.map.setSize(i.x,i.y);let K=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();F.isPointLight!==!0&&G.updateMatrices(F,_);let $=(G.camera.layers.mask&4294967294)!==0?G.camera.layers:_.layers;for(let ne=0;ne<K;ne++){let Me=G.getCamera(ne);if(F.isPointLight){let j=G.camera,ae=G.matrix,_e=F.distance||j.far;_e!==j.far&&(j.far=_e,j.updateProjectionMatrix()),Lo.setFromMatrixPosition(F.matrixWorld),j.position.copy(Lo),Oh.copy(j.position),Oh.add(g_[ne]),j.up.copy(v_[ne]),j.lookAt(Oh),j.updateMatrixWorld(),ae.makeTranslation(-Lo.x,-Lo.y,-Lo.z),Qd.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Qd,j.coordinateSystem,j.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)r.setRenderTarget(G.map,ne),r.clear();else{ne===0&&(r.setRenderTarget(G.map),r.clear());let j=G.getViewport(ne);o.set(s.x*j.x,s.y*j.y,s.x*j.z,s.y*j.w),B.viewport(o)}n=G.getFrustum(ne),A(y,_,Me,F,$,this.type)}G.isPointLightShadow!==!0&&this.type===pr&&x(G,_),G.needsUpdate=!1}g=this.type,m.needsUpdate=!1,r.setRenderTarget(P,R,I)};function x(w,y){let _=e.update(v);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null?w.mapPass=new Jt(i.x,i.y,{format:es,type:bn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),f.uniforms.shadow_pass.value=w.map.depthTexture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(y,null,_,f,v,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(y,null,_,d,v,null)}function M(w,y,_,P){let R=null,I=_.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(I!==void 0)R=I;else if(R=_.isPointLight===!0?c:a,r.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0||y.alphaToCoverage===!0){let B=R.uuid,N=y.uuid,L=l[B];L===void 0&&(L={},l[B]=L);let D=L[N];D===void 0&&(D=R.clone(),L[N]=D,y.addEventListener("dispose",S)),R=D}if(R.visible=y.visible,R.wireframe=y.wireframe,P===pr?R.side=y.shadowSide!==null?y.shadowSide:y.side:R.side=y.shadowSide!==null?y.shadowSide:u[y.side],R.alphaMap=y.alphaMap,R.alphaTest=y.alphaToCoverage===!0?.5:y.alphaTest,R.map=y.map,R.clipShadows=y.clipShadows,R.clippingPlanes=y.clippingPlanes,R.clipIntersection=y.clipIntersection,R.displacementMap=y.displacementMap,R.displacementScale=y.displacementScale,R.displacementBias=y.displacementBias,R.wireframeLinewidth=y.wireframeLinewidth,R.linewidth=y.linewidth,_.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let B=r.properties.get(R);B.light=_}return R}function A(w,y,_,P,R,I){if(w.visible===!1)return;if(w.layers.test(R)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&I===pr)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,w.matrixWorld);let L=e.update(w),D=w.material;if(Array.isArray(D)){let F=L.groups;for(let G=0,W=F.length;G<W;G++){let H=F[G],K=D[H.materialIndex];if(K&&K.visible){let $=M(w,K,P,I);w.onBeforeShadow(r,w,y,_,L,$,H),r.renderBufferDirect(_,null,L,$,w,H),w.onAfterShadow(r,w,y,_,L,$,H)}}}else if(D.visible){let F=M(w,D,P,I);w.onBeforeShadow(r,w,y,_,L,F,null),r.renderBufferDirect(_,null,L,F,w,null),w.onAfterShadow(r,w,y,_,L,F,null)}}let N=w.children;for(let L=0,D=N.length;L<D;L++)A(N[L],y,_,P,R,I)}function S(w){w.target.removeEventListener("dispose",S);for(let _ in l){let P=l[_],R=w.target.uuid;R in P&&(P[R].dispose(),delete P[R])}}}function y_(r,e){function t(){let U=!1,te=new at,J=null,fe=new at(0,0,0,0);return{setMask:function(oe){J!==oe&&!U&&(r.colorMask(oe,oe,oe,oe),J=oe)},setLocked:function(oe){U=oe},setClear:function(oe,le,Ce,Ge,re){re===!0&&(oe*=Ge,le*=Ge,Ce*=Ge),te.set(oe,le,Ce,Ge),fe.equals(te)===!1&&(r.clearColor(oe,le,Ce,Ge),fe.copy(te))},reset:function(){U=!1,J=null,fe.set(-1,0,0,0)}}}function n(){let U=!1,te=!1,J=null,fe=null,oe=null;return{setReversed:function(le){if(te!==le){let Ce=e.get("EXT_clip_control");le?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT),te=le;let Ge=oe;oe=null,this.setClear(Ge)}},getReversed:function(){return te},setTest:function(le){le?xe(r.DEPTH_TEST):ke(r.DEPTH_TEST)},setMask:function(le){J!==le&&!U&&(r.depthMask(le),J=le)},setFunc:function(le){if(te&&(le=Rd[le]),fe!==le){switch(le){case va:r.depthFunc(r.NEVER);break;case xa:r.depthFunc(r.ALWAYS);break;case ya:r.depthFunc(r.LESS);break;case $s:r.depthFunc(r.LEQUAL);break;case _a:r.depthFunc(r.EQUAL);break;case Aa:r.depthFunc(r.GEQUAL);break;case ba:r.depthFunc(r.GREATER);break;case Ma:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}fe=le}},setLocked:function(le){U=le},setClear:function(le){oe!==le&&(oe=le,te&&(le=1-le),r.clearDepth(le))},reset:function(){U=!1,J=null,fe=null,oe=null,te=!1}}}function i(){let U=!1,te=null,J=null,fe=null,oe=null,le=null,Ce=null,Ge=null,re=null;return{setTest:function(Pe){U||(Pe?xe(r.STENCIL_TEST):ke(r.STENCIL_TEST))},setMask:function(Pe){te!==Pe&&!U&&(r.stencilMask(Pe),te=Pe)},setFunc:function(Pe,Ve,ge){(J!==Pe||fe!==Ve||oe!==ge)&&(r.stencilFunc(Pe,Ve,ge),J=Pe,fe=Ve,oe=ge)},setOp:function(Pe,Ve,ge){(le!==Pe||Ce!==Ve||Ge!==ge)&&(r.stencilOp(Pe,Ve,ge),le=Pe,Ce=Ve,Ge=ge)},setLocked:function(Pe){U=Pe},setClear:function(Pe){re!==Pe&&(r.clearStencil(Pe),re=Pe)},reset:function(){U=!1,te=null,J=null,fe=null,oe=null,le=null,Ce=null,Ge=null,re=null}}}let s=new t,o=new n,a=new i,c={},l=new WeakMap,h={},u={},f={},d=new WeakMap,p=[],v=null,m=!1,g=null,x=null,M=null,A=null,S=null,w=null,y=null,_=new Te(0,0,0),P=0,R=!1,I=null,B=null,N=null,L=null,D=null,F=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,W=0,H=r.getParameter(r.VERSION);H.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(H)[1]),G=W>=1):H.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),G=W>=2);let K=null,$={},ne=r.getParameter(r.SCISSOR_BOX),Me=r.getParameter(r.VIEWPORT),j=new at().fromArray(ne),ae=new at().fromArray(Me);function _e(U,te,J,fe){let oe=new Uint8Array(4),le=r.createTexture();r.bindTexture(U,le),r.texParameteri(U,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(U,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ce=0;Ce<J;Ce++)U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY?r.texImage3D(te,0,r.RGBA,1,1,fe,0,r.RGBA,r.UNSIGNED_BYTE,oe):r.texImage2D(te+Ce,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,oe);return le}let Re={};Re[r.TEXTURE_2D]=_e(r.TEXTURE_2D,r.TEXTURE_2D,1),Re[r.TEXTURE_CUBE_MAP]=_e(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Re[r.TEXTURE_2D_ARRAY]=_e(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Re[r.TEXTURE_3D]=_e(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),xe(r.DEPTH_TEST),o.setFunc($s),mn(!1),At(jl),xe(r.CULL_FACE),Zt(Ss);function xe(U){h[U]!==!0&&(r.enable(U),h[U]=!0)}function ke(U){h[U]!==!1&&(r.disable(U),h[U]=!1)}function Pt(U,te){return f[U]!==te?(r.bindFramebuffer(U,te),f[U]=te,U===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=te),U===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=te),!0):!1}function Fe(U,te){let J=p,fe=!1;if(U){J=d.get(te),J===void 0&&(J=[],d.set(te,J));let oe=U.textures;if(J.length!==oe.length||J[0]!==r.COLOR_ATTACHMENT0){for(let le=0,Ce=oe.length;le<Ce;le++)J[le]=r.COLOR_ATTACHMENT0+le;J.length=oe.length,fe=!0}}else J[0]!==r.BACK&&(J[0]=r.BACK,fe=!0);fe&&r.drawBuffers(J)}function rt(U){return v!==U?(r.useProgram(U),v=U,!0):!1}let ht={[ws]:r.FUNC_ADD,[Yu]:r.FUNC_SUBTRACT,[Ku]:r.FUNC_REVERSE_SUBTRACT};ht[Zu]=r.MIN,ht[$u]=r.MAX;let Ze={[ju]:r.ZERO,[Ju]:r.ONE,[Qu]:r.SRC_COLOR,[eh]:r.SRC_ALPHA,[rd]:r.SRC_ALPHA_SATURATE,[id]:r.DST_COLOR,[td]:r.DST_ALPHA,[ed]:r.ONE_MINUS_SRC_COLOR,[th]:r.ONE_MINUS_SRC_ALPHA,[sd]:r.ONE_MINUS_DST_COLOR,[nd]:r.ONE_MINUS_DST_ALPHA,[od]:r.CONSTANT_COLOR,[ad]:r.ONE_MINUS_CONSTANT_COLOR,[cd]:r.CONSTANT_ALPHA,[ld]:r.ONE_MINUS_CONSTANT_ALPHA};function Zt(U,te,J,fe,oe,le,Ce,Ge,re,Pe){if(U===Ss){m===!0&&(ke(r.BLEND),m=!1);return}if(m===!1&&(xe(r.BLEND),m=!0),U!==Xu){if(U!==g||Pe!==R){if((x!==ws||S!==ws)&&(r.blendEquation(r.FUNC_ADD),x=ws,S=ws),Pe)switch(U){case mr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Rn:r.blendFunc(r.ONE,r.ONE);break;case Jl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Ql:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Be("WebGLState: Invalid blending: ",U);break}else switch(U){case mr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Rn:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Jl:Be("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ql:Be("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Be("WebGLState: Invalid blending: ",U);break}M=null,A=null,w=null,y=null,_.set(0,0,0),P=0,g=U,R=Pe}return}oe=oe||te,le=le||J,Ce=Ce||fe,(te!==x||oe!==S)&&(r.blendEquationSeparate(ht[te],ht[oe]),x=te,S=oe),(J!==M||fe!==A||le!==w||Ce!==y)&&(r.blendFuncSeparate(Ze[J],Ze[fe],Ze[le],Ze[Ce]),M=J,A=fe,w=le,y=Ce),(Ge.equals(_)===!1||re!==P)&&(r.blendColor(Ge.r,Ge.g,Ge.b,re),_.copy(Ge),P=re),g=U,R=!1}function Ft(U,te){U.side===sn?ke(r.CULL_FACE):xe(r.CULL_FACE);let J=U.side===Yt;te&&(J=!J),mn(J),U.blending===mr&&U.transparent===!1?Zt(Ss):Zt(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),s.setMask(U.colorWrite);let fe=U.stencilWrite;a.setTest(fe),fe&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),kt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?xe(r.SAMPLE_ALPHA_TO_COVERAGE):ke(r.SAMPLE_ALPHA_TO_COVERAGE)}function mn(U){I!==U&&(U?r.frontFace(r.CW):r.frontFace(r.CCW),I=U)}function At(U){U!==Gu?(xe(r.CULL_FACE),U!==B&&(U===jl?r.cullFace(r.BACK):U===Wu?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ke(r.CULL_FACE),B=U}function ni(U){U!==N&&(G&&r.lineWidth(U),N=U)}function kt(U,te,J){U?(xe(r.POLYGON_OFFSET_FILL),(L!==te||D!==J)&&(L=te,D=J,o.getReversed()&&(te=-te,J=-J),r.polygonOffset(te,J))):ke(r.POLYGON_OFFSET_FILL)}function Fn(U){U?xe(r.SCISSOR_TEST):ke(r.SCISSOR_TEST)}function Bn(U){U===void 0&&(U=r.TEXTURE0+F-1),K!==U&&(r.activeTexture(U),K=U)}function Dn(U,te,J){J===void 0&&(K===null?J=r.TEXTURE0+F-1:J=K);let fe=$[J];fe===void 0&&(fe={type:void 0,texture:void 0},$[J]=fe),(fe.type!==U||fe.texture!==te)&&(K!==J&&(r.activeTexture(J),K=J),r.bindTexture(U,te||Re[U]),fe.type=U,fe.texture=te)}function k(){let U=$[K];U!==void 0&&U.type!==void 0&&(r.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Un(){try{r.compressedTexImage2D(...arguments)}catch(U){Be("WebGLState:",U)}}function gt(){try{r.compressedTexImage3D(...arguments)}catch(U){Be("WebGLState:",U)}}function vt(){try{r.texSubImage2D(...arguments)}catch(U){Be("WebGLState:",U)}}function me(){try{r.texSubImage3D(...arguments)}catch(U){Be("WebGLState:",U)}}function Bt(){try{r.compressedTexSubImage2D(...arguments)}catch(U){Be("WebGLState:",U)}}function Ne(){try{r.compressedTexSubImage3D(...arguments)}catch(U){Be("WebGLState:",U)}}function Ue(){try{r.texStorage2D(...arguments)}catch(U){Be("WebGLState:",U)}}function C(){try{r.texStorage3D(...arguments)}catch(U){Be("WebGLState:",U)}}function b(){try{r.texImage2D(...arguments)}catch(U){Be("WebGLState:",U)}}function X(){try{r.texImage3D(...arguments)}catch(U){Be("WebGLState:",U)}}function se(U){return u[U]!==void 0?u[U]:r.getParameter(U)}function ie(U,te){u[U]!==te&&(r.pixelStorei(U,te),u[U]=te)}function ce(U){j.equals(U)===!1&&(r.scissor(U.x,U.y,U.z,U.w),j.copy(U))}function de(U){ae.equals(U)===!1&&(r.viewport(U.x,U.y,U.z,U.w),ae.copy(U))}function Q(U,te){let J=l.get(te);J===void 0&&(J=new WeakMap,l.set(te,J));let fe=J.get(U);fe===void 0&&(fe=r.getUniformBlockIndex(te,U.name),r.uniformBlockBinding(te,fe,fe),J.set(U,fe))}function ee(U,te,J){let oe=l.get(te).get(U);c[oe]!==J&&(r.bindBufferBase(r.UNIFORM_BUFFER,oe,J),c[oe]=J)}function he(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),h={},u={},K=null,$={},f={},c={},d=new WeakMap,p=[],v=null,m=!1,g=null,x=null,M=null,A=null,S=null,w=null,y=null,_=new Te(0,0,0),P=0,R=!1,I=null,B=null,N=null,L=null,D=null,j.set(0,0,r.canvas.width,r.canvas.height),ae.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:xe,disable:ke,bindFramebuffer:Pt,drawBuffers:Fe,useProgram:rt,setBlending:Zt,setMaterial:Ft,setFlipSided:mn,setCullFace:At,setLineWidth:ni,setPolygonOffset:kt,setScissorTest:Fn,activeTexture:Bn,bindTexture:Dn,unbindTexture:k,compressedTexImage2D:Un,compressedTexImage3D:gt,texImage2D:b,texImage3D:X,pixelStorei:ie,getParameter:se,updateUBOMapping:Q,uniformBlockBinding:ee,texStorage2D:Ue,texStorage3D:C,texSubImage2D:vt,texSubImage3D:me,compressedTexSubImage2D:Bt,compressedTexSubImage3D:Ne,scissor:ce,viewport:de,reset:he}}function __(r,e,t,n,i,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Oe,h=new WeakMap,u=new Set,f,d=new WeakMap,p=new Set,v=new FinalizationRegistry(C=>p.delete(C)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,b){return m?new OffscreenCanvas(C,b):Qs("canvas")}function x(C,b,X){let se=1,ie=Ue(C);if((ie.width>X||ie.height>X)&&(se=X/Math.max(ie.width,ie.height)),se<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let ce=Math.floor(se*ie.width),de=Math.floor(se*ie.height);f===void 0&&(f=g(ce,de));let Q=b?g(ce,de):f;return Q.width=ce,Q.height=de,Q.getContext("2d").drawImage(C,0,0,ce,de),Le("WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+ce+"x"+de+")."),Q}else return"data"in C&&Le("WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),C;return C}function M(C){return C.generateMipmaps}function A(C){r.generateMipmap(C)}function S(C){return C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?r.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function w(C,b,X,se,ie,ce=!1){if(C!==null){if(r[C]!==void 0)return r[C];Le("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let de;se&&(de=e.get("EXT_texture_norm16"),de||Le("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=b;if(b===r.RED&&(X===r.FLOAT&&(Q=r.R32F),X===r.HALF_FLOAT&&(Q=r.R16F),X===r.UNSIGNED_BYTE&&(Q=r.R8),X===r.UNSIGNED_SHORT&&de&&(Q=de.R16_EXT),X===r.SHORT&&de&&(Q=de.R16_SNORM_EXT)),b===r.RED_INTEGER&&(X===r.UNSIGNED_BYTE&&(Q=r.R8UI),X===r.UNSIGNED_SHORT&&(Q=r.R16UI),X===r.UNSIGNED_INT&&(Q=r.R32UI),X===r.BYTE&&(Q=r.R8I),X===r.SHORT&&(Q=r.R16I),X===r.INT&&(Q=r.R32I)),b===r.RG&&(X===r.FLOAT&&(Q=r.RG32F),X===r.HALF_FLOAT&&(Q=r.RG16F),X===r.UNSIGNED_BYTE&&(Q=r.RG8),X===r.UNSIGNED_SHORT&&de&&(Q=de.RG16_EXT),X===r.SHORT&&de&&(Q=de.RG16_SNORM_EXT)),b===r.RG_INTEGER&&(X===r.UNSIGNED_BYTE&&(Q=r.RG8UI),X===r.UNSIGNED_SHORT&&(Q=r.RG16UI),X===r.UNSIGNED_INT&&(Q=r.RG32UI),X===r.BYTE&&(Q=r.RG8I),X===r.SHORT&&(Q=r.RG16I),X===r.INT&&(Q=r.RG32I)),b===r.RGB_INTEGER&&(X===r.UNSIGNED_BYTE&&(Q=r.RGB8UI),X===r.UNSIGNED_SHORT&&(Q=r.RGB16UI),X===r.UNSIGNED_INT&&(Q=r.RGB32UI),X===r.BYTE&&(Q=r.RGB8I),X===r.SHORT&&(Q=r.RGB16I),X===r.INT&&(Q=r.RGB32I)),b===r.RGBA_INTEGER&&(X===r.UNSIGNED_BYTE&&(Q=r.RGBA8UI),X===r.UNSIGNED_SHORT&&(Q=r.RGBA16UI),X===r.UNSIGNED_INT&&(Q=r.RGBA32UI),X===r.BYTE&&(Q=r.RGBA8I),X===r.SHORT&&(Q=r.RGBA16I),X===r.INT&&(Q=r.RGBA32I)),b===r.RGB&&(X===r.UNSIGNED_SHORT&&de&&(Q=de.RGB16_EXT),X===r.SHORT&&de&&(Q=de.RGB16_SNORM_EXT),X===r.UNSIGNED_INT_5_9_9_9_REV&&(Q=r.RGB9_E5),X===r.UNSIGNED_INT_10F_11F_11F_REV&&(Q=r.R11F_G11F_B10F)),b===r.RGBA){let ee=ce?Kr:Xe.getTransfer(ie);X===r.FLOAT&&(Q=r.RGBA32F),X===r.HALF_FLOAT&&(Q=r.RGBA16F),X===r.UNSIGNED_BYTE&&(Q=ee===nt?r.SRGB8_ALPHA8:r.RGBA8),X===r.UNSIGNED_SHORT&&de&&(Q=de.RGBA16_EXT),X===r.SHORT&&de&&(Q=de.RGBA16_SNORM_EXT),X===r.UNSIGNED_SHORT_4_4_4_4&&(Q=r.RGBA4),X===r.UNSIGNED_SHORT_5_5_5_1&&(Q=r.RGB5_A1)}return(Q===r.R16F||Q===r.R32F||Q===r.RG16F||Q===r.RG32F||Q===r.RGBA16F||Q===r.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function y(C,b){let X;return C?b===null||b===Ln||b===Rs?X=r.DEPTH24_STENCIL8:b===Cn?X=r.DEPTH32F_STENCIL8:b===xr&&(X=r.DEPTH24_STENCIL8,Le("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Ln||b===Rs?X=r.DEPTH_COMPONENT24:b===Cn?X=r.DEPTH_COMPONENT32F:b===xr&&(X=r.DEPTH_COMPONENT16),X}function _(C,b){return M(C)===!0||C.isFramebufferTexture&&C.minFilter!==Ct&&C.minFilter!==pt?Math.log2(Math.max(b.width,b.height))+1:C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?b.mipmaps.length:1}function P(C){let b=new WeakRef(C);n.get(C).__ref=b,p.add(b),v.register(C,b,b)}function R(C){let b=n.get(C).__ref;b!==void 0&&(p.delete(b),v.unregister(b))}function I(C){N(C.target)}function B(C){L(C.target)}function N(C){C.removeEventListener("dispose",I),R(C),F(C),C.isVideoTexture&&h.delete(C),C.isHTMLTexture&&u.delete(C)}function L(C){C.removeEventListener("dispose",B),R(C),W(C)}function D(){for(let C of p){let b=C.deref();b!==void 0&&(b.isRenderTarget===!0?L(b):N(b))}p.clear(),u.clear()}function F(C){let b=n.get(C);if(b.__webglInit===void 0)return;let X=C.source,se=d.get(X);if(se){let ie=se[b.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&G(C),Object.keys(se).length===0&&d.delete(X)}n.remove(C)}function G(C){let b=n.get(C);r.deleteTexture(b.__webglTexture);let X=C.source,se=d.get(X);delete se[b.__cacheKey],o.memory.textures--}function W(C){let b=n.get(C);b.__depthDisposeCallback&&b.__depthDisposeCallback();let X=C.depthTexture;if(X&&X.renderTarget===C&&N(X),C.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(b.__webglFramebuffer[ie]))for(let ce=0;ce<b.__webglFramebuffer[ie].length;ce++)r.deleteFramebuffer(b.__webglFramebuffer[ie][ce]);else r.deleteFramebuffer(b.__webglFramebuffer[ie]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[ie])}else{if(Array.isArray(b.__webglFramebuffer))for(let ie=0;ie<b.__webglFramebuffer.length;ie++)r.deleteFramebuffer(b.__webglFramebuffer[ie]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ie=0;ie<b.__webglColorRenderbuffer.length;ie++)b.__webglColorRenderbuffer[ie]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[ie]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let se=C.textures;for(let ie=0,ce=se.length;ie<ce;ie++){let de=n.get(se[ie]);de.__webglTexture&&(r.deleteTexture(de.__webglTexture),o.memory.textures--),n.remove(se[ie])}n.remove(C)}let H=0;function K(){H=0}function $(){return H}function ne(C){H=C}function Me(){let C=H;return C>=i.maxTextures&&Le("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+i.maxTextures),H+=1,C}function j(C){let b=[];return b.push(C.wrapS),b.push(C.wrapT),b.push(C.wrapR||0),b.push(C.magFilter),b.push(C.minFilter),b.push(C.anisotropy),b.push(C.internalFormat),b.push(C.format),b.push(C.type),b.push(C.generateMipmaps),b.push(C.mipmapsAutoUpdate),b.push(C.premultiplyAlpha),b.push(C.flipY),b.push(C.unpackAlignment),b.push(C.colorSpace),b.join()}function ae(C,b){let X=n.get(C);if(C.isVideoTexture&&Bt(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&X.__version!==C.version){let se=C.image;if(se===null)Le("WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)Le("WebGLRenderer: Texture marked for update but image is incomplete");else{Ft(X,C,b);return}}else C.isExternalTexture&&(X.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,X.__webglTexture,r.TEXTURE0+b)}function _e(C,b){let X=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&X.__version!==C.version){Ft(X,C,b);return}else C.isExternalTexture&&(X.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,X.__webglTexture,r.TEXTURE0+b)}function Re(C,b){let X=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&X.__version!==C.version){Ft(X,C,b);return}t.bindTexture(r.TEXTURE_3D,X.__webglTexture,r.TEXTURE0+b)}function xe(C,b){let X=n.get(C);if(C.version>0&&X.__version!==C.version){mn(X,C,b);return}t.bindTexture(r.TEXTURE_CUBE_MAP,X.__webglTexture,r.TEXTURE0+b)}let ke={[ri]:r.REPEAT,[hn]:r.CLAMP_TO_EDGE,[js]:r.MIRRORED_REPEAT},Pt={[Ct]:r.NEAREST,[Ya]:r.NEAREST_MIPMAP_NEAREST,[Es]:r.NEAREST_MIPMAP_LINEAR,[pt]:r.LINEAR,[vr]:r.LINEAR_MIPMAP_NEAREST,[An]:r.LINEAR_MIPMAP_LINEAR},Fe={[_d]:r.NEVER,[_h]:r.ALWAYS,[Ad]:r.LESS,[xh]:r.LEQUAL,[bd]:r.EQUAL,[yh]:r.GEQUAL,[Md]:r.GREATER,[Sd]:r.NOTEQUAL};function rt(C,b){if(b.type===Cn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===pt||b.magFilter===vr||b.magFilter===Es||b.magFilter===An||b.minFilter===pt||b.minFilter===vr||b.minFilter===Es||b.minFilter===An)&&Le("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(C,r.TEXTURE_WRAP_S,ke[b.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,ke[b.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,ke[b.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,Pt[b.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,Pt[b.minFilter]),b.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,Fe[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Ct||b.minFilter!==Es&&b.minFilter!==An||b.type===Cn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let X=e.get("EXT_texture_filter_anisotropic");r.texParameterf(C,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function ht(C,b){let X=!1;C.__webglInit===void 0&&(C.__webglInit=!0,b.addEventListener("dispose",I),P(b));let se=b.source,ie=d.get(se);ie===void 0&&(ie={},d.set(se,ie));let ce=j(b);if(ce!==C.__cacheKey){ie[ce]===void 0&&(ie[ce]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,X=!0),ie[ce].usedTimes++;let de=ie[C.__cacheKey];de!==void 0&&(ie[C.__cacheKey].usedTimes--,de.usedTimes===0&&G(b)),C.__cacheKey=ce,C.__webglTexture=ie[ce].texture}return X}function Ze(C,b,X){return Math.floor(Math.floor(C/X)/b)}function Zt(C,b,X,se){let ce=C.updateRanges;if(ce.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,b.width,b.height,X,se,b.data);else{ce.sort((U,te)=>U.start-te.start);let de=0;for(let U=1;U<ce.length;U++){let te=ce[de],J=ce[U],fe=te.start+te.count,oe=Ze(J.start,b.width,4),le=Ze(te.start,b.width,4);J.start<=fe+1&&oe===le&&Ze(J.start+J.count-1,b.width,4)===oe?te.count=Math.max(te.count,J.start+J.count-te.start):(++de,ce[de]=J)}ce.length=de+1;let Q=t.getParameter(r.UNPACK_ROW_LENGTH),ee=t.getParameter(r.UNPACK_SKIP_PIXELS),he=t.getParameter(r.UNPACK_SKIP_ROWS);t.pixelStorei(r.UNPACK_ROW_LENGTH,b.width);for(let U=0,te=ce.length;U<te;U++){let J=ce[U],fe=Math.floor(J.start/4),oe=Math.ceil(J.count/4),le=fe%b.width,Ce=Math.floor(fe/b.width),Ge=oe,re=1;t.pixelStorei(r.UNPACK_SKIP_PIXELS,le),t.pixelStorei(r.UNPACK_SKIP_ROWS,Ce),t.texSubImage2D(r.TEXTURE_2D,0,le,Ce,Ge,re,X,se,b.data)}C.clearUpdateRanges(),t.pixelStorei(r.UNPACK_ROW_LENGTH,Q),t.pixelStorei(r.UNPACK_SKIP_PIXELS,ee),t.pixelStorei(r.UNPACK_SKIP_ROWS,he)}}function Ft(C,b,X){let se=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(se=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(se=r.TEXTURE_3D);let ie=ht(C,b),ce=b.source;t.bindTexture(se,C.__webglTexture,r.TEXTURE0+X);let de=n.get(ce);if(ce.version!==de.__version||ie===!0){if(t.activeTexture(r.TEXTURE0+X),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){let re=Xe.getPrimaries(Xe.workingColorSpace),Pe=b.colorSpace===Di?null:Xe.getPrimaries(b.colorSpace),Ve=b.colorSpace===Di||re===Pe?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve)}t.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment);let ee=x(b.image,!1,i.maxTextureSize);ee=Ne(b,ee);let he=s.convert(b.format,b.colorSpace),U=s.convert(b.type),te=w(b.internalFormat,he,U,b.normalized,b.colorSpace,b.isVideoTexture);rt(se,b);let J,fe=b.mipmaps,oe=b.isVideoTexture!==!0,le=de.__version===void 0||ie===!0,Ce=ce.dataReady,Ge=_(b,ee);if(b.isDepthTexture)te=y(b.format===Bi,b.type),le&&(oe?t.texStorage2D(r.TEXTURE_2D,1,te,ee.width,ee.height):t.texImage2D(r.TEXTURE_2D,0,te,ee.width,ee.height,0,he,U,null));else if(b.isDataTexture)if(fe.length>0){oe&&le&&t.texStorage2D(r.TEXTURE_2D,Ge,te,fe[0].width,fe[0].height);for(let re=0,Pe=fe.length;re<Pe;re++)J=fe[re],oe?Ce&&t.texSubImage2D(r.TEXTURE_2D,re,0,0,J.width,J.height,he,U,J.data):t.texImage2D(r.TEXTURE_2D,re,te,J.width,J.height,0,he,U,J.data);b.generateMipmaps=!1}else oe?(le&&t.texStorage2D(r.TEXTURE_2D,Ge,te,ee.width,ee.height),Ce&&Zt(b,ee,he,U)):t.texImage2D(r.TEXTURE_2D,0,te,ee.width,ee.height,0,he,U,ee.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){oe&&le&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ge,te,fe[0].width,fe[0].height,ee.depth);for(let re=0,Pe=fe.length;re<Pe;re++)if(J=fe[re],b.format!==on)if(he!==null)if(oe){if(Ce)if(b.layerUpdates.size>0){let Ve=Ch(J.width,J.height,b.format,b.type);for(let ge of b.layerUpdates){let ot=J.data.subarray(ge*Ve/J.data.BYTES_PER_ELEMENT,(ge+1)*Ve/J.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,re,0,0,ge,J.width,J.height,1,he,ot)}}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,re,0,0,0,J.width,J.height,ee.depth,he,J.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,re,te,J.width,J.height,ee.depth,0,J.data,0,0);else Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else oe?Ce&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,re,0,0,0,J.width,J.height,ee.depth,he,U,J.data):t.texImage3D(r.TEXTURE_2D_ARRAY,re,te,J.width,J.height,ee.depth,0,he,U,J.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{oe&&le&&t.texStorage2D(r.TEXTURE_2D,Ge,te,fe[0].width,fe[0].height);for(let re=0,Pe=fe.length;re<Pe;re++)J=fe[re],b.format!==on?he!==null?oe?Ce&&t.compressedTexSubImage2D(r.TEXTURE_2D,re,0,0,J.width,J.height,he,J.data):t.compressedTexImage2D(r.TEXTURE_2D,re,te,J.width,J.height,0,J.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):oe?Ce&&t.texSubImage2D(r.TEXTURE_2D,re,0,0,J.width,J.height,he,U,J.data):t.texImage2D(r.TEXTURE_2D,re,te,J.width,J.height,0,he,U,J.data)}else if(b.isDataArrayTexture)if(oe){if(le&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ge,te,ee.width,ee.height,ee.depth),Ce)if(b.layerUpdates.size>0){let re=Ch(ee.width,ee.height,b.format,b.type);for(let Pe of b.layerUpdates){let Ve=ee.data.subarray(Pe*re/ee.data.BYTES_PER_ELEMENT,(Pe+1)*re/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Pe,ee.width,ee.height,1,he,U,Ve)}b.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,he,U,ee.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,te,ee.width,ee.height,ee.depth,0,he,U,ee.data);else if(b.isData3DTexture)oe?(le&&t.texStorage3D(r.TEXTURE_3D,Ge,te,ee.width,ee.height,ee.depth),Ce&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,he,U,ee.data)):t.texImage3D(r.TEXTURE_3D,0,te,ee.width,ee.height,ee.depth,0,he,U,ee.data);else if(b.isFramebufferTexture){if(le)if(oe)t.texStorage2D(r.TEXTURE_2D,Ge,te,ee.width,ee.height);else{let re=ee.width,Pe=ee.height;for(let Ve=0;Ve<Ge;Ve++)t.texImage2D(r.TEXTURE_2D,Ve,te,re,Pe,0,he,U,null),re>>=1,Pe>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in r){let re=r.canvas;if(re.hasAttribute("layoutsubtree")||re.setAttribute("layoutsubtree","true"),ee.parentNode!==re){re.appendChild(ee),u.add(b),re.onpaint=Pe=>{let Ve=Pe.changedElements;for(let ge of u)Ve.includes(ge.image)&&(ge.needsUpdate=!0)},re.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,ee);else{let Ve=r.RGBA,ge=r.RGBA,ot=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,Ve,ge,ot,ee)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(fe.length>0){if(oe&&le){let re=Ue(fe[0]);t.texStorage2D(r.TEXTURE_2D,Ge,te,re.width,re.height)}for(let re=0,Pe=fe.length;re<Pe;re++)J=fe[re],oe?Ce&&t.texSubImage2D(r.TEXTURE_2D,re,0,0,he,U,J):t.texImage2D(r.TEXTURE_2D,re,te,he,U,J);b.generateMipmaps=!1}else if(oe){if(le){let re=Ue(ee);t.texStorage2D(r.TEXTURE_2D,Ge,te,re.width,re.height)}Ce&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,he,U,ee)}else t.texImage2D(r.TEXTURE_2D,0,te,he,U,ee);M(b)&&b.mipmapsAutoUpdate===!0&&A(se),de.__version=ce.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function mn(C,b,X){if(b.image.length!==6)return;let se=ht(C,b),ie=b.source;t.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+X);let ce=n.get(ie);if(ie.version!==ce.__version||se===!0){t.activeTexture(r.TEXTURE0+X);let de=Xe.getPrimaries(Xe.workingColorSpace),Q=b.colorSpace===Di?null:Xe.getPrimaries(b.colorSpace),ee=b.colorSpace===Di||de===Q?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let he=b.isCompressedTexture||b.image[0].isCompressedTexture,U=b.image[0]&&b.image[0].isDataTexture,te=[];for(let ge=0;ge<6;ge++)!he&&!U?te[ge]=x(b.image[ge],!0,i.maxCubemapSize):te[ge]=U?b.image[ge].image:b.image[ge],te[ge]=Ne(b,te[ge]);let J=te[0],fe=s.convert(b.format,b.colorSpace),oe=s.convert(b.type),le=w(b.internalFormat,fe,oe,b.normalized,b.colorSpace),Ce=b.isVideoTexture!==!0,Ge=ce.__version===void 0||se===!0,re=ie.dataReady,Pe=_(b,J);rt(r.TEXTURE_CUBE_MAP,b);let Ve;if(b.isDepthTexture){if(le=y(b.format===Bi,b.type),Ge)if(Ce)t.texStorage2D(r.TEXTURE_CUBE_MAP,1,le,J.width,J.height);else for(let ge=0;ge<6;ge++)t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,le,J.width,J.height,0,fe,oe,null)}else if(he){Ce&&Ge&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Pe,le,J.width,J.height);for(let ge=0;ge<6;ge++){Ve=te[ge].mipmaps;for(let ot=0;ot<Ve.length;ot++){let Vt=Ve[ot];b.format!==on?fe!==null?Ce?re&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,ot,0,0,Vt.width,Vt.height,fe,Vt.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,ot,le,Vt.width,Vt.height,0,Vt.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ce?re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,ot,0,0,Vt.width,Vt.height,fe,oe,Vt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,ot,le,Vt.width,Vt.height,0,fe,oe,Vt.data)}}}else{if(Ve=b.mipmaps,Ce&&Ge){Ve.length>0&&Pe++;let ge=Ue(te[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Pe,le,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(U){Ce?re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,te[ge].width,te[ge].height,fe,oe,te[ge].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,le,te[ge].width,te[ge].height,0,fe,oe,te[ge].data);for(let ot=0;ot<Ve.length;ot++){let Vi=Ve[ot].image[ge].image;Ce?re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,ot+1,0,0,Vi.width,Vi.height,fe,oe,Vi.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,ot+1,le,Vi.width,Vi.height,0,fe,oe,Vi.data)}}else{Ce?re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,fe,oe,te[ge]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,le,fe,oe,te[ge]);for(let ot=0;ot<Ve.length;ot++){let Vt=Ve[ot];Ce?re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,ot+1,0,0,fe,oe,Vt.image[ge]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,ot+1,le,fe,oe,Vt.image[ge])}}}M(b)&&b.mipmapsAutoUpdate===!0&&A(r.TEXTURE_CUBE_MAP),ce.__version=ie.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function At(C,b,X,se,ie,ce){let de=s.convert(X.format,X.colorSpace),Q=s.convert(X.type),ee=w(X.internalFormat,de,Q,X.normalized,X.colorSpace),he=n.get(b),U=n.get(X);if(U.__renderTarget=b,!he.__hasExternalTextures){let te=Math.max(1,b.width>>ce),J=Math.max(1,b.height>>ce);ie===r.TEXTURE_3D||ie===r.TEXTURE_2D_ARRAY?t.texImage3D(ie,ce,ee,te,J,b.depth,0,de,Q,null):t.texImage2D(ie,ce,ee,te,J,0,de,Q,null)}t.bindFramebuffer(r.FRAMEBUFFER,C),me(b)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,se,ie,U.__webglTexture,0,vt(b)):(ie===r.TEXTURE_2D||ie>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,se,ie,U.__webglTexture,ce),t.bindFramebuffer(r.FRAMEBUFFER,null)}function ni(C,b,X){if(r.bindRenderbuffer(r.RENDERBUFFER,C),b.depthBuffer){let se=b.depthTexture,ie=se&&se.isDepthTexture?se.type:null,ce=y(b.stencilBuffer,ie),de=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;me(b)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,vt(b),ce,b.width,b.height):X?r.renderbufferStorageMultisample(r.RENDERBUFFER,vt(b),ce,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,ce,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,de,r.RENDERBUFFER,C)}else{let se=b.textures;for(let ie=0;ie<se.length;ie++){let ce=se[ie],de=s.convert(ce.format,ce.colorSpace),Q=s.convert(ce.type),ee=w(ce.internalFormat,de,Q,ce.normalized,ce.colorSpace);me(b)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,vt(b),ee,b.width,b.height):X?r.renderbufferStorageMultisample(r.RENDERBUFFER,vt(b),ee,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,ee,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function kt(C,b,X){let se=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,C),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ie=n.get(b.depthTexture);ie.__renderTarget=b;let ce=se?b.depthTexture.image[0]:b.depthTexture.image;(!ie.__webglTexture||ce.width!==b.width||ce.height!==b.height)&&(ce.width=b.width,ce.height=b.height,b.depthTexture.needsUpdate=!0),se?xe(b.depthTexture,0):ae(b.depthTexture,0);let de=ie.__webglTexture,Q=vt(b),ee=se?r.TEXTURE_CUBE_MAP_POSITIVE_X+X:r.TEXTURE_2D,he=b.depthTexture.format===Bi?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(b.depthTexture.format===Ti)me(b)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,he,ee,de,0,Q):r.framebufferTexture2D(r.FRAMEBUFFER,he,ee,de,0);else if(b.depthTexture.format===Bi)me(b)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,he,ee,de,0,Q):r.framebufferTexture2D(r.FRAMEBUFFER,he,ee,de,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Fn(C){let b=n.get(C),X=C.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==C.depthTexture){let se=C.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),se){let ie=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,se.removeEventListener("dispose",ie)};se.addEventListener("dispose",ie),b.__depthDisposeCallback=ie}b.__boundDepthTexture=se}if(C.depthTexture&&!b.__autoAllocateDepthBuffer)if(X)for(let se=0;se<6;se++)kt(b.__webglFramebuffer[se],C,se);else C.texture.mipmaps.length>0?kt(b.__webglFramebuffer[0],C,0):kt(b.__webglFramebuffer,C,0);else if(X){b.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[se]),b.__webglDepthbuffer[se]===void 0)b.__webglDepthbuffer[se]=r.createRenderbuffer(),ni(b.__webglDepthbuffer[se],C,!1);else{let ie=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ce=b.__webglDepthbuffer[se];r.bindRenderbuffer(r.RENDERBUFFER,ce),r.framebufferRenderbuffer(r.FRAMEBUFFER,ie,r.RENDERBUFFER,ce)}}else if(C.texture.mipmaps.length>0?t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),ni(b.__webglDepthbuffer,C,!1);else{let ie=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ce=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ce),r.framebufferRenderbuffer(r.FRAMEBUFFER,ie,r.RENDERBUFFER,ce)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Bn(C,b,X){let se=n.get(C);b!==void 0&&At(se.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),X!==void 0&&Fn(C)}function Dn(C){let b=C.texture,X=n.get(C),se=n.get(b);C.addEventListener("dispose",B),P(C);let ie=C.textures,ce=C.isWebGLCubeRenderTarget===!0,de=ie.length>1;if(de||(se.__webglTexture===void 0&&(se.__webglTexture=r.createTexture()),se.__version=b.version,o.memory.textures++),ce){X.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(b.mipmaps.length>0){X.__webglFramebuffer[Q]=[];for(let ee=0;ee<b.mipmaps.length;ee++)X.__webglFramebuffer[Q][ee]=r.createFramebuffer()}else X.__webglFramebuffer[Q]=r.createFramebuffer()}else{if(b.mipmaps.length>0){X.__webglFramebuffer=[];for(let Q=0;Q<b.mipmaps.length;Q++)X.__webglFramebuffer[Q]=r.createFramebuffer()}else X.__webglFramebuffer=r.createFramebuffer();if(de)for(let Q=0,ee=ie.length;Q<ee;Q++){let he=n.get(ie[Q]);he.__webglTexture===void 0&&(he.__webglTexture=r.createTexture(),o.memory.textures++)}if(C.samples>0&&me(C)===!1){X.__webglMultisampledFramebuffer=r.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let Q=0;Q<ie.length;Q++){let ee=ie[Q];X.__webglColorRenderbuffer[Q]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,X.__webglColorRenderbuffer[Q]);let he=s.convert(ee.format,ee.colorSpace),U=s.convert(ee.type),te=w(ee.internalFormat,he,U,ee.normalized,ee.colorSpace,C.isXRRenderTarget===!0),J=vt(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,J,te,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Q,r.RENDERBUFFER,X.__webglColorRenderbuffer[Q])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(X.__webglDepthRenderbuffer=r.createRenderbuffer(),ni(X.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ce){t.bindTexture(r.TEXTURE_CUBE_MAP,se.__webglTexture),rt(r.TEXTURE_CUBE_MAP,b);for(let Q=0;Q<6;Q++)if(b.mipmaps.length>0)for(let ee=0;ee<b.mipmaps.length;ee++)At(X.__webglFramebuffer[Q][ee],C,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ee);else At(X.__webglFramebuffer[Q],C,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);M(b)?A(r.TEXTURE_CUBE_MAP):b.mipmaps.length>0&&r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),t.unbindTexture()}else if(de){for(let Q=0,ee=ie.length;Q<ee;Q++){let he=ie[Q],U=n.get(he),te=r.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(te=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(te,U.__webglTexture),rt(te,he),At(X.__webglFramebuffer,C,he,r.COLOR_ATTACHMENT0+Q,te,0),M(he)&&A(te)}t.unbindTexture()}else{let Q=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Q=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Q,se.__webglTexture),rt(Q,b),b.mipmaps.length>0)for(let ee=0;ee<b.mipmaps.length;ee++)At(X.__webglFramebuffer[ee],C,b,r.COLOR_ATTACHMENT0,Q,ee);else At(X.__webglFramebuffer,C,b,r.COLOR_ATTACHMENT0,Q,0);M(b)?A(Q):b.mipmaps.length>0&&r.texParameteri(Q,r.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),t.unbindTexture()}C.depthBuffer&&Fn(C)}function k(C){let b=C.textures;for(let X=0,se=b.length;X<se;X++){let ie=b[X];if(M(ie)&&ie.mipmapsAutoUpdate===!0){let ce=S(C),de=n.get(ie).__webglTexture;t.bindTexture(ce,de),A(ce),t.unbindTexture()}}}let Un=[];function gt(C){if(C.samples>0){if(me(C)===!1){let b=C.textures,X=C.width,se=C.height,ie=r.COLOR_BUFFER_BIT,ce=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,de=n.get(C),Q=b.length>1;if(Q)for(let he=0;he<b.length;he++)t.bindFramebuffer(r.FRAMEBUFFER,de.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,de.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer),C.texture.mipmaps.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,de.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let he=0;he<b.length;he++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ie|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ie|=r.STENCIL_BUFFER_BIT)),Q){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,de.__webglColorRenderbuffer[he]);let U=n.get(b[he]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,U,0)}r.blitFramebuffer(0,0,X,se,0,0,X,se,ie,r.NEAREST),c===!0&&(Un.length=0,Un.push(r.COLOR_ATTACHMENT0+he),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&Un.push(ce),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Un))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Q)for(let he=0;he<b.length;he++){t.bindFramebuffer(r.FRAMEBUFFER,de.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.RENDERBUFFER,de.__webglColorRenderbuffer[he]);let U=n.get(b[he]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,de.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.TEXTURE_2D,U,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&c){let b=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function vt(C){return Math.min(i.maxSamples,C.samples)}function me(C){let b=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Bt(C){let b=o.render.frame;h.get(C)!==b&&(h.set(C,b),C.update())}function Ne(C,b){let X=C.colorSpace,se=C.format,ie=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||X!==fn&&X!==Di&&(Xe.getTransfer(X)===nt?(se!==on||ie!==rn)&&Le("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Be("WebGLTextures: Unsupported texture color space:",X)),b}function Ue(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=Me,this.resetTextureUnits=K,this.getTextureUnits=$,this.setTextureUnits=ne,this.setTexture2D=ae,this.setTexture2DArray=_e,this.setTexture3D=Re,this.setTextureCube=xe,this.rebindTextures=Bn,this.setupRenderTarget=Dn,this.updateRenderTargetMipmap=k,this.updateMultisampleRenderTarget=gt,this.setupDepthRenderbuffer=Fn,this.setupFrameBufferTexture=At,this.useMultisampledRTT=me,this.dispose=D}function A_(r,e){function t(n,i=Di){let s,o=Xe.getTransfer(i);if(n===rn)return r.UNSIGNED_BYTE;if(n===Za)return r.UNSIGNED_SHORT_4_4_4_4;if(n===$a)return r.UNSIGNED_SHORT_5_5_5_1;if(n===dh)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===ph)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===fh)return r.BYTE;if(n===uh)return r.SHORT;if(n===xr)return r.UNSIGNED_SHORT;if(n===Ka)return r.INT;if(n===Ln)return r.UNSIGNED_INT;if(n===Cn)return r.FLOAT;if(n===bn)return r.HALF_FLOAT;if(n===mh)return r.ALPHA;if(n===gh)return r.RGB;if(n===on)return r.RGBA;if(n===Ti)return r.DEPTH_COMPONENT;if(n===Bi)return r.DEPTH_STENCIL;if(n===ja)return r.RED;if(n===Ja)return r.RED_INTEGER;if(n===es)return r.RG;if(n===Qa)return r.RG_INTEGER;if(n===ec)return r.RGBA_INTEGER;if(n===Ao||n===bo||n===Mo||n===So)if(o===nt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ao)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===bo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Mo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===So)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ao)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===bo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Mo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===So)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===tc||n===nc||n===ic||n===sc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===tc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===nc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ic)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===sc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===rc||n===oc||n===ac||n===cc||n===lc||n===wo||n===hc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===rc||n===oc)return o===nt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===ac)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===cc)return s.COMPRESSED_R11_EAC;if(n===lc)return s.COMPRESSED_SIGNED_R11_EAC;if(n===wo)return s.COMPRESSED_RG11_EAC;if(n===hc)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===fc||n===uc||n===dc||n===pc||n===mc||n===gc||n===vc||n===xc||n===yc||n===_c||n===Ac||n===bc||n===Mc||n===Sc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===fc)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===uc)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===dc)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===pc)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===mc)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===gc)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===vc)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===xc)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===yc)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===_c)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ac)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===bc)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Mc)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Sc)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===wc||n===Tc||n===Ec)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===wc)return o===nt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Tc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ec)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Rc||n===Lc||n===To||n===Cc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Rc)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Lc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===To)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Cc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Rs?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}function w_(r,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,Eh(r)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function i(m,g,x,M,A){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?s(m,g):g.isMeshLambertMaterial?(s(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(s(m,g),u(m,g)):g.isMeshPhongMaterial?(s(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(s(m,g),f(m,g),g.isMeshPhysicalMaterial&&d(m,g,A)):g.isMeshMatcapMaterial?(s(m,g),p(m,g)):g.isMeshDepthMaterial?s(m,g):g.isMeshDistanceMaterial?(s(m,g),v(m,g)):g.isMeshNormalMaterial?s(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?c(m,g,x,M):g.isSpriteMaterial?l(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Yt&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Yt&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let x=e.get(g),M=x.envMap,A=x.envMapRotation;M&&(m.envMap.value=M,m.envMapRotation.value.setFromMatrix4(S_.makeRotationFromEuler(A)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(hp),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function c(m,g,x,M){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*x,m.scale.value=M*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function l(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function u(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function f(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function d(m,g,x){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Yt&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function v(m,g){let x=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function T_(r,e,t,n){let i={},s={};function o(x,M){let A=M.program;n.uniformBlockBinding(x,A,i[x.id])}function a(x,M){let A=i[x.id];A===void 0&&(p(x),A=c(x),i[x.id]=A,x.addEventListener("dispose",m));let S=M.program;n.updateUBOMapping(x,S);let w=e.render.frame;s[x.id]!==w&&(l(x),s[x.id]=w)}function c(x){let M=r.createBuffer(),A=x.__size,S=x.usage;return r.bindBuffer(r.UNIFORM_BUFFER,M),r.bufferData(r.UNIFORM_BUFFER,A,S),r.bindBuffer(r.UNIFORM_BUFFER,null),M}function l(x){let M=i[x.id],A=x.uniforms,S=x.__cache;r.bindBuffer(r.UNIFORM_BUFFER,M);for(let w=0,y=A.length;w<y;w++){let _=A[w];if(Array.isArray(_))for(let P=0,R=_.length;P<R;P++)h(_[P],w,P,S);else h(_,w,0,S)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function h(x,M,A,S){if(f(x,M,A,S)===!0){let w=x.__offset,y=x.value;if(Array.isArray(y)){let _=0;for(let P=0;P<y.length;P++){let R=y[P],I=v(R,!0);u(R,x.__data,_),_+=I.storage/Float32Array.BYTES_PER_ELEMENT}}else u(y,x.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,w,x.__data)}}function u(x,M,A){typeof x=="number"||typeof x=="boolean"?M[A]=x:x.isMatrix3?(M[A]=x.elements[0],M[A+1]=x.elements[1],M[A+2]=x.elements[2],M[A+3]=0,M[A+4]=x.elements[3],M[A+5]=x.elements[4],M[A+6]=x.elements[5],M[A+7]=0,M[A+8]=x.elements[6],M[A+9]=x.elements[7],M[A+10]=x.elements[8],M[A+11]=0):ArrayBuffer.isView(x)?M.set(x.subarray(0,M.length-A),A):x.toArray(M,A)}function f(x,M,A,S){let w=x.value,y=M+"_"+A;if(Array.isArray(w)){S[y]===void 0&&(S[y]=[]);let _=S[y],P=!1;for(let R=0;R<w.length;R++)d(w[R],_,R)===!0&&(P=!0);return P}return d(w,S,y)}function d(x,M,A){if(M[A]===void 0)return typeof x=="number"||typeof x=="boolean"?M[A]=x:ArrayBuffer.isView(x)?M[A]=x.slice():M[A]=x.clone(),!0;{let S=M[A];if(typeof x=="number"||typeof x=="boolean"){if(S!==x)return M[A]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(S.equals(x)===!1)return S.copy(x),!0}}return!1}function p(x){let M=x.uniforms,A=0,S=16;for(let y=0,_=M.length;y<_;y++){let P=Array.isArray(M[y])?M[y]:[M[y]];for(let R=0,I=P.length;R<I;R++){let B=P[R],N=Array.isArray(B.value)?B.value:[B.value],L=Array.isArray(M[y])||Array.isArray(B.value),D=A;for(let G=0,W=N.length;G<W;G++){let H=N[G],K=v(H,L),$=A%S,ne=$%K.boundary,Me=$+ne;A+=ne,Me!==0&&S-Me<K.storage&&(A+=S-Me),G===0&&(D=A),A+=K.storage}let F=B.type==="int"?Int32Array:B.type==="uint"?Uint32Array:Float32Array;B.__data=new F((A-D)/Float32Array.BYTES_PER_ELEMENT),B.__offset=D}}let w=A%S;return w>0&&(A+=S-w),x.__size=A,x.__cache={},this}function v(x,M){let A={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(A.boundary=4,A.storage=4):x.isVector2?(A.boundary=8,A.storage=8):x.isVector3||x.isColor?(A.boundary=16,A.storage=12):x.isVector4?(A.boundary=16,A.storage=16):x.isMatrix3?(A.boundary=16,A.storage=48):x.isMatrix4?(A.boundary=16,A.storage=64):x.isTexture?Le("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(A.boundary=16,A.storage=x.byteLength):Le("WebGLRenderer: Unsupported uniform value type.",x),M===!0&&(A.boundary=16,A.storage=Math.ceil(A.storage/16)*16),A}function m(x){let M=x.target;M.removeEventListener("dispose",m),r.deleteBuffer(i[M.id]),delete i[M.id],delete s[M.id]}function g(){for(let x in i)r.deleteBuffer(i[x]);i={},s={}}return{bind:o,update:a,dispose:g}}function R_(){return hi===null&&(hi=new or(E_,16,16,es,bn),hi.name="DFG_LUT",hi.minFilter=pt,hi.magFilter=pt,hi.wrapS=hn,hi.wrapT=hn,hi.generateMipmaps=!1,hi.needsUpdate=!0),hi}var q0,X0,Y0,K0,Z0,$0,j0,J0,Q0,eg,tg,ng,ig,sg,rg,og,ag,cg,lg,hg,fg,ug,dg,pg,mg,gg,vg,xg,yg,_g,Ag,bg,Mg,Sg,wg,Tg,Eg,Rg,Lg,Cg,Pg,Ig,Ng,Fg,Bg,Dg,Ug,Og,zg,Hg,kg,Vg,Gg,Wg,qg,Xg,Yg,Kg,Zg,$g,jg,Jg,Qg,ev,tv,nv,iv,sv,rv,ov,av,cv,lv,hv,fv,uv,dv,pv,mv,gv,vv,xv,yv,_v,Av,bv,Mv,Sv,wv,Tv,Ev,Rv,Lv,Cv,Pv,Iv,Nv,Fv,Bv,Dv,Uv,Ov,zv,Hv,kv,Vv,Gv,Wv,qv,Xv,Yv,Kv,Zv,$v,jv,Jv,Qv,ex,tx,nx,ix,sx,rx,ox,ax,cx,lx,hx,fx,ux,dx,px,mx,gx,vx,xx,yx,_x,Ax,bx,Mx,We,ve,fi,Bc,Sx,tp,Po,Nd,Cx,Px,np,ip,Ix,Nx,Fx,Ar,qx,sp,rp,op,ap,cp,lp,Ud,Od,zd,Hd,kd,zh,Hh,kh,Uh,_r,Fy,By,Wd,zy,Dc,qy,Yy,Zy,jy,Qy,n_,Gh,Wh,h_,p_,m_,g_,v_,Qd,Lo,Oh,b_,M_,qh,Xh,S_,hp,E_,hi,Uc,Pn=Dt(()=>{Dh();Dh();q0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,X0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Y0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,K0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Z0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,j0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,J0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Q0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,eg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ng=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ig=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,sg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,rg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,og=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ag=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,fg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ug=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,dg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,pg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,mg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,gg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_g="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ag=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Mg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Sg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,wg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Tg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Eg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Rg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Pg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ig=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ng=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Bg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Dg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Ug=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Og=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Vg=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Gg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Wg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,qg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xg=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Yg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Kg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$g=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Jg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ev=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,iv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sv=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ov=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,av=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,lv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,hv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,dv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,pv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,_v=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Av=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Mv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Sv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Ev=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Rv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Lv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Cv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Pv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Iv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Nv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Fv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Bv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Dv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Uv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ov=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,zv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Hv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,kv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Vv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Gv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Wv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yv=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$v=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,jv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Jv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Qv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,ex=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ix=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,rx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ox=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ax=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,lx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,fx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ux=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,px=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,mx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,yx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_x=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ax=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Mx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,We={alphahash_fragment:q0,alphahash_pars_fragment:X0,alphamap_fragment:Y0,alphamap_pars_fragment:K0,alphatest_fragment:Z0,alphatest_pars_fragment:$0,aomap_fragment:j0,aomap_pars_fragment:J0,batching_pars_vertex:Q0,batching_vertex:eg,begin_vertex:tg,beginnormal_vertex:ng,bsdfs:ig,iridescence_fragment:sg,bumpmap_pars_fragment:rg,clipping_planes_fragment:og,clipping_planes_pars_fragment:ag,clipping_planes_pars_vertex:cg,clipping_planes_vertex:lg,color_fragment:hg,color_pars_fragment:fg,color_pars_vertex:ug,color_vertex:dg,common:pg,defaultnormal_vertex:mg,displacementmap_pars_vertex:gg,displacementmap_vertex:vg,emissivemap_fragment:xg,emissivemap_pars_fragment:yg,colorspace_fragment:_g,colorspace_pars_fragment:Ag,envmap_fragment:bg,envmap_common_pars_fragment:Mg,envmap_pars_fragment:Sg,envmap_pars_vertex:wg,envmap_physical_pars_fragment:Dg,envmap_vertex:Tg,fog_vertex:Eg,fog_pars_vertex:Rg,fog_fragment:Lg,fog_pars_fragment:Cg,gradientmap_pars_fragment:Pg,lightmap_pars_fragment:Ig,lights_lambert_fragment:Ng,lights_lambert_pars_fragment:Fg,lights_pars_begin:Bg,lights_toon_fragment:Ug,lights_toon_pars_fragment:Og,lights_phong_fragment:zg,lights_phong_pars_fragment:Hg,lights_physical_fragment:kg,lights_physical_pars_fragment:Vg,lights_fragment_begin:Gg,lights_fragment_maps:Wg,lights_fragment_end:qg,lightprobes_pars_fragment:Xg,logdepthbuf_fragment:Yg,logdepthbuf_pars_fragment:Kg,logdepthbuf_pars_vertex:Zg,logdepthbuf_vertex:$g,map_fragment:jg,map_pars_fragment:Jg,map_particle_fragment:Qg,map_particle_pars_fragment:ev,metalnessmap_fragment:tv,metalnessmap_pars_fragment:nv,morphinstance_vertex:iv,morphcolor_vertex:sv,morphnormal_vertex:rv,morphtarget_pars_vertex:ov,morphtarget_vertex:av,normal_fragment_begin:cv,normal_fragment_maps:lv,normal_pars_fragment:hv,normal_pars_vertex:fv,normal_vertex:uv,normalmap_pars_fragment:dv,clearcoat_normal_fragment_begin:pv,clearcoat_normal_fragment_maps:mv,clearcoat_pars_fragment:gv,iridescence_pars_fragment:vv,opaque_fragment:xv,packing:yv,premultiplied_alpha_fragment:_v,project_vertex:Av,dithering_fragment:bv,dithering_pars_fragment:Mv,roughnessmap_fragment:Sv,roughnessmap_pars_fragment:wv,shadowmap_pars_fragment:Tv,shadowmap_pars_vertex:Ev,shadowmap_vertex:Rv,shadowmask_pars_fragment:Lv,skinbase_vertex:Cv,skinning_pars_vertex:Pv,skinning_vertex:Iv,skinnormal_vertex:Nv,specularmap_fragment:Fv,specularmap_pars_fragment:Bv,tonemapping_fragment:Dv,tonemapping_pars_fragment:Uv,transmission_fragment:Ov,transmission_pars_fragment:zv,uv_pars_fragment:Hv,uv_pars_vertex:kv,uv_vertex:Vv,worldpos_vertex:Gv,background_vert:Wv,background_frag:qv,backgroundCube_vert:Xv,backgroundCube_frag:Yv,cube_vert:Kv,cube_frag:Zv,depth_vert:$v,depth_frag:jv,distance_vert:Jv,distance_frag:Qv,equirect_vert:ex,equirect_frag:tx,linedashed_vert:nx,linedashed_frag:ix,meshbasic_vert:sx,meshbasic_frag:rx,meshlambert_vert:ox,meshlambert_frag:ax,meshmatcap_vert:cx,meshmatcap_frag:lx,meshnormal_vert:hx,meshnormal_frag:fx,meshphong_vert:ux,meshphong_frag:dx,meshphysical_vert:px,meshphysical_frag:mx,meshtoon_vert:gx,meshtoon_frag:vx,points_vert:xx,points_frag:yx,shadow_vert:_x,shadow_frag:Ax,sprite_vert:bx,sprite_frag:Mx},ve={common:{diffuse:{value:new Te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new De}},envmap:{envMap:{value:null},envMapRotation:{value:new De},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new De}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new De}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new De},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new De},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new De},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new De}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new De}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new De}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0},uvTransform:{value:new De}},sprite:{diffuse:{value:new Te(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}}},fi={basic:{uniforms:an([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:an([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Te(0)},envMapIntensity:{value:1}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:an([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Te(0)},specular:{value:new Te(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:an([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new Te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:an([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new Te(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:an([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:an([ve.points,ve.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:an([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:an([ve.common,ve.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:an([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:an([ve.sprite,ve.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new De},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new De}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distance:{uniforms:an([ve.common,ve.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distance_vert,fragmentShader:We.distance_frag},shadow:{uniforms:an([ve.lights,ve.fog,{color:{value:new Te(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};fi.physical={uniforms:an([fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new De},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new De},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new De},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new De},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new De},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new De},sheen:{value:0},sheenColor:{value:new Te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new De},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new De},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new De},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new De},attenuationDistance:{value:0},attenuationColor:{value:new Te(0)},specularColor:{value:new Te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new De},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new De},anisotropyVector:{value:new Oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new De}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};Bc={r:0,b:0,g:0},Sx=new Ie,tp=new De;tp.set(-1,0,0,0,1,0,0,0,1);Po=class extends Jt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new ro(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Vn(5,5,5),s=new Qe({name:"CubemapFromEquirect",uniforms:Ls(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Yt,blending:Ss});s.uniforms.tEquirect.value=t;let o=new it(i,s),a=t.minFilter;return t.minFilter===An&&(t.minFilter=pt),new dr(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}},Nd=256,Cx=3,Px=20,np=256,ip=16,Ix=3,Nx=new z,Fx=new Te,Ar=class r{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new dr(1,10,null),this._boxMesh=new it(new Vn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){let{size:o=256,position:a=Nx}=s,c=this._renderer;this._setSize(o);let l=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let u=c.autoClear,f=c.autoClearColor,d=c.autoClearDepth,p=c.autoClearStencil,v=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,v===null&&(e.background=c.getClearColor(Fx));let m=new dr(n,i,h);return m.position.copy(a),m.update(c,e),c.autoClear=u,c.autoClearColor=f,c.autoClearDepth=d,c.autoClearStencil=p,e.background=v,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(l,t)),this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Nd,Sh(e))}_fromTexture(e,t){e.mapping===Ts||e.mapping===gr?this._setSize(e.image.length===0?Nd:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=Fd(e,!1,!1),n=Math.log2(e)-Cx;for(let i=0;i<=n;i++)t.texture.mipmaps.push({width:e>>i,height:e>>i});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Fd(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let i=this._boxMesh,s=this._cubeCamera;i.material=n,s.renderTarget=e,s.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),s.update(this._renderer,i),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Ts||e.mapping===gr?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dd()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Bd()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Bx(),this._integrationMaterial=Dx());let t=this._cubeSize,n=e.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(t/ip);for(let o=0;o<=n;o++){let a=r.lodToRoughness(o,n);if(o>n-Ix)s.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let c=a>0?Math.log2(t)+.5*Math.log2(6/(np*Math.pow(a,4)))+.5:0;i.roughness.value=a,i.lodBias.value=c,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Ux());let n=this._blurMaterial,i=n.uniforms,s=this._sourceTarget;i.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,i.envMap.value=s.texture,this._renderCube(e,0,n),i.envMap.value=e.texture,this._renderCube(s,0,n)}};qx={[ih]:"LINEAR_TONE_MAPPING",[sh]:"REINHARD_TONE_MAPPING",[rh]:"CINEON_TONE_MAPPING",[oh]:"ACES_FILMIC_TONE_MAPPING",[ch]:"AGX_TONE_MAPPING",[lh]:"NEUTRAL_TONE_MAPPING",[ah]:"CUSTOM_TONE_MAPPING"};sp=new Ut,rp=new ei(1,1),op=new oo(1),ap=new $r,cp=new Ta,lp=new ro,Ud=[],Od=[],zd=new Float32Array(16),Hd=new Float32Array(9),kd=new Float32Array(4);zh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=uy(t.type)}},Hh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Iy(t.type)}},kh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let s=0,o=i.length;s!==o;++s){let a=i[s];a.setValue(e,t[a.id],n)}}},Uh=/(\w+)(\])?(\[|\.)?/g;_r=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);Ny(a,c,this)}let i=[],s=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(o):s.push(o);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){let s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){let a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,s=e.length;i!==s;++i){let o=e[i];o.id in t&&n.push(o)}return n}};Fy=37297,By=0;Wd=new De;zy={[ih]:"Linear",[sh]:"Reinhard",[rh]:"Cineon",[oh]:"ACESFilmic",[ch]:"AgX",[lh]:"Neutral",[ah]:"Custom"};Dc=new z;qy=/^[ \t]*#include +<([\w\d./]+)>/gm;Yy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;Zy={[_o]:"SHADOWMAP_TYPE_PCF",[pr]:"SHADOWMAP_TYPE_VSM"};jy={[gr]:"ENVMAP_MODE_REFRACTION"};Qy={[nh]:"ENVMAP_BLENDING_MULTIPLY",[hd]:"ENVMAP_BLENDING_MIX",[fd]:"ENVMAP_BLENDING_ADD"};n_=0,Gh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Wh(e),t.set(e,n)),n}},Wh=class{constructor(e){this.id=n_++,this.code=e,this.usedTimes=0}};h_=0;p_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,m_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,g_=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],v_=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],Qd=new Ie,Lo=new z,Oh=new z;b_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,M_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,qh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ao(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Qe({vertexShader:b_,fragmentShader:M_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new it(new xn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Xh=class extends Qn{constructor(e,t){super();let n=this,i=null,s=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,p=null,v=typeof XRWebGLBinding<"u",m=new qh,g={},x=t.getContextAttributes(),M=null,A=null,S=[],w=[],y=new Oe,_=null,P=null,R=new Lt;R.viewport=new at;let I=new Lt;I.viewport=new at;let B=[R,I],N=new Ha,L=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ae=S[j];return ae===void 0&&(ae=new nr,S[j]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(j){let ae=S[j];return ae===void 0&&(ae=new nr,S[j]=ae),ae.getGripSpace()},this.getHand=function(j){let ae=S[j];return ae===void 0&&(ae=new nr,S[j]=ae),ae.getHandSpace()};function F(j){let ae=w.indexOf(j.inputSource);if(ae===-1)return;let _e=S[ae];_e!==void 0&&(_e.update(j.inputSource,j.frame,l||o),_e.dispatchEvent({type:j.type,data:j.inputSource}))}function G(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",G),i.removeEventListener("inputsourceschange",W);for(let j=0;j<S.length;j++){let ae=w[j];ae!==null&&(w[j]=null,S[j].disconnect(ae))}L=null,D=null,m.reset();for(let j in g)delete g[j];if(e.setRenderTarget(M),d=null,f=null,u=null,i=null,A=null,Me.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(y.width,y.height,!1),P!==null){let j=P.camera;j.fov=P.fov,j.zoom=P.zoom,j.updateProjectionMatrix(),P=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,n.isPresenting===!0&&Le("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&Le("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(M=e.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",G),i.addEventListener("inputsourceschange",W),x.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(y),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,Re=null,xe=null;x.depth&&(xe=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=x.stencil?Bi:Ti,Re=x.stencil?Rs:Ln);let ke={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:s};u=this.getBinding(),f=u.createProjectionLayer(ke),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),A=new Jt(f.textureWidth,f.textureHeight,{format:on,type:rn,depthTexture:new ei(f.textureWidth,f.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let _e={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,_e),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),A=new Jt(d.framebufferWidth,d.framebufferHeight,{format:on,type:rn,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),Me.setContext(i),Me.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function W(j){for(let ae=0;ae<j.removed.length;ae++){let _e=j.removed[ae],Re=w.indexOf(_e);Re>=0&&(w[Re]=null,S[Re].disconnect(_e))}for(let ae=0;ae<j.added.length;ae++){let _e=j.added[ae],Re=w.indexOf(_e);if(Re===-1){for(let ke=0;ke<S.length;ke++)if(ke>=w.length){w.push(_e),Re=ke;break}else if(w[ke]===null){w[ke]=_e,Re=ke;break}if(Re===-1)break}let xe=S[Re];xe&&xe.connect(_e)}}function H(j,ae){ae===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ae.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;let ae=j.near,_e=j.far;m.texture!==null&&(m.depthNear>0&&(ae=m.depthNear),m.depthFar>0&&(_e=m.depthFar)),N.near=I.near=R.near=ae,N.far=I.far=R.far=_e,(L!==N.near||D!==N.far)&&(i.updateRenderState({depthNear:N.near,depthFar:N.far}),L=N.near,D=N.far),N.layers.mask=j.layers.mask|6,R.layers.mask=N.layers.mask&-5,I.layers.mask=N.layers.mask&-3;let Re=j.parent,xe=N.cameras;H(N,Re);for(let ke=0;ke<xe.length;ke++)H(xe[ke],Re);N.projectionMatrix.copy(R.projectionMatrix),N.projectionMatrixInverse.copy(R.projectionMatrixInverse),P===null&&j.isPerspectiveCamera&&(P={camera:j,fov:j.fov,zoom:j.zoom}),K(j,N,Re)};function K(j,ae,_e){_e===null?j.matrix.copy(ae.matrixWorld):(j.matrix.copy(_e.matrixWorld),j.matrix.invert(),j.matrix.multiply(ae.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ae.projectionMatrix),j.projectionMatrixInverse.copy(ae.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=xs*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(j){c=j,f!==null&&(f.fixedFoveation=j),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=j)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(N)},this.getCameraTexture=function(j){return g[j]};let $=null;function ne(j,ae){if(h=ae.getViewerPose(l||o),p=ae,h!==null){let _e=h.views;d!==null&&(e.setRenderTargetFramebuffer(A,d.framebuffer),e.setRenderTarget(A));let Re=!1;_e.length!==N.cameras.length&&(N.cameras.length=0,Re=!0);for(let Fe=0;Fe<_e.length;Fe++){let rt=_e[Fe],ht=null;if(d!==null)ht=d.getViewport(rt);else{let Zt=u.getViewSubImage(f,rt);ht=Zt.viewport,Fe===0&&(e.setRenderTargetTextures(A,Zt.colorTexture,Zt.depthStencilTexture),e.setRenderTarget(A))}let Ze=B[Fe];Ze===void 0&&(Ze=new Lt,Ze.layers.enable(Fe),Ze.viewport=new at,B[Fe]=Ze),Ze.matrix.fromArray(rt.transform.matrix),Ze.matrix.decompose(Ze.position,Ze.quaternion,Ze.scale),Ze.projectionMatrix.fromArray(rt.projectionMatrix),Ze.projectionMatrixInverse.copy(Ze.projectionMatrix).invert(),Ze.viewport.set(ht.x,ht.y,ht.width,ht.height),Fe===0&&(N.matrix.copy(Ze.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Re===!0&&N.cameras.push(Ze)}let xe=i.enabledFeatures;if(xe&&xe.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&v){u=n.getBinding();let Fe=u.getDepthInformation(_e[0]);Fe&&Fe.isValid&&Fe.texture&&m.init(Fe,i.renderState)}if(xe&&xe.includes("camera-access")&&v){e.state.unbindTexture(),u=n.getBinding();for(let Fe=0;Fe<_e.length;Fe++){let rt=_e[Fe].camera;if(rt){let ht=g[rt];ht||(ht=new ao,g[rt]=ht);let Ze=u.getCameraImage(rt);ht.sourceTexture=Ze}}}}for(let _e=0;_e<S.length;_e++){let Re=w[_e],xe=S[_e];Re!==null&&xe!==void 0&&xe.update(Re,ae,l||o)}$&&$(j,ae),ae.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ae}),p=null}let Me=new ep;Me.setAnimationLoop(ne),this.setAnimationLoop=function(j){$=j},this.dispose=function(){}}},S_=new Ie,hp=new De;hp.set(-1,0,0,0,1,0,0,0,1);E_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),hi=null;Uc=class{constructor(e={}){let{canvas:t=wd(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=rn}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let v=d,m=new Set([ec,Qa,Ja]),g=new Set([rn,Ln,xr,Rs,Za,$a]),x=new Uint32Array(4),M=new Int32Array(4),A={textures:[],min:[],max:[],resolution:[]},S=null,w=null,y=[],_=[],P=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=_n,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,I=!1,B=null,N=null,L=null,D=null;this._outputColorSpace=xt;let F=0,G=0,W=null,H=-1,K=null,$=new at,ne=new at,Me=null,j=new Te(0),ae=0,_e=t.width,Re=t.height,xe=1,ke=null,Pt=null,Fe=new at(0,0,_e,Re),rt=new at(0,0,_e,Re),ht=!1,Ze=new ji,Zt=new Ea,Ft=!1,mn=!1,At=new Ie,ni=new z,kt=new at,Fn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Bn=!1;function Dn(){return W===null?xe:1}let k=n;function Un(T,O){return t.getContext(T,O)}let gt,vt,me,Bt,Ne,Ue,C,b,X,se,ie,ce,de,Q,ee,he,U,te,J,fe,oe,le,Ce;try{let T={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Wa}`),t.addEventListener("webglcontextlost",Pe,!1),t.addEventListener("webglcontextrestored",Ve,!1),t.addEventListener("webglcontextcreationerror",ge,!1),k===null){let O="webgl2";if(k=Un(O,T),k===null)throw Un(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ge()}catch(T){throw t.removeEventListener("webglcontextlost",Pe,!1),t.removeEventListener("webglcontextrestored",Ve,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),Be("WebGLRenderer: "+T.message),T}function Ge(){gt=new zx(k),gt.init(),oe=new A_(k,gt),vt=new Rx(k,gt,e,oe),me=new y_(k,gt),vt.reversedDepthBuffer&&f&&me.buffers.depth.setReversed(!0),N=k.createFramebuffer(),L=k.createFramebuffer(),D=k.createFramebuffer(),Bt=new Vx(k),Ne=new r_,Ue=new __(k,gt,me,Ne,vt,oe,Bt),C=new Ox(R),b=new W0(k),le=new Tx(k,b),X=new Hx(k,b,Bt,le),se=new Wx(k,X,b,le,Bt),te=new Gx(k,vt,Ue),ee=new Lx(Ne),ie=new s_(R,C,gt,vt,le,ee),ce=new w_(R,Ne),de=new a_,Q=new d_(gt),U=new wx(R,C,me,se,p,c),he=new x_(R,se,vt),Ce=new T_(k,Bt,vt,me),J=new Ex(k,gt,Bt),fe=new kx(k,gt,Bt),Bt.programs=ie.programs,R.capabilities=vt,R.extensions=gt,R.properties=Ne,R.renderLists=de,R.shadowMap=he,R.state=me,R.info=Bt}v!==rn&&(P=new Xx(v,t.width,t.height,a,i,s));let re=new Xh(R,k);this.xr=re,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let T=gt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=gt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return xe},this.setPixelRatio=function(T){T!==void 0&&(xe=T,this.setSize(_e,Re,!1))},this.getSize=function(T){return T.set(_e,Re)},this.setSize=function(T,O,Z=!0){if(re.isPresenting){Le("WebGLRenderer: Can't change size while VR device is presenting.");return}_e=T,Re=O,t.width=Math.floor(T*xe),t.height=Math.floor(O*xe),Z===!0&&(t.style.width=T+"px",t.style.height=O+"px"),P!==null&&P.setSize(t.width,t.height),this.setViewport(0,0,T,O)},this.getDrawingBufferSize=function(T){return T.set(_e*xe,Re*xe).floor()},this.setDrawingBufferSize=function(T,O,Z){_e=T,Re=O,xe=Z,t.width=Math.floor(T*Z),t.height=Math.floor(O*Z),this.setViewport(0,0,T,O)},this.setEffects=function(T){if(v===rn){Be("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let O=0;O<T.length;O++)if(T[O].isOutputPass===!0){Le("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy($)},this.getViewport=function(T){return T.copy(Fe)},this.setViewport=function(T,O,Z,q){T.isVector4?Fe.set(T.x,T.y,T.z,T.w):Fe.set(T,O,Z,q),me.viewport($.copy(Fe).multiplyScalar(Dn()).round())},this.getScissor=function(T){return T.copy(rt)},this.setScissor=function(T,O,Z,q){T.isVector4?rt.set(T.x,T.y,T.z,T.w):rt.set(T,O,Z,q),me.scissor(ne.copy(rt).multiplyScalar(Dn()).round())},this.getScissorTest=function(){return ht},this.setScissorTest=function(T){me.setScissorTest(ht=T)},this.setOpaqueSort=function(T){ke=T},this.setTransparentSort=function(T){Pt=T},this.getClearColor=function(T){return T.copy(U.getClearColor())},this.setClearColor=function(){U.setClearColor(...arguments)},this.getClearAlpha=function(){return U.getClearAlpha()},this.setClearAlpha=function(){U.setClearAlpha(...arguments)},this.clear=function(T=!0,O=!0,Z=!0){let q=0;if(T){let Y=!1;if(W!==null){let pe=W.texture.format;Y=m.has(pe)}if(Y){let pe=W.texture.type,be=g.has(pe),ue=U.getClearColor(),ye=U.getClearAlpha(),Ee=ue.r,He=ue.g,$e=ue.b;be?(x[0]=Ee,x[1]=He,x[2]=$e,x[3]=ye,k.clearBufferuiv(k.COLOR,0,x)):(M[0]=Ee,M[1]=He,M[2]=$e,M[3]=ye,k.clearBufferiv(k.COLOR,0,M))}else q|=k.COLOR_BUFFER_BIT}O&&(q|=k.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(q|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q!==0&&k.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),B=T},this.dispose=function(){t.removeEventListener("webglcontextlost",Pe,!1),t.removeEventListener("webglcontextrestored",Ve,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),U.dispose(),de.dispose(),Q.dispose(),Ue.dispose(),Ne.dispose(),C.dispose(),se.dispose(),X.dispose(),le.dispose(),Ce.dispose(),ie.dispose(),re.dispose(),re.removeEventListener("sessionstart",Yf),re.removeEventListener("sessionend",Kf),os.stop()};function Pe(T){T.preventDefault(),Zr("WebGLRenderer: Context Lost."),I=!0}function Ve(){Zr("WebGLRenderer: Context Restored."),I=!1;let T=Bt.autoReset,O=he.enabled,Z=he.autoUpdate,q=he.needsUpdate,Y=he.type;Ge(),Bt.autoReset=T,he.enabled=O,he.autoUpdate=Z,he.needsUpdate=q,he.type=Y}function ge(T){Be("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ot(T){let O=T.target;O.removeEventListener("dispose",ot),Vt(O)}function Vt(T){Vi(T),Ne.remove(T)}function Vi(T){let O=Ne.get(T).programs;O!==void 0&&(O.forEach(function(Z){ie.releaseProgram(Z)}),T.isShaderMaterial&&ie.releaseShaderCache(T))}this.renderBufferDirect=function(T,O,Z,q,Y,pe){O===null&&(O=Fn);let be=Y.isMesh&&Y.matrixWorld.determinantAffine()<0,ue=Bm(T,O,Z,q,Y);me.setMaterial(q,be);let ye=Z.index,Ee=1;if(q.wireframe===!0){if(ye=X.getWireframeAttribute(Z),ye===void 0)return;Ee=2}let He=Z.drawRange,$e=Z.attributes.position,Se=He.start*Ee,je=(He.start+He.count)*Ee;pe!==null&&(Se=Math.max(Se,pe.start*Ee),je=Math.min(je,(pe.start+pe.count)*Ee)),ye!==null?(Se=Math.max(Se,0),je=Math.min(je,ye.count)):$e!=null&&(Se=Math.max(Se,0),je=Math.min(je,$e.count));let It=je-Se;if(It<0||It===1/0)return;le.setup(Y,q,ue,Z,ye);let dt,ft=J;if(ye!==null&&(dt=b.get(ye),ft=fe,ft.setIndex(dt)),Y.isMesh)q.wireframe===!0?(me.setLineWidth(q.wireframeLinewidth*Dn()),ft.setMode(k.LINES)):ft.setMode(k.TRIANGLES);else if(Y.isLine){let Qt=q.linewidth;Qt===void 0&&(Qt=1),me.setLineWidth(Qt*Dn()),Y.isLineSegments?ft.setMode(k.LINES):Y.isLineLoop?ft.setMode(k.LINE_LOOP):ft.setMode(k.LINE_STRIP)}else Y.isPoints?ft.setMode(k.POINTS):Y.isSprite&&ft.setMode(k.TRIANGLES);if(Y.isBatchedMesh)if(gt.get("WEBGL_multi_draw"))ft.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{let Qt=Y._multiDrawStarts,we=Y._multiDrawCounts,cn=Y._multiDrawCount,tt=ye?b.get(ye).bytesPerElement:1,as=Ne.get(q).currentProgram.getUniforms();for(let en=0;en<cn;en++)as.setValue(k,"_gl_DrawID",en),ft.render(Qt[en]/tt,we[en])}else if(Y.isInstancedMesh)ft.renderInstances(Se,It,Y.count);else if(Z.isInstancedBufferGeometry){let Qt=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,we=Math.min(Z.instanceCount,Qt);ft.renderInstances(Se,It,we)}else ft.render(Se,It)};function Xf(T,O,Z,q){B!==null&&T.isNodeMaterial&&B.setObject(q,T),Ft===!0&&ee.setState(T,Z,!1),T.transparent===!0&&T.side===sn&&T.forceSinglePass===!1?(T.side=Yt,T.needsUpdate=!0,Br(T,O,q),T.side=Gn,T.needsUpdate=!0,Br(T,O,q),T.side=sn):Br(T,O,q)}this.compile=function(T,O,Z=null){Z===null&&(Z=T),B!==null&&B.renderStart(T,O,Z),w=Q.get(Z),w.init(O),_.push(w),Z.traverseVisible(function(Y){Y.isLight&&Y.layers.test(O.layers)&&(w.pushLight(Y),Y.castShadow&&w.pushShadow(Y))}),T!==Z&&T.traverseVisible(function(Y){Y.isLight&&Y.layers.test(O.layers)&&(w.pushLight(Y),Y.castShadow&&w.pushShadow(Y))}),w.setupLights(),B!==null&&B.updateLights(w.state.lightsArray),mn=this.localClippingEnabled,Ft=ee.init(this.clippingPlanes,mn),Ft===!0&&ee.setGlobalState(this.clippingPlanes,O),B!==null&&he.render(w.state.shadowsArray,Z,O);let q=new Set;return T.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;let pe=Y.material;if(pe)if(Array.isArray(pe))for(let be=0;be<pe.length;be++){let ue=pe[be];Xf(ue,Z,O,Y),q.add(ue)}else Xf(pe,Z,O,Y),q.add(pe)}),w=_.pop(),B!==null&&B.renderEnd(),q},this.compileAsync=function(T,O,Z=null){let q=this.compile(T,O,Z);return new Promise(Y=>{function pe(){if(q.forEach(function(be){let ye=Ne.get(be).currentProgram;(ye===void 0||ye.isReady())&&q.delete(be)}),q.size===0){Y(T);return}setTimeout(pe,10)}gt.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let gl=null;function Nm(T){gl&&gl(T)}function Yf(){os.stop()}function Kf(){os.start()}let os=new ep;os.setAnimationLoop(Nm),typeof self<"u"&&os.setContext(self),this.setAnimationLoop=function(T){gl=T,re.setAnimationLoop(T),T===null?os.stop():os.start()},re.addEventListener("sessionstart",Yf),re.addEventListener("sessionend",Kf),this.render=function(T,O){if(O!==void 0&&O.isCamera!==!0){Be("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;B!==null&&B.renderStart(T,O);let Z=re.enabled===!0&&re.isPresenting===!0,q=P!==null&&(W===null||Z)&&P.begin(R,W);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(re.cameraAutoUpdate===!0&&re.updateCamera(O),O=re.getCamera()),T.isScene===!0&&T.onBeforeRender(R,T,O,W),w=Q.get(T,_.length),w.init(O),w.state.textureUnits=Ue.getTextureUnits(),_.push(w),At.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),O.isArrayCamera?Zt.setFromArrayCamera(O):Ze.setFromProjectionMatrix(At,zn,O.reversedDepth),mn=this.localClippingEnabled,Ft=ee.init(this.clippingPlanes,mn),S=de.get(T,y.length),S.init(),y.push(S),this.info.render.frame++,re.enabled===!0&&re.isPresenting===!0){let be=R.xr.getDepthSensingMesh();be!==null&&vl(be,O,-1/0,R.sortObjects)}vl(T,O,0,R.sortObjects),S.finish(),B!==null&&B.updateLights(w.state.lightsArray),R.sortObjects===!0&&S.sort(ke,Pt),Bn=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,Bn&&U.addToRenderList(S,T),this.info.autoReset===!0&&this.info.reset(),Ft===!0&&ee.beginShadows();let Y=w.state.shadowsArray;if(he.render(Y,T,O),Ft===!0&&ee.endShadows(),(q&&P.hasRenderPass())===!1){let be=S.opaque,ue=S.transmissive;if(w.setupLights(),O.isArrayCamera){let ye=O.cameras;if(ue.length>0)for(let Ee=0,He=ye.length;Ee<He;Ee++){let $e=ye[Ee];$f(be,ue,T,$e)}Bn&&U.render(T);for(let Ee=0,He=ye.length;Ee<He;Ee++){let $e=ye[Ee];Zf(S,T,$e,$e.viewport)}}else ue.length>0&&$f(be,ue,T,O),Bn&&U.render(T),Zf(S,T,O)}W!==null&&G===0&&(Ue.updateMultisampleRenderTarget(W),Ue.updateRenderTargetMipmap(W)),q&&P.end(R),T.isScene===!0&&T.onAfterRender(R,T,O),le.resetDefaultState(),H=-1,K=null,_.pop(),_.length>0?(w=_[_.length-1],Ue.setTextureUnits(w.state.textureUnits),Ft===!0&&ee.setGlobalState(R.clippingPlanes,w.state.camera)):w=null,y.pop(),y.length>0?S=y[y.length-1]:S=null,B!==null&&B.renderEnd()};function vl(T,O,Z,q){if(T.visible===!1)return;if(T.layers.test(O.layers)){if(T.isGroup)Z=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(O);else if(T.isLight)w.pushLight(T),T.castShadow&&w.pushShadow(T);else if(T.isSprite){let be=O.isArrayCamera?Zt:Ze;if(!T.frustumCulled||T.intersectsFrustum(be)){q&&kt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(At);let ue=se.update(T),ye=T.material;ye.visible&&S.push(T,ue,ye,Z,kt.z,null,O)}}else if(T.isMesh||T.isLine||T.isPoints){let be=O.isArrayCamera?Zt:Ze;if(!T.frustumCulled||T.intersectsFrustum(be)){let ue=se.update(T),ye=T.material;if(q&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),kt.copy(T.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),kt.copy(ue.boundingSphere.center)),kt.applyMatrix4(T.matrixWorld).applyMatrix4(At)),Array.isArray(ye)){let Ee=ue.groups;for(let He=0,$e=Ee.length;He<$e;He++){let Se=Ee[He],je=ye[Se.materialIndex];je&&je.visible&&S.push(T,ue,je,Z,kt.z,Se,O)}}else ye.visible&&S.push(T,ue,ye,Z,kt.z,null,O)}}}let pe=T.children;for(let be=0,ue=pe.length;be<ue;be++)vl(pe[be],O,Z,q)}function Zf(T,O,Z,q){let{opaque:Y,transmissive:pe,transparent:be}=T;w.setupLightsView(Z),Ft===!0&&ee.setGlobalState(R.clippingPlanes,Z),q&&me.viewport($.copy(q)),Y.length>0&&Vo(Y,O,Z),pe.length>0&&Vo(pe,O,Z),be.length>0&&Vo(be,O,Z),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function $f(T,O,Z,q){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[q.id]===void 0){let Se=gt.has("EXT_color_buffer_half_float")||gt.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[q.id]=new Jt(1,1,{generateMipmaps:!0,type:Se?bn:rn,minFilter:An,samples:Math.max(4,vt.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Xe.workingColorSpace})}let pe=w.state.transmissionRenderTarget[q.id],be=q.viewport||$;pe.setSize(be.z*R.transmissionResolutionScale,be.w*R.transmissionResolutionScale);let ue=R.getRenderTarget(),ye=R.getActiveCubeFace(),Ee=R.getActiveMipmapLevel();R.setRenderTarget(pe),R.getClearColor(j),ae=R.getClearAlpha(),ae<1&&R.setClearColor(16777215,.5),R.clear(),Bn&&U.render(Z);let He=R.toneMapping;R.toneMapping=_n;let $e=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),w.setupLightsView(q),Ft===!0&&ee.setGlobalState(R.clippingPlanes,q),Vo(T,Z,q),Ue.updateMultisampleRenderTarget(pe),Ue.updateRenderTargetMipmap(pe),gt.has("WEBGL_multisampled_render_to_texture")===!1){let Se=!1;for(let je=0,It=O.length;je<It;je++){let dt=O[je],{object:ft,geometry:Qt,material:we,group:cn}=dt;if(we.side===sn&&ft.layers.test(q.layers)){let tt=we.side;we.side=Yt,we.needsUpdate=!0,jf(ft,Z,q,Qt,we,cn),we.side=tt,we.needsUpdate=!0,Se=!0}}Se===!0&&(Ue.updateMultisampleRenderTarget(pe),Ue.updateRenderTargetMipmap(pe))}R.setRenderTarget(ue,ye,Ee),R.setClearColor(j,ae),$e!==void 0&&(q.viewport=$e),R.toneMapping=He}function Vo(T,O,Z){let q=O.isScene===!0?O.overrideMaterial:null;for(let Y=0,pe=T.length;Y<pe;Y++){let be=T[Y],{object:ue,geometry:ye,group:Ee}=be,He=be.material;He.allowOverride===!0&&q!==null&&(He=q),ue.layers.test(Z.layers)&&jf(ue,O,Z,ye,He,Ee)}}function jf(T,O,Z,q,Y,pe){B!==null&&Y.isNodeMaterial&&B.setObject(T,Y),T.onBeforeRender(R,O,Z,q,Y,pe),T.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),Y.onBeforeRender(R,O,Z,q,T,pe),Y.transparent===!0&&Y.side===sn&&Y.forceSinglePass===!1?(Y.side=Yt,Y.needsUpdate=!0,R.renderBufferDirect(Z,O,q,Y,T,pe),Y.side=Gn,Y.needsUpdate=!0,R.renderBufferDirect(Z,O,q,Y,T,pe),Y.side=sn):R.renderBufferDirect(Z,O,q,Y,T,pe),T.onAfterRender(R,O,Z,q,Y,pe)}function Jf(T){let O=0;for(let Z of T)Z.texture!==null&&O++;return O}function Br(T,O,Z){O.isScene!==!0&&(O=Fn);let q=Ne.get(T),Y=w.state.lights,pe=w.state.shadowsArray,be=Y.state.version,ue=ie.getParameters(T,Y.state,pe,O,Z,w.state.lightProbeGridArray),ye=ie.getProgramCacheKey(ue),Ee=q.programs;q.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?O.environment:null,q.fog=O.fog;let He=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;q.envMap=C.get(T.envMap||q.environment,He),q.envMapRotation=q.environment!==null&&T.envMap===null?O.environmentRotation:T.envMapRotation,Ee===void 0&&(T.addEventListener("dispose",ot),Ee=new Map,q.programs=Ee,q.programVariants=new Map);let $e=Ee.get(ye);if($e!==void 0){if(q.currentProgram===$e&&q.lightsStateVersion===be)return eu(T,ue),$e}else ue.uniforms=ie.getUniforms(T),B!==null&&T.isNodeMaterial&&B.build(T,Z,ue),T.onBeforeCompile(ue,R),$e=ie.acquireProgram(ue,ye),Ee.set(ye,$e),q.uniforms=ue.uniforms;let Se=q.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Se.clippingPlanes=ee.uniform),eu(T,ue),q.needsLights=Um(T),q.lightsStateVersion=be,q.needsLights&&(Se.ambientLightColor.value=Y.state.ambient,Se.lightProbe.value=Y.state.probe,Se.sunLights.value=Y.state.sun,Se.sunLightShadows.value=Y.state.sunShadow,Se.directionalLights.value=Y.state.directional,Se.directionalLightShadows.value=Y.state.directionalShadow,Se.spotLights.value=Y.state.spot,Se.spotLightShadows.value=Y.state.spotShadow,Se.rectAreaLights.value=Y.state.rectArea,Se.ltc_1.value=Y.state.rectAreaLTC1,Se.ltc_2.value=Y.state.rectAreaLTC2,Se.pointLights.value=Y.state.point,Se.pointLightShadows.value=Y.state.pointShadow,Se.hemisphereLights.value=Y.state.hemi,Se.sunShadowMatrix.value=Y.state.sunShadowMatrix,Se.sunShadowCascade.value=Y.state.sunShadowCascade,Se.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Se.spotLightMatrix.value=Y.state.spotLightMatrix,Se.spotLightMap.value=Y.state.spotLightMap,Se.pointShadowMatrix.value=Y.state.pointShadowMatrix),q.numLightProbeGrids=Jf(w.state.lightProbeGridArray),q.currentProgram=$e,q.uniformsList=null,$e}function Fm(T,O,Z,q,Y){let pe=Ne.get(T),be=pe.currentProgram.id+","+q+","+Y,ue=pe.programVariants.get(be);return ue===void 0?(ue=Br(T,O,Z),pe.programVariants.set(be,ue)):(pe.currentProgram=ue,pe.uniformsList=null,pe.outputColorSpace=q,pe.toneMapping=Y),ue}function Qf(T){if(T.uniformsList===null){let O=T.currentProgram.getUniforms();T.uniformsList=_r.seqWithValue(O.seq,T.uniforms)}return T.uniformsList}function eu(T,O){let Z=Ne.get(T);Z.outputColorSpace=O.outputColorSpace,Z.batching=O.batching,Z.batchingColor=O.batchingColor,Z.instancing=O.instancing,Z.instancingColor=O.instancingColor,Z.instancingMorph=O.instancingMorph,Z.skinning=O.skinning,Z.morphTargets=O.morphTargets,Z.morphNormals=O.morphNormals,Z.morphColors=O.morphColors,Z.morphTargetsCount=O.morphTargetsCount,Z.numClippingPlanes=O.numClippingPlanes,Z.numIntersection=O.numClipIntersection,Z.vertexAlphas=O.vertexAlphas,Z.vertexTangents=O.vertexTangents,Z.toneMapping=O.toneMapping}function Bm(T,O,Z,q,Y){O.isScene!==!0&&(O=Fn),Ue.resetTextureUnits();let pe=O.fog,be=q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial?O.environment:null,ue=W===null?R.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:Xe.workingColorSpace,ye=q.isMeshStandardMaterial||q.isMeshLambertMaterial&&!q.envMap||q.isMeshPhongMaterial&&!q.envMap,Ee=C.get(q.envMap||be,ye),He=q.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,$e=!!Z.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Se=!!Z.morphAttributes.position,je=!!Z.morphAttributes.normal,It=!!Z.morphAttributes.color,dt=_n;q.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(dt=R.toneMapping);let ft=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Qt=ft!==void 0?ft.length:0,we=Ne.get(q),cn=w.state.lights;if(Ft===!0&&(mn===!0||T!==K)){let bt=T===K&&q.id===H;ee.setState(q,T,bt)}let tt=!1,as=!1;q.version===we.__version?we.needsLights&&we.lightsStateVersion!==cn.state.version||Y.isBatchedMesh&&we.batching===!1||!Y.isBatchedMesh&&we.batching===!0||Y.isBatchedMesh&&we.batchingColor===!0&&Y._colorsTexture===null||Y.isBatchedMesh&&we.batchingColor===!1&&Y._colorsTexture!==null||Y.isInstancedMesh&&we.instancing===!1||!Y.isInstancedMesh&&we.instancing===!0||Y.isSkinnedMesh&&we.skinning===!1||!Y.isSkinnedMesh&&we.skinning===!0||Y.isInstancedMesh&&we.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&we.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&we.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&we.instancingMorph===!1&&Y.morphTexture!==null||we.envMap!==Ee||q.fog===!0&&we.fog!==pe||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==ee.numPlanes||we.numIntersection!==ee.numIntersection)||we.vertexAlphas!==He||we.vertexTangents!==$e||we.morphTargets!==Se||we.morphNormals!==je||we.morphColors!==It||we.morphTargetsCount!==Qt||we.numLightProbeGrids!==Jf(w.state.lightProbeGridArray)?tt=!0:(we.outputColorSpace!==ue||we.toneMapping!==dt)&&(as=!0):(tt=!0,we.__version=q.version);let en=we.currentProgram;(tt===!0||as===!0)&&(en=as===!0?Fm(q,O,Y,ue,dt):Br(q,O,Y),B&&q.isNodeMaterial&&B.onUpdateProgram(q,en,we));let Go=!1,Gi=!1,cs=!1,et=en.getUniforms(),$t=we.uniforms;if(me.useProgram(en.program)&&(Go=!0,Gi=!0,cs=!0),q.id!==H&&(H=q.id,Gi=!0),Go||K!==T){me.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),et.setValue(k,"projectionMatrix",T.projectionMatrix),et.setValue(k,"viewMatrix",T.matrixWorldInverse);let Gt=et.map.cameraPosition;Gt!==void 0&&Gt.setValue(k,ni.setFromMatrixPosition(T.matrixWorld)),vt.logarithmicDepthBuffer&&et.setValue(k,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&et.setValue(k,"isOrthographic",T.isOrthographicCamera===!0),K!==T&&(K=T,Gi=!0,cs=!0)}if(we.needsLights&&(cn.state.sunShadowMap.length>0&&et.setValue(k,"sunShadowMap",cn.state.sunShadowMap,Ue),cn.state.directionalShadowMap.length>0&&et.setValue(k,"directionalShadowMap",cn.state.directionalShadowMap,Ue),cn.state.spotShadowMap.length>0&&et.setValue(k,"spotShadowMap",cn.state.spotShadowMap,Ue),cn.state.pointShadowMap.length>0&&et.setValue(k,"pointShadowMap",cn.state.pointShadowMap,Ue)),Y.isSkinnedMesh){et.setOptional(k,Y,"bindMatrix"),et.setOptional(k,Y,"bindMatrixInverse");let bt=Y.skeleton;bt&&(bt.boneTexture===null&&bt.computeBoneTexture(),et.setValue(k,"boneTexture",bt.boneTexture,Ue))}Y.isBatchedMesh&&(et.setOptional(k,Y,"batchingTexture"),et.setValue(k,"batchingTexture",Y._matricesTexture,Ue),et.setOptional(k,Y,"batchingIdTexture"),et.setValue(k,"batchingIdTexture",Y._indirectTexture,Ue),et.setOptional(k,Y,"batchingColorTexture"),Y._colorsTexture!==null&&et.setValue(k,"batchingColorTexture",Y._colorsTexture,Ue));let Kn=Z.morphAttributes;if((Kn.position!==void 0||Kn.normal!==void 0||Kn.color!==void 0)&&te.update(Y,Z,en),(Gi||we.receiveShadow!==Y.receiveShadow)&&(we.receiveShadow=Y.receiveShadow,et.setValue(k,"receiveShadow",Y.receiveShadow)),(q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial)&&q.envMap===null&&O.environment!==null&&($t.envMapIntensity.value=O.environmentIntensity),$t.dfgLUT!==void 0&&($t.dfgLUT.value=R_()),Gi){if(et.setValue(k,"toneMappingExposure",R.toneMappingExposure),we.needsLights&&Dm($t,cs),pe&&q.fog===!0&&ce.refreshFogUniforms($t,pe),ce.refreshMaterialUniforms($t,q,xe,Re,w.state.transmissionRenderTarget[T.id]),we.needsLights&&we.numLightProbeGrids>0){let bt=A,Gt=0;for(let xi of w.state.lightProbeGridArray)xi.texture!==null&&(bt.textures[Gt]=xi.texture,bt.min[Gt]=xi.boundingBox.min,bt.max[Gt]=xi.boundingBox.max,bt.resolution[Gt]=xi.resolution,Gt++);for(let xi in bt)bt[xi].length=Gt;$t.probesSH.value=bt.textures,$t.probesMin.value=bt.min,$t.probesMax.value=bt.max,$t.probesResolution.value=bt.resolution}_r.upload(k,Qf(we),$t,Ue)}if(q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(_r.upload(k,Qf(we),$t,Ue),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&et.setValue(k,"center",Y.center),et.setValue(k,"modelViewMatrix",Y.modelViewMatrix),et.setValue(k,"normalMatrix",Y.normalMatrix),et.setValue(k,"modelMatrix",Y.matrixWorld),q.uniformsGroups!==void 0){let bt=q.uniformsGroups;for(let Gt=0,xi=bt.length;Gt<xi;Gt++){let nu=bt[Gt];Ce.update(nu,en),Ce.bind(nu,en)}}return en}function Dm(T,O){T.ambientLightColor.needsUpdate=O,T.lightProbe.needsUpdate=O,T.sunLights.needsUpdate=O,T.sunLightShadows.needsUpdate=O,T.directionalLights.needsUpdate=O,T.directionalLightShadows.needsUpdate=O,T.pointLights.needsUpdate=O,T.pointLightShadows.needsUpdate=O,T.spotLights.needsUpdate=O,T.spotLightShadows.needsUpdate=O,T.rectAreaLights.needsUpdate=O,T.hemisphereLights.needsUpdate=O}function Um(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(T,O,Z){let q=Ne.get(T);q.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),Ne.get(T.texture).__webglTexture=O,Ne.get(T.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:Z,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,O){let Z=Ne.get(T);Z.__webglFramebuffer=O,Z.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(T,O=0,Z=0){W=T,F=O,G=Z;let q=null,Y=!1,pe=!1;if(T){let ue=Ne.get(T);if(ue.__useDefaultFramebuffer!==void 0){me.bindFramebuffer(k.FRAMEBUFFER,ue.__webglFramebuffer),$.copy(T.viewport),ne.copy(T.scissor),Me=T.scissorTest,me.viewport($),me.scissor(ne),me.setScissorTest(Me),H=-1;return}else if(ue.__webglFramebuffer===void 0)Ue.setupRenderTarget(T);else if(ue.__hasExternalTextures)Ue.rebindTextures(T,Ne.get(T.texture).__webglTexture,Ne.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let He=T.depthTexture;if(ue.__boundDepthTexture!==He){if(He!==null&&Ne.has(He)&&(T.width!==He.image.width||T.height!==He.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ue.setupDepthRenderbuffer(T)}}let ye=T.texture;(ye.isData3DTexture||ye.isDataArrayTexture||ye.isCompressedArrayTexture)&&(pe=!0);let Ee=Ne.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ee[O])?q=Ee[O][Z]:q=Ee[O],Y=!0):T.samples>0&&Ue.useMultisampledRTT(T)===!1?q=Ne.get(T).__webglMultisampledFramebuffer:Array.isArray(Ee)?q=Ee[Z]:q=Ee,$.copy(T.viewport),ne.copy(T.scissor),Me=T.scissorTest}else $.copy(Fe).multiplyScalar(xe).floor(),ne.copy(rt).multiplyScalar(xe).floor(),Me=ht;if(Z!==0&&(q=N),me.bindFramebuffer(k.FRAMEBUFFER,q)&&me.drawBuffers(T,q),me.viewport($),me.scissor(ne),me.setScissorTest(Me),Y){let ue=Ne.get(T.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+O,ue.__webglTexture,Z)}else if(pe){let ue=O;for(let ye=0;ye<T.textures.length;ye++){let Ee=Ne.get(T.textures[ye]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+ye,Ee.__webglTexture,Z,ue)}}else if(T!==null&&Z!==0){let ue=Ne.get(T.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,ue.__webglTexture,Z)}H=-1};function tu(T){let O=Ne.get(T);return(O.__readFormat!==T.format||O.__readType!==T.type)&&(O.__readFormat=T.format,O.__readType=T.type,O.__formatReadable=vt.textureFormatReadable(T.format),O.__typeReadable=vt.textureTypeReadable(T.type)),O}this.readRenderTargetPixels=function(T,O,Z,q,Y,pe,be,ue=0){if(!(T&&T.isWebGLRenderTarget)){Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=Ne.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&be!==void 0&&(ye=ye[be],Array.isArray(ye)&&(ye=ye[0])),ye){me.bindFramebuffer(k.FRAMEBUFFER,ye);try{let Ee=T.textures[ue],He=Ee.format,$e=Ee.type;T.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+ue);let Se=tu(Ee);if(Se.__formatReadable===!1){Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Se.__typeReadable===!1){Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=T.width-q&&Z>=0&&Z<=T.height-Y&&k.readPixels(O,Z,q,Y,oe.convert(He),oe.convert($e),pe)}finally{let Ee=W!==null?Ne.get(W).__webglFramebuffer:null;me.bindFramebuffer(k.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(T,O,Z,q,Y,pe,be,ue=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=Ne.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&be!==void 0&&(ye=ye[be],Array.isArray(ye)&&(ye=ye[0])),ye)if(O>=0&&O<=T.width-q&&Z>=0&&Z<=T.height-Y){me.bindFramebuffer(k.FRAMEBUFFER,ye);let Ee=T.textures[ue],He=Ee.format,$e=Ee.type;T.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+ue);let Se=tu(Ee);if(Se.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Se.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let je=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,je),k.bufferData(k.PIXEL_PACK_BUFFER,pe.byteLength,k.STREAM_READ),k.readPixels(O,Z,q,Y,oe.convert(He),oe.convert($e),0),k.bindBuffer(k.PIXEL_PACK_BUFFER,null);let It=W!==null?Ne.get(W).__webglFramebuffer:null;me.bindFramebuffer(k.FRAMEBUFFER,It);let dt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await Ed(k,dt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,je),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,pe),k.bindBuffer(k.PIXEL_PACK_BUFFER,null),k.deleteBuffer(je),k.deleteSync(dt),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,O=null,Z=0){let q=Math.pow(2,-Z),Y=Math.floor(T.image.width*q),pe=Math.floor(T.image.height*q),be=O!==null?O.x:0,ue=O!==null?O.y:0;Ue.setTexture2D(T,0),k.copyTexSubImage2D(k.TEXTURE_2D,Z,0,0,be,ue,Y,pe),me.unbindTexture()},this.copyTextureToTexture=function(T,O,Z=null,q=null,Y=0,pe=0){let be,ue,ye,Ee,He,$e,Se,je,It,dt=T.isCompressedTexture?T.mipmaps[pe]:T.image;if(Z!==null)be=Z.max.x-Z.min.x,ue=Z.max.y-Z.min.y,ye=Z.isBox3?Z.max.z-Z.min.z:1,Ee=Z.min.x,He=Z.min.y,$e=Z.isBox3?Z.min.z:0;else{let et=Math.pow(2,-Y);be=Math.floor(dt.width*et),ue=Math.floor(dt.height*et),T.isDataArrayTexture?ye=dt.depth:T.isData3DTexture?ye=Math.floor(dt.depth*et):ye=1,Ee=0,He=0,$e=0}q!==null?(Se=q.x,je=q.y,It=q.z):(Se=0,je=0,It=0);let ft=oe.convert(O.format),Qt=oe.convert(O.type),we;O.isData3DTexture?(Ue.setTexture3D(O,0),we=k.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(Ue.setTexture2DArray(O,0),we=k.TEXTURE_2D_ARRAY):(Ue.setTexture2D(O,0),we=k.TEXTURE_2D),me.activeTexture(k.TEXTURE0),me.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,O.flipY),me.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),me.pixelStorei(k.UNPACK_ALIGNMENT,O.unpackAlignment);let cn=me.getParameter(k.UNPACK_ROW_LENGTH),tt=me.getParameter(k.UNPACK_IMAGE_HEIGHT),as=me.getParameter(k.UNPACK_SKIP_PIXELS),en=me.getParameter(k.UNPACK_SKIP_ROWS),Go=me.getParameter(k.UNPACK_SKIP_IMAGES);me.pixelStorei(k.UNPACK_ROW_LENGTH,dt.width),me.pixelStorei(k.UNPACK_IMAGE_HEIGHT,dt.height),me.pixelStorei(k.UNPACK_SKIP_PIXELS,Ee),me.pixelStorei(k.UNPACK_SKIP_ROWS,He),me.pixelStorei(k.UNPACK_SKIP_IMAGES,$e);let Gi=T.isDataArrayTexture||T.isData3DTexture,cs=O.isDataArrayTexture||O.isData3DTexture;if(T.isDepthTexture){let et=Ne.get(T),$t=Ne.get(O),Kn=Ne.get(et.__renderTarget),bt=Ne.get($t.__renderTarget);me.bindFramebuffer(k.READ_FRAMEBUFFER,Kn.__webglFramebuffer),me.bindFramebuffer(k.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let Gt=0;Gt<ye;Gt++)Gi&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ne.get(T).__webglTexture,Y,$e+Gt),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ne.get(O).__webglTexture,pe,It+Gt)),k.blitFramebuffer(Ee,He,Ee+be,He+ue,Se,je,Se+be,je+ue,k.DEPTH_BUFFER_BIT,k.NEAREST);me.bindFramebuffer(k.READ_FRAMEBUFFER,null),me.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(Y!==0||T.isRenderTargetTexture||Ne.has(T)){let et=Ne.get(T),$t=Ne.get(O);me.bindFramebuffer(k.READ_FRAMEBUFFER,L),me.bindFramebuffer(k.DRAW_FRAMEBUFFER,D);for(let Kn=0;Kn<ye;Kn++)Gi?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,et.__webglTexture,Y,$e+Kn):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,et.__webglTexture,Y),cs?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,$t.__webglTexture,pe,It+Kn):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,$t.__webglTexture,pe),Y!==0?k.blitFramebuffer(Ee,He,Ee+be,He+ue,Se,je,Se+be,je+ue,k.COLOR_BUFFER_BIT,k.NEAREST):cs?k.copyTexSubImage3D(we,pe,Se,je,It+Kn,Ee,He,be,ue):k.copyTexSubImage2D(we,pe,Se,je,Ee,He,be,ue);me.bindFramebuffer(k.READ_FRAMEBUFFER,null),me.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else cs?T.isDataTexture||T.isData3DTexture?k.texSubImage3D(we,pe,Se,je,It,be,ue,ye,ft,Qt,dt.data):O.isCompressedArrayTexture?k.compressedTexSubImage3D(we,pe,Se,je,It,be,ue,ye,ft,dt.data):k.texSubImage3D(we,pe,Se,je,It,be,ue,ye,ft,Qt,dt):T.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,pe,Se,je,be,ue,ft,Qt,dt.data):T.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,pe,Se,je,dt.width,dt.height,ft,dt.data):k.texSubImage2D(k.TEXTURE_2D,pe,Se,je,be,ue,ft,Qt,dt);me.pixelStorei(k.UNPACK_ROW_LENGTH,cn),me.pixelStorei(k.UNPACK_IMAGE_HEIGHT,tt),me.pixelStorei(k.UNPACK_SKIP_PIXELS,as),me.pixelStorei(k.UNPACK_SKIP_ROWS,en),me.pixelStorei(k.UNPACK_SKIP_IMAGES,Go),pe===0&&O.generateMipmaps===!0&&O.mipmapsAutoUpdate===!0&&k.generateMipmap(we),me.unbindTexture()},this.initRenderTarget=function(T){Ne.get(T).__webglFramebuffer===void 0&&Ue.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Ue.setTextureCube(T,0):T.isData3DTexture?Ue.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Ue.setTexture2DArray(T,0):Ue.setTexture2D(T,0),me.unbindTexture()},this.resetState=function(){F=0,G=0,W=null,me.reset(),le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Xe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Xe._getUnpackColorSpace()}}});function yA(r,e,t){t.vsub(r,Ps);let n=Ps.dot(e);return e.scale(n,kc),kc.vadd(r,kc),t.distanceTo(kc)}function r3(r,e,t){let n=null,i=r.length;for(let s=0;s!==i;s++){let o=r[s],a=n3;r[(s+1)%i].vsub(o,a);let c=i3;a.cross(e,c);let l=s3;t.vsub(o,l);let h=c.dot(l);if(n===null||h>0&&n===!0||h<=0&&n===!1){n===null&&(n=h>0);continue}else return!1}return!0}function wp(r,e){r.push((e&4294901760)>>16,e&65535)}var ns,L_,E,C_,P_,fp,In,up,dp,qc,Xc,pn,I_,N_,F_,Ae,st,pp,Yc,Yh,Kh,B_,D_,U_,Uo,ts,di,lf,hf,qe,O_,z_,H_,k_,V_,G_,W_,q_,X_,Y_,K_,Z_,$_,j_,Kc,J_,Q_,eA,tA,Hw,Qh,wr,Tp,Ep,Rp,Lp,Cp,Pp,Ip,ff,Wn,mp,Zh,No,$h,nA,iA,Mn,ti,pi,mi,gp,Hc,sA,rA,oA,aA,cA,lA,hA,vp,fA,uA,dA,pA,mA,gA,vA,xA,Ps,kc,Zc,$c,ef,jc,Oo,xp,yp,_p,Ap,Vc,_A,tf,AA,bA,MA,SA,wA,TA,EA,RA,kw,Vw,Gw,Ww,qw,Xw,Yw,Kw,Jc,LA,CA,Tr,Is,Zw,$w,jw,Jw,Qw,eT,tT,nT,iT,sT,rT,oT,aT,cT,lT,hT,fT,uT,dT,pT,mT,gT,vT,xT,yT,_T,AT,bT,MT,ST,Qc,wT,TT,ET,RT,LT,CT,PT,IT,NT,el,tl,Ui,FT,BT,DT,UT,OT,zT,HT,kT,VT,GT,WT,qT,XT,YT,KT,ZT,$T,jT,JT,QT,e1,t1,n1,i1,nf,sf,PA,IA,NA,s1,rf,of,mt,af,Cs,Mr,Sr,FA,BA,DA,UA,OA,zA,HA,kA,VA,GA,WA,qA,XA,YA,KA,ZA,$A,jA,JA,QA,e3,t3,Gc,bp,n3,i3,s3,Wc,o3,a3,c3,l3,h3,f3,u3,d3,p3,m3,g3,v3,x3,y3,_3,A3,b3,M3,S3,w3,T3,E3,R3,L3,C3,P3,I3,N3,Mp,F3,B3,Sp,D3,U3,O3,z3,H3,k3,nl,jh,cf,il,Jh,Ht,V3,G3,Fo,W3,q3,X3,Y3,Oi,zi,Bo,Do,Hi,ki,Np=Dt(()=>{ns=class r{constructor(e){e===void 0&&(e=[0,0,0,0,0,0,0,0,0]),this.elements=e}identity(){let e=this.elements;e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1}setZero(){let e=this.elements;e[0]=0,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=0,e[6]=0,e[7]=0,e[8]=0}setTrace(e){let t=this.elements;t[0]=e.x,t[4]=e.y,t[8]=e.z}getTrace(e){e===void 0&&(e=new E);let t=this.elements;return e.x=t[0],e.y=t[4],e.z=t[8],e}vmult(e,t){t===void 0&&(t=new E);let n=this.elements,i=e.x,s=e.y,o=e.z;return t.x=n[0]*i+n[1]*s+n[2]*o,t.y=n[3]*i+n[4]*s+n[5]*o,t.z=n[6]*i+n[7]*s+n[8]*o,t}smult(e){for(let t=0;t<this.elements.length;t++)this.elements[t]*=e}mmult(e,t){t===void 0&&(t=new r);let n=this.elements,i=e.elements,s=t.elements,o=n[0],a=n[1],c=n[2],l=n[3],h=n[4],u=n[5],f=n[6],d=n[7],p=n[8],v=i[0],m=i[1],g=i[2],x=i[3],M=i[4],A=i[5],S=i[6],w=i[7],y=i[8];return s[0]=o*v+a*x+c*S,s[1]=o*m+a*M+c*w,s[2]=o*g+a*A+c*y,s[3]=l*v+h*x+u*S,s[4]=l*m+h*M+u*w,s[5]=l*g+h*A+u*y,s[6]=f*v+d*x+p*S,s[7]=f*m+d*M+p*w,s[8]=f*g+d*A+p*y,t}scale(e,t){t===void 0&&(t=new r);let n=this.elements,i=t.elements;for(let s=0;s!==3;s++)i[3*s+0]=e.x*n[3*s+0],i[3*s+1]=e.y*n[3*s+1],i[3*s+2]=e.z*n[3*s+2];return t}solve(e,t){t===void 0&&(t=new E);let n=3,i=4,s=[],o,a;for(o=0;o<n*i;o++)s.push(0);for(o=0;o<3;o++)for(a=0;a<3;a++)s[o+i*a]=this.elements[o+3*a];s[3+4*0]=e.x,s[3+4*1]=e.y,s[3+4*2]=e.z;let c=3,l=c,h,u=4,f;do{if(o=l-c,s[o+i*o]===0){for(a=o+1;a<l;a++)if(s[o+i*a]!==0){h=u;do f=u-h,s[f+i*o]+=s[f+i*a];while(--h);break}}if(s[o+i*o]!==0)for(a=o+1;a<l;a++){let d=s[o+i*a]/s[o+i*o];h=u;do f=u-h,s[f+i*a]=f<=o?0:s[f+i*a]-s[f+i*o]*d;while(--h)}}while(--c);if(t.z=s[2*i+3]/s[2*i+2],t.y=(s[1*i+3]-s[1*i+2]*t.z)/s[1*i+1],t.x=(s[0*i+3]-s[0*i+2]*t.z-s[0*i+1]*t.y)/s[0*i+0],isNaN(t.x)||isNaN(t.y)||isNaN(t.z)||t.x===1/0||t.y===1/0||t.z===1/0)throw`Could not solve equation! Got x=[${t.toString()}], b=[${e.toString()}], A=[${this.toString()}]`;return t}e(e,t,n){if(n===void 0)return this.elements[t+3*e];this.elements[t+3*e]=n}copy(e){for(let t=0;t<e.elements.length;t++)this.elements[t]=e.elements[t];return this}toString(){let e="",t=",";for(let n=0;n<9;n++)e+=this.elements[n]+t;return e}reverse(e){e===void 0&&(e=new r);let t=3,n=6,i=L_,s,o;for(s=0;s<3;s++)for(o=0;o<3;o++)i[s+n*o]=this.elements[s+3*o];i[3+6*0]=1,i[3+6*1]=0,i[3+6*2]=0,i[4+6*0]=0,i[4+6*1]=1,i[4+6*2]=0,i[5+6*0]=0,i[5+6*1]=0,i[5+6*2]=1;let a=3,c=a,l,h=n,u;do{if(s=c-a,i[s+n*s]===0){for(o=s+1;o<c;o++)if(i[s+n*o]!==0){l=h;do u=h-l,i[u+n*s]+=i[u+n*o];while(--l);break}}if(i[s+n*s]!==0)for(o=s+1;o<c;o++){let f=i[s+n*o]/i[s+n*s];l=h;do u=h-l,i[u+n*o]=u<=s?0:i[u+n*o]-i[u+n*s]*f;while(--l)}}while(--a);s=2;do{o=s-1;do{let f=i[s+n*o]/i[s+n*s];l=n;do u=n-l,i[u+n*o]=i[u+n*o]-i[u+n*s]*f;while(--l)}while(o--)}while(--s);s=2;do{let f=1/i[s+n*s];l=n;do u=n-l,i[u+n*s]=i[u+n*s]*f;while(--l)}while(s--);s=2;do{o=2;do{if(u=i[t+o+n*s],isNaN(u)||u===1/0)throw`Could not reverse! A=[${this.toString()}]`;e.e(s,o,u)}while(o--)}while(s--);return e}setRotationFromQuaternion(e){let t=e.x,n=e.y,i=e.z,s=e.w,o=t+t,a=n+n,c=i+i,l=t*o,h=t*a,u=t*c,f=n*a,d=n*c,p=i*c,v=s*o,m=s*a,g=s*c,x=this.elements;return x[3*0+0]=1-(f+p),x[3*0+1]=h-g,x[3*0+2]=u+m,x[3*1+0]=h+g,x[3*1+1]=1-(l+p),x[3*1+2]=d-v,x[3*2+0]=u-m,x[3*2+1]=d+v,x[3*2+2]=1-(l+f),this}transpose(e){e===void 0&&(e=new r);let t=this.elements,n=e.elements,i;return n[0]=t[0],n[4]=t[4],n[8]=t[8],i=t[1],n[1]=t[3],n[3]=i,i=t[2],n[2]=t[6],n[6]=i,i=t[5],n[5]=t[7],n[7]=i,e}},L_=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],E=class r{constructor(e,t,n){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0),this.x=e,this.y=t,this.z=n}cross(e,t){t===void 0&&(t=new r);let n=e.x,i=e.y,s=e.z,o=this.x,a=this.y,c=this.z;return t.x=a*s-c*i,t.y=c*n-o*s,t.z=o*i-a*n,t}set(e,t,n){return this.x=e,this.y=t,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(e,t){if(t)t.x=e.x+this.x,t.y=e.y+this.y,t.z=e.z+this.z;else return new r(this.x+e.x,this.y+e.y,this.z+e.z)}vsub(e,t){if(t)t.x=this.x-e.x,t.y=this.y-e.y,t.z=this.z-e.z;else return new r(this.x-e.x,this.y-e.y,this.z-e.z)}crossmat(){return new ns([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){let e=this.x,t=this.y,n=this.z,i=Math.sqrt(e*e+t*t+n*n);if(i>0){let s=1/i;this.x*=s,this.y*=s,this.z*=s}else this.x=0,this.y=0,this.z=0;return i}unit(e){e===void 0&&(e=new r);let t=this.x,n=this.y,i=this.z,s=Math.sqrt(t*t+n*n+i*i);return s>0?(s=1/s,e.x=t*s,e.y=n*s,e.z=i*s):(e.x=1,e.y=0,e.z=0),e}length(){let e=this.x,t=this.y,n=this.z;return Math.sqrt(e*e+t*t+n*n)}lengthSquared(){return this.dot(this)}distanceTo(e){let t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z;return Math.sqrt((s-t)*(s-t)+(o-n)*(o-n)+(a-i)*(a-i))}distanceSquared(e){let t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z;return(s-t)*(s-t)+(o-n)*(o-n)+(a-i)*(a-i)}scale(e,t){t===void 0&&(t=new r);let n=this.x,i=this.y,s=this.z;return t.x=e*n,t.y=e*i,t.z=e*s,t}vmul(e,t){return t===void 0&&(t=new r),t.x=e.x*this.x,t.y=e.y*this.y,t.z=e.z*this.z,t}addScaledVector(e,t,n){return n===void 0&&(n=new r),n.x=this.x+e*t.x,n.y=this.y+e*t.y,n.z=this.z+e*t.z,n}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(e){return e===void 0&&(e=new r),e.x=-this.x,e.y=-this.y,e.z=-this.z,e}tangents(e,t){let n=this.length();if(n>0){let i=C_,s=1/n;i.set(this.x*s,this.y*s,this.z*s);let o=P_;Math.abs(i.x)<.9?(o.set(1,0,0),i.cross(o,e)):(o.set(0,1,0),i.cross(o,e)),i.cross(e,t)}else e.set(1,0,0),t.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}lerp(e,t,n){let i=this.x,s=this.y,o=this.z;n.x=i+(e.x-i)*t,n.y=s+(e.y-s)*t,n.z=o+(e.z-o)*t}almostEquals(e,t){return t===void 0&&(t=1e-6),!(Math.abs(this.x-e.x)>t||Math.abs(this.y-e.y)>t||Math.abs(this.z-e.z)>t)}almostZero(e){return e===void 0&&(e=1e-6),!(Math.abs(this.x)>e||Math.abs(this.y)>e||Math.abs(this.z)>e)}isAntiparallelTo(e,t){return this.negate(fp),fp.almostEquals(e,t)}clone(){return new r(this.x,this.y,this.z)}};E.ZERO=new E(0,0,0);E.UNIT_X=new E(1,0,0);E.UNIT_Y=new E(0,1,0);E.UNIT_Z=new E(0,0,1);C_=new E,P_=new E,fp=new E,In=class r{constructor(e){e===void 0&&(e={}),this.lowerBound=new E,this.upperBound=new E,e.lowerBound&&this.lowerBound.copy(e.lowerBound),e.upperBound&&this.upperBound.copy(e.upperBound)}setFromPoints(e,t,n,i){let s=this.lowerBound,o=this.upperBound,a=n;s.copy(e[0]),a&&a.vmult(s,s),o.copy(s);for(let c=1;c<e.length;c++){let l=e[c];a&&(a.vmult(l,up),l=up),l.x>o.x&&(o.x=l.x),l.x<s.x&&(s.x=l.x),l.y>o.y&&(o.y=l.y),l.y<s.y&&(s.y=l.y),l.z>o.z&&(o.z=l.z),l.z<s.z&&(s.z=l.z)}return t&&(t.vadd(s,s),t.vadd(o,o)),i&&(s.x-=i,s.y-=i,s.z-=i,o.x+=i,o.y+=i,o.z+=i),this}copy(e){return this.lowerBound.copy(e.lowerBound),this.upperBound.copy(e.upperBound),this}clone(){return new r().copy(this)}extend(e){this.lowerBound.x=Math.min(this.lowerBound.x,e.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,e.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,e.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,e.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,e.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,e.upperBound.z)}overlaps(e){let t=this.lowerBound,n=this.upperBound,i=e.lowerBound,s=e.upperBound,o=i.x<=n.x&&n.x<=s.x||t.x<=s.x&&s.x<=n.x,a=i.y<=n.y&&n.y<=s.y||t.y<=s.y&&s.y<=n.y,c=i.z<=n.z&&n.z<=s.z||t.z<=s.z&&s.z<=n.z;return o&&a&&c}volume(){let e=this.lowerBound,t=this.upperBound;return(t.x-e.x)*(t.y-e.y)*(t.z-e.z)}contains(e){let t=this.lowerBound,n=this.upperBound,i=e.lowerBound,s=e.upperBound;return t.x<=i.x&&n.x>=s.x&&t.y<=i.y&&n.y>=s.y&&t.z<=i.z&&n.z>=s.z}getCorners(e,t,n,i,s,o,a,c){let l=this.lowerBound,h=this.upperBound;e.copy(l),t.set(h.x,l.y,l.z),n.set(h.x,h.y,l.z),i.set(l.x,h.y,h.z),s.set(h.x,l.y,h.z),o.set(l.x,h.y,l.z),a.set(l.x,l.y,h.z),c.copy(h)}toLocalFrame(e,t){let n=dp,i=n[0],s=n[1],o=n[2],a=n[3],c=n[4],l=n[5],h=n[6],u=n[7];this.getCorners(i,s,o,a,c,l,h,u);for(let f=0;f!==8;f++){let d=n[f];e.pointToLocal(d,d)}return t.setFromPoints(n)}toWorldFrame(e,t){let n=dp,i=n[0],s=n[1],o=n[2],a=n[3],c=n[4],l=n[5],h=n[6],u=n[7];this.getCorners(i,s,o,a,c,l,h,u);for(let f=0;f!==8;f++){let d=n[f];e.pointToWorld(d,d)}return t.setFromPoints(n)}overlapsRay(e){let{direction:t,from:n}=e,i=1/t.x,s=1/t.y,o=1/t.z,a=(this.lowerBound.x-n.x)*i,c=(this.upperBound.x-n.x)*i,l=(this.lowerBound.y-n.y)*s,h=(this.upperBound.y-n.y)*s,u=(this.lowerBound.z-n.z)*o,f=(this.upperBound.z-n.z)*o,d=Math.max(Math.max(Math.min(a,c),Math.min(l,h)),Math.min(u,f)),p=Math.min(Math.min(Math.max(a,c),Math.max(l,h)),Math.max(u,f));return!(p<0||d>p)}},up=new E,dp=[new E,new E,new E,new E,new E,new E,new E,new E],qc=class{constructor(){this.matrix=[]}get(e,t){let{index:n}=e,{index:i}=t;if(i>n){let s=i;i=n,n=s}return this.matrix[(n*(n+1)>>1)+i-1]}set(e,t,n){let{index:i}=e,{index:s}=t;if(s>i){let o=s;s=i,i=o}this.matrix[(i*(i+1)>>1)+s-1]=n?1:0}reset(){for(let e=0,t=this.matrix.length;e!==t;e++)this.matrix[e]=0}setNumObjects(e){this.matrix.length=e*(e-1)>>1}},Xc=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;return n[e]===void 0&&(n[e]=[]),n[e].includes(t)||n[e].push(t),this}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return!!(n[e]!==void 0&&n[e].includes(t))}hasAnyEventListener(e){return this._listeners===void 0?!1:this._listeners[e]!==void 0}removeEventListener(e,t){if(this._listeners===void 0)return this;let n=this._listeners;if(n[e]===void 0)return this;let i=n[e].indexOf(t);return i!==-1&&n[e].splice(i,1),this}dispatchEvent(e){if(this._listeners===void 0)return this;let n=this._listeners[e.type];if(n!==void 0){e.target=this;for(let i=0,s=n.length;i<s;i++)n[i].call(this,e)}return this}},pn=class r{constructor(e,t,n,i){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0),i===void 0&&(i=1),this.x=e,this.y=t,this.z=n,this.w=i}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(e,t){let n=Math.sin(t*.5);return this.x=e.x*n,this.y=e.y*n,this.z=e.z*n,this.w=Math.cos(t*.5),this}toAxisAngle(e){e===void 0&&(e=new E),this.normalize();let t=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(e.x=this.x,e.y=this.y,e.z=this.z):(e.x=this.x/n,e.y=this.y/n,e.z=this.z/n),[e,t]}setFromVectors(e,t){if(e.isAntiparallelTo(t)){let n=I_,i=N_;e.tangents(n,i),this.setFromAxisAngle(n,Math.PI)}else{let n=e.cross(t);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(e.length()**2*t.length()**2)+e.dot(t),this.normalize()}return this}mult(e,t){t===void 0&&(t=new r);let n=this.x,i=this.y,s=this.z,o=this.w,a=e.x,c=e.y,l=e.z,h=e.w;return t.x=n*h+o*a+i*l-s*c,t.y=i*h+o*c+s*a-n*l,t.z=s*h+o*l+n*c-i*a,t.w=o*h-n*a-i*c-s*l,t}inverse(e){e===void 0&&(e=new r);let t=this.x,n=this.y,i=this.z,s=this.w;this.conjugate(e);let o=1/(t*t+n*n+i*i+s*s);return e.x*=o,e.y*=o,e.z*=o,e.w*=o,e}conjugate(e){return e===void 0&&(e=new r),e.x=-this.x,e.y=-this.y,e.z=-this.z,e.w=this.w,e}normalize(){let e=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(e=1/e,this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}normalizeFast(){let e=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}vmult(e,t){t===void 0&&(t=new E);let n=e.x,i=e.y,s=e.z,o=this.x,a=this.y,c=this.z,l=this.w,h=l*n+a*s-c*i,u=l*i+c*n-o*s,f=l*s+o*i-a*n,d=-o*n-a*i-c*s;return t.x=h*l+d*-o+u*-c-f*-a,t.y=u*l+d*-a+f*-o-h*-c,t.z=f*l+d*-c+h*-a-u*-o,t}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w,this}toEuler(e,t){t===void 0&&(t="YZX");let n,i,s,o=this.x,a=this.y,c=this.z,l=this.w;switch(t){case"YZX":let h=o*a+c*l;if(h>.499&&(n=2*Math.atan2(o,l),i=Math.PI/2,s=0),h<-.499&&(n=-2*Math.atan2(o,l),i=-Math.PI/2,s=0),n===void 0){let u=o*o,f=a*a,d=c*c;n=Math.atan2(2*a*l-2*o*c,1-2*f-2*d),i=Math.asin(2*h),s=Math.atan2(2*o*l-2*a*c,1-2*u-2*d)}break;default:throw new Error(`Euler order ${t} not supported yet.`)}e.y=n,e.z=i,e.x=s}setFromEuler(e,t,n,i){i===void 0&&(i="XYZ");let s=Math.cos(e/2),o=Math.cos(t/2),a=Math.cos(n/2),c=Math.sin(e/2),l=Math.sin(t/2),h=Math.sin(n/2);return i==="XYZ"?(this.x=c*o*a+s*l*h,this.y=s*l*a-c*o*h,this.z=s*o*h+c*l*a,this.w=s*o*a-c*l*h):i==="YXZ"?(this.x=c*o*a+s*l*h,this.y=s*l*a-c*o*h,this.z=s*o*h-c*l*a,this.w=s*o*a+c*l*h):i==="ZXY"?(this.x=c*o*a-s*l*h,this.y=s*l*a+c*o*h,this.z=s*o*h+c*l*a,this.w=s*o*a-c*l*h):i==="ZYX"?(this.x=c*o*a-s*l*h,this.y=s*l*a+c*o*h,this.z=s*o*h-c*l*a,this.w=s*o*a+c*l*h):i==="YZX"?(this.x=c*o*a+s*l*h,this.y=s*l*a+c*o*h,this.z=s*o*h-c*l*a,this.w=s*o*a-c*l*h):i==="XZY"&&(this.x=c*o*a-s*l*h,this.y=s*l*a-c*o*h,this.z=s*o*h+c*l*a,this.w=s*o*a+c*l*h),this}clone(){return new r(this.x,this.y,this.z,this.w)}slerp(e,t,n){n===void 0&&(n=new r);let i=this.x,s=this.y,o=this.z,a=this.w,c=e.x,l=e.y,h=e.z,u=e.w,f,d,p,v,m;return d=i*c+s*l+o*h+a*u,d<0&&(d=-d,c=-c,l=-l,h=-h,u=-u),1-d>1e-6?(f=Math.acos(d),p=Math.sin(f),v=Math.sin((1-t)*f)/p,m=Math.sin(t*f)/p):(v=1-t,m=t),n.x=v*i+m*c,n.y=v*s+m*l,n.z=v*o+m*h,n.w=v*a+m*u,n}integrate(e,t,n,i){i===void 0&&(i=new r);let s=e.x*n.x,o=e.y*n.y,a=e.z*n.z,c=this.x,l=this.y,h=this.z,u=this.w,f=t*.5;return i.x+=f*(s*u+o*h-a*l),i.y+=f*(o*u+a*c-s*h),i.z+=f*(a*u+s*l-o*c),i.w+=f*(-s*c-o*l-a*h),i}},I_=new E,N_=new E,F_={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256},Ae=class r{constructor(e){e===void 0&&(e={}),this.id=r.idCounter++,this.type=e.type||0,this.boundingSphereRadius=0,this.collisionResponse=e.collisionResponse?e.collisionResponse:!0,this.collisionFilterGroup=e.collisionFilterGroup!==void 0?e.collisionFilterGroup:1,this.collisionFilterMask=e.collisionFilterMask!==void 0?e.collisionFilterMask:-1,this.material=e.material?e.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(e,t){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(e,t,n,i){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}};Ae.idCounter=0;Ae.types=F_;st=class r{constructor(e){e===void 0&&(e={}),this.position=new E,this.quaternion=new pn,e.position&&this.position.copy(e.position),e.quaternion&&this.quaternion.copy(e.quaternion)}pointToLocal(e,t){return r.pointToLocalFrame(this.position,this.quaternion,e,t)}pointToWorld(e,t){return r.pointToWorldFrame(this.position,this.quaternion,e,t)}vectorToWorldFrame(e,t){return t===void 0&&(t=new E),this.quaternion.vmult(e,t),t}static pointToLocalFrame(e,t,n,i){return i===void 0&&(i=new E),n.vsub(e,i),t.conjugate(pp),pp.vmult(i,i),i}static pointToWorldFrame(e,t,n,i){return i===void 0&&(i=new E),t.vmult(n,i),i.vadd(e,i),i}static vectorToWorldFrame(e,t,n){return n===void 0&&(n=new E),e.vmult(t,n),n}static vectorToLocalFrame(e,t,n,i){return i===void 0&&(i=new E),t.w*=-1,t.vmult(n,i),t.w*=-1,i}},pp=new pn,Yc=class r extends Ae{constructor(e){e===void 0&&(e={});let{vertices:t=[],faces:n=[],normals:i=[],axes:s,boundingSphereRadius:o}=e;super({type:Ae.types.CONVEXPOLYHEDRON}),this.vertices=t,this.faces=n,this.faceNormals=i,this.faceNormals.length===0&&this.computeNormals(),o?this.boundingSphereRadius=o:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=s?s.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){let e=this.faces,t=this.vertices,n=this.uniqueEdges;n.length=0;let i=new E;for(let s=0;s!==e.length;s++){let o=e[s],a=o.length;for(let c=0;c!==a;c++){let l=(c+1)%a;t[o[c]].vsub(t[o[l]],i),i.normalize();let h=!1;for(let u=0;u!==n.length;u++)if(n[u].almostEquals(i)||n[u].almostEquals(i)){h=!0;break}h||n.push(i.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let e=0;e<this.faces.length;e++){for(let i=0;i<this.faces[e].length;i++)if(!this.vertices[this.faces[e][i]])throw new Error(`Vertex ${this.faces[e][i]} not found!`);let t=this.faceNormals[e]||new E;this.getFaceNormal(e,t),t.negate(t),this.faceNormals[e]=t;let n=this.vertices[this.faces[e][0]];if(t.dot(n)<0){console.error(`.faceNormals[${e}] = Vec3(${t.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let i=0;i<this.faces[e].length;i++)console.warn(`.vertices[${this.faces[e][i]}] = Vec3(${this.vertices[this.faces[e][i]].toString()})`)}}}getFaceNormal(e,t){let n=this.faces[e],i=this.vertices[n[0]],s=this.vertices[n[1]],o=this.vertices[n[2]];r.computeNormal(i,s,o,t)}static computeNormal(e,t,n,i){let s=new E,o=new E;t.vsub(e,o),n.vsub(t,s),s.cross(o,i),i.isZero()||i.normalize()}clipAgainstHull(e,t,n,i,s,o,a,c,l){let h=new E,u=-1,f=-Number.MAX_VALUE;for(let p=0;p<n.faces.length;p++){h.copy(n.faceNormals[p]),s.vmult(h,h);let v=h.dot(o);v>f&&(f=v,u=p)}let d=[];for(let p=0;p<n.faces[u].length;p++){let v=n.vertices[n.faces[u][p]],m=new E;m.copy(v),s.vmult(m,m),i.vadd(m,m),d.push(m)}u>=0&&this.clipFaceAgainstHull(o,e,t,d,a,c,l)}findSeparatingAxis(e,t,n,i,s,o,a,c){let l=new E,h=new E,u=new E,f=new E,d=new E,p=new E,v=Number.MAX_VALUE,m=this;if(m.uniqueAxes)for(let g=0;g!==m.uniqueAxes.length;g++){n.vmult(m.uniqueAxes[g],l);let x=m.testSepAxis(l,e,t,n,i,s);if(x===!1)return!1;x<v&&(v=x,o.copy(l))}else{let g=a?a.length:m.faces.length;for(let x=0;x<g;x++){let M=a?a[x]:x;l.copy(m.faceNormals[M]),n.vmult(l,l);let A=m.testSepAxis(l,e,t,n,i,s);if(A===!1)return!1;A<v&&(v=A,o.copy(l))}}if(e.uniqueAxes)for(let g=0;g!==e.uniqueAxes.length;g++){s.vmult(e.uniqueAxes[g],h);let x=m.testSepAxis(h,e,t,n,i,s);if(x===!1)return!1;x<v&&(v=x,o.copy(h))}else{let g=c?c.length:e.faces.length;for(let x=0;x<g;x++){let M=c?c[x]:x;h.copy(e.faceNormals[M]),s.vmult(h,h);let A=m.testSepAxis(h,e,t,n,i,s);if(A===!1)return!1;A<v&&(v=A,o.copy(h))}}for(let g=0;g!==m.uniqueEdges.length;g++){n.vmult(m.uniqueEdges[g],f);for(let x=0;x!==e.uniqueEdges.length;x++)if(s.vmult(e.uniqueEdges[x],d),f.cross(d,p),!p.almostZero()){p.normalize();let M=m.testSepAxis(p,e,t,n,i,s);if(M===!1)return!1;M<v&&(v=M,o.copy(p))}}return i.vsub(t,u),u.dot(o)>0&&o.negate(o),!0}testSepAxis(e,t,n,i,s,o){let a=this;r.project(a,e,n,i,Yh),r.project(t,e,s,o,Kh);let c=Yh[0],l=Yh[1],h=Kh[0],u=Kh[1];if(c<u||h<l)return!1;let f=c-u,d=h-l;return f<d?f:d}calculateLocalInertia(e,t){let n=new E,i=new E;this.computeLocalAABB(i,n);let s=n.x-i.x,o=n.y-i.y,a=n.z-i.z;t.x=1/12*e*(2*o*2*o+2*a*2*a),t.y=1/12*e*(2*s*2*s+2*a*2*a),t.z=1/12*e*(2*o*2*o+2*s*2*s)}getPlaneConstantOfFace(e){let t=this.faces[e],n=this.faceNormals[e],i=this.vertices[t[0]];return-n.dot(i)}clipFaceAgainstHull(e,t,n,i,s,o,a){let c=new E,l=new E,h=new E,u=new E,f=new E,d=new E,p=new E,v=new E,m=this,g=[],x=i,M=g,A=-1,S=Number.MAX_VALUE;for(let R=0;R<m.faces.length;R++){c.copy(m.faceNormals[R]),n.vmult(c,c);let I=c.dot(e);I<S&&(S=I,A=R)}if(A<0)return;let w=m.faces[A];w.connectedFaces=[];for(let R=0;R<m.faces.length;R++)for(let I=0;I<m.faces[R].length;I++)w.indexOf(m.faces[R][I])!==-1&&R!==A&&w.connectedFaces.indexOf(R)===-1&&w.connectedFaces.push(R);let y=w.length;for(let R=0;R<y;R++){let I=m.vertices[w[R]],B=m.vertices[w[(R+1)%y]];I.vsub(B,l),h.copy(l),n.vmult(h,h),t.vadd(h,h),u.copy(this.faceNormals[A]),n.vmult(u,u),t.vadd(u,u),h.cross(u,f),f.negate(f),d.copy(I),n.vmult(d,d),t.vadd(d,d);let N=w.connectedFaces[R];p.copy(this.faceNormals[N]);let L=this.getPlaneConstantOfFace(N);v.copy(p),n.vmult(v,v);let D=L-v.dot(t);for(this.clipFaceAgainstPlane(x,M,v,D);x.length;)x.shift();for(;M.length;)x.push(M.shift())}p.copy(this.faceNormals[A]);let _=this.getPlaneConstantOfFace(A);v.copy(p),n.vmult(v,v);let P=_-v.dot(t);for(let R=0;R<x.length;R++){let I=v.dot(x[R])+P;if(I<=s&&(console.log(`clamped: depth=${I} to minDist=${s}`),I=s),I<=o){let B=x[R];if(I<=1e-6){let N={point:B,normal:v,depth:I};a.push(N)}}}}clipFaceAgainstPlane(e,t,n,i){let s,o,a=e.length;if(a<2)return t;let c=e[e.length-1],l=e[0];s=n.dot(c)+i;for(let h=0;h<a;h++){if(l=e[h],o=n.dot(l)+i,s<0)if(o<0){let u=new E;u.copy(l),t.push(u)}else{let u=new E;c.lerp(l,s/(s-o),u),t.push(u)}else if(o<0){let u=new E;c.lerp(l,s/(s-o),u),t.push(u),t.push(l)}c=l,s=o}return t}computeWorldVertices(e,t){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new E);let n=this.vertices,i=this.worldVertices;for(let s=0;s!==this.vertices.length;s++)t.vmult(n[s],i[s]),e.vadd(i[s],i[s]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(e,t){let n=this.vertices;e.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),t.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let i=0;i<this.vertices.length;i++){let s=n[i];s.x<e.x?e.x=s.x:s.x>t.x&&(t.x=s.x),s.y<e.y?e.y=s.y:s.y>t.y&&(t.y=s.y),s.z<e.z?e.z=s.z:s.z>t.z&&(t.z=s.z)}}computeWorldFaceNormals(e){let t=this.faceNormals.length;for(;this.worldFaceNormals.length<t;)this.worldFaceNormals.push(new E);let n=this.faceNormals,i=this.worldFaceNormals;for(let s=0;s!==t;s++)e.vmult(n[s],i[s]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let e=0,t=this.vertices;for(let n=0;n!==t.length;n++){let i=t[n].lengthSquared();i>e&&(e=i)}this.boundingSphereRadius=Math.sqrt(e)}calculateWorldAABB(e,t,n,i){let s=this.vertices,o,a,c,l,h,u,f=new E;for(let d=0;d<s.length;d++){f.copy(s[d]),t.vmult(f,f),e.vadd(f,f);let p=f;(o===void 0||p.x<o)&&(o=p.x),(l===void 0||p.x>l)&&(l=p.x),(a===void 0||p.y<a)&&(a=p.y),(h===void 0||p.y>h)&&(h=p.y),(c===void 0||p.z<c)&&(c=p.z),(u===void 0||p.z>u)&&(u=p.z)}n.set(o,a,c),i.set(l,h,u)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(e){e===void 0&&(e=new E);let t=this.vertices;for(let n=0;n<t.length;n++)e.vadd(t[n],e);return e.scale(1/t.length,e),e}transformAllPoints(e,t){let n=this.vertices.length,i=this.vertices;if(t){for(let s=0;s<n;s++){let o=i[s];t.vmult(o,o)}for(let s=0;s<this.faceNormals.length;s++){let o=this.faceNormals[s];t.vmult(o,o)}}if(e)for(let s=0;s<n;s++){let o=i[s];o.vadd(e,o)}}pointIsInside(e){let t=this.vertices,n=this.faces,i=this.faceNormals,s=null,o=new E;this.getAveragePointLocal(o);for(let a=0;a<this.faces.length;a++){let c=i[a],l=t[n[a][0]],h=new E;e.vsub(l,h);let u=c.dot(h),f=new E;o.vsub(l,f);let d=c.dot(f);if(u<0&&d>0||u>0&&d<0)return!1}return s?1:-1}static project(e,t,n,i,s){let o=e.vertices.length,a=D_,c=0,l=0,h=U_,u=e.vertices;h.setZero(),st.vectorToLocalFrame(n,i,t,a),st.pointToLocalFrame(n,i,h,h);let f=h.dot(a);l=c=u[0].dot(a);for(let d=1;d<o;d++){let p=u[d].dot(a);p>c&&(c=p),p<l&&(l=p)}if(l-=f,c-=f,l>c){let d=l;l=c,c=d}s[0]=c,s[1]=l}},Yh=[],Kh=[],B_=new E,D_=new E,U_=new E,Uo=class r extends Ae{constructor(e){super({type:Ae.types.BOX}),this.halfExtents=e,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){let e=this.halfExtents.x,t=this.halfExtents.y,n=this.halfExtents.z,i=E,s=[new i(-e,-t,-n),new i(e,-t,-n),new i(e,t,-n),new i(-e,t,-n),new i(-e,-t,n),new i(e,-t,n),new i(e,t,n),new i(-e,t,n)],o=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],a=[new i(0,0,1),new i(0,1,0),new i(1,0,0)],c=new Yc({vertices:s,faces:o,axes:a});this.convexPolyhedronRepresentation=c,c.material=this.material}calculateLocalInertia(e,t){return t===void 0&&(t=new E),r.calculateInertia(this.halfExtents,e,t),t}static calculateInertia(e,t,n){let i=e;n.x=1/12*t*(2*i.y*2*i.y+2*i.z*2*i.z),n.y=1/12*t*(2*i.x*2*i.x+2*i.z*2*i.z),n.z=1/12*t*(2*i.y*2*i.y+2*i.x*2*i.x)}getSideNormals(e,t){let n=e,i=this.halfExtents;if(n[0].set(i.x,0,0),n[1].set(0,i.y,0),n[2].set(0,0,i.z),n[3].set(-i.x,0,0),n[4].set(0,-i.y,0),n[5].set(0,0,-i.z),t!==void 0)for(let s=0;s!==n.length;s++)t.vmult(n[s],n[s]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(e,t,n){let i=this.halfExtents,s=[[i.x,i.y,i.z],[-i.x,i.y,i.z],[-i.x,-i.y,i.z],[-i.x,-i.y,-i.z],[i.x,-i.y,-i.z],[i.x,i.y,-i.z],[-i.x,i.y,-i.z],[i.x,-i.y,i.z]];for(let o=0;o<s.length;o++)ts.set(s[o][0],s[o][1],s[o][2]),t.vmult(ts,ts),e.vadd(ts,ts),n(ts.x,ts.y,ts.z)}calculateWorldAABB(e,t,n,i){let s=this.halfExtents;di[0].set(s.x,s.y,s.z),di[1].set(-s.x,s.y,s.z),di[2].set(-s.x,-s.y,s.z),di[3].set(-s.x,-s.y,-s.z),di[4].set(s.x,-s.y,-s.z),di[5].set(s.x,s.y,-s.z),di[6].set(-s.x,s.y,-s.z),di[7].set(s.x,-s.y,s.z);let o=di[0];t.vmult(o,o),e.vadd(o,o),i.copy(o),n.copy(o);for(let a=1;a<8;a++){let c=di[a];t.vmult(c,c),e.vadd(c,c);let l=c.x,h=c.y,u=c.z;l>i.x&&(i.x=l),h>i.y&&(i.y=h),u>i.z&&(i.z=u),l<n.x&&(n.x=l),h<n.y&&(n.y=h),u<n.z&&(n.z=u)}}},ts=new E,di=[new E,new E,new E,new E,new E,new E,new E,new E],lf={DYNAMIC:1,STATIC:2,KINEMATIC:4},hf={AWAKE:0,SLEEPY:1,SLEEPING:2},qe=class r extends Xc{constructor(e){e===void 0&&(e={}),super(),this.id=r.idCounter++,this.index=-1,this.world=null,this.vlambda=new E,this.collisionFilterGroup=typeof e.collisionFilterGroup=="number"?e.collisionFilterGroup:1,this.collisionFilterMask=typeof e.collisionFilterMask=="number"?e.collisionFilterMask:-1,this.collisionResponse=typeof e.collisionResponse=="boolean"?e.collisionResponse:!0,this.position=new E,this.previousPosition=new E,this.interpolatedPosition=new E,this.initPosition=new E,e.position&&(this.position.copy(e.position),this.previousPosition.copy(e.position),this.interpolatedPosition.copy(e.position),this.initPosition.copy(e.position)),this.velocity=new E,e.velocity&&this.velocity.copy(e.velocity),this.initVelocity=new E,this.force=new E;let t=typeof e.mass=="number"?e.mass:0;this.mass=t,this.invMass=t>0?1/t:0,this.material=e.material||null,this.linearDamping=typeof e.linearDamping=="number"?e.linearDamping:.01,this.type=t<=0?r.STATIC:r.DYNAMIC,typeof e.type==typeof r.STATIC&&(this.type=e.type),this.allowSleep=typeof e.allowSleep<"u"?e.allowSleep:!0,this.sleepState=r.AWAKE,this.sleepSpeedLimit=typeof e.sleepSpeedLimit<"u"?e.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof e.sleepTimeLimit<"u"?e.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new E,this.quaternion=new pn,this.initQuaternion=new pn,this.previousQuaternion=new pn,this.interpolatedQuaternion=new pn,e.quaternion&&(this.quaternion.copy(e.quaternion),this.initQuaternion.copy(e.quaternion),this.previousQuaternion.copy(e.quaternion),this.interpolatedQuaternion.copy(e.quaternion)),this.angularVelocity=new E,e.angularVelocity&&this.angularVelocity.copy(e.angularVelocity),this.initAngularVelocity=new E,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new E,this.invInertia=new E,this.invInertiaWorld=new ns,this.invMassSolve=0,this.invInertiaSolve=new E,this.invInertiaWorldSolve=new ns,this.fixedRotation=typeof e.fixedRotation<"u"?e.fixedRotation:!1,this.angularDamping=typeof e.angularDamping<"u"?e.angularDamping:.01,this.linearFactor=new E(1,1,1),e.linearFactor&&this.linearFactor.copy(e.linearFactor),this.angularFactor=new E(1,1,1),e.angularFactor&&this.angularFactor.copy(e.angularFactor),this.aabb=new In,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new E,this.isTrigger=!!e.isTrigger,e.shape&&this.addShape(e.shape),this.updateMassProperties()}wakeUp(){let e=this.sleepState;this.sleepState=r.AWAKE,this.wakeUpAfterNarrowphase=!1,e===r.SLEEPING&&this.dispatchEvent(r.wakeupEvent)}sleep(){this.sleepState=r.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(e){if(this.allowSleep){let t=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),i=this.sleepSpeedLimit**2;t===r.AWAKE&&n<i?(this.sleepState=r.SLEEPY,this.timeLastSleepy=e,this.dispatchEvent(r.sleepyEvent)):t===r.SLEEPY&&n>i?this.wakeUp():t===r.SLEEPY&&e-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(r.sleepEvent))}}updateSolveMassProperties(){this.sleepState===r.SLEEPING||this.type===r.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(e,t){return t===void 0&&(t=new E),e.vsub(this.position,t),this.quaternion.conjugate().vmult(t,t),t}vectorToLocalFrame(e,t){return t===void 0&&(t=new E),this.quaternion.conjugate().vmult(e,t),t}pointToWorldFrame(e,t){return t===void 0&&(t=new E),this.quaternion.vmult(e,t),t.vadd(this.position,t),t}vectorToWorldFrame(e,t){return t===void 0&&(t=new E),this.quaternion.vmult(e,t),t}addShape(e,t,n){let i=new E,s=new pn;return t&&i.copy(t),n&&s.copy(n),this.shapes.push(e),this.shapeOffsets.push(i),this.shapeOrientations.push(s),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=this,this}removeShape(e){let t=this.shapes.indexOf(e);return t===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(t,1),this.shapeOffsets.splice(t,1),this.shapeOrientations.splice(t,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=null,this)}updateBoundingRadius(){let e=this.shapes,t=this.shapeOffsets,n=e.length,i=0;for(let s=0;s!==n;s++){let o=e[s];o.updateBoundingSphereRadius();let a=t[s].length(),c=o.boundingSphereRadius;a+c>i&&(i=a+c)}this.boundingRadius=i}updateAABB(){let e=this.shapes,t=this.shapeOffsets,n=this.shapeOrientations,i=e.length,s=O_,o=z_,a=this.quaternion,c=this.aabb,l=H_;for(let h=0;h!==i;h++){let u=e[h];a.vmult(t[h],s),s.vadd(this.position,s),a.mult(n[h],o),u.calculateWorldAABB(s,o,l.lowerBound,l.upperBound),h===0?c.copy(l):c.extend(l)}this.aabbNeedsUpdate=!1}updateInertiaWorld(e){let t=this.invInertia;if(!(t.x===t.y&&t.y===t.z&&!e)){let n=k_,i=V_;n.setRotationFromQuaternion(this.quaternion),n.transpose(i),n.scale(t,n),n.mmult(i,this.invInertiaWorld)}}applyForce(e,t){if(t===void 0&&(t=new E),this.type!==r.DYNAMIC)return;this.sleepState===r.SLEEPING&&this.wakeUp();let n=W_;t.cross(e,n),this.force.vadd(e,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(e,t){if(t===void 0&&(t=new E),this.type!==r.DYNAMIC)return;let n=q_,i=X_;this.vectorToWorldFrame(e,n),this.vectorToWorldFrame(t,i),this.applyForce(n,i)}applyTorque(e){this.type===r.DYNAMIC&&(this.sleepState===r.SLEEPING&&this.wakeUp(),this.torque.vadd(e,this.torque))}applyImpulse(e,t){if(t===void 0&&(t=new E),this.type!==r.DYNAMIC)return;this.sleepState===r.SLEEPING&&this.wakeUp();let n=t,i=Y_;i.copy(e),i.scale(this.invMass,i),this.velocity.vadd(i,this.velocity);let s=K_;n.cross(e,s),this.invInertiaWorld.vmult(s,s),this.angularVelocity.vadd(s,this.angularVelocity)}applyLocalImpulse(e,t){if(t===void 0&&(t=new E),this.type!==r.DYNAMIC)return;let n=Z_,i=$_;this.vectorToWorldFrame(e,n),this.vectorToWorldFrame(t,i),this.applyImpulse(n,i)}updateMassProperties(){let e=j_;this.invMass=this.mass>0?1/this.mass:0;let t=this.inertia,n=this.fixedRotation;this.updateAABB(),e.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),Uo.calculateInertia(e,this.mass,t),this.invInertia.set(t.x>0&&!n?1/t.x:0,t.y>0&&!n?1/t.y:0,t.z>0&&!n?1/t.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(e,t){let n=new E;return e.vsub(this.position,n),this.angularVelocity.cross(n,t),this.velocity.vadd(t,t),t}integrate(e,t,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===r.DYNAMIC||this.type===r.KINEMATIC)||this.sleepState===r.SLEEPING)return;let i=this.velocity,s=this.angularVelocity,o=this.position,a=this.force,c=this.torque,l=this.quaternion,h=this.invMass,u=this.invInertiaWorld,f=this.linearFactor,d=h*e;i.x+=a.x*d*f.x,i.y+=a.y*d*f.y,i.z+=a.z*d*f.z;let p=u.elements,v=this.angularFactor,m=c.x*v.x,g=c.y*v.y,x=c.z*v.z;s.x+=e*(p[0]*m+p[1]*g+p[2]*x),s.y+=e*(p[3]*m+p[4]*g+p[5]*x),s.z+=e*(p[6]*m+p[7]*g+p[8]*x),o.x+=i.x*e,o.y+=i.y*e,o.z+=i.z*e,l.integrate(this.angularVelocity,e,this.angularFactor,l),t&&(n?l.normalizeFast():l.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}};qe.idCounter=0;qe.COLLIDE_EVENT_NAME="collide";qe.DYNAMIC=lf.DYNAMIC;qe.STATIC=lf.STATIC;qe.KINEMATIC=lf.KINEMATIC;qe.AWAKE=hf.AWAKE;qe.SLEEPY=hf.SLEEPY;qe.SLEEPING=hf.SLEEPING;qe.wakeupEvent={type:"wakeup"};qe.sleepyEvent={type:"sleepy"};qe.sleepEvent={type:"sleep"};O_=new E,z_=new pn,H_=new In,k_=new ns,V_=new ns,G_=new ns,W_=new E,q_=new E,X_=new E,Y_=new E,K_=new E,Z_=new E,$_=new E,j_=new E,Kc=class{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(e,t,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(e,t){return!((e.collisionFilterGroup&t.collisionFilterMask)===0||(t.collisionFilterGroup&e.collisionFilterMask)===0||((e.type&qe.STATIC)!==0||e.sleepState===qe.SLEEPING)&&((t.type&qe.STATIC)!==0||t.sleepState===qe.SLEEPING))}intersectionTest(e,t,n,i){this.useBoundingBoxes?this.doBoundingBoxBroadphase(e,t,n,i):this.doBoundingSphereBroadphase(e,t,n,i)}doBoundingSphereBroadphase(e,t,n,i){let s=J_;t.position.vsub(e.position,s);let o=(e.boundingRadius+t.boundingRadius)**2;s.lengthSquared()<o&&(n.push(e),i.push(t))}doBoundingBoxBroadphase(e,t,n,i){e.aabbNeedsUpdate&&e.updateAABB(),t.aabbNeedsUpdate&&t.updateAABB(),e.aabb.overlaps(t.aabb)&&(n.push(e),i.push(t))}makePairsUnique(e,t){let n=Q_,i=eA,s=tA,o=e.length;for(let a=0;a!==o;a++)i[a]=e[a],s[a]=t[a];e.length=0,t.length=0;for(let a=0;a!==o;a++){let c=i[a].id,l=s[a].id,h=c<l?`${c},${l}`:`${l},${c}`;n[h]=a,n.keys.push(h)}for(let a=0;a!==n.keys.length;a++){let c=n.keys.pop(),l=n[c];e.push(i[l]),t.push(s[l]),delete n[c]}}setWorld(e){}static boundingSphereCheck(e,t){let n=new E;e.position.vsub(t.position,n);let i=e.shapes[0],s=t.shapes[0];return Math.pow(i.boundingSphereRadius+s.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(e,t,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}},J_=new E;new E;new pn;new E;Q_={keys:[]},eA=[],tA=[];new E;Hw=new E;new E;Qh=class extends Kc{constructor(){super()}collisionPairs(e,t,n){let i=e.bodies,s=i.length,o,a;for(let c=0;c!==s;c++)for(let l=0;l!==c;l++)o=i[c],a=i[l],this.needBroadphaseCollision(o,a)&&this.intersectionTest(o,a,t,n)}aabbQuery(e,t,n){n===void 0&&(n=[]);for(let i=0;i<e.bodies.length;i++){let s=e.bodies[i];s.aabbNeedsUpdate&&s.updateAABB(),s.aabb.overlaps(t)&&n.push(s)}return n}},wr=class{constructor(){this.rayFromWorld=new E,this.rayToWorld=new E,this.hitNormalWorld=new E,this.hitPointWorld=new E,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(e,t,n,i,s,o,a){this.rayFromWorld.copy(e),this.rayToWorld.copy(t),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(i),this.shape=s,this.body=o,this.distance=a}},ff={CLOSEST:1,ANY:2,ALL:4};Tp=Ae.types.SPHERE;Ep=Ae.types.PLANE;Rp=Ae.types.BOX;Lp=Ae.types.CYLINDER;Cp=Ae.types.CONVEXPOLYHEDRON;Pp=Ae.types.HEIGHTFIELD;Ip=Ae.types.TRIMESH;Wn=class r{get[Tp](){return this._intersectSphere}get[Ep](){return this._intersectPlane}get[Rp](){return this._intersectBox}get[Lp](){return this._intersectConvex}get[Cp](){return this._intersectConvex}get[Pp](){return this._intersectHeightfield}get[Ip](){return this._intersectTrimesh}constructor(e,t){e===void 0&&(e=new E),t===void 0&&(t=new E),this.from=e.clone(),this.to=t.clone(),this.direction=new E,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=r.ANY,this.result=new wr,this.hasHit=!1,this.callback=n=>{}}intersectWorld(e,t){return this.mode=t.mode||r.ANY,this.result=t.result||new wr,this.skipBackfaces=!!t.skipBackfaces,this.collisionFilterMask=typeof t.collisionFilterMask<"u"?t.collisionFilterMask:-1,this.collisionFilterGroup=typeof t.collisionFilterGroup<"u"?t.collisionFilterGroup:-1,this.checkCollisionResponse=typeof t.checkCollisionResponse<"u"?t.checkCollisionResponse:!0,t.from&&this.from.copy(t.from),t.to&&this.to.copy(t.to),this.callback=t.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(mp),Zh.length=0,e.broadphase.aabbQuery(e,mp,Zh),this.intersectBodies(Zh),this.hasHit}intersectBody(e,t){t&&(this.result=t,this.updateDirection());let n=this.checkCollisionResponse;if(n&&!e.collisionResponse||(this.collisionFilterGroup&e.collisionFilterMask)===0||(e.collisionFilterGroup&this.collisionFilterMask)===0)return;let i=nA,s=iA;for(let o=0,a=e.shapes.length;o<a;o++){let c=e.shapes[o];if(!(n&&!c.collisionResponse)&&(e.quaternion.mult(e.shapeOrientations[o],s),e.quaternion.vmult(e.shapeOffsets[o],i),i.vadd(e.position,i),this.intersectShape(c,s,i,e),this.result.shouldStop))break}}intersectBodies(e,t){t&&(this.result=t,this.updateDirection());for(let n=0,i=e.length;!this.result.shouldStop&&n<i;n++)this.intersectBody(e[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(e,t,n,i){let s=this.from;if(yA(s,this.direction,n)>e.boundingSphereRadius)return;let a=this[e.type];a&&a.call(this,e,t,n,i,e)}_intersectBox(e,t,n,i,s){return this._intersectConvex(e.convexPolyhedronRepresentation,t,n,i,s)}_intersectPlane(e,t,n,i,s){let o=this.from,a=this.to,c=this.direction,l=new E(0,0,1);t.vmult(l,l);let h=new E;o.vsub(n,h);let u=h.dot(l);a.vsub(n,h);let f=h.dot(l);if(u*f>0||o.distanceTo(a)<u)return;let d=l.dot(c);if(Math.abs(d)<this.precision)return;let p=new E,v=new E,m=new E;o.vsub(n,p);let g=-l.dot(p)/d;c.scale(g,v),o.vadd(v,m),this.reportIntersection(l,m,s,i,-1)}getAABB(e){let{lowerBound:t,upperBound:n}=e,i=this.to,s=this.from;t.x=Math.min(i.x,s.x),t.y=Math.min(i.y,s.y),t.z=Math.min(i.z,s.z),n.x=Math.max(i.x,s.x),n.y=Math.max(i.y,s.y),n.z=Math.max(i.z,s.z)}_intersectHeightfield(e,t,n,i,s){e.data,e.elementSize;let o=sA;o.from.copy(this.from),o.to.copy(this.to),st.pointToLocalFrame(n,t,o.from,o.from),st.pointToLocalFrame(n,t,o.to,o.to),o.updateDirection();let a=rA,c,l,h,u;c=l=0,h=u=e.data.length-1;let f=new In;o.getAABB(f),e.getIndexOfPosition(f.lowerBound.x,f.lowerBound.y,a,!0),c=Math.max(c,a[0]),l=Math.max(l,a[1]),e.getIndexOfPosition(f.upperBound.x,f.upperBound.y,a,!0),h=Math.min(h,a[0]+1),u=Math.min(u,a[1]+1);for(let d=c;d<h;d++)for(let p=l;p<u;p++){if(this.result.shouldStop)return;if(e.getAabbAtIndex(d,p,f),!!f.overlapsRay(o)){if(e.getConvexTrianglePillar(d,p,!1),st.pointToWorldFrame(n,t,e.pillarOffset,Hc),this._intersectConvex(e.pillarConvex,t,Hc,i,s,gp),this.result.shouldStop)return;e.getConvexTrianglePillar(d,p,!0),st.pointToWorldFrame(n,t,e.pillarOffset,Hc),this._intersectConvex(e.pillarConvex,t,Hc,i,s,gp)}}}_intersectSphere(e,t,n,i,s){let o=this.from,a=this.to,c=e.radius,l=(a.x-o.x)**2+(a.y-o.y)**2+(a.z-o.z)**2,h=2*((a.x-o.x)*(o.x-n.x)+(a.y-o.y)*(o.y-n.y)+(a.z-o.z)*(o.z-n.z)),u=(o.x-n.x)**2+(o.y-n.y)**2+(o.z-n.z)**2-c**2,f=h**2-4*l*u,d=oA,p=aA;if(!(f<0))if(f===0)o.lerp(a,f,d),d.vsub(n,p),p.normalize(),this.reportIntersection(p,d,s,i,-1);else{let v=(-h-Math.sqrt(f))/(2*l),m=(-h+Math.sqrt(f))/(2*l);if(v>=0&&v<=1&&(o.lerp(a,v,d),d.vsub(n,p),p.normalize(),this.reportIntersection(p,d,s,i,-1)),this.result.shouldStop)return;m>=0&&m<=1&&(o.lerp(a,m,d),d.vsub(n,p),p.normalize(),this.reportIntersection(p,d,s,i,-1))}}_intersectConvex(e,t,n,i,s,o){let a=cA,c=vp,l=o&&o.faceList||null,h=e.faces,u=e.vertices,f=e.faceNormals,d=this.direction,p=this.from,v=this.to,m=p.distanceTo(v),g=l?l.length:h.length,x=this.result;for(let M=0;!x.shouldStop&&M<g;M++){let A=l?l[M]:M,S=h[A],w=f[A],y=t,_=n;c.copy(u[S[0]]),y.vmult(c,c),c.vadd(_,c),c.vsub(p,c),y.vmult(w,a);let P=d.dot(a);if(Math.abs(P)<this.precision)continue;let R=a.dot(c)/P;if(!(R<0)){d.scale(R,Mn),Mn.vadd(p,Mn),ti.copy(u[S[0]]),y.vmult(ti,ti),_.vadd(ti,ti);for(let I=1;!x.shouldStop&&I<S.length-1;I++){pi.copy(u[S[I]]),mi.copy(u[S[I+1]]),y.vmult(pi,pi),y.vmult(mi,mi),_.vadd(pi,pi),_.vadd(mi,mi);let B=Mn.distanceTo(p);!(r.pointInTriangle(Mn,ti,pi,mi)||r.pointInTriangle(Mn,pi,ti,mi))||B>m||this.reportIntersection(a,Mn,s,i,A)}}}}_intersectTrimesh(e,t,n,i,s,o){let a=fA,c=vA,l=xA,h=vp,u=uA,f=dA,d=pA,p=gA,v=mA,m=e.indices;e.vertices;let g=this.from,x=this.to,M=this.direction;l.position.copy(n),l.quaternion.copy(t),st.vectorToLocalFrame(n,t,M,u),st.pointToLocalFrame(n,t,g,f),st.pointToLocalFrame(n,t,x,d),d.x*=e.scale.x,d.y*=e.scale.y,d.z*=e.scale.z,f.x*=e.scale.x,f.y*=e.scale.y,f.z*=e.scale.z,d.vsub(f,u),u.normalize();let A=f.distanceSquared(d);e.tree.rayQuery(this,l,c);for(let S=0,w=c.length;!this.result.shouldStop&&S!==w;S++){let y=c[S];e.getNormal(y,a),e.getVertex(m[y*3],ti),ti.vsub(f,h);let _=u.dot(a),P=a.dot(h)/_;if(P<0)continue;u.scale(P,Mn),Mn.vadd(f,Mn),e.getVertex(m[y*3+1],pi),e.getVertex(m[y*3+2],mi);let R=Mn.distanceSquared(f);!(r.pointInTriangle(Mn,pi,ti,mi)||r.pointInTriangle(Mn,ti,pi,mi))||R>A||(st.vectorToWorldFrame(t,a,v),st.pointToWorldFrame(n,t,Mn,p),this.reportIntersection(v,p,s,i,y))}c.length=0}reportIntersection(e,t,n,i,s){let o=this.from,a=this.to,c=o.distanceTo(t),l=this.result;if(!(this.skipBackfaces&&e.dot(this.direction)>0))switch(l.hitFaceIndex=typeof s<"u"?s:-1,this.mode){case r.ALL:this.hasHit=!0,l.set(o,a,e,t,n,i,c),l.hasHit=!0,this.callback(l);break;case r.CLOSEST:(c<l.distance||!l.hasHit)&&(this.hasHit=!0,l.hasHit=!0,l.set(o,a,e,t,n,i,c));break;case r.ANY:this.hasHit=!0,l.hasHit=!0,l.set(o,a,e,t,n,i,c),l.shouldStop=!0;break}}static pointInTriangle(e,t,n,i){i.vsub(t,Ps),n.vsub(t,No),e.vsub(t,$h);let s=Ps.dot(Ps),o=Ps.dot(No),a=Ps.dot($h),c=No.dot(No),l=No.dot($h),h,u;return(h=c*a-o*l)>=0&&(u=s*l-o*a)>=0&&h+u<s*c-o*o}};Wn.CLOSEST=ff.CLOSEST;Wn.ANY=ff.ANY;Wn.ALL=ff.ALL;mp=new In,Zh=[],No=new E,$h=new E,nA=new E,iA=new pn,Mn=new E,ti=new E,pi=new E,mi=new E;new E;new wr;gp={faceList:[0]},Hc=new E,sA=new Wn,rA=[],oA=new E,aA=new E,cA=new E,lA=new E,hA=new E,vp=new E,fA=new E,uA=new E,dA=new E,pA=new E,mA=new E,gA=new E;new In;vA=[],xA=new st,Ps=new E,kc=new E;Zc=class r extends Kc{static checkBounds(e,t,n){let i,s;n===0?(i=e.position.x,s=t.position.x):n===1?(i=e.position.y,s=t.position.y):n===2&&(i=e.position.z,s=t.position.z);let o=e.boundingRadius,a=t.boundingRadius,c=i+o;return s-a<c}static insertionSortX(e){for(let t=1,n=e.length;t<n;t++){let i=e[t],s;for(s=t-1;s>=0&&!(e[s].aabb.lowerBound.x<=i.aabb.lowerBound.x);s--)e[s+1]=e[s];e[s+1]=i}return e}static insertionSortY(e){for(let t=1,n=e.length;t<n;t++){let i=e[t],s;for(s=t-1;s>=0&&!(e[s].aabb.lowerBound.y<=i.aabb.lowerBound.y);s--)e[s+1]=e[s];e[s+1]=i}return e}static insertionSortZ(e){for(let t=1,n=e.length;t<n;t++){let i=e[t],s;for(s=t-1;s>=0&&!(e[s].aabb.lowerBound.z<=i.aabb.lowerBound.z);s--)e[s+1]=e[s];e[s+1]=i}return e}constructor(e){super(),this.axisList=[],this.world=null,this.axisIndex=0;let t=this.axisList;this._addBodyHandler=n=>{t.push(n.body)},this._removeBodyHandler=n=>{let i=t.indexOf(n.body);i!==-1&&t.splice(i,1)},e&&this.setWorld(e)}setWorld(e){this.axisList.length=0;for(let t=0;t<e.bodies.length;t++)this.axisList.push(e.bodies[t]);e.removeEventListener("addBody",this._addBodyHandler),e.removeEventListener("removeBody",this._removeBodyHandler),e.addEventListener("addBody",this._addBodyHandler),e.addEventListener("removeBody",this._removeBodyHandler),this.world=e,this.dirty=!0}collisionPairs(e,t,n){let i=this.axisList,s=i.length,o=this.axisIndex,a,c;for(this.dirty&&(this.sortList(),this.dirty=!1),a=0;a!==s;a++){let l=i[a];for(c=a+1;c<s;c++){let h=i[c];if(this.needBroadphaseCollision(l,h)){if(!r.checkBounds(l,h,o))break;this.intersectionTest(l,h,t,n)}}}}sortList(){let e=this.axisList,t=this.axisIndex,n=e.length;for(let i=0;i!==n;i++){let s=e[i];s.aabbNeedsUpdate&&s.updateAABB()}t===0?r.insertionSortX(e):t===1?r.insertionSortY(e):t===2&&r.insertionSortZ(e)}autoDetectAxis(){let e=0,t=0,n=0,i=0,s=0,o=0,a=this.axisList,c=a.length,l=1/c;for(let d=0;d!==c;d++){let p=a[d],v=p.position.x;e+=v,t+=v*v;let m=p.position.y;n+=m,i+=m*m;let g=p.position.z;s+=g,o+=g*g}let h=t-e*e*l,u=i-n*n*l,f=o-s*s*l;h>u?h>f?this.axisIndex=0:this.axisIndex=2:u>f?this.axisIndex=1:this.axisIndex=2}aabbQuery(e,t,n){n===void 0&&(n=[]),this.dirty&&(this.sortList(),this.dirty=!1);let i=this.axisIndex,s="x";i===1&&(s="y"),i===2&&(s="z");let o=this.axisList;t.lowerBound[s],t.upperBound[s];for(let a=0;a<o.length;a++){let c=o[a];c.aabbNeedsUpdate&&c.updateAABB(),c.aabb.overlaps(t)&&n.push(c)}return n}},$c=class{static defaults(e,t){e===void 0&&(e={});for(let n in t)n in e||(e[n]=t[n]);return e}},ef=class r{constructor(e,t,n){n===void 0&&(n={}),n=$c.defaults(n,{collideConnected:!0,wakeUpBodies:!0}),this.equations=[],this.bodyA=e,this.bodyB=t,this.id=r.idCounter++,this.collideConnected=n.collideConnected,n.wakeUpBodies&&(e&&e.wakeUp(),t&&t.wakeUp())}update(){throw new Error("method update() not implmemented in this Constraint subclass!")}enable(){let e=this.equations;for(let t=0;t<e.length;t++)e[t].enabled=!0}disable(){let e=this.equations;for(let t=0;t<e.length;t++)e[t].enabled=!1}};ef.idCounter=0;jc=class{constructor(){this.spatial=new E,this.rotational=new E}multiplyElement(e){return e.spatial.dot(this.spatial)+e.rotational.dot(this.rotational)}multiplyVectors(e,t){return e.dot(this.spatial)+t.dot(this.rotational)}},Oo=class r{constructor(e,t,n,i){n===void 0&&(n=-1e6),i===void 0&&(i=1e6),this.id=r.idCounter++,this.minForce=n,this.maxForce=i,this.bi=e,this.bj=t,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new jc,this.jacobianElementB=new jc,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(e,t,n){let i=t,s=e,o=n;this.a=4/(o*(1+4*i)),this.b=4*i/(1+4*i),this.eps=4/(o*o*s*(1+4*i))}computeB(e,t,n){let i=this.computeGW(),s=this.computeGq(),o=this.computeGiMf();return-s*e-i*t-o*n}computeGq(){let e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.position,o=i.position;return e.spatial.dot(s)+t.spatial.dot(o)}computeGW(){let e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.velocity,o=i.velocity,a=n.angularVelocity,c=i.angularVelocity;return e.multiplyVectors(s,a)+t.multiplyVectors(o,c)}computeGWlambda(){let e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.vlambda,o=i.vlambda,a=n.wlambda,c=i.wlambda;return e.multiplyVectors(s,a)+t.multiplyVectors(o,c)}computeGiMf(){let e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.force,o=n.torque,a=i.force,c=i.torque,l=n.invMassSolve,h=i.invMassSolve;return s.scale(l,xp),a.scale(h,yp),n.invInertiaWorldSolve.vmult(o,_p),i.invInertiaWorldSolve.vmult(c,Ap),e.multiplyVectors(xp,_p)+t.multiplyVectors(yp,Ap)}computeGiMGt(){let e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.invMassSolve,o=i.invMassSolve,a=n.invInertiaWorldSolve,c=i.invInertiaWorldSolve,l=s+o;return a.vmult(e.rotational,Vc),l+=Vc.dot(e.rotational),c.vmult(t.rotational,Vc),l+=Vc.dot(t.rotational),l}addToWlambda(e){let t=this.jacobianElementA,n=this.jacobianElementB,i=this.bi,s=this.bj,o=_A;i.vlambda.addScaledVector(i.invMassSolve*e,t.spatial,i.vlambda),s.vlambda.addScaledVector(s.invMassSolve*e,n.spatial,s.vlambda),i.invInertiaWorldSolve.vmult(t.rotational,o),i.wlambda.addScaledVector(e,o,i.wlambda),s.invInertiaWorldSolve.vmult(n.rotational,o),s.wlambda.addScaledVector(e,o,s.wlambda)}computeC(){return this.computeGiMGt()+this.eps}};Oo.idCounter=0;xp=new E,yp=new E,_p=new E,Ap=new E,Vc=new E,_A=new E,tf=class extends Oo{constructor(e,t,n){n===void 0&&(n=1e6),super(e,t,0,n),this.restitution=0,this.ri=new E,this.rj=new E,this.ni=new E}computeB(e){let t=this.a,n=this.b,i=this.bi,s=this.bj,o=this.ri,a=this.rj,c=AA,l=bA,h=i.velocity,u=i.angularVelocity;i.force,i.torque;let f=s.velocity,d=s.angularVelocity;s.force,s.torque;let p=MA,v=this.jacobianElementA,m=this.jacobianElementB,g=this.ni;o.cross(g,c),a.cross(g,l),g.negate(v.spatial),c.negate(v.rotational),m.spatial.copy(g),m.rotational.copy(l),p.copy(s.position),p.vadd(a,p),p.vsub(i.position,p),p.vsub(o,p);let x=g.dot(p),M=this.restitution+1,A=M*f.dot(g)-M*h.dot(g)+d.dot(l)-u.dot(c),S=this.computeGiMf();return-x*t-A*n-e*S}getImpactVelocityAlongNormal(){let e=SA,t=wA,n=TA,i=EA,s=RA;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,i),this.bi.getVelocityAtWorldPoint(n,e),this.bj.getVelocityAtWorldPoint(i,t),e.vsub(t,s),this.ni.dot(s)}},AA=new E,bA=new E,MA=new E,SA=new E,wA=new E,TA=new E,EA=new E,RA=new E,kw=new E,Vw=new E,Gw=new E,Ww=new E;new E;new E;qw=new E,Xw=new E,Yw=new E,Kw=new E,Jc=class extends Oo{constructor(e,t,n){super(e,t,-n,n),this.ri=new E,this.rj=new E,this.t=new E}computeB(e){this.a;let t=this.b;this.bi,this.bj;let n=this.ri,i=this.rj,s=LA,o=CA,a=this.t;n.cross(a,s),i.cross(a,o);let c=this.jacobianElementA,l=this.jacobianElementB;a.negate(c.spatial),s.negate(c.rotational),l.spatial.copy(a),l.rotational.copy(o);let h=this.computeGW(),u=this.computeGiMf();return-h*t-e*u}},LA=new E,CA=new E,Tr=class r{constructor(e,t,n){n=$c.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=r.idCounter++,this.materials=[e,t],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}};Tr.idCounter=0;Is=class r{constructor(e){e===void 0&&(e={});let t="";typeof e=="string"&&(t=e,e={}),this.name=t,this.id=r.idCounter++,this.friction=typeof e.friction<"u"?e.friction:-1,this.restitution=typeof e.restitution<"u"?e.restitution:-1}};Is.idCounter=0;Zw=new E,$w=new E,jw=new E,Jw=new E,Qw=new E,eT=new E,tT=new E,nT=new E,iT=new E,sT=new E,rT=new E,oT=new E,aT=new E;new E;new E;new E;cT=new E,lT=new E,hT=new E;new Wn;new E;fT=new E,uT=new E,dT=[new E(1,0,0),new E(0,1,0),new E(0,0,1)],pT=new E,mT=new E,gT=new E,vT=new E,xT=new E,yT=new E,_T=new E,AT=new E,bT=new E,MT=new E,ST=new E,Qc=class extends Ae{constructor(e){if(super({type:Ae.types.SPHERE}),this.radius=e!==void 0?e:1,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}calculateLocalInertia(e,t){t===void 0&&(t=new E);let n=2*e*this.radius*this.radius/5;return t.x=n,t.y=n,t.z=n,t}volume(){return 4*Math.PI*Math.pow(this.radius,3)/3}updateBoundingSphereRadius(){this.boundingSphereRadius=this.radius}calculateWorldAABB(e,t,n,i){let s=this.radius,o=["x","y","z"];for(let a=0;a<o.length;a++){let c=o[a];n[c]=e[c]-s,i[c]=e[c]+s}}},wT=new E,TT=new E,ET=new E,RT=new E,LT=new E,CT=new E,PT=new E,IT=new E,NT=new E,el=class extends Yc{constructor(e,t,n,i){if(e===void 0&&(e=1),t===void 0&&(t=1),n===void 0&&(n=1),i===void 0&&(i=8),e<0)throw new Error("The cylinder radiusTop cannot be negative.");if(t<0)throw new Error("The cylinder radiusBottom cannot be negative.");let s=i,o=[],a=[],c=[],l=[],h=[],u=Math.cos,f=Math.sin;o.push(new E(-t*f(0),-n*.5,t*u(0))),l.push(0),o.push(new E(-e*f(0),n*.5,e*u(0))),h.push(1);for(let p=0;p<s;p++){let v=2*Math.PI/s*(p+1),m=2*Math.PI/s*(p+.5);p<s-1?(o.push(new E(-t*f(v),-n*.5,t*u(v))),l.push(2*p+2),o.push(new E(-e*f(v),n*.5,e*u(v))),h.push(2*p+3),c.push([2*p,2*p+1,2*p+3,2*p+2])):c.push([2*p,2*p+1,1,0]),(s%2===1||p<s/2)&&a.push(new E(-f(m),0,u(m)))}c.push(l),a.push(new E(0,1,0));let d=[];for(let p=0;p<h.length;p++)d.push(h[h.length-p-1]);c.push(d),super({vertices:o,faces:c,axes:a}),this.type=Ae.types.CYLINDER,this.radiusTop=e,this.radiusBottom=t,this.height=n,this.numSegments=i}},tl=class extends Ae{constructor(){super({type:Ae.types.PLANE}),this.worldNormal=new E,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}computeWorldNormal(e){let t=this.worldNormal;t.set(0,0,1),e.vmult(t,t),this.worldNormalNeedsUpdate=!1}calculateLocalInertia(e,t){return t===void 0&&(t=new E),t}volume(){return Number.MAX_VALUE}calculateWorldAABB(e,t,n,i){Ui.set(0,0,1),t.vmult(Ui,Ui);let s=Number.MAX_VALUE;n.set(-s,-s,-s),i.set(s,s,s),Ui.x===1?i.x=e.x:Ui.x===-1&&(n.x=e.x),Ui.y===1?i.y=e.y:Ui.y===-1&&(n.y=e.y),Ui.z===1?i.z=e.z:Ui.z===-1&&(n.z=e.z)}updateBoundingSphereRadius(){this.boundingSphereRadius=Number.MAX_VALUE}},Ui=new E,FT=new E,BT=new E,DT=new E,UT=new E,OT=new E,zT=new E,HT=new E,kT=new E,VT=new E,GT=new E,WT=new In,qT=new E,XT=new In,YT=new E,KT=new E,ZT=new E,$T=new E,jT=new E,JT=new E,QT=new E,e1=new In,t1=new E,n1=new st,i1=new In,nf=class{constructor(){this.equations=[]}solve(e,t){return 0}addEquation(e){e.enabled&&!e.bi.isTrigger&&!e.bj.isTrigger&&this.equations.push(e)}removeEquation(e){let t=this.equations,n=t.indexOf(e);n!==-1&&t.splice(n,1)}removeAllEquations(){this.equations.length=0}},sf=class extends nf{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(e,t){let n=0,i=this.iterations,s=this.tolerance*this.tolerance,o=this.equations,a=o.length,c=t.bodies,l=c.length,h=e,u,f,d,p,v,m;if(a!==0)for(let A=0;A!==l;A++)c[A].updateSolveMassProperties();let g=IA,x=NA,M=PA;g.length=a,x.length=a,M.length=a;for(let A=0;A!==a;A++){let S=o[A];M[A]=0,x[A]=S.computeB(h),g[A]=1/S.computeC()}if(a!==0){for(let w=0;w!==l;w++){let y=c[w],_=y.vlambda,P=y.wlambda;_.set(0,0,0),P.set(0,0,0)}for(n=0;n!==i;n++){p=0;for(let w=0;w!==a;w++){let y=o[w];u=x[w],f=g[w],m=M[w],v=y.computeGWlambda(),d=f*(u-v-y.eps*m),m+d<y.minForce?d=y.minForce-m:m+d>y.maxForce&&(d=y.maxForce-m),M[w]+=d,p+=d>0?d:-d,y.addToWlambda(d)}if(p*p<s)break}for(let w=0;w!==l;w++){let y=c[w],_=y.velocity,P=y.angularVelocity;y.vlambda.vmul(y.linearFactor,y.vlambda),_.vadd(y.vlambda,_),y.wlambda.vmul(y.angularFactor,y.wlambda),P.vadd(y.wlambda,P)}let A=o.length,S=1/h;for(;A--;)o[A].multiplier=M[A]*S}return n}},PA=[],IA=[],NA=[],s1=qe.STATIC,rf=class{constructor(){this.objects=[],this.type=Object}release(){let e=arguments.length;for(let t=0;t!==e;t++)this.objects.push(t<0||arguments.length<=t?void 0:arguments[t]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(e){let t=this.objects;for(;t.length>e;)t.pop();for(;t.length<e;)t.push(this.constructObject());return this}},of=class extends rf{constructor(){super(...arguments),this.type=E}constructObject(){return new E}},mt={sphereSphere:Ae.types.SPHERE,spherePlane:Ae.types.SPHERE|Ae.types.PLANE,boxBox:Ae.types.BOX|Ae.types.BOX,sphereBox:Ae.types.SPHERE|Ae.types.BOX,planeBox:Ae.types.PLANE|Ae.types.BOX,convexConvex:Ae.types.CONVEXPOLYHEDRON,sphereConvex:Ae.types.SPHERE|Ae.types.CONVEXPOLYHEDRON,planeConvex:Ae.types.PLANE|Ae.types.CONVEXPOLYHEDRON,boxConvex:Ae.types.BOX|Ae.types.CONVEXPOLYHEDRON,sphereHeightfield:Ae.types.SPHERE|Ae.types.HEIGHTFIELD,boxHeightfield:Ae.types.BOX|Ae.types.HEIGHTFIELD,convexHeightfield:Ae.types.CONVEXPOLYHEDRON|Ae.types.HEIGHTFIELD,sphereParticle:Ae.types.PARTICLE|Ae.types.SPHERE,planeParticle:Ae.types.PLANE|Ae.types.PARTICLE,boxParticle:Ae.types.BOX|Ae.types.PARTICLE,convexParticle:Ae.types.PARTICLE|Ae.types.CONVEXPOLYHEDRON,cylinderCylinder:Ae.types.CYLINDER,sphereCylinder:Ae.types.SPHERE|Ae.types.CYLINDER,planeCylinder:Ae.types.PLANE|Ae.types.CYLINDER,boxCylinder:Ae.types.BOX|Ae.types.CYLINDER,convexCylinder:Ae.types.CONVEXPOLYHEDRON|Ae.types.CYLINDER,heightfieldCylinder:Ae.types.HEIGHTFIELD|Ae.types.CYLINDER,particleCylinder:Ae.types.PARTICLE|Ae.types.CYLINDER,sphereTrimesh:Ae.types.SPHERE|Ae.types.TRIMESH,planeTrimesh:Ae.types.PLANE|Ae.types.TRIMESH},af=class{get[mt.sphereSphere](){return this.sphereSphere}get[mt.spherePlane](){return this.spherePlane}get[mt.boxBox](){return this.boxBox}get[mt.sphereBox](){return this.sphereBox}get[mt.planeBox](){return this.planeBox}get[mt.convexConvex](){return this.convexConvex}get[mt.sphereConvex](){return this.sphereConvex}get[mt.planeConvex](){return this.planeConvex}get[mt.boxConvex](){return this.boxConvex}get[mt.sphereHeightfield](){return this.sphereHeightfield}get[mt.boxHeightfield](){return this.boxHeightfield}get[mt.convexHeightfield](){return this.convexHeightfield}get[mt.sphereParticle](){return this.sphereParticle}get[mt.planeParticle](){return this.planeParticle}get[mt.boxParticle](){return this.boxParticle}get[mt.convexParticle](){return this.convexParticle}get[mt.cylinderCylinder](){return this.convexConvex}get[mt.sphereCylinder](){return this.sphereConvex}get[mt.planeCylinder](){return this.planeConvex}get[mt.boxCylinder](){return this.boxConvex}get[mt.convexCylinder](){return this.convexConvex}get[mt.heightfieldCylinder](){return this.heightfieldCylinder}get[mt.particleCylinder](){return this.particleCylinder}get[mt.sphereTrimesh](){return this.sphereTrimesh}get[mt.planeTrimesh](){return this.planeTrimesh}constructor(e){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new of,this.world=e,this.currentContactMaterial=e.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(e,t,n,i,s,o){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=e,a.bj=t):a=new tf(e,t),a.enabled=e.collisionResponse&&t.collisionResponse&&n.collisionResponse&&i.collisionResponse;let c=this.currentContactMaterial;a.restitution=c.restitution,a.setSpookParams(c.contactEquationStiffness,c.contactEquationRelaxation,this.world.dt);let l=n.material||e.material,h=i.material||t.material;return l&&h&&l.restitution>=0&&h.restitution>=0&&(a.restitution=l.restitution*h.restitution),a.si=s||n,a.sj=o||i,a}createFrictionEquationsFromContact(e,t){let n=e.bi,i=e.bj,s=e.si,o=e.sj,a=this.world,c=this.currentContactMaterial,l=c.friction,h=s.material||n.material,u=o.material||i.material;if(h&&u&&h.friction>=0&&u.friction>=0&&(l=h.friction*u.friction),l>0){let f=l*(a.frictionGravity||a.gravity).length(),d=n.invMass+i.invMass;d>0&&(d=1/d);let p=this.frictionEquationPool,v=p.length?p.pop():new Jc(n,i,f*d),m=p.length?p.pop():new Jc(n,i,f*d);return v.bi=m.bi=n,v.bj=m.bj=i,v.minForce=m.minForce=-f*d,v.maxForce=m.maxForce=f*d,v.ri.copy(e.ri),v.rj.copy(e.rj),m.ri.copy(e.ri),m.rj.copy(e.rj),e.ni.tangents(v.t,m.t),v.setSpookParams(c.frictionEquationStiffness,c.frictionEquationRelaxation,a.dt),m.setSpookParams(c.frictionEquationStiffness,c.frictionEquationRelaxation,a.dt),v.enabled=m.enabled=e.enabled,t.push(v,m),!0}return!1}createFrictionFromAverage(e){let t=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(t,this.frictionResult)||e===1)return;let n=this.frictionResult[this.frictionResult.length-2],i=this.frictionResult[this.frictionResult.length-1];Cs.setZero(),Mr.setZero(),Sr.setZero();let s=t.bi;t.bj;for(let a=0;a!==e;a++)t=this.result[this.result.length-1-a],t.bi!==s?(Cs.vadd(t.ni,Cs),Mr.vadd(t.ri,Mr),Sr.vadd(t.rj,Sr)):(Cs.vsub(t.ni,Cs),Mr.vadd(t.rj,Mr),Sr.vadd(t.ri,Sr));let o=1/e;Mr.scale(o,n.ri),Sr.scale(o,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),Cs.normalize(),Cs.tangents(n.t,i.t)}getContacts(e,t,n,i,s,o,a){this.contactPointPool=s,this.frictionEquationPool=a,this.result=i,this.frictionResult=o;let c=DA,l=UA,h=FA,u=BA;for(let f=0,d=e.length;f!==d;f++){let p=e[f],v=t[f],m=null;p.material&&v.material&&(m=n.getContactMaterial(p.material,v.material)||null);let g=p.type&qe.KINEMATIC&&v.type&qe.STATIC||p.type&qe.STATIC&&v.type&qe.KINEMATIC||p.type&qe.KINEMATIC&&v.type&qe.KINEMATIC;for(let x=0;x<p.shapes.length;x++){p.quaternion.mult(p.shapeOrientations[x],c),p.quaternion.vmult(p.shapeOffsets[x],h),h.vadd(p.position,h);let M=p.shapes[x];for(let A=0;A<v.shapes.length;A++){v.quaternion.mult(v.shapeOrientations[A],l),v.quaternion.vmult(v.shapeOffsets[A],u),u.vadd(v.position,u);let S=v.shapes[A];if(!(M.collisionFilterMask&S.collisionFilterGroup&&S.collisionFilterMask&M.collisionFilterGroup)||h.distanceTo(u)>M.boundingSphereRadius+S.boundingSphereRadius)continue;let w=null;M.material&&S.material&&(w=n.getContactMaterial(M.material,S.material)||null),this.currentContactMaterial=w||m||n.defaultContactMaterial;let y=M.type|S.type,_=this[y];if(_){let P=!1;M.type<S.type?P=_.call(this,M,S,h,u,c,l,p,v,M,S,g):P=_.call(this,S,M,u,h,l,c,v,p,M,S,g),P&&g&&(n.shapeOverlapKeeper.set(M.id,S.id),n.bodyOverlapKeeper.set(p.id,v.id))}}}}}sphereSphere(e,t,n,i,s,o,a,c,l,h,u){if(u)return n.distanceSquared(i)<(e.radius+t.radius)**2;let f=this.createContactEquation(a,c,e,t,l,h);i.vsub(n,f.ni),f.ni.normalize(),f.ri.copy(f.ni),f.rj.copy(f.ni),f.ri.scale(e.radius,f.ri),f.rj.scale(-t.radius,f.rj),f.ri.vadd(n,f.ri),f.ri.vsub(a.position,f.ri),f.rj.vadd(i,f.rj),f.rj.vsub(c.position,f.rj),this.result.push(f),this.createFrictionEquationsFromContact(f,this.frictionResult)}spherePlane(e,t,n,i,s,o,a,c,l,h,u){let f=this.createContactEquation(a,c,e,t,l,h);if(f.ni.set(0,0,1),o.vmult(f.ni,f.ni),f.ni.negate(f.ni),f.ni.normalize(),f.ni.scale(e.radius,f.ri),n.vsub(i,Gc),f.ni.scale(f.ni.dot(Gc),bp),Gc.vsub(bp,f.rj),-Gc.dot(f.ni)<=e.radius){if(u)return!0;let d=f.ri,p=f.rj;d.vadd(n,d),d.vsub(a.position,d),p.vadd(i,p),p.vsub(c.position,p),this.result.push(f),this.createFrictionEquationsFromContact(f,this.frictionResult)}}boxBox(e,t,n,i,s,o,a,c,l,h,u){return e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t.convexPolyhedronRepresentation,n,i,s,o,a,c,e,t,u)}sphereBox(e,t,n,i,s,o,a,c,l,h,u){let f=this.v3pool,d=l3;n.vsub(i,Wc),t.getSideNormals(d,o);let p=e.radius,v=!1,m=f3,g=u3,x=d3,M=null,A=0,S=0,w=0,y=null;for(let F=0,G=d.length;F!==G&&v===!1;F++){let W=o3;W.copy(d[F]);let H=W.length();W.normalize();let K=Wc.dot(W);if(K<H+p&&K>0){let $=a3,ne=c3;$.copy(d[(F+1)%3]),ne.copy(d[(F+2)%3]);let Me=$.length(),j=ne.length();$.normalize(),ne.normalize();let ae=Wc.dot($),_e=Wc.dot(ne);if(ae<Me&&ae>-Me&&_e<j&&_e>-j){let Re=Math.abs(K-H-p);if((y===null||Re<y)&&(y=Re,S=ae,w=_e,M=H,m.copy(W),g.copy($),x.copy(ne),A++,u))return!0}}}if(A){v=!0;let F=this.createContactEquation(a,c,e,t,l,h);m.scale(-p,F.ri),F.ni.copy(m),F.ni.negate(F.ni),m.scale(M,m),g.scale(S,g),m.vadd(g,m),x.scale(w,x),m.vadd(x,F.rj),F.ri.vadd(n,F.ri),F.ri.vsub(a.position,F.ri),F.rj.vadd(i,F.rj),F.rj.vsub(c.position,F.rj),this.result.push(F),this.createFrictionEquationsFromContact(F,this.frictionResult)}let _=f.get(),P=h3;for(let F=0;F!==2&&!v;F++)for(let G=0;G!==2&&!v;G++)for(let W=0;W!==2&&!v;W++)if(_.set(0,0,0),F?_.vadd(d[0],_):_.vsub(d[0],_),G?_.vadd(d[1],_):_.vsub(d[1],_),W?_.vadd(d[2],_):_.vsub(d[2],_),i.vadd(_,P),P.vsub(n,P),P.lengthSquared()<p*p){if(u)return!0;v=!0;let H=this.createContactEquation(a,c,e,t,l,h);H.ri.copy(P),H.ri.normalize(),H.ni.copy(H.ri),H.ri.scale(p,H.ri),H.rj.copy(_),H.ri.vadd(n,H.ri),H.ri.vsub(a.position,H.ri),H.rj.vadd(i,H.rj),H.rj.vsub(c.position,H.rj),this.result.push(H),this.createFrictionEquationsFromContact(H,this.frictionResult)}f.release(_),_=null;let R=f.get(),I=f.get(),B=f.get(),N=f.get(),L=f.get(),D=d.length;for(let F=0;F!==D&&!v;F++)for(let G=0;G!==D&&!v;G++)if(F%3!==G%3){d[G].cross(d[F],R),R.normalize(),d[F].vadd(d[G],I),B.copy(n),B.vsub(I,B),B.vsub(i,B);let W=B.dot(R);R.scale(W,N);let H=0;for(;H===F%3||H===G%3;)H++;L.copy(n),L.vsub(N,L),L.vsub(I,L),L.vsub(i,L);let K=Math.abs(W),$=L.length();if(K<d[H].length()&&$<p){if(u)return!0;v=!0;let ne=this.createContactEquation(a,c,e,t,l,h);I.vadd(N,ne.rj),ne.rj.copy(ne.rj),L.negate(ne.ni),ne.ni.normalize(),ne.ri.copy(ne.rj),ne.ri.vadd(i,ne.ri),ne.ri.vsub(n,ne.ri),ne.ri.normalize(),ne.ri.scale(p,ne.ri),ne.ri.vadd(n,ne.ri),ne.ri.vsub(a.position,ne.ri),ne.rj.vadd(i,ne.rj),ne.rj.vsub(c.position,ne.rj),this.result.push(ne),this.createFrictionEquationsFromContact(ne,this.frictionResult)}}f.release(R,I,B,N,L)}planeBox(e,t,n,i,s,o,a,c,l,h,u){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,t.convexPolyhedronRepresentation.id=t.id,this.planeConvex(e,t.convexPolyhedronRepresentation,n,i,s,o,a,c,e,t,u)}convexConvex(e,t,n,i,s,o,a,c,l,h,u,f,d){let p=R3;if(!(n.distanceTo(i)>e.boundingSphereRadius+t.boundingSphereRadius)&&e.findSeparatingAxis(t,n,s,i,o,p,f,d)){let v=[],m=L3;e.clipAgainstHull(n,s,t,i,o,p,-100,100,v);let g=0;for(let x=0;x!==v.length;x++){if(u)return!0;let M=this.createContactEquation(a,c,e,t,l,h),A=M.ri,S=M.rj;p.negate(M.ni),v[x].normal.negate(m),m.scale(v[x].depth,m),v[x].point.vadd(m,A),S.copy(v[x].point),A.vsub(n,A),S.vsub(i,S),A.vadd(n,A),A.vsub(a.position,A),S.vadd(i,S),S.vsub(c.position,S),this.result.push(M),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(M,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}}sphereConvex(e,t,n,i,s,o,a,c,l,h,u){let f=this.v3pool;n.vsub(i,p3);let d=t.faceNormals,p=t.faces,v=t.vertices,m=e.radius,g=!1;for(let x=0;x!==v.length;x++){let M=v[x],A=x3;o.vmult(M,A),i.vadd(A,A);let S=v3;if(A.vsub(n,S),S.lengthSquared()<m*m){if(u)return!0;g=!0;let w=this.createContactEquation(a,c,e,t,l,h);w.ri.copy(S),w.ri.normalize(),w.ni.copy(w.ri),w.ri.scale(m,w.ri),A.vsub(i,w.rj),w.ri.vadd(n,w.ri),w.ri.vsub(a.position,w.ri),w.rj.vadd(i,w.rj),w.rj.vsub(c.position,w.rj),this.result.push(w),this.createFrictionEquationsFromContact(w,this.frictionResult);return}}for(let x=0,M=p.length;x!==M&&g===!1;x++){let A=d[x],S=p[x],w=y3;o.vmult(A,w);let y=_3;o.vmult(v[S[0]],y),y.vadd(i,y);let _=A3;w.scale(-m,_),n.vadd(_,_);let P=b3;_.vsub(y,P);let R=P.dot(w),I=M3;if(n.vsub(y,I),R<0&&I.dot(w)>0){let B=[];for(let N=0,L=S.length;N!==L;N++){let D=f.get();o.vmult(v[S[N]],D),i.vadd(D,D),B.push(D)}if(r3(B,w,n)){if(u)return!0;g=!0;let N=this.createContactEquation(a,c,e,t,l,h);w.scale(-m,N.ri),w.negate(N.ni);let L=f.get();w.scale(-R,L);let D=f.get();w.scale(-m,D),n.vsub(i,N.rj),N.rj.vadd(D,N.rj),N.rj.vadd(L,N.rj),N.rj.vadd(i,N.rj),N.rj.vsub(c.position,N.rj),N.ri.vadd(n,N.ri),N.ri.vsub(a.position,N.ri),f.release(L),f.release(D),this.result.push(N),this.createFrictionEquationsFromContact(N,this.frictionResult);for(let F=0,G=B.length;F!==G;F++)f.release(B[F]);return}else for(let N=0;N!==S.length;N++){let L=f.get(),D=f.get();o.vmult(v[S[(N+1)%S.length]],L),o.vmult(v[S[(N+2)%S.length]],D),i.vadd(L,L),i.vadd(D,D);let F=m3;D.vsub(L,F);let G=g3;F.unit(G);let W=f.get(),H=f.get();n.vsub(L,H);let K=H.dot(G);G.scale(K,W),W.vadd(L,W);let $=f.get();if(W.vsub(n,$),K>0&&K*K<F.lengthSquared()&&$.lengthSquared()<m*m){if(u)return!0;let ne=this.createContactEquation(a,c,e,t,l,h);W.vsub(i,ne.rj),W.vsub(n,ne.ni),ne.ni.normalize(),ne.ni.scale(m,ne.ri),ne.rj.vadd(i,ne.rj),ne.rj.vsub(c.position,ne.rj),ne.ri.vadd(n,ne.ri),ne.ri.vsub(a.position,ne.ri),this.result.push(ne),this.createFrictionEquationsFromContact(ne,this.frictionResult);for(let Me=0,j=B.length;Me!==j;Me++)f.release(B[Me]);f.release(L),f.release(D),f.release(W),f.release($),f.release(H);return}f.release(L),f.release(D),f.release(W),f.release($),f.release(H)}for(let N=0,L=B.length;N!==L;N++)f.release(B[N])}}}planeConvex(e,t,n,i,s,o,a,c,l,h,u){let f=S3,d=w3;d.set(0,0,1),s.vmult(d,d);let p=0,v=T3;for(let m=0;m!==t.vertices.length;m++)if(f.copy(t.vertices[m]),o.vmult(f,f),i.vadd(f,f),f.vsub(n,v),d.dot(v)<=0){if(u)return!0;let x=this.createContactEquation(a,c,e,t,l,h),M=E3;d.scale(d.dot(v),M),f.vsub(M,M),M.vsub(n,x.ri),x.ni.copy(d),f.vsub(i,x.rj),x.ri.vadd(n,x.ri),x.ri.vsub(a.position,x.ri),x.rj.vadd(i,x.rj),x.rj.vsub(c.position,x.rj),this.result.push(x),p++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(x,this.frictionResult)}this.enableFrictionReduction&&p&&this.createFrictionFromAverage(p)}boxConvex(e,t,n,i,s,o,a,c,l,h,u){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t,n,i,s,o,a,c,e,t,u)}sphereHeightfield(e,t,n,i,s,o,a,c,l,h,u){let f=t.data,d=e.radius,p=t.elementSize,v=k3,m=H3;st.pointToLocalFrame(i,o,n,m);let g=Math.floor((m.x-d)/p)-1,x=Math.ceil((m.x+d)/p)+1,M=Math.floor((m.y-d)/p)-1,A=Math.ceil((m.y+d)/p)+1;if(x<0||A<0||g>f.length||M>f[0].length)return;g<0&&(g=0),x<0&&(x=0),M<0&&(M=0),A<0&&(A=0),g>=f.length&&(g=f.length-1),x>=f.length&&(x=f.length-1),A>=f[0].length&&(A=f[0].length-1),M>=f[0].length&&(M=f[0].length-1);let S=[];t.getRectMinMax(g,M,x,A,S);let w=S[0],y=S[1];if(m.z-d>y||m.z+d<w)return;let _=this.result;for(let P=g;P<x;P++)for(let R=M;R<A;R++){let I=_.length,B=!1;if(t.getConvexTrianglePillar(P,R,!1),st.pointToWorldFrame(i,o,t.pillarOffset,v),n.distanceTo(v)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(B=this.sphereConvex(e,t.pillarConvex,n,v,s,o,a,c,e,t,u)),u&&B||(t.getConvexTrianglePillar(P,R,!0),st.pointToWorldFrame(i,o,t.pillarOffset,v),n.distanceTo(v)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(B=this.sphereConvex(e,t.pillarConvex,n,v,s,o,a,c,e,t,u)),u&&B))return!0;if(_.length-I>2)return}}boxHeightfield(e,t,n,i,s,o,a,c,l,h,u){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexHeightfield(e.convexPolyhedronRepresentation,t,n,i,s,o,a,c,e,t,u)}convexHeightfield(e,t,n,i,s,o,a,c,l,h,u){let f=t.data,d=t.elementSize,p=e.boundingSphereRadius,v=O3,m=z3,g=U3;st.pointToLocalFrame(i,o,n,g);let x=Math.floor((g.x-p)/d)-1,M=Math.ceil((g.x+p)/d)+1,A=Math.floor((g.y-p)/d)-1,S=Math.ceil((g.y+p)/d)+1;if(M<0||S<0||x>f.length||A>f[0].length)return;x<0&&(x=0),M<0&&(M=0),A<0&&(A=0),S<0&&(S=0),x>=f.length&&(x=f.length-1),M>=f.length&&(M=f.length-1),S>=f[0].length&&(S=f[0].length-1),A>=f[0].length&&(A=f[0].length-1);let w=[];t.getRectMinMax(x,A,M,S,w);let y=w[0],_=w[1];if(!(g.z-p>_||g.z+p<y))for(let P=x;P<M;P++)for(let R=A;R<S;R++){let I=!1;if(t.getConvexTrianglePillar(P,R,!1),st.pointToWorldFrame(i,o,t.pillarOffset,v),n.distanceTo(v)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(I=this.convexConvex(e,t.pillarConvex,n,v,s,o,a,c,null,null,u,m,null)),u&&I||(t.getConvexTrianglePillar(P,R,!0),st.pointToWorldFrame(i,o,t.pillarOffset,v),n.distanceTo(v)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(I=this.convexConvex(e,t.pillarConvex,n,v,s,o,a,c,null,null,u,m,null)),u&&I))return!0}}sphereParticle(e,t,n,i,s,o,a,c,l,h,u){let f=N3;if(f.set(0,0,1),i.vsub(n,f),f.lengthSquared()<=e.radius*e.radius){if(u)return!0;let p=this.createContactEquation(c,a,t,e,l,h);f.normalize(),p.rj.copy(f),p.rj.scale(e.radius,p.rj),p.ni.copy(f),p.ni.negate(p.ni),p.ri.set(0,0,0),this.result.push(p),this.createFrictionEquationsFromContact(p,this.frictionResult)}}planeParticle(e,t,n,i,s,o,a,c,l,h,u){let f=C3;f.set(0,0,1),a.quaternion.vmult(f,f);let d=P3;if(i.vsub(a.position,d),f.dot(d)<=0){if(u)return!0;let v=this.createContactEquation(c,a,t,e,l,h);v.ni.copy(f),v.ni.negate(v.ni),v.ri.set(0,0,0);let m=I3;f.scale(f.dot(i),m),i.vsub(m,m),v.rj.copy(m),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}boxParticle(e,t,n,i,s,o,a,c,l,h,u){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexParticle(e.convexPolyhedronRepresentation,t,n,i,s,o,a,c,e,t,u)}convexParticle(e,t,n,i,s,o,a,c,l,h,u){let f=-1,d=B3,p=D3,v=null,m=F3;if(m.copy(i),m.vsub(n,m),s.conjugate(Mp),Mp.vmult(m,m),e.pointIsInside(m)){e.worldVerticesNeedsUpdate&&e.computeWorldVertices(n,s),e.worldFaceNormalsNeedsUpdate&&e.computeWorldFaceNormals(s);for(let g=0,x=e.faces.length;g!==x;g++){let M=[e.worldVertices[e.faces[g][0]]],A=e.worldFaceNormals[g];i.vsub(M[0],Sp);let S=-A.dot(Sp);if(v===null||Math.abs(S)<Math.abs(v)){if(u)return!0;v=S,f=g,d.copy(A)}}if(f!==-1){let g=this.createContactEquation(c,a,t,e,l,h);d.scale(v,p),p.vadd(i,p),p.vsub(n,p),g.rj.copy(p),d.negate(g.ni),g.ri.set(0,0,0);let x=g.ri,M=g.rj;x.vadd(i,x),x.vsub(c.position,x),M.vadd(n,M),M.vsub(a.position,M),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(e,t,n,i,s,o,a,c,l,h,u){return this.convexHeightfield(t,e,i,n,o,s,c,a,l,h,u)}particleCylinder(e,t,n,i,s,o,a,c,l,h,u){return this.convexParticle(t,e,i,n,o,s,c,a,l,h,u)}sphereTrimesh(e,t,n,i,s,o,a,c,l,h,u){let f=qA,d=XA,p=YA,v=KA,m=ZA,g=$A,x=e3,M=WA,A=VA,S=t3;st.pointToLocalFrame(i,o,n,m);let w=e.radius;x.lowerBound.set(m.x-w,m.y-w,m.z-w),x.upperBound.set(m.x+w,m.y+w,m.z+w),t.getTrianglesInAABB(x,S);let y=GA,_=e.radius*e.radius;for(let N=0;N<S.length;N++)for(let L=0;L<3;L++)if(t.getVertex(t.indices[S[N]*3+L],y),y.vsub(m,A),A.lengthSquared()<=_){if(M.copy(y),st.pointToWorldFrame(i,o,M,y),y.vsub(n,A),u)return!0;let D=this.createContactEquation(a,c,e,t,l,h);D.ni.copy(A),D.ni.normalize(),D.ri.copy(D.ni),D.ri.scale(e.radius,D.ri),D.ri.vadd(n,D.ri),D.ri.vsub(a.position,D.ri),D.rj.copy(y),D.rj.vsub(c.position,D.rj),this.result.push(D),this.createFrictionEquationsFromContact(D,this.frictionResult)}for(let N=0;N<S.length;N++)for(let L=0;L<3;L++){t.getVertex(t.indices[S[N]*3+L],f),t.getVertex(t.indices[S[N]*3+(L+1)%3],d),d.vsub(f,p),m.vsub(d,g);let D=g.dot(p);m.vsub(f,g);let F=g.dot(p);if(F>0&&D<0&&(m.vsub(f,g),v.copy(p),v.normalize(),F=g.dot(v),v.scale(F,g),g.vadd(f,g),g.distanceTo(m)<e.radius)){if(u)return!0;let W=this.createContactEquation(a,c,e,t,l,h);g.vsub(m,W.ni),W.ni.normalize(),W.ni.scale(e.radius,W.ri),W.ri.vadd(n,W.ri),W.ri.vsub(a.position,W.ri),st.pointToWorldFrame(i,o,g,g),g.vsub(c.position,W.rj),st.vectorToWorldFrame(o,W.ni,W.ni),st.vectorToWorldFrame(o,W.ri,W.ri),this.result.push(W),this.createFrictionEquationsFromContact(W,this.frictionResult)}}let P=jA,R=JA,I=QA,B=kA;for(let N=0,L=S.length;N!==L;N++){t.getTriangleVertices(S[N],P,R,I),t.getNormal(S[N],B),m.vsub(P,g);let D=g.dot(B);if(B.scale(D,g),m.vsub(g,g),D=g.distanceTo(m),Wn.pointInTriangle(g,P,R,I)&&D<e.radius){if(u)return!0;let F=this.createContactEquation(a,c,e,t,l,h);g.vsub(m,F.ni),F.ni.normalize(),F.ni.scale(e.radius,F.ri),F.ri.vadd(n,F.ri),F.ri.vsub(a.position,F.ri),st.pointToWorldFrame(i,o,g,g),g.vsub(c.position,F.rj),st.vectorToWorldFrame(o,F.ni,F.ni),st.vectorToWorldFrame(o,F.ri,F.ri),this.result.push(F),this.createFrictionEquationsFromContact(F,this.frictionResult)}}S.length=0}planeTrimesh(e,t,n,i,s,o,a,c,l,h,u){let f=new E,d=OA;d.set(0,0,1),s.vmult(d,d);for(let p=0;p<t.vertices.length/3;p++){t.getVertex(p,f);let v=new E;v.copy(f),st.pointToWorldFrame(i,o,v,f);let m=zA;if(f.vsub(n,m),d.dot(m)<=0){if(u)return!0;let x=this.createContactEquation(a,c,e,t,l,h);x.ni.copy(d);let M=HA;d.scale(m.dot(d),M),f.vsub(M,M),x.ri.copy(M),x.ri.vsub(a.position,x.ri),x.rj.copy(f),x.rj.vsub(c.position,x.rj),this.result.push(x),this.createFrictionEquationsFromContact(x,this.frictionResult)}}}},Cs=new E,Mr=new E,Sr=new E,FA=new E,BA=new E,DA=new pn,UA=new pn,OA=new E,zA=new E,HA=new E,kA=new E,VA=new E;new E;GA=new E,WA=new E,qA=new E,XA=new E,YA=new E,KA=new E,ZA=new E,$A=new E,jA=new E,JA=new E,QA=new E,e3=new In,t3=[],Gc=new E,bp=new E,n3=new E,i3=new E,s3=new E;Wc=new E,o3=new E,a3=new E,c3=new E,l3=[new E,new E,new E,new E,new E,new E],h3=new E,f3=new E,u3=new E,d3=new E,p3=new E,m3=new E,g3=new E,v3=new E,x3=new E,y3=new E,_3=new E,A3=new E,b3=new E,M3=new E;new E;new E;S3=new E,w3=new E,T3=new E,E3=new E,R3=new E,L3=new E,C3=new E,P3=new E,I3=new E,N3=new E,Mp=new pn,F3=new E;new E;B3=new E,Sp=new E,D3=new E,U3=new E,O3=new E,z3=[0],H3=new E,k3=new E,nl=class{constructor(){this.current=[],this.previous=[]}getKey(e,t){if(t<e){let n=t;t=e,e=n}return e<<16|t}set(e,t){let n=this.getKey(e,t),i=this.current,s=0;for(;n>i[s];)s++;if(n!==i[s]){for(let o=i.length-1;o>=s;o--)i[o+1]=i[o];i[s]=n}}tick(){let e=this.current;this.current=this.previous,this.previous=e,this.current.length=0}getDiff(e,t){let n=this.current,i=this.previous,s=n.length,o=i.length,a=0;for(let c=0;c<s;c++){let l=!1,h=n[c];for(;h>i[a];)a++;l=h===i[a],l||wp(e,h)}a=0;for(let c=0;c<o;c++){let l=!1,h=i[c];for(;h>n[a];)a++;l=n[a]===h,l||wp(t,h)}}};jh=(r,e)=>r<e?`${r}-${e}`:`${e}-${r}`,cf=class{constructor(){this.data={keys:[]}}get(e,t){let n=jh(e,t);return this.data[n]}set(e,t,n){let i=jh(e,t);this.get(e,t)||this.data.keys.push(i),this.data[i]=n}delete(e,t){let n=jh(e,t),i=this.data.keys.indexOf(n);i!==-1&&this.data.keys.splice(i,1),delete this.data[n]}reset(){let e=this.data,t=e.keys;for(;t.length>0;){let n=t.pop();delete e[n]}}},il=class extends Xc{constructor(e){e===void 0&&(e={}),super(),this.dt=-1,this.allowSleep=!!e.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=e.quatNormalizeSkip!==void 0?e.quatNormalizeSkip:0,this.quatNormalizeFast=e.quatNormalizeFast!==void 0?e.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new E,e.gravity&&this.gravity.copy(e.gravity),e.frictionGravity&&(this.frictionGravity=new E,this.frictionGravity.copy(e.frictionGravity)),this.broadphase=e.broadphase!==void 0?e.broadphase:new Qh,this.bodies=[],this.hasActiveBodies=!1,this.solver=e.solver!==void 0?e.solver:new sf,this.constraints=[],this.narrowphase=new af(this),this.collisionMatrix=new qc,this.collisionMatrixPrevious=new qc,this.bodyOverlapKeeper=new nl,this.shapeOverlapKeeper=new nl,this.contactmaterials=[],this.contactMaterialTable=new cf,this.defaultMaterial=new Is("default"),this.defaultContactMaterial=new Tr(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(e,t){return this.contactMaterialTable.get(e.id,t.id)}collisionMatrixTick(){let e=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=e,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(e){this.constraints.push(e)}removeConstraint(e){let t=this.constraints.indexOf(e);t!==-1&&this.constraints.splice(t,1)}rayTest(e,t,n){n instanceof wr?this.raycastClosest(e,t,{skipBackfaces:!0},n):this.raycastAll(e,t,{skipBackfaces:!0},n)}raycastAll(e,t,n,i){return n===void 0&&(n={}),n.mode=Wn.ALL,n.from=e,n.to=t,n.callback=i,Jh.intersectWorld(this,n)}raycastAny(e,t,n,i){return n===void 0&&(n={}),n.mode=Wn.ANY,n.from=e,n.to=t,n.result=i,Jh.intersectWorld(this,n)}raycastClosest(e,t,n,i){return n===void 0&&(n={}),n.mode=Wn.CLOSEST,n.from=e,n.to=t,n.result=i,Jh.intersectWorld(this,n)}addBody(e){this.bodies.includes(e)||(e.index=this.bodies.length,this.bodies.push(e),e.world=this,e.initPosition.copy(e.position),e.initVelocity.copy(e.velocity),e.timeLastSleepy=this.time,e instanceof qe&&(e.initAngularVelocity.copy(e.angularVelocity),e.initQuaternion.copy(e.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=e,this.idToBodyMap[e.id]=e,this.dispatchEvent(this.addBodyEvent))}removeBody(e){e.world=null;let t=this.bodies.length-1,n=this.bodies,i=n.indexOf(e);if(i!==-1){n.splice(i,1);for(let s=0;s!==n.length;s++)n[s].index=s;this.collisionMatrix.setNumObjects(t),this.removeBodyEvent.body=e,delete this.idToBodyMap[e.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(e){return this.idToBodyMap[e]}getShapeById(e){let t=this.bodies;for(let n=0;n<t.length;n++){let i=t[n].shapes;for(let s=0;s<i.length;s++){let o=i[s];if(o.id===e)return o}}return null}addContactMaterial(e){this.contactmaterials.push(e),this.contactMaterialTable.set(e.materials[0].id,e.materials[1].id,e)}removeContactMaterial(e){let t=this.contactmaterials.indexOf(e);t!==-1&&(this.contactmaterials.splice(t,1),this.contactMaterialTable.delete(e.materials[0].id,e.materials[1].id))}fixedStep(e,t){e===void 0&&(e=1/60),t===void 0&&(t=10);let n=Ht.now()/1e3;if(!this.lastCallTime)this.step(e,void 0,t);else{let i=n-this.lastCallTime;this.step(e,i,t)}this.lastCallTime=n}step(e,t,n){if(n===void 0&&(n=10),t===void 0)this.internalStep(e),this.time+=e;else{this.accumulator+=t;let i=Ht.now(),s=0;for(;this.accumulator>=e&&s<n&&(this.internalStep(e),this.accumulator-=e,s++,!(Ht.now()-i>e*1e3)););this.accumulator=this.accumulator%e;let o=this.accumulator/e;for(let a=0;a!==this.bodies.length;a++){let c=this.bodies[a];c.previousPosition.lerp(c.position,o,c.interpolatedPosition),c.previousQuaternion.slerp(c.quaternion,o,c.interpolatedQuaternion),c.previousQuaternion.normalize()}this.time+=t}}internalStep(e){this.dt=e;let t=this.contacts,n=X3,i=Y3,s=this.bodies.length,o=this.bodies,a=this.solver,c=this.gravity,l=this.doProfiling,h=this.profile,u=qe.DYNAMIC,f=-1/0,d=this.constraints,p=q3;c.length();let v=c.x,m=c.y,g=c.z,x=0;for(l&&(f=Ht.now()),x=0;x!==s;x++){let N=o[x];if(N.type===u){let L=N.force,D=N.mass;L.x+=D*v,L.y+=D*m,L.z+=D*g}}for(let N=0,L=this.subsystems.length;N!==L;N++)this.subsystems[N].update();l&&(f=Ht.now()),n.length=0,i.length=0,this.broadphase.collisionPairs(this,n,i),l&&(h.broadphase=Ht.now()-f);let M=d.length;for(x=0;x!==M;x++){let N=d[x];if(!N.collideConnected)for(let L=n.length-1;L>=0;L-=1)(N.bodyA===n[L]&&N.bodyB===i[L]||N.bodyB===n[L]&&N.bodyA===i[L])&&(n.splice(L,1),i.splice(L,1))}this.collisionMatrixTick(),l&&(f=Ht.now());let A=W3,S=t.length;for(x=0;x!==S;x++)A.push(t[x]);t.length=0;let w=this.frictionEquations.length;for(x=0;x!==w;x++)p.push(this.frictionEquations[x]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,i,this,t,A,this.frictionEquations,p),l&&(h.narrowphase=Ht.now()-f),l&&(f=Ht.now()),x=0;x<this.frictionEquations.length;x++)a.addEquation(this.frictionEquations[x]);let y=t.length;for(let N=0;N!==y;N++){let L=t[N],D=L.bi,F=L.bj,G=L.si,W=L.sj,H;if(D.material&&F.material?H=this.getContactMaterial(D.material,F.material)||this.defaultContactMaterial:H=this.defaultContactMaterial,H.friction,D.material&&F.material&&(D.material.friction>=0&&F.material.friction>=0&&D.material.friction*F.material.friction,D.material.restitution>=0&&F.material.restitution>=0&&(L.restitution=D.material.restitution*F.material.restitution)),a.addEquation(L),D.allowSleep&&D.type===qe.DYNAMIC&&D.sleepState===qe.SLEEPING&&F.sleepState===qe.AWAKE&&F.type!==qe.STATIC){let K=F.velocity.lengthSquared()+F.angularVelocity.lengthSquared(),$=F.sleepSpeedLimit**2;K>=$*2&&(D.wakeUpAfterNarrowphase=!0)}if(F.allowSleep&&F.type===qe.DYNAMIC&&F.sleepState===qe.SLEEPING&&D.sleepState===qe.AWAKE&&D.type!==qe.STATIC){let K=D.velocity.lengthSquared()+D.angularVelocity.lengthSquared(),$=D.sleepSpeedLimit**2;K>=$*2&&(F.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(D,F,!0),this.collisionMatrixPrevious.get(D,F)||(Fo.body=F,Fo.contact=L,D.dispatchEvent(Fo),Fo.body=D,F.dispatchEvent(Fo)),this.bodyOverlapKeeper.set(D.id,F.id),this.shapeOverlapKeeper.set(G.id,W.id)}for(this.emitContactEvents(),l&&(h.makeContactConstraints=Ht.now()-f,f=Ht.now()),x=0;x!==s;x++){let N=o[x];N.wakeUpAfterNarrowphase&&(N.wakeUp(),N.wakeUpAfterNarrowphase=!1)}for(M=d.length,x=0;x!==M;x++){let N=d[x];N.update();for(let L=0,D=N.equations.length;L!==D;L++){let F=N.equations[L];a.addEquation(F)}}a.solve(e,this),l&&(h.solve=Ht.now()-f),a.removeAllEquations();let _=Math.pow;for(x=0;x!==s;x++){let N=o[x];if(N.type&u){let L=_(1-N.linearDamping,e),D=N.velocity;D.scale(L,D);let F=N.angularVelocity;if(F){let G=_(1-N.angularDamping,e);F.scale(G,F)}}}this.dispatchEvent(G3),l&&(f=Ht.now());let R=this.stepnumber%(this.quatNormalizeSkip+1)===0,I=this.quatNormalizeFast;for(x=0;x!==s;x++)o[x].integrate(e,R,I);this.clearForces(),this.broadphase.dirty=!0,l&&(h.integrate=Ht.now()-f),this.stepnumber+=1,this.dispatchEvent(V3);let B=!0;if(this.allowSleep)for(B=!1,x=0;x!==s;x++){let N=o[x];N.sleepTick(this.time),N.sleepState!==qe.SLEEPING&&(B=!0)}this.hasActiveBodies=B}emitContactEvents(){let e=this.hasAnyEventListener("beginContact"),t=this.hasAnyEventListener("endContact");if((e||t)&&this.bodyOverlapKeeper.getDiff(Oi,zi),e){for(let s=0,o=Oi.length;s<o;s+=2)Bo.bodyA=this.getBodyById(Oi[s]),Bo.bodyB=this.getBodyById(Oi[s+1]),this.dispatchEvent(Bo);Bo.bodyA=Bo.bodyB=null}if(t){for(let s=0,o=zi.length;s<o;s+=2)Do.bodyA=this.getBodyById(zi[s]),Do.bodyB=this.getBodyById(zi[s+1]),this.dispatchEvent(Do);Do.bodyA=Do.bodyB=null}Oi.length=zi.length=0;let n=this.hasAnyEventListener("beginShapeContact"),i=this.hasAnyEventListener("endShapeContact");if((n||i)&&this.shapeOverlapKeeper.getDiff(Oi,zi),n){for(let s=0,o=Oi.length;s<o;s+=2){let a=this.getShapeById(Oi[s]),c=this.getShapeById(Oi[s+1]);Hi.shapeA=a,Hi.shapeB=c,a&&(Hi.bodyA=a.body),c&&(Hi.bodyB=c.body),this.dispatchEvent(Hi)}Hi.bodyA=Hi.bodyB=Hi.shapeA=Hi.shapeB=null}if(i){for(let s=0,o=zi.length;s<o;s+=2){let a=this.getShapeById(zi[s]),c=this.getShapeById(zi[s+1]);ki.shapeA=a,ki.shapeB=c,a&&(ki.bodyA=a.body),c&&(ki.bodyB=c.body),this.dispatchEvent(ki)}ki.bodyA=ki.bodyB=ki.shapeA=ki.shapeB=null}}clearForces(){let e=this.bodies,t=e.length;for(let n=0;n!==t;n++){let i=e[n];i.force,i.torque,i.force.set(0,0,0),i.torque.set(0,0,0)}}};new In;Jh=new Wn,Ht=globalThis.performance||{};if(!Ht.now){let r=Date.now();Ht.timing&&Ht.timing.navigationStart&&(r=Ht.timing.navigationStart),Ht.now=()=>Date.now()-r}new E;V3={type:"postStep"},G3={type:"preStep"},Fo={type:qe.COLLIDE_EVENT_NAME,body:null,contact:null},W3=[],q3=[],X3=[],Y3=[],Oi=[],zi=[],Bo={type:"beginContact",bodyA:null,bodyB:null},Do={type:"endContact",bodyA:null,bodyB:null},Hi={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},ki={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null}});function uf(r,e){if(e===vh)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===yr||e===Eo){let t=r.getIndex();if(t===null){let s=[],o=r.getAttribute("position");if(o!==void 0){for(let a=0;a<o.count;a++)s.push(a);r.setIndex(s),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}let n=t.count-2,i=[];if(e===yr)for(let s=1;s<=n;s++)i.push(t.getX(0)),i.push(t.getX(s)),i.push(t.getX(s+1));else for(let s=0;s<n;s++)s%2===0?(i.push(t.getX(s)),i.push(t.getX(s+1)),i.push(t.getX(s+2))):(i.push(t.getX(s+2)),i.push(t.getX(s+1)),i.push(t.getX(s)));return i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}var Fp=Dt(()=>{Pn()});function Bp(r){let e=new Map,t=new Map,n=r.clone();return Dp(r,n,function(i,s){e.set(s,i),t.set(i,s)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;let s=i,o=e.get(i),a=o.skeleton.bones;s.skeleton=o.skeleton.clone(),s.bindMatrix.copy(o.bindMatrix),s.skeleton.bones=a.map(function(c){return t.get(c)}),s.bind(s.skeleton,s.bindMatrix)}),n}function Dp(r,e,t){t(r,e);for(let n=0;n<r.children.length;n++)Dp(r.children[n],e.children[n],t)}var Up=Dt(()=>{});function Z3(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}function St(r,e,t){let n=r.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}function J3(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new oi({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Gn})),r.DefaultMaterial}function Ns(r,e,t){for(let n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function gi(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Q3(r,e,t){let n=!1,i=!1,s=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);let o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(n){let f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):r.attributes.position;o.push(f)}if(i){let f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):r.attributes.normal;a.push(f)}if(s){let f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):r.attributes.color;c.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],f=l[2];return n&&(r.morphAttributes.position=h),i&&(r.morphAttributes.normal=u),s&&(r.morphAttributes.color=f),r.morphTargetsRelative=!0,r})}function eb(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function tb(r){let e,t=r.extensions&&r.extensions[Ye.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+mf(t.attributes):e=r.indices+":"+mf(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+mf(r.targets[n]);return e}function mf(r){let e="",t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function Hf(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function nb(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}function sb(r,e,t){let n=e.attributes,i=new un;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new z(c[0],c[1],c[2]),new z(l[0],l[1],l[2])),a.normalized){let h=Hf(Er[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=e.targets;if(s!==void 0){let a=new z,c=new z;for(let l=0,h=s.length;l<h;l++){let u=s[l];if(u.POSITION!==void 0){let f=t.json.accessors[u.POSITION],d=f.min,p=f.max;if(d!==void 0&&p!==void 0){if(c.setX(Math.max(Math.abs(d[0]),Math.abs(p[0]))),c.setY(Math.max(Math.abs(d[1]),Math.abs(p[1]))),c.setZ(Math.max(Math.abs(d[2]),Math.abs(p[2]))),f.normalized){let v=Hf(Er[f.componentType]);c.multiplyScalar(v)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;let o=new gn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function kp(r,e,t){let n=e.attributes,i=[];function s(o,a){return t.getDependency("accessor",o).then(function(c){r.setAttribute(a,c)})}for(let o in n){let a=zf[o]||o.toLowerCase();a in r.attributes||i.push(s(n[o],a))}if(e.indices!==void 0&&!r.index){let o=t.getDependency("accessor",e.indices).then(function(a){r.setIndex(a)});i.push(o)}return Xe.workingColorSpace!==fn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Xe.workingColorSpace}" not supported.`),gi(r,e),sb(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Q3(r,e.targets,t):r})}var sl,Ye,gf,vf,xf,yf,_f,Af,bf,Mf,Sf,wf,Tf,Ef,Rf,Lf,Cf,Pf,If,rl,Nf,Vp,zo,Op,Ff,Bf,Df,Uf,ol,$3,Of,qn,Er,zp,Hp,df,zf,is,j3,pf,ib,kf,Gp=Dt(()=>{Pn();Fp();Up();sl=class extends ci{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new yf(t)}),this.register(function(t){return new _f(t)}),this.register(function(t){return new Af(t)}),this.register(function(t){return new Cf(t)}),this.register(function(t){return new Pf(t)}),this.register(function(t){return new If(t)}),this.register(function(t){return new Mf(t)}),this.register(function(t){return new Sf(t)}),this.register(function(t){return new wf(t)}),this.register(function(t){return new Tf(t)}),this.register(function(t){return new xf(t)}),this.register(function(t){return new Ef(t)}),this.register(function(t){return new bf(t)}),this.register(function(t){return new Lf(t)}),this.register(function(t){return new Rf(t)}),this.register(function(t){return new gf(t)}),this.register(function(t){return new rl(t,Ye.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new rl(t,Ye.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Nf(t)})}load(e,t,n,i){let s=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let l=Fi.extractUrlBase(e);o=Fi.resolveURL(l,this.path)}else o=Fi.extractUrlBase(e);this.manager.itemStart(e);let a=function(l){i?i(l):console.error(l),s.manager.itemError(e),s.manager.itemEnd(e)},c=new fr(this.manager);c.setPriority(this.priority),c.setCache(this.cache),c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{s.parse(l,o,function(h){t(h),s.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s,o={},a={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Vp){try{o[Ye.KHR_BINARY_GLTF]=new Ff(e)}catch(u){i&&i(u);return}s=JSON.parse(o[Ye.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new kf(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){let u=s.extensionsUsed[h],f=s.extensionsRequired||[];switch(u){case Ye.KHR_MATERIALS_UNLIT:o[u]=new vf;break;case Ye.KHR_DRACO_MESH_COMPRESSION:o[u]=new Bf(s,this.dracoLoader);break;case Ye.KHR_TEXTURE_TRANSFORM:o[u]=new Df;break;case Ye.KHR_MESH_QUANTIZATION:o[u]=new Uf;break;default:f.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}};Ye={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},gf=class{constructor(e){this.parser=e,this.name=Ye.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e],l,h=new Te(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],fn);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Qi(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new vo(h),l.distance=u;break;case"spot":l=new go(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),gi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}},vf=class{constructor(){this.name=Ye.KHR_MATERIALS_UNLIT}getMaterialType(){return kn}extendParams(e,t,n){let i=[];e.color=new Te(1,1,1),e.opacity=1;let s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){let o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],fn),e.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,xt))}return Promise.all(i)}},xf=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=St(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},yf=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return St(this.parser,e,this.name)!==null?dn:null}extendMaterialParams(e,t){let n=St(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let s=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Oe(s,s)}return Promise.all(i)}},_f=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return St(this.parser,e,this.name)!==null?dn:null}extendMaterialParams(e,t){let n=St(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return t.diffuseRoughness=n.diffuseRoughnessFactor!==void 0?n.diffuseRoughnessFactor:0,n.diffuseRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"diffuseRoughnessMap",n.diffuseRoughnessTexture)),Promise.all(i)}},Af=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_DISPERSION}getMaterialType(e){return St(this.parser,e,this.name)!==null?dn:null}extendMaterialParams(e,t){let n=St(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},bf=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return St(this.parser,e,this.name)!==null?dn:null}extendMaterialParams(e,t){let n=St(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}},Mf=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_SHEEN}getMaterialType(e){return St(this.parser,e,this.name)!==null?dn:null}extendMaterialParams(e,t){let n=St(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(t.sheenColor=new Te(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let s=n.sheenColorFactor;t.sheenColor.setRGB(s[0],s[1],s[2],fn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,xt)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}},Sf=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return St(this.parser,e,this.name)!==null?dn:null}extendMaterialParams(e,t){let n=St(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}},wf=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_VOLUME}getMaterialType(e){return St(this.parser,e,this.name)!==null?dn:null}extendMaterialParams(e,t){let n=St(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let s=n.attenuationColor||[1,1,1];return t.attenuationColor=new Te().setRGB(s[0],s[1],s[2],fn),Promise.all(i)}},Tf=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_IOR}getMaterialType(e){return St(this.parser,e,this.name)!==null?dn:null}extendMaterialParams(e,t){let n=St(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Ef=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_SPECULAR}getMaterialType(e){return St(this.parser,e,this.name)!==null?dn:null}extendMaterialParams(e,t){let n=St(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let s=n.specularColorFactor||[1,1,1];return t.specularColor=new Te().setRGB(s[0],s[1],s[2],fn),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,xt)),Promise.all(i)}},Rf=class{constructor(e){this.parser=e,this.name=Ye.EXT_MATERIALS_BUMP}getMaterialType(e){return St(this.parser,e,this.name)!==null?dn:null}extendMaterialParams(e,t){let n=St(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}},Lf=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return St(this.parser,e,this.name)!==null?dn:null}extendMaterialParams(e,t){let n=St(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}},Cf=class{constructor(e){this.parser=e,this.name=Ye.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let s=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}},Pf=class{constructor(e){this.parser=e,this.name=Ye.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;let o=s.extensions[t],a=i.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}},If=class{constructor(e){this.parser=e,this.name=Ye.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;let o=s.extensions[t],a=i.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}},rl=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){let c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,f=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,f,i.mode,i.filter).then(function(d){return d.buffer}):o.ready.then(function(){let d=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(d),h,u,f,i.mode,i.filter),d})})}else return null}},Nf=class{constructor(e){this.name=Ye.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let l of i.primitives)if(l.mode!==qn.TRIANGLES&&l.mode!==qn.TRIANGLE_STRIP&&l.mode!==qn.TRIANGLE_FAN&&l.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],c={};for(let l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],f=l[0].count,d=[];for(let p of u){let v=new Ie,m=new z,g=new Mt,x=new z(1,1,1),M=new Ri(p.geometry,p.material,f);for(let S=0;S<f;S++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,S),c.ROTATION&&g.fromBufferAttribute(c.ROTATION,S),c.SCALE&&x.fromBufferAttribute(c.SCALE,S),M.setMatrixAt(S,v.compose(m,g,x));let A=null;for(let S in c)if(S==="_COLOR_0"){let w=c[S];M.instanceColor=new Je(w.array,w.itemSize,w.normalized)}else if(S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"){if(A===null){let y=M.geometry;A=new Xt,A.name=y.name;for(let _ in y.attributes)A.setAttribute(_,y.attributes[_]);for(let _ in y.morphAttributes)A.morphAttributes[_]=y.morphAttributes[_];y.index!==null&&A.setIndex(y.index),A.morphTargetsRelative=y.morphTargetsRelative;for(let _ of y.groups)A.addGroup(_.start,_.count,_.materialIndex);y.boundingBox!==null&&(A.boundingBox=y.boundingBox.clone()),y.boundingSphere!==null&&(A.boundingSphere=y.boundingSphere.clone()),A.drawRange.start=y.drawRange.start,A.drawRange.count=y.drawRange.count,A.userData=Object.assign({},y.userData),M.geometry=A}let w=c[S];A.setAttribute(S,new Je(w.array,w.itemSize,w.normalized))}_t.prototype.copy.call(M,p),this.parser.assignFinalMaterial(M),d.push(M)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}},Vp="glTF",zo=12,Op={JSON:1313821514,BIN:5130562},Ff=class{constructor(e){this.name=Ye.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,zo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Vp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-zo,s=new DataView(e,zo),o=0;for(;o<i;){let a=s.getUint32(o,!0);o+=4;let c=s.getUint32(o,!0);if(o+=4,c===Op.JSON){let l=new Uint8Array(e,zo+o,a);this.content=n.decode(l)}else if(c===Op.BIN){let l=zo+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Bf=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ye.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(let h in o){let u=zf[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=zf[h]||h.toLowerCase();if(o[h]!==void 0){let f=n.accessors[e.attributes[h]],d=Er[f.componentType];l[u]=d.name,c[u]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(u,f){i.decodeDracoFile(h,function(d){for(let p in d.attributes){let v=d.attributes[p],m=c[p];m!==void 0&&(v.normalized=m)}u(d)},a,l,fn,f)})})}},Df=class{constructor(){this.name=Ye.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),i=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*i,e.offset.x,-e.repeat.x*i,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},Uf=class{constructor(){this.name=Ye.KHR_MESH_QUANTIZATION}},ol=class extends ai{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=i-t,u=(n-t)/h,f=u*u,d=f*u,p=e*l,v=p-l,m=-2*d+3*f,g=d-f,x=1-m,M=g-f+u;for(let A=0;A!==a;A++){let S=o[v+A+a],w=o[v+A+c]*h,y=o[p+A+a],_=o[p+A]*h;s[A]=x*S+M*w+m*y+g*_}return s}},$3=new Mt,Of=class extends ol{interpolate_(e,t,n,i){let s=super.interpolate_(e,t,n,i);return $3.fromArray(s).normalize().toArray(s),s}},qn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Er={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},zp={9728:Ct,9729:pt,9984:Ya,9985:vr,9986:Es,9987:An},Hp={33071:hn,33648:js,10497:ri},df={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},zf={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},is={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},j3={CUBICSPLINE:void 0,LINEAR:vs,STEP:gs},pf={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};ib=new Ie,kf=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Z3,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let c=a.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&o<98?(this.textureLoader=new uo(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new xo(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new fr(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Ns(s,a,i),gi(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(let c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){let o=t[i].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){let o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),s=(o,a)=>{let c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(let[l,h]of o.children.entries())s(h,a.children[l])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ye.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(s,o){n.load(Fi.resolveURL(t.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let o=df[i.type],a=Er[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new jt(l,o,c))}let s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){let a=o[0],c=df[i.type],l=Er[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,p=i.normalized===!0,v,m;if(d&&d!==u){let g=Math.floor(f/d),x="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+g+":"+i.count,M=t.cache.get(x);M||(v=new l(a,g*d,i.count*d/h),M=new ir(v,d/h),t.cache.add(x,M)),m=new sr(M,c,f%d/h,p)}else a===null?v=new l(i.count*c):v=new l(a,f,i.count*c),m=new jt(v,c,p);if(i.sparse!==void 0){let g=df.SCALAR,x=Er[i.sparse.indices.componentType],M=i.sparse.indices.byteOffset||0,A=i.sparse.values.byteOffset||0,S=new x(o[1],M,i.sparse.count*g),w=new l(o[2],A,i.sparse.count*c);a!==null&&(m=new jt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let y=0,_=S.length;y<_;y++){let P=S[y];if(m.setX(P,w[y*c]),c>=2&&m.setY(P,w[y*c+1]),c>=3&&m.setZ(P,w[y*c+2]),c>=4&&m.setW(P,w[y*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=p}return m})}loadTexture(e){let t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s],a=this.textureLoader;if(o.uri){let c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){let i=this,s=this.json,o=s.textures[e],a=s.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let f=(s.samplers||{})[o.sampler]||{};return h.magFilter=zp[f.magFilter]||pt,h.minFilter=zp[f.minFilter]||An,h.wrapS=Hp[f.wrapS]||ri,h.wrapT=Hp[f.wrapT]||ri,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Ct&&h.minFilter!==pt,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());let o=i.images[e],a=self.URL||self.webkitURL,c=o.uri||"",l=!1,h;if(t.isKTX2Loader===!0&&o.bufferView!==void 0)h=n.getDependency("bufferView",o.bufferView).then(function(f){return new Promise(function(d,p){t.parse(f,d,p)})});else{if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(f){l=!0;let d=new Blob([f],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");h=Promise.resolve(c).then(function(f){return new Promise(function(d,p){let v=d;t.isImageBitmapLoader===!0&&(v=function(m){let g=new Ut(m);g.needsUpdate=!0,d(g)}),t.load(Fi.resolveURL(f,s.path),v,void 0,p)})})}let u=h.then(function(f){return l===!0&&a.revokeObjectURL(c),gi(f,o),f.userData.mimeType=o.mimeType||nb(o.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),f});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){let s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[Ye.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[Ye.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let c=s.associations.get(o);o=s.extensions[Ye.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new cr,vn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new ar,vn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||s||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),s&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return oi}loadMaterial(e){let t=this,n=this.json,i=this.extensions,s=n.materials[e],o,a={},c=s.extensions||{},l=[];if(c[Ye.KHR_MATERIALS_UNLIT]){let u=i[Ye.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,s,t))}else{let u=s.pbrMetallicRoughness||{};if(a.color=new Te(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let f=u.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],fn),a.opacity=f[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,xt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=sn);let h=s.alphaMode||pf.OPAQUE;if(h===pf.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===pf.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==kn&&(l.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Oe(1,1),s.normalTexture.scale!==void 0)){let u=s.normalTexture.scale;a.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&o!==kn&&(l.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==kn){let u=s.emissiveFactor;a.emissive=new Te().setRGB(u[0],u[1],u[2],fn)}return s.emissiveTexture!==void 0&&o!==kn&&l.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,xt)),Promise.all(l).then(function(){let u=new o(a);return s.name&&(u.name=s.name),gi(u,s),t.associations.set(u,{materials:e}),s.extensions&&Ns(i,u,s),u})}createUniqueName(e){let t=ct.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[Ye.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return kp(c,a,t)})}let o=[];for(let a=0,c=e.length;a<c;a++){let l=e[a],h=tb(l),u=i[h];if(u)o.push(u.promise);else{let f;l.extensions&&l.extensions[Ye.KHR_DRACO_MESH_COMPRESSION]?f=s(l):f=kp(new Xt,l,t),l.mode===qn.TRIANGLE_STRIP?f=f.then(d=>uf(d,Eo)):l.mode===qn.TRIANGLE_FAN&&(f=f.then(d=>uf(d,yr))),i[h]={primitive:l,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,i=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let c=0,l=o.length;c<l;c++){let h=o[c].material===void 0?J3(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(async function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let d=0,p=h.length;d<p;d++){let v=h[d],m=o[d],g,x=l[d];if(m.mode===qn.TRIANGLES||m.mode===qn.TRIANGLE_STRIP||m.mode===qn.TRIANGLE_FAN||m.mode===void 0){let M=s.isSkinnedMesh===!0,A=v.hasAttribute("skinIndex")&&v.hasAttribute("skinWeight");M&&A===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),g=M&&A?new eo(v,x):new it(v,x),g.isSkinnedMesh===!0&&g.normalizeSkinWeights()}else if(m.mode===qn.LINES)g=new no(v,x);else if(m.mode===qn.LINE_STRIP)g=new _s(v,x);else if(m.mode===qn.LINE_LOOP)g=new io(v,x);else if(m.mode===qn.POINTS)g=new so(v,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(g.geometry.morphAttributes).length>0&&eb(g,s),g.name=t.createUniqueName(s.name||"mesh_"+e),gi(g,s),m.extensions&&Ns(i,g,m),t.assignFinalMaterial(g),u.push(g)}for(let d=0,p=u.length;d<p;d++)t.associations.set(u[d],{meshes:e,primitives:d});if(u.length===1)return s.extensions&&Ns(i,u[0],s),u[0];let f=new qt;s.extensions&&Ns(i,f,s),t.associations.set(f,{meshes:e});for(let d=0,p=u.length;d<p;d++)f.add(u[d]);return f})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Lt(Fc.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Ni(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),gi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let s=i.pop(),o=i,a=[],c=[];for(let l=0,h=o.length;l<h;l++){let u=o[l];if(u){a.push(u);let f=new Ie;s!==null&&f.fromArray(s.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new to(a,c)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let u=0,f=i.channels.length;u<f;u++){let d=i.channels[u],p=i.samplers[d.sampler],v=d.target,m=v.node,g=i.parameters!==void 0?i.parameters[p.input]:p.input,x=i.parameters!==void 0?i.parameters[p.output]:p.output;v.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",g)),c.push(this.getDependency("accessor",x)),l.push(p),h.push(v))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let f=u[0],d=u[1],p=u[2],v=u[3],m=u[4],g=[];for(let M=0,A=f.length;M<A;M++){let S=f[M],w=d[M],y=p[M],_=v[M],P=m[M];if(S===void 0)continue;S.updateMatrix&&S.updateMatrix();let R=n._createAnimationTracks(S,w,y,_,P);if(R)for(let I=0;I<R.length;I++)g.push(R[I])}let x=new As(s,void 0,g);return gi(x,i),x})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){let o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=i.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));let c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),c]).then(function(l){let h=l[0],u=l[1],f=l[2];f!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(f,ib)});for(let d=0,p=u.length;d<p;d++)h.add(u[d]);if(h.userData.pivot!==void 0&&u.length>0){let d=h.userData.pivot,p=u[0];h.pivot=new z().fromArray(d),h.position.x-=d[0],h.position.y-=d[1],h.position.z-=d[2],p.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let s=t.nodes[e],o=s.name?i.createUniqueName(s.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(l){return i._getNodeRef(i.cameraCache,s.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(s.isBone===!0?h=new rr:l.length>1?h=new qt:l.length===1?h=l[0]:h=new _t,h!==l[0])for(let u=0,f=l.length;u<f;u++)h.add(l[u]);if(s.name&&(h.userData.name=s.name,h.name=o),gi(h,s),s.extensions&&Ns(n,h,s),s.matrix!==void 0){let u=new Ie;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(s.mesh!==void 0&&i.meshCache.refs[s.mesh]>1){let u=i.associations.get(h);i.associations.set(h,{...u})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,s=new qt;n.name&&(s.name=i.createUniqueName(n.name)),gi(s,n),n.extensions&&Ns(t,s,n);let o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++){let f=c[h];f.parent!==null?s.add(Bp(f)):s.add(f)}let l=h=>{let u=new Map;for(let[f,d]of i.associations)(f instanceof vn||f instanceof Ut)&&u.set(f,d);return h.traverse(f=>{let d=i.associations.get(f);d!=null&&u.set(f,d)}),u};return i.associations=l(s),s})}_createAnimationTracks(e,t,n,i,s){let o=[],a=e.name?e.name:e.uuid,c=[];function l(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}is[s.path]===is.weights?(l(e),e.isGroup&&e.children.forEach(l)):c.push(a);let h;switch(is[s.path]){case is.weights:h=Ci;break;case is.rotation:h=Pi;break;case is.translation:case is.scale:h=Ji;break;default:switch(n.itemSize){case 1:h=Ci;break;case 2:case 3:default:h=Ji;break}break}let u=i.interpolation!==void 0?j3[i.interpolation]:vs,f=this._getArrayFromAccessor(n);for(let d=0,p=c.length;d<p;d++){let v=new h(c[d]+"."+is[s.path],t.array,f,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(v),o.push(v)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Hf(t.constructor),i=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof Pi?Of:ol;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}});function ss(r){let e=r>>>0;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^0,((t^t>>>14)>>>0)/4294967296}}function Wp(r,e={}){return r.onBeforeCompile=t=>{Object.assign(t.uniforms,Kt),t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
         vec4 instancedMaybe(vec4 p){
           #ifdef USE_INSTANCING
             return instanceMatrix * p;
           #else
             return p;
           #endif
         }
         varying vec3 vFogWorldPos;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vFogWorldPos = (modelMatrix * instancedMaybe(vec4(transformed,1.0))).xyz;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vFogWorldPos;
`+Xn).replace("#include <dithering_fragment>",`gl_FragColor.rgb = cityFog(gl_FragColor.rgb, vFogWorldPos, cameraPosition);
#include <dithering_fragment>`)},r.customProgramCacheKey=()=>"cityfog1"+(e.key||""),r}var Rr,wt,Kt,Xn,rs=Dt(()=>{Pn();Rr=(r,e,t)=>Math.min(t,Math.max(e,r)),wt={uTime:{value:0},uRainAmt:{value:1},uCamVel:{value:new z}},Kt={uFogDensity:{value:.0027},uFogHeightFall:{value:.012},uFogLow:{value:new Te(1253679)},uFogHigh:{value:new Te(725536)},uFogGlow:{value:new Te(2905208)},uCamY:{value:40}},Xn=`
  uniform float uFogDensity, uFogHeightFall, uCamY;
  uniform vec3 uFogLow, uFogHigh, uFogGlow;
  vec3 cityFog(vec3 col, vec3 wpos, vec3 camPos) {
    float dist = distance(wpos, camPos);
    float hAvg = max(0.5 * (wpos.y + camPos.y), 0.0);
    float dens = uFogDensity * (1.0 + 1.1 * exp(-hAvg * uFogHeightFall * 3.2));
    float f = 1.0 - exp(-dist * dens);
    f = clamp(f, 0.0, 1.0);
    vec3 fogCol = mix(uFogLow, uFogHigh, clamp(wpos.y / 130.0, 0.0, 1.0));
    fogCol += uFogGlow * exp(-max(wpos.y, 0.0) * 0.02) * 0.4;
    return mix(col, fogCol, f);
  }
`});var Xp,qp=Dt(()=>{Xp="data:application/octet-stream;base64,Z2xURgIAAAAAewEA5BMAAEpTT057ImFzc2V0Ijp7InZlcnNpb24iOiIyLjAiLCJnZW5lcmF0b3IiOiJUSFJFRS5HTFRGRXhwb3J0ZXIifSwic2NlbmVzIjpbeyJub2RlcyI6WzBdLCJuYW1lIjoiQXV4U2NlbmUifV0sInNjZW5lIjowLCJub2RlcyI6W3sibWVzaCI6MH1dLCJidWZmZXJWaWV3cyI6W3siYnVmZmVyIjowLCJieXRlT2Zmc2V0IjowLCJieXRlTGVuZ3RoIjo1OTY0LCJ0YXJnZXQiOjM0OTYyLCJieXRlU3RyaWRlIjoxMn0seyJidWZmZXIiOjAsImJ5dGVPZmZzZXQiOjU5NjQsImJ5dGVMZW5ndGgiOjU5NjQsInRhcmdldCI6MzQ5NjIsImJ5dGVTdHJpZGUiOjEyfSx7ImJ1ZmZlciI6MCwiYnl0ZU9mZnNldCI6MTE5MjgsImJ5dGVMZW5ndGgiOjM5NzYsInRhcmdldCI6MzQ5NjIsImJ5dGVTdHJpZGUiOjh9LHsiYnVmZmVyIjowLCJieXRlT2Zmc2V0IjoxNTkwNCwiYnl0ZUxlbmd0aCI6NTk2NCwidGFyZ2V0IjozNDk2MiwiYnl0ZVN0cmlkZSI6MTJ9LHsiYnVmZmVyIjowLCJieXRlT2Zmc2V0IjoyMTg2OCwiYnl0ZUxlbmd0aCI6NTk2NCwidGFyZ2V0IjozNDk2MiwiYnl0ZVN0cmlkZSI6MTJ9LHsiYnVmZmVyIjowLCJieXRlT2Zmc2V0IjoyNzgzMiwiYnl0ZUxlbmd0aCI6NTk2NCwidGFyZ2V0IjozNDk2MiwiYnl0ZVN0cmlkZSI6MTJ9LHsiYnVmZmVyIjowLCJieXRlT2Zmc2V0IjozMzc5NiwiYnl0ZUxlbmd0aCI6NTk2NCwidGFyZ2V0IjozNDk2MiwiYnl0ZVN0cmlkZSI6MTJ9LHsiYnVmZmVyIjowLCJieXRlT2Zmc2V0IjozOTc2MCwiYnl0ZUxlbmd0aCI6NTk2NCwidGFyZ2V0IjozNDk2MiwiYnl0ZVN0cmlkZSI6MTJ9LHsiYnVmZmVyIjowLCJieXRlT2Zmc2V0Ijo0NTcyNCwiYnl0ZUxlbmd0aCI6NTk2NCwidGFyZ2V0IjozNDk2MiwiYnl0ZVN0cmlkZSI6MTJ9LHsiYnVmZmVyIjowLCJieXRlT2Zmc2V0Ijo1MTY4OCwiYnl0ZUxlbmd0aCI6NTk2NCwidGFyZ2V0IjozNDk2MiwiYnl0ZVN0cmlkZSI6MTJ9LHsiYnVmZmVyIjowLCJieXRlT2Zmc2V0Ijo1NzY1MiwiYnl0ZUxlbmd0aCI6NTk2NCwidGFyZ2V0IjozNDk2MiwiYnl0ZVN0cmlkZSI6MTJ9LHsiYnVmZmVyIjowLCJieXRlT2Zmc2V0Ijo2MzYxNiwiYnl0ZUxlbmd0aCI6NTk2NCwidGFyZ2V0IjozNDk2MiwiYnl0ZVN0cmlkZSI6MTJ9LHsiYnVmZmVyIjowLCJieXRlT2Zmc2V0Ijo2OTU4MCwiYnl0ZUxlbmd0aCI6NTk2NCwidGFyZ2V0IjozNDk2MiwiYnl0ZVN0cmlkZSI6MTJ9LHsiYnVmZmVyIjowLCJieXRlT2Zmc2V0Ijo3NTU0NCwiYnl0ZUxlbmd0aCI6NTk2NCwidGFyZ2V0IjozNDk2MiwiYnl0ZVN0cmlkZSI6MTJ9LHsiYnVmZmVyIjowLCJieXRlT2Zmc2V0Ijo4MTUwOCwiYnl0ZUxlbmd0aCI6NTk2NCwidGFyZ2V0IjozNDk2MiwiYnl0ZVN0cmlkZSI6MTJ9LHsiYnVmZmVyIjowLCJieXRlT2Zmc2V0Ijo4NzQ3MiwiYnl0ZUxlbmd0aCI6Mzc1NiwidGFyZ2V0IjozNDk2M30seyJidWZmZXIiOjAsImJ5dGVPZmZzZXQiOjkxMjI4LCJieXRlTGVuZ3RoIjo1Mn0seyJidWZmZXIiOjAsImJ5dGVPZmZzZXQiOjkxMjgwLCJieXRlTGVuZ3RoIjo2MjR9XSwiYnVmZmVycyI6W3siYnl0ZUxlbmd0aCI6OTE5MDR9XSwiYWNjZXNzb3JzIjpbeyJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6NDk3LCJtYXgiOls0MC41LDE5Ljc5OTk5OTIzNzA2MDU0NywyNC4zOTk5OTk2MTg1MzAyNzNdLCJtaW4iOlstMzksLTEzLjg5OTk5OTYxODUzMDI3MywtNzYuMDk5OTk4NDc0MTIxMV0sInR5cGUiOiJWRUMzIiwiYnVmZmVyVmlldyI6MH0seyJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6NDk3LCJtYXgiOlsxLDAuNzQ4NDE0MDk5MjE2NDYxMiwwLjYzODI4MzE5MzExMTQxOTddLCJtaW4iOlswLjAwMDc3Mzk5Mzc4NjQyNDM5ODQsMCwwXSwidHlwZSI6IlZFQzMiLCJidWZmZXJWaWV3IjoxfSx7ImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50Ijo0OTcsIm1heCI6WzEsMV0sIm1pbiI6WzAsMF0sInR5cGUiOiJWRUMyIiwiYnVmZmVyVmlldyI6Mn0seyJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6NDk3LCJtYXgiOlswLDAsMF0sIm1pbiI6WzAsMCwwXSwidHlwZSI6IlZFQzMiLCJidWZmZXJWaWV3IjozfSx7ImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50Ijo0OTcsIm1heCI6WzguMjAwMDAwNzYyOTM5NDUzLDIxLjIwMDAwMDc2MjkzOTQ1MywwLjgwMDAwMDE5MDczNDg2MzNdLCJtaW4iOlstOS40MDAwMDE1MjU4Nzg5MDYsLTAuNzAwMDAwNzYyOTM5NDUzMSwtMTkuNTk5OTk4NDc0MTIxMDk0XSwidHlwZSI6IlZFQzMiLCJidWZmZXJWaWV3Ijo0fSx7ImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50Ijo0OTcsIm1heCI6WzE0LjE5OTk5ODg1NTU5MDgyLDU1Ljc5OTk5OTIzNzA2MDU1LDMuNzk5OTk5OTUyMzE2Mjg0XSwibWluIjpbLTE2LjUsLTEuNjAwMDAwMzgxNDY5NzI2NiwtMjguMTAwMDAwMzgxNDY5NzI3XSwidHlwZSI6IlZFQzMiLCJidWZmZXJWaWV3Ijo1fSx7ImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50Ijo0OTcsIm1heCI6WzIxLjQwMDAwMTUyNTg3ODkwNiw2Ni41LDYuNV0sIm1pbiI6Wy0yNC4yOTk5OTkyMzcwNjA1NDcsLTIsLTI0Ljc5OTk5OTIzNzA2MDU0N10sInR5cGUiOiJWRUMzIiwiYnVmZmVyVmlldyI6Nn0seyJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6NDk3LCJtYXgiOlsxNS4xOTk5OTk4MDkyNjUxMzcsNjYuMDk5OTk4NDc0MTIxMSw3XSwibWluIjpbLTE0LjQ5OTk5OTA0NjMyNTY4NCwtMS4zMDAwMDAxOTA3MzQ4NjMzLC0xNy42MDAwMDAzODE0Njk3MjddLCJ0eXBlIjoiVkVDMyIsImJ1ZmZlclZpZXciOjd9LHsiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjQ5NywibWF4IjpbOC4wOTk5OTk0Mjc3OTU0MSw1Ni4zMDAwMDMwNTE3NTc4MSw4LjVdLCJtaW4iOlstNy41MDAwMDA5NTM2NzQzMTYsLTMuNzAwMDAwMDQ3NjgzNzE2LC00LjkwMDAwMDA5NTM2NzQzMl0sInR5cGUiOiJWRUMzIiwiYnVmZmVyVmlldyI6OH0seyJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6NDk3LCJtYXgiOlsxMS45MDAwMDE1MjU4Nzg5MDYsMzYuNSwxMy4xOTk5OTk4MDkyNjUxMzddLCJtaW4iOlstMTIuOTAwMDAxNTI1ODc4OTA2LC04LjY5OTk5ODg1NTU5MDgyLC0wLjQwMDAwMDU3MjIwNDU4OTg0XSwidHlwZSI6IlZFQzMiLCJidWZmZXJWaWV3Ijo5fSx7ImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50Ijo0OTcsIm1heCI6WzEzLjM5OTk5OTYxODUzMDI3MywxNS4wOTk5OTk0Mjc3OTU0MSwyMS4yMDAwMDA3NjI5Mzk0NTNdLCJtaW4iOlstMTQsLTE0LjE5OTk5ODg1NTU5MDgyLC0wLjVdLCJ0eXBlIjoiVkVDMyIsImJ1ZmZlclZpZXciOjEwfSx7ImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50Ijo0OTcsIm1heCI6WzEyLjY5OTk5ODg1NTU5MDgyLDQuNSwyMS44MDAwMDExNDQ0MDkxOF0sIm1pbiI6Wy0xMS4zMDAwMDExNDQ0MDkxOCwtMTkuNTk5OTk4NDc0MTIxMDk0LC0wLjQ5OTk5OTA0NjMyNTY4MzZdLCJ0eXBlIjoiVkVDMyIsImJ1ZmZlclZpZXciOjExfSx7ImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50Ijo0OTcsIm1heCI6WzYuMjk5OTk5MjM3MDYwNTQ3LDMuMTAwMDAwMTQzMDUxMTQ3NSwxOS4zOTk5OTk2MTg1MzAyNzNdLCJtaW4iOlstNi41OTk5OTg0NzQxMjEwOTQsLTI1LjEwMDAwMDM4MTQ2OTcyNywtMC43MDAwMDA3NjI5Mzk0NTMxXSwidHlwZSI6IlZFQzMiLCJidWZmZXJWaWV3IjoxMn0seyJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6NDk3LCJtYXgiOlsxMi44OTk5OTk2MTg1MzAyNzMsMy4xMDAwMDAxNDMwNTExNDc1LDEzLjM5OTk5OTYxODUzMDI3M10sIm1pbiI6Wy0xNywtMzEuNDAwMDAxNTI1ODc4OTA2LC0xLjY5OTk5OTgwOTI2NTEzNjddLCJ0eXBlIjoiVkVDMyIsImJ1ZmZlclZpZXciOjEzfSx7ImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50Ijo0OTcsIm1heCI6WzEwLDYuMzk5OTk5NjE4NTMwMjczLDExLjQwMDAwMDU3MjIwNDU5XSwibWluIjpbLTcuNTk5OTk4NDc0MTIxMDk0LC0yMi4yMDAwMDA3NjI5Mzk0NTMsLTAuNV0sInR5cGUiOiJWRUMzIiwiYnVmZmVyVmlldyI6MTR9LHsiY29tcG9uZW50VHlwZSI6NTEyMywiY291bnQiOjE4NzgsIm1heCI6WzQ5Nl0sIm1pbiI6WzBdLCJ0eXBlIjoiU0NBTEFSIiwiYnVmZmVyVmlldyI6MTV9LHsiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjEzLCJtYXgiOlsxLjIwMDAwMDA0NzY4MzcxNThdLCJtaW4iOlswXSwidHlwZSI6IlNDQUxBUiIsImJ1ZmZlclZpZXciOjE2fSx7ImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50IjoxNTYsIm1heCI6WzFdLCJtaW4iOlswXSwidHlwZSI6IlNDQUxBUiIsImJ1ZmZlclZpZXciOjE3fV0sIm1hdGVyaWFscyI6W3sicGJyTWV0YWxsaWNSb3VnaG5lc3MiOnsibWV0YWxsaWNGYWN0b3IiOjAsInJvdWdobmVzc0ZhY3RvciI6MX19XSwibWVzaGVzIjpbeyJ3ZWlnaHRzIjpbMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDBdLCJleHRyYXMiOnsidGFyZ2V0TmFtZXMiOlsicGFycm90X0FfMDAxIiwicGFycm90X0FfMDAyIiwicGFycm90X0Ff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YiwYO2IsGDsAAIA/EZg/P4dmIz8AAIA/EZg/P4dmIz/27As8YiwYO2IsGDv27As8YiwYO2IsGDsAAIA/EZg/P4dmIz8AAIA/EZg/P4dmIz/27As8YiwYO2IsGDsAAIA/EZg/P4dmIz8AAIA/EZg/P4dmIz8AAIA/EZg/P4dmIz8Ogiw/YxG0PAAAAAAOgiw/YxG0PAAAAAAOgiw/YxG0PAAAAAAAAIA/EZg/P4dmIz8AAIA/EZg/P4dmIz/27As8YiwYO2IsGDv27As8YiwYO2IsGDsAAIA/EZg/P4dmIz8AAIA/EZg/P4dmIz8AAIA/EZg/P4dmIz8AAIA/EZg/P4dmIz8AAIA/EZg/P4dmIz8Ogiw/YxG0PAAAAAAAAIA/EZg/P4dmIz/Y5Uo6AAAAAA75gDvY5Uo6AAAAAA75gDvY5Uo6AAAAAA75gDvY5Uo6AAAAAA75gDsAAIA/EZg/P4dmIz8AAIA/EZg/P4dmIz8AAIA/EZg/P4dmIz8Ogiw/YxG0PAAAAAAOgiw/YxG0PAAAAAAOgiw/YxG0PAAAAAAOgiw/YxG0PAAAAAByY1A9xdFRProHvD5yY1A9xdFRProHvD5yY1A9xdFRProHvD4Ogiw/YxG0PAAAAAAOgiw/YxG0PAAAAAAOgiw/YxG0PAAAAAAOgiw/YxG0PAAAAAAOgiw/YxG0PAAAAAAOgiw/YxG0PAAAAAAOgiw/YxG0PAAAAAByY1A9xdFRProHvD5yY1A9xdFRProHvD5yY1A9xdFRProHvD4Ogiw/YxG0PAAAAAAOgiw/YxG0PAAAAAAOgiw/YxG0PAAAAAAOgiw/YxG0PAAAAAAOgiw/YxG0PAAAAAAOgiw/YxG0PAAAAAAOgiw/YxG0PAAAAAAOgiw/YxG0PAAAAAAOgiw/YxG0PAAAAAAOgiw/YxG0PAAAAAAOgiw/YxG0PAAAAAAOgiw/YxG0PAAAAAAOgiw/YxG0PAAAAAAOgiw/YxG0PAAAAAAOgiw/YxG0PAAAAAByY1A9xdFRProHvD5yY1A9xdFRProHvD5yY1A9xdFRProHvD4Ogiw/YxG0PAAAAAAOgiw/YxG0PAAAAAAOgiw/YxG0PAAAAAAOgiw/YxG0PAAAAAAOgiw/YxG0PAAAAAAOgiw/YxG0PAAAAAAOgiw/YxG0PAAAAAAOgiw/YxG0PAAAAAAOgiw/YxG0PAAAAAAOgiw/YxG0PAAAAAAOgiw/YxG0PAAAAAAOgiw/YxG0PAAAAAAOgiw/YxG0PAAAAAAOgiw/YxG0PAAAAAAOgiw/YxG0PAAAAAAOgiw/YxG0PAAAAAByY1A9xdFRProHvD5yY1A9xdFRProHvD5yY1A9xdFRProHvD5yY1A9xdFRProHvD4Ogiw/YxG0PAAAAAAOgiw/YxG0PAAAAAAOgiw/YxG0PAAAAAAOgiw/YxG0PAAAAAAOgiw/YxG0PAAAAAAOgiw/YxG0PAAAAAAOgiw/YxG0PAAAAAAOgiw/YxG0PAAAAAAOgiw/YxG0PAAAAAAOgiw/YxG0PAAAAAAOgiw/YxG0PAAAAAAOgiw/YxG0PAAAAAAOgiw/YxG0PAAAAAAOgiw/YxG0PAAAAAAOgiw/YxG0PAAAAAAOgiw/YxG0PAAAAAAOgiw/YxG0PAAAAAByY1A9xdFRProHvD5yY1A9xdFRProHvD5yY1A9xdFRProHvD5yY1A9xdFRProHvD4Ssng+oLrsPlsNjD0Ssng+oLrsPlsNjD0Ssng+oLrsPlsNjD0Ogiw/YxG0PAAAAAAOgiw/YxG0PAAAAAAOgiw/YxG0PAAAAAAOgiw/YxG0PAAAAAByY1A9xdFRProHvD4Ogiw/YxG0PAAAAAAOgiw/YxG0PAAAAAByY1A9xdFRProHvD5yY1A9xdFRProHvD5yY1A9xdFRProHvD5yY1A9xdFRProHvD5yY1A9xdFRProHvD4Ogiw/YxG0PAAAAAByY1A9xdFRProHvD4Ogiw/YxG0PAAAAAAOgiw/YxG0PAAAAAASsng+oLrsPlsNjD0Ssng+oLrsPlsNjD1yY1A9xdFRProHvD5yY1A9xdFRProHvD5yY1A9xdFRProHvD5yY1A9xdFRProHvD5yY1A9xdFRProHvD5yY1A9xdFRProHvD4Ogiw/YxG0PAAAAAAOgiw/YxG0PAAAAAByY1A9xdFRProHvD5yY1A9xdFRProHvD4Ogiw/YxG0PAAAAAAOgiw/YxG0PAAAAAAOgiw/YxG0PAAAAAAOgiw/YxG0PAAAAAAOgiw/YxG0PAAAAAByY1A9xdFRProHvD5yY1A9xdFRProHvD5yY1A9xdFRProHvD5yY1A9xdFRProHvD5yY1A9xdFRProHvD5yY1A9xdFRProHvD5yY1A9xdFRProHvD4Ogiw/YxG0PAAAAAAOgiw/YxG0PAAAAAByY1A9xdFRProHvD5yY1A9xdFRProHvD5yY1A9xdFRProHvD4Ogiw/YxG0PAAAAAByY1A9xdFRProHvD5yY1A9xdFRProHvD4Ogiw/YxG0PAAAAAByY1A9xdFRProHvD5yY1A9xdFRProHvD4Ogiw/YxG0PAAAAAAOgiw/YxG0PAAAAAByY1A9xdFRProHvD4Ogiw/YxG0PAAAAAAOgiw/YxG0PAAAAAAOgiw/YxG0PAAAAAAOgiw/YxG0PAAAAAAOgiw/YxG0PAAAAAByY1A9xdFRProHvD5yY1A9xdFRProHvD5yY1A9xdFRProHvD5yY1A9xdFRProHvD5yY1A9xdFRProHvD5yY1A9xdFRProHvD5yY1A9xdFRProHvD4Ogiw/YxG0PAAAAAByY1A9xdFRProHvD5yY1A9xdFRProHvD5yY1A9xdFRProHvD4Ogiw/YxG0PAAAAAAOgiw/YxG0PAAAAAByY1A9xdFRProHvD5yY1A9xdFRProHvD4Ogiw/YxG0PAAAAAAOgiw/YxG0PAAAAAAOgiw/YxG0PAAAAAByY1A9xdFRProHvD5yY1A9xdFRProHvD5yY1A9xdFRProHvD4Ogiw/YxG0PAAAAAAOgiw/YxG0PAAAAAAOgiw/YxG0PAAAAAAOgiw/YxG0PAAAAAByY1A9xdFRProHvD5yY1A9xdFRProHvD5yY1A9xdFRProHvD4Ogiw/YxG0PAAAAAAOgiw/YxG0PAAAAAAOgiw/YxG0PAAAAAAOgiw/YxG0PAAAAAAOgiw/YxG0PAAAAAAOgiw/YxG0PAAAAAByY1A9xdFRProHvD5yY1A9xdFRProHvD4Ogiw/YxG0PAAAAAAOgiw/YxG0PAAAAAAOgiw/YxG0PAAAAAAOgiw/YxG0PAAAAAAOgiw/YxG0PAAAAAAOgiw/YxG0PAAAAAAOgiw/YxG0PAAAAAAOgiw/YxG0PAAAAAAOgiw/YxG0PAAAAAAOgiw/YxG0PAAAAAAOgiw/YxG0PAAAAAAOgiw/YxG0PAAAAAAOgiw/YxG0PAAAAAAOgiw/YxG0PAAAAAAOgiw/YxG0PAAAAAByY1A9xdFRProHvD5yY1A9xdFRProHvD5yY1A9xdFRProHvD4Ogiw/YxG0PAAAAAAOgiw/YxG0PAAAAAAOgiw/YxG0PAAAAAAOgiw/YxG0PAAAAAAOgiw/YxG0PAAAAAAOgiw/YxG0PAAAAAAOgiw/YxG0PAAAAAAOgiw/YxG0PAAAAAAOgiw/YxG0PAAAAAAOgiw/YxG0PAAAAAAOgiw/YxG0PAAAAAAOgiw/YxG0PAAAAAAOgiw/YxG0PAAAAAAOgiw/YxG0PAAAAAAOgiw/YxG0PAAAAAAOgiw/YxG0PAAAAAAAAIA/EZg/P4dmIz8AAIA/EZg/P4dmIz8AAIA/EZg/P4dmIz8AAIA/EZg/P4dmIz8Ogiw/YxG0PAAAAAAOgiw/YxG0PAAAAAAOgiw/YxG0PAAAAAAOgiw/YxG0PAAAAAAOgiw/YxG0PAAAAAAOgiw/YxG0PAAAAAByY1A9xdFRProHvD5yY1A9xdFRProHvD4Ogiw/YxG0PAAAAAAOgiw/YxG0PAAAAAAOgiw/YxG0PAAAAAAOgiw/YxG0PAAAAAAOgiw/YxG0PAAAAAAOgiw/YxG0PAAAAAAOgiw/YxG0PAAAAAAOgiw/YxG0PAAAAAAOgiw/YxG0PAAAAAAOgiw/YxG0PAAAAAAOgiw/YxG0PAAAAAAOgiw/YxG0PAAAAACiDgg+oVWgPStJ9D2iDgg+oVWgPStJ9D2iDgg+oVWgPStJ9D2iDgg+oVWgPStJ9D2iDgg+oVWgPStJ9D2iDgg+oVWgPStJ9D2iDgg+oVWgPStJ9D2iDgg+oVWgPStJ9D2iDgg+oVWgPStJ9D2iDgg+oVWgPStJ9D2iDgg+oVWgPStJ9D2iDgg+oVWgPStJ9D2iDgg+oVWgPStJ9D2iDgg+oVWgPStJ9D2iDgg+oVWgPStJ9D0Ogiw/YxG0PAAAAAAOgiw/YxG0PAAAAAAOgiw/YxG0PAAAAAAOgiw/YxG0PAAAAAAOgiw/YxG0PAAAAACiDgg+oVWgPStJ9D2iDgg+oVWgPStJ9D2iDgg+oVWgPStJ9D2iDgg+oVWgPStJ9D2iDgg+oVWgPStJ9D0AAIA/EZg/P4dmIz8AAIA/EZg/P4dmIz8AAIA/EZg/P4dmIz8AAIA/EZg/P4dmIz9yY1A9xdFRProHvD5yY1A9xdFRProHvD5yY1A9xdFRProHvD5yY1A9xdFRProHvD4Ssng+oLrsPlsNjD0Ssng+oLrsPlsNjD0Ssng+oLrsPlsNjD0Ogiw/YxG0PAAAAAAOgiw/YxG0PAAAAAAOgiw/YxG0PAAAAAAOgiw/YxG0PAAAAAByY1A9xdFRProHvD4Ogiw/YxG0PAAAAAAOgiw/YxG0PAAAAAAAAIA/EZg/P4dmIz8AAIA/EZg/P4dmIz9yY1A9xdFRProHvD5yY1A9xdFRProHvD5yY1A9xdFRProHvD5yY1A9xdFRProHvD5yY1A9xdFRProHvD4Ogiw/YxG0PAAAAAByY1A9xdFRProHvD4Ssng+oLrsPlsNjD0Ssng+oLrsPlsNjD1yY1A9xdFRProHvD5yY1A9xdFRProHvD5yY1A9xdFRProHvD5yY1A9xdFRProHvD5yY1A9xdFRProHvD5yY1A9xdFRProHvD4Ogiw/YxG0PAAAAAAOgiw/YxG0PAAAAAByY1A9xdFRProHvD5yY1A9xdFRProHvD4Ogiw/YxG0PAAAAAAOgiw/YxG0PAAAAAAOgiw/YxG0PAAAAAAOgiw/YxG0PAAAAAByY1A9xdFRProHvD5yY1A9xdFRProHvD5yY1A9xdFRProHvD5yY1A9xdFRProHvD5yY1A9xdFRProHvD5yY1A9xdFRProHvD5yY1A9xdFRProHvD4Ogiw/YxG0PAAAAAAOgiw/YxG0PAAAAAByY1A9xdFRProHvD5yY1A9xdFRProHvD5yY1A9xdFRProHvD4Ogiw/YxG0PAAAAAByY1A9xdFRProHvD5yY1A9xdFRProHvD4Ogiw/YxG0PAAAAAByY1A9xdFRProHvD5yY1A9xdFRProHvD4Ogiw/YxG0PAAAAAByY1A9xdFRProHvD5yY1A9xdFRProHvD4Ogiw/YxG0PAAAAAAOgiw/YxG0PAAAAAAOgiw/YxG0PAAAAAByY1A9xdFRProHvD5yY1A9xdFRProHvD5yY1A9xdFRProHvD5yY1A9xdFRProHvD5yY1A9xdFRProHvD5yY1A9xdFRProHvD4Ogiw/YxG0PAAAAAByY1A9xdFRProHvD5yY1A9xdFRProHvD5yY1A9xdFRProHvD4Ogiw/YxG0PAAAAAByY1A9xdFRProHvD5yY1A9xdFRProHvD4Ogiw/YxG0PAAAAAByY1A9xdFRProHvD5yY1A9xdFRProHvD4Ogiw/YxG0PAAAAAByY1A9xdFRProHvD5yY1A9xdFRProHvD4Ogiw/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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKCZmb4Azcy9AAAAANDMzL4AAAAAAAAAANDMzL4AAAAAAAAAAKCZmb4Azcy9AAAAAMDMTL4Azcy9AAAAAODMTL4Azcy9AAAAAODMTL4Azcy9AAAAAKCZmb4AAAAAAAAAANDMzL4Azcy9AAAAAM3MzL4AAAAAAAAAAMzMzL4AAAAAAAAAAJiZmb4AAAAAAAAAAJiZmb4AAAAAAAAAAMzMzL0AAAAAAAAAAAAAAAAAzcy9AAAAANDMzL0AAAAAAAAAAMDMzL0Azcy9AAAAANDMzL0AAAAAAAAAAMjMzL0Azcy9AAAAAAAAAAAAzMy9AAAAAODMzL0AAAAAAAAAANDMzL4AAAAAAAAAAMjMzL4AAAAAAAAAAMjMTL4AAAAAAAAAAMjMTL4AAAAAAAAAAMzMTL4AAAAAAAAAAJiZmb4AAAAAAAAAANDMzL4AAAAAAAAAANDMzL0AAAAAAAAAANDMzL0AAAAAAAAAAMjMzL0AAAAAAAAAANDMzL0AAAAAAAAAAMjMTL4AAAAAAAAAAMDMzL0Azcy9AAAAAMzMTL4AAAAAAAAAAJiZmb4AAAAAAAAAAMDMTL6AzMy9AAAAANDMTL4Azcy9AAAAAODMTL4Azcy9AAAAAMDMzL0Azcy9AAAAAODMTL4Azcy9AAAAAADNzL0AzUy+AAAAAADNzL0AzUy+AAAAAMDMzL0Azcy9AAAAAMDMzL0Azcy9AAAAAMjMTL4AAAAAAAAAAMjMTL4Azcy9AAAAANDMzL0Azcw9AAAAAMjMTL4AAAAAAAAAAMzMTL4AAAAAAAAAAMjMTL4AAAAAAAAAAJiZmb4AAAAAAAAAAMjMzL0Azcy9AAAAAMjMzL0Azcy9AAAAAMjMzL0AAAAAAAAAAMjMzL0Azcy9AAAAAODMzL0Azcw9AAAAAAAAAAAAzcy9AAAAAAAAAAAAzcy9AAAAAMDMTL4Azcy9AAAAAMDMzL0Azcy9AAAAAODMTL4Azcy9AAAAAODMTL4Azcy9AAAAAMDMzL0Azcy9AAAAAADNzL0AzUy+AAAAANDMTL4Azcy9AAAAAMDMTL4Azcy9AAAAAMjMTL4AAAAAAAAAANDMzL0AAAAAAAAAANDMTL4Azcy9AAAAAMDMTL4Azcy9AAAAAMDMTL4Azcy9AAAAAMDMTL6AzMy9AAAAAKCZmb4AAAAAAAAAAODMTL4Azcy9AAAAAODMTL4Azcy9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AAAAADAzM7+AzMy9AAAAADAzM7+AzMy9AAAAAKCZGb+AzMy9AAAAADAzM78Azcy9AAAAAEAzM78AzUy+AAAAADAzM7+AzMy9AAAAAJCZGb/AzEy+AAAAAEAzM78Azcy9AAAAADAzM78Azcy9AAAAADAzM7+AzMy9AAAAADAzM78Azcy9AAAAADAzM7+AzMy9AAAAAJiZGb+AzMy9AAAAADAzM78Azcy9AAAAADAzM7+AzMy9AAAAADAzM78Azcy9AAAAADgzM78Azcy9AAAAADgzM78Azcy9AAAAAMDMTL4Azcy9AAAAAODMTL4Azcy9AAAAAMDMzL0Azcy9AAAAAMDMzL0Azcy9AAAAAODMTL4Azcy9AAAAAADNzL0AzUy+AAAAANDMTL4Azcy9AAAAAMDMTL4Azcy9AAAAAMjMTL4AAAAAAAAAANDMzL0AAAAAAAAAANDMTL4Azcy9AAAAAMDMTL4Azcy9AAAAAMDMTL6AzMy9AAAAAKCZmb4AAAAAAAAAAMDMTL4Azcy9AAAAAODMTL4Azcy9AAAAAODMTL4Azcy9AAAAAODMTL4Azcy9AAAAAMDMTL4Azcy9AAAAANDMTL4Azcy9AAAAAMDMTL4AAAAAAAAAAODMTL4Azcy9AAAAAODMTL4Azcy9AAAAAMDMTL4AAAAAAAAAAJiZmb4AAAAAAAAAAM3MzL4AAAAAAAAAAKCZmb4AAAAAAAAAANDMzL4Azcy9AAAAADAzM78AzUy+AAAAANDMTL8AAAAAAAAAADAzM7+AzMy9AAAAANDMTL8Azcy9AAAAAAAAAL8AzUy+AAAAANDMzL4AzUy+AAAAAAAAAL/AzEy+AAAAAJyZGb+AzMy9AAAAAMzMTL8Azcy9AAAAADMzM78AAAAAAAAAAMzMTL8Azcw9AAAAADIzM78AAAAAAAAAADQzM78AAAAAAAAAAJqZmb4Azcy9AAAAANDMTL4Azcy9AAAAAJiZmb4AzMy9AAAAAJCZmb4AzUy+AAAAAJiZmb4Azcy9AAAAAJiZmb4Azcy9AAAAAODMTL6AzEy+AAAAANDMTL4Azcy9AAAAAMzMTL8AAAAAAAAAAMzMTL8AAAAAAAAAAMzMzL4AAAAAAAAAAMzMzL4AAAAAAAAAAJmZGb8AAAAAAAAAADIzM78AAAAAAAAAAGhmZr8AAAAAAAAAANDMTL4AAAAAAAAAANDMTL4AAAAAAAAAAJqZmb4AAAAAAAAAAJqZmb4AAAAAAAAAAMzMzL4Azcy9AAAAAMzMzL4Azcy9AAAAAJmZGb8AAAAAAAAAAJiZGb8AAAAAAAAAAAAAAL/AzEy+AAAAAAAAAL/AzEy+AAAAAAQAAL+AzEy+AAAAAJCZmb6AzEy+AAAAANDMzL4AzUy+AAAAAKCZmb7AmZm+AAAAAKCZmb7AmZm+AAAAAJCZmb6AzEy+AAAAAJCZmb4AzUy+AAAAAMzMzL4AAAAAAAAAAMzMzL4Azcy9AAAAAJyZmb4Azcw9AAAAAMzMzL4AAAAAAAAAAJmZGb8AAAAAAAAAAMzMzL4AAAAAAAAAAJiZGb8AAAAAAAAAAJiZmb4Azcy9AAAAAJiZmb4Azcy9AAAAAJqZmb4AAAAAAAAAAJiZmb4Azcy9AAAAAKCZmb4AzUw+AAAAAMzMTL4Azcy9AAAAAMzMTL4Azcy9AAAAAMjMzL4Azcy9AAAAAJCZmb4AzUy+AAAAANDMzL4AzUy+AAAAANDMzL4AzUy+AAAAAJCZmb4AzUy+AAAAAKCZmb7AmZm+AAAAANDMzL4Azcy9AAAAAMjMzL4Azcy9AAAAAMzMzL4AAAAAAAAAAJiZmb4AzMy9AAAAAAAAAL/AzEy+AAAAAAAAAL8AzUy+AAAAAAAAAL8AzUy+AAAAAAAAAL/AzEy+AAAAAJyZGb+AzMy9AAAAANDMzL4AzUy+AAAAANDMzL4AzUy+AAAAAAAAAL+AzEy+AAAAAMjMzL4Azcy9AAAAANDMzL4Azcy9AAAAAAAAAL8Azcy9AAAAAAAAAL+AzEy+AAAAAAAAAL8Azcy9AAAAAAAAAL+AzEy+AAAAAMzMTL8AAAAAAAAAAMzMTL8AAAAAAAAAAAAAgL8AAAAAAAAAAGhmZr8AAAAAwMzMPQAAAL8AAAAAAAAAAM3MjL8Azcw9AAAAAAEAgL8AAAAAAAAAAM3MTL8AAAAAAM3MPf7//77AzMw9AAAAANDMTL8AAAAAAAAAAJqZmb8AAAAAAAAAAGhmpr/AzMy9AAAAAM7MjL+AzMy9AAAAADIzs78Azcy9AAAAADIzs78Azcy9AAAAAM7MjL+AzMy9AAAAAGZmpr8AzMy9AAAAAJyZmb/QzMy9AAAAAGhmZr8AAAAAAAAAAMzMjL8AAAAAAM3MPf7//77AzMw9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AAAAAAAAAL/AzEy+AAAAAAAAAL8AzUy+AAAAAAAAAL/AzEy+AAAAAJyZGb+AzMy9AAAAAAAAAL8AzUy+AAAAANDMzL4AzUy+AAAAANDMzL4AzUy+AAAAAAAAAL+AzEy+AAAAAMjMzL4Azcy9AAAAANDMzL4Azcy9AAAAAAAAAL8Azcy9AAAAAAAAAL+AzEy+AAAAAAAAAL+AzEy+AAAAAAAAAL8Azcy9AAAAADIzM78AAAAAAAAAADMzM78AAAAAAAAAAJyZGb+AzMy9AAAAAMzMTL8Azcy9AAAAAGhmZr8AzUy+AAAAAAAAgL8Azcy9AAAAAGhmZr+AzMy9AAAAAAAAgL8Azcy9AAAAAJiZGb8AzUy+AAAAAAAAAL/AmZm+AAAAADgzM7+gmZm+AAAAANDMTL+AzMy9AAAAAAAAgL8Azcy9AAAAAGZmZr8AAAAAAAAAAAAAgL8Azcw9AAAAAMzMTL8AAAAAAAAAAGZmZr8AAAAAAAAAAM3MzL4Azcy9AAAAAJyZmb4Azcy9AAAAAMzMzL4AzMy9AAAAAMDMzL4AzUy+AAAAAAAAAL8Azcy9AAAAAMzMzL4Azcy9AAAAAKCZmb6AzEy+AAAAAJyZmb4Azcy9AAAAAAAAgL8AAAAAAAAAAAAAgL8AAAAAAAAAAAAAAL8Azcy9AAAAAJqZGb8AzMy9AAAAAM3MTL8AAAAAAAAAAMzMTL8AAAAAAAAAANDMjL8AAAAAAAAAAJiZmb4AAAAAAAAAAJiZmb4Azcw9AAAAAM7MzL4AAAAAAAAAAM7MzL4AAAAAAAAAAJqZGb8Azcy9AAAAAAAAAL8Azcy9AAAAAM3MTL8AAAAAAAAAAMzMTL8Azcw9AAAAADAzM7/AzEy+AAAAADQzM7/AzEy+AAAAAJyZGb+AzEy+AAAAAAAAAL+AmZm+AAAAAAAAAL/AmZm+AAAAANDMzL7AmZm+AAAAANDMzL7AmZm+AAAAAAAAAL+AmZm+AAAAAMDMzL4AzUy+AAAAAAAAAL8AAAAAAAAAAAAAAL8Azcy9AAAAAMzMzL4Azcw9AAAAAAAAAL8AAAAAAAAAAM3MTL8AAAAAAAAAAAAAAL8Azcy9AAAAAMzMTL8Azcw9AAAAAMzMzL4Azcy9AAAAAMzMzL4Azcy9AAAAAM7MzL4AAAAAAAAAAMzMzL4Azcy9AAAAANDMzL4AzUw+AAAAAJmZmb4Azcy9AAAAAJmZmb4Azcy9AAAAAJiZGb8AzUy+AAAAAMDMzL4AzUy+AAAAAJiZGb/AmZm+AAAAAJiZGb/AmZm+AAAAAMDMzL4AzUy+AAAAANDMzL7AmZm+AAAAAJyZGb8AzUy+AAAAAJiZGb8AzUy+AAAAAJqZGb8AzMy9AAAAAMzMzL4AzMy9AAAAADQzM7/AzEy+AAAAAJiZGb8AzUy+AAAAAJiZGb8AzUy+AAAAADAzM7/AzEy+AAAAANDMTL+AzMy9AAAAAJiZGb/AmZm+AAAAAJiZGb/AmZm+AAAAAKCZGb+AmZm+AAAAAJiZGb8AzUy+AAAAAJyZGb8AzUy+AAAAADAzM78AzUy+AAAAAKCZGb+AmZm+AAAAADAzM78AzUy+AAAAAKCZGb+AmZm+AAAAAAAAgL8AAAAAAAAAAAAAgL8AAAAAAAAAAJyZmb8AAAAAAAAAANDMjL8AAAAAkJmZPszMzL4AAAAAAAAAAAAAwL8Azcw9AAAAAGdmpr8AAAAAAAAAAAAAgL8AAAAA4MxMPpmZGb/AzMw9AAAAAAAAgL8AAAAAAAAAADQzs78AAAAAAAAAAMzMzL/AzMy9AAAAAGZmpr+AzMy9AAAAAJqZ2b8Azcy9AAAAAJqZ2b8Azcy9AAAAAGZmpr+AzMy9AAAAAJqZ2b8AzMy9AAAAADQzs7/QzMy9AAAAAAAAgL8AAAAAAAAAADAzs78AAAAA4MxMPpmZGb/AzMw9AAAAAAAAgL8AAAAAaGbmP8DMTL7MzIw/NDOzPzQzs7/MzMw/AAAAAMzMzL/AzMy9AAAAAJqZ2b8Azcy9AAAAANDMzL/AzEy+AAAAAJiZ2b/AzMy9AAAAAJyZ2b/AzEy+AAAAAJyZ2b/AzEy+AAAAAGdmZr8AAAAAAAAAAAAAgL8AAAAAAACIQczMzEA0M7M/MzOnQQAAmEH//4/AzMygQc3MtEGambnAAAAAAJyZ2b+AzMy9AABQQTMzA0EAAMA/mpnZQGZmBkGamRlAmpkhQTAzs0DOzMw/zcyIQTMzm0FmZqbAmpmJQZqZtUGamcnAAAAAAGZm5r8AAAAAAAAAAGdmpr8AAAAAAAAAAJyZmb8AAAAAMDOzP2hmpr+amdk/ODMzP87MzD4AAAAAkJmZPszMzL4AAAAAAAAAAGZm5r8AAAAAAAAAAAAAgL8AAAAAAAAAAAAAwL8Azcw9AAAAAAAAgL8AzMw9AAAAAAAAgL8AzMw9AAAAAAAAwL8Azcw9AAAAAGZmpr8AAAAAAAAAAGZmpr8AzMy9AAAAAM3MjL8AAAAAAAAAAJmZmb8AAAAAAAAAAJqZmT4AzMw9AAAAAM3MzD4AzMw9zcxMQQAAkEBmZkZAZ2a2QMzMjEA0MzNANDOzP5yZ2T+gmRk/zsw0QTQzo0AzMxNAaGZmP83MjD/AzMw9AAAAAJyZ2b/AzMy9AAAAAJiZ2b/AzMy9AAAAAJyZ2b8Azcy9AAAAAAAAAMCgmZm+AAAAAAAAAMDAzEy+AAAAAAAAAMCgmZm+AAAAAAAAAMCgmZm+AAAAAAAAAMCgmZm+nJmZP2dm5j8Azcw9Z2a2QMzMjEA0MzNAaGZmQMzMzEBAMzM/NDOzP5yZ2T+gmRk/zMygQc3MtEGambnAZmaSQTIzt0GamcnAzcxMQQAAkEBmZkZAZmaSQTIzt0GamcnAAAAAAGZmpr+AzMy9AAAAAGdmpr8AAAAAAAAAAAAAgL8AAAAAAAAAAGRmZr8AAAAAAAAAAJqZGb8AAAAAAAAAAJqZmb8AAAAAAAAAAMzMjL8AAAAAAAAAAJqZGb8AAAAAAAAAAJqZmT4AzMw9AAAAAAAAgL8AAAAAAAAAAJqZmb8AAAAAAAAAAJqZ2b8AzMy9AAAAAM3MjL8AAAAAAAAAAAAAgL8AAAAAAAAAAAAAgL8AAAAAZ2a2QMzMjEA0MzNAAACIQczMzEA0M7M/NDOnQc3MLkLNzGzBzMyoQWdmSkJmZo7BzMyoQWZmUEIzM5PBMzOfQTMze0EwMzPAZ2aiQTQzu0HMzLzAmpmlQc3MyEE0M9PAmpmZQZmZV0IzM5vBmpmRQWZmVEKamZnBmpmZQZmZV0IzM5vBZmaSQTIzt0GamcnAzcyQQQAAFkJmZkbBMzOLQTQz80FnZhbBAACIQc3MyEFoZubANDOLQc3MfEFoZkbAAACIQQAAvEEAANDAAACQQQAAMkIAAHjBmZmdQQAANkIzM3vBNDOrQWdmMkIzM3PBzMyMQc3MLkLNzHTBzcyQQQAAFkJmZkbBMzObQQAATkIzM5PBZmaqQc3MFkIAAEDBAACQQQAAMkIAAHjBMzObQQAATkIzM5PBMzOLQTQz80FnZhbBzcycQTQzD0JmZjbBAACoQf//80FmZg7BzcycQTQzD0JmZjbBAACIQc3MyEFoZubAzcyYQc3M5EFmZgbBzcyYQc3M5EFmZgbBMzOPQczMSkKZmZHBAACgQQAAhUKamcXBAACgQQAAhUKamcXBMzOPQczMSkKZmZHBmZmdQQAAdkIAALTBmZmdQQAAdkIAALTBzMyMQc3MLkLNzHTBNDOnQc3MLkLNzGzBzMygQc3MtEGambnANDOrQWdmMkIzM3PBzczMvWhmpr8Azcw9AAAAAAAAgL8AAAAAMzNjQc3M/EAwM/M/ZmaWQc7MJEFwZma/ODMzP87MzD4AAAAAODOzP2dmJkAAAAAAAACIQQAAvEEAANDAMzOPQTMzs0EyM7PANDOLQc3MfEFoZkbAMzOPQTMzs0EyM7PAAACcQTQzU0FkZgbAAACcQTQzU0FkZgbAZmaSQZqZKUE4M7O/ZmaSQZqZKUE4M7O///9/QTMzG0HAzEy+//9/QTMzG0HAzEy+AAAAQWdmVkEAAABAzMxsQGdm5kAAAAA/zMxsQGdm5kAAAAA/AAAAQWdmVkEAAABAzMwMQGZmhkAAzcw9zMwMQGZmhkAAzcw9ODOzP2dmJkAAAAAAAAAAAAAAgL8AAAAAAAAAAAAAgL8AAAAAAAAAvwAAAL8Azcw9AAAAAGdmpr8AAAAAAAAAAAAAwL8Azcw9AAAAAAAAgL8AAAAAAAAAAAAAgL8AAAAAAM3MvTIzM7/AzMw9AAAAADQzs78AAAAAAAAAAMzMzL/AzMy9AAAAAGZmpr+AzMy9AAAAAGZmpr+AzMy9AAAAAJqZ2b8AzMy9AAAAADAzs78AAAAAAAAAAGdmZr8AAAAAAAAAAAAAgL8AAAAAAM3MvTIzM7/AzMw9zMyMv5CZmb5mZqY/AAAAAAAAgL8AAAAAMDMzvwAAwL8yM/M/AAAAAAAAgL8AAAAAAAAAAMzMzL/AzMy9AAAAAJiZ2b/AzMy9AAAAAJyZ2b/AzEy+AAAAAJyZ2b/AzEy+AAAAAAAAgL8AAAAAAAAAAAAAgL8Azcy9AAAAAGZmZr8AAAAAmpl5wTIzw0AAAIBAMzOfwczMoEEAAEDAAACkwWZmjkE4M/O/AAAAAJyZ2b+AzMy9AAAAAAAAgL8Azcy9AAAAAGhmZr+AzMy9NDMTwf//T0ECAIBAZmY+wWZmDkEwMzNAmZnZwDQzA0EyM3NAzcwMwTAzc0CZmZlAAACIwQAAOEEAzcw9AACIwTMzk0E0MzPAAACIwQAAeEFwZma/AAAAAJiZGb8AzUy+AAAAAGdmpr8AAAAAAAAAAGZm5r8AAAAAAAAAANDMTL+AzMy9AAAAAMzMTL8AAAAAAAAAAGZmZr8AAAAAAAAAAMDMzL4AzUy+AAAAAJyZmb4Azcy9AAAAAMzMzL4AzMy9AAAAAM3MzL4Azcy90MxMvzQzs79mZgZAAACAv8zMzD6gmZk+AAAAAGZm5r8AAAAAAAAAvwAAAL8Azcw9AAAAAAAAwL8Azcw9AAAAAAAAgL8AAAAAAAAAAGZmpr8AzMy9AAAAAGZmpr8AAAAAAAAAAM3MjL8AAAAAAAAAAJqZmT4AzMw9ZmY2wTgzM0AAANBANDOjwGdmhkCamYlAaGbmv2Zm5j+YmZk/zcwcwWhmRkCamblAmJmZvwAAgD/QzMw+mZmZwAAA4ECgmdk/ZGYGwGZmJkDg//8+AAAAAJiZ2b/AzMy9AAAAAJyZ2b/AzMy9AAAAAJyZ2b8Azcy9AAAAADgz87/gzMy+AAAAAAAAAMCAmZm+AAAAAAAAAMCgmZm+AAAAAAAAAMCAmZm+AAAAAGhm5r+AmZm+AAAAADgz87+gmZm+AAAAAAAAAMCgmZm+AAAAAAAAAMCgmZm+AAAAADAz87/AzMy+AAAAAAAAAMCgmZm+AAAAAAAAAMDgzMy+AAAAADAz87+AmZm+AAAAADQz87+gmZm+AAAAADAz87+gmZm+AAAAAPz//7/AzEy+AAAAAAAAAMDAzEy+AAAAAAAAAMCgmZm+AAAAAAAAAMCgmZm+AAAAAAAAAMCgmZm+AAAAAAAAAMCgmZm+AAAAAAAAAMCgmZm+AAAAAAAAAMCgmZm+AAAAAAAAAMCgmZm+AAAAAAAAAMCgmZm+AAAAAAAAAMDAzEy+AAAAAAAAAL8Azcy9AAAAAM3MTL8AAAAAAAAAAJqZGb8AzMy9AAAAAMzMTL8AAAAAZmYWwTQzS0HMzIxANDOjwGdmhkCamYlAAACQwJqZyUBoZuY/aGbmv2Zm5j+YmZk/MzOfwczMoEEAAEDAZmY2wTgzM0AAANBAAACQwQAApEGamVnAAACQwQAApEGamVnAAACIwTIzo0FmZmbAAAAAAGZmpr+AzMy9AAAAAGdmpr8AAAAAAAAAAGRmZr8AAAAAAAAAAJqZmb8AAAAAAAAAAJqZGb8AAAAAAAAAAJiZmb4AAAAAAAAAAM7MzL4AAAAAAAAAAMzMjL8AAAAAAAAAAJqZGb8AAAAAAAAAAAAAgL8AAAAAAAAAAJqZmT4AzMw9AAAAAJqZmb8AAAAAAAAAAJqZ2b8AzMy9AAAAAM3MjL8AAAAAmpl5wTIzw0AAAIBANDOjwGdmhkCamYlAAAC4wTQzI0IAAFjBZma+wc3MPEIzM4fBMzO/wZmZQUIAAIzBAACcwczMdEHAzMy+AACkwWZmskHMzGzAzcyowWZmvkEAAJDAmZmpwQAARkIAAJTBZ2aywWdmSEJmZpbBAACQwQAApEGamVnAZ2aywWdmSEJmZpbBAACcwZmZDUJnZi7BMzOTwf//50E0M/PAAACMwczMwEGamanANDOLwczMtEHOzIzAmZmhwWZmJkJmZmbBAAC8wc3MJkJmZl7BAACwwQAAKkKZmWnBmpmdwZmZI0KamWHBAACcwZmZDUJnZi7BmZm1wc3MDELNzCTBMjOzwZmZQUJmZo7BmZmhwWZmJkJmZmbBMjOzwZmZQUJmZo7BMzOTwf//50E0M/PAZmauwZqZ5UHOzNzANDOnwZmZB0JmZh7BNDOnwZmZB0JmZh7BAACMwczMwEGamanAMzOfwWZm2kEAANDAMzOfwWZm2kEAANDAZmamwTMzPUIzM4vBZmbCwc3MeEJmZsbBZmbCwc3MeEJmZsbBmZmpwQAARkIAAJTBzcy8wc3MZkIAALTBZmamwTMzPUIzM4vBmpmdwZmZI0KamWHBzcy8wc3MZkIAALTBMjNLwZmZKUE0MzNAAACMwZqZMUHQzEw/ZGYGwGZmJkDg//8+AACAv8zMzD6gmZk+aGbmv2Zm5j+gmRk/NDOLwczMtEHOzIzAzcyQwc3MrEEAAGDAAACIwQAAeEFwZma/zcyQwc3MrEEAAGDAMzOXwTQzQ0FAMzM/MzOXwTQzQ0FAMzM/AACIwQAAOEEAzcw9AABwwc3MNEEwM/M/AABwwc3MNEEwM/M/ZmY+wWZmDkEwMzNAAAAgwWdmRkFmZoZAAAAgwWdmRkFmZoZANDMTwf//T0ECAIBA//+fwJqZ6UA4M/M///+fwJqZ6UA4M/M/mZmZwAAA4ECgmdk/AgBAwGZmhkBgZmY/AgBAwGZmhkBgZmY/MzNjQc3M/EAwM/M/AAAAQWdmVkEAAABAAABQQTMzA0EAAMA///9/QTMzG0HAzEy+MzNjQc3M/EAwM/M/AABQQTMzA0EAAMA/AAAAAM3MTL8AAAAAAAAAADAzM7/AzEy+AAAAAJyZGb+AzEy+AAAAADQzM7/AzEy+AAAAANDMzL7AmZm+AAAAANDMzL7AmZm+AAAAAMDMzL4AzUy+AAAAAAAAAL8AAAAAAAAAAAAAAL8Azcy9AAAAAAAAAL8AAAAAAAAAAM3MTL8AAAAAAAAAAMzMzL4Azcy9AAAAAMzMzL4Azcy9AAAAADgz87/gzMy+AAAAAAAAAMCgmZm+AAAAAAAAAMCAmZm+AAAAAAAAAMCAmZm+AAAAAGhm5r+AmZm+AAAAAAAAAMCgmZm+AAAAAAAAAMDgzMy+AAAAAAAAAMCgmZm+AAAAADAz87/AzMy+AAAAADgz87+gmZm+AAAAAAAAAMCgmZm+AAAAADAz87+gmZm+AAAAAPz//7/AzEy+AAAAADAz87+AmZm+AAAAADQz87+gmZm+AAAAAAAAAMCgmZm+AAAAAAAAAMCgmZm+AAAAAAAAAMCgmZm+AAAAAAAAAMCgmZm+AAAAAAAAAMDAzEy+AAAAAJiZGb8AzUy+AAAAAJiZGb/AmZm+AAAAAMDMzL4AzUy+AAAAAMDMzL4AzUy+AAAAAJiZGb/AmZm+AAAAANDMzL7AmZm+AAAAAJyZGb8AzUy+AAAAAJiZGb8AzUy+AAAAAJqZGb8AzMy9AAAAAMzMzL4AzMy9AAAAADQzM7/AzEy+AAAAAJiZGb8AzUy+AAAAADAzM7/AzEy+AAAAANDMTL+AzMy9AAAAAJiZGb8AzUy+AAAAAJiZGb/AmZm+AAAAAJiZGb/AmZm+AAAAAKCZGb+AmZm+AAAAAJiZGb8AzUy+AAAAAJyZGb8AzUy+AAAAADAzM78AzUy+AAAAAKCZGb+AmZm+AAAAAKCZGb+AmZm+AAAAADAzM78AzUy+AAAAAMzMTL8AAAAAAAAAAGZmZr8AAAAAAAAAANDMTL+AzMy9AAAAAAAAgL8Azcy9AAAAAJiZGb8AzUy+AAAAADgzM78Azcy9AAAAAJiZGb+AzMy9AAAAAJiZGb8Azcy9AAAAANDMzL4AzUy+AAAAAODMTL4AzUy+AAAAANDMzL7AzEy+AAAAAAAAAL+AzMy9AAAAADQzM78Azcy9AAAAAJqZGb8AAAAAAAAAADIzM78Azcw9AAAAAAAAAL8AAAAAAAAAAJqZGb8AAAAAAAAAAMzMTL4Azcy9AAAAANDMzL0Azcy9AAAAAMjMTL4AzMy9AAAAAMDMTL4AzUy+AAAAAMjMTL4Azcy9AAAAAMjMzL0Azcy9AAAAAADNzL2AzEy+AAAAAODMzL0Azcy9AAAAADQzM78AAAAAAAAAADQzM78AAAAAAAAAAJiZmb4AAAAAAAAAAJiZmb4AAAAAAAAAAAEAAL8AAAAAAAAAAAAAAL8AAAAAAAAAANDMTL8AAAAAAAAAANDMzL0AAAAAAAAAANDMzL0AAAAAAAAAAMzMTL4AAAAAAAAAANDMzL0AAAAAAAAAAJiZmb4Azcy9AAAAAJiZmb4Azcy9AAAAAAEAAL8AAAAAAAAAAAAAAL8AAAAAAAAAANDMzL7AzEy+AAAAANDMzL7AzEy+AAAAANDMzL6AzEy+AAAAAMDMTL6AmZm+AAAAAODMTL4AzUy+AAAAAODMTL7AmZm+AAAAAODMTL7AmZm+AAAAAMDMTL6AmZm+AAAAAMDMTL4AzUy+AAAAAMjMTL4AAAAAAAAAAJiZmb4Azcy9AAAAANDMTL4Azcw9AAAAAMjMTL4AAAAAAAAAAAEAAL8AAAAAAAAAAJiZmb4AAAAAAAAAAAAAAL8AAAAAAAAAAMzMTL4Azcy9AAAAAMzMTL4Azcy9AAAAAMjMzL0AAAAAAAAAAMzMTL4Azcy9AAAAANDMTL4AzUw+AAAAAMjMzL0Azcy9AAAAAMjMzL0Azcy9AAAAAJiZmb4Azcy9AAAAAMDMTL4AzUy+AAAAAKCZmb4AzUy+AAAAAKCZmb4AzUy+AAAAAMDMTL4AzUy+AAAAAODMTL7AmZm+AAAAAJiZmb4AzUy+AAAAAJiZmb4Azcy9AAAAAJiZmb4AAAAAAAAAAMjMTL4AzMy9AAAAANDMzL7AzEy+AAAAAJCZmb4AzUy+AAAAANDMzL4AzUy+AAAAANDMzL7AzEy+AAAAAAAAAL+AzMy9AAAAAKCZmb4AzUy+AAAAAKCZmb4AzUy+AAAAANDMzL6AzEy+AAAAAJiZmb4Azcy9AAAAAJiZmb4AzUy+AAAAANDMzL4Azcy9AAAAANDMzL6AzEy+AAAAANDMzL4Azcy9AAAAANDMzL6AzEy+AAAAADQzM78AAAAAAAAAADQzM78AAAAA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AAAAAGBmpr8AAAAAAAAAAGRmpr8AAAAAAAAAAGhmpr8AAAAAAAAAAJyZmb8AAAAAAAAAAGhmpr8AAAAAAAAAAGhmpr8AAAAAAAAAAGhmpr8AAAAAAAAAAGhmpr8AAAAAAAAAAGhmpr8AAAAAAAAAAJiZmb4Azcy9AAAAAKCZmb4AzUy+AAAAAMDMTL4AzUy+AAAAAMDMTL4AzUy+AAAAAKCZmb4AzUy+AAAAAODMTL7AmZm+AAAAAJiZmb4AzUy+AAAAAJiZmb4Azcy9AAAAAJiZmb4AAAAAAAAAAMjMTL4AzMy9AAAAANDMzL7AzEy+AAAAANDMzL4AzUy+AAAAANDMzL7AzEy+AAAAAAAAAL+AzMy9AAAAAJCZmb4AzUy+AAAAAKCZmb4AzUy+AAAAAKCZmb4AzUy+AAAAANDMzL6AzEy+AAAAAJiZmb4Azcy9AAAAAJiZmb4AzUy+AAAAANDMzL4Azcy9AAAAANDMzL6AzEy+AAAAANDMzL6AzEy+AAAAANDMzL4Azcy9AAAAAAAAAL8AAAAAAAAAAJqZGb8AAAAAAAAAAAAAAL+AzMy9AAAAADQzM78Azcy9AAAAAAAAAAAAzcy9AAAAAMDMzL0AAAAAAAAAAAAAAACAzMy9AAAAAAAAAAAAzcy9AAAAAODMTD4Azcy9AAAAAMDMTD4Azcy9AAAAAMDMzD0Azcy9AAAAAMDMzD0AAAAAAAAAAMDMzL0Azcy9AAAAAAAAAAAAAAAAAAAAAMDMzL0AAAAAAAAAANDMzD0AAAAAAAAAAAAAAAAAAAAAAAAAAJqZmT4Azcy9AAAAAMjMzD4Azcy9AAAAAJyZmT4AAAAAAAAAAKCZmT4Azcy9AAAAAJyZmT4AAAAAAAAAAJyZmT4Azcy9AAAAAMDMzD4AzMy9AAAAAJiZmT4AAAAAAAAAAODMzL0AAAAAAAAAAMDMzL0AAAAAAAAAANDMTD4AAAAAAAAAAMjMTD4AAAAAAAAAAMjMzD0AAAAAAAAAANDMzD0AAAAAAAAAAODMTL4AAAAAAAAAAJqZmT4AAAAAAAAAAJiZmT4AAAAAAAAAAJqZmT4AAAAAAAAAAJmZmT4AAAAAAAAAAMjMTD4AAAAAAAAAANDMTD4Azcy9AAAAAMjMzD0AAAAAAAAAANDMzD0AAAAAAAAAAMDMzD2AzMy9AAAAAMDMzD0Azcy9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AAAAANDMTD4Azcy9AAAAAMDMzD0Azcy9AAAAAMDMzD2AzEy+AAAAAMDMzD2AzEy+AAAAAMDMzD0Azcy9AAAAANDMzD0AAAAAAAAAAAAAAAAAAAAAAAAAAMDMzD0AAAAAAAAAAMDMzL0Azcy9AAAAAAAAAD8Azcy9AAAAAAAAAD8AAAAAAAAAAAAAAD8AAAAAAAAAAAAAAD8Azcy9AAAAAJiZGT8AAAAAAAAAAJiZGT8AAAAAAAAAAJiZGT8AAAAAAAAAAJiZGT8AAAAAAAAAAAAAAD8AAAAAAAAAAAAAAD8AAAAAAAAAAAEAAD8AAAAAAAAAAJyZGT8AAAAAAAAAAJqZGT8AAAAAAAAAAJqZGT8AAAAAAAAAADQzMz8Azcy9AAAAADIzMz8AAAAAAAAAADgzMz8AAAAAAAAAADIzMz8AAAAAAAAAADQzMz8AAAAAAAAAADAzMz8AAAAAAAAAADQzMz8AAAAAAAAAAAAAAD8AAAAAAAAAAAAAAD8AAAAAAAAAAJyZGT8AAAAAAAAAAJqZGT8AAAAAAAAAAJmZGT8AAAAAAAAAAJyZGT8AAAAAAAAAAMDMzD4AAAAAAAAAADMzMz8AAAAAAAAAADMzMz8AAAAAAAAAAJqZGT8AAAAAAAAAADMzMz8AAAAAAAAAAJqZGT8AAAAAAAAAADQzMz8Azcy9AAAAAJmZGT8AAAAAAAAAAJqZGT8AAAAAAAAAAJiZGT+AzMy9AAAAAJiZGT8Azcy9AAAAAJiZGT8Azcy9AAAAAJiZGT8Azcy9AAAAAJiZGT8AAAAAAAAAADAzMz8Azcy9AAAAADAzMz8Azcy9AAAAAJiZGT8Azcy9AAAAADgzMz8AAAAAAAAAAJqZGT8AAAAAAAAAAJqZGT8AAAAAAAAAADMzMz8Azcw9AAAAAJqZGT8AAAAAAAAAAJmZGT8AAAAAAAAAAJyZGT8AAAAAAAAAAJqZGT8AAAAAAAAAAJqZGT8AAAAAAAAAADQzMz8Azcy9AAAAADMzMz8AAAAAAAAAAJqZGT8AAAAAAAAAADAzMz8Azcw9AAAAADMzMz8AAAAAAAAAADMzMz8AAAAAAAAAAJiZGT8AAAAAAAAAADgzMz8AAAAAAAAAAJiZGT8Azcy9AAAAAJiZGT8Azcy9AAAAADgzMz8AAAAAAAAAADAzMz8Azcy9AAAAAJyZGT8AAAAA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AAAAADAzMz8Azcy9AAAAADgzMz8AAAAAAAAAAJqZGT8AAAAAAAAAAJyZGT8AAAAAAAAAAJqZGT8AAAAAAAAAAJmZGT8AAAAAAAAAAJqZGT8AAAAAAAAAAJqZGT8AAAAAAAAAAGhmpj8AAIA/AAAAAJiZmT8AAIA/AAAAAJyZmT/QzEw/AAAAAJyZmT/QzEw/AAAAANDMjD/QzIw/AAAAAJyZmT9gZmY/AAAAAMjMjD8AAIA/AAAAAMzMjD/QzEw/AAAAAJiZmT9gZmY/AAAAAJiZmT9gZmY/AAAAAJiZmT8AAIA/AAAAAAQAgD8AAIA/AAAAAMzMjD8wMzM/AAAAAGhmZj9wZmY/AAAAAJiZmT8wMzM/AAAAAGhmpj8wMzM/AAAAAGhmpj8wMzM/AAAAAGhmpj8wMzM/AAAAAGRmpj8wMzM/AAAAAGRmpj8wMzM/AAAAAJiZGT8AAAAAAAAAAJiZGT8Azcy9AAAAADgzMz8AAAAAAAAAADgzMz8AAAAAAAAAAJiZGT8Azcy9AAAAADAzMz8Azcy9AAAAAJyZGT8AAAAAAAAAAJiZGT8AAAAAAAAAAJqZGT8AAAAAAAAAADIzMz8AAAAAAAAAAJiZGT8Azcy9AAAAAJiZGT8AAAAAAAAAAJiZGT+AzMy9AAAAAJiZGT8AAAAAAAAAAKCZGT8AAAAAAAAAAJiZGT8Azcy9AAAAAJiZGT8Azcy9AAAAAJiZGT8Azcy9AAAAAJiZGT8AAAAAAAAAAJyZGT8AAAAAAAAAAJiZGT8AAAAAAAAAAJiZGT8Azcy9AAAAAJiZGT8Azcy9AAAAAJiZGT8AAAAAAAAAAJyZGT8AAAAAAAAAAAAAAD8AAAAAAAAAAJiZGT8AAAAAAAAAAAAAAD8AAAAAAAAAAAAAgD8AAAAAAAAAAAAAgD8AAAAAAAAAAGhmZj8AAAAAAAAAAAAAgD8AAAAAAAAAAAAAgD8AAAAAAAAAAGBmZj8AAAAAAAAAAAAAgD8AAAAAAAAAAAAAgD8AAAAAAAAAAAAAgD8AAAAAAAAAAAAAgD8AAAAAAAAAAAAAgD8AAAAAAAAAAAAAgD8AAAAAAAAAAAAAgD8AAAAAAAAAAAAAgD8AAAAAAAAAAAAAgD8AAAAAAAAAAAEAgD8AAAAAAAAAAAAAgD8AAAAAAAAAAAEAgD8AAAAAAAAAAAAAgD8AAAAAAAAAAAAAgD8AAAAAAAAAAAAAgD8AAAAAAAAAAAAAgD8AAAAAAAAAAAAAgD8AAAAAAAAAAGhmZj8AAAAAAAAAAGZmZj8AAAAAAAAAAGZmZj8AAAAAAAAAAAAAgD8AAAAAAAAAAGBmZj8AAAAAAAAAAAAAgD8AAAAAAAAAAAAAgD8AAAAAAAAAAM3MTD8AAAAAAAAAAGZmZj8AAAAAAAAAAGZmZj8AAAAAAAAAAAAAgD8AAAAAAAAAAGZmZj8AAAAAAAAAAAAAgD8AAAAAAAAAAAAAgD8AAAAAAAAAAGhmZj8AAAAAAAAAAGBmZj8AAAAAAAAAAGhmZj8AAAAAAAAAAGBmZj8AAAAAAAAAAAAAgD8AAAAAAAAAAAAAgD8AAAAAAAAAAGhmZj8AAAAAAAAAAAAAgD8AAAAAAAAAAGZmZj8AAAAAAAAAAGZmZj8AAAAAAAAAAAAAgD8AAAAAAAAAAGZmZj8AAAAAAAAAAGZmZj8AAAAAAAAAAGhmZj8AAAAAAAAAAAAAgD8AAAAAAAAAAGZmZj8AAAAAAAAAAAAAgD8AAAAAAAAAAGdmZj8AAAAAAAAAAGZmZj8AAAAAAAAAAAAAgD8AAAAAAAAAAAAAgD8AAAAAAAAAAAAAgD8AAAAAAAAAAAAAgD8AAAAAAAAAAAAAgD8AAAAAAAAAAAAAgD8AAAAAAAAAAAAAgD8AAAAAAAAAAAAAgD8AAAAAAAAAAAAAgD8AAAAAAAAAAPz/fz8AAAAAAAAAAAAAgD8AAAAAAAAAAGZmZj8AAAAAAAAAAAEAgD8AAAAAAAAAAGhmZj8AAAAAAAAAAAAAgD8AAAAAAAAAAAAAgD8AAAAAAAAAAAAAgD8AAAAAAAAAAAAAgD8AAAAAAAAAAAAAgD8AAAAAAAAAAAAAgD8AAAAAAAAAAGBmZj8AAAAAAAAAAAAAgD8AAAAAAAAAAPz/fz8AAAAAAAAAAGhmZj8AAAAAAAAAAGBmZj8AAAAAAAAAAGhmZj8AAAAAAAAAAGBmZj8AAAAAAAAAAPz/fz8AAAAAAAAAAAAAgD8AAAAAAAAAAAAAgD8AAAAAAAAAAAAAgD8AAAAAwMzMPTMzE0AAzUy+AAAAAMzMTD8AAAAAAAAAADMzsz8AAAAAAAAAAP//fz8AAAAAAAAAANDMzD7QzEy+AAAAAAAAgD8AAAAAAAAAAJmZ2T/gzMw9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AAAAAAAAgD8AAAAAAAAAAAAAgD8AAAAAAAAAAAAAgD8AAAAAAAAAAAAAgD8AAAAAAAAAAAAAgD8AAAAAAAAAAAAAgD8AAAAAAAAAAPz/fz8AAAAAAAAAAAAAgD8AAAAAAAAAAGZmZj8AAAAAAAAAAAEAgD8AAAAAAAAAAGhmZj8AAAAAAAAAAAAAgD8AAAAAAAAAAAAAgD8AAAAAAAAAAAAAgD8AAAAAAAAAAAAAgD8AAAAAAAAAAAAAgD8AAAAAAAAAAAAAgD8AAAAAAAAAAGBmZj8AAAAAAAAAAAAAgD8AAAAAAAAAAPz/fz8AAAAAAAAAAGhmZj8AAAAAAAAAAGBmZj8AAAAAAAAAAGBmZj8AAAAAAAAAAGhmZj8AAAAAAAAAAAAAgD8AAAAAAAAAAAAAgD8AAAAAAAAAAAAAgD8AAAAAAAAAAAAAgD8AAAAAAAAAAJiZmT8AAAAAAAAAAGRmpj8AAAAAAAAAAJyZmT8Azcw9AAAAAGRmpj8AAAAAAAAAAJyZmT8AzMw9AAAAAMzMjD8AzMw9AAAAAJyZmT8Azcw9AAAAAGRmpj8Azcw9AAAAAGhmpj8AAAAAAAAAAGZmpj8AAAAAAAAAAJqZmT8AAAAAAAAAAGZmpj8Azcw9AAAAAJqZmT8AAAAAAAAAAM3MjD8AAAAAAAAAAJqZmT8AAAAAAAAAAJmZmT8AAAAAAAAAAJyZmT8AzMw9AAAAAJmZmT8AAAAAAAAAAJmZmT8AAAAAAAAAAJiZmT8Azcw9AAAAAMzMjD8Azcw9AAAAAGZmpj8AAAAAAAAAAJqZmT8AAAAAAAAAAM7MjD8Azcw9AAAAAM3MjD8Azcw9AAAAAJqZmT8AAAAAAAAAAGZmpj8Azcw9AAAAAGRmpj8AAAAAAAAAAAAAgD8AAAAAAAAAAM3MjD8AAAAAAAAAAAAAgD8AAAAAAAAAAM3MjD8AAAAAAAAAAM3MjD8AAAAAAAAAAJqZmT8AAAAAAAAAAJqZmT8AAAAAAAAAAJqZmT8AAAAAAAAAAJyZmT8AAAAAAAAAAMzMjD8AAAAAAAAAAJiZmT8AAAAAAAAAAMzMjD8AAAAAAAAAAMzMjD8AzMw9AAAAAJiZmT8AAAAAAAAAAJiZmT8AAAAAAAAAAMzMjD8AAAAAAAAAAJyZmT8AzMw9AAAAAM3MjD8AzMw9AAAAAM3MjD8AAAAA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AAAAAGhmpj8AAAAAAAAAAGRmpj8AAAAAAAAAAGhmpj8Azcw9AAAAADQzsz8AAAAAAAAAAJyZmT8AzMw9AAAAAMzMjD+AzEw+AAAAAJyZmT/AzEw+AAAAAGRmpj8Azcw9AAAAADQzsz8AAAAAAAAAAGZmpj8AAAAAAAAAAJqZmT8AAAAAAAAAAGZmpj8Azcw9AAAAAGZmpj8AAAAAAAAAAM3MjD8AAAAAAAAAAMzMjD8AAAAAAAAAAM3MjD8AAAAAAAAAANDMjD8AzMw9AAAAAM3MjD8AAAAAAAAAAM3MjD8AAAAAAAAAAMzMjD8Azcw9AAAAAAAAgD8Azcw9AAAAAGZmpj8AAAAAAAAAAGdmpj8AAAAAAAAAAM7MjD8Azcw9AAAAAM3MjD8Azcw9AAAAAJqZmT8AAAAAAAAAAGZmpj8Azcw9AAAAADAzsz8AAAAAAAAAAAAAgD8AAAAAAAAAAAAAgD8AAAAAAAAAAAAAgD8AAAAAAAAAAAAAgD8AAAAAAAAAAM3MjD8Azcw9AAAAAM7MjD8AAAAAAAAAAJqZmT8AAAAAAAAAAJqZmT8AAAAAAAAAAJyZmT8Azcw9AAAAAMzMjD8AAAAAAAAAAMzMjD8Azcw9AAAAAAAAgD8Azcw9AAAAAMzMjD+AzEw+AAAAAMzMjD8Azcw9AAAAAMzMjD8Azcw9AAAAAAAAgD8Azcw9AAAAANDMjD8AzMw9AAAAAM3MjD8AzMw9AAAAAM3MjD8AAAAAAAAAAJmZmT8AAAAAAAAAAM3MjD8AzMw9AAAAAJqZmT8AAAAAAAAAAM7MjD8Azcw9AAAAAJqZmT8AAAAAAAAAAM3MjD8AAAAAAAAAAM3MjD8AAAAAAAAAAAAAgD8AAAAAAAAAAM3MjD8AAAAAAAAAAMzMjD8AAAAAAAAAAMzMjD8AAAAAAAAAAMzMjD8AAAAAAAAAAJyZmT8Azcw9AAAAANDMjD8AzMw9AAAAAJiZmT8AzMw9AAAAAJiZmT8AzMw9AAAAANDMjD8AzMw9AAAAAMzMjD8Azcw9AAAAAJqZmT8AzMw9AAAAAJyZmT8Azcw9AAAAAM3MjD8Azcw9AAAAAM3MjD8AAAAAAAAAAMzMjD8AAAAAAAAAAJyZmT8AzMw9AAAAAJyZmT8AzMw9AAAAAJyZmT8Azcw9AAAAAGRmpj8Azcw9AAAAAJiZmT8AzMw9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AAAAAAAAAEAwMzM/AAAAAAIAAEAAAAA/AAAAAAIAAEAAAAA/AAAAADAz8z9AMzM/AAAAADQz8z+QmRk/AAAAADAz8z+QmRk/AAAAADQz8z+gmRk/AAAAAAAAAECgmRk/AAAAAPz//z+QmRk/AAAAADQz8z8wMzM/AAAAAGhm5j+gmRk/AAAAADQz8z8AAAA/AAAAAGhm5j+gmRk/AAAAAAAAAEDgzMw+AAAAAAAAAEDAzMw+AAAAAAAAAEDgzMw+AAAAAAAAAEAAAAA/AAAAAGZmBkAAAAA/AAAAAAAAAEDAzMw+AAAAAJyZmT8Azcw9AAAAAJiZmT8AzMw9AAAAANDMjD8AzMw9AAAAANDMjD8AzMw9AAAAAJiZmT8AzMw9AAAAAMzMjD8Azcw9AAAAAJqZmT8AzMw9AAAAAJyZmT8Azcw9AAAAAM3MjD8Azcw9AAAAAM3MjD8AAAAAAAAAAMzMjD8AAAAAAAAAAJyZmT8AzMw9AAAAAJyZmT8Azcw9AAAAAGRmpj8Azcw9AAAAAJyZmT8AzMw9AAAAAJiZmT8AzMw9AAAAAJiZmT8AzMw9AAAAAMzMjD8AAAAAAAAAAJyZmT8Azcw9AAAAAJqZmT8AzMw9AAAAAMzMjD8AzMw9AAAAAMzMjD8AAAAAAAAAAMzMjD8AAAAAAAAAAMzMjD8AzMw9AAAAAGZmpj8Azcw9AAAAAGZmpj8AAAAAAAAAAGRmpj8Azcw9AAAAADQzsz8AAAAAAAAAAMzMjD8AAAAAAAAAAMzMjD8AAAAAAAAAAMzMjD8Azcw9AAAAAJiZmT8AAAAAAAAAAGhmZj+AzEw+AAAAAMjMTD+AzEw+AAAAAGhmZj/AzEw+AAAAAMzMjD8Azcw9AAAAAJiZmT8AAAAAAAAAAM3MjD8AAAAAAAAAAM3MjD8AAAAAAAAAAM7MjD8Azcw9AAAAAM3MjD8AAAAAAAAAAMzMTD8AAAAAAAAAAMzMTD8AAAAAAAAAAGZmZj8Azcw9AAAAAGhmZj+AzEw+AAAAAGZmZj8AAAAAAAAAAM7MTD8AAAAAAAAAAMjMTD8AzUw+AAAAAMzMTD8Azcw9AAAAAMzMjD8AAAAAAAAAAM3MjD8AAAAAAAAAAMzMTD8Azcw9AAAAAM7MTD8Azcw9AAAAAAAAgD8AAAAAAAAAAM7MjD8Azcw9AAAAAJiZmT8AAAAAAAAAAM3MTD8AAAAAAAAAAM3MTD8AAAAAAAAAAM3MTD8AAAAAAAAAAM3MTD8AAAAAAAAAAGZmZj8Azcw9AAAAAGhmZj8AAAAAAAAAAAAAgD8AAAAAAAAAAAAAgD8AAAAAAAAAAGhmZj8Azcw9AAAAAGhmZj8Azcw9AAAAAGBmZj8Azcw9AAAAANDMTD8Azcw9AAAAAMjMTD+AzEw+AAAAAGBmZj8Azcw9AAAAAGBmZj8Azcw9AAAAANDMTD8Azcw9AAAAAGhmZj+AzEw+AAAAAM7MTD8AzMw9AAAAAM7MTD8AAAAAAAAAAGZmZj8AAAAAAAAAAM7MTD8AzMw9AAAAAAAAgD8AAAAAAAAAAMzMTD8Azcw9AAAAAAAAgD8AAAAAAAAAAM7MTD8AAAAAAAAAAM7MTD8AAAAAAAAAAM3MTD8AAAAAAAAAAM7MTD8AAAAAAAAAAMzMTD8AAAAAAAAAAGdmZj8AAAAAAAAAAGdmZj8AAAAAAAAAAGhmZj8Azcw9AAAAAGhmZj+AzEw+AAAAAGhmZj8AzMw9AAAAAGhmZj8AzMw9AAAAAGhmZj+AzEw+AAAAAGBmZj8Azcw9AAAAAPz/fz8AzMw9AAAAAGhmZj8Azcw9AAAAAM7MTD8Azcw9AAAAAGZmZj8Azcw9AAAAAGhmZj8Azcw9AAAAAAAAgD8AzMw9AAAAAGhmZj+AzEw+AAAAAGhmZj8Azcw9AAAAAMzMjD8Azcw9AAAAAGhmZj8AzMw9AAAAAGhmZj8AzMw9AAAAAGBmZj8Azcw9AAAAAGhmZj8Azcw9AAAAAPz/fz8AzMw9AAAAAGhmZj+AzEw+AAAAAGBmZj8Azcw9AAAAAGhmZj+AzEw+AAAAAGBmZj8Azcw9AAAAAJqZmT8AAAAAAAAAAJiZmT8AAAAAzczMPWRmpj/gzMw9zczMPTAzsz8AAAAA0MzMPjMzE0AAzUy+AAAAAJmZmT8AAAAAAAAAAGZmpj8AAAAAAAAAAJqZmT8AAAAAAAAAP9DMzD3QzEy+AAAAAGZmpj8AAAAAAAAAAGZmpj/gzMw9AAAAAGZmpj8AAAAAAAAAAJmZmT8AAAAAAAAAAJqZmT8AAAAAAAAAAJqZmT8AAAAAAAAAAJmZmT8AAAAAAAAAAJqZmT8AAAAAAAAAAGhmpj/IzMw9AAAAAJiZmT8AAAAAAAAAADQzsz/IzMw9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AAAAAGZmZj8Azcw9AAAAAGhmZj8Azcw9AAAAAGhmZj+AzEw+AAAAAGhmZj8Azcw9AAAAAMzMjD8Azcw9AAAAAAAAgD8AzMw9AAAAAGhmZj8AzMw9AAAAAGhmZj8AzMw9AAAAAGBmZj8Azcw9AAAAAGhmZj8Azcw9AAAAAPz/fz8AzMw9AAAAAGhmZj+AzEw+AAAAAGBmZj8Azcw9AAAAAGBmZj8Azcw9AAAAAGhmZj+AzEw+AAAAAM7MjD8Azcw9AAAAAM3MjD8AAAAAAAAAAMzMjD8Azcw9AAAAAJiZmT8AAAAAAAAAAJiZGT8AAAAAAAAAAJiZGT8AAAAAAAAAAJiZGT8Azcw9AAAAADAzMz8AAAAAAAAAAAAAAD8AzMw9AAAAAMDMzD4AzMw9AAAAAAAAAD8Azcw9AAAAAJiZGT8Azcw9AAAAADAzMz8AAAAAAAAAAJqZGT8AAAAAAAAAAJqZGT8AAAAAAAAAAJyZGT8Azcw9AAAAADMzMz8AAAAAAAAAAMzMzD4AAAAAAAAAAMjMzD4AAAAAAAAAAMzMzD4AAAAAAAAAANDMzD4AzMw9AAAAAAAAAD8AAAAAAAAAAMzMzD4AAAAAAAAAAMDMzD4Azcw9AAAAAMjMzD4Azcw9AAAAAJiZGT8AAAAAAAAAAJqZGT8AAAAAAAAAANDMzD4Azcw9AAAAAMzMzD4Azcw9AAAAAJmZGT8AAAAAAAAAAJyZGT8Azcw9AAAAADAzMz8AAAAAAAAAAMzMzD4AAAAAAAAAAMzMzD4AAAAAAAAAAM3MzD4AAAAAAAAAAMzMzD4AAAAAAAAAAMzMzD4AAAAAAAAAAAAAAD8AAAAAAAAAAJmZGT8AAAAAAAAAAJqZGT8AAAAAAAAAAAAAAD8Azcw9AAAAANDMzD4AAAAAAAAAAAAAAD8Azcw9AAAAANDMzD4Azcw9AAAAAMDMzD4AzMw9AAAAAMDMzD4Azcw9AAAAAMDMzD4Azcw9AAAAANDMzD4Azcw9AAAAANDMzD4AzMw9AAAAAMzMzD4AzMw9AAAAAMzMzD4AAAAAAAAAAAAAAD8AAAAAAAAAAMzMzD4AzMw9AAAAAJmZGT8AAAAAAAAAANDMzD4Azcw9AAAAAJqZGT8AAAAAAAAAAMzMzD4AAAAAAAAAAMzMzD4AAAAAAAAAAM3MzD4AAAAAAAAAAMzMzD4AAAAA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AwABAAgACAABABsADgAcABQAFAAcAB0AHgAcAA0ADQAcAA4AEgAfAA0ADQAfAB4AGAAXACAAIAAXACEADAAiAAsAIwAiABYAFgAiAAwAJAAlACYAJwAoACkAKgAFAAQAEwArABAALAAnACkAEQAPACAAIAAPABgAFwAtACEAIQAtAC4ALwAwADEAMAAyADEAMwAvADEALQA0AC4ALgA0ADUALwA2ADAAMAA2ADcAHAA4AB0AHgA4ABwAHwA4AB4ANAA5ADUANgA6ADcAOwA8AD0APgA/AEAAQQAYAEIAQgAYABAAQwBEACwARQAaAEEAQQAaABgABwAEAAIABwACAAMARgBHAEgASQBIAEcAKgAEAEoASwBHAEYATAAmAE0AJgBOAE0AJgAlAE4ATwAkACYATABPACYAOwA9AFAAUQBSAEYARgBSAEsAUQBGAEgASQAaAEgASAAaAEUACwAHAAkACQAHAAgAUwBUAFUAVQBUAFYAVwBYAFkAWgBbAFwAXABbAF0AXgBfAGAAYQBiAGMAZABlAGYAWwBaAFMAUwBaAFQAZwBoAGkAaQBoAGoAawBsAG0AbgBvAF0AbwBmAF0AXQBmAFwAZgBwAGQACQAIAHEAcQAIAHIAXABmAGUAcwB0AHUAdgBrAG0AdwB4AHkAegB5AHsAWwB8AF0AXQB8AH0AWgBxAFQAVABxAHIAfgB/AGgAaAB/AGoAgACBAIIAgwCEAIUAhgBYAIcAbwBwAGYAiACJAFgAWACJAGMAigCLAGAAjACDAI0AjQCDAIUAjgB/AI8AjwB/AJAAfwCOAGoAagCOAJEAkQB5AGoAagB5AGkAeQB4AGkAaQB4AJIAkwCUAG8AbwCUAHAAlAB2AHAAawCVAG4AkwBvAJUAlQBvAG4AlgCXAHYAdgCXAGsAawCXAJUAlQCXAJgAlQCYAJMAkwCYAJkAmQCaAJMAkwCaAJQAmgCWAJQAlACWAHYAgACCAJIAVwCbAJwAnACbAJ0AngBXAJwAnwCgAKEAjgCiAJEAogB7AJEAkQB7AHkAbgBdAGsAowBrAH0AXQB9AGsAgQCkAIIAkAB/AKUApQB/AH4AZABwAG0AbQBwAHYAiQCIAKYApwCMAKgAqACMAIoAVAByAFYAVgByABsACAAbAHIAiACpAKYApgCpAKoAqgCpAKsAqwCpAKwAiQCmAK0ArQCmAKoAigCMAIsAiwCMAI0AWQBYAGIAYgBYAGMAqQCIAFgAqACKAK4AYwCvAGEAYwCJAK0AZQCwAFwAXACwALEAsQCwAAoACgCwABUAqQBYAKwAsgCzAKEAoQCzAJ8AtAC1AHUAtQC2AHUAtwC4AHQAdAC4ALkAugC7AKIAogC7AHsAtgC8AHUAdQC8AL0AvgC/AHoAegC/AMAAwQB6AMIAwgB6AMAAwwDEAMUAxQDEALQAtADEAMYAxgDEAMMAxwDIAMkAyQDIAMUAxQDIAMMAygDLAL4AzADNAM4AzgDNAMkAyQDNAMcAvgDPAL8A0ADRALkAuQDRAM4AzgDRAMwAvwDSAMAA0wDUALUAtQDUALYAtgDUALwAugDVALsAuwDVANYAxgDXALQAtADXALUAtQDXANMA1gDYANkA2gDbANwAyQDFAHQAdADFAHUAyQB0AM4AzgB0ALkA2QDKAHsAvgB6AMoAewDKAHoA2QB7ANYAewC7ANYAWADdAIcAWABXAN0A3QBXAJ4A3gDdAJ4A3wDgAHMAcwDgAHQA4AC3AHQAVwDhAJsAmwDhAOIAuQC4ANAA0AC4AOMAwgDkAMEA5QDmALcAtwDmALgAuADmAOMA4ADnALcAtwDnAOUAwQDoAOkA6gDnAOAA3wDrAOAA4ADrAOoA6QDsAHcAdwDtAO4A7wDwAJ0AnQDwAN8AnQDxAO8A7gDyAPMA4gDxAJsAmwDxAJ0AVgD0AFUAVQD0APUA9gD3APgA+QD6APsA+wD6APwA/QBgAP4A/wBhAAABZAABAWUA9AD5APUA9QD5APsA+QACAfoA+gACAQMBBAEFAQYBBgEFAQcBFQCwAAgBCAGwAAMBCQFtAGwACgH8AAsB+gABAfwA/AABAQsBAQFkAAwBDQEOAQIBAgEOAQ8B+gBlAAEBEAERARIBEwFtAAkBFAEBABUBFQEBAAAAFgEXARgBGQEYARcBFwEaARsBHAEbARoBHQEGAAUABgAVAQAAHgEfAfwA/AAfAfsAIAEOARQBDwEhAQgBCAEhASIBIwEkASUBJQEkASYBEQAlARIAEgAlASYBDQECAfQA9AACAfkAfgAGAScBJwEGAQcBKAEpASoBhwD4AIYAhQArASwBCwEBAQwBFQEGAB0BIwETACQBJAETABQAAAEtAfgA+AAtAS4BLwFgAIsAFQAIARYAFgAIASIBhQAsAY0AjQAsATABMQEyAScBJwEyATMBNAExAQcBBwExAScBNAEHARkBGQEHAQUBGAE1ARYBFgE1ATYBNgE1ATcBNQEoATcBDAE4AQsBCwE4ATkBOAEMARMBCQEKAToBCgELAToBOgELATkBOwE8AT0BPQE8AT4BPwE7AT0BPgFAAT0BPQFAAUEBPQFBAT8BQgFDAUABQAFDAUEBPwFBAUMBQgFEAUMBQwFEAUUBPwFDAUUBRQFEATsBOwFEATwBPwFFATsBRgFHATwBRgE8AUQBRgFEAUIBRgFCAUcBSAE+AUkBSAFJAUIBSAFCAUABSAFAAT4BCQFKARMBEwFKAUsBCQE6AUoBSgE6AUwBOgE5AUwBTAE5AU0BOAFOATkBOQFOAU0BEwFLATgBOAFLAU4BTwE8AVABUAE8AUcBPAFPAT4BPgFPAVEBSQE+AVIBUgE+AVEBSQFTAUcBRwFTAVABKAE1ASkBVAFVAVYBVgFVAVcBEAFYAVkBWQFYAVoBWwFZAfYAXAFdAV4BXwExATQBGQFgATQBNAFgAV8BHgH8AAkB/AAKAQkBCQFhAR4BKgEpAWIBfgAnAaUApQAnATMBSQFSAVMBZABtAAwBDAFtABMBLQFjAS4BLwEwAWQBZAEwAWUBGwANAVYAVgANAfQADgENARsAFAEOAQEAAQAOARsAJAEUAGYBZgEUAB0AJAFmASYBJgFmAWcBEgAmAR8AHwAmAWcBLgFjAWgBaAFjAWkBagFoAWsBawFoAWkBLQFsAWMBYwFsAWkBLwGLADABMAGLAI0A9wD/APgA+AD/AAABaAH4AC4BZAFtAS8BbgEAAWEAAAFsAS0BCAEDAQ8BDwEDAQIBaAFqAfgAXAFvAV0BXQFvAXABIQBUASAAIABUAVYBcQERAXIBEQFzAXIBdAESAXUBdQESAXYBYAF3AV8BXwF3AXgBeQF6AREBEQF6AXMBewEbAXwBGwF9AXwBHAF+ARsBGwF+AX0BfwGAAYEBgAFxAYEBcQGCAYEBggF/AYEBgwGEAYUBhAGAAYUBgAF/AYUBhgF7AYcBiAGJAYoBiQGEAYoBhAGDAYoBewF8AYsBjAF2AY0BdgGJAY0BiQGIAY0BfAF9AY4BjwFyAZABcgFzAZABcwF6AZABeAF3AZEBkgGPAZABggFxAZMBcQFyAZMBcgGPAZMBlAGVAZYBcQGAAREBhAESAYABEgERAYABhAGJARIBEgGJAXYBRwFCAUkBlQFgAYYBewGGARsBYAEbAYYBlQGUAWABYAGUAXcB+ACHAN0AWwH2AN0A3QD2APgA3gBbAd0AWAEQAZcBlwEQAZgBEAESAZgBEgF0AZgBmQGaAZsBmwGaAfYAnAF1AYwBjAF1AXYBfgEcAZ0BngF0AZ8BdAF1AZ8BdQGcAZ8BmAF0AaABdAGeAaABHAEaAaEBogGYAaABlwGYAaMBmAGiAaMBGgEXAaQBpQGXAaMBWAGXAaYBlwGlAaYBFwEWAacBqAFYAaYBWAGoAakBFgE2AaoBqwFaAakBWgFYAakBWgGrAawBNgE3Aa0BmQGbAawBmwFaAawBnQDfAJwAnADfAHMA9gBZAZsBWQFaAZsBrgGvAbABsQGyAbMBGQEXARsBGQEbAWABNQEYAQUBBQEYARkB6QB3AHoAegB3AHkAwQDpAHoAkgB4AO4AeAB3AO4AgACSAPMAkgDuAPMAggBnAJIAkgBnAGkAKQE1AQQBBAE1AQUBIgEhAbQBIgG0ARYAFgC0ASMAtQG2AbcBHQEFALgBuQEoACcAuQEnALoBIwErABMAAwGwAPoA+gCwAGUACgAJALEAsQAJAHEAsQBxAFwAXABxAFoAEQAgACUBJQEgAFYBLgC7ASEAIQC7AVQBvAG9Ab4BvgG9AS8AMwC+AS8AuwEuAL8BvwEuADUALwC9ATYANgC9AcABwQHCAcMBwwHCAcQBxQHCAcEBwwHGAcEBwQHGAccBwQHHAcUByAHJAcYBxgHJAccBxQHHAckByAHKAckByQHKAcsBxQHJAcsBywHKAcIBwgHKAcQBxQHLAcIBzAHNAcQBzAHEAcoBzAHKAcgBzAHIAc0BzgHDAc8BzgHPAcgBzgHIAcYBzgHGAcMB0AHEAdEB0QHEAc0B0AHSAcQBxAHSAcMBzwHDAdMB0wHDAdIBzwHUAc0BzQHUAdEBzwHTAdQBzQHIAc8BZgEdADgAZwFmATgAHwBnATgAvwE1ADkANgDAAToA1QHWAdcB2AHZAdoB2wHcAVYB3AEjAVYB3QG6Ad4B3wHbAVcBVwHbAVYB4AHhAeIBFQEgARQB4wHhAeABFQEdASAB4wHgAeQB5QEdAbgB5gHnAbYBtgHnAegBtgHoAbcB6QG2AbUB5gG2AekB1QHqAdYB5AHrAeMB4wHrAewB7AHhAeMB3wFXAeEB4QFXAeIB7QHuAe8B7wHuAfABAAAAAM3MzD3NzEw+mpmZPs3MzD4AAAA/mpkZPzMzMz/NzEw/ZmZmPwAAgD/NzIw/mpmZPwAAgD8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAPwAAgD8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=="});var ob,Lr,Vf=Dt(()=>{Pn();Gp();rs();qp();ob=r=>r<0?0:r>1?1:r,Lr=class{constructor(e={}){V(this,"root",new qt);V(this,"body",new qt);V(this,"mixer",null);V(this,"action",null);V(this,"flapT",10);V(this,"cawT",0);V(this,"fold",0);V(this,"foldTarget",0);V(this,"flapBoost",0);V(this,"time",0);let t=e.tint??1447452,n=e.roughness??.52,i=e.wingspan??4.2;this.root.add(this.body),this.body.rotation.order="YXZ",this.load(t,n,i)}async load(e,t,n){try{let s=await new sl().loadAsync(Xp),o=s.scene,a=new un().setFromObject(o),c=new z,l=new z;a.getSize(c),a.getCenter(l);let h=n/Math.max(c.x,.001);o.position.sub(l).multiplyScalar(h),o.scale.setScalar(h);let u=new qt;u.add(o),o.traverse(f=>{let d=f;if(!d.isMesh)return;let p=new oi({color:e,roughness:t,metalness:.14,envMapIntensity:1.15});Wp(p,{key:"crow"}),d.material=p,d.frustumCulled=!1}),s.animations.length&&(this.mixer=new yo(o),this.action=this.mixer.clipAction(s.animations[0]),this.action.play()),this.body.add(u)}catch{let i=new qt,s=new oi({color:e,roughness:t,metalness:.1}),o=new it(new co(.35,.9,4,10),s);o.rotation.x=Math.PI/2,i.add(o);let a=new it(new lo(.1,.4,7),s);a.rotation.x=Math.PI/2,a.position.set(0,.08,.85),i.add(a);for(let c of[-1,1]){let l=new it(new Vn(1.9,.05,.5),s);l.position.set(c*1.2,.15,0),l.rotation.z=c*.14,i.add(l)}this.body.add(i)}}triggerFlap(){this.flapT>.09&&(this.flapT=0,this.flapBoost=1)}caw(){this.cawT=.34}setFold(e){this.foldTarget=ob(e)}setLegs(e){}update(e,t,n){if(this.time+=e,this.flapT+=e,this.fold+=(this.foldTarget-this.fold)*(1-Math.exp(-e*7)),this.mixer&&this.action){if(this.flapBoost=Math.max(0,this.flapBoost-e*1.25),this.fold>.6){this.mixer.timeScale=0;let i=this.action.getClip().duration,s=this.action.time;s>.02&&(this.action.time=Math.max(0,s-e*2.2*(s>i/2?-1:1)))}else{let i=Math.min(1,n/18);this.mixer.timeScale=.85+i*.5+this.flapBoost*1.9}this.mixer.update(e)}if(this.cawT>0){this.cawT=Math.max(0,this.cawT-e);let i=1-this.cawT/.34;this.body.rotation.x=-.38*Math.sin(i*Math.PI),this.body.position.y=Math.sin(i*Math.PI)*.08}else this.body.rotation.x+=(Math.sin(this.time*1.3)*.035-this.body.rotation.x)*Math.min(1,e*6),this.body.position.y=Math.sin(this.time*2.2)*.02}tumbleSpin(e){e.angularVelocity.set((Math.random()-.5)*6,(Math.random()-.5)*4,(Math.random()-.5)*6)}}});function Yp(){return new Qe({uniforms:{uTime:wt.uTime,...Kt},vertexShader:`
      attribute float aSeed;
      attribute float aKind;
      varying vec3 vW, vN, vLocal, vSize;
      varying float vSeed, vKind;
      void main(){
        vSeed = aSeed; vKind = aKind;
        vLocal = position;
        #ifdef USE_INSTANCING
          vSize = vec3(length(instanceMatrix[0].xyz), length(instanceMatrix[1].xyz), length(instanceMatrix[2].xyz));
          vec4 wp = modelMatrix * instanceMatrix * vec4(position, 1.0);
          vN = normalize(mat3(instanceMatrix) * normal);
        #else
          vSize = vec3(1.0);
          vec4 wp = modelMatrix * vec4(position, 1.0);
          vN = normal;
        #endif
        vW = wp.xyz;
        gl_Position = projectionMatrix * viewMatrix * wp;
      }
    `,fragmentShader:`
      varying vec3 vW, vN, vLocal, vSize;
      varying float vSeed, vKind;
      uniform float uTime;
      ${Xn}
      float h21(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7)))*43758.5453); }
      void main(){
        vec3 n = normalize(vN);
        float seed = vSeed;
        vec2 fuv; float faceSel;
        if (abs(n.y) > 0.5) { fuv = (vLocal.xz + 0.5) * vSize.xz; faceSel = 2.0; }
        else if (abs(n.x) > 0.5) { fuv = vec2((vLocal.z + 0.5) * vSize.z, (vLocal.y + 0.5) * vSize.y); faceSel = 0.0; }
        else { fuv = vec2((vLocal.x + 0.5) * vSize.x, (vLocal.y + 0.5) * vSize.y); faceSel = 1.0; }

        float tone = 0.75 + 0.5 * h21(vec2(seed, 7.7));
        vec3 base = mix(vec3(0.012, 0.016, 0.026), vec3(0.03, 0.034, 0.05), tone);
        vec3 col = base * (0.35 + 0.25 * max(n.y, 0.0));
        vec3 emis = vec3(0.0);

        if (faceSel < 1.5) {
          // window grid
          vec2 cellSize = vec2(2.0 + h21(vec2(seed, 1.0)) * 1.0, 2.65);
          vec2 cid = floor(fuv / cellSize);
          vec2 cuv = fract(fuv / cellSize);
          float rnd = h21(cid + seed * 113.0 + faceSel * 31.0);
          float rowRnd = h21(vec2(cid.y, seed * 57.0));
          float density = 0.14 + 0.28 * h21(vec2(seed, 3.3));
          float lit = step(rnd, density) * step(0.2, rowRnd);
          float wx = step(0.22, cuv.x) * step(cuv.x, 0.82);
          float wy = step(0.3, cuv.y) * step(cuv.y, 0.78);
          float win = wx * wy;
          vec2 tot = (faceSel < 0.5) ? vec2(vSize.z, vSize.y) : vec2(vSize.x, vSize.y);
          float inset = step(1.0, fuv.x) * step(fuv.x, tot.x - 1.0) * step(0.5, fuv.y) * step(fuv.y, tot.y - 2.0);
          float warm = h21(cid + seed * 7.0);
          vec3 wcol = mix(vec3(0.45, 0.75, 1.0), vec3(1.0, 0.75, 0.42), step(0.45, warm));
          wcol = mix(wcol, vec3(0.75, 0.95, 1.1), step(0.9, warm));
          float bright = 0.26 + 0.8 * h21(cid + seed * 19.0);
          float fl = 1.0;
          if (h21(cid + seed) > 0.97) fl = 0.4 + 0.6 * step(0.5, fract(uTime * (1.0 + rnd * 3.0) + rnd * 9.0));
          emis += wcol * win * lit * inset * bright * fl;
          col += vec3(0.015, 0.02, 0.03) * win * inset * (1.0 - lit);

          // glowing shop windows on the ground floor
          if (vW.y < 10.0 && vKind > 0.5 && vKind < 1.5 && h21(vec2(seed, 92.0)) > 0.38) {
            float band = smoothstep(8.5, 6.0, vW.y) * step(2.5, vW.y);
            float hue = h21(vec2(seed, 91.0));
            vec3 scol = hue < 0.4 ? vec3(0.2, 0.85, 1.0) : (hue < 0.7 ? vec3(1.0, 0.25, 0.5) : vec3(1.0, 0.65, 0.25));
            float sfreq = 0.18 + h21(vec2(seed, 93.0)) * 0.62;
            float stripes = 0.55 + 0.45 * step(0.35, fract(fuv.x * sfreq + seed));
            emis += scol * band * (0.45 + 0.7 * h21(vec2(seed, 94.0))) * stripes;
          }
          // vertical neon edge strip on some towers
          float edgeD = min(fuv.x, tot.x - fuv.x);
          if (h21(vec2(seed, 5.0)) > 0.72) {
            float strip = smoothstep(0.3, 0.12, edgeD) * step(3.0, fuv.y);
            vec3 ncol = h21(vec2(seed, 6.0)) > 0.5 ? vec3(0.2, 0.8, 1.0) : vec3(1.0, 0.2, 0.45);
            emis += ncol * strip * 1.0;
          }
        } else if (n.y > 0.5) {
          vec2 tot = vSize.xz;
          vec2 d2 = min(fuv, tot - fuv);
          float rim = smoothstep(0.55, 0.25, min(d2.x, d2.y));
          if (h21(vec2(seed, 11.0)) > 0.5) emis += vec3(0.25, 0.8, 1.0) * rim * 1.35;
          col *= 0.75;
        }
        col += emis;
        col = cityFog(col, vW, cameraPosition);
        gl_FragColor = vec4(col, 1.0);
      }
    `})}function Kp(){return new Qe({uniforms:{uTime:wt.uTime,...Kt},vertexShader:`
      attribute float aSeed;
      attribute float aKind;
      varying vec3 vW, vN, vLocal, vSize;
      varying float vSeed, vKind;
      void main(){
        vSeed = aSeed; vKind = aKind; vLocal = position;
        #ifdef USE_INSTANCING
          vSize = vec3(length(instanceMatrix[0].xyz), length(instanceMatrix[1].xyz), length(instanceMatrix[2].xyz));
          vec4 wp = modelMatrix * instanceMatrix * vec4(position, 1.0);
          vN = normalize(mat3(instanceMatrix) * normal);
        #else
          vSize = vec3(1.0); vec4 wp = modelMatrix * vec4(position, 1.0); vN = normal;
        #endif
        vW = wp.xyz;
        gl_Position = projectionMatrix * viewMatrix * wp;
      }
    `,fragmentShader:`
      varying vec3 vW, vN, vLocal, vSize;
      varying float vSeed, vKind;
      uniform float uTime;
      ${Xn}
      float h21(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7)))*43758.5453); }
      void main(){
        vec3 n = normalize(vN);
        vec3 col = vec3(0.020, 0.023, 0.030) * (0.5 + 0.4 * max(n.y, 0.0));
        col *= 0.8 + 0.4 * h21(floor(vW.xz * 0.5));
        vec3 emis = vec3(0.0);
        float k = vKind;
        if (k < 0.5) {
          // deck: seam strips + guide lines
          if (n.y > 0.5) {
            float seam = min(vLocal.z + 0.5, 0.5 - vLocal.z) * vSize.z;
            emis += vec3(0.15, 0.75, 1.0) * smoothstep(0.42, 0.18, seam) * 1.4;
            float ex = (0.5 - abs(vLocal.x)) * vSize.x;
            emis += vec3(0.12, 0.55, 0.9) * smoothstep(0.3, 0.1, ex) * 0.9;
          }
          if (abs(n.y) < 0.5) {
            float band = smoothstep(0.34, 0.5, vLocal.y);
            emis += vec3(1.0, 0.45, 0.15) * band * 0.5;
          }
        } else if (k < 1.5) {
          // pylon: hazard glow band near base
          float hb = smoothstep(7.0, 2.0, vW.y) * step(0.5, fract(vW.y * 0.8));
          emis += vec3(1.0, 0.55, 0.1) * hb * 0.5;
          col *= 0.85;
        } else if (k < 2.5) {
          // skybridge: lit window band
          float band = step(abs(vLocal.y), 0.18);
          float win = step(0.35, fract((vLocal.x + 0.5) * vSize.x * 0.6 + vSeed));
          emis += vec3(0.55, 0.8, 1.0) * band * win * 1.0;
        } else if (k < 3.5) {
          col *= 0.7; // plain balcony slab / frame
        } else if (k < 4.5) {
          // guardrail: dark body, bright top lip
          col *= 0.55;
          float lip = smoothstep(0.30, 0.48, vLocal.y);
          emis += vec3(0.18, 0.75, 1.0) * lip * 1.7;
        }
        col += emis;
        col = cityFog(col, vW, cameraPosition);
        gl_FragColor = vec4(col, 1.0);
      }
    `})}function Zp(r){return new Qe({transparent:!0,depthWrite:!1,side:Gn,blending:Rn,uniforms:{tAtlas:{value:r.tex},uTime:wt.uTime,...Kt},vertexShader:`
      attribute vec4 aTile;
      attribute vec3 aTint;
      attribute vec2 aFlick;
      varying vec2 vUv; varying vec4 vTile; varying vec3 vTint; varying vec2 vFlick;
      varying vec3 vW;
      void main(){
        vUv = uv; vTile = aTile; vTint = aTint; vFlick = aFlick;
        #ifdef USE_INSTANCING
          vec4 wp = modelMatrix * instanceMatrix * vec4(position, 1.0);
        #else
          vec4 wp = modelMatrix * vec4(position, 1.0);
        #endif
        vW = wp.xyz;
        gl_Position = projectionMatrix * viewMatrix * wp;
      }
    `,fragmentShader:`
      uniform sampler2D tAtlas; uniform float uTime;
      varying vec2 vUv; varying vec4 vTile; varying vec3 vTint; varying vec2 vFlick;
      varying vec3 vW;
      ${Xn}
      void main(){
        vec4 t = texture2D(tAtlas, vTile.xy + vUv * vTile.zw);
        float a = t.a;
        float f = 1.0;
        if (vFlick.y > 1.5) {
          f = 0.25 + 0.75 * step(0.42, fract(sin(floor(uTime * 9.0 + vFlick.x) * 91.7) * 43758.0));
        } else if (vFlick.y > 0.5) {
          f = 0.82 + 0.18 * sin(uTime * 55.0 + vFlick.x);
        }
        vec3 col = vTint * a * f * 2.9;
        float fade = exp(-distance(vW, cameraPosition) * uFogDensity * 1.35);
        col *= fade;
        gl_FragColor = vec4(col, a);
      }
    `})}function $p(r,e){return new Qe({transparent:!0,depthWrite:!1,side:sn,blending:Rn,uniforms:{tAtlas:{value:r.tex},tGlyphs:{value:e},uTime:wt.uTime,...Kt},vertexShader:`
      attribute vec4 aTile;
      attribute vec3 aTint;
      attribute vec2 aKindSeed;   // kind, seed
      varying vec2 vUv; varying vec3 vW; varying vec3 vN;
      varying vec4 vTile; varying vec3 vTint; varying vec2 vKindSeed;
      void main(){
        vUv = uv; vTile = aTile; vTint = aTint; vKindSeed = aKindSeed;
        #ifdef USE_INSTANCING
          vec4 wp = modelMatrix * instanceMatrix * vec4(position, 1.0);
          vN = normalize(mat3(instanceMatrix) * normal);
        #else
          vec4 wp = modelMatrix * vec4(position, 1.0);
          vN = normalize(mat3(modelMatrix) * normal);
        #endif
        vW = wp.xyz;
        gl_Position = projectionMatrix * viewMatrix * wp;
      }
    `,fragmentShader:`
      uniform sampler2D tAtlas, tGlyphs;
      uniform float uTime;
      varying vec2 vUv; varying vec3 vW; varying vec3 vN;
      varying vec4 vTile; varying vec3 vTint; varying vec2 vKindSeed;
      ${Xn}
      float h11(float p){ return fract(sin(p * 127.1) * 43758.5453); }
      void main(){
        vec2 uv = vUv;
        float kind = vKindSeed.x;
        float t = uTime + vKindSeed.y * 40.0;
        float band = fract(uv.y * 1.0 - t * 0.11);
        float glitch = step(0.965, h11(floor(t * 13.0) + floor(uv.y * 24.0)));
        uv.x += glitch * (h11(floor(t * 17.0)) - 0.5) * 0.09;
        vec3 col = vec3(0.0);
        float alpha = 0.0;
        if (kind < 0.5) {
          // billboard: atlas tile + frame + dark glass backing
          vec4 s = texture2D(tAtlas, vTile.xy + uv * vTile.zw);
          float frame = max(step(0.975, max(abs(uv.x - 0.5), abs(uv.y - 0.5)) * 2.05), 0.0);
          vec3 panel = (vec3(0.015, 0.022, 0.038) + vTint * 0.06) * 0.9;
          col = vTint * (s.a * 1.6 + frame * 0.9) + panel;
          alpha = max(s.a * 0.8 + frame * 0.5 + 0.10, 0.38);
        } else if (kind < 1.5) {
          // rotating glyph ring
          vec2 guv = vec2(uv.x * 3.0 + t * 0.06, uv.y);
          float g = texture2D(tGlyphs, guv).a;
          col = vTint * g * 2.8;
          alpha = g * 0.9 + 0.02;
        } else {
          // mega screen: sweeping gradients + Cyrillic ticker rows + pulse logo
          float rows = 6.0;
          vec2 guv = vec2(uv.x * 2.2 + t * (0.05 + 0.13 * h11(floor(uv.y * rows))), uv.y * rows);
          float g = texture2D(tGlyphs, vec2(guv.x, fract(guv.y))).a;
          float sweep = 0.5 + 0.5 * sin(uv.x * 4.0 - t * 1.7 + sin(uv.y * 9.0 + t));
          vec3 c2 = mix(vTint, vec3(1.0, 0.25, 0.55), 0.5 + 0.5 * sin(t * 0.23));
          col = c2 * (g * 1.3 + sweep * 0.25);
          float logoR = distance(uv, vec2(0.5, 0.52));
          float logo = smoothstep(0.16, 0.15, logoR) * smoothstep(0.10, 0.11, logoR);
          col += vec3(1.0) * logo * (0.7 + 0.6 * sin(t * 2.2));
          alpha = 0.72;
        }
        float scan = 0.72 + 0.28 * sin(vW.y * 14.0 - t * 8.0);
        float edgeFade = smoothstep(0.0, 0.09, uv.x) * smoothstep(1.0, 0.91, uv.x)
                       * smoothstep(0.0, 0.09, uv.y) * smoothstep(1.0, 0.91, uv.y);
        float fl = 0.9 + 0.1 * sin(t * 37.0 + uv.y * 40.0);
        col *= scan * fl * 1.15;
        alpha *= edgeFade * scan;
        vec3 V = normalize(cameraPosition - vW);
        float fres = pow(1.0 - abs(dot(V, normalize(vN))), 2.0);
        col += vTint * fres * 0.35;
        float dist = distance(vW, cameraPosition);
        col *= mix(1.0, 0.5, smoothstep(75.0, 25.0, dist));
        float fade = exp(-dist * uFogDensity * 1.2);
        gl_FragColor = vec4(col * fade, alpha * fade);
      }
    `})}function jp(){return new Qe({transparent:!0,depthWrite:!1,blending:Rn,uniforms:{uTime:wt.uTime,...Kt},vertexShader:`
      attribute vec3 aPos;
      attribute vec3 aCol;
      attribute vec2 aBlink; // rate, size
      varying vec3 vCol; varying vec2 vUv; varying float vBlink; varying vec3 vW;
      uniform float uTime;
      void main(){
        vUv = uv;
        float blink = 1.0;
        if (aBlink.x > 0.0) blink = 0.15 + 0.85 * pow(0.5 + 0.5 * sin(uTime * aBlink.x + aPos.x * 3.1 + aPos.z), 6.0);
        vBlink = blink;
        vCol = aCol;
        vW = aPos;
        vec4 mv = viewMatrix * vec4(aPos, 1.0);
        mv.xy += (uv - 0.5) * aBlink.y;
        gl_Position = projectionMatrix * mv;
      }
    `,fragmentShader:`
      varying vec3 vCol; varying vec2 vUv; varying float vBlink; varying vec3 vW;
      ${Xn}
      void main(){
        float d = length(vUv - 0.5) * 2.0;
        float g = exp(-d * d * 4.2) * (1.0 - smoothstep(0.7, 1.0, d));
        float fade = exp(-distance(vW, cameraPosition) * uFogDensity * 1.15);
        vec3 col = vCol * g * vBlink * fade;
        gl_FragColor = vec4(col, g * vBlink * fade);
      }
    `})}function Jp(){return new Qe({transparent:!0,depthWrite:!1,blending:Rn,uniforms:{uTime:wt.uTime,...Kt},vertexShader:`
      attribute vec3 aPos;
      attribute float aWarm;
      varying vec2 vUv; varying float vFade; varying float vWarm;
      void main(){
        vUv = uv; vWarm = aWarm;
        vec3 toCam = cameraPosition - aPos;
        vec3 right = normalize(cross(vec3(0.0, 1.0, 0.0), normalize(toCam)) + vec3(1e-4, 0.0, 0.0));
        float w = 2.8, h = 8.4;
        vec3 wp = aPos + right * (uv.x - 0.5) * w - vec3(0.0, 1.0 - uv.y, 0.0) * h;
        float d = distance(aPos, cameraPosition);
        vFade = (1.0 - smoothstep(70.0, 300.0, d)) * smoothstep(3.0, 14.0, d);
        gl_Position = projectionMatrix * viewMatrix * vec4(wp, 1.0);
      }
    `,fragmentShader:`
      varying vec2 vUv; varying float vFade; varying float vWarm;
      uniform float uTime;
      void main(){
        float x = abs(vUv.x - 0.5) * 2.0;
        float core = exp(-x * x * 5.0);
        float fall = pow(vUv.y, 2.4);
        float flick = 0.88 + 0.12 * sin(uTime * 6.0 + vUv.y * 26.0);
        vec3 col = mix(vec3(0.45, 0.75, 1.0), vec3(1.0, 0.72, 0.4), vWarm);
        float a = core * fall * 0.16 * vFade * flick;
        gl_FragColor = vec4(col * a * 2.2, a);
      }
    `})}function Qp(){return new Qe({uniforms:{uTime:wt.uTime,uRainAmt:wt.uRainAmt,tRefl:{value:null},uMirrorVP:{value:new Ie},...Kt},vertexShader:`
      varying vec3 vW;
      void main(){
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vW = wp.xyz;
        gl_Position = projectionMatrix * viewMatrix * wp;
      }
    `,fragmentShader:`
      varying vec3 vW;
      uniform sampler2D tRefl;
      uniform mat4 uMirrorVP;
      uniform float uTime, uRainAmt;
      ${Xn}
      float h21(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7)))*43758.5453); }
      float vnoise(vec2 p){
        vec2 i = floor(p), f = fract(p);
        f = f*f*(3.0-2.0*f);
        return mix(mix(h21(i), h21(i+vec2(1,0)), f.x), mix(h21(i+vec2(0,1)), h21(i+vec2(1,1)), f.x), f.y);
      }
      float fbm(vec2 p){
        float a = 0.5, s = 0.0;
        for (int i=0;i<4;i++){ s += a * vnoise(p); p = p * 2.13 + 17.0; a *= 0.5; }
        return s;
      }
      // expanding rain rings -> normal xz perturbation
      vec2 ripple(vec2 p, float t){
        vec2 acc = vec2(0.0);
        for (int i = 0; i < 2; i++) {
          vec2 sp = p * (0.55 + float(i) * 0.31) + float(i) * 31.7;
          vec2 id = floor(sp), f = fract(sp) - 0.5;
          float rnd = h21(id + float(i) * 71.0);
          float ph = fract(t * (0.7 + rnd * 0.6) + rnd * 11.0);
          vec2 dc = f - (vec2(rnd, h21(id + 3.0)) - 0.5) * 0.6;
          float r = length(dc);
          float ring = sin((r - ph * 0.55) * 40.0) * exp(-r * 5.0) * (1.0 - ph) * step(r, ph * 0.6);
          acc += normalize(dc + 1e-4) * ring;
        }
        return acc;
      }
      void main(){
        vec2 p = vW.xz;
        float t = uTime;

        // ---- street grid: roads every ${Et(Rt)} m in both axes
        vec2 g = mod(p + ${Et(Rt/2)}, ${Et(Rt)}) - ${Et(Rt/2)}; // centered cell coords
        float dX = abs(g.x); // distance to nearest N-S road center line
        float dZ = abs(g.y); // distance to nearest E-W road center line
        float road = 1.0 - step(${Et(Tt)}, min(dX, dZ));
        float sidewalk = (1.0 - step(${Et(Tt+3.5)}, min(dX, dZ))) - road;

        float n0 = fbm(p * 0.13);
        float n1 = fbm(p * 0.55);
        // asphalt vs courtyard
        vec3 alb = mix(vec3(0.012, 0.014, 0.02), vec3(0.028, 0.03, 0.038), n0);
        alb = mix(mix(vec3(0.02, 0.022, 0.028), vec3(0.036, 0.038, 0.046), n1), alb, road);
        alb *= 0.8 + 0.4 * n1;
        // sidewalk slab joints
        float slabsX = step(0.92, fract(p.x * 0.33)) + step(0.92, fract(p.y * 0.33));
        alb *= 1.0 - sidewalk * slabsX * 0.25;

        vec3 emis = vec3(0.0);

        // gutter / curb strip just outside the asphalt
        float curb = smoothstep(0.35, 0.12, abs(min(dX, dZ) - ${Et(Tt+.2)}));
        alb = mix(alb, vec3(0.050, 0.052, 0.060), curb * 0.8);

        // ---- asphalt wear: patches, cracks, manholes, wheel-track polish
        float pr = h21(floor(p / 26.0) + 9.1);
        float wpatch = step(0.8, pr)
          * smoothstep(0.5, 0.38, max(abs(fract(p.x / 26.0) - 0.5), abs(fract(p.y / 26.0) - 0.5)))
          * road;
        alb *= 1.0 - wpatch * 0.28;
        float crk = smoothstep(0.016, 0.0, abs(vnoise(p * 0.85) - 0.5)) * (1.0 - sidewalk);
        alb *= 1.0 - crk * 0.22;

        // wheel tracks: polished bands inside every lane (lane centers 1.65 / 4.95)
        float trkV = smoothstep(0.36, 0.10, abs(abs(g.y) - 0.85))
                   + smoothstep(0.36, 0.10, abs(abs(g.y) - 2.45))
                   + smoothstep(0.36, 0.10, abs(abs(g.y) - 4.15))
                   + smoothstep(0.36, 0.10, abs(abs(g.y) - 5.75));
        trkV *= step(dZ, ${Et(Tt)});
        float trkH = smoothstep(0.36, 0.10, abs(abs(g.x) - 0.85))
                   + smoothstep(0.36, 0.10, abs(abs(g.x) - 2.45))
                   + smoothstep(0.36, 0.10, abs(abs(g.x) - 4.15))
                   + smoothstep(0.36, 0.10, abs(abs(g.x) - 5.75));
        trkH *= step(dX, ${Et(Tt)});
        float tracks = max(trkV, trkH) * road;
        alb *= 1.0 - tracks * 0.20;

        // manholes scattered over the asphalt
        vec2 mc = p * 0.09;
        vec2 mid = floor(mc);
        float mrnd = h21(mid + 4.7);
        vec2 moff = (vec2(h21(mid + 1.3), h21(mid + 2.9)) - 0.5) * 0.5;
        float md = length(fract(mc) - 0.5 - moff);
        float manhole = step(0.74, mrnd) * road * (1.0 - smoothstep(0.30, 0.35, md));
        alb *= 1.0 - manhole * 0.45;
        emis += vec3(0.06) * manhole * smoothstep(0.23, 0.30, md) * smoothstep(0.38, 0.31, md);

        // ---- road paint (worn white): center double line, dashed separators,
        //      edge lines, zebra crossings and stop lines near the junctions
        float wear = 0.55 + 0.45 * h21(floor(p * 1.7) + 2.3);
        float paint = 0.0;
        float onEW = step(dZ, ${Et(Tt)});
        float onNS = step(dX, ${Et(Tt)});
        // paint breaks before the junction + crosswalk zone
        float brkEW = step(${Et(Tt+5.9)}, dX);
        float brkNS = step(${Et(Tt+5.9)}, dZ);
        float brkEdgeEW = step(${Et(Tt+.6)}, dX);
        float brkEdgeNS = step(${Et(Tt+.6)}, dZ);
        // center double solid line
        paint += smoothstep(0.11, 0.05, abs(abs(g.y) - 0.24)) * onEW * brkEW;
        paint += smoothstep(0.11, 0.05, abs(abs(g.y) - 0.50)) * onEW * brkEW;
        paint += smoothstep(0.11, 0.05, abs(abs(g.x) - 0.24)) * onNS * brkNS;
        paint += smoothstep(0.11, 0.05, abs(abs(g.x) - 0.50)) * onNS * brkNS;
        // dashed lane separators at 3.3 / 6.6 m (3 m dash, 6 m gap)
        float dashPhX = step(fract(p.x * 0.111), 0.34);
        float dashPhY = step(fract(p.y * 0.111), 0.34);
        paint += smoothstep(0.10, 0.045, abs(abs(g.y) - 3.3)) * dashPhX * onEW * brkEW;
        paint += smoothstep(0.10, 0.045, abs(abs(g.y) - 6.6)) * dashPhX * onEW * brkEW;
        paint += smoothstep(0.10, 0.045, abs(abs(g.x) - 3.3)) * dashPhY * onNS * brkNS;
        paint += smoothstep(0.10, 0.045, abs(abs(g.x) - 6.6)) * dashPhY * onNS * brkNS;
        // solid edge lines at 9.35 m
        paint += smoothstep(0.11, 0.05, abs(abs(g.y) - 9.35)) * onEW * brkEdgeEW;
        paint += smoothstep(0.11, 0.05, abs(abs(g.x) - 9.35)) * onNS * brkEdgeNS;
        // zebra crossings just outside each junction: stripes parallel to traffic
        float zebEW = (1.0 - smoothstep(1.7, 2.1, abs(dX - ${Et(Tt+2.7)})))
                    * step(fract(p.y), 0.45) * onEW;
        float zebNS = (1.0 - smoothstep(1.7, 2.1, abs(dZ - ${Et(Tt+2.7)})))
                    * step(fract(p.x), 0.45) * onNS;
        paint += max(zebEW, zebNS) * step(dX + dZ, ${Et(Tt*2+12)});
        // stop lines on the approach lanes, before the zebra
        float stopEW = smoothstep(0.30, 0.14, abs(abs(g.x) - ${Et(Tt+5.2)}))
                     * step(0.7, abs(g.y)) * step(abs(g.y), ${Et(Tt-.7)}) * step(g.y * g.x, 0.0);
        float stopNS = smoothstep(0.30, 0.14, abs(abs(g.y) - ${Et(Tt+5.2)}))
                     * step(0.7, abs(g.x)) * step(abs(g.x), ${Et(Tt-.7)}) * step(g.x * g.y, 0.0);
        paint += max(stopEW, stopNS);
        paint = clamp(paint, 0.0, 1.0) * road;
        float pw = paint * wear;
        alb = mix(alb, vec3(0.26, 0.27, 0.29), pw);
        emis += vec3(0.16, 0.17, 0.19) * pw * 0.30;

// ---- wet reflection
        float puddle = smoothstep(0.5, 0.78, fbm(p * 0.09 + 3.7));
        puddle = max(puddle, smoothstep(0.55, 0.9, fbm(p * 0.045 + 9.1))) * mix(0.55, 1.0, road);
        // wheel tracks hold water, fresh paint and rough patches shed it
        puddle = clamp(puddle + tracks * 0.22 - wpatch * 0.25 - pw * 0.35, 0.0, 1.0);
        vec2 rip = ripple(p, t) * (0.35 + 0.65 * uRainAmt);
        vec2 flow = vec2(vnoise(p * 0.7 + t * 0.35), vnoise(p * 0.7 - t * 0.29)) - 0.5;
        vec2 nrm = rip * 1.7 + flow * 0.22;

        vec3 V = normalize(cameraPosition - vW);
        float fres = pow(1.0 - max(V.y, 0.0), 3.0);
        float reflAmt = mix(0.09, 0.98, puddle) * mix(0.5, 1.0, fres);

        vec3 wpos = vW + vec3(nrm.x, 0.0, nrm.y) * (0.5 + 1.6 * puddle);
        vec4 mp = uMirrorVP * vec4(wpos, 1.0);
        vec2 ruv = mp.xy / mp.w * 0.5 + 0.5;
        float lod = mix(4.0, 0.0, puddle);
        vec3 refl = vec3(0.0);
        if (ruv.x > 0.0 && ruv.x < 1.0 && ruv.y > 0.0 && ruv.y < 1.0) {
          refl = textureLod(tRefl, ruv, lod).rgb;
          refl += textureLod(tRefl, ruv + vec2(0.0, 0.012), lod + 1.2).rgb * 0.6;
          refl += textureLod(tRefl, ruv + vec2(0.0, 0.03), lod + 2.2).rgb * 0.35;
          refl /= 1.95;
        }
        vec3 col = alb * (0.35 + 0.3 * puddle);
        col += refl * reflAmt * 1.15;
        col += emis * mix(1.0, 0.45, puddle);

        col = cityFog(col, vW, cameraPosition);
        gl_FragColor = vec4(col, 1.0);
      }
    `})}function em(){return new Qe({uniforms:{uTime:wt.uTime,...Kt},vertexShader:`
      attribute vec3 aTint;
      attribute float aSeed;
      varying vec3 vW, vN, vLocal, vTint; varying float vSeed;
      void main(){
        vTint = aTint; vSeed = aSeed; vLocal = position;
        #ifdef USE_INSTANCING
          vec4 wp = modelMatrix * instanceMatrix * vec4(position, 1.0);
          vN = normalize(mat3(instanceMatrix) * normal);
        #else
          vec4 wp = modelMatrix * vec4(position, 1.0); vN = normal;
        #endif
        vW = wp.xyz;
        gl_Position = projectionMatrix * viewMatrix * wp;
      }
    `,fragmentShader:`
      varying vec3 vW, vN, vLocal, vTint; varying float vSeed;
      ${Xn}
      void main(){
        vec3 n = normalize(vN);
        vec3 col = vTint * (0.25 + 0.35 * max(n.y, 0.0));
        float band = step(abs(vLocal.y - 0.12), 0.14) * step(abs(n.y), 0.5);
        col = mix(col, vec3(0.05, 0.09, 0.13), band * 0.85);
        float front = step(0.49, -vLocal.z);
        float rear = step(0.49, vLocal.z);
        float strip = step(abs(vLocal.y + 0.1), 0.09);
        vec3 emis = front * strip * vec3(1.0, 0.95, 0.8) * 3.2 + rear * strip * vec3(1.0, 0.08, 0.05) * 2.6;
        // roof beacon for taxis
        if (vSeed > 0.75 && vLocal.y > 0.48) emis += vec3(1.0, 0.7, 0.2) * 1.4;
        col += emis;
        col = cityFog(col, vW, cameraPosition);
        gl_FragColor = vec4(col, 1.0);
      }
    `})}function tm(){return new Qe({transparent:!0,depthWrite:!1,side:sn,blending:Rn,uniforms:{uTime:wt.uTime,uPulse:{value:0},...Kt},vertexShader:`
      varying vec2 vUv; varying vec3 vW;
      void main(){
        vUv = uv;
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vW = wp.xyz;
        gl_Position = projectionMatrix * viewMatrix * wp;
      }
    `,fragmentShader:`
      varying vec2 vUv; varying vec3 vW;
      uniform float uTime, uPulse;
      ${Xn}
      void main(){
        float d = length(vUv - 0.5) * 2.0;
        float ring = smoothstep(0.10, 0.02, abs(d - 0.8));
        float pulse = 0.55 + 0.45 * uPulse;
        vec3 col = vec3(1.0, 0.72, 0.28) * ring * 2.4 * pulse;
        float fade = exp(-distance(vW, cameraPosition) * uFogDensity * 0.9);
        gl_FragColor = vec4(col * fade, ring * pulse * fade);
      }
    `})}function nm(){return new Qe({transparent:!0,depthWrite:!1,side:sn,blending:Rn,uniforms:{uTime:wt.uTime,uPulse:{value:0},...Kt},vertexShader:`
      varying vec2 vUv; varying vec3 vW;
      void main(){
        vUv = uv;
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vW = wp.xyz;
        gl_Position = projectionMatrix * viewMatrix * wp;
      }
    `,fragmentShader:`
      varying vec2 vUv; varying vec3 vW;
      uniform float uTime, uPulse;
      ${Xn}
      void main(){
        float d = length(vUv - 0.5) * 2.0;
        float g = exp(-d * d * 3.4);
        float pulse = 0.5 + 0.5 * uPulse;
        vec3 col = vec3(1.0, 0.6, 0.22) * g * 1.1 * pulse;
        float fade = exp(-distance(vW, cameraPosition) * uFogDensity * 0.9);
        gl_FragColor = vec4(col * fade, g * 0.5 * pulse * fade);
      }
    `})}function im(){return new Qe({transparent:!0,depthWrite:!1,blending:Rn,uniforms:{uTime:wt.uTime,...Kt},vertexShader:`
      attribute vec3 aPos;
      attribute vec4 aColS;
      attribute float aBlink;
      varying vec3 vCol; varying vec2 vUv; varying vec3 vW;
      uniform float uTime;
      void main(){
        vUv = uv; vW = aPos;
        float blink = aBlink > 0.0 ? (0.1 + 0.9 * pow(0.5 + 0.5 * sin(uTime * aBlink + aPos.z), 8.0)) : 1.0;
        vCol = aColS.rgb * blink;
        vec4 mv = viewMatrix * vec4(aPos, 1.0);
        mv.xy += (uv - 0.5) * aColS.w;
        gl_Position = projectionMatrix * mv;
      }
    `,fragmentShader:`
      varying vec3 vCol; varying vec2 vUv; varying vec3 vW;
      ${Xn}
      void main(){
        float d = length(vUv - 0.5) * 2.0;
        float g = exp(-d * d * 5.0) * (1.0 - smoothstep(0.6, 1.0, d));
        float fade = exp(-distance(vW, cameraPosition) * uFogDensity * 1.1);
        gl_FragColor = vec4(vCol * g * fade, g * fade);
      }
    `})}var Rt,Tt,Et,Gf=Dt(()=>{Pn();rs();Rt=60,Tt=10,Et=r=>r.toFixed(1)});function sm(){let r=Cr,e=8,t=Math.ceil(r.length/e),n=256,i=document.createElement("canvas");i.width=e*n,i.height=t*n;let s=i.getContext("2d");s.clearRect(0,0,i.width,i.height);let o='"PT Sans", "Segoe UI", Arial, sans-serif';for(let c=0;c<r.length;c++){let l=r[c],h=c%e*n,u=Math.floor(c/e)*n;if(s.save(),s.translate(h+n/2,u+n/2),s.fillStyle="#fff",s.strokeStyle="#fff",s.textAlign="center",s.textBaseline="middle",s.shadowColor="rgba(255,255,255,0.9)",(l.boxed??c%5===0)&&(s.lineWidth=7,s.shadowBlur=10,s.strokeRect(-n/2+18,-n/2+18,n-36,n-36)),s.shadowBlur=12,l.orient==="v"){let d=[...l.text],p=Math.min(72,(n-60)/d.length);s.font=`700 ${p}px ${o}`;let v=d.length*(p+8);d.forEach((m,g)=>{s.fillText(m,0,-v/2+(p+8)*(g+.5)),s.fillText(m,0,-v/2+(p+8)*(g+.5))})}else{let d=60;for(s.font=`700 ${d}px ${o}`;s.measureText(l.text).width>n-44&&d>16;)d-=3,s.font=`700 ${d}px ${o}`;s.fillText(l.text,0,0),s.fillText(l.text,0,0)}s.restore()}let a=new lr(i);return a.colorSpace=xt,a.anisotropy=4,a.wrapS=a.wrapT=hn,{tex:a,cols:e,rows:t,count:r.length}}function rm(){let r=document.createElement("canvas");r.width=1024,r.height=64;let e=r.getContext("2d"),t="\u0410\u0411\u0412\u0413\u0414\u0415\u0401\u0416\u0417\u0418\u0419\u041A\u041B\u041C\u041D\u041E\u041F\u0420\u0421\u0422\u0423\u0424\u0425\u0426\u0427\u0428\u0429\u042A\u042B\u042C\u042D\u042E\u042F0123456789\u2014\xB7\u041C\u041E\u0421\u041A\u0412\u0410\xB7\u0421\u0418\u0422\u0418\xB7\u041C\u0415\u0422\u0420\u041E\xB7\u0410\u042D\u0420\u041E";e.fillStyle="#fff",e.font='700 44px "PT Sans", Arial, sans-serif',e.textBaseline="middle";let n=8,i=0;for(;n<1e3;){let o=t[(i*7+3)%t.length];e.globalAlpha=.55+.45*(i*37%10/10),e.fillText(o,n,34),n+=44+i*13%3*10,i++}let s=new lr(r);return s.colorSpace=xt,s.wrapS=ri,s.wrapT=hn,s}var Cr,om=Dt(()=>{Pn();Cr=[{text:"\u041F\u042F\u0422\u0401\u0420\u041E\u0427\u041A\u0410",orient:"h",color:"#ff2e2e"},{text:"\u041C\u0410\u0413\u041D\u0418\u0422",orient:"h",color:"#ff3d3d"},{text:"\u041A\u0420\u0410\u0421\u041D\u041E\u0415&\u0411\u0415\u041B\u041E\u0415",orient:"h",color:"#ff2222"},{text:"\u0412\u041A\u0423\u0421\u041D\u041E \u0418 \u0422\u041E\u0427\u041A\u0410",orient:"h",color:"#ffb03a"},{text:"\u042F\u041D\u0414\u0415\u041A\u0421",orient:"h",color:"#ff4128"},{text:"\u041C\u0422\u0421",orient:"h",color:"#ff1a3c"},{text:"\u041C\u0415\u0413\u0410\u0424\u041E\u041D",orient:"h",color:"#00ff9d"},{text:"\u0421\u0411\u0415\u0420",orient:"h",color:"#2dff7e"},{text:"OZON",orient:"h",color:"#3fa9ff"},{text:"WILDBERRIES",orient:"h",color:"#e64ce0"},{text:"\u0410\u041F\u0422\u0415\u041A\u0410",orient:"v",color:"#2dff8a"},{text:"\u0410\u041F\u0422\u0415\u041A\u0410 24",orient:"v",color:"#7dffc7"},{text:"\u0428\u0410\u0423\u0420\u041C\u0410",orient:"v",color:"#ffb54d"},{text:"\u041F\u0415\u041A\u0410\u0420\u041D\u042F",orient:"v",color:"#ffc97d"},{text:"\u0426\u0412\u0415\u0422\u042B 24",orient:"v",color:"#ff5cc8"},{text:"\u041A\u041E\u0424\u0415",orient:"v",color:"#c27bff"},{text:"\u0421\u0423\u0428\u0418",orient:"v",color:"#ff6b4d"},{text:"\u041F\u0418\u0426\u0426\u0410",orient:"v",color:"#ffd23e"},{text:"\u041F\u0420\u041E\u0414\u0423\u041A\u0422\u042B 24",orient:"v",color:"#7dffc7"},{text:"\u0421\u0422\u041E\u041B\u041E\u0412\u0410\u042F",orient:"v",color:"#fff06b"},{text:"\u0422\u0410\u041A\u0421\u0418",orient:"h",color:"#ffd23e",boxed:!0},{text:"\u041E\u0422\u0415\u041B\u042C",orient:"v",color:"#53d5ff"},{text:"\u0411\u0410\u0420",orient:"h",color:"#ff3d7f"},{text:"\u041A\u0410\u0424\u0415",orient:"h",color:"#ffb54d"},{text:"\u0421\u041F\u041E\u0420\u0422\u041C\u0410\u0421\u0422\u0415\u0420",orient:"h",color:"#ff8a2a"},{text:"\u041C.\u0412\u0418\u0414\u0415\u041E",orient:"h",color:"#ff2e2e"},{text:"\u0427\u0418\u0422\u0410\u0419-\u0413\u041E\u0420\u041E\u0414",orient:"h",color:"#ff6b4d"},{text:"FIX PRICE",orient:"h",color:"#ffd23e"},{text:"\u0425\u041E\u0417\u0422\u041E\u0412\u0410\u0420\u042B",orient:"v",color:"#9aa8ff"},{text:"\u0421\u0410\u0423\u041D\u0410",orient:"v",color:"#53d5ff"},{text:"\u041C\u041E\u0421\u041A\u0412\u0410",orient:"h",color:"#ffe9a3",boxed:!0},{text:"\u041C",orient:"h",color:"#ff2b3a",boxed:!0},{text:"\u0410\u0412\u0418\u0410\u0411\u0418\u041B\u0415\u0422\u042B",orient:"h",color:"#37d5ff"},{text:"\u0411\u0410\u041D\u041A\u041E\u041C\u0410\u0422",orient:"h",color:"#7dffc7"},{text:"\u041C\u041E\u0421\u041A\u0412\u0410 \u0421\u0418\u0422\u0418",orient:"h",color:"#53d5ff",boxed:!0},{text:"\u041F\u0410\u0420\u041A\u041E\u0412\u041A\u0410",orient:"h",color:"#53a8ff"},{text:"\u0420\u0415\u041C\u041E\u041D\u0422 \u041E\u0411\u0423\u0412\u0418",orient:"v",color:"#9aa8ff"},{text:"\u0410\u0422\u0415\u041B\u042C\u0415",orient:"v",color:"#ff9adf"},{text:"\u0417\u041E\u041E\u041C\u0410\u0413\u0410\u0417\u0418\u041D",orient:"v",color:"#8affa0"},{text:"\u0413\u041E\u0421\u0422\u0418\u041D\u0418\u0426\u0410",orient:"v",color:"#53d5ff"}]});function Fs(){return new Ie().compose(new z,new Mt,ab)}function cm(r,e,t){let n=new Float32Array(r);for(let i=0;i<n.length;i+=3)n[i+1]=t;return n}var Sn,ze,Yn,Pr,Ir,Nr,am,ab,Nn,al,cl,lm=Dt(()=>{Pn();Gf();om();rs();Sn=190,ze={buildings:44,concrete:30,signs:26,holos:2,beacons:18,shafts:5,rings:2,discs:2},Yn=new Ie,Pr=new z,Ir=new Mt,Nr=new z,am=new z(0,1,0),ab=new z(0,0,0),Nn={};Cr.forEach((r,e)=>Nn[r.text]=e);al=["\u042F\u041D\u0414\u0415\u041A\u0421","OZON","WILDBERRIES","\u041C\u0422\u0421","\u0412\u041A\u0423\u0421\u041D\u041E \u0418 \u0422\u041E\u0427\u041A\u0410","\u0421\u0411\u0415\u0420","\u041C\u0415\u0413\u0410\u0424\u041E\u041D","\u0410\u0412\u0418\u0410\u0411\u0418\u041B\u0415\u0422\u042B","\u041C\u041E\u0421\u041A\u0412\u0410 \u0421\u0418\u0422\u0418"];cl=class{constructor(e){V(this,"group",new qt);V(this,"chunks",new Map);V(this,"pulsers",[]);V(this,"groundMat");V(this,"radius");V(this,"atlas");V(this,"buildings");V(this,"concrete");V(this,"signs");V(this,"holos");V(this,"beacons");V(this,"shafts");V(this,"rings");V(this,"discs");V(this,"ringMat");V(this,"discMat");V(this,"ground");V(this,"slots",[]);V(this,"signColors",Cr.map(e=>new Te(e.color)));V(this,"ringOffsets",[]);V(this,"ringR",-1);this.radius=e,this.atlas=sm();let t=(d,p,v)=>{let m=new Ri(d,p,v);m.frustumCulled=!1,m.instanceMatrix.setUsage(Ro);for(let g=0;g<v;g++)m.setMatrixAt(g,Fs());return this.group.add(m),m},n=new Vn(1,1,1),i=new xn(1,1);this.buildings=t(n.clone(),Yp(),Sn*ze.buildings);let s=new Float32Array(this.buildings.count),o=new Float32Array(this.buildings.count);this.buildings.geometry.setAttribute("aSeed",new Je(s,1)),this.buildings.geometry.setAttribute("aKind",new Je(o,1)),this.concrete=t(n.clone(),Kp(),Sn*ze.concrete);let a=new Float32Array(this.concrete.count),c=new Float32Array(this.concrete.count);this.concrete.geometry.setAttribute("aSeed",new Je(a,1)),this.concrete.geometry.setAttribute("aKind",new Je(c,1)),this.signs=t(i.clone(),Zp(this.atlas),Sn*ze.signs);let l=this.signs.geometry;l.setAttribute("aTile",new Je(new Float32Array(this.signs.count*4),4)),l.setAttribute("aTint",new Je(new Float32Array(this.signs.count*3),3)),l.setAttribute("aFlick",new Je(new Float32Array(this.signs.count*2),2)),this.holos=t(i.clone(),$p(this.atlas,rm()),Sn*ze.holos);let h=this.holos.geometry;h.setAttribute("aTile",new Je(new Float32Array(this.holos.count*4),4)),h.setAttribute("aTint",new Je(new Float32Array(this.holos.count*3),3)),h.setAttribute("aKindSeed",new Je(new Float32Array(this.holos.count*2),2)),this.beacons=t(i.clone(),jp(),Sn*ze.beacons);let u=this.beacons.geometry;u.setAttribute("aPos",new Je(cm(Sn*ze.beacons*3,0,-1e3),3)),u.setAttribute("aCol",new Je(new Float32Array(Sn*ze.beacons*3),3)),u.setAttribute("aBlink",new Je(new Float32Array(Sn*ze.beacons*2),2)),this.shafts=t(i.clone(),Jp(),Sn*ze.shafts);let f=this.shafts.geometry;f.setAttribute("aPos",new Je(cm(Sn*ze.shafts*3,0,-1e3),3)),f.setAttribute("aWarm",new Je(new Float32Array(Sn*ze.shafts),1)),this.ringMat=tm(),this.discMat=nm(),this.rings=t(i.clone(),this.ringMat,Sn*ze.rings),this.discs=t(i.clone(),this.discMat,Sn*ze.discs),this.pulsers=[{mat:this.ringMat},{mat:this.discMat}];for(let d=0;d<Sn;d++)this.slots.push(d);this.groundMat=Qp(),this.ground=new it(new xn(2400,2400),this.groundMat),this.ground.rotation.x=-Math.PI/2,this.ground.frustumCulled=!1,this.group.add(this.ground)}get zonePulseMats(){return[this.ringMat,this.discMat]}buildAllAround(e,t){this.update(e,t,1e9)}ringOffsetsFor(e){let t=Math.ceil(e);if(this.ringR!==t){this.ringR=t,this.ringOffsets.length=0;for(let n=-t;n<=t;n++)for(let i=-t;i<=t;i++)this.ringOffsets.push({dx:n,dz:i});this.ringOffsets.sort((n,i)=>n.dx*n.dx+n.dz*n.dz-(i.dx*i.dx+i.dz*i.dz))}return this.ringOffsets}update(e,t,n){let i=Math.round(e/Rt),s=Math.round(t/Rt),o=Math.ceil(this.radius/Rt)+.5,a=0;for(let c of this.ringOffsetsFor(Math.ceil(o))){if(Math.hypot(c.dx,c.dz)>o)continue;let l=i+c.dx,h=s+c.dz,u=`${l},${h}`;if(!this.chunks.has(u)&&(this.buildChunk(l,h),a++,a>=n))break}for(let[c,l]of this.chunks)Math.hypot(l.cx-i,l.cz-s)>o+1.2&&(this.clearSlice(l.slot),this.slots.push(l.slot),this.chunks.delete(c));this.ground.position.set(Math.round(e/Rt)*Rt,0,Math.round(t/Rt)*Rt)}buildChunk(e,t){let n=`${e},${t}`;if(this.chunks.has(n)||!this.slots.length)return;let i=this.slots.pop(),s={cx:e,cz:t,slot:i,zones:[],bodies:[],bodiesBuilt:!1,bodiesAdded:!1};this.chunks.set(n,s);let o=ss((Math.imul(e,374761393)^Math.imul(t,668265263))>>>0),a=e*Rt,c=t*Rt,l=i*ze.buildings,h=i*ze.concrete,u=i*ze.signs,f=i*ze.holos,d=i*ze.beacons,p=i*ze.shafts,v=i*ze.rings,m=i*ze.discs,g=(_,P,R,I,B,N,L,D)=>{l>=(i+1)*ze.buildings||(Yn.compose(Pr.set(_,P,R),Ir.identity(),Nr.set(I,B,N)),this.buildings.setMatrixAt(l,Yn),this.buildings.geometry.getAttribute("aSeed").setX(l,L),this.buildings.geometry.getAttribute("aKind").setX(l,D),l++)},x=(_,P,R,I,B,N,L,D)=>{h>=(i+1)*ze.concrete||(Yn.compose(Pr.set(_,P,R),Ir.identity(),Nr.set(I,B,N)),this.concrete.setMatrixAt(h,Yn),this.concrete.geometry.getAttribute("aSeed").setX(h,L),this.concrete.geometry.getAttribute("aKind").setX(h,D),h++)},M=(_,P,R,I,B,N,L,D,F)=>{if(u>=(i+1)*ze.signs)return;Yn.compose(Pr.set(_,P,R),Ir.setFromAxisAngle(am,N),Nr.set(I,B,1)),this.signs.setMatrixAt(u,Yn);let G=this.atlas,W=L%G.cols/G.cols,H=1-(Math.floor(L/G.cols)+1)/G.rows;this.signs.geometry.getAttribute("aTile").setXYZW(u,W,H,1/G.cols,1/G.rows);let K=this.signColors[D];this.signs.geometry.getAttribute("aTint").setXYZ(u,K.r,K.g,K.b),this.signs.geometry.getAttribute("aFlick").setXY(u,o()*40,F),u++},A=(_,P,R,I,B,N,L,D,F)=>{if(f>=(i+1)*ze.holos)return;Yn.compose(Pr.set(_,P,R),Ir.setFromAxisAngle(am,N),Nr.set(I,B,1)),this.holos.setMatrixAt(f,Yn);let G=this.atlas,W=L%G.cols/G.cols,H=1-(Math.floor(L/G.cols)+1)/G.rows;this.holos.geometry.getAttribute("aTile").setXYZW(f,W,H,1/G.cols,1/G.rows),this.holos.geometry.getAttribute("aTint").setXYZ(f,D.r,D.g,D.b),this.holos.geometry.getAttribute("aKindSeed").setXY(f,F,o()),f++},S=(_,P,R,I,B,N,L,D)=>{if(d>=(i+1)*ze.beacons)return;let F=this.beacons.geometry.getAttribute("aPos"),G=this.beacons.geometry.getAttribute("aCol"),W=this.beacons.geometry.getAttribute("aBlink");F.setXYZ(d,_,P,R),G.setXYZ(d,I,B,N),W.setXY(d,L,D),d++},w=(_,P,R,I)=>{p>=(i+1)*ze.shafts||(this.shafts.geometry.getAttribute("aPos").setXYZ(p,_,P,R),this.shafts.geometry.getAttribute("aWarm").setX(p,I),p++)},y=(_,P,R)=>{if(v>=(i+1)*ze.rings||m>=(i+1)*ze.discs)return;let I=Math.atan2(_.nx,_.nz);Yn.compose(Pr.set(_.x,_.y+.08,_.z),Ir.setFromEuler(new Hn(-Math.PI/2,0,0)),Nr.set(2.4,2.4,1)),this.rings.setMatrixAt(v++,Yn),Yn.compose(Pr.set(_.x,_.y+.07,_.z),Ir.setFromEuler(new Hn(-Math.PI/2,0,0)),Nr.set(3.6,3.6,1)),this.discs.setMatrixAt(m++,Yn),S(_.x,_.y+1.5,_.z,1,.66,.22,1.6,2.6),M(_.x-_.nx*1.6,_.y+1.2,_.z-_.nz*1.6,.55,.55,I,P,R,0)};for(let _ of[-1,1])for(let P of[-1,1]){let R=o()*100,I=a+_*(Tt+2+10+o()*3),B=c+P*(Tt+2+10+o()*3);let _rr=Math.hypot(I,B);if(_rr>145&&_rr<345)continue;let N=14+o()*8,L=14+o()*8,D=o(),F=D<.45?40+o()*55:D<.85?95+o()*90:190+o()*120;if(_rr>345&&(F=18+o()*22),_rr<=345&&o()<.06&&(F=240+o()*80),g(I,F/2,B,N,F,L,R,1),F>60&&o()<.45){let W=8+o()*18;g(I+(o()-.5)*2,F+W/2,B+(o()-.5)*2,N*.55,W,L*.55,R+3,0)}if(F>100&&o()<.75){let W=8+o()*20,H=I+(o()-.5)*N*.4,K=B+(o()-.5)*L*.4;x(H,F+W/2,K,.5,W,.5,R,3),S(H,F+W+.5,K,1,.12,.1,2.1,2.4)}else F>85&&S(I,F+1,B,1,.12,.1,1.4,2);s.bodies.push({x:I,y:F/2,z:B,hx:N/2,hy:F/2,hz:L/2});let G=1+Math.floor(o()*3);for(let W=0;W<G;W++){let H=o()<.5,K=Math.floor(o()*this.atlas.count),$=Math.floor(o()*Cr.length),ne=o()<.16?2:o()<.4?1:0,Me=3.5+o()*6,j=Me*(.45+o()*.5),ae=4+o()*Math.max(4,Math.min(F-6,70));if(H){let _e=I-_*(N/2+.3),Re=B+(o()-.5)*(L-j);M(_e-_*.05,ae,Re,_>0?Me:-Me,j,_>0?-Math.PI/2:Math.PI/2,K,$,ne)}else{let _e=B-P*(L/2+.3),Re=I+(o()-.5)*(N-Me);M(Re,ae,_e-P*.05,P>0?-Me:Me,j,P>0?Math.PI:0,K,$,ne)}}if(o()<.75&&F>12){let W=2.8+o()*2.2,H=10+o()*14,K=6+o()*Math.min(18,F-8),$=Math.floor(o()*this.atlas.count),ne=Math.floor(o()*Cr.length),Me=o()<.2?2:0;if(o()<.5){let j=I-_*(N/2+1.4),ae=B+(o()-.5)*L*.5;M(j,K,ae-.04,W,H,0,$,ne,Me),M(j,K,ae+.04,-W,H,Math.PI,$,ne,Me)}else{let j=B-P*(L/2+1.4),ae=I+(o()-.5)*N*.5;M(ae-.04,K,j,W,H,Math.PI/2,$,ne,Me),M(ae+.04,K,j,-W,H,-Math.PI/2,$,ne,Me)}}if(F>110&&o()<.5){let W=10+o()*5;x(I,F+3.4,B,.35,6.8,.35,R,3),x(I+W/2,F+3.4,B,.35,6.8,.35,R,3);let H=Nn.\u041C\u041E\u0421\u041A\u0412\u0410;M(I,F+6.2,B,W,3.4,o()<.5?0:Math.PI/2,H,Nn.\u041C\u041E\u0421\u041A\u0412\u0410,1)}if(o()<.42&&F>24){let W=al[Math.floor(o()*al.length)],H=Nn[W],K=this.signColors[H],$=7+o()*6,ne=$*.5;o()<.5?A(I-_*(N/2+2.2),F*.75,B,_>0?-$:$,ne,_>0?-Math.PI/2:Math.PI/2,H,K,0):A(I,F*.75,B-P*(L/2+2.2),P>0?-$:$,ne,P>0?Math.PI:0,H,K,0),x(I,F*.75+ne/2+.4,B,.4,.8,.4,R,3)}if(F>130&&o()<.4){let W=al[Math.floor(o()*al.length)],H=Nn[W],K=this.signColors[H],$=16+o()*10;A(I-_*(N/2+.6),F*.62,B,_>0?-$:$,$*.62,_>0?-Math.PI/2:Math.PI/2,H,K,2)}if(o()<.4&&F>10){let W=o()<.5,H=9+o()*Math.min(F-10,30);if(W){let K=I-_*(N/2+1.1),$=B+(o()-.5)*L*.4;x(K,H-.12,$,2.4,.24,1.7,R,3),x(K-_*1.08,H+.35,$,.18,.5,1.7,R,4),s.bodies.push({x:K,y:H-.12,z:$,hx:2.4,hy:.24,hz:1.7}),s.zones.push({x:K,y:H,z:$,nx:-_,nz:0}),y(s.zones[s.zones.length-1],Nn.\u041C,Nn.\u041C)}else{let K=B-P*(L/2+1.1),$=I+(o()-.5)*N*.4;x($,H-.12,K,1.7,.24,2.4,R,3),x($,H+.35,K-P*1.08,1.7,.5,.18,R,4),s.bodies.push({x:$,y:H-.12,z:K,hx:1.7,hy:.24,hz:2.4}),s.zones.push({x:$,y:H,z:K,nx:0,nz:-P}),y(s.zones[s.zones.length-1],Nn.\u041C,Nn.\u041C)}}if(o()<.3&&F>30&&F<80){let W=I+(o()-.5)*N*.3,H=B+(o()-.5)*L*.3;x(W,F+.15,H,2.6,.3,2.6,R,3),s.bodies.push({x:W,y:F+.15,z:H,hx:2.6,hy:.3,hz:2.6}),s.zones.push({x:W,y:F+.3,z:H,nx:0,nz:1}),y(s.zones[s.zones.length-1],Nn.\u041C,Nn.\u041C)}}for(let _ of[-1,1]){let P=a+(o()<.5?-1:1)*(Tt+1.1),R=c+_*(12+o()*14);x(P,4.2,R,.22,8.4,.22,o()*10,3),w(P,8.6,R,1),S(P,8.8,R,1,.72,.42,0,1.8)}for(let _ of[-1,1]){let P=c+(o()<.5?-1:1)*(Tt+1.1),R=a+_*(12+o()*14);x(R,4.2,P,.22,8.4,.22,o()*10,3),w(R,8.6,P,1),S(R,8.8,P,1,.72,.42,0,1.8),o()<.3&&M(R,6.4,P,.9,.9,o()<.5?0:Math.PI/2,Nn.\u041C,Nn.\u041C,0)}this.flushInstanceBuffers()}flushInstanceBuffers(){for(let e of[this.buildings,this.concrete,this.signs,this.holos,this.rings,this.discs])e.instanceMatrix.needsUpdate=!0;for(let e of[this.buildings,this.concrete])e.geometry.getAttribute("aSeed").needsUpdate=!0,e.geometry.getAttribute("aKind").needsUpdate=!0;for(let e of[this.signs,this.holos])e.geometry.getAttribute("aTile").needsUpdate=!0,e.geometry.getAttribute("aTint").needsUpdate=!0;this.signs.geometry.getAttribute("aFlick").needsUpdate=!0,this.holos.geometry.getAttribute("aKindSeed").needsUpdate=!0;for(let e of[this.beacons,this.shafts])for(let t of["aPos","aCol","aBlink","aWarm"]){let n=e.geometry.getAttribute(t);n&&(n.needsUpdate=!0)}}clearSlice(e){for(let i=e*ze.buildings;i<(e+1)*ze.buildings;i++)this.buildings.setMatrixAt(i,Fs());for(let i=e*ze.concrete;i<(e+1)*ze.concrete;i++)this.concrete.setMatrixAt(i,Fs());for(let i=e*ze.signs;i<(e+1)*ze.signs;i++)this.signs.setMatrixAt(i,Fs());for(let i=e*ze.holos;i<(e+1)*ze.holos;i++)this.holos.setMatrixAt(i,Fs());for(let i=e*ze.rings;i<(e+1)*ze.rings;i++)this.rings.setMatrixAt(i,Fs());for(let i=e*ze.discs;i<(e+1)*ze.discs;i++)this.discs.setMatrixAt(i,Fs());let t=this.beacons.geometry.getAttribute("aPos");for(let i=e*ze.beacons;i<(e+1)*ze.beacons;i++)t.setY(i,-1e3);let n=this.shafts.geometry.getAttribute("aPos");for(let i=e*ze.shafts;i<(e+1)*ze.shafts;i++)n.setY(i,-1e3);this.flushInstanceBuffers()}setZonePulse(e){this.ringMat.uniforms.uPulse.value=e,this.discMat.uniforms.uPulse.value=e}setReflection(e){this.groundMat.uniforms.tRefl.value=e}dispose(){for(let e of[this.buildings,this.concrete,this.signs,this.holos,this.beacons,this.shafts,this.rings,this.discs,this.ground])e.geometry.dispose(),e.material.dispose()}}});function hm(r){return r<-1?-1:r>1?1:r}var ll,fm=Dt(()=>{ll=class{constructor(e,t){V(this,"enabled",!1);V(this,"mouseSteer",0);V(this,"keySteer",0);V(this,"touchSteer",0);V(this,"el");V(this,"cb");V(this,"wheelAcc",0);V(this,"lastFlapAt",0);V(this,"pDown",!1);V(this,"pType","mouse");V(this,"sx",0);V(this,"sy",0);V(this,"lx",0);V(this,"ly",0);V(this,"moved",0);V(this,"downT",0);V(this,"swipeAcc",0);V(this,"onWheel",e=>{if(!this.enabled)return;e.preventDefault();let t=e.deltaMode===1?e.deltaY*33:e.deltaY;this.wheelAcc+=t;let n=performance.now();Math.abs(this.wheelAcc)>38&&n-this.lastFlapAt>95&&(this.wheelAcc=0,this.lastFlapAt=n,this.cb.onFlap())});V(this,"onPointerDown",e=>{this.enabled&&(this.pDown=!0,this.pType=e.pointerType,this.sx=this.lx=e.clientX,this.sy=this.ly=e.clientY,this.moved=0,this.downT=performance.now(),this.swipeAcc=0)});V(this,"onPointerMove",e=>{if(e.pointerType==="mouse"){let o=window.innerWidth,a=o/2,c=(e.clientX-a)/(o*.32);this.mouseSteer=hm(c);return}if(!this.enabled||!this.pDown)return;let t=e.clientX-this.lx,n=e.clientY-this.ly;this.lx=e.clientX,this.ly=e.clientY,this.moved+=Math.abs(t)+Math.abs(n);let i=window.innerWidth;this.touchSteer=hm((e.clientX-this.sx)/(i*.2)),n<0&&(this.swipeAcc+=-n);let s=performance.now();for(;this.swipeAcc>64&&(this.swipeAcc-=64,s-this.lastFlapAt>70);)this.lastFlapAt=s,this.cb.onFlap()});V(this,"onPointerUp",e=>{if(e.pointerType==="mouse"){this.enabled&&this.cb.onCaw();return}if(!this.pDown)return;this.pDown=!1,this.touchSteer=0;let t=performance.now()-this.downT;this.enabled&&t<300&&this.moved<14&&this.cb.onCaw(),this.swipeAcc=0});V(this,"onPointerLeave",()=>{this.mouseSteer=0});V(this,"onKey",(e,t)=>{if(e.repeat&&t)return;let n=e.code;n==="ArrowLeft"||n==="KeyA"?this.keySteer=t?-1:0:n==="ArrowRight"||n==="KeyD"?this.keySteer=t?1:0:(n==="Space"||n==="ArrowUp"||n==="KeyW")&&t&&this.enabled&&(e.preventDefault(),this.cb.onFlap())});V(this,"kd",e=>this.onKey(e,!0));V(this,"ku",e=>this.onKey(e,!1));V(this,"ctxMenu",e=>e.preventDefault());this.el=e,this.cb=t,window.addEventListener("wheel",this.onWheel,{passive:!1}),e.addEventListener("pointerdown",this.onPointerDown),window.addEventListener("pointermove",this.onPointerMove),window.addEventListener("pointerup",this.onPointerUp),e.addEventListener("pointerleave",this.onPointerLeave),e.addEventListener("contextmenu",this.ctxMenu),window.addEventListener("keydown",this.kd),window.addEventListener("keyup",this.ku)}getSteer(){return this.keySteer!==0?this.keySteer:this.touchSteer!==0?this.touchSteer:this.mouseSteer}dispose(){window.removeEventListener("wheel",this.onWheel),this.el.removeEventListener("pointerdown",this.onPointerDown),window.removeEventListener("pointermove",this.onPointerMove),window.removeEventListener("pointerup",this.onPointerUp),this.el.removeEventListener("pointerleave",this.onPointerLeave),this.el.removeEventListener("contextmenu",this.ctxMenu),window.removeEventListener("keydown",this.kd),window.removeEventListener("keyup",this.ku)}}});var hl,um=Dt(()=>{hl=class{constructor(){V(this,"ctx",null);V(this,"master",null);V(this,"windGain",null);V(this,"noiseBuf",null);V(this,"muted",!1)}ensure(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let e=window.AudioContext||window.webkitAudioContext;if(!e)return;this.ctx=new e;let t=this.ctx.createDynamicsCompressor();t.threshold.value=-14,t.ratio.value=8,this.master=this.ctx.createGain(),this.master.gain.value=this.muted?0:.9,this.master.connect(t),t.connect(this.ctx.destination);let n=this.ctx.sampleRate*2,i=this.ctx.createBuffer(1,n,this.ctx.sampleRate),s=i.getChannelData(0);for(let c=0;c<n;c++)s[c]=Math.random()*2-1;this.noiseBuf=i;let o=this.ctx.createBufferSource();o.buffer=i,o.loop=!0;let a=this.ctx.createBiquadFilter();a.type="lowpass",a.frequency.value=320,a.Q.value=.4,this.windGain=this.ctx.createGain(),this.windGain.gain.value=0,o.connect(a),a.connect(this.windGain),this.windGain.connect(this.master),o.start()}setMuted(e){this.muted=e,this.master&&this.ctx&&this.master.gain.setTargetAtTime(e?0:.9,this.ctx.currentTime,.05)}get isMuted(){return this.muted}suspend(){this.ctx&&this.ctx.state==="running"&&this.ctx.suspend()}resume(){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}setWind(e){if(!this.windGain||!this.ctx)return;let t=.015+e*.11;this.windGain.gain.setTargetAtTime(t,this.ctx.currentTime,.25)}noiseBurst(e,t,n,i,s="bandpass",o,a){if(!this.ctx||!this.master||!this.noiseBuf)return;let c=a??this.master,l=this.ctx.currentTime,h=this.ctx.createBufferSource();h.buffer=this.noiseBuf,h.loop=!0;let u=this.ctx.createBiquadFilter();u.type=s,u.frequency.setValueAtTime(t,l),o!==void 0&&u.frequency.exponentialRampToValueAtTime(Math.max(40,o),l+e),u.Q.value=n;let f=this.ctx.createGain();f.gain.setValueAtTime(0,l),f.gain.linearRampToValueAtTime(i,l+.015),f.gain.exponentialRampToValueAtTime(.001,l+e),h.connect(u),u.connect(f),f.connect(c),h.start(l),h.stop(l+e+.05)}croak(e,t,n,i,s){if(!this.ctx||!this.master)return;let o=this.ctx.createOscillator();o.type="sawtooth",o.frequency.setValueAtTime(t,e),o.frequency.exponentialRampToValueAtTime(t*.45,e+n);let a=this.ctx.createOscillator();a.frequency.value=38;let c=this.ctx.createGain();c.gain.value=t*.12,a.connect(c),c.connect(o.frequency);let l=this.ctx.createWaveShaper(),h=256,u=new Float32Array(h);for(let m=0;m<h;m++){let g=m/(h-1)*2-1;u[m]=Math.tanh(2.8*g)}l.curve=u;let f=this.ctx.createBiquadFilter();f.type="bandpass",f.frequency.value=850,f.Q.value=.7;let d=this.ctx.createBiquadFilter();d.type="lowpass",d.frequency.value=2600;let p=this.ctx.createGain();p.gain.setValueAtTime(0,e),p.gain.linearRampToValueAtTime(i,e+.012),p.gain.setValueAtTime(i,e+n*.55),p.gain.exponentialRampToValueAtTime(.001,e+n);let v=s??this.master;o.connect(l),l.connect(f),f.connect(d),d.connect(p),p.connect(v),o.start(e),a.start(e),o.stop(e+n+.05),a.stop(e+n+.05)}caw(){if(this.ensure(),!this.ctx)return;let e=this.ctx.currentTime;this.croak(e,640,.17,.5),this.croak(e+.21,560,.15,.44),this.noiseBurst(.12,1800,1.2,.06)}cawAt(e,t,n=1){if(this.ensure(),!this.ctx||!this.master||t<=.012)return;let i=this.ctx.currentTime,s=this.ctx.createStereoPanner();s.pan.value=Math.max(-1,Math.min(1,e)),s.connect(this.master),this.croak(i,640*n,.17,t,s),this.croak(i+.21,560*n,.15,t*.85,s),this.noiseBurst(.12,1800,1.2,t*.12,"bandpass",void 0,s)}replyCaw(e,t){if(this.ensure(),!this.ctx||!this.master||t<=.012)return;let n=this.ctx.currentTime,i=this.ctx.createStereoPanner();i.pan.value=Math.max(-1,Math.min(1,e)),i.connect(this.master),this.croak(n,520,.14,t,i),this.croak(n+.19,470,.13,t*.8,i)}flap(){this.ensure(),this.noiseBurst(.24,420,.8,.16,"bandpass",1050)}land(){this.ensure(),this.noiseBurst(.3,500,.5,.12,"lowpass"),this.thud(.25)}thud(e=.35){if(!this.ctx||!this.master)return;let t=this.ctx.currentTime,n=this.ctx.createOscillator();n.type="sine",n.frequency.setValueAtTime(120,t),n.frequency.exponentialRampToValueAtTime(45,t+.18);let i=this.ctx.createGain();i.gain.setValueAtTime(e,t),i.gain.exponentialRampToValueAtTime(.001,t+.22),n.connect(i),i.connect(this.master),n.start(t),n.stop(t+.3)}crash(){if(this.ensure(),!this.ctx)return;let e=this.ctx.currentTime,t=this.ctx.createOscillator();t.type="triangle",t.frequency.setValueAtTime(95,e),t.frequency.exponentialRampToValueAtTime(34,e+.5);let n=this.ctx.createGain();n.gain.setValueAtTime(.55,e),n.gain.exponentialRampToValueAtTime(.001,e+.55),t.connect(n),n.connect(this.master),t.start(e),t.stop(e+.6),this.noiseBurst(.5,700,.4,.3,"lowpass")}dispose(){this.ctx&&(this.ctx.close(),this.ctx=null,this.master=null,this.windGain=null)}}});var cb,lb,hb,fb,ub,Ho,dm,fl,pm=Dt(()=>{Pn();cb=`
  precision highp float;
  varying vec2 vUv;
  uniform sampler2D tColor;
  uniform float uThreshold, uKnee;
  void main(){
    vec3 c = texture2D(tColor, vUv).rgb;
    c = clamp(c, vec3(0.0), vec3(48.0));
    if (any(isnan(c)) || any(isinf(c))) c = vec3(0.0);
    float l = dot(c, vec3(0.2126, 0.7152, 0.0722));
    float soft = clamp((l - uThreshold + uKnee) / (2.0 * uKnee), 0.0, 1.0);
    float w = max(soft * soft, step(uThreshold, l)) * l / max(l, 1e-4);
    gl_FragColor = vec4(c * w / (1.0 + l * 0.35), 1.0);
  }
`,lb=`
  precision highp float;
  varying vec2 vUv;
  uniform sampler2D tColor;
  uniform vec2 uTexel;
  void main(){
    vec3 c = texture2D(tColor, vUv).rgb * 4.0;
    c += texture2D(tColor, vUv + uTexel * vec2(-1.0, -1.0)).rgb;
    c += texture2D(tColor, vUv + uTexel * vec2( 1.0, -1.0)).rgb;
    c += texture2D(tColor, vUv + uTexel * vec2(-1.0,  1.0)).rgb;
    c += texture2D(tColor, vUv + uTexel * vec2( 1.0,  1.0)).rgb;
    gl_FragColor = vec4(c / 8.0, 1.0);
  }
`,hb=`
  precision highp float;
  varying vec2 vUv;
  uniform sampler2D tColor, tAdd;
  uniform vec2 uTexel;
  uniform float uMix;
  void main(){
    vec3 c = vec3(0.0);
    c += texture2D(tColor, vUv + uTexel * vec2(-1.0, -1.0)).rgb;
    c += texture2D(tColor, vUv + uTexel * vec2( 0.0, -1.0)).rgb * 2.0;
    c += texture2D(tColor, vUv + uTexel * vec2( 1.0, -1.0)).rgb;
    c += texture2D(tColor, vUv + uTexel * vec2(-1.0,  0.0)).rgb * 2.0;
    c += texture2D(tColor, vUv).rgb * 4.0;
    c += texture2D(tColor, vUv + uTexel * vec2( 1.0,  0.0)).rgb * 2.0;
    c += texture2D(tColor, vUv + uTexel * vec2(-1.0,  1.0)).rgb;
    c += texture2D(tColor, vUv + uTexel * vec2( 0.0,  1.0)).rgb * 2.0;
    c += texture2D(tColor, vUv + uTexel * vec2( 1.0,  1.0)).rgb;
    gl_FragColor = vec4(c / 16.0 + texture2D(tAdd, vUv).rgb * uMix, 1.0);
  }
`,fb=`
  precision highp float;
  varying vec2 vUv;
  uniform sampler2D tColor, tBloom;
  uniform float uTime, uBloom, uExposure, uRain, uWarp, uFlash, uGrain, uAspect;
  uniform vec2 uRes;

  float n21(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }

  // running drips + static droplets; returns uv offset (xy) and mask (z)
  vec3 lensRain(vec2 uv, float t){
    vec3 acc = vec3(0.0);
    for (int L = 0; L < 2; L++) {
      float fl = float(L);
      vec2 gridN = vec2(11.0, 2.6) * (1.0 + fl * 0.72);
      vec2 st = uv * gridN;
      st.y += t * (0.21 + fl * 0.13);
      vec2 id = floor(st);
      float rnd = n21(id + fl * 17.0);
      vec2 f = fract(st) - 0.5;
      float dx = (rnd - 0.5) * 0.7;
      dx += sin(t * (1.5 + rnd * 2.0) + rnd * 40.0) * 0.12;
      float wob = fract(t * (0.4 + rnd * 0.4) + rnd * 8.0);
      float dy = (wob * wob - 0.5) * 0.8;
      vec2 dp = vec2(f.x - dx, (f.y - dy) * (gridN.x / gridN.y) * 0.25);
      float drop = smoothstep(0.15, 0.05, length(dp));
      float trail = smoothstep(0.055, 0.02, abs(f.x - dx)) *
                    smoothstep(0.0, 0.5, (f.y - dy)) * smoothstep(1.0, 0.6, wob) * 0.35;
      float on = step(rnd, 0.5);
      acc.xy += (drop * dp * -6.0 + vec2(0.0, trail * -0.4)) * on;
      acc.z += (drop + trail * 0.5) * on;
    }
    {
      vec2 st = uv * vec2(38.0, 26.0);
      vec2 id = floor(st);
      float rnd = n21(id * 1.7);
      vec2 f = fract(st) - 0.5;
      vec2 dp = f - (vec2(rnd, n21(id + 4.0)) - 0.5) * 0.6;
      float drop = smoothstep(0.12, 0.04, length(dp)) * step(rnd, 0.3);
      float blink = 0.75 + 0.25 * sin(rnd * 100.0 + t * 0.3);
      acc.xy += drop * dp * -2.4 * blink;
      acc.z += drop * 0.6;
    }
    return acc;
  }

  vec3 aces(vec3 x){
    return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0);
  }

  void main(){
    vec2 uv = vUv;
    vec2 cc = uv - 0.5;
    float r2 = dot(cc, cc);

    vec3 rain = lensRain(uv * vec2(uAspect, 1.0), uTime) * uRain;
    vec2 ruv = uv + rain.xy * 0.021;

    vec3 col = vec3(0.0);
    if (uWarp > 0.003) {
      vec2 dir = cc * uWarp * 0.05;
      col  = texture2D(tColor, ruv).rgb * 0.4;
      col += texture2D(tColor, ruv - dir).rgb * 0.3;
      col += texture2D(tColor, ruv - dir * 2.0).rgb * 0.2;
      col += texture2D(tColor, ruv - dir * 3.0).rgb * 0.1;
    } else {
      col = texture2D(tColor, ruv).rgb;
    }

    float ca = (0.0016 + rain.z * 0.005) * (0.6 + r2 * 2.2) * (1.0 - uWarp * 0.7);
    col.r = texture2D(tColor, ruv + cc * ca).r;
    col.b = texture2D(tColor, ruv - cc * ca).b;

    vec3 bloom = texture2D(tBloom, ruv).rgb;
    col += bloom * uBloom * (1.0 + rain.z * 1.4);

    col *= uExposure;
    col += bloom * rain.z * 0.75;

    col = aces(col);
    col = pow(col, vec3(1.06, 1.0, 0.94));
    col = mix(col, col * vec3(0.86, 1.0, 1.1), 0.22 * (1.0 - col));
    col += uFlash * vec3(1.0, 0.97, 0.9);

    col *= 1.0 - smoothstep(0.18, 0.62, r2) * 0.42;
    float g = n21(uv * uRes.xy * 0.5 + fract(uTime * 13.7) * 91.0) - 0.5;
    col += g * uGrain;

    col = clamp(col, 0.0, 1.0);
    col = mix(col * 12.92, 1.055 * pow(col, vec3(1.0 / 2.4)) - 0.055, step(0.0031308, col));
    gl_FragColor = vec4(col, 1.0);
  }
`,ub=`
  precision highp float;
  varying vec2 vUv;
  uniform sampler2D tColor;
  uniform vec2 uTexel;
  float luma(vec3 c){ return dot(c, vec3(0.299, 0.587, 0.114)); }
  void main(){
    vec3 rgbNW = texture2D(tColor, vUv + uTexel * vec2(-1.0, -1.0)).rgb;
    vec3 rgbNE = texture2D(tColor, vUv + uTexel * vec2( 1.0, -1.0)).rgb;
    vec3 rgbSW = texture2D(tColor, vUv + uTexel * vec2(-1.0,  1.0)).rgb;
    vec3 rgbSE = texture2D(tColor, vUv + uTexel * vec2( 1.0,  1.0)).rgb;
    vec3 rgbM  = texture2D(tColor, vUv).rgb;
    float lNW = luma(rgbNW), lNE = luma(rgbNE), lSW = luma(rgbSW), lSE = luma(rgbSE), lM = luma(rgbM);
    float lMin = min(lM, min(min(lNW, lNE), min(lSW, lSE)));
    float lMax = max(lM, max(max(lNW, lNE), max(lSW, lSE)));
    vec2 dir = vec2(-((lNW + lNE) - (lSW + lSE)), ((lNW + lSW) - (lNE + lSE)));
    float dirReduce = max((lNW + lNE + lSW + lSE) * 0.03125, 1.0 / 128.0);
    float rcp = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);
    dir = clamp(dir * rcp, -8.0, 8.0) * uTexel;
    vec3 a = 0.5 * (texture2D(tColor, vUv + dir * (1.0/3.0 - 0.5)).rgb +
                    texture2D(tColor, vUv + dir * (2.0/3.0 - 0.5)).rgb);
    vec3 b = a * 0.5 + 0.25 * (texture2D(tColor, vUv + dir * -0.5).rgb +
                               texture2D(tColor, vUv + dir *  0.5).rgb);
    float lB = luma(b);
    gl_FragColor = vec4((lB < lMin || lB > lMax) ? a : b, 1.0);
  }
`,Ho=`
  varying vec2 vUv;
  void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }
`,dm=329486,fl=class{constructor(e,t){V(this,"renderer");V(this,"params",{rain:.55,bloom:.75,exposure:1,warp:0,flash:0,grain:.025});V(this,"reflRT");V(this,"mirrorVP",new Ie);V(this,"mirrorCam",new Lt);V(this,"time",0);V(this,"scale",1.2);V(this,"reflScale",.42);V(this,"bloomMips",6);V(this,"useFxaa",!0);V(this,"canvas");V(this,"isMobile");V(this,"rainCount",5200);V(this,"onRainCount");V(this,"sceneRT");V(this,"down",[]);V(this,"up",[]);V(this,"ldrRT");V(this,"targets",[]);V(this,"width",2);V(this,"height",2);V(this,"quadScene",new Ei);V(this,"quadCam",new Ni(-1,1,1,-1,0,1));V(this,"quad");V(this,"brightMat");V(this,"downMat");V(this,"upMat");V(this,"compMat");V(this,"fxaaMat");V(this,"resize",()=>{let e=this.canvas.clientWidth||window.innerWidth,t=this.canvas.clientHeight||window.innerHeight,n=Math.round(e*this.scale),i=Math.round(t*this.scale),s=2900*1650;if(n*i>s){let u=Math.sqrt(s/(n*i));n=Math.round(n*u),i=Math.round(i*u)}this.renderer.setSize(n,i,!1),this.canvas.style.width="100%",this.canvas.style.height="100%";for(let u of this.targets)u.dispose();this.targets=[];let o=(u,f,d={})=>{let p=new Jt(Math.max(2,u),Math.max(2,f),{type:bn,format:on,minFilter:pt,magFilter:pt,depthBuffer:d.depth??!1,stencilBuffer:!1});return this.targets.push(p),p};this.sceneRT=o(n,i,{depth:!0}),this.sceneRT.depthTexture=new ei(n,i,Ln),this.down=[],this.up=[];let a=n>>1,c=i>>1;for(let u=0;u<this.bloomMips;u++)this.down.push(o(a,c)),a=Math.max(2,a>>1),c=Math.max(2,c>>1);for(let u=0;u<this.bloomMips-1;u++){let f=this.down[this.bloomMips-2-u];this.up.push(o(f.width,f.height))}this.ldrRT=o(n,i,{depth:!1}),this.ldrRT.dispose(),this.targets.pop(),this.ldrRT=new Jt(n,i,{type:rn,format:on,minFilter:pt,magFilter:pt,depthBuffer:!1,stencilBuffer:!1}),this.targets.push(this.ldrRT);let l=Math.max(64,Math.round(n*this.reflScale)),h=Math.max(64,Math.round(i*this.reflScale));this.reflRT&&this.reflRT.dispose(),this.reflRT=new Jt(l,h,{type:bn,format:on,minFilter:An,magFilter:pt,generateMipmaps:!0,depthBuffer:!0,stencilBuffer:!1}),this.targets.push(this.reflRT),this.compMat.uniforms.uRes.value.set(n,i),this.compMat.uniforms.uAspect.value=n/i,this.width=n,this.height=i});this.canvas=e,this.isMobile=t,this.renderer=new Uc({canvas:e,antialias:!1,alpha:!1,stencil:!1,powerPreference:"high-performance"}),this.renderer.outputColorSpace=xt,this.renderer.toneMapping=_n,this.renderer.autoClear=!0,this.renderer.setPixelRatio(1),this.quad=new it(new xn(2,2),new kn),this.quad.frustumCulled=!1,this.quadScene.add(this.quad);let n=i=>i;this.brightMat=new Qe({vertexShader:Ho,fragmentShader:cb,depthTest:!1,depthWrite:!1,uniforms:n({tColor:{value:null},uThreshold:{value:1.2},uKnee:{value:.55}})}),this.downMat=new Qe({vertexShader:Ho,fragmentShader:lb,depthTest:!1,depthWrite:!1,uniforms:n({tColor:{value:null},uTexel:{value:new Oe}})}),this.upMat=new Qe({vertexShader:Ho,fragmentShader:hb,depthTest:!1,depthWrite:!1,uniforms:n({tColor:{value:null},tAdd:{value:null},uTexel:{value:new Oe},uMix:{value:.85}})}),this.compMat=new Qe({vertexShader:Ho,fragmentShader:fb,depthTest:!1,depthWrite:!1,uniforms:n({tColor:{value:null},tBloom:{value:null},uTime:{value:0},uBloom:{value:.75},uExposure:{value:1},uRain:{value:.55},uWarp:{value:0},uFlash:{value:0},uGrain:{value:.03},uAspect:{value:16/9},uRes:{value:new Oe(1920,1080)}})}),this.fxaaMat=new Qe({vertexShader:Ho,fragmentShader:ub,depthTest:!1,depthWrite:!1,uniforms:n({tColor:{value:null},uTexel:{value:new Oe}})}),this.scale=t?.85:1.2,this.reflScale=t?.3:.42,this.bloomMips=t?5:6,this.rainCount=t?3600:5200,this.useFxaa=!0,this.mirrorCam.layers.set(1),window.addEventListener("resize",this.resize),this.resize()}get rainInstances(){return this.rainCount}setRainProvider(e){this.onRainCount=e}applyQuality(e){this.scale=e.scale,this.reflScale=e.reflScale,this.bloomMips=e.bloomMips,this.useFxaa=e.fxaa,this.resize()}blit(e,t){this.quad.material=t,this.renderer.setRenderTarget(e),this.renderer.render(this.quadScene,this.quadCam)}renderReflection(e,t){let n=this.mirrorCam;n.fov=t.fov,n.aspect=t.aspect,n.near=t.near,n.far=t.far,n.updateProjectionMatrix();let i=t.getWorldPosition(new z),s=t.getWorldQuaternion(new Mt),o=new z(0,0,-1).applyQuaternion(s),a=new z(0,1,0).applyQuaternion(s);n.position.set(i.x,-i.y,i.z);let c=new z(i.x+o.x,-(i.y+o.y),i.z+o.z);n.up.set(a.x,-a.y,a.z),n.lookAt(c),n.updateMatrixWorld(!0),this.mirrorVP.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this.renderer.setRenderTarget(this.reflRT),this.renderer.setClearColor(dm,1),this.renderer.clear(!0,!0,!1),this.renderer.render(e,n)}render(e,t,n){this.time+=n;let i=this.params;this.renderer.setRenderTarget(this.sceneRT),this.renderer.setClearColor(dm,1),this.renderer.render(e,t),this.brightMat.uniforms.tColor.value=this.sceneRT.texture,this.blit(this.down[0],this.brightMat);for(let a=1;a<this.bloomMips;a++)this.downMat.uniforms.tColor.value=this.down[a-1].texture,this.downMat.uniforms.uTexel.value.set(1/this.down[a-1].width,1/this.down[a-1].height),this.blit(this.down[a],this.downMat);let s=this.down[this.bloomMips-1];for(let a=0;a<this.up.length;a++){let c=this.up[a],l=this.down[this.bloomMips-2-a];this.upMat.uniforms.tColor.value=s.texture,this.upMat.uniforms.tAdd.value=l.texture,this.upMat.uniforms.uTexel.value.set(1/s.width,1/s.height),this.blit(c,this.upMat),s=c}let o=this.compMat.uniforms;o.tColor.value=this.sceneRT.texture,o.tBloom.value=s.texture,o.uTime.value=this.time,o.uBloom.value=i.bloom,o.uExposure.value=i.exposure,o.uRain.value=i.rain,o.uWarp.value=i.warp,o.uFlash.value=i.flash,o.uGrain.value=i.grain,this.useFxaa?(this.blit(this.ldrRT,this.compMat),this.fxaaMat.uniforms.tColor.value=this.ldrRT.texture,this.fxaaMat.uniforms.uTexel.value.set(1/this.width,1/this.height),this.blit(null,this.fxaaMat)):this.blit(null,this.compMat)}dispose(){window.removeEventListener("resize",this.resize);for(let e of this.targets)e.dispose();this.renderer.dispose()}}});function mm(){let r=new hr(3200,40,24),e=new Qe({side:Yt,depthWrite:!1,fog:!1,uniforms:{uTime:wt.uTime,uHorizonA:{value:new Te(3761034)},uHorizonB:{value:new Te(6958165)},uZenith:{value:new Te(461846)},uCloud:{value:new Te(1582652)}},vertexShader:`
      varying vec3 vDir;
      void main(){
        vDir = normalize(position);
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * mv;
        gl_Position.z = gl_Position.w * 0.99999;
      }
    `,fragmentShader:`
      varying vec3 vDir;
      uniform float uTime;
      uniform vec3 uHorizonA, uHorizonB, uZenith, uCloud;
      float h21(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7)))*43758.5453); }
      float noise(vec2 p){
        vec2 i = floor(p), f = fract(p);
        f = f*f*(3.0-2.0*f);
        return mix(mix(h21(i), h21(i+vec2(1,0)), f.x), mix(h21(i+vec2(0,1)), h21(i+vec2(1,1)), f.x), f.y);
      }
      float fbm(vec2 p){
        float a = 0.5, s = 0.0;
        for (int i=0;i<5;i++){ s += a*noise(p); p = p*2.03 + 11.7; a *= 0.5; }
        return s;
      }
      void main(){
        vec3 d = normalize(vDir);
        float h = clamp(d.y, 0.0, 1.0);
        float side = 0.5 + 0.5 * sin(atan(d.x, d.z) * 1.0 + 0.7);
        vec3 hor = mix(uHorizonA, uHorizonB, side);
        vec3 col = mix(hor * 1.15, uZenith, pow(h, 0.42));
        vec2 cuv = d.xz / max(d.y, 0.06) * 0.55;
        cuv += uTime * vec2(0.008, 0.013);
        float cl = fbm(cuv * 2.2);
        float deck = smoothstep(0.38, 0.78, cl) * smoothstep(0.0, 0.14, d.y) * exp(-d.y * 1.9);
        vec3 cloudCol = mix(uCloud * 1.3, hor * 1.05, exp(-d.y * 3.2) * 0.85);
        col = mix(col, cloudCol, deck * 0.95);
        float st = step(0.9985, h21(floor(d.xz / max(d.y,0.05) * 220.0)));
        col += st * (1.0 - deck) * smoothstep(0.25, 0.6, d.y) * 0.25;
        // slow distant lightning shimmer
        float storm = pow(max(0.0, sin(uTime * 0.31 + 2.0)) , 24.0) * pow(max(0.0, sin(uTime * 3.7)), 8.0);
        col += hor * storm * 0.6 * exp(-d.y * 3.0);
        gl_FragColor = vec4(col, 1.0);
      }
    `}),t=new it(r,e);return t.frustumCulled=!1,t.renderOrder=-10,t}function gm(r){let e=new Ei,t=new hr(10,16,12),n=new Qe({side:Yt,vertexShader:"varying vec3 vP; void main(){ vP = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
      varying vec3 vP;
      void main(){
        vec3 d = normalize(vP);
        float h = clamp(d.y * 0.5 + 0.5, 0.0, 1.0);
        vec3 col = mix(vec3(0.10, 0.16, 0.24), vec3(0.008, 0.012, 0.03), pow(h, 0.6));
        float side = 0.5 + 0.5 * sin(atan(d.x, d.z) + 0.6);
        col += mix(vec3(0.06, 0.35, 0.55), vec3(0.5, 0.08, 0.28), side) * exp(-abs(d.y + 0.05) * 5.5) * 0.85;
        col += vec3(0.9, 0.6, 0.3) * exp(-abs(d.y + 0.55) * 9.0) * 0.12;
        gl_FragColor = vec4(col, 1.0);
      }
    `});e.add(new it(t,n));let i=new Ar(r),s=i.fromScene(e,.04);return i.dispose(),s.texture}var vm=Dt(()=>{Pn();rs()});function db(r,e){let t=new xn(1,1),n=new Ms;n.index=t.index,n.setAttribute("position",t.getAttribute("position")),n.setAttribute("uv",t.getAttribute("uv"));let i=new Float32Array(e*4),s=ss(4242);for(let c=0;c<e*4;c++)i[c]=s();n.setAttribute("aRand",new Je(i,4)),n.instanceCount=e;let o=new Qe({transparent:!0,depthWrite:!1,blending:Rn,uniforms:{uTime:wt.uTime,uRainAmt:wt.uRainAmt,uCamVel:wt.uCamVel,uBox:{value:new z(70,46,90)},...Kt},vertexShader:`
      attribute vec4 aRand;
      varying vec2 vUv; varying float vFade;
      uniform float uTime, uRainAmt;
      uniform vec3 uCamVel, uBox;
      void main(){
        vUv = uv;
        float speed = 14.0 + aRand.z * 9.0;
        vec3 vel = vec3(2.2 + aRand.w * 1.5, -speed, 1.2);
        vec3 base = aRand.xyz * uBox;
        vec3 anchor = cameraPosition + vec3(0.0, 4.0, 0.0);
        vec3 p = mod(base + vel * uTime - anchor, uBox);
        p += anchor - uBox * 0.5;
        float on = step(1.0 - uRainAmt, aRand.w * 0.999);
        vec3 dir = normalize(vel - uCamVel * 0.8);
        vec3 viewFwd = normalize(p - cameraPosition);
        vec3 right = normalize(cross(viewFwd, dir));
        float len = speed * 0.062 * (1.0 + length(uCamVel) * 0.012);
        vec3 wp = p + right * (uv.x - 0.5) * 0.028 + dir * (uv.y - 0.5) * len;
        float d = distance(p, cameraPosition);
        vFade = on * (1.0 - smoothstep(28.0, 46.0, d)) * smoothstep(0.9, 3.2, d);
        gl_Position = projectionMatrix * viewMatrix * vec4(wp, 1.0);
      }
    `,fragmentShader:`
      varying vec2 vUv; varying float vFade;
      void main(){
        float a = (1.0 - abs(vUv.x - 0.5) * 2.0) * sin(vUv.y * 3.14159);
        gl_FragColor = vec4(vec3(0.6, 0.72, 0.92) * 0.7, a * 0.5 * vFade);
      }
    `}),a=new it(n,o);return a.frustumCulled=!1,a.renderOrder=20,r.add(a),{mesh:a,mat:o}}function pb(r,e){let t=new xn(1,1),n=new Ms;n.index=t.index,n.setAttribute("position",t.getAttribute("position")),n.setAttribute("uv",t.getAttribute("uv"));let i=new Float32Array(e*4),s=ss(777);for(let l=0;l<e;l++)i[l*4]=s()*ul,i[l*4+1]=.6,i[l*4+2]=s()*ul,i[l*4+3]=.7+s()*.9;n.setAttribute("aEmit",new Je(i,4));let o=new Float32Array(e*4);for(let l=0;l<e*4;l++)o[l]=s();n.setAttribute("aRand",new Je(o,4)),n.instanceCount=e;let a=new Qe({transparent:!0,depthWrite:!1,uniforms:{uTime:wt.uTime,...Kt},vertexShader:`
      attribute vec4 aEmit;
      attribute vec4 aRand;
      varying vec2 vUv; varying float vAlpha; varying vec3 vW; varying float vSeed;
      uniform float uTime;
      void main(){
        vUv = uv; vSeed = aRand.w;
        float T = 5.0 + aRand.x * 4.0;
        float life = fract(uTime / T + aRand.y);
        float rise = life * (6.5 + aRand.z * 6.0) * aEmit.w;
        // nearest repeating copy of the emitter tile
        vec2 e = aEmit.xz + floor(cameraPosition.xz / ${ul}.0 + 0.5) * ${ul}.0;
        vec3 c = vec3(e.x, aEmit.y, e.y) + vec3((aRand.x - 0.5) * 2.6 * life, rise, (aRand.z - 0.5) * 2.6 * life);
        float scale = aEmit.w * (1.6 + life * 5.6);
        vAlpha = smoothstep(0.0, 0.14, life) * (1.0 - smoothstep(0.45, 1.0, life));
        vW = c;
        vec4 mv = viewMatrix * vec4(c, 1.0);
        mv.xy += (uv - 0.5) * scale;
        gl_Position = projectionMatrix * mv;
      }
    `,fragmentShader:`
      varying vec2 vUv; varying float vAlpha; varying vec3 vW; varying float vSeed;
      uniform float uTime;
      ${mb}
      float h21(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7)))*43758.5453); }
      float vnoise(vec2 p){
        vec2 i = floor(p), f = fract(p);
        f = f*f*(3.0-2.0*f);
        return mix(mix(h21(i), h21(i+vec2(1,0)), f.x), mix(h21(i+vec2(0,1)), h21(i+vec2(1,1)), f.x), f.y);
      }
      void main(){
        vec2 q = vUv - 0.5;
        float r = length(q) * 2.0;
        float n = vnoise(vUv * 5.0 + vSeed * 37.0 + uTime * 0.22) * 0.6
                + vnoise(vUv * 11.0 - uTime * 0.13 + vSeed * 91.0) * 0.4;
        float body = smoothstep(1.0, 0.22, r + n * 0.55);
        vec3 tint = mix(vec3(0.4, 0.72, 0.95), vec3(0.95, 0.5, 0.62), clamp(vW.x * 0.04 + 0.5, 0.0, 1.0));
        vec3 col = mix(vec3(0.1, 0.13, 0.17), tint * 0.5, exp(-max(vW.y, 0.0) * 0.05));
        float fade = exp(-distance(vW, cameraPosition) * uFogDensity * 1.3);
        gl_FragColor = vec4(col * fade, body * vAlpha * 0.42 * fade);
      }
    `}),c=new it(n,a);return c.frustumCulled=!1,c.renderOrder=18,r.add(c),{mesh:c,geo:n}}var ul,mb,Wf,vi,dl,xm=Dt(()=>{Pn();rs();Gf();ul=480;mb=`
  uniform float uFogDensity, uFogHeightFall, uCamY;
  uniform vec3 uFogLow, uFogHigh, uFogGlow;
`,Wf=class{constructor(e,t){V(this,"cap");V(this,"geo");V(this,"mesh");V(this,"i",0);this.cap=t;let n=new xn(1,1),i=new Ms;i.index=n.index,i.setAttribute("position",n.getAttribute("position")),i.setAttribute("uv",n.getAttribute("uv")),i.setAttribute("aPos",new Je(new Float32Array(t*3),3)),i.setAttribute("aColS",new Je(new Float32Array(t*4),4)),i.setAttribute("aBlink",new Je(new Float32Array(t),1)),this.geo=i,this.mesh=new it(i,im()),this.mesh.frustumCulled=!1,this.mesh.layers.enable(1),e.add(this.mesh),this.i=0}begin(){this.i=0}push(e,t,n,i,s,o,a,c=0){if(this.i>=this.cap)return;let l=this.i++;this.geo.getAttribute("aPos").setXYZ(l,e,t,n),this.geo.getAttribute("aColS").setXYZW(l,i,s,o,a),this.geo.getAttribute("aBlink").setX(l,c)}end(){this.geo.instanceCount=this.i,this.geo.getAttribute("aPos").needsUpdate=!0,this.geo.getAttribute("aColS").needsUpdate=!0,this.geo.getAttribute("aBlink").needsUpdate=!0}},vi=480,dl=class{constructor(e,t){V(this,"cars");V(this,"carData",[]);V(this,"glows");V(this,"tmpM",new Ie);V(this,"tmpP",new z);V(this,"tmpQ",new Mt);V(this,"tmpS",new z);V(this,"YAXIS",new z(0,1,0));let n=em(),i=new Vn(1,1,1),s=130;this.cars=new Ri(i,n,s),this.cars.frustumCulled=!1,this.cars.instanceMatrix.setUsage(Ro);let o=this.cars.geometry.clone();o.setAttribute("aTint",new Je(new Float32Array(s*3),3)),o.setAttribute("aSeed",new Je(new Float32Array(s),1)),this.cars.geometry=o,this.cars.layers.enable(1),e.add(this.cars);let a=o.getAttribute("aTint"),c=o.getAttribute("aSeed"),l=[1712168,2304822,2826024,1911590,3158587,3812894],h=ss(31337);for(let u=0;u<s;u++){let f=new Te(l[Math.floor(h()*l.length)]);a.setXYZ(u,f.r,f.g,f.b);let d=h();c.setX(u,d);let p=h()<.5?0:1,v=[-4.95,-1.65,1.65,4.95][Math.floor(h()*4)];this.carData.push({axis:p,s:h()*vi,speed:9+h()*9,lane:v,len:3.6+h()*1.4,taxi:d>.75})}a.needsUpdate=!0,c.needsUpdate=!0,this.glows=new Wf(e,700),db(e,t),pb(e,90)}update(e,t,n,i){this.glows.begin(),i&&i(this.glows);let s=(c,l,h,u,f,d,p,v,m)=>{this.tmpP.set(h,u,f),this.tmpQ.setFromAxisAngle(this.YAXIS,d),this.tmpS.set(v,m,p),this.tmpM.compose(this.tmpP,this.tmpQ,this.tmpS),c.setMatrixAt(l,this.tmpM)},o=Math.round(t.x/Rt)*Rt,a=Math.round(t.z/Rt)*Rt;for(let c=0;c<this.carData.length;c++){let l=this.carData[c];l.s=(l.s+l.speed*n)%vi;let h=l.lane<0?-1:1;if(l.axis===0){let u=t.x+((l.s-t.x)%vi+vi*1.5)%vi-vi/2,f=a+l.lane;s(this.cars,c,u,.62,f,h>0?-Math.PI/2:Math.PI/2,l.len,1.7,1.15);let d=u+h*l.len*.5;this.glows.push(d,.62,f+.55,2.6,2.4,1.9,1.5),this.glows.push(d,.62,f-.55,2.6,2.4,1.9,1.5),this.glows.push(u-h*l.len*.5,.62,f,2.2,.15,.1,1.1),l.taxi&&this.glows.push(u,1.35,f,2.4,1.7,.4,.9,3.1)}else{let u=t.z+((l.s-t.z)%vi+vi*1.5)%vi-vi/2,f=o+l.lane;s(this.cars,c,f,.62,u,h>0?Math.PI:0,l.len,1.7,1.15);let d=u+h*l.len*.5;this.glows.push(f+.55,.62,d,2.6,2.4,1.9,1.5),this.glows.push(f-.55,.62,d,2.6,2.4,1.9,1.5),this.glows.push(f,.62,u-h*l.len*.5,2.2,.15,.1,1.1),l.taxi&&this.glows.push(f,1.35,u,2.4,1.7,.4,.9,3.1)}}this.cars.instanceMatrix.needsUpdate=!0,this.glows.end()}}});function _m(r){let e=r%(Math.PI*2);return e>Math.PI&&(e-=Math.PI*2),e<-Math.PI&&(e+=Math.PI*2),e}var wn,gb,qf,ym,Am,pl,bm=Dt(()=>{Pn();Vf();rs();wn=ss(20260101),gb=new z(0,1,0),qf=380,ym=330,Am=16,pl=class{constructor(e){V(this,"crow");V(this,"mode","patrol");V(this,"anchor",new z);V(this,"pos",new z(0,62,0));V(this,"heading",0);V(this,"bank",0);V(this,"radius",130);V(this,"th",0);V(this,"thSpeed",.06);V(this,"baseAlt",62);V(this,"phase",0);V(this,"wanderT",4);V(this,"cawT",5);V(this,"time",0);V(this,"onCaw");V(this,"tmpV",new z);this.onCaw=e,this.crow=new Lr({tint:2304054,roughness:.4,wingspan:4.05}),this.respawn(0,0),this.crow.root.position.copy(this.pos)}respawn(e,t){let n=wn()*Math.PI*2,i=850+wn()*300;this.anchor.set(e+Math.sin(n)*i,0,t+Math.cos(n)*i),this.radius=110+wn()*70,this.baseAlt=52+wn()*30,this.th=wn()*Math.PI*2,this.thSpeed=(9+wn()*5)/this.radius,wn()<.5&&(this.thSpeed=-this.thSpeed),this.phase=wn()*Math.PI*2,this.cawT=3+wn()*5,this.mode="patrol";let s=this.patrolPos(0);this.pos.copy(s),this.crow.root.position.copy(s)}get position(){return this.pos}distanceTo(e){return this.pos.distanceTo(e)}caw(){this.crow.caw()}reply(){this.crow.caw()}update(e,t,n,i){if(this.time+=e,this.mode==="patrol"){if(this.wanderT-=e,this.wanderT<=0){this.wanderT=7+wn()*8,this.baseAlt=Math.min(88,Math.max(42,this.baseAlt+(wn()-.5)*14));let l=8+wn()*6;this.thSpeed=l/this.radius*(this.thSpeed<0?-1:1)}let s=this.patrolPos(e);this.pos.lerp(s,Math.min(1,e*4));let o=this.thSpeed<0?-1:1,a=-Math.sin(this.th)*o,c=Math.cos(this.th)*o;if(this.heading=Math.atan2(a,c),this.bank+=(-.3*o-this.bank)*Math.min(1,e*2),this.crow.root.position.copy(this.pos),this.crow.root.rotation.set(-.03,this.heading,this.bank),this.crow.update(e,0,Math.abs(this.thSpeed)*this.radius),this.cawT-=e,this.cawT<=0){this.cawT=10+wn()*9;let l=this.pos.distanceTo(t);if(l<ym){let h=_m(Math.atan2(this.pos.x-t.x,this.pos.z-t.z)-n);this.onCaw({pan:-Math.sin(h),vol:(1-l/ym)*.5,pos:this.pos.clone()})}}}else{let s=this.tmpV.set(-2.7,1,-4.4).applyAxisAngle(gb,n),o=new z().copy(t).add(s);this.pos.lerp(o,1-Math.exp(-3.2*e)),this.heading=n+Math.sin(this.time*1.1)*.06,this.bank+=(0-this.bank)*Math.min(1,e*3),this.crow.root.position.copy(this.pos),this.crow.root.rotation.set(-.02,this.heading,this.bank);let a=this.pos.distanceTo(t);if(this.crow.update(e,0,Math.max(8,24-a)),i&&this.crow.triggerFlap(),this.cawT-=e,this.cawT<=0){this.cawT=12+wn()*10;let c=_m(Math.atan2(this.pos.x-t.x,this.pos.z-t.z)-n);this.onCaw({pan:-Math.sin(c),vol:.34,pos:this.pos.clone()})}}}patrolPos(e){return this.th+=this.thSpeed*e,new z(this.anchor.x+Math.cos(this.th)*this.radius,this.baseAlt+Math.sin(this.time*.5+this.phase)*5.5,this.anchor.z+Math.sin(this.th)*this.radius)}}});function Sm(r){return r*r*(3-2*r)}function _b(r,e,t){let n=(e-r)%(Math.PI*2);return n>Math.PI&&(n-=Math.PI*2),n<-Math.PI&&(n+=Math.PI*2),r+n*t}function wm(r){let e=r%(Math.PI*2);return e>Math.PI&&(e-=Math.PI*2),e<-Math.PI&&(e+=Math.PI*2),e}var vb,xb,Mm,yb,ml,Tm=Dt(()=>{Pn();Np();Vf();lm();fm();um();pm();vm();xm();bm();rs();vb=9.82,xb=5,Mm=1.6,yb=170;ml=class{constructor(e,t,n){V(this,"post");V(this,"renderer");V(this,"scene",new Ei);V(this,"camera");V(this,"life");V(this,"world");V(this,"crowMat");V(this,"staticMat");V(this,"body");V(this,"bodyBodies",new Map);V(this,"crow",new Lr);V(this,"friend");V(this,"city");V(this,"audio",new hl);V(this,"input");V(this,"cb");V(this,"popupLayer");V(this,"canvas");V(this,"raf",0);V(this,"lastT",0);V(this,"time",0);V(this,"disposed",!1);V(this,"phase","menu");V(this,"heading",0);V(this,"bank",0);V(this,"pitchVis",0);V(this,"dist",0);V(this,"landings",0);V(this,"flapCd",0);V(this,"reLandCd",0);V(this,"bumpCd",0);V(this,"hintT",0);V(this,"statsT",0);V(this,"syncT",0);V(this,"menuFlapT",2);V(this,"timers",[]);V(this,"land",null);V(this,"currentZone",null);V(this,"found",0);V(this,"sonarCd",0);V(this,"pingT",0);V(this,"lastSignal",0);V(this,"friendDirWorld",0);V(this,"nextFriendT",0);V(this,"noReplyT",0);V(this,"flapPulseT",0);V(this,"camPos",new z(0,52,-10));V(this,"camLook",new z(0,48,0));V(this,"lastCamPos",new z(0,52,-10));V(this,"isMobile");V(this,"radius");V(this,"onCollide",e=>{if(this.phase!=="flying")return;Math.abs(e.contact.getImpactVelocityAlongNormal())>6&&this.bumpCd<=0&&(this.bumpCd=.6,this.audio.thud(.3),this.crow.caw(),this.popupCaw("\u041A\u0430\u0440!"))});V(this,"loop",e=>{if(this.disposed)return;this.raf=requestAnimationFrame(this.loop);let t=Math.min(.05,Math.max(.001,(e-this.lastT)/1e3));this.lastT=e,this.time+=t,this.update(t),this.render(t)});V(this,"onResize",()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix()});V(this,"onVisibility",()=>{document.hidden?this.audio.suspend():this.audio.resume()});this.canvas=e,this.popupLayer=t,this.cb=n,this.isMobile=window.matchMedia("(pointer: coarse)").matches||"ontouchstart"in window,this.radius=this.isMobile?300:380,this.post=new fl(e,this.isMobile),this.renderer=this.post.renderer,this.renderer.toneMapping=_n,this.camera=new Lt(62,window.innerWidth/window.innerHeight,.35,3600),this.camera.position.set(0,52,-10),this.scene.add(this.camera),this.scene.add(new po(1911360,1051668,1.1));let i=new Qi(9417944,.5);i.position.set(-40,90,30),this.scene.add(i);let s=new Qi(16727423,.22);s.position.set(50,30,-60),this.scene.add(s),this.scene.add(mm()),this.scene.environment=gm(this.renderer),this.world=new il({gravity:new E(0,-vb,0)}),this.world.broadphase=new Zc(this.world),this.world.allowSleep=!0,this.crowMat=new Is("crow"),this.staticMat=new Is("static"),this.world.addContactMaterial(new Tr(this.crowMat,this.staticMat,{friction:.4,restitution:.35}));let o=new qe({mass:0,material:this.staticMat,shape:new tl});o.quaternion.setFromEuler(-Math.PI/2,0,0),o.position.set(0,-.5,0),this.world.addBody(o),this.body=new qe({mass:1,material:this.crowMat,shape:new Qc(.42),fixedRotation:!0,linearDamping:.01,position:new E(0,48,0)}),this.body.addEventListener("collide",this.onCollide),this.world.addBody(this.body),this.city=new cl(this.radius),this.scene.add(this.city.group),this.city.setReflection(this.post.reflRT.texture),this.city.buildAllAround(0,0),this.syncBodies(),this.life=new dl(this.scene,this.post.rainInstances),this.crow.root.rotation.order="YXZ",this.scene.add(this.crow.root),this.friend=new pl(a=>this.onFriendCaw(a)),this.scene.add(this.friend.crow.root),this.input=new ll(e,{onFlap:()=>this.flap(),onCaw:()=>this.caw()}),window.addEventListener("resize",this.onResize),document.addEventListener("visibilitychange",this.onVisibility),this.setPhase("menu"),this.lastT=performance.now(),this.raf=requestAnimationFrame(this.loop)}startFlight(){this.audio.ensure(),this.resetCrow(0,0,0),this.dist=0,this.landings=0,this.found=0,this.pingT=0,this.sonarCd=0,this.nextFriendT=0,this.noReplyT=0,this.friend.respawn(0,0),this.setPhase("flying");let e=this.isMobile?"\u0421\u0432\u0430\u0439\u043F \u0432\u0432\u0435\u0440\u0445 \u2014 \u0432\u0437\u043C\u0430\u0445\u0438 \u043A\u0440\u044B\u043B\u044C\u0435\u0432 \xB7 \u043F\u0430\u043B\u0435\u0446 \u0432 \u0441\u0442\u043E\u0440\u043E\u043D\u0443 \u2014 \u043F\u043E\u0432\u043E\u0440\u043E\u0442 \xB7 \u0442\u0430\u043F \u2014 \xAB\u041A\u0430\u0440!\xBB":"\u041A\u043E\u043B\u0435\u0441\u043E \u043C\u044B\u0448\u0438 \u2014 \u0432\u0437\u043C\u0430\u0445\u0438 \u043A\u0440\u044B\u043B\u044C\u0435\u0432 \xB7 \u043A\u0443\u0440\u0441\u043E\u0440 \u0432 \u0441\u0442\u043E\u0440\u043E\u043D\u0443 \u2014 \u043F\u043E\u0432\u043E\u0440\u043E\u0442 \xB7 \u043A\u043B\u0438\u043A \u2014 \xAB\u041A\u0430\u0440!\xBB";this.showHint(e,7),this.addTimer(7.5,()=>{this.phase==="flying"&&this.showHint("\u0417\u0430\u0434\u0430\u0447\u0430: \u0433\u0434\u0435-\u0442\u043E \u0432 \u0433\u043E\u0440\u043E\u0434\u0435 \u043B\u0435\u0442\u0438\u0442 \u0432\u0442\u043E\u0440\u043E\u0439 \u0432\u043E\u0440\u043E\u043D. \u041D\u0430\u0439\u0434\u0438 \u0435\u0433\u043E! \u041A\u0430\u0440\u043A\u043D\u0438 \u2014 \u0435\u0441\u043B\u0438 \u043E\u043D \u0440\u044F\u0434\u043E\u043C, \u043E\u0442\u0432\u0435\u0442\u0438\u0442",9)})}restart(){this.audio.ensure();let e=this.body.position;this.resetCrow(e.x,e.z,this.heading),this.dist=0,this.landings=0,this.pingT=0,this.sonarCd=0,this.noReplyT=0,this.friend.respawn(e.x,e.z),this.setPhase("flying"),this.showHint("\u0422\u043E\u0432\u0430\u0440\u0438\u0449 \u0441\u043D\u043E\u0432\u0430 \u043F\u043E\u0442\u0435\u0440\u044F\u043B\u0441\u044F \u0433\u0434\u0435-\u0442\u043E \u0432 \u0433\u043E\u0440\u043E\u0434\u0435 \u2014 \u043B\u0435\u0442\u0438 \u0438\u0441\u043A\u0430\u0442\u044C!",7)}setMuted(e){this.audio.setMuted(e)}dispose(){this.disposed=!0,cancelAnimationFrame(this.raf),window.removeEventListener("resize",this.onResize),document.removeEventListener("visibilitychange",this.onVisibility),this.input.dispose(),this.audio.dispose(),this.city.dispose(),this.post.dispose()}setPhase(e){this.phase=e,this.input.enabled=e==="flying"||e==="landed",this.cb.onPhase(e)}showHint(e,t=0){this.cb.onHint(e),this.hintT=t}resetCrow(e,t,n){this.world.bodies.includes(this.body)||this.world.addBody(this.body),this.heading=n,this.heading=(this.heading%(Math.PI*2)+Math.PI*2)%(Math.PI*2),this.body.fixedRotation=!0,this.body.updateMassProperties(),this.body.angularVelocity.set(0,0,0),this.body.quaternion.set(0,0,0,1),this.body.position.set(e,48,t),this.body.velocity.set(Math.sin(this.heading)*10,0,Math.cos(this.heading)*10),this.bank=0,this.pitchVis=0,this.crow.setFold(0),this.crow.setLegs(0),this.crow.flapT=10,this.reLandCd=1,this.land=null,this.currentZone=null,this.camPos.set(e-Math.sin(this.heading)*10.2,51.8,t-Math.cos(this.heading)*10.2),this.camLook.set(e,48,t)}flap(){if(this.phase==="flying"){if(this.flapCd>0)return;this.flapCd=.1,this.flapPulseT=.12;let e=this.body.velocity;e.y=Math.min(e.y+xb,8);let t=Math.sin(this.heading),n=Math.cos(this.heading);e.x+=t*Mm,e.z+=n*Mm;let i=Math.hypot(e.x,e.z);i>24&&(e.x*=24/i,e.z*=24/i),this.crow.triggerFlap(),this.audio.flap()}else this.phase==="landed"&&this.takeoff()}caw(){this.phase!=="flying"&&this.phase!=="landed"||(this.audio.caw(),this.crow.caw(),this.popupCaw("\u041A\u0410\u0420!"),this.sonar())}sonar(){if(this.phase!=="flying"||this.sonarCd>0||this.friend.mode!=="patrol")return;this.sonarCd=2.2;let e=this.crow.root.position,t=this.friend.distanceTo(e);if(t>qf){this.noReplyT+=25;return}let n=.35+Math.random()*.5,i=1-t/qf,s=.16+i*.5,o=Math.atan2(this.friend.position.x-e.x,this.friend.position.z-e.z);this.addTimer(n,()=>{if(this.phase!=="flying"||this.friend.mode!=="patrol")return;this.friend.reply();let a=wm(o-this.heading);this.audio.replyCaw(-Math.sin(a),s),this.popupCawAt(this.friend.position,"\u041A\u0430\u0440!",.85),this.lastSignal=i,this.friendDirWorld=o,this.pingT=6,this.noReplyT=0})}onFriendCaw(e){this.audio.cawAt(e.pan,e.vol,.92),e.vol>.12&&this.popupCawAt(e.pos,"\u041A\u0430\u0440",.65)}onFound(){this.friend.mode="companion",this.found++,this.pingT=0,this.nextFriendT=32,this.audio.replyCaw(0,.5),this.addTimer(.45,()=>this.audio.replyCaw(.25,.42)),this.friend.caw(),this.crow.caw(),this.popupCawAt(this.friend.position,"\u041D\u0410\u0428\u0401\u041B!",1.25),this.showHint("\u0422\u043E\u0432\u0430\u0440\u0438\u0449 \u043D\u0430\u0439\u0434\u0435\u043D! \u0422\u0435\u043F\u0435\u0440\u044C \u043E\u043D \u043B\u0435\u0442\u0438\u0442 \u0440\u044F\u0434\u043E\u043C \u0441 \u0442\u043E\u0431\u043E\u0439",7)}popupCaw(e){this.popupCawAt(this.crow.root.position,e,1)}popupCawAt(e,t,n=1){let i=e.clone();if(i.y+=.7,i.project(this.camera),i.z>1)return;let s=(i.x*.5+.5)*window.innerWidth,o=(-i.y*.5+.5)*window.innerHeight;if(s<-40||s>window.innerWidth+40||o<-40||o>window.innerHeight+40)return;let a=document.createElement("span");a.className="caw-pop",a.textContent=t,a.style.left=`${s}px`,a.style.top=`${o}px`,a.style.setProperty("--r",`${(Math.random()-.5)*26}deg`),a.style.fontSize=`${(15+Math.random()*7)*n}px`,this.popupLayer.appendChild(a),window.setTimeout(()=>a.remove(),980)}addTimer(e,t){this.timers.push({t:e,fn:t})}startLanding(e){this.setPhase("landing"),this.input.enabled=!0,this.world.bodies.includes(this.body)&&this.world.removeBody(this.body);let t=Math.atan2(e.nx,e.nz);this.land={u:0,dur:.85,from:this.crow.root.position.clone(),to:new z(e.x+e.nx*.45,e.y+.42,e.z+e.nz*.45),yaw0:this.heading,yaw1:t},this.currentZone={nx:e.nx,nz:e.nz,y:e.y},this.crow.setLegs(1),this.showHint(null)}takeoff(){let e=this.currentZone,t=e?.nx??Math.sin(this.heading),n=e?.nz??Math.cos(this.heading),i=this.crow.root.position.x,s=this.crow.root.position.z;this.world.bodies.includes(this.body)||this.world.addBody(this.body),this.body.position.set(i+t*1.6,(e?.y??0)+.9,s+n*1.6),this.body.velocity.set(t*4.5,3.4,n*4.5),this.setPhase("flying"),this.crow.setFold(0),this.crow.setLegs(0),this.reLandCd=1.8,this.addTimer(.12,()=>this.crow.triggerFlap()),this.addTimer(.3,()=>this.crow.triggerFlap()),this.showHint(null)}die(){this.phase!=="dead"&&(this.setPhase("dead"),this.input.enabled=!1,this.audio.crash(),this.audio.setWind(0),this.crow.setFold(.15),this.crow.tumbleSpin(this.body),this.body.fixedRotation=!1,this.body.updateMassProperties())}update(e){for(let i=this.timers.length-1;i>=0;i--)if(this.timers[i].t-=e,this.timers[i].t<=0){let s=this.timers[i].fn;this.timers.splice(i,1),s()}this.flapCd=Math.max(0,this.flapCd-e),this.reLandCd=Math.max(0,this.reLandCd-e),this.bumpCd=Math.max(0,this.bumpCd-e),this.hintT>0&&(this.hintT-=e,this.hintT<=0&&this.cb.onHint(null)),wt.uTime.value=this.time,this.city.setZonePulse(.5+.5*Math.sin(this.time*2.2));let t=wt.uCamVel.value,n=this.camera.position.clone().sub(this.lastCamPos).divideScalar(Math.max(e,1e-4));switch(t.lerp(n,Math.min(1,e*8)),t.length()>400&&t.set(0,0,0),this.lastCamPos.copy(this.camera.position),this.phase){case"menu":this.updateMenu(e);break;case"flying":this.updateFlying(e);break;case"landing":this.updateLanding(e);break;case"landed":this.updateLanded(e);break;case"dead":this.world.step(1/60,e,4),this.crow.root.position.set(this.body.position.x,this.body.position.y,this.body.position.z),this.crow.root.rotation.set(this.time*2,this.heading,this.time*1.4),this.crow.update(e,0,0),this.camera.lookAt(this.crow.root.position);break}this.city.update(this.camera.position.x,this.camera.position.z,2),this.syncT-=e,this.syncT<=0&&(this.syncT=.3,this.syncBodies()),this.life.update(this.time,this.camera.position,e,i=>{let s=this.friend.position;this.friend.mode==="patrol"?i.push(s.x,s.y+.4,s.z,.55,.8,1,2.1,2.6):i.push(s.x,s.y+.4,s.z,1,.72,.35,1.5,0)}),this.sonarCd=Math.max(0,this.sonarCd-e),this.pingT=Math.max(0,this.pingT-e),this.flapPulseT=Math.max(0,this.flapPulseT-e),this.friend.update(e,this.crow.root.position,this.heading,this.flapPulseT>0),this.phase==="flying"&&(this.friend.mode==="patrol"&&this.friend.distanceTo(this.crow.root.position)<Am&&this.onFound(),this.nextFriendT>0?(this.nextFriendT-=e,this.nextFriendT<=0&&(this.friend.respawn(this.crow.root.position.x,this.crow.root.position.z),this.showHint("\u0412\u0434\u0430\u043B\u0435\u043A\u0435 \u0441\u043D\u043E\u0432\u0430 \u0440\u0430\u0437\u0434\u0430\u0451\u0442\u0441\u044F \xAB\u043A\u0430\u0440\xBB \u2014 \u0432 \u0433\u043E\u0440\u043E\u0434\u0435 \u0435\u0449\u0451 \u043E\u0434\u0438\u043D \u0442\u043E\u0432\u0430\u0440\u0438\u0449. \u041B\u0435\u0442\u0438!",8))):this.friend.mode==="patrol"&&(this.noReplyT+=e,this.noReplyT>40&&(this.noReplyT=0,this.showHint("\u0422\u0438\u0448\u0438\u043D\u0430\u2026 \u0442\u043E\u0432\u0430\u0440\u0438\u0449 \u0442\u0435\u0431\u044F \u043D\u0435 \u0441\u043B\u044B\u0448\u0438\u0442. \u0421\u043C\u0435\u043D\u0438 \u043A\u0443\u0440\u0441 \u0438 \u043A\u0430\u0440\u043A\u043D\u0438 \u0441\u043D\u043E\u0432\u0430",6)))),Kt.uCamY.value=this.camera.position.y,this.statsTick(e)}render(e){this.post.renderReflection(this.scene,this.camera),this.city.groundMat.uniforms.uMirrorVP.value.copy(this.post.mirrorVP),this.post.render(this.scene,this.camera,e)}updateMenu(e){this.menuFlapT-=e,this.menuFlapT<=0&&(this.menuFlapT=2.6,this.crow.triggerFlap());let t=Math.sin(this.time*.9)*.5;this.crow.root.position.set(0,48+t,0),this.crow.root.rotation.set(Math.sin(this.time*.5)*.06,this.time*.05,0),this.crow.update(e,0,8);let n=this.time*.14;this.camera.position.set(Math.sin(n)*13,51.5,Math.cos(n)*13),this.camera.lookAt(0,48.4,0),this.camPos.copy(this.camera.position)}updateFlying(e){let t=this.body,n=t.velocity,i=Math.hypot(n.x,n.z),s=this.input.getSteer(),o=1.15*(1-.3*Rr(i/26,0,1));this.heading-=s*o*e,this.heading=(this.heading%(Math.PI*2)+Math.PI*2)%(Math.PI*2),this.bank+=(s*.55-this.bank)*Math.min(1,e*5);let a=Math.sin(this.heading),c=Math.cos(this.heading),l=0,h=0;i<14&&(l+=a*24,h+=c*24),l+=(a*i-n.x)*2.4,h+=(c*i-n.z)*2.4;let u=n.length();l-=.01*n.x*u,h-=.01*n.z*u;let f=Math.min(4.4,i*.38),d=-.01*n.y*u+f;t.applyImpulse(new E(l*e,d*e,h*e),t.position),this.world.step(1/60,e,4);let p=Math.hypot(this.body.velocity.x,this.body.velocity.z);this.dist+=p*e;let v=this.body.position;if(v.y<.5){this.die();return}this.crow.root.position.set(v.x,v.y,v.z);let m=Rr(Math.atan2(this.body.velocity.y,Math.max(p,4))*.55,-.5,.6);this.pitchVis+=(m-this.pitchVis)*Math.min(1,e*6),this.crow.root.rotation.set(-this.pitchVis,this.heading,this.bank),this.crow.update(e,this.body.velocity.y,p),this.audio.setWind(Rr(p/26,0,1)),this.reLandCd<=0&&this.checkZones(p),this.updateCamera(e,v,p)}updateLanding(e){let t=this.land;if(!t)return;t.u=Math.min(1,t.u+e/t.dur);let n=Sm(t.u),i=t.from.clone().lerp(t.to,n);i.y+=Math.sin(n*Math.PI)*1.3,this.crow.root.position.copy(i),this.heading=_b(t.yaw0,t.yaw1,n),this.bank*=1-Math.min(1,e*6),this.crow.root.rotation.set(-this.pitchVis*(1-n),this.heading,this.bank),this.crow.setFold(Sm(Rr((t.u-.45)/.55,0,1))),this.crow.update(e,0,6),this.updateLandedCamera(e),t.u>=1&&(this.land=null,this.setPhase("landed"),this.landings++,this.audio.land(),this.addTimer(.5,()=>this.caw()),this.showHint("\u0412\u043E\u0440\u043E\u043D\u0430 \u0441\u0435\u043B\u0430 \u043E\u0442\u0434\u043E\u0445\u043D\u0443\u0442\u044C \xB7 \u0432\u0437\u043C\u0430\u0445 \u043A\u0440\u044B\u043B\u044C\u044F\u043C\u0438 \u2014 \u0438 \u0441\u043D\u043E\u0432\u0430 \u0432 \u043D\u0435\u0431\u043E"))}updateLanded(e){this.crow.root.position.y=(this.currentZone?.y??0)+.42+Math.sin(this.time*2)*.01,this.crow.root.rotation.set(0,this.heading,0),this.crow.update(e,0,0),this.updateLandedCamera(e),this.audio.setWind(.05)}updateLandedCamera(e){let t=this.currentZone?.nx??Math.sin(this.heading),n=this.currentZone?.nz??Math.cos(this.heading),i=new z(n,0,-t),s=this.crow.root.position.clone().addScaledVector(new z(t,0,n),7.2).addScaledVector(i,2.6);s.y+=1.7,this.camPos.lerp(s,1-Math.exp(-3*e)),this.camera.position.copy(this.camPos),this.camLook.lerp(this.crow.root.position,1-Math.exp(-5*e)),this.camera.lookAt(this.camLook)}updateCamera(e,t,n){let i=Math.sin(this.heading),s=Math.cos(this.heading),o=new z(t.x-i*10.2,t.y+3.8,t.z-s*10.2);this.camPos.lerp(o,1-Math.exp(-5*e)),this.camera.position.copy(this.camPos);let a=new z(t.x+i*6,t.y+.8,t.z+s*6);this.camLook.lerp(a,1-Math.exp(-6*e)),this.camera.lookAt(this.camLook),this.camera.rotateZ(-this.bank*.16);let c=62+14*Rr((n-8)/18,0,1);Math.abs(this.camera.fov-c)>.1&&(this.camera.fov+=(c-this.camera.fov)*Math.min(1,e*3),this.camera.updateProjectionMatrix())}checkZones(e){let t=this.body.position,n=this.body.velocity.y;for(let i of this.city.chunks.values())for(let s of i.zones){let o=t.x-s.x,a=t.z-s.z;if(o*o+a*a<12.25){let c=t.y-s.y;if(c>-1.4&&c<3&&n>-4.5&&e<13){this.startLanding(s);return}}}}syncBodies(){let e=this.crow.root.position.x,t=this.crow.root.position.z;for(let[n,i]of this.city.chunks){let s=(i.cx+.5)*Rt,o=(i.cz+.5)*Rt,a=Math.hypot(s-e,o-t)<yb,c=this.bodyBodies.get(n);if(a&&!c&&!i.bodiesAdded){let l=[];for(let h of i.bodies){let u=h.cyl?new el(h.hx,h.hz,h.hy*2,10):new Uo(new E(h.hx,h.hy,h.hz)),f=new qe({mass:0,material:this.staticMat,shape:u});f.position.set(h.x,h.y,h.z),this.world.addBody(f),l.push(f)}this.bodyBodies.set(n,l),i.bodiesAdded=!0}else if(!a&&c){for(let l of c)this.world.removeBody(l);this.bodyBodies.delete(n),i.bodiesAdded=!1}}}statsTick(e){if(this.statsT-=e,this.statsT<=0){this.statsT=.2;let t=this.body.velocity,n=this.phase==="flying",i=wm(this.friendDirWorld-this.heading);this.cb.onStats({alt:Math.max(0,Math.round(this.crow.root.position.y)),spd:n?Math.round(Math.hypot(t.x,t.y,t.z)*3.6):0,dist:Math.round(this.dist),landings:this.landings,found:this.found,signal:this.pingT>0?this.lastSignal*(.45+.55*(this.pingT/6)):0,dir:-i,pingT:this.pingT})}}}});var Wb=Hm(()=>{Tm();var Em=["\u041A\u0430\u0440-\u0440! \u0412\u0437\u043C\u0430\u0445\u043E\u0432 \u043D\u0435 \u0445\u0432\u0430\u0442\u0438\u043B\u043E\u2026","\u0412\u043E\u0440\u043E\u043D\u0430 \u043A\u043E\u0441\u043D\u0443\u043B\u0430\u0441\u044C \u0437\u0435\u043C\u043B\u0438. \u041F\u043E\u043B\u0451\u0442 \u043E\u043A\u043E\u043D\u0447\u0435\u043D.","\u0413\u0440\u0430\u0432\u0438\u0442\u0430\u0446\u0438\u044F \u0441\u0435\u0433\u043E\u0434\u043D\u044F \u0441\u0438\u043B\u044C\u043D\u0435\u0435."];function Rm(r){return r<1e3?`${r} \u043C`:`${(r/1e3).toFixed(1)} \u043A\u043C`}var lt=r=>document.getElementById(r),Ab=lt("game"),bb=lt("popups"),Mb=lt("loading"),Sb=lt("error"),wb=lt("error-text"),Tb=lt("hud"),Eb=lt("hint-wrap"),Rb=lt("hint"),Lb=lt("sonar"),Cb=lt("menu"),Pb=lt("gameover"),Ib=lt("dead-line"),Nb=lt("stat-alt"),Fb=lt("stat-spd"),Bb=lt("stat-dist"),Lm=lt("stat-found"),Db=lt("stat-landings"),Ub=lt("stat-found-over"),Ob=lt("stat-dist-over"),zb=lt("sonar-text"),Cm=lt("sonar-arrow"),Hb=Array.from(document.querySelectorAll("#sonar .bar")),Pm=lt("mute"),kb=lt("mute-on"),Vb=lt("mute-off"),Im=window.matchMedia("(pointer: coarse)").matches||"ontouchstart"in window;lt("help-touch").classList.toggle("hidden",!Im);lt("help-desk").classList.toggle("hidden",Im);var ut={booting:!0,error:null,phase:"menu",hint:null,muted:!1,stats:{alt:0,spd:0,dist:0,landings:0,found:0,signal:0,dir:0,pingT:0}};Ib.textContent=Em[Math.floor(Math.random()*Em.length)];function Fr(){Mb.classList.toggle("hidden",!ut.booting||!!ut.error),Sb.classList.toggle("hidden",!ut.error),ut.error&&(wb.textContent=ut.error);let r=ut.phase==="flying"||ut.phase==="landing"||ut.phase==="landed";Tb.classList.toggle("hidden",!r),Lb.classList.toggle("hidden",!r),Eb.classList.toggle("hidden",!r||!ut.hint),Cb.classList.toggle("hidden",!(ut.phase==="menu"&&!ut.booting&&!ut.error)),Pb.classList.toggle("hidden",ut.phase!=="dead"),ut.hint&&(Rb.textContent=ut.hint);let e=ut.stats;Nb.textContent=`\u0412\u042B\u0421 ${e.alt} \u043C`,Fb.textContent=`\u0421\u041A\u041E\u0420 ${e.spd} \u043A\u043C/\u0447`,Bb.textContent=Rm(e.dist),Lm.textContent=`\u0422\u041E\u0412\u0410\u0420\u0418\u0429\u0415\u0419: ${e.found}`,Lm.classList.toggle("hidden",e.found<=0),Ob.textContent=Rm(e.dist),Db.textContent=String(e.landings),Ub.textContent=String(e.found);let t=[.2,.4,.6,.8,1];Hb.forEach((n,i)=>{let s=e.signal>=t[i];n.style.height=`${6+i*3+4}px`,n.style.background=s?"rgb(134, 239, 172)":"rgba(255,255,255,0.14)",n.style.boxShadow=s?"0 0 8px rgba(134,239,172,0.55)":"none"}),zb.textContent=e.found>0&&e.pingT<=0?"\u0440\u044F\u0434\u043E\u043C \u0441 \u0442\u043E\u0431\u043E\u0439 \xB7 \u0438\u0449\u0438 \u043D\u043E\u0432\u043E\u0433\u043E":e.pingT>0?"\u043E\u0442\u0432\u0435\u0442\u0438\u043B \u2014 \u0441\u043B\u0443\u0448\u0430\u0439 \u0438 \u043B\u0435\u0442\u0438!":"\u043A\u0430\u0440\u043A\u043D\u0438 \u2014 \u0432\u0434\u0440\u0443\u0433 \u043E\u0442\u0432\u0435\u0442\u0438\u0442\u2026",Cm.style.opacity=String(e.pingT>0?Math.min(1,e.pingT/1.5):0),Cm.style.transform=`rotate(${e.dir*180/Math.PI}deg)`,kb.classList.toggle("hidden",ut.muted),Vb.classList.toggle("hidden",!ut.muted),Pm.setAttribute("aria-label",ut.muted?"\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0437\u0432\u0443\u043A":"\u0412\u044B\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0437\u0432\u0443\u043A")}var ko=null;function Gb(){window.setTimeout(()=>{try{ko=new ml(Ab,bb,{onPhase:r=>{ut.phase=r,Fr()},onHint:r=>{ut.hint=r,Fr()},onStats:r=>{ut.stats=r,Fr()}}),window.__crowGame=ko,window.__CROW={Scene:Ei,Mesh:it,Group:qt,BoxGeometry:Vn,PlaneGeometry:xn,CylinderGeometry:Ca,ConeGeometry:lo,SphereGeometry:hr,MeshStandardMaterial:oi,Color:Te,Vector3:z,Quaternion:Mt,Matrix4:Ie,Euler:Hn,Box3:un,GLTFLoader:sl}}catch(r){ut.error=r instanceof Error?r.message:"WebGL \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u0435\u043D"}finally{ut.booting=!1,Fr()}},60)}lt("btn-start").addEventListener("click",()=>ko?.startFlight());lt("btn-restart").addEventListener("click",()=>ko?.restart());Pm.addEventListener("click",()=>{ut.muted=!ut.muted,ko?.setMuted(ut.muted),Fr()});document.addEventListener("gesturestart",r=>r.preventDefault());document.addEventListener("dblclick",r=>r.preventDefault());Fr();Gb()});Wb();})();
/*! Bundled license information:

three/build/three.core.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/


/* ==========================================================================
   Москва-Сити: река, мосты, машины и хрущёвки
   Дополнение к игре «Ворона над Москвой».
   Работает поверх window.__crowGame, который отдаёт основной script.js.
   ========================================================================== */
(() => {
  "use strict";

  const RIVER_INNER = 158;
  const RIVER_OUTER = 182;
  const RIVER_MID = (RIVER_INNER + RIVER_OUTER) / 2;
  const RIVER_SEGMENTS = 180;
  const ROAD_STEP = 60;
  const ROAD_HALF = 10.2;
  const WATER_Y = 0.05;
  const BRIDGE_Y = 0.28;
  const CAR_MIN_SPEED = 4.4;
  const CAR_MAX_SPEED = 7.2;
  const CAR_COUNT = 20;
  const MAX_HOUSES = 72;

  const S = {
    started: false,
    game: null,
    T: null,
    group: null,
    cars: [],
    carTemplates: [],
    houses: [],
    houseTemplates: [],
    panelTemplate: null,
    boxGeo: null,
    cylGeo: null,
    prevVy: 0,
    prevSpeed: 0,
    pendingRoof: null,
    pendingCrash: null,
    waterMat: null,
    bridgeMat: null,
    railMat: null,
  };

  const rand = (a, b) => a + Math.random() * (b - a);
  const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
  const mod = (n, m) => ((n % m) + m) % m;

  /* ------------------------------------------------------------------ pack -- */

  const PACK_URL = "models.pack";
  const PACK_MAGIC = "CRWPACK1";

  /* Все .glb лежат в одном контейнере: 8 байт сигнатуры, 4 байта длины
     JSON-заголовка, сам заголовок и следом — содержимое файлов. Так проект
     остаётся компактным, а модели грузятся одним запросом. */
  function loadPack() {
    return fetch(PACK_URL).then(async (res) => {
      if (!res.ok) throw new Error(`models.pack: HTTP ${res.status}`);
      const buffer = await res.arrayBuffer();
      const bytes = new Uint8Array(buffer);
      const magic = new TextDecoder().decode(bytes.subarray(0, 8));
      if (magic !== PACK_MAGIC) {
        throw new Error("models.pack: неверная сигнатура");
      }

      const headerLen = new DataView(buffer).getUint32(8, true);
      const headerText = new TextDecoder().decode(
        bytes.subarray(12, 12 + headerLen),
      );
      const header = JSON.parse(headerText);
      const files = header.files || {};
      const base = 12 + headerLen;

      return {
        names: Object.keys(files),
        read(name) {
          const entry = files[name];
          if (!entry) {
            return Promise.reject(
              new Error(`models.pack: нет файла ${name}`),
            );
          }
          return Promise.resolve(
            buffer.slice(
              base + entry.offset,
              base + entry.offset + entry.size,
            ),
          );
        },
      };
    });
  }

  /* ------------------------------------------------------------------ boot -- */

  function boot() {
    if (S.started) return;
    const game = window.__crowGame;
    if (!game || !window.__CROW) {
      window.setTimeout(boot, 120);
      return;
    }
    S.started = true;
    try {
      init(game, window.__CROW);
    } catch (err) {
      console.error("[Москва-Сити] не удалось запустить дополнение", err);
    }
  }

  function init(game, T) {
    S.game = game;
    S.T = T;
    S.group = new T.Group();
    S.group.name = "moscow-city-addon";
    game.scene.add(S.group);

    S.boxGeo = new T.BoxGeometry(1, 1, 1);
    S.cylGeo = new T.CylinderGeometry(1, 1, 1, 10);

    const groundGeom = game.city.ground.geometry;
    const positionAttr = groundGeom.getAttribute("position");
    S.BufferGeometry = Object.getPrototypeOf(T.PlaneGeometry.prototype)
      .constructor;
    // Именно базовый BufferAttribute: Float32BufferAttribute превратил бы
    // индексы в Float32Array, а glDrawElements такое не принимает.
    S.BufferAttribute = Object.getPrototypeOf(
      positionAttr.constructor.prototype,
    ).constructor;
    if (!S.BufferAttribute || S.BufferAttribute === Object) {
      S.BufferAttribute = positionAttr.constructor;
    }

    buildRiver();
    buildBridges();
    spawnCars();
    patchGame();
    ensureFlightHint();
    S.packPromise = loadPack();
    loadAssets();

    // Небольшая отладочная точка опоры для тестов в консоли.
    game.__cityAddon = S;
  }

  /* --------------------------------------------------------------- geometry -- */

  function ringGeometry(r0, r1, segments) {
    const T = S.T;
    const ground = S.game.city.ground;
    const BufferGeometry = Object.getPrototypeOf(
      T.PlaneGeometry.prototype,
    ).constructor;
    const BufferAttribute = ground.geometry.getAttribute("position")
      .constructor;

    const positions = new Float32Array((segments + 1) * 6);
    const indices = [];
    for (let i = 0; i <= segments; i++) {
      const a = (i / segments) * Math.PI * 2;
      const c = Math.cos(a);
      const s = Math.sin(a);
      positions[i * 6 + 0] = c * r0;
      positions[i * 6 + 1] = 0;
      positions[i * 6 + 2] = s * r0;
      positions[i * 6 + 3] = c * r1;
      positions[i * 6 + 4] = 0;
      positions[i * 6 + 5] = s * r1;
    }
    for (let i = 0; i < segments; i++) {
      const a = i * 2;
      const b = i * 2 + 1;
      const c = i * 2 + 2;
      const d = i * 2 + 3;
      indices.push(a, b, c, b, d, c);
    }

    const geo = new BufferGeometry();
    geo.setAttribute("position", new BufferAttribute(positions, 3));
    geo.setIndex(indices);
    geo.computeVertexNormals();
    return geo;
  }

  /* ------------------------------------------------------------------ river -- */

  function buildRiver() {
    const T = S.T;

    S.waterMat = new T.MeshStandardMaterial({
      color: 0x071a2c,
      emissive: 0x03111f,
      emissiveIntensity: 1.25,
      roughness: 0.16,
      metalness: 0.72,
      envMapIntensity: 1.7,
      side: 2,
    });

    const waterGeo = ringGeometry(RIVER_INNER, RIVER_OUTER, RIVER_SEGMENTS);
    const water = new T.Mesh(waterGeo, S.waterMat);
    water.position.y = WATER_Y;
    water.renderOrder = 1;
    S.group.add(water);

    // Бетонные берега.
    const bankMat = new T.MeshStandardMaterial({
      color: 0x151b24,
      roughness: 0.92,
      metalness: 0.05,
    });
    const innerBank = new T.Mesh(
      ringGeometry(RIVER_INNER - 3.2, RIVER_INNER, RIVER_SEGMENTS),
      bankMat,
    );
    const outerBank = new T.Mesh(
      ringGeometry(RIVER_OUTER, RIVER_OUTER + 3.2, RIVER_SEGMENTS),
      bankMat,
    );
    innerBank.position.y = 0.14;
    outerBank.position.y = 0.14;
    S.group.add(innerBank, outerBank);

    // Светящаяся кромка воды.
    const rimMat = new T.MeshStandardMaterial({
      color: 0x1c5e83,
      emissive: 0x1a78a8,
      emissiveIntensity: 1.9,
      roughness: 0.5,
      metalness: 0.1,
      side: 2,
    });
    const rimIn = new T.Mesh(
      ringGeometry(RIVER_INNER - 0.55, RIVER_INNER + 0.15, RIVER_SEGMENTS),
      rimMat,
    );
    const rimOut = new T.Mesh(
      ringGeometry(RIVER_OUTER - 0.15, RIVER_OUTER + 0.55, RIVER_SEGMENTS),
      rimMat,
    );
    rimIn.position.y = 0.12;
    rimOut.position.y = 0.12;
    S.group.add(rimIn, rimOut);
  }

  function buildBridges() {
    const T = S.T;
    S.bridgeMat = new T.MeshStandardMaterial({
      color: 0x202a36,
      emissive: 0x071522,
      emissiveIntensity: 0.9,
      roughness: 0.55,
      metalness: 0.42,
    });
    S.railMat = new T.MeshStandardMaterial({
      color: 0x38516a,
      emissive: 0x2a9ec9,
      emissiveIntensity: 2.1,
      roughness: 0.35,
      metalness: 0.25,
    });

    // Мосты в местах, где сетка дорог пересекает кольцо реки.
    for (let c = -180; c <= 180; c += ROAD_STEP) {
      if (Math.abs(c) >= RIVER_OUTER - 1) continue;
      const outer = Math.sqrt(RIVER_OUTER * RIVER_OUTER - c * c);
      const inner =
        Math.abs(c) < RIVER_INNER
          ? Math.sqrt(RIVER_INNER * RIVER_INNER - c * c)
          : 0;

      if (inner > 0) {
        addBridge(c, -((inner + outer) / 2), outer - inner, true);
        addBridge(c, (inner + outer) / 2, outer - inner, true);
        addBridge(-((inner + outer) / 2), c, outer - inner, false);
        addBridge((inner + outer) / 2, c, outer - inner, false);
      } else {
        addBridge(c, 0, outer, true);
        addBridge(0, c, outer, false);
      }
    }
  }

  function addBridge(x, z, halfLen, alongZ) {
    const T = S.T;
    const deckLen = halfLen * 2 + 7;
    const deck = new T.Mesh(S.boxGeo, S.bridgeMat);
    if (alongZ) {
      deck.scale.set(23, 0.32, deckLen);
    } else {
      deck.scale.set(deckLen, 0.32, 23);
    }
    deck.position.set(x, BRIDGE_Y - 0.16, z);
    S.group.add(deck);

    // Светящиеся перила.
    for (const side of [-1, 1]) {
      const rail = new T.Mesh(S.boxGeo, S.railMat);
      if (alongZ) {
        rail.scale.set(0.22, 0.22, deckLen);
        rail.position.set(x + side * 11.4, BRIDGE_Y + 0.55, z);
      } else {
        rail.scale.set(deckLen, 0.22, 0.22);
        rail.position.set(x, BRIDGE_Y + 0.55, z + side * 11.4);
      }
      S.group.add(rail);
    }
  }

  /* ------------------------------------------------------------- road logic -- */

  function isRoad(x, z) {
    const dx = Math.abs(mod(x + ROAD_STEP / 2, ROAD_STEP) - ROAD_STEP / 2);
    const dz = Math.abs(mod(z + ROAD_STEP / 2, ROAD_STEP) - ROAD_STEP / 2);
    return Math.min(dx, dz) <= ROAD_HALF;
  }

  function surfaceY(x, z) {
    const r = Math.hypot(x, z);
    if (r > RIVER_INNER - 2.5 && r < RIVER_OUTER + 2.5) return BRIDGE_Y;
    return 0.04;
  }

  /* ------------------------------------------------------------------- cars -- */

  function spawnCars() {
    for (let i = 0; i < CAR_COUNT; i++) {
      const root = new S.T.Group();
      const visual = makeFallbackCar();
      root.add(visual);
      S.group.add(root);
      const car = {
        root,
        visual,
        axis: Math.random() < 0.5 ? "z" : "x",
        dir: Math.random() < 0.5 ? 1 : -1,
        speed: rand(CAR_MIN_SPEED, CAR_MAX_SPEED),
        height: 1.85,
        length: 4.5,
        radius: 2.45,
        x: 0,
        z: 0,
      };
      respawnCar(car, { x: 0, z: 0 });
      S.cars.push(car);
    }
  }

  function makeFallbackCar() {
    const T = S.T;
    const g = new T.Group();
    const bodyMat = new T.MeshStandardMaterial({
      color: 0x263243,
      roughness: 0.52,
      metalness: 0.38,
    });
    const glassMat = new T.MeshStandardMaterial({
      color: 0x101821,
      roughness: 0.18,
      metalness: 0.5,
    });
    const tireMat = new T.MeshStandardMaterial({
      color: 0x06080b,
      roughness: 0.95,
    });

    const body = new T.Mesh(S.boxGeo, bodyMat);
    body.scale.set(1.9, 0.72, 4.5);
    body.position.y = 0.76;
    g.add(body);

    const cabin = new T.Mesh(S.boxGeo, glassMat);
    cabin.scale.set(1.58, 0.58, 1.85);
    cabin.position.set(0, 1.4, -0.15);
    g.add(cabin);

    for (const x of [-0.95, 0.95]) {
      for (const z of [-1.45, 1.45]) {
        const wheel = new T.Mesh(S.cylGeo, tireMat);
        wheel.scale.set(0.34, 0.28, 0.34);
        wheel.rotation.z = Math.PI / 2;
        wheel.position.set(x, 0.35, z);
        g.add(wheel);
      }
    }

    const headMat = new T.MeshStandardMaterial({
      color: 0xfff2c8,
      emissive: 0xffd275,
      emissiveIntensity: 2.4,
      roughness: 0.3,
    });
    const tailMat = new T.MeshStandardMaterial({
      color: 0x5d0b0b,
      emissive: 0xff2020,
      emissiveIntensity: 1.8,
      roughness: 0.4,
    });
    for (const x of [-0.64, 0.64]) {
      const hl = new T.Mesh(S.boxGeo, headMat);
      hl.scale.set(0.28, 0.16, 0.08);
      hl.position.set(x, 0.83, 2.28);
      g.add(hl);
      const tl = new T.Mesh(S.boxGeo, tailMat);
      tl.scale.set(0.25, 0.14, 0.06);
      tl.position.set(x, 0.83, -2.29);
      g.add(tl);
    }
    return g;
  }

  function respawnCar(car, around) {
    car.axis = Math.random() < 0.5 ? "z" : "x";
    car.dir = Math.random() < 0.5 ? 1 : -1;
    car.speed = rand(CAR_MIN_SPEED, CAR_MAX_SPEED);

    const lane = car.dir > 0 ? 3.2 : -3.2;
    if (car.axis === "z") {
      const line = Math.round((around.x + rand(-260, 260)) / ROAD_STEP) *
        ROAD_STEP;
      car.x = line + lane;
      car.z = around.z + rand(-300, 300);
    } else {
      const line = Math.round((around.z + rand(-260, 260)) / ROAD_STEP) *
        ROAD_STEP;
      car.z = line + lane;
      car.x = around.x + rand(-300, 300);
    }
    updateCarTransform(car);
  }

  function updateCarTransform(car) {
    const y = surfaceY(car.x, car.z);
    car.root.position.set(car.x, y, car.z);
    if (car.axis === "z") {
      car.root.rotation.y = car.dir > 0 ? 0 : Math.PI;
    } else {
      car.root.rotation.y = car.dir > 0 ? Math.PI / 2 : -Math.PI / 2;
    }
  }

  function updateCars(dt) {
    if (!S.game || !S.game.crow) return;
    const p = S.game.crow.root.position;
    for (const car of S.cars) {
      const step = car.speed * car.dir * dt;
      if (car.axis === "z") {
        car.z += step;
        if (car.z > 380) car.z -= 760;
        else if (car.z < -380) car.z += 760;
      } else {
        car.x += step;
        if (car.x > 380) car.x -= 760;
        else if (car.x < -380) car.x += 760;
      }

      if (Math.hypot(car.x - p.x, car.z - p.z) > 460) {
        respawnCar(car, p);
        continue;
      }
      updateCarTransform(car);
    }
  }

  function checkCarHit() {
    const phase = S.game.phase;
    if (phase !== "flying" && phase !== "landing" && phase !== "landed") return;
    const p = S.game.crow.root.position;
    for (const car of S.cars) {
      if (p.y > car.height + 1.15) continue;
      const dx = p.x - car.root.position.x;
      const dz = p.z - car.root.position.z;
      const reach = car.radius + 0.65;
      if (dx * dx + dz * dz < reach * reach) {
        S.game.die("car");
        return;
      }
    }
  }

  /* --------------------------------------------------------------- buildings -- */

  function patchGame() {
    const game = S.game;
    const origUpdate = game.update.bind(game);
    const origCheckZones = game.checkZones.bind(game);
    const origDie = game.die.bind(game);
    const origCollide = game.onCollide;

    game.update = function updateWithAddon(dt) {
      S.prevVy = game.body ? game.body.velocity.y : 0;
      S.prevSpeed = game.body
        ? Math.hypot(game.body.velocity.x, game.body.velocity.z)
        : 0;

      origUpdate(dt);

      updateCars(dt);

      if (S.pendingCrash) {
        const reason = S.pendingCrash;
        S.pendingCrash = null;
        S.pendingRoof = null;
        game.die(reason);
      } else if (S.pendingRoof) {
        const zone = S.pendingRoof;
        S.pendingRoof = null;
        if (game.phase === "flying" && game.reLandCd <= 0) {
          game.startLanding(zone);
        }
      }

      if (game.phase === "flying") checkBuildingCrash();
      checkCarHit();
    };

    game.checkZones = function checkZonesWithAddon(speed) {
      if (game.phase !== "flying") return;
      origCheckZones(speed);
      if (game.phase !== "flying") return;
      tryExtraLanding(speed);
    };

    game.die = function dieWithAddon(reason) {
      if (game.phase === "dead") return;

      const why = reason || "fall";
      if (why === "fall" && game.phase === "flying") {
        const b = game.body;
        const p = b.position;
        if (
          isRoad(p.x, p.z) &&
          S.prevVy > -8.6 &&
          Math.hypot(b.velocity.x, b.velocity.z) < 17
        ) {
          game.startLanding({
            x: p.x,
            y: surfaceY(p.x, p.z),
            z: p.z,
            nx: 0,
            nz: 1,
          });
          return;
        }
      }

      setDeathReason(why);

      const crow = game.crow.root.position;
      if (game.body) {
        if (!game.world.bodies.includes(game.body)) {
          game.world.addBody(game.body);
        }
        game.body.fixedRotation = true;
        game.body.updateMassProperties();
        game.body.position.set(crow.x, Math.max(0.55, crow.y), crow.z);
        game.body.velocity.set(0, 0, 0);
        game.body.angularVelocity.set(0, 0, 0);
        game.body.wakeUp();
      }
      origDie();
    };

    if (game.body) {
      game.body.removeEventListener("collide", origCollide);
    }
    game.onCollide = function onCollideWithAddon(e) {
      if (game.phase !== "flying") return;
      const other = e.body;
      const he = other && other.shape && other.shape.halfExtents;
      if (!he) {
        origCollide(e);
        return;
      }

      const contact = e.contact;
      const impact = Math.abs(contact.getImpactVelocityAlongNormal());
      const normalY = Math.abs(contact.ni ? contact.ni.y : 0);
      const isBigRoof = he.y > 2 && he.x * he.z > 25;

      if (
        normalY > 0.62 &&
        impact < 7 &&
        S.prevVy > -8.6 &&
        isBigRoof
      ) {
        S.pendingRoof = {
          x: other.position.x,
          y: other.position.y + he.y,
          z: other.position.z,
          nx: 0,
          nz: 1,
        };
        return;
      }

      if (impact > 2.1) {
        S.pendingCrash = "building";
        return;
      }
      origCollide(e);
    };
    if (game.body) {
      game.body.addEventListener("collide", game.onCollide);
    }
  }

  function tryExtraLanding(speed) {
    const game = S.game;
    const p = game.body.position;

    // Сначала крыши: и процедурные дома, и загруженные модели.
    if (S.prevVy > -8.6 && speed < 19) {
      for (const chunk of game.city.chunks.values()) {
        for (const r of chunk.bodies) {
          if (r.hy < 2 || r.hx * r.hz < 25) continue;
          const top = r.y + r.hy;
          if (
            p.y > top - 1.45 &&
            p.y < top + 2.5 &&
            Math.abs(p.x - r.x) < r.hx * 0.97 &&
            Math.abs(p.z - r.z) < r.hz * 0.97
          ) {
            game.startLanding({
              x: r.x,
              y: top,
              z: r.z,
              nx: 0,
              nz: 1,
            });
            return;
          }
        }
      }

      for (const h of S.houses) {
        const lx = h.cos * (p.x - h.x) + h.sin * (p.z - h.z);
        const lz = -h.sin * (p.x - h.x) + h.cos * (p.z - h.z);
        if (
          Math.abs(lx) < h.hx * 0.97 &&
          Math.abs(lz) < h.hz * 0.97 &&
          p.y > h.top - 1.45 &&
          p.y < h.top + 2.5
        ) {
          game.startLanding({
            x: h.x,
            y: h.top,
            z: h.z,
            nx: 0,
            nz: 1,
          });
          return;
        }
      }
    }

    // Затем дорога (включая мосты через реку).
    if (
      p.y < 2.8 &&
      isRoad(p.x, p.z) &&
      S.prevVy > -8.6 &&
      speed < 16
    ) {
      game.startLanding({
        x: p.x,
        y: surfaceY(p.x, p.z),
        z: p.z,
        nx: 0,
        nz: 1,
      });
    }
  }

  function checkBuildingCrash() {
    const game = S.game;
    const b = game.body;
    if (!b) return;
    const p = b.position;

    for (const chunk of game.city.chunks.values()) {
      for (const r of chunk.bodies) {
        const top = r.y + r.hy;
        if (p.y >= top - 1.0) continue;
        if (p.y <= r.y - r.hy - 0.9) continue;
        if (Math.abs(p.x - r.x) > r.hx + 0.35) continue;
        if (Math.abs(p.z - r.z) > r.hz + 0.35) continue;
        game.die("building");
        return;
      }
    }

    for (const h of S.houses) {
      if (p.y >= h.top - 1.0) continue;
      if (p.y <= -1.0) continue;
      const lx = h.cos * (p.x - h.x) + h.sin * (p.z - h.z);
      const lz = -h.sin * (p.x - h.x) + h.cos * (p.z - h.z);
      if (Math.abs(lx) > h.hx + 0.35) continue;
      if (Math.abs(lz) > h.hz + 0.35) continue;
      game.die("building");
      return;
    }
  }

  function setDeathReason(reason) {
    const title = document.getElementById("dead-line");
    const emoji = document.querySelector("#gameover .over-emoji");
    if (reason === "car") {
      if (emoji) emoji.textContent = "🚗";
      if (title) title.textContent = "Кар-р! Сбила машина…";
    } else if (reason === "building") {
      if (emoji) emoji.textContent = "🏢";
      if (title) title.textContent = "Кар-р! Врезался в здание…";
    } else {
      if (emoji) emoji.textContent = "🪶";
      if (title) title.textContent = "Кар-р! Не удержался в небе…";
    }
  }

  function ensureFlightHint() {
    const game = S.game;
    const origStart = game.startFlight.bind(game);
    game.startFlight = function startWithHint() {
      origStart();
      game.addTimer(8.2, () => {
        if (game.phase === "flying") {
          game.showHint(
            "Садись на крыши и на дорогу — подлетай и планируй вниз. Берегись машин и стен!",
            10,
          );
        }
      });
    };
  }

  /* ----------------------------------------------------------------- assets -- */

  async function loadAssets() {
    const T = S.T;
    const loader = new T.GLTFLoader();

    // Модели грузим параллельно: дома нужны раньше машин, а тяжёлые
    // автомобильные GLB не должны задерживать застройку берегов.
    const carSpecs = [
      { url: "zhiguli_soviet_cars.glb", kind: "zhiguli", target: 4.5 },
      { url: "zaz-1102.glb", kind: "plain", target: 4.05 },
      { url: "vehicle_zis-101.glb", kind: "plain", target: 5.6 },
      { url: "1965_ford_lotus_cortina_mk1.glb", kind: "plain", target: 4.35 },
      { url: "lada_niva.glb", kind: "plain", target: 4.0, heavy: true },
      {
        url: "kraz_250_cement_carrier.glb",
        kind: "plain",
        target: 7.4,
        heavy: true,
      },
      { url: "1973_amc_gremlin_x.glb", kind: "plain", target: 4.6, heavy: true },
    ];

    const carJobs = carSpecs.map((spec) =>
      loadCarPrefabs(loader, S.packPromise, spec).catch((err) => {
        console.warn("[Москва-Сити] модель авто не загрузилась:", spec.url, err);
        return [];
      }),
    );

    const lowHouseJob = loadPrefab(loader, S.packPromise, {
      url: "low_poly_-_soviet__apartment_building_8k.glb",
      target: 35,
    }).catch((err) => {
      console.warn("[Москва-Сити] модель хрущёвки не загрузилась:", err);
      return null;
    });
    const panelHouseJob = loadPrefab(loader, S.packPromise, {
      url: "soviet_panel_house_ussr.glb",
      target: 48,
    }).catch((err) => {
      console.warn("[Москва-Сити] модель панельного дома не загрузилась:", err);
      return null;
    });

    // --- дома -------------------------------------------------------------
    const [lowHouse, panelHouse] = await Promise.all([
      lowHouseJob,
      panelHouseJob,
    ]);
    if (lowHouse) S.houseTemplates.push(lowHouse);
    if (panelHouse) S.panelTemplate = panelHouse;
    if (!S.houseTemplates.length) {
      S.houseTemplates.push(makeFallbackHouse());
    }
    placeHouses();

    // --- машины -----------------------------------------------------------
    const carResults = await Promise.all(carJobs);
    for (const prefabs of carResults) {
      for (const prefab of prefabs) S.carTemplates.push(prefab);
    }
    if (S.carTemplates.length) assignCarModels();
  }

  async function loadCarPrefabs(loader, packPromise, spec) {
    const gltf = await readModel(loader, packPromise, spec.url);
    const out = [];
    if (spec.kind === "zhiguli") {
      const names = [
        "zhiguli_gray",
        "zhiguli_blue",
        "zhiguli_green",
        "zhiguli_red",
      ];
      for (const name of names) {
        const node = extractNode(gltf.scene, name);
        if (!node) continue;
        const prefab = makePrefab(node, {
          target: spec.target,
          alignZ: true,
        });
        if (prefab) {
          prefab.source = spec.url;
          prefab.heavy = !!spec.heavy;
          out.push(prefab);
        }
      }
    } else {
      const prefab = makePrefab(gltf.scene, {
        target: spec.target,
        alignZ: true,
      });
      if (prefab) {
        prefab.source = spec.url;
        prefab.heavy = !!spec.heavy;
        out.push(prefab);
      }
    }
    return out;
  }

  async function loadPrefab(loader, packPromise, spec) {
    const gltf = await readModel(loader, packPromise, spec.url);
    return makePrefab(gltf.scene, {
      target: spec.target,
      alignZ: true,
    });
  }

  async function readModel(loader, packPromise, name) {
    const pack = await packPromise;
    const data = await pack.read(name);
    return loader.parseAsync(data, "");
  }

  function extractNode(scene, name) {
    const node = scene.getObjectByName(name);
    if (!node) return null;
    scene.updateMatrixWorld(true);
    const clone = node.clone(true);
    clone.applyMatrix4(node.matrixWorld);
    return clone;
  }

  /* Схлопываем статичные меши модели в один меш на материал: у некоторых
     GLB по сотне мелких деталей, и каждый клон дома/машины стоил бы
     отдельного draw call. */
  function mergeStaticMeshes(root) {
    const T = S.T;
    root.updateMatrixWorld(true);
    const invRoot = new T.Matrix4().copy(root.matrixWorld).invert();
    const groups = new Map();

    root.traverse((mesh) => {
      if (!mesh.isMesh || mesh.isSkinnedMesh) return;
      if (!mesh.geometry || !mesh.geometry.attributes.position) return;
      if (!mesh.material || Array.isArray(mesh.material)) return;

      const keys = Object.keys(mesh.geometry.attributes).sort();
      const key = mesh.material.uuid + "|" + keys.join(",");
      let group = groups.get(key);
      if (!group) {
        group = { material: mesh.material, keys, items: [] };
        groups.set(key, group);
      }
      group.items.push({
        geometry: mesh.geometry,
        matrix: new T.Matrix4().copy(invRoot).multiply(mesh.matrixWorld),
      });
    });

    if (!groups.size) return;

    const mergedRoot = new T.Group();
    for (const group of groups.values()) {
      const geometry = mergeGroupGeometry(group);
      if (geometry) mergedRoot.add(new T.Mesh(geometry, group.material));
    }
    if (!mergedRoot.children.length) return;

    while (root.children.length) root.remove(root.children[0]);
    root.add(mergedRoot);
  }

  function mergeGroupGeometry(group) {
    const T = S.T;
    let vertexCount = 0;
    let indexCount = 0;
    const layouts = new Map();

    for (const item of group.items) {
      const pos = item.geometry.attributes.position;
      const count = pos.count;
      vertexCount += count;
      indexCount += item.geometry.index
        ? item.geometry.index.count
        : count;

      for (const key of group.keys) {
        const attr = item.geometry.attributes[key];
        if (!attr) continue;
        let layout = layouts.get(key);
        if (!layout) {
          layout = {
            itemSize: attr.itemSize,
            normalized: !!attr.normalized,
            ArrayType: attr.array.constructor,
          };
          layouts.set(key, layout);
        }
      }
    }

    if (!vertexCount) return null;

    const output = new Map();
    for (const [key, layout] of layouts) {
      output.set(
        key,
        new layout.ArrayType(vertexCount * layout.itemSize),
      );
    }

    const IndexArray = vertexCount > 65535 ? Uint32Array : Uint16Array;
    const indices = new IndexArray(indexCount);
    let vertexOffset = 0;
    let indexOffset = 0;
    const v = new T.Vector3();

    for (const item of group.items) {
      const geometry = item.geometry;
      const pos = geometry.attributes.position;
      const count = pos.count;
      const m = item.matrix.elements;
      const n = normalMatrix(m);
      const index = geometry.index;

      for (const key of group.keys) {
        const attr = geometry.attributes[key];
        const dst = output.get(key);
        const itemSize = layouts.get(key).itemSize;
        let out = vertexOffset * itemSize;

        for (let i = 0; i < count; i++) {
          const x = attr.getX(i);
          const y = attr.getY(i);
          const z = itemSize > 2 ? attr.getZ(i) : 0;

          if (key === "position") {
            dst[out] = m[0] * x + m[4] * y + m[8] * z + m[12];
            dst[out + 1] = m[1] * x + m[5] * y + m[9] * z + m[13];
            dst[out + 2] = m[2] * x + m[6] * y + m[10] * z + m[14];
          } else if (key === "normal" || key === "tangent") {
            v.set(
              n[0] * x + n[1] * y + n[2] * z,
              n[3] * x + n[4] * y + n[5] * z,
              n[6] * x + n[7] * y + n[8] * z,
            );
            if (v.lengthSq() > 1e-12) v.normalize();
            dst[out] = v.x;
            dst[out + 1] = v.y;
            dst[out + 2] = v.z;
            if (itemSize > 3) dst[out + 3] = attr.getW(i);
          } else if (itemSize > 3) {
            dst[out] = x;
            dst[out + 1] = y;
            dst[out + 2] = z;
            dst[out + 3] = attr.getW(i);
          } else {
            dst[out] = x;
            dst[out + 1] = y;
            if (itemSize > 2) dst[out + 2] = z;
          }
          out += itemSize;
        }
      }

      if (index) {
        for (let i = 0; i < index.count; i++) {
          indices[indexOffset++] = index.getX(i) + vertexOffset;
        }
      } else {
        for (let i = 0; i < count; i++) {
          indices[indexOffset++] = vertexOffset + i;
        }
      }
      vertexOffset += count;
    }

    const merged = new S.BufferGeometry();
    for (const [key, layout] of layouts) {
      merged.setAttribute(
        key,
        new S.BufferAttribute(
          output.get(key),
          layout.itemSize,
          layout.normalized,
        ),
      );
    }
    merged.setIndex(new S.BufferAttribute(indices, 1));
    merged.computeBoundingBox();
    merged.computeBoundingSphere();
    return merged;
  }

  function normalMatrix(m) {
    const a00 = m[0], a01 = m[4], a02 = m[8];
    const a10 = m[1], a11 = m[5], a12 = m[9];
    const a20 = m[2], a21 = m[6], a22 = m[10];

    const c00 = a11 * a22 - a12 * a21;
    const c01 = a12 * a20 - a10 * a22;
    const c02 = a10 * a21 - a11 * a20;
    const c10 = a02 * a21 - a01 * a22;
    const c11 = a00 * a22 - a02 * a20;
    const c12 = a01 * a20 - a00 * a21;
    const c20 = a01 * a12 - a02 * a11;
    const c21 = a02 * a10 - a00 * a12;
    const c22 = a00 * a11 - a01 * a10;

    const det = a00 * c00 + a01 * c01 + a02 * c02;
    if (Math.abs(det) < 1e-9) {
      return [a00, a01, a02, a10, a11, a12, a20, a21, a22];
    }
    const inv = 1 / det;
    return [
      c00 * inv, c01 * inv, c02 * inv,
      c10 * inv, c11 * inv, c12 * inv,
      c20 * inv, c21 * inv, c22 * inv,
    ];
  }

  function makePrefab(obj, opts) {
    const T = S.T;
    const align = new T.Group();
    align.add(obj);
    align.updateMatrixWorld(true);

    let box = new T.Box3().setFromObject(align);
    let size = box.getSize(new T.Vector3());
    size.x = Math.max(size.x, 0.001);
    size.y = Math.max(size.y, 0.001);
    size.z = Math.max(size.z, 0.001);

    if (opts && opts.alignZ && size.x > size.z * 1.08) {
      align.rotation.y = Math.PI / 2;
      align.updateMatrixWorld(true);
      box = new T.Box3().setFromObject(align);
      size = box.getSize(new T.Vector3());
    }

    const target = (opts && opts.target) || 10;
    const scale = target / Math.max(size.x, size.z, 0.001);
    const center = box.getCenter(new T.Vector3());

    const shift = new T.Group();
    shift.position.set(-center.x, -box.min.y, -center.z);
    shift.add(align);

    const wrapper = new T.Group();
    wrapper.add(shift);
    wrapper.scale.setScalar(scale);
    wrapper.updateMatrixWorld(true);
    mergeStaticMeshes(wrapper);

    const finalBox = new T.Box3().setFromObject(wrapper);
    const finalSize = finalBox.getSize(new T.Vector3());
    return {
      prefab: wrapper,
      size: finalSize,
      length: Math.max(finalSize.x, finalSize.z),
      height: finalSize.y,
    };
  }

  function assignCarModels() {
    const T = S.T;
    const light = S.carTemplates.filter((t) => !t.heavy);
    const heavy = S.carTemplates.filter((t) => t.heavy);
    const fallback = light.length ? light : S.carTemplates;

    for (let index = 0; index < S.cars.length; index++) {
      const car = S.cars[index];
      // Тяжёлые модели показываем по разу, остальной поток — из лёгких.
      const tmpl =
        index < heavy.length
          ? heavy[index]
          : fallback[Math.floor(Math.random() * fallback.length)];
      const visual = tmpl.prefab.clone(true);
      if (car.visual) car.root.remove(car.visual);
      car.visual = visual;
      car.root.add(visual);
      car.height = tmpl.height;
      car.length = tmpl.length;
      car.radius = Math.max(2.2, Math.min(4.2, tmpl.length * 0.38));

      // Фары и стопы — чтобы машины читались в ночном городе.
      const headMat = new T.MeshStandardMaterial({
        color: 0xfff2c8,
        emissive: 0xffd275,
        emissiveIntensity: 2.2,
        roughness: 0.3,
      });
      const tailMat = new T.MeshStandardMaterial({
        color: 0x5d0b0b,
        emissive: 0xff2020,
        emissiveIntensity: 1.6,
        roughness: 0.4,
      });
      const half = tmpl.length / 2;
      for (const x of [-0.68, 0.68]) {
        const hl = new T.Mesh(S.boxGeo, headMat);
        hl.scale.set(0.3, 0.15, 0.08);
        hl.position.set(x, 0.72, half + 0.05);
        car.root.add(hl);
        const tl = new T.Mesh(S.boxGeo, tailMat);
        tl.scale.set(0.26, 0.13, 0.06);
        tl.position.set(x, 0.72, -half - 0.05);
        car.root.add(tl);
      }
    }
  }

  function makeFallbackHouse() {
    const T = S.T;
    const g = new T.Group();
    const wallMat = new T.MeshStandardMaterial({
      color: 0x343b43,
      roughness: 0.88,
      metalness: 0.04,
    });
    const winMat = new T.MeshStandardMaterial({
      color: 0x10151c,
      emissive: 0xffc46a,
      emissiveIntensity: 0.85,
      roughness: 0.5,
    });

    const main = new T.Mesh(S.boxGeo, wallMat);
    main.scale.set(18, 16, 30);
    main.position.y = 8;
    g.add(main);

    const roof = new T.Mesh(S.boxGeo, wallMat);
    roof.scale.set(19, 1, 31);
    roof.position.y = 16.5;
    g.add(roof);

    for (let i = 0; i < 14; i++) {
      const w = new T.Mesh(S.boxGeo, winMat);
      w.scale.set(1.5, 1.2, 0.08);
      w.position.set(-7.5 + (i % 7) * 2.5, 5 + Math.floor(i / 7) * 6.5, 15.05);
      g.add(w);
    }
    return {
      prefab: g,
      size: new T.Vector3(19, 17, 31),
      length: 31,
      height: 17,
    };
  }

  function placeHouses() {
    if (!S.houseTemplates.length) return;
    const T = S.T;
    const low = S.houseTemplates[0];
    let panelUsed = false;

    for (let gx = -6; gx <= 6; gx++) {
      for (let gz = -6; gz <= 6; gz++) {
        if (S.houses.length >= MAX_HOUSES) break;
        if (Math.random() < 0.33) continue;

        const sx = Math.random() < 0.5 ? -1 : 1;
        const sz = Math.random() < 0.5 ? -1 : 1;
        const x = gx * ROAD_STEP + sx * rand(20, 29);
        const z = gz * ROAD_STEP + sz * rand(20, 29);
        const r = Math.hypot(x, z);
        if (r < 193 || r > 338) continue;
        if (isRoad(x, z)) continue;

        let tooClose = false;
        for (const h of S.houses) {
          if (Math.hypot(h.x - x, h.z - z) < 27) {
            tooClose = true;
            break;
          }
        }
        if (tooClose) continue;

        const usePanel = S.panelTemplate && !panelUsed && S.houses.length > 18;
        const tmpl = usePanel ? S.panelTemplate : low;
        if (usePanel) panelUsed = true;

        const obj = tmpl.prefab.clone(true);
        const yaw = (Math.random() < 0.5 ? 0 : Math.PI / 2) + rand(-0.16, 0.16);
        obj.position.set(x, 0, z);
        obj.rotation.y = yaw;
        S.group.add(obj);

        S.houses.push({
          x,
          z,
          yaw,
          cos: Math.cos(yaw),
          sin: Math.sin(yaw),
          hx: Math.max(4, tmpl.size.x / 2 - 0.5),
          hz: Math.max(4, tmpl.size.z / 2 - 0.5),
          top: tmpl.size.y,
          obj,
        });
      }
    }
  }

  boot();
})();
