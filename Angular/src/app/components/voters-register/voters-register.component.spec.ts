import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotersRegisterComponent } from './voters-register.component';

describe('VotersRegisterComponent', () => {
  let component: VotersRegisterComponent;
  let fixture: ComponentFixture<VotersRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VotersRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VotersRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
