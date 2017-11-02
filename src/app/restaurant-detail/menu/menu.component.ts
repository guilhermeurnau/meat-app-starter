import { Component, OnInit } from '@angular/core';

import { MenuItem } from '../menu-item/menu-item.model'
import { RestaurantsService } from '../../restaurants/restaurants.service'
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  menuItens: Observable<MenuItem[]>

  constructor(private restaurantService: RestaurantsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.menuItens = this.restaurantService.menuOfRestaurant(this.route.snapshot.parent.params['id']);
  }

  addMenuItem(item: MenuItem){
    
  }
}
