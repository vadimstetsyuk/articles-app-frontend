import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from '../../../_models/index';
import { ArticleService } from '../../../_services/index';

@Component({
    selector: 'articles-list',
    templateUrl: './articles-list.component.html',
    styleUrls: ['./articles-list.component.scss']
})

export class ArticlesListComponent implements OnInit {
    articles: Article[];

    paginated: Article[]; // articles for current page
    itemsPerPage: number = 5;


    constructor(private articleService: ArticleService,
        private router: Router) {
        this.articles = [];
    }

    ngOnInit() {
        this.getArticles();
    }

    /*
    * Get all articles
    */
    getArticles() {
        this.articleService.getArticles()
            .subscribe(articles => {
                this.articles = this.sortArticlesByTime(articles);
                if (this.articles)
                    this.paginateArticles(1);
            },
            err => {
                // console.log(err);
            });
    }

    /*
    * Sort articles by time (by recently)
    */
    sortArticlesByTime(articles: Article[]): Article[] {
        articles.sort((a, b) => {
            return new Date(b.date).getTime().toLocaleString().localeCompare(new Date(a.date).getTime().toLocaleString());
        });

        return articles;
    }

    /*
    * Devide articles to itemPerPage
    */
    paginateArticles(page: number) {
        let low = (page * this.itemsPerPage) - this.itemsPerPage;
        let high = page * this.itemsPerPage;

        this.paginated = this.articles.filter(article => {
            return this.articles.indexOf(article) >= low && this.articles.indexOf(article) < high;
        });
    }
}