import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { SrvSpinnerService } from './../_services/index';

@Component({
  selector: 'app-dashboard',
  providers: [SrvSpinnerService],
  templateUrl: './full-layout.component.html'
})
export class FullLayoutComponent implements OnInit {

  API: String;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private blockUI: SrvSpinnerService
  ) {
    this.blockUI.vRef = this.viewContainerRef;
  }


  public disabled: boolean = false;
  public status: { isopen: boolean } = { isopen: false };

  public toggled(open: boolean): void {
    console.log('Dropdown is now: ', open);
  }

  public toggleDropdown($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }

  ngOnInit(): void { }
}
