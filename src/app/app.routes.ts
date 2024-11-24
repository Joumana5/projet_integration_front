import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import {ProfileComponent} from "./pages/profile/profile.component";

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {path: 'profile/edit/:id', component: ProfileComponent }
];
