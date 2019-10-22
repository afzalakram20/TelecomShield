// Angular
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { Routes, Router, RouterModule } from '@angular/router';


export const route: Routes = 
[
            // { 
            //    path: 'UserProfile',
            // component: UserProfileComponent,
            // },
            
        
];



@NgModule({
	declarations: [  ],
	exports: [ ],
	imports: [
        CommonModule,

 RouterModule.forChild(route),

    ],

	providers: [DatePipe],
})
export class CoreModule {
}
