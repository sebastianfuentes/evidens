$(function(){
  var row = $('.row.cont-infografias center');
  $('.button-collapse').sideNav();
  $('.parallax').parallax();
  for (var i = 1; i < 13; i++) {
	  $.ajax({
	  	url: '/img/infografias/'+i+'.jpg',
	  	type: 'HEAD'
	  })
	  .done(function(e,t,code) {
	  	if (code.status == 200) {
	  		row.append("<div class=\"columns small-12 medium-3 image\"><img src=\""+this.url+"\" class=\"responsive-img info\"><\/div>").find('img')
	  			.unbind('click')
	  			.click(function(){
				    $(".pop-up").show();
				    $(".pop-up img").attr("src", this.src);
				  });
	  	}
	  });
  }
  
}); // end of document ready