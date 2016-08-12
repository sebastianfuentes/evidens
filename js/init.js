$(function(){
  var row = $('.row.cont-infografias center');
  $('.button-collapse').sideNav();
  $('.parallax').parallax();
  var urls = [];
  $.when(
  	$.ajax({
	  	url: '/img/infografias/1.jpg',
	  	type: 'HEAD'
	  })
	  .done(function(e,t,code) {
	  	if (code.status == 200) {
	  		urls.push(this.url)
	  	}
	  }),
  	$.ajax({
	  	url: '/img/infografias/2.jpg',
	  	type: 'HEAD'
	  })
	  .done(function(e,t,code) {
	  	if (code.status == 200) {
	  		urls.push(this.url)
	  	}
	  }),
  	$.ajax({
	  	url: '/img/infografias/3.jpg',
	  	type: 'HEAD'
	  })
	  .done(function(e,t,code) {
	  	if (code.status == 200) {
	  		urls.push(this.url)
	  	}
	  }),
  	$.ajax({
	  	url: '/img/infografias/4.jpg',
	  	type: 'HEAD'
	  })
	  .done(function(e,t,code) {
	  	if (code.status == 200) {
	  		urls.push(this.url)
	  	}
	  }),
  	$.ajax({
	  	url: '/img/infografias/5.jpg',
	  	type: 'HEAD'
	  })
	  .done(function(e,t,code) {
	  	if (code.status == 200) {
	  		urls.push(this.url)
	  	}
	  }),
  	$.ajax({
	  	url: '/img/infografias/6.jpg',
	  	type: 'HEAD'
	  })
	  .done(function(e,t,code) {
	  	if (code.status == 200) {
	  		urls.push(this.url)
	  	}
	  }),
  	$.ajax({
	  	url: '/img/infografias/7.jpg',
	  	type: 'HEAD'
	  })
	  .done(function(e,t,code) {
	  	if (code.status == 200) {
	  		urls.push(this.url)
	  	}
	  }),
  	$.ajax({
	  	url: '/img/infografias/8.jpg',
	  	type: 'HEAD'
	  })
	  .done(function(e,t,code) {
	  	if (code.status == 200) {
	  		urls.push(this.url)
	  	}
	  }),
  	$.ajax({
	  	url: '/img/infografias/9.jpg',
	  	type: 'HEAD'
	  })
	  .done(function(e,t,code) {
	  	if (code.status == 200) {
	  		urls.push(this.url)
	  	}
	  }),
  	$.ajax({
	  	url: '/img/infografias/10.jpg',
	  	type: 'HEAD'
	  })
	  .done(function(e,t,code) {
	  	if (code.status == 200) {
	  		urls.push(this.url)
	  	}
	  }),
  	$.ajax({
	  	url: '/img/infografias/11.jpg',
	  	type: 'HEAD'
	  })
	  .done(function(e,t,code) {
	  	if (code.status == 200) {
	  		urls.push(this.url)
	  	}
	  }),
  	$.ajax({
	  	url: '/img/infografias/12.jpg',
	  	type: 'HEAD'
	  })
	  .done(function(e,t,code) {
	  	if (code.status == 200) {
	  		urls.push(this.url)
	  	}
	  })
  ).always(appendImages);

  function appendImages(){
  	for (var i = urls.length - 1; i >= 0; i--) {
  		row.append("<div class=\"columns small-12 medium-3 image\"><img src=\""+urls[i]+"\" class=\"responsive-img info\"><\/div>").find('img')
  			.unbind('click')
  			.click(function(){
			    $(".pop-up").show();
			    $(".pop-up img").attr("src", this.src);
			  });
  	}
  }
}); // end of document ready