zuix.setComponentCache([{componentId:"https://zuixjs.github.io/zkit/lib/1.2/templates/mdl-card-image",controller:null,css:':host {\n    font-family: "Roboto","Helvetica","Arial",sans-serif !important;\n    transition: box-shadow 0.2s ease-in-out;\n}\n\n.mdl-card {\n    width: 256px;\n    height: 256px;                 /* 259 306 317 342 392 292 */\n    background: url(\'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==\');\n    background-repeat: no-repeat!important;\n    background-position: center!important;\n}\n.mdl-card__actions {\n    height: 52px;\n    padding: 16px;\n    border-top: solid 1px rgba(255,255,255, 0.4);\n    background: rgba(0, 0, 0, 0.5);\n}\n.title {\n    color: #fff;\n    font-size: 110%;\n    font-weight: 500;\n}\n.mdl-ripple {\n    background: #fff;\n}\n.mdl-card__title {\n    align-items: start;\n}\n.mdl-card__title span {\n    width: 100%;\n    font-size: 95%;\n    padding-left: 3px;\n    padding-right: 3px;\n    background: rgba(255,255,255,0.65);\n    border-radius: 3px;\n}\n',view:'<a #link.url="" href="#" class="mdl-card mdl-shadow--2dp mdl-js-ripple-effect">\n    <div class="mdl-card__title mdl-card--expand animate__animated animate__fadeIn animate__slow">\n        <span #text=""></span>\n    </div>\n    <div class="mdl-card__actions animate__animated animate__fadeInUp animate__slow">\n        <span #title="" class="title"></span>\n    </div>\n    <span class="mdl-button__ripple-container">\n        <span class="mdl-ripple"></span>\n    </span>\n</a>\n<script type="jscript" using="componentHandler">\n  $.on(\'mouseover touchstart\', () => $.addClass(\'mdl-shadow--4dp\'));\n  $.on(\'mouseout touchend\', () => $.removeClass(\'mdl-shadow--4dp\'));\n  $.css({\n    backgroundImage: \'url(\' + model.image.src + \'?random=\' + Math.random() + \')\',\n    backgroundPosition: \'center\',\n    backgroundRepeat: \'no-repeat\'\n  });\n  // this is required for the MDL ripple effect\n  componentHandler.upgradeElements($.get().firstElementChild);\n<\/script>\n'},{componentId:"https://zuixjs.github.io/zkit/lib/1.2/controllers/header-auto-hide",controller:function(){"use strict";var e={};return e.exports=function(r){let a,t,l,c,d,p=0,u;function h(){null!=a&&a.hasClass("header-collapse")&&a.removeClass("header-collapse").addClass("header-expand"),null!=t&&t.hasClass("footer-collapse")&&t.removeClass("footer-collapse").addClass("footer-expand"),u&&u.check()}function f(){a.hasClass("header-collapse")||a.removeClass("header-expand").addClass("header-collapse"),null==t||t.hasClass("footer-collapse")||t.removeClass("footer-expand").addClass("footer-collapse")}r.init=function(){r.options().css=!1,r.options().html=!1},r.create=function(){l=r.options().showEnd,a=r.options().header;const n=r.options().zIndex||10;if(!a)throw new Error("Header element not specified.");if(0===(a=zuix.field(a)).length())throw new Error('Header element not found: "'+a+'".');const o=getComputedStyle(a.get());zuix.$.appendCss(`
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
`,null,"zkit_header_auto_hide");var e=r.options().footer;let i=null;null!=e&&((t=zuix.field(e)).css({position:"fixed",zIndex:n}),i=getComputedStyle(t.get()),zuix.$.appendCss(`
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
`,null,"zkit_header_auto_hide"));const s=r.options().scrollHost||r.view();zuix.load("@lib/controllers/scroll-helper",{view:s,on:{"scroll:change":function(e,t){c=parseFloat(o.height),"fixed"!==o.position&&"absolute"!==o.position&&(p=c),document.documentElement.style.setProperty("--header-height",-c+"px"),i&&(d=parseFloat(i.height),document.documentElement.style.setProperty("--footer-height",-d+"px")),"scroll"===t.event&&t.info.viewport.y<-p?t.info.shift.y<-4?(0<p&&"fixed"!==a.css("position")&&(s.css({paddingTop:c+"px"}),a.hide().css({position:"fixed",zIndex:n})),f()):4<t.info.shift.y&&(a.show(),h()):"hit-bottom"===t.event&&l?(a.show(),h()):0<p&&0===t.info.viewport.y&&(s.css({paddingTop:null}),a.show().css({position:null,zIndex:null})),r.trigger("page:scroll",t)}},ready:function(e){u=e,r.expose("scroll",{get:function(){return u}}),r.trigger("scroll:ready",u)}}),r.expose("show",h),r.expose("hide",f)}},e.exports}()},{componentId:"https://zuixjs.github.io/zkit/lib/1.2/controllers/scroll-helper",controller:function(){"use strict";var e={};function o(n,o){let i=void 0,s=void 0;return function(){const e=this,t=arguments;s?(clearTimeout(i),i=setTimeout(function(){Date.now()-s>=o&&(n.apply(e,t),s=Date.now())},o-(Date.now()-s))):(n.apply(e,t),s=Date.now())}}return e.exports=function(){const s={timestamp:0,size:{width:0,height:0},viewport:{x:0,y:0,width:0,height:0}};let t,n,i,r=0,a;const l=this;function c(){null!=t&&clearTimeout(t);var e=(new Date).getTime();if(100<e-s.timestamp?d():t=setTimeout(function(){d()},99),!(e<r&&e-a<66)){a=e;const o="scroll-helper-visible";null!=n&&null!=i&&n.each(function(e,t){var n=this.position();if(!n.visible&&this.hasClass(o))this.removeClass(o),n.event="exit";else if(n.visible){if(!n.visible)return;this.hasClass(o)?n.event="scroll":(n.event="enter",this.addClass(o))}else n.event="off-scroll";i(this,n)})}}function d(){var e=l.view().get(),t=e.getBoundingClientRect(),t={top:t.top,right:t.right,bottom:t.bottom,left:t.left,width:t.width,height:t.height,x:t.x,y:t.y},e=(t.y=-l.view().get().scrollTop||t.y||0,t.height=l.view().get().scrollHeight||t.height||0,s.size.width=t.width,s.size.height=t.height,e===document.body?(s.size.width=document.body.offsetWidth,s.size.height=document.body.offsetHeight,s.viewport.width=document.documentElement.clientWidth||s.size.width,s.viewport.height=document.documentElement.clientHeight||s.size.height):(s.viewport.width=e.offsetWidth,s.viewport.height=e.offsetHeight),s.timestamp=(new Date).getTime(),s.shift={x:t.x-s.viewport.x,y:t.y-s.viewport.y},s.viewport.x=t.x,s.viewport.y=t.y,s.size.height+t.y-s.viewport.height);0==e||0===t.y?l.trigger("scroll:change",{event:0===t.y?"hit-top":"hit-bottom",info:s}):l.trigger("scroll:change",{event:"scroll",info:s})}function p(e,t){if((e instanceof Element||e instanceof zuix.$.ZxQuery)&&(e=zuix.$(e).position().y-s.viewport.y),-1===t)return u(e);var n=Date.now(),n=(t=(r=null!=t?n+t:r)-n,l.view().get());let o=0;o=n===document.body?void 0!==window.pageYOffset?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop:n.scrollTop;n=e-o;if(t<=0||0==n)u(e),c();else{const i=o+n/t*33;requestAnimationFrame(function(){u(i),p(e)})}}function u(e){var t=l.view().get();t===document.body?(document.documentElement.scrollTop=e,document.body.scrollTop=e):t.scrollTop=e}l.init=function(){l.options().html=!1,l.options().css=!1},l.create=function(){l.view().get()===document.body?0<l.options().throttle?window.onscroll=o(c,l.options().throttle):window.onscroll=c:0<l.options().throttle?l.view().on("scroll",{handler:o(c,l.options().throttle),passive:!0}):l.view().on("scroll",{handler:c,passive:!0});l.expose("watch",function(e,t){return e=e,t=t,i=null!=e?(n=l.view(e),t):n=null,l.context}),l.expose("scrollStart",function(e){return p(0,e=null==e?-1:e),l.context}).expose("scrollEnd",function(e){return null==e&&(e=-1),p(s.size.height,e),l.context}).expose("scrollTo",function(e,t){return p(e,t=null==t?-1:t),l.context}).expose("info",function(){return s}).expose("check",c)}},e.exports}()},{componentId:"https://zuixjs.github.io/zkit/lib/1.2/controllers/drawer-layout",controller:function(){"use strict";var e={};return e.exports=function(){let o=!0,i=!1,t=!1,s=!1,r=!0,a=null,l=null,c=null,d=280,e=960,p=!1,u=0;const h=this;function f(){l.visibility("initial").css("left",0).get().focus(),t&&(l.find("a").one("click",function(){m()}),a.css("opacity","initial"),a.show()),o||(o=!0,h.trigger("drawer:open",{smallScreen:t}))}function m(){var e;t&&(e=function(){o||l.visibility("hidden")},l.one("transitionend transitioncancel",function(){e()}),l.css("left",-d+"px"),a.hide(),o)&&(o=!1,h.trigger("drawer:close",{smallScreen:t})),o=!1,l.find("a").off("click")}function g(){return o}function x(){(window.innerWidth||document.body.clientWidth)<e||-1===e||p?(t&&!r||(t=!0,i=!1,n()),m()):(t||r)&&(t&&(a.hide(),o)&&m(),t=!1,i=!0,n(),f())}function n(){var e;r||w(),c&&(e=parseFloat(getComputedStyle(c.get(),null).getPropertyValue("padding-left")),t?c.css({paddingLeft:e-d+"px"}):c.css({paddingLeft:d+e+"px"})),h.trigger("layout:change",{smallScreen:t,drawerLocked:i})}function w(){var e;s||(s=!0,e="ease .15s",l.css({"transition-property":"left",transition:e}),a.css({"transition-property":"opacity",transition:e}))}h.init=function(){this.options().html=!1,this.options().css=!1,isNaN(this.options().drawerWidth)||(d=parseInt(this.options().drawerWidth));isNaN(this.options().autoHideWidth)||(e=parseInt(this.options().autoHideWidth))},h.create=function(){l=h.view(),c=h.options().mainContent,(a=zuix.$(document.createElement("div"))).css({position:"fixed",top:0,left:0,bottom:0,right:0,"z-index":100,"background-color":"rgba(0, 0, 0, 0.5)"}).on("click",function(){i||m()}).hide(),l.parent().append(a.get()),l.css({position:"fixed","overflow-y":"auto",left:0,width:d+"px",top:0,bottom:0,"z-index":101,"-webkit-box-shadow":"8px 0 6px -6px rgba(0,0,0,0.25)","-moz-box-shadow":"8px 0 6px -6px rgba(0,0,0,0.25)","box-shadow":"8px 0 6px -6px rgba(0,0,0,0.25)"}).attr("tabindex",0);let n=!1;zuix.load("@lib/controllers/gesture-helper",{view:document.documentElement,on:{"gesture:touch":function(e,t){i||(w(),u=o&&t.startX<d?d-t.startX:0)},"gesture:release":function(e,t){i||n&&(n=!1,w(),(0<t.velocity?f:m)())},"gesture:pan":function(e,t){i||"horizontal"!==t.scrollIntent()||((n||o)&&t.x<d||!n&&t.x<50)&&(n=n||!0,w(),0<(t=(t=t).x)&&t<=d-u&&(t=-d+t+u,"hidden"===l.visibility()&&l.visibility("initial"),l.css("left",t+"px"),"none"===a.display()&&a.show(),a.css("opacity",(d+t)/d)),s)&&(s=!1,l.css({transition:"none"}),a.css({transition:"none"}))}}}),h.expose("toggle",function(){w(),(o?m:f)()}),h.expose("open",function(){w(),f()}),h.expose("close",function(){w(),m()}),h.expose("isOpen",g),h.expose("lock",function(e){if(null==e)return i;i=e}),h.expose("float",function(e){if(null==e)return p;p=e,x()}),l.on("keydown",function(e){27===(e=e||window.event).keyCode&&m()}),x(),r=!1,window.addEventListener("resize",function(){x()})}},e.exports}()},{componentId:"https://zuixjs.github.io/zkit/lib/1.2/controllers/gesture-helper",controller:function(){"use strict";var e={};return e.exports=function(){const n=0,i=1,s=2,o=750;let r=n,a,l=!1,c=!0,d=-1,p,u,h,f=!1,m=(new Date).getTime();Math.sign=Math.sign||function(e){return(0<e)-(e<0)||+e};const g=this;function x(e,t,n){var o=(new Date).getTime();a={event:e,cancel:function(){a.event.cancelBubble=!0,c||a.event.preventDefault()},startX:t,startY:n,startTime:o,shiftX:0,shiftY:0,endTime:0,stepX:0,stepY:0,stepTime:o,velocity:0,x:t,y:n,scrollIntent:function(){switch(r){case i:return"horizontal";case s:return"vertical"}return!1}},h=function(o){let i;function e(){o.stepTime=o.endTime,o.stepX=o.shiftX,o.stepY=o.shiftY,o.stepSpeed=0,o.stepDistance=0}function s(){i=o.direction,r.time=(new Date).getTime(),r.x=o.x,r.y=o.y,o.velocity=0,o.distance=0,e()}const r={time:0,x:0,y:0},a={time:0,x:0,y:0};return s(),{update:function(){var e,t,n;a.time=(new Date).getTime(),a.x=o.x,a.y=o.y,null!=i&&i!==o.direction?s():(null==i&&o.direction!==i&&(i=o.direction),e=a.time-r.time,t={x:a.x-r.x,y:a.y-r.y},n=Math.sqrt(t.x*t.x+t.y*t.y),n=(o.distance=n)/e,o.velocity="left"===o.direction||"up"===o.direction?-n:n,o.stepTime=o.endTime-o.stepTime,t={x:o.shiftX-o.stepX,y:o.shiftY-o.stepY},o.stepDistance=Math.sqrt(t.x*t.x+t.y*t.y),o.stepSpeed=o.stepDistance/o.stepTime)},step:e}}(a),g.trigger("gesture:touch",a)}function t(e,t,n){null!=a&&(a.event=e,a.x=t,a.y=n,a.shiftX=t-a.startX,a.shiftY=n-a.startY,a.endTime=(new Date).getTime(),null!=(e=v())&&!1!==p&&(u=null!=u&&u!==a.direction?(p=!1,"cancel"):(p=e,a.direction)),g.trigger("gesture:pan",a))}function w(e){null!=a&&(h.update(),a.event=e,null!=(p=null==p?v():p))&&!1!==p&&g.trigger(p,a),g.trigger("gesture:release",a),r=n,u=null,p=null,a=null}function v(){let e=null;h.update();var t=180*Math.atan2(a.shiftY-a.stepY,a.shiftX-a.stepX)/Math.PI;return 0===a.shiftX&&0===a.shiftY&&a.startTime>m+100&&a.stepTime<o?(m=(new Date).getTime(),e="gesture:tap"):(r===n||r===i)&&2<a.stepDistance&&(135<=t&&t<=180||-180<=t&&t<=-135)?(a.direction="left",e="gesture:swipe",r=i):(r===n||r===i)&&2<a.stepDistance&&(0<=t&&t<=45||-45<=t&&t<0)?(a.direction="right",e="gesture:swipe",r=i):(r===n||r===s)&&2<a.stepDistance&&45<t&&t<135?(a.direction="down",e="gesture:swipe",r=s):(r===n||r===s)&&2<a.stepDistance&&-135<t&&t<-45&&(a.direction="up",e="gesture:swipe",r=s),2<a.stepDistance&&h.step(),e}g.init=function(){var e=g.options();e.html=!1,e.css=!1,c=!1!==e.passive&&c,d=e.startGap||d},g.create=function(){(c?zuix.$(window):g.view()).on("dragstart",{handler:function(e){l||c||e.preventDefault()},passive:c}).on("mousedown",{handler:function(e){var t=zuix.$(e.target);!(l=-1===document.elementsFromPoint(e.x,e.y).indexOf(g.view().get()))&&1===e.which&&0===t.parent('[class*="no-gesture"]').length()&&e.x>d?(f=!0,l=!1,t.get().draggable=!1,x(e,e.x,e.y)):l=!0},passive:c}).on("mousemove",{handler:function(e){!l&&f&&t(e,e.x,e.y)},passive:c}).on("mouseup",function(e){1!==e.which||l||(f=!1,w(e))}).on("touchstart",{handler:function(e){var t=zuix.$(e.target);!(l=-1===document.elementsFromPoint(e.touches[0].clientX,e.touches[0].clientY).indexOf(g.view().get()))&&0===t.parent('[class*="no-gesture"]').length()&&e.touches[0].clientX>d?(l=!1,t.get().draggable=!1,x(e,e.touches[0].clientX,e.touches[0].clientY)):l=!0},passive:c}).on("touchmove",{handler:function(e){l||t(e,e.touches[0].clientX,e.touches[0].clientY)},passive:c}).on("touchend",function(e){l||w(e)})}},e.exports}()}]);