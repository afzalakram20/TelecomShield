import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileCareListComponent } from './mobile-care-list.component';

describe('MobileCareListComponent', () => {
  let component: MobileCareListComponent;
  let fixture: ComponentFixture<MobileCareListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileCareListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileCareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
