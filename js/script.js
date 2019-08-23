$(window).on("load", function() {
	$(".loader .inner").fadeOut(300, function() {
		$(".loader").fadeOut(400);
	});
	$(".items").isotope({
	filter: '*',
	animationOptions: {
		duration: 1500,
		easing: 'linear',
		queue: false
		}
	});
});


$(document).ready(function(){

	$('#slides').superslides({
		animation: 'fade',
		play: 5000
	});

	var typed = new Typed(".typed", {
		strings: ["Student.", "Mathematician.","Advertisement Manager.", "Web Designer.", "Freelance Photographer."],
		typeSpeed: 70,
		loop: true,
		startDelay: 1000,
		showCursor: false

	});

});

//
$('.owl-carousel').owlCarousel({
    loop:true,
    items: 4,
    responsive:{
        0:{
            items:1
        },
        480:{
            items:2
        },
        768:{
            items:4
        }
    }
});

$(function() {

    //gets the position horizontally and vertically of the element
    var skillsTopOffset = $(".skillsSection").offset().top;
    var statsTopOffset = $(".statsSection").offset().top;
    var countupFinished = false;
    
	    $(window).scroll(function() {
	    	if (window.pageYOffset > skillsTopOffset - $(window).height() + 200) {

	    		    $('.chart').easyPieChart({
				        easing: 'easeInOut',
				        barColor: '#fff',
				        scaleColor: false,
				        trackColor: false,
				        lineWidth: 4,
				        size: 152,
				        onStep: function(from, to, percent) {
				        	$(this.el).find('.percent').text(Math.round(percent));
				        }
				    });
	    	}

	    	if (!countupFinished && window.pageYOffset > statsTopOffset - $(window).height() + 200) {
	    		$(".counter").each(function() {
	    			easing: 'easeInOut';
					var element = $(this);
					var endVal = parseInt(element.text());
					console.log(endVal);

					
					element.countup(endVal);

					countupFinished = true;
					
					
				})

	    	}
    });
    
	$("[data-fancybox]").fancybox();




	$("#filters a").click(function() {

		$("#filters .current").removeClass("current");
		$(this).addClass("current");

		var selector = $(this).attr("data-filter");

		$(".items").isotope({
			filter: selector,
			animationOptions: {
				duration: 1500,
				easing: 'linear',
				queue: false
			}
		});

		return false;

	});

	$("#navigation li a").click(function(e) {
		e.preventDefault();

		var targetElement = $(this).attr("href");
		var targetPosition = $(targetElement).offset().top;
		var top = $("#slides").offset().top;
		if (targetElement == "#slides") {
			$("html, body").animate({scrollTop: top}, "slow");
		} else {
			$("html, body").animate({scrollTop: targetPosition - 50}, "slow");
		}

	});

	const nav = $("#navigation");
	const navTop = nav.offset().top;

	$(window).on("scroll", stickyNavigation);

	function stickyNavigation() {

		var body = $("body");

		if ($(window).scrollTop() >= navTop) {
			body.css("padding-top", nav.outerHeight() + "px");
			body.addClass("fixedNav");

		} else {
			body.css("padding-top", 0);
			body.removeClass("fixedNav");

		}

	}

 });