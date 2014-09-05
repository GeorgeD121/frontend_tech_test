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
});


