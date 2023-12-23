import { Component } from '@angular/core';
import { FooterComponent } from '../../../shared/components/footer/footer.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
}
