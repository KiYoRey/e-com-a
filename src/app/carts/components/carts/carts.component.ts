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

}
