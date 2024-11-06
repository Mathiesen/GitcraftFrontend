import { Component } from '@angular/core';
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {MatCard, MatCardAvatar, MatCardSmImage, MatCardTitleGroup} from "@angular/material/card";

@Component({
  selector: 'app-character-sheet',
  standalone: true,
  imports: [
    MatGridList,
    MatGridTile,
    MatCardTitleGroup,
    MatCard,
    MatCardAvatar,
    MatCardSmImage
  ],
  templateUrl: './character-sheet.component.html',
  styleUrl: './character-sheet.component.css'
})
export class CharacterSheetComponent {

}
