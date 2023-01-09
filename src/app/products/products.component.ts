import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: any;
  cart: any;

  constructor(private service: CustomerService) { 
    this.cart = [];
    //localStorage.clear();

    this.products = [
      {id: 1001, name:'OnePlus Nord2', price:'13499.00', imagePath:'assets/images/10001.jpg', description:'No cost EMI from 1500/-, Standard EMI plans also available.'},
      {id: 1002, name:'Nokia A6',      price:'13499.00', imagePath:'assets/images/10002.jpg', description:'No cost EMI from 1500/-, Standard EMI plans also available.'},
      {id: 1003, name:'Samsung A5',    price:'13499.00', imagePath:'assets/images/10003.jpg', description:'No cost EMI from 1500/-, Standard EMI plans also available.'},
      {id: 1004, name:'Blackberry',    price:'13499.00', imagePath:'assets/images/10004.jpg', description:'No cost EMI from 1500/-, Standard EMI plans also available.'},
      {id: 1005, name:'Samsung J7',    price:'13499.00', imagePath:'assets/images/10005.jpg', description:'No cost EMI from 1500/-, Standard EMI plans also available.'},
      {id: 1006, name:'Nokia A6 Pro',  price:'13499.00', imagePath:'assets/images/10006.jpg', description:'No cost EMI from 1500/-, Standard EMI plans also available.'}
    ];
  }


  ngOnInit(): void {
  }
  
  addcart(product : any){
    this.service.addToCart(product);
    // this.cart.push(product);
    // localStorage.setItem('cartItems' , JSON.stringify(this.cart));
  }
  

}
