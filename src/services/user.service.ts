import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { LocalStorageService } from './localSorage.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: User[] = [];

  constructor(private localStorageService: LocalStorageService) { }

  getUsers(): User[] {
    this.users = this.localStorageService.getItem('users');
    return this.users
  }

  editUser(user: User): User[] {
    if (user) {
      const index = this.users.findIndex((item) => item.id === user.id)
      this.users[index] = user
    }

    this.localStorageService.setItem('users', this.users);
    return this.users
  }

  deleteUser(id: number | null): void {
    if (id) {
      const index = this.users.findIndex((user) => user.id === id)
      if (index >= 0) {
        this.users.splice(index, 1)
        this.localStorageService.setItem('users', this.users);
      }
    }
  }
 
  addUser(user: User): void {
    this.users.push(user);
    this.localStorageService.setItem('users', this.users);
  }
}
