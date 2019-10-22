import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { applicationUrl } from '../applicationUrl';
import { Store } from '@ngrx/store';
import { ISideBarNavigation } from 'src/app/models/dashboard.model';
import * as MegaProcesses from '../../store/sidenav/mega-processes.action'

@Injectable({
    providedIn: 'root'
})

export class SideNavService {
    url: any = applicationUrl.endpoint;
    constructor(private http: HttpClient,
        private store: Store<{ MegaProcessesList: { DetailMegaProcess: ISideBarNavigation[] } }>

    ) { }



    getSideNav() {
        let reqHeader = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': localStorage.getItem('token') });
        let data4 = {
            '': ''
        };

        let data5 = JSON.stringify(data4)

        return this.http.post(this.url + "/client/sidebar_navigation", data5).subscribe((res: any) => {
            this.store.dispatch(new MegaProcesses.megaProcessesList(res))

        })
    }




}
