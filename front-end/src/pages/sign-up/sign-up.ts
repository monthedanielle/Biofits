import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { AlertProvider } from '../../providers/alert/alert';
import { LandPage } from '../land/land';
import { EnvProvider } from '../../providers/env/env';
import { AuthProvider } from '../../providers/auth/auth';
import { BenutzerProvider } from '../../providers/benutzer/benutzer';


@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {

  signUpFormGroup: FormGroup;
  email: AbstractControl;
  vorname: AbstractControl;
  nachname: AbstractControl;
  password: AbstractControl;
  rePassword: AbstractControl;

  usernameMinLength = 6;
  passwordMinLength = 8;
  passwordMaxLength = 20;
  firstnameMinLength = 2;
  lastnameMinLength = 2;

  error = false;
  errorMessage: string;

  loading: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public loadingController: LoadingController,
    public alertProvider: AlertProvider,
    public envProvider: EnvProvider,
    public benutzerProvider: BenutzerProvider) {

    this.signUpFormGroup = this.formBuilder.group({
      email: ['', Validators.required],
      vorname: ['', [Validators.required, Validators.minLength(this.firstnameMinLength)]],
      nachname: ['', [Validators.required, Validators.minLength(this.lastnameMinLength)]],
      geburtsDatum: ['', Validators.required],
      gewicht: ['', [Validators.required]],
      geschlecht: ['', [Validators.required]],
      groesse: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(this.passwordMinLength), Validators.maxLength(this.passwordMaxLength)]],
      rePassword: ['', Validators.required],
    },
      {
        validator: this.checkPassword('password', 'rePassword')
      });

    this.email = this.signUpFormGroup.controls['email'];
    this.vorname = this.signUpFormGroup.controls['vorname'];
    this.nachname = this.signUpFormGroup.controls['nachname'];
    this.email = this.signUpFormGroup.controls['email'];
    this.password = this.signUpFormGroup.controls['password'];
    this.rePassword = this.signUpFormGroup.controls['rePassword'];
  }

  // go to another page
  openPage(page) {
    this.navCtrl.setRoot(page);
  }

  signUp(signUpFormGroup: FormGroup) {

    this.loading = this.loadingController.create({ content: "Signing up, please wait..." });
    this.loading.present();

    const benutzerData = {
      email: signUpFormGroup.value.email,
      vorname: signUpFormGroup.value.vorname,
      nachname: signUpFormGroup.value.nachname,
      password: signUpFormGroup.value.password,
      geburtsDatum: signUpFormGroup.value.geburtsDatum,
      groesse: signUpFormGroup.value.groesse,
      gewicht: signUpFormGroup.value.gewicht,
      geschlecht: signUpFormGroup.value.geschlecht
    };

    this.benutzerProvider.save(benutzerData).subscribe(data => {
      this.error = false;

      this.loading.dismissAll();
      this.alertProvider.longAlert('Sign up successful!\nCheck your email to activate your account!', true);
      this.openPage(LandPage);
    },
      error => {
        this.error = true;
        this.errorMessage = this.getErrorMessage(error);

        this.loading.dismissAll();
        this.alertProvider.middleAlert('Sign up failed', false);
      });
  }

  checkPassword(password: string, rePassword: string) {
    return function (frm) {
      let passwordValue = frm.get(password).value;
      let rePasswordValue = frm.get(rePassword).value;

      if (passwordValue !== '' && passwordValue !== rePasswordValue) {
        return { 'notMatch': `value ${passwordValue} is not equal to ${rePasswordValue}` }
      }
      return null;
    }
  }

  private getErrorMessage(error): string {
    const messageParts = error.message.split(':');

    if (messageParts.length <= 0) {
      return '';
    }

    if (messageParts.length == 3) {
      return messageParts[2].trim();
    }

    if (messageParts.length == 1) {
      return messageParts[0].trim();
    }

    return error.message.trim();
  }

}
