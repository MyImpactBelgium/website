$(document).foundation();

$( document ).ready( function() {

  var buttonConfirmVoteMicroB = $('#button-confirm-vote-micro-b');
  var buttonConfirmVoteCoffee = $('#button-confirm-vote-coffee');
  var confirmVote = $('#confirm-vote');


  buttonConfirmVoteMicroB.click(function(event) {
    ga( 'send',
      'event',
      'Vote button',
      'fr-micro-brewery',
      'FR WEBSITE',
      {nonInteraction: true});
      confirmVote.foundation('open');   
  });

  buttonConfirmVoteCoffee.click(function(event) {
    ga( 'send',
      'event',
      'Vote button',
      'fr-coffee',
      'FR WEBSITE',
      {nonInteraction: true}); 
      confirmVote.foundation('open'); 
  });  

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
  var linkSDG1 = $('#link-SDG-1');
  var modalSDG1 = $('#modal-SDG-1');
  var linkSDG2 = $('#link-SDG-2');
  var modalSDG2 = $('#modal-SDG-2');
  var linkSDG3 = $('#link-SDG-3');
  var modalSDG3 = $('#modal-SDG-3');
  var linkSDG4 = $('#link-SDG-4');
  var modalSDG4 = $('#modal-SDG-4');
  var linkSDG5 = $('#link-SDG-5');
  var modalSDG5 = $('#modal-SDG-5');
  var linkSDG6 = $('#link-SDG-6');
  var modalSDG6 = $('#modal-SDG-6');
  var linkSDG7 = $('#link-SDG-7');
  var modalSDG7 = $('#modal-SDG-7');
  var linkSDG8 = $('#link-SDG-8');
  var modalSDG8 = $('#modal-SDG-8');
  var linkSDG9 = $('#link-SDG-9');
  var modalSDG9 = $('#modal-SDG-9');
  var linkSDG10 = $('#link-SDG-10');
  var modalSDG10 = $('#modal-SDG-10');
  var linkSDG11 = $('#link-SDG-11');
  var modalSDG11 = $('#modal-SDG-11');
  var linkSDG12 = $('#link-SDG-12');
  var modalSDG12 = $('#modal-SDG-12');
  var linkSDG13 = $('#link-SDG-13');
  var modalSDG13 = $('#modal-SDG-13');
  var linkSDG14 = $('#link-SDG-14');
  var modalSDG14 = $('#modal-SDG-14');
  var linkSDG15 = $('#link-SDG-15');
  var modalSDG15 = $('#modal-SDG-15');
  var linkSDG16 = $('#link-SDG-16');
  var modalSDG16 = $('#modal-SDG-16');
  var linkSDG17 = $('#link-SDG-17');
  var modalSDG17 = $('#modal-SDG-17');
  
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
  linkSDG1.click(function(event) {
    modalSDG1.foundation('open');
  });
  linkSDG2.click(function(event) {
    modalSDG2.foundation('open');
  });
  linkSDG3.click(function(event) {
    modalSDG3.foundation('open');
  });  
  linkSDG4.click(function(event) {
    modalSDG4.foundation('open');
  });  
  linkSDG5.click(function(event) {
    modalSDG5.foundation('open');
  });  
  linkSDG6.click(function(event) {
    modalSDG6.foundation('open');
  });  
  linkSDG7.click(function(event) {
    modalSDG7.foundation('open');
  });  
  linkSDG8.click(function(event) {
    modalSDG8.foundation('open');
  });  
  linkSDG9.click(function(event) {
    modalSDG9.foundation('open');
  });  
  linkSDG10.click(function(event) {
    modalSDG10.foundation('open');
  });  
  linkSDG11.click(function(event) {
    modalSDG11.foundation('open');
  });  
  linkSDG12.click(function(event) {
    modalSDG12.foundation('open');
  });  
  linkSDG13.click(function(event) {
    modalSDG13.foundation('open');
  });  
  linkSDG14.click(function(event) {
    modalSDG14.foundation('open');
  });  
  linkSDG15.click(function(event) {
    modalSDG15.foundation('open');
  });  
  linkSDG16.click(function(event) {
    modalSDG16.foundation('open');
  });  
  linkSDG17.click(function(event) {
    modalSDG17.foundation('open');
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
        zoom: 14,
        center: myLatlng,
        scrollwheel: false, 
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };

    var map = new google.maps.Map(document.getElementById('map'), mapOptions);
    //Callout Content




    /*  TEMPLATE MARKER BLOCK
    
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

    */

    /*  ROOMER BLOCK */
    
    var roomerLink = _langPath + "heroes/" + "roomer.html"
    var roomerContentString = 'Roomer <br>Beverage producer<br><a href="'+roomerLink+'">Details</a>';
    //Set window width + content
    var roomerInfowindow = new google.maps.InfoWindow({
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
      roomerInfowindow.open(map,roomerMarker);
    });

    /*  SAO BLOCK */
    
    var saoLink = _langPath + "heroes/" + "sao-paulo.html"
    var saoContentString = 'Sao Paulo <br>Tea & coffee seller<br><div class="card"><div class="card-image"><a href="'+saoLink+'"><img src="/img/sao-paulo-card-small.png"><img class="icon" src="/img/play-button.svg"></a></div></div><a href="'+saoLink+'">Details</a>';
    //Set window width + content
    var saoInfowindow = new google.maps.InfoWindow({
      content: saoContentString,
      maxWidth: 200
    });

    //Add Marker
    var SaoMarker = new google.maps.Marker({
      position: SaoLatLng,
      map: map,
      icon: imagePath,
      title: 'image title'
    });

    google.maps.event.addListener(SaoMarker, 'click', function() {
      saoInfowindow.open(map,SaoMarker);
    });

    /*  ALIX BLOCK */

    var alixLink = _langPath + "heroes/" + "alix.html"
    var alixContentString = 'Alix<br>Lunchs & parties<br> <a href="'+alixLink+'">Details</a>';
    //Set window width + content
    var alixInfowindow = new google.maps.InfoWindow({
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
      alixInfowindow.open(map,AlixMarker);
    });
    
    /*  ROGGE BLOCK */

    var roggeLink = _langPath + "heroes/" + "rogge.html"
    var roggeContentString = 'Rogge<br>Cooking accessories<br><a href="'+roggeLink+'">Details</a>';
    //Set window width + content
    var roggeInfowindow = new google.maps.InfoWindow({
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
      roggeInfowindow.open(map,RoggeMarker);
    });
    
    /*  HA BLOCK */

    var haLink = _langPath + "heroes/" + "ha.html"
    var haContentString = 'Brasserie Ha<br>Brasserie Restaurant<br><a href="'+haLink+'">Details</a>';
    //Set window width + content
    var haInfowindow = new google.maps.InfoWindow({
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
      haInfowindow.open(map,HaMarker);
    });
    
    /*  JANS BLOCK */
    
    var jansLink = _langPath + "heroes/" + "janssens.html"
    var jansContentString = 'Janssens<br>Fabrics & Tailoring<br><a href="'+jansLink+'">Details</a>';
    //Set window width + content
    var jansInfowindow = new google.maps.InfoWindow({
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
      jansInfowindow.open(map,JansMarker);
    });
    
    /*  PAIN BLOCK */

    var painLink = _langPath + "heroes/" + "pain-perdu.html"
    var painContentString = 'Pain perdu<br>Breakfast Lunch Restaurant<br><a href="'+painLink+'">Details</a>';
    //Set window width + content
    var painInfowindow = new google.maps.InfoWindow({
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
      painInfowindow.open(map,PainMarker);
    });
    
    /*  HINK BLOCK */

    var hinkLink = _langPath + "heroes/" + "hinkelspel.html"
    var hinkContentString = 'Hinkelspel<br>Cooperative cheesemaker<br><a href="'+hinkLink+'">Details</a>';
    //Set window width + content
    var hinkInfowindow = new google.maps.InfoWindow({
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
      hinkInfowindow.open(map,HinkMarker);
    });
    
    /*  SEVENS BLOCK */

    var sevensLink = _langPath + "heroes/" + "sevens.html"
    var sevensContentString = 'Sevens<br>Leather and shoes<br><a href="'+sevensLink+'">Details</a>';
    //Set window width + content
    var sevensInfowindow = new google.maps.InfoWindow({
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
      sevensInfowindow.open(map,SevensMarker);
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
