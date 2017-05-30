import { Injectable,  ComponentRef, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';

import { CmpSpinnerComponent } from './../../_components/cmp-spinner/cmp-spinner.component';


@Injectable()
export class SrvSpinnerService {

  private blockUI: ComponentRef<CmpSpinnerComponent>;
  public vRef: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  public start() {
    let factory = this.componentFactoryResolver.resolveComponentFactory(CmpSpinnerComponent);
    this.blockUI = this.vRef.createComponent(factory);
  }

  public stop() {
    if (this.blockUI) {
      this.blockUI.destroy();
    }
  }


}
