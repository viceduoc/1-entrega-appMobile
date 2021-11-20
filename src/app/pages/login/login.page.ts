import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';
import { DbSqliteService } from 'src/app/services/db-sqlite.service';







@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user: any = {
    name: "",
    email: "",
    password: ""
  }




  constructor(public navController: NavController, private alertCtrl: AlertController, private dbSqlite: DbSqliteService) { }

  ngOnInit() {


  }



  goToHome() {
    // Preguntar a la base si credenciales con correctas

    let ok = this.dbSqlite.validoLogin(this.user.email, this.user.password)
      .then(() => {

        if (this.dbSqlite.user.ready) {
          const navugationExtras: NavigationExtras = {
            queryParams: {
              user: JSON.stringify(this.dbSqlite.user)
            }
          };
          this.navController.navigateForward(['home/'], navugationExtras)
        }
        else {
          this.alertError();
        }

      })
      .catch(e => {
        console.log('Error al consultar la base de datos.');
      })

  }


  alertError() {
    this.alertCtrl.create({
      header: "Credenciales incorrectas",
      message: 'Credenciales ingresadas no son válidas',
      buttons: ['OK']

    }).then(res => {
      res.present();
    })
  }


}
