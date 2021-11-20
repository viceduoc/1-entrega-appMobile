import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import {AlertController, NavController} from '@ionic/angular';
import { DbSqliteService } from 'src/app/services/db-sqlite.service';

@Component({
  selector: 'app-pswd-recovery',
  templateUrl: './pswd-recovery.page.html',
  styleUrls: ['./pswd-recovery.page.scss'],
})
export class PswdRecoveryPage implements OnInit {

  user:any = {
    name : ""
  };

  constructor(private activatedRoute:ActivatedRoute, private router:Router, private alertCtrl: AlertController, private dbSqlite: DbSqliteService, public navController: NavController ) {
    this.activatedRoute.queryParams.subscribe(
        params => {
          if (this.router.getCurrentNavigation().extras.state){
            this.user.name = this.router.getCurrentNavigation().extras.state.user.name;

            console.log(this.user)
          }
        }
    )

  };

  obtenerCodigo() {
    // Preguntar a la base si credenciales con correctas

    let ok = this.dbSqlite.validarCorreo(this.user.name)
      .then(() => {

        if (this.dbSqlite.user.email != "") {

          

          const navugationExtras: NavigationExtras = {
            queryParams: {
              user: JSON.stringify(this.dbSqlite.user)
            }
          };
          this.navController.navigateForward(['pswd-code/'], navugationExtras)
        }
        else {
          this.alertError();
        }

      })
      .catch(e => {
        console.log('Error al consultar la base de datos.');
      })

  }


  limpiarCampos(){
    this.user.name = ""

  }

  alertError(){
    this.alertCtrl.create({
      header:"Correo no encontrado",
      message: 'Correo ingresado no existe',
      buttons: ['OK']
      
    }).then( res => {
      res.present();
    })
  }

  ngOnInit() {
  }

}
