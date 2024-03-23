import { CoffeeService } from '../../../services/coffee.service';
import { Component } from '@angular/core';
import { Tag } from '../../../shared/models/Tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css'
})
export class TagsComponent {
  tags?: Tag[];
  constructor(coffeeService:CoffeeService){
    coffeeService.getAllTags().subscribe(serverTags => {
      this.tags = serverTags;
    });
  }
}
