import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { DashboardGraphsComponent } from './dashboard-graphs/dashboard-graphs.component';
import { MaterialModule } from 'src/app/material/material.module';
import { CarouselModule } from 'ngx-bootstrap'
import { graphServices } from 'src/app/services/dashboard/dashboard-graph.services';
import { AssesmentControlComponent } from './assesment-control/assesment-control.component';
import { dashboardPageService } from 'src/app/services/dashboard/dashboard-page-sub-process.service';
import { MainNavComponent } from 'src/app/layout/admin-layout/main-nav/main-nav.component';




const routes: Routes = [


  {
    path: 'dashboard',
    component: DashboardPageComponent,
  },

];


@NgModule({
  declarations: [DashboardPageComponent, DashboardGraphsComponent, AssesmentControlComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    CarouselModule.forRoot(),
  ]
  , providers: [graphServices, dashboardPageService]
})
export class DashboardModule { }
