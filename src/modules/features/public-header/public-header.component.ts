import { Component, Input } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-public-header',
  templateUrl: './public-header.component.html',
  styleUrls: ['./public-header.component.scss']
})
export class PublicHeaderComponent {
  @Input() isLoggedIn: boolean = false;
  constructor(private authService: AuthenticationService) { }
  loggedInUser = this.authService.getCurrentUser();
  isToggled: boolean = false;
  toggleDropdown() {
    this.isToggled = !this.isToggled;
    console.log('user ', this.loggedInUser)
  }

  resetPasswordModal() { }
  logout() { }
}
