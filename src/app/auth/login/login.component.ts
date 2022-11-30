import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }
  onLogin() {
    if (this.loginForm.valid) {
      console.log('AT: Login correcto');
    } else {
      this.loginForm.markAllAsTouched();
      console.error('AT: Ingrese todo los campos');
    }
  }

  onSignIn() {
    this.router.navigate(['/', 'module-auth', 'sign-in']);
  }

  onKeyPress(event: any) {
    console.log('AT: $EVENT', event);
  }
}
