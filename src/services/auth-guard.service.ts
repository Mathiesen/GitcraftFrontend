import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router
} from "@angular/router";
import {Authservice} from "./authservice.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService: Authservice, private router: Router) {
  }

  canActivate(): boolean {
      if (this.authService.isAuthenticated()) {
        return true;
      } else {
        this.router.navigate(['']);
        return false;
      }
    }
}
