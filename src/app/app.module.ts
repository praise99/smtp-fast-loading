import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
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
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MAT_SNACK_BAR_DATA, MatSnackBarModule, MatSnackBarRef } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,

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
    MatPaginatorModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatButtonModule,
    MatTooltipModule,
    // SuiModule
  ],
  providers: [
    AuthenticationService,
    DashboardService,
    EmailRequestService,
    ProfileService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
