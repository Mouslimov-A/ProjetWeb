import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatInput } from './float-input';

describe('FloatInput', () => {
  let component: FloatInput;
  let fixture: ComponentFixture<FloatInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FloatInput]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FloatInput);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
