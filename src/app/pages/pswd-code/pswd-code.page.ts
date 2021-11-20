import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { DbSqliteService } from 'src/app/services/db-sqlite.service';

@Component({
  selector: 'app-pswd-code',
  templateUrl: './pswd-code.page.html',
  styleUrls: ['./pswd-code.page.scss'],
})
export class PswdCodePage implements OnInit {

  user:any = {
    pid : null,
    recovercode : null

  };

  codigo:any = null;


  constructor(private activatedRoute:ActivatedRoute, private router:Router, private dbSqlite: DbSqliteService, public navController: NavController, private alertCtrl: AlertController) {
    this.activatedRoute.queryParams.subscribe(
      params => {
        
          this.user = JSON.parse(params.user);
        
      }
  )
  }

  ngOnInit() {

    this.dbSqlite.marcarCambioPass();
  }

  confirmarCodigo() {

        if (this.dbSqlite.user.recovercode == this.codigo) {

          

          const navugationExtras: NavigationExtras = {
            queryParams: {
              user: JSON.stringify(this.dbSqlite.user)
            }
          };
          this.navController.navigateForward(['pswd-change/'], navugationExtras)
        }
        else {
          this.alertError();
        }



  }

  alertError(){
    this.alertCtrl.create({
      header:"Codigo incorrecto",
      message: 'Codigo incorrecto',
      buttons: ['OK']
      
    }).then( res => {
      res.present();
    })
  }

}
