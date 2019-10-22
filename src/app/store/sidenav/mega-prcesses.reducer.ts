import { ISideBarNavigation, IDetailMegaProcess } from '../../models/dashboard.model'
import * as MegaProcessActions from './mega-processes.action';
import { IMegaProcesses } from './../../models/dashboard.model';

const initialState: ISideBarNavigation = {
    mega_process: {
        id: '22',
        name: '33'
    }
};



export function megaProcessReducer(state: ISideBarNavigation = initialState, action: MegaProcessActions.MegaProcessesActions) {
    switch (action.type) {
       
        case MegaProcessActions.Mega_Processes_List:
            return  action.payload;
        
        default:
            return state;
    }
}