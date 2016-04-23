/**
 * This was built using the scrollie jQuery Plugin
 * https://github.com/Funsella/jquery-scrollie
 */


$( window ).ready(function() {

    var wHeight = $(window).height();

    $('.slide')
      .scrollie({
        scrollOffset : -50,
        scrollingInView : function(elem) {
          console.log(elem);
          var bgColor = elem.data('background');
          
          $('body').css('background-color', bgColor);
          
        }
      });

  //----------------------------
  // Abrir pop-up
  //----------------------------

  $("#show-pop-up").click(function(event){
    event.preventDefault();
    $(".pop-up").show();
  });


  //----------------------------
  // Abrir infografias
  //----------------------------
  $(".cont-infografias img").click(function(){
    $(".pop-up").show();
    $(".pop-up img").attr("src", this.src);
  });

  //----------------------------
  // Cerrar pop-up al tocar afuera
  //----------------------------

  $(".pop-up").click(function(event){
    if($(".pop-up").is(event.target) && $(".pop-up").has(event.target).length ===0)
    {
      $(".pop-up").hide();
    }
  });
  //----------------------------
  // Abrir pop-up
  //----------------------------

  $("#show-pop-up").click(function(event){
    event.preventDefault();
    $(".pop-up").show();
  });


  //----------------------------
  // Abrir infografias
  //----------------------------
  $(".cont-infografias img").click(function(){
    $(".pop-up").show();
    $(".pop-up img").attr("src", this.src);
  });

  //----------------------------
  // Cerrar pop-up al tocar afuera
  //----------------------------

  $(".pop-up").click(function(event){
    if($(".pop-up").is(event.target) && $(".pop-up").has(event.target).length ===0)
    {
      $(".pop-up").hide();
    }
  });

  $('.modal-trigger').leanModal();

  });


//-----inicio lightbox
$(document).ready(function(){
  $("a#show-panel").click(function(){
    $("#lightbox, #lightbox-panel").fadeIn(300);
  });
    $("a#close-panel").click(function(){
    $("#lightbox, #lightbox-panel").fadeOut(300);
  })
  // $('.guy').hover(
  //   console.log($(this).attr('class'));
  // );
});
//-----fin lightbox



