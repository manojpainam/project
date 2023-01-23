import { HttpClientModule } from '@angular/common/http';
import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HeaderComponent } from './header/header.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


import { Cart2Component } from './cart2/cart2.component';
import { RequestComponent } from './request/request.component';
import { ProductsComponent } from './products/products.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { OtpComponent } from './otp/otp.component';
import { DetailsComponent } from './details/details.component';
import { ServiceComponent } from './service/service.component';



const routes: Routes = [
  // {path:'' , redirectTo:'products2',pathMatch:'full'},
  {path:'', component:LandingpageComponent},
  {path:'landingpage', component:LandingpageComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'header', component:HeaderComponent},
  {path:'products',canActivate:[AuthGuard], component:ProductsComponent},
  {path:'cart2',component:Cart2Component},
  {path:'request',component:RequestComponent},
  {path:'forgetpassword', component:ForgetpasswordComponent},
  {path:'otp', component:OtpComponent},
  {path:'details', component:DetailsComponent},
  {path:'service', component:ServiceComponent}




];

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)],
    
  exports: [RouterModule]
})
export class AppRoutingModule { }
