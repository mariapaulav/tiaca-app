import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicPwdComponent } from './dynamic-pwd.component';

describe('DynamicPwdComponent', () => {
  let component: DynamicPwdComponent;
  let fixture: ComponentFixture<DynamicPwdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicPwdComponent]
    });
    fixture = TestBed.createComponent(DynamicPwdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
