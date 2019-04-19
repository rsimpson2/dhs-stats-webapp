import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PtdbComponent } from './ptdb.component';

describe('PtdbComponent', () => {
  let component: PtdbComponent;
  let fixture: ComponentFixture<PtdbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PtdbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PtdbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
