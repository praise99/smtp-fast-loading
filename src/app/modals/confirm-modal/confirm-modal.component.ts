import { Component, EventEmitter, Output } from '@angular/core';
import { ComponentModalConfig, ModalSize, SuiModal } from '@richardlt/ng2-semantic-ui';

interface IConfirmModalContext {
  title?: string;
  question?: string;
  positiveText?: string;
  negativeText?: string;
}

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss']
})
export class ConfirmModalComponent {

  @Output() onConfirm = new EventEmitter();

  constructor(public modal: SuiModal<IConfirmModalContext>) {

  }
}

export class ConfirmModal extends ComponentModalConfig<IConfirmModalContext> {
  constructor(
    title: string,
    question: string,
    positiveText = "Yes",
    negativeText = "No",
    size: ModalSize = ModalSize.Small
  ) {
    super(ConfirmModalComponent, { title, question, positiveText, negativeText });

    this.isClosable = false;
    this.transitionDuration = 200;
    this.size = size;
    this.isFullScreen = false;
    this.isInverted = false;
  }
}
