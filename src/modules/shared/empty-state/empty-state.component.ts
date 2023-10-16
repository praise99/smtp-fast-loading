import { Component, EventEmitter, Input, Output } from '@angular/core';

/**
 * @author Tari
 * @dateCreated 7 Aug 2023
 * @description app-empty-state component class
 */
@Component({
  selector: 'app-empty-state',
  templateUrl: './empty-state.component.html',
  styleUrls: ['./empty-state.component.scss']
})
export class EmptyStateComponent {

  @Input() imgType: "illustration" | "icon" = "illustration";
  @Input() title: string = "No items yet";
  @Input() description: string = "Add items to see them here";
  @Input() moreInfo: string = "More info";
  @Input() hasPositiveAction: boolean = true;
  @Input() hasNegativeAction: boolean = true;
  @Input() positiveButtonText: string = "Continue";
  @Input() negativeButtonText: string = "Cancel";
  @Input() forceSmallScreen = false;
  @Output() positiveButtonClicked = new EventEmitter();
  @Output() negativeButtonClicked = new EventEmitter();
  
}
