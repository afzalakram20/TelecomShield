import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiveGNetworkListComponent } from './five-g-network-list.component';

describe('FiveGNetworkListComponent', () => {
  let component: FiveGNetworkListComponent;
  let fixture: ComponentFixture<FiveGNetworkListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiveGNetworkListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiveGNetworkListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
