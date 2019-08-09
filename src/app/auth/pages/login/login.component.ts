import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AlertService } from '../../../shared/services/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  showModal: boolean;

  constructor(
  	private formBuilder: FormBuilder,
  	private alertService: AlertService
  ) { }

  ngOnInit() {
  	this.loginForm = this.formBuilder.group({
   	  email: ["", [Validators.required, Validators.email]],
   	  password: ["", [Validators.required]]
  	})
  }

  onSubmit() {
  	if (this.loginForm.invalid) {
  		this.alertService.alert();
  		this.showModal = true;
  		return;
  	}
  }
}
