jQuery(document).ready(function ($) {
    $('.rating-list li').on('click', function() {
        if($(this).siblings().hasClass('active')){
            $(this).siblings().removeClass('active')
            $(this).addClass('active')
        } else {
            $(this).addClass('active')
        }
    })
    $('.success-card').hide()
    $('.submit-btn').on('click', function() {
        if($('.rating-list li').hasClass('active')){
            $('.rating-card').hide()
            var rate = $('.rating-list li.active').text()
            $('.rating-result').text('You selected ' + rate + ' out of 5')
            $('.success-card').show(300)
        } else {
            alert('Please Rate')
        }
    })
});