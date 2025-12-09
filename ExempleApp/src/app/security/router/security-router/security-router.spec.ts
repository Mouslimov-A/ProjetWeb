import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityRouter } from './security-router';

describe('SecurityRouter', () => {
  let component: SecurityRouter;
  let fixture: ComponentFixture<SecurityRouter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecurityRouter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecurityRouter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
