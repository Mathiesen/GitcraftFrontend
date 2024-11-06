import {Component, Input, OnInit} from '@angular/core';
import {MatCard} from "@angular/material/card";
import {MatTab, MatTabGroup} from "@angular/material/tabs";
import {CharacterSheetComponent} from "./TabComponents/character-sheet/character-sheet.component";
import {InventorySheetComponent} from "./TabComponents/inventory-sheet/inventory-sheet.component";
import {MatLabel} from "@angular/material/form-field";

@Component({
  selector: 'app-info-box',
  standalone: true,
  imports: [
    MatCard,
    MatTabGroup,
    MatTab,
    CharacterSheetComponent,
    InventorySheetComponent,
    MatLabel
  ],
  templateUrl: './info-box.component.html',
  styleUrl: './info-box.component.css'
})
export class InfoBoxComponent implements OnInit{

@Input() userId: string = "";

  ngOnInit(): void {
    console.log(this.userId);
  }
}
