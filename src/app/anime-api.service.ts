import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Anime } from './model/anime';
import { PageInfo } from './model/page-info';

@Injectable({
  providedIn: 'root'
})
export class AnimeApiService {
  rootUrl: string = 'http://localhost:3000/';
  // topAnimeUrl: string = 'top/anime/';
  constructor(private httpService: HttpClient) { }

  getData( page:string ): Observable<Anime>{
    const completeUrl = this.rootUrl + 'anime/' + page;
    return this.httpService.get<Anime>(completeUrl).pipe(
      catchError( () => throwError("Error in retreiving data") )
    );
  }

  getAnimeById( id: string ):Observable<Anime>{
    return this.httpService.get<Anime>( this.rootUrl+ "anime/anime-detail/" + id ).pipe(
      catchError( () => throwError("Error in retreiving data") )
    )
  }


  getNbOfPages():Observable<PageInfo>{
    const completeUrl = this.rootUrl + "anime/length";
    return this.httpService.get<PageInfo>( completeUrl ).pipe(
      catchError ( ()=> throwError("Error") )
    )
  }

}
  

