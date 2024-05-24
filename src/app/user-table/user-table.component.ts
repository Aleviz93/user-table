import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { MatDialog } from '@angular/material/dialog';
import { AddUserModal } from '../../modals/add-user-modal/add-user-modal.component';
import { MatTableDataSource } from '@angular/material/table';
import { ConfirmModal } from '../../modals/confirm/confirm-modal.components';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss'],
})
export class UserTableComponent implements OnInit {
  users = new MatTableDataSource<User>();
  newUser: User = {
    id: null,
    fullName: '',
    email: '',
    phone: '',
    department: '',
    manager: undefined,
  };

  displayedColumns: string[] = [
    'fullName',
    'email',
    'phone',
    'department',
    'manager',
    'actions',
  ];

  constructor(private UserService: UserService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.users.data = this.UserService.getUsers();
  }

  openAddDialog() {
    const dialogRef = this.dialog.open(AddUserModal, {
      data: {
        users: this.users.data,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.UserService.addUser({
          ...result,
          id: +(Date.now().toString(6) + Math.random().toString(6)),
        });
        this.users.data = this.UserService.getUsers();
      }
    });
  }

  openEditDialog(user: User) {
    const dialogRef = this.dialog.open(AddUserModal, {
      data: {
        users: this.users.data,
        user: user,
        edit: true,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.UserService.editUser(result);
        this.users.data = this.UserService.getUsers();
      }
    });
  }

  openDeleteDialog(user: User) {
    const dialogRef = this.dialog.open(ConfirmModal, {
      data: {
        user: user,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (!!result) {
        this.UserService.deleteUser(user.id);
        this.users.data = this.UserService.getUsers();
      }
    });
  }
}
