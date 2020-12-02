import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartSessionComponent } from './cart-session.component';

describe('CartSessionComponent', () => {
  let component: CartSessionComponent;
  let fixture: ComponentFixture<CartSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartSessionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
