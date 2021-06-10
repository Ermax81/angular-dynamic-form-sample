import {AfterViewChecked, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormField} from '../form-field';
import {FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit, AfterViewChecked {

  formFields: FormField[];
  form = new FormGroup({});

  constructor(
    private httpClient: HttpClient,
    private readonly changeDetectorRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {

    this.httpClient.get<FormField[]>('/assets/form.json').subscribe(
      (formFields) => {
        for (const formField of formFields) {
          this.form.addControl(
            formField.fieldName, new FormControl('', this.getValidator(formField))
          );
        }
        this.formFields = formFields;
      }
    );

  }

  private getValidator(formField: FormField): ValidatorFn {
    switch (formField.validator) {
      case 'email': return Validators.email;
      case 'required': return Validators.required;
      default: return null;
    }
  }

  onSubmit(): void {
    if (this.form.valid){
      const value = this.form.value;
      console.log('value: ' + JSON.stringify(value));
    }
  }

  ngAfterViewChecked(): void {
    this.changeDetectorRef.detectChanges();
  }

}
