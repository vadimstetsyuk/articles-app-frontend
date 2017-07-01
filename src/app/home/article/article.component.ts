import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Article } from '../../models/article';
import { ArticleService } from '../../services/index';

@Component({
    selector: 'article',
    templateUrl: './article.component.html',
    styleUrls: ['article.component.scss']
})

export class ArticleComponent implements OnInit {
    currentArticle: Article;

    constructor(private router: Router,
        private route: ActivatedRoute,
        private location: Location,
        private articleService: ArticleService) {
            this.currentArticle = <Article>{};
    }

    ngOnInit() {
        this.getProductsDataById(this.getCurrentId());
    }

    getProductsDataById(id: number) {
        this.articleService.getArticleById(id)
            .subscribe(
            article => this.currentArticle = article,
            err => {
                console.log(err);
            });
    }

    getCurrentId(): any {
        let id;
        this.route.params.forEach(param => {
            id = parseInt(param['id']);
        });

        return id;
    }

    goBack() {
        this.router.navigate(['articles']);
    }
}