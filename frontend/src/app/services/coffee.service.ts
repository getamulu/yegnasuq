import { COFFEE_BY_ID_URL, COFFEE_BY_SEARCH_URL, COFFEE_BY_TAG_URL, COFFEE_TAGS_URL, COFFEE_URL } from '../shared/constants/urls';
import { sample_foods, sample_tags } from '../../data';

import { Coffee } from '../shared/models/Coffee';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tag } from '../shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {

  constructor(private http : HttpClient) { }

  getAll():Observable<Coffee[]>{
    return this.http.get<Coffee[]>(COFFEE_URL);
  }

  getAllCoffeeBySearchTerm(searchTerm: string) {
    return this.http.get<Coffee[]>(COFFEE_BY_SEARCH_URL + searchTerm);
  }

  getAllTags(): Observable<Tag[]>{
    return this.http.get<Tag[]>(COFFEE_TAGS_URL);
  }

  getaAllCoffeeByTag(tag:string):Observable<Coffee[]>{
    return tag === "All"?
     this.getAll():
     this.http.get<Coffee[]>(COFFEE_BY_TAG_URL + tag);
  }   

  getCoffeeById(coffeeId:string): Observable<Coffee>{
    return this.http.get<Coffee>(COFFEE_BY_ID_URL + coffeeId);
  }
}
