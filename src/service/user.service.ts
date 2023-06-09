import { Injectable } from '@nestjs/common';
import { User, UserData } from 'src/schema/user.schema';

Injectable();
export class UserService {
  private users: User[] = [];

  createUser(userData: UserData): User {
    this.users.push(userData);

    return userData;
  }

  getUserById(id: number): User | null {
    return this.users.find((user: User) => user.id === id) || null;
  }

  getUserByEmail(email: string): User {
    return this.users.find((user: User) => user.email === email);
  }

  getAllUsers(): User[] {
    return this.users;
  }
}
