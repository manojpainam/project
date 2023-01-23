import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { ToastrModule } from 'ngx-toastr';
import { SocialLoginModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import {GoogleLoginProvider} from '@abacritt/angularx-social-login';
import { NgxOtpInputModule } from 'ngx-otp-input';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';




import { LandingpageComponent } from './landingpage/landingpage.component';
import { HeaderComponent } from './header/header.component';
import { LogoutComponent } from './logout/logout.component';
import { ProductsComponent } from './products/products.component';


import { FilterPipe } from './filter.pipe';
import { RequestComponent } from './request/request.component';
import { Cart2Component } from './cart2/cart2.component';
import { OtpComponent } from './otp/otp.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { DetailsComponent } from './details/details.component';
import { ServiceComponent } from './service/service.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    LandingpageComponent,
    LogoutComponent,
    ProductsComponent,
    Cart2Component,
    FilterPipe,
    RequestComponent,
    OtpComponent,
    ForgetpasswordComponent,
    DetailsComponent,
    ServiceComponent,
    
   
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    SocialLoginModule,
    NgxOtpInputModule
   
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '477691769450-4o2gvdpgm5i220aldbmlja2o2n5mh3ku.apps.googleusercontent.com'
            )
          }
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
