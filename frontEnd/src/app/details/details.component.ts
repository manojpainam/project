import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  data: any;
  servForm: any;



  constructor(){
    this.data = localStorage.getItem('cartItems');
       this.servForm = JSON.parse(this.data);
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}