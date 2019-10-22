import { ISideBarNavigation, IDetailMegaProcess } from '../../models/dashboard.model'
import * as DetailMegaProcess from './dashboard-page.actions';
import { IMegaProcesses } from './../../models/dashboard.model';

const initialState: IDetailMegaProcess = null



export function DetailMegaProcessReducer(state: IDetailMegaProcess = initialState, action: DetailMegaProcess.DetailMegaProcessActions) {

    switch (action.type) {

        case DetailMegaProcess.DetailsMegaProcessList:
            // return action.payload;
            return {
                sub_mega_process: action.payload.sub_mega_process,
                subProcessControls: action.payload.categories_control_list
            }
        default:
            return state;
    }
}