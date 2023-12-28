import { Component } from '@angular/core';
import { ProductItemComponent } from './product-item/product-item.component';

import { CartsService } from '../../services/carts.service';
import { Product } from '../../../models/product';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {

  productlist: Product[] = []

  constructor( private cartservice:CartsService){}

  ngOnInit():void{
    // console.log(this.cartservice.getProduct())
    this.productlist = this.cartservice.getProduct()
  }

}
