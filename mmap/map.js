/*
 * Ayal Pierce
 * Assignment 2
 */

function loadMap(){
	mapOptions={
		center: new google.maps.LatLng(42.31129,- 71.053331),
		zoom:7
	};
	map = new google.maps.Map(document.getElementById("map_canvas"), 
														mapOptions);
	getMyLocation();
}


function getMyLocation(){
	if(navigator.geolocation){
		    navigator.geolocation.getCurrentPosition(function(position) {
            myLat = position.coords.latitude;
            myLong = position.coords.longitude;
            myPos = new google.maps.LatLng(myLat, myLong);
            myMarker = new google.maps.Marker({position: myPos, map: map, title: "My Location"});
            myMarker.setMap(map);
			});
	}
}
