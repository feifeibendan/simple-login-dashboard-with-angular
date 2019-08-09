import { Injectable, Directive, TemplateRef } from '@angular/core';

import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { AlertComponent } from '../components/alert/alert.component';

@Injectable({
  providedIn: 'root'
})
export class AlertState {
  modal: NgbModalRef;
  template: TemplateRef<any>;
}

@Injectable({
  providedIn: 'root'
})	
export class AlertService {

  constructor(
  	private modalService: NgbModal,
  	private state: AlertState
  ) { }

  alert(): Promise<any> {
    this.state.modal = this.modalService.open(this.state.template, {centered: true});
  }
}

@Directive({
  selector: "[alert]"
})
export class AlertTemplateDirective {
  constructor(alertTemplate: TemplateRef<any>, state: AlertState) {
    state.template = alertTemplate;
  }
}