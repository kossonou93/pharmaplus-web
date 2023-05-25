import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from 'src/app/model/ApiResponse';
import { Entreprise } from 'src/app/model/Entreprise';
import { ApiConfig } from 'src/app/config/ApiConfig';

@Injectable({
  providedIn: 'root'
})
export class EntrepriseService {

  constructor(private http: HttpClient) { }

  all(): Observable<ApiResponse<Entreprise[]>>{
    return this.http.get<ApiResponse<Entreprise[]>>(`${ApiConfig.entreprises}/all`);
  }

  find(id: string): Observable<ApiResponse<Entreprise>>{
    return this.http.get<ApiResponse<Entreprise>>(`${ApiConfig.entreprises}/id/${id}`);
  }
}
