import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  group: FormGroup;
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.group = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required),
    });
  }
  onSignIn() {
    const values = this.group.value;
    const formIsValid = this.group.valid;
    if (formIsValid && values.password === values.confirmPassword) {
      this.authService.signIn(values.name, values.email, values.password);
      this.router.navigate(['/', 'module-home', 'home', 'dashboard']);
    } else {
      console.error('Passwords do not match');
    }
  }
}
