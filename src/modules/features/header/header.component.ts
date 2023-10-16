import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../app/services/authentication.service';
import { Router } from '@angular/router';
// import { SuiModalService } from '@richardlt/ng2-semantic-ui';
// import { UsersService } from 'src/app/services/users.service';
// import { UpdatePasswordModal } from 'src/app/modals/update-password/update-password-modal.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent implements OnInit {

  // @Input() isLoggedIn: boolean = false;
  constructor(private authService: AuthenticationService,
    private router: Router) { }
  loggedInUser = this.authService.getCurrentUser();
  isToggled: boolean = false;
  toggleDropdown() {
    this.isToggled = !this.isToggled;
    console.log('user ', this.loggedInUser)
  }

  resetPasswordModal() { }
  logout() {
    localStorage.clear();
    this.router.navigate(['/']);
  }

  ngOnInit(): void {
    // this.currentlyLoggedInUser = this.usersService.getCurrentUser();
  }

}
