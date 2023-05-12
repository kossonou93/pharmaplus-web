import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiConfig } from '../../config/ApiConfig';
import { ApiResponse } from '../../model/ApiResponse';
import { Article } from 'src/app/model/Article';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  articleId: any;

  constructor(private http: HttpClient) { }

  all(): Observable<ApiResponse<Article[]>>{
    return this.http.get<ApiResponse<Article[]>>(`${ApiConfig.articles}/undelete/all`);
  }

  add(article: Article): Observable<ApiResponse<Article>>{
    return this.http.post<ApiResponse<Article>>(`${ApiConfig.articles}/add`, article);
  }

  delete(id: string) {
    return this.http.delete(`${ApiConfig.articles}/delete/${id}`);
  }

  softDelete(id: string): Observable<ApiResponse<Article>> {
    return this.http.put<ApiResponse<Article>>(`${ApiConfig.articles}/soft/delete/${id}`, id);
  }

  update(article: Article, id: string): Observable<ApiResponse<Article>>{
    return this.http.put<ApiResponse<Article>>(`${ApiConfig.articles}/${id}`, article);
  }

  find(id: string): Observable<ApiResponse<Article>>{
    return this.http.get<ApiResponse<Article>>(`${ApiConfig.articles}/id/${id}`);
  }
}
