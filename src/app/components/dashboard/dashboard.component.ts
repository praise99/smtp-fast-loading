import { Component, OnInit } from '@angular/core';
// import { ModalSize, SuiModalService } from '@richardlt/ng2-semantic-ui';
// import { ViewEmailRequestModal } from '../../modals/view-email-request-modal/view-email-request-modal.component';
import { EmailRequestService } from 'src/app/services/email-request.service';
import { DashboardService } from 'src/app/services/dashboard.services';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PageEvent, } from '@angular/material/paginator';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  pendingArr: boolean[] = [];
  success: any;
  error: any;
  totalItems: number = 0;
  rows: number = 5;
  dashboard: any;
  emailRequests: any;

  cardArr: Array<string> = ['card 1', 'card 2', 'card 3', 'card 4',]
  cardList = {
    applications: 6,
    emailRequests: 26,
    unsubscribers: 3,
    users: 11,
  };

  currentPage: number = 1;
  maxSize: number = 4;
  snackBarRef: any = '';
  pageSlice: any;

  length = 50;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];

  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;

  pageEvent!: PageEvent;
  startIndex: any;
  endIndex: any;


  constructor(
    // private modalService: SuiModalService,
    private dashboardService: DashboardService,
    private emailRequestService: EmailRequestService,
    private _snackBar: MatSnackBar,) { }

  ngOnInit(): void {
    this.getDashboardData();
    this.getEmailRequest(1);
  }


  viewEmailRequestModal(request: any) {
    // this.modalService.open(new ViewEmailRequestModal('View Email Request', request, ModalSize.Tiny))
  }

  getDashboardData() {
    this.callStarted();
    this.dashboardService.getDashboardStatistics().subscribe((res: any) => {
      this.dashboard = res;
      this.error = null;
      this.callCompleted();
    },
      (error: any) => {
        this.callCompleted();
        this.error = error?.error?.message ? error.error.message : error;
      })
  }

  getEmailRequest(page: number) {

    if (this.snackBarRef) {
      this.snackBarRef.dismiss();
    }
    const params = {
      page: page,
      limit: this.rows
    }
    this.callStarted();
    this.emailRequestService.getEmailRequest({ params: params }).subscribe({
      next: (res: any) => {
        this.emailRequests = res.data;
        this.totalItems = res?.totalRecords;
        this.currentPage = page;

        this.callCompleted();
      },
      error: (res: any) => {

        this.error = res?.message ? res.message : res;

        this.snackBarRef = this._snackBar.open(this.error, 'X', {
          // duration: 5000,
          verticalPosition: 'top',
          horizontalPosition: 'center',
          panelClass: ['red-snackbar']
        });

        this.callCompleted();
      }
    })
  }

  callStarted() {
    this.pendingArr.push(true);
  }

  callCompleted() {
    this.pendingArr.pop();
  }

  nextPage(event: PageEvent) {
    this.currentPage = event.pageIndex + 1;
    this.getEmailRequest(event.pageIndex + 1)
  }

  getStatusColor(status: string) {
    switch (status?.toLowerCase()) {
      case 'sent':
        return '#5FD3A4';
      case 'on_queue':
        return '#FFAC33';
      case 'failed':
        return '#FB4037';
      default:
        return '#E4E5E7'
    }
  }

}
