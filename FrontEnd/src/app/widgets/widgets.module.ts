import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { DropdownModule } from 'ng2-bootstrap/dropdown';
import { WidgetsComponent } from './widgets.component';
import { WidgetsRoutingModule } from './widgets-routing.module';

@NgModule({
  imports: [
    WidgetsRoutingModule,
    ChartsModule,
    DropdownModule
  ],
  declarations: [ WidgetsComponent ]
})
export class WidgetsModule { }
