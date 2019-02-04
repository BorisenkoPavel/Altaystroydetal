$(function() {

	$('.info-block__button').on('click', function(){
		$(this).siblings('.info-block__text').slideToggle(300);
		if ( $(this).hasClass('active') ) {
			$(this).removeClass('active')
		} else {
			$(this).addClass('active')
		}
	})

	$('.menu').on('click', function(){
		if ( $(this).hasClass('active') ) {
			$(this).removeClass('active') 
			$(this).children('.header-buttons__icon').html('<i class="far fa-bars"></i>')
		} else {
			$(this).addClass('active') 
			$(this).children('.header-buttons__icon').html('<i class="fal fa-times"></i>')
		}
		$('header').children('.menu-list').slideToggle(300);
		
	})
	
	$('.search').on('click', function(){
		if ( $(this).hasClass('active') ) {
			$(this).removeClass('active') 
		} else {
			$(this).addClass('active') 
		}
		$('.search-block').slideToggle(300);
	})

	$('#write-feedback').on('click', function(){
		$('.feedback-form').show()
		
	})

	$('.feedback-form__modal-button').on('click', function(){
		$('.feedback-form').hide()
		
	})

	$('.pice-calculate__button').on('click', function() {
		$('.item-order').show()
	})

	$('.button-callback').on('click', function() {
		$('.contacts-callback').show()
	})

});
