/*import { NgModule } from '@angular/core';*/
import { Routes } from '@angular/router';

// Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';
import { SimpleLayoutComponent } from './layouts/simple-layout.component';

// Custom
// import { CmpHomeComponent } from './_components/cmp-home/cmp-home.component';
import { CmpLoginComponent } from './_components/cmp-login/cmp-login.component';
// import { CmpFsComponent } from './_components/cmp-fs/cmp-fs.component';
// import { Signup } from './signup';
import { AuthGuard } from './_components/cmp-common/auth.guard';


/*export const routes: Routes = [*/
export const CmpRoutes: Routes = [
  { path: '', component: CmpLoginComponent },
  { path: 'login', component: CmpLoginComponent },
  /*{ path: '**', component: CmpLoginComponent },*/
  /*  { path: 'login', component: CmpLoginComponent },
   { path: 'home', component: CmpHomeComponent, canActivate: [AuthGuard] },
   { path: 'fulllayout', component: FullLayoutComponent },
   { path: '**', component: CmpLoginComponent },*/
  /*  {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },*/
  {
    path: 'maindashboard',
    component: FullLayoutComponent,
    canActivate: [AuthGuard],
    data: {
      title: 'Inicio'
    },
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: './_components/cmp-dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'components',
        loadChildren: './_components/components.module#ComponentsModule'
      },
      {
        path: 'icons',
        loadChildren: './icons/icons.module#IconsModule'
      },
      {
        path: 'widgets',
        loadChildren: './widgets/widgets.module#WidgetsModule'
      },
      {
        path: 'charts',
        loadChildren: './chartjs/chartjs.module#ChartJSModule'
      }
    ]
  },
  {
    path: 'pages',
    component: SimpleLayoutComponent,
    data: {
      title: 'Pages'
    },
    children: [
      {
        path: '',
        loadChildren: './pages/pages.module#PagesModule',
      }
    ]
  }
];

/*@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }*/
