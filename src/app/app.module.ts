import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { ServiceWorkerModule } from "@angular/service-worker";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { environment } from "@env/environment";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { RouterModule } from "@angular/router";
import { LandingComponent } from "./landing/landing.component";

const rootRoute = RouterModule.forRoot([
  { path: "", pathMatch: "full", component: LandingComponent }
]);

@NgModule({
  declarations: [AppComponent, LandingComponent],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register("/ngsw-worker.js", {
      enabled: environment.production
    }),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    rootRoute
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
