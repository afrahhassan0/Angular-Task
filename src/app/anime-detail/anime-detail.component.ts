import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, ActivatedRoute, Router } from '@angular/router';
import { Anime } from '../model/anime';
import { AnimeApiService } from '../anime-api.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-anime-detail',
  templateUrl: './anime-detail.component.html',
  styleUrls: ['./anime-detail.component.css']
})
export class AnimeDetailComponent implements OnInit {
  id: string;
  anime: Anime = new Anime();

  constructor( private currentRoute: ActivatedRoute , private http: AnimeApiService , private routeTo: Router) {
      
   }

  ngOnInit() {
    const anime = this.currentRoute.paramMap.pipe(
      switchMap( res=>{
        return this.http.getAnimeById( res.get('id') );
      })
    )
    anime.subscribe(res=>{
      this.anime = res;
      if(!this.anime){
        this.routeTo.navigate(['anime-home-page'])
      }
      console.log(this.anime);
    })
  }

}
