import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }
  onLogin() {
    if (this.loginForm.valid) {
      const email = this.loginForm.get('email').value;
      const password = this.loginForm.get('password').value;
      const isValidUser = this.authService.login(email, password);
      if (isValidUser) {
        this.router.navigate(['/', 'module-home', 'dashboard']);
      } else {
        console.error('El usuario no existe');
      }
    } else {
      this.loginForm.markAllAsTouched();
      console.error('AT: Ingrese todo los campos');
    }
  }

  onSignIn() {
    this.router.navigate(['/', 'module-auth', 'sign-in']);
  }
}
