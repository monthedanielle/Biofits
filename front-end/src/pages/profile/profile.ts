import { Component } from '@angular/core';
import { IonicPage, NavController, ActionSheetController, LoadingController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BenutzerProvider } from '../../providers/benutzer/benutzer';
import { AlertProvider } from '../../providers/alert/alert';
import { EnvProvider } from '../../providers/env/env';
import { StringUtilsProvider } from '../../providers/string-utils/string-utils';
import { AuthProvider } from '../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  name = "Adam G Smith";
  current_job = "Assistant Professor of Science";
  email = "Adam.g@gmail.com";
  address = "2 Floor,Building 4";
  phone = "91234 56789";
  code = '1';
  password = "123456789";
  jobs = "Assistant Professor of Science 2011 \n,Professor of Physics 2009 \n,Assistant Professor of Science 2011 \n,Professor of Physics 2009";

  flag = true;
  btn_text = 'Update';
  btn_color = "color1";
  img = 'assets/img/profile.png';


  benutzerFormGroup: FormGroup;
  phoneFormGroup: FormGroup;
  addressFormGroup: FormGroup;
  pictureFormGroup: FormGroup;

  benutzerId: string;
  firstnameMinLength = 2;
  lastnameMinLength = 2;

  loading: any;

  benutzer: any = {};

  constructor(
    public navCtrl: NavController,
    public actionSheetCtrl: ActionSheetController,
    public camera: Camera,
    public benutzerProvider: BenutzerProvider,
    public alertProvider: AlertProvider,
    public formBuilder: FormBuilder,
    public envProvider: EnvProvider,
    public loadingController: LoadingController,
    public stringUtilsProvider: StringUtilsProvider,
    public authProvider: AuthProvider) {

    this.loading = this.loadingController.create({ content: "Loading, please wait..." });
    this.loading.present();

    this.benutzerFormGroup = this.formBuilder.group({
      email: ['', Validators.required],
      vorname: ['', [Validators.required, Validators.minLength(this.firstnameMinLength)]],
      nachname: ['', [Validators.required, Validators.minLength(this.lastnameMinLength)]],
      geburtsDatum: ['', Validators.required],
      gewicht: ['', [Validators.required]],
      geschlecht: ['', [Validators.required]],
      groesse: ['', [Validators.required]]
    });

    // get benutzer
    this.benutzerProvider.get(localStorage.getItem('userId')).subscribe(benutzer => {
      this.benutzer = benutzer;
      this.benutzerId = benutzer.id;

      this.benutzerFormGroup = this.formBuilder.group({
        email: [this.stringUtilsProvider.capitalize(benutzer.email), Validators.required],
        vorname: [this.stringUtilsProvider.capitalize(benutzer.vorname), [Validators.required, Validators.minLength(this.firstnameMinLength)]],
        nachname: [this.stringUtilsProvider.capitalize(benutzer.nachname), [Validators.required, Validators.minLength(this.lastnameMinLength)]],
        gewicht: [benutzer.gewicht, [Validators.required]],
        geschlecht: [benutzer.geschlecht, [Validators.required]],
        groesse: [benutzer.groesse, [Validators.required]],
        geburtsDatum: [this.convertDate(benutzer.geburtsDatum, 0)]
      });

      this.loading.dismissAll();
    },
      error => {
        this.alertProvider.middleAlert(error.message, true);
        this.loading.dismissAll();
      });
  }

  ionViewDidLoad() {

  }

  update() {
    if (this.flag == false) {
      this.flag = true;
      this.btn_text = "Update";
      this.btn_color = "color1";

      this.loading = this.loadingController.create({ content: "Please wait..." });
      this.loading.present();

      const benutzerData = {
        email: this.benutzerFormGroup.value.email,
        vorname: this.benutzerFormGroup.value.vorname,
        nachname: this.benutzerFormGroup.value.nachname,
        password: this.benutzerFormGroup.value.password,
        groesse: this.benutzerFormGroup.value.groesse,
        gewicht: this.benutzerFormGroup.value.gewicht,
        geschlecht: this.benutzerFormGroup.value.geschlecht,
        geburtsDatum: new Date()
      };

      this.benutzerProvider.update(localStorage.getItem('userId'), benutzerData).subscribe(data => {
        this.loading.dismissAll();
        this.alertProvider.longAlert('Daten aktualisiert!', true);
      },
        error => {
          this.loading.dismissAll();
          this.alertProvider.middleAlert('Aktualisierung ist fehlgeschlagen.', false);
        });
    }
    else {
      this.flag = false;
      this.btn_text = "Save";
      this.btn_color = "color2";
    }

  }

  ionViewCanEnter() {
    return this.authProvider.authenticated();
  }

  // gallery 
  // ActionSheet for change user picture
  selectImage() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Modify your Picture',
      buttons: [
        {
          text: 'Gallery',
          handler: () => { this.get_camera(1); }
        }, {
          text: 'Camera',
          handler: () => { this.get_camera(2); }
        }, {
          text: 'Cancel',
          role: 'cancel',
          handler: () => { }
        }
      ]
    });
    actionSheet.present();
  }
  get_camera(source) {
    const options: CameraOptions = {
      quality: 100, destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG, mediaType: this.camera.MediaType.PICTURE
      , allowEdit: true, targetWidth: 512, targetHeight: 512, correctOrientation: true
    }

    if (source == 1) {
      options.sourceType = this.camera.PictureSourceType.PHOTOLIBRARY
    }
    else {
      options.sourceType = this.camera.PictureSourceType.CAMERA
    }

    this.camera.getPicture(options).then((imageData) => {
      this.img = 'data:image/jpeg;base64,' + imageData;
    }, (err) => { });

  }

  convertDate(date: Date, addDays: number) {
    let convertedDate = new Date(date);
    convertedDate.setDate(convertedDate.getDate() + addDays);
    return convertedDate.toISOString().substring(0, 10);
  }

  compare(o1, o2) {
    return o1 === o2;
  }

  // go to another page
  openPage(page) {
    this.navCtrl.setRoot(page);
  }

  private getErrorMessage(error): string {
    const messageParts = error.message.split(':');

    if(messageParts.length <= 0) {
      return '';
    }

    if(messageParts.length == 3) {
      return messageParts[2].trim();
    }

    if(messageParts.length == 1) {
      return messageParts[0].trim();
    }

    return error.message.trim();
  }
}
