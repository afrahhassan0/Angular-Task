import { Component, OnInit } from '@angular/core';
import { Anime } from '../model/anime';
import { ActivatedRoute, Router, RouterEvent, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';




@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.css']
})

export class AnimeComponent implements OnInit {   
  anime: Anime;
  pageNb: number;
  refreshSubscription: Subscription;

  constructor( private currentRoute: ActivatedRoute , private routeTo: Router ) {
    this.anime = this.currentRoute.snapshot.data['anime'];

    this.routeTo.routeReuseStrategy.shouldReuseRoute = ()=> {
      return false;
    };   

    this.refreshSubscription = this.routeTo.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.routeTo.navigated = false;
      }
    });
   }

  ngOnInit() {
    this.currentRoute.paramMap.subscribe( res => {
      this.pageNb = parseInt(res.get('page'));
    })
  } 

  ngOnDestroy(){
    if( this.refreshSubscription ) this.refreshSubscription.unsubscribe();
  }

  updatePage(pageNumber){
   this.routeTo.navigate( [ '/anime-home-page/'+pageNumber ]);
  
   console.log(pageNumber)
  }

  stopLoad(){
    window.stop();
  }
  
}
