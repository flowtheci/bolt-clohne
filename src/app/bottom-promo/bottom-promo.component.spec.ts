import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomPromoComponent } from './bottom-promo.component';

describe('BottomPromoComponent', () => {
  let component: BottomPromoComponent;
  let fixture: ComponentFixture<BottomPromoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomPromoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomPromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
