import { NotificationService } from './../SHARED/notification.service';
import { DepartmentService } from './../SHARED/department.service';
import { ServiceService } from './../SHARED/service.service';
import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(public dialLog: MatDialog, public service: ServiceService,
              public dept: DepartmentService, public dialogRef: MatDialogRef<StudentComponent>,
              public notify: NotificationService) { }


  ngOnInit(): void {
  }
  // tslint:disable-next-line: typedef
  onClick(){
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.notify.success('Clear Successfully');
  }

  // tslint:disable-next-line: typedef
  onSubmit(){
    if (this.service.form.valid){
      if (!this.service.form.get('$key').value) {
        this.service.insertEmployee(this.service.form.value);
      }
      else {
        this.service.updateEmployee(this.service.form.value);
      }
      this.service.form.reset();
      this.service.initializeFormGroup();
      this.onClose();
      this.notify.success('Data Successfully Created');

    }
  }

  // tslint:disable-next-line: typedef
  onClose(){
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.dialogRef.close();
  }

}
