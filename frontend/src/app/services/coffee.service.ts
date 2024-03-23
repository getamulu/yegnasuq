import { sample_foods, sample_tags } from '../../data';

import { Coffee } from '../shared/models/Coffee';
import { Injectable } from '@angular/core';
import { Tag } from '../shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {

  constructor() { }

  getAll():Coffee[]{
    return sample_foods;
  }

  getAllCoffeeBySearchTerm(searchTerm: string) {
    return this.getAll().filter(coffee => coffee.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }

  getAllTags(): Tag[]{
    return sample_tags;
  }

  getaAllCoffeeByTag(tag:string):Coffee[]{
    return tag === "All"? this.getAll():this.getAll().filter(coffee => coffee.tags?.includes(tag));
  }

  getCoffeeById(coffeeId:string):Coffee{
    return this.getAll().find(coffee => coffeeId == coffee.id) ?? new Coffee();
  }
}
