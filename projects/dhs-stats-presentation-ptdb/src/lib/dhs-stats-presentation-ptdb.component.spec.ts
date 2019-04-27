import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DhsStatsPresentationPtdbComponent } from './dhs-stats-presentation-ptdb.component';

describe('DhsStatsPresentationPtdbComponent', () => {
  let component: DhsStatsPresentationPtdbComponent;
  let fixture: ComponentFixture<DhsStatsPresentationPtdbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DhsStatsPresentationPtdbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DhsStatsPresentationPtdbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
