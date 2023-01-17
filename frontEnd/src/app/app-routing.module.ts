import { HttpClientModule } from '@angular/common/http';
import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CartComponent } from './cart/cart.component';
import { HeaderComponent } from './header/header.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Products2Component } from './products2/products2.component';
import { Cart2Component } from './cart2/cart2.component';
import { RequestComponent } from './request/request.component';


const routes: Routes = [
  // {path:'' , redirectTo:'products2',pathMatch:'full'},
  {path:'', component:LandingpageComponent},
  {path:'landingpage', component:LandingpageComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'header', component:HeaderComponent},
  {path:'products2',canActivate:[AuthGuard], component:Products2Component},
  {path:'cart',component:CartComponent},
  {path:'cart2',component:Cart2Component},
  {path:'request',component:RequestComponent}


];

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)],
    
  exports: [RouterModule]
})
export class AppRoutingModule { }
