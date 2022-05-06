require([
	'jquery',
	'slick'
], function($){
	$(document).ready(function () {
		$('#carousel').slick()({
		  	slidesToShow: 3,
		 	slidesToScroll: 1,
		  	asNavFor: '.slider-for',
		  	centerMode: true,
		  	focusOnSelect: true
		});
	})
})