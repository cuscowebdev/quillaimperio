$(document).ready(function() {
    $('body').addClass('js');
    var $menu = $('#menu'),
        $menuLink = $('.menu-link'),
        $menuTrigger = $('.has-subnav > a')
    
    $menuLink.click(function(e){
        e.preventDefault();
        $menuLink.toggleClass('act')
        $menu.toggleClass('act')
    })
    
    $menuTrigger.click(function(e) {
        e.preventDefault()
        var $this = $(this)
        $this.toggleClass('act').next('ul').toggleClass('act')
    })
    
    $('#descripcion-paq').children('li').first().children('a').addClass('active')
        .next().addClass('is-open').show();

    $('#descripcion-paq').on('click', 'li > a', function (e) {
        e.preventDefault();

        if (!$(this).hasClass('active')) {

            $('#descripcion-paq .is-open').removeClass('is-open').hide();
            $(this).next().toggleClass('is-open').toggle();

            $('#descripcion-paq').find('.active').removeClass('active');
            $(this).addClass('active');
        } else {
            $('#descripcion-paq .is-open').removeClass('is-open').hide();
            $(this).removeClass('active');
        }
    });
    
})