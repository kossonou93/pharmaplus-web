import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiConfig } from '../../config/ApiConfig';
import { ApiResponse } from '../../model/ApiResponse';
import { Categorie } from 'src/app/model/Categorie';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<ApiResponse<Categorie[]>>{
    return this.http.get<ApiResponse<Categorie[]>>(`${ApiConfig.categories}/all`);
  }

  find(id: string): Observable<ApiResponse<Categorie>>{
    return this.http.get<ApiResponse<Categorie>>(`${ApiConfig.categories}/id/${id}`);
  }
}
