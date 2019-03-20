import { Component, OnInit } from '@angular/core';
import { filter, tap } from 'rxjs/operators';
import { User } from '@app/api/models/user.model';
import { SessionService } from '@app/api/services/session.service';
import { AutoUnsubscribe } from '@app/shared/decorators/auto-unsubscribe';
import { SubscriptionManager } from '@app/shared/classes/subscription-manager';
import { MatDialog } from '@angular/material';
import { LoginDialogComponent } from '@app/auth/components/login-dialog/login-dialog.component';

@Component({
  selector: 'app-current-user-menu',
  templateUrl: './current-user-menu.component.html',
  styleUrls: ['./current-user-menu.component.scss']
})
@AutoUnsubscribe()
export class CurrentUserMenuComponent implements OnInit {
  sub = new SubscriptionManager();
  user: User;
  // $impersonatorUser: Observable<User>;

  constructor(private sessionService: SessionService,
              // private impersonateUserService: ImpersonateUserService
              private dialog: MatDialog,
              ) {
  }

  ngOnInit() {
   // this.$impersonatorUser = this.sessionService.getImpersonatedUser();

    this.sub.add = this.sessionService.getLoggedUser().pipe(
      filter(Boolean),
      tap((user) => {
        this.user = user;

      })
    ).subscribe();
  }

  stopImpersonate() {
   // this.impersonateUserService.stopImpersonation().subscribe();
  }

  openLoginModal() {
    this.dialog.open(LoginDialogComponent);
  }
}
