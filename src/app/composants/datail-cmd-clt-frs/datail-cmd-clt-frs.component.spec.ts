import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatailCmdCltFrsComponent } from './datail-cmd-clt-frs.component';

describe('DatailCmdCltFrsComponent', () => {
  let component: DatailCmdCltFrsComponent;
  let fixture: ComponentFixture<DatailCmdCltFrsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatailCmdCltFrsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatailCmdCltFrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
