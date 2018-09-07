import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatCardModule, MatExpansionModule, MatListModule, MatTableModule, MatSortModule} from '@angular/material';

const importsAndExports = [
  MatCardModule,
  MatButtonModule,
  MatExpansionModule,
  MatListModule,
  MatTableModule,
  MatSortModule
];

@NgModule({
  imports: [
    CommonModule,
    ...importsAndExports
  ],
  exports: [
    ...importsAndExports
  ],
  declarations: []
})
export class MatModule { }
