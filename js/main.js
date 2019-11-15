var mymap = L.map('mapid').setView([61.168367,-149.870814], 11.11);

L.tileLayer('https://api.mapbox.com/styles/v1/hararick/ck2xcgbzo0dzq1csgs11zws3o/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiaGFyYXJpY2siLCJhIjoiY2syeGNlaDMyMG92cDNtbzI4cjJpOXR1eiJ9.bqTXBH9KoSB9NSluFiI3oA', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18
}).addTo(mymap);

let marker1 = L.marker([61.166260, -149.845245]).addTo(mymap);
let marker2 = L.marker([61.146110, -149.863740]).addTo(mymap);
let marker3 = L.marker([61.127350, -149.881440]).addTo(mymap);
let marker4 = L.marker([61.142159, -149.858948]).addTo(mymap);
let marker5 = L.marker([61.098000, -149.849503]).addTo(mymap);


marker1.bindPopup("<b>Granny's Guns</b><br>4.4 stars").openPopup();
marker2.bindPopup("<b>Alaska Custom Firearms</b><br>4.5 stars");
marker3.bindPopup("<b>Cabelas</b><br>4.4 stars");
marker4.bindPopup("<b>Sportsman's Warehouse</b><br>4.4 stars");
marker5.bindPopup("Mountain View Sports Fly Shop: 4.5 stars");
marker5.bindPopup("<b>Mountain View Sports Fly Shop</b><br>4.5 stars");
