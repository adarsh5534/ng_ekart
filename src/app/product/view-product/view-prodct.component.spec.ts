import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProdctComponent } from './view-prodct.component';

describe('ViewProdctComponent', () => {
  let component: ViewProdctComponent;
  let fixture: ComponentFixture<ViewProdctComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewProdctComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewProdctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
