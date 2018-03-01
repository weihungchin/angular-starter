import { MatIconModule } from "@angular/material/icon";
import { ApplicantsRoutingModule } from "./applicants-routing.module";
import { NgModule } from "@angular/core";

import { ApplicantsComponent } from "./applicants.component";
import { MatCardModule } from "@angular/material/card";
import { CommonModule } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatListModule } from "@angular/material/list";
import { FlexLayoutModule } from "@angular/flex-layout";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatMenuModule } from "@angular/material/menu";
import { FilterComponent } from "./filter/filter.component";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatTabsModule } from "@angular/material/tabs";

@NgModule({
  imports: [
    CommonModule,
    ApplicantsRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatListModule,
    FlexLayoutModule,
    AngularFireDatabaseModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatTabsModule
  ],
  exports: [],
  declarations: [ApplicantsComponent, FilterComponent],
  providers: []
})
export class ApplicantsModule {}
