import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

import { Article } from '../models/article';

@Injectable()
export class ArticleService {
    constructor(
        private http: Http) {
    }

    getArticles(): Observable<Article[]> {
        let url = 'http://localhost:3000/api/articles';

        return this.http.get(url)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    getArticleById(id: number): Observable<Article> {
        let url = 'http://localhost:3000/api/articles/' + id;

        return this.http.get(url)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
}