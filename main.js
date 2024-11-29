import messages from './messages.js';

const htmx = `
(function(e,t){if(typeof define===\"function\"&&define.amd){define([],t)}else if(typeof module===\"object\"&&module.exports){module.exports=t()}else{e.htmx=e.htmx||t()}})(typeof self!==\"undefined\"?self:this,function(){return function(){\"use strict\";var Q={onLoad:B,process:zt,on:de,off:ge,trigger:ce,ajax:Nr,find:C,findAll:f,closest:v,values:function(e,t){var r=dr(e,t||\"post\");return r.values},remove:_,addClass:z,removeClass:n,toggleClass:$,takeClass:W,defineExtension:Ur,removeExtension:Fr,logAll:V,logNone:j,logger:null,config:{historyEnabled:true,historyCacheSize:10,refreshOnHistoryMiss:false,defaultSwapStyle:\"innerHTML\",defaultSwapDelay:0,defaultSettleDelay:20,includeIndicatorStyles:true,indicatorClass:\"htmx-indicator\",requestClass:\"htmx-request\",addedClass:\"htmx-added\",settlingClass:\"htmx-settling\",swappingClass:\"htmx-swapping\",allowEval:true,allowScriptTags:true,inlineScriptNonce:\"\",attributesToSettle:[\"class\",\"style\",\"width\",\"height\"],withCredentials:false,timeout:0,wsReconnectDelay:\"full-jitter\",wsBinaryType:\"blob\",disableSelector:\"[hx-disable], [data-hx-disable]\",useTemplateFragments:false,scrollBehavior:\"smooth\",defaultFocusScroll:false,getCacheBusterParam:false,globalViewTransitions:false,methodsThatUseUrlParams:[\"get\"],selfRequestsOnly:false,ignoreTitle:false,scrollIntoViewOnBoost:true,triggerSpecsCache:null},parseInterval:d,_:t,createEventSource:function(e){return new EventSource(e,{withCredentials:true})},createWebSocket:function(e){var t=new WebSocket(e,[]);t.binaryType=Q.config.wsBinaryType;return t},version:\"1.9.11\"};var r={addTriggerHandler:Lt,bodyContains:se,canAccessLocalStorage:U,findThisElement:xe,filterValues:yr,hasAttribute:o,getAttributeValue:te,getClosestAttributeValue:ne,getClosestMatch:c,getExpressionVars:Hr,getHeaders:xr,getInputValues:dr,getInternalData:ae,getSwapSpecification:wr,getTriggerSpecs:it,getTarget:ye,makeFragment:l,mergeObjects:le,makeSettleInfo:T,oobSwap:Ee,querySelectorExt:ue,selectAndSwap:je,settleImmediately:nr,shouldCancel:ut,triggerEvent:ce,triggerErrorEvent:fe,withExtensions:R};var w=[\"get\",\"post\",\"put\",\"delete\",\"patch\"];var i=w.map(function(e){return\"[hx-\"+e+\"], [data-hx-\"+e+\"]\"}).join(\", \");var S=e(\"head\"),q=e(\"title\"),H=e(\"svg\",true);function e(e,t=false){return new RegExp(\`<\${e}(\\\\s[^>]*>|>)([\\\\s\\\\S]*?)<\\\\\/\${e}>\`,t?\"gim\":\"im\")}function d(e){if(e==undefined){return undefined}let t=NaN;if(e.slice(-2)==\"ms\"){t=parseFloat(e.slice(0,-2))}else if(e.slice(-1)==\"s\"){t=parseFloat(e.slice(0,-1))*1e3}else if(e.slice(-1)==\"m\"){t=parseFloat(e.slice(0,-1))*1e3*60}else{t=parseFloat(e)}return isNaN(t)?undefined:t}function ee(e,t){return e.getAttribute&&e.getAttribute(t)}function o(e,t){return e.hasAttribute&&(e.hasAttribute(t)||e.hasAttribute(\"data-\"+t))}function te(e,t){return ee(e,t)||ee(e,\"data-\"+t)}function u(e){return e.parentElement}function re(){return document}function c(e,t){while(e&&!t(e)){e=u(e)}return e?e:null}function L(e,t,r){var n=te(t,r);var i=te(t,\"hx-disinherit\");if(e!==t&&i&&(i===\"*\"||i.split(\" \").indexOf(r)>=0)){return\"unset\"}else{return n}}function ne(t,r){var n=null;c(t,function(e){return n=L(t,e,r)});if(n!==\"unset\"){return n}}function h(e,t){var r=e.matches||e.matchesSelector||e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||e.oMatchesSelector;return r&&r.call(e,t)}function A(e){var t=\/<([a-z][^\\\/\\0>\\x20\\t\\r\\n\\f]*)\/i;var r=t.exec(e);if(r){return r[1].toLowerCase()}else{return\"\"}}function s(e,t){var r=new DOMParser;var n=r.parseFromString(e,\"text\/html\");var i=n.body;while(t>0){t--;i=i.firstChild}if(i==null){i=re().createDocumentFragment()}return i}function N(e){return\/<body\/.test(e)}function l(e){var t=!N(e);var r=A(e);var n=e;if(r===\"head\"){n=n.replace(S,\"\")}if(Q.config.useTemplateFragments&&t){var i=s(\"<body><template>\"+n+\"<\/template><\/body>\",0);var a=i.querySelector(\"template\").content;if(Q.config.allowScriptTags){oe(a.querySelectorAll(\"script\"),function(e){if(Q.config.inlineScriptNonce){e.nonce=Q.config.inlineScriptNonce}e.htmxExecuted=navigator.userAgent.indexOf(\"Firefox\")===-1})}else{oe(a.querySelectorAll(\"script\"),function(e){_(e)})}return a}switch(r){case\"thead\":case\"tbody\":case\"tfoot\":case\"colgroup\":case\"caption\":return s(\"<table>\"+n+\"<\/table>\",1);case\"col\":return s(\"<table><colgroup>\"+n+\"<\/colgroup><\/table>\",2);case\"tr\":return s(\"<table><tbody>\"+n+\"<\/tbody><\/table>\",2);case\"td\":case\"th\":return s(\"<table><tbody><tr>\"+n+\"<\/tr><\/tbody><\/table>\",3);case\"script\":case\"style\":return s(\"<div>\"+n+\"<\/div>\",1);default:return s(n,0)}}function ie(e){if(e){e()}}function I(e,t){return Object.prototype.toString.call(e)===\"[object \"+t+\"]\"}function k(e){return I(e,\"Function\")}function P(e){return I(e,\"Object\")}function ae(e){var t=\"htmx-internal-data\";var r=e[t];if(!r){r=e[t]={}}return r}function M(e){var t=[];if(e){for(var r=0;r<e.length;r++){t.push(e[r])}}return t}function oe(e,t){if(e){for(var r=0;r<e.length;r++){t(e[r])}}}function X(e){var t=e.getBoundingClientRect();var r=t.top;var n=t.bottom;return r<window.innerHeight&&n>=0}function se(e){if(e.getRootNode&&e.getRootNode()instanceof window.ShadowRoot){return re().body.contains(e.getRootNode().host)}else{return re().body.contains(e)}}function D(e){return e.trim().split(\/\\s+\/)}function le(e,t){for(var r in t){if(t.hasOwnProperty(r)){e[r]=t[r]}}return e}function E(e){try{return JSON.parse(e)}catch(e){b(e);return null}}function U(){var e=\"htmx:localStorageTest\";try{localStorage.setItem(e,e);localStorage.removeItem(e);return true}catch(e){return false}}function F(t){try{var e=new URL(t);if(e){t=e.pathname+e.search}if(!\/^\\\/$\/.test(t)){t=t.replace(\/\\\/+$\/,\"\")}return t}catch(e){return t}}function t(e){return Tr(re().body,function(){return eval(e)})}function B(t){var e=Q.on(\"htmx:load\",function(e){t(e.detail.elt)});return e}function V(){Q.logger=function(e,t,r){if(console){console.log(t,e,r)}}}function j(){Q.logger=null}function C(e,t){if(t){return e.querySelector(t)}else{return C(re(),e)}}function f(e,t){if(t){return e.querySelectorAll(t)}else{return f(re(),e)}}function _(e,t){e=p(e);if(t){setTimeout(function(){_(e);e=null},t)}else{e.parentElement.removeChild(e)}}function z(e,t,r){e=p(e);if(r){setTimeout(function(){z(e,t);e=null},r)}else{e.classList&&e.classList.add(t)}}function n(e,t,r){e=p(e);if(r){setTimeout(function(){n(e,t);e=null},r)}else{if(e.classList){e.classList.remove(t);if(e.classList.length===0){e.removeAttribute(\"class\")}}}}function $(e,t){e=p(e);e.classList.toggle(t)}function W(e,t){e=p(e);oe(e.parentElement.children,function(e){n(e,t)});z(e,t)}function v(e,t){e=p(e);if(e.closest){return e.closest(t)}else{do{if(e==null||h(e,t)){return e}}while(e=e&&u(e));return null}}function g(e,t){return e.substring(0,t.length)===t}function G(e,t){return e.substring(e.length-t.length)===t}function J(e){var t=e.trim();if(g(t,\"<\")&&G(t,\"\/>\")){return t.substring(1,t.length-2)}else{return t}}function Z(e,t){if(t.indexOf(\"closest \")===0){return[v(e,J(t.substr(8)))]}else if(t.indexOf(\"find \")===0){return[C(e,J(t.substr(5)))]}else if(t===\"next\"){return[e.nextElementSibling]}else if(t.indexOf(\"next \")===0){return[K(e,J(t.substr(5)))]}else if(t===\"previous\"){return[e.previousElementSibling]}else if(t.indexOf(\"previous \")===0){return[Y(e,J(t.substr(9)))]}else if(t===\"document\"){return[document]}else if(t===\"window\"){return[window]}else if(t===\"body\"){return[document.body]}else{return re().querySelectorAll(J(t))}}var K=function(e,t){var r=re().querySelectorAll(t);for(var n=0;n<r.length;n++){var i=r[n];if(i.compareDocumentPosition(e)===Node.DOCUMENT_POSITION_PRECEDING){return i}}};var Y=function(e,t){var r=re().querySelectorAll(t);for(var n=r.length-1;n>=0;n--){var i=r[n];if(i.compareDocumentPosition(e)===Node.DOCUMENT_POSITION_FOLLOWING){return i}}};function ue(e,t){if(t){return Z(e,t)[0]}else{return Z(re().body,e)[0]}}function p(e){if(I(e,\"String\")){return C(e)}else{return e}}function ve(e,t,r){if(k(t)){return{target:re().body,event:e,listener:t}}else{return{target:p(e),event:t,listener:r}}}function de(t,r,n){jr(function(){var e=ve(t,r,n);e.target.addEventListener(e.event,e.listener)});var e=k(r);return e?r:n}function ge(t,r,n){jr(function(){var e=ve(t,r,n);e.target.removeEventListener(e.event,e.listener)});return k(r)?r:n}var pe=re().createElement(\"output\");function me(e,t){var r=ne(e,t);if(r){if(r===\"this\"){return[xe(e,t)]}else{var n=Z(e,r);if(n.length===0){b(\'The selector \"\'+r+\'\" on \'+t+\" returned no matches!\");return[pe]}else{return n}}}}function xe(e,t){return c(e,function(e){return te(e,t)!=null})}function ye(e){var t=ne(e,\"hx-target\");if(t){if(t===\"this\"){return xe(e,\"hx-target\")}else{return ue(e,t)}}else{var r=ae(e);if(r.boosted){return re().body}else{return e}}}function be(e){var t=Q.config.attributesToSettle;for(var r=0;r<t.length;r++){if(e===t[r]){return true}}return false}function we(t,r){oe(t.attributes,function(e){if(!r.hasAttribute(e.name)&&be(e.name)){t.removeAttribute(e.name)}});oe(r.attributes,function(e){if(be(e.name)){t.setAttribute(e.name,e.value)}})}function Se(e,t){var r=Br(t);for(var n=0;n<r.length;n++){var i=r[n];try{if(i.isInlineSwap(e)){return true}}catch(e){b(e)}}return e===\"outerHTML\"}function Ee(e,i,a){var t=\"#\"+ee(i,\"id\");var o=\"outerHTML\";if(e===\"true\"){}else if(e.indexOf(\":\")>0){o=e.substr(0,e.indexOf(\":\"));t=e.substr(e.indexOf(\":\")+1,e.length)}else{o=e}var r=re().querySelectorAll(t);if(r){oe(r,function(e){var t;var r=i.cloneNode(true);t=re().createDocumentFragment();t.appendChild(r);if(!Se(o,e)){t=r}var n={shouldSwap:true,target:e,fragment:t};if(!ce(e,\"htmx:oobBeforeSwap\",n))return;e=n.target;if(n[\"shouldSwap\"]){Be(o,e,e,t,a)}oe(a.elts,function(e){ce(e,\"htmx:oobAfterSwap\",n)})});i.parentNode.removeChild(i)}else{i.parentNode.removeChild(i);fe(re().body,\"htmx:oobErrorNoTarget\",{content:i})}return e}function Ce(e,t,r){var n=ne(e,\"hx-select-oob\");if(n){var i=n.split(\",\");for(var a=0;a<i.length;a++){var o=i[a].split(\":\",2);var s=o[0].trim();if(s.indexOf(\"#\")===0){s=s.substring(1)}var l=o[1]||\"true\";var u=t.querySelector(\"#\"+s);if(u){Ee(l,u,r)}}}oe(f(t,\"[hx-swap-oob], [data-hx-swap-oob]\"),function(e){var t=te(e,\"hx-swap-oob\");if(t!=null){Ee(t,e,r)}})}function Re(e){oe(f(e,\"[hx-preserve], [data-hx-preserve]\"),function(e){var t=te(e,\"id\");var r=re().getElementById(t);if(r!=null){e.parentNode.replaceChild(r,e)}})}function Te(o,e,s){oe(e.querySelectorAll(\"[id]\"),function(e){var t=ee(e,\"id\");if(t&&t.length>0){var r=t.replace(\"\'\",\"\\\\\'\");var n=e.tagName.replace(\":\",\"\\\\:\");var i=o.querySelector(n+\"[id=\'\"+r+\"\']\");if(i&&i!==o){var a=e.cloneNode();we(e,i);s.tasks.push(function(){we(e,a)})}}})}function Oe(e){return function(){n(e,Q.config.addedClass);zt(e);Nt(e);qe(e);ce(e,\"htmx:load\")}}function qe(e){var t=\"[autofocus]\";var r=h(e,t)?e:e.querySelector(t);if(r!=null){r.focus()}}function a(e,t,r,n){Te(e,r,n);while(r.childNodes.length>0){var i=r.firstChild;z(i,Q.config.addedClass);e.insertBefore(i,t);if(i.nodeType!==Node.TEXT_NODE&&i.nodeType!==Node.COMMENT_NODE){n.tasks.push(Oe(i))}}}function He(e,t){var r=0;while(r<e.length){t=(t<<5)-t+e.charCodeAt(r++)|0}return t}function Le(e){var t=0;if(e.attributes){for(var r=0;r<e.attributes.length;r++){var n=e.attributes[r];if(n.value){t=He(n.name,t);t=He(n.value,t)}}}return t}function Ae(e){var t=ae(e);if(t.onHandlers){for(var r=0;r<t.onHandlers.length;r++){const n=t.onHandlers[r];e.removeEventListener(n.event,n.listener)}delete t.onHandlers}}function Ne(e){var t=ae(e);if(t.timeout){clearTimeout(t.timeout)}if(t.webSocket){t.webSocket.close()}if(t.sseEventSource){t.sseEventSource.close()}if(t.listenerInfos){oe(t.listenerInfos,function(e){if(e.on){e.on.removeEventListener(e.trigger,e.listener)}})}Ae(e);oe(Object.keys(t),function(e){delete t[e]})}function m(e){ce(e,\"htmx:beforeCleanupElement\");Ne(e);if(e.children){oe(e.children,function(e){m(e)})}}function Ie(t,e,r){if(t.tagName===\"BODY\"){return Ue(t,e,r)}else{var n;var i=t.previousSibling;a(u(t),t,e,r);if(i==null){n=u(t).firstChild}else{n=i.nextSibling}r.elts=r.elts.filter(function(e){return e!=t});while(n&&n!==t){if(n.nodeType===Node.ELEMENT_NODE){r.elts.push(n)}n=n.nextElementSibling}m(t);u(t).removeChild(t)}}function ke(e,t,r){return a(e,e.firstChild,t,r)}function Pe(e,t,r){return a(u(e),e,t,r)}function Me(e,t,r){return a(e,null,t,r)}function Xe(e,t,r){return a(u(e),e.nextSibling,t,r)}function De(e,t,r){m(e);return u(e).removeChild(e)}function Ue(e,t,r){var n=e.firstChild;a(e,n,t,r);if(n){while(n.nextSibling){m(n.nextSibling);e.removeChild(n.nextSibling)}m(n);e.removeChild(n)}}function Fe(e,t,r){var n=r||ne(e,\"hx-select\");if(n){var i=re().createDocumentFragment();oe(t.querySelectorAll(n),function(e){i.appendChild(e)});t=i}return t}function Be(e,t,r,n,i){switch(e){case\"none\":return;case\"outerHTML\":Ie(r,n,i);return;case\"afterbegin\":ke(r,n,i);return;case\"beforebegin\":Pe(r,n,i);return;case\"beforeend\":Me(r,n,i);return;case\"afterend\":Xe(r,n,i);return;case\"delete\":De(r,n,i);return;default:var a=Br(t);for(var o=0;o<a.length;o++){var s=a[o];try{var l=s.handleSwap(e,r,n,i);if(l){if(typeof l.length!==\"undefined\"){for(var u=0;u<l.length;u++){var f=l[u];if(f.nodeType!==Node.TEXT_NODE&&f.nodeType!==Node.COMMENT_NODE){i.tasks.push(Oe(f))}}}return}}catch(e){b(e)}}if(e===\"innerHTML\"){Ue(r,n,i)}else{Be(Q.config.defaultSwapStyle,t,r,n,i)}}}function Ve(e){if(e.indexOf(\"<title\")>-1){var t=e.replace(H,\"\");var r=t.match(q);if(r){return r[2]}}}function je(e,t,r,n,i,a){i.title=Ve(n);var o=l(n);if(o){Ce(r,o,i);o=Fe(r,o,a);Re(o);return Be(e,r,t,o,i)}}function _e(e,t,r){var n=e.getResponseHeader(t);if(n.indexOf(\"{\")===0){var i=E(n);for(var a in i){if(i.hasOwnProperty(a)){var o=i[a];if(!P(o)){o={value:o}}ce(r,a,o)}}}else{var s=n.split(\",\");for(var l=0;l<s.length;l++){ce(r,s[l].trim(),[])}}}var ze=\/\\s\/;var x=\/[\\s,]\/;var $e=\/[_$a-zA-Z]\/;var We=\/[_$a-zA-Z0-9]\/;var Ge=[\'\"\',\"\'\",\"\/\"];var Je=\/[^\\s]\/;var Ze=\/[{(]\/;var Ke=\/[})]\/;function Ye(e){var t=[];var r=0;while(r<e.length){if($e.exec(e.charAt(r))){var n=r;while(We.exec(e.charAt(r+1))){r++}t.push(e.substr(n,r-n+1))}else if(Ge.indexOf(e.charAt(r))!==-1){var i=e.charAt(r);var n=r;r++;while(r<e.length&&e.charAt(r)!==i){if(e.charAt(r)===\"\\\\\"){r++}r++}t.push(e.substr(n,r-n+1))}else{var a=e.charAt(r);t.push(a)}r++}return t}function Qe(e,t,r){return $e.exec(e.charAt(0))&&e!==\"true\"&&e!==\"false\"&&e!==\"this\"&&e!==r&&t!==\".\"}function et(e,t,r){if(t[0]===\"[\"){t.shift();var n=1;var i=\" return (function(\"+r+\"){ return (\";var a=null;while(t.length>0){var o=t[0];if(o===\"]\"){n--;if(n===0){if(a===null){i=i+\"true\"}t.shift();i+=\")})\";try{var s=Tr(e,function(){return Function(i)()},function(){return true});s.source=i;return s}catch(e){fe(re().body,\"htmx:syntax:error\",{error:e,source:i});return null}}}else if(o===\"[\"){n++}if(Qe(o,a,r)){i+=\"((\"+r+\".\"+o+\") ? (\"+r+\".\"+o+\") : (window.\"+o+\"))\"}else{i=i+o}a=t.shift()}}}function y(e,t){var r=\"\";while(e.length>0&&!t.test(e[0])){r+=e.shift()}return r}function tt(e){var t;if(e.length>0&&Ze.test(e[0])){e.shift();t=y(e,Ke).trim();e.shift()}else{t=y(e,x)}return t}var rt=\"input, textarea, select\";function nt(e,t,r){var n=[];var i=Ye(t);do{y(i,Je);var a=i.length;var o=y(i,\/[,\\[\\s]\/);if(o!==\"\"){if(o===\"every\"){var s={trigger:\"every\"};y(i,Je);s.pollInterval=d(y(i,\/[,\\[\\s]\/));y(i,Je);var l=et(e,i,\"event\");if(l){s.eventFilter=l}n.push(s)}else if(o.indexOf(\"sse:\")===0){n.push({trigger:\"sse\",sseEvent:o.substr(4)})}else{var u={trigger:o};var l=et(e,i,\"event\");if(l){u.eventFilter=l}while(i.length>0&&i[0]!==\",\"){y(i,Je);var f=i.shift();if(f===\"changed\"){u.changed=true}else if(f===\"once\"){u.once=true}else if(f===\"consume\"){u.consume=true}else if(f===\"delay\"&&i[0]===\":\"){i.shift();u.delay=d(y(i,x))}else if(f===\"from\"&&i[0]===\":\"){i.shift();if(Ze.test(i[0])){var c=tt(i)}else{var c=y(i,x);if(c===\"closest\"||c===\"find\"||c===\"next\"||c===\"previous\"){i.shift();var h=tt(i);if(h.length>0){c+=\" \"+h}}}u.from=c}else if(f===\"target\"&&i[0]===\":\"){i.shift();u.target=tt(i)}else if(f===\"throttle\"&&i[0]===\":\"){i.shift();u.throttle=d(y(i,x))}else if(f===\"queue\"&&i[0]===\":\"){i.shift();u.queue=y(i,x)}else if(f===\"root\"&&i[0]===\":\"){i.shift();u[f]=tt(i)}else if(f===\"threshold\"&&i[0]===\":\"){i.shift();u[f]=y(i,x)}else{fe(e,\"htmx:syntax:error\",{token:i.shift()})}}n.push(u)}}if(i.length===a){fe(e,\"htmx:syntax:error\",{token:i.shift()})}y(i,Je)}while(i[0]===\",\"&&i.shift());if(r){r[t]=n}return n}function it(e){var t=te(e,\"hx-trigger\");var r=[];if(t){var n=Q.config.triggerSpecsCache;r=n&&n[t]||nt(e,t,n)}if(r.length>0){return r}else if(h(e,\"form\")){return[{trigger:\"submit\"}]}else if(h(e,\'input[type=\"button\"], input[type=\"submit\"]\')){return[{trigger:\"click\"}]}else if(h(e,rt)){return[{trigger:\"change\"}]}else{return[{trigger:\"click\"}]}}function at(e){ae(e).cancelled=true}function ot(e,t,r){var n=ae(e);n.timeout=setTimeout(function(){if(se(e)&&n.cancelled!==true){if(!ct(r,e,Wt(\"hx:poll:trigger\",{triggerSpec:r,target:e}))){t(e)}ot(e,t,r)}},r.pollInterval)}function st(e){return location.hostname===e.hostname&&ee(e,\"href\")&&ee(e,\"href\").indexOf(\"#\")!==0}function lt(t,r,e){if(t.tagName===\"A\"&&st(t)&&(t.target===\"\"||t.target===\"_self\")||t.tagName===\"FORM\"){r.boosted=true;var n,i;if(t.tagName===\"A\"){n=\"get\";i=ee(t,\"href\")}else{var a=ee(t,\"method\");n=a?a.toLowerCase():\"get\";if(n===\"get\"){}i=ee(t,\"action\")}e.forEach(function(e){ht(t,function(e,t){if(v(e,Q.config.disableSelector)){m(e);return}he(n,i,e,t)},r,e,true)})}}function ut(e,t){if(e.type===\"submit\"||e.type===\"click\"){if(t.tagName===\"FORM\"){return true}if(h(t,\'input[type=\"submit\"], button\')&&v(t,\"form\")!==null){return true}if(t.tagName===\"A\"&&t.href&&(t.getAttribute(\"href\")===\"#\"||t.getAttribute(\"href\").indexOf(\"#\")!==0)){return true}}return false}function ft(e,t){return ae(e).boosted&&e.tagName===\"A\"&&t.type===\"click\"&&(t.ctrlKey||t.metaKey)}function ct(e,t,r){var n=e.eventFilter;if(n){try{return n.call(t,r)!==true}catch(e){fe(re().body,\"htmx:eventFilter:error\",{error:e,source:n.source});return true}}return false}function ht(a,o,e,s,l){var u=ae(a);var t;if(s.from){t=Z(a,s.from)}else{t=[a]}if(s.changed){t.forEach(function(e){var t=ae(e);t.lastValue=e.value})}oe(t,function(n){var i=function(e){if(!se(a)){n.removeEventListener(s.trigger,i);return}if(ft(a,e)){return}if(l||ut(e,a)){e.preventDefault()}if(ct(s,a,e)){return}var t=ae(e);t.triggerSpec=s;if(t.handledFor==null){t.handledFor=[]}if(t.handledFor.indexOf(a)<0){t.handledFor.push(a);if(s.consume){e.stopPropagation()}if(s.target&&e.target){if(!h(e.target,s.target)){return}}if(s.once){if(u.triggeredOnce){return}else{u.triggeredOnce=true}}if(s.changed){var r=ae(n);if(r.lastValue===n.value){return}r.lastValue=n.value}if(u.delayed){clearTimeout(u.delayed)}if(u.throttle){return}if(s.throttle>0){if(!u.throttle){o(a,e);u.throttle=setTimeout(function(){u.throttle=null},s.throttle)}}else if(s.delay>0){u.delayed=setTimeout(function(){o(a,e)},s.delay)}else{ce(a,\"htmx:trigger\");o(a,e)}}};if(e.listenerInfos==null){e.listenerInfos=[]}e.listenerInfos.push({trigger:s.trigger,listener:i,on:n});n.addEventListener(s.trigger,i)})}var vt=false;var dt=null;function gt(){if(!dt){dt=function(){vt=true};window.addEventListener(\"scroll\",dt);setInterval(function(){if(vt){vt=false;oe(re().querySelectorAll(\"[hx-trigger=\'revealed\'],[data-hx-trigger=\'revealed\']\"),function(e){pt(e)})}},200)}}function pt(t){if(!o(t,\"data-hx-revealed\")&&X(t)){t.setAttribute(\"data-hx-revealed\",\"true\");var e=ae(t);if(e.initHash){ce(t,\"revealed\")}else{t.addEventListener(\"htmx:afterProcessNode\",function(e){ce(t,\"revealed\")},{once:true})}}}function mt(e,t,r){var n=D(r);for(var i=0;i<n.length;i++){var a=n[i].split(\/:(.+)\/);if(a[0]===\"connect\"){xt(e,a[1],0)}if(a[0]===\"send\"){bt(e)}}}function xt(s,r,n){if(!se(s)){return}if(r.indexOf(\"\/\")==0){var e=location.hostname+(location.port?\":\"+location.port:\"\");if(location.protocol==\"https:\"){r=\"wss:\/\/\"+e+r}else if(location.protocol==\"http:\"){r=\"ws:\/\/\"+e+r}}var t=Q.createWebSocket(r);t.onerror=function(e){fe(s,\"htmx:wsError\",{error:e,socket:t});yt(s)};t.onclose=function(e){if([1006,1012,1013].indexOf(e.code)>=0){var t=wt(n);setTimeout(function(){xt(s,r,n+1)},t)}};t.onopen=function(e){n=0};ae(s).webSocket=t;t.addEventListener(\"message\",function(e){if(yt(s)){return}var t=e.data;R(s,function(e){t=e.transformResponse(t,null,s)});var r=T(s);var n=l(t);var i=M(n.children);for(var a=0;a<i.length;a++){var o=i[a];Ee(te(o,\"hx-swap-oob\")||\"true\",o,r)}nr(r.tasks)})}function yt(e){if(!se(e)){ae(e).webSocket.close();return true}}function bt(u){var f=c(u,function(e){return ae(e).webSocket!=null});if(f){u.addEventListener(it(u)[0].trigger,function(e){var t=ae(f).webSocket;var r=xr(u,f);var n=dr(u,\"post\");var i=n.errors;var a=n.values;var o=Hr(u);var s=le(a,o);var l=yr(s,u);l[\"HEADERS\"]=r;if(i&&i.length>0){ce(u,\"htmx:validation:halted\",i);return}t.send(JSON.stringify(l));if(ut(e,u)){e.preventDefault()}})}else{fe(u,\"htmx:noWebSocketSourceError\")}}function wt(e){var t=Q.config.wsReconnectDelay;if(typeof t===\"function\"){return t(e)}if(t===\"full-jitter\"){var r=Math.min(e,6);var n=1e3*Math.pow(2,r);return n*Math.random()}b(\'htmx.config.wsReconnectDelay must either be a function or the string \"full-jitter\"\')}function St(e,t,r){var n=D(r);for(var i=0;i<n.length;i++){var a=n[i].split(\/:(.+)\/);if(a[0]===\"connect\"){Et(e,a[1])}if(a[0]===\"swap\"){Ct(e,a[1])}}}function Et(t,e){var r=Q.createEventSource(e);r.onerror=function(e){fe(t,\"htmx:sseError\",{error:e,source:r});Tt(t)};ae(t).sseEventSource=r}function Ct(a,o){var s=c(a,Ot);if(s){var l=ae(s).sseEventSource;var u=function(e){if(Tt(s)){return}if(!se(a)){l.removeEventListener(o,u);return}var t=e.data;R(a,function(e){t=e.transformResponse(t,null,a)});var r=wr(a);var n=ye(a);var i=T(a);je(r.swapStyle,n,a,t,i);nr(i.tasks);ce(a,\"htmx:sseMessage\",e)};ae(a).sseListener=u;l.addEventListener(o,u)}else{fe(a,\"htmx:noSSESourceError\")}}function Rt(e,t,r){var n=c(e,Ot);if(n){var i=ae(n).sseEventSource;var a=function(){if(!Tt(n)){if(se(e)){t(e)}else{i.removeEventListener(r,a)}}};ae(e).sseListener=a;i.addEventListener(r,a)}else{fe(e,\"htmx:noSSESourceError\")}}function Tt(e){if(!se(e)){ae(e).sseEventSource.close();return true}}function Ot(e){return ae(e).sseEventSource!=null}function qt(e,t,r,n){var i=function(){if(!r.loaded){r.loaded=true;t(e)}};if(n>0){setTimeout(i,n)}else{i()}}function Ht(t,i,e){var a=false;oe(w,function(r){if(o(t,\"hx-\"+r)){var n=te(t,\"hx-\"+r);a=true;i.path=n;i.verb=r;e.forEach(function(e){Lt(t,e,i,function(e,t){if(v(e,Q.config.disableSelector)){m(e);return}he(r,n,e,t)})})}});return a}function Lt(n,e,t,r){if(e.sseEvent){Rt(n,r,e.sseEvent)}else if(e.trigger===\"revealed\"){gt();ht(n,r,t,e);pt(n)}else if(e.trigger===\"intersect\"){var i={};if(e.root){i.root=ue(n,e.root)}if(e.threshold){i.threshold=parseFloat(e.threshold)}var a=new IntersectionObserver(function(e){for(var t=0;t<e.length;t++){var r=e[t];if(r.isIntersecting){ce(n,\"intersect\");break}}},i);a.observe(n);ht(n,r,t,e)}else if(e.trigger===\"load\"){if(!ct(e,n,Wt(\"load\",{elt:n}))){qt(n,r,t,e.delay)}}else if(e.pollInterval>0){t.polling=true;ot(n,r,e)}else{ht(n,r,t,e)}}function At(e){if(!e.htmxExecuted&&Q.config.allowScriptTags&&(e.type===\"text\/javascript\"||e.type===\"module\"||e.type===\"\")){var t=re().createElement(\"script\");oe(e.attributes,function(e){t.setAttribute(e.name,e.value)});t.textContent=e.textContent;t.async=false;if(Q.config.inlineScriptNonce){t.nonce=Q.config.inlineScriptNonce}var r=e.parentElement;try{r.insertBefore(t,e)}catch(e){b(e)}finally{if(e.parentElement){e.parentElement.removeChild(e)}}}}function Nt(e){if(h(e,\"script\")){At(e)}oe(f(e,\"script\"),function(e){At(e)})}function It(e){var t=e.attributes;for(var r=0;r<t.length;r++){var n=t[r].name;if(g(n,\"hx-on:\")||g(n,\"data-hx-on:\")||g(n,\"hx-on-\")||g(n,\"data-hx-on-\")){return true}}return false}function kt(e){var t=null;var r=[];if(It(e)){r.push(e)}if(document.evaluate){var n=document.evaluate(\'.\/\/*[@*[ starts-with(name(), \"hx-on:\") or starts-with(name(), \"data-hx-on:\") or\'+\' starts-with(name(), \"hx-on-\") or starts-with(name(), \"data-hx-on-\") ]]\',e);while(t=n.iterateNext())r.push(t)}else{var i=e.getElementsByTagName(\"*\");for(var a=0;a<i.length;a++){if(It(i[a])){r.push(i[a])}}}return r}function Pt(e){if(e.querySelectorAll){var t=\", [hx-boost] a, [data-hx-boost] a, a[hx-boost], a[data-hx-boost]\";var r=e.querySelectorAll(i+t+\", form, [type=\'submit\'], [hx-sse], [data-hx-sse], [hx-ws],\"+\" [data-hx-ws], [hx-ext], [data-hx-ext], [hx-trigger], [data-hx-trigger], [hx-on], [data-hx-on]\");return r}else{return[]}}function Mt(e){var t=v(e.target,\"button, input[type=\'submit\']\");var r=Dt(e);if(r){r.lastButtonClicked=t}}function Xt(e){var t=Dt(e);if(t){t.lastButtonClicked=null}}function Dt(e){var t=v(e.target,\"button, input[type=\'submit\']\");if(!t){return}var r=p(\"#\"+ee(t,\"form\"))||v(t,\"form\");if(!r){return}return ae(r)}function Ut(e){e.addEventListener(\"click\",Mt);e.addEventListener(\"focusin\",Mt);e.addEventListener(\"focusout\",Xt)}function Ft(e){var t=Ye(e);var r=0;for(var n=0;n<t.length;n++){const i=t[n];if(i===\"{\"){r++}else if(i===\"}\"){r--}}return r}function Bt(t,e,r){var n=ae(t);if(!Array.isArray(n.onHandlers)){n.onHandlers=[]}var i;var a=function(e){return Tr(t,function(){if(!i){i=new Function(\"event\",r)}i.call(t,e)})};t.addEventListener(e,a);n.onHandlers.push({event:e,listener:a})}function Vt(e){var t=te(e,\"hx-on\");if(t){var r={};var n=t.split(\"\\n\");var i=null;var a=0;while(n.length>0){var o=n.shift();var s=o.match(\/^\\s*([a-zA-Z:\\-\\.]+:)(.*)\/);if(a===0&&s){o.split(\":\");i=s[1].slice(0,-1);r[i]=s[2]}else{r[i]+=o}a+=Ft(o)}for(var l in r){Bt(e,l,r[l])}}}function jt(e){Ae(e);for(var t=0;t<e.attributes.length;t++){var r=e.attributes[t].name;var n=e.attributes[t].value;if(g(r,\"hx-on\")||g(r,\"data-hx-on\")){var i=r.indexOf(\"-on\")+3;var a=r.slice(i,i+1);if(a===\"-\"||a===\":\"){var o=r.slice(i+1);if(g(o,\":\")){o=\"htmx\"+o}else if(g(o,\"-\")){o=\"htmx:\"+o.slice(1)}else if(g(o,\"htmx-\")){o=\"htmx:\"+o.slice(5)}Bt(e,o,n)}}}}function _t(t){if(v(t,Q.config.disableSelector)){m(t);return}var r=ae(t);if(r.initHash!==Le(t)){Ne(t);r.initHash=Le(t);Vt(t);ce(t,\"htmx:beforeProcessNode\");if(t.value){r.lastValue=t.value}var e=it(t);var n=Ht(t,r,e);if(!n){if(ne(t,\"hx-boost\")===\"true\"){lt(t,r,e)}else if(o(t,\"hx-trigger\")){e.forEach(function(e){Lt(t,e,r,function(){})})}}if(t.tagName===\"FORM\"||ee(t,\"type\")===\"submit\"&&o(t,\"form\")){Ut(t)}var i=te(t,\"hx-sse\");if(i){St(t,r,i)}var a=te(t,\"hx-ws\");if(a){mt(t,r,a)}ce(t,\"htmx:afterProcessNode\")}}function zt(e){e=p(e);if(v(e,Q.config.disableSelector)){m(e);return}_t(e);oe(Pt(e),function(e){_t(e)});oe(kt(e),jt)}function $t(e){return e.replace(\/([a-z0-9])([A-Z])\/g,\"$1-$2\").toLowerCase()}function Wt(e,t){var r;if(window.CustomEvent&&typeof window.CustomEvent===\"function\"){r=new CustomEvent(e,{bubbles:true,cancelable:true,detail:t})}else{r=re().createEvent(\"CustomEvent\");r.initCustomEvent(e,true,true,t)}return r}function fe(e,t,r){ce(e,t,le({error:t},r))}function Gt(e){return e===\"htmx:afterProcessNode\"}function R(e,t){oe(Br(e),function(e){try{t(e)}catch(e){b(e)}})}function b(e){if(console.error){console.error(e)}else if(console.log){console.log(\"ERROR: \",e)}}function ce(e,t,r){e=p(e);if(r==null){r={}}r[\"elt\"]=e;var n=Wt(t,r);if(Q.logger&&!Gt(t)){Q.logger(e,t,r)}if(r.error){b(r.error);ce(e,\"htmx:error\",{errorInfo:r})}var i=e.dispatchEvent(n);var a=$t(t);if(i&&a!==t){var o=Wt(a,n.detail);i=i&&e.dispatchEvent(o)}R(e,function(e){i=i&&(e.onEvent(t,n)!==false&&!n.defaultPrevented)});return i}var Jt=location.pathname+location.search;function Zt(){var e=re().querySelector(\"[hx-history-elt],[data-hx-history-elt]\");return e||re().body}function Kt(e,t,r,n){if(!U()){return}if(Q.config.historyCacheSize<=0){localStorage.removeItem(\"htmx-history-cache\");return}e=F(e);var i=E(localStorage.getItem(\"htmx-history-cache\"))||[];for(var a=0;a<i.length;a++){if(i[a].url===e){i.splice(a,1);break}}var o={url:e,content:t,title:r,scroll:n};ce(re().body,\"htmx:historyItemCreated\",{item:o,cache:i});i.push(o);while(i.length>Q.config.historyCacheSize){i.shift()}while(i.length>0){try{localStorage.setItem(\"htmx-history-cache\",JSON.stringify(i));break}catch(e){fe(re().body,\"htmx:historyCacheError\",{cause:e,cache:i});i.shift()}}}function Yt(e){if(!U()){return null}e=F(e);var t=E(localStorage.getItem(\"htmx-history-cache\"))||[];for(var r=0;r<t.length;r++){if(t[r].url===e){return t[r]}}return null}function Qt(e){var t=Q.config.requestClass;var r=e.cloneNode(true);oe(f(r,\".\"+t),function(e){n(e,t)});return r.innerHTML}function er(){var e=Zt();var t=Jt||location.pathname+location.search;var r;try{r=re().querySelector(\'[hx-history=\"false\" i],[data-hx-history=\"false\" i]\')}catch(e){r=re().querySelector(\'[hx-history=\"false\"],[data-hx-history=\"false\"]\')}if(!r){ce(re().body,\"htmx:beforeHistorySave\",{path:t,historyElt:e});Kt(t,Qt(e),re().title,window.scrollY)}if(Q.config.historyEnabled)history.replaceState({htmx:true},re().title,window.location.href)}function tr(e){if(Q.config.getCacheBusterParam){e=e.replace(\/org\\.htmx\\.cache-buster=[^&]*&?\/,\"\");if(G(e,\"&\")||G(e,\"?\")){e=e.slice(0,-1)}}if(Q.config.historyEnabled){history.pushState({htmx:true},\"\",e)}Jt=e}function rr(e){if(Q.config.historyEnabled)history.replaceState({htmx:true},\"\",e);Jt=e}function nr(e){oe(e,function(e){e.call()})}function ir(a){var e=new XMLHttpRequest;var o={path:a,xhr:e};ce(re().body,\"htmx:historyCacheMiss\",o);e.open(\"GET\",a,true);e.setRequestHeader(\"HX-Request\",\"true\");e.setRequestHeader(\"HX-History-Restore-Request\",\"true\");e.setRequestHeader(\"HX-Current-URL\",re().location.href);e.onload=function(){if(this.status>=200&&this.status<400){ce(re().body,\"htmx:historyCacheMissLoad\",o);var e=l(this.response);e=e.querySelector(\"[hx-history-elt],[data-hx-history-elt]\")||e;var t=Zt();var r=T(t);var n=Ve(this.response);if(n){var i=C(\"title\");if(i){i.innerHTML=n}else{window.document.title=n}}Ue(t,e,r);nr(r.tasks);Jt=a;ce(re().body,\"htmx:historyRestore\",{path:a,cacheMiss:true,serverResponse:this.response})}else{fe(re().body,\"htmx:historyCacheMissLoadError\",o)}};e.send()}function ar(e){er();e=e||location.pathname+location.search;var t=Yt(e);if(t){var r=l(t.content);var n=Zt();var i=T(n);Ue(n,r,i);nr(i.tasks);document.title=t.title;setTimeout(function(){window.scrollTo(0,t.scroll)},0);Jt=e;ce(re().body,\"htmx:historyRestore\",{path:e,item:t})}else{if(Q.config.refreshOnHistoryMiss){window.location.reload(true)}else{ir(e)}}}function or(e){var t=me(e,\"hx-indicator\");if(t==null){t=[e]}oe(t,function(e){var t=ae(e);t.requestCount=(t.requestCount||0)+1;e.classList[\"add\"].call(e.classList,Q.config.requestClass)});return t}function sr(e){var t=me(e,\"hx-disabled-elt\");if(t==null){t=[]}oe(t,function(e){var t=ae(e);t.requestCount=(t.requestCount||0)+1;e.setAttribute(\"disabled\",\"\")});return t}function lr(e,t){oe(e,function(e){var t=ae(e);t.requestCount=(t.requestCount||0)-1;if(t.requestCount===0){e.classList[\"remove\"].call(e.classList,Q.config.requestClass)}});oe(t,function(e){var t=ae(e);t.requestCount=(t.requestCount||0)-1;if(t.requestCount===0){e.removeAttribute(\"disabled\")}})}function ur(e,t){for(var r=0;r<e.length;r++){var n=e[r];if(n.isSameNode(t)){return true}}return false}function fr(e){if(e.name===\"\"||e.name==null||e.disabled||v(e,\"fieldset[disabled]\")){return false}if(e.type===\"button\"||e.type===\"submit\"||e.tagName===\"image\"||e.tagName===\"reset\"||e.tagName===\"file\"){return false}if(e.type===\"checkbox\"||e.type===\"radio\"){return e.checked}return true}function cr(e,t,r){if(e!=null&&t!=null){var n=r[e];if(n===undefined){r[e]=t}else if(Array.isArray(n)){if(Array.isArray(t)){r[e]=n.concat(t)}else{n.push(t)}}else{if(Array.isArray(t)){r[e]=[n].concat(t)}else{r[e]=[n,t]}}}}function hr(t,r,n,e,i){if(e==null||ur(t,e)){return}else{t.push(e)}if(fr(e)){var a=ee(e,\"name\");var o=e.value;if(e.multiple&&e.tagName===\"SELECT\"){o=M(e.querySelectorAll(\"option:checked\")).map(function(e){return e.value})}if(e.files){o=M(e.files)}cr(a,o,r);if(i){vr(e,n)}}if(h(e,\"form\")){var s=e.elements;oe(s,function(e){hr(t,r,n,e,i)})}}function vr(e,t){if(e.willValidate){ce(e,\"htmx:validation:validate\");if(!e.checkValidity()){t.push({elt:e,message:e.validationMessage,validity:e.validity});ce(e,\"htmx:validation:failed\",{message:e.validationMessage,validity:e.validity})}}}function dr(e,t){var r=[];var n={};var i={};var a=[];var o=ae(e);if(o.lastButtonClicked&&!se(o.lastButtonClicked)){o.lastButtonClicked=null}var s=h(e,\"form\")&&e.noValidate!==true||te(e,\"hx-validate\")===\"true\";if(o.lastButtonClicked){s=s&&o.lastButtonClicked.formNoValidate!==true}if(t!==\"get\"){hr(r,i,a,v(e,\"form\"),s)}hr(r,n,a,e,s);if(o.lastButtonClicked||e.tagName===\"BUTTON\"||e.tagName===\"INPUT\"&&ee(e,\"type\")===\"submit\"){var l=o.lastButtonClicked||e;var u=ee(l,\"name\");cr(u,l.value,i)}var f=me(e,\"hx-include\");oe(f,function(e){hr(r,n,a,e,s);if(!h(e,\"form\")){oe(e.querySelectorAll(rt),function(e){hr(r,n,a,e,s)})}});n=le(n,i);return{errors:a,values:n}}function gr(e,t,r){if(e!==\"\"){e+=\"&\"}if(String(r)===\"[object Object]\"){r=JSON.stringify(r)}var n=encodeURIComponent(r);e+=encodeURIComponent(t)+\"=\"+n;return e}function pr(e){var t=\"\";for(var r in e){if(e.hasOwnProperty(r)){var n=e[r];if(Array.isArray(n)){oe(n,function(e){t=gr(t,r,e)})}else{t=gr(t,r,n)}}}return t}function mr(e){var t=new FormData;for(var r in e){if(e.hasOwnProperty(r)){var n=e[r];if(Array.isArray(n)){oe(n,function(e){t.append(r,e)})}else{t.append(r,n)}}}return t}function xr(e,t,r){var n={\"HX-Request\":\"true\",\"HX-Trigger\":ee(e,\"id\"),\"HX-Trigger-Name\":ee(e,\"name\"),\"HX-Target\":te(t,\"id\"),\"HX-Current-URL\":re().location.href};Rr(e,\"hx-headers\",false,n);if(r!==undefined){n[\"HX-Prompt\"]=r}if(ae(e).boosted){n[\"HX-Boosted\"]=\"true\"}return n}function yr(t,e){var r=ne(e,\"hx-params\");if(r){if(r===\"none\"){return{}}else if(r===\"*\"){return t}else if(r.indexOf(\"not \")===0){oe(r.substr(4).split(\",\"),function(e){e=e.trim();delete t[e]});return t}else{var n={};oe(r.split(\",\"),function(e){e=e.trim();n[e]=t[e]});return n}}else{return t}}function br(e){return ee(e,\"href\")&&ee(e,\"href\").indexOf(\"#\")>=0}function wr(e,t){var r=t?t:ne(e,\"hx-swap\");var n={swapStyle:ae(e).boosted?\"innerHTML\":Q.config.defaultSwapStyle,swapDelay:Q.config.defaultSwapDelay,settleDelay:Q.config.defaultSettleDelay};if(Q.config.scrollIntoViewOnBoost&&ae(e).boosted&&!br(e)){n[\"show\"]=\"top\"}if(r){var i=D(r);if(i.length>0){for(var a=0;a<i.length;a++){var o=i[a];if(o.indexOf(\"swap:\")===0){n[\"swapDelay\"]=d(o.substr(5))}else if(o.indexOf(\"settle:\")===0){n[\"settleDelay\"]=d(o.substr(7))}else if(o.indexOf(\"transition:\")===0){n[\"transition\"]=o.substr(11)===\"true\"}else if(o.indexOf(\"ignoreTitle:\")===0){n[\"ignoreTitle\"]=o.substr(12)===\"true\"}else if(o.indexOf(\"scroll:\")===0){var s=o.substr(7);var l=s.split(\":\");var u=l.pop();var f=l.length>0?l.join(\":\"):null;n[\"scroll\"]=u;n[\"scrollTarget\"]=f}else if(o.indexOf(\"show:\")===0){var c=o.substr(5);var l=c.split(\":\");var h=l.pop();var f=l.length>0?l.join(\":\"):null;n[\"show\"]=h;n[\"showTarget\"]=f}else if(o.indexOf(\"focus-scroll:\")===0){var v=o.substr(\"focus-scroll:\".length);n[\"focusScroll\"]=v==\"true\"}else if(a==0){n[\"swapStyle\"]=o}else{b(\"Unknown modifier in hx-swap: \"+o)}}}}return n}function Sr(e){return ne(e,\"hx-encoding\")===\"multipart\/form-data\"||h(e,\"form\")&&ee(e,\"enctype\")===\"multipart\/form-data\"}function Er(t,r,n){var i=null;R(r,function(e){if(i==null){i=e.encodeParameters(t,n,r)}});if(i!=null){return i}else{if(Sr(r)){return mr(n)}else{return pr(n)}}}function T(e){return{tasks:[],elts:[e]}}function Cr(e,t){var r=e[0];var n=e[e.length-1];if(t.scroll){var i=null;if(t.scrollTarget){i=ue(r,t.scrollTarget)}if(t.scroll===\"top\"&&(r||i)){i=i||r;i.scrollTop=0}if(t.scroll===\"bottom\"&&(n||i)){i=i||n;i.scrollTop=i.scrollHeight}}if(t.show){var i=null;if(t.showTarget){var a=t.showTarget;if(t.showTarget===\"window\"){a=\"body\"}i=ue(r,a)}if(t.show===\"top\"&&(r||i)){i=i||r;i.scrollIntoView({block:\"start\",behavior:Q.config.scrollBehavior})}if(t.show===\"bottom\"&&(n||i)){i=i||n;i.scrollIntoView({block:\"end\",behavior:Q.config.scrollBehavior})}}}function Rr(e,t,r,n){if(n==null){n={}}if(e==null){return n}var i=te(e,t);if(i){var a=i.trim();var o=r;if(a===\"unset\"){return null}if(a.indexOf(\"javascript:\")===0){a=a.substr(11);o=true}else if(a.indexOf(\"js:\")===0){a=a.substr(3);o=true}if(a.indexOf(\"{\")!==0){a=\"{\"+a+\"}\"}var s;if(o){s=Tr(e,function(){return Function(\"return (\"+a+\")\")()},{})}else{s=E(a)}for(var l in s){if(s.hasOwnProperty(l)){if(n[l]==null){n[l]=s[l]}}}}return Rr(u(e),t,r,n)}function Tr(e,t,r){if(Q.config.allowEval){return t()}else{fe(e,\"htmx:evalDisallowedError\");return r}}function Or(e,t){return Rr(e,\"hx-vars\",true,t)}function qr(e,t){return Rr(e,\"hx-vals\",false,t)}function Hr(e){return le(Or(e),qr(e))}function Lr(t,r,n){if(n!==null){try{t.setRequestHeader(r,n)}catch(e){t.setRequestHeader(r,encodeURIComponent(n));t.setRequestHeader(r+\"-URI-AutoEncoded\",\"true\")}}}function Ar(t){if(t.responseURL&&typeof URL!==\"undefined\"){try{var e=new URL(t.responseURL);return e.pathname+e.search}catch(e){fe(re().body,\"htmx:badResponseUrl\",{url:t.responseURL})}}}function O(e,t){return t.test(e.getAllResponseHeaders())}function Nr(e,t,r){e=e.toLowerCase();if(r){if(r instanceof Element||I(r,\"String\")){return he(e,t,null,null,{targetOverride:p(r),returnPromise:true})}else{return he(e,t,p(r.source),r.event,{handler:r.handler,headers:r.headers,values:r.values,targetOverride:p(r.target),swapOverride:r.swap,select:r.select,returnPromise:true})}}else{return he(e,t,null,null,{returnPromise:true})}}function Ir(e){var t=[];while(e){t.push(e);e=e.parentElement}return t}function kr(e,t,r){var n;var i;if(typeof URL===\"function\"){i=new URL(t,document.location.href);var a=document.location.origin;n=a===i.origin}else{i=t;n=g(t,document.location.origin)}if(Q.config.selfRequestsOnly){if(!n){return false}}return ce(e,\"htmx:validateUrl\",le({url:i,sameHost:n},r))}function he(t,r,n,i,a,e){var o=null;var s=null;a=a!=null?a:{};if(a.returnPromise&&typeof Promise!==\"undefined\"){var l=new Promise(function(e,t){o=e;s=t})}if(n==null){n=re().body}var M=a.handler||Mr;var X=a.select||null;if(!se(n)){ie(o);return l}var u=a.targetOverride||ye(n);if(u==null||u==pe){fe(n,\"htmx:targetError\",{target:te(n,\"hx-target\")});ie(s);return l}var f=ae(n);var c=f.lastButtonClicked;if(c){var h=ee(c,\"formaction\");if(h!=null){r=h}var v=ee(c,\"formmethod\");if(v!=null){if(v.toLowerCase()!==\"dialog\"){t=v}}}var d=ne(n,\"hx-confirm\");if(e===undefined){var D=function(e){return he(t,r,n,i,a,!!e)};var U={target:u,elt:n,path:r,verb:t,triggeringEvent:i,etc:a,issueRequest:D,question:d};if(ce(n,\"htmx:confirm\",U)===false){ie(o);return l}}var g=n;var p=ne(n,\"hx-sync\");var m=null;var x=false;if(p){var F=p.split(\":\");var B=F[0].trim();if(B===\"this\"){g=xe(n,\"hx-sync\")}else{g=ue(n,B)}p=(F[1]||\"drop\").trim();f=ae(g);if(p===\"drop\"&&f.xhr&&f.abortable!==true){ie(o);return l}else if(p===\"abort\"){if(f.xhr){ie(o);return l}else{x=true}}else if(p===\"replace\"){ce(g,\"htmx:abort\")}else if(p.indexOf(\"queue\")===0){var V=p.split(\" \");m=(V[1]||\"last\").trim()}}if(f.xhr){if(f.abortable){ce(g,\"htmx:abort\")}else{if(m==null){if(i){var y=ae(i);if(y&&y.triggerSpec&&y.triggerSpec.queue){m=y.triggerSpec.queue}}if(m==null){m=\"last\"}}if(f.queuedRequests==null){f.queuedRequests=[]}if(m===\"first\"&&f.queuedRequests.length===0){f.queuedRequests.push(function(){he(t,r,n,i,a)})}else if(m===\"all\"){f.queuedRequests.push(function(){he(t,r,n,i,a)})}else if(m===\"last\"){f.queuedRequests=[];f.queuedRequests.push(function(){he(t,r,n,i,a)})}ie(o);return l}}var b=new XMLHttpRequest;f.xhr=b;f.abortable=x;var w=function(){f.xhr=null;f.abortable=false;if(f.queuedRequests!=null&&f.queuedRequests.length>0){var e=f.queuedRequests.shift();e()}};var j=ne(n,\"hx-prompt\");if(j){var S=prompt(j);if(S===null||!ce(n,\"htmx:prompt\",{prompt:S,target:u})){ie(o);w();return l}}if(d&&!e){if(!confirm(d)){ie(o);w();return l}}var E=xr(n,u,S);if(t!==\"get\"&&!Sr(n)){E[\"Content-Type\"]=\"application\/x-www-form-urlencoded\"}if(a.headers){E=le(E,a.headers)}var _=dr(n,t);var C=_.errors;var R=_.values;if(a.values){R=le(R,a.values)}var z=Hr(n);var $=le(R,z);var T=yr($,n);if(Q.config.getCacheBusterParam&&t===\"get\"){T[\"org.htmx.cache-buster\"]=ee(u,\"id\")||\"true\"}if(r==null||r===\"\"){r=re().location.href}var O=Rr(n,\"hx-request\");var W=ae(n).boosted;var q=Q.config.methodsThatUseUrlParams.indexOf(t)>=0;var H={boosted:W,useUrlParams:q,parameters:T,unfilteredParameters:$,headers:E,target:u,verb:t,errors:C,withCredentials:a.credentials||O.credentials||Q.config.withCredentials,timeout:a.timeout||O.timeout||Q.config.timeout,path:r,triggeringEvent:i};if(!ce(n,\"htmx:configRequest\",H)){ie(o);w();return l}r=H.path;t=H.verb;E=H.headers;T=H.parameters;C=H.errors;q=H.useUrlParams;if(C&&C.length>0){ce(n,\"htmx:validation:halted\",H);ie(o);w();return l}var G=r.split(\"#\");var J=G[0];var L=G[1];var A=r;if(q){A=J;var Z=Object.keys(T).length!==0;if(Z){if(A.indexOf(\"?\")<0){A+=\"?\"}else{A+=\"&\"}A+=pr(T);if(L){A+=\"#\"+L}}}if(!kr(n,A,H)){fe(n,\"htmx:invalidPath\",H);ie(s);return l}b.open(t.toUpperCase(),A,true);b.overrideMimeType(\"text\/html\");b.withCredentials=H.withCredentials;b.timeout=H.timeout;if(O.noHeaders){}else{for(var N in E){if(E.hasOwnProperty(N)){var K=E[N];Lr(b,N,K)}}}var I={xhr:b,target:u,requestConfig:H,etc:a,boosted:W,select:X,pathInfo:{requestPath:r,finalRequestPath:A,anchor:L}};b.onload=function(){try{var e=Ir(n);I.pathInfo.responsePath=Ar(b);M(n,I);lr(k,P);ce(n,\"htmx:afterRequest\",I);ce(n,\"htmx:afterOnLoad\",I);if(!se(n)){var t=null;while(e.length>0&&t==null){var r=e.shift();if(se(r)){t=r}}if(t){ce(t,\"htmx:afterRequest\",I);ce(t,\"htmx:afterOnLoad\",I)}}ie(o);w()}catch(e){fe(n,\"htmx:onLoadError\",le({error:e},I));throw e}};b.onerror=function(){lr(k,P);fe(n,\"htmx:afterRequest\",I);fe(n,\"htmx:sendError\",I);ie(s);w()};b.onabort=function(){lr(k,P);fe(n,\"htmx:afterRequest\",I);fe(n,\"htmx:sendAbort\",I);ie(s);w()};b.ontimeout=function(){lr(k,P);fe(n,\"htmx:afterRequest\",I);fe(n,\"htmx:timeout\",I);ie(s);w()};if(!ce(n,\"htmx:beforeRequest\",I)){ie(o);w();return l}var k=or(n);var P=sr(n);oe([\"loadstart\",\"loadend\",\"progress\",\"abort\"],function(t){oe([b,b.upload],function(e){e.addEventListener(t,function(e){ce(n,\"htmx:xhr:\"+t,{lengthComputable:e.lengthComputable,loaded:e.loaded,total:e.total})})})});ce(n,\"htmx:beforeSend\",I);var Y=q?null:Er(b,n,T);b.send(Y);return l}function Pr(e,t){var r=t.xhr;var n=null;var i=null;if(O(r,\/HX-Push:\/i)){n=r.getResponseHeader(\"HX-Push\");i=\"push\"}else if(O(r,\/HX-Push-Url:\/i)){n=r.getResponseHeader(\"HX-Push-Url\");i=\"push\"}else if(O(r,\/HX-Replace-Url:\/i)){n=r.getResponseHeader(\"HX-Replace-Url\");i=\"replace\"}if(n){if(n===\"false\"){return{}}else{return{type:i,path:n}}}var a=t.pathInfo.finalRequestPath;var o=t.pathInfo.responsePath;var s=ne(e,\"hx-push-url\");var l=ne(e,\"hx-replace-url\");var u=ae(e).boosted;var f=null;var c=null;if(s){f=\"push\";c=s}else if(l){f=\"replace\";c=l}else if(u){f=\"push\";c=o||a}if(c){if(c===\"false\"){return{}}if(c===\"true\"){c=o||a}if(t.pathInfo.anchor&&c.indexOf(\"#\")===-1){c=c+\"#\"+t.pathInfo.anchor}return{type:f,path:c}}else{return{}}}function Mr(l,u){var f=u.xhr;var c=u.target;var e=u.etc;var t=u.requestConfig;var h=u.select;if(!ce(l,\"htmx:beforeOnLoad\",u))return;if(O(f,\/HX-Trigger:\/i)){_e(f,\"HX-Trigger\",l)}if(O(f,\/HX-Location:\/i)){er();var r=f.getResponseHeader(\"HX-Location\");var v;if(r.indexOf(\"{\")===0){v=E(r);r=v[\"path\"];delete v[\"path\"]}Nr(\"GET\",r,v).then(function(){tr(r)});return}var n=O(f,\/HX-Refresh:\/i)&&\"true\"===f.getResponseHeader(\"HX-Refresh\");if(O(f,\/HX-Redirect:\/i)){location.href=f.getResponseHeader(\"HX-Redirect\");n&&location.reload();return}if(n){location.reload();return}if(O(f,\/HX-Retarget:\/i)){if(f.getResponseHeader(\"HX-Retarget\")===\"this\"){u.target=l}else{u.target=ue(l,f.getResponseHeader(\"HX-Retarget\"))}}var d=Pr(l,u);var i=f.status>=200&&f.status<400&&f.status!==204;var g=f.response;var a=f.status>=400;var p=Q.config.ignoreTitle;var o=le({shouldSwap:i,serverResponse:g,isError:a,ignoreTitle:p},u);if(!ce(c,\"htmx:beforeSwap\",o))return;c=o.target;g=o.serverResponse;a=o.isError;p=o.ignoreTitle;u.target=c;u.failed=a;u.successful=!a;if(o.shouldSwap){if(f.status===286){at(l)}R(l,function(e){g=e.transformResponse(g,f,l)});if(d.type){er()}var s=e.swapOverride;if(O(f,\/HX-Reswap:\/i)){s=f.getResponseHeader(\"HX-Reswap\")}var v=wr(l,s);if(v.hasOwnProperty(\"ignoreTitle\")){p=v.ignoreTitle}c.classList.add(Q.config.swappingClass);var m=null;var x=null;var y=function(){try{var e=document.activeElement;var t={};try{t={elt:e,start:e?e.selectionStart:null,end:e?e.selectionEnd:null}}catch(e){}var r;if(h){r=h}if(O(f,\/HX-Reselect:\/i)){r=f.getResponseHeader(\"HX-Reselect\")}if(d.type){ce(re().body,\"htmx:beforeHistoryUpdate\",le({history:d},u));if(d.type===\"push\"){tr(d.path);ce(re().body,\"htmx:pushedIntoHistory\",{path:d.path})}else{rr(d.path);ce(re().body,\"htmx:replacedInHistory\",{path:d.path})}}var n=T(c);je(v.swapStyle,c,l,g,n,r);if(t.elt&&!se(t.elt)&&ee(t.elt,\"id\")){var i=document.getElementById(ee(t.elt,\"id\"));var a={preventScroll:v.focusScroll!==undefined?!v.focusScroll:!Q.config.defaultFocusScroll};if(i){if(t.start&&i.setSelectionRange){try{i.setSelectionRange(t.start,t.end)}catch(e){}}i.focus(a)}}c.classList.remove(Q.config.swappingClass);oe(n.elts,function(e){if(e.classList){e.classList.add(Q.config.settlingClass)}ce(e,\"htmx:afterSwap\",u)});if(O(f,\/HX-Trigger-After-Swap:\/i)){var o=l;if(!se(l)){o=re().body}_e(f,\"HX-Trigger-After-Swap\",o)}var s=function(){oe(n.tasks,function(e){e.call()});oe(n.elts,function(e){if(e.classList){e.classList.remove(Q.config.settlingClass)}ce(e,\"htmx:afterSettle\",u)});if(u.pathInfo.anchor){var e=re().getElementById(u.pathInfo.anchor);if(e){e.scrollIntoView({block:\"start\",behavior:\"auto\"})}}if(n.title&&!p){var t=C(\"title\");if(t){t.innerHTML=n.title}else{window.document.title=n.title}}Cr(n.elts,v);if(O(f,\/HX-Trigger-After-Settle:\/i)){var r=l;if(!se(l)){r=re().body}_e(f,\"HX-Trigger-After-Settle\",r)}ie(m)};if(v.settleDelay>0){setTimeout(s,v.settleDelay)}else{s()}}catch(e){fe(l,\"htmx:swapError\",u);ie(x);throw e}};var b=Q.config.globalViewTransitions;if(v.hasOwnProperty(\"transition\")){b=v.transition}if(b&&ce(l,\"htmx:beforeTransition\",u)&&typeof Promise!==\"undefined\"&&document.startViewTransition){var w=new Promise(function(e,t){m=e;x=t});var S=y;y=function(){document.startViewTransition(function(){S();return w})}}if(v.swapDelay>0){setTimeout(y,v.swapDelay)}else{y()}}if(a){fe(l,\"htmx:responseError\",le({error:\"Response Status Error Code \"+f.status+\" from \"+u.pathInfo.requestPath},u))}}var Xr={};function Dr(){return{init:function(e){return null},onEvent:function(e,t){return true},transformResponse:function(e,t,r){return e},isInlineSwap:function(e){return false},handleSwap:function(e,t,r,n){return false},encodeParameters:function(e,t,r){return null}}}function Ur(e,t){if(t.init){t.init(r)}Xr[e]=le(Dr(),t)}function Fr(e){delete Xr[e]}function Br(e,r,n){if(e==undefined){return r}if(r==undefined){r=[]}if(n==undefined){n=[]}var t=te(e,\"hx-ext\");if(t){oe(t.split(\",\"),function(e){e=e.replace(\/ \/g,\"\");if(e.slice(0,7)==\"ignore:\"){n.push(e.slice(7));return}if(n.indexOf(e)<0){var t=Xr[e];if(t&&r.indexOf(t)<0){r.push(t)}}})}return Br(u(e),r,n)}var Vr=false;re().addEventListener(\"DOMContentLoaded\",function(){Vr=true});function jr(e){if(Vr||re().readyState===\"complete\"){e()}else{re().addEventListener(\"DOMContentLoaded\",e)}}function _r(){if(Q.config.includeIndicatorStyles!==false){re().head.insertAdjacentHTML(\"beforeend\",\"<style>                      .\"+Q.config.indicatorClass+\"{opacity:0}                      .\"+Q.config.requestClass+\" .\"+Q.config.indicatorClass+\"{opacity:1; transition: opacity 200ms ease-in;}                      .\"+Q.config.requestClass+\".\"+Q.config.indicatorClass+\"{opacity:1; transition: opacity 200ms ease-in;}                    <\/style>\")}}function zr(){var e=re().querySelector(\'meta[name=\"htmx-config\"]\');if(e){return E(e.content)}else{return null}}function $r(){var e=zr();if(e){Q.config=le(Q.config,e)}}jr(function(){$r();_r();var e=re().body;zt(e);var t=re().querySelectorAll(\"[hx-trigger=\'restored\'],[data-hx-trigger=\'restored\']\");e.addEventListener(\"htmx:abort\",function(e){var t=e.target;var r=ae(t);if(r&&r.xhr){r.xhr.abort()}});const r=window.onpopstate?window.onpopstate.bind(window):null;window.onpopstate=function(e){if(e.state&&e.state.htmx){ar();oe(t,function(e){ce(e,\"htmx:restored\",{document:re(),triggerEvent:ce})})}else{if(r){r(e)}}};setTimeout(function(){ce(e,\"htmx:load\",{});e=null},0)});return Q}()});
`;

/* eslint-disable */
/**
 *
 * @param {FetchEvent} event
 */
function main(event) {  
  if (event.request.url.endsWith('/messages')) {
    const message = messages[Math.floor(Math.random() * messages.length)];
    return new Response(message, {
      headers: {
        'Content-Type': 'plain/text'
      }
    });
  }
   
  return new Response(`
    <!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- 
    - primary meta tags 
  -->
  <title>Grilli - Amazing & Delicious Food</title>
  <meta name="title" content="Grilli - Amazing & Delicious Food">
  <meta name="description" content="This is a Restaurant html template made by Arpayan">

  <!-- 
    - favicon
  -->
  <link rel="shortcut icon" href="./favicon.svg" type="image/svg+xml">

  <!-- 
    - google font link
  -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&family=Forum&display=swap" rel="stylesheet">

  <!-- 
    - custom css link
  -->
  <!-- <link rel="stylesheet" href="style.css"> -->

  <!-- 
    - preload images
  -->
  <link rel="preload" as="image" href="https://raw.githubusercontent.com/codewithsadee/grilli/refs/heads/master/assets/images/hero-slider-1.jpg">
  <link rel="preload" as="image" href="https://github.com/codewithsadee/grilli/blob/master/assets/images/hero-slider-2.jpg?raw=true">
  <link rel="preload" as="image" href="https://github.com/codewithsadee/grilli/blob/master/assets/images/hero-slider-3.jpg?raw=true">
  <style>
    /*-----------------------------------*\
  #index.css
\*-----------------------------------*/

/**
 * copyright 2022 codewithsadee
 */





/*-----------------------------------*\
  #CUSTOM PROPERTY
\*-----------------------------------*/

:root {

  /**
   * COLORS
   */

  --gold-crayola: hsl(38, 61%, 73%);
  --quick-silver: hsla(0, 0%, 65%, 1);
  --davys-grey: hsla(30, 3%, 34%, 1);
  --smoky-black-1: hsla(40, 12%, 5%, 1);
  --smoky-black-2: hsla(30, 8%, 5%, 1);
  --smoky-black-3: hsla(0, 3%, 7%, 1);
  --eerie-black-1: hsla(210, 4%, 9%, 1);
  --eerie-black-2: hsla(210, 4%, 11%, 1);
  --eerie-black-3: hsla(180, 2%, 8%, 1);
  --eerie-black-4: hsla(0, 0%, 13%, 1);
  --white: hsla(0, 0%, 100%, 1);
  --white-alpha-20: hsla(0, 0%, 100%, 0.2);
  --white-alpha-10: hsla(0, 0%, 100%, 0.1);
  --black: hsla(0, 0%, 0%, 1);
  --black-alpha-80: hsla(0, 0%, 0%, 0.8);
  --black-alpha-15: hsla(0, 0%, 0%, 0.15);

  /**
   * GRADIENT COLOR
   */

  --loading-text-gradient: linear-gradient(90deg, transparent 0% 16.66%, var(--smoky-black-3) 33.33% 50%,  transparent 66.66% 75%);
  --gradient-1: linear-gradient(to top,hsla(0, 0%, 0%, 0.9),hsla(0, 0%, 0%, 0.7),transparent);

  /**
   * TYPOGRAPHY
   */

  /* font-family */
  --fontFamily-forum: 'Forum', cursive;
  --fontFamily-dm_sans: 'DM Sans', sans-serif;

  /* font-size */
  --fontSize-display-1: calc(1.3rem + 6.7vw);
  --fontSize-headline-1: calc(2rem + 2.5vw);
  --fontSize-headline-2: calc(1.3rem + 2.4vw);
  --fontSize-title-1: calc(1.6rem + 1.2vw);
  --fontSize-title-2: 2.2rem;
  --fontSize-title-3: 2.1rem;
  --fontSize-title-4: calc(1.6rem + 1.2vw);
  --fontSize-body-1: 2.4rem;
  --fontSize-body-2: 1.6rem;
  --fontSize-body-3: 1.8rem;
  --fontSize-body-4: 1.6rem;
  --fontSize-label-1: 1.4rem;
  --fontSize-label-2: 1.2rem;

  /* font-weight */
  --weight-regular: 400;
  --weight-bold: 700;

  /* line-height */
  --lineHeight-1: 1em;
  --lineHeight-2: 1.2em;
  --lineHeight-3: 1.5em;
  --lineHeight-4: 1.6em;
  --lineHeight-5: 1.85em;
  --lineHeight-6: 1.4em;

  /* letter-spacing */
  --letterSpacing-1: 0.15em;
  --letterSpacing-2: 0.4em;
  --letterSpacing-3: 0.2em;
  --letterSpacing-4: 0.3em;
  --letterSpacing-5: 3px;

  /**
   * SPACING
   */

  --section-space: 70px;

  /**
   * SHADOW
   */

  --shadow-1: 0px 0px 25px 0px hsla(0, 0%, 0%, 0.25);

  /**
   * BORDER RADIUS
   */

  --radius-24: 24px;
  --radius-circle: 50%;

  /**
   * TRANSITION
   */

  --transition-1: 250ms ease;
  --transition-2: 500ms ease;
  --transition-3: 1000ms ease;

}





/*-----------------------------------*\
  #RESET
\*-----------------------------------*/

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

li { list-style: none; }

a,
img,
data,
span,
input,
button,
select,
ion-icon,
textarea { display: block; }

a {
  color: inherit;
  text-decoration: none;
}

img { height: auto; }

input,
button,
select,
textarea {
  background: none;
  border: none;
  font: inherit;
}

input,
select,
textarea {
  width: 100%;
  outline: none;
}

button { cursor: pointer; }

address { font-style: normal; }

html {
  font-size: 10px;
  scroll-behavior: smooth;
}

body {
  background-color: var(--eerie-black-1);
  color: var(--white);
  font-family: var(--fontFamily-dm_sans);
  font-size: var(--fontSize-body-4);
  font-weight: var(--weight-regular);
  line-height: var(--lineHeight-5);
  overflow: hidden;
  height: 300vh;
}

body.loaded { overflow: overlay; }

body.nav-active { overflow: hidden; }

::-webkit-scrollbar { width: 5px; }

::-webkit-scrollbar-track { background-color: transparent; }

::-webkit-scrollbar-thumb { background-color: var(--gold-crayola); }





/*-----------------------------------*\
  #TYPOGRAPHY
\*-----------------------------------*/

.display-1,
.headline-1,
.headline-2,
.title-1,
.title-2,
.title-3,
.title-4 {
  color: var(--white);
  font-family: var(--fontFamily-forum);
  font-weight: var(--weight-regular);
  line-height: var(--lineHeight-2);
}

.display-1 {
  font-size: var(--fontSize-display-1);
  line-height: var(--lineHeight-1);
}

.headline-1 { font-size: var(--fontSize-headline-1); }

.headline-2 {
  font-size: var(--fontSize-headline-2);
  line-height: var(--lineHeight-6);
}

.title-1 { font-size: var(--fontSize-title-1); }

.title-2 { font-size: var(--fontSize-title-2); }

.title-3 { font-size: var(--fontSize-title-3); }

.title-4 { font-size: var(--fontSize-title-4); }

.body-1 {
  font-size: var(--fontSize-body-1);
  line-height: var(--lineHeight-6);
}

.body-2 {
  font-size: var(--fontSize-body-2);
  line-height: var(--lineHeight-4);
}

.body-3 { font-size: var(--fontSize-body-3); }

.body-4 { font-size: var(--fontSize-body-4); }

.label-1 { font-size: var(--fontSize-label-1); }

.label-2 { font-size: var(--fontSize-label-2); }





/*-----------------------------------*\
  #REUSED STYLE
\*-----------------------------------*/

.container { padding-inline: 16px; }

.separator {
  width: 8px;
  height: 8px;
  border: 1px solid var(--gold-crayola);
  transform: rotate(45deg);
}

.contact-label { font-weight: var(--weight-bold); }

.contact-number {
  color: var(--gold-crayola);
  max-width: max-content;
  margin-inline: auto;
}

.hover-underline {
  position: relative;
  max-width: max-content;
}

.hover-underline::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 5px;
  border-block: 1px solid var(--gold-crayola);
  transform: scaleX(0.2);
  opacity: 0;
  transition: var(--transition-2);
}

.hover-underline:is(:hover, :focus-visible)::after {
  transform: scaleX(1);
  opacity: 1;
}

.contact-number::after { bottom: -5px; }

.text-center { text-align: center; }

.img-cover {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.section-subtitle {
  position: relative;
  color: var(--gold-crayola);
  font-weight: var(--weight-bold);
  text-transform: uppercase;
  letter-spacing: var(--letterSpacing-2);
  margin-block-end: 12px;
}

.section-subtitle::after {
  content: url('../images/separator.svg');
  display: block;
  width: 100px;
  margin-inline: auto;
  margin-block-start: 5px;
}

.btn {
  position: relative;
  color: var(--gold-crayola);
  font-size: var(--fontSize-label-2);
  font-weight: var(--weight-bold);
  text-transform: uppercase;
  letter-spacing: var(--letterSpacing-5);
  max-width: max-content;
  border: 2px solid var(--gold-crayola);
  padding: 12px 45px;
  overflow: hidden;
  z-index: 1;
}

.btn::before {
  content: "";
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  width: 200%;
  height: 200%;
  border-radius: var(--radius-circle);
  background-color: var(--gold-crayola);
  transition: var(--transition-2);
  z-index: -1;
}

.btn .text { transition: var(--transition-1); }

.btn .text-2 {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  min-width: max-content;
  color: var(--smoky-black-1);
}

.btn:is(:hover, :focus-visible)::before { bottom: -50%; }

.btn:is(:hover, :focus-visible) .text-1 { transform: translateY(-40px); }

.btn:is(:hover, :focus-visible) .text-2 {
  top: 50%;
  transform: translate(-50%, -50%);
}

.btn-secondary {
  background-color: var(--gold-crayola);
  color: var(--black);
}

.btn-secondary::before { background-color: var(--smoky-black-1); }

.btn-secondary .text-2 { color: var(--white); }

.has-before,
.has-after {
  position: relative;
  z-index: 1;
}

.has-before::before,
.has-after::after {
  content: "";
  position: absolute;
}

.section {
  position: relative;
  padding-block: var(--section-space);
  overflow: hidden;
  z-index: 1;
}

.bg-black-10 { background-color: var(--smoky-black-2); }

.grid-list {
  display: grid;
  gap: 40px;
}

.hover\:shine { position: relative; }

.hover\:shine::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background-image: linear-gradient(to right, transparent 0%, #fff6 100%);
  transform: skewX(-0.08turn) translateX(-180%);
}

.hover\:shine:is(:hover, :focus-within)::after {
  transform: skewX(-0.08turn) translateX(275%);
  transition: var(--transition-3);
}

.img-holder {
  aspect-ratio: var(--width) / var(--height);
  overflow: hidden;
  background-color: var(--eerie-black-4);
}

.btn-text {
  color: var(--gold-crayola);
  padding-block-end: 4px;
  margin-inline: auto;
  text-transform: uppercase;
  letter-spacing: var(--letterSpacing-3);
  font-weight: var(--weight-bold);
  transition: var(--transition-1);
}

.btn-text:is(:hover, :focus-visible) { color: var(--white); }

.shape {
  display: none;
  position: absolute;
  max-width: max-content;
  z-index: -1;
}

.w-100 { width: 100%; }

.move-anim { animation: move 5s linear infinite; }

@keyframes move {
  0%,
  100% { transform: translateY(0); }

  50% { transform: translateY(30px); }
}

.has-bg-image {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.input-field {
  background-color: var(--eerie-black-2);
  color: var(--white);
  height: 56px;
  padding: 10px 20px;
  border: 1px solid var(--white-alpha-10);
  margin-block-end: 20px;
  outline: none;
  transition: border-color var(--transition-2);
}

.input-field::placeholder { color: inherit; }

.input-field:focus { border-color: var(--gold-crayola); }

.icon-wrapper {
  position: relative;
  margin-block-end: 20px;
}

.icon-wrapper .input-field {
  margin-block-end: 0;
  padding-inline-start: 40px;
  appearance: none;
  cursor: pointer;
}

.icon-wrapper ion-icon {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.4rem;
  --ionicon-stroke-width: 50px;
  pointer-events: none;
}

.icon-wrapper ion-icon:first-child { left: 15px; }

.icon-wrapper ion-icon:last-child { right: 10px; }





/*-----------------------------------*\
  #PRELOAD
\*-----------------------------------*/

.preload {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--gold-crayola);
  z-index: 10;
  display: grid;
  place-content: center;
  justify-items: center;
  transition: var(--transition-2);
}

.preload > * { transition: var(--transition-1); }

.preload.loaded > * { opacity: 0; }

.preload.loaded {
  transition-delay: 250ms;
  transform: translateY(100%);
}

.circle {
  width: 112px;
  height: 112px;
  border-radius: var(--radius-circle);
  border: 3px solid var(--white);
  border-block-start-color: var(--smoky-black-3);
  margin-block-end: 45px;
  animation: rotate360 1s linear infinite;
}

@keyframes rotate360 {
  0% { transform: rotate(0); }
  100% { transform: rotate(1turn); }
}

.preload .text {
  background-image: var(--loading-text-gradient);
  background-size: 500%;
  font-size: calc(2rem + 3vw);
  font-weight: var(--weight-bold);
  line-height: 1em;
  text-transform: uppercase;
  letter-spacing: 16px;
  padding-inline-start: 16px;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-stroke: 0.5px var(--eerie-black-3);
  animation: loadingText linear 2s infinite;
}

@keyframes loadingText {
  0% { background-position: 100%; }
  100% { background-position: 0%; }
}





/*-----------------------------------*\
  #TOPBAR
\*-----------------------------------*/

.topbar { display: none; }





/*-----------------------------------*\
  #HEADER
\*-----------------------------------*/

.header .btn { display: none; }

.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: transparent;
  padding-block: 40px;
  z-index: 4;
  border-block-end: 1px solid transparent;
  transition: var(--transition-1);
}

.header.active {
  padding-block: 20px;
  background-color: var(--eerie-black-4);
  border-color: var(--black-alpha-15);
}

.header.hide {
  transform: translateY(-100%);
  transition-delay: 250ms;
}

.header .container {
  padding-inline: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
}

.nav-open-btn {
  padding: 12px;
  padding-inline-end: 0;
}

.nav-open-btn .line {
  width: 30px;
  height: 2px;
  background-color: var(--white);
  margin-block: 4px;
  transform-origin: left;
  animation: menuBtn 400ms ease-in-out alternate infinite;
}

@keyframes menuBtn {
  0% { transform: scaleX(1); }
  100% { transform: scaleX(0.5); }
}

.nav-open-btn .line-2 { animation-delay: 150ms; }

.nav-open-btn .line-3 { animation-delay: 300ms; }

.navbar {
  position: fixed;
  background-color: var(--smoky-black-1);
  top: 0;
  left: -360px;
  bottom: 0;
  max-width: 360px;
  width: 100%;
  padding-inline: 30px;
  padding-block-end: 50px;
  overflow-y: auto;
  visibility: hidden;
  z-index: 2;
  transition: var(--transition-2);
}

.navbar.active {
  visibility: visible;
  transform: translateX(360px);
}

.navbar .close-btn {
  color: var(--white);
  border: 1px solid currentColor;
  padding: 4px;
  border-radius: var(--radius-circle);
  margin-inline-start: auto;
  margin-block: 30px 20px;
}

.navbar .close-btn ion-icon { --ionicon-stroke-width: 40px; }

.navbar .close-btn:is(:hover, :focus-visible) { color: var(--gold-crayola); }

.navbar .logo {
  max-width: max-content;
  margin-inline: auto;
  margin-block-end: 60px;
}

.navbar-list {
  border-block-end: 1px solid var(--white-alpha-20);
  margin-block-end: 100px;
}

.navbar-item { border-block-start: 1px solid var(--white-alpha-20); }

.navbar-link {
  position: relative;
  font-size: var(--fontSize-label-2);
  text-transform: uppercase;
  padding-block: 10px;
  max-width: unset;
}

.navbar-link::after { display: none; }

.navbar-link .span { transition: var(--transition-1); }

.navbar-link:is(:hover, :focus-visible, .active) .span {
  color: var(--gold-crayola);
  transform: translateX(20px);
}

.navbar-link .separator {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%) rotate(45deg);
  opacity: 0;
  transition: var(--transition-1);
}

.navbar-link:is(:hover, :focus-visible, .active) .separator { opacity: 1; }

.navbar-title { margin-block-end: 15px; }

.navbar-text { margin-block: 10px; }

.navbar .body-4 { color: var(--quick-silver); }

.sidebar-link { transition: var(--transition-1); }

.sidebar-link:is(:hover, :focus-visible) { color: var(--gold-crayola); }

.navbar .text-center .separator {
  margin-block: 30px;
  margin-inline: auto;
}

.navbar .contact-label { margin-block-end: 10px; }

.navbar::-webkit-scrollbar-thumb { background-color: var(--white-alpha-10); }

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: var(--black-alpha-80);
  opacity: 0;
  pointer-events: none;
  transition: var(--transition-2);
  z-index: 1;
}

.overlay.active {
  opacity: 1;
  pointer-events: all;
}





/*-----------------------------------*\
  #HERO
\*-----------------------------------*/

.hero .slider-btn { display: none; }

.hero {
  position: relative;
  padding-block: 120px;
  min-height: 100vh;
  overflow: hidden;
  z-index: 1;
}

.hero .slider-item {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  display: grid;
  place-content: center;
  padding-block-start: 100px;
  opacity: 0;
  visibility: hidden;
  transition: var(--transition-3);
  z-index: 1;
}

.hero .slider-item.active {
  opacity: 1;
  visibility: visible;
}

.hero .slider-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: scale(1.15);
  pointer-events: none;
  user-select: none;
  z-index: -1;
}

.hero .slider-item.active .slider-bg {
  animation: smoothScale 7s linear forwards;
}

@keyframes smoothScale {
  0% { transform: scale(1); }
  100% { transform: scale(1.15); }
}

.hero .section-subtitle::after { margin-block: 14px 20px; }

.hero-text { margin-block: 10px 40px; }

.hero .btn { margin-inline: auto; }

.hero-btn {
  position: absolute;
  bottom: 15px;
  right: 15px;
  z-index: 2;
  background-color: var(--gold-crayola);
  width: 110px;
  height: 110px;
  padding: 12px;
  transform: scale(0.6);
}

.hero-btn img {
  margin-inline: auto;
  margin-block-end: 6px;
}

.hero-btn .span {
  color: var(--black);
  font-weight: var(--weight-bold);
  text-transform: uppercase;
  letter-spacing: var(--letterSpacing-1);
  line-height: var(--lineHeight-3);
}

.hero-btn::after {
  inset: 0;
  border: 1px solid var(--gold-crayola);
  animation: rotate360 15s linear infinite;
}

.slider-reveal {
  transform: translateY(30px);
  opacity: 0;
}

.hero .slider-item.active .slider-reveal {
  animation: sliderReveal 1s ease forwards;
}

@keyframes sliderReveal {
  0% {
    transform: translateY(30px);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

.hero .slider-item.active .section-subtitle { animation-delay: 500ms; }

.hero .slider-item.active .hero-title { animation-delay: 1000ms; }

.hero .slider-item.active .hero-text { animation-delay: 1.5s; }

.hero .slider-item.active .btn { animation-delay: 2s; }





/*-----------------------------------*\
  #SERVICE
\*-----------------------------------*/

.service .section-title { margin-block-end: 16px; }

.service .section-text { margin-block-end: 40px; }

.service-card { overflow: hidden; }

.service-card .has-before {
  padding-block: 30px;
  margin-block-end: 26px;
  z-index: 1;
}

.service-card .has-before::before {
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 140px;
  height: 100%;
  background-image: url('../images/img-pattern.svg');
  background-position: center;
  background-size: cover;
  background-repeat: repeat;
  transition: var(--transition-2);
  transition-delay: 0;
  z-index: -1;
  will-change: transform;
}

.service-card:is(:hover, :focus-within) .has-before::before {
  transform: rotateY(0.5turn) translateX(50%);
  transition-delay: 300ms;
}

.service-card .card-banner { transition: var(--transition-2); }

.service-card:is(:hover, :focus-within) .card-banner { transform: scale(1.05); }

.service .card-title { margin-block-end: 12px; }





/*-----------------------------------*\
  #ABOUT
\*-----------------------------------*/

.about .section-text { margin-block: 15px 30px; }

.about .btn {
  margin-inline: auto;
  margin-block-start: 26px;
}

.about .container {
  display: grid;
  gap: 120px;
}

.about-banner {
  position: relative;
  margin-block-end: 120px;
}

.about-banner > .w-100 { padding-inline-start: 50px; }

.about .abs-img { position: absolute; }

.about .abs-img::before { z-index: -1; }

.about .abs-img-1 {
  bottom: -120px;
  left: 0;
  width: 150px;
  padding-block: 50px;
}

.about .abs-img-2 {
  top: -65px;
  right: 0;
  overflow: hidden;
}

.about .abs-img-1::before {
  top: 0;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 140px;
  background-image: url('../images/img-pattern.svg');
  background-repeat: repeat;
}

.about .abs-img-2::before {
  inset: 0;
  background-image: url('../images/badge-2-bg.png');
  background-repeat: no-repeat;
  background-size: contain;
  animation: rotate360 15s linear infinite;
}





/*-----------------------------------*\
  #SPECIAL DISH
\*-----------------------------------*/

.special-dish-content { padding-block: 70px; }

.special-dish .abs-img {
  margin-inline: auto;
  margin-block-end: 12px;
}

.special-dish .section-text { margin-block: 16px 40px; }

.special-dish-content .wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-block-end: 40px;
}

.special-dish-content .del {
  text-decoration: none;
  color: var(--davys-grey);
}

.special-dish-content .span { color: var(--gold-crayola); }

.special-dish .btn { margin-inline: auto; }





/*-----------------------------------*\
  #MENU
\*-----------------------------------*/

.menu .section-title { margin-block-end: 40px; }

.menu .grid-list { margin-block-end: 50px; }

.menu-card {
  display: flex;
  align-items: flex-start;
  gap: 20px;
}

.hover\:card .card-banner { background-color: var(--gold-crayola); }

.hover\:card .card-banner .img-cover { transition: var(--transition-2); }

.hover\:card:is(:hover, :focus-within) .card-banner .img-cover {
  opacity: 0.7;
  transform: scale(1.05);
}

.menu-card .card-banner {
  flex-shrink: 0;
  border-radius: var(--radius-24);
}

.menu-card .card-title { transition: var(--transition-1); }

.menu-card .card-title:is(:hover, :focus-visible) { color: var(--gold-crayola); }

.menu-card .badge {
  background-color: var(--gold-crayola);
  color: var(--eerie-black-1);
  font-family: var(--fontFamily-forum);
  max-width: max-content;
  line-height: var(--lineHeight-6);
  text-transform: uppercase;
  padding-inline: 10px;
  margin-block-start: 10px;
}

.menu-card .span {
  color: var(--gold-crayola);
  margin-block: 10px;
}

.menu-card .card-text {
  color: var(--quick-silver);
  line-height: var(--lineHeight-4);
}

.menu-text .span {
  display: inline-block;
  color: var(--gold-crayola);
}

.menu .btn {
  margin-inline: auto;
  margin-block-start: 26px;
}

.menu .shape {
  display: block;
  width: 70%;
}

.menu .shape-2 {
  top: 0;
  left: 0;
}

.menu .shape-3 {
  bottom: 0;
  right: 0;
}





/*-----------------------------------*\
  #TESTIMONIALS
\*-----------------------------------*/

.testi {
  padding-block-end: 340px;
  position: static;
}

.testi .quote {
  font-size: 7rem;
  font-family: var(--fontFamily-forum);
  line-height: 0.7em;
}

.testi .wrapper {
  display: flex;
  justify-content: center;
  gap: 2px;
  margin-block: 40px 50px;
}

.testi .separator { animation: rotate360 15s linear infinite; }

.profile .img {
  margin-inline: auto;
  border-radius: var(--radius-circle);
  margin-block-end: 15px;
}

.testi .profile-name {
  color: var(--gold-crayola);
  font-weight: var(--weight-bold);
  text-transform: uppercase;
  letter-spacing: var(--letterSpacing-3);
}





/*-----------------------------------*\
  #RESERVATION
\*-----------------------------------*/

.reservation-form { margin-block-start: -270px; }

.form-text { margin-block-end: 40px; }

.form-text .link {
  display: inline;
  color: var(--gold-crayola);
}

.form-right .headline-1 { margin-block-end: 40px; }

.form-right .contact-label { margin-block-end: 5px; }

.form-right .separator { margin: 20px auto; }

.form-right .body-4 {
  color: var(--quick-silver);
  line-height: var(--lineHeight-3);
}

.form-right .body-4:not(:last-child) { margin-block-end: 25px; }

.form-left,
.form-right { padding: 40px 20px 30px; }

.input-field[type="date"] {
  text-transform: uppercase;
  padding-inline-end: 10px;
}

.input-field[type="date"]::-webkit-calendar-picker-indicator { opacity: 0; }

textarea.input-field {
  resize: none;
  height: 140px;
  padding-block: 20px;
  line-height: var(--lineHeight-1);
}

.form-left .btn {
  max-width: 100%;
  width: 100%;
}

.form-right {
  background-repeat: repeat;
  background-position: top left;
}





/*-----------------------------------*\
  #FEATURES
\*-----------------------------------*/

.features .section-title { margin-block-end: 40px; }

.feature-card { padding: 30px 20px 40px; }

.feature-item:nth-child(2n+1) .feature-card { background-color: var(--eerie-black-3); }

.feature-item:nth-child(2n) .feature-card { background-color: var(--smoky-black-3); }

.feature-card .card-icon {
  max-width: max-content;
  margin-inline: auto;
  transition: var(--transition-2);
}

.feature-card:hover .card-icon { transform: scale(-1) rotate(180deg); }

.feature-card .card-title { margin-block: 20px; }

.feature-card .card-text {
  color: var(--quick-silver);
  line-height: var(--lineHeight-6);
}





/*-----------------------------------*\
  #EVENT
\*-----------------------------------*/

.event .section-title { margin-block-end: 40px; }

.event-card {
  position: relative;
  overflow: hidden;
}

.event-card .card-content {
  background-image: var(--gradient-1);
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 35px 35px 25px;
}

.event-card .publish-date {
  position: absolute;
  top: 30px;
  left: 25px;
  padding: 5px 10px;
  color: var(--gold-crayola);
  background-color: var(--black);
  font-weight: var(--weight-bold);
  letter-spacing: var(--letterSpacing-1);
  line-height: 14px;
}

.event-card .card-subtitle {
  color: var(--gold-crayola);
  text-transform: uppercase;
  font-weight: var(--weight-bold);
  letter-spacing: var(--letterSpacing-2);
  margin-block-end: 5px;
}

.event-card .card-banner .img-cover { transition: var(--transition-2); }

.event-card:is(:hover, :focus-within) .img-cover { transform: scale(1.05); }

.event .btn {
  margin-inline: auto;
  margin-block-start: 40px;
}





/*-----------------------------------*\
  #FOOTER
\*-----------------------------------*/

.footer-top { margin-block-end: 70px; }

.footer-brand {
  position: relative;
  padding: 50px 40px;
  background: var(--smoky-black-1) url("../images/footer-form-bg.png");
  background-position: center top;
  background-repeat: repeat;
}

.footer-brand::before,
.footer-brand::after {
  top: 0;
  width: 15px;
  height: 100%;
  background-image: url("../images/footer-form-pattern.svg");
}

.footer-brand::before { left: 0; }

.footer-brand::after { right: 0; }

.footer-brand .logo {
  max-width: max-content;
  margin-inline: auto;
  margin-block-end: 40px;
}

.footer-brand :is(.body-4, .label-1) {
  color: var(--quick-silver);
  line-height: var(--lineHeight-3);
}

.footer-brand .contact-link {
  margin-block: 6px;
  transition: var(--transition-1);
}

.footer-brand .contact-link:is(:hover, :focus-visible) { color: var(--gold-crayola); }

.footer-brand .wrapper {
  display: flex;
  justify-content: center;
  gap: 2px;
  margin-block: 40px 25px;
}

.footer-brand .separator { animation: rotate360 15s linear infinite; }

.footer-brand .label-1 { margin-block-end: 30px; }

.footer-brand .label-1 .span {
  display: inline;
  color: var(--white);
}

.footer-brand .icon-wrapper .input-field { cursor: text; }

.footer-brand .btn { min-width: 100%; }

.footer-list {
  display: grid;
  gap: 20px;
}

.footer-link {
  color: var(--quick-silver);
  font-weight: var(--weight-bold);
  text-transform: uppercase;
  letter-spacing: var(--letterSpacing-4);
  margin-inline: auto;
  transition: var(--transition-1);
}

.footer-link:is(:hover, :focus-visible) { color: var(--gold-crayola); }

.copyright {
  color: var(--quick-silver);
  line-height: var(--lineHeight-3);
}

.copyright .link {
  display: inline;
  color: var(--gold-crayola);
  text-decoration: underline;
}





/*-----------------------------------*\
  #BACK TO TOP
\*-----------------------------------*/

.back-top-btn {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: var(--gold-crayola);
  color: var(--smoky-black-1);
  font-size: 22px;
  width: 50px;
  height: 50px;
  border-radius: var(--radius-circle);
  display: grid;
  place-items: center;
  box-shadow: var(--shadow-1);
  transition: var(--transition-1);
  opacity: 0;
  visibility: hidden;
  z-index: 4;
}

.back-top-btn:is(:hover, :focus-visible) {
  background-color: var(--white);
  color: var(--gold-crayola);
}

.back-top-btn.active {
  opacity: 1;
  visibility: visible;
}





/*-----------------------------------*\
  #MEDIA QUERIES
\*-----------------------------------*/

/**
 * responsive for larger than 575px screen
 */

@media (min-width: 575px) {

  /**
   * CUSTOM PROPERTY
   */

  :root {

    /**
     * typography
     */

    --fontSize-body-2: 2rem;

  }



  /**
   * REUSED STYLE
   */

  :is(.service, .about) .section-text {
    max-width: 420px;
    margin-inline: auto;
  }

  .contact-number { --fontSize-body-1: 3rem; }



  /**
   * TOPBAR
   */

  .topbar {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding-block: 10px;
    border-block-end: 1px solid var(--white-alpha-20);
    z-index: 4;
    transition: var(--transition-1);
  }

  .topbar:has(~ .header.active) { transform: translateY(-100%); }

  .topbar-item:not(.link),
  .topbar .separator { display: none; }

  .topbar .container,
  .topbar-item {
    display: flex;
    align-items: center;
  }

  .topbar .container {
    justify-content: center;
    gap: 30px;
  }

  .topbar-item { gap: 6px; }

  .topbar-item ion-icon { --ionicon-stroke-width: 60px; }

  .topbar-item .span { font-size: var(--fontSize-label-1); }

  .topbar .link { transition: var(--transition-1); }

  .topbar .link:is(:hover, :focus-visible) { color: var(--gold-crayola); }



  /**
   * HEADER
   */

  .header { top: 51px; }

  .header.active { top: 0; }

  .header .btn {
    display: block;
    margin-inline-start: auto;
  }



  /**
   * HERO
   */

  .hero-btn { transform: scale(0.7); }



  /**
   * SERVICE
   */

  .service .container {
    max-width: 420px;
    margin-inline: auto;
  }



  /**
   * ABOUT
   */

  .about .container { gap: 80px; }

  .about-banner > .w-100 { padding-inline-start: 90px; }

  .about .abs-img-1 { width: 285px; }

  .about .contact-number { --fontSize-body-1: 2.4rem; }



  /**
   * MENU
   */

  .menu-card .title-wrapper {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 15px;
  }

  .menu-card .badge { margin-block-start: 0; }

  .menu-card .span {
    flex-grow: 1;
    display: flex;
    align-items: center;
    gap: 15px;
    position: relative;
  }

  .menu-card .span::before {
    content: "";
    height: 6px;
    flex-grow: 1;
    border-block: 1px solid var(--white-alpha-20);
  }



  /**
   * EVENT
   */

  .event .container {
    max-width: 420px;
    margin-inline: auto;
  }



  /**
   * FOOTER
   */

  .footer-brand > * {
    max-width: 460px;
    margin-inline: auto;
  }

  .footer .input-wrapper { position: relative; }

  .footer .input-field {
    margin-block-end: 0;
    padding-inline-end: 205px;
  }

  .footer-brand .btn {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    min-width: max-content;
  }

}





/**
 * responsive for larger than 768px screen
 */

@media (min-width: 768px) {

  /**
   * REUSED STYLE
   */

  .grid-list { grid-template-columns: 1fr 1fr; }

  :is(.service, .event) .container { max-width: 820px; }

  :is(.service, .event) .grid-list li:last-child {
    grid-column: 1 / 3;
    width: calc(50% - 20px);
    margin-inline: auto;
  }



  /**
   * HEADER
   */

  .navbar-list { margin-inline: 30px; }



  /**
   * HERO
   */

  .hero .slider-btn {
    display: grid;
    position: absolute;
    z-index: 1;
    color: var(--gold-crayola);
    font-size: 2.4rem;
    border: 1px solid var(--gold-crayola);
    width: 45px;
    height: 45px;
    place-items: center;
    top: 50%;
    transform: translateY(-50%) rotate(45deg);
    transition: var(--transition-1);
  }

  .hero .slider-btn ion-icon { transform: rotate(-45deg); }

  .hero .slider-btn.prev { left: 30px; }

  .hero .slider-btn.next { right: 30px; }

  .hero .slider-btn:is(:hover, :focus-visible) {
    background-color: var(--gold-crayola);
    color: var(--black);
  }



  /**
   * RESERVATION
   */

  .reservation .input-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 20px;
  }

  .reservation .input-wrapper:nth-child(4) {
    grid-template-columns: repeat(3, 1fr);
  }



  /**
   * FOOTER
   */

  .footer-brand { grid-column: 1 / 3; }

}





/**
 * responsive for larger than 992px screen
 */

@media (min-width: 992px) {

  /**
   * CUSTOM PROPERTY
   */

  :root {

    /**
     * spacing
     */

    --section-space: 100px;

  }



  /**
   * REUSED STYLE
   */

  :is(.service, .event) .container { max-width: unset; }

  :is(.service, .event) .grid-list { grid-template-columns: repeat(3, 1fr); }

  :is(.service, .event) .grid-list li:last-child {
    grid-column: auto;
    width: 100%;
  }



  /**
   * TOPBAR
   */

  .topbar-item:not(.link) { display: flex; }

  .topbar .item-2 { margin-inline-end: auto; }



  /**
   * SERVICE
   */

  .service .shape { display: block; }

  .service .shape-1 {
    bottom: 0;
    left: 0;
  }

  .service .shape-2 {
    top: 0;
    right: 0;
  }



  /**
   * ABOUT
   */

  .about .container {
    grid-template-columns: 0.7fr 1fr;
    gap: 30px;
  }



  /**
   * SPECIAL DISH
   */

  .special-dish {
    display: grid;
    grid-template-columns: 1fr 1fr;
    text-align: left;
  }

  .special-dish-content { padding-inline: 50px 25px; }

  .special-dish-content .container { position: relative; }

  .special-dish .section-subtitle::after,
  .special-dish .btn { margin-inline: 0; }

  .special-dish-content .wrapper { justify-content: flex-start; }

  .special-dish .abs-img {
    position: absolute;
    top: 10px;
    left: -40px;
    animation: move 5s linear infinite;
  }



  /**
   * MENU
   */

  .menu .grid-list {
    position: relative;
    column-gap: 90px;
  }

  .menu .grid-list::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    height: 100%;
    border-inline-start: 1px solid var(--white-alpha-20);
  }



  /**
   * TESTIMONIALS
   */

  .testi-text {
    max-width: 910px;
    margin-inline: auto;
  }



  /**
   * RESERVATION
   */

  .reservation-form {
    display: grid;
    grid-template-columns: 1fr 0.5fr;
  }



  /**
   * FOOTER
   */

  .footer .grid-list {
    grid-template-columns: 0.45fr 1fr 0.45fr;
    align-items: center;
  }

  .footer-brand {
    grid-column: auto;
    order: 1;
    padding-block: 100px;
  }

  .footer-list:last-child { order: 2; }

}





/**
 * responsive for larger than 1200px screen
 */

@media (min-width: 1200px) {

  /**
   * CUSTOM PROPERTY
   */

  :root {

    /**
     * typography
     */

    --fontSize-title-2: 2.5rem;

  }



  /**
   * REUSED STYLE
   */

  .container,
  :is(.service, .event) .container {
    max-width: 1200px;
    width: 100%;
    margin-inline: auto;
  }



  /**
   * TOPBAR
   */

  .topbar .container { max-width: unset; }

  .topbar .separator { display: block; }



  /**
   * HEADER
   */

  .nav-open-btn,
  .navbar > *:not(.navbar-list),
  .header .overlay { display: none; }

  .header .container { max-width: unset; }

  .navbar,
  .navbar.active,
  .navbar-list { all: unset; }

  .navbar,
  .navbar.active { margin-inline: auto 20px; }

  .navbar-list {
    display: flex;
    gap: 30px;
  }

  .navbar-item { border-block-start: none; }

  .navbar .separator { display: none; }

  .navbar-link:is(:hover, :focus-visible, .active) .span {
    transform: unset;
  }

  .navbar-link {
    font-weight: var(--weight-bold);
    letter-spacing: var(--letterSpacing-1);
  }

  .navbar-link::after { display: block; }

  .navbar-link.active::after {
    transform: scaleX(1);
    opacity: 1;
  }

  .header .btn { margin-inline-start: 0; }



  /**
   * HERO
   */

  .hero { height: 880px; }

  .hero-btn {
    bottom: 50px;
    right: 50px;
    transform: scale(1);
  }



  /**
   * SERVICE
   */

  .service .grid-list { gap: 150px; }

  .service .grid-list li:nth-child(2n+1) { transform: translateY(-160px); }

  .service .section-text { margin-block-end: 75px; }



  /**
   * ABOUT
   */

  .about { padding-block: 170px 100px; }



  /**
   * SPECIAL DISH
   */

  .special-dish-content {
    padding: 225px 120px;
    padding-inline-end: 0;
  }

  .special-dish-content .container {
    max-width: 460px;
    margin-inline: 0;
  }



  /**
   * MENU
   */

  .menu .grid-list {
    gap: 55px 200px;
    margin-block-end: 55px;
  }



  /**
   * TESTIMONIALS
   */

  .form-left,
  .form-right { padding: 75px 60px; }




  /**
   * FEATURES
   */

  .features .grid-list { grid-template-columns: repeat(4, 1fr); }

}





/**
 * responsive for larger than 1400px screen
 */

@media (min-width: 1400px) {

  /**
   * HEADER
   */

  .navbar { margin-inline: auto; }



  /**
   * ABOUT
   */

  .about-content { padding-inline-end: 90px; }

  .about .shape {
    display: block;
    top: 46%;
    left: 0;
  }



  /**
   * SPECIAL DISH
   */

  .special-dish {
    overflow: visible;
    position: relative;
  }

  .special-dish .shape {
    display: block;
    right: 0;
    z-index: 1;
  }

  .special-dish .shape-1 { top: 45%; }

  .special-dish .shape-2 {
    bottom: 0;
    transform: translateY(50%);
    width: max-content;
  }



  /**
   * FEATURES
   */

  .features { overflow: visible; }

  .features .shape { display: block; }

  .features .shape-1 {
    top: -100px;
    right: 0;
  }

  .features .shape-2 {
    bottom: 80px;
    left: 0;
  }

}
  </style>

</head>

<body id="top">

  <!-- 
    - #PRELOADER
  -->

  <div class="preload" data-preaload>
    <div class="circle"></div>
    <p class="text">Grilli</p>
  </div>





  <!-- 
    - #TOP BAR
  -->

  <div class="topbar">
    <div class="container">

      <address class="topbar-item">
        <div class="icon">
          <ion-icon name="location-outline" aria-hidden="true"></ion-icon>
        </div>

        <span class="span">
          Restaurant St, Delicious City, London 9578, UK
        </span>
      </address>

      <div class="separator"></div>

      <div class="topbar-item item-2">
        <div class="icon">
          <ion-icon name="time-outline" aria-hidden="true"></ion-icon>
        </div>

        <span class="span">Daily : 8.00 am to 10.00 pm</span>
      </div>

      <a href="tel:+11234567890" class="topbar-item link">
        <div class="icon">
          <ion-icon name="call-outline" aria-hidden="true"></ion-icon>
        </div>

        <span class="span">+1 123 456 7890</span>
      </a>

      <div class="separator"></div>

      <a href="mailto:booking@restaurant.com" class="topbar-item link">
        <div class="icon">
          <ion-icon name="mail-outline" aria-hidden="true"></ion-icon>
        </div>

        <span class="span">booking@restaurant.com</span>
      </a>

    </div>
  </div>





  <!-- 
    - #HEADER
  -->

  <header class="header" data-header>
    <div class="container">

      <a href="#" class="logo">
        <img src="https://raw.githubusercontent.com/codewithsadee/grilli/e23428321f14d6841067f44901ca90223cbd0ed1/assets/images/logo.svg" width="160" height="50" alt="Grilli - Home">
      </a>

      <nav class="navbar" data-navbar>

        <button class="close-btn" aria-label="close menu" data-nav-toggler>
          <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
        </button>

        <a href="#" class="logo">
          <img src="https://raw.githubusercontent.com/codewithsadee/grilli/e23428321f14d6841067f44901ca90223cbd0ed1/assets/images/logo.svg" width="160" height="50" alt="Grilli - Home">
        </a>

        <ul class="navbar-list">

          <li class="navbar-item">
            <a href="#home" class="navbar-link hover-underline active">
              <div class="separator"></div>

              <span class="span">Home</span>
            </a>
          </li>

          <li class="navbar-item">
            <a href="#menu" class="navbar-link hover-underline">
              <div class="separator"></div>

              <span class="span">Menus</span>
            </a>
          </li>

          <li class="navbar-item">
            <a href="#about" class="navbar-link hover-underline">
              <div class="separator"></div>

              <span class="span">About Us</span>
            </a>
          </li>

          <li class="navbar-item">
            <a href="#" class="navbar-link hover-underline">
              <div class="separator"></div>

              <span class="span">Our Chefs</span>
            </a>
          </li>

          <li class="navbar-item">
            <a href="#" class="navbar-link hover-underline">
              <div class="separator"></div>

              <span class="span">Contact</span>
            </a>
          </li>

        </ul>

        <div class="text-center">
          <p class="headline-1 navbar-title">Visit Us</p>

          <address class="body-4">
            Restaurant St, Delicious City, <br>
            London 9578, UK
          </address>

          <p class="body-4 navbar-text">Open: 9.30 am - 2.30pm</p>

          <a href="mailto:booking@grilli.com" class="body-4 sidebar-link">booking@grilli.com</a>

          <div class="separator"></div>

          <p class="contact-label">Booking Request</p>

          <a href="tel:+88123123456" class="body-1 contact-number hover-underline">
            +88-123-123456
          </a>
        </div>

      </nav>

      <a href="#" class="btn btn-secondary">
        <span class="text text-1">Find A Table</span>

        <span class="text text-2" aria-hidden="true">Find A Table</span>
      </a>

      <button class="nav-open-btn" aria-label="open menu" data-nav-toggler>
        <span class="line line-1"></span>
        <span class="line line-2"></span>
        <span class="line line-3"></span>
      </button>

      <div class="overlay" data-nav-toggler data-overlay></div>

    </div>
  </header>





  <main>
    <article>

      <!-- 
        - #HERO
      -->

      <section class="hero text-center" aria-label="home" id="home">

        <ul class="hero-slider" data-hero-slider>

          <li class="slider-item active" data-hero-slider-item>

            <div class="slider-bg">
              <img src="https://github.com/codewithsadee/grilli/blob/master/assets/images/hero-slider-1.jpg?raw=true" width="1880" height="950" alt="" class="img-cover">
            </div>

            <p class="label-2 section-subtitle slider-reveal">Tradational & Hygine</p>

            <h1 class="display-1 hero-title slider-reveal">
              For the love of <br>
              delicious food
            </h1>

            <p class="body-2 hero-text slider-reveal">
              Come with family & feel the joy of mouthwatering food
            </p>

            <a href="#" class="btn btn-primary slider-reveal">
              <span class="text text-1">View Our Menu</span>

              <span class="text text-2" aria-hidden="true">View Our Menu</span>
            </a>

          </li>

          <li class="slider-item" data-hero-slider-item>

            <div class="slider-bg">
              <img src="https://github.com/codewithsadee/grilli/blob/master/assets/images/hero-slider-2.jpg?raw=true" width="1880" height="950" alt="" class="img-cover">
            </div>

            <p class="label-2 section-subtitle slider-reveal">delightful experience</p>

            <h1 class="display-1 hero-title slider-reveal">
              Flavors Inspired by <br>
              the Seasons
            </h1>

            <p class="body-2 hero-text slider-reveal">
              Come with family & feel the joy of mouthwatering food
            </p>

            <a href="#" class="btn btn-primary slider-reveal">
              <span class="text text-1">View Our Menu</span>

              <span class="text text-2" aria-hidden="true">View Our Menu</span>
            </a>

          </li>

          <li class="slider-item" data-hero-slider-item>

            <div class="slider-bg">
              <img src="https://github.com/codewithsadee/grilli/blob/master/assets/images/hero-slider-3.jpg?raw=true" width="1880" height="950" alt="" class="img-cover">
            </div>

            <p class="label-2 section-subtitle slider-reveal">amazing & delicious</p>

            <h1 class="display-1 hero-title slider-reveal">
              Where every flavor <br>
              tells a story
            </h1>

            <p class="body-2 hero-text slider-reveal">
              Come with family & feel the joy of mouthwatering food
            </p>

            <a href="#" class="btn btn-primary slider-reveal">
              <span class="text text-1">View Our Menu</span>

              <span class="text text-2" aria-hidden="true">View Our Menu</span>
            </a>

          </li>

        </ul>

        <button class="slider-btn prev" aria-label="slide to previous" data-prev-btn>
          <ion-icon name="chevron-back"></ion-icon>
        </button>

        <button class="slider-btn next" aria-label="slide to next" data-next-btn>
          <ion-icon name="chevron-forward"></ion-icon>
        </button>

        <a href="#" class="hero-btn has-after">
          <img src="https://github.com/codewithsadee/grilli/blob/master/assets/images/hero-icon.png?raw=true" width="48" height="48" alt="booking icon">

          <span class="label-2 text-center span">Book A Table</span>
        </a>

      </section>





      <!-- 
        - #SERVICE
      -->

      <section class="section service bg-black-10 text-center" aria-label="service">
        <div class="container">

          <p class="section-subtitle label-2">Flavors For Royalty</p>

          <h2 class="headline-1 section-title">We Offer Top Notch</h2>

          <p class="section-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been the industrys
            standard dummy text ever.
          </p>

          <ul class="grid-list">

            <li>
              <div class="service-card">

                <a href="#" class="has-before hover:shine">
                  <figure class="card-banner img-holder" style="--width: 285; --height: 336;">
                    <img src="https://github.com/codewithsadee/grilli/blob/master/assets/images/service-1.jpg?raw=true" width="285" height="336" loading="lazy" alt="Breakfast"
                      class="img-cover">
                  </figure>
                </a>

                <div class="card-content">

                  <h3 class="title-4 card-title">
                    <a href="#">Breakfast</a>
                  </h3>

                  <a href="#" class="btn-text hover-underline label-2">View Menu</a>

                </div>

              </div>
            </li>

            <li>
              <div class="service-card">

                <a href="#" class="has-before hover:shine">
                  <figure class="card-banner img-holder" style="--width: 285; --height: 336;">
                    <img src="https://github.com/codewithsadee/grilli/blob/master/assets/images/service-2.jpg?raw=true" width="285" height="336" loading="lazy" alt="Appetizers"
                      class="img-cover">
                  </figure>
                </a>

                <div class="card-content">

                  <h3 class="title-4 card-title">
                    <a href="#">Appetizers</a>
                  </h3>

                  <a href="#" class="btn-text hover-underline label-2">View Menu</a>

                </div>

              </div>
            </li>

            <li>
              <div class="service-card">

                <a href="#" class="has-before hover:shine">
                  <figure class="card-banner img-holder" style="--width: 285; --height: 336;">
                    <img src="https://github.com/codewithsadee/grilli/blob/master/assets/images/service-3.jpg?raw=true" width="285" height="336" loading="lazy" alt="Drinks"
                      class="img-cover">
                  </figure>
                </a>

                <div class="card-content">

                  <h3 class="title-4 card-title">
                    <a href="#">Drinks</a>
                  </h3>

                  <a href="#" class="btn-text hover-underline label-2">View Menu</a>

                </div>

              </div>
            </li>

          </ul>

          <img src="https://github.com/codewithsadee/grilli/blob/master/assets/images/shape-1.png?raw=true" width="246" height="412" loading="lazy" alt="shape"
            class="shape shape-1 move-anim">
          <img src="https://github.com/codewithsadee/grilli/blob/master/assets/images/shape-2.png?raw=true" width="343" height="345" loading="lazy" alt="shape"
            class="shape shape-2 move-anim">

        </div>
      </section>





      <!-- 
        - #ABOUT
      -->

      <section class="section about text-center" aria-labelledby="about-label" id="about">
        <div class="container">

          <div class="about-content">

            <p class="label-2 section-subtitle" id="about-label">Our Story</p>

            <h2 class="headline-1 section-title">Every Fla vor Tells a Story</h2>

            <p class="section-text">
              Lorem Ipsum is simply dummy text of the printingand typesetting industry lorem Ipsum has been the
              industrys standard dummy text ever since the when an unknown printer took a galley of type and scrambled
              it to make a type specimen book It has survived not only five centuries, but also the leap into.
            </p>

            <div class="contact-label">Book Through Call</div>

            <a href="tel:+804001234567" class="body-1 contact-number hover-underline">+80 (400) 123 4567</a>

            <a href="#" class="btn btn-primary">
              <span class="text text-1">Read More</span>

              <span class="text text-2" aria-hidden="true">Read More</span>
            </a>

          </div>

          <figure class="about-banner">

            <img src="https://github.com/codewithsadee/grilli/blob/master/assets/images/about-banner.jpg?raw=true" width="570" height="570" loading="lazy" alt="about banner"
              class="w-100" data-parallax-item data-parallax-speed="1">

            <div class="abs-img abs-img-1 has-before" data-parallax-item data-parallax-speed="1.75">
              <img src="./assets/images/about-abs-image.jpghttps://github.com/codewithsadee/grilli/blob/master/assets/images/about-abs-image.jpg?raw=true-100">
            </div>

            <div class="abs-img abs-img-2 has-before">
              <img src="https://github.com/codewithsadee/grilli/blob/master/assets/images/badge-2.png?raw=true" width="133" height="134" loading="lazy" alt="">
            </div>

          </figure>

          <img src="https://github.com/codewithsadee/grilli/blob/master/assets/images/shape-3.png?raw=true" width="197" height="194" loading="lazy" alt="" class="shape">

        </div>
      </section>





      <!-- 
        - #SPECIAL DISH
      -->

      <section class="special-dish text-center" aria-labelledby="dish-label">

        <div class="special-dish-banner">
          <img src="https://github.com/codewithsadee/grilli/blob/master/assets/images/special-dish-banner.jpg?raw=true" width="940" height="900" loading="lazy" alt="special dish"
            class="img-cover">
        </div>

        <div class="special-dish-content bg-black-10">
          <div class="container">

            <img src="https://github.com/codewithsadee/grilli/blob/master/assets/images/badge-1.png?raw=true" width="28" height="41" loading="lazy" alt="badge" class="abs-img">

            <p class="section-subtitle label-2">Special Dish</p>

            <h2 class="headline-1 section-title">Lobster Tortellini</h2>

            <p class="section-text">
              Lorem Ipsum is simply dummy text of the printingand typesetting industry lorem Ipsum has been the
              industrys standard dummy text ever since the when an unknown printer took a galley of type.
            </p>

            <div class="wrapper">
              <del class="del body-3">$40.00</del>

              <span class="span body-1">$20.00</span>
            </div>

            <a href="#" class="btn btn-primary">
              <span class="text text-1">View All Menu</span>

              <span class="text text-2" aria-hidden="true">View All Menu</span>
            </a>

          </div>
        </div>

        <img src="https://github.com/codewithsadee/grilli/blob/master/assets/images/shape-4.png?raw=true" width="179" height="359" loading="lazy" alt="" class="shape shape-1">

        <img src="https://github.com/codewithsadee/grilli/blob/master/assets/images/shape-9.png?raw=true" width="351" height="462" loading="lazy" alt="" class="shape shape-2">

      </section>





      <!-- 
        - #MENU
      -->

      <section class="section menu" aria-label="menu-label" id="menu">
        <div class="container">

          <p class="section-subtitle text-center label-2">Special Selection</p>

          <h2 class="headline-1 section-title text-center">Delicious Menu</h2>

          <ul class="grid-list">

            <li>
              <div class="menu-card hover:card">

                <figure class="card-banner img-holder" style="--width: 100; --height: 100;">
                  <img src="https://github.com/codewithsadee/grilli/blob/master/assets/images/menu-1.png?raw=true" width="100" height="100" loading="lazy" alt="Greek Salad"
                    class="img-cover">
                </figure>

                <div>

                  <div class="title-wrapper">
                    <h3 class="title-3">
                      <a href="#" class="card-title">Greek Salad</a>
                    </h3>

                    <span class="badge label-1">Seasonal</span>

                    <span class="span title-2">$25.50</span>
                  </div>

                  <p class="card-text label-1">
                    Tomatoes, green bell pepper, sliced cucumber onion, olives, and feta cheese.
                  </p>

                </div>

              </div>
            </li>

            <li>
              <div class="menu-card hover:card">

                <figure class="card-banner img-holder" style="--width: 100; --height: 100;">
                  <img src="https://github.com/codewithsadee/grilli/blob/master/assets/images/menu-2.png?raw=true" width="100" height="100" loading="lazy" alt="Lasagne"
                    class="img-cover">
                </figure>

                <div>

                  <div class="title-wrapper">
                    <h3 class="title-3">
                      <a href="#" class="card-title">Lasagne</a>
                    </h3>

                    <span class="span title-2">$40.00</span>
                  </div>

                  <p class="card-text label-1">
                    Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices
                  </p>

                </div>

              </div>
            </li>

            <li>
              <div class="menu-card hover:card">

                <figure class="card-banner img-holder" style="--width: 100; --height: 100;">
                  <img src="https://github.com/codewithsadee/grilli/blob/master/assets/images/menu-3.png?raw=true" width="100" height="100" loading="lazy" alt="Butternut Pumpkin"
                    class="img-cover">
                </figure>

                <div>

                  <div class="title-wrapper">
                    <h3 class="title-3">
                      <a href="#" class="card-title">Butternut Pumpkin</a>
                    </h3>

                    <span class="span title-2">$10.00</span>
                  </div>

                  <p class="card-text label-1">
                    Typesetting industry lorem Lorem Ipsum is simply dummy text of the priand.
                  </p>

                </div>

              </div>
            </li>

            <li>
              <div class="menu-card hover:card">

                <figure class="card-banner img-holder" style="--width: 100; --height: 100;">
                  <img src="https://github.com/codewithsadee/grilli/blob/master/assets/images/menu-4.png?raw=true" width="100" height="100" loading="lazy" alt="Tokusen Wagyu"
                    class="img-cover">
                </figure>

                <div>

                  <div class="title-wrapper">
                    <h3 class="title-3">
                      <a href="#" class="card-title">Tokusen Wagyu</a>
                    </h3>

                    <span class="badge label-1">New</span>

                    <span class="span title-2">$39.00</span>
                  </div>

                  <p class="card-text label-1">
                    Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices.
                  </p>

                </div>

              </div>
            </li>

            <li>
              <div class="menu-card hover:card">

                <figure class="card-banner img-holder" style="--width: 100; --height: 100;">
                  <img src="https://github.com/codewithsadee/grilli/blob/master/assets/images/menu-5.png?raw=true" width="100" height="100" loading="lazy" alt="Olivas Rellenas"
                    class="img-cover">
                </figure>

                <div>

                  <div class="title-wrapper">
                    <h3 class="title-3">
                      <a href="#" class="card-title">Olivas Rellenas</a>
                    </h3>

                    <span class="span title-2">$25.00</span>
                  </div>

                  <p class="card-text label-1">
                    Avocados with crab meat, red onion, crab salad stuffed red bell pepper and green bell pepper.
                  </p>

                </div>

              </div>
            </li>

            <li>
              <div class="menu-card hover:card">

                <figure class="card-banner img-holder" style="--width: 100; --height: 100;">
                  <img src="https://github.com/codewithsadee/grilli/blob/master/assets/images/menu-6.png?raw=true" width="100" height="100" loading="lazy" alt="Opu Fish"
                    class="img-cover">
                </figure>

                <div>

                  <div class="title-wrapper">
                    <h3 class="title-3">
                      <a href="#" class="card-title">Opu Fish</a>
                    </h3>

                    <span class="span title-2">$49.00</span>
                  </div>

                  <p class="card-text label-1">
                    Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices
                  </p>

                </div>

              </div>
            </li>

          </ul>

          <p class="menu-text text-center">
            During winter daily from <span class="span">7:00 pm</span> to <span class="span">9:00 pm</span>
          </p>

          <a href="#" class="btn btn-primary">
            <span class="text text-1">View All Menu</span>

            <span class="text text-2" aria-hidden="true">View All Menu</span>
          </a>

          <img src="https://github.com/codewithsadee/grilli/blob/master/assets/images/shape-5.png?raw=true" width="921" height="1036" loading="lazy" alt="shape"
            class="shape shape-2 move-anim">
          <img src="https://github.com/codewithsadee/grilli/blob/master/assets/images/shape-6.png?raw=true" width="343" height="345" loading="lazy" alt="shape"
            class="shape shape-3 move-anim">

        </div>
      </section>





      <!-- 
        - #TESTIMONIALS
      -->

      <section class="section testi text-center has-bg-image"
        style="background-image: url('./assets/images/testimonial-bg.jpg')" aria-label="testimonials">
        <div class="container">

          <div class="quote">”</div>

          <p class="headline-2 testi-text">
            I wanted to thank you for inviting me down for that amazing dinner the other night. The food was
            extraordinary.
          </p>

          <div class="wrapper">
            <div class="separator"></div>
            <div class="separator"></div>
            <div class="separator"></div>
          </div>

          <div class="profile">
            <img src="https://github.com/codewithsadee/grilli/blob/master/assets/images/testi-avatar.jpg?raw=true" width="100" height="100" loading="lazy" alt="Sam Jhonson"
              class="img">

            <p class="label-2 profile-name">Sam Jhonson</p>
          </div>

        </div>
      </section>





      <!-- 
        - #RESERVATION
      -->

      <section class="reservation">
        <div class="container">

          <div class="form reservation-form bg-black-10">

            <form action="" class="form-left">

              <h2 class="headline-1 text-center">Online Reservation</h2>

              <p class="form-text text-center">
                Booking request <a href="tel:+88123123456" class="link">+88-123-123456</a>
                or fill out the order form
              </p>

              <div class="input-wrapper">
                <input type="text" name="name" placeholder="Your Name" autocomplete="off" class="input-field">

                <input type="tel" name="phone" placeholder="Phone Number" autocomplete="off" class="input-field">
              </div>

              <div class="input-wrapper">

                <div class="icon-wrapper">
                  <ion-icon name="person-outline" aria-hidden="true"></ion-icon>

                  <select name="person" class="input-field">
                    <option value="1-person">1 Person</option>
                    <option value="2-person">2 Person</option>
                    <option value="3-person">3 Person</option>
                    <option value="4-person">4 Person</option>
                    <option value="5-person">5 Person</option>
                    <option value="6-person">6 Person</option>
                    <option value="7-person">7 Person</option>
                  </select>

                  <ion-icon name="chevron-down" aria-hidden="true"></ion-icon>
                </div>

                <div class="icon-wrapper">
                  <ion-icon name="calendar-clear-outline" aria-hidden="true"></ion-icon>

                  <input type="date" name="reservation-date" class="input-field">

                  <ion-icon name="chevron-down" aria-hidden="true"></ion-icon>
                </div>

                <div class="icon-wrapper">
                  <ion-icon name="time-outline" aria-hidden="true"></ion-icon>

                  <select name="person" class="input-field">
                    <option value="08:00am">08 : 00 am</option>
                    <option value="09:00am">09 : 00 am</option>
                    <option value="010:00am">10 : 00 am</option>
                    <option value="011:00am">11 : 00 am</option>
                    <option value="012:00am">12 : 00 am</option>
                    <option value="01:00pm">01 : 00 pm</option>
                    <option value="02:00pm">02 : 00 pm</option>
                    <option value="03:00pm">03 : 00 pm</option>
                    <option value="04:00pm">04 : 00 pm</option>
                    <option value="05:00pm">05 : 00 pm</option>
                    <option value="06:00pm">06 : 00 pm</option>
                    <option value="07:00pm">07 : 00 pm</option>
                    <option value="08:00pm">08 : 00 pm</option>
                    <option value="09:00pm">09 : 00 pm</option>
                    <option value="10:00pm">10 : 00 pm</option>
                  </select>

                  <ion-icon name="chevron-down" aria-hidden="true"></ion-icon>
                </div>

              </div>

              <textarea name="message" placeholder="Message" autocomplete="off" class="input-field"></textarea>

              <button type="submit" class="btn btn-secondary">
                <span class="text text-1">Book A Table</span>

                <span class="text text-2" aria-hidden="true">Book A Table</span>
              </button>

            </form>

            <div class="form-right text-center" style="background-image: url('./assets/images/form-pattern.png')">

              <h2 class="headline-1 text-center">Contact Us</h2>

              <p class="contact-label">Booking Request</p>

              <a href="tel:+88123123456" class="body-1 contact-number hover-underline">+88-123-123456</a>

              <div class="separator"></div>

              <p class="contact-label">Location</p>

              <address class="body-4">
                Restaurant St, Delicious City, <br>
                London 9578, UK
              </address>

              <p class="contact-label">Lunch Time</p>

              <p class="body-4">
                Monday to Sunday <br>
                11.00 am - 2.30pm
              </p>

              <p class="contact-label">Dinner Time</p>

              <p class="body-4">
                Monday to Sunday <br>
                05.00 pm - 10.00pm
              </p>

            </div>

          </div>

        </div>
      </section>





      <!-- 
        - #FEATURES
      -->

      <section class="section features text-center" aria-label="features">
        <div class="container">

          <p class="section-subtitle label-2">Why Choose Us</p>

          <h2 class="headline-1 section-title">Our Strength</h2>

          <ul class="grid-list">

            <li class="feature-item">
              <div class="feature-card">

                <div class="card-icon">
                  <img src="https://github.com/codewithsadee/grilli/blob/master/assets/images/features-icon-1.png?raw=true" width="100" height="80" loading="lazy" alt="icon">
                </div>

                <h3 class="title-2 card-title">Hygienic Food</h3>

                <p class="label-1 card-text">Lorem Ipsum is simply dummy printing and typesetting.</p>

              </div>
            </li>

            <li class="feature-item">
              <div class="feature-card">

                <div class="card-icon">
                  <img src="https://github.com/codewithsadee/grilli/blob/master/assets/images/features-icon-2.png?raw=true" width="100" height="80" loading="lazy" alt="icon">
                </div>

                <h3 class="title-2 card-title">Fresh Environment</h3>

                <p class="label-1 card-text">Lorem Ipsum is simply dummy printing and typesetting.</p>

              </div>
            </li>

            <li class="feature-item">
              <div class="feature-card">

                <div class="card-icon">
                  <img src="https://github.com/codewithsadee/grilli/blob/master/assets/images/features-icon-3.png?raw=true" width="100" height="80" loading="lazy" alt="icon">
                </div>

                <h3 class="title-2 card-title">Skilled Chefs</h3>

                <p class="label-1 card-text">Lorem Ipsum is simply dummy printing and typesetting.</p>

              </div>
            </li>

            <li class="feature-item">
              <div class="feature-card">

                <div class="card-icon">
                  <img src="https://github.com/codewithsadee/grilli/blob/master/assets/images/features-icon-4.png?raw=true" width="100" height="80" loading="lazy" alt="icon">
                </div>

                <h3 class="title-2 card-title">Event & Party</h3>

                <p class="label-1 card-text">Lorem Ipsum is simply dummy printing and typesetting.</p>

              </div>
            </li>

          </ul>

          <img src="https://github.com/codewithsadee/grilli/blob/master/assets/images/shape-7.png?raw=true" width="208" height="178" loading="lazy" alt="shape"
            class="shape shape-1">

          <img src="https://github.com/codewithsadee/grilli/blob/master/assets/images/shape-8.png?raw=true" width="120" height="115" loading="lazy" alt="shape"
            class="shape shape-2">

        </div>
      </section>





      <!-- 
        - #EVENT
      -->

      <section class="section event bg-black-10" aria-label="event">
        <div class="container">

          <p class="section-subtitle label-2 text-center">Recent Updates</p>

          <h2 class="section-title headline-1 text-center">Upcoming Event</h2>

          <ul class="grid-list">

            <li>
              <div class="event-card has-before hover:shine">

                <div class="card-banner img-holder" style="--width: 350; --height: 450;">
                  <img src="https://github.com/codewithsadee/grilli/blob/master/assets/images/event-1.jpg?raw=true" width="350" height="450" loading="lazy"
                    alt="Flavour so good you’ll try to eat with your eyes." class="img-cover">

                  <time class="publish-date label-2" datetime="2022-09-15">15/09/2022</time>
                </div>

                <div class="card-content">
                  <p class="card-subtitle label-2 text-center">Food, Flavour</p>

                  <h3 class="card-title title-2 text-center">
                    Flavour so good you’ll try to eat with your eyes.
                  </h3>
                </div>

              </div>
            </li>

            <li>
              <div class="event-card has-before hover:shine">

                <div class="card-banner img-holder" style="--width: 350; --height: 450;">
                  <img src="https://github.com/codewithsadee/grilli/blob/master/assets/images/event-2.jpg?raw=true" width="350" height="450" loading="lazy"
                    alt="Flavour so good you’ll try to eat with your eyes." class="img-cover">

                  <time class="publish-date label-2" datetime="2022-09-08">08/09/2022</time>
                </div>

                <div class="card-content">
                  <p class="card-subtitle label-2 text-center">Healthy Food</p>

                  <h3 class="card-title title-2 text-center">
                    Flavour so good you’ll try to eat with your eyes.
                  </h3>
                </div>

              </div>
            </li>

            <li>
              <div class="event-card has-before hover:shine">

                <div class="card-banner img-holder" style="--width: 350; --height: 450;">
                  <img src="https://github.com/codewithsadee/grilli/blob/master/assets/images/event-3.jpg?raw=true" width="350" height="450" loading="lazy"
                    alt="Flavour so good you’ll try to eat with your eyes." class="img-cover">

                  <time class="publish-date label-2" datetime="2022-09-03">03/09/2022</time>
                </div>

                <div class="card-content">
                  <p class="card-subtitle label-2 text-center">Recipie</p>

                  <h3 class="card-title title-2 text-center">
                    Flavour so good you’ll try to eat with your eyes.
                  </h3>
                </div>

              </div>
            </li>

          </ul>

          <a href="#" class="btn btn-primary">
            <span class="text text-1">View Our Blog</span>

            <span class="text text-2" aria-hidden="true">View Our Blog</span>
          </a>

        </div>
      </section>

    </article>
  </main>





  <!-- 
    - #FOOTER
  -->

  <footer class="footer section has-bg-image text-center"
    style="background-image: url('./assets/images/footer-bg.jpg')">
    <div class="container">

      <div class="footer-top grid-list">

        <div class="footer-brand has-before has-after">

          <a href="#" class="logo">
            <img src="https://raw.githubusercontent.com/codewithsadee/grilli/e23428321f14d6841067f44901ca90223cbd0ed1/assets/images/logo.svg" width="160" height="50" loading="lazy" alt="grilli home">
          </a>

          <address class="body-4">
            Restaurant St, Delicious City, London 9578, UK
          </address>

          <a href="mailto:booking@grilli.com" class="body-4 contact-link">booking@grilli.com</a>

          <a href="tel:+88123123456" class="body-4 contact-link">Booking Request : +88-123-123456</a>

          <p class="body-4">
            Open : 09:00 am - 01:00 pm
          </p>

          <div class="wrapper">
            <div class="separator"></div>
            <div class="separator"></div>
            <div class="separator"></div>
          </div>

          <p class="title-1">Get News & Offers</p>

          <p class="label-1">
            Subscribe us & Get <span class="span">25% Off.</span>
          </p>

          <form action="" class="input-wrapper">
            <div class="icon-wrapper">
              <ion-icon name="mail-outline" aria-hidden="true"></ion-icon>

              <input type="email" name="email_address" placeholder="Your email" autocomplete="off" class="input-field">
            </div>

            <button type="submit" class="btn btn-secondary">
              <span class="text text-1">Subscribe</span>

              <span class="text text-2" aria-hidden="true">Subscribe</span>
            </button>
          </form>

        </div>

        <ul class="footer-list">

          <li>
            <a href="#" class="label-2 footer-link hover-underline">Home</a>
          </li>

          <li>
            <a href="#" class="label-2 footer-link hover-underline">Menus</a>
          </li>

          <li>
            <a href="#" class="label-2 footer-link hover-underline">About Us</a>
          </li>

          <li>
            <a href="#" class="label-2 footer-link hover-underline">Our Chefs</a>
          </li>

          <li>
            <a href="#" class="label-2 footer-link hover-underline">Contact</a>
          </li>

        </ul>

        <ul class="footer-list">

          <li>
            <a href="#" class="label-2 footer-link hover-underline">Facebook</a>
          </li>

          <li>
            <a href="#" class="label-2 footer-link hover-underline">Instagram</a>
          </li>

          <li>
            <a href="#" class="label-2 footer-link hover-underline">Twitter</a>
          </li>

          <li>
            <a href="#" class="label-2 footer-link hover-underline">Youtube</a>
          </li>

          <li>
            <a href="#" class="label-2 footer-link hover-underline">Google Map</a>
          </li>

        </ul>

      </div>

      <div class="footer-bottom">

        <p class="copyright">
          &copy; 2022 Grilli. All Rights Reserved | Crafted by <a href="https://github.com/codewithsadee"
            target="_blank" class="link">Arpayan</a>
        </p>

      </div>

    </div>
  </footer>



  <!-- 
    - #BACK TO TOP
  -->

  <a href="#top" class="back-top-btn active" aria-label="back to top" data-back-top-btn>
    <ion-icon name="chevron-up" aria-hidden="true"></ion-icon>
  </a>






  <!-- 
    - custom js link
  -->
  <script src="script.js"></script>

  <!-- 
    - ionicon link
  -->
  <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
  <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
  <script>
    'use strict';



/**
 * PRELOAD
 * 
 * loading will be end after document is loaded
 */

const preloader = document.querySelector("[data-preaload]");

window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});



/**
 * add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * NAVBAR
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);



/**
 * HEADER & BACK TOP BTN
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

let lastScrollPos = 0;

const hideHeader = function () {
  const isScrollBottom = lastScrollPos < window.scrollY;
  if (isScrollBottom) {
    header.classList.add("hide");
  } else {
    header.classList.remove("hide");
  }

  lastScrollPos = window.scrollY;
}

window.addEventListener("scroll", function () {
  if (window.scrollY >= 50) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
    hideHeader();
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});



/**
 * HERO SLIDER
 */

const heroSlider = document.querySelector("[data-hero-slider]");
const heroSliderItems = document.querySelectorAll("[data-hero-slider-item]");
const heroSliderPrevBtn = document.querySelector("[data-prev-btn]");
const heroSliderNextBtn = document.querySelector("[data-next-btn]");

let currentSlidePos = 0;
let lastActiveSliderItem = heroSliderItems[0];

const updateSliderPos = function () {
  lastActiveSliderItem.classList.remove("active");
  heroSliderItems[currentSlidePos].classList.add("active");
  lastActiveSliderItem = heroSliderItems[currentSlidePos];
}

const slideNext = function () {
  if (currentSlidePos >= heroSliderItems.length - 1) {
    currentSlidePos = 0;
  } else {
    currentSlidePos++;
  }

  updateSliderPos();
}

heroSliderNextBtn.addEventListener("click", slideNext);

const slidePrev = function () {
  if (currentSlidePos <= 0) {
    currentSlidePos = heroSliderItems.length - 1;
  } else {
    currentSlidePos--;
  }

  updateSliderPos();
}

heroSliderPrevBtn.addEventListener("click", slidePrev);

/**
 * auto slide
 */

let autoSlideInterval;

const autoSlide = function () {
  autoSlideInterval = setInterval(function () {
    slideNext();
  }, 7000);
}

addEventOnElements([heroSliderNextBtn, heroSliderPrevBtn], "mouseover", function () {
  clearInterval(autoSlideInterval);
});

addEventOnElements([heroSliderNextBtn, heroSliderPrevBtn], "mouseout", autoSlide);

window.addEventListener("load", autoSlide);



/**
 * PARALLAX EFFECT
 */

const parallaxItems = document.querySelectorAll("[data-parallax-item]");

let x, y;

window.addEventListener("mousemove", function (event) {

  x = (event.clientX / window.innerWidth * 10) - 5;
  y = (event.clientY / window.innerHeight * 10) - 5;

  // reverse the number eg. 20 -> -20, -5 -> 5
  x = x - (x * 2);
  y = y - (y * 2);

  for (let i = 0, len = parallaxItems.length; i < len; i++) {
    x = x * Number(parallaxItems[i].dataset.parallaxSpeed);
    y = y * Number(parallaxItems[i].dataset.parallaxSpeed);
    parallaxItems[i].style.transform = `translate3d(${x}px, ${y}px, 0px)`;
  }

});
  </script>

</body>

</html>
  `, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8'
    }
  });
}

export default main;
