import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyStateComponent } from './empty-state/empty-state.component';
import { MaterialModule } from 'src/app/material.module';



@NgModule({
  declarations: [
    EmptyStateComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    EmptyStateComponent,
    MaterialModule,
  ]
})
export class SharedModule { }
