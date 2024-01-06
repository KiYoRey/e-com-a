import { Injectable } from '@angular/core';
import { Product } from '../../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartsService {

  product: Product[]=[
    {id: 1, name:"samira" , description: "jkkjnkjkj"},
    {id: 2, name:"israe" , description: "jkkjnkjkj"},
    {id: 3, name:"fstimszahra" , description: "jkkjnkjkj"},
    {id: 4, name:"laila" , description: "jkkjnkjkj"},
    {id: 5, name:"kadija" , description: "jkkjnkjkj"},




  ]

  constructor() { }

  getProduct(): Product[] {
    return this.product;
  }
}

