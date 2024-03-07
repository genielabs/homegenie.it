zuix.setComponentCache([{componentId:"components/media-browser",controller:function(){"use strict";var t={};return t.exports=function(a){let i=0,o=!1,t=!1,n=!0,r,l,c;function u(t,n){i=+n.in;var e=l.get(i),e=(e&&e.addClass("page-active"),l.get(+n.out));e&&e.removeClass("page-active")}function p(t){return r.page(t)}function d(){o||f(),a.view().show(),a.trigger("open")}function h(){g(),o||a.trigger("close")}function f(){n||(n=!0,a.view().addClass("fullscreen").css({}),w(),a.trigger("fullscreen:open"))}function g(){var t;n&&(n=!1,o&&(a.view().removeClass("fullscreen"),t=getComputedStyle(a.view().get()),parseInt(t.width),0===parseInt(t.height)&&a.view().css({}),w()),a.trigger("fullscreen:close"))}function x(){(t?v:m)()}function v(){t=!1,a.trigger("controls:hide")}function m(){t=!0,null!=l&&null!=r&&(1<c.length()?(l.$.parent().show(),l.page(r.page())):l.$.parent().hide()),a.trigger("controls:show")}function w(){setTimeout(function(){l&&l.refresh(),r&&r.refresh()},10)}a.create=function(){a.expose({open:d,close:h,current:p,showControls:m,hideControls:v,toggleControls:x,refresh:w,fullScreen:function(t){(t?f:g)()},next:function(){r.next()},prev:function(){r.prev()}}),a.expose("ui",{get:function(){return{currentPage:i,isFirstPage:function(){return 0===i},isLastPage:function(){return!c||i===c.length()-1},inlineMode:o,showingFullscreen:n}}});const s=a.field("carousel"),e=(zuix.context(s,function(){(l=this).on("page:change",u).on("page:tap",function(t,n){r.page(n)}),setTimeout(()=>{var t=l.get(0);t&&t.addClass("page-active")})}),a.field("media"));var t;zuix.context(e,function(){(r=this).on({"page:tap":function(){x(),a.view().get().focus()},"page:change":function(t,n){l.page(n.in),a.trigger("page:change",n)}}),c=e.children().each(function(t,n,e){let i=this.find('[z-field="preview"]'),o=(i.get()&&"IMG"!==i.get().tagName&&(i.attr("z-field",null),i=i.find("IMG").attr("z-field","preview")),i.on("load error",function(){l&&l.refresh()}),0<i.length()?(this.css({background:'url("'+i.attr("src")+'") scroll no-repeat center/contain'}),s.append(i.detach().get())):s.append(document.createElement("div")),e.addClass("visible-on-ready"),this.attr("data-type"));null==o&&(o="image"),this.attr({"z-load":a.context.componentId+"/"+o,"z-lazy":!0,"data-index":t}),zuix.context(n,function(){this.host(a.view())})});const t=a.options().slide;var n;r.slide(null!=t&&+t),n={duration:"0.5s",timingFunction:"ease-in-out"},a.addTransition("fadeIn",{transform:"translateXY(0,0)",opacity:"1"},n),a.addTransition("fadeOutUp",{transform:"translateY(-200px)",opacity:"0"},n),a.addTransition("fadeOutDown",{transform:"translateY(200px)",opacity:"0"},n),a.addTransition("fadeOutLeft",{transform:"translateX(-100px)",opacity:0},n),a.addTransition("fadeOutRight",{transform:"translateX(100px)",opacity:0},n),a.addTransition("zoomIn",{transform:"scale(1)"},{duration:"250ms",timingFunction:"ease-in-out"}),a.addTransition("zoomOut",{transform:"scale(0)"},{duration:"250ms",timingFunction:"ease-in-out"}),a.view().on("dragstart",{handler:function(t){"IMG"===t.target.nodeName.toUpperCase()&&t.preventDefault()},passive:!1}),zuix.context(s,()=>{(t?v:m)(),o&&d()})}),a.view().attr("tabindex",0),document.body.addEventListener("keydown",function(t){if(a.view().get()===document.activeElement)switch(t.code){case"Escape":h(),t.preventDefault();break;case"Space":x(),t.preventDefault();break;case"ArrowLeft":r.prev(),t.preventDefault();break;case"ArrowUp":m(),t.preventDefault();break;case"ArrowRight":r.next(),t.preventDefault();break;case"ArrowDown":v(),t.preventDefault()}}),(o=a.options().inline)?setTimeout(g,100):(a.view().hide(),n=!1,t=a.options().button,zuix.field(t).on("click",d))}},t.exports}(),css:':host {\n    -webkit-touch-callout: none; /* iOS Safari */\n    -webkit-user-select: none; /* Safari */\n    -khtml-user-select: none; /* Konqueror HTML */\n    -moz-user-select: none; /* Firefox */\n    -ms-user-select: none; /* Internet Explorer/Edge */\n    user-select: none; /* Non-prefixed version, currently\n                                  supported by Chrome and Opera */\n    overflow: hidden;\n    position: relative;\n    width: 100%;\n}\n:host.fullscreen {\n    position: fixed;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    z-index: 10000;\n}\n\n.container {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    z-index: 20;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -moz-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-flex-align: stretch;\n    -ms-flex-align: stretch;\n    -webkit-align-items: stretch;\n    align-items: stretch;\n    justify-content: center;\n    background: black;\n}\n\n[z-field="media"] article {\n    width: 100%;\n    height: 100%;\n}\n\n[z-field="media"] article:not([z-loaded]) > * {\n    display: none;\n}\n\n[z-field="carousel"] {\n    overflow: visible !important;\n    height: 100%!important;\n}\n\n[z-field="preview"] {\n    padding: 0 4px;\n    border-top: solid 4px transparent;\n    border-bottom: solid 4px transparent;\n    position: relative;\n    width: auto;\n    height: 90%;\n    transition: all 0.2s ease-in;\n    opacity: 1.0;\n    transform: scale(1.0);\n}\n\n[z-field="controls"] {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    height: 140px;\n    max-height: 20%;\n    z-index: 1001;\n    padding-left: 6px;\n    padding-right: 6px;\n    background-color: rgba(0,0,0,0.75);\n}\n\n[z-field*="nav"] {\n    z-index: 10;\n    background-color: rgba(1,1,1,0.75);\n    border-radius: 12px;\n}\n\n[z-field="navPrev"] {\n    position: absolute;\n    left: 12px;\n    bottom: calc(50% - 24px);\n    border: solid 1px white;\n    border-radius: 48px;\n}\n[z-field="navNext"] {\n    position: absolute;\n    right: 12px;\n    bottom: calc(50% - 24px);\n    border: solid 1px white;\n    border-radius: 48px;\n}\n[z-field="navClose"] {\n    position: absolute;\n    right: 12px;\n    top: 12px;\n}\n[z-field="navFullscreen"] {\n    position: absolute;\n    right: 12px;\n    top: 12px;\n}\n[z-field="navFullscreen-exit"] {\n    position: absolute;\n    right: 12px;\n    top: 12px;\n}\n\nsvg {\n    vertical-align: middle!important;\n    fill: white!important;\n    cursor: pointer!important;\n}\n\n.media-list {\n    width: 100%;\n    height: 100%;\n}\n\n.page-active {\n    /*box-shadow: 0 0 16px 4px rgb(0 0 255 / 100%);*/\n    border-radius: 4px;\n    border-top: solid 4px greenyellow!important;\n    border-bottom: solid 4px greenyellow!important;\n    transform: scale(1.0) !important;\n    opacity: 1.0;\n    padding: 0 4px;\n}\n\n@media only screen and (max-width: 820px) {\n    [z-field="controls"] {\n        height: 104px;\n    }\n    [z-field="preview"] img {\n        max-height: 80px;\n    }\n    [z-field="navPrev"] {\n        left: 6px;\n    }\n    [z-field="navNext"] {\n        right: 6px;\n    }\n    [z-field="navClose"] {\n        right: 6px;\n        top: 6px;\n    }\n    [z-field="navFullscreen"] {\n        right: 6px;\n        top: 6px;\n    }\n    [z-field="navFullscreenExit"] {\n        right: 6px;\n        top: 6px;\n    }\n}\n',view:'<div #container="" class="container">\n\n    <div ctrl="" z-load="@lib/controllers/view-pager" :paging="true" :auto-hide="true" #media="" class="media-list visible-on-ready"></div>\n\n    <div #controls="" fx-show="fadeIn" fx-hide="fadeOutDown">\n\n        <div ctrl="" z-load="@lib/controllers/view-pager" :auto-hide="true" #carousel=""></div>\n\n    </div>\n\n    <div #nav-fullscreen="" fx-show="fadeIn" fx-hide="fadeOutUp" @hide-if="!context.ui.inlineMode || context.ui.showingFullscreen" (click)="context.fullScreen(true)">\n        <svg width="48px" height="48px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n            <path d="M0 0h24v24H0V0z" fill="none"></path>\n            <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"></path>\n        </svg>\n    </div>\n    <div #nav-close="" fx-show="fadeIn" fx-hide="fadeOutUp" @hide-if="!context.ui.showingFullscreen" (click)="context.close()">\n        <svg width="48" height="48" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>\n            <path d="M0 0h24v24H0z" fill="none"></path>\n        </svg>\n    </div>\n    <div #nav-prev="" fx-show="fadeIn" fx-hide="fadeOutLeft" @hide-if="context.ui.isFirstPage()" (click)="context.prev()">\n        <svg width="48" height="48" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>\n            <path d="M0 0h24v24H0z" fill="none"></path>\n        </svg>\n    </div>\n    <div #nav-next="" fx-show="fadeIn" fx-hide="fadeOutRight" @hide-if="context.ui.isLastPage()" (click)="context.next()">\n        <svg height="48" width="48" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>\n            <path d="M0 0h24v24H0z" fill="none"></path>\n        </svg>\n    </div>\n\n</div>\n\x3c!-- do not remove the following line --\x3e\n<script><\/script>\n\n\x3c!-- script to handle UI status changes --\x3e\n<script type="jscript">\n  let openButton = context.options().button;\n  const scrollParent = $.get().offsetParent || document.body;\n  context.on(\'controls:show\', () => {\n    fxShow([$controls, $navNext, $navPrev, $navClose, $navFullscreen]);\n  });\n  context.on(\'controls:hide\', () => {\n    fxHide([$controls, $navNext, $navPrev, $navClose, $navFullscreen]);\n  });\n  context.on(\'fullscreen:open\', () => {\n    if (!context.ui.inlineMode) {\n      zuix.componentize(false);\n      setTransitionOrigin();\n      $.playTransition({\n          classes: \'zoomOut zoomIn\',\n          holdState: true,\n          onEnd: function($el) {\n              this.get().focus();\n              zuix.componentize(true);\n              setTimeout(context.refresh, 200);\n          }\n      });\n    }\n    if (scrollParent) {\n      scrollParent.style.overflow = \'hidden\';\n    }\n  });\n  context.on(\'fullscreen:close\', () => {\n    if (!context.ui.inlineMode) {\n      zuix.componentize(false);\n      setTransitionOrigin();\n      $.playTransition({\n          classes: \'zoomIn zoomOut\',\n          holdState: true,\n          onEnd: function($el, queue) {\n              this.hide();\n              zuix.componentize(true);\n          }\n      });\n    }\n    if (scrollParent) {\n      scrollParent.style.overflow = null;\n    }\n  });\n  function fxShow(elements) {\n    elements.forEach($el => {\n      const fxHide = $el.attr(\'fx-hide\');\n      const fxShow = $el.attr(\'fx-show\');\n      $el.playTransition({classes: [fxHide, fxShow], holdState: true});\n    });\n  }\n  function fxHide(elements) {\n    elements.forEach($el => {\n      const fxHide = $el.attr(\'fx-hide\');\n      const fxShow = $el.attr(\'fx-show\');\n      $el.playTransition({classes: [fxShow, fxHide], holdState: true});\n    });\n  }\n  function setTransitionOrigin() {\n    if (openButton) {\n      const p = zuix.field(openButton).position();\n      $.css({\n        \'transform-origin\': p.x + (p.rect.width/2) + \'px \' + (p.y + (p.rect.height/2)) + \'px\'\n      });\n    }\n  }\n<\/script>\n'},{componentId:"https://zuixjs.github.io/zkit/lib/1.2/controllers/mdl-button",controller:class extends ControllerInstance{onInit(){var t=this.options().theme||"indigo-pink",n=this.view().parent().get()instanceof ShadowRoot;n&&(this.options().fetchOptions={priority:"low"}),self.MaterialButton||this.using("script","@cdnjs/material-design-lite/1.3.0/material.min.js"),zuix.$.classExists(".mdl-button")&&!n||this.using("style","@cdnjs/material-design-lite/1.3.0/material."+t+".min.css"),zuix.$.classExists(".material-icons")||zuix.using("style","https://fonts.googleapis.com/icon?family=Material+Icons&display=swap")}onCreate(){const n=this.view();var t=this.options(),e=t.type||"raised";n.addClass("mdl-button mdl-js-button mdl-button--"+e+" mdl-js-ripple-effect"),t.class&&t.class.split(" ").forEach(t=>{n.addClass("mdl-button--"+t)}),"fab"!==e&&"icon"!==e||-1!==n.html().indexOf("material-icons")||(t=n.get().textContent,n.html(`<i class="material-icons">${t}</i>`)),this.initializeMdl(n)}initializeMdl(t){zuix.activeRefresh(t,t,null,(t,n,e,i)=>{window.componentHandler?componentHandler.upgradeElements(t.get()):i(e,33,!0)}).start()}}},{componentId:"https://zuixjs.github.io/zkit/lib/1.2/controllers/view-pager",controller:function(){"use strict";var t={};return t.exports=function(){const s={duration:.3,easing:"ease"},P="cubic-bezier(0.0,0.1,0.35,1.1)",Y="cubic-bezier(0.0,0.1,0.35,1.0)",u="horizontal",p="vertical",i=1,E=-1;let a=-1,o=0,e=null,r=3e3,l=i,t=null,c=!1,d=u,h=!1,f=!1,g=!1,x=!0,v=0,n=!1,m=!1,q=!1,w=!1,y=!1,b={width:0,height:0},z=null,T=null,I=null;const M=new MutationObserver(function(t,n){I=$.view().children(),k()}),$=this;function k(){null!=t&&clearTimeout(t),t=setTimeout(D,250)}function D(t){if(t||!m&&null==z){I.each(function(t,n){this.css({position:"absolute",left:0,top:0})});const o=L($.view().get());if(0===o.width||0===o.height){if(0===o.height&&$.view().position().visible){let e=0;I.each(function(t,n){n=L(n);n.height>e&&(e=n.height)}),o.height<e&&$.view().css("height",e+"px")}k()}else{b=o;let e=0,i=!1;I.each(function(t,n){n=L(n);if(d===u){let t=(o.height-n.height)/2;t<0&&(t=0),_(this,s),Q(this,e,t),e+=n.width}else{let t=(o.width-n.width)/2;t<0&&(t=0),_(this,s),Q(this,t,e),e+=n.height}("true"===this.attr("z-lazy")||0<this.find('[z-lazy="true"]').length())&&(i=!0)}),w=i,F(a),1<I.length()&&C()}}else k()}function S(){let t=!1,n=parseInt(a)+1;return n>=I.length()&&(n=I.length()-1,t=!0),F(n,s),!t}function N(){let t=!1,n=parseInt(a)-1;return n<0&&(n=0,t=!0),F(n,s),!t}function B(){F(0,s)}function j(){F(I.length()-1,s)}function R(){$.view().position().visible&&F(parseInt(a)+l,s),C()}function C(t){var n;t&&(r=t),U(),!0===h&&(t=$.view().position().visible,e=t?(q||zuix.componentize($.view()),n=I.eq(a).attr("slide-interval")||r,setTimeout(R,n)):setTimeout(C,500),q=t)}function U(){null!=e&&clearTimeout(e)}function G(r,l){let c=0;return I.each(function(t,n){var e=O(this),t=(c=t,L(n));const i=e.position.x,o=e.position.y,s=t.width,a=t.height;if(d===u&&(i>r||i+s>r)||d===p&&(o>l||o+a>l))return!1}),c}function V(t,n){var e=$.view().position();F(G(t.x-e.x,t.y-e.y),null!=n?n:s)}function F(t,n){o=a,t<0?(l=i,t=0):t>=I.length()?(l=E,t=I.length()-1):t!==a&&(l=a<t?i:E),(a=t)!=o&&(I.eq(a).css("z-index",1),-1!==o&&I.eq(o).css("z-index",0),$.trigger("page:change",{in:a,out:o}));var t=I.eq(t),e=O(t),t=L(t.get());A({x:(b.width-t.width)/2-e.position.x,y:(b.height-t.height)/2-e.position.y},n),C()}function A(n,e){var i=H(),o=O(I.eq(0)),s=I.eq(I.length()-1),a=O(s);if(I.each(function(t,n){var e=O(this),i=H();e.dragStart={x:i.marginLeft+e.position.x,y:i.marginTop+e.position.y}}),d===u){let t=n.x;0<o.position.x+n.x?t=-o.position.x:a.position.x+s.get().offsetWidth+n.x<b.width&&(t=2*-i.marginLeft+b.width-(a.position.x+s.get().offsetWidth)),n.x-t!=0&&null!=e&&(e={duration:e.duration*(t/n.x),easing:P},!isFinite(e.duration)||e.duration<0)&&(e.duration=.2),X(t,0,e)}else{let t=n.y;0<o.position.y+n.y?t=-o.position.y:a.position.y+s.get().offsetHeight+n.y<b.height&&(t=2*-i.marginTop+b.height-(a.position.y+s.get().offsetHeight)),n.y-t!=0&&null!=e&&(e={duration:e.duration*(t/n.y),easing:P},!isFinite(e.duration)||e.duration<0)&&(e.duration=.2),X(0,t,e)}y=!0}function L(t){var n=t.getBoundingClientRect();return{width:n.width||t.offsetWidth,height:t.offsetHeight||n.height}}function O(t){t=t.get().data=t.get().data||{};return t.position=t.position||{x:0,y:0},t}function W(){w&&null==T&&clearInterval(z)}function H(){const e={w:0,h:0,marginLeft:0,marginTop:0};return I.each(function(t,n){n=L(n);e.w+=n.width,e.h+=n.height}),d===u&&e.w<b.width?e.marginLeft=(b.width-e.w)/2:d===p&&e.h<b.height&&(e.marginTop=(b.height-e.h)/2),e}function X(i,o,s){null!=s?(w&&(W(),null!=T&&clearTimeout(T),null!=z&&clearInterval(z),z=setInterval(function(){n&&I.each(function(t,n){var e=window.getComputedStyle(n,null);const i=parseFloat(e.width.replace("px","")),o=parseFloat(e.height.replace("px",""));var s,a=parseFloat(e.left.replace("px","")),e=parseFloat(e.top.replace("px",""));0<i&&0<o&&(n=zuix.$(n),s={left:-b.width/2,right:1.5*b.width,top:-b.height/2,bottom:1.5*b.height},a+i<s.left||e+o<s.top||s.right<a||s.bottom<e?"hidden"!==n.visibility()&&n.visibility("hidden"):"visible"!==n.visibility()&&n.visibility("visible"))}),zuix.componentize($.view())},10)),T=setTimeout(function(){T=null,W()},1e3*s.duration),s=s.duration+"s "+s.easing):w&&zuix.componentize($.view()),I.each(function(t,n){var e=O(this);_(this,s),Q(this,e.dragStart.x+i,e.dragStart.y+o)})}function Z(t,n){var e;m&&n.scrollIntent()&&!n.done&&(!c&&("left"!==n.direction&&"right"!==n.direction||d!==u)&&("up"!==n.direction&&"down"!==n.direction||d!==p)||(c||null!=n.event.touches||$.view().get().addEventListener("click",function(t){c&&(c=!1,t.cancelBubble=!0,t.preventDefault()),$.view().get().removeEventListener("click",this,!0)},!0),c=!0,n.cancel()),e=H(),d===u&&"horizontal"===n.scrollIntent()?X(n.shiftX-e.marginLeft,0):d===p&&"vertical"===n.scrollIntent()&&X(0,n.shiftY-e.marginTop))}function J(t){return!f||1.25<Math.abs(t.velocity)}function K(t,n){if(tt(n)&&!J(n))switch(n.direction){case"right":d===u&&N();break;case"left":d===u&&S();break;case"down":d===p&&N();break;case"up":d===p&&S()}}function Q(t,n,e){var i=O(t);isNaN(n)||isNaN(e)||(i.position={x:n,y:e},t.css({left:i.position.x+"px",top:i.position.y+"px"}))}function _(t,n){t.css({transition:n=null==n?"none":n})}function tt(t){let n=document.elementsFromPoint(t.x,t.y);return(!(0<n.length)||$.view().get().contains(n[0]))&&0<(n=n.filter(t=>t.attributes["z-load"]&&t.attributes["z-load"].value===$.view().attr("z-load"))).length&&n[0]===$.view().get()}$.init=function(){var t=$.options();$.view();t.html=!1,t.css=!1,f=!0===t.paging||f,h=!0===t.autoSlide||h,x=!1!==t.passive&&x,g=!0===t.holdTouch||g,v=t.startGap||v,!0===t.verticalLayout&&(d=p),null!=t.slideInterval&&(r=t.slideInterval||r),n=!0===t.autoHide||n},$.create=function(){var t=$.view().css({position:"relative",overflow:"hidden"});I=t.children(),t.find("img").each(function(t,n){this.one("load",k)}),zuix.$(window).on("resize",function(){D(!0)}).on("orientationchange",function(){D(!0)}),M.observe(t.get(),{attributes:!1,childList:!0,subtree:!0,characterData:!1}),k();let n=null;zuix.load("@lib/controllers/gesture-helper",{view:t,passive:x,startGap:v,on:{"gesture:touch":function(t,n){tt(n)&&(c=!1,U(),m=!0,y=!1,I.each(function(t,n){var e=O(this),i=H(),n=window.getComputedStyle(n,null);e.position.x=parseFloat(n.left.replace("px","")),e.position.y=parseFloat(n.top.replace("px","")),this.css("left",e.position.x+"px"),this.css("top",e.position.y+"px"),e.dragStart={x:i.marginLeft+e.position.x,y:i.marginTop+e.position.y}}),g)&&n.cancel()},"gesture:release":function(t,n){if(null!=n&&(n.done=!0,!y)&&(d===u&&"horizontal"===n.scrollIntent()||d===p&&"vertical"===n.scrollIntent())){var e=null,i=Math.exp(Math.abs(n.velocity/(Math.abs(n.velocity)<=1.25?5:2))+1);let t=.99+i/1e3;.999<t&&(t=.999);const a=Math.log(.01/Math.abs(n.velocity))/Math.log(t),r={duration:a/1e3,easing:Y},l=n.stepSpeed<1.25?0:i*n.velocity*(1-Math.pow(t,1+a))/(1-t),c={x:l,y:l};if(J(n)||null==e){var o=n;var s=c;f?(r.duration*=.5,d===u?V({x:o.x-s.x,y:o.y},r):V({x:o.x,y:o.y-s.y},r)):A(s,r)}}W(),m=!1,C()},"gesture:tap":function(t,e){tt(e)&&(null!=n&&clearTimeout(n),n=setTimeout(function(){var t,n;t=e,n=$.view().position(),n=G(t.x-n.x,t.y-n.y),$.trigger("page:tap",n,t),f&&V(t)},50))},"gesture:pan":Z,"gesture:swipe":K},ready:function(){D(!0),F(0)}}),$.expose("page",function(t){if(null==t)return parseInt(a);F(t,s)}).expose("get",function(t){return t<I.length()&&0<I.length()?I.eq(t):null}).expose("slide",function(t){!1!==t?C((h=!0)!==t?t:r):U()}).expose("layout",function(t){if(null==t)return d;d=t===p?p:u,k()}).expose("refresh",function(){D(!0)}).expose("next",S).expose("prev",N).expose("last",j).expose("first",B)},$.destroy=function(){null!=M&&M.disconnect()}},t.exports}()},{componentId:"https://zuixjs.github.io/zkit/lib/1.2/controllers/gesture-helper",controller:function(){"use strict";var t={};return t.exports=function(){const e=0,o=1,s=2,i=750;let a=e,r,l=!1,c=!0,u=-1,p,d,h,f=!1,g=(new Date).getTime();Math.sign=Math.sign||function(t){return(0<t)-(t<0)||+t};const x=this;function v(t,n,e){var i=(new Date).getTime();r={event:t,cancel:function(){r.event.cancelBubble=!0,c||r.event.preventDefault()},startX:n,startY:e,startTime:i,shiftX:0,shiftY:0,endTime:0,stepX:0,stepY:0,stepTime:i,velocity:0,x:n,y:e,scrollIntent:function(){switch(a){case o:return"horizontal";case s:return"vertical"}return!1}},h=function(i){let o;function t(){i.stepTime=i.endTime,i.stepX=i.shiftX,i.stepY=i.shiftY,i.stepSpeed=0,i.stepDistance=0}function s(){o=i.direction,a.time=(new Date).getTime(),a.x=i.x,a.y=i.y,i.velocity=0,i.distance=0,t()}const a={time:0,x:0,y:0},r={time:0,x:0,y:0};return s(),{update:function(){var t,n,e;r.time=(new Date).getTime(),r.x=i.x,r.y=i.y,null!=o&&o!==i.direction?s():(null==o&&i.direction!==o&&(o=i.direction),t=r.time-a.time,n={x:r.x-a.x,y:r.y-a.y},e=Math.sqrt(n.x*n.x+n.y*n.y),e=(i.distance=e)/t,i.velocity="left"===i.direction||"up"===i.direction?-e:e,i.stepTime=i.endTime-i.stepTime,n={x:i.shiftX-i.stepX,y:i.shiftY-i.stepY},i.stepDistance=Math.sqrt(n.x*n.x+n.y*n.y),i.stepSpeed=i.stepDistance/i.stepTime)},step:t}}(r),x.trigger("gesture:touch",r)}function n(t,n,e){null!=r&&(r.event=t,r.x=n,r.y=e,r.shiftX=n-r.startX,r.shiftY=e-r.startY,r.endTime=(new Date).getTime(),null!=(t=w())&&!1!==p&&(d=null!=d&&d!==r.direction?(p=!1,"cancel"):(p=t,r.direction)),x.trigger("gesture:pan",r))}function m(t){null!=r&&(h.update(),r.event=t,null!=(p=null==p?w():p))&&!1!==p&&x.trigger(p,r),x.trigger("gesture:release",r),a=e,d=null,p=null,r=null}function w(){let t=null;h.update();var n=180*Math.atan2(r.shiftY-r.stepY,r.shiftX-r.stepX)/Math.PI;return 0===r.shiftX&&0===r.shiftY&&r.startTime>g+100&&r.stepTime<i?(g=(new Date).getTime(),t="gesture:tap"):(a===e||a===o)&&2<r.stepDistance&&(135<=n&&n<=180||-180<=n&&n<=-135)?(r.direction="left",t="gesture:swipe",a=o):(a===e||a===o)&&2<r.stepDistance&&(0<=n&&n<=45||-45<=n&&n<0)?(r.direction="right",t="gesture:swipe",a=o):(a===e||a===s)&&2<r.stepDistance&&45<n&&n<135?(r.direction="down",t="gesture:swipe",a=s):(a===e||a===s)&&2<r.stepDistance&&-135<n&&n<-45&&(r.direction="up",t="gesture:swipe",a=s),2<r.stepDistance&&h.step(),t}x.init=function(){var t=x.options();t.html=!1,t.css=!1,c=!1!==t.passive&&c,u=t.startGap||u},x.create=function(){(c?zuix.$(window):x.view()).on("dragstart",{handler:function(t){l||c||t.preventDefault()},passive:c}).on("mousedown",{handler:function(t){var n=zuix.$(t.target);!(l=-1===document.elementsFromPoint(t.x,t.y).indexOf(x.view().get()))&&1===t.which&&0===n.parent('[class*="no-gesture"]').length()&&t.x>u?(f=!0,l=!1,n.get().draggable=!1,v(t,t.x,t.y)):l=!0},passive:c}).on("mousemove",{handler:function(t){!l&&f&&n(t,t.x,t.y)},passive:c}).on("mouseup",function(t){1!==t.which||l||(f=!1,m(t))}).on("touchstart",{handler:function(t){var n=zuix.$(t.target);!(l=-1===document.elementsFromPoint(t.touches[0].clientX,t.touches[0].clientY).indexOf(x.view().get()))&&0===n.parent('[class*="no-gesture"]').length()&&t.touches[0].clientX>u?(l=!1,n.get().draggable=!1,v(t,t.touches[0].clientX,t.touches[0].clientY)):l=!0},passive:c}).on("touchmove",{handler:function(t){l||n(t,t.touches[0].clientX,t.touches[0].clientY)},passive:c}).on("touchend",function(t){l||m(t)})}},t.exports}()},{componentId:"_res/style/style-310852538",controller:null,css:"@font-face {\n  font-family: 'Material Icons';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/materialicons/v126/flUhRq6tzZclQEJ-Vdg-IuiaDsNZ.ttf) format('truetype');\n}\n\n.material-icons {\n  font-family: 'Material Icons';\n  font-weight: normal;\n  font-style: normal;\n  font-size: 24px;\n  line-height: 1;\n  letter-spacing: normal;\n  text-transform: none;\n  display: inline-block;\n  white-space: nowrap;\n  word-wrap: normal;\n  direction: ltr;\n}",using:"https://fonts.googleapis.com/icon?family=Material+Icons&display=swap"}]);