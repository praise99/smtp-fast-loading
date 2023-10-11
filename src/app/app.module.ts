import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { SuiModule } from '@richardlt/ng2-semantic-ui';
import { HeaderComponent } from './components/header/header.component';
import { AppLayoutComponent } from './components/layout/app-layout/app-layout.component';
import { PublicLayoutComponent } from './components/layout/public-layout/public-layout.component';
import { PublicHeaderComponent } from './components/public-header/public-header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    SidebarComponent,
    AppLayoutComponent,
    PublicHeaderComponent,
    PublicLayoutComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // SuiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
