import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatCardModule, MatCheckboxModule, MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatListModule, MatMenuModule, MatProgressSpinnerModule,
  MatSidenavModule, MatSnackBarModule,
  MatToolbarModule
} from '@angular/material';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ConfirmDialogComponent } from '@app/shared/components/confirm-dialog/confirm-dialog.component';
import { LoadingButtonComponent } from '@app/shared/components/loading-button/loading-button.component';
import { LoadingFormButtonComponent } from '@app/shared/components/loading-form-button/loading-form-button.component';
import { FormButtonDirective } from '@app/shared/directives/form-button.directive';
import { ApiModule } from '@app/api/api.module';
import { NgxPermissionsModule } from 'ngx-permissions';

@NgModule({
  declarations: [
    ConfirmDialogComponent,
    LoadingButtonComponent,
    LoadingFormButtonComponent,
    FormButtonDirective
  ],
  imports: [
    CommonModule,
    TranslateModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatDialogModule,
  ],
  exports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    TranslateModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatCheckboxModule,
    MatMenuModule,
    MatSnackBarModule,

    NgxPermissionsModule,

    ApiModule,

    ConfirmDialogComponent,
    LoadingButtonComponent,
    LoadingFormButtonComponent,
    FormButtonDirective,
  ],
  entryComponents: [
    ConfirmDialogComponent,
  ]
})
export class SharedModule { }
