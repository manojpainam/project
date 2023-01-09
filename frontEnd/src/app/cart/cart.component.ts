import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit{
   data : any;
   cartItems : any;
   total : any;
    
   constructor(private service: CustomerService){
    this.total = 0;
  }
   

  ngOnInit(): void {
    // this.data = localStorage.getItem('cartItems');
    // this.cartItems = JSON.parse(this.data);
    this.cartItems = this.service.cartItems;

    this.cartItems.forEach((product : any)=>{
      this.total+=Number(product.price);
    })
  }


}
