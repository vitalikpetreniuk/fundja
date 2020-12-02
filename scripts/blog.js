

'use strict';
const blogSliderOptions = {
	autoplay: true,
	variableWidth: true,
	autoplaySpeed: 2000,
	dots: true,
	centerMode: true,
	infinite: true,
	responsive: [

		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
			}
		},
	],
};

$(function () {
	if($(window).width() < 1024) {
		$('.blogs_list').slick({...blogSliderOptions});
	}


	const scrollToTop  = () => {
		window.scrollTo({top: 0})
	}
	$('.up_btn').on('click', scrollToTop);

	const mainNav = $( "#mainNav" );
	const mainNavMobile = $( "#mainNavMobile" );

	$( "#menuOpen" ).on( "click", function(e) {
		e.preventDefault();
		$( ".header" ).addClass( 'menu_show' );
		mainNav.addClass( 'nav_active_l' );
		mainNav.removeClass( 'nav_active_r' );
	});
	$( "#menuClose" ).on( "click", function(e) {
		e.preventDefault();
		$( ".header" ).removeClass( 'menu_show' );
		mainNav.removeClass( 'nav_active_l' );
		mainNav.addClass( 'nav_active_r' );
	});

	$( ".nav_item" ).on( "click", function() {
		$(this).addClass( 'active' );
		$(this).siblings().removeClass('active');
	});

	$( "#menuOpenMobile" ).on( "click", function(e) {
		e.preventDefault();
		$( ".header_mobile" ).addClass( 'menu_show' );
		mainNavMobile.addClass( 'nav_active_l' );
		mainNavMobile.removeClass( 'nav_active_r' );
	});
	$( "#menuCloseMobile" ).on( "click", function(e) {
		e.preventDefault();
		$( ".header_mobile" ).removeClass( 'menu_show' );
		mainNavMobile.removeClass( 'nav_active_l' );
		mainNavMobile.addClass( 'nav_active_r' );
	});
	const header = $('.header');
	$(window).scrollTop() > 0 && header.removeClass('header--top');

	//pagination
	$('.pagination_item' ).on( "click", function() {
		$(this).addClass( 'active' );
		$(this).siblings().removeClass('active');
	});
});


$( window ).resize(function() {
	AOS.refresh();

	if($(window).width() < 1024) {
		$('.blogs_list').slick(blogSliderOptions);
	} else {
		$('.blogs_list').slick('unslick');
	}
});
$( window ).scroll(function() {

	const header = $('.header');
	const headerMobile = $('.header_mobile');

	if($(window).scrollTop() === 0) {
		header.addClass('header--top');
		headerMobile.addClass('header--top');
	} else {
		header.removeClass('header--top');
		headerMobile.removeClass('header--top');
	}
	// if($(window).scrollTop() < 800) {
	// 	header.remove('header--dark');
	// } else if($(window).scrollTop() > 800) {
	// 	header.addClass('header--dark');
	// } else if($(window).scrollTop() > 1600) {
	// 	header.remove('header--dark');
	// }
});
