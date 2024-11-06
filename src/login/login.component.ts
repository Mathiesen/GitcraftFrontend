import { Component } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Authservice} from "../services/authservice.service";
import {Router} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButton} from "@angular/material/button";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    MatButton,
    MatFormField,
    MatInput,
    MatLabel,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  readonly baseUrl: string = 'http://localhost:5190/api/Auth/'

  constructor(private http: HttpClient, private authService: Authservice, private router: Router) {
  }

  login(): void {
    const headers = new HttpHeaders({'content-type': 'application/json'});

    this.http.post<{token: string, id: string}>(this.baseUrl + 'Login',
      {
        username: this.username,
        password: this.password
      }, { headers }).subscribe({
      next: (response) => {
        this.authService.saveToken(response.token);
        this.authService.saveId(response.id);
        this.router.navigate(['/Dashboard']);
      }, error: err => {
        console.log(err)
      }
    });
  }
}
