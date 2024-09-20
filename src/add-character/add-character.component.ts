import { Component } from '@angular/core';
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {FormsModule} from "@angular/forms";
import {CharacterService} from "../character.service";
import {CharacterModel} from "../model/character.model";
import { Guid } from "guid-typescript";

@Component({
  selector: 'app-add-character',
  standalone: true,
  imports: [
    MatFormField,
    MatInput,
    MatLabel,
    MatButton,
    FormsModule
  ],
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {
  charName: string = ''
  charRace: string = ''
  className: string = ''
  imageUrl: string = ''

  constructor(private service: CharacterService) {
  }

  addCharacter() {
    let character: CharacterModel = {
      id: Guid.create().toString(),
      name: this.charName,
      class: this.className,
      race: this.charRace,
      image: this.imageUrl
    }

    this.service.addCharacter(character).subscribe({
      next: (response) => {
        console.log(response.body)
      },
      error: (err) => {
        console.log(err)
      }
    })
  }
}
