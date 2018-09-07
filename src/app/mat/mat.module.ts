import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const importsAndExports = [
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
