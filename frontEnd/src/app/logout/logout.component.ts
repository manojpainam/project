import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private service: CustomerService,private router: Router){

  }
  ngOnInit(): void {
    this.service.setCustomerLoggedOut();
    this.router.navigate(['header']);
  }


}
