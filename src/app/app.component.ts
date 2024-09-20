import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {ListItemComponent} from "../list-item/list-item.component";
import {CharacterListComponent} from "../character-list/character-list.component";
import {NgForOf} from "@angular/common";
import {AddCharacterComponent} from "../add-character/add-character.component";
import {MatAnchor, MatButton} from "@angular/material/button";
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {InfoBoxComponent} from "../info-box/info-box.component";
import {GameAreaComponent} from "../game-area/game-area.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListItemComponent, CharacterListComponent, NgForOf, AddCharacterComponent, MatButton, RouterLink, MatAnchor, MatGridList, MatGridTile, InfoBoxComponent, GameAreaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'GitcraftFrontend';
}
