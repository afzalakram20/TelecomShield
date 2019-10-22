import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourGLteListComponent } from './four-g-lte-list.component';

describe('FourGLteListComponent', () => {
  let component: FourGLteListComponent;
  let fixture: ComponentFixture<FourGLteListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourGLteListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourGLteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
