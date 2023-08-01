import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css'],
})
export class OtpComponent implements OnInit {
  constructor(private router: Router, private fb: FormBuilder) {}
  otpForm: FormGroup = this.fb.group({
    otpNumber: [
      null,
      [
        Validators.required,
        Validators.maxLength(6),
        Validators.pattern(/^\d+$/),
      ],
    ],
  });

  ngOnInit(): void {}
  onSubmit() {
    console.log(this.otpForm.value);
    this.router.navigate(['auth/sign-up-two']);
  }
}
