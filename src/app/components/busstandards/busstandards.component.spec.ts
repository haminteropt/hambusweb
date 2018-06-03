import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusStandardsComponent } from './busstandards.component';

describe('BusstandardsComponent', () => {
  let component: BusStandardsComponent;
  let fixture: ComponentFixture<BusStandardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusStandardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusStandardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
