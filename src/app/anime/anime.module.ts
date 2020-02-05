import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimeRoutingModule } from './anime-routing.module';
import { AnimeComponent } from './anime.component';
import { HttpClientModule } from '@angular/common/http';
import { AnimeApiService } from '../anime-api.service';
import { HeaderAndFooterSharedModule } from '../header-and-footer-shared/header-and-footer-shared.module';

@NgModule({
  declarations: [AnimeComponent],
  imports: [
    CommonModule,
    AnimeRoutingModule, 
    HttpClientModule,
    HeaderAndFooterSharedModule
  ]
  
})
export class AnimeModule { }
