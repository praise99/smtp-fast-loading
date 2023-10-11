import { Component, OnInit } from '@angular/core';
// import { ModalSize, SuiModalService } from '@richardlt/ng2-semantic-ui';
// import { ViewEmailRequestModal } from '../../modals/view-email-request-modal/view-email-request-modal.component';
import { DashboardService } from '../../services/dashboard.service';
import { EmailRequestService } from 'src/app/services/email-request.service';

/**
 * @author Tari
 * @dateCreated 2 Aug 2023
 * @description app-dashboard component class
 * @modifiedBy Tari
 * @dateModified 29 Aug 2023
 * @reasonForModification Create getStatusColor() method
 */

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
  rows: number = 5  ;
  dashboard: any;
  emailRequests: any;

  currentPage: number = 1;
  maxSize: number = 4;

  constructor(
    // private modalService: SuiModalService,
    private dashboardService: DashboardService,
    private emailRequestService: EmailRequestService) {}

  ngOnInit(): void {
    this.getDashboardStatistics();
    this.getEmailRequest(1);
  }

  /**
   * @author Tari
   * @dateCreated 2 Aug 2023
   * @description Opens a modal window to view details of a selected email request
   * @param request An object containing details of the selected email request
   * @modifiedBy Tari
   * @dateModified 22 Aug 2023
   * @reasonForModification Pass email request details to modal
   */
  viewEmailRequestModal(request: any) {
    // this.modalService.open(new ViewEmailRequestModal('View Email Request', request, ModalSize.Tiny))
  }

  /**
   * @author Tari
   * @dateCreated 2 Aug 2023
   * @description Makes an HTTP GET request to get dashboard statistics and updates the class 'dashboard' property.
   */
  getDashboardStatistics() {
    this.callStarted();
    this.dashboardService.getDashboardStatistics().subscribe({
      next: (res: any) => {
        this.dashboard = res;
        this.error = null;
        this.callCompleted();
      },
      error: (error: any) => {
        this.callCompleted();
        this.error = error?.error?.message ? error.error.message : error;
      }
    })
  }

  /**
   * @author Tari
   * @dateCreated 2 Aug 2023
   * @description Makes an HTTP GET request to get email requests and updates the class 'emailRequest' property.
   * @param page Retrieve records based on this page number
   */
  getEmailRequest(page: number) {
    const params = {
      page: page,
      limit: this.rows
    }
    this.callStarted();
    this.emailRequestService.getEmailRequest({params}).subscribe({
      next: (res: any) => {
        console.log(res);
        this.emailRequests = res.data;
        this.totalItems = res?.totalRecords;
        this.callCompleted();
      },
      error: (res: any) => {
        console.log(res);
        this.callCompleted();
      }
  })
  }

  /**
   * @author Tari
   * @dateCreated 2 Aug 2023
   * @description Adds boolean true to the pendingArr array
   */
  callStarted() {
    this.pendingArr.push(true);
  }

  /**
   * @author Tari
   * @dateCreated 2 Aug 2023
   * @description Removes a value from the pendingArr array
   */
  callCompleted() {
    this.pendingArr.pop();
  }

  /**
   * @author Tari
   * @dateCreated 2 Aug 2023
   * @description Gets the "page" of email requests
   * @param page Retrieve records based on this page number
   */
  nextPage(page: number) {
    this.getEmailRequest(page)
  }

  /**
   * @author Tari
   * @dateCreated 29 Aug 2023
   * @description Gets the color associated with a specific status
   * @param status The status in question
   * @returns The color associated with a specific status
   */
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
