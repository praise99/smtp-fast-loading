import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEmailRequestModalComponent } from './view-email-request-modal.component';

describe('ViewEmailRequestModalComponent', () => {
  let component: ViewEmailRequestModalComponent;
  let fixture: ComponentFixture<ViewEmailRequestModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewEmailRequestModalComponent]
    });
    fixture = TestBed.createComponent(ViewEmailRequestModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
