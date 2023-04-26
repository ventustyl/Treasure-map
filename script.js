var mapContainer = document.getElementById('map-container');
var map = document.getElementById('map');
var mouseX = 0;
var mouseY = 0;

  

mapContainer.addEventListener('mousemove', function(event) {
  mouseX = event.clientX;
  mouseY = event.clientY;

});

function updateMapPosition() {
  var mapWidth = map.offsetWidth;
  var mapHeight = map.offsetHeight;
  var containerWidth = 3400;
  var containerHeight = 1400;
  var maxX = mapWidth + containerWidth;
  var maxY = mapHeight + containerHeight;
  var mapX = -mouseX / containerWidth * maxX;
  var mapY = -mouseY / containerHeight * maxY;
  map.style.transform = 'translate(' + mapX + 'px, ' + mapY + 'px)';
  requestAnimationFrame(updateMapPosition);

}


updateMapPosition();


