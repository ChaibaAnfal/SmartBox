import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp({"projectId":"projet-medwise","appId":"1:336115863686:web:595fdcd9a01759825f8107","storageBucket":"projet-medwise.appspot.com","apiKey":"AIzaSyAUHQ0ekXMwjln-o37LQL8Vl7oxM5VLL5I","authDomain":"projet-medwise.firebaseapp.com","messagingSenderId":"336115863686"})),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
