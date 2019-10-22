import { Component, OnInit } from '@angular/core';
import { dashboardPageService } from 'src/app/services/dashboard/dashboard-page-sub-process.service';

@Component({
  selector: 'app-mobile-care-list',
  templateUrl: './mobile-care-list.component.html',
  styleUrls: ['./mobile-care-list.component.scss']
})
export class MobileCareListComponent implements OnInit {
  clapMessage;
  constructor(private _service: dashboardPageService) { }

  ngOnInit() {

    this._service.teacherMessage$.subscribe(
      message => {
        this.clapMessage = message
        alert("asd")
      }
    );

  }


  clap() {
    console.log(this.clapMessage)
  }


}
