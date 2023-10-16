import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from './services/authentication.service';
import { DashboardService } from './services/dashboard.service';
import { EmailRequestService } from './services/email-request.service';
import { ProfileService } from './services/profile.services';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from 'src/modules/shared/shared.module';
import { FeaturesModule } from 'src/modules/features/features.module';

@NgModule({
  declarations: [
    AppComponent,
    // LoginComponent,
    // DashboardComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    FeaturesModule,
    // SuiModule
  ],
  // exports: [MaterialModule],
  providers: [
    provideClientHydration(),
    AuthenticationService,
    DashboardService,
    EmailRequestService,
    ProfileService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
