!function(){for(var a,b=function(){},c=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeStamp","trace","warn"],d=c.length,e=window.console=window.console||{};d--;)a=c[d],e[a]||(e[a]=b)}(),window.ds={};var ds=window.ds;!function(a,b,c){ds.goTo=function(d,e,f,g){if(d.metaKey||d.ctrlKey)b.open(f,"_blank"),"activeElement"in c&&c.activeElement.blur();else{var h=a(".menu-wrapper");h.find('a[href="'+e+'"]').addClass("active"),h.find('a[href!="'+e+'"]').removeClass("active"),a("html, body").velocity("scroll",{duration:g,easing:"easeOutSine",complete:function(){a("body").addClass("fade-out-content"),a(".main-wrapper").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",function(){menuItemHasBeenClicked=!0,b.location.href=f})}})}},ds.searchOnGitHub=function(b){var c="blog/";a.getJSON("https://api.github.com/search/code?q="+escape(b)+"+in%3Afile+repo%3ADaanScholten%2FDaanScholten.github.io+extension%3Ahtml+path%3A/"+c,function(b){var d=[];a.each(b.items,function(a,b){b.path!=c+"index.html"&&d.push("/"+b.path)}),console.log(d)})},ds.contactFormPrintResult=function(b,c,d){a(".contact-form-status",b).text(c),"success"==d?b.removeClass("form-sending").removeClass("form-error").addClass("form-sent"):b.removeClass("form-sending").addClass("form-error")},ds.loadAddThis=function(){a.ajax({url:"//s7.addthis.com/js/300/addthis_widget.js#pubid=daanscholtennl",dataType:"script",cache:!0,success:function(){a("body").addClass("addthis-ready")}})}}(window.jQuery,window,document);var ds=window.ds,twigTemplates={};if($("body").css("display","none"),$.cookie("daanscholtennlaccess"))$("body").css("display","block");else{var getAccess=prompt("Deze site is onder constructie en is afgesloten voor publiek.","");"abracadabra"==getAccess?($.cookie("daanscholtennlaccess","granted",{expires:7,path:"/"}),$("body").css("display","block")):window.close()}var isSafari=/constructor/i.test(window.HTMLElement);isSafari&&$("body").addClass("is-safari"),function(a,b,c){var d=!1;a(function(){function e(){a(".menu-wrapper-wrapper").css("height",a(".menu-wrapper").height()),h=a(".header-wrapper").height()}function f(){a(b).scrollTop()+1>h?a("body").addClass("menu-fixed").removeClass("menu-static"):a("body").addClass("menu-static").removeClass("menu-fixed")}function g(){b.requestAnimationFrame(e)}setTimeout(function(){a("body").removeClass("fade-out-content")},40),ds.loadAddThis(),Modernizr.svg||a('img[src*="svg"]').attr("src",function(){return a(this).attr("src").replace(".svg",".png")});var h;g(),a(b).on("resize",g),a(b).on("scroll",f),f(),a(c.links).filter(function(){var c=_.isString(a(this).attr("target")),d=this.hostname!=b.location.hostname;return d&&!c}).attr("target","_blank"),a(c).on("click touch","a[target!=_blank]:not(.no-fade)",function(c){c.preventDefault();var e,f=a(this),g=a(this).attr("href"),h=b.location.pathname,i=!1;f.attr("class")&&f.attr("class").indexOf("addthis")>-1&&(i=!0),"/"!=h&&"/"==h.slice(-1)&&(h=h.slice(0,h.length-1)),e="/"+g.split("/")[1],d||h==g||i||(0!=a(b).scrollTop()?ds.goTo(c,e,f.attr("href"),300):ds.goTo(c,e,f.attr("href"),0))}),a(".blog .older-posts .post, .home .latest-posts .post").one("click touch",function(b){a(this).find("header a[target!=_blank]").click()})})}(window.jQuery,window,document);var validation,formSending=!1;window.blabla=!1,$(function(){function a(){var a=$('[name="name"]',$form),b=$('[name="email"]',$form),c=$('[name="tel"]',$form),d=$('[name="message"]',$form),e="anoesjsadraee@gmail.com";return $form.removeClass("form-error"),$.ajax({type:"POST",url:"https://mandrillapp.com/api/1.0/messages/send.json",data:{key:"RrgEGMPYlBUZsIWLcsp6yA",message:{from_email:"no-reply@daanscholten.nl",from_name:"Contactformulier inzendingen",headers:{"Reply-To":b.val()},subject:"Nieuwe contactformulier inzending",text:"Naam: "+a.val()+"\nE-mail: "+b.val()+"\nTel: "+c.val()+"\n\nBericht:\n"+d.val(),to:[{email:e,name:"Daan Scholten",type:"to"}]}}}).done(function(c){formSending=!1,"sent"==c[0].status?($.ajax({type:"POST",url:"https://mandrillapp.com/api/1.0/messages/send.json",data:{key:"RrgEGMPYlBUZsIWLcsp6yA",message:{from_email:e,from_name:"Daan Scholten",headers:{"Reply-To":e},subject:"Bedankt voor uw bericht",text:"Beste "+a.val()+",\n\nBedankt voor uw reactie via het contactformulier op http://www.daanscholten.nl/.\nUw bericht is in goede orde ontvangen. U krijgt van mij zo snel mogelijk een reactie.\n\nMet vriendelijke groet,\nDaan Scholten",to:[{email:b.val(),name:a.val(),type:"to"}]}}}),ds.contactFormPrintResult($form,"Bedankt voor uw bericht!","success")):(formSending=!1,ds.contactFormPrintResult($form,"Er heeft zich een fout voorgedaan.","fail"))}).fail(function(a){formSending=!1,ds.contactFormPrintResult($form,"Er heeft zich een fout voorgedaan.","fail")}),!1}$form=$(".contact-form"),validation=$form.validate({rules:{name:{required:!0},email:{required:!0,email:!0},tel:{required:!0},message:{required:!0}},messages:{name:{required:""},email:{required:"",email:""},tel:{required:""},message:{required:""}},errorClass:"invalid",validClass:"valid",focusInvalid:!0,onfocusout:function(a){this.element(a)},submitHandler:function(b){1!=formSending&&($form.addClass("form-sending"),formSending=!0,a())}})}(window.jQuery,window,document));