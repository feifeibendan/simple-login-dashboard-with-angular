import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { ResetComponent } from './pages/reset/reset.component';
import { RegisterComponent } from './pages/register/register.component';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [LoginComponent, ResetComponent, RegisterComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule
  ]
})
export class AuthModule { }
