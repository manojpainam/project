import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CustomerService } from '../customer.service';


declare var jQuery: any;

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit{
  mail: any;
  otp: any;

  user: any;

  constructor(private service : CustomerService,private formbuilder: FormBuilder,private router: Router, private toastr:ToastrService){

  }

  ngOnInit(): void {
    
  }



  loginSubmit(mail:any){
    this.mail = mail;
    this.service.forgetpassword(mail).subscribe((data: any) =>
    {

      console.log(data);
      if(data!=null){
        this.otp=data;
      localStorage.setItem('otp',JSON.stringify(this.otp));
      console.log(this.otp);
     

      localStorage.setItem('mail',JSON.stringify(mail));
      this.router.navigate(['otp']);
    }

    }

    );

  }




}

