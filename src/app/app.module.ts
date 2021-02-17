import { DialogService } from './SHARED/dialog.service';
import { DepartmentService } from './SHARED/department.service';
import { ServiceService } from './SHARED/service.service';
import { MaterialModule } from './MATERIAL/material/material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeeComponent } from './employee/employee.component';
import { StudentComponent } from './student/student.component';
import { TabledataComponent } from './tabledata/tabledata.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {environment} from '../environments/environment';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar';
import { NotificationService } from './SHARED/notification.service';
import { DeleteconfirmComponent } from './deleteconfirm/deleteconfirm.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    StudentComponent,
    TabledataComponent,
    DeleteconfirmComponent,
    LoginComponent,
    PagenotfoundComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule,MaterialModule,
    ReactiveFormsModule,BrowserAnimationsModule,FlexLayoutModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)

   ],
  providers: [ServiceService,DepartmentService,NotificationService,DialogService],
  bootstrap: [AppComponent],
  entryComponents: [StudentComponent,MatSnackBar,MatSnackBarConfig]

})
export class AppModule { }
