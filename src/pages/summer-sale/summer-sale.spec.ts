import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummerSale } from './summer-sale';

describe('SummerSale', () => {
  let component: SummerSale;
  let fixture: ComponentFixture<SummerSale>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SummerSale]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SummerSale);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
