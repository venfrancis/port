// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.
/*! skrollr v0.5.14 https://github.com/Prinzhorn/skrollr | free to use under terms of MIT license */
(function(e,t,n){"use strict";function j(n){s=t.documentElement,o=t.body,H(),tt=this,n=n||{},ut=n.constants||{};if(n.easing)for(var i in n.easing)B[i]=n.easing[i];rt={beforerender:n.beforerender,render:n.render},it=n.forceHeight!==!1,ht=n.smoothScrolling!==!1,pt={targetTop:tt.getScrollTop()},it&&(ot=n.scale||1),Q(s,[l],[c]);if(it){var u=t.getElementById("skrollr-body")||t.createElement("div"),a=u.style;a.minWidth="1px",a.position="absolute",a.top=a.zIndex="0",u.id||(a.width="1px",a.right="0",o.appendChild(u)),function(e){$=function(){e.apply(this,arguments),a.height=st+s.clientHeight+"px"}}($)}return tt.refresh(),r.addEvent(e,"resize",$),function f(){S(f),q()}(),tt}var r=e.skrollr={get:function(){return tt},init:function(e){return tt||new j(e)},VERSION:"0.5.14"},i=Object.prototype.hasOwnProperty,s,o,u="rendered",a="un"+u,f="skrollable",l="skrollr",c="no-"+l,h="linear",p=1e3,d=200,v="start",m="end",g="top",y="center",b="bottom",w="___has_rendered_class",E="___skrollable_id",S=e.requestAnimationFrame;(function(){var t=["ms","moz","webkit","o"],n;for(n=0;n<t.length&&!S;n++)S=e[t[n]+"RequestAnimationFrame"];var r=0;S||(S=function(t){var n=Z(),i=Math.max(0,30-(n-r));e.setTimeout(function(){t(n+i)},i),r=n+i})})();var x=/^\s*(.+)\s*$/m,T=/^data(?:-(_\w+))?(?:-?(-?\d+))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/,N=/\s*([a-z\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi,C=/^([a-z\-]+)\[(\w+)\]$/,k=/-([a-z])/g,L=function(e,t){return t.toUpperCase()},A=/[\-+]?[\d]*\.?[\d]+/g,O=/\{\?\}/g,M=/rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g,_=/[a-z\-]+-gradient/g,D,P,H=function(){var t=/^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;if(e.getComputedStyle){var n=e.getComputedStyle(o,null);for(var r in n){D=r.match(t)||+r==r&&n[r].match(t);if(D)break}D&&(D=D[0],D.slice(0,1)==="-"?(P=D,D={"-webkit-":"webkit","-moz-":"Moz","-ms-":"ms","-o-":"O"}[D]):P="-"+D.toLowerCase()+"-")}},B={begin:function(){return 0},end:function(){return 1},linear:function(e){return e},quadratic:function(e){return e*e},cubic:function(e){return e*e*e},swing:function(e){return-Math.cos(e*Math.PI)/2+.5},sqrt:function(e){return Math.sqrt(e)},bounce:function(e){var t;if(e<=.5083)t=3;else if(e<=.8489)t=9;else if(e<=.96208)t=27;else{if(!(e<=.99981))return 1;t=91}return 1-Math.abs(3*Math.cos(e*t*1.028)/t)}};j.prototype.refresh=function(e){var r,i=!1;e===n?(i=!0,nt=[],vt=0,e=t.getElementsByTagName("*")):e=[].concat(e);for(r=0;r<e.length;r++){var s=e[r],o=s,l=[],c=ht;if(!s.attributes)continue;for(var h=0;h<s.attributes.length;h++){var p=s.attributes[h];if(p.name==="data-anchor-target"){o=t.querySelector(p.value);if(o===null)throw'Unable to find anchor target "'+p.value+'"';continue}if(p.name==="data-smooth-scrolling"){c=p.value!=="off";continue}var d=p.name.match(T);if(d!==null){var g=d[1];g=g&&ut[g.substr(1)]||0;var y=(d[2]|0)+g,b=d[3],S=d[4]||b,x={offset:y,props:p.value,element:s};l.push(x),!b||b===v||b===m?(x.mode="absolute",b===m?x.isEnd=!0:(x.frame=y*ot,delete x.offset)):(x.mode="relative",x.anchors=[b,S])}}if(l.length){var N,C,k;!i&&E in s?(k=s[E],N=nt[k].styleAttr,C=nt[k].classAttr):(k=s[E]=vt++,N=s.style.cssText,C=K(s));var L=nt[k]={element:s,styleAttr:N,classAttr:C,anchorTarget:o,keyFrames:l,smoothScrolling:c};Q(s,[f,u],[a]),L[w]=!0}}$();for(r=0;r<e.length;r++){var A=nt[e[r][E]];if(A===n)continue;A.keyFrames.sort(et),R(A),z(A)}return tt},j.prototype.relativeToAbsolute=function(e,t,n){var r=s.clientHeight,i=e.getBoundingClientRect(),o=i.top,u=i.bottom-i.top;return t===b?o-=r:t===y&&(o-=r/2),n===b?o+=u:n===y&&(o+=u/2),o+=tt.getScrollTop(),o+.5|0},j.prototype.animateTo=function(e,t){t=t||{};var r=Z(),i=tt.getScrollTop();return ct={startTop:i,topDiff:e-i,targetTop:e,duration:t.duration||p,startTime:r,endTime:r+(t.duration||p),easing:B[t.easing||h],done:t.done},ct.topDiff||(ct.done&&ct.done.call(tt,!1),ct=n),tt},j.prototype.stopAnimateTo=function(){ct&&ct.done&&ct.done.call(tt,!0),ct=n},j.prototype.isAnimatingTo=function(){return!!ct},j.prototype.setScrollTop=function(t){return r.iscroll?r.iscroll.scrollTo(0,-t):e.scrollTo(0,t),tt},j.prototype.getScrollTop=function(){return r.iscroll?-r.iscroll.y:e.pageYOffset||s.scrollTop||o.scrollTop||0},j.prototype.on=function(e,t){return rt[e]=t,tt},j.prototype.off=function(e){return delete rt[e],tt};var F=function(){var e,t,n,r,i,s,o,u,a;for(s=0;s<nt.length;s++){e=nt[s],t=e.element,n=e.anchorTarget,r=e.keyFrames;for(o=0;o<r.length;o++)i=r[o],i.mode==="relative"&&(u=t.style.cssText,a=K(t),t.style.cssText=e.styleAttr,Q(t,e.classAttr),i.frame=tt.relativeToAbsolute(n,i.anchors[0],i.anchors[1])-i.offset,t.style.cssText=u,Q(t,a)),it&&!i.isEnd&&i.frame>st&&(st=i.frame)}st=Math.max(st,J());for(s=0;s<nt.length;s++){e=nt[s],r=e.keyFrames;for(o=0;o<r.length;o++)i=r[o],i.isEnd&&(i.frame=st-i.offset)}},I=function(e,t){for(var n=0;n<nt.length;n++){var s=nt[n],o=s.smoothScrolling?e:t,f=s.keyFrames,l=f[0].frame,c=f[f.length-1].frame,h=o<=l,p=o>=c,d,v;if(h||p){var m=f[h?0:f.length-1].props;for(d in m)i.call(m,d)&&(v=V(m[d].value),r.setStyle(s.element,d,v));s[w]&&(o<l||o>c)&&(Q(s.element,[a],[u]),s[w]=!1);continue}s[w]||(Q(s.element,[u],[a]),s[w]=!0);for(var g=0;g<f.length-1;g++)if(o>=f[g].frame&&o<=f[g+1].frame){var y=f[g],b=f[g+1];for(d in y.props)if(i.call(y.props,d)){var E=(o-y.frame)/(b.frame-y.frame);E=y.props[d].easing(E),v=X(y.props[d].value,b.props[d].value,E),v=V(v),r.setStyle(s.element,d,v)}break}}},q=function(){var e=tt.getScrollTop(),t,r=Z(),i;if(ct)r>=ct.endTime?(e=ct.targetTop,t=ct.done,ct=n):(i=ct.easing((r-ct.startTime)/ct.duration),e=ct.startTop+i*ct.topDiff|0),tt.setScrollTop(e);else{var s=pt.targetTop-e;s&&(pt={startTop:ft,topDiff:e-ft,targetTop:e,startTime:lt,endTime:lt+d}),r<=pt.endTime&&(i=B.sqrt((r-pt.startTime)/d),e=pt.startTop+i*pt.topDiff|0)}e<0&&(e=0);if(dt||ft!==e){at=e>=ft?"down":"up",dt=!1;var o={curTop:e,lastTop:ft,maxTop:st,direction:at},u=rt.beforerender&&rt.beforerender.call(tt,o);u!==!1&&(I(e,tt.getScrollTop()),ft=e,rt.render&&rt.render.call(tt,o)),t&&t.call(tt,!1)}lt=r},R=function(e){for(var t=0;t<e.keyFrames.length;t++){var n=e.keyFrames[t],r,i,s,o={},u;while((u=N.exec(n.props))!==null)s=u[1],i=u[2],r=s.match(C),r!==null?(s=r[1],r=r[2]):r=h,i=i.indexOf("!")?U(i):[i.slice(1)],o[s]={value:i,easing:B[r]};n.props=o}},U=function(e){var t=[];return M.lastIndex=0,e=e.replace(M,function(e){return e.replace(A,function(e){return e/255*100+"%"})}),P&&(_.lastIndex=0,e=e.replace(_,function(e){return P+e})),e=e.replace(A,function(e){return t.push(+e),"{?}"}),t.unshift(e),t},z=function(e){var t={},n;for(n=0;n<e.keyFrames.length;n++)W(e.keyFrames[n],t);t={};for(n=e.keyFrames.length-1;n>=0;n--)W(e.keyFrames[n],t)},W=function(e,t){var n;for(n in t)i.call(e.props,n)||(e.props[n]=t[n]);for(n in e.props)t[n]=e.props[n]},X=function(e,t,n){if(e.length!==t.length)throw"Can't interpolate between \""+e[0]+'" and "'+t[0]+'"';var r=[e[0]];for(var i=1;i<e.length;i++)r[i]=e[i]+(t[i]-e[i])*n;return r},V=function(e){var t=1;return O.lastIndex=0,e[0].replace(O,function(){return e[t++]})};r.setStyle=function(e,t,n){var r=e.style;t=t.replace(k,L).replace("-","");if(t==="zIndex")r[t]=""+(n|0);else if(t==="float")r.styleFloat=r.cssFloat=n;else try{D&&(r[D+t.slice(0,1).toUpperCase()+t.slice(1)]=n),r[t]=n}catch(i){}},r.addEvent=function(t,n,r){var i=function(t){return t=t||e.event,t.target||(t.target=t.srcElement),t.preventDefault||(t.preventDefault=function(){t.returnValue=!1}),r.call(this,t)};e.addEventListener?t.addEventListener(n,i,!1):t.attachEvent("on"+n,i)};var $=function(){st=0,F(),dt=!0,r.iscroll&&e.setTimeout(function(){r.iscroll.refresh()},0)},J=function(){var e=Math.max(o.scrollHeight,o.offsetHeight,s.scrollHeight,s.offsetHeight,s.clientHeight);return e-s.clientHeight},K=function(t){var n="className";return e.SVGElement&&t instanceof e.SVGElement&&(t=t[n],n="baseVal"),t[n]},Q=function(t,r,i){var s="className";e.SVGElement&&t instanceof e.SVGElement&&(t=t[s],s="baseVal");if(i===n){t[s]=r;return}var o=t[s];for(var u=0;u<r.length;u++)Y(o).indexOf(Y(r[u]))===-1&&(o+=" "+r[u]);for(var a=0;a<i.length;a++)o=Y(o).replace(Y(i[a])," ");t[s]=G(o)},G=function(e){return e.replace(x,"$1")},Y=function(e){return" "+e+" "},Z=Date.now||function(){return+(new Date)},et=function(e,t){return e.frame-t.frame},tt,nt,rt,it,st=0,ot=1,ut,at="down",ft=-1,lt=Z(),ct,ht,pt,dt,vt=0})(window,document);

/**
 * author Remy Sharp
 * url http://remysharp.com/2009/01/26/element-in-view-event-plugin/
 */
(function ($) {
    function getViewportHeight() {
        var height = window.innerHeight; // Safari, Opera
        var mode = document.compatMode;

        if ( (mode || !$.support.boxModel) ) { // IE, Gecko
            height = (mode == 'CSS1Compat') ?
            document.documentElement.clientHeight : // Standards
            document.body.clientHeight; // Quirks
        }

        return height;
    }

    $(window).scroll(function () {
        var vpH = getViewportHeight(),
            scrolltop = (document.documentElement.scrollTop ?
                document.documentElement.scrollTop :
                document.body.scrollTop),
            elems = [];
        
        // naughty, but this is how it knows which elements to check for
        $.each($.cache, function () {
            if (this.events && this.events.inview) {
                elems.push(this.handle.elem);
            }
        });

        if (elems.length) {
            $(elems).each(function () {
                var $el = $(this),
                    top = $el.offset().top,
                    height = $el.height(),
                    inview = $el.data('inview') || false;

                if (scrolltop > (top + height) || scrolltop + vpH < top) {
                    if (inview) {
                        $el.data('inview', false);
                        $el.trigger('inview', [ false ]);                        
                    }
                } else if (scrolltop < (top + height)) {
                    if (!inview) {
                        $el.data('inview', true);
                        $el.trigger('inview', [ true ]);
                    }
                }
            });
        }
    });
    
    // kick the event to pick up any elements already in view.
    // note however, this only works if the plugin is included after the elements are bound to 'inview'
    $(function () {
        $(window).scroll();
    });
})(jQuery);

/**
 * Copyright (c) 2007-2012 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * @author Ariel Flesler
 * @version 1.4.3.1
 */
;(function($){var h=$.scrollTo=function(a,b,c){$(window).scrollTo(a,b,c)};h.defaults={axis:'xy',duration:parseFloat($.fn.jquery)>=1.3?0:1,limit:true};h.window=function(a){return $(window)._scrollable()};$.fn._scrollable=function(){return this.map(function(){var a=this,isWin=!a.nodeName||$.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;if(!isWin)return a;var b=(a.contentWindow||a).document||a.ownerDocument||a;return/webkit/i.test(navigator.userAgent)||b.compatMode=='BackCompat'?b.body:b.documentElement})};$.fn.scrollTo=function(e,f,g){if(typeof f=='object'){g=f;f=0}if(typeof g=='function')g={onAfter:g};if(e=='max')e=9e9;g=$.extend({},h.defaults,g);f=f||g.duration;g.queue=g.queue&&g.axis.length>1;if(g.queue)f/=2;g.offset=both(g.offset);g.over=both(g.over);return this._scrollable().each(function(){if(e==null)return;var d=this,$elem=$(d),targ=e,toff,attr={},win=$elem.is('html,body');switch(typeof targ){case'number':case'string':if(/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(targ)){targ=both(targ);break}targ=$(targ,this);if(!targ.length)return;case'object':if(targ.is||targ.style)toff=(targ=$(targ)).offset()}$.each(g.axis.split(''),function(i,a){var b=a=='x'?'Left':'Top',pos=b.toLowerCase(),key='scroll'+b,old=d[key],max=h.max(d,a);if(toff){attr[key]=toff[pos]+(win?0:old-$elem.offset()[pos]);if(g.margin){attr[key]-=parseInt(targ.css('margin'+b))||0;attr[key]-=parseInt(targ.css('border'+b+'Width'))||0}attr[key]+=g.offset[pos]||0;if(g.over[pos])attr[key]+=targ[a=='x'?'width':'height']()*g.over[pos]}else{var c=targ[pos];attr[key]=c.slice&&c.slice(-1)=='%'?parseFloat(c)/100*max:c}if(g.limit&&/^\d+$/.test(attr[key]))attr[key]=attr[key]<=0?0:Math.min(attr[key],max);if(!i&&g.queue){if(old!=attr[key])animate(g.onAfterFirst);delete attr[key]}});animate(g.onAfter);function animate(a){$elem.animate(attr,f,g.easing,a&&function(){a.call(this,e,g)})}}).end()};h.max=function(a,b){var c=b=='x'?'Width':'Height',scroll='scroll'+c;if(!$(a).is('html,body'))return a[scroll]-$(a)[c.toLowerCase()]();var d='client'+c,html=a.ownerDocument.documentElement,body=a.ownerDocument.body;return Math.max(html[scroll],body[scroll])-Math.min(html[d],body[d])};function both(a){return typeof a=='object'?a:{top:a,left:a}}})(jQuery);
/**
 * jQuery.LocalScroll - Animated scrolling navigation, using anchors.
 * Copyright (c) 2007-2009 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * Date: 3/11/2009
 * @author Ariel Flesler
 * @version 1.2.7
 **/
;(function($){var l=location.href.replace(/#.*/,'');var g=$.localScroll=function(a){$('body').localScroll(a)};g.defaults={duration:1e3,axis:'y',event:'click',stop:true,target:window,reset:true};g.hash=function(a){if(location.hash){a=$.extend({},g.defaults,a);a.hash=false;if(a.reset){var e=a.duration;delete a.duration;$(a.target).scrollTo(0,a);a.duration=e}i(0,location,a)}};$.fn.localScroll=function(b){b=$.extend({},g.defaults,b);return b.lazy?this.bind(b.event,function(a){var e=$([a.target,a.target.parentNode]).filter(d)[0];if(e)i(a,e,b)}):this.find('a,area').filter(d).bind(b.event,function(a){i(a,this,b)}).end().end();function d(){return!!this.href&&!!this.hash&&this.href.replace(this.hash,'')==l&&(!b.filter||$(this).is(b.filter))}};function i(a,e,b){var d=e.hash.slice(1),f=document.getElementById(d)||document.getElementsByName(d)[0];if(!f)return;if(a)a.preventDefault();var h=$(b.target);if(b.lock&&h.is(':animated')||b.onBefore&&b.onBefore.call(b,a,f,h)===false)return;if(b.stop)h.stop(true);if(b.hash){var j=f.id==d?'id':'name',k=$('<a> </a>').attr(j,d).css({position:'absolute',top:$(window).scrollTop(),left:$(window).scrollLeft()});f[j]='';$('body').prepend(k);location=e.hash;k.remove();f[j]=d}h.scrollTo(f,b).trigger('notify.serialScroll',[f])}})(jQuery);

/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Â© 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
    def: 'easeOutQuad',
    swing: function (x, t, b, c, d) {
        //alert(jQuery.easing.default);
        return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
    },
    easeInQuad: function (x, t, b, c, d) {
        return c*(t/=d)*t + b;
    },
    easeOutQuad: function (x, t, b, c, d) {
        return -c *(t/=d)*(t-2) + b;
    },
    easeInOutQuad: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t + b;
        return -c/2 * ((--t)*(t-2) - 1) + b;
    },
    easeInCubic: function (x, t, b, c, d) {
        return c*(t/=d)*t*t + b;
    },
    easeOutCubic: function (x, t, b, c, d) {
        return c*((t=t/d-1)*t*t + 1) + b;
    },
    easeInOutCubic: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t*t + b;
        return c/2*((t-=2)*t*t + 2) + b;
    },
    easeInQuart: function (x, t, b, c, d) {
        return c*(t/=d)*t*t*t + b;
    },
    easeOutQuart: function (x, t, b, c, d) {
        return -c * ((t=t/d-1)*t*t*t - 1) + b;
    },
    easeInOutQuart: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
        return -c/2 * ((t-=2)*t*t*t - 2) + b;
    },
    easeInQuint: function (x, t, b, c, d) {
        return c*(t/=d)*t*t*t*t + b;
    },
    easeOutQuint: function (x, t, b, c, d) {
        return c*((t=t/d-1)*t*t*t*t + 1) + b;
    },
    easeInOutQuint: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
        return c/2*((t-=2)*t*t*t*t + 2) + b;
    },
    easeInSine: function (x, t, b, c, d) {
        return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
    },
    easeOutSine: function (x, t, b, c, d) {
        return c * Math.sin(t/d * (Math.PI/2)) + b;
    },
    easeInOutSine: function (x, t, b, c, d) {
        return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
    },
    easeInExpo: function (x, t, b, c, d) {
        return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
    },
    easeOutExpo: function (x, t, b, c, d) {
        return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
    },
    easeInOutExpo: function (x, t, b, c, d) {
        if (t==0) return b;
        if (t==d) return b+c;
        if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
        return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
    },
    easeInCirc: function (x, t, b, c, d) {
        return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
    },
    easeOutCirc: function (x, t, b, c, d) {
        return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
    },
    easeInOutCirc: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
        return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
    },
    easeInElastic: function (x, t, b, c, d) {
        var s=1.70158;var p=0;var a=c;
        if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
        if (a < Math.abs(c)) { a=c; var s=p/4; }
        else var s = p/(2*Math.PI) * Math.asin (c/a);
        return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
    },
    easeOutElastic: function (x, t, b, c, d) {
        var s=1.70158;var p=0;var a=c;
        if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
        if (a < Math.abs(c)) { a=c; var s=p/4; }
        else var s = p/(2*Math.PI) * Math.asin (c/a);
        return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
    },
    easeInOutElastic: function (x, t, b, c, d) {
        var s=1.70158;var p=0;var a=c;
        if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
        if (a < Math.abs(c)) { a=c; var s=p/4; }
        else var s = p/(2*Math.PI) * Math.asin (c/a);
        if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
        return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
    },
    easeInBack: function (x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c*(t/=d)*t*((s+1)*t - s) + b;
    },
    easeOutBack: function (x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
    },
    easeInOutBack: function (x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158; 
        if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
        return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
    },
    easeInBounce: function (x, t, b, c, d) {
        return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
    },
    easeOutBounce: function (x, t, b, c, d) {
        if ((t/=d) < (1/2.75)) {
            return c*(7.5625*t*t) + b;
        } else if (t < (2/2.75)) {
            return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
        } else if (t < (2.5/2.75)) {
            return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
        } else {
            return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
        }
    },
    easeInOutBounce: function (x, t, b, c, d) {
        if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
        return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
    }
});



/*spritespin ================================================================================================================================
*/

(function () {
  var Loader = this.SpriteLoader = {};
  Loader.preload = function(images, callback){
    if (typeof (images) === "string") { images = [images]; }
    var i, data = {
      callback : callback,
      numLoaded: 0,
      numImages: images.length,
      images   : []
    };
    for (i = 0; i < images.length; i += 1 ) {
      Loader.load(images[i], data); 
    }
  };
  Loader.load = function(imageSource, data){
    var image = new Image();
    data.images.push(image);
    image.onload = function(){
      data.numLoaded += 1;
      if (data.numLoaded === data.numImages) { 
        data.callback(data.images); 
      }
    }; 
    image.src = imageSource;
  };
}());
(function($, window) {
  var Spin = window.SpriteSpin = {};
  var api = Spin.api = {};
  Spin.modules = {};
  Spin.behaviors = {};
      
  Spin.disableSelection = function(e){
    e.attr('unselectable', 'on')
     .css({
        "-moz-user-select": "none",
        "-khtml-user-select": "none",
        "-webkit-user-select": "none",
        "user-select": 'none'
     })
     .on('selectstart', false);
    return e;
  };

  Spin.updateInput = function(e, data){
    if (e.touches === undefined && e.originalEvent !== undefined){
      // jQuery Event normalization does not preserve the 'event.touches'
      // try to grab touches from the original event
      e.touches = e.originalEvent.touches;
    }
    
    data.oldX = data.currentX;
    data.oldY = data.currentY;
    
    if (e.touches !== undefined && e.touches.length > 0){
      data.currentX = e.touches[0].clientX;
      data.currentY = e.touches[0].clientY;
    } else {
      data.currentX = e.clientX;
      data.currentY = e.clientY;
    }
    
    if (data.startX === undefined || data.startY === undefined){
      data.startX = data.currentX;
      data.startY = data.currentY;
      data.clickframe = data.frame;
    }
    
    if (data.oldX === undefined || data.oldY === undefined){
      data.oldX = data.currentX;
      data.oldY = data.currentY;
    }
    
    // total drag distance
    data.dX = data.currentX - data.startX;
    data.dY = data.currentY - data.startY;
    data.dW = data.dX * data.dragDirX + data.dY * data.dragDirY;
    
    // frame drag distance
    data.ddX = data.currentX - data.oldX;
    data.ddY = data.currentY - data.oldY;
    data.ddW = data.ddX * data.dragDirX + data.ddY * data.dragDirY;
    
    return false;
  };
  
  Spin.resetInput = function(data){
    // initial touch or click position
    data.startX = undefined;
    data.startY = undefined;
    // touch or click position in current frame
    data.currentX = undefined;
    data.currentY = undefined;
    // touch or click position in last frame
    data.oldX = undefined;
    data.oldY = undefined;
    // total drag distance, respecting the start position
    data.dX = 0;
    data.dY = 0;
    data.dW = 0;
    // total drag distance, respecting the last frame position
    data.ddX = 0;
    data.ddY = 0;
    data.ddW = 0;
    
    if (typeof(data.module.resetInput) === "function"){
      data.module.resetInput(data);
    }
  };
  
  Spin.clamp = function(value, min, max){ 
    return (value > max ? max : (value < min ? min : value));
  };
  
  Spin.wrap = function(value, min, max, size){
    while (value > max){ value -= size; } 
    while (value < min){ value += size; }
    return value;
  };
  
  Spin.reload = function(data, andInit){
    if (andInit && data.module.initialize){
      data.module.initialize(data);
    }
    
    Spin.prepareBackground(data);
    Spin.preloadImages(data, function(){
      Spin.rebindEvents(data);
      data.module.reload(data);
      data.target.trigger("onLoad", data);
    });
  };
  
  Spin.preloadImages = function(data, callback) {
    data.preload.fadeIn(250, function(){
      SpriteLoader.preload(data.source, function(images){
        data.preload.fadeOut(250, function() {
            data.preload.hide();
        });
        data.stage.show();
        if (data.canvas){
          data.canvas.show();
        }
        data.images = images;
        callback.apply(data.target, [data]);
      });
    });
  };
  
  Spin.prepareBackground = function(data){
    var w = [data.width, "px"].join("");
    var h = [data.height, "px"].join("");
    
    data.target.css({ 
      width    : w, 
      height   : h,
      position : "relative"
    });
    
    var css = {
      width    : w, 
      height   : h,
      top      : "0px", 
      left     : "0px",
      position : "absolute"  
    };
    $.extend(css, data.preloadCSS || {});
    data.preload.css(css).html(data.preloadHtml || "").hide();
    
    data.stage.css({
      width    : w, 
      height   : h,
      top      : "0px", 
      left     : "0px",
      position : "absolute"
    }).hide();
    
    if (data.canvas){
      data.canvas[0].width = data.width;
      data.canvas[0].height = data.height;      
      data.canvas.css({
        width    : w, 
        height   : h,
        top      : "0px", 
        left     : "0px",
        position : "absolute"
      }).hide();
    }
  };
  
  Spin.draw = function(data){
    data.module.draw(data);
  };
  
  Spin.rebindEvents = function(data){
    var target = data.target;
    // unbind all events
    target.unbind('.spritespin');
  
    // use custom or build in behavior
    var beh = data.behavior;
    if (typeof(data.behavior) === "string"){
      beh = Spin.behaviors[data.behavior];
    }
    beh = beh || {};
    
    var prevent = function(e){
      if (e.cancelable){ e.preventDefault(); }
      return false;
    };
    
    // rebind interaction events
    target.bind('mousedown.spritespin',  beh.mousedown  || $.noop);
    target.bind('mousemove.spritespin',  beh.mousemove  || $.noop);
    target.bind('mouseup.spritespin',    beh.mouseup    || $.noop);
    target.bind('mouseenter.spritespin', beh.mouseenter || $.noop);
    target.bind('mouseover.spritespin',  beh.mouseover  || $.noop);
    target.bind('mouseleave.spritespin', beh.mouseleave || $.noop);
    target.bind('dblclick.spritespin',   beh.dblclick   || $.noop);
    target.bind('onFrame.spritespin',    beh.onFrame    || $.noop);
  
    if (data.touchable){
      target.bind('touchstart.spritespin',  beh.mousedown  || $.noop);
      target.bind('touchmove.spritespin',   beh.mousemove  || $.noop);
      target.bind('touchend.spritespin',    beh.mouseup    || $.noop); 
      target.bind('touchcancel.spritespin', beh.mouseleave || $.noop);
      target.bind('click.spritespin',         prevent); 
      target.bind('gesturestart.spritespin',  prevent); 
      target.bind('gesturechange.spritespin', prevent); 
      target.bind('gestureend.spritespin',    prevent); 
    }
            
    // disable selection
      target.bind("mousedown.spritespin selectstart.spritespin", prevent);

      target.bind("onFrame.spritespin", function(event, data){
        Spin.draw(data);
      });
      target.bind("onLoad.spritespin", function(event, data){
        data.target.spritespin("animate", data.animate, data.loop);
      });
      
      // bind custom events
      if (typeof(data.onFrame) === "function"){
        target.bind("onFrame.spritespin", data.onFrame);
      }
      if (typeof(data.onLoad) === "function"){
        target.bind("onLoad.spritespin", data.onLoad);
      }
  };
    
  $.fn.spritespin = function(method) {
    if ( api[method] ) {
      return api[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
    }
    if (typeof(method) === 'object' || !method) {
      return api.init.apply(this, arguments);
    }
    $.error( 'Method ' +  method + ' does not exist on jQuery.spritespin' );
  };


    api.init = function(options){
    // Default settings
    var settings = {
      // dimensions
      width             : undefined,              // Window width (or frame width)
      height            : undefined,              // Window height (or frame height)
      frames            : 36,                     // Total number of frames
      frame             : 0,                      // Initial frame number
      module            : "360",
      behavior          : "drag",
      // animation & update
      animate           : true,                   // Run animation when after initialize
      loop              : false,                  // Repeat animation in a loop
      loopFrame         : 0,                      // Indicates the loop start frame
      frameStep         : 1,                      // Number of frames to increment on each animation update
      frameTime         : 36,                     // Time between updates
      frameWrap         : true,                   // Same as 'loob' but for user interaction (behavior)
      reverse           : false,                  // If true animation is played backward
      sense             : 1,                      // Interaction sensitivity used by behavior implementations
      orientation       : "horizontal",
      
      // appearance               
      source            : undefined,              // Stiched source image
      preloadHtml       : undefined,              // Html to appear when images are preloaded
      preloadCSS        : undefined,
      
      // events
      onFrame           : undefined,              // Occurs whe frame has been updated
      onLoad            : undefined,              // Occurs when images are loaded
      touchable         : undefined              // Tells spritespin that it is running on a touchable device
    };
    
    // extending options
    options = (options || {});
    $.extend(settings, options);
    
    return this.each(function(){
      var $this = $(this);
      var data  = $this.data('spritespin');
      
      if (!data){
        // spritespin is not initialized
        
        var images = $this.find("img");
        var i = 0;
        if (images.length > 0){
          settings.source = [];
          for(i = 0; i < images.length; i += 1){
            settings.source.push($(images[i]).attr("src"));
          }
        }
        
        if (typeof(settings.source) === "string"){
          settings.source = [settings.source];
        }
        
        // disable selection & hide overflow
        Spin.disableSelection($this).css({ 
          overflow : "hidden", 
          position : "relative"
        });
        
        // build inner html
        $this.empty();
        $this.append($("<div class='spritespin-stage'/>"));
        $this.append($("<div class='spritespin-preload'/>"));
        $this.addClass("spritespin-instance");

        if (settings.enableCanvas){
          var canvas = $("<canvas class='spritespin-canvas'/>")[0];
          var supported = !!(canvas.getContext && canvas.getContext('2d'));
          if (supported){
            settings.canvas = $(canvas);
            settings.context = canvas.getContext("2d");
            $this.append(settings.canvas);
          }
        }

        // resolve module
        if (typeof(settings.module) === "string"){
          settings.module = SpriteSpin.modules[settings.module];
        }
        
        // build data
        settings.target = $this;
        settings.stage = $this.find(".spritespin-stage");
        settings.preload = $this.find(".spritespin-preload");
        settings.animation = null;
        settings.touchable =(settings.touchable || (/iphone|ipod|ipad|android/i).test(window.navigator.userAgent));
        
        $this.data('spritespin', settings);
        SpriteSpin.reload(settings, true);
      } else {
        // spritespin is initialized.
        $.extend(data, options);

        if (options.source){
          // when images are passed, need to reload the plugin
          SpriteSpin.reload(data);
        } else {
          // otherwise just reanimate spritespin
          $this.spritespin("animate", data.animate, data.loop);
        }
      }
    });
  };
  
    api.destroy = function(){
    return this.each(function(){
      var $this = $(this);
      $this.unbind('.spritespin');
      $this.removeData('spritespin');
    });
  };

  // Updates a single frame to the specified frame number. If no value is 
  // given this will increment the current frame counter.
  // Triggers the onFrame event
  api.update = function(frame){
    return this.each(function(){
      var $this = $(this);
      var data = $this.data('spritespin');
      
      // update frame counter
      if (frame === undefined){
        data.frame += ((data.animation && data.reverse) ? -data.frameStep : data.frameStep);
      } else {
        data.frame = frame;
      }
      
      // wrap/clamp the frame value to fit in range [0, data.frames]
      if ( data.animation ||                    // wrap frame during animation
          (!data.animation && data.frameWrap)){   // wrap frame during user input 
        data.frame = Spin.wrap(data.frame, 0, data.frames - 1, data.frames);
      } else {
        data.frame = Spin.clamp(data.frame, 0, data.frames - 1);
      }

      // stop animation if the loopFrame is reached
      if (!data.loop && data.animation && (data.frame === data.loopFrame)){
        api.animate.apply(data.target, [false]);
      }
      
      data.target.trigger("onFrame", data);
    });
  };

  // Starts or stops the animation depend on the animate paramter.
  // In case when animation is already running pass "false" to stop.
  // In case when animation is not running pass "true" to start.
  // To keep animation running forever pass "true" for the loop parameter.
  // To detect whether the animation is running or not, do not pass any
  // parameters.
  api.animate = function(animate, loop){
    if (animate === undefined){
      return $(this).data('spritespin').animation !== null;
    } 
    return this.each(function(){
      var $this = $(this);
      var data = $this.data('spritespin');
      
      // check the loop variable and update settings
      if (typeof(loop) === "boolean"){
        data.loop = loop;
      }
      // toggle and update animation settings
      if (animate === "toggle"){
        data.animate = !data.animate;
      }
      //
      if (typeof(animate) === "boolean"){
        data.animate = animate;
      }
      // stop the running animation
      if (data.animation){
        window.clearInterval(data.animation);
        data.animation = null;
      }
      // start animation
      if (data.animate){
        data.animation = window.setInterval(function(){ 
          try { 
            $this.spritespin("update"); 
          } catch(err){
            // The try catch block is a hack for Opera Browser
            // Opera sometimes rises an exception here and
            // stops performing the script
          }
        }, data.frameTime);
      }  
    });
  };

  // Gets the current framenumber when no parameter is passed or
  // updates the spinner to the sepcified frame.
  api.frame = function(frame){
    if (frame === undefined){
      return $(this).data('spritespin').frame;
    }
    return this.each(function(){
      $(this).spritespin("update", frame);
    });        
  };

  // Gets or sets a value indicating whether the animation is looped or not.
  // Starts the animation when settings.animate is set to true passed value
  // is defined
  api.loop = function(value){
    if (value === undefined){
      return $(this).data('spritespin').loop;
    }
    return this.each(function(){
      var $this = $(this);
      $this.spritespin("animate", $this.data('spritespin').animate, value);
    }); 
  };

  api.next = function(){
    return this.each(function(){
      var $this = $(this); $this.spritespin("frame", $this.spritespin("frame") + 1);
    });
  };
  
  api.prev = function(){
    return this.each(function(){
      var $this = $(this); $this.spritespin("frame", $this.spritespin("frame") - 1);
    });
  };
  
  api.animateTo = function(frame){
    return this.each(function(){
      var $this = $(this); $this.spritespin({
        animate : true,
        loop : false,
        loopFrame : frame
      });
    });
  };

  Spin.behaviors.none = {
    name : "none",
    mousedown  : $.noop,
    mousemove  : $.noop,
    mouseup    : $.noop,
    
    mouseenter : $.noop,
    mouseover  : $.noop,
    mouseleave : $.noop,
    dblclick   : $.noop,
    
    onFrame : $.noop
  };
  
}(jQuery, window));
(function($, window, Spin){
  Spin.behaviors.click = {
    name : "click",
    mouseup    : function(e){ 
      var $this = $(this), data = $this.data('spritespin');
      Spin.updateInput(e, data);
      $this.spritespin("animate", false); // stop animation

      var h, p, o = data.target.offset();
      if (data.orientation == "horizontal"){
        h = data.width / 2;
        p = data.currentX - o.left;
      } else {
        h = data.height / 2;
        p = data.currentY - o.top;        
      }
      if (p > h){
        $this.spritespin("frame", data.frame + 1);
        data.reverse = false;
      } else {
        $this.spritespin("frame", data.frame - 1);
        data.reverse = true;
      }
    }
  };
}(jQuery, window, window.SpriteSpin));
(function($, window, Spin){
  Spin.behaviors.drag = {
    name : "drag",
    mousedown  : function(e){ 
      var $this = $(this), data = $this.data('spritespin');
      Spin.updateInput(e, data);
      data.onDrag = true;
    },
    mousemove  : function(e){ 
      var $this = $(this), data = $this.data('spritespin');
      if (data.onDrag){
        Spin.updateInput(e, data);
        
        var d;
        if (data.orientation == "horizontal"){
          d = data.dX / data.width;
        } else {
          d = data.dY / data.height;
        }
      
        var dFrame = d * data.frames * data.sense;
        var frame = Math.round(data.clickframe + dFrame);
        $this.spritespin("update", frame);  // update to frame
        $this.spritespin("animate", false);  // stop animation
      }
    },
    mouseup    : function(e){ 
      var $this = $(this), data = $this.data('spritespin');
      Spin.resetInput(data);
      data.onDrag = false;
    },
    mouseleave : function(e){ 
      var $this = $(this), data = $this.data('spritespin');
      Spin.resetInput(data);
      data.onDrag = false;
    }
  };  
}(jQuery, window, window.SpriteSpin));
(function($, window, Spin){
  Spin.behaviors.hold = {
    name : "hold",
    mousedown  : function(e){
      var $this = $(this), data = $this.data('spritespin');
      Spin.updateInput(e, data);
      data.onDrag = true;
      $this.spritespin("animate", true);
    },
    mousemove  : function(e){
      var $this = $(this), data = $this.data('spritespin');
      
      if (data.onDrag){
        Spin.updateInput(e, data);
        
        var h, d, o = data.target.offset();
        if (data.orientation == "horizontal"){
          h = (data.width / 2);
          d = (data.currentX - o.left - h) / h;
        } else {
          h = (data.height / 2);
          d = (data.currentY - o.top - h) / h;
        }
        data.reverse = d < 0;
        d = d < 0 ? -d : d;
        data.frameTime = 80 * (1 - d) + 20;        
      }
    },
    mouseup    : function(e){ 
      var $this = $(this), data = $this.data('spritespin');
      Spin.resetInput(data);
      data.onDrag = false;
      $this.spritespin("animate", false);
    },
    mouseleave : function(e){
      var $this = $(this), data = $this.data('spritespin');
      Spin.resetInput(data);
      data.onDrag = false;
      $this.spritespin("animate", false);
    },
    onFrame : function(e){
      var $this = $(this);
      $this.spritespin("animate", true);
    }
  };
}(jQuery, window, window.SpriteSpin));
(function($, window, Spin){
  Spin.behaviors.swipe = {
    name : "swipe",
    mousedown  : function(e){ 
      var $this = $(this), data = $this.data('spritespin');
      Spin.updateInput(e, data);
      data.onDrag = true;
    },
    mousemove  : function(e){ 
      var $this = $(this), data = $this.data('spritespin');
      if (data.onDrag){
        Spin.updateInput(e, data);
        
        var frame = data.frame;
        var snap = data.snap || 0.25;
        var d, s;
        
        if (data.orientation == "horizontal"){
          d = data.dX; 
          s = data.width * snap;
        } else {
          d = data.dY; 
          s = data.height * snap;
        }
        
        if (d > s){
          frame = data.frame - 1;       
          data.onDrag = false;
        } else if (d < -s){
          frame = data.frame + 1;
          data.onDrag = false;
        }
        
        $this.spritespin("update", frame);  // update to frame
        $this.spritespin("animate", false); // stop animation
      }
    },
    mouseup    : function(e){ 
      var $this = $(this), data = $this.data('spritespin');
      data.onDrag = false;
      Spin.resetInput(data);
    },
    mouseleave : function(e){ 
      var $this = $(this), data = $this.data('spritespin');
      data.onDrag = false;
      Spin.resetInput(data);
    }
  };  
}(jQuery, window, window.SpriteSpin));
(function($, window) {
  
  var Module = window.SpriteSpin.modules["360"] = {};
  
  Module.reload = function(data){
    var images = $(data.images);

    // clear the stage and refill with images
    data.stage.empty()

    // precalculate and cache options for this module
    data.modopts = {
      is_sprite : (data.images.length == 1),
      resX      : (data.resolutionX || data.images[0].width),
      resY      : (data.resolutionY || data.images[0].height),
      offX      : (data.offsetX || 0),
      offY      : (data.offsetY || 0),
      stepX     : (data.stepX || data.width),
      stepY     : (data.stepY || data.height),
      numFramesX: (data.framesX || data.frames),
      oldFrame  : data.frame,
      images    : images
    };

    if (!data.modopts.is_sprite && !data.canvas){
      data.stage.append(images);
    }

    images.css({
      width: data.modopts.resX,
      height: data.modopts.resY
    });

    Module.draw(data);
  };
  
  Module.draw = function(data){    
    if (data.modopts.is_sprite){
      Module.drawSpritesheet(data);
    } else{
      Module.drawImages(data);
    }
  };

  Module.drawSpritesheet = function(data){
    // Assumes all images are batched in a single sprite image

    var opts = data.modopts;
    var image = data.source[0];
    var frameX = (data.frame % opts.numFramesX);
    var frameY = (data.frame / opts.numFramesX)|0;
    var x = opts.offX + frameX * opts.stepX;
    var y = opts.offY + frameY * opts.stepY;

    if (data.canvas){
      data.context.clearRect(0, 0, data.width, data.height);
      data.context.drawImage(data.images[0], x, y, data.width, data.height, 0, 0, data.width, data.height);
      return;
    }

    data.stage.css({
      width      : [data.width, "px"].join(""),
      height     : [data.height, "px"].join(""),
      "background-image"    : ["url('", image, "')"].join(""),
      "background-repeat"   : "no-repeat",
      "background-position" : [-x, "px ", -y, "px"].join(""),
      // Spritesheets may easily exceed the maximum image size for iphones.
      // In this case the browser will scale down the image automaticly and
      // this will break the logic how spritespin works.
      // Here we set the webkit css attribute to display the background in its
      // original dimension even if it has been scaled down.
      "-webkit-background-size" : [opts.resX, "px ", opts.resY, "px"].join("")
    }); 
  };

  Module.drawImages = function(data){
    var img = data.images[data.frame];
    if (data.canvas){
      data.context.clearRect(0, 0, data.width, data.height);
      data.context.drawImage(img, 0, 0);
      return;
    }

    var frame = data.stage.css({
      width      : [data.width, "px"].join(""),
      height     : [data.height, "px"].join("")
    }).children().hide()[data.frame];
    SpriteSpin.disableSelection($(frame)).show();
  };

}(window.jQuery, window));
(function($, window) {
  var Module = window.SpriteSpin.modules.gallery = {};
  
  Module.reload = function(data){
    data.images = [];
    data.offsets = [];
    data.stage.empty();
    data.speed = 500;
    data.opacity = 0.25;
    data.oldFrame = 0;
    var size = 0, i = 0;
    for(i = 0; i < data.source.length; i+= 1){
      var img = $("<img src='" + data.source[i] + "'/>");
      data.stage.append(img);
      data.images.push(img);
      data.offsets.push(-size + (data.width - img[0].width) / 2);
      size += img[0].width;
      
      img.css({ opacity : 0.25 });
    }
    data.stage.css({ width : size });
    data.images[data.oldFrame].animate({ opacity : 1 }, data.speed);
  };
  
  Module.draw = function(data){
    if ((data.oldFrame != data.frame) && data.offsets){
      data.stage.stop(true, false);
      data.stage.animate({ 
        "left" : data.offsets[data.frame]
      }, data.speed);
      
      data.images[data.oldFrame].animate({ opacity : data.opacity }, data.speed);
      data.oldFrame = data.frame;
      data.images[data.oldFrame].animate({ opacity : 1 }, data.speed);
    } else {
      //console.log(data.dX);
      data.stage.css({
        "left" : data.offsets[data.frame] + data.dX
      });
    }
  };
  
  Module.resetInput = function(data){
    if (!data.onDrag){
      data.stage.animate({
        "left" : data.offsets[data.frame]
      });
    }
  };
}(jQuery, window));
(function($, window) {  
  var Module = window.SpriteSpin.modules.panorama = {};

  Module.reload = function(data){
    data.stage.empty();             // clear the stage
    var opts = data.modopts = {};   // precalculate and cache options for this module
    opts.resX = (data.resolutionX || data.images[0].width);
    opts.resY = (data.resolutionY || data.images[0].height);
    if (data.orientation == "horizontal"){
      opts.frames = (data.frames || opts.resX);
    } else {
      opts.frames = (data.frames || opts.resY);
    }
    
    Module.draw(data);
  };
  
  Module.draw = function(data){      
    var opts = data.modopts;
    var x, y;
    
    if (data.orientation == "horizontal"){
      x = (data.frame % opts.frames);
      y = 0;      
    } else {
      x = 0;
      y = (data.frame % opts.frames);
    }
    
    data.stage.css({
      width      : [data.width, "px"].join(""),
      height     : [data.height, "px"].join(""),
      "background-image"        : ["url('", data.source[0], "')"].join(""),
      "background-repeat"       : "repeat-both",
      "background-position"     : [-x, "px ", -y, "px"].join(""),
      "-webkit-background-size" : [opts.resX, "px ", opts.resY, "px"].join("")
    });
  };
  
}(window.jQuery, window));

/*==========================================================================================================================*/
// jquery.events.frame.js
// 1.1 - lite
// Stephen Band
// 
// Project home:
// webdev.stephband.info/events/frame/
//
// Source:
// http://github.com/stephband/jquery.event.frame

(function(jQuery, undefined){

var timer;

// Timer constructor
// fn - callback to call on each frame, with context set to the timer object
// fd - frame duration in milliseconds

function Timer( fn, fd ) {
    var self = this,
        clock;
    
    function update(){
        self.frameCount++;
        fn.call(self);
    }
    
    this.frameDuration = fd || 25 ;
    this.frameCount = -1 ;
    this.start = function(){
        update();
        clock = setInterval(update, this.frameDuration);
    };
    this.stop = function(){
        clearInterval( clock );
        clock = null;
    };
}

// callHandler() is the callback given to the timer object,
// it makes the event object and calls the handler
// context is the timer object

function callHandler(){
    var fn = jQuery.event.special.frame.handler,
        event = jQuery.Event("frame"),
        array = this.array,
        l = array.length;
    
    // Give event object properties
    event.frameCount = this.frameCount;
    
    // Call handler on each elem in array
    while (l--) {
        fn.call(array[l], event);
    }
}

if (!jQuery.event.special.frame) {
    jQuery.event.special.frame = {
        // Fires the first time an event is bound per element
        setup: function(data, namespaces) {
            if ( timer ) {
                timer.array.push(this);
            }
            else {
                timer = new Timer( callHandler, data && data.frameDuration );
                timer.array = [this];
                
                // Queue timer to start as soon as this thread has finished
                var t = setTimeout(function(){
                    timer.start();
                    clearTimeout(t);
                    t = null;
                }, 0);
            }
            return;
        },
        // Fires last time event is unbound per element
        teardown: function(namespaces) {
            var array = timer.array,
                l = array.length;
            
            // Remove element from list
            while (l--) {
                if (array[l] === this) {
                    array.splice(l, 1);
                    break;
                }
            }
            
            // Stop and remove timer when no elems left
            if (array.length === 0) {
                timer.stop();
                timer = undefined;
            }
            return;
        },
        handler: function(event){
            // let jQuery handle the calling of event handlers
            jQuery.event.handle.apply(this, arguments);
        }
    };
}

})(jQuery);
// jquery.parallax.js
// 2.0
// Stephen Band
//
// Project and documentation site:
// webdev.stephband.info/jparallax/
//
// Repository:
// github.com/stephband/jparallax

(function(jQuery, undefined) {
    // VAR
    var debug = true,

        options = {
            mouseport:     'body',  // jQuery object or selector of DOM node to use as mouseport
            xparallax:     true,    // boolean | 0-1 | 'npx' | 'n%'
            yparallax:     true,    //
            xorigin:       0.5,     // 0-1 - Sets default alignment. Only has effect when parallax values are something other than 1 (or true, or '100%')
            yorigin:       0.5,     //
            decay:         0.66,    // 0-1 (0 instant, 1 forever) - Sets rate of decay curve for catching up with target mouse position
            frameDuration: 30,      // Int (milliseconds)
            freezeClass:   'freeze' // String - Class added to layer when frozen
        },

        value = {
            left: 0,
            top: 0,
            middle: 0.5,
            center: 0.5,
            right: 1,
            bottom: 1
        },

        rpx = /^\d+\s?px$/,
        rpercent = /^\d+\s?%$/,

        win = jQuery(window),
        doc = jQuery(document),
        mouse = [0, 0];

    var Timer = (function(){
        var debug = false;

        // Shim for requestAnimationFrame, falling back to timer. See:
        // see http://paulirish.com/2011/requestanimationframe-for-smart-animating/
        var requestFrame = (function(){
                return (
                    window.requestAnimationFrame ||
                    window.webkitRequestAnimationFrame ||
                    window.mozRequestAnimationFrame ||
                    window.oRequestAnimationFrame ||
                    window.msRequestAnimationFrame ||
                    function(fn, node){
                        return window.setTimeout(function(){
                            fn();
                        }, 25);
                    }
                );
            })();

        function Timer() {
            var callbacks = [],
                nextFrame;

            function noop() {}

            function frame(){
                var cbs = callbacks.slice(0),
                    l = cbs.length,
                    i = -1;

                if (debug) { console.log('timer frame()', l); }

                while(++i < l) { cbs[i].call(this); }
                requestFrame(nextFrame);
            }

            function start() {
                if (debug) { console.log('timer start()'); }
                this.start = noop;
                this.stop = stop;
                nextFrame = frame;
                requestFrame(nextFrame);
            }

            function stop() {
                if (debug) { console.log('timer stop()'); }
                this.start = start;
                this.stop = noop;
                nextFrame = noop;
            }

            this.callbacks = callbacks;
            this.start = start;
            this.stop = stop;
        }

        Timer.prototype = {
            add: function(fn) {
                var callbacks = this.callbacks,
                    l = callbacks.length;

                // Check to see if this callback is already in the list.
                // Don't add it twice.
                while (l--) {
                    if (callbacks[l] === fn) { return; }
                }

                this.callbacks.push(fn);
                if (debug) { console.log('timer add()', this.callbacks.length); }
            },

            remove: function(fn) {
                var callbacks = this.callbacks,
                    l = callbacks.length;

                // Remove all instances of this callback.
                while (l--) {
                    if (callbacks[l] === fn) { callbacks.splice(l, 1); }
                }

                if (debug) { console.log('timer remove()', this.callbacks.length); }

                if (callbacks.length === 0) { this.stop(); }
            }
        };

        return Timer;
    })();

    function parseCoord(x) {
        return (rpercent.exec(x)) ? parseFloat(x)/100 : x;
    }

    function parseBool(x) {
        return typeof x === "boolean" ? x : !!( parseFloat(x) ) ;
    }

    function portData(port) {
        var events = {
                'mouseenter.parallax': mouseenter,
                'mouseleave.parallax': mouseleave
            },
            winEvents = {
                'resize.parallax': resize
            },
            data = {
                elem: port,
                events: events,
                winEvents: winEvents,
                timer: new Timer()
            },
            layers, size, offset;

        function updatePointer() {
            data.pointer = getPointer(mouse, [true, true], offset, size);
        }

        function resize() {
            size = getSize(port);
            offset = getOffset(port);
            data.threshold = getThreshold(size);
        }

        function mouseenter() {
            data.timer.add(updatePointer);
        }

        function mouseleave(e) {
            data.timer.remove(updatePointer);
            data.pointer = getPointer([e.pageX, e.pageY], [true, true], offset, size);
        }

        win.on(winEvents);
        port.on(events);

        resize();

        return data;
    }

    function getData(elem, name, fn) {
        var data = elem.data(name);

        if (!data) {
            data = fn ? fn(elem) : {} ;
            elem.data(name, data);
        }

        return data;
    }

    function getPointer(mouse, parallax, offset, size){
        var pointer = [],
            x = 2;

        while (x--) {
            pointer[x] = (mouse[x] - offset[x]) / size[x] ;
            pointer[x] = pointer[x] < 0 ? 0 : pointer[x] > 1 ? 1 : pointer[x] ;
        }

        return pointer;
    }

    function getSize(elem) {
        return [elem.width(), elem.height()];
    }

    function getOffset(elem) {
        var offset = elem.offset() || {left: 0, top: 0},
            borderLeft = elem.css('borderLeftStyle') === 'none' ? 0 : parseInt(elem.css('borderLeftWidth'), 10),
            borderTop = elem.css('borderTopStyle') === 'none' ? 0 : parseInt(elem.css('borderTopWidth'), 10),
            paddingLeft = parseInt(elem.css('paddingLeft'), 10),
            paddingTop = parseInt(elem.css('paddingTop'), 10);

        return [offset.left + borderLeft + paddingLeft, offset.top + borderTop + paddingTop];
    }

    function getThreshold(size) {
        return [1/size[0], 1/size[1]];
    }

    function layerSize(elem, x, y) {
        return [x || elem.outerWidth(), y || elem.outerHeight()];
    }

    function layerOrigin(xo, yo) {
        var o = [xo, yo],
            i = 2,
            origin = [];

        while (i--) {
            origin[i] = typeof o[i] === 'string' ?
                o[i] === undefined ?
                    1 :
                    value[origin[i]] || parseCoord(origin[i]) :
                o[i] ;
        }

        return origin;
    }

    function layerPx(xp, yp) {
        return [rpx.test(xp), rpx.test(yp)];
    }

    function layerParallax(xp, yp, px) {
        var p = [xp, yp],
            i = 2,
            parallax = [];

        while (i--) {
            parallax[i] = px[i] ?
                parseInt(p[i], 10) :
                parallax[i] = p[i] === true ? 1 : parseCoord(p[i]) ;
        }

        return parallax;
    }

    function layerOffset(parallax, px, origin, size) {
        var i = 2,
            offset = [];

        while (i--) {
            offset[i] = px[i] ?
                origin[i] * (size[i] - parallax[i]) :
                parallax[i] ? origin[i] * ( 1 - parallax[i] ) : 0 ;
        }

        return offset;
    }

    function layerPosition(px, origin) {
        var i = 2,
            position = [];

        while (i--) {
            if (px[i]) {
                // Set css position constant
                position[i] = origin[i] * 100 + '%';
            }
            else {

            }
        }

        return position;
    }

    function layerPointer(elem, parallax, px, offset, size) {
        var viewport = elem.offsetParent(),
            pos = elem.position(),
            position = [],
            pointer = [],
            i = 2;

        // Reverse calculate ratio from elem's current position
        while (i--) {
            position[i] = px[i] ?
                // TODO: reverse calculation for pixel case
                0 :
                pos[i === 0 ? 'left' : 'top'] / (viewport[i === 0 ? 'outerWidth' : 'outerHeight']() - size[i]) ;

            pointer[i] = (position[i] - offset[i]) / parallax[i] ;
        }

        return pointer;
    }

    function layerCss(parallax, px, offset, size, position, pointer) {
        var pos = [],
            cssPosition,
            cssMargin,
            x = 2,
            css = {};

        while (x--) {
            if (parallax[x]) {
                pos[x] = parallax[x] * pointer[x] + offset[x];

                // We're working in pixels
                if (px[x]) {
                    cssPosition = position[x];
                    cssMargin = pos[x] * -1;
                }
                // We're working by ratio
                else {
                    cssPosition = pos[x] * 100 + '%';
                    cssMargin = pos[x] * size[x] * -1;
                }

                // Fill in css object
                if (x === 0) {
                    css.left = cssPosition;
                    css.marginLeft = cssMargin;
                }
                else {
                    css.top = cssPosition;
                    css.marginTop = cssMargin;
                }
            }
        }

        return css;
    }

    function pointerOffTarget(targetPointer, prevPointer, threshold, decay, parallax, targetFn, updateFn) {
        var pointer, x;

        if ((!parallax[0] || Math.abs(targetPointer[0] - prevPointer[0]) < threshold[0]) &&
            (!parallax[1] || Math.abs(targetPointer[1] - prevPointer[1]) < threshold[1])) {
            // Pointer has hit the target
            if (targetFn) { targetFn(); }
            return updateFn(targetPointer);
        }

        // Pointer is nowhere near the target
        pointer = [];
        x = 2;

        while (x--) {
            if (parallax[x]) {
                pointer[x] = targetPointer[x] + decay * (prevPointer[x] - targetPointer[x]);
            }
        }

        return updateFn(pointer);
    }

    function pointerOnTarget(targetPointer, prevPointer, threshold, decay, parallax, targetFn, updateFn) {
        // Don't bother updating if the pointer hasn't changed.
        if (targetPointer[0] === prevPointer[0] && targetPointer[1] === prevPointer[1]) {
            return;
        }

        return updateFn(targetPointer);
    }

    function unport(elem, events, winEvents) {
        elem.off(events).removeData('parallax_port');
        win.off(winEvents);
    }

    function unparallax(node, port, events) {
        port.elem.off(events);

        // Remove this node from layers
        port.layers = port.layers.not(node);

        // If port.layers is empty, destroy the port
        if (port.layers.length === 0) {
            unport(port.elem, port.events, port.winEvents);
        }
    }

    function unstyle(parallax) {
        var css = {};

        if (parallax[0]) {
            css.left = '';
            css.marginLeft = '';
        }

        if (parallax[1]) {
            css.top = '';
            css.marginTop = '';
        }

        elem.css(css);
    }

    jQuery.fn.parallax = function(o){
        var options = jQuery.extend({}, jQuery.fn.parallax.options, o),
            args = arguments,
            elem = options.mouseport instanceof jQuery ?
                options.mouseport :
                jQuery(options.mouseport) ,
            port = getData(elem, 'parallax_port', portData),
            timer = port.timer;

        return this.each(function(i) {
            var node      = this,
                elem      = jQuery(this),
                opts      = args[i + 1] ? jQuery.extend({}, options, args[i + 1]) : options,
                decay     = opts.decay,
                size      = layerSize(elem, opts.width, opts.height),
                origin    = layerOrigin(opts.xorigin, opts.yorigin),
                px        = layerPx(opts.xparallax, opts.yparallax),
                parallax  = layerParallax(opts.xparallax, opts.yparallax, px),
                offset    = layerOffset(parallax, px, origin, size),
                position  = layerPosition(px, origin),
                pointer   = layerPointer(elem, parallax, px, offset, size),
                pointerFn = pointerOffTarget,
                targetFn  = targetInside,
                events = {
                    'mouseenter.parallax': function mouseenter(e) {
                        pointerFn = pointerOffTarget;
                        targetFn = targetInside;
                        timer.add(frame);
                        timer.start();
                    },
                    'mouseleave.parallax': function mouseleave(e) {
                        // Make the layer come to rest at it's limit with inertia
                        pointerFn = pointerOffTarget;
                        // Stop the timer when the the pointer hits target
                        targetFn = targetOutside;
                    }
                };

            function updateCss(newPointer) {
                var css = layerCss(parallax, px, offset, size, position, newPointer);
                elem.css(css);
                pointer = newPointer;
            }

            function frame() {
                pointerFn(port.pointer, pointer, port.threshold, decay, parallax, targetFn, updateCss);
            }

            function targetInside() {
                // Pointer hits the target pointer inside the port
                pointerFn = pointerOnTarget;
            }

            function targetOutside() {
                // Pointer hits the target pointer outside the port
                timer.remove(frame);
            }


            if (jQuery.data(node, 'parallax')) {
                elem.unparallax();
            }

            jQuery.data(node, 'parallax', {
                port: port,
                events: events,
                parallax: parallax
            });

            port.elem.on(events);
            port.layers = port.layers? port.layers.add(node): jQuery(node);

            /*function freeze() {
                freeze = true;
            }
            
            function unfreeze() {
                freeze = false;
            }*/

            /*jQuery.event.add(this, 'freeze.parallax', freeze);
            jQuery.event.add(this, 'unfreeze.parallax', unfreeze);*/
        });
    };

    jQuery.fn.unparallax = function(bool) {
        return this.each(function() {
            var data = jQuery.data(this, 'parallax');

            // This elem is not parallaxed
            if (!data) { return; }

            jQuery.removeData(this, 'parallax');
            unparallax(this, data.port, data.events);
            if (bool) { unstyle(data.parallax); }
        });
    };

    jQuery.fn.parallax.options = options;

    // Pick up and store mouse position on document: IE does not register
    // mousemove on window.
    doc.on('mousemove.parallax', function(e){
        mouse = [e.pageX, e.pageY];
    });
}(jQuery));