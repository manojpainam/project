import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit{

  RequestInfo: any;

  constructor(private servive :CustomerService){

  }

  Request(servForm: any){
    console.log(
      this.servive.ProblemRegister(servForm).subscribe((result: any)=>{
        this.RequestInfo = result;
      })
    )

  }
  ngOnInit(): void {
    
  }

}
