zuix.setComponentCache([{componentId:"https://zuixjs.github.io/zkit/lib/1.2/controllers/header-auto-hide",controller:function(){"use strict";let t={};return t.exports=function(r){let l,e,a,c,u,h=0,p;function d(){null!=l&&l.hasClass("header-collapse")&&l.removeClass("header-collapse").addClass("header-expand"),null!=e&&e.hasClass("footer-collapse")&&e.removeClass("footer-collapse").addClass("footer-expand"),p&&p.check()}function f(){l.hasClass("header-collapse")||l.removeClass("header-expand").addClass("header-collapse"),null==e||e.hasClass("footer-collapse")||e.removeClass("footer-expand").addClass("footer-collapse")}r.init=function(){r.options().css=!1,r.options().html=!1},r.create=function(){a=r.options().showEnd,l=r.options().header;const i=r.options().zIndex||10;if(!l)throw new Error("Header element not specified.");if(0===(l=zuix.field(l)).length())throw new Error('Header element not found: "'+l+'".');const n=getComputedStyle(l.get());zuix.$.appendCss(`
/* Header bar shrink/expand */
@keyframes header-collapse-anim {
  from { top: 0; }
  to { top: var(--header-height); }
}
@keyframes header-expand-anim {
  from { top: var(--header-height); }
  to { top: 0; }
}
.header-collapse {
  animation-fill-mode: forwards;
  animation-name: header-collapse-anim;
  animation-duration: 0.5s;
  top: var(--header-height);
}
.header-expand {
  animation-fill-mode: forwards;
  animation-name: header-expand-anim;
  animation-duration: 0.5s;
  top: 0px;
}
`,null,"zkit_header_auto_hide");var t=r.options().footer;let o=null;null!=t&&((e=zuix.field(t)).css({position:"fixed",zIndex:i}),o=getComputedStyle(e.get()),zuix.$.appendCss(`
/* Footer bar shrink/expand */
@keyframes footer-collapse-anim {
  from { bottom: 0; }
  to { bottom: var(--footer-height); }
}
@keyframes footer-expand-anim {
  from { bottom: var(--footer-height); }
  to { bottom: 0; }
}
.footer-collapse {
  animation-fill-mode: forwards;
  animation-name: footer-collapse-anim;
  animation-duration: 0.5s;
  bottom: var(--footer-height);
}
.footer-expand {
  animation-fill-mode: forwards;
  animation-name: footer-expand-anim;
  animation-duration: 0.5s;
  bottom: 0;
}
`,null,"zkit_header_auto_hide"));const s=r.options().scrollHost||r.view();zuix.load("@lib/controllers/scroll-helper",{view:s,on:{"scroll:change":function(t,e){c=parseFloat(n.height),"fixed"!==n.position&&"absolute"!==n.position&&(h=c),document.documentElement.style.setProperty("--header-height",-c+"px"),o&&(u=parseFloat(o.height),document.documentElement.style.setProperty("--footer-height",-u+"px")),"scroll"===e.event&&e.info.viewport.y<-h?e.info.shift.y<-4?(0<h&&"fixed"!==l.css("position")&&(s.css({paddingTop:c+"px"}),l.hide().css({position:"fixed",zIndex:i})),f()):4<e.info.shift.y&&(l.show(),d()):"hit-bottom"===e.event&&a?(l.show(),d()):0<h&&0===e.info.viewport.y&&(s.css({paddingTop:null}),l.show().css({position:null,zIndex:null})),r.trigger("page:scroll",e)}},ready:function(t){p=t,r.expose("scroll",{get:function(){return p}}),r.trigger("scroll:ready",p)}}),r.expose("show",d),r.expose("hide",f)}},t.exports}()},{componentId:"https://zuixjs.github.io/zkit/lib/1.2/controllers/scroll-helper",controller:function(){"use strict";let t={};function n(i,n){let o=void 0,s=void 0;return function(){const t=this,e=arguments;s?(clearTimeout(o),o=setTimeout(function(){Date.now()-s>=n&&(i.apply(t,e),s=Date.now())},n-(Date.now()-s))):(i.apply(t,e),s=Date.now())}}return t.exports=function(){const s={timestamp:0,size:{width:0,height:0},viewport:{x:0,y:0,width:0,height:0}};let e,i,o,r=0,l;const a=this;function c(){null!=e&&clearTimeout(e);var t=(new Date).getTime();if(100<t-s.timestamp?u():e=setTimeout(function(){u()},99),!(t<r&&t-l<66)){l=t;const n="scroll-helper-visible";null!=i&&null!=o&&i.each(function(t,e){const i=this.position();if(!i.visible&&this.hasClass(n))this.removeClass(n),i.event="exit";else if(i.visible){if(!i.visible)return;this.hasClass(n)?i.event="scroll":(i.event="enter",this.addClass(n))}else i.event="off-scroll";o(this,i)})}}function u(){const t=a.view().get();var e=t.getBoundingClientRect();const i={top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.width,height:e.height,x:e.x,y:e.y};i.y=-a.view().get().scrollTop||i.y||0,i.height=a.view().get().scrollHeight||i.height||0,s.size.width=i.width,s.size.height=i.height,t===document.body?(s.size.width=document.body.offsetWidth,s.size.height=document.body.offsetHeight,s.viewport.width=document.documentElement.clientWidth||s.size.width,s.viewport.height=document.documentElement.clientHeight||s.size.height):(s.viewport.width=t.offsetWidth,s.viewport.height=t.offsetHeight),s.timestamp=(new Date).getTime(),s.shift={x:i.x-s.viewport.x,y:i.y-s.viewport.y},s.viewport.x=i.x,s.viewport.y=i.y,0==s.size.height+i.y-s.viewport.height||0===i.y?a.trigger("scroll:change",{event:0===i.y?"hit-top":"hit-bottom",info:s}):a.trigger("scroll:change",{event:"scroll",info:s})}function h(t,e){if((t instanceof Element||t instanceof zuix.$.ZxQuery)&&(t=zuix.$(t).position().y-s.viewport.y),-1===e)return p(t);var i=Date.now(),i=(e=(r=null!=e?i+e:r)-i,a.view().get());let n=0;n=i===document.body?void 0!==window.pageYOffset?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop:i.scrollTop;i=t-n;if(e<=0||0==i)return p(t),void c();const o=n+i/e*33;requestAnimationFrame(function(){p(o),h(t)})}function p(t){const e=a.view().get();e===document.body?(document.documentElement.scrollTop=t,document.body.scrollTop=t):e.scrollTop=t}a.init=function(){a.options().html=!1,a.options().css=!1},a.create=function(){a.view().get()===document.body?0<a.options().throttle?window.onscroll=n(c,a.options().throttle):window.onscroll=c:0<a.options().throttle?a.view().on("scroll",{handler:n(c,a.options().throttle),passive:!0}):a.view().on("scroll",{handler:c,passive:!0});a.expose("watch",function(t,e){return t=t,e=e,o=null!=t?(i=a.view(t),e):i=null,a.context}),a.expose("scrollStart",function(t){return h(0,t=null==t?-1:t),a.context}).expose("scrollEnd",function(t){return null==t&&(t=-1),h(s.size.height,t),a.context}).expose("scrollTo",function(t,e){return h(t,e=null==e?-1:e),a.context}).expose("info",function(){return s}).expose("check",c)}},t.exports}()},{componentId:"https://zuixjs.github.io/zkit/lib/1.2/controllers/view-pager",controller:function(){"use strict";let t={};return t.exports=function(){const s={duration:.3,easing:"ease"},W="cubic-bezier(0.0,0.1,0.35,1.1)",q="cubic-bezier(0.0,0.1,0.35,1.0)",u="horizontal",h="vertical",o=1,$=-1;let r=-1,l=0,i=null,n=3e3,a=o,t=null,c=!1,p=u,d=!1,f=!1,g=!1,x=!0,m=0,e=!1,v=!1,N=!1,w=!1,y=!1,b={width:0,height:0},z=null,T=null,k=null;const C=new MutationObserver(function(t,e){k=I.view().children(),D()}),I=this;function D(){null!=t&&clearTimeout(t),t=setTimeout(X,250)}function X(t){if(t||!v&&null==z){k.each(function(t,e){this.css({position:"absolute",left:0,top:0})});const o=F(I.view().get());if(0===o.width||0===o.height){if(0===o.height&&I.view().position().visible){let i=0;k.each(function(t,e){e=F(e);e.height>i&&(i=e.height)}),o.height<i&&I.view().css("height",i+"px")}D()}else{b=o;let i=0,n=!1;k.each(function(t,e){e=F(e);if(p===u){let t=(o.height-e.height)/2;t<0&&(t=0),U(this,s),K(this,i,t),i+=e.width}else{let t=(o.width-e.width)/2;t<0&&(t=0),U(this,s),K(this,t,i),i+=e.height}("true"===this.attr("z-lazy")||0<this.find('[z-lazy="true"]').length())&&(n=!0)}),w=n,E(r),1<k.length()&&S()}}else D()}function Y(){let t=!1,e=parseInt(r)+1;return e>=k.length()&&(e=k.length()-1,t=!0),E(e,s),!t}function P(){let t=!1,e=parseInt(r)-1;return e<0&&(e=0,t=!0),E(e,s),!t}function O(){E(0,s)}function _(){E(k.length()-1,s)}function j(){I.view().position().visible&&E(parseInt(r)+a,s),S()}function S(t){var e;t&&(n=t),B(),!0===d&&(t=I.view().position().visible,i=t?(N||zuix.componentize(I.view()),e=k.eq(r).attr("slide-interval")||n,setTimeout(j,e)):setTimeout(S,500),N=t)}function B(){null!=i&&clearTimeout(i)}function G(l,a){let c=0;return k.each(function(t,e){var i=M(this),t=(c=t,F(e));const n=i.position.x,o=i.position.y,s=t.width,r=t.height;if(p===u&&(n>l||n+s>l)||p===h&&(o>a||o+r>a))return!1}),c}function R(t,e){var i=I.view().position();E(G(t.x-i.x,t.y-i.y),null!=e?e:s)}function E(t,e){l=r,t<0?(a=o,t=0):t>=k.length()?(a=$,t=k.length()-1):t!==r&&(a=r<t?o:$),(r=t)!=l&&(k.eq(r).css("z-index",1),-1!==l&&k.eq(l).css("z-index",0),I.trigger("page:change",{in:r,out:l}));const i=k.eq(t);var t=M(i),n=F(i.get());A({x:(b.width-n.width)/2-t.position.x,y:(b.height-n.height)/2-t.position.y},e),S()}function A(e,i){var n=H(),o=M(k.eq(0));const s=k.eq(k.length()-1);var r=M(s);if(k.each(function(t,e){const i=M(this);var n=H();i.dragStart={x:n.marginLeft+i.position.x,y:n.marginTop+i.position.y}}),p===u){let t=e.x;0<o.position.x+e.x?t=-o.position.x:r.position.x+s.get().offsetWidth+e.x<b.width&&(t=2*-n.marginLeft+b.width-(r.position.x+s.get().offsetWidth)),e.x-t!=0&&null!=i&&(i={duration:i.duration*(t/e.x),easing:W},(!isFinite(i.duration)||i.duration<0)&&(i.duration=.2)),L(t,0,i)}else{let t=e.y;0<o.position.y+e.y?t=-o.position.y:r.position.y+s.get().offsetHeight+e.y<b.height&&(t=2*-n.marginTop+b.height-(r.position.y+s.get().offsetHeight)),e.y-t!=0&&null!=i&&(i={duration:i.duration*(t/e.y),easing:W},(!isFinite(i.duration)||i.duration<0)&&(i.duration=.2)),L(0,t,i)}y=!0}function F(t){var e=t.getBoundingClientRect();return{width:e.width||t.offsetWidth,height:t.offsetHeight||e.height}}function M(t){const e=t.get().data=t.get().data||{};return e.position=e.position||{x:0,y:0},e}function Q(){w&&null==T&&clearInterval(z)}function H(){const i={w:0,h:0,marginLeft:0,marginTop:0};return k.each(function(t,e){e=F(e);i.w+=e.width,i.h+=e.height}),p===u&&i.w<b.width?i.marginLeft=(b.width-i.w)/2:p===h&&i.h<b.height&&(i.marginTop=(b.height-i.h)/2),i}function L(n,o,s){null!=s?(w&&(Q(),null!=T&&clearTimeout(T),null!=z&&clearInterval(z),z=setInterval(function(){e&&k.each(function(t,e){const i=window.getComputedStyle(e,null),n=parseFloat(i.width.replace("px","")),o=parseFloat(i.height.replace("px",""));var s=parseFloat(i.left.replace("px","")),r=parseFloat(i.top.replace("px",""));if(0<n&&0<o){e=zuix.$(e);const l=-b.width/2,a=1.5*b.width,c=-b.height/2,u=1.5*b.height;s+n<l||r+o<c||s>a||r>u?"hidden"!==e.visibility()&&e.visibility("hidden"):"visible"!==e.visibility()&&e.visibility("visible")}}),zuix.componentize(I.view())},10)),T=setTimeout(function(){T=null,Q()},1e3*s.duration),s=s.duration+"s "+s.easing):w&&zuix.componentize(I.view()),k.each(function(t,e){var i=M(this);U(this,s),K(this,i.dragStart.x+n,i.dragStart.y+o)})}function V(t,e){var i;v&&e.scrollIntent()&&!e.done&&(!c&&("left"!==e.direction&&"right"!==e.direction||p!==u)&&("up"!==e.direction&&"down"!==e.direction||p!==h)||(c||null!=e.event.touches||I.view().get().addEventListener("click",function(t){c&&(c=!1,t.cancelBubble=!0,t.preventDefault()),I.view().get().removeEventListener("click",this,!0)},!0),c=!0,e.cancel()),i=H(),p===u&&"horizontal"===e.scrollIntent()?L(e.shiftX-i.marginLeft,0):p===h&&"vertical"===e.scrollIntent()&&L(0,e.shiftY-i.marginTop))}function Z(t){return!f||1.25<Math.abs(t.velocity)}function J(t,e){if(tt(e)&&!Z(e))switch(e.direction){case"right":p===u&&P();break;case"left":p===u&&Y();break;case"down":p===h&&P();break;case"up":p===h&&Y()}}function K(t,e,i){const n=M(t);isNaN(e)||isNaN(i)||(n.position={x:e,y:i},t.css({left:n.position.x+"px",top:n.position.y+"px"})),n}function U(t,e){t.css({transition:e=null==e?"none":e})}function tt(t){let e=document.elementsFromPoint(t.x,t.y);return(!(0<e.length)||I.view().get().contains(e[0]))&&(0<(e=e.filter(t=>t.attributes["z-load"]&&t.attributes["z-load"].value===I.view().attr("z-load"))).length&&e[0]===I.view().get())}I.init=function(){const t=I.options();I.view();t.html=!1,t.css=!1,f=!0===t.paging||f,d=!0===t.autoSlide||d,x=!1!==t.passive&&x,g=!0===t.holdTouch||g,m=t.startGap||m,!0===t.verticalLayout&&(p=h),null!=t.slideInterval&&(n=t.slideInterval||n),e=!0===t.autoHide||e},I.create=function(){const t=I.view().css({position:"relative",overflow:"hidden"});k=t.children(),t.find("img").each(function(t,e){this.one("load",D)}),zuix.$(window).on("resize",function(){X(!0)}).on("orientationchange",function(){X(!0)}),C.observe(t.get(),{attributes:!1,childList:!0,subtree:!0,characterData:!1}),D();let e=null;zuix.load("@lib/controllers/gesture-helper",{view:t,passive:x,startGap:m,on:{"gesture:touch":function(t,e){tt(e)&&(c=!1,B(),v=!0,y=!1,k.each(function(t,e){const i=M(this);var n=H();const o=window.getComputedStyle(e,null);i.position.x=parseFloat(o.left.replace("px","")),i.position.y=parseFloat(o.top.replace("px","")),this.css("left",i.position.x+"px"),this.css("top",i.position.y+"px"),i.dragStart={x:n.marginLeft+i.position.x,y:n.marginTop+i.position.y}}),g&&e.cancel())},"gesture:release":function(t,e){if(null!=e&&(e.done=!0,!y&&(p===u&&"horizontal"===e.scrollIntent()||p===h&&"vertical"===e.scrollIntent()))){var i=null,n=Math.exp(Math.abs(e.velocity/(Math.abs(e.velocity)<=1.25?5:2))+1);let t=.99+n/1e3;.999<t&&(t=.999);const r=Math.log(.01/Math.abs(e.velocity))/Math.log(t),l={duration:r/1e3,easing:q},a=e.stepSpeed<1.25?0:n*e.velocity*(1-Math.pow(t,1+r))/(1-t),c={x:a,y:a};if(Z(e)||null==i){var o=e;var s=c;f?(l.duration*=.5,p===u?R({x:o.x-s.x,y:o.y},l):R({x:o.x,y:o.y-s.y},l)):A(s,l)}}Q(),v=!1,S()},"gesture:tap":function(t,i){tt(i)&&(null!=e&&clearTimeout(e),e=setTimeout(function(){var t,e;t=i,e=I.view().position(),e=G(t.x-e.x,t.y-e.y),I.trigger("page:tap",e,t),f&&R(t)},50))},"gesture:pan":V,"gesture:swipe":J},ready:function(){X(!0),E(0)}}),I.expose("page",function(t){if(null==t)return parseInt(r);E(t,s)}).expose("get",function(t){return t<k.length()&&0<k.length()?k.eq(t):null}).expose("slide",function(t){!1!==t?S((d=!0)!==t?t:n):B()}).expose("layout",function(t){if(null==t)return p;p=t===h?h:u,D()}).expose("refresh",function(){X(!0)}).expose("next",Y).expose("prev",P).expose("last",_).expose("first",O)},I.destroy=function(){null!=C&&C.disconnect()}},t.exports}()},{componentId:"https://zuixjs.github.io/zkit/lib/1.2/controllers/gesture-helper",controller:function(){"use strict";let t={};return t.exports=function(){const i=0,o=1,s=2,n=750;let r=i,l,a=!1,c=!0,u=-1,h,p,d,f=!1,g=(new Date).getTime();Math.sign=Math.sign||function(t){return(0<t)-(t<0)||+t};const x=this;function m(t,e,i){var n=(new Date).getTime();l={event:t,cancel:function(){l.event.cancelBubble=!0,c||l.event.preventDefault()},startX:e,startY:i,startTime:n,shiftX:0,shiftY:0,endTime:0,stepX:0,stepY:0,stepTime:n,velocity:0,x:e,y:i,scrollIntent:function(){switch(r){case o:return"horizontal";case s:return"vertical"}return!1}},d=function(n){let o;function t(){n.stepTime=n.endTime,n.stepX=n.shiftX,n.stepY=n.shiftY,n.stepSpeed=0,n.stepDistance=0}function s(){o=n.direction,r.time=(new Date).getTime(),r.x=n.x,r.y=n.y,n.velocity=0,n.distance=0,t()}const r={time:0,x:0,y:0},l={time:0,x:0,y:0};return s(),{update:function(){var t,e,i;l.time=(new Date).getTime(),l.x=n.x,l.y=n.y,null!=o&&o!==n.direction?s():(null==o&&n.direction!==o&&(o=n.direction),t=l.time-r.time,e={x:l.x-r.x,y:l.y-r.y},i=Math.sqrt(e.x*e.x+e.y*e.y),i=(n.distance=i)/t,n.velocity="left"===n.direction||"up"===n.direction?-i:i,n.stepTime=n.endTime-n.stepTime,e={x:n.shiftX-n.stepX,y:n.shiftY-n.stepY},n.stepDistance=Math.sqrt(e.x*e.x+e.y*e.y),n.stepSpeed=n.stepDistance/n.stepTime)},step:t}}(l),x.trigger("gesture:touch",l)}function e(t,e,i){null!=l&&(l.event=t,l.x=e,l.y=i,l.shiftX=e-l.startX,l.shiftY=i-l.startY,l.endTime=(new Date).getTime(),null!=(t=w())&&!1!==h&&(p=null!=p&&p!==l.direction?(h=!1,"cancel"):(h=t,l.direction)),x.trigger("gesture:pan",l))}function v(t){null!=l&&(d.update(),l.event=t,null!=(h=null==h?w():h)&&!1!==h&&x.trigger(h,l)),x.trigger("gesture:release",l),r=i,p=null,h=null,l=null}function w(){let t=null;d.update();var e=180*Math.atan2(l.shiftY-l.stepY,l.shiftX-l.stepX)/Math.PI;return 0===l.shiftX&&0===l.shiftY&&l.startTime>g+100&&l.stepTime<n?(g=(new Date).getTime(),t="gesture:tap"):(r===i||r===o)&&2<l.stepDistance&&(135<=e&&e<=180||-180<=e&&e<=-135)?(l.direction="left",t="gesture:swipe",r=o):(r===i||r===o)&&2<l.stepDistance&&(0<=e&&e<=45||-45<=e&&e<0)?(l.direction="right",t="gesture:swipe",r=o):(r===i||r===s)&&2<l.stepDistance&&45<e&&e<135?(l.direction="down",t="gesture:swipe",r=s):(r===i||r===s)&&2<l.stepDistance&&-135<e&&e<-45&&(l.direction="up",t="gesture:swipe",r=s),2<l.stepDistance&&d.step(),t}x.init=function(){const t=x.options();t.html=!1,t.css=!1,c=!1!==t.passive&&c,u=t.startGap||u},x.create=function(){const t=c?zuix.$(window):x.view();t.on("dragstart",{handler:function(t){a||c||t.preventDefault()},passive:c}).on("mousedown",{handler:function(t){const e=zuix.$(t.target);!(a=-1===document.elementsFromPoint(t.x,t.y).indexOf(x.view().get()))&&1===t.which&&0===e.parent('[class*="no-gesture"]').length()&&t.x>u?(f=!0,a=!1,e.get().draggable=!1,m(t,t.x,t.y)):a=!0},passive:c}).on("mousemove",{handler:function(t){!a&&f&&e(t,t.x,t.y)},passive:c}).on("mouseup",function(t){1!==t.which||a||(f=!1,v(t))}).on("touchstart",{handler:function(t){const e=zuix.$(t.target);!(a=-1===document.elementsFromPoint(t.touches[0].clientX,t.touches[0].clientY).indexOf(x.view().get()))&&0===e.parent('[class*="no-gesture"]').length()&&t.touches[0].clientX>u?(a=!1,e.get().draggable=!1,m(t,t.touches[0].clientX,t.touches[0].clientY)):a=!0},passive:c}).on("touchmove",{handler:function(t){a||e(t,t.touches[0].clientX,t.touches[0].clientY)},passive:c}).on("touchend",function(t){a||v(t)})}},t.exports}()},{componentId:"https://zuixjs.github.io/zkit/lib/1.2/controllers/drawer-layout",controller:function(){"use strict";let t={};return t.exports=function(){let n=!0,o=!1,e=!1,s=!1,r=!0,l=null,a=null,c=null,u=280,t=960,h=!1,p=0;const d=this;function f(){a.visibility("initial").css("left",0).get().focus(),e&&(a.find("a").one("click",function(){g()}),l.css("opacity","initial"),l.show()),n||(n=!0,d.trigger("drawer:open",{smallScreen:e}))}function g(){var t;e&&(t=function(){n||a.visibility("hidden")},a.one("transitionend transitioncancel",function(){t()}),a.css("left",-u+"px"),l.hide(),n&&(n=!1,d.trigger("drawer:close",{smallScreen:e}))),n=!1,a.find("a").off("click")}function x(){return n}function m(){(window.innerWidth||document.body.clientWidth)<t||-1===t||h?(e&&!r||(e=!0,o=!1,i()),g()):(e||r)&&(e&&(l.hide(),n&&g()),e=!1,o=!0,i(),f())}function i(){var t;r||v(),c&&(t=parseFloat(getComputedStyle(c.get(),null).getPropertyValue("padding-left")),e?c.css({paddingLeft:t-u+"px"}):c.css({paddingLeft:u+t+"px"})),d.trigger("layout:change",{smallScreen:e,drawerLocked:o})}function v(){var t;s||(s=!0,t="ease .15s",a.css({"transition-property":"left",transition:t}),l.css({"transition-property":"opacity",transition:t}))}d.init=function(){this.options().html=!1,this.options().css=!1,isNaN(this.options().drawerWidth)||(u=parseInt(this.options().drawerWidth));isNaN(this.options().autoHideWidth)||(t=parseInt(this.options().autoHideWidth))},d.create=function(){a=d.view(),c=d.options().mainContent,(l=zuix.$(document.createElement("div"))).css({position:"fixed",top:0,left:0,bottom:0,right:0,"z-index":100,"background-color":"rgba(0, 0, 0, 0.5)"}).on("click",function(){o||g()}).hide(),a.parent().append(l.get()),a.css({position:"fixed","overflow-y":"auto",left:0,width:u+"px",top:0,bottom:0,"z-index":101,"-webkit-box-shadow":"8px 0 6px -6px rgba(0,0,0,0.25)","-moz-box-shadow":"8px 0 6px -6px rgba(0,0,0,0.25)","box-shadow":"8px 0 6px -6px rgba(0,0,0,0.25)"}).attr("tabindex",0);let i=!1;zuix.load("@lib/controllers/gesture-helper",{view:document.documentElement,on:{"gesture:touch":function(t,e){o||(v(),p=n&&e.startX<u?u-e.startX:0)},"gesture:release":function(t,e){o||i&&(i=!1,v(),(0<e.velocity?f:g)())},"gesture:pan":function(t,e){if(!o&&"horizontal"===e.scrollIntent()&&((i||n)&&e.x<u||!i&&e.x<50)){i=i||!0,v();{let t=e.x;0<t&&t<=u-p&&(t=-u+t+p,"hidden"===a.visibility()&&a.visibility("initial"),a.css("left",t+"px"),"none"===l.display()&&l.show(),l.css("opacity",(u+t)/u))}s&&(s=!1,a.css({transition:"none"}),l.css({transition:"none"}))}}}}),d.expose("toggle",function(){v(),(n?g:f)()}),d.expose("open",function(){v(),f()}),d.expose("close",function(){v(),g()}),d.expose("isOpen",x),d.expose("lock",function(t){if(null==t)return o;o=t}),d.expose("float",function(t){if(null==t)return h;h=t,m()}),a.on("keydown",function(t){27===(t=t||window.event).keyCode&&g()}),m(),r=!1,window.addEventListener("resize",function(){m()})}},t.exports}()}]);