import { IDetailMegaProcess, ISideBarNavigation } from 'src/app/models/dashboard.model';
import { Action } from '@ngrx/store';


export const DetailsMegaProcessList = 'DETAILS_MEGA_PROCESS_LIST';

export class DetailMegaProcessList implements Action {

    readonly type = DetailsMegaProcessList;
    constructor(public payload: IDetailMegaProcess) { }
}

export type DetailMegaProcessActions = DetailMegaProcessList 