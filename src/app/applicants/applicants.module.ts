import { MatIconModule } from '@angular/material/icon';
import { ApplicantsRoutingModule } from './applicants-routing.module';
import { NgModule } from '@angular/core';

import { ApplicantsComponent } from './applicants.component';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    imports: [
        CommonModule,
        ApplicantsRoutingModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule
    ],
    exports: [],
    declarations: [ApplicantsComponent],
    providers: [],
})
export class ApplicantsModule { }
