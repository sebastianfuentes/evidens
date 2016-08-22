var map;
var markers = [];
var image = {
  url: "https://s3-us-west-1.amazonaws.com/yalku/img/marker.png",
  scaledSize: new google.maps.Size(24, 32),
  origin: new google.maps.Point(0, 0),
  anchor: new google.maps.Point(16, 32)
};
var imageMarker = {
  url: "https://s3-us-west-1.amazonaws.com/yalku/img/placeholder24.png",
  scaledSize: new google.maps.Size(24, 32),
  origin: new google.maps.Point(0, 0),
  anchor: new google.maps.Point(16, 32)
};
var lat = 19.3890307
var lng = -99.1736613;
var isDraggable = !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
var noPoi = [{
	stylers:[
		{hue: "#006eff"},
		{gamma: 0.53},
		{saturation: -4},
		{lightness: 29},
		{invert_lightness: true}
	]
},
{
  featureType: "poi",
  elementType: "labels",
  stylers: [{
    visibility: "off"
  }]
}];


function initialize() {
  var mapOptions = {
    zoom: 17,
    center: new google.maps.LatLng(lat, lng),
    disableDefaultUI: true,
    scrollwheel: false,
    draggable: isDraggable,
    styles: noPoi
  }
  var map = new google.maps.Map(document.getElementById('map'), mapOptions);
  var location = new google.maps.LatLng(lat, lng);
  var url = document.getElementById("placeUrl");
  if (url != null) {
    url = url.getAttribute("href")
  }
  if (url != undefined) {
    var marker = new google.maps.Marker({
      position: location,
      icon: imageMarker,
      map: map,
      url: url
    });
  } else {
    var marker = new google.maps.Marker({
      position: location,
      icon: imageMarker,
      map: map
    });
  }

  function navigate() {
    if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
      window.open('geo:' + this.position.lat()+ ',' + this.position.lng()+',15z', '_blank')
    } else {
      window.open('https://www.google.com/maps/place//@' + this.position.lat()+ ',' + this.position.lng()+',15z', '_blank')
    }
  }
  google.maps.event.addListener(marker, 'click', navigate);
}
google.maps.event.addDomListener(window, 'load', initialize);