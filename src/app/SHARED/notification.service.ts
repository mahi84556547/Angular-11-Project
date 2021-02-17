import { Injectable } from '@angular/core';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(public snackBar: MatSnackBar) { }
  config: MatSnackBarConfig = {
    duration: 3000,
    horizontalPosition: 'right',
    verticalPosition: 'top'
  };
  // tslint:disable-next-line: typedef
  primary(arg0: string) {
    throw new Error('Method not implemented.');
  }
  // tslint:disable-next-line: typedef
  success(msg){
    this.config.panelClass = ['notification', 'success'];
    this.snackBar.open(msg, 'OK', this.config);
  }

  // tslint:disable-next-line: typedef
  warn(msg){
    this.config.panelClass = ['notification', 'warn'];
    this.snackBar.open(msg, 'OK', this.config);
  }

}
