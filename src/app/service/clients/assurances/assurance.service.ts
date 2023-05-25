import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Assurance } from 'src/app/model/Assurance';
import { ApiResponse } from 'src/app/model/ApiResponse';
import { ApiConfig } from 'src/app/config/ApiConfig';

@Injectable({
  providedIn: 'root'
})
export class AssuranceService {

  constructor(private http: HttpClient) { }

  all(): Observable<ApiResponse<Assurance[]>>{
    return this.http.get<ApiResponse<Assurance[]>>(`${ApiConfig.assurances}/all`);
  }

  find(id: string): Observable<ApiResponse<Assurance>>{
    return this.http.get<ApiResponse<Assurance>>(`${ApiConfig.assurances}/id/${id}`);
  }
}
