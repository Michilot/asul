import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { DropdownModule } from 'ng2-bootstrap/dropdown';
import { TabsModule } from 'ng2-bootstrap/tabs';
import { NAV_DROPDOWN_DIRECTIVES } from './shared/nav-dropdown.directive';

import { ChartsModule } from 'ng2-charts/ng2-charts';
import { SIDEBAR_TOGGLE_DIRECTIVES } from './shared/sidebar.directive';
import { AsideToggleDirective } from './shared/aside.directive';
import { BreadcrumbsComponent } from './shared/breadcrumb.component';

// Routing Module
//import { AppRoutingModule } from './app.routing';

// Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';
import { SimpleLayoutComponent } from './layouts/simple-layout.component';

// Custom
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule, Http, RequestOptions } from '@angular/http';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { AuthGuard } from './_components/cmp-common/auth.guard';
import { CmpLoginComponent } from './_components/cmp-login/cmp-login.component';
import { CmpHomeComponent } from './_components/cmp-home/cmp-home.component';
import { CmpFsComponent } from './_components/cmp-fs/cmp-fs.component';
import { CmpRoutes } from './app.routing';
import { RouterModule } from '@angular/router';
/*import { GoogleChart } from './_directives/dir-googlechart/gc-directive';*/
import { AlertService, AuthenticationService, UserService, SrvReportService, ConstantsService, VehiculoService } from './_services/index';
import { ToasterModule } from 'angular2-toaster';
import { DragulaModule } from 'ng2-dragula';

import { CmpSpinnerComponent } from './_components/cmp-spinner/cmp-spinner.component';
import { SrvSpinnerService } from './_services/srv-spinner/srv-spinner.service';
import { SrvHideService } from './_services/srv-hide/srv-hide';


export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
    tokenName: 'BRpP7cze',
    tokenGetter: (() => localStorage.getItem('BRpP7cze')),
    globalHeaders: [{ 'Content-Type': 'application/json' }],
  }), http, options);
}

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    FullLayoutComponent,
    SimpleLayoutComponent,
    NAV_DROPDOWN_DIRECTIVES,
    BreadcrumbsComponent,
    SIDEBAR_TOGGLE_DIRECTIVES,
    AsideToggleDirective,
    CmpLoginComponent,
    CmpHomeComponent,
    CmpFsComponent,
    CmpSpinnerComponent
    /* GoogleChart*/
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(CmpRoutes, { useHash: true }),
    DropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    ToasterModule,
    DragulaModule
  ],
  providers: [
    AuthGuard,
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    },
    AlertService,
    AuthenticationService,
    UserService,
    SrvSpinnerService,
    SrvReportService,
    ConstantsService,
    VehiculoService,
    SrvHideService
  ],
  entryComponents: [
    CmpSpinnerComponent
  ],
})
export class AppModule { }
