//code for creating the map
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    //zoom on the map
    zoom: 10,
    //location of the map
    center: {lat: 13.9094, lng: -60.9789},
    //style of the map
    styles: [
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#444444"
            }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f2f2f2"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#46bcec"
            },
            {
                "visibility": "on"
            }
        ]
    }
]
  });
  
  
//code for the markers/info windows  
  for(var i = 0; i < data.length; i++) {
    
    // Current object
    var obj = data[i];

    // Adding a new marker for the object
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(obj.lat,obj.lng),
      map: map,
      icon: obj.icon,
      title: obj.description
    });
    
    var infowindow = new google.maps.InfoWindow({
    content: obj.description,
  });
    
    // Adding a new info window for the object
    var clicker = addClicker(marker, obj.name);
 
  // Adding a new click event listener for the object
  function addClicker(marker, content) {
    google.maps.event.addListener(marker, 'click', function() {
      
      if (infowindow) {infowindow.close();}
      infowindow = new google.maps.InfoWindow({content: obj.description});
      infowindow.open(map, marker);
    
    });
  }
}

//what the info window should have in it = ('<h2>'+obj.title+'</h2><h4><i>'+obj.type+'</i></h4><p>'+obj.description+'</p>')

}


// gallery js

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}