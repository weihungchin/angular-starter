import { Component } from "@angular/core";
import { Router, NavigationEnd, NavigationError, NavigationCancel } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  constructor(private router: Router) {
    this.subscToRouterEvent();
  }

  private subscToRouterEvent() {
    this.router.events.subscribe(event => this.handleRouterEvent(event));
  }

  private handleRouterEvent(e) {
    if (e instanceof NavigationEnd) {
      // console.log(e);
    }
    if (e instanceof NavigationError) {
      console.log(e);
      this.router.navigateByUrl("404");
    }
    if (e instanceof NavigationCancel) {
      console.log(e);
    }
  }
}
