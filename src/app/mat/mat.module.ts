import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';


const importsAndExports = [
  MatCardModule,
  MatButtonModule,
  MatExpansionModule,
  MatListModule
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
