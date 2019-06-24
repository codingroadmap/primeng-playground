import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];
