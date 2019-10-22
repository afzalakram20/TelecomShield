import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterconnectListComponent } from './interconnect-list.component';

describe('InterconnectListComponent', () => {
  let component: InterconnectListComponent;
  let fixture: ComponentFixture<InterconnectListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterconnectListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterconnectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
