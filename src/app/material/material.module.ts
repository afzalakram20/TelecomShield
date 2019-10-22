import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
//importing from library

import {
  MatButtonModule, MatPaginatorModule, MatSortModule, MatInputModule, MatTooltipModule,
  MatDialogModule,
  MatRadioModule,
  MatTableModule,
  MatSelectModule,
  MatMenu,
  MatMenuModule,
  MatCardModule,
  MatSlideToggleModule,


} from '@angular/material'

//declaration for import and export
const MaterialComponents = [
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatMenuModule,
  MatPaginatorModule,
  MatSortModule,
  MatInputModule,
  MatCheckboxModule,
  MatTooltipModule,
  MatDialogModule,
  MatRadioModule,
  MatTableModule,
  MatSelectModule,
  MatSlideToggleModule,

];


@NgModule({

  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
