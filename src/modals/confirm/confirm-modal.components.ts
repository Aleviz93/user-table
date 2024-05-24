import { Component, Inject } from '@angular/core';
import { User } from '../../models/user.model';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogClose,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

export interface DialogData {
  user: User;
}

@Component({
  selector: 'confirm-modal',
  templateUrl: './confirm-modal.components.html',
  styleUrls: ['./confirm-modal.components.scss'],
  standalone: true,
  imports: [
    MatDialogActions,
    MatDialogContent,
    MatDialogClose,
    MatButtonModule,
  ],
})
export class ConfirmModal {
  constructor(
    public dialogRef: MatDialogRef<ConfirmModal>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}
}
