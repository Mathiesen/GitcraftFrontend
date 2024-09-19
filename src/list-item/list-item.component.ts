import {Component, Input} from '@angular/core';
import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardSmImage,
  MatCardSubtitle, MatCardTitle,
  MatCardTitleGroup
} from "@angular/material/card";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-list-item',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitleGroup,
    MatCardSmImage,
    MatCardContent,
    MatCardSubtitle,
    MatCardTitle,
    NgOptimizedImage
  ],
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.css'
})
export class ListItemComponent {
  @Input() name: string = ''
  @Input() image: string = '';
  @Input() race: string = '';



}
