'use strict';
function slick_slider() {
	if ($('.blogs_list').length) {
		if ($(window).width() < 1024) {
			$('.blogs_list').slick({...blogSliderOptions});
		}
	}

	const wrapper = $(".chef-headshots");
	if ($(".blogs_list").length) {
		wrapper.slick('unslick');
	}
	wrapper.slick(blogSliderOptions);
}

const blogSliderOptions = {
	autoplay: true,
	mobileFirst: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: true,
	variableWidth: true,
	autoplaySpeed: 2000,
	dots: true,
	centerMode: true,
	infinite: true,
	responsive: [
		{
			breakpoint: 460,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 1025,
			settings: "unslick"
		},
	],
};

$(function () {
	slick_slider();
	if ($('.mobile_review').length) {
		$('.mobile_review').slick({
			// autoplay: true,
			autoplaySpeed: 2000,
			centerMode: true,
			centerPadding: 0,
			variableWidth: true,
			infinite: true,
		});
	}

	const scrollToTop = () => {
		window.scrollTo({top: 0})
	}
	$('.up_btn').length && $('.up_btn').on('click', scrollToTop);

	if ($('#card1').length) {
		$("#card1").flip({
			axis: 'y',
			trigger: 'hover',
			reverse: true
		});
		$("#card2").flip({
			axis: 'y',
			trigger: 'hover'
		});
		$("#card3").flip({
			axis: 'y',
			trigger: 'hover'
		});
	}

	$(window).on('load', function(){
    setTimeout(function(){
      [].forEach.call(document.querySelectorAll('img[data-src]'),    function(img) {
        img.setAttribute('src', img.getAttribute('data-src'));
        img.onload = function() {
          img.removeAttribute('data-src');
        };
      });
    }, 2000);
  });

	const mainNav = $("#mainNav");
	const mainNavMobile = $("#mainNavMobile");

	$("#menuOpen").on("mouseover", function (e) {
		e.preventDefault();
		$(".header").addClass('menu_show');
		mainNav.addClass('nav_active_l');
		mainNav.removeClass('nav_active_r');
	});
	mainNav.on("mouseleave", function (e) {
		e.preventDefault();
		$(".header").removeClass('menu_show');
		mainNav.removeClass('nav_active_l');
		mainNav.addClass('nav_active_r');
	});

	$(".nav_item").on("click", function () {
		$(this).addClass('active');
		$(this).siblings().removeClass('active');
	});

	$("#menuOpenMobile").on("click", function (e) {
		e.preventDefault();
		$(".header_mobile").addClass('menu_show');
		mainNavMobile.addClass('nav_active_l');
		mainNavMobile.removeClass('nav_active_r');
	});
	$("#menuCloseMobile").on("click", function (e) {
		e.preventDefault();
		$(".header_mobile").removeClass('menu_show');
		mainNavMobile.removeClass('nav_active_l');
		mainNavMobile.addClass('nav_active_r');
	});
	const header = $('.header');
	$(window).scrollTop() > 0 && header.removeClass('header--top');

	//pagination
	if ($('.pagination_item').length) {
		$('.pagination_item').on("click", function () {
			$(this).addClass('active');
			$(this).siblings().removeClass('active');
		});
	}

	$(".more_btn").on('click', (e) => {
		e.target.closest('.collapsed_text').classList.add('show')
	});

	if ($('#accordion').length) {
		$(".accordion_body").hide().prev().click(function() {
			$(this).parents("#accordion").find(".accordion_body").not(this).slideUp().prev().removeClass("active");
			$(this).next().not(":visible").slideDown().prev().addClass("active");
		});
	}
});

$(window).resize(slick_slider)
$(window).resize(function () {
	AOS.refresh();
});
$(window).scroll(function () {

	const header = $('.header');
	const headerMobile = $('.header_mobile');

	if ($(window).scrollTop() === 0) {
		header.addClass('header--top');
		headerMobile.addClass('header--top');
	} else {
		header.removeClass('header--top');
		headerMobile.removeClass('header--top');
	}
});
