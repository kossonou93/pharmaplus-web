import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from 'src/app/model/ApiResponse';
import { Particulier } from 'src/app/model/Particulier';
import { ApiConfig } from 'src/app/config/ApiConfig';

@Injectable({
  providedIn: 'root'
})
export class ParticulierService {

  constructor(private http: HttpClient) { }

  all(): Observable<ApiResponse<Particulier[]>>{
    return this.http.get<ApiResponse<Particulier[]>>(`${ApiConfig.particuliers}/all`);
  }

  find(id: string): Observable<ApiResponse<Particulier>>{
    return this.http.get<ApiResponse<Particulier>>(`${ApiConfig.particuliers}/id/${id}`);
  }
}
