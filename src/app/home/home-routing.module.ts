import { CommonTableComponent } from "@app/home/common-table/common-table.component";
import { AuthGuard } from "@app/services";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    children: [
      {
        path: "",
        redirectTo: "applicants"
      },
      {
        path: "applicants",
        loadChildren: "../applicants/applicants.module#ApplicantsModule"
      }
    ],
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
