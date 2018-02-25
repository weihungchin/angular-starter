import { CoreComponentModule } from './core/core.module';
import { LoginModule } from './login/login.module';
import { AppRoutingModule } from './app-routing.module';
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
import { AngularFireModule } from "angularfire2";
import { UserService } from "@app/services";
import { AngularFireAuthModule } from "angularfire2/auth";



@NgModule({
  declarations: [AppComponent, LandingComponent],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register("/ngsw-worker.js", {
      enabled: environment.production
    }),
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    LoginModule,
    CoreComponentModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
