import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { DbSqliteService } from 'src/app/services/db-sqlite.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.page.html',
  styleUrls: ['./user-update.page.scss'],
})
export class UserUpdatePage implements OnInit {

  user:any

  constructor(private activatedRoute:ActivatedRoute, private router:Router, public navController: NavController, private dbSqlite: DbSqliteService, private alertCtrl: AlertController) {
    this.activatedRoute.queryParams.subscribe(
      params => {
        
          this.user = JSON.parse(params.user);
        
      }
  )
  }

  ngOnInit() {
  }

  updateNombre(){

    if(this.user.name.length > 4){
      this.dbSqlite.updateNombre(this.user.pid, this.user.name);
      this.alertSuccess();
      const navugationExtras: NavigationExtras = {
        queryParams: {
          user: JSON.stringify(this.user)
        }
      };
      this.navController.navigateForward(['home/'], navugationExtras)
    }


  }


  alertSuccess(){
    this.alertCtrl.create({
      header:"Ddatos",
      message: 'Datos de usuario actualizados con éxito',
      buttons: ['OK']
      
    }).then( res => {
      res.present();
    })
  }

}
