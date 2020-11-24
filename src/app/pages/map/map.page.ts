import { Component, OnInit } from '@angular/core';

declare var mapboxgl;
declare var  MapboxDirections;


@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {
  map;
  turf;
  constructor() { }

  ngOnInit() {
    this.mapFunction();
    this.mapFunction2();
    // this.mapDistance();
    // this.mapLocation();
    // this.mapDirection();
  }

  mapFunction() {
    mapboxgl.accessToken = 'pk.eyJ1IjoidGVhcnoiLCJhIjoiY2toa2dqcmM3MWIwNjJ5cDlqazhyYzdteiJ9.jYlNVUpq4tkE1jva-mtyqg';
    this.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [2.3399, 48.8555],
      zoom: 5 // starting zoom
    });
  }

  mapFunction2() {
    this.map.on("load", () => {
      this.map.resize();
    });
  this.map.addControl(new mapboxgl.NavigationControl(),'top  -left'); 
    
  }

  mapDistance() {
    var distanceContainer = document.getElementById('distance');

    // GeoJSON object to hold our measurement features
    var geojson = {
      'type': 'FeatureCollection',
      'features': []
    };

    // Used to draw a line between points
    var linestring = {
      'type': 'Feature',
      'geometry': {
        'type': 'LineString',
        'coordinates': []
      }
    };

    this.map.on('load', function () {
      this.map.addSource('geojson', {
        'type': 'geojson',
        'data': geojson
      });

      // Add styles to the map
      this.map.addLayer({
        id: 'measure-points',
        type: 'circle',
        source: 'geojson',
        paint: {
          'circle-radius': 5,
          'circle-color': '#000'
        },
        filter: ['in', '$type', 'Point']
      });
      this.map.addLayer({
        id: 'measure-lines',
        type: 'line',
        source: 'geojson',
        layout: {
          'line-cap': 'round',
          'line-join': 'round'
        },
        paint: {
          'line-color': '#000',
          'line-width': 2.5
        },
        filter: ['in', '$type', 'LineString']
      });

      this.map.on('click', function (e) {
        var features = this.map.queryRenderedFeatures(e.point, {
          layers: ['measure-points']
        });

        // Remove the linestring from the group
        // So we can redraw it based on the points collection
        if (geojson.features.length > 1) geojson.features.pop();

        // Clear the Distance container to populate it with a new value
        distanceContainer.innerHTML = '';

        // If a feature was clicked, remove it from the map
        if (features.length) {
          var id = features[0].properties.id;
          geojson.features = geojson.features.filter(function (point) {
            return point.properties.id !== id;
          });
        } else {
          var point = {
            'type': 'Feature',
            'geometry': {
              'type': 'Point',
              'coordinates': [e.lngLat.lng, e.lngLat.lat]
            },
            'properties': {
              'id': String(new Date().getTime())
            }
          };

          geojson.features.push(point);
        }

        if (geojson.features.length > 1) {
          linestring.geometry.coordinates = geojson.features.map(
            function (point) {
              return point.geometry.coordinates;
            }
          );

          geojson.features.push(linestring);

          // Populate the distanceContainer with total distance
          var value = document.createElement('pre');
          value.textContent =
            'Total distance: ' +
            this.turf.length(linestring).toLocaleString() +
            'km';
          distanceContainer.appendChild(value);
        }

        this.map.getSource('geojson').setData(geojson);
      });
    });

    this.map.on('mousemove', function (e) {
      var features = this.map.queryRenderedFeatures(e.point, {
        layers: ['measure-points']
      });
      // UI indicator for clicking/hovering a point on the map
      this.map.getCanvas().style.cursor = features.length
        ? 'pointer'
        : 'crosshair';
    });
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

  mapDirection(){
    this.map.addControl(
      new MapboxDirections({
      accessToken: mapboxgl.accessToken
      }),
      'top-left'
      );
  }

}
