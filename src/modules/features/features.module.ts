import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AppLayoutComponent } from './layout/app-layout/app-layout.component';
import { PublicLayoutComponent } from './layout/public-layout/public-layout.component';
import { PublicHeaderComponent } from './public-header/public-header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MaterialModule } from 'src/app/material.module';
import { LoginComponent } from '../../app/components/login/login.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from 'src/app/components/dashboard/dashboard.component';



@NgModule({
  declarations: [
    HeaderComponent,
    PublicHeaderComponent,
    AppLayoutComponent,
    PublicLayoutComponent,
    SidebarComponent,
    LoginComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MaterialModule
  ],
  exports: [
    HeaderComponent,
    PublicHeaderComponent,
    AppLayoutComponent,
    PublicLayoutComponent,
    SidebarComponent
  ]
})
export class FeaturesModule { }
