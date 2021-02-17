import { NotificationService } from './notification.service';
import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import {AngularFireAuth } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData: any;
  constructor(public fbAuth: AngularFireAuth, private ngzone: NgZone,
              private router: Router, public notify: NotificationService) {
      this.fbAuth.authState.subscribe(user => {
        if (user){
          this.userData = user;
          localStorage.setItem('user', this.userData.email);
        }
      });
     }
// tslint:disable-next-line: typedef
signIn(email, password){
  return this.fbAuth.signInWithEmailAndPassword(email, password)
  .then((result) => {
           this.router.navigate(['/home']);
  }).catch((error) => {
    this.notify.warn('User doesn not exist! Please Signup');

  });
}

// tslint:disable-next-line: typedef
signUp(email, password){
return this.fbAuth.createUserWithEmailAndPassword(email, password)
.then((result) => {
  this.router.navigate(['/login']);
}).catch((error) => {
  this.notify.warn('Enter Valid Creditals');
});
}

// tslint:disable-next-line: typedef
logOut(){
  this.fbAuth.signOut().then(() => {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  });
}
// tslint:disable-next-line: typedef
  isLoggeedIn(){
    const user = localStorage.getItem('user');
    return user ? true : false;
  }
// tslint:disable-next-line: typedef
  getUser(){
    const user = localStorage.getItem('user');
    return user ? user : null;
  }




}
