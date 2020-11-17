import { Component } from '@angular/core';
import { Router} from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private route:Router) {}

  googleLogin(){
    alert("Google");
  }
  facebookLogin(){
    alert("facebook");
  }
  phoneLogin(){
    alert("phone");
  }

  toRegistration(){
    this.route.navigate(['regiter'])
  }

}
