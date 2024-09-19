import { Routes } from '@angular/router';
import {HomeComponent} from "../home/home.component";
import {CharacterListViewComponent} from "../character-list-view/character-list-view.component";

export const routes: Routes = [
  {path: 'Home', component: HomeComponent},
  {path: 'CharacterList', component: CharacterListViewComponent}
];
