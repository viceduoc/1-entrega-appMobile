import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';


@Component({
  selector: 'app-lectorqr',
  templateUrl: './lectorqr.page.html',
  styleUrls: ['./lectorqr.page.scss'],
})
export class LectorqrPage implements OnInit {

  escaneo = {};


  constructor(private barcodeScanner: BarcodeScanner) { }


  ngOnInit() {

  }

  leerQR(){
    
          this.barcodeScanner.scan().then(barcodeData => {
            console.log('Barcode data', barcodeData);
            this.escaneo = barcodeData;
          }).catch(err => {
              console.log('Error', err);
 });
  }



}
