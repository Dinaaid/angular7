import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AngularFireModule } from "@angular/fire";
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

const firebaseConfig = {
  apiKey: "AIzaSyBdlBNMD013feSxJShOYxIYI9gdZBr5nhw",
  authDomain: "pharmacydinax.firebaseapp.com",
  databaseURL: "https://pharmacydinax.firebaseio.com",
  projectId: "pharmacydinax",
  storageBucket: "pharmacydinax.appspot.com",
  messagingSenderId: "847108860094"
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
