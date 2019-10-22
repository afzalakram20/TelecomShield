import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainNavComponent } from './layout/admin-layout/main-nav/main-nav.component';
import { MobileCareListComponent } from './views/pages/mobile-care/mobile-care-list/mobile-care-list.component';
// Import Containers








export const routes: Routes = [

  {
    path: '',
    loadChildren: "./views/pages/login/login.module#LoginModule",
  },

  {
    path: 'admin',
    component: MainNavComponent,
    children: [

      {
        path: '',
        loadChildren: './views/pages/dashboard/dashboard.module#DashboardModule',
        //canActivate:[AuthGuard]
      },
      {
        path: 'MegaServices',
        loadChildren: './views/pages/mega-services/mega-services.module#MegaServicesModule',
        //canActivate:[AuthGuard]
      },
      {
        path: 'MobileCare',
        component: MobileCareListComponent
        //canActivate:[AuthGuard]
      },
      {
        path: 'LTE4G',
        loadChildren: './views/pages/four-g-lte/four-g-lte.module#FourGLteModule',
        //canActivate:[AuthGuard]
      },
      {
        path: 'FiveGNetwork',
        loadChildren: './views/pages/five-g-network/five-g-network.module#FiveGNetworkModule',
        //canActivate:[AuthGuard]
      },
      {
        path: 'Interconnect',
        loadChildren: './views/pages/interconnect/interconnect.module#InterconnectModule',
        //canActivate:[AuthGuard]
      },

    ]

  }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
