import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart2',
  templateUrl: './cart2.component.html',
  styleUrls: ['./cart2.component.css']
})
export class Cart2Component implements OnInit {
  public product : any = [];
  public grandTotal : number = 0;

  constructor(private cartService: CartService){
     
  }
  ngOnInit(): void {
    this.cartService.getProducts().subscribe(res=>{
      this.product = res;

      this.grandTotal = this.cartService.getTotalPrice();
    })
  }
  removeItem(item : any){
    this.cartService.removeCartItem(item);
  }

  emptycart(){
    this.cartService.removeAllCart();
  }

}
