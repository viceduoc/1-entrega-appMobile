import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pswd-recovery',
  templateUrl: './pswd-recovery.page.html',
  styleUrls: ['./pswd-recovery.page.scss'],
})
export class PswdRecoveryPage implements OnInit {

  user:any = {
    name : "",
    password1 : "",
    password2 : ""
  };

  constructor(private activatedRoute:ActivatedRoute, private router:Router) {
    this.activatedRoute.queryParams.subscribe(
        params => {
          if (this.router.getCurrentNavigation().extras.state){
            this.user.name = this.router.getCurrentNavigation().extras.state.user.name;

            console.log(this.user)
          }
        }
    )

  };

  validaPassword(){
    if (this.user.password1 == this.user.password2 && this.user.password1.length > 0 && this.user.name.length > 0){
      console.log('Passwords validas. Redirigiendo...')

      this.router.navigate(['login'])
    }
    else {
      console.log("No coinciden.")
    }
  }

  limpiarCampos(){
    this.user.name = ""
    this.user.password1 = ""
    this.user.password2 = ""
  }

  ngOnInit() {
  }

}
