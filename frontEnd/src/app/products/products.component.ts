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
  laptops: any;
  desktops: any;

  constructor(private service: CustomerService) { 
    this.cart = [];
   

    this.products = [
      {id: 1001, name:'OnePlus Nord2', price:'₹50000', imagePath:'https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-nord-ce-2-5g-1.jpg', description:"camera :64MP , processor:mediatek diamondcity 900"},
      {id: 1002, name:'Nokia G21',      price:'13499.00', imagePath:'https://fdn2.gsmarena.com/vv/pics/nokia/nokia-g21-dusk.jpg', description:'No cost EMI from 1500/-, Standard EMI plans also available.'},
      {id: 1003, name:'Iphone 12',    price:'120499.00', imagePath:'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-12-r1.jpg', description:'No cost EMI from 1500/-, Standard EMI plans also available.'},
      {id: 1004, name:'Blackberry',    price:'13499.00', imagePath:'https://fdn2.gsmarena.com/vv/pics/blackberry/blackberry-key2-le-3.jpg', description:'No cost EMI from 1500/-, Standard EMI plans also available.'},
      {id: 1005, name:'Samsung J7',    price:'13499.00', imagePath:'assets/products/10005.jpg', description:'No cost EMI from 1500/-, Standard EMI plans also available.'},
      {id: 1006, name:'Nokia A6 Pro',  price:'13499.00', imagePath:'assets/products/10006.jpg', description:'No cost EMI from 1500/-, Standard EMI plans also available.'},
      {id: 1007, name:'Samsung J7',    price:'13499.00', imagePath:'assets/products/10005.jpg', description:'No cost EMI from 1500/-, Standard EMI plans also available.'},
      {id: 1008, name:'Nokia A6 Pro',  price:'13499.00', imagePath:'assets/products/10006.jpg', description:'No cost EMI from 1500/-, Standard EMI plans also available.'}
    ];

    this.laptops = [
      {id: 1009, name:'Hp pevilion', price:'₹80000', imagePath:'https://d2xamzlzrdbdbn.cloudfront.net/products/34499d01-a63e-42c5-98c3-9505903bae1922011259.jpg', description:'No cost EMI from 1500/-, Standard EMI plans also available.'},
      {id: 1010, name:'dell inspiron', price:'₹76000', imagePath:'https://d2xamzlzrdbdbn.cloudfront.net/products/6a94ad6b-ae8e-4479-b6ef-cba7d0bf180922221224.jpg', description:'No cost EMI from 1500/-, Standard EMI plans also available.'},
      {id: 1011, name:'Asus Vivo Book', price:'₹45000', imagePath:'https://d2xamzlzrdbdbn.cloudfront.net/products/76fba40b-b2d1-41de-95fa-19b090affe9e22231246.jpg', description:'No cost EMI from 1500/-, Standard EMI plans also available.'},
      {id: 1012, name:'Apple Mac book', price:'₹176000', imagePath:'https://d2xamzlzrdbdbn.cloudfront.net/products/11a2b820-4d2e-4ed1-a4ab-2f81f0c1516621211328.jpg', description:'No cost EMI from 1500/-, Standard EMI plans also available.'},
      {id: 1012, name:'lenovo', price:'₹76000', imagePath:'https://d2xamzlzrdbdbn.cloudfront.net/products/4d59cc65-e0a7-4599-9610-fe14a445a56122301245.jpg', description:'No cost EMI from 1500/-, Standard EMI plans also available.'},

    ];

    this.desktops = [
      {id: 1014, name:'Hp pevilion', price:'₹80000', imagePath:'https://d2xamzlzrdbdbn.cloudfront.net/products/791527dd-274c-40a7-85b8-33ad4d75500c22271107.jpg', description:'No cost EMI from 1500/-, Standard EMI plans also available.'},
      {id: 1015, name:'dell inspiron', price:'₹76000', imagePath:'https://d2xamzlzrdbdbn.cloudfront.net/products/1a4b027b-a906-4f47-8721-57669bd06b1e22301337.jpg', description:'No cost EMI from 1500/-, Standard EMI plans also available.'},
      {id: 1016, name:'Hp pevilion', price:'₹80000', imagePath:'https://d2xamzlzrdbdbn.cloudfront.net/products/950387ff-b02e-45db-a560-d98ba25e313422060939.jpg', description:'No cost EMI from 1500/-, Standard EMI plans also available.'},
      {id: 1017, name:'dell inspiron', price:'₹76000', imagePath:'https://d2xamzlzrdbdbn.cloudfront.net/products/6a94ad6b-ae8e-4479-b6ef-cba7d0bf180922221224.jpg', description:'No cost EMI from 1500/-, Standard EMI plans also available.'},
    ]
  }


  ngOnInit(): void {
  }
  
  addcart(product : any){
    this.service.addToCart(product);
  }

}
