function addthisReady(){jQuery("body").addClass("addthis-ready")}!function(){for(var a,b=function(){},c=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeStamp","trace","warn"],d=c.length,e=window.console=window.console||{};d--;)a=c[d],e[a]||(e[a]=b)}(),window.ds={};var twigTemplates={};if($("body").css("display","none"),$.cookie("daanscholtennlaccess"))$("body").css("display","block");else{var getAccess=prompt("Deze site is onder constructie en is afgesloten voor publiek.","");"abracadabra"==getAccess?($.cookie("daanscholtennlaccess","granted"),$("body").css("display","block")):window.close()}var isSafari=/constructor/i.test(window.HTMLElement);isSafari&&$("body").addClass("is-safari"),function(a,b,c){b.ds.goTo=function(e,f,g,h){if(e.metaKey||e.ctrlKey)b.open(g,"_blank"),"activeElement"in c&&c.activeElement.blur();else{var i=a(".menu-wrapper");i.find('a[href="'+f+'"]').addClass("active"),i.find('a[href!="'+f+'"]').removeClass("active"),a("html, body").velocity("scroll",{duration:h,easing:"easeOutSine",complete:function(){a("body").addClass("fade-out-content"),a(".main-wrapper").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",function(){d=!0,b.location.href=g})}})}},b.ds.searchOnGitHub=function(b){var c="blog/";a.getJSON("https://api.github.com/search/code?q="+escape(b)+"+in%3Afile+repo%3ADaanScholten%2FDaanScholten.github.io+extension%3Ahtml+path%3A/"+c,function(b){var d=[];a.each(b.items,function(a,b){b.path!=c+"index.html"&&d.push("/"+b.path)}),console.log(d)})};var d=!1;a(function(){setTimeout(function(){a("body").removeClass("fade-out-content")},40),Modernizr.svg||a('img[src*="svg"]').attr("src",function(){return a(this).attr("src").replace(".svg",".png")}),a(c.links).filter(function(){return this.hostname!=b.location.hostname}).attr("target","_blank"),a(c).on("click touch","a[target!=_blank]",function(c){c.preventDefault();var e,f=a(this),g=a(this).attr("href"),h=b.location.pathname;"/"!=h&&"/"==h.slice(-1)&&(h=h.slice(0,h.length-1)),e="/"+g.split("/")[1],d||h==g||(0!=a(b).scrollTop()?b.ds.goTo(c,e,f.attr("href"),300):b.ds.goTo(c,e,f.attr("href"),0))}),a(".blog .older-posts .post, .home .latest-posts .post").one("click touch",function(b){a(this).find("header a[target!=_blank]").click()})})}(window.jQuery,window,document);