import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AbstractControl} from '@angular/forms/src/model';
import {ValidationErrors} from '@angular/forms/src/directives/validators';
import {of} from 'rxjs/observable/of';
import {delay} from 'rxjs/operators';

@Component({
  selector: 'app-user',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public title: string;
  public id: string;
  public user: any;
  public model: any;
  public formGroup: FormGroup;

  public formGroupArray: FormGroup;

  constructor(private _activatedRoute: ActivatedRoute,
              private _fb: FormBuilder) {
  }

  ngOnInit() {
    // TODO ????
    this.formGroup = this._fb.group({
      firstName: ['',
        [Validators.required, Validators.minLength(4), this._nameValidator]],
      lastName: ['',
        [Validators.required, Validators.minLength(4)]],
      passwordGroup: this._fb.group({
        password: ['',
          [Validators.required, Validators.minLength(4)]],
        pconfirm: ['',
          [Validators.required, Validators.minLength(4)]],
      }, {
        asyncValidator: [this._asyncValidator]
      })
    });

    this.formGroupArray = new FormGroup({
      emails: new FormArray([this.formGroup])
    });

    this.formGroup.valueChanges.subscribe((form) => {
      console.log(form);
    });

    this._activatedRoute.data.subscribe((data: { title: string, user: any }) => {
      this.title = data.title;
      this.user = data.user;

      // this.formGroup.patchValue({
      //   firstName: this.user.firstName,
      //   lastName: this.user.surname,
      // }, {emitEvent: false});
    });
    this._activatedRoute.params.subscribe((params: { id: string }) => {
      this.id = params.id;
    });
  }

  public addEmail(): void {
    (this.formGroupArray.get('emails') as FormArray).push(
      this._fb.group({
        firstName: ['',
          [Validators.required, Validators.minLength(4)]],
        lastName: ['',
          [Validators.required, Validators.minLength(4)]],
        passwordGroup: this._fb.group({
          password: ['',
            [Validators.required, Validators.minLength(4)]],
          pconfirm: ['',
            [Validators.required, Validators.minLength(4)]],
        })
      })
    );
  }

  public removeEmail(index: number): void {
    (this.formGroupArray.get('emails') as FormArray).removeAt(index);

  }


  private _nameValidator({value}: FormControl): ValidationErrors | null {
    const valid = /^[a-zA-Z]*$/.test(value);
    return valid
      ? null
      : {nospecial: true};
  }

  private _asyncValidator({value}: FormGroup): ValidationErrors | null {
    console.log('FormGroup', value);
    const [password, pconfirm] = Object.keys(value);
    const valid = value[password] === value[pconfirm]
      ? null
      : {
        noequals: true
      };
    return of(valid).pipe(delay(5000));
  }
}
