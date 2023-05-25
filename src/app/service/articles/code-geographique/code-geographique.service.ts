import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiConfig } from 'src/app/config/ApiConfig';
import { ApiResponse } from 'src/app/model/ApiResponse';
import { CodeGeographique } from 'src/app/model/CodeGeographique';

@Injectable({
  providedIn: 'root'
})
export class CodeGeographiqueService {

  constructor(private http: HttpClient) { }

  all(): Observable<ApiResponse<CodeGeographique[]>>{
    return this.http.get<ApiResponse<CodeGeographique[]>>(`${ApiConfig.principe_actifs}/all`);
  }

  find(id: string): Observable<ApiResponse<CodeGeographique>>{
    return this.http.get<ApiResponse<CodeGeographique>>(`${ApiConfig.principe_actifs}/id/${id}`);
  }
}
