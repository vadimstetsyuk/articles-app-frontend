import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

import { Article } from '../_models/index';
import { SERVER } from './config';

@Injectable()
export class ArticleService {
    constructor(
        private http: Http) {
    }

    getArticles(): Observable<Article[]> {
        let url = SERVER + 'articles';

        return this.http.get(url)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    getArticleById(id: number): Observable<Article> {
        let url = SERVER + 'articles/' + id;

        return this.http.get(url)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
}