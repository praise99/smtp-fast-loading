import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  ComponentModalConfig,
  ModalSize,
  SuiModal,
} from '@richardlt/ng2-semantic-ui';

interface IAdvanceSearchModalContext {
  header: any;
  title?: string;
  fieldx?: any[];
}
interface IHeaders {
  field?: string;
  label?: string;
  type?: string;
  choices?: any[];
  op?: string;
  data?: any;
}

/**
 * @author Tari
 * @dateCreated 6 Jul 2023
 * @description app-adv-search-filter component class
 * @modifiedBy Tari
 * @dateModified 21 Aug 2023
 * @reasonForModification Autofill field select with first field name
 */
@Component({
  selector: 'app-advanced-search-modal',
  templateUrl: './advanced-search-modal.component.html',
  styleUrls: ['./advanced-search-modal.component.scss'],
})
export class AdvancedSearchModalComponent {
  @Input() searchName: string = '';
  @Output() advancedSearchEmitter: EventEmitter<any> = new EventEmitter<any>();
  headers: any[] = [];
  @Output() submitSearch = new EventEmitter();
  @Output() onCancel = new EventEmitter();
  fieldx: Array<IHeaders> = [];
  fieldMap = new Map();
  operators = [
    { id: 'cn', name: 'contains' },
    { id: 'nc', name: 'does not contain' },
    { id: 'eq', name: 'equal' },
    { id: 'ne', name: 'not equal' },
    { id: 'lt', name: 'less' },
    { id: 'le', name: 'less or equal' },
    { id: 'gt', name: 'greater' },
    { id: 'ge', name: 'greater or equal' },
    { id: 'bw', name: 'begins with' },
    { id: 'bn', name: 'does not begin with' },
    { id: 'ew', name: 'ends with' },
    { id: 'en', name: 'does not end with' },
  ];

  oldoperators = [
    { id: 'cn', name: 'contains' },
    { id: 'eq', name: 'equal' },
  ];

  groupOperators = [
    { id: 'and', name: 'and' },
    { id: 'or', name: 'or' },
  ];

  mode = 'date';

  searchFilter = {
    groupOp :'and',
    rules: [
    ],
  };
  selectedFilters: any[] = []; // Initialize an array to store selected filters
  selectedFilter: string = '';
  selectForm = new FormControl();

  constructor(public modal: SuiModal<IAdvanceSearchModalContext, void, void>) {
    this.headers = modal.context.header;
    this.fieldx = modal.context.fieldx || [];
    this.selectForm.setValue(this.headers?.length ? this.headers[0] : "");
    console.log(this.fieldx);
    console.log(this.modal.context);
  }
/**
 * @author Opeoluwa
 * @description Tracks items in a list by their index or date information.
 * @param index - Index of the item.
 * @param value - The item being tracked.
 * @returns A unique identifier for the tracked item.
 */
  trackByIndex(index: number, value: any) {
    if (value.type === 'date' && value.data instanceof Date) {
      return value.id;
    } else if (value.type === 'date' && !(value.date instanceof Date)) {
      let d = value.data.split('.')[0];
      value.data = new Date(d);
      return value.id;
    } else {
      return value.id;
    }
  }
/**
 * @author Opeoluwa
 * @description Changes the condition for grouping in the search filter.
 * @param value - The new group operator value.
 * @dateCreated 20th Aug 2023
 */
  changeCondition(value: any) {
    this.searchFilter.groupOp = value.target.value;
    console.log(this.changeCondition,'this is opeartors')
  }
/** 
 * @author Opeoluwa
 * @description Sets the selected filter value based on user interaction.
 * @param ev - The event object containing the selected value.
 * @dateCreated 20th Aug 2023
 */
  setSelectedFilter(ev: any) {
    if (ev && ev.target && ev.target.value) {
      this.selectedFilter = ev.target.value;
    }
  }
  
/**
 * @author Opeoluwa
 * @description Adds a new filter based on the selected value and pushes new values into an array
 * @dateCreated 20th Aug 2023
 * @modifiedBy Opeoluwa
 * @reasonForModification Pushing the selectedFilter value into selectedFilters Array so it won't only search for the last filter added
 */
add() {
  console.log('Add function triggered');
  if (this.selectForm.value && this.selectForm.value !== '') {
    console.log('Adding value:', this.selectForm.value);
    const selectedFilter = { ...this.selectForm.value, data: '' };
    this.fieldx.push(selectedFilter);
    console.log('this.fieldx after push:', this.fieldx);
  }
}

  
 /**
 * @author Opeoluwa
 * @description Removes a filter at the specified index.
 * @param index - The index of the filter to be removed.
 * @dateCreated 20th Aug 2023
 */ 
  remove(index) {
    this.fieldx.splice(index, 1);
  }

  setRule(item) { }
/**
 * @author Opeoluwa 
 * @description Changes operators based on user input event.
 * @param event - The event object containing the contractorType information.
 * @dateCreated 20th Aug 2023
 */
  changeOperators(event) {
    if (event.contractorType === null) {
      this.fieldx[event.index].op = 'eq';
    } else {
      this.fieldx[event.index].op = 'regex';
    }
  }
  /**
 * @author Opeoluwa
 * @dateCreated 20th Aug 2023
 * @description Submits the advanced search and emits the search filter.*
 */
  submit() {
    window.localStorage.setItem('AdSearch', JSON.stringify(this.fieldx));
    const filteredFields = this.fieldx.map((item) => {
      if (item.type === 'date' && item.data instanceof Date) {
        const date = new Date(item.data.getFullYear(), item.data.getMonth(), item.data.getDate(), 1, 0, 0);
        return { field: item.field, op: item.op, data: date.toISOString().split('.')[0] };
      } else {
        return { field: item.field, op: item.op, data: item.data };
      }
    });
    const search: any = {
      groupOp: this.searchFilter.groupOp,
      rules: filteredFields,
    };
    
    this.modal.approve(search);
    console.log(search, 'this is search filter');
  }
  
  
/**
 * @author Opeoluwa
 * @description Cancels the modal and denies the action.
 * @dateCreated 20th Aug 2023
 */
  cancel() {
    this.modal.deny(null);
  }
}

export class AdvanceSearchModal extends ComponentModalConfig<
  IAdvanceSearchModalContext,
  void, void> 
  { constructor(
    title: string,
    header: any,
    fieldx: [],
    size: ModalSize = ModalSize.Small
  ) 
  {
    super(AdvancedSearchModalComponent, { title, header, fieldx });
    this.isClosable = false;
    this.transitionDuration = 200;
    this.size = size;
    this.isFullScreen = false;
    this.isInverted = false;
  }
}
