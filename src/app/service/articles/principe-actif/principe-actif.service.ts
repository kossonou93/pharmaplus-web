import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiConfig } from 'src/app/config/ApiConfig';
import { ApiResponse } from 'src/app/model/ApiResponse';
import { PrincipeActif } from 'src/app/model/PrincipeActif';

@Injectable({
  providedIn: 'root'
})
export class PrincipeActifService {

  constructor(private http: HttpClient) { }

  all(): Observable<ApiResponse<PrincipeActif[]>>{
    return this.http.get<ApiResponse<PrincipeActif[]>>(`${ApiConfig.principe_actifs}/all`);
  }

  find(id: string): Observable<ApiResponse<PrincipeActif>>{
    return this.http.get<ApiResponse<PrincipeActif>>(`${ApiConfig.principe_actifs}/id/${id}`);
  }
}
