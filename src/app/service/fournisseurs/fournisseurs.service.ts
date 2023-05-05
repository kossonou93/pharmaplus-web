import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiConfig } from '../../config/ApiConfig';
import { ApiResponse } from '../../model/ApiResponse';
import { Fournisseur } from 'src/app/model/Fournisseur';

@Injectable({
  providedIn: 'root'
})
export class FournisseursService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<ApiResponse<Fournisseur[]>>{
    return this.http.get<ApiResponse<Fournisseur[]>>(`${ApiConfig.fournisseurs}/all`);
  }

  find(id: string): Observable<ApiResponse<Fournisseur>>{
    return this.http.get<ApiResponse<Fournisseur>>(`${ApiConfig.fournisseurs}/id/${id}`);
  }
}
