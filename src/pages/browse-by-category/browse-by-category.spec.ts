import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseByCategory } from './browse-by-category';

describe('BrowseByCategory', () => {
  let component: BrowseByCategory;
  let fixture: ComponentFixture<BrowseByCategory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowseByCategory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrowseByCategory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
