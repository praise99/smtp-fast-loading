import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { SuiModalService } from '@richardlt/ng2-semantic-ui';
// import { UsersService } from 'src/app/services/users.service';
import { ConfirmModal } from 'src/app/modals/confirm-modal/confirm-modal.component';
// import { UpdatePasswordModal } from 'src/app/modals/update-password/update-password-modal.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
/**
 * @author Opeoluwa
 * @dateCreated 5th Aug 2023
 * @description - Contains all methods in the header like logging out,viewing profile,notification
 * After logging out, it redirects the user to the login page.
 * @dependencies The component depends on the Authentication service,router.
 * @returns None.
 * @modifiedBy Mariam.
 * @dateModified 15th Aug 2023.
 * @reasonForModification pass dynamic data to show currently logged in user.
 */

export class HeaderComponent implements OnInit {
  logOutClicked = false;

  currentlyLoggedInUser: any;
  /**
   * @author Opeoluwa
   * @dateCreated 5th Aug 2023
   * @description The function logs out the currently authenticated user by calling the logout method from the AuthenticationService.
   * After logging out, it redirects the user to the login page.
   * @returns None.
   * @modifiedBy None.
   * @dateModified None.
   * @reasonForModification None.
   */
  logout() {
    this.modalService.open(
      new ConfirmModal(
        'Logout',
        'Are you Sure you want to Sign Out?'
      )
    ).onApprove(() => {
      this.auth.logout()
      this.logOutClicked = true;
      this.router.navigate(['/home-page/login']);
    })
      .onDeny(() => {
      })
  }
  constructor(private auth: AuthenticationService,
    private router: Router,
    // private usersService: UsersService,
    private modalService: SuiModalService) { }

  ngOnInit(): void {
    // this.currentlyLoggedInUser = this.usersService.getCurrentUser();
  }


  resetPasswordModal() {
  //   this.modalService.open(
  //     new UpdatePasswordModal(
  //       'Change Password',

  //     )
  //   )
  }
}
