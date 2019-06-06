import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { Store } from 'store';

// feature modules
import { AuthModule } from '../auth/auth.module'
// containers
import { AppComponent } from './containers/app/app.component';

// components

// routes
export const ROUTES: Routes = [];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    AuthModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    Store
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
 
var firebaseConfig = {
  apiKey: "AIzaSyDgEgCT-WxlLTT0x4SN2e1xjtKysjK4T9o",
  authDomain: "formationskwarel.firebaseapp.com",
  databaseURL: "https://formationskwarel.firebaseio.com",
  projectId: "formationskwarel",
  storageBucket: "formationskwarel.appspot.com",
  messagingSenderId: "149405741495",
  appId: "1:149405741495:web:8626efc3c161bae3"
};