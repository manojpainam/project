import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent {
    
  constructor(private router: Router, private service:CustomerService){
  //   this.router.navigate(['header']);
  // 
}
header(){
  this.router.navigate(['/header'])
}


}
