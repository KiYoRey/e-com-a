import { Component } from '@angular/core';
import { CartItemComponent } from './cart-item/cart-item.component';

@Component({
  selector: 'app-carts',
  standalone: true,
  imports: [CartItemComponent],
  templateUrl: './carts.component.html',
  styleUrl: './carts.component.scss'
})
export class CartsComponent {
  cartItem=[
    {id:1, name:"kkk", price:500},
    {id:2, name:"lll", price:500},
    {id:3, name:"mmm", price:500},

  ]

  constructor(){}
  ngOnInit(){
    
  }

}
