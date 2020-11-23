import { Component } from '@angular/core';
import { Router} from '@angular/router'
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private route:Router,public loadingController: LoadingController) {}

  

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

  toMenu(){
    this.route.navigate(['menu'])
  }

}
