/*! MoOx - v9.0.0 - 2014-12-31 */
if(function(){var a,b=function(a,b){return function(){return a.apply(b,arguments)}};a=function(){function a(){}return a.prototype.extend=function(a,b){var c,d;for(c in a)d=a[c],null!=d&&(b[c]=d);return b},a.prototype.isMobile=function(a){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)},a}(),this.WOW=function(){function c(a){null==a&&(a={}),this.scrollCallback=b(this.scrollCallback,this),this.scrollHandler=b(this.scrollHandler,this),this.start=b(this.start,this),this.scrolled=!1,this.config=this.util().extend(a,this.defaults)}return c.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,initAlreadyVisible:!0},c.prototype.init=function(){var a;return this.element=window.document.documentElement,"interactive"===(a=document.readyState)||"complete"===a?this.start():document.addEventListener("DOMContentLoaded",this.start)},c.prototype.start=function(){var a,b,c,d;if(this.boxes=this.element.getElementsByClassName(this.config.boxClass),this.boxes.length){if(this.disabled())return this.resetStyle();for(d=this.boxes,b=0,c=d.length;c>b;b++)a=d[b],!this.initAlreadyVisible&&this.isVisible(a)?this.show(a,!1):this.applyStyle(a,!0);return window.addEventListener("scroll",this.scrollHandler,!1),window.addEventListener("resize",this.scrollHandler,!1),this.interval=setInterval(this.scrollCallback,50)}},c.prototype.stop=function(){return window.removeEventListener("scroll",this.scrollHandler,!1),window.removeEventListener("resize",this.scrollHandler,!1),null!=this.interval?clearInterval(this.interval):void 0},c.prototype.show=function(a,b){return this.applyStyle(a,!1,b),a.className=""+a.className+" "+this.config.animateClass},c.prototype.applyStyle=function(a,b,c){var d,e,f;return c!==!1&&(e=a.getAttribute("data-wow-duration"),d=a.getAttribute("data-wow-delay"),f=a.getAttribute("data-wow-iteration")),a.setAttribute("style",this.customStyle(b,e,d,f))},c.prototype.resetStyle=function(){var a,b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],e.push(a.setAttribute("style","visibility: visible;"));return e},c.prototype.customStyle=function(a,b,c,d){var e;return e=a?"visibility: hidden; -webkit-animation-name: none; -moz-animation-name: none; animation-name: none;":"visibility: visible;",b&&(e+="-webkit-animation-duration: "+b+"; -moz-animation-duration: "+b+"; animation-duration: "+b+";"),c&&(e+="-webkit-animation-delay: "+c+"; -moz-animation-delay: "+c+"; animation-delay: "+c+";"),d&&(e+="-webkit-animation-iteration-count: "+d+"; -moz-animation-iteration-count: "+d+"; animation-iteration-count: "+d+";"),e},c.prototype.scrollHandler=function(){return this.scrolled=!0},c.prototype.scrollCallback=function(){var a;return this.scrolled&&(this.scrolled=!1,this.boxes=function(){var b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],a&&(this.isVisible(a)?this.show(a):e.push(a));return e}.call(this),!this.boxes.length)?this.stop():void 0},c.prototype.offsetTop=function(a){var b;for(b=a.offsetTop;a=a.offsetParent;)b+=a.offsetTop;return b},c.prototype.isVisible=function(a){var b,c,d,e,f;return c=a.getAttribute("data-wow-offset")||this.config.offset,f=window.pageYOffset,e=f+this.element.clientHeight-c,d=this.offsetTop(a),b=d+a.clientHeight,e>=d&&b>=f},c.prototype.util=function(){return this._util||(this._util=new a)},c.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},c}()}.call(this),function(a,b){"object"==typeof exports?module.exports=b():"function"==typeof define&&define.amd?define([],b):a.Pjax=b()}(this,function(){"use strict";function a(){return(new Date).getTime()}var b=function(c){this.firstrun=!0,this.options=c,this.options.elements=this.options.elements||"a[href], form[action]",this.options.selectors=this.options.selectors||["title",".js-Pjax"],this.options.switches=this.options.switches||{},this.options.switchesOptions=this.options.switchesOptions||{},this.options.history=this.options.history||!0,this.options.currentUrlFullReload=this.options.currentUrlFullReload||!1,this.options.analytics=this.options.analytics||function(a){window._gaq&&_gaq.push(["_trackPageview"]),window.ga&&ga("send","pageview",{page:a.url,title:a.title})},this.options.scrollTo=this.options.scrollTo||0,this.options.debug=this.options.debug||!1,this.maxUid=this.lastUid=a(),this.options.switches.head||(this.options.switches.head=this.switchElementsAlt),this.options.switches.body||(this.options.switches.body=this.switchElementsAlt),this.log("Pjax options",this.options),"function"!=typeof c.analytics&&(c.analytics=function(){}),this.parseDOM(document),b.on(window,"popstate",function(a){if(a.state){var c=b.clone(this.options);c.url=a.state.url,c.title=a.state.title,c.history=!1,a.state.uid<this.lastUid?c.backward=!0:c.forward=!0,this.lastUid=a.state.uid,this.loadUrl(a.state.url,c)}}.bind(this))};if(b.isSupported=function(){return window.history&&window.history.pushState&&window.history.replaceState&&!navigator.userAgent.match(/((iPod|iPhone|iPad).+\bOS\s+[1-4]\D|WebApps\/.+CFNetwork)/)},b.forEachEls=function(a,b,c){return a instanceof HTMLCollection||a instanceof NodeList?Array.prototype.forEach.call(a,b,c):void b.call(c,a)},b.on=function(a,c,d,e){c="string"==typeof c?c.split(" "):c,c.forEach(function(c){b.forEachEls(a,function(a){a.addEventListener(c,d,e)})},this)},b.off=function(a,c,d,e){c="string"==typeof c?c.split(" "):c,c.forEach(function(c){b.forEachEls(a,function(a){a.removeEventListener(c,d,e)})},this)},b.trigger=function(a,c){c="string"==typeof c?c.split(" "):c,c.forEach(function(c){var d;document.createEvent?(d=document.createEvent("HTMLEvents"),d.initEvent(c,!0,!0)):(d=document.createEventObject(),d.eventType=c),d.eventName=c,document.createEvent?b.forEachEls(a,function(a){a.dispatchEvent(d)}):b.forEachEls(a,function(a){a.fireEvent("on"+d.eventType,d)})},this)},b.clone=function(a){if(null===a||"object"!=typeof a)return a;var b=a.constructor();for(var c in a)a.hasOwnProperty(c)&&(b[c]=a[c]);return b},b.executeScripts=function(a){b.forEachEls(a.querySelectorAll("script"),function(a){a.type&&"text/javascript"!==a.type.toLowerCase()||(a.parentNode&&a.parentNode.removeChild(a),b.evalScript(a))})},b.evalScript=function(a){var b=a.text||a.textContent||a.innerHTML||"",c=document.querySelector("head")||document.documentElement,d=document.createElement("script");if(b.match("document.write"))return console&&console.log&&console.log("Script contains document.write. Can’t be executed correctly. Code skipped ",a),!1;d.type="text/javascript";try{d.appendChild(document.createTextNode(b))}catch(e){d.text=b}return c.insertBefore(d,c.firstChild),c.removeChild(d),!0},b.prototype={log:function(){this.options.debug&&console&&("function"==typeof console.log?console.log.apply(console,arguments):console.log&&console.log(arguments))},getElements:function(a){return a.querySelectorAll(this.options.elements)},parseDOM:function(a){b.forEachEls(this.getElements(a),function(a){switch(a.tagName.toLowerCase()){case"a":this.attachLink(a);break;case"form":this.log("Pjax doesnt support <form> yet. TODO :)");break;default:throw"Pjax can only be applied on <a> or <form> submit"}},this)},attachLink:function(a){b.on(a,"click",function(c){return c.which>1||c.metaKey||c.ctrlKey||c.shiftKey||c.altKey?-1:a.protocol!==window.location.protocol||a.host!==window.location.host?-2:a.pathname===location.pathname&&a.hash.length>0?-3:a.hash&&a.href.replace(a.hash,"")===location.href.replace(location.hash,"")?-4:a.href===location.href+"#"?-5:(c.preventDefault(),this.options.currentUrlFullReload&&a.href===window.location.href?(window.location.reload(),-6):void this.loadUrl(a.href,b.clone(this.options)))}.bind(this)),b.on(a,"keyup",function(){this.log("pjax todo")}.bind(this))},forEachSelectors:function(a,c,d){d=d||document,this.options.selectors.forEach(function(e){b.forEachEls(d.querySelectorAll(e),a,c)})},switchSelectors:function(a,c,d,e){a.forEach(function(a){var f=c.querySelectorAll(a),g=d.querySelectorAll(a);if(this.log("Pjax switch",a,f,g),f.length!==g.length)throw"DOM doesn’t look the same on new loaded page: ’"+a+"’ - new "+f.length+", old "+g.length;b.forEachEls(f,function(c,d){var f=g[d];this.log("newEl",c,"oldEl",f),this.options.switches[a]?this.options.switches[a].bind(this)(f,c,e,this.options.switchesOptions[a]):b.switches.outerHTML.bind(this)(f,c,e)},this)},this)},latestChance:function(a){window.location=a},onSwitch:function(){b.trigger(window,"resize scroll")},loadContent:function(a,c){var d=document.implementation.createHTMLDocument(""),e=/<html[^>]+>/gi,f=/\s?[a-z:]+(?:\=(?:\'|\")[^\'\">]+(?:\'|\"))*/gi,g=a.match(e);g&&g.length&&(g=g[0].match(f),g.length&&(g.shift(),g.forEach(function(a){var b=a.trim().split("=");d.documentElement.setAttribute(b[0],b[1].slice(1,-1))}))),d.documentElement.innerHTML=a,this.log("load content",d.documentElement.attributes,d.documentElement.innerHTML.length),this.switchSelectors(this.options.selectors,d,document,c);var h=Array.prototype.slice.call(document.querySelectorAll("[autofocus]")).pop();h&&document.activeElement!==h&&h.focus(),this.options.selectors.forEach(function(a){b.forEachEls(document.querySelectorAll(a),function(a){b.executeScripts(a)})})},doRequest:function(a,b){var c=new XMLHttpRequest;c.onreadystatechange=function(){4===c.readyState&&200===c.status?b(c.responseText):4!==c.readyState||404!==c.status&&500!==c.status||b(!1)},c.open("GET",a+(/[?&]/.test(a)?"&":"?")+(new Date).getTime(),!0),c.setRequestHeader("X-Requested-With","XMLHttpRequest"),c.send(null)},loadUrl:function(c,d){this.log("load href",c,d),b.trigger(document,"pjax:send",d),this.doRequest(c,function(e){if(e===!1)return void b.trigger(document,"pjax:complete pjax:error",d);document.activeElement.blur();try{this.loadContent(e,d)}catch(f){if(this.options.debug)throw f;return console&&console.error&&console.error("Pjax switch fail: ",f),void this.latestChance(c)}d.history&&(this.firstrun&&(this.lastUid=this.maxUid=a(),this.firstrun=!1,window.history.replaceState({url:window.location.href,title:document.title,uid:this.maxUid},document.title)),this.lastUid=this.maxUid=a(),window.history.pushState({url:c,title:d.title,uid:this.maxUid},d.title,c)),this.forEachSelectors(function(a){this.parseDOM(a)},this),b.trigger(document,"pjax:complete pjax:success",d),d.analytics(),d.scrollTo!==!1&&(d.scrollTo.length>1?window.scrollTo(d.scrollTo[0],d.scrollTo[1]):window.scrollTo(0,d.scrollTo))}.bind(this))}},b.switches={outerHTML:function(a,b){a.outerHTML=b.outerHTML,this.onSwitch()},innerHTML:function(a,b){a.innerHTML=b.innerHTML,a.className=b.className,this.onSwitch()},sideBySide:function(a,c,d,e){var f=Array.prototype.forEach,g=[],h=[],i=document.createDocumentFragment(),j="animationend webkitAnimationEnd MSAnimationEnd oanimationend",k=0,l=function(a){a.target==a.currentTarget&&(k--,0>=k&&g&&(g.forEach(function(a){a.parentNode&&a.parentNode.removeChild(a)}),h.forEach(function(a){a.className=a.className.replace(a.getAttribute("data-pjax-classes"),""),a.removeAttribute("data-pjax-classes")}),h=null,g=null,this.onSwitch()))}.bind(this);e=e||{},f.call(a.childNodes,function(a){g.push(a),a.classList&&!a.classList.contains("js-Pjax-remove")&&(a.hasAttribute("data-pjax-classes")&&(a.className=a.className.replace(a.getAttribute("data-pjax-classes"),""),a.removeAttribute("data-pjax-classes")),a.classList.add("js-Pjax-remove"),e.callbacks&&e.callbacks.removeElement&&e.callbacks.removeElement(a),e.classNames&&(a.className+=" "+e.classNames.remove+" "+(d.backward?e.classNames.backward:e.classNames.forward)),k++,b.on(a,j,l,!0))}),f.call(c.childNodes,function(a){if(a.classList){var c="";e.classNames&&(c=" js-Pjax-add "+e.classNames.add+" "+(d.backward?e.classNames.forward:e.classNames.backward)),e.callbacks&&e.callbacks.addElement&&e.callbacks.addElement(a),a.className+=c,a.setAttribute("data-pjax-classes",c),h.push(a),i.appendChild(a),k++,b.on(a,j,l,!0)}}),a.className=c.className,a.appendChild(i)}},b.isSupported())return b;var c=function(){};for(var d in b.prototype)b.prototype.hasOwnProperty(d)&&"function"==typeof b.prototype[d]&&(c[d]=c);return c}),function(a,b){"object"==typeof exports?module.exports=b():"function"==typeof define&&define.amd?define([],b):a.Parallaxify=b()}(this,function(){"use strict";var a=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a){window.setTimeout(a,1e3/60)}}(),b=function(a){this.options=a||{},this.options.backgroundYMin=this.options.backgroundYMin||100,this.options.backgroundYMax=this.options.backgroundYMax||0,this.options.elements=this.options.elements||".js-Parallaxify",this.elements=b.toArray("string"==typeof this.options.elements?document.querySelectorAll(this.options.elements):this.options.elements)};b.toArray=function(a){return Array.prototype.slice.call(a)};try{b.toArray(document.documentElement)}catch(c){b.toArray=function(a){var b,c=[];for(b=0;b<a.length;b++)c.push(a[b])}}return b.prototype={registerUpdate:function(){var a=this;this.requestUpdate(),window.addEventListener("resize",function(){a.requestUpdate()})},requestUpdate:function(){var b=this;this.latestScrollY!=window.pageYOffset&&(this.latestScrollY=window.pageYOffset,this.update()),a(function(){b.requestUpdate()})},update:function(){for(var a=this.elements.length;a--;){var b,c,d,e,f,g,h,i,j,k,l,m,n=this.elements[a].getBoundingClientRect(),o=window.innerHeight||document.documentElement.clientHeight;n.bottom>0&&n.top<o&&(b=document.documentElement.scrollHeight,c=window.pageYOffset,d=b-o,d&&(e=c/d,f=o*e,g=(c+f)/b,h=Math.max(0,(c+n.top-o)/d),i=Math.min(1,(c+n.bottom)/d),j=(g-h)/(i-h),k=parseInt(this.elements[a].getAttribute("data-parallaxify-y-min"),10),l=parseInt(this.elements[a].getAttribute("data-parallaxify-y-max"),10),isNaN(k)&&(k=this.options.backgroundYMin),isNaN(l)&&(l=this.options.backgroundYMax),m=window.getComputedStyle(this.elements[a],null).getPropertyValue("background-position").split(" "),""===m[0]&&(m[0]="50%"),m[1]=String(j*(l-k)+k)+"%",this.elements[a].style.backgroundPosition=m.join(" ")))}}},b}),document.querySelector&&html.classList){var forEach=Array.prototype.forEach,parallax={},whenDOMReady=function(){new WOW({boxClass:"Animate",animateClass:"Animated",offset:100,initAlreadyVisible:!1}).init(),forEach.call(document.getElementsByClassName("js-Togglable"),function(a){var b=a.querySelector(".js-Togglable-toggler"),c=[].slice.call(a.getElementsByClassName("js-Togglable-item")),d=function(){a.classList.toggle("js-Togglable--toggled"),c.forEach(function(a){a.classList.toggle("js-Togglable-item--hidden")})};b.addEventListener("click",d),b.addEventListener("keyup",d)}),forEach.call(document.getElementsByClassName("js-MailTo"),function(a){a.setAttribute("href","mailto:"+a.getAttribute("data-mailto-user")+"@"+(a.getAttribute("data-mailto-domain")||window.location.host))})};whenDOMReady();var sideBySideOptions={classNames:{remove:"Animated Animated--reverse Animate--fast Animate--noDelay",add:"Animated",backward:"Animate--slideInRight",forward:"Animate--slideInLeft"},callbacks:{removeElement:function(a){a.style.marginLeft="-"+a.getBoundingClientRect().width/2+"px"}}},mxHtmlClassNameRegex=/mx--[a-z]+/;Pjax.isSupported&&(new Pjax({selectors:["title",".Navbar",".mx-Header-body",".mx-Content",".mx-Footer-body",".js-Disqus"],switches:{title:function(a,b){var c=b.parentNode.parentNode.className.match(mxHtmlClassNameRegex);c&&c.length&&(a.parentNode.parentNode.className=a.parentNode.parentNode.className.replace(mxHtmlClassNameRegex,c[0])),Pjax.switches.outerHTML.apply(this,arguments)},".mx-Header":Pjax.switches.sideBySide,".mx-Content":Pjax.switches.sideBySide},switchesOptions:{".mx-Header":sideBySideOptions,".mx-Content":sideBySideOptions}}),document.addEventListener("pjax:send",function(){document.querySelector(".mx-Content .js-Pjax-child").classList.add("js-Pjax-child--willChange")}),document.addEventListener("pjax:success",whenDOMReady));var updateLoadStatus=function(){this.classList.remove("js-is-Loading"),this.classList.add("js-is-Loaded")};document.documentElement.addEventListener("load",function(a){a.target.classList.contains("js-is-Loading")&&updateLoadStatus.call(a.target)},!0),forEach.call(document.getElementsByClassName("js-is-Loading"),function(a){for(var b=window.getComputedStyle(a,null).getPropertyValue("background-image"),c=/url\((?:'|")?([^\)'"]+)(?:'|")?\),?\s?/g,d=c.exec(b),e=updateLoadStatus.bind(a);d&&d[1];){var f=new Image;f.src=d[1],f.onload=e,d=c.exec(b)}}),window.addEventListener("load",function(){html.classList.add("loaded")}),new Parallaxify({elements:".mx-BackgroundImg"}).registerUpdate()}