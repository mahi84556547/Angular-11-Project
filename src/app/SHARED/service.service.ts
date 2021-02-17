import { Injectable } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import * as _ from 'lodash';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(public firebase: AngularFireDatabase) { }
  employeeList!: AngularFireList<any>;

  form: FormGroup =  new FormGroup({
    $key : new FormControl(null),
    first_name: new FormControl('', Validators.required),
    last_name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    mobile: new FormControl('', [Validators.required, Validators.minLength(10)]),
    gender: new FormControl(''),
    department: new FormControl('', Validators.required),

  });
  // tslint:disable-next-line: typedef
  initializeFormGroup(){
    this.form.setValue({
      $key : null,
      first_name: '',
      last_name: '',
      email: '',
      mobile: '',
      gender: '',
      department: 0,
    });
  }
  // tslint:disable-next-line: typedef
    getEmployees(){
    this.employeeList = this.firebase.list('employees');
    return this.employeeList.snapshotChanges();
  }
    // tslint:disable-next-line: typedef
  insertEmployee(emp){
    this.employeeList.push({
      first_name: emp.first_name,
      last_name: emp.last_name,
      email: emp.email,
      mobile: emp.mobile,
      gender: emp.gender,
      department: emp.department,
    });
  }
  // tslint:disable-next-line: typedef
  updateEmployee(emp){
    this.employeeList.update(emp.$key, {
      first_name: emp.first_name,
      last_name: emp.last_name,
      email: emp.email,
      mobile: emp.mobile,
      gender: emp.gender,
      department: emp.department,
    });
  }

  // tslint:disable-next-line: typedef
  deleteEmployee($key: string){
    this.employeeList.remove($key);
  }
  // tslint:disable-next-line: typedef
  populateForm(emp){
    this.form.setValue(_.omit(emp, 'departmentName'));
  }
}
