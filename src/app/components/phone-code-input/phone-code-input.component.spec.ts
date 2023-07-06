import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneCodeInputComponent } from './phone-code-input.component';

describe('PhoneCodeInputComponent', () => {
  let component: PhoneCodeInputComponent;
  let fixture: ComponentFixture<PhoneCodeInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhoneCodeInputComponent]
    });
    fixture = TestBed.createComponent(PhoneCodeInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
