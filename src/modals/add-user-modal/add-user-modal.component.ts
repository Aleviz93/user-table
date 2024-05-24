import { Component, Inject } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';

export interface DialogData {
  users: [User];
  user?: User;
  edit?: Boolean;
}

@Component({
  selector: 'add-user-modal',
  templateUrl: './add-user-modal.component.html',
  styleUrls: ['./add-user-modal.component.scss'],
})
export class AddUserModal {
  newUser: User = {
    id: null,
    fullName: '',
    email: '',
    phone: '',
    department: '',
    manager: undefined,
  };

  constructor(
    public dialogRef: MatDialogRef<AddUserModal>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  ngOnInit() {
    this.data.edit && this.setUserData(this.data.user!);
  }

  setUserData(user: User) {
    this.newUser = JSON.parse(JSON.stringify(user));
  }

  checkValid(form: NgForm): Boolean {
    const phoneValid = form.controls['phone'];
    const emailValid = form.controls['email'];
    switch (true) {
      case !this.newUser.fullName:
        return false;
      case !this.newUser.email:
        return false;
      case emailValid.errors && emailValid.errors['invalidEmail']:
        return false;
      case phoneValid.errors && phoneValid.errors['invalidPhone']:
        return false;
      default:
        return true;
    }
  }

  addEditUser(form: NgForm): void {
    if (this.checkValid(form)) {
      this.dialogRef.close(this.newUser);
      this.newUser = {
        id: null,
        fullName: '',
        email: '',
        phone: '',
        department: '',
        manager: undefined,
      };
    }
  }
}
