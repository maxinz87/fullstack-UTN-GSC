import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormReactivoComponent } from './form-reactivo.component';

describe('FormReactivoComponent', () => {
  let component: FormReactivoComponent;
  let fixture: ComponentFixture<FormReactivoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormReactivoComponent]
    });
    fixture = TestBed.createComponent(FormReactivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
