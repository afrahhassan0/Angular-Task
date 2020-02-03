import { Component, OnInit } from '@angular/core';
import { Anime } from '../model/anime';
import { AnimeApiService } from '../anime-api.service'
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.css']
})
export class AnimeComponent implements OnInit {
  animeData: Anime[] = new Array<Anime>();
  topUrl: string="top/anime";

  constructor( private apiService: AnimeApiService) { }

  ngOnInit() {
    this.apiService.getAnimeData(this.topUrl).subscribe(
      data=> console.log(data)
    )  }

}
