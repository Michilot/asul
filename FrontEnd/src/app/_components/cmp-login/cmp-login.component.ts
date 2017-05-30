import { Component, OnInit, ViewContainerRef, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService, AuthenticationService, SrvSpinnerService, SrvHideService } from './../../_services/index';
import * as CryptoJS from '../../../../node_modules/crypto-js';

declare var $: any;

@Component({
  selector: 'frmLogin',
  providers: [SrvSpinnerService],
  templateUrl: './cmp-login.component.html',
  styleUrls: ['./cmp-login.component.scss']
})

export class CmpLoginComponent implements OnInit {
  frmLogin: FormGroup;
  loading: boolean;
  returnUrl: string;
  sMensajeError: string;
  bShowerror: boolean;
  vEncriptUser: any;

  constructor(fb: FormBuilder,
    public router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService,
    private viewContainerRef: ViewContainerRef,
    private srvHideService: SrvHideService,
    private blockUI: SrvSpinnerService) {

    this.blockUI.vRef = this.viewContainerRef;
    this.mProgressBar();
    this.frmLogin = fb.group({
      'username': [null, Validators.required],
      'spassword': [null, Validators.required]
    });
  }

  ngOnInit() {
    this.loading = false;
    localStorage.removeItem('id_token');
  }

  mProgressBar() {
    $(document).ready(function () {
      $.mpb('show', { value: [0, 50], speed: 5 });
      $.mpb('update', {
        value: 100, speed: 5, complete: function () {
          $('.mpb').fadeOut(200, function () {
            $(this).remove();
          });
        }
      });
    });
  }

  cleanMessage() {
    this.sMensajeError = '';
    this.bShowerror = false;
  }

  submitForm() {
    event.preventDefault();
    let susername = this.frmLogin.controls['username'].value;
    let spassword = this.frmLogin.controls['spassword'].value;

    this.loading = true;
    this.blockUI.start();
    this.authenticationService.login(susername, spassword)
      .subscribe(
      data => {
        if (data.result === false) {
          this.blockUI.stop();
          this.sMensajeError = 'Por favor verifique su información de acceso.';
          this.bShowerror = !data.result;
        } else {
          this.vEncriptUser = this.srvHideService.strHide(data.oUsuario[0].id.toString());
          localStorage.setItem('BRpP7cze', data.id_token); // ID DE TOKEN
          localStorage.setItem('VuERSrLp', this.vEncriptUser.toString()); // ID DE USUARIO
          this.blockUI.stop();
          this.router.navigate(['/maindashboard']);
        }

      },
      error => {
        console.log(error);
        this.blockUI.stop();
        this.sMensajeError = error;
        this.bShowerror = true;
      });



  }

}
