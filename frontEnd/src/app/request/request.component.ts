import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit{

  RequestInfo: any;

  constructor(private servive :CustomerService,private router:Router){

  }

  Request(servForm: any){
    console.log(
      this.servive.ProblemRegister(servForm).subscribe((result: any)=>{
        this.RequestInfo = result;
      })
    )
    localStorage.setItem('cartItems', JSON.stringify(servForm));
    console.log(servForm);
    this.router.navigate(['service']);

  }
  ngOnInit(): void {
    
  }

}
