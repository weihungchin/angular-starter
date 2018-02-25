import { HomeRoutingModule } from "./home-routing.module";
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { CommonModule } from "@angular/common";
import { AuthGuard } from "@app/services";
import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { RouterModule } from "@angular/router";
import {
  MatTabsModule,
  MatTableModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatPaginatorModule,
  MatSelectModule,
  MatSidenavModule,
  MatListModule,
  MatCardModule,
  MatExpansionModule,
  MatInputModule,
  MatButtonModule
} from "@angular/material";
import { CommonTableComponent } from "@app/home/common-table/common-table.component";
import { AngularFireDatabaseModule } from "angularfire2/database";

@NgModule({
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatPaginatorModule,
    MatSelectModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatCardModule,
    MatExpansionModule,
    CommonModule,
    HomeRoutingModule,
    AngularFireDatabaseModule,
    MatInputModule,
    MatButtonModule
  ],
  exports: [],
  declarations: [HomeComponent, CommonTableComponent],
  providers: []
})
export class HomeModule {}
