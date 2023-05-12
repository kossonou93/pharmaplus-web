import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiConfig } from 'src/app/config/ApiConfig';
import { ApiResponse } from 'src/app/model/ApiResponse';
import { Client } from 'src/app/model/Client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  all(): Observable<ApiResponse<Client[]>>{
    return this.http.get<ApiResponse<Client[]>>(`${ApiConfig.clients}/all`);
  }
}
