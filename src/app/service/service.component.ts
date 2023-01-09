import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective } from '@angular/forms';
import { CustomerService } from '../customer.service';


@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  serviceForm: FormGroup;
  ServiceInfo: any;

  
  constructor(private service: CustomerService,private formbuilder:FormBuilder){
     this.serviceForm = this.formbuilder.group({

     })
  }
  
  ngOnInit(): void {
    
  }

  Custservice(data: any){
    this.service.SubmitRequest(data).subscribe((result: any)=>{
      this.ServiceInfo = result;
      console.log(this.serviceForm);
    });
  }

}
