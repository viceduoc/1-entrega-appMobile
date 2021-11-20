import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { Platform } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class DbSqliteService {

  databaseObj: SQLiteObject;
  readonly database_name: string = 'Asistencia.db';
  readonly table_name: string = 'Usuarios';

  nombre_model: string = '';
  row_data: any = [];

  //Manipuladores de operaciones de actualización de filas
  updateActive: boolean;
  to_update_item: any;

  user: any = {
    pid: null,
    name: "",
    email: "",
    password: "",
    isconfirmed: 0,
    recovercode: "",
    ready : false
  }


  constructor(private platform: Platform,
    private sqlite: SQLite) {
    this.platform.ready().then(() => {
      this.createDB();
    }).catch(error => {
      console.log(error);
    });
  }

  //Crea base de datos si no existe y inicializo datos iniciales
  createDB() {
    this.sqlite.create({ name: this.database_name, location: 'default' })
      .then((db: SQLiteObject) => { this.databaseObj = db;  })
      .then(() => { this.createTable(); })
      .then(() => { this.inicializarUsuarios(); })
      .catch(e => { alert('error' + JSON.stringify(e)) });

  }

  //Crea tabla personas
  createTable() {
    this.databaseObj.executeSql('CREATE TABLE IF NOT EXISTS ' + this.table_name + '(pid INTEGER PRIMARY KEY, nombre varchar(40), email varchar(30), password varchar(20), isconfirmed integer, recovercode varchar(6))', [])
      .catch(e => { alert('error ' + JSON.stringify(e)) });
  }

  //Insertar fila en personas
  insertRow() {
    //el valor de nombre no debe estar vacío
    if (!this.nombre_model.length) {
      alert('Debe ingresar un nombre');
      return;
    }

    this.databaseObj.executeSql('INSERT INTO ' + this.table_name + ' (nombre) VALUES ("' + this.nombre_model + '")', [])
      .then(() => { alert('Persona ingresada'); this.getRows() })
      .catch(e => { alert('error ' + JSON.stringify(e)) });
  }


  inicializarUsuarios() {

    this.databaseObj.executeSql('INSERT INTO ' + this.table_name + ' (nombre, email, password, isconfirmed, recovercode) VALUES ("Patricio Mardones", "pato@duoc.cl", "1234", 1, "")', [])
      .then(() => { this.databaseObj.executeSql('INSERT INTO ' + this.table_name + ' (nombre, email, password, isconfirmed, recovercode) VALUES ("Vicente Carmona", "vicente@duoc.cl", "1234", 1, "")', []) })
      .catch(e => { alert('error ' + JSON.stringify(e)) });


  }

  validoLogin(username: string, password: string):Promise<boolean> {

    return new Promise((resolve, reject) => {

      this.user.ready = false;
      this.databaseObj.executeSql('SELECT * FROM ' + this.table_name + ' WHERE email = "' + username + '" and password = "' + password + '" and isconfirmed = 1', [])
      .then((res) => {
        this.row_data = [];
        if (res.rows.length > 0) {

          this.user.pid = res.rows.item(0).pid;
          this.user.name = res.rows.item(0).nombre;
          this.user.email = res.rows.item(0).email;
          console.log('Inicio correcto');
          
          this.user.ready = true;
          resolve (true);

        }
        else {
          console.log('Usuario no encontrado');
          this.user.ready = false;
          resolve (false);
        }
      })
      .catch(e => { reject(false) });

    })

  }

  validarCorreo(username: string):Promise<any> {

    return new Promise((resolve, reject) => {

      this.user.email = "";
      this.databaseObj.executeSql('SELECT * FROM ' + this.table_name + ' WHERE email = "' + username + '"', [])
      .then((res) => {
        this.row_data = [];
        if (res.rows.length > 0) {

          this.user.pid = res.rows.item(0).pid;
          this.user.name = res.rows.item(0).nombre;
          this.user.email = res.rows.item(0).email;
          console.log('Correo encontrado');

          resolve (true);

        }
        else {
          console.log('Correo no encontrado');
          this.user.ready = false;
          resolve (false);
        }
      })
      .catch(e => { reject(false) });
    })
  }

  //Actualiza tabla personas
  marcarCambioPass() {

    let randomcode = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 6);

    this.databaseObj.executeSql('UPDATE ' + this.table_name + ' SET recovercode = "' + randomcode + '", isconfirmed = 0 WHERE pid = ' + this.user.pid, [])
      .then(() => { this.recargarDatosUsuario(); })
      .catch(e => { alert('error ' + JSON.stringify(e)) });

  }

  updatePassword(id:number, password:string) {

    this.databaseObj.executeSql('UPDATE ' + this.table_name + ' SET password = "' + password + '", isconfirmed = 1 WHERE pid = ' + id, [])
      .then(() => { this.recargarDatosUsuario(); })
      .catch(e => { alert('error ' + JSON.stringify(e)) });

  }

  recargarDatosUsuario() {
    this.databaseObj.executeSql('SELECT * FROM ' + this.table_name  + ' WHERE pid = "' + this.user.pid + '"', [])
      .then((res) => {
        this.row_data = [];
        if (res.rows.length > 0) {
          this.user.pid = res.rows.item(0).pid;
          this.user.name = res.rows.item(0).nombre;
          this.user.email = res.rows.item(0).email;
          this.user.recovercode = res.rows.item(0).recovercode;

          console.log('EL codigo de recuperacion es = ' + this.user.recovercode);
          
        }
      }
      )
      .catch(e => { alert('error ' + JSON.stringify(e)) });
  }


  //Retorna filas de la tabla personas
  getRows() {
    this.databaseObj.executeSql('SELECT * FROM ' + this.table_name, [])
      .then((res) => {
        this.row_data = [];
        if (res.rows.length > 0) {
          for (var i = 0; i < res.rows.length; i++) {
            this.row_data.push(res.rows.item(i));
          }
        }
      }
      )
      .catch(e => { alert('error ' + JSON.stringify(e)) });
  }

  //Eliminar fila en tabla personas
  deleteRow(item) {
    this.databaseObj.executeSql('DELETE FROM ' + this.table_name + ' WHERE pid = ' + item.pid, [])
      .then((res) => { alert('Registro eliminado'); this.getRows(); })
      .catch(e => { alert('error ' + JSON.stringify(e)) });
  }

  //Habilita la actualización de un item para
  enableUpdate(item) {
    this.updateActive = true;
    this.to_update_item = item;
    this.nombre_model = item.nombre;
  }

  //Actualiza tabla personas
  updateRow() {
    this.databaseObj.executeSql('UPDATE ' + this.table_name + ' SET nombre = "' + this.nombre_model + '" WHERE pid = ' + this.to_update_item.pid, [])
      .then(() => { alert('registro actualizado'); this.getRows(); })
      .catch(e => { alert('error ' + JSON.stringify(e)) });

  }

}
