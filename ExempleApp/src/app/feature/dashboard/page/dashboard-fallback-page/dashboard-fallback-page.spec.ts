import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardFallbackPage } from './dashboard-fallback-page';

describe('DashboardFallbackPage', () => {
  let component: DashboardFallbackPage;
  let fixture: ComponentFixture<DashboardFallbackPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardFallbackPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardFallbackPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
