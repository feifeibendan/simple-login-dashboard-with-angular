import { Component, OnInit } from '@angular/core';

import { AlertState } from '../../services/alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  constructor(
  	private state: AlertState
  ) { }

  ngOnInit() {
  }

  dismiss() {
  	this.state.modal.dismiss();
  }

  close() {
  	this.state.modal.close();
  }
}