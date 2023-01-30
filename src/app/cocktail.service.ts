import { Injectable } from '@angular/core';
import { Cocktail } from './models/cocktail.model';
import { Observable } from 'rxjs/internal/Observable';
import{ HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CocktailService {


  constructor(public http: HttpClient) {}

  getCocktails(): Observable<Cocktail[]> {
    return this.http.get<Cocktail[]>("../assets/data.json");
  }

  
  
}