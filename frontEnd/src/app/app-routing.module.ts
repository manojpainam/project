import { HttpClientModule } from '@angular/common/http';
import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CartComponent } from './cart/cart.component';
import { HeaderComponent } from './header/header.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { ServiceComponent } from './service/service.component';
import { Service2Component } from './service2/service2.component';

const routes: Routes = [
  {path:'', component:LandingpageComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'header', component:HeaderComponent},
  {path:'products',canActivate:[AuthGuard], component:ProductsComponent},
  {path:'cart',component:CartComponent},
  {path:'service', component:ServiceComponent},
  {path:'service2',component:Service2Component}
];

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
