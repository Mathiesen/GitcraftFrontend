import { Component } from '@angular/core';
import {MatList} from "@angular/material/list";
import {ListItemComponent} from "../list-item/list-item.component";
import {CharacterModel} from "../model/character.model";
import {CharacterService} from "../character.service";
import {of} from "rxjs";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [
    MatList,
    ListItemComponent,
    NgForOf
  ],
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.css'
})
export class CharacterListComponent {
  characters: CharacterModel[] = []

  constructor(private characterService: CharacterService) {
  }

  ngOnInit() {
    this.characterService
      .getCharacters()
      .subscribe({
        next:(response) => {
          if (response.status === 200) {
            this.characters = response.body
          }
        },
        error:(err) => {
          console.log(err)
        }
      });
  }

  protected readonly of = of;
}

