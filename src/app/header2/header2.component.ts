import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';


@Component({
  selector: 'app-header2',
  templateUrl: './header2.component.html',
  styleUrls: ['./header2.component.css']
})
export class Header2Component implements OnInit{

  constructor(private service : CustomerService,private router: Router){

  }

  ngOnInit(): void {
  }

  logout(){
    this.router.navigate(['logout']);
  }

  home(){
    this.router.navigate(['login']);
  }
}