import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimeRoutingModule } from './anime-routing.module';
import { AnimeComponent } from './anime.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../header-and-footer-shared/shared-module';
import { AuthGuard } from '../auth.guard';
import { PaginatorComponent } from './paginator/paginator.component';

@NgModule({
  declarations: [AnimeComponent, PaginatorComponent],
  imports: [
    CommonModule,
    AnimeRoutingModule, 
    HttpClientModule,
    SharedModule
  ],
  
  providers:[AuthGuard]
})
export class AnimeModule { }
