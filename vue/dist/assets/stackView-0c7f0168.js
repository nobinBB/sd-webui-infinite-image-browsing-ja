import{d as fe,u as We,g as ce,_ as ct,c as i,a as Ne,P as we,D as Be,f as dt,w as Nt,b as Bt,e as Et,h as tt,M as Ee,i as Tt,j as zt,F as Te,A as pt,k as De,l as jt,r as ue,m as ze,n as at,o as Vt,s as Fe,p as z,q as nt,t as Ut,v as Wt,x as Ht,y as ie,z as N,B as qt,C as Gt,E as Ce,G as st,H as Kt,I as Qt,J as je,K as Jt,L as Xt,N as Oe,O as Le,Q as Yt,R as ft,S as M,T,U as h,V as ee,W as w,X as Ve,Y as Q,Z as mt,$ as Zt,a0 as G,a1 as g,a2 as e,a3 as y,a4 as K,a5 as ea,a6 as ot,a7 as ta,a8 as aa,a9 as na,aa as sa,ab as oa,ac as la,ad as ra,ae as lt,af as ia,ag as ua,ah as ca,ai as da,aj as pa}from"./index-84146271.js";import{S as de,s as fa}from"./index-06ff7c9e.js";import{F as J,_ as vt,a as ma}from"./numInput-be7f5e72.js";import"./index-07031e6f.js";/* empty css              */import{_ as va}from"./index-6bd9469b.js";import{D as ht}from"./index-f4853617.js";/* empty css              */import"./index-6e98e1b1.js";import{u as gt,N as ha,g as I,s as kt,a as ga,b as ka,c as ya,d as ba,F as Ca}from"./FileItem-18fe18aa.js";import{u as wa,a as _a,b as Sa,c as Ia,d as Pa,M as xa,L as Aa,R as $a,f as Ra}from"./MultiSelectKeep-18d2c200.js";import{g as be,o as Ma}from"./functionalCallableComp-a2e0dac8.js";import"./_isIterateeCall-2a812b0b.js";import"./shortcut-06a364c2.js";import"./Checkbox-788362fa.js";var Da=["class","style"],Fa=function(){return{prefixCls:String,href:String,separator:we.any,overlay:we.any,onClick:Function}};const pe=fe({compatConfig:{MODE:3},name:"ABreadcrumbItem",inheritAttrs:!1,__ANT_BREADCRUMB_ITEM:!0,props:Fa(),slots:["separator","overlay"],setup:function(t,l){var o=l.slots,p=l.attrs,c=We("breadcrumb",t),b=c.prefixCls,A=function(f,C){var m=ce(o,t,"overlay");return m?i(ht,{overlay:m,placement:"bottom"},{default:function(){return[i("span",{class:"".concat(C,"-overlay-link")},[f,i(Be,null,null)])]}}):f};return function(){var D,f=(D=ce(o,t,"separator"))!==null&&D!==void 0?D:"/",C=ce(o,t),m=p.class,$=p.style,P=ct(p,Da),_;return t.href!==void 0?_=i("a",Ne({class:"".concat(b.value,"-link"),onClick:t.onClick},P),[C]):_=i("span",Ne({class:"".concat(b.value,"-link"),onClick:t.onClick},P),[C]),_=A(_,b.value),C?i("span",{class:m,style:$},[_,f&&i("span",{class:"".concat(b.value,"-separator")},[f])]):null}}});var Oa=function(){return{prefixCls:String,routes:{type:Array},params:we.any,separator:we.any,itemRender:{type:Function}}};function La(s,t){if(!s.breadcrumbName)return null;var l=Object.keys(t).join("|"),o=s.breadcrumbName.replace(new RegExp(":(".concat(l,")"),"g"),function(p,c){return t[c]||p});return o}function rt(s){var t=s.route,l=s.params,o=s.routes,p=s.paths,c=o.indexOf(t)===o.length-1,b=La(t,l);return c?i("span",null,[b]):i("a",{href:"#/".concat(p.join("/"))},[b])}const se=fe({compatConfig:{MODE:3},name:"ABreadcrumb",props:Oa(),slots:["separator","itemRender"],setup:function(t,l){var o=l.slots,p=We("breadcrumb",t),c=p.prefixCls,b=p.direction,A=function(m,$){return m=(m||"").replace(/^\//,""),Object.keys($).forEach(function(P){m=m.replace(":".concat(P),$[P])}),m},D=function(m,$,P){var _=Tt(m),L=A($||"",P);return L&&_.push(L),_},f=function(m){var $=m.routes,P=$===void 0?[]:$,_=m.params,L=_===void 0?{}:_,j=m.separator,B=m.itemRender,O=B===void 0?rt:B,V=[];return P.map(function(x){var E=A(x.path,L);E&&V.push(E);var X=[].concat(V),Y=null;return x.children&&x.children.length&&(Y=i(Ee,null,{default:function(){return[x.children.map(function(W){return i(Ee.Item,{key:W.path||W.breadcrumbName},{default:function(){return[O({route:W,params:L,routes:P,paths:D(X,W.path,L)})]}})})]}})),i(pe,{overlay:Y,separator:j,key:E||x.breadcrumbName},{default:function(){return[O({route:x,params:L,routes:P,paths:X})]}})})};return function(){var C,m,$,P=t.routes,_=t.params,L=_===void 0?{}:_,j=dt(ce(o,t)),B=(C=ce(o,t,"separator"))!==null&&C!==void 0?C:"/",O=t.itemRender||o.itemRender||rt;P&&P.length>0?$=f({routes:P,params:L,separator:B,itemRender:O}):j.length&&($=j.map(function(x,E){return Nt(Bt(x.type)==="object"&&(x.type.__ANT_BREADCRUMB_ITEM||x.type.__ANT_BREADCRUMB_SEPARATOR),"Breadcrumb","Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children"),Et(x,{separator:B,key:E})}));var V=(m={},tt(m,c.value,!0),tt(m,"".concat(c.value,"-rtl"),b.value==="rtl"),m);return i("div",{class:V},[$])}}});var Na=["separator","class"],Ba=function(){return{prefixCls:String}};const Ue=fe({compatConfig:{MODE:3},name:"ABreadcrumbSeparator",__ANT_BREADCRUMB_SEPARATOR:!0,inheritAttrs:!1,props:Ba(),setup:function(t,l){var o=l.slots,p=l.attrs,c=We("breadcrumb",t),b=c.prefixCls;return function(){var A;p.separator;var D=p.class,f=ct(p,Na),C=dt((A=o.default)===null||A===void 0?void 0:A.call(o));return i("span",Ne({class:["".concat(b.value,"-separator"),D]},f),[C.length>0?C:"/"])}}});se.Item=pe;se.Separator=Ue;se.install=function(s){return s.component(se.name,se),s.component(pe.name,pe),s.component(Ue.name,Ue),s};J.useInjectFormItemContext=zt;J.ItemRest=Te;J.install=function(s){return s.component(J.name,J),s.component(J.Item.name,J.Item),s.component(Te.name,Te),s};de.setDefaultIndicator=fa;de.install=function(s){return s.component(de.name,de),s};var Ea={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"arrow-left",theme:"outlined"};const Ta=Ea;function it(s){for(var t=1;t<arguments.length;t++){var l=arguments[t]!=null?Object(arguments[t]):{},o=Object.keys(l);typeof Object.getOwnPropertySymbols=="function"&&(o=o.concat(Object.getOwnPropertySymbols(l).filter(function(p){return Object.getOwnPropertyDescriptor(l,p).enumerable}))),o.forEach(function(p){za(s,p,l[p])})}return s}function za(s,t,l){return t in s?Object.defineProperty(s,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):s[t]=l,s}var He=function(t,l){var o=it({},t,l.attrs);return i(pt,it({},o,{icon:Ta}),null)};He.displayName="ArrowLeftOutlined";He.inheritAttrs=!1;const ja=He;class _e{static run(t){const l=Object.assign({immediately:!0,id:-1,isFinished:!1,errorHandleMethod:"ignore"},t);let o,p;const c=new Promise((f,C)=>{p=f,o=C}),b=()=>{l.isFinished=!0,clearTimeout(l.id)},A=()=>De(this,void 0,void 0,function*(){try{l.res=yield l.action(),l.validator&&l.validator(l.res)&&(p(l.res),b())}catch(f){_e.silent||console.error(f),l.errorHandleMethod==="stop"&&(b(),o(f))}}),D=()=>{l.isFinished||(l.id=setTimeout(()=>De(this,void 0,void 0,function*(){yield A(),D()}),l.pollInterval))};return setTimeout(()=>De(this,void 0,void 0,function*(){l.immediately&&(yield A()),D()}),0),jt({task:l,clearTask:b,completedTask:c})}}_e.silent=!1;var Va={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 64H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm-600 72h560v208H232V136zm560 480H232V408h560v208zm0 272H232V680h560v208zM304 240a40 40 0 1080 0 40 40 0 10-80 0zm0 272a40 40 0 1080 0 40 40 0 10-80 0zm0 272a40 40 0 1080 0 40 40 0 10-80 0z"}}]},name:"database",theme:"outlined"};const Ua=Va;function ut(s){for(var t=1;t<arguments.length;t++){var l=arguments[t]!=null?Object(arguments[t]):{},o=Object.keys(l);typeof Object.getOwnPropertySymbols=="function"&&(o=o.concat(Object.getOwnPropertySymbols(l).filter(function(p){return Object.getOwnPropertyDescriptor(l,p).enumerable}))),o.forEach(function(p){Wa(s,p,l[p])})}return s}function Wa(s,t,l){return t in s?Object.defineProperty(s,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):s[t]=l,s}var qe=function(t,l){var o=ut({},t,l.attrs);return i(pt,ut({},o,{icon:Ua}),null)};qe.displayName="DatabaseOutlined";qe.inheritAttrs=!1;const Ha=qe;function qa(){const s=ue(),{scroller:t,stackViewEl:l,stack:o,currPage:p,currLocation:c,useEventListen:b,eventEmitter:A,getPane:D,props:f,deletedFiles:C,walker:m,sortedFiles:$}=gt().toRefs();ze(()=>o.value.length,at((n,u)=>{var d;n!==u&&((d=t.value)==null||d.scrollToItem(0))},300)),Vt(async()=>{var n;if(!o.value.length)if(f.value.mode==="scanned-fixed"||f.value.mode==="walk")o.value=[{files:[],curr:f.value.path??""}];else{const u=await be("/");o.value.push({files:u.files,curr:"/"})}s.value=new ha,s.value.configure({parent:l.value}),f.value.path&&f.value.path!=="/"?await O(f.value.path):(n=I.conf)!=null&&n.home&&O(I.conf.home)}),ze(c,at(n=>{const u=D.value();if(!u)return;u.path=n;const d=Fe(n).pop()??"",k=(()=>{const R={walk:"Walk","scanned-fixed":"Fixed",scanned:null}[f.value.mode??"scanned"],F=q=>R?`${R}: ${q}`:q,U=I.getShortPath(n);return F(U.length>24&&d?d:U)})();u.name=z("div",{style:"display:flex;align-items:center"},[z(Ha),z("span",{class:"line-clamp-1",style:"max-width: 256px"},k)]),u.nameFallbackStr=k,I.recent=I.recent.filter(R=>R.key!==u.key),I.recent.unshift({path:n,key:u.key,mode:f.value.mode}),I.recent.length>20&&(I.recent=I.recent.slice(0,20))},300));const P=()=>je(c.value),_=async n=>{var u,d;if(n.type==="dir")try{(u=s.value)==null||u.start();const{files:S}=await be(n.fullpath);f.value.mode=="scanned-fixed"?o.value=[{files:S,curr:n.fullpath}]:o.value.push({files:S,curr:n.name})}finally{(d=s.value)==null||d.done()}},L=n=>{if(f.value.mode!="walk")for(;n<o.value.length-1;)o.value.pop()},j=()=>{O(Jt(c.value))},B=(n,u)=>(Xt(I.conf,"global.conf load failed"),I.conf.is_win?n.toLowerCase()==u.toLowerCase():n==u),O=async n=>{f.value.mode==="walk"?D.value().path=n:f.value.mode==="scanned-fixed"?await _({fullpath:n,name:n,type:"dir"}):await V(n),nt(500).then(()=>A.value.emit("viewableAreaFilesChange"))},V=async n=>{var d,S;const u=o.value.slice();try{Ut(n)||(n=Wt(((d=I.conf)==null?void 0:d.sd_cwd)??"/",n));const k=Fe(n),R=o.value.map(F=>F.curr);for(R.shift();R[0]&&k[0]&&B(R[0],k[0]);)R.shift(),k.shift();for(let F=0;F<R.length;F++)o.value.pop();if(!k.length)return x();for(const F of k){const U=(S=p.value)==null?void 0:S.files.find(q=>B(q.name,F));if(!U)throw console.error({frags:k,frag:F,stack:Ht(o.value)}),new Error(`${F} not found`);await _(U)}}catch(k){throw ie.error(N("moveFailedCheckPath")+(k instanceof Error?k.message:"")),console.error(n,Fe(n),p.value),o.value=u,k}},x=qt(async()=>{var n,u,d;try{if((n=s.value)==null||n.start(),m.value)await m.value.reset(),A.value.emit("loadNextDir");else{const{files:S}=await be(c.value);Oe(o.value).files=S}C.value.clear(),(u=t.value)==null||u.scrollToItem(0),ie.success(N("refreshCompleted"))}finally{(d=s.value)==null||d.done()}}),E=async()=>{var n,u,d;if(f.value.mode==="walk"&&m.value){const S=((n=t.value)==null?void 0:n.$_endIndex)??64;if(I.autoRefreshWalkMode&&S<I.autoRefreshWalkModePosLimit&&await m.value.isExpired()){const k=ue(!1),R=()=>{k.value=!0,I.autoRefreshWalkMode=!1,F(),ie.success(N("walkModeAutoRefreshDisabled"))},F=ie.loading(z("span",{},[N("autoUpdate"),z("span",{onClick:R,style:{paddingLeft:"16px",cursor:"pointer",color:"var(--primary-color)"}},N("disable"))]),0);try{const U=new Promise(q=>{m.value.seamlessRefresh(S,k).then(xe=>{k.value||(m.value=xe,A.value.emit("loadNextDir"),q())})});await Promise.all([U,nt(1500)])}finally{F()}}return}try{if(!I.autoRefreshNormalFixedMode)return;(u=s.value)==null||u.start();const{files:S}=await be(c.value);Oe(o.value).files.map(R=>R.date).join()!==S.map(R=>R.date).join()&&(Oe(o.value).files=S,ie.success(N("autoUpdate")))}finally{(d=s.value)==null||d.done()}};Gt("returnToIIB",E),b.value("refresh",x);const X=n=>{O(n)},Y=Ce(()=>I.quickMovePaths.map(n=>({...n,path:st(n.dir)}))),te=Ce(()=>{const n=st(c.value);return Y.value.find(d=>d.path===n)}),W=async()=>{const n=I.tabList[f.value.tabIdx],u={type:"empty",name:N("emptyStartPage"),key:Date.now()+Le(),popAddPathModal:{path:c.value,type:"scanned"}};n.panes.push(u),n.key=u.key},H=ue(!1),ae=ue(c.value),Se=()=>{H.value=!0,ae.value=c.value},me=async()=>{await O(ae.value),H.value=!1};wa("click",n=>{var u,d,S;(S=(d=(u=n.target)==null?void 0:u.className)==null?void 0:d.includes)!=null&&S.call(d,"ant-input")||(H.value=!1)});const Ie=()=>{const n=parent.location,u=n.href.substring(0,n.href.length-n.search.length),d=new URLSearchParams(n.search);d.set("action","open"),d.set("path",c.value),d.set("mode",f.value.mode??"scanned");const S=`${u}?${d.toString()}`;je(S,N("copyLocationUrlSuccessMsg"))},Pe=(n="tag-search")=>{const u=I.tabList[f.value.tabIdx],d={type:n,key:Le(),searchScope:c.value,name:N(n==="tag-search"?"imgSearch":"fuzzy-search")};u.panes.push(d),u.key=d.key},oe=()=>A.value.emit("selectAll"),Z=async()=>{await Ma(c.value),await x()},le=()=>{const n=c.value;kt.set(n,o.value);const u=I.tabList[f.value.tabIdx],d={type:"local",key:Le(),path:n,name:N("local"),stackKey:n,mode:"walk"};u.panes.push(d),u.key=d.key},ve=Ce(()=>!m.value&&$.value.some(n=>n.type==="dir"));return{locInputValue:ae,isLocationEditing:H,onLocEditEnter:me,onEditBtnClick:Se,addToSearchScanPathAndQuickMove:W,searchPathInfo:te,refresh:x,copyLocation:P,back:L,openNext:_,currPage:p,currLocation:c,stack:o,scroller:t,share:Ie,selectAll:oe,quickMoveTo:X,onCreateFloderBtnClick:Z,onWalkBtnClick:le,showWalkButton:ve,searchInCurrentDir:Pe,backToLastUseTo:j,...Ga(E)}}const Ga=s=>{const t=ue([]),l=Ce(()=>t.value.length>0);Kt(()=>{t.value.forEach(c=>c())});const o=Qt(Yt+"poll-interval",3);return{onPollRefreshClick:()=>{if(t.value.length){t.value.forEach(c=>c()),t.value=[];return}ft.confirm({title:N("pollRefresh"),width:640,content:()=>z("div",{},[z("p",{class:"uni-desc primary-bg"},N("pollRefreshTip")),z("div",{style:{display:"flex",alignItems:"center",gap:"4px"}},[z("span",{},N("pollInterval")+"(s): "),z(vt,{min:1,max:60*10,modelValue:o.value,"onUpdate:modelValue":c=>{o.value=c}})])]),onOk:()=>{const{clearTask:c}=_e.run({pollInterval:o.value*1e3,action:s});t.value.push(c)}})},polling:l}};const Ka={class:"base-info"},Qa=fe({__name:"BaseFileListInfo",props:{fileNum:{},selectedFileNum:{}},setup(s){return(t,l)=>(M(),T("div",Ka,[h("span",null,[ee(w(t.$t("items",[t.fileNum]))+" ",1),t.selectedFileNum?(M(),T(Ve,{key:0},[ee(", "+w(t.$t("selectedItems",[t.selectedFileNum])),1)],64)):Q("",!0)])]))}});const Ja=mt(Qa,[["__scopeId","data-v-afd25667"]]),Xa={class:"hint"},Ya={class:"location-bar"},Za=["onClick"],en={key:3,class:"location-act"},tn={class:"actions"},an=["onClick"],nn={style:{width:"512px",background:"var(--zp-primary-background)",padding:"16px","border-radius":"4px","box-shadow":"0 0 4px var(--zp-secondary-background)",border:"1px solid var(--zp-secondary-background)"}},sn={style:{padding:"4px"}},on={style:{padding:"4px"}},ln={style:{padding:"4px"}},rn={key:0,class:"view"},un={style:{padding:"16px 0 512px"}},cn={key:0,class:"preview-switch"},dn=fe({__name:"stackView",props:{tabIdx:{},paneIdx:{},path:{},mode:{},stackKey:{}},setup(s){const t=s,l=Zt(),{scroller:o,stackViewEl:p,props:c,multiSelectedIdxs:b,spinning:A}=gt().toRefs(),{currLocation:D,currPage:f,refresh:C,copyLocation:m,back:$,openNext:P,stack:_,quickMoveTo:L,addToSearchScanPathAndQuickMove:j,locInputValue:B,isLocationEditing:O,onLocEditEnter:V,onEditBtnClick:x,share:E,selectAll:X,onCreateFloderBtnClick:Y,onWalkBtnClick:te,showWalkButton:W,searchInCurrentDir:H,backToLastUseTo:ae,polling:Se,onPollRefreshClick:me}=qa(),{gridItems:Ie,sortMethodConv:Pe,moreActionsDropdownShow:oe,sortedFiles:Z,sortMethod:le,itemSize:ve,loadNextDir:n,loadNextDirLoading:u,canLoadNext:d,onScroll:S,cellWidth:k,dirCoverCache:R}=ga(),{onDrop:F,onFileDragStart:U,onFileDragEnd:q}=_a(),{onFileItemClick:xe,onContextMenuClick:Ge,showGenInfo:he,imageGenInfo:Ke,q:yt}=Sa({openNext:P}),{previewIdx:ge,onPreviewVisibleChange:bt,previewing:Ae,previewImgMove:Qe,canPreview:Je}=Ia(),{showMenuIdx:$e}=ka(),{onClearAllSelected:Ct,onReverseSelect:wt,onSelectAll:_t}=ya(),{getGenDiff:St,changeIndchecked:re,seedChangeChecked:ke,getRawGenParams:It,getGenDiffWatchDep:Pt}=Pa();return ze(()=>t,()=>{c.value=t;const v=kt.get(t.stackKey??"");v&&(_.value=v.slice())},{immediate:!0}),(v,a)=>{const xt=ia,At=ua,$t=ft,Rt=ca,Mt=pe,Dt=se,Xe=da,Re=pa,Ye=Ee,Me=ht,Ft=vt,ye=ma,Ze=va,Ot=J,Lt=de;return M(),G(Lt,{spinning:e(A),size:"large"},{default:g(()=>[i(xa,{show:e(l).keepMultiSelect||!!e(b).length,onClearAllSelected:e(Ct),onSelectAll:e(_t),onReverseSelect:e(wt)},null,8,["show","onClearAllSelected","onSelectAll","onReverseSelect"]),i(xt,{style:{display:"none"}}),h("div",{ref_key:"stackViewEl",ref:p,onDragover:a[31]||(a[31]=y(()=>{},["prevent"])),onDrop:a[32]||(a[32]=y(r=>e(F)(r),["prevent"])),class:"container"},[i($t,{visible:e(he),"onUpdate:visible":a[1]||(a[1]=r=>K(he)?he.value=r:null),width:"70vw","mask-closable":"",onOk:a[2]||(a[2]=r=>he.value=!1)},{cancelText:g(()=>[]),default:g(()=>[i(At,{active:"",loading:!e(yt).isIdle},{default:g(()=>[h("div",{style:{width:"100%","word-break":"break-all","white-space":"pre-line","max-height":"70vh",overflow:"auto","z-index":"9999"},onDblclick:a[0]||(a[0]=r=>e(je)(e(Ke)))},[h("div",Xa,w(v.$t("doubleClickToCopy")),1),ee(" "+w(e(Ke)),1)],32)]),_:1},8,["loading"])]),_:1},8,["visible"]),h("div",Ya,[h("div",{class:"breadcrumb",style:ea({flex:e(O)?1:""})},[e(O)?(M(),G(Rt,{key:0,style:{flex:"1"},value:e(B),"onUpdate:value":a[3]||(a[3]=r=>K(B)?B.value=r:null),onClick:a[4]||(a[4]=y(()=>{},["stop"])),onKeydown:a[5]||(a[5]=y(()=>{},["stop"])),onPressEnter:e(V),"allow-clear":""},null,8,["value","onPressEnter"])):(M(),G(Dt,{key:1,style:{flex:"1"}},{default:g(()=>[(M(!0),T(Ve,null,ot(e(_),(r,ne)=>(M(),G(Mt,{key:ne},{default:g(()=>[h("a",{onClick:y(et=>e($)(ne),["prevent"])},w(r.curr==="/"?v.$t("root"):r.curr.replace(/:\/$/,v.$t("drive"))),9,Za)]),_:2},1024))),128))]),_:1})),e(O)?(M(),G(Xe,{key:2,size:"small",onClick:e(V),type:"primary"},{default:g(()=>[ee(w(v.$t("go")),1)]),_:1},8,["onClick"])):(M(),T("div",en,[v.mode==="scanned-fixed"?(M(),T("a",{key:0,onClick:a[6]||(a[6]=y((...r)=>e(ae)&&e(ae)(...r),["prevent"])),style:{margin:"0 8px 16px 0"}},[i(e(ja))])):Q("",!0),h("a",{onClick:a[7]||(a[7]=y((...r)=>e(m)&&e(m)(...r),["prevent"])),class:"copy"},w(v.$t("copy")),1),h("a",{onClick:a[8]||(a[8]=y((...r)=>e(x)&&e(x)(...r),["prevent","stop"]))},w(v.$t("edit")),1)]))],4),h("div",tn,[h("a",{class:"opt",onClick:a[9]||(a[9]=y((...r)=>e(C)&&e(C)(...r),["prevent"]))},w(v.$t("refresh")),1),h("a",{class:"opt",onClick:a[10]||(a[10]=y((...r)=>e(me)&&e(me)(...r),["prevent"]))},w(e(Se)?v.$t("stopPollRefresh"):v.$t("pollRefresh")),1),i(Me,null,{overlay:g(()=>[i(Ye,null,{default:g(()=>[i(Re,{key:"tag-search"},{default:g(()=>[h("a",{onClick:a[12]||(a[12]=y(r=>e(H)("tag-search"),["prevent"]))},w(v.$t("imgSearch")),1)]),_:1}),i(Re,{key:"tag-search"},{default:g(()=>[h("a",{onClick:a[13]||(a[13]=y(r=>e(H)("fuzzy-search"),["prevent"]))},w(v.$t("fuzzy-search")),1)]),_:1})]),_:1})]),default:g(()=>[h("a",{class:"opt",onClick:a[11]||(a[11]=y(()=>{},["prevent"]))},[ee(w(v.$t("search"))+" ",1),i(e(Be))])]),_:1}),e(W)?(M(),T("a",{key:0,class:"opt",onClick:a[14]||(a[14]=y((...r)=>e(te)&&e(te)(...r),["prevent"]))}," Walk ")):Q("",!0),h("a",{class:"opt",onClick:a[15]||(a[15]=y((...r)=>e(X)&&e(X)(...r),["prevent","stop"]))},w(v.$t("selectAll")),1),e(ta)?Q("",!0):(M(),T("a",{key:1,class:"opt",onClick:a[16]||(a[16]=y((...r)=>e(E)&&e(E)(...r),["prevent"]))},w(v.$t("share")),1)),i(Me,null,{overlay:g(()=>[i(Ye,null,{default:g(()=>[(M(!0),T(Ve,null,ot(e(l).quickMovePaths,r=>(M(),G(Re,{key:r.dir},{default:g(()=>[h("a",{onClick:y(ne=>e(L)(r.dir),["prevent"])},w(r.zh),9,an)]),_:2},1024))),128))]),_:1})]),default:g(()=>[h("a",{class:"opt",onClick:a[17]||(a[17]=y(()=>{},["prevent"]))},[ee(w(v.$t("quickMove"))+" ",1),i(e(Be))])]),_:1}),i(Me,{trigger:["click"],visible:e(oe),"onUpdate:visible":a[27]||(a[27]=r=>K(oe)?oe.value=r:null),placement:"bottomLeft",getPopupContainer:r=>r.parentNode},{overlay:g(()=>[h("div",nn,[i(Ot,aa(na({labelCol:{span:10},wrapperCol:{span:14}})),{default:g(()=>[i(ye,{label:v.$t("gridCellWidth")},{default:g(()=>[i(Ft,{modelValue:e(k),"onUpdate:modelValue":a[19]||(a[19]=r=>K(k)?k.value=r:null),max:1024,min:64,step:16},null,8,["modelValue"])]),_:1},8,["label"]),i(ye,{label:v.$t("sortingMethod")},{default:g(()=>[i(e(sa),{value:e(le),"onUpdate:value":a[20]||(a[20]=r=>K(le)?le.value=r:null),onClick:a[21]||(a[21]=y(()=>{},["stop"])),conv:e(Pe),options:e(oa)},null,8,["value","conv","options"])]),_:1},8,["label"]),i(ye,{label:v.$t("showChangeIndicators")},{default:g(()=>[i(Ze,{checked:e(re),"onUpdate:checked":a[22]||(a[22]=r=>K(re)?re.value=r:null),onClick:e(It)},null,8,["checked","onClick"])]),_:1},8,["label"]),i(ye,{label:v.$t("seedAsChange")},{default:g(()=>[i(Ze,{checked:e(ke),"onUpdate:checked":a[23]||(a[23]=r=>K(ke)?ke.value=r:null),disabled:!e(re)},null,8,["checked","disabled"])]),_:1},8,["label"]),h("div",sn,[h("a",{onClick:a[24]||(a[24]=y((...r)=>e(j)&&e(j)(...r),["prevent"]))},w(v.$t("addToSearchScanPathAndQuickMove")),1)]),h("div",on,[h("a",{onClick:a[25]||(a[25]=y(r=>e(la)(e(D)+"/"),["prevent"]))},w(v.$t("openWithLocalFileBrowser")),1)]),h("div",ln,[h("a",{onClick:a[26]||(a[26]=y((...r)=>e(Y)&&e(Y)(...r),["prevent"]))},w(v.$t("createFolder")),1)])]),_:1},16)])]),default:g(()=>[h("a",{class:"opt",onClick:a[18]||(a[18]=y(()=>{},["prevent"]))},w(v.$t("more")),1)]),_:1},8,["visible","getPopupContainer"])])]),e(f)?(M(),T("div",rn,[i(e(ba),{class:"file-list",items:e(Z),ref_key:"scroller",ref:o,onScroll:e(S),"item-size":e(ve).first,"key-field":"fullpath","item-secondary-size":e(ve).second,gridItems:e(Ie)},{default:g(({item:r,index:ne})=>[i(Ca,{idx:parseInt(ne),file:r,"full-screen-preview-image-url":e(Z)[e(ge)]?e(ra)(e(Z)[e(ge)]):"","show-menu-idx":e($e),"onUpdate:showMenuIdx":a[28]||(a[28]=et=>K($e)?$e.value=et:null),selected:e(b).includes(ne),"cell-width":e(k),onFileItemClick:e(xe),onDragstart:e(U),onDragend:e(q),onPreviewVisibleChange:e(bt),onContextMenuClick:e(Ge),"is-selected-mutil-files":e(b).length>1,"enable-change-indicator":e(re),"seed-change-checked":e(ke),"get-gen-diff":e(St),"get-gen-diff-watch-dep":e(Pt),previewing:e(Ae),"cover-files":e(R).get(r.fullpath)},null,8,["idx","file","full-screen-preview-image-url","show-menu-idx","selected","cell-width","onFileItemClick","onDragstart","onDragend","onPreviewVisibleChange","onContextMenuClick","is-selected-mutil-files","enable-change-indicator","seed-change-checked","get-gen-diff","get-gen-diff-watch-dep","previewing","cover-files"])]),after:g(()=>[h("div",un,[t.mode==="walk"?(M(),G(Xe,{key:0,onClick:e(n),loading:e(u),block:"",type:"primary",disabled:!e(d),ghost:""},{default:g(()=>[ee(w(v.$t("loadNextPage")),1)]),_:1},8,["onClick","loading","disabled"])):Q("",!0)])]),_:1},8,["items","onScroll","item-size","item-secondary-size","gridItems"]),e(Ae)?(M(),T("div",cn,[i(e(Aa),{onClick:a[29]||(a[29]=r=>e(Qe)("prev")),class:lt({disable:!e(Je)("prev")})},null,8,["class"]),i(e($a),{onClick:a[30]||(a[30]=r=>e(Qe)("next")),class:lt({disable:!e(Je)("next")})},null,8,["class"])])):Q("",!0)])):Q("",!0)],544),e(Ae)?(M(),G(Ra,{key:0,file:e(Z)[e(ge)],idx:e(ge),onContextMenuClick:e(Ge)},null,8,["file","idx","onContextMenuClick"])):Q("",!0),i(Ja,{"file-num":e(Z).length,"selected-file-num":e(b).length},null,8,["file-num","selected-file-num"])]),_:1},8,["spinning"])}}});const xn=mt(dn,[["__scopeId","data-v-bd9da014"]]);export{xn as default};
