import { Component, OnInit } from '@angular/core';
import { Anime } from '../model/anime';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimeApiService } from '../anime-api.service';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.css']
})

export class AnimeComponent implements OnInit {   
  topUrl: string="top/anime";
  anime: Anime;


  constructor( private currentRoute: ActivatedRoute , private routeTo: Router , private service: AnimeApiService) {
    this.anime = this.currentRoute.snapshot.data['anime'];
   }

  ngOnInit() {
    
  }

  goToDetail( id:string ){
    this.routeTo.navigate([ '/anime-detail' ] , { relativeTo: this.currentRoute })
  }

  stopLoad(){
    window.stop();
  }
  
}
