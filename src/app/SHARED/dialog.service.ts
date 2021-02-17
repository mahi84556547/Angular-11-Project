import { DeleteconfirmComponent } from './../deleteconfirm/deleteconfirm.component';
import { StudentComponent } from './../student/student.component';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(public dialog: MatDialog) { }
  // tslint:disable-next-line: typedef
  openConfirmDialog(msg){
    return this.dialog.open(DeleteconfirmComponent, {
      position: {top: '10px'},
      width: '500px',
      disableClose: true,
      panelClass: 'confirm-dialog-container',
      data: {
        message : msg
      }
    });
  }

}
