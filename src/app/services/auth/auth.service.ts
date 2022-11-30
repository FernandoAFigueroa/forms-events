import { Injectable } from '@angular/core';
import { IUser } from '../../interfaces/user/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private users: IUser[] = [
    {
      id: 1,
      name: 'Gaby Mtz',
      email: 'gabby@mail.com',
      password: '1223Gabby',
    },
  ];

  constructor() {}
  login(email: string, password: string): boolean {
    const userFound = this.users.find(
      (user) => user.email === email && user.password === password
    );
    if (userFound) {
      localStorage.setItem('isLogged', JSON.stringify(userFound));
      return true;
    } else {
      localStorage.clear();
      return false;
    }
  }

  logout() {
    localStorage.clear();
  }

  signIn(name: string, email: string, password: string): void {
    const lastUser = this.users[this.users.length - 1];
    const newUser = { name, email, password, id: lastUser.id + 1 };
    this.users = [...this.users, newUser];
    localStorage.setItem('isLogged', JSON.stringify(newUser));
  }
}
