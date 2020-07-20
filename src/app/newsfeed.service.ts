import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from '../domain/article';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsfeedService {
  constructor(private http: HttpClient) {}

  getLatestArticles(
    count: number = 0,
    lastArticleId: number = 0
  ): Observable<Array<Article>> {
    if (lastArticleId <= 0)
      return this.http.get<Array<Article>>(
        `http://localhost:5000/api/newsfeed/?count=${count}`
      );
    return this.http.get<Array<Article>>(
      `http://localhost:5000/api/newsfeed/?count=${count}&lowestArticleId=${lastArticleId}`
    );
  }

  searchArticles(searchKeyword: string) {
    return this.http.get<Array<Article>>(
      `http://localhost:5000/api/newsfeed/search?title=${searchKeyword}`
    );
  }
}
