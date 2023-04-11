import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndStepsComponent } from './end-steps.component';

describe('EndStepsComponent', () => {
  let component: EndStepsComponent;
  let fixture: ComponentFixture<EndStepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EndStepsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EndStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
