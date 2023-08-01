import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css'],
})
export class ResetPasswordComponent implements OnInit, OnDestroy {
  private readonly subscriptions = new Subscription();
  forgotPasswordForm: FormGroup = this.fb.group({
    email: ['', [Validators.email, Validators.required]],
  });
  authService: any;
  constructor(private fb: FormBuilder) {}
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
  resetPasswordForm: FormGroup = this.fb.group({
    email: ['', [Validators.email, Validators.required]],
  });
  ngOnInit(): void {
    this.subscriptions.unsubscribe();
  }
  onSubmit() {
    const data = { ...this.forgotPasswordForm.value, redirect_url: 'string' };
    console.log(this.forgotPasswordForm.value, data);
    this.subscriptions.add(
      this.authService.forgotPassword(data).subscribe((res: any) => {
        console.log('forgot password res compo ===>', res);
      })
    );
  }
}
