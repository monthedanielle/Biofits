import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, LoadingController } from 'ionic-angular';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth';
import { AlertProvider } from '../../providers/alert/alert';

@IonicPage()
@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})
export class SignInPage {

  signInFormGroup: FormGroup;
  username: AbstractControl;
  password: AbstractControl;

  error = false;
  errorMessage: string;

  loading: any;

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public formBuilder: FormBuilder,
    public authProvider: AuthProvider,
    public alertProvider: AlertProvider,
    public loadingController: LoadingController) {

    this.signInFormGroup = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  signIn(signInFormGroup: FormGroup) {
    
    this.loading = this.loadingController.create({ content: "Signing in, please wait..." });
    this.loading.present();

    this.authProvider.login(signInFormGroup.value.username, signInFormGroup.value.password).subscribe(result => {
      this.error = false;

      this.loading.dismissAll();
      this.alertProvider.shortAlert('Sign in successful!', false);
      this.openPage('LandPage');
    },
    error => {
      this.error = true;
      this.errorMessage = 'Could not sign in!\nPlease, check your credentials!'

      this.loading.dismissAll();
      this.alertProvider.middleAlert('Sign in failed', false);
    });

  }

  passwordModal() {
    let modal = this.modalCtrl.create('PasswordPage');
    modal.present();
  }     

  // go to another page
  openPage(page) {
    this.navCtrl.setRoot(page);
  }
}
        