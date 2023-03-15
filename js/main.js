$(function () {
	var mixer = mixitup('.portfolio__content');
	$('.slider-blog__inner').slick({
		dots: true,
		prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-left.svg" alt=""></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-right.svg" alt=""></button>'
	});
	$('.menu__btn').on('click', function () {
		$('.menu__list').toggleClass('menu__list--active');
		$('.header__top-inner').toggleClass('header__top-inner--active');
	});
});