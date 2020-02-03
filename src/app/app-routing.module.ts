import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OhayogozaimasuComponent } from './ohayogozaimasu/ohayogozaimasu.component';
import { Z_FULL_FLUSH } from 'zlib';
import { LoginComponent } from './login/login.component';
import { BtnGroupComponent } from './btn-group/btn-group.component';


const routes: Routes = [ 
  {
    path: 'welcome',
    component: OhayogozaimasuComponent,
    children: [
      { path:'login' , component: LoginComponent },
      { path: '' , component: BtnGroupComponent }
    ]
  },
   //default
   {
    path: "",
    redirectTo: 'welcome',
    pathMatch: "full"
    // component: OhayogozaimasuComponent
  },
  { path: 'anime-home-page', loadChildren: () => import('./anime/anime.module').then(m => m.AnimeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
