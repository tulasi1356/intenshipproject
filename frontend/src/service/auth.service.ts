import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url='/auth/signup';
private loginurl = '/auth/login';

  constructor(private http: HttpClient,) { }
  generalsignup(details: any) {
    // console.log('details',details);
    return this.http.post<any>(this.url,details);
  }
  generallogin(details:any) {
    console.log('details',details);
    return this.http.post<any>(this.loginurl,details);
  }
}
