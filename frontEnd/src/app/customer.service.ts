import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  isCustomerLogged : boolean;
  loginStatus : Subject<any>;
  cartItems : any;
  ProductToBeAdded: Subject<any> ;
 
  constructor(private httpClient: HttpClient) { 
    this.isCustomerLogged = false;
    this.loginStatus = new Subject();
    this.ProductToBeAdded = new Subject();
  }

  getAllCountries(){
    return this.httpClient.get('https://restcountries.com/v3.1/all')
  }

  getLoginStatus(){
    return this.loginStatus.asObservable();
  }

  setCustomerLoggedIn(){
    this.isCustomerLogged = true;
    this.loginStatus.next(this.isCustomerLogged);
  }

  setCustomerLoggedOut(){
    this.isCustomerLogged = false;
    this.loginStatus.next(this.isCustomerLogged);
    this.ProductToBeAdded = new Subject();
   }


  getCustomerLogged(): boolean{
    return this.isCustomerLogged;
  }

  registerCustomer(cust: any) {
    return this.httpClient.post('registerCustomer', cust);
  }

  CustomerLogin(customer: any) {
    return this.httpClient.get('customerLogin/' + customer.emailId + "/" + customer.password).toPromise();
  }

  addToCart(product : any){
    this.cartItems.push(product);
   this.ProductToBeAdded.next(product);
  }

  getCartStatus(): any{
    return this.ProductToBeAdded.asObservable();
  }

  ProblemRegister(problem: any){
    return this.httpClient.post('ProblemRegister', problem);
  }

  forgetpassword(mail: any){
    return this.httpClient.get("forgetPassword/"+mail.emailId);
  }

}
