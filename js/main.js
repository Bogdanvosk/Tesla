$(document).ready(function () {
	// ! Slider
	$('.slider').slick({
		infinite: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 2000,
		dots: true,
		fade: true
	})


	// ! Menu Navigation
	const menuBtn = document.querySelector('.header-btn'),
			menuBlock = document.querySelector('.menu'),
			sliderDots = document.querySelector('.slick-dots'),
			closeBtn = document.querySelector('.close-btn');

	menuBtn.addEventListener('click', () => {
		menuBlock.classList.add('active');
		sliderDots.classList.add('hidden');
	})

	closeBtn.addEventListener('click', () => {
		menuBlock.classList.remove('active');
		sliderDots.classList.remove('hidden');
	})
	
});