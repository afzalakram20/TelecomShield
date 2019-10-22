export interface ICategoriesControlList {
    category: any;
    controls: ControlsList[]
}

export interface ControlsList {
    name: any;
    id: any;
}








export interface IDetailMegaProcess {
    categories_control_list: ICatagoriesControlList;
    sub_mega_process: IControls
}
export interface ICatagoriesControlList {
    category: any;
    id: any;
    controls: IControls

}
export interface IControls {
    id: any;
    name: any;
}





export interface ISideBarNavigation {
    mega_process: {
        id: any,
        name: any
    }
}
export interface IMegaProcesses {
    id: any,
    name: any
}