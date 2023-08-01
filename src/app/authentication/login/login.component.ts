import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  toggle: boolean = false;
  passwordType: string = 'password';
  username: string = '';
  password: string = '';
  // @ViewChild('hello', { static: false }) divHello!: ElementRef;
  // @ViewChild('eyeChange', { static: false }) eyeChange!: ElementRef;

  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2,
    private fb: FormBuilder,

    private router: Router
  ) {}

  ngOnInit(): void {}
  loginForm: FormGroup = this.fb.group({
    Username: [null, [Validators.required]],
    password: [
      null,
      [
        Validators.required,
        // Validators.pattern(
        //   /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,50}$/
        // ),
      ],
    ],
  });

  onEyeClick() {
    // const val: any = document.getElementById('password');
    // val.type = 'text';
    // console.log('val =>', val);

    if (!this.toggle) {
      // this.renderer.setProperty(this.divHello.nativeElement, 'type', 'text');
      // this.renderer.removeClass(this.eyeChange.nativeElement, 'fa-eye-slash');
      // this.renderer.addClass(this.eyeChange.nativeElement, 'fa-eye');

      this.passwordType = 'text';
    } else {
      // this.renderer.setProperty(
      //   this.divHello.nativeElement,
      //   'type',
      //   'password'
      // );
      // this.renderer.removeClass(this.eyeChange.nativeElement, 'fa-eye');
      // this.renderer.addClass(this.eyeChange.nativeElement, 'fa-eye-slash');
      this.passwordType = 'password';
    }
    this.toggle = !this.toggle;
    console.log('toggle => ', this.toggle);
  }

  login() {
    // Hardcoded usernames and passwords
    const renters = [
      { username: 'renter1', password: 'Password1#' },
      { username: 'renter2', password: 'password2' },
      // Add more renters if needed
    ];

    const landlords = [
      { username: 'landlord1', password: 'Password1#' },
      { username: 'landlord2', password: 'password4' },
      // Add more landlords if needed
    ];

    // Check if the entered username and password match with renters or landlords
    const renter = renters.find(
      (r) => r.username === this.username && r.password === this.password
    );
    const landlord = landlords.find(
      (l) => l.username === this.username && l.password === this.password
    );

    if (renter) {
      this.router.navigate(['/create-profile']);
      console.log('value=====>', renter); // Navigate to renter profile
    } else if (landlord) {
      this.router.navigate(['/create-profile']); // Navigate to landlord profile
    } else {
      // Handle invalid login credentials
      console.log('Invalid username or password');
    }
  }
  onLogin() {
    console.log(this.loginForm.value);
  }
}
