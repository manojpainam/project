import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  
  
  isCustomerLogged : boolean;
 

  constructor(private httpClient: HttpClient) { 
    this.isCustomerLogged  = false;
  }

  // getProduct(){
  //   return this.httpClient.get<any>("https://fakestoreapi.com/products").pipe(map((res: any)=>{
  //      return res;
  //   }))
  // }

}
