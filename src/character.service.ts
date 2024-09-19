import { Injectable } from '@angular/core';
import {CharacterModel} from "./model/character.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  characters: CharacterModel[] = []

  constructor(private http: HttpClient) {
  }

  getCharacters(): Observable<CharacterModel[]> {
    return this.http.get<CharacterModel[]>('http://localhost:5190/api/Character/GetCharacters');
  }

  addCharacter(character:CharacterModel) {
    this.characters.push(character);
  }
}
