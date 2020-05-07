import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Admin } from '../model/admin';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private _http : HttpClient) { }

  public loginUserFromRemote(user: User):Observable<any>{
    return this._http.post("http://localhost:8989/api/login", user);
  }

  public registerUserFromRemote(user: User):Observable<any>{
    return this._http.post<any>("http://localhost:8989/api/register", user);
  }

  public getForgotPasswordFromRemote(toMailID: string):Observable<any>{
    return this._http.post<any>("http://localhost:8989/api/forgot", toMailID);
  }

  public loginAdminFromRemote(admin: Admin):Observable<any>{
    return this._http.post("http://localhost:8989/api/admin", admin);
  }

  public loggedIn(){
    return !!localStorage.getItem('token');
  }

  public adminLoggedIn(){
    return !!localStorage.getItem('adminToken');
  }
}
