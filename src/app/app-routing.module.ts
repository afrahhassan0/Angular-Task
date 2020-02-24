import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OhayogozaimasuComponent } from './ohayogozaimasu/ohayogozaimasu.component';
import { LoginComponent } from './login/login.component';
import { BtnGroupComponent } from './btn-group/btn-group.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [ 
  {
    path: 'welcome',
    component: OhayogozaimasuComponent,
    children: [
      { path:'login' , component: LoginComponent  },
      { path:'register' , component: RegisterComponent },
      { path: '' , component: BtnGroupComponent }
    ]
  },

  {
    path: 'anime-home-page',
    redirectTo: 'anime-home-page/:page',
    pathMatch: "full"
  },

  { path: 'anime-home-page/:page', loadChildren: () => import('./anime/anime.module').then(m => m.AnimeModule) },
   //default
   {
    path: "",
    redirectTo: 'welcome',
    pathMatch: "full"
    // component: OhayogozaimasuComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes , {
    onSameUrlNavigation: "reload"
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
