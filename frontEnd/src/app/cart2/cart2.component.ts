import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart2',
  templateUrl: './cart2.component.html',
  styleUrls: ['./cart2.component.css']
})
export class Cart2Component implements OnInit {
  //public product : any = [];
    grandTotal: any;
    cartItems: any= [];
    product:any;
   
  constructor(private cartService: CartService){
     this.grandTotal = 0;
  }
  ngOnInit(): void {
    this.cartService.getProducts().subscribe(res=>{
      this.product = res;
    });

    this.cartItems = this.cartService.cartItemList;
    this.cartItems.forEach((product: any) => {
      this.grandTotal+=Number(product.price);
      
    });

    
    
  }
  removeItem(item : any){
    this.cartService.removeCartItem(item);
    this.grandTotal-=Number(item.price);
  }

  emptycart(){
    this.cartService.removeAllCart();
  }

  options = {
    "key": "rzp_test_7HdkaZ1xFGPomB",
    "amount": "50000", 
    "currency": "INR",
    "name": "Eserve",
    "description": "Test Transaction",
    "image": "assets/images/2.png",
    "order_id": "", 
    "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
    "prefill": {
        "name": "manoj",
        "email": "maojpainam1221@gmail.com",
        "contact": "6309170308"
    },
    "notes": {
        "address": "Razorpay Corporate Office"
    },
    "theme": {
        "color": "#3399cc"
    }
};

rzp1: any;
pay(){
   this.options.amount = String(this.grandTotal*100);
   this.rzp1 = new this.cartService.nativeWindow.Razorpay(this.options);
   this.rzp1.open();
}





}
