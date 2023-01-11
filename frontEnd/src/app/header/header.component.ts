import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CustomerService } from '../customer.service';
import { CartService } from '../cart.service';

declare var jQuery: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit{
  loginStatus : any;
  customer: any;
  registerForm: FormGroup;
  registerInfo: any;
  countries: any;
  cartItems: any;
  
public totalItems: number = 0;
public searchTerm : string = '';


  constructor(private service: CustomerService,private formbuilder: FormBuilder ,private router: Router, private toastr: ToastrService,private cartService: CartService) {
    this.registerForm = this.formbuilder.group({
      custId:new FormControl(''),
      custName:new FormControl(''),
      gender: new FormControl(''),
      doj:new FormControl(''),
      country:new  FormControl(''),
      emailId : new FormControl('',Validators.compose([Validators.required,Validators.email])),
      password : new FormControl('',Validators.required),
      conpassword : new FormControl('',Validators.required)
    },
    {
      Validators:this.mustMatch('password','conformpassword')
    }
    );

  }
  ngOnInit(): void {
   this.service.getLoginStatus().subscribe((data: any) =>{
    this.loginStatus = data;
   });

   this.service.getAllCountries().subscribe((data: any) => {this.countries = data; console.log(data);});

   this.service.getCartStatus().subscribe((data: any)=>{
    this.cartItems.push(data);
   })
  
 this.service.getLoginStatus().subscribe((data:any)=>{
  this.loginStatus = data;
 });

 this.cartService.getProducts().subscribe(res=>{
     this.totalItems = res.length;
 })

  }
  
  search(event : any){
     this.searchTerm = (event.target as HTMLInputElement).value;
     console.log(this.searchTerm);
     this.cartService.search.next(this.searchTerm);
  }

  register(customer: any){
   
    this.service.registerCustomer(customer).subscribe((result: any) => {this.registerInfo = result; console.log(result);
    
    console.log(result);});
  }

    
  get f(){
    return this.registerForm.controls;
  }

  mustMatch(password : any, conformpassword : any)
  {
     return(formGroup: FormGroup) => {
       const passwordc = formGroup.controls[password];
       const conformpasswordc = formGroup.controls[conformpassword];

       if(passwordc.value !== conformpasswordc.value)
       {
        conformpasswordc.setErrors({mustMatch : true});
       }else{
        conformpasswordc.setErrors(null);
       }
     }
  }
  async loginSubmit(loginForm: any) {
    console.log(loginForm);

      {

      await this.service.CustomerLogin(loginForm).then((data: any) => {
        this.customer = data; 
      });

      if (this.customer != null) {
          this.service.setCustomerLoggedIn();
          localStorage.setItem("emailId", JSON.stringify(loginForm.emailId));
          this.router.navigate(['products']);
      } else {
       this.toastr.warning('invalid credentials');
      }

    }

  }
  
  

}
