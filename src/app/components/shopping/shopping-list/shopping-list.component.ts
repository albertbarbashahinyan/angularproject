import { Component, OnInit } from '@angular/core';
import {ShopServiceService} from '../../../shared/services/shop-service.service';
import {ShoppingList} from '../../../shared/models/shopping-list';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  shoppingLists: ShoppingList[] = [];
  constructor(private service: ShopServiceService) { }

  ngOnInit(): void {
    this.shoppingLists = this.service.shoppingList;
  }

}
