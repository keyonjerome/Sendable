import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FrontPageComponent } from './front-page/front-page.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
// 1. Import the libs you need
import { AngularFireModule, FirebaseNameOrConfigToken } from '@angular/fire';
import { AngularFirestoreModule, AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FirebaseConfig } from './app-config.model';
import {MatDialogModule} from '@angular/material/dialog';
import { APP_INITIALIZER } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatListModule} from '@angular/material/list';
import { HomeComponent } from './home/home.component';
import {MatCardModule} from '@angular/material/card';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { CompanyCardComponent } from './company-card/company-card.component';
import {MatInputModule} from '@angular/material/input'; 
import {MatFormFieldModule} from '@angular/material/form-field';
import { SearchService } from './search.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete'; 
// import {FormControl} from "@angular/forms";

const firebaseConfig = new FirebaseConfig().getConfig();
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FrontPageComponent,

    HomeComponent,

    CompanyCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    AppRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    MatSidenavModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule,
    ScrollingModule,
    ReactiveFormsModule,
    MatAutocompleteModule,

  ],
  providers: [FirebaseConfig, SearchService],
  bootstrap: [AppComponent]
})
export class AppModule {


}
