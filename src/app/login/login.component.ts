import { NotificationService } from './../SHARED/notification.service';
import { AuthService } from './../SHARED/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private fb: FormBuilder, public auth: AuthService, public noti: NotificationService) { }

  loginForm: FormGroup;

  ngOnInit(): void {
    this.createForm();
  }
  // tslint:disable-next-line: typedef
  createForm(){
    this.loginForm = this.fb.group({
      email: [ '', (Validators.required)],
      password: [ '' , (Validators.required)]

    });
  }
// tslint:disable-next-line: typedef
signIn(){
  this.auth.signIn(this.loginForm.value.email, this.loginForm.value.password);
}

// tslint:disable-next-line: typedef
createAccount(){
this.auth.signUp(this.loginForm.value.email, this.loginForm.value.password);
}

}
