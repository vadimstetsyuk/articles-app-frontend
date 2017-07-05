import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

import { Comment } from '../_models/index';
import { SERVER } from './config';

@Injectable()
export class CommentService {
    constructor(
        private http: Http) {
    }

    getComments(articleId: number): Observable<Comment[]> {
        let url = SERVER + 'comments/' + articleId;

        return this.http.get(url)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    addComment(comment: Comment) : Observable<Comment> {
        let url = SERVER + 'comments';

        let body = JSON.stringify(comment);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(url, body, options)
            .map(res => <Comment>res.json());
    }
}