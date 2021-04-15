import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import firebase from "firebase/app";
import { AppModule } from './app/app.module';
import { environment, firebaseConfig } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
firebase.initializeApp(firebaseConfig)