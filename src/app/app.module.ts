import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AgmCoreModule} from "@agm/core";

import {routing} from "./config/route.config";


import {MainComponent} from "./components/main/main.component";
import {HeaderComponent} from "./components/header/header.component";
import {AboutAuthorComponent} from "./components/about-author/about-author.component";
import {MapComponent} from "./components/map/map.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {SignUpComponent} from "./components/sign-up/sign-up.component";
import {SignInComponent} from "./components/sign-in/sign-in.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyD4rIQJPHbmkd0wj7eYzt2VxHNXUIE2U-I"
    })
  ],
  declarations: [
    MainComponent,
    HeaderComponent,
    AboutAuthorComponent,
    MapComponent,
    NotFoundComponent,
    SignUpComponent,
    SignInComponent
  ],
  bootstrap: [MainComponent]
})
export class AppModule {
}
