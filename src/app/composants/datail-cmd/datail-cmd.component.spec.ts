import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatailCmdComponent } from './datail-cmd.component';

describe('DatailCmdComponent', () => {
  let component: DatailCmdComponent;
  let fixture: ComponentFixture<DatailCmdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatailCmdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatailCmdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
