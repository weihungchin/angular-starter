import { Observable } from "rxjs/Observable";
import { UserService } from "./user.service";
import { Injectable } from "@angular/core";
import {
  CanActivate,
  CanLoad
} from "@angular/router";
import "rxjs/add/operator/take";


@Injectable()
export class AuthGuard implements CanLoad, CanActivate {
  constructor(private userService: UserService) {}

  canActivate(
  ): Observable<boolean> {
    console.log("auth guard");
    this.userService.isAuthenticated.subscribe(res => {
      console.log(res);
    });
    return this.userService.isAuthenticated.take(1).map(
      res => {
        console.log(res);
        return res;
      }
    );
  }

  canLoad(): Observable<boolean> {
    return this.userService.isAuthenticated.take(1);
  }
}
