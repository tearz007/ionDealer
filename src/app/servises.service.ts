import { Injectable } from '@angular/core';
declare var mapboxgl;
declare var  MapboxDirections;

@Injectable({
  providedIn: 'root'
})
export class ServisesService {

  map;
  turf;
  constructor() { }

  mapFunctions() {
    mapboxgl.accessToken = 'pk.eyJ1IjoidGVhcnoiLCJhIjoiY2toa2dqcmM3MWIwNjJ5cDlqazhyYzdteiJ9.jYlNVUpq4tkE1jva-mtyqg';
    this.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [28.61502,-26.45746],
      zoom: 5 // starting zoom
    });
  }
}
