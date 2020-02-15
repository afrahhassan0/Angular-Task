import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Anime } from './model/anime';

@Injectable({
  providedIn: 'root'
})
export class AnimeApiService {
  rootUrl: string = 'http://localhost:3000/';
  // topAnimeUrl: string = 'top/anime/';
  constructor(private httpService: HttpClient) { }

  getData( ): Observable<Anime>{
    let completeUrl = this.rootUrl + 'anime';
    return this.httpService.get<Anime>(completeUrl).pipe(
      catchError( () => throwError("Error in retreiving data") )
    );
  }

  getAnimeById( id: string ):Observable<Anime>{
    return this.httpService.get<any>( this.rootUrl+ "anime/" + id ).pipe(
      catchError( () => throwError("Error in retreiving data") )
    )
  }

}
  

