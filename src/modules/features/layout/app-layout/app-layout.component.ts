import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';


import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, share } from 'rxjs/operators';
import { DrawerService } from 'src/app/services/drawer.service';
@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss']
})
export class AppLayoutComponent implements OnInit {

  constructor(
    private breakpointObserver: BreakpointObserver,
    private drawerService: DrawerService,
  ) { }

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      share()
    );

  isSidenavOpen = false;

  toggleSidenav() {
    this.isSidenavOpen = !this.isSidenavOpen;
  }

  @ViewChild('sidenav') sidenav!: MatSidenav;

  ngOnInit(): void {
    // Open the sidenav when the component initializes
    // this.sidenav.open();

    this.drawerService.drawerToggleSubject.subscribe(() => {
      // this.sidenav.toggle();
    });
  }

}
