$(document).foundation();

$( document ).ready( function() {

  var heroBtnQuickfact = $('#hero-btn-quickfact');
  var modalQuickfact1 = $('#modal-quickfact-1');



  heroBtnQuickfact.click(function(event) {
    modalQuickfact1.foundation('open');
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