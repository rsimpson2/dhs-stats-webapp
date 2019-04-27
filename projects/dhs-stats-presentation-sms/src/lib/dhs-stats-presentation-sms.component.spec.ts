import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DhsStatsPresentationSmsComponent } from './dhs-stats-presentation-sms.component';

describe('DhsStatsPresentationSmsComponent', () => {
  let component: DhsStatsPresentationSmsComponent;
  let fixture: ComponentFixture<DhsStatsPresentationSmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DhsStatsPresentationSmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DhsStatsPresentationSmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
