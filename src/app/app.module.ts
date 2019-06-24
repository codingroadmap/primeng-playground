import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';
import { PrimeNGBundleModule } from './primeng.module';
import { HomeComponent } from './views/home.component';
import { SplashComponent } from './components/splash.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SplashComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(AppRoutes, { onSameUrlNavigation: 'reload' }),
    PrimeNGBundleModule
  ],
  exports: [],
  providers: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
