import { MatIconModule } from '@angular/material/icon';
import { ApplicantsRoutingModule } from './applicants-routing.module';
import { NgModule } from '@angular/core';

import { ApplicantsComponent } from './applicants.component';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatMenuModule } from '@angular/material/menu';

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
        MatMenuModule
    ],
    exports: [],
    declarations: [ApplicantsComponent],
    providers: [],
})
export class ApplicantsModule { }
