import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ModalSize, SuiModalService } from '@richardlt/ng2-semantic-ui';
import { DatePickerModeType } from '@richardlt/ng2-semantic-ui/modules/datepicker/common/date.picker.mode';
import { AdvanceSearchModal } from '../../modals/advanced-search-modal/advanced-search-modal.component';
import { AppFilter } from '../../models/filter';

/**
 * @author Tari
 * @dateCreated 6 Jul 2023
 * @description app-adv-search-filter component class
 * @modifiedBy Tari
 * @dateModified 21 Aug 2023
 * @reasonForModification Modified onSearchRecords() method
 */
@Component({
  selector: 'app-adv-search-filter',
  templateUrl: './adv-search-filter.component.html',
  styleUrls: ['./adv-search-filter.component.scss']
})
export class AdvSearchFilterComponent {
  @Input() displayRows: number = 5;
  @Input() pending: boolean;
  @Input() field: any;
  @Input() headers: any;
  @Input() headerFilters: any;
  @Input() datePaidSearch: boolean = false;
  @Input() hasAdvancedSearch: boolean = false;
  @Input() hasFilters: boolean = false;
  @Input() searchFilters: any;
  @Input() showExportBtn: boolean = false;
  @Input() filter: AppFilter = new AppFilter();
  @Input() searchText = "";
  @Output() onFilter: EventEmitter<any> = new EventEmitter();
  @Output() advancedSearch: EventEmitter<any> = new EventEmitter();
  @Output() cancelAd: EventEmitter<any> = new EventEmitter();
  @Output() datePaidAd: EventEmitter<any> = new EventEmitter();
  @Output() onSearch: EventEmitter<any> = new EventEmitter();
  @Output() onSort: EventEmitter<any> = new EventEmitter();
  @Output() onDisplayRows: EventEmitter<number> = new EventEmitter();
  @Output() onYearSelect: EventEmitter<any> = new EventEmitter();
  @Output() export: EventEmitter<any> = new EventEmitter();

  selectedItems = [];

  public mode: DatePickerModeType = "year";
  public maxDate = new Date();
  showCancelBtn = false;
  @Input() selectedDate = new Date();
  currentYear: any = this.selectedDate.getFullYear();
  options = [
    { label: "Ascending", value: "asc" },
    { label: "Descending", value: "desc" },
  ];
 sord = "desc";
  filters: any;
  searchTimeout: any;

  constructor(private modalService: SuiModalService) {

  }

  searchTextChanged(ev: any) {
    this.searchText = ev.target.value;
    this.onSearch.emit(this.searchText);
  }

  yearChanged(event) {
    if (event) {
      this.currentYear = event.getFullYear();
      this.onYearSelect.emit(event.getFullYear());
    }
  }

  isFieldAsc(field: string) {
    if (this.filter.sord === "asc" && this.filter.sidx === field) {
      this.filter.sord = "asc";
      this.onFilter.emit(this.filter);
      return;
    }
  }

  isFieldDesc(field: string) {
    if (this.filter.sord === "desc" && this.filter.sidx === field) {
      this.filter.sord = "desc";
      this.onFilter.emit(this.filter);
      return;
    }
  }

  sortByColumn(field: string) {
    return {
      asc: this.isFieldAsc(field),
      desc: this.isFieldDesc(field),
    };
  }

  onDisplayRecords($event) {
    this.onDisplayRows.emit($event);
  }

  /**
   * @author Opeoluwa
   * @dateCreated 16 Aug 2023
   * @description Emits onSearch event after 500 ms
   * @param $event The value to emit
   * @modifiedBy Tari
   * @dateModified 21 Aug 2023
   * @reasonForModification Added 500 ms delay before OnSearch event is emitted
   */
  onSearchRecords($event){
    clearTimeout(this.searchTimeout);
    this.searchTimeout = setTimeout(() => {
      this.onSearch.emit($event)
    }, 500);
  }

  onSortRecords(value) {
    this.onSort.emit(value);
  }

  cancelAdvanceSearch() {
    this.showCancelBtn = false;
    window.localStorage.removeItem("AdSearch");
    this.selectedItems = [];
    this.searchFilters["rules"] = [];
    this.searchFilters["groupOp"] = "";
    this.cancelAd.emit();
  }

  onAdvanceSearch() {
    this.modalService
      .open(
        new AdvanceSearchModal(
          "Advanced Search",
          this.headers,
          [],
          ModalSize.Normal
        )
      )
      .onApprove((payload) => {
        this.showCancelBtn = true;
        this.searchFilters["groupOp"] = payload["groupOp"];
        this.searchFilters["rules"] = payload["rules"];
        this.advancedSearch.emit(this.searchFilters);
      })
      .onDeny(() => {
        // Handle deny action if needed
      });
  }
  
  

  isChecked(choice, field) {
    if (
      this.selectedItems.filter(
        (i) => i["data"] == choice["optionId"] && i["field"] == field
      ).length > 0
    ) {
      return true;
    } else {
      return false;
    }
  }

  singleSelect(choice, event, field) {
    if (event.target.checked) {
      this.selectedItems.push({
        field: field,
        label: choice["optionName"],
        data: choice["optionId"],
      });
      this.searchFilters["rules"].push({
        field: field,
        op: "eq",
        data: choice["optionId"],
      });
    } else {
      this.selectedItems.forEach((id) => {
        if (id["data"] == choice["optionId"] && id["field"] == field) {
          this.selectedItems.splice(this.selectedItems.indexOf(id), 1);
        }
      });
      this.searchFilters["rules"].forEach((id) => {
        if (id["data"] == choice["optionId"] && id["field"] == field) {
          this.searchFilters["rules"].splice(
            this.searchFilters["rules"].indexOf(id),
            1
          );
        }
      });
    }
    this.advancedSearch.emit(this.searchFilters);
  }

  removeSelectedItem(item) {
    this.selectedItems.forEach((id) => {
      if (id["data"] == item["data"] && id["field"] == item["field"]) {
        this.selectedItems.splice(this.selectedItems.indexOf(id), 1);
      }
    });
    this.searchFilters["rules"].forEach((id) => {
      if (id["data"] == item["data"] && id["field"] == item["field"]) {
        this.searchFilters["rules"].splice(
          this.searchFilters["rules"].indexOf(id),
          1
        );
      }
    });
    this.advancedSearch.emit(this.searchFilters);
  }
}
