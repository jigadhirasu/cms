import { Component, viewChild, signal } from '@angular/core';
import { Validators, FormsModule, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepper, MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RestfulService } from '../restful/restful.service';

/**
 * @title Stepper vertical
 */
@Component({
  selector: 'signin-component',
  templateUrl: 'sign-in.component.html',
  styleUrl: 'sign-in.component.scss',
  standalone: true,
  imports: [
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
  ],
})
export class SignInComponent {

  constructor(private http: RestfulService) { }

  stepper = viewChild.required('stepper', { read: MatStepper });

  accountSignal = signal<string>('');


  signInOptionForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
  });

  passwordForm = new FormGroup({
    password: new FormControl('', Validators.required),
  });


  fa2Form = new FormGroup({
    otpcode: new FormControl('', Validators.required),
  });


  accountSignIn = () => {

    if (!this.signInOptionForm.valid) {
      return;
    }


    this.http.POST({
      url: `/api/account/signin`,
      contentType: `json`,
    }, this.signInOptionForm.value).subscribe(resp => {
      this.accountSignal.set(resp.data.accountToken);
    });


    this.stepper().next();
  }







  isLinear = false;
}