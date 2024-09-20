import { Injectable } from '@angular/core';
import {CharacterModel} from "./model/character.model";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  characters: CharacterModel[] = []
  readonly baseUrl: string = 'http://localhost:5190/api/Character/'

  constructor(private http: HttpClient) {
  }

  getCharacters(): Observable<HttpResponse<any>> {
    return this.http
      .get(this.baseUrl + 'GetCharacters', {observe: 'response'});
  }

  addCharacter(character:CharacterModel): Observable<any> {
    return this.http.post(this.baseUrl + 'Create', character, {observe: 'response'})
  }
}
