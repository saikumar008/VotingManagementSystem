import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotingThankyouComponent } from './voting-thankyou.component';

describe('VotingThankyouComponent', () => {
  let component: VotingThankyouComponent;
  let fixture: ComponentFixture<VotingThankyouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VotingThankyouComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VotingThankyouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
