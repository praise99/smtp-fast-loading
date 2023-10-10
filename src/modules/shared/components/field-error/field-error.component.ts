import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-field-error',
	template: `
		<div *ngIf="displayError">
			<div class="ui pointing red basic label" [attr.style]="position">
				{{ errorMsg }}
			</div>
		</div>
	`,
	styles: [ `` ]
})
export class FieldErrorComponent {
	@Input() pointerDirection: string;
	@Input() errorMsg: string;
	@Input() displayError: boolean;
	@Input() position: string;

	constructor() {
		this.position = 'relative';
	}
}
