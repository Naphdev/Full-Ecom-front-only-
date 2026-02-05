import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreOurProducts } from './explore-our-products';

describe('ExploreOurProducts', () => {
  let component: ExploreOurProducts;
  let fixture: ComponentFixture<ExploreOurProducts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExploreOurProducts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExploreOurProducts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
