import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberHomePage } from './member-home-page';

describe('MemberHomePage', () => {
  let component: MemberHomePage;
  let fixture: ComponentFixture<MemberHomePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MemberHomePage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemberHomePage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
