import { AngularFireAuth } from "angularfire2/auth";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { ReplaySubject } from "rxjs/ReplaySubject";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { User } from "@app/models";
import "rxjs/add/operator/distinctUntilChanged";
import "rxjs/add/operator/map";

export abstract class UserService {
  abstract login(email: string, password: string);
  abstract attemptAuth();
  abstract purgeAuth();
  abstract getProfile();
  abstract updateProfile();
  public isAuthenticated;
  public currentUser;

}


@Injectable()
export class FirebaseUserService extends UserService {
  private currentUserSubject = new BehaviorSubject<User>(new User());
  public currentUser = this.currentUserSubject
    .asObservable()
    .distinctUntilChanged();

  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();

  constructor(private ngFireAuth: AngularFireAuth) {
    super();
  }

  login(email: string, password: string): Observable<any> {
    return this.emailLogin(email, password).map(res =>
      this.handleAuthUser(res)
    );
  }

  updateProfile() {
    // this.ngFireAuth.auth.currentUser.updateProfile({displayName:'', photoURL:''})
  }

  // call this once in app.component.ts only
  attemptAuth() {
    this.ngFireAuth.authState.map(res => {
      this.handleAuthUser(res);
      return res;
    }).subscribe(
      res => console.log(res),
      err => console.log(err)
    );
  }

  getProfile(): Observable<any> {
    return this.ngFireAuth.authState.map(res => {
      this.handleAuthUser(res);
      return res;
    });
  }

  purgeAuth(): Observable<any> {
    return this.logout().map(res => {
      this.currentUserSubject.next(new User());
      this.isAuthenticatedSubject.next(false);
      return res;
    });
  }


  private emailLogin(email: string, password: string): Observable<any> {
    return Observable.fromPromise(
      this.ngFireAuth.auth.signInWithEmailAndPassword(email, password)
    );
  }

  private logout(): Observable<any> {
    return Observable.fromPromise(this.ngFireAuth.auth.signOut());
  }

  private handleAuthUser(res): void {
    if (res) {
      console.log(res);
      // this.router.navigateByUrl("home");
      const user = this.toUserVO(res);
      this.currentUserSubject.next(user);
      this.isAuthenticatedSubject.next(true);
    } else {
      // this.router.navigateByUrl("login");
      this.isAuthenticatedSubject.next(false);
    }
  }

  private toUserVO(res): User {
    const user = new User();
    user.email = res.email;
    user.photoUrl = res.photoUrl;
    user.name = res.displayName;
    return user;
  }
}
