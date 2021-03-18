import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TAGS } from './interface/interface';
import { LoginComponent } from './page/login/login.component';
import { PlaceComponent } from './page/place/place.component';
const routes: Routes = [
  { path: TAGS.LOGIN, component: LoginComponent },
  { path: TAGS.PLACE, component: PlaceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
