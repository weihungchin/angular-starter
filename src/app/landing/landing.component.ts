import { Router } from "@angular/router";
import { UserService } from "@app/services";
import { Component, OnInit } from "@angular/core";
import { User } from "@app/models";

@Component({
  selector: "app-landing",
  templateUrl: "./landing.component.html",
  styleUrls: ["./landing.component.scss"]
})
export class LandingComponent implements OnInit {
  isShowLogin: boolean;
  currentUser: User;
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.getUserProfile();
  }

  private getUserProfile() {
    this.userService.attemptAuth().subscribe(
      res => {
        this.handleUser(res);
      },
      err => {
        console.log(err);
      }
    );
  }

  private handleUser(res) {
    if (res) {
      this.currentUser = this.toVO(res);
      // redirect to home page ? or show button to link to home page;
    } else {
      this.isShowLogin = true;
      // this.router.navigateByUrl("login");
    }
  }

  private toVO(res): User {
    const vo = Object.assign(new User(), {
      name: res.name
    });
    return vo;
  }
}
