import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormComponent } from './dynamic-form.component';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

describe('DynamicFormComponent', () => {
  let component: DynamicFormComponent;
  let fixture: ComponentFixture<DynamicFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicFormComponent ],
      imports: [
        ReactiveFormsModule,
        HttpClientModule
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
