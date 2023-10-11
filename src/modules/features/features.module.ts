import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AppLayoutComponent } from './layout/app-layout/app-layout.component';
import { PublicLayoutComponent } from './layout/public-layout/public-layout.component';
import { PublicHeaderComponent } from './public-header/public-header.component';
import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
  declarations: [
    HeaderComponent,
    PublicHeaderComponent,
    AppLayoutComponent,
    PublicLayoutComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
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
