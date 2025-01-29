import{cK as L,a as m,P as Q,d as U,j as W,u as D,at as Y,bc as Z,bf as ee,o as ae,w as ne,r as w,f as te,_ as $,al as N,h as S,c as G,m as R,E as j,av as re,i as ue,bP as le,n as oe}from"./index-84146271.js";import{V as ie}from"./Checkbox-788362fa.js";function ce(n,e){var t=typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(!t){if(Array.isArray(n)||(t=L(n))||e&&n&&typeof n.length=="number"){t&&(n=t);var i=0,u=function(){};return{s:u,n:function(){return i>=n.length?{done:!0}:{done:!1,value:n[i++]}},e:function(c){throw c},f:u}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var g=!0,y=!1,x;return{s:function(){t=t.call(n)},n:function(){var c=t.next();return g=c.done,c},e:function(c){y=!0,x=c},f:function(){try{!g&&t.return!=null&&t.return()}finally{if(y)throw x}}}}var de=function(){return{name:String,prefixCls:String,options:{type:Array,default:function(){return[]}},disabled:Boolean,id:String}},se=function(){return m(m({},de()),{},{defaultValue:{type:Array},value:{type:Array},onChange:{type:Function},"onUpdate:value":{type:Function}})},fe=function(){return{prefixCls:String,defaultChecked:{type:Boolean,default:void 0},checked:{type:Boolean,default:void 0},disabled:{type:Boolean,default:void 0},isGroup:{type:Boolean,default:void 0},value:Q.any,name:String,id:String,indeterminate:{type:Boolean,default:void 0},type:{type:String,default:"checkbox"},autofocus:{type:Boolean,default:void 0},onChange:Function,"onUpdate:checked":Function,onClick:Function,skipGroup:{type:Boolean,default:!1}}},ve=function(){return m(m({},fe()),{},{indeterminate:{type:Boolean,default:!1}})},H=Symbol("CheckboxGroupContext"),he=["indeterminate","skipGroup","id"],be=["onMouseenter","onMouseleave","onInput","class","style"];const M=U({compatConfig:{MODE:3},name:"ACheckbox",inheritAttrs:!1,__ANT_CHECKBOX:!0,props:ve(),setup:function(e,t){var i=t.emit,u=t.attrs,g=t.slots,y=t.expose,x=W(),d=D("checkbox",e),c=d.prefixCls,h=d.direction,l=Y(H,void 0),k=Symbol("checkboxUniId");Z(function(){!e.skipGroup&&l&&l.registerValue(k,e.value)}),ee(function(){l&&l.cancelValue(k)}),ae(function(){ne(e.checked!==void 0||l||e.value===void 0,"Checkbox","`value` is not validate prop, do you mean `checked`?")});var V=function(a){var r=a.target.checked;i("update:checked",r),i("change",a)},_=w(),O=function(){var a;(a=_.value)===null||a===void 0||a.focus()},P=function(){var a;(a=_.value)===null||a===void 0||a.blur()};return y({focus:O,blur:P}),function(){var p,a,r=te((p=g.default)===null||p===void 0?void 0:p.call(g)),s=e.indeterminate,f=e.skipGroup,v=e.id,o=v===void 0?x.id.value:v,C=$(e,he),A=u.onMouseenter,B=u.onMouseleave;u.onInput;var I=u.class,X=u.style,q=$(u,be),b=m(m({},C),{},{id:o,prefixCls:c.value},q);l&&!f?(b.onChange=function(){for(var K=arguments.length,T=new Array(K),E=0;E<K;E++)T[E]=arguments[E];i.apply(void 0,["change"].concat(T)),l.toggleOption({label:r,value:e.value})},b.name=l.name.value,b.checked=l.mergedValue.value.indexOf(e.value)!==-1,b.disabled=e.disabled||l.disabled.value,b.indeterminate=s):b.onChange=V;var z=N((a={},S(a,"".concat(c.value,"-wrapper"),!0),S(a,"".concat(c.value,"-rtl"),h.value==="rtl"),S(a,"".concat(c.value,"-wrapper-checked"),b.checked),S(a,"".concat(c.value,"-wrapper-disabled"),b.disabled),a),I),J=N(S({},"".concat(c.value,"-indeterminate"),s));return G("label",{class:z,style:X,onMouseenter:A,onMouseleave:B},[G(ie,m(m({},b),{},{class:J,ref:_}),null),r.length?G("span",null,[r]):null])}}}),F=U({compatConfig:{MODE:3},name:"ACheckboxGroup",props:se(),setup:function(e,t){var i=t.slots,u=t.emit,g=t.expose,y=W(),x=D("checkbox",e),d=x.prefixCls,c=x.direction,h=w((e.value===void 0?e.defaultValue:e.value)||[]);R(function(){return e.value},function(){h.value=e.value||[]});var l=j(function(){return e.options.map(function(a){return typeof a=="string"||typeof a=="number"?{label:a,value:a}:a})}),k=w(Symbol()),V=w(new Map),_=function(r){V.value.delete(r),k.value=Symbol()},O=function(r,s){V.value.set(r,s),k.value=Symbol()},P=w(new Map);R(k,function(){var a=new Map,r=ce(V.value.values()),s;try{for(r.s();!(s=r.n()).done;){var f=s.value;a.set(f,!0)}}catch(v){r.e(v)}finally{r.f()}P.value=a});var p=function(r){var s=h.value.indexOf(r.value),f=ue(h.value);s===-1?f.push(r.value):f.splice(s,1),e.value===void 0&&(h.value=f);var v=f.filter(function(o){return P.value.has(o)}).sort(function(o,C){var A=l.value.findIndex(function(I){return I.value===o}),B=l.value.findIndex(function(I){return I.value===C});return A-B});u("update:value",v),u("change",v),y.onFieldChange()};return re(H,{cancelValue:_,registerValue:O,toggleOption:p,mergedValue:h,name:j(function(){return e.name}),disabled:j(function(){return e.disabled})}),g({mergedValue:h}),function(){var a,r=e.id,s=r===void 0?y.id.value:r,f=null,v="".concat(d.value,"-group");return l.value&&l.value.length>0&&(f=l.value.map(function(o){var C;return G(M,{prefixCls:d.value,key:o.value.toString(),disabled:"disabled"in o?o.disabled:e.disabled,indeterminate:o.indeterminate,value:o.value,checked:h.value.indexOf(o.value)!==-1,onChange:o.onChange,class:"".concat(v,"-item")},{default:function(){return[o.label===void 0?(C=i.label)===null||C===void 0?void 0:C.call(i,o):o.label]}})})),G("div",{class:[v,S({},"".concat(v,"-rtl"),c.value==="rtl")],id:s},[f||((a=i.default)===null||a===void 0?void 0:a.call(i))])}}});M.Group=F;M.install=function(n){return n.component(M.name,M),n.component(F.name,F),n};var pe="Expected a function";function ye(n,e,t){var i=!0,u=!0;if(typeof n!="function")throw new TypeError(pe);return le(t)&&(i="leading"in t?!!t.leading:i,u="trailing"in t?!!t.trailing:u),oe(n,e,{leading:i,maxWait:e,trailing:u})}const xe=n=>{const e=[];return n.shiftKey&&e.push("Shift"),n.ctrlKey&&e.push("Ctrl"),n.metaKey&&e.push("Cmd"),(n.code.startsWith("Key")||n.code.startsWith("Digit"))&&e.push(n.code),n.key==="Escape"&&e.push("Esc"),e.join(" + ")};export{M as C,xe as g,ye as t};
