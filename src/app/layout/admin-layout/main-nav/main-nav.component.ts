import { Component, OnInit, HostListener } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, from } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Route, Router } from '@angular/router';
import { getLocaleEraNames } from '@angular/common';
import { SideNavService } from 'src/app/services/sidenav/sidenav.service';
import { dashboardPageService } from 'src/app/services/dashboard/dashboard-page-sub-process.service';
import { Store } from '@ngrx/store';
import { ISideBarNavigation } from 'src/app/models/dashboard.model';
import { async } from '@angular/core/testing';


@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {
  color = 'accent';
  checked = false;
  disabled = false;
  pp;
  DetailMegaProcess: Observable<{ DetailMegaProcess: ISideBarNavigation[] }>;
  selectedIndex: any = 0;
  userName = "";
  sideNav: any = [];
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private route: Router,
    private _service: SideNavService, private _dashboardService: dashboardPageService,
    private store: Store<{ MegaProcessesList: { DetailMegaProcess: ISideBarNavigation[] } }>
  ) { }
  ngOnInit() {
    this.getSideNav();


    this.getName();
    this.changeTheme();


  }




  getName() {
    this.userName = localStorage.getItem('name');
  }
  getSideNav() {

    this._service.getSideNav() //call the fucction in  service
    this.DetailMegaProcess = this.store.select('MegaProcessesList');



  }
  greetMessage() {

    this._dashboardService.sendMessage("Good Morining")
  }
  sideNavOptionClicked(id) {
    parseInt(id);
    this._dashboardService.getDetailMegaProcess(id, null)

  }



  logOut() {
    localStorage.removeItem('token');
    this.route.navigate(['']);
  }



  changeTheme() {

    let checkbox = document.querySelector('input[name=theme]');
    checkbox.addEventListener('change', function () {

      if (this.checked) {
        trans()
        document.documentElement.setAttribute('data-theme', 'blue')
      }
      else {
        trans()
        document.documentElement.setAttribute('data-theme', 'yellow')
      }
    })
    let trans = () => {
      document.documentElement.classList.add('transition');
      window.setTimeout(() => {
        document.documentElement.classList.remove('transition')
      }, 1000)
    }
  }


}
