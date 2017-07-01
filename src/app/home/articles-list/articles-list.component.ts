import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from '../../models/article';
import { ArticleService } from '../../services/index';

@Component({
    selector: 'articles-list',
    templateUrl: './articles-list.component.html',
    styleUrls: ['articles-list.component.scss']
})

export class ArticlesListComponent implements OnInit {
    articles: Article[];

    paginated: Article[];
    itemsPerPage: number = 5;


    constructor(private articleService: ArticleService,
                private router: Router) {
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
                if(this.articles)
                    this.paginateArticles(1);
            },
            err => {
                // console.log(err);
            });
    }

    sortArticlesByTime(articles: Article[]): Article[] {
        articles.sort((a, b) => {
            let A = new Date(a.date).getTime();
            let B = new Date(a.date).getTime();

            return (A > B)
                ? 1 : 0;
        });

        return articles;
    }

    /*
    * Deviding articles to itemPerPage
    */
    paginateArticles(page: number) {
        let low = (page * this.itemsPerPage) - this.itemsPerPage;
        let high = page * this.itemsPerPage;

        this.paginated = this.articles.filter(article => {
            return this.articles.indexOf(article) >= low && this.articles.indexOf(article) < high;
        });
    }

    openArticle(id: number) {
        let url = '/articles/' + id;
        this.router.navigate([url]);
    }
}