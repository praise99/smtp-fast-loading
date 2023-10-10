import { NgModule } from '@angular/core';
// import { SuiModule } from '@richardlt/ng2-semantic-ui';
// import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AdvSearchFilterComponent } from './components/adv-search-filter/adv-search-filter.component';
import { AdvancedSearchModalComponent } from './modals/advanced-search-modal/advanced-search-modal.component';
import { FieldErrorComponent } from './components/field-error/field-error.component';
import { ConfirmModalComponent } from './modals/confirm-modal/confirm-modal.component';
import { EmptyStateComponent } from './components/empty-state/empty-state.component';

const SHARED_MODULES: Array<any> = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  // FlexLayoutModule,
  // SuiModule
];

@NgModule({
  declarations: [
    AdvSearchFilterComponent,
    AdvancedSearchModalComponent,
    FieldErrorComponent,
    ConfirmModalComponent,
    EmptyStateComponent
  ],
  imports: [
    ...SHARED_MODULES
  ],
  exports: [
    ...SHARED_MODULES,
    AdvSearchFilterComponent,
    FieldErrorComponent,
    EmptyStateComponent
  ]
})
export class SharedModule { }
