import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RigBusComponent } from './rig-bus.component';

describe('RigBusComponent', () => {
  let component: RigBusComponent;
  let fixture: ComponentFixture<RigBusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RigBusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RigBusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
