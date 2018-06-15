import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';

import { AuthUser } from './auth-user.model';
import { User } from './user.model';

@Injectable()
export class AuthService {

  authChange = new Subject<boolean>();
  private user: User;

  constructor(private router: Router) { }

  registerUser(authUser: AuthUser) {
    this.user = {
      email: authUser.email,
      userId: Math.round(Math.random() * 10000).toString()
    };
    this.onSuccessAuth();
  }

  loginUser(authUser: AuthUser) {
    this.user = {
      email: authUser.email,
      userId: Math.round(Math.random() * 10000).toString()
    };
    this.onSuccessAuth();
  }

  logout() {
    this.user = null;
    this.authChange.next(false);
    this.router.navigate(['/login']);
  }

  getUser() {
    return { ...this.user };
  }

  isAuth() {
    return this.user != null;
  }

  private onSuccessAuth() {
    this.authChange.next(true);
    this.router.navigate(['/maintenance']);
  }
}
