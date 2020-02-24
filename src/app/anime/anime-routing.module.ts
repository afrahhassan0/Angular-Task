import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnimeComponent } from './anime.component';
import { AnimeResolverService } from '../anime-resolver.service';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [
  { 
    path: '', 
    component: AnimeComponent,
    resolve: { anime: AnimeResolverService },
    canActivate: [AuthGuard],    
   },
   { path: 'anime-detail/:id', loadChildren: () => import('../anime-detail/anime-detail.module').then(m => m.AnimeDetailModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimeRoutingModule { }
