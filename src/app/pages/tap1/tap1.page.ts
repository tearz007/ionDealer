import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-tap1',
  templateUrl: './tap1.page.html',
  styleUrls: ['./tap1.page.scss'],
})
export class Tap1Page implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {

  }

  toMap(){
  this.router.navigate(['map']);  
  }

}
