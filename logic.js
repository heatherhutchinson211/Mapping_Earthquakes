// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([40.7, -94.5], 4);


// Get data from cities.js
let cityData = cities;

L.circle([34.0522, -118.2437], {
    radius: city.population/100000
 }).addTo(map);

// Loop through the cities array and create one marker for each city.
// Loop through the cities array and create one marker for each city.
cityData.forEach(function(city) {
    console.log(city)
    L.marker(city.location)
    .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population + "</h3>")
  .addTo(map);
});

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        accessToken: API_KEY
    });
    
    // Then we add our 'graymap' tile layer to the map.
    streets.addTo(map);
    
// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
    color: "red"
  }).addTo(map);

  // Coordinates for each point to be used in the polyline.
let line = [
    [33.9416, -118.4085],
    [37.6214, -122.3790],
    [40.7899, -111.9791],
    [47.4502, -122.3088]
  ];
  

  // Create a polyline using the line coordinates and make the line yellow.
L.polyline(line, {
    color: "yellow"
 }).addTo(map);

 // Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([37.6214, -122.3790], 5);

// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([37.5, -122.5], 10);

// Grabbing our GeoJSON data.
L.geoJSON(sanFranAirport, {
    // We turn each feature into a marker on the map.
    pointToLayer: function(feature, latlng) {
      console.log(feature);
      return L.marker(latlng);
    }

  }).addTo(map);


  .bindPopup("<h2>" + feature.properties.city + "</h2>")