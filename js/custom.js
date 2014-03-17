/* Template: FlatBook | Author: eriktailor | Version: 1.0.1 */
/*----------------------------------------------------------*/

/*--------------------------------------------------------*/
/* # TABLE OF CONTENTS */
/*--------------------------------------------------------*/
/*
   # Javascript Check
   # Navigation
   # Slider
   # Animation Effects
   # Overview
   # Contact Form
   # Counter
   # Tablet Showcase
*/

$(document).ready(function(){
/*--------------------------------------------------------*/
/* # JAVASCRIPT CHECK */
/*--------------------------------------------------------*/
$("html").removeClass("no-js").addClass("js");

/*--------------------------------------------------------*/
/* # NAVIGATION */
/*--------------------------------------------------------*/
	
$(function(){

	var menu = $("#menu"),
		navBar = $("#header"),
		navBarHeight = navBar.outerHeight()+1,
		menuItems = $(".menu li a");

	menu.hide();

	$(".menu-btn i").click(function(){
		menu.slideToggle(300);
		$('#wrapper').toggleClass('pushed');
	});
		

	$(window).scroll(function(){
		menu.slideUp(600);
		$('#wrapper').removeClass('pushed');
	});
	
	menuItems.click(function(e){		
		var href = $(this).attr("href"),
				offsetTop = href === "#" ? 0 : $(href).offset().top-navBarHeight-96;
		$('html, body').stop().animate({ 
				scrollTop: offsetTop
		}, 800);	
		menu.slideUp(300);
		$('#wrapper').removeClass('pushed');				
		e.preventDefault();

	});			

});	

$(function(){
	$(window).scroll(function () {
		if ($(this).scrollTop() > 600) {
			$('#back-top').removeClass('downscaled');
		} else {
			$('#back-top').addClass('downscaled');
		}
	});	
	$('#back-top').click(function(){
			$('body,html').animate({ scrollTop: 0 }, 800);
			return false;
	});
});

/*--------------------------------------------------------*/
/* # SLIDER */
/*--------------------------------------------------------*/

$(function(){

	// Effect for image
	var modelEffect = "fadeInRightBig";
	
		$('.model').addClass("animated " + modelEffect);

		$('.slider-next').click(function(){
			$('.model').removeClass("animated " + modelEffect);
			$('.cycle-slide-active').next('.cycle-slide').children('.model').addClass("animated " + modelEffect);
			if($('.cycle-slideshow').children('div:last').hasClass('cycle-slide-active')){
				$('.cycle-slideshow').children('div').eq(1).children('.model').addClass("animated " + modelEffect);
			}
		});
		
		$('.slider-prev').click(function(){
			$('.model').removeClass("animated " + modelEffect);
			$('.cycle-slide-active').prev('.cycle-slide').children('.model').addClass("animated " + modelEffect);
			if($('.cycle-slideshow').children('div').eq(1).hasClass('cycle-slide-active')){
				$('.cycle-slideshow').children('div').eq(3).children('.model').addClass("animated " + modelEffect);
			}		
		});	

	
	// Effect for title
	var titleEffect = "fadeInLeftBig";
	
		$('.slider-title').addClass("animated " + titleEffect);

		$('.slider-next').click(function(){
			$('.slider-title').removeClass("animated " + titleEffect);
			$('.cycle-slide-active').next('.cycle-slide').children('.contents').children('.slider-title').addClass("animated " + titleEffect);
			if($('.cycle-slideshow').children('div:last').hasClass('cycle-slide-active')){
				$('.cycle-slideshow').children('div').eq(1).children('.contents').children('.slider-title').addClass("animated " + titleEffect);
			}		
		});
		
		$('.slider-prev').click(function(){
			$('.slider-title').removeClass("animated " + titleEffect);
			$('.cycle-slide-active').prev('.cycle-slide').children('.contents').children('.slider-title').addClass("animated " + titleEffect);
			if($('.cycle-slideshow').children('div').eq(1).hasClass('cycle-slide-active')){
				$('.cycle-slideshow').children('div').eq(3).children('.contents').children('.slider-title').addClass("animated " + titleEffect);
			}		
		});	
		
});

/*--------------------------------------------------------*/
/* # ANIMATION EFFECTS */
/*--------------------------------------------------------*/
/* Feature Boxes */
$('#includes').waypoint(function() {
  $('.include-box:even').addClass('animated fadeInLeft');
  $('.include-box:odd').addClass('animated fadeInRight');
},{ offset: 300});

/* Tablet Mockup */
$('#samples').waypoint(function() {
  $('.tablet-mockup').addClass('animated fadeInUpBig');
},{ offset: 300});

/* Testimonials */
$('#testimonials').waypoint(function() {
  $('.testimonial:odd').addClass('animated fadeInLeftBig');
  $('.testimonial:even').addClass('animated fadeInRightBig');
},{ offset: 300});

/* Pricing Tables */
$('#offers').waypoint(function() {
  $('.price-table').addClass('animated bounceIn').css('opacity','1');
},{ offset: 300});

/* Contact Bar */
$('#about').waypoint(function() {
  $('.contact-bar').addClass('animated fadeInUp');
},{ offset: 300});

/* Overview */
$('#overview').waypoint(function() {
	$('.app-ov-image-01').addClass('animated fadeInDownBig');
	$('.app-ov-image-02').addClass('animated fadeInDownBig');
	$('.app-ov-image-03').addClass('animated fadeInDownBig');
	$(".chapter-ov-image-01").addClass('animated fadeInDown');
	$(".chapter-ov-image-02").addClass('animated fadeInDown');	
	$(".chapter-ov-image-03").addClass('animated fadeInDown');	
	$(".chapter-ov-image-04").addClass('animated fadeInDown');		
},{ offset: 300});

/*--------------------------------------------------------*/
/* # OVERVIEW */
/*--------------------------------------------------------*/

$(function(){
	var visibleChapters = $(".chapter-ov:eq(0), .chapter-ov:eq(1), .chapter-ov:eq(2), .chapter-ov:eq(3)"),
		hiddenChapters  = $(".chapter-ov:eq(4), .chapter-ov:eq(5), .chapter-ov:eq(6), .chapter-ov:eq(7)");

	hiddenChapters.hide();
	
	$(".btn.loadmore").click(function() {
	  var clicks = $(this).data('clicks');
	  if (clicks) {
		hiddenChapters.slideUp(500);
		$(this).text('load more');		
	  } else {
		hiddenChapters.slideDown(500);
		$(this).text('show less');
	  }
	  $(this).data("clicks", !clicks);
	});	

});

/*--------------------------------------------------------*/
/* # CONTACT FORM */
/*--------------------------------------------------------*/
$(function(){

	var contactForm = $(".contact-form"),
		triggerForm = $(".contact-bar .btn");
	
	contactForm.hide();
	triggerForm.click(function(){
		contactForm.slideDown(300);
		triggerForm.fadeOut(500);
		
	});	

});

$(function() {
  $("#cform").on("submit",function(e){
    
    if($("#cform")[0].checkValidity()) {
      $.post("mailer.php", $("#cform").serialize(),  function(response) {
        $('#success').fadeIn(500).html(response);
        $("#cform").fadeOut(300);
		e.preventDefault();
      });
    } else console.log("invalid form");
	e.preventDefault(); // stop actual submission
  }); 
});

$(function(){
	$('input, textarea').placeholder();
});

/*--------------------------------------------------------*/
/* # COUNTER */
/*--------------------------------------------------------*/
$(".feature h2").countTo();

/*--------------------------------------------------------*/
/* # TABLET SHOWCASE */
/*--------------------------------------------------------*/
	
	// Custom scrollbar
	$(function(){
		$('.showcase.text').slimScroll({
			height: '477px',
			alwaysVisible: true,
			size: '4px',
			railVisible: true,
			wheelStep: 2
		});
	});
	
	// The showcase
	$(function(){
		var showcase = $(".tablet-mockup").children(),
			selector = $(".selector li");
		
		    // Hide all sample and show first
			showcase.hide();
			showcase.first().fadeIn(500);
		
		selector.click(function(){
			var sample = $(this).data("showcase");
			
			// Highlight the active selector
			selector.removeClass("active");
			$(this).addClass("active");
			
			// Show the proper sample
			showcase.hide();
			$(".tablet-mockup").find("[data-showcase='" + sample + "']").parent().fadeIn(500);
		});
	});

/*--- END DOCUMENT ---------------------------------------*/
});




