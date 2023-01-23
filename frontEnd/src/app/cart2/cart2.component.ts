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
    },config: {
      display: {
        blocks: {
          hdfc: { //name for HDFC block
            name: "Pay using HDFC Bank",
            instruments: [
              {
                method: "card",
                issuers: ["HDFC"]
              },
              {
                method: "netbanking",
                banks: ["HDFC"]
              },
             
  
            ]
          },
          other: { 
            name: "Other Payment modes",
            instruments: [
              {
                method: "card",
                issuers: ["ICIC"]
              },
              {
                method: 'netbanking',
              },
              {
                method: 'upi'
            },
            ]
          }
        },
        hide: [
          {
          method: "upi"
          }
        ],
        sequence: ["block.hdfc", "block.other"],
        preferences: {
          show_default_blocks: false // Should Checkout show its default blocks?
        }
      }
    },
    "handler": function (response: { razorpay_payment_id: any; }) {
      alert(response.razorpay_payment_id);
    },
    "modal": {
      "ondismiss": function () {
        if (confirm("Are you sure, you want to close the form?")) {
          alert( "You pressed OK!");
          console.log("Checkout form closed by the user");
        } else {
         alert( "You pressed Cancel!");
          console.log("Complete the Payment")
        }
      }
    }
  };

rzp1: any;
pay(){
   this.options.amount = String(this.grandTotal*100);
   this.rzp1 = new this.cartService.nativeWindow.Razorpay(this.options);
   this.rzp1.open();
}





}
