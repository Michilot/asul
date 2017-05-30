import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsComponent } from './cmp-button/buttons.component';
import { CardsComponent } from './cards.component';
import { FormsComponent } from './forms.component';
import { SocialButtonsComponent } from './social-buttons.component';
import { SwitchesComponent } from './switches.component';
import { TablesComponent } from './tables.component';

// Modal Component
import { ModalModule } from 'ng2-bootstrap/modal';
import { ModalsComponent } from './modals.component';

// Tabs Component
import { TabsModule } from 'ng2-bootstrap/tabs';
import { TabsComponent } from './tabs.component';

// Components Routing
import { ComponentsRoutingModule } from './components-routing.module';
/*import { CmpHomeComponent } from './cmp-home/cmp-home.component';
import { CmpLoginComponent } from './cmp-login/cmp-login.component';*/

import { AlertModule } from 'ng2-bootstrap/alert';
import { AlertComponent } from './alerts.component';
import { CmpSoatcotizarComponent } from './cmp-soatcotizar/cmp-soatcotizar.component';

/*import { CmpFsComponent } from './cmp-fs/cmp-fs.component';*/
/*import { GoogleChart } from './../_directives/dir-googlechart/gc-directive';*/

@NgModule({
    imports: [
        ComponentsRoutingModule,
        ModalModule.forRoot(),
        AlertModule.forRoot(),
        TabsModule,
        CommonModule
    ],
    declarations: [
        ButtonsComponent,
        CardsComponent,
        FormsComponent,
        ModalsComponent,
        SocialButtonsComponent,
        SwitchesComponent,
        TablesComponent,
        TabsComponent,
        AlertComponent,
        CmpSoatcotizarComponent
    ]
})
export class ComponentsModule { }
