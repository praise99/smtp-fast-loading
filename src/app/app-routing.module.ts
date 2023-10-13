import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './components/guards/auth.guard';
import { PublicLayoutComponent } from 'src/modules/features/layout/public-layout/public-layout.component';
import { AppLayoutComponent } from 'src/modules/features/layout/app-layout/app-layout.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
//   { path: 'login', component: LoginComponent },
//   {
//     path: 'dashboard', component: DashboardComponent, data: { preload: true },
//     canActivate: [AuthGuard],
// }
  { path: 'login', component: PublicLayoutComponent },
  {
    path: 'dashboard', component: AppLayoutComponent,

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
