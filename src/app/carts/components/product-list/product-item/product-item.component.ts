import { Component } from '@angular/core';
// import { CartsService } from '../../../services/carts.service'; 
// import { Product } from '../../../../models/product';
import { MessengerService } from '../../../services/messenger.service';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss'
})
export class ProductItemComponent {

// need to add @input  so i can inject messengerseervice
constructor(private msg: MessengerService){}

ngOninit(){}

handleAddtoCart(){
  this.msg.sendMsg()
}

}

