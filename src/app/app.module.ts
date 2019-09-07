import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FrontPageComponent } from './front-page/front-page.component';
import {MatButtonModule} from '@angular/material/button';
// 1. Import the libs you need
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FirebaseConfig } from './app-config.model';
import { APP_INITIALIZER } from '@angular/core';




var fireBaseConfig: FirebaseConfig;

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FrontPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(FirebaseConfig)
  ],
  providers: [FirebaseConfig
],
  bootstrap: [AppComponent]
})
export class AppModule { }
