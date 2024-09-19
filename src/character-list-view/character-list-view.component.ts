import { Component } from '@angular/core';
import {CharacterListComponent} from "../character-list/character-list.component";
import {AddCharacterComponent} from "../add-character/add-character.component";

@Component({
  selector: 'app-character-list-view',
  standalone: true,
  imports: [
    CharacterListComponent,
    AddCharacterComponent
  ],
  templateUrl: './character-list-view.component.html',
  styleUrl: './character-list-view.component.css'
})
export class CharacterListViewComponent {

}
