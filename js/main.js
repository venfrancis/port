$(document).ready(function(){
	var $window = $(window);
	var $pos = $window.scrollTop();

	//let the scroll to top button appear
	$(window).scroll(function(){
		if($window.scrollTop() > 300){
			$('.back2top').animate({right: '20px'},300, "easeInOutQuad");
		}
		if($window.scrollTop() < 100){
			$('.back2top').animate({right: '-100px'},100, "easeInOutQuad");
		}
		
	});
	$('.back2top').click(function(){
		$("html, body").animate({ scrollTop: 0 }, 600);
    	return false;
	});

	//make the holders 100% height to the viewport
	$('.slide, .control, .fill').css('height', $window.height());


	//give slide holders 'inview' classes when viewed
	$('.first-slide, .second-slide').bind('inview', function (event, visible) {
		if (visible == true) {
			$(this).addClass("inview");
		} else {
			$(this).removeClass("inview");
		}
	});
	
	/*nav links*/
	$('.first-slide .fill').click(function(){
		/*prefent default click function (load flick)*/
		$('html, body').animate({
			scrollTop : $('.second-slide').offset().top,
			easing: 'easeInOutQuad'
		}, 3500);
		//x.preventDefault();
	});



	//animate the broken glasses
	var target = $(".bglasses li.para-bglass");
	var gd = $(".gd"); //glass debris

	target.parallax(
	{ mouseport: target },
		{ xparallax: 2, yparallax: 3 },     // first broken glass options
		{ xparallax: 0.6, yparallax: 0.5 }    // second broken glass options
	);

	//prepare the sprites
	var animateImg = $(".myimg");
	var bgImg = $('.myimg').css('background-image');
		bgImg = bgImg.replace('url(','').replace(')','');
		

	animateImg.spritespin({
	    width     : 640,
	    height    : 437,
	    frame     : 0,
	    frames    : 34,
	    framesX   : 34,
	    rsX       : 21760,
	    resY      : 437,
	    animate   : false,
	    loop      : true,
	    frameWrap : false,
        frameTime : 60,
	    source    : bgImg
	  });

	var lastScrollTop = 0;
	
	$window.bind('scroll', function(){

		//print the number of px scrolled
		if($(this).scrollTop()){
			$('.scrolledval').text($(this).scrollTop());
		}
		

		//detect if the scroll bar is going down or up
		
       	var st = $(this).scrollTop();

	   	if (st > lastScrollTop){
	       	//$('.fill h1').text('going down!');

           	animateImg.spritespin("next").bind("onFrame", function(){
		    	var $this = $(this), data = $this.data("spritespin");
		    	if(data.frame >= 33){
		    		console.log('stopped');
		    	}
           		console.log(data.frame);

           	});
	   	} else {
	   		if( st > 90 && st < 250){
				animateImg.spritespin("prev");
	   		}
	   		//$('.fill h1').text('going up!');
       		
	   	}
	   	lastScrollTop = st;
		console.log('scrolled px :' + $(this).scrollTop());
	});	

});












