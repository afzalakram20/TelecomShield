import { Component, OnInit, HostListener, Input } from '@angular/core';
import { dashboardPageService } from './../../../../services/dashboard/dashboard-page-sub-process.service';
import { Observable } from 'rxjs';
import { IDetailMegaProcess } from 'src/app/models/dashboard.model';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {
  options: any = [];
  DetailMegaProcesses: any = [];
  SubProcesses: any = [];
  CategoriesControlList: any = [];
  asideVisible: boolean;
  constructor(private _service: dashboardPageService,
    private store: Store<{ DetailMegaProcess: { DetailMegaProcess: IDetailMegaProcess[] } }>) {
    this.getScreenSize();

  }

  DetailMegaProcess: Observable<{ DetailMegaProcess: IDetailMegaProcess[] }>;

  selectedIndex: any = 0 //it with auto select the carousel button on certain index
  ngOnInit() {
    this.GetDetailMegaProcesses()
  }
  itemsPerSlide: any = 4;
  singleSlideOffset = true;







  GetDetailMegaProcesses() {
    this._service.getDetailMegaProcess(null, null);
    this.DetailMegaProcess = this.store.select('DetailMegaProcess');

    setTimeout(() => {
      this.DetailMegaProcesses = this._service.MegaProcesses;
      this.SubProcesses = this._service.MegaProcesses.sub_mega_process;//For Carousel Buttons
      this.CategoriesControlList = this._service.MegaProcesses.categories_control_list;//3 Boxes at the Bottm it will transfered to asessment component

    }, 1000);


  }

  getCategoriesData(): any {

    return this.CategoriesControlList
  }
  subProcessClicked(id) {
    let SubID = parseInt(id)
    let megaID = parseInt(localStorage.getItem("mid"))
    this._service.getDetailMegaProcess(megaID, SubID)

    // setTimeout(() => {
    //   this.SubProcesses = this._service.MegaProcesses.sub_mega_process;//For Carousel Buttons

    // }, 1000);
  }



  WindowWidth: any;
  @HostListener('window:resize', ['$event'])
  onResize(event) {

    this.WindowWidth = window.innerWidth;

    if (this.WindowWidth >= 768) {
      this.itemsPerSlide = 4;
    }
    else if (this.WindowWidth < 768 && this.WindowWidth > 480) {
      this.itemsPerSlide = 3;
    }
    else if (this.WindowWidth <= 480) {
      this.itemsPerSlide = 2;
    }
    this.ngOnInit();
  }

  getScreenSize(event?) {
    this.WindowWidth = window.innerWidth;

    if (this.WindowWidth >= 768) {
      this.itemsPerSlide = 4;
    }
    else if (this.WindowWidth < 768 && this.WindowWidth > 480) {
      this.itemsPerSlide = 3;
    }
    else if (this.WindowWidth <= 480) {
      this.itemsPerSlide = 2;
    }

  }

}

