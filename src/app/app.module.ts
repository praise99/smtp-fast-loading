import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from './services/authentication.service';
import { DashboardService } from './services/dashboard.service';
import { EmailRequestService } from './services/email-request.service';
import { ProfileService } from './services/profile.services';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from 'src/modules/shared/shared.module';
import { FeaturesModule } from 'src/modules/features/features.module';
import { AuthGuard } from './components/guards/auth.guard';
import { AuthenticationInterceptor } from './components/interceptors/authentication.interceptor';
import { RedirectInterceptor } from './components/interceptors/redirect.interceptor';

import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ViewEmailRequestModalComponent } from './components/modals/view-email-request-modal/view-email-request-modal.component';
import { DrawerService } from './services/drawer.service';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ViewEmailRequestModalComponent

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
    MatDialogModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule
    // SuiModule
  ],
  providers: [
    AuthenticationService,
    DashboardService,
    EmailRequestService,
    ProfileService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthenticationInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RedirectInterceptor,
      multi: true,
    },
    AuthenticationService,
    AuthGuard,
    DrawerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
