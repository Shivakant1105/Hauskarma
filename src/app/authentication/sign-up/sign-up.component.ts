import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  phone!: number;
  constructor(private router: Router, private fb: FormBuilder) {}

  ngOnInit() {
    // this.signupForm.get('phoneNumber')?.valueChanges.subscribe((val) => {
    //   console.log('phoneNumber => ', val);
    //   console.log(this.signupForm.valid);
    // });
  }
  // signupForm: FormGroup = this.fb.group({
  //   phoneNumber: [
  //     null,
  //     [
  //       Validators.required,
  //       //  Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')
  //     ],
  //   ],
  // });

  onSend() {
    this.router.navigate(['auth/otp']);
    console.log('phone => ', this.phone);

    // console.log(this.signupForm.value);
  }
}
