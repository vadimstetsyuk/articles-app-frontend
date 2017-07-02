import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Article, Comment } from '../../_models/index';
import { ArticleService, CommentService } from '../../_services/index';

@Component({
    selector: 'article',
    templateUrl: './article.component.html',
    styleUrls: ['article.component.scss']
})

export class ArticleComponent implements OnInit {
    comments: Comment[];
    currentArticle: Article;
    articleId: number;

    constructor(private router: Router,
                private route: ActivatedRoute,
                private articleService: ArticleService,
                private commentService: CommentService) {
        this.currentArticle = <Article>{};
        this.comments = [];

        // Check current article id
        this.route.params.forEach(param => {
            this.articleId = parseInt(param['id']);
        });
    }

    ngOnInit() {
        this.getCurrentArticle();
        this.getComments();
    }

    /*
    * Get current article 
    */
    getCurrentArticle() {
        this.articleService.getArticleById(this.articleId)
            .subscribe(
            (article) => {
                // If article doesn't exist
                if(article == null) this.goBack();

                this.currentArticle = article;
            },
            err => {
                console.log(err);
            });
    }

    /*
    * Get comments for the article
    */
    getComments() {
        this.commentService.getComments(this.articleId)
            .subscribe(
            comments => this.comments = comments,
            err => {
                console.log(err);
            });
    }

    /*
    * Go to articles list
    */
    goBack() {
        this.router.navigate(['articles']);
    }
}