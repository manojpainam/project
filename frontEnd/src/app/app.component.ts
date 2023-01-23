
import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
  userEmails = new FormGroup({
    emailId: new FormControl('',[
      Validators.required,
    ])
  });
  
  userPasswords = new FormGroup({
    password: new FormControl('',[
    Validators.required
  ])
  });
   
  user: any;
  loggedIn: any;
  constructor(private authService: SocialAuthService) { }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      console.log(user);
    });
  }
    
 
  
   
}
