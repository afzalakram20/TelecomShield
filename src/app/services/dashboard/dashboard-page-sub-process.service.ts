import { Injectable, EventEmitter } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { applicationUrl } from '../applicationUrl';
import { Subject, BehaviorSubject } from 'rxjs';
import { Store } from '@ngrx/store';
import { ISideBarNavigation } from 'src/app/models/dashboard.model';
import * as DetailMegaProcesses from '../../store/dashboard/dashboard-page.actions'





@Injectable()
export class dashboardPageService {
    isSidebarVisible: boolean;
    url: any = applicationUrl.endpoint;
    MegaProcesses: any = [];


    private _TeacherMessageSource = new Subject<string>();
    teacherMessage$ = this._TeacherMessageSource.asObservable();
    constructor(private http: HttpClient, private store: Store<{ MegaProcessesList: { DetailMegaProcess: ISideBarNavigation[] } }>
    ) {

    }

    sendMessage(message: string) {
        this._TeacherMessageSource.next(message);


    }


    getDetailMegaProcess(megaProcess, subProcess) {

        let reqHeader = new HttpHeaders({ 'Content-Type': 'application/json' });
        let data4 = {
            mega_process_id: megaProcess,
            sub_mega_process_id: subProcess
        };
        let data5 = JSON.stringify(data4)
        return this.http.post(this.url + '/client/detail_mega_process', data5, { headers: reqHeader })
            .subscribe((res: any) => {

                this.store.dispatch(new DetailMegaProcesses.DetailMegaProcessList(res))
            })
    }
}