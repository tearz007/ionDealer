import { Component, OnInit } from '@angular/core';
declare var L

@Component({
  selector: 'app-map2',
  templateUrl: './map2.page.html',
  styleUrls: ['./map2.page.scss'],
})
export class Map2Page implements OnInit {
  mymap
  constructor() { }

  ngOnInit() {

    this.lmap()
    this.resizes()
    var popup = L.popup()
    .setLatLng([51.5, -0.09])
    .setContent("I am a standalone popup.")
    .openOn(this.mymap);
  }



  lmap() {
    this.mymap = L.map('mapid').setView([51.505, -0.09], 13);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 5,
      id: 'mapbox/streets-v11',
      tileSize: 300,
      zoomOffset: -1,
      accessToken: 'pk.eyJ1IjoidGVhcnoiLCJhIjoiY2toa2dqcmM3MWIwNjJ5cDlqazhyYzdteiJ9.jYlNVUpq4tkE1jva-mtyqg',
    }).addTo(this.mymap);
  }

  resizes() {
    this.mymap.on("load", () => {
      this.mymap.resize();
    });
  }

}
