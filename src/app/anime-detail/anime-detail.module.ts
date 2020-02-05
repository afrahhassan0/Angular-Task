import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimeDetailRoutingModule } from './anime-detail-routing.module';
import { AnimeDetailComponent } from './anime-detail.component';
import { HeaderAndFooterSharedModule } from '../header-and-footer-shared/header-and-footer-shared.module';


@NgModule({
  declarations: [AnimeDetailComponent],
  imports: [
    CommonModule,
    AnimeDetailRoutingModule,
    HeaderAndFooterSharedModule
  ]
})
export class AnimeDetailModule {}
