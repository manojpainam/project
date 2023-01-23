import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';
import { Observable, Subject } from 'rxjs';


const oAuthConfig: AuthConfig ={
  issuer: 'https://accounts.google.com',
  strictDiscoveryDocumentValidation: false,

  clientId:'758009736366-ibh66b140jtekuhknagi7srat9tddo8f.apps.googleusercontent.com',
  scope:'openid profile email'

}
export interface UserInfo{
  info:{
    sub: string
    email:string,
    name:string,
    picture:string
  }
}

@Injectable({
  providedIn: 'root'
})
export class GoogleApiService {
  gmail = 'https://gmail.googleapis.com'

  userProfileSubject = new Subject<UserInfo>()

  constructor(private readonly oAuthService: OAuthService, private readonly httpClient: HttpClient) {


  }

  login(){
    this.oAuthService.configure (oAuthConfig);

    this.oAuthService.logoutUrl = "https://www.google.com/accounts/Logout";


    this.oAuthService.loadDiscoveryDocument().then( () => {

     this.oAuthService.tryLoginImplicitFlow().then( () => {


        if (!this.oAuthService.hasValidAccessToken()) {
          this.oAuthService.initLoginFlow()
        } else {
          this.oAuthService.loadUserProfile().then( (userProfile) => {
            this.userProfileSubject.next(userProfile as UserInfo)
          })
        }

      })
    });
  }

  emails(userId: string): Observable<any> {
    return this.httpClient.get(`${this.gmail}/gmail/v1/users/${userId}/messages`, { headers: this.authHeader() })
  }

  getMail(userId: string, mailId: string): Observable<any> {
    return this.httpClient.get(`${this.gmail}/gmail/v1/users/${userId}/messages/${mailId}`, { headers: this.authHeader() })
  }

  isLoggedIn(): boolean {
    return this.oAuthService.hasValidAccessToken()
  }

  signOut() {
    this.oAuthService.logOut()
  }

  private authHeader() : HttpHeaders {
    return new HttpHeaders ({
      'Authorization': `Bearer ${this.oAuthService.getAccessToken()}`
    })
  }
}
