import { ApiConfig } from './../../config/ApiConfig';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiResponse } from 'src/app/model/ApiResponse';
import { JwtResponse } from 'src/app/model/JwtResponse';
import { User } from 'src/app/model/User';
import { UsersService } from './users.service';
import { Role } from 'src/app/model/Role';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  token!: string;

  public roles!: string[];
  role! : Role[];
  public loggedUser!: string;
  public isloggedIn: Boolean = false;
  private helper = new JwtHelperService();


  constructor(private router: Router, private http: HttpClient, private usersService: UsersService) {
  }

  logout() {
    this.isloggedIn = false;
    this.loggedUser = undefined!;
    this.roles = undefined!;
    localStorage.removeItem('loggedUser');
    localStorage.setItem('isloggedIn', String(this.isloggedIn));
    this.router.navigate(['/login']);
  }


  login(user: User) {
    //return this.http.post<User>(`${ApiConfig.users}/login`, user, { observe: 'response' });
    return this.http.post<ApiResponse<JwtResponse<User>>>(`${ApiConfig.users}/login`, user, { observe: 'response' });
  }

  saveToken(jwt: string, user: User) {
    this.token = jwt;
    this.isloggedIn = true;
    localStorage.setItem('jwt', jwt);
    localStorage.setItem('loggedUser', user.username!);
    localStorage.setItem('isloggedIn', String(this.isloggedIn));
    this.decodeJWT();
  }

  decodeJWT() {
    if (this.token == undefined)
      return;
    const decodedToken = this.helper.decodeToken(this.token);
    this.roles = decodedToken.roles;
    this.loggedUser = decodedToken.sub;
  }

  isTokenExpired(): Boolean {
    return this.helper.isTokenExpired(this.token);
  }


  loadToken() {
    //this.token = localStorage.getItem('jwt');
    //this.decodeJWT();
    const jwt = localStorage.getItem('jwt');
    if (jwt !== null) {
      this.token = jwt;
      this.decodeJWT();
    }
  }

  getToken(): string {
    return this.token;
  }

  setLoggedUserFromLocalStorage(login: string) {
    this.loggedUser = login;
    this.isloggedIn = true;
    this.getUserRoles(login);
  }

  getUserRoles(username: string) {
    this.usersService.findByUsername(username).subscribe(user =>{
      this.role = user.data.roles;
    });
  }

}
