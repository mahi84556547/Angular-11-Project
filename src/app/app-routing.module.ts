import { LoggedinGuard } from './Guards/loggedin.guard';
import { EmployeeComponent } from './employee/employee.component';
import { SecurityGuard } from './Guards/security.guard';
import { TabledataComponent } from './tabledata/tabledata.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent, canActivate: [LoggedinGuard]  },
  { path: 'home', component: TabledataComponent, canActivate: [SecurityGuard] },
  { path: 'employee', component: EmployeeComponent, canActivate: [SecurityGuard] },
  { path: '**', component: PagenotfoundComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
