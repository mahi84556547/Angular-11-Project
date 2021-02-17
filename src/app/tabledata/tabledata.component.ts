import { element } from 'protractor';
import { AuthService } from './../SHARED/auth.service';
import { DialogService } from './../SHARED/dialog.service';
import { NotificationService } from './../SHARED/notification.service';
import { DepartmentService } from './../SHARED/department.service';
import { Class } from './../Model/class';
import { ServiceService } from './../SHARED/service.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { StudentComponent } from '../student/student.component';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort} from '@angular/material/sort';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabledata',
  templateUrl: './tabledata.component.html',
  styleUrls: ['./tabledata.component.css']
})

export class TabledataComponent implements OnInit {

  public dataSource: MatTableDataSource<Class>;

  displayedColumns: string[] = [ 'firstname', 'lastname', 'email', 'mobile', 'department', 'gender', 'actions'];

  @ViewChild(MatPaginator)
  paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  searchKey: string;

  constructor(public diaLog: MatDialog, public htts: ServiceService, public dept: DepartmentService,
              public noti: NotificationService, public dialogservice: DialogService, public router: Router, public auth: AuthService) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {

    this.htts.getEmployees().subscribe(
      list => {
        const array = list.map(item => {
          const departmentName = this.dept.getDepartmentName(item.payload.val().department);
          return {
            $key: item.key,
            departmentName,
            ...item.payload.val()
          };
        });
        this.dataSource = new MatTableDataSource(array);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
  });

}
    // tslint:disable-next-line: typedef
    onSearchClear(){
      this.searchKey = '';
      this.applyFilter();
    }
    // tslint:disable-next-line: typedef
    applyFilter() {
      this.dataSource.filter = this.searchKey.trim().toLowerCase();
    }

    // tslint:disable-next-line: typedef
    openDialog(){
      this.htts.initializeFormGroup();
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.width = '80%';
      this.diaLog.open(StudentComponent, dialogConfig);
    }
    // tslint:disable-next-line: typedef
    // tslint:disable-next-line: no-shadowed-variable
    // tslint:disable-next-line: typedef
    onEdit(emp){
      this.htts.populateForm(emp);
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.width = '80%';
      this.diaLog.open(StudentComponent, dialogConfig);
    }
      // tslint:disable-next-line: typedef
onDelete($key: any){
      this.dialogservice.openConfirmDialog('Are you Sure to delete?')
      .afterClosed().subscribe(
        (        res: any) => {
          if (res) {
            this.htts.deleteEmployee($key);
            this.noti.warn('Record Deleted!');
          }
        }
      );
    }

  }




