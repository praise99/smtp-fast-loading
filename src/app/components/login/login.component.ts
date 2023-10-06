import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  userData = {}
  formSubmitAttempt!: boolean;
  public loginForm!: FormGroup;
  loginBtnClicked = false;
  error: any;
  success: any


  constructor(private formBuilder: FormBuilder,
    private auth: AuthenticationService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  login() {
    if (this.loginForm.valid) {
      const credentials = this.loginForm.value;
      this.loginBtnClicked = true;
      this.auth.login(credentials)
        .subscribe(
          (loggedIn) => {
            if (loggedIn) {
              // Redirect the user to the app's home page after successful login
              this.router.navigate(['/dashboard']);
              this.error = null;
            } else {
              // Handle login failure, show appropriate error message
              this.error = 'Error during Login!';

            }
            this.loginBtnClicked = false;
          },
          (error) => {
            // Handle login error and show error message
            this.error = error?.error?.message ? error.error.message : error;
            this.loginBtnClicked = false;
          }
        );
    }

  }

}
