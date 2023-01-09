import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  
  
  isCustomerLogged : boolean;
  httpClient: any;

  constructor(private HttpClient: HttpClient) { 
    this.isCustomerLogged  = false;
  }

}
