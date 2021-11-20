import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { DbSqliteService } from 'src/app/services/db-sqlite.service';

@Component({
  selector: 'app-pswd-change',
  templateUrl: './pswd-change.page.html',
  styleUrls: ['./pswd-change.page.scss'],
})
export class PswdChangePage implements OnInit {

  ps1 = null;
  ps2 = null;

  user:any = {
    pid : null,

  };

  constructor(private activatedRoute:ActivatedRoute, private router:Router, private dbSqlite: DbSqliteService, public navController: NavController, private alertCtrl: AlertController) {
    this.activatedRoute.queryParams.subscribe(
      params => {
        
          this.user = JSON.parse(params.user);
        
      }
  )
  }

  ngOnInit() {
  }

  cambiarPassword()
  {
    if (this.ps1 == this.ps2){

        this.dbSqlite.updatePassword(this.user.pid, this.ps1);
        this.alertSuccess();
        this.navController.navigateForward(['login/'])

      // update pass
    }
    else {
      this.alertError();
    }
    
  }

  alertError(){
    this.alertCtrl.create({
      header:"password",
      message: 'Contraseñas no coinciden',
      buttons: ['OK']
      
    }).then( res => {
      res.present();
    })
  }
  

  alertSuccess(){
    this.alertCtrl.create({
      header:"Contraseña",
      message: 'Contraseña actualizada con éxito',
      buttons: ['OK']
      
    }).then( res => {
      res.present();
    })
  }
}
