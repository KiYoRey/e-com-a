import { Routes } from '@angular/router';
import { AllProductsComponent } from './products/components/all-products/all-products.component';
import { ProductsDetailsComponent } from './products/components/products-details/products-details.component';
import { CartComponent } from './carts/components/cart/cart.component';

export const routes: Routes = [
    {path:"products", component:AllProductsComponent},
    {path:"det", component:ProductsDetailsComponent},
    {path:"carts", component:CartComponent},
    {path:"**", redirectTo:"carts", pathMatch:'full'}

];
