import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { ToastrService } from 'ngx-toastr/toastr/toastr.service';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-service2',
  templateUrl: './service2.component.html',
  styleUrls: ['./service2.component.css']
})
export class Service2Component {
  ServiceForm: FormGroup;
  serviceInfo: any;
 

  constructor(private service: CustomerService,private formbuilder:FormBuilder, private router:Router){
    this.ServiceForm = this.formbuilder.group({
      
    },
   
    );

  }
  
   
  ngOnInit(): void {
   
  }

  Service(data: any){
    this.service.SubmitRequest(data).subscribe((result: any) =>{
      this.serviceInfo = result; 
      console.log(result);
      // this.toastr.success("problem registered  succesfully!!");
      alert('problem registed successfully');
    });
    this.router.navigate(['login']);
    
  }
   
  
  
}
