import { Component } from '@angular/core';
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-game-area',
  standalone: true,
  imports: [
    MatGridList,
    MatGridTile,
    MatFormField,
    MatInput,
    MatButton
  ],
  templateUrl: './game-area.component.html',
  styleUrl: './game-area.component.css'
})
export class GameAreaComponent {

}
