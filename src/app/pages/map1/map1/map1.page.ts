import { Component, OnInit } from '@angular/core';
import { ServisesService } from 'src/app/servises.service';

declare var mapboxgl;
declare var MapboxDirections;


@Component({
  selector: 'app-map1',
  templateUrl: './map1.page.html',
  styleUrls: ['./map1.page.scss'],
})
export class Map1Page implements OnInit {


  turf;
  constructor(private service: ServisesService) { }

  ngOnInit() {
    this.service.mapFunctions();
    this.mapFunction2();
    this.mapLocation();
    // this.viewD();
  }
  mapFunction2() {
    this.service.map.on("load", () => {
      this.service.map.resize();
    });
    this.service.map.addControl(new mapboxgl.NavigationControl());

  }
  mapLocation() {
    this.service.map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true
        },
        trackUserLocation: true
      })
    );
  }

  mapDirection() {
    this.service.map.addControl(
      new MapboxDirections({
        accessToken: mapboxgl.accessToken
      }),
      'top-left'
    );
  }

  viewD() {

    this.service.map.on('load', function () {
      // Insert the layer beneath any symbol layer.
      var layers = this.service.map.getStyle().layers;

      var labelLayerId;
      for (var i = 0; i < layers.length; i++) {
        if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
          labelLayerId = layers[i].id;
          break;
        }
      }
      this.service.map.addLayer(
        {
          'id': '3d-buildings',
          'source': 'composite',
          'source-layer': 'building',
          'filter': ['==', 'extrude', 'true'],
          'type': 'fill-extrusion',
          'minzoom': 15,
          'paint': {
            'fill-extrusion-color': '#aaa',

            // use an 'interpolate' expression to add a smooth transition effect to the
            // buildings as the user zooms in
            'fill-extrusion-height': [
              'interpolate',
              ['linear'],
              ['zoom'],
              15,
              0,
              15.05,
              ['get', 'height']
            ],
            'fill-extrusion-base': [
              'interpolate',
              ['linear'],
              ['zoom'],
              15,
              0,
              15.05,
              ['get', 'min_height']
            ],
            'fill-extrusion-opacity': 0.6
          }
        },
        labelLayerId
      );
    });
  }

  marker() {
    var marker = new mapboxgl.Marker()
      .setLngLat([28.61502, -26.45746])
      .addTo(this.service.map);
    var lngLat = marker.getLngLat();
    // Print the marker's longitude and latitude values in the console
    console.log('Longitude: ' + lngLat.lng + ', Latitude: ' + lngLat.lat)
    marker.setPopup()
    marker.togglePopup();
  }

}