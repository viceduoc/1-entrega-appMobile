import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user:any = {
    name:null,
    password:null
  }

  constructor(public navController:NavController) { }

  ngOnInit() {
  }

  goToHome(){
    const navugationExtras: NavigationExtras={
      queryParams:{
        user: JSON.stringify(this.user)
      }
    };
    this.navController.navigateForward(['home/'], navugationExtras)
  }


}
 