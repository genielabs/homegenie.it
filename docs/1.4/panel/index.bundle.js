zuix.setComponentCache([{componentId:"https://zuixjs.github.io/zkit/lib/1.2/components/media-browser",controller:function(){"use strict";var e={};return e.exports=function(r){let i=0,n=!1,e=!1,o=!0,a,l,c;function u(e,t){i=+t.in;var n=l.get(i),n=(n&&n.addClass("page-active"),l.get(+t.out));n&&n.removeClass("page-active")}function p(e){return a.page(e)}function d(){n||f(),r.view().show(),r.trigger("open")}function h(){g(),n||r.trigger("close")}function f(){o||(o=!0,r.view().addClass("fullscreen").css({height:null,maxHeight:null,aspectRatio:null}),w(),r.trigger("fullscreen:open"))}function g(){var e,t;o&&(o=!1,n&&(r.view().removeClass("fullscreen"),t=getComputedStyle(r.view().get()),e=parseInt(t.width),0===parseInt(t.height)&&(t=e/16*9,r.view().css({height:t+"px",maxHeight:t+"px",aspectRatio:"16 / 9"})),w()),r.trigger("fullscreen:close"))}function x(){(e?v:m)()}function v(){e=!1,r.trigger("controls:hide")}function m(){e=!0,null!=l&&null!=a&&l.page(a.page()),r.trigger("controls:show")}function w(){setTimeout(function(){l&&l.refresh(),a&&a.refresh()},10)}r.create=function(){r.expose({open:d,close:h,current:p,showControls:m,hideControls:v,toggleControls:x,refresh:w,fullScreen:function(e){(e?f:g)()},next:function(){a.next()},prev:function(){a.prev()}}),r.expose("ui",{get:function(){return{currentPage:i,isFirstPage:function(){return 0===i},isLastPage:function(){return!c||i===c.length()-1},inlineMode:n,showingFullscreen:o}}});const s=r.field("carousel"),t=(zuix.context(s,function(){(l=this).on("page:change",u).on("page:tap",function(e,t){a.page(t)}),setTimeout(()=>{var e=l.get(0);e&&e.addClass("page-active")})}),r.field("media"));var e;zuix.context(t,function(){(a=this).on({"page:tap":function(){x(),r.view().get().focus()},"page:change":function(e,t){l.page(t.in),r.trigger("page:change",t)}}),c=t.children().each(function(e,t,n){let i=this.find('[z-field="preview"]'),o=(i.get()&&"IMG"!==i.get().tagName&&(i.attr("z-field",null),i=i.find("IMG").attr("z-field","preview")),i.on("load error",function(){l&&l.refresh()}),0<i.length()?(this.css({background:'url("'+i.attr("src")+'") scroll no-repeat center/contain'}),s.append(i.detach().get())):s.append(document.createElement("div")),n.addClass("visible-on-ready"),this.attr("data-type"));null==o&&(o="image"),this.attr({"z-load":r.context.componentId+"/"+o,"z-lazy":!0,"data-index":e}),zuix.context(t,function(){this.host(r.view())})});var e=r.options().slide;a.slide(null!=e&&+e),e={duration:"0.5s",timingFunction:"ease-in-out"},r.addTransition("fadeIn",{transform:"translateXY(0,0)",opacity:"1"},e),r.addTransition("fadeOutUp",{transform:"translateY(-200px)",opacity:"0"},e),r.addTransition("fadeOutDown",{transform:"translateY(200px)",opacity:"0"},e),r.addTransition("fadeOutLeft",{transform:"translateX(-100px)",opacity:0},e),r.addTransition("fadeOutRight",{transform:"translateX(100px)",opacity:0},e),r.addTransition("zoomIn",{transform:"scale(1)"},{duration:"250ms",timingFunction:"ease-in-out"}),r.addTransition("zoomOut",{transform:"scale(0)"},{duration:"250ms",timingFunction:"ease-in-out"}),r.view().on("dragstart",{handler:function(e){"IMG"===e.target.nodeName.toUpperCase()&&e.preventDefault()},passive:!1}),m(),n&&d()}),r.view().attr("tabindex",0),document.body.addEventListener("keydown",function(e){if(r.view().get()===document.activeElement)switch(e.code){case"Escape":h(),e.preventDefault();break;case"Space":x(),e.preventDefault();break;case"ArrowLeft":a.prev(),e.preventDefault();break;case"ArrowUp":m(),e.preventDefault();break;case"ArrowRight":a.next(),e.preventDefault();break;case"ArrowDown":v(),e.preventDefault()}}),(n=r.options().inline)?setTimeout(g,100):(r.view().hide(),o=!1,e=r.options().button,zuix.field(e).on("click",d))}},e.exports}(),css:':host {\n    -webkit-touch-callout: none; /* iOS Safari */\n    -webkit-user-select: none; /* Safari */\n    -khtml-user-select: none; /* Konqueror HTML */\n    -moz-user-select: none; /* Firefox */\n    -ms-user-select: none; /* Internet Explorer/Edge */\n    user-select: none; /* Non-prefixed version, currently\n                                  supported by Chrome and Opera */\n    overflow: hidden;\n    position: relative;\n    width: 100%;\n}\n:host.fullscreen {\n    position: fixed;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    z-index: 10000;\n}\n\n.container {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    z-index: 20;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -moz-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-flex-align: stretch;\n    -ms-flex-align: stretch;\n    -webkit-align-items: stretch;\n    align-items: stretch;\n    justify-content: center;\n    background: black;\n}\n\n[z-field="media"] article {\n    width: 100%;\n    height: 100%;\n}\n\n[z-field="media"] article:not([z-loaded]) > * {\n    display: none;\n}\n\n[z-field="carousel"] {\n    overflow: visible !important;\n    height: 100%!important;\n}\n\n[z-field="preview"] {\n    padding: 0 4px;\n    border-top: solid 4px transparent;\n    border-bottom: solid 4px transparent;\n    position: relative;\n    width: auto;\n    height: 90%;\n    transition: all 0.2s ease-in;\n    opacity: 1.0;\n    transform: scale(1.0);\n}\n\n[z-field="controls"] {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    height: 140px;\n    max-height: 20%;\n    z-index: 1001;\n    padding-left: 6px;\n    padding-right: 6px;\n    background-color: rgba(0,0,0,0.75);\n}\n\n[z-field*="nav"] {\n    z-index: 10;\n    background-color: rgba(1,1,1,0.75);\n    border-radius: 12px;\n}\n\n[z-field="navPrev"] {\n    position: absolute;\n    left: 12px;\n    bottom: calc(50% - 24px);\n    border: solid 1px white;\n    border-radius: 48px;\n}\n[z-field="navNext"] {\n    position: absolute;\n    right: 12px;\n    bottom: calc(50% - 24px);\n    border: solid 1px white;\n    border-radius: 48px;\n}\n[z-field="navClose"] {\n    position: absolute;\n    right: 12px;\n    top: 12px;\n}\n[z-field="navFullscreen"] {\n    position: absolute;\n    right: 12px;\n    top: 12px;\n}\n[z-field="navFullscreen-exit"] {\n    position: absolute;\n    right: 12px;\n    top: 12px;\n}\n\nsvg {\n    vertical-align: middle!important;\n    fill: white!important;\n    cursor: pointer!important;\n}\n\n.media-list {\n    width: 100%;\n    height: 100%;\n}\n\n.page-active {\n    /*box-shadow: 0 0 16px 4px rgb(0 0 255 / 100%);*/\n    border-radius: 4px;\n    border-top: solid 4px greenyellow!important;\n    border-bottom: solid 4px greenyellow!important;\n    transform: scale(1.0) !important;\n    opacity: 1.0;\n    padding: 0 4px;\n}\n\n@media only screen and (max-width: 820px) {\n    [z-field="controls"] {\n        height: 104px;\n    }\n    [z-field="preview"] img {\n        max-height: 80px;\n    }\n    [z-field="navPrev"] {\n        left: 6px;\n    }\n    [z-field="navNext"] {\n        right: 6px;\n    }\n    [z-field="navClose"] {\n        right: 6px;\n        top: 6px;\n    }\n    [z-field="navFullscreen"] {\n        right: 6px;\n        top: 6px;\n    }\n    [z-field="navFullscreenExit"] {\n        right: 6px;\n        top: 6px;\n    }\n}\n',view:'<div #container="" class="container">\n\n    <div ctrl="" z-load="@lib/controllers/view-pager" :paging="true" :auto-hide="true" #media="" class="media-list visible-on-ready"></div>\n\n    <div #controls="" fx-show="fadeIn" fx-hide="fadeOutDown">\n\n        <div ctrl="" z-load="@lib/controllers/view-pager" :auto-hide="true" #carousel=""></div>\n\n    </div>\n\n    <div #nav-fullscreen="" fx-show="fadeIn" fx-hide="fadeOutUp" @hide-if="!context.ui.inlineMode || context.ui.showingFullscreen" (click)="context.fullScreen(true)">\n        <svg width="48px" height="48px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n            <path d="M0 0h24v24H0V0z" fill="none"></path>\n            <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"></path>\n        </svg>\n    </div>\n    <div #nav-close="" fx-show="fadeIn" fx-hide="fadeOutUp" @hide-if="!context.ui.showingFullscreen" (click)="context.close()">\n        <svg width="48" height="48" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>\n            <path d="M0 0h24v24H0z" fill="none"></path>\n        </svg>\n    </div>\n    <div #nav-prev="" fx-show="fadeIn" fx-hide="fadeOutLeft" @hide-if="context.ui.isFirstPage()" (click)="context.prev()">\n        <svg width="48" height="48" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>\n            <path d="M0 0h24v24H0z" fill="none"></path>\n        </svg>\n    </div>\n    <div #nav-next="" fx-show="fadeIn" fx-hide="fadeOutRight" @hide-if="context.ui.isLastPage()" (click)="context.next()">\n        <svg height="48" width="48" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>\n            <path d="M0 0h24v24H0z" fill="none"></path>\n        </svg>\n    </div>\n\n</div>\n\x3c!-- do not remove the following line --\x3e\n<script><\/script>\n\n\x3c!-- script to handle UI status changes --\x3e\n<script type="jscript">\n  let openButton = context.options().button;\n  const scrollParent = $.get().offsetParent || document.body;\n  context.on(\'controls:show\', () => {\n    fxShow([$controls, $navNext, $navPrev, $navClose, $navFullscreen]);\n  });\n  context.on(\'controls:hide\', () => {\n    fxHide([$controls, $navNext, $navPrev, $navClose, $navFullscreen]);\n  });\n  context.on(\'fullscreen:open\', () => {\n    if (!context.ui.inlineMode) {\n      zuix.componentize(false);\n      setTransitionOrigin();\n      $.playTransition({\n          classes: \'zoomOut zoomIn\',\n          holdState: true,\n          onEnd: function($el) {\n              this.get().focus();\n              zuix.componentize(true);\n              setTimeout(context.refresh, 200);\n          }\n      });\n    }\n    if (scrollParent) {\n      scrollParent.style.overflow = \'hidden\';\n    }\n  });\n  context.on(\'fullscreen:close\', () => {\n    if (!context.ui.inlineMode) {\n      zuix.componentize(false);\n      setTransitionOrigin();\n      $.playTransition({\n          classes: \'zoomIn zoomOut\',\n          holdState: true,\n          onEnd: function($el, queue) {\n              this.hide();\n              zuix.componentize(true);\n          }\n      });\n    }\n    if (scrollParent) {\n      scrollParent.style.overflow = null;\n    }\n  });\n  function fxShow(elements) {\n    elements.forEach($el => {\n      const fxHide = $el.attr(\'fx-hide\');\n      const fxShow = $el.attr(\'fx-show\');\n      $el.playTransition({classes: [fxHide, fxShow], holdState: true});\n    });\n  }\n  function fxHide(elements) {\n    elements.forEach($el => {\n      const fxHide = $el.attr(\'fx-hide\');\n      const fxShow = $el.attr(\'fx-show\');\n      $el.playTransition({classes: [fxShow, fxHide], holdState: true});\n    });\n  }\n  function setTransitionOrigin() {\n    if (openButton) {\n      const p = zuix.field(openButton).position();\n      $.css({\n        \'transform-origin\': p.x + (p.rect.width/2) + \'px \' + (p.y + (p.rect.height/2)) + \'px\'\n      });\n    }\n  }\n<\/script>\n'},{componentId:"https://zuixjs.github.io/zkit/lib/1.2/controllers/header-auto-hide",controller:function(){"use strict";var e={};return e.exports=function(r){let a,t,l,c,u,p=0,d;function h(){null!=a&&a.hasClass("header-collapse")&&a.removeClass("header-collapse").addClass("header-expand"),null!=t&&t.hasClass("footer-collapse")&&t.removeClass("footer-collapse").addClass("footer-expand"),d&&d.check()}function f(){a.hasClass("header-collapse")||a.removeClass("header-expand").addClass("header-collapse"),null==t||t.hasClass("footer-collapse")||t.removeClass("footer-expand").addClass("footer-collapse")}r.init=function(){r.options().css=!1,r.options().html=!1},r.create=function(){l=r.options().showEnd,a=r.options().header;const n=r.options().zIndex||10;if(!a)throw new Error("Header element not specified.");if(0===(a=zuix.field(a)).length())throw new Error('Header element not found: "'+a+'".');const i=getComputedStyle(a.get());zuix.$.appendCss(`
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
`,null,"zkit_header_auto_hide");var e=r.options().footer;let o=null;null!=e&&((t=zuix.field(e)).css({position:"fixed",zIndex:n}),o=getComputedStyle(t.get()),zuix.$.appendCss(`
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
`,null,"zkit_header_auto_hide"));const s=r.options().scrollHost||r.view();zuix.load("@lib/controllers/scroll-helper",{view:s,on:{"scroll:change":function(e,t){c=parseFloat(i.height),"fixed"!==i.position&&"absolute"!==i.position&&(p=c),document.documentElement.style.setProperty("--header-height",-c+"px"),o&&(u=parseFloat(o.height),document.documentElement.style.setProperty("--footer-height",-u+"px")),"scroll"===t.event&&t.info.viewport.y<-p?t.info.shift.y<-4?(0<p&&"fixed"!==a.css("position")&&(s.css({paddingTop:c+"px"}),a.hide().css({position:"fixed",zIndex:n})),f()):4<t.info.shift.y&&(a.show(),h()):"hit-bottom"===t.event&&l?(a.show(),h()):0<p&&0===t.info.viewport.y&&(s.css({paddingTop:null}),a.show().css({position:null,zIndex:null})),r.trigger("page:scroll",t)}},ready:function(e){d=e,r.expose("scroll",{get:function(){return d}}),r.trigger("scroll:ready",d)}}),r.expose("show",h),r.expose("hide",f)}},e.exports}()},{componentId:"https://zuixjs.github.io/zkit/lib/1.2/controllers/scroll-helper",controller:function(){"use strict";var e={};function i(n,i){let o=void 0,s=void 0;return function(){const e=this,t=arguments;s?(clearTimeout(o),o=setTimeout(function(){Date.now()-s>=i&&(n.apply(e,t),s=Date.now())},i-(Date.now()-s))):(n.apply(e,t),s=Date.now())}}return e.exports=function(){const s={timestamp:0,size:{width:0,height:0},viewport:{x:0,y:0,width:0,height:0}};let t,n,o,r=0,a;const l=this;function c(){null!=t&&clearTimeout(t);var e=(new Date).getTime();if(100<e-s.timestamp?u():t=setTimeout(function(){u()},99),!(e<r&&e-a<66)){a=e;const i="scroll-helper-visible";null!=n&&null!=o&&n.each(function(e,t){var n=this.position();if(!n.visible&&this.hasClass(i))this.removeClass(i),n.event="exit";else if(n.visible){if(!n.visible)return;this.hasClass(i)?n.event="scroll":(n.event="enter",this.addClass(i))}else n.event="off-scroll";o(this,n)})}}function u(){var e=l.view().get(),t=e.getBoundingClientRect(),t={top:t.top,right:t.right,bottom:t.bottom,left:t.left,width:t.width,height:t.height,x:t.x,y:t.y},e=(t.y=-l.view().get().scrollTop||t.y||0,t.height=l.view().get().scrollHeight||t.height||0,s.size.width=t.width,s.size.height=t.height,e===document.body?(s.size.width=document.body.offsetWidth,s.size.height=document.body.offsetHeight,s.viewport.width=document.documentElement.clientWidth||s.size.width,s.viewport.height=document.documentElement.clientHeight||s.size.height):(s.viewport.width=e.offsetWidth,s.viewport.height=e.offsetHeight),s.timestamp=(new Date).getTime(),s.shift={x:t.x-s.viewport.x,y:t.y-s.viewport.y},s.viewport.x=t.x,s.viewport.y=t.y,s.size.height+t.y-s.viewport.height);0==e||0===t.y?l.trigger("scroll:change",{event:0===t.y?"hit-top":"hit-bottom",info:s}):l.trigger("scroll:change",{event:"scroll",info:s})}function p(e,t){if((e instanceof Element||e instanceof zuix.$.ZxQuery)&&(e=zuix.$(e).position().y-s.viewport.y),-1===t)return d(e);var n=Date.now(),n=(t=(r=null!=t?n+t:r)-n,l.view().get());let i=0;i=n===document.body?void 0!==window.pageYOffset?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop:n.scrollTop;n=e-i;if(t<=0||0==n)d(e),c();else{const o=i+n/t*33;requestAnimationFrame(function(){d(o),p(e)})}}function d(e){var t=l.view().get();t===document.body?(document.documentElement.scrollTop=e,document.body.scrollTop=e):t.scrollTop=e}l.init=function(){l.options().html=!1,l.options().css=!1},l.create=function(){l.view().get()===document.body?0<l.options().throttle?window.onscroll=i(c,l.options().throttle):window.onscroll=c:0<l.options().throttle?l.view().on("scroll",{handler:i(c,l.options().throttle),passive:!0}):l.view().on("scroll",{handler:c,passive:!0});l.expose("watch",function(e,t){return e=e,t=t,o=null!=e?(n=l.view(e),t):n=null,l.context}),l.expose("scrollStart",function(e){return p(0,e=null==e?-1:e),l.context}).expose("scrollEnd",function(e){return null==e&&(e=-1),p(s.size.height,e),l.context}).expose("scrollTo",function(e,t){return p(e,t=null==t?-1:t),l.context}).expose("info",function(){return s}).expose("check",c)}},e.exports}()},{componentId:"https://zuixjs.github.io/zkit/lib/1.2/controllers/view-pager",controller:function(){"use strict";var e={};return e.exports=function(){const s={duration:.3,easing:"ease"},P="cubic-bezier(0.0,0.1,0.35,1.1)",X="cubic-bezier(0.0,0.1,0.35,1.0)",u="horizontal",p="vertical",i=1,Y=-1;let r=-1,o=0,n=null,a=3e3,l=i,e=null,c=!1,d=u,h=!1,f=!1,g=!1,x=!0,v=0,t=!1,m=!1,N=!1,w=!1,y=!1,b={width:0,height:0},z=null,T=null,k=null;const I=new MutationObserver(function(e,t){k=C.view().children(),D()}),C=this;function D(){null!=e&&clearTimeout(e),e=setTimeout(S,250)}function S(e){if(e||!m&&null==z){k.each(function(e,t){this.css({position:"absolute",left:0,top:0})});const o=H(C.view().get());if(0===o.width||0===o.height){if(0===o.height&&C.view().position().visible){let n=0;k.each(function(e,t){t=H(t);t.height>n&&(n=t.height)}),o.height<n&&C.view().css("height",n+"px")}D()}else{b=o;let n=0,i=!1;k.each(function(e,t){t=H(t);if(d===u){let e=(o.height-t.height)/2;e<0&&(e=0),J(this,s),Z(this,n,e),n+=t.width}else{let e=(o.width-t.width)/2;e<0&&(e=0),J(this,s),Z(this,e,n),n+=t.height}("true"===this.attr("z-lazy")||0<this.find('[z-lazy="true"]').length())&&(i=!0)}),w=i,F(r),1<k.length()&&M()}}else D()}function $(){let e=!1,t=parseInt(r)+1;return t>=k.length()&&(t=k.length()-1,e=!0),F(t,s),!e}function q(){let e=!1,t=parseInt(r)-1;return t<0&&(t=0,e=!0),F(t,s),!e}function W(){F(0,s)}function B(){F(k.length()-1,s)}function j(){C.view().position().visible&&F(parseInt(r)+l,s),M()}function M(e){var t;e&&(a=e),R(),!0===h&&(e=C.view().position().visible,n=e?(N||zuix.componentize(C.view()),t=k.eq(r).attr("slide-interval")||a,setTimeout(j,t)):setTimeout(M,500),N=e)}function R(){null!=n&&clearTimeout(n)}function G(a,l){let c=0;return k.each(function(e,t){var n=E(this),e=(c=e,H(t));const i=n.position.x,o=n.position.y,s=e.width,r=e.height;if(d===u&&(i>a||i+s>a)||d===p&&(o>l||o+r>l))return!1}),c}function U(e,t){var n=C.view().position();F(G(e.x-n.x,e.y-n.y),null!=t?t:s)}function F(e,t){o=r,e<0?(l=i,e=0):e>=k.length()?(l=Y,e=k.length()-1):e!==r&&(l=r<e?i:Y),(r=e)!=o&&(k.eq(r).css("z-index",1),-1!==o&&k.eq(o).css("z-index",0),C.trigger("page:change",{in:r,out:o}));var e=k.eq(e),n=E(e),e=H(e.get());_({x:(b.width-e.width)/2-n.position.x,y:(b.height-e.height)/2-n.position.y},t),M()}function _(t,n){var i=L(),o=E(k.eq(0)),s=k.eq(k.length()-1),r=E(s);if(k.each(function(e,t){var n=E(this),i=L();n.dragStart={x:i.marginLeft+n.position.x,y:i.marginTop+n.position.y}}),d===u){let e=t.x;0<o.position.x+t.x?e=-o.position.x:r.position.x+s.get().offsetWidth+t.x<b.width&&(e=2*-i.marginLeft+b.width-(r.position.x+s.get().offsetWidth)),t.x-e!=0&&null!=n&&(n={duration:n.duration*(e/t.x),easing:P},!isFinite(n.duration)||n.duration<0)&&(n.duration=.2),O(e,0,n)}else{let e=t.y;0<o.position.y+t.y?e=-o.position.y:r.position.y+s.get().offsetHeight+t.y<b.height&&(e=2*-i.marginTop+b.height-(r.position.y+s.get().offsetHeight)),t.y-e!=0&&null!=n&&(n={duration:n.duration*(e/t.y),easing:P},!isFinite(n.duration)||n.duration<0)&&(n.duration=.2),O(0,e,n)}y=!0}function H(e){var t=e.getBoundingClientRect();return{width:t.width||e.offsetWidth,height:e.offsetHeight||t.height}}function E(e){e=e.get().data=e.get().data||{};return e.position=e.position||{x:0,y:0},e}function A(){w&&null==T&&clearInterval(z)}function L(){const n={w:0,h:0,marginLeft:0,marginTop:0};return k.each(function(e,t){t=H(t);n.w+=t.width,n.h+=t.height}),d===u&&n.w<b.width?n.marginLeft=(b.width-n.w)/2:d===p&&n.h<b.height&&(n.marginTop=(b.height-n.h)/2),n}function O(i,o,s){null!=s?(w&&(A(),null!=T&&clearTimeout(T),null!=z&&clearInterval(z),z=setInterval(function(){t&&k.each(function(e,t){var n=window.getComputedStyle(t,null);const i=parseFloat(n.width.replace("px","")),o=parseFloat(n.height.replace("px",""));var s,r=parseFloat(n.left.replace("px","")),n=parseFloat(n.top.replace("px",""));0<i&&0<o&&(t=zuix.$(t),s={left:-b.width/2,right:1.5*b.width,top:-b.height/2,bottom:1.5*b.height},r+i<s.left||n+o<s.top||s.right<r||s.bottom<n?"hidden"!==t.visibility()&&t.visibility("hidden"):"visible"!==t.visibility()&&t.visibility("visible"))}),zuix.componentize(C.view())},10)),T=setTimeout(function(){T=null,A()},1e3*s.duration),s=s.duration+"s "+s.easing):w&&zuix.componentize(C.view()),k.each(function(e,t){var n=E(this);J(this,s),Z(this,n.dragStart.x+i,n.dragStart.y+o)})}function V(e,t){var n;m&&t.scrollIntent()&&!t.done&&(!c&&("left"!==t.direction&&"right"!==t.direction||d!==u)&&("up"!==t.direction&&"down"!==t.direction||d!==p)||(c||null!=t.event.touches||C.view().get().addEventListener("click",function(e){c&&(c=!1,e.cancelBubble=!0,e.preventDefault()),C.view().get().removeEventListener("click",this,!0)},!0),c=!0,t.cancel()),n=L(),d===u&&"horizontal"===t.scrollIntent()?O(t.shiftX-n.marginLeft,0):d===p&&"vertical"===t.scrollIntent()&&O(0,t.shiftY-n.marginTop))}function K(e){return!f||1.25<Math.abs(e.velocity)}function Q(e,t){if(ee(t)&&!K(t))switch(t.direction){case"right":d===u&&q();break;case"left":d===u&&$();break;case"down":d===p&&q();break;case"up":d===p&&$()}}function Z(e,t,n){var i=E(e);isNaN(t)||isNaN(n)||(i.position={x:t,y:n},e.css({left:i.position.x+"px",top:i.position.y+"px"}))}function J(e,t){e.css({transition:t=null==t?"none":t})}function ee(e){let t=document.elementsFromPoint(e.x,e.y);return(!(0<t.length)||C.view().get().contains(t[0]))&&0<(t=t.filter(e=>e.attributes["z-load"]&&e.attributes["z-load"].value===C.view().attr("z-load"))).length&&t[0]===C.view().get()}C.init=function(){var e=C.options();C.view();e.html=!1,e.css=!1,f=!0===e.paging||f,h=!0===e.autoSlide||h,x=!1!==e.passive&&x,g=!0===e.holdTouch||g,v=e.startGap||v,!0===e.verticalLayout&&(d=p),null!=e.slideInterval&&(a=e.slideInterval||a),t=!0===e.autoHide||t},C.create=function(){var e=C.view().css({position:"relative",overflow:"hidden"});k=e.children(),e.find("img").each(function(e,t){this.one("load",D)}),zuix.$(window).on("resize",function(){S(!0)}).on("orientationchange",function(){S(!0)}),I.observe(e.get(),{attributes:!1,childList:!0,subtree:!0,characterData:!1}),D();let t=null;zuix.load("@lib/controllers/gesture-helper",{view:e,passive:x,startGap:v,on:{"gesture:touch":function(e,t){ee(t)&&(c=!1,R(),m=!0,y=!1,k.each(function(e,t){var n=E(this),i=L(),t=window.getComputedStyle(t,null);n.position.x=parseFloat(t.left.replace("px","")),n.position.y=parseFloat(t.top.replace("px","")),this.css("left",n.position.x+"px"),this.css("top",n.position.y+"px"),n.dragStart={x:i.marginLeft+n.position.x,y:i.marginTop+n.position.y}}),g)&&t.cancel()},"gesture:release":function(e,t){if(null!=t&&(t.done=!0,!y)&&(d===u&&"horizontal"===t.scrollIntent()||d===p&&"vertical"===t.scrollIntent())){var n=null,i=Math.exp(Math.abs(t.velocity/(Math.abs(t.velocity)<=1.25?5:2))+1);let e=.99+i/1e3;.999<e&&(e=.999);const r=Math.log(.01/Math.abs(t.velocity))/Math.log(e),a={duration:r/1e3,easing:X},l=t.stepSpeed<1.25?0:i*t.velocity*(1-Math.pow(e,1+r))/(1-e),c={x:l,y:l};if(K(t)||null==n){var o=t;var s=c;f?(a.duration*=.5,d===u?U({x:o.x-s.x,y:o.y},a):U({x:o.x,y:o.y-s.y},a)):_(s,a)}}A(),m=!1,M()},"gesture:tap":function(e,n){ee(n)&&(null!=t&&clearTimeout(t),t=setTimeout(function(){var e,t;e=n,t=C.view().position(),t=G(e.x-t.x,e.y-t.y),C.trigger("page:tap",t,e),f&&U(e)},50))},"gesture:pan":V,"gesture:swipe":Q},ready:function(){S(!0),F(0)}}),C.expose("page",function(e){if(null==e)return parseInt(r);F(e,s)}).expose("get",function(e){return e<k.length()&&0<k.length()?k.eq(e):null}).expose("slide",function(e){!1!==e?M((h=!0)!==e?e:a):R()}).expose("layout",function(e){if(null==e)return d;d=e===p?p:u,D()}).expose("refresh",function(){S(!0)}).expose("next",$).expose("prev",q).expose("last",B).expose("first",W)},C.destroy=function(){null!=I&&I.disconnect()}},e.exports}()},{componentId:"https://zuixjs.github.io/zkit/lib/1.2/controllers/gesture-helper",controller:function(){"use strict";var e={};return e.exports=function(){const n=0,o=1,s=2,i=750;let r=n,a,l=!1,c=!0,u=-1,p,d,h,f=!1,g=(new Date).getTime();Math.sign=Math.sign||function(e){return(0<e)-(e<0)||+e};const x=this;function v(e,t,n){var i=(new Date).getTime();a={event:e,cancel:function(){a.event.cancelBubble=!0,c||a.event.preventDefault()},startX:t,startY:n,startTime:i,shiftX:0,shiftY:0,endTime:0,stepX:0,stepY:0,stepTime:i,velocity:0,x:t,y:n,scrollIntent:function(){switch(r){case o:return"horizontal";case s:return"vertical"}return!1}},h=function(i){let o;function e(){i.stepTime=i.endTime,i.stepX=i.shiftX,i.stepY=i.shiftY,i.stepSpeed=0,i.stepDistance=0}function s(){o=i.direction,r.time=(new Date).getTime(),r.x=i.x,r.y=i.y,i.velocity=0,i.distance=0,e()}const r={time:0,x:0,y:0},a={time:0,x:0,y:0};return s(),{update:function(){var e,t,n;a.time=(new Date).getTime(),a.x=i.x,a.y=i.y,null!=o&&o!==i.direction?s():(null==o&&i.direction!==o&&(o=i.direction),e=a.time-r.time,t={x:a.x-r.x,y:a.y-r.y},n=Math.sqrt(t.x*t.x+t.y*t.y),n=(i.distance=n)/e,i.velocity="left"===i.direction||"up"===i.direction?-n:n,i.stepTime=i.endTime-i.stepTime,t={x:i.shiftX-i.stepX,y:i.shiftY-i.stepY},i.stepDistance=Math.sqrt(t.x*t.x+t.y*t.y),i.stepSpeed=i.stepDistance/i.stepTime)},step:e}}(a),x.trigger("gesture:touch",a)}function t(e,t,n){null!=a&&(a.event=e,a.x=t,a.y=n,a.shiftX=t-a.startX,a.shiftY=n-a.startY,a.endTime=(new Date).getTime(),null!=(e=w())&&!1!==p&&(d=null!=d&&d!==a.direction?(p=!1,"cancel"):(p=e,a.direction)),x.trigger("gesture:pan",a))}function m(e){null!=a&&(h.update(),a.event=e,null!=(p=null==p?w():p))&&!1!==p&&x.trigger(p,a),x.trigger("gesture:release",a),r=n,d=null,p=null,a=null}function w(){let e=null;h.update();var t=180*Math.atan2(a.shiftY-a.stepY,a.shiftX-a.stepX)/Math.PI;return 0===a.shiftX&&0===a.shiftY&&a.startTime>g+100&&a.stepTime<i?(g=(new Date).getTime(),e="gesture:tap"):(r===n||r===o)&&2<a.stepDistance&&(135<=t&&t<=180||-180<=t&&t<=-135)?(a.direction="left",e="gesture:swipe",r=o):(r===n||r===o)&&2<a.stepDistance&&(0<=t&&t<=45||-45<=t&&t<0)?(a.direction="right",e="gesture:swipe",r=o):(r===n||r===s)&&2<a.stepDistance&&45<t&&t<135?(a.direction="down",e="gesture:swipe",r=s):(r===n||r===s)&&2<a.stepDistance&&-135<t&&t<-45&&(a.direction="up",e="gesture:swipe",r=s),2<a.stepDistance&&h.step(),e}x.init=function(){var e=x.options();e.html=!1,e.css=!1,c=!1!==e.passive&&c,u=e.startGap||u},x.create=function(){(c?zuix.$(window):x.view()).on("dragstart",{handler:function(e){l||c||e.preventDefault()},passive:c}).on("mousedown",{handler:function(e){var t=zuix.$(e.target);!(l=-1===document.elementsFromPoint(e.x,e.y).indexOf(x.view().get()))&&1===e.which&&0===t.parent('[class*="no-gesture"]').length()&&e.x>u?(f=!0,l=!1,t.get().draggable=!1,v(e,e.x,e.y)):l=!0},passive:c}).on("mousemove",{handler:function(e){!l&&f&&t(e,e.x,e.y)},passive:c}).on("mouseup",function(e){1!==e.which||l||(f=!1,m(e))}).on("touchstart",{handler:function(e){var t=zuix.$(e.target);!(l=-1===document.elementsFromPoint(e.touches[0].clientX,e.touches[0].clientY).indexOf(x.view().get()))&&0===t.parent('[class*="no-gesture"]').length()&&e.touches[0].clientX>u?(l=!1,t.get().draggable=!1,v(e,e.touches[0].clientX,e.touches[0].clientY)):l=!0},passive:c}).on("touchmove",{handler:function(e){l||t(e,e.touches[0].clientX,e.touches[0].clientY)},passive:c}).on("touchend",function(e){l||m(e)})}},e.exports}()},{componentId:"https://zuixjs.github.io/zkit/lib/1.2/controllers/drawer-layout",controller:function(){"use strict";var e={};return e.exports=function(){let i=!0,o=!1,t=!1,s=!1,r=!0,a=null,l=null,c=null,u=280,e=960,p=!1,d=0;const h=this;function f(){l.visibility("initial").css("left",0).get().focus(),t&&(l.find("a").one("click",function(){g()}),a.css("opacity","initial"),a.show()),i||(i=!0,h.trigger("drawer:open",{smallScreen:t}))}function g(){var e;t&&(e=function(){i||l.visibility("hidden")},l.one("transitionend transitioncancel",function(){e()}),l.css("left",-u+"px"),a.hide(),i)&&(i=!1,h.trigger("drawer:close",{smallScreen:t})),i=!1,l.find("a").off("click")}function x(){return i}function v(){(window.innerWidth||document.body.clientWidth)<e||-1===e||p?(t&&!r||(t=!0,o=!1,n()),g()):(t||r)&&(t&&(a.hide(),i)&&g(),t=!1,o=!0,n(),f())}function n(){var e;r||m(),c&&(e=parseFloat(getComputedStyle(c.get(),null).getPropertyValue("padding-left")),t?c.css({paddingLeft:e-u+"px"}):c.css({paddingLeft:u+e+"px"})),h.trigger("layout:change",{smallScreen:t,drawerLocked:o})}function m(){var e;s||(s=!0,e="ease .15s",l.css({"transition-property":"left",transition:e}),a.css({"transition-property":"opacity",transition:e}))}h.init=function(){this.options().html=!1,this.options().css=!1,isNaN(this.options().drawerWidth)||(u=parseInt(this.options().drawerWidth));isNaN(this.options().autoHideWidth)||(e=parseInt(this.options().autoHideWidth))},h.create=function(){l=h.view(),c=h.options().mainContent,(a=zuix.$(document.createElement("div"))).css({position:"fixed",top:0,left:0,bottom:0,right:0,"z-index":100,"background-color":"rgba(0, 0, 0, 0.5)"}).on("click",function(){o||g()}).hide(),l.parent().append(a.get()),l.css({position:"fixed","overflow-y":"auto",left:0,width:u+"px",top:0,bottom:0,"z-index":101,"-webkit-box-shadow":"8px 0 6px -6px rgba(0,0,0,0.25)","-moz-box-shadow":"8px 0 6px -6px rgba(0,0,0,0.25)","box-shadow":"8px 0 6px -6px rgba(0,0,0,0.25)"}).attr("tabindex",0);let n=!1;zuix.load("@lib/controllers/gesture-helper",{view:document.documentElement,on:{"gesture:touch":function(e,t){o||(m(),d=i&&t.startX<u?u-t.startX:0)},"gesture:release":function(e,t){o||n&&(n=!1,m(),(0<t.velocity?f:g)())},"gesture:pan":function(e,t){o||"horizontal"!==t.scrollIntent()||((n||i)&&t.x<u||!n&&t.x<50)&&(n=n||!0,m(),0<(t=(t=t).x)&&t<=u-d&&(t=-u+t+d,"hidden"===l.visibility()&&l.visibility("initial"),l.css("left",t+"px"),"none"===a.display()&&a.show(),a.css("opacity",(u+t)/u)),s)&&(s=!1,l.css({transition:"none"}),a.css({transition:"none"}))}}}),h.expose("toggle",function(){m(),(i?g:f)()}),h.expose("open",function(){m(),f()}),h.expose("close",function(){m(),g()}),h.expose("isOpen",x),h.expose("lock",function(e){if(null==e)return o;o=e}),h.expose("float",function(e){if(null==e)return p;p=e,v()}),l.on("keydown",function(e){27===(e=e||window.event).keyCode&&g()}),v(),r=!1,window.addEventListener("resize",function(){v()})}},e.exports}()}]);