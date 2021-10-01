import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  user:any = {
    name : ""

  };


  constructor(private activatedRoute:ActivatedRoute, private router:Router) {
    this.activatedRoute.queryParams.subscribe(
      params => {
        
          this.user = JSON.parse(params.user);
        
      }
  )
  }

}
