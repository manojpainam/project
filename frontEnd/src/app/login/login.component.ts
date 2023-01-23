import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CustomerService } from '../customer.service';
import { SocialAuthService } from '@abacritt/angularx-social-login';
import { GoogleApiService } from '../google-api.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  customer: any;

  constructor(private service: CustomerService, private router: Router,private toastr: ToastrService,private authService: SocialAuthService) {
   
  }
 

  async loginSubmit(loginForm: any) {
    console.log(loginForm);

      {

      await this.service.CustomerLogin(loginForm).then((data: any) => {
        this.customer = data; 
      });

      if (this.customer != null) {
          this.service.setCustomerLoggedIn();
          localStorage.setItem("emailId", JSON.stringify(loginForm.emailId));
          // this.toastr.success('Login success')
          this.router.navigate(['products']);
      } else {
         this.toastr.warning('invalid credentials');
      }

    }

  }

  user: any;
  loggedIn: any;
  


  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      console.log(this.user);
    });
  }

  
}
  




