import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnimeComponent } from './anime.component';

const routes: Routes = [
  { 
    path: '', 
    component: AnimeComponent,
    
   },
   { path: 'anime-detail', loadChildren: () => import('../anime-detail/anime-detail.module').then(m => m.AnimeDetailModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimeRoutingModule { }
