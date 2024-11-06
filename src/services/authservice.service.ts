import { Injectable } from '@angular/core';
import { jwtDecode } from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class Authservice {

  constructor() { }

  saveToken(token: string): void {
    localStorage.setItem('authToken', token);
  }

  saveId(id: string): void {
    localStorage.setItem('userId', id);
  }

  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  getId(): string | null {
    return localStorage.getItem('userId');
  }

  removeToken(): void {
    localStorage.removeItem('authToken');
  }

  isAuthenticated(): boolean {
    return !this.isTokenExpired();
  }

  isTokenExpired(): boolean {
    const token = this.getToken();
    if (token) {
      const decoded: any = jwtDecode(token);
      const expiry = decoded.exp * 1000;
      return Date.now() > expiry;
    }
    return true;
  }
}
