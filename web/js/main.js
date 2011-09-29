$(function(){
  $container = $('#we_left');
  $container.imagesLoaded( function(){
    $container.masonry({
      itemSelector: '.box',
      columnWidth : 240, 
      isAnimated: true,
      animationOptions: {
        duration: 750,
        easing: 'linear',
        queue: false
      }
    });
  });

  $('.box').bind('click',function(event){
    var $anchor = $(this);
    var $panel = $('#we_right');
    $('#we_right').effect('Fade',{},1000,function(){
      //change contents
      $('#we_ri_quote').html($anchor.children('.box_abstract').html()).hide().fadeIn();
      $('html, body').animate({scrollTop: $panel.offset().top - $('#we_top').height()}, 300);
    });
  });
  $('.box').hover(
    function(){
      $(this).removeClass("box_unhover");
      $(this).addClass("box_hover");      
    },
    function(){
      $(this).removeClass("box_hover");
      $(this).addClass("box_unhover");      
    }
  );
  $("ul#we_sidebar").sidebar();
});
