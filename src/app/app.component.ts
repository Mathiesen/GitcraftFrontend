import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {ListItemComponent} from "../list-item/list-item.component";
import {CharacterListComponent} from "../character-list/character-list.component";
import {NgForOf} from "@angular/common";
import {AddCharacterComponent} from "../add-character/add-character.component";
import {MatAnchor, MatButton} from "@angular/material/button";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListItemComponent, CharacterListComponent, NgForOf, AddCharacterComponent, MatButton, RouterLink, MatAnchor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'GitcraftFrontend';
}
