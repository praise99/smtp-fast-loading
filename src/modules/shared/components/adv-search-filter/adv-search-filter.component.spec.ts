import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvSearchFilterComponent } from './adv-search-filter.component';

describe('AdvSearchFilterComponent', () => {
  let component: AdvSearchFilterComponent;
  let fixture: ComponentFixture<AdvSearchFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvSearchFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvSearchFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
