import { Component } from '@angular/core';
import {MatGridList, MatGridTile} from "@angular/material/grid-list";

@Component({
  selector: 'app-character-sheet',
  standalone: true,
  imports: [
    MatGridList,
    MatGridTile
  ],
  templateUrl: './character-sheet.component.html',
  styleUrl: './character-sheet.component.css'
})
export class CharacterSheetComponent {

}
