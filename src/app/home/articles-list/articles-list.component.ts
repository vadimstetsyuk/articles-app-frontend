import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article';
import { ArticleService } from '../../services/index';

@Component({
    selector: 'articles-list',
    templateUrl: './articles-list.component.html',
    styleUrls: ['articles-list.component.scss']
})

export class ArticlesListComponent implements OnInit {
    articles: Article[];

    constructor(private articleService: ArticleService) {
        this.articles = [];
    }

    ngOnInit() {
        this.getArticles();
    }

    /*
    * Get all companies from server
    */
    getArticles() {
        this.articleService.getArticles()
            .subscribe(articles => {
                this.articles = this.sortArticlesByTime(articles);
            },
            err => {
                // console.log(err);
            });
    }

    sortArticlesByTime(articles: Article[]) : Article[] {
        articles.sort((a, b) => {
            let A = new Date(a.date).getTime();
            let B = new Date(a.date).getTime();
            
            return (A > B)
                ? 1 : 0;
        });

        return articles;
    }
}