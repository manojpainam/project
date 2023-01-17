import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CustomerService } from '../customer.service';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
onStrengthChange($event: Event) {
throw new Error('Method not implemented.');
}
   
  registerForm: FormGroup;
  registerInfo: any;
  countries: any;


  constructor(private service: CustomerService,private formbuilder:FormBuilder, private router:Router,private toastr: ToastrService){
    this.registerForm = this.formbuilder.group({
      custId:new FormControl(''),
      custName:new FormControl(''),
      gender: new FormControl(''),
      doj:new FormControl(''),
      country:new  FormControl(''),
      emailId : new FormControl('',Validators.compose([Validators.required,Validators.email])),
      password : new FormControl('',Validators.required),
      confirmpassword : new FormControl('',Validators.required)
    },
    {
      validators:this.mustMatch('password','confirmpassword')
    }
    );

  }
  
   
  ngOnInit(): void {
    this.service.getAllCountries().subscribe((data: any) => {this.countries = data; console.log(data);});
  }

  register(customer: any){
    this.service.registerCustomer(customer).subscribe((result: any) =>{
      this.registerInfo = result; 
      console.log(result);
      this.toastr.success("registration succesful");
    });
    this.router.navigate(['login']);
    
  }
   
  get f(){
    return this.registerForm.controls;
  }

  mustMatch(password : any, confirmpassword : any)
  {
     return(formGroup: FormGroup) => {
       const passwordc = formGroup.controls[password];
       const confirmpasswordc = formGroup.controls[confirmpassword];

       if(passwordc.value !== confirmpasswordc.value)
       {
        confirmpasswordc.setErrors({mustMatch : true});
       }else{
        confirmpasswordc.setErrors(null);
       }
     }
  }
  
}
