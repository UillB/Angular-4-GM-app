import {Router, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";

import {NotFoundComponent} from "../components/not-found/not-found.component";
import {MapComponent} from "../components/map/map.component";
import {AboutAuthorComponent} from "../components/about-author/about-author.component";
import {SignUpComponent} from "../components/sign-up/sign-up.component";
import {SignInComponent} from "../components/sign-in/sign-in.component";

const appRoutes = [
  {
    path: "",
    component: SignUpComponent
  },
  {
    path: "signup",
    component: SignUpComponent
  },
  {
    path: "signin",
    component: SignInComponent
  },
  {
    path: "about",
    component: AboutAuthorComponent
  },
  {
    path: "dashboard",
    component: MapComponent
  },
  {
    path: "**",
    component: NotFoundComponent
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
