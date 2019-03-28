import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LayoutModule } from '@progress/kendo-angular-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PersonalInfoComponent } from './library/personal-info/personal-info.component';
import { ContactInfoComponent } from './library/contact-info/contact-info.component';
import { SubmitControlsPanelComponent } from './library/submit-controls-panel/submit-controls-panel.component';



@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    PersonalInfoComponent,
    ContactInfoComponent,
    SubmitControlsPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
