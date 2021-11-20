import { Component } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  user:any = {
    name : "",
    pid : null,
    email : ""

  };


  constructor(private activatedRoute:ActivatedRoute, private router:Router, public navController: NavController) {
    this.activatedRoute.queryParams.subscribe(
      params => {
        
          this.user = JSON.parse(params.user);
        
      }
  )
  }

  modificarDatos(){

    const navugationExtras: NavigationExtras = {
      queryParams: {
        user: JSON.stringify(this.user)
      }
    };
    this.navController.navigateForward(['user-update/'], navugationExtras)
  }
  

}
