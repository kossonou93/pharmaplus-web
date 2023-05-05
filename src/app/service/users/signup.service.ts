import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/User';

const httpOptions = {
  heaers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  private baseUrl = 'http://localhost:8081/pharmaplus/user/add';

  constructor(private http: HttpClient) { }

  public registerUser(user: User): Observable<User>{
    return this.http.post<User>(this.baseUrl, user);
  }
}
