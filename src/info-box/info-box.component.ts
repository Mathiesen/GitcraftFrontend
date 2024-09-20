import { Component } from '@angular/core';
import {MatCard} from "@angular/material/card";
import {MatTab, MatTabGroup} from "@angular/material/tabs";
import {CharacterSheetComponent} from "../character-sheet/character-sheet.component";

@Component({
  selector: 'app-info-box',
  standalone: true,
  imports: [
    MatCard,
    MatTabGroup,
    MatTab,
    CharacterSheetComponent
  ],
  templateUrl: './info-box.component.html',
  styleUrl: './info-box.component.css'
})
export class InfoBoxComponent {

}
