var d= new Date();
d=d.toString()
var day=d.substr(0,3);
var da=d.substr(4,7);
var t=d.substr(15,6);
function GoogleMap(position) {
    var location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
  }
document.getElementById("noti").innerText=day+ " || "+ da + " ||" +t;
function initMap() {
    // The location of Uluru
    const uluru = { lat: -25.344, lng: 131.036 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 8,
      center: uluru,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });
      // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}
