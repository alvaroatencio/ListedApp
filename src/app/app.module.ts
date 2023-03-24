import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersContainerComponent } from './components/landing/users-container/users-container.component';
import {FormsModule} from "@angular/forms";
import { LoginFormComponent } from './components/landing/users-container/login-form/login-form.component';
import { ManageSectionComponent } from './components/landing/users-container/manage-section/manage-section.component';
import { LandingComponent } from './components/landing/landing.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    ManageSectionComponent,
    LandingComponent,
    UsersContainerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
