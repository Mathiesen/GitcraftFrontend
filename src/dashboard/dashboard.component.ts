import {Component, OnInit} from '@angular/core';
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {InfoBoxComponent} from "../info-box/info-box.component";
import {GameAreaComponent} from "../game-area/game-area.component";
import {MatButton} from "@angular/material/button";
import {Authservice} from "../services/authservice.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MatGridList,
    MatGridTile,
    InfoBoxComponent,
    GameAreaComponent,
    MatButton
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{

  userId: string | null = "";
  constructor(private authService: Authservice, private route: Router) {
  }

  ngOnInit(): void {
        this.userId = this.authService.getId();

    }

  logout() {
    this.authService.removeToken();
    this.route.navigate(['']);
  }

  secretPage() {
    this.route.navigate(['/Secretpage']);
  }
}
