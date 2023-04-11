import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarElementComponent } from './bar-element.component';

describe('BarElementComponent', () => {
  let component: BarElementComponent;
  let fixture: ComponentFixture<BarElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
