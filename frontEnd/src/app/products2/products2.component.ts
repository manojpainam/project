import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-products2',
  templateUrl: './products2.component.html',
  styleUrls: ['./products2.component.css']
})
export class Products2Component implements OnInit{
public productList : any;
public filterCategory: any;
searchKey: string ="";
constructor (private api: ProjectService, private cartService : CartService){

}

  ngOnInit(): void {
    this.api.getProduct().subscribe(res=>{
      this.productList = res;
      this.filterCategory = res;

      this.productList.forEach((a: any) => {
        Object.assign(a,{quantity:1,total:a.price})
      });
    });
    this.cartService.search.subscribe((val: any)=>{
      this.searchKey = val;
    })
  }

  addtocart(item : any){
    this.cartService.addtoCart(item);
  }

  filter(category: string){
      this.filterCategory = this.productList.filter((a: any)=>{
        if(a.category == category || category == ''){
          return a;
        }
      })
  }

}
