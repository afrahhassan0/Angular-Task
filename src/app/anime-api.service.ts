import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Anime } from './model/anime';

@Injectable({
  providedIn: 'root'
})
export class AnimeApiService {
  rootUrl: string= "https://api.jikan.moe/v3/"
  constructor(private httpService: HttpClient) { }

  getAnimeData( url ): Observable<Anime[]>{
    return this.httpService.get<Anime[]>(this.rootUrl+url).pipe(
      catchError( () => throwError("Error in retreiving data") )
    );
  }
  

}
