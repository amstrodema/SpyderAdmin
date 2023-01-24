import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthLayoutComponent } from './auth-layout.component';
import { AuthLayoutRoutes } from './auth-layout.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ClipboardModule } from 'ngx-clipboard';
import { AuthenticationModule } from 'src/app/pages/authentication/authentication.module';

@NgModule({
  imports: [
    CommonModule,
    AuthLayoutRoutes,
    AuthenticationModule
  ],
  declarations: [AuthLayoutComponent]
})
export class AuthLayoutModule { }
