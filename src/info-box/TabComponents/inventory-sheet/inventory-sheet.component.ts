import { Component } from '@angular/core';
import {MatCard, MatCardSmImage} from "@angular/material/card";
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {NgForOf, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-inventory-sheet',
  standalone: true,
  imports: [
    MatCard,
    MatCardSmImage,
    MatGridList,
    MatGridTile,
    NgForOf,
    NgOptimizedImage
  ],
  templateUrl: './inventory-sheet.component.html',
  styleUrl: './inventory-sheet.component.css'
})
export class InventorySheetComponent {
  items: number[] = [];

  ngOnInit() {
    for (let i = 0; i <= 10; i++) {
      this.items.push(i);
    }

    console.log(this.items);
  }
}
