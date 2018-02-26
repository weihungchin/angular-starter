import { Router, ActivatedRoute } from "@angular/router";
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
  constructor(
    private userService: UserService, 
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getUserProfile();
  }

  private getUserProfile() {
    this.userService.getUserProfile().subscribe(
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
      this.router.navigate(['./home'], {relativeTo: this.activatedRoute});
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
