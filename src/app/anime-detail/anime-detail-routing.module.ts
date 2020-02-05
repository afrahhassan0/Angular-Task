import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnimeDetailComponent } from './anime-detail.component';

const routes: Routes = [
  { path: '', component: AnimeDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimeDetailRoutingModule { }
