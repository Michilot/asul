import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { VehiculoService, SrvSpinnerService } from './../../_services/index';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cmp-soatcotizar',
  providers: [SrvSpinnerService],
  templateUrl: './cmp-soatcotizar.component.html',
  styleUrls: ['./cmp-soatcotizar.component.scss']
})
export class CmpSoatcotizarComponent implements OnInit {
  // frmCotizarSoat: FormGroup;
  loUsos: any;
  selectedUso: null;

  constructor(
    private vehiculoService: VehiculoService,
    private viewContainerRef: ViewContainerRef,
    private blockUI: SrvSpinnerService
  ) {
    this.blockUI.vRef = this.viewContainerRef;
    this.cargarListados();
  }

  cargarListados() {
    this.blockUI.start();
    this.listarUsos();
    this.blockUI.stop();
  }

  listarUsos() {
    this.vehiculoService.ObtenerUsos('1')
      .subscribe(
      result => {
        this.loUsos = result.data;
      },
      error => {
        console.log(error);
      });
  }

  ngOnInit() {
  }

}
