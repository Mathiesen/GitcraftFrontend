import {Component, OnInit} from '@angular/core';
import {Router, RouterLink, RouterOutlet} from '@angular/router';
import {ListItemComponent} from "../list-item/list-item.component";
import {CharacterListComponent} from "../character-list/character-list.component";
import {NgForOf} from "@angular/common";
import {AddCharacterComponent} from "../add-character/add-character.component";
import {MatAnchor, MatButton} from "@angular/material/button";
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {InfoBoxComponent} from "../info-box/info-box.component";
import {GameAreaComponent} from "../game-area/game-area.component";
import {LoginComponent} from "../login/login.component";
import {Authservice} from "../services/authservice.service";
import {HomeComponent} from "../home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListItemComponent, CharacterListComponent, NgForOf, AddCharacterComponent, MatButton, RouterLink, MatAnchor, MatGridList, MatGridTile, InfoBoxComponent, GameAreaComponent, LoginComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'GitcraftFrontend';

  constructor(private authService: Authservice, private router: Router) {
  }

  ngOnInit(): void {
        if (this.authService.isTokenExpired()) {
          this.authService.removeToken();
          this.router.navigate(['']);
        }
    }


}
