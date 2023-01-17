import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { SocialLoginModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import {GoogleLoginProvider} from '@abacritt/angularx-social-login';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';




import { LandingpageComponent } from './landingpage/landingpage.component';
import { HeaderComponent } from './header/header.component';
import { LogoutComponent } from './logout/logout.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { Header2Component } from './header2/header2.component';
import { ProjectService } from './project.service';
import { Products2Component } from './products2/products2.component';
import { Cart2Component } from './cart2/cart2.component';
import { FilterPipe } from './filter.pipe';
import { RequestComponent } from './request/request.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    LandingpageComponent,
    LogoutComponent,
    ProductsComponent,
    CartComponent,
    Header2Component,
    Products2Component,
    Cart2Component,
    FilterPipe,
    RequestComponent
   
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    SocialLoginModule
   
  ],
  providers: [ProjectService,
    [
      {
        provide: 'SocialAuthServiceConfig',
        useValue: {
          autoLogin: false,
          providers: [
            {
              id: GoogleLoginProvider.PROVIDER_ID,
              provider: new GoogleLoginProvider(
                '794855718443-2qeuc893tebd1kq8gvelgvnsdeh3q8jp.apps.googleusercontent.com'
              )
            },
          ],
          onError: (err) => {
            console.error(err);
          }
        } as SocialAuthServiceConfig,
      }
    ],],
  bootstrap: [AppComponent]
})
export class AppModule { }
