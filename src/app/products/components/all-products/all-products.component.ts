import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Console, error } from 'console';

@Component({
  selector: 'app-all-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.scss'
})
export class AllProductsComponent implements OnInit {
  httpClient = inject(HttpClient);

  
  item: any =[];


  ngOnInit(): void {
    this.getALLProducts();
    this.getCategori();
  }
  getALLProducts(){
    this.httpClient.get('https://fakestoreapi.com/products').subscribe((item: any) =>{
      // console.log(item);
      this.item = item;
    }, error => {
      alert("error")
      // console.log(error.message);
      
    })
  }

  getCategori(){
    this.httpClient.get('https://fakestoreapi.com/products/categories').subscribe((cat: any) =>{
      console.log(cat);  
    this.item =cat;
      
    })
  }

}
