import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStatsComponent } from './add-stats.component';

describe('AddStatsComponent', () => {
  let component: AddStatsComponent;
  let fixture: ComponentFixture<AddStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
