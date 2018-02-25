import { NgModule } from '@angular/core';

import { LoginComponent } from './login.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatSnackBarModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { LoginRoutingModule } from '@app/login/login-routing.module';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatSnackBarModule,
        // LoginRoutingModule,
        MatFormFieldModule,
        MatInputModule
    ],
    exports: [
        LoginComponent
    ],
    declarations: [LoginComponent],
    providers: [],
})
export class LoginModule { }
