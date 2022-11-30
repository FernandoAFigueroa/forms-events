import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  group: FormGroup;
  constructor() {}

  ngOnInit(): void {
    this.group = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required),
    });
  }
  onSignIn() {
    console.log('AT: FORMS GROUP', this.group);
    const values = this.group.value;
    const formIsValid = this.group.valid;
    const controlName = this.group.get('name');
    const controlNameIsValid = this.group.get('name').valid;

    if (values.password === values.confirmPassword) {
      console.log('AT: FORMULARIO ES VALIDO');
    } else {
      console.error('Las contrateras no son iguales');
    }
  }
}
