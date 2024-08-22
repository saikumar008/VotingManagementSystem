import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotersLoginComponent } from './voters-login.component';

describe('VotersLoginComponent', () => {
  let component: VotersLoginComponent;
  let fixture: ComponentFixture<VotersLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VotersLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VotersLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
