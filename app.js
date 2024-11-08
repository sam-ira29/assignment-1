$(document).ready(function(){
    //HERO SLIDER
    $('#hero-slider').owlCarousel({
      loop:true,
      margin:0,
      nav:true,
      items:1,
      dots:true,
      smartspeed:1000,
      navText:  ['PREV', 'NEXT'],
      responsive:{
          0:{
              nav: false,
          },
          768:{

              nav:true,
          }
      }
  })
});