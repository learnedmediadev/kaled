(function($){var body,masthead,menuToggle,siteNavigation,socialNavigation,siteHeaderMenu,resizeTimer;function initMainNavigation(container){var dropdownToggle=$('<button />',{'class':'dropdown-toggle','aria-expanded':false}).append($('<span />',{'class':'screen-reader-text',text:screenReaderText.expand}));container.find('.menu-item-has-children > a').after(dropdownToggle);container.find('.current-menu-ancestor > button').addClass('toggled-on');container.find('.current-menu-ancestor > .sub-menu').addClass('toggled-on');container.find('.menu-item-has-children').attr('aria-haspopup','true');container.find('.dropdown-toggle').click(function(e){var _this=$(this),screenReaderSpan=_this.find('.screen-reader-text');e.preventDefault();_this.toggleClass('toggled-on');_this.next('.children, .sub-menu').toggleClass('toggled-on');_this.attr('aria-expanded',_this.attr('aria-expanded')==='false'?'true':'false');screenReaderSpan.text(screenReaderSpan.text()===screenReaderText.expand?screenReaderText.collapse:screenReaderText.expand);});}
initMainNavigation($('.main-navigation'));masthead=$('#masthead');menuToggle=masthead.find('#menu-toggle');siteHeaderMenu=masthead.find('#site-header-menu');siteNavigation=masthead.find('#site-navigation');socialNavigation=masthead.find('#social-navigation');(function(){if(!menuToggle.length){return;}
menuToggle.add(siteNavigation).add(socialNavigation).attr('aria-expanded','false');menuToggle.on('click.twentysixteen',function(){$(this).add(siteHeaderMenu).toggleClass('toggled-on');$(this).add(siteNavigation).add(socialNavigation).attr('aria-expanded',$(this).add(siteNavigation).add(socialNavigation).attr('aria-expanded')==='false'?'true':'false');});})();(function(){if(!siteNavigation.length||!siteNavigation.children().length){return;}
function toggleFocusClassTouchScreen(){if(window.innerWidth>=910){$(document.body).on('touchstart.twentysixteen',function(e){if(!$(e.target).closest('.main-navigation li').length){$('.main-navigation li').removeClass('focus');}});siteNavigation.find('.menu-item-has-children > a').on('touchstart.twentysixteen',function(e){var el=$(this).parent('li');if(!el.hasClass('focus')){e.preventDefault();el.toggleClass('focus');el.siblings('.focus').removeClass('focus');}});}else{siteNavigation.find('.menu-item-has-children > a').unbind('touchstart.twentysixteen');}}
if('ontouchstart'in window){$(window).on('resize.twentysixteen',toggleFocusClassTouchScreen);toggleFocusClassTouchScreen();}
siteNavigation.find('a').on('focus.twentysixteen blur.twentysixteen',function(){$(this).parents('.menu-item').toggleClass('focus');});})();function onResizeARIA(){if(window.innerWidth<910){if(menuToggle.hasClass('toggled-on')){menuToggle.attr('aria-expanded','true');}else{menuToggle.attr('aria-expanded','false');}
if(siteHeaderMenu.hasClass('toggled-on')){siteNavigation.attr('aria-expanded','true');socialNavigation.attr('aria-expanded','true');}else{siteNavigation.attr('aria-expanded','false');socialNavigation.attr('aria-expanded','false');}
menuToggle.attr('aria-controls','site-navigation social-navigation');}else{menuToggle.removeAttr('aria-expanded');siteNavigation.removeAttr('aria-expanded');socialNavigation.removeAttr('aria-expanded');menuToggle.removeAttr('aria-controls');}}
function belowEntryMetaClass(param){if(body.hasClass('page')||body.hasClass('search')||body.hasClass('single-attachment')||body.hasClass('error404')){return;}
$('.entry-content').find(param).each(function(){var element=$(this),elementPos=element.offset(),elementPosTop=elementPos.top,entryFooter=element.closest('article').find('.entry-footer'),entryFooterPos=entryFooter.offset(),entryFooterPosBottom=entryFooterPos.top+(entryFooter.height()+28),caption=element.closest('figure'),newImg;if(elementPosTop>entryFooterPosBottom){if('img.size-full'===param){newImg=new Image();newImg.src=element.attr('src');$(newImg).on('load.twentysixteen',function(){if(newImg.width>=840){element.addClass('below-entry-meta');if(caption.hasClass('wp-caption')){caption.addClass('below-entry-meta');caption.removeAttr('style');}}});}else{element.addClass('below-entry-meta');}}else{element.removeClass('below-entry-meta');caption.removeClass('below-entry-meta');}});}
$(document).ready(function(){body=$(document.body);$(window).on('load.twentysixteen',onResizeARIA).on('resize.twentysixteen',function(){clearTimeout(resizeTimer);resizeTimer=setTimeout(function(){belowEntryMetaClass('img.size-full');belowEntryMetaClass('blockquote.alignleft, blockquote.alignright');},300);onResizeARIA();});belowEntryMetaClass('img.size-full');belowEntryMetaClass('blockquote.alignleft, blockquote.alignright');});})(jQuery);
;!function(a,b){"use strict";function c(){if(!e){e=!0;var a,c,d,f,g=-1!==navigator.appVersion.indexOf("MSIE 10"),h=!!navigator.userAgent.match(/Trident.*rv:11\./),i=b.querySelectorAll("iframe.wp-embedded-content");for(c=0;c<i.length;c++){if(d=i[c],!d.getAttribute("data-secret"))f=Math.random().toString(36).substr(2,10),d.src+="#?secret="+f,d.setAttribute("data-secret",f);if(g||h)a=d.cloneNode(!0),a.removeAttribute("security"),d.parentNode.replaceChild(a,d)}}}var d=!1,e=!1;if(b.querySelector)if(a.addEventListener)d=!0;if(a.wp=a.wp||{},!a.wp.receiveEmbedMessage)if(a.wp.receiveEmbedMessage=function(c){var d=c.data;if(d.secret||d.message||d.value)if(!/[^a-zA-Z0-9]/.test(d.secret)){var e,f,g,h,i,j=b.querySelectorAll('iframe[data-secret="'+d.secret+'"]'),k=b.querySelectorAll('blockquote[data-secret="'+d.secret+'"]');for(e=0;e<k.length;e++)k[e].style.display="none";for(e=0;e<j.length;e++)if(f=j[e],c.source===f.contentWindow){if(f.removeAttribute("style"),"height"===d.message){if(g=parseInt(d.value,10),g>1e3)g=1e3;else if(~~g<200)g=200;f.height=g}if("link"===d.message)if(h=b.createElement("a"),i=b.createElement("a"),h.href=f.getAttribute("src"),i.href=d.value,i.host===h.host)if(b.activeElement===f)a.top.location.href=d.value}else;}},d)a.addEventListener("message",a.wp.receiveEmbedMessage,!1),b.addEventListener("DOMContentLoaded",c,!1),a.addEventListener("load",c,!1)}(window,document);