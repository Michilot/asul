import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { DropdownModule } from 'ng2-bootstrap/dropdown';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

// import { GoogleChart } from './../_directives/dir-googlechart/gc-directive';
 import { nvD3 } from 'ng2-nvd3';

@NgModule({
  imports: [
    DashboardRoutingModule,
    ChartsModule,
    DropdownModule
  ],
  declarations: [
    DashboardComponent,
    nvD3
    /*GoogleChart*/
  ]
})
export class DashboardModule { }
