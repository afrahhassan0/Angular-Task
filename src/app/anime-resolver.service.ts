import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AnimeApiService } from './anime-api.service';
import { catchError } from 'rxjs/operators';
import { empty, Observable } from 'rxjs';
import { Anime } from './model/anime';

@Injectable({
  providedIn: 'root'
})
export class AnimeResolverService implements Resolve<Anime> {
  private url: string;
  constructor(private service: AnimeApiService){}

  resolve(route: ActivatedRouteSnapshot , state: RouterStateSnapshot):Observable<Anime>{
    
    return this.service.getData( route.paramMap.get('page') ).pipe(
      catchError((error)=> {
        return empty();
      }
    )
  )}

  
}
