import { Component, OnInit } from '@angular/core';
import { ServisesService } from 'src/app/servises.service';
declare var mapboxgl;
declare var  MapboxDirections;


@Component({
  selector: 'app-map3',
  templateUrl: './map3.page.html',
  styleUrls: ['./map3.page.scss'],
})
export class Map3Page implements OnInit {

  map;
  turf;
  constructor(private service:ServisesService ) { }

  ngOnInit() {
    
  }


}