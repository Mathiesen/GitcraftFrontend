import { Routes } from '@angular/router';
import {HomeComponent} from "../home/home.component";
import {CharacterListViewComponent} from "../character-list-view/character-list-view.component";
import {DashboardComponent} from "../dashboard/dashboard.component";
import {LoginComponent} from "../login/login.component";
import {AuthGuardService} from "../services/auth-guard.service";
import {SecretpageComponent} from "../secretpage/secretpage.component";

export const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'Home', component: HomeComponent},
  {path: 'CharacterList', component: CharacterListViewComponent},
  {path: 'Dashboard', component: DashboardComponent, canActivate: [AuthGuardService]},
  {path: 'Secretpage', component: SecretpageComponent}
];
