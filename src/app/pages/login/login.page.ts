import { Component, OnInit } from '@angular/core';
import {AlertController, NavController} from '@ionic/angular';
import { NavigationExtras } from '@angular/router';







@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user:any = {
    name:"",
    password:""
  }

  constructor(public navController:NavController, private alertCtrl: AlertController) {}

  ngOnInit() {}

  

  goToHome(){
    const navugationExtras: NavigationExtras={
      queryParams:{
        user: JSON.stringify(this.user)
      }
    };

    if(this.user.name.length >= 3 && this.user.password.length == 4){

      this.navController.navigateForward(['home/'], navugationExtras)
    }
    else{
      this.alertError();
      
    }

    
  }


  alertError(){
    this.alertCtrl.create({
      header:"Al parecer faltan algunos dsaatos",
      message: 'Username: 4-8 caracteres ',
      buttons: ['OK']
      
    }).then( res => {
      res.present();
    })
  }


}
 