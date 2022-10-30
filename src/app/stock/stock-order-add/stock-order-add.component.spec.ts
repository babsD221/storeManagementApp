import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockOrderAddComponent } from './stock-order-add.component';

describe('StockOrderAddComponent', () => {
  let component: StockOrderAddComponent;
  let fixture: ComponentFixture<StockOrderAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockOrderAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockOrderAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
