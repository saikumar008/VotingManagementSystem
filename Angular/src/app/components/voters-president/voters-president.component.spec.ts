import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotersPresidentComponent } from './voters-president.component';

describe('VotersPresidentComponent', () => {
  let component: VotersPresidentComponent;
  let fixture: ComponentFixture<VotersPresidentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VotersPresidentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VotersPresidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
