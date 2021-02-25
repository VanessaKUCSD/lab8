function initMap() {
  L.mapquest.key = 'eQ8pPVeexTAcAr4PYXKDO2evMFuMjaPm';
  
  // 'map' refers to a <div> element with the ID map
  var map = L.mapquest.map('map', {
    center: [32.8786688,-117.2386991],
    layers: L.mapquest.tileLayer('map'),
    zoom: 12,
    zoomControl: false
  });

  // Add a marker to the map
  L.marker([32.8786688,-117.2386991]).addTo(map);
}