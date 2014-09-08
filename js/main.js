$(document).ready(function() {

  $("#hero").owlCarousel({
    autoPlay : 3000,
    stopOnHover : true,
    navigation:true,
    paginationSpeed : 1000,
    goToFirstSpeed : 2000,
    singleItem : true,
    autoHeight : true,
    transitionStyle:"fade"
  });

 $(window).scroll(function () {
    if ($(document).scrollTop() > 20) {
        $("nav").addClass("scrolled");
    } else {
        $("nav").removeClass("scrolled");
    }
  });

  $('.content_grid').pajinate({
      items_per_page: 6
  });

  jQuery(document).ready(function(){
    var homeTopPosition = jQuery('#hero').offset().top;
    var aboutTopPosition = jQuery('.owl-pagination').offset().top;
    var contentTopPosition = jQuery('.content_grid').offset().top;
    jQuery('#home_nav').click(function(){
        jQuery('html, body').animate({scrollTop:homeTopPosition}, 'slow');
        return false;
    });
    jQuery('#about_nav').click(function(){
        jQuery('html, body').animate({scrollTop:aboutTopPosition}, 'slow');
        return false;
    });
    jQuery('#contact_nav').click(function(){
        jQuery('html, body').animate({scrollTop:contentTopPosition}, 'slow');
        return false;
    });
  });
});


