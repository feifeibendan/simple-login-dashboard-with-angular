import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AlertComponent } from './components/alert/alert.component';
import { AlertState, AlertService, AlertTemplateDirective } from './services/alert.service';

@NgModule({
  declarations: [
    AlertComponent,
    AlertTemplateDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
  	CommonModule,
  	FormsModule,
    ReactiveFormsModule,
    AlertComponent,
    AlertTemplateDirective
  ],
  providers: [
    AlertService,
    AlertState
  ]
})
export class SharedModule { }
