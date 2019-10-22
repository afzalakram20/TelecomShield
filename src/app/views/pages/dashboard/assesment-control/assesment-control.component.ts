import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { IDetailMegaProcess } from 'src/app/models/dashboard.model';


@Component({
  selector: 'app-assesment-control',
  templateUrl: './assesment-control.component.html',
  styleUrls: ['./assesment-control.component.scss']
})
export class AssesmentControlComponent implements OnInit {
  categories: any = [];
  constructor(private store: Store<{ DetailMegaProcess: { DetailMegaProcess: IDetailMegaProcess[] } }>) { }
  @Input() categoriesData: any;

  DetailMegaProcess: Observable<{ DetailMegaProcess: IDetailMegaProcess[] }>;
  ngOnInit() {
    this.DetailMegaProcess = this.store.select('DetailMegaProcess');
  }
  ngOnChanges() {
    this.categories = this.categoriesData
    console.log("in change", this.categories);
  }


}
