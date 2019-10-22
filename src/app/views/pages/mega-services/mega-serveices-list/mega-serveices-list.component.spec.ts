import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MegaServeicesListComponent } from './mega-serveices-list.component';

describe('MegaServeicesListComponent', () => {
  let component: MegaServeicesListComponent;
  let fixture: ComponentFixture<MegaServeicesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MegaServeicesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MegaServeicesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
