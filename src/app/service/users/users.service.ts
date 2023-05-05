import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../model/User';
import { ApiResponse } from '../../model/ApiResponse';
import { ApiConfig } from 'src/app/config/ApiConfig';

const httpOptions = {
  heaers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private baseUrl = 'http://localhost:8081/pharmaplus/user';

  users: User[];

  constructor(private http: HttpClient) {
    this.users = [];
  }

  /*public getUser(user: User): Observable<ApiResponse<User>>{
    return this.http.get<ApiResponse<User>>(this.baseUrl);
  }*/

  public getUsers(): Observable<ApiResponse<User[]>>{
    return this.http.get<ApiResponse<User[]>>(`${this.baseUrl}/all`);
  }

  public deleteUser(id: string){
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete(url);
  }

  findByUsername(username: string): Observable<ApiResponse<User>>{
    return this.http.get<ApiResponse<User>>(`${ApiConfig.users}/username/${username}`);
  }

  /*public getUser(id: string): User{
    return this.users.find(u => u.id == id);
  }*/
}
