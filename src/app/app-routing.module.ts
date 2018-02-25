import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LandingComponent } from "@app/landing/landing.component";
import { NotFoundComponent } from "@app/core/not-found/not-found.component";

const routes: Routes = [
  { path: "", pathMatch: "full", component: LandingComponent },
  { path: "404", component: NotFoundComponent},
  { path: 'home', loadChildren: './home/home.module#HomeModule' },
  // { path: "login", loadChildren: "./login/login.module#LoginModule" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
