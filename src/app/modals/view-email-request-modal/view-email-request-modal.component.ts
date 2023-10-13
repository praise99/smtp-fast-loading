import { animate, style } from '@angular/animations';
import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
// import {
//   ComponentModalConfig,
//   ModalSize,
//   SuiModal,
// } from '@richardlt/ng2-semantic-ui';

interface IViewEmailRequestModalContext {
  title: string;
  data: any;

}

@Component({
  selector: 'app-view-email-request-modal',
  templateUrl: './view-email-request-modal.component.html',
  styleUrls: ['./view-email-request-modal.component.scss'],
  animations: [
    style({ transform: 'translateX(100%)' }), // Initial position
    animate('30ms ease-in-out', style({ transform: 'translateX(0%)' })), // Final position

  ]
})
export class ViewEmailRequestModalComponent implements OnInit, OnDestroy {
  pending!: boolean;
  success: any;
  error: any;
  // data: any;


  constructor(
    public modal: MatDialogRef<IViewEmailRequestModalContext, void>,

    @Inject(DOCUMENT) private document: any,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    // this.data = this.modal.context.data;
    console.log(this.data);
  }

  ngOnInit(): void {
    this.document.body.classList.add('panel');
  }

  ngOnDestroy(): void {
    this.document.body.classList.remove('panel');
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

// export class ViewEmailRequestModal extends ComponentModalConfig<
//   IViewEmailRequestModalContext,
//   void,
//   void
// > {
//   constructor(title: string, data: any, size: ModalSize = ModalSize.Tiny) {
//     super(ViewEmailRequestModalComponent, { title, data });

//     this.isCentered = false;
//     this.isClosable = false;
//     this.transitionDuration = 200;
//     this.transition = 'slide left';
//     this.size = size;
//     this.isFullScreen = false;
//     this.isInverted = false;
//   }

// }
