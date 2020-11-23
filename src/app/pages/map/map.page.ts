import { Component, OnInit } from '@angular/core';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
declare var mapboxgl;


@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {
  map
  constructor(

  ) {}

  ngOnInit() {
    this.mapFunction();
    this.mapFunction2();
    this.mapLocation();
  //  this.map3D();
   // this.getCurrentCoordinates();
  }
  mapFunction() {
    mapboxgl.accessToken = 'pk.eyJ1IjoidGVhcnoiLCJhIjoiY2toa2dqcmM3MWIwNjJ5cDlqazhyYzdteiJ9.jYlNVUpq4tkE1jva-mtyqg';
    this.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-87.6244, 41.8756],
      zoom: 13
    });
  }

  mapFunction2() {
    this.map.on("load", () => {
      this.map.resize();
    });
    this.map.addControl(new mapboxgl.NavigationControl());
  }

  mapLocation(){
    this.map.addControl(
      new mapboxgl.GeolocateControl({
      positionOptions: {
      enableHighAccuracy: true
      },
      trackUserLocation: true
      })
      );
  }

  map3D(){
    this.map.on('load', function() {
      this.map.addLayer({
          'id': '3d-buildings',
          'source': 'composite',
          'source-layer': 'building',
          'filter': ['==', 'extrude', 'true'],
          'type': 'fill-extrusion',
          'minzoom': 15,
          'paint': {
              'fill-extrusion-color': '#aaa',
              'fill-extrusion-height': {
                  'type': 'identity',
                  'property': 'height'
              },
              'fill-extrusion-base': {
                  'type': 'identity',
                  'property': 'min_height'
              },
              'fill-extrusion-opacity': .6
          }
      });
  }); 

  }


}