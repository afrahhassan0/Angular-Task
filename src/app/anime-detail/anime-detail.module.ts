import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimeDetailRoutingModule } from './anime-detail-routing.module';
import { AnimeDetailComponent } from './anime-detail.component';
import { SharedModule } from '../header-and-footer-shared/shared-module';


@NgModule({
  declarations: [AnimeDetailComponent],
  imports: [
    CommonModule,
    AnimeDetailRoutingModule,
    SharedModule
  ]
})
export class AnimeDetailModule {}
