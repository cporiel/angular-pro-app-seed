import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

import { AngularFireModule, FirebaseAppConfig } from "angularfire2";
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFireDatabaseModule } from "angularfire2/database";

import { SharedModule } from "./shared/shared.module";
export const ROUTES: Routes = [
  {
    path: "auth",
    children: [
      { path: "", pathMatch: "full", redirectTo: "login" },
      { path: "login", loadChildren: "./login/login.module#LoginModule" },
      {
        path: "register",
        loadChildren: "./register/register.module#RegisterModule"
      }
    ]
  }
];

export const firebaseConfig : FirebaseAppConfig = {
  apiKey: "AIzaSyDgEgCT-WxlLTT0x4SN2e1xjtKysjK4T9o",
  authDomain: "formationskwarel.firebaseapp.com",
  databaseURL: "https://formationskwarel.firebaseio.com",
  projectId: "formationskwarel",
  storageBucket: "formationskwarel.appspot.com",
  messagingSenderId: "149405741495",
  // appId: "1:149405741495:web:8626efc3c161bae3"
};

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    SharedModule.forRoot()
  ]
})
export class AuthModule {}
