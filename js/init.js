$(function(){
  var row = $('.row.cont-infografias center');
  $('.button-collapse').sideNav();
  $('.parallax').parallax();
  var urls = [];
  for (var i = 13 - 1; i >= 0; i--) {
		$.ajax({
	  	url: '/img/infografias/'+(i+1)+'.jpg',
	  	type: 'HEAD'
	  })
	  .done(function(e,t,code) {
	  	if (code.status == 200) {
	  		urls.push(this.url)
	  		row.append("<div class=\"columns small-12 medium-3 image\"><img src=\""+this.url+"\" class=\"responsive-img info\"><\/div>").find('img')
  			.unbind('click')
  			.click(function(){
			    $(".pop-up").show();
			    $(".pop-up img").attr("src", this.src);
			  });
	  	}
	  });
  }
  // function appendImages(){
  // 	for (var i = urls.length - 1; i >= 0; i--) {
  // 		row.append("<div class=\"columns small-12 medium-3 image\"><img src=\""+urls[i]+"\" class=\"responsive-img info\"><\/div>").find('img')
  // 			.unbind('click')
  // 			.click(function(){
		// 	    $(".pop-up").show();
		// 	    $(".pop-up img").attr("src", this.src);
		// 	  });
  // 	}
  // }
}); // end of document ready