import { IDetailMegaProcess, ISideBarNavigation } from 'src/app/models/dashboard.model';
import { Action } from '@ngrx/store';


export const Mega_Processes_List = 'MEGA_PROCESSES_LIST';

export class megaProcessesList implements Action {


    readonly type = Mega_Processes_List;
    constructor(public payload: ISideBarNavigation) { }
}




export type MegaProcessesActions = megaProcessesList 