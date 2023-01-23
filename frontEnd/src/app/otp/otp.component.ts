import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CustomerService } from '../customer.service';


declare var jQuery: any;

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})


export class OtpComponent implements OnInit{
  otp: any;
  mail:any;
  data: any;
  constructor(private service : CustomerService,private formbuilder: FormBuilder,private router: Router, private toastr:ToastrService){

  }

  ngOnInit(): void {
    
    this.data= localStorage.getItem('otp');
    this.otp = JSON.parse(this.data);
    console.log(this.otp);
    this.data= localStorage.getItem('mail');
    this.mail = JSON.parse(this.data);
  }

  generate(){
    this.service.forgetpassword(this.mail).subscribe((data: any) =>
    {
      this.otp = data;
      console.log(data);
    }
    );
  }

  otpValid(data: any){
      console.log(data.otp);
      console.log(this.otp);
      if(data.otp==this.otp){
       
        this.router.navigate(['password']);

      }
      else{
        this.toastr.error("Invalid Otp");
      }
  }

}
