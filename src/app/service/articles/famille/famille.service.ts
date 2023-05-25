import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from 'src/app/model/ApiResponse';
import { Famille } from 'src/app/model/Famille';
import { ApiConfig } from 'src/app/config/ApiConfig';

@Injectable({
  providedIn: 'root'
})
export class FamilleService {

  constructor(private http: HttpClient) { }

  all(): Observable<ApiResponse<Famille[]>>{
    return this.http.get<ApiResponse<Famille[]>>(`${ApiConfig.familles}/all`);
  }

  find(id: string): Observable<ApiResponse<Famille>>{
    return this.http.get<ApiResponse<Famille>>(`${ApiConfig.familles}/id/${id}`);
  }
}
