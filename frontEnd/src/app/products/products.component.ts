import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
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
  filterCategory: any;
  searchKey: string="";

  constructor(private service: CustomerService,private service2:CartService) { 
    this.cart = [];
   

    this.products = [
      {id: 1001, "title":'OnePlus Nord2', price: 50000.00, image:'https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-nord-ce-2-5g-1.jpg', description:"camera :64MP , processor:mediatek diamondcity 900", "category":"mobile"},
      {id: 1002, "title":'Nokia G21',      price: 13499.00, image:'https://fdn2.gsmarena.com/vv/pics/nokia/nokia-g21-dusk.jpg', description:'No cost EMI from 1500/-, Standard EMI plans also available.',"category":"mobile"},
      {id: 1003,"title":'Iphone 12',    price: 120499.00, image:'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-12-r1.jpg', description:'No cost EMI from 1500/-, Standard EMI plans also available.',"category":"mobile"},
      {id: 1004,"title":'Blackberry',    price: 13499.00, image:'https://fdn2.gsmarena.com/vv/pics/blackberry/blackberry-key2-le-3.jpg', description:'No cost EMI from 1500/-, Standard EMI plans also available.',"category":"mobile"},
      {id: 1005,"title":'Samsung J7',    price: 13499.00, image:'assets/products/10005.jpg', description:'No cost EMI from 1500/-, Standard EMI plans also available.',"category":"mobile"},
      {id: 1006,"title":'Nokia A6 Pro',  price: 13499.00, image:'assets/products/10006.jpg', description:'No cost EMI from 1500/-, Standard EMI plans also available.',"category":"mobile"},
      {id: 1007,"title":'Samsung J7',    price: 13499.00, image:'assets/products/10005.jpg', description:'No cost EMI from 1500/-, Standard EMI plans also available.',"category":"mobile"},
      {id: 1008,"title":'Nokia A6 Pro',  price: 13499.00, image:'assets/products/10006.jpg', description:'No cost EMI from 1500/-, Standard EMI plans also available.',"category":"mobile"},
      {id: 1009,"title":'Hp pevilion', price: 80000.00, image:'https://d2xamzlzrdbdbn.cloudfront.net/products/34499d01-a63e-42c5-98c3-9505903bae1922011259.jpg', description:'No cost EMI from 1500/-, Standard EMI plans also available.',"category":"laptop"},
      {id: 1010,"title":'dell inspiron', price: 76000.00, image:'https://d2xamzlzrdbdbn.cloudfront.net/products/6a94ad6b-ae8e-4479-b6ef-cba7d0bf180922221224.jpg', description:'No cost EMI from 1500/-, Standard EMI plans also available.',"category":"laptop"},
      {id: 1011,"title":'Asus Vivo Book', price: 45000.00, image:'https://d2xamzlzrdbdbn.cloudfront.net/products/76fba40b-b2d1-41de-95fa-19b090affe9e22231246.jpg', description:'No cost EMI from 1500/-, Standard EMI plans also available.',"category":"laptop"},
      {id: 1012,"title":'Apple Mac book', price: 176000.00, image:'https://d2xamzlzrdbdbn.cloudfront.net/products/11a2b820-4d2e-4ed1-a4ab-2f81f0c1516621211328.jpg', description:'No cost EMI from 1500/-, Standard EMI plans also available.',"category":"laptop"},
      {id: 1012,"title":'lenovo', price: 76000.00, image:'https://d2xamzlzrdbdbn.cloudfront.net/products/4d59cc65-e0a7-4599-9610-fe14a445a56122301245.jpg', description:'No cost EMI from 1500/-, Standard EMI plans also available.',"category":"laptop"},
      {id: 1014,"title":'Hp pevilion', price: 80000.00, image:'https://d2xamzlzrdbdbn.cloudfront.net/products/791527dd-274c-40a7-85b8-33ad4d75500c22271107.jpg', description:'No cost EMI from 1500/-, Standard EMI plans also available.',"category":"desktop"},
      {id: 1015,"title":'dell inspiron', price: 76000.00, image:'https://d2xamzlzrdbdbn.cloudfront.net/products/1a4b027b-a906-4f47-8721-57669bd06b1e22301337.jpg', description:'No cost EMI from 1500/-, Standard EMI plans also available.',"category":"desktop"},
      {id: 1016,"title":'Hp pevilion', price: 80000.00, image:'https://d2xamzlzrdbdbn.cloudfront.net/products/950387ff-b02e-45db-a560-d98ba25e313422060939.jpg', description:'No cost EMI from 1500/-, Standard EMI plans also available.',"category":"desktop"},
      {id: 1017,"title":'dell inspiron', price: 76000.00, image:'https://d2xamzlzrdbdbn.cloudfront.net/products/6a94ad6b-ae8e-4479-b6ef-cba7d0bf180922221224.jpg', description:'No cost EMI from 1500/-, Standard EMI plans also available.',"category":"desktop"},
    ];
  }

    
  ngOnInit(): void {
    this.products((res: any )=>{
      this.products = res;
      this.filterCategory = res;
  
      this.products.forEach((a: any) => {
        Object.assign(a,{quantity:1,total:a.price})
      });
    });
    this.service2.search.subscribe((val: any)=>{
      this.searchKey = val;
    })
  }

  addtocart(product : any){
    this.service2.addtoCart(product);
  }

  
  
  addcart(product : any){
    this.service.addToCart(product);
  }

 
  filter(category: string){
    this.filterCategory = this.products.filter((a: any)=>{
      if(a.category == category || category == ''){
        return a;
      }
    })
}


}
