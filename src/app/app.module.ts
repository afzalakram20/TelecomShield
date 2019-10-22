import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MainNavComponent } from './layout/admin-layout/main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { InterceptorTokenService } from './core/auth/interceptor/interceptor-token.service';
import { AuthGuard } from './core/auth/guards/auth-guard.guard';
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ToastrModule } from 'ngx-toastr';
import { SideNavService } from './services/sidenav/sidenav.service';
import { dashboardPageService } from './services/dashboard/dashboard-page-sub-process.service';
import { MainNavComponent } from './layout/admin-layout/main-nav/main-nav.component';
import { MobileCareListComponent } from './views/pages/mobile-care/mobile-care-list/mobile-care-list.component';
import { DashboardModule } from './views/pages/dashboard/dashboard.module';
import { StoreModule } from '@ngrx/store';
import { megaProcessReducer } from './store/sidenav/mega-prcesses.reducer';
import { DetailMegaProcessReducer } from './store/dashboard/dashboard-page.reducer';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent, MobileCareListComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MaterialModule,
    FlexLayoutModule,
    CarouselModule.forRoot(),
    HttpClientModule,
    ToastrModule.forRoot(),
    StoreModule.forRoot({ MegaProcessesList: megaProcessReducer,DetailMegaProcess: DetailMegaProcessReducer }),

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorTokenService,
      multi: true

    }

    , AuthGuard,
    SideNavService, dashboardPageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
