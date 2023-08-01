import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-two',
  templateUrl: './sign-up-two.component.html',
  styleUrls: ['./sign-up-two.component.css'],
})
export class SignUpTwoComponent implements OnInit {
  toggle: boolean = false;
  passwordType: string = 'password';
  confirmPasswordCheck: boolean = false;

  signupForm: FormGroup = this.fb.group({
    dropp: [null, [Validators.required]],
    username: [null, [Validators.required]],
    password: [
      null,
      [
        Validators.required,
        // Validators.pattern(
        //   /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,25}$/
        // ),
      ],
    ],
    confirmPassword: ['', [Validators.required]],
  });
  constructor(private router: Router, private fb: FormBuilder) {}
  ngOnInit() {
    this.signupForm.get('confirmPassword')?.valueChanges.subscribe((value) => {
      console.log('confirmPassword Value => ', value);
      if (
        this.signupForm.get('password')?.value ===
        this.signupForm.get('confirmPassword')?.value
      ) {
        console.log('===== Confirm Password True ========');
        this.confirmPasswordCheck = true;
        return;
      }
      console.log('===== Confirm Password False ========');
      this.confirmPasswordCheck = false;
    });
  }
  onEyeClick() {
    if (!this.toggle) {
      this.passwordType = 'text';
    } else {
      this.passwordType = 'password';
    }
    this.toggle = !this.toggle;
    console.log('toggle => ', this.toggle);
  }

  onSignup() {
    // if (this.selectedRole === 'renter') {
    //   this.router.navigateByUrl('/create-renter-profile');
    // } else if (this.selectedRole === 'landlord') {
    //   this.router.navigateByUrl('/create-landlord-profile');
    // }

    console.log('signupForm val => ', this.signupForm.value);

    if (this.signupForm.value.dropp === 'Renter') {
      console.log(this.signupForm.value);
      this.router.navigateByUrl('renter/create-profile');
    } else {
      this.router.navigateByUrl('landlord/create-profile');
    }
    console.log(this.signupForm.value);
  }
}
