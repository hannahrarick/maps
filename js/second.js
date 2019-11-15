var mymap = L.map('map2id').setView([37.804255,-99.234852], 4.02);

L.tileLayer('https://api.mapbox.com/styles/v1/hararick/ck2xcgbzo0dzq1csgs11zws3o/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiaGFyYXJpY2siLCJhIjoiY2syeGNlaDMyMG92cDNtbzI4cjJpOXR1eiJ9.bqTXBH9KoSB9NSluFiI3oA', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18
}).addTo(mymap);


for ( let i = 0; i < places.length; i++ ) {
  L.marker( [ places[i].latitude, places[i].longitude ] )
  .bindPopup('<h3>' + places[i].placeName + '</h3>' + '<p>' + places[i].descrip + '</p>')
  .addTo(mymap);
}
