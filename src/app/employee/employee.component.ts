import { AuthService } from './../SHARED/auth.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { StudentComponent } from '../student/student.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(public diaLog: MatDialog, public router: Router, public auth: AuthService) { }


  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  signOut(){
    this.auth.logOut();
  }



}
