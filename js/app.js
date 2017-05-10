$(document).foundation();

$( document ).ready( function() {

  var linkQuickfact1 = $('#link-quickfact-1');
  var modalQuickfact1 = $('#modal-quickfact-1');
  var linkQuickfact2 = $('#link-quickfact-2');
  var modalQuickfact2 = $('#modal-quickfact-2');
  var linkQuickfact3 = $('#link-quickfact-3');
  var modalQuickfact3 = $('#modal-quickfact-3');
  var linkQuickfact4 = $('#link-quickfact-4');
  var modalQuickfact4 = $('#modal-quickfact-4');
  var linkQuickfact5 = $('#link-quickfact-5');
  var modalQuickfact5 = $('#modal-quickfact-5');
  linkQuickfact1.click(function(event) {
    modalQuickfact1.foundation('open');
  });
  linkQuickfact2.click(function(event) {
    modalQuickfact2.foundation('open');
  });
  linkQuickfact3.click(function(event) {
    modalQuickfact3.foundation('open');
  });
  linkQuickfact4.click(function(event) {
    modalQuickfact4.foundation('open');
  });
  linkQuickfact5.click(function(event) {
    modalQuickfact5.foundation('open');
  });


  //Google Maps JS
  //Set Map
  function initialize() {
      var myLatlng = new google.maps.LatLng(51.0516843,3.7132496);

      var roomerLatLng = new google.maps.LatLng(51.0516843,3.7132496);


      var imagePath = 'http://m.schuepfen.ch/icons/helveticons/black/60/Pin-location.png'
      var mapOptions = {
        zoom: 12,
        center: myLatlng,
        scrollwheel: false, 
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };

    var map = new google.maps.Map(document.getElementById('map'), mapOptions);
    //Callout Content




    /*  MARKER BLOCK*/

    var contentString = 'Some <a href="http://www.youtube.com"> address </a> here..';
    //Set window width + content
    var infowindow = new google.maps.InfoWindow({
      content: contentString,
      maxWidth: 500
    });

    //Add Marker
    var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      icon: imagePath,
      title: 'image title'
    });

    google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(map,marker);
    });





    //Resize Function
    google.maps.event.addDomListener(window, "resize", function() {
      var center = map.getCenter();
      google.maps.event.trigger(map, "resize");
      map.setCenter(center);
    });
  }

  google.maps.event.addDomListener(window, 'load', initialize);

});
