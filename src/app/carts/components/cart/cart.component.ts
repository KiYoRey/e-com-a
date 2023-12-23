import { Component } from '@angular/core';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { CartsComponent } from '../carts/carts.component';
import { FiltersComponent } from '../filters/filters.component';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [FooterComponent,CartsComponent,FiltersComponent,ProductListComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
}
