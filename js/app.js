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
  
  //Logic to point to correct lang
  
  var _langPath = window.location.pathname.substr(0,7);
  
  //Set Map
  function initialize() {
      var myLatlng = new google.maps.LatLng(51.0516843,3.7132496);
      var RoomerLatLng = new google.maps.LatLng(51.0423538,3.7364158);
      var SaoLatLng = new google.maps.LatLng(51.0510729,3.7237078);
      var AlixLatLng = new google.maps.LatLng(51.0396106,3.7143295);
      var RoggeLatLng = new google.maps.LatLng(51.0522247,3.7205942);
      var HaLatLng = new google.maps.LatLng(51.0498455,3.7203618);
      var JansLatLng = new google.maps.LatLng(51.0554145,3.7180731);
      var PainLatLng = new google.maps.LatLng(51.0490668,3.7248812);
      var HinkLatLng = new google.maps.LatLng(51.0501473,3.7356745);
      var SevensLatLng = new google.maps.LatLng(51.0520202,3.7242284);
    
      var imagePath = 'http://m.schuepfen.ch/icons/helveticons/black/60/Pin-location.png'
      var mapOptions = {
        zoom: 12,
        center: myLatlng,
        scrollwheel: false, 
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };

    var map = new google.maps.Map(document.getElementById('map'), mapOptions);
    //Callout Content




    /*  TEMPLATE MARKER BLOCK */
    var roomerLink = _langPath + "heroes/" + "test.html"
    var contentString = 'Some <a href="test"> address </a> here..';
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

    /*  ROOMER BLOCK */
    
    var roomerLink = _langPath + "heroes/" + "roomer.html"
    var roomerContentString = 'Roomer <br>Beverage producer<br><a href=roomerLink>Details</a>';
    //Set window width + content
    var infowindow = new google.maps.InfoWindow({
      content: roomerContentString,
      maxWidth: 500
    });

    //Add Marker
    var roomerMarker = new google.maps.Marker({
      position: RoomerLatLng,
      map: map,
      icon: imagePath,
      title: 'image title'
    });

    google.maps.event.addListener(roomerMarker, 'click', function() {
      infowindow.open(map,roomerMarker);
    });

    /*  SAO BLOCK */
    
    var saoLink = _langPath + "heroes/" + "sao-paolo.html"
    var saoContentString = 'Sao Paulo <br>Tea & coffee seller<br><a href=saoLink class="button">Details</a>';
    //Set window width + content
    var infowindow = new google.maps.InfoWindow({
      content: saoContentString,
      maxWidth: 500
    });

    //Add Marker
    var SaoMarker = new google.maps.Marker({
      position: SaoLatLng,
      map: map,
      icon: imagePath,
      title: 'image title'
    });

    google.maps.event.addListener(SaoMarker, 'click', function() {
      infowindow.open(map,SaoMarker);
    });

    /*  ALIX BLOCK */

    var alixContentString = 'Some <a href="http://www.youtube.com"> address </a> here..';
    //Set window width + content
    var infowindow = new google.maps.InfoWindow({
      content: alixContentString,
      maxWidth: 500
    });

    //Add Marker
    var AlixMarker = new google.maps.Marker({
      position: AlixLatLng,
      map: map,
      icon: imagePath,
      title: 'image title'
    });

    google.maps.event.addListener(AlixMarker, 'click', function() {
      infowindow.open(map,AlixMarker);
    });
    
    /*  ROGGE BLOCK */

    var roggeContentString = 'Some <a href="http://www.youtube.com"> address </a> here..';
    //Set window width + content
    var infowindow = new google.maps.InfoWindow({
      content: roggeContentString,
      maxWidth: 500
    });

    //Add Marker
    var RoggeMarker = new google.maps.Marker({
      position: RoggeLatLng,
      map: map,
      icon: imagePath,
      title: 'image title'
    });

    google.maps.event.addListener(RoggeMarker, 'click', function() {
      infowindow.open(map,RoggeMarker);
    });
    
    /*  HA BLOCK */

    var haContentString = 'Some <a href="http://www.youtube.com"> address </a> here..';
    //Set window width + content
    var infowindow = new google.maps.InfoWindow({
      content: haContentString,
      maxWidth: 500
    });

    //Add Marker
    var HaMarker = new google.maps.Marker({
      position: HaLatLng,
      map: map,
      icon: imagePath,
      title: 'image title'
    });

    google.maps.event.addListener(HaMarker, 'click', function() {
      infowindow.open(map,HaMarker);
    });
    
    /*  JANS BLOCK */

    var jansContentString = 'Some <a href="http://www.youtube.com"> address </a> here..';
    //Set window width + content
    var infowindow = new google.maps.InfoWindow({
      content: jansContentString,
      maxWidth: 500
    });

    //Add Marker
    var JansMarker = new google.maps.Marker({
      position: JansLatLng,
      map: map,
      icon: imagePath,
      title: 'image title'
    });

    google.maps.event.addListener(JansMarker, 'click', function() {
      infowindow.open(map,JansMarker);
    });
    
    /*  PAIN BLOCK */

    var painContentString = 'Some <a href="http://www.youtube.com"> address </a> here..';
    //Set window width + content
    var infowindow = new google.maps.InfoWindow({
      content: painContentString,
      maxWidth: 500
    });

    //Add Marker
    var PainMarker = new google.maps.Marker({
      position: PainLatLng,
      map: map,
      icon: imagePath,
      title: 'image title'
    });

    google.maps.event.addListener(PainMarker, 'click', function() {
      infowindow.open(map,PainMarker);
    });
    
    /*  HINK BLOCK */

    var hinkContentString = 'Some <a href="http://www.youtube.com"> address </a> here..';
    //Set window width + content
    var infowindow = new google.maps.InfoWindow({
      content: hinkContentString,
      maxWidth: 500
    });

    //Add Marker
    var HinkMarker = new google.maps.Marker({
      position: HinkLatLng,
      map: map,
      icon: imagePath,
      title: 'image title'
    });

    google.maps.event.addListener(HinkMarker, 'click', function() {
      infowindow.open(map,HinkMarker);
    });
    
    /*  SEVENS BLOCK */

    var sevensContentString = 'Some <a href="http://www.youtube.com"> address </a> here..';
    //Set window width + content
    var infowindow = new google.maps.InfoWindow({
      content: sevensContentString,
      maxWidth: 500
    });

    //Add Marker
    var SevensMarker = new google.maps.Marker({
      position: SevensLatLng,
      map: map,
      icon: imagePath,
      title: 'image title'
    });
    
    google.maps.event.addListener(SevensMarker, 'click', function() {
      infowindow.open(map,SevensMarker);
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
